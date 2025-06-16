var Xf = Object.defineProperty, Wf = Object.defineProperties;
var Kf = Object.getOwnPropertyDescriptors;
var Su = Object.getOwnPropertySymbols;
var Yf = Object.prototype.hasOwnProperty, Jf = Object.prototype.propertyIsEnumerable;
var yu = (e, t, n) => t in e ? Xf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, re = (e, t) => {
  for (var n in t || (t = {}))
    Yf.call(t, n) && yu(e, n, t[n]);
  if (Su)
    for (var n of Su(t))
      Jf.call(t, n) && yu(e, n, t[n]);
  return e;
}, We = (e, t) => Wf(e, Kf(t));
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
const ne = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, Qf = {
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
}, Zf = window.Vue.toDisplayString, Ji = window.Vue.openBlock, Qi = window.Vue.createElementBlock, ew = window.Vue.createCommentVNode, xu = window.Vue.createElementVNode, tw = window.Vue.normalizeClass, nw = ["width", "height", "aria-labelledby"], ow = ["id"], sw = ["fill"], aw = ["d"];
function iw(e, t, n, o, s, a) {
  return Ji(), Qi("span", {
    class: tw(["mw-ui-icon notranslate", a.classes])
  }, [
    (Ji(), Qi("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...r) => a.handleClick && a.handleClick(...r))
    }, [
      n.iconName ? (Ji(), Qi("title", {
        key: 0,
        id: n.iconName
      }, Zf(n.iconName), 9, ow)) : ew("", !0),
      xu("g", { fill: n.iconColor }, [
        xu("path", { d: a.iconImagePath }, null, 8, aw)
      ], 8, sw)
    ], 8, nw))
  ], 2);
}
const je = /* @__PURE__ */ ne(Qf, [["render", iw]]);
const rw = {
  name: "MwButton",
  components: {
    MwIcon: je
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
}, lw = window.Vue.renderSlot, cw = window.Vue.resolveComponent, bu = window.Vue.normalizeClass, wa = window.Vue.openBlock, Zi = window.Vue.createBlock, er = window.Vue.createCommentVNode, uw = window.Vue.toDisplayString, dw = window.Vue.createElementBlock, gw = window.Vue.toHandlerKey, pw = window.Vue.withModifiers, hw = window.Vue.mergeProps, fw = window.Vue.createElementVNode, ww = window.Vue.resolveDynamicComponent, _w = window.Vue.withCtx, vw = { class: "mw-ui-button__content" }, Sw = ["textContent"];
function yw(e, t, n, o, s, a) {
  const r = cw("mw-icon");
  return wa(), Zi(ww(a.component), {
    class: bu(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: _w(() => [
      lw(e.$slots, "default", {}, () => [
        fw("span", vw, [
          n.icon ? (wa(), Zi(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: bu(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : er("", !0),
          !a.isIcon && n.label ? (wa(), dw("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: uw(n.label)
          }, null, 8, Sw)) : er("", !0),
          n.indicator ? (wa(), Zi(r, hw({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [gw(a.indicatorClickEvent)]: t[0] || (t[0] = pw((c) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : er("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const Ne = /* @__PURE__ */ ne(rw, [["render", yw]]);
const xw = {
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
}, bw = window.Vue.renderList, Cw = window.Vue.Fragment, tr = window.Vue.openBlock, Cu = window.Vue.createElementBlock, kw = window.Vue.resolveComponent, $w = window.Vue.withModifiers, Vw = window.Vue.mergeProps, Ew = window.Vue.createBlock, Lw = { class: "row mw-ui-button-group ma-0 pa-0" };
function Aw(e, t, n, o, s, a) {
  const r = kw("mw-button");
  return tr(), Cu("div", Lw, [
    (tr(!0), Cu(Cw, null, bw(n.items, (c) => (tr(), Ew(r, Vw({
      key: c.value,
      value: c.value,
      "aria-selected": a.isActive(c) || null,
      ref_for: !0
    }, c.props, {
      class: ["ma-0", a.buttonClasses(c)],
      style: a.activeIndicatorStyle(c),
      onClick: $w((u) => e.$emit("select", c.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const ta = /* @__PURE__ */ ne(xw, [["render", Aw]]);
const Dw = {
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
}, ku = window.Vue.renderSlot, Tw = window.Vue.toDisplayString, $u = window.Vue.openBlock, Vu = window.Vue.createElementBlock, Bw = window.Vue.createCommentVNode, Pw = window.Vue.createElementVNode, Fw = { class: "mw-ui-card" }, Mw = ["textContent"], Nw = { class: "mw-ui-card__content" };
function Uw(e, t, n, o, s, a) {
  return $u(), Vu("div", Fw, [
    ku(e.$slots, "header", {}, () => [
      n.title ? ($u(), Vu("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: Tw(n.title)
      }, null, 8, Mw)) : Bw("", !0)
    ]),
    Pw("div", Nw, [
      ku(e.$slots, "default")
    ])
  ]);
}
const Ye = /* @__PURE__ */ ne(Dw, [["render", Uw]]);
const Iw = {}, Rw = window.Vue.openBlock, zw = window.Vue.createElementBlock, Ow = { class: "mw-ui-divider row" };
function jw(e, t) {
  return Rw(), zw("div", Ow);
}
const Bi = /* @__PURE__ */ ne(Iw, [["render", jw]]);
const Hw = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, qw = window.Vue.renderSlot, Gw = window.Vue.resolveDynamicComponent, Xw = window.Vue.withCtx, Ww = window.Vue.openBlock, Kw = window.Vue.createBlock;
function Yw(e, t, n, o, s, a) {
  return Ww(), Kw(Gw(n.tag), { class: "mw-grid container" }, {
    default: Xw(() => [
      qw(e.$slots, "default")
    ]),
    _: 3
  });
}
const Jw = /* @__PURE__ */ ne(Hw, [["render", Yw]]), Qw = {
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
}, Zw = window.Vue.renderSlot, e0 = window.Vue.resolveDynamicComponent, t0 = window.Vue.normalizeClass, n0 = window.Vue.withCtx, o0 = window.Vue.openBlock, s0 = window.Vue.createBlock;
function a0(e, t, n, o, s, a) {
  return o0(), s0(e0(n.tag), {
    class: t0(a.classes)
  }, {
    default: n0(() => [
      Zw(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const P = /* @__PURE__ */ ne(Qw, [["render", a0]]), wc = ["mobile", "tablet", "desktop", "desktop-wide"], i0 = wc.reduce(
  (e, t) => We(re({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), r0 = {
  name: "MwCol",
  props: We(re({}, i0), {
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
      for (let n = 0; n < wc.length; n++) {
        let o = wc[n], s = this.$props[o];
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
}, l0 = window.Vue.renderSlot, c0 = window.Vue.resolveDynamicComponent, u0 = window.Vue.normalizeClass, d0 = window.Vue.withCtx, g0 = window.Vue.openBlock, p0 = window.Vue.createBlock;
function m0(e, t, n, o, s, a) {
  return g0(), p0(c0(n.tag), {
    class: u0(a.classes)
  }, {
    default: d0(() => [
      l0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const b = /* @__PURE__ */ ne(r0, [["render", m0]]), h0 = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", f0 = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", Pi = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", w0 = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, _0 = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", Hm = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", v0 = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", S0 = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", na = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", y0 = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", x0 = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", b0 = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", Eu = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", C0 = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", qm = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", k0 = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", $0 = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", V0 = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", E0 = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", L0 = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", A0 = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, Li = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, D0 = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, Gm = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, T0 = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, Xm = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", B0 = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z";
const nr = window.Vue.computed, P0 = window.Vue.watch, F0 = window.Vue.ref, M0 = window.Vue.nextTick, N0 = {
  name: "MwDialog",
  components: {
    MwButton: Ne,
    MwRow: P,
    MwCol: b,
    MwDivider: Bi
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
    const n = F0(null), o = nr(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = nr(
      () => `mw-ui-dialog__overlay--${e.overlayMode}`
    ), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, r = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    P0(
      () => e.value,
      (u) => {
        u ? (r(), M0(() => {
          n.value.focus();
        })) : a();
      }
    );
    const c = nr(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: c,
      overlayClass: s,
      mwIconClose: na,
      root: n
    };
  }
}, Lu = window.Vue.normalizeClass, or = window.Vue.createElementVNode, sr = window.Vue.renderSlot, _a = window.Vue.resolveComponent, Wo = window.Vue.createVNode, ar = window.Vue.withCtx, Au = window.Vue.createCommentVNode, U0 = window.Vue.withKeys, Du = window.Vue.openBlock, I0 = window.Vue.createElementBlock, R0 = window.Vue.Transition, z0 = window.Vue.normalizeStyle, O0 = window.Vue.createBlock, j0 = { class: "mw-ui-dialog__shell items-stretch" }, H0 = { class: "mw-ui-dialog__body" };
function q0(e, t, n, o, s, a) {
  const r = _a("mw-col"), c = _a("mw-button"), u = _a("mw-row"), d = _a("mw-divider");
  return Du(), O0(R0, {
    name: "mw-ui-animation-fade",
    style: z0(o.cssVars)
  }, {
    default: ar(() => [
      n.value ? (Du(), I0("div", {
        key: 0,
        ref: "root",
        class: Lu(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = U0((i) => n.closeOnEscapeKey && o.close(), ["esc"]))
      }, [
        or("div", {
          class: Lu(["mw-ui-dialog__overlay", o.overlayClass]),
          onClick: t[0] || (t[0] = (i) => !n.persistent && o.close())
        }, null, 2),
        or("div", j0, [
          n.header ? sr(e.$slots, "header", { key: 0 }, () => [
            Wo(u, { class: "mw-ui-dialog__header" }, {
              default: ar(() => [
                Wo(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                Wo(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: ar(() => [
                    Wo(c, {
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
            Wo(d)
          ]) : Au("", !0),
          or("div", H0, [
            sr(e.$slots, "default")
          ]),
          sr(e.$slots, "footer")
        ])
      ], 34)) : Au("", !0)
    ]),
    _: 3
  }, 8, ["style"]);
}
const St = /* @__PURE__ */ ne(N0, [["render", q0]]);
const G0 = {
  name: "MwInput",
  components: {
    MwIcon: je
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
      const t = re({}, e.$attrs);
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
}, Tu = window.Vue.renderSlot, X0 = window.Vue.resolveComponent, va = window.Vue.openBlock, ir = window.Vue.createBlock, Bu = window.Vue.createCommentVNode, W0 = window.Vue.resolveDynamicComponent, K0 = window.Vue.toDisplayString, Y0 = window.Vue.mergeProps, J0 = window.Vue.withModifiers, Q0 = window.Vue.createElementVNode, Z0 = window.Vue.normalizeClass, e1 = window.Vue.createElementBlock, t1 = { class: "mw-ui-input__content" };
function n1(e, t, n, o, s, a) {
  const r = X0("mw-icon");
  return va(), e1("div", {
    class: Z0(a.classes),
    onClick: t[2] || (t[2] = (c) => a.focus())
  }, [
    Q0("div", t1, [
      Tu(e.$slots, "icon", {}, () => [
        n.icon ? (va(), ir(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : Bu("", !0)
      ]),
      (va(), ir(W0(n.type === "textarea" ? n.type : "input"), Y0({
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
        textContent: K0(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      Tu(e.$slots, "indicator", {}, () => [
        n.indicator ? (va(), ir(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = J0((c) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : Bu("", !0)
      ])
    ])
  ], 2);
}
const _c = /* @__PURE__ */ ne(G0, [["render", n1]]);
const o1 = {
  name: "MwMessage",
  components: { MwCol: b, MwRow: P, MwIcon: je, MwButton: Ne },
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
    mwIconClose: na,
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
      notice: A0,
      warning: Gm,
      success: Li,
      error: D0
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
}, rr = window.Vue.renderSlot, Sa = window.Vue.resolveComponent, Pu = window.Vue.createVNode, Fu = window.Vue.withCtx, Mu = window.Vue.openBlock, Nu = window.Vue.createBlock, Uu = window.Vue.createCommentVNode, s1 = window.Vue.normalizeClass;
function a1(e, t, n, o, s, a) {
  const r = Sa("mw-icon"), c = Sa("mw-col"), u = Sa("mw-button"), d = Sa("mw-row");
  return e.shown ? (Mu(), Nu(d, {
    key: 0,
    class: s1([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: Fu(() => [
      rr(e.$slots, "icon", {}, () => [
        Pu(r, {
          icon: a.icon,
          size: 24,
          class: "col shrink mw-ui-message__icon pa-1 items-start"
        }, null, 8, ["icon"])
      ]),
      Pu(c, {
        id: `${e.id}-label`,
        tag: "span",
        grow: "",
        align: "center",
        class: "mw-ui-message__label"
      }, {
        default: Fu(() => [
          rr(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id"]),
      rr(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (Mu(), Nu(u, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : Uu("", !0)
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : Uu("", !0);
}
const i1 = /* @__PURE__ */ ne(o1, [["render", a1]]);
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
const r1 = {}, l1 = window.Vue.createElementVNode, c1 = window.Vue.openBlock, u1 = window.Vue.createElementBlock, d1 = { class: "mw-ui-spinner" }, g1 = /* @__PURE__ */ l1("div", { class: "mw-ui-spinner__bounce" }, null, -1), p1 = [
  g1
];
function m1(e, t) {
  return c1(), u1("div", d1, p1);
}
const it = /* @__PURE__ */ ne(r1, [["render", m1]]), wt = {
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
const h1 = window.Vue.computed, f1 = {
  name: "MwUiThumbnail",
  components: { MwUiIcon: je },
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
      default: Xm
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: wt.gray600
    },
    placeholderBackgroundColor: {
      type: String,
      default: wt.gray200
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = h1(() => {
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
}, Iu = window.Vue.normalizeStyle, Ru = window.Vue.openBlock, w1 = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const _1 = window.Vue.resolveComponent, v1 = window.Vue.createBlock;
function S1(e, t, n, o, s, a) {
  const r = _1("mw-ui-icon");
  return n.thumbnail ? (Ru(), w1("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Iu(o.style)
  }, null, 4)) : (Ru(), v1(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Iu(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Fc = /* @__PURE__ */ ne(f1, [["render", S1]]);
const y1 = {
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
}, x1 = window.Vue.vModelRadio, Vi = window.Vue.createElementVNode, b1 = window.Vue.withDirectives, C1 = window.Vue.toDisplayString, k1 = window.Vue.resolveComponent, $1 = window.Vue.normalizeClass, V1 = window.Vue.withCtx, E1 = window.Vue.openBlock, L1 = window.Vue.createBlock, A1 = { class: "mw-ui-radio__controls" }, D1 = ["id", "disabled", "name", "value"], T1 = /* @__PURE__ */ Vi("span", { class: "mw-ui-radio__controls__icon" }, null, -1), B1 = ["for", "textContent"];
function P1(e, t, n, o, s, a) {
  const r = k1("mw-row");
  return E1(), L1(r, {
    class: $1(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: V1(() => [
      Vi("div", A1, [
        b1(Vi("input", {
          id: n.id,
          "onUpdate:modelValue": t[0] || (t[0] = (c) => a.inputModel = c),
          type: "radio",
          disabled: n.disabled || null,
          name: n.name,
          value: n.inputValue
        }, null, 8, D1), [
          [x1, a.inputModel]
        ]),
        T1
      ]),
      Vi("label", {
        for: n.id,
        class: "ps-2",
        textContent: C1(n.label)
      }, null, 8, B1)
    ]),
    _: 1
  }, 8, ["class"]);
}
const vc = /* @__PURE__ */ ne(y1, [["render", P1]]), zu = window.Vue.h, F1 = {
  name: "MwRadioGroup",
  components: { MwRadio: vc },
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
      (o) => zu(vc, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), zu("div", { class: "mw-ui-radio-group" }, n);
  }
};
const M1 = {
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
}, Ou = window.Vue.normalizeClass, ju = window.Vue.normalizeStyle, N1 = window.Vue.createElementVNode, U1 = window.Vue.openBlock, I1 = window.Vue.createElementBlock, R1 = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function z1(e, t, n, o, s, a) {
  return U1(), I1("div", {
    class: Ou(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: ju(a.containerStyles)
  }, [
    N1("div", {
      class: Ou(["mw-progress-bar__bar", a.barClass]),
      style: ju(a.barStyles)
    }, null, 6)
  ], 14, R1);
}
const Wm = /* @__PURE__ */ ne(M1, [["render", z1]]), O1 = (e, t, n, o) => (s) => {
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
}, j1 = (e, t, n, o) => ({ initiateDrag: O1(
  e,
  t,
  n,
  o
) }), H1 = window.Vue.ref, Hu = window.Vue.computed, q1 = (e, t, n, o) => {
  const s = H1(0), a = Hu(
    () => t.value > e.value
  ), r = Hu(
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
const ya = window.Vue.ref, G1 = window.Vue.onMounted, qu = window.Vue.computed, X1 = window.Vue.nextTick, W1 = {
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
    const t = ya(!0), n = ya(null), o = qu(
      () => Math.min(e.minHeight, s.value)
    ), s = ya(1), { initiateDrag: a } = j1(
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
    } = q1(o, s, n, t), l = () => d(u.value + 1), g = ya(null), p = qu(() => ({
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
    return G1(() => C(this, null, function* () {
      var f;
      yield X1(), s.value = n.value.scrollHeight, (f = g.value) == null || f.addEventListener(
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
      mwIconCollapse: T0,
      mwIconExpand: v0,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), d(0)), t.value = !t.value;
      },
      scrollable: c,
      scrollIndex: u,
      scrollToNextStep: l
    };
  }
}, K1 = window.Vue.renderSlot, Y1 = window.Vue.normalizeClass, xa = window.Vue.createElementVNode, J1 = window.Vue.resolveComponent, Q1 = window.Vue.createVNode, lr = window.Vue.openBlock, Z1 = window.Vue.createBlock, Gu = window.Vue.createCommentVNode, Xu = window.Vue.createElementBlock, e_ = window.Vue.normalizeStyle, t_ = { class: "mw-ui-expandable-content__container" }, n_ = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, o_ = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function s_(e, t, n, o, s, a) {
  const r = J1("mw-button");
  return lr(), Xu("div", {
    class: "mw-ui-expandable-content",
    style: e_(o.cssVars)
  }, [
    xa("div", t_, [
      xa("div", {
        ref: "contentRef",
        class: Y1(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        K1(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (lr(), Xu("div", n_, [
        Q1(r, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (lr(), Z1(r, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : Gu("", !0)
      ])) : Gu("", !0)
    ]),
    xa("div", o_, [
      xa("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...c) => o.onDragButtonClicked && o.onDragButtonClicked(...c))
      })
    ], 512)
  ], 4);
}
const a_ = /* @__PURE__ */ ne(W1, [["render", s_]]);
const ba = window.Vue.computed, i_ = {
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
      default: wt.blue600
    },
    inactiveColor: {
      type: String,
      default: wt.gray300
    },
    strokeWidth: {
      type: Number,
      default: 2
    }
  },
  setup(e) {
    const t = ba(() => e.size / 2 * 0.9), n = ba(() => Math.PI * (t.value * 2)), o = ba(
      () => (100 - e.percentage) / 100 * n.value
    ), s = ba(() => ({
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
}, Wu = window.Vue.createElementVNode, Ku = window.Vue.normalizeStyle, r_ = window.Vue.openBlock, l_ = window.Vue.createElementBlock, c_ = ["width", "height", "viewport"], u_ = ["r", "cx", "cy", "stroke-dasharray"], d_ = ["r", "cx", "cy", "stroke-dasharray"];
function g_(e, t, n, o, s, a) {
  return r_(), l_("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: Ku(o.cssVars)
  }, [
    Wu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, u_),
    Wu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: Ku({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, d_)
  ], 12, c_);
}
const p_ = /* @__PURE__ */ ne(i_, [["render", g_]]), m_ = window.Vue.ref, wn = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, bn = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${wn.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${wn.tablet}px) and (max-width: ${wn.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${wn.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${wn.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${wn["desktop-wide"] - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${wn.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${wn["desktop-wide"]}px)`
}, cr = {
  mobile: () => matchMedia(bn.mobile).matches,
  tablet: () => matchMedia(bn.tablet).matches,
  desktop: () => matchMedia(bn.desktop).matches,
  desktopwide: () => matchMedia(bn["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(bn["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(bn["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(bn["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(bn["desktop-and-down"]).matches
}, h_ = (e) => {
  const t = Object.values(wn);
  for (let n = 0; n < t.length; n++)
    if (e < t[n])
      return t[n];
  return null;
}, f_ = {
  install: (e) => {
    const t = m_({
      nextBreakpoint: null
    }), n = () => {
      const o = window.innerWidth;
      for (let s in cr)
        cr.hasOwnProperty(s) && (t.value[s] = cr[s]());
      t.value.nextBreakpoint = h_(o);
    };
    n(), window.addEventListener("resize", n), e.config.globalProperties.$mwui = We(re({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: t.value
    }), e.provide("breakpoints", t);
  }
}, w_ = {
  install: (e) => {
    e.config.globalProperties.$mwui = We(re({}, e.config.globalProperties.$mwui || {}), {
      colors: wt
    }), e.provide("colors", wt);
  }
};
class Uo extends Error {
}
const __ = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new Uo();
}), Km = { assertUser: __ };
const v_ = window.Vue.resolveDirective, Ko = window.Vue.createElementVNode, Yu = window.Vue.withDirectives, S_ = window.Vue.toDisplayString, y_ = window.Vue.unref, Ju = window.Vue.withCtx, x_ = window.Vue.openBlock, b_ = window.Vue.createBlock, C_ = window.Vue.createCommentVNode, k_ = { class: "pa-4 sx-login-dialog__header" }, $_ = { class: "sx-login-dialog__body px-6 pb-4" }, V_ = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, E_ = ["href"], L_ = window.Vue.computed, A_ = window.Vue.ref, D_ = window.Vuex.useStore, T_ = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = D_(), n = L_(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = A_(mw.util.getUrl("Special:UserLogin"));
    return (a, r) => {
      const c = v_("i18n");
      return n.value ? (x_(), b_(y_(St), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: Ju(() => [
          Ko("div", k_, [
            Yu(Ko("h4", null, null, 512), [
              [c, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: Ju(() => [
          Yu(Ko("div", $_, null, 512), [
            [c, void 0, "cx-sx-login-dialog-body"]
          ]),
          Ko("div", V_, [
            Ko("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, S_(a.$i18n("cx-sx-login-dialog-button-label")), 9, E_)
          ])
        ]),
        _: 1
      })) : C_("", !0);
    };
  }
}, Q = new mw.cx.SiteMapper(), B_ = mw.util.getUrl, P_ = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
}, oa = !mw.config.get("wgMFMode");
class Mc {
  /**
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
const Ca = "original", ka = "empty", F_ = {
  Elia: "Elia.eus",
  Google: "Google Translate",
  Yandex: "Yandex.Translate"
};
class Z {
  /**
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string[]} providers
   */
  constructor(t, n, o = []) {
    this.sourceLanguage = t, this.targetLanguage = n, this.providers = [
      ...o,
      Ca,
      ka
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return F_[t] || t;
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
    return Ca;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return ka;
  }
  static isUserMTProvider(t) {
    return [Ca, ka].includes(
      t
    );
  }
  static getProviderForInstrumentation(t) {
    return t === ka ? "blank" : t === Ca ? "source" : t.toLowerCase();
  }
}
class Un {
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = We(re({}, a), {
      [Z.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [Z.EMPTY_TEXT_PROVIDER_KEY]: ""
    }), this.selected = r;
  }
  reset() {
    this.proposedTranslations = {
      [Z.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalContent,
      [Z.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedContent = "", this.mtProviderUsed = "", this.selected = !1;
  }
  /**
   * @return {string}
   */
  get originalContent() {
    return this.proposedTranslations[Z.ORIGINAL_TEXT_PROVIDER_KEY];
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
const Qu = (e) => {
  var n;
  const t = Ai(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, Ai = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, oo = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), Ym = (e) => {
  const t = Ai(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = M_(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, M_ = (e) => {
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
}, Jm = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, Qm = (e) => {
  const t = Jm(e);
  return t == null ? void 0 : t.targetExists;
};
class ur {
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
class st {
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
      (a) => oo(a)
    );
    s && Qm(s) && (this.blockTemplateAdaptationInfo[t] = Jm(s));
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
      (t) => oo(t)
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
    const t = Ai(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? Qu(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => oo(o));
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
    return n && Qu(n) || "";
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
    const o = Ai(n);
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
      (a) => oo(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new ur({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new ur({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new ur({
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
    if (!t || Z.isUserMTProvider(t))
      return null;
    if (this.isBlockTemplate) {
      n.innerHTML = this.blockTemplateProposedTranslations[t];
      const o = Array.from(n.children).find(
        (s) => oo(s)
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
const N_ = [
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
], U_ = (e, t, n) => {
  if (!e || !t)
    return 0;
  if (e === t)
    return 1;
  const o = Zu(e, n), s = Zu(t, n), a = I_(o, s), r = Math.max(o.length, s.length);
  return a / r;
}, I_ = (e, t) => {
  const n = e.length, o = t.length, s = Array(n + 1).fill().map(() => Array(o + 1).fill(0));
  for (let a = 1; a <= n; a++)
    for (let r = 1; r <= o; r++)
      e[a - 1] === t[r - 1] ? s[a][r] = s[a - 1][r - 1] + 1 : s[a][r] = Math.max(s[a - 1][r], s[a][r - 1]);
  return s[n][o];
}, Zu = function(e, t) {
  return e ? N_.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, Nc = mw.config.get(
  "wgContentTranslationUnmodifiedMTThresholdForPublish",
  95
), R_ = Nc - 10, z_ = [
  { status: "failure", value: 100 - Nc },
  { status: "warning", value: 100 - R_ },
  { status: "success", value: 100 }
], Zm = (e, t, n) => {
  const o = ed(e).textContent, s = ed(t).textContent, a = 100 - 100 * U_(s, o, n);
  return Math.ceil(a);
}, O_ = (e) => z_.find((t) => e <= t.value).status, j_ = (e, t) => Zm(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), H_ = () => (100 - Nc) / 100, ed = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, Wt = {
  calculateScore: Zm,
  getScoreStatus: O_,
  getMTScoreForPageSection: j_,
  getMtModificationThreshold: H_
}, $a = "__LEAD_SECTION__";
class Sc {
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
      [Z.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [Z.EMPTY_TEXT_PROVIDER_KEY]: ""
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
      [Z.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalTitle,
      [Z.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedTitle = "", this.subSections.forEach((t) => t.reset());
  }
  static get LEAD_SECTION_DUMMY_TITLE() {
    return $a;
  }
  static isSectionLead(t) {
    return !t || t === $a;
  }
  set originalTitle(t) {
    this.proposedTitleTranslations[Z.ORIGINAL_TEXT_PROVIDER_KEY] = t;
  }
  /**
   * @return {string}
   */
  get originalTitle() {
    return this.proposedTitleTranslations[Z.ORIGINAL_TEXT_PROVIDER_KEY];
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
    return n instanceof st ? n.transclusionNode.outerHTML : n instanceof Un ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof st ? t.blockTemplateSelected = !1 : t instanceof Un && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof st ? n.blockTemplateSelected = !0 : n instanceof Un && (n.selected = !0);
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
    if (o instanceof st)
      return !!o.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (o instanceof Un)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof st ? n.blockTemplateProposedTranslations[t] || "" : n instanceof Un ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof st ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof Un && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
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
    return this.isLeadSection ? $a : this.originalTitle;
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
    return this.isLeadSection ? $a : this.title;
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
class Fi extends Mc {
  /**
   * @param {number|null} sectionTranslationId
   * @param {number} translationId
   * @param {string|null} sectionId
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
    return Sc.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? Sc.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const Pt = "previous-edits", Kt = "popular", Me = "topic", ft = "geography", te = "collections", at = "automatic", _t = "seed", td = window.Vue.ref, q_ = mw.loader.require("ext.cx.articletopics"), Va = {
  type: at,
  id: Pt
}, Uc = () => {
  const e = td(
    q_.flatMap((s) => s.topics).map((s) => s.topicId.toLowerCase())
  ), t = td(!1);
  return { filtersValidatorError: t, validateFilters: ({ type: s, id: a }, r = !1) => {
    t.value = !1;
    const c = s == null ? void 0 : s.toLowerCase(), u = a == null ? void 0 : a.toLowerCase();
    if (u === Pt)
      return {
        type: at,
        id: Pt
      };
    if (u === Kt)
      return {
        type: at,
        id: Kt
      };
    try {
      if (c === Me) {
        if (!e.value.some((d) => d === a))
          throw new Error();
        return { type: c, id: u };
      } else if (c === te) {
        if (r && !r.some((d) => d.name.toLowerCase() === u))
          throw new Error();
        return { type: c, id: a };
      } else if (u === te) {
        if (r && !r.length)
          throw new Error();
        return {
          type: at,
          id: te
        };
      } else if (c === _t)
        return { type: c, id: a };
    } catch (d) {
      return t.value = !0, Va;
    }
    return Va;
  }, isDefaultFilter: ({ type: s, id: a }) => s === Va.type && a === Va.id };
}, G_ = window.Vue.inject, X_ = window.Vue.reactive;
var W_ = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, eh = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(W_, function() {
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
            function _(A) {
              return () => {
                for (let j = 0; j < A.length; j++) {
                  const Xe = A[j]();
                  if (Xe !== null)
                    return Xe;
                }
                return null;
              };
            }
            function w(A) {
              const j = f, Xe = [];
              for (let Jt = 0; Jt < A.length; Jt++) {
                const Qt = A[Jt]();
                if (Qt === null)
                  return f = j, null;
                Xe.push(Qt);
              }
              return Xe;
            }
            function S(A, j) {
              return () => {
                const Xe = f, Jt = [];
                let Qt = j();
                for (; Qt !== null; )
                  Jt.push(Qt), Qt = j();
                return Jt.length < A ? (f = Xe, null) : Jt;
              };
            }
            function x(A) {
              const j = A.length;
              return () => {
                let Xe = null;
                return m.slice(f, f + j) === A && (Xe = A, f += j), Xe;
              };
            }
            function k(A) {
              return () => {
                const j = m.slice(f).match(A);
                return j === null ? null : (f += j[0].length, j[0]);
              };
            }
            const y = k(/^\s+/), E = x("|"), M = x(":"), V = x("\\"), B = k(/^./), I = x("$"), X = k(/^\d+/), K = x('"'), Ee = x("'"), be = k(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), N = k(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), W = _([oe, k(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function oe() {
              const A = w([V, B]);
              return A === null ? null : A[1];
            }
            const ae = _([oe, N]), De = _([oe, be]);
            function ie() {
              const A = w([I, X]);
              return A === null ? null : ["REPLACE", parseInt(A[1], 10) - 1];
            }
            const Y = (Ge = k(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), Le = function(A) {
              return A.toString();
            }, () => {
              const A = Ge();
              return A === null ? null : Le(A);
            });
            var Ge, Le;
            function U() {
              const A = w([E, S(0, ma)]);
              if (A === null)
                return null;
              const j = A[1];
              return j.length > 1 ? ["CONCAT"].concat(j) : j[0];
            }
            function H() {
              const A = w([Y, M, ie]);
              return A === null ? null : [A[0], A[2]];
            }
            function v() {
              const A = w([Y, M, ma]);
              return A === null ? null : [A[0], A[2]];
            }
            function L() {
              const A = w([Y, M]);
              return A === null ? null : [A[0], ""];
            }
            const D = _([function() {
              const A = w([_([H, v, L]), S(0, U)]);
              return A === null ? null : A[0].concat(A[1]);
            }, function() {
              const A = w([Y, S(0, U)]);
              return A === null ? null : [A[0]].concat(A[1]);
            }]), F = x("{{"), q = x("}}"), le = x("[["), z = x("]]"), O = x("["), se = x("]");
            function Ie() {
              const A = w([F, D, q]);
              return A === null ? null : A[1];
            }
            const he = _([function() {
              const A = w([S(1, ma), E, S(1, pa)]);
              return A === null ? null : [["CONCAT"].concat(A[0]), ["CONCAT"].concat(A[2])];
            }, function() {
              const A = w([S(1, ma)]);
              return A === null ? null : [["CONCAT"].concat(A[0])];
            }]);
            function we() {
              let A = null;
              const j = w([le, he, z]);
              if (j !== null) {
                const Xe = j[1];
                A = ["WIKILINK"].concat(Xe);
              }
              return A;
            }
            function On() {
              let A = null;
              const j = w([O, S(1, zf), y, S(1, pa), se]);
              return j !== null && (A = ["EXTLINK", j[1].length === 1 ? j[1][0] : ["CONCAT"].concat(j[1]), ["CONCAT"].concat(j[3])]), A;
            }
            const Xo = k(/^[A-Za-z]+/);
            function Yt() {
              const A = k(/^[^"]*/), j = w([K, A, K]);
              return j === null ? null : j[1];
            }
            function Uf() {
              const A = k(/^[^']*/), j = w([Ee, A, Ee]);
              return j === null ? null : j[1];
            }
            function If() {
              const A = k(/^\s*=\s*/), j = w([y, Xo, A, _([Yt, Uf])]);
              return j === null ? null : [j[1], j[3]];
            }
            function Rf() {
              const A = S(0, If)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], A);
            }
            const zf = _([Ie, ie, we, On, function() {
              const A = S(1, W)();
              return A === null ? null : A.join("");
            }]), pa = _([Ie, ie, we, On, function() {
              let A = null;
              const j = f, Xe = x("<"), Jt = k(/^\/?/), Qt = k(/^\s*>/), Gi = w([Xe, Xo, Rf, Jt, Qt]);
              if (Gi === null)
                return null;
              const fu = f, wu = Gi[1], Xi = S(0, pa)(), Of = f, _u = w([x("</"), Xo, Qt]);
              if (_u === null)
                return ["CONCAT", m.slice(j, fu)].concat(Xi);
              const jf = f, Hf = _u[1], vu = Gi[2];
              if (function(jn, ha, Wi, Ki = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((jn = jn.toLowerCase()) !== (ha = ha.toLowerCase()) || Ki.allowedHtmlElements.indexOf(jn) === -1)
                  return !1;
                const qf = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let fa = 0, Gf = Wi.length; fa < Gf; fa += 2) {
                  const Yi = Wi[fa];
                  if (Ki.allowedHtmlCommonAttributes.indexOf(Yi) === -1 && (Ki.allowedHtmlAttributesByElement[jn] || []).indexOf(Yi) === -1 || Yi === "style" && Wi[fa + 1].search(qf) !== -1)
                    return !1;
                }
                return !0;
              }(wu, Hf, vu.slice(1)))
                A = ["HTMLELEMENT", wu, vu].concat(Xi);
              else {
                const jn = (ha) => ha.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                A = ["CONCAT", jn(m.slice(j, fu))].concat(Xi, jn(m.slice(Of, jf)));
              }
              return A;
            }, function() {
              const A = S(1, De)();
              return A === null ? null : A.join("");
            }]), ma = _([Ie, ie, function() {
              const A = S(1, ae)();
              return A === null ? null : A.join("");
            }]), hu = function() {
              const A = S(0, pa)();
              return A === null ? null : ["CONCAT"].concat(A);
            }();
            if (hu === null || f !== m.length)
              throw new Error("Parse error at position " + f.toString() + " in input: " + m);
            return hu;
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
})(eh);
var K_ = eh.exports;
const nd = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, th = Symbol("banana-context");
function de() {
  const e = G_(th);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function Y_(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = X_(new K_(e.locale, e));
  return {
    install: (n) => {
      n.provide(th, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: r } = nd(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...r) : o.textContent = t.i18n(a, ...r);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: r } = nd(s);
        o.innerHTML = t.i18n(a, ...r);
      });
    }
  };
}
const Sn = window.Vue.ref, J_ = window.Vue.computed, Mi = Sn(null), Ni = Sn(null), Ui = Sn(null), sa = Sn(null), Ic = Sn(null), Ii = Sn(null), nh = Sn(null), oh = Sn(null), Rc = Sn(null), { validateFilters: Q_, filtersValidatorError: Z_ } = Uc(), sh = {
  from: Mi,
  to: Ni,
  section: sa,
  draft: Ic,
  page: Ui,
  revision: Ii,
  "active-list": Rc
}, ev = J_(() => ({
  type: nh.value,
  id: oh.value
})), ah = (e, t) => {
  nh.value = e, oh.value = t, Di("filter-type", e), t && Di("filter-id", t);
}, tv = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  e instanceof Fi && (n.draft = !0, n.revision = e.pageRevision, e.isLeadSectionTranslation || (n.section = e.sourceSectionTitle));
  for (const o in n) {
    const s = n[o];
    t.set(o, s), sh[o].value = s;
  }
  t.delete("title"), aa(Object.fromEntries(t));
}, zc = (e, t) => {
  sh[e].value = t, Di(e, t);
}, nv = (e) => {
  zc("section", e);
}, ov = (e) => {
  zc("page", e);
}, sv = (e) => {
  zc("active-list", e);
}, aa = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    B_(`Special:ContentTranslation${t}`, e)
  );
}, av = () => {
  const e = de(), t = new URLSearchParams(location.search);
  Ui.value = t.get("page"), Mi.value = t.get("from"), Ni.value = t.get("to"), sa.value = t.get("section"), Ii.value = t.get("revision"), Rc.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
  const n = Q_({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  ah(n.type, n.id), Z_.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, iv = () => {
  const e = new URLSearchParams(location.search);
  sa.value = null, e.delete("section"), e.delete("title"), aa(Object.fromEntries(e));
}, Di = (e, t) => {
  const n = new URLSearchParams(location.search);
  t == null ? n.delete(e) : n.set(e, t), n.delete("title"), aa(Object.fromEntries(n));
}, rv = (e) => new URLSearchParams(location.search).get(e), lv = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), Mi.value = e, Ni.value = t, n.delete("title"), aa(Object.fromEntries(n));
}, cv = () => {
  const e = new URLSearchParams(location.search);
  Ui.value = null, sa.value = null, Ic.value = null, Ii.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("revision"), e.delete("title"), aa(Object.fromEntries(e));
}, uv = () => new URLSearchParams(location.search).get("force-quick-tutorial"), T = () => ({
  isQuickTutorialForced: uv,
  setLanguageURLParams: lv,
  setSectionURLParam: nv,
  setTranslationURLParams: tv,
  initializeURLState: av,
  clearTranslationURLParameters: cv,
  clearSectionURLParameter: iv,
  setUrlParam: Di,
  getUrlParam: rv,
  pageURLParameter: Ui,
  sourceLanguageURLParameter: Mi,
  targetLanguageURLParameter: Ni,
  sectionURLParameter: sa,
  draftURLParameter: Ic,
  revisionURLParameter: Ii,
  setPageURLParam: ov,
  currentSuggestionFilters: ev,
  setFilterURLParams: ah,
  activeDashboardTabParameter: Rc,
  setActiveDashboardTabParameter: sv
}), dv = () => Q.getLanguagePairs();
function gv(e, t) {
  return C(this, null, function* () {
    const n = Q.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new Z(e, t, o.mt)
      )
    );
  });
}
function pv() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function mv(e, t, n, o) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const s = mw.config.get("wgWikiID"), a = Q.getWikiDomainCode(e), r = Q.getWikiDomainCode(t), c = {
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
const Ri = {
  fetchSupportedLanguageCodes: dv,
  fetchSupportedMTProviders: gv,
  fetchCXServerToken: pv,
  addWikibaseLink: mv
}, Oc = window.Vue.ref, od = Oc([]), sd = Oc([]), ad = Oc(!1);
function ia() {
  return {
    fetchSupportedLanguageCodes: () => C(this, null, function* () {
      if (!ad.value) {
        ad.value = !0;
        const t = yield Ri.fetchSupportedLanguageCodes();
        od.value = t.sourceLanguages, sd.value = t.targetLanguages;
      }
    }),
    supportedSourceLanguageCodes: od,
    supportedTargetLanguageCodes: sd
  };
}
const hv = {
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
}, fv = {
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
}, wv = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], _v = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, vv = {
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
}, Sv = {
  languages: hv,
  scriptgroups: fv,
  rtlscripts: wv,
  regiongroups: _v,
  territories: vv
};
var Ue = Sv;
function ra(e) {
  return !!Ue.languages[e];
}
function zn(e) {
  return ra(e) && Ue.languages[e].length === 1 ? Ue.languages[e][0] : !1;
}
function yv() {
  return Ue.languages;
}
function la(e) {
  var t = zn(e);
  return t ? la(t) : ra(e) ? Ue.languages[e][0] : "Zyyy";
}
function jc(e) {
  var t = zn(e);
  return t ? jc(t) : ra(e) && Ue.languages[e][1] || "UNKNOWN";
}
function Ys(e) {
  var t = zn(e);
  return t ? Ys(t) : ra(e) && Ue.languages[e][2] || e;
}
function xv() {
  var e, t = {};
  for (e in Ue.languages)
    zn(e) || (t[e] = Ys(e));
  return t;
}
function ih(e) {
  var t, n, o = [];
  for (t in Ue.languages)
    if (!zn(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === la(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function bv(e) {
  return ih([e]);
}
function rh(e) {
  var t;
  for (t in Ue.scriptgroups)
    if (Ue.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function Hc(e) {
  return rh(la(e));
}
function lh(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = zn(n) || n, a = Hc(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function ch(e) {
  var t, n, o, s = {};
  for (t in Ue.languages)
    if (!zn(t)) {
      for (n = 0; n < e.length; n++)
        if (jc(t).includes(e[n])) {
          o = Hc(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function Cv(e) {
  return ch([e]);
}
function kv(e) {
  var t, n, o, s = [];
  for (t = lh(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function $v(e, t) {
  var n = Ys(e) || e, o = Ys(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function uh(e) {
  return Ue.rtlscripts.includes(la(e));
}
function Vv(e) {
  return uh(e) ? "rtl" : "ltr";
}
function Ev(e) {
  return Ue.territories[e] || [];
}
function Lv(e, t) {
  t.target ? Ue.languages[e] = [t.target] : Ue.languages[e] = [t.script, t.regions, t.autonym];
}
var R = {
  addLanguage: Lv,
  getAutonym: Ys,
  getAutonyms: xv,
  getDir: Vv,
  getGroupOfScript: rh,
  getLanguages: yv,
  getLanguagesByScriptGroup: lh,
  getLanguagesByScriptGroupInRegion: Cv,
  getLanguagesByScriptGroupInRegions: ch,
  getLanguagesInScript: bv,
  getLanguagesInScripts: ih,
  getLanguagesInTerritory: Ev,
  getRegions: jc,
  getScript: la,
  getScriptGroupOfLanguage: Hc,
  isKnown: ra,
  isRedirect: zn,
  isRtl: uh,
  sortByScriptGroup: kv,
  sortByAutonym: $v
};
const io = window.Vue.computed;
function Ve(e) {
  const t = io(() => e.state.application.sourceLanguage), n = io(() => e.state.application.targetLanguage), o = io(
    () => e.state.application.currentMTProvider
  ), s = io(
    () => R.getAutonym(t.value)
  ), a = io(
    () => R.getAutonym(n.value)
  ), r = io(() => e.state.application.previousRoute);
  return {
    currentMTProvider: o,
    previousRoute: r,
    sourceLanguage: t,
    sourceLanguageAutonym: s,
    targetLanguage: n,
    targetLanguageAutonym: a
  };
}
class Io {
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
class Av {
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
function Dv() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const Tv = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), Dv();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, Bv = (e, t) => {
  let n, o;
  return t ? (n = Tv(e), o = n.$element.find(
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
}, Pv = (e, t) => {
  const n = Array.from(
    Bv(e, t)
  );
  return Fv(n).map(
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
        (l) => new st({
          sentences: Mv(l),
          node: l
        })
      ), i = !c;
      return new Sc({ id: u, title: c, subSections: d, isLeadSection: i });
    }
  );
}, Fv = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, Mv = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new Un({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), dh = {
  convertSegmentedContentToPageSections: Pv
}, qc = 120, Nv = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: qc,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return Q.getApi(e).get(n).then((s) => {
    const a = s.query.pages, c = (s.query.redirects || []).reduce(
      (i, l) => We(re({}, i), { [l.to]: l.from }),
      {}
    ), d = (s.query.normalized || []).reduce(
      (i, l) => We(re({}, i), {
        [l.to]: l.from
      }),
      {}
    );
    return a.map((i) => {
      const l = d[i.title] || c[i.title] || null;
      return new Io(We(re({}, i), { _alias: l }));
    });
  });
}, Uv = (e, t) => {
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
  return Q.getApi(e).get(n).then((s) => {
    var u, d;
    const a = s.query.pages;
    if (!a || !a.length || (u = a[0]) != null && u.missing)
      return null;
    const r = [{ lang: e, title: t }, ...a[0].langlinks || []], c = (d = a[0].pageprops) == null ? void 0 : d.wikibase_item;
    return c ? Object.freeze(new Av(c, r)) : null;
  });
}, Iv = (e, t, n) => {
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
  return Q.getApi(e).get(o).then((a) => Object.values(a.query.pages).map((c) => {
    var u, d;
    return (d = (u = c.langlinks) == null ? void 0 : u[0]) == null ? void 0 : d["*"];
  }).filter((c) => !!c));
}, Rv = (e, t, n, o = null) => gh(
  e,
  t,
  n,
  o
).then(
  (s) => new Io({
    sections: dh.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), gh = (e, t, n, o = null) => {
  const s = Q.getWikiDomainCode(e), a = Q.getWikiDomainCode(t), r = {
    $sourcelanguage: s,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let c = "/page/$sourcelanguage/$targetlanguage/$title";
  o && (r.$revision = o, c += "/$revision");
  const u = Q.getCXServerUrl(
    c,
    r
  );
  return fetch(u).then((d) => d.json()).then((d) => d.segmentedContent);
}, zv = (e) => C(void 0, null, function* () {
  const t = P_();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: qc,
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
  return yield Q.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new Io(s))).catch((o) => []);
}), Ov = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: qc,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return Q.getApi(t).get(o).then((s) => {
    var a;
    return ((a = s.query) == null ? void 0 : a.pages) || [];
  }).then(
    (s) => s.sort((a, r) => a.index - r.index).map(
      (a) => new Io(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, ao = {
  fetchPages: Nv,
  fetchLanguageTitles: Uv,
  fetchPageContent: Rv,
  fetchSegmentedContent: gh,
  fetchNearbyPages: zv,
  searchPagesByTitlePrefix: Ov,
  fetchLanguageLinksForLanguage: Iv
}, jv = window.Vuex.useStore, Ro = () => {
  const e = jv();
  return (t, n) => {
    n = n.filter(
      (a) => !e.getters["mediawiki/getPage"](t, a)
    );
    const o = 50, s = [];
    for (let a = 0; a < n.length; a += o) {
      const r = n.slice(a, a + o), c = ao.fetchPages(t, r).then(
        (u) => u.forEach(
          (d) => e.commit("mediawiki/addPage", d)
        )
      );
      s.push(c);
    }
    return Promise.all(s);
  };
}, Hv = window.Vuex.useStore, Gc = () => {
  const e = Hv(), {
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
class zo {
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
class so {
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
const ph = [
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
], qv = [
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
], Gv = [
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
], Xv = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], Wv = [
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
], Kv = {
  en: ph,
  es: qv,
  bn: Gv,
  fr: Xv,
  de: Wv
};
class Bo {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s;
  }
}
class Xc {
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
class mh extends zo {
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
    }), this.collection = new Xc(u);
  }
}
class hh extends so {
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
    }), this.collection = new Xc(l);
  }
}
const Yv = ph, yn = (n) => C(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
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
function Jv() {
  return C(this, null, function* () {
    const e = {}, t = "/page-collection-groups";
    try {
      const n = (yield yn({ urlPostfix: t, urlParams: e })) || [], o = {};
      for (const s in n)
        o[s] = n[s].map(
          (a) => new Xc(a)
        );
      return o;
    } catch (n) {
      return mw.log.error(
        "Error while fetching the page collections from Recommendation API",
        n
      ), {};
    }
  });
}
function Qv(e, t, n = null, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      count: o
    };
    return n && (s.seed = n), ((yield yn({ urlParams: s })) || []).map(
      (r) => new zo({
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
const Zv = (e, t) => C(void 0, null, function* () {
  return ((yield yn({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  } })) || []).map(
    (s) => new zo({
      sourceTitle: s.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: s.wikidata_id,
      langLinksCount: parseInt(s.langlinks_count)
    })
  );
}), eS = (e, t) => C(void 0, null, function* () {
  const s = (yield yn({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  }, urlPostfix: "/sections" })) || [];
  return s && s.map(
    (a) => new so({
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
}), tS = (e, t, n = null) => C(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  return n && (o.seed = n), ((yield yn({ urlParams: o })) || []).map(
    (a) => new mh({
      sourceTitle: a.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: a.wikidata_id,
      langLinksCount: parseInt(a.langlinks_count),
      collection: a.collection
    })
  );
}), nS = (e, t, n = null) => C(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  n && (o.seed = n);
  const a = (yield yn({ urlPostfix: "/sections", urlParams: o })) || [];
  return a && a.map(
    (r) => new hh({
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
function oS(e, t, n) {
  return C(this, null, function* () {
    const o = [t, e, n].map(
      (r) => encodeURIComponent(r)
    ), s = Q.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (r) => r.ok ? r.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((r) => r == null ? void 0 : r.sections).catch((r) => null);
    return a ? new so(a) : null;
  });
}
function sS(e, t, n = null) {
  return C(this, null, function* () {
    const o = {
      source: e,
      target: t,
      count: 24
    };
    n && (o.seed = n);
    const a = (yield yn({ urlPostfix: "/sections", urlParams: o })) || [];
    return a && a.map(
      (r) => new so({
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
function aS(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    return ((yield yn({ urlParams: s })) || []).map(
      (r) => new zo({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
function iS(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    }, r = (yield yn({ urlPostfix: "/sections", urlParams: s })) || [];
    return r && r.map(
      (c) => new so({
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
function rS(e) {
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
    }, n = Q.getApi(e);
    try {
      const a = (yield n.get(t)).query.usercontribs.map((r) => r.title);
      return [...new Set(a)];
    } catch (o) {
      return mw.log.error("Error while fetching suggestion seeds", o), [];
    }
  });
}
function lS(e, t) {
  return C(this, null, function* () {
    const n = {
      action: "parse",
      format: "json",
      formatversion: 2,
      prop: "sections",
      page: t
    }, o = Q.getApi(e);
    try {
      return (yield o.get(n)).parse;
    } catch (s) {
      return mw.log.error("Error while fetching suggestion sections size", s), [];
    }
  });
}
function cS(e) {
  const t = Yv.map((o) => encodeURIComponent(o)).join("|"), n = Q.getCXServerUrl(
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
const uS = (e, t, n) => {
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
}, dS = (e) => {
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
}, gS = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions"
  }, t = new mw.Api();
  return Promise.resolve(t.postWithToken("csrf", e)).then((n) => {
    var a, r;
    const o = n.query.contenttranslationsuggestions.lists || {};
    return (((r = (a = Object.values(o)) == null ? void 0 : a[0]) == null ? void 0 : r.suggestions) || []).map((c) => new Bo(c));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
}, me = {
  fetchFavorites: gS,
  fetchPageSuggestions: Qv,
  fetchSectionSuggestion: oS,
  fetchSectionSuggestions: sS,
  fetchAppendixTargetSectionTitles: cS,
  fetchSuggestionSourceSections: lS,
  markFavorite: uS,
  unmarkFavorite: dS,
  fetchUserEdits: rS,
  fetchMostPopularPageSuggestions: Zv,
  fetchMostPopularSectionSuggestions: eS,
  fetchPageSuggestionsByTopics: aS,
  fetchSectionSuggestionsByTopics: iS,
  fetchPageCollectionGroups: Jv,
  fetchPageSuggestionsByCollections: tS,
  fetchSectionSuggestionsByCollections: nS
}, pS = window.Vuex.useStore, ca = () => {
  const e = pS(), { sourceLanguage: t, targetLanguage: n } = Ve(e), o = (c) => {
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
class mS {
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
const hS = window.Vuex.useStore, Wc = window.Vue.ref, fS = Wc([]), wS = Wc([]);
let dr = !1, gr = !1, id = !1;
const Ea = Wc([]);
let Yo = null;
const pr = {
  page: fS,
  section: wS
}, fh = () => {
  const e = hS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = T(), o = () => C(void 0, null, function* () {
    gr || (Ea.value = yield me.fetchUserEdits(t.value).then((d) => (gr = !0, d)));
  }), s = () => C(void 0, null, function* () {
    let d = e.getters["translator/getTranslationsByStatus"]("published");
    if (d = d.filter(
      (i) => i.sourceLanguage === t.value
    ), d.length && !dr)
      return dr = !0, d.map(
        (i) => i.sourceTitle
      );
    if (dr = !0, !gr && (yield o(), Ea.value.length > 0))
      return Ea.value;
    if (!id) {
      const i = yield me.fetchUserEdits(n.value).then((l) => (id = !0, l));
      if (i.length)
        return ao.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          i
        );
    }
    return null;
  }), a = (d) => {
    let i = pr[d].value.find(
      (l) => l.matchesLanguagePair(t.value, n.value)
    );
    return i || (i = new mS({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), pr[d].value.push(i)), i;
  }, r = () => C(void 0, null, function* () {
    let d = !1, i = [];
    do {
      i = yield s(), i || (d = !0);
      for (const l in pr) {
        const g = a(l);
        g.seeds = [
          ...g.seeds,
          ...i || []
        ];
      }
    } while (!d && !(i != null && i.length));
  }), c = () => Yo || (Yo = r(), Yo.finally(() => {
    Yo = null;
  }));
  return {
    getSuggestionSeed: (d) => C(void 0, null, function* () {
      let i = a(d);
      return i.seeds.length || (yield c()), i.shiftSeeds();
    }),
    fetchPreviousEditsInSource: o,
    previousEditsInSource: Ea
  };
}, _S = 5;
function Po(e) {
  return C(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < _S);
  });
}
const vS = window.Vuex.useStore, SS = () => {
  const e = vS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = T(), { getSuggestionSeed: o } = fh(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = ca(), c = {
    id: Pt,
    type: at
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (i) => C(void 0, null, function* () {
      const l = [];
      return yield Po(() => C(void 0, null, function* () {
        const g = yield o("page");
        let p = yield me.fetchPageSuggestions(
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
      return yield Po(() => C(void 0, null, function* () {
        const g = yield o("section"), p = yield me.fetchSectionSuggestions(
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
}, yS = window.Vuex.useStore, xS = () => {
  const e = yS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = T(), o = {
    id: Kt,
    type: at
  }, {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = ca();
  return { fetchSectionSuggestionsPopular: (d) => C(void 0, null, function* () {
    const i = [];
    return yield Po(() => C(void 0, null, function* () {
      const l = yield me.fetchMostPopularSectionSuggestions(
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
    return yield Po(() => C(void 0, null, function* () {
      let l = yield me.fetchMostPopularPageSuggestions(
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
}, wh = window.Vue.ref, Jo = "ungrouped", rd = wh({}), ld = wh(!1), Kc = () => ({
  fetchPageCollectionGroups: () => C(void 0, null, function* () {
    try {
      const t = yield me.fetchPageCollectionGroups(), n = Object.fromEntries(
        Object.keys(t).sort((o, s) => o === Jo ? 1 : s === Jo ? -1 : o.localeCompare(s)).map((o) => [o, t[o]])
      );
      n[Jo] && (n[Jo] = n[Jo].sort(
        (o, s) => o.name.localeCompare(s.name)
      )), rd.value = n, ld.value = !0;
    } catch (t) {
      mw.log.error("Failed to fetch page collections", t);
    }
  }),
  pageCollectionGroupsFetched: ld,
  pageCollectionGroups: rd
});
class Js {
  /**
   * @param {string} id
   * @param {string} label
   * @param {SuggestionFilter[]} filters
   */
  constructor({ id: t, label: n, filters: o }) {
    this.id = t, this.label = n, this.filters = o;
  }
}
const bS = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', CS = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', kS = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', $S = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', VS = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', ES = '<path d="M10 1a9 9 0 109 9 9 9 0 00-9-9m5 10H5V9h10z"/>', LS = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', AS = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', DS = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', TS = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', BS = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', PS = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', FS = '<path d="m2.5 15.25 7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"/>', MS = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', NS = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', US = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', IS = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', RS = '<path d="M19 16 2 12a3.83 3.83 0 01-1-2.5A3.83 3.83 0 012 7l17-4z"/><rect width="4" height="8" x="4" y="9" rx="2"/>', zS = '<path d="M8 2H2a2 2 0 00-2 2v2h12z"/><rect width="20" height="14" y="4" rx="2"/>', OS = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', _h = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', jS = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', HS = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"/>', qS = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', GS = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', XS = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', WS = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', KS = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', YS = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', JS = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', QS = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', ZS = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', ey = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', ty = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', ny = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', yc = bS, vh = CS, Sh = {
  ltr: kS,
  shouldFlip: !0
}, yh = {
  ltr: $S,
  shouldFlip: !0
}, ua = {
  ltr: VS,
  shouldFlip: !0
}, oy = ES, xh = LS, bh = AS, sy = DS, ay = TS, iy = BS, Oo = PS, ry = FS, Yc = MS, Jc = NS, xc = US, ly = IS, cy = {
  ltr: RS,
  shouldFlip: !0
}, cd = {
  ltr: zS,
  shouldFlip: !0
}, Ch = OS, uy = {
  langCodeMap: {
    ar: _h
  },
  default: jS
}, dy = {
  langCodeMap: {
    ar: _h
  },
  default: HS
}, kh = qS, Qc = {
  ltr: GS,
  shouldFlip: !0
}, gy = XS, da = {
  ltr: WS,
  shouldFlip: !0
}, Zc = {
  ltr: KS,
  shouldFlip: !0
}, py = {
  ltr: YS,
  shouldFlip: !0
}, $h = JS, my = QS, Vh = ZS, hy = ey, fy = ty, Eh = ny, wy = {
  [Pt]: Eh,
  [Kt]: Ch,
  [te]: ua,
  [Me]: null,
  [_t]: null
};
class Gt {
  /**
   * @param {string} id
   * @param {string} label
   * @param {string} type
   * @param {SuggestionFilter[]} subFilters
   */
  constructor({ id: t, label: n, type: o, subFilters: s = [] }) {
    this.id = t, this.label = n, this.type = o, this.subFilters = s;
  }
  get expandable() {
    return this.subFilters.length > 0;
  }
  get chipLabel() {
    return this.expandable ? `${this.label} (${this.subFilters.length})` : this.label;
  }
  get provider() {
    return this.type === at ? this.id : this.type;
  }
  get icon() {
    return wy[this.provider];
  }
}
const La = window.Vue.computed, ud = mw.loader.require("ext.cx.articletopics"), _y = (e) => new Js({
  id: e.groupId,
  label: e.label,
  filters: e.topics.map(
    (t) => new Gt({
      id: t.topicId,
      label: t.label,
      type: Me
    })
  )
}), eu = () => {
  const e = de(), { currentSuggestionFilters: t, setFilterURLParams: n } = T(), { validateFilters: o, filtersValidatorError: s } = Uc(), a = new Gt({
    id: Pt,
    type: at,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }), r = new Gt({
    id: Kt,
    type: at,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }), c = new Gt({
    id: te,
    type: at,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }), { pageCollectionGroups: u, pageCollectionGroupsFetched: d } = Kc(), i = La(() => {
    const y = new Js({
      id: at,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [a, r]
    });
    return Object.keys(u.value).length > 1 && y.filters.push(c), y;
  }), l = () => {
    const y = re({}, u.value);
    delete y.ungrouped;
    const E = [];
    for (const V in y) {
      const B = y[V].map(
        (X) => new Gt({
          id: X.name,
          label: X.name,
          type: te
        })
      ), I = new Gt({
        id: V,
        label: V,
        type: te,
        subFilters: B
      });
      E.push(I);
    }
    const M = (u.value.ungrouped || []).map(
      (V) => new Gt({
        id: V.name,
        label: V.name,
        type: te
      })
    );
    return [...E, ...M];
  }, g = La(
    () => new Js({
      id: "collections",
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: l()
    })
  ), p = La(() => {
    const y = [
      i.value,
      ...ud.map(_y)
    ];
    return g.value.filters.length && y.splice(1, 0, g.value), y;
  }), m = La(
    () => [t.value.type, t.value.id].includes(
      te
    ) && !d.value
  ), h = () => {
    if (m.value)
      return [];
    const y = w();
    return y.type === Me || y.type === _t || y.type === te || y.id === te ? [y, a] : [a, r];
  }, f = (y) => {
    n(y.type, y.id);
  }, _ = () => l().flatMap((M) => [
    M,
    ...M.subFilters || []
  ]).find(S), w = () => t.value.type === _t ? new Gt({
    id: t.value.id,
    label: t.value.id,
    type: t.value.type
  }) : t.value.type === te ? _() : p.value.flatMap((y) => y.filters).find(S), S = (y) => t.value.id === y.id;
  return {
    allFilters: p,
    getFiltersSummary: h,
    selectFilter: f,
    isFilterSelected: S,
    getArticleTopics: (y) => {
      const M = ud.flatMap((V) => V.topics).find((V) => V.topicId === y);
      return M ? M.articletopics : [];
    },
    waitingForPageCollectionsFetch: m,
    findSelectedFilter: w,
    validateURLFilterWithCollections: () => {
      if (!d.value)
        return;
      const y = Object.values(u.value).flat(), E = o(
        {
          type: t.value.type,
          id: t.value.id
        },
        y
      );
      n(E.type, E.id), s.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
    }
  };
}, vy = window.Vuex.useStore, Sy = () => {
  const e = vy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = T(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = ca(), { getArticleTopics: c } = eu();
  return {
    fetchPageSuggestionsByTopics: (i) => C(void 0, null, function* () {
      const l = o.value.id, g = {
        id: l,
        type: Me
      }, p = c(l);
      let m = yield me.fetchPageSuggestionsByTopics(
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
        type: Me
      }, p = c(l), m = [];
      return yield Po(() => C(void 0, null, function* () {
        const h = yield me.fetchSectionSuggestionsByTopics(
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
}, yy = window.Vuex.useStore, xy = window.Vue.computed, by = () => {
  const e = yy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = T(), s = xy(() => {
    var i;
    return ((i = o.value) == null ? void 0 : i.type) !== te ? null : o.value.id;
  }), {
    isSectionSuggestionValid: a,
    isPageSuggestionValid: r,
    sectionSuggestionExists: c
  } = ca();
  return {
    fetchSectionSuggestionsByCollections: () => C(void 0, null, function* () {
      const i = [], l = yield me.fetchSectionSuggestionsByCollections(
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
      let l = yield me.fetchPageSuggestionsByCollections(
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
}, Cy = window.Vuex.useStore, ky = () => {
  const e = Cy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = T(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = ca();
  return {
    fetchPageSuggestionsBySeed: (d) => C(void 0, null, function* () {
      const i = o.value.id;
      let l = yield me.fetchPageSuggestions(
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
      return yield Po(() => C(void 0, null, function* () {
        const g = yield me.fetchSectionSuggestions(
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
}, Lh = () => {
  const { currentSuggestionFilters: e } = T(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = SS(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = xS(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = Sy(), {
    fetchPageSuggestionsByCollections: c,
    fetchSectionSuggestionsByCollections: u
  } = by(), { fetchPageSuggestionsBySeed: d, fetchSectionSuggestionsBySeed: i } = ky(), l = {
    [Pt]: t,
    [Kt]: o,
    [te]: c,
    [Me]: a,
    [_t]: d
  }, g = {
    [Pt]: n,
    [Kt]: s,
    [te]: u,
    [Me]: r,
    [_t]: i
  }, p = (f) => f.type === at ? f.id : f.type;
  return {
    getFilterProvider: p,
    getCurrentPageSuggestionProvider: () => l[p(e.value)],
    getCurrentSectionSuggestionProvider: () => g[p(e.value)]
  };
}, $y = window.Vuex.useStore, tu = () => {
  const e = $y(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = Gc(), { sourceLanguageURLParameter: o } = T(), s = Ro(), a = () => {
    const g = t(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, r = () => {
    const g = n(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, {
    getCurrentPageSuggestionProvider: c,
    getCurrentSectionSuggestionProvider: u
  } = Lh(), d = (g) => {
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
}, Vy = window.Vuex.useStore, Ah = () => {
  const e = Vy();
  return (t) => C(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield me.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, Ey = window.Vuex.useStore, Dh = () => {
  const e = Ey(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = tu(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = Gc(), { targetLanguageURLParameter: a } = T(), r = Ah();
  return () => C(void 0, null, function* () {
    const c = s(0), u = o(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, i = c.length === d, l = u.length === d;
    i && l || (yield r(a.value), t(), n());
  });
}, Ly = window.Vuex.useStore, Th = () => {
  const e = Ly(), t = Ro();
  return (n, o, s) => C(void 0, null, function* () {
    let a = e.getters["suggestions/getSectionSuggestionsForArticle"](n, o, s);
    if (!a) {
      a = yield me.fetchSectionSuggestion(
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
          return new zo({
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
}, dd = window.Vue.computed, Ay = window.Vuex.useStore, xn = () => {
  const e = Ay(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = T(), s = dd(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = dd(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (c, u) => s.value.getTitleForLanguage(c) || s.value.getTitleForLanguage(u)
  };
}, Bh = window.Vuex.useStore, { setLanguageURLParams: Dy } = T(), nu = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), Dy(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, Ph = () => {
  const e = Bh(), t = Dh();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = Ve(e);
    n === o && (n = a.value, o = s.value), nu(e, n, o), t();
  };
}, Ty = () => {
  const e = Bh(), t = Th(), { currentLanguageTitleGroup: n, targetPageExists: o } = xn(), s = Ro();
  return (a, r) => C(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u,
      setPageURLParam: d,
      clearSectionURLParameter: i
    } = T();
    a === r && (a = u.value, r = c.value);
    const l = n.value.getTitleForLanguage(a);
    nu(e, a, r), d(l), o.value ? (i(), yield t(
      c.value,
      u.value,
      l
    )) : yield s(c.value, [l]);
  });
}, By = window.Vuex.useStore, Py = window.Vue.ref, gd = Py(!1), Fh = () => {
  const e = By(), {
    supportedSourceLanguageCodes: t,
    supportedTargetLanguageCodes: n,
    fetchSupportedLanguageCodes: o
  } = ia(), { sourceLanguageURLParameter: s, targetLanguageURLParameter: a } = T(), r = () => {
    const u = Q.getCurrentWikiLanguageCode(), d = (f) => t.value.includes(f), i = (f) => n.value.includes(f), l = {
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
    nu(e, u, d), gd.value = !0;
  }), applicationLanguagesInitialized: gd };
};
const Fy = window.Vue.resolveDynamicComponent, pd = window.Vue.openBlock, md = window.Vue.createBlock, My = window.Vue.Transition, Qo = window.Vue.withCtx, Zo = window.Vue.createVNode, Ny = window.Vue.resolveComponent, mr = window.Vue.unref, Uy = window.Vuex.useStore, hd = window.Vue.computed, Iy = window.Vue.onMounted, Ry = window.Vue.inject, zy = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = T(), { initializeApplicationLanguages: n } = Fh();
    t(), n();
    const o = Ry("breakpoints"), s = hd(() => o.value.mobile), a = Uy(), r = hd(
      () => a.state.application.autoSavePending
    );
    return Iy(() => {
      window.addEventListener("beforeunload", (c) => {
        r.value && (c.preventDefault(), c.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (c) => {
        document.visibilityState === "visible" && Km.assertUser().then(() => a.commit("application/setIsLoginDialogOn", !1)).catch((u) => {
          u instanceof Uo && a.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (c, u) => {
      const d = Ny("router-view");
      return pd(), md(mr(Jw), { id: "contenttranslation" }, {
        default: Qo(() => [
          Zo(mr(P), { class: "cx-container" }, {
            default: Qo(() => [
              Zo(mr(b), {
                class: "cx-container__wrapper-col",
                cols: "12"
              }, {
                default: Qo(() => [
                  Zo(d, null, {
                    default: Qo(({ Component: i, route: l }) => [
                      Zo(My, {
                        name: s.value ? l.meta.transitionName : ""
                      }, {
                        default: Qo(() => [
                          (pd(), md(Fy(i)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      Zo(T_)
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
}, Oy = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translatorStats: null
}, jy = {
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
class Mh {
  constructor({ id: t, type: n, question: o, url: s }) {
    this.id = t, this.type = n, this.question = o, this.url = s;
  }
}
class Fo {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new Mh(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const fd = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => We(re({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class Hy {
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
    const t = fd((s = this.user) == null ? void 0 : s.content), n = fd((a = this.mt) == null ? void 0 : a.content);
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
class ou extends Mc {
  /**
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
const zi = mw.user.isAnon() ? void 0 : "user", Nh = (e) => {
  if (e === "assertuserfailed")
    throw new Uo();
};
function Uh(e, t = null) {
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
        (u) => new Fi(We(re({}, u), { status: e }))
      ) : r = a.map(
        (u) => new ou(We(re({}, u), { status: e }))
      ), (c = s.continue) != null && c.offset) {
        const u = yield Uh(
          e,
          s.continue.offset
        );
        r = r.concat(u);
      }
      return r;
    }));
  });
}
function qy(e) {
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
      (a) => new Hy(a)
    );
  });
}
function Gy(e, t, n, o, s) {
  return C(this, null, function* () {
    if (!o)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== Z.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const r = Q.getCXServerUrl(a);
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
const Xy = (e, t, n) => {
  const o = Q.getApi(t);
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
}, Wy = ({
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
    assert: zi,
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
          publishFeedbackMessage: new Fo({
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
    Nh(m);
    let f;
    return h = h || {}, h.exception ? f = h.exception.message : h.error ? f = h.error.info : f = "Unknown error", {
      publishFeedbackMessage: new Fo({
        text: f,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, Ky = ({
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
    assert: zi,
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
    Nh(p);
    let h;
    return m.exception ? h = m.exception.message : m.error ? h = m.error.info : h = "Unknown error", new Fo({ text: h, status: "error" });
  });
}, Yy = (e) => {
  const t = {
    assert: zi,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, Jy = () => {
  const e = {
    assert: zi,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new ou(n.cxcheckunreviewed.translation)
  );
}, Qy = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, Zy = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, ex = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), vt = {
  fetchTranslations: Uh,
  fetchTranslationUnits: qy,
  fetchSegmentTranslation: Gy,
  parseTemplateWikitext: Xy,
  publishTranslation: Wy,
  saveTranslation: Ky,
  deleteTranslation: Qy,
  fetchTranslatorStats: ex,
  deleteCXTranslation: Zy,
  splitTranslation: Yy,
  checkUnreviewedTranslations: Jy
};
function tx(t) {
  return C(this, arguments, function* ({ commit: e }) {
    const n = yield vt.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const nx = {
  fetchTranslatorStats: tx
}, ox = {
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
}, sx = {
  namespaced: !0,
  state: Oy,
  getters: jy,
  actions: nx,
  mutations: ox
}, ax = {
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
  appendixSectionTitles: Kv
}, ix = {
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
}, rx = {
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
}, lx = {
  namespaced: !0,
  state: ax,
  getters: ix,
  actions: {},
  mutations: rx
}, cx = {
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
}, ux = {
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
  isValidProviderForTranslation: (e, t) => (n, o, s) => t.getSupportedMTProviders(n, o).includes(s) && s !== Z.EMPTY_TEXT_PROVIDER_KEY,
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
function dx(o) {
  return C(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: s } = t.application;
    if ((r = n.nearbyPages[s]) != null && r.length)
      return;
    const a = yield ao.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const gx = { fetchNearbyPages: dx }, px = {
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
}, mx = {
  namespaced: !0,
  state: cx,
  getters: ux,
  actions: gx,
  mutations: px
}, hx = {
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
}, fx = {
  /**
   * Returns a boolean indicating whether the current publishing target
   * is the user's sandbox
   *
   * @param {object} state
   * @return {boolean}
   */
  isSandboxTarget: (e) => e.publishTarget === "SANDBOX_SECTION"
}, wx = {
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
    const { sourceLanguage: n, targetLanguage: o } = e, s = Z.getStorageKey(
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
}, _x = {
  namespaced: !0,
  state: hx,
  getters: fx,
  actions: {},
  mutations: wx
}, vx = window.Vuex.createStore, Sx = vx({
  modules: { translator: sx, suggestions: lx, mediawiki: mx, application: _x }
});
function yx() {
  return Ih().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Ih() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const xx = typeof Proxy == "function", bx = "devtools-plugin:setup", Cx = "plugin:settings:set";
let ro, bc;
function kx() {
  var e;
  return ro !== void 0 || (typeof window != "undefined" && window.performance ? (ro = !0, bc = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (ro = !0, bc = global.perf_hooks.performance) : ro = !1), ro;
}
function $x() {
  return kx() ? bc.now() : Date.now();
}
class Vx {
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
        return $x();
      }
    }, n && n.on(Cx, (r, c) => {
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
function Ex(e, t) {
  const n = e, o = Ih(), s = yx(), a = xx && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(bx, e, t);
  else {
    const r = a ? new Vx(n, s) : null;
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
const Rh = window.Vue.getCurrentInstance, Mo = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const Xt = window.Vue.computed, Xs = window.Vue.unref, Lx = window.Vue.watchEffect, zh = window.Vue.defineComponent, Ax = window.Vue.reactive, Oh = window.Vue.h, hr = window.Vue.provide, Dx = window.Vue.ref, jh = window.Vue.watch, Tx = window.Vue.shallowRef, Bx = window.Vue.shallowReactive, Px = window.Vue.nextTick, vn = typeof window != "undefined";
function Fx(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const J = Object.assign;
function fr(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = rt(s) ? s.map(e) : e(s);
  }
  return n;
}
const Ws = () => {
}, rt = Array.isArray;
function G(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Mx = /\/$/, Nx = (e) => e.replace(Mx, "");
function wr(e, t, n = "/") {
  let o, s = {}, a = "", r = "";
  const c = t.indexOf("#");
  let u = t.indexOf("?");
  return c < u && c >= 0 && (u = -1), u > -1 && (o = t.slice(0, u), a = t.slice(u + 1, c > -1 ? c : t.length), s = e(a)), c > -1 && (o = o || t.slice(0, c), r = t.slice(c, t.length)), o = Rx(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + r,
    path: o,
    query: s,
    hash: r
  };
}
function Ux(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function wd(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function _d(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && Rn(t.matched[o], n.matched[s]) && Hh(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Rn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Hh(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Ix(e[n], t[n]))
      return !1;
  return !0;
}
function Ix(e, t) {
  return rt(e) ? vd(e, t) : rt(t) ? vd(t, e) : e === t;
}
function vd(e, t) {
  return rt(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function Rx(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return G(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
var Qs;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Qs || (Qs = {}));
var Ks;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Ks || (Ks = {}));
function zx(e) {
  if (!e)
    if (vn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Nx(e);
}
const Ox = /^[^#]+#/;
function jx(e, t) {
  return e.replace(Ox, "#") + t;
}
function Hx(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const Oi = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function qx(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if ({}.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const a = document.querySelector(e.el);
        if (o && a) {
          G(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch (a) {
        G(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) {
      ({}).NODE_ENV !== "production" && G(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = Hx(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function Sd(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Cc = /* @__PURE__ */ new Map();
function Gx(e, t) {
  Cc.set(e, t);
}
function Xx(e) {
  const t = Cc.get(e);
  return Cc.delete(e), t;
}
let Wx = () => location.protocol + "//" + location.host;
function qh(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let c = s.includes(e.slice(a)) ? e.slice(a).length : 1, u = s.slice(c);
    return u[0] !== "/" && (u = "/" + u), wd(u, "");
  }
  return wd(n, e) + o + s;
}
function Kx(e, t, n, o) {
  let s = [], a = [], r = null;
  const c = ({ state: g }) => {
    const p = qh(e, location), m = n.value, h = t.value;
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
        type: Qs.pop,
        direction: f ? f > 0 ? Ks.forward : Ks.back : Ks.unknown
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
    g.state && g.replaceState(J({}, g.state, { scroll: Oi() }), "");
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
function yd(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Oi() : null
  };
}
function Yx(e) {
  const { history: t, location: n } = window, o = {
    value: qh(e, n)
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
    const l = e.indexOf("#"), g = l > -1 ? (n.host && document.querySelector("base") ? e : e.slice(l)) + u : Wx() + e + u;
    try {
      t[i ? "replaceState" : "pushState"](d, "", g), s.value = d;
    } catch (p) {
      ({}).NODE_ENV !== "production" ? G("Error with push/replace State", p) : console.error(p), n[i ? "replace" : "assign"](g);
    }
  }
  function r(u, d) {
    const i = J({}, t.state, yd(
      s.value.back,
      // keep back and forward entries but override current position
      u,
      s.value.forward,
      !0
    ), d, { position: s.value.position });
    a(u, i, !0), o.value = u;
  }
  function c(u, d) {
    const i = J(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: u,
        scroll: Oi()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && G(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(i.current, i, !0);
    const l = J({}, yd(o.value, u, null), { position: i.position + 1 }, d);
    a(u, l, !1), o.value = u;
  }
  return {
    location: o,
    state: s,
    push: c,
    replace: r
  };
}
function Jx(e) {
  e = zx(e);
  const t = Yx(e), n = Kx(e, t.state, t.location, t.replace);
  function o(a, r = !0) {
    r || n.pauseListeners(), history.go(a);
  }
  const s = J({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: jx.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function Qx(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && G(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), Jx(e);
}
function Zx(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Gh(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Cn = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, kc = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var xd;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(xd || (xd = {}));
const eb = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${nb(t)}" via a navigation guard.`;
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
function No(e, t) {
  return {}.NODE_ENV !== "production" ? J(new Error(eb[e](t)), {
    type: e,
    [kc]: !0
  }, t) : J(new Error(), {
    type: e,
    [kc]: !0
  }, t);
}
function Zt(e, t) {
  return e instanceof Error && kc in e && (t == null || !!(e.type & t));
}
const tb = ["params", "query", "hash"];
function nb(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of tb)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const bd = "[^/]+?", ob = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, sb = /[.+*?^${}()[\]/\\]/g;
function ab(e, t) {
  const n = J({}, ob, t), o = [];
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
        l || (s += "/"), s += g.value.replace(sb, "\\$&"), p += 40;
      else if (g.type === 1) {
        const { value: m, repeatable: h, optional: f, regexp: _ } = g;
        a.push({
          name: m,
          repeatable: h,
          optional: f
        });
        const w = _ || bd;
        if (w !== bd) {
          p += 10;
          try {
            new RegExp(`(${w})`);
          } catch (x) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${w}): ` + x.message);
          }
        }
        let S = h ? `((?:${w})(?:/(?:${w}))*)` : `(${w})`;
        l || (S = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        f && d.length < 2 ? `(?:/${S})` : "/" + S), f && (S += "?"), s += S, p += 20, f && (p += -8), h && (p += -20), w === ".*" && (p += -50);
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
          if (rt(_) && !h)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const w = rt(_) ? _.join("/") : _;
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
function ib(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function rb(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = ib(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (Cd(o))
      return 1;
    if (Cd(s))
      return -1;
  }
  return s.length - o.length;
}
function Cd(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const lb = {
  type: 0,
  value: ""
}, cb = /[a-zA-Z0-9_]/;
function ub(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[lb]];
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
        u === "(" ? n = 2 : cb.test(u) ? g() : (l(), n = 0, u !== "*" && u !== "?" && u !== "+" && c--);
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
function db(e, t, n) {
  const o = ab(ub(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const r of o.keys)
      a.has(r.name) && G(`Found duplicated params with name "${r.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(r.name);
  }
  const s = J(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function gb(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = Vd({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(i) {
    return o.get(i);
  }
  function a(i, l, g) {
    const p = !g, m = pb(i);
    ({}).NODE_ENV !== "production" && wb(m, l), m.aliasOf = g && g.record;
    const h = Vd(t, i), f = [
      m
    ];
    if ("alias" in i) {
      const S = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const x of S)
        f.push(J({}, m, {
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
    for (const S of f) {
      const { path: x } = S;
      if (l && x[0] !== "/") {
        const k = l.record.path, y = k[k.length - 1] === "/" ? "" : "/";
        S.path = l.record.path + (x && y + x);
      }
      if ({}.NODE_ENV !== "production" && S.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (_ = db(S, l, h), {}.NODE_ENV !== "production" && l && x[0] === "/" && _b(_, l), g ? (g.alias.push(_), {}.NODE_ENV !== "production" && fb(g, _)) : (w = w || _, w !== _ && w.alias.push(_), p && i.name && !$d(_) && r(i.name)), m.children) {
        const k = m.children;
        for (let y = 0; y < k.length; y++)
          a(k[y], _, g && g.children[y]);
      }
      g = g || _, (_.record.components && Object.keys(_.record.components).length || _.record.name || _.record.redirect) && u(_);
    }
    return w ? () => {
      r(w);
    } : Ws;
  }
  function r(i) {
    if (Gh(i)) {
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
    for (; l < n.length && rb(i, n[l]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[l].record.path || !Xh(i, n[l])); )
      l++;
    n.splice(l, 0, i), i.record.name && !$d(i) && o.set(i.record.name, i);
  }
  function d(i, l) {
    let g, p = {}, m, h;
    if ("name" in i && i.name) {
      if (g = o.get(i.name), !g)
        throw No(1, {
          location: i
        });
      if ({}.NODE_ENV !== "production") {
        const w = Object.keys(i.params || {}).filter((S) => !g.keys.find((x) => x.name === S));
        w.length && G(`Discarded invalid param(s) "${w.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = g.record.name, p = J(
        // paramsFromLocation is a new object
        kd(
          l.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((w) => !w.optional).map((w) => w.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && kd(i.params, g.keys.map((w) => w.name))
      ), m = g.stringify(p);
    } else if ("path" in i)
      m = i.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && G(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((w) => w.re.test(m)), g && (p = g.parse(m), h = g.record.name);
    else {
      if (g = l.name ? o.get(l.name) : n.find((w) => w.re.test(l.path)), !g)
        throw No(1, {
          location: i,
          currentLocation: l
        });
      h = g.record.name, p = J({}, l.params, i.params), m = g.stringify(p);
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
      meta: hb(f)
    };
  }
  return e.forEach((i) => a(i)), { addRoute: a, resolve: d, removeRoute: r, getRoutes: c, getRecordMatcher: s };
}
function kd(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function pb(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: mb(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function mb(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function $d(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function hb(e) {
  return e.reduce((t, n) => J(t, n.meta), {});
}
function Vd(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function $c(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function fb(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find($c.bind(null, n)))
      return G(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find($c.bind(null, n)))
      return G(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function wb(e, t) {
  t && t.record.name && !e.name && !e.path && G(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function _b(e, t) {
  for (const n of t.keys)
    if (!e.keys.find($c.bind(null, n)))
      return G(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Xh(e, t) {
  return t.children.some((n) => n === e || Xh(e, n));
}
const Wh = /#/g, vb = /&/g, Sb = /\//g, yb = /=/g, xb = /\?/g, Kh = /\+/g, bb = /%5B/g, Cb = /%5D/g, Yh = /%5E/g, kb = /%60/g, Jh = /%7B/g, $b = /%7C/g, Qh = /%7D/g, Vb = /%20/g;
function su(e) {
  return encodeURI("" + e).replace($b, "|").replace(bb, "[").replace(Cb, "]");
}
function Eb(e) {
  return su(e).replace(Jh, "{").replace(Qh, "}").replace(Yh, "^");
}
function Vc(e) {
  return su(e).replace(Kh, "%2B").replace(Vb, "+").replace(Wh, "%23").replace(vb, "%26").replace(kb, "`").replace(Jh, "{").replace(Qh, "}").replace(Yh, "^");
}
function Lb(e) {
  return Vc(e).replace(yb, "%3D");
}
function Ab(e) {
  return su(e).replace(Wh, "%23").replace(xb, "%3F");
}
function Db(e) {
  return e == null ? "" : Ab(e).replace(Sb, "%2F");
}
function Zs(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && G(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function Tb(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(Kh, " "), r = a.indexOf("="), c = Zs(r < 0 ? a : a.slice(0, r)), u = r < 0 ? null : Zs(a.slice(r + 1));
    if (c in t) {
      let d = t[c];
      rt(d) || (d = t[c] = [d]), d.push(u);
    } else
      t[c] = u;
  }
  return t;
}
function Ed(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = Lb(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (rt(o) ? o.map((a) => a && Vc(a)) : [o && Vc(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function Bb(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = rt(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const Pb = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), Ld = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), ji = Symbol({}.NODE_ENV !== "production" ? "router" : ""), Zh = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), Ec = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function es() {
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
function In(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((r, c) => {
    const u = (l) => {
      l === !1 ? c(No(4, {
        from: n,
        to: t
      })) : l instanceof Error ? c(l) : Zx(l) ? c(No(2, {
        from: t,
        to: l
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof l == "function" && a.push(l), r());
    }, d = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? Fb(u, t, n) : u);
    let i = Promise.resolve(d);
    if (e.length < 3 && (i = i.then(u)), {}.NODE_ENV !== "production" && e.length > 2) {
      const l = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof d == "object" && "then" in d)
        i = i.then((g) => u._called ? g : (G(l), Promise.reject(new Error("Invalid navigation guard"))));
      else if (d !== void 0 && !u._called) {
        G(l), c(new Error("Invalid navigation guard"));
        return;
      }
    }
    i.catch((l) => c(l));
  });
}
function Fb(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && G(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function _r(e, t, n, o) {
  const s = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && G(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const r in a.components) {
      let c = a.components[r];
      if ({}.NODE_ENV !== "production") {
        if (!c || typeof c != "object" && typeof c != "function")
          throw G(`Component "${r}" in record with path "${a.path}" is not a valid component. Received "${String(c)}".`), new Error("Invalid route component");
        if ("then" in c) {
          G(`Component "${r}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const u = c;
          c = () => u;
        } else
          c.__asyncLoader && // warn only once per component
          !c.__warnedDefineAsync && (c.__warnedDefineAsync = !0, G(`Component "${r}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[r]))
        if (Mb(c)) {
          const d = (c.__vccOpts || c)[t];
          d && s.push(In(d, n, o, a, r));
        } else {
          let u = c();
          ({}).NODE_ENV !== "production" && !("catch" in u) && (G(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), u = Promise.resolve(u)), s.push(() => u.then((d) => {
            if (!d)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = Fx(d) ? d.default : d;
            a.components[r] = i;
            const g = (i.__vccOpts || i)[t];
            return g && In(g, n, o, a, r)();
          }));
        }
    }
  }
  return s;
}
function Mb(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Ad(e) {
  const t = Mo(ji), n = Mo(Zh), o = Xt(() => t.resolve(Xs(e.to))), s = Xt(() => {
    const { matched: u } = o.value, { length: d } = u, i = u[d - 1], l = n.matched;
    if (!i || !l.length)
      return -1;
    const g = l.findIndex(Rn.bind(null, i));
    if (g > -1)
      return g;
    const p = Dd(u[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Dd(i) === p && // avoid comparing the child with its parent
      l[l.length - 1].path !== p ? l.findIndex(Rn.bind(null, u[d - 2])) : g
    );
  }), a = Xt(() => s.value > -1 && Rb(n.params, o.value.params)), r = Xt(() => s.value > -1 && s.value === n.matched.length - 1 && Hh(n.params, o.value.params));
  function c(u = {}) {
    return Ib(u) ? t[Xs(e.replace) ? "replace" : "push"](
      Xs(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Ws) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && vn) {
    const u = Rh();
    if (u) {
      const d = {
        route: o.value,
        isActive: a.value,
        isExactActive: r.value
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(d), Lx(() => {
        d.route = o.value, d.isActive = a.value, d.isExactActive = r.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: Xt(() => o.value.href),
    isActive: a,
    isExactActive: r,
    navigate: c
  };
}
const Nb = /* @__PURE__ */ zh({
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
  useLink: Ad,
  setup(e, { slots: t }) {
    const n = Ax(Ad(e)), { options: o } = Mo(ji), s = Xt(() => ({
      [Td(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Td(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : Oh("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), Ub = Nb;
function Ib(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Rb(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!rt(s) || s.length !== o.length || o.some((a, r) => a !== s[r]))
      return !1;
  }
  return !0;
}
function Dd(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Td = (e, t, n) => e != null ? e : t != null ? t : n, zb = /* @__PURE__ */ zh({
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
    ({}).NODE_ENV !== "production" && jb();
    const o = Mo(Ec), s = Xt(() => e.route || o.value), a = Mo(Ld, 0), r = Xt(() => {
      let d = Xs(a);
      const { matched: i } = s.value;
      let l;
      for (; (l = i[d]) && !l.components; )
        d++;
      return d;
    }), c = Xt(() => s.value.matched[r.value]);
    hr(Ld, Xt(() => r.value + 1)), hr(Pb, c), hr(Ec, s);
    const u = Dx();
    return jh(() => [u.value, c.value, e.name], ([d, i, l], [g, p, m]) => {
      i && (i.instances[l] = d, p && p !== i && d && d === g && (i.leaveGuards.size || (i.leaveGuards = p.leaveGuards), i.updateGuards.size || (i.updateGuards = p.updateGuards))), d && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !Rn(i, p) || !g) && (i.enterCallbacks[l] || []).forEach((h) => h(d));
    }, { flush: "post" }), () => {
      const d = s.value, i = e.name, l = c.value, g = l && l.components[i];
      if (!g)
        return Bd(n.default, { Component: g, route: d });
      const p = l.props[i], m = p ? p === !0 ? d.params : typeof p == "function" ? p(d) : p : null, f = Oh(g, J({}, m, t, {
        onVnodeUnmounted: (_) => {
          _.component.isUnmounted && (l.instances[i] = null);
        },
        ref: u
      }));
      if ({}.NODE_ENV !== "production" && vn && f.ref) {
        const _ = {
          depth: r.value,
          name: l.name,
          path: l.path,
          meta: l.meta
        };
        (rt(f.ref) ? f.ref.map((S) => S.i) : [f.ref.i]).forEach((S) => {
          S.__vrv_devtools = _;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Bd(n.default, { Component: f, route: d }) || f
      );
    };
  }
});
function Bd(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Ob = zb;
function jb() {
  const e = Rh(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    G(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function ts(e, t) {
  const n = J({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => Qb(o, ["instances", "children", "aliasOf"]))
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
function Aa(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let Hb = 0;
function qb(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = Hb++;
  Ex({
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
        value: ts(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: i, componentInstance: l }) => {
      if (l.__vrv_devtools) {
        const g = l.__vrv_devtools;
        i.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: ef
        });
      }
      rt(l.__vrl_devtools) && (l.__devtoolsApi = s, l.__vrl_devtools.forEach((g) => {
        let p = of, m = "";
        g.isExactActive ? (p = nf, m = "This is exactly active") : g.isActive && (p = tf, m = "This link is active"), i.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: m,
          backgroundColor: p
        });
      }));
    }), jh(t.currentRoute, () => {
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
        guard: Aa("beforeEach"),
        from: ts(l, "Current Location during this navigation"),
        to: ts(i, "Target location")
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
        guard: Aa("afterEach")
      };
      g ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, p.status = Aa("❌")) : p.status = Aa("✅"), p.from = ts(l, "Current Location during this navigation"), p.to = ts(i, "Target location"), s.addTimelineEvent({
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
      l.forEach(rf), i.filter && (l = l.filter((g) => (
        // save matches state based on the payload
        Lc(g, i.filter.toLowerCase())
      ))), l.forEach((g) => af(g, t.currentRoute.value)), i.rootNodes = l.map(sf);
    }
    let d;
    s.on.getInspectorTree((i) => {
      d = i, i.app === e && i.inspectorId === c && u();
    }), s.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === c) {
        const g = n.getRoutes().find((p) => p.record.__vd_id === i.nodeId);
        g && (i.state = {
          options: Xb(g)
        });
      }
    }), s.sendInspectorTree(c), s.sendInspectorState(c);
  });
}
function Gb(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function Xb(e) {
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
        display: e.keys.map((o) => `${o.name}${Gb(o)}`).join(" "),
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
const ef = 15485081, tf = 2450411, nf = 8702998, Wb = 2282478, of = 16486972, Kb = 6710886;
function sf(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: Wb
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: of
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: ef
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: nf
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: tf
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: Kb
  });
  let o = n.__vd_id;
  return o == null && (o = String(Yb++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(sf)
  };
}
let Yb = 0;
const Jb = /^\/(.*)\/([a-z]*)$/;
function af(e, t) {
  const n = t.matched.length && Rn(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => Rn(o, e.record))), e.children.forEach((o) => af(o, t));
}
function rf(e) {
  e.__vd_match = !1, e.children.forEach(rf);
}
function Lc(e, t) {
  const n = String(e.re).match(Jb);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => Lc(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = Zs(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => Lc(r, t));
}
function Qb(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function Zb(e) {
  const t = gb(e.routes, e), n = e.parseQuery || Tb, o = e.stringifyQuery || Ed, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = es(), r = es(), c = es(), u = Tx(Cn);
  let d = Cn;
  vn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = fr.bind(null, (v) => "" + v), l = fr.bind(null, Db), g = (
    // @ts-expect-error: intentionally avoid the type check
    fr.bind(null, Zs)
  );
  function p(v, L) {
    let D, F;
    return Gh(v) ? (D = t.getRecordMatcher(v), F = L) : F = v, t.addRoute(F, D);
  }
  function m(v) {
    const L = t.getRecordMatcher(v);
    L ? t.removeRoute(L) : {}.NODE_ENV !== "production" && G(`Cannot remove non-existent route "${String(v)}"`);
  }
  function h() {
    return t.getRoutes().map((v) => v.record);
  }
  function f(v) {
    return !!t.getRecordMatcher(v);
  }
  function _(v, L) {
    if (L = J({}, L || u.value), typeof v == "string") {
      const O = wr(n, v, L.path), se = t.resolve({ path: O.path }, L), Ie = s.createHref(O.fullPath);
      return {}.NODE_ENV !== "production" && (Ie.startsWith("//") ? G(`Location "${v}" resolved to "${Ie}". A resolved location cannot start with multiple slashes.`) : se.matched.length || G(`No match found for location with path "${v}"`)), J(O, se, {
        params: g(se.params),
        hash: Zs(O.hash),
        redirectedFrom: void 0,
        href: Ie
      });
    }
    let D;
    if ("path" in v)
      ({}).NODE_ENV !== "production" && "params" in v && !("name" in v) && // @ts-expect-error: the type is never
      Object.keys(v.params).length && G(`Path "${v.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), D = J({}, v, {
        path: wr(n, v.path, L.path).path
      });
    else {
      const O = J({}, v.params);
      for (const se in O)
        O[se] == null && delete O[se];
      D = J({}, v, {
        params: l(O)
      }), L.params = l(L.params);
    }
    const F = t.resolve(D, L), q = v.hash || "";
    ({}).NODE_ENV !== "production" && q && !q.startsWith("#") && G(`A \`hash\` should always start with the character "#". Replace "${q}" with "#${q}".`), F.params = i(g(F.params));
    const le = Ux(o, J({}, v, {
      hash: Eb(q),
      path: F.path
    })), z = s.createHref(le);
    return {}.NODE_ENV !== "production" && (z.startsWith("//") ? G(`Location "${v}" resolved to "${z}". A resolved location cannot start with multiple slashes.`) : F.matched.length || G(`No match found for location with path "${"path" in v ? v.path : v}"`)), J({
      fullPath: le,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: q,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === Ed ? Bb(v.query) : v.query || {}
      )
    }, F, {
      redirectedFrom: void 0,
      href: z
    });
  }
  function w(v) {
    return typeof v == "string" ? wr(n, v, u.value.path) : J({}, v);
  }
  function S(v, L) {
    if (d !== v)
      return No(8, {
        from: L,
        to: v
      });
  }
  function x(v) {
    return E(v);
  }
  function k(v) {
    return x(J(w(v), { replace: !0 }));
  }
  function y(v) {
    const L = v.matched[v.matched.length - 1];
    if (L && L.redirect) {
      const { redirect: D } = L;
      let F = typeof D == "function" ? D(v) : D;
      if (typeof F == "string" && (F = F.includes("?") || F.includes("#") ? F = w(F) : (
        // force empty params
        { path: F }
      ), F.params = {}), {}.NODE_ENV !== "production" && !("path" in F) && !("name" in F))
        throw G(`Invalid redirect found:
${JSON.stringify(F, null, 2)}
 when navigating to "${v.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return J({
        query: v.query,
        hash: v.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in F ? {} : v.params
      }, F);
    }
  }
  function E(v, L) {
    const D = d = _(v), F = u.value, q = v.state, le = v.force, z = v.replace === !0, O = y(D);
    if (O)
      return E(
        J(w(O), {
          state: typeof O == "object" ? J({}, q, O.state) : q,
          force: le,
          replace: z
        }),
        // keep original redirectedFrom if it exists
        L || D
      );
    const se = D;
    se.redirectedFrom = L;
    let Ie;
    return !le && _d(o, F, D) && (Ie = No(16, { to: se, from: F }), ie(
      F,
      F,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (Ie ? Promise.resolve(Ie) : B(se, F)).catch((he) => Zt(he) ? (
      // navigation redirects still mark the router as ready
      Zt(
        he,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? he : De(he)
    ) : (
      // reject any unknown error
      oe(he, se, F)
    )).then((he) => {
      if (he) {
        if (Zt(
          he,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          _d(o, _(he.to), se) && // and we have done it a couple of times
          L && // @ts-expect-error: added only in dev
          (L._count = L._count ? (
            // @ts-expect-error
            L._count + 1
          ) : 1) > 30 ? (G(`Detected a possibly infinite redirection in a navigation guard when going from "${F.fullPath}" to "${se.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : E(
            // keep options
            J({
              // preserve an existing replacement but allow the redirect to override it
              replace: z
            }, w(he.to), {
              state: typeof he.to == "object" ? J({}, q, he.to.state) : q,
              force: le
            }),
            // preserve the original redirectedFrom if any
            L || se
          );
      } else
        he = X(se, F, !0, z, q);
      return I(se, F, he), he;
    });
  }
  function M(v, L) {
    const D = S(v, L);
    return D ? Promise.reject(D) : Promise.resolve();
  }
  function V(v) {
    const L = Le.values().next().value;
    return L && typeof L.runWithContext == "function" ? L.runWithContext(v) : v();
  }
  function B(v, L) {
    let D;
    const [F, q, le] = eC(v, L);
    D = _r(F.reverse(), "beforeRouteLeave", v, L);
    for (const O of F)
      O.leaveGuards.forEach((se) => {
        D.push(In(se, v, L));
      });
    const z = M.bind(null, v, L);
    return D.push(z), H(D).then(() => {
      D = [];
      for (const O of a.list())
        D.push(In(O, v, L));
      return D.push(z), H(D);
    }).then(() => {
      D = _r(q, "beforeRouteUpdate", v, L);
      for (const O of q)
        O.updateGuards.forEach((se) => {
          D.push(In(se, v, L));
        });
      return D.push(z), H(D);
    }).then(() => {
      D = [];
      for (const O of le)
        if (O.beforeEnter)
          if (rt(O.beforeEnter))
            for (const se of O.beforeEnter)
              D.push(In(se, v, L));
          else
            D.push(In(O.beforeEnter, v, L));
      return D.push(z), H(D);
    }).then(() => (v.matched.forEach((O) => O.enterCallbacks = {}), D = _r(le, "beforeRouteEnter", v, L), D.push(z), H(D))).then(() => {
      D = [];
      for (const O of r.list())
        D.push(In(O, v, L));
      return D.push(z), H(D);
    }).catch((O) => Zt(
      O,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? O : Promise.reject(O));
  }
  function I(v, L, D) {
    c.list().forEach((F) => V(() => F(v, L, D)));
  }
  function X(v, L, D, F, q) {
    const le = S(v, L);
    if (le)
      return le;
    const z = L === Cn, O = vn ? history.state : {};
    D && (F || z ? s.replace(v.fullPath, J({
      scroll: z && O && O.scroll
    }, q)) : s.push(v.fullPath, q)), u.value = v, ie(v, L, D, z), De();
  }
  let K;
  function Ee() {
    K || (K = s.listen((v, L, D) => {
      if (!U.listening)
        return;
      const F = _(v), q = y(F);
      if (q) {
        E(J(q, { replace: !0 }), F).catch(Ws);
        return;
      }
      d = F;
      const le = u.value;
      vn && Gx(Sd(le.fullPath, D.delta), Oi()), B(F, le).catch((z) => Zt(
        z,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? z : Zt(
        z,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (E(
        z.to,
        F
        // avoid an uncaught rejection, let push call triggerError
      ).then((O) => {
        Zt(
          O,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !D.delta && D.type === Qs.pop && s.go(-1, !1);
      }).catch(Ws), Promise.reject()) : (D.delta && s.go(-D.delta, !1), oe(z, F, le))).then((z) => {
        z = z || X(
          // after navigation, all matched components are resolved
          F,
          le,
          !1
        ), z && (D.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Zt(
          z,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-D.delta, !1) : D.type === Qs.pop && Zt(
          z,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), I(F, le, z);
      }).catch(Ws);
    }));
  }
  let be = es(), N = es(), W;
  function oe(v, L, D) {
    De(v);
    const F = N.list();
    return F.length ? F.forEach((q) => q(v, L, D)) : ({}.NODE_ENV !== "production" && G("uncaught error during route navigation:"), console.error(v)), Promise.reject(v);
  }
  function ae() {
    return W && u.value !== Cn ? Promise.resolve() : new Promise((v, L) => {
      be.add([v, L]);
    });
  }
  function De(v) {
    return W || (W = !v, Ee(), be.list().forEach(([L, D]) => v ? D(v) : L()), be.reset()), v;
  }
  function ie(v, L, D, F) {
    const { scrollBehavior: q } = e;
    if (!vn || !q)
      return Promise.resolve();
    const le = !D && Xx(Sd(v.fullPath, 0)) || (F || !D) && history.state && history.state.scroll || null;
    return Px().then(() => q(v, L, le)).then((z) => z && qx(z)).catch((z) => oe(z, v, L));
  }
  const Y = (v) => s.go(v);
  let Ge;
  const Le = /* @__PURE__ */ new Set(), U = {
    currentRoute: u,
    listening: !0,
    addRoute: p,
    removeRoute: m,
    hasRoute: f,
    getRoutes: h,
    resolve: _,
    options: e,
    push: x,
    replace: k,
    go: Y,
    back: () => Y(-1),
    forward: () => Y(1),
    beforeEach: a.add,
    beforeResolve: r.add,
    afterEach: c.add,
    onError: N.add,
    isReady: ae,
    install(v) {
      const L = this;
      v.component("RouterLink", Ub), v.component("RouterView", Ob), v.config.globalProperties.$router = L, Object.defineProperty(v.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Xs(u)
      }), vn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !Ge && u.value === Cn && (Ge = !0, x(s.location).catch((q) => {
        ({}).NODE_ENV !== "production" && G("Unexpected error when starting the router:", q);
      }));
      const D = {};
      for (const q in Cn)
        Object.defineProperty(D, q, {
          get: () => u.value[q],
          enumerable: !0
        });
      v.provide(ji, L), v.provide(Zh, Bx(D)), v.provide(Ec, u);
      const F = v.unmount;
      Le.add(v), v.unmount = function() {
        Le.delete(v), Le.size < 1 && (d = Cn, K && K(), K = null, u.value = Cn, Ge = !1, W = !1), F();
      }, {}.NODE_ENV !== "production" && vn && qb(v, L, t);
    }
  };
  function H(v) {
    return v.reduce((L, D) => L.then(() => V(D)), Promise.resolve());
  }
  return U;
}
function eC(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let r = 0; r < a; r++) {
    const c = t.matched[r];
    c && (e.matched.find((d) => Rn(d, c)) ? o.push(c) : n.push(c));
    const u = e.matched[r];
    u && (t.matched.find((d) => Rn(d, u)) || s.push(u));
  }
  return [n, o, s];
}
function He() {
  return Mo(ji);
}
window.Vue.computed;
window.Vue.unref;
window.Vue.resolveDirective;
window.Vue.createElementVNode;
window.Vue.withDirectives;
window.Vue.withCtx;
window.Vue.openBlock;
window.Vue.createBlock;
window.Codex.CdxMessage;
const tC = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), r = parseInt(e.slice(12, 14)), c = new Date(Date.UTC(t, n, o, s, a, r)), d = (/* @__PURE__ */ new Date()).getTime() - c.getTime();
  return Math.round(d / (1e3 * 3600 * 24));
}, nC = (e) => {
  const t = tC(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const yt = window.Vue.unref, lo = window.Vue.createVNode, en = window.Vue.createElementVNode, Pd = window.Vue.renderSlot, Fd = window.Vue.withModifiers, vr = window.Vue.toDisplayString, Sr = window.Vue.withCtx, oC = window.Vue.openBlock, sC = window.Vue.createElementBlock, aC = window.Vue.createCommentVNode, iC = { class: "col shrink pe-4" }, rC = { class: "col" }, lC = { class: "cx-translation__details column justify-between ma-0" }, cC = { class: "row ma-0" }, uC = { class: "col grow" }, dC = { class: "col shrink ps-2" }, gC = ["dir", "textContent"], pC = ["dir", "textContent"], mC = ["textContent"], hC = window.Vuex.useStore, fC = window.Vue.computed, lf = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: Mc,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e, { emit: t }) {
    const n = e, o = hC(), s = (c, u) => {
      const d = o.getters["mediawiki/getPage"](c, u);
      return d == null ? void 0 : d.thumbnail;
    }, a = de(), r = fC(() => {
      const c = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, u = nC(n.translation.startTimestamp);
      return a.i18n(
        c[u.postfix],
        u.value
      );
    });
    return (c, u) => e.translation ? (oC(), sC("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: u[1] || (u[1] = Fd((d) => c.$emit("click"), ["stop"]))
    }, [
      en("div", iC, [
        lo(yt(Fc), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      en("div", rC, [
        en("div", lC, [
          en("div", cC, [
            en("div", uC, [
              Pd(c.$slots, "title")
            ]),
            en("div", dC, [
              lo(yt(je), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: u[0] || (u[0] = Fd((d) => c.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          Pd(c.$slots, "mid-content"),
          lo(yt(P), { class: "cx-translation__footer ma-0" }, {
            default: Sr(() => [
              lo(yt(b), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: Sr(() => [
                  en("span", {
                    class: "mw-ui-autonym",
                    dir: yt(R.getDir)(e.translation.sourceLanguage),
                    textContent: vr(yt(R.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, gC),
                  lo(yt(je), {
                    icon: yt(b0),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  en("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: yt(R.getDir)(e.translation.targetLanguage),
                    textContent: vr(yt(R.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, pC)
                ]),
                _: 1
              }),
              lo(yt(b), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: Sr(() => [
                  en("span", {
                    textContent: vr(r.value)
                  }, null, 8, mC)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : aC("", !0);
  }
};
const ns = window.Vue.unref, Md = window.Vue.toDisplayString, wC = window.Vue.normalizeClass, _C = window.Vue.createElementVNode, yr = window.Vue.openBlock, vC = window.Vue.createElementBlock, Nd = window.Vue.createCommentVNode, Ud = window.Vue.createVNode, Da = window.Vue.withCtx, Id = window.Vue.createBlock, SC = ["lang", "textContent"], yC = ["lang", "textContent"], xC = window.Vue.computed, bC = window.Vue.inject, CC = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: Fi,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = bC("colors").gray200, s = xC(
      () => {
        var u;
        return ((u = t.translation.progress) == null ? void 0 : u.any) * 100 || 0;
      }
    ), a = He(), { setTranslationURLParams: r } = T(), c = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (u, d) => (yr(), Id(lf, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": ns(Hm),
      onActionIconClicked: d[0] || (d[0] = (i) => u.$emit("delete-translation")),
      onClick: c
    }, {
      title: Da(() => [
        _C("h5", {
          class: wC(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: Md(e.translation.sourceTitle)
        }, null, 10, SC),
        e.translation.isLeadSectionTranslation ? Nd("", !0) : (yr(), vC("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: Md(e.translation.sourceSectionTitle)
        }, null, 8, yC))
      ]),
      "mid-content": Da(() => [
        e.translation.progress ? (yr(), Id(ns(P), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Da(() => [
            Ud(ns(b), null, {
              default: Da(() => [
                Ud(ns(Wm), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: ns(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Nd("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, kC = window.Vuex.useStore, cf = [], $C = (e, t, n) => cf.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), VC = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  cf.push(o);
}, EC = () => {
  const e = kC();
  return (t, n, o) => C(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !$C(t, n, o) && (s = yield me.fetchSectionSuggestion(
      t,
      o,
      n
    ), VC(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, uf = "cx-translation-session-position-", df = () => uf + mw.user.sessionId(), LC = () => {
  const e = parseInt(
    mw.storage.get(df())
  );
  return isNaN(e) ? 0 : e;
}, AC = function(e) {
  const t = df();
  mw.storage.set(t, e);
}, DC = () => {
  Object.keys(mw.storage.store).filter((e) => e.startsWith(uf)).forEach((e) => mw.storage.remove(e));
}, TC = () => {
  const e = LC();
  return e % 10 === 0 && DC(), AC(e + 1), e;
};
let Ac = null;
function BC(e) {
  if (Ac)
    return Promise.resolve(Ac);
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
function PC(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function FC(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = mw.user.sessionId(), n = mw.config.get("wgDBname"), o = `cx_sx_${t}_${e.access_method}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), r = mw.user.getName(), c = {
    $schema: "/analytics/mediawiki/content_translation_event/1.10.0",
    wiki_db: n,
    user_name: r,
    web_session_id: t,
    web_pageview_id: mw.user.getPageviewToken(),
    user_is_anonymous: a,
    content_translation_session_id: o,
    content_translation_session_position: TC()
  };
  return a ? Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, c, e))
  ) : BC(r).then((u) => {
    Ac = u, mw.eventLog.submit(
      s,
      Object.assign({}, c, e, {
        user_global_edit_count: u,
        user_global_edit_count_bucket: PC(u)
      })
    );
  });
}
const lt = () => (e) => (e.access_method || (e.access_method = oa ? "desktop" : "mobile web"), FC(e)), gf = window.Vue.ref, pf = gf(null), Dc = gf(null), MC = (e) => {
  pf.value = e;
}, NC = (e) => {
  Dc.value = e;
}, Hi = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = T(), s = lt();
  return {
    logDashboardTranslationStartEvent: () => {
      const r = {
        event_type: "dashboard_translation_start",
        event_source: pf.value,
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
      return Dc.value && (r.event_context = Dc.value), o.value ? (r.translation_source_section = o.value, r.translation_type = "section") : r.translation_type = "article", s(r);
    },
    setStartTranslationEventSource: MC,
    setStartTranslationEventContext: NC
  };
}, ga = () => {
  const e = He(), t = Th(), { setTranslationURLParams: n } = T(), { setStartTranslationEventSource: o, setStartTranslationEventContext: s } = Hi();
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
const Ta = window.Vue.withModifiers, xr = window.Vue.toDisplayString, br = window.Vue.createElementVNode, ut = window.Vue.unref, Ba = window.Vue.openBlock, Rd = window.Vue.createBlock;
window.Vue.createCommentVNode;
const kn = window.Vue.createVNode, Hn = window.Vue.withCtx, zd = window.Vue.createElementBlock, UC = ["lang", "href", "textContent"], IC = {
  key: 1,
  class: "flex"
}, RC = { key: 2 }, Od = window.Vue.computed, jd = window.Vue.ref, Cr = window.Codex.CdxButton, kr = window.Codex.CdxIcon, zC = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: ou,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = jd(!0), o = jd(null), s = Od(() => {
      var l;
      return (l = o.value) == null ? void 0 : l.missingSections;
    }), a = Od(
      () => s.value && Object.keys(s.value)[0]
    );
    EC()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((l) => o.value = l).catch((l) => console.log(l)).finally(() => n.value = !1);
    const { setSectionURLParam: c } = T(), u = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, d = ga(), i = (l) => {
      d(
        t.translation.sourceTitle,
        t.translation.sourceLanguage,
        t.translation.targetLanguage,
        "continue_published"
      ), l && c(l);
    };
    return (l, g) => (Ba(), Rd(lf, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: u
    }, {
      title: Hn(() => [
        br("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: g[0] || (g[0] = Ta(() => {
          }, ["stop"])),
          textContent: xr(e.translation.sourceTitle)
        }, null, 8, UC)
      ]),
      "mid-content": Hn(() => [
        kn(ut(P), { class: "ma-0" }, {
          default: Hn(() => [
            kn(ut(b), null, {
              default: Hn(() => [
                n.value ? (Ba(), Rd(ut(it), { key: 0 })) : s.value ? (Ba(), zd("div", IC, [
                  kn(ut(Cr), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: g[1] || (g[1] = Ta((p) => i(a.value), ["stop"]))
                  }, {
                    default: Hn(() => [
                      kn(ut(kr), {
                        class: "me-1",
                        icon: ut(yc)
                      }, null, 8, ["icon"]),
                      br("span", null, xr(a.value), 1)
                    ]),
                    _: 1
                  }),
                  kn(ut(Cr), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": l.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: g[2] || (g[2] = Ta((p) => i(null), ["stop"]))
                  }, {
                    default: Hn(() => [
                      kn(ut(kr), { icon: ut(Jc) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : (Ba(), zd("div", RC, [
                  kn(ut(Cr), {
                    class: "cx-published-translation__start-new-translation-button flex items-center pa-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: g[3] || (g[3] = Ta((p) => i(null), ["stop"]))
                  }, {
                    default: Hn(() => [
                      kn(ut(kr), {
                        class: "me-1",
                        icon: ut(yc)
                      }, null, 8, ["icon"]),
                      br("span", null, xr(l.$i18n("sx-published-translation-new-translation-button-label")), 1)
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
}, OC = window.Vuex.useStore, jC = () => {
  const { commit: e } = OC(), t = lt();
  return (n) => C(void 0, null, function* () {
    n.isArticleTranslation ? (yield vt.deleteCXTranslation(
      n
    )) && e("translator/removeCXTranslation", n.translationId) : (yield vt.deleteTranslation(
      n.sectionTranslationId,
      n.translationId,
      n.sectionId
    )) && e(
      "translator/removeTranslationBySectionTranslationId",
      n.sectionTranslationId
    );
    const o = {
      event_type: "dashboard_translation_discard",
      translation_id: n.translationId,
      translation_source_language: n.sourceLanguage,
      translation_source_title: n.sourceTitle,
      translation_target_language: n.targetLanguage,
      translation_target_title: n.targetTitle
    };
    n.sourceSectionTitle && (o.translation_source_section = n.sourceSectionTitle), n.targetSectionTitle && (o.translation_target_section = n.targetSectionTitle), t(o);
  });
};
const HC = window.Vue.resolveDirective, $r = window.Vue.createElementVNode, qC = window.Vue.withDirectives, Vr = window.Vue.unref, Hd = window.Vue.createVNode, qd = window.Vue.withCtx, GC = window.Vue.openBlock, XC = window.Vue.createBlock, WC = { class: "pa-4" }, KC = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, YC = {
  __name: "SXConfirmTranslationDeletionDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: Fi,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "continue-translation",
    "discard-translation"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, s = () => o("update:modelValue", !1), a = jC(), r = () => {
      a(n.translation), s();
    };
    return (c, u) => {
      const d = HC("i18n");
      return GC(), XC(Vr(St), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: qd(() => [
          $r("div", KC, [
            Hd(Vr(Ne), {
              class: "grow py-3",
              large: "",
              label: c.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            Hd(Vr(Ne), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: c.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: r
            }, null, 8, ["label"])
          ])
        ]),
        default: qd(() => [
          $r("div", WC, [
            qC($r("span", null, null, 512), [
              [d, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function JC(e, t, n) {
  return C(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield QC(t, n)).filter((s) => e.includes(s)) : [];
  });
}
function Gd(e, t, n) {
  return C(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(R.sortByAutonym) : (yield JC(e, t, n)).sort(R.sortByAutonym);
  });
}
function QC(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function ZC() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function ek(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
const tk = window.Vue.computed;
function nk(e, t) {
  const n = tk(() => {
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
const Er = window.Vue.ref, Lr = window.Vue.watch, ok = window.Vue.computed;
function mf(e, t, n) {
  const o = Er(""), s = Er(-1), a = Er(null), r = () => {
    s.value++, s.value >= c.value.length && (s.value = 0);
  }, c = ok(() => e.value ? t.value : n && n.value ? [...n.value, ...t.value] : []), u = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return Lr(e, () => {
    s.value = -1;
  }), Lr(t, () => {
    t.value && c.value.length > 0 && (s.value = 0);
  }), Lr(s, () => C(this, null, function* () {
    var d;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = c.value[s.value], (d = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || d.scrollIntoView(!1);
  })), { next: r, prev: u, keyboardNavigationContainer: a, selectedItem: o };
}
function au(e, t, n) {
  let o;
  const s = (...a) => {
    const r = this, c = () => {
      o = null, n || e.apply(r, a);
    };
    n && !o && e.apply(r, a), (!o || t) && (clearTimeout(o), o = setTimeout(c, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const Pa = window.Vue.renderSlot, Ce = window.Vue.unref, sk = window.Vue.isRef, Xd = window.Vue.createVNode, os = window.Vue.withModifiers, ss = window.Vue.withKeys, $n = window.Vue.createElementVNode, ak = window.Vue.resolveDirective, Fa = window.Vue.withDirectives, Ar = window.Vue.renderList, Dr = window.Vue.Fragment, tn = window.Vue.openBlock, nn = window.Vue.createElementBlock, Wd = window.Vue.toDisplayString, Ma = window.Vue.normalizeClass, Tr = window.Vue.createCommentVNode, ik = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, rk = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, lk = { class: "results px-3 pt-4" }, ck = { class: "results-header ps-8 pb-2" }, uk = { class: "results-languages--suggestions pa-0 ma-0" }, dk = ["lang", "dir", "aria-selected", "onClick", "textContent"], gk = { class: "results px-3 pt-4" }, pk = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, mk = ["lang", "dir", "aria-selected", "onClick", "textContent"], hk = ["aria-selected"], fk = { class: "no-results px-3 py-4" }, wk = { class: "ps-8" }, Na = window.Vue.ref, _k = window.Vue.watch, vk = window.Vue.onMounted, Kd = window.Vue.computed, hf = {
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
      default: ZC
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = Na(null), a = Na(""), r = Na([]), c = Na(n.suggestions), u = Kd(
      () => ek(r.value)
    ), d = Kd(() => {
      const x = r.value.length;
      return x < 10 ? "few-results" : x < 30 ? "some-results" : "many-results";
    }), i = (x) => o("select", x), l = () => o("close"), { autocompletion: g, onTabSelect: p } = nk(
      a,
      r
    ), { next: m, prev: h, keyboardNavigationContainer: f, selectedItem: _ } = mf(a, r, c), w = () => {
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
    return _k(a, au(() => C(this, null, function* () {
      r.value = yield Gd(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), vk(() => C(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), r.value = yield Gd(
        n.languages,
        "",
        n.searchAPI
      );
    })), (x, k) => {
      const y = ak("i18n");
      return tn(), nn("div", {
        ref_key: "keyboardNavigationContainer",
        ref: f,
        class: "mw-ui-language-selector"
      }, [
        Pa(x.$slots, "search", {}, () => [
          $n("div", ik, [
            Xd(Ce(_c), {
              value: Ce(g),
              "onUpdate:value": k[0] || (k[0] = (E) => sk(g) ? g.value = E : null),
              icon: Ce(Eu),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            Xd(Ce(_c), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": k[1] || (k[1] = (E) => a.value = E),
              class: "mw-ui-language-selector__search pa-4",
              icon: Ce(Eu),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                ss(os(w, ["prevent"]), ["enter"]),
                ss(os(Ce(m), ["stop", "prevent"]), ["down"]),
                ss(os(Ce(h), ["stop", "prevent"]), ["up"]),
                ss(os(l, ["prevent"]), ["esc"]),
                ss(os(Ce(p), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        $n("section", rk, [
          e.suggestions.length && !a.value ? Pa(x.$slots, "suggestions", { key: 0 }, () => [
            $n("section", lk, [
              Fa($n("p", ck, null, 512), [
                [y, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              $n("ul", uk, [
                (tn(!0), nn(Dr, null, Ar(e.suggestions, (E) => (tn(), nn("li", {
                  key: E,
                  class: Ma(["language ma-0", { "language--selected": E === Ce(_) }]),
                  lang: E,
                  dir: Ce(R.getDir)(E),
                  "aria-selected": E === Ce(_) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (M) => i(E),
                  textContent: Wd(Ce(R.getAutonym)(E))
                }, null, 10, dk))), 128))
              ])
            ])
          ]) : Tr("", !0),
          u.value.length ? Pa(x.$slots, "search", { key: 1 }, () => [
            $n("section", gk, [
              e.suggestions.length && !a.value ? Fa((tn(), nn("p", pk, null, 512)), [
                [y, void 0, "cx-sx-language-selector-all-languages"]
              ]) : Tr("", !0),
              (tn(!0), nn(Dr, null, Ar(u.value, (E, M) => (tn(), nn("ul", {
                key: M,
                class: Ma(["results-languages pa-0 ma-0 mb-6", d.value])
              }, [
                (tn(!0), nn(Dr, null, Ar(E, (V) => (tn(), nn("li", {
                  key: V,
                  class: Ma(["language ma-0", { "language--selected": V === Ce(_) }]),
                  lang: V,
                  dir: Ce(R.getDir)(V),
                  role: "option",
                  "aria-selected": V === Ce(_) || null,
                  tabindex: "-1",
                  onClick: (B) => i(V),
                  textContent: Wd(Ce(R.getAutonym)(V))
                }, null, 10, mk))), 128)),
                e.allOptionEnabled && !a.value ? Fa((tn(), nn("li", {
                  key: 0,
                  class: Ma(["language ma-0", { "language--selected": Ce(_) === "all" }]),
                  role: "option",
                  "aria-selected": Ce(_) === "all" || null,
                  tabindex: "-1",
                  onClick: k[2] || (k[2] = (V) => i("all"))
                }, null, 10, hk)), [
                  [y, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : Tr("", !0)
              ], 2))), 128))
            ])
          ]) : Pa(x.$slots, "noresults", { key: 2 }, () => [
            $n("section", fk, [
              Fa($n("h3", wk, null, 512), [
                [y, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const Sk = window.Vue.resolveDirective, Yd = window.Vue.withDirectives, as = window.Vue.openBlock, is = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const ke = window.Vue.unref, Jd = window.Vue.toDisplayString, xt = window.Vue.createVNode, Qd = window.Vue.withModifiers, qn = window.Vue.withCtx, yk = window.Vue.normalizeClass, xk = {
  key: 0,
  class: "mw-ui-autonym"
}, bk = ["lang", "dir", "textContent"], Ck = {
  key: 0,
  class: "mw-ui-autonym"
}, kk = ["lang", "dir", "textContent"], rs = window.Vue.computed, $k = window.Vue.inject, Vk = window.Vue.ref, Zd = window.Codex.CdxButton, Br = window.Codex.CdxIcon, Ti = {
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
    const n = e, o = t, s = $k("breakpoints"), a = rs(() => s.value.mobile), r = Vk(null), c = rs(() => !!r.value), u = () => r.value = "source", d = () => r.value = "target", i = () => r.value = null, l = rs(() => {
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
    }, p = rs(
      () => n.selectedSourceLanguage === "all"
    ), m = rs(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, f) => {
      const _ = Sk("i18n");
      return as(), is("div", {
        class: yk(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
      }, [
        xt(ke(P), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: qn(() => [
            xt(ke(b), {
              class: "flex justify-end px-0",
              cols: a.value ? 5 : null
            }, {
              default: qn(() => [
                xt(ke(Zd), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  onClick: Qd(u, ["stop"])
                }, {
                  default: qn(() => [
                    p.value ? Yd((as(), is("span", xk, null, 512)), [
                      [_, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (as(), is("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: ke(R.getDir)(e.selectedSourceLanguage),
                      textContent: Jd(ke(R.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, bk)),
                    xt(ke(Br), {
                      size: "x-small",
                      icon: ke(xc)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["cols"]),
            xt(ke(b), {
              class: "sx-translation-list-language-selector__arrow flex justify-center px-0",
              cols: a.value ? 2 : null
            }, {
              default: qn(() => [
                xt(ke(Br), { icon: ke(Sh) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            xt(ke(b), {
              class: "px-0",
              cols: a.value ? 5 : null
            }, {
              default: qn(() => [
                xt(ke(Zd), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.targetLanguages.length < 2,
                  onClick: Qd(d, ["stop"])
                }, {
                  default: qn(() => [
                    m.value ? Yd((as(), is("span", Ck, null, 512)), [
                      [_, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (as(), is("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: ke(R.getDir)(e.selectedTargetLanguage),
                      textContent: Jd(ke(R.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, kk)),
                    xt(ke(Br), {
                      size: "x-small",
                      icon: ke(xc)
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
        xt(ke(St), {
          value: c.value,
          "onUpdate:value": f[0] || (f[0] = (w) => c.value = w),
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-mode": "dark",
          onClose: i
        }, {
          default: qn(() => [
            xt(ke(hf), {
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
const eg = window.Vue.unref, Ek = window.Vue.createVNode, Ua = window.Vue.createElementVNode, tg = window.Vue.toDisplayString, Lk = window.Vue.openBlock, Ak = window.Vue.createElementBlock, Dk = { class: "cx-list-empty-placeholder pa-4" }, Tk = { class: "cx-list-empty-placeholder__icon-container" }, Bk = { class: "cx-list-empty-placeholder__icon" }, Pk = ["textContent"], Fk = ["textContent"], Mk = window.Codex.CdxIcon, ff = {
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
    return (t, n) => (Lk(), Ak("div", Dk, [
      Ua("div", Tk, [
        Ua("div", Bk, [
          Ek(eg(Mk), { icon: eg(kh) }, null, 8, ["icon"])
        ])
      ]),
      Ua("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: tg(e.title)
      }, null, 8, Pk),
      Ua("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: tg(e.description)
      }, null, 8, Fk)
    ]));
  }
}, Nk = window.Vuex.useStore, Uk = window.Vue.ref, Ia = Uk({ draft: !1, published: !1 }), jo = () => {
  const e = Nk(), t = Ro(), n = (s) => C(void 0, null, function* () {
    let a = yield vt.fetchTranslations(s);
    e.commit("translator/clearTranslationsByStatus", s), a.forEach(
      (c) => e.commit("translator/addTranslation", c)
    );
    const r = {};
    for (const c of a) {
      const u = c.sourceLanguage;
      r[u] = r[u] || [], r[u].push(c);
    }
    Ia.value[s] = !0;
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
          new Io({ title: l, pagelanguage: i })
        );
      });
  });
  return {
    fetchTranslationsByStatus: n,
    fetchAllTranslations: () => {
      const a = Object.keys(Ia.value).filter(
        (r) => !Ia.value[r]
      ).map(
        (r) => n(r)
      );
      return Promise.all(a).catch((r) => {
        mw.log.error("[CX] Error while fetching translations", r);
      });
    },
    translationsFetched: Ia
  };
};
const Ik = window.Vue.toDisplayString, Pr = window.Vue.normalizeClass, ng = window.Vue.createElementVNode, Mt = window.Vue.openBlock, co = window.Vue.createBlock, Ra = window.Vue.createCommentVNode, og = window.Vue.unref, sg = window.Vue.renderList, ag = window.Vue.Fragment, za = window.Vue.createElementBlock, Rk = window.Vue.createVNode, ig = window.Vue.withCtx, zk = ["textContent"], Ok = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, jk = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, Oa = window.Vue.ref, bt = window.Vue.computed, Hk = window.Vue.inject, qk = window.Vuex.useStore, rg = {
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
    const t = e, n = Oa("all"), o = Oa("all"), s = qk(), { translationsFetched: a } = jo(), r = bt(
      () => a.value[t.translationStatus]
    ), c = Oa(!1), u = Oa(null), d = bt(
      () => t.translationStatus === "draft"
    ), i = bt(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), l = bt(
      () => n.value === "all"
    ), g = bt(
      () => o.value === "all"
    ), p = bt(
      () => i.value.filter(
        (k) => (l.value || k.sourceLanguage === n.value) && (g.value || k.targetLanguage === o.value)
      ).sort((k, y) => k.lastUpdatedTimestamp < y.lastUpdatedTimestamp)
    ), m = bt(() => {
      const k = i.value.map(
        (y) => y.targetLanguage
      );
      return [...new Set(k)];
    }), h = bt(() => {
      const k = i.value.map(
        (y) => y.sourceLanguage
      );
      return [...new Set(k)];
    }), f = (k) => {
      u.value = k, c.value = !0;
    }, _ = bt(() => t.activeStatus === t.translationStatus), w = Hk("breakpoints"), S = bt(() => w.value.mobile), x = bt(
      () => S.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (k, y) => _.value ? (Mt(), co(og(Ye), {
      key: 0,
      class: Pr(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: ig(() => [
        ng("div", {
          class: Pr(["cx-translation-list__header", x.value])
        }, [
          ng("h3", {
            class: Pr(["px-4 mw-ui-card__title mb-0", { "pb-4": S.value }]),
            textContent: Ik(k.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, zk),
          p.value.length ? (Mt(), co(Ti, {
            key: 0,
            "selected-source-language": n.value,
            "onUpdate:selectedSourceLanguage": y[0] || (y[0] = (E) => n.value = E),
            "selected-target-language": o.value,
            "onUpdate:selectedTargetLanguage": y[1] || (y[1] = (E) => o.value = E),
            "source-languages": h.value,
            "target-languages": m.value,
            "all-option-enabled": ""
          }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : Ra("", !0)
        ], 2)
      ]),
      default: ig(() => [
        r.value && !p.value.length ? (Mt(), co(ff, {
          key: 0,
          title: k.$i18n("cx-sx-translation-list-empty-title"),
          description: k.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : Ra("", !0),
        r.value ? Ra("", !0) : (Mt(), co(og(it), { key: 1 })),
        d.value ? (Mt(), za("div", Ok, [
          (Mt(!0), za(ag, null, sg(p.value, (E) => (Mt(), co(CC, {
            key: `${e.translationStatus}-${E.key}`,
            translation: E,
            onDeleteTranslation: (M) => f(E)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (Mt(), za("div", jk, [
          (Mt(!0), za(ag, null, sg(p.value, (E) => (Mt(), co(zC, {
            key: `${e.translationStatus}-${E.key}`,
            translation: E
          }, null, 8, ["translation"]))), 128))
        ])),
        Rk(YC, {
          modelValue: c.value,
          "onUpdate:modelValue": y[2] || (y[2] = (E) => c.value = E),
          translation: u.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : Ra("", !0);
  }
}, Gk = window.Vue.computed, Xk = window.Vuex.useStore, qe = () => {
  const e = Xk(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = T();
  return { sectionSuggestion: Gk(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ) };
}, Wk = window.Vuex.useStore, Kk = window.Vue.computed, Ft = () => {
  const e = Wk(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = T();
  return { currentTranslation: Kk(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (r) => r.status === "draft" && r.sourceTitle === s.value && r.sectionTitleMatches(o.value) && r.sourceLanguage === t.value && r.targetLanguage === n.value
    )
  ) };
}, lg = window.Vue.computed, Yk = window.Vuex.useStore, ct = () => {
  const e = Yk(), { sectionSuggestion: t } = qe(), { currentTranslation: n } = Ft(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = T(), r = lg(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), c = lg(() => {
    var d, i;
    const u = ((d = t.value) == null ? void 0 : d.targetTitle) || ((i = n.value) == null ? void 0 : i.targetTitle);
    return e.getters["mediawiki/getPage"](
      a.value,
      u
    );
  });
  return { currentSourcePage: r, currentTargetPage: c };
}, Jk = window.Vue.ref, Qk = window.Vue.watchEffect, { sectionURLParameter: ea } = T(), Zk = (e, t) => C(void 0, null, function* () {
  const n = e.language, o = e.title, s = e.articleSize, a = t.missingSections, c = (yield me.fetchSuggestionSourceSections(
    n,
    o
  )).sections.filter((u) => u.level === "2").reduce((u, d, i, l) => {
    const g = i < l.length - 1 ? l[i + 1].byteoffset : s;
    return u[d.line] = g - d.byteoffset, u;
  }, {});
  return ea.value ? c[ea.value] : Object.keys(c).filter((u) => a[u]).reduce((u, d) => u + c[d], 0);
}), Fr = (e) => {
  const s = e / 5 / 200;
  return Math.ceil(s);
}, e8 = (e) => {
  const t = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-whole-article",
    Math.round(t * 2) / 2,
    e
  ];
}, t8 = (e, t) => {
  const n = e >= 60 ? e / 60 : 0, o = Math.round(n * 2) / 2;
  return ea.value && o === 0 ? [
    "cx-sx-translation-confirmer-translation-time-single-section-minute",
    e
  ] : ea.value && o > 0 ? [
    "cx-sx-translation-confirmer-translation-time-single-section-hour",
    o
  ] : [
    "cx-sx-translation-confirmer-translation-time-sections",
    o,
    e,
    t
  ];
}, wf = () => {
  const { currentSourcePage: e } = ct(), { sectionSuggestion: t } = qe(), n = Jk(null);
  return Qk(() => {
    if (t.value)
      Zk(
        e.value,
        t.value
      ).then((o) => {
        const s = ea.value ? 1 : Object.keys(t.value.missingSections).length;
        n.value = t8(
          Fr(o),
          s
        );
      });
    else if (e.value) {
      const o = Fr(e.value.articleSize);
      n.value = e8(o);
    }
  }), { translationSizeMessageArgs: n, bytesToMinutes: Fr };
};
const Mr = window.Vue.toDisplayString, Nr = window.Vue.unref, ls = window.Vue.openBlock, Ur = window.Vue.createBlock, cg = window.Vue.createCommentVNode, n8 = window.Vue.createTextVNode, o8 = window.Vue.Fragment, ug = window.Vue.createElementBlock, Tc = window.Vue.createElementVNode, s8 = window.Vue.withCtx, a8 = {
  key: 1,
  class: "cdx-info-chip__text custom-info-chip__with-slash"
}, i8 = { class: "cdx-info-chip__text custom-info-chip__with-slash__first" }, r8 = /* @__PURE__ */ Tc("span", null, "/", -1), l8 = { class: "cdx-info-chip__text custom-info-chip__with-slash__second" }, dg = window.Codex.CdxIcon, c8 = window.Codex.CdxInfoChip, ja = window.Vue.computed, To = {
  __name: "CustomInfoChip",
  props: {
    icon: {
      type: [Object, String],
      default: null
    },
    content: {
      type: String,
      default: ""
    },
    expandable: {
      type: Boolean,
      required: !1,
      default: !1
    },
    expanded: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    const t = e, n = ja(() => t.content.lastIndexOf("/")), o = ja(() => t.content.slice(0, n.value)), s = ja(() => t.content.slice(n.value + 1)), a = ja(
      () => t.expanded ? ry : xc
    );
    return (r, c) => (ls(), Ur(Nr(c8), {
      icon: e.icon,
      class: "custom-info-chip"
    }, {
      default: s8(() => [
        n.value === -1 ? (ls(), ug(o8, { key: 0 }, [
          n8(Mr(e.content) + " ", 1),
          e.expandable ? (ls(), Ur(Nr(dg), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : cg("", !0)
        ], 64)) : (ls(), ug("div", a8, [
          Tc("span", i8, Mr(o.value), 1),
          r8,
          Tc("span", l8, Mr(s.value), 1),
          e.expandable ? (ls(), Ur(Nr(dg), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : cg("", !0)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const ce = window.Vue.unref, Ct = window.Vue.createVNode, Vn = window.Vue.createElementVNode, Ha = window.Vue.toDisplayString, dt = window.Vue.withCtx, u8 = window.Vue.resolveDirective, Ir = window.Vue.withDirectives, Gn = window.Vue.openBlock, uo = window.Vue.createBlock, go = window.Vue.createCommentVNode, gg = window.Vue.withModifiers, d8 = window.Vue.createElementBlock, g8 = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, p8 = { class: "col shrink pe-4" }, m8 = ["lang", "dir", "textContent"], h8 = ["lang", "dir", "textContent"], f8 = ["textContent"], w8 = ["textContent"], Rr = window.Codex.CdxIcon, kt = window.Vue.computed, _8 = window.Vue.inject, v8 = window.Vuex.useStore, Bc = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [zo, so, Bo],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = v8(), { bytesToMinutes: o } = wf(), s = kt(() => t.suggestion), a = kt(
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
      () => s.value instanceof so
    ), i = kt(
      () => s.value instanceof Bo
    ), { sourceLanguageAutonym: l, targetLanguageAutonym: g } = Ve(n), p = kt(
      () => i.value ? xh : bh
    ), m = _8("colors"), h = kt(
      () => i.value ? m.blue600 : "currentColor"
    ), f = kt(() => {
      var w;
      return o((w = r.value) == null ? void 0 : w.articleSize) < 15;
    }), _ = kt(
      () => s.value instanceof mh || s.value instanceof hh
    );
    return (w, S) => {
      const x = u8("i18n");
      return s.value ? (Gn(), d8("div", g8, [
        Vn("div", p8, [
          Ct(ce(Fc), {
            class: "cx-suggestion__thumbnail",
            thumbnail: r.value && r.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        Ct(ce(P), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: dt(() => [
            Ct(ce(P), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: dt(() => [
                Ct(ce(b), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: dt(() => [
                    Vn("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: s.value.sourceLanguage,
                      dir: ce(R.getDir)(s.value.sourceLanguage),
                      textContent: Ha(a.value)
                    }, null, 8, m8)
                  ]),
                  _: 1
                }),
                Ct(ce(b), { shrink: "" }, {
                  default: dt(() => [
                    Vn("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: s.value.sourceLanguage,
                      dir: ce(R.getDir)(s.value.sourceLanguage),
                      textContent: Ha(u.value)
                    }, null, 8, h8)
                  ]),
                  _: 1
                }),
                f.value && !d.value && !_.value ? (Gn(), uo(ce(b), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: dt(() => [
                    Ir(Vn("small", null, null, 512), [
                      [x, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : go("", !0),
                d.value ? (Gn(), uo(ce(b), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
                  shrink: ""
                }, {
                  default: dt(() => [
                    Ir(Vn("small", null, null, 512), [
                      [x, [c.value], "cx-sx-translation-suggestion-info"]
                    ])
                  ]),
                  _: 1
                })) : i.value ? (Gn(), uo(ce(b), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: dt(() => [
                    Ct(ce(P), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: dt(() => [
                        Ct(ce(b), { grow: "" }, {
                          default: dt(() => [
                            Vn("small", {
                              textContent: Ha(ce(l))
                            }, null, 8, f8),
                            Ct(ce(Rr), {
                              icon: ce(Sh),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            Vn("small", {
                              textContent: Ha(ce(g))
                            }, null, 8, w8)
                          ]),
                          _: 1
                        }),
                        c.value ? (Gn(), uo(ce(b), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: dt(() => [
                            Ir(Vn("small", null, null, 512), [
                              [x, [
                                c.value
                              ], "cx-sx-translation-suggestion-info"]
                            ])
                          ]),
                          _: 1
                        })) : go("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : go("", !0),
                _.value ? (Gn(), uo(ce(b), {
                  key: 3,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: dt(() => [
                    Ct(To, {
                      icon: ce(ua),
                      content: s.value.collection.name
                    }, null, 8, ["icon", "content"])
                  ]),
                  _: 1
                })) : go("", !0)
              ]),
              _: 1
            }),
            Ct(ce(b), { shrink: "" }, {
              default: dt(() => [
                i.value ? go("", !0) : (Gn(), uo(ce(Rr), {
                  key: 0,
                  icon: ce(Oo),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: S[0] || (S[0] = gg((k) => w.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                Ct(ce(Rr), {
                  class: "cx-suggestion__favorite-button",
                  icon: p.value,
                  "icon-color": h.value,
                  onClick: S[1] || (S[1] = gg((k) => w.$emit("bookmark"), ["stop"]))
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : go("", !0);
    };
  }
}, S8 = "suggestion_filter_topic_area", y8 = "suggestion_filter_search_result_seed", x8 = "suggestion_filter_collections", b8 = "suggestion_filter_previous_edits", C8 = "suggestion_filter_popular_articles", _f = (e) => {
  if (e.type === Me || e.type === ft)
    return S8;
  if (e.type === _t)
    return y8;
  if (e.id === te || e.type === te)
    return x8;
  if (e.id === Pt)
    return b8;
  if (e.id === Kt)
    return C8;
}, Pc = (e) => {
  if (e.type === Me || e.type === ft || e.type === te || e.type === _t)
    return e.id;
  if (e.id === te)
    return "all-collections";
};
const zr = window.Vue.unref, Or = window.Vue.normalizeClass, pg = window.Vue.createVNode, k8 = window.Vue.renderList, mg = window.Vue.Fragment, qa = window.Vue.openBlock, jr = window.Vue.createElementBlock, $8 = window.Vue.createBlock, V8 = window.Vue.createCommentVNode, E8 = {
  key: 0,
  class: "sx-suggestions-filters__filter__expanded-filters"
}, L8 = window.Vue.computed, A8 = window.Vue.ref, D8 = {
  __name: "SuggestionFilterChip",
  props: {
    filter: {
      type: Gt,
      required: !0
    },
    isSelected: {
      type: Function,
      required: !0
    }
  },
  emits: ["filter-selected"],
  setup(e, { emit: t }) {
    const n = e, o = A8(!1), s = t, a = () => {
      n.filter.expandable && (o.value = !o.value), s("filter-selected", n.filter);
    }, r = L8(() => n.filter.chipLabel), c = (u) => {
      const { label: d } = u, i = n.filter.label;
      return d.startsWith(`${i}/`) ? d.replace(`${i}/`, "") : d;
    };
    return (u, d) => (qa(), jr(mg, null, [
      pg(To, {
        class: Or(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
          "sx-suggestions-filters__filter--active": e.isSelected(e.filter)
        }]),
        icon: e.filter.expandable ? zr(cd) : e.filter.icon,
        content: r.value,
        expandable: !!e.filter.expandable,
        onClick: a
      }, null, 8, ["class", "icon", "content", "expandable"]),
      o.value ? (qa(), jr("div", E8, [
        pg(To, {
          class: Or(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(e.filter)
          }]),
          icon: e.filter.expandable ? zr(cd) : e.filter.icon,
          content: u.$i18n("cx-sx-suggestions-filter-collection-group-all-option-label"),
          onClick: d[0] || (d[0] = (i) => u.$emit("filter-selected", e.filter))
        }, null, 8, ["class", "icon", "content"]),
        (qa(!0), jr(mg, null, k8(e.filter.subFilters, (i) => (qa(), $8(To, {
          key: i.id,
          class: Or(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(i)
          }]),
          content: c(i),
          icon: zr(ua),
          onClick: (l) => u.$emit("filter-selected", i)
        }, null, 8, ["class", "content", "icon", "onClick"]))), 128))
      ])) : V8("", !0)
    ], 64));
  }
};
const T8 = window.Vue.toDisplayString, hg = window.Vue.createElementVNode, B8 = window.Vue.renderList, fg = window.Vue.Fragment, Hr = window.Vue.openBlock, wg = window.Vue.createElementBlock, P8 = window.Vue.createBlock, F8 = { class: "sx-suggestions-filters__group-label mb-3" }, M8 = { class: "sx-suggestions-filters__group-filters mb-3" }, N8 = {
  __name: "SXSuggestionsFiltersDialogTabGroupContent",
  props: {
    filterGroup: {
      type: Js,
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
    return (t, n) => (Hr(), wg(fg, null, [
      hg("div", F8, T8(e.filterGroup.label), 1),
      hg("div", M8, [
        (Hr(!0), wg(fg, null, B8(e.filterGroup.filters, (o) => (Hr(), P8(D8, {
          key: o.id,
          filter: o,
          "is-selected": e.isSelected,
          onFilterSelected: n[0] || (n[0] = (s) => e.tentativelySelectFilter(s))
        }, null, 8, ["filter", "is-selected"]))), 128))
      ])
    ], 64));
  }
}, U8 = window.Vue.computed, _g = window.Vue.ref, vg = window.Vue.watch, iu = (e, t) => {
  const o = _g([]), s = _g(!1), a = U8(
    () => o.value.slice(0, 4)
  ), r = au(() => C(void 0, null, function* () {
    if (!t.value) {
      s.value = !1;
      return;
    }
    try {
      o.value = yield ao.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      s.value = !1;
    }
  }), 500), c = () => {
    s.value = !0, o.value = [], r();
  };
  return vg(t, c), vg(e, c), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
}, qr = window.Vue.ref, Sg = window.Vue.watch, I8 = window.Vue.computed, R8 = mw.loader.require("ext.cx.articletopics"), z8 = R8.flatMap(
  (e) => e.topics.map((t) => We(re({}, t), {
    groupId: e.groupId
  }))
), O8 = () => {
  const e = qr(""), t = qr("all"), n = qr({
    topics: [],
    topic_areas: [],
    collections: []
  }), o = de(), { pageCollectionGroups: s } = Kc(), { sourceLanguageURLParameter: a } = T(), r = (i) => (i = i.toLowerCase(), z8.filter(
    (l) => l.label.toLowerCase().includes(i)
  )), c = (i) => (i = i.toLowerCase(), Object.values(s.value).flat().filter(
    (g) => g.name.toLowerCase().includes(i)
  )), { searchResultsSlice: u } = iu(a, e);
  Sg(u, () => {
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
  }), Sg([e, t], () => C(void 0, null, function* () {
    n.value.topic_areas = r(e.value).map(
      (i) => ({
        label: i.label,
        value: i.label,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-topics-default-description" : "cx-sx-suggestions-filter-search-results-topics-alternative-description"
        ),
        icon: t.value === "all" ? Vh : null,
        filterType: i.groupId === "geography" ? ft : Me,
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
      icon: t.value === "all" ? ua : null,
      filterType: te,
      filterId: i.name
    }));
  }));
  const d = I8(() => {
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
        show: l(Me).length && (i || t.value === "topics"),
        items: l(Me)
      },
      {
        key: "geography",
        show: l(ft).length && (i || t.value === "geography"),
        items: l(ft)
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
const _e = window.Vue.unref, $t = window.Vue.createVNode, on = window.Vue.withCtx, j8 = window.Vue.resolveDirective, Nt = window.Vue.createElementVNode, Gr = window.Vue.withDirectives, Ga = window.Vue.toDisplayString, H8 = window.Vue.createTextVNode, q8 = window.Vue.vShow, Xr = window.Vue.renderList, Wr = window.Vue.Fragment, gt = window.Vue.openBlock, sn = window.Vue.createElementBlock, yg = window.Vue.isRef, G8 = window.Vue.createCommentVNode, Kr = window.Vue.createBlock, X8 = { class: "sx-suggestions-filters" }, W8 = { class: "mb-0" }, K8 = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, Y8 = { class: "mb-3" }, J8 = { class: "px-4 pb-4 pt-7" }, Q8 = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, Z8 = ["onClick"], e2 = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, t2 = { key: 0 }, n2 = { key: 1 }, o2 = { class: "sx-suggestions-filters__search-results-empty" }, s2 = { class: "sx-suggestions-filters__search-results-empty-primary" }, a2 = { class: "sx-suggestions-filters__search-results-empty-secondary" }, Yr = window.Vue.ref, Jr = window.Vue.computed, i2 = window.Vue.inject, xg = window.Codex.CdxButton, r2 = window.Codex.CdxIcon, l2 = window.Codex.CdxTextInput, c2 = window.Codex.CdxMenu, u2 = window.Codex.CdxTabs, d2 = window.Codex.CdxTab, g2 = {
  __name: "SXSuggestionsFiltersDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = de(), o = t, s = Jr(() => [
      {
        name: "all",
        label: n.i18n("cx-sx-suggestions-filters-tab-all"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder"
        ),
        filterGroups: c.value.map(
          (N) => new Js({
            id: N.id,
            label: N.label,
            filters: g(N.id)
          })
        )
      },
      {
        name: "collections",
        label: n.i18n("cx-sx-suggestions-filters-tab-collections"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-collections"
        ),
        filterGroups: [l("collections")].filter(Boolean)
      },
      {
        name: "geography",
        label: n.i18n("cx-sx-suggestions-filters-tab-regions"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-regions"
        ),
        filterGroups: [l("geography")].filter(Boolean)
      },
      {
        name: "topics",
        label: n.i18n("cx-sx-suggestions-filters-tab-topics"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-topics"
        ),
        filterGroups: c.value.filter(
          (N) => p(N.id)
        )
      }
    ]), a = (N) => B.value = N, r = (N) => {
      const oe = l(te), ae = l(ft);
      return N === te && oe.filters.length > 6 ? !0 : N === ft && ae.filters.length > 6;
    }, { allFilters: c, isFilterSelected: u, selectFilter: d, findSelectedFilter: i } = eu(), l = (N) => {
      if (N === ft) {
        const W = c.value.find((oe) => oe.id === N);
        return W.filters = W.filters.map(
          (oe) => new Gt(We(re({}, oe), {
            type: ft
          }))
        ), W;
      }
      return c.value.find((W) => W.id === N);
    }, g = (N) => {
      const W = l(N);
      return r(N) ? W.filters.slice(0, 4) : W.filters;
    }, p = (N) => N !== ft && N !== te && N !== at, m = lt(), h = () => {
      x(), o("update:modelValue", !1);
    }, f = () => {
      m({ event_type: "suggestion_filters_close" }), h();
    }, _ = () => {
      S.value && (m({
        event_type: "suggestion_filters_confirm",
        event_subtype: "suggestion_filters_single_select_confirm",
        event_context: Pc(
          S.value
        )
      }), S.value.type === ft ? d({
        type: Me,
        id: S.value.id,
        label: S.value.label
      }) : d(S.value)), h();
    }, w = Yr(!1), S = Yr(null), x = () => {
      S.value = null, w.value = !1;
    }, k = (N) => {
      const W = {
        event_type: "suggestion_filters_select",
        event_subtype: "suggestion_filters_single_select",
        event_source: _f(N),
        event_context: Pc(N)
      };
      m(W), S.value = N, w.value = !0;
    }, y = (N) => S.value ? S.value.id === N.id && S.value.type === N.type : u(N), E = i2("breakpoints"), M = Jr(() => E.value.mobile), { searchInput: V, searchScope: B, searchResults: I } = O8(), X = Jr(
      () => S.value || i()
    ), K = Yr(null), Ee = (N) => {
      k({
        type: N.filterType,
        id: N.filterId,
        label: N.label
      }), V.value = "";
    }, be = {
      [te]: "cx-sx-suggestions-filters-view-all-collections-group",
      [ft]: "cx-sx-suggestions-filters-view-all-regions-group"
    };
    return (N, W) => {
      const oe = j8("i18n");
      return gt(), Kr(_e(St), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: M.value,
        header: !1
      }, {
        default: on(() => [
          Nt("section", X8, [
            $t(_e(P), {
              class: "sx-suggestions-filters__header ma-0 py-3 px-4",
              align: "stretch",
              justify: "start"
            }, {
              default: on(() => [
                $t(_e(b), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: on(() => [
                    $t(_e(xg), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": N.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: f
                    }, {
                      default: on(() => [
                        $t(_e(r2), { icon: _e(Oo) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                $t(_e(b), {
                  grow: "",
                  align: "center"
                }, {
                  default: on(() => [
                    Gr(Nt("h5", W8, null, 512), [
                      [oe, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                $t(_e(b), {
                  shrink: "",
                  align: "start"
                }, {
                  default: on(() => [
                    Gr($t(_e(xg), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: _
                    }, {
                      default: on(() => [
                        H8(Ga(N.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [q8, w.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Nt("div", K8, [
              Gr(Nt("h5", Y8, null, 512), [
                [oe, void 0, "cx-sx-suggestions-filter-active-group-label"]
              ]),
              Nt("div", null, [
                $t(To, {
                  class: "sx-suggestions-filters__filter sx-suggestions-filters__filter--active my-1 mx-1 py-1",
                  content: X.value.label,
                  icon: X.value.icon
                }, null, 8, ["content", "icon"])
              ])
            ]),
            $t(_e(u2), {
              active: _e(B),
              "onUpdate:active": [
                W[2] || (W[2] = (ae) => yg(B) ? B.value = ae : null),
                a
              ],
              class: "sx-suggestions-filters__tabs"
            }, {
              default: on(() => [
                (gt(!0), sn(Wr, null, Xr(s.value, (ae, De) => (gt(), Kr(_e(d2), {
                  key: De,
                  name: ae.name,
                  label: ae.label
                }, {
                  default: on(() => [
                    Nt("div", J8, [
                      $t(_e(l2), {
                        modelValue: _e(V),
                        "onUpdate:modelValue": W[0] || (W[0] = (ie) => yg(V) ? V.value = ie : null),
                        placeholder: ae.searchPlaceholder,
                        "input-type": "search",
                        "start-icon": _e(Vh),
                        clearable: !!_e(V)
                      }, null, 8, ["modelValue", "placeholder", "start-icon", "clearable"])
                    ]),
                    _e(V) ? (gt(), sn("div", e2, [
                      _e(I).length ? (gt(), sn("div", t2, [
                        (gt(!0), sn(Wr, null, Xr(_e(I), (ie) => (gt(), Kr(_e(c2), {
                          key: ie.key,
                          selected: K.value,
                          "onUpdate:selected": W[1] || (W[1] = (Y) => K.value = Y),
                          expanded: !0,
                          "menu-items": ie.items,
                          "show-thumbnail": ie.showThumbnail || !1,
                          onMenuItemClick: Ee
                        }, null, 8, ["selected", "menu-items", "show-thumbnail"]))), 128))
                      ])) : (gt(), sn("div", n2, [
                        Nt("div", o2, [
                          Nt("span", s2, Ga(N.$i18n(
                            "cx-sx-suggestions-filter-search-results-empty-primary"
                          )), 1),
                          Nt("span", a2, Ga(N.$i18n(
                            "cx-sx-suggestions-filter-search-results-empty-secondary"
                          )), 1)
                        ])
                      ]))
                    ])) : (gt(), sn("div", Q8, [
                      (gt(!0), sn(Wr, null, Xr(ae.filterGroups, (ie) => (gt(), sn("div", {
                        key: ie.id,
                        class: "sx-suggestions-filters__group"
                      }, [
                        $t(N8, {
                          "filter-group": ie,
                          "tentatively-select-filter": k,
                          "is-selected": y
                        }, null, 8, ["filter-group"]),
                        ae.name === "all" && r(ie.id) ? (gt(), sn("div", {
                          key: 0,
                          class: "sx-suggestions-filters__group-view-all mb-3",
                          onClick: (Y) => a(ie.id)
                        }, [
                          Nt("span", null, Ga(N.$i18n(be[ie.id])), 1)
                        ], 8, Z8)) : G8("", !0)
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
const Qr = window.Vue.unref, Xa = window.Vue.openBlock, bg = window.Vue.createBlock;
window.Vue.createCommentVNode;
const p2 = window.Vue.renderList, m2 = window.Vue.Fragment, Cg = window.Vue.createElementBlock, h2 = window.Vue.normalizeClass, f2 = window.Vue.createVNode, w2 = {
  key: 1,
  class: "cx-suggestion-list__filters flex px-4 pb-2"
}, kg = window.Vue.ref, _2 = window.Vue.computed, $g = window.Vue.watch, v2 = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = de(), n = lt(), {
      getFiltersSummary: o,
      selectFilter: s,
      isFilterSelected: a,
      waitingForPageCollectionsFetch: r,
      validateURLFilterWithCollections: c
    } = eu(), u = kg(!1), d = () => {
      n({ event_type: "dashboard_suggestion_filters_view_more" }), u.value = !0;
    }, i = (f) => {
      const _ = {
        event_type: "dashboard_suggestion_filters_quick_select",
        event_source: _f(f),
        event_context: Pc(f)
      };
      n(_), s(f);
    }, l = {
      [Pt]: Eh,
      [Kt]: Ch,
      [te]: ua,
      [Me]: null
    }, { getFilterProvider: g } = Lh(), p = (f) => ({
      id: f.id,
      type: f.type,
      icon: l[g(f)],
      label: f.label,
      action: i
    }), m = kg(o());
    $g(u, (f) => {
      f || (m.value = o());
    }), $g(r, (f) => {
      f || (c(), m.value = o());
    });
    const h = _2(() => [
      ...m.value.map(p),
      {
        id: "more",
        icon: Jc,
        label: t.i18n("cx-sx-suggestions-filter-more-label"),
        action: d
      }
    ]);
    return (f, _) => Qr(r) ? (Xa(), bg(Qr(it), { key: 0 })) : (Xa(), Cg("div", w2, [
      (Xa(!0), Cg(m2, null, p2(h.value, (w) => (Xa(), bg(To, {
        key: w.label,
        class: h2(["cx-suggestion-list__filter py-1 me-1", { "cx-suggestion-list__filter--active": Qr(a)(w) }]),
        icon: w.icon,
        content: w.label,
        onClick: (S) => w.action(w)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      f2(g2, {
        modelValue: u.value,
        "onUpdate:modelValue": _[0] || (_[0] = (w) => u.value = w)
      }, null, 8, ["modelValue"])
    ]));
  }
}, po = window.Vue.computed, Vg = window.Vue.ref, S2 = window.Vue.watch, y2 = window.Vuex.useStore, x2 = () => {
  const e = y2(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = T(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = Gc(), r = lt(), c = po(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), u = po(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), d = Vg(0), i = Vg(0), { maxSuggestionsPerSlice: l } = e.state.suggestions, g = 4, p = po(
    () => a(d.value)
  ), m = po(
    () => s(i.value)
  ), h = () => {
    k(), V(), y(), B();
  }, {
    fetchNextSectionSuggestionsSlice: f,
    fetchNextPageSuggestionsSlice: _
  } = tu(), w = (I) => I.length === l, S = po(
    () => w(m.value)
  ), x = po(
    () => w(p.value)
  ), k = () => {
    const I = (d.value + 1) % g, X = w(
      a(I)
    );
    (!x.value || !X) && f();
  }, y = () => {
    const I = (i.value + 1) % g, X = w(
      s(I)
    );
    (!S.value || !X) && _();
  }, E = (I) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", I), k();
  }, M = (I) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", I), y();
  }, V = () => d.value = (d.value + 1) % g, B = () => i.value = (i.value + 1) % g;
  return S2(
    o,
    () => {
      i.value = 0, y(), d.value = 0, k();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: m,
    currentSectionSuggestionsSlice: p,
    discardPageSuggestion: M,
    discardSectionSuggestion: E,
    onSuggestionRefresh: h,
    pageSuggestionsLoading: u,
    sectionSuggestionsLoading: c,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: s,
    isCurrentPageSuggestionsSliceFull: S,
    isCurrentSectionSuggestionsSliceFull: x
  };
}, b2 = window.Vuex.useStore, ru = () => {
  const e = b2(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = tu(), o = (d, i, l) => e.state.suggestions.pageSuggestions.find(
    (g) => g.sourceLanguage === d && g.targetLanguage === i && g.sourceTitle === l
  ), s = (d) => C(void 0, null, function* () {
    const { sourceTitle: i, sourceLanguage: l, targetLanguage: g } = d;
    yield me.markFavorite(i, l, g);
    const p = new Bo({
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
      ), t()), yield me.markFavorite(
        d,
        i,
        l
      );
      const m = new Bo({
        title: d,
        sourceLanguage: i,
        targetLanguage: l
      });
      e.commit("suggestions/addFavoriteSuggestion", m);
    }),
    removeFavoriteSuggestion: (d) => (e.commit("suggestions/removeFavoriteSuggestion", d), me.unmarkFavorite(d))
  };
}, C2 = "suggestion_no_seed", k2 = "suggestion_recent_edit", $2 = "suggestion_topic_area", V2 = "suggestion_search_result_seed", E2 = "suggestion_featured", L2 = "suggestion_collections", A2 = () => {
  const { currentSuggestionFilters: e } = T();
  return (t = null) => {
    const { type: n, id: o } = e.value;
    if (o === Pt)
      return t ? k2 : C2;
    if (n === Me)
      return $2;
    if (n === _t)
      return V2;
    if (o === Kt)
      return E2;
    if (o === te || n === te)
      return L2;
    throw new Error("Event source cannot be empty");
  };
};
const Eg = window.Vue.normalizeClass, D2 = window.Vue.resolveDirective, cs = window.Vue.createElementVNode, Wa = window.Vue.withDirectives, ge = window.Vue.unref, Je = window.Vue.openBlock, Ut = window.Vue.createBlock, En = window.Vue.createCommentVNode, Zr = window.Vue.createVNode, us = window.Vue.withCtx, Lg = window.Vue.renderList, Ag = window.Vue.Fragment, el = window.Vue.createElementBlock, T2 = window.Vue.toDisplayString, B2 = window.Vue.createTextVNode, P2 = window.Vue.vShow, F2 = { class: "cx-suggestion-list" }, M2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, N2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, U2 = { class: "cx-suggestion-list__refresh-button-container justify-center" }, It = window.Vue.computed, I2 = window.Vue.inject, R2 = window.Vue.ref, z2 = window.Codex.CdxButton, O2 = window.Codex.CdxIcon, j2 = window.Vuex.useStore, H2 = {
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
    } = T(), { supportedSourceLanguageCodes: s, supportedTargetLanguageCodes: a } = ia(), r = Ph(), c = (Y) => r(Y, n.value), u = (Y) => r(t.value, Y), d = A2(), i = ga(), l = (Y) => {
      i(
        Y.sourceTitle,
        Y.sourceLanguage,
        Y.targetLanguage,
        d(Y.suggestionSeed),
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
      isCurrentPageSuggestionsSliceFull: S,
      isCurrentSectionSuggestionsSliceFull: x
    } = x2(), k = R2(null), y = lt(), E = () => {
      y({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), f(), k.value && k.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: M, markFavoritePageSuggestion: V } = ru(), B = I2("breakpoints"), I = It(() => B.value.mobile), X = It(
      () => I.value ? null : "pb-2 flex justify-between items-center"
    ), K = j2(), Ee = It(
      () => K.state.suggestions.isPageSuggestionsFetchPending
    ), be = It(
      () => K.state.suggestions.isSectionSuggestionsFetchPending
    ), N = It(
      () => Ee.value || _.value && !S.value
    ), W = It(
      () => be.value || w.value && !x.value
    ), oe = It(
      () => Ee.value || _.value || g.value.length > 0
    ), ae = It(
      () => be.value || w.value || p.value.length > 0
    ), De = It(
      () => !oe.value && !ae.value
    ), ie = It(
      () => !w.value && !_.value && !Ee.value && !be.value && !De.value
    );
    return (Y, Ge) => {
      const Le = D2("i18n");
      return Wa((Je(), el("div", F2, [
        Zr(ge(Ye), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: us(() => [
            cs("div", {
              class: Eg(["cx-suggestion-list__header-card__header px-4", X.value])
            }, [
              Wa(cs("h3", {
                class: Eg(["mw-ui-card__title mb-0", { "py-3": I.value }])
              }, null, 2), [
                [Le, void 0, "cx-suggestionlist-title"]
              ]),
              I.value ? En("", !0) : (Je(), Ut(Ti, {
                key: 0,
                "source-languages": ge(s),
                "target-languages": ge(a),
                "selected-source-language": ge(t),
                "selected-target-language": ge(n),
                "onUpdate:selectedSourceLanguage": c,
                "onUpdate:selectedTargetLanguage": u
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            Zr(v2)
          ]),
          default: us(() => [
            I.value ? (Je(), Ut(Ti, {
              key: 0,
              "source-languages": ge(s),
              "target-languages": ge(a),
              "selected-source-language": ge(t),
              "selected-target-language": ge(n),
              "onUpdate:selectedSourceLanguage": c,
              "onUpdate:selectedTargetLanguage": u
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])) : En("", !0)
          ]),
          _: 1
        }),
        oe.value ? (Je(), Ut(ge(Ye), {
          key: 0,
          ref_key: "pageSuggestionsList",
          ref: k,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: us(() => [
            Wa(cs("h5", M2, null, 512), [
              [Le, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (Je(!0), el(Ag, null, Lg(ge(g), (U, H) => (Je(), Ut(Bc, {
              key: `page-suggestion-${H}`,
              suggestion: U,
              onClose: (v) => ge(m)(U),
              onClick: (v) => l(U),
              onBookmark: (v) => ge(V)(U)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            N.value ? (Je(), Ut(ge(it), { key: 0 })) : En("", !0)
          ]),
          _: 1
        }, 512)) : En("", !0),
        ae.value ? (Je(), Ut(ge(Ye), {
          key: 1,
          class: "cx-suggestion-list__section-suggestions pa-0 mb-0"
        }, {
          default: us(() => [
            Wa(cs("h5", N2, null, 512), [
              [Le, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (Je(!0), el(Ag, null, Lg(ge(p), (U, H) => (Je(), Ut(Bc, {
              key: `section-suggestion-${H}`,
              class: "ma-0",
              suggestion: U,
              onClose: (v) => ge(h)(U),
              onClick: (v) => l(U),
              onBookmark: (v) => ge(M)(U)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            W.value ? (Je(), Ut(ge(it), { key: 0 })) : En("", !0)
          ]),
          _: 1
        })) : En("", !0),
        De.value ? (Je(), Ut(ff, {
          key: 2,
          title: Y.$i18n("cx-sx-suggestion-list-empty-title"),
          description: Y.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : En("", !0),
        cs("div", U2, [
          ie.value ? (Je(), Ut(ge(z2), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: E
          }, {
            default: us(() => [
              Zr(ge(O2), {
                class: "me-1",
                icon: ge($h)
              }, null, 8, ["icon"]),
              B2(" " + T2(Y.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : En("", !0)
        ])
      ], 512)), [
        [P2, e.active]
      ]);
    };
  }
}, q2 = window.Vue.resolveDirective, G2 = window.Vue.createElementVNode, X2 = window.Vue.withDirectives, W2 = window.Vue.renderList, K2 = window.Vue.Fragment, tl = window.Vue.openBlock, Y2 = window.Vue.createElementBlock, Dg = window.Vue.unref, Tg = window.Vue.createBlock, Bg = window.Vue.withCtx, J2 = window.Vue.createCommentVNode, Q2 = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, Z2 = window.Vue.computed, e$ = window.Vuex.useStore, t$ = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = e$(), n = Z2(() => t.state.suggestions.favorites || []), o = ga(), s = (r) => o(
      r.title,
      r.sourceLanguage,
      r.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = ru();
    return (r, c) => {
      const u = q2("i18n");
      return n.value.length ? (tl(), Tg(Dg(Ye), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: Bg(() => [
          X2(G2("h3", Q2, null, 512), [
            [u, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: Bg(() => [
          (tl(!0), Y2(K2, null, W2(n.value, (d, i) => (tl(), Tg(Bc, {
            key: `favorite-${i}`,
            suggestion: d,
            onClick: (l) => s(d),
            onBookmark: (l) => Dg(a)(d)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : J2("", !0);
    };
  }
};
const n$ = window.Vue.resolveDirective, ds = window.Vue.createElementVNode, o$ = window.Vue.withDirectives, s$ = window.Vue.renderList, a$ = window.Vue.Fragment, Pg = window.Vue.openBlock, Fg = window.Vue.createElementBlock, i$ = window.Vue.unref, r$ = window.Vue.createVNode, l$ = window.Vue.toDisplayString, c$ = { class: "cx-help-panel pa-4" }, u$ = { class: "cx-help-panel__item-list mt-6 ps-2" }, d$ = ["href", "target"], g$ = ["textContent"], p$ = window.Codex.CdxIcon, m$ = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = de(), n = [
      {
        icon: dy,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
        target: "_blank"
      },
      {
        icon: cy,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
        target: "_blank"
      }
    ];
    return (o, s) => {
      const a = n$("i18n");
      return Pg(), Fg("div", c$, [
        o$(ds("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        ds("ul", u$, [
          (Pg(), Fg(a$, null, s$(n, (r, c) => ds("li", {
            key: c,
            class: "mt-4"
          }, [
            ds("a", {
              href: r.href,
              target: r.target
            }, [
              r$(i$(p$), {
                class: "me-2",
                icon: r.icon
              }, null, 8, ["icon"]),
              ds("span", {
                textContent: l$(r.label)
              }, null, 8, g$)
            ], 8, d$)
          ])), 64))
        ])
      ]);
    };
  }
};
const h$ = window.Vue.resolveDirective, mo = window.Vue.createElementVNode, nl = window.Vue.withDirectives, Mg = window.Vue.toDisplayString, ol = window.Vue.unref, sl = window.Vue.withCtx, al = window.Vue.createVNode, f$ = window.Vue.openBlock, w$ = window.Vue.createElementBlock, _$ = { class: "cx-stats-panel pa-4" }, v$ = ["textContent"], S$ = { class: "cx-stats-panel__monthly-stats-label" }, y$ = ["textContent"], x$ = { class: "cx-stats-panel__total-stats-label" }, b$ = window.Vue.ref, Ng = window.Vue.computed, C$ = window.Vue.watch, k$ = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = e, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", o = Ng(() => {
      var r, c;
      return ((c = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : c.count) || 0;
    }), s = Ng(() => {
      var r, c;
      return ((c = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : c.delta) || 0;
    }), a = b$(null);
    return C$(
      () => t.stats,
      () => {
        const r = t.stats, c = a.value.getContext("2d"), u = Object.keys(t.stats || {}).sort(), d = u.reduce(
          (x, k) => Math.max(x, r[k].delta),
          0
        ), i = u.map((x) => r[x].delta), l = a.value.getBoundingClientRect().width, g = a.value.getBoundingClientRect().height;
        a.value.width = l, a.value.height = g;
        const p = 4, m = 6, h = 50, f = (h - p) / d;
        let _ = p;
        const w = Math.floor(
          (l - p) / (m + p)
        ), S = i.slice(
          Math.max(i.length - w, 0)
        );
        S.forEach((x, k) => {
          k === S.length - 1 && (c.fillStyle = "#36c");
          const y = h - x * f;
          c.fillRect(_, y, m, x * f), _ += m + p;
        });
      }
    ), (r, c) => {
      const u = h$("i18n");
      return f$(), w$("div", _$, [
        nl(mo("h5", null, null, 512), [
          [u, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        al(ol(P), null, {
          default: sl(() => [
            al(ol(b), { class: "cx-stats-panel__monthly-stats" }, {
              default: sl(() => [
                mo("h3", {
                  textContent: Mg(s.value)
                }, null, 8, v$),
                nl(mo("h5", S$, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            al(ol(b), { class: "cx-stats-panel__total-stats" }, {
              default: sl(() => [
                mo("h3", {
                  textContent: Mg(o.value)
                }, null, 8, y$),
                nl(mo("h5", x$, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        mo("canvas", {
          ref_key: "canvasRef",
          ref: a,
          class: "cx-stats-panel__canvas"
        }, null, 512)
      ]);
    };
  }
}, vf = () => {
  const e = lt();
  return (t) => e({
    event_type: "dashboard_tab_select",
    event_source: {
      draft: "dashboard_inprogress_tab",
      published: "dashboard_published_tab",
      suggestions: "dashboard_suggestions_tab"
    }[t]
  });
};
const $$ = window.Vue.renderSlot, V$ = window.Vue.unref, E$ = window.Vue.createVNode, L$ = window.Vue.createElementVNode, A$ = window.Vue.openBlock, D$ = window.Vue.createElementBlock, T$ = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, B$ = { class: "col-12 ma-0 pa-0" }, P$ = {
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
    const n = t, o = vf(), s = (a) => {
      o(a), n("update:active", a);
    };
    return (a, r) => (A$(), D$("footer", T$, [
      L$("div", B$, [
        $$(a.$slots, "default", {}, () => [
          E$(V$(ta), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: s
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, F$ = window.Vuex.useStore, M$ = () => {
  const e = F$(), t = Ro();
  return () => C(void 0, null, function* () {
    if (e.state.suggestions.favorites.length)
      return;
    const n = yield me.fetchFavorites();
    if (!n || !n.length)
      return;
    const o = {};
    for (const s of n)
      e.commit("suggestions/addFavoriteSuggestion", s), me.fetchSectionSuggestion(
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
}, N$ = window.Vuex.useStore, Sf = () => {
  const e = N$(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = T(), { isDefaultFilter: r } = Uc(), { previousRoute: c } = Ve(e), u = lt(), d = () => {
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
}, U$ = window.Vue.watch, I$ = () => {
  const { fetchAllTranslations: e } = jo(), t = Dh(), n = M$(), { fetchPageCollectionGroups: o } = Kc(), { logDashboardOpenEvent: s } = Sf(), { applicationLanguagesInitialized: a } = Fh();
  return () => C(void 0, null, function* () {
    o();
    try {
      yield n();
    } catch (r) {
      mw.log.error("[CX] Error while fetching favorite suggestions", r);
    }
    yield e(), U$(
      a,
      () => {
        a.value && (s(), t());
      },
      { immediate: !0 }
    );
  });
}, Ug = window.Vue.computed, R$ = window.Vue.ref, z$ = window.Vue.watch, O$ = window.Vue.watchEffect, j$ = window.Vuex.useStore, H$ = ["suggestions", "draft", "published"], q$ = () => {
  const e = j$(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = T(), { translationsFetched: o } = jo(), s = R$(null);
  if (H$.includes(t.value))
    s.value = t.value;
  else {
    const a = Ug(
      () => o.value.draft
    ), r = Ug(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = r.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", z$(a, (c) => {
      c && (s.value = r.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return O$(() => {
    n(s.value), window.scrollTo(0, 0);
  }), s;
}, G$ = window.Vue.computed, X$ = () => {
  const e = de();
  return G$(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: _0,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: Pi,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: w0,
        type: "text"
      }
    }
  ]);
};
const Se = window.Vue.unref, Te = window.Vue.createVNode, W$ = window.Vue.toDisplayString, K$ = window.Vue.createTextVNode, an = window.Vue.withCtx, il = window.Vue.openBlock, Ig = window.Vue.createBlock, Rg = window.Vue.createCommentVNode, Y$ = window.Vue.vShow, J$ = window.Vue.withDirectives, Q$ = window.Vue.isRef, Z$ = window.Vue.createElementBlock, eV = window.Vue.computed, tV = window.Vuex.useStore, nV = window.Codex.CdxButton, oV = window.Codex.CdxIcon, sV = {
  __name: "CXDashboard",
  setup(e) {
    const t = He(), n = lt(), o = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    I$()();
    const a = tV();
    a.dispatch("translator/fetchTranslatorStats");
    const r = eV(() => a.state.translator.translatorStats), c = q$(), u = X$(), d = vf(), i = (l) => {
      d(l), c.value = l;
    };
    return (l, g) => (il(), Z$("div", null, [
      Te(Se(P), { class: "ma-0 pb-4" }, {
        default: an(() => [
          Te(Se(nV), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: o
          }, {
            default: an(() => [
              Te(Se(oV), {
                class: "me-1",
                icon: Se(yc)
              }, null, 8, ["icon"]),
              K$(" " + W$(l.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      Te(Se(P), {
        class: "ma-0",
        align: "start"
      }, {
        default: an(() => [
          l.$mwui.breakpoint.tabletAndUp ? (il(), Ig(Se(b), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: an(() => [
              Te(Se(ta), {
                id: "dashboard-list-selector--desktop",
                items: Se(u),
                active: Se(c),
                onSelect: i
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : Rg("", !0),
          Te(Se(b), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: an(() => [
              J$(Te(t$, null, null, 512), [
                [Y$, Se(c) === "suggestions"]
              ]),
              Te(H2, {
                active: Se(c) === "suggestions"
              }, null, 8, ["active"]),
              Te(rg, {
                "translation-status": "draft",
                "active-status": Se(c)
              }, null, 8, ["active-status"]),
              Te(rg, {
                "translation-status": "published",
                "active-status": Se(c)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          Te(Se(b), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: an(() => [
              Te(Se(P), {
                class: "ma-0",
                align: "start"
              }, {
                default: an(() => [
                  Te(Se(b), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: an(() => [
                      Te(k$, { stats: r.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  Te(Se(b), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: an(() => [
                      Te(m$)
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
      l.$mwui.breakpoint.mobile ? (il(), Ig(P$, {
        key: 0,
        active: Se(c),
        "onUpdate:active": g[0] || (g[0] = (p) => Q$(c) ? c.value = p : null),
        items: Se(u)
      }, null, 8, ["active", "items"])) : Rg("", !0)
    ]));
  }
}, aV = {
  name: "DashboardView",
  components: { CxDashboard: sV }
}, iV = window.Vue.resolveComponent, rV = window.Vue.createVNode, lV = window.Vue.openBlock, cV = window.Vue.createElementBlock, uV = { class: "cx-translation-dashboard" };
function dV(e, t, n, o, s, a) {
  const r = iV("cx-dashboard");
  return lV(), cV("main", uV, [
    rV(r, { class: "mb-4 pb-12 px-3 px-tablet-10" })
  ]);
}
const zg = /* @__PURE__ */ ne(aV, [["render", dV]]), ho = window.Vue.computed, gV = () => {
  const { sectionSuggestion: e } = qe(), { targetLanguageURLParameter: t } = T(), { currentTranslation: n } = Ft(), o = ho(
    () => {
      var g, p, m;
      return (m = (p = (g = e.value) == null ? void 0 : g.orderedMissingSections) == null ? void 0 : p[0]) == null ? void 0 : m.sourceTitle;
    }
  ), s = ho(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.missingSectionsCount;
    }
  ), a = ho(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.presentSectionsCount;
    }
  ), { targetPageExists: r, getCurrentTitleByLanguage: c } = xn(), u = ho(() => r ? Q.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    c(t.value, null)
  ) : null), d = (g) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : g ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : r.value ? s.value > 1 || s.value === 1 && a.value > 0 ? "cx-sx-select-section" : s.value === 1 && a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : s.value === 0 && a.value > 0 ? "cx-sx-select-section" : s.value === 0 && a.value === 0 ? "cx-sx-translation-confirmer-action-new-translation" : "" : "cx-sx-start-translation-button-label", i = ho(() => {
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
  }), l = ho(
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
function pV(e) {
  return e.$el = $(e), e;
}
function mV(e, t, n, o) {
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
function hV() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function fV(e, t) {
  return C(this, null, function* () {
    yield lu(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = pV(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const wV = window.Vue.computed, _V = window.Vue.onMounted, vV = window.Vue.ref;
function SV(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const yV = {
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
    const n = vV(null);
    let o = null;
    const s = wV(() => o.getHtml()), a = () => {
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
    return _V(() => C(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = SV;
      const i = yield fV(u, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), o = mV(
        i,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = hV, o.focus();
    })), { sxeditor: n };
  }
}, Ei = window.Vue.createElementVNode, xV = window.Vue.openBlock, bV = window.Vue.createElementBlock, CV = ["lang", "dir"], kV = /* @__PURE__ */ Ei("div", { class: "overlay-header-container" }, [
  /* @__PURE__ */ Ei("div", { class: "overlay-header header initial-header" }, [
    /* @__PURE__ */ Ei("div", { class: "toolbar" })
  ])
], -1), $V = ["lang", "dir"];
function VV(e, t, n, o, s, a) {
  return xV(), bV("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    kV,
    Ei("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, $V)
  ], 8, CV);
}
const EV = /* @__PURE__ */ ne(yV, [["render", VV]]);
function lu() {
  return mw.loader.using("mw.cx3.ve");
}
const LV = window.Vuex.useStore, AV = () => {
  const e = LV();
  return (t, n) => C(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield lu(), new Promise((s) => {
      setTimeout(() => {
        const a = dh.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, DV = window.Vuex.useStore, yf = () => {
  const e = DV();
  return (t, n, o, s = null) => C(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      o
    );
    if (a && a.content)
      return;
    const r = yield ao.fetchPageContent(
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
}, qi = () => {
  const { currentSourcePage: e } = ct(), t = AV(), n = yf(), {
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
    ), oa || (yield t(
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
}, TV = window.Vuex.useStore, Ho = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o,
    isQuickTutorialForced: s
  } = T(), a = TV(), r = He(), c = () => {
    const l = r.currentRoute.value.name !== "sx-quick-tutorial" && (s() || !a.getters["translator/userHasSectionTranslations"]) ? "sx-quick-tutorial" : "sx-sentence-selector";
    return r.getRoutes().find((g) => g.name === l);
  }, u = () => {
    const i = mw.config.get(
      "wgContentTranslationTranslateInTarget"
    ), l = Q.getCurrentWikiLanguageCode();
    if (!i || t.value === l)
      return !1;
    const g = o.value ? { section: o.value } : {}, p = Q.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      g
    );
    return location.href = p + "#" + c().path, !0;
  }, d = () => {
    location.href = Q.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      o.value ? { sourcesection: o.value } : {}
    );
  };
  return () => {
    if (Q.setCXToken(
      e.value,
      t.value,
      n.value
    ), oa) {
      d();
      return;
    }
    if (u())
      return;
    const l = c();
    r.push({ name: l.name });
  };
}, cu = () => {
  const e = lt(), { currentTranslation: t } = Ft();
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
}, BV = window.Vue.ref, PV = () => {
  const e = He(), { logDashboardTranslationStartEvent: t } = Hi(), n = cu(), o = Ho(), { sectionURLParameter: s } = T(), { targetPageExists: a } = xn(), { selectPageSectionByTitle: r } = qi(), c = () => C(void 0, null, function* () {
    yield r(s.value), e.push({ name: "sx-content-comparator" });
  }), u = BV(!1), { currentTranslation: d } = Ft();
  return {
    handlePrimaryButtonClick: () => {
      d.value ? d.value.isArticleTranslation && !oa ? u.value = !0 : (n(), o()) : s.value ? c() : a.value ? e.push({ name: "sx-section-selector" }) : (t(), o());
    },
    translationConfirmationDialogOn: u
  };
};
const FV = window.Vue.resolveDirective, Og = window.Vue.createElementVNode, jg = window.Vue.withDirectives, MV = window.Vue.unref, NV = window.Vue.withCtx, UV = window.Vue.openBlock, IV = window.Vue.createBlock, RV = {
  href: "",
  target: "_blank"
}, zV = window.Codex.CdxDialog, OV = {
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
    const n = e, o = t, s = (d) => o("update:modelValue", d), a = de(), r = {
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
      const l = FV("i18n");
      return UV(), IV(MV(zV), {
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
        default: NV(() => [
          jg(Og("p", null, null, 512), [
            [l, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          jg(Og("a", RV, null, 512), [
            [l, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title", "close-button-label"]);
    };
  }
};
const ye = window.Vue.unref, jV = window.Vue.resolveDirective, gs = window.Vue.createElementVNode, Hg = window.Vue.withDirectives, ps = window.Vue.toDisplayString, ms = window.Vue.openBlock, rl = window.Vue.createElementBlock, ll = window.Vue.createCommentVNode, pt = window.Vue.createVNode, Vt = window.Vue.withCtx, cl = window.Vue.createTextVNode, HV = window.Vue.withModifiers, qg = window.Vue.createBlock, qV = window.Vue.Fragment, GV = { class: "sx-translation-confirmer-body pb-4" }, XV = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, WV = ["textContent"], KV = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, YV = ["href"], JV = ["textContent"], Ka = window.Vue.computed, QV = window.Vue.inject, Gg = window.Vue.ref, ZV = window.Vue.watchEffect, e4 = window.Vuex.useStore, ul = window.Codex.CdxButton, t4 = window.Codex.CdxIcon, n4 = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = He(), o = e4();
    QV("colors");
    const { sectionSuggestion: s } = qe(), { targetLanguageAutonym: a } = Ve(o), { sectionURLParameter: r } = T(), { logDashboardTranslationStartEvent: c } = Hi(), u = Ho(), { handlePrimaryButtonClick: d, translationConfirmationDialogOn: i } = PV(), l = Gg(!1), g = Gg(null), p = () => C(this, null, function* () {
      let X = !0;
      try {
        X = yield vt.checkUnreviewedTranslations();
      } catch (K) {
        mw.log.error(
          "Error while checking for user's unreviewed translations ",
          K
        );
      }
      X !== !0 && (l.value = !0, g.value = X.targetUrl);
    }), m = () => C(this, null, function* () {
      yield p(), !l.value && (c(), u());
    }), h = () => C(this, null, function* () {
      yield p(), !l.value && d();
    }), f = t;
    ZV(() => {
      i.value && (f("open-translation-confirmation-dialog"), i.value = !1);
    });
    const {
      actionInformationMessageArgs: _,
      getActionButtonLabel: w,
      isProgressiveButton: S,
      targetArticlePath: x
    } = gV(), k = de(), y = Ka(
      () => k.i18n(w(!!r.value))
    ), E = Ka(
      () => k.i18n(..._.value)
    ), M = () => C(this, null, function* () {
      yield p(), !l.value && n.push({ name: "sx-section-selector" });
    }), V = Ka(() => {
      var X, K;
      return r.value && !!((K = (X = s.value) == null ? void 0 : X.sourceSections) != null && K.length);
    }), { targetPageExists: B } = xn(), I = Ka(() => !r.value && B.value && oa);
    return (X, K) => {
      const Ee = jV("i18n");
      return ms(), rl(qV, null, [
        gs("section", GV, [
          ye(r) ? (ms(), rl("section", XV, [
            Hg(gs("h6", null, null, 512), [
              [Ee, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            gs("h5", {
              class: "ma-0",
              textContent: ps(ye(r))
            }, null, 8, WV)
          ])) : ye(B) ? (ms(), rl("section", KV, [
            pt(ye(P), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: Vt(() => [
                Hg(pt(ye(b), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [Ee, [ye(a)], "cx-sx-existing-translation-status"]
                ]),
                pt(ye(b), { shrink: "" }, {
                  default: Vt(() => [
                    gs("a", {
                      href: ye(x),
                      target: "_blank"
                    }, [
                      pt(ye(t4), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: ye(Qc)
                      }, null, 8, ["icon"])
                    ], 8, YV)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            pt(ye(P), { class: "ma-0" }, {
              default: Vt(() => [
                pt(ye(b), null, {
                  default: Vt(() => [
                    gs("span", {
                      textContent: ps(E.value)
                    }, null, 8, JV)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : ll("", !0),
          pt(ye(P), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: Vt(() => [
              V.value ? (ms(), qg(ye(b), {
                key: 0,
                shrink: ""
              }, {
                default: Vt(() => [
                  pt(ye(ul), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: HV(M, ["stop"])
                  }, {
                    default: Vt(() => [
                      cl(ps(X.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : ll("", !0),
              I.value ? (ms(), qg(ye(b), {
                key: 1,
                shrink: ""
              }, {
                default: Vt(() => [
                  pt(ye(ul), {
                    size: "large",
                    onClick: m
                  }, {
                    default: Vt(() => [
                      cl(ps(X.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : ll("", !0),
              pt(ye(b), { shrink: "" }, {
                default: Vt(() => [
                  pt(ye(ul), {
                    weight: "primary",
                    size: "large",
                    action: ye(S) ? "progressive" : "default",
                    onClick: h
                  }, {
                    default: Vt(() => [
                      cl(ps(y.value), 1)
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
        pt(OV, {
          modelValue: l.value,
          "onUpdate:modelValue": K[0] || (K[0] = (be) => l.value = be),
          "target-url": g.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const dl = window.Vue.unref, o4 = window.Vue.openBlock, s4 = window.Vue.createBlock, a4 = window.Vue.computed, xf = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedTargetLanguageCodes: t } = ia(), {
      sourceLanguageURLParameter: n,
      targetLanguageURLParameter: o
    } = T(), { currentLanguageTitleGroup: s } = xn(), a = a4(
      () => {
        var d;
        return ((d = s.value) == null ? void 0 : d.titles.map((i) => i.lang)) || [];
      }
    ), r = Ty(), c = (d) => r(d, o.value), u = (d) => r(n.value, d);
    return (d, i) => (o4(), s4(Ti, {
      class: "sx-article-language-selector",
      "source-languages": a.value,
      "target-languages": dl(t),
      "selected-source-language": dl(n),
      "selected-target-language": dl(o),
      "onUpdate:selectedSourceLanguage": c,
      "onUpdate:selectedTargetLanguage": u
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
};
const Be = window.Vue.unref, gl = window.Vue.toDisplayString, rn = window.Vue.createElementVNode, Rt = window.Vue.createVNode, fo = window.Vue.withCtx, i4 = window.Vue.resolveDirective, r4 = window.Vue.withDirectives, l4 = window.Vue.normalizeClass, c4 = window.Vue.openBlock, u4 = window.Vue.createBlock, d4 = ["textContent"], g4 = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, p4 = ["textContent"], m4 = { class: "pe-3" }, h4 = ["textContent"], f4 = window.Codex.CdxButton, hs = window.Codex.CdxIcon, ln = window.Vue.computed, w4 = window.Vuex.useStore, _4 = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = w4(), n = de(), { currentSourcePage: o } = ct(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r
    } = T(), c = ln(() => t.state.suggestions.favorites || []), u = ln(
      () => c.value.some(
        (y) => r.value === y.title && s.value === y.sourceLanguage && a.value === y.targetLanguage
      )
    ), { markFavoriteSuggestion: d, removeFavoriteSuggestion: i } = ru(), { translationSizeMessageArgs: l } = wf(), g = () => d(
      r.value,
      s.value,
      a.value
    ), p = () => i(
      new Bo({
        title: r.value,
        sourceLanguage: s.value,
        targetLanguage: a.value
      })
    ), m = ln(
      () => u.value ? xh : bh
    ), h = ln(
      () => u.value ? p : g
    ), f = ln(
      () => Q.getPageUrl(s.value || "", r.value || "")
    ), _ = ln(
      () => {
        var y;
        return (((y = o.value) == null ? void 0 : y.langLinksCount) || 0) + 1;
      }
    ), w = (y) => {
      const E = [
        { value: 1e9, suffix: "B" },
        // 1 billion
        { value: 1e6, suffix: "M" },
        // 1 million
        { value: 1e3, suffix: "K" }
        // 1 thousand
      ];
      for (let M = 0; M < E.length; M++)
        if (y >= E[M].value)
          return (y / E[M].value).toFixed(1).replace(/\.0$/, "") + E[M].suffix;
      return y.toString();
    }, S = ln(() => {
      var E;
      const y = Object.values(((E = o.value) == null ? void 0 : E.pageviews) || {}).reduce(
        (M, V) => M + V,
        0
      );
      return w(y);
    }), x = ln(() => l.value ? n.i18n(...l.value) : ""), k = ln(() => l.value ? l.value[2] < 15 : !1);
    return (y, E) => {
      const M = i4("i18n");
      return c4(), u4(Be(P), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: fo(() => [
          Rt(Be(b), null, {
            default: fo(() => [
              Rt(Be(P), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: fo(() => [
                  Rt(Be(b), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: f.value,
                    target: "_blank"
                  }, {
                    default: fo(() => [
                      rn("h5", {
                        class: "ma-0 me-1",
                        textContent: gl(Be(r))
                      }, null, 8, d4),
                      Rt(Be(hs), {
                        size: "x-small",
                        icon: Be(Qc)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  Rt(Be(b), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: fo(() => [
                      Rt(Be(f4), {
                        class: "px-0",
                        weight: "quiet",
                        action: u.value ? "progressive" : "default",
                        "aria-label": y.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: h.value
                      }, {
                        default: fo(() => [
                          Rt(Be(hs), { icon: m.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              rn("div", g4, [
                rn("div", null, [
                  rn("span", null, [
                    Rt(Be(hs), {
                      icon: Be(kh),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    rn("span", {
                      class: "pe-3",
                      textContent: gl(_.value)
                    }, null, 8, p4)
                  ]),
                  rn("span", null, [
                    Rt(Be(hs), {
                      icon: Be(sy),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    r4(rn("span", m4, null, 512), [
                      [M, [S.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                rn("span", {
                  class: l4(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": k.value
                  }])
                }, [
                  Rt(Be(hs), {
                    icon: Be(iy),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  rn("span", {
                    textContent: gl(x.value)
                  }, null, 8, h4)
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
const v4 = window.Vue.resolveDirective, Xn = window.Vue.createElementVNode, Ya = window.Vue.withDirectives, S4 = window.Vue.toDisplayString, y4 = window.Vue.createTextVNode, pl = window.Vue.unref, ml = window.Vue.withCtx, hl = window.Vue.openBlock, fl = window.Vue.createBlock;
window.Vue.createCommentVNode;
const x4 = { class: "pa-4" }, b4 = { class: "flex pt-2" }, C4 = window.Codex.CdxButton, k4 = window.Vue.ref, $4 = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = Ho(), a = cu(), r = k4(!1), { currentTranslation: c } = Ft(), u = () => C(this, null, function* () {
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
      const l = v4("i18n");
      return hl(), fl(pl(St), {
        value: e.modelValue,
        persistent: r.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: d.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: ml(() => [
          Xn("div", b4, [
            r.value ? (hl(), fl(pl(it), { key: 1 })) : (hl(), fl(pl(C4), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: u
            }, {
              default: ml(() => [
                y4(S4(d.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: ml(() => [
          Xn("div", x4, [
            Ya(Xn("p", null, null, 512), [
              [l, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            Ya(Xn("p", null, null, 512), [
              [l, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            Xn("p", null, [
              Ya(Xn("strong", null, null, 512), [
                [l, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            Ya(Xn("p", null, null, 512), [
              [l, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
}, V4 = window.Vuex.useStore;
let Ja = [];
const uu = () => {
  const e = V4();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || Ja.includes(o) ? Promise.resolve() : (Ja.push(o), ao.fetchLanguageTitles(t, n).then((s) => {
      Ja = Ja.filter(
        (a) => a !== o
      ), s && e.commit("mediawiki/addLanguageTitleGroup", s);
    }));
  };
}, E4 = window.Vue.ref, wo = E4(null), bf = () => {
  const e = () => C(void 0, null, function* () {
    var n, o;
    wo.value || (yield Ri.fetchCXServerToken().then((s) => {
      s.age <= 30 && (s.age = 3600);
      const a = Math.floor(Date.now() / 1e3);
      s.refreshAt = a + s.age - 30, wo.value = s;
    }).catch((s) => {
      if (s === "token-impossible") {
        const a = Math.floor(Date.now() / 1e3);
        wo.value = { jwt: "", refreshAt: a + 36e3 };
      }
    }));
    const t = Math.floor(Date.now() / 1e3);
    return ((n = wo.value) == null ? void 0 : n.refreshAt) <= t ? (wo.value = null, e()) : (o = wo.value) == null ? void 0 : o.jwt;
  });
  return e;
};
const Xg = window.Vue.resolveDirective, Qa = window.Vue.createElementVNode, Wg = window.Vue.withDirectives, Ln = window.Vue.unref, Za = window.Vue.withCtx, cn = window.Vue.createVNode, wl = window.Vue.openBlock, Kg = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const L4 = window.Vue.createBlock, A4 = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, D4 = { class: "mb-0" }, T4 = { class: "sx-translation-confirmer__article-image flex justify-center" }, B4 = ["src"], P4 = { class: "ma-3" }, Yg = window.Vue.computed, F4 = window.Vue.inject, M4 = window.Vue.onBeforeUnmount, N4 = window.Vue.ref, U4 = window.Vuex.useStore, I4 = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = U4(), { currentSourcePage: n } = ct(), { previousRoute: o } = Ve(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: c,
      clearTranslationURLParameters: u
    } = T(), d = F4("breakpoints"), i = Yg(() => d.value.nextBreakpoint), l = Yg(
      () => {
        var S;
        return (S = n.value) == null ? void 0 : S.getImage(i.value);
      }
    ), { fetchTranslationsByStatus: g } = jo(), p = uu();
    g("draft"), p(s.value, r.value), lu(), bf()(), Ah()(a.value);
    const f = He(), _ = () => {
      const S = ["dashboard", "sx-article-search"];
      !o.value || !S.includes(o.value) ? f.push({ name: "dashboard" }) : f.push({ name: o.value });
    };
    M4(() => {
      const S = f.currentRoute.value.name;
      (S === "dashboard" || S === "sx-article-search") && u();
    });
    const w = N4(!1);
    return (S, x) => {
      const k = Xg("i18n"), y = Xg("i18n-html");
      return wl(), Kg("section", A4, [
        cn(Ln(P), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Za(() => [
            cn(Ln(b), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Za(() => [
                Wg(Qa("h5", D4, null, 512), [
                  [k, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            cn(Ln(b), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Za(() => [
                cn(Ln(Ne), {
                  class: "pa-0",
                  type: "icon",
                  icon: Ln(na),
                  "icon-size": 20,
                  onClick: _
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Qa("div", T4, [
          l.value ? (wl(), Kg("img", {
            key: 0,
            src: l.value
          }, null, 8, B4)) : (wl(), L4(Ln(je), {
            key: 1,
            size: "120",
            icon: Ln(Xm),
            "icon-color": S.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        cn(_4),
        cn(xf),
        cn(n4, {
          onOpenTranslationConfirmationDialog: x[0] || (x[0] = (E) => w.value = !0)
        }),
        cn(Ln(P), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: Za(() => [
            Qa("p", P4, [
              Wg(Qa("small", null, null, 512), [
                [y, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        cn($4, {
          modelValue: w.value,
          "onUpdate:modelValue": x[1] || (x[1] = (E) => w.value = E)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const R4 = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: I4
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, z4 = window.Vue.resolveComponent, O4 = window.Vue.createVNode, j4 = window.Vue.normalizeClass, H4 = window.Vue.openBlock, q4 = window.Vue.createElementBlock;
function G4(e, t, n, o, s, a) {
  const r = z4("sx-translation-confirmer");
  return H4(), q4("main", {
    class: j4(["sx-translation-confirmer-view", a.classes])
  }, [
    O4(r)
  ], 2);
}
const X4 = /* @__PURE__ */ ne(R4, [["render", G4]]);
const W4 = window.Vue.toDisplayString, Jg = window.Vue.unref, K4 = window.Vue.createVNode, Y4 = window.Vue.createTextVNode, J4 = window.Vue.createElementVNode, Q4 = window.Vue.openBlock, Z4 = window.Vue.createElementBlock, eE = { class: "sx-section-selector-view-article-item" }, tE = ["href"], nE = window.Codex.CdxIcon, Qg = {
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
    return (t, n) => (Q4(), Z4("span", eE, [
      J4("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        Y4(W4(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        K4(Jg(nE), {
          size: "x-small",
          icon: Jg(Qc)
        }, null, 8, ["icon"])
      ], 8, tE)
    ]));
  }
};
const oE = window.Vue.resolveDirective, ei = window.Vue.createElementVNode, _l = window.Vue.withDirectives, Wn = window.Vue.unref, sE = window.Vue.toDisplayString, ti = window.Vue.withCtx, fs = window.Vue.createVNode, aE = window.Vue.openBlock, iE = window.Vue.createElementBlock, rE = { class: "sx-section-selector__header pa-4" }, lE = { class: "sx-section-selector__header-text ma-0" }, cE = ["textContent"], uE = { class: "pt-0 ma-0" }, dE = { class: "ma-0" }, gE = window.Codex.CdxButton, pE = window.Codex.CdxIcon, mE = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = qe();
    return (n, o) => {
      const s = oE("i18n");
      return aE(), iE("div", rE, [
        fs(Wn(P), { class: "ma-0 pb-3" }, {
          default: ti(() => [
            fs(Wn(b), null, {
              default: ti(() => {
                var a;
                return [
                  _l(ei("h6", lE, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  ei("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: sE((a = Wn(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, cE)
                ];
              }),
              _: 1
            }),
            fs(Wn(b), {
              shrink: "",
              class: "justify-end"
            }, {
              default: ti(() => [
                fs(Wn(gE), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: ti(() => [
                    fs(Wn(pE), { icon: Wn(Oo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        _l(ei("h4", uE, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        _l(ei("p", dE, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, hE = window.Vue.renderList, fE = window.Vue.Fragment, vl = window.Vue.openBlock, Zg = window.Vue.createElementBlock, wE = window.Vue.renderSlot, ni = window.Vue.unref, ep = window.Vue.createVNode, tp = window.Vue.withCtx, _E = window.Vue.createBlock, vE = { class: "sx-section-selector__sections-list ma-0 pa-0" }, SE = window.Codex.CdxButton, yE = window.Codex.CdxIcon, Cf = {
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
    return (t, n) => (vl(), Zg("ul", vE, [
      (vl(!0), Zg(fE, null, hE(e.sections, (o) => (vl(), _E(ni(P), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: tp(() => [
          ep(ni(SE), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: tp(() => [
              wE(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              ep(ni(yE), { icon: ni(da) }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["aria-label", "onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, xE = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const bE = window.Vue.resolveDirective, oi = window.Vue.createElementVNode, Sl = window.Vue.withDirectives, Et = window.Vue.unref, np = window.Vue.toDisplayString, _o = window.Vue.withCtx, yl = window.Vue.openBlock, op = window.Vue.createBlock;
window.Vue.createCommentVNode;
const ws = window.Vue.createVNode, CE = window.Vue.createTextVNode, kE = window.Vue.createElementBlock, $E = { class: "sx-section-selector__missing-sections py-2" }, VE = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, EE = ["lang", "dir", "textContent"], sp = window.Vue.computed, LE = window.Codex.CdxButton, AE = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = qe(), { targetLanguageURLParameter: n } = T(), o = sp(() => R.getAutonym(n.value)), s = sp(
      () => {
        var a;
        return Object.keys(((a = t.value) == null ? void 0 : a.missingSections) || {}).length === 0;
      }
    );
    return (a, r) => {
      const c = bE("i18n");
      return yl(), kE("section", $E, [
        Sl(oi("h4", VE, null, 512), [
          [c, [
            o.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        s.value ? (yl(), op(Et(P), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: _o(() => [
            ws(Et(b), {
              class: "py-6 justify-center",
              innerHTML: Et(xE)
            }, null, 8, ["innerHTML"]),
            ws(Et(b), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: _o(() => [
                Sl(oi("h6", null, null, 512), [
                  [c, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            ws(Et(b), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: _o(() => [
                Sl(oi("p", null, null, 512), [
                  [c, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            ws(Et(b), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: _o(() => [
                ws(Et(LE), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: r[1] || (r[1] = (u) => a.$emit("close"))
                }, {
                  default: _o(() => [
                    CE(np(a.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (yl(), op(Cf, {
          key: 0,
          sections: Et(t).orderedMissingSections,
          onSelectSection: r[0] || (r[0] = (u) => a.$emit("select-section", u))
        }, {
          default: _o(({ sourceSection: u }) => {
            var d, i;
            return [
              oi("h5", {
                class: "ma-0",
                lang: (d = Et(t)) == null ? void 0 : d.sourceLanguage,
                dir: Et(R.getDir)((i = Et(t)) == null ? void 0 : i.sourceLanguage),
                textContent: np(u)
              }, null, 8, EE)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const DE = window.Vue.resolveDirective, si = window.Vue.createElementVNode, TE = window.Vue.withDirectives, Kn = window.Vue.unref, ap = window.Vue.toDisplayString, BE = window.Vue.withCtx, PE = window.Vue.createVNode, FE = window.Vue.openBlock, ME = window.Vue.createElementBlock, NE = { class: "sx-section-selector__present-sections py-2" }, UE = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, IE = { class: "sx-section-selector__present-section-button-content" }, RE = ["lang", "dir", "textContent"], zE = ["lang", "dir", "textContent"], OE = window.Vue.computed, ip = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = qe(), { targetLanguageURLParameter: n } = T(), o = OE(() => R.getAutonym(n.value));
    return (s, a) => {
      var c;
      const r = DE("i18n");
      return FE(), ME("section", NE, [
        TE(si("h4", UE, null, 512), [
          [r, [
            o.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        PE(Cf, {
          sections: ((c = Kn(t)) == null ? void 0 : c.orderedPresentSections) || [],
          onSelectSection: a[0] || (a[0] = (u) => s.$emit("select-section", u))
        }, {
          default: BE(({ sourceSection: u, targetSection: d }) => {
            var i, l, g, p;
            return [
              si("div", IE, [
                si("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (i = Kn(t)) == null ? void 0 : i.sourceLanguage,
                  dir: Kn(R.getDir)((l = Kn(t)) == null ? void 0 : l.sourceLanguage),
                  textContent: ap(u)
                }, null, 8, RE),
                si("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (g = Kn(t)) == null ? void 0 : g.targetLanguage,
                  dir: Kn(R.getDir)((p = Kn(t)) == null ? void 0 : p.targetLanguage),
                  textContent: ap(d)
                }, null, 8, zE)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const Pe = window.Vue.createVNode, xl = window.Vue.openBlock, rp = window.Vue.createBlock, lp = window.Vue.createCommentVNode, jE = window.Vue.resolveDirective, An = window.Vue.createElementVNode, _s = window.Vue.withDirectives, Qe = window.Vue.unref, un = window.Vue.withCtx, HE = window.Vue.normalizeClass, cp = window.Vue.toDisplayString, up = window.Vue.createTextVNode, qE = window.Vue.createElementBlock, GE = { class: "sx-section-selector col-12 col-tablet-9 col-desktop-7 mx-auto" }, XE = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, WE = { class: "sx-section-selector__additional-consideration-title" }, KE = { href: "#" }, YE = { class: "sx-section-selector__additional-consideration-title" }, JE = { href: "#" }, vs = window.Vue.computed, QE = window.Vue.inject, ZE = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = QE("breakpoints"), n = vs(() => t.value.desktopAndUp), { sectionSuggestion: o } = qe(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      clearTranslationURLParameters: r,
      setSectionURLParam: c
    } = T(), u = vs(() => R.getAutonym(s.value)), d = vs(() => R.getAutonym(a.value)), i = vs(
      () => {
        var S;
        return Q.getPageUrl(s.value, (S = o.value) == null ? void 0 : S.sourceTitle);
      }
    ), l = vs(
      () => {
        var S;
        return Q.getPageUrl(a.value, (S = o.value) == null ? void 0 : S.targetTitle);
      }
    ), g = He(), p = () => {
      r(), g.push({ name: "dashboard" });
    }, { currentTranslation: m } = Ft(), h = Ho(), f = cu(), { selectPageSectionByTitle: _ } = qi(), w = (S) => {
      c(S), m.value ? (f(), h()) : (_(S), g.push({ name: "sx-content-comparator" }));
    };
    return (S, x) => {
      const k = jE("i18n");
      return xl(), qE("section", GE, [
        Pe(mE, { onClose: p }),
        Pe(xf),
        Pe(Qe(P), {
          class: "ma-0",
          align: "stretch"
        }, {
          default: un(() => [
            Pe(Qe(b), {
              cols: "12",
              desktop: "8",
              class: "ma-0 pa-0"
            }, {
              default: un(() => [
                Pe(AE, {
                  onSelectSection: w,
                  onClose: p
                }),
                n.value ? lp("", !0) : (xl(), rp(ip, {
                  key: 0,
                  onSelectSection: w
                })),
                An("section", {
                  class: HE(["py-2", { "sx-section-selector__more-details--desktop": n.value }])
                }, [
                  _s(An("h4", XE, null, 512), [
                    [k, [
                      d.value
                    ], "cx-sx-section-selector-more-details-title"]
                  ]),
                  Pe(Qe(P), {
                    class: "ma-0",
                    align: "start",
                    justify: "start"
                  }, {
                    default: un(() => [
                      Pe(Qe(b), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: un(() => [
                          Pe(Qg, {
                            path: i.value,
                            autonym: u.value
                          }, null, 8, ["path", "autonym"])
                        ]),
                        _: 1
                      }),
                      Pe(Qe(b), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: un(() => [
                          Pe(Qg, {
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
                Pe(Qe(P), {
                  class: "sx-section-selector__additional-considerations ma-0",
                  align: "stretch"
                }, {
                  default: un(() => [
                    Pe(Qe(b), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 pt-5 pb-4"
                    }, {
                      default: un(() => [
                        An("h6", WE, [
                          Pe(Qe(je), {
                            icon: Qe($0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          up(" " + cp(S.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                        ]),
                        _s(An("p", null, null, 512), [
                          [k, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                        ]),
                        _s(An("a", KE, null, 512), [
                          [k, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                        ])
                      ]),
                      _: 1
                    }),
                    Pe(Qe(b), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 py-5"
                    }, {
                      default: un(() => [
                        An("h6", YE, [
                          Pe(Qe(je), {
                            icon: Qe(k0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          up(" " + cp(S.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                        ]),
                        _s(An("p", null, null, 512), [
                          [k, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                        ]),
                        _s(An("a", JE, null, 512), [
                          [k, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
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
            n.value ? (xl(), rp(Qe(b), {
              key: 0,
              desktop: "4",
              class: "ma-0 pa-0"
            }, {
              default: un(() => [
                Pe(ip, {
                  class: "sx-section-selector-section-list-present--sidebar fill-height p-0",
                  onSelectSection: w
                })
              ]),
              _: 1
            })) : lp("", !0)
          ]),
          _: 1
        })
      ]);
    };
  }
}, e3 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: ZE
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, t3 = window.Vue.resolveComponent, n3 = window.Vue.createVNode, o3 = window.Vue.normalizeClass, s3 = window.Vue.openBlock, a3 = window.Vue.createElementBlock;
function i3(e, t, n, o, s, a) {
  const r = t3("sx-section-selector");
  return s3(), a3("main", {
    class: o3(["sx-section-selector-view", a.classes])
  }, [
    n3(r)
  ], 2);
}
const r3 = /* @__PURE__ */ ne(e3, [["render", i3]]), l3 = window.Vue.ref, kf = l3("expand"), c3 = (e) => {
  kf.value = e;
}, $f = () => ({
  existingSectionPublishOption: kf,
  setExistingSectionPublishOption: c3
}), Ss = window.Vue.computed, u3 = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    sectionURLParameter: n
  } = T(), o = Ss(
    () => R.getAutonym(e.value)
  ), s = Ss(
    () => R.getAutonym(t.value)
  ), { sectionSuggestion: a } = qe(), { existingSectionPublishOption: r } = $f(), c = Ss(
    () => {
      var i;
      return !!((i = a.value) != null && i.presentSections.hasOwnProperty(n.value));
    }
  ), u = Ss(
    () => c.value && r.value === "expand"
  ), d = de();
  return Ss(() => {
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
const dp = window.Vue.unref, d3 = window.Vue.createVNode, g3 = window.Vue.openBlock, p3 = window.Vue.createElementBlock, m3 = { class: "sx-content-comparator__content-type-selector" }, h3 = window.Vue.watchEffect, f3 = {
  __name: "ContentTypeSelector",
  props: {
    selection: {
      type: String,
      required: !0
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = (r) => o("update:selection", r), a = u3();
    return h3(() => {
      a.value.map((c) => c.value).includes(n.selection) || s(a.value[0].value);
    }), (r, c) => (g3(), p3("div", m3, [
      d3(dp(ta), {
        items: dp(a),
        active: e.selection,
        onSelect: s
      }, null, 8, ["items", "active"])
    ]));
  }
}, ys = window.Vue.computed, w3 = window.Vuex.useStore, ee = () => {
  const e = w3(), { currentSourcePage: t, currentTargetPage: n } = ct(), { currentMTProvider: o } = Ve(e), { sectionURLParameter: s } = T(), a = ys(() => {
    var i, l;
    return s.value ? (l = t.value) == null ? void 0 : l.getSectionByTitle(s.value) : (i = t.value) == null ? void 0 : i.leadSection;
  }), r = ys(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.isTitleSelected;
    }
  ), c = ys(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.selectedContentTranslationUnit;
    }
  ), u = ys(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.getProposedTranslationByMtProvider(
        o.value
      );
    }
  ), d = ys(() => a.value.isLeadSection ? a.value.title : n.value.title);
  return {
    sourceSection: a,
    isSectionTitleSelected: r,
    selectedContentTranslationUnit: c,
    currentProposedTranslation: u,
    targetPageTitleForPublishing: d
  };
}, xs = window.Vue.computed, du = () => {
  const { currentTargetPage: e } = ct(), { sectionSuggestion: t } = qe(), { sectionURLParameter: n } = T(), o = xs(
    () => t.value.missingSections[n.value] || t.value.presentSections[n.value] || ""
  ), s = xs(
    () => {
      var d;
      return (((d = a.value) == null ? void 0 : d.title) || "").replace(/ /g, "_");
    }
  ), a = xs(
    () => {
      var d;
      return (d = e.value) == null ? void 0 : d.getSectionByTitle(o.value);
    }
  ), { sourceSection: r } = ee(), c = xs(() => {
    var d;
    return (d = r.value) == null ? void 0 : d.html;
  }), u = xs(() => {
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
const ai = window.Vue.createVNode, _3 = window.Vue.toDisplayString, v3 = window.Vue.createElementVNode, Dn = window.Vue.unref, ii = window.Vue.withCtx, bl = window.Vue.openBlock, Cl = window.Vue.createBlock;
window.Vue.createCommentVNode;
const S3 = window.Vue.normalizeClass, y3 = ["lang", "dir", "textContent"], gp = window.Vue.ref, kl = window.Vue.computed, x3 = window.Vue.onMounted, b3 = {
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
    const n = e, o = t, s = gp(!1), { sectionSuggestion: a } = qe(), { sectionURLParameter: r } = T(), c = kl(
      () => (r.value || "").replace(/ /g, "_")
    ), u = (m) => o("update:contentTypeSelection", m), { activeSectionTargetTitle: d, targetSectionAnchor: i } = du(), l = kl(() => {
      switch (n.contentTypeSelection) {
        case "source_section":
          return {
            title: r.value,
            path: `${Q.getPageUrl(
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
    }), g = kl(
      () => Q.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), p = gp(null);
    return x3(() => {
      new IntersectionObserver(
        ([h]) => {
          s.value = h.intersectionRect.height < h.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(p.value.$el);
    }), (m, h) => (bl(), Cl(Dn(P), {
      ref_key: "contentHeader",
      ref: p,
      class: S3(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
      direction: "column",
      align: "stretch",
      reverse: s.value
    }, {
      default: ii(() => [
        ai(f3, {
          selection: e.contentTypeSelection,
          "onUpdate:selection": u
        }, null, 8, ["selection"]),
        ai(Dn(P), {
          justify: "between",
          class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
        }, {
          default: ii(() => [
            ai(Dn(b), null, {
              default: ii(() => [
                v3("h3", {
                  lang: l.value.lang,
                  dir: l.value.dir,
                  class: "ma-0 pa-0",
                  textContent: _3(l.value.title)
                }, null, 8, y3)
              ]),
              _: 1
            }),
            ai(Dn(b), { shrink: "" }, {
              default: ii(() => [
                s.value ? (bl(), Cl(Dn(Ne), {
                  key: 0,
                  icon: Dn(Pi),
                  progressive: "",
                  label: m.$i18n(
                    "cx-sx-content-comparator-content-header-translate-button-label"
                  ),
                  onClick: h[0] || (h[0] = (f) => m.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label"])) : (bl(), Cl(Dn(Ne), {
                  key: 1,
                  class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                  icon: Dn(qm),
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
}, ri = window.Vue.unref, pp = window.Vue.createVNode, C3 = window.Vue.openBlock, k3 = window.Vue.createElementBlock, $3 = { class: "sx-content-comparator__header-navigation flex items-center" }, V3 = window.Vue.computed, E3 = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = T(), o = V3(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = qi(), a = () => {
      const c = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[c];
      s(u);
    }, r = () => {
      const c = (o.value + 1) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[c];
      s(u);
    };
    return (c, u) => (C3(), k3("div", $3, [
      pp(ri(Ne), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: ri(y0),
        onClick: a
      }, null, 8, ["icon"]),
      pp(ri(Ne), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: ri(S0),
        onClick: r
      }, null, 8, ["icon"])
    ]));
  }
};
const mp = window.Vue.toDisplayString, L3 = window.Vue.resolveDirective, $l = window.Vue.withDirectives, vo = window.Vue.openBlock, li = window.Vue.createElementBlock, A3 = window.Vue.createCommentVNode, D3 = window.Vue.createTextVNode, hp = window.Vue.createElementVNode, zt = window.Vue.unref, T3 = window.Vue.normalizeClass, Vl = window.Vue.withCtx, El = window.Vue.createVNode, fp = window.Vue.createBlock, B3 = { class: "sx-content-comparator-header__mapped-section" }, P3 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, F3 = { key: 0 }, M3 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, N3 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, wp = window.Vue.computed, U3 = {
  __name: "SXContentComparatorHeaderMappedSection",
  setup(e) {
    const { sectionSuggestion: t } = qe(), { activeSectionTargetTitle: n } = du(), o = de(), { existingSectionPublishOption: s, setExistingSectionPublishOption: a } = $f(), r = wp(
      () => s.value === "new"
    ), c = wp(
      () => o.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        R.getAutonym(t.value.targetLanguage)
      )
    );
    return (u, d) => {
      const i = L3("i18n");
      return vo(), li("div", B3, [
        El(zt(P), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: Vl(() => [
            El(zt(b), { grow: "" }, {
              default: Vl(() => [
                hp("h6", P3, [
                  D3(mp(c.value) + " ", 1),
                  r.value ? $l((vo(), li("span", F3, null, 512)), [
                    [i, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : A3("", !0)
                ]),
                hp("h6", {
                  class: T3(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": r.value
                  }])
                }, mp(zt(n)), 3)
              ]),
              _: 1
            }),
            El(zt(b), { shrink: "" }, {
              default: Vl(() => [
                r.value ? (vo(), fp(zt(Ne), {
                  key: 1,
                  class: "pa-0",
                  icon: zt(L0),
                  type: "icon",
                  onClick: d[1] || (d[1] = (l) => zt(a)("expand"))
                }, null, 8, ["icon"])) : (vo(), fp(zt(Ne), {
                  key: 0,
                  class: "pa-0",
                  icon: zt(Hm),
                  type: "icon",
                  onClick: d[0] || (d[0] = (l) => zt(a)("new"))
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        r.value ? $l((vo(), li("p", N3, null, 512)), [
          [i, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ]) : $l((vo(), li("p", M3, null, 512)), [
          [i, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ])
      ]);
    };
  }
};
const Ae = window.Vue.unref, So = window.Vue.createVNode, _p = window.Vue.toDisplayString, _n = window.Vue.createElementVNode, Ll = window.Vue.withCtx, I3 = window.Vue.resolveDirective, vp = window.Vue.withDirectives, Al = window.Vue.openBlock, Sp = window.Vue.createBlock, yp = window.Vue.createCommentVNode, R3 = window.Vue.createElementBlock, z3 = { class: "sx-content-comparator__header pa-4" }, O3 = { class: "row my-1 py-2 mx-0 gap-6" }, j3 = { class: "sx-content-comparator-header__titles-nav flex grow justify-between" }, H3 = { class: "sx-content-comparator-header__titles shrink" }, q3 = ["lang", "dir"], G3 = ["lang", "dir"], X3 = { class: "py-2 mb-1" }, W3 = /* @__PURE__ */ _n("br", null, null, -1), bs = window.Vue.computed, K3 = window.Vue.inject, Y3 = {
  __name: "SXContentComparatorHeader",
  emits: ["close", "translation-button-clicked"],
  setup(e) {
    const { sectionURLParameter: t } = T(), { sourceSection: n } = ee(), { sectionSuggestion: o } = qe(), s = bs(
      () => {
        var d;
        return (d = o.value) == null ? void 0 : d.missingSections.hasOwnProperty(t.value);
      }
    ), a = bs(
      () => {
        var d;
        return (d = o.value) == null ? void 0 : d.presentSections.hasOwnProperty(t.value);
      }
    ), r = bs(() => {
      var d;
      return (d = n.value) == null ? void 0 : d.html;
    }), c = bs(() => [
      ...Object.keys(o.value.missingSections),
      ...Object.keys(o.value.presentSections)
    ]), u = K3("breakpoints");
    return bs(() => u.value.mobile), (d, i) => {
      const l = I3("i18n");
      return Al(), R3("div", z3, [
        So(Ae(Ne), {
          class: "py-2 pa-0",
          icon: Ae(x0),
          label: d.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: i[0] || (i[0] = (g) => d.$emit("close"))
        }, null, 8, ["icon", "label"]),
        _n("div", O3, [
          _n("div", j3, [
            _n("div", H3, [
              _n("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: Ae(o).sourceLanguage,
                dir: Ae(R.getDir)(Ae(o).sourceLanguage)
              }, _p(Ae(o).sourceTitle), 9, q3),
              _n("h2", {
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: Ae(o).sourceLanguage,
                dir: Ae(R.getDir)(Ae(o).sourceLanguage)
              }, _p(Ae(t)), 9, G3)
            ]),
            So(E3, { "section-source-titles": c.value }, null, 8, ["section-source-titles"])
          ]),
          _n("div", X3, [
            So(Ae(Ne), {
              icon: Ae(Pi),
              progressive: "",
              label: d.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !r.value,
              onClick: i[1] || (i[1] = (g) => d.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ])
        ]),
        s.value ? (Al(), Sp(Ae(P), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: Ll(() => [
            So(Ae(b), {
              shrink: "",
              class: "pe-2"
            }, {
              default: Ll(() => [
                So(Ae(je), { icon: Ae(V0) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            So(Ae(b), { class: "ma-0" }, {
              default: Ll(() => [
                vp(_n("strong", null, null, 512), [
                  [l, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                W3,
                vp(_n("span", null, null, 512), [
                  [l, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : yp("", !0),
        a.value ? (Al(), Sp(U3, { key: 1 })) : yp("", !0)
      ]);
    };
  }
};
const xp = window.Vue.toDisplayString, J3 = window.Vue.createElementVNode, bp = window.Vue.openBlock, Cp = window.Vue.createElementBlock, Q3 = window.Vue.createCommentVNode, Z3 = { class: "sx-content-comparator__new-section-placeholder mt-4 py-4 px-7" }, e5 = ["textContent"], t5 = ["textContent"], Vf = {
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
    return (t, n) => (bp(), Cp("section", Z3, [
      J3("h5", {
        textContent: xp(e.placeholderTitle)
      }, null, 8, e5),
      e.placeholderSubtitle ? (bp(), Cp("p", {
        key: 0,
        textContent: xp(e.placeholderSubtitle)
      }, null, 8, t5)) : Q3("", !0)
    ]));
  }
}, n5 = window.Vue.computed, o5 = window.Vue.createApp, s5 = window.Vuex.useStore, a5 = () => {
  const e = s5(), { sectionSuggestion: t } = qe(), { currentTargetPage: n } = ct(), o = de(), s = () => o5(
    Vf,
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
  return n5(() => {
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
const Dl = window.Vue.createVNode, Ze = window.Vue.unref, yo = window.Vue.openBlock, kp = window.Vue.createBlock, $p = window.Vue.createCommentVNode, ci = window.Vue.createElementVNode, Tl = window.Vue.Fragment, ui = window.Vue.createElementBlock, i5 = { class: "sx-content-comparator col-12 col-tablet-9 col-desktop-7 mx-auto" }, r5 = { class: "sx-content-comparator__source-content" }, l5 = ["lang", "dir", "innerHTML"], c5 = ["lang", "dir", "innerHTML"], u5 = ["innerHTML"], d5 = window.Vue.ref, g5 = window.Vue.computed, p5 = window.Vue.watch, m5 = window.Vuex.useStore, h5 = {
  __name: "SXContentComparator",
  setup(e) {
    m5();
    const t = He(), n = d5("source_section"), { logDashboardTranslationStartEvent: o } = Hi(), s = Ho(), a = () => t.push({ name: "sx-section-selector" }), r = () => {
      o(), s();
    }, {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u,
      pageURLParameter: d,
      sectionURLParameter: i
    } = T(), { activeSectionTargetTitle: l, sourceSectionContent: g, targetSectionContent: p } = du(), m = a5(), { sectionSuggestion: h } = qe(), f = g5(() => h.value.targetTitle), _ = yf();
    return p5(
      f,
      () => _(
        u.value,
        c.value,
        f.value
      ),
      { immediate: !0 }
    ), (w, S) => (yo(), ui("section", i5, [
      Dl(Y3, {
        onTranslationButtonClicked: r,
        onClose: a
      }),
      Dl(b3, {
        "content-type-selection": n.value,
        "onUpdate:contentTypeSelection": S[0] || (S[0] = (x) => n.value = x),
        onTranslationButtonClicked: r
      }, null, 8, ["content-type-selection"]),
      ci("section", r5, [
        n.value === "source_section" ? (yo(), ui(Tl, { key: 0 }, [
          Ze(g) ? $p("", !0) : (yo(), kp(Ze(it), { key: 0 })),
          ci("section", {
            lang: Ze(c),
            dir: Ze(R.getDir)(Ze(c)),
            class: "pt-2 px-4",
            innerHTML: Ze(g)
          }, null, 8, l5)
        ], 64)) : n.value === "target_article" ? (yo(), ui(Tl, { key: 1 }, [
          Ze(m) ? $p("", !0) : (yo(), kp(Ze(it), { key: 0 })),
          ci("article", {
            lang: Ze(u),
            dir: Ze(R.getDir)(Ze(u)),
            class: "px-4",
            innerHTML: Ze(m)
          }, null, 8, c5)
        ], 64)) : (yo(), ui(Tl, { key: 2 }, [
          ci("section", {
            class: "pa-4",
            innerHTML: Ze(p)
          }, null, 8, u5),
          Dl(Vf, {
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
}, f5 = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: h5
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, w5 = window.Vue.resolveComponent, _5 = window.Vue.createVNode, v5 = window.Vue.normalizeClass, S5 = window.Vue.openBlock, y5 = window.Vue.createElementBlock;
function x5(e, t, n, o, s, a) {
  const r = w5("sx-content-comparator");
  return S5(), y5("main", {
    class: v5(["sx-content-comparator-view", a.classes])
  }, [
    _5(r)
  ], 2);
}
const b5 = /* @__PURE__ */ ne(f5, [["render", x5]]);
const C5 = window.Vue.resolveDirective, Cs = window.Vue.createElementVNode, Vp = window.Vue.withDirectives, di = window.Vue.unref, Bl = window.Vue.createVNode, Ep = window.Vue.toDisplayString, Lp = window.Vue.createTextVNode, ks = window.Vue.withCtx, k5 = window.Vue.openBlock, $5 = window.Vue.createBlock, V5 = { class: "mw-ui-dialog__header px-4 py-3" }, E5 = { class: "mw-ui-dialog__header-title" }, L5 = { class: "pa-4" }, A5 = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, Ap = window.Codex.CdxButton, D5 = {
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
      const u = C5("i18n");
      return k5(), $5(di(St), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: ks(() => [
          Cs("div", V5, [
            Vp(Cs("span", E5, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: ks(() => [
          Cs("div", A5, [
            Bl(di(Ap), {
              weight: "quiet",
              onClick: s
            }, {
              default: ks(() => [
                Lp(Ep(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            Bl(di(Ap), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: ks(() => [
                Lp(Ep(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: ks(() => [
          Bl(di(Bi)),
          Cs("div", L5, [
            Vp(Cs("span", null, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, T5 = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => oo(a)
  );
  return s && Qm(s) ? vt.parseTemplateWikitext(
    Ym(s),
    n,
    t
  ) : Promise.resolve(null);
}, Ef = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => oo(a)
  );
  return s ? vt.parseTemplateWikitext(
    Ym(s),
    n,
    t
  ) : Promise.resolve(null);
}, B5 = window.Vuex.useStore, gu = () => {
  const e = B5(), { sourceSection: t } = ee(), { getCurrentTitleByLanguage: n } = xn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = T(), a = bf(), r = (i, l, g) => {
    if (i === 0) {
      t.value.proposedTitleTranslations[l] = g;
      return;
    }
    const p = t.value.getContentTranslationUnitById(i);
    p instanceof st ? p.blockTemplateProposedTranslations[l] = g : p instanceof Un && p.addProposedTranslation(l, g);
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
    p instanceof st && (p.setBlockTemplateAdaptationInfoByHtml(
      l,
      m
    ), m = (yield T5(
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
}, P5 = window.Vuex.useStore, F5 = () => {
  const { sourceSection: e } = ee(), t = P5(), { translateTranslationUnitById: n } = gu();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
function M5(e) {
  const t = document.createElement("div");
  return t.innerHTML = e, t.querySelectorAll("a").forEach((o) => {
    o.setAttribute("target", "_blank");
  }), t.innerHTML;
}
const N5 = window.Vue.resolveDirective, ot = window.Vue.createElementVNode, gi = window.Vue.withDirectives, Re = window.Vue.unref, Pl = window.Vue.createVNode, dn = window.Vue.withCtx, U5 = window.Vue.renderList, I5 = window.Vue.Fragment, pi = window.Vue.openBlock, R5 = window.Vue.createElementBlock, z5 = window.Vue.toDisplayString, Fl = window.Vue.createBlock, Dp = window.Vue.createCommentVNode, O5 = { class: "mw-ui-dialog__header pa-4" }, j5 = { class: "row ma-0 py-2" }, H5 = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, q5 = { class: "mb-0" }, G5 = { class: "col shrink justify-center" }, X5 = { class: "pb-2 mb-0" }, W5 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, K5 = ["dir", "lang", "innerHTML"], Y5 = ["textContent"], J5 = ["innerHTML"], Q5 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, Z5 = /* @__PURE__ */ ot("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), eL = ["innerHTML"], Ml = window.Vue.computed, tL = window.Vuex.useStore, nL = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = Z.EMPTY_TEXT_PROVIDER_KEY, s = Z.ORIGINAL_TEXT_PROVIDER_KEY, a = tL(), {
      sourceSection: r,
      isSectionTitleSelected: c,
      selectedContentTranslationUnit: u
    } = ee(), {
      sourceLanguageURLParameter: d,
      targetLanguageURLParameter: i
    } = T(), l = Ml(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        d.value,
        i.value
      )
    ), g = Ml(() => {
      const x = [s, o];
      return l.value.filter(
        (k) => !x.includes(k)
      );
    }), p = Ml(
      () => c.value ? r.value.proposedTitleTranslations : u.value.proposedTranslations
    ), m = F5(), h = (x) => {
      m(x), _();
    }, f = Z.getMTProviderLabel, _ = () => n("update:active", !1), w = de(), S = M5(
      w.i18n("cx-tools-mt-noservices")
    );
    return (x, k) => {
      const y = N5("i18n");
      return e.active ? (pi(), Fl(Re(St), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: dn(() => [
          ot("div", O5, [
            ot("div", j5, [
              ot("div", H5, [
                gi(ot("h4", q5, null, 512), [
                  [y, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              ot("div", G5, [
                Pl(Re(Ne), {
                  type: "icon",
                  icon: Re(na),
                  class: "pa-0",
                  onClick: _
                }, null, 8, ["icon"])
              ])
            ]),
            gi(ot("h6", X5, null, 512), [
              [y, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: dn(() => [
          Pl(Re(Ye), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: k[0] || (k[0] = (E) => h(Re(s)))
          }, {
            header: dn(() => [
              gi(ot("h5", W5, null, 512), [
                [y, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: dn(() => [
              ot("p", {
                dir: Re(R.getDir)(Re(d)),
                lang: Re(d),
                innerHTML: p.value[Re(s)]
              }, null, 8, K5)
            ]),
            _: 1
          }),
          (pi(!0), R5(I5, null, U5(g.value, (E) => (pi(), Fl(Re(Ye), {
            key: E,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (M) => h(E)
          }, {
            header: dn(() => [
              ot("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: z5(Re(f)(E))
              }, null, 8, Y5)
            ]),
            default: dn(() => [
              ot("p", {
                innerHTML: p.value[E]
              }, null, 8, J5)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          Pl(Re(Ye), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: k[1] || (k[1] = (E) => h(Re(o)))
          }, {
            header: dn(() => [
              gi(ot("h5", Q5, null, 512), [
                [y, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: dn(() => [
              Z5
            ]),
            _: 1
          }),
          g.value.length ? Dp("", !0) : (pi(), Fl(Re(Ye), {
            key: 0,
            class: "sx-sentence-selector__mt-disabled-info-card mx-4 pa-5"
          }, {
            header: dn(() => [
              ot("h5", {
                class: "sx-sentence-selector__translation-info-card-title",
                innerHTML: Re(S)
              }, null, 8, eL)
            ]),
            _: 1
          }))
        ]),
        _: 1
      })) : Dp("", !0);
    };
  }
}, oL = window.Vuex.useStore, qo = () => {
  const { sourceSection: e } = ee(), t = oL(), { translateTranslationUnitById: n } = gu(), { currentMTProvider: o } = Ve(t), s = (c) => C(void 0, null, function* () {
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
const sL = window.Vue.toDisplayString, Nl = window.Vue.createElementVNode, Ul = window.Vue.unref, aL = window.Vue.createVNode, iL = window.Vue.normalizeClass, rL = window.Vue.withCtx, lL = window.Vue.openBlock, cL = window.Vue.createBlock, uL = ["href"], dL = ["textContent"], gL = ["innerHTML"], xo = window.Vue.computed, pL = window.Vuex.useStore, Tp = "sx-sentence-selector__section-title", mL = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const t = pL(), { sourceSection: n, isSectionTitleSelected: o } = ee(), { currentSourcePage: s } = ct(), { sourceLanguage: a } = Ve(t), r = xo(() => {
      var m;
      return (m = s.value) == null ? void 0 : m.title;
    }), c = xo(
      () => {
        var m;
        return ((m = n.value) == null ? void 0 : m.title) || r.value;
      }
    ), u = xo(
      () => Q.getPageUrl(a.value, r.value)
    ), d = xo(
      () => {
        var m;
        return !!((m = n.value) != null && m.translatedTitle);
      }
    ), i = xo(
      () => d.value ? "translated" : "selected"
    ), l = xo(() => {
      const m = [Tp];
      return o.value && m.push(`${Tp}--${i.value}`), m;
    }), { selectTranslationUnitById: g } = qo(), p = () => g(0);
    return (m, h) => (lL(), cL(Ul(b), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: rL(() => [
        Nl("a", {
          href: u.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          Nl("strong", {
            textContent: sL(r.value)
          }, null, 8, dL),
          aL(Ul(je), {
            icon: Ul(qm),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, uL),
        Nl("h2", {
          class: iL(["pa-0 ma-0", l.value]),
          onClick: p,
          innerHTML: c.value
        }, null, 10, gL)
      ]),
      _: 1
    }));
  }
};
const Ot = window.Vue.unref, $s = window.Vue.createVNode, mi = window.Vue.withCtx, Bp = window.Vue.toDisplayString, Pp = window.Vue.createTextVNode, hL = window.Vue.openBlock, fL = window.Vue.createBlock, wL = window.Vue.computed, Il = window.Codex.CdxButton, Fp = window.Codex.CdxIcon, Lf = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = ee(), s = wL(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, r) => (hL(), fL(Ot(P), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: mi(() => [
        $s(Ot(Il), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: Ot(n),
          onClick: r[0] || (r[0] = (c) => a.$emit("select-previous-segment"))
        }, {
          default: mi(() => [
            $s(Ot(Fp), {
              class: "me-1",
              icon: Ot(Zc)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        $s(Ot(Il), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !Ot(o),
          onClick: r[1] || (r[1] = (c) => a.$emit("apply-translation"))
        }, {
          default: mi(() => [
            Pp(Bp(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        $s(Ot(Il), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: r[2] || (r[2] = (c) => a.$emit("skip-translation"))
        }, {
          default: mi(() => [
            Pp(Bp(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            $s(Ot(Fp), {
              class: "ms-1",
              size: "small",
              icon: Ot(da)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const Yn = window.Vue.unref, _L = window.Vue.toDisplayString, Vs = window.Vue.createVNode, hi = window.Vue.withCtx, vL = window.Vue.openBlock, SL = window.Vue.createBlock, Rl = window.Vue.computed, yL = window.Vuex.useStore, xL = window.Codex.CdxButton, bL = window.Codex.CdxIcon, CL = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = yL(), n = Rl(() => t.state.application.currentMTProvider), o = de(), s = Rl(() => ({
      [Z.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [Z.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = Rl(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        Z.getMTProviderLabel(n.value)
      )
    );
    return (r, c) => (vL(), SL(Yn(b), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: hi(() => [
        Vs(Yn(P), { class: "ma-0 ps-5 pb-4" }, {
          default: hi(() => [
            Vs(Yn(b), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: _L(a.value)
            }, null, 8, ["textContent"]),
            Vs(Yn(b), {
              shrink: "",
              class: "pe-5"
            }, {
              default: hi(() => [
                Vs(Yn(xL), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: c[0] || (c[0] = (u) => r.$emit("configure-options"))
                }, {
                  default: hi(() => [
                    Vs(Yn(bL), {
                      class: "pa-0",
                      icon: Yn(Jc)
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
const Lt = window.Vue.unref, Tn = window.Vue.createVNode, kL = window.Vue.resolveDirective, Mp = window.Vue.createElementVNode, $L = window.Vue.withDirectives, Np = window.Vue.toDisplayString, Up = window.Vue.createTextVNode, Es = window.Vue.withCtx, VL = window.Vue.openBlock, EL = window.Vue.createElementBlock, LL = { class: "mt-retry-body pb-5" }, AL = { class: "retry-body__message" }, Ip = window.Codex.CdxButton, zl = window.Codex.CdxIcon, DL = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = kL("i18n");
      return VL(), EL("div", LL, [
        Mp("div", AL, [
          Tn(Lt(zl), {
            class: "me-2",
            icon: Lt(vh)
          }, null, 8, ["icon"]),
          $L(Mp("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        Tn(Lt(P), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: Es(() => [
            Tn(Lt(b), { cols: "6" }, {
              default: Es(() => [
                Tn(Lt(Ip), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: Es(() => [
                    Tn(Lt(zl), {
                      class: "me-1",
                      icon: Lt($h)
                    }, null, 8, ["icon"]),
                    Up(" " + Np(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Tn(Lt(b), { cols: "6" }, {
              default: Es(() => [
                Tn(Lt(Ip), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: Es(() => [
                    Tn(Lt(zl), {
                      class: "me-1",
                      icon: Lt(gy)
                    }, null, 8, ["icon"]),
                    Up(" " + Np(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const bo = window.Vue.createVNode, et = window.Vue.unref, Ls = window.Vue.openBlock, TL = window.Vue.createElementBlock, BL = window.Vue.createCommentVNode, fi = window.Vue.createBlock, PL = window.Vue.normalizeClass, FL = window.Vue.normalizeStyle, As = window.Vue.withCtx, ML = window.Vue.toDisplayString, NL = window.Vue.createTextVNode, UL = window.Vue.normalizeProps, IL = window.Vue.guardReactiveProps, RL = ["lang", "dir", "innerHTML"], Ol = window.Vue.ref, zL = window.Vue.onMounted, OL = window.Vue.onBeforeUnmount, jl = window.Vue.computed, jL = window.Vue.nextTick, HL = window.Vuex.useStore, qL = window.Codex.CdxButton, GL = window.Codex.CdxIcon, XL = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = Ol(0), n = Ol(null), o = Ol(null), s = HL(), { currentMTProvider: a } = Ve(s), { targetLanguageURLParameter: r } = T(), { sourceSection: c, currentProposedTranslation: u } = ee(), d = jl(
      () => {
        var m, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (m = c.value) == null ? void 0 : m.selectedTranslationUnitId
        );
      }
    ), i = jl(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), l = jl(
      () => !!u.value || a.value === Z.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    zL(() => C(this, null, function* () {
      yield jL(), g(), p.observe(n.value.$el), p.observe(o.value.$el);
    })), OL(() => {
      p.unobserve(n.value.$el), p.unobserve(o.value.$el);
    });
    const p = new ResizeObserver(() => g());
    return (m, h) => (Ls(), fi(et(Ye), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: As(() => [
        bo(et(P), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: As(() => [
            bo(CL, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => m.$emit("configure-options"))
            }, null, 512),
            bo(et(b), {
              class: PL(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !l.value && d.value
              }]),
              style: FL(l.value ? i.value : null)
            }, {
              default: As(() => [
                l.value ? (Ls(), TL("section", {
                  key: 0,
                  lang: et(r),
                  dir: et(R.getDir)(et(r)),
                  innerHTML: et(u)
                }, null, 8, RL)) : d.value ? (Ls(), fi(et(it), { key: 1 })) : (Ls(), fi(DL, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (f) => m.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (f) => m.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            bo(et(b), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: As(() => [
                l.value || d.value ? (Ls(), fi(et(qL), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !l.value,
                  onClick: h[3] || (h[3] = (f) => m.$emit("edit-translation", et(u)))
                }, {
                  default: As(() => [
                    bo(et(GL), {
                      class: "me-1",
                      icon: et(Yc)
                    }, null, 8, ["icon"]),
                    NL(" " + ML(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : BL("", !0),
                bo(Lf, UL(IL(m.$attrs)), null, 16)
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
}, WL = window.Vue.computed, KL = (e) => WL(() => {
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
const YL = window.Vue.unref, JL = window.Vue.normalizeClass, QL = window.Vue.openBlock, ZL = window.Vue.createElementBlock, eA = ["innerHTML"], tA = window.Vue.onMounted, nA = window.Vue.ref, oA = window.Vue.computed, sA = {
  __name: "SubSection",
  props: {
    subSection: {
      type: st,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = nA(null), a = KL(n.subSection);
    tA(() => {
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
    const { selectTranslationUnitById: r } = qo(), c = (d) => {
      if (d.selected) {
        o("bounce-translation");
        return;
      }
      r(d.id);
    }, u = oA(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (d, i) => (QL(), ZL("div", {
      ref_key: "subSectionRoot",
      ref: s,
      class: JL(["sx-sentence-selector__subsection", u.value]),
      innerHTML: YL(a)
    }, null, 10, eA));
  }
};
const Rp = window.Vue.unref, zp = window.Vue.createVNode, Op = window.Vue.normalizeStyle, aA = window.Vue.openBlock, iA = window.Vue.createElementBlock, jp = window.Vue.computed, Af = {
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
    const t = e, n = jp(() => ({ "--size": t.size })), o = jp(
      () => !t.isTemplateAdapted || t.percentage === 0 ? Gm : Li
    );
    return (s, a) => (aA(), iA("div", {
      class: "block-template-status-indicator",
      style: Op(n.value)
    }, [
      zp(Rp(p_), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      zp(Rp(je), {
        icon: o.value,
        size: e.size / 2,
        style: Op({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
};
const Bn = window.Vue.unref, wi = window.Vue.createVNode, Hl = window.Vue.withCtx, rA = window.Vue.openBlock, lA = window.Vue.createBlock, cA = window.Vue.computed, Hp = window.Codex.CdxButton, qp = window.Codex.CdxIcon, Df = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "select-next-segment"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = ee(), o = cA(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (rA(), lA(Bn(P), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: Hl(() => [
        wi(Bn(Hp), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: Bn(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => s.$emit("select-previous-segment"))
        }, {
          default: Hl(() => [
            wi(Bn(qp), { icon: Bn(Zc) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        wi(Bn(Hp), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => s.$emit("select-next-segment"))
        }, {
          default: Hl(() => [
            wi(Bn(qp), { icon: Bn(da) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
}, Ds = window.Vue.openBlock, _i = window.Vue.createBlock;
window.Vue.createCommentVNode;
const gn = window.Vue.unref, Co = window.Vue.withCtx, Ts = window.Vue.createVNode, ql = window.Vue.toDisplayString, Gl = window.Vue.createElementVNode, uA = window.Vue.renderList, dA = window.Vue.Fragment, gA = window.Vue.createElementBlock, pA = { class: "pa-4" }, mA = ["textContent"], hA = ["textContent"], fA = window.Vuex.useStore, vi = window.Vue.computed, wA = {
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
    const t = e, { targetLanguageAutonym: n } = Ve(fA()), o = vi(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), s = de(), a = vi(() => {
      let u;
      return t.targetTemplateExists ? t.isTemplateAdapted ? o.value < 100 ? u = "cx-sx-block-template-mapping-status-title-partially-template" : u = "cx-sx-block-template-mapping-status-title-fully-template" : u = "cx-sx-block-template-mapping-status-title-unadapted-template" : u = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(u);
    }), r = vi(() => {
      let u;
      return !t.targetTemplateExists || !t.isTemplateAdapted ? u = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? u = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : u = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(u);
    }), c = vi(() => {
      let u = [];
      if (!t.targetTemplateExists)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            n.value
          ),
          icon: B0,
          color: wt.gray500
        });
      else if (!t.isTemplateAdapted)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            t.sourceParamsCount
          ),
          icon: na,
          color: wt.gray500
        });
      else if (o.value < 100)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            t.targetParamsCount,
            t.sourceParamsCount
          ),
          icon: Li,
          color: wt.blue600
        });
      else {
        let d;
        t.sourceParamsCount ? d = s.i18n(
          "cx-sx-block-template-mapped-params-text",
          t.targetParamsCount,
          t.sourceParamsCount
        ) : d = s.i18n("cx-sx-block-template-no-source-params-text"), u.push({
          text: d,
          icon: Li,
          color: wt.blue600
        });
      }
      return t.mandatoryMissingParamsCount ? u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          t.mandatoryMissingParamsCount,
          n.value
        ),
        icon: Pi,
        color: wt.gray500
      }) : t.targetTemplateExists && t.isTemplateAdapted && t.optionalMissingParamsCount && u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          t.optionalMissingParamsCount,
          n.value
        ),
        icon: h0,
        color: wt.gray500
      }), u;
    });
    return (u, d) => (Ds(), _i(gn(St), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: u.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: d[0] || (d[0] = (i) => u.$emit("update:active", i))
    }, {
      header: Co(() => [
        Ts(gn(P), {
          justify: "center",
          class: "mt-4"
        }, {
          default: Co(() => [
            Ts(gn(b), { shrink: "" }, {
              default: Co(() => [
                e.targetTemplateExists ? (Ds(), _i(Af, {
                  key: 0,
                  percentage: o.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (Ds(), _i(gn(je), {
                  key: 1,
                  icon: gn(f0)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: Co(() => [
        Gl("div", pA, [
          Gl("h3", {
            textContent: ql(a.value)
          }, null, 8, mA),
          Gl("p", {
            class: "mt-6 text-small",
            textContent: ql(r.value)
          }, null, 8, hA),
          (Ds(!0), gA(dA, null, uA(c.value, (i, l) => (Ds(), _i(gn(P), {
            key: l,
            align: "start",
            class: "mt-4"
          }, {
            default: Co(() => [
              Ts(gn(b), { shrink: "" }, {
                default: Co(() => [
                  Ts(gn(je), {
                    class: "me-2",
                    icon: i.icon,
                    "icon-color": i.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              Ts(gn(b), {
                textContent: ql(i.text)
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
const $e = window.Vue.unref, ze = window.Vue.createVNode, jt = window.Vue.withCtx, Xl = window.Vue.toDisplayString, Gp = window.Vue.createTextVNode, _A = window.Vue.resolveDirective, Xp = window.Vue.withDirectives, Wp = window.Vue.createElementVNode, vA = window.Vue.normalizeClass, ko = window.Vue.openBlock, Kp = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Si = window.Vue.createBlock, Yp = window.Vue.normalizeProps;
window.Vue.guardReactiveProps;
const Jp = window.Vue.mergeProps, SA = { class: "block-template-adaptation-card__container pa-4" }, yA = ["textContent"], xA = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, Oe = window.Vue.computed, bA = window.Vue.ref, CA = window.Vuex.useStore, Qp = window.Codex.CdxButton, Zp = window.Codex.CdxIcon, kA = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = CA(), { targetLanguageAutonym: n, currentMTProvider: o } = Ve(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = ee(), r = Oe(() => {
      var V;
      return (V = s.value) == null ? void 0 : V.isTranslated;
    }), c = Oe(() => {
      var B;
      return ((B = s.value) == null ? void 0 : B.blockTemplateTranslatedContent) || a.value;
    }), u = Oe(
      () => {
        var V;
        return (V = s.value) == null ? void 0 : V.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), d = Oe(
      () => {
        var V;
        return !((V = t.state.application.mtRequestsPending) != null && V.includes(
          s.value.id
        ));
      }
    ), i = de(), l = Oe(
      // Strip HTML comments and return
      () => {
        var V, B;
        return ((B = (V = s.value) == null ? void 0 : V.sourceBlockTemplateName) == null ? void 0 : B.replace(
          /<\!--.*?-->/g,
          ""
        )) || i.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), g = Oe(
      () => {
        var V, B;
        return (B = (V = s.value) == null ? void 0 : V.blockTemplateAdaptationInfo) == null ? void 0 : B[o.value];
      }
    ), p = Oe(
      () => {
        var V, B;
        return ((V = g.value) == null ? void 0 : V.adapted) || !!((B = g.value) != null && B.partial);
      }
    ), m = Oe(() => g.value ? "block-template-adaptation-card__body--" + (p.value ? "success" : "warning") : null), h = Oe(() => g.value ? p.value ? i.i18n("sx-block-template-adaptation-card-edit-button-label") : i.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), f = Oe(
      () => {
        var V;
        return Object.keys(((V = s.value) == null ? void 0 : V.sourceTemplateParams) || {}).length;
      }
    ), _ = Oe(() => {
      var B;
      const V = (B = s.value) == null ? void 0 : B.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(V || {});
    }), w = Oe(() => _.value.length), S = Oe(() => {
      const V = E.value;
      return f.value + V === 0 ? 100 : w.value / (f.value + V) * 100 || 0;
    }), x = bA(!1), k = () => {
      x.value = !0;
    }, y = (V) => V.filter((B) => !_.value.includes(B)), E = Oe(() => {
      var B;
      const V = ((B = g.value) == null ? void 0 : B.mandatoryTargetParams) || [];
      return y(V).length;
    }), M = Oe(() => {
      var B;
      const V = ((B = g.value) == null ? void 0 : B.optionalTargetParams) || [];
      return y(V).length;
    });
    return (V, B) => {
      const I = _A("i18n");
      return ko(), Si($e(Ye), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: jt(() => [
          Wp("div", SA, [
            ze($e(P), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: jt(() => [
                ze($e(b), { shrink: "" }, {
                  default: jt(() => [
                    ze($e(Zp), {
                      icon: $e(py),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                ze($e(b), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: jt(() => [
                    Gp(Xl(l.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            u.value ? (ko(), Kp("div", {
              key: 0,
              class: vA(["pa-4 mb-4", m.value])
            }, [
              ze($e(P), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: jt(() => [
                  Xp(ze($e(b), { tag: "h5" }, null, 512), [
                    [I, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  ze($e(b), { shrink: "" }, {
                    default: jt(() => [
                      ze(Af, {
                        percentage: S.value,
                        size: 20,
                        "is-template-adapted": p.value,
                        "stroke-width": 2,
                        onClick: k
                      }, null, 8, ["percentage", "is-template-adapted"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Wp("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: Xl(u.value)
              }, null, 8, yA),
              ze($e(Qp), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: B[0] || (B[0] = (X) => V.$emit("edit-translation", c.value))
              }, {
                default: jt(() => [
                  Gp(Xl(h.value), 1)
                ]),
                _: 1
              })
            ], 2)) : d.value ? (ko(), Kp("div", xA, [
              ze($e(P), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: jt(() => [
                  Xp(ze($e(b), { tag: "h5" }, null, 512), [
                    [I, [
                      $e(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  ze($e(b), { shrink: "" }, {
                    default: jt(() => [
                      ze($e(Qp), {
                        weight: "quiet",
                        "aria-label": V.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: jt(() => [
                          ze($e(Zp), {
                            icon: $e(uy),
                            onClick: k
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
            ])) : (ko(), Si($e(it), { key: 2 }))
          ]),
          r.value ? (ko(), Si(Df, Yp(Jp({ key: 1 }, V.$attrs)), null, 16)) : (ko(), Si(Lf, Yp(Jp({ key: 0 }, V.$attrs)), null, 16)),
          ze(wA, {
            active: x.value,
            "onUpdate:active": B[1] || (B[1] = (X) => x.value = X),
            "source-params-count": f.value,
            "target-params-count": w.value,
            "mandatory-missing-params-count": E.value,
            "optional-missing-params-count": M.value,
            "is-template-adapted": p.value,
            "target-template-exists": !!u.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const $A = window.Vue.unref, VA = window.Vue.createVNode, EA = window.Vue.openBlock, LA = window.Vue.createElementBlock, AA = { class: "translated-segment-card-header" }, DA = window.Vue.computed, TA = {
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
    const n = t, { isSectionTitleSelected: o } = ee(), s = de(), a = DA(() => [
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
    return (c, u) => (EA(), LA("div", AA, [
      VA($A(ta), {
        items: a.value,
        active: e.selection,
        onSelect: r
      }, null, 8, ["items", "active"])
    ]));
  }
};
const BA = window.Vue.useCssVars, Fe = window.Vue.createVNode, em = window.Vue.resolveDirective, PA = window.Vue.createElementVNode, Wl = window.Vue.withDirectives, fe = window.Vue.unref, FA = window.Vue.normalizeStyle, yi = window.Vue.openBlock, tm = window.Vue.createElementBlock, MA = window.Vue.createCommentVNode, NA = window.Vue.normalizeClass, mt = window.Vue.withCtx, UA = window.Vue.toDisplayString, IA = window.Vue.createTextVNode, nm = window.Vue.createBlock, RA = window.Vue.normalizeProps, zA = window.Vue.guardReactiveProps, pn = window.Vue.computed, OA = window.Vue.ref, jA = window.Vue.inject, HA = window.Vuex.useStore, qA = window.Codex.CdxButton, Kl = window.Codex.CdxIcon, GA = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    BA((w) => ({
      "4929555c": _.value
    }));
    const t = OA("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = ee(), { targetLanguage: a } = Ve(HA()), r = pn(() => t.value === "sentence"), c = pn(
      () => n.value.subSections.find(
        (w) => w.sentences.some(
          (S) => {
            var x;
            return S.id === ((x = o.value) == null ? void 0 : x.id);
          }
        )
      )
    ), u = pn(() => {
      var w;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : r.value ? (w = o.value) == null ? void 0 : w.mtProposedTranslationUsed : c.value.proposedContentForMTValidation;
    }), d = jA("colors"), i = d.gray200, l = d.red600, g = pn(() => s.value ? n.value.translatedTitle : r.value ? o.value.translatedContent : c.value.translatedContent), p = pn(
      () => Wt.calculateScore(
        g.value,
        u.value,
        a.value
      )
    ), m = pn(
      () => Wt.getScoreStatus(p.value)
    ), h = pn(
      () => `translated-segment-card__modification-stats__percentage--${m.value}`
    ), f = pn(() => ({
      failure: p.value === 0 ? null : d.yellow700,
      warning: d.yellow700,
      success: d.green600
    })), _ = pn(
      () => f.value[m.value]
    );
    return (w, S) => {
      const x = em("i18n"), k = em("i18n-html");
      return yi(), nm(fe(Ye), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: mt(() => [
          Fe(fe(P), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: mt(() => [
              Fe(TA, {
                selection: t.value,
                "onUpdate:selection": S[0] || (S[0] = (y) => t.value = y)
              }, null, 8, ["selection"]),
              Fe(fe(b), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: mt(() => [
                  Fe(fe(P), { class: "ma-0" }, {
                    default: mt(() => [
                      Fe(fe(b), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: mt(() => [
                          Wl(PA("h5", null, null, 512), [
                            [x, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          p.value === 0 ? Wl((yi(), tm("p", {
                            key: 0,
                            style: FA({ color: fe(l) })
                          }, null, 4)), [
                            [x, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : Wl((yi(), tm("p", {
                            key: 1,
                            class: NA(h.value)
                          }, null, 2)), [
                            [k, [
                              p.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      Fe(fe(b), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: mt(() => [
                          Fe(fe(P), { class: "ma-0 ms-2" }, {
                            default: mt(() => [
                              Fe(fe(b), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: mt(() => [
                                  Fe(fe(Kl), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: fe(fy)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              Fe(fe(b), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: mt(() => [
                                  Fe(fe(Wm), {
                                    value: p.value,
                                    height: "4px",
                                    width: "64px",
                                    color: _.value,
                                    background: fe(i)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              Fe(fe(b), { shrink: "" }, {
                                default: mt(() => [
                                  Fe(fe(Kl), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: fe(my)
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
                  r.value ? (yi(), nm(fe(qA), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: S[1] || (S[1] = (y) => w.$emit("edit-translation", g.value))
                  }, {
                    default: mt(() => [
                      Fe(fe(Kl), {
                        class: "me-1",
                        icon: fe(Yc)
                      }, null, 8, ["icon"]),
                      IA(" " + UA(w.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : MA("", !0)
                ]),
                _: 1
              }),
              Fe(fe(b), { class: "translated-segment-card__actions" }, {
                default: mt(() => [
                  Fe(Df, RA(zA(w.$attrs)), null, 16)
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
}, XA = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = ee(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = qo(), { currentTranslation: s } = Ft();
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
}, Tf = window.Vuex.useStore, WA = () => {
  const e = Tf(), {
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
    o ? s = yield Ri.fetchSupportedMTProviders(
      t.value,
      n.value
    ) : s = new Z(
      t.value,
      n.value,
      []
      // Empty providers array - only "original" and "empty" will be added by constructor
    ), e.commit("mediawiki/addMtProviderGroup", s);
  });
}, KA = () => {
  const e = Tf(), { currentMTProvider: t } = Ve(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = T(), s = WA();
  return () => C(void 0, null, function* () {
    yield s();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, o.value);
    if (!t.value || !a.includes(t.value)) {
      const r = Z.getStorageKey(
        n.value,
        o.value
      );
      let c = mw.storage.get(r);
      (!c || !a.includes(c)) && (c = a[0]), e.commit("application/setCurrentMTProvider", c);
    }
  });
}, YA = window.Vue.computed, JA = (e) => {
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
}, QA = () => {
  const { selectedContentTranslationUnit: e } = ee(), t = YA(
    () => e.value instanceof st
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && JA(o);
  };
}, ZA = (e, t) => {
  const { content: n, origin: o, baseSectionId: s, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const r = t.filter(
    (c) => !Z.isUserMTProvider(c)
  );
  if (o !== "source" && o !== "user" && !r.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, eD = window.Vue.computed, Bf = () => {
  const { currentTranslation: e } = Ft(), { currentSourcePage: t } = ct();
  return eD(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, tD = window.Vuex.useStore, pu = () => {
  const e = tD(), { sourceSection: t, targetPageTitleForPublishing: n } = ee(), {
    pageURLParameter: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = T(), r = Bf();
  return () => {
    const c = n.value, u = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), d = `${r.value}_${t.value.id}`, i = t.value.getParallelCorporaUnits(d);
    i.forEach(
      (p) => ZA(p, u)
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
}, nD = window.Vue.effectScope, oD = window.Vue.onScopeDispose, sD = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = nD(!0), n = o.run(() => e(...a))), oD(s), n);
}, aD = window.Vuex.useStore;
let Yl;
const iD = () => {
  const e = aD(), t = pu();
  let n = 1e3, o = 0;
  return Yl = au(() => t().then((a) => {
    a instanceof Fo ? (n *= o + 1, o++, setTimeout(Yl, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof Uo)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), Yl;
}, Pf = sD(iD), rD = window.Vuex.useStore, lD = () => {
  const e = rD(), t = Pf(), { currentMTProvider: n } = Ve(e), { sourceSection: o, currentProposedTranslation: s } = ee(), { selectNextTranslationUnit: a } = qo();
  return () => C(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, cD = window.Vuex.useStore, uD = () => {
  const e = cD(), t = Pf();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, dD = window.Vuex.useStore, gD = window.Vue.computed, Ff = () => {
  const e = dD(), t = He(), { currentTranslation: n } = Ft(), { currentMTProvider: o, previousRoute: s } = Ve(e), { currentTargetPage: a } = ct(), {
    sourceLanguageURLParameter: r,
    targetLanguageURLParameter: c,
    pageURLParameter: u,
    sectionURLParameter: d
  } = T(), i = lt(), l = gD(() => {
    var S;
    const w = {
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
    if (d.value ? (w.translation_source_section = d.value, w.translation_type = "section") : w.translation_type = "article", n.value) {
      w.translation_id = n.value.translationId, w.translation_target_title = n.value.targetTitle;
      const x = n.value.targetSectionTitle;
      x && (w.translation_target_section = x);
    } else
      a.value && (w.translation_target_title = (S = a.value) == null ? void 0 : S.title);
    return o.value && (w.translation_provider = Z.getProviderForInstrumentation(o.value)), w;
  });
  return {
    logEditorOpenEvent: () => {
      var y;
      const w = t.currentRoute.value.meta.workflowStep, x = t.getRoutes().find(
        (E) => E.name === s.value
      ), k = ((y = x == null ? void 0 : x.meta) == null ? void 0 : y.workflowStep) || 0;
      return w > k ? i(re({
        event_type: "editor_open"
      }, l.value)) : Promise.resolve();
    },
    logEditorCloseEvent: () => i(re({
      event_type: "editor_close"
    }, l.value)),
    logEditorCloseWarnEvent: () => i(re({
      event_type: "editor_close_warn"
    }, l.value)),
    logEditorSegmentAddEvent: () => i(re({
      event_type: "editor_segment_add"
    }, l.value)),
    logEditorSegmentSkipEvent: () => i(re({
      event_type: "editor_segment_skip"
    }, l.value)),
    logEditorSegmentEditEvent: () => i(re({
      event_type: "editor_segment_edit"
    }, l.value))
  };
}, pD = (e, t, n, o) => C(void 0, null, function* () {
  var c, u, d;
  const s = ((c = t.user) == null ? void 0 : c.content) || ((u = t.mt) == null ? void 0 : u.content), a = (d = t == null ? void 0 : t.mt) == null ? void 0 : d.engine, r = yield Ef(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = r, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = r;
}), mD = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, r;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const c = (r = t.mt) == null ? void 0 : r.engine;
      o.addProposedTranslation(c, n.mt.innerHTML), o.mtProviderUsed = c;
    }
  });
}, hD = (e, t, n, o) => C(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return pD(e, t, n, o);
  mD(e, t);
}), fD = (e, t, n, o) => {
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
        const d = hD(
          c,
          u,
          t || e.title,
          n
        );
        s.push(d);
      }
  return Promise.all(s);
}, wD = { restoreCorporaDraft: fD }, _D = () => {
  const { currentSourcePage: e } = ct(), { sourceSection: t } = ee();
  return (n) => C(void 0, null, function* () {
    n.restored || (yield vt.fetchTranslationUnits(n.translationId).then(
      (s) => wD.restoreCorporaDraft(
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
const pe = window.Vue.unref, ht = window.Vue.createVNode, mn = window.Vue.withCtx, vD = window.Vue.resolveDirective, om = window.Vue.createElementVNode, SD = window.Vue.withDirectives, yD = window.Vue.toDisplayString, xD = window.Vue.createTextVNode, bD = window.Vue.renderList, CD = window.Vue.Fragment, Pn = window.Vue.openBlock, sm = window.Vue.createElementBlock, $o = window.Vue.createBlock;
window.Vue.createCommentVNode;
const kD = window.Vue.normalizeClass, $D = window.Vue.normalizeStyle, VD = { class: "sx-sentence-selector__header-title mb-0" }, ED = { class: "sx-sentence-selector__section-contents px-4" }, Vo = window.Vue.computed, LD = window.Vue.nextTick, AD = window.Vue.onMounted, Bs = window.Vue.ref, am = window.Vue.watch, DD = window.Vuex.useStore, im = window.Codex.CdxButton, TD = window.Codex.CdxIcon, BD = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = Bs(!1), n = Bs(!1), o = Bs("100%"), s = DD(), { currentMTProvider: a } = Ve(s), {
      sourceLanguageURLParameter: r,
      targetLanguageURLParameter: c,
      pageURLParameter: u,
      sectionURLParameter: d
    } = T(), { sourceSection: i, selectedContentTranslationUnit: l } = ee(), g = Bs({
      pageContent: !1,
      pageMetadata: !1,
      draftRestored: !1,
      mtProviders: !1
    }), p = Vo(
      () => Object.values(g.value).every(Boolean)
    ), m = Vo(
      () => {
        var we;
        return (we = i.value) == null ? void 0 : we.isSelectedTranslationUnitTranslated;
      }
    ), h = Vo(() => {
      var we;
      return (we = i.value) == null ? void 0 : we.subSections;
    }), f = Vo(
      () => {
        var we;
        return (we = i.value) == null ? void 0 : we.selectedTranslationUnitOriginalContent;
      }
    ), _ = Vo(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: w,
      logEditorCloseEvent: S,
      logEditorCloseWarnEvent: x,
      logEditorSegmentAddEvent: k,
      logEditorSegmentSkipEvent: y
    } = Ff(), E = XA();
    KA()().then(() => {
      w(), g.value.mtProviders = !0;
    });
    const V = QA(), { fetchTranslationsByStatus: B, translationsFetched: I } = jo(), X = _D(), { currentTranslation: K } = Ft(), { selectPageSectionByTitle: Ee, selectPageSectionByIndex: be } = qi(), N = uu(), W = Ro();
    AD(() => C(this, null, function* () {
      if (!I.value.draft) {
        const we = [
          // required to get current draft translation (if exists)
          B("draft"),
          // required to get target page title for template adaptation (useTranslationUnitTranslate)
          N(r.value, u.value),
          // user has just been redirected here from another wiki, and page metadata have not yet been fetched
          W(r.value, [u.value])
        ];
        yield Promise.all(we);
      }
      g.value.pageMetadata = !0, d.value ? yield Ee(d.value) : yield be(0), g.value.pageContent = !0, K.value && (yield X(K.value)), g.value.draftRestored = !0, am(
        p,
        () => C(this, null, function* () {
          p.value && (yield LD(), E(), V());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    })), am(l, V);
    const { selectNextTranslationUnit: oe, selectPreviousTranslationUnit: ae } = qo(), De = () => (y(), oe()), ie = lD(), Y = () => {
      k(), ie();
    }, Ge = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, Le = He(), U = () => {
      const { autoSavePending: we } = s.state.application;
      if (we) {
        he.value = !0, x();
        return;
      }
      L();
    }, H = uD(), { clearTranslationURLParameters: v } = T(), L = () => C(this, null, function* () {
      B("draft"), K.value && (i.value.reset(), K.value.restored = !1), S(), v(), H(), yield Le.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: D,
      translateSelectedTranslationUnitForAllProviders: F
    } = gu(), q = () => {
      Ie.value || (t.value = !0, F());
    }, { getCurrentTitleByLanguage: le } = xn(), z = (we) => {
      Le.push({
        name: "sx-editor",
        state: {
          content: we,
          originalContent: f.value,
          title: le(
            c.value,
            r.value
          ),
          isInitialEdit: !m.value || null
        }
      });
    }, O = () => Le.push({ name: "sx-publisher" }), se = () => C(this, null, function* () {
      l.value ? yield D(
        l.value.id,
        a.value
      ) : yield D(0, a.value);
    }), Ie = Vo(
      () => l.value instanceof st
    ), he = Bs(!1);
    return (we, On) => {
      const Xo = vD("i18n");
      return Pn(), sm("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: $D(_.value)
      }, [
        ht(pe(P), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: mn(() => [
            ht(pe(b), { shrink: "" }, {
              default: mn(() => [
                ht(pe(im), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": we.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: U
                }, {
                  default: mn(() => [
                    ht(pe(TD), { icon: pe(yh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            ht(pe(b), {
              grow: "",
              class: "px-1"
            }, {
              default: mn(() => [
                SD(om("h4", VD, null, 512), [
                  [Xo, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            ht(pe(b), {
              shrink: "",
              class: "px-3"
            }, {
              default: mn(() => [
                ht(pe(im), {
                  disabled: !(pe(i) && pe(i).isTranslated),
                  onClick: O
                }, {
                  default: mn(() => [
                    xD(yD(we.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        p.value ? (Pn(), $o(pe(P), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: mn(() => [
            ht(pe(b), {
              dir: pe(R.getDir)(pe(r)),
              lang: pe(r),
              class: "sx-sentence-selector__section"
            }, {
              default: mn(() => [
                ht(mL),
                om("div", ED, [
                  (Pn(!0), sm(CD, null, bD(h.value, (Yt) => (Pn(), $o(sA, {
                    id: Yt.id,
                    key: `sub-section-${Yt.id}`,
                    "sub-section": Yt,
                    onBounceTranslation: Ge
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !Ie.value && m.value ? (Pn(), $o(GA, {
              key: 0,
              onEditTranslation: z,
              onSelectNextSegment: pe(oe),
              onSelectPreviousSegment: pe(ae)
            }, null, 8, ["onSelectNextSegment", "onSelectPreviousSegment"])) : Ie.value ? (Pn(), $o(kA, {
              key: 2,
              onEditTranslation: z,
              onApplyTranslation: Y,
              onSkipTranslation: De,
              onSelectPreviousSegment: pe(ae),
              onSelectNextSegment: pe(oe)
            }, null, 8, ["onSelectPreviousSegment", "onSelectNextSegment"])) : (Pn(), $o(XL, {
              key: 1,
              class: kD({ "mb-0": !n.value }),
              onConfigureOptions: q,
              onEditTranslation: z,
              onApplyTranslation: Y,
              onSkipTranslation: De,
              onSelectPreviousSegment: pe(ae),
              onRetryTranslation: se
            }, null, 8, ["class", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Pn(), $o(pe(P), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: mn(() => [
            ht(pe(it), { class: "mt-0" })
          ]),
          _: 1
        })),
        ht(nL, {
          active: t.value,
          "onUpdate:active": On[0] || (On[0] = (Yt) => t.value = Yt)
        }, null, 8, ["active"]),
        ht(D5, {
          modelValue: he.value,
          "onUpdate:modelValue": On[1] || (On[1] = (Yt) => he.value = Yt),
          onDiscardTranslation: L
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const PD = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: BD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, FD = window.Vue.resolveComponent, MD = window.Vue.createVNode, ND = window.Vue.normalizeClass, UD = window.Vue.openBlock, ID = window.Vue.createElementBlock;
function RD(e, t, n, o, s, a) {
  const r = FD("sx-sentence-selector");
  return UD(), ID("main", {
    class: ND(["sx-sentence-selector-view", a.classes])
  }, [
    MD(r)
  ], 2);
}
const zD = /* @__PURE__ */ ne(PD, [["render", RD]]), OD = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, jD = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const HD = window.Vue.resolveDirective, xi = window.Vue.withDirectives, At = window.Vue.openBlock, hn = window.Vue.createElementBlock, bi = window.Vue.createCommentVNode, Ci = window.Vue.Transition, Jn = window.Vue.withCtx, Eo = window.Vue.createVNode, Ps = window.Vue.createElementVNode, Fn = window.Vue.unref, qD = window.Vue.renderList, GD = window.Vue.Fragment, XD = window.Vue.normalizeClass, rm = window.Vue.createBlock, WD = window.Vue.toDisplayString, KD = window.Vue.createTextVNode, YD = { class: "sx-quick-tutorial" }, JD = { class: "sx-quick-tutorial__main-point my-4 py-5 px-6" }, QD = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, ZD = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, eT = { class: "sx-quick-tutorial__illustration" }, tT = ["innerHTML"], nT = ["innerHTML"], oT = { class: "sx-quick-tutorial__step-indicator py-3" }, sT = ["onClick"], aT = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, iT = {
  key: "secondary-point-1",
  class: "ma-0"
}, rT = {
  key: "secondary-point-2",
  class: "ma-0"
}, lT = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, lm = window.Vue.ref, cm = window.Codex.CdxButton, cT = window.Codex.CdxIcon, uT = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = lm(2), n = lm(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (r) => r === n.value, a = Ho();
    return (r, c) => {
      const u = HD("i18n");
      return At(), hn("section", YD, [
        Eo(Fn(P), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: Jn(() => [
            Ps("section", JD, [
              Eo(Ci, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Jn(() => [
                  s(1) ? xi((At(), hn("h2", QD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? xi((At(), hn("h2", ZD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : bi("", !0)
                ]),
                _: 1
              })
            ]),
            Ps("section", eT, [
              Eo(Ci, { name: "mw-ui-animation-slide-start" }, {
                default: Jn(() => [
                  s(1) ? (At(), hn("div", {
                    key: "illustration-1",
                    innerHTML: Fn(jD)
                  }, null, 8, tT)) : s(2) ? (At(), hn("div", {
                    key: "illustration-2",
                    innerHTML: Fn(OD)
                  }, null, 8, nT)) : bi("", !0)
                ]),
                _: 1
              })
            ]),
            Ps("div", oT, [
              (At(!0), hn(GD, null, qD(t.value, (d) => (At(), hn("span", {
                key: `dot-${d}`,
                class: XD(["dot mx-1", { "dot-active": s(d) }]),
                role: "button",
                onClick: (i) => n.value = d
              }, null, 10, sT))), 128))
            ]),
            Ps("section", aT, [
              Eo(Ci, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Jn(() => [
                  s(1) ? xi((At(), hn("h3", iT, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? xi((At(), hn("h3", rT, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : bi("", !0)
                ]),
                _: 1
              })
            ]),
            Ps("div", lT, [
              Eo(Ci, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Jn(() => [
                  s(1) ? (At(), rm(Fn(cm), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": r.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: Jn(() => [
                      Eo(Fn(cT), { icon: Fn(da) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (At(), rm(Fn(cm), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: Fn(a)
                  }, {
                    default: Jn(() => [
                      KD(WD(r.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : bi("", !0)
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
const dT = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: uT
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, gT = window.Vue.resolveComponent, pT = window.Vue.createVNode, mT = window.Vue.normalizeClass, hT = window.Vue.openBlock, fT = window.Vue.createElementBlock;
function wT(e, t, n, o, s, a) {
  const r = gT("sx-quick-tutorial");
  return hT(), fT("main", {
    class: mT(["sx-quick-tutorial-view", a.classes])
  }, [
    pT(r)
  ], 2);
}
const _T = /* @__PURE__ */ ne(dT, [["render", wT]]);
const vT = window.Vue.resolveDirective, um = window.Vue.createElementVNode, ST = window.Vue.withDirectives, yT = window.Vue.unref, xT = window.Vue.withCtx, bT = window.Vue.createVNode, CT = window.Vue.openBlock, kT = window.Vue.createElementBlock, $T = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, VT = { class: "sx-editor__original-content-panel__header mb-2" }, ET = ["lang", "dir", "innerHTML"], dm = window.Vue.ref, LT = window.Vue.onMounted, AT = {
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
        d.href = Q.getPageUrl(c, d.title), d.target = "_blank";
    }, o = dm(null), s = dm(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(o.value, null).getPropertyValue("line-height")
    );
    return LT(() => {
      s.value = 2 * a(), n(o.value, t.language);
    }), (r, c) => {
      const u = vT("i18n");
      return CT(), kT("section", $T, [
        ST(um("h5", VT, null, 512), [
          [u, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        bT(yT(a_), {
          "min-height": s.value,
          scroll: ""
        }, {
          default: xT(() => [
            um("div", {
              ref_key: "originalContentRef",
              ref: o,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, ET)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, DT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const TT = window.Vue.unref, Fs = window.Vue.createElementVNode, gm = window.Vue.resolveDirective, Jl = window.Vue.withDirectives, BT = window.Vue.normalizeClass, PT = window.Vue.openBlock, FT = window.Vue.createElementBlock, MT = window.Vue.createCommentVNode, NT = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, UT = { class: "sx-editor__feedback-overlay-content px-4" }, IT = ["innerHTML"], RT = { class: "sx-editor__feedback-overlay-content__title" }, zT = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, Ql = window.Vue.computed, OT = {
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
    const t = e, { targetLanguageURLParameter: n } = T(), o = Ql(
      () => Wt.calculateScore(
        t.editedTranslation,
        t.proposedTranslation,
        n.value
      )
    ), s = Ql(() => {
      const r = Wt.getScoreStatus(o.value);
      return r === "failure" ? o.value === 0 ? "failure" : "warning" : r;
    }), a = Ql(
      () => `sx-editor__feedback-overlay-content__stats--${s.value}`
    );
    return (r, c) => {
      const u = gm("i18n"), d = gm("i18n-html");
      return e.showFeedback ? (PT(), FT("div", NT, [
        Fs("div", UT, [
          Fs("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: TT(DT)
          }, null, 8, IT),
          Jl(Fs("h2", RT, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          Jl(Fs("p", zT, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          Jl(Fs("p", {
            class: BT(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [d, [o.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : MT("", !0);
    };
  }
}, jT = window.Vuex.useStore, HT = () => {
  const e = jT(), t = pu(), { selectNextTranslationUnit: n } = qo(), { sourceSection: o, selectedContentTranslationUnit: s } = ee(), { getCurrentTitleByLanguage: a } = xn();
  return (r) => C(void 0, null, function* () {
    const c = document.createElement("div");
    c.innerHTML = r, c.querySelectorAll(".sx-edit-dummy-node").forEach((l) => l.remove()), r = c.innerHTML;
    const { sourceLanguage: u, targetLanguage: d, currentMTProvider: i } = e.state.application;
    s.value instanceof st && (r = (yield Ef(
      r,
      a(d, u),
      d
    )) || r), o.value.setTranslationForSelectedTranslationUnit(
      r,
      i
    ), t(), n();
  });
};
const tt = window.Vue.unref, Zl = window.Vue.openBlock, ec = window.Vue.createBlock, pm = window.Vue.createCommentVNode, mm = window.Vue.createVNode, qT = window.Vue.createElementVNode, GT = window.Vue.withCtx, XT = { class: "sx-editor__editing-surface-container grow" }, tc = window.Vue.ref, WT = window.Vue.computed, KT = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = tc(!1), o = He(), s = () => n.value = !0, a = () => o.replace({ name: t.fromRoute }), { isFinalEdit: r, isInitialEdit: c, content: u, originalContent: d, title: i } = history.state, l = tc(null), g = tc(!1), { logEditorSegmentAddEvent: p, logEditorSegmentEditEvent: m } = Ff(), {
      sourceLanguageURLParameter: h,
      targetLanguageURLParameter: f
    } = T(), { sourceSection: _ } = ee(), w = WT(
      () => Wt.calculateScore(
        l.value,
        u,
        f.value
      )
    ), S = HT(), x = (k) => C(this, null, function* () {
      l.value = k, g.value = !0;
      const y = new Promise((M) => setTimeout(M, 2e3));
      let E = Promise.resolve();
      r ? _.value.editedTranslation = k : E = S(k), w.value === 0 && c ? p() : w.value > 0 && m(), yield Promise.all([y, E]), g.value = !1, a();
    });
    return (k, y) => (Zl(), ec(tt(P), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: GT(() => [
        tt(d) ? (Zl(), ec(AT, {
          key: 0,
          language: tt(h),
          dir: tt(R.getDir)(tt(h)),
          "original-content": tt(d)
        }, null, 8, ["language", "dir", "original-content"])) : pm("", !0),
        n.value ? pm("", !0) : (Zl(), ec(tt(it), { key: 1 })),
        qT("div", XT, [
          mm(OT, {
            "edited-translation": l.value,
            "show-feedback": g.value,
            "proposed-translation": tt(u)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          mm(EV, {
            content: tt(u),
            language: tt(f),
            dir: tt(R.getDir)(tt(f)),
            title: tt(i),
            onReady: s,
            onClose: a,
            onEditCompleted: x
          }, null, 8, ["content", "language", "dir", "title"])
        ])
      ]),
      _: 1
    }));
  }
};
const YT = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: KT
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
}, JT = window.Vue.resolveComponent, QT = window.Vue.createVNode, ZT = window.Vue.normalizeClass, e6 = window.Vue.openBlock, t6 = window.Vue.createElementBlock;
function n6(e, t, n, o, s, a) {
  const r = JT("sx-editor");
  return e6(), t6("main", {
    class: ZT(["sx-editor-view", a.classes])
  }, [
    QT(r, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const o6 = /* @__PURE__ */ ne(YT, [["render", n6]]);
const Ht = window.Vue.unref, Qn = window.Vue.createVNode, Ms = window.Vue.withCtx, s6 = window.Vue.resolveDirective, a6 = window.Vue.withDirectives, i6 = window.Vue.openBlock, r6 = window.Vue.createBlock, hm = window.Codex.CdxButton, fm = window.Codex.CdxIcon, l6 = {
  __name: "SXPublisherHeader",
  props: {
    isPublishingDisabled: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["publish-translation"],
  setup(e) {
    const t = He(), n = () => t.push({ name: "sx-sentence-selector" });
    return (o, s) => {
      const a = s6("i18n");
      return i6(), r6(Ht(P), { class: "ma-0 sx-publisher__header" }, {
        default: Ms(() => [
          Qn(Ht(b), {
            shrink: "",
            class: "me-2"
          }, {
            default: Ms(() => [
              Qn(Ht(hm), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: Ms(() => [
                  Qn(Ht(fm), { icon: Ht(Oo) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          a6(Qn(Ht(b), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          Qn(Ht(b), { shrink: "" }, {
            default: Ms(() => [
              Qn(Ht(hm), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (r) => o.$emit("publish-translation"))
              }, {
                default: Ms(() => [
                  Qn(Ht(fm), { icon: Ht(ay) }, null, 8, ["icon"])
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
}, c6 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, u6 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, wm = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const nc = window.Vue.createElementVNode, _m = window.Vue.toDisplayString, oc = window.Vue.unref, sc = window.Vue.withCtx, vm = window.Vue.createVNode, d6 = window.Vue.openBlock, g6 = window.Vue.createBlock, p6 = window.Vue.createCommentVNode, m6 = ["innerHTML"], h6 = ["textContent"], f6 = ["textContent"], ac = window.Vue.computed, w6 = {
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
    const t = de(), n = e, o = {
      pending: {
        svg: c6,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: u6,
        title: t.i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: wm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: wm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, s = ac(() => o[n.status].svg), a = ac(() => o[n.status].title), r = ac(() => o[n.status].subtitle);
    return (c, u) => e.active ? (d6(), g6(oc(St), {
      key: 0,
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: sc(() => [
        vm(oc(P), { class: "ma-4" }, {
          default: sc(() => [
            vm(oc(b), null, {
              default: sc(() => [
                nc("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: s.value
                }, null, 8, m6),
                nc("h2", {
                  textContent: _m(a.value)
                }, null, 8, h6),
                nc("p", {
                  class: "ma-0",
                  textContent: _m(r.value)
                }, null, 8, f6)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : p6("", !0);
  }
};
const nt = window.Vue.unref, Dt = window.Vue.createVNode, fn = window.Vue.withCtx, _6 = window.Vue.resolveDirective, v6 = window.Vue.withDirectives, Sm = window.Vue.toDisplayString, S6 = window.Vue.createTextVNode, ic = window.Vue.openBlock, ym = window.Vue.createElementBlock, y6 = window.Vue.createCommentVNode, Mf = window.Vue.createElementVNode, x6 = window.Vue.createBlock, b6 = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, C6 = ["src"], k6 = ["textContent"], $6 = /* @__PURE__ */ Mf("p", { class: "mt-0" }, null, -1), V6 = window.Vue.computed, E6 = window.Vue.inject, L6 = window.Vue.ref, xm = window.Codex.CdxButton, A6 = window.Codex.CdxIcon, D6 = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: Mh,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = L6(""), s = () => n("close"), a = () => n("publish", o.value), r = E6("breakpoints"), c = V6(() => r.value.mobile);
    return (u, d) => {
      const i = _6("i18n");
      return e.active && e.captchaDetails ? (ic(), x6(nt(St), {
        key: 0,
        fullscreen: c.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: fn(() => [
          Dt(nt(P), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: fn(() => [
              Dt(nt(b), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: fn(() => [
                  Dt(nt(xm), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": u.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: s
                  }, {
                    default: fn(() => [
                      Dt(nt(A6), { icon: nt(Oo) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              v6(Dt(nt(b), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [i, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              Dt(nt(b), {
                shrink: "",
                class: "justify-center"
              }, {
                default: fn(() => [
                  Dt(nt(xm), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: fn(() => [
                      S6(Sm(u.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Dt(nt(Bi))
        ]),
        default: fn(() => [
          Mf("div", b6, [
            e.captchaDetails.type === "image" ? (ic(), ym("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, C6)) : (ic(), ym("p", {
              key: 1,
              textContent: Sm(e.captchaDetails.question)
            }, null, 8, k6)),
            $6,
            Dt(nt(P), { class: "ma-0" }, {
              default: fn(() => [
                Dt(nt(b), null, {
                  default: fn(() => [
                    Dt(nt(_c), {
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
      }, 8, ["fullscreen"])) : y6("", !0);
    };
  }
};
const Zn = window.Vue.unref, Ns = window.Vue.createVNode, ki = window.Vue.withCtx, eo = window.Vue.createElementVNode, T6 = window.Vue.resolveDirective, B6 = window.Vue.withDirectives, P6 = window.Vue.renderList, bm = window.Vue.Fragment, rc = window.Vue.openBlock, Cm = window.Vue.createElementBlock, F6 = window.Vue.toDisplayString, M6 = window.Vue.normalizeClass, N6 = window.Vue.createBlock, U6 = { class: "mw-ui-dialog__header" }, I6 = { class: "row ma-0 px-4 py-3" }, R6 = { class: "col shrink justify-center" }, z6 = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, O6 = { class: "mb-0" }, j6 = { class: "pa-4" }, H6 = ["textContent"], q6 = window.Vuex.useStore, Us = window.Vue.computed, G6 = window.Codex.CdxButton, X6 = window.Codex.CdxIcon, W6 = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = q6(), s = Us(() => o.state.application.publishTarget), a = Us(() => o.state.translator.isAnon), r = de(), { sourceSection: c } = ee(), u = Us(
      () => c.value.isLeadSection ? r.i18n("cx-sx-publisher-lead-section-option-label") : r.i18n("cx-sx-publisher-new-section-option-label")
    ), d = Us(
      () => c.value.isLeadSection ? r.i18n("cx-sx-publisher-lead-section-option-details") : r.i18n("cx-sx-publisher-new-section-option-details")
    ), i = Us(() => [
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
      const f = T6("i18n");
      return rc(), N6(Zn(St), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: m.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: h[0] || (h[0] = (_) => m.$emit("update:active", _)),
        onClose: g
      }, {
        header: ki(() => [
          eo("div", U6, [
            eo("div", I6, [
              eo("div", R6, [
                Ns(Zn(G6), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": m.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: g
                }, {
                  default: ki(() => [
                    Ns(Zn(X6), { icon: Zn(yh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              eo("div", z6, [
                B6(eo("h4", O6, null, 512), [
                  [f, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            Ns(Zn(Bi))
          ])
        ]),
        default: ki(() => [
          eo("div", j6, [
            Ns(Zn(F1), {
              value: s.value,
              name: "publish-options",
              onInput: p
            }, {
              default: ki(() => [
                (rc(!0), Cm(bm, null, P6(i.value, (_, w) => (rc(), Cm(bm, {
                  key: _.label
                }, [
                  Ns(Zn(vc), {
                    class: "pa-0 my-1",
                    label: _.label,
                    "input-value": _.value,
                    disabled: _.disabled
                  }, null, 8, ["label", "input-value", "disabled"]),
                  eo("p", {
                    class: M6(["complementary ms-7 mt-0", l(w)]),
                    textContent: F6(_.details)
                  }, null, 10, H6)
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
const Tt = window.Vue.unref, to = window.Vue.createVNode, km = window.Vue.resolveDirective, $m = window.Vue.withDirectives, $i = window.Vue.openBlock, Vm = window.Vue.createElementBlock, K6 = window.Vue.createCommentVNode, Em = window.Vue.toDisplayString, lc = window.Vue.createElementVNode, Lo = window.Vue.withCtx, Lm = window.Vue.createBlock, Y6 = window.Vue.Fragment, J6 = window.Vue.normalizeClass, Q6 = { class: "sx-publisher__review-info__content" }, Z6 = { key: 0 }, e9 = ["textContent"], t9 = ["textContent"], Mn = window.Vue.computed, Am = window.Vue.ref, n9 = window.Vue.watch, Dm = window.Codex.CdxButton, cc = window.Codex.CdxIcon, o9 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Am(0), o = Am(null);
    n9(o, () => {
      var f;
      const h = (f = o.value) == null ? void 0 : f.$el;
      if (h instanceof HTMLElement) {
        const _ = h.querySelector("a");
        _ && _.setAttribute("target", "_blank");
      }
    });
    const s = Mn(
      () => {
        var h;
        return (h = t.publishFeedbackMessages) == null ? void 0 : h[n.value];
      }
    ), a = Mn(() => {
      var h;
      return ((h = s.value) == null ? void 0 : h.status) || "default";
    }), r = Mn(() => {
      switch (a.value) {
        case "warning":
          return vh;
        case "error":
          return oy;
        default:
          return ly;
      }
    }), c = Mn(() => a.value === "default"), u = Mn(
      () => c.value ? "notice" : a.value
    ), d = Mn(
      () => `sx-publisher__review-info--${u.value}`
    ), i = de(), l = Mn(() => {
      var h;
      return (h = s.value) == null ? void 0 : h.text;
    }), g = Mn(
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
      const _ = km("i18n"), w = km("i18n-html");
      return $i(), Lm(Tt(i1), {
        type: u.value,
        class: J6(["sx-publisher__review-info ma-0 pa-4", d.value]),
        inline: c.value
      }, {
        icon: Lo(() => [
          to(Tt(cc), {
            icon: r.value,
            class: "shrink mw-ui-message__icon items-start me-1"
          }, null, 8, ["icon"])
        ]),
        default: Lo(() => [
          lc("div", Q6, [
            a.value === "default" ? $m(($i(), Vm("h5", Z6, null, 512)), [
              [_, void 0, "cx-sx-publisher-review-info"]
            ]) : ($i(), Vm(Y6, { key: 1 }, [
              lc("h5", {
                textContent: Em(g.value)
              }, null, 8, e9),
              lc("p", {
                textContent: Em(l.value)
              }, null, 8, t9),
              to(Tt(P), {
                justify: "between",
                class: "ma-0"
              }, {
                default: Lo(() => [
                  $m(to(Tt(b), {
                    ref_key: "learnMoreContainer",
                    ref: o,
                    class: "sx-publisher__review-info__learn-more-anchor"
                  }, null, 512), [
                    [w, void 0, "cx-sx-publisher-review-info-learn-more"]
                  ]),
                  e.publishFeedbackMessages.length > 1 ? ($i(), Lm(Tt(b), {
                    key: 0,
                    class: "sx-publisher__review-info__navigation-buttons justify-end",
                    align: "center"
                  }, {
                    default: Lo(() => [
                      to(Tt(Dm), {
                        weight: "quiet",
                        class: "pa-0 me-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                        onClick: p
                      }, {
                        default: Lo(() => [
                          to(Tt(cc), { icon: Tt(Zc) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"]),
                      to(Tt(Dm), {
                        weight: "quiet",
                        class: "pa-0 ms-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                        onClick: m
                      }, {
                        default: Lo(() => [
                          to(Tt(cc), { icon: Tt(da) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ]),
                    _: 1
                  })) : K6("", !0)
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
}, s9 = (e) => {
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
}, a9 = window.Vuex.useStore, i9 = window.Vue.computed, r9 = () => {
  const e = a9(), { currentTranslation: t } = Ft(), { currentMTProvider: n, previousRoute: o } = Ve(e), { currentTargetPage: s } = ct(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: c,
    sectionURLParameter: u
  } = T(), { sourceSection: d } = ee(), i = lt(), l = i9(() => {
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
    return n.value && (h.translation_provider = Z.getProviderForInstrumentation(n.value)), h.human_modification_rate = Wt.getMTScoreForPageSection(
      d.value,
      r.value
    ) / 100, h.human_modification_threshold = Wt.getMtModificationThreshold(), h;
  });
  return {
    logPublishAttemptEvent: () => i(re({
      event_type: "publish_attempt"
    }, l.value)),
    logPublishSuccessEvent: (h, f) => i(re({
      event_type: "publish_success",
      published_page_id: h,
      published_revision_id: f
    }, l.value)),
    logPublishFailureEvent: () => i(re({
      event_type: "publish_failure"
    }, l.value))
  };
}, Tm = window.Vue.ref, l9 = window.Vuex.useStore, c9 = () => {
  const e = l9(), {
    pageURLParameter: t,
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = T(), { sourceSection: s, targetPageTitleForPublishing: a } = ee(), r = Bf(), c = Tm(!1), u = Tm("pending"), d = () => c.value = !1, i = pu(), {
    logPublishAttemptEvent: l,
    logPublishSuccessEvent: g,
    logPublishFailureEvent: p
  } = r9(), m = (f, _) => C(void 0, null, function* () {
    l();
    const w = yield i();
    if (w instanceof Fo)
      return p(), { publishFeedbackMessage: w, targetUrl: null };
    const S = w, x = a.value, k = e.getters["application/isSandboxTarget"], y = {
      html: s9(s.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: x,
      sourceSectionTitle: s.value.sourceSectionTitleForPublishing,
      targetSectionTitle: s.value.targetSectionTitleForPublishing,
      sourceLanguage: n.value,
      targetLanguage: o.value,
      revision: r.value,
      isSandbox: k,
      sectionTranslationId: S
    };
    f && (y.captchaId = f, y.captchaWord = _);
    const E = yield vt.publishTranslation(
      y
    );
    return E.publishFeedbackMessage === null ? g(E.pageId, E.revisionId) : p(), E;
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
      } catch (S) {
        if (S instanceof Uo)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw S;
      }
      return w;
    }),
    isPublishDialogActive: c,
    publishStatus: u
  };
}, u9 = window.Vue.computed, d9 = () => {
  const e = He(), { sourceSection: t } = ee(), { getCurrentTitleByLanguage: n } = xn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = T(), a = u9(
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
}, g9 = () => {
  const { targetLanguageURLParameter: e } = T(), { sourceSection: t } = ee();
  return () => {
    const n = Wt.getMTScoreForPageSection(
      t.value,
      e.value
    ), o = Wt.getScoreStatus(n);
    if (o === "success")
      return null;
    const s = 100 - n, a = o === "failure" ? "error" : "warning";
    let r, c;
    return a === "warning" ? (r = mw.message("cx-sx-publisher-mt-abuse-message-title", s).plain(), c = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (r = mw.message("cx-sx-publisher-mt-abuse-error-title", s).plain(), c = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new Fo({
      title: r,
      text: c,
      status: a,
      type: "mt"
    });
  };
}, p9 = window.Vue.ref, m9 = window.Vue.computed, h9 = () => {
  const e = g9(), t = p9([]), n = m9(
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
}, f9 = window.Vuex.useStore, w9 = () => {
  const e = f9(), { currentSourcePage: t } = ct(), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = T(), { sourceSection: s, targetPageTitleForPublishing: a } = ee();
  return (r) => C(void 0, null, function* () {
    const c = a.value, u = e.getters["application/isSandboxTarget"], d = t.value.title, i = new mw.Title(d), l = mw.config.get("wgNamespaceIds");
    if (s.value.isLeadSection && !u && i.getNamespaceId() !== l.user)
      try {
        yield Ri.addWikibaseLink(
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
}, Bm = window.Vue.ref, _9 = () => {
  const e = Bm(!1), t = Bm(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const xe = window.Vue.unref, Ke = window.Vue.createVNode, v9 = window.Vue.resolveDirective, Is = window.Vue.createElementVNode, S9 = window.Vue.withDirectives, Ao = window.Vue.withCtx, y9 = window.Vue.openBlock, x9 = window.Vue.createElementBlock, b9 = { class: "sx-publisher" }, C9 = { class: "sx-publisher__publish-panel pa-4" }, k9 = { class: "mb-2" }, $9 = ["innerHTML"], V9 = { class: "sx-publisher__section-preview pa-5" }, E9 = ["innerHTML"], Pm = window.Vue.computed, L9 = window.Vue.onMounted, A9 = window.Vue.ref, D9 = window.Vue.watch, T9 = window.Vuex.useStore, Fm = window.Codex.CdxButton, Mm = window.Codex.CdxIcon, B9 = {
  __name: "SXPublisher",
  setup(e) {
    const t = T9(), { sourceSection: n } = ee(), o = Pm(() => {
      var M;
      return (M = n.value) == null ? void 0 : M.title;
    }), s = de(), a = Pm(() => t.getters["application/isSandboxTarget"] ? s.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : n.value.isLeadSection ? s.i18n("cx-sx-publisher-publish-panel-lead-section-result") : s.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: r,
      captchaDialogOn: c,
      handleCaptchaError: u,
      onCaptchaDialogClose: d
    } = _9(), {
      publishFeedbackMessages: i,
      isPublishingDisabled: l,
      addPublishFeedbackMessage: g,
      clearPublishFeedbackMessages: p,
      initializePublishFeedbackMessages: m
    } = h9(), h = w9(), { doPublish: f, isPublishDialogActive: _, publishStatus: w, closePublishDialog: S } = c9(), x = (M = null) => C(this, null, function* () {
      if (l.value)
        return;
      const V = yield f(M, r.value);
      if (!V)
        return;
      const { publishFeedbackMessage: B, targetUrl: I } = V;
      if (u(B)) {
        S();
        return;
      } else
        B && g(B);
      w.value = l.value ? "failure" : "success", setTimeout(() => {
        if (l.value) {
          S();
          return;
        }
        h(I);
      }, 1e3);
    });
    L9(() => m());
    const k = d9(), y = A9(!1), E = () => y.value = !0;
    return D9(y, (M) => {
      M || (p(), m());
    }), (M, V) => {
      const B = v9("i18n");
      return y9(), x9("section", b9, [
        Ke(l6, {
          "is-publishing-disabled": xe(l),
          onPublishTranslation: x
        }, null, 8, ["is-publishing-disabled"]),
        Is("div", C9, [
          S9(Is("h5", k9, null, 512), [
            [B, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          Is("h6", {
            class: "mb-2",
            innerHTML: a.value
          }, null, 8, $9),
          Ke(xe(P), {
            justify: "end",
            class: "ma-0"
          }, {
            default: Ao(() => [
              Ke(xe(b), { shrink: "" }, {
                default: Ao(() => [
                  Ke(xe(Fm), {
                    weight: "quiet",
                    "aria-label": M.$i18n("cx-sx-publisher-configure-button-aria-label"),
                    onClick: E
                  }, {
                    default: Ao(() => [
                      Ke(xe(Mm), { icon: xe(hy) }, null, 8, ["icon"])
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
        Ke(o9, { "publish-feedback-messages": xe(i) }, null, 8, ["publish-feedback-messages"]),
        Is("section", V9, [
          Ke(xe(P), { class: "pb-5 ma-0" }, {
            default: Ao(() => [
              Ke(xe(b), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                innerHTML: o.value
              }, null, 8, ["innerHTML"]),
              Ke(xe(b), { shrink: "" }, {
                default: Ao(() => [
                  Ke(xe(Fm), {
                    weight: "quiet",
                    "aria-label": M.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: xe(k)
                  }, {
                    default: Ao(() => [
                      Ke(xe(Mm), { icon: xe(Yc) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label", "onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Is("div", {
            innerHTML: xe(n).translationHtml
          }, null, 8, E9)
        ]),
        Ke(W6, {
          active: y.value,
          "onUpdate:active": V[0] || (V[0] = (I) => y.value = I)
        }, null, 8, ["active"]),
        Ke(D6, {
          active: xe(c),
          "captcha-details": xe(r),
          onClose: xe(d),
          onPublish: V[1] || (V[1] = (I) => x(I))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        Ke(w6, {
          active: xe(_),
          status: xe(w)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const P9 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: B9
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, F9 = window.Vue.resolveComponent, M9 = window.Vue.createVNode, N9 = window.Vue.normalizeClass, U9 = window.Vue.openBlock, I9 = window.Vue.createElementBlock;
function R9(e, t, n, o, s, a) {
  const r = F9("sx-publisher");
  return U9(), I9("main", {
    class: N9(["sx-publisher-view", a.classes])
  }, [
    M9(r)
  ], 2);
}
const z9 = /* @__PURE__ */ ne(P9, [["render", R9]]);
const Bt = window.Vue.unref, Nn = window.Vue.createVNode, no = window.Vue.withCtx, uc = window.Vue.toDisplayString, dc = window.Vue.createElementVNode, O9 = window.Vue.openBlock, j9 = window.Vue.createBlock, H9 = ["textContent"], q9 = ["textContent"], G9 = ["textContent"], Nf = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: Io,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (O9(), j9(Bt(P), {
      class: "cx-search-suggestion px-4 py-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: Bt(R.getDir)(e.suggestion.language)
    }, {
      default: no(() => [
        Nn(Bt(b), { shrink: "" }, {
          default: no(() => [
            Nn(Bt(Fc), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        Nn(Bt(b), { class: "ms-4" }, {
          default: no(() => [
            Nn(Bt(P), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: no(() => [
                Nn(Bt(b), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: no(() => [
                    dc("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: uc(e.suggestion.title)
                    }, null, 8, H9)
                  ]),
                  _: 1
                }),
                Nn(Bt(b), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: no(() => [
                    dc("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: uc(e.suggestion.description)
                    }, null, 8, q9)
                  ]),
                  _: 1
                }),
                Nn(Bt(b), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: no(() => [
                    Nn(Bt(je), {
                      icon: Bt(C0),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    dc("small", {
                      textContent: uc((e.suggestion.langLinksCount || 0) + 1)
                    }, null, 8, G9)
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
const Rs = window.Vue.unref, zs = window.Vue.openBlock, gc = window.Vue.createBlock, X9 = window.Vue.createCommentVNode, W9 = window.Vue.resolveDirective, K9 = window.Vue.withDirectives, Nm = window.Vue.createElementBlock, Y9 = window.Vue.renderList, J9 = window.Vue.Fragment, Q9 = window.Vue.normalizeClass, Z9 = window.Vue.withCtx, eB = {
  key: 1,
  class: "sx-article-search__empty-state"
}, Um = window.Vue.computed, tB = window.Vue.ref, nB = {
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
    const { sourceLanguageURLParameter: t } = T(), n = Um(() => R.getAutonym(t.value)), o = e, s = tB(null), a = (l) => s.value = l, r = () => s.value = null, c = (l) => {
      var g;
      return ((g = o.selectedItem) == null ? void 0 : g.title) === l.title && !s.value || s.value === l.pageId;
    }, u = Um(() => o.searchInput), { searchResultsLoading: d, searchResultsSlice: i } = iu(
      t,
      u
    );
    return (l, g) => {
      const p = W9("i18n");
      return zs(), gc(Rs(Ye), { class: "sx-article-search__results mb-0 pa-0" }, {
        default: Z9(() => [
          Rs(d) ? (zs(), gc(Rs(it), {
            key: 0,
            class: "sx-article-search__empty-state"
          })) : Rs(i).length === 0 ? K9((zs(), Nm("p", eB, null, 512)), [
            [p, [
              u.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : X9("", !0),
          (zs(!0), Nm(J9, null, Y9(Rs(i), (m) => (zs(), gc(Nf, {
            key: m.pageId,
            suggestion: m,
            class: Q9({
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
const oB = window.Vue.toDisplayString, sB = window.Vue.createElementVNode, aB = window.Vue.renderList, iB = window.Vue.Fragment, pc = window.Vue.openBlock, rB = window.Vue.createElementBlock, lB = window.Vue.normalizeClass, Im = window.Vue.createBlock, cB = window.Vue.unref, Rm = window.Vue.withCtx, uB = ["textContent"], dB = window.Vue.ref, zm = {
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
    const n = e, o = dB(null), s = (c) => o.value = c, a = () => o.value = null, r = (c) => {
      var u;
      return ((u = n.selectedItem) == null ? void 0 : u.title) === c.title && !o.value || o.value === c.pageId;
    };
    return (c, u) => (pc(), Im(cB(Ye), { class: "sx-article-search__suggestions pa-0" }, {
      header: Rm(() => [
        sB("h5", {
          class: "ma-0 px-4 pb-1 sx-article-search__suggestions-header",
          textContent: oB(e.cardTitle)
        }, null, 8, uB)
      ]),
      default: Rm(() => [
        (pc(!0), rB(iB, null, aB(e.suggestions, (d) => (pc(), Im(Nf, {
          key: d.pageId,
          suggestion: d,
          class: lB({
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
}, gB = window.Vue.computed, pB = (e, t) => gB(() => {
  const o = [], s = {
    value: "other",
    props: {
      icon: E0,
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
}), mB = window.Vue.computed, hB = () => {
  const { supportedSourceLanguageCodes: e } = ia(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = T();
  return { getSuggestedSourceLanguages: (s) => mB(() => {
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
const fB = window.Vue.resolveDirective, wB = window.Vue.createElementVNode, mc = window.Vue.withDirectives, ue = window.Vue.unref, Os = window.Vue.withCtx, qt = window.Vue.createVNode, js = window.Vue.openBlock, Om = window.Vue.createBlock, _B = window.Vue.createCommentVNode, hc = window.Vue.createElementBlock, vB = window.Vue.Fragment, SB = window.Vue.vShow, Hs = window.Vue.withModifiers, qs = window.Vue.withKeys, yB = ["onKeydown"], xB = { class: "mb-0" }, bB = {
  key: 2,
  class: "sx-article-search__empty-state"
}, Do = window.Vue.ref, CB = window.Vue.onMounted, kB = window.Vue.onBeforeUnmount, Gs = window.Vue.computed, jm = window.Vue.watch, $B = window.Vue.inject, VB = window.Vuex.useStore, EB = window.Codex.CdxButton, LB = window.Codex.CdxIcon, AB = window.Codex.CdxSearchInput, DB = 3, TB = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = Do(""), n = Do(!1), o = Do(null), s = Do(!1), a = Do([]), r = VB(), {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u
    } = T(), { supportedSourceLanguageCodes: d } = ia(), { searchResultsSlice: i } = iu(c, t), { getSuggestedSourceLanguages: l } = hB(), g = l(a), p = pB(
      c,
      g
    ), m = He(), { fetchAllTranslations: h } = jo();
    CB(() => C(this, null, function* () {
      var U;
      h();
      try {
        a.value.push(
          ...JSON.parse(localStorage.getItem("cxPreviousLanguages"))
        ), S();
      } catch (H) {
      }
      (U = o.value) == null || U.focus(), window.addEventListener("beforeunload", x);
    })), kB(() => {
      window.removeEventListener("beforeunload", x), x();
    });
    const f = () => {
      m.push({ name: "dashboard" });
    }, _ = Ph(), w = (U) => {
      _(U, u.value), a.value.includes(U) || S();
    }, S = () => {
      a.value = [
        c.value,
        ...a.value.filter((U) => U !== c.value)
      ];
    }, x = () => {
      mw.storage.set(
        "cxPreviousLanguages",
        JSON.stringify(a.value)
      );
    }, k = (U) => {
      if (U === "other") {
        s.value = !0;
        return;
      }
      w(U);
    };
    jm(
      c,
      () => {
        var U;
        r.dispatch("mediawiki/fetchNearbyPages"), (U = o.value) == null || U.focus();
      },
      { immediate: !0 }
    );
    const y = lt();
    jm(t, () => {
      n.value || (n.value = !0, y({
        event_type: "dashboard_search",
        translation_source_language: c.value,
        translation_target_language: u.value
      }));
    });
    const E = () => {
      s.value = !1;
    }, M = (U) => {
      s.value = !1, k(U);
    }, { fetchPreviousEditsInSource: V, previousEditsInSource: B } = fh(), I = Do([]);
    (() => V().then(() => B.value.length > 0 ? ao.fetchPages(
      c.value,
      B.value
    ) : []).then((U) => {
      U = U.slice(0, DB), U = U.sort(
        (H, v) => B.value.indexOf(H.title) - B.value.indexOf(v.title)
      ), I.value = U;
    }))();
    const K = Gs(() => r.getters["mediawiki/getNearbyPages"]), Ee = $B("breakpoints"), be = Gs(() => Ee.value.mobile), N = ga(), W = Gs(
      () => I.value && I.value.length
    ), oe = Gs(
      () => K.value && K.value.length
    ), { next: ae, prev: De, keyboardNavigationContainer: ie, selectedItem: Y } = mf(t, i, I), Ge = (U) => N(
      U.title,
      c.value,
      u.value,
      Le.value
    ), Le = Gs(() => t.value ? "search_result" : W.value ? "suggestion_recent_edit" : oe.value ? "suggestion_nearby" : "");
    return (U, H) => {
      const v = fB("i18n");
      return js(), hc("section", {
        ref_key: "keyboardNavigationContainer",
        ref: ie,
        class: "sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto",
        onKeydown: [
          H[5] || (H[5] = qs(Hs((...L) => ue(ae) && ue(ae)(...L), ["stop", "prevent"]), ["tab"])),
          H[6] || (H[6] = qs(Hs((...L) => ue(ae) && ue(ae)(...L), ["stop", "prevent"]), ["down"])),
          H[7] || (H[7] = qs(Hs((...L) => ue(De) && ue(De)(...L), ["stop", "prevent"]), ["up"])),
          qs(Hs(f, ["stop", "prevent"]), ["esc"]),
          H[8] || (H[8] = qs(Hs((L) => Ge(ue(Y)), ["stop", "prevent"]), ["enter"]))
        ]
      }, [
        qt(ue(P), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Os(() => [
            qt(ue(b), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Os(() => [
                mc(wB("h5", xB, null, 512), [
                  [v, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            qt(ue(b), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Os(() => [
                qt(ue(EB), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": U.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: f
                }, {
                  default: Os(() => [
                    qt(ue(LB), { icon: ue(Oo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        qt(ue(AB), {
          ref_key: "searchInputRef",
          ref: o,
          modelValue: t.value,
          "onUpdate:modelValue": H[0] || (H[0] = (L) => t.value = L),
          class: "sx-article-search__search-input",
          placeholder: U.$i18n("cx-sx-article-search-input-placeholder")
        }, null, 8, ["modelValue", "placeholder"]),
        qt(ue(ta), {
          class: "sx-article-search__language-button-group",
          items: ue(p),
          active: ue(c),
          onSelect: k
        }, null, 8, ["items", "active"]),
        t.value ? _B("", !0) : (js(), hc(vB, { key: 0 }, [
          W.value ? (js(), Om(zm, {
            key: 0,
            "card-title": U.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: I.value,
            "selected-item": ue(Y),
            onSuggestionClicked: H[1] || (H[1] = (L) => Ge(L))
          }, null, 8, ["card-title", "suggestions", "selected-item"])) : oe.value ? (js(), Om(zm, {
            key: 1,
            "card-title": U.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: K.value,
            onSuggestionClicked: H[2] || (H[2] = (L) => Ge(L))
          }, null, 8, ["card-title", "suggestions"])) : mc((js(), hc("p", bB, null, 512)), [
            [v, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        mc(qt(nB, {
          "search-input": t.value,
          "selected-item": ue(Y),
          onSuggestionClicked: H[3] || (H[3] = (L) => Ge(L))
        }, null, 8, ["search-input", "selected-item"]), [
          [SB, !!t.value]
        ]),
        qt(ue(St), {
          value: s.value,
          "onUpdate:value": H[4] || (H[4] = (L) => s.value = L),
          class: "sx-article-search-language-selector",
          fullscreen: be.value,
          header: be.value,
          title: U.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: E
        }, {
          default: Os(() => [
            qt(ue(hf), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: ue(d),
              suggestions: ue(g),
              placeholder: U.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: M,
              onClose: E
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ], 40, yB);
    };
  }
};
const BB = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: TB
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.mobile })
  }
}, PB = window.Vue.resolveComponent, FB = window.Vue.createVNode, MB = window.Vue.normalizeClass, NB = window.Vue.openBlock, UB = window.Vue.createElementBlock;
function IB(e, t, n, o, s, a) {
  const r = PB("sx-article-search");
  return NB(), UB("main", {
    class: MB(["sx-article-search-view", a.classes])
  }, [
    FB(r)
  ], 2);
}
const RB = /* @__PURE__ */ ne(BB, [["render", IB]]), zB = () => {
  const e = ga(), t = uu(), { logDashboardOpenEvent: n, getEventSource: o } = Sf(), {
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
}, OB = window.Vuex.useStore, jB = [
  {
    path: "",
    name: "dashboard",
    component: zg,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: RB,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: X4,
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: r3,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: b5,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: _T,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: zD,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: o6,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: z9,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: zg,
    meta: { workflowStep: 0 }
  }
], mu = Zb({
  history: Qx(),
  routes: jB
}), fc = (e, t, n) => {
  e === t ? n() : n({ name: t });
}, HB = (e, t, n) => {
  let o = "cx_" + btoa(
    encodeURIComponent([n, e, t].join("_"))
  );
  return o = o.replace(/[()<>@,;\\[\]?={}]/g, ""), mw.cookie.get(o, "");
};
mu.beforeEach((e, t, n) => {
  const o = OB();
  if (mw.user.isAnon() || Km.assertUser().catch((i) => {
    i instanceof Uo && o.commit("application/setIsLoginDialogOn", !0);
  }), o.commit("application/setPreviousRoute", t.name), t.name) {
    n();
    return;
  }
  const s = zB(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: c,
    clearTranslationURLParameters: u
  } = T();
  if (!!(a.value && r.value && c.value)) {
    if (HB(
      a.value,
      r.value,
      c.value
    )) {
      const l = e.name === "sx-quick-tutorial" ? "sx-quick-tutorial" : "sx-sentence-selector";
      fc(e.name, l, n);
    } else
      e.name === "sx-translation-confirmer" && s(), fc(e.name, "sx-translation-confirmer", n);
    return;
  }
  u(), fc(e.name, "dashboard", n);
});
mu.afterEach((e, t) => {
  if (!t.name)
    return;
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const qB = window.Vue.createApp, GB = mw.config.get("wgUserLanguage"), XB = "en", WB = mw.messages.values || {}, Go = qB(zy);
Go.use(mu);
Go.use(Sx);
Go.use(w_);
Go.use(f_);
const KB = Y_({
  locale: GB,
  finalFallback: XB,
  messages: WB,
  wikilinks: !0
});
Go.use(KB);
Go.mount("#contenttranslation");
