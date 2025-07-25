var Qf = Object.defineProperty, Jf = Object.defineProperties;
var Zf = Object.getOwnPropertyDescriptors;
var Eu = Object.getOwnPropertySymbols;
var ew = Object.prototype.hasOwnProperty, tw = Object.prototype.propertyIsEnumerable;
var Lu = (e, t, n) => t in e ? Qf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, de = (e, t) => {
  for (var n in t || (t = {}))
    ew.call(t, n) && Lu(e, n, t[n]);
  if (Eu)
    for (var n of Eu(t))
      tw.call(t, n) && Lu(e, n, t[n]);
  return e;
}, et = (e, t) => Jf(e, Zf(t));
var C = (e, t, n) => new Promise((o, s) => {
  var a = (u) => {
    try {
      l(n.next(u));
    } catch (d) {
      s(d);
    }
  }, r = (u) => {
    try {
      l(n.throw(u));
    } catch (d) {
      s(d);
    }
  }, l = (u) => u.done ? o(u.value) : Promise.resolve(u.value).then(a, r);
  l((n = n.apply(e, t)).next());
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
    CdxMessage: l,
    CdxTabs: u,
    CdxTab: d,
    CdxField: i,
    CdxRadio: c
  } = require("../codex.js");
  window.Codex = {
    CdxButton: e,
    CdxIcon: t,
    CdxDialog: n,
    CdxInfoChip: o,
    CdxSearchInput: s,
    CdxTextInput: a,
    CdxMenu: r,
    CdxMessage: l,
    CdxTabs: u,
    CdxTab: d,
    CdxField: i,
    CdxRadio: c
  };
}
const ce = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, nw = {
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
}, ow = window.Vue.toDisplayString, lr = window.Vue.openBlock, cr = window.Vue.createElementBlock, sw = window.Vue.createCommentVNode, Au = window.Vue.createElementVNode, aw = window.Vue.normalizeClass, iw = ["width", "height", "aria-labelledby"], rw = ["id"], lw = ["fill"], cw = ["d"];
function uw(e, t, n, o, s, a) {
  return lr(), cr("span", {
    class: aw(["mw-ui-icon notranslate", a.classes])
  }, [
    (lr(), cr("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...r) => a.handleClick && a.handleClick(...r))
    }, [
      n.iconName ? (lr(), cr("title", {
        key: 0,
        id: n.iconName
      }, ow(n.iconName), 9, rw)) : sw("", !0),
      Au("g", { fill: n.iconColor }, [
        Au("path", { d: a.iconImagePath }, null, 8, cw)
      ], 8, lw)
    ], 8, iw))
  ], 2);
}
const Je = /* @__PURE__ */ ce(nw, [["render", uw]]);
const dw = {
  name: "MwButton",
  components: {
    MwIcon: Je
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
}, gw = window.Vue.renderSlot, pw = window.Vue.resolveComponent, Du = window.Vue.normalizeClass, ya = window.Vue.openBlock, ur = window.Vue.createBlock, dr = window.Vue.createCommentVNode, hw = window.Vue.toDisplayString, fw = window.Vue.createElementBlock, ww = window.Vue.toHandlerKey, vw = window.Vue.withModifiers, _w = window.Vue.mergeProps, Sw = window.Vue.createElementVNode, yw = window.Vue.resolveDynamicComponent, xw = window.Vue.withCtx, Cw = { class: "mw-ui-button__content" }, bw = ["textContent"];
function kw(e, t, n, o, s, a) {
  const r = pw("mw-icon");
  return ya(), ur(yw(a.component), {
    class: Du(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: xw(() => [
      gw(e.$slots, "default", {}, () => [
        Sw("span", Cw, [
          n.icon ? (ya(), ur(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: Du(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : dr("", !0),
          !a.isIcon && n.label ? (ya(), fw("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: hw(n.label)
          }, null, 8, bw)) : dr("", !0),
          n.indicator ? (ya(), ur(r, _w({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [ww(a.indicatorClickEvent)]: t[0] || (t[0] = vw((l) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : dr("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const qe = /* @__PURE__ */ ce(dw, [["render", kw]]);
const $w = {
  name: "MwButtonGroup",
  components: {
    MwButton: qe
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
}, Vw = window.Vue.renderList, Ew = window.Vue.Fragment, gr = window.Vue.openBlock, Tu = window.Vue.createElementBlock, Lw = window.Vue.resolveComponent, Aw = window.Vue.withModifiers, Dw = window.Vue.mergeProps, Tw = window.Vue.createBlock, Bw = { class: "row mw-ui-button-group ma-0 pa-0" };
function Pw(e, t, n, o, s, a) {
  const r = Lw("mw-button");
  return gr(), Tu("div", Bw, [
    (gr(!0), Tu(Ew, null, Vw(n.items, (l) => (gr(), Tw(r, Dw({
      key: l.value,
      value: l.value,
      "aria-selected": a.isActive(l) || null,
      ref_for: !0
    }, l.props, {
      class: ["ma-0", a.buttonClasses(l)],
      style: a.activeIndicatorStyle(l),
      onClick: Aw((u) => e.$emit("select", l.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const ua = /* @__PURE__ */ ce($w, [["render", Pw]]);
const Fw = {
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
}, Bu = window.Vue.renderSlot, Nw = window.Vue.toDisplayString, Pu = window.Vue.openBlock, Fu = window.Vue.createElementBlock, Mw = window.Vue.createCommentVNode, Uw = window.Vue.createElementVNode, Iw = { class: "mw-ui-card" }, Rw = ["textContent"], zw = { class: "mw-ui-card__content" };
function Ow(e, t, n, o, s, a) {
  return Pu(), Fu("div", Iw, [
    Bu(e.$slots, "header", {}, () => [
      n.title ? (Pu(), Fu("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: Nw(n.title)
      }, null, 8, Rw)) : Mw("", !0)
    ]),
    Uw("div", zw, [
      Bu(e.$slots, "default")
    ])
  ]);
}
const Qe = /* @__PURE__ */ ce(Fw, [["render", Ow]]);
const jw = {}, Hw = window.Vue.openBlock, qw = window.Vue.createElementBlock, Gw = { class: "mw-ui-divider row" };
function Xw(e, t) {
  return Hw(), qw("div", Gw);
}
const Ui = /* @__PURE__ */ ce(jw, [["render", Xw]]);
const Ww = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, Kw = window.Vue.renderSlot, Yw = window.Vue.resolveDynamicComponent, Qw = window.Vue.withCtx, Jw = window.Vue.openBlock, Zw = window.Vue.createBlock;
function e0(e, t, n, o, s, a) {
  return Jw(), Zw(Yw(n.tag), { class: "mw-grid container" }, {
    default: Qw(() => [
      Kw(e.$slots, "default")
    ]),
    _: 3
  });
}
const t0 = /* @__PURE__ */ ce(Ww, [["render", e0]]), n0 = {
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
}, o0 = window.Vue.renderSlot, s0 = window.Vue.resolveDynamicComponent, a0 = window.Vue.normalizeClass, i0 = window.Vue.withCtx, r0 = window.Vue.openBlock, l0 = window.Vue.createBlock;
function c0(e, t, n, o, s, a) {
  return r0(), l0(s0(n.tag), {
    class: a0(a.classes)
  }, {
    default: i0(() => [
      o0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const N = /* @__PURE__ */ ce(n0, [["render", c0]]), Vc = ["mobile", "tablet", "desktop", "desktop-wide"], u0 = Vc.reduce(
  (e, t) => et(de({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), d0 = {
  name: "MwCol",
  props: et(de({}, u0), {
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
      for (let n = 0; n < Vc.length; n++) {
        let o = Vc[n], s = this.$props[o];
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
}, g0 = window.Vue.renderSlot, p0 = window.Vue.resolveDynamicComponent, m0 = window.Vue.normalizeClass, h0 = window.Vue.withCtx, f0 = window.Vue.openBlock, w0 = window.Vue.createBlock;
function v0(e, t, n, o, s, a) {
  return f0(), w0(p0(n.tag), {
    class: m0(a.classes)
  }, {
    default: h0(() => [
      g0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const k = /* @__PURE__ */ ce(d0, [["render", v0]]), _0 = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", S0 = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", Ii = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", y0 = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, x0 = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", ah = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", C0 = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", b0 = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", Ri = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", k0 = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", $0 = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", V0 = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", Nu = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", E0 = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", ih = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", L0 = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", A0 = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", D0 = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", T0 = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", B0 = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", Ec = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, P0 = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, F0 = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, rh = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", N0 = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z";
const pr = window.Vue.computed, M0 = window.Vue.watch, U0 = window.Vue.ref, I0 = window.Vue.nextTick, R0 = {
  name: "MwDialog",
  components: {
    MwButton: qe,
    MwRow: N,
    MwCol: k,
    MwDivider: Ui
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
    const n = U0(null), o = pr(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = pr(
      () => `mw-ui-dialog__overlay--${e.overlayMode}`
    ), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, r = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    M0(
      () => e.value,
      (u) => {
        u ? (r(), I0(() => {
          n.value.focus();
        })) : a();
      }
    );
    const l = pr(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: l,
      overlayClass: s,
      mwIconClose: Ri,
      root: n
    };
  }
}, Mu = window.Vue.normalizeClass, mr = window.Vue.createElementVNode, hr = window.Vue.renderSlot, xa = window.Vue.resolveComponent, ss = window.Vue.createVNode, fr = window.Vue.withCtx, Uu = window.Vue.createCommentVNode, z0 = window.Vue.withKeys, Iu = window.Vue.openBlock, O0 = window.Vue.createElementBlock, j0 = window.Vue.Transition, H0 = window.Vue.normalizeStyle, q0 = window.Vue.createBlock, G0 = { class: "mw-ui-dialog__shell items-stretch" }, X0 = { class: "mw-ui-dialog__body" };
function W0(e, t, n, o, s, a) {
  const r = xa("mw-col"), l = xa("mw-button"), u = xa("mw-row"), d = xa("mw-divider");
  return Iu(), q0(j0, {
    name: "mw-ui-animation-fade",
    style: H0(o.cssVars)
  }, {
    default: fr(() => [
      n.value ? (Iu(), O0("div", {
        key: 0,
        ref: "root",
        class: Mu(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = z0((i) => n.closeOnEscapeKey && o.close(), ["esc"]))
      }, [
        mr("div", {
          class: Mu(["mw-ui-dialog__overlay", o.overlayClass]),
          onClick: t[0] || (t[0] = (i) => !n.persistent && o.close())
        }, null, 2),
        mr("div", G0, [
          n.header ? hr(e.$slots, "header", { key: 0 }, () => [
            ss(u, { class: "mw-ui-dialog__header" }, {
              default: fr(() => [
                ss(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                ss(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: fr(() => [
                    ss(l, {
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
            ss(d)
          ]) : Uu("", !0),
          mr("div", X0, [
            hr(e.$slots, "default")
          ]),
          hr(e.$slots, "footer")
        ])
      ], 34)) : Uu("", !0)
    ]),
    _: 3
  }, 8, ["style"]);
}
const St = /* @__PURE__ */ ce(R0, [["render", W0]]);
const K0 = {
  name: "MwInput",
  components: {
    MwIcon: Je
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
}, Ru = window.Vue.renderSlot, Y0 = window.Vue.resolveComponent, Ca = window.Vue.openBlock, wr = window.Vue.createBlock, zu = window.Vue.createCommentVNode, Q0 = window.Vue.resolveDynamicComponent, J0 = window.Vue.toDisplayString, Z0 = window.Vue.mergeProps, e1 = window.Vue.withModifiers, t1 = window.Vue.createElementVNode, n1 = window.Vue.normalizeClass, o1 = window.Vue.createElementBlock, s1 = { class: "mw-ui-input__content" };
function a1(e, t, n, o, s, a) {
  const r = Y0("mw-icon");
  return Ca(), o1("div", {
    class: n1(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    t1("div", s1, [
      Ru(e.$slots, "icon", {}, () => [
        n.icon ? (Ca(), wr(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : zu("", !0)
      ]),
      (Ca(), wr(Q0(n.type === "textarea" ? n.type : "input"), Z0({
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
        textContent: J0(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      Ru(e.$slots, "indicator", {}, () => [
        n.indicator ? (Ca(), wr(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = e1((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : zu("", !0)
      ])
    ])
  ], 2);
}
const Lc = /* @__PURE__ */ ce(K0, [["render", a1]]);
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
const i1 = {}, r1 = window.Vue.createElementVNode, l1 = window.Vue.openBlock, c1 = window.Vue.createElementBlock, u1 = { class: "mw-ui-spinner" }, d1 = /* @__PURE__ */ r1("div", { class: "mw-ui-spinner__bounce" }, null, -1), g1 = [
  d1
];
function p1(e, t) {
  return l1(), c1("div", u1, g1);
}
const lt = /* @__PURE__ */ ce(i1, [["render", p1]]), wt = {
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
const m1 = window.Vue.computed, h1 = {
  name: "MwUiThumbnail",
  components: { MwUiIcon: Je },
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
      default: rh
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
    const n = m1(() => {
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
}, Ou = window.Vue.normalizeStyle, ju = window.Vue.openBlock, f1 = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const w1 = window.Vue.resolveComponent, v1 = window.Vue.createBlock;
function _1(e, t, n, o, s, a) {
  const r = w1("mw-ui-icon");
  return n.thumbnail ? (ju(), f1("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Ou(o.style)
  }, null, 4)) : (ju(), v1(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Ou(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Hc = /* @__PURE__ */ ce(h1, [["render", _1]]);
window.Vue.vModelRadio;
window.Vue.createElementVNode;
window.Vue.withDirectives;
window.Vue.toDisplayString;
window.Vue.resolveComponent;
window.Vue.normalizeClass;
window.Vue.withCtx;
window.Vue.openBlock;
window.Vue.createBlock;
window.Vue.h;
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
}, Hu = window.Vue.normalizeClass, qu = window.Vue.normalizeStyle, y1 = window.Vue.createElementVNode, x1 = window.Vue.openBlock, C1 = window.Vue.createElementBlock, b1 = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function k1(e, t, n, o, s, a) {
  return x1(), C1("div", {
    class: Hu(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: qu(a.containerStyles)
  }, [
    y1("div", {
      class: Hu(["mw-progress-bar__bar", a.barClass]),
      style: qu(a.barStyles)
    }, null, 6)
  ], 14, b1);
}
const lh = /* @__PURE__ */ ce(S1, [["render", k1]]), $1 = (e, t, n, o) => (s) => {
  const a = s.clientY, r = parseInt(
    document.defaultView.getComputedStyle(n.value).height,
    10
  ), l = (d) => {
    o.value = !1;
    let i = Math.min(
      r + d.clientY - a,
      e.value
    );
    i = Math.max(i, t.value), n.value.style.height = i + "px";
  }, u = () => {
    n.value.style.height === t.value + "px" && (n.value.style.removeProperty("height"), o.value = !0), document.documentElement.removeEventListener(
      "pointermove",
      l,
      !1
    ), document.documentElement.removeEventListener(
      "pointerup",
      u,
      !1
    );
  };
  document.documentElement.addEventListener("pointermove", l, !1), document.documentElement.addEventListener("pointerup", u, !1);
}, V1 = (e, t, n, o) => ({ initiateDrag: $1(
  e,
  t,
  n,
  o
) }), E1 = window.Vue.ref, Gu = window.Vue.computed, L1 = (e, t, n, o) => {
  const s = E1(0), a = Gu(
    () => t.value > e.value
  ), r = Gu(
    () => t.value <= e.value * (s.value + 1)
  ), l = (d) => {
    s.value = d, n.value.scroll(0, e.value * s.value);
  };
  return {
    handleArrowUpClick: () => {
      if (!o.value) {
        n.value.style.removeProperty("height"), o.value = !0, l(0);
        return;
      }
      l(s.value - 1);
    },
    isScrolledToEnd: r,
    scrollToStepByIndex: l,
    scrollable: a,
    scrollIndex: s
  };
};
const ba = window.Vue.ref, A1 = window.Vue.onMounted, Xu = window.Vue.computed, D1 = window.Vue.nextTick, T1 = {
  name: "MwExpandableContent",
  components: {
    MwButton: qe
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
    const t = ba(!0), n = ba(null), o = Xu(
      () => Math.min(e.minHeight, s.value)
    ), s = ba(1), { initiateDrag: a } = V1(
      s,
      o,
      n,
      t
    ), {
      isScrolledToEnd: r,
      scrollable: l,
      scrollIndex: u,
      scrollToStepByIndex: d,
      handleArrowUpClick: i
    } = L1(o, s, n, t), c = () => d(u.value + 1), g = ba(null), p = Xu(() => ({
      "--collapsed-height": o.value + "px"
    })), m = () => {
      if (!n.value)
        return;
      const f = n.value.style.height;
      if (n.value.style.removeProperty("height"), s.value = n.value.scrollHeight, f) {
        let w = Math.min(f, s.value);
        w = Math.max(w, o.value), w === o.value && (t.value = !0), n.value.style.height = w + "px";
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
      mwIconCollapse: F0,
      mwIconExpand: C0,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), d(0)), t.value = !t.value;
      },
      scrollable: l,
      scrollIndex: u,
      scrollToNextStep: c
    };
  }
}, B1 = window.Vue.renderSlot, P1 = window.Vue.normalizeClass, ka = window.Vue.createElementVNode, F1 = window.Vue.resolveComponent, N1 = window.Vue.createVNode, vr = window.Vue.openBlock, M1 = window.Vue.createBlock, Wu = window.Vue.createCommentVNode, Ku = window.Vue.createElementBlock, U1 = window.Vue.normalizeStyle, I1 = { class: "mw-ui-expandable-content__container" }, R1 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, z1 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function O1(e, t, n, o, s, a) {
  const r = F1("mw-button");
  return vr(), Ku("div", {
    class: "mw-ui-expandable-content",
    style: U1(o.cssVars)
  }, [
    ka("div", I1, [
      ka("div", {
        ref: "contentRef",
        class: P1(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        B1(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (vr(), Ku("div", R1, [
        N1(r, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (vr(), M1(r, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : Wu("", !0)
      ])) : Wu("", !0)
    ]),
    ka("div", z1, [
      ka("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...l) => o.onDragButtonClicked && o.onDragButtonClicked(...l))
      })
    ], 512)
  ], 4);
}
const j1 = /* @__PURE__ */ ce(T1, [["render", O1]]);
const $a = window.Vue.computed, H1 = {
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
    const t = $a(() => e.size / 2 * 0.9), n = $a(() => Math.PI * (t.value * 2)), o = $a(
      () => (100 - e.percentage) / 100 * n.value
    ), s = $a(() => ({
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
}, Yu = window.Vue.createElementVNode, Qu = window.Vue.normalizeStyle, q1 = window.Vue.openBlock, G1 = window.Vue.createElementBlock, X1 = ["width", "height", "viewport"], W1 = ["r", "cx", "cy", "stroke-dasharray"], K1 = ["r", "cx", "cy", "stroke-dasharray"];
function Y1(e, t, n, o, s, a) {
  return q1(), G1("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: Qu(o.cssVars)
  }, [
    Yu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, W1),
    Yu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: Qu({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, K1)
  ], 12, X1);
}
const Q1 = /* @__PURE__ */ ce(H1, [["render", Y1]]), J1 = window.Vue.ref, hn = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, xn = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${hn.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${hn.tablet}px) and (max-width: ${hn.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${hn.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${hn.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${hn["desktop-wide"] - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${hn.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${hn["desktop-wide"]}px)`
}, _r = {
  mobile: () => matchMedia(xn.mobile).matches,
  tablet: () => matchMedia(xn.tablet).matches,
  desktop: () => matchMedia(xn.desktop).matches,
  desktopwide: () => matchMedia(xn["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(xn["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(xn["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(xn["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(xn["desktop-and-down"]).matches
}, Z1 = (e) => {
  const t = Object.values(hn);
  for (let n = 0; n < t.length; n++)
    if (e < t[n])
      return t[n];
  return null;
}, ev = {
  install: (e) => {
    const t = J1({
      nextBreakpoint: null
    }), n = () => {
      const o = window.innerWidth;
      for (let s in _r)
        _r.hasOwnProperty(s) && (t.value[s] = _r[s]());
      t.value.nextBreakpoint = Z1(o);
    };
    n(), window.addEventListener("resize", n), e.config.globalProperties.$mwui = et(de({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: t.value
    }), e.provide("breakpoints", t);
  }
}, tv = {
  install: (e) => {
    e.config.globalProperties.$mwui = et(de({}, e.config.globalProperties.$mwui || {}), {
      colors: wt
    }), e.provide("colors", wt);
  }
};
class Go extends Error {
}
const nv = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new Go();
}), ch = { assertUser: nv };
const ov = window.Vue.resolveDirective, as = window.Vue.createElementVNode, Ju = window.Vue.withDirectives, sv = window.Vue.toDisplayString, av = window.Vue.unref, Zu = window.Vue.withCtx, iv = window.Vue.openBlock, rv = window.Vue.createBlock, lv = window.Vue.createCommentVNode, cv = { class: "pa-4 sx-login-dialog__header" }, uv = { class: "sx-login-dialog__body px-6 pb-4" }, dv = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, gv = ["href"], pv = window.Vue.computed, mv = window.Vue.ref, hv = window.Vuex.useStore, fv = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = hv(), n = pv(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = mv(mw.util.getUrl("Special:UserLogin"));
    return (a, r) => {
      const l = ov("i18n");
      return n.value ? (iv(), rv(av(St), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: Zu(() => [
          as("div", cv, [
            Ju(as("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: Zu(() => [
          Ju(as("div", uv, null, 512), [
            [l, void 0, "cx-sx-login-dialog-body"]
          ]),
          as("div", dv, [
            as("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, sv(a.$i18n("cx-sx-login-dialog-button-label")), 9, gv)
          ])
        ]),
        _: 1
      })) : lv("", !0);
    };
  }
}, K = new mw.cx.SiteMapper(), wv = mw.util.getUrl, vv = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
}, Xo = !mw.config.get("wgMFMode");
class qc {
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
    pageRevision: l,
    status: u,
    targetTitle: d
  }) {
    this.translationId = t, this.sourceTitle = n, this.sourceLanguage = o, this.targetLanguage = s, this.startTimestamp = a, this.lastUpdatedTimestamp = r, this.pageRevision = l, this.status = u, this.targetTitle = d;
  }
}
const Va = "original", Ea = "empty", _v = {
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
      Va,
      Ea
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return _v[t] || t;
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
    return Va;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return Ea;
  }
  static isUserMTProvider(t) {
    return [Va, Ea].includes(
      t
    );
  }
  static getProviderForInstrumentation(t) {
    return t === Ea ? "blank" : t === Va ? "source" : t.toLowerCase();
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = et(de({}, a), {
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
const ed = (e) => {
  var n;
  const t = Fi(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, Fi = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, so = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), uh = (e) => {
  const t = Fi(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = Sv(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, Sv = (e) => {
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
      let l = !0;
      r[0] === "<nowiki>" ? (o = !0, l = !1) : r[0] === "</nowiki>" || r[0].match(/<nowiki\s*\/>/) ? l = !1 : r[0].match(/(?:\[\[)/) ? (a++, l = !1) : r[0].match(/(?:\]\])/) ? a > 0 && (a--, l = !1) : r[0].match(/(?:\{\{)/) ? (s++, l = !1) : r[0].match(/(?:\}\})/) ? s > 0 && (s--, l = !1) : r[0].match(/\|+/) && (s > 0 || a > 0) && (l = !1), l ? n += "<nowiki>" + r[0] + "</nowiki>" : n += r[0];
    }
  }
  return n;
}, dh = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, gh = (e) => {
  const t = dh(e);
  return t == null ? void 0 : t.targetExists;
};
class Sr {
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
class rt {
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
      (a) => so(a)
    );
    s && gh(s) && (this.blockTemplateAdaptationInfo[t] = dh(s));
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
      (t) => so(t)
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
    const t = Fi(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? ed(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => so(o));
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
    return n && ed(n) || "";
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
    const o = Fi(n);
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
      (a) => so(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new Sr({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new Sr({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new Sr({
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
        (s) => so(s)
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
const Gc = mw.config.get(
  "wgContentTranslationUnmodifiedMTThresholdForPublish",
  95
), yv = Gc - 10, xv = [
  { status: "failure", value: 100 - Gc },
  { status: "warning", value: 100 - yv },
  { status: "success", value: 100 }
], ph = (e, t, n) => {
  const o = td(e).textContent, s = td(t).textContent, a = 100 - 100 * mw.cx.calculateUnmodifiedContent(s, o, n);
  return Math.ceil(a);
}, Cv = (e) => xv.find((t) => e <= t.value).status, bv = (e, t) => ph(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), kv = () => (100 - Gc) / 100, td = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, Qt = {
  calculateScore: ph,
  getScoreStatus: Cv,
  getMTScoreForPageSection: bv,
  getMtModificationThreshold: kv
}, La = "__LEAD_SECTION__";
class Oo {
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
    return La;
  }
  static isSectionLead(t) {
    return !t || t === La;
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
      let l = "";
      r && (l = r.innerHTML), a.editedTranslation = l;
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
    return n instanceof rt ? n.transclusionNode.outerHTML : n instanceof Mn ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof rt ? t.blockTemplateSelected = !1 : t instanceof Mn && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof rt ? n.blockTemplateSelected = !0 : n instanceof Mn && (n.selected = !0);
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
    if (o instanceof rt)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof rt ? n.blockTemplateProposedTranslations[t] || "" : n instanceof Mn ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof rt ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof Mn && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
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
    return this.isLeadSection ? La : this.originalTitle;
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
    return this.isLeadSection ? La : this.title;
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
class zi extends qc {
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
    startTimestamp: l,
    lastUpdatedTimestamp: u,
    status: d,
    pageRevision: i,
    targetTitle: c,
    sourceSectionTitle: g,
    targetSectionTitle: p,
    progress: m
  }) {
    super({
      translationId: n,
      sourceTitle: s,
      sourceLanguage: a,
      targetLanguage: r,
      startTimestamp: l,
      lastUpdatedTimestamp: u,
      pageRevision: i,
      status: d,
      targetTitle: c
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
    return Oo.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? Oo.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const Jt = "previous-edits", vn = "popular", Ge = "topic", Ve = "geography", ee = "collections", Ye = "automatic", vt = "seed", nd = window.Vue.ref, { topics: $v, regions: Vv } = mw.loader.require(
  "ext.cx.articlefilters"
), Aa = {
  type: Ye,
  id: Jt
}, Xc = () => {
  const e = nd(
    $v.flatMap((l) => l.topics).map((l) => l.topicId.toLowerCase())
  ), t = nd(!1), n = (l, u) => e.value.includes(u) ? { type: Ge, id: u } : null, o = (l, u) => Vv.some(
    (i) => i.id.toLowerCase() === u || i.countries.some(
      (c) => c.id.toLowerCase() === u
    )
  ) ? { type: Ve, id: u } : null, s = (l, u, d) => d && !d.some((i) => i.name.toLowerCase() === u) ? null : { type: ee, id: l };
  return { filtersValidatorError: t, validateFilters: ({ type: l, id: u }, d = !1) => {
    t.value = !1;
    const i = l == null ? void 0 : l.toLowerCase(), c = u == null ? void 0 : u.toLowerCase();
    if (c === Jt)
      return {
        type: Ye,
        id: Jt
      };
    if (c === vn)
      return {
        type: Ye,
        id: vn
      };
    if (c === ee)
      return d && !d.length ? (t.value = !0, Aa) : {
        type: Ye,
        id: ee
      };
    if (i === Ge) {
      const g = n(u, c);
      if (g)
        return g;
      t.value = !0;
    } else if (i === Ve) {
      const g = o(u, c);
      if (g)
        return g;
      t.value = !0;
    } else if (i === ee) {
      const g = s(
        u,
        c,
        d
      );
      if (g)
        return g;
      t.value = !0;
    } else if (i === vt)
      return { type: vt, id: u };
    return Aa;
  }, isDefaultFilter: ({ type: l, id: u }) => l === Aa.type && u === Aa.id };
}, Ev = window.Vue.inject, Lv = window.Vue.reactive;
var Av = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, mh = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(Av, function() {
    var n = { ar: "٠١٢٣٤٥٦٧٨٩", fa: "۰۱۲۳۴۵۶۷۸۹", ml: "൦൧൨൩൪൫൬൭൮൯", kn: "೦೧೨೩೪೫೬೭೮೯", lo: "໐໑໒໓໔໕໖໗໘໙", or: "୦୧୨୩୪୫୬୭୮୯", kh: "០១២៣៤៥៦៧៨៩", nqo: "߀߁߂߃߄߅߆߇߈߉", pa: "੦੧੨੩੪੫੬੭੮੯", gu: "૦૧૨૩૪૫૬૭૮૯", hi: "०१२३४५६७८९", my: "၀၁၂၃၄၅၆၇၈၉", ta: "௦௧௨௩௪௫௬௭௮௯", te: "౦౧౨౩౪౫౬౭౮౯", th: "๐๑๒๓๔๕๖๗๘๙", bo: "༠༡༢༣༤༥༦༧༨༩" }, o = { ab: ["ru"], abs: ["id"], ace: ["id"], ady: ["ady-cyrl"], aeb: ["aeb-arab"], "aeb-arab": ["ar"], aln: ["sq"], alt: ["ru"], ami: ["zh-hant"], an: ["es"], anp: ["hi"], arn: ["es"], arq: ["ar"], ary: ["ar"], arz: ["ar"], ast: ["es"], atj: ["fr"], av: ["ru"], avk: ["fr", "es", "ru"], awa: ["hi"], ay: ["es"], azb: ["fa"], ba: ["ru"], ban: ["id"], "ban-bali": ["ban"], bar: ["de"], bbc: ["bbc-latn"], "bbc-latn": ["id"], bcc: ["fa"], "be-tarask": ["be"], bgn: ["fa"], bh: ["bho"], bi: ["en"], bjn: ["id"], bm: ["fr"], bpy: ["bn"], bqi: ["fa"], br: ["fr"], btm: ["id"], bug: ["id"], bxr: ["ru"], ca: ["oc"], "cbk-zam": ["es"], cdo: ["nan", "zh-hant"], ce: ["ru"], co: ["it"], crh: ["crh-latn"], "crh-cyrl": ["ru"], cs: ["sk"], csb: ["pl"], cv: ["ru"], "de-at": ["de"], "de-ch": ["de"], "de-formal": ["de"], dsb: ["hsb", "de"], dtp: ["ms"], dty: ["ne"], egl: ["it"], eml: ["it"], "en-ca": ["en"], "en-gb": ["en"], "es-419": ["es"], "es-formal": ["es"], ext: ["es"], ff: ["fr"], fit: ["fi"], frc: ["fr"], frp: ["fr"], frr: ["de"], fur: ["it"], gag: ["tr"], gan: ["gan-hant", "zh-hant", "zh-hans"], "gan-hans": ["zh-hans"], "gan-hant": ["zh-hant", "zh-hans"], gcr: ["fr"], gl: ["pt"], glk: ["fa"], gn: ["es"], gom: ["gom-deva"], "gom-deva": ["hi"], gor: ["id"], gsw: ["de"], guc: ["es"], hak: ["zh-hant"], hif: ["hif-latn"], hrx: ["de"], hsb: ["dsb", "de"], ht: ["fr"], "hu-formal": ["hu"], hyw: ["hy"], ii: ["zh-cn", "zh-hans"], inh: ["ru"], io: ["eo"], iu: ["ike-cans"], jam: ["en"], jut: ["da"], jv: ["id"], kaa: ["kk-latn", "kk-cyrl"], kab: ["fr"], kbd: ["kbd-cyrl"], kbp: ["fr"], khw: ["ur"], kiu: ["tr"], kjp: ["my"], kk: ["kk-cyrl"], "kk-arab": ["kk-cyrl"], "kk-cn": ["kk-arab", "kk-cyrl"], "kk-kz": ["kk-cyrl"], "kk-latn": ["kk-cyrl"], "kk-tr": ["kk-latn", "kk-cyrl"], kl: ["da"], "ko-kp": ["ko"], koi: ["ru"], krc: ["ru"], krl: ["fi"], ks: ["ks-arab"], ksh: ["de"], ku: ["ku-latn"], "ku-arab": ["ckb"], kum: ["ru"], kv: ["ru"], lad: ["es"], lb: ["de"], lbe: ["ru"], lez: ["ru", "az"], li: ["nl"], lij: ["it"], liv: ["et"], lki: ["fa"], lld: ["it", "rm", "fur"], lmo: ["pms", "eml", "lij", "vec", "it"], ln: ["fr"], lrc: ["fa"], ltg: ["lv"], luz: ["fa"], lzh: ["zh-hant"], lzz: ["tr"], mad: ["id"], mai: ["hi"], "map-bms": ["jv", "id"], mdf: ["myv", "ru"], mg: ["fr"], mhr: ["mrj", "ru"], min: ["id"], mnw: ["my"], mo: ["ro"], mrj: ["mhr", "ru"], "ms-arab": ["ms"], mwl: ["pt"], myv: ["mdf", "ru"], mzn: ["fa"], nah: ["es"], nan: ["cdo", "zh-hant"], nap: ["it"], nb: ["nn"], nds: ["de"], "nds-nl": ["nl"], nia: ["id"], "nl-informal": ["nl"], nn: ["nb"], nrm: ["fr"], oc: ["ca", "fr"], olo: ["fi"], os: ["ru"], pcd: ["fr"], pdc: ["de"], pdt: ["de"], pfl: ["de"], pih: ["en"], pms: ["it"], pnt: ["el"], pt: ["pt-br"], "pt-br": ["pt"], qu: ["qug", "es"], qug: ["qu", "es"], rgn: ["it"], rmy: ["ro"], "roa-tara": ["it"], rue: ["uk", "ru"], rup: ["ro"], ruq: ["ruq-latn", "ro"], "ruq-cyrl": ["mk"], "ruq-latn": ["ro"], sa: ["hi"], sah: ["ru"], scn: ["it"], sco: ["en"], sdc: ["it"], sdh: ["cbk", "fa"], ses: ["fr"], sg: ["fr"], sgs: ["lt"], sh: ["bs", "sr-el", "hr"], shi: ["fr"], shy: ["shy-latn"], "shy-latn": ["fr"], sk: ["cs"], skr: ["skr-arab"], "skr-arab": ["ur", "pnb"], sli: ["de"], smn: ["fi"], sr: ["sr-ec"], srn: ["nl"], stq: ["de"], sty: ["ru"], su: ["id"], szl: ["pl"], szy: ["zh-tw", "zh-hant", "zh-hans"], tay: ["zh-tw", "zh-hant", "zh-hans"], tcy: ["kn"], tet: ["pt"], tg: ["tg-cyrl"], trv: ["zh-tw", "zh-hant", "zh-hans"], tt: ["tt-cyrl", "ru"], "tt-cyrl": ["ru"], ty: ["fr"], tyv: ["ru"], udm: ["ru"], ug: ["ug-arab"], vec: ["it"], vep: ["et"], vls: ["nl"], vmf: ["de"], vot: ["fi"], vro: ["et"], wa: ["fr"], wo: ["fr"], wuu: ["zh-hans"], xal: ["ru"], xmf: ["ka"], yi: ["he"], za: ["zh-hans"], zea: ["nl"], zgh: ["kab"], zh: ["zh-hans"], "zh-cn": ["zh-hans"], "zh-hant": ["zh-hans"], "zh-hk": ["zh-hant", "zh-hans"], "zh-mo": ["zh-hk", "zh-hant", "zh-hans"], "zh-my": ["zh-sg", "zh-hans"], "zh-sg": ["zh-hans"], "zh-tw": ["zh-hant", "zh-hans"] };
    class s {
      constructor(c) {
        this.locale = c;
      }
      convertPlural(c, g) {
        const p = /\d+=/i;
        if (!g || g.length === 0)
          return "";
        for (let h = 0; h < g.length; h++) {
          const f = g[h];
          if (p.test(f)) {
            if (parseInt(f.slice(0, f.indexOf("=")), 10) === c)
              return f.slice(f.indexOf("=") + 1);
            g[h] = void 0;
          }
        }
        g = g.filter((h) => !!h);
        let m = this.getPluralForm(c, this.locale);
        return m = Math.min(m, g.length - 1), g[m];
      }
      getPluralForm(c, g) {
        const p = new Intl.PluralRules(g), m = p.resolvedOptions().pluralCategories, h = p.select(c);
        return ["zero", "one", "two", "few", "many", "other"].filter((f) => m.includes(f)).indexOf(h);
      }
      convertNumber(c, g = !1) {
        let p = this.digitTransformTable(this.locale), m = "";
        if (g) {
          if (parseFloat(c, 10) === c || !p)
            return c;
          const h = [];
          for (const w in p)
            h[p[w]] = w;
          p = h;
          const f = String(c);
          for (let w = 0; w < f.length; w++)
            m += p[f[w]] || f[w];
          return parseFloat(m, 10);
        }
        if (Intl.NumberFormat) {
          let h;
          const f = [...o[this.locale] || [], "en"];
          return h = Intl.NumberFormat.supportedLocalesOf(this.locale).length ? [this.locale] : f, m = new Intl.NumberFormat(h).format(c), m === "NaN" && (m = c), m;
        }
      }
      convertGrammar(c, g) {
        return c;
      }
      gender(c, g) {
        if (!g || g.length === 0)
          return "";
        for (; g.length < 2; )
          g.push(g[g.length - 1]);
        return c === "male" ? g[0] : c === "female" ? g[1] : g.length === 3 ? g[2] : g[0];
      }
      digitTransformTable(c) {
        return !!n[c] && n[c].split("");
      }
    }
    var a = { bs: class extends s {
      convertGrammar(i, c) {
        switch (c) {
          case "instrumental":
            i = "s " + i;
            break;
          case "lokativ":
            i = "o " + i;
        }
        return i;
      }
    }, default: s, dsb: class extends s {
      convertGrammar(i, c) {
        switch (c) {
          case "instrumental":
            i = "z " + i;
            break;
          case "lokatiw":
            i = "wo " + i;
        }
        return i;
      }
    }, fi: class extends s {
      convertGrammar(i, c) {
        let g = i.match(/[aou][^äöy]*$/i);
        const p = i;
        switch (i.match(/wiki$/i) && (g = !1), i.match(/[bcdfghjklmnpqrstvwxz]$/i) && (i += "i"), c) {
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
      convertGrammar(i, c) {
        if (c === "ainmlae")
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
      convertGrammar(i, c) {
        switch (c) {
          case "prefixed":
          case "תחילית":
            i.slice(0, 1) === "ו" && i.slice(0, 2) !== "וו" && (i = "ו" + i), i.slice(0, 1) === "ה" && (i = i.slice(1)), (i.slice(0, 1) < "א" || i.slice(0, 1) > "ת") && (i = "־" + i);
        }
        return i;
      }
    }, hsb: class extends s {
      convertGrammar(i, c) {
        switch (c) {
          case "instrumental":
            i = "z " + i;
            break;
          case "lokatiw":
            i = "wo " + i;
        }
        return i;
      }
    }, hu: class extends s {
      convertGrammar(i, c) {
        switch (c) {
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
      convertGrammar(i, c) {
        return c === "genitive" && (i.slice(-1) === "ա" ? i = i.slice(0, -1) + "այի" : i.slice(-1) === "ո" ? i = i.slice(0, -1) + "ոյի" : i.slice(-4) === "գիրք" ? i = i.slice(0, -4) + "գրքի" : i += "ի"), i;
      }
    }, la: class extends s {
      convertGrammar(i, c) {
        switch (c) {
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
      convertGrammar(i, c) {
        let g, p, m, h;
        switch (g = "мæ", p = "", m = "", h = "", i.match(/тæ$/i) ? (i = i.slice(0, -1), g = "æм") : i.match(/[аæеёиоыэюя]$/i) ? p = "й" : i.match(/у$/i) ? i.slice(-2, -1).match(/[аæеёиоыэюя]$/i) || (p = "й") : i.match(/[бвгджзйклмнопрстфхцчшщьъ]$/i) || (m = "-"), c) {
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
      convertGrammar(i, c) {
        return c === "genitive" && (i.slice(-1) === "ь" ? i = i.slice(0, -1) + "я" : i.slice(-2) === "ия" ? i = i.slice(0, -2) + "ии" : i.slice(-2) === "ка" ? i = i.slice(0, -2) + "ки" : i.slice(-2) === "ти" ? i = i.slice(0, -2) + "тей" : i.slice(-2) === "ды" ? i = i.slice(0, -2) + "дов" : i.slice(-3) === "ник" && (i = i.slice(0, -3) + "ника")), i;
      }
    }, sl: class extends s {
      convertGrammar(i, c) {
        switch (c) {
          case "mestnik":
            i = "o " + i;
            break;
          case "orodnik":
            i = "z " + i;
        }
        return i;
      }
    }, uk: class extends s {
      convertGrammar(i, c) {
        switch (c) {
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
    class l {
      constructor(c) {
        this.locale = c, this.language = new (a[c] || a.default)(c);
      }
      emit(c, g) {
        let p, m, h;
        switch (typeof c) {
          case "string":
          case "number":
            p = c;
            break;
          case "object":
            if (m = c.slice(1).map((f) => this.emit(f, g)), h = c[0].toLowerCase(), typeof this[h] != "function")
              throw new Error('unknown operation "' + h + '"');
            p = this[h](m, g);
            break;
          case "undefined":
            p = "";
            break;
          default:
            throw new Error("unexpected type in AST: " + typeof c);
        }
        return p;
      }
      concat(c) {
        let g = "";
        return c.forEach((p) => {
          g += p;
        }), g;
      }
      replace(c, g) {
        const p = parseInt(c[0], 10);
        return p < g.length ? g[p] : "$" + (p + 1);
      }
      plural(c) {
        const g = parseFloat(this.language.convertNumber(c[0], 10)), p = c.slice(1);
        return p.length ? this.language.convertPlural(g, p) : "";
      }
      gender(c) {
        const g = c[0], p = c.slice(1);
        return this.language.gender(g, p);
      }
      grammar(c) {
        const g = c[0], p = c[1];
        return p && g && this.language.convertGrammar(p, g);
      }
      wikilink(c) {
        let g, p = c[0];
        p.charAt(0) === ":" && (p = p.slice(1));
        const m = `./${p}`;
        return g = c.length === 1 ? p : c[1], `<a href="${m}" title="${p}">${g}</a>`;
      }
      extlink(c) {
        if (c.length !== 2)
          throw new Error("Expected two items in the node");
        return `<a href="${c[0]}">${c[1]}</a>`;
      }
      bidi(c) {
        const g = function(p) {
          const m = p.match(r);
          return m ? m[2] === void 0 ? "ltr" : "rtl" : null;
        }(c[0]);
        return g === "ltr" ? "‪" + c[0] + "‬" : g === "rtl" ? "‫" + c[0] + "‬" : c[0];
      }
      formatnum(c) {
        const g = !!c[1] && c[1] === "R", p = c[0];
        return typeof p == "string" || typeof p == "number" ? this.language.convertNumber(p, g) : p;
      }
      htmlattributes(c) {
        const g = {};
        for (let p = 0, m = c.length; p < m; p += 2)
          g[c[p]] = c[p + 1];
        return g;
      }
      htmlelement(c) {
        const g = c.shift(), p = c.shift();
        let m = c, h = "";
        for (const f in p)
          h += ` ${f}="${p[f]}"`;
        return Array.isArray(m) || (m = [m]), `<${g}${h}>${m.join("")}</${g}>`;
      }
    }
    class u {
      constructor(c, { wikilinks: g = !1 } = {}) {
        this.locale = c, this.wikilinks = g, this.emitter = new l(this.locale);
      }
      parse(c, g) {
        if (c.includes("{{") || c.includes("<") || this.wikilinks && c.includes("[")) {
          const p = function(m, { wikilinks: h = !1 } = {}) {
            let f = 0;
            function w(V) {
              return () => {
                for (let M = 0; M < V.length; M++) {
                  const Pe = V[M]();
                  if (Pe !== null)
                    return Pe;
                }
                return null;
              };
            }
            function v(V) {
              const M = f, Pe = [];
              for (let xt = 0; xt < V.length; xt++) {
                const Zt = V[xt]();
                if (Zt === null)
                  return f = M, null;
                Pe.push(Zt);
              }
              return Pe;
            }
            function y(V, M) {
              return () => {
                const Pe = f, xt = [];
                let Zt = M();
                for (; Zt !== null; )
                  xt.push(Zt), Zt = M();
                return xt.length < V ? (f = Pe, null) : xt;
              };
            }
            function S(V) {
              const M = V.length;
              return () => {
                let Pe = null;
                return m.slice(f, f + M) === V && (Pe = V, f += M), Pe;
              };
            }
            function b(V) {
              return () => {
                const M = m.slice(f).match(V);
                return M === null ? null : (f += M[0].length, M[0]);
              };
            }
            const E = b(/^\s+/), x = S("|"), R = S(":"), L = S("\\"), B = b(/^./), j = S("$"), G = b(/^\d+/), Y = S('"'), we = S("'"), q = b(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), se = b(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), ae = w([te, b(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function te() {
              const V = v([L, B]);
              return V === null ? null : V[1];
            }
            const Ne = w([te, se]), We = w([te, q]);
            function Be() {
              const V = v([j, G]);
              return V === null ? null : ["REPLACE", parseInt(V[1], 10) - 1];
            }
            const J = (I = b(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), P = function(V) {
              return V.toString();
            }, () => {
              const V = I();
              return V === null ? null : P(V);
            });
            var I, P;
            function U() {
              const V = v([x, y(0, re)]);
              if (V === null)
                return null;
              const M = V[1];
              return M.length > 1 ? ["CONCAT"].concat(M) : M[0];
            }
            function Z() {
              const V = v([J, R, Be]);
              return V === null ? null : [V[0], V[2]];
            }
            function _() {
              const V = v([J, R, re]);
              return V === null ? null : [V[0], V[2]];
            }
            function A() {
              const V = v([J, R]);
              return V === null ? null : [V[0], ""];
            }
            const D = w([function() {
              const V = v([w([Z, _, A]), y(0, U)]);
              return V === null ? null : V[0].concat(V[1]);
            }, function() {
              const V = v([J, y(0, U)]);
              return V === null ? null : [V[0]].concat(V[1]);
            }]), F = S("{{"), X = S("}}"), ue = S("[["), H = S("]]"), z = S("["), ie = S("]");
            function Ze() {
              const V = v([F, D, X]);
              return V === null ? null : V[1];
            }
            const ke = w([function() {
              const V = v([y(1, re), x, y(1, po)]);
              return V === null ? null : [["CONCAT"].concat(V[0]), ["CONCAT"].concat(V[2])];
            }, function() {
              const V = v([y(1, re)]);
              return V === null ? null : [["CONCAT"].concat(V[0])];
            }]);
            function go() {
              let V = null;
              const M = v([ue, ke, H]);
              if (M !== null) {
                const Pe = M[1];
                V = ["WIKILINK"].concat(Pe);
              }
              return V;
            }
            function va() {
              let V = null;
              const M = v([z, y(1, nr), E, y(1, po), ie]);
              return M !== null && (V = ["EXTLINK", M[1].length === 1 ? M[1][0] : ["CONCAT"].concat(M[1]), ["CONCAT"].concat(M[3])]), V;
            }
            const ts = b(/^[A-Za-z]+/);
            function ns() {
              const V = b(/^[^"]*/), M = v([Y, V, Y]);
              return M === null ? null : M[1];
            }
            function os() {
              const V = b(/^[^']*/), M = v([we, V, we]);
              return M === null ? null : M[1];
            }
            function er() {
              const V = b(/^\s*=\s*/), M = v([E, ts, V, w([ns, os])]);
              return M === null ? null : [M[1], M[3]];
            }
            function tr() {
              const V = y(0, er)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], V);
            }
            const nr = w([Ze, Be, go, va, function() {
              const V = y(1, ae)();
              return V === null ? null : V.join("");
            }]), po = w([Ze, Be, go, va, function() {
              let V = null;
              const M = f, Pe = S("<"), xt = b(/^\/?/), Zt = b(/^\s*>/), or = v([Pe, ts, tr, xt, Zt]);
              if (or === null)
                return null;
              const bu = f, ku = or[1], sr = y(0, po)(), Gf = f, $u = v([S("</"), ts, Zt]);
              if ($u === null)
                return ["CONCAT", m.slice(M, bu)].concat(sr);
              const Xf = f, Wf = $u[1], Vu = or[2];
              if (function(On, _a, ar, ir = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((On = On.toLowerCase()) !== (_a = _a.toLowerCase()) || ir.allowedHtmlElements.indexOf(On) === -1)
                  return !1;
                const Kf = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let Sa = 0, Yf = ar.length; Sa < Yf; Sa += 2) {
                  const rr = ar[Sa];
                  if (ir.allowedHtmlCommonAttributes.indexOf(rr) === -1 && (ir.allowedHtmlAttributesByElement[On] || []).indexOf(rr) === -1 || rr === "style" && ar[Sa + 1].search(Kf) !== -1)
                    return !1;
                }
                return !0;
              }(ku, Wf, Vu.slice(1)))
                V = ["HTMLELEMENT", ku, Vu].concat(sr);
              else {
                const On = (_a) => _a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                V = ["CONCAT", On(m.slice(M, bu))].concat(sr, On(m.slice(Gf, Xf)));
              }
              return V;
            }, function() {
              const V = y(1, We)();
              return V === null ? null : V.join("");
            }]), re = w([Ze, Be, function() {
              const V = y(1, Ne)();
              return V === null ? null : V.join("");
            }]), yn = function() {
              const V = y(0, po)();
              return V === null ? null : ["CONCAT"].concat(V);
            }();
            if (yn === null || f !== m.length)
              throw new Error("Parse error at position " + f.toString() + " in input: " + m);
            return yn;
          }(c, { wikilinks: this.wikilinks });
          return this.emitter.emit(p, g);
        }
        return this.simpleParse(c, g);
      }
      simpleParse(c, g) {
        return c.replace(/\$(\d+)/g, (p, m) => {
          const h = parseInt(m, 10) - 1;
          return g[h] !== void 0 ? g[h] : "$" + m;
        });
      }
    }
    class d {
      constructor(c) {
        this.sourceMap = /* @__PURE__ */ new Map();
      }
      load(c, g) {
        if (typeof c != "object")
          throw new Error("Invalid message source. Must be an object");
        if (g) {
          if (!/^[a-zA-Z0-9-]+$/.test(g))
            throw new Error(`Invalid locale ${g}`);
          for (const p in c)
            if (p.indexOf("@") !== 0) {
              if (typeof c[p] == "object")
                return this.load(c);
              if (typeof c[p] != "string")
                throw new Error(`Invalid message for message ${p} in ${g} locale.`);
              break;
            }
          this.sourceMap.has(g) ? this.sourceMap.set(g, Object.assign(this.sourceMap.get(g), c)) : this.sourceMap.set(g, c);
        } else
          for (g in c)
            this.load(c[g], g);
      }
      getMessage(c, g) {
        const p = this.sourceMap.get(g);
        return p ? p[c] : null;
      }
      hasLocale(c) {
        return this.sourceMap.has(c);
      }
    }
    return class {
      constructor(i, { finalFallback: c = "en", messages: g, wikilinks: p = !1 } = {}) {
        this.locale = i, this.parser = new u(this.locale, { wikilinks: p }), this.messageStore = new d(), g && this.load(g, this.locale), this.finalFallback = c, this.wikilinks = p;
      }
      load(i, c) {
        return this.messageStore.load(i, c || this.locale);
      }
      i18n(i, ...c) {
        return this.parser.parse(this.getMessage(i), c);
      }
      setLocale(i) {
        this.locale = i, this.parser = new u(this.locale, { wikilinks: this.wikilinks });
      }
      getFallbackLocales() {
        return [...o[this.locale] || [], this.finalFallback];
      }
      getMessage(i) {
        let c = this.locale, g = 0;
        const p = this.getFallbackLocales(this.locale);
        for (; c; ) {
          const m = c.split("-");
          let h = m.length;
          do {
            const f = m.slice(0, h).join("-"), w = this.messageStore.getMessage(i, f);
            if (typeof w == "string")
              return w;
            h--;
          } while (h);
          c = p[g], g++;
        }
        return i;
      }
      registerParserPlugin(i, c) {
        l.prototype[i] = c;
      }
    };
  });
})(mh);
var Dv = mh.exports;
const od = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, hh = Symbol("banana-context");
function fe() {
  const e = Ev(hh);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function Tv(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = Lv(new Dv(e.locale, e));
  return {
    install: (n) => {
      n.provide(hh, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: r } = od(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...r) : o.textContent = t.i18n(a, ...r);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: r } = od(s);
        o.innerHTML = t.i18n(a, ...r);
      });
    }
  };
}
const _n = window.Vue.ref, Bv = window.Vue.computed, Oi = _n(null), ji = _n(null), Hi = _n(null), da = _n(null), Wc = _n(null), qi = _n(null), fh = _n(null), wh = _n(null), Kc = _n(null), { validateFilters: Pv, filtersValidatorError: Fv } = Xc(), vh = {
  from: Oi,
  to: ji,
  section: da,
  draft: Wc,
  page: Hi,
  revision: qi,
  "active-list": Kc
}, Nv = Bv(() => ({
  type: fh.value,
  id: wh.value
})), _h = (e, t) => {
  fh.value = e, wh.value = t, Ni("filter-type", e), t && Ni("filter-id", t);
}, Mv = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  e instanceof zi && (n.draft = !0, n.revision = e.pageRevision, e.isLeadSectionTranslation || (n.section = e.sourceSectionTitle));
  for (const o in n) {
    const s = n[o];
    t.set(o, s), vh[o].value = s;
  }
  t.delete("title"), ga(Object.fromEntries(t));
}, Yc = (e, t) => {
  vh[e].value = t, Ni(e, t);
}, Uv = (e) => {
  Yc("section", e);
}, Iv = (e) => {
  Yc("page", e);
}, Rv = (e) => {
  Yc("active-list", e);
}, ga = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    wv(`Special:ContentTranslation${t}`, e)
  );
}, zv = () => {
  const e = fe(), t = new URLSearchParams(location.search);
  Hi.value = t.get("page"), Oi.value = t.get("from"), ji.value = t.get("to"), da.value = t.get("section"), qi.value = t.get("revision"), Kc.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
  const n = Pv({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  _h(n.type, n.id), Fv.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, Ov = () => {
  const e = new URLSearchParams(location.search);
  da.value = null, e.delete("section"), e.delete("title"), ga(Object.fromEntries(e));
}, Ni = (e, t) => {
  const n = new URLSearchParams(location.search);
  t == null ? n.delete(e) : n.set(e, t), n.delete("title"), ga(Object.fromEntries(n));
}, jv = (e) => new URLSearchParams(location.search).get(e), Hv = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), Oi.value = e, ji.value = t, n.delete("title"), ga(Object.fromEntries(n));
}, qv = () => {
  const e = new URLSearchParams(location.search);
  Hi.value = null, da.value = null, Wc.value = null, qi.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("revision"), e.delete("title"), ga(Object.fromEntries(e));
}, Gv = () => new URLSearchParams(location.search).get("force-quick-tutorial"), T = () => ({
  isQuickTutorialForced: Gv,
  setLanguageURLParams: Hv,
  setSectionURLParam: Uv,
  setTranslationURLParams: Mv,
  initializeURLState: zv,
  clearTranslationURLParameters: qv,
  clearSectionURLParameter: Ov,
  setUrlParam: Ni,
  getUrlParam: jv,
  pageURLParameter: Hi,
  sourceLanguageURLParameter: Oi,
  targetLanguageURLParameter: ji,
  sectionURLParameter: da,
  draftURLParameter: Wc,
  revisionURLParameter: qi,
  setPageURLParam: Iv,
  currentSuggestionFilters: Nv,
  setFilterURLParams: _h,
  activeDashboardTabParameter: Kc,
  setActiveDashboardTabParameter: Rv
}), Xv = () => K.getLanguagePairs();
function Wv(e, t) {
  return C(this, null, function* () {
    const n = K.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new ne(e, t, o.mt)
      )
    );
  });
}
function Kv() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function Yv(e, t, n, o) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const s = mw.config.get("wgWikiID"), a = K.getWikiDomainCode(e), r = K.getWikiDomainCode(t), l = {
    action: "wblinktitles",
    fromsite: s.replace(r, a),
    fromtitle: n,
    tosite: s,
    totitle: o
  }, u = new mw.ForeignApi("https://www.wikidata.org/w/api.php");
  return Promise.resolve(u.postWithToken("csrf", l)).then((d) => {
    const c = {
      action: "tag",
      revid: d.entity.sitelinks.lastrevid,
      tags: ["contenttranslation", "sectiontranslation"]
    };
    return Promise.resolve(u.postWithToken("csrf", c));
  });
}
const Gi = {
  fetchSupportedLanguageCodes: Xv,
  fetchSupportedMTProviders: Wv,
  fetchCXServerToken: Kv,
  addWikibaseLink: Yv
}, Qc = window.Vue.ref, sd = Qc([]), ad = Qc([]), id = Qc(!1);
function pa() {
  return {
    fetchSupportedLanguageCodes: () => C(this, null, function* () {
      if (!id.value) {
        id.value = !0;
        const t = yield Gi.fetchSupportedLanguageCodes();
        sd.value = t.sourceLanguages, ad.value = t.targetLanguages;
      }
    }),
    supportedSourceLanguageCodes: sd,
    supportedTargetLanguageCodes: ad
  };
}
const Qv = {
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
}, Jv = {
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
}, Zv = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], e_ = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, t_ = {
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
}, n_ = {
  languages: Qv,
  scriptgroups: Jv,
  rtlscripts: Zv,
  regiongroups: e_,
  territories: t_
};
var Re = n_;
function ma(e) {
  return !!Re.languages[e];
}
function zn(e) {
  return ma(e) && Re.languages[e].length === 1 ? Re.languages[e][0] : !1;
}
function o_() {
  return Re.languages;
}
function ha(e) {
  var t = zn(e);
  return t ? ha(t) : ma(e) ? Re.languages[e][0] : "Zyyy";
}
function Jc(e) {
  var t = zn(e);
  return t ? Jc(t) : ma(e) && Re.languages[e][1] || "UNKNOWN";
}
function ra(e) {
  var t = zn(e);
  return t ? ra(t) : ma(e) && Re.languages[e][2] || e;
}
function s_() {
  var e, t = {};
  for (e in Re.languages)
    zn(e) || (t[e] = ra(e));
  return t;
}
function Sh(e) {
  var t, n, o = [];
  for (t in Re.languages)
    if (!zn(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === ha(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function a_(e) {
  return Sh([e]);
}
function yh(e) {
  var t;
  for (t in Re.scriptgroups)
    if (Re.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function Zc(e) {
  return yh(ha(e));
}
function xh(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = zn(n) || n, a = Zc(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Ch(e) {
  var t, n, o, s = {};
  for (t in Re.languages)
    if (!zn(t)) {
      for (n = 0; n < e.length; n++)
        if (Jc(t).includes(e[n])) {
          o = Zc(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function i_(e) {
  return Ch([e]);
}
function r_(e) {
  var t, n, o, s = [];
  for (t = xh(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function l_(e, t) {
  var n = ra(e) || e, o = ra(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function bh(e) {
  return Re.rtlscripts.includes(ha(e));
}
function c_(e) {
  return bh(e) ? "rtl" : "ltr";
}
function u_(e) {
  return Re.territories[e] || [];
}
function d_(e, t) {
  t.target ? Re.languages[e] = [t.target] : Re.languages[e] = [t.script, t.regions, t.autonym];
}
var O = {
  addLanguage: d_,
  getAutonym: ra,
  getAutonyms: s_,
  getDir: c_,
  getGroupOfScript: yh,
  getLanguages: o_,
  getLanguagesByScriptGroup: xh,
  getLanguagesByScriptGroupInRegion: i_,
  getLanguagesByScriptGroupInRegions: Ch,
  getLanguagesInScript: a_,
  getLanguagesInScripts: Sh,
  getLanguagesInTerritory: u_,
  getRegions: Jc,
  getScript: ha,
  getScriptGroupOfLanguage: Zc,
  isKnown: ma,
  isRedirect: zn,
  isRtl: bh,
  sortByScriptGroup: r_,
  sortByAutonym: l_
};
const mo = window.Vue.computed;
function Te(e) {
  const t = mo(() => e.state.application.sourceLanguage), n = mo(() => e.state.application.targetLanguage), o = mo(
    () => e.state.application.currentMTProvider
  ), s = mo(
    () => O.getAutonym(t.value)
  ), a = mo(
    () => O.getAutonym(n.value)
  ), r = mo(() => e.state.application.previousRoute);
  return {
    currentMTProvider: o,
    previousRoute: r,
    sourceLanguage: t,
    sourceLanguageAutonym: s,
    targetLanguage: n,
    targetLanguageAutonym: a
  };
}
class Wo {
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
    pagelanguage: l,
    pageprops: u,
    pageviews: d,
    thumbnail: i = null,
    title: c,
    revisions: g,
    _alias: p,
    content: m = null,
    sections: h = []
  } = {}) {
    var f;
    this.language = l, this.title = c, this.pageId = r, this.description = t, this.image = s, this.imageName = a, this.pageprops = u, this.pageviews = d, this.thumbnail = i, this.langLinksCount = n, this.articleSize = (f = g == null ? void 0 : g[0]) == null ? void 0 : f.size, this.revision = o, this.alias = p, this.wikidataId = u == null ? void 0 : u.wikibase_item, this.content = m, this.sections = h;
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
class g_ {
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
function p_() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const m_ = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), p_();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, h_ = (e, t) => {
  let n, o;
  return t ? (n = m_(e), o = n.$element.find(
    "section[rel='cx:Section']"
  ).map((a, r) => {
    const l = $(r).data("view").getModel();
    if (l)
      return ve.dm.converter.getDomFromNode(
        l,
        // CLIPBOARD_MODE helps to copy the data-mw from elsewhere to
        // to the local nodes
        ve.dm.Converter.static.CLIPBOARD_MODE
      ).body.children[0];
  }), n.destroy()) : o = $(e).filter("section[rel='cx:Section']"), o;
}, f_ = (e, t) => {
  const n = Array.from(
    h_(e, t)
  );
  return w_(n).map(
    /**
     * @param {Node[]} sectionNodes
     * @return {PageSection}
     */
    (s) => {
      const [a, ...r] = s;
      let l = "";
      const u = a.dataset.mwSectionNumber;
      a.querySelector("h2") ? l = a.textContent.trim() : r.unshift(a);
      const d = r.map(
        /**
         * @param {Node} node
         * @return {SubSection}
         */
        (c) => new rt({
          sentences: v_(c),
          node: c
        })
      ), i = !l;
      return new Oo({ id: u, title: l, subSections: d, isLeadSection: i });
    }
  );
}, w_ = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, v_ = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new Mn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), kh = {
  convertSegmentedContentToPageSections: f_
}, eu = 120, __ = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: eu,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return K.getApi(e).get(n).then((s) => {
    const a = s.query.pages, l = (s.query.redirects || []).reduce(
      (i, c) => et(de({}, i), { [c.to]: c.from }),
      {}
    ), d = (s.query.normalized || []).reduce(
      (i, c) => et(de({}, i), {
        [c.to]: c.from
      }),
      {}
    );
    return a.map((i) => {
      const c = d[i.title] || l[i.title] || null;
      return new Wo(et(de({}, i), { _alias: c }));
    });
  });
}, S_ = (e, t) => {
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
    const r = [{ lang: e, title: t }, ...a[0].langlinks || []], l = (d = a[0].pageprops) == null ? void 0 : d.wikibase_item;
    return l ? Object.freeze(new g_(l, r)) : null;
  });
}, y_ = (e, t, n) => {
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
  return K.getApi(e).get(o).then((a) => Object.values(a.query.pages).map((l) => {
    var u, d;
    return (d = (u = l.langlinks) == null ? void 0 : u[0]) == null ? void 0 : d["*"];
  }).filter((l) => !!l));
}, x_ = (e, t, n, o = null) => $h(
  e,
  t,
  n,
  o
).then(
  (s) => new Wo({
    sections: kh.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), $h = (e, t, n, o = null) => {
  const s = K.getWikiDomainCode(e), a = K.getWikiDomainCode(t), r = {
    $sourcelanguage: s,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let l = "/page/$sourcelanguage/$targetlanguage/$title";
  o && (r.$revision = o, l += "/$revision");
  const u = K.getCXServerUrl(
    l,
    r
  );
  return fetch(u).then((d) => d.json()).then((d) => d.segmentedContent);
}, C_ = (e) => {
  const t = vv();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: eu,
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
  return new Promise((o) => {
    K.getApi(e).get(n).then((a) => {
      var r;
      return o(((r = a == null ? void 0 : a.query) == null ? void 0 : r.pages) || []);
    }).fail(() => o([]));
  }).then((o) => o.map((s) => new Wo(s)));
}, b_ = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: eu,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return K.getApi(t).get(o).then((s) => {
    var a;
    return ((a = s.query) == null ? void 0 : a.pages) || [];
  }).then(
    (s) => s.sort((a, r) => a.index - r.index).map(
      (a) => new Wo(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, lo = {
  fetchPages: __,
  fetchLanguageTitles: S_,
  fetchPageContent: x_,
  fetchSegmentedContent: $h,
  fetchNearbyPages: C_,
  searchPagesByTitlePrefix: b_,
  fetchLanguageLinksForLanguage: y_
}, k_ = window.Vuex.useStore, Ko = () => {
  const e = k_();
  return (t, n) => {
    n = n.filter(
      (a) => !e.getters["mediawiki/getPage"](t, a)
    );
    const o = 50, s = [];
    for (let a = 0; a < n.length; a += o) {
      const r = n.slice(a, a + o), l = lo.fetchPages(t, r).then(
        (u) => u.forEach(
          (d) => e.commit("mediawiki/addPage", d)
        )
      );
      s.push(l);
    }
    return Promise.all(s);
  };
}, $_ = window.Vuex.useStore, tu = () => {
  const e = $_(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = T(), { maxSuggestionsPerSlice: s } = e.state.suggestions, a = () => e.getters["suggestions/getSectionSuggestionsForPair"](t.value, n.value).filter(
    (i) => i.matchesFilter(o.value)
  ), r = (d) => a().slice(
    s * d,
    s * (d + 1)
  ), l = () => e.getters["suggestions/getPageSuggestionsForPair"](t.value, n.value).filter(
    (i) => i.matchesFilter(o.value)
  );
  return {
    getFilteredPageSuggestions: l,
    getFilteredSectionSuggestions: a,
    getPageSuggestionsSliceByIndex: (d) => l().slice(
      s * d,
      s * (d + 1)
    ),
    getSectionSuggestionsSliceByIndex: r
  };
};
class co {
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
    suggestionSeed: l = null,
    suggestionProvider: u = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.wikidataId = r, this.langLinksCount = a, this.suggestionProvider = u, this.suggestionSeed = l, this.isListable = !0;
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
class In {
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
    sourceSections: l = [],
    targetSections: u = [],
    suggestionSeed: d = null,
    isListable: i = !0,
    suggestionProvider: c = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.missingSections = r, this.presentSections = a, this.sourceSections = l, this.targetSections = u, this.suggestionSeed = d, this.isListable = i, this.suggestionProvider = c;
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
const Vh = [
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
], V_ = [
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
], E_ = [
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
], L_ = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], A_ = [
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
], D_ = {
  en: Vh,
  es: V_,
  bn: E_,
  fr: L_,
  de: A_
};
class jo {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s;
  }
}
class nu {
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
class Eh extends co {
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
    suggestionProvider: l = null,
    collection: u = {}
  }) {
    super({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: o,
      targetTitle: s,
      langLinksCount: a,
      wikidataId: r,
      suggestionProvider: l
    }), this.collection = new nu(u);
  }
}
class Lh extends In {
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
    sourceSections: l = [],
    targetSections: u = [],
    isListable: d = !0,
    suggestionProvider: i = null,
    collection: c = {}
  }) {
    super({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: o,
      targetTitle: s,
      present: a,
      missing: r,
      sourceSections: l,
      targetSections: u,
      isListable: d,
      suggestionProvider: i
    }), this.collection = new nu(c);
  }
}
const T_ = Vh, Mt = (n) => C(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
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
function B_() {
  return C(this, null, function* () {
    const e = {}, t = "/page-collection-groups";
    try {
      const n = (yield Mt({ urlPostfix: t, urlParams: e })) || [], o = {};
      for (const s in n)
        o[s] = n[s].map(
          (a) => new nu(a)
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
function P_(e, t, n = null, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      count: o
    };
    return n && (s.seed = n), ((yield Mt({ urlParams: s })) || []).map(
      (r) => new co({
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
const F_ = (e, t) => C(void 0, null, function* () {
  return ((yield Mt({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  } })) || []).map(
    (s) => new co({
      sourceTitle: s.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: s.wikidata_id,
      langLinksCount: parseInt(s.langlinks_count)
    })
  );
}), N_ = (e, t) => C(void 0, null, function* () {
  const s = (yield Mt({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  }, urlPostfix: "/sections" })) || [];
  return s && s.map(
    (a) => new In({
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
}), M_ = (e, t, n = null) => C(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  return n && (o.seed = n), ((yield Mt({ urlParams: o })) || []).map(
    (a) => new Eh({
      sourceTitle: a.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: a.wikidata_id,
      langLinksCount: parseInt(a.langlinks_count),
      collection: a.collection
    })
  );
}), U_ = (e, t, n = null) => C(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  n && (o.seed = n);
  const a = (yield Mt({ urlPostfix: "/sections", urlParams: o })) || [];
  return a && a.map(
    (r) => new Lh({
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
function I_(e, t, n) {
  return C(this, null, function* () {
    const o = [t, e, n].map(
      (r) => encodeURIComponent(r)
    ), s = K.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (r) => r.ok ? r.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((r) => r == null ? void 0 : r.sections).catch((r) => null);
    return a ? new In(a) : null;
  });
}
function R_(e, t, n = null) {
  return C(this, null, function* () {
    const o = {
      source: e,
      target: t,
      count: 24
    };
    n && (o.seed = n);
    const a = (yield Mt({ urlPostfix: "/sections", urlParams: o })) || [];
    return a && a.map(
      (r) => new In({
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
function z_(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    return ((yield Mt({ urlParams: s })) || []).map(
      (r) => new co({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
function O_(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    }, r = (yield Mt({ urlPostfix: "/sections", urlParams: s })) || [];
    return r && r.map(
      (l) => new In({
        sourceLanguage: e,
        targetLanguage: t,
        sourceTitle: l.source_title,
        targetTitle: l.target_title,
        sourceSections: l.source_sections,
        targetSections: l.target_sections,
        present: l.present,
        missing: l.missing
      })
    );
  });
}
function j_(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      country: n.join("|"),
      count: o
    };
    return ((yield Mt({ urlParams: s })) || []).map(
      (r) => new co({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
function H_(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      country: n.join("|"),
      count: o
    }, r = (yield Mt({ urlPostfix: "/sections", urlParams: s })) || [];
    return r && r.map(
      (l) => new In({
        sourceLanguage: e,
        targetLanguage: t,
        sourceTitle: l.source_title,
        targetTitle: l.target_title,
        sourceSections: l.source_sections,
        targetSections: l.target_sections,
        present: l.present,
        missing: l.missing
      })
    );
  });
}
function q_(e) {
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
      const a = (yield n.get(t)).query.usercontribs.map((r) => r.title);
      return [...new Set(a)];
    } catch (o) {
      return mw.log.error("Error while fetching suggestion seeds", o), [];
    }
  });
}
function G_(e, t) {
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
function X_(e) {
  const t = T_.map((o) => encodeURIComponent(o)).join("|"), n = K.getCXServerUrl(
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
const W_ = (e, t, n) => {
  const o = {
    assert: "user",
    action: "cxfavoritesuggestions",
    listaction: "add",
    title: e,
    from: t,
    to: n
  }, s = new mw.Api();
  return Promise.resolve(s.postWithToken("csrf", o)).catch((a) => {
    mw.log.error("Error while marking suggestion as favorite", a);
  });
}, K_ = (e) => {
  const t = {
    assert: "user",
    action: "cxfavoritesuggestions",
    listaction: "remove",
    title: e.title,
    from: e.sourceLanguage,
    to: e.targetLanguage
  }, n = new mw.Api();
  return Promise.resolve(n.postWithToken("csrf", t)).catch((o) => {
    mw.log.error("Error while unmarking favorite suggestion", o);
  });
}, Y_ = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions"
  }, t = new mw.Api();
  return Promise.resolve(t.postWithToken("csrf", e)).then((n) => {
    var a, r;
    const o = n.query.contenttranslationsuggestions.lists || {};
    return (((r = (a = Object.values(o)) == null ? void 0 : a[0]) == null ? void 0 : r.suggestions) || []).map((l) => new jo(l));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
}, pe = {
  fetchFavorites: Y_,
  fetchPageSuggestions: P_,
  fetchSectionSuggestion: I_,
  fetchSectionSuggestions: R_,
  fetchAppendixTargetSectionTitles: X_,
  fetchArticleSections: G_,
  markFavorite: W_,
  unmarkFavorite: K_,
  fetchUserEdits: q_,
  fetchMostPopularPageSuggestions: F_,
  fetchMostPopularSectionSuggestions: N_,
  fetchPageSuggestionsByTopics: z_,
  fetchSectionSuggestionsByTopics: O_,
  fetchPageSuggestionsByCountries: j_,
  fetchSectionSuggestionsByCountries: H_,
  fetchPageCollectionGroups: B_,
  fetchPageSuggestionsByCollections: M_,
  fetchSectionSuggestionsByCollections: U_
}, Q_ = window.Vuex.useStore, Yo = () => {
  const e = Q_(), { sourceLanguage: t, targetLanguage: n } = Te(e), o = (l) => {
    if (!l)
      return !1;
    const u = e.getters["suggestions/getFavoriteTitlesByLanguagePair"](t.value, n.value), i = e.getters["translator/getTranslationsForLanguagePair"](t.value, n.value).map((c) => c.sourceTitle);
    return !u.includes(l.sourceTitle) && !i.includes(l.sourceTitle);
  }, s = (l) => {
    const { pageSuggestions: u } = e.state.suggestions;
    return !u.some(
      (i) => i.sourceLanguage === l.sourceLanguage && i.targetLanguage === l.targetLanguage && i.sourceTitle === l.sourceTitle
    ) && o(l);
  }, a = (l) => e.state.suggestions.sectionSuggestions.some(
    (u) => u.sourceLanguage === l.sourceLanguage && u.targetLanguage === l.targetLanguage && u.sourceTitle === l.sourceTitle
  );
  return {
    isPageSuggestionValid: s,
    isSectionSuggestionValid: (l) => {
      if (!l)
        return !1;
      const u = e.state.suggestions.appendixSectionTitles[n.value] || [];
      return !a(l) && o(l) && l.isValid(u);
    },
    sectionSuggestionExists: a
  };
};
class J_ {
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
const Z_ = window.Vuex.useStore, ou = window.Vue.ref, eS = ou([]), tS = ou([]);
let yr = !1, xr = !1, rd = !1;
const Da = ou([]);
let is = null;
const Cr = {
  page: eS,
  section: tS
}, Ah = () => {
  const e = Z_(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = T(), o = () => C(void 0, null, function* () {
    xr || (Da.value = yield pe.fetchUserEdits(t.value).then((d) => (xr = !0, d)));
  }), s = () => C(void 0, null, function* () {
    let d = e.getters["translator/getTranslationsByStatus"]("published");
    if (d = d.filter(
      (i) => i.sourceLanguage === t.value
    ), d.length && !yr)
      return yr = !0, d.map(
        (i) => i.sourceTitle
      );
    if (yr = !0, !xr && (yield o(), Da.value.length > 0))
      return Da.value;
    if (!rd) {
      const i = yield pe.fetchUserEdits(n.value).then((c) => (rd = !0, c));
      if (i.length)
        return lo.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          i
        );
    }
    return null;
  }), a = (d) => {
    let i = Cr[d].value.find(
      (c) => c.matchesLanguagePair(t.value, n.value)
    );
    return i || (i = new J_({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), Cr[d].value.push(i)), i;
  }, r = () => C(void 0, null, function* () {
    let d = !1, i = [];
    do {
      i = yield s(), i || (d = !0);
      for (const c in Cr) {
        const g = a(c);
        g.seeds = [
          ...g.seeds,
          ...i || []
        ];
      }
    } while (!d && !(i != null && i.length));
  }), l = () => is || (is = r(), is.finally(() => {
    is = null;
  }));
  return {
    getSuggestionSeed: (d) => C(void 0, null, function* () {
      let i = a(d);
      return i.seeds.length || (yield l()), i.shiftSeeds();
    }),
    fetchPreviousEditsInSource: o,
    previousEditsInSource: Da
  };
}, nS = 5;
function io(e) {
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
  } = T(), { getSuggestionSeed: o } = Ah(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Yo(), l = {
    id: Jt,
    type: Ye
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (i) => C(void 0, null, function* () {
      const c = [];
      return yield io(() => C(void 0, null, function* () {
        const g = yield o("page");
        let p = yield pe.fetchPageSuggestions(
          t.value,
          n.value,
          g || null
        );
        return p = p.filter(
          (m) => a(m)
        ), p = p.slice(0, i), c.push(...p), c.length >= i;
      })), c.forEach(
        (g) => g.suggestionProvider = l
      ), c;
    }),
    fetchSectionSuggestionsBasedOnEdits: (i) => C(void 0, null, function* () {
      const c = [];
      return yield io(() => C(void 0, null, function* () {
        const g = yield o("section"), p = yield pe.fetchSectionSuggestions(
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
        return m = m.slice(0, i), c.push(...m), h.forEach((f) => {
          f && !r(f) && (f.isListable = !1, e.commit("suggestions/addSectionSuggestion", f));
        }), c.length >= i;
      })), c.forEach(
        (g) => g.suggestionProvider = l
      ), c;
    })
  };
}, aS = window.Vuex.useStore, iS = () => {
  const e = aS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = T(), o = {
    id: vn,
    type: Ye
  }, {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Yo();
  return { fetchSectionSuggestionsPopular: (d) => C(void 0, null, function* () {
    const i = [];
    return yield io(() => C(void 0, null, function* () {
      const c = yield pe.fetchMostPopularSectionSuggestions(
        t.value,
        n.value
      );
      let g = c.filter(
        (m) => s(m)
      );
      const p = c.filter(
        (m) => !s(m)
      );
      return g = g.slice(0, d), i.push(...g), p.forEach((m) => {
        m && !r(m) && (m.isListable = !1, e.commit("suggestions/addSectionSuggestion", m));
      }), i.length >= d;
    })), i.forEach(
      (c) => c.suggestionProvider = o
    ), i;
  }), fetchPageSuggestionsPopular: (d) => C(void 0, null, function* () {
    const i = [];
    return yield io(() => C(void 0, null, function* () {
      let c = yield pe.fetchMostPopularPageSuggestions(
        t.value,
        n.value
      );
      return c = c.filter(
        (g) => a(g)
      ), c = c.slice(0, d), i.push(...c), i.length >= d;
    })), i.forEach(
      (c) => c.suggestionProvider = o
    ), i;
  }) };
}, Dh = window.Vue.ref, rs = "ungrouped", ld = Dh({}), cd = Dh(!1), su = () => ({
  fetchPageCollectionGroups: () => C(void 0, null, function* () {
    try {
      const t = yield pe.fetchPageCollectionGroups(), n = Object.fromEntries(
        Object.keys(t).sort((o, s) => o === rs ? 1 : s === rs ? -1 : o.localeCompare(s)).map((o) => [o, t[o]])
      );
      n[rs] && (n[rs] = n[rs].sort(
        (o, s) => o.name.localeCompare(s.name)
      )), ld.value = n, cd.value = !0;
    } catch (t) {
      mw.log.error("Failed to fetch page collections", t);
    }
  }),
  pageCollectionGroupsFetched: cd,
  pageCollectionGroups: ld
});
class oa {
  /**
   * @param {string} id
   * @param {string} label
   * @param {string} type
   * @param {SuggestionFilter[]} filters
   */
  constructor({ id: t, label: n, type: o, filters: s }) {
    this.id = t, this.label = n, this.type = o, this.filters = s;
  }
}
const rS = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', lS = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', cS = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', uS = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', dS = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', gS = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', pS = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', mS = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', hS = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', fS = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', wS = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', vS = '<path d="m2.5 15.25 7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"/>', _S = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', SS = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', yS = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', xS = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', CS = '<path d="M19 16 2 12a3.83 3.83 0 01-1-2.5A3.83 3.83 0 012 7l17-4z"/><rect width="4" height="8" x="4" y="9" rx="2"/>', bS = '<path d="M8 2H2a2 2 0 00-2 2v2h12z"/><rect width="20" height="14" y="4" rx="2"/>', kS = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', Th = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', $S = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', VS = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"/>', ES = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', LS = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', AS = '<path d="M10 0a7.65 7.65 0 00-8 8c0 2.52 2 5 3 6s5 6 5 6 4-5 5-6 3-3.48 3-6a7.65 7.65 0 00-8-8m0 11.25A3.25 3.25 0 1113.25 8 3.25 3.25 0 0110 11.25"/>', DS = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', TS = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', BS = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', PS = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', FS = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', NS = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', MS = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', US = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', IS = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', RS = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', Ac = rS, zS = lS, Bh = {
  ltr: cS,
  shouldFlip: !0
}, Ph = {
  ltr: uS,
  shouldFlip: !0
}, au = {
  ltr: dS,
  shouldFlip: !0
}, Fh = gS, Nh = pS, OS = mS, jS = hS, HS = fS, Qo = wS, qS = vS, iu = _S, ru = SS, Dc = yS, GS = xS, XS = {
  ltr: CS,
  shouldFlip: !0
}, WS = {
  ltr: bS,
  shouldFlip: !0
}, KS = kS, YS = {
  langCodeMap: {
    ar: Th
  },
  default: $S
}, QS = {
  langCodeMap: {
    ar: Th
  },
  default: VS
}, Mh = ES, Xi = {
  ltr: LS,
  shouldFlip: !0
}, JS = AS, ZS = DS, fa = {
  ltr: TS,
  shouldFlip: !0
}, lu = {
  ltr: BS,
  shouldFlip: !0
}, ey = {
  ltr: PS,
  shouldFlip: !0
}, Uh = FS, ty = NS, Tc = MS, ny = US, oy = IS, sy = RS, ay = {
  [Jt]: sy,
  [vn]: KS,
  [ee]: au
}, iy = {
  [ee]: WS,
  [Ve]: JS
};
class Nt {
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
    return this.type === Ye ? this.id : this.type;
  }
  get icon() {
    return ay[this.provider] || null;
  }
  get expandableIcon() {
    return iy[this.provider] || this.icon;
  }
}
const ls = window.Vue.computed, { topics: ud, regions: dd } = mw.loader.require(
  "ext.cx.articlefilters"
), ry = (e) => new oa({
  id: e.groupId,
  label: e.label,
  type: Ge,
  filters: e.topics.map(
    (t) => new Nt({
      id: t.topicId,
      label: t.label,
      type: Ge
    })
  )
}), Wi = () => {
  const e = fe(), { currentSuggestionFilters: t, setFilterURLParams: n } = T(), { validateFilters: o, filtersValidatorError: s } = Xc(), a = new Nt({
    id: Jt,
    type: Ye,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }), r = new Nt({
    id: vn,
    type: Ye,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }), l = new Nt({
    id: ee,
    type: Ye,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }), { pageCollectionGroups: u, pageCollectionGroupsFetched: d } = su(), i = ls(() => {
    const x = new oa({
      id: Ye,
      type: Ye,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [a, r]
    });
    return Object.keys(u.value).length > 1 && x.filters.push(l), x;
  }), c = () => {
    const x = de({}, u.value);
    delete x.ungrouped;
    const R = [];
    for (const B in x) {
      const j = x[B].map(
        (Y) => new Nt({
          id: Y.name,
          label: Y.name,
          type: ee
        })
      ), G = new Nt({
        id: B,
        label: B,
        type: ee,
        subFilters: j
      });
      R.push(G);
    }
    const L = (u.value.ungrouped || []).map(
      (B) => new Nt({
        id: B.name,
        label: B.name,
        type: ee
      })
    );
    return [...R, ...L];
  }, g = ls(
    () => new oa({
      id: ee,
      type: ee,
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: c()
    })
  ), p = ls(() => new oa({
    id: Ve,
    type: Ve,
    label: e.i18n("cx-sx-suggestions-filters-tab-regions"),
    filters: dd.map(
      (x) => new Nt({
        id: x.id,
        label: x.label,
        type: Ve,
        subFilters: x.countries.map(
          (R) => new Nt({
            id: R.id,
            label: R.label,
            type: Ve
          })
        )
      })
    )
  })), m = ls(() => {
    const x = [
      i.value,
      ...ud.map(ry),
      p.value
    ];
    return g.value.filters.length && x.splice(1, 0, g.value), x;
  }), h = ls(
    () => [t.value.type, t.value.id].includes(
      ee
    ) && !d.value
  ), f = () => {
    if (h.value)
      return [];
    const x = v();
    return x.type === Ge || x.type === Ve || x.type === vt || x.type === ee || x.id === ee ? [x, a] : [a, r];
  }, w = (x) => {
    n(x.type, x.id);
  }, v = () => t.value.type === vt ? new Nt({
    id: t.value.id,
    label: t.value.id,
    type: t.value.type
  }) : m.value.flatMap((x) => x.filters).flatMap((x) => [x, ...x.subFilters || []]).find(y), y = (x) => t.value.id === x.id;
  return {
    allFilters: m,
    getFiltersSummary: f,
    selectFilter: w,
    isFilterSelected: y,
    getArticleTopics: (x) => {
      const L = ud.flatMap((B) => B.topics).find((B) => B.topicId === x);
      return L ? L.articletopics : [];
    },
    waitingForPageCollectionsFetch: h,
    findSelectedFilter: v,
    validateURLFilterWithCollections: () => {
      if (!d.value)
        return;
      const x = Object.values(u.value).flat(), R = o(
        {
          type: t.value.type,
          id: t.value.id
        },
        x
      );
      n(R.type, R.id), s.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
    },
    getCountries: (x) => {
      const R = dd.find((L) => L.id === x);
      return R ? R.countries.map((L) => L.id) : [x];
    }
  };
}, ly = window.Vuex.useStore, cy = () => {
  const e = ly(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = T(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Yo(), { getArticleTopics: l } = Wi();
  return {
    fetchPageSuggestionsByTopics: (i) => C(void 0, null, function* () {
      const c = o.value.id, g = {
        id: c,
        type: Ge
      }, p = l(c);
      let m = yield pe.fetchPageSuggestionsByTopics(
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
      const c = o.value.id, g = {
        id: c,
        type: Ge
      }, p = l(c), m = [];
      return yield io(() => C(void 0, null, function* () {
        const h = yield pe.fetchSectionSuggestionsByTopics(
          t.value,
          n.value,
          p
        );
        let f = h.filter(
          (v) => s(v)
        );
        const w = h.filter(
          (v) => !s(v)
        );
        return f = f.slice(0, i), m.push(...f), w.forEach((v) => {
          v && !r(v) && (v.isListable = !1, e.commit("suggestions/addSectionSuggestion", v));
        }), m.length >= i;
      })), m.forEach(
        (h) => h.suggestionProvider = g
      ), m;
    })
  };
}, uy = window.Vuex.useStore, dy = () => {
  const e = uy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = T(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Yo(), { getCountries: l } = Wi();
  return {
    fetchPageSuggestionsByCountries: (i) => C(void 0, null, function* () {
      let c = yield pe.fetchPageSuggestionsByCountries(
        t.value,
        n.value,
        l(o.value.id)
      );
      return c = c.filter(
        (g) => a(g)
      ), c = c.slice(0, i), c.forEach(
        (g) => g.suggestionProvider = o.value
      ), c;
    }),
    fetchSectionSuggestionsByCountries: (i) => C(void 0, null, function* () {
      const c = [];
      return yield io(() => C(void 0, null, function* () {
        const g = yield pe.fetchSectionSuggestionsByCountries(
          t.value,
          n.value,
          l(o.value.id)
        );
        let p = g.filter(
          (h) => s(h)
        );
        const m = g.filter(
          (h) => !s(h)
        );
        return p = p.slice(0, i), c.push(...p), m.forEach((h) => {
          h && !r(h) && (h.isListable = !1, e.commit("suggestions/addSectionSuggestion", h));
        }), c.length >= i;
      })), c.forEach(
        (g) => g.suggestionProvider = o.value
      ), c;
    })
  };
}, gy = window.Vuex.useStore, py = window.Vue.computed, my = () => {
  const e = gy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = T(), s = py(() => {
    var i;
    return ((i = o.value) == null ? void 0 : i.type) !== ee ? null : o.value.id;
  }), {
    isSectionSuggestionValid: a,
    isPageSuggestionValid: r,
    sectionSuggestionExists: l
  } = Yo();
  return {
    fetchSectionSuggestionsByCollections: () => C(void 0, null, function* () {
      const i = [], c = yield pe.fetchSectionSuggestionsByCollections(
        t.value,
        n.value,
        s.value
      );
      let g = c.filter(
        (m) => a(m)
      );
      const p = c.filter(
        (m) => !a(m)
      );
      return i.push(...g), p.forEach((m) => {
        m && !l(m) && (m.isListable = !1, e.commit("suggestions/addSectionSuggestion", m));
      }), i.forEach(
        (m) => m.suggestionProvider = o.value
      ), i;
    }),
    fetchPageSuggestionsByCollections: () => C(void 0, null, function* () {
      const i = [];
      let c = yield pe.fetchPageSuggestionsByCollections(
        t.value,
        n.value,
        s.value
      );
      return c = c.filter(
        (g) => r(g)
      ), i.push(...c), i.forEach(
        (g) => g.suggestionProvider = o.value
      ), i;
    })
  };
}, hy = window.Vuex.useStore, fy = () => {
  const e = hy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = T(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Yo();
  return {
    fetchPageSuggestionsBySeed: (d) => C(void 0, null, function* () {
      const i = o.value.id;
      let c = yield pe.fetchPageSuggestions(
        t.value,
        n.value,
        i
      );
      return c = c.filter(
        (g) => a(g)
      ), c = c.slice(0, d), c.forEach(
        (g) => g.suggestionProvider = {
          id: i,
          type: vt
        }
      ), c;
    }),
    fetchSectionSuggestionsBySeed: (d) => C(void 0, null, function* () {
      const i = [], c = o.value.id;
      return yield io(() => C(void 0, null, function* () {
        const g = yield pe.fetchSectionSuggestions(
          t.value,
          n.value,
          c
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
          id: c,
          type: vt
        }
      ), i;
    })
  };
}, wy = () => {
  const { currentSuggestionFilters: e } = T(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = sS(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = iS(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = cy(), {
    fetchPageSuggestionsByCountries: l,
    fetchSectionSuggestionsByCountries: u
  } = dy(), {
    fetchPageSuggestionsByCollections: d,
    fetchSectionSuggestionsByCollections: i
  } = my(), { fetchPageSuggestionsBySeed: c, fetchSectionSuggestionsBySeed: g } = fy(), p = {
    [Jt]: t,
    [vn]: o,
    [ee]: d,
    [Ge]: a,
    [Ve]: l,
    [vt]: c
  }, m = {
    [Jt]: n,
    [vn]: s,
    [ee]: i,
    [Ge]: r,
    [Ve]: u,
    [vt]: g
  }, h = (v) => v.type === Ye ? v.id : v.type;
  return {
    getCurrentPageSuggestionProvider: () => p[h(e.value)],
    getCurrentSectionSuggestionProvider: () => m[h(e.value)]
  };
}, vy = window.Vuex.useStore, cu = () => {
  const e = vy(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = tu(), { sourceLanguageURLParameter: o } = T(), s = Ko(), a = () => {
    const g = t(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, r = () => {
    const g = n(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, {
    getCurrentPageSuggestionProvider: l,
    getCurrentSectionSuggestionProvider: u
  } = wy(), d = (g) => {
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
      const g = r(), m = yield l()(
        g
      );
      m.forEach(
        (h) => e.commit("suggestions/addPageSuggestion", h)
      ), d(m), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, _y = window.Vuex.useStore, Ih = () => {
  const e = _y();
  return (t) => C(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield pe.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, Sy = window.Vuex.useStore, Rh = () => {
  const e = Sy(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = cu(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = tu(), { targetLanguageURLParameter: a } = T(), r = Ih();
  return () => C(void 0, null, function* () {
    const l = s(0), u = o(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, i = l.length === d, c = u.length === d;
    i && c || (yield r(a.value), t(), n());
  });
}, yy = window.Vuex.useStore, uu = () => {
  const e = yy(), t = Ko();
  return (n, o, s) => C(void 0, null, function* () {
    let a = e.getters["suggestions/getSectionSuggestionsForArticle"](n, o, s);
    if (!a) {
      a = yield pe.fetchSectionSuggestion(
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
          return new co({
            sourceLanguage: n,
            targetLanguage: o,
            sourceTitle: s,
            langLinksCount: r.langLinksCount,
            wikidataId: r.wikidataId
          });
        }
      } catch (r) {
        const l = new Error(
          `No page metadata found for title ${s} and language pair ${n}-${o}. ${r}`
        );
        throw mw.errorLogger.logError(l, "error.contenttranslation"), l;
      }
    }
    return a;
  });
}, gd = window.Vue.computed, xy = window.Vuex.useStore, Sn = () => {
  const e = xy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = T(), s = gd(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = gd(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (l, u) => s.value.getTitleForLanguage(l) || s.value.getTitleForLanguage(u)
  };
}, zh = window.Vuex.useStore, { setLanguageURLParams: Cy } = T(), du = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), Cy(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, Oh = () => {
  const e = zh(), t = Rh();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = Te(e);
    n === o && (n = a.value, o = s.value), du(e, n, o), t();
  };
}, by = () => {
  const e = zh(), t = uu(), { currentLanguageTitleGroup: n, targetPageExists: o } = Sn(), s = Ko();
  return (a, r) => C(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: u,
      setPageURLParam: d,
      clearSectionURLParameter: i
    } = T();
    a === r && (a = u.value, r = l.value);
    const c = n.value.getTitleForLanguage(a);
    du(e, a, r), d(c), o.value ? (i(), yield t(
      l.value,
      u.value,
      c
    )) : yield s(l.value, [c]);
  });
}, ky = window.Vuex.useStore, $y = window.Vue.ref, pd = $y(!1), jh = () => {
  const e = ky(), {
    supportedSourceLanguageCodes: t,
    supportedTargetLanguageCodes: n,
    fetchSupportedLanguageCodes: o
  } = pa(), { sourceLanguageURLParameter: s, targetLanguageURLParameter: a } = T(), r = () => {
    const u = K.getCurrentWikiLanguageCode(), d = (f) => t.value.includes(f), i = (f) => n.value.includes(f), c = {
      sourceLanguage: "en",
      targetLanguage: "es"
    }, g = [
      a.value,
      mw.storage.get("cxTargetLanguage"),
      u,
      c.targetLanguage
    ], p = [
      s.value,
      mw.storage.get("cxSourceLanguage"),
      c.sourceLanguage,
      u,
      c.targetLanguage
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
    du(e, u, d), pd.value = !0;
  }), applicationLanguagesInitialized: pd };
};
const Vy = window.Vue.resolveDynamicComponent, md = window.Vue.openBlock, hd = window.Vue.createBlock, Ey = window.Vue.Transition, cs = window.Vue.withCtx, us = window.Vue.createVNode, Ly = window.Vue.resolveComponent, br = window.Vue.unref, Ay = window.Vuex.useStore, fd = window.Vue.computed, Dy = window.Vue.onMounted, Ty = window.Vue.inject, By = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = T(), { initializeApplicationLanguages: n } = jh();
    t(), n();
    const o = Ty("breakpoints"), s = fd(() => o.value.mobile), a = Ay(), r = fd(
      () => a.state.application.autoSavePending
    );
    return Dy(() => {
      window.addEventListener("beforeunload", (l) => {
        r.value && (l.preventDefault(), l.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (l) => {
        document.visibilityState === "visible" && ch.assertUser().then(() => a.commit("application/setIsLoginDialogOn", !1)).catch((u) => {
          u instanceof Go && a.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (l, u) => {
      const d = Ly("router-view");
      return md(), hd(br(t0), { id: "contenttranslation" }, {
        default: cs(() => [
          us(br(N), { class: "cx-container" }, {
            default: cs(() => [
              us(br(k), {
                class: "cx-container__wrapper-col",
                cols: "12"
              }, {
                default: cs(() => [
                  us(d, null, {
                    default: cs(({ Component: i, route: c }) => [
                      us(Ey, {
                        name: s.value ? c.meta.transitionName : ""
                      }, {
                        default: cs(() => [
                          (md(), hd(Vy(i)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      us(fv)
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
}, Py = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translatorStats: null
}, Fy = {
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
class Hh {
  constructor({ id: t, type: n, question: o, url: s }) {
    this.id = t, this.type = n, this.question = o, this.url = s;
  }
}
class ro {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new Hh(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const wd = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => et(de({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class Ny {
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
    const t = wd((s = this.user) == null ? void 0 : s.content), n = wd((a = this.mt) == null ? void 0 : a.content);
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
class gu extends qc {
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
    pageRevision: l,
    status: u,
    targetTitle: d,
    targetUrl: i,
    sectionTranslations: c
  }) {
    super({
      translationId: t,
      sourceTitle: n,
      sourceLanguage: o,
      targetLanguage: s,
      startTimestamp: a,
      lastUpdatedTimestamp: r,
      pageRevision: l,
      status: u,
      targetTitle: d
    }), this.targetUrl = i, this.sectionTranslations = c;
  }
}
const Ki = mw.user.isAnon() ? void 0 : "user", qh = (e) => {
  if (e === "assertuserfailed")
    throw new Go();
};
function Gh(e, t = null) {
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
      var l;
      const a = s.query.contenttranslation.translations;
      let r;
      if (e === "draft" ? r = a.map(
        (u) => new zi(et(de({}, u), { status: e }))
      ) : r = a.map(
        (u) => new gu(et(de({}, u), { status: e }))
      ), (l = s.continue) != null && l.offset) {
        const u = yield Gh(
          e,
          s.continue.offset
        );
        r = r.concat(u);
      }
      return r;
    }));
  });
}
function My(e) {
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
      (a) => new Ny(a)
    );
  });
}
function Uy(e, t, n, o, s) {
  return C(this, null, function* () {
    if (!o)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== ne.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const r = K.getCXServerUrl(a);
    return fetch(r, {
      headers: { "Content-Type": "application/json", Authorization: s },
      method: "POST",
      body: JSON.stringify({ html: `<div>${o}</div>` })
    }).then(
      (l) => Promise.all([l.json(), Promise.resolve(l.ok)])
    ).then(([l, u]) => {
      var i, c;
      if (!u) {
        const g = l.detail || l.type || l.title || "fetchSegmentTranslation: Unknown error";
        throw new Error(g);
      }
      return (c = (i = new RegExp("<div>(?<content>(.|\\s)*)<\\/div>").exec(l.contents)) == null ? void 0 : i.groups) == null ? void 0 : c.content;
    }).catch((l) => Promise.reject(l));
  });
}
const Iy = (e, t, n) => {
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
}, Ry = ({
  html: e,
  sourceTitle: t,
  targetTitle: n,
  sourceSectionTitle: o,
  targetSectionTitle: s,
  sourceLanguage: a,
  targetLanguage: r,
  revision: l,
  captchaId: u,
  captchaWord: d,
  isSandbox: i,
  sectionTranslationId: c,
  existingSectionTitle: g
}) => {
  const p = {
    assert: Ki,
    action: "cxpublishsection",
    title: n,
    html: e,
    sourcetitle: t,
    sourcerevid: l,
    sourcesectiontitle: o,
    targetsectiontitle: s,
    sourcelanguage: a,
    targetlanguage: r,
    issandbox: i,
    sectiontranslationid: c,
    existingsectiontitle: g
  };
  return u && (p.captchaid = u, p.captchaword = d), new mw.Api().postWithToken("csrf", p).then((h) => {
    if (h = h.cxpublishsection, h.result === "error") {
      if (h.edit.captcha)
        return {
          publishFeedbackMessage: new ro({
            type: "captcha",
            status: "error",
            details: h.edit.captcha
          }),
          targetTitle: null
        };
      throw new Error();
    }
    return {
      publishFeedbackMessage: null,
      targetUrl: h.targeturl,
      pageId: h.edit.pageid,
      revisionId: h.edit.newrevid
    };
  }).catch((h, f) => {
    qh(h);
    let w;
    return f = f || {}, f.exception ? w = f.exception.message : f.error ? w = f.error.info : w = "Unknown error", {
      publishFeedbackMessage: new ro({
        text: w,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, zy = ({
  sourceTitle: e,
  targetTitle: t,
  sourceSectionTitle: n,
  targetSectionTitle: o,
  sourceLanguage: s,
  targetLanguage: a,
  revision: r,
  units: l,
  sectionId: u,
  isSandbox: d,
  progress: i
}) => {
  const c = {
    assert: Ki,
    action: "sxsave",
    targettitle: t,
    sourcetitle: e,
    sourcerevision: r,
    sourcesectiontitle: n,
    targetsectiontitle: o,
    sourcelanguage: s,
    targetlanguage: a,
    content: JSON.stringify(l),
    sectionid: u,
    issandbox: d,
    progress: JSON.stringify(i)
  };
  return new mw.Api().postWithToken("csrf", c).then((p) => p.sxsave.sectiontranslationid).catch((p, m) => {
    qh(p);
    let h;
    return m.exception ? h = m.exception.message : m.error ? h = m.error.info : h = "Unknown error", new ro({ text: h, status: "error" });
  });
}, Oy = (e) => {
  const t = {
    assert: Ki,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, jy = () => {
  const e = {
    assert: Ki,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new gu(n.cxcheckunreviewed.translation)
  );
}, Hy = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, qy = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, Gy = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), _t = {
  fetchTranslations: Gh,
  fetchTranslationUnits: My,
  fetchSegmentTranslation: Uy,
  parseTemplateWikitext: Iy,
  publishTranslation: Ry,
  saveTranslation: zy,
  deleteTranslation: Hy,
  fetchTranslatorStats: Gy,
  deleteCXTranslation: qy,
  splitTranslation: Oy,
  checkUnreviewedTranslations: jy
};
function Xy(t) {
  return C(this, arguments, function* ({ commit: e }) {
    const n = yield _t.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const Wy = {
  fetchTranslatorStats: Xy
}, Ky = {
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
}, Yy = {
  namespaced: !0,
  state: Py,
  getters: Fy,
  actions: Wy,
  mutations: Ky
}, Qy = {
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
  appendixSectionTitles: D_
}, Jy = {
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
}, Zy = {
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
}, ex = {
  namespaced: !0,
  state: Qy,
  getters: Jy,
  actions: {},
  mutations: Zy
}, tx = {
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
}, nx = {
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
function ox(o) {
  return C(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: s } = t.application;
    if ((r = n.nearbyPages[s]) != null && r.length)
      return;
    const a = yield lo.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const sx = { fetchNearbyPages: ox }, ax = {
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
}, ix = {
  namespaced: !0,
  state: tx,
  getters: nx,
  actions: sx,
  mutations: ax
}, rx = {
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
}, lx = {
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
}, cx = {
  namespaced: !0,
  state: rx,
  mutations: lx
}, ux = window.Vuex.createStore, dx = ux({
  modules: { translator: Yy, suggestions: ex, mediawiki: ix, application: cx }
});
function gx() {
  return Xh().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Xh() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const px = typeof Proxy == "function", mx = "devtools-plugin:setup", hx = "plugin:settings:set";
let ho, Bc;
function fx() {
  var e;
  return ho !== void 0 || (typeof window != "undefined" && window.performance ? (ho = !0, Bc = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (ho = !0, Bc = global.perf_hooks.performance) : ho = !1), ho;
}
function wx() {
  return fx() ? Bc.now() : Date.now();
}
class vx {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const o = {};
    if (t.settings)
      for (const r in t.settings) {
        const l = t.settings[r];
        o[r] = l.defaultValue;
      }
    const s = `__vue-devtools-plugin-settings__${t.id}`;
    let a = Object.assign({}, o);
    try {
      const r = localStorage.getItem(s), l = JSON.parse(r);
      Object.assign(a, l);
    } catch (r) {
    }
    this.fallbacks = {
      getSettings() {
        return a;
      },
      setSettings(r) {
        try {
          localStorage.setItem(s, JSON.stringify(r));
        } catch (l) {
        }
        a = r;
      },
      now() {
        return wx();
      }
    }, n && n.on(hx, (r, l) => {
      r === this.plugin.id && this.fallbacks.setSettings(l);
    }), this.proxiedOn = new Proxy({}, {
      get: (r, l) => this.target ? this.target.on[l] : (...u) => {
        this.onQueue.push({
          method: l,
          args: u
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (r, l) => this.target ? this.target[l] : l === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(l) ? (...u) => (this.targetQueue.push({
        method: l,
        args: u,
        resolve: () => {
        }
      }), this.fallbacks[l](...u)) : (...u) => new Promise((d) => {
        this.targetQueue.push({
          method: l,
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
function _x(e, t) {
  const n = e, o = Xh(), s = gx(), a = px && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(mx, e, t);
  else {
    const r = a ? new vx(n, s) : null;
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
const Wh = window.Vue.getCurrentInstance, Ho = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const Yt = window.Vue.computed, sa = window.Vue.unref, Sx = window.Vue.watchEffect, Kh = window.Vue.defineComponent, yx = window.Vue.reactive, Yh = window.Vue.h, kr = window.Vue.provide, xx = window.Vue.ref, Qh = window.Vue.watch, Cx = window.Vue.shallowRef, bx = window.Vue.shallowReactive, kx = window.Vue.nextTick, wn = typeof window != "undefined";
function $x(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const Q = Object.assign;
function $r(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = ct(s) ? s.map(e) : e(s);
  }
  return n;
}
const aa = () => {
}, ct = Array.isArray;
function W(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Vx = /\/$/, Ex = (e) => e.replace(Vx, "");
function Vr(e, t, n = "/") {
  let o, s = {}, a = "", r = "";
  const l = t.indexOf("#");
  let u = t.indexOf("?");
  return l < u && l >= 0 && (u = -1), u > -1 && (o = t.slice(0, u), a = t.slice(u + 1, l > -1 ? l : t.length), s = e(a)), l > -1 && (o = o || t.slice(0, l), r = t.slice(l, t.length)), o = Dx(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + r,
    path: o,
    query: s,
    hash: r
  };
}
function Lx(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function vd(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function _d(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && Rn(t.matched[o], n.matched[s]) && Jh(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Rn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Jh(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Ax(e[n], t[n]))
      return !1;
  return !0;
}
function Ax(e, t) {
  return ct(e) ? Sd(e, t) : ct(t) ? Sd(t, e) : e === t;
}
function Sd(e, t) {
  return ct(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function Dx(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return W(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const n = t.split("/"), o = e.split("/"), s = o[o.length - 1];
  (s === ".." || s === ".") && o.push("");
  let a = n.length - 1, r, l;
  for (r = 0; r < o.length; r++)
    if (l = o[r], l !== ".")
      if (l === "..")
        a > 1 && a--;
      else
        break;
  return n.slice(0, a).join("/") + "/" + o.slice(r - (r === o.length ? 1 : 0)).join("/");
}
var la;
(function(e) {
  e.pop = "pop", e.push = "push";
})(la || (la = {}));
var ia;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(ia || (ia = {}));
function Tx(e) {
  if (!e)
    if (wn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Ex(e);
}
const Bx = /^[^#]+#/;
function Px(e, t) {
  return e.replace(Bx, "#") + t;
}
function Fx(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const Yi = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function Nx(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if ({}.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const a = document.querySelector(e.el);
        if (o && a) {
          W(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch (a) {
        W(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) {
      ({}).NODE_ENV !== "production" && W(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = Fx(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function yd(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Pc = /* @__PURE__ */ new Map();
function Mx(e, t) {
  Pc.set(e, t);
}
function Ux(e) {
  const t = Pc.get(e);
  return Pc.delete(e), t;
}
let Ix = () => location.protocol + "//" + location.host;
function Zh(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = s.includes(e.slice(a)) ? e.slice(a).length : 1, u = s.slice(l);
    return u[0] !== "/" && (u = "/" + u), vd(u, "");
  }
  return vd(n, e) + o + s;
}
function Rx(e, t, n, o) {
  let s = [], a = [], r = null;
  const l = ({ state: g }) => {
    const p = Zh(e, location), m = n.value, h = t.value;
    let f = 0;
    if (g) {
      if (n.value = p, t.value = g, r && r === m) {
        r = null;
        return;
      }
      f = h ? g.position - h.position : 0;
    } else
      o(p);
    s.forEach((w) => {
      w(n.value, m, {
        delta: f,
        type: la.pop,
        direction: f ? f > 0 ? ia.forward : ia.back : ia.unknown
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
    g.state && g.replaceState(Q({}, g.state, { scroll: Yi() }), "");
  }
  function c() {
    for (const g of a)
      g();
    a = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", i);
  }
  return window.addEventListener("popstate", l), window.addEventListener("beforeunload", i, {
    passive: !0
  }), {
    pauseListeners: u,
    listen: d,
    destroy: c
  };
}
function xd(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Yi() : null
  };
}
function zx(e) {
  const { history: t, location: n } = window, o = {
    value: Zh(e, n)
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
    const c = e.indexOf("#"), g = c > -1 ? (n.host && document.querySelector("base") ? e : e.slice(c)) + u : Ix() + e + u;
    try {
      t[i ? "replaceState" : "pushState"](d, "", g), s.value = d;
    } catch (p) {
      ({}).NODE_ENV !== "production" ? W("Error with push/replace State", p) : console.error(p), n[i ? "replace" : "assign"](g);
    }
  }
  function r(u, d) {
    const i = Q({}, t.state, xd(
      s.value.back,
      // keep back and forward entries but override current position
      u,
      s.value.forward,
      !0
    ), d, { position: s.value.position });
    a(u, i, !0), o.value = u;
  }
  function l(u, d) {
    const i = Q(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: u,
        scroll: Yi()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && W(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(i.current, i, !0);
    const c = Q({}, xd(o.value, u, null), { position: i.position + 1 }, d);
    a(u, c, !1), o.value = u;
  }
  return {
    location: o,
    state: s,
    push: l,
    replace: r
  };
}
function Ox(e) {
  e = Tx(e);
  const t = zx(e), n = Rx(e, t.state, t.location, t.replace);
  function o(a, r = !0) {
    r || n.pauseListeners(), history.go(a);
  }
  const s = Q({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: Px.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function jx(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && W(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), Ox(e);
}
function Hx(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function ef(e) {
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
}, Fc = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var Cd;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Cd || (Cd = {}));
const qx = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${Xx(t)}" via a navigation guard.`;
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
function qo(e, t) {
  return {}.NODE_ENV !== "production" ? Q(new Error(qx[e](t)), {
    type: e,
    [Fc]: !0
  }, t) : Q(new Error(), {
    type: e,
    [Fc]: !0
  }, t);
}
function en(e, t) {
  return e instanceof Error && Fc in e && (t == null || !!(e.type & t));
}
const Gx = ["params", "query", "hash"];
function Xx(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of Gx)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const bd = "[^/]+?", Wx = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Kx = /[.+*?^${}()[\]/\\]/g;
function Yx(e, t) {
  const n = Q({}, Wx, t), o = [];
  let s = n.start ? "^" : "";
  const a = [];
  for (const d of e) {
    const i = d.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !d.length && (s += "/");
    for (let c = 0; c < d.length; c++) {
      const g = d[c];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (g.type === 0)
        c || (s += "/"), s += g.value.replace(Kx, "\\$&"), p += 40;
      else if (g.type === 1) {
        const { value: m, repeatable: h, optional: f, regexp: w } = g;
        a.push({
          name: m,
          repeatable: h,
          optional: f
        });
        const v = w || bd;
        if (v !== bd) {
          p += 10;
          try {
            new RegExp(`(${v})`);
          } catch (S) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${v}): ` + S.message);
          }
        }
        let y = h ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`;
        c || (y = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        f && d.length < 2 ? `(?:/${y})` : "/" + y), f && (y += "?"), s += y, p += 20, f && (p += -8), h && (p += -20), v === ".*" && (p += -50);
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
  function l(d) {
    const i = d.match(r), c = {};
    if (!i)
      return null;
    for (let g = 1; g < i.length; g++) {
      const p = i[g] || "", m = a[g - 1];
      c[m.name] = p && m.repeatable ? p.split("/") : p;
    }
    return c;
  }
  function u(d) {
    let i = "", c = !1;
    for (const g of e) {
      (!c || !i.endsWith("/")) && (i += "/"), c = !1;
      for (const p of g)
        if (p.type === 0)
          i += p.value;
        else if (p.type === 1) {
          const { value: m, repeatable: h, optional: f } = p, w = m in d ? d[m] : "";
          if (ct(w) && !h)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const v = ct(w) ? w.join("/") : w;
          if (!v)
            if (f)
              g.length < 2 && (i.endsWith("/") ? i = i.slice(0, -1) : c = !0);
            else
              throw new Error(`Missing required param "${m}"`);
          i += v;
        }
    }
    return i || "/";
  }
  return {
    re: r,
    score: o,
    keys: a,
    parse: l,
    stringify: u
  };
}
function Qx(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function Jx(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = Qx(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (kd(o))
      return 1;
    if (kd(s))
      return -1;
  }
  return s.length - o.length;
}
function kd(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Zx = {
  type: 0,
  value: ""
}, eC = /[a-zA-Z0-9_]/;
function tC(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[Zx]];
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
  let l = 0, u, d = "", i = "";
  function c() {
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
  for (; l < e.length; ) {
    if (u = e[l++], u === "\\" && n !== 2) {
      o = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        u === "/" ? (d && c(), r()) : u === ":" ? (c(), n = 1) : g();
        break;
      case 4:
        g(), n = o;
        break;
      case 1:
        u === "(" ? n = 2 : eC.test(u) ? g() : (c(), n = 0, u !== "*" && u !== "?" && u !== "+" && l--);
        break;
      case 2:
        u === ")" ? i[i.length - 1] == "\\" ? i = i.slice(0, -1) + u : n = 3 : i += u;
        break;
      case 3:
        c(), n = 0, u !== "*" && u !== "?" && u !== "+" && l--, i = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${d}"`), c(), r(), s;
}
function nC(e, t, n) {
  const o = Yx(tC(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const r of o.keys)
      a.has(r.name) && W(`Found duplicated params with name "${r.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(r.name);
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
function oC(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = Ed({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(i) {
    return o.get(i);
  }
  function a(i, c, g) {
    const p = !g, m = sC(i);
    ({}).NODE_ENV !== "production" && lC(m, c), m.aliasOf = g && g.record;
    const h = Ed(t, i), f = [
      m
    ];
    if ("alias" in i) {
      const y = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const S of y)
        f.push(Q({}, m, {
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
    let w, v;
    for (const y of f) {
      const { path: S } = y;
      if (c && S[0] !== "/") {
        const b = c.record.path, E = b[b.length - 1] === "/" ? "" : "/";
        y.path = c.record.path + (S && E + S);
      }
      if ({}.NODE_ENV !== "production" && y.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (w = nC(y, c, h), {}.NODE_ENV !== "production" && c && S[0] === "/" && cC(w, c), g ? (g.alias.push(w), {}.NODE_ENV !== "production" && rC(g, w)) : (v = v || w, v !== w && v.alias.push(w), p && i.name && !Vd(w) && r(i.name)), m.children) {
        const b = m.children;
        for (let E = 0; E < b.length; E++)
          a(b[E], w, g && g.children[E]);
      }
      g = g || w, (w.record.components && Object.keys(w.record.components).length || w.record.name || w.record.redirect) && u(w);
    }
    return v ? () => {
      r(v);
    } : aa;
  }
  function r(i) {
    if (ef(i)) {
      const c = o.get(i);
      c && (o.delete(i), n.splice(n.indexOf(c), 1), c.children.forEach(r), c.alias.forEach(r));
    } else {
      const c = n.indexOf(i);
      c > -1 && (n.splice(c, 1), i.record.name && o.delete(i.record.name), i.children.forEach(r), i.alias.forEach(r));
    }
  }
  function l() {
    return n;
  }
  function u(i) {
    let c = 0;
    for (; c < n.length && Jx(i, n[c]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[c].record.path || !tf(i, n[c])); )
      c++;
    n.splice(c, 0, i), i.record.name && !Vd(i) && o.set(i.record.name, i);
  }
  function d(i, c) {
    let g, p = {}, m, h;
    if ("name" in i && i.name) {
      if (g = o.get(i.name), !g)
        throw qo(1, {
          location: i
        });
      if ({}.NODE_ENV !== "production") {
        const v = Object.keys(i.params || {}).filter((y) => !g.keys.find((S) => S.name === y));
        v.length && W(`Discarded invalid param(s) "${v.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = g.record.name, p = Q(
        // paramsFromLocation is a new object
        $d(
          c.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((v) => !v.optional).map((v) => v.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && $d(i.params, g.keys.map((v) => v.name))
      ), m = g.stringify(p);
    } else if ("path" in i)
      m = i.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && W(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((v) => v.re.test(m)), g && (p = g.parse(m), h = g.record.name);
    else {
      if (g = c.name ? o.get(c.name) : n.find((v) => v.re.test(c.path)), !g)
        throw qo(1, {
          location: i,
          currentLocation: c
        });
      h = g.record.name, p = Q({}, c.params, i.params), m = g.stringify(p);
    }
    const f = [];
    let w = g;
    for (; w; )
      f.unshift(w.record), w = w.parent;
    return {
      name: h,
      path: m,
      params: p,
      matched: f,
      meta: iC(f)
    };
  }
  return e.forEach((i) => a(i)), { addRoute: a, resolve: d, removeRoute: r, getRoutes: l, getRecordMatcher: s };
}
function $d(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function sC(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: aC(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function aC(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function Vd(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function iC(e) {
  return e.reduce((t, n) => Q(t, n.meta), {});
}
function Ed(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Nc(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function rC(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Nc.bind(null, n)))
      return W(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Nc.bind(null, n)))
      return W(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function lC(e, t) {
  t && t.record.name && !e.name && !e.path && W(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function cC(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Nc.bind(null, n)))
      return W(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function tf(e, t) {
  return t.children.some((n) => n === e || tf(e, n));
}
const nf = /#/g, uC = /&/g, dC = /\//g, gC = /=/g, pC = /\?/g, of = /\+/g, mC = /%5B/g, hC = /%5D/g, sf = /%5E/g, fC = /%60/g, af = /%7B/g, wC = /%7C/g, rf = /%7D/g, vC = /%20/g;
function pu(e) {
  return encodeURI("" + e).replace(wC, "|").replace(mC, "[").replace(hC, "]");
}
function _C(e) {
  return pu(e).replace(af, "{").replace(rf, "}").replace(sf, "^");
}
function Mc(e) {
  return pu(e).replace(of, "%2B").replace(vC, "+").replace(nf, "%23").replace(uC, "%26").replace(fC, "`").replace(af, "{").replace(rf, "}").replace(sf, "^");
}
function SC(e) {
  return Mc(e).replace(gC, "%3D");
}
function yC(e) {
  return pu(e).replace(nf, "%23").replace(pC, "%3F");
}
function xC(e) {
  return e == null ? "" : yC(e).replace(dC, "%2F");
}
function ca(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && W(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function CC(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(of, " "), r = a.indexOf("="), l = ca(r < 0 ? a : a.slice(0, r)), u = r < 0 ? null : ca(a.slice(r + 1));
    if (l in t) {
      let d = t[l];
      ct(d) || (d = t[l] = [d]), d.push(u);
    } else
      t[l] = u;
  }
  return t;
}
function Ld(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = SC(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (ct(o) ? o.map((a) => a && Mc(a)) : [o && Mc(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function bC(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = ct(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const kC = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), Ad = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), Qi = Symbol({}.NODE_ENV !== "production" ? "router" : ""), lf = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), Uc = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function ds() {
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
function Un(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((r, l) => {
    const u = (c) => {
      c === !1 ? l(qo(4, {
        from: n,
        to: t
      })) : c instanceof Error ? l(c) : Hx(c) ? l(qo(2, {
        from: t,
        to: c
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof c == "function" && a.push(c), r());
    }, d = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? $C(u, t, n) : u);
    let i = Promise.resolve(d);
    if (e.length < 3 && (i = i.then(u)), {}.NODE_ENV !== "production" && e.length > 2) {
      const c = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof d == "object" && "then" in d)
        i = i.then((g) => u._called ? g : (W(c), Promise.reject(new Error("Invalid navigation guard"))));
      else if (d !== void 0 && !u._called) {
        W(c), l(new Error("Invalid navigation guard"));
        return;
      }
    }
    i.catch((c) => l(c));
  });
}
function $C(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && W(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function Er(e, t, n, o) {
  const s = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && W(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const r in a.components) {
      let l = a.components[r];
      if ({}.NODE_ENV !== "production") {
        if (!l || typeof l != "object" && typeof l != "function")
          throw W(`Component "${r}" in record with path "${a.path}" is not a valid component. Received "${String(l)}".`), new Error("Invalid route component");
        if ("then" in l) {
          W(`Component "${r}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const u = l;
          l = () => u;
        } else
          l.__asyncLoader && // warn only once per component
          !l.__warnedDefineAsync && (l.__warnedDefineAsync = !0, W(`Component "${r}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[r]))
        if (VC(l)) {
          const d = (l.__vccOpts || l)[t];
          d && s.push(Un(d, n, o, a, r));
        } else {
          let u = l();
          ({}).NODE_ENV !== "production" && !("catch" in u) && (W(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), u = Promise.resolve(u)), s.push(() => u.then((d) => {
            if (!d)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = $x(d) ? d.default : d;
            a.components[r] = i;
            const g = (i.__vccOpts || i)[t];
            return g && Un(g, n, o, a, r)();
          }));
        }
    }
  }
  return s;
}
function VC(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Dd(e) {
  const t = Ho(Qi), n = Ho(lf), o = Yt(() => t.resolve(sa(e.to))), s = Yt(() => {
    const { matched: u } = o.value, { length: d } = u, i = u[d - 1], c = n.matched;
    if (!i || !c.length)
      return -1;
    const g = c.findIndex(Rn.bind(null, i));
    if (g > -1)
      return g;
    const p = Td(u[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Td(i) === p && // avoid comparing the child with its parent
      c[c.length - 1].path !== p ? c.findIndex(Rn.bind(null, u[d - 2])) : g
    );
  }), a = Yt(() => s.value > -1 && DC(n.params, o.value.params)), r = Yt(() => s.value > -1 && s.value === n.matched.length - 1 && Jh(n.params, o.value.params));
  function l(u = {}) {
    return AC(u) ? t[sa(e.replace) ? "replace" : "push"](
      sa(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(aa) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && wn) {
    const u = Wh();
    if (u) {
      const d = {
        route: o.value,
        isActive: a.value,
        isExactActive: r.value
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(d), Sx(() => {
        d.route = o.value, d.isActive = a.value, d.isExactActive = r.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: Yt(() => o.value.href),
    isActive: a,
    isExactActive: r,
    navigate: l
  };
}
const EC = /* @__PURE__ */ Kh({
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
  useLink: Dd,
  setup(e, { slots: t }) {
    const n = yx(Dd(e)), { options: o } = Ho(Qi), s = Yt(() => ({
      [Bd(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Bd(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : Yh("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), LC = EC;
function AC(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function DC(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!ct(s) || s.length !== o.length || o.some((a, r) => a !== s[r]))
      return !1;
  }
  return !0;
}
function Td(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Bd = (e, t, n) => e != null ? e : t != null ? t : n, TC = /* @__PURE__ */ Kh({
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
    ({}).NODE_ENV !== "production" && PC();
    const o = Ho(Uc), s = Yt(() => e.route || o.value), a = Ho(Ad, 0), r = Yt(() => {
      let d = sa(a);
      const { matched: i } = s.value;
      let c;
      for (; (c = i[d]) && !c.components; )
        d++;
      return d;
    }), l = Yt(() => s.value.matched[r.value]);
    kr(Ad, Yt(() => r.value + 1)), kr(kC, l), kr(Uc, s);
    const u = xx();
    return Qh(() => [u.value, l.value, e.name], ([d, i, c], [g, p, m]) => {
      i && (i.instances[c] = d, p && p !== i && d && d === g && (i.leaveGuards.size || (i.leaveGuards = p.leaveGuards), i.updateGuards.size || (i.updateGuards = p.updateGuards))), d && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !Rn(i, p) || !g) && (i.enterCallbacks[c] || []).forEach((h) => h(d));
    }, { flush: "post" }), () => {
      const d = s.value, i = e.name, c = l.value, g = c && c.components[i];
      if (!g)
        return Pd(n.default, { Component: g, route: d });
      const p = c.props[i], m = p ? p === !0 ? d.params : typeof p == "function" ? p(d) : p : null, f = Yh(g, Q({}, m, t, {
        onVnodeUnmounted: (w) => {
          w.component.isUnmounted && (c.instances[i] = null);
        },
        ref: u
      }));
      if ({}.NODE_ENV !== "production" && wn && f.ref) {
        const w = {
          depth: r.value,
          name: c.name,
          path: c.path,
          meta: c.meta
        };
        (ct(f.ref) ? f.ref.map((y) => y.i) : [f.ref.i]).forEach((y) => {
          y.__vrv_devtools = w;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Pd(n.default, { Component: f, route: d }) || f
      );
    };
  }
});
function Pd(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const BC = TC;
function PC() {
  const e = Wh(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    W(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function gs(e, t) {
  const n = Q({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => jC(o, ["instances", "children", "aliasOf"]))
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
function Ta(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let FC = 0;
function NC(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = FC++;
  _x({
    id: "org.vuejs.router" + (o ? "." + o : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (s) => {
    typeof s.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), s.on.inspectComponent((i, c) => {
      i.instanceData && i.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: gs(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: i, componentInstance: c }) => {
      if (c.__vrv_devtools) {
        const g = c.__vrv_devtools;
        i.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: cf
        });
      }
      ct(c.__vrl_devtools) && (c.__devtoolsApi = s, c.__vrl_devtools.forEach((g) => {
        let p = gf, m = "";
        g.isExactActive ? (p = df, m = "This is exactly active") : g.isActive && (p = uf, m = "This link is active"), i.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: m,
          backgroundColor: p
        });
      }));
    }), Qh(t.currentRoute, () => {
      u(), s.notifyComponentUpdate(), s.sendInspectorTree(l), s.sendInspectorState(l);
    });
    const a = "router:navigations:" + o;
    s.addTimelineLayer({
      id: a,
      label: `Router${o ? " " + o : ""} Navigations`,
      color: 4237508
    }), t.onError((i, c) => {
      s.addTimelineEvent({
        layerId: a,
        event: {
          title: "Error during Navigation",
          subtitle: c.fullPath,
          logType: "error",
          time: s.now(),
          data: { error: i },
          groupId: c.meta.__navigationId
        }
      });
    });
    let r = 0;
    t.beforeEach((i, c) => {
      const g = {
        guard: Ta("beforeEach"),
        from: gs(c, "Current Location during this navigation"),
        to: gs(i, "Target location")
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
    }), t.afterEach((i, c, g) => {
      const p = {
        guard: Ta("afterEach")
      };
      g ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, p.status = Ta("❌")) : p.status = Ta("✅"), p.from = gs(c, "Current Location during this navigation"), p.to = gs(i, "Target location"), s.addTimelineEvent({
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
    const l = "router-inspector:" + o;
    s.addInspector({
      id: l,
      label: "Routes" + (o ? " " + o : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function u() {
      if (!d)
        return;
      const i = d;
      let c = n.getRoutes().filter((g) => !g.parent);
      c.forEach(hf), i.filter && (c = c.filter((g) => (
        // save matches state based on the payload
        Ic(g, i.filter.toLowerCase())
      ))), c.forEach((g) => mf(g, t.currentRoute.value)), i.rootNodes = c.map(pf);
    }
    let d;
    s.on.getInspectorTree((i) => {
      d = i, i.app === e && i.inspectorId === l && u();
    }), s.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === l) {
        const g = n.getRoutes().find((p) => p.record.__vd_id === i.nodeId);
        g && (i.state = {
          options: UC(g)
        });
      }
    }), s.sendInspectorTree(l), s.sendInspectorState(l);
  });
}
function MC(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function UC(e) {
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
        display: e.keys.map((o) => `${o.name}${MC(o)}`).join(" "),
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
const cf = 15485081, uf = 2450411, df = 8702998, IC = 2282478, gf = 16486972, RC = 6710886;
function pf(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: IC
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: gf
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: cf
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: df
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: uf
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: RC
  });
  let o = n.__vd_id;
  return o == null && (o = String(zC++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(pf)
  };
}
let zC = 0;
const OC = /^\/(.*)\/([a-z]*)$/;
function mf(e, t) {
  const n = t.matched.length && Rn(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => Rn(o, e.record))), e.children.forEach((o) => mf(o, t));
}
function hf(e) {
  e.__vd_match = !1, e.children.forEach(hf);
}
function Ic(e, t) {
  const n = String(e.re).match(OC);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => Ic(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = ca(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => Ic(r, t));
}
function jC(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function HC(e) {
  const t = oC(e.routes, e), n = e.parseQuery || CC, o = e.stringifyQuery || Ld, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = ds(), r = ds(), l = ds(), u = Cx(Cn);
  let d = Cn;
  wn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = $r.bind(null, (_) => "" + _), c = $r.bind(null, xC), g = (
    // @ts-expect-error: intentionally avoid the type check
    $r.bind(null, ca)
  );
  function p(_, A) {
    let D, F;
    return ef(_) ? (D = t.getRecordMatcher(_), F = A) : F = _, t.addRoute(F, D);
  }
  function m(_) {
    const A = t.getRecordMatcher(_);
    A ? t.removeRoute(A) : {}.NODE_ENV !== "production" && W(`Cannot remove non-existent route "${String(_)}"`);
  }
  function h() {
    return t.getRoutes().map((_) => _.record);
  }
  function f(_) {
    return !!t.getRecordMatcher(_);
  }
  function w(_, A) {
    if (A = Q({}, A || u.value), typeof _ == "string") {
      const z = Vr(n, _, A.path), ie = t.resolve({ path: z.path }, A), Ze = s.createHref(z.fullPath);
      return {}.NODE_ENV !== "production" && (Ze.startsWith("//") ? W(`Location "${_}" resolved to "${Ze}". A resolved location cannot start with multiple slashes.`) : ie.matched.length || W(`No match found for location with path "${_}"`)), Q(z, ie, {
        params: g(ie.params),
        hash: ca(z.hash),
        redirectedFrom: void 0,
        href: Ze
      });
    }
    let D;
    if ("path" in _)
      ({}).NODE_ENV !== "production" && "params" in _ && !("name" in _) && // @ts-expect-error: the type is never
      Object.keys(_.params).length && W(`Path "${_.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), D = Q({}, _, {
        path: Vr(n, _.path, A.path).path
      });
    else {
      const z = Q({}, _.params);
      for (const ie in z)
        z[ie] == null && delete z[ie];
      D = Q({}, _, {
        params: c(z)
      }), A.params = c(A.params);
    }
    const F = t.resolve(D, A), X = _.hash || "";
    ({}).NODE_ENV !== "production" && X && !X.startsWith("#") && W(`A \`hash\` should always start with the character "#". Replace "${X}" with "#${X}".`), F.params = i(g(F.params));
    const ue = Lx(o, Q({}, _, {
      hash: _C(X),
      path: F.path
    })), H = s.createHref(ue);
    return {}.NODE_ENV !== "production" && (H.startsWith("//") ? W(`Location "${_}" resolved to "${H}". A resolved location cannot start with multiple slashes.`) : F.matched.length || W(`No match found for location with path "${"path" in _ ? _.path : _}"`)), Q({
      fullPath: ue,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: X,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === Ld ? bC(_.query) : _.query || {}
      )
    }, F, {
      redirectedFrom: void 0,
      href: H
    });
  }
  function v(_) {
    return typeof _ == "string" ? Vr(n, _, u.value.path) : Q({}, _);
  }
  function y(_, A) {
    if (d !== _)
      return qo(8, {
        from: A,
        to: _
      });
  }
  function S(_) {
    return x(_);
  }
  function b(_) {
    return S(Q(v(_), { replace: !0 }));
  }
  function E(_) {
    const A = _.matched[_.matched.length - 1];
    if (A && A.redirect) {
      const { redirect: D } = A;
      let F = typeof D == "function" ? D(_) : D;
      if (typeof F == "string" && (F = F.includes("?") || F.includes("#") ? F = v(F) : (
        // force empty params
        { path: F }
      ), F.params = {}), {}.NODE_ENV !== "production" && !("path" in F) && !("name" in F))
        throw W(`Invalid redirect found:
${JSON.stringify(F, null, 2)}
 when navigating to "${_.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return Q({
        query: _.query,
        hash: _.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in F ? {} : _.params
      }, F);
    }
  }
  function x(_, A) {
    const D = d = w(_), F = u.value, X = _.state, ue = _.force, H = _.replace === !0, z = E(D);
    if (z)
      return x(
        Q(v(z), {
          state: typeof z == "object" ? Q({}, X, z.state) : X,
          force: ue,
          replace: H
        }),
        // keep original redirectedFrom if it exists
        A || D
      );
    const ie = D;
    ie.redirectedFrom = A;
    let Ze;
    return !ue && _d(o, F, D) && (Ze = qo(16, { to: ie, from: F }), Be(
      F,
      F,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (Ze ? Promise.resolve(Ze) : B(ie, F)).catch((ke) => en(ke) ? (
      // navigation redirects still mark the router as ready
      en(
        ke,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? ke : We(ke)
    ) : (
      // reject any unknown error
      te(ke, ie, F)
    )).then((ke) => {
      if (ke) {
        if (en(
          ke,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          _d(o, w(ke.to), ie) && // and we have done it a couple of times
          A && // @ts-expect-error: added only in dev
          (A._count = A._count ? (
            // @ts-expect-error
            A._count + 1
          ) : 1) > 30 ? (W(`Detected a possibly infinite redirection in a navigation guard when going from "${F.fullPath}" to "${ie.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : x(
            // keep options
            Q({
              // preserve an existing replacement but allow the redirect to override it
              replace: H
            }, v(ke.to), {
              state: typeof ke.to == "object" ? Q({}, X, ke.to.state) : X,
              force: ue
            }),
            // preserve the original redirectedFrom if any
            A || ie
          );
      } else
        ke = G(ie, F, !0, H, X);
      return j(ie, F, ke), ke;
    });
  }
  function R(_, A) {
    const D = y(_, A);
    return D ? Promise.reject(D) : Promise.resolve();
  }
  function L(_) {
    const A = P.values().next().value;
    return A && typeof A.runWithContext == "function" ? A.runWithContext(_) : _();
  }
  function B(_, A) {
    let D;
    const [F, X, ue] = qC(_, A);
    D = Er(F.reverse(), "beforeRouteLeave", _, A);
    for (const z of F)
      z.leaveGuards.forEach((ie) => {
        D.push(Un(ie, _, A));
      });
    const H = R.bind(null, _, A);
    return D.push(H), Z(D).then(() => {
      D = [];
      for (const z of a.list())
        D.push(Un(z, _, A));
      return D.push(H), Z(D);
    }).then(() => {
      D = Er(X, "beforeRouteUpdate", _, A);
      for (const z of X)
        z.updateGuards.forEach((ie) => {
          D.push(Un(ie, _, A));
        });
      return D.push(H), Z(D);
    }).then(() => {
      D = [];
      for (const z of ue)
        if (z.beforeEnter)
          if (ct(z.beforeEnter))
            for (const ie of z.beforeEnter)
              D.push(Un(ie, _, A));
          else
            D.push(Un(z.beforeEnter, _, A));
      return D.push(H), Z(D);
    }).then(() => (_.matched.forEach((z) => z.enterCallbacks = {}), D = Er(ue, "beforeRouteEnter", _, A), D.push(H), Z(D))).then(() => {
      D = [];
      for (const z of r.list())
        D.push(Un(z, _, A));
      return D.push(H), Z(D);
    }).catch((z) => en(
      z,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? z : Promise.reject(z));
  }
  function j(_, A, D) {
    l.list().forEach((F) => L(() => F(_, A, D)));
  }
  function G(_, A, D, F, X) {
    const ue = y(_, A);
    if (ue)
      return ue;
    const H = A === Cn, z = wn ? history.state : {};
    D && (F || H ? s.replace(_.fullPath, Q({
      scroll: H && z && z.scroll
    }, X)) : s.push(_.fullPath, X)), u.value = _, Be(_, A, D, H), We();
  }
  let Y;
  function we() {
    Y || (Y = s.listen((_, A, D) => {
      if (!U.listening)
        return;
      const F = w(_), X = E(F);
      if (X) {
        x(Q(X, { replace: !0 }), F).catch(aa);
        return;
      }
      d = F;
      const ue = u.value;
      wn && Mx(yd(ue.fullPath, D.delta), Yi()), B(F, ue).catch((H) => en(
        H,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? H : en(
        H,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (x(
        H.to,
        F
        // avoid an uncaught rejection, let push call triggerError
      ).then((z) => {
        en(
          z,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !D.delta && D.type === la.pop && s.go(-1, !1);
      }).catch(aa), Promise.reject()) : (D.delta && s.go(-D.delta, !1), te(H, F, ue))).then((H) => {
        H = H || G(
          // after navigation, all matched components are resolved
          F,
          ue,
          !1
        ), H && (D.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !en(
          H,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-D.delta, !1) : D.type === la.pop && en(
          H,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), j(F, ue, H);
      }).catch(aa);
    }));
  }
  let q = ds(), se = ds(), ae;
  function te(_, A, D) {
    We(_);
    const F = se.list();
    return F.length ? F.forEach((X) => X(_, A, D)) : ({}.NODE_ENV !== "production" && W("uncaught error during route navigation:"), console.error(_)), Promise.reject(_);
  }
  function Ne() {
    return ae && u.value !== Cn ? Promise.resolve() : new Promise((_, A) => {
      q.add([_, A]);
    });
  }
  function We(_) {
    return ae || (ae = !_, we(), q.list().forEach(([A, D]) => _ ? D(_) : A()), q.reset()), _;
  }
  function Be(_, A, D, F) {
    const { scrollBehavior: X } = e;
    if (!wn || !X)
      return Promise.resolve();
    const ue = !D && Ux(yd(_.fullPath, 0)) || (F || !D) && history.state && history.state.scroll || null;
    return kx().then(() => X(_, A, ue)).then((H) => H && Nx(H)).catch((H) => te(H, _, A));
  }
  const J = (_) => s.go(_);
  let I;
  const P = /* @__PURE__ */ new Set(), U = {
    currentRoute: u,
    listening: !0,
    addRoute: p,
    removeRoute: m,
    hasRoute: f,
    getRoutes: h,
    resolve: w,
    options: e,
    push: S,
    replace: b,
    go: J,
    back: () => J(-1),
    forward: () => J(1),
    beforeEach: a.add,
    beforeResolve: r.add,
    afterEach: l.add,
    onError: se.add,
    isReady: Ne,
    install(_) {
      const A = this;
      _.component("RouterLink", LC), _.component("RouterView", BC), _.config.globalProperties.$router = A, Object.defineProperty(_.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => sa(u)
      }), wn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !I && u.value === Cn && (I = !0, S(s.location).catch((X) => {
        ({}).NODE_ENV !== "production" && W("Unexpected error when starting the router:", X);
      }));
      const D = {};
      for (const X in Cn)
        Object.defineProperty(D, X, {
          get: () => u.value[X],
          enumerable: !0
        });
      _.provide(Qi, A), _.provide(lf, bx(D)), _.provide(Uc, u);
      const F = _.unmount;
      P.add(_), _.unmount = function() {
        P.delete(_), P.size < 1 && (d = Cn, Y && Y(), Y = null, u.value = Cn, I = !1, ae = !1), F();
      }, {}.NODE_ENV !== "production" && wn && NC(_, A, t);
    }
  };
  function Z(_) {
    return _.reduce((A, D) => A.then(() => L(D)), Promise.resolve());
  }
  return U;
}
function qC(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let r = 0; r < a; r++) {
    const l = t.matched[r];
    l && (e.matched.find((d) => Rn(d, l)) ? o.push(l) : n.push(l));
    const u = e.matched[r];
    u && (t.matched.find((d) => Rn(d, u)) || s.push(u));
  }
  return [n, o, s];
}
function Xe() {
  return Ho(Qi);
}
const GC = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), r = parseInt(e.slice(12, 14)), l = new Date(Date.UTC(t, n, o, s, a, r)), d = (/* @__PURE__ */ new Date()).getTime() - l.getTime();
  return Math.round(d / (1e3 * 3600 * 24));
}, XC = (e) => {
  const t = GC(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const Ct = window.Vue.unref, fo = window.Vue.createVNode, tn = window.Vue.createElementVNode, Fd = window.Vue.renderSlot, Nd = window.Vue.withModifiers, Lr = window.Vue.toDisplayString, Ar = window.Vue.withCtx, WC = window.Vue.openBlock, KC = window.Vue.createElementBlock, YC = window.Vue.createCommentVNode, QC = { class: "col shrink pe-4" }, JC = { class: "col" }, ZC = { class: "cx-translation__details column justify-between ma-0" }, eb = { class: "row ma-0" }, tb = { class: "col grow" }, nb = { class: "col shrink ps-2" }, ob = ["dir", "textContent"], sb = ["dir", "textContent"], ab = ["textContent"], ib = window.Vuex.useStore, rb = window.Vue.computed, ff = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: qc,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e, { emit: t }) {
    const n = e, o = ib(), s = (l, u) => {
      const d = o.getters["mediawiki/getPage"](l, u);
      return d == null ? void 0 : d.thumbnail;
    }, a = fe(), r = rb(() => {
      const l = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, u = XC(n.translation.startTimestamp);
      return a.i18n(
        l[u.postfix],
        u.value
      );
    });
    return (l, u) => e.translation ? (WC(), KC("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: u[1] || (u[1] = Nd((d) => l.$emit("click"), ["stop"]))
    }, [
      tn("div", QC, [
        fo(Ct(Hc), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      tn("div", JC, [
        tn("div", ZC, [
          tn("div", eb, [
            tn("div", tb, [
              Fd(l.$slots, "title")
            ]),
            tn("div", nb, [
              fo(Ct(Je), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: u[0] || (u[0] = Nd((d) => l.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          Fd(l.$slots, "mid-content"),
          fo(Ct(N), { class: "cx-translation__footer ma-0" }, {
            default: Ar(() => [
              fo(Ct(k), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: Ar(() => [
                  tn("span", {
                    class: "mw-ui-autonym",
                    dir: Ct(O.getDir)(e.translation.sourceLanguage),
                    textContent: Lr(Ct(O.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, ob),
                  fo(Ct(Je), {
                    icon: Ct(V0),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  tn("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: Ct(O.getDir)(e.translation.targetLanguage),
                    textContent: Lr(Ct(O.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, sb)
                ]),
                _: 1
              }),
              fo(Ct(k), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: Ar(() => [
                  tn("span", {
                    textContent: Lr(r.value)
                  }, null, 8, ab)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : YC("", !0);
  }
};
const ps = window.Vue.unref, Md = window.Vue.toDisplayString, lb = window.Vue.normalizeClass, cb = window.Vue.createElementVNode, Dr = window.Vue.openBlock, ub = window.Vue.createElementBlock, Ud = window.Vue.createCommentVNode, Id = window.Vue.createVNode, Ba = window.Vue.withCtx, Rd = window.Vue.createBlock, db = ["lang", "textContent"], gb = ["lang", "textContent"], pb = window.Vue.computed, mb = window.Vue.inject, hb = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: zi,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = mb("colors").gray200, s = pb(
      () => {
        var u;
        return ((u = t.translation.progress) == null ? void 0 : u.any) * 100 || 0;
      }
    ), a = Xe(), { setTranslationURLParams: r } = T(), l = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (u, d) => (Dr(), Rd(ff, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": ps(ah),
      onActionIconClicked: d[0] || (d[0] = (i) => u.$emit("delete-translation")),
      onClick: l
    }, {
      title: Ba(() => [
        cb("h5", {
          class: lb(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: Md(e.translation.sourceTitle)
        }, null, 10, db),
        e.translation.isLeadSectionTranslation ? Ud("", !0) : (Dr(), ub("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: Md(e.translation.sourceSectionTitle)
        }, null, 8, gb))
      ]),
      "mid-content": Ba(() => [
        e.translation.progress ? (Dr(), Rd(ps(N), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Ba(() => [
            Id(ps(k), null, {
              default: Ba(() => [
                Id(ps(lh), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: ps(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Ud("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, fb = window.Vuex.useStore, wf = [], wb = (e, t, n) => wf.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), vb = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  wf.push(o);
}, _b = () => {
  const e = fb();
  return (t, n, o) => C(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !wb(t, n, o) && (s = yield pe.fetchSectionSuggestion(
      t,
      o,
      n
    ), vb(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, vf = "cx-translation-session-position-", _f = () => vf + mw.user.sessionId(), Sb = () => {
  const e = parseInt(
    mw.storage.get(_f())
  );
  return isNaN(e) ? 0 : e;
}, yb = function(e) {
  const t = _f();
  mw.storage.set(t, e);
}, xb = () => {
  Object.keys(mw.storage.store).filter((e) => e.startsWith(vf)).forEach((e) => mw.storage.remove(e));
}, Cb = () => {
  const e = Sb();
  return e % 10 === 0 && xb(), yb(e + 1), e;
};
let Rc = null;
function bb(e) {
  if (Rc)
    return Promise.resolve(Rc);
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
function kb(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function $b(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = mw.user.sessionId(), n = mw.config.get("wgDBname"), o = `cx_sx_${t}_${e.access_method}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), r = mw.user.getName(), l = {
    $schema: "/analytics/mediawiki/content_translation_event/1.11.0",
    wiki_db: n,
    user_name: r,
    web_session_id: t,
    web_pageview_id: mw.user.getPageviewToken(),
    user_is_anonymous: a,
    content_translation_session_id: o,
    content_translation_session_position: Cb()
  };
  return a ? Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, l, e))
  ) : bb(r).then((u) => {
    Rc = u, mw.eventLog.submit(
      s,
      Object.assign({}, l, e, {
        user_global_edit_count: u,
        user_global_edit_count_bucket: kb(u)
      })
    );
  });
}
const yt = () => (e) => (e.access_method || (e.access_method = Xo ? "desktop" : "mobile web"), $b(e)), Sf = window.Vue.ref, yf = Sf(null), zc = Sf(null), Vb = (e) => {
  e || mw.errorLogger.logError(
    new Error("[CX] Empty event source set"),
    "error.contenttranslation"
  ), yf.value = e;
}, Eb = (e) => {
  zc.value = e;
}, Ji = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = T(), s = yt();
  return {
    logDashboardTranslationStartEvent: () => {
      const r = {
        event_type: "dashboard_translation_start",
        event_source: yf.value,
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
      return zc.value && (r.event_context = zc.value), o.value ? (r.translation_source_section = o.value, r.translation_type = "section") : r.translation_type = "article", s(r);
    },
    setStartTranslationEventSource: Vb,
    setStartTranslationEventContext: Eb
  };
}, wa = () => {
  const e = Xe(), t = uu(), { setTranslationURLParams: n } = T(), { setStartTranslationEventSource: o, setStartTranslationEventContext: s } = Ji();
  return (a, r, l, u, d = null, i = !0) => C(void 0, null, function* () {
    o(u), s(d);
    const c = yield t(
      r,
      l,
      a
    );
    c && (n(c), i && e.push({ name: "sx-translation-confirmer" }));
  });
};
const Pa = window.Vue.withModifiers, Tr = window.Vue.toDisplayString, Br = window.Vue.createElementVNode, dt = window.Vue.unref, Fa = window.Vue.openBlock, zd = window.Vue.createBlock;
window.Vue.createCommentVNode;
const bn = window.Vue.createVNode, jn = window.Vue.withCtx, Od = window.Vue.createElementBlock, Lb = ["lang", "href", "textContent"], Ab = {
  key: 1,
  class: "flex"
}, Db = { key: 2 }, jd = window.Vue.computed, Hd = window.Vue.ref, Pr = window.Codex.CdxButton, Fr = window.Codex.CdxIcon, Tb = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: gu,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Hd(!0), o = Hd(null), s = jd(() => {
      var c;
      return (c = o.value) == null ? void 0 : c.missingSections;
    }), a = jd(
      () => s.value && Object.keys(s.value)[0]
    );
    _b()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((c) => o.value = c).catch((c) => console.log(c)).finally(() => n.value = !1);
    const { setSectionURLParam: l } = T(), u = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, d = wa(), i = (c) => {
      d(
        t.translation.sourceTitle,
        t.translation.sourceLanguage,
        t.translation.targetLanguage,
        "continue_published"
      ), c && l(c);
    };
    return (c, g) => (Fa(), zd(ff, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: u
    }, {
      title: jn(() => [
        Br("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: g[0] || (g[0] = Pa(() => {
          }, ["stop"])),
          textContent: Tr(e.translation.sourceTitle)
        }, null, 8, Lb)
      ]),
      "mid-content": jn(() => [
        bn(dt(N), { class: "ma-0" }, {
          default: jn(() => [
            bn(dt(k), null, {
              default: jn(() => [
                n.value ? (Fa(), zd(dt(lt), { key: 0 })) : s.value ? (Fa(), Od("div", Ab, [
                  bn(dt(Pr), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: g[1] || (g[1] = Pa((p) => i(a.value), ["stop"]))
                  }, {
                    default: jn(() => [
                      bn(dt(Fr), {
                        class: "me-1",
                        icon: dt(Ac)
                      }, null, 8, ["icon"]),
                      Br("span", null, Tr(a.value), 1)
                    ]),
                    _: 1
                  }),
                  bn(dt(Pr), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": c.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: g[2] || (g[2] = Pa((p) => i(null), ["stop"]))
                  }, {
                    default: jn(() => [
                      bn(dt(Fr), { icon: dt(ru) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : (Fa(), Od("div", Db, [
                  bn(dt(Pr), {
                    class: "cx-published-translation__start-new-translation-button flex items-center pa-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: g[3] || (g[3] = Pa((p) => i(null), ["stop"]))
                  }, {
                    default: jn(() => [
                      bn(dt(Fr), {
                        class: "me-1",
                        icon: dt(Ac)
                      }, null, 8, ["icon"]),
                      Br("span", null, Tr(c.$i18n("sx-published-translation-new-translation-button-label")), 1)
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
}, Bb = window.Vuex.useStore, Pb = () => {
  const { commit: e } = Bb(), t = yt();
  return (n) => C(void 0, null, function* () {
    n.isArticleTranslation ? (yield _t.deleteCXTranslation(
      n
    )) && e("translator/removeCXTranslation", n.translationId) : (yield _t.deleteTranslation(
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
const Fb = window.Vue.resolveDirective, Nr = window.Vue.createElementVNode, Nb = window.Vue.withDirectives, Mr = window.Vue.unref, qd = window.Vue.createVNode, Gd = window.Vue.withCtx, Mb = window.Vue.openBlock, Ub = window.Vue.createBlock, Ib = { class: "pa-4" }, Rb = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, zb = {
  __name: "SXConfirmTranslationDeletionDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: zi,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "continue-translation",
    "discard-translation"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, s = () => o("update:modelValue", !1), a = Pb(), r = () => {
      a(n.translation), s();
    };
    return (l, u) => {
      const d = Fb("i18n");
      return Mb(), Ub(Mr(St), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: Gd(() => [
          Nr("div", Rb, [
            qd(Mr(qe), {
              class: "grow py-3",
              large: "",
              label: l.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            qd(Mr(qe), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: l.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: r
            }, null, 8, ["label"])
          ])
        ]),
        default: Gd(() => [
          Nr("div", Ib, [
            Nb(Nr("span", null, null, 512), [
              [d, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function Ob(e, t, n) {
  return C(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield jb(t, n)).filter((s) => e.includes(s)) : [];
  });
}
function Xd(e, t, n) {
  return C(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(O.sortByAutonym) : (yield Ob(e, t, n)).sort(O.sortByAutonym);
  });
}
function jb(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function Hb() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function qb(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
const Gb = window.Vue.computed;
function Xb(e, t) {
  const n = Gb(() => {
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
const Ur = window.Vue.ref, Ir = window.Vue.watch, Wb = window.Vue.computed;
function xf(e, t, n) {
  const o = Ur(""), s = Ur(-1), a = Ur(null), r = () => {
    s.value++, s.value >= l.value.length && (s.value = 0);
  }, l = Wb(() => e.value ? t.value : n && n.value ? [...n.value, ...t.value] : []), u = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return Ir(e, () => {
    s.value = -1;
  }), Ir(t, () => {
    t.value && l.value.length > 0 && (s.value = 0);
  }), Ir(s, () => C(this, null, function* () {
    var d;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = l.value[s.value], (d = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || d.scrollIntoView(!1);
  })), { next: r, prev: u, keyboardNavigationContainer: a, selectedItem: o };
}
function mu(e, t, n) {
  let o;
  const s = (...a) => {
    const r = this, l = () => {
      o = null, n || e.apply(r, a);
    };
    n && !o && e.apply(r, a), (!o || t) && (clearTimeout(o), o = setTimeout(l, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const Na = window.Vue.renderSlot, Ee = window.Vue.unref, Kb = window.Vue.isRef, Wd = window.Vue.createVNode, ms = window.Vue.withModifiers, hs = window.Vue.withKeys, kn = window.Vue.createElementVNode, Yb = window.Vue.resolveDirective, Ma = window.Vue.withDirectives, Rr = window.Vue.renderList, zr = window.Vue.Fragment, nn = window.Vue.openBlock, on = window.Vue.createElementBlock, Kd = window.Vue.toDisplayString, Ua = window.Vue.normalizeClass, Or = window.Vue.createCommentVNode, Qb = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, Jb = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, Zb = { class: "results px-3 pt-4" }, ek = { class: "results-header ps-8 pb-2" }, tk = { class: "results-languages--suggestions pa-0 ma-0" }, nk = ["lang", "dir", "aria-selected", "onClick", "textContent"], ok = { class: "results px-3 pt-4" }, sk = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, ak = ["lang", "dir", "aria-selected", "onClick", "textContent"], ik = ["aria-selected"], rk = { class: "no-results px-3 py-4" }, lk = { class: "ps-8" }, Ia = window.Vue.ref, ck = window.Vue.watch, uk = window.Vue.onMounted, Yd = window.Vue.computed, Cf = {
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
      default: Hb
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = Ia(null), a = Ia(""), r = Ia([]), l = Ia(n.suggestions), u = Yd(
      () => qb(r.value)
    ), d = Yd(() => {
      const S = r.value.length;
      return S < 10 ? "few-results" : S < 30 ? "some-results" : "many-results";
    }), i = (S) => o("select", S), c = () => o("close"), { autocompletion: g, onTabSelect: p } = Xb(
      a,
      r
    ), { next: m, prev: h, keyboardNavigationContainer: f, selectedItem: w } = xf(a, r, l), v = () => {
      if (a.value && n.languages.includes(a.value)) {
        i(a.value);
        return;
      }
      if (w.value) {
        i(w.value);
        return;
      }
      if (r.value.length === 1) {
        i(r.value[0]);
        return;
      }
    };
    return ck(a, mu(() => C(this, null, function* () {
      r.value = yield Xd(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), uk(() => C(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), r.value = yield Xd(
        n.languages,
        "",
        n.searchAPI
      );
    })), (S, b) => {
      const E = Yb("i18n");
      return nn(), on("div", {
        ref_key: "keyboardNavigationContainer",
        ref: f,
        class: "mw-ui-language-selector"
      }, [
        Na(S.$slots, "search", {}, () => [
          kn("div", Qb, [
            Wd(Ee(Lc), {
              value: Ee(g),
              "onUpdate:value": b[0] || (b[0] = (x) => Kb(g) ? g.value = x : null),
              icon: Ee(Nu),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            Wd(Ee(Lc), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": b[1] || (b[1] = (x) => a.value = x),
              class: "mw-ui-language-selector__search pa-4",
              icon: Ee(Nu),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                hs(ms(v, ["prevent"]), ["enter"]),
                hs(ms(Ee(m), ["stop", "prevent"]), ["down"]),
                hs(ms(Ee(h), ["stop", "prevent"]), ["up"]),
                hs(ms(c, ["prevent"]), ["esc"]),
                hs(ms(Ee(p), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        kn("section", Jb, [
          e.suggestions.length && !a.value ? Na(S.$slots, "suggestions", { key: 0 }, () => [
            kn("section", Zb, [
              Ma(kn("p", ek, null, 512), [
                [E, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              kn("ul", tk, [
                (nn(!0), on(zr, null, Rr(e.suggestions, (x) => (nn(), on("li", {
                  key: x,
                  class: Ua(["language ma-0", { "language--selected": x === Ee(w) }]),
                  lang: x,
                  dir: Ee(O.getDir)(x),
                  "aria-selected": x === Ee(w) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (R) => i(x),
                  textContent: Kd(Ee(O.getAutonym)(x))
                }, null, 10, nk))), 128))
              ])
            ])
          ]) : Or("", !0),
          u.value.length ? Na(S.$slots, "search", { key: 1 }, () => [
            kn("section", ok, [
              e.suggestions.length && !a.value ? Ma((nn(), on("p", sk, null, 512)), [
                [E, void 0, "cx-sx-language-selector-all-languages"]
              ]) : Or("", !0),
              (nn(!0), on(zr, null, Rr(u.value, (x, R) => (nn(), on("ul", {
                key: R,
                class: Ua(["results-languages pa-0 ma-0 mb-6", d.value])
              }, [
                (nn(!0), on(zr, null, Rr(x, (L) => (nn(), on("li", {
                  key: L,
                  class: Ua(["language ma-0", { "language--selected": L === Ee(w) }]),
                  lang: L,
                  dir: Ee(O.getDir)(L),
                  role: "option",
                  "aria-selected": L === Ee(w) || null,
                  tabindex: "-1",
                  onClick: (B) => i(L),
                  textContent: Kd(Ee(O.getAutonym)(L))
                }, null, 10, ak))), 128)),
                e.allOptionEnabled && !a.value ? Ma((nn(), on("li", {
                  key: 0,
                  class: Ua(["language ma-0", { "language--selected": Ee(w) === "all" }]),
                  role: "option",
                  "aria-selected": Ee(w) === "all" || null,
                  tabindex: "-1",
                  onClick: b[2] || (b[2] = (L) => i("all"))
                }, null, 10, ik)), [
                  [E, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : Or("", !0)
              ], 2))), 128))
            ])
          ]) : Na(S.$slots, "noresults", { key: 2 }, () => [
            kn("section", rk, [
              Ma(kn("h3", lk, null, 512), [
                [E, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const dk = window.Vue.resolveDirective, Qd = window.Vue.withDirectives, fs = window.Vue.openBlock, ws = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Le = window.Vue.unref, Jd = window.Vue.toDisplayString, bt = window.Vue.createVNode, Zd = window.Vue.withModifiers, Hn = window.Vue.withCtx, gk = window.Vue.normalizeClass, pk = {
  key: 0,
  class: "mw-ui-autonym"
}, mk = ["lang", "dir", "textContent"], hk = {
  key: 0,
  class: "mw-ui-autonym"
}, fk = ["lang", "dir", "textContent"], vs = window.Vue.computed, wk = window.Vue.inject, vk = window.Vue.ref, eg = window.Codex.CdxButton, jr = window.Codex.CdxIcon, Mi = {
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
    const n = e, o = t, s = wk("breakpoints"), a = vs(() => s.value.mobile), r = vk(null), l = vs(() => !!r.value), u = () => r.value = "source", d = () => r.value = "target", i = () => r.value = null, c = vs(() => {
      if (!l.value)
        return;
      const f = {
        source: "sourceLanguages",
        target: "targetLanguages"
      }[r.value];
      return n[f];
    }), g = (h) => {
      const w = {
        source: "update:selectedSourceLanguage",
        target: "update:selectedTargetLanguage"
      }[r.value];
      i(), o(w, h);
    }, p = vs(
      () => n.selectedSourceLanguage === "all"
    ), m = vs(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, f) => {
      const w = dk("i18n");
      return fs(), ws("div", {
        class: gk(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
      }, [
        bt(Le(N), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: Hn(() => [
            bt(Le(k), {
              class: "flex justify-end px-0",
              cols: a.value ? 5 : null
            }, {
              default: Hn(() => [
                bt(Le(eg), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  onClick: Zd(u, ["stop"])
                }, {
                  default: Hn(() => [
                    p.value ? Qd((fs(), ws("span", pk, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (fs(), ws("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: Le(O.getDir)(e.selectedSourceLanguage),
                      textContent: Jd(Le(O.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, mk)),
                    bt(Le(jr), {
                      size: "x-small",
                      icon: Le(Dc)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["cols"]),
            bt(Le(k), {
              class: "sx-translation-list-language-selector__arrow flex justify-center px-0",
              cols: a.value ? 2 : null
            }, {
              default: Hn(() => [
                bt(Le(jr), { icon: Le(Bh) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            bt(Le(k), {
              class: "px-0",
              cols: a.value ? 5 : null
            }, {
              default: Hn(() => [
                bt(Le(eg), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.targetLanguages.length < 2,
                  onClick: Zd(d, ["stop"])
                }, {
                  default: Hn(() => [
                    m.value ? Qd((fs(), ws("span", hk, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (fs(), ws("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: Le(O.getDir)(e.selectedTargetLanguage),
                      textContent: Jd(Le(O.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, fk)),
                    bt(Le(jr), {
                      size: "x-small",
                      icon: Le(Dc)
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
        bt(Le(St), {
          value: l.value,
          "onUpdate:value": f[0] || (f[0] = (v) => l.value = v),
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-mode": "dark",
          onClose: i
        }, {
          default: Hn(() => [
            bt(Le(Cf), {
              class: "sx-translation-list-language-selector__widget col-12",
              placeholder: h.$i18n("cx-sx-language-selector-placeholder"),
              languages: c.value,
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
const tg = window.Vue.unref, _k = window.Vue.createVNode, Ra = window.Vue.createElementVNode, ng = window.Vue.toDisplayString, Sk = window.Vue.openBlock, yk = window.Vue.createElementBlock, xk = { class: "cx-list-empty-placeholder pa-4" }, Ck = { class: "cx-list-empty-placeholder__icon-container" }, bk = { class: "cx-list-empty-placeholder__icon" }, kk = ["textContent"], $k = ["textContent"], Vk = window.Codex.CdxIcon, bf = {
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
    return (t, n) => (Sk(), yk("div", xk, [
      Ra("div", Ck, [
        Ra("div", bk, [
          _k(tg(Vk), { icon: tg(Mh) }, null, 8, ["icon"])
        ])
      ]),
      Ra("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: ng(e.title)
      }, null, 8, kk),
      Ra("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: ng(e.description)
      }, null, 8, $k)
    ]));
  }
}, Ek = window.Vuex.useStore, Lk = window.Vue.ref, za = Lk({ draft: !1, published: !1 }), Jo = () => {
  const e = Ek(), t = Ko(), n = (s) => C(void 0, null, function* () {
    let a = yield _t.fetchTranslations(s);
    e.commit("translator/clearTranslationsByStatus", s), a.forEach(
      (l) => e.commit("translator/addTranslation", l)
    );
    const r = {};
    for (const l of a) {
      const u = l.sourceLanguage;
      r[u] = r[u] || [], r[u].push(l);
    }
    za.value[s] = !0;
    for (const [l, u] of Object.entries(r))
      t(
        l,
        u.map((d) => d.sourceTitle)
      ), u.forEach((d) => {
        const { targetLanguage: i, targetTitle: c } = d, g = !!e.getters["mediawiki/getPage"](
          i,
          c
        );
        c && !g && e.commit(
          "mediawiki/addPage",
          new Wo({ title: c, pagelanguage: i })
        );
      });
  });
  return {
    fetchTranslationsByStatus: n,
    fetchAllTranslations: () => {
      const a = Object.keys(za.value).filter(
        (r) => !za.value[r]
      ).map(
        (r) => n(r)
      );
      return Promise.all(a).catch((r) => {
        mw.log.error("[CX] Error while fetching translations", r);
      });
    },
    translationsFetched: za
  };
};
const Ak = window.Vue.toDisplayString, Hr = window.Vue.normalizeClass, og = window.Vue.createElementVNode, Rt = window.Vue.openBlock, wo = window.Vue.createBlock, Oa = window.Vue.createCommentVNode, sg = window.Vue.unref, ag = window.Vue.renderList, ig = window.Vue.Fragment, ja = window.Vue.createElementBlock, Dk = window.Vue.createVNode, rg = window.Vue.withCtx, Tk = ["textContent"], Bk = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, Pk = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, Ha = window.Vue.ref, kt = window.Vue.computed, Fk = window.Vue.inject, Nk = window.Vuex.useStore, lg = {
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
    const t = e, n = Ha("all"), o = Ha("all"), s = Nk(), { translationsFetched: a } = Jo(), r = kt(
      () => a.value[t.translationStatus]
    ), l = Ha(!1), u = Ha(null), d = kt(
      () => t.translationStatus === "draft"
    ), i = kt(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), c = kt(
      () => n.value === "all"
    ), g = kt(
      () => o.value === "all"
    ), p = kt(
      () => i.value.filter(
        (b) => (c.value || b.sourceLanguage === n.value) && (g.value || b.targetLanguage === o.value)
      ).sort((b, E) => b.lastUpdatedTimestamp < E.lastUpdatedTimestamp)
    ), m = kt(() => {
      const b = i.value.map(
        (E) => E.targetLanguage
      );
      return [...new Set(b)];
    }), h = kt(() => {
      const b = i.value.map(
        (E) => E.sourceLanguage
      );
      return [...new Set(b)];
    }), f = (b) => {
      u.value = b, l.value = !0;
    }, w = kt(() => t.activeStatus === t.translationStatus), v = Fk("breakpoints"), y = kt(() => v.value.mobile), S = kt(
      () => y.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (b, E) => w.value ? (Rt(), wo(sg(Qe), {
      key: 0,
      class: Hr(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: rg(() => [
        og("div", {
          class: Hr(["cx-translation-list__header", S.value])
        }, [
          og("h3", {
            class: Hr(["px-4 mw-ui-card__title mb-0", { "pb-4": y.value }]),
            textContent: Ak(b.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, Tk),
          p.value.length ? (Rt(), wo(Mi, {
            key: 0,
            "selected-source-language": n.value,
            "onUpdate:selectedSourceLanguage": E[0] || (E[0] = (x) => n.value = x),
            "selected-target-language": o.value,
            "onUpdate:selectedTargetLanguage": E[1] || (E[1] = (x) => o.value = x),
            "source-languages": h.value,
            "target-languages": m.value,
            "all-option-enabled": ""
          }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : Oa("", !0)
        ], 2)
      ]),
      default: rg(() => [
        r.value && !p.value.length ? (Rt(), wo(bf, {
          key: 0,
          title: b.$i18n("cx-sx-translation-list-empty-title"),
          description: b.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : Oa("", !0),
        r.value ? Oa("", !0) : (Rt(), wo(sg(lt), { key: 1 })),
        d.value ? (Rt(), ja("div", Bk, [
          (Rt(!0), ja(ig, null, ag(p.value, (x) => (Rt(), wo(hb, {
            key: `${e.translationStatus}-${x.key}`,
            translation: x,
            onDeleteTranslation: (R) => f(x)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (Rt(), ja("div", Pk, [
          (Rt(!0), ja(ig, null, ag(p.value, (x) => (Rt(), wo(Tb, {
            key: `${e.translationStatus}-${x.key}`,
            translation: x
          }, null, 8, ["translation"]))), 128))
        ])),
        Dk(zb, {
          modelValue: l.value,
          "onUpdate:modelValue": E[2] || (E[2] = (x) => l.value = x),
          translation: u.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : Oa("", !0);
  }
}, Mk = (e, t) => C(void 0, null, function* () {
  const n = e.language, o = e.title, s = e.articleSize, r = (yield pe.fetchArticleSections(
    n,
    o
  )).sections.filter(
    (u) => u.level === "2"
  ), l = r.reduce(
    (u, d, i, c) => {
      const g = i < c.length - 1 ? c[i + 1].byteoffset : s;
      return u[d.line] = g - d.byteoffset, u;
    },
    { [Oo.LEAD_SECTION_DUMMY_TITLE]: r[0].byteoffset }
  );
  return t.length === 1 ? l[t[0]] : Object.keys(l).filter((u) => t.includes(u)).reduce((u, d) => u + l[d], 0);
}), kf = (e) => {
  const s = e / 5 / 200;
  return Math.ceil(s);
}, Uk = (e, t = []) => {
  const n = e >= 60 ? e / 60 : 0, o = Math.round(n * 2) / 2;
  let s;
  if (t.length) {
    if (t.length === 1)
      return s = t[0] === Oo.LEAD_SECTION_DUMMY_TITLE ? "cx-sx-translation-confirmer-translation-time-lead-section" : "cx-sx-translation-confirmer-translation-time-single-section", [s, o, e];
  } else
    return s = "cx-sx-translation-confirmer-translation-time-whole-article", [s, o, e];
  return [
    "cx-sx-translation-confirmer-translation-time-sections",
    o,
    e,
    t.length
  ];
}, $f = (e) => kf(e) < 15;
const qr = window.Vue.toDisplayString, Gr = window.Vue.unref, _s = window.Vue.openBlock, Xr = window.Vue.createBlock, cg = window.Vue.createCommentVNode, Ik = window.Vue.createTextVNode, Rk = window.Vue.Fragment, ug = window.Vue.createElementBlock, Oc = window.Vue.createElementVNode, zk = window.Vue.withKeys, Ok = window.Vue.withCtx, jk = {
  key: 1,
  class: "cdx-info-chip__text custom-info-chip__with-slash"
}, Hk = { class: "cdx-info-chip__text custom-info-chip__with-slash__first" }, qk = /* @__PURE__ */ Oc("span", null, "/", -1), Gk = { class: "cdx-info-chip__text custom-info-chip__with-slash__second" }, dg = window.Codex.CdxIcon, Xk = window.Codex.CdxInfoChip, qa = window.Vue.computed, ao = {
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
    const t = e, n = qa(() => t.content.lastIndexOf("/")), o = qa(() => t.content.slice(0, n.value)), s = qa(() => t.content.slice(n.value + 1)), a = qa(
      () => t.expanded ? qS : Dc
    );
    return (r, l) => (_s(), Xr(Gr(Xk), {
      icon: e.icon,
      class: "custom-info-chip",
      tabindex: "0",
      onKeyup: l[0] || (l[0] = zk((u) => r.$emit("click"), ["enter"]))
    }, {
      default: Ok(() => [
        n.value === -1 ? (_s(), ug(Rk, { key: 0 }, [
          Ik(qr(e.content) + " ", 1),
          e.expandable ? (_s(), Xr(Gr(dg), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : cg("", !0)
        ], 64)) : (_s(), ug("div", jk, [
          Oc("span", Hk, qr(o.value), 1),
          qk,
          Oc("span", Gk, qr(s.value), 1),
          e.expandable ? (_s(), Xr(Gr(dg), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : cg("", !0)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const me = window.Vue.unref, $t = window.Vue.createVNode, $n = window.Vue.createElementVNode, Ga = window.Vue.toDisplayString, gt = window.Vue.withCtx, Wk = window.Vue.resolveDirective, Wr = window.Vue.withDirectives, qn = window.Vue.openBlock, vo = window.Vue.createBlock, _o = window.Vue.createCommentVNode, gg = window.Vue.withModifiers, Kk = window.Vue.createElementBlock, Yk = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, Qk = { class: "col shrink pe-4" }, Jk = ["lang", "dir", "textContent"], Zk = ["lang", "dir", "textContent"], e8 = ["textContent"], t8 = ["textContent"], Kr = window.Codex.CdxIcon, Vt = window.Vue.computed, n8 = window.Vue.inject, o8 = window.Vuex.useStore, jc = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [co, In, jo],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = o8(), o = Vt(() => t.suggestion), s = Vt(
      () => o.value.sourceTitle || o.value.title
    ), a = Vt(
      () => n.getters["mediawiki/getPage"](
        o.value.sourceLanguage,
        s.value
      )
    ), r = Vt(
      () => {
        var w;
        return (w = o.value) == null ? void 0 : w.missingSectionsCount;
      }
    ), l = Vt(() => {
      var w;
      return (w = a.value) == null ? void 0 : w.description;
    }), u = Vt(
      () => o.value instanceof In
    ), d = Vt(
      () => o.value instanceof jo
    ), { sourceLanguageAutonym: i, targetLanguageAutonym: c } = Te(n), g = Vt(
      () => d.value ? Fh : Nh
    ), p = n8("colors"), m = Vt(
      () => d.value ? p.blue600 : "currentColor"
    ), h = Vt(
      () => {
        var w;
        return $f((w = a.value) == null ? void 0 : w.articleSize);
      }
    ), f = Vt(
      () => o.value instanceof Eh || o.value instanceof Lh
    );
    return (w, v) => {
      const y = Wk("i18n");
      return o.value ? (qn(), Kk("div", Yk, [
        $n("div", Qk, [
          $t(me(Hc), {
            class: "cx-suggestion__thumbnail",
            thumbnail: a.value && a.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        $t(me(N), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: gt(() => [
            $t(me(N), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: gt(() => [
                $t(me(k), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: gt(() => [
                    $n("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: o.value.sourceLanguage,
                      dir: me(O.getDir)(o.value.sourceLanguage),
                      textContent: Ga(s.value)
                    }, null, 8, Jk)
                  ]),
                  _: 1
                }),
                $t(me(k), { shrink: "" }, {
                  default: gt(() => [
                    $n("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: o.value.sourceLanguage,
                      dir: me(O.getDir)(o.value.sourceLanguage),
                      textContent: Ga(l.value)
                    }, null, 8, Zk)
                  ]),
                  _: 1
                }),
                h.value && !u.value && !f.value ? (qn(), vo(me(k), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: gt(() => [
                    Wr($n("small", null, null, 512), [
                      [y, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : _o("", !0),
                u.value ? (qn(), vo(me(k), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
                  shrink: ""
                }, {
                  default: gt(() => [
                    Wr($n("small", null, null, 512), [
                      [y, [r.value], "cx-sx-translation-suggestion-info"]
                    ])
                  ]),
                  _: 1
                })) : d.value ? (qn(), vo(me(k), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: gt(() => [
                    $t(me(N), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: gt(() => [
                        $t(me(k), { grow: "" }, {
                          default: gt(() => [
                            $n("small", {
                              textContent: Ga(me(i))
                            }, null, 8, e8),
                            $t(me(Kr), {
                              icon: me(Bh),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            $n("small", {
                              textContent: Ga(me(c))
                            }, null, 8, t8)
                          ]),
                          _: 1
                        }),
                        r.value ? (qn(), vo(me(k), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: gt(() => [
                            Wr($n("small", null, null, 512), [
                              [y, [
                                r.value
                              ], "cx-sx-translation-suggestion-info"]
                            ])
                          ]),
                          _: 1
                        })) : _o("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : _o("", !0),
                f.value ? (qn(), vo(me(k), {
                  key: 3,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: gt(() => [
                    $t(ao, {
                      icon: me(au),
                      content: o.value.collection.name
                    }, null, 8, ["icon", "content"])
                  ]),
                  _: 1
                })) : _o("", !0)
              ]),
              _: 1
            }),
            $t(me(k), { shrink: "" }, {
              default: gt(() => [
                d.value ? _o("", !0) : (qn(), vo(me(Kr), {
                  key: 0,
                  icon: me(Qo),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: v[0] || (v[0] = gg((S) => w.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                $t(me(Kr), {
                  class: "cx-suggestion__favorite-button",
                  icon: g.value,
                  "icon-color": m.value,
                  onClick: v[1] || (v[1] = gg((S) => w.$emit("bookmark"), ["stop"]))
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : _o("", !0);
    };
  }
};
const Yr = window.Vue.normalizeClass, pg = window.Vue.createVNode, s8 = window.Vue.renderList, mg = window.Vue.Fragment, Ss = window.Vue.openBlock, Xa = window.Vue.createElementBlock, a8 = window.Vue.createBlock, i8 = window.Vue.toDisplayString, r8 = window.Vue.withKeys, hg = window.Vue.createCommentVNode, l8 = {
  key: 0,
  class: "sx-suggestions-filters__filter__expanded-filters"
}, Wa = window.Vue.computed, c8 = {
  __name: "SuggestionFilterChip",
  props: {
    filter: {
      type: Nt,
      required: !0
    },
    isSelected: {
      type: Function,
      required: !0
    },
    subFilterLimit: {
      type: Number,
      default: 0
    },
    viewMoreConfig: {
      type: Object,
      default: null,
      validator: (e) => e === null ? !0 : typeof e.label == "string" && typeof e.onClick == "function"
    }
  },
  emits: ["filter-selected"],
  setup(e, { emit: t }) {
    const n = e, o = Wa(() => n.filter.expandable ? n.isSelected(n.filter) ? !0 : n.filter.subFilters ? n.filter.subFilters.some(
      (c) => n.isSelected(c)
    ) : !1 : !1), s = t, a = () => {
      s("filter-selected", n.filter);
    }, r = Wa(() => n.filter.chipLabel), l = (c) => {
      const { label: g } = c, p = n.filter.label;
      return g.startsWith(`${p}/`) ? g.replace(`${p}/`, "") : g;
    }, u = Wa(() => n.subFilterLimit > 0 ? n.filter.subFilters.slice(0, n.subFilterLimit) : n.filter.subFilters), d = Wa(
      () => n.viewMoreConfig && n.subFilterLimit > 0 && n.filter.subFilters.length > n.subFilterLimit && o.value
    ), i = () => {
      n.viewMoreConfig && n.viewMoreConfig.onClick && n.viewMoreConfig.onClick();
    };
    return (c, g) => (Ss(), Xa(mg, null, [
      pg(ao, {
        class: Yr(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
          "sx-suggestions-filters__filter--active": e.isSelected(e.filter)
        }]),
        icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
        content: r.value,
        expandable: !!e.filter.expandable,
        onClick: a
      }, null, 8, ["class", "icon", "content", "expandable"]),
      o.value ? (Ss(), Xa("div", l8, [
        pg(ao, {
          class: Yr(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(e.filter)
          }]),
          icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
          content: c.$i18n("cx-sx-suggestions-filter-collection-group-all-option-label"),
          onClick: g[0] || (g[0] = (p) => c.$emit("filter-selected", e.filter))
        }, null, 8, ["class", "icon", "content"]),
        (Ss(!0), Xa(mg, null, s8(u.value, (p) => (Ss(), a8(ao, {
          key: p.id,
          class: Yr(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(p)
          }]),
          content: l(p),
          icon: p.icon,
          onClick: (m) => c.$emit("filter-selected", p)
        }, null, 8, ["class", "content", "icon", "onClick"]))), 128)),
        d.value ? (Ss(), Xa("div", {
          key: 0,
          class: "sx-suggestions-filters__view-more-link",
          tabindex: "0",
          onClick: i,
          onKeyup: r8(i, ["enter"])
        }, i8(e.viewMoreConfig.label), 33)) : hg("", !0)
      ])) : hg("", !0)
    ], 64));
  }
};
const u8 = window.Vue.toDisplayString, fg = window.Vue.createElementVNode, d8 = window.Vue.renderList, wg = window.Vue.Fragment, Qr = window.Vue.openBlock, vg = window.Vue.createElementBlock, g8 = window.Vue.createBlock, p8 = { class: "sx-suggestions-filters__group-label mb-3" }, m8 = { class: "sx-suggestions-filters__group-filters mb-3" }, h8 = {
  __name: "SXSuggestionsFiltersDialogTabGroupContent",
  props: {
    filterGroup: {
      type: oa,
      required: !0
    },
    tentativelySelectFilter: {
      type: Function,
      required: !0
    },
    isSelected: {
      type: Function,
      required: !0
    },
    limit: {
      type: Number,
      default: 0
    },
    getSubFilterConfig: {
      type: Function,
      default: null
    }
  },
  setup(e) {
    const t = e, n = () => t.limit > 0 ? t.filterGroup.filters.slice(0, t.limit) : t.filterGroup.filters;
    return (o, s) => (Qr(), vg(wg, null, [
      fg("div", p8, u8(e.filterGroup.label), 1),
      fg("div", m8, [
        (Qr(!0), vg(wg, null, d8(n(), (a) => (Qr(), g8(c8, {
          key: a.id,
          filter: a,
          "is-selected": e.isSelected,
          "sub-filter-limit": e.getSubFilterConfig ? e.getSubFilterConfig(a).limit : 0,
          "view-more-config": e.getSubFilterConfig ? e.getSubFilterConfig(a).viewMoreConfig : null,
          onFilterSelected: s[0] || (s[0] = (r) => e.tentativelySelectFilter(r))
        }, null, 8, ["filter", "is-selected", "sub-filter-limit", "view-more-config"]))), 128))
      ])
    ], 64));
  }
}, f8 = window.Vue.computed, _g = window.Vue.ref, Sg = window.Vue.watch, hu = (e, t) => {
  const o = _g([]), s = _g(!1), a = f8(
    () => o.value.slice(0, 4)
  ), r = mu(() => C(void 0, null, function* () {
    if (!t.value) {
      s.value = !1;
      return;
    }
    try {
      o.value = yield lo.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      s.value = !1;
    }
  }), 500), l = () => {
    o.value = [], t.value && (s.value = !0, r());
  };
  return Sg(t, l), Sg(e, l), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
};
class Ka {
  /**
   * @param {string} label
   * @param {string} value
   * @param {string} description
   * @param {{ url: string }|null} thumbnail
   * @param {string} filterType
   * @param {string} filterId
   * @param {string|IconFlipForRtl|null} icon
   * @param {boolean} showThumbnail
   */
  constructor({
    label: t,
    value: n,
    description: o,
    filterType: s,
    filterId: a,
    thumbnail: r = null,
    icon: l = null,
    showThumbnail: u = !1
  }) {
    this.label = t, this.value = n + "-" + s, this.description = o, this.thumbnail = r, this.filterType = s, this.filterId = a, this.icon = l, this.showThumbnail = u;
  }
}
const Jr = window.Vue.ref, yg = window.Vue.watch, xg = window.Vue.computed, { topics: w8, regions: v8 } = mw.loader.require(
  "ext.cx.articlefilters"
), _8 = w8.flatMap(
  (e) => e.topics.map((t) => et(de({}, t), {
    groupId: e.groupId
  }))
), S8 = () => {
  const e = Jr(""), t = Jr("all"), n = Jr({
    topics: [],
    topic_areas: [],
    collections: [],
    regions: []
  }), o = fe(), { pageCollectionGroups: s } = su(), { sourceLanguageURLParameter: a } = T(), r = (p) => (p = p.toLowerCase(), _8.filter(
    (m) => m.label.toLowerCase().includes(p)
  )), l = (p) => (p = p.toLowerCase(), Object.values(s.value).flat().filter(
    (h) => h.name.toLowerCase().includes(p)
  )), u = (p) => (p = p.toLowerCase(), v8.flatMap((m) => [m, ...m.countries]).filter(
    (m) => m.label.toLowerCase().includes(p)
  ).map((m) => ({
    label: m.label,
    id: m.id
  }))), d = xg(
    () => t.value === "all" ? e.value : ""
  ), { searchResultsSlice: i, searchResultsLoading: c } = hu(
    a,
    d
  );
  yg(i, () => {
    n.value.topics = i.value.map(
      (p) => {
        var m;
        return new Ka({
          label: p.title,
          value: p.title,
          description: p.description,
          thumbnail: { url: (m = p.thumbnail) == null ? void 0 : m.source },
          filterType: vt,
          filterId: p.title,
          showThumbnail: !0
        });
      }
    );
  }), yg([e, t], () => C(void 0, null, function* () {
    n.value.topic_areas = r(e.value).map(
      (p) => new Ka({
        label: p.label,
        value: p.label,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-topics-default-description" : "cx-sx-suggestions-filter-search-results-topics-alternative-description"
        ),
        icon: t.value === "all" ? Tc : null,
        filterType: Ge,
        filterId: p.topicId
      })
    ), n.value.collections = l(
      e.value
    ).map(
      (p) => new Ka({
        label: p.name,
        value: p.name,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-collections-default-description" : "cx-sx-suggestions-filter-search-results-collections-alternative-description",
          p.articlesCount
        ),
        icon: t.value === "all" ? au : null,
        filterType: ee,
        filterId: p.name
      })
    ), n.value.regions = u(e.value).map(
      (p) => new Ka({
        label: p.label,
        value: p.label,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-regions-default-description" : "cx-sx-suggestions-filter-search-results-regions-alternative-description"
        ),
        icon: t.value === "all" ? Tc : null,
        filterType: Ve,
        filterId: p.id
      })
    );
  }));
  const g = xg(() => {
    const p = t.value === "all";
    return [
      {
        key: "topics",
        show: n.value.topics.length && p,
        items: n.value.topics
      },
      {
        key: "topic-areas",
        show: n.value.topic_areas.length && (p || t.value === "topics"),
        items: n.value.topic_areas
      },
      {
        key: "geography",
        show: n.value.regions.length && (p || t.value === "geography"),
        items: n.value.regions
      },
      {
        key: "collections",
        show: n.value.collections.length && (p || t.value === "collections"),
        items: n.value.collections
      }
    ].filter((m) => m.show);
  });
  return { searchInput: e, searchScope: t, searchResults: g, searchResultsLoading: c };
}, y8 = "suggestion_filter_topic_area", x8 = "suggestion_filter_search_result_seed", C8 = "suggestion_filter_collections", b8 = "suggestion_filter_previous_edits", k8 = "suggestion_filter_popular_articles", $8 = "suggestion_filter_region", Zr = (e) => {
  if (e.type === Ge || e.type === Ve || e.type === ee || e.type === vt)
    return e.id;
  if (e.id === ee)
    return "all-collections";
}, el = (e) => {
  if (e.type === Ge)
    return y8;
  if (e.type === Ve)
    return $8;
  if (e.type === vt)
    return x8;
  if (e.id === ee || e.type === ee)
    return C8;
  if (e.id === Jt)
    return b8;
  if (e.id === vn)
    return k8;
}, Vf = () => {
  const e = yt();
  return {
    logSuggestionFiltersClose: () => e({ event_type: "suggestion_filters_close" }),
    logSuggestionFiltersConfirm: (r) => e({
      event_type: "suggestion_filters_confirm",
      event_subtype: "suggestion_filters_single_select_confirm",
      event_source: el(r),
      event_context: Zr(r)
    }),
    logSuggestionFiltersSelect: (r) => e({
      event_type: "suggestion_filters_select",
      event_subtype: "suggestion_filters_single_select",
      event_source: el(r),
      event_context: Zr(r)
    }),
    logSuggestionFiltersQuickSelect: (r) => e({
      event_type: "dashboard_suggestion_filters_quick_select",
      event_source: el(r),
      event_context: Zr(r)
    }),
    logSuggestionFiltersViewMore: () => e({ event_type: "dashboard_suggestion_filters_view_more" })
  };
};
const ye = window.Vue.unref, pt = window.Vue.createVNode, Et = window.Vue.withCtx, V8 = window.Vue.resolveDirective, zt = window.Vue.createElementVNode, So = window.Vue.withDirectives, Cg = window.Vue.toDisplayString, E8 = window.Vue.createTextVNode, L8 = window.Vue.vShow, bg = window.Vue.renderList, kg = window.Vue.Fragment, sn = window.Vue.openBlock, Gn = window.Vue.createElementBlock, $g = window.Vue.isRef, A8 = window.Vue.withKeys, Vg = window.Vue.createCommentVNode, Eg = window.Vue.createBlock, D8 = { class: "sx-suggestions-filters" }, T8 = { class: "mb-0" }, B8 = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, P8 = { class: "mb-3" }, F8 = { class: "px-4 pb-4 pt-7" }, N8 = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, M8 = ["onKeyup", "onClick"], U8 = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, I8 = { class: "sx-suggestions-filters__search-results-pending" }, R8 = {
  key: 0,
  class: "sx-suggestions-filters__search-results-empty"
}, z8 = { class: "sx-suggestions-filters__search-results-empty-primary" }, O8 = { class: "sx-suggestions-filters__search-results-empty-secondary" }, Ya = window.Vue.ref, yo = window.Vue.computed, j8 = window.Vue.inject, H8 = window.Vue.watch, Lg = window.Codex.CdxButton, q8 = window.Codex.CdxIcon, G8 = window.Codex.CdxTextInput, X8 = window.Codex.CdxMenu, W8 = window.Codex.CdxTabs, K8 = window.Codex.CdxTab, Y8 = {
  __name: "SXSuggestionsFiltersDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = fe(), o = t, s = yo(() => [
      {
        name: "all",
        label: n.i18n("cx-sx-suggestions-filters-tab-all"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder"
        ),
        filterGroups: g([
          Ye,
          ee,
          Ve,
          Ge
        ])
      },
      {
        name: "collections",
        label: n.i18n("cx-sx-suggestions-filters-tab-collections"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-collections"
        ),
        filterGroups: g([ee])
      },
      {
        name: "geography",
        label: n.i18n("cx-sx-suggestions-filters-tab-regions"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-regions"
        ),
        filterGroups: g([Ve])
      },
      {
        name: "topics",
        label: n.i18n("cx-sx-suggestions-filters-tab-topics"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-topics"
        ),
        filterGroups: g([Ge])
      }
    ]), a = (I) => j.value = I, r = (I, P) => P === "all" && I.type === Ve ? {
      limit: 7,
      viewMoreConfig: {
        label: n.i18n(
          "cx-sx-suggestions-filters-view-more-countries",
          I.label
        ),
        onClick: () => a("geography")
      }
    } : { limit: 0 }, l = (I, P) => {
      if (I !== "all")
        return !1;
      if (P === ee) {
        const U = g([ee]);
        return U.length && U[0].filters.length > 6;
      }
      return P === Ve;
    }, { allFilters: u, isFilterSelected: d, selectFilter: i, findSelectedFilter: c } = Wi(), g = (I) => I.flatMap((P) => u.value.filter((U) => U.type === P)).filter(Boolean), p = () => {
      b(), o("update:modelValue", !1);
    }, {
      logSuggestionFiltersClose: m,
      logSuggestionFiltersConfirm: h,
      logSuggestionFiltersSelect: f
    } = Vf(), w = () => {
      m(), p();
    }, v = () => {
      S.value && (h(S.value), i(S.value)), p();
    }, y = Ya(!1), S = Ya(null), b = () => {
      S.value = null, y.value = !1;
    }, E = (I) => {
      f(I), S.value = I, y.value = !0;
    }, x = (I) => S.value ? S.value.id === I.id && S.value.type === I.type : d(I), R = j8("breakpoints"), L = yo(() => R.value.mobile), { searchInput: B, searchScope: j, searchResults: G, searchResultsLoading: Y } = S8(), we = yo(
      () => S.value || c()
    ), q = Ya(null);
    H8(q, () => {
      if (!q.value)
        return;
      const I = ae.value.find(
        (P) => P.value === q.value
      );
      E({
        type: I.filterType,
        id: I.filterId,
        label: I.label
      }), B.value = "";
    });
    const se = {
      [ee]: "cx-sx-suggestions-filters-view-all-collections-group",
      [Ve]: "cx-sx-suggestions-filters-view-all-regions-group"
    }, ae = yo(
      () => G.value.flatMap((I) => I.items)
    ), te = Ya({}), Ne = yo(
      () => te.value[j.value]
    ), We = yo(() => {
      var P;
      const I = (P = Ne.value) == null ? void 0 : P.getHighlightedMenuItem();
      return I == null ? void 0 : I.id;
    }), Be = (I) => {
      I.key !== " " && Ne.value && Ne.value.delegateKeyNavigation(I);
    }, J = (I, P) => {
      te.value[P] = I;
    };
    return (I, P) => {
      const U = V8("i18n");
      return sn(), Eg(ye(St), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: L.value,
        header: !1
      }, {
        default: Et(() => [
          zt("section", D8, [
            pt(ye(N), {
              class: "sx-suggestions-filters__header ma-0 py-3 px-4",
              align: "stretch",
              justify: "start"
            }, {
              default: Et(() => [
                pt(ye(k), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: Et(() => [
                    pt(ye(Lg), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": I.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: w
                    }, {
                      default: Et(() => [
                        pt(ye(q8), { icon: ye(Qo) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                pt(ye(k), {
                  grow: "",
                  align: "center"
                }, {
                  default: Et(() => [
                    So(zt("h5", T8, null, 512), [
                      [U, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                pt(ye(k), {
                  shrink: "",
                  align: "start"
                }, {
                  default: Et(() => [
                    So(pt(ye(Lg), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: v
                    }, {
                      default: Et(() => [
                        E8(Cg(I.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [L8, y.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            zt("div", B8, [
              So(zt("h5", P8, null, 512), [
                [U, void 0, "cx-sx-suggestions-filter-active-group-label"]
              ]),
              zt("div", null, [
                pt(ao, {
                  class: "sx-suggestions-filters__filter sx-suggestions-filters__filter--active my-1 mx-1 py-1",
                  content: we.value.label,
                  icon: we.value.icon
                }, null, 8, ["content", "icon"])
              ])
            ]),
            pt(ye(W8), {
              active: ye(j),
              "onUpdate:active": [
                P[2] || (P[2] = (Z) => $g(j) ? j.value = Z : null),
                a
              ],
              class: "sx-suggestions-filters__tabs"
            }, {
              default: Et(() => [
                (sn(!0), Gn(kg, null, bg(s.value, (Z, _) => (sn(), Eg(ye(K8), {
                  key: _,
                  name: Z.name,
                  label: Z.label
                }, {
                  default: Et(() => [
                    zt("div", F8, [
                      pt(ye(G8), {
                        modelValue: ye(B),
                        "onUpdate:modelValue": P[0] || (P[0] = (A) => $g(B) ? B.value = A : null),
                        role: "combobox",
                        "aria-activedescendant": We.value,
                        "aria-controls": "sx-suggestions-filters__search-results__menu",
                        "aria-autocomplete": "none",
                        placeholder: Z.searchPlaceholder,
                        "input-type": "search",
                        "start-icon": ye(Tc),
                        clearable: !!ye(B),
                        onKeydown: Be
                      }, null, 8, ["modelValue", "aria-activedescendant", "placeholder", "start-icon", "clearable"])
                    ]),
                    ye(B) ? (sn(), Gn("div", U8, [
                      pt(ye(X8), {
                        id: "sx-suggestions-filters__search-results__menu",
                        ref_for: !0,
                        ref: (A) => J(A, Z.name),
                        selected: q.value,
                        "onUpdate:selected": P[1] || (P[1] = (A) => q.value = A),
                        "show-pending": ye(Y),
                        expanded: "",
                        "menu-items": ae.value
                      }, {
                        pending: Et(() => [
                          So(zt("div", I8, null, 512), [
                            [U, void 0, "cx-sx-suggestions-filter-search-results-loading"]
                          ])
                        ]),
                        "no-results": Et(() => [
                          ye(Y) ? Vg("", !0) : (sn(), Gn("div", R8, [
                            So(zt("span", z8, null, 512), [
                              [U, void 0, "cx-sx-suggestions-filter-search-results-empty-primary"]
                            ]),
                            So(zt("span", O8, null, 512), [
                              [U, void 0, "cx-sx-suggestions-filter-search-results-empty-secondary"]
                            ])
                          ]))
                        ]),
                        _: 2
                      }, 1032, ["selected", "show-pending", "menu-items"])
                    ])) : (sn(), Gn("div", N8, [
                      (sn(!0), Gn(kg, null, bg(Z.filterGroups, (A) => (sn(), Gn("div", {
                        key: A.id,
                        class: "sx-suggestions-filters__group"
                      }, [
                        pt(h8, {
                          "filter-group": A,
                          "tentatively-select-filter": E,
                          "is-selected": x,
                          limit: l(Z.name, A.type) ? 4 : 0,
                          "get-sub-filter-config": (D) => r(D, Z.name)
                        }, null, 8, ["filter-group", "limit", "get-sub-filter-config"]),
                        l(Z.name, A.type) ? (sn(), Gn("div", {
                          key: 0,
                          class: "sx-suggestions-filters__group-view-all mb-3",
                          tabindex: "0",
                          onKeyup: A8((D) => a(A.id), ["enter"]),
                          onClick: (D) => a(A.id)
                        }, [
                          zt("span", null, Cg(I.$i18n(se[A.id])), 1)
                        ], 40, M8)) : Vg("", !0)
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
const ys = window.Vue.unref, Qa = window.Vue.openBlock, Ag = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Q8 = window.Vue.renderList, J8 = window.Vue.Fragment, Dg = window.Vue.createElementBlock, Z8 = window.Vue.normalizeClass, Tg = window.Vue.createVNode, e2 = {
  key: 1,
  class: "cx-suggestion-list__filters flex px-4 pb-2"
}, Bg = window.Vue.ref;
window.Vue.computed;
const Pg = window.Vue.watch, t2 = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = fe(), { logSuggestionFiltersQuickSelect: n, logSuggestionFiltersViewMore: o } = Vf(), {
      getFiltersSummary: s,
      selectFilter: a,
      isFilterSelected: r,
      waitingForPageCollectionsFetch: l,
      validateURLFilterWithCollections: u
    } = Wi(), d = Bg(!1), i = () => {
      o(), d.value = !0;
    }, c = (p) => {
      n(p), a(p);
    }, g = Bg(s());
    return Pg(d, (p) => {
      p || (g.value = s());
    }), Pg(l, (p) => {
      p || (u(), g.value = s());
    }), (p, m) => ys(l) ? (Qa(), Ag(ys(lt), { key: 0 })) : (Qa(), Dg("div", e2, [
      (Qa(!0), Dg(J8, null, Q8(g.value, (h) => (Qa(), Ag(ao, {
        key: h.label,
        class: Z8(["cx-suggestion-list__filter py-1 me-1", {
          "cx-suggestion-list__filter--active": ys(r)(h)
        }]),
        icon: h.icon,
        content: h.label,
        onClick: (f) => c(h)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      Tg(ao, {
        class: "cx-suggestion-list__filter py-1 me-1",
        icon: ys(ru),
        content: ys(t).i18n("cx-sx-suggestions-filter-more-label"),
        onClick: i
      }, null, 8, ["icon", "content"]),
      Tg(Y8, {
        modelValue: d.value,
        "onUpdate:modelValue": m[0] || (m[0] = (h) => d.value = h)
      }, null, 8, ["modelValue"])
    ]));
  }
}, xo = window.Vue.computed, Fg = window.Vue.ref, n2 = window.Vue.watch, o2 = window.Vuex.useStore, s2 = () => {
  const e = o2(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = T(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = tu(), r = yt(), l = xo(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), u = xo(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), d = Fg(0), i = Fg(0), { maxSuggestionsPerSlice: c } = e.state.suggestions, g = 4, p = xo(
    () => a(d.value)
  ), m = xo(
    () => s(i.value)
  ), h = () => {
    b(), L(), E(), B();
  }, {
    fetchNextSectionSuggestionsSlice: f,
    fetchNextPageSuggestionsSlice: w
  } = cu(), v = (j) => j.length === c, y = xo(
    () => v(m.value)
  ), S = xo(
    () => v(p.value)
  ), b = () => {
    const j = (d.value + 1) % g, G = v(
      a(j)
    );
    (!S.value || !G) && f();
  }, E = () => {
    const j = (i.value + 1) % g, G = v(
      s(j)
    );
    (!y.value || !G) && w();
  }, x = (j) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", j), b();
  }, R = (j) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", j), E();
  }, L = () => d.value = (d.value + 1) % g, B = () => i.value = (i.value + 1) % g;
  return n2(
    o,
    () => {
      i.value = 0, E(), d.value = 0, b();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: m,
    currentSectionSuggestionsSlice: p,
    discardPageSuggestion: R,
    discardSectionSuggestion: x,
    onSuggestionRefresh: h,
    pageSuggestionsLoading: u,
    sectionSuggestionsLoading: l,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: s,
    isCurrentPageSuggestionsSliceFull: y,
    isCurrentSectionSuggestionsSliceFull: S
  };
}, a2 = window.Vuex.useStore, fu = () => {
  const e = a2(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = cu(), o = (d, i, c) => e.state.suggestions.pageSuggestions.find(
    (g) => g.sourceLanguage === d && g.targetLanguage === i && g.sourceTitle === c
  ), s = (d) => C(void 0, null, function* () {
    const { sourceTitle: i, sourceLanguage: c, targetLanguage: g } = d;
    yield pe.markFavorite(i, c, g);
    const p = new jo({
      title: i,
      sourceLanguage: c,
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
    markFavoriteSuggestion: (d, i, c) => C(void 0, null, function* () {
      const g = o(
        i,
        c,
        d
      );
      g && (e.commit(
        "suggestions/removePageSuggestionFromList",
        g
      ), n());
      const p = e.getters["suggestions/getSectionSuggestionsForArticle"](i, c, d);
      p != null && p.isListable && (e.commit(
        "suggestions/removeSectionSuggestionFromList",
        p
      ), t()), yield pe.markFavorite(
        d,
        i,
        c
      );
      const m = new jo({
        title: d,
        sourceLanguage: i,
        targetLanguage: c
      });
      e.commit("suggestions/addFavoriteSuggestion", m);
    }),
    removeFavoriteSuggestion: (d) => (e.commit("suggestions/removeFavoriteSuggestion", d), pe.unmarkFavorite(d))
  };
}, i2 = "suggestion_no_seed", r2 = "suggestion_recent_edit", l2 = "suggestion_topic_area", c2 = "suggestion_search_result_seed", u2 = "suggestion_featured", d2 = "suggestion_collections", g2 = "suggestion_region", p2 = () => {
  const { currentSuggestionFilters: e } = T();
  return (t = null) => {
    const { type: n, id: o } = e.value;
    if (o === Jt)
      return t ? r2 : i2;
    if (n === Ge)
      return l2;
    if (n === Ve)
      return g2;
    if (n === vt)
      return c2;
    if (o === vn)
      return u2;
    if (o === ee || n === ee)
      return d2;
    const s = new Error(
      `[CX] No matching event source found for filter with type ${n} and id ${o}`
    );
    throw mw.errorLogger.logError(s, "error.contenttranslation"), s;
  };
};
const Ng = window.Vue.normalizeClass, m2 = window.Vue.resolveDirective, xs = window.Vue.createElementVNode, Ja = window.Vue.withDirectives, _e = window.Vue.unref, tt = window.Vue.openBlock, Ot = window.Vue.createBlock, Vn = window.Vue.createCommentVNode, tl = window.Vue.createVNode, Cs = window.Vue.withCtx, Mg = window.Vue.renderList, Ug = window.Vue.Fragment, nl = window.Vue.createElementBlock, h2 = window.Vue.toDisplayString, f2 = window.Vue.createTextVNode, w2 = window.Vue.vShow, v2 = { class: "cx-suggestion-list" }, _2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, S2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, y2 = { class: "cx-suggestion-list__refresh-button-container justify-center" }, jt = window.Vue.computed, x2 = window.Vue.inject, C2 = window.Vue.ref, b2 = window.Codex.CdxButton, k2 = window.Codex.CdxIcon, $2 = window.Vuex.useStore, V2 = {
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
    } = T(), { supportedSourceLanguageCodes: s, supportedTargetLanguageCodes: a } = pa(), r = Oh(), l = (J) => r(J, n.value), u = (J) => r(t.value, J), d = p2(), i = wa(), c = (J) => {
      i(
        J.sourceTitle,
        J.sourceLanguage,
        J.targetLanguage,
        d(J.suggestionSeed),
        o.value.id
      );
    }, {
      currentPageSuggestionsSlice: g,
      currentSectionSuggestionsSlice: p,
      discardPageSuggestion: m,
      discardSectionSuggestion: h,
      onSuggestionRefresh: f,
      pageSuggestionsLoading: w,
      sectionSuggestionsLoading: v,
      isCurrentPageSuggestionsSliceFull: y,
      isCurrentSectionSuggestionsSliceFull: S
    } = s2(), b = C2(null), E = yt(), x = () => {
      E({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), f(), b.value && b.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: R, markFavoritePageSuggestion: L } = fu(), B = x2("breakpoints"), j = jt(() => B.value.mobile), G = jt(
      () => j.value ? null : "pb-2 flex justify-between items-center"
    ), Y = $2(), we = jt(
      () => Y.state.suggestions.isPageSuggestionsFetchPending
    ), q = jt(
      () => Y.state.suggestions.isSectionSuggestionsFetchPending
    ), se = jt(
      () => we.value || w.value && !y.value
    ), ae = jt(
      () => q.value || v.value && !S.value
    ), te = jt(
      () => we.value || w.value || g.value.length > 0
    ), Ne = jt(
      () => q.value || v.value || p.value.length > 0
    ), We = jt(
      () => !te.value && !Ne.value
    ), Be = jt(
      () => !v.value && !w.value && !we.value && !q.value && !We.value
    );
    return (J, I) => {
      const P = m2("i18n");
      return Ja((tt(), nl("div", v2, [
        tl(_e(Qe), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: Cs(() => [
            xs("div", {
              class: Ng(["cx-suggestion-list__header-card__header px-4", G.value])
            }, [
              Ja(xs("h3", {
                class: Ng(["mw-ui-card__title mb-0", { "py-3": j.value }])
              }, null, 2), [
                [P, void 0, "cx-suggestionlist-title"]
              ]),
              j.value ? Vn("", !0) : (tt(), Ot(Mi, {
                key: 0,
                "source-languages": _e(s),
                "target-languages": _e(a),
                "selected-source-language": _e(t),
                "selected-target-language": _e(n),
                "onUpdate:selectedSourceLanguage": l,
                "onUpdate:selectedTargetLanguage": u
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            tl(t2)
          ]),
          default: Cs(() => [
            j.value ? (tt(), Ot(Mi, {
              key: 0,
              "source-languages": _e(s),
              "target-languages": _e(a),
              "selected-source-language": _e(t),
              "selected-target-language": _e(n),
              "onUpdate:selectedSourceLanguage": l,
              "onUpdate:selectedTargetLanguage": u
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])) : Vn("", !0)
          ]),
          _: 1
        }),
        Ne.value ? (tt(), Ot(_e(Qe), {
          key: 0,
          class: "cx-suggestion-list__section-suggestions pa-0 mb-0"
        }, {
          default: Cs(() => [
            Ja(xs("h5", _2, null, 512), [
              [P, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (tt(!0), nl(Ug, null, Mg(_e(p), (U, Z) => (tt(), Ot(jc, {
              key: `section-suggestion-${Z}`,
              class: "ma-0",
              suggestion: U,
              onClose: (_) => _e(h)(U),
              onClick: (_) => c(U),
              onBookmark: (_) => _e(R)(U)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            ae.value ? (tt(), Ot(_e(lt), { key: 0 })) : Vn("", !0)
          ]),
          _: 1
        })) : Vn("", !0),
        te.value ? (tt(), Ot(_e(Qe), {
          key: 1,
          ref_key: "pageSuggestionsList",
          ref: b,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: Cs(() => [
            Ja(xs("h5", S2, null, 512), [
              [P, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (tt(!0), nl(Ug, null, Mg(_e(g), (U, Z) => (tt(), Ot(jc, {
              key: `page-suggestion-${Z}`,
              suggestion: U,
              onClose: (_) => _e(m)(U),
              onClick: (_) => c(U),
              onBookmark: (_) => _e(L)(U)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            se.value ? (tt(), Ot(_e(lt), { key: 0 })) : Vn("", !0)
          ]),
          _: 1
        }, 512)) : Vn("", !0),
        We.value ? (tt(), Ot(bf, {
          key: 2,
          title: J.$i18n("cx-sx-suggestion-list-empty-title"),
          description: J.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : Vn("", !0),
        xs("div", y2, [
          Be.value ? (tt(), Ot(_e(b2), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: x
          }, {
            default: Cs(() => [
              tl(_e(k2), {
                class: "me-1",
                icon: _e(Uh)
              }, null, 8, ["icon"]),
              f2(" " + h2(J.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : Vn("", !0)
        ])
      ], 512)), [
        [w2, e.active]
      ]);
    };
  }
}, E2 = window.Vue.resolveDirective, L2 = window.Vue.createElementVNode, A2 = window.Vue.withDirectives, D2 = window.Vue.renderList, T2 = window.Vue.Fragment, ol = window.Vue.openBlock, B2 = window.Vue.createElementBlock, Ig = window.Vue.unref, Rg = window.Vue.createBlock, zg = window.Vue.withCtx, P2 = window.Vue.createCommentVNode, F2 = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, N2 = window.Vue.computed, M2 = window.Vuex.useStore, U2 = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = M2(), n = N2(() => t.state.suggestions.favorites || []), o = wa(), s = (r) => o(
      r.title,
      r.sourceLanguage,
      r.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = fu();
    return (r, l) => {
      const u = E2("i18n");
      return n.value.length ? (ol(), Rg(Ig(Qe), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: zg(() => [
          A2(L2("h3", F2, null, 512), [
            [u, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: zg(() => [
          (ol(!0), B2(T2, null, D2(n.value, (d, i) => (ol(), Rg(jc, {
            key: `favorite-${i}`,
            suggestion: d,
            onClick: (c) => s(d),
            onBookmark: (c) => Ig(a)(d)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : P2("", !0);
    };
  }
};
const I2 = window.Vue.resolveDirective, bs = window.Vue.createElementVNode, R2 = window.Vue.withDirectives, z2 = window.Vue.renderList, O2 = window.Vue.Fragment, Og = window.Vue.openBlock, jg = window.Vue.createElementBlock, j2 = window.Vue.unref, H2 = window.Vue.createVNode, q2 = window.Vue.toDisplayString, G2 = { class: "cx-help-panel pa-4" }, X2 = { class: "cx-help-panel__item-list mt-6 ps-2" }, W2 = ["href", "target"], K2 = ["textContent"], Y2 = window.Codex.CdxIcon, Q2 = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = fe(), n = [
      {
        icon: QS,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
        target: "_blank"
      },
      {
        icon: XS,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
        target: "_blank"
      }
    ];
    return (o, s) => {
      const a = I2("i18n");
      return Og(), jg("div", G2, [
        R2(bs("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        bs("ul", X2, [
          (Og(), jg(O2, null, z2(n, (r, l) => bs("li", {
            key: l,
            class: "mt-4"
          }, [
            bs("a", {
              href: r.href,
              target: r.target
            }, [
              H2(j2(Y2), {
                class: "me-2",
                icon: r.icon
              }, null, 8, ["icon"]),
              bs("span", {
                textContent: q2(r.label)
              }, null, 8, K2)
            ], 8, W2)
          ])), 64))
        ])
      ]);
    };
  }
};
const J2 = window.Vue.resolveDirective, Co = window.Vue.createElementVNode, sl = window.Vue.withDirectives, Hg = window.Vue.toDisplayString, al = window.Vue.unref, il = window.Vue.withCtx, rl = window.Vue.createVNode, Z2 = window.Vue.openBlock, e$ = window.Vue.createElementBlock, t$ = { class: "cx-stats-panel pa-4" }, n$ = ["textContent"], o$ = { class: "cx-stats-panel__monthly-stats-label" }, s$ = ["textContent"], a$ = { class: "cx-stats-panel__total-stats-label" }, i$ = window.Vue.ref, qg = window.Vue.computed, r$ = window.Vue.watch, l$ = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = e, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", o = qg(() => {
      var r, l;
      return ((l = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : l.count) || 0;
    }), s = qg(() => {
      var r, l;
      return ((l = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : l.delta) || 0;
    }), a = i$(null);
    return r$(
      () => t.stats,
      () => {
        const r = t.stats, l = a.value.getContext("2d"), u = Object.keys(t.stats || {}).sort(), d = u.reduce(
          (S, b) => Math.max(S, r[b].delta),
          0
        ), i = u.map((S) => r[S].delta), c = a.value.getBoundingClientRect().width, g = a.value.getBoundingClientRect().height;
        a.value.width = c, a.value.height = g;
        const p = 4, m = 6, h = 50, f = (h - p) / d;
        let w = p;
        const v = Math.floor(
          (c - p) / (m + p)
        ), y = i.slice(
          Math.max(i.length - v, 0)
        );
        y.forEach((S, b) => {
          b === y.length - 1 && (l.fillStyle = "#36c");
          const E = h - S * f;
          l.fillRect(w, E, m, S * f), w += m + p;
        });
      }
    ), (r, l) => {
      const u = J2("i18n");
      return Z2(), e$("div", t$, [
        sl(Co("h5", null, null, 512), [
          [u, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        rl(al(N), null, {
          default: il(() => [
            rl(al(k), { class: "cx-stats-panel__monthly-stats" }, {
              default: il(() => [
                Co("h3", {
                  textContent: Hg(s.value)
                }, null, 8, n$),
                sl(Co("h5", o$, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            rl(al(k), { class: "cx-stats-panel__total-stats" }, {
              default: il(() => [
                Co("h3", {
                  textContent: Hg(o.value)
                }, null, 8, s$),
                sl(Co("h5", a$, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Co("canvas", {
          ref_key: "canvasRef",
          ref: a,
          class: "cx-stats-panel__canvas"
        }, null, 512)
      ]);
    };
  }
}, Ef = () => {
  const e = yt();
  return (t) => e({
    event_type: "dashboard_tab_select",
    event_source: {
      draft: "dashboard_inprogress_tab",
      published: "dashboard_published_tab",
      suggestions: "dashboard_suggestions_tab"
    }[t]
  });
};
const c$ = window.Vue.renderSlot, u$ = window.Vue.unref, d$ = window.Vue.createVNode, g$ = window.Vue.createElementVNode, p$ = window.Vue.openBlock, m$ = window.Vue.createElementBlock, h$ = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, f$ = { class: "col-12 ma-0 pa-0" }, w$ = {
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
    const n = t, o = Ef(), s = (a) => {
      o(a), n("update:active", a);
    };
    return (a, r) => (p$(), m$("footer", h$, [
      g$("div", f$, [
        c$(a.$slots, "default", {}, () => [
          d$(u$(ua), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: s
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, v$ = window.Vuex.useStore, _$ = () => {
  const e = v$(), t = Ko();
  return () => C(void 0, null, function* () {
    if (e.state.suggestions.favorites.length)
      return;
    const n = yield pe.fetchFavorites();
    if (!n || !n.length)
      return;
    const o = {};
    for (const s of n)
      e.commit("suggestions/addFavoriteSuggestion", s), pe.fetchSectionSuggestion(
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
}, S$ = window.Vuex.useStore, Lf = () => {
  const e = S$(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = T(), { isDefaultFilter: r } = Xc(), { previousRoute: l } = Te(e), u = yt(), d = () => {
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
    }[l.value];
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
  } };
}, Gg = window.Vue.computed, y$ = window.Vuex.useStore, Fe = () => {
  const e = y$(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o,
    sectionURLParameter: s
  } = T(), a = Gg(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ), r = Gg(
    () => {
      var l;
      return !!((l = a.value) != null && l.presentSections.hasOwnProperty(
        s.value
      ));
    }
  );
  return { sectionSuggestion: a, isCurrentSectionPresent: r };
}, x$ = window.Vue.ref, Za = {
  NEW_SECTION: "NEW_SECTION",
  EXPAND: "EXPAND",
  REPLACE: "REPLACE",
  SANDBOX: "SANDBOX"
}, ll = x$(null), Ut = () => {
  const { isCurrentSectionPresent: e } = Fe(), t = () => {
    e.value ? o(Za.EXPAND) : o(Za.NEW_SECTION);
  }, n = () => {
    ll.value = null;
  }, o = (s) => {
    if (!Object.values(Za).includes(s))
      throw new Error("[CX] Invalid publishing target used");
    ll.value = s;
  };
  return {
    target: ll,
    resetPublishTarget: t,
    clearPublishTarget: n,
    setTarget: o,
    PUBLISHING_TARGETS: Za
  };
}, C$ = window.Vue.watch, b$ = () => {
  const { fetchAllTranslations: e } = Jo(), t = Rh(), n = _$(), { fetchPageCollectionGroups: o } = su(), { logDashboardOpenEvent: s } = Lf(), { applicationLanguagesInitialized: a } = jh(), { clearPublishTarget: r } = Ut();
  return () => C(void 0, null, function* () {
    o(), r();
    try {
      yield n();
    } catch (l) {
      mw.log.error("[CX] Error while fetching favorite suggestions", l);
    }
    yield e(), C$(
      a,
      () => {
        a.value && (s(), t());
      },
      { immediate: !0 }
    );
  });
}, Xg = window.Vue.computed, k$ = window.Vue.ref, $$ = window.Vue.watch, V$ = window.Vue.watchEffect, E$ = window.Vuex.useStore, L$ = ["suggestions", "draft", "published"], A$ = () => {
  const e = E$(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = T(), { translationsFetched: o } = Jo(), s = k$(null);
  if (L$.includes(t.value))
    s.value = t.value;
  else {
    const a = Xg(
      () => o.value.draft
    ), r = Xg(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = r.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", $$(a, (l) => {
      l && (s.value = r.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return V$(() => {
    n(s.value), window.scrollTo(0, 0);
  }), s;
}, D$ = window.Vue.computed, T$ = () => {
  const e = fe();
  return D$(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: x0,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: Ii,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: y0,
        type: "text"
      }
    }
  ]);
};
const xe = window.Vue.unref, Me = window.Vue.createVNode, B$ = window.Vue.toDisplayString, P$ = window.Vue.createTextVNode, an = window.Vue.withCtx, cl = window.Vue.openBlock, Wg = window.Vue.createBlock, Kg = window.Vue.createCommentVNode, F$ = window.Vue.vShow, N$ = window.Vue.withDirectives, M$ = window.Vue.isRef, U$ = window.Vue.createElementBlock, I$ = window.Vue.computed, R$ = window.Vuex.useStore, z$ = window.Codex.CdxButton, O$ = window.Codex.CdxIcon, j$ = {
  __name: "CXDashboard",
  setup(e) {
    const t = Xe(), n = yt(), o = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    b$()();
    const a = R$();
    a.dispatch("translator/fetchTranslatorStats");
    const r = I$(() => a.state.translator.translatorStats), l = A$(), u = T$(), d = Ef(), i = (c) => {
      d(c), l.value = c;
    };
    return (c, g) => (cl(), U$("div", null, [
      Me(xe(N), { class: "ma-0 pb-4" }, {
        default: an(() => [
          Me(xe(z$), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: o
          }, {
            default: an(() => [
              Me(xe(O$), {
                class: "me-1",
                icon: xe(Ac)
              }, null, 8, ["icon"]),
              P$(" " + B$(c.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      Me(xe(N), {
        class: "ma-0",
        align: "start"
      }, {
        default: an(() => [
          c.$mwui.breakpoint.tabletAndUp ? (cl(), Wg(xe(k), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: an(() => [
              Me(xe(ua), {
                id: "dashboard-list-selector--desktop",
                items: xe(u),
                active: xe(l),
                onSelect: i
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : Kg("", !0),
          Me(xe(k), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: an(() => [
              N$(Me(U2, null, null, 512), [
                [F$, xe(l) === "suggestions"]
              ]),
              Me(V2, {
                active: xe(l) === "suggestions"
              }, null, 8, ["active"]),
              Me(lg, {
                "translation-status": "draft",
                "active-status": xe(l)
              }, null, 8, ["active-status"]),
              Me(lg, {
                "translation-status": "published",
                "active-status": xe(l)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          Me(xe(k), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: an(() => [
              Me(xe(N), {
                class: "ma-0",
                align: "start"
              }, {
                default: an(() => [
                  Me(xe(k), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: an(() => [
                      Me(l$, { stats: r.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  Me(xe(k), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: an(() => [
                      Me(Q2)
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
      c.$mwui.breakpoint.mobile ? (cl(), Wg(w$, {
        key: 0,
        active: xe(l),
        "onUpdate:active": g[0] || (g[0] = (p) => M$(l) ? l.value = p : null),
        items: xe(u)
      }, null, 8, ["active", "items"])) : Kg("", !0)
    ]));
  }
}, H$ = {
  name: "DashboardView",
  components: { CxDashboard: j$ }
}, q$ = window.Vue.resolveComponent, G$ = window.Vue.createVNode, X$ = window.Vue.openBlock, W$ = window.Vue.createElementBlock, K$ = { class: "cx-translation-dashboard" };
function Y$(e, t, n, o, s, a) {
  const r = q$("cx-dashboard");
  return X$(), W$("main", K$, [
    G$(r, { class: "mb-4 pb-12 px-3 px-tablet-10" })
  ]);
}
const Yg = /* @__PURE__ */ ce(H$, [["render", Y$]]), Q$ = window.Vuex.useStore, J$ = window.Vue.computed, It = () => {
  const e = Q$(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = T();
  return { currentTranslation: J$(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (r) => r.status === "draft" && r.sourceTitle === s.value && r.sectionTitleMatches(o.value) && r.sourceLanguage === t.value && r.targetLanguage === n.value
    )
  ) };
}, bo = window.Vue.computed, Z$ = () => {
  const { sectionSuggestion: e } = Fe(), { targetLanguageURLParameter: t } = T(), { currentTranslation: n } = It(), o = bo(
    () => {
      var g, p, m;
      return (m = (p = (g = e.value) == null ? void 0 : g.orderedMissingSections) == null ? void 0 : p[0]) == null ? void 0 : m.sourceTitle;
    }
  ), s = bo(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.missingSectionsCount;
    }
  ), a = bo(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.presentSectionsCount;
    }
  ), { targetPageExists: r, getCurrentTitleByLanguage: l } = Sn(), u = bo(() => r ? K.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    l(t.value, null)
  ) : null), d = (g) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : g ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : r.value ? s.value > 1 || s.value === 1 && a.value > 0 ? "cx-sx-select-section" : s.value === 1 && a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : s.value === 0 && a.value > 0 ? "cx-sx-select-section" : s.value === 0 && a.value === 0 ? "cx-sx-translation-confirmer-action-new-translation" : "" : "cx-sx-start-translation-button-label", i = bo(() => {
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
  }), c = bo(
    () => {
      var g;
      return !r.value || ((g = e.value) == null ? void 0 : g.missingSectionsCount) > 0;
    }
  );
  return {
    actionInformationMessageArgs: i,
    getActionButtonLabel: d,
    isProgressiveButton: c,
    targetArticlePath: u
  };
};
function eV(e) {
  return e.$el = $(e), e;
}
function tV(e, t, n, o) {
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
function nV() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function oV(e, t) {
  return C(this, null, function* () {
    yield wu(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = eV(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const sV = window.Vue.computed, aV = window.Vue.onMounted, iV = window.Vue.ref;
function rV(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const lV = {
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
    useText: {
      type: Boolean,
      required: !0
    },
    dir: {
      type: String,
      default: "auto"
    }
  },
  emits: ["ready", "close", "edit-completed"],
  setup(e, t) {
    const n = iV(null);
    let o = null;
    const s = sV(
      () => e.useText ? o.getDom().body.textContent : o.getHtml()
    ), a = () => {
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
    return aV(() => C(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = rV;
      const i = yield oV(u, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), o = tV(
        i,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = nV, o.focus();
    })), { sxeditor: n };
  }
}, Pi = window.Vue.createElementVNode, cV = window.Vue.openBlock, uV = window.Vue.createElementBlock, dV = ["lang", "dir"], gV = /* @__PURE__ */ Pi("div", { class: "overlay-header-container" }, [
  /* @__PURE__ */ Pi("div", { class: "overlay-header header initial-header" }, [
    /* @__PURE__ */ Pi("div", { class: "toolbar" })
  ])
], -1), pV = ["lang", "dir"];
function mV(e, t, n, o, s, a) {
  return cV(), uV("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    gV,
    Pi("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, pV)
  ], 8, dV);
}
const hV = /* @__PURE__ */ ce(lV, [["render", mV]]);
function wu() {
  return mw.loader.using("mw.cx3.ve");
}
const fV = window.Vuex.useStore, wV = () => {
  const e = fV();
  return (t, n) => C(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield wu(), new Promise((s) => {
      setTimeout(() => {
        const a = kh.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, vV = window.Vuex.useStore, Af = () => {
  const e = vV();
  return (t, n, o, s = null) => C(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      o
    );
    if (a && a.content)
      return;
    const r = yield lo.fetchPageContent(
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
}, Qg = window.Vue.computed, _V = window.Vuex.useStore, ut = () => {
  const e = _V(), { sectionSuggestion: t } = Fe(), { currentTranslation: n } = It(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = T(), r = Qg(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), l = Qg(() => {
    var d, i;
    const u = ((d = t.value) == null ? void 0 : d.targetTitle) || ((i = n.value) == null ? void 0 : i.targetTitle);
    return e.getters["mediawiki/getPage"](
      a.value,
      u
    );
  });
  return { currentSourcePage: r, currentTargetPage: l };
}, Zi = () => {
  const { currentSourcePage: e } = ut(), t = wV(), n = Af(), {
    setSectionURLParam: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    revisionURLParameter: l
  } = T(), u = (c, g) => C(void 0, null, function* () {
    c() || (yield n(
      s.value,
      a.value,
      r.value,
      l.value
    ), Xo || (yield t(
      s.value,
      r.value
    ))), g();
  });
  return {
    selectPageSectionByIndex: (c) => {
      const g = () => {
        var m;
        return (m = e.value.sections) == null ? void 0 : m[c];
      };
      return u(g, () => {
        const m = g();
        c === 0 ? m.originalTitle = e.value.title : o(m.originalTitle);
      });
    },
    selectPageSectionByTitle: (c) => u(() => e.value.getSectionByTitle(c), () => {
      o(c);
    })
  };
}, SV = window.Vuex.useStore, Zo = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o,
    isQuickTutorialForced: s
  } = T(), a = SV(), r = Xe(), l = () => {
    const c = r.currentRoute.value.name !== "sx-quick-tutorial" && (s() || !a.getters["translator/userHasSectionTranslations"]) ? "sx-quick-tutorial" : "sx-sentence-selector";
    return r.getRoutes().find((g) => g.name === c);
  }, u = () => {
    const i = mw.config.get(
      "wgContentTranslationTranslateInTarget"
    ), c = K.getCurrentWikiLanguageCode();
    if (!i || t.value === c)
      return !1;
    const g = o.value ? { section: o.value } : {}, p = K.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      g
    );
    return location.href = p + "#" + l().path, !0;
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
    ), Xo) {
      d();
      return;
    }
    if (u())
      return;
    const c = l();
    r.push({ name: c.name });
  };
}, vu = () => {
  const e = yt(), { currentTranslation: t } = It();
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
      isLeadSectionTranslation: l,
      sourceSectionTitle: u,
      targetSectionTitle: d
    } = t.value, i = {
      event_type: "dashboard_translation_continue",
      translation_id: n,
      translation_source_language: o,
      translation_source_title: a,
      translation_target_language: s,
      translation_target_title: r,
      translation_type: l ? "article" : "section"
    };
    return u && (i.translation_source_section = u), d && (i.translation_target_section = d), e(i);
  };
}, yV = window.Vue.ref, xV = () => {
  const e = Xe(), { logDashboardTranslationStartEvent: t } = Ji(), n = vu(), o = Zo(), { sectionURLParameter: s } = T(), { targetPageExists: a } = Sn(), { selectPageSectionByTitle: r } = Zi(), l = () => C(void 0, null, function* () {
    yield r(s.value), e.push({ name: "sx-content-comparator" });
  }), u = yV(!1), { currentTranslation: d } = It();
  return {
    handlePrimaryButtonClick: () => {
      d.value ? d.value.isArticleTranslation && !Xo ? u.value = !0 : (n(), o()) : s.value ? l() : a.value ? e.push({ name: "sx-section-selector" }) : (t(), o());
    },
    translationConfirmationDialogOn: u
  };
};
const CV = window.Vue.resolveDirective, Jg = window.Vue.createElementVNode, Zg = window.Vue.withDirectives, bV = window.Vue.unref, kV = window.Vue.withCtx, $V = window.Vue.openBlock, VV = window.Vue.createBlock, EV = {
  href: "",
  target: "_blank"
}, LV = window.Codex.CdxDialog, AV = {
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
    const n = e, o = t, s = (d) => o("update:modelValue", d), a = fe(), r = {
      label: a.i18n(
        "cx-unreviewed-translation-dialog-review-translation-button-label"
      ),
      actionType: "progressive"
    }, l = {
      label: a.i18n("cx-unreviewed-translation-dialog-close-button-label")
    };
    function u() {
      window.open(n.targetUrl, "_blank"), s(!1);
    }
    return (d, i) => {
      const c = CV("i18n");
      return $V(), VV(bV(LV), {
        class: "cx-unreviewed-translation-dialog",
        open: e.modelValue,
        title: d.$i18n("cx-unreviewed-translation-dialog-title"),
        "use-close-button": !0,
        "primary-action": r,
        "default-action": l,
        "onUpdate:open": i[0] || (i[0] = (g) => s(g)),
        onPrimary: u,
        onDefault: i[1] || (i[1] = (g) => s(!1))
      }, {
        default: kV(() => [
          Zg(Jg("p", null, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          Zg(Jg("a", EV, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title"]);
    };
  }
};
const Ce = window.Vue.unref, DV = window.Vue.resolveDirective, ks = window.Vue.createElementVNode, ep = window.Vue.withDirectives, $s = window.Vue.toDisplayString, Vs = window.Vue.openBlock, ul = window.Vue.createElementBlock, dl = window.Vue.createCommentVNode, mt = window.Vue.createVNode, Lt = window.Vue.withCtx, gl = window.Vue.createTextVNode, TV = window.Vue.withModifiers, tp = window.Vue.createBlock, BV = window.Vue.Fragment, PV = { class: "sx-translation-confirmer-body pb-4" }, FV = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, NV = ["textContent"], MV = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, UV = ["href"], IV = ["textContent"], ei = window.Vue.computed, RV = window.Vue.inject, np = window.Vue.ref, zV = window.Vue.watchEffect, OV = window.Vuex.useStore, pl = window.Codex.CdxButton, jV = window.Codex.CdxIcon, HV = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = Xe(), o = OV();
    RV("colors");
    const { sectionSuggestion: s } = Fe(), { targetLanguageAutonym: a } = Te(o), { sectionURLParameter: r } = T(), { logDashboardTranslationStartEvent: l } = Ji(), u = Zo(), { handlePrimaryButtonClick: d, translationConfirmationDialogOn: i } = xV(), c = np(!1), g = np(null), p = () => C(this, null, function* () {
      let G = !0;
      try {
        G = yield _t.checkUnreviewedTranslations();
      } catch (Y) {
        mw.log.error(
          "Error while checking for user's unreviewed translations ",
          Y
        );
      }
      G !== !0 && (c.value = !0, g.value = G.targetUrl);
    }), m = () => C(this, null, function* () {
      yield p(), !c.value && (l(), u());
    }), h = () => C(this, null, function* () {
      yield p(), !c.value && d();
    }), f = t;
    zV(() => {
      i.value && (f("open-translation-confirmation-dialog"), i.value = !1);
    });
    const {
      actionInformationMessageArgs: w,
      getActionButtonLabel: v,
      isProgressiveButton: y,
      targetArticlePath: S
    } = Z$(), b = fe(), E = ei(
      () => b.i18n(v(!!r.value))
    ), x = ei(
      () => b.i18n(...w.value)
    ), R = () => C(this, null, function* () {
      yield p(), !c.value && n.push({ name: "sx-section-selector" });
    }), L = ei(() => {
      var G, Y;
      return r.value && !!((Y = (G = s.value) == null ? void 0 : G.sourceSections) != null && Y.length);
    }), { targetPageExists: B } = Sn(), j = ei(() => !r.value && B.value && Xo);
    return (G, Y) => {
      const we = DV("i18n");
      return Vs(), ul(BV, null, [
        ks("section", PV, [
          Ce(r) ? (Vs(), ul("section", FV, [
            ep(ks("h6", null, null, 512), [
              [we, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            ks("h5", {
              class: "ma-0",
              textContent: $s(Ce(r))
            }, null, 8, NV)
          ])) : Ce(B) ? (Vs(), ul("section", MV, [
            mt(Ce(N), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: Lt(() => [
                ep(mt(Ce(k), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [we, [Ce(a)], "cx-sx-existing-translation-status"]
                ]),
                mt(Ce(k), { shrink: "" }, {
                  default: Lt(() => [
                    ks("a", {
                      href: Ce(S),
                      target: "_blank"
                    }, [
                      mt(Ce(jV), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: Ce(Xi)
                      }, null, 8, ["icon"])
                    ], 8, UV)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            mt(Ce(N), { class: "ma-0" }, {
              default: Lt(() => [
                mt(Ce(k), null, {
                  default: Lt(() => [
                    ks("span", {
                      textContent: $s(x.value)
                    }, null, 8, IV)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : dl("", !0),
          mt(Ce(N), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: Lt(() => [
              L.value ? (Vs(), tp(Ce(k), {
                key: 0,
                shrink: ""
              }, {
                default: Lt(() => [
                  mt(Ce(pl), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: TV(R, ["stop"])
                  }, {
                    default: Lt(() => [
                      gl($s(G.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : dl("", !0),
              j.value ? (Vs(), tp(Ce(k), {
                key: 1,
                shrink: ""
              }, {
                default: Lt(() => [
                  mt(Ce(pl), {
                    size: "large",
                    onClick: m
                  }, {
                    default: Lt(() => [
                      gl($s(G.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : dl("", !0),
              mt(Ce(k), { shrink: "" }, {
                default: Lt(() => [
                  mt(Ce(pl), {
                    weight: "primary",
                    size: "large",
                    action: Ce(y) ? "progressive" : "default",
                    onClick: h
                  }, {
                    default: Lt(() => [
                      gl($s(E.value), 1)
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
        mt(AV, {
          modelValue: c.value,
          "onUpdate:modelValue": Y[0] || (Y[0] = (q) => c.value = q),
          "target-url": g.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const ml = window.Vue.unref, qV = window.Vue.openBlock, GV = window.Vue.createBlock, XV = window.Vue.computed, Df = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedTargetLanguageCodes: t } = pa(), {
      sourceLanguageURLParameter: n,
      targetLanguageURLParameter: o
    } = T(), { currentLanguageTitleGroup: s } = Sn(), a = XV(
      () => {
        var d;
        return ((d = s.value) == null ? void 0 : d.titles.map((i) => i.lang)) || [];
      }
    ), r = by(), l = (d) => r(d, o.value), u = (d) => r(n.value, d);
    return (d, i) => (qV(), GV(Mi, {
      class: "sx-article-language-selector",
      "source-languages": a.value,
      "target-languages": ml(t),
      "selected-source-language": ml(n),
      "selected-target-language": ml(o),
      "onUpdate:selectedSourceLanguage": l,
      "onUpdate:selectedTargetLanguage": u
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
}, hl = window.Vue.computed, op = window.Vue.ref, WV = window.Vue.watchEffect, KV = () => {
  const { currentSourcePage: e } = ut(), { sectionSuggestion: t } = Fe(), n = fe(), { sectionURLParameter: o } = T(), s = op(null), a = op([]);
  WV(() => C(void 0, null, function* () {
    var d;
    if (t.value && o.value)
      a.value = [o.value];
    else if (t.value) {
      const { missingSections: i } = t.value;
      a.value = Object.keys(i);
    } else
      e.value && !Xo ? a.value = [Oo.LEAD_SECTION_DUMMY_TITLE] : a.value = [];
    a.value.length ? s.value = yield Mk(
      e.value,
      a.value
    ) : s.value = ((d = e.value) == null ? void 0 : d.articleSize) || null;
  }));
  const r = hl(() => kf(s.value || 0)), l = hl(() => {
    if (!t.value && !e.value || !r.value)
      return "";
    const d = Uk(
      r.value,
      a.value
    );
    return n.i18n(...d);
  }), u = hl(
    () => $f(s.value)
  );
  return { timeEstimateMessage: l, isQuickTranslation: u };
};
const $e = window.Vue.unref, fl = window.Vue.toDisplayString, En = window.Vue.createElementVNode, Ht = window.Vue.createVNode, ko = window.Vue.withCtx, YV = window.Vue.resolveDirective, QV = window.Vue.withDirectives, JV = window.Vue.normalizeClass, sp = window.Vue.openBlock, ZV = window.Vue.createElementBlock, e4 = window.Vue.createCommentVNode, t4 = window.Vue.createBlock, n4 = ["textContent"], o4 = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, s4 = ["textContent"], a4 = { class: "pe-3" }, i4 = ["textContent"], r4 = window.Codex.CdxButton, Es = window.Codex.CdxIcon, Xn = window.Vue.computed, l4 = window.Vuex.useStore, c4 = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = l4(), { currentSourcePage: n } = ut(), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: s,
      pageURLParameter: a
    } = T(), r = Xn(() => t.state.suggestions.favorites || []), l = Xn(
      () => r.value.some(
        (S) => a.value === S.title && o.value === S.sourceLanguage && s.value === S.targetLanguage
      )
    ), { markFavoriteSuggestion: u, removeFavoriteSuggestion: d } = fu(), i = () => u(
      a.value,
      o.value,
      s.value
    ), c = () => d(
      new jo({
        title: a.value,
        sourceLanguage: o.value,
        targetLanguage: s.value
      })
    ), g = Xn(
      () => l.value ? Fh : Nh
    ), p = Xn(
      () => l.value ? c : i
    ), m = Xn(
      () => K.getPageUrl(o.value || "", a.value || "")
    ), h = Xn(
      () => {
        var S;
        return (((S = n.value) == null ? void 0 : S.langLinksCount) || 0) + 1;
      }
    ), f = (S) => {
      const b = [
        { value: 1e9, suffix: "B" },
        // 1 billion
        { value: 1e6, suffix: "M" },
        // 1 million
        { value: 1e3, suffix: "K" }
        // 1 thousand
      ];
      for (let E = 0; E < b.length; E++)
        if (S >= b[E].value)
          return (S / b[E].value).toFixed(1).replace(/\.0$/, "") + b[E].suffix;
      return S.toString();
    }, w = Xn(() => {
      var b;
      const S = Object.values(((b = n.value) == null ? void 0 : b.pageviews) || {}).reduce(
        (E, x) => E + x,
        0
      );
      return f(S);
    }), { timeEstimateMessage: v, isQuickTranslation: y } = KV();
    return (S, b) => {
      const E = YV("i18n");
      return sp(), t4($e(N), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: ko(() => [
          Ht($e(k), null, {
            default: ko(() => [
              Ht($e(N), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: ko(() => [
                  Ht($e(k), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: m.value,
                    target: "_blank"
                  }, {
                    default: ko(() => [
                      En("h5", {
                        class: "ma-0 me-1",
                        textContent: fl($e(a))
                      }, null, 8, n4),
                      Ht($e(Es), {
                        size: "x-small",
                        icon: $e(Xi)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  Ht($e(k), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: ko(() => [
                      Ht($e(r4), {
                        class: "px-0",
                        weight: "quiet",
                        action: l.value ? "progressive" : "default",
                        "aria-label": S.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: p.value
                      }, {
                        default: ko(() => [
                          Ht($e(Es), { icon: g.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              En("div", o4, [
                En("div", null, [
                  En("span", null, [
                    Ht($e(Es), {
                      icon: $e(Mh),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    En("span", {
                      class: "pe-3",
                      textContent: fl(h.value)
                    }, null, 8, s4)
                  ]),
                  En("span", null, [
                    Ht($e(Es), {
                      icon: $e(OS),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    QV(En("span", a4, null, 512), [
                      [E, [w.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                $e(v) ? (sp(), ZV("span", {
                  key: 0,
                  class: JV(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": $e(y)
                  }])
                }, [
                  Ht($e(Es), {
                    icon: $e(HS),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  En("span", {
                    textContent: fl($e(v))
                  }, null, 8, i4)
                ], 2)) : e4("", !0)
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
const u4 = window.Vue.resolveDirective, Wn = window.Vue.createElementVNode, ti = window.Vue.withDirectives, d4 = window.Vue.toDisplayString, g4 = window.Vue.createTextVNode, wl = window.Vue.unref, vl = window.Vue.withCtx, _l = window.Vue.openBlock, Sl = window.Vue.createBlock;
window.Vue.createCommentVNode;
const p4 = { class: "pa-4" }, m4 = { class: "flex pt-2" }, h4 = window.Codex.CdxButton, f4 = window.Vue.ref, w4 = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = Zo(), a = vu(), r = f4(!1), { currentTranslation: l } = It(), u = () => C(this, null, function* () {
      r.value = !0;
      let d = !1;
      try {
        d = yield _t.splitTranslation(
          l.value.translationId
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
      const c = u4("i18n");
      return _l(), Sl(wl(St), {
        value: e.modelValue,
        persistent: r.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: d.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: vl(() => [
          Wn("div", m4, [
            r.value ? (_l(), Sl(wl(lt), { key: 1 })) : (_l(), Sl(wl(h4), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: u
            }, {
              default: vl(() => [
                g4(d4(d.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: vl(() => [
          Wn("div", p4, [
            ti(Wn("p", null, null, 512), [
              [c, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            ti(Wn("p", null, null, 512), [
              [c, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            Wn("p", null, [
              ti(Wn("strong", null, null, 512), [
                [c, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            ti(Wn("p", null, null, 512), [
              [c, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
}, v4 = window.Vuex.useStore;
let ni = [];
const _u = () => {
  const e = v4();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || ni.includes(o) ? Promise.resolve() : (ni.push(o), lo.fetchLanguageTitles(t, n).then((s) => {
      ni = ni.filter(
        (a) => a !== o
      ), s && e.commit("mediawiki/addLanguageTitleGroup", s);
    }));
  };
}, _4 = window.Vue.ref, $o = _4(null), Tf = () => {
  const e = () => C(void 0, null, function* () {
    var n, o;
    $o.value || (yield Gi.fetchCXServerToken().then((s) => {
      s.age <= 30 && (s.age = 3600);
      const a = Math.floor(Date.now() / 1e3);
      s.refreshAt = a + s.age - 30, $o.value = s;
    }).catch((s) => {
      if (s === "token-impossible") {
        const a = Math.floor(Date.now() / 1e3);
        $o.value = { jwt: "", refreshAt: a + 36e3 };
      }
    }));
    const t = Math.floor(Date.now() / 1e3);
    return ((n = $o.value) == null ? void 0 : n.refreshAt) <= t ? ($o.value = null, e()) : (o = $o.value) == null ? void 0 : o.jwt;
  });
  return e;
};
const ap = window.Vue.resolveDirective, oi = window.Vue.createElementVNode, ip = window.Vue.withDirectives, Ln = window.Vue.unref, si = window.Vue.withCtx, rn = window.Vue.createVNode, yl = window.Vue.openBlock, rp = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const S4 = window.Vue.createBlock, y4 = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, x4 = { class: "mb-0" }, C4 = { class: "sx-translation-confirmer__article-image flex justify-center" }, b4 = ["src"], k4 = { class: "ma-3" }, lp = window.Vue.computed, $4 = window.Vue.inject, V4 = window.Vue.onBeforeUnmount, E4 = window.Vue.ref, L4 = window.Vuex.useStore, A4 = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = L4(), { currentSourcePage: n } = ut(), { previousRoute: o } = Te(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l,
      clearTranslationURLParameters: u
    } = T(), d = $4("breakpoints"), i = lp(() => d.value.nextBreakpoint), c = lp(
      () => {
        var y;
        return (y = n.value) == null ? void 0 : y.getImage(i.value);
      }
    ), { fetchTranslationsByStatus: g } = Jo(), p = _u();
    g("draft"), p(s.value, r.value), wu(), Tf()(), Ih()(a.value);
    const f = Xe(), w = () => {
      const y = ["dashboard", "sx-article-search"];
      !o.value || !y.includes(o.value) ? f.push({ name: "dashboard" }) : f.push({ name: o.value });
    };
    V4(() => {
      const y = f.currentRoute.value.name;
      (y === "dashboard" || y === "sx-article-search") && u();
    });
    const v = E4(!1);
    return (y, S) => {
      const b = ap("i18n"), E = ap("i18n-html");
      return yl(), rp("section", y4, [
        rn(Ln(N), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: si(() => [
            rn(Ln(k), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: si(() => [
                ip(oi("h5", x4, null, 512), [
                  [b, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            rn(Ln(k), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: si(() => [
                rn(Ln(qe), {
                  class: "pa-0",
                  type: "icon",
                  icon: Ln(Ri),
                  "icon-size": 20,
                  onClick: w
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        oi("div", C4, [
          c.value ? (yl(), rp("img", {
            key: 0,
            src: c.value
          }, null, 8, b4)) : (yl(), S4(Ln(Je), {
            key: 1,
            size: "120",
            icon: Ln(rh),
            "icon-color": y.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        rn(c4),
        rn(Df),
        rn(HV, {
          onOpenTranslationConfirmationDialog: S[0] || (S[0] = (x) => v.value = !0)
        }),
        rn(Ln(N), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: si(() => [
            oi("p", k4, [
              ip(oi("small", null, null, 512), [
                [E, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        rn(w4, {
          modelValue: v.value,
          "onUpdate:modelValue": S[1] || (S[1] = (x) => v.value = x)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const D4 = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: A4
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, T4 = window.Vue.resolveComponent, B4 = window.Vue.createVNode, P4 = window.Vue.normalizeClass, F4 = window.Vue.openBlock, N4 = window.Vue.createElementBlock;
function M4(e, t, n, o, s, a) {
  const r = T4("sx-translation-confirmer");
  return F4(), N4("main", {
    class: P4(["sx-translation-confirmer-view", a.classes])
  }, [
    B4(r)
  ], 2);
}
const U4 = /* @__PURE__ */ ce(D4, [["render", M4]]);
const I4 = window.Vue.toDisplayString, cp = window.Vue.unref, R4 = window.Vue.createVNode, z4 = window.Vue.createTextVNode, O4 = window.Vue.createElementVNode, j4 = window.Vue.openBlock, H4 = window.Vue.createElementBlock, q4 = { class: "sx-section-selector-view-article-item" }, G4 = ["href"], X4 = window.Codex.CdxIcon, up = {
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
    return (t, n) => (j4(), H4("span", q4, [
      O4("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        z4(I4(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        R4(cp(X4), {
          size: "x-small",
          icon: cp(Xi)
        }, null, 8, ["icon"])
      ], 8, G4)
    ]));
  }
};
const W4 = window.Vue.resolveDirective, ai = window.Vue.createElementVNode, xl = window.Vue.withDirectives, Kn = window.Vue.unref, K4 = window.Vue.toDisplayString, ii = window.Vue.withCtx, Ls = window.Vue.createVNode, Y4 = window.Vue.openBlock, Q4 = window.Vue.createElementBlock, J4 = { class: "sx-section-selector__header pa-4" }, Z4 = { class: "sx-section-selector__header-text ma-0" }, eE = ["textContent"], tE = { class: "pt-0 ma-0" }, nE = { class: "ma-0" }, oE = window.Codex.CdxButton, sE = window.Codex.CdxIcon, aE = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = Fe();
    return (n, o) => {
      const s = W4("i18n");
      return Y4(), Q4("div", J4, [
        Ls(Kn(N), { class: "ma-0 pb-3" }, {
          default: ii(() => [
            Ls(Kn(k), null, {
              default: ii(() => {
                var a;
                return [
                  xl(ai("h6", Z4, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  ai("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: K4((a = Kn(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, eE)
                ];
              }),
              _: 1
            }),
            Ls(Kn(k), {
              shrink: "",
              class: "justify-end"
            }, {
              default: ii(() => [
                Ls(Kn(oE), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: ii(() => [
                    Ls(Kn(sE), { icon: Kn(Qo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        xl(ai("h4", tE, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        xl(ai("p", nE, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, iE = window.Vue.renderList, rE = window.Vue.Fragment, Cl = window.Vue.openBlock, dp = window.Vue.createElementBlock, lE = window.Vue.renderSlot, ri = window.Vue.unref, gp = window.Vue.createVNode, pp = window.Vue.withCtx, cE = window.Vue.createBlock, uE = { class: "sx-section-selector__sections-list ma-0 pa-0" }, dE = window.Codex.CdxButton, gE = window.Codex.CdxIcon, Bf = {
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
    return (t, n) => (Cl(), dp("ul", uE, [
      (Cl(!0), dp(rE, null, iE(e.sections, (o) => (Cl(), cE(ri(N), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: pp(() => [
          gp(ri(dE), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: pp(() => [
              lE(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              gp(ri(gE), { icon: ri(fa) }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["aria-label", "onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, pE = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const mE = window.Vue.resolveDirective, li = window.Vue.createElementVNode, bl = window.Vue.withDirectives, At = window.Vue.unref, mp = window.Vue.toDisplayString, Vo = window.Vue.withCtx, kl = window.Vue.openBlock, hp = window.Vue.createBlock;
window.Vue.createCommentVNode;
const As = window.Vue.createVNode, hE = window.Vue.createTextVNode, fE = window.Vue.createElementBlock, wE = { class: "sx-section-selector__missing-sections py-2" }, vE = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, _E = ["lang", "dir", "textContent"], fp = window.Vue.computed, SE = window.Codex.CdxButton, yE = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = Fe(), { targetLanguageURLParameter: n } = T(), o = fp(() => O.getAutonym(n.value)), s = fp(
      () => {
        var a;
        return Object.keys(((a = t.value) == null ? void 0 : a.missingSections) || {}).length === 0;
      }
    );
    return (a, r) => {
      const l = mE("i18n");
      return kl(), fE("section", wE, [
        bl(li("h4", vE, null, 512), [
          [l, [
            o.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        s.value ? (kl(), hp(At(N), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: Vo(() => [
            As(At(k), {
              class: "py-6 justify-center",
              innerHTML: At(pE)
            }, null, 8, ["innerHTML"]),
            As(At(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: Vo(() => [
                bl(li("h6", null, null, 512), [
                  [l, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            As(At(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: Vo(() => [
                bl(li("p", null, null, 512), [
                  [l, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            As(At(k), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: Vo(() => [
                As(At(SE), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: r[1] || (r[1] = (u) => a.$emit("close"))
                }, {
                  default: Vo(() => [
                    hE(mp(a.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (kl(), hp(Bf, {
          key: 0,
          sections: At(t).orderedMissingSections,
          onSelectSection: r[0] || (r[0] = (u) => a.$emit("select-section", u))
        }, {
          default: Vo(({ sourceSection: u }) => {
            var d, i;
            return [
              li("h5", {
                class: "ma-0",
                lang: (d = At(t)) == null ? void 0 : d.sourceLanguage,
                dir: At(O.getDir)((i = At(t)) == null ? void 0 : i.sourceLanguage),
                textContent: mp(u)
              }, null, 8, _E)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const xE = window.Vue.resolveDirective, ci = window.Vue.createElementVNode, CE = window.Vue.withDirectives, Yn = window.Vue.unref, wp = window.Vue.toDisplayString, bE = window.Vue.withCtx, kE = window.Vue.createVNode, $E = window.Vue.openBlock, VE = window.Vue.createElementBlock, EE = { class: "sx-section-selector__present-sections py-2" }, LE = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, AE = { class: "sx-section-selector__present-section-button-content" }, DE = ["lang", "dir", "textContent"], TE = ["lang", "dir", "textContent"], BE = window.Vue.computed, vp = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = Fe(), { targetLanguageURLParameter: n } = T(), o = BE(() => O.getAutonym(n.value));
    return (s, a) => {
      var l;
      const r = xE("i18n");
      return $E(), VE("section", EE, [
        CE(ci("h4", LE, null, 512), [
          [r, [
            o.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        kE(Bf, {
          sections: ((l = Yn(t)) == null ? void 0 : l.orderedPresentSections) || [],
          onSelectSection: a[0] || (a[0] = (u) => s.$emit("select-section", u))
        }, {
          default: bE(({ sourceSection: u, targetSection: d }) => {
            var i, c, g, p;
            return [
              ci("div", AE, [
                ci("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (i = Yn(t)) == null ? void 0 : i.sourceLanguage,
                  dir: Yn(O.getDir)((c = Yn(t)) == null ? void 0 : c.sourceLanguage),
                  textContent: wp(u)
                }, null, 8, DE),
                ci("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (g = Yn(t)) == null ? void 0 : g.targetLanguage,
                  dir: Yn(O.getDir)((p = Yn(t)) == null ? void 0 : p.targetLanguage),
                  textContent: wp(d)
                }, null, 8, TE)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const Ue = window.Vue.createVNode, $l = window.Vue.openBlock, _p = window.Vue.createBlock, Sp = window.Vue.createCommentVNode, PE = window.Vue.resolveDirective, An = window.Vue.createElementVNode, Ds = window.Vue.withDirectives, nt = window.Vue.unref, ln = window.Vue.withCtx, FE = window.Vue.normalizeClass, yp = window.Vue.toDisplayString, xp = window.Vue.createTextVNode, NE = window.Vue.createElementBlock, ME = { class: "sx-section-selector col-12 col-tablet-9 col-desktop-7 mx-auto" }, UE = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, IE = { class: "sx-section-selector__additional-consideration-title" }, RE = { href: "#" }, zE = { class: "sx-section-selector__additional-consideration-title" }, OE = { href: "#" }, Ts = window.Vue.computed, jE = window.Vue.inject, HE = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = jE("breakpoints"), n = Ts(() => t.value.desktopAndUp), { sectionSuggestion: o } = Fe(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      clearTranslationURLParameters: r,
      setSectionURLParam: l
    } = T(), u = Ts(() => O.getAutonym(s.value)), d = Ts(() => O.getAutonym(a.value)), i = Ts(
      () => {
        var y;
        return K.getPageUrl(s.value, (y = o.value) == null ? void 0 : y.sourceTitle);
      }
    ), c = Ts(
      () => {
        var y;
        return K.getPageUrl(a.value, (y = o.value) == null ? void 0 : y.targetTitle);
      }
    ), g = Xe(), p = () => {
      r(), g.push({ name: "dashboard" });
    }, { currentTranslation: m } = It(), h = Zo(), f = vu(), { selectPageSectionByTitle: w } = Zi(), v = (y) => {
      l(y), m.value ? (f(), h()) : (w(y), g.push({ name: "sx-content-comparator" }));
    };
    return (y, S) => {
      const b = PE("i18n");
      return $l(), NE("section", ME, [
        Ue(aE, { onClose: p }),
        Ue(Df),
        Ue(nt(N), {
          class: "ma-0",
          align: "stretch"
        }, {
          default: ln(() => [
            Ue(nt(k), {
              cols: "12",
              desktop: "8",
              class: "ma-0 pa-0"
            }, {
              default: ln(() => [
                Ue(yE, {
                  onSelectSection: v,
                  onClose: p
                }),
                n.value ? Sp("", !0) : ($l(), _p(vp, {
                  key: 0,
                  onSelectSection: v
                })),
                An("section", {
                  class: FE(["py-2", { "sx-section-selector__more-details--desktop": n.value }])
                }, [
                  Ds(An("h4", UE, null, 512), [
                    [b, [
                      d.value
                    ], "cx-sx-section-selector-more-details-title"]
                  ]),
                  Ue(nt(N), {
                    class: "ma-0",
                    align: "start",
                    justify: "start"
                  }, {
                    default: ln(() => [
                      Ue(nt(k), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: ln(() => [
                          Ue(up, {
                            path: i.value,
                            autonym: u.value
                          }, null, 8, ["path", "autonym"])
                        ]),
                        _: 1
                      }),
                      Ue(nt(k), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: ln(() => [
                          Ue(up, {
                            path: c.value,
                            autonym: d.value
                          }, null, 8, ["path", "autonym"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ], 2),
                Ue(nt(N), {
                  class: "sx-section-selector__additional-considerations ma-0",
                  align: "stretch"
                }, {
                  default: ln(() => [
                    Ue(nt(k), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 pt-5 pb-4"
                    }, {
                      default: ln(() => [
                        An("h6", IE, [
                          Ue(nt(Je), {
                            icon: nt(A0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          xp(" " + yp(y.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                        ]),
                        Ds(An("p", null, null, 512), [
                          [b, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                        ]),
                        Ds(An("a", RE, null, 512), [
                          [b, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                        ])
                      ]),
                      _: 1
                    }),
                    Ue(nt(k), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 py-5"
                    }, {
                      default: ln(() => [
                        An("h6", zE, [
                          Ue(nt(Je), {
                            icon: nt(L0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          xp(" " + yp(y.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                        ]),
                        Ds(An("p", null, null, 512), [
                          [b, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                        ]),
                        Ds(An("a", OE, null, 512), [
                          [b, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
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
            n.value ? ($l(), _p(nt(k), {
              key: 0,
              desktop: "4",
              class: "ma-0 pa-0"
            }, {
              default: ln(() => [
                Ue(vp, {
                  class: "sx-section-selector-section-list-present--sidebar fill-height p-0",
                  onSelectSection: v
                })
              ]),
              _: 1
            })) : Sp("", !0)
          ]),
          _: 1
        })
      ]);
    };
  }
}, qE = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: HE
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, GE = window.Vue.resolveComponent, XE = window.Vue.createVNode, WE = window.Vue.normalizeClass, KE = window.Vue.openBlock, YE = window.Vue.createElementBlock;
function QE(e, t, n, o, s, a) {
  const r = GE("sx-section-selector");
  return KE(), YE("main", {
    class: WE(["sx-section-selector-view", a.classes])
  }, [
    XE(r)
  ], 2);
}
const JE = /* @__PURE__ */ ce(qE, [["render", QE]]), ui = window.Vue.computed, ZE = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t
  } = T(), n = ui(
    () => O.getAutonym(e.value)
  ), o = ui(
    () => O.getAutonym(t.value)
  ), { target: s, PUBLISHING_TARGETS: a } = Ut(), r = ui(
    () => s.value === a.EXPAND
  ), l = fe();
  return ui(() => {
    const u = {
      value: "source_section",
      props: {
        label: l.i18n(
          "cx-sx-content-comparator-source-selector-title",
          n.value
        ),
        type: "text",
        class: "px-0 py-4 mx-4"
      }
    };
    let d;
    return r.value ? d = {
      value: "target_section",
      props: {
        label: l.i18n(
          "cx-sx-content-comparator-target-selector-target-section-title",
          o.value
        ),
        type: "text",
        class: "px-0 py-4 mx-4"
      }
    } : d = {
      value: "target_article",
      props: {
        label: l.i18n(
          "cx-sx-content-comparator-target-selector-full-article-title",
          o.value
        ),
        type: "text",
        class: "px-0 py-4 mx-4"
      }
    }, [u, d];
  });
};
const Cp = window.Vue.unref, e3 = window.Vue.createVNode, t3 = window.Vue.openBlock, n3 = window.Vue.createElementBlock, o3 = { class: "sx-content-comparator__content-type-selector" }, s3 = window.Vue.watchEffect, a3 = {
  __name: "ContentTypeSelector",
  props: {
    selection: {
      type: String,
      required: !0
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = (r) => o("update:selection", r), a = ZE();
    return s3(() => {
      a.value.map((l) => l.value).includes(n.selection) || s(a.value[0].value);
    }), (r, l) => (t3(), n3("div", o3, [
      e3(Cp(ua), {
        items: Cp(a),
        active: e.selection,
        onSelect: s
      }, null, 8, ["items", "active"])
    ]));
  }
}, Bs = window.Vue.computed, i3 = window.Vuex.useStore, oe = () => {
  const e = i3(), { currentSourcePage: t, currentTargetPage: n } = ut(), { currentMTProvider: o } = Te(e), { sectionURLParameter: s } = T(), a = Bs(() => {
    var i, c;
    return s.value ? (c = t.value) == null ? void 0 : c.getSectionByTitle(s.value) : (i = t.value) == null ? void 0 : i.leadSection;
  }), r = Bs(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.isTitleSelected;
    }
  ), l = Bs(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.selectedContentTranslationUnit;
    }
  ), u = Bs(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.getProposedTranslationByMtProvider(
        o.value
      );
    }
  ), d = Bs(() => a.value.isLeadSection ? a.value.title : n.value.title);
  return {
    sourceSection: a,
    isSectionTitleSelected: r,
    selectedContentTranslationUnit: l,
    currentProposedTranslation: u,
    targetPageTitleForPublishing: d
  };
}, Ps = window.Vue.computed, Su = () => {
  const { currentTargetPage: e } = ut(), { sectionSuggestion: t } = Fe(), { sectionURLParameter: n } = T(), o = Ps(
    () => t.value.missingSections[n.value] || t.value.presentSections[n.value] || ""
  ), s = Ps(
    () => {
      var d;
      return (((d = a.value) == null ? void 0 : d.title) || "").replace(/ /g, "_");
    }
  ), a = Ps(
    () => {
      var d;
      return (d = e.value) == null ? void 0 : d.getSectionByTitle(o.value);
    }
  ), { sourceSection: r } = oe(), l = Ps(() => {
    var d;
    return (d = r.value) == null ? void 0 : d.html;
  }), u = Ps(() => {
    var d;
    return (d = a.value) == null ? void 0 : d.html;
  });
  return {
    activeSectionTargetTitle: o,
    sourceSectionContent: l,
    targetSectionAnchor: s,
    targetSectionContent: u
  };
};
const di = window.Vue.createVNode, r3 = window.Vue.toDisplayString, l3 = window.Vue.createElementVNode, Dn = window.Vue.unref, gi = window.Vue.withCtx, Vl = window.Vue.openBlock, El = window.Vue.createBlock;
window.Vue.createCommentVNode;
const c3 = window.Vue.normalizeClass, u3 = ["lang", "dir", "textContent"], bp = window.Vue.ref, Ll = window.Vue.computed, d3 = window.Vue.onMounted, g3 = {
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
    const n = e, o = t, s = bp(!1), { sectionSuggestion: a } = Fe(), { sectionURLParameter: r } = T(), l = Ll(
      () => (r.value || "").replace(/ /g, "_")
    ), u = (m) => o("update:contentTypeSelection", m), { activeSectionTargetTitle: d, targetSectionAnchor: i } = Su(), c = Ll(() => {
      switch (n.contentTypeSelection) {
        case "source_section":
          return {
            title: r.value,
            path: `${K.getPageUrl(
              a.value.sourceLanguage,
              a.value.sourceTitle
            )}#${l.value}`,
            lang: a.value.sourceLanguage,
            dir: O.getDir(a.value.sourceLanguage)
          };
        case "target_article":
          return {
            title: a.value.targetTitle,
            path: g.value,
            lang: a.value.targetLanguage,
            dir: O.getDir(a.value.targetLanguage)
          };
        default:
          return {
            title: d.value,
            path: `${g.value}#${i.value}`
          };
      }
    }), g = Ll(
      () => K.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), p = bp(null);
    return d3(() => {
      new IntersectionObserver(
        ([h]) => {
          s.value = h.intersectionRect.height < h.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(p.value.$el);
    }), (m, h) => (Vl(), El(Dn(N), {
      ref_key: "contentHeader",
      ref: p,
      class: c3(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
      direction: "column",
      align: "stretch",
      reverse: s.value
    }, {
      default: gi(() => [
        di(a3, {
          selection: e.contentTypeSelection,
          "onUpdate:selection": u
        }, null, 8, ["selection"]),
        di(Dn(N), {
          justify: "between",
          class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
        }, {
          default: gi(() => [
            di(Dn(k), null, {
              default: gi(() => [
                l3("h3", {
                  lang: c.value.lang,
                  dir: c.value.dir,
                  class: "ma-0 pa-0",
                  textContent: r3(c.value.title)
                }, null, 8, u3)
              ]),
              _: 1
            }),
            di(Dn(k), { shrink: "" }, {
              default: gi(() => [
                s.value ? (Vl(), El(Dn(qe), {
                  key: 0,
                  icon: Dn(Ii),
                  progressive: "",
                  label: m.$i18n(
                    "cx-sx-content-comparator-content-header-translate-button-label"
                  ),
                  onClick: h[0] || (h[0] = (f) => m.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label"])) : (Vl(), El(Dn(qe), {
                  key: 1,
                  class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                  icon: Dn(ih),
                  type: "icon",
                  href: c.value.path,
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
}, pi = window.Vue.unref, kp = window.Vue.createVNode, p3 = window.Vue.openBlock, m3 = window.Vue.createElementBlock, h3 = { class: "sx-content-comparator__header-navigation flex items-center" }, f3 = window.Vue.computed, w3 = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = T(), o = f3(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = Zi(), a = () => {
      const l = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[l];
      s(u);
    }, r = () => {
      const l = (o.value + 1) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[l];
      s(u);
    };
    return (l, u) => (p3(), m3("div", h3, [
      kp(pi(qe), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: pi(k0),
        onClick: a
      }, null, 8, ["icon"]),
      kp(pi(qe), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: pi(b0),
        onClick: r
      }, null, 8, ["icon"])
    ]));
  }
};
const $p = window.Vue.toDisplayString, be = window.Vue.unref, v3 = window.Vue.resolveDirective, Al = window.Vue.withDirectives, Eo = window.Vue.openBlock, mi = window.Vue.createElementBlock, _3 = window.Vue.createCommentVNode, S3 = window.Vue.createTextVNode, Vp = window.Vue.createElementVNode, y3 = window.Vue.normalizeClass, Dl = window.Vue.withCtx, Tl = window.Vue.createVNode, Ep = window.Vue.createBlock, x3 = { class: "sx-content-comparator-header__mapped-section" }, C3 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, b3 = { key: 0 }, k3 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, $3 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, V3 = window.Vue.computed, E3 = {
  __name: "SXContentComparatorHeaderMappedSection",
  setup(e) {
    const { targetLanguageURLParameter: t } = T(), { activeSectionTargetTitle: n } = Su(), o = fe(), { target: s, PUBLISHING_TARGETS: a, setTarget: r } = Ut(), l = V3(
      () => o.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        O.getAutonym(t.value)
      )
    );
    return (u, d) => {
      const i = v3("i18n");
      return Eo(), mi("div", x3, [
        Tl(be(N), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: Dl(() => [
            Tl(be(k), { grow: "" }, {
              default: Dl(() => [
                Vp("h6", C3, [
                  S3($p(l.value) + " ", 1),
                  be(s) === be(a).NEW_SECTION ? Al((Eo(), mi("span", b3, null, 512)), [
                    [i, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : _3("", !0)
                ]),
                Vp("h6", {
                  class: y3(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": be(s) === be(a).NEW_SECTION
                  }])
                }, $p(be(n)), 3)
              ]),
              _: 1
            }),
            Tl(be(k), { shrink: "" }, {
              default: Dl(() => [
                be(s) === be(a).EXPAND ? (Eo(), Ep(be(qe), {
                  key: 0,
                  class: "sx-content-comparator-header__mapped-section__discard-button pa-0",
                  icon: be(ah),
                  type: "icon",
                  onClick: d[0] || (d[0] = (c) => be(r)(be(a).NEW_SECTION))
                }, null, 8, ["icon"])) : (Eo(), Ep(be(qe), {
                  key: 1,
                  class: "sx-content-comparator-header__mapped-section__undo-button pa-0",
                  icon: be(B0),
                  type: "icon",
                  onClick: d[1] || (d[1] = (c) => be(r)(be(a).EXPAND))
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        be(s) === be(a).EXPAND ? Al((Eo(), mi("p", k3, null, 512)), [
          [i, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ]) : Al((Eo(), mi("p", $3, null, 512)), [
          [i, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ])
      ]);
    };
  }
};
const Ae = window.Vue.unref, Lo = window.Vue.createVNode, Lp = window.Vue.toDisplayString, fn = window.Vue.createElementVNode, Bl = window.Vue.withCtx, L3 = window.Vue.resolveDirective, Ap = window.Vue.withDirectives, Pl = window.Vue.openBlock, Dp = window.Vue.createBlock, Tp = window.Vue.createCommentVNode, A3 = window.Vue.createElementBlock, D3 = { class: "sx-content-comparator__header pa-4" }, T3 = { class: "row my-1 py-2 mx-0 gap-6" }, B3 = { class: "sx-content-comparator-header__titles-nav flex grow justify-between" }, P3 = { class: "sx-content-comparator-header__titles shrink" }, F3 = ["lang", "dir"], N3 = ["lang", "dir"], M3 = { class: "py-2 mb-1" }, U3 = /* @__PURE__ */ fn("br", null, null, -1), Fl = window.Vue.computed, I3 = {
  __name: "SXContentComparatorHeader",
  emits: ["close", "translation-button-clicked"],
  setup(e) {
    const { sectionURLParameter: t } = T(), { sourceSection: n } = oe(), { sectionSuggestion: o, isCurrentSectionPresent: s } = Fe(), a = Fl(
      () => {
        var u;
        return (u = o.value) == null ? void 0 : u.missingSections.hasOwnProperty(t.value);
      }
    ), r = Fl(() => {
      var u;
      return (u = n.value) == null ? void 0 : u.html;
    }), l = Fl(() => [
      ...Object.keys(o.value.missingSections),
      ...Object.keys(o.value.presentSections)
    ]);
    return (u, d) => {
      const i = L3("i18n");
      return Pl(), A3("div", D3, [
        Lo(Ae(qe), {
          class: "py-2 pa-0",
          icon: Ae($0),
          label: u.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: d[0] || (d[0] = (c) => u.$emit("close"))
        }, null, 8, ["icon", "label"]),
        fn("div", T3, [
          fn("div", B3, [
            fn("div", P3, [
              fn("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: Ae(o).sourceLanguage,
                dir: Ae(O.getDir)(Ae(o).sourceLanguage)
              }, Lp(Ae(o).sourceTitle), 9, F3),
              fn("h2", {
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: Ae(o).sourceLanguage,
                dir: Ae(O.getDir)(Ae(o).sourceLanguage)
              }, Lp(Ae(t)), 9, N3)
            ]),
            Lo(w3, { "section-source-titles": l.value }, null, 8, ["section-source-titles"])
          ]),
          fn("div", M3, [
            Lo(Ae(qe), {
              class: "sx-content-comparator-header__translation-button",
              icon: Ae(Ii),
              progressive: "",
              label: u.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !r.value,
              onClick: d[1] || (d[1] = (c) => u.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ])
        ]),
        a.value ? (Pl(), Dp(Ae(N), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: Bl(() => [
            Lo(Ae(k), {
              shrink: "",
              class: "pe-2"
            }, {
              default: Bl(() => [
                Lo(Ae(Je), { icon: Ae(D0) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Lo(Ae(k), { class: "ma-0" }, {
              default: Bl(() => [
                Ap(fn("strong", null, null, 512), [
                  [i, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                U3,
                Ap(fn("span", null, null, 512), [
                  [i, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Tp("", !0),
        Ae(s) ? (Pl(), Dp(E3, { key: 1 })) : Tp("", !0)
      ]);
    };
  }
};
const Bp = window.Vue.toDisplayString, R3 = window.Vue.createElementVNode, Pp = window.Vue.openBlock, Fp = window.Vue.createElementBlock, z3 = window.Vue.createCommentVNode, O3 = { class: "sx-content-comparator__new-section-placeholder mt-4 py-4 px-7" }, j3 = ["textContent"], H3 = ["textContent"], Pf = {
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
    return (t, n) => (Pp(), Fp("section", O3, [
      R3("h5", {
        textContent: Bp(e.placeholderTitle)
      }, null, 8, j3),
      e.placeholderSubtitle ? (Pp(), Fp("p", {
        key: 0,
        textContent: Bp(e.placeholderSubtitle)
      }, null, 8, H3)) : z3("", !0)
    ]));
  }
}, q3 = window.Vue.computed, G3 = window.Vue.createApp, X3 = window.Vuex.useStore, W3 = () => {
  const e = X3(), { sectionSuggestion: t } = Fe(), { currentTargetPage: n } = ut(), o = fe(), s = () => G3(
    Pf,
    {
      placeholderTitle: o.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    }
  ).mount(document.createElement("div")).$el, a = (l) => e.getters["suggestions/getFirstAppendixTitleBySectionSuggestion"](
    l
  ), r = (l) => {
    const u = l.getElementsByTagName("base");
    Array.from(u).forEach(
      (d) => d.parentNode.removeChild(d)
    );
  };
  return q3(() => {
    var i;
    const l = document.createElement("div");
    l.innerHTML = (i = n.value) == null ? void 0 : i.content, r(l);
    const u = s(), d = a(
      t.value
    );
    if (d) {
      const c = Array.from(
        l.querySelectorAll("h2")
      ).filter((g) => g.textContent.match(d));
      if (c && c.length) {
        const g = c[0].parentNode;
        g.parentNode.insertBefore(
          u,
          g
        );
      }
    } else
      l.appendChild(u);
    return l.innerHTML;
  });
};
const Nl = window.Vue.createVNode, ot = window.Vue.unref, Ao = window.Vue.openBlock, Np = window.Vue.createBlock, Mp = window.Vue.createCommentVNode, hi = window.Vue.createElementVNode, Ml = window.Vue.Fragment, fi = window.Vue.createElementBlock, K3 = { class: "sx-content-comparator col-12 col-tablet-9 col-desktop-7 mx-auto" }, Y3 = { class: "sx-content-comparator__source-content" }, Q3 = ["lang", "dir", "innerHTML"], J3 = ["lang", "dir", "innerHTML"], Z3 = ["innerHTML"], e5 = window.Vue.ref, t5 = window.Vue.computed, Up = window.Vue.watch, n5 = {
  __name: "SXContentComparator",
  setup(e) {
    const { resetPublishTarget: t } = Ut(), n = Xe(), o = e5("source_section"), { logDashboardTranslationStartEvent: s } = Ji(), a = Zo(), r = () => n.push({ name: "sx-section-selector" }), l = () => {
      s(), a();
    }, {
      sourceLanguageURLParameter: u,
      targetLanguageURLParameter: d
    } = T(), { sourceSectionContent: i, targetSectionContent: c } = Su(), g = W3(), { sectionSuggestion: p, isCurrentSectionPresent: m } = Fe(), h = t5(() => p.value.targetTitle), f = Af();
    return Up(
      h,
      () => f(
        d.value,
        u.value,
        h.value
      ),
      { immediate: !0 }
    ), Up(m, t, { immediate: !0 }), (w, v) => (Ao(), fi("section", K3, [
      Nl(I3, {
        onTranslationButtonClicked: l,
        onClose: r
      }),
      Nl(g3, {
        "content-type-selection": o.value,
        "onUpdate:contentTypeSelection": v[0] || (v[0] = (y) => o.value = y),
        onTranslationButtonClicked: l
      }, null, 8, ["content-type-selection"]),
      hi("section", Y3, [
        o.value === "source_section" ? (Ao(), fi(Ml, { key: 0 }, [
          ot(i) ? Mp("", !0) : (Ao(), Np(ot(lt), { key: 0 })),
          hi("section", {
            lang: ot(u),
            dir: ot(O.getDir)(ot(u)),
            class: "pt-2 px-4",
            innerHTML: ot(i)
          }, null, 8, Q3)
        ], 64)) : o.value === "target_article" ? (Ao(), fi(Ml, { key: 1 }, [
          ot(g) ? Mp("", !0) : (Ao(), Np(ot(lt), { key: 0 })),
          hi("article", {
            lang: ot(d),
            dir: ot(O.getDir)(ot(d)),
            class: "px-4",
            innerHTML: ot(g)
          }, null, 8, J3)
        ], 64)) : (Ao(), fi(Ml, { key: 2 }, [
          hi("section", {
            class: "pa-4",
            innerHTML: ot(c)
          }, null, 8, Z3),
          Nl(Pf, {
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
}, o5 = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: n5
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, s5 = window.Vue.resolveComponent, a5 = window.Vue.createVNode, i5 = window.Vue.normalizeClass, r5 = window.Vue.openBlock, l5 = window.Vue.createElementBlock;
function c5(e, t, n, o, s, a) {
  const r = s5("sx-content-comparator");
  return r5(), l5("main", {
    class: i5(["sx-content-comparator-view", a.classes])
  }, [
    a5(r)
  ], 2);
}
const u5 = /* @__PURE__ */ ce(o5, [["render", c5]]);
const d5 = window.Vue.resolveDirective, Fs = window.Vue.createElementVNode, Ip = window.Vue.withDirectives, wi = window.Vue.unref, Ul = window.Vue.createVNode, Rp = window.Vue.toDisplayString, zp = window.Vue.createTextVNode, Ns = window.Vue.withCtx, g5 = window.Vue.openBlock, p5 = window.Vue.createBlock, m5 = { class: "mw-ui-dialog__header px-4 py-3" }, h5 = { class: "mw-ui-dialog__header-title" }, f5 = { class: "pa-4" }, w5 = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, Op = window.Codex.CdxButton, v5 = {
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
    return (r, l) => {
      const u = d5("i18n");
      return g5(), p5(wi(St), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: Ns(() => [
          Fs("div", m5, [
            Ip(Fs("span", h5, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: Ns(() => [
          Fs("div", w5, [
            Ul(wi(Op), {
              weight: "quiet",
              onClick: s
            }, {
              default: Ns(() => [
                zp(Rp(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            Ul(wi(Op), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: Ns(() => [
                zp(Rp(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: Ns(() => [
          Ul(wi(Ui)),
          Fs("div", f5, [
            Ip(Fs("span", null, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, _5 = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => so(a)
  );
  return s && gh(s) ? _t.parseTemplateWikitext(
    uh(s),
    n,
    t
  ) : Promise.resolve(null);
}, Ff = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => so(a)
  );
  return s ? _t.parseTemplateWikitext(
    uh(s),
    n,
    t
  ) : Promise.resolve(null);
}, S5 = window.Vuex.useStore, yu = () => {
  const e = S5(), { sourceSection: t } = oe(), { getCurrentTitleByLanguage: n } = Sn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = T(), a = Tf(), r = (i, c, g) => {
    if (i === 0) {
      t.value.proposedTitleTranslations[c] = g;
      return;
    }
    const p = t.value.getContentTranslationUnitById(i);
    p instanceof rt ? p.blockTemplateProposedTranslations[c] = g : p instanceof Mn && p.addProposedTranslation(c, g);
  }, l = (i, c) => C(void 0, null, function* () {
    if (!e.getters["mediawiki/isValidProviderForTranslation"](o.value, s.value, i))
      return "";
    try {
      const p = yield a();
      return yield _t.fetchSegmentTranslation(
        o.value,
        s.value,
        i,
        c,
        p
      );
    } catch (p) {
      return mw.log.error("Error while translating segment", p), "";
    }
  }), u = (i, c) => C(void 0, null, function* () {
    if (t.value.hasProposedTranslationByTranslationUnitId(
      i,
      c
    ))
      return;
    let g = t.value.getOriginalContentByTranslationUnitId(i);
    const p = t.value.getContentTranslationUnitById(i);
    let m;
    if (e.commit("application/addMtRequestsPending", i), m = yield l(c, g), !m) {
      e.commit("application/removeMtRequestsPending", i);
      return;
    }
    p instanceof rt && (p.setBlockTemplateAdaptationInfoByHtml(
      c,
      m
    ), m = (yield _5(
      m,
      n(s.value, o.value),
      s.value
    )) || ""), r(
      i,
      c,
      m
    ), e.commit("application/removeMtRequestsPending", i);
  });
  return {
    translateTranslationUnitById: u,
    translateSelectedTranslationUnitForAllProviders: () => {
      const i = e.getters["mediawiki/getSupportedMTProviders"](
        o.value,
        s.value
      ), { selectedTranslationUnitId: c } = t.value;
      i.forEach(
        (g) => u(c, g)
      );
    }
  };
}, y5 = window.Vuex.useStore, x5 = () => {
  const { sourceSection: e } = oe(), t = y5(), { translateTranslationUnitById: n } = yu();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
function C5(e) {
  const t = document.createElement("div");
  return t.innerHTML = e, t.querySelectorAll("a").forEach((o) => {
    o.setAttribute("target", "_blank");
  }), t.innerHTML;
}
const b5 = window.Vue.resolveDirective, it = window.Vue.createElementVNode, vi = window.Vue.withDirectives, ze = window.Vue.unref, Il = window.Vue.createVNode, cn = window.Vue.withCtx, k5 = window.Vue.renderList, $5 = window.Vue.Fragment, _i = window.Vue.openBlock, V5 = window.Vue.createElementBlock, E5 = window.Vue.toDisplayString, Rl = window.Vue.createBlock, jp = window.Vue.createCommentVNode, L5 = { class: "mw-ui-dialog__header pa-4" }, A5 = { class: "row ma-0 py-2" }, D5 = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, T5 = { class: "mb-0" }, B5 = { class: "col shrink justify-center" }, P5 = { class: "pb-2 mb-0" }, F5 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, N5 = ["dir", "lang", "innerHTML"], M5 = ["textContent"], U5 = ["innerHTML"], I5 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, R5 = /* @__PURE__ */ it("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), z5 = ["innerHTML"], zl = window.Vue.computed, O5 = window.Vuex.useStore, j5 = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = ne.EMPTY_TEXT_PROVIDER_KEY, s = ne.ORIGINAL_TEXT_PROVIDER_KEY, a = O5(), {
      sourceSection: r,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: u
    } = oe(), {
      sourceLanguageURLParameter: d,
      targetLanguageURLParameter: i
    } = T(), c = zl(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        d.value,
        i.value
      )
    ), g = zl(() => {
      const S = [s, o];
      return c.value.filter(
        (b) => !S.includes(b)
      );
    }), p = zl(
      () => l.value ? r.value.proposedTitleTranslations : u.value.proposedTranslations
    ), m = x5(), h = (S) => {
      m(S), w();
    }, f = ne.getMTProviderLabel, w = () => n("update:active", !1), v = fe(), y = C5(
      v.i18n("cx-tools-mt-noservices")
    );
    return (S, b) => {
      const E = b5("i18n");
      return e.active ? (_i(), Rl(ze(St), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: cn(() => [
          it("div", L5, [
            it("div", A5, [
              it("div", D5, [
                vi(it("h4", T5, null, 512), [
                  [E, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              it("div", B5, [
                Il(ze(qe), {
                  type: "icon",
                  icon: ze(Ri),
                  class: "pa-0",
                  onClick: w
                }, null, 8, ["icon"])
              ])
            ]),
            vi(it("h6", P5, null, 512), [
              [E, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: cn(() => [
          Il(ze(Qe), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: b[0] || (b[0] = (x) => h(ze(s)))
          }, {
            header: cn(() => [
              vi(it("h5", F5, null, 512), [
                [E, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: cn(() => [
              it("p", {
                dir: ze(O.getDir)(ze(d)),
                lang: ze(d),
                innerHTML: p.value[ze(s)]
              }, null, 8, N5)
            ]),
            _: 1
          }),
          (_i(!0), V5($5, null, k5(g.value, (x) => (_i(), Rl(ze(Qe), {
            key: x,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (R) => h(x)
          }, {
            header: cn(() => [
              it("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: E5(ze(f)(x))
              }, null, 8, M5)
            ]),
            default: cn(() => [
              it("p", {
                innerHTML: p.value[x]
              }, null, 8, U5)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          Il(ze(Qe), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: b[1] || (b[1] = (x) => h(ze(o)))
          }, {
            header: cn(() => [
              vi(it("h5", I5, null, 512), [
                [E, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: cn(() => [
              R5
            ]),
            _: 1
          }),
          g.value.length ? jp("", !0) : (_i(), Rl(ze(Qe), {
            key: 0,
            class: "sx-sentence-selector__mt-disabled-info-card mx-4 pa-5"
          }, {
            header: cn(() => [
              it("h5", {
                class: "sx-sentence-selector__translation-info-card-title",
                innerHTML: ze(y)
              }, null, 8, z5)
            ]),
            _: 1
          }))
        ]),
        _: 1
      })) : jp("", !0);
    };
  }
}, H5 = window.Vuex.useStore, es = () => {
  const { sourceSection: e } = oe(), t = H5(), { translateTranslationUnitById: n } = yu(), { currentMTProvider: o } = Te(t), s = (l) => C(void 0, null, function* () {
    e.value.selectTranslationUnitById(l), yield n(l, o.value);
    const { followingTranslationUnit: u } = e.value;
    u && (yield n(
      u.id,
      o
    ));
  });
  return {
    selectNextTranslationUnit: () => {
      const { followingTranslationUnit: l } = e.value;
      return l ? s(l.id) : Promise.resolve();
    },
    selectPreviousTranslationUnit: () => {
      const { selectedContentTranslationUnitIndex: l, contentTranslationUnits: u } = e.value, d = l - 1;
      let i = 0;
      return d > -1 && (i = u[d].id), s(i);
    },
    selectTranslationUnitById: s
  };
};
const Hp = window.Vue.toDisplayString, Ol = window.Vue.createElementVNode, jl = window.Vue.unref, q5 = window.Vue.createVNode, G5 = window.Vue.normalizeClass, X5 = window.Vue.withCtx, W5 = window.Vue.openBlock, K5 = window.Vue.createBlock, Y5 = ["href"], Q5 = ["textContent"], J5 = ["textContent"], Do = window.Vue.computed, qp = "sx-sentence-selector__section-title", Z5 = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = oe(), { currentSourcePage: o } = ut(), { sourceLanguageURLParameter: s } = T(), a = Do(() => {
      var p;
      return (p = o.value) == null ? void 0 : p.title;
    }), r = Do(
      () => {
        var p;
        return ((p = t.value) == null ? void 0 : p.title) || a.value;
      }
    ), l = Do(
      () => K.getPageUrl(s.value, a.value)
    ), u = Do(
      () => {
        var p;
        return !!((p = t.value) != null && p.translatedTitle);
      }
    ), d = Do(
      () => u.value ? "translated" : "selected"
    ), i = Do(() => {
      const p = [qp];
      return n.value && p.push(`${qp}--${d.value}`), p;
    }), { selectTranslationUnitById: c } = es(), g = () => c(0);
    return (p, m) => (W5(), K5(jl(k), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: X5(() => [
        Ol("a", {
          href: l.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          Ol("strong", {
            textContent: Hp(a.value)
          }, null, 8, Q5),
          q5(jl(Je), {
            icon: jl(ih),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, Y5),
        Ol("h2", {
          class: G5(["pa-0 ma-0", i.value]),
          onClick: g,
          textContent: Hp(r.value)
        }, null, 10, J5)
      ]),
      _: 1
    }));
  }
};
const qt = window.Vue.unref, Ms = window.Vue.createVNode, Si = window.Vue.withCtx, Gp = window.Vue.toDisplayString, Xp = window.Vue.createTextVNode, eL = window.Vue.openBlock, tL = window.Vue.createBlock, nL = window.Vue.computed, Hl = window.Codex.CdxButton, Wp = window.Codex.CdxIcon, Nf = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = oe(), s = nL(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, r) => (eL(), tL(qt(N), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: Si(() => [
        Ms(qt(Hl), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: qt(n),
          onClick: r[0] || (r[0] = (l) => a.$emit("select-previous-segment"))
        }, {
          default: Si(() => [
            Ms(qt(Wp), {
              class: "me-1",
              icon: qt(lu)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        Ms(qt(Hl), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !qt(o),
          onClick: r[1] || (r[1] = (l) => a.$emit("apply-translation"))
        }, {
          default: Si(() => [
            Xp(Gp(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        Ms(qt(Hl), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: r[2] || (r[2] = (l) => a.$emit("skip-translation"))
        }, {
          default: Si(() => [
            Xp(Gp(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            Ms(qt(Wp), {
              class: "ms-1",
              size: "small",
              icon: qt(fa)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const Qn = window.Vue.unref, oL = window.Vue.toDisplayString, Us = window.Vue.createVNode, yi = window.Vue.withCtx, sL = window.Vue.openBlock, aL = window.Vue.createBlock, ql = window.Vue.computed, iL = window.Vuex.useStore, rL = window.Codex.CdxButton, lL = window.Codex.CdxIcon, cL = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = iL(), n = ql(() => t.state.application.currentMTProvider), o = fe(), s = ql(() => ({
      [ne.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [ne.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = ql(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        ne.getMTProviderLabel(n.value)
      )
    );
    return (r, l) => (sL(), aL(Qn(k), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: yi(() => [
        Us(Qn(N), { class: "ma-0 ps-5 pb-4" }, {
          default: yi(() => [
            Us(Qn(k), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: oL(a.value)
            }, null, 8, ["textContent"]),
            Us(Qn(k), {
              shrink: "",
              class: "pe-5"
            }, {
              default: yi(() => [
                Us(Qn(rL), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: l[0] || (l[0] = (u) => r.$emit("configure-options"))
                }, {
                  default: yi(() => [
                    Us(Qn(lL), {
                      class: "pa-0",
                      icon: Qn(ru)
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
const Dt = window.Vue.unref, Tn = window.Vue.createVNode, uL = window.Vue.resolveDirective, Kp = window.Vue.createElementVNode, dL = window.Vue.withDirectives, Yp = window.Vue.toDisplayString, Qp = window.Vue.createTextVNode, Is = window.Vue.withCtx, gL = window.Vue.openBlock, pL = window.Vue.createElementBlock, mL = { class: "mt-retry-body pb-5" }, hL = { class: "retry-body__message" }, Jp = window.Codex.CdxButton, Gl = window.Codex.CdxIcon, fL = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = uL("i18n");
      return gL(), pL("div", mL, [
        Kp("div", hL, [
          Tn(Dt(Gl), {
            class: "me-2",
            icon: Dt(zS)
          }, null, 8, ["icon"]),
          dL(Kp("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        Tn(Dt(N), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: Is(() => [
            Tn(Dt(k), { cols: "6" }, {
              default: Is(() => [
                Tn(Dt(Jp), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: Is(() => [
                    Tn(Dt(Gl), {
                      class: "me-1",
                      icon: Dt(Uh)
                    }, null, 8, ["icon"]),
                    Qp(" " + Yp(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Tn(Dt(k), { cols: "6" }, {
              default: Is(() => [
                Tn(Dt(Jp), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: Is(() => [
                    Tn(Dt(Gl), {
                      class: "me-1",
                      icon: Dt(ZS)
                    }, null, 8, ["icon"]),
                    Qp(" " + Yp(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const To = window.Vue.createVNode, st = window.Vue.unref, Rs = window.Vue.openBlock, wL = window.Vue.createElementBlock, vL = window.Vue.createCommentVNode, xi = window.Vue.createBlock, _L = window.Vue.normalizeClass, SL = window.Vue.normalizeStyle, zs = window.Vue.withCtx, yL = window.Vue.toDisplayString, xL = window.Vue.createTextVNode, CL = window.Vue.normalizeProps, bL = window.Vue.guardReactiveProps, kL = ["lang", "dir", "innerHTML"], Xl = window.Vue.ref, $L = window.Vue.onMounted, VL = window.Vue.onBeforeUnmount, Wl = window.Vue.computed, EL = window.Vue.nextTick, LL = window.Vuex.useStore, AL = window.Codex.CdxButton, DL = window.Codex.CdxIcon, TL = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = Xl(0), n = Xl(null), o = Xl(null), s = LL(), { currentMTProvider: a } = Te(s), { targetLanguageURLParameter: r } = T(), { sourceSection: l, currentProposedTranslation: u } = oe(), d = Wl(
      () => {
        var m, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (m = l.value) == null ? void 0 : m.selectedTranslationUnitId
        );
      }
    ), i = Wl(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), c = Wl(
      () => !!u.value || a.value === ne.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    $L(() => C(this, null, function* () {
      yield EL(), g(), p.observe(n.value.$el), p.observe(o.value.$el);
    })), VL(() => {
      p.unobserve(n.value.$el), p.unobserve(o.value.$el);
    });
    const p = new ResizeObserver(() => g());
    return (m, h) => (Rs(), xi(st(Qe), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: zs(() => [
        To(st(N), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: zs(() => [
            To(cL, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => m.$emit("configure-options"))
            }, null, 512),
            To(st(k), {
              class: _L(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !c.value && d.value
              }]),
              style: SL(c.value ? i.value : null)
            }, {
              default: zs(() => [
                c.value ? (Rs(), wL("section", {
                  key: 0,
                  lang: st(r),
                  dir: st(O.getDir)(st(r)),
                  innerHTML: st(u)
                }, null, 8, kL)) : d.value ? (Rs(), xi(st(lt), { key: 1 })) : (Rs(), xi(fL, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (f) => m.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (f) => m.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            To(st(k), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: zs(() => [
                c.value || d.value ? (Rs(), xi(st(AL), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !c.value,
                  onClick: h[3] || (h[3] = (f) => m.$emit("edit-translation", st(u)))
                }, {
                  default: zs(() => [
                    To(st(DL), {
                      class: "me-1",
                      icon: st(iu)
                    }, null, 8, ["icon"]),
                    xL(" " + yL(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : vL("", !0),
                To(Nf, CL(bL(m.$attrs)), null, 16)
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
}, BL = window.Vue.computed, PL = (e) => BL(() => {
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
    const l = a.isTranslated ? "translated" : "untranslated";
    s.classList.add(`${t}--${l}`), s.innerHTML = a.content;
  }), n.innerHTML;
});
const FL = window.Vue.unref, NL = window.Vue.normalizeClass, ML = window.Vue.openBlock, UL = window.Vue.createElementBlock, IL = ["innerHTML"], RL = window.Vue.onMounted, zL = window.Vue.ref, OL = window.Vue.computed, jL = {
  __name: "SubSection",
  props: {
    subSection: {
      type: rt,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = zL(null), a = PL(n.subSection);
    RL(() => {
      s.value.addEventListener("click", (d) => {
        let i;
        if (n.subSection.isBlockTemplate)
          i = n.subSection;
        else {
          const c = d.composedPath().find(
            (g) => g instanceof Element && g.classList.contains("cx-segment")
          );
          if (!c)
            return;
          i = n.subSection.getSentenceById(
            c.dataset.segmentid
          );
        }
        l(i);
      });
    });
    const { selectTranslationUnitById: r } = es(), l = (d) => {
      if (d.selected) {
        o("bounce-translation");
        return;
      }
      r(d.id);
    }, u = OL(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (d, i) => (ML(), UL("div", {
      ref_key: "subSectionRoot",
      ref: s,
      class: NL(["sx-sentence-selector__subsection", u.value]),
      innerHTML: FL(a)
    }, null, 10, IL));
  }
};
const Zp = window.Vue.unref, em = window.Vue.createVNode, tm = window.Vue.normalizeStyle, HL = window.Vue.openBlock, qL = window.Vue.createElementBlock, nm = window.Vue.computed, Mf = {
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
    const t = e, n = nm(() => ({ "--size": t.size })), o = nm(
      () => !t.isTemplateAdapted || t.percentage === 0 ? P0 : Ec
    );
    return (s, a) => (HL(), qL("div", {
      class: "block-template-status-indicator",
      style: tm(n.value)
    }, [
      em(Zp(Q1), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      em(Zp(Je), {
        icon: o.value,
        size: e.size / 2,
        style: tm({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
};
const Bn = window.Vue.unref, Ci = window.Vue.createVNode, Kl = window.Vue.withCtx, GL = window.Vue.openBlock, XL = window.Vue.createBlock, WL = window.Vue.computed, om = window.Codex.CdxButton, sm = window.Codex.CdxIcon, Uf = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "select-next-segment"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = oe(), o = WL(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (GL(), XL(Bn(N), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: Kl(() => [
        Ci(Bn(om), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: Bn(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => s.$emit("select-previous-segment"))
        }, {
          default: Kl(() => [
            Ci(Bn(sm), { icon: Bn(lu) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        Ci(Bn(om), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => s.$emit("select-next-segment"))
        }, {
          default: Kl(() => [
            Ci(Bn(sm), { icon: Bn(fa) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
}, Os = window.Vue.openBlock, bi = window.Vue.createBlock;
window.Vue.createCommentVNode;
const un = window.Vue.unref, Bo = window.Vue.withCtx, js = window.Vue.createVNode, Yl = window.Vue.toDisplayString, Ql = window.Vue.createElementVNode, KL = window.Vue.renderList, YL = window.Vue.Fragment, QL = window.Vue.createElementBlock, JL = { class: "pa-4" }, ZL = ["textContent"], eA = ["textContent"], tA = window.Vuex.useStore, ki = window.Vue.computed, nA = {
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
    const t = e, { targetLanguageAutonym: n } = Te(tA()), o = ki(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), s = fe(), a = ki(() => {
      let u;
      return t.targetTemplateExists ? t.isTemplateAdapted ? o.value < 100 ? u = "cx-sx-block-template-mapping-status-title-partially-template" : u = "cx-sx-block-template-mapping-status-title-fully-template" : u = "cx-sx-block-template-mapping-status-title-unadapted-template" : u = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(u);
    }), r = ki(() => {
      let u;
      return !t.targetTemplateExists || !t.isTemplateAdapted ? u = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? u = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : u = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(u);
    }), l = ki(() => {
      let u = [];
      if (!t.targetTemplateExists)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            n.value
          ),
          icon: N0,
          color: wt.gray500
        });
      else if (!t.isTemplateAdapted)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            t.sourceParamsCount
          ),
          icon: Ri,
          color: wt.gray500
        });
      else if (o.value < 100)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            t.targetParamsCount,
            t.sourceParamsCount
          ),
          icon: Ec,
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
          icon: Ec,
          color: wt.blue600
        });
      }
      return t.mandatoryMissingParamsCount ? u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          t.mandatoryMissingParamsCount,
          n.value
        ),
        icon: Ii,
        color: wt.gray500
      }) : t.targetTemplateExists && t.isTemplateAdapted && t.optionalMissingParamsCount && u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          t.optionalMissingParamsCount,
          n.value
        ),
        icon: _0,
        color: wt.gray500
      }), u;
    });
    return (u, d) => (Os(), bi(un(St), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: u.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: d[0] || (d[0] = (i) => u.$emit("update:active", i))
    }, {
      header: Bo(() => [
        js(un(N), {
          justify: "center",
          class: "mt-4"
        }, {
          default: Bo(() => [
            js(un(k), { shrink: "" }, {
              default: Bo(() => [
                e.targetTemplateExists ? (Os(), bi(Mf, {
                  key: 0,
                  percentage: o.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (Os(), bi(un(Je), {
                  key: 1,
                  icon: un(S0)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: Bo(() => [
        Ql("div", JL, [
          Ql("h3", {
            textContent: Yl(a.value)
          }, null, 8, ZL),
          Ql("p", {
            class: "mt-6 text-small",
            textContent: Yl(r.value)
          }, null, 8, eA),
          (Os(!0), QL(YL, null, KL(l.value, (i, c) => (Os(), bi(un(N), {
            key: c,
            align: "start",
            class: "mt-4"
          }, {
            default: Bo(() => [
              js(un(k), { shrink: "" }, {
                default: Bo(() => [
                  js(un(Je), {
                    class: "me-2",
                    icon: i.icon,
                    "icon-color": i.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              js(un(k), {
                textContent: Yl(i.text)
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
const De = window.Vue.unref, Oe = window.Vue.createVNode, Gt = window.Vue.withCtx, Jl = window.Vue.toDisplayString, am = window.Vue.createTextVNode, oA = window.Vue.resolveDirective, im = window.Vue.withDirectives, rm = window.Vue.createElementVNode, sA = window.Vue.normalizeClass, Po = window.Vue.openBlock, lm = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const $i = window.Vue.createBlock, cm = window.Vue.normalizeProps;
window.Vue.guardReactiveProps;
const um = window.Vue.mergeProps, aA = { class: "block-template-adaptation-card__container pa-4" }, iA = ["textContent"], rA = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, je = window.Vue.computed, lA = window.Vue.ref, cA = window.Vuex.useStore, dm = window.Codex.CdxButton, gm = window.Codex.CdxIcon, uA = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = cA(), { targetLanguageAutonym: n, currentMTProvider: o } = Te(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = oe(), r = je(() => {
      var L;
      return (L = s.value) == null ? void 0 : L.isTranslated;
    }), l = je(() => {
      var B;
      return ((B = s.value) == null ? void 0 : B.blockTemplateTranslatedContent) || a.value;
    }), u = je(
      () => {
        var L;
        return (L = s.value) == null ? void 0 : L.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), d = je(
      () => {
        var L;
        return !((L = t.state.application.mtRequestsPending) != null && L.includes(
          s.value.id
        ));
      }
    ), i = fe(), c = je(
      // Strip HTML comments and return
      () => {
        var L, B;
        return ((B = (L = s.value) == null ? void 0 : L.sourceBlockTemplateName) == null ? void 0 : B.replace(
          /<\!--.*?-->/g,
          ""
        )) || i.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), g = je(
      () => {
        var L, B;
        return (B = (L = s.value) == null ? void 0 : L.blockTemplateAdaptationInfo) == null ? void 0 : B[o.value];
      }
    ), p = je(
      () => {
        var L, B;
        return ((L = g.value) == null ? void 0 : L.adapted) || !!((B = g.value) != null && B.partial);
      }
    ), m = je(() => g.value ? "block-template-adaptation-card__body--" + (p.value ? "success" : "warning") : null), h = je(() => g.value ? p.value ? i.i18n("sx-block-template-adaptation-card-edit-button-label") : i.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), f = je(
      () => {
        var L;
        return Object.keys(((L = s.value) == null ? void 0 : L.sourceTemplateParams) || {}).length;
      }
    ), w = je(() => {
      var B;
      const L = (B = s.value) == null ? void 0 : B.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(L || {});
    }), v = je(() => w.value.length), y = je(() => {
      const L = x.value;
      return f.value + L === 0 ? 100 : v.value / (f.value + L) * 100 || 0;
    }), S = lA(!1), b = () => {
      S.value = !0;
    }, E = (L) => L.filter((B) => !w.value.includes(B)), x = je(() => {
      var B;
      const L = ((B = g.value) == null ? void 0 : B.mandatoryTargetParams) || [];
      return E(L).length;
    }), R = je(() => {
      var B;
      const L = ((B = g.value) == null ? void 0 : B.optionalTargetParams) || [];
      return E(L).length;
    });
    return (L, B) => {
      const j = oA("i18n");
      return Po(), $i(De(Qe), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: Gt(() => [
          rm("div", aA, [
            Oe(De(N), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: Gt(() => [
                Oe(De(k), { shrink: "" }, {
                  default: Gt(() => [
                    Oe(De(gm), {
                      icon: De(ey),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                Oe(De(k), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: Gt(() => [
                    am(Jl(c.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            u.value ? (Po(), lm("div", {
              key: 0,
              class: sA(["pa-4 mb-4", m.value])
            }, [
              Oe(De(N), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: Gt(() => [
                  im(Oe(De(k), { tag: "h5" }, null, 512), [
                    [j, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  Oe(De(k), { shrink: "" }, {
                    default: Gt(() => [
                      Oe(Mf, {
                        percentage: y.value,
                        size: 20,
                        "is-template-adapted": p.value,
                        "stroke-width": 2,
                        onClick: b
                      }, null, 8, ["percentage", "is-template-adapted"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              rm("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: Jl(u.value)
              }, null, 8, iA),
              Oe(De(dm), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: B[0] || (B[0] = (G) => L.$emit("edit-translation", l.value))
              }, {
                default: Gt(() => [
                  am(Jl(h.value), 1)
                ]),
                _: 1
              })
            ], 2)) : d.value ? (Po(), lm("div", rA, [
              Oe(De(N), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: Gt(() => [
                  im(Oe(De(k), { tag: "h5" }, null, 512), [
                    [j, [
                      De(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  Oe(De(k), { shrink: "" }, {
                    default: Gt(() => [
                      Oe(De(dm), {
                        weight: "quiet",
                        "aria-label": L.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: Gt(() => [
                          Oe(De(gm), {
                            icon: De(YS),
                            onClick: b
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
            ])) : (Po(), $i(De(lt), { key: 2 }))
          ]),
          r.value ? (Po(), $i(Uf, cm(um({ key: 1 }, L.$attrs)), null, 16)) : (Po(), $i(Nf, cm(um({ key: 0 }, L.$attrs)), null, 16)),
          Oe(nA, {
            active: S.value,
            "onUpdate:active": B[1] || (B[1] = (G) => S.value = G),
            "source-params-count": f.value,
            "target-params-count": v.value,
            "mandatory-missing-params-count": x.value,
            "optional-missing-params-count": R.value,
            "is-template-adapted": p.value,
            "target-template-exists": !!u.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const dA = window.Vue.unref, gA = window.Vue.createVNode, pA = window.Vue.openBlock, mA = window.Vue.createElementBlock, hA = { class: "translated-segment-card-header" }, fA = window.Vue.computed, wA = {
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
    const n = t, { isSectionTitleSelected: o } = oe(), s = fe(), a = fA(() => [
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
    ]), r = (l) => n("update:selection", l);
    return (l, u) => (pA(), mA("div", hA, [
      gA(dA(ua), {
        items: a.value,
        active: e.selection,
        onSelect: r
      }, null, 8, ["items", "active"])
    ]));
  }
};
const vA = window.Vue.useCssVars, Ie = window.Vue.createVNode, pm = window.Vue.resolveDirective, _A = window.Vue.createElementVNode, Zl = window.Vue.withDirectives, Se = window.Vue.unref, SA = window.Vue.normalizeStyle, Vi = window.Vue.openBlock, mm = window.Vue.createElementBlock, yA = window.Vue.createCommentVNode, xA = window.Vue.normalizeClass, ht = window.Vue.withCtx, CA = window.Vue.toDisplayString, bA = window.Vue.createTextVNode, hm = window.Vue.createBlock, kA = window.Vue.normalizeProps, $A = window.Vue.guardReactiveProps, dn = window.Vue.computed, VA = window.Vue.ref, EA = window.Vue.inject, LA = window.Vuex.useStore, AA = window.Codex.CdxButton, ec = window.Codex.CdxIcon, DA = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    vA((v) => ({
      "4929555c": w.value
    }));
    const t = VA("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = oe(), { targetLanguage: a } = Te(LA()), r = dn(() => t.value === "sentence"), l = dn(
      () => n.value.subSections.find(
        (v) => v.sentences.some(
          (y) => {
            var S;
            return y.id === ((S = o.value) == null ? void 0 : S.id);
          }
        )
      )
    ), u = dn(() => {
      var v;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : r.value ? (v = o.value) == null ? void 0 : v.mtProposedTranslationUsed : l.value.proposedContentForMTValidation;
    }), d = EA("colors"), i = d.gray200, c = d.red600, g = dn(() => s.value ? n.value.translatedTitle : r.value ? o.value.translatedContent : l.value.translatedContent), p = dn(
      () => Qt.calculateScore(
        g.value,
        u.value,
        a.value
      )
    ), m = dn(
      () => Qt.getScoreStatus(p.value)
    ), h = dn(
      () => `translated-segment-card__modification-stats__percentage--${m.value}`
    ), f = dn(() => ({
      failure: p.value === 0 ? null : d.yellow700,
      warning: d.yellow700,
      success: d.green600
    })), w = dn(
      () => f.value[m.value]
    );
    return (v, y) => {
      const S = pm("i18n"), b = pm("i18n-html");
      return Vi(), hm(Se(Qe), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: ht(() => [
          Ie(Se(N), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: ht(() => [
              Ie(wA, {
                selection: t.value,
                "onUpdate:selection": y[0] || (y[0] = (E) => t.value = E)
              }, null, 8, ["selection"]),
              Ie(Se(k), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: ht(() => [
                  Ie(Se(N), { class: "ma-0" }, {
                    default: ht(() => [
                      Ie(Se(k), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: ht(() => [
                          Zl(_A("h5", null, null, 512), [
                            [S, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          p.value === 0 ? Zl((Vi(), mm("p", {
                            key: 0,
                            style: SA({ color: Se(c) })
                          }, null, 4)), [
                            [S, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : Zl((Vi(), mm("p", {
                            key: 1,
                            class: xA(h.value)
                          }, null, 2)), [
                            [b, [
                              p.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      Ie(Se(k), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: ht(() => [
                          Ie(Se(N), { class: "ma-0 ms-2" }, {
                            default: ht(() => [
                              Ie(Se(k), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: ht(() => [
                                  Ie(Se(ec), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: Se(oy)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              Ie(Se(k), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: ht(() => [
                                  Ie(Se(lh), {
                                    value: p.value,
                                    height: "4px",
                                    width: "64px",
                                    color: w.value,
                                    background: Se(i)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              Ie(Se(k), { shrink: "" }, {
                                default: ht(() => [
                                  Ie(Se(ec), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: Se(ty)
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
                  r.value ? (Vi(), hm(Se(AA), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: y[1] || (y[1] = (E) => v.$emit("edit-translation", g.value))
                  }, {
                    default: ht(() => [
                      Ie(Se(ec), {
                        class: "me-1",
                        icon: Se(iu)
                      }, null, 8, ["icon"]),
                      bA(" " + CA(v.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : yA("", !0)
                ]),
                _: 1
              }),
              Ie(Se(k), { class: "translated-segment-card__actions" }, {
                default: ht(() => [
                  Ie(Uf, kA($A(v.$attrs)), null, 16)
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
  } = oe(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = es(), { currentTranslation: s } = It();
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
}, If = window.Vuex.useStore, BA = () => {
  const e = If(), {
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
    o ? s = yield Gi.fetchSupportedMTProviders(
      t.value,
      n.value
    ) : s = new ne(
      t.value,
      n.value,
      []
      // Empty providers array - only "original" and "empty" will be added by constructor
    ), e.commit("mediawiki/addMtProviderGroup", s);
  });
}, PA = () => {
  const e = If(), { currentMTProvider: t } = Te(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = T(), s = BA();
  return () => C(void 0, null, function* () {
    yield s();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, o.value);
    if (!t.value || !a.includes(t.value)) {
      const r = ne.getStorageKey(
        n.value,
        o.value
      );
      let l = mw.storage.get(r);
      (!l || !a.includes(l)) && (l = a[0]), e.commit("application/setCurrentMTProvider", l);
    }
  });
}, FA = window.Vue.computed, NA = (e) => {
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
}, MA = () => {
  const { selectedContentTranslationUnit: e } = oe(), t = FA(
    () => e.value instanceof rt
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && NA(o);
  };
}, UA = (e, t) => {
  const { content: n, origin: o, baseSectionId: s, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const r = t.filter(
    (l) => !ne.isUserMTProvider(l)
  );
  if (o !== "source" && o !== "user" && !r.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, IA = window.Vue.computed, Rf = () => {
  const { currentTranslation: e } = It(), { currentSourcePage: t } = ut();
  return IA(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, RA = window.Vuex.useStore, xu = () => {
  const e = RA(), { sourceSection: t, targetPageTitleForPublishing: n } = oe(), {
    pageURLParameter: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = T(), r = Rf(), { target: l, PUBLISHING_TARGETS: u } = Ut();
  return () => {
    const d = n.value, i = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), c = `${r.value}_${t.value.id}`, g = t.value.getParallelCorporaUnits(c);
    g.forEach(
      (m) => UA(m, i)
    );
    const p = t.value.getTranslationProgress(a);
    return _t.saveTranslation({
      sourceTitle: o.value,
      targetTitle: d,
      // pass a dummy string to be stored as "cxsx_source_section_title" inside "cx_section_translations" table for lead sections
      sourceSectionTitle: t.value.sourceSectionTitleForPublishing,
      // pass a dummy string to be stored as "cxsx_target_section_title" inside "cx_section_translations" table for lead sections
      targetSectionTitle: t.value.targetSectionTitleForPublishing,
      sourceLanguage: s.value,
      targetLanguage: a.value,
      revision: r.value,
      units: g.map((m) => m.payload),
      // section id to be stored as "cxsx_section_id" inside "cx_section_translations"
      sectionId: c,
      isSandbox: l === u.SANDBOX,
      progress: p
    });
  };
}, zA = window.Vue.effectScope, OA = window.Vue.onScopeDispose, jA = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = zA(!0), n = o.run(() => e(...a))), OA(s), n);
}, HA = window.Vuex.useStore;
let tc;
const qA = () => {
  const e = HA(), t = xu();
  let n = 1e3, o = 0;
  return tc = mu(() => t().then((a) => {
    a instanceof ro ? (n *= o + 1, o++, setTimeout(tc, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof Go)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), tc;
}, zf = jA(qA), GA = window.Vuex.useStore, XA = () => {
  const e = GA(), t = zf(), { currentMTProvider: n } = Te(e), { sourceSection: o, currentProposedTranslation: s } = oe(), { selectNextTranslationUnit: a } = es();
  return () => C(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, WA = window.Vuex.useStore, KA = () => {
  const e = WA(), t = zf();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, YA = window.Vuex.useStore, QA = window.Vue.computed, Of = () => {
  const e = YA();
  Xe();
  const { currentTranslation: t } = It(), { currentMTProvider: n, previousRoute: o } = Te(e), { currentTargetPage: s } = ut(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    sectionURLParameter: u
  } = T(), d = yt(), i = QA(() => {
    var y;
    const v = {
      translation_source_language: a.value,
      translation_target_language: r.value,
      // DOCUMENTATION (https://github.com/wikimedia/schemas-event-secondary/blob/master/jsonschema/analytics/mediawiki/content_translation_event/1.4.0.yaml#L294)
      // translation_source_title:
      //   The title of the source article of the current translation. Applies only
      //   to events which relate to a specific translation or suggestion: all
      //   `editor_` and `publish_` events and some `dashboard_` events (e.g.
      //   `dashboard_start_translation`, `dashboard_delete_translation`)
      translation_source_title: l.value
      // DOCUMENTATION (https://github.com/wikimedia/schemas-event-secondary/blob/master/jsonschema/analytics/mediawiki/content_translation_event/1.4.0.yaml#L301)
      // translation_target_exists:
      //   Whether the target article or section already exists. Applies only to
      //   events which relate to a specific translation or suggestion: all `editor_`
      //   and `publish_` events and some `dashboard_` events (e.g. `dashboard_start_translation`,
      //   `dashboard_delete_translation`). In section translation, if the user discards the mapping
      //   to an existing target section, the value should change to false in future events.
      // translation_target_exists: !!currentTargetPage.value,
    };
    if (u.value ? (v.translation_source_section = u.value, v.translation_type = "section") : v.translation_type = "article", t.value) {
      v.translation_id = t.value.translationId, v.translation_target_title = t.value.targetTitle;
      const S = t.value.targetSectionTitle;
      S && (v.translation_target_section = S);
    } else
      s.value && (v.translation_target_title = (y = s.value) == null ? void 0 : y.title);
    return n.value && (v.translation_provider = ne.getProviderForInstrumentation(n.value)), v;
  }), c = (v) => {
    if (!v.translation_source_title) {
      const y = new URL(window.location).searchParams;
      mw.errorLogger.logError(
        new Error(
          `Event ${v.event_type} is missing translation_source_title. Current URL params: ${JSON.stringify(
            Array.from(y.entries())
          )}`
        ),
        "error.contenttranslation"
      );
    }
  };
  return {
    logEditorOpenEvent: () => {
      const v = de({
        event_type: "editor_open"
      }, i.value);
      return c(v), d(v);
    },
    logEditorCloseEvent: () => {
      const v = de({
        event_type: "editor_close"
      }, i.value);
      return c(v), d(v);
    },
    logEditorCloseWarnEvent: () => d(de({
      event_type: "editor_close_warn"
    }, i.value)),
    logEditorSegmentAddEvent: () => d(de({
      event_type: "editor_segment_add"
    }, i.value)),
    logEditorSegmentSkipEvent: () => d(de({
      event_type: "editor_segment_skip"
    }, i.value)),
    logEditorSegmentEditEvent: () => d(de({
      event_type: "editor_segment_edit"
    }, i.value))
  };
}, JA = (e, t, n, o) => C(void 0, null, function* () {
  var l, u, d;
  const s = ((l = t.user) == null ? void 0 : l.content) || ((u = t.mt) == null ? void 0 : u.content), a = (d = t == null ? void 0 : t.mt) == null ? void 0 : d.engine, r = yield Ff(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = r, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = r;
}), ZA = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, r;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const l = (r = t.mt) == null ? void 0 : r.engine;
      o.addProposedTranslation(l, n.mt.innerHTML), o.mtProviderUsed = l;
    }
  });
}, eD = (e, t, n, o) => C(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return JA(e, t, n, o);
  ZA(e, t);
}), tD = (e, t, n, o) => {
  const s = [];
  for (const a of e.sections || [])
    if (o.filter(
      (l) => l.pageSectionId === parseInt(a.id)
    ).length)
      for (const l of a.subSections) {
        const u = o.find(
          (i) => i.subSectionId === l.id
        );
        if (!u)
          continue;
        const d = eD(
          l,
          u,
          t || e.title,
          n
        );
        s.push(d);
      }
  return Promise.all(s);
}, nD = { restoreCorporaDraft: tD }, oD = () => {
  const { currentSourcePage: e } = ut(), { sourceSection: t } = oe();
  return (n) => C(void 0, null, function* () {
    if (n.restored)
      return;
    const o = yield _t.fetchTranslationUnits(
      n.translationId
    );
    yield nD.restoreCorporaDraft(
      e.value,
      n.targetTitle,
      n.targetLanguage,
      o
    ), n.restored = !0;
    let s;
    n.isLeadSectionTranslation ? (t.value.originalTitle = n.sourceTitle, s = n.targetTitle) : s = n.targetSectionTitle, t.value.translatedTitle = s;
  });
};
let nc = null;
function sD() {
  const e = mw.config.get(
    "wgContentTranslationPublishRequirements"
  ), t = mw.config.get("wgUserGroups") || [];
  if (!e || !e.userGroups)
    return !0;
  const n = e.userGroups;
  return n.includes("*") ? !0 : n.some((o) => t.includes(o));
}
function jf() {
  return nc === null && (nc = sD()), nc;
}
const aD = window.Vue.ref, oc = aD(!1);
function iD() {
  return {
    isDismissed: oc,
    dismiss: () => {
      oc.value = !0;
    },
    reset: () => {
      oc.value = !1;
    }
  };
}
const ge = window.Vue.unref, ft = window.Vue.createVNode, Xt = window.Vue.withCtx, rD = window.Vue.resolveDirective, Fo = window.Vue.createElementVNode, lD = window.Vue.withDirectives, sc = window.Vue.toDisplayString, cD = window.Vue.createTextVNode, gn = window.Vue.openBlock, Jn = window.Vue.createBlock, uD = window.Vue.createCommentVNode, dD = window.Vue.renderList, gD = window.Vue.Fragment, fm = window.Vue.createElementBlock, pD = window.Vue.normalizeClass, mD = window.Vue.normalizeStyle, hD = { class: "sx-sentence-selector__header-title mb-0" }, fD = {
  href: "https://www.mediawiki.org/wiki/Help:Content_translation/Publishing",
  target: "_blank"
}, wD = { class: "sx-sentence-selector__section-contents px-4" }, Zn = window.Vue.computed, vD = window.Vue.nextTick, _D = window.Vue.onMounted, Hs = window.Vue.ref, wm = window.Vue.watch, SD = window.Vuex.useStore, vm = window.Codex.CdxButton, yD = window.Codex.CdxIcon, xD = window.Codex.CdxMessage, CD = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = Hs(!1), n = Hs(!1), o = Hs("100%"), s = SD(), { currentMTProvider: a, previousRoute: r } = Te(s), {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: u,
      pageURLParameter: d,
      sectionURLParameter: i
    } = T(), { resetPublishTarget: c, target: g } = Ut(), p = uu();
    g.value || p(
      l.value,
      u.value,
      d.value
    ).then(() => c());
    const { sourceSection: m, selectedContentTranslationUnit: h } = oe(), f = Hs({
      pageContent: !1,
      pageMetadata: !1,
      draftRestored: !1,
      mtProviders: !1
    }), w = Zn(
      () => Object.values(f.value).every(Boolean)
    ), v = Zn(
      () => {
        var re;
        return (re = m.value) == null ? void 0 : re.isSelectedTranslationUnitTranslated;
      }
    ), y = Zn(() => {
      var re;
      return (re = m.value) == null ? void 0 : re.subSections;
    }), S = Zn(
      () => {
        var re;
        return (re = m.value) == null ? void 0 : re.selectedTranslationUnitOriginalContent;
      }
    ), b = Zn(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: E,
      logEditorCloseEvent: x,
      logEditorCloseWarnEvent: R,
      logEditorSegmentAddEvent: L,
      logEditorSegmentSkipEvent: B
    } = Of(), j = () => {
      var Pe;
      const re = D.currentRoute.value.meta.workflowStep, V = D.getRoutes().find(
        (xt) => xt.name === r.value
      ), M = ((Pe = V == null ? void 0 : V.meta) == null ? void 0 : Pe.workflowStep) || 0;
      return re > M;
    }, G = TA();
    PA()().then(() => {
      j() && E(), f.value.mtProviders = !0;
    });
    const we = MA(), { fetchTranslationsByStatus: q, translationsFetched: se } = Jo(), ae = oD(), { currentTranslation: te } = It(), { selectPageSectionByTitle: Ne, selectPageSectionByIndex: We } = Zi(), Be = _u(), J = Ko();
    _D(() => C(this, null, function* () {
      if (!se.value.draft) {
        const re = [
          // required to get current draft translation (if exists)
          q("draft"),
          // required to get target page title for template adaptation (useTranslationUnitTranslate)
          Be(l.value, d.value),
          // user has just been redirected here from another wiki, and page metadata have not yet been fetched
          J(l.value, [d.value])
        ];
        yield Promise.all(re);
      }
      f.value.pageMetadata = !0, i.value ? yield Ne(i.value) : yield We(0), f.value.pageContent = !0, te.value && (yield ae(te.value)), f.value.draftRestored = !0, wm(
        w,
        () => C(this, null, function* () {
          w.value && (yield vD(), G(), we());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    })), wm(h, we);
    const { selectNextTranslationUnit: I, selectPreviousTranslationUnit: P } = es(), U = () => (B(), I()), Z = XA(), _ = () => {
      L(), Z();
    }, A = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, D = Xe(), F = () => {
      const { autoSavePending: re } = s.state.application;
      if (re) {
        os.value = !0, R();
        return;
      }
      H();
    }, X = KA(), { clearTranslationURLParameters: ue } = T(), H = () => C(this, null, function* () {
      q("draft"), te.value && (m.value.reset(), te.value.restored = !1), x(), ue(), X(), yield D.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: z,
      translateSelectedTranslationUnitForAllProviders: ie
    } = yu(), Ze = () => {
      ns.value || (t.value = !0, ie());
    }, { getCurrentTitleByLanguage: ke } = Sn(), go = (re) => {
      D.push({
        name: "sx-editor",
        state: {
          content: re,
          originalContent: S.value,
          title: ke(
            u.value,
            l.value
          ),
          isInitialEdit: !v.value || null
        }
      });
    }, va = () => D.push({ name: "sx-publisher" }), ts = () => C(this, null, function* () {
      h.value ? yield z(
        h.value.id,
        a.value
      ) : yield z(0, a.value);
    }), ns = Zn(
      () => h.value instanceof rt
    ), os = Hs(!1), {
      isDismissed: er,
      dismiss: tr,
      reset: nr
    } = iD();
    j() && nr();
    const po = Zn(
      () => !jf() && !er.value
    );
    return (re, yn) => {
      const V = rD("i18n");
      return gn(), fm("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: mD(b.value)
      }, [
        ft(ge(N), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: Xt(() => [
            ft(ge(k), { shrink: "" }, {
              default: Xt(() => [
                ft(ge(vm), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": re.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: F
                }, {
                  default: Xt(() => [
                    ft(ge(yD), { icon: ge(Ph) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            ft(ge(k), {
              grow: "",
              class: "px-1"
            }, {
              default: Xt(() => [
                lD(Fo("h4", hD, null, 512), [
                  [V, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            ft(ge(k), {
              shrink: "",
              class: "px-3"
            }, {
              default: Xt(() => [
                ft(ge(vm), {
                  disabled: !(ge(m) && ge(m).isTranslated),
                  onClick: va
                }, {
                  default: Xt(() => [
                    cD(sc(re.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        w.value ? (gn(), Jn(ge(N), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: Xt(() => [
            ft(ge(k), {
              dir: ge(O.getDir)(ge(l)),
              lang: ge(l),
              class: "sx-sentence-selector__section"
            }, {
              default: Xt(() => [
                po.value ? (gn(), Jn(ge(xD), {
                  key: 0,
                  type: "warning",
                  "allow-user-dismiss": !0,
                  class: "mx-4 mt-4",
                  onUserDismissed: ge(tr)
                }, {
                  default: Xt(() => [
                    Fo("p", null, sc(re.$i18n("cx-publish-permission-warning")), 1),
                    Fo("p", null, [
                      Fo("strong", null, [
                        Fo("a", fD, sc(re.$i18n("cx-publish-permission-warning-link-label")), 1)
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : uD("", !0),
                ft(Z5),
                Fo("div", wD, [
                  (gn(!0), fm(gD, null, dD(y.value, (M) => (gn(), Jn(jL, {
                    id: M.id,
                    key: `sub-section-${M.id}`,
                    "sub-section": M,
                    onBounceTranslation: A
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !ns.value && v.value ? (gn(), Jn(DA, {
              key: 0,
              onEditTranslation: go,
              onSelectNextSegment: ge(I),
              onSelectPreviousSegment: ge(P)
            }, null, 8, ["onSelectNextSegment", "onSelectPreviousSegment"])) : ns.value ? (gn(), Jn(uA, {
              key: 2,
              onEditTranslation: go,
              onApplyTranslation: _,
              onSkipTranslation: U,
              onSelectPreviousSegment: ge(P),
              onSelectNextSegment: ge(I)
            }, null, 8, ["onSelectPreviousSegment", "onSelectNextSegment"])) : (gn(), Jn(TL, {
              key: 1,
              class: pD({ "mb-0": !n.value }),
              onConfigureOptions: Ze,
              onEditTranslation: go,
              onApplyTranslation: _,
              onSkipTranslation: U,
              onSelectPreviousSegment: ge(P),
              onRetryTranslation: ts
            }, null, 8, ["class", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (gn(), Jn(ge(N), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: Xt(() => [
            ft(ge(lt), { class: "mt-0" })
          ]),
          _: 1
        })),
        ft(j5, {
          active: t.value,
          "onUpdate:active": yn[0] || (yn[0] = (M) => t.value = M)
        }, null, 8, ["active"]),
        ft(v5, {
          modelValue: os.value,
          "onUpdate:modelValue": yn[1] || (yn[1] = (M) => os.value = M),
          onDiscardTranslation: H
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const bD = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: CD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, kD = window.Vue.resolveComponent, $D = window.Vue.createVNode, VD = window.Vue.normalizeClass, ED = window.Vue.openBlock, LD = window.Vue.createElementBlock;
function AD(e, t, n, o, s, a) {
  const r = kD("sx-sentence-selector");
  return ED(), LD("main", {
    class: VD(["sx-sentence-selector-view", a.classes])
  }, [
    $D(r)
  ], 2);
}
const DD = /* @__PURE__ */ ce(bD, [["render", AD]]), TD = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, BD = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const PD = window.Vue.resolveDirective, Ei = window.Vue.withDirectives, Tt = window.Vue.openBlock, pn = window.Vue.createElementBlock, Li = window.Vue.createCommentVNode, Ai = window.Vue.Transition, eo = window.Vue.withCtx, No = window.Vue.createVNode, qs = window.Vue.createElementVNode, Pn = window.Vue.unref, FD = window.Vue.renderList, ND = window.Vue.Fragment, MD = window.Vue.normalizeClass, _m = window.Vue.createBlock, UD = window.Vue.toDisplayString, ID = window.Vue.createTextVNode, RD = { class: "sx-quick-tutorial" }, zD = { class: "sx-quick-tutorial__main-point my-4 py-5 px-6" }, OD = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, jD = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, HD = { class: "sx-quick-tutorial__illustration" }, qD = ["innerHTML"], GD = ["innerHTML"], XD = { class: "sx-quick-tutorial__step-indicator py-3" }, WD = ["onClick"], KD = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, YD = {
  key: "secondary-point-1",
  class: "ma-0"
}, QD = {
  key: "secondary-point-2",
  class: "ma-0"
}, JD = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, Sm = window.Vue.ref, ym = window.Codex.CdxButton, ZD = window.Codex.CdxIcon, eT = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = Sm(2), n = Sm(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (r) => r === n.value, a = Zo();
    return (r, l) => {
      const u = PD("i18n");
      return Tt(), pn("section", RD, [
        No(Pn(N), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: eo(() => [
            qs("section", zD, [
              No(Ai, {
                name: "fade",
                mode: "out-in"
              }, {
                default: eo(() => [
                  s(1) ? Ei((Tt(), pn("h2", OD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? Ei((Tt(), pn("h2", jD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : Li("", !0)
                ]),
                _: 1
              })
            ]),
            qs("section", HD, [
              No(Ai, { name: "mw-ui-animation-slide-start" }, {
                default: eo(() => [
                  s(1) ? (Tt(), pn("div", {
                    key: "illustration-1",
                    innerHTML: Pn(BD)
                  }, null, 8, qD)) : s(2) ? (Tt(), pn("div", {
                    key: "illustration-2",
                    innerHTML: Pn(TD)
                  }, null, 8, GD)) : Li("", !0)
                ]),
                _: 1
              })
            ]),
            qs("div", XD, [
              (Tt(!0), pn(ND, null, FD(t.value, (d) => (Tt(), pn("span", {
                key: `dot-${d}`,
                class: MD(["dot mx-1", { "dot-active": s(d) }]),
                role: "button",
                onClick: (i) => n.value = d
              }, null, 10, WD))), 128))
            ]),
            qs("section", KD, [
              No(Ai, {
                name: "fade",
                mode: "out-in"
              }, {
                default: eo(() => [
                  s(1) ? Ei((Tt(), pn("h3", YD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? Ei((Tt(), pn("h3", QD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : Li("", !0)
                ]),
                _: 1
              })
            ]),
            qs("div", JD, [
              No(Ai, {
                name: "fade",
                mode: "out-in"
              }, {
                default: eo(() => [
                  s(1) ? (Tt(), _m(Pn(ym), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": r.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: eo(() => [
                      No(Pn(ZD), { icon: Pn(fa) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (Tt(), _m(Pn(ym), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: Pn(a)
                  }, {
                    default: eo(() => [
                      ID(UD(r.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : Li("", !0)
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
const tT = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: eT
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, nT = window.Vue.resolveComponent, oT = window.Vue.createVNode, sT = window.Vue.normalizeClass, aT = window.Vue.openBlock, iT = window.Vue.createElementBlock;
function rT(e, t, n, o, s, a) {
  const r = nT("sx-quick-tutorial");
  return aT(), iT("main", {
    class: sT(["sx-quick-tutorial-view", a.classes])
  }, [
    oT(r)
  ], 2);
}
const lT = /* @__PURE__ */ ce(tT, [["render", rT]]);
const cT = window.Vue.resolveDirective, xm = window.Vue.createElementVNode, uT = window.Vue.withDirectives, dT = window.Vue.unref, gT = window.Vue.withCtx, pT = window.Vue.createVNode, mT = window.Vue.openBlock, hT = window.Vue.createElementBlock, fT = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, wT = { class: "sx-editor__original-content-panel__header mb-2" }, vT = ["lang", "dir", "innerHTML"], Cm = window.Vue.ref, _T = window.Vue.onMounted, ST = {
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
    const t = e, n = (r, l) => {
      const u = r.getElementsByTagName("a");
      for (const d of u)
        d.href = K.getPageUrl(l, d.title), d.target = "_blank";
    }, o = Cm(null), s = Cm(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(o.value, null).getPropertyValue("line-height")
    );
    return _T(() => {
      s.value = 2 * a(), n(o.value, t.language);
    }), (r, l) => {
      const u = cT("i18n");
      return mT(), hT("section", fT, [
        uT(xm("h5", wT, null, 512), [
          [u, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        pT(dT(j1), {
          "min-height": s.value,
          scroll: ""
        }, {
          default: gT(() => [
            xm("div", {
              ref_key: "originalContentRef",
              ref: o,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, vT)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, yT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const xT = window.Vue.unref, Gs = window.Vue.createElementVNode, bm = window.Vue.resolveDirective, ac = window.Vue.withDirectives, CT = window.Vue.normalizeClass, bT = window.Vue.openBlock, kT = window.Vue.createElementBlock, $T = window.Vue.createCommentVNode, VT = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, ET = { class: "sx-editor__feedback-overlay-content px-4" }, LT = ["innerHTML"], AT = { class: "sx-editor__feedback-overlay-content__title" }, DT = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, ic = window.Vue.computed, TT = {
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
    const t = e, { targetLanguageURLParameter: n } = T(), o = ic(
      () => Qt.calculateScore(
        t.editedTranslation,
        t.proposedTranslation,
        n.value
      )
    ), s = ic(() => {
      const r = Qt.getScoreStatus(o.value);
      return r === "failure" ? o.value === 0 ? "failure" : "warning" : r;
    }), a = ic(
      () => `sx-editor__feedback-overlay-content__stats--${s.value}`
    );
    return (r, l) => {
      const u = bm("i18n"), d = bm("i18n-html");
      return e.showFeedback ? (bT(), kT("div", VT, [
        Gs("div", ET, [
          Gs("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: xT(yT)
          }, null, 8, LT),
          ac(Gs("h2", AT, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          ac(Gs("p", DT, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          ac(Gs("p", {
            class: CT(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [d, [o.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : $T("", !0);
    };
  }
}, BT = window.Vuex.useStore, PT = () => {
  const e = BT(), t = xu(), { selectNextTranslationUnit: n } = es(), {
    isSectionTitleSelected: o,
    sourceSection: s,
    selectedContentTranslationUnit: a
  } = oe(), { getCurrentTitleByLanguage: r } = Sn(), {
    sourceLanguageURLParameter: l,
    targetLanguageURLParameter: u
  } = T(), { currentMTProvider: d } = Te(e);
  return (i) => C(void 0, null, function* () {
    if (!o.value) {
      const c = document.createElement("div");
      c.innerHTML = i, c.querySelectorAll(".sx-edit-dummy-node").forEach((g) => g.remove()), i = c.innerHTML;
    }
    a.value instanceof rt && (i = (yield Ff(
      i,
      r(u.value, l.value),
      u.value
    )) || i), s.value.setTranslationForSelectedTranslationUnit(
      i,
      d.value
    ), t(), n();
  });
};
const Ke = window.Vue.unref, rc = window.Vue.openBlock, lc = window.Vue.createBlock, km = window.Vue.createCommentVNode, $m = window.Vue.createVNode, FT = window.Vue.createElementVNode, NT = window.Vue.withCtx, MT = { class: "sx-editor__editing-surface-container grow" }, cc = window.Vue.ref, UT = window.Vue.computed, IT = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = cc(!1), o = Xe(), s = () => n.value = !0, a = () => o.replace({ name: t.fromRoute }), { isFinalEdit: r, isInitialEdit: l, content: u, originalContent: d, title: i } = history.state, c = cc(null), g = cc(!1), { logEditorSegmentAddEvent: p, logEditorSegmentEditEvent: m } = Of(), {
      sourceLanguageURLParameter: h,
      targetLanguageURLParameter: f
    } = T(), { isSectionTitleSelected: w, sourceSection: v } = oe(), y = UT(
      () => Qt.calculateScore(
        c.value,
        u,
        f.value
      )
    ), S = PT(), b = (E) => C(this, null, function* () {
      c.value = E, g.value = !0;
      const x = new Promise((L) => setTimeout(L, 2e3));
      let R = Promise.resolve();
      r ? v.value.editedTranslation = E : R = S(E), y.value === 0 && l ? p() : y.value > 0 && m(), yield Promise.all([x, R]), g.value = !1, a();
    });
    return (E, x) => (rc(), lc(Ke(N), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: NT(() => [
        Ke(d) ? (rc(), lc(ST, {
          key: 0,
          language: Ke(h),
          dir: Ke(O.getDir)(Ke(h)),
          "original-content": Ke(d)
        }, null, 8, ["language", "dir", "original-content"])) : km("", !0),
        n.value ? km("", !0) : (rc(), lc(Ke(lt), { key: 1 })),
        FT("div", MT, [
          $m(TT, {
            "edited-translation": c.value,
            "show-feedback": g.value,
            "proposed-translation": Ke(u)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          $m(hV, {
            content: Ke(u),
            language: Ke(f),
            dir: Ke(O.getDir)(Ke(f)),
            title: Ke(i),
            "use-text": !!Ke(w),
            onReady: s,
            onClose: a,
            onEditCompleted: b
          }, null, 8, ["content", "language", "dir", "title", "use-text"])
        ])
      ]),
      _: 1
    }));
  }
};
const RT = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: IT
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
}, zT = window.Vue.resolveComponent, OT = window.Vue.createVNode, jT = window.Vue.normalizeClass, HT = window.Vue.openBlock, qT = window.Vue.createElementBlock;
function GT(e, t, n, o, s, a) {
  const r = zT("sx-editor");
  return HT(), qT("main", {
    class: jT(["sx-editor-view", a.classes])
  }, [
    OT(r, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const XT = /* @__PURE__ */ ce(RT, [["render", GT]]);
const Wt = window.Vue.unref, to = window.Vue.createVNode, Xs = window.Vue.withCtx, WT = window.Vue.resolveDirective, KT = window.Vue.withDirectives, YT = window.Vue.openBlock, QT = window.Vue.createBlock, Vm = window.Codex.CdxButton, Em = window.Codex.CdxIcon, JT = {
  __name: "SXPublisherHeader",
  props: {
    isPublishingDisabled: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["publish-translation"],
  setup(e) {
    const t = Xe(), n = () => t.push({ name: "sx-sentence-selector" });
    return (o, s) => {
      const a = WT("i18n");
      return YT(), QT(Wt(N), { class: "ma-0 sx-publisher__header" }, {
        default: Xs(() => [
          to(Wt(k), {
            shrink: "",
            class: "me-2"
          }, {
            default: Xs(() => [
              to(Wt(Vm), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: Xs(() => [
                  to(Wt(Em), { icon: Wt(Qo) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          KT(to(Wt(k), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          to(Wt(k), { shrink: "" }, {
            default: Xs(() => [
              to(Wt(Vm), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (r) => o.$emit("publish-translation"))
              }, {
                default: Xs(() => [
                  to(Wt(Em), { icon: Wt(jS) }, null, 8, ["icon"])
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
}, ZT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, e6 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, Lm = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const uc = window.Vue.createElementVNode, Am = window.Vue.toDisplayString, dc = window.Vue.unref, gc = window.Vue.withCtx, Dm = window.Vue.createVNode, t6 = window.Vue.openBlock, n6 = window.Vue.createBlock, o6 = window.Vue.createCommentVNode, s6 = ["innerHTML"], a6 = ["textContent"], i6 = ["textContent"], pc = window.Vue.computed, r6 = {
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
    const t = fe(), n = e, o = {
      pending: {
        svg: ZT,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: e6,
        title: t.i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: Lm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: Lm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, s = pc(() => o[n.status].svg), a = pc(() => o[n.status].title), r = pc(() => o[n.status].subtitle);
    return (l, u) => e.active ? (t6(), n6(dc(St), {
      key: 0,
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: gc(() => [
        Dm(dc(N), { class: "ma-4" }, {
          default: gc(() => [
            Dm(dc(k), null, {
              default: gc(() => [
                uc("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: s.value
                }, null, 8, s6),
                uc("h2", {
                  textContent: Am(a.value)
                }, null, 8, a6),
                uc("p", {
                  class: "ma-0",
                  textContent: Am(r.value)
                }, null, 8, i6)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : o6("", !0);
  }
};
const at = window.Vue.unref, Bt = window.Vue.createVNode, mn = window.Vue.withCtx, l6 = window.Vue.resolveDirective, c6 = window.Vue.withDirectives, Tm = window.Vue.toDisplayString, u6 = window.Vue.createTextVNode, mc = window.Vue.openBlock, Bm = window.Vue.createElementBlock, d6 = window.Vue.createCommentVNode, Hf = window.Vue.createElementVNode, g6 = window.Vue.createBlock, p6 = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, m6 = ["src"], h6 = ["textContent"], f6 = /* @__PURE__ */ Hf("p", { class: "mt-0" }, null, -1), w6 = window.Vue.computed, v6 = window.Vue.inject, _6 = window.Vue.ref, Pm = window.Codex.CdxButton, S6 = window.Codex.CdxIcon, y6 = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: Hh,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = _6(""), s = () => n("close"), a = () => n("publish", o.value), r = v6("breakpoints"), l = w6(() => r.value.mobile);
    return (u, d) => {
      const i = l6("i18n");
      return e.active && e.captchaDetails ? (mc(), g6(at(St), {
        key: 0,
        fullscreen: l.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: mn(() => [
          Bt(at(N), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: mn(() => [
              Bt(at(k), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: mn(() => [
                  Bt(at(Pm), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": u.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: s
                  }, {
                    default: mn(() => [
                      Bt(at(S6), { icon: at(Qo) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              c6(Bt(at(k), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [i, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              Bt(at(k), {
                shrink: "",
                class: "justify-center"
              }, {
                default: mn(() => [
                  Bt(at(Pm), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: mn(() => [
                      u6(Tm(u.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Bt(at(Ui))
        ]),
        default: mn(() => [
          Hf("div", p6, [
            e.captchaDetails.type === "image" ? (mc(), Bm("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, m6)) : (mc(), Bm("p", {
              key: 1,
              textContent: Tm(e.captchaDetails.question)
            }, null, 8, h6)),
            f6,
            Bt(at(N), { class: "ma-0" }, {
              default: mn(() => [
                Bt(at(k), null, {
                  default: mn(() => [
                    Bt(at(Lc), {
                      value: o.value,
                      "onUpdate:value": d[0] || (d[0] = (c) => o.value = c),
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
      }, 8, ["fullscreen"])) : d6("", !0);
    };
  }
};
const Fn = window.Vue.unref, Di = window.Vue.createVNode, Mo = window.Vue.withCtx, Uo = window.Vue.createElementVNode, x6 = window.Vue.resolveDirective, C6 = window.Vue.withDirectives, b6 = window.Vue.renderList, k6 = window.Vue.Fragment, hc = window.Vue.openBlock, $6 = window.Vue.createElementBlock, Fm = window.Vue.toDisplayString, Nm = window.Vue.createTextVNode, V6 = window.Vue.isRef, E6 = window.Vue.normalizeClass, Mm = window.Vue.createBlock, L6 = { class: "mw-ui-dialog__header" }, A6 = { class: "row ma-0 px-4 py-3" }, D6 = { class: "col shrink justify-center" }, T6 = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, B6 = { class: "mb-0" }, P6 = { class: "pa-4" }, F6 = window.Codex.CdxField, N6 = window.Codex.CdxRadio, M6 = window.Vuex.useStore, Ti = window.Vue.computed, U6 = window.Codex.CdxButton, I6 = window.Codex.CdxIcon, R6 = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = M6(), { target: s, PUBLISHING_TARGETS: a } = Ut(), r = Ti(() => o.state.translator.isAnon), l = fe(), { sourceSection: u } = oe(), { isCurrentSectionPresent: d } = Fe(), i = Ti(
      () => u.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-label") : l.i18n("cx-sx-publisher-new-section-option-label")
    ), c = Ti(
      () => u.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-details") : l.i18n("cx-sx-publisher-new-section-option-details")
    ), g = Ti(() => {
      const m = [
        {
          label: i.value,
          description: c.value,
          value: a.NEW_SECTION,
          disabled: !1
        },
        {
          label: l.i18n("cx-sx-publisher-sandbox-option-label"),
          description: l.i18n("cx-sx-publisher-sandbox-option-details"),
          value: a.SANDBOX,
          disabled: r.value
        }
      ];
      return d.value && m.push({
        label: l.i18n("cx-sx-publisher-expand-option-label"),
        description: l.i18n("cx-sx-publisher-expand-option-details"),
        value: a.EXPAND,
        disabled: !1
      }), m;
    }), p = () => n("update:active", !1);
    return (m, h) => {
      const f = x6("i18n");
      return hc(), Mm(Fn(St), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: m.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: h[1] || (h[1] = (w) => m.$emit("update:active", w)),
        onClose: p
      }, {
        header: Mo(() => [
          Uo("div", L6, [
            Uo("div", A6, [
              Uo("div", D6, [
                Di(Fn(U6), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": m.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: p
                }, {
                  default: Mo(() => [
                    Di(Fn(I6), { icon: Fn(Ph) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              Uo("div", T6, [
                C6(Uo("h4", B6, null, 512), [
                  [f, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            Di(Fn(Ui))
          ])
        ]),
        default: Mo(() => [
          Uo("div", P6, [
            Di(Fn(F6), { "is-fieldset": "" }, {
              default: Mo(() => [
                (hc(!0), $6(k6, null, b6(g.value, (w, v) => (hc(), Mm(Fn(N6), {
                  key: "publish-options-radio-" + w.value,
                  modelValue: Fn(s),
                  "onUpdate:modelValue": [
                    h[0] || (h[0] = (y) => V6(s) ? s.value = y : null),
                    p
                  ],
                  class: E6(v < g.value.length - 1 ? "mb-4" : "mb-0"),
                  "input-value": w.value,
                  disabled: w.disabled,
                  name: "publish-options"
                }, {
                  description: Mo(() => [
                    Nm(Fm(w.description), 1)
                  ]),
                  default: Mo(() => [
                    Nm(Fm(w.label) + " ", 1)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "class", "input-value", "disabled"]))), 128))
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["value", "title"]);
    };
  }
};
const Pt = window.Vue.unref, Um = window.Vue.toDisplayString, Im = window.Vue.createElementVNode, z6 = window.Vue.resolveDirective, Io = window.Vue.createVNode, O6 = window.Vue.withDirectives, Ws = window.Vue.withCtx, fc = window.Vue.openBlock, Rm = window.Vue.createBlock, zm = window.Vue.createCommentVNode, j6 = window.Vue.Fragment, H6 = window.Vue.createElementBlock, q6 = window.Vue.normalizeClass, G6 = ["textContent"], X6 = ["textContent"], Ro = window.Vue.computed, Om = window.Vue.ref, W6 = window.Vue.watch, jm = window.Codex.CdxButton, Hm = window.Codex.CdxIcon, K6 = window.Codex.CdxMessage, Y6 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Om(0), o = Om(null);
    W6(o, () => {
      var m;
      const p = (m = o.value) == null ? void 0 : m.$el;
      if (p instanceof HTMLElement) {
        const h = p.querySelector("a");
        h && h.setAttribute("target", "_blank");
      }
    });
    const s = Ro(
      () => {
        var p;
        return (p = t.publishFeedbackMessages) == null ? void 0 : p[n.value];
      }
    ), a = Ro(() => {
      var p;
      return ((p = s.value) == null ? void 0 : p.status) || "notice";
    }), r = Ro(() => a.value === "notice"), l = Ro(
      () => `sx-publisher__review-info--${a.value}`
    ), u = fe(), d = Ro(() => {
      var p;
      return (p = s.value) == null ? void 0 : p.text;
    }), i = Ro(() => {
      var p;
      return r.value ? u.i18n("cx-sx-publisher-review-info") : ((p = s.value) == null ? void 0 : p.title) || u.i18n("cx-sx-publisher-review-info-error");
    }), c = () => {
      const p = t.publishFeedbackMessages.length;
      n.value = (n.value - 1 + p) % p;
    }, g = () => {
      n.value = (n.value + 1) % t.publishFeedbackMessages.length;
    };
    return (p, m) => {
      const h = z6("i18n-html");
      return fc(), Rm(Pt(K6), {
        type: a.value,
        class: q6(["sx-publisher__review-info", l.value]),
        icon: r.value ? Pt(GS) : null
      }, {
        default: Ws(() => [
          Im("h5", {
            textContent: Um(i.value)
          }, null, 8, G6),
          r.value ? zm("", !0) : (fc(), H6(j6, { key: 0 }, [
            Im("p", {
              textContent: Um(d.value)
            }, null, 8, X6),
            Io(Pt(N), {
              justify: "between",
              class: "ma-0"
            }, {
              default: Ws(() => [
                O6(Io(Pt(k), {
                  ref_key: "learnMoreContainer",
                  ref: o,
                  class: "sx-publisher__review-info__learn-more-anchor"
                }, null, 512), [
                  [h, void 0, "cx-sx-publisher-review-info-learn-more"]
                ]),
                e.publishFeedbackMessages.length > 1 ? (fc(), Rm(Pt(k), {
                  key: 0,
                  class: "sx-publisher__review-info__navigation-buttons justify-end",
                  align: "center"
                }, {
                  default: Ws(() => [
                    Io(Pt(jm), {
                      weight: "quiet",
                      class: "pa-0 me-1",
                      "aria-label": p.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                      onClick: c
                    }, {
                      default: Ws(() => [
                        Io(Pt(Hm), { icon: Pt(lu) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"]),
                    Io(Pt(jm), {
                      weight: "quiet",
                      class: "pa-0 ms-1",
                      "aria-label": p.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                      onClick: g
                    }, {
                      default: Ws(() => [
                        Io(Pt(Hm), { icon: Pt(fa) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                })) : zm("", !0)
              ]),
              _: 1
            })
          ], 64))
        ]),
        _: 1
      }, 8, ["type", "class", "icon"]);
    };
  }
}, Q6 = (e) => {
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
}, J6 = window.Vuex.useStore, Z6 = window.Vue.computed, e9 = () => {
  const e = J6(), { currentTranslation: t } = It(), { currentMTProvider: n, previousRoute: o } = Te(e), { currentTargetPage: s } = ut(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    sectionURLParameter: u
  } = T(), { sourceSection: d } = oe(), i = yt(), c = Z6(() => {
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
      translation_source_title: l.value,
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
      const w = t.value.targetSectionTitle;
      w && (h.translation_target_section = w);
    } else
      s.value && (h.translation_target_title = (f = s.value) == null ? void 0 : f.title);
    return n.value && (h.translation_provider = ne.getProviderForInstrumentation(n.value)), h.human_modification_rate = Qt.getMTScoreForPageSection(
      d.value,
      r.value
    ) / 100, h.human_modification_threshold = Qt.getMtModificationThreshold(), h;
  });
  return {
    logPublishAttemptEvent: () => i(de({
      event_type: "publish_attempt"
    }, c.value)),
    logPublishSuccessEvent: (h, f) => i(de({
      event_type: "publish_success",
      published_page_id: h,
      published_revision_id: f
    }, c.value)),
    logPublishFailureEvent: () => i(de({
      event_type: "publish_failure"
    }, c.value))
  };
}, t9 = window.Vue.computed, qm = window.Vue.ref, n9 = window.Vuex.useStore, o9 = () => {
  const e = n9(), {
    pageURLParameter: t,
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = T(), { sourceSection: s, targetPageTitleForPublishing: a } = oe(), r = Rf(), { sectionSuggestion: l } = Fe(), u = t9(
    () => {
      var S, b;
      return (b = l.value) == null ? void 0 : b.presentSections[(S = s.value) == null ? void 0 : S.sourceSectionTitleForPublishing];
    }
  ), { target: d, PUBLISHING_TARGETS: i } = Ut(), c = qm(!1), g = qm("pending"), p = () => c.value = !1, m = xu(), {
    logPublishAttemptEvent: h,
    logPublishSuccessEvent: f,
    logPublishFailureEvent: w
  } = e9(), v = (S, b) => C(void 0, null, function* () {
    h();
    const E = yield m();
    if (E instanceof ro)
      return w(), { publishFeedbackMessage: E, targetUrl: null };
    const x = E, R = a.value, L = {
      html: Q6(s.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: R,
      sourceSectionTitle: s.value.sourceSectionTitleForPublishing,
      targetSectionTitle: s.value.targetSectionTitleForPublishing,
      sourceLanguage: n.value,
      targetLanguage: o.value,
      revision: r.value,
      isSandbox: d.value === i.SANDBOX,
      sectionTranslationId: x
    };
    u.value && d.value === i.EXPAND && (L.existingSectionTitle = u.value), S && (L.captchaId = S, L.captchaWord = b);
    const B = yield _t.publishTranslation(
      L
    );
    return B.publishFeedbackMessage === null ? f(B.pageId, B.revisionId) : w(), B;
  });
  return {
    closePublishDialog: p,
    doPublish: (S = null, b = null) => C(void 0, null, function* () {
      g.value = "pending", c.value = !0;
      let E;
      try {
        E = yield v(
          b == null ? void 0 : b.id,
          S
        );
      } catch (x) {
        if (x instanceof Go)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw x;
      }
      return E;
    }),
    isPublishDialogActive: c,
    publishStatus: g
  };
}, s9 = window.Vue.computed, a9 = () => {
  const e = Xe(), { sourceSection: t } = oe(), { getCurrentTitleByLanguage: n } = Sn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = T(), a = s9(
    () => t.value.subSections.reduce(
      (r, l) => l.isTranslated ? `${r}<section rel="cx:Section" id="${l.targetSectionId}">${l.translatedContent}</section>` : r,
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
}, i9 = () => {
  const { targetLanguageURLParameter: e } = T(), { sourceSection: t } = oe();
  return () => {
    const n = Qt.getMTScoreForPageSection(
      t.value,
      e.value
    ), o = Qt.getScoreStatus(n);
    if (o === "success")
      return null;
    const s = 100 - n, a = o === "failure" ? "error" : "warning";
    let r, l;
    return a === "warning" ? (r = mw.message("cx-sx-publisher-mt-abuse-message-title", s).plain(), l = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (r = mw.message("cx-sx-publisher-mt-abuse-error-title", s).plain(), l = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new ro({
      title: r,
      text: l,
      status: a,
      type: "mt"
    });
  };
}, r9 = window.Vue.ref, l9 = window.Vue.computed, c9 = () => {
  const e = i9(), { target: t, PUBLISHING_TARGETS: n } = Ut(), o = r9([]), s = l9(
    () => o.value.some((u) => u.isError)
  ), a = (u) => {
    o.value.push(u), o.value.sort((d, i) => +i.isError - +d.isError);
  };
  return {
    addPublishFeedbackMessage: a,
    clearPublishFeedbackMessages: () => {
      o.value = [];
    },
    publishFeedbackMessages: o,
    isPublishingDisabled: s,
    initializePublishFeedbackMessages: () => {
      if (!jf() && t.value !== n.SANDBOX) {
        const d = new ro({
          text: mw.message("cx-publish-permission-error").text(),
          title: mw.message("cx-publish-permission-error-title").text(),
          type: "generic",
          status: "error"
        });
        a(d);
      }
      const u = e();
      u && a(u);
    }
  };
}, u9 = () => {
  const { target: e, PUBLISHING_TARGETS: t } = Ut(), { currentSourcePage: n } = ut(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = T(), { sourceSection: a, targetPageTitleForPublishing: r } = oe();
  return (l) => C(void 0, null, function* () {
    const u = r.value, d = n.value.title, i = new mw.Title(d), c = mw.config.get("wgNamespaceIds");
    if (a.value.isLeadSection && e.value !== t.SANDBOX && i.getNamespaceId() !== c.user)
      try {
        yield Gi.addWikibaseLink(
          o.value,
          s.value,
          d,
          u
        );
      } catch (g) {
        mw.log.error("Error while adding wikibase link", g);
      }
    if (!l) {
      const g = "[CX] Target URL is empty after successful publishing";
      throw mw.log.error(g), new Error(g);
    }
    location.href = l;
  });
}, Gm = window.Vue.ref, d9 = () => {
  const e = Gm(!1), t = Gm(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const le = window.Vue.unref, He = window.Vue.createVNode, g9 = window.Vue.resolveDirective, Xm = window.Vue.withDirectives, wc = window.Vue.openBlock, vc = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const no = window.Vue.createElementVNode, Wm = window.Vue.toDisplayString, p9 = window.Vue.createTextVNode, zo = window.Vue.withCtx, Km = window.Vue.normalizeClass, m9 = { class: "sx-publisher" }, h9 = {
  key: 0,
  class: "mb-2"
}, f9 = {
  key: 1,
  class: "sx-publisher__publish-panel__existing-target-section px-4 pb-4"
}, w9 = ["href"], v9 = ["innerHTML"], _9 = { class: "sx-publisher__section-preview pa-5" }, S9 = ["innerHTML"], Bi = window.Vue.computed, y9 = window.Vue.onMounted, x9 = window.Vue.ref, C9 = window.Vue.watch, Ym = window.Codex.CdxButton, _c = window.Codex.CdxIcon, b9 = {
  __name: "SXPublisher",
  setup(e) {
    const { sourceSection: t } = oe(), { sectionSuggestion: n, isCurrentSectionPresent: o } = Fe(), {
      targetLanguageURLParameter: s,
      sectionURLParameter: a
    } = T(), r = Bi(() => {
      var q;
      return (q = t.value) == null ? void 0 : q.title;
    }), l = fe(), { target: u, PUBLISHING_TARGETS: d } = Ut(), i = Bi(() => u.value === d.SANDBOX ? l.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : u.value === d.EXPAND ? l.i18n(
      "cx-sx-publisher-publish-panel-expand-section-result"
    ) : t.value.isLeadSection ? l.i18n("cx-sx-publisher-publish-panel-lead-section-result") : l.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: c,
      captchaDialogOn: g,
      handleCaptchaError: p,
      onCaptchaDialogClose: m
    } = d9(), {
      publishFeedbackMessages: h,
      isPublishingDisabled: f,
      addPublishFeedbackMessage: w,
      clearPublishFeedbackMessages: v,
      initializePublishFeedbackMessages: y
    } = c9(), S = u9(), { doPublish: b, isPublishDialogActive: E, publishStatus: x, closePublishDialog: R } = o9(), L = (q = null) => C(this, null, function* () {
      if (f.value)
        return;
      const se = yield b(q, c.value);
      if (!se)
        return;
      const { publishFeedbackMessage: ae, targetUrl: te } = se;
      if (p(ae)) {
        R();
        return;
      } else
        ae && w(ae);
      x.value = f.value ? "failure" : "success", setTimeout(() => {
        if (f.value) {
          R();
          return;
        }
        S(te);
      }, 1e3);
    });
    y9(() => y());
    const B = a9(), j = x9(!1), G = () => j.value = !0;
    C9(j, (q) => {
      q || (v(), y());
    });
    const Y = Bi(
      () => {
        var q, se;
        return (se = (q = n.value) == null ? void 0 : q.presentSections) == null ? void 0 : se[a.value];
      }
    ), we = Bi(() => {
      var ae;
      const q = K.getPageUrl(
        s.value,
        (ae = n.value) == null ? void 0 : ae.targetTitle
      ), se = (Y.value || "").replace(
        / /g,
        "_"
      );
      return `${q}#${se}`;
    });
    return (q, se) => {
      const ae = g9("i18n");
      return wc(), vc("section", m9, [
        He(JT, {
          "is-publishing-disabled": le(f),
          onPublishTranslation: L
        }, null, 8, ["is-publishing-disabled"]),
        no("div", {
          class: Km(["sx-publisher__publish-panel", le(o) ? "py-4" : "pa-4"])
        }, [
          le(o) ? (wc(), vc("div", f9, [
            Xm(no("h5", null, null, 512), [
              [ae, void 0, "cx-sx-publisher-publish-panel-existing-section-notice"]
            ]),
            no("a", {
              class: "sx-publisher__publish-panel__existing-target-section-link py-2 px-3 mt-4",
              href: we.value,
              target: "_blank"
            }, [
              p9(Wm(Y.value) + " ", 1),
              He(le(_c), { icon: le(Xi) }, null, 8, ["icon"])
            ], 8, w9)
          ])) : Xm((wc(), vc("h5", h9, null, 512)), [
            [ae, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          no("div", {
            class: Km({ "px-4 mt-4": le(o) })
          }, [
            no("h6", {
              class: "sx-publisher__publish-panel__expected-publishing-result mb-2",
              innerHTML: i.value
            }, null, 8, v9),
            He(le(N), {
              justify: "end",
              class: "ma-0"
            }, {
              default: zo(() => [
                He(le(k), { shrink: "" }, {
                  default: zo(() => [
                    He(le(Ym), {
                      weight: "quiet",
                      "aria-label": q.$i18n("cx-sx-publisher-configure-button-aria-label"),
                      onClick: G
                    }, {
                      default: zo(() => [
                        He(le(_c), { icon: le(ny) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ], 2)
        ], 2),
        He(Y6, { "publish-feedback-messages": le(h) }, null, 8, ["publish-feedback-messages"]),
        no("section", _9, [
          He(le(N), { class: "pb-5 ma-0" }, {
            default: zo(() => [
              He(le(k), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                textContent: Wm(r.value)
              }, null, 8, ["textContent"]),
              He(le(k), { shrink: "" }, {
                default: zo(() => [
                  He(le(Ym), {
                    weight: "quiet",
                    "aria-label": q.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: le(B)
                  }, {
                    default: zo(() => [
                      He(le(_c), { icon: le(iu) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label", "onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          no("div", {
            innerHTML: le(t).translationHtml
          }, null, 8, S9)
        ]),
        He(R6, {
          active: j.value,
          "onUpdate:active": se[0] || (se[0] = (te) => j.value = te)
        }, null, 8, ["active"]),
        He(y6, {
          active: le(g),
          "captcha-details": le(c),
          onClose: le(m),
          onPublish: se[1] || (se[1] = (te) => L(te))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        He(r6, {
          active: le(E),
          status: le(x)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const k9 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: b9
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, $9 = window.Vue.resolveComponent, V9 = window.Vue.createVNode, E9 = window.Vue.normalizeClass, L9 = window.Vue.openBlock, A9 = window.Vue.createElementBlock;
function D9(e, t, n, o, s, a) {
  const r = $9("sx-publisher");
  return L9(), A9("main", {
    class: E9(["sx-publisher-view", a.classes])
  }, [
    V9(r)
  ], 2);
}
const T9 = /* @__PURE__ */ ce(k9, [["render", D9]]);
const Ft = window.Vue.unref, Nn = window.Vue.createVNode, oo = window.Vue.withCtx, Sc = window.Vue.toDisplayString, yc = window.Vue.createElementVNode, B9 = window.Vue.openBlock, P9 = window.Vue.createBlock, F9 = ["textContent"], N9 = ["textContent"], M9 = ["textContent"], qf = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: Wo,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (B9(), P9(Ft(N), {
      class: "cx-search-suggestion px-4 py-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: Ft(O.getDir)(e.suggestion.language)
    }, {
      default: oo(() => [
        Nn(Ft(k), { shrink: "" }, {
          default: oo(() => [
            Nn(Ft(Hc), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        Nn(Ft(k), { class: "ms-4" }, {
          default: oo(() => [
            Nn(Ft(N), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: oo(() => [
                Nn(Ft(k), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: oo(() => [
                    yc("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: Sc(e.suggestion.title)
                    }, null, 8, F9)
                  ]),
                  _: 1
                }),
                Nn(Ft(k), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: oo(() => [
                    yc("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: Sc(e.suggestion.description)
                    }, null, 8, N9)
                  ]),
                  _: 1
                }),
                Nn(Ft(k), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: oo(() => [
                    Nn(Ft(Je), {
                      icon: Ft(E0),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    yc("small", {
                      textContent: Sc((e.suggestion.langLinksCount || 0) + 1)
                    }, null, 8, M9)
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
const Ks = window.Vue.unref, Ys = window.Vue.openBlock, xc = window.Vue.createBlock, U9 = window.Vue.createCommentVNode, I9 = window.Vue.resolveDirective, R9 = window.Vue.withDirectives, Qm = window.Vue.createElementBlock, z9 = window.Vue.renderList, O9 = window.Vue.Fragment, j9 = window.Vue.normalizeClass, H9 = window.Vue.withCtx, q9 = {
  key: 1,
  class: "sx-article-search__empty-state"
}, Jm = window.Vue.computed, G9 = window.Vue.ref, X9 = {
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
    const { sourceLanguageURLParameter: t } = T(), n = Jm(() => O.getAutonym(t.value)), o = e, s = G9(null), a = (c) => s.value = c, r = () => s.value = null, l = (c) => {
      var g;
      return ((g = o.selectedItem) == null ? void 0 : g.title) === c.title && !s.value || s.value === c.pageId;
    }, u = Jm(() => o.searchInput), { searchResultsLoading: d, searchResultsSlice: i } = hu(
      t,
      u
    );
    return (c, g) => {
      const p = I9("i18n");
      return Ys(), xc(Ks(Qe), { class: "sx-article-search__results mb-0 pa-0" }, {
        default: H9(() => [
          Ks(d) ? (Ys(), xc(Ks(lt), {
            key: 0,
            class: "sx-article-search__empty-state"
          })) : Ks(i).length === 0 ? R9((Ys(), Qm("p", q9, null, 512)), [
            [p, [
              u.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : U9("", !0),
          (Ys(!0), Qm(O9, null, z9(Ks(i), (m) => (Ys(), xc(qf, {
            key: m.pageId,
            suggestion: m,
            class: j9({
              "sx-article-search__results-selected": l(m)
            }),
            onMouseenter: (h) => a(m.pageId),
            onMouseleave: r,
            onClick: (h) => c.$emit("suggestion-clicked", m)
          }, null, 8, ["suggestion", "class", "onMouseenter", "onClick"]))), 128))
        ]),
        _: 1
      });
    };
  }
};
const W9 = window.Vue.toDisplayString, K9 = window.Vue.createElementVNode, Y9 = window.Vue.renderList, Q9 = window.Vue.Fragment, Cc = window.Vue.openBlock, J9 = window.Vue.createElementBlock, Z9 = window.Vue.normalizeClass, Zm = window.Vue.createBlock, eB = window.Vue.unref, eh = window.Vue.withCtx, tB = ["textContent"], nB = window.Vue.ref, th = {
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
    const n = e, o = nB(null), s = (l) => o.value = l, a = () => o.value = null, r = (l) => {
      var u;
      return ((u = n.selectedItem) == null ? void 0 : u.title) === l.title && !o.value || o.value === l.pageId;
    };
    return (l, u) => (Cc(), Zm(eB(Qe), { class: "sx-article-search__suggestions pa-0" }, {
      header: eh(() => [
        K9("h5", {
          class: "ma-0 px-4 pb-1 sx-article-search__suggestions-header",
          textContent: W9(e.cardTitle)
        }, null, 8, tB)
      ]),
      default: eh(() => [
        (Cc(!0), J9(Q9, null, Y9(e.suggestions, (d) => (Cc(), Zm(qf, {
          key: d.pageId,
          suggestion: d,
          class: Z9({
            "sx-article-search__suggestions-selected": r(d)
          }),
          onMouseenter: (i) => s(d.pageId),
          onMouseleave: a,
          onClick: (i) => l.$emit("suggestion-clicked", d)
        }, null, 8, ["suggestion", "class", "onMouseenter", "onClick"]))), 128))
      ]),
      _: 1
    }));
  }
}, oB = window.Vue.computed, sB = (e, t) => e.length === t.length && e.every((n) => t.includes(n)) && t.every((n) => e.includes(n)), nh = "other", aB = (e) => oB((t) => {
  const o = e.value.slice(0, 3), s = {
    value: nh,
    props: {
      icon: T0,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  }, a = (t || []).map((l) => l.value).filter((l) => l !== nh);
  return sB(a, o) ? t : [...o.map((l) => ({
    value: l,
    props: {
      label: O.getAutonym(l),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), s];
}), iB = window.Vue.computed, rB = () => {
  const { supportedSourceLanguageCodes: e } = pa(), { targetLanguageURLParameter: t } = T();
  return { getSuggestedSourceLanguages: (o) => iB(() => {
    const s = (navigator.language || "").split("-")[0], a = (mw.config.get("wgULSAcceptLanguageList") || navigator.languages || []).map((l) => l.split("-")[0]), r = [
      ...o.value,
      // User's current interface language
      mw.config.get("wgUserLanguage"),
      // Current wiki's content language
      mw.config.get("wgContentLanguage"),
      s,
      ...a
    ];
    return [...new Set(r)].filter(
      (l) => l !== t.value && e.value.includes(l)
    );
  }) };
}, lB = window.Vue.ref, cB = () => {
  const e = lB([]), t = () => {
    try {
      const s = mw.storage.get("cxPreviousLanguages");
      s && e.value.push(...JSON.parse(s));
    } catch (s) {
    }
  }, n = () => {
    mw.storage.set(
      "cxPreviousLanguages",
      JSON.stringify(e.value)
    );
  }, o = (s) => {
    s && (e.value = [
      s,
      ...e.value.filter((a) => a !== s)
    ], n());
  };
  return t(), {
    previousLanguages: e,
    addLanguageToHistory: o
  };
};
const uB = window.Vue.resolveDirective, dB = window.Vue.createElementVNode, bc = window.Vue.withDirectives, he = window.Vue.unref, Qs = window.Vue.withCtx, Kt = window.Vue.createVNode, Js = window.Vue.openBlock, oh = window.Vue.createBlock, gB = window.Vue.createCommentVNode, kc = window.Vue.createElementBlock, pB = window.Vue.Fragment, mB = window.Vue.vShow, Zs = window.Vue.withModifiers, ea = window.Vue.withKeys, hB = ["onKeydown"], fB = { class: "mb-0" }, wB = {
  key: 2,
  class: "sx-article-search__empty-state"
}, ta = window.Vue.ref, vB = window.Vue.onMounted, na = window.Vue.computed, sh = window.Vue.watch, _B = window.Vue.inject, SB = window.Vuex.useStore, yB = window.Codex.CdxButton, xB = window.Codex.CdxIcon, CB = window.Codex.CdxSearchInput, bB = 3, kB = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = ta(""), n = ta(!1), o = ta(null), s = ta(!1), { previousLanguages: a, addLanguageToHistory: r } = cB(), l = SB(), {
      sourceLanguageURLParameter: u,
      targetLanguageURLParameter: d
    } = T(), { supportedSourceLanguageCodes: i } = pa(), { searchResultsSlice: c } = hu(u, t), { getSuggestedSourceLanguages: g } = rB(), p = g(a), m = aB(
      p
    ), h = Xe(), { fetchAllTranslations: f } = Jo();
    vB(() => C(this, null, function* () {
      var P;
      f(), r(u.value), (P = o.value) == null || P.focus();
    }));
    const w = () => {
      h.push({ name: "dashboard" });
    }, v = Oh(), y = (P) => {
      v(P, d.value), r(P);
    }, S = (P) => {
      if (P === "other") {
        s.value = !0;
        return;
      }
      y(P);
    };
    sh(
      u,
      () => {
        var P;
        l.dispatch("mediawiki/fetchNearbyPages"), (P = o.value) == null || P.focus();
      },
      { immediate: !0 }
    );
    const b = yt();
    sh(t, () => {
      n.value || (n.value = !0, b({
        event_type: "dashboard_search",
        translation_source_language: u.value,
        translation_target_language: d.value
      }));
    });
    const E = () => {
      s.value = !1;
    }, x = (P) => {
      s.value = !1, S(P);
    }, { fetchPreviousEditsInSource: R, previousEditsInSource: L } = Ah(), B = ta([]);
    (() => R().then(() => L.value.length > 0 ? lo.fetchPages(
      u.value,
      L.value
    ) : []).then((P) => {
      P = P.slice(0, bB), P = P.sort(
        (U, Z) => L.value.indexOf(U.title) - L.value.indexOf(Z.title)
      ), B.value = P;
    }))();
    const G = na(() => l.getters["mediawiki/getNearbyPages"]), Y = _B("breakpoints"), we = na(() => Y.value.mobile), q = wa(), se = na(
      () => B.value && B.value.length
    ), ae = na(
      () => G.value && G.value.length
    ), { next: te, prev: Ne, keyboardNavigationContainer: We, selectedItem: Be } = xf(t, c, B), J = (P) => q(
      P.title,
      u.value,
      d.value,
      I.value
    ), I = na(() => t.value ? "search_result" : se.value ? "suggestion_recent_edit" : ae.value ? "suggestion_nearby" : "");
    return (P, U) => {
      const Z = uB("i18n");
      return Js(), kc("section", {
        ref_key: "keyboardNavigationContainer",
        ref: We,
        class: "sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto",
        onKeydown: [
          U[5] || (U[5] = ea(Zs((..._) => he(te) && he(te)(..._), ["stop", "prevent"]), ["tab"])),
          U[6] || (U[6] = ea(Zs((..._) => he(te) && he(te)(..._), ["stop", "prevent"]), ["down"])),
          U[7] || (U[7] = ea(Zs((..._) => he(Ne) && he(Ne)(..._), ["stop", "prevent"]), ["up"])),
          ea(Zs(w, ["stop", "prevent"]), ["esc"]),
          U[8] || (U[8] = ea(Zs((_) => J(he(Be)), ["stop", "prevent"]), ["enter"]))
        ]
      }, [
        Kt(he(N), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Qs(() => [
            Kt(he(k), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Qs(() => [
                bc(dB("h5", fB, null, 512), [
                  [Z, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            Kt(he(k), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Qs(() => [
                Kt(he(yB), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": P.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: w
                }, {
                  default: Qs(() => [
                    Kt(he(xB), { icon: he(Qo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Kt(he(CB), {
          ref_key: "searchInputRef",
          ref: o,
          modelValue: t.value,
          "onUpdate:modelValue": U[0] || (U[0] = (_) => t.value = _),
          class: "sx-article-search__search-input",
          placeholder: P.$i18n("cx-sx-article-search-input-placeholder")
        }, null, 8, ["modelValue", "placeholder"]),
        Kt(he(ua), {
          class: "sx-article-search__language-button-group",
          items: he(m),
          active: he(u),
          onSelect: S
        }, null, 8, ["items", "active"]),
        t.value ? gB("", !0) : (Js(), kc(pB, { key: 0 }, [
          se.value ? (Js(), oh(th, {
            key: 0,
            "card-title": P.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: B.value,
            "selected-item": he(Be),
            onSuggestionClicked: U[1] || (U[1] = (_) => J(_))
          }, null, 8, ["card-title", "suggestions", "selected-item"])) : ae.value ? (Js(), oh(th, {
            key: 1,
            "card-title": P.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: G.value,
            onSuggestionClicked: U[2] || (U[2] = (_) => J(_))
          }, null, 8, ["card-title", "suggestions"])) : bc((Js(), kc("p", wB, null, 512)), [
            [Z, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        bc(Kt(X9, {
          "search-input": t.value,
          "selected-item": he(Be),
          onSuggestionClicked: U[3] || (U[3] = (_) => J(_))
        }, null, 8, ["search-input", "selected-item"]), [
          [mB, !!t.value]
        ]),
        Kt(he(St), {
          value: s.value,
          "onUpdate:value": U[4] || (U[4] = (_) => s.value = _),
          class: "sx-article-search-language-selector",
          fullscreen: we.value,
          header: we.value,
          title: P.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: E
        }, {
          default: Qs(() => [
            Kt(he(Cf), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: he(i),
              suggestions: he(p),
              placeholder: P.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: x,
              onClose: E
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ], 40, hB);
    };
  }
};
const $B = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: kB
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.mobile })
  }
}, VB = window.Vue.resolveComponent, EB = window.Vue.createVNode, LB = window.Vue.normalizeClass, AB = window.Vue.openBlock, DB = window.Vue.createElementBlock;
function TB(e, t, n, o, s, a) {
  const r = VB("sx-article-search");
  return AB(), DB("main", {
    class: LB(["sx-article-search-view", a.classes])
  }, [
    EB(r)
  ], 2);
}
const BB = /* @__PURE__ */ ce($B, [["render", TB]]), PB = () => {
  const e = wa(), t = _u(), { logDashboardOpenEvent: n } = Lf(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s,
    pageURLParameter: a
  } = T();
  return () => C(void 0, null, function* () {
    return t(o.value, a.value).then(
      () => n()
    ), e(
      a.value,
      o.value,
      s.value,
      "direct_preselect",
      null,
      !1
    );
  });
}, FB = window.Vuex.useStore, NB = [
  {
    path: "",
    name: "dashboard",
    component: Yg,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: BB,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: U4,
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: JE,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: u5,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: lT,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: DD,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: XT,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: T9,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Yg,
    meta: { workflowStep: 0 }
  }
], Cu = HC({
  history: jx(),
  routes: NB
}), $c = (e, t, n) => {
  e === t ? n() : n({ name: t });
}, MB = (e, t, n) => {
  let o = "cx_" + btoa(
    encodeURIComponent([n, e, t].join("_"))
  );
  return o = o.replace(/[()<>@,;\\[\]?={}]/g, ""), mw.cookie.get(o, "");
};
Cu.beforeEach((e, t, n) => {
  const o = FB();
  if (mw.user.isAnon() || ch.assertUser().catch((i) => {
    i instanceof Go && o.commit("application/setIsLoginDialogOn", !0);
  }), o.commit("application/setPreviousRoute", t.name), t.name) {
    n();
    return;
  }
  const s = PB(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    clearTranslationURLParameters: u
  } = T();
  if (!!(a.value && r.value && l.value)) {
    if (MB(
      a.value,
      r.value,
      l.value
    )) {
      const c = e.name === "sx-quick-tutorial" ? "sx-quick-tutorial" : "sx-sentence-selector";
      $c(e.name, c, n);
    } else
      e.name === "sx-translation-confirmer" && s(), $c(e.name, "sx-translation-confirmer", n);
    return;
  }
  u(), $c(e.name, "dashboard", n);
});
Cu.afterEach((e, t) => {
  if (!t.name)
    return;
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
/*!
 * Plugin that captures errors from Vue code and logs them to error.contenttranslation
 *
 * Based on mediawiki/resources/src/vue/errorLogger.js
 */
const UB = {
  install: function(e) {
    e.config.errorHandler = function(t) {
      mw.errorLogger.logError(t, "error.contenttranslation"), mw.log.error(t);
    };
  }
}, IB = window.Vue.createApp, RB = mw.config.get("wgUserLanguage"), zB = "en", OB = mw.messages.values || {}, uo = IB(By);
uo.use(Cu);
uo.use(dx);
uo.use(tv);
uo.use(ev);
const jB = Tv({
  locale: RB,
  finalFallback: zB,
  messages: OB,
  wikilinks: !0
});
uo.use(jB);
uo.use(UB);
uo.mount("#contenttranslation");
