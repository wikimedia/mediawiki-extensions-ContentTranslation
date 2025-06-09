var Df = Object.defineProperty, Tf = Object.defineProperties;
var Bf = Object.getOwnPropertyDescriptors;
var du = Object.getOwnPropertySymbols;
var Pf = Object.prototype.hasOwnProperty, Ff = Object.prototype.propertyIsEnumerable;
var gu = (e, t, n) => t in e ? Df(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, me = (e, t) => {
  for (var n in t || (t = {}))
    Pf.call(t, n) && gu(e, n, t[n]);
  if (du)
    for (var n of du(t))
      Ff.call(t, n) && gu(e, n, t[n]);
  return e;
}, Ge = (e, t) => Tf(e, Bf(t));
var C = (e, t, n) => new Promise((o, s) => {
  var a = (u) => {
    try {
      c(n.next(u));
    } catch (d) {
      s(d);
    }
  }, r = (u) => {
    try {
      c(n.throw(u));
    } catch (d) {
      s(d);
    }
  }, c = (u) => u.done ? o(u.value) : Promise.resolve(u.value).then(a, r);
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
    CdxMenu: r,
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
    CdxMenu: r,
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
}, Nf = window.Vue.toDisplayString, Hi = window.Vue.openBlock, qi = window.Vue.createElementBlock, Uf = window.Vue.createCommentVNode, pu = window.Vue.createElementVNode, If = window.Vue.normalizeClass, Rf = ["width", "height", "aria-labelledby"], zf = ["id"], Of = ["fill"], jf = ["d"];
function Hf(e, t, n, o, s, a) {
  return Hi(), qi("span", {
    class: If(["mw-ui-icon notranslate", a.classes])
  }, [
    (Hi(), qi("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...r) => a.handleClick && a.handleClick(...r))
    }, [
      n.iconName ? (Hi(), qi("title", {
        key: 0,
        id: n.iconName
      }, Nf(n.iconName), 9, zf)) : Uf("", !0),
      pu("g", { fill: n.iconColor }, [
        pu("path", { d: a.iconImagePath }, null, 8, jf)
      ], 8, Of)
    ], 8, Rf))
  ], 2);
}
const Oe = /* @__PURE__ */ ae(Mf, [["render", Hf]]);
const qf = {
  name: "MwButton",
  components: {
    MwIcon: Oe
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
}, Gf = window.Vue.renderSlot, Xf = window.Vue.resolveComponent, mu = window.Vue.normalizeClass, la = window.Vue.openBlock, Gi = window.Vue.createBlock, Xi = window.Vue.createCommentVNode, Wf = window.Vue.toDisplayString, Kf = window.Vue.createElementBlock, Yf = window.Vue.toHandlerKey, Jf = window.Vue.withModifiers, Qf = window.Vue.mergeProps, Zf = window.Vue.createElementVNode, ew = window.Vue.resolveDynamicComponent, tw = window.Vue.withCtx, nw = { class: "mw-ui-button__content" }, ow = ["textContent"];
function sw(e, t, n, o, s, a) {
  const r = Xf("mw-icon");
  return la(), Gi(ew(a.component), {
    class: mu(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: tw(() => [
      Gf(e.$slots, "default", {}, () => [
        Zf("span", nw, [
          n.icon ? (la(), Gi(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: mu(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : Xi("", !0),
          !a.isIcon && n.label ? (la(), Kf("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: Wf(n.label)
          }, null, 8, ow)) : Xi("", !0),
          n.indicator ? (la(), Gi(r, Qf({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [Yf(a.indicatorClickEvent)]: t[0] || (t[0] = Jf((c) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : Xi("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const Ie = /* @__PURE__ */ ae(qf, [["render", sw]]);
const aw = {
  name: "MwButtonGroup",
  components: {
    MwButton: Ie
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
}, iw = window.Vue.renderList, rw = window.Vue.Fragment, Wi = window.Vue.openBlock, hu = window.Vue.createElementBlock, lw = window.Vue.resolveComponent, cw = window.Vue.withModifiers, uw = window.Vue.mergeProps, dw = window.Vue.createBlock, gw = { class: "row mw-ui-button-group ma-0 pa-0" };
function pw(e, t, n, o, s, a) {
  const r = lw("mw-button");
  return Wi(), hu("div", gw, [
    (Wi(!0), hu(rw, null, iw(n.items, (c) => (Wi(), dw(r, uw({
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
}, fu = window.Vue.renderSlot, fw = window.Vue.toDisplayString, wu = window.Vue.openBlock, _u = window.Vue.createElementBlock, ww = window.Vue.createCommentVNode, _w = window.Vue.createElementVNode, vw = { class: "mw-ui-card" }, Sw = ["textContent"], yw = { class: "mw-ui-card__content" };
function xw(e, t, n, o, s, a) {
  return wu(), _u("div", vw, [
    fu(e.$slots, "header", {}, () => [
      n.title ? (wu(), _u("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: fw(n.title)
      }, null, 8, Sw)) : ww("", !0)
    ]),
    _w("div", yw, [
      fu(e.$slots, "default")
    ])
  ]);
}
const Ke = /* @__PURE__ */ ae(hw, [["render", xw]]);
const bw = {}, Cw = window.Vue.openBlock, kw = window.Vue.createElementBlock, $w = { class: "mw-ui-divider row" };
function Vw(e, t) {
  return Cw(), kw("div", $w);
}
const xi = /* @__PURE__ */ ae(bw, [["render", Vw]]);
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
const P = /* @__PURE__ */ ae(Mw, [["render", jw]]), lc = ["mobile", "tablet", "desktop", "desktop-wide"], Hw = lc.reduce(
  (e, t) => Ge(me({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), qw = {
  name: "MwCol",
  props: Ge(me({}, Hw), {
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
      for (let n = 0; n < lc.length; n++) {
        let o = lc[n], s = this.$props[o];
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
const b = /* @__PURE__ */ ae(qw, [["render", Qw]]), Zw = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", e0 = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", bi = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", t0 = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, n0 = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", Lm = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", o0 = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", s0 = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", Xs = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", a0 = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", i0 = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", r0 = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", vu = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", l0 = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", Am = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", c0 = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", u0 = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", d0 = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", g0 = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", p0 = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", m0 = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, _i = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, h0 = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, Dm = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, f0 = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, Tm = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", w0 = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z";
const Ki = window.Vue.computed, _0 = window.Vue.watch, v0 = window.Vue.ref, S0 = window.Vue.nextTick, y0 = {
  name: "MwDialog",
  components: {
    MwButton: Ie,
    MwRow: P,
    MwCol: b,
    MwDivider: xi
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
    const n = v0(null), o = Ki(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = Ki(
      () => `mw-ui-dialog__overlay--${e.overlayMode}`
    ), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, r = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    _0(
      () => e.value,
      (u) => {
        u ? (r(), S0(() => {
          n.value.focus();
        })) : a();
      }
    );
    const c = Ki(() => ({
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
}, Su = window.Vue.normalizeClass, Yi = window.Vue.createElementVNode, Ji = window.Vue.renderSlot, ca = window.Vue.resolveComponent, Oo = window.Vue.createVNode, Qi = window.Vue.withCtx, yu = window.Vue.createCommentVNode, x0 = window.Vue.withKeys, xu = window.Vue.openBlock, b0 = window.Vue.createElementBlock, C0 = window.Vue.Transition, k0 = window.Vue.normalizeStyle, $0 = window.Vue.createBlock, V0 = { class: "mw-ui-dialog__shell items-stretch" }, E0 = { class: "mw-ui-dialog__body" };
function L0(e, t, n, o, s, a) {
  const r = ca("mw-col"), c = ca("mw-button"), u = ca("mw-row"), d = ca("mw-divider");
  return xu(), $0(C0, {
    name: "mw-ui-animation-fade",
    style: k0(o.cssVars)
  }, {
    default: Qi(() => [
      n.value ? (xu(), b0("div", {
        key: 0,
        ref: "root",
        class: Su(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = x0((i) => n.closeOnEscapeKey && o.close(), ["esc"]))
      }, [
        Yi("div", {
          class: Su(["mw-ui-dialog__overlay", o.overlayClass]),
          onClick: t[0] || (t[0] = (i) => !n.persistent && o.close())
        }, null, 2),
        Yi("div", V0, [
          n.header ? Ji(e.$slots, "header", { key: 0 }, () => [
            Oo(u, { class: "mw-ui-dialog__header" }, {
              default: Qi(() => [
                Oo(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                Oo(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: Qi(() => [
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
          ]) : yu("", !0),
          Yi("div", E0, [
            Ji(e.$slots, "default")
          ]),
          Ji(e.$slots, "footer")
        ])
      ], 34)) : yu("", !0)
    ]),
    _: 3
  }, 8, ["style"]);
}
const St = /* @__PURE__ */ ae(y0, [["render", L0]]);
const A0 = {
  name: "MwInput",
  components: {
    MwIcon: Oe
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
      const t = me({}, e.$attrs);
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
}, bu = window.Vue.renderSlot, D0 = window.Vue.resolveComponent, ua = window.Vue.openBlock, Zi = window.Vue.createBlock, Cu = window.Vue.createCommentVNode, T0 = window.Vue.resolveDynamicComponent, B0 = window.Vue.toDisplayString, P0 = window.Vue.mergeProps, F0 = window.Vue.withModifiers, M0 = window.Vue.createElementVNode, N0 = window.Vue.normalizeClass, U0 = window.Vue.createElementBlock, I0 = { class: "mw-ui-input__content" };
function R0(e, t, n, o, s, a) {
  const r = D0("mw-icon");
  return ua(), U0("div", {
    class: N0(a.classes),
    onClick: t[2] || (t[2] = (c) => a.focus())
  }, [
    M0("div", I0, [
      bu(e.$slots, "icon", {}, () => [
        n.icon ? (ua(), Zi(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : Cu("", !0)
      ]),
      (ua(), Zi(T0(n.type === "textarea" ? n.type : "input"), P0({
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
      bu(e.$slots, "indicator", {}, () => [
        n.indicator ? (ua(), Zi(r, {
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
const cc = /* @__PURE__ */ ae(A0, [["render", R0]]);
const z0 = {
  name: "MwMessage",
  components: { MwCol: b, MwRow: P, MwIcon: Oe, MwButton: Ie },
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
      warning: Dm,
      success: _i,
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
}, er = window.Vue.renderSlot, da = window.Vue.resolveComponent, ku = window.Vue.createVNode, $u = window.Vue.withCtx, Vu = window.Vue.openBlock, Eu = window.Vue.createBlock, Lu = window.Vue.createCommentVNode, O0 = window.Vue.normalizeClass;
function j0(e, t, n, o, s, a) {
  const r = da("mw-icon"), c = da("mw-col"), u = da("mw-button"), d = da("mw-row");
  return e.shown ? (Vu(), Eu(d, {
    key: 0,
    class: O0([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: $u(() => [
      er(e.$slots, "icon", {}, () => [
        ku(r, {
          icon: a.icon,
          size: 24,
          class: "col shrink mw-ui-message__icon pa-1 items-start"
        }, null, 8, ["icon"])
      ]),
      ku(c, {
        id: `${e.id}-label`,
        tag: "span",
        grow: "",
        align: "center",
        class: "mw-ui-message__label"
      }, {
        default: $u(() => [
          er(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id"]),
      er(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (Vu(), Eu(u, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : Lu("", !0)
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : Lu("", !0);
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
  components: { MwUiIcon: Oe },
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
      default: Tm
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
}, Au = window.Vue.normalizeStyle, Du = window.Vue.openBlock, t1 = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const n1 = window.Vue.resolveComponent, o1 = window.Vue.createBlock;
function s1(e, t, n, o, s, a) {
  const r = n1("mw-ui-icon");
  return n.thumbnail ? (Du(), t1("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Au(o.style)
  }, null, 4)) : (Du(), o1(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Au(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const $c = /* @__PURE__ */ ae(e1, [["render", s1]]);
const a1 = {
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
}, i1 = window.Vue.vModelRadio, fi = window.Vue.createElementVNode, r1 = window.Vue.withDirectives, l1 = window.Vue.toDisplayString, c1 = window.Vue.resolveComponent, u1 = window.Vue.normalizeClass, d1 = window.Vue.withCtx, g1 = window.Vue.openBlock, p1 = window.Vue.createBlock, m1 = { class: "mw-ui-radio__controls" }, h1 = ["id", "disabled", "name", "value"], f1 = /* @__PURE__ */ fi("span", { class: "mw-ui-radio__controls__icon" }, null, -1), w1 = ["for", "textContent"];
function _1(e, t, n, o, s, a) {
  const r = c1("mw-row");
  return g1(), p1(r, {
    class: u1(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: d1(() => [
      fi("div", m1, [
        r1(fi("input", {
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
      fi("label", {
        for: n.id,
        class: "ps-2",
        textContent: l1(n.label)
      }, null, 8, w1)
    ]),
    _: 1
  }, 8, ["class"]);
}
const uc = /* @__PURE__ */ ae(a1, [["render", _1]]), Tu = window.Vue.h, v1 = {
  name: "MwRadioGroup",
  components: { MwRadio: uc },
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
      (o) => Tu(uc, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), Tu("div", { class: "mw-ui-radio-group" }, n);
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
}, Bu = window.Vue.normalizeClass, Pu = window.Vue.normalizeStyle, y1 = window.Vue.createElementVNode, x1 = window.Vue.openBlock, b1 = window.Vue.createElementBlock, C1 = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function k1(e, t, n, o, s, a) {
  return x1(), b1("div", {
    class: Bu(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: Pu(a.containerStyles)
  }, [
    y1("div", {
      class: Bu(["mw-progress-bar__bar", a.barClass]),
      style: Pu(a.barStyles)
    }, null, 6)
  ], 14, C1);
}
const Bm = /* @__PURE__ */ ae(S1, [["render", k1]]), $1 = (e, t, n, o) => (s) => {
  const a = s.clientY, r = parseInt(
    document.defaultView.getComputedStyle(n.value).height,
    10
  ), c = (d) => {
    o.value = !1;
    let i = Math.min(
      r + d.clientY - a,
      e.value
    );
    i = Math.max(i, t.value), n.value.style.height = i + "px";
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
) }), E1 = window.Vue.ref, Fu = window.Vue.computed, L1 = (e, t, n, o) => {
  const s = E1(0), a = Fu(
    () => t.value > e.value
  ), r = Fu(
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
    isScrolledToEnd: r,
    scrollToStepByIndex: c,
    scrollable: a,
    scrollIndex: s
  };
};
const ga = window.Vue.ref, A1 = window.Vue.onMounted, Mu = window.Vue.computed, D1 = window.Vue.nextTick, T1 = {
  name: "MwExpandableContent",
  components: {
    MwButton: Ie
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
    const t = ga(!0), n = ga(null), o = Mu(
      () => Math.min(e.minHeight, s.value)
    ), s = ga(1), { initiateDrag: a } = V1(
      s,
      o,
      n,
      t
    ), {
      isScrolledToEnd: r,
      scrollable: c,
      scrollIndex: u,
      scrollToStepByIndex: d,
      handleArrowUpClick: i
    } = L1(o, s, n, t), l = () => d(u.value + 1), g = ga(null), p = Mu(() => ({
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
    return A1(() => C(this, null, function* () {
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
      handleArrowUpClick: i,
      isCollapsed: t,
      isScrolledToEnd: r,
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
}, B1 = window.Vue.renderSlot, P1 = window.Vue.normalizeClass, pa = window.Vue.createElementVNode, F1 = window.Vue.resolveComponent, M1 = window.Vue.createVNode, tr = window.Vue.openBlock, N1 = window.Vue.createBlock, Nu = window.Vue.createCommentVNode, Uu = window.Vue.createElementBlock, U1 = window.Vue.normalizeStyle, I1 = { class: "mw-ui-expandable-content__container" }, R1 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, z1 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function O1(e, t, n, o, s, a) {
  const r = F1("mw-button");
  return tr(), Uu("div", {
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
      n.scroll && o.scrollable ? (tr(), Uu("div", R1, [
        M1(r, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (tr(), N1(r, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : Nu("", !0)
      ])) : Nu("", !0)
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
}, Iu = window.Vue.createElementVNode, Ru = window.Vue.normalizeStyle, q1 = window.Vue.openBlock, G1 = window.Vue.createElementBlock, X1 = ["width", "height", "viewport"], W1 = ["r", "cx", "cy", "stroke-dasharray"], K1 = ["r", "cx", "cy", "stroke-dasharray"];
function Y1(e, t, n, o, s, a) {
  return q1(), G1("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: Ru(o.cssVars)
  }, [
    Iu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, W1),
    Iu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: Ru({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, K1)
  ], 12, X1);
}
const J1 = /* @__PURE__ */ ae(H1, [["render", Y1]]), Q1 = window.Vue.ref, hn = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, yn = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${hn.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${hn.tablet}px) and (max-width: ${hn.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${hn.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${hn.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${hn["desktop-wide"] - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${hn.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${hn["desktop-wide"]}px)`
}, nr = {
  mobile: () => matchMedia(yn.mobile).matches,
  tablet: () => matchMedia(yn.tablet).matches,
  desktop: () => matchMedia(yn.desktop).matches,
  desktopwide: () => matchMedia(yn["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(yn["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(yn["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(yn["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(yn["desktop-and-down"]).matches
}, Z1 = (e) => {
  const t = Object.values(hn);
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
      for (let s in nr)
        nr.hasOwnProperty(s) && (t.value[s] = nr[s]());
      t.value.nextBreakpoint = Z1(o);
    };
    n(), window.addEventListener("resize", n), e.config.globalProperties.$mwui = Ge(me({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: t.value
    }), e.provide("breakpoints", t);
  }
}, t_ = {
  install: (e) => {
    e.config.globalProperties.$mwui = Ge(me({}, e.config.globalProperties.$mwui || {}), {
      colors: ft
    }), e.provide("colors", ft);
  }
};
class Bo extends Error {
}
const n_ = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new Bo();
}), Pm = { assertUser: n_ };
const o_ = window.Vue.resolveDirective, jo = window.Vue.createElementVNode, zu = window.Vue.withDirectives, s_ = window.Vue.toDisplayString, a_ = window.Vue.unref, Ou = window.Vue.withCtx, i_ = window.Vue.openBlock, r_ = window.Vue.createBlock, l_ = window.Vue.createCommentVNode, c_ = { class: "pa-4 sx-login-dialog__header" }, u_ = { class: "sx-login-dialog__body px-6 pb-4" }, d_ = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, g_ = ["href"], p_ = window.Vue.computed, m_ = window.Vue.ref, h_ = window.Vuex.useStore, f_ = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = h_(), n = p_(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = m_(mw.util.getUrl("Special:UserLogin"));
    return (a, r) => {
      const c = o_("i18n");
      return n.value ? (i_(), r_(a_(St), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: Ou(() => [
          jo("div", c_, [
            zu(jo("h4", null, null, 512), [
              [c, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: Ou(() => [
          zu(jo("div", u_, null, 512), [
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
}, Y = new mw.cx.SiteMapper(), w_ = mw.util.getUrl, __ = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
}, Ws = !mw.config.get("wgMFMode");
class Ci {
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
    pageRevision: c,
    status: u,
    targetTitle: d
  }) {
    this.translationId = t, this.sourceTitle = n, this.sourceLanguage = o, this.targetLanguage = s, this.startTimestamp = a, this.lastUpdatedTimestamp = r, this.pageRevision = c, this.status = u, this.targetTitle = d;
  }
}
const ha = "original", fa = "empty", v_ = {
  Elia: "Elia.eus",
  Google: "Google Translate",
  Yandex: "Yandex.Translate"
};
class ne {
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
    selected: r = !1
  } = {}) {
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = Ge(me({}, a), {
      [ne.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [ne.EMPTY_TEXT_PROVIDER_KEY]: ""
    }), this.selected = r;
  }
  reset() {
    this.proposedTranslations = {
      [ne.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalContent,
      [ne.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedContent = "", this.mtProviderUsed = "", this.selected = !1;
  }
  /**
   * @return {string}
   */
  get originalContent() {
    return this.proposedTranslations[ne.ORIGINAL_TEXT_PROVIDER_KEY];
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
const ju = (e) => {
  var n;
  const t = vi(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, vi = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, eo = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), Fm = (e) => {
  const t = vi(e);
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
      let c = !0;
      r[0] === "<nowiki>" ? (o = !0, c = !1) : r[0] === "</nowiki>" || r[0].match(/<nowiki\s*\/>/) ? c = !1 : r[0].match(/(?:\[\[)/) ? (a++, c = !1) : r[0].match(/(?:\]\])/) ? a > 0 && (a--, c = !1) : r[0].match(/(?:\{\{)/) ? (s++, c = !1) : r[0].match(/(?:\}\})/) ? s > 0 && (s--, c = !1) : r[0].match(/\|+/) && (s > 0 || a > 0) && (c = !1), c ? n += "<nowiki>" + r[0] + "</nowiki>" : n += r[0];
    }
  }
  return n;
}, Mm = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, Nm = (e) => {
  const t = Mm(e);
  return t == null ? void 0 : t.targetExists;
};
class or {
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
class ot {
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
    s && Nm(s) && (this.blockTemplateAdaptationInfo[t] = Mm(s));
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
    const t = vi(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? ju(this.transclusionNode) : null;
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
    return n && ju(n) || "";
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
    const o = vi(n);
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
      new or({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new or({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new or({
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
    if (!t || ne.isUserMTProvider(t))
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
  if (!e || !t)
    return 0;
  if (e === t)
    return 1;
  const o = Hu(e, n), s = Hu(t, n), a = b_(o, s), r = Math.max(o.length, s.length);
  return a / r;
}, b_ = (e, t) => {
  const n = e.length, o = t.length, s = Array(n + 1).fill().map(() => Array(o + 1).fill(0));
  for (let a = 1; a <= n; a++)
    for (let r = 1; r <= o; r++)
      e[a - 1] === t[r - 1] ? s[a][r] = s[a - 1][r - 1] + 1 : s[a][r] = Math.max(s[a - 1][r], s[a][r - 1]);
  return s[n][o];
}, Hu = function(e, t) {
  return e ? y_.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, Vc = mw.config.get(
  "wgContentTranslationUnmodifiedMTThresholdForPublish",
  95
), C_ = Vc - 10, k_ = [
  { status: "failure", value: 100 - Vc },
  { status: "warning", value: 100 - C_ },
  { status: "success", value: 100 }
], Um = (e, t, n) => {
  const o = qu(e).textContent, s = qu(t).textContent, a = 100 - 100 * x_(s, o, n);
  return Math.ceil(a);
}, $_ = (e) => k_.find((t) => e <= t.value).status, V_ = (e, t) => Um(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), E_ = () => (100 - Vc) / 100, qu = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, Xt = {
  calculateScore: Um,
  getScoreStatus: $_,
  getMTScoreForPageSection: V_,
  getMtModificationThreshold: E_
}, wa = "__LEAD_SECTION__";
class dc {
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
      [ne.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [ne.EMPTY_TEXT_PROVIDER_KEY]: ""
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
      [ne.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalTitle,
      [ne.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedTitle = "", this.subSections.forEach((t) => t.reset());
  }
  static get LEAD_SECTION_DUMMY_TITLE() {
    return wa;
  }
  static isSectionLead(t) {
    return !t || t === wa;
  }
  set originalTitle(t) {
    this.proposedTitleTranslations[ne.ORIGINAL_TEXT_PROVIDER_KEY] = t;
  }
  /**
   * @return {string}
   */
  get originalTitle() {
    return this.proposedTitleTranslations[ne.ORIGINAL_TEXT_PROVIDER_KEY];
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
      let c = "";
      r && (c = r.innerHTML), a.editedTranslation = c;
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
    return n instanceof ot ? n.transclusionNode.outerHTML : n instanceof Mn ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof ot ? t.blockTemplateSelected = !1 : t instanceof Mn && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof ot ? n.blockTemplateSelected = !0 : n instanceof Mn && (n.selected = !0);
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
    if (o instanceof ot)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof ot ? n.blockTemplateProposedTranslations[t] || "" : n instanceof Mn ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof ot ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof Mn && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
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
class Ec extends Ci {
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
    startTimestamp: c,
    lastUpdatedTimestamp: u,
    status: d,
    pageRevision: i,
    targetTitle: l,
    sourceSectionTitle: g,
    targetSectionTitle: p,
    progress: m
  }) {
    super({
      translationId: n,
      sourceTitle: s,
      sourceLanguage: a,
      targetLanguage: r,
      startTimestamp: c,
      lastUpdatedTimestamp: u,
      pageRevision: i,
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
    return dc.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? dc.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const Pt = "previous-edits", Wt = "popular", Ue = "topic", ht = "geography", re = "collections", wt = "automatic", _t = "seed", Gu = window.Vue.ref, L_ = mw.loader.require("ext.cx.articletopics"), _a = {
  type: wt,
  id: Pt
}, Lc = () => {
  const e = Gu(
    L_.flatMap((s) => s.topics).map((s) => s.topicId.toLowerCase())
  ), t = Gu(!1);
  return { filtersValidatorError: t, validateFilters: ({ type: s, id: a }, r = !1) => {
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
      if (c === Ue) {
        if (!e.value.some((d) => d === a))
          throw new Error();
        return { type: c, id: u };
      } else if (c === re) {
        if (r && !r.some((d) => d.name.toLowerCase() === u))
          throw new Error();
        return { type: c, id: a };
      } else if (u === re) {
        if (r && !r.length)
          throw new Error();
        return {
          type: wt,
          id: re
        };
      } else if (c === _t)
        return { type: c, id: a };
    } catch (d) {
      return t.value = !0, _a;
    }
    return _a;
  }, isDefaultFilter: ({ type: s, id: a }) => s === _a.type && a === _a.id };
}, A_ = window.Vue.inject, D_ = window.Vue.reactive;
var T_ = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, Im = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(T_, function() {
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
      convertGrammar(i, l) {
        switch (l) {
          case "instrumental":
            i = "s " + i;
            break;
          case "lokativ":
            i = "o " + i;
        }
        return i;
      }
    }, default: s, dsb: class extends s {
      convertGrammar(i, l) {
        switch (l) {
          case "instrumental":
            i = "z " + i;
            break;
          case "lokatiw":
            i = "wo " + i;
        }
        return i;
      }
    }, fi: class extends s {
      convertGrammar(i, l) {
        let g = i.match(/[aou][^äöy]*$/i);
        const p = i;
        switch (i.match(/wiki$/i) && (g = !1), i.match(/[bcdfghjklmnpqrstvwxz]$/i) && (i += "i"), l) {
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
      convertGrammar(i, l) {
        if (l === "ainmlae")
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
      convertGrammar(i, l) {
        switch (l) {
          case "prefixed":
          case "תחילית":
            i.slice(0, 1) === "ו" && i.slice(0, 2) !== "וו" && (i = "ו" + i), i.slice(0, 1) === "ה" && (i = i.slice(1)), (i.slice(0, 1) < "א" || i.slice(0, 1) > "ת") && (i = "־" + i);
        }
        return i;
      }
    }, hsb: class extends s {
      convertGrammar(i, l) {
        switch (l) {
          case "instrumental":
            i = "z " + i;
            break;
          case "lokatiw":
            i = "wo " + i;
        }
        return i;
      }
    }, hu: class extends s {
      convertGrammar(i, l) {
        switch (l) {
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
      convertGrammar(i, l) {
        return l === "genitive" && (i.slice(-1) === "ա" ? i = i.slice(0, -1) + "այի" : i.slice(-1) === "ո" ? i = i.slice(0, -1) + "ոյի" : i.slice(-4) === "գիրք" ? i = i.slice(0, -4) + "գրքի" : i += "ի"), i;
      }
    }, la: class extends s {
      convertGrammar(i, l) {
        switch (l) {
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
      convertGrammar(i, l) {
        let g, p, m, h;
        switch (g = "мæ", p = "", m = "", h = "", i.match(/тæ$/i) ? (i = i.slice(0, -1), g = "æм") : i.match(/[аæеёиоыэюя]$/i) ? p = "й" : i.match(/у$/i) ? i.slice(-2, -1).match(/[аæеёиоыэюя]$/i) || (p = "й") : i.match(/[бвгджзйклмнопрстфхцчшщьъ]$/i) || (m = "-"), l) {
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
      convertGrammar(i, l) {
        return l === "genitive" && (i.slice(-1) === "ь" ? i = i.slice(0, -1) + "я" : i.slice(-2) === "ия" ? i = i.slice(0, -2) + "ии" : i.slice(-2) === "ка" ? i = i.slice(0, -2) + "ки" : i.slice(-2) === "ти" ? i = i.slice(0, -2) + "тей" : i.slice(-2) === "ды" ? i = i.slice(0, -2) + "дов" : i.slice(-3) === "ник" && (i = i.slice(0, -3) + "ника")), i;
      }
    }, sl: class extends s {
      convertGrammar(i, l) {
        switch (l) {
          case "mestnik":
            i = "o " + i;
            break;
          case "orodnik":
            i = "z " + i;
        }
        return i;
      }
    }, uk: class extends s {
      convertGrammar(i, l) {
        switch (l) {
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
          const m = p.match(r);
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
            function _(E) {
              return () => {
                for (let z = 0; z < E.length; z++) {
                  const qe = E[z]();
                  if (qe !== null)
                    return qe;
                }
                return null;
              };
            }
            function w(E) {
              const z = f, qe = [];
              for (let Kt = 0; Kt < E.length; Kt++) {
                const Yt = E[Kt]();
                if (Yt === null)
                  return f = z, null;
                qe.push(Yt);
              }
              return qe;
            }
            function y(E, z) {
              return () => {
                const qe = f, Kt = [];
                let Yt = z();
                for (; Yt !== null; )
                  Kt.push(Yt), Yt = z();
                return Kt.length < E ? (f = qe, null) : Kt;
              };
            }
            function x(E) {
              const z = E.length;
              return () => {
                let qe = null;
                return m.slice(f, f + z) === E && (qe = E, f += z), qe;
              };
            }
            function S(E) {
              return () => {
                const z = m.slice(f).match(E);
                return z === null ? null : (f += z[0].length, z[0]);
              };
            }
            const k = S(/^\s+/), A = x("|"), L = x(":"), B = x("\\"), J = S(/^./), U = x("$"), G = S(/^\d+/), Z = x('"'), Ce = x("'"), be = S(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), lt = S(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), Ae = _([M, S(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function M() {
              const E = w([B, J]);
              return E === null ? null : E[1];
            }
            const X = _([M, lt]), le = _([M, be]);
            function ce() {
              const E = w([U, G]);
              return E === null ? null : ["REPLACE", parseInt(E[1], 10) - 1];
            }
            const W = (se = S(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), ke = function(E) {
              return E.toString();
            }, () => {
              const E = se();
              return E === null ? null : ke(E);
            });
            var se, ke;
            function N() {
              const E = w([A, y(0, aa)]);
              if (E === null)
                return null;
              const z = E[1];
              return z.length > 1 ? ["CONCAT"].concat(z) : z[0];
            }
            function j() {
              const E = w([W, L, ce]);
              return E === null ? null : [E[0], E[2]];
            }
            function v() {
              const E = w([W, L, aa]);
              return E === null ? null : [E[0], E[2]];
            }
            function V() {
              const E = w([W, L]);
              return E === null ? null : [E[0], ""];
            }
            const D = _([function() {
              const E = w([_([j, v, V]), y(0, N)]);
              return E === null ? null : E[0].concat(E[1]);
            }, function() {
              const E = w([W, y(0, N)]);
              return E === null ? null : [E[0]].concat(E[1]);
            }]), F = x("{{"), H = x("}}"), ie = x("[["), O = x("]]"), I = x("["), ee = x("]");
            function Q() {
              const E = w([F, D, H]);
              return E === null ? null : E[1];
            }
            const te = _([function() {
              const E = w([y(1, aa), A, y(1, sa)]);
              return E === null ? null : [["CONCAT"].concat(E[0]), ["CONCAT"].concat(E[2])];
            }, function() {
              const E = w([y(1, aa)]);
              return E === null ? null : [["CONCAT"].concat(E[0])];
            }]);
            function oa() {
              let E = null;
              const z = w([ie, te, O]);
              if (z !== null) {
                const qe = z[1];
                E = ["WIKILINK"].concat(qe);
              }
              return E;
            }
            function He() {
              let E = null;
              const z = w([I, y(1, kf), k, y(1, sa), ee]);
              return z !== null && (E = ["EXTLINK", z[1].length === 1 ? z[1][0] : ["CONCAT"].concat(z[1]), ["CONCAT"].concat(z[3])]), E;
            }
            const Ui = S(/^[A-Za-z]+/);
            function yf() {
              const E = S(/^[^"]*/), z = w([Z, E, Z]);
              return z === null ? null : z[1];
            }
            function xf() {
              const E = S(/^[^']*/), z = w([Ce, E, Ce]);
              return z === null ? null : z[1];
            }
            function bf() {
              const E = S(/^\s*=\s*/), z = w([k, Ui, E, _([yf, xf])]);
              return z === null ? null : [z[1], z[3]];
            }
            function Cf() {
              const E = y(0, bf)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], E);
            }
            const kf = _([Q, ce, oa, He, function() {
              const E = y(1, Ae)();
              return E === null ? null : E.join("");
            }]), sa = _([Q, ce, oa, He, function() {
              let E = null;
              const z = f, qe = x("<"), Kt = S(/^\/?/), Yt = S(/^\s*>/), Ii = w([qe, Ui, Cf, Kt, Yt]);
              if (Ii === null)
                return null;
              const ru = f, lu = Ii[1], Ri = y(0, sa)(), $f = f, cu = w([x("</"), Ui, Yt]);
              if (cu === null)
                return ["CONCAT", m.slice(z, ru)].concat(Ri);
              const Vf = f, Ef = cu[1], uu = Ii[2];
              if (function(Rn, ia, zi, Oi = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((Rn = Rn.toLowerCase()) !== (ia = ia.toLowerCase()) || Oi.allowedHtmlElements.indexOf(Rn) === -1)
                  return !1;
                const Lf = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let ra = 0, Af = zi.length; ra < Af; ra += 2) {
                  const ji = zi[ra];
                  if (Oi.allowedHtmlCommonAttributes.indexOf(ji) === -1 && (Oi.allowedHtmlAttributesByElement[Rn] || []).indexOf(ji) === -1 || ji === "style" && zi[ra + 1].search(Lf) !== -1)
                    return !1;
                }
                return !0;
              }(lu, Ef, uu.slice(1)))
                E = ["HTMLELEMENT", lu, uu].concat(Ri);
              else {
                const Rn = (ia) => ia.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                E = ["CONCAT", Rn(m.slice(z, ru))].concat(Ri, Rn(m.slice($f, Vf)));
              }
              return E;
            }, function() {
              const E = y(1, le)();
              return E === null ? null : E.join("");
            }]), aa = _([Q, ce, function() {
              const E = y(1, X)();
              return E === null ? null : E.join("");
            }]), iu = function() {
              const E = y(0, sa)();
              return E === null ? null : ["CONCAT"].concat(E);
            }();
            if (iu === null || f !== m.length)
              throw new Error("Parse error at position " + f.toString() + " in input: " + m);
            return iu;
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
      constructor(i, { finalFallback: l = "en", messages: g, wikilinks: p = !1 } = {}) {
        this.locale = i, this.parser = new u(this.locale, { wikilinks: p }), this.messageStore = new d(), g && this.load(g, this.locale), this.finalFallback = l, this.wikilinks = p;
      }
      load(i, l) {
        return this.messageStore.load(i, l || this.locale);
      }
      i18n(i, ...l) {
        return this.parser.parse(this.getMessage(i), l);
      }
      setLocale(i) {
        this.locale = i, this.parser = new u(this.locale, { wikilinks: this.wikilinks });
      }
      getFallbackLocales() {
        return [...o[this.locale] || [], this.finalFallback];
      }
      getMessage(i) {
        let l = this.locale, g = 0;
        const p = this.getFallbackLocales(this.locale);
        for (; l; ) {
          const m = l.split("-");
          let h = m.length;
          do {
            const f = m.slice(0, h).join("-"), _ = this.messageStore.getMessage(i, f);
            if (typeof _ == "string")
              return _;
            h--;
          } while (h);
          l = p[g], g++;
        }
        return i;
      }
      registerParserPlugin(i, l) {
        c.prototype[i] = l;
      }
    };
  });
})(Im);
var B_ = Im.exports;
const Xu = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, Rm = Symbol("banana-context");
function pe() {
  const e = A_(Rm);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function P_(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = D_(new B_(e.locale, e));
  return {
    install: (n) => {
      n.provide(Rm, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: r } = Xu(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...r) : o.textContent = t.i18n(a, ...r);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: r } = Xu(s);
        o.innerHTML = t.i18n(a, ...r);
      });
    }
  };
}
const _n = window.Vue.ref, F_ = window.Vue.computed, ki = _n(null), $i = _n(null), Vi = _n(null), Ks = _n(null), Ac = _n(null), Ei = _n(null), zm = _n(null), Om = _n(null), Dc = _n(null), { validateFilters: M_, filtersValidatorError: N_ } = Lc(), jm = {
  from: ki,
  to: $i,
  section: Ks,
  draft: Ac,
  page: Vi,
  revision: Ei,
  "active-list": Dc
}, U_ = F_(() => ({
  type: zm.value,
  id: Om.value
})), Hm = (e, t) => {
  zm.value = e, Om.value = t, Si("filter-type", e), t && Si("filter-id", t);
}, I_ = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  e instanceof Ec && (n.draft = !0, n.revision = e.pageRevision, e.isLeadSectionTranslation || (n.section = e.sourceSectionTitle));
  for (const o in n) {
    const s = n[o];
    t.set(o, s), jm[o].value = s;
  }
  t.delete("title"), Ys(Object.fromEntries(t));
}, Tc = (e, t) => {
  jm[e].value = t, Si(e, t);
}, R_ = (e) => {
  Tc("section", e);
}, z_ = (e) => {
  Tc("page", e);
}, O_ = (e) => {
  Tc("active-list", e);
}, Ys = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    w_(`Special:ContentTranslation${t}`, e)
  );
}, j_ = () => {
  const e = pe(), t = new URLSearchParams(location.search);
  Vi.value = t.get("page"), ki.value = t.get("from"), $i.value = t.get("to"), Ks.value = t.get("section"), Ei.value = t.get("revision"), Dc.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
  const n = M_({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  Hm(n.type, n.id), N_.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, H_ = () => {
  const e = new URLSearchParams(location.search);
  Ks.value = null, e.delete("section"), e.delete("title"), Ys(Object.fromEntries(e));
}, Si = (e, t) => {
  const n = new URLSearchParams(location.search);
  t == null ? n.delete(e) : n.set(e, t), n.delete("title"), Ys(Object.fromEntries(n));
}, q_ = (e) => new URLSearchParams(location.search).get(e), G_ = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), ki.value = e, $i.value = t, n.delete("title"), Ys(Object.fromEntries(n));
}, X_ = () => {
  const e = new URLSearchParams(location.search);
  Vi.value = null, Ks.value = null, Ac.value = null, Ei.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("revision"), e.delete("title"), Ys(Object.fromEntries(e));
}, W_ = () => new URLSearchParams(location.search).get("force-quick-tutorial"), T = () => ({
  isQuickTutorialForced: W_,
  setLanguageURLParams: G_,
  setSectionURLParam: R_,
  setTranslationURLParams: I_,
  initializeURLState: j_,
  clearTranslationURLParameters: X_,
  clearSectionURLParameter: H_,
  setUrlParam: Si,
  getUrlParam: q_,
  pageURLParameter: Vi,
  sourceLanguageURLParameter: ki,
  targetLanguageURLParameter: $i,
  sectionURLParameter: Ks,
  draftURLParameter: Ac,
  revisionURLParameter: Ei,
  setPageURLParam: z_,
  currentSuggestionFilters: U_,
  setFilterURLParams: Hm,
  activeDashboardTabParameter: Dc,
  setActiveDashboardTabParameter: O_
}), K_ = () => Y.getLanguagePairs();
function Y_(e, t) {
  return C(this, null, function* () {
    const n = Y.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new ne(e, t, o.mt)
      )
    );
  });
}
function J_() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function Q_(e, t, n, o) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const s = mw.config.get("wgWikiID"), a = Y.getWikiDomainCode(e), r = Y.getWikiDomainCode(t), c = {
    action: "wblinktitles",
    fromsite: s.replace(r, a),
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
const Li = {
  fetchSupportedLanguageCodes: K_,
  fetchSupportedMTProviders: Y_,
  fetchCXServerToken: J_,
  addWikibaseLink: Q_
}, Bc = window.Vue.ref, Wu = Bc([]), Ku = Bc([]), Yu = Bc(!1);
function Js() {
  return {
    fetchSupportedLanguageCodes: () => C(this, null, function* () {
      if (!Yu.value) {
        Yu.value = !0;
        const t = yield Li.fetchSupportedLanguageCodes();
        Wu.value = t.sourceLanguages, Ku.value = t.targetLanguages;
      }
    }),
    supportedSourceLanguageCodes: Wu,
    supportedTargetLanguageCodes: Ku
  };
}
const Z_ = {
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
}, ev = {
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
}, tv = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], nv = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, ov = {
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
}, sv = {
  languages: Z_,
  scriptgroups: ev,
  rtlscripts: tv,
  regiongroups: nv,
  territories: ov
};
var Re = sv;
function Qs(e) {
  return !!Re.languages[e];
}
function In(e) {
  return Qs(e) && Re.languages[e].length === 1 ? Re.languages[e][0] : !1;
}
function av() {
  return Re.languages;
}
function Zs(e) {
  var t = In(e);
  return t ? Zs(t) : Qs(e) ? Re.languages[e][0] : "Zyyy";
}
function Pc(e) {
  var t = In(e);
  return t ? Pc(t) : Qs(e) && Re.languages[e][1] || "UNKNOWN";
}
function Os(e) {
  var t = In(e);
  return t ? Os(t) : Qs(e) && Re.languages[e][2] || e;
}
function iv() {
  var e, t = {};
  for (e in Re.languages)
    In(e) || (t[e] = Os(e));
  return t;
}
function qm(e) {
  var t, n, o = [];
  for (t in Re.languages)
    if (!In(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === Zs(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function rv(e) {
  return qm([e]);
}
function Gm(e) {
  var t;
  for (t in Re.scriptgroups)
    if (Re.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function Fc(e) {
  return Gm(Zs(e));
}
function Xm(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = In(n) || n, a = Fc(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Wm(e) {
  var t, n, o, s = {};
  for (t in Re.languages)
    if (!In(t)) {
      for (n = 0; n < e.length; n++)
        if (Pc(t).includes(e[n])) {
          o = Fc(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function lv(e) {
  return Wm([e]);
}
function cv(e) {
  var t, n, o, s = [];
  for (t = Xm(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function uv(e, t) {
  var n = Os(e) || e, o = Os(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function Km(e) {
  return Re.rtlscripts.includes(Zs(e));
}
function dv(e) {
  return Km(e) ? "rtl" : "ltr";
}
function gv(e) {
  return Re.territories[e] || [];
}
function pv(e, t) {
  t.target ? Re.languages[e] = [t.target] : Re.languages[e] = [t.script, t.regions, t.autonym];
}
var R = {
  addLanguage: pv,
  getAutonym: Os,
  getAutonyms: iv,
  getDir: dv,
  getGroupOfScript: Gm,
  getLanguages: av,
  getLanguagesByScriptGroup: Xm,
  getLanguagesByScriptGroupInRegion: lv,
  getLanguagesByScriptGroupInRegions: Wm,
  getLanguagesInScript: rv,
  getLanguagesInScripts: qm,
  getLanguagesInTerritory: gv,
  getRegions: Pc,
  getScript: Zs,
  getScriptGroupOfLanguage: Fc,
  isKnown: Qs,
  isRedirect: In,
  isRtl: Km,
  sortByScriptGroup: cv,
  sortByAutonym: uv
};
const oo = window.Vue.computed;
function Le(e) {
  const t = oo(() => e.state.application.sourceLanguage), n = oo(() => e.state.application.targetLanguage), o = oo(
    () => e.state.application.currentMTProvider
  ), s = oo(
    () => R.getAutonym(t.value)
  ), a = oo(
    () => R.getAutonym(n.value)
  ), r = oo(() => e.state.application.previousRoute);
  return {
    currentMTProvider: o,
    previousRoute: r,
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
    pageid: r,
    pagelanguage: c,
    pageprops: u,
    pageviews: d,
    thumbnail: i = null,
    title: l,
    revisions: g,
    _alias: p,
    content: m = null,
    sections: h = []
  } = {}) {
    var f;
    this.language = c, this.title = l, this.pageId = r, this.description = t, this.image = s, this.imageName = a, this.pageprops = u, this.pageviews = d, this.thumbnail = i, this.langLinksCount = n, this.articleSize = (f = g == null ? void 0 : g[0]) == null ? void 0 : f.size, this.revision = o, this.alias = p, this.wikidataId = u == null ? void 0 : u.wikibase_item, this.content = m, this.sections = h;
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
class mv {
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
function hv() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const fv = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), hv();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, wv = (e, t) => {
  let n, o;
  return t ? (n = fv(e), o = n.$element.find(
    "section[rel='cx:Section']"
  ).map((a, r) => {
    const c = $(r).data("view").getModel();
    if (c)
      return ve.dm.converter.getDomFromNode(
        c,
        // CLIPBOARD_MODE helps to copy the data-mw from elsewhere to
        // to the local nodes
        ve.dm.Converter.static.CLIPBOARD_MODE
      ).body.children[0];
  }), n.destroy()) : o = $(e).filter("section[rel='cx:Section']"), o;
}, _v = (e, t) => {
  const n = Array.from(
    wv(e, t)
  );
  return vv(n).map(
    /**
     * @param {Node[]} sectionNodes
     * @return {PageSection}
     */
    (s) => {
      const [a, ...r] = s;
      let c = "";
      const u = a.dataset.mwSectionNumber;
      a.querySelector("h2") ? c = a.textContent.trim() : r.unshift(a);
      const d = r.map(
        /**
         * @param {Node} node
         * @return {SubSection}
         */
        (l) => new ot({
          sentences: Sv(l),
          node: l
        })
      ), i = !c;
      return new dc({ id: u, title: c, subSections: d, isLeadSection: i });
    }
  );
}, vv = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, Sv = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new Mn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), Ym = {
  convertSegmentedContentToPageSections: _v
}, Mc = 120, yv = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: Mc,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return Y.getApi(e).get(n).then((s) => {
    const a = s.query.pages, c = (s.query.redirects || []).reduce(
      (i, l) => Ge(me({}, i), { [l.to]: l.from }),
      {}
    ), d = (s.query.normalized || []).reduce(
      (i, l) => Ge(me({}, i), {
        [l.to]: l.from
      }),
      {}
    );
    return a.map((i) => {
      const l = d[i.title] || c[i.title] || null;
      return new Po(Ge(me({}, i), { _alias: l }));
    });
  });
}, xv = (e, t) => {
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
  return Y.getApi(e).get(n).then((s) => {
    var u, d;
    const a = s.query.pages;
    if (!a || !a.length || (u = a[0]) != null && u.missing)
      return null;
    const r = [{ lang: e, title: t }, ...a[0].langlinks || []], c = (d = a[0].pageprops) == null ? void 0 : d.wikibase_item;
    return c ? Object.freeze(new mv(c, r)) : null;
  });
}, bv = (e, t, n) => {
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
  return Y.getApi(e).get(o).then((a) => Object.values(a.query.pages).map((c) => {
    var u, d;
    return (d = (u = c.langlinks) == null ? void 0 : u[0]) == null ? void 0 : d["*"];
  }).filter((c) => !!c));
}, Cv = (e, t, n, o = null) => Jm(
  e,
  t,
  n,
  o
).then(
  (s) => new Po({
    sections: Ym.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), Jm = (e, t, n, o = null) => {
  const s = Y.getWikiDomainCode(e), a = Y.getWikiDomainCode(t), r = {
    $sourcelanguage: s,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let c = "/page/$sourcelanguage/$targetlanguage/$title";
  o && (r.$revision = o, c += "/$revision");
  const u = Y.getCXServerUrl(
    c,
    r
  );
  return fetch(u).then((d) => d.json()).then((d) => d.segmentedContent);
}, kv = (e) => C(void 0, null, function* () {
  const t = __();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: Mc,
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
  return yield Y.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new Po(s))).catch((o) => []);
}), $v = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: Mc,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return Y.getApi(t).get(o).then((s) => {
    var a;
    return ((a = s.query) == null ? void 0 : a.pages) || [];
  }).then(
    (s) => s.sort((a, r) => a.index - r.index).map(
      (a) => new Po(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, no = {
  fetchPages: yv,
  fetchLanguageTitles: xv,
  fetchPageContent: Cv,
  fetchSegmentedContent: Jm,
  fetchNearbyPages: kv,
  searchPagesByTitlePrefix: $v,
  fetchLanguageLinksForLanguage: bv
}, Vv = window.Vuex.useStore, Fo = () => {
  const e = Vv();
  return (t, n) => {
    n = n.filter(
      (a) => !e.getters["mediawiki/getPage"](t, a)
    );
    const o = 50, s = [];
    for (let a = 0; a < n.length; a += o) {
      const r = n.slice(a, a + o), c = no.fetchPages(t, r).then(
        (u) => u.forEach(
          (d) => e.commit("mediawiki/addPage", d)
        )
      );
      s.push(c);
    }
    return Promise.all(s);
  };
}, Ev = window.Vuex.useStore, Nc = () => {
  const e = Ev(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = T(), { maxSuggestionsPerSlice: s } = e.state.suggestions, a = () => e.getters["suggestions/getSectionSuggestionsForPair"](t.value, n.value).filter(
    (i) => i.matchesFilter(o.value)
  ), r = (d) => a().slice(
    s * d,
    s * (d + 1)
  ), c = () => e.getters["suggestions/getPageSuggestionsForPair"](t.value, n.value).filter(
    (i) => i.matchesFilter(o.value)
  );
  return {
    getFilteredPageSuggestions: c,
    getFilteredSectionSuggestions: a,
    getPageSuggestionsSliceByIndex: (d) => c().slice(
      s * d,
      s * (d + 1)
    ),
    getSectionSuggestionsSliceByIndex: r
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
   * @param {string|null} options.suggestionSeed
   * @param {{ type: String, id: String }|null} options.suggestionProvider
   */
  constructor({
    sourceLanguage: t,
    targetLanguage: n,
    sourceTitle: o,
    targetTitle: s,
    langLinksCount: a,
    wikidataId: r,
    suggestionSeed: c = null,
    suggestionProvider: u = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.wikidataId = r, this.langLinksCount = a, this.suggestionProvider = u, this.suggestionSeed = c, this.isListable = !0;
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
   * @param {string|null} options.suggestionSeed
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
    sourceSections: c = [],
    targetSections: u = [],
    suggestionSeed: d = null,
    isListable: i = !0,
    suggestionProvider: l = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.missingSections = r, this.presentSections = a, this.sourceSections = c, this.targetSections = u, this.suggestionSeed = d, this.isListable = i, this.suggestionProvider = l;
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
const Qm = [
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
], Lv = [
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
], Av = [
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
], Dv = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], Tv = [
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
], Bv = {
  en: Qm,
  es: Lv,
  bn: Av,
  fr: Dv,
  de: Tv
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
class Uc {
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
class Zm extends Mo {
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
    suggestionProvider: c = null,
    collection: u = {}
  }) {
    super({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: o,
      targetTitle: s,
      langLinksCount: a,
      wikidataId: r,
      suggestionProvider: c
    }), this.collection = new Uc(u);
  }
}
class eh extends to {
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
    sourceSections: c = [],
    targetSections: u = [],
    isListable: d = !0,
    suggestionProvider: i = null,
    collection: l = {}
  }) {
    super({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: o,
      targetTitle: s,
      present: a,
      missing: r,
      sourceSections: c,
      targetSections: u,
      isListable: d,
      suggestionProvider: i
    }), this.collection = new Uc(l);
  }
}
const Pv = Qm, vn = (n) => C(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
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
function Fv() {
  return C(this, null, function* () {
    const e = {}, t = "/page-collections";
    try {
      return ((yield vn({ urlPostfix: t, urlParams: e })) || []).map((o) => new Uc(o));
    } catch (n) {
      return mw.log.error(
        "Error while fetching the page collections from Recommendation API",
        n
      ), [];
    }
  });
}
function Mv(e, t, n = null, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      count: o
    };
    return n && (s.seed = n), ((yield vn({ urlParams: s })) || []).map(
      (r) => new Mo({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        langLinksCount: parseInt(r.sitelink_count),
        suggestionSeed: n
      })
    );
  });
}
const Nv = (e, t) => C(void 0, null, function* () {
  return ((yield vn({ urlParams: {
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
}), Uv = (e, t) => C(void 0, null, function* () {
  const s = (yield vn({ urlParams: {
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
}), Iv = (e, t, n = null) => C(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  return n && (o.seed = n), ((yield vn({ urlParams: o })) || []).map(
    (a) => new Zm({
      sourceTitle: a.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: a.wikidata_id,
      langLinksCount: parseInt(a.langlinks_count),
      collection: a.collection
    })
  );
}), Rv = (e, t, n = null) => C(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  n && (o.seed = n);
  const a = (yield vn({ urlPostfix: "/sections", urlParams: o })) || [];
  return a && a.map(
    (r) => new eh({
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
function zv(e, t, n) {
  return C(this, null, function* () {
    const o = [t, e, n].map(
      (r) => encodeURIComponent(r)
    ), s = Y.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (r) => r.ok ? r.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((r) => r == null ? void 0 : r.sections).catch((r) => null);
    return a ? new to(a) : null;
  });
}
function Ov(e, t, n = null) {
  return C(this, null, function* () {
    const o = {
      source: e,
      target: t,
      count: 24
    };
    n && (o.seed = n);
    const a = (yield vn({ urlPostfix: "/sections", urlParams: o })) || [];
    return a && a.map(
      (r) => new to({
        sourceLanguage: e,
        targetLanguage: t,
        sourceTitle: r.source_title,
        targetTitle: r.target_title,
        sourceSections: r.source_sections,
        targetSections: r.target_sections,
        present: r.present,
        missing: r.missing,
        seed: n
      })
    );
  });
}
function jv(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    return ((yield vn({ urlParams: s })) || []).map(
      (r) => new Mo({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
function Hv(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    }, r = (yield vn({ urlPostfix: "/sections", urlParams: s })) || [];
    return r && r.map(
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
function qv(e) {
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
    }, n = Y.getApi(e);
    try {
      const a = (yield n.get(t)).query.usercontribs.map((r) => r.title);
      return [...new Set(a)];
    } catch (o) {
      return mw.log.error("Error while fetching suggestion seeds", o), [];
    }
  });
}
function Gv(e, t) {
  return C(this, null, function* () {
    const n = {
      action: "parse",
      format: "json",
      formatversion: 2,
      prop: "sections",
      page: t
    }, o = Y.getApi(e);
    try {
      return (yield o.get(n)).parse;
    } catch (s) {
      return mw.log.error("Error while fetching suggestion sections size", s), [];
    }
  });
}
function Xv(e) {
  const t = Pv.map((o) => encodeURIComponent(o)).join("|"), n = Y.getCXServerUrl(
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
    var a, r;
    const o = n.query.contenttranslationsuggestions.lists || {};
    return (((r = (a = Object.values(o)) == null ? void 0 : a[0]) == null ? void 0 : r.suggestions) || []).map((c) => new Eo(c));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
}, fe = {
  fetchFavorites: Yv,
  fetchPageSuggestions: Mv,
  fetchSectionSuggestion: zv,
  fetchSectionSuggestions: Ov,
  fetchAppendixTargetSectionTitles: Xv,
  fetchSuggestionSourceSections: Gv,
  markFavorite: Wv,
  unmarkFavorite: Kv,
  fetchUserEdits: qv,
  fetchMostPopularPageSuggestions: Nv,
  fetchMostPopularSectionSuggestions: Uv,
  fetchPageSuggestionsByTopics: jv,
  fetchSectionSuggestionsByTopics: Hv,
  fetchPageCollections: Fv,
  fetchPageSuggestionsByCollections: Iv,
  fetchSectionSuggestionsByCollections: Rv
}, Jv = window.Vuex.useStore, ea = () => {
  const e = Jv(), { sourceLanguage: t, targetLanguage: n } = Le(e), o = (c) => {
    if (!c)
      return !1;
    const u = e.getters["suggestions/getFavoriteTitlesByLanguagePair"](t.value, n.value), i = e.getters["translator/getTranslationsForLanguagePair"](t.value, n.value).map((l) => l.sourceTitle);
    return !u.includes(c.sourceTitle) && !i.includes(c.sourceTitle);
  }, s = (c) => {
    const { pageSuggestions: u } = e.state.suggestions;
    return !u.some(
      (i) => i.sourceLanguage === c.sourceLanguage && i.targetLanguage === c.targetLanguage && i.sourceTitle === c.sourceTitle
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
const Zv = window.Vuex.useStore, Ic = window.Vue.ref, eS = Ic([]), tS = Ic([]);
let sr = !1, ar = !1, Ju = !1;
const va = Ic([]);
let Ho = null;
const ir = {
  page: eS,
  section: tS
}, th = () => {
  const e = Zv(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = T(), o = () => C(void 0, null, function* () {
    ar || (va.value = yield fe.fetchUserEdits(t.value).then((d) => (ar = !0, d)));
  }), s = () => C(void 0, null, function* () {
    let d = e.getters["translator/getTranslationsByStatus"]("published");
    if (d = d.filter(
      (i) => i.sourceLanguage === t.value
    ), d.length && !sr)
      return sr = !0, d.map(
        (i) => i.sourceTitle
      );
    if (sr = !0, !ar && (yield o(), va.value.length > 0))
      return va.value;
    if (!Ju) {
      const i = yield fe.fetchUserEdits(n.value).then((l) => (Ju = !0, l));
      if (i.length)
        return no.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          i
        );
    }
    return null;
  }), a = (d) => {
    let i = ir[d].value.find(
      (l) => l.matchesLanguagePair(t.value, n.value)
    );
    return i || (i = new Qv({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), ir[d].value.push(i)), i;
  }, r = () => C(void 0, null, function* () {
    let d = !1, i = [];
    do {
      i = yield s(), i || (d = !0);
      for (const l in ir) {
        const g = a(l);
        g.seeds = [
          ...g.seeds,
          ...i || []
        ];
      }
    } while (!d && !(i != null && i.length));
  }), c = () => Ho || (Ho = r(), Ho.finally(() => {
    Ho = null;
  }));
  return {
    getSuggestionSeed: (d) => C(void 0, null, function* () {
      let i = a(d);
      return i.seeds.length || (yield c()), i.shiftSeeds();
    }),
    fetchPreviousEditsInSource: o,
    previousEditsInSource: va
  };
}, nS = 5;
function Lo(e) {
  return C(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < nS);
  });
}
const oS = window.Vuex.useStore, sS = () => {
  const e = oS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = T(), { getSuggestionSeed: o } = th(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = ea(), c = {
    id: Pt,
    type: wt
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (i) => C(void 0, null, function* () {
      const l = [];
      return yield Lo(() => C(void 0, null, function* () {
        const g = yield o("page");
        let p = yield fe.fetchPageSuggestions(
          t.value,
          n.value,
          g || null
        );
        return p = p.filter(
          (m) => a(m)
        ), p = p.slice(0, i), l.push(...p), l.length >= i;
      })), l.forEach(
        (g) => g.suggestionProvider = c
      ), l;
    }),
    fetchSectionSuggestionsBasedOnEdits: (i) => C(void 0, null, function* () {
      const l = [];
      return yield Lo(() => C(void 0, null, function* () {
        const g = yield o("section"), p = yield fe.fetchSectionSuggestions(
          t.value,
          n.value,
          g || null
        );
        if (!p)
          return !1;
        let m = p.filter(
          (f) => s(f)
        );
        const h = p.filter(
          (f) => !s(f)
        );
        return m = m.slice(0, i), l.push(...m), h.forEach((f) => {
          f && !r(f) && (f.isListable = !1, e.commit("suggestions/addSectionSuggestion", f));
        }), l.length >= i;
      })), l.forEach(
        (g) => g.suggestionProvider = c
      ), l;
    })
  };
}, aS = window.Vuex.useStore, iS = () => {
  const e = aS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = T(), o = {
    id: Wt,
    type: wt
  }, {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = ea();
  return { fetchSectionSuggestionsPopular: (d) => C(void 0, null, function* () {
    const i = [];
    return yield Lo(() => C(void 0, null, function* () {
      const l = yield fe.fetchMostPopularSectionSuggestions(
        t.value,
        n.value
      );
      let g = l.filter(
        (m) => s(m)
      );
      const p = l.filter(
        (m) => !s(m)
      );
      return g = g.slice(0, d), i.push(...g), p.forEach((m) => {
        m && !r(m) && (m.isListable = !1, e.commit("suggestions/addSectionSuggestion", m));
      }), i.length >= d;
    })), i.forEach(
      (l) => l.suggestionProvider = o
    ), i;
  }), fetchPageSuggestionsPopular: (d) => C(void 0, null, function* () {
    const i = [];
    return yield Lo(() => C(void 0, null, function* () {
      let l = yield fe.fetchMostPopularPageSuggestions(
        t.value,
        n.value
      );
      return l = l.filter(
        (g) => a(g)
      ), l = l.slice(0, d), i.push(...l), i.length >= d;
    })), i.forEach(
      (l) => l.suggestionProvider = o
    ), i;
  }) };
}, nh = window.Vue.ref, rr = nh([]), Qu = nh(!1), Rc = () => ({ pageCollections: rr, fetchPageCollections: () => C(void 0, null, function* () {
  try {
    rr.value = yield fe.fetchPageCollections(), rr.value.sort((t, n) => t.name.localeCompare(n.name)), Qu.value = !0;
  } catch (t) {
    mw.log.error("Failed to fetch page collections", t);
  }
}), pageCollectionsFetched: Qu });
class gc {
  /**
   * @param {string} id
   * @param {string} label
   * @param {{ id: string, label: string, type: string }[]} filters
   */
  constructor({ id: t, label: n, filters: o }) {
    this.id = t, this.label = n, this.filters = o;
  }
}
const Sa = window.Vue.computed, Zu = mw.loader.require("ext.cx.articletopics"), rS = (e) => new gc({
  id: e.groupId,
  label: e.label,
  filters: e.topics.map((t) => ({
    id: t.topicId,
    label: t.label,
    type: Ue
  }))
}), zc = () => {
  const e = pe(), { currentSuggestionFilters: t, setFilterURLParams: n } = T(), { validateFilters: o, filtersValidatorError: s } = Lc(), a = {
    id: Pt,
    type: wt,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }, r = {
    id: Wt,
    type: wt,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }, c = {
    id: re,
    type: wt,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }, { pageCollections: u, pageCollectionsFetched: d } = Rc(), i = Sa(() => {
    const S = new gc({
      id: wt,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [a, r]
    });
    return u.value.length && S.filters.push(c), S;
  }), l = (S) => ({
    id: S.name,
    label: S.name,
    type: re
  }), g = Sa(
    () => new gc({
      id: "collections",
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: u.value.map(
        (S) => l(S)
      )
    })
  ), p = Sa(() => {
    const S = [
      i.value,
      ...Zu.map(rS)
    ];
    return u.value.length && S.splice(1, 0, g.value), S;
  }), m = Sa(
    () => [t.value.type, t.value.id].includes(
      re
    ) && !d.value
  ), h = () => {
    if (m.value)
      return [];
    const S = _();
    return S.type === Ue || S.type === _t || S.type === re || S.id === re ? [S, a] : [a, r];
  }, f = (S) => {
    n(S.type, S.id);
  }, _ = () => t.value.type === _t ? {
    id: t.value.id,
    label: t.value.id,
    type: t.value.type
  } : p.value.flatMap((S) => S.filters).find(w), w = (S) => t.value.id === S.id;
  return {
    allFilters: p,
    getFiltersSummary: h,
    selectFilter: f,
    isFilterSelected: w,
    getArticleTopics: (S) => {
      const A = Zu.flatMap((L) => L.topics).find((L) => L.topicId === S);
      return A ? A.articletopics : [];
    },
    waitingForPageCollectionsFetch: m,
    findSelectedFilter: _,
    validateURLFilterWithCollections: () => {
      if (!d.value)
        return;
      const S = o(
        {
          type: t.value.type,
          id: t.value.id
        },
        u.value
      );
      n(S.type, S.id), s.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
    }
  };
}, lS = window.Vuex.useStore, cS = () => {
  const e = lS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = T(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = ea(), { getArticleTopics: c } = zc();
  return {
    fetchPageSuggestionsByTopics: (i) => C(void 0, null, function* () {
      const l = o.value.id, g = {
        id: l,
        type: Ue
      }, p = c(l);
      let m = yield fe.fetchPageSuggestionsByTopics(
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
    fetchSectionSuggestionsByTopics: (i) => C(void 0, null, function* () {
      const l = o.value.id, g = {
        id: l,
        type: Ue
      }, p = c(l), m = [];
      return yield Lo(() => C(void 0, null, function* () {
        const h = yield fe.fetchSectionSuggestionsByTopics(
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
}, uS = window.Vuex.useStore, dS = window.Vue.computed, gS = () => {
  const e = uS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = T(), s = dS(() => {
    var i;
    return ((i = o.value) == null ? void 0 : i.type) !== re ? null : o.value.id;
  }), {
    isSectionSuggestionValid: a,
    isPageSuggestionValid: r,
    sectionSuggestionExists: c
  } = ea();
  return {
    fetchSectionSuggestionsByCollections: () => C(void 0, null, function* () {
      const i = [], l = yield fe.fetchSectionSuggestionsByCollections(
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
      return i.push(...g), p.forEach((m) => {
        m && !c(m) && (m.isListable = !1, e.commit("suggestions/addSectionSuggestion", m));
      }), i.forEach(
        (m) => m.suggestionProvider = o.value
      ), i;
    }),
    fetchPageSuggestionsByCollections: () => C(void 0, null, function* () {
      const i = [];
      let l = yield fe.fetchPageSuggestionsByCollections(
        t.value,
        n.value,
        s.value
      );
      return l = l.filter(
        (g) => r(g)
      ), i.push(...l), i.forEach(
        (g) => g.suggestionProvider = o.value
      ), i;
    })
  };
}, pS = window.Vuex.useStore, mS = () => {
  const e = pS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = T(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = ea();
  return {
    fetchPageSuggestionsBySeed: (d) => C(void 0, null, function* () {
      const i = o.value.id;
      let l = yield fe.fetchPageSuggestions(
        t.value,
        n.value,
        i
      );
      return l = l.filter(
        (g) => a(g)
      ), l = l.slice(0, d), l.forEach(
        (g) => g.suggestionProvider = {
          id: i,
          type: _t
        }
      ), l;
    }),
    fetchSectionSuggestionsBySeed: (d) => C(void 0, null, function* () {
      const i = [], l = o.value.id;
      return yield Lo(() => C(void 0, null, function* () {
        const g = yield fe.fetchSectionSuggestions(
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
        return p = p.slice(0, d), i.push(...p), m.forEach((h) => {
          h && !r(h) && (h.isListable = !1, e.commit("suggestions/addSectionSuggestion", h));
        }), i.length >= d;
      })), i.forEach(
        (g) => g.suggestionProvider = {
          id: l,
          type: _t
        }
      ), i;
    })
  };
}, Ai = () => {
  const { currentSuggestionFilters: e } = T(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = sS(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = iS(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = cS(), {
    fetchPageSuggestionsByCollections: c,
    fetchSectionSuggestionsByCollections: u
  } = gS(), { fetchPageSuggestionsBySeed: d, fetchSectionSuggestionsBySeed: i } = mS(), l = {
    [Pt]: t,
    [Wt]: o,
    [re]: c,
    [Ue]: a,
    [_t]: d
  }, g = {
    [Pt]: n,
    [Wt]: s,
    [re]: u,
    [Ue]: r,
    [_t]: i
  }, p = (f) => f.type === wt ? f.id : f.type;
  return {
    getFilterProvider: p,
    getCurrentPageSuggestionProvider: () => l[p(e.value)],
    getCurrentSectionSuggestionProvider: () => g[p(e.value)]
  };
}, hS = window.Vuex.useStore, Oc = () => {
  const e = hS(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = Nc(), { sourceLanguageURLParameter: o } = T(), s = Fo(), a = () => {
    const g = t(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, r = () => {
    const g = n(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, {
    getCurrentPageSuggestionProvider: c,
    getCurrentSectionSuggestionProvider: u
  } = Ai(), d = (g) => {
    try {
      const p = g.map((m) => m.sourceTitle);
      if (p.length)
        return s(o.value, p);
    } catch (p) {
      mw.log.error("Page suggestions fetching failed!");
    }
  };
  return {
    fetchNextSectionSuggestionsSlice: () => C(void 0, null, function* () {
      e.commit("suggestions/setIsSectionSuggestionsFetchPending", !1), e.commit("suggestions/increaseSectionSuggestionsLoadingCount");
      const g = a(), m = yield u()(
        g
      );
      m.forEach(
        (h) => e.commit("suggestions/addSectionSuggestion", h)
      ), d(m), e.commit("suggestions/decreaseSectionSuggestionsLoadingCount");
    }),
    fetchNextPageSuggestionsSlice: () => C(void 0, null, function* () {
      e.commit("suggestions/setIsPageSuggestionsFetchPending", !1), e.commit("suggestions/increasePageSuggestionsLoadingCount");
      const g = r(), m = yield c()(
        g
      );
      m.forEach(
        (h) => e.commit("suggestions/addPageSuggestion", h)
      ), d(m), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, fS = window.Vuex.useStore, oh = () => {
  const e = fS();
  return (t) => C(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield fe.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, wS = window.Vuex.useStore, sh = () => {
  const e = wS(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = Oc(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = Nc(), { targetLanguageURLParameter: a } = T(), r = oh();
  return () => C(void 0, null, function* () {
    const c = s(0), u = o(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, i = c.length === d, l = u.length === d;
    i && l || (yield r(a.value), t(), n());
  });
}, _S = window.Vuex.useStore, ah = () => {
  const e = _S(), t = Fo();
  return (n, o, s) => C(void 0, null, function* () {
    let a = e.getters["suggestions/getSectionSuggestionsForArticle"](n, o, s);
    if (!a) {
      a = yield fe.fetchSectionSuggestion(
        n,
        s,
        o
      );
      try {
        if (yield t(n, [s]), a)
          a.isListable = !1, e.commit("suggestions/addSectionSuggestion", a);
        else {
          const r = e.getters["mediawiki/getPage"](
            n,
            s
          );
          return new Mo({
            sourceLanguage: n,
            targetLanguage: o,
            sourceTitle: s,
            langLinksCount: r.langLinksCount,
            wikidataId: r.wikidataId
          });
        }
      } catch (r) {
        throw new Error(
          `No page metadata found for title ${s} and language pair ${n}-${o}`
        );
      }
    }
    return a;
  });
}, ed = window.Vue.computed, vS = window.Vuex.useStore, Sn = () => {
  const e = vS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = T(), s = ed(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = ed(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (c, u) => s.value.getTitleForLanguage(c) || s.value.getTitleForLanguage(u)
  };
}, ih = window.Vuex.useStore, { setLanguageURLParams: SS } = T(), jc = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), SS(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, rh = () => {
  const e = ih(), t = sh();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = Le(e);
    n === o && (n = a.value, o = s.value), jc(e, n, o), t();
  };
}, yS = () => {
  const e = ih(), t = ah(), { currentLanguageTitleGroup: n, targetPageExists: o } = Sn(), s = Fo();
  return (a, r) => C(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u,
      setPageURLParam: d,
      clearSectionURLParameter: i
    } = T();
    a === r && (a = u.value, r = c.value);
    const l = n.value.getTitleForLanguage(a);
    jc(e, a, r), d(l), o.value ? (i(), yield t(
      c.value,
      u.value,
      l
    )) : yield s(c.value, [l]);
  });
}, xS = window.Vuex.useStore, bS = window.Vue.ref, td = bS(!1), lh = () => {
  const e = xS(), {
    supportedSourceLanguageCodes: t,
    supportedTargetLanguageCodes: n,
    fetchSupportedLanguageCodes: o
  } = Js(), { sourceLanguageURLParameter: s, targetLanguageURLParameter: a } = T(), r = () => {
    const u = Y.getCurrentWikiLanguageCode(), d = (f) => t.value.includes(f), i = (f) => n.value.includes(f), l = {
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
      (f) => i(f)
    );
    return { sourceLanguage: p.find(
      (f) => d(f) && f !== m
    ), targetLanguage: m };
  };
  return { initializeApplicationLanguages: () => C(void 0, null, function* () {
    yield o();
    const { sourceLanguage: u, targetLanguage: d } = r();
    jc(e, u, d), td.value = !0;
  }), applicationLanguagesInitialized: td };
};
const CS = window.Vue.resolveDynamicComponent, nd = window.Vue.openBlock, od = window.Vue.createBlock, kS = window.Vue.Transition, qo = window.Vue.withCtx, Go = window.Vue.createVNode, $S = window.Vue.resolveComponent, lr = window.Vue.unref, VS = window.Vuex.useStore, sd = window.Vue.computed, ES = window.Vue.onMounted, LS = window.Vue.inject, AS = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = T(), { initializeApplicationLanguages: n } = lh();
    t(), n();
    const o = LS("breakpoints"), s = sd(() => o.value.mobile), a = VS(), r = sd(
      () => a.state.application.autoSavePending
    );
    return ES(() => {
      window.addEventListener("beforeunload", (c) => {
        r.value && (c.preventDefault(), c.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (c) => {
        document.visibilityState === "visible" && Pm.assertUser().then(() => a.commit("application/setIsLoginDialogOn", !1)).catch((u) => {
          u instanceof Bo && a.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (c, u) => {
      const d = $S("router-view");
      return nd(), od(lr(Fw), { id: "contenttranslation" }, {
        default: qo(() => [
          Go(lr(P), { class: "cx-container" }, {
            default: qo(() => [
              Go(lr(b), {
                class: "cx-container__wrapper-col",
                cols: "12"
              }, {
                default: qo(() => [
                  Go(d, null, {
                    default: qo(({ Component: i, route: l }) => [
                      Go(kS, {
                        name: s.value ? l.meta.transitionName : ""
                      }, {
                        default: qo(() => [
                          (nd(), od(CS(i)))
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
}, DS = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translatorStats: null
}, TS = {
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
class ch {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new ch(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const ad = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => Ge(me({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class BS {
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
    const t = ad((s = this.user) == null ? void 0 : s.content), n = ad((a = this.mt) == null ? void 0 : a.content);
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
class Hc extends Ci {
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
    pageRevision: c,
    status: u,
    targetTitle: d,
    targetUrl: i,
    sectionTranslations: l
  }) {
    super({
      translationId: t,
      sourceTitle: n,
      sourceLanguage: o,
      targetLanguage: s,
      startTimestamp: a,
      lastUpdatedTimestamp: r,
      pageRevision: c,
      status: u,
      targetTitle: d
    }), this.targetUrl = i, this.sectionTranslations = l;
  }
}
const Di = mw.user.isAnon() ? void 0 : "user", uh = (e) => {
  if (e === "assertuserfailed")
    throw new Bo();
};
function dh(e, t = null) {
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
      let r;
      if (e === "draft" ? r = a.map(
        (u) => new Ec(Ge(me({}, u), { status: e }))
      ) : r = a.map(
        (u) => new Hc(Ge(me({}, u), { status: e }))
      ), (c = s.continue) != null && c.offset) {
        const u = yield dh(
          e,
          s.continue.offset
        );
        r = r.concat(u);
      }
      return r;
    }));
  });
}
function PS(e) {
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
      (a) => new BS(a)
    );
  });
}
function FS(e, t, n, o, s) {
  return C(this, null, function* () {
    if (!o)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== ne.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const r = Y.getCXServerUrl(a);
    return fetch(r, {
      headers: { "Content-Type": "application/json", Authorization: s },
      method: "POST",
      body: JSON.stringify({ html: `<div>${o}</div>` })
    }).then(
      (c) => Promise.all([c.json(), Promise.resolve(c.ok)])
    ).then(([c, u]) => {
      var i, l;
      if (!u) {
        const g = c.detail || c.type || c.title || "fetchSegmentTranslation: Unknown error";
        throw new Error(g);
      }
      return (l = (i = new RegExp("<div>(?<content>(.|\\s)*)<\\/div>").exec(c.contents)) == null ? void 0 : i.groups) == null ? void 0 : l.content;
    }).catch((c) => Promise.reject(c));
  });
}
const MS = (e, t, n) => {
  const o = Y.getApi(t);
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
}, NS = ({
  html: e,
  sourceTitle: t,
  targetTitle: n,
  sourceSectionTitle: o,
  targetSectionTitle: s,
  sourceLanguage: a,
  targetLanguage: r,
  revision: c,
  captchaId: u,
  captchaWord: d,
  isSandbox: i,
  sectionTranslationId: l
}) => {
  const g = {
    assert: Di,
    action: "cxpublishsection",
    title: n,
    html: e,
    sourcetitle: t,
    sourcerevid: c,
    sourcesectiontitle: o,
    targetsectiontitle: s,
    sourcelanguage: a,
    targetlanguage: r,
    issandbox: i,
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
    uh(m);
    let f;
    return h = h || {}, h.exception ? f = h.exception.message : h.error ? f = h.error.info : f = "Unknown error", {
      publishFeedbackMessage: new Ao({
        text: f,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, US = ({
  sourceTitle: e,
  targetTitle: t,
  sourceSectionTitle: n,
  targetSectionTitle: o,
  sourceLanguage: s,
  targetLanguage: a,
  revision: r,
  units: c,
  sectionId: u,
  isSandbox: d,
  progress: i
}) => {
  const l = {
    assert: Di,
    action: "sxsave",
    targettitle: t,
    sourcetitle: e,
    sourcerevision: r,
    sourcesectiontitle: n,
    targetsectiontitle: o,
    sourcelanguage: s,
    targetlanguage: a,
    content: JSON.stringify(c),
    sectionid: u,
    issandbox: d,
    progress: JSON.stringify(i)
  };
  return new mw.Api().postWithToken("csrf", l).then((p) => p.sxsave.sectiontranslationid).catch((p, m) => {
    uh(p);
    let h;
    return m.exception ? h = m.exception.message : m.error ? h = m.error.info : h = "Unknown error", new Ao({ text: h, status: "error" });
  });
}, IS = (e) => {
  const t = {
    assert: Di,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, RS = () => {
  const e = {
    assert: Di,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new Hc(n.cxcheckunreviewed.translation)
  );
}, zS = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, OS = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, jS = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), vt = {
  fetchTranslations: dh,
  fetchTranslationUnits: PS,
  fetchSegmentTranslation: FS,
  parseTemplateWikitext: MS,
  publishTranslation: NS,
  saveTranslation: US,
  deleteTranslation: zS,
  fetchTranslatorStats: jS,
  deleteCXTranslation: OS,
  splitTranslation: IS,
  checkUnreviewedTranslations: RS
};
function HS(t) {
  return C(this, arguments, function* ({ commit: e }) {
    const n = yield vt.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const qS = {
  fetchTranslatorStats: HS
}, GS = {
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
}, XS = {
  namespaced: !0,
  state: DS,
  getters: TS,
  actions: qS,
  mutations: GS
}, WS = {
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
  appendixSectionTitles: Bv
}, KS = {
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
}, YS = {
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
}, JS = {
  namespaced: !0,
  state: WS,
  getters: KS,
  actions: {},
  mutations: YS
}, QS = {
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
}, ZS = {
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
  isValidProviderForTranslation: (e, t) => (n, o, s) => t.getSupportedMTProviders(n, o).includes(s) && s !== ne.EMPTY_TEXT_PROVIDER_KEY,
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
function ey(o) {
  return C(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: s } = t.application;
    if ((r = n.nearbyPages[s]) != null && r.length)
      return;
    const a = yield no.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const ty = { fetchNearbyPages: ey }, ny = {
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
}, oy = {
  namespaced: !0,
  state: QS,
  getters: ZS,
  actions: ty,
  mutations: ny
}, sy = {
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
}, ay = {
  /**
   * Returns a boolean indicating whether the current publishing target
   * is the user's sandbox
   *
   * @param {object} state
   * @return {boolean}
   */
  isSandboxTarget: (e) => e.publishTarget === "SANDBOX_SECTION"
}, iy = {
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
    const { sourceLanguage: n, targetLanguage: o } = e, s = ne.getStorageKey(
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
}, ry = {
  namespaced: !0,
  state: sy,
  getters: ay,
  actions: {},
  mutations: iy
}, ly = window.Vuex.createStore, cy = ly({
  modules: { translator: XS, suggestions: JS, mediawiki: oy, application: ry }
});
function uy() {
  return gh().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function gh() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const dy = typeof Proxy == "function", gy = "devtools-plugin:setup", py = "plugin:settings:set";
let so, pc;
function my() {
  var e;
  return so !== void 0 || (typeof window != "undefined" && window.performance ? (so = !0, pc = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (so = !0, pc = global.perf_hooks.performance) : so = !1), so;
}
function hy() {
  return my() ? pc.now() : Date.now();
}
class fy {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const o = {};
    if (t.settings)
      for (const r in t.settings) {
        const c = t.settings[r];
        o[r] = c.defaultValue;
      }
    const s = `__vue-devtools-plugin-settings__${t.id}`;
    let a = Object.assign({}, o);
    try {
      const r = localStorage.getItem(s), c = JSON.parse(r);
      Object.assign(a, c);
    } catch (r) {
    }
    this.fallbacks = {
      getSettings() {
        return a;
      },
      setSettings(r) {
        try {
          localStorage.setItem(s, JSON.stringify(r));
        } catch (c) {
        }
        a = r;
      },
      now() {
        return hy();
      }
    }, n && n.on(py, (r, c) => {
      r === this.plugin.id && this.fallbacks.setSettings(c);
    }), this.proxiedOn = new Proxy({}, {
      get: (r, c) => this.target ? this.target.on[c] : (...u) => {
        this.onQueue.push({
          method: c,
          args: u
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (r, c) => this.target ? this.target[c] : c === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(c) ? (...u) => (this.targetQueue.push({
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
    return C(this, null, function* () {
      this.target = t;
      for (const n of this.onQueue)
        this.target.on[n.method](...n.args);
      for (const n of this.targetQueue)
        n.resolve(yield this.target[n.method](...n.args));
    });
  }
}
function wy(e, t) {
  const n = e, o = gh(), s = uy(), a = dy && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(gy, e, t);
  else {
    const r = a ? new fy(n, s) : null;
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
const ph = window.Vue.getCurrentInstance, Do = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const Gt = window.Vue.computed, Is = window.Vue.unref, _y = window.Vue.watchEffect, mh = window.Vue.defineComponent, vy = window.Vue.reactive, hh = window.Vue.h, cr = window.Vue.provide, Sy = window.Vue.ref, fh = window.Vue.watch, yy = window.Vue.shallowRef, xy = window.Vue.shallowReactive, by = window.Vue.nextTick, wn = typeof window != "undefined";
function Cy(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const K = Object.assign;
function ur(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = at(s) ? s.map(e) : e(s);
  }
  return n;
}
const Rs = () => {
}, at = Array.isArray;
function q(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const ky = /\/$/, $y = (e) => e.replace(ky, "");
function dr(e, t, n = "/") {
  let o, s = {}, a = "", r = "";
  const c = t.indexOf("#");
  let u = t.indexOf("?");
  return c < u && c >= 0 && (u = -1), u > -1 && (o = t.slice(0, u), a = t.slice(u + 1, c > -1 ? c : t.length), s = e(a)), c > -1 && (o = o || t.slice(0, c), r = t.slice(c, t.length)), o = Ly(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + r,
    path: o,
    query: s,
    hash: r
  };
}
function Vy(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function id(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function rd(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && Un(t.matched[o], n.matched[s]) && wh(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Un(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function wh(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Ey(e[n], t[n]))
      return !1;
  return !0;
}
function Ey(e, t) {
  return at(e) ? ld(e, t) : at(t) ? ld(t, e) : e === t;
}
function ld(e, t) {
  return at(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function Ly(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return q(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const n = t.split("/"), o = e.split("/"), s = o[o.length - 1];
  (s === ".." || s === ".") && o.push("");
  let a = n.length - 1, r, c;
  for (r = 0; r < o.length; r++)
    if (c = o[r], c !== ".")
      if (c === "..")
        a > 1 && a--;
      else
        break;
  return n.slice(0, a).join("/") + "/" + o.slice(r - (r === o.length ? 1 : 0)).join("/");
}
var js;
(function(e) {
  e.pop = "pop", e.push = "push";
})(js || (js = {}));
var zs;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(zs || (zs = {}));
function Ay(e) {
  if (!e)
    if (wn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), $y(e);
}
const Dy = /^[^#]+#/;
function Ty(e, t) {
  return e.replace(Dy, "#") + t;
}
function By(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const Ti = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function Py(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if ({}.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const a = document.querySelector(e.el);
        if (o && a) {
          q(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch (a) {
        q(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) {
      ({}).NODE_ENV !== "production" && q(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = By(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function cd(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const mc = /* @__PURE__ */ new Map();
function Fy(e, t) {
  mc.set(e, t);
}
function My(e) {
  const t = mc.get(e);
  return mc.delete(e), t;
}
let Ny = () => location.protocol + "//" + location.host;
function _h(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let c = s.includes(e.slice(a)) ? e.slice(a).length : 1, u = s.slice(c);
    return u[0] !== "/" && (u = "/" + u), id(u, "");
  }
  return id(n, e) + o + s;
}
function Uy(e, t, n, o) {
  let s = [], a = [], r = null;
  const c = ({ state: g }) => {
    const p = _h(e, location), m = n.value, h = t.value;
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
        type: js.pop,
        direction: f ? f > 0 ? zs.forward : zs.back : zs.unknown
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
    g.state && g.replaceState(K({}, g.state, { scroll: Ti() }), "");
  }
  function l() {
    for (const g of a)
      g();
    a = [], window.removeEventListener("popstate", c), window.removeEventListener("beforeunload", i);
  }
  return window.addEventListener("popstate", c), window.addEventListener("beforeunload", i, {
    passive: !0
  }), {
    pauseListeners: u,
    listen: d,
    destroy: l
  };
}
function ud(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Ti() : null
  };
}
function Iy(e) {
  const { history: t, location: n } = window, o = {
    value: _h(e, n)
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
    const l = e.indexOf("#"), g = l > -1 ? (n.host && document.querySelector("base") ? e : e.slice(l)) + u : Ny() + e + u;
    try {
      t[i ? "replaceState" : "pushState"](d, "", g), s.value = d;
    } catch (p) {
      ({}).NODE_ENV !== "production" ? q("Error with push/replace State", p) : console.error(p), n[i ? "replace" : "assign"](g);
    }
  }
  function r(u, d) {
    const i = K({}, t.state, ud(
      s.value.back,
      // keep back and forward entries but override current position
      u,
      s.value.forward,
      !0
    ), d, { position: s.value.position });
    a(u, i, !0), o.value = u;
  }
  function c(u, d) {
    const i = K(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: u,
        scroll: Ti()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && q(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(i.current, i, !0);
    const l = K({}, ud(o.value, u, null), { position: i.position + 1 }, d);
    a(u, l, !1), o.value = u;
  }
  return {
    location: o,
    state: s,
    push: c,
    replace: r
  };
}
function Ry(e) {
  e = Ay(e);
  const t = Iy(e), n = Uy(e, t.state, t.location, t.replace);
  function o(a, r = !0) {
    r || n.pauseListeners(), history.go(a);
  }
  const s = K({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: Ty.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function zy(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && q(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), Ry(e);
}
function Oy(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function vh(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const xn = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, hc = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var dd;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(dd || (dd = {}));
const jy = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${qy(t)}" via a navigation guard.`;
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
  return {}.NODE_ENV !== "production" ? K(new Error(jy[e](t)), {
    type: e,
    [hc]: !0
  }, t) : K(new Error(), {
    type: e,
    [hc]: !0
  }, t);
}
function Jt(e, t) {
  return e instanceof Error && hc in e && (t == null || !!(e.type & t));
}
const Hy = ["params", "query", "hash"];
function qy(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of Hy)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const gd = "[^/]+?", Gy = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Xy = /[.+*?^${}()[\]/\\]/g;
function Wy(e, t) {
  const n = K({}, Gy, t), o = [];
  let s = n.start ? "^" : "";
  const a = [];
  for (const d of e) {
    const i = d.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !d.length && (s += "/");
    for (let l = 0; l < d.length; l++) {
      const g = d[l];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (g.type === 0)
        l || (s += "/"), s += g.value.replace(Xy, "\\$&"), p += 40;
      else if (g.type === 1) {
        const { value: m, repeatable: h, optional: f, regexp: _ } = g;
        a.push({
          name: m,
          repeatable: h,
          optional: f
        });
        const w = _ || gd;
        if (w !== gd) {
          p += 10;
          try {
            new RegExp(`(${w})`);
          } catch (x) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${w}): ` + x.message);
          }
        }
        let y = h ? `((?:${w})(?:/(?:${w}))*)` : `(${w})`;
        l || (y = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        f && d.length < 2 ? `(?:/${y})` : "/" + y), f && (y += "?"), s += y, p += 20, f && (p += -8), h && (p += -20), w === ".*" && (p += -50);
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
  function c(d) {
    const i = d.match(r), l = {};
    if (!i)
      return null;
    for (let g = 1; g < i.length; g++) {
      const p = i[g] || "", m = a[g - 1];
      l[m.name] = p && m.repeatable ? p.split("/") : p;
    }
    return l;
  }
  function u(d) {
    let i = "", l = !1;
    for (const g of e) {
      (!l || !i.endsWith("/")) && (i += "/"), l = !1;
      for (const p of g)
        if (p.type === 0)
          i += p.value;
        else if (p.type === 1) {
          const { value: m, repeatable: h, optional: f } = p, _ = m in d ? d[m] : "";
          if (at(_) && !h)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const w = at(_) ? _.join("/") : _;
          if (!w)
            if (f)
              g.length < 2 && (i.endsWith("/") ? i = i.slice(0, -1) : l = !0);
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
    parse: c,
    stringify: u
  };
}
function Ky(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function Yy(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = Ky(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (pd(o))
      return 1;
    if (pd(s))
      return -1;
  }
  return s.length - o.length;
}
function pd(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Jy = {
  type: 0,
  value: ""
}, Qy = /[a-zA-Z0-9_]/;
function Zy(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[Jy]];
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
  let c = 0, u, d = "", i = "";
  function l() {
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
  for (; c < e.length; ) {
    if (u = e[c++], u === "\\" && n !== 2) {
      o = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        u === "/" ? (d && l(), r()) : u === ":" ? (l(), n = 1) : g();
        break;
      case 4:
        g(), n = o;
        break;
      case 1:
        u === "(" ? n = 2 : Qy.test(u) ? g() : (l(), n = 0, u !== "*" && u !== "?" && u !== "+" && c--);
        break;
      case 2:
        u === ")" ? i[i.length - 1] == "\\" ? i = i.slice(0, -1) + u : n = 3 : i += u;
        break;
      case 3:
        l(), n = 0, u !== "*" && u !== "?" && u !== "+" && c--, i = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${d}"`), l(), r(), s;
}
function ex(e, t, n) {
  const o = Wy(Zy(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const r of o.keys)
      a.has(r.name) && q(`Found duplicated params with name "${r.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(r.name);
  }
  const s = K(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function tx(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = fd({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(i) {
    return o.get(i);
  }
  function a(i, l, g) {
    const p = !g, m = nx(i);
    ({}).NODE_ENV !== "production" && ix(m, l), m.aliasOf = g && g.record;
    const h = fd(t, i), f = [
      m
    ];
    if ("alias" in i) {
      const y = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const x of y)
        f.push(K({}, m, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: g ? g.record.components : m.components,
          path: x,
          // we might be the child of an alias
          aliasOf: g ? g.record : m
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let _, w;
    for (const y of f) {
      const { path: x } = y;
      if (l && x[0] !== "/") {
        const S = l.record.path, k = S[S.length - 1] === "/" ? "" : "/";
        y.path = l.record.path + (x && k + x);
      }
      if ({}.NODE_ENV !== "production" && y.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (_ = ex(y, l, h), {}.NODE_ENV !== "production" && l && x[0] === "/" && rx(_, l), g ? (g.alias.push(_), {}.NODE_ENV !== "production" && ax(g, _)) : (w = w || _, w !== _ && w.alias.push(_), p && i.name && !hd(_) && r(i.name)), m.children) {
        const S = m.children;
        for (let k = 0; k < S.length; k++)
          a(S[k], _, g && g.children[k]);
      }
      g = g || _, (_.record.components && Object.keys(_.record.components).length || _.record.name || _.record.redirect) && u(_);
    }
    return w ? () => {
      r(w);
    } : Rs;
  }
  function r(i) {
    if (vh(i)) {
      const l = o.get(i);
      l && (o.delete(i), n.splice(n.indexOf(l), 1), l.children.forEach(r), l.alias.forEach(r));
    } else {
      const l = n.indexOf(i);
      l > -1 && (n.splice(l, 1), i.record.name && o.delete(i.record.name), i.children.forEach(r), i.alias.forEach(r));
    }
  }
  function c() {
    return n;
  }
  function u(i) {
    let l = 0;
    for (; l < n.length && Yy(i, n[l]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[l].record.path || !Sh(i, n[l])); )
      l++;
    n.splice(l, 0, i), i.record.name && !hd(i) && o.set(i.record.name, i);
  }
  function d(i, l) {
    let g, p = {}, m, h;
    if ("name" in i && i.name) {
      if (g = o.get(i.name), !g)
        throw To(1, {
          location: i
        });
      if ({}.NODE_ENV !== "production") {
        const w = Object.keys(i.params || {}).filter((y) => !g.keys.find((x) => x.name === y));
        w.length && q(`Discarded invalid param(s) "${w.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = g.record.name, p = K(
        // paramsFromLocation is a new object
        md(
          l.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((w) => !w.optional).map((w) => w.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && md(i.params, g.keys.map((w) => w.name))
      ), m = g.stringify(p);
    } else if ("path" in i)
      m = i.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && q(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((w) => w.re.test(m)), g && (p = g.parse(m), h = g.record.name);
    else {
      if (g = l.name ? o.get(l.name) : n.find((w) => w.re.test(l.path)), !g)
        throw To(1, {
          location: i,
          currentLocation: l
        });
      h = g.record.name, p = K({}, l.params, i.params), m = g.stringify(p);
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
      meta: sx(f)
    };
  }
  return e.forEach((i) => a(i)), { addRoute: a, resolve: d, removeRoute: r, getRoutes: c, getRecordMatcher: s };
}
function md(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function nx(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: ox(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function ox(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function hd(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function sx(e) {
  return e.reduce((t, n) => K(t, n.meta), {});
}
function fd(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function fc(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function ax(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(fc.bind(null, n)))
      return q(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(fc.bind(null, n)))
      return q(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function ix(e, t) {
  t && t.record.name && !e.name && !e.path && q(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function rx(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(fc.bind(null, n)))
      return q(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Sh(e, t) {
  return t.children.some((n) => n === e || Sh(e, n));
}
const yh = /#/g, lx = /&/g, cx = /\//g, ux = /=/g, dx = /\?/g, xh = /\+/g, gx = /%5B/g, px = /%5D/g, bh = /%5E/g, mx = /%60/g, Ch = /%7B/g, hx = /%7C/g, kh = /%7D/g, fx = /%20/g;
function qc(e) {
  return encodeURI("" + e).replace(hx, "|").replace(gx, "[").replace(px, "]");
}
function wx(e) {
  return qc(e).replace(Ch, "{").replace(kh, "}").replace(bh, "^");
}
function wc(e) {
  return qc(e).replace(xh, "%2B").replace(fx, "+").replace(yh, "%23").replace(lx, "%26").replace(mx, "`").replace(Ch, "{").replace(kh, "}").replace(bh, "^");
}
function _x(e) {
  return wc(e).replace(ux, "%3D");
}
function vx(e) {
  return qc(e).replace(yh, "%23").replace(dx, "%3F");
}
function Sx(e) {
  return e == null ? "" : vx(e).replace(cx, "%2F");
}
function Hs(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && q(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function yx(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(xh, " "), r = a.indexOf("="), c = Hs(r < 0 ? a : a.slice(0, r)), u = r < 0 ? null : Hs(a.slice(r + 1));
    if (c in t) {
      let d = t[c];
      at(d) || (d = t[c] = [d]), d.push(u);
    } else
      t[c] = u;
  }
  return t;
}
function wd(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = _x(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (at(o) ? o.map((a) => a && wc(a)) : [o && wc(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function xx(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = at(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const bx = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), _d = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), Bi = Symbol({}.NODE_ENV !== "production" ? "router" : ""), $h = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), _c = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
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
  return () => new Promise((r, c) => {
    const u = (l) => {
      l === !1 ? c(To(4, {
        from: n,
        to: t
      })) : l instanceof Error ? c(l) : Oy(l) ? c(To(2, {
        from: t,
        to: l
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof l == "function" && a.push(l), r());
    }, d = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? Cx(u, t, n) : u);
    let i = Promise.resolve(d);
    if (e.length < 3 && (i = i.then(u)), {}.NODE_ENV !== "production" && e.length > 2) {
      const l = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof d == "object" && "then" in d)
        i = i.then((g) => u._called ? g : (q(l), Promise.reject(new Error("Invalid navigation guard"))));
      else if (d !== void 0 && !u._called) {
        q(l), c(new Error("Invalid navigation guard"));
        return;
      }
    }
    i.catch((l) => c(l));
  });
}
function Cx(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && q(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function gr(e, t, n, o) {
  const s = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && q(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const r in a.components) {
      let c = a.components[r];
      if ({}.NODE_ENV !== "production") {
        if (!c || typeof c != "object" && typeof c != "function")
          throw q(`Component "${r}" in record with path "${a.path}" is not a valid component. Received "${String(c)}".`), new Error("Invalid route component");
        if ("then" in c) {
          q(`Component "${r}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const u = c;
          c = () => u;
        } else
          c.__asyncLoader && // warn only once per component
          !c.__warnedDefineAsync && (c.__warnedDefineAsync = !0, q(`Component "${r}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[r]))
        if (kx(c)) {
          const d = (c.__vccOpts || c)[t];
          d && s.push(Nn(d, n, o, a, r));
        } else {
          let u = c();
          ({}).NODE_ENV !== "production" && !("catch" in u) && (q(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), u = Promise.resolve(u)), s.push(() => u.then((d) => {
            if (!d)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = Cy(d) ? d.default : d;
            a.components[r] = i;
            const g = (i.__vccOpts || i)[t];
            return g && Nn(g, n, o, a, r)();
          }));
        }
    }
  }
  return s;
}
function kx(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function vd(e) {
  const t = Do(Bi), n = Do($h), o = Gt(() => t.resolve(Is(e.to))), s = Gt(() => {
    const { matched: u } = o.value, { length: d } = u, i = u[d - 1], l = n.matched;
    if (!i || !l.length)
      return -1;
    const g = l.findIndex(Un.bind(null, i));
    if (g > -1)
      return g;
    const p = Sd(u[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Sd(i) === p && // avoid comparing the child with its parent
      l[l.length - 1].path !== p ? l.findIndex(Un.bind(null, u[d - 2])) : g
    );
  }), a = Gt(() => s.value > -1 && Lx(n.params, o.value.params)), r = Gt(() => s.value > -1 && s.value === n.matched.length - 1 && wh(n.params, o.value.params));
  function c(u = {}) {
    return Ex(u) ? t[Is(e.replace) ? "replace" : "push"](
      Is(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Rs) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && wn) {
    const u = ph();
    if (u) {
      const d = {
        route: o.value,
        isActive: a.value,
        isExactActive: r.value
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(d), _y(() => {
        d.route = o.value, d.isActive = a.value, d.isExactActive = r.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: Gt(() => o.value.href),
    isActive: a,
    isExactActive: r,
    navigate: c
  };
}
const $x = /* @__PURE__ */ mh({
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
  useLink: vd,
  setup(e, { slots: t }) {
    const n = vy(vd(e)), { options: o } = Do(Bi), s = Gt(() => ({
      [yd(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [yd(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : hh("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), Vx = $x;
function Ex(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Lx(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!at(s) || s.length !== o.length || o.some((a, r) => a !== s[r]))
      return !1;
  }
  return !0;
}
function Sd(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const yd = (e, t, n) => e != null ? e : t != null ? t : n, Ax = /* @__PURE__ */ mh({
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
    ({}).NODE_ENV !== "production" && Tx();
    const o = Do(_c), s = Gt(() => e.route || o.value), a = Do(_d, 0), r = Gt(() => {
      let d = Is(a);
      const { matched: i } = s.value;
      let l;
      for (; (l = i[d]) && !l.components; )
        d++;
      return d;
    }), c = Gt(() => s.value.matched[r.value]);
    cr(_d, Gt(() => r.value + 1)), cr(bx, c), cr(_c, s);
    const u = Sy();
    return fh(() => [u.value, c.value, e.name], ([d, i, l], [g, p, m]) => {
      i && (i.instances[l] = d, p && p !== i && d && d === g && (i.leaveGuards.size || (i.leaveGuards = p.leaveGuards), i.updateGuards.size || (i.updateGuards = p.updateGuards))), d && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !Un(i, p) || !g) && (i.enterCallbacks[l] || []).forEach((h) => h(d));
    }, { flush: "post" }), () => {
      const d = s.value, i = e.name, l = c.value, g = l && l.components[i];
      if (!g)
        return xd(n.default, { Component: g, route: d });
      const p = l.props[i], m = p ? p === !0 ? d.params : typeof p == "function" ? p(d) : p : null, f = hh(g, K({}, m, t, {
        onVnodeUnmounted: (_) => {
          _.component.isUnmounted && (l.instances[i] = null);
        },
        ref: u
      }));
      if ({}.NODE_ENV !== "production" && wn && f.ref) {
        const _ = {
          depth: r.value,
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
        xd(n.default, { Component: f, route: d }) || f
      );
    };
  }
});
function xd(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Dx = Ax;
function Tx() {
  const e = ph(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    q(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function Wo(e, t) {
  const n = K({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => zx(o, ["instances", "children", "aliasOf"]))
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
function ya(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let Bx = 0;
function Px(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = Bx++;
  wy({
    id: "org.vuejs.router" + (o ? "." + o : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (s) => {
    typeof s.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), s.on.inspectComponent((i, l) => {
      i.instanceData && i.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: Wo(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: i, componentInstance: l }) => {
      if (l.__vrv_devtools) {
        const g = l.__vrv_devtools;
        i.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Vh
        });
      }
      at(l.__vrl_devtools) && (l.__devtoolsApi = s, l.__vrl_devtools.forEach((g) => {
        let p = Ah, m = "";
        g.isExactActive ? (p = Lh, m = "This is exactly active") : g.isActive && (p = Eh, m = "This link is active"), i.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: m,
          backgroundColor: p
        });
      }));
    }), fh(t.currentRoute, () => {
      u(), s.notifyComponentUpdate(), s.sendInspectorTree(c), s.sendInspectorState(c);
    });
    const a = "router:navigations:" + o;
    s.addTimelineLayer({
      id: a,
      label: `Router${o ? " " + o : ""} Navigations`,
      color: 4237508
    }), t.onError((i, l) => {
      s.addTimelineEvent({
        layerId: a,
        event: {
          title: "Error during Navigation",
          subtitle: l.fullPath,
          logType: "error",
          time: s.now(),
          data: { error: i },
          groupId: l.meta.__navigationId
        }
      });
    });
    let r = 0;
    t.beforeEach((i, l) => {
      const g = {
        guard: ya("beforeEach"),
        from: Wo(l, "Current Location during this navigation"),
        to: Wo(i, "Target location")
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
    }), t.afterEach((i, l, g) => {
      const p = {
        guard: ya("afterEach")
      };
      g ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, p.status = ya("❌")) : p.status = ya("✅"), p.from = Wo(l, "Current Location during this navigation"), p.to = Wo(i, "Target location"), s.addTimelineEvent({
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
      const i = d;
      let l = n.getRoutes().filter((g) => !g.parent);
      l.forEach(Bh), i.filter && (l = l.filter((g) => (
        // save matches state based on the payload
        vc(g, i.filter.toLowerCase())
      ))), l.forEach((g) => Th(g, t.currentRoute.value)), i.rootNodes = l.map(Dh);
    }
    let d;
    s.on.getInspectorTree((i) => {
      d = i, i.app === e && i.inspectorId === c && u();
    }), s.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === c) {
        const g = n.getRoutes().find((p) => p.record.__vd_id === i.nodeId);
        g && (i.state = {
          options: Mx(g)
        });
      }
    }), s.sendInspectorTree(c), s.sendInspectorState(c);
  });
}
function Fx(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function Mx(e) {
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
        display: e.keys.map((o) => `${o.name}${Fx(o)}`).join(" "),
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
const Vh = 15485081, Eh = 2450411, Lh = 8702998, Nx = 2282478, Ah = 16486972, Ux = 6710886;
function Dh(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: Nx
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Ah
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Vh
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Lh
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Eh
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: Ux
  });
  let o = n.__vd_id;
  return o == null && (o = String(Ix++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(Dh)
  };
}
let Ix = 0;
const Rx = /^\/(.*)\/([a-z]*)$/;
function Th(e, t) {
  const n = t.matched.length && Un(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => Un(o, e.record))), e.children.forEach((o) => Th(o, t));
}
function Bh(e) {
  e.__vd_match = !1, e.children.forEach(Bh);
}
function vc(e, t) {
  const n = String(e.re).match(Rx);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => vc(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = Hs(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => vc(r, t));
}
function zx(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function Ox(e) {
  const t = tx(e.routes, e), n = e.parseQuery || yx, o = e.stringifyQuery || wd, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = Xo(), r = Xo(), c = Xo(), u = yy(xn);
  let d = xn;
  wn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = ur.bind(null, (v) => "" + v), l = ur.bind(null, Sx), g = (
    // @ts-expect-error: intentionally avoid the type check
    ur.bind(null, Hs)
  );
  function p(v, V) {
    let D, F;
    return vh(v) ? (D = t.getRecordMatcher(v), F = V) : F = v, t.addRoute(F, D);
  }
  function m(v) {
    const V = t.getRecordMatcher(v);
    V ? t.removeRoute(V) : {}.NODE_ENV !== "production" && q(`Cannot remove non-existent route "${String(v)}"`);
  }
  function h() {
    return t.getRoutes().map((v) => v.record);
  }
  function f(v) {
    return !!t.getRecordMatcher(v);
  }
  function _(v, V) {
    if (V = K({}, V || u.value), typeof v == "string") {
      const I = dr(n, v, V.path), ee = t.resolve({ path: I.path }, V), Q = s.createHref(I.fullPath);
      return {}.NODE_ENV !== "production" && (Q.startsWith("//") ? q(`Location "${v}" resolved to "${Q}". A resolved location cannot start with multiple slashes.`) : ee.matched.length || q(`No match found for location with path "${v}"`)), K(I, ee, {
        params: g(ee.params),
        hash: Hs(I.hash),
        redirectedFrom: void 0,
        href: Q
      });
    }
    let D;
    if ("path" in v)
      ({}).NODE_ENV !== "production" && "params" in v && !("name" in v) && // @ts-expect-error: the type is never
      Object.keys(v.params).length && q(`Path "${v.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), D = K({}, v, {
        path: dr(n, v.path, V.path).path
      });
    else {
      const I = K({}, v.params);
      for (const ee in I)
        I[ee] == null && delete I[ee];
      D = K({}, v, {
        params: l(I)
      }), V.params = l(V.params);
    }
    const F = t.resolve(D, V), H = v.hash || "";
    ({}).NODE_ENV !== "production" && H && !H.startsWith("#") && q(`A \`hash\` should always start with the character "#". Replace "${H}" with "#${H}".`), F.params = i(g(F.params));
    const ie = Vy(o, K({}, v, {
      hash: wx(H),
      path: F.path
    })), O = s.createHref(ie);
    return {}.NODE_ENV !== "production" && (O.startsWith("//") ? q(`Location "${v}" resolved to "${O}". A resolved location cannot start with multiple slashes.`) : F.matched.length || q(`No match found for location with path "${"path" in v ? v.path : v}"`)), K({
      fullPath: ie,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: H,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === wd ? xx(v.query) : v.query || {}
      )
    }, F, {
      redirectedFrom: void 0,
      href: O
    });
  }
  function w(v) {
    return typeof v == "string" ? dr(n, v, u.value.path) : K({}, v);
  }
  function y(v, V) {
    if (d !== v)
      return To(8, {
        from: V,
        to: v
      });
  }
  function x(v) {
    return A(v);
  }
  function S(v) {
    return x(K(w(v), { replace: !0 }));
  }
  function k(v) {
    const V = v.matched[v.matched.length - 1];
    if (V && V.redirect) {
      const { redirect: D } = V;
      let F = typeof D == "function" ? D(v) : D;
      if (typeof F == "string" && (F = F.includes("?") || F.includes("#") ? F = w(F) : (
        // force empty params
        { path: F }
      ), F.params = {}), {}.NODE_ENV !== "production" && !("path" in F) && !("name" in F))
        throw q(`Invalid redirect found:
${JSON.stringify(F, null, 2)}
 when navigating to "${v.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return K({
        query: v.query,
        hash: v.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in F ? {} : v.params
      }, F);
    }
  }
  function A(v, V) {
    const D = d = _(v), F = u.value, H = v.state, ie = v.force, O = v.replace === !0, I = k(D);
    if (I)
      return A(
        K(w(I), {
          state: typeof I == "object" ? K({}, H, I.state) : H,
          force: ie,
          replace: O
        }),
        // keep original redirectedFrom if it exists
        V || D
      );
    const ee = D;
    ee.redirectedFrom = V;
    let Q;
    return !ie && rd(o, F, D) && (Q = To(16, { to: ee, from: F }), ce(
      F,
      F,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (Q ? Promise.resolve(Q) : J(ee, F)).catch((te) => Jt(te) ? (
      // navigation redirects still mark the router as ready
      Jt(
        te,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? te : le(te)
    ) : (
      // reject any unknown error
      M(te, ee, F)
    )).then((te) => {
      if (te) {
        if (Jt(
          te,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          rd(o, _(te.to), ee) && // and we have done it a couple of times
          V && // @ts-expect-error: added only in dev
          (V._count = V._count ? (
            // @ts-expect-error
            V._count + 1
          ) : 1) > 30 ? (q(`Detected a possibly infinite redirection in a navigation guard when going from "${F.fullPath}" to "${ee.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : A(
            // keep options
            K({
              // preserve an existing replacement but allow the redirect to override it
              replace: O
            }, w(te.to), {
              state: typeof te.to == "object" ? K({}, H, te.to.state) : H,
              force: ie
            }),
            // preserve the original redirectedFrom if any
            V || ee
          );
      } else
        te = G(ee, F, !0, O, H);
      return U(ee, F, te), te;
    });
  }
  function L(v, V) {
    const D = y(v, V);
    return D ? Promise.reject(D) : Promise.resolve();
  }
  function B(v) {
    const V = ke.values().next().value;
    return V && typeof V.runWithContext == "function" ? V.runWithContext(v) : v();
  }
  function J(v, V) {
    let D;
    const [F, H, ie] = jx(v, V);
    D = gr(F.reverse(), "beforeRouteLeave", v, V);
    for (const I of F)
      I.leaveGuards.forEach((ee) => {
        D.push(Nn(ee, v, V));
      });
    const O = L.bind(null, v, V);
    return D.push(O), j(D).then(() => {
      D = [];
      for (const I of a.list())
        D.push(Nn(I, v, V));
      return D.push(O), j(D);
    }).then(() => {
      D = gr(H, "beforeRouteUpdate", v, V);
      for (const I of H)
        I.updateGuards.forEach((ee) => {
          D.push(Nn(ee, v, V));
        });
      return D.push(O), j(D);
    }).then(() => {
      D = [];
      for (const I of ie)
        if (I.beforeEnter)
          if (at(I.beforeEnter))
            for (const ee of I.beforeEnter)
              D.push(Nn(ee, v, V));
          else
            D.push(Nn(I.beforeEnter, v, V));
      return D.push(O), j(D);
    }).then(() => (v.matched.forEach((I) => I.enterCallbacks = {}), D = gr(ie, "beforeRouteEnter", v, V), D.push(O), j(D))).then(() => {
      D = [];
      for (const I of r.list())
        D.push(Nn(I, v, V));
      return D.push(O), j(D);
    }).catch((I) => Jt(
      I,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? I : Promise.reject(I));
  }
  function U(v, V, D) {
    c.list().forEach((F) => B(() => F(v, V, D)));
  }
  function G(v, V, D, F, H) {
    const ie = y(v, V);
    if (ie)
      return ie;
    const O = V === xn, I = wn ? history.state : {};
    D && (F || O ? s.replace(v.fullPath, K({
      scroll: O && I && I.scroll
    }, H)) : s.push(v.fullPath, H)), u.value = v, ce(v, V, D, O), le();
  }
  let Z;
  function Ce() {
    Z || (Z = s.listen((v, V, D) => {
      if (!N.listening)
        return;
      const F = _(v), H = k(F);
      if (H) {
        A(K(H, { replace: !0 }), F).catch(Rs);
        return;
      }
      d = F;
      const ie = u.value;
      wn && Fy(cd(ie.fullPath, D.delta), Ti()), J(F, ie).catch((O) => Jt(
        O,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? O : Jt(
        O,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (A(
        O.to,
        F
        // avoid an uncaught rejection, let push call triggerError
      ).then((I) => {
        Jt(
          I,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !D.delta && D.type === js.pop && s.go(-1, !1);
      }).catch(Rs), Promise.reject()) : (D.delta && s.go(-D.delta, !1), M(O, F, ie))).then((O) => {
        O = O || G(
          // after navigation, all matched components are resolved
          F,
          ie,
          !1
        ), O && (D.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Jt(
          O,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-D.delta, !1) : D.type === js.pop && Jt(
          O,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), U(F, ie, O);
      }).catch(Rs);
    }));
  }
  let be = Xo(), lt = Xo(), Ae;
  function M(v, V, D) {
    le(v);
    const F = lt.list();
    return F.length ? F.forEach((H) => H(v, V, D)) : ({}.NODE_ENV !== "production" && q("uncaught error during route navigation:"), console.error(v)), Promise.reject(v);
  }
  function X() {
    return Ae && u.value !== xn ? Promise.resolve() : new Promise((v, V) => {
      be.add([v, V]);
    });
  }
  function le(v) {
    return Ae || (Ae = !v, Ce(), be.list().forEach(([V, D]) => v ? D(v) : V()), be.reset()), v;
  }
  function ce(v, V, D, F) {
    const { scrollBehavior: H } = e;
    if (!wn || !H)
      return Promise.resolve();
    const ie = !D && My(cd(v.fullPath, 0)) || (F || !D) && history.state && history.state.scroll || null;
    return by().then(() => H(v, V, ie)).then((O) => O && Py(O)).catch((O) => M(O, v, V));
  }
  const W = (v) => s.go(v);
  let se;
  const ke = /* @__PURE__ */ new Set(), N = {
    currentRoute: u,
    listening: !0,
    addRoute: p,
    removeRoute: m,
    hasRoute: f,
    getRoutes: h,
    resolve: _,
    options: e,
    push: x,
    replace: S,
    go: W,
    back: () => W(-1),
    forward: () => W(1),
    beforeEach: a.add,
    beforeResolve: r.add,
    afterEach: c.add,
    onError: lt.add,
    isReady: X,
    install(v) {
      const V = this;
      v.component("RouterLink", Vx), v.component("RouterView", Dx), v.config.globalProperties.$router = V, Object.defineProperty(v.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Is(u)
      }), wn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !se && u.value === xn && (se = !0, x(s.location).catch((H) => {
        ({}).NODE_ENV !== "production" && q("Unexpected error when starting the router:", H);
      }));
      const D = {};
      for (const H in xn)
        Object.defineProperty(D, H, {
          get: () => u.value[H],
          enumerable: !0
        });
      v.provide(Bi, V), v.provide($h, xy(D)), v.provide(_c, u);
      const F = v.unmount;
      ke.add(v), v.unmount = function() {
        ke.delete(v), ke.size < 1 && (d = xn, Z && Z(), Z = null, u.value = xn, se = !1, Ae = !1), F();
      }, {}.NODE_ENV !== "production" && wn && Px(v, V, t);
    }
  };
  function j(v) {
    return v.reduce((V, D) => V.then(() => B(D)), Promise.resolve());
  }
  return N;
}
function jx(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let r = 0; r < a; r++) {
    const c = t.matched[r];
    c && (e.matched.find((d) => Un(d, c)) ? o.push(c) : n.push(c));
    const u = e.matched[r];
    u && (t.matched.find((d) => Un(d, u)) || s.push(u));
  }
  return [n, o, s];
}
function Te() {
  return Do(Bi);
}
window.Vue.computed;
const Hx = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', qx = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', Gx = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', Xx = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', Wx = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', Kx = '<path d="M10 1a9 9 0 109 9 9 9 0 00-9-9m5 10H5V9h10z"/>', Yx = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', Jx = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', Qx = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', Zx = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', eb = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', tb = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', nb = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', ob = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', sb = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', ab = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', ib = '<path d="M19 16 2 12a3.83 3.83 0 01-1-2.5A3.83 3.83 0 012 7l17-4z"/><rect width="4" height="8" x="4" y="9" rx="2"/>', rb = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', Ph = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', lb = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', cb = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"/>', ub = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', db = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', gb = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', pb = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', mb = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', hb = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', fb = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', wb = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', _b = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', vb = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', Sb = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', yb = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', Sc = Hx, Fh = qx, Mh = {
  ltr: Gx,
  shouldFlip: !0
}, Nh = {
  ltr: Xx,
  shouldFlip: !0
}, Pi = {
  ltr: Wx,
  shouldFlip: !0
}, xb = Kx, Uh = Yx, Ih = Jx, bb = Qx, Cb = Zx, kb = eb, No = tb, Gc = nb, Xc = ob, bd = sb, $b = ab, Vb = {
  ltr: ib,
  shouldFlip: !0
}, Rh = rb, Eb = {
  langCodeMap: {
    ar: Ph
  },
  default: lb
}, Lb = {
  langCodeMap: {
    ar: Ph
  },
  default: cb
}, zh = ub, Wc = {
  ltr: db,
  shouldFlip: !0
}, Ab = gb, ta = {
  ltr: pb,
  shouldFlip: !0
}, Kc = {
  ltr: mb,
  shouldFlip: !0
}, Db = {
  ltr: hb,
  shouldFlip: !0
}, Oh = fb, Tb = wb, jh = _b, Bb = vb, Pb = Sb, Hh = yb;
window.Vue.unref;
window.Vue.resolveDirective;
window.Vue.createElementVNode;
window.Vue.withDirectives;
window.Vue.withCtx;
window.Vue.openBlock;
window.Vue.createBlock;
window.Codex.CdxMessage;
const Fb = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), r = parseInt(e.slice(12, 14)), c = new Date(Date.UTC(t, n, o, s, a, r)), d = (/* @__PURE__ */ new Date()).getTime() - c.getTime();
  return Math.round(d / (1e3 * 3600 * 24));
}, Mb = (e) => {
  const t = Fb(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const yt = window.Vue.unref, ao = window.Vue.createVNode, Qt = window.Vue.createElementVNode, Cd = window.Vue.renderSlot, kd = window.Vue.withModifiers, pr = window.Vue.toDisplayString, mr = window.Vue.withCtx, Nb = window.Vue.openBlock, Ub = window.Vue.createElementBlock, Ib = window.Vue.createCommentVNode, Rb = { class: "col shrink pe-4" }, zb = { class: "col" }, Ob = { class: "cx-translation__details column justify-between ma-0" }, jb = { class: "row ma-0" }, Hb = { class: "col grow" }, qb = { class: "col shrink ps-2" }, Gb = ["dir", "textContent"], Xb = ["dir", "textContent"], Wb = ["textContent"], Kb = window.Vuex.useStore, Yb = window.Vue.computed, qh = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: Ci,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e, { emit: t }) {
    const n = e, o = Kb(), s = (c, u) => {
      const d = o.getters["mediawiki/getPage"](c, u);
      return d == null ? void 0 : d.thumbnail;
    }, a = pe(), r = Yb(() => {
      const c = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, u = Mb(n.translation.startTimestamp);
      return a.i18n(
        c[u.postfix],
        u.value
      );
    });
    return (c, u) => e.translation ? (Nb(), Ub("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: u[1] || (u[1] = kd((d) => c.$emit("click"), ["stop"]))
    }, [
      Qt("div", Rb, [
        ao(yt($c), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      Qt("div", zb, [
        Qt("div", Ob, [
          Qt("div", jb, [
            Qt("div", Hb, [
              Cd(c.$slots, "title")
            ]),
            Qt("div", qb, [
              ao(yt(Oe), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: u[0] || (u[0] = kd((d) => c.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          Cd(c.$slots, "mid-content"),
          ao(yt(P), { class: "cx-translation__footer ma-0" }, {
            default: mr(() => [
              ao(yt(b), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: mr(() => [
                  Qt("span", {
                    class: "mw-ui-autonym",
                    dir: yt(R.getDir)(e.translation.sourceLanguage),
                    textContent: pr(yt(R.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, Gb),
                  ao(yt(Oe), {
                    icon: yt(r0),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  Qt("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: yt(R.getDir)(e.translation.targetLanguage),
                    textContent: pr(yt(R.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, Xb)
                ]),
                _: 1
              }),
              ao(yt(b), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: mr(() => [
                  Qt("span", {
                    textContent: pr(r.value)
                  }, null, 8, Wb)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : Ib("", !0);
  }
};
const Ko = window.Vue.unref, $d = window.Vue.toDisplayString, Jb = window.Vue.normalizeClass, Qb = window.Vue.createElementVNode, hr = window.Vue.openBlock, Zb = window.Vue.createElementBlock, Vd = window.Vue.createCommentVNode, Ed = window.Vue.createVNode, xa = window.Vue.withCtx, Ld = window.Vue.createBlock, eC = ["lang", "textContent"], tC = ["lang", "textContent"], nC = window.Vue.computed, oC = window.Vue.inject, sC = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: Ec,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = oC("colors").gray200, s = nC(
      () => {
        var u;
        return ((u = t.translation.progress) == null ? void 0 : u.any) * 100 || 0;
      }
    ), a = Te(), { setTranslationURLParams: r } = T(), c = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (u, d) => (hr(), Ld(qh, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": Ko(Lm),
      onActionIconClicked: d[0] || (d[0] = (i) => u.$emit("delete-translation")),
      onClick: c
    }, {
      title: xa(() => [
        Qb("h5", {
          class: Jb(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: $d(e.translation.sourceTitle)
        }, null, 10, eC),
        e.translation.isLeadSectionTranslation ? Vd("", !0) : (hr(), Zb("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: $d(e.translation.sourceSectionTitle)
        }, null, 8, tC))
      ]),
      "mid-content": xa(() => [
        e.translation.progress ? (hr(), Ld(Ko(P), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: xa(() => [
            Ed(Ko(b), null, {
              default: xa(() => [
                Ed(Ko(Bm), {
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
        })) : Vd("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, aC = window.Vuex.useStore, Gh = [], iC = (e, t, n) => Gh.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), rC = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  Gh.push(o);
}, lC = () => {
  const e = aC();
  return (t, n, o) => C(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !iC(t, n, o) && (s = yield fe.fetchSectionSuggestion(
      t,
      o,
      n
    ), rC(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, Xh = "cx-translation-session-position-", Wh = () => Xh + mw.user.sessionId(), cC = () => {
  const e = parseInt(
    mw.storage.get(Wh())
  );
  return isNaN(e) ? 0 : e;
}, uC = function(e) {
  const t = Wh();
  mw.storage.set(t, e);
}, dC = () => {
  Object.keys(mw.storage.store).filter((e) => e.startsWith(Xh)).forEach((e) => mw.storage.remove(e));
}, gC = () => {
  const e = cC();
  return e % 10 === 0 && dC(), uC(e + 1), e;
};
let yc = null;
function pC(e) {
  if (yc)
    return Promise.resolve(yc);
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
function mC(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function hC(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = mw.user.sessionId(), n = mw.config.get("wgDBname"), o = `cx_sx_${t}_${e.access_method}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), r = mw.user.getName(), c = {
    $schema: "/analytics/mediawiki/content_translation_event/1.8.0",
    wiki_db: n,
    user_name: r,
    web_session_id: t,
    web_pageview_id: mw.user.getPageviewToken(),
    user_is_anonymous: a,
    content_translation_session_id: o,
    content_translation_session_position: gC()
  };
  return a ? Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, c, e))
  ) : pC(r).then((u) => {
    yc = u, mw.eventLog.submit(
      s,
      Object.assign({}, c, e, {
        user_global_edit_count: u,
        user_global_edit_count_bucket: mC(u)
      })
    );
  });
}
const it = () => (e) => (e.access_method || (e.access_method = Ws ? "desktop" : "mobile web"), hC(e)), Kh = window.Vue.ref, Yh = Kh(null), xc = Kh(null), fC = (e) => {
  Yh.value = e;
}, wC = (e) => {
  xc.value = e;
}, Fi = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = T(), s = it();
  return {
    logDashboardTranslationStartEvent: () => {
      const r = {
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
      return xc.value && (r.event_context = xc.value), o.value ? (r.translation_source_section = o.value, r.translation_type = "section") : r.translation_type = "article", s(r);
    },
    setStartTranslationEventSource: fC,
    setStartTranslationEventContext: wC
  };
}, na = () => {
  const e = Te(), t = ah(), { setTranslationURLParams: n } = T(), { setStartTranslationEventSource: o, setStartTranslationEventContext: s } = Fi();
  return (a, r, c, u, d = null, i = !0) => C(void 0, null, function* () {
    const l = yield t(
      r,
      c,
      a
    );
    l && (n(l), o(u), s(d), i && e.push({
      name: "sx-translation-confirmer"
    }));
  });
};
const ba = window.Vue.withModifiers, fr = window.Vue.toDisplayString, wr = window.Vue.createElementVNode, ct = window.Vue.unref, Ca = window.Vue.openBlock, Ad = window.Vue.createBlock;
window.Vue.createCommentVNode;
const bn = window.Vue.createVNode, zn = window.Vue.withCtx, Dd = window.Vue.createElementBlock, _C = ["lang", "href", "textContent"], vC = {
  key: 1,
  class: "flex"
}, SC = { key: 2 }, Td = window.Vue.computed, Bd = window.Vue.ref, _r = window.Codex.CdxButton, vr = window.Codex.CdxIcon, yC = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: Hc,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Bd(!0), o = Bd(null), s = Td(() => {
      var l;
      return (l = o.value) == null ? void 0 : l.missingSections;
    }), a = Td(
      () => s.value && Object.keys(s.value)[0]
    );
    lC()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((l) => o.value = l).catch((l) => console.log(l)).finally(() => n.value = !1), Te();
    const { setSectionURLParam: c } = T(), u = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, d = na(), i = (l) => {
      d(
        t.translation.sourceTitle,
        t.translation.sourceLanguage,
        t.translation.targetLanguage,
        "continue_published"
      ), l && c(l);
    };
    return (l, g) => (Ca(), Ad(qh, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: u
    }, {
      title: zn(() => [
        wr("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: g[0] || (g[0] = ba(() => {
          }, ["stop"])),
          textContent: fr(e.translation.sourceTitle)
        }, null, 8, _C)
      ]),
      "mid-content": zn(() => [
        bn(ct(P), { class: "ma-0" }, {
          default: zn(() => [
            bn(ct(b), null, {
              default: zn(() => [
                n.value ? (Ca(), Ad(ct(st), { key: 0 })) : s.value ? (Ca(), Dd("div", vC, [
                  bn(ct(_r), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: g[1] || (g[1] = ba((p) => i(a.value), ["stop"]))
                  }, {
                    default: zn(() => [
                      bn(ct(vr), {
                        class: "me-1",
                        icon: ct(Sc)
                      }, null, 8, ["icon"]),
                      wr("span", null, fr(a.value), 1)
                    ]),
                    _: 1
                  }),
                  bn(ct(_r), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": l.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: g[2] || (g[2] = ba((p) => i(null), ["stop"]))
                  }, {
                    default: zn(() => [
                      bn(ct(vr), { icon: ct(Xc) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : (Ca(), Dd("div", SC, [
                  bn(ct(_r), {
                    class: "cx-published-translation__start-new-translation-button flex items-center pa-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: g[3] || (g[3] = ba((p) => i(null), ["stop"]))
                  }, {
                    default: zn(() => [
                      bn(ct(vr), {
                        class: "me-1",
                        icon: ct(Sc)
                      }, null, 8, ["icon"]),
                      wr("span", null, fr(l.$i18n("sx-published-translation-new-translation-button-label")), 1)
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
}, xC = window.Vuex.useStore, bC = () => {
  const { commit: e } = xC(), t = it();
  return (n) => C(void 0, null, function* () {
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
const CC = window.Vue.resolveDirective, Sr = window.Vue.createElementVNode, kC = window.Vue.withDirectives, yr = window.Vue.unref, Pd = window.Vue.createVNode, Fd = window.Vue.withCtx, $C = window.Vue.openBlock, VC = window.Vue.createBlock, EC = { class: "pa-4" }, LC = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, AC = {
  __name: "SXConfirmTranslationDeletionDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: Ci,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "continue-translation",
    "discard-translation"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, s = () => o("update:modelValue", !1), a = bC(), r = () => {
      a(n.translation), s();
    };
    return (c, u) => {
      const d = CC("i18n");
      return $C(), VC(yr(St), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: Fd(() => [
          Sr("div", LC, [
            Pd(yr(Ie), {
              class: "grow py-3",
              large: "",
              label: c.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            Pd(yr(Ie), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: c.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: r
            }, null, 8, ["label"])
          ])
        ]),
        default: Fd(() => [
          Sr("div", EC, [
            kC(Sr("span", null, null, 512), [
              [d, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function DC(e, t, n) {
  return C(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield TC(t, n)).filter((s) => e.includes(s)) : [];
  });
}
function Md(e, t, n) {
  return C(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(R.sortByAutonym) : (yield DC(e, t, n)).sort(R.sortByAutonym);
  });
}
function TC(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function BC() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function PC(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
const FC = window.Vue.computed;
function MC(e, t) {
  const n = FC(() => {
    if (!t.value.length || !e.value.trim())
      return "";
    for (let s = 0; s < t.value.length; s++) {
      const a = R.getAutonym(t.value[s]);
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
const xr = window.Vue.ref, br = window.Vue.watch, NC = window.Vue.computed;
function Jh(e, t, n) {
  const o = xr(""), s = xr(-1), a = xr(null), r = () => {
    s.value++, s.value >= c.value.length && (s.value = 0);
  }, c = NC(() => e.value ? t.value : n && n.value ? [...n.value, ...t.value] : []), u = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return br(e, () => {
    s.value = -1;
  }), br(t, () => {
    t.value && c.value.length > 0 && (s.value = 0);
  }), br(s, () => C(this, null, function* () {
    var d;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = c.value[s.value], (d = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || d.scrollIntoView(!1);
  })), { next: r, prev: u, keyboardNavigationContainer: a, selectedItem: o };
}
function Yc(e, t, n) {
  let o;
  const s = (...a) => {
    const r = this, c = () => {
      o = null, n || e.apply(r, a);
    };
    n && !o && e.apply(r, a), (!o || t) && (clearTimeout(o), o = setTimeout(c, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const ka = window.Vue.renderSlot, $e = window.Vue.unref, UC = window.Vue.isRef, Nd = window.Vue.createVNode, Yo = window.Vue.withModifiers, Jo = window.Vue.withKeys, Cn = window.Vue.createElementVNode, IC = window.Vue.resolveDirective, $a = window.Vue.withDirectives, Cr = window.Vue.renderList, kr = window.Vue.Fragment, Zt = window.Vue.openBlock, en = window.Vue.createElementBlock, Ud = window.Vue.toDisplayString, Va = window.Vue.normalizeClass, $r = window.Vue.createCommentVNode, RC = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, zC = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, OC = { class: "results px-3 pt-4" }, jC = { class: "results-header ps-8 pb-2" }, HC = { class: "results-languages--suggestions pa-0 ma-0" }, qC = ["lang", "dir", "aria-selected", "onClick", "textContent"], GC = { class: "results px-3 pt-4" }, XC = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, WC = ["lang", "dir", "aria-selected", "onClick", "textContent"], KC = ["aria-selected"], YC = { class: "no-results px-3 py-4" }, JC = { class: "ps-8" }, Ea = window.Vue.ref, QC = window.Vue.watch, ZC = window.Vue.onMounted, Id = window.Vue.computed, Qh = {
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
      default: BC
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = Ea(null), a = Ea(""), r = Ea([]), c = Ea(n.suggestions), u = Id(
      () => PC(r.value)
    ), d = Id(() => {
      const x = r.value.length;
      return x < 10 ? "few-results" : x < 30 ? "some-results" : "many-results";
    }), i = (x) => o("select", x), l = () => o("close"), { autocompletion: g, onTabSelect: p } = MC(
      a,
      r
    ), { next: m, prev: h, keyboardNavigationContainer: f, selectedItem: _ } = Jh(a, r, c), w = () => {
      if (a.value && n.languages.includes(a.value)) {
        i(a.value);
        return;
      }
      if (_.value) {
        i(_.value);
        return;
      }
      if (r.value.length === 1) {
        i(r.value[0]);
        return;
      }
    };
    return QC(a, Yc(() => C(this, null, function* () {
      r.value = yield Md(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), ZC(() => C(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), r.value = yield Md(
        n.languages,
        "",
        n.searchAPI
      );
    })), (x, S) => {
      const k = IC("i18n");
      return Zt(), en("div", {
        ref_key: "keyboardNavigationContainer",
        ref: f,
        class: "mw-ui-language-selector"
      }, [
        ka(x.$slots, "search", {}, () => [
          Cn("div", RC, [
            Nd($e(cc), {
              value: $e(g),
              "onUpdate:value": S[0] || (S[0] = (A) => UC(g) ? g.value = A : null),
              icon: $e(vu),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            Nd($e(cc), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": S[1] || (S[1] = (A) => a.value = A),
              class: "mw-ui-language-selector__search pa-4",
              icon: $e(vu),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                Jo(Yo(w, ["prevent"]), ["enter"]),
                Jo(Yo($e(m), ["stop", "prevent"]), ["down"]),
                Jo(Yo($e(h), ["stop", "prevent"]), ["up"]),
                Jo(Yo(l, ["prevent"]), ["esc"]),
                Jo(Yo($e(p), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        Cn("section", zC, [
          e.suggestions.length && !a.value ? ka(x.$slots, "suggestions", { key: 0 }, () => [
            Cn("section", OC, [
              $a(Cn("p", jC, null, 512), [
                [k, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              Cn("ul", HC, [
                (Zt(!0), en(kr, null, Cr(e.suggestions, (A) => (Zt(), en("li", {
                  key: A,
                  class: Va(["language ma-0", { "language--selected": A === $e(_) }]),
                  lang: A,
                  dir: $e(R.getDir)(A),
                  "aria-selected": A === $e(_) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (L) => i(A),
                  textContent: Ud($e(R.getAutonym)(A))
                }, null, 10, qC))), 128))
              ])
            ])
          ]) : $r("", !0),
          u.value.length ? ka(x.$slots, "search", { key: 1 }, () => [
            Cn("section", GC, [
              e.suggestions.length && !a.value ? $a((Zt(), en("p", XC, null, 512)), [
                [k, void 0, "cx-sx-language-selector-all-languages"]
              ]) : $r("", !0),
              (Zt(!0), en(kr, null, Cr(u.value, (A, L) => (Zt(), en("ul", {
                key: L,
                class: Va(["results-languages pa-0 ma-0 mb-6", d.value])
              }, [
                (Zt(!0), en(kr, null, Cr(A, (B) => (Zt(), en("li", {
                  key: B,
                  class: Va(["language ma-0", { "language--selected": B === $e(_) }]),
                  lang: B,
                  dir: $e(R.getDir)(B),
                  role: "option",
                  "aria-selected": B === $e(_) || null,
                  tabindex: "-1",
                  onClick: (J) => i(B),
                  textContent: Ud($e(R.getAutonym)(B))
                }, null, 10, WC))), 128)),
                e.allOptionEnabled && !a.value ? $a((Zt(), en("li", {
                  key: 0,
                  class: Va(["language ma-0", { "language--selected": $e(_) === "all" }]),
                  role: "option",
                  "aria-selected": $e(_) === "all" || null,
                  tabindex: "-1",
                  onClick: S[2] || (S[2] = (B) => i("all"))
                }, null, 10, KC)), [
                  [k, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : $r("", !0)
              ], 2))), 128))
            ])
          ]) : ka(x.$slots, "noresults", { key: 2 }, () => [
            Cn("section", YC, [
              $a(Cn("h3", JC, null, 512), [
                [k, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const ek = window.Vue.resolveDirective, Rd = window.Vue.withDirectives, Qo = window.Vue.openBlock, Zo = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Ve = window.Vue.unref, zd = window.Vue.toDisplayString, xt = window.Vue.createVNode, Od = window.Vue.withModifiers, On = window.Vue.withCtx, tk = window.Vue.normalizeClass, nk = {
  key: 0,
  class: "mw-ui-autonym"
}, ok = ["lang", "dir", "textContent"], sk = {
  key: 0,
  class: "mw-ui-autonym"
}, ak = ["lang", "dir", "textContent"], es = window.Vue.computed, ik = window.Vue.inject, rk = window.Vue.ref, jd = window.Codex.CdxButton, Vr = window.Codex.CdxIcon, yi = {
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
    const n = e, o = t, s = ik("breakpoints"), a = es(() => s.value.mobile), r = rk(null), c = es(() => !!r.value), u = () => r.value = "source", d = () => r.value = "target", i = () => r.value = null, l = es(() => {
      if (!c.value)
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
    }, p = es(
      () => n.selectedSourceLanguage === "all"
    ), m = es(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, f) => {
      const _ = ek("i18n");
      return Qo(), Zo("div", {
        class: tk(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
      }, [
        xt(Ve(P), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: On(() => [
            xt(Ve(b), {
              class: "flex justify-end px-0",
              cols: a.value ? 5 : null
            }, {
              default: On(() => [
                xt(Ve(jd), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  onClick: Od(u, ["stop"])
                }, {
                  default: On(() => [
                    p.value ? Rd((Qo(), Zo("span", nk, null, 512)), [
                      [_, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Qo(), Zo("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: Ve(R.getDir)(e.selectedSourceLanguage),
                      textContent: zd(Ve(R.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, ok)),
                    xt(Ve(Vr), {
                      size: "x-small",
                      icon: Ve(bd)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["cols"]),
            xt(Ve(b), {
              class: "sx-translation-list-language-selector__arrow flex justify-center px-0",
              cols: a.value ? 2 : null
            }, {
              default: On(() => [
                xt(Ve(Vr), { icon: Ve(Mh) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            xt(Ve(b), {
              class: "px-0",
              cols: a.value ? 5 : null
            }, {
              default: On(() => [
                xt(Ve(jd), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.targetLanguages.length < 2,
                  onClick: Od(d, ["stop"])
                }, {
                  default: On(() => [
                    m.value ? Rd((Qo(), Zo("span", sk, null, 512)), [
                      [_, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Qo(), Zo("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: Ve(R.getDir)(e.selectedTargetLanguage),
                      textContent: zd(Ve(R.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, ak)),
                    xt(Ve(Vr), {
                      size: "x-small",
                      icon: Ve(bd)
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
        xt(Ve(St), {
          value: c.value,
          "onUpdate:value": f[0] || (f[0] = (w) => c.value = w),
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-mode": "dark",
          onClose: i
        }, {
          default: On(() => [
            xt(Ve(Qh), {
              class: "sx-translation-list-language-selector__widget col-12",
              placeholder: h.$i18n("cx-sx-language-selector-placeholder"),
              languages: l.value,
              "all-option-enabled": e.allOptionEnabled,
              onSelect: g,
              onClose: i
            }, null, 8, ["placeholder", "languages", "all-option-enabled"])
          ]),
          _: 1
        }, 8, ["value", "title", "fullscreen", "header"])
      ], 2);
    };
  }
};
const Hd = window.Vue.unref, lk = window.Vue.createVNode, La = window.Vue.createElementVNode, qd = window.Vue.toDisplayString, ck = window.Vue.openBlock, uk = window.Vue.createElementBlock, dk = { class: "cx-list-empty-placeholder pa-4" }, gk = { class: "cx-list-empty-placeholder__icon-container" }, pk = { class: "cx-list-empty-placeholder__icon" }, mk = ["textContent"], hk = ["textContent"], fk = window.Codex.CdxIcon, Zh = {
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
    return (t, n) => (ck(), uk("div", dk, [
      La("div", gk, [
        La("div", pk, [
          lk(Hd(fk), { icon: Hd(zh) }, null, 8, ["icon"])
        ])
      ]),
      La("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: qd(e.title)
      }, null, 8, mk),
      La("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: qd(e.description)
      }, null, 8, hk)
    ]));
  }
}, wk = window.Vuex.useStore, _k = window.Vue.ref, Aa = _k({ draft: !1, published: !1 }), Uo = () => {
  const e = wk(), t = Fo(), n = (s) => C(void 0, null, function* () {
    let a = yield vt.fetchTranslations(s);
    e.commit("translator/clearTranslationsByStatus", s), a.forEach(
      (c) => e.commit("translator/addTranslation", c)
    );
    const r = {};
    for (const c of a) {
      const u = c.sourceLanguage;
      r[u] = r[u] || [], r[u].push(c);
    }
    Aa.value[s] = !0;
    for (const [c, u] of Object.entries(r))
      t(
        c,
        u.map((d) => d.sourceTitle)
      ), u.forEach((d) => {
        const { targetLanguage: i, targetTitle: l } = d, g = !!e.getters["mediawiki/getPage"](
          i,
          l
        );
        l && !g && e.commit(
          "mediawiki/addPage",
          new Po({ title: l, pagelanguage: i })
        );
      });
  });
  return {
    fetchTranslationsByStatus: n,
    fetchAllTranslations: () => {
      const a = Object.keys(Aa.value).filter(
        (r) => !Aa.value[r]
      ).map(
        (r) => n(r)
      );
      return Promise.all(a).catch((r) => {
        mw.log.error("[CX] Error while fetching translations", r);
      });
    },
    translationsFetched: Aa
  };
};
const vk = window.Vue.toDisplayString, Er = window.Vue.normalizeClass, Gd = window.Vue.createElementVNode, Mt = window.Vue.openBlock, io = window.Vue.createBlock, Da = window.Vue.createCommentVNode, Xd = window.Vue.unref, Wd = window.Vue.renderList, Kd = window.Vue.Fragment, Ta = window.Vue.createElementBlock, Sk = window.Vue.createVNode, Yd = window.Vue.withCtx, yk = ["textContent"], xk = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, bk = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, Ba = window.Vue.ref, bt = window.Vue.computed, Ck = window.Vue.inject, kk = window.Vuex.useStore, Jd = {
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
    const t = e, n = Ba("all"), o = Ba("all"), s = kk(), { translationsFetched: a } = Uo(), r = bt(
      () => a.value[t.translationStatus]
    ), c = Ba(!1), u = Ba(null), d = bt(
      () => t.translationStatus === "draft"
    ), i = bt(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), l = bt(
      () => n.value === "all"
    ), g = bt(
      () => o.value === "all"
    ), p = bt(
      () => i.value.filter(
        (S) => (l.value || S.sourceLanguage === n.value) && (g.value || S.targetLanguage === o.value)
      ).sort((S, k) => S.lastUpdatedTimestamp < k.lastUpdatedTimestamp)
    ), m = bt(() => {
      const S = i.value.map(
        (k) => k.targetLanguage
      );
      return [...new Set(S)];
    }), h = bt(() => {
      const S = i.value.map(
        (k) => k.sourceLanguage
      );
      return [...new Set(S)];
    }), f = (S) => {
      u.value = S, c.value = !0;
    }, _ = bt(() => t.activeStatus === t.translationStatus), w = Ck("breakpoints"), y = bt(() => w.value.mobile), x = bt(
      () => y.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (S, k) => _.value ? (Mt(), io(Xd(Ke), {
      key: 0,
      class: Er(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: Yd(() => [
        Gd("div", {
          class: Er(["cx-translation-list__header", x.value])
        }, [
          Gd("h3", {
            class: Er(["px-4 mw-ui-card__title mb-0", { "pb-4": y.value }]),
            textContent: vk(S.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, yk),
          p.value.length ? (Mt(), io(yi, {
            key: 0,
            "selected-source-language": n.value,
            "onUpdate:selectedSourceLanguage": k[0] || (k[0] = (A) => n.value = A),
            "selected-target-language": o.value,
            "onUpdate:selectedTargetLanguage": k[1] || (k[1] = (A) => o.value = A),
            "source-languages": h.value,
            "target-languages": m.value,
            "all-option-enabled": ""
          }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : Da("", !0)
        ], 2)
      ]),
      default: Yd(() => [
        r.value && !p.value.length ? (Mt(), io(Zh, {
          key: 0,
          title: S.$i18n("cx-sx-translation-list-empty-title"),
          description: S.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : Da("", !0),
        r.value ? Da("", !0) : (Mt(), io(Xd(st), { key: 1 })),
        d.value ? (Mt(), Ta("div", xk, [
          (Mt(!0), Ta(Kd, null, Wd(p.value, (A) => (Mt(), io(sC, {
            key: `${e.translationStatus}-${A.key}`,
            translation: A,
            onDeleteTranslation: (L) => f(A)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (Mt(), Ta("div", bk, [
          (Mt(!0), Ta(Kd, null, Wd(p.value, (A) => (Mt(), io(yC, {
            key: `${e.translationStatus}-${A.key}`,
            translation: A,
            onDeleteTranslation: (L) => f(A)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])),
        Sk(AC, {
          modelValue: c.value,
          "onUpdate:modelValue": k[2] || (k[2] = (A) => c.value = A),
          translation: u.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : Da("", !0);
  }
}, $k = window.Vue.computed, Vk = window.Vuex.useStore, je = () => {
  const e = Vk(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = T();
  return { sectionSuggestion: $k(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ) };
}, Ek = window.Vuex.useStore, Lk = window.Vue.computed, Ft = () => {
  const e = Ek(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = T();
  return { currentTranslation: Lk(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (r) => r.status === "draft" && r.sourceTitle === s.value && r.sectionTitleMatches(o.value) && r.sourceLanguage === t.value && r.targetLanguage === n.value
    )
  ) };
}, Qd = window.Vue.computed, Ak = window.Vuex.useStore, rt = () => {
  const e = Ak(), { sectionSuggestion: t } = je(), { currentTranslation: n } = Ft(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = T(), r = Qd(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), c = Qd(() => {
    var d, i;
    const u = ((d = t.value) == null ? void 0 : d.targetTitle) || ((i = n.value) == null ? void 0 : i.targetTitle);
    return e.getters["mediawiki/getPage"](
      a.value,
      u
    );
  });
  return { currentSourcePage: r, currentTargetPage: c };
}, Dk = window.Vue.ref, Tk = window.Vue.watchEffect, { sectionURLParameter: qs } = T(), Bk = (e, t) => C(void 0, null, function* () {
  const n = e.language, o = e.title, s = e.articleSize, a = t.missingSections, c = (yield fe.fetchSuggestionSourceSections(
    n,
    o
  )).sections.filter((u) => u.level === "2").reduce((u, d, i, l) => {
    const g = i < l.length - 1 ? l[i + 1].byteoffset : s;
    return u[d.line] = g - d.byteoffset, u;
  }, {});
  return qs.value ? c[qs.value] : Object.keys(c).filter((u) => a[u]).reduce((u, d) => u + c[d], 0);
}), Lr = (e) => {
  const s = e / 5 / 200;
  return Math.ceil(s);
}, Pk = (e) => {
  const t = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-whole-article",
    Math.round(t * 2) / 2,
    e
  ];
}, Fk = (e, t) => {
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
  const { currentSourcePage: e } = rt(), { sectionSuggestion: t } = je(), n = Dk(null);
  return Tk(() => {
    if (t.value)
      Bk(
        e.value,
        t.value
      ).then((o) => {
        const s = qs.value ? 1 : Object.keys(t.value.missingSections).length;
        n.value = Fk(
          Lr(o),
          s
        );
      });
    else if (e.value) {
      const o = Lr(e.value.articleSize);
      n.value = Pk(o);
    }
  }), { translationSizeMessageArgs: n, bytesToMinutes: Lr };
};
const Ar = window.Vue.toDisplayString, Dr = window.Vue.openBlock, Zd = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const bc = window.Vue.createElementVNode, Mk = window.Vue.unref, Nk = window.Vue.withCtx, Uk = window.Vue.createBlock, Ik = {
  key: 0,
  class: "cdx-info-chip__text"
}, Rk = {
  key: 1,
  class: "cdx-info-chip__text custom-info-chip__with-slash"
}, zk = { class: "cdx-info-chip__text custom-info-chip__with-slash__first" }, Ok = /* @__PURE__ */ bc("span", null, "/", -1), jk = { class: "cdx-info-chip__text custom-info-chip__with-slash__second" }, Hk = window.Codex.CdxInfoChip, Tr = window.Vue.computed, Mi = {
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
    const t = e, n = Tr(() => t.content.lastIndexOf("/")), o = Tr(() => t.content.slice(0, n.value)), s = Tr(() => t.content.slice(n.value + 1));
    return (a, r) => (Dr(), Uk(Mk(Hk), {
      icon: e.icon,
      class: "custom-info-chip"
    }, {
      default: Nk(() => [
        n.value === -1 ? (Dr(), Zd("div", Ik, Ar(e.content), 1)) : (Dr(), Zd("div", Rk, [
          bc("span", zk, Ar(o.value), 1),
          Ok,
          bc("span", jk, Ar(s.value), 1)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const ue = window.Vue.unref, Ct = window.Vue.createVNode, kn = window.Vue.createElementVNode, Pa = window.Vue.toDisplayString, ut = window.Vue.withCtx, qk = window.Vue.resolveDirective, Br = window.Vue.withDirectives, jn = window.Vue.openBlock, ro = window.Vue.createBlock, lo = window.Vue.createCommentVNode, eg = window.Vue.withModifiers, Gk = window.Vue.createElementBlock, Xk = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, Wk = { class: "col shrink pe-4" }, Kk = ["lang", "dir", "textContent"], Yk = ["lang", "dir", "textContent"], Jk = ["textContent"], Qk = ["textContent"], Pr = window.Codex.CdxIcon, kt = window.Vue.computed, Zk = window.Vue.inject, e8 = window.Vuex.useStore, Cc = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [Mo, to, Eo],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = e8(), { bytesToMinutes: o } = ef(), s = kt(() => t.suggestion), a = kt(
      () => s.value.sourceTitle || s.value.title
    ), r = kt(
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
      return (w = r.value) == null ? void 0 : w.description;
    }), d = kt(
      () => s.value instanceof to
    ), i = kt(
      () => s.value instanceof Eo
    ), { sourceLanguageAutonym: l, targetLanguageAutonym: g } = Le(n), p = kt(
      () => i.value ? Uh : Ih
    ), m = Zk("colors"), h = kt(
      () => i.value ? m.blue600 : "currentColor"
    ), f = kt(() => {
      var w;
      return o((w = r.value) == null ? void 0 : w.articleSize) < 15;
    }), _ = kt(
      () => s.value instanceof Zm || s.value instanceof eh
    );
    return (w, y) => {
      const x = qk("i18n");
      return s.value ? (jn(), Gk("div", Xk, [
        kn("div", Wk, [
          Ct(ue($c), {
            class: "cx-suggestion__thumbnail",
            thumbnail: r.value && r.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        Ct(ue(P), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: ut(() => [
            Ct(ue(P), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: ut(() => [
                Ct(ue(b), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: ut(() => [
                    kn("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: s.value.sourceLanguage,
                      dir: ue(R.getDir)(s.value.sourceLanguage),
                      textContent: Pa(a.value)
                    }, null, 8, Kk)
                  ]),
                  _: 1
                }),
                Ct(ue(b), { shrink: "" }, {
                  default: ut(() => [
                    kn("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: s.value.sourceLanguage,
                      dir: ue(R.getDir)(s.value.sourceLanguage),
                      textContent: Pa(u.value)
                    }, null, 8, Yk)
                  ]),
                  _: 1
                }),
                f.value && !d.value && !_.value ? (jn(), ro(ue(b), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: ut(() => [
                    Br(kn("small", null, null, 512), [
                      [x, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : lo("", !0),
                d.value ? (jn(), ro(ue(b), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
                  shrink: ""
                }, {
                  default: ut(() => [
                    Br(kn("small", null, null, 512), [
                      [x, [c.value], "cx-sx-translation-suggestion-info"]
                    ])
                  ]),
                  _: 1
                })) : i.value ? (jn(), ro(ue(b), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: ut(() => [
                    Ct(ue(P), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: ut(() => [
                        Ct(ue(b), { grow: "" }, {
                          default: ut(() => [
                            kn("small", {
                              textContent: Pa(ue(l))
                            }, null, 8, Jk),
                            Ct(ue(Pr), {
                              icon: ue(Mh),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            kn("small", {
                              textContent: Pa(ue(g))
                            }, null, 8, Qk)
                          ]),
                          _: 1
                        }),
                        c.value ? (jn(), ro(ue(b), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: ut(() => [
                            Br(kn("small", null, null, 512), [
                              [x, [
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
                _.value ? (jn(), ro(ue(b), {
                  key: 3,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: ut(() => [
                    Ct(Mi, {
                      icon: ue(Pi),
                      content: s.value.collection.name
                    }, null, 8, ["icon", "content"])
                  ]),
                  _: 1
                })) : lo("", !0)
              ]),
              _: 1
            }),
            Ct(ue(b), { shrink: "" }, {
              default: ut(() => [
                i.value ? lo("", !0) : (jn(), ro(ue(Pr), {
                  key: 0,
                  icon: ue(No),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: y[0] || (y[0] = eg((S) => w.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                Ct(ue(Pr), {
                  class: "cx-suggestion__favorite-button",
                  icon: p.value,
                  "icon-color": h.value,
                  onClick: y[1] || (y[1] = eg((S) => w.$emit("bookmark"), ["stop"]))
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
}, t8 = "suggestion_filter_topic_area", n8 = "suggestion_filter_search_result_seed", o8 = "suggestion_filter_collections", s8 = "suggestion_filter_previous_edits", a8 = "suggestion_filter_popular_articles", tf = (e) => {
  if (e.type === Ue || e.type === ht)
    return t8;
  if (e.type === _t)
    return n8;
  if (e.id === re || e.type === re)
    return o8;
  if (e.id === Pt)
    return s8;
  if (e.id === Wt)
    return a8;
}, kc = (e) => {
  if (e.type === Ue || e.type === ht || e.type === re || e.type === _t)
    return e.id;
  if (e.id === re)
    return "all-collections";
};
const i8 = window.Vue.toDisplayString, tg = window.Vue.createElementVNode, r8 = window.Vue.renderList, ng = window.Vue.Fragment, Fr = window.Vue.openBlock, og = window.Vue.createElementBlock, l8 = window.Vue.unref, c8 = window.Vue.normalizeClass, u8 = window.Vue.createBlock, d8 = { class: "sx-suggestions-filters__group-label mb-3" }, g8 = { class: "sx-suggestions-filters__group-filters mb-3" }, p8 = {
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
    const { getFilterProvider: t } = Ai();
    return (n, o) => (Fr(), og(ng, null, [
      tg("div", d8, i8(e.groupLabel), 1),
      tg("div", g8, [
        (Fr(!0), og(ng, null, r8(e.filters, (s) => (Fr(), u8(Mi, {
          key: s.id,
          class: c8(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(s)
          }]),
          icon: e.filterTypeToIconMap[l8(t)(s)],
          content: s.label,
          onClick: (a) => e.tentativelySelectFilter(s)
        }, null, 8, ["class", "icon", "content", "onClick"]))), 128))
      ])
    ], 64));
  }
}, m8 = window.Vue.computed, sg = window.Vue.ref, ag = window.Vue.watch, Jc = (e, t) => {
  const o = sg([]), s = sg(!1), a = m8(
    () => o.value.slice(0, 4)
  ), r = Yc(() => C(void 0, null, function* () {
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
    s.value = !0, o.value = [], r();
  };
  return ag(t, c), ag(e, c), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
}, Mr = window.Vue.ref, ig = window.Vue.watch, h8 = window.Vue.computed, f8 = mw.loader.require("ext.cx.articletopics"), w8 = f8.flatMap(
  (e) => e.topics.map((t) => Ge(me({}, t), {
    groupId: e.groupId
  }))
), _8 = () => {
  const e = Mr(""), t = Mr("all"), n = Mr({
    topics: [],
    topic_areas: [],
    collections: []
  }), o = pe(), { pageCollections: s } = Rc(), { sourceLanguageURLParameter: a } = T(), r = (i) => (i = i.toLowerCase(), w8.filter(
    (l) => l.label.toLowerCase().includes(i)
  )), c = (i) => (i = i.toLowerCase(), s.value.filter(
    (l) => l.name.toLowerCase().includes(i)
  )), { searchResultsSlice: u } = Jc(a, e);
  ig(u, () => {
    n.value.topics = u.value.map((i) => {
      var l;
      return {
        label: i.title,
        value: i.title,
        description: i.description,
        thumbnail: {
          url: (l = i.thumbnail) == null ? void 0 : l.source
        },
        filterType: _t,
        filterId: i.title
      };
    });
  }), ig([e, t], () => C(void 0, null, function* () {
    n.value.topic_areas = r(e.value).map(
      (i) => ({
        label: i.label,
        value: i.label,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-topics-default-description" : "cx-sx-suggestions-filter-search-results-topics-alternative-description"
        ),
        icon: t.value === "all" ? jh : null,
        filterType: i.groupId === "geography" ? ht : Ue,
        filterId: i.topicId
      })
    ), n.value.collections = c(
      e.value
    ).map((i) => ({
      label: i.name,
      value: i.name,
      description: o.i18n(
        t.value === "all" ? "cx-sx-suggestions-filter-search-results-collections-default-description" : "cx-sx-suggestions-filter-search-results-collections-alternative-description",
        i.articlesCount
      ),
      icon: t.value === "all" ? Pi : null,
      filterType: re,
      filterId: i.name
    }));
  }));
  const d = h8(() => {
    const i = t.value === "all", l = (g) => n.value.topic_areas.filter((p) => p.filterType === g);
    return [
      {
        key: "topics",
        show: n.value.topics.length && i,
        items: n.value.topics,
        showThumbnail: !0
      },
      {
        key: "topic-areas",
        show: l(Ue).length && (i || t.value === "topics"),
        items: l(Ue)
      },
      {
        key: "geography",
        show: l(ht).length && (i || t.value === "geography"),
        items: l(ht)
      },
      {
        key: "collections",
        show: n.value.collections.length && (i || t.value === "collections"),
        items: n.value.collections
      }
    ].filter((g) => g.show);
  });
  return { searchInput: e, searchScope: t, searchResults: d };
};
const we = window.Vue.unref, $t = window.Vue.createVNode, tn = window.Vue.withCtx, v8 = window.Vue.resolveDirective, Nt = window.Vue.createElementVNode, Nr = window.Vue.withDirectives, Fa = window.Vue.toDisplayString, S8 = window.Vue.createTextVNode, y8 = window.Vue.vShow, Ur = window.Vue.renderList, Ir = window.Vue.Fragment, dt = window.Vue.openBlock, nn = window.Vue.createElementBlock, rg = window.Vue.isRef, x8 = window.Vue.createCommentVNode, Rr = window.Vue.createBlock, b8 = { class: "sx-suggestions-filters" }, C8 = { class: "mb-0" }, k8 = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, $8 = { class: "mb-3" }, V8 = { class: "px-4 pb-4 pt-7" }, E8 = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, L8 = ["onClick"], A8 = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, D8 = { key: 0 }, T8 = { key: 1 }, B8 = { class: "sx-suggestions-filters__search-results-empty" }, P8 = { class: "sx-suggestions-filters__search-results-empty-primary" }, F8 = { class: "sx-suggestions-filters__search-results-empty-secondary" }, zr = window.Vue.ref, Or = window.Vue.computed, M8 = window.Vue.inject, lg = window.Codex.CdxButton, N8 = window.Codex.CdxIcon, U8 = window.Codex.CdxTextInput, I8 = window.Codex.CdxMenu, R8 = window.Codex.CdxTabs, z8 = window.Codex.CdxTab, O8 = {
  __name: "SXSuggestionsFiltersDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = pe(), o = t, s = {
      [Pt]: Hh,
      [Wt]: Rh,
      [re]: Pi,
      [Ue]: null,
      [_t]: null
    }, a = Or(() => [
      {
        name: "all",
        label: n.i18n("cx-sx-suggestions-filters-tab-all"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder"
        ),
        filterGroups: u.value.map((M) => ({
          id: M.id,
          label: M.label,
          filters: p(M.id)
        }))
      },
      {
        name: "collections",
        label: n.i18n("cx-sx-suggestions-filters-tab-collections"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-collections"
        ),
        filterGroups: [g("collections")].filter(Boolean)
      },
      {
        name: "geography",
        label: n.i18n("cx-sx-suggestions-filters-tab-regions"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-regions"
        ),
        filterGroups: [g("geography")].filter(Boolean)
      },
      {
        name: "topics",
        label: n.i18n("cx-sx-suggestions-filters-tab-topics"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-topics"
        ),
        filterGroups: u.value.filter(
          (M) => m(M.id)
        )
      }
    ]), r = (M) => G.value = M, c = (M) => {
      const le = g(re), ce = g(ht);
      return M === re && le.filters.length > 6 ? !0 : M === ht && ce.filters.length > 6;
    }, { allFilters: u, isFilterSelected: d, selectFilter: i, findSelectedFilter: l } = zc(), g = (M) => {
      if (M === ht) {
        const X = u.value.find((le) => le.id === M);
        return X.filters = X.filters.map((le) => Ge(me({}, le), {
          type: ht
        })), X;
      }
      return u.value.find((X) => X.id === M);
    }, p = (M) => {
      const X = g(M);
      return c(M) ? X.filters.slice(0, 4) : X.filters;
    }, m = (M) => M !== ht && M !== re && M !== wt, h = it(), f = () => {
      S(), o("update:modelValue", !1);
    }, _ = () => {
      h({ event_type: "suggestion_filters_close" }), f();
    }, w = () => {
      x.value && (h({
        event_type: "suggestion_filters_confirm",
        event_subtype: "suggestion_filters_single_select_confirm",
        event_context: kc(
          x.value
        )
      }), x.value.type === ht ? i({
        type: Ue,
        id: x.value.id,
        label: x.value.label
      }) : i(x.value)), f();
    }, y = zr(!1), x = zr(null), S = () => {
      x.value = null, y.value = !1;
    }, k = (M) => {
      const X = {
        event_type: "suggestion_filters_select",
        event_subtype: "suggestion_filters_single_select",
        event_source: tf(M),
        event_context: kc(M)
      };
      h(X), x.value = M, y.value = !0;
    }, A = (M) => x.value ? x.value.id === M.id && x.value.type === M.type : d(M), L = M8("breakpoints"), B = Or(() => L.value.mobile), { getFilterProvider: J } = Ai(), { searchInput: U, searchScope: G, searchResults: Z } = _8(), Ce = Or(
      () => x.value || l()
    ), be = zr(null), lt = (M) => {
      k({
        type: M.filterType,
        id: M.filterId,
        label: M.label
      }), U.value = "";
    }, Ae = {
      [re]: "cx-sx-suggestions-filters-view-all-collections-group",
      [ht]: "cx-sx-suggestions-filters-view-all-regions-group"
    };
    return (M, X) => {
      const le = v8("i18n");
      return dt(), Rr(we(St), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: B.value,
        header: !1
      }, {
        default: tn(() => [
          Nt("section", b8, [
            $t(we(P), {
              class: "sx-suggestions-filters__header ma-0 py-3 px-4",
              align: "stretch",
              justify: "start"
            }, {
              default: tn(() => [
                $t(we(b), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: tn(() => [
                    $t(we(lg), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": M.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: _
                    }, {
                      default: tn(() => [
                        $t(we(N8), { icon: we(No) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                $t(we(b), {
                  grow: "",
                  align: "center"
                }, {
                  default: tn(() => [
                    Nr(Nt("h5", C8, null, 512), [
                      [le, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                $t(we(b), {
                  shrink: "",
                  align: "start"
                }, {
                  default: tn(() => [
                    Nr($t(we(lg), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: w
                    }, {
                      default: tn(() => [
                        S8(Fa(M.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [y8, y.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Nt("div", k8, [
              Nr(Nt("h5", $8, null, 512), [
                [le, void 0, "cx-sx-suggestions-filter-active-group-label"]
              ]),
              Nt("div", null, [
                $t(Mi, {
                  class: "sx-suggestions-filters__filter sx-suggestions-filters__filter--active my-1 mx-1 py-1",
                  content: Ce.value.label,
                  icon: s[we(J)(Ce.value)]
                }, null, 8, ["content", "icon"])
              ])
            ]),
            $t(we(R8), {
              active: we(G),
              "onUpdate:active": [
                X[2] || (X[2] = (ce) => rg(G) ? G.value = ce : null),
                r
              ],
              class: "sx-suggestions-filters__tabs"
            }, {
              default: tn(() => [
                (dt(!0), nn(Ir, null, Ur(a.value, (ce, W) => (dt(), Rr(we(z8), {
                  key: W,
                  name: ce.name,
                  label: ce.label
                }, {
                  default: tn(() => [
                    Nt("div", V8, [
                      $t(we(U8), {
                        modelValue: we(U),
                        "onUpdate:modelValue": X[0] || (X[0] = (se) => rg(U) ? U.value = se : null),
                        placeholder: ce.searchPlaceholder,
                        "input-type": "search",
                        "start-icon": we(jh),
                        clearable: !!we(U)
                      }, null, 8, ["modelValue", "placeholder", "start-icon", "clearable"])
                    ]),
                    we(U) ? (dt(), nn("div", A8, [
                      we(Z).length ? (dt(), nn("div", D8, [
                        (dt(!0), nn(Ir, null, Ur(we(Z), (se) => (dt(), Rr(we(I8), {
                          key: se.key,
                          selected: be.value,
                          "onUpdate:selected": X[1] || (X[1] = (ke) => be.value = ke),
                          expanded: !0,
                          "menu-items": se.items,
                          "show-thumbnail": se.showThumbnail || !1,
                          onMenuItemClick: lt
                        }, null, 8, ["selected", "menu-items", "show-thumbnail"]))), 128))
                      ])) : (dt(), nn("div", T8, [
                        Nt("div", B8, [
                          Nt("span", P8, Fa(M.$i18n(
                            "cx-sx-suggestions-filter-search-results-empty-primary"
                          )), 1),
                          Nt("span", F8, Fa(M.$i18n(
                            "cx-sx-suggestions-filter-search-results-empty-secondary"
                          )), 1)
                        ])
                      ]))
                    ])) : (dt(), nn("div", E8, [
                      (dt(!0), nn(Ir, null, Ur(ce.filterGroups, (se) => (dt(), nn("div", {
                        key: se.id,
                        class: "sx-suggestions-filters__group"
                      }, [
                        $t(p8, {
                          "group-label": se.label,
                          filters: se.filters,
                          "filter-type-to-icon-map": s,
                          "tentatively-select-filter": k,
                          "is-selected": A
                        }, null, 8, ["group-label", "filters"]),
                        ce.name === "all" && c(se.id) ? (dt(), nn("div", {
                          key: 0,
                          class: "sx-suggestions-filters__group-view-all mb-3",
                          onClick: (ke) => r(se.id)
                        }, [
                          Nt("span", null, Fa(M.$i18n(Ae[se.id])), 1)
                        ], 8, L8)) : x8("", !0)
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
const jr = window.Vue.unref, Ma = window.Vue.openBlock, cg = window.Vue.createBlock;
window.Vue.createCommentVNode;
const j8 = window.Vue.renderList, H8 = window.Vue.Fragment, ug = window.Vue.createElementBlock, q8 = window.Vue.normalizeClass, G8 = window.Vue.createVNode, X8 = {
  key: 1,
  class: "cx-suggestion-list__filters flex px-4 pb-2"
}, dg = window.Vue.ref, W8 = window.Vue.computed, gg = window.Vue.watch, K8 = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = pe(), n = it(), {
      getFiltersSummary: o,
      selectFilter: s,
      isFilterSelected: a,
      waitingForPageCollectionsFetch: r,
      validateURLFilterWithCollections: c
    } = zc(), u = dg(!1), d = () => {
      n({ event_type: "dashboard_suggestion_filters_view_more" }), u.value = !0;
    }, i = (f) => {
      const _ = {
        event_type: "dashboard_suggestion_filters_quick_select",
        event_source: tf(f),
        event_context: kc(f)
      };
      n(_), s(f);
    }, l = {
      [Pt]: Hh,
      [Wt]: Rh,
      [re]: Pi,
      [Ue]: null
    }, { getFilterProvider: g } = Ai(), p = (f) => ({
      id: f.id,
      type: f.type,
      icon: l[g(f)],
      label: f.label,
      action: i
    }), m = dg(o());
    gg(u, (f) => {
      f || (m.value = o());
    }), gg(r, (f) => {
      f || (c(), m.value = o());
    });
    const h = W8(() => [
      ...m.value.map(p),
      {
        id: "more",
        icon: Xc,
        label: t.i18n("cx-sx-suggestions-filter-more-label"),
        action: d
      }
    ]);
    return (f, _) => jr(r) ? (Ma(), cg(jr(st), { key: 0 })) : (Ma(), ug("div", X8, [
      (Ma(!0), ug(H8, null, j8(h.value, (w) => (Ma(), cg(Mi, {
        key: w.label,
        class: q8(["cx-suggestion-list__filter py-1 me-1", { "cx-suggestion-list__filter--active": jr(a)(w) }]),
        icon: w.icon,
        content: w.label,
        onClick: (y) => w.action(w)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      G8(O8, {
        modelValue: u.value,
        "onUpdate:modelValue": _[0] || (_[0] = (w) => u.value = w)
      }, null, 8, ["modelValue"])
    ]));
  }
}, co = window.Vue.computed, pg = window.Vue.ref, Y8 = window.Vue.watch, J8 = window.Vuex.useStore, Q8 = () => {
  const e = J8(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = T(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = Nc(), r = it(), c = co(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), u = co(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), d = pg(0), i = pg(0), { maxSuggestionsPerSlice: l } = e.state.suggestions, g = 4, p = co(
    () => a(d.value)
  ), m = co(
    () => s(i.value)
  ), h = () => {
    S(), B(), k(), J();
  }, {
    fetchNextSectionSuggestionsSlice: f,
    fetchNextPageSuggestionsSlice: _
  } = Oc(), w = (U) => U.length === l, y = co(
    () => w(m.value)
  ), x = co(
    () => w(p.value)
  ), S = () => {
    const U = (d.value + 1) % g, G = w(
      a(U)
    );
    (!x.value || !G) && f();
  }, k = () => {
    const U = (i.value + 1) % g, G = w(
      s(U)
    );
    (!y.value || !G) && _();
  }, A = (U) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", U), S();
  }, L = (U) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", U), k();
  }, B = () => d.value = (d.value + 1) % g, J = () => i.value = (i.value + 1) % g;
  return Y8(
    o,
    () => {
      i.value = 0, k(), d.value = 0, S();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: m,
    currentSectionSuggestionsSlice: p,
    discardPageSuggestion: L,
    discardSectionSuggestion: A,
    onSuggestionRefresh: h,
    pageSuggestionsLoading: u,
    sectionSuggestionsLoading: c,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: s,
    isCurrentPageSuggestionsSliceFull: y,
    isCurrentSectionSuggestionsSliceFull: x
  };
}, Z8 = window.Vuex.useStore, Qc = () => {
  const e = Z8(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = Oc(), o = (d, i, l) => e.state.suggestions.pageSuggestions.find(
    (g) => g.sourceLanguage === d && g.targetLanguage === i && g.sourceTitle === l
  ), s = (d) => C(void 0, null, function* () {
    const { sourceTitle: i, sourceLanguage: l, targetLanguage: g } = d;
    yield fe.markFavorite(i, l, g);
    const p = new Eo({
      title: i,
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
    markFavoriteSuggestion: (d, i, l) => C(void 0, null, function* () {
      const g = o(
        i,
        l,
        d
      );
      g && (e.commit(
        "suggestions/removePageSuggestionFromList",
        g
      ), n());
      const p = e.getters["suggestions/getSectionSuggestionsForArticle"](i, l, d);
      p != null && p.isListable && (e.commit(
        "suggestions/removeSectionSuggestionFromList",
        p
      ), t()), yield fe.markFavorite(
        d,
        i,
        l
      );
      const m = new Eo({
        title: d,
        sourceLanguage: i,
        targetLanguage: l
      });
      e.commit("suggestions/addFavoriteSuggestion", m);
    }),
    removeFavoriteSuggestion: (d) => (e.commit("suggestions/removeFavoriteSuggestion", d), fe.unmarkFavorite(d))
  };
}, e2 = "suggestion_no_seed", t2 = "suggestion_recent_edit", n2 = "suggestion_topic_area", o2 = "suggestion_search_result_seed", s2 = "suggestion_featured", a2 = "suggestion_collections", i2 = () => {
  const { currentSuggestionFilters: e } = T();
  return (t = null) => {
    const { type: n, id: o } = e.value;
    if (o === Pt)
      return t ? t2 : e2;
    if (n === Ue)
      return n2;
    if (n === _t)
      return o2;
    if (o === Wt)
      return s2;
    if (o === re || n === re)
      return a2;
    throw new Error("Event source cannot be empty");
  };
};
const mg = window.Vue.normalizeClass, r2 = window.Vue.resolveDirective, ts = window.Vue.createElementVNode, Na = window.Vue.withDirectives, he = window.Vue.unref, Ye = window.Vue.openBlock, Ut = window.Vue.createBlock, $n = window.Vue.createCommentVNode, Hr = window.Vue.createVNode, ns = window.Vue.withCtx, hg = window.Vue.renderList, fg = window.Vue.Fragment, qr = window.Vue.createElementBlock, l2 = window.Vue.toDisplayString, c2 = window.Vue.createTextVNode, u2 = window.Vue.vShow, d2 = { class: "cx-suggestion-list" }, g2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, p2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, m2 = { class: "cx-suggestion-list__refresh-button-container justify-center" }, It = window.Vue.computed, h2 = window.Vue.inject, f2 = window.Vue.ref, w2 = window.Codex.CdxButton, _2 = window.Codex.CdxIcon, v2 = window.Vuex.useStore, S2 = {
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
    } = T(), { supportedSourceLanguageCodes: s, supportedTargetLanguageCodes: a } = Js(), r = rh(), c = (W) => r(W, n.value), u = (W) => r(t.value, W), d = i2(), i = na(), l = (W) => {
      i(
        W.sourceTitle,
        W.sourceLanguage,
        W.targetLanguage,
        d(W.suggestionSeed),
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
      isCurrentSectionSuggestionsSliceFull: x
    } = Q8(), S = f2(null), k = it(), A = () => {
      k({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), f(), S.value && S.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: L, markFavoritePageSuggestion: B } = Qc(), J = h2("breakpoints"), U = It(() => J.value.mobile), G = It(
      () => U.value ? null : "pb-2 flex justify-between items-center"
    ), Z = v2(), Ce = It(
      () => Z.state.suggestions.isPageSuggestionsFetchPending
    ), be = It(
      () => Z.state.suggestions.isSectionSuggestionsFetchPending
    ), lt = It(
      () => Ce.value || _.value && !y.value
    ), Ae = It(
      () => be.value || w.value && !x.value
    ), M = It(
      () => Ce.value || _.value || g.value.length > 0
    ), X = It(
      () => be.value || w.value || p.value.length > 0
    ), le = It(
      () => !M.value && !X.value
    ), ce = It(
      () => !w.value && !_.value && !Ce.value && !be.value && !le.value
    );
    return (W, se) => {
      const ke = r2("i18n");
      return Na((Ye(), qr("div", d2, [
        Hr(he(Ke), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: ns(() => [
            ts("div", {
              class: mg(["cx-suggestion-list__header-card__header px-4", G.value])
            }, [
              Na(ts("h3", {
                class: mg(["mw-ui-card__title mb-0", { "py-3": U.value }])
              }, null, 2), [
                [ke, void 0, "cx-suggestionlist-title"]
              ]),
              U.value ? $n("", !0) : (Ye(), Ut(yi, {
                key: 0,
                "source-languages": he(s),
                "target-languages": he(a),
                "selected-source-language": he(t),
                "selected-target-language": he(n),
                "onUpdate:selectedSourceLanguage": c,
                "onUpdate:selectedTargetLanguage": u
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            Hr(K8)
          ]),
          default: ns(() => [
            U.value ? (Ye(), Ut(yi, {
              key: 0,
              "source-languages": he(s),
              "target-languages": he(a),
              "selected-source-language": he(t),
              "selected-target-language": he(n),
              "onUpdate:selectedSourceLanguage": c,
              "onUpdate:selectedTargetLanguage": u
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])) : $n("", !0)
          ]),
          _: 1
        }),
        M.value ? (Ye(), Ut(he(Ke), {
          key: 0,
          ref_key: "pageSuggestionsList",
          ref: S,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: ns(() => [
            Na(ts("h5", g2, null, 512), [
              [ke, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (Ye(!0), qr(fg, null, hg(he(g), (N, j) => (Ye(), Ut(Cc, {
              key: `page-suggestion-${j}`,
              suggestion: N,
              onClose: (v) => he(m)(N),
              onClick: (v) => l(N),
              onBookmark: (v) => he(B)(N)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            lt.value ? (Ye(), Ut(he(st), { key: 0 })) : $n("", !0)
          ]),
          _: 1
        }, 512)) : $n("", !0),
        X.value ? (Ye(), Ut(he(Ke), {
          key: 1,
          class: "cx-suggestion-list__section-suggestions pa-0 mb-0"
        }, {
          default: ns(() => [
            Na(ts("h5", p2, null, 512), [
              [ke, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (Ye(!0), qr(fg, null, hg(he(p), (N, j) => (Ye(), Ut(Cc, {
              key: `section-suggestion-${j}`,
              class: "ma-0",
              suggestion: N,
              onClose: (v) => he(h)(N),
              onClick: (v) => l(N),
              onBookmark: (v) => he(L)(N)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            Ae.value ? (Ye(), Ut(he(st), { key: 0 })) : $n("", !0)
          ]),
          _: 1
        })) : $n("", !0),
        le.value ? (Ye(), Ut(Zh, {
          key: 2,
          title: W.$i18n("cx-sx-suggestion-list-empty-title"),
          description: W.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : $n("", !0),
        ts("div", m2, [
          ce.value ? (Ye(), Ut(he(w2), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: A
          }, {
            default: ns(() => [
              Hr(he(_2), {
                class: "me-1",
                icon: he(Oh)
              }, null, 8, ["icon"]),
              c2(" " + l2(W.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : $n("", !0)
        ])
      ], 512)), [
        [u2, e.active]
      ]);
    };
  }
}, y2 = window.Vue.resolveDirective, x2 = window.Vue.createElementVNode, b2 = window.Vue.withDirectives, C2 = window.Vue.renderList, k2 = window.Vue.Fragment, Gr = window.Vue.openBlock, $2 = window.Vue.createElementBlock, wg = window.Vue.unref, _g = window.Vue.createBlock, vg = window.Vue.withCtx, V2 = window.Vue.createCommentVNode, E2 = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, L2 = window.Vue.computed, A2 = window.Vuex.useStore, D2 = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = A2(), n = L2(() => t.state.suggestions.favorites || []), o = na(), s = (r) => o(
      r.title,
      r.sourceLanguage,
      r.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = Qc();
    return (r, c) => {
      const u = y2("i18n");
      return n.value.length ? (Gr(), _g(wg(Ke), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: vg(() => [
          b2(x2("h3", E2, null, 512), [
            [u, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: vg(() => [
          (Gr(!0), $2(k2, null, C2(n.value, (d, i) => (Gr(), _g(Cc, {
            key: `favorite-${i}`,
            suggestion: d,
            onClick: (l) => s(d),
            onBookmark: (l) => wg(a)(d)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : V2("", !0);
    };
  }
};
const T2 = window.Vue.resolveDirective, os = window.Vue.createElementVNode, B2 = window.Vue.withDirectives, P2 = window.Vue.renderList, F2 = window.Vue.Fragment, Sg = window.Vue.openBlock, yg = window.Vue.createElementBlock, M2 = window.Vue.unref, N2 = window.Vue.createVNode, U2 = window.Vue.toDisplayString, I2 = { class: "cx-help-panel pa-4" }, R2 = { class: "cx-help-panel__item-list mt-6 ps-2" }, z2 = ["href", "target"], O2 = ["textContent"], j2 = window.Codex.CdxIcon, H2 = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = pe(), n = [
      {
        icon: Lb,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
        target: "_blank"
      },
      {
        icon: Vb,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
        target: "_blank"
      }
    ];
    return (o, s) => {
      const a = T2("i18n");
      return Sg(), yg("div", I2, [
        B2(os("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        os("ul", R2, [
          (Sg(), yg(F2, null, P2(n, (r, c) => os("li", {
            key: c,
            class: "mt-4"
          }, [
            os("a", {
              href: r.href,
              target: r.target
            }, [
              N2(M2(j2), {
                class: "me-2",
                icon: r.icon
              }, null, 8, ["icon"]),
              os("span", {
                textContent: U2(r.label)
              }, null, 8, O2)
            ], 8, z2)
          ])), 64))
        ])
      ]);
    };
  }
};
const q2 = window.Vue.resolveDirective, uo = window.Vue.createElementVNode, Xr = window.Vue.withDirectives, xg = window.Vue.toDisplayString, Wr = window.Vue.unref, Kr = window.Vue.withCtx, Yr = window.Vue.createVNode, G2 = window.Vue.openBlock, X2 = window.Vue.createElementBlock, W2 = { class: "cx-stats-panel pa-4" }, K2 = ["textContent"], Y2 = { class: "cx-stats-panel__monthly-stats-label" }, J2 = ["textContent"], Q2 = { class: "cx-stats-panel__total-stats-label" }, Z2 = window.Vue.ref, bg = window.Vue.computed, e$ = window.Vue.watch, t$ = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = e, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", o = bg(() => {
      var r, c;
      return ((c = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : c.count) || 0;
    }), s = bg(() => {
      var r, c;
      return ((c = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : c.delta) || 0;
    }), a = Z2(null);
    return e$(
      () => t.stats,
      () => {
        const r = t.stats, c = a.value.getContext("2d"), u = Object.keys(t.stats || {}).sort(), d = u.reduce(
          (x, S) => Math.max(x, r[S].delta),
          0
        ), i = u.map((x) => r[x].delta), l = a.value.getBoundingClientRect().width, g = a.value.getBoundingClientRect().height;
        a.value.width = l, a.value.height = g;
        const p = 4, m = 6, h = 50, f = (h - p) / d;
        let _ = p;
        const w = Math.floor(
          (l - p) / (m + p)
        ), y = i.slice(
          Math.max(i.length - w, 0)
        );
        y.forEach((x, S) => {
          S === y.length - 1 && (c.fillStyle = "#36c");
          const k = h - x * f;
          c.fillRect(_, k, m, x * f), _ += m + p;
        });
      }
    ), (r, c) => {
      const u = q2("i18n");
      return G2(), X2("div", W2, [
        Xr(uo("h5", null, null, 512), [
          [u, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        Yr(Wr(P), null, {
          default: Kr(() => [
            Yr(Wr(b), { class: "cx-stats-panel__monthly-stats" }, {
              default: Kr(() => [
                uo("h3", {
                  textContent: xg(s.value)
                }, null, 8, K2),
                Xr(uo("h5", Y2, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            Yr(Wr(b), { class: "cx-stats-panel__total-stats" }, {
              default: Kr(() => [
                uo("h3", {
                  textContent: xg(o.value)
                }, null, 8, J2),
                Xr(uo("h5", Q2, null, 512), [
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
const n$ = window.Vue.renderSlot, o$ = window.Vue.unref, s$ = window.Vue.createVNode, a$ = window.Vue.createElementVNode, i$ = window.Vue.openBlock, r$ = window.Vue.createElementBlock, l$ = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, c$ = { class: "col-12 ma-0 pa-0" }, u$ = {
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
    return (a, r) => (i$(), r$("footer", l$, [
      a$("div", c$, [
        n$(a.$slots, "default", {}, () => [
          s$(o$(Gs), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: s
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, d$ = window.Vuex.useStore, g$ = () => {
  const e = d$(), t = Fo();
  return () => C(void 0, null, function* () {
    if (e.state.suggestions.favorites.length)
      return;
    const n = yield fe.fetchFavorites();
    if (!n || !n.length)
      return;
    const o = {};
    for (const s of n)
      e.commit("suggestions/addFavoriteSuggestion", s), fe.fetchSectionSuggestion(
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
        a.map((r) => r.title)
      );
  });
}, p$ = window.Vuex.useStore, of = () => {
  const e = p$(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = T(), { isDefaultFilter: r } = Lc(), { previousRoute: c } = Le(e), u = it(), d = () => {
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
  }, i = () => {
    if (n.value)
      return d() || "direct_preselect";
    const p = {
      "sx-article-search": "return_from_search",
      "sx-translation-confirmer": "return_from_confirmation",
      "sx-section-selector": "return_from_section_selection",
      "sx-sentence-selector": "editor_close"
    }[c.value];
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
}, m$ = window.Vue.watch, h$ = () => {
  const { fetchAllTranslations: e } = Uo(), t = sh(), n = g$(), { fetchPageCollections: o } = Rc(), { logDashboardOpenEvent: s } = of(), { applicationLanguagesInitialized: a } = lh();
  return () => C(void 0, null, function* () {
    o();
    try {
      yield n();
    } catch (r) {
      mw.log.error("[CX] Error while fetching favorite suggestions", r);
    }
    yield e(), m$(
      a,
      () => {
        a.value && (s(), t());
      },
      { immediate: !0 }
    );
  });
}, Cg = window.Vue.computed, f$ = window.Vue.ref, w$ = window.Vue.watch, _$ = window.Vue.watchEffect, v$ = window.Vuex.useStore, S$ = ["suggestions", "draft", "published"], y$ = () => {
  const e = v$(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = T(), { translationsFetched: o } = Uo(), s = f$(null);
  if (S$.includes(t.value))
    s.value = t.value;
  else {
    const a = Cg(
      () => o.value.draft
    ), r = Cg(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = r.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", w$(a, (c) => {
      c && (s.value = r.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return _$(() => {
    n(s.value), window.scrollTo(0, 0);
  }), s;
}, x$ = window.Vue.computed, b$ = () => {
  const e = pe();
  return x$(() => [
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
const Se = window.Vue.unref, Be = window.Vue.createVNode, C$ = window.Vue.toDisplayString, k$ = window.Vue.createTextVNode, on = window.Vue.withCtx, Jr = window.Vue.openBlock, kg = window.Vue.createBlock, $g = window.Vue.createCommentVNode, $$ = window.Vue.vShow, V$ = window.Vue.withDirectives, E$ = window.Vue.isRef, L$ = window.Vue.createElementBlock, A$ = window.Vue.computed, D$ = window.Vuex.useStore, T$ = window.Codex.CdxButton, B$ = window.Codex.CdxIcon, P$ = {
  __name: "CXDashboard",
  setup(e) {
    const t = Te(), n = it(), o = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    h$()();
    const a = D$();
    a.dispatch("translator/fetchTranslatorStats");
    const r = A$(() => a.state.translator.translatorStats), c = y$(), u = b$(), d = nf(), i = (l) => {
      d(l), c.value = l;
    };
    return (l, g) => (Jr(), L$("div", null, [
      Be(Se(P), { class: "ma-0 pb-4" }, {
        default: on(() => [
          Be(Se(T$), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: o
          }, {
            default: on(() => [
              Be(Se(B$), {
                class: "me-1",
                icon: Se(Sc)
              }, null, 8, ["icon"]),
              k$(" " + C$(l.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      Be(Se(P), {
        class: "ma-0",
        align: "start"
      }, {
        default: on(() => [
          l.$mwui.breakpoint.tabletAndUp ? (Jr(), kg(Se(b), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: on(() => [
              Be(Se(Gs), {
                id: "dashboard-list-selector--desktop",
                items: Se(u),
                active: Se(c),
                onSelect: i
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : $g("", !0),
          Be(Se(b), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: on(() => [
              V$(Be(D2, null, null, 512), [
                [$$, Se(c) === "suggestions"]
              ]),
              Be(S2, {
                active: Se(c) === "suggestions"
              }, null, 8, ["active"]),
              Be(Jd, {
                "translation-status": "draft",
                "active-status": Se(c)
              }, null, 8, ["active-status"]),
              Be(Jd, {
                "translation-status": "published",
                "active-status": Se(c)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          Be(Se(b), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: on(() => [
              Be(Se(P), {
                class: "ma-0",
                align: "start"
              }, {
                default: on(() => [
                  Be(Se(b), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: on(() => [
                      Be(t$, { stats: r.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  Be(Se(b), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: on(() => [
                      Be(H2)
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
      l.$mwui.breakpoint.mobile ? (Jr(), kg(u$, {
        key: 0,
        active: Se(c),
        "onUpdate:active": g[0] || (g[0] = (p) => E$(c) ? c.value = p : null),
        items: Se(u)
      }, null, 8, ["active", "items"])) : $g("", !0)
    ]));
  }
}, F$ = {
  name: "DashboardView",
  components: { CxDashboard: P$ }
}, M$ = window.Vue.resolveComponent, N$ = window.Vue.createVNode, U$ = window.Vue.openBlock, I$ = window.Vue.createElementBlock, R$ = { class: "cx-translation-dashboard" };
function z$(e, t, n, o, s, a) {
  const r = M$("cx-dashboard");
  return U$(), I$("main", R$, [
    N$(r, { class: "mb-4 pb-12 px-3 px-tablet-10" })
  ]);
}
const Vg = /* @__PURE__ */ ae(F$, [["render", z$]]), go = window.Vue.computed, O$ = () => {
  const { sectionSuggestion: e } = je(), { targetLanguageURLParameter: t } = T(), { currentTranslation: n } = Ft(), o = go(
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
  ), { targetPageExists: r, getCurrentTitleByLanguage: c } = Sn(), u = go(() => r ? Y.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    c(t.value, null)
  ) : null), d = (g) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : g ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : r.value ? s.value > 1 || s.value === 1 && a.value > 0 ? "cx-sx-select-section" : s.value === 1 && a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : s.value === 0 && a.value > 0 ? "cx-sx-select-section" : s.value === 0 && a.value === 0 ? "cx-sx-translation-confirmer-action-new-translation" : "" : "cx-sx-start-translation-button-label", i = go(() => {
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
      return !r.value || ((g = e.value) == null ? void 0 : g.missingSectionsCount) > 0;
    }
  );
  return {
    actionInformationMessageArgs: i,
    getActionButtonLabel: d,
    isProgressiveButton: l,
    targetArticlePath: u
  };
};
function j$(e) {
  return e.$el = $(e), e;
}
function H$(e, t, n, o) {
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
function q$() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function G$(e, t) {
  return C(this, null, function* () {
    yield Zc(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = j$(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const X$ = window.Vue.computed, W$ = window.Vue.onMounted, K$ = window.Vue.ref;
function Y$(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const J$ = {
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
    const n = K$(null);
    let o = null;
    const s = X$(() => o.getHtml()), a = () => {
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
    return W$(() => C(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = Y$;
      const i = yield G$(u, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), o = H$(
        i,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = q$, o.focus();
    })), { sxeditor: n };
  }
}, wi = window.Vue.createElementVNode, Q$ = window.Vue.openBlock, Z$ = window.Vue.createElementBlock, e4 = ["lang", "dir"], t4 = /* @__PURE__ */ wi("div", { class: "overlay-header-container" }, [
  /* @__PURE__ */ wi("div", { class: "overlay-header header initial-header" }, [
    /* @__PURE__ */ wi("div", { class: "toolbar" })
  ])
], -1), n4 = ["lang", "dir"];
function o4(e, t, n, o, s, a) {
  return Q$(), Z$("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    t4,
    wi("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, n4)
  ], 8, e4);
}
const s4 = /* @__PURE__ */ ae(J$, [["render", o4]]);
function Zc() {
  return mw.loader.using("mw.cx3.ve");
}
const a4 = window.Vuex.useStore, i4 = () => {
  const e = a4();
  return (t, n) => C(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield Zc(), new Promise((s) => {
      setTimeout(() => {
        const a = Ym.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, r4 = window.Vuex.useStore, sf = () => {
  const e = r4();
  return (t, n, o, s = null) => C(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      o
    );
    if (a && a.content)
      return;
    const r = yield no.fetchPageContent(
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
}, Ni = () => {
  const { currentSourcePage: e } = rt(), t = i4(), n = sf(), {
    setSectionURLParam: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    revisionURLParameter: c
  } = T(), u = (l, g) => C(void 0, null, function* () {
    l() || (yield n(
      s.value,
      a.value,
      r.value,
      c.value
    ), Ws || (yield t(
      s.value,
      r.value
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
}, l4 = window.Vuex.useStore, Io = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o,
    isQuickTutorialForced: s
  } = T(), a = l4(), r = Te(), c = () => {
    const l = r.currentRoute.value.name !== "sx-quick-tutorial" && (s() || !a.getters["translator/userHasSectionTranslations"]) ? "sx-quick-tutorial" : "sx-sentence-selector";
    return r.getRoutes().find((g) => g.name === l);
  }, u = () => {
    const i = mw.config.get(
      "wgContentTranslationTranslateInTarget"
    ), l = Y.getCurrentWikiLanguageCode();
    if (!i || t.value === l)
      return !1;
    const g = o.value ? { section: o.value } : {}, p = Y.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      g
    );
    return location.href = p + "#" + c().path, !0;
  }, d = () => {
    location.href = Y.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      o.value ? { sourcesection: o.value } : {}
    );
  };
  return () => {
    if (Y.setCXToken(
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
    r.push({ name: l.name });
  };
}, eu = () => {
  const e = it(), { currentTranslation: t } = Ft();
  return () => {
    if (!t.value)
      return mw.log.error(
        "[CX Event Logging] No current draft translation to continue"
      ), Promise.resolve();
    const {
      translationId: n,
      sourceLanguage: o,
      targetLanguage: s,
      sourceTitle: a,
      targetTitle: r,
      isLeadSectionTranslation: c,
      sourceSectionTitle: u,
      targetSectionTitle: d
    } = t.value, i = {
      event_type: "dashboard_translation_continue",
      translation_id: n,
      translation_source_language: o,
      translation_source_title: a,
      translation_target_language: s,
      translation_target_title: r,
      translation_type: c ? "article" : "section"
    };
    return u && (i.translation_source_section = u), d && (i.translation_target_section = d), e(i);
  };
}, c4 = window.Vue.ref, u4 = () => {
  const e = Te(), { logDashboardTranslationStartEvent: t } = Fi(), n = eu(), o = Io(), { sectionURLParameter: s } = T(), { targetPageExists: a } = Sn(), { selectPageSectionByTitle: r } = Ni(), c = () => C(void 0, null, function* () {
    yield r(s.value), e.push({ name: "sx-content-comparator" });
  }), u = c4(!1), { currentTranslation: d } = Ft();
  return {
    handlePrimaryButtonClick: () => {
      d.value ? d.value.isArticleTranslation && !Ws ? u.value = !0 : (n(), o()) : s.value ? c() : a.value ? e.push({ name: "sx-section-selector" }) : (t(), o());
    },
    translationConfirmationDialogOn: u
  };
};
const d4 = window.Vue.resolveDirective, Eg = window.Vue.createElementVNode, Lg = window.Vue.withDirectives, g4 = window.Vue.unref, p4 = window.Vue.withCtx, m4 = window.Vue.openBlock, h4 = window.Vue.createBlock, f4 = {
  href: "",
  target: "_blank"
}, w4 = window.Codex.CdxDialog, _4 = {
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
    const n = e, o = t, s = (d) => o("update:modelValue", d), a = pe(), r = {
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
    return (d, i) => {
      const l = d4("i18n");
      return m4(), h4(g4(w4), {
        class: "cx-unreviewed-translation-dialog",
        open: e.modelValue,
        title: d.$i18n("cx-unreviewed-translation-dialog-title"),
        "close-button-label": d.$i18n("cx-unreviewed-translation-dialog-close-button-aria-label"),
        "primary-action": r,
        "default-action": c,
        "onUpdate:open": i[0] || (i[0] = (g) => s(g)),
        onPrimary: u,
        onDefault: i[1] || (i[1] = (g) => s(!1))
      }, {
        default: p4(() => [
          Lg(Eg("p", null, null, 512), [
            [l, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          Lg(Eg("a", f4, null, 512), [
            [l, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title", "close-button-label"]);
    };
  }
};
const ye = window.Vue.unref, v4 = window.Vue.resolveDirective, ss = window.Vue.createElementVNode, Ag = window.Vue.withDirectives, as = window.Vue.toDisplayString, is = window.Vue.openBlock, Qr = window.Vue.createElementBlock, Zr = window.Vue.createCommentVNode, gt = window.Vue.createVNode, Vt = window.Vue.withCtx, el = window.Vue.createTextVNode, S4 = window.Vue.withModifiers, Dg = window.Vue.createBlock, y4 = window.Vue.Fragment, x4 = { class: "sx-translation-confirmer-body pb-4" }, b4 = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, C4 = ["textContent"], k4 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, $4 = ["href"], V4 = ["textContent"], Ua = window.Vue.computed, E4 = window.Vue.inject, Tg = window.Vue.ref, L4 = window.Vue.watchEffect, A4 = window.Vuex.useStore, tl = window.Codex.CdxButton, D4 = window.Codex.CdxIcon, T4 = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = Te(), o = A4();
    E4("colors");
    const { sectionSuggestion: s } = je(), { targetLanguageAutonym: a } = Le(o), { sectionURLParameter: r } = T(), { logDashboardTranslationStartEvent: c } = Fi(), u = Io(), { handlePrimaryButtonClick: d, translationConfirmationDialogOn: i } = u4(), l = Tg(!1), g = Tg(null), p = () => C(this, null, function* () {
      let G = !0;
      try {
        G = yield vt.checkUnreviewedTranslations();
      } catch (Z) {
        mw.log.error(
          "Error while checking for user's unreviewed translations ",
          Z
        );
      }
      G !== !0 && (l.value = !0, g.value = G.targetUrl);
    }), m = () => C(this, null, function* () {
      yield p(), !l.value && (c(), u());
    }), h = () => C(this, null, function* () {
      yield p(), !l.value && d();
    }), f = t;
    L4(() => {
      i.value && (f("open-translation-confirmation-dialog"), i.value = !1);
    });
    const {
      actionInformationMessageArgs: _,
      getActionButtonLabel: w,
      isProgressiveButton: y,
      targetArticlePath: x
    } = O$(), S = pe(), k = Ua(
      () => S.i18n(w(!!r.value))
    ), A = Ua(
      () => S.i18n(..._.value)
    ), L = () => C(this, null, function* () {
      yield p(), !l.value && n.push({ name: "sx-section-selector" });
    }), B = Ua(() => {
      var G, Z;
      return r.value && !!((Z = (G = s.value) == null ? void 0 : G.sourceSections) != null && Z.length);
    }), { targetPageExists: J } = Sn(), U = Ua(() => !r.value && J.value && Ws);
    return (G, Z) => {
      const Ce = v4("i18n");
      return is(), Qr(y4, null, [
        ss("section", x4, [
          ye(r) ? (is(), Qr("section", b4, [
            Ag(ss("h6", null, null, 512), [
              [Ce, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            ss("h5", {
              class: "ma-0",
              textContent: as(ye(r))
            }, null, 8, C4)
          ])) : ye(J) ? (is(), Qr("section", k4, [
            gt(ye(P), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: Vt(() => [
                Ag(gt(ye(b), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [Ce, [ye(a)], "cx-sx-existing-translation-status"]
                ]),
                gt(ye(b), { shrink: "" }, {
                  default: Vt(() => [
                    ss("a", {
                      href: ye(x),
                      target: "_blank"
                    }, [
                      gt(ye(D4), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: ye(Wc)
                      }, null, 8, ["icon"])
                    ], 8, $4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            gt(ye(P), { class: "ma-0" }, {
              default: Vt(() => [
                gt(ye(b), null, {
                  default: Vt(() => [
                    ss("span", {
                      textContent: as(A.value)
                    }, null, 8, V4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : Zr("", !0),
          gt(ye(P), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: Vt(() => [
              B.value ? (is(), Dg(ye(b), {
                key: 0,
                shrink: ""
              }, {
                default: Vt(() => [
                  gt(ye(tl), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: S4(L, ["stop"])
                  }, {
                    default: Vt(() => [
                      el(as(G.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : Zr("", !0),
              U.value ? (is(), Dg(ye(b), {
                key: 1,
                shrink: ""
              }, {
                default: Vt(() => [
                  gt(ye(tl), {
                    size: "large",
                    onClick: m
                  }, {
                    default: Vt(() => [
                      el(as(G.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : Zr("", !0),
              gt(ye(b), { shrink: "" }, {
                default: Vt(() => [
                  gt(ye(tl), {
                    weight: "primary",
                    size: "large",
                    action: ye(y) ? "progressive" : "default",
                    onClick: h
                  }, {
                    default: Vt(() => [
                      el(as(k.value), 1)
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
        gt(_4, {
          modelValue: l.value,
          "onUpdate:modelValue": Z[0] || (Z[0] = (be) => l.value = be),
          "target-url": g.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const nl = window.Vue.unref, B4 = window.Vue.openBlock, P4 = window.Vue.createBlock, F4 = window.Vue.computed, af = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedTargetLanguageCodes: t } = Js(), {
      sourceLanguageURLParameter: n,
      targetLanguageURLParameter: o
    } = T(), { currentLanguageTitleGroup: s } = Sn(), a = F4(
      () => {
        var d;
        return ((d = s.value) == null ? void 0 : d.titles.map((i) => i.lang)) || [];
      }
    ), r = yS(), c = (d) => r(d, o.value), u = (d) => r(n.value, d);
    return (d, i) => (B4(), P4(yi, {
      class: "sx-article-language-selector",
      "source-languages": a.value,
      "target-languages": nl(t),
      "selected-source-language": nl(n),
      "selected-target-language": nl(o),
      "onUpdate:selectedSourceLanguage": c,
      "onUpdate:selectedTargetLanguage": u
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
};
const Pe = window.Vue.unref, ol = window.Vue.toDisplayString, sn = window.Vue.createElementVNode, Rt = window.Vue.createVNode, po = window.Vue.withCtx, M4 = window.Vue.resolveDirective, N4 = window.Vue.withDirectives, U4 = window.Vue.normalizeClass, I4 = window.Vue.openBlock, R4 = window.Vue.createBlock, z4 = ["textContent"], O4 = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, j4 = ["textContent"], H4 = { class: "pe-3" }, q4 = ["textContent"], G4 = window.Codex.CdxButton, rs = window.Codex.CdxIcon, an = window.Vue.computed, X4 = window.Vuex.useStore, W4 = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = X4(), n = pe(), { currentSourcePage: o } = rt(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r
    } = T(), c = an(() => t.state.suggestions.favorites || []), u = an(
      () => c.value.some(
        (k) => r.value === k.title && s.value === k.sourceLanguage && a.value === k.targetLanguage
      )
    ), { markFavoriteSuggestion: d, removeFavoriteSuggestion: i } = Qc(), { translationSizeMessageArgs: l } = ef(), g = () => d(
      r.value,
      s.value,
      a.value
    ), p = () => i(
      new Eo({
        title: r.value,
        sourceLanguage: s.value,
        targetLanguage: a.value
      })
    ), m = an(
      () => u.value ? Uh : Ih
    ), h = an(
      () => u.value ? p : g
    ), f = an(
      () => Y.getPageUrl(s.value || "", r.value || "")
    ), _ = an(
      () => {
        var k;
        return (((k = o.value) == null ? void 0 : k.langLinksCount) || 0) + 1;
      }
    ), w = (k) => {
      const A = [
        { value: 1e9, suffix: "B" },
        // 1 billion
        { value: 1e6, suffix: "M" },
        // 1 million
        { value: 1e3, suffix: "K" }
        // 1 thousand
      ];
      for (let L = 0; L < A.length; L++)
        if (k >= A[L].value)
          return (k / A[L].value).toFixed(1).replace(/\.0$/, "") + A[L].suffix;
      return k.toString();
    }, y = an(() => {
      var A;
      const k = Object.values(((A = o.value) == null ? void 0 : A.pageviews) || {}).reduce(
        (L, B) => L + B,
        0
      );
      return w(k);
    }), x = an(() => l.value ? n.i18n(...l.value) : ""), S = an(() => l.value ? l.value[2] < 15 : !1);
    return (k, A) => {
      const L = M4("i18n");
      return I4(), R4(Pe(P), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: po(() => [
          Rt(Pe(b), null, {
            default: po(() => [
              Rt(Pe(P), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: po(() => [
                  Rt(Pe(b), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: f.value,
                    target: "_blank"
                  }, {
                    default: po(() => [
                      sn("h5", {
                        class: "ma-0 me-1",
                        textContent: ol(Pe(r))
                      }, null, 8, z4),
                      Rt(Pe(rs), {
                        size: "x-small",
                        icon: Pe(Wc)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  Rt(Pe(b), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: po(() => [
                      Rt(Pe(G4), {
                        class: "px-0",
                        weight: "quiet",
                        action: u.value ? "progressive" : "default",
                        "aria-label": k.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: h.value
                      }, {
                        default: po(() => [
                          Rt(Pe(rs), { icon: m.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              sn("div", O4, [
                sn("div", null, [
                  sn("span", null, [
                    Rt(Pe(rs), {
                      icon: Pe(zh),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    sn("span", {
                      class: "pe-3",
                      textContent: ol(_.value)
                    }, null, 8, j4)
                  ]),
                  sn("span", null, [
                    Rt(Pe(rs), {
                      icon: Pe(bb),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    N4(sn("span", H4, null, 512), [
                      [L, [y.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                sn("span", {
                  class: U4(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": S.value
                  }])
                }, [
                  Rt(Pe(rs), {
                    icon: Pe(kb),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  sn("span", {
                    textContent: ol(x.value)
                  }, null, 8, q4)
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
const K4 = window.Vue.resolveDirective, Hn = window.Vue.createElementVNode, Ia = window.Vue.withDirectives, Y4 = window.Vue.toDisplayString, J4 = window.Vue.createTextVNode, sl = window.Vue.unref, al = window.Vue.withCtx, il = window.Vue.openBlock, rl = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Q4 = { class: "pa-4" }, Z4 = { class: "flex pt-2" }, eV = window.Codex.CdxButton, tV = window.Vue.ref, nV = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = Io(), a = eu(), r = tV(!1), { currentTranslation: c } = Ft(), u = () => C(this, null, function* () {
      r.value = !0;
      let d = !1;
      try {
        d = yield vt.splitTranslation(
          c.value.translationId
        );
      } catch (i) {
        mw.log.error(
          "[CX] Error while splitting the translation into section translations",
          i
        );
      }
      r.value = !1, d && (a(), s(), o());
    });
    return (d, i) => {
      const l = K4("i18n");
      return il(), rl(sl(St), {
        value: e.modelValue,
        persistent: r.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: d.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: al(() => [
          Hn("div", Z4, [
            r.value ? (il(), rl(sl(st), { key: 1 })) : (il(), rl(sl(eV), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: u
            }, {
              default: al(() => [
                J4(Y4(d.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: al(() => [
          Hn("div", Q4, [
            Ia(Hn("p", null, null, 512), [
              [l, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            Ia(Hn("p", null, null, 512), [
              [l, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            Hn("p", null, [
              Ia(Hn("strong", null, null, 512), [
                [l, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            Ia(Hn("p", null, null, 512), [
              [l, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
}, oV = window.Vuex.useStore;
let Ra = [];
const tu = () => {
  const e = oV();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || Ra.includes(o) ? Promise.resolve() : (Ra.push(o), no.fetchLanguageTitles(t, n).then((s) => {
      Ra = Ra.filter(
        (a) => a !== o
      ), s && e.commit("mediawiki/addLanguageTitleGroup", s);
    }));
  };
}, sV = window.Vue.ref, mo = sV(null), rf = () => {
  const e = () => C(void 0, null, function* () {
    var n, o;
    mo.value || (yield Li.fetchCXServerToken().then((s) => {
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
const Bg = window.Vue.resolveDirective, za = window.Vue.createElementVNode, Pg = window.Vue.withDirectives, Vn = window.Vue.unref, Oa = window.Vue.withCtx, rn = window.Vue.createVNode, ll = window.Vue.openBlock, Fg = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const aV = window.Vue.createBlock, iV = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, rV = { class: "mb-0" }, lV = { class: "sx-translation-confirmer__article-image flex justify-center" }, cV = ["src"], uV = { class: "ma-3" }, Mg = window.Vue.computed, dV = window.Vue.inject, gV = window.Vue.onBeforeUnmount, pV = window.Vue.ref, mV = window.Vuex.useStore, hV = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = mV(), { currentSourcePage: n } = rt(), { previousRoute: o } = Le(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: c,
      clearTranslationURLParameters: u
    } = T(), d = dV("breakpoints"), i = Mg(() => d.value.nextBreakpoint), l = Mg(
      () => {
        var y;
        return (y = n.value) == null ? void 0 : y.getImage(i.value);
      }
    ), { fetchTranslationsByStatus: g } = Uo(), p = tu();
    g("draft"), p(s.value, r.value), Zc(), rf()(), oh()(a.value);
    const f = Te(), _ = () => {
      const y = ["dashboard", "sx-article-search"];
      !o.value || !y.includes(o.value) ? f.push({ name: "dashboard" }) : f.push({ name: o.value });
    };
    gV(() => {
      const y = f.currentRoute.value.name;
      (y === "dashboard" || y === "sx-article-search") && u();
    });
    const w = pV(!1);
    return (y, x) => {
      const S = Bg("i18n"), k = Bg("i18n-html");
      return ll(), Fg("section", iV, [
        rn(Vn(P), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Oa(() => [
            rn(Vn(b), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Oa(() => [
                Pg(za("h5", rV, null, 512), [
                  [S, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            rn(Vn(b), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Oa(() => [
                rn(Vn(Ie), {
                  class: "pa-0",
                  type: "icon",
                  icon: Vn(Xs),
                  "icon-size": 20,
                  onClick: _
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        za("div", lV, [
          l.value ? (ll(), Fg("img", {
            key: 0,
            src: l.value
          }, null, 8, cV)) : (ll(), aV(Vn(Oe), {
            key: 1,
            size: "120",
            icon: Vn(Tm),
            "icon-color": y.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        rn(W4),
        rn(af),
        rn(T4, {
          onOpenTranslationConfirmationDialog: x[0] || (x[0] = (A) => w.value = !0)
        }),
        rn(Vn(P), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: Oa(() => [
            za("p", uV, [
              Pg(za("small", null, null, 512), [
                [k, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        rn(nV, {
          modelValue: w.value,
          "onUpdate:modelValue": x[1] || (x[1] = (A) => w.value = A)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const fV = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: hV
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, wV = window.Vue.resolveComponent, _V = window.Vue.createVNode, vV = window.Vue.normalizeClass, SV = window.Vue.openBlock, yV = window.Vue.createElementBlock;
function xV(e, t, n, o, s, a) {
  const r = wV("sx-translation-confirmer");
  return SV(), yV("main", {
    class: vV(["sx-translation-confirmer-view", a.classes])
  }, [
    _V(r)
  ], 2);
}
const bV = /* @__PURE__ */ ae(fV, [["render", xV]]);
const CV = window.Vue.toDisplayString, Ng = window.Vue.unref, kV = window.Vue.createVNode, $V = window.Vue.createTextVNode, VV = window.Vue.createElementVNode, EV = window.Vue.openBlock, LV = window.Vue.createElementBlock, AV = { class: "sx-section-selector-view-article-item" }, DV = ["href"], TV = window.Codex.CdxIcon, Ug = {
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
    return (t, n) => (EV(), LV("span", AV, [
      VV("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        $V(CV(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        kV(Ng(TV), {
          size: "x-small",
          icon: Ng(Wc)
        }, null, 8, ["icon"])
      ], 8, DV)
    ]));
  }
};
const BV = window.Vue.resolveDirective, ja = window.Vue.createElementVNode, cl = window.Vue.withDirectives, qn = window.Vue.unref, PV = window.Vue.toDisplayString, Ha = window.Vue.withCtx, ls = window.Vue.createVNode, FV = window.Vue.openBlock, MV = window.Vue.createElementBlock, NV = { class: "sx-section-selector__header pa-4" }, UV = { class: "sx-section-selector__header-text ma-0" }, IV = ["textContent"], RV = { class: "pt-0 ma-0" }, zV = { class: "ma-0" }, OV = window.Codex.CdxButton, jV = window.Codex.CdxIcon, HV = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = je();
    return (n, o) => {
      const s = BV("i18n");
      return FV(), MV("div", NV, [
        ls(qn(P), { class: "ma-0 pb-3" }, {
          default: Ha(() => [
            ls(qn(b), null, {
              default: Ha(() => {
                var a;
                return [
                  cl(ja("h6", UV, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  ja("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: PV((a = qn(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, IV)
                ];
              }),
              _: 1
            }),
            ls(qn(b), {
              shrink: "",
              class: "justify-end"
            }, {
              default: Ha(() => [
                ls(qn(OV), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: Ha(() => [
                    ls(qn(jV), { icon: qn(No) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        cl(ja("h4", RV, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        cl(ja("p", zV, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, qV = window.Vue.renderList, GV = window.Vue.Fragment, ul = window.Vue.openBlock, Ig = window.Vue.createElementBlock, XV = window.Vue.renderSlot, qa = window.Vue.unref, Rg = window.Vue.createVNode, zg = window.Vue.withCtx, WV = window.Vue.createBlock, KV = { class: "sx-section-selector__sections-list ma-0 pa-0" }, YV = window.Codex.CdxButton, JV = window.Codex.CdxIcon, lf = {
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
    return (t, n) => (ul(), Ig("ul", KV, [
      (ul(!0), Ig(GV, null, qV(e.sections, (o) => (ul(), WV(qa(P), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: zg(() => [
          Rg(qa(YV), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: zg(() => [
              XV(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              Rg(qa(JV), { icon: qa(ta) }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["aria-label", "onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, QV = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const ZV = window.Vue.resolveDirective, Ga = window.Vue.createElementVNode, dl = window.Vue.withDirectives, Et = window.Vue.unref, Og = window.Vue.toDisplayString, ho = window.Vue.withCtx, gl = window.Vue.openBlock, jg = window.Vue.createBlock;
window.Vue.createCommentVNode;
const cs = window.Vue.createVNode, e3 = window.Vue.createTextVNode, t3 = window.Vue.createElementBlock, n3 = { class: "sx-section-selector__missing-sections py-2" }, o3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, s3 = ["lang", "dir", "textContent"], Hg = window.Vue.computed, a3 = window.Codex.CdxButton, i3 = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = je(), { targetLanguageURLParameter: n } = T(), o = Hg(() => R.getAutonym(n.value)), s = Hg(
      () => {
        var a;
        return Object.keys(((a = t.value) == null ? void 0 : a.missingSections) || {}).length === 0;
      }
    );
    return (a, r) => {
      const c = ZV("i18n");
      return gl(), t3("section", n3, [
        dl(Ga("h4", o3, null, 512), [
          [c, [
            o.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        s.value ? (gl(), jg(Et(P), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: ho(() => [
            cs(Et(b), {
              class: "py-6 justify-center",
              innerHTML: Et(QV)
            }, null, 8, ["innerHTML"]),
            cs(Et(b), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: ho(() => [
                dl(Ga("h6", null, null, 512), [
                  [c, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            cs(Et(b), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: ho(() => [
                dl(Ga("p", null, null, 512), [
                  [c, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            cs(Et(b), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: ho(() => [
                cs(Et(a3), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: r[1] || (r[1] = (u) => a.$emit("close"))
                }, {
                  default: ho(() => [
                    e3(Og(a.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (gl(), jg(lf, {
          key: 0,
          sections: Et(t).orderedMissingSections,
          onSelectSection: r[0] || (r[0] = (u) => a.$emit("select-section", u))
        }, {
          default: ho(({ sourceSection: u }) => {
            var d, i;
            return [
              Ga("h5", {
                class: "ma-0",
                lang: (d = Et(t)) == null ? void 0 : d.sourceLanguage,
                dir: Et(R.getDir)((i = Et(t)) == null ? void 0 : i.sourceLanguage),
                textContent: Og(u)
              }, null, 8, s3)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const r3 = window.Vue.resolveDirective, Xa = window.Vue.createElementVNode, l3 = window.Vue.withDirectives, Gn = window.Vue.unref, qg = window.Vue.toDisplayString, c3 = window.Vue.withCtx, u3 = window.Vue.createVNode, d3 = window.Vue.openBlock, g3 = window.Vue.createElementBlock, p3 = { class: "sx-section-selector__present-sections py-2" }, m3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, h3 = { class: "sx-section-selector__present-section-button-content" }, f3 = ["lang", "dir", "textContent"], w3 = ["lang", "dir", "textContent"], _3 = window.Vue.computed, Gg = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = je(), { targetLanguageURLParameter: n } = T(), o = _3(() => R.getAutonym(n.value));
    return (s, a) => {
      var c;
      const r = r3("i18n");
      return d3(), g3("section", p3, [
        l3(Xa("h4", m3, null, 512), [
          [r, [
            o.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        u3(lf, {
          sections: ((c = Gn(t)) == null ? void 0 : c.orderedPresentSections) || [],
          onSelectSection: a[0] || (a[0] = (u) => s.$emit("select-section", u))
        }, {
          default: c3(({ sourceSection: u, targetSection: d }) => {
            var i, l, g, p;
            return [
              Xa("div", h3, [
                Xa("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (i = Gn(t)) == null ? void 0 : i.sourceLanguage,
                  dir: Gn(R.getDir)((l = Gn(t)) == null ? void 0 : l.sourceLanguage),
                  textContent: qg(u)
                }, null, 8, f3),
                Xa("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (g = Gn(t)) == null ? void 0 : g.targetLanguage,
                  dir: Gn(R.getDir)((p = Gn(t)) == null ? void 0 : p.targetLanguage),
                  textContent: qg(d)
                }, null, 8, w3)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const Fe = window.Vue.createVNode, pl = window.Vue.openBlock, Xg = window.Vue.createBlock, Wg = window.Vue.createCommentVNode, v3 = window.Vue.resolveDirective, En = window.Vue.createElementVNode, us = window.Vue.withDirectives, Je = window.Vue.unref, ln = window.Vue.withCtx, S3 = window.Vue.normalizeClass, Kg = window.Vue.toDisplayString, Yg = window.Vue.createTextVNode, y3 = window.Vue.createElementBlock, x3 = { class: "sx-section-selector col-12 col-tablet-9 col-desktop-7 mx-auto" }, b3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, C3 = { class: "sx-section-selector__additional-consideration-title" }, k3 = { href: "#" }, $3 = { class: "sx-section-selector__additional-consideration-title" }, V3 = { href: "#" }, ds = window.Vue.computed, E3 = window.Vue.inject, L3 = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = E3("breakpoints"), n = ds(() => t.value.desktopAndUp), { sectionSuggestion: o } = je(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      clearTranslationURLParameters: r,
      setSectionURLParam: c
    } = T(), u = ds(() => R.getAutonym(s.value)), d = ds(() => R.getAutonym(a.value)), i = ds(
      () => {
        var y;
        return Y.getPageUrl(s.value, (y = o.value) == null ? void 0 : y.sourceTitle);
      }
    ), l = ds(
      () => {
        var y;
        return Y.getPageUrl(a.value, (y = o.value) == null ? void 0 : y.targetTitle);
      }
    ), g = Te(), p = () => {
      r(), g.push({ name: "dashboard" });
    }, { currentTranslation: m } = Ft(), h = Io(), f = eu(), { selectPageSectionByTitle: _ } = Ni(), w = (y) => {
      c(y), m.value ? (f(), h()) : (_(y), g.push({ name: "sx-content-comparator" }));
    };
    return (y, x) => {
      const S = v3("i18n");
      return pl(), y3("section", x3, [
        Fe(HV, { onClose: p }),
        Fe(af),
        Fe(Je(P), {
          class: "ma-0",
          align: "stretch"
        }, {
          default: ln(() => [
            Fe(Je(b), {
              cols: "12",
              desktop: "8",
              class: "ma-0 pa-0"
            }, {
              default: ln(() => [
                Fe(i3, {
                  onSelectSection: w,
                  onClose: p
                }),
                n.value ? Wg("", !0) : (pl(), Xg(Gg, {
                  key: 0,
                  onSelectSection: w
                })),
                En("section", {
                  class: S3(["py-2", { "sx-section-selector__more-details--desktop": n.value }])
                }, [
                  us(En("h4", b3, null, 512), [
                    [S, [
                      d.value
                    ], "cx-sx-section-selector-more-details-title"]
                  ]),
                  Fe(Je(P), {
                    class: "ma-0",
                    align: "start",
                    justify: "start"
                  }, {
                    default: ln(() => [
                      Fe(Je(b), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: ln(() => [
                          Fe(Ug, {
                            path: i.value,
                            autonym: u.value
                          }, null, 8, ["path", "autonym"])
                        ]),
                        _: 1
                      }),
                      Fe(Je(b), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: ln(() => [
                          Fe(Ug, {
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
                Fe(Je(P), {
                  class: "sx-section-selector__additional-considerations ma-0",
                  align: "stretch"
                }, {
                  default: ln(() => [
                    Fe(Je(b), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 pt-5 pb-4"
                    }, {
                      default: ln(() => [
                        En("h6", C3, [
                          Fe(Je(Oe), {
                            icon: Je(u0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          Yg(" " + Kg(y.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                        ]),
                        us(En("p", null, null, 512), [
                          [S, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                        ]),
                        us(En("a", k3, null, 512), [
                          [S, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                        ])
                      ]),
                      _: 1
                    }),
                    Fe(Je(b), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 py-5"
                    }, {
                      default: ln(() => [
                        En("h6", $3, [
                          Fe(Je(Oe), {
                            icon: Je(c0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          Yg(" " + Kg(y.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                        ]),
                        us(En("p", null, null, 512), [
                          [S, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                        ]),
                        us(En("a", V3, null, 512), [
                          [S, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
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
            n.value ? (pl(), Xg(Je(b), {
              key: 0,
              desktop: "4",
              class: "ma-0 pa-0"
            }, {
              default: ln(() => [
                Fe(Gg, {
                  class: "sx-section-selector-section-list-present--sidebar fill-height p-0",
                  onSelectSection: w
                })
              ]),
              _: 1
            })) : Wg("", !0)
          ]),
          _: 1
        })
      ]);
    };
  }
}, A3 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: L3
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, D3 = window.Vue.resolveComponent, T3 = window.Vue.createVNode, B3 = window.Vue.normalizeClass, P3 = window.Vue.openBlock, F3 = window.Vue.createElementBlock;
function M3(e, t, n, o, s, a) {
  const r = D3("sx-section-selector");
  return P3(), F3("main", {
    class: B3(["sx-section-selector-view", a.classes])
  }, [
    T3(r)
  ], 2);
}
const N3 = /* @__PURE__ */ ae(A3, [["render", M3]]), U3 = window.Vue.ref, cf = U3("expand"), I3 = (e) => {
  cf.value = e;
}, uf = () => ({
  existingSectionPublishOption: cf,
  setExistingSectionPublishOption: I3
}), gs = window.Vue.computed, R3 = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    sectionURLParameter: n
  } = T(), o = gs(
    () => R.getAutonym(e.value)
  ), s = gs(
    () => R.getAutonym(t.value)
  ), { sectionSuggestion: a } = je(), { existingSectionPublishOption: r } = uf(), c = gs(
    () => {
      var i;
      return !!((i = a.value) != null && i.presentSections.hasOwnProperty(n.value));
    }
  ), u = gs(
    () => c.value && r.value === "expand"
  ), d = pe();
  return gs(() => {
    const i = {
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
    return [i, l];
  });
};
const Jg = window.Vue.unref, z3 = window.Vue.createVNode, O3 = window.Vue.openBlock, j3 = window.Vue.createElementBlock, H3 = { class: "sx-content-comparator__content-type-selector" }, q3 = window.Vue.watchEffect, G3 = {
  __name: "ContentTypeSelector",
  props: {
    selection: {
      type: String,
      required: !0
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = (r) => o("update:selection", r), a = R3();
    return q3(() => {
      a.value.map((c) => c.value).includes(n.selection) || s(a.value[0].value);
    }), (r, c) => (O3(), j3("div", H3, [
      z3(Jg(Gs), {
        items: Jg(a),
        active: e.selection,
        onSelect: s
      }, null, 8, ["items", "active"])
    ]));
  }
}, ps = window.Vue.computed, X3 = window.Vuex.useStore, oe = () => {
  const e = X3(), { currentSourcePage: t, currentTargetPage: n } = rt(), { currentMTProvider: o } = Le(e), { sectionURLParameter: s } = T(), a = ps(() => {
    var i, l;
    return s.value ? (l = t.value) == null ? void 0 : l.getSectionByTitle(s.value) : (i = t.value) == null ? void 0 : i.leadSection;
  }), r = ps(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.isTitleSelected;
    }
  ), c = ps(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.selectedContentTranslationUnit;
    }
  ), u = ps(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.getProposedTranslationByMtProvider(
        o.value
      );
    }
  ), d = ps(() => a.value.isLeadSection ? a.value.title : n.value.title);
  return {
    sourceSection: a,
    isSectionTitleSelected: r,
    selectedContentTranslationUnit: c,
    currentProposedTranslation: u,
    targetPageTitleForPublishing: d
  };
}, ms = window.Vue.computed, nu = () => {
  const { currentTargetPage: e } = rt(), { sectionSuggestion: t } = je(), { sectionURLParameter: n } = T(), o = ms(
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
  ), { sourceSection: r } = oe(), c = ms(() => {
    var d;
    return (d = r.value) == null ? void 0 : d.html;
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
const Wa = window.Vue.createVNode, W3 = window.Vue.toDisplayString, K3 = window.Vue.createElementVNode, Ln = window.Vue.unref, Ka = window.Vue.withCtx, ml = window.Vue.openBlock, hl = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Y3 = window.Vue.normalizeClass, J3 = ["lang", "dir", "textContent"], Qg = window.Vue.ref, fl = window.Vue.computed, Q3 = window.Vue.onMounted, Z3 = {
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
    const n = e, o = t, s = Qg(!1), { sectionSuggestion: a } = je(), { sectionURLParameter: r } = T(), c = fl(
      () => (r.value || "").replace(/ /g, "_")
    ), u = (m) => o("update:contentTypeSelection", m), { activeSectionTargetTitle: d, targetSectionAnchor: i } = nu(), l = fl(() => {
      switch (n.contentTypeSelection) {
        case "source_section":
          return {
            title: r.value,
            path: `${Y.getPageUrl(
              a.value.sourceLanguage,
              a.value.sourceTitle
            )}#${c.value}`,
            lang: a.value.sourceLanguage,
            dir: R.getDir(a.value.sourceLanguage)
          };
        case "target_article":
          return {
            title: a.value.targetTitle,
            path: g.value,
            lang: a.value.targetLanguage,
            dir: R.getDir(a.value.targetLanguage)
          };
        default:
          return {
            title: d.value,
            path: `${g.value}#${i.value}`
          };
      }
    }), g = fl(
      () => Y.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), p = Qg(null);
    return Q3(() => {
      new IntersectionObserver(
        ([h]) => {
          s.value = h.intersectionRect.height < h.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(p.value.$el);
    }), (m, h) => (ml(), hl(Ln(P), {
      ref_key: "contentHeader",
      ref: p,
      class: Y3(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
      direction: "column",
      align: "stretch",
      reverse: s.value
    }, {
      default: Ka(() => [
        Wa(G3, {
          selection: e.contentTypeSelection,
          "onUpdate:selection": u
        }, null, 8, ["selection"]),
        Wa(Ln(P), {
          justify: "between",
          class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
        }, {
          default: Ka(() => [
            Wa(Ln(b), null, {
              default: Ka(() => [
                K3("h3", {
                  lang: l.value.lang,
                  dir: l.value.dir,
                  class: "ma-0 pa-0",
                  textContent: W3(l.value.title)
                }, null, 8, J3)
              ]),
              _: 1
            }),
            Wa(Ln(b), { shrink: "" }, {
              default: Ka(() => [
                s.value ? (ml(), hl(Ln(Ie), {
                  key: 0,
                  icon: Ln(bi),
                  progressive: "",
                  label: m.$i18n(
                    "cx-sx-content-comparator-content-header-translate-button-label"
                  ),
                  onClick: h[0] || (h[0] = (f) => m.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label"])) : (ml(), hl(Ln(Ie), {
                  key: 1,
                  class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                  icon: Ln(Am),
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
}, Ya = window.Vue.unref, Zg = window.Vue.createVNode, eE = window.Vue.openBlock, tE = window.Vue.createElementBlock, nE = { class: "sx-content-comparator__header-navigation flex items-center" }, oE = window.Vue.computed, sE = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = T(), o = oE(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = Ni(), a = () => {
      const c = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[c];
      s(u);
    }, r = () => {
      const c = (o.value + 1) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[c];
      s(u);
    };
    return (c, u) => (eE(), tE("div", nE, [
      Zg(Ya(Ie), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: Ya(a0),
        onClick: a
      }, null, 8, ["icon"]),
      Zg(Ya(Ie), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: Ya(s0),
        onClick: r
      }, null, 8, ["icon"])
    ]));
  }
};
const ep = window.Vue.toDisplayString, aE = window.Vue.resolveDirective, wl = window.Vue.withDirectives, fo = window.Vue.openBlock, Ja = window.Vue.createElementBlock, iE = window.Vue.createCommentVNode, rE = window.Vue.createTextVNode, tp = window.Vue.createElementVNode, zt = window.Vue.unref, lE = window.Vue.normalizeClass, _l = window.Vue.withCtx, vl = window.Vue.createVNode, np = window.Vue.createBlock, cE = { class: "sx-content-comparator-header__mapped-section" }, uE = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, dE = { key: 0 }, gE = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, pE = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, op = window.Vue.computed, mE = {
  __name: "SXContentComparatorHeaderMappedSection",
  setup(e) {
    const { sectionSuggestion: t } = je(), { activeSectionTargetTitle: n } = nu(), o = pe(), { existingSectionPublishOption: s, setExistingSectionPublishOption: a } = uf(), r = op(
      () => s.value === "new"
    ), c = op(
      () => o.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        R.getAutonym(t.value.targetLanguage)
      )
    );
    return (u, d) => {
      const i = aE("i18n");
      return fo(), Ja("div", cE, [
        vl(zt(P), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: _l(() => [
            vl(zt(b), { grow: "" }, {
              default: _l(() => [
                tp("h6", uE, [
                  rE(ep(c.value) + " ", 1),
                  r.value ? wl((fo(), Ja("span", dE, null, 512)), [
                    [i, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : iE("", !0)
                ]),
                tp("h6", {
                  class: lE(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": r.value
                  }])
                }, ep(zt(n)), 3)
              ]),
              _: 1
            }),
            vl(zt(b), { shrink: "" }, {
              default: _l(() => [
                r.value ? (fo(), np(zt(Ie), {
                  key: 1,
                  class: "pa-0",
                  icon: zt(p0),
                  type: "icon",
                  onClick: d[1] || (d[1] = (l) => zt(a)("expand"))
                }, null, 8, ["icon"])) : (fo(), np(zt(Ie), {
                  key: 0,
                  class: "pa-0",
                  icon: zt(Lm),
                  type: "icon",
                  onClick: d[0] || (d[0] = (l) => zt(a)("new"))
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        r.value ? wl((fo(), Ja("p", pE, null, 512)), [
          [i, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ]) : wl((fo(), Ja("p", gE, null, 512)), [
          [i, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ])
      ]);
    };
  }
};
const De = window.Vue.unref, wo = window.Vue.createVNode, sp = window.Vue.toDisplayString, fn = window.Vue.createElementVNode, Sl = window.Vue.withCtx, hE = window.Vue.resolveDirective, ap = window.Vue.withDirectives, yl = window.Vue.openBlock, ip = window.Vue.createBlock, rp = window.Vue.createCommentVNode, fE = window.Vue.createElementBlock, wE = { class: "sx-content-comparator__header pa-4" }, _E = { class: "row my-1 py-2 mx-0 gap-6" }, vE = { class: "sx-content-comparator-header__titles-nav flex grow justify-between" }, SE = { class: "sx-content-comparator-header__titles shrink" }, yE = ["lang", "dir"], xE = ["lang", "dir"], bE = { class: "py-2 mb-1" }, CE = /* @__PURE__ */ fn("br", null, null, -1), hs = window.Vue.computed, kE = window.Vue.inject, $E = {
  __name: "SXContentComparatorHeader",
  emits: ["close", "translation-button-clicked"],
  setup(e) {
    const { sectionURLParameter: t } = T(), { sourceSection: n } = oe(), { sectionSuggestion: o } = je(), s = hs(
      () => {
        var d;
        return (d = o.value) == null ? void 0 : d.missingSections.hasOwnProperty(t.value);
      }
    ), a = hs(
      () => {
        var d;
        return (d = o.value) == null ? void 0 : d.presentSections.hasOwnProperty(t.value);
      }
    ), r = hs(() => {
      var d;
      return (d = n.value) == null ? void 0 : d.html;
    }), c = hs(() => [
      ...Object.keys(o.value.missingSections),
      ...Object.keys(o.value.presentSections)
    ]), u = kE("breakpoints");
    return hs(() => u.value.mobile), (d, i) => {
      const l = hE("i18n");
      return yl(), fE("div", wE, [
        wo(De(Ie), {
          class: "py-2 pa-0",
          icon: De(i0),
          label: d.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: i[0] || (i[0] = (g) => d.$emit("close"))
        }, null, 8, ["icon", "label"]),
        fn("div", _E, [
          fn("div", vE, [
            fn("div", SE, [
              fn("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: De(o).sourceLanguage,
                dir: De(R.getDir)(De(o).sourceLanguage)
              }, sp(De(o).sourceTitle), 9, yE),
              fn("h2", {
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: De(o).sourceLanguage,
                dir: De(R.getDir)(De(o).sourceLanguage)
              }, sp(De(t)), 9, xE)
            ]),
            wo(sE, { "section-source-titles": c.value }, null, 8, ["section-source-titles"])
          ]),
          fn("div", bE, [
            wo(De(Ie), {
              icon: De(bi),
              progressive: "",
              label: d.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !r.value,
              onClick: i[1] || (i[1] = (g) => d.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ])
        ]),
        s.value ? (yl(), ip(De(P), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: Sl(() => [
            wo(De(b), {
              shrink: "",
              class: "pe-2"
            }, {
              default: Sl(() => [
                wo(De(Oe), { icon: De(d0) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            wo(De(b), { class: "ma-0" }, {
              default: Sl(() => [
                ap(fn("strong", null, null, 512), [
                  [l, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                CE,
                ap(fn("span", null, null, 512), [
                  [l, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : rp("", !0),
        a.value ? (yl(), ip(mE, { key: 1 })) : rp("", !0)
      ]);
    };
  }
};
const lp = window.Vue.toDisplayString, VE = window.Vue.createElementVNode, cp = window.Vue.openBlock, up = window.Vue.createElementBlock, EE = window.Vue.createCommentVNode, LE = { class: "sx-content-comparator__new-section-placeholder mt-4 py-4 px-7" }, AE = ["textContent"], DE = ["textContent"], df = {
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
    return (t, n) => (cp(), up("section", LE, [
      VE("h5", {
        textContent: lp(e.placeholderTitle)
      }, null, 8, AE),
      e.placeholderSubtitle ? (cp(), up("p", {
        key: 0,
        textContent: lp(e.placeholderSubtitle)
      }, null, 8, DE)) : EE("", !0)
    ]));
  }
}, TE = window.Vue.computed, BE = window.Vue.createApp, PE = window.Vuex.useStore, FE = () => {
  const e = PE(), { sectionSuggestion: t } = je(), { currentTargetPage: n } = rt(), o = pe(), s = () => BE(
    df,
    {
      placeholderTitle: o.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    }
  ).mount(document.createElement("div")).$el, a = (c) => e.getters["suggestions/getFirstAppendixTitleBySectionSuggestion"](
    c
  ), r = (c) => {
    const u = c.getElementsByTagName("base");
    Array.from(u).forEach(
      (d) => d.parentNode.removeChild(d)
    );
  };
  return TE(() => {
    var i;
    const c = document.createElement("div");
    c.innerHTML = (i = n.value) == null ? void 0 : i.content, r(c);
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
const xl = window.Vue.createVNode, Qe = window.Vue.unref, _o = window.Vue.openBlock, dp = window.Vue.createBlock, gp = window.Vue.createCommentVNode, Qa = window.Vue.createElementVNode, bl = window.Vue.Fragment, Za = window.Vue.createElementBlock, ME = { class: "sx-content-comparator col-12 col-tablet-9 col-desktop-7 mx-auto" }, NE = { class: "sx-content-comparator__source-content" }, UE = ["lang", "dir", "innerHTML"], IE = ["lang", "dir", "innerHTML"], RE = ["innerHTML"], zE = window.Vue.ref, OE = window.Vue.computed, jE = window.Vue.watch, HE = window.Vuex.useStore, qE = {
  __name: "SXContentComparator",
  setup(e) {
    HE();
    const t = Te(), n = zE("source_section"), { logDashboardTranslationStartEvent: o } = Fi(), s = Io(), a = () => t.push({ name: "sx-section-selector" }), r = () => {
      o(), s();
    }, {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u,
      pageURLParameter: d,
      sectionURLParameter: i
    } = T(), { activeSectionTargetTitle: l, sourceSectionContent: g, targetSectionContent: p } = nu(), m = FE(), { sectionSuggestion: h } = je(), f = OE(() => h.value.targetTitle), _ = sf();
    return jE(
      f,
      () => _(
        u.value,
        c.value,
        f.value
      ),
      { immediate: !0 }
    ), (w, y) => (_o(), Za("section", ME, [
      xl($E, {
        onTranslationButtonClicked: r,
        onClose: a
      }),
      xl(Z3, {
        "content-type-selection": n.value,
        "onUpdate:contentTypeSelection": y[0] || (y[0] = (x) => n.value = x),
        onTranslationButtonClicked: r
      }, null, 8, ["content-type-selection"]),
      Qa("section", NE, [
        n.value === "source_section" ? (_o(), Za(bl, { key: 0 }, [
          Qe(g) ? gp("", !0) : (_o(), dp(Qe(st), { key: 0 })),
          Qa("section", {
            lang: Qe(c),
            dir: Qe(R.getDir)(Qe(c)),
            class: "pt-2 px-4",
            innerHTML: Qe(g)
          }, null, 8, UE)
        ], 64)) : n.value === "target_article" ? (_o(), Za(bl, { key: 1 }, [
          Qe(m) ? gp("", !0) : (_o(), dp(Qe(st), { key: 0 })),
          Qa("article", {
            lang: Qe(u),
            dir: Qe(R.getDir)(Qe(u)),
            class: "px-4",
            innerHTML: Qe(m)
          }, null, 8, IE)
        ], 64)) : (_o(), Za(bl, { key: 2 }, [
          Qa("section", {
            class: "pa-4",
            innerHTML: Qe(p)
          }, null, 8, RE),
          xl(df, {
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
}, GE = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: qE
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, XE = window.Vue.resolveComponent, WE = window.Vue.createVNode, KE = window.Vue.normalizeClass, YE = window.Vue.openBlock, JE = window.Vue.createElementBlock;
function QE(e, t, n, o, s, a) {
  const r = XE("sx-content-comparator");
  return YE(), JE("main", {
    class: KE(["sx-content-comparator-view", a.classes])
  }, [
    WE(r)
  ], 2);
}
const ZE = /* @__PURE__ */ ae(GE, [["render", QE]]);
const e5 = window.Vue.resolveDirective, fs = window.Vue.createElementVNode, pp = window.Vue.withDirectives, ei = window.Vue.unref, Cl = window.Vue.createVNode, mp = window.Vue.toDisplayString, hp = window.Vue.createTextVNode, ws = window.Vue.withCtx, t5 = window.Vue.openBlock, n5 = window.Vue.createBlock, o5 = { class: "mw-ui-dialog__header px-4 py-3" }, s5 = { class: "mw-ui-dialog__header-title" }, a5 = { class: "pa-4" }, i5 = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, fp = window.Codex.CdxButton, r5 = {
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
    return (r, c) => {
      const u = e5("i18n");
      return t5(), n5(ei(St), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: ws(() => [
          fs("div", o5, [
            pp(fs("span", s5, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: ws(() => [
          fs("div", i5, [
            Cl(ei(fp), {
              weight: "quiet",
              onClick: s
            }, {
              default: ws(() => [
                hp(mp(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            Cl(ei(fp), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: ws(() => [
                hp(mp(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: ws(() => [
          Cl(ei(xi)),
          fs("div", a5, [
            pp(fs("span", null, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, l5 = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => eo(a)
  );
  return s && Nm(s) ? vt.parseTemplateWikitext(
    Fm(s),
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
    Fm(s),
    n,
    t
  ) : Promise.resolve(null);
}, c5 = window.Vuex.useStore, ou = () => {
  const e = c5(), { sourceSection: t } = oe(), { getCurrentTitleByLanguage: n } = Sn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = T(), a = rf(), r = (i, l, g) => {
    if (i === 0) {
      t.value.proposedTitleTranslations[l] = g;
      return;
    }
    const p = t.value.getContentTranslationUnitById(i);
    p instanceof ot ? p.blockTemplateProposedTranslations[l] = g : p instanceof Mn && p.addProposedTranslation(l, g);
  }, c = (i, l) => C(void 0, null, function* () {
    if (!e.getters["mediawiki/isValidProviderForTranslation"](o.value, s.value, i))
      return "";
    try {
      const p = yield a();
      return yield vt.fetchSegmentTranslation(
        o.value,
        s.value,
        i,
        l,
        p
      );
    } catch (p) {
      return mw.log.error("Error while translating segment", p), "";
    }
  }), u = (i, l) => C(void 0, null, function* () {
    if (t.value.hasProposedTranslationByTranslationUnitId(
      i,
      l
    ))
      return;
    let g = t.value.getOriginalContentByTranslationUnitId(i);
    const p = t.value.getContentTranslationUnitById(i);
    let m;
    if (e.commit("application/addMtRequestsPending", i), m = yield c(l, g), !m) {
      e.commit("application/removeMtRequestsPending", i);
      return;
    }
    p instanceof ot && (p.setBlockTemplateAdaptationInfoByHtml(
      l,
      m
    ), m = (yield l5(
      m,
      n(s.value, o.value),
      s.value
    )) || ""), r(
      i,
      l,
      m
    ), e.commit("application/removeMtRequestsPending", i);
  });
  return {
    translateTranslationUnitById: u,
    translateSelectedTranslationUnitForAllProviders: () => {
      const i = e.getters["mediawiki/getSupportedMTProviders"](
        o.value,
        s.value
      ), { selectedTranslationUnitId: l } = t.value;
      i.forEach(
        (g) => u(l, g)
      );
    }
  };
}, u5 = window.Vuex.useStore, d5 = () => {
  const { sourceSection: e } = oe(), t = u5(), { translateTranslationUnitById: n } = ou();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
function g5(e) {
  const t = document.createElement("div");
  return t.innerHTML = e, t.querySelectorAll("a").forEach((o) => {
    o.setAttribute("target", "_blank");
  }), t.innerHTML;
}
const p5 = window.Vue.resolveDirective, nt = window.Vue.createElementVNode, ti = window.Vue.withDirectives, ze = window.Vue.unref, kl = window.Vue.createVNode, cn = window.Vue.withCtx, m5 = window.Vue.renderList, h5 = window.Vue.Fragment, ni = window.Vue.openBlock, f5 = window.Vue.createElementBlock, w5 = window.Vue.toDisplayString, $l = window.Vue.createBlock, wp = window.Vue.createCommentVNode, _5 = { class: "mw-ui-dialog__header pa-4" }, v5 = { class: "row ma-0 py-2" }, S5 = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, y5 = { class: "mb-0" }, x5 = { class: "col shrink justify-center" }, b5 = { class: "pb-2 mb-0" }, C5 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, k5 = ["dir", "lang", "innerHTML"], $5 = ["textContent"], V5 = ["innerHTML"], E5 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, L5 = /* @__PURE__ */ nt("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), A5 = ["innerHTML"], Vl = window.Vue.computed, D5 = window.Vuex.useStore, T5 = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = ne.EMPTY_TEXT_PROVIDER_KEY, s = ne.ORIGINAL_TEXT_PROVIDER_KEY, a = D5(), {
      sourceSection: r,
      isSectionTitleSelected: c,
      selectedContentTranslationUnit: u
    } = oe(), {
      sourceLanguageURLParameter: d,
      targetLanguageURLParameter: i
    } = T(), l = Vl(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        d.value,
        i.value
      )
    ), g = Vl(() => {
      const x = [s, o];
      return l.value.filter(
        (S) => !x.includes(S)
      );
    }), p = Vl(
      () => c.value ? r.value.proposedTitleTranslations : u.value.proposedTranslations
    ), m = d5(), h = (x) => {
      m(x), _();
    }, f = ne.getMTProviderLabel, _ = () => n("update:active", !1), w = pe(), y = g5(
      w.i18n("cx-tools-mt-noservices")
    );
    return (x, S) => {
      const k = p5("i18n");
      return e.active ? (ni(), $l(ze(St), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: cn(() => [
          nt("div", _5, [
            nt("div", v5, [
              nt("div", S5, [
                ti(nt("h4", y5, null, 512), [
                  [k, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              nt("div", x5, [
                kl(ze(Ie), {
                  type: "icon",
                  icon: ze(Xs),
                  class: "pa-0",
                  onClick: _
                }, null, 8, ["icon"])
              ])
            ]),
            ti(nt("h6", b5, null, 512), [
              [k, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: cn(() => [
          kl(ze(Ke), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: S[0] || (S[0] = (A) => h(ze(s)))
          }, {
            header: cn(() => [
              ti(nt("h5", C5, null, 512), [
                [k, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: cn(() => [
              nt("p", {
                dir: ze(R.getDir)(ze(d)),
                lang: ze(d),
                innerHTML: p.value[ze(s)]
              }, null, 8, k5)
            ]),
            _: 1
          }),
          (ni(!0), f5(h5, null, m5(g.value, (A) => (ni(), $l(ze(Ke), {
            key: A,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (L) => h(A)
          }, {
            header: cn(() => [
              nt("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: w5(ze(f)(A))
              }, null, 8, $5)
            ]),
            default: cn(() => [
              nt("p", {
                innerHTML: p.value[A]
              }, null, 8, V5)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          kl(ze(Ke), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: S[1] || (S[1] = (A) => h(ze(o)))
          }, {
            header: cn(() => [
              ti(nt("h5", E5, null, 512), [
                [k, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: cn(() => [
              L5
            ]),
            _: 1
          }),
          g.value.length ? wp("", !0) : (ni(), $l(ze(Ke), {
            key: 0,
            class: "sx-sentence-selector__mt-disabled-info-card mx-4 pa-5"
          }, {
            header: cn(() => [
              nt("h5", {
                class: "sx-sentence-selector__translation-info-card-title",
                innerHTML: ze(y)
              }, null, 8, A5)
            ]),
            _: 1
          }))
        ]),
        _: 1
      })) : wp("", !0);
    };
  }
}, B5 = window.Vuex.useStore, Ro = () => {
  const { sourceSection: e } = oe(), t = B5(), { translateTranslationUnitById: n } = ou(), { currentMTProvider: o } = Le(t), s = (c) => C(void 0, null, function* () {
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
      let i = 0;
      return d > -1 && (i = u[d].id), s(i);
    },
    selectTranslationUnitById: s
  };
};
const P5 = window.Vue.toDisplayString, El = window.Vue.createElementVNode, Ll = window.Vue.unref, F5 = window.Vue.createVNode, M5 = window.Vue.normalizeClass, N5 = window.Vue.withCtx, U5 = window.Vue.openBlock, I5 = window.Vue.createBlock, R5 = ["href"], z5 = ["textContent"], O5 = ["innerHTML"], vo = window.Vue.computed, j5 = window.Vuex.useStore, _p = "sx-sentence-selector__section-title", H5 = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const t = j5(), { sourceSection: n, isSectionTitleSelected: o } = oe(), { currentSourcePage: s } = rt(), { sourceLanguage: a } = Le(t), r = vo(() => {
      var m;
      return (m = s.value) == null ? void 0 : m.title;
    }), c = vo(
      () => {
        var m;
        return ((m = n.value) == null ? void 0 : m.title) || r.value;
      }
    ), u = vo(
      () => Y.getPageUrl(a.value, r.value)
    ), d = vo(
      () => {
        var m;
        return !!((m = n.value) != null && m.translatedTitle);
      }
    ), i = vo(
      () => d.value ? "translated" : "selected"
    ), l = vo(() => {
      const m = [_p];
      return o.value && m.push(`${_p}--${i.value}`), m;
    }), { selectTranslationUnitById: g } = Ro(), p = () => g(0);
    return (m, h) => (U5(), I5(Ll(b), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: N5(() => [
        El("a", {
          href: u.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          El("strong", {
            textContent: P5(r.value)
          }, null, 8, z5),
          F5(Ll(Oe), {
            icon: Ll(Am),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, R5),
        El("h2", {
          class: M5(["pa-0 ma-0", l.value]),
          onClick: p,
          innerHTML: c.value
        }, null, 10, O5)
      ]),
      _: 1
    }));
  }
};
const Ot = window.Vue.unref, _s = window.Vue.createVNode, oi = window.Vue.withCtx, vp = window.Vue.toDisplayString, Sp = window.Vue.createTextVNode, q5 = window.Vue.openBlock, G5 = window.Vue.createBlock, X5 = window.Vue.computed, Al = window.Codex.CdxButton, yp = window.Codex.CdxIcon, pf = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = oe(), s = X5(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, r) => (q5(), G5(Ot(P), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: oi(() => [
        _s(Ot(Al), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: Ot(n),
          onClick: r[0] || (r[0] = (c) => a.$emit("select-previous-segment"))
        }, {
          default: oi(() => [
            _s(Ot(yp), {
              class: "me-1",
              icon: Ot(Kc)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        _s(Ot(Al), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !Ot(o),
          onClick: r[1] || (r[1] = (c) => a.$emit("apply-translation"))
        }, {
          default: oi(() => [
            Sp(vp(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        _s(Ot(Al), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: r[2] || (r[2] = (c) => a.$emit("skip-translation"))
        }, {
          default: oi(() => [
            Sp(vp(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            _s(Ot(yp), {
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
const Xn = window.Vue.unref, W5 = window.Vue.toDisplayString, vs = window.Vue.createVNode, si = window.Vue.withCtx, K5 = window.Vue.openBlock, Y5 = window.Vue.createBlock, Dl = window.Vue.computed, J5 = window.Vuex.useStore, Q5 = window.Codex.CdxButton, Z5 = window.Codex.CdxIcon, eL = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = J5(), n = Dl(() => t.state.application.currentMTProvider), o = pe(), s = Dl(() => ({
      [ne.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [ne.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = Dl(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        ne.getMTProviderLabel(n.value)
      )
    );
    return (r, c) => (K5(), Y5(Xn(b), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: si(() => [
        vs(Xn(P), { class: "ma-0 ps-5 pb-4" }, {
          default: si(() => [
            vs(Xn(b), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: W5(a.value)
            }, null, 8, ["textContent"]),
            vs(Xn(b), {
              shrink: "",
              class: "pe-5"
            }, {
              default: si(() => [
                vs(Xn(Q5), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: c[0] || (c[0] = (u) => r.$emit("configure-options"))
                }, {
                  default: si(() => [
                    vs(Xn(Z5), {
                      class: "pa-0",
                      icon: Xn(Xc)
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
const Lt = window.Vue.unref, An = window.Vue.createVNode, tL = window.Vue.resolveDirective, xp = window.Vue.createElementVNode, nL = window.Vue.withDirectives, bp = window.Vue.toDisplayString, Cp = window.Vue.createTextVNode, Ss = window.Vue.withCtx, oL = window.Vue.openBlock, sL = window.Vue.createElementBlock, aL = { class: "mt-retry-body pb-5" }, iL = { class: "retry-body__message" }, kp = window.Codex.CdxButton, Tl = window.Codex.CdxIcon, rL = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = tL("i18n");
      return oL(), sL("div", aL, [
        xp("div", iL, [
          An(Lt(Tl), {
            class: "me-2",
            icon: Lt(Fh)
          }, null, 8, ["icon"]),
          nL(xp("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        An(Lt(P), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: Ss(() => [
            An(Lt(b), { cols: "6" }, {
              default: Ss(() => [
                An(Lt(kp), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: Ss(() => [
                    An(Lt(Tl), {
                      class: "me-1",
                      icon: Lt(Oh)
                    }, null, 8, ["icon"]),
                    Cp(" " + bp(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            An(Lt(b), { cols: "6" }, {
              default: Ss(() => [
                An(Lt(kp), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: Ss(() => [
                    An(Lt(Tl), {
                      class: "me-1",
                      icon: Lt(Ab)
                    }, null, 8, ["icon"]),
                    Cp(" " + bp(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const So = window.Vue.createVNode, Ze = window.Vue.unref, ys = window.Vue.openBlock, lL = window.Vue.createElementBlock, cL = window.Vue.createCommentVNode, ai = window.Vue.createBlock, uL = window.Vue.normalizeClass, dL = window.Vue.normalizeStyle, xs = window.Vue.withCtx, gL = window.Vue.toDisplayString, pL = window.Vue.createTextVNode, mL = window.Vue.normalizeProps, hL = window.Vue.guardReactiveProps, fL = ["lang", "dir", "innerHTML"], Bl = window.Vue.ref, wL = window.Vue.onMounted, _L = window.Vue.onBeforeUnmount, Pl = window.Vue.computed, vL = window.Vue.nextTick, SL = window.Vuex.useStore, yL = window.Codex.CdxButton, xL = window.Codex.CdxIcon, bL = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = Bl(0), n = Bl(null), o = Bl(null), s = SL(), { currentMTProvider: a } = Le(s), { targetLanguageURLParameter: r } = T(), { sourceSection: c, currentProposedTranslation: u } = oe(), d = Pl(
      () => {
        var m, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (m = c.value) == null ? void 0 : m.selectedTranslationUnitId
        );
      }
    ), i = Pl(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), l = Pl(
      () => !!u.value || a.value === ne.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    wL(() => C(this, null, function* () {
      yield vL(), g(), p.observe(n.value.$el), p.observe(o.value.$el);
    })), _L(() => {
      p.unobserve(n.value.$el), p.unobserve(o.value.$el);
    });
    const p = new ResizeObserver(() => g());
    return (m, h) => (ys(), ai(Ze(Ke), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: xs(() => [
        So(Ze(P), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: xs(() => [
            So(eL, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => m.$emit("configure-options"))
            }, null, 512),
            So(Ze(b), {
              class: uL(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !l.value && d.value
              }]),
              style: dL(l.value ? i.value : null)
            }, {
              default: xs(() => [
                l.value ? (ys(), lL("section", {
                  key: 0,
                  lang: Ze(r),
                  dir: Ze(R.getDir)(Ze(r)),
                  innerHTML: Ze(u)
                }, null, 8, fL)) : d.value ? (ys(), ai(Ze(st), { key: 1 })) : (ys(), ai(rL, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (f) => m.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (f) => m.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            So(Ze(b), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: xs(() => [
                l.value || d.value ? (ys(), ai(Ze(yL), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !l.value,
                  onClick: h[3] || (h[3] = (f) => m.$emit("edit-translation", Ze(u)))
                }, {
                  default: xs(() => [
                    So(Ze(xL), {
                      class: "me-1",
                      icon: Ze(Gc)
                    }, null, 8, ["icon"]),
                    pL(" " + gL(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : cL("", !0),
                So(pf, mL(hL(m.$attrs)), null, 16)
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
}, CL = window.Vue.computed, kL = (e) => CL(() => {
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
    const c = a.isTranslated ? "translated" : "untranslated";
    s.classList.add(`${t}--${c}`), s.innerHTML = a.content;
  }), n.innerHTML;
});
const $L = window.Vue.unref, VL = window.Vue.normalizeClass, EL = window.Vue.openBlock, LL = window.Vue.createElementBlock, AL = ["innerHTML"], DL = window.Vue.onMounted, TL = window.Vue.ref, BL = window.Vue.computed, PL = {
  __name: "SubSection",
  props: {
    subSection: {
      type: ot,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = TL(null), a = kL(n.subSection);
    DL(() => {
      s.value.addEventListener("click", (d) => {
        let i;
        if (n.subSection.isBlockTemplate)
          i = n.subSection;
        else {
          const l = d.composedPath().find(
            (g) => g instanceof Element && g.classList.contains("cx-segment")
          );
          if (!l)
            return;
          i = n.subSection.getSentenceById(
            l.dataset.segmentid
          );
        }
        c(i);
      });
    });
    const { selectTranslationUnitById: r } = Ro(), c = (d) => {
      if (d.selected) {
        o("bounce-translation");
        return;
      }
      r(d.id);
    }, u = BL(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (d, i) => (EL(), LL("div", {
      ref_key: "subSectionRoot",
      ref: s,
      class: VL(["sx-sentence-selector__subsection", u.value]),
      innerHTML: $L(a)
    }, null, 10, AL));
  }
};
const $p = window.Vue.unref, Vp = window.Vue.createVNode, Ep = window.Vue.normalizeStyle, FL = window.Vue.openBlock, ML = window.Vue.createElementBlock, Lp = window.Vue.computed, mf = {
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
    const t = e, n = Lp(() => ({ "--size": t.size })), o = Lp(
      () => !t.isTemplateAdapted || t.percentage === 0 ? Dm : _i
    );
    return (s, a) => (FL(), ML("div", {
      class: "block-template-status-indicator",
      style: Ep(n.value)
    }, [
      Vp($p(J1), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      Vp($p(Oe), {
        icon: o.value,
        size: e.size / 2,
        style: Ep({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
}, bs = window.Vue.openBlock, ii = window.Vue.createBlock;
window.Vue.createCommentVNode;
const un = window.Vue.unref, yo = window.Vue.withCtx, Cs = window.Vue.createVNode, Fl = window.Vue.toDisplayString, Ml = window.Vue.createElementVNode, NL = window.Vue.renderList, UL = window.Vue.Fragment, IL = window.Vue.createElementBlock, RL = { class: "pa-4" }, zL = ["textContent"], OL = ["textContent"], jL = window.Vuex.useStore, ri = window.Vue.computed, HL = {
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
    const t = e, { targetLanguageAutonym: n } = Le(jL()), o = ri(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), s = pe(), a = ri(() => {
      let u;
      return t.targetTemplateExists ? t.isTemplateAdapted ? o.value < 100 ? u = "cx-sx-block-template-mapping-status-title-partially-template" : u = "cx-sx-block-template-mapping-status-title-fully-template" : u = "cx-sx-block-template-mapping-status-title-unadapted-template" : u = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(u);
    }), r = ri(() => {
      let u;
      return !t.targetTemplateExists || !t.isTemplateAdapted ? u = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? u = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : u = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(u);
    }), c = ri(() => {
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
          icon: _i,
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
          icon: _i,
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
    return (u, d) => (bs(), ii(un(St), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: u.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: d[0] || (d[0] = (i) => u.$emit("update:active", i))
    }, {
      header: yo(() => [
        Cs(un(P), {
          justify: "center",
          class: "mt-4"
        }, {
          default: yo(() => [
            Cs(un(b), { shrink: "" }, {
              default: yo(() => [
                e.targetTemplateExists ? (bs(), ii(mf, {
                  key: 0,
                  percentage: o.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (bs(), ii(un(Oe), {
                  key: 1,
                  icon: un(e0)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: yo(() => [
        Ml("div", RL, [
          Ml("h3", {
            textContent: Fl(a.value)
          }, null, 8, zL),
          Ml("p", {
            class: "mt-6 text-small",
            textContent: Fl(r.value)
          }, null, 8, OL),
          (bs(!0), IL(UL, null, NL(c.value, (i, l) => (bs(), ii(un(P), {
            key: l,
            align: "start",
            class: "mt-4"
          }, {
            default: yo(() => [
              Cs(un(b), { shrink: "" }, {
                default: yo(() => [
                  Cs(un(Oe), {
                    class: "me-2",
                    icon: i.icon,
                    "icon-color": i.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              Cs(un(b), {
                textContent: Fl(i.text)
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
const Ee = window.Vue.unref, Me = window.Vue.createVNode, jt = window.Vue.withCtx, Nl = window.Vue.toDisplayString, Ap = window.Vue.createTextVNode, qL = window.Vue.resolveDirective, Dp = window.Vue.withDirectives, Tp = window.Vue.createElementVNode, GL = window.Vue.normalizeClass, li = window.Vue.openBlock, Bp = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Pp = window.Vue.createBlock, XL = window.Vue.normalizeProps, WL = window.Vue.guardReactiveProps, KL = { class: "block-template-adaptation-card__container pa-4" }, YL = ["textContent"], JL = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, Xe = window.Vue.computed, QL = window.Vue.ref, ZL = window.Vuex.useStore, Fp = window.Codex.CdxButton, Mp = window.Codex.CdxIcon, eA = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = ZL(), { targetLanguageAutonym: n, currentMTProvider: o } = Le(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = oe(), r = Xe(() => {
      var B;
      return ((B = s.value) == null ? void 0 : B.blockTemplateTranslatedContent) || a.value;
    }), c = Xe(
      () => {
        var L;
        return (L = s.value) == null ? void 0 : L.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), u = Xe(
      () => {
        var L;
        return !((L = t.state.application.mtRequestsPending) != null && L.includes(
          s.value.id
        ));
      }
    ), d = pe(), i = Xe(
      // Strip HTML comments and return
      () => {
        var L, B;
        return ((B = (L = s.value) == null ? void 0 : L.sourceBlockTemplateName) == null ? void 0 : B.replace(
          /<\!--.*?-->/g,
          ""
        )) || d.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), l = Xe(
      () => {
        var L, B;
        return (B = (L = s.value) == null ? void 0 : L.blockTemplateAdaptationInfo) == null ? void 0 : B[o.value];
      }
    ), g = Xe(
      () => {
        var L, B;
        return ((L = l.value) == null ? void 0 : L.adapted) || !!((B = l.value) != null && B.partial);
      }
    ), p = Xe(() => l.value ? "block-template-adaptation-card__body--" + (g.value ? "success" : "warning") : null), m = Xe(() => l.value ? g.value ? d.i18n("sx-block-template-adaptation-card-edit-button-label") : d.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), h = Xe(
      () => {
        var L;
        return Object.keys(((L = s.value) == null ? void 0 : L.sourceTemplateParams) || {}).length;
      }
    ), f = Xe(() => {
      var B;
      const L = (B = s.value) == null ? void 0 : B.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(L || {});
    }), _ = Xe(() => f.value.length), w = Xe(() => {
      const L = k.value;
      return h.value + L === 0 ? 100 : _.value / (h.value + L) * 100 || 0;
    }), y = QL(!1), x = () => {
      y.value = !0;
    }, S = (L) => L.filter((B) => !f.value.includes(B)), k = Xe(() => {
      var B;
      const L = ((B = l.value) == null ? void 0 : B.mandatoryTargetParams) || [];
      return S(L).length;
    }), A = Xe(() => {
      var B;
      const L = ((B = l.value) == null ? void 0 : B.optionalTargetParams) || [];
      return S(L).length;
    });
    return (L, B) => {
      const J = qL("i18n");
      return li(), Pp(Ee(Ke), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: jt(() => [
          Tp("div", KL, [
            Me(Ee(P), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: jt(() => [
                Me(Ee(b), { shrink: "" }, {
                  default: jt(() => [
                    Me(Ee(Mp), {
                      icon: Ee(Db),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                Me(Ee(b), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: jt(() => [
                    Ap(Nl(i.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            c.value ? (li(), Bp("div", {
              key: 0,
              class: GL(["pa-4 mb-4", p.value])
            }, [
              Me(Ee(P), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: jt(() => [
                  Dp(Me(Ee(b), { tag: "h5" }, null, 512), [
                    [J, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  Me(Ee(b), { shrink: "" }, {
                    default: jt(() => [
                      Me(mf, {
                        percentage: w.value,
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
              Tp("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: Nl(c.value)
              }, null, 8, YL),
              Me(Ee(Fp), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: B[0] || (B[0] = (U) => L.$emit("edit-translation", r.value))
              }, {
                default: jt(() => [
                  Ap(Nl(m.value), 1)
                ]),
                _: 1
              })
            ], 2)) : u.value ? (li(), Bp("div", JL, [
              Me(Ee(P), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: jt(() => [
                  Dp(Me(Ee(b), { tag: "h5" }, null, 512), [
                    [J, [
                      Ee(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  Me(Ee(b), { shrink: "" }, {
                    default: jt(() => [
                      Me(Ee(Fp), {
                        weight: "quiet",
                        "aria-label": L.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: jt(() => [
                          Me(Ee(Mp), {
                            icon: Ee(Eb),
                            onClick: x
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
            ])) : (li(), Pp(Ee(st), { key: 2 }))
          ]),
          Me(pf, XL(WL(L.$attrs)), null, 16),
          Me(HL, {
            active: y.value,
            "onUpdate:active": B[1] || (B[1] = (U) => y.value = U),
            "source-params-count": h.value,
            "target-params-count": _.value,
            "mandatory-missing-params-count": k.value,
            "optional-missing-params-count": A.value,
            "is-template-adapted": g.value,
            "target-template-exists": !!c.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const tA = window.Vue.unref, nA = window.Vue.createVNode, oA = window.Vue.openBlock, sA = window.Vue.createElementBlock, aA = { class: "translated-segment-card-header" }, iA = window.Vue.computed, rA = {
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
    const n = t, { isSectionTitleSelected: o } = oe(), s = pe(), a = iA(() => [
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
    ]), r = (c) => n("update:selection", c);
    return (c, u) => (oA(), sA("div", aA, [
      nA(tA(Gs), {
        items: a.value,
        active: e.selection,
        onSelect: r
      }, null, 8, ["items", "active"])
    ]));
  }
};
const Dn = window.Vue.unref, ci = window.Vue.createVNode, Ul = window.Vue.withCtx, lA = window.Vue.openBlock, cA = window.Vue.createBlock, uA = window.Vue.computed, Np = window.Codex.CdxButton, Up = window.Codex.CdxIcon, dA = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "skip-translation"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = oe(), o = uA(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (lA(), cA(Dn(P), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: Ul(() => [
        ci(Dn(Np), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: Dn(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => s.$emit("select-previous-segment"))
        }, {
          default: Ul(() => [
            ci(Dn(Up), { icon: Dn(Kc) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        ci(Dn(Np), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => s.$emit("skip-translation"))
        }, {
          default: Ul(() => [
            ci(Dn(Up), { icon: Dn(ta) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
};
const gA = window.Vue.useCssVars, Ne = window.Vue.createVNode, Ip = window.Vue.resolveDirective, pA = window.Vue.createElementVNode, Il = window.Vue.withDirectives, _e = window.Vue.unref, mA = window.Vue.normalizeStyle, ui = window.Vue.openBlock, Rp = window.Vue.createElementBlock, hA = window.Vue.createCommentVNode, fA = window.Vue.normalizeClass, pt = window.Vue.withCtx, wA = window.Vue.toDisplayString, _A = window.Vue.createTextVNode, zp = window.Vue.createBlock, vA = window.Vue.normalizeProps, SA = window.Vue.guardReactiveProps, dn = window.Vue.computed, yA = window.Vue.ref, xA = window.Vue.inject, bA = window.Vuex.useStore, CA = window.Codex.CdxButton, Rl = window.Codex.CdxIcon, kA = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    gA((w) => ({
      "4929555c": _.value
    }));
    const t = yA("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = oe(), { targetLanguage: a } = Le(bA()), r = dn(() => t.value === "sentence"), c = dn(
      () => n.value.subSections.find(
        (w) => w.sentences.some(
          (y) => {
            var x;
            return y.id === ((x = o.value) == null ? void 0 : x.id);
          }
        )
      )
    ), u = dn(() => {
      var w;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : r.value ? (w = o.value) == null ? void 0 : w.mtProposedTranslationUsed : c.value.proposedContentForMTValidation;
    }), d = xA("colors"), i = d.gray200, l = d.red600, g = dn(() => s.value ? n.value.translatedTitle : r.value ? o.value.translatedContent : c.value.translatedContent), p = dn(
      () => Xt.calculateScore(
        g.value,
        u.value,
        a.value
      )
    ), m = dn(
      () => Xt.getScoreStatus(p.value)
    ), h = dn(
      () => `translated-segment-card__modification-stats__percentage--${m.value}`
    ), f = dn(() => ({
      failure: p.value === 0 ? null : d.yellow700,
      warning: d.yellow700,
      success: d.green600
    })), _ = dn(
      () => f.value[m.value]
    );
    return (w, y) => {
      const x = Ip("i18n"), S = Ip("i18n-html");
      return ui(), zp(_e(Ke), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: pt(() => [
          Ne(_e(P), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: pt(() => [
              Ne(rA, {
                selection: t.value,
                "onUpdate:selection": y[0] || (y[0] = (k) => t.value = k)
              }, null, 8, ["selection"]),
              Ne(_e(b), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: pt(() => [
                  Ne(_e(P), { class: "ma-0" }, {
                    default: pt(() => [
                      Ne(_e(b), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: pt(() => [
                          Il(pA("h5", null, null, 512), [
                            [x, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          p.value === 0 ? Il((ui(), Rp("p", {
                            key: 0,
                            style: mA({ color: _e(l) })
                          }, null, 4)), [
                            [x, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : Il((ui(), Rp("p", {
                            key: 1,
                            class: fA(h.value)
                          }, null, 2)), [
                            [S, [
                              p.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      Ne(_e(b), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: pt(() => [
                          Ne(_e(P), { class: "ma-0 ms-2" }, {
                            default: pt(() => [
                              Ne(_e(b), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: pt(() => [
                                  Ne(_e(Rl), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: _e(Pb)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              Ne(_e(b), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: pt(() => [
                                  Ne(_e(Bm), {
                                    value: p.value,
                                    height: "4px",
                                    width: "64px",
                                    color: _.value,
                                    background: _e(i)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              Ne(_e(b), { shrink: "" }, {
                                default: pt(() => [
                                  Ne(_e(Rl), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: _e(Tb)
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
                  r.value ? (ui(), zp(_e(CA), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: y[1] || (y[1] = (k) => w.$emit("edit-translation", g.value))
                  }, {
                    default: pt(() => [
                      Ne(_e(Rl), {
                        class: "me-1",
                        icon: _e(Gc)
                      }, null, 8, ["icon"]),
                      _A(" " + wA(w.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : hA("", !0)
                ]),
                _: 1
              }),
              Ne(_e(b), { class: "translated-segment-card__actions" }, {
                default: pt(() => [
                  Ne(dA, vA(SA(w.$attrs)), null, 16)
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
}, $A = () => {
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
}, hf = window.Vuex.useStore, VA = () => {
  const e = hf(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = T();
  return () => C(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const o = mw.config.get("wgContentTranslationEnableMT");
    let s;
    o ? s = yield Li.fetchSupportedMTProviders(
      t.value,
      n.value
    ) : s = new ne(
      t.value,
      n.value,
      []
      // Empty providers array - only "original" and "empty" will be added by constructor
    ), e.commit("mediawiki/addMtProviderGroup", s);
  });
}, EA = () => {
  const e = hf(), { currentMTProvider: t } = Le(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = T(), s = VA();
  return () => C(void 0, null, function* () {
    yield s();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, o.value);
    if (!t.value || !a.includes(t.value)) {
      const r = ne.getStorageKey(
        n.value,
        o.value
      );
      let c = mw.storage.get(r);
      (!c || !a.includes(c)) && (c = a[0]), e.commit("application/setCurrentMTProvider", c);
    }
  });
}, LA = window.Vue.computed, AA = (e) => {
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
}, DA = () => {
  const { selectedContentTranslationUnit: e } = oe(), t = LA(
    () => e.value instanceof ot
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && AA(o);
  };
}, TA = (e, t) => {
  const { content: n, origin: o, baseSectionId: s, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const r = t.filter(
    (c) => !ne.isUserMTProvider(c)
  );
  if (o !== "source" && o !== "user" && !r.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, BA = window.Vue.computed, ff = () => {
  const { currentTranslation: e } = Ft(), { currentSourcePage: t } = rt();
  return BA(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, PA = window.Vuex.useStore, su = () => {
  const e = PA(), { sourceSection: t, targetPageTitleForPublishing: n } = oe(), {
    pageURLParameter: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = T(), r = ff();
  return () => {
    const c = n.value, u = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), d = `${r.value}_${t.value.id}`, i = t.value.getParallelCorporaUnits(d);
    i.forEach(
      (p) => TA(p, u)
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
      revision: r.value,
      units: i.map((p) => p.payload),
      // section id to be stored as "cxsx_section_id" inside "cx_section_translations"
      sectionId: d,
      isSandbox: g,
      progress: l
    });
  };
}, FA = window.Vue.effectScope, MA = window.Vue.onScopeDispose, NA = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = FA(!0), n = o.run(() => e(...a))), MA(s), n);
}, UA = window.Vuex.useStore;
let zl;
const IA = () => {
  const e = UA(), t = su();
  let n = 1e3, o = 0;
  return zl = Yc(() => t().then((a) => {
    a instanceof Ao ? (n *= o + 1, o++, setTimeout(zl, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof Bo)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), zl;
}, wf = NA(IA), RA = window.Vuex.useStore, zA = () => {
  const e = RA(), t = wf(), { currentMTProvider: n } = Le(e), { sourceSection: o, currentProposedTranslation: s } = oe(), { selectNextTranslationUnit: a } = Ro();
  return () => C(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, OA = window.Vuex.useStore, jA = () => {
  const e = OA(), t = wf();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, HA = window.Vuex.useStore, qA = window.Vue.computed, _f = () => {
  const e = HA(), t = Te(), { currentTranslation: n } = Ft(), { currentMTProvider: o, previousRoute: s } = Le(e), { currentTargetPage: a } = rt(), {
    sourceLanguageURLParameter: r,
    targetLanguageURLParameter: c,
    pageURLParameter: u,
    sectionURLParameter: d
  } = T(), i = it(), l = qA(() => {
    var _;
    const f = {
      translation_source_language: r.value,
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
    return o.value && (f.translation_provider = ne.getProviderForInstrumentation(o.value)), f;
  });
  return {
    logEditorOpenEvent: () => {
      var x;
      const f = t.currentRoute.value.meta.workflowStep, w = t.getRoutes().find(
        (S) => S.name === s.value
      ), y = ((x = w == null ? void 0 : w.meta) == null ? void 0 : x.workflowStep) || 0;
      return f > y ? i(me({
        event_type: "editor_open"
      }, l.value)) : Promise.resolve();
    },
    logEditorCloseEvent: () => i(me({
      event_type: "editor_close"
    }, l.value)),
    logEditorCloseWarnEvent: () => i(me({
      event_type: "editor_close_warn"
    }, l.value)),
    logEditorSegmentAddEvent: () => i(me({
      event_type: "editor_segment_add"
    }, l.value))
  };
}, GA = (e, t, n, o) => C(void 0, null, function* () {
  var c, u, d;
  const s = ((c = t.user) == null ? void 0 : c.content) || ((u = t.mt) == null ? void 0 : u.content), a = (d = t == null ? void 0 : t.mt) == null ? void 0 : d.engine, r = yield gf(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = r, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = r;
}), XA = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, r;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const c = (r = t.mt) == null ? void 0 : r.engine;
      o.addProposedTranslation(c, n.mt.innerHTML), o.mtProviderUsed = c;
    }
  });
}, WA = (e, t, n, o) => C(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return GA(e, t, n, o);
  XA(e, t);
}), KA = (e, t, n, o) => {
  const s = [];
  for (const a of e.sections || [])
    if (o.filter(
      (c) => c.pageSectionId === parseInt(a.id)
    ).length)
      for (const c of a.subSections) {
        const u = o.find(
          (i) => i.subSectionId === c.id
        );
        if (!u)
          continue;
        const d = WA(
          c,
          u,
          t || e.title,
          n
        );
        s.push(d);
      }
  return Promise.all(s);
}, YA = { restoreCorporaDraft: KA }, JA = () => {
  const { currentSourcePage: e } = rt(), { sourceSection: t } = oe();
  return (n) => C(void 0, null, function* () {
    n.restored || (yield vt.fetchTranslationUnits(n.translationId).then(
      (s) => YA.restoreCorporaDraft(
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
const de = window.Vue.unref, mt = window.Vue.createVNode, gn = window.Vue.withCtx, QA = window.Vue.resolveDirective, Op = window.Vue.createElementVNode, ZA = window.Vue.withDirectives, eD = window.Vue.toDisplayString, tD = window.Vue.createTextVNode, nD = window.Vue.renderList, oD = window.Vue.Fragment, Tn = window.Vue.openBlock, jp = window.Vue.createElementBlock, xo = window.Vue.createBlock;
window.Vue.createCommentVNode;
const sD = window.Vue.normalizeClass, aD = window.Vue.normalizeStyle, iD = { class: "sx-sentence-selector__header-title mb-0" }, rD = { class: "sx-sentence-selector__section-contents px-4" }, bo = window.Vue.computed, lD = window.Vue.nextTick, cD = window.Vue.onMounted, ks = window.Vue.ref, Hp = window.Vue.watch, uD = window.Vuex.useStore, qp = window.Codex.CdxButton, dD = window.Codex.CdxIcon, gD = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = ks(!1), n = ks(!1), o = ks("100%"), s = uD(), { currentMTProvider: a } = Le(s), {
      sourceLanguageURLParameter: r,
      targetLanguageURLParameter: c,
      pageURLParameter: u,
      sectionURLParameter: d
    } = T(), { sourceSection: i, selectedContentTranslationUnit: l } = oe(), g = ks({
      pageContent: !1,
      pageMetadata: !1,
      draftRestored: !1,
      mtProviders: !1
    }), p = bo(
      () => Object.values(g.value).every(Boolean)
    ), m = bo(
      () => {
        var Q;
        return (Q = i.value) == null ? void 0 : Q.isSelectedTranslationUnitTranslated;
      }
    ), h = bo(() => {
      var Q;
      return (Q = i.value) == null ? void 0 : Q.subSections;
    }), f = bo(
      () => {
        var Q;
        return (Q = i.value) == null ? void 0 : Q.selectedTranslationUnitOriginalContent;
      }
    ), _ = bo(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: w,
      logEditorCloseEvent: y,
      logEditorCloseWarnEvent: x,
      logEditorSegmentAddEvent: S
    } = _f(), k = $A();
    EA()().then(() => {
      w(), g.value.mtProviders = !0;
    });
    const L = DA(), { fetchTranslationsByStatus: B, translationsFetched: J } = Uo(), U = JA(), { currentTranslation: G } = Ft(), { selectPageSectionByTitle: Z, selectPageSectionByIndex: Ce } = Ni(), be = tu(), lt = Fo();
    cD(() => C(this, null, function* () {
      if (!J.value.draft) {
        const Q = [
          // required to get current draft translation (if exists)
          B("draft"),
          // required to get target page title for template adaptation (useTranslationUnitTranslate)
          be(r.value, u.value),
          // user has just been redirected here from another wiki, and page metadata have not yet been fetched
          lt(r.value, [u.value])
        ];
        yield Promise.all(Q);
      }
      g.value.pageMetadata = !0, d.value ? yield Z(d.value) : yield Ce(0), g.value.pageContent = !0, G.value && (yield U(G.value)), g.value.draftRestored = !0, Hp(
        p,
        () => C(this, null, function* () {
          p.value && (yield lD(), k(), L());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    })), Hp(l, L);
    const {
      selectNextTranslationUnit: Ae,
      selectPreviousTranslationUnit: M
    } = Ro(), X = zA(), le = () => {
      S(), X();
    }, ce = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, W = Te(), se = () => {
      const { autoSavePending: Q } = s.state.application;
      if (Q) {
        ee.value = !0, x();
        return;
      }
      j();
    }, ke = jA(), { clearTranslationURLParameters: N } = T(), j = () => C(this, null, function* () {
      B("draft"), G.value && (i.value.reset(), G.value.restored = !1), y(), N(), ke(), yield W.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: v,
      translateSelectedTranslationUnitForAllProviders: V
    } = ou(), D = () => {
      I.value || (t.value = !0, V());
    }, { getCurrentTitleByLanguage: F } = Sn(), H = (Q, te) => {
      W.push({
        name: "sx-editor",
        state: {
          content: Q,
          originalContent: f.value,
          title: F(
            c.value,
            r.value
          ),
          isInitialEdit: te || null
        }
      });
    }, ie = () => W.push({ name: "sx-publisher" }), O = () => C(this, null, function* () {
      l.value ? yield v(
        l.value.id,
        a.value
      ) : yield v(0, a.value);
    }), I = bo(
      () => l.value instanceof ot
    ), ee = ks(!1);
    return (Q, te) => {
      const oa = QA("i18n");
      return Tn(), jp("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: aD(_.value)
      }, [
        mt(de(P), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: gn(() => [
            mt(de(b), { shrink: "" }, {
              default: gn(() => [
                mt(de(qp), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": Q.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: se
                }, {
                  default: gn(() => [
                    mt(de(dD), { icon: de(Nh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            mt(de(b), {
              grow: "",
              class: "px-1"
            }, {
              default: gn(() => [
                ZA(Op("h4", iD, null, 512), [
                  [oa, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            mt(de(b), {
              shrink: "",
              class: "px-3"
            }, {
              default: gn(() => [
                mt(de(qp), {
                  disabled: !(de(i) && de(i).isTranslated),
                  onClick: ie
                }, {
                  default: gn(() => [
                    tD(eD(Q.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        p.value ? (Tn(), xo(de(P), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: gn(() => [
            mt(de(b), {
              dir: de(R.getDir)(de(r)),
              lang: de(r),
              class: "sx-sentence-selector__section"
            }, {
              default: gn(() => [
                mt(H5),
                Op("div", rD, [
                  (Tn(!0), jp(oD, null, nD(h.value, (He) => (Tn(), xo(PL, {
                    id: He.id,
                    key: `sub-section-${He.id}`,
                    "sub-section": He,
                    onBounceTranslation: ce
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !I.value && m.value ? (Tn(), xo(kA, {
              key: 0,
              onEditTranslation: te[0] || (te[0] = (He) => H(He, !1)),
              onSkipTranslation: de(Ae),
              onSelectPreviousSegment: de(M)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : I.value ? (Tn(), xo(eA, {
              key: 2,
              onEditTranslation: H,
              onApplyTranslation: le,
              onSkipTranslation: de(Ae),
              onSelectPreviousSegment: de(M)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : (Tn(), xo(bL, {
              key: 1,
              class: sD({ "mb-0": !n.value }),
              onConfigureOptions: D,
              onEditTranslation: te[1] || (te[1] = (He) => H(He, !0)),
              onApplyTranslation: le,
              onSkipTranslation: de(Ae),
              onSelectPreviousSegment: de(M),
              onRetryTranslation: O
            }, null, 8, ["class", "onSkipTranslation", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Tn(), xo(de(P), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: gn(() => [
            mt(de(st), { class: "mt-0" })
          ]),
          _: 1
        })),
        mt(T5, {
          active: t.value,
          "onUpdate:active": te[2] || (te[2] = (He) => t.value = He)
        }, null, 8, ["active"]),
        mt(r5, {
          modelValue: ee.value,
          "onUpdate:modelValue": te[3] || (te[3] = (He) => ee.value = He),
          onDiscardTranslation: j
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
  const r = mD("sx-sentence-selector");
  return wD(), _D("main", {
    class: fD(["sx-sentence-selector-view", a.classes])
  }, [
    hD(r)
  ], 2);
}
const SD = /* @__PURE__ */ ae(pD, [["render", vD]]), yD = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, xD = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const bD = window.Vue.resolveDirective, di = window.Vue.withDirectives, At = window.Vue.openBlock, pn = window.Vue.createElementBlock, gi = window.Vue.createCommentVNode, pi = window.Vue.Transition, Wn = window.Vue.withCtx, Co = window.Vue.createVNode, $s = window.Vue.createElementVNode, Bn = window.Vue.unref, CD = window.Vue.renderList, kD = window.Vue.Fragment, $D = window.Vue.normalizeClass, Gp = window.Vue.createBlock, VD = window.Vue.toDisplayString, ED = window.Vue.createTextVNode, LD = { class: "sx-quick-tutorial" }, AD = { class: "sx-quick-tutorial__main-point py-9 px-6" }, DD = {
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
}, zD = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, Xp = window.Vue.ref, Wp = window.Codex.CdxButton, OD = window.Codex.CdxIcon, jD = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = Xp(2), n = Xp(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (r) => r === n.value;
    Te();
    const a = Io();
    return (r, c) => {
      const u = bD("i18n");
      return At(), pn("section", LD, [
        Co(Bn(P), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: Wn(() => [
            $s("section", AD, [
              Co(pi, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Wn(() => [
                  s(1) ? di((At(), pn("h2", DD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? di((At(), pn("h2", TD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : gi("", !0)
                ]),
                _: 1
              })
            ]),
            $s("section", BD, [
              Co(pi, { name: "mw-ui-animation-slide-start" }, {
                default: Wn(() => [
                  s(1) ? (At(), pn("div", {
                    key: "illustration-1",
                    innerHTML: Bn(xD)
                  }, null, 8, PD)) : s(2) ? (At(), pn("div", {
                    key: "illustration-2",
                    innerHTML: Bn(yD)
                  }, null, 8, FD)) : gi("", !0)
                ]),
                _: 1
              })
            ]),
            $s("div", MD, [
              (At(!0), pn(kD, null, CD(t.value, (d) => (At(), pn("span", {
                key: `dot-${d}`,
                class: $D(["dot mx-1", { "dot-active": s(d) }]),
                role: "button",
                onClick: (i) => n.value = d
              }, null, 10, ND))), 128))
            ]),
            $s("section", UD, [
              Co(pi, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Wn(() => [
                  s(1) ? di((At(), pn("h3", ID, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? di((At(), pn("h3", RD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : gi("", !0)
                ]),
                _: 1
              })
            ]),
            $s("div", zD, [
              Co(pi, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Wn(() => [
                  s(1) ? (At(), Gp(Bn(Wp), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": r.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: Wn(() => [
                      Co(Bn(OD), { icon: Bn(ta) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (At(), Gp(Bn(Wp), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: Bn(a)
                  }, {
                    default: Wn(() => [
                      ED(VD(r.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : gi("", !0)
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
  const r = qD("sx-quick-tutorial");
  return WD(), KD("main", {
    class: XD(["sx-quick-tutorial-view", a.classes])
  }, [
    GD(r)
  ], 2);
}
const JD = /* @__PURE__ */ ae(HD, [["render", YD]]);
const QD = window.Vue.resolveDirective, Kp = window.Vue.createElementVNode, ZD = window.Vue.withDirectives, eT = window.Vue.unref, tT = window.Vue.withCtx, nT = window.Vue.createVNode, oT = window.Vue.openBlock, sT = window.Vue.createElementBlock, aT = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, iT = { class: "sx-editor__original-content-panel__header mb-2" }, rT = ["lang", "dir", "innerHTML"], Yp = window.Vue.ref, lT = window.Vue.onMounted, cT = {
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
    const t = e, n = (r, c) => {
      const u = r.getElementsByTagName("a");
      for (const d of u)
        d.href = Y.getPageUrl(c, d.title), d.target = "_blank";
    }, o = Yp(null), s = Yp(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(o.value, null).getPropertyValue("line-height")
    );
    return lT(() => {
      s.value = 2 * a(), n(o.value, t.language);
    }), (r, c) => {
      const u = QD("i18n");
      return oT(), sT("section", aT, [
        ZD(Kp("h5", iT, null, 512), [
          [u, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        nT(eT(j1), {
          "min-height": s.value,
          scroll: ""
        }, {
          default: tT(() => [
            Kp("div", {
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
const dT = window.Vue.unref, Vs = window.Vue.createElementVNode, Jp = window.Vue.resolveDirective, Ol = window.Vue.withDirectives, gT = window.Vue.normalizeClass, pT = window.Vue.openBlock, mT = window.Vue.createElementBlock, hT = window.Vue.createCommentVNode, fT = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, wT = { class: "sx-editor__feedback-overlay-content px-4" }, _T = ["innerHTML"], vT = { class: "sx-editor__feedback-overlay-content__title" }, ST = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, jl = window.Vue.computed, yT = {
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
    const t = e, { targetLanguageURLParameter: n } = T(), o = jl(
      () => Xt.calculateScore(
        t.editedTranslation,
        t.proposedTranslation,
        n.value
      )
    ), s = jl(() => {
      const r = Xt.getScoreStatus(o.value);
      return r === "failure" ? o.value === 0 ? "failure" : "warning" : r;
    }), a = jl(
      () => `sx-editor__feedback-overlay-content__stats--${s.value}`
    );
    return (r, c) => {
      const u = Jp("i18n"), d = Jp("i18n-html");
      return e.showFeedback ? (pT(), mT("div", fT, [
        Vs("div", wT, [
          Vs("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: dT(uT)
          }, null, 8, _T),
          Ol(Vs("h2", vT, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          Ol(Vs("p", ST, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          Ol(Vs("p", {
            class: gT(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [d, [o.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : hT("", !0);
    };
  }
}, xT = window.Vuex.useStore, bT = () => {
  const e = xT(), t = su(), { selectNextTranslationUnit: n } = Ro(), { sourceSection: o, selectedContentTranslationUnit: s } = oe(), { getCurrentTitleByLanguage: a } = Sn();
  return (r) => C(void 0, null, function* () {
    const c = document.createElement("div");
    c.innerHTML = r, c.querySelectorAll(".sx-edit-dummy-node").forEach((l) => l.remove()), r = c.innerHTML;
    const { sourceLanguage: u, targetLanguage: d, currentMTProvider: i } = e.state.application;
    s.value instanceof ot && (r = (yield gf(
      r,
      a(d, u),
      d
    )) || r), o.value.setTranslationForSelectedTranslationUnit(
      r,
      i
    ), t(), n();
  });
};
const et = window.Vue.unref, Hl = window.Vue.openBlock, ql = window.Vue.createBlock, Qp = window.Vue.createCommentVNode, Zp = window.Vue.createVNode, CT = window.Vue.createElementVNode, kT = window.Vue.withCtx, $T = { class: "sx-editor__editing-surface-container grow" }, Gl = window.Vue.ref, VT = window.Vue.computed, ET = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Gl(!1), o = Te(), s = () => n.value = !0, a = () => o.replace({ name: t.fromRoute }), { isFinalEdit: r, isInitialEdit: c, content: u, originalContent: d, title: i } = history.state, l = Gl(null), g = Gl(!1), { logEditorSegmentAddEvent: p } = _f(), {
      sourceLanguageURLParameter: m,
      targetLanguageURLParameter: h
    } = T(), { sourceSection: f } = oe(), _ = VT(
      () => Xt.calculateScore(
        l.value,
        u,
        h.value
      )
    ), w = bT(), y = (x) => C(this, null, function* () {
      l.value = x, g.value = !0;
      const S = new Promise((A) => setTimeout(A, 2e3));
      let k = Promise.resolve();
      r ? f.value.editedTranslation = x : (_.value === 0 && c && p(), k = w(x)), yield Promise.all([S, k]), g.value = !1, a();
    });
    return (x, S) => (Hl(), ql(et(P), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: kT(() => [
        et(d) ? (Hl(), ql(cT, {
          key: 0,
          language: et(m),
          dir: et(R.getDir)(et(m)),
          "original-content": et(d)
        }, null, 8, ["language", "dir", "original-content"])) : Qp("", !0),
        n.value ? Qp("", !0) : (Hl(), ql(et(st), { key: 1 })),
        CT("div", $T, [
          Zp(yT, {
            "edited-translation": l.value,
            "show-feedback": g.value,
            "proposed-translation": et(u)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          Zp(s4, {
            content: et(u),
            language: et(h),
            dir: et(R.getDir)(et(h)),
            title: et(i),
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
const LT = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: ET
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
}, AT = window.Vue.resolveComponent, DT = window.Vue.createVNode, TT = window.Vue.normalizeClass, BT = window.Vue.openBlock, PT = window.Vue.createElementBlock;
function FT(e, t, n, o, s, a) {
  const r = AT("sx-editor");
  return BT(), PT("main", {
    class: TT(["sx-editor-view", a.classes])
  }, [
    DT(r, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const MT = /* @__PURE__ */ ae(LT, [["render", FT]]);
const Ht = window.Vue.unref, Kn = window.Vue.createVNode, Es = window.Vue.withCtx, NT = window.Vue.resolveDirective, UT = window.Vue.withDirectives, IT = window.Vue.openBlock, RT = window.Vue.createBlock, em = window.Codex.CdxButton, tm = window.Codex.CdxIcon, zT = {
  __name: "SXPublisherHeader",
  props: {
    isPublishingDisabled: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["publish-translation"],
  setup(e) {
    const t = Te(), n = () => t.push({ name: "sx-sentence-selector" });
    return (o, s) => {
      const a = NT("i18n");
      return IT(), RT(Ht(P), { class: "ma-0 sx-publisher__header" }, {
        default: Es(() => [
          Kn(Ht(b), {
            shrink: "",
            class: "me-2"
          }, {
            default: Es(() => [
              Kn(Ht(em), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: Es(() => [
                  Kn(Ht(tm), { icon: Ht(No) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          UT(Kn(Ht(b), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          Kn(Ht(b), { shrink: "" }, {
            default: Es(() => [
              Kn(Ht(em), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (r) => o.$emit("publish-translation"))
              }, {
                default: Es(() => [
                  Kn(Ht(tm), { icon: Ht(Cb) }, null, 8, ["icon"])
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
}, OT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, jT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, nm = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const Xl = window.Vue.createElementVNode, om = window.Vue.toDisplayString, Wl = window.Vue.unref, Kl = window.Vue.withCtx, sm = window.Vue.createVNode, HT = window.Vue.openBlock, qT = window.Vue.createBlock, GT = window.Vue.createCommentVNode, XT = ["innerHTML"], WT = ["textContent"], KT = ["textContent"], Yl = window.Vue.computed, YT = {
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
        svg: OT,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: jT,
        title: t.i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: nm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: nm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, s = Yl(() => o[n.status].svg), a = Yl(() => o[n.status].title), r = Yl(() => o[n.status].subtitle);
    return (c, u) => e.active ? (HT(), qT(Wl(St), {
      key: 0,
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: Kl(() => [
        sm(Wl(P), { class: "ma-4" }, {
          default: Kl(() => [
            sm(Wl(b), null, {
              default: Kl(() => [
                Xl("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: s.value
                }, null, 8, XT),
                Xl("h2", {
                  textContent: om(a.value)
                }, null, 8, WT),
                Xl("p", {
                  class: "ma-0",
                  textContent: om(r.value)
                }, null, 8, KT)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : GT("", !0);
  }
};
const tt = window.Vue.unref, Dt = window.Vue.createVNode, mn = window.Vue.withCtx, JT = window.Vue.resolveDirective, QT = window.Vue.withDirectives, am = window.Vue.toDisplayString, ZT = window.Vue.createTextVNode, Jl = window.Vue.openBlock, im = window.Vue.createElementBlock, e6 = window.Vue.createCommentVNode, vf = window.Vue.createElementVNode, t6 = window.Vue.createBlock, n6 = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, o6 = ["src"], s6 = ["textContent"], a6 = /* @__PURE__ */ vf("p", { class: "mt-0" }, null, -1), i6 = window.Vue.computed, r6 = window.Vue.inject, l6 = window.Vue.ref, rm = window.Codex.CdxButton, c6 = window.Codex.CdxIcon, u6 = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: ch,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = l6(""), s = () => n("close"), a = () => n("publish", o.value), r = r6("breakpoints"), c = i6(() => r.value.mobile);
    return (u, d) => {
      const i = JT("i18n");
      return e.active && e.captchaDetails ? (Jl(), t6(tt(St), {
        key: 0,
        fullscreen: c.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: mn(() => [
          Dt(tt(P), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: mn(() => [
              Dt(tt(b), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: mn(() => [
                  Dt(tt(rm), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": u.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: s
                  }, {
                    default: mn(() => [
                      Dt(tt(c6), { icon: tt(No) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              QT(Dt(tt(b), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [i, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              Dt(tt(b), {
                shrink: "",
                class: "justify-center"
              }, {
                default: mn(() => [
                  Dt(tt(rm), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: mn(() => [
                      ZT(am(u.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Dt(tt(xi))
        ]),
        default: mn(() => [
          vf("div", n6, [
            e.captchaDetails.type === "image" ? (Jl(), im("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, o6)) : (Jl(), im("p", {
              key: 1,
              textContent: am(e.captchaDetails.question)
            }, null, 8, s6)),
            a6,
            Dt(tt(P), { class: "ma-0" }, {
              default: mn(() => [
                Dt(tt(b), null, {
                  default: mn(() => [
                    Dt(tt(cc), {
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
      }, 8, ["fullscreen"])) : e6("", !0);
    };
  }
};
const Yn = window.Vue.unref, Ls = window.Vue.createVNode, mi = window.Vue.withCtx, Jn = window.Vue.createElementVNode, d6 = window.Vue.resolveDirective, g6 = window.Vue.withDirectives, p6 = window.Vue.renderList, lm = window.Vue.Fragment, Ql = window.Vue.openBlock, cm = window.Vue.createElementBlock, m6 = window.Vue.toDisplayString, h6 = window.Vue.normalizeClass, f6 = window.Vue.createBlock, w6 = { class: "mw-ui-dialog__header" }, _6 = { class: "row ma-0 px-4 py-3" }, v6 = { class: "col shrink justify-center" }, S6 = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, y6 = { class: "mb-0" }, x6 = { class: "pa-4" }, b6 = ["textContent"], C6 = window.Vuex.useStore, As = window.Vue.computed, k6 = window.Codex.CdxButton, $6 = window.Codex.CdxIcon, V6 = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = C6(), s = As(() => o.state.application.publishTarget), a = As(() => o.state.translator.isAnon), r = pe(), { sourceSection: c } = oe(), u = As(
      () => c.value.isLeadSection ? r.i18n("cx-sx-publisher-lead-section-option-label") : r.i18n("cx-sx-publisher-new-section-option-label")
    ), d = As(
      () => c.value.isLeadSection ? r.i18n("cx-sx-publisher-lead-section-option-details") : r.i18n("cx-sx-publisher-new-section-option-details")
    ), i = As(() => [
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
    ]), l = (m) => m === i.value.length - 1 ? "mb-1" : "mb-4", g = () => n("update:active", !1), p = (m) => {
      const h = m.target.value;
      o.commit("application/setPublishTarget", h), g();
    };
    return (m, h) => {
      const f = d6("i18n");
      return Ql(), f6(Yn(St), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: m.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: h[0] || (h[0] = (_) => m.$emit("update:active", _)),
        onClose: g
      }, {
        header: mi(() => [
          Jn("div", w6, [
            Jn("div", _6, [
              Jn("div", v6, [
                Ls(Yn(k6), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": m.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: g
                }, {
                  default: mi(() => [
                    Ls(Yn($6), { icon: Yn(Nh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              Jn("div", S6, [
                g6(Jn("h4", y6, null, 512), [
                  [f, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            Ls(Yn(xi))
          ])
        ]),
        default: mi(() => [
          Jn("div", x6, [
            Ls(Yn(v1), {
              value: s.value,
              name: "publish-options",
              onInput: p
            }, {
              default: mi(() => [
                (Ql(!0), cm(lm, null, p6(i.value, (_, w) => (Ql(), cm(lm, {
                  key: _.label
                }, [
                  Ls(Yn(uc), {
                    class: "pa-0 my-1",
                    label: _.label,
                    "input-value": _.value,
                    disabled: _.disabled
                  }, null, 8, ["label", "input-value", "disabled"]),
                  Jn("p", {
                    class: h6(["complementary ms-7 mt-0", l(w)]),
                    textContent: m6(_.details)
                  }, null, 10, b6)
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
const Tt = window.Vue.unref, Qn = window.Vue.createVNode, um = window.Vue.resolveDirective, dm = window.Vue.withDirectives, hi = window.Vue.openBlock, gm = window.Vue.createElementBlock, E6 = window.Vue.createCommentVNode, pm = window.Vue.toDisplayString, Zl = window.Vue.createElementVNode, ko = window.Vue.withCtx, mm = window.Vue.createBlock, L6 = window.Vue.Fragment, A6 = window.Vue.normalizeClass, D6 = { class: "sx-publisher__review-info__content" }, T6 = { key: 0 }, B6 = ["textContent"], P6 = ["textContent"], Pn = window.Vue.computed, hm = window.Vue.ref, F6 = window.Vue.watch, fm = window.Codex.CdxButton, ec = window.Codex.CdxIcon, M6 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = hm(0), o = hm(null);
    F6(o, () => {
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
    }), r = Pn(() => {
      switch (a.value) {
        case "warning":
          return Fh;
        case "error":
          return xb;
        default:
          return $b;
      }
    }), c = Pn(() => a.value === "default"), u = Pn(
      () => c.value ? "notice" : a.value
    ), d = Pn(
      () => `sx-publisher__review-info--${u.value}`
    ), i = pe(), l = Pn(() => {
      var h;
      return (h = s.value) == null ? void 0 : h.text;
    }), g = Pn(
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
      const _ = um("i18n"), w = um("i18n-html");
      return hi(), mm(Tt(H0), {
        type: u.value,
        class: A6(["sx-publisher__review-info ma-0 pa-4", d.value]),
        inline: c.value
      }, {
        icon: ko(() => [
          Qn(Tt(ec), {
            icon: r.value,
            class: "shrink mw-ui-message__icon items-start me-1"
          }, null, 8, ["icon"])
        ]),
        default: ko(() => [
          Zl("div", D6, [
            a.value === "default" ? dm((hi(), gm("h5", T6, null, 512)), [
              [_, void 0, "cx-sx-publisher-review-info"]
            ]) : (hi(), gm(L6, { key: 1 }, [
              Zl("h5", {
                textContent: pm(g.value)
              }, null, 8, B6),
              Zl("p", {
                textContent: pm(l.value)
              }, null, 8, P6),
              Qn(Tt(P), {
                justify: "between",
                class: "ma-0"
              }, {
                default: ko(() => [
                  dm(Qn(Tt(b), {
                    ref_key: "learnMoreContainer",
                    ref: o,
                    class: "sx-publisher__review-info__learn-more-anchor"
                  }, null, 512), [
                    [w, void 0, "cx-sx-publisher-review-info-learn-more"]
                  ]),
                  e.publishFeedbackMessages.length > 1 ? (hi(), mm(Tt(b), {
                    key: 0,
                    class: "sx-publisher__review-info__navigation-buttons justify-end",
                    align: "center"
                  }, {
                    default: ko(() => [
                      Qn(Tt(fm), {
                        weight: "quiet",
                        class: "pa-0 me-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                        onClick: p
                      }, {
                        default: ko(() => [
                          Qn(Tt(ec), { icon: Tt(Kc) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"]),
                      Qn(Tt(fm), {
                        weight: "quiet",
                        class: "pa-0 ms-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                        onClick: m
                      }, {
                        default: ko(() => [
                          Qn(Tt(ec), { icon: Tt(ta) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ]),
                    _: 1
                  })) : E6("", !0)
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
}, N6 = (e) => {
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
}, U6 = window.Vuex.useStore, I6 = window.Vue.computed, R6 = () => {
  const e = U6(), { currentTranslation: t } = Ft(), { currentMTProvider: n, previousRoute: o } = Le(e), { currentTargetPage: s } = rt(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: c,
    sectionURLParameter: u
  } = T(), { sourceSection: d } = oe(), i = it(), l = I6(() => {
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
    return n.value && (h.translation_provider = ne.getProviderForInstrumentation(n.value)), h.human_modification_rate = Xt.getMTScoreForPageSection(
      d.value,
      r.value
    ) / 100, h.human_modification_threshold = Xt.getMtModificationThreshold(), h;
  });
  return {
    logPublishAttemptEvent: () => i(me({
      event_type: "publish_attempt"
    }, l.value)),
    logPublishSuccessEvent: (h, f) => i(me({
      event_type: "publish_success",
      published_page_id: h,
      published_revision_id: f
    }, l.value)),
    logPublishFailureEvent: () => i(me({
      event_type: "publish_failure"
    }, l.value))
  };
}, wm = window.Vue.ref, z6 = window.Vuex.useStore, O6 = () => {
  const e = z6(), {
    pageURLParameter: t,
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = T(), { sourceSection: s, targetPageTitleForPublishing: a } = oe(), r = ff(), c = wm(!1), u = wm("pending"), d = () => c.value = !1, i = su(), {
    logPublishAttemptEvent: l,
    logPublishSuccessEvent: g,
    logPublishFailureEvent: p
  } = R6(), m = (f, _) => C(void 0, null, function* () {
    l();
    const w = yield i();
    if (w instanceof Ao)
      return p(), { publishFeedbackMessage: w, targetUrl: null };
    const y = w, x = a.value, S = e.getters["application/isSandboxTarget"], k = {
      html: N6(s.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: x,
      sourceSectionTitle: s.value.sourceSectionTitleForPublishing,
      targetSectionTitle: s.value.targetSectionTitleForPublishing,
      sourceLanguage: n.value,
      targetLanguage: o.value,
      revision: r.value,
      isSandbox: S,
      sectionTranslationId: y
    };
    f && (k.captchaId = f, k.captchaWord = _);
    const A = yield vt.publishTranslation(
      k
    );
    return A.publishFeedbackMessage === null ? g(A.pageId, A.revisionId) : p(), A;
  });
  return {
    closePublishDialog: d,
    doPublish: (f = null, _ = null) => C(void 0, null, function* () {
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
}, j6 = window.Vue.computed, H6 = () => {
  const e = Te(), { sourceSection: t } = oe(), { getCurrentTitleByLanguage: n } = Sn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = T(), a = j6(
    () => t.value.subSections.reduce(
      (r, c) => c.isTranslated ? `${r}<section rel="cx:Section" id="${c.targetSectionId}">${c.translatedContent}</section>` : r,
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
}, q6 = () => {
  const { targetLanguageURLParameter: e } = T(), { sourceSection: t } = oe();
  return () => {
    const n = Xt.getMTScoreForPageSection(
      t.value,
      e.value
    ), o = Xt.getScoreStatus(n);
    if (o === "success")
      return null;
    const s = 100 - n, a = o === "failure" ? "error" : "warning";
    let r, c;
    return a === "warning" ? (r = mw.message("cx-sx-publisher-mt-abuse-message-title", s).plain(), c = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (r = mw.message("cx-sx-publisher-mt-abuse-error-title", s).plain(), c = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new Ao({
      title: r,
      text: c,
      status: a,
      type: "mt"
    });
  };
}, G6 = window.Vue.ref, X6 = window.Vue.computed, W6 = () => {
  const e = q6(), t = G6([]), n = X6(
    () => t.value.some((r) => r.isError)
  );
  return {
    addPublishFeedbackMessage: (r) => {
      t.value.push(r), t.value.sort((c, u) => +u.isError - +c.isError);
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
}, K6 = window.Vuex.useStore, Y6 = () => {
  const e = K6(), { currentSourcePage: t } = rt(), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = T(), { sourceSection: s, targetPageTitleForPublishing: a } = oe();
  return (r) => C(void 0, null, function* () {
    const c = a.value, u = e.getters["application/isSandboxTarget"], d = t.value.title, i = new mw.Title(d), l = mw.config.get("wgNamespaceIds");
    if (s.value.isLeadSection && !u && i.getNamespaceId() !== l.user)
      try {
        yield Li.addWikibaseLink(
          n.value,
          o.value,
          d,
          c
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
}, _m = window.Vue.ref, J6 = () => {
  const e = _m(!1), t = _m(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const xe = window.Vue.unref, We = window.Vue.createVNode, Q6 = window.Vue.resolveDirective, Ds = window.Vue.createElementVNode, Z6 = window.Vue.withDirectives, $o = window.Vue.withCtx, e9 = window.Vue.openBlock, t9 = window.Vue.createElementBlock, n9 = { class: "sx-publisher" }, o9 = { class: "sx-publisher__publish-panel pa-4" }, s9 = { class: "mb-2" }, a9 = ["innerHTML"], i9 = { class: "sx-publisher__section-preview pa-5" }, r9 = ["innerHTML"], vm = window.Vue.computed, l9 = window.Vue.onMounted, c9 = window.Vue.ref, u9 = window.Vue.watch, d9 = window.Vuex.useStore, Sm = window.Codex.CdxButton, ym = window.Codex.CdxIcon, g9 = {
  __name: "SXPublisher",
  setup(e) {
    const t = d9(), { sourceSection: n } = oe(), o = vm(() => {
      var L;
      return (L = n.value) == null ? void 0 : L.title;
    }), s = pe(), a = vm(() => t.getters["application/isSandboxTarget"] ? s.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : n.value.isLeadSection ? s.i18n("cx-sx-publisher-publish-panel-lead-section-result") : s.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: r,
      captchaDialogOn: c,
      handleCaptchaError: u,
      onCaptchaDialogClose: d
    } = J6(), {
      publishFeedbackMessages: i,
      isPublishingDisabled: l,
      addPublishFeedbackMessage: g,
      clearPublishFeedbackMessages: p,
      initializePublishFeedbackMessages: m
    } = W6(), h = Y6(), { doPublish: f, isPublishDialogActive: _, publishStatus: w, closePublishDialog: y } = O6(), x = (L = null) => C(this, null, function* () {
      if (l.value)
        return;
      const B = yield f(L, r.value);
      if (!B)
        return;
      const { publishFeedbackMessage: J, targetUrl: U } = B;
      if (u(J)) {
        y();
        return;
      } else
        J && g(J);
      w.value = l.value ? "failure" : "success", setTimeout(() => {
        if (l.value) {
          y();
          return;
        }
        h(U);
      }, 1e3);
    });
    l9(() => m());
    const S = H6(), k = c9(!1), A = () => k.value = !0;
    return u9(k, (L) => {
      L || (p(), m());
    }), (L, B) => {
      const J = Q6("i18n");
      return e9(), t9("section", n9, [
        We(zT, {
          "is-publishing-disabled": xe(l),
          onPublishTranslation: x
        }, null, 8, ["is-publishing-disabled"]),
        Ds("div", o9, [
          Z6(Ds("h5", s9, null, 512), [
            [J, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          Ds("h6", {
            class: "mb-2",
            innerHTML: a.value
          }, null, 8, a9),
          We(xe(P), {
            justify: "end",
            class: "ma-0"
          }, {
            default: $o(() => [
              We(xe(b), { shrink: "" }, {
                default: $o(() => [
                  We(xe(Sm), {
                    weight: "quiet",
                    "aria-label": L.$i18n("cx-sx-publisher-configure-button-aria-label"),
                    onClick: A
                  }, {
                    default: $o(() => [
                      We(xe(ym), { icon: xe(Bb) }, null, 8, ["icon"])
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
        We(M6, { "publish-feedback-messages": xe(i) }, null, 8, ["publish-feedback-messages"]),
        Ds("section", i9, [
          We(xe(P), { class: "pb-5 ma-0" }, {
            default: $o(() => [
              We(xe(b), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                innerHTML: o.value
              }, null, 8, ["innerHTML"]),
              We(xe(b), { shrink: "" }, {
                default: $o(() => [
                  We(xe(Sm), {
                    weight: "quiet",
                    "aria-label": L.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: xe(S)
                  }, {
                    default: $o(() => [
                      We(xe(ym), { icon: xe(Gc) }, null, 8, ["icon"])
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
            innerHTML: xe(n).translationHtml
          }, null, 8, r9)
        ]),
        We(V6, {
          active: k.value,
          "onUpdate:active": B[0] || (B[0] = (U) => k.value = U)
        }, null, 8, ["active"]),
        We(u6, {
          active: xe(c),
          "captcha-details": xe(r),
          onClose: xe(d),
          onPublish: B[1] || (B[1] = (U) => x(U))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        We(YT, {
          active: xe(_),
          status: xe(w)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const p9 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: g9
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, m9 = window.Vue.resolveComponent, h9 = window.Vue.createVNode, f9 = window.Vue.normalizeClass, w9 = window.Vue.openBlock, _9 = window.Vue.createElementBlock;
function v9(e, t, n, o, s, a) {
  const r = m9("sx-publisher");
  return w9(), _9("main", {
    class: f9(["sx-publisher-view", a.classes])
  }, [
    h9(r)
  ], 2);
}
const S9 = /* @__PURE__ */ ae(p9, [["render", v9]]);
const Bt = window.Vue.unref, Fn = window.Vue.createVNode, Zn = window.Vue.withCtx, tc = window.Vue.toDisplayString, nc = window.Vue.createElementVNode, y9 = window.Vue.openBlock, x9 = window.Vue.createBlock, b9 = ["textContent"], C9 = ["textContent"], k9 = ["textContent"], Sf = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: Po,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (y9(), x9(Bt(P), {
      class: "cx-search-suggestion px-4 py-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: Bt(R.getDir)(e.suggestion.language)
    }, {
      default: Zn(() => [
        Fn(Bt(b), { shrink: "" }, {
          default: Zn(() => [
            Fn(Bt($c), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        Fn(Bt(b), { class: "ms-4" }, {
          default: Zn(() => [
            Fn(Bt(P), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: Zn(() => [
                Fn(Bt(b), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: Zn(() => [
                    nc("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: tc(e.suggestion.title)
                    }, null, 8, b9)
                  ]),
                  _: 1
                }),
                Fn(Bt(b), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: Zn(() => [
                    nc("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: tc(e.suggestion.description)
                    }, null, 8, C9)
                  ]),
                  _: 1
                }),
                Fn(Bt(b), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: Zn(() => [
                    Fn(Bt(Oe), {
                      icon: Bt(l0),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    nc("small", {
                      textContent: tc((e.suggestion.langLinksCount || 0) + 1)
                    }, null, 8, k9)
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
const Ts = window.Vue.unref, Bs = window.Vue.openBlock, oc = window.Vue.createBlock, $9 = window.Vue.createCommentVNode, V9 = window.Vue.resolveDirective, E9 = window.Vue.withDirectives, xm = window.Vue.createElementBlock, L9 = window.Vue.renderList, A9 = window.Vue.Fragment, D9 = window.Vue.normalizeClass, T9 = window.Vue.withCtx, B9 = {
  key: 1,
  class: "sx-article-search__empty-state"
}, bm = window.Vue.computed, P9 = window.Vue.ref, F9 = {
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
    const { sourceLanguageURLParameter: t } = T(), n = bm(() => R.getAutonym(t.value)), o = e, s = P9(null), a = (l) => s.value = l, r = () => s.value = null, c = (l) => {
      var g;
      return ((g = o.selectedItem) == null ? void 0 : g.title) === l.title && !s.value || s.value === l.pageId;
    }, u = bm(() => o.searchInput), { searchResultsLoading: d, searchResultsSlice: i } = Jc(
      t,
      u
    );
    return (l, g) => {
      const p = V9("i18n");
      return Bs(), oc(Ts(Ke), { class: "sx-article-search__results mb-0 pa-0" }, {
        default: T9(() => [
          Ts(d) ? (Bs(), oc(Ts(st), {
            key: 0,
            class: "sx-article-search__empty-state"
          })) : Ts(i).length === 0 ? E9((Bs(), xm("p", B9, null, 512)), [
            [p, [
              u.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : $9("", !0),
          (Bs(!0), xm(A9, null, L9(Ts(i), (m) => (Bs(), oc(Sf, {
            key: m.pageId,
            suggestion: m,
            class: D9({
              "sx-article-search__results-selected": c(m)
            }),
            onMouseenter: (h) => a(m.pageId),
            onMouseleave: r,
            onClick: (h) => l.$emit("suggestion-clicked", m)
          }, null, 8, ["suggestion", "class", "onMouseenter", "onClick"]))), 128))
        ]),
        _: 1
      });
    };
  }
};
const M9 = window.Vue.toDisplayString, N9 = window.Vue.createElementVNode, U9 = window.Vue.renderList, I9 = window.Vue.Fragment, sc = window.Vue.openBlock, R9 = window.Vue.createElementBlock, z9 = window.Vue.normalizeClass, Cm = window.Vue.createBlock, O9 = window.Vue.unref, km = window.Vue.withCtx, j9 = ["textContent"], H9 = window.Vue.ref, $m = {
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
    const n = e, o = H9(null), s = (c) => o.value = c, a = () => o.value = null, r = (c) => {
      var u;
      return ((u = n.selectedItem) == null ? void 0 : u.title) === c.title && !o.value || o.value === c.pageId;
    };
    return (c, u) => (sc(), Cm(O9(Ke), { class: "sx-article-search__suggestions pa-0" }, {
      header: km(() => [
        N9("h5", {
          class: "ma-0 px-4 pb-1 sx-article-search__suggestions-header",
          textContent: M9(e.cardTitle)
        }, null, 8, j9)
      ]),
      default: km(() => [
        (sc(!0), R9(I9, null, U9(e.suggestions, (d) => (sc(), Cm(Sf, {
          key: d.pageId,
          suggestion: d,
          class: z9({
            "sx-article-search__suggestions-selected": r(d)
          }),
          onMouseenter: (i) => s(d.pageId),
          onMouseleave: a,
          onClick: (i) => c.$emit("suggestion-clicked", d)
        }, null, 8, ["suggestion", "class", "onMouseenter", "onClick"]))), 128))
      ]),
      _: 1
    }));
  }
}, q9 = window.Vue.computed, G9 = (e, t) => q9(() => {
  const o = [], s = {
    value: "other",
    props: {
      icon: g0,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  };
  return t.value.includes(e.value) ? o.push(
    ...t.value.slice(0, 2 + 1)
  ) : o.push(
    e.value,
    ...t.value.slice(0, 2)
  ), [...o.filter(
    (r, c) => o.findIndex((u) => u === r) === c
  ).map((r) => ({
    value: r,
    props: {
      label: R.getAutonym(r),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), s];
}), X9 = window.Vue.computed, W9 = () => {
  const { supportedSourceLanguageCodes: e } = Js(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = T();
  return { getSuggestedSourceLanguages: (s) => X9(() => {
    const a = (navigator.language || "").split("-")[0], r = (mw.config.get("wgULSAcceptLanguageList") || navigator.languages || []).map((u) => u.split("-")[0]), c = [
      ...s.value,
      // User's current interface language
      mw.config.get("wgUserLanguage"),
      // Current wiki's content language
      mw.config.get("wgContentLanguage"),
      a,
      ...r
    ];
    return [...new Set(c)].filter(
      (u) => u !== n.value && e.value.includes(u)
    );
  }) };
};
const K9 = window.Vue.resolveDirective, Y9 = window.Vue.createElementVNode, ac = window.Vue.withDirectives, ge = window.Vue.unref, Ps = window.Vue.withCtx, qt = window.Vue.createVNode, Fs = window.Vue.openBlock, Vm = window.Vue.createBlock, J9 = window.Vue.createCommentVNode, ic = window.Vue.createElementBlock, Q9 = window.Vue.Fragment, Z9 = window.Vue.vShow, Ms = window.Vue.withModifiers, Ns = window.Vue.withKeys, eB = ["onKeydown"], tB = { class: "mb-0" }, nB = {
  key: 2,
  class: "sx-article-search__empty-state"
}, Vo = window.Vue.ref, oB = window.Vue.onMounted, sB = window.Vue.onBeforeUnmount, Us = window.Vue.computed, Em = window.Vue.watch, aB = window.Vue.inject, iB = window.Vuex.useStore, rB = window.Codex.CdxButton, lB = window.Codex.CdxIcon, cB = window.Codex.CdxSearchInput, uB = 3, dB = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = Vo(""), n = Vo(!1), o = Vo(null), s = Vo(!1), a = Vo([]), r = iB(), {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u
    } = T(), { supportedSourceLanguageCodes: d } = Js(), { searchResultsSlice: i } = Jc(c, t), { getSuggestedSourceLanguages: l } = W9(), g = l(a), p = G9(
      c,
      g
    ), m = Te(), { fetchAllTranslations: h } = Uo();
    oB(() => C(this, null, function* () {
      var N;
      h();
      try {
        a.value.push(
          ...JSON.parse(localStorage.getItem("cxPreviousLanguages"))
        ), y();
      } catch (j) {
      }
      (N = o.value) == null || N.focus(), window.addEventListener("beforeunload", x);
    })), sB(() => {
      window.removeEventListener("beforeunload", x), x();
    });
    const f = () => {
      m.push({ name: "dashboard" });
    }, _ = rh(), w = (N) => {
      _(N, u.value), a.value.includes(N) || y();
    }, y = () => {
      a.value = [
        c.value,
        ...a.value.filter((N) => N !== c.value)
      ];
    }, x = () => {
      mw.storage.set(
        "cxPreviousLanguages",
        JSON.stringify(a.value)
      );
    }, S = (N) => {
      if (N === "other") {
        s.value = !0;
        return;
      }
      w(N);
    };
    Em(
      c,
      () => {
        var N;
        r.dispatch("mediawiki/fetchNearbyPages"), (N = o.value) == null || N.focus();
      },
      { immediate: !0 }
    );
    const k = it();
    Em(t, () => {
      n.value || (n.value = !0, k({
        event_type: "dashboard_search",
        translation_source_language: c.value,
        translation_target_language: u.value
      }));
    });
    const A = () => {
      s.value = !1;
    }, L = (N) => {
      s.value = !1, S(N);
    }, { fetchPreviousEditsInSource: B, previousEditsInSource: J } = th(), U = Vo([]);
    (() => B().then(() => J.value.length > 0 ? no.fetchPages(
      c.value,
      J.value
    ) : []).then((N) => {
      N = N.slice(0, uB), N = N.sort(
        (j, v) => J.value.indexOf(j.title) - J.value.indexOf(v.title)
      ), U.value = N;
    }))();
    const Z = Us(() => r.getters["mediawiki/getNearbyPages"]), Ce = aB("breakpoints"), be = Us(() => Ce.value.mobile), lt = na(), Ae = Us(
      () => U.value && U.value.length
    ), M = Us(
      () => Z.value && Z.value.length
    ), { next: X, prev: le, keyboardNavigationContainer: ce, selectedItem: W } = Jh(t, i, U), se = (N) => lt(
      N.title,
      c.value,
      u.value,
      ke.value
    ), ke = Us(() => t.value ? "search_result" : Ae.value ? "suggestion_recent_edit" : M.value ? "suggestion_nearby" : "");
    return (N, j) => {
      const v = K9("i18n");
      return Fs(), ic("section", {
        ref_key: "keyboardNavigationContainer",
        ref: ce,
        class: "sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto",
        onKeydown: [
          j[5] || (j[5] = Ns(Ms((...V) => ge(X) && ge(X)(...V), ["stop", "prevent"]), ["tab"])),
          j[6] || (j[6] = Ns(Ms((...V) => ge(X) && ge(X)(...V), ["stop", "prevent"]), ["down"])),
          j[7] || (j[7] = Ns(Ms((...V) => ge(le) && ge(le)(...V), ["stop", "prevent"]), ["up"])),
          Ns(Ms(f, ["stop", "prevent"]), ["esc"]),
          j[8] || (j[8] = Ns(Ms((V) => se(ge(W)), ["stop", "prevent"]), ["enter"]))
        ]
      }, [
        qt(ge(P), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Ps(() => [
            qt(ge(b), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Ps(() => [
                ac(Y9("h5", tB, null, 512), [
                  [v, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            qt(ge(b), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Ps(() => [
                qt(ge(rB), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": N.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: f
                }, {
                  default: Ps(() => [
                    qt(ge(lB), { icon: ge(No) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        qt(ge(cB), {
          ref_key: "searchInputRef",
          ref: o,
          modelValue: t.value,
          "onUpdate:modelValue": j[0] || (j[0] = (V) => t.value = V),
          class: "sx-article-search__search-input",
          placeholder: N.$i18n("cx-sx-article-search-input-placeholder")
        }, null, 8, ["modelValue", "placeholder"]),
        qt(ge(Gs), {
          class: "sx-article-search__language-button-group",
          items: ge(p),
          active: ge(c),
          onSelect: S
        }, null, 8, ["items", "active"]),
        t.value ? J9("", !0) : (Fs(), ic(Q9, { key: 0 }, [
          Ae.value ? (Fs(), Vm($m, {
            key: 0,
            "card-title": N.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: U.value,
            "selected-item": ge(W),
            onSuggestionClicked: j[1] || (j[1] = (V) => se(V))
          }, null, 8, ["card-title", "suggestions", "selected-item"])) : M.value ? (Fs(), Vm($m, {
            key: 1,
            "card-title": N.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: Z.value,
            onSuggestionClicked: j[2] || (j[2] = (V) => se(V))
          }, null, 8, ["card-title", "suggestions"])) : ac((Fs(), ic("p", nB, null, 512)), [
            [v, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        ac(qt(F9, {
          "search-input": t.value,
          "selected-item": ge(W),
          onSuggestionClicked: j[3] || (j[3] = (V) => se(V))
        }, null, 8, ["search-input", "selected-item"]), [
          [Z9, !!t.value]
        ]),
        qt(ge(St), {
          value: s.value,
          "onUpdate:value": j[4] || (j[4] = (V) => s.value = V),
          class: "sx-article-search-language-selector",
          fullscreen: be.value,
          header: be.value,
          title: N.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: A
        }, {
          default: Ps(() => [
            qt(ge(Qh), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: ge(d),
              suggestions: ge(g),
              placeholder: N.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: L,
              onClose: A
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ], 40, eB);
    };
  }
};
const gB = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: dB
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.mobile })
  }
}, pB = window.Vue.resolveComponent, mB = window.Vue.createVNode, hB = window.Vue.normalizeClass, fB = window.Vue.openBlock, wB = window.Vue.createElementBlock;
function _B(e, t, n, o, s, a) {
  const r = pB("sx-article-search");
  return fB(), wB("main", {
    class: hB(["sx-article-search-view", a.classes])
  }, [
    mB(r)
  ], 2);
}
const vB = /* @__PURE__ */ ae(gB, [["render", _B]]), SB = () => {
  const e = na(), t = tu(), { logDashboardOpenEvent: n, getEventSource: o } = of(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r
  } = T();
  return () => C(void 0, null, function* () {
    return t(s.value, r.value).then(
      () => n()
    ), e(
      r.value,
      s.value,
      a.value,
      o(),
      null,
      !1
    );
  });
}, yB = window.Vuex.useStore, xB = [
  {
    path: "",
    name: "dashboard",
    component: Vg,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: vB,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: bV,
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: N3,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: ZE,
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
    component: MT,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: S9,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Vg,
    meta: { workflowStep: 0 }
  }
], au = Ox({
  history: zy(),
  routes: xB
}), rc = (e, t, n) => {
  e === t ? n() : n({ name: t });
}, bB = (e, t, n) => {
  let o = "cx_" + btoa(
    encodeURIComponent([n, e, t].join("_"))
  );
  return o = o.replace(/[()<>@,;\\[\]?={}]/g, ""), mw.cookie.get(o, "");
};
au.beforeEach((e, t, n) => {
  const o = yB();
  if (mw.user.isAnon() || Pm.assertUser().catch((i) => {
    i instanceof Bo && o.commit("application/setIsLoginDialogOn", !0);
  }), o.commit("application/setPreviousRoute", t.name), t.name) {
    n();
    return;
  }
  const s = SB(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: c,
    clearTranslationURLParameters: u
  } = T();
  if (!!(a.value && r.value && c.value)) {
    if (bB(
      a.value,
      r.value,
      c.value
    )) {
      const l = e.name === "sx-quick-tutorial" ? "sx-quick-tutorial" : "sx-sentence-selector";
      rc(e.name, l, n);
    } else
      e.name === "sx-translation-confirmer" && s(), rc(e.name, "sx-translation-confirmer", n);
    return;
  }
  u(), rc(e.name, "dashboard", n);
});
au.afterEach((e, t) => {
  if (!t.name)
    return;
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const CB = window.Vue.createApp, kB = mw.config.get("wgUserLanguage"), $B = "en", VB = mw.messages.values || {}, zo = CB(AS);
zo.use(au);
zo.use(cy);
zo.use(t_);
zo.use(e_);
const EB = P_({
  locale: kB,
  finalFallback: $B,
  messages: VB,
  wikilinks: !0
});
zo.use(EB);
zo.mount("#contenttranslation");
