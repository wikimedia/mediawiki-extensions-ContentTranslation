var Pf = Object.defineProperty, Ff = Object.defineProperties;
var Mf = Object.getOwnPropertyDescriptors;
var lu = Object.getOwnPropertySymbols;
var Nf = Object.prototype.hasOwnProperty, Uf = Object.prototype.propertyIsEnumerable;
var cu = (e, t, n) => t in e ? Pf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, fe = (e, t) => {
  for (var n in t || (t = {}))
    Nf.call(t, n) && cu(e, n, t[n]);
  if (lu)
    for (var n of lu(t))
      Uf.call(t, n) && cu(e, n, t[n]);
  return e;
}, at = (e, t) => Ff(e, Mf(t));
var C = (e, t, n) => new Promise((o, s) => {
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
const ne = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, If = {
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
}, Rf = window.Vue.toDisplayString, ji = window.Vue.openBlock, Hi = window.Vue.createElementBlock, zf = window.Vue.createCommentVNode, uu = window.Vue.createElementVNode, Of = window.Vue.normalizeClass, jf = ["width", "height", "aria-labelledby"], Hf = ["id"], qf = ["fill"], Gf = ["d"];
function Xf(e, t, n, o, s, a) {
  return ji(), Hi("span", {
    class: Of(["mw-ui-icon notranslate", a.classes])
  }, [
    (ji(), Hi("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...i) => a.handleClick && a.handleClick(...i))
    }, [
      n.iconName ? (ji(), Hi("title", {
        key: 0,
        id: n.iconName
      }, Rf(n.iconName), 9, Hf)) : zf("", !0),
      uu("g", { fill: n.iconColor }, [
        uu("path", { d: a.iconImagePath }, null, 8, Gf)
      ], 8, qf)
    ], 8, jf))
  ], 2);
}
const Re = /* @__PURE__ */ ne(If, [["render", Xf]]);
const Wf = {
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
}, Kf = window.Vue.renderSlot, Yf = window.Vue.resolveComponent, du = window.Vue.normalizeClass, ra = window.Vue.openBlock, qi = window.Vue.createBlock, Gi = window.Vue.createCommentVNode, Jf = window.Vue.toDisplayString, Qf = window.Vue.createElementBlock, Zf = window.Vue.toHandlerKey, ew = window.Vue.withModifiers, tw = window.Vue.mergeProps, nw = window.Vue.createElementVNode, ow = window.Vue.resolveDynamicComponent, sw = window.Vue.withCtx, aw = { class: "mw-ui-button__content" }, iw = ["textContent"];
function rw(e, t, n, o, s, a) {
  const i = Yf("mw-icon");
  return ra(), qi(ow(a.component), {
    class: du(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: sw(() => [
      Kf(e.$slots, "default", {}, () => [
        nw("span", aw, [
          n.icon ? (ra(), qi(i, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: du(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : Gi("", !0),
          !a.isIcon && n.label ? (ra(), Qf("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: Jf(n.label)
          }, null, 8, iw)) : Gi("", !0),
          n.indicator ? (ra(), qi(i, tw({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [Zf(a.indicatorClickEvent)]: t[0] || (t[0] = ew((c) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : Gi("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const Ne = /* @__PURE__ */ ne(Wf, [["render", rw]]);
const lw = {
  name: "MwButtonGroup",
  components: {
    MwButton: Ne
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
}, cw = window.Vue.renderList, uw = window.Vue.Fragment, Xi = window.Vue.openBlock, gu = window.Vue.createElementBlock, dw = window.Vue.resolveComponent, gw = window.Vue.withModifiers, pw = window.Vue.mergeProps, hw = window.Vue.createBlock, fw = { class: "row mw-ui-button-group ma-0 pa-0" };
function ww(e, t, n, o, s, a) {
  const i = dw("mw-button");
  return Xi(), gu("div", fw, [
    (Xi(!0), gu(uw, null, cw(n.items, (c) => (Xi(), hw(i, pw({
      key: c.value,
      value: c.value,
      "aria-selected": a.isActive(c) || null,
      ref_for: !0
    }, c.props, {
      class: ["ma-0", a.buttonClasses(c)],
      style: a.activeIndicatorStyle(c),
      onClick: gw((u) => e.$emit("select", c.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const Gs = /* @__PURE__ */ ne(lw, [["render", ww]]);
const _w = {
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
}, pu = window.Vue.renderSlot, vw = window.Vue.toDisplayString, mu = window.Vue.openBlock, hu = window.Vue.createElementBlock, Sw = window.Vue.createCommentVNode, yw = window.Vue.createElementVNode, bw = { class: "mw-ui-card" }, Cw = ["textContent"], kw = { class: "mw-ui-card__content" };
function xw(e, t, n, o, s, a) {
  return mu(), hu("div", bw, [
    pu(e.$slots, "header", {}, () => [
      n.title ? (mu(), hu("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: vw(n.title)
      }, null, 8, Cw)) : Sw("", !0)
    ]),
    yw("div", kw, [
      pu(e.$slots, "default")
    ])
  ]);
}
const Ze = /* @__PURE__ */ ne(_w, [["render", xw]]);
const $w = {}, Vw = window.Vue.openBlock, Ew = window.Vue.createElementBlock, Lw = { class: "mw-ui-divider row" };
function Aw(e, t) {
  return Vw(), Ew("div", Lw);
}
const Ci = /* @__PURE__ */ ne($w, [["render", Aw]]);
const Dw = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, Tw = window.Vue.renderSlot, Bw = window.Vue.resolveDynamicComponent, Pw = window.Vue.withCtx, Fw = window.Vue.openBlock, Mw = window.Vue.createBlock;
function Nw(e, t, n, o, s, a) {
  return Fw(), Mw(Bw(n.tag), { class: "mw-grid container" }, {
    default: Pw(() => [
      Tw(e.$slots, "default")
    ]),
    _: 3
  });
}
const Uw = /* @__PURE__ */ ne(Dw, [["render", Nw]]), Iw = {
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
}, Rw = window.Vue.renderSlot, zw = window.Vue.resolveDynamicComponent, Ow = window.Vue.normalizeClass, jw = window.Vue.withCtx, Hw = window.Vue.openBlock, qw = window.Vue.createBlock;
function Gw(e, t, n, o, s, a) {
  return Hw(), qw(zw(n.tag), {
    class: Ow(a.classes)
  }, {
    default: jw(() => [
      Rw(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const P = /* @__PURE__ */ ne(Iw, [["render", Gw]]), ac = ["mobile", "tablet", "desktop", "desktop-wide"], Xw = ac.reduce(
  (e, t) => at(fe({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), Ww = {
  name: "MwCol",
  props: at(fe({}, Xw), {
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
      for (let n = 0; n < ac.length; n++) {
        let o = ac[n], s = this.$props[o];
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
}, Kw = window.Vue.renderSlot, Yw = window.Vue.resolveDynamicComponent, Jw = window.Vue.normalizeClass, Qw = window.Vue.withCtx, Zw = window.Vue.openBlock, e0 = window.Vue.createBlock;
function t0(e, t, n, o, s, a) {
  return Zw(), e0(Yw(n.tag), {
    class: Jw(a.classes)
  }, {
    default: Qw(() => [
      Kw(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const b = /* @__PURE__ */ ne(Ww, [["render", t0]]), n0 = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", o0 = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", ki = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", s0 = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, a0 = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", $m = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", i0 = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", r0 = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", Xs = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", l0 = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", c0 = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", u0 = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", fu = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", d0 = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", Vm = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", g0 = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", p0 = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", m0 = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", h0 = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", f0 = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", w0 = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, _i = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, _0 = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, Em = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, v0 = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, Lm = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", S0 = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z";
const Wi = window.Vue.computed, y0 = window.Vue.watch, b0 = window.Vue.ref, C0 = window.Vue.nextTick, k0 = {
  name: "MwDialog",
  components: {
    MwButton: Ne,
    MwRow: P,
    MwCol: b,
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
    const n = b0(null), o = Wi(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = Wi(
      () => `mw-ui-dialog__overlay--${e.overlayMode}`
    ), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, i = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    y0(
      () => e.value,
      (u) => {
        u ? (i(), C0(() => {
          n.value.focus();
        })) : a();
      }
    );
    const c = Wi(() => ({
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
}, wu = window.Vue.normalizeClass, Ki = window.Vue.createElementVNode, Yi = window.Vue.renderSlot, la = window.Vue.resolveComponent, jo = window.Vue.createVNode, Ji = window.Vue.withCtx, _u = window.Vue.createCommentVNode, x0 = window.Vue.withKeys, vu = window.Vue.openBlock, $0 = window.Vue.createElementBlock, V0 = window.Vue.Transition, E0 = window.Vue.normalizeStyle, L0 = window.Vue.createBlock, A0 = { class: "mw-ui-dialog__shell items-stretch" }, D0 = { class: "mw-ui-dialog__body" };
function T0(e, t, n, o, s, a) {
  const i = la("mw-col"), c = la("mw-button"), u = la("mw-row"), d = la("mw-divider");
  return vu(), L0(V0, {
    name: "mw-ui-animation-fade",
    style: E0(o.cssVars)
  }, {
    default: Ji(() => [
      n.value ? (vu(), $0("div", {
        key: 0,
        ref: "root",
        class: wu(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = x0((r) => n.closeOnEscapeKey && o.close(), ["esc"]))
      }, [
        Ki("div", {
          class: wu(["mw-ui-dialog__overlay", o.overlayClass]),
          onClick: t[0] || (t[0] = (r) => !n.persistent && o.close())
        }, null, 2),
        Ki("div", A0, [
          n.header ? Yi(e.$slots, "header", { key: 0 }, () => [
            jo(u, { class: "mw-ui-dialog__header" }, {
              default: Ji(() => [
                jo(i, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                jo(i, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: Ji(() => [
                    jo(c, {
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
            jo(d)
          ]) : _u("", !0),
          Ki("div", D0, [
            Yi(e.$slots, "default")
          ]),
          Yi(e.$slots, "footer")
        ])
      ], 34)) : _u("", !0)
    ]),
    _: 3
  }, 8, ["style"]);
}
const ht = /* @__PURE__ */ ne(k0, [["render", T0]]);
const B0 = {
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
      const t = fe({}, e.$attrs);
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
}, Su = window.Vue.renderSlot, P0 = window.Vue.resolveComponent, ca = window.Vue.openBlock, Qi = window.Vue.createBlock, yu = window.Vue.createCommentVNode, F0 = window.Vue.resolveDynamicComponent, M0 = window.Vue.toDisplayString, N0 = window.Vue.mergeProps, U0 = window.Vue.withModifiers, I0 = window.Vue.createElementVNode, R0 = window.Vue.normalizeClass, z0 = window.Vue.createElementBlock, O0 = { class: "mw-ui-input__content" };
function j0(e, t, n, o, s, a) {
  const i = P0("mw-icon");
  return ca(), z0("div", {
    class: R0(a.classes),
    onClick: t[2] || (t[2] = (c) => a.focus())
  }, [
    I0("div", O0, [
      Su(e.$slots, "icon", {}, () => [
        n.icon ? (ca(), Qi(i, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : yu("", !0)
      ]),
      (ca(), Qi(F0(n.type === "textarea" ? n.type : "input"), N0({
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
        textContent: M0(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      Su(e.$slots, "indicator", {}, () => [
        n.indicator ? (ca(), Qi(i, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = U0((c) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : yu("", !0)
      ])
    ])
  ], 2);
}
const ic = /* @__PURE__ */ ne(B0, [["render", j0]]);
const H0 = {
  name: "MwMessage",
  components: { MwCol: b, MwRow: P, MwIcon: Re, MwButton: Ne },
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
      notice: w0,
      warning: Em,
      success: _i,
      error: _0
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
}, Zi = window.Vue.renderSlot, ua = window.Vue.resolveComponent, bu = window.Vue.createVNode, Cu = window.Vue.withCtx, ku = window.Vue.openBlock, xu = window.Vue.createBlock, $u = window.Vue.createCommentVNode, q0 = window.Vue.normalizeClass;
function G0(e, t, n, o, s, a) {
  const i = ua("mw-icon"), c = ua("mw-col"), u = ua("mw-button"), d = ua("mw-row");
  return e.shown ? (ku(), xu(d, {
    key: 0,
    class: q0([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: Cu(() => [
      Zi(e.$slots, "icon", {}, () => [
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
        default: Cu(() => [
          Zi(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id"]),
      Zi(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (ku(), xu(u, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : $u("", !0)
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : $u("", !0);
}
const X0 = /* @__PURE__ */ ne(H0, [["render", G0]]);
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
const W0 = {}, K0 = window.Vue.createElementVNode, Y0 = window.Vue.openBlock, J0 = window.Vue.createElementBlock, Q0 = { class: "mw-ui-spinner" }, Z0 = /* @__PURE__ */ K0("div", { class: "mw-ui-spinner__bounce" }, null, -1), e1 = [
  Z0
];
function t1(e, t) {
  return Y0(), J0("div", Q0, e1);
}
const et = /* @__PURE__ */ ne(W0, [["render", t1]]), gt = {
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
const n1 = window.Vue.computed, o1 = {
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
      default: Lm
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: gt.gray600
    },
    placeholderBackgroundColor: {
      type: String,
      default: gt.gray200
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = n1(() => {
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
}, Vu = window.Vue.normalizeStyle, Eu = window.Vue.openBlock, s1 = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const a1 = window.Vue.resolveComponent, i1 = window.Vue.createBlock;
function r1(e, t, n, o, s, a) {
  const i = a1("mw-ui-icon");
  return n.thumbnail ? (Eu(), s1("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Vu(o.style)
  }, null, 4)) : (Eu(), i1(i, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Vu(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const kc = /* @__PURE__ */ ne(o1, [["render", r1]]);
const l1 = {
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
}, c1 = window.Vue.vModelRadio, wi = window.Vue.createElementVNode, u1 = window.Vue.withDirectives, d1 = window.Vue.toDisplayString, g1 = window.Vue.resolveComponent, p1 = window.Vue.normalizeClass, m1 = window.Vue.withCtx, h1 = window.Vue.openBlock, f1 = window.Vue.createBlock, w1 = { class: "mw-ui-radio__controls" }, _1 = ["id", "disabled", "name", "value"], v1 = /* @__PURE__ */ wi("span", { class: "mw-ui-radio__controls__icon" }, null, -1), S1 = ["for", "textContent"];
function y1(e, t, n, o, s, a) {
  const i = g1("mw-row");
  return h1(), f1(i, {
    class: p1(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: m1(() => [
      wi("div", w1, [
        u1(wi("input", {
          id: n.id,
          "onUpdate:modelValue": t[0] || (t[0] = (c) => a.inputModel = c),
          type: "radio",
          disabled: n.disabled || null,
          name: n.name,
          value: n.inputValue
        }, null, 8, _1), [
          [c1, a.inputModel]
        ]),
        v1
      ]),
      wi("label", {
        for: n.id,
        class: "ps-2",
        textContent: d1(n.label)
      }, null, 8, S1)
    ]),
    _: 1
  }, 8, ["class"]);
}
const rc = /* @__PURE__ */ ne(l1, [["render", y1]]), Lu = window.Vue.h, b1 = {
  name: "MwRadioGroup",
  components: { MwRadio: rc },
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
      (o) => Lu(rc, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), Lu("div", { class: "mw-ui-radio-group" }, n);
  }
};
const C1 = {
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
}, Au = window.Vue.normalizeClass, Du = window.Vue.normalizeStyle, k1 = window.Vue.createElementVNode, x1 = window.Vue.openBlock, $1 = window.Vue.createElementBlock, V1 = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function E1(e, t, n, o, s, a) {
  return x1(), $1("div", {
    class: Au(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: Du(a.containerStyles)
  }, [
    k1("div", {
      class: Au(["mw-progress-bar__bar", a.barClass]),
      style: Du(a.barStyles)
    }, null, 6)
  ], 14, V1);
}
const Am = /* @__PURE__ */ ne(C1, [["render", E1]]), L1 = (e, t, n, o) => (s) => {
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
}, A1 = (e, t, n, o) => ({ initiateDrag: L1(
  e,
  t,
  n,
  o
) }), D1 = window.Vue.ref, Tu = window.Vue.computed, T1 = (e, t, n, o) => {
  const s = D1(0), a = Tu(
    () => t.value > e.value
  ), i = Tu(
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
const da = window.Vue.ref, B1 = window.Vue.onMounted, Bu = window.Vue.computed, P1 = window.Vue.nextTick, F1 = {
  name: "MwExpandableContent",
  components: {
    MwButton: Ne
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
    const t = da(!0), n = da(null), o = Bu(
      () => Math.min(e.minHeight, s.value)
    ), s = da(1), { initiateDrag: a } = A1(
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
    } = T1(o, s, n, t), l = () => d(u.value + 1), g = da(null), p = Bu(() => ({
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
    return B1(() => C(this, null, function* () {
      var f;
      yield P1(), s.value = n.value.scrollHeight, (f = g.value) == null || f.addEventListener(
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
      mwIconCollapse: v0,
      mwIconExpand: i0,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), d(0)), t.value = !t.value;
      },
      scrollable: c,
      scrollIndex: u,
      scrollToNextStep: l
    };
  }
}, M1 = window.Vue.renderSlot, N1 = window.Vue.normalizeClass, ga = window.Vue.createElementVNode, U1 = window.Vue.resolveComponent, I1 = window.Vue.createVNode, er = window.Vue.openBlock, R1 = window.Vue.createBlock, Pu = window.Vue.createCommentVNode, Fu = window.Vue.createElementBlock, z1 = window.Vue.normalizeStyle, O1 = { class: "mw-ui-expandable-content__container" }, j1 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, H1 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function q1(e, t, n, o, s, a) {
  const i = U1("mw-button");
  return er(), Fu("div", {
    class: "mw-ui-expandable-content",
    style: z1(o.cssVars)
  }, [
    ga("div", O1, [
      ga("div", {
        ref: "contentRef",
        class: N1(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        M1(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (er(), Fu("div", j1, [
        I1(i, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (er(), R1(i, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : Pu("", !0)
      ])) : Pu("", !0)
    ]),
    ga("div", H1, [
      ga("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...c) => o.onDragButtonClicked && o.onDragButtonClicked(...c))
      })
    ], 512)
  ], 4);
}
const G1 = /* @__PURE__ */ ne(F1, [["render", q1]]);
const pa = window.Vue.computed, X1 = {
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
      default: gt.blue600
    },
    inactiveColor: {
      type: String,
      default: gt.gray300
    },
    strokeWidth: {
      type: Number,
      default: 2
    }
  },
  setup(e) {
    const t = pa(() => e.size / 2 * 0.9), n = pa(() => Math.PI * (t.value * 2)), o = pa(
      () => (100 - e.percentage) / 100 * n.value
    ), s = pa(() => ({
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
}, Mu = window.Vue.createElementVNode, Nu = window.Vue.normalizeStyle, W1 = window.Vue.openBlock, K1 = window.Vue.createElementBlock, Y1 = ["width", "height", "viewport"], J1 = ["r", "cx", "cy", "stroke-dasharray"], Q1 = ["r", "cx", "cy", "stroke-dasharray"];
function Z1(e, t, n, o, s, a) {
  return W1(), K1("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: Nu(o.cssVars)
  }, [
    Mu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, J1),
    Mu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: Nu({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, Q1)
  ], 12, Y1);
}
const e_ = /* @__PURE__ */ ne(X1, [["render", Z1]]), t_ = window.Vue.ref, dn = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, wn = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${dn.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${dn.tablet}px) and (max-width: ${dn.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${dn.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${dn.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${dn["desktop-wide"] - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${dn.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${dn["desktop-wide"]}px)`
}, tr = {
  mobile: () => matchMedia(wn.mobile).matches,
  tablet: () => matchMedia(wn.tablet).matches,
  desktop: () => matchMedia(wn.desktop).matches,
  desktopwide: () => matchMedia(wn["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(wn["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(wn["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(wn["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(wn["desktop-and-down"]).matches
}, n_ = (e) => {
  const t = Object.values(dn);
  for (let n = 0; n < t.length; n++)
    if (e < t[n])
      return t[n];
  return null;
}, o_ = {
  install: (e) => {
    const t = t_({
      nextBreakpoint: null
    }), n = () => {
      const o = window.innerWidth;
      for (let s in tr)
        tr.hasOwnProperty(s) && (t.value[s] = tr[s]());
      t.value.nextBreakpoint = n_(o);
    };
    n(), window.addEventListener("resize", n), e.config.globalProperties.$mwui = at(fe({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: t.value
    }), e.provide("breakpoints", t);
  }
}, s_ = {
  install: (e) => {
    e.config.globalProperties.$mwui = at(fe({}, e.config.globalProperties.$mwui || {}), {
      colors: gt
    }), e.provide("colors", gt);
  }
};
class Po extends Error {
}
const a_ = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new Po();
}), Dm = { assertUser: a_ };
const i_ = window.Vue.resolveDirective, Ho = window.Vue.createElementVNode, Uu = window.Vue.withDirectives, r_ = window.Vue.toDisplayString, l_ = window.Vue.unref, Iu = window.Vue.withCtx, c_ = window.Vue.openBlock, u_ = window.Vue.createBlock, d_ = window.Vue.createCommentVNode, g_ = { class: "pa-4 sx-login-dialog__header" }, p_ = { class: "sx-login-dialog__body px-6 pb-4" }, m_ = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, h_ = ["href"], f_ = window.Vue.computed, w_ = window.Vue.ref, __ = window.Vuex.useStore, v_ = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = __(), n = f_(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = w_(mw.util.getUrl("Special:UserLogin"));
    return (a, i) => {
      const c = i_("i18n");
      return n.value ? (c_(), u_(l_(ht), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: Iu(() => [
          Ho("div", g_, [
            Uu(Ho("h4", null, null, 512), [
              [c, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: Iu(() => [
          Uu(Ho("div", p_, null, 512), [
            [c, void 0, "cx-sx-login-dialog-body"]
          ]),
          Ho("div", m_, [
            Ho("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, r_(a.$i18n("cx-sx-login-dialog-button-label")), 9, h_)
          ])
        ]),
        _: 1
      })) : d_("", !0);
    };
  }
}, K = new mw.cx.SiteMapper(), Tm = mw.util.getUrl, S_ = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
}, to = !mw.config.get("wgMFMode");
class xi {
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
const ma = "original", ha = "empty", y_ = {
  Elia: "Elia.eus",
  Google: "Google Translate",
  Yandex: "Yandex.Translate"
};
class te {
  /**
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string[]} providers
   */
  constructor(t, n, o = []) {
    this.sourceLanguage = t, this.targetLanguage = n, this.providers = [
      ...o,
      ma,
      ha
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return y_[t] || t;
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
    return ma;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return ha;
  }
  static isUserMTProvider(t) {
    return [ma, ha].includes(
      t
    );
  }
  static getProviderForInstrumentation(t) {
    return t === ha ? "blank" : t === ma ? "source" : t.toLowerCase();
  }
}
class Bn {
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = at(fe({}, a), {
      [te.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [te.EMPTY_TEXT_PROVIDER_KEY]: ""
    }), this.selected = i;
  }
  reset() {
    this.proposedTranslations = {
      [te.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalContent,
      [te.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedContent = "", this.mtProviderUsed = "", this.selected = !1;
  }
  /**
   * @return {string}
   */
  get originalContent() {
    return this.proposedTranslations[te.ORIGINAL_TEXT_PROVIDER_KEY];
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
const Ru = (e) => {
  var n;
  const t = vi(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, vi = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, Zn = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), Bm = (e) => {
  const t = vi(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = b_(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, b_ = (e) => {
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
}, Pm = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, Fm = (e) => {
  const t = Pm(e);
  return t == null ? void 0 : t.targetExists;
};
class nr {
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
class Qe {
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
      (a) => Zn(a)
    );
    s && Fm(s) && (this.blockTemplateAdaptationInfo[t] = Pm(s));
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
      (t) => Zn(t)
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
    return this.isBlockTemplate ? Ru(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => Zn(o));
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
    return n && Ru(n) || "";
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
      (a) => Zn(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new nr({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new nr({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new nr({
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
    if (!t || te.isUserMTProvider(t))
      return null;
    if (this.isBlockTemplate) {
      n.innerHTML = this.blockTemplateProposedTranslations[t];
      const o = Array.from(n.children).find(
        (s) => Zn(s)
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
const C_ = [
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
], k_ = (e, t, n) => {
  let o, s, a, i, c;
  return !e || !t ? 0 : e === t ? 1 : (s = i = zu(e, n), a = c = zu(t, n), c.length > i.length && (s = c, a = i), o = s.filter(function(u) {
    return a.indexOf(u) >= 0;
  }), o.length / s.length);
}, zu = function(e, t) {
  return e ? C_.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, Mm = 95, x_ = 85, $_ = [
  { status: "failure", value: 100 - Mm },
  { status: "warning", value: 100 - x_ },
  { status: "success", value: 100 }
], Nm = (e, t, n) => {
  const o = Ou(e).textContent, s = Ou(t).textContent, a = 100 - 100 * k_(s, o, n);
  return Math.ceil(a);
}, V_ = (e) => $_.find((t) => e <= t.value).status, E_ = (e, t) => Nm(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), L_ = () => (100 - Mm) / 100, Ou = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, Gt = {
  calculateScore: Nm,
  getScoreStatus: V_,
  getMTScoreForPageSection: E_,
  getMtModificationThreshold: L_
}, fa = "__LEAD_SECTION__";
class lc {
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
      [te.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [te.EMPTY_TEXT_PROVIDER_KEY]: ""
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
      [te.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalTitle,
      [te.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedTitle = "", this.subSections.forEach((t) => t.reset());
  }
  static get LEAD_SECTION_DUMMY_TITLE() {
    return fa;
  }
  static isSectionLead(t) {
    return !t || t === fa;
  }
  set originalTitle(t) {
    this.proposedTitleTranslations[te.ORIGINAL_TEXT_PROVIDER_KEY] = t;
  }
  /**
   * @return {string}
   */
  get originalTitle() {
    return this.proposedTitleTranslations[te.ORIGINAL_TEXT_PROVIDER_KEY];
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
    return n instanceof Qe ? n.transclusionNode.outerHTML : n instanceof Bn ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof Qe ? t.blockTemplateSelected = !1 : t instanceof Bn && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof Qe ? n.blockTemplateSelected = !0 : n instanceof Bn && (n.selected = !0);
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
    if (o instanceof Qe)
      return !!o.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (o instanceof Bn)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof Qe ? n.blockTemplateProposedTranslations[t] || "" : n instanceof Bn ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof Qe ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof Bn && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const o = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, s = Gt.getMTScoreForPageSection(this, t) / 100;
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
    return this.isLeadSection ? fa : this.originalTitle;
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
    return this.isLeadSection ? fa : this.title;
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
class xc extends xi {
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
    return lc.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? lc.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const Tt = "previous-edits", Xt = "popular", tt = "topic", Se = "collections", Dt = "automatic", pt = "seed", ju = window.Vue.ref, A_ = mw.loader.require("ext.cx.articletopics"), wa = {
  type: Dt,
  id: Tt
}, Um = () => {
  const e = ju(
    A_.flatMap((s) => s.topics).map((s) => s.topicId.toLowerCase())
  ), t = ju(!1);
  return { filtersValidatorError: t, validateFilters: ({ type: s, id: a }) => {
    t.value = !1;
    const i = s == null ? void 0 : s.toLowerCase(), c = a == null ? void 0 : a.toLowerCase();
    return i === tt ? e.value.some((u) => u === a) ? { type: i, id: c } : (t.value = !0, wa) : i === Se || i === pt ? { type: i, id: a } : c === Tt ? {
      type: Dt,
      id: Tt
    } : c === Xt ? {
      type: Dt,
      id: Xt
    } : c === Se ? {
      type: Dt,
      id: Se
    } : wa;
  }, isDefaultFilter: ({ type: s, id: a }) => s === wa.type && a === wa.id };
}, D_ = window.Vue.inject, T_ = window.Vue.reactive;
var B_ = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, Im = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(B_, function() {
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
                for (let I = 0; I < V.length; I++) {
                  const je = V[I]();
                  if (je !== null)
                    return je;
                }
                return null;
              };
            }
            function w(V) {
              const I = f, je = [];
              for (let Wt = 0; Wt < V.length; Wt++) {
                const Kt = V[Wt]();
                if (Kt === null)
                  return f = I, null;
                je.push(Kt);
              }
              return je;
            }
            function y(V, I) {
              return () => {
                const je = f, Wt = [];
                let Kt = I();
                for (; Kt !== null; )
                  Wt.push(Kt), Kt = I();
                return Wt.length < V ? (f = je, null) : Wt;
              };
            }
            function S(V) {
              const I = V.length;
              return () => {
                let je = null;
                return m.slice(f, f + I) === V && (je = V, f += I), je;
              };
            }
            function k(V) {
              return () => {
                const I = m.slice(f).match(V);
                return I === null ? null : (f += I[0].length, I[0]);
              };
            }
            const x = k(/^\s+/), L = S("|"), E = S(":"), T = S("\\"), U = k(/^./), M = S("$"), X = k(/^\d+/), G = S('"'), pe = S("'"), $e = k(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), ft = k(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), Ve = _([Ee, k(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function Ee() {
              const V = w([T, U]);
              return V === null ? null : V[1];
            }
            const Pt = _([Ee, ft]), Ie = _([Ee, $e]);
            function De() {
              const V = w([M, X]);
              return V === null ? null : ["REPLACE", parseInt(V[1], 10) - 1];
            }
            const oe = (O = k(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), H = function(V) {
              return V.toString();
            }, () => {
              const V = O();
              return V === null ? null : H(V);
            });
            var O, H;
            function de() {
              const V = w([L, y(0, sa)]);
              if (V === null)
                return null;
              const I = V[1];
              return I.length > 1 ? ["CONCAT"].concat(I) : I[0];
            }
            function W() {
              const V = w([oe, E, De]);
              return V === null ? null : [V[0], V[2]];
            }
            function v() {
              const V = w([oe, E, sa]);
              return V === null ? null : [V[0], V[2]];
            }
            function D() {
              const V = w([oe, E]);
              return V === null ? null : [V[0], ""];
            }
            const A = _([function() {
              const V = w([_([W, v, D]), y(0, de)]);
              return V === null ? null : V[0].concat(V[1]);
            }, function() {
              const V = w([oe, y(0, de)]);
              return V === null ? null : [V[0]].concat(V[1]);
            }]), F = S("{{"), j = S("}}"), se = S("[["), z = S("]]"), N = S("["), Q = S("]");
            function J() {
              const V = w([F, A, j]);
              return V === null ? null : V[1];
            }
            const Z = _([function() {
              const V = w([y(1, sa), L, y(1, oa)]);
              return V === null ? null : [["CONCAT"].concat(V[0]), ["CONCAT"].concat(V[2])];
            }, function() {
              const V = w([y(1, sa)]);
              return V === null ? null : [["CONCAT"].concat(V[0])];
            }]);
            function na() {
              let V = null;
              const I = w([se, Z, z]);
              if (I !== null) {
                const je = I[1];
                V = ["WIKILINK"].concat(je);
              }
              return V;
            }
            function Oe() {
              let V = null;
              const I = w([N, y(1, Ef), x, y(1, oa), Q]);
              return I !== null && (V = ["EXTLINK", I[1].length === 1 ? I[1][0] : ["CONCAT"].concat(I[1]), ["CONCAT"].concat(I[3])]), V;
            }
            const Ni = k(/^[A-Za-z]+/);
            function kf() {
              const V = k(/^[^"]*/), I = w([G, V, G]);
              return I === null ? null : I[1];
            }
            function xf() {
              const V = k(/^[^']*/), I = w([pe, V, pe]);
              return I === null ? null : I[1];
            }
            function $f() {
              const V = k(/^\s*=\s*/), I = w([x, Ni, V, _([kf, xf])]);
              return I === null ? null : [I[1], I[3]];
            }
            function Vf() {
              const V = y(0, $f)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], V);
            }
            const Ef = _([J, De, na, Oe, function() {
              const V = y(1, Ve)();
              return V === null ? null : V.join("");
            }]), oa = _([J, De, na, Oe, function() {
              let V = null;
              const I = f, je = S("<"), Wt = k(/^\/?/), Kt = k(/^\s*>/), Ui = w([je, Ni, Vf, Wt, Kt]);
              if (Ui === null)
                return null;
              const su = f, au = Ui[1], Ii = y(0, oa)(), Lf = f, iu = w([S("</"), Ni, Kt]);
              if (iu === null)
                return ["CONCAT", m.slice(I, su)].concat(Ii);
              const Af = f, Df = iu[1], ru = Ui[2];
              if (function(Nn, aa, Ri, zi = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((Nn = Nn.toLowerCase()) !== (aa = aa.toLowerCase()) || zi.allowedHtmlElements.indexOf(Nn) === -1)
                  return !1;
                const Tf = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let ia = 0, Bf = Ri.length; ia < Bf; ia += 2) {
                  const Oi = Ri[ia];
                  if (zi.allowedHtmlCommonAttributes.indexOf(Oi) === -1 && (zi.allowedHtmlAttributesByElement[Nn] || []).indexOf(Oi) === -1 || Oi === "style" && Ri[ia + 1].search(Tf) !== -1)
                    return !1;
                }
                return !0;
              }(au, Df, ru.slice(1)))
                V = ["HTMLELEMENT", au, ru].concat(Ii);
              else {
                const Nn = (aa) => aa.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                V = ["CONCAT", Nn(m.slice(I, su))].concat(Ii, Nn(m.slice(Lf, Af)));
              }
              return V;
            }, function() {
              const V = y(1, Ie)();
              return V === null ? null : V.join("");
            }]), sa = _([J, De, function() {
              const V = y(1, Pt)();
              return V === null ? null : V.join("");
            }]), ou = function() {
              const V = y(0, oa)();
              return V === null ? null : ["CONCAT"].concat(V);
            }();
            if (ou === null || f !== m.length)
              throw new Error("Parse error at position " + f.toString() + " in input: " + m);
            return ou;
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
})(Im);
var P_ = Im.exports;
const Hu = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, Rm = Symbol("banana-context");
function he() {
  const e = D_(Rm);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function F_(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = T_(new P_(e.locale, e));
  return {
    install: (n) => {
      n.provide(Rm, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: i } = Hu(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...i) : o.textContent = t.i18n(a, ...i);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: i } = Hu(s);
        o.innerHTML = t.i18n(a, ...i);
      });
    }
  };
}
const mn = window.Vue.ref, M_ = window.Vue.computed, $i = mn(null), Vi = mn(null), Ei = mn(null), Ws = mn(null), $c = mn(null), Li = mn(null), zm = mn(null), Om = mn(null), Vc = mn(null), { validateFilters: N_, filtersValidatorError: U_ } = Um(), jm = {
  from: $i,
  to: Vi,
  section: Ws,
  draft: $c,
  page: Ei,
  revision: Li,
  "active-list": Vc
}, I_ = M_(() => ({
  type: zm.value,
  id: Om.value
})), Hm = (e, t) => {
  zm.value = e, Om.value = t, Si("filter-type", e), t && Si("filter-id", t);
}, R_ = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  e instanceof xc && (n.draft = !0, n.revision = e.pageRevision, e.isLeadSectionTranslation || (n.section = e.sourceSectionTitle));
  for (const o in n) {
    const s = n[o];
    t.set(o, s), jm[o].value = s;
  }
  t.delete("title"), Ks(Object.fromEntries(t));
}, Ec = (e, t) => {
  jm[e].value = t, Si(e, t);
}, z_ = (e) => {
  Ec("section", e);
}, O_ = (e) => {
  Ec("page", e);
}, j_ = (e) => {
  Ec("active-list", e);
}, Ks = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    Tm(`Special:ContentTranslation${t}`, e)
  );
}, H_ = () => {
  const e = he(), t = new URLSearchParams(location.search);
  Ei.value = t.get("page"), $i.value = t.get("from"), Vi.value = t.get("to"), Ws.value = t.get("section"), Li.value = t.get("revision"), Vc.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
  const n = N_({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  Hm(n.type, n.id), U_.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, q_ = () => {
  const e = new URLSearchParams(location.search);
  Ws.value = null, e.delete("section"), e.delete("title"), Ks(Object.fromEntries(e));
}, Si = (e, t) => {
  const n = new URLSearchParams(location.search);
  t == null ? n.delete(e) : n.set(e, t), n.delete("title"), Ks(Object.fromEntries(n));
}, G_ = (e) => new URLSearchParams(location.search).get(e), X_ = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), $i.value = e, Vi.value = t, n.delete("title"), Ks(Object.fromEntries(n));
}, W_ = () => {
  const e = new URLSearchParams(location.search);
  Ei.value = null, Ws.value = null, $c.value = null, Li.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("revision"), e.delete("title"), Ks(Object.fromEntries(e));
}, K_ = () => new URLSearchParams(location.search).get("force-quick-tutorial"), B = () => ({
  isQuickTutorialForced: K_,
  setLanguageURLParams: X_,
  setSectionURLParam: z_,
  setTranslationURLParams: R_,
  initializeURLState: H_,
  clearTranslationURLParameters: W_,
  clearSectionURLParameter: q_,
  setUrlParam: Si,
  getUrlParam: G_,
  pageURLParameter: Ei,
  sourceLanguageURLParameter: $i,
  targetLanguageURLParameter: Vi,
  sectionURLParameter: Ws,
  draftURLParameter: $c,
  revisionURLParameter: Li,
  setPageURLParam: O_,
  currentSuggestionFilters: I_,
  setFilterURLParams: Hm,
  activeDashboardTabParameter: Vc,
  setActiveDashboardTabParameter: j_
}), Y_ = () => K.getLanguagePairs();
function J_(e, t) {
  return C(this, null, function* () {
    const n = K.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new te(e, t, o.mt)
      )
    );
  });
}
function Q_() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function Z_(e, t, n, o) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const s = mw.config.get("wgWikiID"), a = K.getWikiDomainCode(e), i = K.getWikiDomainCode(t), c = {
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
  fetchSupportedLanguageCodes: Y_,
  fetchSupportedMTProviders: J_,
  fetchCXServerToken: Q_,
  addWikibaseLink: Z_
}, Lc = window.Vue.ref, qu = Lc([]), Gu = Lc([]), Xu = Lc(!1);
function Ys() {
  return {
    fetchSupportedLanguageCodes: () => C(this, null, function* () {
      if (!Xu.value) {
        Xu.value = !0;
        const t = yield Ai.fetchSupportedLanguageCodes();
        qu.value = t.sourceLanguages, Gu.value = t.targetLanguages;
      }
    }),
    supportedSourceLanguageCodes: qu,
    supportedTargetLanguageCodes: Gu
  };
}
const ev = {
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
}, tv = {
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
}, nv = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], ov = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, sv = {
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
}, av = {
  languages: ev,
  scriptgroups: tv,
  rtlscripts: nv,
  regiongroups: ov,
  territories: sv
};
var Ue = av;
function Js(e) {
  return !!Ue.languages[e];
}
function Mn(e) {
  return Js(e) && Ue.languages[e].length === 1 ? Ue.languages[e][0] : !1;
}
function iv() {
  return Ue.languages;
}
function Qs(e) {
  var t = Mn(e);
  return t ? Qs(t) : Js(e) ? Ue.languages[e][0] : "Zyyy";
}
function Ac(e) {
  var t = Mn(e);
  return t ? Ac(t) : Js(e) && Ue.languages[e][1] || "UNKNOWN";
}
function Os(e) {
  var t = Mn(e);
  return t ? Os(t) : Js(e) && Ue.languages[e][2] || e;
}
function rv() {
  var e, t = {};
  for (e in Ue.languages)
    Mn(e) || (t[e] = Os(e));
  return t;
}
function qm(e) {
  var t, n, o = [];
  for (t in Ue.languages)
    if (!Mn(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === Qs(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function lv(e) {
  return qm([e]);
}
function Gm(e) {
  var t;
  for (t in Ue.scriptgroups)
    if (Ue.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function Dc(e) {
  return Gm(Qs(e));
}
function Xm(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = Mn(n) || n, a = Dc(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Wm(e) {
  var t, n, o, s = {};
  for (t in Ue.languages)
    if (!Mn(t)) {
      for (n = 0; n < e.length; n++)
        if (Ac(t).includes(e[n])) {
          o = Dc(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function cv(e) {
  return Wm([e]);
}
function uv(e) {
  var t, n, o, s = [];
  for (t = Xm(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function dv(e, t) {
  var n = Os(e) || e, o = Os(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function Km(e) {
  return Ue.rtlscripts.includes(Qs(e));
}
function gv(e) {
  return Km(e) ? "rtl" : "ltr";
}
function pv(e) {
  return Ue.territories[e] || [];
}
function mv(e, t) {
  t.target ? Ue.languages[e] = [t.target] : Ue.languages[e] = [t.script, t.regions, t.autonym];
}
var R = {
  addLanguage: mv,
  getAutonym: Os,
  getAutonyms: rv,
  getDir: gv,
  getGroupOfScript: Gm,
  getLanguages: iv,
  getLanguagesByScriptGroup: Xm,
  getLanguagesByScriptGroupInRegion: cv,
  getLanguagesByScriptGroupInRegions: Wm,
  getLanguagesInScript: lv,
  getLanguagesInScripts: qm,
  getLanguagesInTerritory: pv,
  getRegions: Ac,
  getScript: Qs,
  getScriptGroupOfLanguage: Dc,
  isKnown: Js,
  isRedirect: Mn,
  isRtl: Km,
  sortByScriptGroup: uv,
  sortByAutonym: dv
};
const oo = window.Vue.computed;
function ye(e) {
  const t = oo(() => e.state.application.sourceLanguage), n = oo(() => e.state.application.targetLanguage), o = oo(
    () => e.state.application.currentMTProvider
  ), s = oo(
    () => R.getAutonym(t.value)
  ), a = oo(
    () => R.getAutonym(n.value)
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
class Fo {
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
class hv {
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
function fv() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const wv = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), fv();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, _v = (e, t) => {
  let n, o;
  return t ? (n = wv(e), o = n.$element.find(
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
}, vv = (e, t) => {
  const n = Array.from(
    _v(e, t)
  );
  return Sv(n).map(
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
        (l) => new Qe({
          sentences: yv(l),
          node: l
        })
      ), r = !c;
      return new lc({ id: u, title: c, subSections: d, isLeadSection: r });
    }
  );
}, Sv = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, yv = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new Bn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), Ym = {
  convertSegmentedContentToPageSections: vv
}, Tc = 120, bv = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: Tc,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return K.getApi(e).get(n).then((s) => {
    const a = s.query.pages, c = (s.query.redirects || []).reduce(
      (r, l) => at(fe({}, r), { [l.to]: l.from }),
      {}
    ), d = (s.query.normalized || []).reduce(
      (r, l) => at(fe({}, r), {
        [l.to]: l.from
      }),
      {}
    );
    return a.map((r) => {
      const l = d[r.title] || c[r.title] || null;
      return new Fo(at(fe({}, r), { _alias: l }));
    });
  });
}, Cv = (e, t) => {
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
  return K.getApi(e).get(n).then((s) => {
    var u, d;
    const a = s.query.pages;
    if (!a || !a.length || (u = a[0]) != null && u.missing)
      return null;
    const i = [{ lang: e, title: t }, ...a[0].langlinks || []], c = (d = a[0].pageprops) == null ? void 0 : d.wikibase_item;
    return c ? Object.freeze(new hv(c, i)) : null;
  });
}, kv = (e, t, n) => {
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
  return K.getApi(e).get(o).then((a) => Object.values(a.query.pages).map((c) => {
    var u, d;
    return (d = (u = c.langlinks) == null ? void 0 : u[0]) == null ? void 0 : d["*"];
  }).filter((c) => !!c));
}, xv = (e, t, n, o = null) => Jm(
  e,
  t,
  n,
  o
).then(
  (s) => new Fo({
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
  const s = K.getWikiDomainCode(e), a = K.getWikiDomainCode(t), i = {
    $sourcelanguage: s,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let c = "/page/$sourcelanguage/$targetlanguage/$title";
  o && (i.$revision = o, c += "/$revision");
  const u = K.getCXServerUrl(
    c,
    i
  );
  return fetch(u).then((d) => d.json()).then((d) => d.segmentedContent);
}, $v = (e) => C(void 0, null, function* () {
  const t = S_();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: Tc,
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
  return yield K.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new Fo(s))).catch((o) => []);
}), Vv = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: Tc,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return K.getApi(t).get(o).then((s) => {
    var a;
    return ((a = s.query) == null ? void 0 : a.pages) || [];
  }).then(
    (s) => s.sort((a, i) => a.index - i.index).map(
      (a) => new Fo(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, no = {
  fetchPages: bv,
  fetchLanguageTitles: Cv,
  fetchPageContent: xv,
  fetchSegmentedContent: Jm,
  fetchNearbyPages: $v,
  searchPagesByTitlePrefix: Vv,
  fetchLanguageLinksForLanguage: kv
}, Ev = window.Vuex.useStore, Mo = () => {
  const e = Ev();
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
}, Lv = window.Vuex.useStore, Bc = () => {
  const e = Lv(), {
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
class No {
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
class eo {
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
], Av = [
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
], Dv = [
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
], Tv = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], Bv = [
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
], Pv = {
  en: Qm,
  es: Av,
  bn: Dv,
  fr: Tv,
  de: Bv
};
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
class Pc {
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
class Zm extends No {
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
    }), this.collection = new Pc(u);
  }
}
class eh extends eo {
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
    }), this.collection = new Pc(l);
  }
}
const Fv = Qm, hn = (n) => C(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
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
function Mv() {
  return C(this, null, function* () {
    const e = {}, t = "/page-collections";
    try {
      return ((yield hn({ urlPostfix: t, urlParams: e })) || []).map((o) => new Pc(o));
    } catch (n) {
      return mw.log.error(
        "Error while fetching the page collections from Recommendation API",
        n
      ), [];
    }
  });
}
function Nv(e, t, n, o = 24) {
  return C(this, null, function* () {
    return ((yield hn({ urlParams: {
      source: e,
      target: t,
      seed: n,
      count: o
    } })) || []).map(
      (i) => new No({
        sourceTitle: i.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: i.wikidata_id,
        langLinksCount: parseInt(i.sitelink_count)
      })
    );
  });
}
const Uv = (e, t) => C(void 0, null, function* () {
  return ((yield hn({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  } })) || []).map(
    (s) => new No({
      sourceTitle: s.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: s.wikidata_id,
      langLinksCount: parseInt(s.langlinks_count)
    })
  );
}), Iv = (e, t) => C(void 0, null, function* () {
  const s = (yield hn({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  }, urlPostfix: "/sections" })) || [];
  return s && s.map(
    (a) => new eo({
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
}), Rv = (e, t, n = null) => C(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  return n && (o.seed = n), ((yield hn({ urlParams: o })) || []).map(
    (a) => new Zm({
      sourceTitle: a.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: a.wikidata_id,
      langLinksCount: parseInt(a.langlinks_count),
      collection: a.collection
    })
  );
}), zv = (e, t, n = null) => C(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  n && (o.seed = n);
  const a = (yield hn({ urlPostfix: "/sections", urlParams: o })) || [];
  return a && a.map(
    (i) => new eh({
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
function Ov(e, t, n) {
  return C(this, null, function* () {
    const o = [t, e, n].map(
      (i) => encodeURIComponent(i)
    ), s = K.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (i) => i.ok ? i.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((i) => i == null ? void 0 : i.sections).catch((i) => null);
    return a ? new eo(a) : null;
  });
}
function jv(e, t, n) {
  return C(this, null, function* () {
    const a = (yield hn({ urlPostfix: "/sections", urlParams: {
      source: e,
      target: t,
      seed: n,
      count: 24
    } })) || [];
    return a && a.map(
      (i) => new eo({
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
function Hv(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    return ((yield hn({ urlParams: s })) || []).map(
      (i) => new No({
        sourceTitle: i.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: i.wikidata_id,
        langLinksCount: parseInt(i.sitelink_count)
      })
    );
  });
}
function qv(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    }, i = (yield hn({ urlPostfix: "/sections", urlParams: s })) || [];
    return i && i.map(
      (c) => new eo({
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
function Gv(e) {
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
    }, n = K.getApi(e);
    try {
      const a = (yield n.get(t)).query.usercontribs.map((i) => i.title);
      return [...new Set(a)];
    } catch (o) {
      return mw.log.error("Error while fetching suggestion seeds", o), [];
    }
  });
}
function Xv(e, t) {
  return C(this, null, function* () {
    const n = {
      action: "query",
      format: "json",
      list: "cxpublishedtranslations",
      from: e,
      to: t,
      limit: 200
    }, o = K.getApi(e);
    try {
      return (yield o.get(n)).result.translations.map((a) => a.sourceTitle);
    } catch (s) {
      return mw.log.error("Error while fetching suggestion seeds", s), [];
    }
  });
}
function Wv(e, t) {
  return C(this, null, function* () {
    const n = {
      action: "parse",
      format: "json",
      formatversion: 2,
      prop: "sections",
      page: t
    }, o = K.getApi(e);
    try {
      return (yield o.get(n)).parse;
    } catch (s) {
      return mw.log.error("Error while fetching suggestion sections size", s), [];
    }
  });
}
function Kv(e) {
  const t = Fv.map((o) => encodeURIComponent(o)).join("|"), n = K.getCXServerUrl(
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
const Yv = (e, t, n) => {
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
}, Jv = (e) => {
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
}, Qv = () => {
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
}, ue = {
  fetchFavorites: Qv,
  fetchPageSuggestions: Nv,
  fetchSectionSuggestion: Ov,
  fetchSectionSuggestions: jv,
  fetchSuggestionSeeds: Xv,
  fetchAppendixTargetSectionTitles: Kv,
  fetchSuggestionSourceSections: Wv,
  markFavorite: Yv,
  unmarkFavorite: Jv,
  fetchUserEdits: Gv,
  fetchMostPopularPageSuggestions: Uv,
  fetchMostPopularSectionSuggestions: Iv,
  fetchPageSuggestionsByTopics: Hv,
  fetchSectionSuggestionsByTopics: qv,
  fetchPageCollections: Mv,
  fetchPageSuggestionsByCollections: Rv,
  fetchSectionSuggestionsByCollections: zv
}, Zv = window.Vuex.useStore, Zs = () => {
  const e = Zv(), { sourceLanguage: t, targetLanguage: n } = ye(e), o = (c) => {
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
class eS {
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
const tS = window.Vuex.useStore, nS = window.Vue.computed, Di = window.Vue.ref, oS = Di([]), sS = Di([]);
let or = !1, sr = !1, Wu = !1, th = Di([]);
const _a = Di([]), aS = (e, t) => {
  th.value.push({
    sourceLanguage: e,
    targetLanguage: t
  });
};
let qo = null;
const va = {
  page: oS,
  section: sS
}, Fc = () => {
  const e = tS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), o = nS(
    () => th.value.some(
      (l) => l.sourceLanguage === t.value && l.targetLanguage === n.value
    )
  ), s = () => C(void 0, null, function* () {
    sr || (_a.value = yield ue.fetchUserEdits(t.value).then((l) => (sr = !0, l)));
  }), a = () => C(void 0, null, function* () {
    let l = e.getters["translator/getTranslationsByStatus"]("published");
    if (l = l.filter(
      (g) => g.sourceLanguage === t.value
    ), l.length && !or)
      return or = !0, l.map(
        (g) => g.sourceTitle
      );
    if (or = !0, !sr && (yield s(), _a.value.length > 0))
      return _a.value;
    if (!Wu) {
      const g = yield ue.fetchUserEdits(t.value).then((p) => (Wu = !0, p));
      if (g.length)
        return no.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          g
        );
    }
    return null;
  }), i = (l) => {
    let g = va[l].value.find(
      (p) => p.matchesLanguagePair(t.value, n.value)
    );
    return g || (g = new eS({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), va[l].value.push(g)), g;
  }, c = () => C(void 0, null, function* () {
    const l = yield ue.fetchSuggestionSeeds(
      t.value,
      n.value
    );
    for (const g in va) {
      const p = i(g);
      p.seeds = [...p.seeds, ...l || []];
    }
  }), u = () => C(void 0, null, function* () {
    let l = !1, g = [];
    do {
      g = yield a(), g || (l = !0);
      for (const p in va) {
        const m = i(p);
        m.seeds = [
          ...m.seeds,
          ...g || []
        ];
      }
    } while (!l && !(g != null && g.length));
  }), d = () => qo || (qo = u(), qo.finally(() => {
    qo = null;
  }));
  return {
    getSuggestionSeed: (l) => C(void 0, null, function* () {
      let g = i(l);
      g.seeds.length || (yield d());
      let p = g.shiftSeeds();
      return !p && !o.value && (yield c(), p = g.shiftSeeds(), aS(
        t.value,
        n.value
      )), p;
    }),
    defaultSeedsFetched: o,
    fetchPreviousEditsInSource: s,
    previousEditsInSource: _a
  };
}, iS = 5;
function Ao(e) {
  return C(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < iS);
  });
}
const rS = window.Vuex.useStore, lS = () => {
  const e = rS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), { getSuggestionSeed: o } = Fc(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = Zs(), c = {
    id: Tt,
    type: Dt
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (r) => C(void 0, null, function* () {
      const l = [];
      return yield Ao(() => C(void 0, null, function* () {
        const g = yield o("page");
        if (!g)
          return !0;
        let p = yield ue.fetchPageSuggestions(
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
    fetchSectionSuggestionsBasedOnEdits: (r) => C(void 0, null, function* () {
      const l = [];
      return yield Ao(() => C(void 0, null, function* () {
        const g = yield o("section");
        if (!g)
          return !0;
        const p = yield ue.fetchSectionSuggestions(
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
}, cS = window.Vuex.useStore, uS = () => {
  const e = cS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), o = {
    id: Xt,
    type: Dt
  }, {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = Zs();
  return { fetchSectionSuggestionsPopular: (d) => C(void 0, null, function* () {
    const r = [];
    return yield Ao(() => C(void 0, null, function* () {
      const l = yield ue.fetchMostPopularSectionSuggestions(
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
  }), fetchPageSuggestionsPopular: (d) => C(void 0, null, function* () {
    const r = [];
    return yield Ao(() => C(void 0, null, function* () {
      let l = yield ue.fetchMostPopularPageSuggestions(
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
}, nh = window.Vue.ref, ar = nh([]), Ku = nh(!1), Mc = () => ({ pageCollections: ar, fetchPageCollections: () => C(void 0, null, function* () {
  try {
    ar.value = yield ue.fetchPageCollections(), ar.value.sort((t, n) => t.name.localeCompare(n.name)), Ku.value = !0;
  } catch (t) {
    mw.log.error("Failed to fetch page collections", t);
  }
}), pageCollectionsFetched: Ku });
class cc {
  /**
   * @param {string} id
   * @param {string} label
   * @param {{ id: string, label: string, type: string }[]} filters
   */
  constructor({ id: t, label: n, filters: o }) {
    this.id = t, this.label = n, this.filters = o;
  }
}
const Sa = window.Vue.computed, Yu = mw.loader.require("ext.cx.articletopics"), dS = (e) => new cc({
  id: e.groupId,
  label: e.label,
  filters: e.topics.map((t) => ({
    id: t.topicId,
    label: t.label,
    type: tt
  }))
}), Nc = () => {
  const e = he(), { currentSuggestionFilters: t, setFilterURLParams: n } = B(), o = {
    id: Tt,
    type: Dt,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }, s = {
    id: Xt,
    type: Dt,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }, a = {
    id: Se,
    type: Dt,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }, { pageCollections: i, pageCollectionsFetched: c } = Mc(), u = Sa(() => {
    const w = new cc({
      id: Dt,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [o, s]
    });
    return i.value.length && w.filters.push(a), w;
  }), d = (w) => ({
    id: w.name,
    label: w.name,
    type: Se
  }), r = Sa(
    () => new cc({
      id: "collections",
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: i.value.map(
        (w) => d(w)
      )
    })
  ), l = Sa(() => {
    const w = [
      u.value,
      ...Yu.map(dS)
    ];
    return i.value.length && w.splice(1, 0, r.value), w;
  }), g = Sa(
    () => [t.value.type, t.value.id].includes(
      Se
    ) && !c.value
  ), p = () => {
    if (g.value)
      return [];
    const w = h();
    return w.type === tt || w.type === pt || w.type === Se || w.id === Se ? [w, o] : [o, s];
  }, m = (w) => {
    n(w.type, w.id);
  }, h = () => t.value.type === pt ? {
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
      const S = Yu.flatMap((k) => k.topics).find((k) => k.topicId === w);
      return S ? S.articletopics : [];
    },
    waitingForPageCollectionsFetch: g,
    findSelectedFilter: h
  };
}, gS = window.Vuex.useStore, pS = () => {
  const e = gS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = Zs(), { getArticleTopics: c } = Nc();
  return {
    fetchPageSuggestionsByTopics: (r) => C(void 0, null, function* () {
      const l = o.value.id, g = {
        id: l,
        type: tt
      }, p = c(l);
      let m = yield ue.fetchPageSuggestionsByTopics(
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
    fetchSectionSuggestionsByTopics: (r) => C(void 0, null, function* () {
      const l = o.value.id, g = {
        id: l,
        type: tt
      }, p = c(l), m = [];
      return yield Ao(() => C(void 0, null, function* () {
        const h = yield ue.fetchSectionSuggestionsByTopics(
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
}, mS = window.Vuex.useStore, hS = window.Vue.computed, fS = () => {
  const e = mS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), s = hS(() => {
    var r;
    return ((r = o.value) == null ? void 0 : r.type) !== Se ? null : o.value.id;
  }), {
    isSectionSuggestionValid: a,
    isPageSuggestionValid: i,
    sectionSuggestionExists: c
  } = Zs();
  return {
    fetchSectionSuggestionsByCollections: () => C(void 0, null, function* () {
      const r = [], l = yield ue.fetchSectionSuggestionsByCollections(
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
    fetchPageSuggestionsByCollections: () => C(void 0, null, function* () {
      const r = [];
      let l = yield ue.fetchPageSuggestionsByCollections(
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
}, wS = window.Vuex.useStore, _S = () => {
  const e = wS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = Zs();
  return {
    fetchPageSuggestionsBySeed: (d) => C(void 0, null, function* () {
      const r = o.value.id;
      let l = yield ue.fetchPageSuggestions(
        t.value,
        n.value,
        r
      );
      return l = l.filter(
        (g) => a(g)
      ), l = l.slice(0, d), l.forEach(
        (g) => g.suggestionProvider = {
          id: r,
          type: pt
        }
      ), l;
    }),
    fetchSectionSuggestionsBySeed: (d) => C(void 0, null, function* () {
      const r = [], l = o.value.id;
      return yield Ao(() => C(void 0, null, function* () {
        const g = yield ue.fetchSectionSuggestions(
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
          type: pt
        }
      ), r;
    })
  };
}, Uc = () => {
  const { currentSuggestionFilters: e } = B(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = lS(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = uS(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: i } = pS(), {
    fetchPageSuggestionsByCollections: c,
    fetchSectionSuggestionsByCollections: u
  } = fS(), { fetchPageSuggestionsBySeed: d, fetchSectionSuggestionsBySeed: r } = _S(), l = {
    [Tt]: t,
    [Xt]: o,
    [Se]: c,
    [tt]: a,
    [pt]: d
  }, g = {
    [Tt]: n,
    [Xt]: s,
    [Se]: u,
    [tt]: i,
    [pt]: r
  }, p = (f) => f.type === Dt ? f.id : f.type;
  return {
    getFilterProvider: p,
    getCurrentPageSuggestionProvider: () => l[p(e.value)],
    getCurrentSectionSuggestionProvider: () => g[p(e.value)]
  };
}, vS = window.Vuex.useStore, Ic = () => {
  const e = vS(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = Bc(), { sourceLanguageURLParameter: o } = B(), s = Mo(), a = () => {
    const g = t(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, i = () => {
    const g = n(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, {
    getCurrentPageSuggestionProvider: c,
    getCurrentSectionSuggestionProvider: u
  } = Uc(), d = (g) => {
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
      const g = i(), m = yield c()(
        g
      );
      m.forEach(
        (h) => e.commit("suggestions/addPageSuggestion", h)
      ), d(m), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, SS = window.Vuex.useStore, oh = () => {
  const e = SS();
  return (t) => C(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield ue.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, yS = window.Vuex.useStore, sh = () => {
  const e = yS(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = Ic(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = Bc(), { targetLanguageURLParameter: a } = B(), i = oh();
  return () => C(void 0, null, function* () {
    const c = s(0), u = o(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, r = c.length === d, l = u.length === d;
    r && l || (yield i(a.value), t(), n());
  });
}, bS = window.Vuex.useStore, ah = () => {
  const e = bS(), t = Mo();
  return (n, o, s) => C(void 0, null, function* () {
    let a = e.getters["suggestions/getSectionSuggestionsForArticle"](n, o, s);
    if (!a) {
      a = yield ue.fetchSectionSuggestion(
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
          return new No({
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
}, Ju = window.Vue.computed, CS = window.Vuex.useStore, fn = () => {
  const e = CS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = B(), s = Ju(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = Ju(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (c, u) => s.value.getTitleForLanguage(c) || s.value.getTitleForLanguage(u)
  };
}, ih = window.Vuex.useStore, { setLanguageURLParams: kS } = B(), Rc = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), kS(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, rh = () => {
  const e = ih(), t = sh();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = ye(e);
    n === o && (n = a.value, o = s.value), Rc(e, n, o), t();
  };
}, xS = () => {
  const e = ih(), t = ah(), { currentLanguageTitleGroup: n, targetPageExists: o } = fn(), s = Mo();
  return (a, i) => C(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u,
      setPageURLParam: d,
      clearSectionURLParameter: r
    } = B();
    a === i && (a = u.value, i = c.value);
    const l = n.value.getTitleForLanguage(a);
    Rc(e, a, i), d(l), o.value ? (r(), yield t(
      c.value,
      u.value,
      l
    )) : yield s(c.value, [l]);
  });
}, $S = window.Vuex.useStore, VS = window.Vue.ref, Qu = VS(!1), lh = () => {
  const e = $S(), {
    supportedSourceLanguageCodes: t,
    supportedTargetLanguageCodes: n,
    fetchSupportedLanguageCodes: o
  } = Ys(), { sourceLanguageURLParameter: s, targetLanguageURLParameter: a } = B(), i = () => {
    const u = K.getCurrentWikiLanguageCode(), d = (f) => t.value.includes(f), r = (f) => n.value.includes(f), l = {
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
  return { initializeApplicationLanguages: () => C(void 0, null, function* () {
    yield o();
    const { sourceLanguage: u, targetLanguage: d } = i();
    Rc(e, u, d), Qu.value = !0;
  }), applicationLanguagesInitialized: Qu };
};
const ES = window.Vue.resolveDynamicComponent, Zu = window.Vue.openBlock, ed = window.Vue.createBlock, LS = window.Vue.Transition, Go = window.Vue.withCtx, Xo = window.Vue.createVNode, AS = window.Vue.resolveComponent, ir = window.Vue.unref, DS = window.Vuex.useStore, td = window.Vue.computed, TS = window.Vue.onMounted, BS = window.Vue.inject, PS = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = B(), { initializeApplicationLanguages: n } = lh();
    t(), n();
    const o = BS("breakpoints"), s = td(() => o.value.mobile), a = DS(), i = td(
      () => a.state.application.autoSavePending
    );
    return TS(() => {
      window.addEventListener("beforeunload", (c) => {
        i.value && (c.preventDefault(), c.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (c) => {
        document.visibilityState === "visible" && Dm.assertUser().then(() => a.commit("application/setIsLoginDialogOn", !1)).catch((u) => {
          u instanceof Po && a.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (c, u) => {
      const d = AS("router-view");
      return Zu(), ed(ir(Uw), { id: "contenttranslation" }, {
        default: Go(() => [
          Xo(ir(P), { class: "cx-container" }, {
            default: Go(() => [
              Xo(ir(b), {
                class: "cx-container__wrapper-col",
                cols: "12"
              }, {
                default: Go(() => [
                  Xo(d, null, {
                    default: Go(({ Component: r, route: l }) => [
                      Xo(LS, {
                        name: s.value ? l.meta.transitionName : ""
                      }, {
                        default: Go(() => [
                          (Zu(), ed(ES(r)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      Xo(v_)
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
}, FS = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translatorStats: null
}, MS = {
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
class Do {
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
const nd = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => at(fe({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class NS {
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
    const t = nd((s = this.user) == null ? void 0 : s.content), n = nd((a = this.mt) == null ? void 0 : a.content);
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
class zc extends xi {
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
const Ti = mw.user.isAnon() ? void 0 : "user", uh = (e) => {
  if (e === "assertuserfailed")
    throw new Po();
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
      let i;
      if (e === "draft" ? i = a.map(
        (u) => new xc(at(fe({}, u), { status: e }))
      ) : i = a.map(
        (u) => new zc(at(fe({}, u), { status: e }))
      ), (c = s.continue) != null && c.offset) {
        const u = yield dh(
          e,
          s.continue.offset
        );
        i = i.concat(u);
      }
      return i;
    }));
  });
}
function US(e) {
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
      (a) => new NS(a)
    );
  });
}
function IS(e, t, n, o, s) {
  return C(this, null, function* () {
    if (!o)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== te.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const i = K.getCXServerUrl(a);
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
const RS = (e, t, n) => {
  const o = K.getApi(t);
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
}, zS = ({
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
    assert: Ti,
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
          publishFeedbackMessage: new Do({
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
      publishFeedbackMessage: new Do({
        text: f,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, OS = ({
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
    assert: Ti,
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
    uh(p);
    let h;
    return m.exception ? h = m.exception.message : m.error ? h = m.error.info : h = "Unknown error", new Do({ text: h, status: "error" });
  });
}, jS = (e) => {
  const t = {
    assert: Ti,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, HS = () => {
  const e = {
    assert: Ti,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new zc(n.cxcheckunreviewed.translation)
  );
}, qS = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, GS = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, XS = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), mt = {
  fetchTranslations: dh,
  fetchTranslationUnits: US,
  fetchSegmentTranslation: IS,
  parseTemplateWikitext: RS,
  publishTranslation: zS,
  saveTranslation: OS,
  deleteTranslation: qS,
  fetchTranslatorStats: XS,
  deleteCXTranslation: GS,
  splitTranslation: jS,
  checkUnreviewedTranslations: HS
};
function WS(t) {
  return C(this, arguments, function* ({ commit: e }) {
    const n = yield mt.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const KS = {
  fetchTranslatorStats: WS
}, YS = {
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
}, JS = {
  namespaced: !0,
  state: FS,
  getters: MS,
  actions: KS,
  mutations: YS
}, QS = {
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
  appendixSectionTitles: Pv
}, ZS = {
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
}, ey = {
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
}, ty = {
  namespaced: !0,
  state: QS,
  getters: ZS,
  actions: {},
  mutations: ey
}, ny = {
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
}, oy = {
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
  isValidProviderForTranslation: (e, t) => (n, o, s) => t.getSupportedMTProviders(n, o).includes(s) && s !== te.EMPTY_TEXT_PROVIDER_KEY,
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
function sy(o) {
  return C(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var i;
    const { sourceLanguage: s } = t.application;
    if ((i = n.nearbyPages[s]) != null && i.length)
      return;
    const a = yield no.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const ay = { fetchNearbyPages: sy }, iy = {
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
}, ry = {
  namespaced: !0,
  state: ny,
  getters: oy,
  actions: ay,
  mutations: iy
}, ly = {
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
  previousRoute: null,
  /**
   * Whether the dashboard banner has been dismissed by the user
   */
  bannerDismissed: !1
}, cy = {
  /**
   * Returns a boolean indicating whether the current publishing target
   * is the user's sandbox
   *
   * @param {object} state
   * @return {boolean}
   */
  isSandboxTarget: (e) => e.publishTarget === "SANDBOX_SECTION"
}, uy = {
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
    const { sourceLanguage: n, targetLanguage: o } = e, s = te.getStorageKey(
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
  },
  dismissBanner: (e) => {
    e.bannerDismissed = !0;
  }
}, dy = {
  namespaced: !0,
  state: ly,
  getters: cy,
  actions: {},
  mutations: uy
}, gy = window.Vuex.createStore, py = gy({
  modules: { translator: JS, suggestions: ty, mediawiki: ry, application: dy }
});
function my() {
  return gh().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function gh() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const hy = typeof Proxy == "function", fy = "devtools-plugin:setup", wy = "plugin:settings:set";
let so, uc;
function _y() {
  var e;
  return so !== void 0 || (typeof window != "undefined" && window.performance ? (so = !0, uc = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (so = !0, uc = global.perf_hooks.performance) : so = !1), so;
}
function vy() {
  return _y() ? uc.now() : Date.now();
}
class Sy {
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
        return vy();
      }
    }, n && n.on(wy, (i, c) => {
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
    return C(this, null, function* () {
      this.target = t;
      for (const n of this.onQueue)
        this.target.on[n.method](...n.args);
      for (const n of this.targetQueue)
        n.resolve(yield this.target[n.method](...n.args));
    });
  }
}
function yy(e, t) {
  const n = e, o = gh(), s = my(), a = hy && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(fy, e, t);
  else {
    const i = a ? new Sy(n, s) : null;
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
const ph = window.Vue.getCurrentInstance, To = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const qt = window.Vue.computed, Is = window.Vue.unref, by = window.Vue.watchEffect, mh = window.Vue.defineComponent, Cy = window.Vue.reactive, hh = window.Vue.h, rr = window.Vue.provide, ky = window.Vue.ref, fh = window.Vue.watch, xy = window.Vue.shallowRef, $y = window.Vue.shallowReactive, Vy = window.Vue.nextTick, pn = typeof window != "undefined";
function Ey(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const Y = Object.assign;
function lr(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = nt(s) ? s.map(e) : e(s);
  }
  return n;
}
const Rs = () => {
}, nt = Array.isArray;
function q(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Ly = /\/$/, Ay = (e) => e.replace(Ly, "");
function cr(e, t, n = "/") {
  let o, s = {}, a = "", i = "";
  const c = t.indexOf("#");
  let u = t.indexOf("?");
  return c < u && c >= 0 && (u = -1), u > -1 && (o = t.slice(0, u), a = t.slice(u + 1, c > -1 ? c : t.length), s = e(a)), c > -1 && (o = o || t.slice(0, c), i = t.slice(c, t.length)), o = By(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + i,
    path: o,
    query: s,
    hash: i
  };
}
function Dy(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function od(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function sd(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && Fn(t.matched[o], n.matched[s]) && wh(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Fn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function wh(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Ty(e[n], t[n]))
      return !1;
  return !0;
}
function Ty(e, t) {
  return nt(e) ? ad(e, t) : nt(t) ? ad(t, e) : e === t;
}
function ad(e, t) {
  return nt(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function By(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return q(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
function Py(e) {
  if (!e)
    if (pn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Ay(e);
}
const Fy = /^[^#]+#/;
function My(e, t) {
  return e.replace(Fy, "#") + t;
}
function Ny(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const Bi = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function Uy(e) {
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
    t = Ny(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function id(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const dc = /* @__PURE__ */ new Map();
function Iy(e, t) {
  dc.set(e, t);
}
function Ry(e) {
  const t = dc.get(e);
  return dc.delete(e), t;
}
let zy = () => location.protocol + "//" + location.host;
function _h(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let c = s.includes(e.slice(a)) ? e.slice(a).length : 1, u = s.slice(c);
    return u[0] !== "/" && (u = "/" + u), od(u, "");
  }
  return od(n, e) + o + s;
}
function Oy(e, t, n, o) {
  let s = [], a = [], i = null;
  const c = ({ state: g }) => {
    const p = _h(e, location), m = n.value, h = t.value;
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
    g.state && g.replaceState(Y({}, g.state, { scroll: Bi() }), "");
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
function rd(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Bi() : null
  };
}
function jy(e) {
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
  function a(u, d, r) {
    const l = e.indexOf("#"), g = l > -1 ? (n.host && document.querySelector("base") ? e : e.slice(l)) + u : zy() + e + u;
    try {
      t[r ? "replaceState" : "pushState"](d, "", g), s.value = d;
    } catch (p) {
      ({}).NODE_ENV !== "production" ? q("Error with push/replace State", p) : console.error(p), n[r ? "replace" : "assign"](g);
    }
  }
  function i(u, d) {
    const r = Y({}, t.state, rd(
      s.value.back,
      // keep back and forward entries but override current position
      u,
      s.value.forward,
      !0
    ), d, { position: s.value.position });
    a(u, r, !0), o.value = u;
  }
  function c(u, d) {
    const r = Y(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: u,
        scroll: Bi()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && q(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(r.current, r, !0);
    const l = Y({}, rd(o.value, u, null), { position: r.position + 1 }, d);
    a(u, l, !1), o.value = u;
  }
  return {
    location: o,
    state: s,
    push: c,
    replace: i
  };
}
function Hy(e) {
  e = Py(e);
  const t = jy(e), n = Oy(e, t.state, t.location, t.replace);
  function o(a, i = !0) {
    i || n.pauseListeners(), history.go(a);
  }
  const s = Y({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: My.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function qy(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && q(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), Hy(e);
}
function Gy(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function vh(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const _n = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, gc = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var ld;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(ld || (ld = {}));
const Xy = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${Ky(t)}" via a navigation guard.`;
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
function Bo(e, t) {
  return {}.NODE_ENV !== "production" ? Y(new Error(Xy[e](t)), {
    type: e,
    [gc]: !0
  }, t) : Y(new Error(), {
    type: e,
    [gc]: !0
  }, t);
}
function Yt(e, t) {
  return e instanceof Error && gc in e && (t == null || !!(e.type & t));
}
const Wy = ["params", "query", "hash"];
function Ky(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of Wy)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const cd = "[^/]+?", Yy = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Jy = /[.+*?^${}()[\]/\\]/g;
function Qy(e, t) {
  const n = Y({}, Yy, t), o = [];
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
        l || (s += "/"), s += g.value.replace(Jy, "\\$&"), p += 40;
      else if (g.type === 1) {
        const { value: m, repeatable: h, optional: f, regexp: _ } = g;
        a.push({
          name: m,
          repeatable: h,
          optional: f
        });
        const w = _ || cd;
        if (w !== cd) {
          p += 10;
          try {
            new RegExp(`(${w})`);
          } catch (S) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${w}): ` + S.message);
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
          if (nt(_) && !h)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const w = nt(_) ? _.join("/") : _;
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
function Zy(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function eb(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = Zy(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (ud(o))
      return 1;
    if (ud(s))
      return -1;
  }
  return s.length - o.length;
}
function ud(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const tb = {
  type: 0,
  value: ""
}, nb = /[a-zA-Z0-9_]/;
function ob(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[tb]];
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
        u === "(" ? n = 2 : nb.test(u) ? g() : (l(), n = 0, u !== "*" && u !== "?" && u !== "+" && c--);
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
function sb(e, t, n) {
  const o = Qy(ob(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const i of o.keys)
      a.has(i.name) && q(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(i.name);
  }
  const s = Y(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function ab(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = pd({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(r) {
    return o.get(r);
  }
  function a(r, l, g) {
    const p = !g, m = ib(r);
    ({}).NODE_ENV !== "production" && ub(m, l), m.aliasOf = g && g.record;
    const h = pd(t, r), f = [
      m
    ];
    if ("alias" in r) {
      const y = typeof r.alias == "string" ? [r.alias] : r.alias;
      for (const S of y)
        f.push(Y({}, m, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: g ? g.record.components : m.components,
          path: S,
          // we might be the child of an alias
          aliasOf: g ? g.record : m
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let _, w;
    for (const y of f) {
      const { path: S } = y;
      if (l && S[0] !== "/") {
        const k = l.record.path, x = k[k.length - 1] === "/" ? "" : "/";
        y.path = l.record.path + (S && x + S);
      }
      if ({}.NODE_ENV !== "production" && y.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (_ = sb(y, l, h), {}.NODE_ENV !== "production" && l && S[0] === "/" && db(_, l), g ? (g.alias.push(_), {}.NODE_ENV !== "production" && cb(g, _)) : (w = w || _, w !== _ && w.alias.push(_), p && r.name && !gd(_) && i(r.name)), m.children) {
        const k = m.children;
        for (let x = 0; x < k.length; x++)
          a(k[x], _, g && g.children[x]);
      }
      g = g || _, (_.record.components && Object.keys(_.record.components).length || _.record.name || _.record.redirect) && u(_);
    }
    return w ? () => {
      i(w);
    } : Rs;
  }
  function i(r) {
    if (vh(r)) {
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
    for (; l < n.length && eb(r, n[l]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (r.record.path !== n[l].record.path || !Sh(r, n[l])); )
      l++;
    n.splice(l, 0, r), r.record.name && !gd(r) && o.set(r.record.name, r);
  }
  function d(r, l) {
    let g, p = {}, m, h;
    if ("name" in r && r.name) {
      if (g = o.get(r.name), !g)
        throw Bo(1, {
          location: r
        });
      if ({}.NODE_ENV !== "production") {
        const w = Object.keys(r.params || {}).filter((y) => !g.keys.find((S) => S.name === y));
        w.length && q(`Discarded invalid param(s) "${w.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = g.record.name, p = Y(
        // paramsFromLocation is a new object
        dd(
          l.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((w) => !w.optional).map((w) => w.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        r.params && dd(r.params, g.keys.map((w) => w.name))
      ), m = g.stringify(p);
    } else if ("path" in r)
      m = r.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && q(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((w) => w.re.test(m)), g && (p = g.parse(m), h = g.record.name);
    else {
      if (g = l.name ? o.get(l.name) : n.find((w) => w.re.test(l.path)), !g)
        throw Bo(1, {
          location: r,
          currentLocation: l
        });
      h = g.record.name, p = Y({}, l.params, r.params), m = g.stringify(p);
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
      meta: lb(f)
    };
  }
  return e.forEach((r) => a(r)), { addRoute: a, resolve: d, removeRoute: i, getRoutes: c, getRecordMatcher: s };
}
function dd(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function ib(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: rb(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function rb(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function gd(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function lb(e) {
  return e.reduce((t, n) => Y(t, n.meta), {});
}
function pd(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function pc(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function cb(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(pc.bind(null, n)))
      return q(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(pc.bind(null, n)))
      return q(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function ub(e, t) {
  t && t.record.name && !e.name && !e.path && q(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function db(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(pc.bind(null, n)))
      return q(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Sh(e, t) {
  return t.children.some((n) => n === e || Sh(e, n));
}
const yh = /#/g, gb = /&/g, pb = /\//g, mb = /=/g, hb = /\?/g, bh = /\+/g, fb = /%5B/g, wb = /%5D/g, Ch = /%5E/g, _b = /%60/g, kh = /%7B/g, vb = /%7C/g, xh = /%7D/g, Sb = /%20/g;
function Oc(e) {
  return encodeURI("" + e).replace(vb, "|").replace(fb, "[").replace(wb, "]");
}
function yb(e) {
  return Oc(e).replace(kh, "{").replace(xh, "}").replace(Ch, "^");
}
function mc(e) {
  return Oc(e).replace(bh, "%2B").replace(Sb, "+").replace(yh, "%23").replace(gb, "%26").replace(_b, "`").replace(kh, "{").replace(xh, "}").replace(Ch, "^");
}
function bb(e) {
  return mc(e).replace(mb, "%3D");
}
function Cb(e) {
  return Oc(e).replace(yh, "%23").replace(hb, "%3F");
}
function kb(e) {
  return e == null ? "" : Cb(e).replace(pb, "%2F");
}
function Hs(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && q(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function xb(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(bh, " "), i = a.indexOf("="), c = Hs(i < 0 ? a : a.slice(0, i)), u = i < 0 ? null : Hs(a.slice(i + 1));
    if (c in t) {
      let d = t[c];
      nt(d) || (d = t[c] = [d]), d.push(u);
    } else
      t[c] = u;
  }
  return t;
}
function md(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = bb(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (nt(o) ? o.map((a) => a && mc(a)) : [o && mc(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function $b(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = nt(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const Vb = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), hd = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), Pi = Symbol({}.NODE_ENV !== "production" ? "router" : ""), $h = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), hc = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function Wo() {
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
function Pn(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((i, c) => {
    const u = (l) => {
      l === !1 ? c(Bo(4, {
        from: n,
        to: t
      })) : l instanceof Error ? c(l) : Gy(l) ? c(Bo(2, {
        from: t,
        to: l
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof l == "function" && a.push(l), i());
    }, d = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? Eb(u, t, n) : u);
    let r = Promise.resolve(d);
    if (e.length < 3 && (r = r.then(u)), {}.NODE_ENV !== "production" && e.length > 2) {
      const l = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof d == "object" && "then" in d)
        r = r.then((g) => u._called ? g : (q(l), Promise.reject(new Error("Invalid navigation guard"))));
      else if (d !== void 0 && !u._called) {
        q(l), c(new Error("Invalid navigation guard"));
        return;
      }
    }
    r.catch((l) => c(l));
  });
}
function Eb(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && q(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function ur(e, t, n, o) {
  const s = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && q(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const i in a.components) {
      let c = a.components[i];
      if ({}.NODE_ENV !== "production") {
        if (!c || typeof c != "object" && typeof c != "function")
          throw q(`Component "${i}" in record with path "${a.path}" is not a valid component. Received "${String(c)}".`), new Error("Invalid route component");
        if ("then" in c) {
          q(`Component "${i}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const u = c;
          c = () => u;
        } else
          c.__asyncLoader && // warn only once per component
          !c.__warnedDefineAsync && (c.__warnedDefineAsync = !0, q(`Component "${i}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[i]))
        if (Lb(c)) {
          const d = (c.__vccOpts || c)[t];
          d && s.push(Pn(d, n, o, a, i));
        } else {
          let u = c();
          ({}).NODE_ENV !== "production" && !("catch" in u) && (q(`Component "${i}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), u = Promise.resolve(u)), s.push(() => u.then((d) => {
            if (!d)
              return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${a.path}"`));
            const r = Ey(d) ? d.default : d;
            a.components[i] = r;
            const g = (r.__vccOpts || r)[t];
            return g && Pn(g, n, o, a, i)();
          }));
        }
    }
  }
  return s;
}
function Lb(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function fd(e) {
  const t = To(Pi), n = To($h), o = qt(() => t.resolve(Is(e.to))), s = qt(() => {
    const { matched: u } = o.value, { length: d } = u, r = u[d - 1], l = n.matched;
    if (!r || !l.length)
      return -1;
    const g = l.findIndex(Fn.bind(null, r));
    if (g > -1)
      return g;
    const p = wd(u[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      wd(r) === p && // avoid comparing the child with its parent
      l[l.length - 1].path !== p ? l.findIndex(Fn.bind(null, u[d - 2])) : g
    );
  }), a = qt(() => s.value > -1 && Bb(n.params, o.value.params)), i = qt(() => s.value > -1 && s.value === n.matched.length - 1 && wh(n.params, o.value.params));
  function c(u = {}) {
    return Tb(u) ? t[Is(e.replace) ? "replace" : "push"](
      Is(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Rs) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && pn) {
    const u = ph();
    if (u) {
      const d = {
        route: o.value,
        isActive: a.value,
        isExactActive: i.value
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(d), by(() => {
        d.route = o.value, d.isActive = a.value, d.isExactActive = i.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: qt(() => o.value.href),
    isActive: a,
    isExactActive: i,
    navigate: c
  };
}
const Ab = /* @__PURE__ */ mh({
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
  useLink: fd,
  setup(e, { slots: t }) {
    const n = Cy(fd(e)), { options: o } = To(Pi), s = qt(() => ({
      [_d(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [_d(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
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
}), Db = Ab;
function Tb(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Bb(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!nt(s) || s.length !== o.length || o.some((a, i) => a !== s[i]))
      return !1;
  }
  return !0;
}
function wd(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const _d = (e, t, n) => e != null ? e : t != null ? t : n, Pb = /* @__PURE__ */ mh({
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
    ({}).NODE_ENV !== "production" && Mb();
    const o = To(hc), s = qt(() => e.route || o.value), a = To(hd, 0), i = qt(() => {
      let d = Is(a);
      const { matched: r } = s.value;
      let l;
      for (; (l = r[d]) && !l.components; )
        d++;
      return d;
    }), c = qt(() => s.value.matched[i.value]);
    rr(hd, qt(() => i.value + 1)), rr(Vb, c), rr(hc, s);
    const u = ky();
    return fh(() => [u.value, c.value, e.name], ([d, r, l], [g, p, m]) => {
      r && (r.instances[l] = d, p && p !== r && d && d === g && (r.leaveGuards.size || (r.leaveGuards = p.leaveGuards), r.updateGuards.size || (r.updateGuards = p.updateGuards))), d && r && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !Fn(r, p) || !g) && (r.enterCallbacks[l] || []).forEach((h) => h(d));
    }, { flush: "post" }), () => {
      const d = s.value, r = e.name, l = c.value, g = l && l.components[r];
      if (!g)
        return vd(n.default, { Component: g, route: d });
      const p = l.props[r], m = p ? p === !0 ? d.params : typeof p == "function" ? p(d) : p : null, f = hh(g, Y({}, m, t, {
        onVnodeUnmounted: (_) => {
          _.component.isUnmounted && (l.instances[r] = null);
        },
        ref: u
      }));
      if ({}.NODE_ENV !== "production" && pn && f.ref) {
        const _ = {
          depth: i.value,
          name: l.name,
          path: l.path,
          meta: l.meta
        };
        (nt(f.ref) ? f.ref.map((y) => y.i) : [f.ref.i]).forEach((y) => {
          y.__vrv_devtools = _;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        vd(n.default, { Component: f, route: d }) || f
      );
    };
  }
});
function vd(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Fb = Pb;
function Mb() {
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
function Ko(e, t) {
  const n = Y({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => qb(o, ["instances", "children", "aliasOf"]))
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
let Nb = 0;
function Ub(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = Nb++;
  yy({
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
        value: Ko(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: r, componentInstance: l }) => {
      if (l.__vrv_devtools) {
        const g = l.__vrv_devtools;
        r.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Vh
        });
      }
      nt(l.__vrl_devtools) && (l.__devtoolsApi = s, l.__vrl_devtools.forEach((g) => {
        let p = Ah, m = "";
        g.isExactActive ? (p = Lh, m = "This is exactly active") : g.isActive && (p = Eh, m = "This link is active"), r.tags.push({
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
        guard: ya("beforeEach"),
        from: Ko(l, "Current Location during this navigation"),
        to: Ko(r, "Target location")
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
      }, p.status = ya("❌")) : p.status = ya("✅"), p.from = Ko(l, "Current Location during this navigation"), p.to = Ko(r, "Target location"), s.addTimelineEvent({
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
      l.forEach(Bh), r.filter && (l = l.filter((g) => (
        // save matches state based on the payload
        fc(g, r.filter.toLowerCase())
      ))), l.forEach((g) => Th(g, t.currentRoute.value)), r.rootNodes = l.map(Dh);
    }
    let d;
    s.on.getInspectorTree((r) => {
      d = r, r.app === e && r.inspectorId === c && u();
    }), s.on.getInspectorState((r) => {
      if (r.app === e && r.inspectorId === c) {
        const g = n.getRoutes().find((p) => p.record.__vd_id === r.nodeId);
        g && (r.state = {
          options: Rb(g)
        });
      }
    }), s.sendInspectorTree(c), s.sendInspectorState(c);
  });
}
function Ib(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function Rb(e) {
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
        display: e.keys.map((o) => `${o.name}${Ib(o)}`).join(" "),
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
const Vh = 15485081, Eh = 2450411, Lh = 8702998, zb = 2282478, Ah = 16486972, Ob = 6710886;
function Dh(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: zb
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
    backgroundColor: Ob
  });
  let o = n.__vd_id;
  return o == null && (o = String(jb++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(Dh)
  };
}
let jb = 0;
const Hb = /^\/(.*)\/([a-z]*)$/;
function Th(e, t) {
  const n = t.matched.length && Fn(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => Fn(o, e.record))), e.children.forEach((o) => Th(o, t));
}
function Bh(e) {
  e.__vd_match = !1, e.children.forEach(Bh);
}
function fc(e, t) {
  const n = String(e.re).match(Hb);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => fc(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = Hs(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => fc(i, t));
}
function qb(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function Gb(e) {
  const t = ab(e.routes, e), n = e.parseQuery || xb, o = e.stringifyQuery || md, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = Wo(), i = Wo(), c = Wo(), u = xy(_n);
  let d = _n;
  pn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const r = lr.bind(null, (v) => "" + v), l = lr.bind(null, kb), g = (
    // @ts-expect-error: intentionally avoid the type check
    lr.bind(null, Hs)
  );
  function p(v, D) {
    let A, F;
    return vh(v) ? (A = t.getRecordMatcher(v), F = D) : F = v, t.addRoute(F, A);
  }
  function m(v) {
    const D = t.getRecordMatcher(v);
    D ? t.removeRoute(D) : {}.NODE_ENV !== "production" && q(`Cannot remove non-existent route "${String(v)}"`);
  }
  function h() {
    return t.getRoutes().map((v) => v.record);
  }
  function f(v) {
    return !!t.getRecordMatcher(v);
  }
  function _(v, D) {
    if (D = Y({}, D || u.value), typeof v == "string") {
      const N = cr(n, v, D.path), Q = t.resolve({ path: N.path }, D), J = s.createHref(N.fullPath);
      return {}.NODE_ENV !== "production" && (J.startsWith("//") ? q(`Location "${v}" resolved to "${J}". A resolved location cannot start with multiple slashes.`) : Q.matched.length || q(`No match found for location with path "${v}"`)), Y(N, Q, {
        params: g(Q.params),
        hash: Hs(N.hash),
        redirectedFrom: void 0,
        href: J
      });
    }
    let A;
    if ("path" in v)
      ({}).NODE_ENV !== "production" && "params" in v && !("name" in v) && // @ts-expect-error: the type is never
      Object.keys(v.params).length && q(`Path "${v.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), A = Y({}, v, {
        path: cr(n, v.path, D.path).path
      });
    else {
      const N = Y({}, v.params);
      for (const Q in N)
        N[Q] == null && delete N[Q];
      A = Y({}, v, {
        params: l(N)
      }), D.params = l(D.params);
    }
    const F = t.resolve(A, D), j = v.hash || "";
    ({}).NODE_ENV !== "production" && j && !j.startsWith("#") && q(`A \`hash\` should always start with the character "#". Replace "${j}" with "#${j}".`), F.params = r(g(F.params));
    const se = Dy(o, Y({}, v, {
      hash: yb(j),
      path: F.path
    })), z = s.createHref(se);
    return {}.NODE_ENV !== "production" && (z.startsWith("//") ? q(`Location "${v}" resolved to "${z}". A resolved location cannot start with multiple slashes.`) : F.matched.length || q(`No match found for location with path "${"path" in v ? v.path : v}"`)), Y({
      fullPath: se,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: j,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === md ? $b(v.query) : v.query || {}
      )
    }, F, {
      redirectedFrom: void 0,
      href: z
    });
  }
  function w(v) {
    return typeof v == "string" ? cr(n, v, u.value.path) : Y({}, v);
  }
  function y(v, D) {
    if (d !== v)
      return Bo(8, {
        from: D,
        to: v
      });
  }
  function S(v) {
    return L(v);
  }
  function k(v) {
    return S(Y(w(v), { replace: !0 }));
  }
  function x(v) {
    const D = v.matched[v.matched.length - 1];
    if (D && D.redirect) {
      const { redirect: A } = D;
      let F = typeof A == "function" ? A(v) : A;
      if (typeof F == "string" && (F = F.includes("?") || F.includes("#") ? F = w(F) : (
        // force empty params
        { path: F }
      ), F.params = {}), {}.NODE_ENV !== "production" && !("path" in F) && !("name" in F))
        throw q(`Invalid redirect found:
${JSON.stringify(F, null, 2)}
 when navigating to "${v.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return Y({
        query: v.query,
        hash: v.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in F ? {} : v.params
      }, F);
    }
  }
  function L(v, D) {
    const A = d = _(v), F = u.value, j = v.state, se = v.force, z = v.replace === !0, N = x(A);
    if (N)
      return L(
        Y(w(N), {
          state: typeof N == "object" ? Y({}, j, N.state) : j,
          force: se,
          replace: z
        }),
        // keep original redirectedFrom if it exists
        D || A
      );
    const Q = A;
    Q.redirectedFrom = D;
    let J;
    return !se && sd(o, F, A) && (J = Bo(16, { to: Q, from: F }), De(
      F,
      F,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (J ? Promise.resolve(J) : U(Q, F)).catch((Z) => Yt(Z) ? (
      // navigation redirects still mark the router as ready
      Yt(
        Z,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? Z : Ie(Z)
    ) : (
      // reject any unknown error
      Ee(Z, Q, F)
    )).then((Z) => {
      if (Z) {
        if (Yt(
          Z,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          sd(o, _(Z.to), Q) && // and we have done it a couple of times
          D && // @ts-expect-error: added only in dev
          (D._count = D._count ? (
            // @ts-expect-error
            D._count + 1
          ) : 1) > 30 ? (q(`Detected a possibly infinite redirection in a navigation guard when going from "${F.fullPath}" to "${Q.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : L(
            // keep options
            Y({
              // preserve an existing replacement but allow the redirect to override it
              replace: z
            }, w(Z.to), {
              state: typeof Z.to == "object" ? Y({}, j, Z.to.state) : j,
              force: se
            }),
            // preserve the original redirectedFrom if any
            D || Q
          );
      } else
        Z = X(Q, F, !0, z, j);
      return M(Q, F, Z), Z;
    });
  }
  function E(v, D) {
    const A = y(v, D);
    return A ? Promise.reject(A) : Promise.resolve();
  }
  function T(v) {
    const D = H.values().next().value;
    return D && typeof D.runWithContext == "function" ? D.runWithContext(v) : v();
  }
  function U(v, D) {
    let A;
    const [F, j, se] = Xb(v, D);
    A = ur(F.reverse(), "beforeRouteLeave", v, D);
    for (const N of F)
      N.leaveGuards.forEach((Q) => {
        A.push(Pn(Q, v, D));
      });
    const z = E.bind(null, v, D);
    return A.push(z), W(A).then(() => {
      A = [];
      for (const N of a.list())
        A.push(Pn(N, v, D));
      return A.push(z), W(A);
    }).then(() => {
      A = ur(j, "beforeRouteUpdate", v, D);
      for (const N of j)
        N.updateGuards.forEach((Q) => {
          A.push(Pn(Q, v, D));
        });
      return A.push(z), W(A);
    }).then(() => {
      A = [];
      for (const N of se)
        if (N.beforeEnter)
          if (nt(N.beforeEnter))
            for (const Q of N.beforeEnter)
              A.push(Pn(Q, v, D));
          else
            A.push(Pn(N.beforeEnter, v, D));
      return A.push(z), W(A);
    }).then(() => (v.matched.forEach((N) => N.enterCallbacks = {}), A = ur(se, "beforeRouteEnter", v, D), A.push(z), W(A))).then(() => {
      A = [];
      for (const N of i.list())
        A.push(Pn(N, v, D));
      return A.push(z), W(A);
    }).catch((N) => Yt(
      N,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? N : Promise.reject(N));
  }
  function M(v, D, A) {
    c.list().forEach((F) => T(() => F(v, D, A)));
  }
  function X(v, D, A, F, j) {
    const se = y(v, D);
    if (se)
      return se;
    const z = D === _n, N = pn ? history.state : {};
    A && (F || z ? s.replace(v.fullPath, Y({
      scroll: z && N && N.scroll
    }, j)) : s.push(v.fullPath, j)), u.value = v, De(v, D, A, z), Ie();
  }
  let G;
  function pe() {
    G || (G = s.listen((v, D, A) => {
      if (!de.listening)
        return;
      const F = _(v), j = x(F);
      if (j) {
        L(Y(j, { replace: !0 }), F).catch(Rs);
        return;
      }
      d = F;
      const se = u.value;
      pn && Iy(id(se.fullPath, A.delta), Bi()), U(F, se).catch((z) => Yt(
        z,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? z : Yt(
        z,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (L(
        z.to,
        F
        // avoid an uncaught rejection, let push call triggerError
      ).then((N) => {
        Yt(
          N,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !A.delta && A.type === js.pop && s.go(-1, !1);
      }).catch(Rs), Promise.reject()) : (A.delta && s.go(-A.delta, !1), Ee(z, F, se))).then((z) => {
        z = z || X(
          // after navigation, all matched components are resolved
          F,
          se,
          !1
        ), z && (A.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Yt(
          z,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-A.delta, !1) : A.type === js.pop && Yt(
          z,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), M(F, se, z);
      }).catch(Rs);
    }));
  }
  let $e = Wo(), ft = Wo(), Ve;
  function Ee(v, D, A) {
    Ie(v);
    const F = ft.list();
    return F.length ? F.forEach((j) => j(v, D, A)) : ({}.NODE_ENV !== "production" && q("uncaught error during route navigation:"), console.error(v)), Promise.reject(v);
  }
  function Pt() {
    return Ve && u.value !== _n ? Promise.resolve() : new Promise((v, D) => {
      $e.add([v, D]);
    });
  }
  function Ie(v) {
    return Ve || (Ve = !v, pe(), $e.list().forEach(([D, A]) => v ? A(v) : D()), $e.reset()), v;
  }
  function De(v, D, A, F) {
    const { scrollBehavior: j } = e;
    if (!pn || !j)
      return Promise.resolve();
    const se = !A && Ry(id(v.fullPath, 0)) || (F || !A) && history.state && history.state.scroll || null;
    return Vy().then(() => j(v, D, se)).then((z) => z && Uy(z)).catch((z) => Ee(z, v, D));
  }
  const oe = (v) => s.go(v);
  let O;
  const H = /* @__PURE__ */ new Set(), de = {
    currentRoute: u,
    listening: !0,
    addRoute: p,
    removeRoute: m,
    hasRoute: f,
    getRoutes: h,
    resolve: _,
    options: e,
    push: S,
    replace: k,
    go: oe,
    back: () => oe(-1),
    forward: () => oe(1),
    beforeEach: a.add,
    beforeResolve: i.add,
    afterEach: c.add,
    onError: ft.add,
    isReady: Pt,
    install(v) {
      const D = this;
      v.component("RouterLink", Db), v.component("RouterView", Fb), v.config.globalProperties.$router = D, Object.defineProperty(v.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Is(u)
      }), pn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !O && u.value === _n && (O = !0, S(s.location).catch((j) => {
        ({}).NODE_ENV !== "production" && q("Unexpected error when starting the router:", j);
      }));
      const A = {};
      for (const j in _n)
        Object.defineProperty(A, j, {
          get: () => u.value[j],
          enumerable: !0
        });
      v.provide(Pi, D), v.provide($h, $y(A)), v.provide(hc, u);
      const F = v.unmount;
      H.add(v), v.unmount = function() {
        H.delete(v), H.size < 1 && (d = _n, G && G(), G = null, u.value = _n, O = !1, Ve = !1), F();
      }, {}.NODE_ENV !== "production" && pn && Ub(v, D, t);
    }
  };
  function W(v) {
    return v.reduce((D, A) => D.then(() => T(A)), Promise.resolve());
  }
  return de;
}
function Xb(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < a; i++) {
    const c = t.matched[i];
    c && (e.matched.find((d) => Fn(d, c)) ? o.push(c) : n.push(c));
    const u = e.matched[i];
    u && (t.matched.find((d) => Fn(d, u)) || s.push(u));
  }
  return [n, o, s];
}
function Ae() {
  return To(Pi);
}
const Wb = window.Vue.computed, Ph = () => {
  const { activeDashboardTabParameter: e } = B();
  return { desktopDashboardUrl: Wb(() => Tm("Special:ContentTranslation", {
    "cx-dashboard": "desktop"
  }) + `#${e.value}`) };
}, Kb = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', Yb = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', Jb = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', Qb = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', Zb = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', eC = '<path d="M10 1a9 9 0 109 9 9 9 0 00-9-9m5 10H5V9h10z"/>', tC = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', nC = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', oC = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', sC = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', aC = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', iC = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', rC = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', lC = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', cC = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', uC = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', dC = '<path d="M19 16 2 12a3.83 3.83 0 01-1-2.5A3.83 3.83 0 012 7l17-4z"/><rect width="4" height="8" x="4" y="9" rx="2"/>', gC = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', Fh = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', pC = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', mC = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"/>', hC = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', fC = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', wC = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', _C = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', vC = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', SC = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', yC = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', bC = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', CC = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', kC = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', xC = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20H4a2 2 0 01-2-2V5a2 2 0 012-2h9a2 2 0 012 2v13a2 2 0 01-2 2m-6.5-3.5.41-1.09L8 15l-1.09-.41-.41-1.09-.41 1.09L5 15l1.09.41zm2.982-.949.952-2.561 2.53-.964-2.53-.964L9.482 8.5l-.952 2.562-2.53.964 2.53.964zM6 10.5l.547-1.453L8 8.5l-1.453-.547L6 6.5l-.547 1.453L4 8.5l1.453.547z"/>', $C = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', VC = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', wc = Kb, Mh = Yb, Nh = {
  ltr: Jb,
  shouldFlip: !0
}, Uh = {
  ltr: Qb,
  shouldFlip: !0
}, qs = {
  ltr: Zb,
  shouldFlip: !0
}, EC = eC, Ih = tC, Rh = nC, zh = oC, LC = sC, AC = aC, Uo = iC, jc = rC, Hc = lC, Sd = cC, DC = uC, TC = {
  ltr: dC,
  shouldFlip: !0
}, Oh = gC, BC = {
  langCodeMap: {
    ar: Fh
  },
  default: pC
}, PC = {
  langCodeMap: {
    ar: Fh
  },
  default: mC
}, jh = hC, qc = {
  ltr: fC,
  shouldFlip: !0
}, FC = wC, ea = {
  ltr: _C,
  shouldFlip: !0
}, Gc = {
  ltr: vC,
  shouldFlip: !0
}, MC = {
  ltr: SC,
  shouldFlip: !0
}, Hh = yC, NC = bC, UC = CC, IC = kC, qh = {
  ltr: xC,
  shouldFlip: !0
}, RC = $C, Gh = VC;
const dr = window.Vue.unref, zC = window.Vue.resolveDirective, ao = window.Vue.createElementVNode, ba = window.Vue.withDirectives, OC = window.Vue.withCtx, jC = window.Vue.openBlock, HC = window.Vue.createBlock, qC = { class: "complementary" }, GC = { class: "complementary mt-4" }, XC = { class: "complementary" }, WC = ["href"], KC = window.Codex.CdxMessage, YC = "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation", JC = {
  __name: "CXDashboardBanner",
  setup(e) {
    const { desktopDashboardUrl: t } = Ph();
    return (n, o) => {
      const s = zC("i18n");
      return jC(), HC(dr(KC), {
        icon: dr(qh),
        class: "cx-dashboard-banner pa-4",
        "allow-user-dismiss": !0
      }, {
        default: OC(() => [
          ba(ao("h5", null, null, 512), [
            [s, void 0, "cx-sx-dashboard-banner-title"]
          ]),
          ba(ao("p", qC, null, 512), [
            [s, void 0, "cx-sx-dashboard-banner-description"]
          ]),
          ao("p", GC, [
            ba(ao("a", {
              target: "_blank",
              href: YC
            }, null, 512), [
              [s, void 0, "cx-sx-dashboard-banner-learn-more"]
            ])
          ]),
          ao("p", XC, [
            ba(ao("a", { href: dr(t) }, null, 8, WC), [
              [s, void 0, "cx-sx-dashboard-banner-access-previous"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["icon"]);
    };
  }
}, QC = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), i = parseInt(e.slice(12, 14)), c = new Date(Date.UTC(t, n, o, s, a, i)), d = (/* @__PURE__ */ new Date()).getTime() - c.getTime();
  return Math.round(d / (1e3 * 3600 * 24));
}, ZC = (e) => {
  const t = QC(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const wt = window.Vue.unref, io = window.Vue.createVNode, Jt = window.Vue.createElementVNode, yd = window.Vue.renderSlot, bd = window.Vue.withModifiers, gr = window.Vue.toDisplayString, pr = window.Vue.withCtx, ek = window.Vue.openBlock, tk = window.Vue.createElementBlock, nk = window.Vue.createCommentVNode, ok = { class: "col shrink pe-4" }, sk = { class: "col" }, ak = { class: "cx-translation__details column justify-between ma-0" }, ik = { class: "row ma-0" }, rk = { class: "col grow" }, lk = { class: "col shrink ps-2" }, ck = ["dir", "textContent"], uk = ["dir", "textContent"], dk = ["textContent"], gk = window.Vuex.useStore, pk = window.Vue.computed, Xh = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: xi,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e, { emit: t }) {
    const n = e, o = gk(), s = (c, u) => {
      const d = o.getters["mediawiki/getPage"](c, u);
      return d == null ? void 0 : d.thumbnail;
    }, a = he(), i = pk(() => {
      const c = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, u = ZC(n.translation.startTimestamp);
      return a.i18n(
        c[u.postfix],
        u.value
      );
    });
    return (c, u) => e.translation ? (ek(), tk("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: u[1] || (u[1] = bd((d) => c.$emit("click"), ["stop"]))
    }, [
      Jt("div", ok, [
        io(wt(kc), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      Jt("div", sk, [
        Jt("div", ak, [
          Jt("div", ik, [
            Jt("div", rk, [
              yd(c.$slots, "title")
            ]),
            Jt("div", lk, [
              io(wt(Re), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: u[0] || (u[0] = bd((d) => c.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          yd(c.$slots, "mid-content"),
          io(wt(P), { class: "cx-translation__footer ma-0" }, {
            default: pr(() => [
              io(wt(b), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: pr(() => [
                  Jt("span", {
                    class: "mw-ui-autonym",
                    dir: wt(R.getDir)(e.translation.sourceLanguage),
                    textContent: gr(wt(R.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, ck),
                  io(wt(Re), {
                    icon: wt(u0),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  Jt("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: wt(R.getDir)(e.translation.targetLanguage),
                    textContent: gr(wt(R.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, uk)
                ]),
                _: 1
              }),
              io(wt(b), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: pr(() => [
                  Jt("span", {
                    textContent: gr(i.value)
                  }, null, 8, dk)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : nk("", !0);
  }
};
const Yo = window.Vue.unref, Cd = window.Vue.toDisplayString, mk = window.Vue.normalizeClass, hk = window.Vue.createElementVNode, mr = window.Vue.openBlock, fk = window.Vue.createElementBlock, kd = window.Vue.createCommentVNode, xd = window.Vue.createVNode, Ca = window.Vue.withCtx, $d = window.Vue.createBlock, wk = ["lang", "textContent"], _k = ["lang", "textContent"], vk = window.Vue.computed, Sk = window.Vue.inject, yk = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: xc,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = Sk("colors").gray200, s = vk(
      () => {
        var u;
        return ((u = t.translation.progress) == null ? void 0 : u.any) * 100 || 0;
      }
    ), a = Ae(), { setTranslationURLParams: i } = B(), c = () => {
      i(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (u, d) => (mr(), $d(Xh, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": Yo($m),
      onActionIconClicked: d[0] || (d[0] = (r) => u.$emit("delete-translation")),
      onClick: c
    }, {
      title: Ca(() => [
        hk("h5", {
          class: mk(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: Cd(e.translation.sourceTitle)
        }, null, 10, wk),
        e.translation.isLeadSectionTranslation ? kd("", !0) : (mr(), fk("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: Cd(e.translation.sourceSectionTitle)
        }, null, 8, _k))
      ]),
      "mid-content": Ca(() => [
        e.translation.progress ? (mr(), $d(Yo(P), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Ca(() => [
            xd(Yo(b), null, {
              default: Ca(() => [
                xd(Yo(Am), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: Yo(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : kd("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, bk = window.Vuex.useStore, Wh = [], Ck = (e, t, n) => Wh.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), kk = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  Wh.push(o);
}, xk = () => {
  const e = bk();
  return (t, n, o) => C(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !Ck(t, n, o) && (s = yield ue.fetchSectionSuggestion(
      t,
      o,
      n
    ), kk(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, Kh = "cx-translation-session-position-", Yh = () => Kh + mw.user.sessionId(), Jh = () => {
  const e = Yh();
  let t = mw.storage.get(e);
  return t == null && (t = 0), parseInt(t);
}, $k = function() {
  const e = Jh();
  Object.keys(mw.storage.store).filter((n) => n.startsWith(Kh)).forEach((n) => mw.storage.remove(n));
  const t = Yh();
  mw.storage.set(t, e + 1);
};
let _c = null;
function Vk(e) {
  if (_c)
    return Promise.resolve(_c);
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
function Ek(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function Lk(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = mw.user.sessionId(), n = mw.config.get("wgDBname"), o = `cx_sx_${t}_${e.access_method}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), i = mw.user.getName(), c = Jh(), u = {
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
  ) : d = Vk(i).then((r) => {
    _c = r, mw.eventLog.submit(
      s,
      Object.assign({}, u, e, {
        user_global_edit_count: r,
        user_global_edit_count_bucket: Ek(r)
      })
    );
  }), d.then(() => {
    $k();
  });
}
const ot = () => (e) => (e.access_method || (e.access_method = to ? "desktop" : "mobile web"), Lk(e)), Qh = window.Vue.ref, Zh = Qh(null), vc = Qh(null), Ak = (e) => {
  Zh.value = e;
}, Dk = (e) => {
  vc.value = e;
}, Fi = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = B(), s = ot();
  return {
    logDashboardTranslationStartEvent: () => {
      const i = {
        event_type: "dashboard_translation_start",
        event_source: Zh.value,
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
      return vc.value && (i.event_context = vc.value), o.value ? (i.translation_source_section = o.value, i.translation_type = "section") : i.translation_type = "article", s(i);
    },
    setStartTranslationEventSource: Ak,
    setStartTranslationEventContext: Dk
  };
}, ta = () => {
  const e = Ae(), t = ah(), { setTranslationURLParams: n } = B(), { setStartTranslationEventSource: o, setStartTranslationEventContext: s } = Fi();
  return (a, i, c, u, d = null, r = !0) => C(void 0, null, function* () {
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
const ka = window.Vue.withModifiers, hr = window.Vue.toDisplayString, fr = window.Vue.createElementVNode, it = window.Vue.unref, xa = window.Vue.openBlock, Vd = window.Vue.createBlock;
window.Vue.createCommentVNode;
const vn = window.Vue.createVNode, Un = window.Vue.withCtx, Ed = window.Vue.createElementBlock, Tk = ["lang", "href", "textContent"], Bk = {
  key: 1,
  class: "flex"
}, Pk = { key: 2 }, Ld = window.Vue.computed, Ad = window.Vue.ref, wr = window.Codex.CdxButton, _r = window.Codex.CdxIcon, Fk = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: zc,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Ad(!0), o = Ad(null), s = Ld(() => {
      var l;
      return (l = o.value) == null ? void 0 : l.missingSections;
    }), a = Ld(
      () => s.value && Object.keys(s.value)[0]
    );
    xk()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((l) => o.value = l).catch((l) => console.log(l)).finally(() => n.value = !1), Ae();
    const { setSectionURLParam: c } = B(), u = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, d = ta(), r = (l) => {
      d(
        t.translation.sourceTitle,
        t.translation.sourceLanguage,
        t.translation.targetLanguage,
        "continue_published"
      ), l && c(l);
    };
    return (l, g) => (xa(), Vd(Xh, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: u
    }, {
      title: Un(() => [
        fr("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: g[0] || (g[0] = ka(() => {
          }, ["stop"])),
          textContent: hr(e.translation.sourceTitle)
        }, null, 8, Tk)
      ]),
      "mid-content": Un(() => [
        vn(it(P), { class: "ma-0" }, {
          default: Un(() => [
            vn(it(b), null, {
              default: Un(() => [
                n.value ? (xa(), Vd(it(et), { key: 0 })) : s.value ? (xa(), Ed("div", Bk, [
                  vn(it(wr), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: g[1] || (g[1] = ka((p) => r(a.value), ["stop"]))
                  }, {
                    default: Un(() => [
                      vn(it(_r), {
                        class: "me-1",
                        icon: it(wc)
                      }, null, 8, ["icon"]),
                      fr("span", null, hr(a.value), 1)
                    ]),
                    _: 1
                  }),
                  vn(it(wr), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": l.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: g[2] || (g[2] = ka((p) => r(null), ["stop"]))
                  }, {
                    default: Un(() => [
                      vn(it(_r), { icon: it(Hc) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : (xa(), Ed("div", Pk, [
                  vn(it(wr), {
                    class: "cx-published-translation__start-new-translation-button flex items-center pa-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: g[3] || (g[3] = ka((p) => r(null), ["stop"]))
                  }, {
                    default: Un(() => [
                      vn(it(_r), {
                        class: "me-1",
                        icon: it(wc)
                      }, null, 8, ["icon"]),
                      fr("span", null, hr(l.$i18n("sx-published-translation-new-translation-button-label")), 1)
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
}, Mk = window.Vuex.useStore, Nk = () => {
  const { commit: e } = Mk(), t = ot();
  return (n) => C(void 0, null, function* () {
    n.sectionTranslationId ? (yield mt.deleteTranslation(
      n.sectionTranslationId,
      n.translationId,
      n.sectionId
    )) && e(
      "translator/removeTranslationBySectionTranslationId",
      n.sectionTranslationId
    ) : (yield mt.deleteCXTranslation(
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
const Uk = window.Vue.resolveDirective, vr = window.Vue.createElementVNode, Ik = window.Vue.withDirectives, Sr = window.Vue.unref, Dd = window.Vue.createVNode, Td = window.Vue.withCtx, Rk = window.Vue.openBlock, zk = window.Vue.createBlock, Ok = { class: "pa-4" }, jk = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, Hk = {
  __name: "SXConfirmTranslationDeletionDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: xi,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "continue-translation",
    "discard-translation"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, s = () => o("update:modelValue", !1), a = Nk(), i = () => {
      a(n.translation), s();
    };
    return (c, u) => {
      const d = Uk("i18n");
      return Rk(), zk(Sr(ht), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: Td(() => [
          vr("div", jk, [
            Dd(Sr(Ne), {
              class: "grow py-3",
              large: "",
              label: c.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            Dd(Sr(Ne), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: c.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: i
            }, null, 8, ["label"])
          ])
        ]),
        default: Td(() => [
          vr("div", Ok, [
            Ik(vr("span", null, null, 512), [
              [d, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function qk(e, t, n) {
  return C(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield Gk(t, n)).filter((s) => e.includes(s)) : [];
  });
}
function Bd(e, t, n) {
  return C(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(R.sortByAutonym) : (yield qk(e, t, n)).sort(R.sortByAutonym);
  });
}
function Gk(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function Xk() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function Wk(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
const Kk = window.Vue.computed;
function Yk(e, t) {
  const n = Kk(() => {
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
const yr = window.Vue.ref, br = window.Vue.watch, Jk = window.Vue.computed;
function ef(e, t, n) {
  const o = yr(""), s = yr(-1), a = yr(null), i = () => {
    s.value++, s.value >= c.value.length && (s.value = 0);
  }, c = Jk(() => e.value ? t.value : n && n.value ? [...n.value, ...t.value] : []), u = () => {
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
  })), { next: i, prev: u, keyboardNavigationContainer: a, selectedItem: o };
}
function Xc(e, t, n) {
  let o;
  const s = (...a) => {
    const i = this, c = () => {
      o = null, n || e.apply(i, a);
    };
    n && !o && e.apply(i, a), (!o || t) && (clearTimeout(o), o = setTimeout(c, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const $a = window.Vue.renderSlot, be = window.Vue.unref, Qk = window.Vue.isRef, Pd = window.Vue.createVNode, Jo = window.Vue.withModifiers, Qo = window.Vue.withKeys, Sn = window.Vue.createElementVNode, Zk = window.Vue.resolveDirective, Va = window.Vue.withDirectives, Cr = window.Vue.renderList, kr = window.Vue.Fragment, Qt = window.Vue.openBlock, Zt = window.Vue.createElementBlock, Fd = window.Vue.toDisplayString, Ea = window.Vue.normalizeClass, xr = window.Vue.createCommentVNode, ex = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, tx = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, nx = { class: "results px-3 pt-4" }, ox = { class: "results-header ps-8 pb-2" }, sx = { class: "results-languages--suggestions pa-0 ma-0" }, ax = ["lang", "dir", "aria-selected", "onClick", "textContent"], ix = { class: "results px-3 pt-4" }, rx = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, lx = ["lang", "dir", "aria-selected", "onClick", "textContent"], cx = ["aria-selected"], ux = { class: "no-results px-3 py-4" }, dx = { class: "ps-8" }, La = window.Vue.ref, gx = window.Vue.watch, px = window.Vue.onMounted, Md = window.Vue.computed, tf = {
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
      default: Xk
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = La(null), a = La(""), i = La([]), c = La(n.suggestions), u = Md(
      () => Wk(i.value)
    ), d = Md(() => {
      const S = i.value.length;
      return S < 10 ? "few-results" : S < 30 ? "some-results" : "many-results";
    }), r = (S) => o("select", S), l = () => o("close"), { autocompletion: g, onTabSelect: p } = Yk(
      a,
      i
    ), { next: m, prev: h, keyboardNavigationContainer: f, selectedItem: _ } = ef(a, i, c), w = () => {
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
    return gx(a, Xc(() => C(this, null, function* () {
      i.value = yield Bd(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), px(() => C(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), i.value = yield Bd(
        n.languages,
        "",
        n.searchAPI
      );
    })), (S, k) => {
      const x = Zk("i18n");
      return Qt(), Zt("div", {
        ref_key: "keyboardNavigationContainer",
        ref: f,
        class: "mw-ui-language-selector"
      }, [
        $a(S.$slots, "search", {}, () => [
          Sn("div", ex, [
            Pd(be(ic), {
              value: be(g),
              "onUpdate:value": k[0] || (k[0] = (L) => Qk(g) ? g.value = L : null),
              icon: be(fu),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            Pd(be(ic), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": k[1] || (k[1] = (L) => a.value = L),
              class: "mw-ui-language-selector__search pa-4",
              icon: be(fu),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                Qo(Jo(w, ["prevent"]), ["enter"]),
                Qo(Jo(be(m), ["stop", "prevent"]), ["down"]),
                Qo(Jo(be(h), ["stop", "prevent"]), ["up"]),
                Qo(Jo(l, ["prevent"]), ["esc"]),
                Qo(Jo(be(p), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        Sn("section", tx, [
          e.suggestions.length && !a.value ? $a(S.$slots, "suggestions", { key: 0 }, () => [
            Sn("section", nx, [
              Va(Sn("p", ox, null, 512), [
                [x, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              Sn("ul", sx, [
                (Qt(!0), Zt(kr, null, Cr(e.suggestions, (L) => (Qt(), Zt("li", {
                  key: L,
                  class: Ea(["language ma-0", { "language--selected": L === be(_) }]),
                  lang: L,
                  dir: be(R.getDir)(L),
                  "aria-selected": L === be(_) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (E) => r(L),
                  textContent: Fd(be(R.getAutonym)(L))
                }, null, 10, ax))), 128))
              ])
            ])
          ]) : xr("", !0),
          u.value.length ? $a(S.$slots, "search", { key: 1 }, () => [
            Sn("section", ix, [
              e.suggestions.length && !a.value ? Va((Qt(), Zt("p", rx, null, 512)), [
                [x, void 0, "cx-sx-language-selector-all-languages"]
              ]) : xr("", !0),
              (Qt(!0), Zt(kr, null, Cr(u.value, (L, E) => (Qt(), Zt("ul", {
                key: E,
                class: Ea(["results-languages pa-0 ma-0 mb-6", d.value])
              }, [
                (Qt(!0), Zt(kr, null, Cr(L, (T) => (Qt(), Zt("li", {
                  key: T,
                  class: Ea(["language ma-0", { "language--selected": T === be(_) }]),
                  lang: T,
                  dir: be(R.getDir)(T),
                  role: "option",
                  "aria-selected": T === be(_) || null,
                  tabindex: "-1",
                  onClick: (U) => r(T),
                  textContent: Fd(be(R.getAutonym)(T))
                }, null, 10, lx))), 128)),
                e.allOptionEnabled && !a.value ? Va((Qt(), Zt("li", {
                  key: 0,
                  class: Ea(["language ma-0", { "language--selected": be(_) === "all" }]),
                  role: "option",
                  "aria-selected": be(_) === "all" || null,
                  tabindex: "-1",
                  onClick: k[2] || (k[2] = (T) => r("all"))
                }, null, 10, cx)), [
                  [x, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : xr("", !0)
              ], 2))), 128))
            ])
          ]) : $a(S.$slots, "noresults", { key: 2 }, () => [
            Sn("section", ux, [
              Va(Sn("h3", dx, null, 512), [
                [x, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const mx = window.Vue.resolveDirective, Nd = window.Vue.withDirectives, Zo = window.Vue.openBlock, es = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Ce = window.Vue.unref, Ud = window.Vue.toDisplayString, _t = window.Vue.createVNode, Id = window.Vue.withModifiers, In = window.Vue.withCtx, hx = window.Vue.normalizeClass, fx = {
  key: 0,
  class: "mw-ui-autonym"
}, wx = ["lang", "dir", "textContent"], _x = {
  key: 0,
  class: "mw-ui-autonym"
}, vx = ["lang", "dir", "textContent"], ts = window.Vue.computed, Sx = window.Vue.inject, yx = window.Vue.ref, Rd = window.Codex.CdxButton, $r = window.Codex.CdxIcon, yi = {
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
    const n = e, o = t, s = Sx("breakpoints"), a = ts(() => s.value.mobile), i = yx(null), c = ts(() => !!i.value), u = () => i.value = "source", d = () => i.value = "target", r = () => i.value = null, l = ts(() => {
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
    }, p = ts(
      () => n.selectedSourceLanguage === "all"
    ), m = ts(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, f) => {
      const _ = mx("i18n");
      return Zo(), es("div", {
        class: hx(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
      }, [
        _t(Ce(P), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: In(() => [
            _t(Ce(b), {
              class: "flex justify-end px-0",
              cols: a.value ? 5 : null
            }, {
              default: In(() => [
                _t(Ce(Rd), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  onClick: Id(u, ["stop"])
                }, {
                  default: In(() => [
                    p.value ? Nd((Zo(), es("span", fx, null, 512)), [
                      [_, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Zo(), es("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: Ce(R.getDir)(e.selectedSourceLanguage),
                      textContent: Ud(Ce(R.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, wx)),
                    _t(Ce($r), {
                      size: "x-small",
                      icon: Ce(Sd)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["cols"]),
            _t(Ce(b), {
              class: "sx-translation-list-language-selector__arrow flex justify-center px-0",
              cols: a.value ? 2 : null
            }, {
              default: In(() => [
                _t(Ce($r), { icon: Ce(Nh) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            _t(Ce(b), {
              class: "px-0",
              cols: a.value ? 5 : null
            }, {
              default: In(() => [
                _t(Ce(Rd), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.targetLanguages.length < 2,
                  onClick: Id(d, ["stop"])
                }, {
                  default: In(() => [
                    m.value ? Nd((Zo(), es("span", _x, null, 512)), [
                      [_, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Zo(), es("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: Ce(R.getDir)(e.selectedTargetLanguage),
                      textContent: Ud(Ce(R.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, vx)),
                    _t(Ce($r), {
                      size: "x-small",
                      icon: Ce(Sd)
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
        _t(Ce(ht), {
          value: c.value,
          "onUpdate:value": f[0] || (f[0] = (w) => c.value = w),
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-mode": "dark",
          onClose: r
        }, {
          default: In(() => [
            _t(Ce(tf), {
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
const zd = window.Vue.unref, bx = window.Vue.createVNode, Aa = window.Vue.createElementVNode, Od = window.Vue.toDisplayString, Cx = window.Vue.openBlock, kx = window.Vue.createElementBlock, xx = { class: "cx-list-empty-placeholder pa-4" }, $x = { class: "cx-list-empty-placeholder__icon-container" }, Vx = { class: "cx-list-empty-placeholder__icon" }, Ex = ["textContent"], Lx = ["textContent"], Ax = window.Codex.CdxIcon, nf = {
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
    return (t, n) => (Cx(), kx("div", xx, [
      Aa("div", $x, [
        Aa("div", Vx, [
          bx(zd(Ax), { icon: zd(jh) }, null, 8, ["icon"])
        ])
      ]),
      Aa("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: Od(e.title)
      }, null, 8, Ex),
      Aa("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: Od(e.description)
      }, null, 8, Lx)
    ]));
  }
}, Dx = window.Vuex.useStore, Tx = window.Vue.ref, Da = Tx({ draft: !1, published: !1 }), Io = () => {
  const e = Dx(), t = Mo(), n = (s) => C(void 0, null, function* () {
    let a = yield mt.fetchTranslations(s);
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
          new Fo({ title: l, pagelanguage: r })
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
const Bx = window.Vue.toDisplayString, Vr = window.Vue.normalizeClass, jd = window.Vue.createElementVNode, Ft = window.Vue.openBlock, ro = window.Vue.createBlock, Ta = window.Vue.createCommentVNode, Hd = window.Vue.unref, qd = window.Vue.renderList, Gd = window.Vue.Fragment, Ba = window.Vue.createElementBlock, Px = window.Vue.createVNode, Xd = window.Vue.withCtx, Fx = ["textContent"], Mx = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, Nx = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, Pa = window.Vue.ref, vt = window.Vue.computed, Ux = window.Vue.inject, Ix = window.Vuex.useStore, Wd = {
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
    const t = e, n = Pa("all"), o = Pa("all"), s = Ix(), { translationsFetched: a } = Io(), i = vt(
      () => a.value[t.translationStatus]
    ), c = Pa(!1), u = Pa(null), d = vt(
      () => t.translationStatus === "draft"
    ), r = vt(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), l = vt(
      () => n.value === "all"
    ), g = vt(
      () => o.value === "all"
    ), p = vt(
      () => r.value.filter(
        (k) => (l.value || k.sourceLanguage === n.value) && (g.value || k.targetLanguage === o.value)
      ).sort((k, x) => k.lastUpdatedTimestamp < x.lastUpdatedTimestamp)
    ), m = vt(() => {
      const k = r.value.map(
        (x) => x.targetLanguage
      );
      return [...new Set(k)];
    }), h = vt(() => {
      const k = r.value.map(
        (x) => x.sourceLanguage
      );
      return [...new Set(k)];
    }), f = (k) => {
      u.value = k, c.value = !0;
    }, _ = vt(() => t.activeStatus === t.translationStatus), w = Ux("breakpoints"), y = vt(() => w.value.mobile), S = vt(
      () => y.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (k, x) => _.value ? (Ft(), ro(Hd(Ze), {
      key: 0,
      class: Vr(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: Xd(() => [
        jd("div", {
          class: Vr(["cx-translation-list__header", S.value])
        }, [
          jd("h3", {
            class: Vr(["px-4 mw-ui-card__title mb-0", { "pb-4": y.value }]),
            textContent: Bx(k.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, Fx),
          p.value.length ? (Ft(), ro(yi, {
            key: 0,
            "selected-source-language": n.value,
            "onUpdate:selectedSourceLanguage": x[0] || (x[0] = (L) => n.value = L),
            "selected-target-language": o.value,
            "onUpdate:selectedTargetLanguage": x[1] || (x[1] = (L) => o.value = L),
            "source-languages": h.value,
            "target-languages": m.value,
            "all-option-enabled": ""
          }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : Ta("", !0)
        ], 2)
      ]),
      default: Xd(() => [
        i.value && !p.value.length ? (Ft(), ro(nf, {
          key: 0,
          title: k.$i18n("cx-sx-translation-list-empty-title"),
          description: k.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : Ta("", !0),
        i.value ? Ta("", !0) : (Ft(), ro(Hd(et), { key: 1 })),
        d.value ? (Ft(), Ba("div", Mx, [
          (Ft(!0), Ba(Gd, null, qd(p.value, (L) => (Ft(), ro(yk, {
            key: `${e.translationStatus}-${L.key}`,
            translation: L,
            onDeleteTranslation: (E) => f(L)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (Ft(), Ba("div", Nx, [
          (Ft(!0), Ba(Gd, null, qd(p.value, (L) => (Ft(), ro(Fk, {
            key: `${e.translationStatus}-${L.key}`,
            translation: L,
            onDeleteTranslation: (E) => f(L)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])),
        Px(Hk, {
          modelValue: c.value,
          "onUpdate:modelValue": x[2] || (x[2] = (L) => c.value = L),
          translation: u.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : Ta("", !0);
  }
}, Rx = window.Vue.computed, zx = window.Vuex.useStore, ze = () => {
  const e = zx(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = B();
  return { sectionSuggestion: Rx(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ) };
}, Ox = window.Vuex.useStore, jx = window.Vue.computed, Bt = () => {
  const e = Ox(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = B();
  return { currentTranslation: jx(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (i) => i.status === "draft" && i.sourceTitle === s.value && i.sectionTitleMatches(o.value) && i.sourceLanguage === t.value && i.targetLanguage === n.value
    )
  ) };
}, Kd = window.Vue.computed, Hx = window.Vuex.useStore, st = () => {
  const e = Hx(), { sectionSuggestion: t } = ze(), { currentTranslation: n } = Bt(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), i = Kd(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), c = Kd(() => {
    var d, r;
    const u = ((d = t.value) == null ? void 0 : d.targetTitle) || ((r = n.value) == null ? void 0 : r.targetTitle);
    return e.getters["mediawiki/getPage"](
      a.value,
      u
    );
  });
  return { currentSourcePage: i, currentTargetPage: c };
}, qx = window.Vue.ref, Gx = window.Vue.watchEffect, Xx = (e, t) => C(void 0, null, function* () {
  const n = e.language, o = e.title, s = e.articleSize, a = t.missingSections, c = (yield ue.fetchSuggestionSourceSections(
    n,
    o
  )).sections.filter((u) => u.level === "2").reduce((u, d, r, l) => {
    const g = r < l.length - 1 ? l[r + 1].byteoffset : s;
    return u[d.line] = g - d.byteoffset, u;
  }, {});
  return Object.keys(c).filter((u) => a[u]).reduce((u, d) => u + c[d], 0);
}), Er = (e) => {
  const s = e / 5 / 200;
  return Math.ceil(s);
}, Wx = (e) => {
  const t = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-whole-article",
    Math.round(t * 2) / 2,
    e
  ];
}, Kx = (e, t) => {
  const n = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-sections",
    Math.round(n * 2) / 2,
    e,
    t
  ];
}, of = () => {
  const { currentSourcePage: e } = st(), { sectionSuggestion: t } = ze(), n = qx(null);
  return Gx(() => {
    if (t.value)
      Xx(
        e.value,
        t.value
      ).then((o) => {
        n.value = Kx(
          Er(o),
          Object.keys(t.value.missingSections).length
        );
      });
    else if (e.value) {
      const o = Er(e.value.articleSize);
      n.value = Wx(o);
    }
  }), { translationSizeMessageArgs: n, bytesToMinutes: Er };
};
const Lr = window.Vue.toDisplayString, Ar = window.Vue.openBlock, Yd = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Sc = window.Vue.createElementVNode, Yx = window.Vue.unref, Jx = window.Vue.withCtx, Qx = window.Vue.createBlock, Zx = {
  key: 0,
  class: "cdx-info-chip__text"
}, e2 = {
  key: 1,
  class: "cdx-info-chip__text custom-info-chip__with-slash"
}, t2 = { class: "cdx-info-chip__text custom-info-chip__with-slash__first" }, n2 = /* @__PURE__ */ Sc("span", null, "/", -1), o2 = { class: "cdx-info-chip__text custom-info-chip__with-slash__second" }, s2 = window.Codex.CdxInfoChip, Dr = window.Vue.computed, bi = {
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
    const t = e, n = Dr(() => t.content.lastIndexOf("/")), o = Dr(() => t.content.slice(0, n.value)), s = Dr(() => t.content.slice(n.value + 1));
    return (a, i) => (Ar(), Qx(Yx(s2), {
      icon: e.icon,
      class: "custom-info-chip"
    }, {
      default: Jx(() => [
        n.value === -1 ? (Ar(), Yd("div", Zx, Lr(e.content), 1)) : (Ar(), Yd("div", e2, [
          Sc("span", t2, Lr(o.value), 1),
          n2,
          Sc("span", o2, Lr(s.value), 1)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const ae = window.Vue.unref, St = window.Vue.createVNode, yn = window.Vue.createElementVNode, Fa = window.Vue.toDisplayString, rt = window.Vue.withCtx, a2 = window.Vue.resolveDirective, Tr = window.Vue.withDirectives, Rn = window.Vue.openBlock, lo = window.Vue.createBlock, co = window.Vue.createCommentVNode, Jd = window.Vue.withModifiers, i2 = window.Vue.createElementBlock, r2 = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, l2 = { class: "col shrink pe-4" }, c2 = ["lang", "dir", "textContent"], u2 = ["lang", "dir", "textContent"], d2 = ["textContent"], g2 = ["textContent"], Br = window.Codex.CdxIcon, yt = window.Vue.computed, p2 = window.Vue.inject, m2 = window.Vuex.useStore, yc = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [No, eo, Lo],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = m2(), { bytesToMinutes: o } = of(), s = yt(() => t.suggestion), a = yt(
      () => s.value.sourceTitle || s.value.title
    ), i = yt(
      () => n.getters["mediawiki/getPage"](
        s.value.sourceLanguage,
        a.value
      )
    ), c = yt(
      () => {
        var w;
        return (w = s.value) == null ? void 0 : w.missingSectionsCount;
      }
    ), u = yt(() => {
      var w;
      return (w = i.value) == null ? void 0 : w.description;
    }), d = yt(
      () => s.value instanceof eo
    ), r = yt(
      () => s.value instanceof Lo
    ), { sourceLanguageAutonym: l, targetLanguageAutonym: g } = ye(n), p = yt(
      () => r.value ? Ih : Rh
    ), m = p2("colors"), h = yt(
      () => r.value ? m.blue600 : "currentColor"
    ), f = yt(() => {
      var w;
      return o((w = i.value) == null ? void 0 : w.articleSize) < 15;
    }), _ = yt(
      () => s.value instanceof Zm || s.value instanceof eh
    );
    return (w, y) => {
      const S = a2("i18n");
      return s.value ? (Rn(), i2("div", r2, [
        yn("div", l2, [
          St(ae(kc), {
            class: "cx-suggestion__thumbnail",
            thumbnail: i.value && i.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        St(ae(P), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: rt(() => [
            St(ae(P), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: rt(() => [
                St(ae(b), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: rt(() => [
                    yn("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: s.value.sourceLanguage,
                      dir: ae(R.getDir)(s.value.sourceLanguage),
                      textContent: Fa(a.value)
                    }, null, 8, c2)
                  ]),
                  _: 1
                }),
                St(ae(b), { shrink: "" }, {
                  default: rt(() => [
                    yn("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: s.value.sourceLanguage,
                      dir: ae(R.getDir)(s.value.sourceLanguage),
                      textContent: Fa(u.value)
                    }, null, 8, u2)
                  ]),
                  _: 1
                }),
                f.value && !d.value && !_.value ? (Rn(), lo(ae(b), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: rt(() => [
                    Tr(yn("small", null, null, 512), [
                      [S, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : co("", !0),
                d.value ? (Rn(), lo(ae(b), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
                  shrink: ""
                }, {
                  default: rt(() => [
                    Tr(yn("small", null, null, 512), [
                      [S, [c.value], "cx-sx-translation-suggestion-info"]
                    ])
                  ]),
                  _: 1
                })) : r.value ? (Rn(), lo(ae(b), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: rt(() => [
                    St(ae(P), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: rt(() => [
                        St(ae(b), { grow: "" }, {
                          default: rt(() => [
                            yn("small", {
                              textContent: Fa(ae(l))
                            }, null, 8, d2),
                            St(ae(Br), {
                              icon: ae(Nh),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            yn("small", {
                              textContent: Fa(ae(g))
                            }, null, 8, g2)
                          ]),
                          _: 1
                        }),
                        c.value ? (Rn(), lo(ae(b), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: rt(() => [
                            Tr(yn("small", null, null, 512), [
                              [S, [
                                c.value
                              ], "cx-sx-translation-suggestion-info"]
                            ])
                          ]),
                          _: 1
                        })) : co("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : co("", !0),
                _.value ? (Rn(), lo(ae(b), {
                  key: 3,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: rt(() => [
                    St(bi, {
                      icon: ae(qs),
                      content: s.value.collection.name
                    }, null, 8, ["icon", "content"])
                  ]),
                  _: 1
                })) : co("", !0)
              ]),
              _: 1
            }),
            St(ae(b), { shrink: "" }, {
              default: rt(() => [
                r.value ? co("", !0) : (Rn(), lo(ae(Br), {
                  key: 0,
                  icon: ae(Uo),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: y[0] || (y[0] = Jd((k) => w.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                St(ae(Br), {
                  class: "cx-suggestion__favorite-button",
                  icon: p.value,
                  "icon-color": h.value,
                  onClick: y[1] || (y[1] = Jd((k) => w.$emit("bookmark"), ["stop"]))
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : co("", !0);
    };
  }
}, h2 = "suggestion_filter_topic_area", f2 = "suggestion_filter_search_result_seed", w2 = "suggestion_filter_collections", _2 = "suggestion_filter_previous_edits", v2 = "suggestion_filter_popular_articles", sf = (e) => {
  if (e.type === tt)
    return h2;
  if (e.type === pt)
    return f2;
  if (e.id === Se || e.type === Se)
    return w2;
  if (e.id === Tt)
    return _2;
  if (e.id === Xt)
    return v2;
}, bc = (e) => {
  if (e.type === tt || e.type === Se || e.type === pt)
    return e.id;
  if (e.id === Se)
    return "all-collections";
}, S2 = window.Vue.computed, Qd = window.Vue.ref, Zd = window.Vue.watch, Wc = (e, t) => {
  const o = Qd([]), s = Qd(!1), a = S2(
    () => o.value.slice(0, 4)
  ), i = Xc(() => C(void 0, null, function* () {
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
  return Zd(t, c), Zd(e, c), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
}, Pr = window.Vue.ref, eg = window.Vue.watch, y2 = mw.loader.require("ext.cx.articletopics"), b2 = y2.flatMap((e) => e.topics), C2 = () => {
  const e = Pr(""), t = Pr(!1), n = Pr({ topics: [], areas: [] }), o = he(), { pageCollections: s } = Mc(), { sourceLanguageURLParameter: a } = B(), i = (d) => (d = d.toLowerCase(), b2.filter(
    (r) => r.label.toLowerCase().includes(d)
  )), c = (d) => (d = d.toLowerCase(), s.value.filter(
    (r) => r.name.toLowerCase().includes(d)
  )), { searchResultsSlice: u } = Wc(a, e);
  return eg(u, () => {
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
  }), eg(e, () => C(void 0, null, function* () {
    t.value = !0, n.value.areas = [
      ...c(e.value).map((d) => ({
        label: d.name,
        value: d.name,
        description: d.description,
        icon: qs,
        filterType: Se,
        filterId: d.name
      })),
      ...i(e.value).map((d) => ({
        label: d.label,
        value: d.label,
        description: o.i18n(
          "cx-sx-suggestions-filter-search-results-topics-default-description"
        ),
        icon: qs,
        filterType: tt,
        filterId: d.topicId
      }))
    ], t.value = !1;
  })), { searchInput: e, searchLoading: t, searchResults: n };
};
const ie = window.Vue.unref, bt = window.Vue.createVNode, zn = window.Vue.withCtx, k2 = window.Vue.resolveDirective, Mt = window.Vue.createElementVNode, ns = window.Vue.withDirectives, tg = window.Vue.toDisplayString, x2 = window.Vue.createTextVNode, $2 = window.Vue.vShow, V2 = window.Vue.isRef, ng = window.Vue.renderList, og = window.Vue.Fragment, en = window.Vue.openBlock, On = window.Vue.createElementBlock, E2 = window.Vue.normalizeClass, sg = window.Vue.createBlock, ag = window.Vue.createCommentVNode, L2 = { class: "sx-suggestions-filters" }, A2 = { class: "mb-0" }, D2 = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, T2 = { class: "mb-3" }, B2 = { class: "px-4 pb-4 pt-7" }, P2 = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, F2 = { class: "sx-suggestions-filters__group-label mb-3" }, M2 = { class: "sx-suggestions-filters__group-filters mb-3" }, N2 = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, U2 = { key: 0 }, I2 = { key: 1 }, Fr = window.Vue.ref, ig = window.Vue.computed, R2 = window.Vue.inject, rg = window.Codex.CdxButton, z2 = window.Codex.CdxIcon, O2 = window.Codex.CdxTextInput, lg = window.Codex.CdxMenu, j2 = {
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
      [Tt]: Gh,
      [Xt]: Oh,
      [Se]: qs,
      [tt]: null,
      [pt]: null
    }, { allFilters: s, isFilterSelected: a, selectFilter: i, findSelectedFilter: c } = Nc(), u = ot(), d = () => {
      m(), n("update:modelValue", !1);
    }, r = () => {
      u({ event_type: "suggestion_filters_close" }), d();
    }, l = () => {
      p.value && (u({
        event_type: "suggestion_filters_confirm",
        event_subtype: "suggestion_filters_single_select_confirm",
        event_context: bc(
          p.value
        )
      }), i(p.value)), d();
    }, g = Fr(!1), p = Fr(null), m = () => {
      p.value = null, g.value = !1;
    }, h = (U) => {
      const M = {
        event_type: "suggestion_filters_select",
        event_subtype: "suggestion_filters_single_select",
        event_source: sf(U),
        event_context: bc(U)
      };
      u(M), p.value = U, g.value = !0;
    }, f = (U) => p.value ? p.value.id === U.id && p.value.type === U.type : a(U), _ = R2("breakpoints"), w = ig(() => _.value.mobile), { getFilterProvider: y } = Uc(), { searchInput: S, searchResults: k } = C2(), x = ig(
      () => p.value || c()
    ), L = Fr(null), E = (U) => {
      h({
        type: pt,
        id: U.label,
        label: U.label
      }), S.value = "";
    }, T = (U) => {
      h({
        type: U.filterType,
        id: U.filterId,
        label: U.label
      }), S.value = "";
    };
    return (U, M) => {
      const X = k2("i18n");
      return en(), sg(ie(ht), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: w.value,
        header: !1
      }, {
        default: zn(() => [
          Mt("section", L2, [
            bt(ie(P), {
              class: "sx-suggestions-filters__header ma-0 py-3 px-4",
              align: "stretch",
              justify: "start"
            }, {
              default: zn(() => [
                bt(ie(b), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: zn(() => [
                    bt(ie(rg), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": U.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: r
                    }, {
                      default: zn(() => [
                        bt(ie(z2), { icon: ie(Uo) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                bt(ie(b), {
                  grow: "",
                  align: "center"
                }, {
                  default: zn(() => [
                    ns(Mt("h5", A2, null, 512), [
                      [X, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                bt(ie(b), {
                  shrink: "",
                  align: "start"
                }, {
                  default: zn(() => [
                    ns(bt(ie(rg), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: l
                    }, {
                      default: zn(() => [
                        x2(tg(U.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [$2, g.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Mt("div", D2, [
              ns(Mt("h5", T2, null, 512), [
                [X, void 0, "cx-sx-suggestions-filter-active-group-label"]
              ]),
              Mt("div", null, [
                bt(bi, {
                  class: "sx-suggestions-filters__filter sx-suggestions-filters__filter--active my-1 mx-1 py-1",
                  content: x.value.label,
                  icon: o[ie(y)(x.value)]
                }, null, 8, ["content", "icon"])
              ])
            ]),
            Mt("div", B2, [
              bt(ie(O2), {
                modelValue: ie(S),
                "onUpdate:modelValue": M[0] || (M[0] = (G) => V2(S) ? S.value = G : null),
                placeholder: U.$i18n("cx-sx-suggestions-filter-search-input-placeholder"),
                "input-type": "search",
                "start-icon": ie(UC),
                clearable: !!ie(S)
              }, null, 8, ["modelValue", "placeholder", "start-icon", "clearable"])
            ]),
            ie(S) ? (en(), On("div", N2, [
              ie(k).topics.length ? (en(), On("div", U2, [
                ns(Mt("h5", null, null, 512), [
                  [X, void 0, "cx-sx-suggestions-filter-search-results-topics-label"]
                ]),
                bt(ie(lg), {
                  selected: L.value,
                  "onUpdate:selected": M[1] || (M[1] = (G) => L.value = G),
                  expanded: !0,
                  "menu-items": ie(k).topics,
                  "show-thumbnail": "",
                  onMenuItemClick: E
                }, null, 8, ["selected", "menu-items"])
              ])) : ag("", !0),
              ie(k).areas.length ? (en(), On("div", I2, [
                ns(Mt("h5", null, null, 512), [
                  [X, void 0, "cx-sx-suggestions-filter-search-results-areas-label"]
                ]),
                bt(ie(lg), {
                  selected: L.value,
                  "onUpdate:selected": M[2] || (M[2] = (G) => L.value = G),
                  expanded: !0,
                  "menu-items": ie(k).areas,
                  onMenuItemClick: T
                }, null, 8, ["selected", "menu-items"])
              ])) : ag("", !0)
            ])) : (en(), On("div", P2, [
              (en(!0), On(og, null, ng(ie(s), (G) => (en(), On("div", {
                key: G.id,
                class: "sx-suggestions-filters__group"
              }, [
                Mt("div", F2, tg(G.label), 1),
                Mt("div", M2, [
                  (en(!0), On(og, null, ng(G.filters, (pe) => (en(), sg(bi, {
                    key: pe.id,
                    class: E2(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
                      "sx-suggestions-filters__filter--active": f(pe)
                    }]),
                    icon: o[ie(y)(pe)],
                    content: pe.label,
                    onClick: ($e) => h(pe)
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
const Mr = window.Vue.unref, Ma = window.Vue.openBlock, cg = window.Vue.createBlock;
window.Vue.createCommentVNode;
const H2 = window.Vue.renderList, q2 = window.Vue.Fragment, ug = window.Vue.createElementBlock, G2 = window.Vue.normalizeClass, X2 = window.Vue.createVNode, W2 = {
  key: 1,
  class: "cx-suggestion-list__filters flex px-4 pb-2"
}, dg = window.Vue.ref, K2 = window.Vue.computed, gg = window.Vue.watch, Y2 = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = he(), n = ot(), {
      getFiltersSummary: o,
      selectFilter: s,
      isFilterSelected: a,
      waitingForPageCollectionsFetch: i
    } = Nc(), c = dg(!1), u = () => {
      n({ event_type: "dashboard_suggestion_filters_view_more" }), c.value = !0;
    }, d = (h) => {
      const f = {
        event_type: "dashboard_suggestion_filters_quick_select",
        event_source: sf(h),
        event_context: bc(h)
      };
      n(f), s(h);
    }, r = {
      [Tt]: Gh,
      [Xt]: Oh,
      [Se]: qs,
      [tt]: null
    }, { getFilterProvider: l } = Uc(), g = (h) => ({
      id: h.id,
      type: h.type,
      icon: r[l(h)],
      label: h.label,
      action: d
    }), p = dg(o());
    gg(c, (h) => {
      h || (p.value = o());
    }), gg(i, (h) => {
      h || (p.value = o());
    });
    const m = K2(() => [
      ...p.value.map(g),
      {
        id: "more",
        icon: Hc,
        label: t.i18n("cx-sx-suggestions-filter-more-label"),
        action: u
      }
    ]);
    return (h, f) => Mr(i) ? (Ma(), cg(Mr(et), { key: 0 })) : (Ma(), ug("div", W2, [
      (Ma(!0), ug(q2, null, H2(m.value, (_) => (Ma(), cg(bi, {
        key: _.label,
        class: G2(["cx-suggestion-list__filter py-1 me-1", { "cx-suggestion-list__filter--active": Mr(a)(_) }]),
        icon: _.icon,
        content: _.label,
        onClick: (w) => _.action(_)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      X2(j2, {
        modelValue: c.value,
        "onUpdate:modelValue": f[0] || (f[0] = (_) => c.value = _)
      }, null, 8, ["modelValue"])
    ]));
  }
}, uo = window.Vue.computed, pg = window.Vue.ref, J2 = window.Vue.watch, Q2 = window.Vuex.useStore, Z2 = () => {
  const e = Q2(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = Bc(), i = ot(), c = uo(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), u = uo(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), d = pg(0), r = pg(0), { maxSuggestionsPerSlice: l } = e.state.suggestions, g = 4, p = uo(
    () => a(d.value)
  ), m = uo(
    () => s(r.value)
  ), h = () => {
    k(), T(), x(), U();
  }, {
    fetchNextSectionSuggestionsSlice: f,
    fetchNextPageSuggestionsSlice: _
  } = Ic(), w = (M) => M.length === l, y = uo(
    () => w(m.value)
  ), S = uo(
    () => w(p.value)
  ), k = () => {
    const M = (d.value + 1) % g, X = w(
      a(M)
    );
    (!S.value || !X) && f();
  }, x = () => {
    const M = (r.value + 1) % g, X = w(
      s(M)
    );
    (!y.value || !X) && _();
  }, L = (M) => {
    i({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", M), k();
  }, E = (M) => {
    i({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", M), x();
  }, T = () => d.value = (d.value + 1) % g, U = () => r.value = (r.value + 1) % g;
  return J2(
    o,
    () => {
      r.value = 0, x(), d.value = 0, k();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: m,
    currentSectionSuggestionsSlice: p,
    discardPageSuggestion: E,
    discardSectionSuggestion: L,
    onSuggestionRefresh: h,
    pageSuggestionsLoading: u,
    sectionSuggestionsLoading: c,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: s,
    isCurrentPageSuggestionsSliceFull: y,
    isCurrentSectionSuggestionsSliceFull: S
  };
}, e8 = window.Vuex.useStore, Kc = () => {
  const e = e8(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = Ic(), o = (d, r, l) => e.state.suggestions.pageSuggestions.find(
    (g) => g.sourceLanguage === d && g.targetLanguage === r && g.sourceTitle === l
  ), s = (d) => C(void 0, null, function* () {
    const { sourceTitle: r, sourceLanguage: l, targetLanguage: g } = d;
    yield ue.markFavorite(r, l, g);
    const p = new Lo({
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
    markFavoriteSuggestion: (d, r, l) => C(void 0, null, function* () {
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
      ), t()), yield ue.markFavorite(
        d,
        r,
        l
      );
      const m = new Lo({
        title: d,
        sourceLanguage: r,
        targetLanguage: l
      });
      e.commit("suggestions/addFavoriteSuggestion", m);
    }),
    removeFavoriteSuggestion: (d) => (e.commit("suggestions/removeFavoriteSuggestion", d), ue.unmarkFavorite(d))
  };
}, t8 = "suggestion_no_seed", n8 = "suggestion_recent_edit", o8 = "suggestion_topic_area", s8 = "suggestion_search_result_seed", a8 = "suggestion_featured", i8 = "suggestion_collections", r8 = () => {
  const { currentSuggestionFilters: e } = B(), { defaultSeedsFetched: t } = Fc();
  return () => {
    const { type: n, id: o } = e.value;
    if (o === Tt)
      return t.value ? t8 : n8;
    if (n === tt)
      return o8;
    if (n === pt)
      return s8;
    if (o === Xt)
      return a8;
    if (o === Se || n === Se)
      return i8;
    throw new Error("Event source cannot be empty");
  };
};
const mg = window.Vue.normalizeClass, l8 = window.Vue.resolveDirective, os = window.Vue.createElementVNode, Na = window.Vue.withDirectives, ge = window.Vue.unref, Ge = window.Vue.openBlock, Nt = window.Vue.createBlock, bn = window.Vue.createCommentVNode, Nr = window.Vue.createVNode, ss = window.Vue.withCtx, hg = window.Vue.renderList, fg = window.Vue.Fragment, Ur = window.Vue.createElementBlock, c8 = window.Vue.toDisplayString, u8 = window.Vue.createTextVNode, d8 = window.Vue.vShow, g8 = { class: "cx-suggestion-list" }, p8 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, m8 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, h8 = { class: "cx-suggestion-list__refresh-button-container justify-center" }, Ut = window.Vue.computed, f8 = window.Vue.inject, w8 = window.Vue.ref, _8 = window.Codex.CdxButton, v8 = window.Codex.CdxIcon, S8 = window.Vuex.useStore, y8 = {
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
    } = B(), { supportedSourceLanguageCodes: s, supportedTargetLanguageCodes: a } = Ys(), i = rh(), c = (oe) => i(oe, n.value), u = (oe) => i(t.value, oe), d = r8(), r = ta(), l = (oe) => {
      r(
        oe.sourceTitle,
        oe.sourceLanguage,
        oe.targetLanguage,
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
      isCurrentSectionSuggestionsSliceFull: S
    } = Z2(), k = w8(null), x = ot(), L = () => {
      x({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), f(), k.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: E, markFavoritePageSuggestion: T } = Kc(), U = f8("breakpoints"), M = Ut(() => U.value.mobile), X = Ut(
      () => M.value ? null : "pb-2 flex justify-between items-center"
    ), G = S8(), pe = Ut(
      () => G.state.suggestions.isPageSuggestionsFetchPending
    ), $e = Ut(
      () => G.state.suggestions.isSectionSuggestionsFetchPending
    ), ft = Ut(
      () => pe.value || _.value && !y.value
    ), Ve = Ut(
      () => $e.value || w.value && !S.value
    ), Ee = Ut(
      () => pe.value || _.value || g.value.length > 0
    ), Pt = Ut(
      () => $e.value || w.value || p.value.length > 0
    ), Ie = Ut(
      () => !Ee.value && !Pt.value
    ), De = Ut(
      () => !w.value && !_.value && !pe.value && !$e.value && !Ie.value
    );
    return (oe, O) => {
      const H = l8("i18n");
      return Na((Ge(), Ur("div", g8, [
        Nr(ge(Ze), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: ss(() => [
            os("div", {
              class: mg(["cx-suggestion-list__header-card__header px-4", X.value])
            }, [
              Na(os("h3", {
                class: mg(["mw-ui-card__title mb-0", { "py-3": M.value }])
              }, null, 2), [
                [H, void 0, "cx-suggestionlist-title"]
              ]),
              M.value ? bn("", !0) : (Ge(), Nt(yi, {
                key: 0,
                "source-languages": ge(s),
                "target-languages": ge(a),
                "selected-source-language": ge(t),
                "selected-target-language": ge(n),
                "onUpdate:selectedSourceLanguage": c,
                "onUpdate:selectedTargetLanguage": u
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            Nr(Y2)
          ]),
          default: ss(() => [
            M.value ? (Ge(), Nt(yi, {
              key: 0,
              "source-languages": ge(s),
              "target-languages": ge(a),
              "selected-source-language": ge(t),
              "selected-target-language": ge(n),
              "onUpdate:selectedSourceLanguage": c,
              "onUpdate:selectedTargetLanguage": u
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])) : bn("", !0)
          ]),
          _: 1
        }),
        Ee.value ? (Ge(), Nt(ge(Ze), {
          key: 0,
          ref_key: "pageSuggestionsList",
          ref: k,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: ss(() => [
            Na(os("h5", p8, null, 512), [
              [H, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (Ge(!0), Ur(fg, null, hg(ge(g), (de, W) => (Ge(), Nt(yc, {
              key: `page-suggestion-${W}`,
              suggestion: de,
              onClose: (v) => ge(m)(de),
              onClick: (v) => l(de),
              onBookmark: (v) => ge(T)(de)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            ft.value ? (Ge(), Nt(ge(et), { key: 0 })) : bn("", !0)
          ]),
          _: 1
        }, 512)) : bn("", !0),
        Pt.value ? (Ge(), Nt(ge(Ze), {
          key: 1,
          class: "cx-suggestion-list__section-suggestions pa-0 mb-0"
        }, {
          default: ss(() => [
            Na(os("h5", m8, null, 512), [
              [H, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (Ge(!0), Ur(fg, null, hg(ge(p), (de, W) => (Ge(), Nt(yc, {
              key: `section-suggestion-${W}`,
              class: "ma-0",
              suggestion: de,
              onClose: (v) => ge(h)(de),
              onClick: (v) => l(de),
              onBookmark: (v) => ge(E)(de)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            Ve.value ? (Ge(), Nt(ge(et), { key: 0 })) : bn("", !0)
          ]),
          _: 1
        })) : bn("", !0),
        Ie.value ? (Ge(), Nt(nf, {
          key: 2,
          title: oe.$i18n("cx-sx-suggestion-list-empty-title"),
          description: oe.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : bn("", !0),
        os("div", h8, [
          De.value ? (Ge(), Nt(ge(_8), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: L
          }, {
            default: ss(() => [
              Nr(ge(v8), {
                class: "me-1",
                icon: ge(Hh)
              }, null, 8, ["icon"]),
              u8(" " + c8(oe.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : bn("", !0)
        ])
      ], 512)), [
        [d8, e.active]
      ]);
    };
  }
}, b8 = window.Vue.resolveDirective, C8 = window.Vue.createElementVNode, k8 = window.Vue.withDirectives, x8 = window.Vue.renderList, $8 = window.Vue.Fragment, Ir = window.Vue.openBlock, V8 = window.Vue.createElementBlock, wg = window.Vue.unref, _g = window.Vue.createBlock, vg = window.Vue.withCtx, E8 = window.Vue.createCommentVNode, L8 = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, A8 = window.Vue.computed, D8 = window.Vuex.useStore, T8 = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = D8(), n = A8(() => t.state.suggestions.favorites || []), o = ta(), s = (i) => o(
      i.title,
      i.sourceLanguage,
      i.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = Kc();
    return (i, c) => {
      const u = b8("i18n");
      return n.value.length ? (Ir(), _g(wg(Ze), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: vg(() => [
          k8(C8("h3", L8, null, 512), [
            [u, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: vg(() => [
          (Ir(!0), V8($8, null, x8(n.value, (d, r) => (Ir(), _g(yc, {
            key: `favorite-${r}`,
            suggestion: d,
            onClick: (l) => s(d),
            onBookmark: (l) => wg(a)(d)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : E8("", !0);
    };
  }
};
const B8 = window.Vue.resolveDirective, Ua = window.Vue.createElementVNode, P8 = window.Vue.withDirectives, F8 = window.Vue.renderList, M8 = window.Vue.Fragment, Rr = window.Vue.openBlock, zr = window.Vue.createElementBlock, N8 = window.Vue.unref, U8 = window.Vue.createVNode, I8 = window.Vue.toDisplayString, R8 = { class: "cx-help-panel pa-4" }, z8 = { class: "cx-help-panel__item-list mt-6 ps-2" }, O8 = ["href", "target"], j8 = ["textContent"], H8 = window.Vue.computed, q8 = window.Codex.CdxIcon, G8 = {
  __name: "CXHelpPanel",
  setup(e) {
    const { desktopDashboardUrl: t } = Ph(), n = he(), o = H8(() => {
      const s = [
        {
          icon: PC,
          label: n.i18n("cx-sx-dashboard-help-panel-more-info-label"),
          href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
          target: "_blank"
        },
        {
          icon: zh,
          label: n.i18n("cx-sx-dashboard-help-panel-stats-label"),
          href: mw.util.getUrl("Special:ContentTranslationStats"),
          target: "_blank"
        },
        {
          icon: TC,
          label: n.i18n("cx-sx-dashboard-help-panel-feedback-label"),
          href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
          target: "_blank"
        }
      ];
      return to && s.push({
        icon: qh,
        label: n.i18n("cx-sx-dashboard-banner-access-previous"),
        href: t.value,
        target: "_self"
      }), s;
    });
    return (s, a) => {
      const i = B8("i18n");
      return Rr(), zr("div", R8, [
        P8(Ua("h5", null, null, 512), [
          [i, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        Ua("ul", z8, [
          (Rr(!0), zr(M8, null, F8(o.value, (c, u) => (Rr(), zr("li", {
            key: u,
            class: "mt-4"
          }, [
            Ua("a", {
              href: c.href,
              target: c.target
            }, [
              U8(N8(q8), {
                class: "me-2",
                icon: c.icon
              }, null, 8, ["icon"]),
              Ua("span", {
                textContent: I8(c.label)
              }, null, 8, j8)
            ], 8, O8)
          ]))), 128))
        ])
      ]);
    };
  }
};
const X8 = window.Vue.resolveDirective, go = window.Vue.createElementVNode, Or = window.Vue.withDirectives, Sg = window.Vue.toDisplayString, jr = window.Vue.unref, Hr = window.Vue.withCtx, qr = window.Vue.createVNode, W8 = window.Vue.openBlock, K8 = window.Vue.createElementBlock, Y8 = { class: "cx-stats-panel pa-4" }, J8 = ["textContent"], Q8 = { class: "cx-stats-panel__monthly-stats-label" }, Z8 = ["textContent"], e$ = { class: "cx-stats-panel__total-stats-label" }, t$ = window.Vue.ref, yg = window.Vue.computed, n$ = window.Vue.watch, o$ = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = e, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", o = yg(() => {
      var i, c;
      return ((c = (i = t.stats) == null ? void 0 : i[n]) == null ? void 0 : c.count) || 0;
    }), s = yg(() => {
      var i, c;
      return ((c = (i = t.stats) == null ? void 0 : i[n]) == null ? void 0 : c.delta) || 0;
    }), a = t$(null);
    return n$(
      () => t.stats,
      () => {
        const i = t.stats, c = a.value.getContext("2d"), u = Object.keys(t.stats || {}).sort(), d = u.reduce(
          (S, k) => Math.max(S, i[k].delta),
          0
        ), r = u.map((S) => i[S].delta), l = a.value.getBoundingClientRect().width, g = a.value.getBoundingClientRect().height;
        a.value.width = l, a.value.height = g;
        const p = 4, m = 6, h = 50, f = (h - p) / d;
        let _ = p;
        const w = Math.floor(
          (l - p) / (m + p)
        ), y = r.slice(
          Math.max(r.length - w, 0)
        );
        y.forEach((S, k) => {
          k === y.length - 1 && (c.fillStyle = "#36c");
          const x = h - S * f;
          c.fillRect(_, x, m, S * f), _ += m + p;
        });
      }
    ), (i, c) => {
      const u = X8("i18n");
      return W8(), K8("div", Y8, [
        Or(go("h5", null, null, 512), [
          [u, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        qr(jr(P), null, {
          default: Hr(() => [
            qr(jr(b), { class: "cx-stats-panel__monthly-stats" }, {
              default: Hr(() => [
                go("h3", {
                  textContent: Sg(s.value)
                }, null, 8, J8),
                Or(go("h5", Q8, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            qr(jr(b), { class: "cx-stats-panel__total-stats" }, {
              default: Hr(() => [
                go("h3", {
                  textContent: Sg(o.value)
                }, null, 8, Z8),
                Or(go("h5", e$, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        go("canvas", {
          ref_key: "canvasRef",
          ref: a,
          class: "cx-stats-panel__canvas"
        }, null, 512)
      ]);
    };
  }
}, af = () => {
  const e = ot();
  return (t) => e({
    event_type: "dashboard_tab_select",
    event_source: {
      draft: "dashboard_inprogress_tab",
      published: "dashboard_published_tab",
      suggestions: "dashboard_suggestions_tab"
    }[t]
  });
};
const s$ = window.Vue.renderSlot, a$ = window.Vue.unref, i$ = window.Vue.createVNode, r$ = window.Vue.createElementVNode, l$ = window.Vue.openBlock, c$ = window.Vue.createElementBlock, u$ = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, d$ = { class: "col-12 ma-0 pa-0" }, g$ = {
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
    const n = t, o = af(), s = (a) => {
      o(a), n("update:active", a);
    };
    return (a, i) => (l$(), c$("footer", u$, [
      r$("div", d$, [
        s$(a.$slots, "default", {}, () => [
          i$(a$(Gs), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: s
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, p$ = window.Vuex.useStore, m$ = () => {
  const e = p$(), t = Mo();
  return () => C(void 0, null, function* () {
    if (e.state.suggestions.favorites.length)
      return;
    const n = yield ue.fetchFavorites();
    if (!n || !n.length)
      return;
    const o = {};
    for (const s of n)
      e.commit("suggestions/addFavoriteSuggestion", s), ue.fetchSectionSuggestion(
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
}, h$ = window.Vuex.useStore, rf = () => {
  const e = h$(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), { isDefaultFilter: i } = Um(), { previousRoute: c } = ye(e), u = ot(), d = () => {
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
      mintforreaders: "preselect_mint_for_readers"
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
}, f$ = window.Vue.watch, w$ = () => {
  const { fetchAllTranslations: e } = Io(), t = sh(), n = m$(), { fetchPageCollections: o } = Mc(), { logDashboardOpenEvent: s } = rf(), { applicationLanguagesInitialized: a } = lh();
  return () => C(void 0, null, function* () {
    o();
    try {
      yield n();
    } catch (i) {
      mw.log.error("[CX] Error while fetching favorite suggestions", i);
    }
    yield e(), f$(
      a,
      () => {
        a.value && (s(), t());
      },
      { immediate: !0 }
    );
  });
}, bg = window.Vue.computed, _$ = window.Vue.ref, v$ = window.Vue.watch, S$ = window.Vue.watchEffect, y$ = window.Vuex.useStore, b$ = ["suggestions", "draft", "published"], C$ = () => {
  const e = y$(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = B(), { translationsFetched: o } = Io(), s = _$(null);
  if (b$.includes(t.value))
    s.value = t.value;
  else {
    const a = bg(
      () => o.value.draft
    ), i = bg(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = i.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", v$(a, (c) => {
      c && (s.value = i.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return S$(() => {
    n(s.value), window.scrollTo(0, 0);
  }), s;
}, k$ = window.Vue.computed, x$ = () => {
  const e = he();
  return k$(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: a0,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: ki,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: s0,
        type: "text"
      }
    }
  ]);
};
const re = window.Vue.unref, ke = window.Vue.createVNode, $$ = window.Vue.toDisplayString, V$ = window.Vue.createTextVNode, Ct = window.Vue.withCtx, Ia = window.Vue.openBlock, Gr = window.Vue.createBlock, Xr = window.Vue.createCommentVNode, E$ = window.Vue.vShow, L$ = window.Vue.withDirectives, A$ = window.Vue.isRef, D$ = window.Vue.createElementBlock, Cg = window.Vue.computed, T$ = window.Vuex.useStore, B$ = window.Codex.CdxButton, P$ = window.Codex.CdxIcon, F$ = {
  __name: "CXDashboard",
  setup(e) {
    const t = Ae(), n = ot(), o = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    w$()();
    const a = T$();
    a.dispatch("translator/fetchTranslatorStats");
    const i = Cg(() => a.state.translator.translatorStats), c = Cg(() => a.state.application.bannerDismissed), u = () => {
      a.commit("application/dismissBanner");
    }, d = C$(), r = x$(), l = af(), g = (p) => {
      l(p), d.value = p;
    };
    return (p, m) => (Ia(), D$("div", null, [
      ke(re(P), { class: "ma-0 pb-4" }, {
        default: Ct(() => [
          ke(re(B$), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: o
          }, {
            default: Ct(() => [
              ke(re(P$), {
                class: "me-1",
                icon: re(wc)
              }, null, 8, ["icon"]),
              V$(" " + $$(p.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      re(to) && !c.value ? (Ia(), Gr(re(P), {
        key: 0,
        class: "ma-0",
        align: "start"
      }, {
        default: Ct(() => [
          ke(re(b), { class: "col-12 col-tablet-9 col-offset-tablet-3 col-desktop-7 col-offset-desktop-2" }, {
            default: Ct(() => [
              ke(JC, {
                class: "mb-4",
                onUserDismissed: m[0] || (m[0] = (h) => u())
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : Xr("", !0),
      ke(re(P), {
        class: "ma-0",
        align: "start"
      }, {
        default: Ct(() => [
          p.$mwui.breakpoint.tabletAndUp ? (Ia(), Gr(re(b), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: Ct(() => [
              ke(re(Gs), {
                id: "dashboard-list-selector--desktop",
                items: re(r),
                active: re(d),
                onSelect: g
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : Xr("", !0),
          ke(re(b), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: Ct(() => [
              L$(ke(T8, null, null, 512), [
                [E$, re(d) === "suggestions"]
              ]),
              ke(y8, {
                active: re(d) === "suggestions"
              }, null, 8, ["active"]),
              ke(Wd, {
                "translation-status": "draft",
                "active-status": re(d)
              }, null, 8, ["active-status"]),
              ke(Wd, {
                "translation-status": "published",
                "active-status": re(d)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          ke(re(b), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: Ct(() => [
              ke(re(P), {
                class: "ma-0",
                align: "start"
              }, {
                default: Ct(() => [
                  ke(re(b), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: Ct(() => [
                      ke(o$, { stats: i.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  ke(re(b), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: Ct(() => [
                      ke(G8)
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
      p.$mwui.breakpoint.mobile ? (Ia(), Gr(g$, {
        key: 1,
        active: re(d),
        "onUpdate:active": m[1] || (m[1] = (h) => A$(d) ? d.value = h : null),
        items: re(r)
      }, null, 8, ["active", "items"])) : Xr("", !0)
    ]));
  }
}, M$ = {
  name: "DashboardView",
  components: { CxDashboard: F$ }
}, N$ = window.Vue.resolveComponent, U$ = window.Vue.createVNode, I$ = window.Vue.openBlock, R$ = window.Vue.createElementBlock, z$ = { class: "cx-translation-dashboard" };
function O$(e, t, n, o, s, a) {
  const i = N$("cx-dashboard");
  return I$(), R$("main", z$, [
    U$(i, { class: "mb-4 pb-12 px-3 px-tablet-10" })
  ]);
}
const kg = /* @__PURE__ */ ne(M$, [["render", O$]]), po = window.Vue.computed, j$ = () => {
  const { sectionSuggestion: e } = ze(), { targetLanguageURLParameter: t } = B(), { currentTranslation: n } = Bt(), o = po(
    () => {
      var g, p, m;
      return (m = (p = (g = e.value) == null ? void 0 : g.orderedMissingSections) == null ? void 0 : p[0]) == null ? void 0 : m.sourceTitle;
    }
  ), s = po(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.missingSectionsCount;
    }
  ), a = po(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.presentSectionsCount;
    }
  ), { targetPageExists: i, getCurrentTitleByLanguage: c } = fn(), u = po(() => i ? K.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    c(t.value, null)
  ) : null), d = (g) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : g ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : i.value ? s.value > 1 || s.value === 1 && a.value > 0 ? "cx-sx-select-section" : s.value === 1 && a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : s.value === 0 && a.value > 0 ? "cx-sx-select-section" : s.value === 0 && a.value === 0 ? "cx-sx-translation-confirmer-action-new-translation" : "" : "cx-sx-start-translation-button-label", r = po(() => {
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
  }), l = po(
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
function H$(e) {
  return e.$el = $(e), e;
}
function q$(e, t, n, o) {
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
function G$() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function X$(e, t) {
  return C(this, null, function* () {
    yield Yc(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = H$(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const W$ = window.Vue.computed, K$ = window.Vue.onMounted, Y$ = window.Vue.ref;
function J$(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const Q$ = {
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
    const n = Y$(null);
    let o = null;
    const s = W$(() => o.getHtml()), a = () => {
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
    return K$(() => C(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = J$;
      const r = yield X$(u, n.value);
      t.emit("ready"), n.value.appendChild(r.$element[0]), o = q$(
        r,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = G$, o.focus();
    })), { sxeditor: n };
  }
}, Cc = window.Vue.createElementVNode, Z$ = window.Vue.openBlock, e4 = window.Vue.createElementBlock, t4 = ["lang", "dir"], n4 = /* @__PURE__ */ Cc("div", { class: "overlay-header header initial-header" }, [
  /* @__PURE__ */ Cc("div", { class: "toolbar" })
], -1), o4 = ["lang", "dir"];
function s4(e, t, n, o, s, a) {
  return Z$(), e4("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    n4,
    Cc("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, o4)
  ], 8, t4);
}
const a4 = /* @__PURE__ */ ne(Q$, [["render", s4]]);
function Yc() {
  return mw.loader.using("mw.cx3.ve");
}
const i4 = window.Vuex.useStore, r4 = () => {
  const e = i4();
  return (t, n) => C(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield Yc(), new Promise((s) => {
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
}, l4 = window.Vuex.useStore, lf = () => {
  const e = l4();
  return (t, n, o, s = null) => C(void 0, null, function* () {
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
}, Mi = () => {
  const { currentSourcePage: e } = st(), t = r4(), n = lf(), {
    setSectionURLParam: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: i,
    revisionURLParameter: c
  } = B(), u = (l, g) => C(void 0, null, function* () {
    l() || (yield n(
      s.value,
      a.value,
      i.value,
      c.value
    ), to || (yield t(
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
}, c4 = window.Vuex.useStore, Ro = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o,
    isQuickTutorialForced: s
  } = B(), a = c4(), i = Ae(), c = () => {
    const l = i.currentRoute.value.name !== "sx-quick-tutorial" && (s() || !a.getters["translator/userHasSectionTranslations"]) ? "sx-quick-tutorial" : "sx-sentence-selector";
    return i.getRoutes().find((g) => g.name === l);
  }, u = () => {
    const r = mw.config.get(
      "wgContentTranslationTranslateInTarget"
    ), l = K.getCurrentWikiLanguageCode();
    if (!r || t.value === l)
      return !1;
    const g = o.value ? { section: o.value } : {}, p = K.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      g
    );
    return location.href = p + "#" + c().path, !0;
  }, d = () => {
    location.href = K.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      o.value ? { sourcesection: o.value } : {}
    );
  };
  return () => {
    if (K.setCXToken(
      e.value,
      t.value,
      n.value
    ), to) {
      d();
      return;
    }
    if (u())
      return;
    const l = c();
    i.push({ name: l.name });
  };
}, Jc = () => {
  const e = ot(), { currentTranslation: t } = Bt();
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
}, u4 = window.Vue.ref, d4 = () => {
  const e = Ae(), { logDashboardTranslationStartEvent: t } = Fi(), n = Jc(), o = Ro(), { sectionURLParameter: s } = B(), { targetPageExists: a } = fn(), { selectPageSectionByTitle: i } = Mi(), c = () => C(void 0, null, function* () {
    yield i(s.value), e.push({ name: "sx-content-comparator" });
  }), u = u4(!1), { currentTranslation: d } = Bt();
  return {
    handlePrimaryButtonClick: () => {
      d.value ? d.value.isArticleTranslation && !to ? u.value = !0 : (n(), o()) : s.value ? c() : a.value ? e.push({ name: "sx-section-selector" }) : (t(), o());
    },
    translationConfirmationDialogOn: u
  };
};
const g4 = window.Vue.resolveDirective, xg = window.Vue.createElementVNode, $g = window.Vue.withDirectives, p4 = window.Vue.unref, m4 = window.Vue.withCtx, h4 = window.Vue.openBlock, f4 = window.Vue.createBlock, w4 = {
  href: "",
  target: "_blank"
}, _4 = window.Codex.CdxDialog, v4 = {
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
      const l = g4("i18n");
      return h4(), f4(p4(_4), {
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
        default: m4(() => [
          $g(xg("p", null, null, 512), [
            [l, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          $g(xg("a", w4, null, 512), [
            [l, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title", "close-button-label"]);
    };
  }
};
const we = window.Vue.unref, S4 = window.Vue.resolveDirective, as = window.Vue.createElementVNode, Vg = window.Vue.withDirectives, is = window.Vue.toDisplayString, rs = window.Vue.openBlock, Wr = window.Vue.createElementBlock, Kr = window.Vue.createCommentVNode, lt = window.Vue.createVNode, kt = window.Vue.withCtx, Yr = window.Vue.createTextVNode, y4 = window.Vue.withModifiers, Eg = window.Vue.createBlock, b4 = window.Vue.Fragment, C4 = { class: "sx-translation-confirmer-body pb-4" }, k4 = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, x4 = ["textContent"], $4 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, V4 = ["href"], E4 = ["textContent"], Ra = window.Vue.computed, L4 = window.Vue.inject, Lg = window.Vue.ref, A4 = window.Vue.watchEffect, D4 = window.Vuex.useStore, Jr = window.Codex.CdxButton, T4 = window.Codex.CdxIcon, B4 = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = Ae(), o = D4();
    L4("colors");
    const { sectionSuggestion: s } = ze(), { targetLanguageAutonym: a } = ye(o), { sectionURLParameter: i } = B(), { logDashboardTranslationStartEvent: c } = Fi(), u = Ro(), { handlePrimaryButtonClick: d, translationConfirmationDialogOn: r } = d4(), l = Lg(!1), g = Lg(null), p = () => C(this, null, function* () {
      let X = !0;
      try {
        X = yield mt.checkUnreviewedTranslations();
      } catch (G) {
        mw.log.error(
          "Error while checking for user's unreviewed translations ",
          G
        );
      }
      X !== !0 && (l.value = !0, g.value = X.targetUrl);
    }), m = () => C(this, null, function* () {
      yield p(), !l.value && (c(), u());
    }), h = () => C(this, null, function* () {
      yield p(), !l.value && d();
    }), f = t;
    A4(() => {
      r.value && (f("open-translation-confirmation-dialog"), r.value = !1);
    });
    const {
      actionInformationMessageArgs: _,
      getActionButtonLabel: w,
      isProgressiveButton: y,
      targetArticlePath: S
    } = j$(), k = he(), x = Ra(
      () => k.i18n(w(!!i.value))
    ), L = Ra(
      () => k.i18n(..._.value)
    ), E = () => C(this, null, function* () {
      yield p(), !l.value && n.push({ name: "sx-section-selector" });
    }), T = Ra(() => {
      var X, G;
      return i.value && !!((G = (X = s.value) == null ? void 0 : X.sourceSections) != null && G.length);
    }), { targetPageExists: U } = fn(), M = Ra(() => !i.value && U.value && to);
    return (X, G) => {
      const pe = S4("i18n");
      return rs(), Wr(b4, null, [
        as("section", C4, [
          we(i) ? (rs(), Wr("section", k4, [
            Vg(as("h6", null, null, 512), [
              [pe, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            as("h5", {
              class: "ma-0",
              textContent: is(we(i))
            }, null, 8, x4)
          ])) : we(U) ? (rs(), Wr("section", $4, [
            lt(we(P), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: kt(() => [
                Vg(lt(we(b), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [pe, [we(a)], "cx-sx-existing-translation-status"]
                ]),
                lt(we(b), { shrink: "" }, {
                  default: kt(() => [
                    as("a", {
                      href: we(S),
                      target: "_blank"
                    }, [
                      lt(we(T4), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: we(qc)
                      }, null, 8, ["icon"])
                    ], 8, V4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            lt(we(P), { class: "ma-0" }, {
              default: kt(() => [
                lt(we(b), null, {
                  default: kt(() => [
                    as("span", {
                      textContent: is(L.value)
                    }, null, 8, E4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : Kr("", !0),
          lt(we(P), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: kt(() => [
              T.value ? (rs(), Eg(we(b), {
                key: 0,
                shrink: ""
              }, {
                default: kt(() => [
                  lt(we(Jr), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: y4(E, ["stop"])
                  }, {
                    default: kt(() => [
                      Yr(is(X.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : Kr("", !0),
              M.value ? (rs(), Eg(we(b), {
                key: 1,
                shrink: ""
              }, {
                default: kt(() => [
                  lt(we(Jr), {
                    size: "large",
                    onClick: m
                  }, {
                    default: kt(() => [
                      Yr(is(X.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : Kr("", !0),
              lt(we(b), { shrink: "" }, {
                default: kt(() => [
                  lt(we(Jr), {
                    weight: "primary",
                    size: "large",
                    action: we(y) ? "progressive" : "default",
                    onClick: h
                  }, {
                    default: kt(() => [
                      Yr(is(x.value), 1)
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
        lt(v4, {
          modelValue: l.value,
          "onUpdate:modelValue": G[0] || (G[0] = ($e) => l.value = $e),
          "target-url": g.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const Qr = window.Vue.unref, P4 = window.Vue.openBlock, F4 = window.Vue.createBlock, M4 = window.Vue.computed, cf = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedTargetLanguageCodes: t } = Ys(), {
      sourceLanguageURLParameter: n,
      targetLanguageURLParameter: o
    } = B(), { currentLanguageTitleGroup: s } = fn(), a = M4(
      () => {
        var d;
        return ((d = s.value) == null ? void 0 : d.titles.map((r) => r.lang)) || [];
      }
    ), i = xS(), c = (d) => i(d, o.value), u = (d) => i(n.value, d);
    return (d, r) => (P4(), F4(yi, {
      class: "sx-article-language-selector",
      "source-languages": a.value,
      "target-languages": Qr(t),
      "selected-source-language": Qr(n),
      "selected-target-language": Qr(o),
      "onUpdate:selectedSourceLanguage": c,
      "onUpdate:selectedTargetLanguage": u
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
};
const Te = window.Vue.unref, Zr = window.Vue.toDisplayString, tn = window.Vue.createElementVNode, It = window.Vue.createVNode, mo = window.Vue.withCtx, N4 = window.Vue.resolveDirective, U4 = window.Vue.withDirectives, I4 = window.Vue.normalizeClass, R4 = window.Vue.openBlock, z4 = window.Vue.createBlock, O4 = ["textContent"], j4 = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, H4 = ["textContent"], q4 = { class: "pe-3" }, G4 = ["textContent"], X4 = window.Codex.CdxButton, ls = window.Codex.CdxIcon, nn = window.Vue.computed, W4 = window.Vuex.useStore, K4 = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = W4(), n = he(), { currentSourcePage: o } = st(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: i
    } = B(), c = nn(() => t.state.suggestions.favorites || []), u = nn(
      () => c.value.some(
        (x) => i.value === x.title && s.value === x.sourceLanguage && a.value === x.targetLanguage
      )
    ), { markFavoriteSuggestion: d, removeFavoriteSuggestion: r } = Kc(), { translationSizeMessageArgs: l } = of(), g = () => d(
      i.value,
      s.value,
      a.value
    ), p = () => r(
      new Lo({
        title: i.value,
        sourceLanguage: s.value,
        targetLanguage: a.value
      })
    ), m = nn(
      () => u.value ? Ih : Rh
    ), h = nn(
      () => u.value ? p : g
    ), f = nn(
      () => K.getPageUrl(s.value || "", i.value || "")
    ), _ = nn(
      () => {
        var x;
        return (((x = o.value) == null ? void 0 : x.langLinksCount) || 0) + 1;
      }
    ), w = (x) => {
      const L = [
        { value: 1e9, suffix: "B" },
        // 1 billion
        { value: 1e6, suffix: "M" },
        // 1 million
        { value: 1e3, suffix: "K" }
        // 1 thousand
      ];
      for (let E = 0; E < L.length; E++)
        if (x >= L[E].value)
          return (x / L[E].value).toFixed(1).replace(/\.0$/, "") + L[E].suffix;
      return x.toString();
    }, y = nn(() => {
      var L;
      const x = Object.values(((L = o.value) == null ? void 0 : L.pageviews) || {}).reduce(
        (E, T) => E + T,
        0
      );
      return w(x);
    }), S = nn(() => l.value ? n.i18n(...l.value) : ""), k = nn(() => l.value ? l.value[2] < 15 : !1);
    return (x, L) => {
      const E = N4("i18n");
      return R4(), z4(Te(P), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: mo(() => [
          It(Te(b), null, {
            default: mo(() => [
              It(Te(P), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: mo(() => [
                  It(Te(b), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: f.value,
                    target: "_blank"
                  }, {
                    default: mo(() => [
                      tn("h5", {
                        class: "ma-0 me-1",
                        textContent: Zr(Te(i))
                      }, null, 8, O4),
                      It(Te(ls), {
                        size: "x-small",
                        icon: Te(qc)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  It(Te(b), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: mo(() => [
                      It(Te(X4), {
                        class: "px-0",
                        weight: "quiet",
                        action: u.value ? "progressive" : "default",
                        "aria-label": x.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: h.value
                      }, {
                        default: mo(() => [
                          It(Te(ls), { icon: m.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              tn("div", j4, [
                tn("div", null, [
                  tn("span", null, [
                    It(Te(ls), {
                      icon: Te(jh),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    tn("span", {
                      class: "pe-3",
                      textContent: Zr(_.value)
                    }, null, 8, H4)
                  ]),
                  tn("span", null, [
                    It(Te(ls), {
                      icon: Te(zh),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    U4(tn("span", q4, null, 512), [
                      [E, [y.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                tn("span", {
                  class: I4(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": k.value
                  }])
                }, [
                  It(Te(ls), {
                    icon: Te(AC),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  tn("span", {
                    textContent: Zr(S.value)
                  }, null, 8, G4)
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
const Y4 = window.Vue.resolveDirective, jn = window.Vue.createElementVNode, za = window.Vue.withDirectives, J4 = window.Vue.toDisplayString, Q4 = window.Vue.createTextVNode, el = window.Vue.unref, tl = window.Vue.withCtx, nl = window.Vue.openBlock, ol = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Z4 = { class: "pa-4" }, eV = { class: "flex pt-2" }, tV = window.Codex.CdxButton, nV = window.Vue.ref, oV = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = Ro(), a = Jc(), i = nV(!1), { currentTranslation: c } = Bt(), u = () => C(this, null, function* () {
      i.value = !0;
      let d = !1;
      try {
        d = yield mt.splitTranslation(
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
      const l = Y4("i18n");
      return nl(), ol(el(ht), {
        value: e.modelValue,
        persistent: i.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: d.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: tl(() => [
          jn("div", eV, [
            i.value ? (nl(), ol(el(et), { key: 1 })) : (nl(), ol(el(tV), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: u
            }, {
              default: tl(() => [
                Q4(J4(d.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: tl(() => [
          jn("div", Z4, [
            za(jn("p", null, null, 512), [
              [l, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            za(jn("p", null, null, 512), [
              [l, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            jn("p", null, [
              za(jn("strong", null, null, 512), [
                [l, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            za(jn("p", null, null, 512), [
              [l, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
}, sV = window.Vuex.useStore;
let Oa = [];
const Qc = () => {
  const e = sV();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || Oa.includes(o) ? Promise.resolve() : (Oa.push(o), no.fetchLanguageTitles(t, n).then((s) => {
      Oa = Oa.filter(
        (a) => a !== o
      ), s && e.commit("mediawiki/addLanguageTitleGroup", s);
    }));
  };
}, aV = window.Vue.ref, ho = aV(null), uf = () => {
  const e = () => C(void 0, null, function* () {
    var n, o;
    ho.value || (yield Ai.fetchCXServerToken().then((s) => {
      s.age <= 30 && (s.age = 3600);
      const a = Math.floor(Date.now() / 1e3);
      s.refreshAt = a + s.age - 30, ho.value = s;
    }).catch((s) => {
      if (s === "token-impossible") {
        const a = Math.floor(Date.now() / 1e3);
        ho.value = { jwt: "", refreshAt: a + 36e3 };
      }
    }));
    const t = Math.floor(Date.now() / 1e3);
    return ((n = ho.value) == null ? void 0 : n.refreshAt) <= t ? (ho.value = null, e()) : (o = ho.value) == null ? void 0 : o.jwt;
  });
  return e;
};
const Ag = window.Vue.resolveDirective, ja = window.Vue.createElementVNode, Dg = window.Vue.withDirectives, Cn = window.Vue.unref, Ha = window.Vue.withCtx, on = window.Vue.createVNode, sl = window.Vue.openBlock, Tg = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const iV = window.Vue.createBlock, rV = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, lV = { class: "mb-0" }, cV = { class: "sx-translation-confirmer__article-image flex justify-center" }, uV = ["src"], dV = { class: "ma-3" }, Bg = window.Vue.computed, gV = window.Vue.inject, pV = window.Vue.onBeforeUnmount, mV = window.Vue.ref, hV = window.Vuex.useStore, fV = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = hV(), { currentSourcePage: n } = st(), { previousRoute: o } = ye(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: i,
      sectionURLParameter: c,
      clearTranslationURLParameters: u
    } = B(), d = gV("breakpoints"), r = Bg(() => d.value.nextBreakpoint), l = Bg(
      () => {
        var y;
        return (y = n.value) == null ? void 0 : y.getImage(r.value);
      }
    ), { fetchTranslationsByStatus: g } = Io(), p = Qc();
    g("draft"), p(s.value, i.value), Yc(), uf()(), oh()(a.value);
    const f = Ae(), _ = () => {
      o.value ? f.push({ name: o.value }) : f.push({ name: "dashboard" });
    };
    pV(() => {
      const y = f.currentRoute.value.name;
      (y === "dashboard" || y === "sx-article-search") && u();
    });
    const w = mV(!1);
    return (y, S) => {
      const k = Ag("i18n"), x = Ag("i18n-html");
      return sl(), Tg("section", rV, [
        on(Cn(P), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Ha(() => [
            on(Cn(b), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Ha(() => [
                Dg(ja("h5", lV, null, 512), [
                  [k, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            on(Cn(b), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Ha(() => [
                on(Cn(Ne), {
                  class: "pa-0",
                  type: "icon",
                  icon: Cn(Xs),
                  "icon-size": 20,
                  onClick: _
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        ja("div", cV, [
          l.value ? (sl(), Tg("img", {
            key: 0,
            src: l.value
          }, null, 8, uV)) : (sl(), iV(Cn(Re), {
            key: 1,
            size: "120",
            icon: Cn(Lm),
            "icon-color": y.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        on(K4),
        on(cf),
        on(B4, {
          onOpenTranslationConfirmationDialog: S[0] || (S[0] = (L) => w.value = !0)
        }),
        on(Cn(P), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: Ha(() => [
            ja("p", dV, [
              Dg(ja("small", null, null, 512), [
                [x, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        on(oV, {
          modelValue: w.value,
          "onUpdate:modelValue": S[1] || (S[1] = (L) => w.value = L)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const wV = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: fV
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, _V = window.Vue.resolveComponent, vV = window.Vue.createVNode, SV = window.Vue.normalizeClass, yV = window.Vue.openBlock, bV = window.Vue.createElementBlock;
function CV(e, t, n, o, s, a) {
  const i = _V("sx-translation-confirmer");
  return yV(), bV("main", {
    class: SV(["sx-translation-confirmer-view", a.classes])
  }, [
    vV(i)
  ], 2);
}
const kV = /* @__PURE__ */ ne(wV, [["render", CV]]);
const xV = window.Vue.toDisplayString, Pg = window.Vue.unref, $V = window.Vue.createVNode, VV = window.Vue.createTextVNode, EV = window.Vue.createElementVNode, LV = window.Vue.openBlock, AV = window.Vue.createElementBlock, DV = { class: "sx-section-selector-view-article-item" }, TV = ["href"], BV = window.Codex.CdxIcon, Fg = {
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
    return (t, n) => (LV(), AV("span", DV, [
      EV("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        VV(xV(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        $V(Pg(BV), {
          size: "x-small",
          icon: Pg(qc)
        }, null, 8, ["icon"])
      ], 8, TV)
    ]));
  }
};
const PV = window.Vue.resolveDirective, qa = window.Vue.createElementVNode, al = window.Vue.withDirectives, Hn = window.Vue.unref, FV = window.Vue.toDisplayString, Ga = window.Vue.withCtx, cs = window.Vue.createVNode, MV = window.Vue.openBlock, NV = window.Vue.createElementBlock, UV = { class: "sx-section-selector__header pa-4" }, IV = { class: "sx-section-selector__header-text ma-0" }, RV = ["textContent"], zV = { class: "pt-0 ma-0" }, OV = { class: "ma-0" }, jV = window.Codex.CdxButton, HV = window.Codex.CdxIcon, qV = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = ze();
    return (n, o) => {
      const s = PV("i18n");
      return MV(), NV("div", UV, [
        cs(Hn(P), { class: "ma-0 pb-3" }, {
          default: Ga(() => [
            cs(Hn(b), null, {
              default: Ga(() => {
                var a;
                return [
                  al(qa("h6", IV, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  qa("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: FV((a = Hn(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, RV)
                ];
              }),
              _: 1
            }),
            cs(Hn(b), {
              shrink: "",
              class: "justify-end"
            }, {
              default: Ga(() => [
                cs(Hn(jV), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: Ga(() => [
                    cs(Hn(HV), { icon: Hn(Uo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        al(qa("h4", zV, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        al(qa("p", OV, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, GV = window.Vue.renderList, XV = window.Vue.Fragment, il = window.Vue.openBlock, Mg = window.Vue.createElementBlock, WV = window.Vue.renderSlot, Xa = window.Vue.unref, Ng = window.Vue.createVNode, Ug = window.Vue.withCtx, KV = window.Vue.createBlock, YV = { class: "sx-section-selector__sections-list ma-0 pa-0" }, JV = window.Codex.CdxButton, QV = window.Codex.CdxIcon, df = {
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
    return (t, n) => (il(), Mg("ul", YV, [
      (il(!0), Mg(XV, null, GV(e.sections, (o) => (il(), KV(Xa(P), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: Ug(() => [
          Ng(Xa(JV), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: Ug(() => [
              WV(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              Ng(Xa(QV), { icon: Xa(ea) }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["aria-label", "onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, ZV = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const e3 = window.Vue.resolveDirective, Wa = window.Vue.createElementVNode, rl = window.Vue.withDirectives, xt = window.Vue.unref, Ig = window.Vue.toDisplayString, fo = window.Vue.withCtx, ll = window.Vue.openBlock, Rg = window.Vue.createBlock;
window.Vue.createCommentVNode;
const us = window.Vue.createVNode, t3 = window.Vue.createTextVNode, n3 = window.Vue.createElementBlock, o3 = { class: "sx-section-selector__missing-sections py-2" }, s3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, a3 = ["lang", "dir", "textContent"], zg = window.Vue.computed, i3 = window.Codex.CdxButton, r3 = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = ze(), n = zg(
      () => {
        var s;
        return R.getAutonym((s = t.value) == null ? void 0 : s.targetLanguage);
      }
    ), o = zg(
      () => {
        var s;
        return Object.keys(((s = t.value) == null ? void 0 : s.missingSections) || {}).length === 0;
      }
    );
    return (s, a) => {
      const i = e3("i18n");
      return ll(), n3("section", o3, [
        rl(Wa("h4", s3, null, 512), [
          [i, [
            n.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        o.value ? (ll(), Rg(xt(P), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: fo(() => [
            us(xt(b), {
              class: "py-6 justify-center",
              innerHTML: xt(ZV)
            }, null, 8, ["innerHTML"]),
            us(xt(b), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: fo(() => [
                rl(Wa("h6", null, null, 512), [
                  [i, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            us(xt(b), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: fo(() => [
                rl(Wa("p", null, null, 512), [
                  [i, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            us(xt(b), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: fo(() => [
                us(xt(i3), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: a[1] || (a[1] = (c) => s.$emit("close"))
                }, {
                  default: fo(() => [
                    t3(Ig(s.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (ll(), Rg(df, {
          key: 0,
          sections: xt(t).orderedMissingSections,
          onSelectSection: a[0] || (a[0] = (c) => s.$emit("select-section", c))
        }, {
          default: fo(({ sourceSection: c }) => {
            var u, d;
            return [
              Wa("h5", {
                class: "ma-0",
                lang: (u = xt(t)) == null ? void 0 : u.sourceLanguage,
                dir: xt(R.getDir)((d = xt(t)) == null ? void 0 : d.sourceLanguage),
                textContent: Ig(c)
              }, null, 8, a3)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const l3 = window.Vue.resolveDirective, Ka = window.Vue.createElementVNode, c3 = window.Vue.withDirectives, qn = window.Vue.unref, Og = window.Vue.toDisplayString, u3 = window.Vue.withCtx, d3 = window.Vue.createVNode, g3 = window.Vue.openBlock, p3 = window.Vue.createElementBlock, m3 = { class: "sx-section-selector__present-sections py-2" }, h3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, f3 = { class: "sx-section-selector__present-section-button-content" }, w3 = ["lang", "dir", "textContent"], _3 = ["lang", "dir", "textContent"], v3 = window.Vue.computed, jg = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = ze(), n = v3(
      () => {
        var o;
        return R.getAutonym((o = t.value) == null ? void 0 : o.targetLanguage);
      }
    );
    return (o, s) => {
      var i;
      const a = l3("i18n");
      return g3(), p3("section", m3, [
        c3(Ka("h4", h3, null, 512), [
          [a, [
            n.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        d3(df, {
          sections: ((i = qn(t)) == null ? void 0 : i.orderedPresentSections) || [],
          onSelectSection: s[0] || (s[0] = (c) => o.$emit("select-section", c))
        }, {
          default: u3(({ sourceSection: c, targetSection: u }) => {
            var d, r, l, g;
            return [
              Ka("div", f3, [
                Ka("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (d = qn(t)) == null ? void 0 : d.sourceLanguage,
                  dir: qn(R.getDir)((r = qn(t)) == null ? void 0 : r.sourceLanguage),
                  textContent: Og(c)
                }, null, 8, w3),
                Ka("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (l = qn(t)) == null ? void 0 : l.targetLanguage,
                  dir: qn(R.getDir)((g = qn(t)) == null ? void 0 : g.targetLanguage),
                  textContent: Og(u)
                }, null, 8, _3)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const Be = window.Vue.createVNode, cl = window.Vue.openBlock, Hg = window.Vue.createBlock, qg = window.Vue.createCommentVNode, Pe = window.Vue.unref, S3 = window.Vue.resolveDirective, kn = window.Vue.createElementVNode, ds = window.Vue.withDirectives, sn = window.Vue.withCtx, y3 = window.Vue.normalizeClass, Gg = window.Vue.toDisplayString, Xg = window.Vue.createTextVNode, b3 = window.Vue.createElementBlock, C3 = { class: "sx-section-selector col-12 col-tablet-9 col-desktop-7 mx-auto" }, k3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, x3 = { class: "sx-section-selector__additional-consideration-title" }, $3 = { href: "#" }, V3 = { class: "sx-section-selector__additional-consideration-title" }, E3 = { href: "#" }, ul = window.Vue.computed, L3 = window.Vue.inject, A3 = window.Vuex.useStore, D3 = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = L3("breakpoints"), n = ul(() => t.value.desktopAndUp), o = A3(), { sectionSuggestion: s } = ze(), {
      sourceLanguage: a,
      targetLanguage: i,
      sourceLanguageAutonym: c,
      targetLanguageAutonym: u
    } = ye(o), d = ul(
      () => {
        var S;
        return K.getPageUrl(a.value, (S = s.value) == null ? void 0 : S.sourceTitle);
      }
    ), r = ul(
      () => {
        var S;
        return K.getPageUrl(i.value, (S = s.value) == null ? void 0 : S.targetTitle);
      }
    ), l = Ae(), { clearTranslationURLParameters: g, setSectionURLParam: p } = B(), m = () => {
      g(), l.push({ name: "dashboard" });
    }, { currentTranslation: h } = Bt(), f = Ro(), _ = Jc(), { selectPageSectionByTitle: w } = Mi(), y = (S) => {
      p(S), h.value ? (_(), f()) : (w(S), l.push({ name: "sx-content-comparator" }));
    };
    return (S, k) => {
      const x = S3("i18n");
      return cl(), b3("section", C3, [
        Be(qV, { onClose: m }),
        Be(cf),
        Be(Pe(P), {
          class: "ma-0",
          align: "stretch"
        }, {
          default: sn(() => [
            Be(Pe(b), {
              cols: "12",
              desktop: "8",
              class: "ma-0 pa-0"
            }, {
              default: sn(() => [
                Be(r3, {
                  onSelectSection: y,
                  onClose: m
                }),
                n.value ? qg("", !0) : (cl(), Hg(jg, {
                  key: 0,
                  onSelectSection: y
                })),
                kn("section", {
                  class: y3(["py-2", { "sx-section-selector__more-details--desktop": n.value }])
                }, [
                  ds(kn("h4", k3, null, 512), [
                    [x, [
                      Pe(u)
                    ], "cx-sx-section-selector-more-details-title"]
                  ]),
                  Be(Pe(P), {
                    class: "ma-0",
                    align: "start",
                    justify: "start"
                  }, {
                    default: sn(() => [
                      Be(Pe(b), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: sn(() => [
                          Be(Fg, {
                            path: d.value,
                            autonym: Pe(c)
                          }, null, 8, ["path", "autonym"])
                        ]),
                        _: 1
                      }),
                      Be(Pe(b), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: sn(() => [
                          Be(Fg, {
                            path: r.value,
                            autonym: Pe(u)
                          }, null, 8, ["path", "autonym"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ], 2),
                Be(Pe(P), {
                  class: "sx-section-selector__additional-considerations ma-0",
                  align: "stretch"
                }, {
                  default: sn(() => [
                    Be(Pe(b), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 pt-5 pb-4"
                    }, {
                      default: sn(() => [
                        kn("h6", x3, [
                          Be(Pe(Re), {
                            icon: Pe(p0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          Xg(" " + Gg(S.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                        ]),
                        ds(kn("p", null, null, 512), [
                          [x, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                        ]),
                        ds(kn("a", $3, null, 512), [
                          [x, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                        ])
                      ]),
                      _: 1
                    }),
                    Be(Pe(b), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 py-5"
                    }, {
                      default: sn(() => [
                        kn("h6", V3, [
                          Be(Pe(Re), {
                            icon: Pe(g0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          Xg(" " + Gg(S.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                        ]),
                        ds(kn("p", null, null, 512), [
                          [x, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                        ]),
                        ds(kn("a", E3, null, 512), [
                          [x, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
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
            n.value ? (cl(), Hg(Pe(b), {
              key: 0,
              desktop: "4",
              class: "ma-0 pa-0"
            }, {
              default: sn(() => [
                Be(jg, {
                  class: "sx-section-selector-section-list-present--sidebar fill-height p-0",
                  onSelectSection: y
                })
              ]),
              _: 1
            })) : qg("", !0)
          ]),
          _: 1
        })
      ]);
    };
  }
}, T3 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: D3
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, B3 = window.Vue.resolveComponent, P3 = window.Vue.createVNode, F3 = window.Vue.normalizeClass, M3 = window.Vue.openBlock, N3 = window.Vue.createElementBlock;
function U3(e, t, n, o, s, a) {
  const i = B3("sx-section-selector");
  return M3(), N3("main", {
    class: F3(["sx-section-selector-view", a.classes])
  }, [
    P3(i)
  ], 2);
}
const I3 = /* @__PURE__ */ ne(T3, [["render", U3]]), R3 = window.Vue.ref, gf = R3("expand"), z3 = (e) => {
  gf.value = e;
}, pf = () => ({
  existingSectionPublishOption: gf,
  setExistingSectionPublishOption: z3
}), gs = window.Vue.computed, O3 = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    sectionURLParameter: n
  } = B(), o = gs(
    () => R.getAutonym(e.value)
  ), s = gs(
    () => R.getAutonym(t.value)
  ), { sectionSuggestion: a } = ze(), { existingSectionPublishOption: i } = pf(), c = gs(
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
const Wg = window.Vue.unref, j3 = window.Vue.createVNode, H3 = window.Vue.openBlock, q3 = window.Vue.createElementBlock, G3 = { class: "sx-content-comparator__content-type-selector" }, X3 = window.Vue.watchEffect, W3 = {
  __name: "ContentTypeSelector",
  props: {
    selection: {
      type: String,
      required: !0
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = (i) => o("update:selection", i), a = O3();
    return X3(() => {
      a.value.map((c) => c.value).includes(n.selection) || s(a.value[0].value);
    }), (i, c) => (H3(), q3("div", G3, [
      j3(Wg(Gs), {
        items: Wg(a),
        active: e.selection,
        onSelect: s
      }, null, 8, ["items", "active"])
    ]));
  }
}, ps = window.Vue.computed, K3 = window.Vuex.useStore, ee = () => {
  const e = K3(), { currentSourcePage: t, currentTargetPage: n } = st(), { currentMTProvider: o } = ye(e), { sectionURLParameter: s } = B(), a = ps(() => {
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
}, ms = window.Vue.computed, Zc = () => {
  const { currentTargetPage: e } = st(), { sectionSuggestion: t } = ze(), { sectionURLParameter: n } = B(), o = ms(
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
  ), { sourceSection: i } = ee(), c = ms(() => {
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
const Ya = window.Vue.createVNode, Y3 = window.Vue.toDisplayString, J3 = window.Vue.createElementVNode, xn = window.Vue.unref, Ja = window.Vue.withCtx, dl = window.Vue.openBlock, gl = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Q3 = window.Vue.normalizeClass, Z3 = ["lang", "dir", "textContent"], Kg = window.Vue.ref, pl = window.Vue.computed, eE = window.Vue.onMounted, tE = {
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
    const n = e, o = t, s = Kg(!1), { sectionSuggestion: a } = ze(), { sectionURLParameter: i } = B(), c = pl(
      () => (i.value || "").replace(/ /g, "_")
    ), u = (m) => o("update:contentTypeSelection", m), { activeSectionTargetTitle: d, targetSectionAnchor: r } = Zc(), l = pl(() => {
      switch (n.contentTypeSelection) {
        case "source_section":
          return {
            title: i.value,
            path: `${K.getPageUrl(
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
            path: `${g.value}#${r.value}`
          };
      }
    }), g = pl(
      () => K.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), p = Kg(null);
    return eE(() => {
      new IntersectionObserver(
        ([h]) => {
          s.value = h.intersectionRect.height < h.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(p.value.$el);
    }), (m, h) => (dl(), gl(xn(P), {
      ref_key: "contentHeader",
      ref: p,
      class: Q3(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
      direction: "column",
      align: "stretch",
      reverse: s.value
    }, {
      default: Ja(() => [
        Ya(W3, {
          selection: e.contentTypeSelection,
          "onUpdate:selection": u
        }, null, 8, ["selection"]),
        Ya(xn(P), {
          justify: "between",
          class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
        }, {
          default: Ja(() => [
            Ya(xn(b), null, {
              default: Ja(() => [
                J3("h3", {
                  lang: l.value.lang,
                  dir: l.value.dir,
                  class: "ma-0 pa-0",
                  textContent: Y3(l.value.title)
                }, null, 8, Z3)
              ]),
              _: 1
            }),
            Ya(xn(b), { shrink: "" }, {
              default: Ja(() => [
                s.value ? (dl(), gl(xn(Ne), {
                  key: 0,
                  icon: xn(ki),
                  progressive: "",
                  label: m.$i18n(
                    "cx-sx-content-comparator-content-header-translate-button-label"
                  ),
                  onClick: h[0] || (h[0] = (f) => m.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label"])) : (dl(), gl(xn(Ne), {
                  key: 1,
                  class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                  icon: xn(Vm),
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
}, Qa = window.Vue.unref, Yg = window.Vue.createVNode, nE = window.Vue.openBlock, oE = window.Vue.createElementBlock, sE = { class: "sx-content-comparator__header-navigation flex items-center" }, aE = window.Vue.computed, iE = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = B(), o = aE(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = Mi(), a = () => {
      const c = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[c];
      s(u);
    }, i = () => {
      const c = (o.value + 1) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[c];
      s(u);
    };
    return (c, u) => (nE(), oE("div", sE, [
      Yg(Qa(Ne), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: Qa(l0),
        onClick: a
      }, null, 8, ["icon"]),
      Yg(Qa(Ne), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: Qa(r0),
        onClick: i
      }, null, 8, ["icon"])
    ]));
  }
};
const Jg = window.Vue.toDisplayString, rE = window.Vue.resolveDirective, ml = window.Vue.withDirectives, wo = window.Vue.openBlock, Za = window.Vue.createElementBlock, lE = window.Vue.createCommentVNode, cE = window.Vue.createTextVNode, Qg = window.Vue.createElementVNode, Rt = window.Vue.unref, uE = window.Vue.normalizeClass, hl = window.Vue.withCtx, fl = window.Vue.createVNode, Zg = window.Vue.createBlock, dE = { class: "sx-content-comparator-header__mapped-section" }, gE = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, pE = { key: 0 }, mE = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, hE = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, ep = window.Vue.computed, fE = {
  __name: "SXContentComparatorHeaderMappedSection",
  setup(e) {
    const { sectionSuggestion: t } = ze(), { activeSectionTargetTitle: n } = Zc(), o = he(), { existingSectionPublishOption: s, setExistingSectionPublishOption: a } = pf(), i = ep(
      () => s.value === "new"
    ), c = ep(
      () => o.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        R.getAutonym(t.value.targetLanguage)
      )
    );
    return (u, d) => {
      const r = rE("i18n");
      return wo(), Za("div", dE, [
        fl(Rt(P), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: hl(() => [
            fl(Rt(b), { grow: "" }, {
              default: hl(() => [
                Qg("h6", gE, [
                  cE(Jg(c.value) + " ", 1),
                  i.value ? ml((wo(), Za("span", pE, null, 512)), [
                    [r, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : lE("", !0)
                ]),
                Qg("h6", {
                  class: uE(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": i.value
                  }])
                }, Jg(Rt(n)), 3)
              ]),
              _: 1
            }),
            fl(Rt(b), { shrink: "" }, {
              default: hl(() => [
                i.value ? (wo(), Zg(Rt(Ne), {
                  key: 1,
                  class: "pa-0",
                  icon: Rt(f0),
                  type: "icon",
                  onClick: d[1] || (d[1] = (l) => Rt(a)("expand"))
                }, null, 8, ["icon"])) : (wo(), Zg(Rt(Ne), {
                  key: 0,
                  class: "pa-0",
                  icon: Rt($m),
                  type: "icon",
                  onClick: d[0] || (d[0] = (l) => Rt(a)("new"))
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        i.value ? ml((wo(), Za("p", hE, null, 512)), [
          [r, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ]) : ml((wo(), Za("p", mE, null, 512)), [
          [r, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ])
      ]);
    };
  }
};
const Le = window.Vue.unref, _o = window.Vue.createVNode, tp = window.Vue.toDisplayString, gn = window.Vue.createElementVNode, wE = window.Vue.normalizeClass, wl = window.Vue.withCtx, _E = window.Vue.resolveDirective, np = window.Vue.withDirectives, _l = window.Vue.openBlock, op = window.Vue.createBlock, sp = window.Vue.createCommentVNode, vE = window.Vue.createElementBlock, SE = { class: "sx-content-comparator__header pa-4" }, yE = { class: "row my-1 py-2 mx-0" }, bE = { class: "sx-content-comparator-header__titles grow" }, CE = ["lang", "dir"], kE = ["lang", "dir"], xE = { class: "py-2 mb-1" }, $E = /* @__PURE__ */ gn("br", null, null, -1), hs = window.Vue.computed, VE = window.Vue.inject, EE = {
  __name: "SXContentComparatorHeader",
  emits: ["close", "translation-button-clicked"],
  setup(e) {
    const { sectionURLParameter: t } = B(), { sourceSection: n } = ee(), { sectionSuggestion: o } = ze(), s = hs(
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
    ]), u = VE("breakpoints"), d = hs(() => u.value.mobile);
    return (r, l) => {
      const g = _E("i18n");
      return _l(), vE("div", SE, [
        _o(Le(Ne), {
          class: "py-2 pa-0",
          icon: Le(c0),
          label: r.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: l[0] || (l[0] = (p) => r.$emit("close"))
        }, null, 8, ["icon", "label"]),
        gn("div", yE, [
          gn("div", {
            class: wE(["flex grow", d.value ? "col-12" : "me-6"])
          }, [
            gn("div", bE, [
              gn("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: Le(o).sourceLanguage,
                dir: Le(R.getDir)(Le(o).sourceLanguage)
              }, tp(Le(o).sourceTitle), 9, CE),
              gn("h2", {
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: Le(o).sourceLanguage,
                dir: Le(R.getDir)(Le(o).sourceLanguage)
              }, tp(Le(t)), 9, kE)
            ]),
            _o(iE, { "section-source-titles": c.value }, null, 8, ["section-source-titles"])
          ], 2),
          gn("div", xE, [
            _o(Le(Ne), {
              icon: Le(ki),
              progressive: "",
              label: r.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !i.value,
              onClick: l[1] || (l[1] = (p) => r.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ])
        ]),
        s.value ? (_l(), op(Le(P), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: wl(() => [
            _o(Le(b), {
              shrink: "",
              class: "pe-2"
            }, {
              default: wl(() => [
                _o(Le(Re), { icon: Le(m0) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            _o(Le(b), { class: "ma-0" }, {
              default: wl(() => [
                np(gn("strong", null, null, 512), [
                  [g, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                $E,
                np(gn("span", null, null, 512), [
                  [g, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : sp("", !0),
        a.value ? (_l(), op(fE, { key: 1 })) : sp("", !0)
      ]);
    };
  }
};
const ap = window.Vue.toDisplayString, LE = window.Vue.createElementVNode, ip = window.Vue.openBlock, rp = window.Vue.createElementBlock, AE = window.Vue.createCommentVNode, DE = { class: "sx-content-comparator__new-section-placeholder mt-4 py-4 px-7" }, TE = ["textContent"], BE = ["textContent"], mf = {
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
    return (t, n) => (ip(), rp("section", DE, [
      LE("h5", {
        textContent: ap(e.placeholderTitle)
      }, null, 8, TE),
      e.placeholderSubtitle ? (ip(), rp("p", {
        key: 0,
        textContent: ap(e.placeholderSubtitle)
      }, null, 8, BE)) : AE("", !0)
    ]));
  }
}, PE = window.Vue.computed, FE = window.Vue.createApp, ME = window.Vuex.useStore, NE = () => {
  const e = ME(), { sectionSuggestion: t } = ze(), { currentTargetPage: n } = st(), o = he(), s = () => FE(
    mf,
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
  return PE(() => {
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
const vl = window.Vue.createVNode, Xe = window.Vue.unref, vo = window.Vue.openBlock, lp = window.Vue.createBlock, cp = window.Vue.createCommentVNode, ei = window.Vue.createElementVNode, Sl = window.Vue.Fragment, ti = window.Vue.createElementBlock, UE = { class: "sx-content-comparator col-12 col-tablet-9 col-desktop-7 mx-auto" }, IE = { class: "sx-content-comparator__source-content" }, RE = ["lang", "dir", "innerHTML"], zE = ["lang", "dir", "innerHTML"], OE = ["innerHTML"], jE = window.Vue.ref, HE = window.Vue.computed, qE = window.Vue.watch, GE = window.Vuex.useStore, XE = {
  __name: "SXContentComparator",
  setup(e) {
    GE();
    const t = Ae(), n = jE("source_section"), { logDashboardTranslationStartEvent: o } = Fi(), s = Ro(), a = () => t.push({ name: "sx-section-selector" }), i = () => {
      o(), s();
    }, {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u,
      pageURLParameter: d,
      sectionURLParameter: r
    } = B(), { activeSectionTargetTitle: l, sourceSectionContent: g, targetSectionContent: p } = Zc(), m = NE(), { sectionSuggestion: h } = ze(), f = HE(() => h.value.targetTitle), _ = lf();
    return qE(
      f,
      () => _(
        u.value,
        c.value,
        f.value
      ),
      { immediate: !0 }
    ), (w, y) => (vo(), ti("section", UE, [
      vl(EE, {
        onTranslationButtonClicked: i,
        onClose: a
      }),
      vl(tE, {
        "content-type-selection": n.value,
        "onUpdate:contentTypeSelection": y[0] || (y[0] = (S) => n.value = S),
        onTranslationButtonClicked: i
      }, null, 8, ["content-type-selection"]),
      ei("section", IE, [
        n.value === "source_section" ? (vo(), ti(Sl, { key: 0 }, [
          Xe(g) ? cp("", !0) : (vo(), lp(Xe(et), { key: 0 })),
          ei("section", {
            lang: Xe(c),
            dir: Xe(R.getDir)(Xe(c)),
            class: "pt-2 px-4",
            innerHTML: Xe(g)
          }, null, 8, RE)
        ], 64)) : n.value === "target_article" ? (vo(), ti(Sl, { key: 1 }, [
          Xe(m) ? cp("", !0) : (vo(), lp(Xe(et), { key: 0 })),
          ei("article", {
            lang: Xe(u),
            dir: Xe(R.getDir)(Xe(u)),
            class: "px-4",
            innerHTML: Xe(m)
          }, null, 8, zE)
        ], 64)) : (vo(), ti(Sl, { key: 2 }, [
          ei("section", {
            class: "pa-4",
            innerHTML: Xe(p)
          }, null, 8, OE),
          vl(mf, {
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
}, WE = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: XE
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, KE = window.Vue.resolveComponent, YE = window.Vue.createVNode, JE = window.Vue.normalizeClass, QE = window.Vue.openBlock, ZE = window.Vue.createElementBlock;
function e5(e, t, n, o, s, a) {
  const i = KE("sx-content-comparator");
  return QE(), ZE("main", {
    class: JE(["sx-content-comparator-view", a.classes])
  }, [
    YE(i)
  ], 2);
}
const t5 = /* @__PURE__ */ ne(WE, [["render", e5]]);
const n5 = window.Vue.resolveDirective, fs = window.Vue.createElementVNode, up = window.Vue.withDirectives, ni = window.Vue.unref, yl = window.Vue.createVNode, dp = window.Vue.toDisplayString, gp = window.Vue.createTextVNode, ws = window.Vue.withCtx, o5 = window.Vue.openBlock, s5 = window.Vue.createBlock, a5 = { class: "mw-ui-dialog__header px-4 py-3" }, i5 = { class: "mw-ui-dialog__header-title" }, r5 = { class: "pa-4" }, l5 = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, pp = window.Codex.CdxButton, c5 = {
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
      const u = n5("i18n");
      return o5(), s5(ni(ht), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: ws(() => [
          fs("div", a5, [
            up(fs("span", i5, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: ws(() => [
          fs("div", l5, [
            yl(ni(pp), {
              weight: "quiet",
              onClick: s
            }, {
              default: ws(() => [
                gp(dp(i.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            yl(ni(pp), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: ws(() => [
                gp(dp(i.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: ws(() => [
          yl(ni(Ci)),
          fs("div", r5, [
            up(fs("span", null, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, u5 = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => Zn(a)
  );
  return s && Fm(s) ? mt.parseTemplateWikitext(
    Bm(s),
    n,
    t
  ) : Promise.resolve(null);
}, hf = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => Zn(a)
  );
  return s ? mt.parseTemplateWikitext(
    Bm(s),
    n,
    t
  ) : Promise.resolve(null);
}, d5 = window.Vuex.useStore, eu = () => {
  const e = d5(), { sourceSection: t } = ee(), { getCurrentTitleByLanguage: n } = fn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = B(), a = uf(), i = (r, l, g) => {
    if (r === 0) {
      t.value.proposedTitleTranslations[l] = g;
      return;
    }
    const p = t.value.getContentTranslationUnitById(r);
    p instanceof Qe ? p.blockTemplateProposedTranslations[l] = g : p instanceof Bn && p.addProposedTranslation(l, g);
  }, c = (r, l) => C(void 0, null, function* () {
    if (!e.getters["mediawiki/isValidProviderForTranslation"](o.value, s.value, r))
      return "";
    try {
      const p = yield a();
      return yield mt.fetchSegmentTranslation(
        o.value,
        s.value,
        r,
        l,
        p
      );
    } catch (p) {
      return mw.log.error("Error while translating segment", p), "";
    }
  }), u = (r, l) => C(void 0, null, function* () {
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
    p instanceof Qe && (p.setBlockTemplateAdaptationInfoByHtml(
      l,
      m
    ), m = (yield u5(
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
}, g5 = window.Vuex.useStore, p5 = () => {
  const { sourceSection: e } = ee(), t = g5(), { translateTranslationUnitById: n } = eu();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
const m5 = window.Vue.resolveDirective, dt = window.Vue.createElementVNode, oi = window.Vue.withDirectives, We = window.Vue.unref, bl = window.Vue.createVNode, $n = window.Vue.withCtx, h5 = window.Vue.renderList, f5 = window.Vue.Fragment, Cl = window.Vue.openBlock, w5 = window.Vue.createElementBlock, _5 = window.Vue.toDisplayString, mp = window.Vue.createBlock, v5 = window.Vue.createCommentVNode, S5 = { class: "mw-ui-dialog__header pa-4" }, y5 = { class: "row ma-0 py-2" }, b5 = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, C5 = { class: "mb-0" }, k5 = { class: "col shrink justify-center" }, x5 = { class: "pb-2 mb-0" }, $5 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, V5 = ["dir", "lang", "innerHTML"], E5 = ["textContent"], L5 = ["innerHTML"], A5 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, D5 = /* @__PURE__ */ dt("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), kl = window.Vue.computed, T5 = window.Vuex.useStore, B5 = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = te.EMPTY_TEXT_PROVIDER_KEY, s = te.ORIGINAL_TEXT_PROVIDER_KEY, a = T5(), {
      sourceSection: i,
      isSectionTitleSelected: c,
      selectedContentTranslationUnit: u
    } = ee(), {
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
    ), m = p5(), h = (w) => {
      m(w), _();
    }, f = te.getMTProviderLabel, _ = () => n("update:active", !1);
    return (w, y) => {
      const S = m5("i18n");
      return e.active ? (Cl(), mp(We(ht), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: $n(() => [
          dt("div", S5, [
            dt("div", y5, [
              dt("div", b5, [
                oi(dt("h4", C5, null, 512), [
                  [S, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              dt("div", k5, [
                bl(We(Ne), {
                  type: "icon",
                  icon: We(Xs),
                  class: "pa-0",
                  onClick: _
                }, null, 8, ["icon"])
              ])
            ]),
            oi(dt("h6", x5, null, 512), [
              [S, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: $n(() => [
          bl(We(Ze), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: y[0] || (y[0] = (k) => h(We(s)))
          }, {
            header: $n(() => [
              oi(dt("h5", $5, null, 512), [
                [S, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: $n(() => [
              dt("p", {
                dir: We(R.getDir)(We(d)),
                lang: We(d),
                innerHTML: p.value[We(s)]
              }, null, 8, V5)
            ]),
            _: 1
          }),
          (Cl(!0), w5(f5, null, h5(g.value, (k) => (Cl(), mp(We(Ze), {
            key: k,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (x) => h(k)
          }, {
            header: $n(() => [
              dt("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: _5(We(f)(k))
              }, null, 8, E5)
            ]),
            default: $n(() => [
              dt("p", {
                innerHTML: p.value[k]
              }, null, 8, L5)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          bl(We(Ze), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: y[1] || (y[1] = (k) => h(We(o)))
          }, {
            header: $n(() => [
              oi(dt("h5", A5, null, 512), [
                [S, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: $n(() => [
              D5
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : v5("", !0);
    };
  }
}, P5 = window.Vuex.useStore, zo = () => {
  const { sourceSection: e } = ee(), t = P5(), { translateTranslationUnitById: n } = eu(), { currentMTProvider: o } = ye(t), s = (c) => C(void 0, null, function* () {
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
const F5 = window.Vue.toDisplayString, xl = window.Vue.createElementVNode, $l = window.Vue.unref, M5 = window.Vue.createVNode, N5 = window.Vue.normalizeClass, U5 = window.Vue.withCtx, I5 = window.Vue.openBlock, R5 = window.Vue.createBlock, z5 = ["href"], O5 = ["textContent"], j5 = ["innerHTML"], So = window.Vue.computed, H5 = window.Vuex.useStore, hp = "sx-sentence-selector__section-title", q5 = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const t = H5(), { sourceSection: n, isSectionTitleSelected: o } = ee(), { currentSourcePage: s } = st(), { sourceLanguage: a } = ye(t), i = So(() => {
      var m;
      return (m = s.value) == null ? void 0 : m.title;
    }), c = So(
      () => {
        var m;
        return ((m = n.value) == null ? void 0 : m.title) || i.value;
      }
    ), u = So(
      () => K.getPageUrl(a.value, i.value)
    ), d = So(
      () => {
        var m;
        return !!((m = n.value) != null && m.translatedTitle);
      }
    ), r = So(
      () => d.value ? "translated" : "selected"
    ), l = So(() => {
      const m = [hp];
      return o.value && m.push(`${hp}--${r.value}`), m;
    }), { selectTranslationUnitById: g } = zo(), p = () => g(0);
    return (m, h) => (I5(), R5($l(b), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: U5(() => [
        xl("a", {
          href: u.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          xl("strong", {
            textContent: F5(i.value)
          }, null, 8, O5),
          M5($l(Re), {
            icon: $l(Vm),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, z5),
        xl("h2", {
          class: N5(["pa-0 ma-0", l.value]),
          onClick: p,
          innerHTML: c.value
        }, null, 10, j5)
      ]),
      _: 1
    }));
  }
};
const zt = window.Vue.unref, _s = window.Vue.createVNode, si = window.Vue.withCtx, fp = window.Vue.toDisplayString, wp = window.Vue.createTextVNode, G5 = window.Vue.openBlock, X5 = window.Vue.createBlock, W5 = window.Vue.computed, Vl = window.Codex.CdxButton, _p = window.Codex.CdxIcon, ff = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = ee(), s = W5(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, i) => (G5(), X5(zt(P), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: si(() => [
        _s(zt(Vl), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: zt(n),
          onClick: i[0] || (i[0] = (c) => a.$emit("select-previous-segment"))
        }, {
          default: si(() => [
            _s(zt(_p), {
              class: "me-1",
              icon: zt(Gc)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        _s(zt(Vl), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !zt(o),
          onClick: i[1] || (i[1] = (c) => a.$emit("apply-translation"))
        }, {
          default: si(() => [
            wp(fp(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        _s(zt(Vl), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: i[2] || (i[2] = (c) => a.$emit("skip-translation"))
        }, {
          default: si(() => [
            wp(fp(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            _s(zt(_p), {
              class: "ms-1",
              size: "small",
              icon: zt(ea)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const Gn = window.Vue.unref, K5 = window.Vue.toDisplayString, vs = window.Vue.createVNode, ai = window.Vue.withCtx, Y5 = window.Vue.openBlock, J5 = window.Vue.createBlock, El = window.Vue.computed, Q5 = window.Vuex.useStore, Z5 = window.Codex.CdxButton, eL = window.Codex.CdxIcon, tL = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = Q5(), n = El(() => t.state.application.currentMTProvider), o = he(), s = El(() => ({
      [te.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [te.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = El(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        te.getMTProviderLabel(n.value)
      )
    );
    return (i, c) => (Y5(), J5(Gn(b), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: ai(() => [
        vs(Gn(P), { class: "ma-0 ps-5 pb-4" }, {
          default: ai(() => [
            vs(Gn(b), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: K5(a.value)
            }, null, 8, ["textContent"]),
            vs(Gn(b), {
              shrink: "",
              class: "pe-5"
            }, {
              default: ai(() => [
                vs(Gn(Z5), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": i.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: c[0] || (c[0] = (u) => i.$emit("configure-options"))
                }, {
                  default: ai(() => [
                    vs(Gn(eL), {
                      class: "pa-0",
                      icon: Gn(Hc)
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
const $t = window.Vue.unref, Vn = window.Vue.createVNode, nL = window.Vue.resolveDirective, vp = window.Vue.createElementVNode, oL = window.Vue.withDirectives, Sp = window.Vue.toDisplayString, yp = window.Vue.createTextVNode, Ss = window.Vue.withCtx, sL = window.Vue.openBlock, aL = window.Vue.createElementBlock, iL = { class: "mt-retry-body pb-5" }, rL = { class: "retry-body__message" }, bp = window.Codex.CdxButton, Ll = window.Codex.CdxIcon, lL = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = nL("i18n");
      return sL(), aL("div", iL, [
        vp("div", rL, [
          Vn($t(Ll), {
            class: "me-2",
            icon: $t(Mh)
          }, null, 8, ["icon"]),
          oL(vp("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        Vn($t(P), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: Ss(() => [
            Vn($t(b), { cols: "6" }, {
              default: Ss(() => [
                Vn($t(bp), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: Ss(() => [
                    Vn($t(Ll), {
                      class: "me-1",
                      icon: $t(Hh)
                    }, null, 8, ["icon"]),
                    yp(" " + Sp(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Vn($t(b), { cols: "6" }, {
              default: Ss(() => [
                Vn($t(bp), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: Ss(() => [
                    Vn($t(Ll), {
                      class: "me-1",
                      icon: $t(FC)
                    }, null, 8, ["icon"]),
                    yp(" " + Sp(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const yo = window.Vue.createVNode, Ke = window.Vue.unref, ys = window.Vue.openBlock, cL = window.Vue.createElementBlock, uL = window.Vue.createCommentVNode, ii = window.Vue.createBlock, dL = window.Vue.normalizeClass, gL = window.Vue.normalizeStyle, bs = window.Vue.withCtx, pL = window.Vue.toDisplayString, mL = window.Vue.createTextVNode, hL = window.Vue.normalizeProps, fL = window.Vue.guardReactiveProps, wL = ["lang", "dir", "innerHTML"], Al = window.Vue.ref, _L = window.Vue.onMounted, vL = window.Vue.onBeforeUnmount, Dl = window.Vue.computed, SL = window.Vue.nextTick, yL = window.Vuex.useStore, bL = window.Codex.CdxButton, CL = window.Codex.CdxIcon, kL = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = Al(0), n = Al(null), o = Al(null), s = yL(), { currentMTProvider: a } = ye(s), { targetLanguageURLParameter: i } = B(), { sourceSection: c, currentProposedTranslation: u } = ee(), d = Dl(
      () => {
        var m, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (m = c.value) == null ? void 0 : m.selectedTranslationUnitId
        );
      }
    ), r = Dl(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), l = Dl(
      () => !!u.value || a.value === te.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    _L(() => C(this, null, function* () {
      yield SL(), g(), p.observe(n.value.$el), p.observe(o.value.$el);
    })), vL(() => {
      p.unobserve(n.value.$el), p.unobserve(o.value.$el);
    });
    const p = new ResizeObserver(() => g());
    return (m, h) => (ys(), ii(Ke(Ze), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: bs(() => [
        yo(Ke(P), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: bs(() => [
            yo(tL, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => m.$emit("configure-options"))
            }, null, 512),
            yo(Ke(b), {
              class: dL(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !l.value && d.value
              }]),
              style: gL(l.value ? r.value : null)
            }, {
              default: bs(() => [
                l.value ? (ys(), cL("section", {
                  key: 0,
                  lang: Ke(i),
                  dir: Ke(R.getDir)(Ke(i)),
                  innerHTML: Ke(u)
                }, null, 8, wL)) : d.value ? (ys(), ii(Ke(et), { key: 1 })) : (ys(), ii(lL, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (f) => m.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (f) => m.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            yo(Ke(b), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: bs(() => [
                l.value || d.value ? (ys(), ii(Ke(bL), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !l.value,
                  onClick: h[3] || (h[3] = (f) => m.$emit("edit-translation", Ke(u)))
                }, {
                  default: bs(() => [
                    yo(Ke(CL), {
                      class: "me-1",
                      icon: Ke(jc)
                    }, null, 8, ["icon"]),
                    mL(" " + pL(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : uL("", !0),
                yo(ff, hL(fL(m.$attrs)), null, 16)
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
}, xL = window.Vue.computed, $L = (e) => xL(() => {
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
const VL = window.Vue.unref, EL = window.Vue.normalizeClass, LL = window.Vue.openBlock, AL = window.Vue.createElementBlock, DL = ["innerHTML"], TL = window.Vue.onMounted, BL = window.Vue.ref, PL = window.Vue.computed, FL = {
  __name: "SubSection",
  props: {
    subSection: {
      type: Qe,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = BL(null), a = $L(n.subSection);
    TL(() => {
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
    const { selectTranslationUnitById: i } = zo(), c = (d) => {
      if (d.selected) {
        o("bounce-translation");
        return;
      }
      i(d.id);
    }, u = PL(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (d, r) => (LL(), AL("div", {
      ref_key: "subSectionRoot",
      ref: s,
      class: EL(["sx-sentence-selector__subsection", u.value]),
      innerHTML: VL(a)
    }, null, 10, DL));
  }
};
const Cp = window.Vue.unref, kp = window.Vue.createVNode, xp = window.Vue.normalizeStyle, ML = window.Vue.openBlock, NL = window.Vue.createElementBlock, $p = window.Vue.computed, wf = {
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
    const t = e, n = $p(() => ({ "--size": t.size })), o = $p(
      () => !t.isTemplateAdapted || t.percentage === 0 ? Em : _i
    );
    return (s, a) => (ML(), NL("div", {
      class: "block-template-status-indicator",
      style: xp(n.value)
    }, [
      kp(Cp(e_), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      kp(Cp(Re), {
        icon: o.value,
        size: e.size / 2,
        style: xp({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
}, Cs = window.Vue.openBlock, ri = window.Vue.createBlock;
window.Vue.createCommentVNode;
const an = window.Vue.unref, bo = window.Vue.withCtx, ks = window.Vue.createVNode, Tl = window.Vue.toDisplayString, Bl = window.Vue.createElementVNode, UL = window.Vue.renderList, IL = window.Vue.Fragment, RL = window.Vue.createElementBlock, zL = { class: "pa-4" }, OL = ["textContent"], jL = ["textContent"], HL = window.Vuex.useStore, li = window.Vue.computed, qL = {
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
    const t = e, { targetLanguageAutonym: n } = ye(HL()), o = li(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), s = he(), a = li(() => {
      let u;
      return t.targetTemplateExists ? t.isTemplateAdapted ? o.value < 100 ? u = "cx-sx-block-template-mapping-status-title-partially-template" : u = "cx-sx-block-template-mapping-status-title-fully-template" : u = "cx-sx-block-template-mapping-status-title-unadapted-template" : u = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(u);
    }), i = li(() => {
      let u;
      return !t.targetTemplateExists || !t.isTemplateAdapted ? u = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? u = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : u = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(u);
    }), c = li(() => {
      let u = [];
      if (!t.targetTemplateExists)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            n.value
          ),
          icon: S0,
          color: gt.gray500
        });
      else if (!t.isTemplateAdapted)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            t.sourceParamsCount
          ),
          icon: Xs,
          color: gt.gray500
        });
      else if (o.value < 100)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            t.targetParamsCount,
            t.sourceParamsCount
          ),
          icon: _i,
          color: gt.blue600
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
          color: gt.blue600
        });
      }
      return t.mandatoryMissingParamsCount ? u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          t.mandatoryMissingParamsCount,
          n.value
        ),
        icon: ki,
        color: gt.gray500
      }) : t.targetTemplateExists && t.isTemplateAdapted && t.optionalMissingParamsCount && u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          t.optionalMissingParamsCount,
          n.value
        ),
        icon: n0,
        color: gt.gray500
      }), u;
    });
    return (u, d) => (Cs(), ri(an(ht), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: u.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: d[0] || (d[0] = (r) => u.$emit("update:active", r))
    }, {
      header: bo(() => [
        ks(an(P), {
          justify: "center",
          class: "mt-4"
        }, {
          default: bo(() => [
            ks(an(b), { shrink: "" }, {
              default: bo(() => [
                e.targetTemplateExists ? (Cs(), ri(wf, {
                  key: 0,
                  percentage: o.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (Cs(), ri(an(Re), {
                  key: 1,
                  icon: an(o0)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: bo(() => [
        Bl("div", zL, [
          Bl("h3", {
            textContent: Tl(a.value)
          }, null, 8, OL),
          Bl("p", {
            class: "mt-6 text-small",
            textContent: Tl(i.value)
          }, null, 8, jL),
          (Cs(!0), RL(IL, null, UL(c.value, (r, l) => (Cs(), ri(an(P), {
            key: l,
            align: "start",
            class: "mt-4"
          }, {
            default: bo(() => [
              ks(an(b), { shrink: "" }, {
                default: bo(() => [
                  ks(an(Re), {
                    class: "me-2",
                    icon: r.icon,
                    "icon-color": r.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              ks(an(b), {
                textContent: Tl(r.text)
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
const xe = window.Vue.unref, Fe = window.Vue.createVNode, Ot = window.Vue.withCtx, Pl = window.Vue.toDisplayString, Vp = window.Vue.createTextVNode, GL = window.Vue.resolveDirective, Ep = window.Vue.withDirectives, Lp = window.Vue.createElementVNode, XL = window.Vue.normalizeClass, ci = window.Vue.openBlock, Ap = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Dp = window.Vue.createBlock, WL = window.Vue.normalizeProps, KL = window.Vue.guardReactiveProps, YL = { class: "block-template-adaptation-card__container pa-4" }, JL = ["textContent"], QL = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, He = window.Vue.computed, ZL = window.Vue.ref, eA = window.Vuex.useStore, Tp = window.Codex.CdxButton, Bp = window.Codex.CdxIcon, tA = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = eA(), { targetLanguageAutonym: n, currentMTProvider: o } = ye(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = ee(), i = He(() => {
      var T;
      return ((T = s.value) == null ? void 0 : T.blockTemplateTranslatedContent) || a.value;
    }), c = He(
      () => {
        var E;
        return (E = s.value) == null ? void 0 : E.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), u = He(
      () => {
        var E;
        return !((E = t.state.application.mtRequestsPending) != null && E.includes(
          s.value.id
        ));
      }
    ), d = he(), r = He(
      // Strip HTML comments and return
      () => {
        var E, T;
        return ((T = (E = s.value) == null ? void 0 : E.sourceBlockTemplateName) == null ? void 0 : T.replace(
          /<\!--.*?-->/g,
          ""
        )) || d.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), l = He(
      () => {
        var E, T;
        return (T = (E = s.value) == null ? void 0 : E.blockTemplateAdaptationInfo) == null ? void 0 : T[o.value];
      }
    ), g = He(
      () => {
        var E, T;
        return ((E = l.value) == null ? void 0 : E.adapted) || !!((T = l.value) != null && T.partial);
      }
    ), p = He(() => l.value ? "block-template-adaptation-card__body--" + (g.value ? "success" : "warning") : null), m = He(() => l.value ? g.value ? d.i18n("sx-block-template-adaptation-card-edit-button-label") : d.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), h = He(
      () => {
        var E;
        return Object.keys(((E = s.value) == null ? void 0 : E.sourceTemplateParams) || {}).length;
      }
    ), f = He(() => {
      var T;
      const E = (T = s.value) == null ? void 0 : T.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(E || {});
    }), _ = He(() => f.value.length), w = He(() => {
      const E = x.value;
      return h.value + E === 0 ? 100 : _.value / (h.value + E) * 100 || 0;
    }), y = ZL(!1), S = () => {
      y.value = !0;
    }, k = (E) => E.filter((T) => !f.value.includes(T)), x = He(() => {
      var T;
      const E = ((T = l.value) == null ? void 0 : T.mandatoryTargetParams) || [];
      return k(E).length;
    }), L = He(() => {
      var T;
      const E = ((T = l.value) == null ? void 0 : T.optionalTargetParams) || [];
      return k(E).length;
    });
    return (E, T) => {
      const U = GL("i18n");
      return ci(), Dp(xe(Ze), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: Ot(() => [
          Lp("div", YL, [
            Fe(xe(P), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: Ot(() => [
                Fe(xe(b), { shrink: "" }, {
                  default: Ot(() => [
                    Fe(xe(Bp), {
                      icon: xe(MC),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                Fe(xe(b), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: Ot(() => [
                    Vp(Pl(r.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            c.value ? (ci(), Ap("div", {
              key: 0,
              class: XL(["pa-4 mb-4", p.value])
            }, [
              Fe(xe(P), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: Ot(() => [
                  Ep(Fe(xe(b), { tag: "h5" }, null, 512), [
                    [U, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  Fe(xe(b), { shrink: "" }, {
                    default: Ot(() => [
                      Fe(wf, {
                        percentage: w.value,
                        size: 20,
                        "is-template-adapted": g.value,
                        "stroke-width": 2,
                        onClick: S
                      }, null, 8, ["percentage", "is-template-adapted"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Lp("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: Pl(c.value)
              }, null, 8, JL),
              Fe(xe(Tp), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: T[0] || (T[0] = (M) => E.$emit("edit-translation", i.value))
              }, {
                default: Ot(() => [
                  Vp(Pl(m.value), 1)
                ]),
                _: 1
              })
            ], 2)) : u.value ? (ci(), Ap("div", QL, [
              Fe(xe(P), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: Ot(() => [
                  Ep(Fe(xe(b), { tag: "h5" }, null, 512), [
                    [U, [
                      xe(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  Fe(xe(b), { shrink: "" }, {
                    default: Ot(() => [
                      Fe(xe(Tp), {
                        weight: "quiet",
                        "aria-label": E.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: Ot(() => [
                          Fe(xe(Bp), {
                            icon: xe(BC),
                            onClick: S
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
            ])) : (ci(), Dp(xe(et), { key: 2 }))
          ]),
          Fe(ff, WL(KL(E.$attrs)), null, 16),
          Fe(qL, {
            active: y.value,
            "onUpdate:active": T[1] || (T[1] = (M) => y.value = M),
            "source-params-count": h.value,
            "target-params-count": _.value,
            "mandatory-missing-params-count": x.value,
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
const nA = window.Vue.unref, oA = window.Vue.createVNode, sA = window.Vue.openBlock, aA = window.Vue.createElementBlock, iA = { class: "translated-segment-card-header" }, rA = window.Vue.computed, lA = {
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
    const n = t, { isSectionTitleSelected: o } = ee(), s = he(), a = rA(() => [
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
    return (c, u) => (sA(), aA("div", iA, [
      oA(nA(Gs), {
        items: a.value,
        active: e.selection,
        onSelect: i
      }, null, 8, ["items", "active"])
    ]));
  }
};
const En = window.Vue.unref, ui = window.Vue.createVNode, Fl = window.Vue.withCtx, cA = window.Vue.openBlock, uA = window.Vue.createBlock, dA = window.Vue.computed, Pp = window.Codex.CdxButton, Fp = window.Codex.CdxIcon, gA = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "skip-translation"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = ee(), o = dA(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (cA(), uA(En(P), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: Fl(() => [
        ui(En(Pp), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: En(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (i) => s.$emit("select-previous-segment"))
        }, {
          default: Fl(() => [
            ui(En(Fp), { icon: En(Gc) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        ui(En(Pp), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (i) => s.$emit("skip-translation"))
        }, {
          default: Fl(() => [
            ui(En(Fp), { icon: En(ea) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
};
const pA = window.Vue.useCssVars, Me = window.Vue.createVNode, Mp = window.Vue.resolveDirective, mA = window.Vue.createElementVNode, Ml = window.Vue.withDirectives, me = window.Vue.unref, hA = window.Vue.normalizeStyle, di = window.Vue.openBlock, Np = window.Vue.createElementBlock, fA = window.Vue.createCommentVNode, wA = window.Vue.normalizeClass, ct = window.Vue.withCtx, _A = window.Vue.toDisplayString, vA = window.Vue.createTextVNode, Up = window.Vue.createBlock, SA = window.Vue.normalizeProps, yA = window.Vue.guardReactiveProps, rn = window.Vue.computed, bA = window.Vue.ref, CA = window.Vue.inject, kA = window.Vuex.useStore, xA = window.Codex.CdxButton, Nl = window.Codex.CdxIcon, $A = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    pA((w) => ({
      "4929555c": _.value
    }));
    const t = bA("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = ee(), { targetLanguage: a } = ye(kA()), i = rn(() => t.value === "sentence"), c = rn(
      () => n.value.subSections.find(
        (w) => w.sentences.some(
          (y) => {
            var S;
            return y.id === ((S = o.value) == null ? void 0 : S.id);
          }
        )
      )
    ), u = rn(() => {
      var w;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : i.value ? (w = o.value) == null ? void 0 : w.mtProposedTranslationUsed : c.value.proposedContentForMTValidation;
    }), d = CA("colors"), r = d.gray200, l = d.red600, g = rn(() => s.value ? n.value.translatedTitle : i.value ? o.value.translatedContent : c.value.translatedContent), p = rn(
      () => Gt.calculateScore(
        g.value,
        u.value,
        a.value
      )
    ), m = rn(
      () => Gt.getScoreStatus(p.value)
    ), h = rn(
      () => `translated-segment-card__modification-stats__percentage--${m.value}`
    ), f = rn(() => ({
      failure: p.value === 0 ? null : d.yellow700,
      warning: d.yellow700,
      success: d.green600
    })), _ = rn(
      () => f.value[m.value]
    );
    return (w, y) => {
      const S = Mp("i18n"), k = Mp("i18n-html");
      return di(), Up(me(Ze), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: ct(() => [
          Me(me(P), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: ct(() => [
              Me(lA, {
                selection: t.value,
                "onUpdate:selection": y[0] || (y[0] = (x) => t.value = x)
              }, null, 8, ["selection"]),
              Me(me(b), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: ct(() => [
                  Me(me(P), { class: "ma-0" }, {
                    default: ct(() => [
                      Me(me(b), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: ct(() => [
                          Ml(mA("h5", null, null, 512), [
                            [S, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          p.value === 0 ? Ml((di(), Np("p", {
                            key: 0,
                            style: hA({ color: me(l) })
                          }, null, 4)), [
                            [S, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : Ml((di(), Np("p", {
                            key: 1,
                            class: wA(h.value)
                          }, null, 2)), [
                            [k, [
                              p.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      Me(me(b), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: ct(() => [
                          Me(me(P), { class: "ma-0 ms-2" }, {
                            default: ct(() => [
                              Me(me(b), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: ct(() => [
                                  Me(me(Nl), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: me(RC)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              Me(me(b), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: ct(() => [
                                  Me(me(Am), {
                                    value: p.value,
                                    height: "4px",
                                    width: "64px",
                                    color: _.value,
                                    background: me(r)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              Me(me(b), { shrink: "" }, {
                                default: ct(() => [
                                  Me(me(Nl), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: me(NC)
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
                  i.value ? (di(), Up(me(xA), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: y[1] || (y[1] = (x) => w.$emit("edit-translation", g.value))
                  }, {
                    default: ct(() => [
                      Me(me(Nl), {
                        class: "me-1",
                        icon: me(jc)
                      }, null, 8, ["icon"]),
                      vA(" " + _A(w.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : fA("", !0)
                ]),
                _: 1
              }),
              Me(me(b), { class: "translated-segment-card__actions" }, {
                default: ct(() => [
                  Me(gA, SA(yA(w.$attrs)), null, 16)
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
}, VA = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = ee(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = zo(), { currentTranslation: s } = Bt();
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
}, _f = window.Vuex.useStore, EA = () => {
  const e = _f(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B();
  return () => C(void 0, null, function* () {
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
}, LA = () => {
  const e = _f(), { currentMTProvider: t } = ye(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = B(), s = EA();
  return () => C(void 0, null, function* () {
    yield s();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, o.value);
    if (!t.value || !a.includes(t.value)) {
      const i = te.getStorageKey(
        n.value,
        o.value
      ), c = mw.storage.get(i) || a[0];
      e.commit("application/setCurrentMTProvider", c);
    }
  });
}, AA = window.Vue.computed, DA = (e) => {
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
}, TA = () => {
  const { selectedContentTranslationUnit: e } = ee(), t = AA(
    () => e.value instanceof Qe
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && DA(o);
  };
}, BA = (e, t) => {
  const { content: n, origin: o, baseSectionId: s, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const i = t.filter(
    (c) => !te.isUserMTProvider(c)
  );
  if (o !== "source" && o !== "user" && !i.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, PA = window.Vue.computed, vf = () => {
  const { currentTranslation: e } = Bt(), { currentSourcePage: t } = st();
  return PA(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, FA = window.Vuex.useStore, tu = () => {
  const e = FA(), { sourceSection: t, targetPageTitleForPublishing: n } = ee(), {
    pageURLParameter: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), i = vf();
  return () => {
    const c = n.value, u = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), d = `${i.value}_${t.value.id}`, r = t.value.getParallelCorporaUnits(d);
    r.forEach(
      (p) => BA(p, u)
    );
    const l = t.value.getTranslationProgress(a), g = e.getters["application/isSandboxTarget"];
    return mt.saveTranslation({
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
}, MA = window.Vue.effectScope, NA = window.Vue.onScopeDispose, UA = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = MA(!0), n = o.run(() => e(...a))), NA(s), n);
}, IA = window.Vuex.useStore;
let Ul;
const RA = () => {
  const e = IA(), t = tu();
  let n = 1e3, o = 0;
  return Ul = Xc(() => t().then((a) => {
    a instanceof Do ? (n *= o + 1, o++, setTimeout(Ul, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof Po)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), Ul;
}, Sf = UA(RA), zA = window.Vuex.useStore, OA = () => {
  const e = zA(), t = Sf(), { currentMTProvider: n } = ye(e), { sourceSection: o, currentProposedTranslation: s } = ee(), { selectNextTranslationUnit: a } = zo();
  return () => C(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, jA = window.Vuex.useStore, HA = () => {
  const e = jA(), t = Sf();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, qA = window.Vuex.useStore, GA = window.Vue.computed, yf = () => {
  const e = qA(), t = Ae(), { currentTranslation: n } = Bt(), { currentMTProvider: o, previousRoute: s } = ye(e), { currentTargetPage: a } = st(), {
    sourceLanguageURLParameter: i,
    targetLanguageURLParameter: c,
    pageURLParameter: u,
    sectionURLParameter: d
  } = B(), r = ot(), l = GA(() => {
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
    return o.value && (f.translation_provider = te.getProviderForInstrumentation(o.value)), f;
  });
  return {
    logEditorOpenEvent: () => {
      var S;
      const f = t.currentRoute.value.meta.workflowStep, w = t.getRoutes().find(
        (k) => k.name === s.value
      ), y = ((S = w == null ? void 0 : w.meta) == null ? void 0 : S.workflowStep) || 0;
      return f > y ? r(fe({
        event_type: "editor_open"
      }, l.value)) : Promise.resolve();
    },
    logEditorCloseEvent: () => r(fe({
      event_type: "editor_close"
    }, l.value)),
    logEditorCloseWarnEvent: () => r(fe({
      event_type: "editor_close_warn"
    }, l.value)),
    logEditorSegmentAddEvent: () => r(fe({
      event_type: "editor_segment_add"
    }, l.value))
  };
}, XA = (e, t, n, o) => C(void 0, null, function* () {
  var c, u, d;
  const s = ((c = t.user) == null ? void 0 : c.content) || ((u = t.mt) == null ? void 0 : u.content), a = (d = t == null ? void 0 : t.mt) == null ? void 0 : d.engine, i = yield hf(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = i, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = i;
}), WA = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, i;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const c = (i = t.mt) == null ? void 0 : i.engine;
      o.addProposedTranslation(c, n.mt.innerHTML), o.mtProviderUsed = c;
    }
  });
}, KA = (e, t, n, o) => C(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return XA(e, t, n, o);
  WA(e, t);
}), YA = (e, t, n, o) => {
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
        const d = KA(
          c,
          u,
          t || e.title,
          n
        );
        s.push(d);
      }
  return Promise.all(s);
}, JA = { restoreCorporaDraft: YA }, QA = () => {
  const { currentSourcePage: e } = st(), { sourceSection: t } = ee();
  return (n) => C(void 0, null, function* () {
    n.restored || (yield mt.fetchTranslationUnits(n.translationId).then(
      (s) => JA.restoreCorporaDraft(
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
const le = window.Vue.unref, ut = window.Vue.createVNode, ln = window.Vue.withCtx, ZA = window.Vue.resolveDirective, Ip = window.Vue.createElementVNode, eD = window.Vue.withDirectives, tD = window.Vue.toDisplayString, nD = window.Vue.createTextVNode, oD = window.Vue.renderList, sD = window.Vue.Fragment, Ln = window.Vue.openBlock, Rp = window.Vue.createElementBlock, Co = window.Vue.createBlock;
window.Vue.createCommentVNode;
const aD = window.Vue.normalizeClass, iD = window.Vue.normalizeStyle, rD = { class: "sx-sentence-selector__header-title mb-0" }, lD = { class: "sx-sentence-selector__section-contents px-4" }, ko = window.Vue.computed, cD = window.Vue.nextTick, uD = window.Vue.onMounted, xs = window.Vue.ref, zp = window.Vue.watch, dD = window.Vuex.useStore, Op = window.Codex.CdxButton, gD = window.Codex.CdxIcon, pD = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = xs(!1), n = xs(!1), o = xs("100%"), s = dD(), { currentMTProvider: a } = ye(s), {
      sourceLanguageURLParameter: i,
      targetLanguageURLParameter: c,
      pageURLParameter: u,
      sectionURLParameter: d
    } = B(), { sourceSection: r, selectedContentTranslationUnit: l } = ee(), g = xs({
      pageContent: !1,
      pageMetadata: !1,
      draftRestored: !1,
      mtProviders: !1
    }), p = ko(
      () => Object.values(g.value).every(Boolean)
    ), m = ko(
      () => {
        var J;
        return (J = r.value) == null ? void 0 : J.isSelectedTranslationUnitTranslated;
      }
    ), h = ko(() => {
      var J;
      return (J = r.value) == null ? void 0 : J.subSections;
    }), f = ko(
      () => {
        var J;
        return (J = r.value) == null ? void 0 : J.selectedTranslationUnitOriginalContent;
      }
    ), _ = ko(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: w,
      logEditorCloseEvent: y,
      logEditorCloseWarnEvent: S,
      logEditorSegmentAddEvent: k
    } = yf(), x = VA();
    LA()().then(() => {
      w(), g.value.mtProviders = !0;
    });
    const E = TA(), { fetchTranslationsByStatus: T, translationsFetched: U } = Io(), M = QA(), { currentTranslation: X } = Bt(), { selectPageSectionByTitle: G, selectPageSectionByIndex: pe } = Mi(), $e = Qc(), ft = Mo();
    uD(() => C(this, null, function* () {
      if (!U.value.draft) {
        const J = [
          // required to get current draft translation (if exists)
          T("draft"),
          // required to get target page title for template adaptation (useTranslationUnitTranslate)
          $e(i.value, u.value),
          // user has just been redirected here from another wiki, and page metadata have not yet been fetched
          ft(i.value, [u.value])
        ];
        yield Promise.all(J);
      }
      g.value.pageMetadata = !0, d.value ? yield G(d.value) : yield pe(0), g.value.pageContent = !0, X.value && (yield M(X.value)), g.value.draftRestored = !0, zp(
        p,
        () => C(this, null, function* () {
          p.value && (yield cD(), x(), E());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    })), zp(l, E);
    const {
      selectNextTranslationUnit: Ve,
      selectPreviousTranslationUnit: Ee
    } = zo(), Pt = OA(), Ie = () => {
      k(), Pt();
    }, De = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, oe = Ae(), O = () => {
      const { autoSavePending: J } = s.state.application;
      if (J) {
        Q.value = !0, S();
        return;
      }
      W();
    }, H = HA(), { clearTranslationURLParameters: de } = B(), W = () => C(this, null, function* () {
      T("draft"), X.value && (r.value.reset(), X.value.restored = !1), y(), de(), H(), yield oe.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: v,
      translateSelectedTranslationUnitForAllProviders: D
    } = eu(), A = () => {
      N.value || (t.value = !0, D());
    }, { getCurrentTitleByLanguage: F } = fn(), j = (J, Z) => {
      oe.push({
        name: "sx-editor",
        state: {
          content: J,
          originalContent: f.value,
          title: F(
            c.value,
            i.value
          ),
          isInitialEdit: Z || null
        }
      });
    }, se = () => oe.push({ name: "sx-publisher" }), z = () => C(this, null, function* () {
      l.value ? yield v(
        l.value.id,
        a.value
      ) : yield v(0, a.value);
    }), N = ko(
      () => l.value instanceof Qe
    ), Q = xs(!1);
    return (J, Z) => {
      const na = ZA("i18n");
      return Ln(), Rp("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: iD(_.value)
      }, [
        ut(le(P), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: ln(() => [
            ut(le(b), { shrink: "" }, {
              default: ln(() => [
                ut(le(Op), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": J.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: O
                }, {
                  default: ln(() => [
                    ut(le(gD), { icon: le(Uh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            ut(le(b), {
              grow: "",
              class: "px-1"
            }, {
              default: ln(() => [
                eD(Ip("h4", rD, null, 512), [
                  [na, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            ut(le(b), {
              shrink: "",
              class: "px-3"
            }, {
              default: ln(() => [
                ut(le(Op), {
                  disabled: !(le(r) && le(r).isTranslated),
                  onClick: se
                }, {
                  default: ln(() => [
                    nD(tD(J.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        p.value ? (Ln(), Co(le(P), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: ln(() => [
            ut(le(b), {
              dir: le(R.getDir)(le(i)),
              lang: le(i),
              class: "sx-sentence-selector__section"
            }, {
              default: ln(() => [
                ut(q5),
                Ip("div", lD, [
                  (Ln(!0), Rp(sD, null, oD(h.value, (Oe) => (Ln(), Co(FL, {
                    id: Oe.id,
                    key: `sub-section-${Oe.id}`,
                    "sub-section": Oe,
                    onBounceTranslation: De
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !N.value && m.value ? (Ln(), Co($A, {
              key: 0,
              onEditTranslation: Z[0] || (Z[0] = (Oe) => j(Oe, !1)),
              onSkipTranslation: le(Ve),
              onSelectPreviousSegment: le(Ee)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : N.value ? (Ln(), Co(tA, {
              key: 2,
              onEditTranslation: j,
              onApplyTranslation: Ie,
              onSkipTranslation: le(Ve),
              onSelectPreviousSegment: le(Ee)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : (Ln(), Co(kL, {
              key: 1,
              class: aD({ "mb-0": !n.value }),
              onConfigureOptions: A,
              onEditTranslation: Z[1] || (Z[1] = (Oe) => j(Oe, !0)),
              onApplyTranslation: Ie,
              onSkipTranslation: le(Ve),
              onSelectPreviousSegment: le(Ee),
              onRetryTranslation: z
            }, null, 8, ["class", "onSkipTranslation", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Ln(), Co(le(P), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: ln(() => [
            ut(le(et), { class: "mt-0" })
          ]),
          _: 1
        })),
        ut(B5, {
          active: t.value,
          "onUpdate:active": Z[2] || (Z[2] = (Oe) => t.value = Oe)
        }, null, 8, ["active"]),
        ut(c5, {
          modelValue: Q.value,
          "onUpdate:modelValue": Z[3] || (Z[3] = (Oe) => Q.value = Oe),
          onDiscardTranslation: W
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const mD = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: pD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, hD = window.Vue.resolveComponent, fD = window.Vue.createVNode, wD = window.Vue.normalizeClass, _D = window.Vue.openBlock, vD = window.Vue.createElementBlock;
function SD(e, t, n, o, s, a) {
  const i = hD("sx-sentence-selector");
  return _D(), vD("main", {
    class: wD(["sx-sentence-selector-view", a.classes])
  }, [
    fD(i)
  ], 2);
}
const yD = /* @__PURE__ */ ne(mD, [["render", SD]]), bD = `<svg width="375" height="200" viewBox="0 0 375 200"
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
const kD = window.Vue.resolveDirective, gi = window.Vue.withDirectives, Vt = window.Vue.openBlock, cn = window.Vue.createElementBlock, pi = window.Vue.createCommentVNode, mi = window.Vue.Transition, Xn = window.Vue.withCtx, xo = window.Vue.createVNode, $s = window.Vue.createElementVNode, An = window.Vue.unref, xD = window.Vue.renderList, $D = window.Vue.Fragment, VD = window.Vue.normalizeClass, jp = window.Vue.createBlock, ED = window.Vue.toDisplayString, LD = window.Vue.createTextVNode, AD = { class: "sx-quick-tutorial" }, DD = { class: "sx-quick-tutorial__main-point py-9 px-6" }, TD = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, BD = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, PD = { class: "sx-quick-tutorial__illustration" }, FD = ["innerHTML"], MD = ["innerHTML"], ND = { class: "sx-quick-tutorial__step-indicator py-3" }, UD = ["onClick"], ID = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, RD = {
  key: "secondary-point-1",
  class: "ma-0"
}, zD = {
  key: "secondary-point-2",
  class: "ma-0"
}, OD = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, Hp = window.Vue.ref, qp = window.Codex.CdxButton, jD = window.Codex.CdxIcon, HD = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = Hp(2), n = Hp(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (i) => i === n.value;
    Ae();
    const a = Ro();
    return (i, c) => {
      const u = kD("i18n");
      return Vt(), cn("section", AD, [
        xo(An(P), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: Xn(() => [
            $s("section", DD, [
              xo(mi, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Xn(() => [
                  s(1) ? gi((Vt(), cn("h2", TD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? gi((Vt(), cn("h2", BD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : pi("", !0)
                ]),
                _: 1
              })
            ]),
            $s("section", PD, [
              xo(mi, { name: "mw-ui-animation-slide-start" }, {
                default: Xn(() => [
                  s(1) ? (Vt(), cn("div", {
                    key: "illustration-1",
                    innerHTML: An(CD)
                  }, null, 8, FD)) : s(2) ? (Vt(), cn("div", {
                    key: "illustration-2",
                    innerHTML: An(bD)
                  }, null, 8, MD)) : pi("", !0)
                ]),
                _: 1
              })
            ]),
            $s("div", ND, [
              (Vt(!0), cn($D, null, xD(t.value, (d) => (Vt(), cn("span", {
                key: `dot-${d}`,
                class: VD(["dot mx-1", { "dot-active": s(d) }]),
                role: "button",
                onClick: (r) => n.value = d
              }, null, 10, UD))), 128))
            ]),
            $s("section", ID, [
              xo(mi, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Xn(() => [
                  s(1) ? gi((Vt(), cn("h3", RD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? gi((Vt(), cn("h3", zD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : pi("", !0)
                ]),
                _: 1
              })
            ]),
            $s("div", OD, [
              xo(mi, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Xn(() => [
                  s(1) ? (Vt(), jp(An(qp), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": i.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: Xn(() => [
                      xo(An(jD), { icon: An(ea) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (Vt(), jp(An(qp), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: An(a)
                  }, {
                    default: Xn(() => [
                      LD(ED(i.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : pi("", !0)
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
const qD = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: HD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, GD = window.Vue.resolveComponent, XD = window.Vue.createVNode, WD = window.Vue.normalizeClass, KD = window.Vue.openBlock, YD = window.Vue.createElementBlock;
function JD(e, t, n, o, s, a) {
  const i = GD("sx-quick-tutorial");
  return KD(), YD("main", {
    class: WD(["sx-quick-tutorial-view", a.classes])
  }, [
    XD(i)
  ], 2);
}
const QD = /* @__PURE__ */ ne(qD, [["render", JD]]);
const ZD = window.Vue.resolveDirective, Gp = window.Vue.createElementVNode, eT = window.Vue.withDirectives, tT = window.Vue.unref, nT = window.Vue.withCtx, oT = window.Vue.createVNode, sT = window.Vue.openBlock, aT = window.Vue.createElementBlock, iT = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, rT = { class: "sx-editor__original-content-panel__header mb-2" }, lT = ["lang", "dir", "innerHTML"], Xp = window.Vue.ref, cT = window.Vue.onMounted, uT = {
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
        d.href = K.getPageUrl(c, d.title), d.target = "_blank";
    }, o = Xp(null), s = Xp(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(o.value, null).getPropertyValue("line-height")
    );
    return cT(() => {
      s.value = 2 * a(), n(o.value, t.language);
    }), (i, c) => {
      const u = ZD("i18n");
      return sT(), aT("section", iT, [
        eT(Gp("h5", rT, null, 512), [
          [u, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        oT(tT(G1), {
          "min-height": s.value,
          scroll: ""
        }, {
          default: nT(() => [
            Gp("div", {
              ref_key: "originalContentRef",
              ref: o,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, lT)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, dT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const gT = window.Vue.unref, Vs = window.Vue.createElementVNode, Wp = window.Vue.resolveDirective, Il = window.Vue.withDirectives, pT = window.Vue.normalizeClass, mT = window.Vue.openBlock, hT = window.Vue.createElementBlock, fT = window.Vue.createCommentVNode, wT = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, _T = { class: "sx-editor__feedback-overlay-content px-4" }, vT = ["innerHTML"], ST = { class: "sx-editor__feedback-overlay-content__title" }, yT = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, Rl = window.Vue.computed, bT = {
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
    const t = e, { targetLanguageURLParameter: n } = B(), o = Rl(
      () => Gt.calculateScore(
        t.editedTranslation,
        t.proposedTranslation,
        n.value
      )
    ), s = Rl(() => {
      const i = Gt.getScoreStatus(o.value);
      return i === "failure" ? o.value === 0 ? "failure" : "warning" : i;
    }), a = Rl(
      () => `sx-editor__feedback-overlay-content__stats--${s.value}`
    );
    return (i, c) => {
      const u = Wp("i18n"), d = Wp("i18n-html");
      return e.showFeedback ? (mT(), hT("div", wT, [
        Vs("div", _T, [
          Vs("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: gT(dT)
          }, null, 8, vT),
          Il(Vs("h2", ST, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          Il(Vs("p", yT, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          Il(Vs("p", {
            class: pT(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [d, [o.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : fT("", !0);
    };
  }
}, CT = window.Vuex.useStore, kT = () => {
  const e = CT(), t = tu(), { selectNextTranslationUnit: n } = zo(), { sourceSection: o, selectedContentTranslationUnit: s } = ee(), { getCurrentTitleByLanguage: a } = fn();
  return (i) => C(void 0, null, function* () {
    const c = document.createElement("div");
    c.innerHTML = i, c.querySelectorAll(".sx-edit-dummy-node").forEach((l) => l.remove()), i = c.innerHTML;
    const { sourceLanguage: u, targetLanguage: d, currentMTProvider: r } = e.state.application;
    s.value instanceof Qe && (i = (yield hf(
      i,
      a(d, u),
      d
    )) || i), o.value.setTranslationForSelectedTranslationUnit(
      i,
      r
    ), t(), n();
  });
};
const Ye = window.Vue.unref, zl = window.Vue.openBlock, Ol = window.Vue.createBlock, Kp = window.Vue.createCommentVNode, Yp = window.Vue.createVNode, xT = window.Vue.createElementVNode, $T = window.Vue.withCtx, VT = { class: "sx-editor__editing-surface-container grow" }, jl = window.Vue.ref, ET = window.Vue.computed, LT = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = jl(!1), o = Ae(), s = () => n.value = !0, a = () => o.replace({ name: t.fromRoute }), { isFinalEdit: i, isInitialEdit: c, content: u, originalContent: d, title: r } = history.state, l = jl(null), g = jl(!1), { logEditorSegmentAddEvent: p } = yf(), {
      sourceLanguageURLParameter: m,
      targetLanguageURLParameter: h
    } = B(), { sourceSection: f } = ee(), _ = ET(
      () => Gt.calculateScore(
        l.value,
        u,
        h.value
      )
    ), w = kT(), y = (S) => C(this, null, function* () {
      l.value = S, g.value = !0;
      const k = new Promise((L) => setTimeout(L, 2e3));
      let x = Promise.resolve();
      i ? f.value.editedTranslation = S : (_.value === 0 && c && p(), x = w(S)), yield Promise.all([k, x]), g.value = !1, a();
    });
    return (S, k) => (zl(), Ol(Ye(P), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: $T(() => [
        Ye(d) ? (zl(), Ol(uT, {
          key: 0,
          language: Ye(m),
          dir: Ye(R.getDir)(Ye(m)),
          "original-content": Ye(d)
        }, null, 8, ["language", "dir", "original-content"])) : Kp("", !0),
        n.value ? Kp("", !0) : (zl(), Ol(Ye(et), { key: 1 })),
        xT("div", VT, [
          Yp(bT, {
            "edited-translation": l.value,
            "show-feedback": g.value,
            "proposed-translation": Ye(u)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          Yp(a4, {
            content: Ye(u),
            language: Ye(h),
            dir: Ye(R.getDir)(Ye(h)),
            title: Ye(r),
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
const NT = /* @__PURE__ */ ne(AT, [["render", MT]]);
const jt = window.Vue.unref, Wn = window.Vue.createVNode, Es = window.Vue.withCtx, UT = window.Vue.resolveDirective, IT = window.Vue.withDirectives, RT = window.Vue.openBlock, zT = window.Vue.createBlock, Jp = window.Codex.CdxButton, Qp = window.Codex.CdxIcon, OT = {
  __name: "SXPublisherHeader",
  props: {
    isPublishingDisabled: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["publish-translation"],
  setup(e) {
    const t = Ae(), n = () => t.push({ name: "sx-sentence-selector" });
    return (o, s) => {
      const a = UT("i18n");
      return RT(), zT(jt(P), { class: "ma-0 sx-publisher__header" }, {
        default: Es(() => [
          Wn(jt(b), {
            shrink: "",
            class: "me-2"
          }, {
            default: Es(() => [
              Wn(jt(Jp), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: Es(() => [
                  Wn(jt(Qp), { icon: jt(Uo) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          IT(Wn(jt(b), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          Wn(jt(b), { shrink: "" }, {
            default: Es(() => [
              Wn(jt(Jp), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (i) => o.$emit("publish-translation"))
              }, {
                default: Es(() => [
                  Wn(jt(Qp), { icon: jt(LC) }, null, 8, ["icon"])
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
</svg>`, Zp = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const Hl = window.Vue.createElementVNode, em = window.Vue.toDisplayString, ql = window.Vue.unref, Gl = window.Vue.withCtx, tm = window.Vue.createVNode, qT = window.Vue.openBlock, GT = window.Vue.createBlock, XT = window.Vue.createCommentVNode, WT = ["innerHTML"], KT = ["textContent"], YT = ["textContent"], Xl = window.Vue.computed, JT = {
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
        svg: Zp,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: Zp,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, s = Xl(() => o[n.status].svg), a = Xl(() => o[n.status].title), i = Xl(() => o[n.status].subtitle);
    return (c, u) => e.active ? (qT(), GT(ql(ht), {
      key: 0,
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: Gl(() => [
        tm(ql(P), { class: "ma-4" }, {
          default: Gl(() => [
            tm(ql(b), null, {
              default: Gl(() => [
                Hl("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: s.value
                }, null, 8, WT),
                Hl("h2", {
                  textContent: em(a.value)
                }, null, 8, KT),
                Hl("p", {
                  class: "ma-0",
                  textContent: em(i.value)
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
const Je = window.Vue.unref, Et = window.Vue.createVNode, un = window.Vue.withCtx, QT = window.Vue.resolveDirective, ZT = window.Vue.withDirectives, nm = window.Vue.toDisplayString, e6 = window.Vue.createTextVNode, Wl = window.Vue.openBlock, om = window.Vue.createElementBlock, t6 = window.Vue.createCommentVNode, bf = window.Vue.createElementVNode, n6 = window.Vue.createBlock, o6 = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, s6 = ["src"], a6 = ["textContent"], i6 = /* @__PURE__ */ bf("p", { class: "mt-0" }, null, -1), r6 = window.Vue.computed, l6 = window.Vue.inject, c6 = window.Vue.ref, sm = window.Codex.CdxButton, u6 = window.Codex.CdxIcon, d6 = {
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
    const n = t, o = c6(""), s = () => n("close"), a = () => n("publish", o.value), i = l6("breakpoints"), c = r6(() => i.value.mobile);
    return (u, d) => {
      const r = QT("i18n");
      return e.active && e.captchaDetails ? (Wl(), n6(Je(ht), {
        key: 0,
        fullscreen: c.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: un(() => [
          Et(Je(P), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: un(() => [
              Et(Je(b), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: un(() => [
                  Et(Je(sm), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": u.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: s
                  }, {
                    default: un(() => [
                      Et(Je(u6), { icon: Je(Uo) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              ZT(Et(Je(b), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [r, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              Et(Je(b), {
                shrink: "",
                class: "justify-center"
              }, {
                default: un(() => [
                  Et(Je(sm), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: un(() => [
                      e6(nm(u.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Et(Je(Ci))
        ]),
        default: un(() => [
          bf("div", o6, [
            e.captchaDetails.type === "image" ? (Wl(), om("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, s6)) : (Wl(), om("p", {
              key: 1,
              textContent: nm(e.captchaDetails.question)
            }, null, 8, a6)),
            i6,
            Et(Je(P), { class: "ma-0" }, {
              default: un(() => [
                Et(Je(b), null, {
                  default: un(() => [
                    Et(Je(ic), {
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
      }, 8, ["fullscreen"])) : t6("", !0);
    };
  }
};
const Kn = window.Vue.unref, Ls = window.Vue.createVNode, hi = window.Vue.withCtx, Yn = window.Vue.createElementVNode, g6 = window.Vue.resolveDirective, p6 = window.Vue.withDirectives, m6 = window.Vue.renderList, am = window.Vue.Fragment, Kl = window.Vue.openBlock, im = window.Vue.createElementBlock, h6 = window.Vue.toDisplayString, f6 = window.Vue.normalizeClass, w6 = window.Vue.createBlock, _6 = { class: "mw-ui-dialog__header" }, v6 = { class: "row ma-0 px-4 py-3" }, S6 = { class: "col shrink justify-center" }, y6 = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, b6 = { class: "mb-0" }, C6 = { class: "pa-4" }, k6 = ["textContent"], x6 = window.Vuex.useStore, As = window.Vue.computed, $6 = window.Codex.CdxButton, V6 = window.Codex.CdxIcon, E6 = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = x6(), s = As(() => o.state.application.publishTarget), a = As(() => o.state.translator.isAnon), i = he(), { sourceSection: c } = ee(), u = As(
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
      const f = g6("i18n");
      return Kl(), w6(Kn(ht), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: m.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: h[0] || (h[0] = (_) => m.$emit("update:active", _)),
        onClose: g
      }, {
        header: hi(() => [
          Yn("div", _6, [
            Yn("div", v6, [
              Yn("div", S6, [
                Ls(Kn($6), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": m.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: g
                }, {
                  default: hi(() => [
                    Ls(Kn(V6), { icon: Kn(Uh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              Yn("div", y6, [
                p6(Yn("h4", b6, null, 512), [
                  [f, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            Ls(Kn(Ci))
          ])
        ]),
        default: hi(() => [
          Yn("div", C6, [
            Ls(Kn(b1), {
              value: s.value,
              name: "publish-options",
              onInput: p
            }, {
              default: hi(() => [
                (Kl(!0), im(am, null, m6(r.value, (_, w) => (Kl(), im(am, {
                  key: _.label
                }, [
                  Ls(Kn(rc), {
                    class: "pa-0 my-1",
                    label: _.label,
                    "input-value": _.value,
                    disabled: _.disabled
                  }, null, 8, ["label", "input-value", "disabled"]),
                  Yn("p", {
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
const Lt = window.Vue.unref, Jn = window.Vue.createVNode, rm = window.Vue.resolveDirective, lm = window.Vue.withDirectives, fi = window.Vue.openBlock, cm = window.Vue.createElementBlock, L6 = window.Vue.createCommentVNode, um = window.Vue.toDisplayString, Yl = window.Vue.createElementVNode, $o = window.Vue.withCtx, dm = window.Vue.createBlock, A6 = window.Vue.Fragment, D6 = window.Vue.normalizeClass, T6 = { class: "sx-publisher__review-info__content" }, B6 = { key: 0 }, P6 = ["textContent"], F6 = ["textContent"], Dn = window.Vue.computed, gm = window.Vue.ref, M6 = window.Vue.watch, pm = window.Codex.CdxButton, Jl = window.Codex.CdxIcon, N6 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = gm(0), o = gm(null);
    M6(o, () => {
      var f;
      const h = (f = o.value) == null ? void 0 : f.$el;
      if (h instanceof HTMLElement) {
        const _ = h.querySelector("a");
        _ && _.setAttribute("target", "_blank");
      }
    });
    const s = Dn(
      () => {
        var h;
        return (h = t.publishFeedbackMessages) == null ? void 0 : h[n.value];
      }
    ), a = Dn(() => {
      var h;
      return ((h = s.value) == null ? void 0 : h.status) || "default";
    }), i = Dn(() => {
      switch (a.value) {
        case "warning":
          return Mh;
        case "error":
          return EC;
        default:
          return DC;
      }
    }), c = Dn(() => a.value === "default"), u = Dn(
      () => c.value ? "notice" : a.value
    ), d = Dn(
      () => `sx-publisher__review-info--${u.value}`
    ), r = he(), l = Dn(() => {
      var h;
      return (h = s.value) == null ? void 0 : h.text;
    }), g = Dn(
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
      const _ = rm("i18n"), w = rm("i18n-html");
      return fi(), dm(Lt(X0), {
        type: u.value,
        class: D6(["sx-publisher__review-info ma-0 pa-4", d.value]),
        inline: c.value
      }, {
        icon: $o(() => [
          Jn(Lt(Jl), {
            icon: i.value,
            class: "shrink mw-ui-message__icon items-start me-1"
          }, null, 8, ["icon"])
        ]),
        default: $o(() => [
          Yl("div", T6, [
            a.value === "default" ? lm((fi(), cm("h5", B6, null, 512)), [
              [_, void 0, "cx-sx-publisher-review-info"]
            ]) : (fi(), cm(A6, { key: 1 }, [
              Yl("h5", {
                textContent: um(g.value)
              }, null, 8, P6),
              Yl("p", {
                textContent: um(l.value)
              }, null, 8, F6),
              Jn(Lt(P), {
                justify: "between",
                class: "ma-0"
              }, {
                default: $o(() => [
                  lm(Jn(Lt(b), {
                    ref_key: "learnMoreContainer",
                    ref: o,
                    class: "sx-publisher__review-info__learn-more-anchor"
                  }, null, 512), [
                    [w, void 0, "cx-sx-publisher-review-info-learn-more"]
                  ]),
                  e.publishFeedbackMessages.length > 1 ? (fi(), dm(Lt(b), {
                    key: 0,
                    class: "sx-publisher__review-info__navigation-buttons justify-end",
                    align: "center"
                  }, {
                    default: $o(() => [
                      Jn(Lt(pm), {
                        weight: "quiet",
                        class: "pa-0 me-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                        onClick: p
                      }, {
                        default: $o(() => [
                          Jn(Lt(Jl), { icon: Lt(Gc) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"]),
                      Jn(Lt(pm), {
                        weight: "quiet",
                        class: "pa-0 ms-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                        onClick: m
                      }, {
                        default: $o(() => [
                          Jn(Lt(Jl), { icon: Lt(ea) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ]),
                    _: 1
                  })) : L6("", !0)
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
}, U6 = (e) => {
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
}, I6 = window.Vuex.useStore, R6 = window.Vue.computed, z6 = () => {
  const e = I6(), { currentTranslation: t } = Bt(), { currentMTProvider: n, previousRoute: o } = ye(e), { currentTargetPage: s } = st(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: i,
    pageURLParameter: c,
    sectionURLParameter: u
  } = B(), { sourceSection: d } = ee(), r = ot(), l = R6(() => {
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
    return n.value && (h.translation_provider = te.getProviderForInstrumentation(n.value)), h.human_modification_rate = Gt.getMTScoreForPageSection(
      d.value,
      i.value
    ) / 100, h.human_modification_threshold = Gt.getMtModificationThreshold(), h;
  });
  return {
    logPublishAttemptEvent: () => r(fe({
      event_type: "publish_attempt"
    }, l.value)),
    logPublishSuccessEvent: (h, f) => r(fe({
      event_type: "publish_success",
      published_page_id: h,
      published_revision_id: f
    }, l.value)),
    logPublishFailureEvent: () => r(fe({
      event_type: "publish_failure"
    }, l.value))
  };
}, mm = window.Vue.ref, O6 = window.Vuex.useStore, j6 = () => {
  const e = O6(), {
    pageURLParameter: t,
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = B(), { sourceSection: s, targetPageTitleForPublishing: a } = ee(), i = vf(), c = mm(!1), u = mm("pending"), d = () => c.value = !1, r = tu(), {
    logPublishAttemptEvent: l,
    logPublishSuccessEvent: g,
    logPublishFailureEvent: p
  } = z6(), m = (f, _) => C(void 0, null, function* () {
    l();
    const w = yield r();
    if (w instanceof Do)
      return p(), { publishFeedbackMessage: w, targetUrl: null };
    const y = w, S = a.value, k = e.getters["application/isSandboxTarget"], x = {
      html: U6(s.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: S,
      sourceSectionTitle: s.value.sourceSectionTitleForPublishing,
      targetSectionTitle: s.value.targetSectionTitleForPublishing,
      sourceLanguage: n.value,
      targetLanguage: o.value,
      revision: i.value,
      isSandbox: k,
      sectionTranslationId: y
    };
    f && (x.captchaId = f, x.captchaWord = _);
    const L = yield mt.publishTranslation(
      x
    );
    return L.publishFeedbackMessage === null ? g(L.pageId, L.revisionId) : p(), L;
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
        if (y instanceof Po)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw y;
      }
      return w;
    }),
    isPublishDialogActive: c,
    publishStatus: u
  };
}, H6 = window.Vue.computed, q6 = () => {
  const e = Ae(), { sourceSection: t } = ee(), { getCurrentTitleByLanguage: n } = fn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = B(), a = H6(
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
}, G6 = () => {
  const { targetLanguageURLParameter: e } = B(), { sourceSection: t } = ee();
  return () => {
    const n = Gt.getMTScoreForPageSection(
      t.value,
      e.value
    ), o = Gt.getScoreStatus(n);
    if (o === "success")
      return null;
    const s = 100 - n, a = o === "failure" ? "error" : "warning";
    let i, c;
    return a === "warning" ? (i = mw.message("cx-sx-publisher-mt-abuse-message-title", s).plain(), c = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (i = mw.message("cx-sx-publisher-mt-abuse-error-title", s).plain(), c = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new Do({
      title: i,
      text: c,
      status: a,
      type: "mt"
    });
  };
}, X6 = window.Vue.ref, W6 = window.Vue.computed, K6 = () => {
  const e = G6(), t = X6([]), n = W6(
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
}, Y6 = window.Vuex.useStore, J6 = () => {
  const e = Y6(), { currentSourcePage: t } = st(), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = B(), { sourceSection: s, targetPageTitleForPublishing: a } = ee();
  return (i) => C(void 0, null, function* () {
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
}, hm = window.Vue.ref, Q6 = () => {
  const e = hm(!1), t = hm(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const _e = window.Vue.unref, qe = window.Vue.createVNode, Z6 = window.Vue.resolveDirective, Ds = window.Vue.createElementVNode, e9 = window.Vue.withDirectives, Vo = window.Vue.withCtx, t9 = window.Vue.openBlock, n9 = window.Vue.createElementBlock, o9 = { class: "sx-publisher" }, s9 = { class: "sx-publisher__publish-panel pa-4" }, a9 = { class: "mb-2" }, i9 = ["innerHTML"], r9 = { class: "sx-publisher__section-preview pa-5" }, l9 = ["innerHTML"], fm = window.Vue.computed, c9 = window.Vue.onMounted, u9 = window.Vue.ref, d9 = window.Vue.watch, g9 = window.Vuex.useStore, wm = window.Codex.CdxButton, _m = window.Codex.CdxIcon, p9 = {
  __name: "SXPublisher",
  setup(e) {
    const t = g9(), { sourceSection: n } = ee(), o = fm(() => {
      var E;
      return (E = n.value) == null ? void 0 : E.title;
    }), s = he(), a = fm(() => t.getters["application/isSandboxTarget"] ? s.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : n.value.isLeadSection ? s.i18n("cx-sx-publisher-publish-panel-lead-section-result") : s.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: i,
      captchaDialogOn: c,
      handleCaptchaError: u,
      onCaptchaDialogClose: d
    } = Q6(), {
      publishFeedbackMessages: r,
      isPublishingDisabled: l,
      addPublishFeedbackMessage: g,
      clearPublishFeedbackMessages: p,
      initializePublishFeedbackMessages: m
    } = K6(), h = J6(), { doPublish: f, isPublishDialogActive: _, publishStatus: w, closePublishDialog: y } = j6(), S = (E = null) => C(this, null, function* () {
      if (l.value)
        return;
      const T = yield f(E, i);
      if (!T)
        return;
      const { publishFeedbackMessage: U, targetUrl: M } = T;
      if (u(U)) {
        y();
        return;
      } else
        U && g(U);
      w.value = l.value ? "failure" : "success", setTimeout(() => {
        if (l.value) {
          y();
          return;
        }
        h(M);
      }, 1e3);
    });
    c9(() => m());
    const k = q6(), x = u9(!1), L = () => x.value = !0;
    return d9(x, (E) => {
      E || (p(), m());
    }), (E, T) => {
      const U = Z6("i18n");
      return t9(), n9("section", o9, [
        qe(OT, {
          "is-publishing-disabled": _e(l),
          onPublishTranslation: S
        }, null, 8, ["is-publishing-disabled"]),
        Ds("div", s9, [
          e9(Ds("h5", a9, null, 512), [
            [U, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          Ds("h6", {
            class: "mb-2",
            innerHTML: a.value
          }, null, 8, i9),
          qe(_e(P), {
            justify: "end",
            class: "ma-0"
          }, {
            default: Vo(() => [
              qe(_e(b), { shrink: "" }, {
                default: Vo(() => [
                  qe(_e(wm), {
                    weight: "quiet",
                    "aria-label": E.$i18n("cx-sx-publisher-configure-button-aria-label"),
                    onClick: L
                  }, {
                    default: Vo(() => [
                      qe(_e(_m), { icon: _e(IC) }, null, 8, ["icon"])
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
        qe(N6, { "publish-feedback-messages": _e(r) }, null, 8, ["publish-feedback-messages"]),
        Ds("section", r9, [
          qe(_e(P), { class: "pb-5 ma-0" }, {
            default: Vo(() => [
              qe(_e(b), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                innerHTML: o.value
              }, null, 8, ["innerHTML"]),
              qe(_e(b), { shrink: "" }, {
                default: Vo(() => [
                  qe(_e(wm), {
                    weight: "quiet",
                    "aria-label": E.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: _e(k)
                  }, {
                    default: Vo(() => [
                      qe(_e(_m), { icon: _e(jc) }, null, 8, ["icon"])
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
            innerHTML: _e(n).translationHtml
          }, null, 8, l9)
        ]),
        qe(E6, {
          active: x.value,
          "onUpdate:active": T[0] || (T[0] = (M) => x.value = M)
        }, null, 8, ["active"]),
        qe(d6, {
          active: _e(c),
          "captcha-details": _e(i),
          onClose: _e(d),
          onPublish: T[1] || (T[1] = (M) => S(M))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        qe(JT, {
          active: _e(_),
          status: _e(w)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const m9 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: p9
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, h9 = window.Vue.resolveComponent, f9 = window.Vue.createVNode, w9 = window.Vue.normalizeClass, _9 = window.Vue.openBlock, v9 = window.Vue.createElementBlock;
function S9(e, t, n, o, s, a) {
  const i = h9("sx-publisher");
  return _9(), v9("main", {
    class: w9(["sx-publisher-view", a.classes])
  }, [
    f9(i)
  ], 2);
}
const y9 = /* @__PURE__ */ ne(m9, [["render", S9]]);
const At = window.Vue.unref, Tn = window.Vue.createVNode, Qn = window.Vue.withCtx, Ql = window.Vue.toDisplayString, Zl = window.Vue.createElementVNode, b9 = window.Vue.openBlock, C9 = window.Vue.createBlock, k9 = ["textContent"], x9 = ["textContent"], $9 = ["textContent"], Cf = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: Fo,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (b9(), C9(At(P), {
      class: "cx-search-suggestion pa-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: At(R.getDir)(e.suggestion.language)
    }, {
      default: Qn(() => [
        Tn(At(b), { shrink: "" }, {
          default: Qn(() => [
            Tn(At(kc), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        Tn(At(b), { class: "ms-4" }, {
          default: Qn(() => [
            Tn(At(P), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: Qn(() => [
                Tn(At(b), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: Qn(() => [
                    Zl("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: Ql(e.suggestion.title)
                    }, null, 8, k9)
                  ]),
                  _: 1
                }),
                Tn(At(b), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: Qn(() => [
                    Zl("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: Ql(e.suggestion.description)
                    }, null, 8, x9)
                  ]),
                  _: 1
                }),
                Tn(At(b), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: Qn(() => [
                    Tn(At(Re), {
                      icon: At(d0),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    Zl("small", {
                      textContent: Ql(e.suggestion.langLinksCount)
                    }, null, 8, $9)
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
const Ts = window.Vue.unref, Bs = window.Vue.openBlock, ec = window.Vue.createBlock, V9 = window.Vue.createCommentVNode, E9 = window.Vue.resolveDirective, L9 = window.Vue.withDirectives, vm = window.Vue.createElementBlock, A9 = window.Vue.renderList, D9 = window.Vue.Fragment, T9 = window.Vue.normalizeClass, B9 = window.Vue.withCtx, P9 = {
  key: 1,
  class: "sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
}, Sm = window.Vue.computed, F9 = window.Vue.ref, M9 = {
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
    const { sourceLanguageURLParameter: t } = B(), n = Sm(() => R.getAutonym(t.value)), o = e, s = F9(null), a = (l) => s.value = l, i = () => s.value = null, c = (l) => {
      var g;
      return ((g = o.selectedItem) == null ? void 0 : g.title) === l.title && !s.value || s.value === l.pageId;
    }, u = Sm(() => o.searchInput), { searchResultsLoading: d, searchResultsSlice: r } = Wc(
      t,
      u
    );
    return (l, g) => {
      const p = E9("i18n");
      return Bs(), ec(Ts(Ze), { class: "sx-article-search__results mb-0 pa-4" }, {
        default: B9(() => [
          Ts(d) ? (Bs(), ec(Ts(et), { key: 0 })) : Ts(r).length === 0 ? L9((Bs(), vm("p", P9, null, 512)), [
            [p, [
              u.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : V9("", !0),
          (Bs(!0), vm(D9, null, A9(Ts(r), (m) => (Bs(), ec(Cf, {
            key: m.pageId,
            suggestion: m,
            class: T9({
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
const N9 = window.Vue.toDisplayString, U9 = window.Vue.createElementVNode, I9 = window.Vue.renderList, R9 = window.Vue.Fragment, tc = window.Vue.openBlock, z9 = window.Vue.createElementBlock, O9 = window.Vue.normalizeClass, ym = window.Vue.createBlock, j9 = window.Vue.unref, bm = window.Vue.withCtx, H9 = ["textContent"], q9 = window.Vue.ref, Cm = {
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
    const n = e, o = q9(null), s = (c) => o.value = c, a = () => o.value = null, i = (c) => {
      var u;
      return ((u = n.selectedItem) == null ? void 0 : u.title) === c.title && !o.value || o.value === c.pageId;
    };
    return (c, u) => (tc(), ym(j9(Ze), { class: "sx-article-search__suggestions mb-0 pa-4" }, {
      header: bm(() => [
        U9("h5", {
          class: "ma-0 pb-1 sx-article-search__suggestions-header",
          textContent: N9(e.cardTitle)
        }, null, 8, H9)
      ]),
      default: bm(() => [
        (tc(!0), z9(R9, null, I9(e.suggestions, (d) => (tc(), ym(Cf, {
          key: d.pageId,
          suggestion: d,
          class: O9({
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
}, G9 = window.Vue.computed, X9 = (e, t) => G9(() => {
  const o = {
    value: "other",
    props: {
      icon: h0,
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
      label: R.getAutonym(i),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), o];
}), W9 = window.Vue.computed, K9 = () => {
  const { supportedSourceLanguageCodes: e } = Ys(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B();
  return { getSuggestedSourceLanguages: (s) => W9(() => {
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
const Y9 = window.Vue.resolveDirective, J9 = window.Vue.createElementVNode, nc = window.Vue.withDirectives, ce = window.Vue.unref, Ps = window.Vue.withCtx, Ht = window.Vue.createVNode, Fs = window.Vue.openBlock, km = window.Vue.createBlock, Q9 = window.Vue.createCommentVNode, oc = window.Vue.createElementBlock, Z9 = window.Vue.Fragment, eB = window.Vue.vShow, Ms = window.Vue.withModifiers, Ns = window.Vue.withKeys, tB = ["onKeydown"], nB = { class: "mb-0" }, oB = {
  key: 2,
  class: "sx-article-search__empty-suggestions-message my-0 px-4 py-16"
}, Eo = window.Vue.ref, sB = window.Vue.onMounted, Us = window.Vue.computed, xm = window.Vue.watch, aB = window.Vue.inject, iB = window.Vuex.useStore, rB = window.Codex.CdxButton, lB = window.Codex.CdxIcon, cB = window.Codex.CdxSearchInput, uB = 3, dB = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = Eo(""), n = Eo(!1), o = Eo(null), s = Eo(!1), a = Eo([]), i = iB(), {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u
    } = B(), { supportedSourceLanguageCodes: d } = Ys(), { searchResultsSlice: r } = Wc(c, t), { getSuggestedSourceLanguages: l } = K9(), g = l(a), p = X9(
      c,
      g
    ), m = Ae(), { fetchAllTranslations: h } = Io();
    sB(() => C(this, null, function* () {
      var O;
      h();
      try {
        a.value.push(
          ...JSON.parse(localStorage.getItem("uls-previous-languages"))
        );
      } catch (H) {
      }
      (O = o.value) == null || O.focus();
    }));
    const f = () => {
      m.push({ name: "dashboard" });
    }, _ = rh(), w = (O) => _(O, u.value), y = (O) => {
      if (O === "other") {
        s.value = !0;
        return;
      }
      w(O);
    };
    xm(
      c,
      () => {
        var O;
        i.dispatch("mediawiki/fetchNearbyPages"), (O = o.value) == null || O.focus();
      },
      { immediate: !0 }
    );
    const S = ot();
    xm(t, () => {
      n.value || (n.value = !0, S({
        event_type: "dashboard_search",
        translation_source_language: c.value,
        translation_target_language: u.value
      }));
    });
    const k = () => {
      s.value = !1;
    }, x = (O) => {
      s.value = !1, a.value.push(c.value), y(O);
    }, { fetchPreviousEditsInSource: L, previousEditsInSource: E } = Fc(), T = Eo([]);
    (() => L().then(() => E.value.length > 0 ? no.fetchPages(
      c.value,
      E.value
    ) : []).then((O) => {
      O = O.slice(0, uB), O = O.sort(
        (H, de) => E.value.indexOf(H.title) - E.value.indexOf(de.title)
      ), T.value = O;
    }))();
    const M = Us(() => i.getters["mediawiki/getNearbyPages"]), X = aB("breakpoints"), G = Us(() => X.value.mobile), pe = ta(), $e = Us(
      () => T.value && T.value.length
    ), ft = Us(
      () => M.value && M.value.length
    ), { next: Ve, prev: Ee, keyboardNavigationContainer: Pt, selectedItem: Ie } = ef(t, r, T), De = (O) => pe(
      O.title,
      c.value,
      u.value,
      oe.value
    ), oe = Us(() => t.value ? "search_result" : $e.value ? "suggestion_recent_edit" : ft.value ? "suggestion_nearby" : "");
    return (O, H) => {
      const de = Y9("i18n");
      return Fs(), oc("section", {
        ref_key: "keyboardNavigationContainer",
        ref: Pt,
        class: "sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto",
        onKeydown: [
          H[5] || (H[5] = Ns(Ms((...W) => ce(Ve) && ce(Ve)(...W), ["stop", "prevent"]), ["tab"])),
          H[6] || (H[6] = Ns(Ms((...W) => ce(Ve) && ce(Ve)(...W), ["stop", "prevent"]), ["down"])),
          H[7] || (H[7] = Ns(Ms((...W) => ce(Ee) && ce(Ee)(...W), ["stop", "prevent"]), ["up"])),
          Ns(Ms(f, ["stop", "prevent"]), ["esc"]),
          H[8] || (H[8] = Ns(Ms((W) => De(ce(Ie)), ["stop", "prevent"]), ["enter"]))
        ]
      }, [
        Ht(ce(P), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Ps(() => [
            Ht(ce(b), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Ps(() => [
                nc(J9("h5", nB, null, 512), [
                  [de, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            Ht(ce(b), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Ps(() => [
                Ht(ce(rB), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": O.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: f
                }, {
                  default: Ps(() => [
                    Ht(ce(lB), { icon: ce(Uo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Ht(ce(cB), {
          ref_key: "searchInputRef",
          ref: o,
          modelValue: t.value,
          "onUpdate:modelValue": H[0] || (H[0] = (W) => t.value = W),
          class: "sx-article-search__search-input",
          placeholder: O.$i18n("cx-sx-article-search-input-placeholder")
        }, null, 8, ["modelValue", "placeholder"]),
        Ht(ce(Gs), {
          class: "sx-article-search__language-button-group",
          items: ce(p),
          active: ce(c),
          onSelect: y
        }, null, 8, ["items", "active"]),
        t.value ? Q9("", !0) : (Fs(), oc(Z9, { key: 0 }, [
          $e.value ? (Fs(), km(Cm, {
            key: 0,
            "card-title": O.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: T.value,
            "selected-item": ce(Ie),
            onSuggestionClicked: H[1] || (H[1] = (W) => De(W))
          }, null, 8, ["card-title", "suggestions", "selected-item"])) : ft.value ? (Fs(), km(Cm, {
            key: 1,
            "card-title": O.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: M.value,
            onSuggestionClicked: H[2] || (H[2] = (W) => De(W))
          }, null, 8, ["card-title", "suggestions"])) : nc((Fs(), oc("p", oB, null, 512)), [
            [de, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        nc(Ht(M9, {
          "search-input": t.value,
          "selected-item": ce(Ie),
          onSuggestionClicked: H[3] || (H[3] = (W) => De(W))
        }, null, 8, ["search-input", "selected-item"]), [
          [eB, !!t.value]
        ]),
        Ht(ce(ht), {
          value: s.value,
          "onUpdate:value": H[4] || (H[4] = (W) => s.value = W),
          class: "sx-article-search-language-selector",
          fullscreen: G.value,
          header: G.value,
          title: O.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: k
        }, {
          default: Ps(() => [
            Ht(ce(tf), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: ce(d),
              suggestions: ce(g),
              placeholder: O.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: x,
              onClose: k
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ], 40, tB);
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
  const i = pB("sx-article-search");
  return fB(), wB("main", {
    class: hB(["sx-article-search-view", a.classes])
  }, [
    mB(i)
  ], 2);
}
const vB = /* @__PURE__ */ ne(gB, [["render", _B]]), SB = () => {
  const e = ta(), t = Qc(), { logDashboardOpenEvent: n, getEventSource: o } = rf(), {
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
}, yB = window.Vuex.useStore, bB = [
  {
    path: "",
    name: "dashboard",
    component: kg,
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
    component: kV,
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: I3,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: t5,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: QD,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: yD,
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
    component: y9,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: kg,
    meta: { workflowStep: 0 }
  }
], nu = Gb({
  history: qy(),
  routes: bB
}), sc = (e, t, n) => {
  e === t ? n() : n({ name: t });
}, CB = (e, t, n) => {
  let o = "cx_" + btoa(
    encodeURIComponent([n, e, t].join("_"))
  );
  return o = o.replace(/[()<>@,;\\[\]?={}]/g, ""), mw.cookie.get(o, "");
};
nu.beforeEach((e, t, n) => {
  const o = yB();
  if (mw.user.isAnon() || Dm.assertUser().catch((r) => {
    r instanceof Po && o.commit("application/setIsLoginDialogOn", !0);
  }), o.commit("application/setPreviousRoute", t.name), t.name) {
    n();
    return;
  }
  const s = SB(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: i,
    pageURLParameter: c,
    clearTranslationURLParameters: u
  } = B();
  if (!!(a.value && i.value && c.value)) {
    if (CB(
      a.value,
      i.value,
      c.value
    )) {
      const l = e.name === "sx-quick-tutorial" ? "sx-quick-tutorial" : "sx-sentence-selector";
      sc(e.name, l, n);
    } else
      e.name === "sx-translation-confirmer" && s(), sc(e.name, "sx-translation-confirmer", n);
    return;
  }
  u(), sc(e.name, "dashboard", n);
});
nu.afterEach((e, t) => {
  if (!t.name)
    return;
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const kB = window.Vue.createApp, xB = mw.config.get("wgUserLanguage"), $B = "en", VB = mw.messages.values || {}, Oo = kB(PS);
Oo.use(nu);
Oo.use(py);
Oo.use(s_);
Oo.use(o_);
const EB = F_({
  locale: xB,
  finalFallback: $B,
  messages: VB,
  wikilinks: !0
});
Oo.use(EB);
Oo.mount("#contenttranslation");
