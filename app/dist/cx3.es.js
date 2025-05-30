var Df = Object.defineProperty, Tf = Object.defineProperties;
var Bf = Object.getOwnPropertyDescriptors;
var uu = Object.getOwnPropertySymbols;
var Pf = Object.prototype.hasOwnProperty, Ff = Object.prototype.propertyIsEnumerable;
var du = (e, t, n) => t in e ? Df(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, pe = (e, t) => {
  for (var n in t || (t = {}))
    Pf.call(t, n) && du(e, n, t[n]);
  if (uu)
    for (var n of uu(t))
      Ff.call(t, n) && du(e, n, t[n]);
  return e;
}, He = (e, t) => Tf(e, Bf(t));
var b = (e, t, n) => new Promise((o, s) => {
  var a = (u) => {
    try {
      c(n.next(u));
    } catch (d) {
      s(d);
    }
  }, i = (u) => {
    try {
      c(n.throw(u));
    } catch (d) {
      s(d);
    }
  }, c = (u) => u.done ? o(u.value) : Promise.resolve(u.value).then(a, i);
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
    CdxMessage: c,
    CdxTabs: u,
    CdxTab: d
  } = require("../codex.js");
  window.Codex = {
    CdxButton: e,
    CdxIcon: t,
    CdxDialog: n,
    CdxInfoChip: o,
    CdxSearchInput: s,
    CdxTextInput: a,
    CdxMenu: i,
    CdxMessage: c,
    CdxTabs: u,
    CdxTab: d
  };
}
const ae = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, Mf = {
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
}, Nf = window.Vue.toDisplayString, Gi = window.Vue.openBlock, Xi = window.Vue.createElementBlock, Uf = window.Vue.createCommentVNode, gu = window.Vue.createElementVNode, If = window.Vue.normalizeClass, Rf = ["width", "height", "aria-labelledby"], zf = ["id"], Of = ["fill"], jf = ["d"];
function Hf(e, t, n, o, s, a) {
  return Gi(), Xi("span", {
    class: If(["mw-ui-icon notranslate", a.classes])
  }, [
    (Gi(), Xi("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...i) => a.handleClick && a.handleClick(...i))
    }, [
      n.iconName ? (Gi(), Xi("title", {
        key: 0,
        id: n.iconName
      }, Nf(n.iconName), 9, zf)) : Uf("", !0),
      gu("g", { fill: n.iconColor }, [
        gu("path", { d: a.iconImagePath }, null, 8, jf)
      ], 8, Of)
    ], 8, Rf))
  ], 2);
}
const Re = /* @__PURE__ */ ae(Mf, [["render", Hf]]);
const qf = {
  name: "MwButton",
  components: {
    MwIcon: Re
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
}, Gf = window.Vue.renderSlot, Xf = window.Vue.resolveComponent, pu = window.Vue.normalizeClass, la = window.Vue.openBlock, Wi = window.Vue.createBlock, Ki = window.Vue.createCommentVNode, Wf = window.Vue.toDisplayString, Kf = window.Vue.createElementBlock, Yf = window.Vue.toHandlerKey, Jf = window.Vue.withModifiers, Qf = window.Vue.mergeProps, Zf = window.Vue.createElementVNode, ew = window.Vue.resolveDynamicComponent, tw = window.Vue.withCtx, nw = { class: "mw-ui-button__content" }, ow = ["textContent"];
function sw(e, t, n, o, s, a) {
  const i = Xf("mw-icon");
  return la(), Wi(ew(a.component), {
    class: pu(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: tw(() => [
      Gf(e.$slots, "default", {}, () => [
        Zf("span", nw, [
          n.icon ? (la(), Wi(i, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: pu(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : Ki("", !0),
          !a.isIcon && n.label ? (la(), Kf("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: Wf(n.label)
          }, null, 8, ow)) : Ki("", !0),
          n.indicator ? (la(), Wi(i, Qf({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [Yf(a.indicatorClickEvent)]: t[0] || (t[0] = Jf((c) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : Ki("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const Ue = /* @__PURE__ */ ae(qf, [["render", sw]]);
const aw = {
  name: "MwButtonGroup",
  components: {
    MwButton: Ue
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
}, iw = window.Vue.renderList, rw = window.Vue.Fragment, Yi = window.Vue.openBlock, mu = window.Vue.createElementBlock, lw = window.Vue.resolveComponent, cw = window.Vue.withModifiers, uw = window.Vue.mergeProps, dw = window.Vue.createBlock, gw = { class: "row mw-ui-button-group ma-0 pa-0" };
function pw(e, t, n, o, s, a) {
  const i = lw("mw-button");
  return Yi(), mu("div", gw, [
    (Yi(!0), mu(rw, null, iw(n.items, (c) => (Yi(), dw(i, uw({
      key: c.value,
      value: c.value,
      "aria-selected": a.isActive(c) || null,
      ref_for: !0
    }, c.props, {
      class: ["ma-0", a.buttonClasses(c)],
      style: a.activeIndicatorStyle(c),
      onClick: cw((u) => e.$emit("select", c.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const Gs = /* @__PURE__ */ ae(aw, [["render", pw]]);
const hw = {
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
}, hu = window.Vue.renderSlot, fw = window.Vue.toDisplayString, fu = window.Vue.openBlock, wu = window.Vue.createElementBlock, ww = window.Vue.createCommentVNode, _w = window.Vue.createElementVNode, vw = { class: "mw-ui-card" }, Sw = ["textContent"], yw = { class: "mw-ui-card__content" };
function xw(e, t, n, o, s, a) {
  return fu(), wu("div", vw, [
    hu(e.$slots, "header", {}, () => [
      n.title ? (fu(), wu("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: fw(n.title)
      }, null, 8, Sw)) : ww("", !0)
    ]),
    _w("div", yw, [
      hu(e.$slots, "default")
    ])
  ]);
}
const ot = /* @__PURE__ */ ae(hw, [["render", xw]]);
const Cw = {}, bw = window.Vue.openBlock, kw = window.Vue.createElementBlock, $w = { class: "mw-ui-divider row" };
function Vw(e, t) {
  return bw(), kw("div", $w);
}
const Ci = /* @__PURE__ */ ae(Cw, [["render", Vw]]);
const Ew = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, Lw = window.Vue.renderSlot, Aw = window.Vue.resolveDynamicComponent, Dw = window.Vue.withCtx, Tw = window.Vue.openBlock, Bw = window.Vue.createBlock;
function Pw(e, t, n, o, s, a) {
  return Tw(), Bw(Aw(n.tag), { class: "mw-grid container" }, {
    default: Dw(() => [
      Lw(e.$slots, "default")
    ]),
    _: 3
  });
}
const Fw = /* @__PURE__ */ ae(Ew, [["render", Pw]]), Mw = {
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
}, Nw = window.Vue.renderSlot, Uw = window.Vue.resolveDynamicComponent, Iw = window.Vue.normalizeClass, Rw = window.Vue.withCtx, zw = window.Vue.openBlock, Ow = window.Vue.createBlock;
function jw(e, t, n, o, s, a) {
  return zw(), Ow(Uw(n.tag), {
    class: Iw(a.classes)
  }, {
    default: Rw(() => [
      Nw(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const F = /* @__PURE__ */ ae(Mw, [["render", jw]]), ic = ["mobile", "tablet", "desktop", "desktop-wide"], Hw = ic.reduce(
  (e, t) => He(pe({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), qw = {
  name: "MwCol",
  props: He(pe({}, Hw), {
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
      for (let n = 0; n < ic.length; n++) {
        let o = ic[n], s = this.$props[o];
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
}, Gw = window.Vue.renderSlot, Xw = window.Vue.resolveDynamicComponent, Ww = window.Vue.normalizeClass, Kw = window.Vue.withCtx, Yw = window.Vue.openBlock, Jw = window.Vue.createBlock;
function Qw(e, t, n, o, s, a) {
  return Yw(), Jw(Xw(n.tag), {
    class: Ww(a.classes)
  }, {
    default: Kw(() => [
      Gw(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const x = /* @__PURE__ */ ae(qw, [["render", Qw]]), Zw = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", e0 = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", bi = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", t0 = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, n0 = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", Em = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", o0 = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", s0 = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", Xs = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", a0 = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", i0 = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", r0 = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", _u = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", l0 = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", Lm = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", c0 = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", u0 = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", d0 = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", g0 = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", p0 = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", m0 = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, vi = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, h0 = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, Am = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, f0 = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, Dm = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", w0 = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z";
const Ji = window.Vue.computed, _0 = window.Vue.watch, v0 = window.Vue.ref, S0 = window.Vue.nextTick, y0 = {
  name: "MwDialog",
  components: {
    MwButton: Ue,
    MwRow: F,
    MwCol: x,
    MwDivider: Ci
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
     * Color mode of the overlay
     * @values light, dark
     **/
    overlayMode: {
      type: String,
      default: "light",
      validator: (e) => ["light", "dark"].includes(e)
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
    const n = v0(null), o = Ji(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = Ji(
      () => `mw-ui-dialog__overlay--${e.overlayMode}`
    ), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, i = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    _0(
      () => e.value,
      (u) => {
        u ? (i(), S0(() => {
          n.value.focus();
        })) : a();
      }
    );
    const c = Ji(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: c,
      overlayClass: s,
      mwIconClose: Xs,
      root: n
    };
  }
}, vu = window.Vue.normalizeClass, Qi = window.Vue.createElementVNode, Zi = window.Vue.renderSlot, ca = window.Vue.resolveComponent, Oo = window.Vue.createVNode, er = window.Vue.withCtx, Su = window.Vue.createCommentVNode, x0 = window.Vue.withKeys, yu = window.Vue.openBlock, C0 = window.Vue.createElementBlock, b0 = window.Vue.Transition, k0 = window.Vue.normalizeStyle, $0 = window.Vue.createBlock, V0 = { class: "mw-ui-dialog__shell items-stretch" }, E0 = { class: "mw-ui-dialog__body" };
function L0(e, t, n, o, s, a) {
  const i = ca("mw-col"), c = ca("mw-button"), u = ca("mw-row"), d = ca("mw-divider");
  return yu(), $0(b0, {
    name: "mw-ui-animation-fade",
    style: k0(o.cssVars)
  }, {
    default: er(() => [
      n.value ? (yu(), C0("div", {
        key: 0,
        ref: "root",
        class: vu(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = x0((r) => n.closeOnEscapeKey && o.close(), ["esc"]))
      }, [
        Qi("div", {
          class: vu(["mw-ui-dialog__overlay", o.overlayClass]),
          onClick: t[0] || (t[0] = (r) => !n.persistent && o.close())
        }, null, 2),
        Qi("div", V0, [
          n.header ? Zi(e.$slots, "header", { key: 0 }, () => [
            Oo(u, { class: "mw-ui-dialog__header" }, {
              default: er(() => [
                Oo(i, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                Oo(i, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: er(() => [
                    Oo(c, {
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
            Oo(d)
          ]) : Su("", !0),
          Qi("div", E0, [
            Zi(e.$slots, "default")
          ]),
          Zi(e.$slots, "footer")
        ])
      ], 34)) : Su("", !0)
    ]),
    _: 3
  }, 8, ["style"]);
}
const St = /* @__PURE__ */ ae(y0, [["render", L0]]);
const A0 = {
  name: "MwInput",
  components: {
    MwIcon: Re
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
      const t = pe({}, e.$attrs);
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
}, xu = window.Vue.renderSlot, D0 = window.Vue.resolveComponent, ua = window.Vue.openBlock, tr = window.Vue.createBlock, Cu = window.Vue.createCommentVNode, T0 = window.Vue.resolveDynamicComponent, B0 = window.Vue.toDisplayString, P0 = window.Vue.mergeProps, F0 = window.Vue.withModifiers, M0 = window.Vue.createElementVNode, N0 = window.Vue.normalizeClass, U0 = window.Vue.createElementBlock, I0 = { class: "mw-ui-input__content" };
function R0(e, t, n, o, s, a) {
  const i = D0("mw-icon");
  return ua(), U0("div", {
    class: N0(a.classes),
    onClick: t[2] || (t[2] = (c) => a.focus())
  }, [
    M0("div", I0, [
      xu(e.$slots, "icon", {}, () => [
        n.icon ? (ua(), tr(i, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : Cu("", !0)
      ]),
      (ua(), tr(T0(n.type === "textarea" ? n.type : "input"), P0({
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
        textContent: B0(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      xu(e.$slots, "indicator", {}, () => [
        n.indicator ? (ua(), tr(i, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = F0((c) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : Cu("", !0)
      ])
    ])
  ], 2);
}
const rc = /* @__PURE__ */ ae(A0, [["render", R0]]);
const z0 = {
  name: "MwMessage",
  components: { MwCol: x, MwRow: F, MwIcon: Re, MwButton: Ue },
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
    mwIconClose: Xs,
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
      notice: m0,
      warning: Am,
      success: vi,
      error: h0
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
}, nr = window.Vue.renderSlot, da = window.Vue.resolveComponent, bu = window.Vue.createVNode, ku = window.Vue.withCtx, $u = window.Vue.openBlock, Vu = window.Vue.createBlock, Eu = window.Vue.createCommentVNode, O0 = window.Vue.normalizeClass;
function j0(e, t, n, o, s, a) {
  const i = da("mw-icon"), c = da("mw-col"), u = da("mw-button"), d = da("mw-row");
  return e.shown ? ($u(), Vu(d, {
    key: 0,
    class: O0([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: ku(() => [
      nr(e.$slots, "icon", {}, () => [
        bu(i, {
          icon: a.icon,
          size: 24,
          class: "col shrink mw-ui-message__icon pa-1 items-start"
        }, null, 8, ["icon"])
      ]),
      bu(c, {
        id: `${e.id}-label`,
        tag: "span",
        grow: "",
        align: "center",
        class: "mw-ui-message__label"
      }, {
        default: ku(() => [
          nr(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id"]),
      nr(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? ($u(), Vu(u, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : Eu("", !0)
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : Eu("", !0);
}
const H0 = /* @__PURE__ */ ae(z0, [["render", j0]]);
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
const q0 = {}, G0 = window.Vue.createElementVNode, X0 = window.Vue.openBlock, W0 = window.Vue.createElementBlock, K0 = { class: "mw-ui-spinner" }, Y0 = /* @__PURE__ */ G0("div", { class: "mw-ui-spinner__bounce" }, null, -1), J0 = [
  Y0
];
function Q0(e, t) {
  return X0(), W0("div", K0, J0);
}
const st = /* @__PURE__ */ ae(q0, [["render", Q0]]), ft = {
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
const Z0 = window.Vue.computed, e1 = {
  name: "MwUiThumbnail",
  components: { MwUiIcon: Re },
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
      default: Dm
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: ft.gray600
    },
    placeholderBackgroundColor: {
      type: String,
      default: ft.gray200
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = Z0(() => {
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
}, Lu = window.Vue.normalizeStyle, Au = window.Vue.openBlock, t1 = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const n1 = window.Vue.resolveComponent, o1 = window.Vue.createBlock;
function s1(e, t, n, o, s, a) {
  const i = n1("mw-ui-icon");
  return n.thumbnail ? (Au(), t1("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Lu(o.style)
  }, null, 4)) : (Au(), o1(i, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Lu(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const kc = /* @__PURE__ */ ae(e1, [["render", s1]]);
const a1 = {
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
}, i1 = window.Vue.vModelRadio, _i = window.Vue.createElementVNode, r1 = window.Vue.withDirectives, l1 = window.Vue.toDisplayString, c1 = window.Vue.resolveComponent, u1 = window.Vue.normalizeClass, d1 = window.Vue.withCtx, g1 = window.Vue.openBlock, p1 = window.Vue.createBlock, m1 = { class: "mw-ui-radio__controls" }, h1 = ["id", "disabled", "name", "value"], f1 = /* @__PURE__ */ _i("span", { class: "mw-ui-radio__controls__icon" }, null, -1), w1 = ["for", "textContent"];
function _1(e, t, n, o, s, a) {
  const i = c1("mw-row");
  return g1(), p1(i, {
    class: u1(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: d1(() => [
      _i("div", m1, [
        r1(_i("input", {
          id: n.id,
          "onUpdate:modelValue": t[0] || (t[0] = (c) => a.inputModel = c),
          type: "radio",
          disabled: n.disabled || null,
          name: n.name,
          value: n.inputValue
        }, null, 8, h1), [
          [i1, a.inputModel]
        ]),
        f1
      ]),
      _i("label", {
        for: n.id,
        class: "ps-2",
        textContent: l1(n.label)
      }, null, 8, w1)
    ]),
    _: 1
  }, 8, ["class"]);
}
const lc = /* @__PURE__ */ ae(a1, [["render", _1]]), Du = window.Vue.h, v1 = {
  name: "MwRadioGroup",
  components: { MwRadio: lc },
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
      (o) => Du(lc, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), Du("div", { class: "mw-ui-radio-group" }, n);
  }
};
const S1 = {
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
}, Tu = window.Vue.normalizeClass, Bu = window.Vue.normalizeStyle, y1 = window.Vue.createElementVNode, x1 = window.Vue.openBlock, C1 = window.Vue.createElementBlock, b1 = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function k1(e, t, n, o, s, a) {
  return x1(), C1("div", {
    class: Tu(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: Bu(a.containerStyles)
  }, [
    y1("div", {
      class: Tu(["mw-progress-bar__bar", a.barClass]),
      style: Bu(a.barStyles)
    }, null, 6)
  ], 14, b1);
}
const Tm = /* @__PURE__ */ ae(S1, [["render", k1]]), $1 = (e, t, n, o) => (s) => {
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
  }, u = () => {
    n.value.style.height === t.value + "px" && (n.value.style.removeProperty("height"), o.value = !0), document.documentElement.removeEventListener(
      "pointermove",
      c,
      !1
    ), document.documentElement.removeEventListener(
      "pointerup",
      u,
      !1
    );
  };
  document.documentElement.addEventListener("pointermove", c, !1), document.documentElement.addEventListener("pointerup", u, !1);
}, V1 = (e, t, n, o) => ({ initiateDrag: $1(
  e,
  t,
  n,
  o
) }), E1 = window.Vue.ref, Pu = window.Vue.computed, L1 = (e, t, n, o) => {
  const s = E1(0), a = Pu(
    () => t.value > e.value
  ), i = Pu(
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
const ga = window.Vue.ref, A1 = window.Vue.onMounted, Fu = window.Vue.computed, D1 = window.Vue.nextTick, T1 = {
  name: "MwExpandableContent",
  components: {
    MwButton: Ue
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
    const t = ga(!0), n = ga(null), o = Fu(
      () => Math.min(e.minHeight, s.value)
    ), s = ga(1), { initiateDrag: a } = V1(
      s,
      o,
      n,
      t
    ), {
      isScrolledToEnd: i,
      scrollable: c,
      scrollIndex: u,
      scrollToStepByIndex: d,
      handleArrowUpClick: r
    } = L1(o, s, n, t), l = () => d(u.value + 1), g = ga(null), p = Fu(() => ({
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
    return A1(() => b(this, null, function* () {
      var f;
      yield D1(), s.value = n.value.scrollHeight, (f = g.value) == null || f.addEventListener(
        "pointerdown",
        a,
        !1
      ), window.addEventListener("resize", m);
    })), {
      contentRef: n,
      cssVars: p,
      dragIndicatorRef: g,
      handleArrowUpClick: r,
      isCollapsed: t,
      isScrolledToEnd: i,
      mwIconCollapse: f0,
      mwIconExpand: o0,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), d(0)), t.value = !t.value;
      },
      scrollable: c,
      scrollIndex: u,
      scrollToNextStep: l
    };
  }
}, B1 = window.Vue.renderSlot, P1 = window.Vue.normalizeClass, pa = window.Vue.createElementVNode, F1 = window.Vue.resolveComponent, M1 = window.Vue.createVNode, or = window.Vue.openBlock, N1 = window.Vue.createBlock, Mu = window.Vue.createCommentVNode, Nu = window.Vue.createElementBlock, U1 = window.Vue.normalizeStyle, I1 = { class: "mw-ui-expandable-content__container" }, R1 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, z1 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function O1(e, t, n, o, s, a) {
  const i = F1("mw-button");
  return or(), Nu("div", {
    class: "mw-ui-expandable-content",
    style: U1(o.cssVars)
  }, [
    pa("div", I1, [
      pa("div", {
        ref: "contentRef",
        class: P1(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        B1(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (or(), Nu("div", R1, [
        M1(i, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (or(), N1(i, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : Mu("", !0)
      ])) : Mu("", !0)
    ]),
    pa("div", z1, [
      pa("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...c) => o.onDragButtonClicked && o.onDragButtonClicked(...c))
      })
    ], 512)
  ], 4);
}
const j1 = /* @__PURE__ */ ae(T1, [["render", O1]]);
const ma = window.Vue.computed, H1 = {
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
      default: ft.blue600
    },
    inactiveColor: {
      type: String,
      default: ft.gray300
    },
    strokeWidth: {
      type: Number,
      default: 2
    }
  },
  setup(e) {
    const t = ma(() => e.size / 2 * 0.9), n = ma(() => Math.PI * (t.value * 2)), o = ma(
      () => (100 - e.percentage) / 100 * n.value
    ), s = ma(() => ({
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
}, Uu = window.Vue.createElementVNode, Iu = window.Vue.normalizeStyle, q1 = window.Vue.openBlock, G1 = window.Vue.createElementBlock, X1 = ["width", "height", "viewport"], W1 = ["r", "cx", "cy", "stroke-dasharray"], K1 = ["r", "cx", "cy", "stroke-dasharray"];
function Y1(e, t, n, o, s, a) {
  return q1(), G1("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: Iu(o.cssVars)
  }, [
    Uu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, W1),
    Uu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: Iu({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, K1)
  ], 12, X1);
}
const J1 = /* @__PURE__ */ ae(H1, [["render", Y1]]), Q1 = window.Vue.ref, mn = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, Sn = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${mn.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${mn.tablet}px) and (max-width: ${mn.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${mn.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${mn.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${mn["desktop-wide"] - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${mn.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${mn["desktop-wide"]}px)`
}, sr = {
  mobile: () => matchMedia(Sn.mobile).matches,
  tablet: () => matchMedia(Sn.tablet).matches,
  desktop: () => matchMedia(Sn.desktop).matches,
  desktopwide: () => matchMedia(Sn["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(Sn["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(Sn["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(Sn["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(Sn["desktop-and-down"]).matches
}, Z1 = (e) => {
  const t = Object.values(mn);
  for (let n = 0; n < t.length; n++)
    if (e < t[n])
      return t[n];
  return null;
}, e_ = {
  install: (e) => {
    const t = Q1({
      nextBreakpoint: null
    }), n = () => {
      const o = window.innerWidth;
      for (let s in sr)
        sr.hasOwnProperty(s) && (t.value[s] = sr[s]());
      t.value.nextBreakpoint = Z1(o);
    };
    n(), window.addEventListener("resize", n), e.config.globalProperties.$mwui = He(pe({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: t.value
    }), e.provide("breakpoints", t);
  }
}, t_ = {
  install: (e) => {
    e.config.globalProperties.$mwui = He(pe({}, e.config.globalProperties.$mwui || {}), {
      colors: ft
    }), e.provide("colors", ft);
  }
};
class Bo extends Error {
}
const n_ = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new Bo();
}), Bm = { assertUser: n_ };
const o_ = window.Vue.resolveDirective, jo = window.Vue.createElementVNode, Ru = window.Vue.withDirectives, s_ = window.Vue.toDisplayString, a_ = window.Vue.unref, zu = window.Vue.withCtx, i_ = window.Vue.openBlock, r_ = window.Vue.createBlock, l_ = window.Vue.createCommentVNode, c_ = { class: "pa-4 sx-login-dialog__header" }, u_ = { class: "sx-login-dialog__body px-6 pb-4" }, d_ = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, g_ = ["href"], p_ = window.Vue.computed, m_ = window.Vue.ref, h_ = window.Vuex.useStore, f_ = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = h_(), n = p_(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = m_(mw.util.getUrl("Special:UserLogin"));
    return (a, i) => {
      const c = o_("i18n");
      return n.value ? (i_(), r_(a_(St), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: zu(() => [
          jo("div", c_, [
            Ru(jo("h4", null, null, 512), [
              [c, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: zu(() => [
          Ru(jo("div", u_, null, 512), [
            [c, void 0, "cx-sx-login-dialog-body"]
          ]),
          jo("div", d_, [
            jo("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, s_(a.$i18n("cx-sx-login-dialog-button-label")), 9, g_)
          ])
        ]),
        _: 1
      })) : l_("", !0);
    };
  }
}, J = new mw.cx.SiteMapper(), w_ = mw.util.getUrl, __ = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
}, Ws = !mw.config.get("wgMFMode");
class ki {
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
    status: u,
    targetTitle: d
  }) {
    this.translationId = t, this.sourceTitle = n, this.sourceLanguage = o, this.targetLanguage = s, this.startTimestamp = a, this.lastUpdatedTimestamp = i, this.pageRevision = c, this.status = u, this.targetTitle = d;
  }
}
const ha = "original", fa = "empty", v_ = {
  Elia: "Elia.eus",
  Google: "Google Translate",
  Yandex: "Yandex.Translate"
};
class se {
  /**
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string[]} providers
   */
  constructor(t, n, o = []) {
    this.sourceLanguage = t, this.targetLanguage = n, this.providers = [
      ...o,
      ha,
      fa
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return v_[t] || t;
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
    return ha;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return fa;
  }
  static isUserMTProvider(t) {
    return [ha, fa].includes(
      t
    );
  }
  static getProviderForInstrumentation(t) {
    return t === fa ? "blank" : t === ha ? "source" : t.toLowerCase();
  }
}
class Mn {
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = He(pe({}, a), {
      [se.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [se.EMPTY_TEXT_PROVIDER_KEY]: ""
    }), this.selected = i;
  }
  reset() {
    this.proposedTranslations = {
      [se.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalContent,
      [se.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedContent = "", this.mtProviderUsed = "", this.selected = !1;
  }
  /**
   * @return {string}
   */
  get originalContent() {
    return this.proposedTranslations[se.ORIGINAL_TEXT_PROVIDER_KEY];
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
const Ou = (e) => {
  var n;
  const t = Si(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, Si = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, eo = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), Pm = (e) => {
  const t = Si(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = S_(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, S_ = (e) => {
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
}, Fm = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, Mm = (e) => {
  const t = Fm(e);
  return t == null ? void 0 : t.targetExists;
};
class ar {
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
class nt {
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
    s && Mm(s) && (this.blockTemplateAdaptationInfo[t] = Fm(s));
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
    const t = Si(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? Ou(this.transclusionNode) : null;
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
    return n && Ou(n) || "";
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
    const o = Si(n);
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
      new ar({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new ar({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new ar({
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
    if (!t || se.isUserMTProvider(t))
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
const y_ = [
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
], x_ = (e, t, n) => {
  let o, s, a, i, c;
  return !e || !t ? 0 : e === t ? 1 : (s = i = ju(e, n), a = c = ju(t, n), c.length > i.length && (s = c, a = i), o = s.filter(function(u) {
    return a.indexOf(u) >= 0;
  }), o.length / s.length);
}, ju = function(e, t) {
  return e ? y_.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, $c = mw.config.get(
  "wgContentTranslationUnmodifiedMTThresholdForPublish",
  95
), C_ = $c - 10, b_ = [
  { status: "failure", value: 100 - $c },
  { status: "warning", value: 100 - C_ },
  { status: "success", value: 100 }
], Nm = (e, t, n) => {
  const o = Hu(e).textContent, s = Hu(t).textContent, a = 100 - 100 * x_(s, o, n);
  return Math.ceil(a);
}, k_ = (e) => b_.find((t) => e <= t.value).status, $_ = (e, t) => Nm(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), V_ = () => (100 - $c) / 100, Hu = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, Xt = {
  calculateScore: Nm,
  getScoreStatus: k_,
  getMTScoreForPageSection: $_,
  getMtModificationThreshold: V_
}, wa = "__LEAD_SECTION__";
class cc {
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
      [se.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [se.EMPTY_TEXT_PROVIDER_KEY]: ""
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
      [se.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalTitle,
      [se.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedTitle = "", this.subSections.forEach((t) => t.reset());
  }
  static get LEAD_SECTION_DUMMY_TITLE() {
    return wa;
  }
  static isSectionLead(t) {
    return !t || t === wa;
  }
  set originalTitle(t) {
    this.proposedTitleTranslations[se.ORIGINAL_TEXT_PROVIDER_KEY] = t;
  }
  /**
   * @return {string}
   */
  get originalTitle() {
    return this.proposedTitleTranslations[se.ORIGINAL_TEXT_PROVIDER_KEY];
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
    return n instanceof nt ? n.transclusionNode.outerHTML : n instanceof Mn ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof nt ? t.blockTemplateSelected = !1 : t instanceof Mn && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof nt ? n.blockTemplateSelected = !0 : n instanceof Mn && (n.selected = !0);
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
    if (o instanceof nt)
      return !!o.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (o instanceof Mn)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof nt ? n.blockTemplateProposedTranslations[t] || "" : n instanceof Mn ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof nt ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof Mn && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const o = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, s = Xt.getMTScoreForPageSection(this, t) / 100;
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
    return this.isLeadSection ? wa : this.originalTitle;
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
    return this.isLeadSection ? wa : this.title;
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
class Vc extends ki {
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
    lastUpdatedTimestamp: u,
    status: d,
    pageRevision: r,
    targetTitle: l,
    sourceSectionTitle: g,
    targetSectionTitle: p,
    progress: m
  }) {
    super({
      translationId: n,
      sourceTitle: s,
      sourceLanguage: a,
      targetLanguage: i,
      startTimestamp: c,
      lastUpdatedTimestamp: u,
      pageRevision: r,
      status: d,
      targetTitle: l
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
    return cc.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? cc.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const Pt = "previous-edits", Wt = "popular", Ne = "topic", ht = "geography", le = "collections", wt = "automatic", _t = "seed", qu = window.Vue.ref, E_ = mw.loader.require("ext.cx.articletopics"), _a = {
  type: wt,
  id: Pt
}, Ec = () => {
  const e = qu(
    E_.flatMap((s) => s.topics).map((s) => s.topicId.toLowerCase())
  ), t = qu(!1);
  return { filtersValidatorError: t, validateFilters: ({ type: s, id: a }, i = !1) => {
    t.value = !1;
    const c = s == null ? void 0 : s.toLowerCase(), u = a == null ? void 0 : a.toLowerCase();
    if (u === Pt)
      return {
        type: wt,
        id: Pt
      };
    if (u === Wt)
      return {
        type: wt,
        id: Wt
      };
    try {
      if (c === Ne) {
        if (!e.value.some((d) => d === a))
          throw new Error();
        return { type: c, id: u };
      } else if (c === le) {
        if (i && !i.some((d) => d.name.toLowerCase() === u))
          throw new Error();
        return { type: c, id: a };
      } else if (u === le) {
        if (i && !i.length)
          throw new Error();
        return {
          type: wt,
          id: le
        };
      } else if (c === _t)
        return { type: c, id: a };
    } catch (d) {
      return t.value = !0, _a;
    }
    return _a;
  }, isDefaultFilter: ({ type: s, id: a }) => s === _a.type && a === _a.id };
}, L_ = window.Vue.inject, A_ = window.Vue.reactive;
var D_ = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, Um = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(D_, function() {
    var n = { ar: "٠١٢٣٤٥٦٧٨٩", fa: "۰۱۲۳۴۵۶۷۸۹", ml: "൦൧൨൩൪൫൬൭൮൯", kn: "೦೧೨೩೪೫೬೭೮೯", lo: "໐໑໒໓໔໕໖໗໘໙", or: "୦୧୨୩୪୫୬୭୮୯", kh: "០១២៣៤៥៦៧៨៩", nqo: "߀߁߂߃߄߅߆߇߈߉", pa: "੦੧੨੩੪੫੬੭੮੯", gu: "૦૧૨૩૪૫૬૭૮૯", hi: "०१२३४५६७८९", my: "၀၁၂၃၄၅၆၇၈၉", ta: "௦௧௨௩௪௫௬௭௮௯", te: "౦౧౨౩౪౫౬౭౮౯", th: "๐๑๒๓๔๕๖๗๘๙", bo: "༠༡༢༣༤༥༦༧༨༩" }, o = { ab: ["ru"], abs: ["id"], ace: ["id"], ady: ["ady-cyrl"], aeb: ["aeb-arab"], "aeb-arab": ["ar"], aln: ["sq"], alt: ["ru"], ami: ["zh-hant"], an: ["es"], anp: ["hi"], arn: ["es"], arq: ["ar"], ary: ["ar"], arz: ["ar"], ast: ["es"], atj: ["fr"], av: ["ru"], avk: ["fr", "es", "ru"], awa: ["hi"], ay: ["es"], azb: ["fa"], ba: ["ru"], ban: ["id"], "ban-bali": ["ban"], bar: ["de"], bbc: ["bbc-latn"], "bbc-latn": ["id"], bcc: ["fa"], "be-tarask": ["be"], bgn: ["fa"], bh: ["bho"], bi: ["en"], bjn: ["id"], bm: ["fr"], bpy: ["bn"], bqi: ["fa"], br: ["fr"], btm: ["id"], bug: ["id"], bxr: ["ru"], ca: ["oc"], "cbk-zam": ["es"], cdo: ["nan", "zh-hant"], ce: ["ru"], co: ["it"], crh: ["crh-latn"], "crh-cyrl": ["ru"], cs: ["sk"], csb: ["pl"], cv: ["ru"], "de-at": ["de"], "de-ch": ["de"], "de-formal": ["de"], dsb: ["hsb", "de"], dtp: ["ms"], dty: ["ne"], egl: ["it"], eml: ["it"], "en-ca": ["en"], "en-gb": ["en"], "es-419": ["es"], "es-formal": ["es"], ext: ["es"], ff: ["fr"], fit: ["fi"], frc: ["fr"], frp: ["fr"], frr: ["de"], fur: ["it"], gag: ["tr"], gan: ["gan-hant", "zh-hant", "zh-hans"], "gan-hans": ["zh-hans"], "gan-hant": ["zh-hant", "zh-hans"], gcr: ["fr"], gl: ["pt"], glk: ["fa"], gn: ["es"], gom: ["gom-deva"], "gom-deva": ["hi"], gor: ["id"], gsw: ["de"], guc: ["es"], hak: ["zh-hant"], hif: ["hif-latn"], hrx: ["de"], hsb: ["dsb", "de"], ht: ["fr"], "hu-formal": ["hu"], hyw: ["hy"], ii: ["zh-cn", "zh-hans"], inh: ["ru"], io: ["eo"], iu: ["ike-cans"], jam: ["en"], jut: ["da"], jv: ["id"], kaa: ["kk-latn", "kk-cyrl"], kab: ["fr"], kbd: ["kbd-cyrl"], kbp: ["fr"], khw: ["ur"], kiu: ["tr"], kjp: ["my"], kk: ["kk-cyrl"], "kk-arab": ["kk-cyrl"], "kk-cn": ["kk-arab", "kk-cyrl"], "kk-kz": ["kk-cyrl"], "kk-latn": ["kk-cyrl"], "kk-tr": ["kk-latn", "kk-cyrl"], kl: ["da"], "ko-kp": ["ko"], koi: ["ru"], krc: ["ru"], krl: ["fi"], ks: ["ks-arab"], ksh: ["de"], ku: ["ku-latn"], "ku-arab": ["ckb"], kum: ["ru"], kv: ["ru"], lad: ["es"], lb: ["de"], lbe: ["ru"], lez: ["ru", "az"], li: ["nl"], lij: ["it"], liv: ["et"], lki: ["fa"], lld: ["it", "rm", "fur"], lmo: ["pms", "eml", "lij", "vec", "it"], ln: ["fr"], lrc: ["fa"], ltg: ["lv"], luz: ["fa"], lzh: ["zh-hant"], lzz: ["tr"], mad: ["id"], mai: ["hi"], "map-bms": ["jv", "id"], mdf: ["myv", "ru"], mg: ["fr"], mhr: ["mrj", "ru"], min: ["id"], mnw: ["my"], mo: ["ro"], mrj: ["mhr", "ru"], "ms-arab": ["ms"], mwl: ["pt"], myv: ["mdf", "ru"], mzn: ["fa"], nah: ["es"], nan: ["cdo", "zh-hant"], nap: ["it"], nb: ["nn"], nds: ["de"], "nds-nl": ["nl"], nia: ["id"], "nl-informal": ["nl"], nn: ["nb"], nrm: ["fr"], oc: ["ca", "fr"], olo: ["fi"], os: ["ru"], pcd: ["fr"], pdc: ["de"], pdt: ["de"], pfl: ["de"], pih: ["en"], pms: ["it"], pnt: ["el"], pt: ["pt-br"], "pt-br": ["pt"], qu: ["qug", "es"], qug: ["qu", "es"], rgn: ["it"], rmy: ["ro"], "roa-tara": ["it"], rue: ["uk", "ru"], rup: ["ro"], ruq: ["ruq-latn", "ro"], "ruq-cyrl": ["mk"], "ruq-latn": ["ro"], sa: ["hi"], sah: ["ru"], scn: ["it"], sco: ["en"], sdc: ["it"], sdh: ["cbk", "fa"], ses: ["fr"], sg: ["fr"], sgs: ["lt"], sh: ["bs", "sr-el", "hr"], shi: ["fr"], shy: ["shy-latn"], "shy-latn": ["fr"], sk: ["cs"], skr: ["skr-arab"], "skr-arab": ["ur", "pnb"], sli: ["de"], smn: ["fi"], sr: ["sr-ec"], srn: ["nl"], stq: ["de"], sty: ["ru"], su: ["id"], szl: ["pl"], szy: ["zh-tw", "zh-hant", "zh-hans"], tay: ["zh-tw", "zh-hant", "zh-hans"], tcy: ["kn"], tet: ["pt"], tg: ["tg-cyrl"], trv: ["zh-tw", "zh-hant", "zh-hans"], tt: ["tt-cyrl", "ru"], "tt-cyrl": ["ru"], ty: ["fr"], tyv: ["ru"], udm: ["ru"], ug: ["ug-arab"], vec: ["it"], vep: ["et"], vls: ["nl"], vmf: ["de"], vot: ["fi"], vro: ["et"], wa: ["fr"], wo: ["fr"], wuu: ["zh-hans"], xal: ["ru"], xmf: ["ka"], yi: ["he"], za: ["zh-hans"], zea: ["nl"], zgh: ["kab"], zh: ["zh-hans"], "zh-cn": ["zh-hans"], "zh-hant": ["zh-hans"], "zh-hk": ["zh-hant", "zh-hans"], "zh-mo": ["zh-hk", "zh-hant", "zh-hans"], "zh-my": ["zh-sg", "zh-hans"], "zh-sg": ["zh-hans"], "zh-tw": ["zh-hant", "zh-hans"] };
    class s {
      constructor(l) {
        this.locale = l;
      }
      convertPlural(l, g) {
        const p = /\d+=/i;
        if (!g || g.length === 0)
          return "";
        for (let h = 0; h < g.length; h++) {
          const f = g[h];
          if (p.test(f)) {
            if (parseInt(f.slice(0, f.indexOf("=")), 10) === l)
              return f.slice(f.indexOf("=") + 1);
            g[h] = void 0;
          }
        }
        g = g.filter((h) => !!h);
        let m = this.getPluralForm(l, this.locale);
        return m = Math.min(m, g.length - 1), g[m];
      }
      getPluralForm(l, g) {
        const p = new Intl.PluralRules(g), m = p.resolvedOptions().pluralCategories, h = p.select(l);
        return ["zero", "one", "two", "few", "many", "other"].filter((f) => m.includes(f)).indexOf(h);
      }
      convertNumber(l, g = !1) {
        let p = this.digitTransformTable(this.locale), m = "";
        if (g) {
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
      convertGrammar(l, g) {
        return l;
      }
      gender(l, g) {
        if (!g || g.length === 0)
          return "";
        for (; g.length < 2; )
          g.push(g[g.length - 1]);
        return l === "male" ? g[0] : l === "female" ? g[1] : g.length === 3 ? g[2] : g[0];
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
        let g = r.match(/[aou][^äöy]*$/i);
        const p = r;
        switch (r.match(/wiki$/i) && (g = !1), r.match(/[bcdfghjklmnpqrstvwxz]$/i) && (r += "i"), l) {
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
        let g, p, m, h;
        switch (g = "мæ", p = "", m = "", h = "", r.match(/тæ$/i) ? (r = r.slice(0, -1), g = "æм") : r.match(/[аæеёиоыэюя]$/i) ? p = "й" : r.match(/у$/i) ? r.slice(-2, -1).match(/[аæеёиоыэюя]$/i) || (p = "й") : r.match(/[бвгджзйклмнопрстфхцчшщьъ]$/i) || (m = "-"), l) {
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
      emit(l, g) {
        let p, m, h;
        switch (typeof l) {
          case "string":
          case "number":
            p = l;
            break;
          case "object":
            if (m = l.slice(1).map((f) => this.emit(f, g)), h = l[0].toLowerCase(), typeof this[h] != "function")
              throw new Error('unknown operation "' + h + '"');
            p = this[h](m, g);
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
        let g = "";
        return l.forEach((p) => {
          g += p;
        }), g;
      }
      replace(l, g) {
        const p = parseInt(l[0], 10);
        return p < g.length ? g[p] : "$" + (p + 1);
      }
      plural(l) {
        const g = parseFloat(this.language.convertNumber(l[0], 10)), p = l.slice(1);
        return p.length ? this.language.convertPlural(g, p) : "";
      }
      gender(l) {
        const g = l[0], p = l.slice(1);
        return this.language.gender(g, p);
      }
      grammar(l) {
        const g = l[0], p = l[1];
        return p && g && this.language.convertGrammar(p, g);
      }
      wikilink(l) {
        let g, p = l[0];
        p.charAt(0) === ":" && (p = p.slice(1));
        const m = `./${p}`;
        return g = l.length === 1 ? p : l[1], `<a href="${m}" title="${p}">${g}</a>`;
      }
      extlink(l) {
        if (l.length !== 2)
          throw new Error("Expected two items in the node");
        return `<a href="${l[0]}">${l[1]}</a>`;
      }
      bidi(l) {
        const g = function(p) {
          const m = p.match(i);
          return m ? m[2] === void 0 ? "ltr" : "rtl" : null;
        }(l[0]);
        return g === "ltr" ? "‪" + l[0] + "‬" : g === "rtl" ? "‫" + l[0] + "‬" : l[0];
      }
      formatnum(l) {
        const g = !!l[1] && l[1] === "R", p = l[0];
        return typeof p == "string" || typeof p == "number" ? this.language.convertNumber(p, g) : p;
      }
      htmlattributes(l) {
        const g = {};
        for (let p = 0, m = l.length; p < m; p += 2)
          g[l[p]] = l[p + 1];
        return g;
      }
      htmlelement(l) {
        const g = l.shift(), p = l.shift();
        let m = l, h = "";
        for (const f in p)
          h += ` ${f}="${p[f]}"`;
        return Array.isArray(m) || (m = [m]), `<${g}${h}>${m.join("")}</${g}>`;
      }
    }
    class u {
      constructor(l, { wikilinks: g = !1 } = {}) {
        this.locale = l, this.wikilinks = g, this.emitter = new c(this.locale);
      }
      parse(l, g) {
        if (l.includes("{{") || l.includes("<") || this.wikilinks && l.includes("[")) {
          const p = function(m, { wikilinks: h = !1 } = {}) {
            let f = 0;
            function _(V) {
              return () => {
                for (let R = 0; R < V.length; R++) {
                  const je = V[R]();
                  if (je !== null)
                    return je;
                }
                return null;
              };
            }
            function w(V) {
              const R = f, je = [];
              for (let Kt = 0; Kt < V.length; Kt++) {
                const Yt = V[Kt]();
                if (Yt === null)
                  return f = R, null;
                je.push(Yt);
              }
              return je;
            }
            function y(V, R) {
              return () => {
                const je = f, Kt = [];
                let Yt = R();
                for (; Yt !== null; )
                  Kt.push(Yt), Yt = R();
                return Kt.length < V ? (f = je, null) : Kt;
              };
            }
            function C(V) {
              const R = V.length;
              return () => {
                let je = null;
                return m.slice(f, f + R) === V && (je = V, f += R), je;
              };
            }
            function v(V) {
              return () => {
                const R = m.slice(f).match(V);
                return R === null ? null : (f += R[0].length, R[0]);
              };
            }
            const E = v(/^\s+/), L = C("|"), k = C(":"), T = C("\\"), ie = v(/^./), H = C("$"), X = v(/^\d+/), Z = C('"'), be = C("'"), xe = v(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), Xe = v(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), fe = _([Ce, v(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function Ce() {
              const V = w([T, ie]);
              return V === null ? null : V[1];
            }
            const We = _([Ce, Xe]), P = _([Ce, xe]);
            function z() {
              const V = w([H, X]);
              return V === null ? null : ["REPLACE", parseInt(V[1], 10) - 1];
            }
            const j = (N = v(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), q = function(V) {
              return V.toString();
            }, () => {
              const V = N();
              return V === null ? null : q(V);
            });
            var N, q;
            function W() {
              const V = w([L, y(0, aa)]);
              if (V === null)
                return null;
              const R = V[1];
              return R.length > 1 ? ["CONCAT"].concat(R) : R[0];
            }
            function K() {
              const V = w([j, k, z]);
              return V === null ? null : [V[0], V[2]];
            }
            function S() {
              const V = w([j, k, aa]);
              return V === null ? null : [V[0], V[2]];
            }
            function D() {
              const V = w([j, k]);
              return V === null ? null : [V[0], ""];
            }
            const A = _([function() {
              const V = w([_([K, S, D]), y(0, W)]);
              return V === null ? null : V[0].concat(V[1]);
            }, function() {
              const V = w([j, y(0, W)]);
              return V === null ? null : [V[0]].concat(V[1]);
            }]), M = C("{{"), G = C("}}"), re = C("[["), O = C("]]"), U = C("["), te = C("]");
            function ee() {
              const V = w([M, A, G]);
              return V === null ? null : V[1];
            }
            const ne = _([function() {
              const V = w([y(1, aa), L, y(1, sa)]);
              return V === null ? null : [["CONCAT"].concat(V[0]), ["CONCAT"].concat(V[2])];
            }, function() {
              const V = w([y(1, aa)]);
              return V === null ? null : [["CONCAT"].concat(V[0])];
            }]);
            function oa() {
              let V = null;
              const R = w([re, ne, O]);
              if (R !== null) {
                const je = R[1];
                V = ["WIKILINK"].concat(je);
              }
              return V;
            }
            function Oe() {
              let V = null;
              const R = w([U, y(1, kf), E, y(1, sa), te]);
              return R !== null && (V = ["EXTLINK", R[1].length === 1 ? R[1][0] : ["CONCAT"].concat(R[1]), ["CONCAT"].concat(R[3])]), V;
            }
            const Ri = v(/^[A-Za-z]+/);
            function yf() {
              const V = v(/^[^"]*/), R = w([Z, V, Z]);
              return R === null ? null : R[1];
            }
            function xf() {
              const V = v(/^[^']*/), R = w([be, V, be]);
              return R === null ? null : R[1];
            }
            function Cf() {
              const V = v(/^\s*=\s*/), R = w([E, Ri, V, _([yf, xf])]);
              return R === null ? null : [R[1], R[3]];
            }
            function bf() {
              const V = y(0, Cf)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], V);
            }
            const kf = _([ee, z, oa, Oe, function() {
              const V = y(1, fe)();
              return V === null ? null : V.join("");
            }]), sa = _([ee, z, oa, Oe, function() {
              let V = null;
              const R = f, je = C("<"), Kt = v(/^\/?/), Yt = v(/^\s*>/), zi = w([je, Ri, bf, Kt, Yt]);
              if (zi === null)
                return null;
              const iu = f, ru = zi[1], Oi = y(0, sa)(), $f = f, lu = w([C("</"), Ri, Yt]);
              if (lu === null)
                return ["CONCAT", m.slice(R, iu)].concat(Oi);
              const Vf = f, Ef = lu[1], cu = zi[2];
              if (function(Rn, ia, ji, Hi = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((Rn = Rn.toLowerCase()) !== (ia = ia.toLowerCase()) || Hi.allowedHtmlElements.indexOf(Rn) === -1)
                  return !1;
                const Lf = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let ra = 0, Af = ji.length; ra < Af; ra += 2) {
                  const qi = ji[ra];
                  if (Hi.allowedHtmlCommonAttributes.indexOf(qi) === -1 && (Hi.allowedHtmlAttributesByElement[Rn] || []).indexOf(qi) === -1 || qi === "style" && ji[ra + 1].search(Lf) !== -1)
                    return !1;
                }
                return !0;
              }(ru, Ef, cu.slice(1)))
                V = ["HTMLELEMENT", ru, cu].concat(Oi);
              else {
                const Rn = (ia) => ia.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                V = ["CONCAT", Rn(m.slice(R, iu))].concat(Oi, Rn(m.slice($f, Vf)));
              }
              return V;
            }, function() {
              const V = y(1, P)();
              return V === null ? null : V.join("");
            }]), aa = _([ee, z, function() {
              const V = y(1, We)();
              return V === null ? null : V.join("");
            }]), au = function() {
              const V = y(0, sa)();
              return V === null ? null : ["CONCAT"].concat(V);
            }();
            if (au === null || f !== m.length)
              throw new Error("Parse error at position " + f.toString() + " in input: " + m);
            return au;
          }(l, { wikilinks: this.wikilinks });
          return this.emitter.emit(p, g);
        }
        return this.simpleParse(l, g);
      }
      simpleParse(l, g) {
        return l.replace(/\$(\d+)/g, (p, m) => {
          const h = parseInt(m, 10) - 1;
          return g[h] !== void 0 ? g[h] : "$" + m;
        });
      }
    }
    class d {
      constructor(l) {
        this.sourceMap = /* @__PURE__ */ new Map();
      }
      load(l, g) {
        if (typeof l != "object")
          throw new Error("Invalid message source. Must be an object");
        if (g) {
          if (!/^[a-zA-Z0-9-]+$/.test(g))
            throw new Error(`Invalid locale ${g}`);
          for (const p in l)
            if (p.indexOf("@") !== 0) {
              if (typeof l[p] == "object")
                return this.load(l);
              if (typeof l[p] != "string")
                throw new Error(`Invalid message for message ${p} in ${g} locale.`);
              break;
            }
          this.sourceMap.has(g) ? this.sourceMap.set(g, Object.assign(this.sourceMap.get(g), l)) : this.sourceMap.set(g, l);
        } else
          for (g in l)
            this.load(l[g], g);
      }
      getMessage(l, g) {
        const p = this.sourceMap.get(g);
        return p ? p[l] : null;
      }
      hasLocale(l) {
        return this.sourceMap.has(l);
      }
    }
    return class {
      constructor(r, { finalFallback: l = "en", messages: g, wikilinks: p = !1 } = {}) {
        this.locale = r, this.parser = new u(this.locale, { wikilinks: p }), this.messageStore = new d(), g && this.load(g, this.locale), this.finalFallback = l, this.wikilinks = p;
      }
      load(r, l) {
        return this.messageStore.load(r, l || this.locale);
      }
      i18n(r, ...l) {
        return this.parser.parse(this.getMessage(r), l);
      }
      setLocale(r) {
        this.locale = r, this.parser = new u(this.locale, { wikilinks: this.wikilinks });
      }
      getFallbackLocales() {
        return [...o[this.locale] || [], this.finalFallback];
      }
      getMessage(r) {
        let l = this.locale, g = 0;
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
          l = p[g], g++;
        }
        return r;
      }
      registerParserPlugin(r, l) {
        c.prototype[r] = l;
      }
    };
  });
})(Um);
var T_ = Um.exports;
const Gu = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, Im = Symbol("banana-context");
function he() {
  const e = L_(Im);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function B_(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = A_(new T_(e.locale, e));
  return {
    install: (n) => {
      n.provide(Im, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: i } = Gu(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...i) : o.textContent = t.i18n(a, ...i);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: i } = Gu(s);
        o.innerHTML = t.i18n(a, ...i);
      });
    }
  };
}
const wn = window.Vue.ref, P_ = window.Vue.computed, $i = wn(null), Vi = wn(null), Ei = wn(null), Ks = wn(null), Lc = wn(null), Li = wn(null), Rm = wn(null), zm = wn(null), Ac = wn(null), { validateFilters: F_, filtersValidatorError: M_ } = Ec(), Om = {
  from: $i,
  to: Vi,
  section: Ks,
  draft: Lc,
  page: Ei,
  revision: Li,
  "active-list": Ac
}, N_ = P_(() => ({
  type: Rm.value,
  id: zm.value
})), jm = (e, t) => {
  Rm.value = e, zm.value = t, yi("filter-type", e), t && yi("filter-id", t);
}, U_ = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  e instanceof Vc && (n.draft = !0, n.revision = e.pageRevision, e.isLeadSectionTranslation || (n.section = e.sourceSectionTitle));
  for (const o in n) {
    const s = n[o];
    t.set(o, s), Om[o].value = s;
  }
  t.delete("title"), Ys(Object.fromEntries(t));
}, Dc = (e, t) => {
  Om[e].value = t, yi(e, t);
}, I_ = (e) => {
  Dc("section", e);
}, R_ = (e) => {
  Dc("page", e);
}, z_ = (e) => {
  Dc("active-list", e);
}, Ys = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    w_(`Special:ContentTranslation${t}`, e)
  );
}, O_ = () => {
  const e = he(), t = new URLSearchParams(location.search);
  Ei.value = t.get("page"), $i.value = t.get("from"), Vi.value = t.get("to"), Ks.value = t.get("section"), Li.value = t.get("revision"), Ac.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
  const n = F_({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  jm(n.type, n.id), M_.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, j_ = () => {
  const e = new URLSearchParams(location.search);
  Ks.value = null, e.delete("section"), e.delete("title"), Ys(Object.fromEntries(e));
}, yi = (e, t) => {
  const n = new URLSearchParams(location.search);
  t == null ? n.delete(e) : n.set(e, t), n.delete("title"), Ys(Object.fromEntries(n));
}, H_ = (e) => new URLSearchParams(location.search).get(e), q_ = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), $i.value = e, Vi.value = t, n.delete("title"), Ys(Object.fromEntries(n));
}, G_ = () => {
  const e = new URLSearchParams(location.search);
  Ei.value = null, Ks.value = null, Lc.value = null, Li.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("revision"), e.delete("title"), Ys(Object.fromEntries(e));
}, X_ = () => new URLSearchParams(location.search).get("force-quick-tutorial"), B = () => ({
  isQuickTutorialForced: X_,
  setLanguageURLParams: q_,
  setSectionURLParam: I_,
  setTranslationURLParams: U_,
  initializeURLState: O_,
  clearTranslationURLParameters: G_,
  clearSectionURLParameter: j_,
  setUrlParam: yi,
  getUrlParam: H_,
  pageURLParameter: Ei,
  sourceLanguageURLParameter: $i,
  targetLanguageURLParameter: Vi,
  sectionURLParameter: Ks,
  draftURLParameter: Lc,
  revisionURLParameter: Li,
  setPageURLParam: R_,
  currentSuggestionFilters: N_,
  setFilterURLParams: jm,
  activeDashboardTabParameter: Ac,
  setActiveDashboardTabParameter: z_
}), W_ = () => J.getLanguagePairs();
function K_(e, t) {
  return b(this, null, function* () {
    const n = J.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new se(e, t, o.mt)
      )
    );
  });
}
function Y_() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function J_(e, t, n, o) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const s = mw.config.get("wgWikiID"), a = J.getWikiDomainCode(e), i = J.getWikiDomainCode(t), c = {
    action: "wblinktitles",
    fromsite: s.replace(i, a),
    fromtitle: n,
    tosite: s,
    totitle: o
  }, u = new mw.ForeignApi("https://www.wikidata.org/w/api.php");
  return Promise.resolve(u.postWithToken("csrf", c)).then((d) => {
    const l = {
      action: "tag",
      revid: d.entity.sitelinks.lastrevid,
      tags: ["contenttranslation", "sectiontranslation"]
    };
    return Promise.resolve(u.postWithToken("csrf", l));
  });
}
const Ai = {
  fetchSupportedLanguageCodes: W_,
  fetchSupportedMTProviders: K_,
  fetchCXServerToken: Y_,
  addWikibaseLink: J_
}, Tc = window.Vue.ref, Xu = Tc([]), Wu = Tc([]), Ku = Tc(!1);
function Js() {
  return {
    fetchSupportedLanguageCodes: () => b(this, null, function* () {
      if (!Ku.value) {
        Ku.value = !0;
        const t = yield Ai.fetchSupportedLanguageCodes();
        Xu.value = t.sourceLanguages, Wu.value = t.targetLanguages;
      }
    }),
    supportedSourceLanguageCodes: Xu,
    supportedTargetLanguageCodes: Wu
  };
}
const Q_ = {
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
}, Z_ = {
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
}, ev = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], tv = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, nv = {
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
}, ov = {
  languages: Q_,
  scriptgroups: Z_,
  rtlscripts: ev,
  regiongroups: tv,
  territories: nv
};
var Ie = ov;
function Qs(e) {
  return !!Ie.languages[e];
}
function In(e) {
  return Qs(e) && Ie.languages[e].length === 1 ? Ie.languages[e][0] : !1;
}
function sv() {
  return Ie.languages;
}
function Zs(e) {
  var t = In(e);
  return t ? Zs(t) : Qs(e) ? Ie.languages[e][0] : "Zyyy";
}
function Bc(e) {
  var t = In(e);
  return t ? Bc(t) : Qs(e) && Ie.languages[e][1] || "UNKNOWN";
}
function Os(e) {
  var t = In(e);
  return t ? Os(t) : Qs(e) && Ie.languages[e][2] || e;
}
function av() {
  var e, t = {};
  for (e in Ie.languages)
    In(e) || (t[e] = Os(e));
  return t;
}
function Hm(e) {
  var t, n, o = [];
  for (t in Ie.languages)
    if (!In(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === Zs(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function iv(e) {
  return Hm([e]);
}
function qm(e) {
  var t;
  for (t in Ie.scriptgroups)
    if (Ie.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function Pc(e) {
  return qm(Zs(e));
}
function Gm(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = In(n) || n, a = Pc(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Xm(e) {
  var t, n, o, s = {};
  for (t in Ie.languages)
    if (!In(t)) {
      for (n = 0; n < e.length; n++)
        if (Bc(t).includes(e[n])) {
          o = Pc(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function rv(e) {
  return Xm([e]);
}
function lv(e) {
  var t, n, o, s = [];
  for (t = Gm(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function cv(e, t) {
  var n = Os(e) || e, o = Os(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function Wm(e) {
  return Ie.rtlscripts.includes(Zs(e));
}
function uv(e) {
  return Wm(e) ? "rtl" : "ltr";
}
function dv(e) {
  return Ie.territories[e] || [];
}
function gv(e, t) {
  t.target ? Ie.languages[e] = [t.target] : Ie.languages[e] = [t.script, t.regions, t.autonym];
}
var I = {
  addLanguage: gv,
  getAutonym: Os,
  getAutonyms: av,
  getDir: uv,
  getGroupOfScript: qm,
  getLanguages: sv,
  getLanguagesByScriptGroup: Gm,
  getLanguagesByScriptGroupInRegion: rv,
  getLanguagesByScriptGroupInRegions: Xm,
  getLanguagesInScript: iv,
  getLanguagesInScripts: Hm,
  getLanguagesInTerritory: dv,
  getRegions: Bc,
  getScript: Zs,
  getScriptGroupOfLanguage: Pc,
  isKnown: Qs,
  isRedirect: In,
  isRtl: Wm,
  sortByScriptGroup: lv,
  sortByAutonym: cv
};
const oo = window.Vue.computed;
function Le(e) {
  const t = oo(() => e.state.application.sourceLanguage), n = oo(() => e.state.application.targetLanguage), o = oo(
    () => e.state.application.currentMTProvider
  ), s = oo(
    () => I.getAutonym(t.value)
  ), a = oo(
    () => I.getAutonym(n.value)
  ), i = oo(() => e.state.application.previousRoute);
  return {
    currentMTProvider: o,
    previousRoute: i,
    sourceLanguage: t,
    sourceLanguageAutonym: s,
    targetLanguage: n,
    targetLanguageAutonym: a
  };
}
class Po {
  /**
   * @param {Object} options
   * @param {string} [options.description]
   * @param {number} [options.langlinkscount]
   * @param {number} [options.lastrevid]
   * @param {{ source: string, width: number, height: number }|null} [options.original]
   * @param {string|null} [options.pageimage]
   * @param {number} [options.pageid]
   * @param {string} [options.pagelanguage]
   * @param {{wikibase_item: string}} [options.pageprops]
   * @param {object} [options.pageviews]
   * @param {{ source: string, width: number, height: number }|null} [options.thumbnail]
   * @param {string} [options.title]
   * @param {{size}[]} [options.revisions]
   * @param {string|undefined} [options._alias] The normalized page title or the title from which this page is a redirection, if any. See mw/api/page.js#fetchMetadata
   * @param {string|null} [options.content]
   * @param {PageSection[]} [options.sections]
   */
  constructor({
    description: t,
    langlinkscount: n,
    lastrevid: o,
    original: s = null,
    pageimage: a = null,
    pageid: i,
    pagelanguage: c,
    pageprops: u,
    pageviews: d,
    thumbnail: r = null,
    title: l,
    revisions: g,
    _alias: p,
    content: m = null,
    sections: h = []
  } = {}) {
    var f;
    this.language = c, this.title = l, this.pageId = i, this.description = t, this.image = s, this.imageName = a, this.pageprops = u, this.pageviews = d, this.thumbnail = r, this.langLinksCount = n, this.articleSize = (f = g == null ? void 0 : g[0]) == null ? void 0 : f.size, this.revision = o, this.alias = p, this.wikidataId = u == null ? void 0 : u.wikibase_item, this.content = m, this.sections = h;
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
   * @returns {string|null}
   */
  getImage(t) {
    if (!this.image)
      return null;
    if (!t)
      return this.image.source;
    const n = this.thumbnail.source, o = new RegExp(
      `/\\d+px-${this.imageName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`
    );
    return n.replace(o, `/${t}px-${this.imageName}`);
  }
}
class pv {
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
function mv() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const hv = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), mv();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, fv = (e, t) => {
  let n, o;
  return t ? (n = hv(e), o = n.$element.find(
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
}, wv = (e, t) => {
  const n = Array.from(
    fv(e, t)
  );
  return _v(n).map(
    /**
     * @param {Node[]} sectionNodes
     * @return {PageSection}
     */
    (s) => {
      const [a, ...i] = s;
      let c = "";
      const u = a.dataset.mwSectionNumber;
      a.querySelector("h2") ? c = a.textContent.trim() : i.unshift(a);
      const d = i.map(
        /**
         * @param {Node} node
         * @return {SubSection}
         */
        (l) => new nt({
          sentences: vv(l),
          node: l
        })
      ), r = !c;
      return new cc({ id: u, title: c, subSections: d, isLeadSection: r });
    }
  );
}, _v = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, vv = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new Mn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), Km = {
  convertSegmentedContentToPageSections: wv
}, Fc = 120, Sv = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: Fc,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return J.getApi(e).get(n).then((s) => {
    const a = s.query.pages, c = (s.query.redirects || []).reduce(
      (r, l) => He(pe({}, r), { [l.to]: l.from }),
      {}
    ), d = (s.query.normalized || []).reduce(
      (r, l) => He(pe({}, r), {
        [l.to]: l.from
      }),
      {}
    );
    return a.map((r) => {
      const l = d[r.title] || c[r.title] || null;
      return new Po(He(pe({}, r), { _alias: l }));
    });
  });
}, yv = (e, t) => {
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
  return J.getApi(e).get(n).then((s) => {
    var u, d;
    const a = s.query.pages;
    if (!a || !a.length || (u = a[0]) != null && u.missing)
      return null;
    const i = [{ lang: e, title: t }, ...a[0].langlinks || []], c = (d = a[0].pageprops) == null ? void 0 : d.wikibase_item;
    return c ? Object.freeze(new pv(c, i)) : null;
  });
}, xv = (e, t, n) => {
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
  return J.getApi(e).get(o).then((a) => Object.values(a.query.pages).map((c) => {
    var u, d;
    return (d = (u = c.langlinks) == null ? void 0 : u[0]) == null ? void 0 : d["*"];
  }).filter((c) => !!c));
}, Cv = (e, t, n, o = null) => Ym(
  e,
  t,
  n,
  o
).then(
  (s) => new Po({
    sections: Km.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), Ym = (e, t, n, o = null) => {
  const s = J.getWikiDomainCode(e), a = J.getWikiDomainCode(t), i = {
    $sourcelanguage: s,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let c = "/page/$sourcelanguage/$targetlanguage/$title";
  o && (i.$revision = o, c += "/$revision");
  const u = J.getCXServerUrl(
    c,
    i
  );
  return fetch(u).then((d) => d.json()).then((d) => d.segmentedContent);
}, bv = (e) => b(void 0, null, function* () {
  const t = __();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: Fc,
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
  return yield J.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new Po(s))).catch((o) => []);
}), kv = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: Fc,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return J.getApi(t).get(o).then((s) => {
    var a;
    return ((a = s.query) == null ? void 0 : a.pages) || [];
  }).then(
    (s) => s.sort((a, i) => a.index - i.index).map(
      (a) => new Po(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, no = {
  fetchPages: Sv,
  fetchLanguageTitles: yv,
  fetchPageContent: Cv,
  fetchSegmentedContent: Ym,
  fetchNearbyPages: bv,
  searchPagesByTitlePrefix: kv,
  fetchLanguageLinksForLanguage: xv
}, $v = window.Vuex.useStore, Fo = () => {
  const e = $v();
  return (t, n) => {
    n = n.filter(
      (a) => !e.getters["mediawiki/getPage"](t, a)
    );
    const o = 50, s = [];
    for (let a = 0; a < n.length; a += o) {
      const i = n.slice(a, a + o), c = no.fetchPages(t, i).then(
        (u) => u.forEach(
          (d) => e.commit("mediawiki/addPage", d)
        )
      );
      s.push(c);
    }
    return Promise.all(s);
  };
}, Vv = window.Vuex.useStore, Mc = () => {
  const e = Vv(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), { maxSuggestionsPerSlice: s } = e.state.suggestions, a = () => e.getters["suggestions/getSectionSuggestionsForPair"](t.value, n.value).filter(
    (r) => r.matchesFilter(o.value)
  ), i = (d) => a().slice(
    s * d,
    s * (d + 1)
  ), c = () => e.getters["suggestions/getPageSuggestionsForPair"](t.value, n.value).filter(
    (r) => r.matchesFilter(o.value)
  );
  return {
    getFilteredPageSuggestions: c,
    getFilteredSectionSuggestions: a,
    getPageSuggestionsSliceByIndex: (d) => c().slice(
      s * d,
      s * (d + 1)
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
class to {
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
    targetSections: u = [],
    isListable: d = !0,
    suggestionProvider: r = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.missingSections = i, this.presentSections = a, this.sourceSections = c, this.targetSections = u, this.isListable = d, this.suggestionProvider = r;
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
const Jm = [
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
], Ev = [
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
], Lv = [
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
], Av = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], Dv = [
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
], Tv = {
  en: Jm,
  es: Ev,
  bn: Lv,
  fr: Av,
  de: Dv
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
class Nc {
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
class Qm extends Mo {
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
    collection: u = {}
  }) {
    super({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: o,
      targetTitle: s,
      langLinksCount: a,
      wikidataId: i,
      suggestionProvider: c
    }), this.collection = new Nc(u);
  }
}
class Zm extends to {
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
    targetSections: u = [],
    isListable: d = !0,
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
      targetSections: u,
      isListable: d,
      suggestionProvider: r
    }), this.collection = new Nc(l);
  }
}
const Bv = Jm, _n = (n) => b(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
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
function Pv() {
  return b(this, null, function* () {
    const e = {}, t = "/page-collections";
    try {
      return ((yield _n({ urlPostfix: t, urlParams: e })) || []).map((o) => new Nc(o));
    } catch (n) {
      return mw.log.error(
        "Error while fetching the page collections from Recommendation API",
        n
      ), [];
    }
  });
}
function Fv(e, t, n, o = 24) {
  return b(this, null, function* () {
    return ((yield _n({ urlParams: {
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
const Mv = (e, t) => b(void 0, null, function* () {
  return ((yield _n({ urlParams: {
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
}), Nv = (e, t) => b(void 0, null, function* () {
  const s = (yield _n({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  }, urlPostfix: "/sections" })) || [];
  return s && s.map(
    (a) => new to({
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
}), Uv = (e, t, n = null) => b(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  return n && (o.seed = n), ((yield _n({ urlParams: o })) || []).map(
    (a) => new Qm({
      sourceTitle: a.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: a.wikidata_id,
      langLinksCount: parseInt(a.langlinks_count),
      collection: a.collection
    })
  );
}), Iv = (e, t, n = null) => b(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  n && (o.seed = n);
  const a = (yield _n({ urlPostfix: "/sections", urlParams: o })) || [];
  return a && a.map(
    (i) => new Zm({
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
function Rv(e, t, n) {
  return b(this, null, function* () {
    const o = [t, e, n].map(
      (i) => encodeURIComponent(i)
    ), s = J.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (i) => i.ok ? i.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((i) => i == null ? void 0 : i.sections).catch((i) => null);
    return a ? new to(a) : null;
  });
}
function zv(e, t, n) {
  return b(this, null, function* () {
    const a = (yield _n({ urlPostfix: "/sections", urlParams: {
      source: e,
      target: t,
      seed: n,
      count: 24
    } })) || [];
    return a && a.map(
      (i) => new to({
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
function Ov(e, t, n, o = 24) {
  return b(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    return ((yield _n({ urlParams: s })) || []).map(
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
function jv(e, t, n, o = 24) {
  return b(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    }, i = (yield _n({ urlPostfix: "/sections", urlParams: s })) || [];
    return i && i.map(
      (c) => new to({
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
function Hv(e) {
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
    }, n = J.getApi(e);
    try {
      const a = (yield n.get(t)).query.usercontribs.map((i) => i.title);
      return [...new Set(a)];
    } catch (o) {
      return mw.log.error("Error while fetching suggestion seeds", o), [];
    }
  });
}
function qv(e, t) {
  return b(this, null, function* () {
    const n = {
      action: "query",
      format: "json",
      list: "cxpublishedtranslations",
      from: e,
      to: t,
      limit: 200
    }, o = J.getApi(e);
    try {
      return (yield o.get(n)).result.translations.map((a) => a.sourceTitle);
    } catch (s) {
      return mw.log.error("Error while fetching suggestion seeds", s), [];
    }
  });
}
function Gv(e, t) {
  return b(this, null, function* () {
    const n = {
      action: "parse",
      format: "json",
      formatversion: 2,
      prop: "sections",
      page: t
    }, o = J.getApi(e);
    try {
      return (yield o.get(n)).parse;
    } catch (s) {
      return mw.log.error("Error while fetching suggestion sections size", s), [];
    }
  });
}
function Xv(e) {
  const t = Bv.map((o) => encodeURIComponent(o)).join("|"), n = J.getCXServerUrl(
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
const Wv = (e, t, n) => {
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
}, Kv = (e) => {
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
}, Yv = () => {
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
}, ge = {
  fetchFavorites: Yv,
  fetchPageSuggestions: Fv,
  fetchSectionSuggestion: Rv,
  fetchSectionSuggestions: zv,
  fetchSuggestionSeeds: qv,
  fetchAppendixTargetSectionTitles: Xv,
  fetchSuggestionSourceSections: Gv,
  markFavorite: Wv,
  unmarkFavorite: Kv,
  fetchUserEdits: Hv,
  fetchMostPopularPageSuggestions: Mv,
  fetchMostPopularSectionSuggestions: Nv,
  fetchPageSuggestionsByTopics: Ov,
  fetchSectionSuggestionsByTopics: jv,
  fetchPageCollections: Pv,
  fetchPageSuggestionsByCollections: Uv,
  fetchSectionSuggestionsByCollections: Iv
}, Jv = window.Vuex.useStore, ea = () => {
  const e = Jv(), { sourceLanguage: t, targetLanguage: n } = Le(e), o = (c) => {
    if (!c)
      return !1;
    const u = e.getters["suggestions/getFavoriteTitlesByLanguagePair"](t.value, n.value), r = e.getters["translator/getTranslationsForLanguagePair"](t.value, n.value).map((l) => l.sourceTitle);
    return !u.includes(c.sourceTitle) && !r.includes(c.sourceTitle);
  }, s = (c) => {
    const { pageSuggestions: u } = e.state.suggestions;
    return !u.some(
      (r) => r.sourceLanguage === c.sourceLanguage && r.targetLanguage === c.targetLanguage && r.sourceTitle === c.sourceTitle
    ) && o(c);
  }, a = (c) => e.state.suggestions.sectionSuggestions.some(
    (u) => u.sourceLanguage === c.sourceLanguage && u.targetLanguage === c.targetLanguage && u.sourceTitle === c.sourceTitle
  );
  return {
    isPageSuggestionValid: s,
    isSectionSuggestionValid: (c) => {
      if (!c)
        return !1;
      const u = e.state.suggestions.appendixSectionTitles[n.value] || [];
      return !a(c) && o(c) && c.isValid(u);
    },
    sectionSuggestionExists: a
  };
};
class Qv {
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
const Zv = window.Vuex.useStore, eS = window.Vue.computed, Di = window.Vue.ref, tS = Di([]), nS = Di([]);
let ir = !1, rr = !1, Yu = !1, eh = Di([]);
const va = Di([]), oS = (e, t) => {
  eh.value.push({
    sourceLanguage: e,
    targetLanguage: t
  });
};
let Ho = null;
const Sa = {
  page: tS,
  section: nS
}, Uc = () => {
  const e = Zv(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), o = eS(
    () => eh.value.some(
      (l) => l.sourceLanguage === t.value && l.targetLanguage === n.value
    )
  ), s = () => b(void 0, null, function* () {
    rr || (va.value = yield ge.fetchUserEdits(t.value).then((l) => (rr = !0, l)));
  }), a = () => b(void 0, null, function* () {
    let l = e.getters["translator/getTranslationsByStatus"]("published");
    if (l = l.filter(
      (g) => g.sourceLanguage === t.value
    ), l.length && !ir)
      return ir = !0, l.map(
        (g) => g.sourceTitle
      );
    if (ir = !0, !rr && (yield s(), va.value.length > 0))
      return va.value;
    if (!Yu) {
      const g = yield ge.fetchUserEdits(t.value).then((p) => (Yu = !0, p));
      if (g.length)
        return no.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          g
        );
    }
    return null;
  }), i = (l) => {
    let g = Sa[l].value.find(
      (p) => p.matchesLanguagePair(t.value, n.value)
    );
    return g || (g = new Qv({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), Sa[l].value.push(g)), g;
  }, c = () => b(void 0, null, function* () {
    const l = yield ge.fetchSuggestionSeeds(
      t.value,
      n.value
    );
    for (const g in Sa) {
      const p = i(g);
      p.seeds = [...p.seeds, ...l || []];
    }
  }), u = () => b(void 0, null, function* () {
    let l = !1, g = [];
    do {
      g = yield a(), g || (l = !0);
      for (const p in Sa) {
        const m = i(p);
        m.seeds = [
          ...m.seeds,
          ...g || []
        ];
      }
    } while (!l && !(g != null && g.length));
  }), d = () => Ho || (Ho = u(), Ho.finally(() => {
    Ho = null;
  }));
  return {
    getSuggestionSeed: (l) => b(void 0, null, function* () {
      let g = i(l);
      g.seeds.length || (yield d());
      let p = g.shiftSeeds();
      return !p && !o.value && (yield c(), p = g.shiftSeeds(), oS(
        t.value,
        n.value
      )), p;
    }),
    defaultSeedsFetched: o,
    fetchPreviousEditsInSource: s,
    previousEditsInSource: va
  };
}, sS = 5;
function Lo(e) {
  return b(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < sS);
  });
}
const aS = window.Vuex.useStore, iS = () => {
  const e = aS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), { getSuggestionSeed: o } = Uc(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = ea(), c = {
    id: Pt,
    type: wt
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (r) => b(void 0, null, function* () {
      const l = [];
      return yield Lo(() => b(void 0, null, function* () {
        const g = yield o("page");
        if (!g)
          return !0;
        let p = yield ge.fetchPageSuggestions(
          t.value,
          n.value,
          g
        );
        return p = p.filter(
          (m) => a(m)
        ), p = p.slice(0, r), l.push(...p), l.length >= r;
      })), l.forEach(
        (g) => g.suggestionProvider = c
      ), l;
    }),
    fetchSectionSuggestionsBasedOnEdits: (r) => b(void 0, null, function* () {
      const l = [];
      return yield Lo(() => b(void 0, null, function* () {
        const g = yield o("section");
        if (!g)
          return !0;
        const p = yield ge.fetchSectionSuggestions(
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
        return m = m.slice(0, r), l.push(...m), h.forEach((f) => {
          f && !i(f) && (f.isListable = !1, e.commit("suggestions/addSectionSuggestion", f));
        }), l.length >= r;
      })), l.forEach(
        (g) => g.suggestionProvider = c
      ), l;
    })
  };
}, rS = window.Vuex.useStore, lS = () => {
  const e = rS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), o = {
    id: Wt,
    type: wt
  }, {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = ea();
  return { fetchSectionSuggestionsPopular: (d) => b(void 0, null, function* () {
    const r = [];
    return yield Lo(() => b(void 0, null, function* () {
      const l = yield ge.fetchMostPopularSectionSuggestions(
        t.value,
        n.value
      );
      let g = l.filter(
        (m) => s(m)
      );
      const p = l.filter(
        (m) => !s(m)
      );
      return g = g.slice(0, d), r.push(...g), p.forEach((m) => {
        m && !i(m) && (m.isListable = !1, e.commit("suggestions/addSectionSuggestion", m));
      }), r.length >= d;
    })), r.forEach(
      (l) => l.suggestionProvider = o
    ), r;
  }), fetchPageSuggestionsPopular: (d) => b(void 0, null, function* () {
    const r = [];
    return yield Lo(() => b(void 0, null, function* () {
      let l = yield ge.fetchMostPopularPageSuggestions(
        t.value,
        n.value
      );
      return l = l.filter(
        (g) => a(g)
      ), l = l.slice(0, d), r.push(...l), r.length >= d;
    })), r.forEach(
      (l) => l.suggestionProvider = o
    ), r;
  }) };
}, th = window.Vue.ref, lr = th([]), Ju = th(!1), Ic = () => ({ pageCollections: lr, fetchPageCollections: () => b(void 0, null, function* () {
  try {
    lr.value = yield ge.fetchPageCollections(), lr.value.sort((t, n) => t.name.localeCompare(n.name)), Ju.value = !0;
  } catch (t) {
    mw.log.error("Failed to fetch page collections", t);
  }
}), pageCollectionsFetched: Ju });
class uc {
  /**
   * @param {string} id
   * @param {string} label
   * @param {{ id: string, label: string, type: string }[]} filters
   */
  constructor({ id: t, label: n, filters: o }) {
    this.id = t, this.label = n, this.filters = o;
  }
}
const ya = window.Vue.computed, Qu = mw.loader.require("ext.cx.articletopics"), cS = (e) => new uc({
  id: e.groupId,
  label: e.label,
  filters: e.topics.map((t) => ({
    id: t.topicId,
    label: t.label,
    type: Ne
  }))
}), Rc = () => {
  const e = he(), { currentSuggestionFilters: t, setFilterURLParams: n } = B(), { validateFilters: o, filtersValidatorError: s } = Ec(), a = {
    id: Pt,
    type: wt,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }, i = {
    id: Wt,
    type: wt,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }, c = {
    id: le,
    type: wt,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }, { pageCollections: u, pageCollectionsFetched: d } = Ic(), r = ya(() => {
    const v = new uc({
      id: wt,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [a, i]
    });
    return u.value.length && v.filters.push(c), v;
  }), l = (v) => ({
    id: v.name,
    label: v.name,
    type: le
  }), g = ya(
    () => new uc({
      id: "collections",
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: u.value.map(
        (v) => l(v)
      )
    })
  ), p = ya(() => {
    const v = [
      r.value,
      ...Qu.map(cS)
    ];
    return u.value.length && v.splice(1, 0, g.value), v;
  }), m = ya(
    () => [t.value.type, t.value.id].includes(
      le
    ) && !d.value
  ), h = () => {
    if (m.value)
      return [];
    const v = _();
    return v.type === Ne || v.type === _t || v.type === le || v.id === le ? [v, a] : [a, i];
  }, f = (v) => {
    n(v.type, v.id);
  }, _ = () => t.value.type === _t ? {
    id: t.value.id,
    label: t.value.id,
    type: t.value.type
  } : p.value.flatMap((v) => v.filters).find(w), w = (v) => t.value.id === v.id;
  return {
    allFilters: p,
    getFiltersSummary: h,
    selectFilter: f,
    isFilterSelected: w,
    getArticleTopics: (v) => {
      const L = Qu.flatMap((k) => k.topics).find((k) => k.topicId === v);
      return L ? L.articletopics : [];
    },
    waitingForPageCollectionsFetch: m,
    findSelectedFilter: _,
    validateURLFilterWithCollections: () => {
      if (!d.value)
        return;
      const v = o(
        {
          type: t.value.type,
          id: t.value.id
        },
        u.value
      );
      n(v.type, v.id), s.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
    }
  };
}, uS = window.Vuex.useStore, dS = () => {
  const e = uS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = ea(), { getArticleTopics: c } = Rc();
  return {
    fetchPageSuggestionsByTopics: (r) => b(void 0, null, function* () {
      const l = o.value.id, g = {
        id: l,
        type: Ne
      }, p = c(l);
      let m = yield ge.fetchPageSuggestionsByTopics(
        t.value,
        n.value,
        p
      );
      return m = m.filter(
        (h) => a(h)
      ), m = m.slice(0, r), m.forEach(
        (h) => h.suggestionProvider = g
      ), m;
    }),
    fetchSectionSuggestionsByTopics: (r) => b(void 0, null, function* () {
      const l = o.value.id, g = {
        id: l,
        type: Ne
      }, p = c(l), m = [];
      return yield Lo(() => b(void 0, null, function* () {
        const h = yield ge.fetchSectionSuggestionsByTopics(
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
        (h) => h.suggestionProvider = g
      ), m;
    })
  };
}, gS = window.Vuex.useStore, pS = window.Vue.computed, mS = () => {
  const e = gS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), s = pS(() => {
    var r;
    return ((r = o.value) == null ? void 0 : r.type) !== le ? null : o.value.id;
  }), {
    isSectionSuggestionValid: a,
    isPageSuggestionValid: i,
    sectionSuggestionExists: c
  } = ea();
  return {
    fetchSectionSuggestionsByCollections: () => b(void 0, null, function* () {
      const r = [], l = yield ge.fetchSectionSuggestionsByCollections(
        t.value,
        n.value,
        s.value
      );
      let g = l.filter(
        (m) => a(m)
      );
      const p = l.filter(
        (m) => !a(m)
      );
      return r.push(...g), p.forEach((m) => {
        m && !c(m) && (m.isListable = !1, e.commit("suggestions/addSectionSuggestion", m));
      }), r.forEach(
        (m) => m.suggestionProvider = o.value
      ), r;
    }),
    fetchPageSuggestionsByCollections: () => b(void 0, null, function* () {
      const r = [];
      let l = yield ge.fetchPageSuggestionsByCollections(
        t.value,
        n.value,
        s.value
      );
      return l = l.filter(
        (g) => i(g)
      ), r.push(...l), r.forEach(
        (g) => g.suggestionProvider = o.value
      ), r;
    })
  };
}, hS = window.Vuex.useStore, fS = () => {
  const e = hS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = ea();
  return {
    fetchPageSuggestionsBySeed: (d) => b(void 0, null, function* () {
      const r = o.value.id;
      let l = yield ge.fetchPageSuggestions(
        t.value,
        n.value,
        r
      );
      return l = l.filter(
        (g) => a(g)
      ), l = l.slice(0, d), l.forEach(
        (g) => g.suggestionProvider = {
          id: r,
          type: _t
        }
      ), l;
    }),
    fetchSectionSuggestionsBySeed: (d) => b(void 0, null, function* () {
      const r = [], l = o.value.id;
      return yield Lo(() => b(void 0, null, function* () {
        const g = yield ge.fetchSectionSuggestions(
          t.value,
          n.value,
          l
        );
        if (!g)
          return !1;
        let p = g.filter(
          (h) => s(h)
        );
        const m = g.filter(
          (h) => !s(h)
        );
        return p = p.slice(0, d), r.push(...p), m.forEach((h) => {
          h && !i(h) && (h.isListable = !1, e.commit("suggestions/addSectionSuggestion", h));
        }), r.length >= d;
      })), r.forEach(
        (g) => g.suggestionProvider = {
          id: l,
          type: _t
        }
      ), r;
    })
  };
}, Ti = () => {
  const { currentSuggestionFilters: e } = B(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = iS(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = lS(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: i } = dS(), {
    fetchPageSuggestionsByCollections: c,
    fetchSectionSuggestionsByCollections: u
  } = mS(), { fetchPageSuggestionsBySeed: d, fetchSectionSuggestionsBySeed: r } = fS(), l = {
    [Pt]: t,
    [Wt]: o,
    [le]: c,
    [Ne]: a,
    [_t]: d
  }, g = {
    [Pt]: n,
    [Wt]: s,
    [le]: u,
    [Ne]: i,
    [_t]: r
  }, p = (f) => f.type === wt ? f.id : f.type;
  return {
    getFilterProvider: p,
    getCurrentPageSuggestionProvider: () => l[p(e.value)],
    getCurrentSectionSuggestionProvider: () => g[p(e.value)]
  };
}, wS = window.Vuex.useStore, zc = () => {
  const e = wS(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = Mc(), { sourceLanguageURLParameter: o } = B(), s = Fo(), a = () => {
    const g = t(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, i = () => {
    const g = n(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, {
    getCurrentPageSuggestionProvider: c,
    getCurrentSectionSuggestionProvider: u
  } = Ti(), d = (g) => {
    try {
      const p = g.map((m) => m.sourceTitle);
      if (p.length)
        return s(o.value, p);
    } catch (p) {
      mw.log.error("Page suggestions fetching failed!");
    }
  };
  return {
    fetchNextSectionSuggestionsSlice: () => b(void 0, null, function* () {
      e.commit("suggestions/setIsSectionSuggestionsFetchPending", !1), e.commit("suggestions/increaseSectionSuggestionsLoadingCount");
      const g = a(), m = yield u()(
        g
      );
      m.forEach(
        (h) => e.commit("suggestions/addSectionSuggestion", h)
      ), d(m), e.commit("suggestions/decreaseSectionSuggestionsLoadingCount");
    }),
    fetchNextPageSuggestionsSlice: () => b(void 0, null, function* () {
      e.commit("suggestions/setIsPageSuggestionsFetchPending", !1), e.commit("suggestions/increasePageSuggestionsLoadingCount");
      const g = i(), m = yield c()(
        g
      );
      m.forEach(
        (h) => e.commit("suggestions/addPageSuggestion", h)
      ), d(m), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, _S = window.Vuex.useStore, nh = () => {
  const e = _S();
  return (t) => b(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield ge.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, vS = window.Vuex.useStore, oh = () => {
  const e = vS(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = zc(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = Mc(), { targetLanguageURLParameter: a } = B(), i = nh();
  return () => b(void 0, null, function* () {
    const c = s(0), u = o(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, r = c.length === d, l = u.length === d;
    r && l || (yield i(a.value), t(), n());
  });
}, SS = window.Vuex.useStore, sh = () => {
  const e = SS(), t = Fo();
  return (n, o, s) => b(void 0, null, function* () {
    let a = e.getters["suggestions/getSectionSuggestionsForArticle"](n, o, s);
    if (!a) {
      a = yield ge.fetchSectionSuggestion(
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
}, Zu = window.Vue.computed, yS = window.Vuex.useStore, vn = () => {
  const e = yS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = B(), s = Zu(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = Zu(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (c, u) => s.value.getTitleForLanguage(c) || s.value.getTitleForLanguage(u)
  };
}, ah = window.Vuex.useStore, { setLanguageURLParams: xS } = B(), Oc = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), xS(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, ih = () => {
  const e = ah(), t = oh();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = Le(e);
    n === o && (n = a.value, o = s.value), Oc(e, n, o), t();
  };
}, CS = () => {
  const e = ah(), t = sh(), { currentLanguageTitleGroup: n, targetPageExists: o } = vn(), s = Fo();
  return (a, i) => b(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u,
      setPageURLParam: d,
      clearSectionURLParameter: r
    } = B();
    a === i && (a = u.value, i = c.value);
    const l = n.value.getTitleForLanguage(a);
    Oc(e, a, i), d(l), o.value ? (r(), yield t(
      c.value,
      u.value,
      l
    )) : yield s(c.value, [l]);
  });
}, bS = window.Vuex.useStore, kS = window.Vue.ref, ed = kS(!1), rh = () => {
  const e = bS(), {
    supportedSourceLanguageCodes: t,
    supportedTargetLanguageCodes: n,
    fetchSupportedLanguageCodes: o
  } = Js(), { sourceLanguageURLParameter: s, targetLanguageURLParameter: a } = B(), i = () => {
    const u = J.getCurrentWikiLanguageCode(), d = (f) => t.value.includes(f), r = (f) => n.value.includes(f), l = {
      sourceLanguage: "en",
      targetLanguage: "es"
    }, g = [
      a.value,
      mw.storage.get("cxTargetLanguage"),
      u,
      l.targetLanguage
    ], p = [
      s.value,
      mw.storage.get("cxSourceLanguage"),
      l.sourceLanguage,
      u,
      l.targetLanguage
    ], m = g.find(
      (f) => r(f)
    );
    return { sourceLanguage: p.find(
      (f) => d(f) && f !== m
    ), targetLanguage: m };
  };
  return { initializeApplicationLanguages: () => b(void 0, null, function* () {
    yield o();
    const { sourceLanguage: u, targetLanguage: d } = i();
    Oc(e, u, d), ed.value = !0;
  }), applicationLanguagesInitialized: ed };
};
const $S = window.Vue.resolveDynamicComponent, td = window.Vue.openBlock, nd = window.Vue.createBlock, VS = window.Vue.Transition, qo = window.Vue.withCtx, Go = window.Vue.createVNode, ES = window.Vue.resolveComponent, cr = window.Vue.unref, LS = window.Vuex.useStore, od = window.Vue.computed, AS = window.Vue.onMounted, DS = window.Vue.inject, TS = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = B(), { initializeApplicationLanguages: n } = rh();
    t(), n();
    const o = DS("breakpoints"), s = od(() => o.value.mobile), a = LS(), i = od(
      () => a.state.application.autoSavePending
    );
    return AS(() => {
      window.addEventListener("beforeunload", (c) => {
        i.value && (c.preventDefault(), c.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (c) => {
        document.visibilityState === "visible" && Bm.assertUser().then(() => a.commit("application/setIsLoginDialogOn", !1)).catch((u) => {
          u instanceof Bo && a.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (c, u) => {
      const d = ES("router-view");
      return td(), nd(cr(Fw), { id: "contenttranslation" }, {
        default: qo(() => [
          Go(cr(F), { class: "cx-container" }, {
            default: qo(() => [
              Go(cr(x), {
                class: "cx-container__wrapper-col",
                cols: "12"
              }, {
                default: qo(() => [
                  Go(d, null, {
                    default: qo(({ Component: r, route: l }) => [
                      Go(VS, {
                        name: s.value ? l.meta.transitionName : ""
                      }, {
                        default: qo(() => [
                          (td(), nd($S(r)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      Go(f_)
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
}, BS = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translatorStats: null
}, PS = {
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
class lh {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new lh(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const sd = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => He(pe({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class FS {
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
    const t = sd((s = this.user) == null ? void 0 : s.content), n = sd((a = this.mt) == null ? void 0 : a.content);
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
class jc extends ki {
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
    status: u,
    targetTitle: d,
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
      status: u,
      targetTitle: d
    }), this.targetUrl = r, this.sectionTranslations = l;
  }
}
const Bi = mw.user.isAnon() ? void 0 : "user", ch = (e) => {
  if (e === "assertuserfailed")
    throw new Bo();
};
function uh(e, t = null) {
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
        (u) => new Vc(He(pe({}, u), { status: e }))
      ) : i = a.map(
        (u) => new jc(He(pe({}, u), { status: e }))
      ), (c = s.continue) != null && c.offset) {
        const u = yield uh(
          e,
          s.continue.offset
        );
        i = i.concat(u);
      }
      return i;
    }));
  });
}
function MS(e) {
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
      (a) => new FS(a)
    );
  });
}
function NS(e, t, n, o, s) {
  return b(this, null, function* () {
    if (!o)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== se.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const i = J.getCXServerUrl(a);
    return fetch(i, {
      headers: { "Content-Type": "application/json", Authorization: s },
      method: "POST",
      body: JSON.stringify({ html: `<div>${o}</div>` })
    }).then(
      (c) => Promise.all([c.json(), Promise.resolve(c.ok)])
    ).then(([c, u]) => {
      var r, l;
      if (!u) {
        const g = c.detail || c.type || c.title || "fetchSegmentTranslation: Unknown error";
        throw new Error(g);
      }
      return (l = (r = new RegExp("<div>(?<content>(.|\\s)*)<\\/div>").exec(c.contents)) == null ? void 0 : r.groups) == null ? void 0 : l.content;
    }).catch((c) => Promise.reject(c));
  });
}
const US = (e, t, n) => {
  const o = J.getApi(t);
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
}, IS = ({
  html: e,
  sourceTitle: t,
  targetTitle: n,
  sourceSectionTitle: o,
  targetSectionTitle: s,
  sourceLanguage: a,
  targetLanguage: i,
  revision: c,
  captchaId: u,
  captchaWord: d,
  isSandbox: r,
  sectionTranslationId: l
}) => {
  const g = {
    assert: Bi,
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
  return u && (g.captchaid = u, g.captchaword = d), new mw.Api().postWithToken("csrf", g).then((m) => {
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
    ch(m);
    let f;
    return h = h || {}, h.exception ? f = h.exception.message : h.error ? f = h.error.info : f = "Unknown error", {
      publishFeedbackMessage: new Ao({
        text: f,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, RS = ({
  sourceTitle: e,
  targetTitle: t,
  sourceSectionTitle: n,
  targetSectionTitle: o,
  sourceLanguage: s,
  targetLanguage: a,
  revision: i,
  units: c,
  sectionId: u,
  isSandbox: d,
  progress: r
}) => {
  const l = {
    assert: Bi,
    action: "sxsave",
    targettitle: t,
    sourcetitle: e,
    sourcerevision: i,
    sourcesectiontitle: n,
    targetsectiontitle: o,
    sourcelanguage: s,
    targetlanguage: a,
    content: JSON.stringify(c),
    sectionid: u,
    issandbox: d,
    progress: JSON.stringify(r)
  };
  return new mw.Api().postWithToken("csrf", l).then((p) => p.sxsave.sectiontranslationid).catch((p, m) => {
    ch(p);
    let h;
    return m.exception ? h = m.exception.message : m.error ? h = m.error.info : h = "Unknown error", new Ao({ text: h, status: "error" });
  });
}, zS = (e) => {
  const t = {
    assert: Bi,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, OS = () => {
  const e = {
    assert: Bi,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new jc(n.cxcheckunreviewed.translation)
  );
}, jS = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, HS = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, qS = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), vt = {
  fetchTranslations: uh,
  fetchTranslationUnits: MS,
  fetchSegmentTranslation: NS,
  parseTemplateWikitext: US,
  publishTranslation: IS,
  saveTranslation: RS,
  deleteTranslation: jS,
  fetchTranslatorStats: qS,
  deleteCXTranslation: HS,
  splitTranslation: zS,
  checkUnreviewedTranslations: OS
};
function GS(t) {
  return b(this, arguments, function* ({ commit: e }) {
    const n = yield vt.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const XS = {
  fetchTranslatorStats: GS
}, WS = {
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
  setTranslatorStats: (e, t) => {
    e.translatorStats = t;
  }
}, KS = {
  namespaced: !0,
  state: BS,
  getters: PS,
  actions: XS,
  mutations: WS
}, YS = {
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
  appendixSectionTitles: Tv
}, JS = {
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
}, QS = {
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
}, ZS = {
  namespaced: !0,
  state: YS,
  getters: JS,
  actions: {},
  mutations: QS
}, ey = {
  /** @type {Page[]} */
  pages: [],
  languageTitleGroups: [],
  supportedMTProviderGroups: [],
  /**
   * Stores nearby pages to be used as suggestions for section translation
   * Format: {{ en: Page[], es: Page[], ... }}
   * @type {Object}
   */
  nearbyPages: {}
}, ty = {
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
  isValidProviderForTranslation: (e, t) => (n, o, s) => t.getSupportedMTProviders(n, o).includes(s) && s !== se.EMPTY_TEXT_PROVIDER_KEY,
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
function ny(o) {
  return b(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var i;
    const { sourceLanguage: s } = t.application;
    if ((i = n.nearbyPages[s]) != null && i.length)
      return;
    const a = yield no.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const oy = { fetchNearbyPages: ny }, sy = {
  addPage(e, t) {
    e.pages.push(t);
  },
  addLanguageTitleGroup(e, t) {
    e.languageTitleGroups.push(t);
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
}, ay = {
  namespaced: !0,
  state: ey,
  getters: ty,
  actions: oy,
  mutations: sy
}, iy = {
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
  isLoginDialogOn: !1,
  /**
   * The name of the previous route (as defined in vue-router config)
   * @type String
   */
  previousRoute: null
}, ry = {
  /**
   * Returns a boolean indicating whether the current publishing target
   * is the user's sandbox
   *
   * @param {object} state
   * @return {boolean}
   */
  isSandboxTarget: (e) => e.publishTarget === "SANDBOX_SECTION"
}, ly = {
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
    const { sourceLanguage: n, targetLanguage: o } = e, s = se.getStorageKey(
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
   * @param {boolean} value
   */
  setIsLoginDialogOn: (e, t) => {
    e.isLoginDialogOn = t;
  },
  setPreviousRoute: (e, t) => {
    e.previousRoute = t;
  }
}, cy = {
  namespaced: !0,
  state: iy,
  getters: ry,
  actions: {},
  mutations: ly
}, uy = window.Vuex.createStore, dy = uy({
  modules: { translator: KS, suggestions: ZS, mediawiki: ay, application: cy }
});
function gy() {
  return dh().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function dh() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const py = typeof Proxy == "function", my = "devtools-plugin:setup", hy = "plugin:settings:set";
let so, dc;
function fy() {
  var e;
  return so !== void 0 || (typeof window != "undefined" && window.performance ? (so = !0, dc = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (so = !0, dc = global.perf_hooks.performance) : so = !1), so;
}
function wy() {
  return fy() ? dc.now() : Date.now();
}
class _y {
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
        return wy();
      }
    }, n && n.on(hy, (i, c) => {
      i === this.plugin.id && this.fallbacks.setSettings(c);
    }), this.proxiedOn = new Proxy({}, {
      get: (i, c) => this.target ? this.target.on[c] : (...u) => {
        this.onQueue.push({
          method: c,
          args: u
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (i, c) => this.target ? this.target[c] : c === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(c) ? (...u) => (this.targetQueue.push({
        method: c,
        args: u,
        resolve: () => {
        }
      }), this.fallbacks[c](...u)) : (...u) => new Promise((d) => {
        this.targetQueue.push({
          method: c,
          args: u,
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
function vy(e, t) {
  const n = e, o = dh(), s = gy(), a = py && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(my, e, t);
  else {
    const i = a ? new _y(n, s) : null;
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
const gh = window.Vue.getCurrentInstance, Do = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const Gt = window.Vue.computed, Is = window.Vue.unref, Sy = window.Vue.watchEffect, ph = window.Vue.defineComponent, yy = window.Vue.reactive, mh = window.Vue.h, ur = window.Vue.provide, xy = window.Vue.ref, hh = window.Vue.watch, Cy = window.Vue.shallowRef, by = window.Vue.shallowReactive, ky = window.Vue.nextTick, fn = typeof window != "undefined";
function $y(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const Q = Object.assign;
function dr(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = at(s) ? s.map(e) : e(s);
  }
  return n;
}
const Rs = () => {
}, at = Array.isArray;
function Y(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Vy = /\/$/, Ey = (e) => e.replace(Vy, "");
function gr(e, t, n = "/") {
  let o, s = {}, a = "", i = "";
  const c = t.indexOf("#");
  let u = t.indexOf("?");
  return c < u && c >= 0 && (u = -1), u > -1 && (o = t.slice(0, u), a = t.slice(u + 1, c > -1 ? c : t.length), s = e(a)), c > -1 && (o = o || t.slice(0, c), i = t.slice(c, t.length)), o = Dy(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + i,
    path: o,
    query: s,
    hash: i
  };
}
function Ly(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function ad(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function id(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && Un(t.matched[o], n.matched[s]) && fh(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Un(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function fh(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Ay(e[n], t[n]))
      return !1;
  return !0;
}
function Ay(e, t) {
  return at(e) ? rd(e, t) : at(t) ? rd(t, e) : e === t;
}
function rd(e, t) {
  return at(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function Dy(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return Y(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
var js;
(function(e) {
  e.pop = "pop", e.push = "push";
})(js || (js = {}));
var zs;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(zs || (zs = {}));
function Ty(e) {
  if (!e)
    if (fn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Ey(e);
}
const By = /^[^#]+#/;
function Py(e, t) {
  return e.replace(By, "#") + t;
}
function Fy(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const Pi = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function My(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if ({}.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const a = document.querySelector(e.el);
        if (o && a) {
          Y(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch (a) {
        Y(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) {
      ({}).NODE_ENV !== "production" && Y(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = Fy(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function ld(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const gc = /* @__PURE__ */ new Map();
function Ny(e, t) {
  gc.set(e, t);
}
function Uy(e) {
  const t = gc.get(e);
  return gc.delete(e), t;
}
let Iy = () => location.protocol + "//" + location.host;
function wh(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let c = s.includes(e.slice(a)) ? e.slice(a).length : 1, u = s.slice(c);
    return u[0] !== "/" && (u = "/" + u), ad(u, "");
  }
  return ad(n, e) + o + s;
}
function Ry(e, t, n, o) {
  let s = [], a = [], i = null;
  const c = ({ state: g }) => {
    const p = wh(e, location), m = n.value, h = t.value;
    let f = 0;
    if (g) {
      if (n.value = p, t.value = g, i && i === m) {
        i = null;
        return;
      }
      f = h ? g.position - h.position : 0;
    } else
      o(p);
    s.forEach((_) => {
      _(n.value, m, {
        delta: f,
        type: js.pop,
        direction: f ? f > 0 ? zs.forward : zs.back : zs.unknown
      });
    });
  };
  function u() {
    i = n.value;
  }
  function d(g) {
    s.push(g);
    const p = () => {
      const m = s.indexOf(g);
      m > -1 && s.splice(m, 1);
    };
    return a.push(p), p;
  }
  function r() {
    const { history: g } = window;
    g.state && g.replaceState(Q({}, g.state, { scroll: Pi() }), "");
  }
  function l() {
    for (const g of a)
      g();
    a = [], window.removeEventListener("popstate", c), window.removeEventListener("beforeunload", r);
  }
  return window.addEventListener("popstate", c), window.addEventListener("beforeunload", r, {
    passive: !0
  }), {
    pauseListeners: u,
    listen: d,
    destroy: l
  };
}
function cd(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Pi() : null
  };
}
function zy(e) {
  const { history: t, location: n } = window, o = {
    value: wh(e, n)
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
  function a(u, d, r) {
    const l = e.indexOf("#"), g = l > -1 ? (n.host && document.querySelector("base") ? e : e.slice(l)) + u : Iy() + e + u;
    try {
      t[r ? "replaceState" : "pushState"](d, "", g), s.value = d;
    } catch (p) {
      ({}).NODE_ENV !== "production" ? Y("Error with push/replace State", p) : console.error(p), n[r ? "replace" : "assign"](g);
    }
  }
  function i(u, d) {
    const r = Q({}, t.state, cd(
      s.value.back,
      // keep back and forward entries but override current position
      u,
      s.value.forward,
      !0
    ), d, { position: s.value.position });
    a(u, r, !0), o.value = u;
  }
  function c(u, d) {
    const r = Q(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: u,
        scroll: Pi()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && Y(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(r.current, r, !0);
    const l = Q({}, cd(o.value, u, null), { position: r.position + 1 }, d);
    a(u, l, !1), o.value = u;
  }
  return {
    location: o,
    state: s,
    push: c,
    replace: i
  };
}
function Oy(e) {
  e = Ty(e);
  const t = zy(e), n = Ry(e, t.state, t.location, t.replace);
  function o(a, i = !0) {
    i || n.pauseListeners(), history.go(a);
  }
  const s = Q({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: Py.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function jy(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && Y(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), Oy(e);
}
function Hy(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function _h(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const yn = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, pc = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var ud;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(ud || (ud = {}));
const qy = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${Xy(t)}" via a navigation guard.`;
  },
  4({ from: e, to: t }) {
    return `Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`;
  },
  8({ from: e, to: t }) {
    return `Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`;
  },
  16({ from: e, to: t }) {
    return `Avoided redundant navigation to current location: "${e.fullPath}".`;
  }
};
function To(e, t) {
  return {}.NODE_ENV !== "production" ? Q(new Error(qy[e](t)), {
    type: e,
    [pc]: !0
  }, t) : Q(new Error(), {
    type: e,
    [pc]: !0
  }, t);
}
function Jt(e, t) {
  return e instanceof Error && pc in e && (t == null || !!(e.type & t));
}
const Gy = ["params", "query", "hash"];
function Xy(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of Gy)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const dd = "[^/]+?", Wy = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Ky = /[.+*?^${}()[\]/\\]/g;
function Yy(e, t) {
  const n = Q({}, Wy, t), o = [];
  let s = n.start ? "^" : "";
  const a = [];
  for (const d of e) {
    const r = d.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !d.length && (s += "/");
    for (let l = 0; l < d.length; l++) {
      const g = d[l];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (g.type === 0)
        l || (s += "/"), s += g.value.replace(Ky, "\\$&"), p += 40;
      else if (g.type === 1) {
        const { value: m, repeatable: h, optional: f, regexp: _ } = g;
        a.push({
          name: m,
          repeatable: h,
          optional: f
        });
        const w = _ || dd;
        if (w !== dd) {
          p += 10;
          try {
            new RegExp(`(${w})`);
          } catch (C) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${w}): ` + C.message);
          }
        }
        let y = h ? `((?:${w})(?:/(?:${w}))*)` : `(${w})`;
        l || (y = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        f && d.length < 2 ? `(?:/${y})` : "/" + y), f && (y += "?"), s += y, p += 20, f && (p += -8), h && (p += -20), w === ".*" && (p += -50);
      }
      r.push(p);
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
    const r = d.match(i), l = {};
    if (!r)
      return null;
    for (let g = 1; g < r.length; g++) {
      const p = r[g] || "", m = a[g - 1];
      l[m.name] = p && m.repeatable ? p.split("/") : p;
    }
    return l;
  }
  function u(d) {
    let r = "", l = !1;
    for (const g of e) {
      (!l || !r.endsWith("/")) && (r += "/"), l = !1;
      for (const p of g)
        if (p.type === 0)
          r += p.value;
        else if (p.type === 1) {
          const { value: m, repeatable: h, optional: f } = p, _ = m in d ? d[m] : "";
          if (at(_) && !h)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const w = at(_) ? _.join("/") : _;
          if (!w)
            if (f)
              g.length < 2 && (r.endsWith("/") ? r = r.slice(0, -1) : l = !0);
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
    stringify: u
  };
}
function Jy(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function Qy(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = Jy(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (gd(o))
      return 1;
    if (gd(s))
      return -1;
  }
  return s.length - o.length;
}
function gd(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Zy = {
  type: 0,
  value: ""
}, ex = /[a-zA-Z0-9_]/;
function tx(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[Zy]];
  if (!e.startsWith("/"))
    throw new Error({}.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(p) {
    throw new Error(`ERR (${n})/"${d}": ${p}`);
  }
  let n = 0, o = n;
  const s = [];
  let a;
  function i() {
    a && s.push(a), a = [];
  }
  let c = 0, u, d = "", r = "";
  function l() {
    d && (n === 0 ? a.push({
      type: 0,
      value: d
    }) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (u === "*" || u === "+") && t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`), a.push({
      type: 1,
      value: d,
      regexp: r,
      repeatable: u === "*" || u === "+",
      optional: u === "*" || u === "?"
    })) : t("Invalid state to consume buffer"), d = "");
  }
  function g() {
    d += u;
  }
  for (; c < e.length; ) {
    if (u = e[c++], u === "\\" && n !== 2) {
      o = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        u === "/" ? (d && l(), i()) : u === ":" ? (l(), n = 1) : g();
        break;
      case 4:
        g(), n = o;
        break;
      case 1:
        u === "(" ? n = 2 : ex.test(u) ? g() : (l(), n = 0, u !== "*" && u !== "?" && u !== "+" && c--);
        break;
      case 2:
        u === ")" ? r[r.length - 1] == "\\" ? r = r.slice(0, -1) + u : n = 3 : r += u;
        break;
      case 3:
        l(), n = 0, u !== "*" && u !== "?" && u !== "+" && c--, r = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${d}"`), l(), i(), s;
}
function nx(e, t, n) {
  const o = Yy(tx(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const i of o.keys)
      a.has(i.name) && Y(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(i.name);
  }
  const s = Q(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function ox(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = hd({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(r) {
    return o.get(r);
  }
  function a(r, l, g) {
    const p = !g, m = sx(r);
    ({}).NODE_ENV !== "production" && lx(m, l), m.aliasOf = g && g.record;
    const h = hd(t, r), f = [
      m
    ];
    if ("alias" in r) {
      const y = typeof r.alias == "string" ? [r.alias] : r.alias;
      for (const C of y)
        f.push(Q({}, m, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: g ? g.record.components : m.components,
          path: C,
          // we might be the child of an alias
          aliasOf: g ? g.record : m
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let _, w;
    for (const y of f) {
      const { path: C } = y;
      if (l && C[0] !== "/") {
        const v = l.record.path, E = v[v.length - 1] === "/" ? "" : "/";
        y.path = l.record.path + (C && E + C);
      }
      if ({}.NODE_ENV !== "production" && y.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (_ = nx(y, l, h), {}.NODE_ENV !== "production" && l && C[0] === "/" && cx(_, l), g ? (g.alias.push(_), {}.NODE_ENV !== "production" && rx(g, _)) : (w = w || _, w !== _ && w.alias.push(_), p && r.name && !md(_) && i(r.name)), m.children) {
        const v = m.children;
        for (let E = 0; E < v.length; E++)
          a(v[E], _, g && g.children[E]);
      }
      g = g || _, (_.record.components && Object.keys(_.record.components).length || _.record.name || _.record.redirect) && u(_);
    }
    return w ? () => {
      i(w);
    } : Rs;
  }
  function i(r) {
    if (_h(r)) {
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
  function u(r) {
    let l = 0;
    for (; l < n.length && Qy(r, n[l]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (r.record.path !== n[l].record.path || !vh(r, n[l])); )
      l++;
    n.splice(l, 0, r), r.record.name && !md(r) && o.set(r.record.name, r);
  }
  function d(r, l) {
    let g, p = {}, m, h;
    if ("name" in r && r.name) {
      if (g = o.get(r.name), !g)
        throw To(1, {
          location: r
        });
      if ({}.NODE_ENV !== "production") {
        const w = Object.keys(r.params || {}).filter((y) => !g.keys.find((C) => C.name === y));
        w.length && Y(`Discarded invalid param(s) "${w.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = g.record.name, p = Q(
        // paramsFromLocation is a new object
        pd(
          l.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((w) => !w.optional).map((w) => w.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        r.params && pd(r.params, g.keys.map((w) => w.name))
      ), m = g.stringify(p);
    } else if ("path" in r)
      m = r.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && Y(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((w) => w.re.test(m)), g && (p = g.parse(m), h = g.record.name);
    else {
      if (g = l.name ? o.get(l.name) : n.find((w) => w.re.test(l.path)), !g)
        throw To(1, {
          location: r,
          currentLocation: l
        });
      h = g.record.name, p = Q({}, l.params, r.params), m = g.stringify(p);
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
      meta: ix(f)
    };
  }
  return e.forEach((r) => a(r)), { addRoute: a, resolve: d, removeRoute: i, getRoutes: c, getRecordMatcher: s };
}
function pd(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function sx(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: ax(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function ax(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function md(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function ix(e) {
  return e.reduce((t, n) => Q(t, n.meta), {});
}
function hd(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function mc(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function rx(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(mc.bind(null, n)))
      return Y(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(mc.bind(null, n)))
      return Y(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function lx(e, t) {
  t && t.record.name && !e.name && !e.path && Y(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function cx(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(mc.bind(null, n)))
      return Y(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function vh(e, t) {
  return t.children.some((n) => n === e || vh(e, n));
}
const Sh = /#/g, ux = /&/g, dx = /\//g, gx = /=/g, px = /\?/g, yh = /\+/g, mx = /%5B/g, hx = /%5D/g, xh = /%5E/g, fx = /%60/g, Ch = /%7B/g, wx = /%7C/g, bh = /%7D/g, _x = /%20/g;
function Hc(e) {
  return encodeURI("" + e).replace(wx, "|").replace(mx, "[").replace(hx, "]");
}
function vx(e) {
  return Hc(e).replace(Ch, "{").replace(bh, "}").replace(xh, "^");
}
function hc(e) {
  return Hc(e).replace(yh, "%2B").replace(_x, "+").replace(Sh, "%23").replace(ux, "%26").replace(fx, "`").replace(Ch, "{").replace(bh, "}").replace(xh, "^");
}
function Sx(e) {
  return hc(e).replace(gx, "%3D");
}
function yx(e) {
  return Hc(e).replace(Sh, "%23").replace(px, "%3F");
}
function xx(e) {
  return e == null ? "" : yx(e).replace(dx, "%2F");
}
function Hs(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && Y(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function Cx(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(yh, " "), i = a.indexOf("="), c = Hs(i < 0 ? a : a.slice(0, i)), u = i < 0 ? null : Hs(a.slice(i + 1));
    if (c in t) {
      let d = t[c];
      at(d) || (d = t[c] = [d]), d.push(u);
    } else
      t[c] = u;
  }
  return t;
}
function fd(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = Sx(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (at(o) ? o.map((a) => a && hc(a)) : [o && hc(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function bx(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = at(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const kx = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), wd = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), Fi = Symbol({}.NODE_ENV !== "production" ? "router" : ""), kh = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), fc = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function Xo() {
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
function Nn(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((i, c) => {
    const u = (l) => {
      l === !1 ? c(To(4, {
        from: n,
        to: t
      })) : l instanceof Error ? c(l) : Hy(l) ? c(To(2, {
        from: t,
        to: l
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof l == "function" && a.push(l), i());
    }, d = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? $x(u, t, n) : u);
    let r = Promise.resolve(d);
    if (e.length < 3 && (r = r.then(u)), {}.NODE_ENV !== "production" && e.length > 2) {
      const l = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof d == "object" && "then" in d)
        r = r.then((g) => u._called ? g : (Y(l), Promise.reject(new Error("Invalid navigation guard"))));
      else if (d !== void 0 && !u._called) {
        Y(l), c(new Error("Invalid navigation guard"));
        return;
      }
    }
    r.catch((l) => c(l));
  });
}
function $x(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && Y(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function pr(e, t, n, o) {
  const s = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && Y(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const i in a.components) {
      let c = a.components[i];
      if ({}.NODE_ENV !== "production") {
        if (!c || typeof c != "object" && typeof c != "function")
          throw Y(`Component "${i}" in record with path "${a.path}" is not a valid component. Received "${String(c)}".`), new Error("Invalid route component");
        if ("then" in c) {
          Y(`Component "${i}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const u = c;
          c = () => u;
        } else
          c.__asyncLoader && // warn only once per component
          !c.__warnedDefineAsync && (c.__warnedDefineAsync = !0, Y(`Component "${i}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[i]))
        if (Vx(c)) {
          const d = (c.__vccOpts || c)[t];
          d && s.push(Nn(d, n, o, a, i));
        } else {
          let u = c();
          ({}).NODE_ENV !== "production" && !("catch" in u) && (Y(`Component "${i}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), u = Promise.resolve(u)), s.push(() => u.then((d) => {
            if (!d)
              return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${a.path}"`));
            const r = $y(d) ? d.default : d;
            a.components[i] = r;
            const g = (r.__vccOpts || r)[t];
            return g && Nn(g, n, o, a, i)();
          }));
        }
    }
  }
  return s;
}
function Vx(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function _d(e) {
  const t = Do(Fi), n = Do(kh), o = Gt(() => t.resolve(Is(e.to))), s = Gt(() => {
    const { matched: u } = o.value, { length: d } = u, r = u[d - 1], l = n.matched;
    if (!r || !l.length)
      return -1;
    const g = l.findIndex(Un.bind(null, r));
    if (g > -1)
      return g;
    const p = vd(u[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      vd(r) === p && // avoid comparing the child with its parent
      l[l.length - 1].path !== p ? l.findIndex(Un.bind(null, u[d - 2])) : g
    );
  }), a = Gt(() => s.value > -1 && Dx(n.params, o.value.params)), i = Gt(() => s.value > -1 && s.value === n.matched.length - 1 && fh(n.params, o.value.params));
  function c(u = {}) {
    return Ax(u) ? t[Is(e.replace) ? "replace" : "push"](
      Is(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Rs) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && fn) {
    const u = gh();
    if (u) {
      const d = {
        route: o.value,
        isActive: a.value,
        isExactActive: i.value
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(d), Sy(() => {
        d.route = o.value, d.isActive = a.value, d.isExactActive = i.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: Gt(() => o.value.href),
    isActive: a,
    isExactActive: i,
    navigate: c
  };
}
const Ex = /* @__PURE__ */ ph({
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
  useLink: _d,
  setup(e, { slots: t }) {
    const n = yy(_d(e)), { options: o } = Do(Fi), s = Gt(() => ({
      [Sd(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Sd(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : mh("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), Lx = Ex;
function Ax(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Dx(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!at(s) || s.length !== o.length || o.some((a, i) => a !== s[i]))
      return !1;
  }
  return !0;
}
function vd(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Sd = (e, t, n) => e != null ? e : t != null ? t : n, Tx = /* @__PURE__ */ ph({
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
    ({}).NODE_ENV !== "production" && Px();
    const o = Do(fc), s = Gt(() => e.route || o.value), a = Do(wd, 0), i = Gt(() => {
      let d = Is(a);
      const { matched: r } = s.value;
      let l;
      for (; (l = r[d]) && !l.components; )
        d++;
      return d;
    }), c = Gt(() => s.value.matched[i.value]);
    ur(wd, Gt(() => i.value + 1)), ur(kx, c), ur(fc, s);
    const u = xy();
    return hh(() => [u.value, c.value, e.name], ([d, r, l], [g, p, m]) => {
      r && (r.instances[l] = d, p && p !== r && d && d === g && (r.leaveGuards.size || (r.leaveGuards = p.leaveGuards), r.updateGuards.size || (r.updateGuards = p.updateGuards))), d && r && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !Un(r, p) || !g) && (r.enterCallbacks[l] || []).forEach((h) => h(d));
    }, { flush: "post" }), () => {
      const d = s.value, r = e.name, l = c.value, g = l && l.components[r];
      if (!g)
        return yd(n.default, { Component: g, route: d });
      const p = l.props[r], m = p ? p === !0 ? d.params : typeof p == "function" ? p(d) : p : null, f = mh(g, Q({}, m, t, {
        onVnodeUnmounted: (_) => {
          _.component.isUnmounted && (l.instances[r] = null);
        },
        ref: u
      }));
      if ({}.NODE_ENV !== "production" && fn && f.ref) {
        const _ = {
          depth: i.value,
          name: l.name,
          path: l.path,
          meta: l.meta
        };
        (at(f.ref) ? f.ref.map((y) => y.i) : [f.ref.i]).forEach((y) => {
          y.__vrv_devtools = _;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        yd(n.default, { Component: f, route: d }) || f
      );
    };
  }
});
function yd(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Bx = Tx;
function Px() {
  const e = gh(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    Y(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function Wo(e, t) {
  const n = Q({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => jx(o, ["instances", "children", "aliasOf"]))
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
function xa(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let Fx = 0;
function Mx(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = Fx++;
  vy({
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
        value: Wo(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: r, componentInstance: l }) => {
      if (l.__vrv_devtools) {
        const g = l.__vrv_devtools;
        r.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: $h
        });
      }
      at(l.__vrl_devtools) && (l.__devtoolsApi = s, l.__vrl_devtools.forEach((g) => {
        let p = Lh, m = "";
        g.isExactActive ? (p = Eh, m = "This is exactly active") : g.isActive && (p = Vh, m = "This link is active"), r.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: m,
          backgroundColor: p
        });
      }));
    }), hh(t.currentRoute, () => {
      u(), s.notifyComponentUpdate(), s.sendInspectorTree(c), s.sendInspectorState(c);
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
      const g = {
        guard: xa("beforeEach"),
        from: Wo(l, "Current Location during this navigation"),
        to: Wo(r, "Target location")
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
    }), t.afterEach((r, l, g) => {
      const p = {
        guard: xa("afterEach")
      };
      g ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, p.status = xa("❌")) : p.status = xa("✅"), p.from = Wo(l, "Current Location during this navigation"), p.to = Wo(r, "Target location"), s.addTimelineEvent({
        layerId: a,
        event: {
          title: "End of navigation",
          subtitle: r.fullPath,
          time: s.now(),
          data: p,
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
    function u() {
      if (!d)
        return;
      const r = d;
      let l = n.getRoutes().filter((g) => !g.parent);
      l.forEach(Th), r.filter && (l = l.filter((g) => (
        // save matches state based on the payload
        wc(g, r.filter.toLowerCase())
      ))), l.forEach((g) => Dh(g, t.currentRoute.value)), r.rootNodes = l.map(Ah);
    }
    let d;
    s.on.getInspectorTree((r) => {
      d = r, r.app === e && r.inspectorId === c && u();
    }), s.on.getInspectorState((r) => {
      if (r.app === e && r.inspectorId === c) {
        const g = n.getRoutes().find((p) => p.record.__vd_id === r.nodeId);
        g && (r.state = {
          options: Ux(g)
        });
      }
    }), s.sendInspectorTree(c), s.sendInspectorState(c);
  });
}
function Nx(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function Ux(e) {
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
        display: e.keys.map((o) => `${o.name}${Nx(o)}`).join(" "),
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
const $h = 15485081, Vh = 2450411, Eh = 8702998, Ix = 2282478, Lh = 16486972, Rx = 6710886;
function Ah(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: Ix
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Lh
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: $h
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Eh
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Vh
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: Rx
  });
  let o = n.__vd_id;
  return o == null && (o = String(zx++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(Ah)
  };
}
let zx = 0;
const Ox = /^\/(.*)\/([a-z]*)$/;
function Dh(e, t) {
  const n = t.matched.length && Un(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => Un(o, e.record))), e.children.forEach((o) => Dh(o, t));
}
function Th(e) {
  e.__vd_match = !1, e.children.forEach(Th);
}
function wc(e, t) {
  const n = String(e.re).match(Ox);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => wc(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = Hs(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => wc(i, t));
}
function jx(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function Hx(e) {
  const t = ox(e.routes, e), n = e.parseQuery || Cx, o = e.stringifyQuery || fd, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = Xo(), i = Xo(), c = Xo(), u = Cy(yn);
  let d = yn;
  fn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const r = dr.bind(null, (S) => "" + S), l = dr.bind(null, xx), g = (
    // @ts-expect-error: intentionally avoid the type check
    dr.bind(null, Hs)
  );
  function p(S, D) {
    let A, M;
    return _h(S) ? (A = t.getRecordMatcher(S), M = D) : M = S, t.addRoute(M, A);
  }
  function m(S) {
    const D = t.getRecordMatcher(S);
    D ? t.removeRoute(D) : {}.NODE_ENV !== "production" && Y(`Cannot remove non-existent route "${String(S)}"`);
  }
  function h() {
    return t.getRoutes().map((S) => S.record);
  }
  function f(S) {
    return !!t.getRecordMatcher(S);
  }
  function _(S, D) {
    if (D = Q({}, D || u.value), typeof S == "string") {
      const U = gr(n, S, D.path), te = t.resolve({ path: U.path }, D), ee = s.createHref(U.fullPath);
      return {}.NODE_ENV !== "production" && (ee.startsWith("//") ? Y(`Location "${S}" resolved to "${ee}". A resolved location cannot start with multiple slashes.`) : te.matched.length || Y(`No match found for location with path "${S}"`)), Q(U, te, {
        params: g(te.params),
        hash: Hs(U.hash),
        redirectedFrom: void 0,
        href: ee
      });
    }
    let A;
    if ("path" in S)
      ({}).NODE_ENV !== "production" && "params" in S && !("name" in S) && // @ts-expect-error: the type is never
      Object.keys(S.params).length && Y(`Path "${S.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), A = Q({}, S, {
        path: gr(n, S.path, D.path).path
      });
    else {
      const U = Q({}, S.params);
      for (const te in U)
        U[te] == null && delete U[te];
      A = Q({}, S, {
        params: l(U)
      }), D.params = l(D.params);
    }
    const M = t.resolve(A, D), G = S.hash || "";
    ({}).NODE_ENV !== "production" && G && !G.startsWith("#") && Y(`A \`hash\` should always start with the character "#". Replace "${G}" with "#${G}".`), M.params = r(g(M.params));
    const re = Ly(o, Q({}, S, {
      hash: vx(G),
      path: M.path
    })), O = s.createHref(re);
    return {}.NODE_ENV !== "production" && (O.startsWith("//") ? Y(`Location "${S}" resolved to "${O}". A resolved location cannot start with multiple slashes.`) : M.matched.length || Y(`No match found for location with path "${"path" in S ? S.path : S}"`)), Q({
      fullPath: re,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: G,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === fd ? bx(S.query) : S.query || {}
      )
    }, M, {
      redirectedFrom: void 0,
      href: O
    });
  }
  function w(S) {
    return typeof S == "string" ? gr(n, S, u.value.path) : Q({}, S);
  }
  function y(S, D) {
    if (d !== S)
      return To(8, {
        from: D,
        to: S
      });
  }
  function C(S) {
    return L(S);
  }
  function v(S) {
    return C(Q(w(S), { replace: !0 }));
  }
  function E(S) {
    const D = S.matched[S.matched.length - 1];
    if (D && D.redirect) {
      const { redirect: A } = D;
      let M = typeof A == "function" ? A(S) : A;
      if (typeof M == "string" && (M = M.includes("?") || M.includes("#") ? M = w(M) : (
        // force empty params
        { path: M }
      ), M.params = {}), {}.NODE_ENV !== "production" && !("path" in M) && !("name" in M))
        throw Y(`Invalid redirect found:
${JSON.stringify(M, null, 2)}
 when navigating to "${S.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return Q({
        query: S.query,
        hash: S.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in M ? {} : S.params
      }, M);
    }
  }
  function L(S, D) {
    const A = d = _(S), M = u.value, G = S.state, re = S.force, O = S.replace === !0, U = E(A);
    if (U)
      return L(
        Q(w(U), {
          state: typeof U == "object" ? Q({}, G, U.state) : G,
          force: re,
          replace: O
        }),
        // keep original redirectedFrom if it exists
        D || A
      );
    const te = A;
    te.redirectedFrom = D;
    let ee;
    return !re && id(o, M, A) && (ee = To(16, { to: te, from: M }), z(
      M,
      M,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (ee ? Promise.resolve(ee) : ie(te, M)).catch((ne) => Jt(ne) ? (
      // navigation redirects still mark the router as ready
      Jt(
        ne,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? ne : P(ne)
    ) : (
      // reject any unknown error
      Ce(ne, te, M)
    )).then((ne) => {
      if (ne) {
        if (Jt(
          ne,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          id(o, _(ne.to), te) && // and we have done it a couple of times
          D && // @ts-expect-error: added only in dev
          (D._count = D._count ? (
            // @ts-expect-error
            D._count + 1
          ) : 1) > 30 ? (Y(`Detected a possibly infinite redirection in a navigation guard when going from "${M.fullPath}" to "${te.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : L(
            // keep options
            Q({
              // preserve an existing replacement but allow the redirect to override it
              replace: O
            }, w(ne.to), {
              state: typeof ne.to == "object" ? Q({}, G, ne.to.state) : G,
              force: re
            }),
            // preserve the original redirectedFrom if any
            D || te
          );
      } else
        ne = X(te, M, !0, O, G);
      return H(te, M, ne), ne;
    });
  }
  function k(S, D) {
    const A = y(S, D);
    return A ? Promise.reject(A) : Promise.resolve();
  }
  function T(S) {
    const D = q.values().next().value;
    return D && typeof D.runWithContext == "function" ? D.runWithContext(S) : S();
  }
  function ie(S, D) {
    let A;
    const [M, G, re] = qx(S, D);
    A = pr(M.reverse(), "beforeRouteLeave", S, D);
    for (const U of M)
      U.leaveGuards.forEach((te) => {
        A.push(Nn(te, S, D));
      });
    const O = k.bind(null, S, D);
    return A.push(O), K(A).then(() => {
      A = [];
      for (const U of a.list())
        A.push(Nn(U, S, D));
      return A.push(O), K(A);
    }).then(() => {
      A = pr(G, "beforeRouteUpdate", S, D);
      for (const U of G)
        U.updateGuards.forEach((te) => {
          A.push(Nn(te, S, D));
        });
      return A.push(O), K(A);
    }).then(() => {
      A = [];
      for (const U of re)
        if (U.beforeEnter)
          if (at(U.beforeEnter))
            for (const te of U.beforeEnter)
              A.push(Nn(te, S, D));
          else
            A.push(Nn(U.beforeEnter, S, D));
      return A.push(O), K(A);
    }).then(() => (S.matched.forEach((U) => U.enterCallbacks = {}), A = pr(re, "beforeRouteEnter", S, D), A.push(O), K(A))).then(() => {
      A = [];
      for (const U of i.list())
        A.push(Nn(U, S, D));
      return A.push(O), K(A);
    }).catch((U) => Jt(
      U,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? U : Promise.reject(U));
  }
  function H(S, D, A) {
    c.list().forEach((M) => T(() => M(S, D, A)));
  }
  function X(S, D, A, M, G) {
    const re = y(S, D);
    if (re)
      return re;
    const O = D === yn, U = fn ? history.state : {};
    A && (M || O ? s.replace(S.fullPath, Q({
      scroll: O && U && U.scroll
    }, G)) : s.push(S.fullPath, G)), u.value = S, z(S, D, A, O), P();
  }
  let Z;
  function be() {
    Z || (Z = s.listen((S, D, A) => {
      if (!W.listening)
        return;
      const M = _(S), G = E(M);
      if (G) {
        L(Q(G, { replace: !0 }), M).catch(Rs);
        return;
      }
      d = M;
      const re = u.value;
      fn && Ny(ld(re.fullPath, A.delta), Pi()), ie(M, re).catch((O) => Jt(
        O,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? O : Jt(
        O,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (L(
        O.to,
        M
        // avoid an uncaught rejection, let push call triggerError
      ).then((U) => {
        Jt(
          U,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !A.delta && A.type === js.pop && s.go(-1, !1);
      }).catch(Rs), Promise.reject()) : (A.delta && s.go(-A.delta, !1), Ce(O, M, re))).then((O) => {
        O = O || X(
          // after navigation, all matched components are resolved
          M,
          re,
          !1
        ), O && (A.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Jt(
          O,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-A.delta, !1) : A.type === js.pop && Jt(
          O,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), H(M, re, O);
      }).catch(Rs);
    }));
  }
  let xe = Xo(), Xe = Xo(), fe;
  function Ce(S, D, A) {
    P(S);
    const M = Xe.list();
    return M.length ? M.forEach((G) => G(S, D, A)) : ({}.NODE_ENV !== "production" && Y("uncaught error during route navigation:"), console.error(S)), Promise.reject(S);
  }
  function We() {
    return fe && u.value !== yn ? Promise.resolve() : new Promise((S, D) => {
      xe.add([S, D]);
    });
  }
  function P(S) {
    return fe || (fe = !S, be(), xe.list().forEach(([D, A]) => S ? A(S) : D()), xe.reset()), S;
  }
  function z(S, D, A, M) {
    const { scrollBehavior: G } = e;
    if (!fn || !G)
      return Promise.resolve();
    const re = !A && Uy(ld(S.fullPath, 0)) || (M || !A) && history.state && history.state.scroll || null;
    return ky().then(() => G(S, D, re)).then((O) => O && My(O)).catch((O) => Ce(O, S, D));
  }
  const j = (S) => s.go(S);
  let N;
  const q = /* @__PURE__ */ new Set(), W = {
    currentRoute: u,
    listening: !0,
    addRoute: p,
    removeRoute: m,
    hasRoute: f,
    getRoutes: h,
    resolve: _,
    options: e,
    push: C,
    replace: v,
    go: j,
    back: () => j(-1),
    forward: () => j(1),
    beforeEach: a.add,
    beforeResolve: i.add,
    afterEach: c.add,
    onError: Xe.add,
    isReady: We,
    install(S) {
      const D = this;
      S.component("RouterLink", Lx), S.component("RouterView", Bx), S.config.globalProperties.$router = D, Object.defineProperty(S.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Is(u)
      }), fn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !N && u.value === yn && (N = !0, C(s.location).catch((G) => {
        ({}).NODE_ENV !== "production" && Y("Unexpected error when starting the router:", G);
      }));
      const A = {};
      for (const G in yn)
        Object.defineProperty(A, G, {
          get: () => u.value[G],
          enumerable: !0
        });
      S.provide(Fi, D), S.provide(kh, by(A)), S.provide(fc, u);
      const M = S.unmount;
      q.add(S), S.unmount = function() {
        q.delete(S), q.size < 1 && (d = yn, Z && Z(), Z = null, u.value = yn, N = !1, fe = !1), M();
      }, {}.NODE_ENV !== "production" && fn && Mx(S, D, t);
    }
  };
  function K(S) {
    return S.reduce((D, A) => D.then(() => T(A)), Promise.resolve());
  }
  return W;
}
function qx(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < a; i++) {
    const c = t.matched[i];
    c && (e.matched.find((d) => Un(d, c)) ? o.push(c) : n.push(c));
    const u = e.matched[i];
    u && (t.matched.find((d) => Un(d, u)) || s.push(u));
  }
  return [n, o, s];
}
function De() {
  return Do(Fi);
}
window.Vue.computed;
const Gx = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', Xx = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', Wx = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', Kx = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', Yx = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', Jx = '<path d="M10 1a9 9 0 109 9 9 9 0 00-9-9m5 10H5V9h10z"/>', Qx = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', Zx = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', eC = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', tC = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', nC = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', oC = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', sC = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', aC = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', iC = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', rC = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', lC = '<path d="M19 16 2 12a3.83 3.83 0 01-1-2.5A3.83 3.83 0 012 7l17-4z"/><rect width="4" height="8" x="4" y="9" rx="2"/>', cC = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', Bh = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', uC = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', dC = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"/>', gC = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', pC = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', mC = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', hC = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', fC = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', wC = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', _C = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', vC = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', SC = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', yC = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', xC = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', CC = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', _c = Gx, Ph = Xx, Fh = {
  ltr: Wx,
  shouldFlip: !0
}, Mh = {
  ltr: Kx,
  shouldFlip: !0
}, Mi = {
  ltr: Yx,
  shouldFlip: !0
}, bC = Jx, Nh = Qx, Uh = Zx, kC = eC, $C = tC, VC = nC, No = oC, qc = sC, Gc = aC, xd = iC, EC = rC, LC = {
  ltr: lC,
  shouldFlip: !0
}, Ih = cC, AC = {
  langCodeMap: {
    ar: Bh
  },
  default: uC
}, DC = {
  langCodeMap: {
    ar: Bh
  },
  default: dC
}, Rh = gC, Xc = {
  ltr: pC,
  shouldFlip: !0
}, TC = mC, ta = {
  ltr: hC,
  shouldFlip: !0
}, Wc = {
  ltr: fC,
  shouldFlip: !0
}, BC = {
  ltr: wC,
  shouldFlip: !0
}, zh = _C, PC = vC, Oh = SC, FC = yC, MC = xC, jh = CC;
window.Vue.unref;
window.Vue.resolveDirective;
window.Vue.createElementVNode;
window.Vue.withDirectives;
window.Vue.withCtx;
window.Vue.openBlock;
window.Vue.createBlock;
window.Codex.CdxMessage;
const NC = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), i = parseInt(e.slice(12, 14)), c = new Date(Date.UTC(t, n, o, s, a, i)), d = (/* @__PURE__ */ new Date()).getTime() - c.getTime();
  return Math.round(d / (1e3 * 3600 * 24));
}, UC = (e) => {
  const t = NC(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const yt = window.Vue.unref, ao = window.Vue.createVNode, Qt = window.Vue.createElementVNode, Cd = window.Vue.renderSlot, bd = window.Vue.withModifiers, mr = window.Vue.toDisplayString, hr = window.Vue.withCtx, IC = window.Vue.openBlock, RC = window.Vue.createElementBlock, zC = window.Vue.createCommentVNode, OC = { class: "col shrink pe-4" }, jC = { class: "col" }, HC = { class: "cx-translation__details column justify-between ma-0" }, qC = { class: "row ma-0" }, GC = { class: "col grow" }, XC = { class: "col shrink ps-2" }, WC = ["dir", "textContent"], KC = ["dir", "textContent"], YC = ["textContent"], JC = window.Vuex.useStore, QC = window.Vue.computed, Hh = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: ki,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e, { emit: t }) {
    const n = e, o = JC(), s = (c, u) => {
      const d = o.getters["mediawiki/getPage"](c, u);
      return d == null ? void 0 : d.thumbnail;
    }, a = he(), i = QC(() => {
      const c = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, u = UC(n.translation.startTimestamp);
      return a.i18n(
        c[u.postfix],
        u.value
      );
    });
    return (c, u) => e.translation ? (IC(), RC("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: u[1] || (u[1] = bd((d) => c.$emit("click"), ["stop"]))
    }, [
      Qt("div", OC, [
        ao(yt(kc), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      Qt("div", jC, [
        Qt("div", HC, [
          Qt("div", qC, [
            Qt("div", GC, [
              Cd(c.$slots, "title")
            ]),
            Qt("div", XC, [
              ao(yt(Re), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: u[0] || (u[0] = bd((d) => c.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          Cd(c.$slots, "mid-content"),
          ao(yt(F), { class: "cx-translation__footer ma-0" }, {
            default: hr(() => [
              ao(yt(x), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: hr(() => [
                  Qt("span", {
                    class: "mw-ui-autonym",
                    dir: yt(I.getDir)(e.translation.sourceLanguage),
                    textContent: mr(yt(I.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, WC),
                  ao(yt(Re), {
                    icon: yt(r0),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  Qt("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: yt(I.getDir)(e.translation.targetLanguage),
                    textContent: mr(yt(I.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, KC)
                ]),
                _: 1
              }),
              ao(yt(x), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: hr(() => [
                  Qt("span", {
                    textContent: mr(i.value)
                  }, null, 8, YC)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : zC("", !0);
  }
};
const Ko = window.Vue.unref, kd = window.Vue.toDisplayString, ZC = window.Vue.normalizeClass, eb = window.Vue.createElementVNode, fr = window.Vue.openBlock, tb = window.Vue.createElementBlock, $d = window.Vue.createCommentVNode, Vd = window.Vue.createVNode, Ca = window.Vue.withCtx, Ed = window.Vue.createBlock, nb = ["lang", "textContent"], ob = ["lang", "textContent"], sb = window.Vue.computed, ab = window.Vue.inject, ib = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: Vc,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = ab("colors").gray200, s = sb(
      () => {
        var u;
        return ((u = t.translation.progress) == null ? void 0 : u.any) * 100 || 0;
      }
    ), a = De(), { setTranslationURLParams: i } = B(), c = () => {
      i(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (u, d) => (fr(), Ed(Hh, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": Ko(Em),
      onActionIconClicked: d[0] || (d[0] = (r) => u.$emit("delete-translation")),
      onClick: c
    }, {
      title: Ca(() => [
        eb("h5", {
          class: ZC(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: kd(e.translation.sourceTitle)
        }, null, 10, nb),
        e.translation.isLeadSectionTranslation ? $d("", !0) : (fr(), tb("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: kd(e.translation.sourceSectionTitle)
        }, null, 8, ob))
      ]),
      "mid-content": Ca(() => [
        e.translation.progress ? (fr(), Ed(Ko(F), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Ca(() => [
            Vd(Ko(x), null, {
              default: Ca(() => [
                Vd(Ko(Tm), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: Ko(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : $d("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, rb = window.Vuex.useStore, qh = [], lb = (e, t, n) => qh.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), cb = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  qh.push(o);
}, ub = () => {
  const e = rb();
  return (t, n, o) => b(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !lb(t, n, o) && (s = yield ge.fetchSectionSuggestion(
      t,
      o,
      n
    ), cb(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, Gh = "cx-translation-session-position-", Xh = () => Gh + mw.user.sessionId(), Wh = () => {
  const e = Xh();
  let t = mw.storage.get(e);
  return t == null && (t = 0), parseInt(t);
}, db = function() {
  const e = Wh();
  Object.keys(mw.storage.store).filter((n) => n.startsWith(Gh)).forEach((n) => mw.storage.remove(n));
  const t = Xh();
  mw.storage.set(t, e + 1);
};
let vc = null;
function gb(e) {
  if (vc)
    return Promise.resolve(vc);
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
function pb(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function mb(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = mw.user.sessionId(), n = mw.config.get("wgDBname"), o = `cx_sx_${t}_${e.access_method}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), i = mw.user.getName(), c = Wh(), u = {
    $schema: "/analytics/mediawiki/content_translation_event/1.8.0",
    wiki_db: n,
    user_name: i,
    web_session_id: t,
    web_pageview_id: mw.user.getPageviewToken(),
    user_is_anonymous: a,
    content_translation_session_id: o,
    content_translation_session_position: c
  };
  let d;
  return a ? d = Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, u, e))
  ) : d = gb(i).then((r) => {
    vc = r, mw.eventLog.submit(
      s,
      Object.assign({}, u, e, {
        user_global_edit_count: r,
        user_global_edit_count_bucket: pb(r)
      })
    );
  }), d.then(() => {
    db();
  });
}
const it = () => (e) => (e.access_method || (e.access_method = Ws ? "desktop" : "mobile web"), mb(e)), Kh = window.Vue.ref, Yh = Kh(null), Sc = Kh(null), hb = (e) => {
  Yh.value = e;
}, fb = (e) => {
  Sc.value = e;
}, Ni = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = B(), s = it();
  return {
    logDashboardTranslationStartEvent: () => {
      const i = {
        event_type: "dashboard_translation_start",
        event_source: Yh.value,
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
      return Sc.value && (i.event_context = Sc.value), o.value ? (i.translation_source_section = o.value, i.translation_type = "section") : i.translation_type = "article", s(i);
    },
    setStartTranslationEventSource: hb,
    setStartTranslationEventContext: fb
  };
}, na = () => {
  const e = De(), t = sh(), { setTranslationURLParams: n } = B(), { setStartTranslationEventSource: o, setStartTranslationEventContext: s } = Ni();
  return (a, i, c, u, d = null, r = !0) => b(void 0, null, function* () {
    const l = yield t(
      i,
      c,
      a
    );
    l && (n(l), o(u), s(d), r && e.push({
      name: "sx-translation-confirmer"
    }));
  });
};
const ba = window.Vue.withModifiers, wr = window.Vue.toDisplayString, _r = window.Vue.createElementVNode, lt = window.Vue.unref, ka = window.Vue.openBlock, Ld = window.Vue.createBlock;
window.Vue.createCommentVNode;
const xn = window.Vue.createVNode, zn = window.Vue.withCtx, Ad = window.Vue.createElementBlock, wb = ["lang", "href", "textContent"], _b = {
  key: 1,
  class: "flex"
}, vb = { key: 2 }, Dd = window.Vue.computed, Td = window.Vue.ref, vr = window.Codex.CdxButton, Sr = window.Codex.CdxIcon, Sb = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: jc,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Td(!0), o = Td(null), s = Dd(() => {
      var l;
      return (l = o.value) == null ? void 0 : l.missingSections;
    }), a = Dd(
      () => s.value && Object.keys(s.value)[0]
    );
    ub()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((l) => o.value = l).catch((l) => console.log(l)).finally(() => n.value = !1), De();
    const { setSectionURLParam: c } = B(), u = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, d = na(), r = (l) => {
      d(
        t.translation.sourceTitle,
        t.translation.sourceLanguage,
        t.translation.targetLanguage,
        "continue_published"
      ), l && c(l);
    };
    return (l, g) => (ka(), Ld(Hh, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: u
    }, {
      title: zn(() => [
        _r("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: g[0] || (g[0] = ba(() => {
          }, ["stop"])),
          textContent: wr(e.translation.sourceTitle)
        }, null, 8, wb)
      ]),
      "mid-content": zn(() => [
        xn(lt(F), { class: "ma-0" }, {
          default: zn(() => [
            xn(lt(x), null, {
              default: zn(() => [
                n.value ? (ka(), Ld(lt(st), { key: 0 })) : s.value ? (ka(), Ad("div", _b, [
                  xn(lt(vr), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: g[1] || (g[1] = ba((p) => r(a.value), ["stop"]))
                  }, {
                    default: zn(() => [
                      xn(lt(Sr), {
                        class: "me-1",
                        icon: lt(_c)
                      }, null, 8, ["icon"]),
                      _r("span", null, wr(a.value), 1)
                    ]),
                    _: 1
                  }),
                  xn(lt(vr), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": l.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: g[2] || (g[2] = ba((p) => r(null), ["stop"]))
                  }, {
                    default: zn(() => [
                      xn(lt(Sr), { icon: lt(Gc) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : (ka(), Ad("div", vb, [
                  xn(lt(vr), {
                    class: "cx-published-translation__start-new-translation-button flex items-center pa-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: g[3] || (g[3] = ba((p) => r(null), ["stop"]))
                  }, {
                    default: zn(() => [
                      xn(lt(Sr), {
                        class: "me-1",
                        icon: lt(_c)
                      }, null, 8, ["icon"]),
                      _r("span", null, wr(l.$i18n("sx-published-translation-new-translation-button-label")), 1)
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
}, yb = window.Vuex.useStore, xb = () => {
  const { commit: e } = yb(), t = it();
  return (n) => b(void 0, null, function* () {
    n.sectionTranslationId ? (yield vt.deleteTranslation(
      n.sectionTranslationId,
      n.translationId,
      n.sectionId
    )) && e(
      "translator/removeTranslationBySectionTranslationId",
      n.sectionTranslationId
    ) : (yield vt.deleteCXTranslation(
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
const Cb = window.Vue.resolveDirective, yr = window.Vue.createElementVNode, bb = window.Vue.withDirectives, xr = window.Vue.unref, Bd = window.Vue.createVNode, Pd = window.Vue.withCtx, kb = window.Vue.openBlock, $b = window.Vue.createBlock, Vb = { class: "pa-4" }, Eb = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, Lb = {
  __name: "SXConfirmTranslationDeletionDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: ki,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "continue-translation",
    "discard-translation"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, s = () => o("update:modelValue", !1), a = xb(), i = () => {
      a(n.translation), s();
    };
    return (c, u) => {
      const d = Cb("i18n");
      return kb(), $b(xr(St), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: Pd(() => [
          yr("div", Eb, [
            Bd(xr(Ue), {
              class: "grow py-3",
              large: "",
              label: c.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            Bd(xr(Ue), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: c.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: i
            }, null, 8, ["label"])
          ])
        ]),
        default: Pd(() => [
          yr("div", Vb, [
            bb(yr("span", null, null, 512), [
              [d, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function Ab(e, t, n) {
  return b(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield Db(t, n)).filter((s) => e.includes(s)) : [];
  });
}
function Fd(e, t, n) {
  return b(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(I.sortByAutonym) : (yield Ab(e, t, n)).sort(I.sortByAutonym);
  });
}
function Db(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function Tb() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function Bb(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
const Pb = window.Vue.computed;
function Fb(e, t) {
  const n = Pb(() => {
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
const Cr = window.Vue.ref, br = window.Vue.watch, Mb = window.Vue.computed;
function Jh(e, t, n) {
  const o = Cr(""), s = Cr(-1), a = Cr(null), i = () => {
    s.value++, s.value >= c.value.length && (s.value = 0);
  }, c = Mb(() => e.value ? t.value : n && n.value ? [...n.value, ...t.value] : []), u = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return br(e, () => {
    s.value = -1;
  }), br(t, () => {
    t.value && c.value.length > 0 && (s.value = 0);
  }), br(s, () => b(this, null, function* () {
    var d;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = c.value[s.value], (d = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || d.scrollIntoView(!1);
  })), { next: i, prev: u, keyboardNavigationContainer: a, selectedItem: o };
}
function Kc(e, t, n) {
  let o;
  const s = (...a) => {
    const i = this, c = () => {
      o = null, n || e.apply(i, a);
    };
    n && !o && e.apply(i, a), (!o || t) && (clearTimeout(o), o = setTimeout(c, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const $a = window.Vue.renderSlot, ke = window.Vue.unref, Nb = window.Vue.isRef, Md = window.Vue.createVNode, Yo = window.Vue.withModifiers, Jo = window.Vue.withKeys, Cn = window.Vue.createElementVNode, Ub = window.Vue.resolveDirective, Va = window.Vue.withDirectives, kr = window.Vue.renderList, $r = window.Vue.Fragment, Zt = window.Vue.openBlock, en = window.Vue.createElementBlock, Nd = window.Vue.toDisplayString, Ea = window.Vue.normalizeClass, Vr = window.Vue.createCommentVNode, Ib = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, Rb = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, zb = { class: "results px-3 pt-4" }, Ob = { class: "results-header ps-8 pb-2" }, jb = { class: "results-languages--suggestions pa-0 ma-0" }, Hb = ["lang", "dir", "aria-selected", "onClick", "textContent"], qb = { class: "results px-3 pt-4" }, Gb = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, Xb = ["lang", "dir", "aria-selected", "onClick", "textContent"], Wb = ["aria-selected"], Kb = { class: "no-results px-3 py-4" }, Yb = { class: "ps-8" }, La = window.Vue.ref, Jb = window.Vue.watch, Qb = window.Vue.onMounted, Ud = window.Vue.computed, Qh = {
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
      default: Tb
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = La(null), a = La(""), i = La([]), c = La(n.suggestions), u = Ud(
      () => Bb(i.value)
    ), d = Ud(() => {
      const C = i.value.length;
      return C < 10 ? "few-results" : C < 30 ? "some-results" : "many-results";
    }), r = (C) => o("select", C), l = () => o("close"), { autocompletion: g, onTabSelect: p } = Fb(
      a,
      i
    ), { next: m, prev: h, keyboardNavigationContainer: f, selectedItem: _ } = Jh(a, i, c), w = () => {
      if (a.value && n.languages.includes(a.value)) {
        r(a.value);
        return;
      }
      if (_.value) {
        r(_.value);
        return;
      }
      if (i.value.length === 1) {
        r(i.value[0]);
        return;
      }
    };
    return Jb(a, Kc(() => b(this, null, function* () {
      i.value = yield Fd(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), Qb(() => b(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), i.value = yield Fd(
        n.languages,
        "",
        n.searchAPI
      );
    })), (C, v) => {
      const E = Ub("i18n");
      return Zt(), en("div", {
        ref_key: "keyboardNavigationContainer",
        ref: f,
        class: "mw-ui-language-selector"
      }, [
        $a(C.$slots, "search", {}, () => [
          Cn("div", Ib, [
            Md(ke(rc), {
              value: ke(g),
              "onUpdate:value": v[0] || (v[0] = (L) => Nb(g) ? g.value = L : null),
              icon: ke(_u),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            Md(ke(rc), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": v[1] || (v[1] = (L) => a.value = L),
              class: "mw-ui-language-selector__search pa-4",
              icon: ke(_u),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                Jo(Yo(w, ["prevent"]), ["enter"]),
                Jo(Yo(ke(m), ["stop", "prevent"]), ["down"]),
                Jo(Yo(ke(h), ["stop", "prevent"]), ["up"]),
                Jo(Yo(l, ["prevent"]), ["esc"]),
                Jo(Yo(ke(p), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        Cn("section", Rb, [
          e.suggestions.length && !a.value ? $a(C.$slots, "suggestions", { key: 0 }, () => [
            Cn("section", zb, [
              Va(Cn("p", Ob, null, 512), [
                [E, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              Cn("ul", jb, [
                (Zt(!0), en($r, null, kr(e.suggestions, (L) => (Zt(), en("li", {
                  key: L,
                  class: Ea(["language ma-0", { "language--selected": L === ke(_) }]),
                  lang: L,
                  dir: ke(I.getDir)(L),
                  "aria-selected": L === ke(_) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (k) => r(L),
                  textContent: Nd(ke(I.getAutonym)(L))
                }, null, 10, Hb))), 128))
              ])
            ])
          ]) : Vr("", !0),
          u.value.length ? $a(C.$slots, "search", { key: 1 }, () => [
            Cn("section", qb, [
              e.suggestions.length && !a.value ? Va((Zt(), en("p", Gb, null, 512)), [
                [E, void 0, "cx-sx-language-selector-all-languages"]
              ]) : Vr("", !0),
              (Zt(!0), en($r, null, kr(u.value, (L, k) => (Zt(), en("ul", {
                key: k,
                class: Ea(["results-languages pa-0 ma-0 mb-6", d.value])
              }, [
                (Zt(!0), en($r, null, kr(L, (T) => (Zt(), en("li", {
                  key: T,
                  class: Ea(["language ma-0", { "language--selected": T === ke(_) }]),
                  lang: T,
                  dir: ke(I.getDir)(T),
                  role: "option",
                  "aria-selected": T === ke(_) || null,
                  tabindex: "-1",
                  onClick: (ie) => r(T),
                  textContent: Nd(ke(I.getAutonym)(T))
                }, null, 10, Xb))), 128)),
                e.allOptionEnabled && !a.value ? Va((Zt(), en("li", {
                  key: 0,
                  class: Ea(["language ma-0", { "language--selected": ke(_) === "all" }]),
                  role: "option",
                  "aria-selected": ke(_) === "all" || null,
                  tabindex: "-1",
                  onClick: v[2] || (v[2] = (T) => r("all"))
                }, null, 10, Wb)), [
                  [E, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : Vr("", !0)
              ], 2))), 128))
            ])
          ]) : $a(C.$slots, "noresults", { key: 2 }, () => [
            Cn("section", Kb, [
              Va(Cn("h3", Yb, null, 512), [
                [E, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const Zb = window.Vue.resolveDirective, Id = window.Vue.withDirectives, Qo = window.Vue.openBlock, Zo = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const $e = window.Vue.unref, Rd = window.Vue.toDisplayString, xt = window.Vue.createVNode, zd = window.Vue.withModifiers, On = window.Vue.withCtx, ek = window.Vue.normalizeClass, tk = {
  key: 0,
  class: "mw-ui-autonym"
}, nk = ["lang", "dir", "textContent"], ok = {
  key: 0,
  class: "mw-ui-autonym"
}, sk = ["lang", "dir", "textContent"], es = window.Vue.computed, ak = window.Vue.inject, ik = window.Vue.ref, Od = window.Codex.CdxButton, Er = window.Codex.CdxIcon, xi = {
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
    const n = e, o = t, s = ak("breakpoints"), a = es(() => s.value.mobile), i = ik(null), c = es(() => !!i.value), u = () => i.value = "source", d = () => i.value = "target", r = () => i.value = null, l = es(() => {
      if (!c.value)
        return;
      const f = {
        source: "sourceLanguages",
        target: "targetLanguages"
      }[i.value];
      return n[f];
    }), g = (h) => {
      const _ = {
        source: "update:selectedSourceLanguage",
        target: "update:selectedTargetLanguage"
      }[i.value];
      r(), o(_, h);
    }, p = es(
      () => n.selectedSourceLanguage === "all"
    ), m = es(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, f) => {
      const _ = Zb("i18n");
      return Qo(), Zo("div", {
        class: ek(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
      }, [
        xt($e(F), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: On(() => [
            xt($e(x), {
              class: "flex justify-end px-0",
              cols: a.value ? 5 : null
            }, {
              default: On(() => [
                xt($e(Od), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  onClick: zd(u, ["stop"])
                }, {
                  default: On(() => [
                    p.value ? Id((Qo(), Zo("span", tk, null, 512)), [
                      [_, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Qo(), Zo("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: $e(I.getDir)(e.selectedSourceLanguage),
                      textContent: Rd($e(I.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, nk)),
                    xt($e(Er), {
                      size: "x-small",
                      icon: $e(xd)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["cols"]),
            xt($e(x), {
              class: "sx-translation-list-language-selector__arrow flex justify-center px-0",
              cols: a.value ? 2 : null
            }, {
              default: On(() => [
                xt($e(Er), { icon: $e(Fh) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            xt($e(x), {
              class: "px-0",
              cols: a.value ? 5 : null
            }, {
              default: On(() => [
                xt($e(Od), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.targetLanguages.length < 2,
                  onClick: zd(d, ["stop"])
                }, {
                  default: On(() => [
                    m.value ? Id((Qo(), Zo("span", ok, null, 512)), [
                      [_, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Qo(), Zo("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: $e(I.getDir)(e.selectedTargetLanguage),
                      textContent: Rd($e(I.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, sk)),
                    xt($e(Er), {
                      size: "x-small",
                      icon: $e(xd)
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
        xt($e(St), {
          value: c.value,
          "onUpdate:value": f[0] || (f[0] = (w) => c.value = w),
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-mode": "dark",
          onClose: r
        }, {
          default: On(() => [
            xt($e(Qh), {
              class: "sx-translation-list-language-selector__widget col-12",
              placeholder: h.$i18n("cx-sx-language-selector-placeholder"),
              languages: l.value,
              "all-option-enabled": e.allOptionEnabled,
              onSelect: g,
              onClose: r
            }, null, 8, ["placeholder", "languages", "all-option-enabled"])
          ]),
          _: 1
        }, 8, ["value", "title", "fullscreen", "header"])
      ], 2);
    };
  }
};
const jd = window.Vue.unref, rk = window.Vue.createVNode, Aa = window.Vue.createElementVNode, Hd = window.Vue.toDisplayString, lk = window.Vue.openBlock, ck = window.Vue.createElementBlock, uk = { class: "cx-list-empty-placeholder pa-4" }, dk = { class: "cx-list-empty-placeholder__icon-container" }, gk = { class: "cx-list-empty-placeholder__icon" }, pk = ["textContent"], mk = ["textContent"], hk = window.Codex.CdxIcon, Zh = {
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
    return (t, n) => (lk(), ck("div", uk, [
      Aa("div", dk, [
        Aa("div", gk, [
          rk(jd(hk), { icon: jd(Rh) }, null, 8, ["icon"])
        ])
      ]),
      Aa("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: Hd(e.title)
      }, null, 8, pk),
      Aa("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: Hd(e.description)
      }, null, 8, mk)
    ]));
  }
}, fk = window.Vuex.useStore, wk = window.Vue.ref, Da = wk({ draft: !1, published: !1 }), Uo = () => {
  const e = fk(), t = Fo(), n = (s) => b(void 0, null, function* () {
    let a = yield vt.fetchTranslations(s);
    e.commit("translator/clearTranslationsByStatus", s), a.forEach(
      (c) => e.commit("translator/addTranslation", c)
    );
    const i = {};
    for (const c of a) {
      const u = c.sourceLanguage;
      i[u] = i[u] || [], i[u].push(c);
    }
    Da.value[s] = !0;
    for (const [c, u] of Object.entries(i))
      t(
        c,
        u.map((d) => d.sourceTitle)
      ), u.forEach((d) => {
        const { targetLanguage: r, targetTitle: l } = d, g = !!e.getters["mediawiki/getPage"](
          r,
          l
        );
        l && !g && e.commit(
          "mediawiki/addPage",
          new Po({ title: l, pagelanguage: r })
        );
      });
  });
  return {
    fetchTranslationsByStatus: n,
    fetchAllTranslations: () => {
      const a = Object.keys(Da.value).filter(
        (i) => !Da.value[i]
      ).map(
        (i) => n(i)
      );
      return Promise.all(a).catch((i) => {
        mw.log.error("[CX] Error while fetching translations", i);
      });
    },
    translationsFetched: Da
  };
};
const _k = window.Vue.toDisplayString, Lr = window.Vue.normalizeClass, qd = window.Vue.createElementVNode, Mt = window.Vue.openBlock, io = window.Vue.createBlock, Ta = window.Vue.createCommentVNode, Gd = window.Vue.unref, Xd = window.Vue.renderList, Wd = window.Vue.Fragment, Ba = window.Vue.createElementBlock, vk = window.Vue.createVNode, Kd = window.Vue.withCtx, Sk = ["textContent"], yk = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, xk = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, Pa = window.Vue.ref, Ct = window.Vue.computed, Ck = window.Vue.inject, bk = window.Vuex.useStore, Yd = {
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
    const t = e, n = Pa("all"), o = Pa("all"), s = bk(), { translationsFetched: a } = Uo(), i = Ct(
      () => a.value[t.translationStatus]
    ), c = Pa(!1), u = Pa(null), d = Ct(
      () => t.translationStatus === "draft"
    ), r = Ct(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), l = Ct(
      () => n.value === "all"
    ), g = Ct(
      () => o.value === "all"
    ), p = Ct(
      () => r.value.filter(
        (v) => (l.value || v.sourceLanguage === n.value) && (g.value || v.targetLanguage === o.value)
      ).sort((v, E) => v.lastUpdatedTimestamp < E.lastUpdatedTimestamp)
    ), m = Ct(() => {
      const v = r.value.map(
        (E) => E.targetLanguage
      );
      return [...new Set(v)];
    }), h = Ct(() => {
      const v = r.value.map(
        (E) => E.sourceLanguage
      );
      return [...new Set(v)];
    }), f = (v) => {
      u.value = v, c.value = !0;
    }, _ = Ct(() => t.activeStatus === t.translationStatus), w = Ck("breakpoints"), y = Ct(() => w.value.mobile), C = Ct(
      () => y.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (v, E) => _.value ? (Mt(), io(Gd(ot), {
      key: 0,
      class: Lr(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: Kd(() => [
        qd("div", {
          class: Lr(["cx-translation-list__header", C.value])
        }, [
          qd("h3", {
            class: Lr(["px-4 mw-ui-card__title mb-0", { "pb-4": y.value }]),
            textContent: _k(v.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, Sk),
          p.value.length ? (Mt(), io(xi, {
            key: 0,
            "selected-source-language": n.value,
            "onUpdate:selectedSourceLanguage": E[0] || (E[0] = (L) => n.value = L),
            "selected-target-language": o.value,
            "onUpdate:selectedTargetLanguage": E[1] || (E[1] = (L) => o.value = L),
            "source-languages": h.value,
            "target-languages": m.value,
            "all-option-enabled": ""
          }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : Ta("", !0)
        ], 2)
      ]),
      default: Kd(() => [
        i.value && !p.value.length ? (Mt(), io(Zh, {
          key: 0,
          title: v.$i18n("cx-sx-translation-list-empty-title"),
          description: v.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : Ta("", !0),
        i.value ? Ta("", !0) : (Mt(), io(Gd(st), { key: 1 })),
        d.value ? (Mt(), Ba("div", yk, [
          (Mt(!0), Ba(Wd, null, Xd(p.value, (L) => (Mt(), io(ib, {
            key: `${e.translationStatus}-${L.key}`,
            translation: L,
            onDeleteTranslation: (k) => f(L)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (Mt(), Ba("div", xk, [
          (Mt(!0), Ba(Wd, null, Xd(p.value, (L) => (Mt(), io(Sb, {
            key: `${e.translationStatus}-${L.key}`,
            translation: L,
            onDeleteTranslation: (k) => f(L)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])),
        vk(Lb, {
          modelValue: c.value,
          "onUpdate:modelValue": E[2] || (E[2] = (L) => c.value = L),
          translation: u.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : Ta("", !0);
  }
}, kk = window.Vue.computed, $k = window.Vuex.useStore, ze = () => {
  const e = $k(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = B();
  return { sectionSuggestion: kk(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ) };
}, Vk = window.Vuex.useStore, Ek = window.Vue.computed, Ft = () => {
  const e = Vk(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = B();
  return { currentTranslation: Ek(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (i) => i.status === "draft" && i.sourceTitle === s.value && i.sectionTitleMatches(o.value) && i.sourceLanguage === t.value && i.targetLanguage === n.value
    )
  ) };
}, Jd = window.Vue.computed, Lk = window.Vuex.useStore, rt = () => {
  const e = Lk(), { sectionSuggestion: t } = ze(), { currentTranslation: n } = Ft(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), i = Jd(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), c = Jd(() => {
    var d, r;
    const u = ((d = t.value) == null ? void 0 : d.targetTitle) || ((r = n.value) == null ? void 0 : r.targetTitle);
    return e.getters["mediawiki/getPage"](
      a.value,
      u
    );
  });
  return { currentSourcePage: i, currentTargetPage: c };
}, Ak = window.Vue.ref, Dk = window.Vue.watchEffect, { sectionURLParameter: qs } = B(), Tk = (e, t) => b(void 0, null, function* () {
  const n = e.language, o = e.title, s = e.articleSize, a = t.missingSections, c = (yield ge.fetchSuggestionSourceSections(
    n,
    o
  )).sections.filter((u) => u.level === "2").reduce((u, d, r, l) => {
    const g = r < l.length - 1 ? l[r + 1].byteoffset : s;
    return u[d.line] = g - d.byteoffset, u;
  }, {});
  return qs.value ? c[qs.value] : Object.keys(c).filter((u) => a[u]).reduce((u, d) => u + c[d], 0);
}), Ar = (e) => {
  const s = e / 5 / 200;
  return Math.ceil(s);
}, Bk = (e) => {
  const t = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-whole-article",
    Math.round(t * 2) / 2,
    e
  ];
}, Pk = (e, t) => {
  const n = e >= 60 ? e / 60 : 0, o = Math.round(n * 2) / 2;
  return qs.value && o === 0 ? [
    "cx-sx-translation-confirmer-translation-time-single-section-minute",
    e
  ] : qs.value && o > 0 ? [
    "cx-sx-translation-confirmer-translation-time-single-section-hour",
    o
  ] : [
    "cx-sx-translation-confirmer-translation-time-sections",
    o,
    e,
    t
  ];
}, ef = () => {
  const { currentSourcePage: e } = rt(), { sectionSuggestion: t } = ze(), n = Ak(null);
  return Dk(() => {
    if (t.value)
      Tk(
        e.value,
        t.value
      ).then((o) => {
        const s = qs.value ? 1 : Object.keys(t.value.missingSections).length;
        n.value = Pk(
          Ar(o),
          s
        );
      });
    else if (e.value) {
      const o = Ar(e.value.articleSize);
      n.value = Bk(o);
    }
  }), { translationSizeMessageArgs: n, bytesToMinutes: Ar };
};
const Dr = window.Vue.toDisplayString, Tr = window.Vue.openBlock, Qd = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const yc = window.Vue.createElementVNode, Fk = window.Vue.unref, Mk = window.Vue.withCtx, Nk = window.Vue.createBlock, Uk = {
  key: 0,
  class: "cdx-info-chip__text"
}, Ik = {
  key: 1,
  class: "cdx-info-chip__text custom-info-chip__with-slash"
}, Rk = { class: "cdx-info-chip__text custom-info-chip__with-slash__first" }, zk = /* @__PURE__ */ yc("span", null, "/", -1), Ok = { class: "cdx-info-chip__text custom-info-chip__with-slash__second" }, jk = window.Codex.CdxInfoChip, Br = window.Vue.computed, Ui = {
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
    const t = e, n = Br(() => t.content.lastIndexOf("/")), o = Br(() => t.content.slice(0, n.value)), s = Br(() => t.content.slice(n.value + 1));
    return (a, i) => (Tr(), Nk(Fk(jk), {
      icon: e.icon,
      class: "custom-info-chip"
    }, {
      default: Mk(() => [
        n.value === -1 ? (Tr(), Qd("div", Uk, Dr(e.content), 1)) : (Tr(), Qd("div", Ik, [
          yc("span", Rk, Dr(o.value), 1),
          zk,
          yc("span", Ok, Dr(s.value), 1)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const ce = window.Vue.unref, bt = window.Vue.createVNode, bn = window.Vue.createElementVNode, Fa = window.Vue.toDisplayString, ct = window.Vue.withCtx, Hk = window.Vue.resolveDirective, Pr = window.Vue.withDirectives, jn = window.Vue.openBlock, ro = window.Vue.createBlock, lo = window.Vue.createCommentVNode, Zd = window.Vue.withModifiers, qk = window.Vue.createElementBlock, Gk = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, Xk = { class: "col shrink pe-4" }, Wk = ["lang", "dir", "textContent"], Kk = ["lang", "dir", "textContent"], Yk = ["textContent"], Jk = ["textContent"], Fr = window.Codex.CdxIcon, kt = window.Vue.computed, Qk = window.Vue.inject, Zk = window.Vuex.useStore, xc = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [Mo, to, Eo],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = Zk(), { bytesToMinutes: o } = ef(), s = kt(() => t.suggestion), a = kt(
      () => s.value.sourceTitle || s.value.title
    ), i = kt(
      () => n.getters["mediawiki/getPage"](
        s.value.sourceLanguage,
        a.value
      )
    ), c = kt(
      () => {
        var w;
        return (w = s.value) == null ? void 0 : w.missingSectionsCount;
      }
    ), u = kt(() => {
      var w;
      return (w = i.value) == null ? void 0 : w.description;
    }), d = kt(
      () => s.value instanceof to
    ), r = kt(
      () => s.value instanceof Eo
    ), { sourceLanguageAutonym: l, targetLanguageAutonym: g } = Le(n), p = kt(
      () => r.value ? Nh : Uh
    ), m = Qk("colors"), h = kt(
      () => r.value ? m.blue600 : "currentColor"
    ), f = kt(() => {
      var w;
      return o((w = i.value) == null ? void 0 : w.articleSize) < 15;
    }), _ = kt(
      () => s.value instanceof Qm || s.value instanceof Zm
    );
    return (w, y) => {
      const C = Hk("i18n");
      return s.value ? (jn(), qk("div", Gk, [
        bn("div", Xk, [
          bt(ce(kc), {
            class: "cx-suggestion__thumbnail",
            thumbnail: i.value && i.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        bt(ce(F), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: ct(() => [
            bt(ce(F), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: ct(() => [
                bt(ce(x), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: ct(() => [
                    bn("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: s.value.sourceLanguage,
                      dir: ce(I.getDir)(s.value.sourceLanguage),
                      textContent: Fa(a.value)
                    }, null, 8, Wk)
                  ]),
                  _: 1
                }),
                bt(ce(x), { shrink: "" }, {
                  default: ct(() => [
                    bn("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: s.value.sourceLanguage,
                      dir: ce(I.getDir)(s.value.sourceLanguage),
                      textContent: Fa(u.value)
                    }, null, 8, Kk)
                  ]),
                  _: 1
                }),
                f.value && !d.value && !_.value ? (jn(), ro(ce(x), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: ct(() => [
                    Pr(bn("small", null, null, 512), [
                      [C, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : lo("", !0),
                d.value ? (jn(), ro(ce(x), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
                  shrink: ""
                }, {
                  default: ct(() => [
                    Pr(bn("small", null, null, 512), [
                      [C, [c.value], "cx-sx-translation-suggestion-info"]
                    ])
                  ]),
                  _: 1
                })) : r.value ? (jn(), ro(ce(x), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: ct(() => [
                    bt(ce(F), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: ct(() => [
                        bt(ce(x), { grow: "" }, {
                          default: ct(() => [
                            bn("small", {
                              textContent: Fa(ce(l))
                            }, null, 8, Yk),
                            bt(ce(Fr), {
                              icon: ce(Fh),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            bn("small", {
                              textContent: Fa(ce(g))
                            }, null, 8, Jk)
                          ]),
                          _: 1
                        }),
                        c.value ? (jn(), ro(ce(x), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: ct(() => [
                            Pr(bn("small", null, null, 512), [
                              [C, [
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
                _.value ? (jn(), ro(ce(x), {
                  key: 3,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: ct(() => [
                    bt(Ui, {
                      icon: ce(Mi),
                      content: s.value.collection.name
                    }, null, 8, ["icon", "content"])
                  ]),
                  _: 1
                })) : lo("", !0)
              ]),
              _: 1
            }),
            bt(ce(x), { shrink: "" }, {
              default: ct(() => [
                r.value ? lo("", !0) : (jn(), ro(ce(Fr), {
                  key: 0,
                  icon: ce(No),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: y[0] || (y[0] = Zd((v) => w.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                bt(ce(Fr), {
                  class: "cx-suggestion__favorite-button",
                  icon: p.value,
                  "icon-color": h.value,
                  onClick: y[1] || (y[1] = Zd((v) => w.$emit("bookmark"), ["stop"]))
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
}, e8 = "suggestion_filter_topic_area", t8 = "suggestion_filter_search_result_seed", n8 = "suggestion_filter_collections", o8 = "suggestion_filter_previous_edits", s8 = "suggestion_filter_popular_articles", tf = (e) => {
  if (e.type === Ne || e.type === ht)
    return e8;
  if (e.type === _t)
    return t8;
  if (e.id === le || e.type === le)
    return n8;
  if (e.id === Pt)
    return o8;
  if (e.id === Wt)
    return s8;
}, Cc = (e) => {
  if (e.type === Ne || e.type === ht || e.type === le || e.type === _t)
    return e.id;
  if (e.id === le)
    return "all-collections";
};
const a8 = window.Vue.toDisplayString, eg = window.Vue.createElementVNode, i8 = window.Vue.renderList, tg = window.Vue.Fragment, Mr = window.Vue.openBlock, ng = window.Vue.createElementBlock, r8 = window.Vue.unref, l8 = window.Vue.normalizeClass, c8 = window.Vue.createBlock, u8 = { class: "sx-suggestions-filters__group-label mb-3" }, d8 = { class: "sx-suggestions-filters__group-filters mb-3" }, g8 = {
  __name: "SXSuggestionsFiltersDialogTabGroupContent",
  props: {
    groupLabel: {
      type: String,
      required: !0
    },
    filters: {
      type: Array,
      required: !0
    },
    filterTypeToIconMap: {
      type: Object,
      required: !0
    },
    tentativelySelectFilter: {
      type: Function,
      required: !0
    },
    isSelected: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const { getFilterProvider: t } = Ti();
    return (n, o) => (Mr(), ng(tg, null, [
      eg("div", u8, a8(e.groupLabel), 1),
      eg("div", d8, [
        (Mr(!0), ng(tg, null, i8(e.filters, (s) => (Mr(), c8(Ui, {
          key: s.id,
          class: l8(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(s)
          }]),
          icon: e.filterTypeToIconMap[r8(t)(s)],
          content: s.label,
          onClick: (a) => e.tentativelySelectFilter(s)
        }, null, 8, ["class", "icon", "content", "onClick"]))), 128))
      ])
    ], 64));
  }
}, p8 = window.Vue.computed, og = window.Vue.ref, sg = window.Vue.watch, Yc = (e, t) => {
  const o = og([]), s = og(!1), a = p8(
    () => o.value.slice(0, 4)
  ), i = Kc(() => b(void 0, null, function* () {
    if (!t.value) {
      s.value = !1;
      return;
    }
    try {
      o.value = yield no.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      s.value = !1;
    }
  }), 500), c = () => {
    s.value = !0, o.value = [], i();
  };
  return sg(t, c), sg(e, c), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
}, ag = window.Vue.ref, ig = window.Vue.watch, m8 = mw.loader.require("ext.cx.articletopics"), h8 = m8.flatMap(
  (e) => e.topics.map((t) => He(pe({}, t), {
    groupId: e.groupId
  }))
), f8 = (e) => {
  const t = ag(""), n = ag({ topics: [], topic_areas: [], collections: [] }), o = he(), { pageCollections: s } = Ic(), { sourceLanguageURLParameter: a } = B(), i = (d) => (d = d.toLowerCase(), h8.filter(
    (r) => r.label.toLowerCase().includes(d)
  )), c = (d) => (d = d.toLowerCase(), s.value.filter(
    (r) => r.name.toLowerCase().includes(d)
  )), { searchResultsSlice: u } = Yc(a, t);
  return ig(u, () => {
    n.value.topics = u.value.map((d) => {
      var r;
      return {
        label: d.title,
        value: d.title,
        description: d.description,
        thumbnail: {
          url: (r = d.thumbnail) == null ? void 0 : r.source
        }
      };
    });
  }), ig([t, e], () => b(void 0, null, function* () {
    n.value.topic_areas = i(t.value).map(
      (d) => ({
        label: d.label,
        value: d.label,
        description: o.i18n(
          e.value === "all" ? "cx-sx-suggestions-filter-search-results-topics-default-description" : "cx-sx-suggestions-filter-search-results-topics-alternative-description"
        ),
        icon: e.value === "all" ? Oh : null,
        filterType: d.groupId === "geography" ? ht : Ne,
        filterId: d.topicId
      })
    ), n.value.collections = c(t.value).map(
      (d) => ({
        label: d.name,
        value: d.name,
        description: o.i18n(
          e.value === "all" ? "cx-sx-suggestions-filter-search-results-collections-default-description" : "cx-sx-suggestions-filter-search-results-collections-alternative-description",
          d.articlesCount
        ),
        icon: e.value === "all" ? Mi : null,
        filterType: le,
        filterId: d.name
      })
    );
  })), { searchInput: t, searchResults: n };
};
const Ve = window.Vue.unref, $t = window.Vue.createVNode, tn = window.Vue.withCtx, w8 = window.Vue.resolveDirective, Nt = window.Vue.createElementVNode, Nr = window.Vue.withDirectives, Ma = window.Vue.toDisplayString, _8 = window.Vue.createTextVNode, v8 = window.Vue.vShow, Ur = window.Vue.renderList, Ir = window.Vue.Fragment, ut = window.Vue.openBlock, nn = window.Vue.createElementBlock, S8 = window.Vue.isRef, y8 = window.Vue.createCommentVNode, Rr = window.Vue.createBlock, x8 = { class: "sx-suggestions-filters" }, C8 = { class: "mb-0" }, b8 = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, k8 = { class: "mb-3" }, $8 = { class: "px-4 pb-4 pt-7" }, V8 = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, E8 = ["onClick"], L8 = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, A8 = { key: 0 }, D8 = { key: 1 }, T8 = { class: "sx-suggestions-filters__search-results-empty" }, B8 = { class: "sx-suggestions-filters__search-results-empty-primary" }, P8 = { class: "sx-suggestions-filters__search-results-empty-secondary" }, Na = window.Vue.ref, Ua = window.Vue.computed, F8 = window.Vue.inject, rg = window.Codex.CdxButton, M8 = window.Codex.CdxIcon, N8 = window.Codex.CdxTextInput, U8 = window.Codex.CdxMenu, I8 = window.Codex.CdxTabs, R8 = window.Codex.CdxTab, z8 = {
  __name: "SXSuggestionsFiltersDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = he(), o = t, s = {
      [Pt]: jh,
      [Wt]: Ih,
      [le]: Mi,
      [Ne]: null,
      [_t]: null
    }, a = Ua(() => [
      {
        name: "all",
        label: n.i18n("cx-sx-suggestions-filters-tab-all"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder"
        ),
        filterGroups: d.value.map((P) => ({
          id: P.id,
          label: P.label,
          filters: m(P.id)
        }))
      },
      {
        name: "collections",
        label: n.i18n("cx-sx-suggestions-filters-tab-collections"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-collections"
        ),
        filterGroups: [p("collections")].filter(Boolean)
      },
      {
        name: "geography",
        label: n.i18n("cx-sx-suggestions-filters-tab-regions"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-regions"
        ),
        filterGroups: [p("geography")].filter(Boolean)
      },
      {
        name: "topics",
        label: n.i18n("cx-sx-suggestions-filters-tab-topics"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-topics"
        ),
        filterGroups: d.value.filter(
          (P) => h(P.id)
        )
      }
    ]), i = Na("all"), c = (P) => i.value = P, u = (P) => {
      const j = p(le), N = p(ht);
      return P === le && j.filters.length > 6 ? !0 : P === ht && N.filters.length > 6;
    }, { allFilters: d, isFilterSelected: r, selectFilter: l, findSelectedFilter: g } = Rc(), p = (P) => {
      if (P === ht) {
        const z = d.value.find((j) => j.id === P);
        return z.filters = z.filters.map((j) => He(pe({}, j), {
          type: ht
        })), z;
      }
      return d.value.find((z) => z.id === P);
    }, m = (P) => {
      const z = p(P);
      return u(P) ? z.filters.slice(0, 4) : z.filters;
    }, h = (P) => P !== ht && P !== le && P !== wt, f = it(), _ = () => {
      E(), o("update:modelValue", !1);
    }, w = () => {
      f({ event_type: "suggestion_filters_close" }), _();
    }, y = () => {
      v.value && (f({
        event_type: "suggestion_filters_confirm",
        event_subtype: "suggestion_filters_single_select_confirm",
        event_context: Cc(
          v.value
        )
      }), v.value.type === ht ? l({
        type: Ne,
        id: v.value.id,
        label: v.value.label
      }) : l(v.value)), _();
    }, C = Na(!1), v = Na(null), E = () => {
      v.value = null, C.value = !1;
    }, L = (P) => {
      const z = {
        event_type: "suggestion_filters_select",
        event_subtype: "suggestion_filters_single_select",
        event_source: tf(P),
        event_context: Cc(P)
      };
      f(z), v.value = P, C.value = !0;
    }, k = (P) => v.value ? v.value.id === P.id && v.value.type === P.type : r(P), T = F8("breakpoints"), ie = Ua(() => T.value.mobile), { getFilterProvider: H } = Ti(), { searchInput: X, searchResults: Z } = f8(i), be = Ua(
      () => v.value || g()
    ), xe = Na(null), Xe = (P) => {
      L({
        type: _t,
        id: P.label,
        label: P.label
      }), X.value = "";
    }, fe = (P) => {
      L({
        type: P.filterType,
        id: P.filterId,
        label: P.label
      }), X.value = "";
    }, Ce = {
      [le]: "cx-sx-suggestions-filters-view-all-collections-group",
      [ht]: "cx-sx-suggestions-filters-view-all-regions-group"
    }, We = Ua(() => {
      const P = i.value === "all", z = (j) => Z.value.topic_areas.filter((N) => N.filterType === j);
      return [
        {
          key: "topics",
          show: Z.value.topics.length && P,
          items: Z.value.topics,
          onClick: Xe,
          showThumbnail: !0
        },
        {
          key: "topic-areas",
          show: z(Ne).length && (P || i.value === "topics"),
          items: z(Ne),
          onClick: fe
        },
        {
          key: "geography",
          show: z(ht).length && (P || i.value === "geography"),
          items: z(ht),
          onClick: fe
        },
        {
          key: "collections",
          show: Z.value.collections.length && (P || i.value === "collections"),
          items: Z.value.collections,
          onClick: fe
        }
      ].filter((j) => j.show);
    });
    return (P, z) => {
      const j = w8("i18n");
      return ut(), Rr(Ve(St), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: ie.value,
        header: !1
      }, {
        default: tn(() => [
          Nt("section", x8, [
            $t(Ve(F), {
              class: "sx-suggestions-filters__header ma-0 py-3 px-4",
              align: "stretch",
              justify: "start"
            }, {
              default: tn(() => [
                $t(Ve(x), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: tn(() => [
                    $t(Ve(rg), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": P.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: w
                    }, {
                      default: tn(() => [
                        $t(Ve(M8), { icon: Ve(No) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                $t(Ve(x), {
                  grow: "",
                  align: "center"
                }, {
                  default: tn(() => [
                    Nr(Nt("h5", C8, null, 512), [
                      [j, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                $t(Ve(x), {
                  shrink: "",
                  align: "start"
                }, {
                  default: tn(() => [
                    Nr($t(Ve(rg), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: y
                    }, {
                      default: tn(() => [
                        _8(Ma(P.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [v8, C.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Nt("div", b8, [
              Nr(Nt("h5", k8, null, 512), [
                [j, void 0, "cx-sx-suggestions-filter-active-group-label"]
              ]),
              Nt("div", null, [
                $t(Ui, {
                  class: "sx-suggestions-filters__filter sx-suggestions-filters__filter--active my-1 mx-1 py-1",
                  content: be.value.label,
                  icon: s[Ve(H)(be.value)]
                }, null, 8, ["content", "icon"])
              ])
            ]),
            $t(Ve(I8), {
              active: i.value,
              "onUpdate:active": [
                z[2] || (z[2] = (N) => i.value = N),
                c
              ],
              class: "sx-suggestions-filters__tabs"
            }, {
              default: tn(() => [
                (ut(!0), nn(Ir, null, Ur(a.value, (N, q) => (ut(), Rr(Ve(R8), {
                  key: q,
                  name: N.name,
                  label: N.label
                }, {
                  default: tn(() => [
                    Nt("div", $8, [
                      $t(Ve(N8), {
                        modelValue: Ve(X),
                        "onUpdate:modelValue": z[0] || (z[0] = (W) => S8(X) ? X.value = W : null),
                        placeholder: N.searchPlaceholder,
                        "input-type": "search",
                        "start-icon": Ve(Oh),
                        clearable: !!Ve(X)
                      }, null, 8, ["modelValue", "placeholder", "start-icon", "clearable"])
                    ]),
                    Ve(X) ? (ut(), nn("div", L8, [
                      We.value.length ? (ut(), nn("div", A8, [
                        (ut(!0), nn(Ir, null, Ur(We.value, (W) => (ut(), Rr(Ve(U8), {
                          key: W.key,
                          selected: xe.value,
                          "onUpdate:selected": z[1] || (z[1] = (K) => xe.value = K),
                          expanded: !0,
                          "menu-items": W.items,
                          "show-thumbnail": W.showThumbnail || !1,
                          onMenuItemClick: W.onClick
                        }, null, 8, ["selected", "menu-items", "show-thumbnail", "onMenuItemClick"]))), 128))
                      ])) : (ut(), nn("div", D8, [
                        Nt("div", T8, [
                          Nt("span", B8, Ma(P.$i18n(
                            "cx-sx-suggestions-filter-search-results-empty-primary"
                          )), 1),
                          Nt("span", P8, Ma(P.$i18n(
                            "cx-sx-suggestions-filter-search-results-empty-secondary"
                          )), 1)
                        ])
                      ]))
                    ])) : (ut(), nn("div", V8, [
                      (ut(!0), nn(Ir, null, Ur(N.filterGroups, (W) => (ut(), nn("div", {
                        key: W.id,
                        class: "sx-suggestions-filters__group"
                      }, [
                        $t(g8, {
                          "group-label": W.label,
                          filters: W.filters,
                          "filter-type-to-icon-map": s,
                          "tentatively-select-filter": L,
                          "is-selected": k
                        }, null, 8, ["group-label", "filters"]),
                        N.name === "all" && u(W.id) ? (ut(), nn("div", {
                          key: 0,
                          class: "sx-suggestions-filters__group-view-all mb-3",
                          onClick: (K) => c(W.id)
                        }, [
                          Nt("span", null, Ma(P.$i18n(Ce[W.id])), 1)
                        ], 8, E8)) : y8("", !0)
                      ]))), 128))
                    ]))
                  ]),
                  _: 2
                }, 1032, ["name", "label"]))), 128))
              ]),
              _: 1
            }, 8, ["active"])
          ])
        ]),
        _: 1
      }, 8, ["value", "fullscreen"]);
    };
  }
};
const zr = window.Vue.unref, Ia = window.Vue.openBlock, lg = window.Vue.createBlock;
window.Vue.createCommentVNode;
const O8 = window.Vue.renderList, j8 = window.Vue.Fragment, cg = window.Vue.createElementBlock, H8 = window.Vue.normalizeClass, q8 = window.Vue.createVNode, G8 = {
  key: 1,
  class: "cx-suggestion-list__filters flex px-4 pb-2"
}, ug = window.Vue.ref, X8 = window.Vue.computed, dg = window.Vue.watch, W8 = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = he(), n = it(), {
      getFiltersSummary: o,
      selectFilter: s,
      isFilterSelected: a,
      waitingForPageCollectionsFetch: i,
      validateURLFilterWithCollections: c
    } = Rc(), u = ug(!1), d = () => {
      n({ event_type: "dashboard_suggestion_filters_view_more" }), u.value = !0;
    }, r = (f) => {
      const _ = {
        event_type: "dashboard_suggestion_filters_quick_select",
        event_source: tf(f),
        event_context: Cc(f)
      };
      n(_), s(f);
    }, l = {
      [Pt]: jh,
      [Wt]: Ih,
      [le]: Mi,
      [Ne]: null
    }, { getFilterProvider: g } = Ti(), p = (f) => ({
      id: f.id,
      type: f.type,
      icon: l[g(f)],
      label: f.label,
      action: r
    }), m = ug(o());
    dg(u, (f) => {
      f || (m.value = o());
    }), dg(i, (f) => {
      f || (c(), m.value = o());
    });
    const h = X8(() => [
      ...m.value.map(p),
      {
        id: "more",
        icon: Gc,
        label: t.i18n("cx-sx-suggestions-filter-more-label"),
        action: d
      }
    ]);
    return (f, _) => zr(i) ? (Ia(), lg(zr(st), { key: 0 })) : (Ia(), cg("div", G8, [
      (Ia(!0), cg(j8, null, O8(h.value, (w) => (Ia(), lg(Ui, {
        key: w.label,
        class: H8(["cx-suggestion-list__filter py-1 me-1", { "cx-suggestion-list__filter--active": zr(a)(w) }]),
        icon: w.icon,
        content: w.label,
        onClick: (y) => w.action(w)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      q8(z8, {
        modelValue: u.value,
        "onUpdate:modelValue": _[0] || (_[0] = (w) => u.value = w)
      }, null, 8, ["modelValue"])
    ]));
  }
}, co = window.Vue.computed, gg = window.Vue.ref, K8 = window.Vue.watch, Y8 = window.Vuex.useStore, J8 = () => {
  const e = Y8(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = Mc(), i = it(), c = co(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), u = co(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), d = gg(0), r = gg(0), { maxSuggestionsPerSlice: l } = e.state.suggestions, g = 4, p = co(
    () => a(d.value)
  ), m = co(
    () => s(r.value)
  ), h = () => {
    v(), T(), E(), ie();
  }, {
    fetchNextSectionSuggestionsSlice: f,
    fetchNextPageSuggestionsSlice: _
  } = zc(), w = (H) => H.length === l, y = co(
    () => w(m.value)
  ), C = co(
    () => w(p.value)
  ), v = () => {
    const H = (d.value + 1) % g, X = w(
      a(H)
    );
    (!C.value || !X) && f();
  }, E = () => {
    const H = (r.value + 1) % g, X = w(
      s(H)
    );
    (!y.value || !X) && _();
  }, L = (H) => {
    i({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", H), v();
  }, k = (H) => {
    i({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", H), E();
  }, T = () => d.value = (d.value + 1) % g, ie = () => r.value = (r.value + 1) % g;
  return K8(
    o,
    () => {
      r.value = 0, E(), d.value = 0, v();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: m,
    currentSectionSuggestionsSlice: p,
    discardPageSuggestion: k,
    discardSectionSuggestion: L,
    onSuggestionRefresh: h,
    pageSuggestionsLoading: u,
    sectionSuggestionsLoading: c,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: s,
    isCurrentPageSuggestionsSliceFull: y,
    isCurrentSectionSuggestionsSliceFull: C
  };
}, Q8 = window.Vuex.useStore, Jc = () => {
  const e = Q8(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = zc(), o = (d, r, l) => e.state.suggestions.pageSuggestions.find(
    (g) => g.sourceLanguage === d && g.targetLanguage === r && g.sourceTitle === l
  ), s = (d) => b(void 0, null, function* () {
    const { sourceTitle: r, sourceLanguage: l, targetLanguage: g } = d;
    yield ge.markFavorite(r, l, g);
    const p = new Eo({
      title: r,
      sourceLanguage: l,
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
    markFavoriteSuggestion: (d, r, l) => b(void 0, null, function* () {
      const g = o(
        r,
        l,
        d
      );
      g && (e.commit(
        "suggestions/removePageSuggestionFromList",
        g
      ), n());
      const p = e.getters["suggestions/getSectionSuggestionsForArticle"](r, l, d);
      p != null && p.isListable && (e.commit(
        "suggestions/removeSectionSuggestionFromList",
        p
      ), t()), yield ge.markFavorite(
        d,
        r,
        l
      );
      const m = new Eo({
        title: d,
        sourceLanguage: r,
        targetLanguage: l
      });
      e.commit("suggestions/addFavoriteSuggestion", m);
    }),
    removeFavoriteSuggestion: (d) => (e.commit("suggestions/removeFavoriteSuggestion", d), ge.unmarkFavorite(d))
  };
}, Z8 = "suggestion_no_seed", e2 = "suggestion_recent_edit", t2 = "suggestion_topic_area", n2 = "suggestion_search_result_seed", o2 = "suggestion_featured", s2 = "suggestion_collections", a2 = () => {
  const { currentSuggestionFilters: e } = B(), { defaultSeedsFetched: t } = Uc();
  return () => {
    const { type: n, id: o } = e.value;
    if (o === Pt)
      return t.value ? Z8 : e2;
    if (n === Ne)
      return t2;
    if (n === _t)
      return n2;
    if (o === Wt)
      return o2;
    if (o === le || n === le)
      return s2;
    throw new Error("Event source cannot be empty");
  };
};
const pg = window.Vue.normalizeClass, i2 = window.Vue.resolveDirective, ts = window.Vue.createElementVNode, Ra = window.Vue.withDirectives, me = window.Vue.unref, Ke = window.Vue.openBlock, Ut = window.Vue.createBlock, kn = window.Vue.createCommentVNode, Or = window.Vue.createVNode, ns = window.Vue.withCtx, mg = window.Vue.renderList, hg = window.Vue.Fragment, jr = window.Vue.createElementBlock, r2 = window.Vue.toDisplayString, l2 = window.Vue.createTextVNode, c2 = window.Vue.vShow, u2 = { class: "cx-suggestion-list" }, d2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, g2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, p2 = { class: "cx-suggestion-list__refresh-button-container justify-center" }, It = window.Vue.computed, m2 = window.Vue.inject, h2 = window.Vue.ref, f2 = window.Codex.CdxButton, w2 = window.Codex.CdxIcon, _2 = window.Vuex.useStore, v2 = {
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
    } = B(), { supportedSourceLanguageCodes: s, supportedTargetLanguageCodes: a } = Js(), i = ih(), c = (j) => i(j, n.value), u = (j) => i(t.value, j), d = a2(), r = na(), l = (j) => {
      r(
        j.sourceTitle,
        j.sourceLanguage,
        j.targetLanguage,
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
      isCurrentPageSuggestionsSliceFull: y,
      isCurrentSectionSuggestionsSliceFull: C
    } = J8(), v = h2(null), E = it(), L = () => {
      E({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), f(), v.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: k, markFavoritePageSuggestion: T } = Jc(), ie = m2("breakpoints"), H = It(() => ie.value.mobile), X = It(
      () => H.value ? null : "pb-2 flex justify-between items-center"
    ), Z = _2(), be = It(
      () => Z.state.suggestions.isPageSuggestionsFetchPending
    ), xe = It(
      () => Z.state.suggestions.isSectionSuggestionsFetchPending
    ), Xe = It(
      () => be.value || _.value && !y.value
    ), fe = It(
      () => xe.value || w.value && !C.value
    ), Ce = It(
      () => be.value || _.value || g.value.length > 0
    ), We = It(
      () => xe.value || w.value || p.value.length > 0
    ), P = It(
      () => !Ce.value && !We.value
    ), z = It(
      () => !w.value && !_.value && !be.value && !xe.value && !P.value
    );
    return (j, N) => {
      const q = i2("i18n");
      return Ra((Ke(), jr("div", u2, [
        Or(me(ot), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: ns(() => [
            ts("div", {
              class: pg(["cx-suggestion-list__header-card__header px-4", X.value])
            }, [
              Ra(ts("h3", {
                class: pg(["mw-ui-card__title mb-0", { "py-3": H.value }])
              }, null, 2), [
                [q, void 0, "cx-suggestionlist-title"]
              ]),
              H.value ? kn("", !0) : (Ke(), Ut(xi, {
                key: 0,
                "source-languages": me(s),
                "target-languages": me(a),
                "selected-source-language": me(t),
                "selected-target-language": me(n),
                "onUpdate:selectedSourceLanguage": c,
                "onUpdate:selectedTargetLanguage": u
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            Or(W8)
          ]),
          default: ns(() => [
            H.value ? (Ke(), Ut(xi, {
              key: 0,
              "source-languages": me(s),
              "target-languages": me(a),
              "selected-source-language": me(t),
              "selected-target-language": me(n),
              "onUpdate:selectedSourceLanguage": c,
              "onUpdate:selectedTargetLanguage": u
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])) : kn("", !0)
          ]),
          _: 1
        }),
        Ce.value ? (Ke(), Ut(me(ot), {
          key: 0,
          ref_key: "pageSuggestionsList",
          ref: v,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: ns(() => [
            Ra(ts("h5", d2, null, 512), [
              [q, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (Ke(!0), jr(hg, null, mg(me(g), (W, K) => (Ke(), Ut(xc, {
              key: `page-suggestion-${K}`,
              suggestion: W,
              onClose: (S) => me(m)(W),
              onClick: (S) => l(W),
              onBookmark: (S) => me(T)(W)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            Xe.value ? (Ke(), Ut(me(st), { key: 0 })) : kn("", !0)
          ]),
          _: 1
        }, 512)) : kn("", !0),
        We.value ? (Ke(), Ut(me(ot), {
          key: 1,
          class: "cx-suggestion-list__section-suggestions pa-0 mb-0"
        }, {
          default: ns(() => [
            Ra(ts("h5", g2, null, 512), [
              [q, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (Ke(!0), jr(hg, null, mg(me(p), (W, K) => (Ke(), Ut(xc, {
              key: `section-suggestion-${K}`,
              class: "ma-0",
              suggestion: W,
              onClose: (S) => me(h)(W),
              onClick: (S) => l(W),
              onBookmark: (S) => me(k)(W)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            fe.value ? (Ke(), Ut(me(st), { key: 0 })) : kn("", !0)
          ]),
          _: 1
        })) : kn("", !0),
        P.value ? (Ke(), Ut(Zh, {
          key: 2,
          title: j.$i18n("cx-sx-suggestion-list-empty-title"),
          description: j.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : kn("", !0),
        ts("div", p2, [
          z.value ? (Ke(), Ut(me(f2), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: L
          }, {
            default: ns(() => [
              Or(me(w2), {
                class: "me-1",
                icon: me(zh)
              }, null, 8, ["icon"]),
              l2(" " + r2(j.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : kn("", !0)
        ])
      ], 512)), [
        [c2, e.active]
      ]);
    };
  }
}, S2 = window.Vue.resolveDirective, y2 = window.Vue.createElementVNode, x2 = window.Vue.withDirectives, C2 = window.Vue.renderList, b2 = window.Vue.Fragment, Hr = window.Vue.openBlock, k2 = window.Vue.createElementBlock, fg = window.Vue.unref, wg = window.Vue.createBlock, _g = window.Vue.withCtx, $2 = window.Vue.createCommentVNode, V2 = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, E2 = window.Vue.computed, L2 = window.Vuex.useStore, A2 = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = L2(), n = E2(() => t.state.suggestions.favorites || []), o = na(), s = (i) => o(
      i.title,
      i.sourceLanguage,
      i.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = Jc();
    return (i, c) => {
      const u = S2("i18n");
      return n.value.length ? (Hr(), wg(fg(ot), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: _g(() => [
          x2(y2("h3", V2, null, 512), [
            [u, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: _g(() => [
          (Hr(!0), k2(b2, null, C2(n.value, (d, r) => (Hr(), wg(xc, {
            key: `favorite-${r}`,
            suggestion: d,
            onClick: (l) => s(d),
            onBookmark: (l) => fg(a)(d)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : $2("", !0);
    };
  }
};
const D2 = window.Vue.resolveDirective, os = window.Vue.createElementVNode, T2 = window.Vue.withDirectives, B2 = window.Vue.renderList, P2 = window.Vue.Fragment, vg = window.Vue.openBlock, Sg = window.Vue.createElementBlock, F2 = window.Vue.unref, M2 = window.Vue.createVNode, N2 = window.Vue.toDisplayString, U2 = { class: "cx-help-panel pa-4" }, I2 = { class: "cx-help-panel__item-list mt-6 ps-2" }, R2 = ["href", "target"], z2 = ["textContent"], O2 = window.Codex.CdxIcon, j2 = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = he(), n = [
      {
        icon: DC,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
        target: "_blank"
      },
      {
        icon: LC,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
        target: "_blank"
      }
    ];
    return (o, s) => {
      const a = D2("i18n");
      return vg(), Sg("div", U2, [
        T2(os("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        os("ul", I2, [
          (vg(), Sg(P2, null, B2(n, (i, c) => os("li", {
            key: c,
            class: "mt-4"
          }, [
            os("a", {
              href: i.href,
              target: i.target
            }, [
              M2(F2(O2), {
                class: "me-2",
                icon: i.icon
              }, null, 8, ["icon"]),
              os("span", {
                textContent: N2(i.label)
              }, null, 8, z2)
            ], 8, R2)
          ])), 64))
        ])
      ]);
    };
  }
};
const H2 = window.Vue.resolveDirective, uo = window.Vue.createElementVNode, qr = window.Vue.withDirectives, yg = window.Vue.toDisplayString, Gr = window.Vue.unref, Xr = window.Vue.withCtx, Wr = window.Vue.createVNode, q2 = window.Vue.openBlock, G2 = window.Vue.createElementBlock, X2 = { class: "cx-stats-panel pa-4" }, W2 = ["textContent"], K2 = { class: "cx-stats-panel__monthly-stats-label" }, Y2 = ["textContent"], J2 = { class: "cx-stats-panel__total-stats-label" }, Q2 = window.Vue.ref, xg = window.Vue.computed, Z2 = window.Vue.watch, e$ = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = e, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", o = xg(() => {
      var i, c;
      return ((c = (i = t.stats) == null ? void 0 : i[n]) == null ? void 0 : c.count) || 0;
    }), s = xg(() => {
      var i, c;
      return ((c = (i = t.stats) == null ? void 0 : i[n]) == null ? void 0 : c.delta) || 0;
    }), a = Q2(null);
    return Z2(
      () => t.stats,
      () => {
        const i = t.stats, c = a.value.getContext("2d"), u = Object.keys(t.stats || {}).sort(), d = u.reduce(
          (C, v) => Math.max(C, i[v].delta),
          0
        ), r = u.map((C) => i[C].delta), l = a.value.getBoundingClientRect().width, g = a.value.getBoundingClientRect().height;
        a.value.width = l, a.value.height = g;
        const p = 4, m = 6, h = 50, f = (h - p) / d;
        let _ = p;
        const w = Math.floor(
          (l - p) / (m + p)
        ), y = r.slice(
          Math.max(r.length - w, 0)
        );
        y.forEach((C, v) => {
          v === y.length - 1 && (c.fillStyle = "#36c");
          const E = h - C * f;
          c.fillRect(_, E, m, C * f), _ += m + p;
        });
      }
    ), (i, c) => {
      const u = H2("i18n");
      return q2(), G2("div", X2, [
        qr(uo("h5", null, null, 512), [
          [u, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        Wr(Gr(F), null, {
          default: Xr(() => [
            Wr(Gr(x), { class: "cx-stats-panel__monthly-stats" }, {
              default: Xr(() => [
                uo("h3", {
                  textContent: yg(s.value)
                }, null, 8, W2),
                qr(uo("h5", K2, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            Wr(Gr(x), { class: "cx-stats-panel__total-stats" }, {
              default: Xr(() => [
                uo("h3", {
                  textContent: yg(o.value)
                }, null, 8, Y2),
                qr(uo("h5", J2, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
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
}, nf = () => {
  const e = it();
  return (t) => e({
    event_type: "dashboard_tab_select",
    event_source: {
      draft: "dashboard_inprogress_tab",
      published: "dashboard_published_tab",
      suggestions: "dashboard_suggestions_tab"
    }[t]
  });
};
const t$ = window.Vue.renderSlot, n$ = window.Vue.unref, o$ = window.Vue.createVNode, s$ = window.Vue.createElementVNode, a$ = window.Vue.openBlock, i$ = window.Vue.createElementBlock, r$ = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, l$ = { class: "col-12 ma-0 pa-0" }, c$ = {
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
    const n = t, o = nf(), s = (a) => {
      o(a), n("update:active", a);
    };
    return (a, i) => (a$(), i$("footer", r$, [
      s$("div", l$, [
        t$(a.$slots, "default", {}, () => [
          o$(n$(Gs), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: s
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, u$ = window.Vuex.useStore, d$ = () => {
  const e = u$(), t = Fo();
  return () => b(void 0, null, function* () {
    if (e.state.suggestions.favorites.length)
      return;
    const n = yield ge.fetchFavorites();
    if (!n || !n.length)
      return;
    const o = {};
    for (const s of n)
      e.commit("suggestions/addFavoriteSuggestion", s), ge.fetchSectionSuggestion(
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
}, g$ = window.Vuex.useStore, of = () => {
  const e = g$(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), { isDefaultFilter: i } = Ec(), { previousRoute: c } = Le(e), u = it(), d = () => {
    const g = {
      ulsmissinglanguages: "content_language_selector",
      mflanguagesearcher: "content_language_selector",
      mfrecenttranslation: "recent_translation",
      mfrecentedit: "recent_edit",
      mffrequentlanguages: "frequent_languages",
      newbytranslationmobile: "invite_new_article_creation",
      specialcontribute: "contributions_page",
      publishingfollowup: "followup_after_publishing",
      ulsaddlanguages: "language_selector_options",
      mintforreaders: "preselect_mint_for_readers",
      articleplaceholder: "article_placeholder"
    }, p = t("campaign");
    return g[p];
  }, r = () => {
    if (n.value)
      return d() || "direct_preselect";
    const p = {
      "sx-article-search": "return_from_search",
      "sx-translation-confirmer": "return_from_confirmation",
      "sx-section-selector": "return_from_section_selection",
      "sx-sentence-selector": "editor_close"
    }[c.value];
    return p || (i(o.value) ? d() || "direct" : "suggestion_filter_direct_preselect");
  };
  return { logDashboardOpenEvent: () => {
    const g = r(), p = {
      event_type: "dashboard_open",
      event_source: g,
      translation_source_language: s.value,
      translation_target_language: a.value
    };
    return g === "suggestion_filter_direct_preselect" && (p.event_context = o.value.id), u(p);
  }, getEventSource: r };
}, p$ = window.Vue.watch, m$ = () => {
  const { fetchAllTranslations: e } = Uo(), t = oh(), n = d$(), { fetchPageCollections: o } = Ic(), { logDashboardOpenEvent: s } = of(), { applicationLanguagesInitialized: a } = rh();
  return () => b(void 0, null, function* () {
    o();
    try {
      yield n();
    } catch (i) {
      mw.log.error("[CX] Error while fetching favorite suggestions", i);
    }
    yield e(), p$(
      a,
      () => {
        a.value && (s(), t());
      },
      { immediate: !0 }
    );
  });
}, Cg = window.Vue.computed, h$ = window.Vue.ref, f$ = window.Vue.watch, w$ = window.Vue.watchEffect, _$ = window.Vuex.useStore, v$ = ["suggestions", "draft", "published"], S$ = () => {
  const e = _$(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = B(), { translationsFetched: o } = Uo(), s = h$(null);
  if (v$.includes(t.value))
    s.value = t.value;
  else {
    const a = Cg(
      () => o.value.draft
    ), i = Cg(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = i.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", f$(a, (c) => {
      c && (s.value = i.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return w$(() => {
    n(s.value), window.scrollTo(0, 0);
  }), s;
}, y$ = window.Vue.computed, x$ = () => {
  const e = he();
  return y$(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: n0,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: bi,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: t0,
        type: "text"
      }
    }
  ]);
};
const _e = window.Vue.unref, Te = window.Vue.createVNode, C$ = window.Vue.toDisplayString, b$ = window.Vue.createTextVNode, on = window.Vue.withCtx, Kr = window.Vue.openBlock, bg = window.Vue.createBlock, kg = window.Vue.createCommentVNode, k$ = window.Vue.vShow, $$ = window.Vue.withDirectives, V$ = window.Vue.isRef, E$ = window.Vue.createElementBlock, L$ = window.Vue.computed, A$ = window.Vuex.useStore, D$ = window.Codex.CdxButton, T$ = window.Codex.CdxIcon, B$ = {
  __name: "CXDashboard",
  setup(e) {
    const t = De(), n = it(), o = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    m$()();
    const a = A$();
    a.dispatch("translator/fetchTranslatorStats");
    const i = L$(() => a.state.translator.translatorStats), c = S$(), u = x$(), d = nf(), r = (l) => {
      d(l), c.value = l;
    };
    return (l, g) => (Kr(), E$("div", null, [
      Te(_e(F), { class: "ma-0 pb-4" }, {
        default: on(() => [
          Te(_e(D$), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: o
          }, {
            default: on(() => [
              Te(_e(T$), {
                class: "me-1",
                icon: _e(_c)
              }, null, 8, ["icon"]),
              b$(" " + C$(l.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      Te(_e(F), {
        class: "ma-0",
        align: "start"
      }, {
        default: on(() => [
          l.$mwui.breakpoint.tabletAndUp ? (Kr(), bg(_e(x), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: on(() => [
              Te(_e(Gs), {
                id: "dashboard-list-selector--desktop",
                items: _e(u),
                active: _e(c),
                onSelect: r
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : kg("", !0),
          Te(_e(x), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: on(() => [
              $$(Te(A2, null, null, 512), [
                [k$, _e(c) === "suggestions"]
              ]),
              Te(v2, {
                active: _e(c) === "suggestions"
              }, null, 8, ["active"]),
              Te(Yd, {
                "translation-status": "draft",
                "active-status": _e(c)
              }, null, 8, ["active-status"]),
              Te(Yd, {
                "translation-status": "published",
                "active-status": _e(c)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          Te(_e(x), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: on(() => [
              Te(_e(F), {
                class: "ma-0",
                align: "start"
              }, {
                default: on(() => [
                  Te(_e(x), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: on(() => [
                      Te(e$, { stats: i.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  Te(_e(x), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: on(() => [
                      Te(j2)
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
      l.$mwui.breakpoint.mobile ? (Kr(), bg(c$, {
        key: 0,
        active: _e(c),
        "onUpdate:active": g[0] || (g[0] = (p) => V$(c) ? c.value = p : null),
        items: _e(u)
      }, null, 8, ["active", "items"])) : kg("", !0)
    ]));
  }
}, P$ = {
  name: "DashboardView",
  components: { CxDashboard: B$ }
}, F$ = window.Vue.resolveComponent, M$ = window.Vue.createVNode, N$ = window.Vue.openBlock, U$ = window.Vue.createElementBlock, I$ = { class: "cx-translation-dashboard" };
function R$(e, t, n, o, s, a) {
  const i = F$("cx-dashboard");
  return N$(), U$("main", I$, [
    M$(i, { class: "mb-4 pb-12 px-3 px-tablet-10" })
  ]);
}
const $g = /* @__PURE__ */ ae(P$, [["render", R$]]), go = window.Vue.computed, z$ = () => {
  const { sectionSuggestion: e } = ze(), { targetLanguageURLParameter: t } = B(), { currentTranslation: n } = Ft(), o = go(
    () => {
      var g, p, m;
      return (m = (p = (g = e.value) == null ? void 0 : g.orderedMissingSections) == null ? void 0 : p[0]) == null ? void 0 : m.sourceTitle;
    }
  ), s = go(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.missingSectionsCount;
    }
  ), a = go(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.presentSectionsCount;
    }
  ), { targetPageExists: i, getCurrentTitleByLanguage: c } = vn(), u = go(() => i ? J.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    c(t.value, null)
  ) : null), d = (g) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : g ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : i.value ? s.value > 1 || s.value === 1 && a.value > 0 ? "cx-sx-select-section" : s.value === 1 && a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : s.value === 0 && a.value > 0 ? "cx-sx-select-section" : s.value === 0 && a.value === 0 ? "cx-sx-translation-confirmer-action-new-translation" : "" : "cx-sx-start-translation-button-label", r = go(() => {
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
  }), l = go(
    () => {
      var g;
      return !i.value || ((g = e.value) == null ? void 0 : g.missingSectionsCount) > 0;
    }
  );
  return {
    actionInformationMessageArgs: r,
    getActionButtonLabel: d,
    isProgressiveButton: l,
    targetArticlePath: u
  };
};
function O$(e) {
  return e.$el = $(e), e;
}
function j$(e, t, n, o) {
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
function H$() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function q$(e, t) {
  return b(this, null, function* () {
    yield Qc(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = O$(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const G$ = window.Vue.computed, X$ = window.Vue.onMounted, W$ = window.Vue.ref;
function K$(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const Y$ = {
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
    const n = W$(null);
    let o = null;
    const s = G$(() => o.getHtml()), a = () => {
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
    return X$(() => b(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = K$;
      const r = yield q$(u, n.value);
      t.emit("ready"), n.value.appendChild(r.$element[0]), o = j$(
        r,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = H$, o.focus();
    })), { sxeditor: n };
  }
}, bc = window.Vue.createElementVNode, J$ = window.Vue.openBlock, Q$ = window.Vue.createElementBlock, Z$ = ["lang", "dir"], e4 = /* @__PURE__ */ bc("div", { class: "overlay-header header initial-header" }, [
  /* @__PURE__ */ bc("div", { class: "toolbar" })
], -1), t4 = ["lang", "dir"];
function n4(e, t, n, o, s, a) {
  return J$(), Q$("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    e4,
    bc("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, t4)
  ], 8, Z$);
}
const o4 = /* @__PURE__ */ ae(Y$, [["render", n4]]);
function Qc() {
  return mw.loader.using("mw.cx3.ve");
}
const s4 = window.Vuex.useStore, a4 = () => {
  const e = s4();
  return (t, n) => b(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield Qc(), new Promise((s) => {
      setTimeout(() => {
        const a = Km.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, i4 = window.Vuex.useStore, sf = () => {
  const e = i4();
  return (t, n, o, s = null) => b(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      o
    );
    if (a && a.content)
      return;
    const i = yield no.fetchPageContent(
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
}, Ii = () => {
  const { currentSourcePage: e } = rt(), t = a4(), n = sf(), {
    setSectionURLParam: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: i,
    revisionURLParameter: c
  } = B(), u = (l, g) => b(void 0, null, function* () {
    l() || (yield n(
      s.value,
      a.value,
      i.value,
      c.value
    ), Ws || (yield t(
      s.value,
      i.value
    ))), g();
  });
  return {
    selectPageSectionByIndex: (l) => {
      const g = () => {
        var m;
        return (m = e.value.sections) == null ? void 0 : m[l];
      };
      return u(g, () => {
        const m = g();
        l === 0 ? m.originalTitle = e.value.title : o(m.originalTitle);
      });
    },
    selectPageSectionByTitle: (l) => u(() => e.value.getSectionByTitle(l), () => {
      o(l);
    })
  };
}, r4 = window.Vuex.useStore, Io = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o,
    isQuickTutorialForced: s
  } = B(), a = r4(), i = De(), c = () => {
    const l = i.currentRoute.value.name !== "sx-quick-tutorial" && (s() || !a.getters["translator/userHasSectionTranslations"]) ? "sx-quick-tutorial" : "sx-sentence-selector";
    return i.getRoutes().find((g) => g.name === l);
  }, u = () => {
    const r = mw.config.get(
      "wgContentTranslationTranslateInTarget"
    ), l = J.getCurrentWikiLanguageCode();
    if (!r || t.value === l)
      return !1;
    const g = o.value ? { section: o.value } : {}, p = J.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      g
    );
    return location.href = p + "#" + c().path, !0;
  }, d = () => {
    location.href = J.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      o.value ? { sourcesection: o.value } : {}
    );
  };
  return () => {
    if (J.setCXToken(
      e.value,
      t.value,
      n.value
    ), Ws) {
      d();
      return;
    }
    if (u())
      return;
    const l = c();
    i.push({ name: l.name });
  };
}, Zc = () => {
  const e = it(), { currentTranslation: t } = Ft();
  return () => {
    if (!t.value)
      return mw.log.error(
        "[CX Event Logging] No current draft translation to continue"
      ), Promise.resolve();
    const {
      sectionTranslationId: n,
      sourceLanguage: o,
      targetLanguage: s,
      sourceTitle: a,
      targetTitle: i,
      isLeadSectionTranslation: c,
      sourceSectionTitle: u,
      targetSectionTitle: d
    } = t.value;
    return e({
      event_type: "dashboard_translation_continue",
      translation_id: n,
      translation_source_language: o,
      translation_source_title: a,
      translation_source_section: u,
      translation_target_language: s,
      translation_target_title: i,
      translation_target_section: d,
      translation_type: c ? "article" : "section"
    });
  };
}, l4 = window.Vue.ref, c4 = () => {
  const e = De(), { logDashboardTranslationStartEvent: t } = Ni(), n = Zc(), o = Io(), { sectionURLParameter: s } = B(), { targetPageExists: a } = vn(), { selectPageSectionByTitle: i } = Ii(), c = () => b(void 0, null, function* () {
    yield i(s.value), e.push({ name: "sx-content-comparator" });
  }), u = l4(!1), { currentTranslation: d } = Ft();
  return {
    handlePrimaryButtonClick: () => {
      d.value ? d.value.isArticleTranslation && !Ws ? u.value = !0 : (n(), o()) : s.value ? c() : a.value ? e.push({ name: "sx-section-selector" }) : (t(), o());
    },
    translationConfirmationDialogOn: u
  };
};
const u4 = window.Vue.resolveDirective, Vg = window.Vue.createElementVNode, Eg = window.Vue.withDirectives, d4 = window.Vue.unref, g4 = window.Vue.withCtx, p4 = window.Vue.openBlock, m4 = window.Vue.createBlock, h4 = {
  href: "",
  target: "_blank"
}, f4 = window.Codex.CdxDialog, w4 = {
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
    const n = e, o = t, s = (d) => o("update:modelValue", d), a = he(), i = {
      label: a.i18n(
        "cx-unreviewed-translation-dialog-review-translation-button-label"
      ),
      actionType: "progressive"
    }, c = {
      label: a.i18n("cx-unreviewed-translation-dialog-close-button-label")
    };
    function u() {
      window.open(n.targetUrl, "_blank"), s(!1);
    }
    return (d, r) => {
      const l = u4("i18n");
      return p4(), m4(d4(f4), {
        class: "cx-unreviewed-translation-dialog",
        open: e.modelValue,
        title: d.$i18n("cx-unreviewed-translation-dialog-title"),
        "close-button-label": d.$i18n("cx-unreviewed-translation-dialog-close-button-aria-label"),
        "primary-action": i,
        "default-action": c,
        "onUpdate:open": r[0] || (r[0] = (g) => s(g)),
        onPrimary: u,
        onDefault: r[1] || (r[1] = (g) => s(!1))
      }, {
        default: g4(() => [
          Eg(Vg("p", null, null, 512), [
            [l, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          Eg(Vg("a", h4, null, 512), [
            [l, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title", "close-button-label"]);
    };
  }
};
const Se = window.Vue.unref, _4 = window.Vue.resolveDirective, ss = window.Vue.createElementVNode, Lg = window.Vue.withDirectives, as = window.Vue.toDisplayString, is = window.Vue.openBlock, Yr = window.Vue.createElementBlock, Jr = window.Vue.createCommentVNode, dt = window.Vue.createVNode, Vt = window.Vue.withCtx, Qr = window.Vue.createTextVNode, v4 = window.Vue.withModifiers, Ag = window.Vue.createBlock, S4 = window.Vue.Fragment, y4 = { class: "sx-translation-confirmer-body pb-4" }, x4 = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, C4 = ["textContent"], b4 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, k4 = ["href"], $4 = ["textContent"], za = window.Vue.computed, V4 = window.Vue.inject, Dg = window.Vue.ref, E4 = window.Vue.watchEffect, L4 = window.Vuex.useStore, Zr = window.Codex.CdxButton, A4 = window.Codex.CdxIcon, D4 = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = De(), o = L4();
    V4("colors");
    const { sectionSuggestion: s } = ze(), { targetLanguageAutonym: a } = Le(o), { sectionURLParameter: i } = B(), { logDashboardTranslationStartEvent: c } = Ni(), u = Io(), { handlePrimaryButtonClick: d, translationConfirmationDialogOn: r } = c4(), l = Dg(!1), g = Dg(null), p = () => b(this, null, function* () {
      let X = !0;
      try {
        X = yield vt.checkUnreviewedTranslations();
      } catch (Z) {
        mw.log.error(
          "Error while checking for user's unreviewed translations ",
          Z
        );
      }
      X !== !0 && (l.value = !0, g.value = X.targetUrl);
    }), m = () => b(this, null, function* () {
      yield p(), !l.value && (c(), u());
    }), h = () => b(this, null, function* () {
      yield p(), !l.value && d();
    }), f = t;
    E4(() => {
      r.value && (f("open-translation-confirmation-dialog"), r.value = !1);
    });
    const {
      actionInformationMessageArgs: _,
      getActionButtonLabel: w,
      isProgressiveButton: y,
      targetArticlePath: C
    } = z$(), v = he(), E = za(
      () => v.i18n(w(!!i.value))
    ), L = za(
      () => v.i18n(..._.value)
    ), k = () => b(this, null, function* () {
      yield p(), !l.value && n.push({ name: "sx-section-selector" });
    }), T = za(() => {
      var X, Z;
      return i.value && !!((Z = (X = s.value) == null ? void 0 : X.sourceSections) != null && Z.length);
    }), { targetPageExists: ie } = vn(), H = za(() => !i.value && ie.value && Ws);
    return (X, Z) => {
      const be = _4("i18n");
      return is(), Yr(S4, null, [
        ss("section", y4, [
          Se(i) ? (is(), Yr("section", x4, [
            Lg(ss("h6", null, null, 512), [
              [be, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            ss("h5", {
              class: "ma-0",
              textContent: as(Se(i))
            }, null, 8, C4)
          ])) : Se(ie) ? (is(), Yr("section", b4, [
            dt(Se(F), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: Vt(() => [
                Lg(dt(Se(x), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [be, [Se(a)], "cx-sx-existing-translation-status"]
                ]),
                dt(Se(x), { shrink: "" }, {
                  default: Vt(() => [
                    ss("a", {
                      href: Se(C),
                      target: "_blank"
                    }, [
                      dt(Se(A4), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: Se(Xc)
                      }, null, 8, ["icon"])
                    ], 8, k4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            dt(Se(F), { class: "ma-0" }, {
              default: Vt(() => [
                dt(Se(x), null, {
                  default: Vt(() => [
                    ss("span", {
                      textContent: as(L.value)
                    }, null, 8, $4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : Jr("", !0),
          dt(Se(F), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: Vt(() => [
              T.value ? (is(), Ag(Se(x), {
                key: 0,
                shrink: ""
              }, {
                default: Vt(() => [
                  dt(Se(Zr), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: v4(k, ["stop"])
                  }, {
                    default: Vt(() => [
                      Qr(as(X.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : Jr("", !0),
              H.value ? (is(), Ag(Se(x), {
                key: 1,
                shrink: ""
              }, {
                default: Vt(() => [
                  dt(Se(Zr), {
                    size: "large",
                    onClick: m
                  }, {
                    default: Vt(() => [
                      Qr(as(X.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : Jr("", !0),
              dt(Se(x), { shrink: "" }, {
                default: Vt(() => [
                  dt(Se(Zr), {
                    weight: "primary",
                    size: "large",
                    action: Se(y) ? "progressive" : "default",
                    onClick: h
                  }, {
                    default: Vt(() => [
                      Qr(as(E.value), 1)
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
        dt(w4, {
          modelValue: l.value,
          "onUpdate:modelValue": Z[0] || (Z[0] = (xe) => l.value = xe),
          "target-url": g.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const el = window.Vue.unref, T4 = window.Vue.openBlock, B4 = window.Vue.createBlock, P4 = window.Vue.computed, af = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedTargetLanguageCodes: t } = Js(), {
      sourceLanguageURLParameter: n,
      targetLanguageURLParameter: o
    } = B(), { currentLanguageTitleGroup: s } = vn(), a = P4(
      () => {
        var d;
        return ((d = s.value) == null ? void 0 : d.titles.map((r) => r.lang)) || [];
      }
    ), i = CS(), c = (d) => i(d, o.value), u = (d) => i(n.value, d);
    return (d, r) => (T4(), B4(xi, {
      class: "sx-article-language-selector",
      "source-languages": a.value,
      "target-languages": el(t),
      "selected-source-language": el(n),
      "selected-target-language": el(o),
      "onUpdate:selectedSourceLanguage": c,
      "onUpdate:selectedTargetLanguage": u
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
};
const Be = window.Vue.unref, tl = window.Vue.toDisplayString, sn = window.Vue.createElementVNode, Rt = window.Vue.createVNode, po = window.Vue.withCtx, F4 = window.Vue.resolveDirective, M4 = window.Vue.withDirectives, N4 = window.Vue.normalizeClass, U4 = window.Vue.openBlock, I4 = window.Vue.createBlock, R4 = ["textContent"], z4 = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, O4 = ["textContent"], j4 = { class: "pe-3" }, H4 = ["textContent"], q4 = window.Codex.CdxButton, rs = window.Codex.CdxIcon, an = window.Vue.computed, G4 = window.Vuex.useStore, X4 = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = G4(), n = he(), { currentSourcePage: o } = rt(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: i
    } = B(), c = an(() => t.state.suggestions.favorites || []), u = an(
      () => c.value.some(
        (E) => i.value === E.title && s.value === E.sourceLanguage && a.value === E.targetLanguage
      )
    ), { markFavoriteSuggestion: d, removeFavoriteSuggestion: r } = Jc(), { translationSizeMessageArgs: l } = ef(), g = () => d(
      i.value,
      s.value,
      a.value
    ), p = () => r(
      new Eo({
        title: i.value,
        sourceLanguage: s.value,
        targetLanguage: a.value
      })
    ), m = an(
      () => u.value ? Nh : Uh
    ), h = an(
      () => u.value ? p : g
    ), f = an(
      () => J.getPageUrl(s.value || "", i.value || "")
    ), _ = an(
      () => {
        var E;
        return (((E = o.value) == null ? void 0 : E.langLinksCount) || 0) + 1;
      }
    ), w = (E) => {
      const L = [
        { value: 1e9, suffix: "B" },
        // 1 billion
        { value: 1e6, suffix: "M" },
        // 1 million
        { value: 1e3, suffix: "K" }
        // 1 thousand
      ];
      for (let k = 0; k < L.length; k++)
        if (E >= L[k].value)
          return (E / L[k].value).toFixed(1).replace(/\.0$/, "") + L[k].suffix;
      return E.toString();
    }, y = an(() => {
      var L;
      const E = Object.values(((L = o.value) == null ? void 0 : L.pageviews) || {}).reduce(
        (k, T) => k + T,
        0
      );
      return w(E);
    }), C = an(() => l.value ? n.i18n(...l.value) : ""), v = an(() => l.value ? l.value[2] < 15 : !1);
    return (E, L) => {
      const k = F4("i18n");
      return U4(), I4(Be(F), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: po(() => [
          Rt(Be(x), null, {
            default: po(() => [
              Rt(Be(F), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: po(() => [
                  Rt(Be(x), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: f.value,
                    target: "_blank"
                  }, {
                    default: po(() => [
                      sn("h5", {
                        class: "ma-0 me-1",
                        textContent: tl(Be(i))
                      }, null, 8, R4),
                      Rt(Be(rs), {
                        size: "x-small",
                        icon: Be(Xc)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  Rt(Be(x), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: po(() => [
                      Rt(Be(q4), {
                        class: "px-0",
                        weight: "quiet",
                        action: u.value ? "progressive" : "default",
                        "aria-label": E.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: h.value
                      }, {
                        default: po(() => [
                          Rt(Be(rs), { icon: m.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              sn("div", z4, [
                sn("div", null, [
                  sn("span", null, [
                    Rt(Be(rs), {
                      icon: Be(Rh),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    sn("span", {
                      class: "pe-3",
                      textContent: tl(_.value)
                    }, null, 8, O4)
                  ]),
                  sn("span", null, [
                    Rt(Be(rs), {
                      icon: Be(kC),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    M4(sn("span", j4, null, 512), [
                      [k, [y.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                sn("span", {
                  class: N4(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": v.value
                  }])
                }, [
                  Rt(Be(rs), {
                    icon: Be(VC),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  sn("span", {
                    textContent: tl(C.value)
                  }, null, 8, H4)
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
const W4 = window.Vue.resolveDirective, Hn = window.Vue.createElementVNode, Oa = window.Vue.withDirectives, K4 = window.Vue.toDisplayString, Y4 = window.Vue.createTextVNode, nl = window.Vue.unref, ol = window.Vue.withCtx, sl = window.Vue.openBlock, al = window.Vue.createBlock;
window.Vue.createCommentVNode;
const J4 = { class: "pa-4" }, Q4 = { class: "flex pt-2" }, Z4 = window.Codex.CdxButton, eV = window.Vue.ref, tV = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = Io(), a = Zc(), i = eV(!1), { currentTranslation: c } = Ft(), u = () => b(this, null, function* () {
      i.value = !0;
      let d = !1;
      try {
        d = yield vt.splitTranslation(
          c.value.translationId
        );
      } catch (r) {
        mw.log.error(
          "[CX] Error while splitting the translation into section translations",
          r
        );
      }
      i.value = !1, d && (a(), s(), o());
    });
    return (d, r) => {
      const l = W4("i18n");
      return sl(), al(nl(St), {
        value: e.modelValue,
        persistent: i.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: d.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: ol(() => [
          Hn("div", Q4, [
            i.value ? (sl(), al(nl(st), { key: 1 })) : (sl(), al(nl(Z4), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: u
            }, {
              default: ol(() => [
                Y4(K4(d.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: ol(() => [
          Hn("div", J4, [
            Oa(Hn("p", null, null, 512), [
              [l, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            Oa(Hn("p", null, null, 512), [
              [l, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            Hn("p", null, [
              Oa(Hn("strong", null, null, 512), [
                [l, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            Oa(Hn("p", null, null, 512), [
              [l, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
}, nV = window.Vuex.useStore;
let ja = [];
const eu = () => {
  const e = nV();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || ja.includes(o) ? Promise.resolve() : (ja.push(o), no.fetchLanguageTitles(t, n).then((s) => {
      ja = ja.filter(
        (a) => a !== o
      ), s && e.commit("mediawiki/addLanguageTitleGroup", s);
    }));
  };
}, oV = window.Vue.ref, mo = oV(null), rf = () => {
  const e = () => b(void 0, null, function* () {
    var n, o;
    mo.value || (yield Ai.fetchCXServerToken().then((s) => {
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
const Tg = window.Vue.resolveDirective, Ha = window.Vue.createElementVNode, Bg = window.Vue.withDirectives, $n = window.Vue.unref, qa = window.Vue.withCtx, rn = window.Vue.createVNode, il = window.Vue.openBlock, Pg = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const sV = window.Vue.createBlock, aV = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, iV = { class: "mb-0" }, rV = { class: "sx-translation-confirmer__article-image flex justify-center" }, lV = ["src"], cV = { class: "ma-3" }, Fg = window.Vue.computed, uV = window.Vue.inject, dV = window.Vue.onBeforeUnmount, gV = window.Vue.ref, pV = window.Vuex.useStore, mV = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = pV(), { currentSourcePage: n } = rt(), { previousRoute: o } = Le(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: i,
      sectionURLParameter: c,
      clearTranslationURLParameters: u
    } = B(), d = uV("breakpoints"), r = Fg(() => d.value.nextBreakpoint), l = Fg(
      () => {
        var y;
        return (y = n.value) == null ? void 0 : y.getImage(r.value);
      }
    ), { fetchTranslationsByStatus: g } = Uo(), p = eu();
    g("draft"), p(s.value, i.value), Qc(), rf()(), nh()(a.value);
    const f = De(), _ = () => {
      o.value ? f.push({ name: o.value }) : f.push({ name: "dashboard" });
    };
    dV(() => {
      const y = f.currentRoute.value.name;
      (y === "dashboard" || y === "sx-article-search") && u();
    });
    const w = gV(!1);
    return (y, C) => {
      const v = Tg("i18n"), E = Tg("i18n-html");
      return il(), Pg("section", aV, [
        rn($n(F), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: qa(() => [
            rn($n(x), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: qa(() => [
                Bg(Ha("h5", iV, null, 512), [
                  [v, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            rn($n(x), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: qa(() => [
                rn($n(Ue), {
                  class: "pa-0",
                  type: "icon",
                  icon: $n(Xs),
                  "icon-size": 20,
                  onClick: _
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Ha("div", rV, [
          l.value ? (il(), Pg("img", {
            key: 0,
            src: l.value
          }, null, 8, lV)) : (il(), sV($n(Re), {
            key: 1,
            size: "120",
            icon: $n(Dm),
            "icon-color": y.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        rn(X4),
        rn(af),
        rn(D4, {
          onOpenTranslationConfirmationDialog: C[0] || (C[0] = (L) => w.value = !0)
        }),
        rn($n(F), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: qa(() => [
            Ha("p", cV, [
              Bg(Ha("small", null, null, 512), [
                [E, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        rn(tV, {
          modelValue: w.value,
          "onUpdate:modelValue": C[1] || (C[1] = (L) => w.value = L)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const hV = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: mV
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, fV = window.Vue.resolveComponent, wV = window.Vue.createVNode, _V = window.Vue.normalizeClass, vV = window.Vue.openBlock, SV = window.Vue.createElementBlock;
function yV(e, t, n, o, s, a) {
  const i = fV("sx-translation-confirmer");
  return vV(), SV("main", {
    class: _V(["sx-translation-confirmer-view", a.classes])
  }, [
    wV(i)
  ], 2);
}
const xV = /* @__PURE__ */ ae(hV, [["render", yV]]);
const CV = window.Vue.toDisplayString, Mg = window.Vue.unref, bV = window.Vue.createVNode, kV = window.Vue.createTextVNode, $V = window.Vue.createElementVNode, VV = window.Vue.openBlock, EV = window.Vue.createElementBlock, LV = { class: "sx-section-selector-view-article-item" }, AV = ["href"], DV = window.Codex.CdxIcon, Ng = {
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
    return (t, n) => (VV(), EV("span", LV, [
      $V("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        kV(CV(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        bV(Mg(DV), {
          size: "x-small",
          icon: Mg(Xc)
        }, null, 8, ["icon"])
      ], 8, AV)
    ]));
  }
};
const TV = window.Vue.resolveDirective, Ga = window.Vue.createElementVNode, rl = window.Vue.withDirectives, qn = window.Vue.unref, BV = window.Vue.toDisplayString, Xa = window.Vue.withCtx, ls = window.Vue.createVNode, PV = window.Vue.openBlock, FV = window.Vue.createElementBlock, MV = { class: "sx-section-selector__header pa-4" }, NV = { class: "sx-section-selector__header-text ma-0" }, UV = ["textContent"], IV = { class: "pt-0 ma-0" }, RV = { class: "ma-0" }, zV = window.Codex.CdxButton, OV = window.Codex.CdxIcon, jV = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = ze();
    return (n, o) => {
      const s = TV("i18n");
      return PV(), FV("div", MV, [
        ls(qn(F), { class: "ma-0 pb-3" }, {
          default: Xa(() => [
            ls(qn(x), null, {
              default: Xa(() => {
                var a;
                return [
                  rl(Ga("h6", NV, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  Ga("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: BV((a = qn(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, UV)
                ];
              }),
              _: 1
            }),
            ls(qn(x), {
              shrink: "",
              class: "justify-end"
            }, {
              default: Xa(() => [
                ls(qn(zV), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: Xa(() => [
                    ls(qn(OV), { icon: qn(No) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        rl(Ga("h4", IV, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        rl(Ga("p", RV, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, HV = window.Vue.renderList, qV = window.Vue.Fragment, ll = window.Vue.openBlock, Ug = window.Vue.createElementBlock, GV = window.Vue.renderSlot, Wa = window.Vue.unref, Ig = window.Vue.createVNode, Rg = window.Vue.withCtx, XV = window.Vue.createBlock, WV = { class: "sx-section-selector__sections-list ma-0 pa-0" }, KV = window.Codex.CdxButton, YV = window.Codex.CdxIcon, lf = {
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
    return (t, n) => (ll(), Ug("ul", WV, [
      (ll(!0), Ug(qV, null, HV(e.sections, (o) => (ll(), XV(Wa(F), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: Rg(() => [
          Ig(Wa(KV), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: Rg(() => [
              GV(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              Ig(Wa(YV), { icon: Wa(ta) }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["aria-label", "onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, JV = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const QV = window.Vue.resolveDirective, Ka = window.Vue.createElementVNode, cl = window.Vue.withDirectives, Et = window.Vue.unref, zg = window.Vue.toDisplayString, ho = window.Vue.withCtx, ul = window.Vue.openBlock, Og = window.Vue.createBlock;
window.Vue.createCommentVNode;
const cs = window.Vue.createVNode, ZV = window.Vue.createTextVNode, e3 = window.Vue.createElementBlock, t3 = { class: "sx-section-selector__missing-sections py-2" }, n3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, o3 = ["lang", "dir", "textContent"], jg = window.Vue.computed, s3 = window.Codex.CdxButton, a3 = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = ze(), n = jg(
      () => {
        var s;
        return I.getAutonym((s = t.value) == null ? void 0 : s.targetLanguage);
      }
    ), o = jg(
      () => {
        var s;
        return Object.keys(((s = t.value) == null ? void 0 : s.missingSections) || {}).length === 0;
      }
    );
    return (s, a) => {
      const i = QV("i18n");
      return ul(), e3("section", t3, [
        cl(Ka("h4", n3, null, 512), [
          [i, [
            n.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        o.value ? (ul(), Og(Et(F), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: ho(() => [
            cs(Et(x), {
              class: "py-6 justify-center",
              innerHTML: Et(JV)
            }, null, 8, ["innerHTML"]),
            cs(Et(x), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: ho(() => [
                cl(Ka("h6", null, null, 512), [
                  [i, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            cs(Et(x), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: ho(() => [
                cl(Ka("p", null, null, 512), [
                  [i, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            cs(Et(x), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: ho(() => [
                cs(Et(s3), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: a[1] || (a[1] = (c) => s.$emit("close"))
                }, {
                  default: ho(() => [
                    ZV(zg(s.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (ul(), Og(lf, {
          key: 0,
          sections: Et(t).orderedMissingSections,
          onSelectSection: a[0] || (a[0] = (c) => s.$emit("select-section", c))
        }, {
          default: ho(({ sourceSection: c }) => {
            var u, d;
            return [
              Ka("h5", {
                class: "ma-0",
                lang: (u = Et(t)) == null ? void 0 : u.sourceLanguage,
                dir: Et(I.getDir)((d = Et(t)) == null ? void 0 : d.sourceLanguage),
                textContent: zg(c)
              }, null, 8, o3)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const i3 = window.Vue.resolveDirective, Ya = window.Vue.createElementVNode, r3 = window.Vue.withDirectives, Gn = window.Vue.unref, Hg = window.Vue.toDisplayString, l3 = window.Vue.withCtx, c3 = window.Vue.createVNode, u3 = window.Vue.openBlock, d3 = window.Vue.createElementBlock, g3 = { class: "sx-section-selector__present-sections py-2" }, p3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, m3 = { class: "sx-section-selector__present-section-button-content" }, h3 = ["lang", "dir", "textContent"], f3 = ["lang", "dir", "textContent"], w3 = window.Vue.computed, qg = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = ze(), n = w3(
      () => {
        var o;
        return I.getAutonym((o = t.value) == null ? void 0 : o.targetLanguage);
      }
    );
    return (o, s) => {
      var i;
      const a = i3("i18n");
      return u3(), d3("section", g3, [
        r3(Ya("h4", p3, null, 512), [
          [a, [
            n.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        c3(lf, {
          sections: ((i = Gn(t)) == null ? void 0 : i.orderedPresentSections) || [],
          onSelectSection: s[0] || (s[0] = (c) => o.$emit("select-section", c))
        }, {
          default: l3(({ sourceSection: c, targetSection: u }) => {
            var d, r, l, g;
            return [
              Ya("div", m3, [
                Ya("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (d = Gn(t)) == null ? void 0 : d.sourceLanguage,
                  dir: Gn(I.getDir)((r = Gn(t)) == null ? void 0 : r.sourceLanguage),
                  textContent: Hg(c)
                }, null, 8, h3),
                Ya("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (l = Gn(t)) == null ? void 0 : l.targetLanguage,
                  dir: Gn(I.getDir)((g = Gn(t)) == null ? void 0 : g.targetLanguage),
                  textContent: Hg(u)
                }, null, 8, f3)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const Pe = window.Vue.createVNode, dl = window.Vue.openBlock, Gg = window.Vue.createBlock, Xg = window.Vue.createCommentVNode, _3 = window.Vue.resolveDirective, Vn = window.Vue.createElementVNode, us = window.Vue.withDirectives, Ye = window.Vue.unref, ln = window.Vue.withCtx, v3 = window.Vue.normalizeClass, Wg = window.Vue.toDisplayString, Kg = window.Vue.createTextVNode, S3 = window.Vue.createElementBlock, y3 = { class: "sx-section-selector col-12 col-tablet-9 col-desktop-7 mx-auto" }, x3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, C3 = { class: "sx-section-selector__additional-consideration-title" }, b3 = { href: "#" }, k3 = { class: "sx-section-selector__additional-consideration-title" }, $3 = { href: "#" }, ds = window.Vue.computed, V3 = window.Vue.inject, E3 = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = V3("breakpoints"), n = ds(() => t.value.desktopAndUp), { sectionSuggestion: o } = ze(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      clearTranslationURLParameters: i,
      setSectionURLParam: c
    } = B(), u = ds(() => I.getAutonym(s.value)), d = ds(() => I.getAutonym(a.value)), r = ds(
      () => {
        var y;
        return J.getPageUrl(s.value, (y = o.value) == null ? void 0 : y.sourceTitle);
      }
    ), l = ds(
      () => {
        var y;
        return J.getPageUrl(a.value, (y = o.value) == null ? void 0 : y.targetTitle);
      }
    ), g = De(), p = () => {
      i(), g.push({ name: "dashboard" });
    }, { currentTranslation: m } = Ft(), h = Io(), f = Zc(), { selectPageSectionByTitle: _ } = Ii(), w = (y) => {
      c(y), m.value ? (f(), h()) : (_(y), g.push({ name: "sx-content-comparator" }));
    };
    return (y, C) => {
      const v = _3("i18n");
      return dl(), S3("section", y3, [
        Pe(jV, { onClose: p }),
        Pe(af),
        Pe(Ye(F), {
          class: "ma-0",
          align: "stretch"
        }, {
          default: ln(() => [
            Pe(Ye(x), {
              cols: "12",
              desktop: "8",
              class: "ma-0 pa-0"
            }, {
              default: ln(() => [
                Pe(a3, {
                  onSelectSection: w,
                  onClose: p
                }),
                n.value ? Xg("", !0) : (dl(), Gg(qg, {
                  key: 0,
                  onSelectSection: w
                })),
                Vn("section", {
                  class: v3(["py-2", { "sx-section-selector__more-details--desktop": n.value }])
                }, [
                  us(Vn("h4", x3, null, 512), [
                    [v, [
                      d.value
                    ], "cx-sx-section-selector-more-details-title"]
                  ]),
                  Pe(Ye(F), {
                    class: "ma-0",
                    align: "start",
                    justify: "start"
                  }, {
                    default: ln(() => [
                      Pe(Ye(x), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: ln(() => [
                          Pe(Ng, {
                            path: r.value,
                            autonym: u.value
                          }, null, 8, ["path", "autonym"])
                        ]),
                        _: 1
                      }),
                      Pe(Ye(x), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: ln(() => [
                          Pe(Ng, {
                            path: l.value,
                            autonym: d.value
                          }, null, 8, ["path", "autonym"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ], 2),
                Pe(Ye(F), {
                  class: "sx-section-selector__additional-considerations ma-0",
                  align: "stretch"
                }, {
                  default: ln(() => [
                    Pe(Ye(x), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 pt-5 pb-4"
                    }, {
                      default: ln(() => [
                        Vn("h6", C3, [
                          Pe(Ye(Re), {
                            icon: Ye(u0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          Kg(" " + Wg(y.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                        ]),
                        us(Vn("p", null, null, 512), [
                          [v, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                        ]),
                        us(Vn("a", b3, null, 512), [
                          [v, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                        ])
                      ]),
                      _: 1
                    }),
                    Pe(Ye(x), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 py-5"
                    }, {
                      default: ln(() => [
                        Vn("h6", k3, [
                          Pe(Ye(Re), {
                            icon: Ye(c0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          Kg(" " + Wg(y.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                        ]),
                        us(Vn("p", null, null, 512), [
                          [v, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                        ]),
                        us(Vn("a", $3, null, 512), [
                          [v, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            n.value ? (dl(), Gg(Ye(x), {
              key: 0,
              desktop: "4",
              class: "ma-0 pa-0"
            }, {
              default: ln(() => [
                Pe(qg, {
                  class: "sx-section-selector-section-list-present--sidebar fill-height p-0",
                  onSelectSection: w
                })
              ]),
              _: 1
            })) : Xg("", !0)
          ]),
          _: 1
        })
      ]);
    };
  }
}, L3 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: E3
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, A3 = window.Vue.resolveComponent, D3 = window.Vue.createVNode, T3 = window.Vue.normalizeClass, B3 = window.Vue.openBlock, P3 = window.Vue.createElementBlock;
function F3(e, t, n, o, s, a) {
  const i = A3("sx-section-selector");
  return B3(), P3("main", {
    class: T3(["sx-section-selector-view", a.classes])
  }, [
    D3(i)
  ], 2);
}
const M3 = /* @__PURE__ */ ae(L3, [["render", F3]]), N3 = window.Vue.ref, cf = N3("expand"), U3 = (e) => {
  cf.value = e;
}, uf = () => ({
  existingSectionPublishOption: cf,
  setExistingSectionPublishOption: U3
}), gs = window.Vue.computed, I3 = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    sectionURLParameter: n
  } = B(), o = gs(
    () => I.getAutonym(e.value)
  ), s = gs(
    () => I.getAutonym(t.value)
  ), { sectionSuggestion: a } = ze(), { existingSectionPublishOption: i } = uf(), c = gs(
    () => {
      var r;
      return !!((r = a.value) != null && r.presentSections.hasOwnProperty(n.value));
    }
  ), u = gs(
    () => c.value && i.value === "expand"
  ), d = he();
  return gs(() => {
    const r = {
      value: "source_section",
      props: {
        label: d.i18n(
          "cx-sx-content-comparator-source-selector-title",
          o.value
        ),
        type: "text",
        class: "px-0 py-4 mx-4"
      }
    };
    let l;
    switch (!0) {
      case u.value:
        l = {
          value: "target_section",
          props: {
            label: d.i18n(
              "cx-sx-content-comparator-target-selector-target-section-title",
              s.value
            ),
            type: "text",
            class: "px-0 py-4 mx-4"
          }
        };
        break;
      default:
        l = {
          value: "target_article",
          props: {
            label: d.i18n(
              "cx-sx-content-comparator-target-selector-full-article-title",
              s.value
            ),
            type: "text",
            class: "px-0 py-4 mx-4"
          }
        };
    }
    return [r, l];
  });
};
const Yg = window.Vue.unref, R3 = window.Vue.createVNode, z3 = window.Vue.openBlock, O3 = window.Vue.createElementBlock, j3 = { class: "sx-content-comparator__content-type-selector" }, H3 = window.Vue.watchEffect, q3 = {
  __name: "ContentTypeSelector",
  props: {
    selection: {
      type: String,
      required: !0
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = (i) => o("update:selection", i), a = I3();
    return H3(() => {
      a.value.map((c) => c.value).includes(n.selection) || s(a.value[0].value);
    }), (i, c) => (z3(), O3("div", j3, [
      R3(Yg(Gs), {
        items: Yg(a),
        active: e.selection,
        onSelect: s
      }, null, 8, ["items", "active"])
    ]));
  }
}, ps = window.Vue.computed, G3 = window.Vuex.useStore, oe = () => {
  const e = G3(), { currentSourcePage: t, currentTargetPage: n } = rt(), { currentMTProvider: o } = Le(e), { sectionURLParameter: s } = B(), a = ps(() => {
    var r, l;
    return s.value ? (l = t.value) == null ? void 0 : l.getSectionByTitle(s.value) : (r = t.value) == null ? void 0 : r.leadSection;
  }), i = ps(
    () => {
      var r;
      return (r = a.value) == null ? void 0 : r.isTitleSelected;
    }
  ), c = ps(
    () => {
      var r;
      return (r = a.value) == null ? void 0 : r.selectedContentTranslationUnit;
    }
  ), u = ps(
    () => {
      var r;
      return (r = a.value) == null ? void 0 : r.getProposedTranslationByMtProvider(
        o.value
      );
    }
  ), d = ps(() => a.value.isLeadSection ? a.value.title : n.value.title);
  return {
    sourceSection: a,
    isSectionTitleSelected: i,
    selectedContentTranslationUnit: c,
    currentProposedTranslation: u,
    targetPageTitleForPublishing: d
  };
}, ms = window.Vue.computed, tu = () => {
  const { currentTargetPage: e } = rt(), { sectionSuggestion: t } = ze(), { sectionURLParameter: n } = B(), o = ms(
    () => t.value.missingSections[n.value] || t.value.presentSections[n.value] || ""
  ), s = ms(
    () => {
      var d;
      return (((d = a.value) == null ? void 0 : d.title) || "").replace(/ /g, "_");
    }
  ), a = ms(
    () => {
      var d;
      return (d = e.value) == null ? void 0 : d.getSectionByTitle(o.value);
    }
  ), { sourceSection: i } = oe(), c = ms(() => {
    var d;
    return (d = i.value) == null ? void 0 : d.html;
  }), u = ms(() => {
    var d;
    return (d = a.value) == null ? void 0 : d.html;
  });
  return {
    activeSectionTargetTitle: o,
    sourceSectionContent: c,
    targetSectionAnchor: s,
    targetSectionContent: u
  };
};
const Ja = window.Vue.createVNode, X3 = window.Vue.toDisplayString, W3 = window.Vue.createElementVNode, En = window.Vue.unref, Qa = window.Vue.withCtx, gl = window.Vue.openBlock, pl = window.Vue.createBlock;
window.Vue.createCommentVNode;
const K3 = window.Vue.normalizeClass, Y3 = ["lang", "dir", "textContent"], Jg = window.Vue.ref, ml = window.Vue.computed, J3 = window.Vue.onMounted, Q3 = {
  __name: "SXContentComparatorContentHeader",
  props: {
    contentTypeSelection: {
      type: String,
      required: !0
    }
  },
  emits: [
    "update:contentTypeSelection",
    "translation-button-clicked"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, s = Jg(!1), { sectionSuggestion: a } = ze(), { sectionURLParameter: i } = B(), c = ml(
      () => (i.value || "").replace(/ /g, "_")
    ), u = (m) => o("update:contentTypeSelection", m), { activeSectionTargetTitle: d, targetSectionAnchor: r } = tu(), l = ml(() => {
      switch (n.contentTypeSelection) {
        case "source_section":
          return {
            title: i.value,
            path: `${J.getPageUrl(
              a.value.sourceLanguage,
              a.value.sourceTitle
            )}#${c.value}`,
            lang: a.value.sourceLanguage,
            dir: I.getDir(a.value.sourceLanguage)
          };
        case "target_article":
          return {
            title: a.value.targetTitle,
            path: g.value,
            lang: a.value.targetLanguage,
            dir: I.getDir(a.value.targetLanguage)
          };
        default:
          return {
            title: d.value,
            path: `${g.value}#${r.value}`
          };
      }
    }), g = ml(
      () => J.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), p = Jg(null);
    return J3(() => {
      new IntersectionObserver(
        ([h]) => {
          s.value = h.intersectionRect.height < h.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(p.value.$el);
    }), (m, h) => (gl(), pl(En(F), {
      ref_key: "contentHeader",
      ref: p,
      class: K3(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
      direction: "column",
      align: "stretch",
      reverse: s.value
    }, {
      default: Qa(() => [
        Ja(q3, {
          selection: e.contentTypeSelection,
          "onUpdate:selection": u
        }, null, 8, ["selection"]),
        Ja(En(F), {
          justify: "between",
          class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
        }, {
          default: Qa(() => [
            Ja(En(x), null, {
              default: Qa(() => [
                W3("h3", {
                  lang: l.value.lang,
                  dir: l.value.dir,
                  class: "ma-0 pa-0",
                  textContent: X3(l.value.title)
                }, null, 8, Y3)
              ]),
              _: 1
            }),
            Ja(En(x), { shrink: "" }, {
              default: Qa(() => [
                s.value ? (gl(), pl(En(Ue), {
                  key: 0,
                  icon: En(bi),
                  progressive: "",
                  label: m.$i18n(
                    "cx-sx-content-comparator-content-header-translate-button-label"
                  ),
                  onClick: h[0] || (h[0] = (f) => m.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label"])) : (gl(), pl(En(Ue), {
                  key: 1,
                  class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                  icon: En(Lm),
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
}, Za = window.Vue.unref, Qg = window.Vue.createVNode, Z3 = window.Vue.openBlock, eE = window.Vue.createElementBlock, tE = { class: "sx-content-comparator__header-navigation flex items-center" }, nE = window.Vue.computed, oE = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = B(), o = nE(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = Ii(), a = () => {
      const c = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[c];
      s(u);
    }, i = () => {
      const c = (o.value + 1) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[c];
      s(u);
    };
    return (c, u) => (Z3(), eE("div", tE, [
      Qg(Za(Ue), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: Za(a0),
        onClick: a
      }, null, 8, ["icon"]),
      Qg(Za(Ue), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: Za(s0),
        onClick: i
      }, null, 8, ["icon"])
    ]));
  }
};
const Zg = window.Vue.toDisplayString, sE = window.Vue.resolveDirective, hl = window.Vue.withDirectives, fo = window.Vue.openBlock, ei = window.Vue.createElementBlock, aE = window.Vue.createCommentVNode, iE = window.Vue.createTextVNode, ep = window.Vue.createElementVNode, zt = window.Vue.unref, rE = window.Vue.normalizeClass, fl = window.Vue.withCtx, wl = window.Vue.createVNode, tp = window.Vue.createBlock, lE = { class: "sx-content-comparator-header__mapped-section" }, cE = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, uE = { key: 0 }, dE = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, gE = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, np = window.Vue.computed, pE = {
  __name: "SXContentComparatorHeaderMappedSection",
  setup(e) {
    const { sectionSuggestion: t } = ze(), { activeSectionTargetTitle: n } = tu(), o = he(), { existingSectionPublishOption: s, setExistingSectionPublishOption: a } = uf(), i = np(
      () => s.value === "new"
    ), c = np(
      () => o.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        I.getAutonym(t.value.targetLanguage)
      )
    );
    return (u, d) => {
      const r = sE("i18n");
      return fo(), ei("div", lE, [
        wl(zt(F), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: fl(() => [
            wl(zt(x), { grow: "" }, {
              default: fl(() => [
                ep("h6", cE, [
                  iE(Zg(c.value) + " ", 1),
                  i.value ? hl((fo(), ei("span", uE, null, 512)), [
                    [r, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : aE("", !0)
                ]),
                ep("h6", {
                  class: rE(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": i.value
                  }])
                }, Zg(zt(n)), 3)
              ]),
              _: 1
            }),
            wl(zt(x), { shrink: "" }, {
              default: fl(() => [
                i.value ? (fo(), tp(zt(Ue), {
                  key: 1,
                  class: "pa-0",
                  icon: zt(p0),
                  type: "icon",
                  onClick: d[1] || (d[1] = (l) => zt(a)("expand"))
                }, null, 8, ["icon"])) : (fo(), tp(zt(Ue), {
                  key: 0,
                  class: "pa-0",
                  icon: zt(Em),
                  type: "icon",
                  onClick: d[0] || (d[0] = (l) => zt(a)("new"))
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        i.value ? hl((fo(), ei("p", gE, null, 512)), [
          [r, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ]) : hl((fo(), ei("p", dE, null, 512)), [
          [r, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ])
      ]);
    };
  }
};
const Ae = window.Vue.unref, wo = window.Vue.createVNode, op = window.Vue.toDisplayString, hn = window.Vue.createElementVNode, mE = window.Vue.normalizeClass, _l = window.Vue.withCtx, hE = window.Vue.resolveDirective, sp = window.Vue.withDirectives, vl = window.Vue.openBlock, ap = window.Vue.createBlock, ip = window.Vue.createCommentVNode, fE = window.Vue.createElementBlock, wE = { class: "sx-content-comparator__header pa-4" }, _E = { class: "row my-1 py-2 mx-0" }, vE = { class: "sx-content-comparator-header__titles grow" }, SE = ["lang", "dir"], yE = ["lang", "dir"], xE = { class: "py-2 mb-1" }, CE = /* @__PURE__ */ hn("br", null, null, -1), hs = window.Vue.computed, bE = window.Vue.inject, kE = {
  __name: "SXContentComparatorHeader",
  emits: ["close", "translation-button-clicked"],
  setup(e) {
    const { sectionURLParameter: t } = B(), { sourceSection: n } = oe(), { sectionSuggestion: o } = ze(), s = hs(
      () => {
        var r;
        return (r = o.value) == null ? void 0 : r.missingSections.hasOwnProperty(t.value);
      }
    ), a = hs(
      () => {
        var r;
        return (r = o.value) == null ? void 0 : r.presentSections.hasOwnProperty(t.value);
      }
    ), i = hs(() => {
      var r;
      return (r = n.value) == null ? void 0 : r.html;
    }), c = hs(() => [
      ...Object.keys(o.value.missingSections),
      ...Object.keys(o.value.presentSections)
    ]), u = bE("breakpoints"), d = hs(() => u.value.mobile);
    return (r, l) => {
      const g = hE("i18n");
      return vl(), fE("div", wE, [
        wo(Ae(Ue), {
          class: "py-2 pa-0",
          icon: Ae(i0),
          label: r.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: l[0] || (l[0] = (p) => r.$emit("close"))
        }, null, 8, ["icon", "label"]),
        hn("div", _E, [
          hn("div", {
            class: mE(["flex grow", d.value ? "col-12" : "me-6"])
          }, [
            hn("div", vE, [
              hn("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: Ae(o).sourceLanguage,
                dir: Ae(I.getDir)(Ae(o).sourceLanguage)
              }, op(Ae(o).sourceTitle), 9, SE),
              hn("h2", {
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: Ae(o).sourceLanguage,
                dir: Ae(I.getDir)(Ae(o).sourceLanguage)
              }, op(Ae(t)), 9, yE)
            ]),
            wo(oE, { "section-source-titles": c.value }, null, 8, ["section-source-titles"])
          ], 2),
          hn("div", xE, [
            wo(Ae(Ue), {
              icon: Ae(bi),
              progressive: "",
              label: r.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !i.value,
              onClick: l[1] || (l[1] = (p) => r.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ])
        ]),
        s.value ? (vl(), ap(Ae(F), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: _l(() => [
            wo(Ae(x), {
              shrink: "",
              class: "pe-2"
            }, {
              default: _l(() => [
                wo(Ae(Re), { icon: Ae(d0) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            wo(Ae(x), { class: "ma-0" }, {
              default: _l(() => [
                sp(hn("strong", null, null, 512), [
                  [g, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                CE,
                sp(hn("span", null, null, 512), [
                  [g, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : ip("", !0),
        a.value ? (vl(), ap(pE, { key: 1 })) : ip("", !0)
      ]);
    };
  }
};
const rp = window.Vue.toDisplayString, $E = window.Vue.createElementVNode, lp = window.Vue.openBlock, cp = window.Vue.createElementBlock, VE = window.Vue.createCommentVNode, EE = { class: "sx-content-comparator__new-section-placeholder mt-4 py-4 px-7" }, LE = ["textContent"], AE = ["textContent"], df = {
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
    return (t, n) => (lp(), cp("section", EE, [
      $E("h5", {
        textContent: rp(e.placeholderTitle)
      }, null, 8, LE),
      e.placeholderSubtitle ? (lp(), cp("p", {
        key: 0,
        textContent: rp(e.placeholderSubtitle)
      }, null, 8, AE)) : VE("", !0)
    ]));
  }
}, DE = window.Vue.computed, TE = window.Vue.createApp, BE = window.Vuex.useStore, PE = () => {
  const e = BE(), { sectionSuggestion: t } = ze(), { currentTargetPage: n } = rt(), o = he(), s = () => TE(
    df,
    {
      placeholderTitle: o.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    }
  ).mount(document.createElement("div")).$el, a = (c) => e.getters["suggestions/getFirstAppendixTitleBySectionSuggestion"](
    c
  ), i = (c) => {
    const u = c.getElementsByTagName("base");
    Array.from(u).forEach(
      (d) => d.parentNode.removeChild(d)
    );
  };
  return DE(() => {
    var r;
    const c = document.createElement("div");
    c.innerHTML = (r = n.value) == null ? void 0 : r.content, i(c);
    const u = s(), d = a(
      t.value
    );
    if (d) {
      const l = Array.from(
        c.querySelectorAll("h2")
      ).filter((g) => g.textContent.match(d));
      if (l && l.length) {
        const g = l[0].parentNode;
        g.parentNode.insertBefore(
          u,
          g
        );
      }
    } else
      c.appendChild(u);
    return c.innerHTML;
  });
};
const Sl = window.Vue.createVNode, Je = window.Vue.unref, _o = window.Vue.openBlock, up = window.Vue.createBlock, dp = window.Vue.createCommentVNode, ti = window.Vue.createElementVNode, yl = window.Vue.Fragment, ni = window.Vue.createElementBlock, FE = { class: "sx-content-comparator col-12 col-tablet-9 col-desktop-7 mx-auto" }, ME = { class: "sx-content-comparator__source-content" }, NE = ["lang", "dir", "innerHTML"], UE = ["lang", "dir", "innerHTML"], IE = ["innerHTML"], RE = window.Vue.ref, zE = window.Vue.computed, OE = window.Vue.watch, jE = window.Vuex.useStore, HE = {
  __name: "SXContentComparator",
  setup(e) {
    jE();
    const t = De(), n = RE("source_section"), { logDashboardTranslationStartEvent: o } = Ni(), s = Io(), a = () => t.push({ name: "sx-section-selector" }), i = () => {
      o(), s();
    }, {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u,
      pageURLParameter: d,
      sectionURLParameter: r
    } = B(), { activeSectionTargetTitle: l, sourceSectionContent: g, targetSectionContent: p } = tu(), m = PE(), { sectionSuggestion: h } = ze(), f = zE(() => h.value.targetTitle), _ = sf();
    return OE(
      f,
      () => _(
        u.value,
        c.value,
        f.value
      ),
      { immediate: !0 }
    ), (w, y) => (_o(), ni("section", FE, [
      Sl(kE, {
        onTranslationButtonClicked: i,
        onClose: a
      }),
      Sl(Q3, {
        "content-type-selection": n.value,
        "onUpdate:contentTypeSelection": y[0] || (y[0] = (C) => n.value = C),
        onTranslationButtonClicked: i
      }, null, 8, ["content-type-selection"]),
      ti("section", ME, [
        n.value === "source_section" ? (_o(), ni(yl, { key: 0 }, [
          Je(g) ? dp("", !0) : (_o(), up(Je(st), { key: 0 })),
          ti("section", {
            lang: Je(c),
            dir: Je(I.getDir)(Je(c)),
            class: "pt-2 px-4",
            innerHTML: Je(g)
          }, null, 8, NE)
        ], 64)) : n.value === "target_article" ? (_o(), ni(yl, { key: 1 }, [
          Je(m) ? dp("", !0) : (_o(), up(Je(st), { key: 0 })),
          ti("article", {
            lang: Je(u),
            dir: Je(I.getDir)(Je(u)),
            class: "px-4",
            innerHTML: Je(m)
          }, null, 8, UE)
        ], 64)) : (_o(), ni(yl, { key: 2 }, [
          ti("section", {
            class: "pa-4",
            innerHTML: Je(p)
          }, null, 8, IE),
          Sl(df, {
            class: "sx-content-comparator__new-section-placeholder--present",
            "placeholder-title": w.$i18n("cx-sx-content-comparator-present-section-placeholder-title"),
            "placeholder-subtitle": w.$i18n(
              "cx-sx-content-comparator-present-section-placeholder-subtitle"
            )
          }, null, 8, ["placeholder-title", "placeholder-subtitle"])
        ], 64))
      ])
    ]));
  }
}, qE = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: HE
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, GE = window.Vue.resolveComponent, XE = window.Vue.createVNode, WE = window.Vue.normalizeClass, KE = window.Vue.openBlock, YE = window.Vue.createElementBlock;
function JE(e, t, n, o, s, a) {
  const i = GE("sx-content-comparator");
  return KE(), YE("main", {
    class: WE(["sx-content-comparator-view", a.classes])
  }, [
    XE(i)
  ], 2);
}
const QE = /* @__PURE__ */ ae(qE, [["render", JE]]);
const ZE = window.Vue.resolveDirective, fs = window.Vue.createElementVNode, gp = window.Vue.withDirectives, oi = window.Vue.unref, xl = window.Vue.createVNode, pp = window.Vue.toDisplayString, mp = window.Vue.createTextVNode, ws = window.Vue.withCtx, e5 = window.Vue.openBlock, t5 = window.Vue.createBlock, n5 = { class: "mw-ui-dialog__header px-4 py-3" }, o5 = { class: "mw-ui-dialog__header-title" }, s5 = { class: "pa-4" }, a5 = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, hp = window.Codex.CdxButton, i5 = {
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
      const u = ZE("i18n");
      return e5(), t5(oi(St), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: ws(() => [
          fs("div", n5, [
            gp(fs("span", o5, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: ws(() => [
          fs("div", a5, [
            xl(oi(hp), {
              weight: "quiet",
              onClick: s
            }, {
              default: ws(() => [
                mp(pp(i.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            xl(oi(hp), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: ws(() => [
                mp(pp(i.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: ws(() => [
          xl(oi(Ci)),
          fs("div", s5, [
            gp(fs("span", null, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, r5 = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => eo(a)
  );
  return s && Mm(s) ? vt.parseTemplateWikitext(
    Pm(s),
    n,
    t
  ) : Promise.resolve(null);
}, gf = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => eo(a)
  );
  return s ? vt.parseTemplateWikitext(
    Pm(s),
    n,
    t
  ) : Promise.resolve(null);
}, l5 = window.Vuex.useStore, nu = () => {
  const e = l5(), { sourceSection: t } = oe(), { getCurrentTitleByLanguage: n } = vn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = B(), a = rf(), i = (r, l, g) => {
    if (r === 0) {
      t.value.proposedTitleTranslations[l] = g;
      return;
    }
    const p = t.value.getContentTranslationUnitById(r);
    p instanceof nt ? p.blockTemplateProposedTranslations[l] = g : p instanceof Mn && p.addProposedTranslation(l, g);
  }, c = (r, l) => b(void 0, null, function* () {
    if (!e.getters["mediawiki/isValidProviderForTranslation"](o.value, s.value, r))
      return "";
    try {
      const p = yield a();
      return yield vt.fetchSegmentTranslation(
        o.value,
        s.value,
        r,
        l,
        p
      );
    } catch (p) {
      return mw.log.error("Error while translating segment", p), "";
    }
  }), u = (r, l) => b(void 0, null, function* () {
    if (t.value.hasProposedTranslationByTranslationUnitId(
      r,
      l
    ))
      return;
    let g = t.value.getOriginalContentByTranslationUnitId(r);
    const p = t.value.getContentTranslationUnitById(r);
    let m;
    if (e.commit("application/addMtRequestsPending", r), m = yield c(l, g), !m) {
      e.commit("application/removeMtRequestsPending", r);
      return;
    }
    p instanceof nt && (p.setBlockTemplateAdaptationInfoByHtml(
      l,
      m
    ), m = (yield r5(
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
    translateTranslationUnitById: u,
    translateSelectedTranslationUnitForAllProviders: () => {
      const r = e.getters["mediawiki/getSupportedMTProviders"](
        o.value,
        s.value
      ), { selectedTranslationUnitId: l } = t.value;
      r.forEach(
        (g) => u(l, g)
      );
    }
  };
}, c5 = window.Vuex.useStore, u5 = () => {
  const { sourceSection: e } = oe(), t = c5(), { translateTranslationUnitById: n } = nu();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
const d5 = window.Vue.resolveDirective, mt = window.Vue.createElementVNode, si = window.Vue.withDirectives, Qe = window.Vue.unref, Cl = window.Vue.createVNode, Ln = window.Vue.withCtx, g5 = window.Vue.renderList, p5 = window.Vue.Fragment, bl = window.Vue.openBlock, m5 = window.Vue.createElementBlock, h5 = window.Vue.toDisplayString, fp = window.Vue.createBlock, f5 = window.Vue.createCommentVNode, w5 = { class: "mw-ui-dialog__header pa-4" }, _5 = { class: "row ma-0 py-2" }, v5 = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, S5 = { class: "mb-0" }, y5 = { class: "col shrink justify-center" }, x5 = { class: "pb-2 mb-0" }, C5 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, b5 = ["dir", "lang", "innerHTML"], k5 = ["textContent"], $5 = ["innerHTML"], V5 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, E5 = /* @__PURE__ */ mt("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), kl = window.Vue.computed, L5 = window.Vuex.useStore, A5 = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = se.EMPTY_TEXT_PROVIDER_KEY, s = se.ORIGINAL_TEXT_PROVIDER_KEY, a = L5(), {
      sourceSection: i,
      isSectionTitleSelected: c,
      selectedContentTranslationUnit: u
    } = oe(), {
      sourceLanguageURLParameter: d,
      targetLanguageURLParameter: r
    } = B(), l = kl(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        d.value,
        r.value
      )
    ), g = kl(() => {
      const w = [s, o];
      return l.value.filter(
        (y) => !w.includes(y)
      );
    }), p = kl(
      () => c.value ? i.value.proposedTitleTranslations : u.value.proposedTranslations
    ), m = u5(), h = (w) => {
      m(w), _();
    }, f = se.getMTProviderLabel, _ = () => n("update:active", !1);
    return (w, y) => {
      const C = d5("i18n");
      return e.active ? (bl(), fp(Qe(St), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: Ln(() => [
          mt("div", w5, [
            mt("div", _5, [
              mt("div", v5, [
                si(mt("h4", S5, null, 512), [
                  [C, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              mt("div", y5, [
                Cl(Qe(Ue), {
                  type: "icon",
                  icon: Qe(Xs),
                  class: "pa-0",
                  onClick: _
                }, null, 8, ["icon"])
              ])
            ]),
            si(mt("h6", x5, null, 512), [
              [C, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: Ln(() => [
          Cl(Qe(ot), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: y[0] || (y[0] = (v) => h(Qe(s)))
          }, {
            header: Ln(() => [
              si(mt("h5", C5, null, 512), [
                [C, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: Ln(() => [
              mt("p", {
                dir: Qe(I.getDir)(Qe(d)),
                lang: Qe(d),
                innerHTML: p.value[Qe(s)]
              }, null, 8, b5)
            ]),
            _: 1
          }),
          (bl(!0), m5(p5, null, g5(g.value, (v) => (bl(), fp(Qe(ot), {
            key: v,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (E) => h(v)
          }, {
            header: Ln(() => [
              mt("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: h5(Qe(f)(v))
              }, null, 8, k5)
            ]),
            default: Ln(() => [
              mt("p", {
                innerHTML: p.value[v]
              }, null, 8, $5)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          Cl(Qe(ot), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: y[1] || (y[1] = (v) => h(Qe(o)))
          }, {
            header: Ln(() => [
              si(mt("h5", V5, null, 512), [
                [C, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: Ln(() => [
              E5
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : f5("", !0);
    };
  }
}, D5 = window.Vuex.useStore, Ro = () => {
  const { sourceSection: e } = oe(), t = D5(), { translateTranslationUnitById: n } = nu(), { currentMTProvider: o } = Le(t), s = (c) => b(void 0, null, function* () {
    e.value.selectTranslationUnitById(c), yield n(c, o.value);
    const { followingTranslationUnit: u } = e.value;
    u && (yield n(
      u.id,
      o
    ));
  });
  return {
    selectNextTranslationUnit: () => {
      const { followingTranslationUnit: c } = e.value;
      return c ? s(c.id) : Promise.resolve();
    },
    selectPreviousTranslationUnit: () => {
      const { selectedContentTranslationUnitIndex: c, contentTranslationUnits: u } = e.value, d = c - 1;
      let r = 0;
      return d > -1 && (r = u[d].id), s(r);
    },
    selectTranslationUnitById: s
  };
};
const T5 = window.Vue.toDisplayString, $l = window.Vue.createElementVNode, Vl = window.Vue.unref, B5 = window.Vue.createVNode, P5 = window.Vue.normalizeClass, F5 = window.Vue.withCtx, M5 = window.Vue.openBlock, N5 = window.Vue.createBlock, U5 = ["href"], I5 = ["textContent"], R5 = ["innerHTML"], vo = window.Vue.computed, z5 = window.Vuex.useStore, wp = "sx-sentence-selector__section-title", O5 = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const t = z5(), { sourceSection: n, isSectionTitleSelected: o } = oe(), { currentSourcePage: s } = rt(), { sourceLanguage: a } = Le(t), i = vo(() => {
      var m;
      return (m = s.value) == null ? void 0 : m.title;
    }), c = vo(
      () => {
        var m;
        return ((m = n.value) == null ? void 0 : m.title) || i.value;
      }
    ), u = vo(
      () => J.getPageUrl(a.value, i.value)
    ), d = vo(
      () => {
        var m;
        return !!((m = n.value) != null && m.translatedTitle);
      }
    ), r = vo(
      () => d.value ? "translated" : "selected"
    ), l = vo(() => {
      const m = [wp];
      return o.value && m.push(`${wp}--${r.value}`), m;
    }), { selectTranslationUnitById: g } = Ro(), p = () => g(0);
    return (m, h) => (M5(), N5(Vl(x), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: F5(() => [
        $l("a", {
          href: u.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          $l("strong", {
            textContent: T5(i.value)
          }, null, 8, I5),
          B5(Vl(Re), {
            icon: Vl(Lm),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, U5),
        $l("h2", {
          class: P5(["pa-0 ma-0", l.value]),
          onClick: p,
          innerHTML: c.value
        }, null, 10, R5)
      ]),
      _: 1
    }));
  }
};
const Ot = window.Vue.unref, _s = window.Vue.createVNode, ai = window.Vue.withCtx, _p = window.Vue.toDisplayString, vp = window.Vue.createTextVNode, j5 = window.Vue.openBlock, H5 = window.Vue.createBlock, q5 = window.Vue.computed, El = window.Codex.CdxButton, Sp = window.Codex.CdxIcon, pf = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = oe(), s = q5(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, i) => (j5(), H5(Ot(F), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: ai(() => [
        _s(Ot(El), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: Ot(n),
          onClick: i[0] || (i[0] = (c) => a.$emit("select-previous-segment"))
        }, {
          default: ai(() => [
            _s(Ot(Sp), {
              class: "me-1",
              icon: Ot(Wc)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        _s(Ot(El), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !Ot(o),
          onClick: i[1] || (i[1] = (c) => a.$emit("apply-translation"))
        }, {
          default: ai(() => [
            vp(_p(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        _s(Ot(El), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: i[2] || (i[2] = (c) => a.$emit("skip-translation"))
        }, {
          default: ai(() => [
            vp(_p(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            _s(Ot(Sp), {
              class: "ms-1",
              size: "small",
              icon: Ot(ta)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const Xn = window.Vue.unref, G5 = window.Vue.toDisplayString, vs = window.Vue.createVNode, ii = window.Vue.withCtx, X5 = window.Vue.openBlock, W5 = window.Vue.createBlock, Ll = window.Vue.computed, K5 = window.Vuex.useStore, Y5 = window.Codex.CdxButton, J5 = window.Codex.CdxIcon, Q5 = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = K5(), n = Ll(() => t.state.application.currentMTProvider), o = he(), s = Ll(() => ({
      [se.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [se.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = Ll(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        se.getMTProviderLabel(n.value)
      )
    );
    return (i, c) => (X5(), W5(Xn(x), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: ii(() => [
        vs(Xn(F), { class: "ma-0 ps-5 pb-4" }, {
          default: ii(() => [
            vs(Xn(x), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: G5(a.value)
            }, null, 8, ["textContent"]),
            vs(Xn(x), {
              shrink: "",
              class: "pe-5"
            }, {
              default: ii(() => [
                vs(Xn(Y5), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": i.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: c[0] || (c[0] = (u) => i.$emit("configure-options"))
                }, {
                  default: ii(() => [
                    vs(Xn(J5), {
                      class: "pa-0",
                      icon: Xn(Gc)
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
const Lt = window.Vue.unref, An = window.Vue.createVNode, Z5 = window.Vue.resolveDirective, yp = window.Vue.createElementVNode, eL = window.Vue.withDirectives, xp = window.Vue.toDisplayString, Cp = window.Vue.createTextVNode, Ss = window.Vue.withCtx, tL = window.Vue.openBlock, nL = window.Vue.createElementBlock, oL = { class: "mt-retry-body pb-5" }, sL = { class: "retry-body__message" }, bp = window.Codex.CdxButton, Al = window.Codex.CdxIcon, aL = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = Z5("i18n");
      return tL(), nL("div", oL, [
        yp("div", sL, [
          An(Lt(Al), {
            class: "me-2",
            icon: Lt(Ph)
          }, null, 8, ["icon"]),
          eL(yp("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        An(Lt(F), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: Ss(() => [
            An(Lt(x), { cols: "6" }, {
              default: Ss(() => [
                An(Lt(bp), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: Ss(() => [
                    An(Lt(Al), {
                      class: "me-1",
                      icon: Lt(zh)
                    }, null, 8, ["icon"]),
                    Cp(" " + xp(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            An(Lt(x), { cols: "6" }, {
              default: Ss(() => [
                An(Lt(bp), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: Ss(() => [
                    An(Lt(Al), {
                      class: "me-1",
                      icon: Lt(TC)
                    }, null, 8, ["icon"]),
                    Cp(" " + xp(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const So = window.Vue.createVNode, Ze = window.Vue.unref, ys = window.Vue.openBlock, iL = window.Vue.createElementBlock, rL = window.Vue.createCommentVNode, ri = window.Vue.createBlock, lL = window.Vue.normalizeClass, cL = window.Vue.normalizeStyle, xs = window.Vue.withCtx, uL = window.Vue.toDisplayString, dL = window.Vue.createTextVNode, gL = window.Vue.normalizeProps, pL = window.Vue.guardReactiveProps, mL = ["lang", "dir", "innerHTML"], Dl = window.Vue.ref, hL = window.Vue.onMounted, fL = window.Vue.onBeforeUnmount, Tl = window.Vue.computed, wL = window.Vue.nextTick, _L = window.Vuex.useStore, vL = window.Codex.CdxButton, SL = window.Codex.CdxIcon, yL = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = Dl(0), n = Dl(null), o = Dl(null), s = _L(), { currentMTProvider: a } = Le(s), { targetLanguageURLParameter: i } = B(), { sourceSection: c, currentProposedTranslation: u } = oe(), d = Tl(
      () => {
        var m, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (m = c.value) == null ? void 0 : m.selectedTranslationUnitId
        );
      }
    ), r = Tl(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), l = Tl(
      () => !!u.value || a.value === se.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    hL(() => b(this, null, function* () {
      yield wL(), g(), p.observe(n.value.$el), p.observe(o.value.$el);
    })), fL(() => {
      p.unobserve(n.value.$el), p.unobserve(o.value.$el);
    });
    const p = new ResizeObserver(() => g());
    return (m, h) => (ys(), ri(Ze(ot), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: xs(() => [
        So(Ze(F), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: xs(() => [
            So(Q5, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => m.$emit("configure-options"))
            }, null, 512),
            So(Ze(x), {
              class: lL(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !l.value && d.value
              }]),
              style: cL(l.value ? r.value : null)
            }, {
              default: xs(() => [
                l.value ? (ys(), iL("section", {
                  key: 0,
                  lang: Ze(i),
                  dir: Ze(I.getDir)(Ze(i)),
                  innerHTML: Ze(u)
                }, null, 8, mL)) : d.value ? (ys(), ri(Ze(st), { key: 1 })) : (ys(), ri(aL, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (f) => m.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (f) => m.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            So(Ze(x), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: xs(() => [
                l.value || d.value ? (ys(), ri(Ze(vL), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !l.value,
                  onClick: h[3] || (h[3] = (f) => m.$emit("edit-translation", Ze(u)))
                }, {
                  default: xs(() => [
                    So(Ze(SL), {
                      class: "me-1",
                      icon: Ze(qc)
                    }, null, 8, ["icon"]),
                    dL(" " + uL(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : rL("", !0),
                So(pf, gL(pL(m.$attrs)), null, 16)
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
}, xL = window.Vue.computed, CL = (e) => xL(() => {
  if (e.isBlockTemplate)
    return e.isTranslated ? e.translatedContent : e.node.innerHTML;
  const t = "sx-sentence-selector__section-sentence", n = e.node.cloneNode(!0);
  return Array.from(n.getElementsByClassName("cx-segment")).forEach((s) => {
    const a = e.getSentenceById(s.dataset.segmentid);
    s.classList.add(t, "py-1", "me-1");
    const i = ["untranslated", "translated", "selected"].map(
      (u) => `${t}--${u}`
    );
    s.classList.remove(...i), a.selected && s.classList.add(`${t}--selected`);
    const c = a.isTranslated ? "translated" : "untranslated";
    s.classList.add(`${t}--${c}`), s.innerHTML = a.content;
  }), n.innerHTML;
});
const bL = window.Vue.unref, kL = window.Vue.normalizeClass, $L = window.Vue.openBlock, VL = window.Vue.createElementBlock, EL = ["innerHTML"], LL = window.Vue.onMounted, AL = window.Vue.ref, DL = window.Vue.computed, TL = {
  __name: "SubSection",
  props: {
    subSection: {
      type: nt,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = AL(null), a = CL(n.subSection);
    LL(() => {
      s.value.addEventListener("click", (d) => {
        let r;
        if (n.subSection.isBlockTemplate)
          r = n.subSection;
        else {
          const l = d.composedPath().find(
            (g) => g instanceof Element && g.classList.contains("cx-segment")
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
    const { selectTranslationUnitById: i } = Ro(), c = (d) => {
      if (d.selected) {
        o("bounce-translation");
        return;
      }
      i(d.id);
    }, u = DL(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (d, r) => ($L(), VL("div", {
      ref_key: "subSectionRoot",
      ref: s,
      class: kL(["sx-sentence-selector__subsection", u.value]),
      innerHTML: bL(a)
    }, null, 10, EL));
  }
};
const kp = window.Vue.unref, $p = window.Vue.createVNode, Vp = window.Vue.normalizeStyle, BL = window.Vue.openBlock, PL = window.Vue.createElementBlock, Ep = window.Vue.computed, mf = {
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
    const t = e, n = Ep(() => ({ "--size": t.size })), o = Ep(
      () => !t.isTemplateAdapted || t.percentage === 0 ? Am : vi
    );
    return (s, a) => (BL(), PL("div", {
      class: "block-template-status-indicator",
      style: Vp(n.value)
    }, [
      $p(kp(J1), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      $p(kp(Re), {
        icon: o.value,
        size: e.size / 2,
        style: Vp({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
}, Cs = window.Vue.openBlock, li = window.Vue.createBlock;
window.Vue.createCommentVNode;
const cn = window.Vue.unref, yo = window.Vue.withCtx, bs = window.Vue.createVNode, Bl = window.Vue.toDisplayString, Pl = window.Vue.createElementVNode, FL = window.Vue.renderList, ML = window.Vue.Fragment, NL = window.Vue.createElementBlock, UL = { class: "pa-4" }, IL = ["textContent"], RL = ["textContent"], zL = window.Vuex.useStore, ci = window.Vue.computed, OL = {
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
    const t = e, { targetLanguageAutonym: n } = Le(zL()), o = ci(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), s = he(), a = ci(() => {
      let u;
      return t.targetTemplateExists ? t.isTemplateAdapted ? o.value < 100 ? u = "cx-sx-block-template-mapping-status-title-partially-template" : u = "cx-sx-block-template-mapping-status-title-fully-template" : u = "cx-sx-block-template-mapping-status-title-unadapted-template" : u = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(u);
    }), i = ci(() => {
      let u;
      return !t.targetTemplateExists || !t.isTemplateAdapted ? u = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? u = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : u = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(u);
    }), c = ci(() => {
      let u = [];
      if (!t.targetTemplateExists)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            n.value
          ),
          icon: w0,
          color: ft.gray500
        });
      else if (!t.isTemplateAdapted)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            t.sourceParamsCount
          ),
          icon: Xs,
          color: ft.gray500
        });
      else if (o.value < 100)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            t.targetParamsCount,
            t.sourceParamsCount
          ),
          icon: vi,
          color: ft.blue600
        });
      else {
        let d;
        t.sourceParamsCount ? d = s.i18n(
          "cx-sx-block-template-mapped-params-text",
          t.targetParamsCount,
          t.sourceParamsCount
        ) : d = s.i18n("cx-sx-block-template-no-source-params-text"), u.push({
          text: d,
          icon: vi,
          color: ft.blue600
        });
      }
      return t.mandatoryMissingParamsCount ? u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          t.mandatoryMissingParamsCount,
          n.value
        ),
        icon: bi,
        color: ft.gray500
      }) : t.targetTemplateExists && t.isTemplateAdapted && t.optionalMissingParamsCount && u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          t.optionalMissingParamsCount,
          n.value
        ),
        icon: Zw,
        color: ft.gray500
      }), u;
    });
    return (u, d) => (Cs(), li(cn(St), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: u.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: d[0] || (d[0] = (r) => u.$emit("update:active", r))
    }, {
      header: yo(() => [
        bs(cn(F), {
          justify: "center",
          class: "mt-4"
        }, {
          default: yo(() => [
            bs(cn(x), { shrink: "" }, {
              default: yo(() => [
                e.targetTemplateExists ? (Cs(), li(mf, {
                  key: 0,
                  percentage: o.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (Cs(), li(cn(Re), {
                  key: 1,
                  icon: cn(e0)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: yo(() => [
        Pl("div", UL, [
          Pl("h3", {
            textContent: Bl(a.value)
          }, null, 8, IL),
          Pl("p", {
            class: "mt-6 text-small",
            textContent: Bl(i.value)
          }, null, 8, RL),
          (Cs(!0), NL(ML, null, FL(c.value, (r, l) => (Cs(), li(cn(F), {
            key: l,
            align: "start",
            class: "mt-4"
          }, {
            default: yo(() => [
              bs(cn(x), { shrink: "" }, {
                default: yo(() => [
                  bs(cn(Re), {
                    class: "me-2",
                    icon: r.icon,
                    "icon-color": r.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              bs(cn(x), {
                textContent: Bl(r.text)
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
const Ee = window.Vue.unref, Fe = window.Vue.createVNode, jt = window.Vue.withCtx, Fl = window.Vue.toDisplayString, Lp = window.Vue.createTextVNode, jL = window.Vue.resolveDirective, Ap = window.Vue.withDirectives, Dp = window.Vue.createElementVNode, HL = window.Vue.normalizeClass, ui = window.Vue.openBlock, Tp = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Bp = window.Vue.createBlock, qL = window.Vue.normalizeProps, GL = window.Vue.guardReactiveProps, XL = { class: "block-template-adaptation-card__container pa-4" }, WL = ["textContent"], KL = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, qe = window.Vue.computed, YL = window.Vue.ref, JL = window.Vuex.useStore, Pp = window.Codex.CdxButton, Fp = window.Codex.CdxIcon, QL = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = JL(), { targetLanguageAutonym: n, currentMTProvider: o } = Le(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = oe(), i = qe(() => {
      var T;
      return ((T = s.value) == null ? void 0 : T.blockTemplateTranslatedContent) || a.value;
    }), c = qe(
      () => {
        var k;
        return (k = s.value) == null ? void 0 : k.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), u = qe(
      () => {
        var k;
        return !((k = t.state.application.mtRequestsPending) != null && k.includes(
          s.value.id
        ));
      }
    ), d = he(), r = qe(
      // Strip HTML comments and return
      () => {
        var k, T;
        return ((T = (k = s.value) == null ? void 0 : k.sourceBlockTemplateName) == null ? void 0 : T.replace(
          /<\!--.*?-->/g,
          ""
        )) || d.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), l = qe(
      () => {
        var k, T;
        return (T = (k = s.value) == null ? void 0 : k.blockTemplateAdaptationInfo) == null ? void 0 : T[o.value];
      }
    ), g = qe(
      () => {
        var k, T;
        return ((k = l.value) == null ? void 0 : k.adapted) || !!((T = l.value) != null && T.partial);
      }
    ), p = qe(() => l.value ? "block-template-adaptation-card__body--" + (g.value ? "success" : "warning") : null), m = qe(() => l.value ? g.value ? d.i18n("sx-block-template-adaptation-card-edit-button-label") : d.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), h = qe(
      () => {
        var k;
        return Object.keys(((k = s.value) == null ? void 0 : k.sourceTemplateParams) || {}).length;
      }
    ), f = qe(() => {
      var T;
      const k = (T = s.value) == null ? void 0 : T.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(k || {});
    }), _ = qe(() => f.value.length), w = qe(() => {
      const k = E.value;
      return h.value + k === 0 ? 100 : _.value / (h.value + k) * 100 || 0;
    }), y = YL(!1), C = () => {
      y.value = !0;
    }, v = (k) => k.filter((T) => !f.value.includes(T)), E = qe(() => {
      var T;
      const k = ((T = l.value) == null ? void 0 : T.mandatoryTargetParams) || [];
      return v(k).length;
    }), L = qe(() => {
      var T;
      const k = ((T = l.value) == null ? void 0 : T.optionalTargetParams) || [];
      return v(k).length;
    });
    return (k, T) => {
      const ie = jL("i18n");
      return ui(), Bp(Ee(ot), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: jt(() => [
          Dp("div", XL, [
            Fe(Ee(F), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: jt(() => [
                Fe(Ee(x), { shrink: "" }, {
                  default: jt(() => [
                    Fe(Ee(Fp), {
                      icon: Ee(BC),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                Fe(Ee(x), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: jt(() => [
                    Lp(Fl(r.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            c.value ? (ui(), Tp("div", {
              key: 0,
              class: HL(["pa-4 mb-4", p.value])
            }, [
              Fe(Ee(F), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: jt(() => [
                  Ap(Fe(Ee(x), { tag: "h5" }, null, 512), [
                    [ie, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  Fe(Ee(x), { shrink: "" }, {
                    default: jt(() => [
                      Fe(mf, {
                        percentage: w.value,
                        size: 20,
                        "is-template-adapted": g.value,
                        "stroke-width": 2,
                        onClick: C
                      }, null, 8, ["percentage", "is-template-adapted"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Dp("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: Fl(c.value)
              }, null, 8, WL),
              Fe(Ee(Pp), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: T[0] || (T[0] = (H) => k.$emit("edit-translation", i.value))
              }, {
                default: jt(() => [
                  Lp(Fl(m.value), 1)
                ]),
                _: 1
              })
            ], 2)) : u.value ? (ui(), Tp("div", KL, [
              Fe(Ee(F), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: jt(() => [
                  Ap(Fe(Ee(x), { tag: "h5" }, null, 512), [
                    [ie, [
                      Ee(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  Fe(Ee(x), { shrink: "" }, {
                    default: jt(() => [
                      Fe(Ee(Pp), {
                        weight: "quiet",
                        "aria-label": k.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: jt(() => [
                          Fe(Ee(Fp), {
                            icon: Ee(AC),
                            onClick: C
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
            ])) : (ui(), Bp(Ee(st), { key: 2 }))
          ]),
          Fe(pf, qL(GL(k.$attrs)), null, 16),
          Fe(OL, {
            active: y.value,
            "onUpdate:active": T[1] || (T[1] = (H) => y.value = H),
            "source-params-count": h.value,
            "target-params-count": _.value,
            "mandatory-missing-params-count": E.value,
            "optional-missing-params-count": L.value,
            "is-template-adapted": g.value,
            "target-template-exists": !!c.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const ZL = window.Vue.unref, eA = window.Vue.createVNode, tA = window.Vue.openBlock, nA = window.Vue.createElementBlock, oA = { class: "translated-segment-card-header" }, sA = window.Vue.computed, aA = {
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
    const n = t, { isSectionTitleSelected: o } = oe(), s = he(), a = sA(() => [
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
    return (c, u) => (tA(), nA("div", oA, [
      eA(ZL(Gs), {
        items: a.value,
        active: e.selection,
        onSelect: i
      }, null, 8, ["items", "active"])
    ]));
  }
};
const Dn = window.Vue.unref, di = window.Vue.createVNode, Ml = window.Vue.withCtx, iA = window.Vue.openBlock, rA = window.Vue.createBlock, lA = window.Vue.computed, Mp = window.Codex.CdxButton, Np = window.Codex.CdxIcon, cA = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "skip-translation"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = oe(), o = lA(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (iA(), rA(Dn(F), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: Ml(() => [
        di(Dn(Mp), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: Dn(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (i) => s.$emit("select-previous-segment"))
        }, {
          default: Ml(() => [
            di(Dn(Np), { icon: Dn(Wc) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        di(Dn(Mp), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (i) => s.$emit("skip-translation"))
        }, {
          default: Ml(() => [
            di(Dn(Np), { icon: Dn(ta) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
};
const uA = window.Vue.useCssVars, Me = window.Vue.createVNode, Up = window.Vue.resolveDirective, dA = window.Vue.createElementVNode, Nl = window.Vue.withDirectives, we = window.Vue.unref, gA = window.Vue.normalizeStyle, gi = window.Vue.openBlock, Ip = window.Vue.createElementBlock, pA = window.Vue.createCommentVNode, mA = window.Vue.normalizeClass, gt = window.Vue.withCtx, hA = window.Vue.toDisplayString, fA = window.Vue.createTextVNode, Rp = window.Vue.createBlock, wA = window.Vue.normalizeProps, _A = window.Vue.guardReactiveProps, un = window.Vue.computed, vA = window.Vue.ref, SA = window.Vue.inject, yA = window.Vuex.useStore, xA = window.Codex.CdxButton, Ul = window.Codex.CdxIcon, CA = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    uA((w) => ({
      "4929555c": _.value
    }));
    const t = vA("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = oe(), { targetLanguage: a } = Le(yA()), i = un(() => t.value === "sentence"), c = un(
      () => n.value.subSections.find(
        (w) => w.sentences.some(
          (y) => {
            var C;
            return y.id === ((C = o.value) == null ? void 0 : C.id);
          }
        )
      )
    ), u = un(() => {
      var w;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : i.value ? (w = o.value) == null ? void 0 : w.mtProposedTranslationUsed : c.value.proposedContentForMTValidation;
    }), d = SA("colors"), r = d.gray200, l = d.red600, g = un(() => s.value ? n.value.translatedTitle : i.value ? o.value.translatedContent : c.value.translatedContent), p = un(
      () => Xt.calculateScore(
        g.value,
        u.value,
        a.value
      )
    ), m = un(
      () => Xt.getScoreStatus(p.value)
    ), h = un(
      () => `translated-segment-card__modification-stats__percentage--${m.value}`
    ), f = un(() => ({
      failure: p.value === 0 ? null : d.yellow700,
      warning: d.yellow700,
      success: d.green600
    })), _ = un(
      () => f.value[m.value]
    );
    return (w, y) => {
      const C = Up("i18n"), v = Up("i18n-html");
      return gi(), Rp(we(ot), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: gt(() => [
          Me(we(F), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: gt(() => [
              Me(aA, {
                selection: t.value,
                "onUpdate:selection": y[0] || (y[0] = (E) => t.value = E)
              }, null, 8, ["selection"]),
              Me(we(x), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: gt(() => [
                  Me(we(F), { class: "ma-0" }, {
                    default: gt(() => [
                      Me(we(x), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: gt(() => [
                          Nl(dA("h5", null, null, 512), [
                            [C, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          p.value === 0 ? Nl((gi(), Ip("p", {
                            key: 0,
                            style: gA({ color: we(l) })
                          }, null, 4)), [
                            [C, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : Nl((gi(), Ip("p", {
                            key: 1,
                            class: mA(h.value)
                          }, null, 2)), [
                            [v, [
                              p.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      Me(we(x), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: gt(() => [
                          Me(we(F), { class: "ma-0 ms-2" }, {
                            default: gt(() => [
                              Me(we(x), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: gt(() => [
                                  Me(we(Ul), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: we(MC)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              Me(we(x), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: gt(() => [
                                  Me(we(Tm), {
                                    value: p.value,
                                    height: "4px",
                                    width: "64px",
                                    color: _.value,
                                    background: we(r)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              Me(we(x), { shrink: "" }, {
                                default: gt(() => [
                                  Me(we(Ul), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: we(PC)
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
                  i.value ? (gi(), Rp(we(xA), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: y[1] || (y[1] = (E) => w.$emit("edit-translation", g.value))
                  }, {
                    default: gt(() => [
                      Me(we(Ul), {
                        class: "me-1",
                        icon: we(qc)
                      }, null, 8, ["icon"]),
                      fA(" " + hA(w.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : pA("", !0)
                ]),
                _: 1
              }),
              Me(we(x), { class: "translated-segment-card__actions" }, {
                default: gt(() => [
                  Me(cA, wA(_A(w.$attrs)), null, 16)
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
}, bA = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = oe(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = Ro(), { currentTranslation: s } = Ft();
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
}, hf = window.Vuex.useStore, kA = () => {
  const e = hf(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B();
  return () => b(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const o = yield Ai.fetchSupportedMTProviders(
      t.value,
      n.value
    );
    e.commit("mediawiki/addMtProviderGroup", o);
  });
}, $A = () => {
  const e = hf(), { currentMTProvider: t } = Le(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = B(), s = kA();
  return () => b(void 0, null, function* () {
    yield s();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, o.value);
    if (!t.value || !a.includes(t.value)) {
      const i = se.getStorageKey(
        n.value,
        o.value
      ), c = mw.storage.get(i) || a[0];
      e.commit("application/setCurrentMTProvider", c);
    }
  });
}, VA = window.Vue.computed, EA = (e) => {
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
}, LA = () => {
  const { selectedContentTranslationUnit: e } = oe(), t = VA(
    () => e.value instanceof nt
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && EA(o);
  };
}, AA = (e, t) => {
  const { content: n, origin: o, baseSectionId: s, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const i = t.filter(
    (c) => !se.isUserMTProvider(c)
  );
  if (o !== "source" && o !== "user" && !i.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, DA = window.Vue.computed, ff = () => {
  const { currentTranslation: e } = Ft(), { currentSourcePage: t } = rt();
  return DA(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, TA = window.Vuex.useStore, ou = () => {
  const e = TA(), { sourceSection: t, targetPageTitleForPublishing: n } = oe(), {
    pageURLParameter: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), i = ff();
  return () => {
    const c = n.value, u = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), d = `${i.value}_${t.value.id}`, r = t.value.getParallelCorporaUnits(d);
    r.forEach(
      (p) => AA(p, u)
    );
    const l = t.value.getTranslationProgress(a), g = e.getters["application/isSandboxTarget"];
    return vt.saveTranslation({
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
      sectionId: d,
      isSandbox: g,
      progress: l
    });
  };
}, BA = window.Vue.effectScope, PA = window.Vue.onScopeDispose, FA = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = BA(!0), n = o.run(() => e(...a))), PA(s), n);
}, MA = window.Vuex.useStore;
let Il;
const NA = () => {
  const e = MA(), t = ou();
  let n = 1e3, o = 0;
  return Il = Kc(() => t().then((a) => {
    a instanceof Ao ? (n *= o + 1, o++, setTimeout(Il, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof Bo)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), Il;
}, wf = FA(NA), UA = window.Vuex.useStore, IA = () => {
  const e = UA(), t = wf(), { currentMTProvider: n } = Le(e), { sourceSection: o, currentProposedTranslation: s } = oe(), { selectNextTranslationUnit: a } = Ro();
  return () => b(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, RA = window.Vuex.useStore, zA = () => {
  const e = RA(), t = wf();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, OA = window.Vuex.useStore, jA = window.Vue.computed, _f = () => {
  const e = OA(), t = De(), { currentTranslation: n } = Ft(), { currentMTProvider: o, previousRoute: s } = Le(e), { currentTargetPage: a } = rt(), {
    sourceLanguageURLParameter: i,
    targetLanguageURLParameter: c,
    pageURLParameter: u,
    sectionURLParameter: d
  } = B(), r = it(), l = jA(() => {
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
    return o.value && (f.translation_provider = se.getProviderForInstrumentation(o.value)), f;
  });
  return {
    logEditorOpenEvent: () => {
      var C;
      const f = t.currentRoute.value.meta.workflowStep, w = t.getRoutes().find(
        (v) => v.name === s.value
      ), y = ((C = w == null ? void 0 : w.meta) == null ? void 0 : C.workflowStep) || 0;
      return f > y ? r(pe({
        event_type: "editor_open"
      }, l.value)) : Promise.resolve();
    },
    logEditorCloseEvent: () => r(pe({
      event_type: "editor_close"
    }, l.value)),
    logEditorCloseWarnEvent: () => r(pe({
      event_type: "editor_close_warn"
    }, l.value)),
    logEditorSegmentAddEvent: () => r(pe({
      event_type: "editor_segment_add"
    }, l.value))
  };
}, HA = (e, t, n, o) => b(void 0, null, function* () {
  var c, u, d;
  const s = ((c = t.user) == null ? void 0 : c.content) || ((u = t.mt) == null ? void 0 : u.content), a = (d = t == null ? void 0 : t.mt) == null ? void 0 : d.engine, i = yield gf(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = i, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = i;
}), qA = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, i;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const c = (i = t.mt) == null ? void 0 : i.engine;
      o.addProposedTranslation(c, n.mt.innerHTML), o.mtProviderUsed = c;
    }
  });
}, GA = (e, t, n, o) => b(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return HA(e, t, n, o);
  qA(e, t);
}), XA = (e, t, n, o) => {
  const s = [];
  for (const a of e.sections || [])
    if (o.filter(
      (c) => c.pageSectionId === parseInt(a.id)
    ).length)
      for (const c of a.subSections) {
        const u = o.find(
          (r) => r.subSectionId === c.id
        );
        if (!u)
          continue;
        const d = GA(
          c,
          u,
          t || e.title,
          n
        );
        s.push(d);
      }
  return Promise.all(s);
}, WA = { restoreCorporaDraft: XA }, KA = () => {
  const { currentSourcePage: e } = rt(), { sourceSection: t } = oe();
  return (n) => b(void 0, null, function* () {
    n.restored || (yield vt.fetchTranslationUnits(n.translationId).then(
      (s) => WA.restoreCorporaDraft(
        e.value,
        n.targetTitle,
        n.targetLanguage,
        s
      )
    ).then(() => n.restored = !0));
    let o;
    n.isLeadSectionTranslation ? (t.value.originalTitle = n.sourceTitle, o = n.targetTitle) : o = n.targetSectionTitle, t.value.translatedTitle = o;
  });
};
const ue = window.Vue.unref, pt = window.Vue.createVNode, dn = window.Vue.withCtx, YA = window.Vue.resolveDirective, zp = window.Vue.createElementVNode, JA = window.Vue.withDirectives, QA = window.Vue.toDisplayString, ZA = window.Vue.createTextVNode, eD = window.Vue.renderList, tD = window.Vue.Fragment, Tn = window.Vue.openBlock, Op = window.Vue.createElementBlock, xo = window.Vue.createBlock;
window.Vue.createCommentVNode;
const nD = window.Vue.normalizeClass, oD = window.Vue.normalizeStyle, sD = { class: "sx-sentence-selector__header-title mb-0" }, aD = { class: "sx-sentence-selector__section-contents px-4" }, Co = window.Vue.computed, iD = window.Vue.nextTick, rD = window.Vue.onMounted, ks = window.Vue.ref, jp = window.Vue.watch, lD = window.Vuex.useStore, Hp = window.Codex.CdxButton, cD = window.Codex.CdxIcon, uD = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = ks(!1), n = ks(!1), o = ks("100%"), s = lD(), { currentMTProvider: a } = Le(s), {
      sourceLanguageURLParameter: i,
      targetLanguageURLParameter: c,
      pageURLParameter: u,
      sectionURLParameter: d
    } = B(), { sourceSection: r, selectedContentTranslationUnit: l } = oe(), g = ks({
      pageContent: !1,
      pageMetadata: !1,
      draftRestored: !1,
      mtProviders: !1
    }), p = Co(
      () => Object.values(g.value).every(Boolean)
    ), m = Co(
      () => {
        var ee;
        return (ee = r.value) == null ? void 0 : ee.isSelectedTranslationUnitTranslated;
      }
    ), h = Co(() => {
      var ee;
      return (ee = r.value) == null ? void 0 : ee.subSections;
    }), f = Co(
      () => {
        var ee;
        return (ee = r.value) == null ? void 0 : ee.selectedTranslationUnitOriginalContent;
      }
    ), _ = Co(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: w,
      logEditorCloseEvent: y,
      logEditorCloseWarnEvent: C,
      logEditorSegmentAddEvent: v
    } = _f(), E = bA();
    $A()().then(() => {
      w(), g.value.mtProviders = !0;
    });
    const k = LA(), { fetchTranslationsByStatus: T, translationsFetched: ie } = Uo(), H = KA(), { currentTranslation: X } = Ft(), { selectPageSectionByTitle: Z, selectPageSectionByIndex: be } = Ii(), xe = eu(), Xe = Fo();
    rD(() => b(this, null, function* () {
      if (!ie.value.draft) {
        const ee = [
          // required to get current draft translation (if exists)
          T("draft"),
          // required to get target page title for template adaptation (useTranslationUnitTranslate)
          xe(i.value, u.value),
          // user has just been redirected here from another wiki, and page metadata have not yet been fetched
          Xe(i.value, [u.value])
        ];
        yield Promise.all(ee);
      }
      g.value.pageMetadata = !0, d.value ? yield Z(d.value) : yield be(0), g.value.pageContent = !0, X.value && (yield H(X.value)), g.value.draftRestored = !0, jp(
        p,
        () => b(this, null, function* () {
          p.value && (yield iD(), E(), k());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    })), jp(l, k);
    const {
      selectNextTranslationUnit: fe,
      selectPreviousTranslationUnit: Ce
    } = Ro(), We = IA(), P = () => {
      v(), We();
    }, z = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, j = De(), N = () => {
      const { autoSavePending: ee } = s.state.application;
      if (ee) {
        te.value = !0, C();
        return;
      }
      K();
    }, q = zA(), { clearTranslationURLParameters: W } = B(), K = () => b(this, null, function* () {
      T("draft"), X.value && (r.value.reset(), X.value.restored = !1), y(), W(), q(), yield j.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: S,
      translateSelectedTranslationUnitForAllProviders: D
    } = nu(), A = () => {
      U.value || (t.value = !0, D());
    }, { getCurrentTitleByLanguage: M } = vn(), G = (ee, ne) => {
      j.push({
        name: "sx-editor",
        state: {
          content: ee,
          originalContent: f.value,
          title: M(
            c.value,
            i.value
          ),
          isInitialEdit: ne || null
        }
      });
    }, re = () => j.push({ name: "sx-publisher" }), O = () => b(this, null, function* () {
      l.value ? yield S(
        l.value.id,
        a.value
      ) : yield S(0, a.value);
    }), U = Co(
      () => l.value instanceof nt
    ), te = ks(!1);
    return (ee, ne) => {
      const oa = YA("i18n");
      return Tn(), Op("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: oD(_.value)
      }, [
        pt(ue(F), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: dn(() => [
            pt(ue(x), { shrink: "" }, {
              default: dn(() => [
                pt(ue(Hp), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": ee.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: N
                }, {
                  default: dn(() => [
                    pt(ue(cD), { icon: ue(Mh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            pt(ue(x), {
              grow: "",
              class: "px-1"
            }, {
              default: dn(() => [
                JA(zp("h4", sD, null, 512), [
                  [oa, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            pt(ue(x), {
              shrink: "",
              class: "px-3"
            }, {
              default: dn(() => [
                pt(ue(Hp), {
                  disabled: !(ue(r) && ue(r).isTranslated),
                  onClick: re
                }, {
                  default: dn(() => [
                    ZA(QA(ee.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        p.value ? (Tn(), xo(ue(F), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: dn(() => [
            pt(ue(x), {
              dir: ue(I.getDir)(ue(i)),
              lang: ue(i),
              class: "sx-sentence-selector__section"
            }, {
              default: dn(() => [
                pt(O5),
                zp("div", aD, [
                  (Tn(!0), Op(tD, null, eD(h.value, (Oe) => (Tn(), xo(TL, {
                    id: Oe.id,
                    key: `sub-section-${Oe.id}`,
                    "sub-section": Oe,
                    onBounceTranslation: z
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !U.value && m.value ? (Tn(), xo(CA, {
              key: 0,
              onEditTranslation: ne[0] || (ne[0] = (Oe) => G(Oe, !1)),
              onSkipTranslation: ue(fe),
              onSelectPreviousSegment: ue(Ce)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : U.value ? (Tn(), xo(QL, {
              key: 2,
              onEditTranslation: G,
              onApplyTranslation: P,
              onSkipTranslation: ue(fe),
              onSelectPreviousSegment: ue(Ce)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : (Tn(), xo(yL, {
              key: 1,
              class: nD({ "mb-0": !n.value }),
              onConfigureOptions: A,
              onEditTranslation: ne[1] || (ne[1] = (Oe) => G(Oe, !0)),
              onApplyTranslation: P,
              onSkipTranslation: ue(fe),
              onSelectPreviousSegment: ue(Ce),
              onRetryTranslation: O
            }, null, 8, ["class", "onSkipTranslation", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Tn(), xo(ue(F), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: dn(() => [
            pt(ue(st), { class: "mt-0" })
          ]),
          _: 1
        })),
        pt(A5, {
          active: t.value,
          "onUpdate:active": ne[2] || (ne[2] = (Oe) => t.value = Oe)
        }, null, 8, ["active"]),
        pt(i5, {
          modelValue: te.value,
          "onUpdate:modelValue": ne[3] || (ne[3] = (Oe) => te.value = Oe),
          onDiscardTranslation: K
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const dD = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: uD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, gD = window.Vue.resolveComponent, pD = window.Vue.createVNode, mD = window.Vue.normalizeClass, hD = window.Vue.openBlock, fD = window.Vue.createElementBlock;
function wD(e, t, n, o, s, a) {
  const i = gD("sx-sentence-selector");
  return hD(), fD("main", {
    class: mD(["sx-sentence-selector-view", a.classes])
  }, [
    pD(i)
  ], 2);
}
const _D = /* @__PURE__ */ ae(dD, [["render", wD]]), vD = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, SD = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const yD = window.Vue.resolveDirective, pi = window.Vue.withDirectives, At = window.Vue.openBlock, gn = window.Vue.createElementBlock, mi = window.Vue.createCommentVNode, hi = window.Vue.Transition, Wn = window.Vue.withCtx, bo = window.Vue.createVNode, $s = window.Vue.createElementVNode, Bn = window.Vue.unref, xD = window.Vue.renderList, CD = window.Vue.Fragment, bD = window.Vue.normalizeClass, qp = window.Vue.createBlock, kD = window.Vue.toDisplayString, $D = window.Vue.createTextVNode, VD = { class: "sx-quick-tutorial" }, ED = { class: "sx-quick-tutorial__main-point py-9 px-6" }, LD = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, AD = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, DD = { class: "sx-quick-tutorial__illustration" }, TD = ["innerHTML"], BD = ["innerHTML"], PD = { class: "sx-quick-tutorial__step-indicator py-3" }, FD = ["onClick"], MD = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, ND = {
  key: "secondary-point-1",
  class: "ma-0"
}, UD = {
  key: "secondary-point-2",
  class: "ma-0"
}, ID = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, Gp = window.Vue.ref, Xp = window.Codex.CdxButton, RD = window.Codex.CdxIcon, zD = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = Gp(2), n = Gp(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (i) => i === n.value;
    De();
    const a = Io();
    return (i, c) => {
      const u = yD("i18n");
      return At(), gn("section", VD, [
        bo(Bn(F), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: Wn(() => [
            $s("section", ED, [
              bo(hi, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Wn(() => [
                  s(1) ? pi((At(), gn("h2", LD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? pi((At(), gn("h2", AD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : mi("", !0)
                ]),
                _: 1
              })
            ]),
            $s("section", DD, [
              bo(hi, { name: "mw-ui-animation-slide-start" }, {
                default: Wn(() => [
                  s(1) ? (At(), gn("div", {
                    key: "illustration-1",
                    innerHTML: Bn(SD)
                  }, null, 8, TD)) : s(2) ? (At(), gn("div", {
                    key: "illustration-2",
                    innerHTML: Bn(vD)
                  }, null, 8, BD)) : mi("", !0)
                ]),
                _: 1
              })
            ]),
            $s("div", PD, [
              (At(!0), gn(CD, null, xD(t.value, (d) => (At(), gn("span", {
                key: `dot-${d}`,
                class: bD(["dot mx-1", { "dot-active": s(d) }]),
                role: "button",
                onClick: (r) => n.value = d
              }, null, 10, FD))), 128))
            ]),
            $s("section", MD, [
              bo(hi, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Wn(() => [
                  s(1) ? pi((At(), gn("h3", ND, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? pi((At(), gn("h3", UD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : mi("", !0)
                ]),
                _: 1
              })
            ]),
            $s("div", ID, [
              bo(hi, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Wn(() => [
                  s(1) ? (At(), qp(Bn(Xp), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": i.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: Wn(() => [
                      bo(Bn(RD), { icon: Bn(ta) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (At(), qp(Bn(Xp), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: Bn(a)
                  }, {
                    default: Wn(() => [
                      $D(kD(i.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : mi("", !0)
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
const OD = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: zD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, jD = window.Vue.resolveComponent, HD = window.Vue.createVNode, qD = window.Vue.normalizeClass, GD = window.Vue.openBlock, XD = window.Vue.createElementBlock;
function WD(e, t, n, o, s, a) {
  const i = jD("sx-quick-tutorial");
  return GD(), XD("main", {
    class: qD(["sx-quick-tutorial-view", a.classes])
  }, [
    HD(i)
  ], 2);
}
const KD = /* @__PURE__ */ ae(OD, [["render", WD]]);
const YD = window.Vue.resolveDirective, Wp = window.Vue.createElementVNode, JD = window.Vue.withDirectives, QD = window.Vue.unref, ZD = window.Vue.withCtx, eT = window.Vue.createVNode, tT = window.Vue.openBlock, nT = window.Vue.createElementBlock, oT = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, sT = { class: "sx-editor__original-content-panel__header mb-2" }, aT = ["lang", "dir", "innerHTML"], Kp = window.Vue.ref, iT = window.Vue.onMounted, rT = {
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
      const u = i.getElementsByTagName("a");
      for (const d of u)
        d.href = J.getPageUrl(c, d.title), d.target = "_blank";
    }, o = Kp(null), s = Kp(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(o.value, null).getPropertyValue("line-height")
    );
    return iT(() => {
      s.value = 2 * a(), n(o.value, t.language);
    }), (i, c) => {
      const u = YD("i18n");
      return tT(), nT("section", oT, [
        JD(Wp("h5", sT, null, 512), [
          [u, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        eT(QD(j1), {
          "min-height": s.value,
          scroll: ""
        }, {
          default: ZD(() => [
            Wp("div", {
              ref_key: "originalContentRef",
              ref: o,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, aT)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, lT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const cT = window.Vue.unref, Vs = window.Vue.createElementVNode, Yp = window.Vue.resolveDirective, Rl = window.Vue.withDirectives, uT = window.Vue.normalizeClass, dT = window.Vue.openBlock, gT = window.Vue.createElementBlock, pT = window.Vue.createCommentVNode, mT = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, hT = { class: "sx-editor__feedback-overlay-content px-4" }, fT = ["innerHTML"], wT = { class: "sx-editor__feedback-overlay-content__title" }, _T = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, zl = window.Vue.computed, vT = {
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
    const t = e, { targetLanguageURLParameter: n } = B(), o = zl(
      () => Xt.calculateScore(
        t.editedTranslation,
        t.proposedTranslation,
        n.value
      )
    ), s = zl(() => {
      const i = Xt.getScoreStatus(o.value);
      return i === "failure" ? o.value === 0 ? "failure" : "warning" : i;
    }), a = zl(
      () => `sx-editor__feedback-overlay-content__stats--${s.value}`
    );
    return (i, c) => {
      const u = Yp("i18n"), d = Yp("i18n-html");
      return e.showFeedback ? (dT(), gT("div", mT, [
        Vs("div", hT, [
          Vs("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: cT(lT)
          }, null, 8, fT),
          Rl(Vs("h2", wT, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          Rl(Vs("p", _T, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          Rl(Vs("p", {
            class: uT(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [d, [o.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : pT("", !0);
    };
  }
}, ST = window.Vuex.useStore, yT = () => {
  const e = ST(), t = ou(), { selectNextTranslationUnit: n } = Ro(), { sourceSection: o, selectedContentTranslationUnit: s } = oe(), { getCurrentTitleByLanguage: a } = vn();
  return (i) => b(void 0, null, function* () {
    const c = document.createElement("div");
    c.innerHTML = i, c.querySelectorAll(".sx-edit-dummy-node").forEach((l) => l.remove()), i = c.innerHTML;
    const { sourceLanguage: u, targetLanguage: d, currentMTProvider: r } = e.state.application;
    s.value instanceof nt && (i = (yield gf(
      i,
      a(d, u),
      d
    )) || i), o.value.setTranslationForSelectedTranslationUnit(
      i,
      r
    ), t(), n();
  });
};
const et = window.Vue.unref, Ol = window.Vue.openBlock, jl = window.Vue.createBlock, Jp = window.Vue.createCommentVNode, Qp = window.Vue.createVNode, xT = window.Vue.createElementVNode, CT = window.Vue.withCtx, bT = { class: "sx-editor__editing-surface-container grow" }, Hl = window.Vue.ref, kT = window.Vue.computed, $T = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Hl(!1), o = De(), s = () => n.value = !0, a = () => o.replace({ name: t.fromRoute }), { isFinalEdit: i, isInitialEdit: c, content: u, originalContent: d, title: r } = history.state, l = Hl(null), g = Hl(!1), { logEditorSegmentAddEvent: p } = _f(), {
      sourceLanguageURLParameter: m,
      targetLanguageURLParameter: h
    } = B(), { sourceSection: f } = oe(), _ = kT(
      () => Xt.calculateScore(
        l.value,
        u,
        h.value
      )
    ), w = yT(), y = (C) => b(this, null, function* () {
      l.value = C, g.value = !0;
      const v = new Promise((L) => setTimeout(L, 2e3));
      let E = Promise.resolve();
      i ? f.value.editedTranslation = C : (_.value === 0 && c && p(), E = w(C)), yield Promise.all([v, E]), g.value = !1, a();
    });
    return (C, v) => (Ol(), jl(et(F), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: CT(() => [
        et(d) ? (Ol(), jl(rT, {
          key: 0,
          language: et(m),
          dir: et(I.getDir)(et(m)),
          "original-content": et(d)
        }, null, 8, ["language", "dir", "original-content"])) : Jp("", !0),
        n.value ? Jp("", !0) : (Ol(), jl(et(st), { key: 1 })),
        xT("div", bT, [
          Qp(vT, {
            "edited-translation": l.value,
            "show-feedback": g.value,
            "proposed-translation": et(u)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          Qp(o4, {
            content: et(u),
            language: et(h),
            dir: et(I.getDir)(et(h)),
            title: et(r),
            onReady: s,
            onClose: a,
            onEditCompleted: y
          }, null, 8, ["content", "language", "dir", "title"])
        ])
      ]),
      _: 1
    }));
  }
};
const VT = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: $T
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
}, ET = window.Vue.resolveComponent, LT = window.Vue.createVNode, AT = window.Vue.normalizeClass, DT = window.Vue.openBlock, TT = window.Vue.createElementBlock;
function BT(e, t, n, o, s, a) {
  const i = ET("sx-editor");
  return DT(), TT("main", {
    class: AT(["sx-editor-view", a.classes])
  }, [
    LT(i, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const PT = /* @__PURE__ */ ae(VT, [["render", BT]]);
const Ht = window.Vue.unref, Kn = window.Vue.createVNode, Es = window.Vue.withCtx, FT = window.Vue.resolveDirective, MT = window.Vue.withDirectives, NT = window.Vue.openBlock, UT = window.Vue.createBlock, Zp = window.Codex.CdxButton, em = window.Codex.CdxIcon, IT = {
  __name: "SXPublisherHeader",
  props: {
    isPublishingDisabled: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["publish-translation"],
  setup(e) {
    const t = De(), n = () => t.push({ name: "sx-sentence-selector" });
    return (o, s) => {
      const a = FT("i18n");
      return NT(), UT(Ht(F), { class: "ma-0 sx-publisher__header" }, {
        default: Es(() => [
          Kn(Ht(x), {
            shrink: "",
            class: "me-2"
          }, {
            default: Es(() => [
              Kn(Ht(Zp), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: Es(() => [
                  Kn(Ht(em), { icon: Ht(No) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          MT(Kn(Ht(x), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          Kn(Ht(x), { shrink: "" }, {
            default: Es(() => [
              Kn(Ht(Zp), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (i) => o.$emit("publish-translation"))
              }, {
                default: Es(() => [
                  Kn(Ht(em), { icon: Ht($C) }, null, 8, ["icon"])
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
}, RT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, zT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, tm = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const ql = window.Vue.createElementVNode, nm = window.Vue.toDisplayString, Gl = window.Vue.unref, Xl = window.Vue.withCtx, om = window.Vue.createVNode, OT = window.Vue.openBlock, jT = window.Vue.createBlock, HT = window.Vue.createCommentVNode, qT = ["innerHTML"], GT = ["textContent"], XT = ["textContent"], Wl = window.Vue.computed, WT = {
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
    const t = he(), n = e, o = {
      pending: {
        svg: RT,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: zT,
        title: t.i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: tm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: tm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, s = Wl(() => o[n.status].svg), a = Wl(() => o[n.status].title), i = Wl(() => o[n.status].subtitle);
    return (c, u) => e.active ? (OT(), jT(Gl(St), {
      key: 0,
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: Xl(() => [
        om(Gl(F), { class: "ma-4" }, {
          default: Xl(() => [
            om(Gl(x), null, {
              default: Xl(() => [
                ql("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: s.value
                }, null, 8, qT),
                ql("h2", {
                  textContent: nm(a.value)
                }, null, 8, GT),
                ql("p", {
                  class: "ma-0",
                  textContent: nm(i.value)
                }, null, 8, XT)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : HT("", !0);
  }
};
const tt = window.Vue.unref, Dt = window.Vue.createVNode, pn = window.Vue.withCtx, KT = window.Vue.resolveDirective, YT = window.Vue.withDirectives, sm = window.Vue.toDisplayString, JT = window.Vue.createTextVNode, Kl = window.Vue.openBlock, am = window.Vue.createElementBlock, QT = window.Vue.createCommentVNode, vf = window.Vue.createElementVNode, ZT = window.Vue.createBlock, e6 = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, t6 = ["src"], n6 = ["textContent"], o6 = /* @__PURE__ */ vf("p", { class: "mt-0" }, null, -1), s6 = window.Vue.computed, a6 = window.Vue.inject, i6 = window.Vue.ref, im = window.Codex.CdxButton, r6 = window.Codex.CdxIcon, l6 = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: lh,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = i6(""), s = () => n("close"), a = () => n("publish", o.value), i = a6("breakpoints"), c = s6(() => i.value.mobile);
    return (u, d) => {
      const r = KT("i18n");
      return e.active && e.captchaDetails ? (Kl(), ZT(tt(St), {
        key: 0,
        fullscreen: c.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: pn(() => [
          Dt(tt(F), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: pn(() => [
              Dt(tt(x), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: pn(() => [
                  Dt(tt(im), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": u.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: s
                  }, {
                    default: pn(() => [
                      Dt(tt(r6), { icon: tt(No) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              YT(Dt(tt(x), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [r, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              Dt(tt(x), {
                shrink: "",
                class: "justify-center"
              }, {
                default: pn(() => [
                  Dt(tt(im), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: pn(() => [
                      JT(sm(u.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Dt(tt(Ci))
        ]),
        default: pn(() => [
          vf("div", e6, [
            e.captchaDetails.type === "image" ? (Kl(), am("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, t6)) : (Kl(), am("p", {
              key: 1,
              textContent: sm(e.captchaDetails.question)
            }, null, 8, n6)),
            o6,
            Dt(tt(F), { class: "ma-0" }, {
              default: pn(() => [
                Dt(tt(x), null, {
                  default: pn(() => [
                    Dt(tt(rc), {
                      value: o.value,
                      "onUpdate:value": d[0] || (d[0] = (l) => o.value = l),
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
      }, 8, ["fullscreen"])) : QT("", !0);
    };
  }
};
const Yn = window.Vue.unref, Ls = window.Vue.createVNode, fi = window.Vue.withCtx, Jn = window.Vue.createElementVNode, c6 = window.Vue.resolveDirective, u6 = window.Vue.withDirectives, d6 = window.Vue.renderList, rm = window.Vue.Fragment, Yl = window.Vue.openBlock, lm = window.Vue.createElementBlock, g6 = window.Vue.toDisplayString, p6 = window.Vue.normalizeClass, m6 = window.Vue.createBlock, h6 = { class: "mw-ui-dialog__header" }, f6 = { class: "row ma-0 px-4 py-3" }, w6 = { class: "col shrink justify-center" }, _6 = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, v6 = { class: "mb-0" }, S6 = { class: "pa-4" }, y6 = ["textContent"], x6 = window.Vuex.useStore, As = window.Vue.computed, C6 = window.Codex.CdxButton, b6 = window.Codex.CdxIcon, k6 = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = x6(), s = As(() => o.state.application.publishTarget), a = As(() => o.state.translator.isAnon), i = he(), { sourceSection: c } = oe(), u = As(
      () => c.value.isLeadSection ? i.i18n("cx-sx-publisher-lead-section-option-label") : i.i18n("cx-sx-publisher-new-section-option-label")
    ), d = As(
      () => c.value.isLeadSection ? i.i18n("cx-sx-publisher-lead-section-option-details") : i.i18n("cx-sx-publisher-new-section-option-details")
    ), r = As(() => [
      {
        label: u.value,
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
    ]), l = (m) => m === r.value.length - 1 ? "mb-1" : "mb-4", g = () => n("update:active", !1), p = (m) => {
      const h = m.target.value;
      o.commit("application/setPublishTarget", h), g();
    };
    return (m, h) => {
      const f = c6("i18n");
      return Yl(), m6(Yn(St), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: m.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: h[0] || (h[0] = (_) => m.$emit("update:active", _)),
        onClose: g
      }, {
        header: fi(() => [
          Jn("div", h6, [
            Jn("div", f6, [
              Jn("div", w6, [
                Ls(Yn(C6), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": m.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: g
                }, {
                  default: fi(() => [
                    Ls(Yn(b6), { icon: Yn(Mh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              Jn("div", _6, [
                u6(Jn("h4", v6, null, 512), [
                  [f, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            Ls(Yn(Ci))
          ])
        ]),
        default: fi(() => [
          Jn("div", S6, [
            Ls(Yn(v1), {
              value: s.value,
              name: "publish-options",
              onInput: p
            }, {
              default: fi(() => [
                (Yl(!0), lm(rm, null, d6(r.value, (_, w) => (Yl(), lm(rm, {
                  key: _.label
                }, [
                  Ls(Yn(lc), {
                    class: "pa-0 my-1",
                    label: _.label,
                    "input-value": _.value,
                    disabled: _.disabled
                  }, null, 8, ["label", "input-value", "disabled"]),
                  Jn("p", {
                    class: p6(["complementary ms-7 mt-0", l(w)]),
                    textContent: g6(_.details)
                  }, null, 10, y6)
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
const Tt = window.Vue.unref, Qn = window.Vue.createVNode, cm = window.Vue.resolveDirective, um = window.Vue.withDirectives, wi = window.Vue.openBlock, dm = window.Vue.createElementBlock, $6 = window.Vue.createCommentVNode, gm = window.Vue.toDisplayString, Jl = window.Vue.createElementVNode, ko = window.Vue.withCtx, pm = window.Vue.createBlock, V6 = window.Vue.Fragment, E6 = window.Vue.normalizeClass, L6 = { class: "sx-publisher__review-info__content" }, A6 = { key: 0 }, D6 = ["textContent"], T6 = ["textContent"], Pn = window.Vue.computed, mm = window.Vue.ref, B6 = window.Vue.watch, hm = window.Codex.CdxButton, Ql = window.Codex.CdxIcon, P6 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = mm(0), o = mm(null);
    B6(o, () => {
      var f;
      const h = (f = o.value) == null ? void 0 : f.$el;
      if (h instanceof HTMLElement) {
        const _ = h.querySelector("a");
        _ && _.setAttribute("target", "_blank");
      }
    });
    const s = Pn(
      () => {
        var h;
        return (h = t.publishFeedbackMessages) == null ? void 0 : h[n.value];
      }
    ), a = Pn(() => {
      var h;
      return ((h = s.value) == null ? void 0 : h.status) || "default";
    }), i = Pn(() => {
      switch (a.value) {
        case "warning":
          return Ph;
        case "error":
          return bC;
        default:
          return EC;
      }
    }), c = Pn(() => a.value === "default"), u = Pn(
      () => c.value ? "notice" : a.value
    ), d = Pn(
      () => `sx-publisher__review-info--${u.value}`
    ), r = he(), l = Pn(() => {
      var h;
      return (h = s.value) == null ? void 0 : h.text;
    }), g = Pn(
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
      const _ = cm("i18n"), w = cm("i18n-html");
      return wi(), pm(Tt(H0), {
        type: u.value,
        class: E6(["sx-publisher__review-info ma-0 pa-4", d.value]),
        inline: c.value
      }, {
        icon: ko(() => [
          Qn(Tt(Ql), {
            icon: i.value,
            class: "shrink mw-ui-message__icon items-start me-1"
          }, null, 8, ["icon"])
        ]),
        default: ko(() => [
          Jl("div", L6, [
            a.value === "default" ? um((wi(), dm("h5", A6, null, 512)), [
              [_, void 0, "cx-sx-publisher-review-info"]
            ]) : (wi(), dm(V6, { key: 1 }, [
              Jl("h5", {
                textContent: gm(g.value)
              }, null, 8, D6),
              Jl("p", {
                textContent: gm(l.value)
              }, null, 8, T6),
              Qn(Tt(F), {
                justify: "between",
                class: "ma-0"
              }, {
                default: ko(() => [
                  um(Qn(Tt(x), {
                    ref_key: "learnMoreContainer",
                    ref: o,
                    class: "sx-publisher__review-info__learn-more-anchor"
                  }, null, 512), [
                    [w, void 0, "cx-sx-publisher-review-info-learn-more"]
                  ]),
                  e.publishFeedbackMessages.length > 1 ? (wi(), pm(Tt(x), {
                    key: 0,
                    class: "sx-publisher__review-info__navigation-buttons justify-end",
                    align: "center"
                  }, {
                    default: ko(() => [
                      Qn(Tt(hm), {
                        weight: "quiet",
                        class: "pa-0 me-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                        onClick: p
                      }, {
                        default: ko(() => [
                          Qn(Tt(Ql), { icon: Tt(Wc) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"]),
                      Qn(Tt(hm), {
                        weight: "quiet",
                        class: "pa-0 ms-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                        onClick: m
                      }, {
                        default: ko(() => [
                          Qn(Tt(Ql), { icon: Tt(ta) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ]),
                    _: 1
                  })) : $6("", !0)
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
}, F6 = (e) => {
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
}, M6 = window.Vuex.useStore, N6 = window.Vue.computed, U6 = () => {
  const e = M6(), { currentTranslation: t } = Ft(), { currentMTProvider: n, previousRoute: o } = Le(e), { currentTargetPage: s } = rt(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: i,
    pageURLParameter: c,
    sectionURLParameter: u
  } = B(), { sourceSection: d } = oe(), r = it(), l = N6(() => {
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
    if (u.value ? (h.translation_source_section = u.value, h.translation_type = "section") : h.translation_type = "article", t.value) {
      h.translation_id = t.value.translationId, h.translation_target_title = t.value.targetTitle;
      const _ = t.value.targetSectionTitle;
      _ && (h.translation_target_section = _);
    } else
      s.value && (h.translation_target_title = (f = s.value) == null ? void 0 : f.title);
    return n.value && (h.translation_provider = se.getProviderForInstrumentation(n.value)), h.human_modification_rate = Xt.getMTScoreForPageSection(
      d.value,
      i.value
    ) / 100, h.human_modification_threshold = Xt.getMtModificationThreshold(), h;
  });
  return {
    logPublishAttemptEvent: () => r(pe({
      event_type: "publish_attempt"
    }, l.value)),
    logPublishSuccessEvent: (h, f) => r(pe({
      event_type: "publish_success",
      published_page_id: h,
      published_revision_id: f
    }, l.value)),
    logPublishFailureEvent: () => r(pe({
      event_type: "publish_failure"
    }, l.value))
  };
}, fm = window.Vue.ref, I6 = window.Vuex.useStore, R6 = () => {
  const e = I6(), {
    pageURLParameter: t,
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = B(), { sourceSection: s, targetPageTitleForPublishing: a } = oe(), i = ff(), c = fm(!1), u = fm("pending"), d = () => c.value = !1, r = ou(), {
    logPublishAttemptEvent: l,
    logPublishSuccessEvent: g,
    logPublishFailureEvent: p
  } = U6(), m = (f, _) => b(void 0, null, function* () {
    l();
    const w = yield r();
    if (w instanceof Ao)
      return p(), { publishFeedbackMessage: w, targetUrl: null };
    const y = w, C = a.value, v = e.getters["application/isSandboxTarget"], E = {
      html: F6(s.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: C,
      sourceSectionTitle: s.value.sourceSectionTitleForPublishing,
      targetSectionTitle: s.value.targetSectionTitleForPublishing,
      sourceLanguage: n.value,
      targetLanguage: o.value,
      revision: i.value,
      isSandbox: v,
      sectionTranslationId: y
    };
    f && (E.captchaId = f, E.captchaWord = _);
    const L = yield vt.publishTranslation(
      E
    );
    return L.publishFeedbackMessage === null ? g(L.pageId, L.revisionId) : p(), L;
  });
  return {
    closePublishDialog: d,
    doPublish: (f = null, _ = null) => b(void 0, null, function* () {
      u.value = "pending", c.value = !0;
      let w;
      try {
        w = yield m(
          _ == null ? void 0 : _.id,
          f
        );
      } catch (y) {
        if (y instanceof Bo)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw y;
      }
      return w;
    }),
    isPublishDialogActive: c,
    publishStatus: u
  };
}, z6 = window.Vue.computed, O6 = () => {
  const e = De(), { sourceSection: t } = oe(), { getCurrentTitleByLanguage: n } = vn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = B(), a = z6(
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
}, j6 = () => {
  const { targetLanguageURLParameter: e } = B(), { sourceSection: t } = oe();
  return () => {
    const n = Xt.getMTScoreForPageSection(
      t.value,
      e.value
    ), o = Xt.getScoreStatus(n);
    if (o === "success")
      return null;
    const s = 100 - n, a = o === "failure" ? "error" : "warning";
    let i, c;
    return a === "warning" ? (i = mw.message("cx-sx-publisher-mt-abuse-message-title", s).plain(), c = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (i = mw.message("cx-sx-publisher-mt-abuse-error-title", s).plain(), c = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new Ao({
      title: i,
      text: c,
      status: a,
      type: "mt"
    });
  };
}, H6 = window.Vue.ref, q6 = window.Vue.computed, G6 = () => {
  const e = j6(), t = H6([]), n = q6(
    () => t.value.some((i) => i.isError)
  );
  return {
    addPublishFeedbackMessage: (i) => {
      t.value.push(i), t.value.sort((c, u) => +u.isError - +c.isError);
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
}, X6 = window.Vuex.useStore, W6 = () => {
  const e = X6(), { currentSourcePage: t } = rt(), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = B(), { sourceSection: s, targetPageTitleForPublishing: a } = oe();
  return (i) => b(void 0, null, function* () {
    const c = a.value, u = e.getters["application/isSandboxTarget"], d = t.value.title, r = new mw.Title(d), l = mw.config.get("wgNamespaceIds");
    if (s.value.isLeadSection && !u && r.getNamespaceId() !== l.user)
      try {
        yield Ai.addWikibaseLink(
          n.value,
          o.value,
          d,
          c
        );
      } catch (g) {
        mw.log.error("Error while adding wikibase link", g);
      }
    if (!i) {
      const g = "[CX] Target URL is empty after successful publishing";
      throw mw.log.error(g), new Error(g);
    }
    location.href = i;
  });
}, wm = window.Vue.ref, K6 = () => {
  const e = wm(!1), t = wm(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const ye = window.Vue.unref, Ge = window.Vue.createVNode, Y6 = window.Vue.resolveDirective, Ds = window.Vue.createElementVNode, J6 = window.Vue.withDirectives, $o = window.Vue.withCtx, Q6 = window.Vue.openBlock, Z6 = window.Vue.createElementBlock, e9 = { class: "sx-publisher" }, t9 = { class: "sx-publisher__publish-panel pa-4" }, n9 = { class: "mb-2" }, o9 = ["innerHTML"], s9 = { class: "sx-publisher__section-preview pa-5" }, a9 = ["innerHTML"], _m = window.Vue.computed, i9 = window.Vue.onMounted, r9 = window.Vue.ref, l9 = window.Vue.watch, c9 = window.Vuex.useStore, vm = window.Codex.CdxButton, Sm = window.Codex.CdxIcon, u9 = {
  __name: "SXPublisher",
  setup(e) {
    const t = c9(), { sourceSection: n } = oe(), o = _m(() => {
      var k;
      return (k = n.value) == null ? void 0 : k.title;
    }), s = he(), a = _m(() => t.getters["application/isSandboxTarget"] ? s.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : n.value.isLeadSection ? s.i18n("cx-sx-publisher-publish-panel-lead-section-result") : s.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: i,
      captchaDialogOn: c,
      handleCaptchaError: u,
      onCaptchaDialogClose: d
    } = K6(), {
      publishFeedbackMessages: r,
      isPublishingDisabled: l,
      addPublishFeedbackMessage: g,
      clearPublishFeedbackMessages: p,
      initializePublishFeedbackMessages: m
    } = G6(), h = W6(), { doPublish: f, isPublishDialogActive: _, publishStatus: w, closePublishDialog: y } = R6(), C = (k = null) => b(this, null, function* () {
      if (l.value)
        return;
      const T = yield f(k, i.value);
      if (!T)
        return;
      const { publishFeedbackMessage: ie, targetUrl: H } = T;
      if (u(ie)) {
        y();
        return;
      } else
        ie && g(ie);
      w.value = l.value ? "failure" : "success", setTimeout(() => {
        if (l.value) {
          y();
          return;
        }
        h(H);
      }, 1e3);
    });
    i9(() => m());
    const v = O6(), E = r9(!1), L = () => E.value = !0;
    return l9(E, (k) => {
      k || (p(), m());
    }), (k, T) => {
      const ie = Y6("i18n");
      return Q6(), Z6("section", e9, [
        Ge(IT, {
          "is-publishing-disabled": ye(l),
          onPublishTranslation: C
        }, null, 8, ["is-publishing-disabled"]),
        Ds("div", t9, [
          J6(Ds("h5", n9, null, 512), [
            [ie, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          Ds("h6", {
            class: "mb-2",
            innerHTML: a.value
          }, null, 8, o9),
          Ge(ye(F), {
            justify: "end",
            class: "ma-0"
          }, {
            default: $o(() => [
              Ge(ye(x), { shrink: "" }, {
                default: $o(() => [
                  Ge(ye(vm), {
                    weight: "quiet",
                    "aria-label": k.$i18n("cx-sx-publisher-configure-button-aria-label"),
                    onClick: L
                  }, {
                    default: $o(() => [
                      Ge(ye(Sm), { icon: ye(FC) }, null, 8, ["icon"])
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
        Ge(P6, { "publish-feedback-messages": ye(r) }, null, 8, ["publish-feedback-messages"]),
        Ds("section", s9, [
          Ge(ye(F), { class: "pb-5 ma-0" }, {
            default: $o(() => [
              Ge(ye(x), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                innerHTML: o.value
              }, null, 8, ["innerHTML"]),
              Ge(ye(x), { shrink: "" }, {
                default: $o(() => [
                  Ge(ye(vm), {
                    weight: "quiet",
                    "aria-label": k.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: ye(v)
                  }, {
                    default: $o(() => [
                      Ge(ye(Sm), { icon: ye(qc) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label", "onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Ds("div", {
            innerHTML: ye(n).translationHtml
          }, null, 8, a9)
        ]),
        Ge(k6, {
          active: E.value,
          "onUpdate:active": T[0] || (T[0] = (H) => E.value = H)
        }, null, 8, ["active"]),
        Ge(l6, {
          active: ye(c),
          "captcha-details": ye(i),
          onClose: ye(d),
          onPublish: T[1] || (T[1] = (H) => C(H))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        Ge(WT, {
          active: ye(_),
          status: ye(w)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const d9 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: u9
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, g9 = window.Vue.resolveComponent, p9 = window.Vue.createVNode, m9 = window.Vue.normalizeClass, h9 = window.Vue.openBlock, f9 = window.Vue.createElementBlock;
function w9(e, t, n, o, s, a) {
  const i = g9("sx-publisher");
  return h9(), f9("main", {
    class: m9(["sx-publisher-view", a.classes])
  }, [
    p9(i)
  ], 2);
}
const _9 = /* @__PURE__ */ ae(d9, [["render", w9]]);
const Bt = window.Vue.unref, Fn = window.Vue.createVNode, Zn = window.Vue.withCtx, Zl = window.Vue.toDisplayString, ec = window.Vue.createElementVNode, v9 = window.Vue.openBlock, S9 = window.Vue.createBlock, y9 = ["textContent"], x9 = ["textContent"], C9 = ["textContent"], Sf = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: Po,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (v9(), S9(Bt(F), {
      class: "cx-search-suggestion px-4 py-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: Bt(I.getDir)(e.suggestion.language)
    }, {
      default: Zn(() => [
        Fn(Bt(x), { shrink: "" }, {
          default: Zn(() => [
            Fn(Bt(kc), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        Fn(Bt(x), { class: "ms-4" }, {
          default: Zn(() => [
            Fn(Bt(F), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: Zn(() => [
                Fn(Bt(x), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: Zn(() => [
                    ec("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: Zl(e.suggestion.title)
                    }, null, 8, y9)
                  ]),
                  _: 1
                }),
                Fn(Bt(x), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: Zn(() => [
                    ec("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: Zl(e.suggestion.description)
                    }, null, 8, x9)
                  ]),
                  _: 1
                }),
                Fn(Bt(x), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: Zn(() => [
                    Fn(Bt(Re), {
                      icon: Bt(l0),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    ec("small", {
                      textContent: Zl((e.suggestion.langLinksCount || 0) + 1)
                    }, null, 8, C9)
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
const Ts = window.Vue.unref, Bs = window.Vue.openBlock, tc = window.Vue.createBlock, b9 = window.Vue.createCommentVNode, k9 = window.Vue.resolveDirective, $9 = window.Vue.withDirectives, ym = window.Vue.createElementBlock, V9 = window.Vue.renderList, E9 = window.Vue.Fragment, L9 = window.Vue.normalizeClass, A9 = window.Vue.withCtx, D9 = {
  key: 1,
  class: "sx-article-search__empty-state"
}, xm = window.Vue.computed, T9 = window.Vue.ref, B9 = {
  __name: "SearchResultsCard",
  props: {
    searchInput: {
      type: String,
      default: null
    },
    selectedItem: {
      type: [Object, String],
      required: !1,
      default: null
    }
  },
  emits: ["suggestion-clicked"],
  setup(e) {
    const { sourceLanguageURLParameter: t } = B(), n = xm(() => I.getAutonym(t.value)), o = e, s = T9(null), a = (l) => s.value = l, i = () => s.value = null, c = (l) => {
      var g;
      return ((g = o.selectedItem) == null ? void 0 : g.title) === l.title && !s.value || s.value === l.pageId;
    }, u = xm(() => o.searchInput), { searchResultsLoading: d, searchResultsSlice: r } = Yc(
      t,
      u
    );
    return (l, g) => {
      const p = k9("i18n");
      return Bs(), tc(Ts(ot), { class: "sx-article-search__results mb-0 pa-0" }, {
        default: A9(() => [
          Ts(d) ? (Bs(), tc(Ts(st), {
            key: 0,
            class: "sx-article-search__empty-state"
          })) : Ts(r).length === 0 ? $9((Bs(), ym("p", D9, null, 512)), [
            [p, [
              u.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : b9("", !0),
          (Bs(!0), ym(E9, null, V9(Ts(r), (m) => (Bs(), tc(Sf, {
            key: m.pageId,
            suggestion: m,
            class: L9({
              "sx-article-search__results-selected": c(m)
            }),
            onMouseenter: (h) => a(m.pageId),
            onMouseleave: i,
            onClick: (h) => l.$emit("suggestion-clicked", m)
          }, null, 8, ["suggestion", "class", "onMouseenter", "onClick"]))), 128))
        ]),
        _: 1
      });
    };
  }
};
const P9 = window.Vue.toDisplayString, F9 = window.Vue.createElementVNode, M9 = window.Vue.renderList, N9 = window.Vue.Fragment, nc = window.Vue.openBlock, U9 = window.Vue.createElementBlock, I9 = window.Vue.normalizeClass, Cm = window.Vue.createBlock, R9 = window.Vue.unref, bm = window.Vue.withCtx, z9 = ["textContent"], O9 = window.Vue.ref, km = {
  __name: "ArticleSuggestionsCard",
  props: {
    cardTitle: {
      type: String,
      required: !0
    },
    suggestions: {
      type: Array,
      required: !0
    },
    selectedItem: {
      type: [Object, String],
      required: !1,
      default: null
    }
  },
  emits: ["suggestion-clicked"],
  setup(e, { emit: t }) {
    const n = e, o = O9(null), s = (c) => o.value = c, a = () => o.value = null, i = (c) => {
      var u;
      return ((u = n.selectedItem) == null ? void 0 : u.title) === c.title && !o.value || o.value === c.pageId;
    };
    return (c, u) => (nc(), Cm(R9(ot), { class: "sx-article-search__suggestions pa-0" }, {
      header: bm(() => [
        F9("h5", {
          class: "ma-0 px-4 pb-1 sx-article-search__suggestions-header",
          textContent: P9(e.cardTitle)
        }, null, 8, z9)
      ]),
      default: bm(() => [
        (nc(!0), U9(N9, null, M9(e.suggestions, (d) => (nc(), Cm(Sf, {
          key: d.pageId,
          suggestion: d,
          class: I9({
            "sx-article-search__suggestions-selected": i(d)
          }),
          onMouseenter: (r) => s(d.pageId),
          onMouseleave: a,
          onClick: (r) => c.$emit("suggestion-clicked", d)
        }, null, 8, ["suggestion", "class", "onMouseenter", "onClick"]))), 128))
      ]),
      _: 1
    }));
  }
}, j9 = window.Vue.computed, H9 = (e, t) => j9(() => {
  const o = {
    value: "other",
    props: {
      icon: g0,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  }, s = [
    e.value,
    ...t.value.slice(0, 2)
  ];
  return [...s.filter(
    (i, c) => s.findIndex((u) => u === i) === c
  ).map((i) => ({
    value: i,
    props: {
      label: I.getAutonym(i),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), o];
}), q9 = window.Vue.computed, G9 = () => {
  const { supportedSourceLanguageCodes: e } = Js(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B();
  return { getSuggestedSourceLanguages: (s) => q9(() => {
    const a = (navigator.language || "").split("-")[0], i = (mw.config.get("wgULSAcceptLanguageList") || navigator.languages || []).map((u) => u.split("-")[0]), c = [
      // User's current interface language
      mw.config.get("wgUserLanguage"),
      // Current wiki's content language
      mw.config.get("wgContentLanguage"),
      a,
      ...s.value,
      ...i
    ];
    return [...new Set(c)].filter(
      (u) => u !== t.value && u !== n.value && e.value.includes(u)
    );
  }) };
};
const X9 = window.Vue.resolveDirective, W9 = window.Vue.createElementVNode, oc = window.Vue.withDirectives, de = window.Vue.unref, Ps = window.Vue.withCtx, qt = window.Vue.createVNode, Fs = window.Vue.openBlock, $m = window.Vue.createBlock, K9 = window.Vue.createCommentVNode, sc = window.Vue.createElementBlock, Y9 = window.Vue.Fragment, J9 = window.Vue.vShow, Ms = window.Vue.withModifiers, Ns = window.Vue.withKeys, Q9 = ["onKeydown"], Z9 = { class: "mb-0" }, eB = {
  key: 2,
  class: "sx-article-search__empty-state"
}, Vo = window.Vue.ref, tB = window.Vue.onMounted, Us = window.Vue.computed, Vm = window.Vue.watch, nB = window.Vue.inject, oB = window.Vuex.useStore, sB = window.Codex.CdxButton, aB = window.Codex.CdxIcon, iB = window.Codex.CdxSearchInput, rB = 3, lB = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = Vo(""), n = Vo(!1), o = Vo(null), s = Vo(!1), a = Vo([]), i = oB(), {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u
    } = B(), { supportedSourceLanguageCodes: d } = Js(), { searchResultsSlice: r } = Yc(c, t), { getSuggestedSourceLanguages: l } = G9(), g = l(a), p = H9(
      c,
      g
    ), m = De(), { fetchAllTranslations: h } = Uo();
    tB(() => b(this, null, function* () {
      var N;
      h();
      try {
        a.value.push(
          ...JSON.parse(localStorage.getItem("uls-previous-languages"))
        );
      } catch (q) {
      }
      (N = o.value) == null || N.focus();
    }));
    const f = () => {
      m.push({ name: "dashboard" });
    }, _ = ih(), w = (N) => _(N, u.value), y = (N) => {
      if (N === "other") {
        s.value = !0;
        return;
      }
      w(N);
    };
    Vm(
      c,
      () => {
        var N;
        i.dispatch("mediawiki/fetchNearbyPages"), (N = o.value) == null || N.focus();
      },
      { immediate: !0 }
    );
    const C = it();
    Vm(t, () => {
      n.value || (n.value = !0, C({
        event_type: "dashboard_search",
        translation_source_language: c.value,
        translation_target_language: u.value
      }));
    });
    const v = () => {
      s.value = !1;
    }, E = (N) => {
      s.value = !1, a.value.push(c.value), y(N);
    }, { fetchPreviousEditsInSource: L, previousEditsInSource: k } = Uc(), T = Vo([]);
    (() => L().then(() => k.value.length > 0 ? no.fetchPages(
      c.value,
      k.value
    ) : []).then((N) => {
      N = N.slice(0, rB), N = N.sort(
        (q, W) => k.value.indexOf(q.title) - k.value.indexOf(W.title)
      ), T.value = N;
    }))();
    const H = Us(() => i.getters["mediawiki/getNearbyPages"]), X = nB("breakpoints"), Z = Us(() => X.value.mobile), be = na(), xe = Us(
      () => T.value && T.value.length
    ), Xe = Us(
      () => H.value && H.value.length
    ), { next: fe, prev: Ce, keyboardNavigationContainer: We, selectedItem: P } = Jh(t, r, T), z = (N) => be(
      N.title,
      c.value,
      u.value,
      j.value
    ), j = Us(() => t.value ? "search_result" : xe.value ? "suggestion_recent_edit" : Xe.value ? "suggestion_nearby" : "");
    return (N, q) => {
      const W = X9("i18n");
      return Fs(), sc("section", {
        ref_key: "keyboardNavigationContainer",
        ref: We,
        class: "sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto",
        onKeydown: [
          q[5] || (q[5] = Ns(Ms((...K) => de(fe) && de(fe)(...K), ["stop", "prevent"]), ["tab"])),
          q[6] || (q[6] = Ns(Ms((...K) => de(fe) && de(fe)(...K), ["stop", "prevent"]), ["down"])),
          q[7] || (q[7] = Ns(Ms((...K) => de(Ce) && de(Ce)(...K), ["stop", "prevent"]), ["up"])),
          Ns(Ms(f, ["stop", "prevent"]), ["esc"]),
          q[8] || (q[8] = Ns(Ms((K) => z(de(P)), ["stop", "prevent"]), ["enter"]))
        ]
      }, [
        qt(de(F), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Ps(() => [
            qt(de(x), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Ps(() => [
                oc(W9("h5", Z9, null, 512), [
                  [W, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            qt(de(x), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Ps(() => [
                qt(de(sB), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": N.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: f
                }, {
                  default: Ps(() => [
                    qt(de(aB), { icon: de(No) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        qt(de(iB), {
          ref_key: "searchInputRef",
          ref: o,
          modelValue: t.value,
          "onUpdate:modelValue": q[0] || (q[0] = (K) => t.value = K),
          class: "sx-article-search__search-input",
          placeholder: N.$i18n("cx-sx-article-search-input-placeholder")
        }, null, 8, ["modelValue", "placeholder"]),
        qt(de(Gs), {
          class: "sx-article-search__language-button-group",
          items: de(p),
          active: de(c),
          onSelect: y
        }, null, 8, ["items", "active"]),
        t.value ? K9("", !0) : (Fs(), sc(Y9, { key: 0 }, [
          xe.value ? (Fs(), $m(km, {
            key: 0,
            "card-title": N.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: T.value,
            "selected-item": de(P),
            onSuggestionClicked: q[1] || (q[1] = (K) => z(K))
          }, null, 8, ["card-title", "suggestions", "selected-item"])) : Xe.value ? (Fs(), $m(km, {
            key: 1,
            "card-title": N.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: H.value,
            onSuggestionClicked: q[2] || (q[2] = (K) => z(K))
          }, null, 8, ["card-title", "suggestions"])) : oc((Fs(), sc("p", eB, null, 512)), [
            [W, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        oc(qt(B9, {
          "search-input": t.value,
          "selected-item": de(P),
          onSuggestionClicked: q[3] || (q[3] = (K) => z(K))
        }, null, 8, ["search-input", "selected-item"]), [
          [J9, !!t.value]
        ]),
        qt(de(St), {
          value: s.value,
          "onUpdate:value": q[4] || (q[4] = (K) => s.value = K),
          class: "sx-article-search-language-selector",
          fullscreen: Z.value,
          header: Z.value,
          title: N.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: v
        }, {
          default: Ps(() => [
            qt(de(Qh), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: de(d),
              suggestions: de(g),
              placeholder: N.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: E,
              onClose: v
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ], 40, Q9);
    };
  }
};
const cB = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: lB
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.mobile })
  }
}, uB = window.Vue.resolveComponent, dB = window.Vue.createVNode, gB = window.Vue.normalizeClass, pB = window.Vue.openBlock, mB = window.Vue.createElementBlock;
function hB(e, t, n, o, s, a) {
  const i = uB("sx-article-search");
  return pB(), mB("main", {
    class: gB(["sx-article-search-view", a.classes])
  }, [
    dB(i)
  ], 2);
}
const fB = /* @__PURE__ */ ae(cB, [["render", hB]]), wB = () => {
  const e = na(), t = eu(), { logDashboardOpenEvent: n, getEventSource: o } = of(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: i
  } = B();
  return () => b(void 0, null, function* () {
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
}, _B = window.Vuex.useStore, vB = [
  {
    path: "",
    name: "dashboard",
    component: $g,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: fB,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: xV,
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: M3,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: QE,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: KD,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: _D,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: PT,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: _9,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: $g,
    meta: { workflowStep: 0 }
  }
], su = Hx({
  history: jy(),
  routes: vB
}), ac = (e, t, n) => {
  e === t ? n() : n({ name: t });
}, SB = (e, t, n) => {
  let o = "cx_" + btoa(
    encodeURIComponent([n, e, t].join("_"))
  );
  return o = o.replace(/[()<>@,;\\[\]?={}]/g, ""), mw.cookie.get(o, "");
};
su.beforeEach((e, t, n) => {
  const o = _B();
  if (mw.user.isAnon() || Bm.assertUser().catch((r) => {
    r instanceof Bo && o.commit("application/setIsLoginDialogOn", !0);
  }), o.commit("application/setPreviousRoute", t.name), t.name) {
    n();
    return;
  }
  const s = wB(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: i,
    pageURLParameter: c,
    clearTranslationURLParameters: u
  } = B();
  if (!!(a.value && i.value && c.value)) {
    if (SB(
      a.value,
      i.value,
      c.value
    )) {
      const l = e.name === "sx-quick-tutorial" ? "sx-quick-tutorial" : "sx-sentence-selector";
      ac(e.name, l, n);
    } else
      e.name === "sx-translation-confirmer" && s(), ac(e.name, "sx-translation-confirmer", n);
    return;
  }
  u(), ac(e.name, "dashboard", n);
});
su.afterEach((e, t) => {
  if (!t.name)
    return;
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const yB = window.Vue.createApp, xB = mw.config.get("wgUserLanguage"), CB = "en", bB = mw.messages.values || {}, zo = yB(TS);
zo.use(su);
zo.use(dy);
zo.use(t_);
zo.use(e_);
const kB = B_({
  locale: xB,
  finalFallback: CB,
  messages: bB,
  wikilinks: !0
});
zo.use(kB);
zo.mount("#contenttranslation");
