var nw = Object.defineProperty, sw = Object.defineProperties;
var ow = Object.getOwnPropertyDescriptors;
var Tu = Object.getOwnPropertySymbols;
var aw = Object.prototype.hasOwnProperty, iw = Object.prototype.propertyIsEnumerable;
var Au = (e, t, n) => t in e ? nw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, pe = (e, t) => {
  for (var n in t || (t = {}))
    aw.call(t, n) && Au(e, n, t[n]);
  if (Tu)
    for (var n of Tu(t))
      iw.call(t, n) && Au(e, n, t[n]);
  return e;
}, tt = (e, t) => sw(e, ow(t));
var C = (e, t, n) => new Promise((s, o) => {
  var a = (u) => {
    try {
      l(n.next(u));
    } catch (d) {
      o(d);
    }
  }, r = (u) => {
    try {
      l(n.throw(u));
    } catch (d) {
      o(d);
    }
  }, l = (u) => u.done ? s(u.value) : Promise.resolve(u.value).then(a, r);
  l((n = n.apply(e, t)).next());
});
window.Vuex = require("vuex");
{
  const {
    CdxButton: e,
    CdxIcon: t,
    CdxDialog: n,
    CdxInfoChip: s,
    CdxSearchInput: o,
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
    CdxInfoChip: s,
    CdxSearchInput: o,
    CdxTextInput: a,
    CdxMenu: r,
    CdxMessage: l,
    CdxTabs: u,
    CdxTab: d,
    CdxField: i,
    CdxRadio: c
  };
}
const de = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, rw = {
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
}, lw = window.Vue.toDisplayString, wr = window.Vue.openBlock, vr = window.Vue.createElementBlock, cw = window.Vue.createCommentVNode, Du = window.Vue.createElementVNode, uw = window.Vue.normalizeClass, dw = ["width", "height", "aria-labelledby"], gw = ["id"], pw = ["fill"], hw = ["d"];
function fw(e, t, n, s, o, a) {
  return wr(), vr("span", {
    class: uw(["mw-ui-icon notranslate", a.classes])
  }, [
    (wr(), vr("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...r) => a.handleClick && a.handleClick(...r))
    }, [
      n.iconName ? (wr(), vr("title", {
        key: 0,
        id: n.iconName
      }, lw(n.iconName), 9, gw)) : cw("", !0),
      Du("g", { fill: n.iconColor }, [
        Du("path", { d: a.iconImagePath }, null, 8, hw)
      ], 8, pw)
    ], 8, dw))
  ], 2);
}
const Je = /* @__PURE__ */ de(rw, [["render", fw]]);
const ww = {
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
}, vw = window.Vue.renderSlot, _w = window.Vue.resolveComponent, Pu = window.Vue.normalizeClass, ka = window.Vue.openBlock, _r = window.Vue.createBlock, Sr = window.Vue.createCommentVNode, Sw = window.Vue.toDisplayString, yw = window.Vue.createElementBlock, xw = window.Vue.toHandlerKey, Cw = window.Vue.withModifiers, bw = window.Vue.mergeProps, kw = window.Vue.createElementVNode, $w = window.Vue.resolveDynamicComponent, Vw = window.Vue.withCtx, Ew = { class: "mw-ui-button__content" }, Lw = ["textContent"];
function Tw(e, t, n, s, o, a) {
  const r = _w("mw-icon");
  return ka(), _r($w(a.component), {
    class: Pu(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: Vw(() => [
      vw(e.$slots, "default", {}, () => [
        kw("span", Ew, [
          n.icon ? (ka(), _r(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: Pu(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : Sr("", !0),
          !a.isIcon && n.label ? (ka(), yw("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: Sw(n.label)
          }, null, 8, Lw)) : Sr("", !0),
          n.indicator ? (ka(), _r(r, bw({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [xw(a.indicatorClickEvent)]: t[0] || (t[0] = Cw((l) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : Sr("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const Ge = /* @__PURE__ */ de(ww, [["render", Tw]]);
const Aw = {
  name: "MwButtonGroup",
  components: {
    MwButton: Ge
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
}, Dw = window.Vue.renderList, Pw = window.Vue.Fragment, yr = window.Vue.openBlock, Bu = window.Vue.createElementBlock, Bw = window.Vue.resolveComponent, Fw = window.Vue.withModifiers, Nw = window.Vue.mergeProps, Mw = window.Vue.createBlock, Uw = { class: "row mw-ui-button-group ma-0 pa-0" };
function Iw(e, t, n, s, o, a) {
  const r = Bw("mw-button");
  return yr(), Bu("div", Uw, [
    (yr(!0), Bu(Pw, null, Dw(n.items, (l) => (yr(), Mw(r, Nw({
      key: l.value,
      value: l.value,
      "aria-selected": a.isActive(l) || null,
      ref_for: !0
    }, l.props, {
      class: ["ma-0", a.buttonClasses(l)],
      style: a.activeIndicatorStyle(l),
      onClick: Fw((u) => e.$emit("select", l.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const pa = /* @__PURE__ */ de(Aw, [["render", Iw]]);
const Rw = {
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
}, Fu = window.Vue.renderSlot, zw = window.Vue.toDisplayString, Nu = window.Vue.openBlock, Mu = window.Vue.createElementBlock, Ow = window.Vue.createCommentVNode, jw = window.Vue.createElementVNode, Hw = { class: "mw-ui-card" }, qw = ["textContent"], Gw = { class: "mw-ui-card__content" };
function Xw(e, t, n, s, o, a) {
  return Nu(), Mu("div", Hw, [
    Fu(e.$slots, "header", {}, () => [
      n.title ? (Nu(), Mu("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: zw(n.title)
      }, null, 8, qw)) : Ow("", !0)
    ]),
    jw("div", Gw, [
      Fu(e.$slots, "default")
    ])
  ]);
}
const Qe = /* @__PURE__ */ de(Rw, [["render", Xw]]);
const Ww = {}, Kw = window.Vue.openBlock, Yw = window.Vue.createElementBlock, Qw = { class: "mw-ui-divider row" };
function Jw(e, t) {
  return Kw(), Yw("div", Qw);
}
const Wi = /* @__PURE__ */ de(Ww, [["render", Jw]]);
const Zw = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, e0 = window.Vue.renderSlot, t0 = window.Vue.resolveDynamicComponent, n0 = window.Vue.withCtx, s0 = window.Vue.openBlock, o0 = window.Vue.createBlock;
function a0(e, t, n, s, o, a) {
  return s0(), o0(t0(n.tag), { class: "mw-grid container" }, {
    default: n0(() => [
      e0(e.$slots, "default")
    ]),
    _: 3
  });
}
const i0 = /* @__PURE__ */ de(Zw, [["render", a0]]), r0 = {
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
}, l0 = window.Vue.renderSlot, c0 = window.Vue.resolveDynamicComponent, u0 = window.Vue.normalizeClass, d0 = window.Vue.withCtx, g0 = window.Vue.openBlock, p0 = window.Vue.createBlock;
function m0(e, t, n, s, o, a) {
  return g0(), p0(c0(n.tag), {
    class: u0(a.classes)
  }, {
    default: d0(() => [
      l0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const N = /* @__PURE__ */ de(r0, [["render", m0]]), Fc = ["mobile", "tablet", "desktop", "desktop-wide"], h0 = Fc.reduce(
  (e, t) => tt(pe({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), f0 = {
  name: "MwCol",
  props: tt(pe({}, h0), {
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
      for (let n = 0; n < Fc.length; n++) {
        let s = Fc[n], o = this.$props[s];
        o && e.push(`col-${s}-${o}`);
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
}, w0 = window.Vue.renderSlot, v0 = window.Vue.resolveDynamicComponent, _0 = window.Vue.normalizeClass, S0 = window.Vue.withCtx, y0 = window.Vue.openBlock, x0 = window.Vue.createBlock;
function C0(e, t, n, s, o, a) {
  return y0(), x0(v0(n.tag), {
    class: _0(a.classes)
  }, {
    default: S0(() => [
      w0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const k = /* @__PURE__ */ de(f0, [["render", C0]]), b0 = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", k0 = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", Ki = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", $0 = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, V0 = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", lh = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", E0 = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", L0 = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", Yi = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", T0 = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", A0 = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", D0 = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", Uu = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", P0 = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", ch = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", B0 = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", F0 = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", N0 = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", M0 = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", U0 = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", Nc = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, I0 = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, R0 = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, uh = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", z0 = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z";
const xr = window.Vue.computed, O0 = window.Vue.watch, j0 = window.Vue.ref, H0 = window.Vue.nextTick, q0 = {
  name: "MwDialog",
  components: {
    MwButton: Ge,
    MwRow: N,
    MwCol: k,
    MwDivider: Wi
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
    const n = j0(null), s = xr(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), o = xr(
      () => `mw-ui-dialog__overlay--${e.overlayMode}`
    ), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, r = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    O0(
      () => e.value,
      (u) => {
        u ? (r(), H0(() => {
          n.value.focus();
        })) : a();
      }
    );
    const l = xr(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: s,
      cssVars: l,
      overlayClass: o,
      mwIconClose: Yi,
      root: n
    };
  }
}, Iu = window.Vue.normalizeClass, Cr = window.Vue.createElementVNode, br = window.Vue.renderSlot, $a = window.Vue.resolveComponent, io = window.Vue.createVNode, kr = window.Vue.withCtx, Ru = window.Vue.createCommentVNode, G0 = window.Vue.withKeys, zu = window.Vue.openBlock, X0 = window.Vue.createElementBlock, W0 = window.Vue.Transition, K0 = window.Vue.normalizeStyle, Y0 = window.Vue.createBlock, Q0 = { class: "mw-ui-dialog__shell items-stretch" }, J0 = { class: "mw-ui-dialog__body" };
function Z0(e, t, n, s, o, a) {
  const r = $a("mw-col"), l = $a("mw-button"), u = $a("mw-row"), d = $a("mw-divider");
  return zu(), Y0(W0, {
    name: "mw-ui-animation-fade",
    style: K0(s.cssVars)
  }, {
    default: kr(() => [
      n.value ? (zu(), X0("div", {
        key: 0,
        ref: "root",
        class: Iu(["mw-ui-dialog", s.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = G0((i) => n.closeOnEscapeKey && s.close(), ["esc"]))
      }, [
        Cr("div", {
          class: Iu(["mw-ui-dialog__overlay", s.overlayClass]),
          onClick: t[0] || (t[0] = (i) => !n.persistent && s.close())
        }, null, 2),
        Cr("div", Q0, [
          n.header ? br(e.$slots, "header", { key: 0 }, () => [
            io(u, { class: "mw-ui-dialog__header" }, {
              default: kr(() => [
                io(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                io(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: kr(() => [
                    io(l, {
                      type: "icon",
                      icon: s.mwIconClose,
                      onClick: s.close
                    }, null, 8, ["icon", "onClick"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            io(d)
          ]) : Ru("", !0),
          Cr("div", J0, [
            br(e.$slots, "default")
          ]),
          br(e.$slots, "footer")
        ])
      ], 34)) : Ru("", !0)
    ]),
    _: 3
  }, 8, ["style"]);
}
const Ct = /* @__PURE__ */ de(q0, [["render", Z0]]);
const e1 = {
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
}, Ou = window.Vue.renderSlot, t1 = window.Vue.resolveComponent, Va = window.Vue.openBlock, $r = window.Vue.createBlock, ju = window.Vue.createCommentVNode, n1 = window.Vue.resolveDynamicComponent, s1 = window.Vue.toDisplayString, o1 = window.Vue.mergeProps, a1 = window.Vue.withModifiers, i1 = window.Vue.createElementVNode, r1 = window.Vue.normalizeClass, l1 = window.Vue.createElementBlock, c1 = { class: "mw-ui-input__content" };
function u1(e, t, n, s, o, a) {
  const r = t1("mw-icon");
  return Va(), l1("div", {
    class: r1(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    i1("div", c1, [
      Ou(e.$slots, "icon", {}, () => [
        n.icon ? (Va(), $r(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : ju("", !0)
      ]),
      (Va(), $r(n1(n.type === "textarea" ? n.type : "input"), o1({
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
        textContent: s1(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      Ou(e.$slots, "indicator", {}, () => [
        n.indicator ? (Va(), $r(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = a1((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : ju("", !0)
      ])
    ])
  ], 2);
}
const Mc = /* @__PURE__ */ de(e1, [["render", u1]]);
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
const d1 = {}, g1 = window.Vue.createElementVNode, p1 = window.Vue.openBlock, m1 = window.Vue.createElementBlock, h1 = { class: "mw-ui-spinner" }, f1 = /* @__PURE__ */ g1("div", { class: "mw-ui-spinner__bounce" }, null, -1), w1 = [
  f1
];
function v1(e, t) {
  return p1(), m1("div", h1, w1);
}
const ct = /* @__PURE__ */ de(d1, [["render", v1]]), St = {
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
const _1 = window.Vue.computed, S1 = {
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
      default: uh
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: St.gray600
    },
    placeholderBackgroundColor: {
      type: String,
      default: St.gray200
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = _1(() => {
      var a;
      const o = {
        height: `${e.thumbnailSize}px`,
        width: `${e.thumbnailSize}px`
      };
      return (a = e.thumbnail) != null && a.source ? o["background-image"] = `url(${e.thumbnail.source})` : (o.color = e.placeholderColor, o["background-color"] = e.placeholderBackgroundColor), o;
    });
    return {
      handleClick: (o) => t("click", o),
      style: n
    };
  }
}, Hu = window.Vue.normalizeStyle, qu = window.Vue.openBlock, y1 = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const x1 = window.Vue.resolveComponent, C1 = window.Vue.createBlock;
function b1(e, t, n, s, o, a) {
  const r = x1("mw-ui-icon");
  return n.thumbnail ? (qu(), y1("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Hu(s.style)
  }, null, 4)) : (qu(), C1(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Hu(s.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Kc = /* @__PURE__ */ de(S1, [["render", b1]]);
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
const k1 = {
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
}, Gu = window.Vue.normalizeClass, Xu = window.Vue.normalizeStyle, $1 = window.Vue.createElementVNode, V1 = window.Vue.openBlock, E1 = window.Vue.createElementBlock, L1 = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function T1(e, t, n, s, o, a) {
  return V1(), E1("div", {
    class: Gu(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: Xu(a.containerStyles)
  }, [
    $1("div", {
      class: Gu(["mw-progress-bar__bar", a.barClass]),
      style: Xu(a.barStyles)
    }, null, 6)
  ], 14, L1);
}
const dh = /* @__PURE__ */ de(k1, [["render", T1]]), A1 = (e, t, n, s) => (o) => {
  const a = o.clientY, r = parseInt(
    document.defaultView.getComputedStyle(n.value).height,
    10
  ), l = (d) => {
    s.value = !1;
    let i = Math.min(
      r + d.clientY - a,
      e.value
    );
    i = Math.max(i, t.value), n.value.style.height = i + "px";
  }, u = () => {
    n.value.style.height === t.value + "px" && (n.value.style.removeProperty("height"), s.value = !0), document.documentElement.removeEventListener(
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
}, D1 = (e, t, n, s) => ({ initiateDrag: A1(
  e,
  t,
  n,
  s
) }), P1 = window.Vue.ref, Wu = window.Vue.computed, B1 = (e, t, n, s) => {
  const o = P1(0), a = Wu(
    () => t.value > e.value
  ), r = Wu(
    () => t.value <= e.value * (o.value + 1)
  ), l = (d) => {
    o.value = d, n.value.scroll(0, e.value * o.value);
  };
  return {
    handleArrowUpClick: () => {
      if (!s.value) {
        n.value.style.removeProperty("height"), s.value = !0, l(0);
        return;
      }
      l(o.value - 1);
    },
    isScrolledToEnd: r,
    scrollToStepByIndex: l,
    scrollable: a,
    scrollIndex: o
  };
};
const Ea = window.Vue.ref, F1 = window.Vue.onMounted, Ku = window.Vue.computed, N1 = window.Vue.nextTick, M1 = {
  name: "MwExpandableContent",
  components: {
    MwButton: Ge
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
    const t = Ea(!0), n = Ea(null), s = Ku(
      () => Math.min(e.minHeight, o.value)
    ), o = Ea(1), { initiateDrag: a } = D1(
      o,
      s,
      n,
      t
    ), {
      isScrolledToEnd: r,
      scrollable: l,
      scrollIndex: u,
      scrollToStepByIndex: d,
      handleArrowUpClick: i
    } = B1(s, o, n, t), c = () => d(u.value + 1), g = Ea(null), p = Ku(() => ({
      "--collapsed-height": s.value + "px"
    })), m = () => {
      if (!n.value)
        return;
      const f = n.value.style.height;
      if (n.value.style.removeProperty("height"), o.value = n.value.scrollHeight, f) {
        let w = Math.min(f, o.value);
        w = Math.max(w, s.value), w === s.value && (t.value = !0), n.value.style.height = w + "px";
      }
    };
    return F1(() => C(this, null, function* () {
      var f;
      yield N1(), o.value = n.value.scrollHeight, (f = g.value) == null || f.addEventListener(
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
      mwIconCollapse: R0,
      mwIconExpand: E0,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), d(0)), t.value = !t.value;
      },
      scrollable: l,
      scrollIndex: u,
      scrollToNextStep: c
    };
  }
}, U1 = window.Vue.renderSlot, I1 = window.Vue.normalizeClass, La = window.Vue.createElementVNode, R1 = window.Vue.resolveComponent, z1 = window.Vue.createVNode, Vr = window.Vue.openBlock, O1 = window.Vue.createBlock, Yu = window.Vue.createCommentVNode, Qu = window.Vue.createElementBlock, j1 = window.Vue.normalizeStyle, H1 = { class: "mw-ui-expandable-content__container" }, q1 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, G1 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function X1(e, t, n, s, o, a) {
  const r = R1("mw-button");
  return Vr(), Qu("div", {
    class: "mw-ui-expandable-content",
    style: j1(s.cssVars)
  }, [
    La("div", H1, [
      La("div", {
        ref: "contentRef",
        class: I1(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": s.isCollapsed
        }])
      }, [
        U1(e.$slots, "default")
      ], 2),
      n.scroll && s.scrollable ? (Vr(), Qu("div", q1, [
        z1(r, {
          type: "icon",
          icon: s.mwIconCollapse,
          disabled: s.isCollapsed && s.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: s.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        s.isCollapsed ? (Vr(), O1(r, {
          key: 0,
          type: "icon",
          icon: s.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: s.isScrolledToEnd,
          onClick: s.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : Yu("", !0)
      ])) : Yu("", !0)
    ]),
    La("div", G1, [
      La("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...l) => s.onDragButtonClicked && s.onDragButtonClicked(...l))
      })
    ], 512)
  ], 4);
}
const W1 = /* @__PURE__ */ de(M1, [["render", X1]]);
const Ta = window.Vue.computed, K1 = {
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
      default: St.blue600
    },
    inactiveColor: {
      type: String,
      default: St.gray300
    },
    strokeWidth: {
      type: Number,
      default: 2
    }
  },
  setup(e) {
    const t = Ta(() => e.size / 2 * 0.9), n = Ta(() => Math.PI * (t.value * 2)), s = Ta(
      () => (100 - e.percentage) / 100 * n.value
    ), o = Ta(() => ({
      "--active-color": e.activeColor,
      "--inactive-color": e.inactiveColor,
      "--stroke-width": `${e.strokeWidth}px`
    })), a = `M ${e.size} 0 A ${e.size} ${e.size} 0 1 1 19 0`;
    return {
      cssVars: o,
      dashArray: n,
      path: a,
      radius: t,
      strokeDashOffset: s
    };
  }
}, Ju = window.Vue.createElementVNode, Zu = window.Vue.normalizeStyle, Y1 = window.Vue.openBlock, Q1 = window.Vue.createElementBlock, J1 = ["width", "height", "viewport"], Z1 = ["r", "cx", "cy", "stroke-dasharray"], ev = ["r", "cx", "cy", "stroke-dasharray"];
function tv(e, t, n, s, o, a) {
  return Y1(), Q1("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: Zu(s.cssVars)
  }, [
    Ju("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: s.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": s.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, Z1),
    Ju("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: s.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": s.dashArray,
      "stroke-dashoffset": "0",
      style: Zu({ strokeDashoffset: `${s.strokeDashOffset}px` })
    }, null, 12, ev)
  ], 12, J1);
}
const nv = /* @__PURE__ */ de(K1, [["render", tv]]), sv = window.Vue.ref, vn = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, kn = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${vn.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${vn.tablet}px) and (max-width: ${vn.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${vn.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${vn.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${vn["desktop-wide"] - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${vn.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${vn["desktop-wide"]}px)`
}, Er = {
  mobile: () => matchMedia(kn.mobile).matches,
  tablet: () => matchMedia(kn.tablet).matches,
  desktop: () => matchMedia(kn.desktop).matches,
  desktopwide: () => matchMedia(kn["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(kn["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(kn["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(kn["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(kn["desktop-and-down"]).matches
}, ov = (e) => {
  const t = Object.values(vn);
  for (let n = 0; n < t.length; n++)
    if (e < t[n])
      return t[n];
  return null;
}, av = {
  install: (e) => {
    const t = sv({
      nextBreakpoint: null
    }), n = () => {
      const s = window.innerWidth;
      for (let o in Er)
        Er.hasOwnProperty(o) && (t.value[o] = Er[o]());
      t.value.nextBreakpoint = ov(s);
    };
    n(), window.addEventListener("resize", n), e.config.globalProperties.$mwui = tt(pe({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: t.value
    }), e.provide("breakpoints", t);
  }
}, iv = {
  install: (e) => {
    e.config.globalProperties.$mwui = tt(pe({}, e.config.globalProperties.$mwui || {}), {
      colors: St
    }), e.provide("colors", St);
  }
};
class Gs extends Error {
}
const rv = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new Gs();
}), gh = { assertUser: rv };
const lv = window.Vue.resolveDirective, ro = window.Vue.createElementVNode, ed = window.Vue.withDirectives, cv = window.Vue.toDisplayString, uv = window.Vue.unref, td = window.Vue.withCtx, dv = window.Vue.openBlock, gv = window.Vue.createBlock, pv = window.Vue.createCommentVNode, mv = { class: "pa-4 sx-login-dialog__header" }, hv = { class: "sx-login-dialog__body px-6 pb-4" }, fv = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, wv = ["href"], vv = window.Vue.computed, _v = window.Vue.ref, Sv = window.Vuex.useStore, yv = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = Sv(), n = vv(() => t.state.application.isLoginDialogOn), s = () => t.commit("application/setIsLoginDialogOn", !1), o = _v(mw.util.getUrl("Special:UserLogin"));
    return (a, r) => {
      const l = lv("i18n");
      return n.value ? (dv(), gv(uv(Ct), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: s
      }, {
        header: td(() => [
          ro("div", mv, [
            ed(ro("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: td(() => [
          ed(ro("div", hv, null, 512), [
            [l, void 0, "cx-sx-login-dialog-body"]
          ]),
          ro("div", fv, [
            ro("a", {
              class: "py-1",
              href: o.value,
              target: "_blank"
            }, cv(a.$i18n("cx-sx-login-dialog-button-label")), 9, wv)
          ])
        ]),
        _: 1
      })) : pv("", !0);
    };
  }
}, K = new mw.cx.SiteMapper(), xv = mw.util.getUrl, Cv = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const s = JSON.parse(mw.cookie.get("ULSGeo"));
  return s && s.latitude + "|" + s.longitude;
}, Xs = !mw.config.get("wgMFMode");
class Yc {
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
    sourceLanguage: s,
    targetLanguage: o,
    startTimestamp: a,
    lastUpdatedTimestamp: r,
    pageRevision: l,
    status: u,
    targetTitle: d
  }) {
    this.translationId = t, this.sourceTitle = n, this.sourceLanguage = s, this.targetLanguage = o, this.startTimestamp = a, this.lastUpdatedTimestamp = r, this.pageRevision = l, this.status = u, this.targetTitle = d;
  }
}
const Aa = "original", Da = "empty", bv = {
  Elia: "Elia.eus",
  Google: "Google Translate",
  Yandex: "Yandex.Translate"
};
class re {
  /**
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string[]} providers
   */
  constructor(t, n, s = []) {
    this.sourceLanguage = t, this.targetLanguage = n, this.providers = [
      ...s,
      Aa,
      Da
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return bv[t] || t;
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
    return Aa;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return Da;
  }
  static isUserMTProvider(t) {
    return [Aa, Da].includes(
      t
    );
  }
  static getProviderForInstrumentation(t) {
    return t === Da ? "blank" : t === Aa ? "source" : t.toLowerCase();
  }
}
class zn {
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
    translatedContent: s = "",
    node: o = null,
    proposedTranslations: a = {},
    selected: r = !1
  } = {}) {
    this.id = t, this.translatedContent = s, this.mtProviderUsed = "", this.node = o, this.proposedTranslations = tt(pe({}, a), {
      [re.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [re.EMPTY_TEXT_PROVIDER_KEY]: ""
    }), this.selected = r;
  }
  reset() {
    this.proposedTranslations = {
      [re.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalContent,
      [re.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedContent = "", this.mtProviderUsed = "", this.selected = !1;
  }
  /**
   * @return {string}
   */
  get originalContent() {
    return this.proposedTranslations[re.ORIGINAL_TEXT_PROVIDER_KEY];
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
const nd = (e) => {
  var n;
  const t = qi(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, qi = (e) => {
  var n, s, o;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((o = (s = t == null ? void 0 : t.parts) == null ? void 0 : s[0]) == null ? void 0 : o.template) || null;
}, is = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), ph = (e) => {
  const t = qi(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: s } = t;
  if (!s)
    return `{{${n}}}`;
  for (const o in s) {
    const a = kv(s[o].wt);
    n += ` | ${o} = ${a}`;
  }
  return `{{${n}}}`;
}, kv = (e) => {
  let t = e, n = "", s = !1, o = 0, a = 0;
  for (; t.length > 0; ) {
    const r = t.match(
      /(?:\[\[)|(?:\]\])|(?:\{\{)|(?:\}\})|\|+|<\/?nowiki>|<nowiki\s*\/>/
    );
    if (!r) {
      n += t;
      break;
    }
    if (n += t.slice(0, r.index), t = t.slice(r.index + r[0].length), s)
      r[0] === "</nowiki>" && (s = !1), n += r[0];
    else {
      let l = !0;
      r[0] === "<nowiki>" ? (s = !0, l = !1) : r[0] === "</nowiki>" || r[0].match(/<nowiki\s*\/>/) ? l = !1 : r[0].match(/(?:\[\[)/) ? (a++, l = !1) : r[0].match(/(?:\]\])/) ? a > 0 && (a--, l = !1) : r[0].match(/(?:\{\{)/) ? (o++, l = !1) : r[0].match(/(?:\}\})/) ? o > 0 && (o--, l = !1) : r[0].match(/\|+/) && (o > 0 || a > 0) && (l = !1), l ? n += "<nowiki>" + r[0] + "</nowiki>" : n += r[0];
    }
  }
  return n;
}, mh = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, hh = (e) => {
  const t = mh(e);
  return t == null ? void 0 : t.targetExists;
};
class Lr {
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
    content: s,
    validate: o = !1,
    origin: a
  } = {}) {
    this.baseSectionId = t, this.subSectionId = n, this.content = s, this.validate = o, this.origin = a;
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
class lt {
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
    let s = document.createElement("div");
    s.innerHTML = n, s.firstElementChild.getAttribute("rel") === "cx:Section" && (s = s.firstElementChild);
    const o = Array.from(s.children).find(
      (a) => is(a)
    );
    o && hh(o) && (this.blockTemplateAdaptationInfo[t] = mh(o));
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
    ).forEach((s) => {
      const o = this.getSentenceById(s.dataset.segmentid);
      if (o.isTranslated) {
        s.innerHTML = o.translatedContent;
        return;
      }
      s.parentNode.removeChild(s);
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
    ).forEach((s) => {
      const o = this.getSentenceById(s.dataset.segmentid);
      if (o.isTranslated) {
        s.innerHTML = o.mtProposedTranslationUsed;
        return;
      }
      s.parentNode.removeChild(s);
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
      (t) => is(t)
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
    const t = qi(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? nd(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((s) => is(s));
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
    return n && nd(n) || "";
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
    const s = qi(n);
    return (s == null ? void 0 : s.params) || null;
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
   * @param {string} baseSectionId the base section id that will be used as "cxsx_section_id" inside "cx_section_translations"
   * @returns {TranslationUnitPayload[]}
   */
  getParallelCorporaTranslationPayloads(t) {
    const n = this.node.cloneNode(!0);
    n.setAttribute(
      "data-mw-cx-source",
      this.mtProviderUsed
    ), n.innerHTML = this.translatedContent;
    const s = Array.from(n.children).find(
      (a) => is(a)
    );
    this.isBlockTemplate && s && (s.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const o = [
      new Lr({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new Lr({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && o.push(
      new Lr({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.parallelCorporaMTContent,
        origin: this.mtProviderUsed
      })
    ), o;
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
    if (!t || re.isUserMTProvider(t))
      return null;
    if (this.isBlockTemplate) {
      n.innerHTML = this.blockTemplateProposedTranslations[t];
      const s = Array.from(n.children).find(
        (o) => is(o)
      );
      s && (s.dataset.cx = JSON.stringify([
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
const Qc = mw.config.get(
  "wgContentTranslationUnmodifiedMTThresholdForPublish",
  95
), $v = Qc - 10, Vv = [
  { status: "failure", value: 100 - Qc },
  { status: "warning", value: 100 - $v },
  { status: "success", value: 100 }
], fh = (e, t, n) => {
  const s = sd(e).textContent, o = sd(t).textContent, a = 100 - 100 * mw.cx.calculateUnmodifiedContent(o, s, n);
  return Math.ceil(a);
}, Ev = (e) => Vv.find((t) => e <= t.value).status, Lv = (e, t) => fh(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), Tv = () => (100 - Qc) / 100, sd = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, Zt = {
  calculateScore: fh,
  getScoreStatus: Ev,
  getMTScoreForPageSection: Lv,
  getMtModificationThreshold: Tv
}, Pa = "__LEAD_SECTION__";
class Os {
  /**
   * Creates an instance of PageSection.
   * @param {Object} options
   * @param {string} [options.id]
   * @param {boolean} [options.isLeadSection]
   * @param {SubSection[]} [options.subSections]
   */
  constructor({
    id: t,
    subSections: n = [],
    isLeadSection: s = !1,
    isTitleSelected: o = !1
  } = {}) {
    this.id = t, this.proposedTitleTranslations = {
      [re.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.mtProviderUsedForTitle = "", this.translatedTitle = "", this.subSections = n, this.isLeadSection = s, this.isTitleSelected = o;
  }
  /**
   * @param {SubSection[]} updatedSubSections
   */
  updateSubSections(t) {
    for (const n of t) {
      const s = this.subSections.find(
        (o) => o.id === n.id
      );
      if (!s)
        return;
      s.node = n.node, s.sentences = n.sentences;
    }
  }
  reset() {
    this.proposedTitleTranslations = {
      [re.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalTitle,
      [re.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedTitle = "", this.subSections.forEach((t) => t.reset());
  }
  static get LEAD_SECTION_DUMMY_TITLE() {
    return Pa;
  }
  static isSectionLead(t) {
    return !t || t === Pa;
  }
  set originalTitle(t) {
    this.proposedTitleTranslations[re.ORIGINAL_TEXT_PROVIDER_KEY] = t;
  }
  /**
   * @return {string}
   */
  get originalTitle() {
    return this.proposedTitleTranslations[re.ORIGINAL_TEXT_PROVIDER_KEY];
  }
  get mtProposedTranslationUsedForTitle() {
    var s;
    const t = this.subSections.filter(
      (o) => o.isTranslated
    ), n = this.mtProviderUsedForTitle || ((s = t == null ? void 0 : t[0]) == null ? void 0 : s.mtProviderUsed);
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
    const s = Array.from(n.children), o = (a) => s.find(
      (r) => r.id === a.targetSectionId
    );
    this.subSections.forEach((a) => {
      const r = o(a);
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
    return n instanceof lt ? n.transclusionNode.outerHTML : n instanceof zn ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof lt ? t.blockTemplateSelected = !1 : t instanceof zn && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof lt ? n.blockTemplateSelected = !0 : n instanceof zn && (n.selected = !0);
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
    const s = this.getContentTranslationUnitById(t);
    if (s instanceof lt)
      return !!s.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (s instanceof zn)
      return s.proposedTranslations.hasOwnProperty(n);
  }
  /**
   * Given an MT provider, this method returns the proposed translation for the
   * currently selected translation unit (title/block template/sentence).
   * @param {string} mtProvider
   * @returns {string|null}
   */
  getProposedTranslationByMtProvider(t) {
    const n = this.selectedContentTranslationUnit;
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof lt ? n.blockTemplateProposedTranslations[t] || "" : n instanceof zn ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof lt ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof zn && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const s = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, o = Zt.getMTScoreForPageSection(this, t) / 100;
    return { any: s, mt: 1 - o, human: o };
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
    return this.isLeadSection ? Pa : this.originalTitle;
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
    return this.isLeadSection ? Pa : this.title;
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
      (n, s) => [
        ...n,
        ...s.getParallelCorporaTranslationPayloads(t)
      ],
      []
    );
  }
}
class Qi extends Yc {
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
    sectionId: s,
    sourceTitle: o,
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
      sourceTitle: o,
      sourceLanguage: a,
      targetLanguage: r,
      startTimestamp: l,
      lastUpdatedTimestamp: u,
      pageRevision: i,
      status: d,
      targetTitle: c
    }), this.sectionTranslationId = t, this.sectionId = s, this.sourceSectionTitle = g, this.targetSectionTitle = p, this.progress = m, this.restored = !1;
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
    return Os.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? Os.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const en = "previous-edits", yn = "popular", Xe = "topic", Ee = "geography", ee = "collections", Ye = "automatic", yt = "seed", od = window.Vue.ref, { topics: Av, regions: Dv } = mw.loader.require(
  "ext.cx.articlefilters"
), Ba = {
  type: Ye,
  id: en
}, Jc = () => {
  const e = od(
    Av.flatMap((l) => l.topics).map((l) => l.topicId.toLowerCase())
  ), t = od(!1), n = (l, u) => e.value.includes(u) ? { type: Xe, id: u } : null, s = (l, u) => Dv.some(
    (i) => i.id.toLowerCase() === u || i.countries.some(
      (c) => c.id.toLowerCase() === u
    )
  ) ? { type: Ee, id: u } : null, o = (l, u, d) => d && !d.some((i) => i.name.toLowerCase() === u) ? null : { type: ee, id: l };
  return { filtersValidatorError: t, validateFilters: ({ type: l, id: u }, d = !1) => {
    t.value = !1;
    const i = l == null ? void 0 : l.toLowerCase(), c = u == null ? void 0 : u.toLowerCase();
    if (c === en)
      return {
        type: Ye,
        id: en
      };
    if (c === yn)
      return {
        type: Ye,
        id: yn
      };
    if (c === ee)
      return d && !d.length ? (t.value = !0, Ba) : {
        type: Ye,
        id: ee
      };
    if (i === Xe) {
      const g = n(u, c);
      if (g)
        return g;
      t.value = !0;
    } else if (i === Ee) {
      const g = s(u, c);
      if (g)
        return g;
      t.value = !0;
    } else if (i === ee) {
      const g = o(
        u,
        c,
        d
      );
      if (g)
        return g;
      t.value = !0;
    } else if (i === yt)
      return { type: yt, id: u };
    return Ba;
  }, isDefaultFilter: ({ type: l, id: u }) => l === Ba.type && u === Ba.id };
}, Pv = window.Vue.inject, Bv = window.Vue.reactive;
var Fv = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, wh = { exports: {} };
(function(e, t) {
  (function(n, s) {
    e.exports = s();
  })(Fv, function() {
    var n = { ar: "٠١٢٣٤٥٦٧٨٩", fa: "۰۱۲۳۴۵۶۷۸۹", ml: "൦൧൨൩൪൫൬൭൮൯", kn: "೦೧೨೩೪೫೬೭೮೯", lo: "໐໑໒໓໔໕໖໗໘໙", or: "୦୧୨୩୪୫୬୭୮୯", kh: "០១២៣៤៥៦៧៨៩", nqo: "߀߁߂߃߄߅߆߇߈߉", pa: "੦੧੨੩੪੫੬੭੮੯", gu: "૦૧૨૩૪૫૬૭૮૯", hi: "०१२३४५६७८९", my: "၀၁၂၃၄၅၆၇၈၉", ta: "௦௧௨௩௪௫௬௭௮௯", te: "౦౧౨౩౪౫౬౭౮౯", th: "๐๑๒๓๔๕๖๗๘๙", bo: "༠༡༢༣༤༥༦༧༨༩" }, s = { ab: ["ru"], abs: ["id"], ace: ["id"], ady: ["ady-cyrl"], aeb: ["aeb-arab"], "aeb-arab": ["ar"], aln: ["sq"], alt: ["ru"], ami: ["zh-hant"], an: ["es"], anp: ["hi"], arn: ["es"], arq: ["ar"], ary: ["ar"], arz: ["ar"], ast: ["es"], atj: ["fr"], av: ["ru"], avk: ["fr", "es", "ru"], awa: ["hi"], ay: ["es"], azb: ["fa"], ba: ["ru"], ban: ["id"], "ban-bali": ["ban"], bar: ["de"], bbc: ["bbc-latn"], "bbc-latn": ["id"], bcc: ["fa"], "be-tarask": ["be"], bgn: ["fa"], bh: ["bho"], bi: ["en"], bjn: ["id"], bm: ["fr"], bpy: ["bn"], bqi: ["fa"], br: ["fr"], btm: ["id"], bug: ["id"], bxr: ["ru"], ca: ["oc"], "cbk-zam": ["es"], cdo: ["nan", "zh-hant"], ce: ["ru"], co: ["it"], crh: ["crh-latn"], "crh-cyrl": ["ru"], cs: ["sk"], csb: ["pl"], cv: ["ru"], "de-at": ["de"], "de-ch": ["de"], "de-formal": ["de"], dsb: ["hsb", "de"], dtp: ["ms"], dty: ["ne"], egl: ["it"], eml: ["it"], "en-ca": ["en"], "en-gb": ["en"], "es-419": ["es"], "es-formal": ["es"], ext: ["es"], ff: ["fr"], fit: ["fi"], frc: ["fr"], frp: ["fr"], frr: ["de"], fur: ["it"], gag: ["tr"], gan: ["gan-hant", "zh-hant", "zh-hans"], "gan-hans": ["zh-hans"], "gan-hant": ["zh-hant", "zh-hans"], gcr: ["fr"], gl: ["pt"], glk: ["fa"], gn: ["es"], gom: ["gom-deva"], "gom-deva": ["hi"], gor: ["id"], gsw: ["de"], guc: ["es"], hak: ["zh-hant"], hif: ["hif-latn"], hrx: ["de"], hsb: ["dsb", "de"], ht: ["fr"], "hu-formal": ["hu"], hyw: ["hy"], ii: ["zh-cn", "zh-hans"], inh: ["ru"], io: ["eo"], iu: ["ike-cans"], jam: ["en"], jut: ["da"], jv: ["id"], kaa: ["kk-latn", "kk-cyrl"], kab: ["fr"], kbd: ["kbd-cyrl"], kbp: ["fr"], khw: ["ur"], kiu: ["tr"], kjp: ["my"], kk: ["kk-cyrl"], "kk-arab": ["kk-cyrl"], "kk-cn": ["kk-arab", "kk-cyrl"], "kk-kz": ["kk-cyrl"], "kk-latn": ["kk-cyrl"], "kk-tr": ["kk-latn", "kk-cyrl"], kl: ["da"], "ko-kp": ["ko"], koi: ["ru"], krc: ["ru"], krl: ["fi"], ks: ["ks-arab"], ksh: ["de"], ku: ["ku-latn"], "ku-arab": ["ckb"], kum: ["ru"], kv: ["ru"], lad: ["es"], lb: ["de"], lbe: ["ru"], lez: ["ru", "az"], li: ["nl"], lij: ["it"], liv: ["et"], lki: ["fa"], lld: ["it", "rm", "fur"], lmo: ["pms", "eml", "lij", "vec", "it"], ln: ["fr"], lrc: ["fa"], ltg: ["lv"], luz: ["fa"], lzh: ["zh-hant"], lzz: ["tr"], mad: ["id"], mai: ["hi"], "map-bms": ["jv", "id"], mdf: ["myv", "ru"], mg: ["fr"], mhr: ["mrj", "ru"], min: ["id"], mnw: ["my"], mo: ["ro"], mrj: ["mhr", "ru"], "ms-arab": ["ms"], mwl: ["pt"], myv: ["mdf", "ru"], mzn: ["fa"], nah: ["es"], nan: ["cdo", "zh-hant"], nap: ["it"], nb: ["nn"], nds: ["de"], "nds-nl": ["nl"], nia: ["id"], "nl-informal": ["nl"], nn: ["nb"], nrm: ["fr"], oc: ["ca", "fr"], olo: ["fi"], os: ["ru"], pcd: ["fr"], pdc: ["de"], pdt: ["de"], pfl: ["de"], pih: ["en"], pms: ["it"], pnt: ["el"], pt: ["pt-br"], "pt-br": ["pt"], qu: ["qug", "es"], qug: ["qu", "es"], rgn: ["it"], rmy: ["ro"], "roa-tara": ["it"], rue: ["uk", "ru"], rup: ["ro"], ruq: ["ruq-latn", "ro"], "ruq-cyrl": ["mk"], "ruq-latn": ["ro"], sa: ["hi"], sah: ["ru"], scn: ["it"], sco: ["en"], sdc: ["it"], sdh: ["cbk", "fa"], ses: ["fr"], sg: ["fr"], sgs: ["lt"], sh: ["bs", "sr-el", "hr"], shi: ["fr"], shy: ["shy-latn"], "shy-latn": ["fr"], sk: ["cs"], skr: ["skr-arab"], "skr-arab": ["ur", "pnb"], sli: ["de"], smn: ["fi"], sr: ["sr-ec"], srn: ["nl"], stq: ["de"], sty: ["ru"], su: ["id"], szl: ["pl"], szy: ["zh-tw", "zh-hant", "zh-hans"], tay: ["zh-tw", "zh-hant", "zh-hans"], tcy: ["kn"], tet: ["pt"], tg: ["tg-cyrl"], trv: ["zh-tw", "zh-hant", "zh-hans"], tt: ["tt-cyrl", "ru"], "tt-cyrl": ["ru"], ty: ["fr"], tyv: ["ru"], udm: ["ru"], ug: ["ug-arab"], vec: ["it"], vep: ["et"], vls: ["nl"], vmf: ["de"], vot: ["fi"], vro: ["et"], wa: ["fr"], wo: ["fr"], wuu: ["zh-hans"], xal: ["ru"], xmf: ["ka"], yi: ["he"], za: ["zh-hans"], zea: ["nl"], zgh: ["kab"], zh: ["zh-hans"], "zh-cn": ["zh-hans"], "zh-hant": ["zh-hans"], "zh-hk": ["zh-hant", "zh-hans"], "zh-mo": ["zh-hk", "zh-hant", "zh-hans"], "zh-my": ["zh-sg", "zh-hans"], "zh-sg": ["zh-hans"], "zh-tw": ["zh-hant", "zh-hans"] };
    class o {
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
          const f = [...s[this.locale] || [], "en"];
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
    var a = { bs: class extends o {
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
    }, default: o, dsb: class extends o {
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
    }, fi: class extends o {
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
    }, ga: class extends o {
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
    }, he: class extends o {
      convertGrammar(i, c) {
        switch (c) {
          case "prefixed":
          case "תחילית":
            i.slice(0, 1) === "ו" && i.slice(0, 2) !== "וו" && (i = "ו" + i), i.slice(0, 1) === "ה" && (i = i.slice(1)), (i.slice(0, 1) < "א" || i.slice(0, 1) > "ת") && (i = "־" + i);
        }
        return i;
      }
    }, hsb: class extends o {
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
    }, hu: class extends o {
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
    }, hy: class extends o {
      convertGrammar(i, c) {
        return c === "genitive" && (i.slice(-1) === "ա" ? i = i.slice(0, -1) + "այի" : i.slice(-1) === "ո" ? i = i.slice(0, -1) + "ոյի" : i.slice(-4) === "գիրք" ? i = i.slice(0, -4) + "գրքի" : i += "ի"), i;
      }
    }, la: class extends o {
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
    }, os: class extends o {
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
    }, ru: class extends o {
      convertGrammar(i, c) {
        return c === "genitive" && (i.slice(-1) === "ь" ? i = i.slice(0, -1) + "я" : i.slice(-2) === "ия" ? i = i.slice(0, -2) + "ии" : i.slice(-2) === "ка" ? i = i.slice(0, -2) + "ки" : i.slice(-2) === "ти" ? i = i.slice(0, -2) + "тей" : i.slice(-2) === "ды" ? i = i.slice(0, -2) + "дов" : i.slice(-3) === "ник" && (i = i.slice(0, -3) + "ника")), i;
      }
    }, sl: class extends o {
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
    }, uk: class extends o {
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
                for (let O = 0; O < V.length; O++) {
                  const Ne = V[O]();
                  if (Ne !== null)
                    return Ne;
                }
                return null;
              };
            }
            function v(V) {
              const O = f, Ne = [];
              for (let G = 0; G < V.length; G++) {
                const ze = V[G]();
                if (ze === null)
                  return f = O, null;
                Ne.push(ze);
              }
              return Ne;
            }
            function y(V, O) {
              return () => {
                const Ne = f, G = [];
                let ze = O();
                for (; ze !== null; )
                  G.push(ze), ze = O();
                return G.length < V ? (f = Ne, null) : G;
              };
            }
            function S(V) {
              const O = V.length;
              return () => {
                let Ne = null;
                return m.slice(f, f + O) === V && (Ne = V, f += O), Ne;
              };
            }
            function b(V) {
              return () => {
                const O = m.slice(f).match(V);
                return O === null ? null : (f += O[0].length, O[0]);
              };
            }
            const E = b(/^\s+/), x = S("|"), I = S(":"), L = S("\\"), P = b(/^./), H = S("$"), se = b(/^\d+/), ae = S('"'), te = S("'"), R = b(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), J = b(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), oe = w([le, b(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function le() {
              const V = v([L, P]);
              return V === null ? null : V[1];
            }
            const ke = w([le, J]), We = w([le, R]);
            function Pe() {
              const V = v([H, se]);
              return V === null ? null : ["REPLACE", parseInt(V[1], 10) - 1];
            }
            const Z = (U = b(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), B = function(V) {
              return V.toString();
            }, () => {
              const V = U();
              return V === null ? null : B(V);
            });
            var U, B;
            function M() {
              const V = v([x, y(0, ms)]);
              if (V === null)
                return null;
              const O = V[1];
              return O.length > 1 ? ["CONCAT"].concat(O) : O[0];
            }
            function Y() {
              const V = v([Z, I, Pe]);
              return V === null ? null : [V[0], V[2]];
            }
            function _() {
              const V = v([Z, I, ms]);
              return V === null ? null : [V[0], V[2]];
            }
            function T() {
              const V = v([Z, I]);
              return V === null ? null : [V[0], ""];
            }
            const A = w([function() {
              const V = v([w([Y, _, T]), y(0, M)]);
              return V === null ? null : V[0].concat(V[1]);
            }, function() {
              const V = v([Z, y(0, M)]);
              return V === null ? null : [V[0]].concat(V[1]);
            }]), F = S("{{"), X = S("}}"), ge = S("[["), q = S("]]"), z = S("["), ie = S("]");
            function et() {
              const V = v([F, A, X]);
              return V === null ? null : V[1];
            }
            const $e = w([function() {
              const V = v([y(1, ms), x, y(1, ps)]);
              return V === null ? null : [["CONCAT"].concat(V[0]), ["CONCAT"].concat(V[2])];
            }, function() {
              const V = v([y(1, ms)]);
              return V === null ? null : [["CONCAT"].concat(V[0])];
            }]);
            function ya() {
              let V = null;
              const O = v([ge, $e, q]);
              if (O !== null) {
                const Ne = O[1];
                V = ["WIKILINK"].concat(Ne);
              }
              return V;
            }
            function gs() {
              let V = null;
              const O = v([z, y(1, pr), E, y(1, ps), ie]);
              return O !== null && (V = ["EXTLINK", O[1].length === 1 ? O[1][0] : ["CONCAT"].concat(O[1]), ["CONCAT"].concat(O[3])]), V;
            }
            const to = b(/^[A-Za-z]+/);
            function dr() {
              const V = b(/^[^"]*/), O = v([ae, V, ae]);
              return O === null ? null : O[1];
            }
            function no() {
              const V = b(/^[^']*/), O = v([te, V, te]);
              return O === null ? null : O[1];
            }
            function so() {
              const V = b(/^\s*=\s*/), O = v([E, to, V, w([dr, no])]);
              return O === null ? null : [O[1], O[3]];
            }
            function gr() {
              const V = y(0, so)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], V);
            }
            const pr = w([et, Pe, ya, gs, function() {
              const V = y(1, oe)();
              return V === null ? null : V.join("");
            }]), ps = w([et, Pe, ya, gs, function() {
              let V = null;
              const O = f, Ne = S("<"), G = b(/^\/?/), ze = b(/^\s*>/), tn = v([Ne, to, gr, G, ze]);
              if (tn === null)
                return null;
              const gt = f, oo = tn[1], ao = y(0, ps)(), Qf = f, Eu = v([S("</"), to, ze]);
              if (Eu === null)
                return ["CONCAT", m.slice(O, gt)].concat(ao);
              const Jf = f, Zf = Eu[1], Lu = tn[2];
              if (function(Gn, Ca, mr, hr = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((Gn = Gn.toLowerCase()) !== (Ca = Ca.toLowerCase()) || hr.allowedHtmlElements.indexOf(Gn) === -1)
                  return !1;
                const ew = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let ba = 0, tw = mr.length; ba < tw; ba += 2) {
                  const fr = mr[ba];
                  if (hr.allowedHtmlCommonAttributes.indexOf(fr) === -1 && (hr.allowedHtmlAttributesByElement[Gn] || []).indexOf(fr) === -1 || fr === "style" && mr[ba + 1].search(ew) !== -1)
                    return !1;
                }
                return !0;
              }(oo, Zf, Lu.slice(1)))
                V = ["HTMLELEMENT", oo, Lu].concat(ao);
              else {
                const Gn = (Ca) => Ca.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                V = ["CONCAT", Gn(m.slice(O, gt))].concat(ao, Gn(m.slice(Qf, Jf)));
              }
              return V;
            }, function() {
              const V = y(1, We)();
              return V === null ? null : V.join("");
            }]), ms = w([et, Pe, function() {
              const V = y(1, ke)();
              return V === null ? null : V.join("");
            }]), xa = function() {
              const V = y(0, ps)();
              return V === null ? null : ["CONCAT"].concat(V);
            }();
            if (xa === null || f !== m.length)
              throw new Error("Parse error at position " + f.toString() + " in input: " + m);
            return xa;
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
        return [...s[this.locale] || [], this.finalFallback];
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
})(wh);
var Nv = wh.exports;
const ad = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, vh = Symbol("banana-context");
function we() {
  const e = Pv(vh);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function Mv(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = Bv(new Nv(e.locale, e));
  return {
    install: (n) => {
      n.provide(vh, t), n.config.globalProperties.$i18n = (s, o) => (o = o || [], Array.isArray(o) || (o = [o]), t.i18n(s, ...o)), n.provide("setLocale", (s) => {
        t.setLocale(s);
      }), n.directive("i18n", (s, o) => {
        const { msg: a, params: r } = ad(o);
        o.modifiers.html ? s.innerHTML = t.i18n(a, ...r) : s.textContent = t.i18n(a, ...r);
      }), n.directive("i18n-html", (s, o) => {
        const { msg: a, params: r } = ad(o);
        s.innerHTML = t.i18n(a, ...r);
      });
    }
  };
}
const Cn = window.Vue.ref, Uv = window.Vue.computed, Ji = Cn(null), Zi = Cn(null), er = Cn(null), ma = Cn(null), Zc = Cn(null), tr = Cn(null), _h = Cn(null), Sh = Cn(null), eu = Cn(null), { validateFilters: Iv, filtersValidatorError: Rv } = Jc(), yh = {
  from: Ji,
  to: Zi,
  section: ma,
  draft: Zc,
  page: er,
  revision: tr,
  "active-list": eu
}, zv = Uv(() => ({
  type: _h.value,
  id: Sh.value
})), xh = (e, t) => {
  _h.value = e, Sh.value = t, Gi("filter-type", e), t && Gi("filter-id", t);
}, Ov = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  e instanceof Qi && (n.draft = !0, n.revision = e.pageRevision, e.isLeadSectionTranslation || (n.section = e.sourceSectionTitle));
  for (const s in n) {
    const o = n[s];
    t.set(s, o), yh[s].value = o;
  }
  t.delete("title"), ha(Object.fromEntries(t));
}, tu = (e, t) => {
  yh[e].value = t, Gi(e, t);
}, jv = (e) => {
  tu("section", e);
}, Hv = (e) => {
  tu("page", e);
}, qv = (e) => {
  tu("active-list", e);
}, ha = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    xv(`Special:ContentTranslation${t}`, e)
  );
}, Gv = () => {
  const e = we(), t = new URLSearchParams(location.search);
  er.value = t.get("page"), Ji.value = t.get("from"), Zi.value = t.get("to"), ma.value = t.get("section"), tr.value = t.get("revision"), eu.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
  const n = Iv({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  xh(n.type, n.id), Rv.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, Xv = () => {
  const e = new URLSearchParams(location.search);
  ma.value = null, e.delete("section"), e.delete("title"), ha(Object.fromEntries(e));
}, Gi = (e, t) => {
  const n = new URLSearchParams(location.search);
  t == null ? n.delete(e) : n.set(e, t), n.delete("title"), ha(Object.fromEntries(n));
}, Wv = (e) => new URLSearchParams(location.search).get(e), Kv = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), Ji.value = e, Zi.value = t, n.delete("title"), ha(Object.fromEntries(n));
}, Yv = () => {
  const e = new URLSearchParams(location.search);
  er.value = null, ma.value = null, Zc.value = null, tr.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("revision"), e.delete("title"), ha(Object.fromEntries(e));
}, Qv = () => new URLSearchParams(location.search).get("force-quick-tutorial"), D = () => ({
  isQuickTutorialForced: Qv,
  setLanguageURLParams: Kv,
  setSectionURLParam: jv,
  setTranslationURLParams: Ov,
  initializeURLState: Gv,
  clearTranslationURLParameters: Yv,
  clearSectionURLParameter: Xv,
  setUrlParam: Gi,
  getUrlParam: Wv,
  pageURLParameter: er,
  sourceLanguageURLParameter: Ji,
  targetLanguageURLParameter: Zi,
  sectionURLParameter: ma,
  draftURLParameter: Zc,
  revisionURLParameter: tr,
  setPageURLParam: Hv,
  currentSuggestionFilters: zv,
  setFilterURLParams: xh,
  activeDashboardTabParameter: eu,
  setActiveDashboardTabParameter: qv
}), Jv = () => K.getLanguagePairs();
function Zv(e, t) {
  return C(this, null, function* () {
    const n = K.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((s) => s.json()).then(
      (s) => Object.freeze(
        new re(e, t, s.mt)
      )
    );
  });
}
function e_() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function t_(e, t, n, s) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const o = mw.config.get("wgWikiID"), a = K.getWikiDomainCode(e), r = K.getWikiDomainCode(t), l = {
    action: "wblinktitles",
    fromsite: o.replace(r, a),
    fromtitle: n,
    tosite: o,
    totitle: s
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
const nr = {
  fetchSupportedLanguageCodes: Jv,
  fetchSupportedMTProviders: Zv,
  fetchCXServerToken: e_,
  addWikibaseLink: t_
}, nu = window.Vue.ref, id = nu([]), rd = nu([]), ld = nu(!1);
function fa() {
  return {
    fetchSupportedLanguageCodes: () => C(this, null, function* () {
      if (!ld.value) {
        ld.value = !0;
        const t = yield nr.fetchSupportedLanguageCodes();
        id.value = t.sourceLanguages, rd.value = t.targetLanguages;
      }
    }),
    supportedSourceLanguageCodes: id,
    supportedTargetLanguageCodes: rd
  };
}
const n_ = {
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
}, s_ = {
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
}, o_ = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], a_ = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, i_ = {
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
}, r_ = {
  languages: n_,
  scriptgroups: s_,
  rtlscripts: o_,
  regiongroups: a_,
  territories: i_
};
var Re = r_;
function wa(e) {
  return !!Re.languages[e];
}
function qn(e) {
  return wa(e) && Re.languages[e].length === 1 ? Re.languages[e][0] : !1;
}
function l_() {
  return Re.languages;
}
function va(e) {
  var t = qn(e);
  return t ? va(t) : wa(e) ? Re.languages[e][0] : "Zyyy";
}
function su(e) {
  var t = qn(e);
  return t ? su(t) : wa(e) && Re.languages[e][1] || "UNKNOWN";
}
function ua(e) {
  var t = qn(e);
  return t ? ua(t) : wa(e) && Re.languages[e][2] || e;
}
function c_() {
  var e, t = {};
  for (e in Re.languages)
    qn(e) || (t[e] = ua(e));
  return t;
}
function Ch(e) {
  var t, n, s = [];
  for (t in Re.languages)
    if (!qn(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === va(t)) {
          s.push(t);
          break;
        }
    }
  return s;
}
function u_(e) {
  return Ch([e]);
}
function bh(e) {
  var t;
  for (t in Re.scriptgroups)
    if (Re.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function ou(e) {
  return bh(va(e));
}
function kh(e) {
  var t = {}, n, s, o, a;
  for (s = 0; s < e.length; s++)
    n = e[s], o = qn(n) || n, a = ou(o), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function $h(e) {
  var t, n, s, o = {};
  for (t in Re.languages)
    if (!qn(t)) {
      for (n = 0; n < e.length; n++)
        if (su(t).includes(e[n])) {
          s = ou(t), o[s] === void 0 && (o[s] = []), o[s].push(t);
          break;
        }
    }
  return o;
}
function d_(e) {
  return $h([e]);
}
function g_(e) {
  var t, n, s, o = [];
  for (t = kh(e), n = Object.keys(t).sort(), s = 0; s < n.length; s++)
    o = o.concat(t[n[s]]);
  return o;
}
function p_(e, t) {
  var n = ua(e) || e, s = ua(t) || t;
  return n.toLowerCase() < s.toLowerCase() ? -1 : 1;
}
function Vh(e) {
  return Re.rtlscripts.includes(va(e));
}
function m_(e) {
  return Vh(e) ? "rtl" : "ltr";
}
function h_(e) {
  return Re.territories[e] || [];
}
function f_(e, t) {
  t.target ? Re.languages[e] = [t.target] : Re.languages[e] = [t.script, t.regions, t.autonym];
}
var j = {
  addLanguage: f_,
  getAutonym: ua,
  getAutonyms: c_,
  getDir: m_,
  getGroupOfScript: bh,
  getLanguages: l_,
  getLanguagesByScriptGroup: kh,
  getLanguagesByScriptGroupInRegion: d_,
  getLanguagesByScriptGroupInRegions: $h,
  getLanguagesInScript: u_,
  getLanguagesInScripts: Ch,
  getLanguagesInTerritory: h_,
  getRegions: su,
  getScript: va,
  getScriptGroupOfLanguage: ou,
  isKnown: wa,
  isRedirect: qn,
  isRtl: Vh,
  sortByScriptGroup: g_,
  sortByAutonym: p_
};
const hs = window.Vue.computed;
function Le(e) {
  const t = hs(() => e.state.application.sourceLanguage), n = hs(() => e.state.application.targetLanguage), s = hs(
    () => e.state.application.currentMTProvider
  ), o = hs(
    () => j.getAutonym(t.value)
  ), a = hs(
    () => j.getAutonym(n.value)
  ), r = hs(() => e.state.application.previousRoute);
  return {
    currentMTProvider: s,
    previousRoute: r,
    sourceLanguage: t,
    sourceLanguageAutonym: o,
    targetLanguage: n,
    targetLanguageAutonym: a
  };
}
class Ws {
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
    lastrevid: s,
    original: o = null,
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
    this.language = l, this.title = c, this.pageId = r, this.description = t, this.image = o, this.imageName = a, this.pageprops = u, this.pageviews = d, this.thumbnail = i, this.langLinksCount = n, this.articleSize = (f = g == null ? void 0 : g[0]) == null ? void 0 : f.size, this.revision = s, this.alias = p, this.wikidataId = u == null ? void 0 : u.wikibase_item, this.content = m, this.sections = h;
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
      const s = this.sections.find(
        (o) => o.id === n.id
      );
      if (!s)
        return;
      s.updateSubSections(n.subSections);
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
    const n = this.thumbnail.source, s = new RegExp(
      `/\\d+px-${this.imageName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`
    );
    return n.replace(s, `/${t}px-${this.imageName}`);
  }
}
class w_ {
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
    return (n = this.titles.find((s) => s.lang === t)) == null ? void 0 : n.title;
  }
  /**
   * @param {string} language
   * @return {boolean}
   */
  hasLanguage(t) {
    return this.titles.some((n) => n.lang === t);
  }
}
function v_() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const __ = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), v_();
  const s = new ve.init.mw.MobileArticleTarget(n), o = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = s.createSurface(o);
  return a.setReadOnly(!0), s.surfaces.push(a), s.setSurface(a), a.initialize(), a;
}, S_ = (e, t) => {
  let n, s;
  return t ? (n = __(e), s = n.$element.find(
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
  }), n.destroy()) : s = $(e).filter("section[rel='cx:Section']"), s;
}, y_ = (e, t) => {
  const n = Array.from(
    S_(e, t)
  );
  return x_(n).map(
    /**
     * @param {Node[]} sectionNodes
     * @return {PageSection}
     */
    (o) => {
      const [a, ...r] = o;
      let l;
      const u = a.dataset.mwSectionNumber;
      a.querySelector("h2") ? l = !1 : (l = !0, r.unshift(a));
      const d = r.map(
        /**
         * @param {Node} node
         * @return {SubSection}
         */
        (i) => new lt({
          sentences: C_(i),
          node: i
        })
      );
      return new Os({ id: u, subSections: d, isLeadSection: l });
    }
  );
}, x_ = (e) => {
  const t = e.reduce((n, s) => {
    const o = s.dataset.mwSectionNumber;
    return n[o] = n[o] ? [...n[o], s] : [s], n;
  }, {});
  return Object.values(t);
}, C_ = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new zn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), Eh = {
  convertSegmentedContentToPageSections: y_
}, au = 120, b_ = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: au,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return K.getApi(e).get(n).then((o) => {
    const a = o.query.pages, l = (o.query.redirects || []).reduce(
      (i, c) => tt(pe({}, i), { [c.to]: c.from }),
      {}
    ), d = (o.query.normalized || []).reduce(
      (i, c) => tt(pe({}, i), {
        [c.to]: c.from
      }),
      {}
    );
    return a.map((i) => {
      const c = d[i.title] || l[i.title] || null;
      return new Ws(tt(pe({}, i), { _alias: c }));
    });
  });
}, k_ = (e, t) => {
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
  return K.getApi(e).get(n).then((o) => {
    var u, d;
    const a = o.query.pages;
    if (!a || !a.length || (u = a[0]) != null && u.missing)
      return null;
    const r = [{ lang: e, title: t }, ...a[0].langlinks || []], l = (d = a[0].pageprops) == null ? void 0 : d.wikibase_item;
    return l ? Object.freeze(new w_(l, r)) : null;
  });
}, $_ = (e, t, n) => {
  const s = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "langlinks",
    titles: n.join("|"),
    lllang: t,
    origin: "*",
    redirects: !0
  };
  return K.getApi(e).get(s).then((a) => Object.values(a.query.pages).map((l) => {
    var u, d;
    return (d = (u = l.langlinks) == null ? void 0 : u[0]) == null ? void 0 : d["*"];
  }).filter((l) => !!l));
}, V_ = (e, t, n, s = null) => {
  const o = new Promise((r) => {
    const l = {
      action: "parse",
      page: n,
      meta: "siteinfo",
      prop: "sections",
      format: "json",
      redirects: !0,
      formatversion: 2
    };
    K.getApi(e).get(l).then((d) => {
      var i;
      return r(((i = d == null ? void 0 : d.parse) == null ? void 0 : i.sections) || []);
    }).fail(() => r([]));
  }).then(
    (r) => r.filter((l) => l.toclevel === 1).map((l) => ({
      title: l.line,
      id: l.number
    }))
  ), a = E_(
    e,
    t,
    n,
    s
  );
  return Promise.all([a, o]).then(
    ([r, l]) => {
      const u = Eh.convertSegmentedContentToPageSections(
        r,
        !1
        // No need to resolve references. Content can be used as it is
      );
      return u.forEach((d) => {
        const i = l.find((c) => c.id === d.id);
        d.originalTitle = (i == null ? void 0 : i.title) || "";
      }), new Ws({
        sections: u,
        content: r,
        pagelanguage: e,
        title: n
      });
    }
  );
}, E_ = (e, t, n, s = null) => {
  const o = K.getWikiDomainCode(e), a = K.getWikiDomainCode(t), r = {
    $sourcelanguage: o,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let l = "/page/$sourcelanguage/$targetlanguage/$title";
  s && (r.$revision = s, l += "/$revision");
  const u = K.getCXServerUrl(
    l,
    r
  );
  return fetch(u).then((d) => d.json()).then((d) => d.segmentedContent);
}, L_ = (e) => {
  const t = Cv();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: au,
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
  return new Promise((s) => {
    K.getApi(e).get(n).then((a) => {
      var r;
      return s(((r = a == null ? void 0 : a.query) == null ? void 0 : r.pages) || []);
    }).fail(() => s([]));
  }).then((s) => s.map((o) => new Ws(o)));
}, T_ = (e, t) => {
  const s = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: au,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return K.getApi(t).get(s).then((o) => {
    var a;
    return ((a = o.query) == null ? void 0 : a.pages) || [];
  }).then(
    (o) => o.sort((a, r) => a.index - r.index).map(
      (a) => new Ws(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((o) => []);
}, cs = {
  fetchPages: b_,
  fetchLanguageTitles: k_,
  fetchPageContent: V_,
  fetchNearbyPages: L_,
  searchPagesByTitlePrefix: T_,
  fetchLanguageLinksForLanguage: $_
}, A_ = window.Vuex.useStore, Ks = () => {
  const e = A_();
  return (t, n) => {
    n = n.filter(
      (a) => !!a && !e.getters["mediawiki/getPage"](t, a)
    );
    const s = 50, o = [];
    for (let a = 0; a < n.length; a += s) {
      const r = n.slice(a, a + s), l = cs.fetchPages(t, r).then(
        (u) => u.forEach(
          (d) => e.commit("mediawiki/addPage", d)
        )
      );
      o.push(l);
    }
    return Promise.all(o);
  };
}, D_ = window.Vuex.useStore, iu = () => {
  const e = D_(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = D(), { maxSuggestionsPerSlice: o } = e.state.suggestions, a = () => e.getters["suggestions/getSectionSuggestionsForPair"](t.value, n.value).filter(
    (i) => i.matchesFilter(s.value)
  ), r = (d) => a().slice(
    o * d,
    o * (d + 1)
  ), l = () => e.getters["suggestions/getPageSuggestionsForPair"](t.value, n.value).filter(
    (i) => i.matchesFilter(s.value)
  );
  return {
    getFilteredPageSuggestions: l,
    getFilteredSectionSuggestions: a,
    getPageSuggestionsSliceByIndex: (d) => l().slice(
      o * d,
      o * (d + 1)
    ),
    getSectionSuggestionsSliceByIndex: r
  };
};
class us {
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
    sourceTitle: s,
    targetTitle: o,
    langLinksCount: a,
    wikidataId: r,
    suggestionSeed: l = null,
    suggestionProvider: u = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = s, this.targetTitle = o, this.wikidataId = r, this.langLinksCount = a, this.suggestionProvider = u, this.suggestionSeed = l, this.isListable = !0;
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
    var n, s;
    return ((n = this.suggestionProvider) == null ? void 0 : n.type) === t.type && ((s = this.suggestionProvider) == null ? void 0 : s.id) === t.id;
  }
}
class xn {
  /**
   * Creates an instance of SectionSuggestion.
   * @param {Object} options
   * @param {string} options.sourceLanguage
   * @param {string} options.targetLanguage
   * @param {string} options.sourceTitle
   * @param {string} options.targetTitle
   * @param {Object<string, string>} options.present Object that maps section titles in source article to already existing section titles in target article
   * @param {Object<string, string>} options.missing
   * @param {Object<string, {difficulty: string, size: number}>} options.sourceSectionInfo
   * @param {Object<string, number>} options.sourceSectionSizes
   * @param {string[]} options.sourceSections Array of all section titles in source article ordered by their order of appearance in the article
   * @param {string[]} options.targetSections Array of all section titles in target article ordered by their order of appearance in the article
   * @param {string|null} options.suggestionSeed
   * @param {boolean} options.isListable A boolean indicating whether we should display this section suggestion inside dashboard suggestion list
   * @param {{ type: String, id: String }|null} options.suggestionProvider
   */
  constructor({
    sourceLanguage: t,
    targetLanguage: n,
    sourceTitle: s,
    targetTitle: o,
    present: a,
    missing: r,
    sourceSectionInfo: l = {},
    sourceSectionSizes: u = {},
    sourceSections: d = [],
    targetSections: i = [],
    suggestionSeed: c = null,
    isListable: g = !0,
    suggestionProvider: p = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = s, this.targetTitle = o, this.missingSections = r, this.presentSections = a, this.sourceSectionInfo = l, this.sourceSectionSizes = u, this.sourceSections = d, this.targetSections = i, this.suggestionSeed = c, this.isListable = g, this.suggestionProvider = p;
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
  isEasy(t) {
    if (this.sourceSectionInfo[t])
      return this.sourceSectionInfo[t].difficulty === "easy";
    if (this.sourceSectionSizes[t]) {
      const n = this.sourceSectionSizes[t];
      return n >= 1e3 && n < 3e3;
    }
    return !1;
  }
  /**
   * @return {number}
   */
  get missingSectionsCount() {
    return Object.keys(this.missingSections || {}).length;
  }
  get easyMissingSectionsCount() {
    return Object.keys(this.missingSections || {}).filter(
      (t) => this.isEasy(t)
    ).length;
  }
  /**
   * @return {number}
   */
  get presentSectionsCount() {
    return Object.keys(this.presentSections || {}).length;
  }
  /**
   * @return {{targetTitle: string, sourceTitle: string, isEasy: boolean}[]}
   */
  get orderedMissingSections() {
    return Object.entries(this.missingSections || {}).map((t) => ({
      sourceTitle: t[0],
      targetTitle: t[1],
      isEasy: this.isEasy(t[0])
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
    var n, s;
    return ((n = this.suggestionProvider) == null ? void 0 : n.type) === t.type && ((s = this.suggestionProvider) == null ? void 0 : s.id) === t.id;
  }
}
const Lh = [
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
], P_ = [
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
], B_ = [
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
], F_ = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], N_ = [
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
], M_ = {
  en: Lh,
  es: P_,
  bn: B_,
  fr: F_,
  de: N_
};
class js {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: s,
    missingSectionsCount: o = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = s, this.missingSectionsCount = o;
  }
}
class ru {
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
    end_date: s,
    articles_count: o,
    articles_by_language_count: a
  }) {
    this.name = t, this.description = n, this.endDate = s, this.articlesCount = o, this.articlesByLanguageCount = a;
  }
}
class Th extends us {
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
    sourceTitle: s,
    targetTitle: o,
    langLinksCount: a,
    wikidataId: r,
    suggestionProvider: l = null,
    collection: u = {}
  }) {
    super({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: s,
      targetTitle: o,
      langLinksCount: a,
      wikidataId: r,
      suggestionProvider: l
    }), this.collection = new ru(u);
  }
}
class Ah extends xn {
  /**
   * @param {Object} options
   * @param {string} options.sourceLanguage
   * @param {string} options.targetLanguage
   * @param {string} options.sourceTitle
   * @param {string} options.targetTitle
   * @param {Object<string, string>} options.present Object that maps section titles in source article to already existing section titles in target article
   * @param {Object<string, string>} options.missing
   * @param {Object<string, {difficulty: string, size: number}>} options.sourceSectionInfo
   * @param {string[]} options.sourceSections Array of all section titles in source article ordered by their order of appearance in the article
   * @param {string[]} options.targetSections Array of all section titles in target article ordered by their order of appearance in the article
   * @param {boolean} options.isListable A boolean indicating whether we should display this section suggestion inside dashboard suggestion list
   * @param {{ type: String, id: String }|null} options.suggestionProvider
   * @param {{ name: string, description: string|null, end_date: string|null, articles_count: number, articles_by_language_count: object }} collection
   */
  constructor({
    sourceLanguage: t,
    targetLanguage: n,
    sourceTitle: s,
    targetTitle: o,
    present: a,
    missing: r,
    sourceSectionInfo: l,
    sourceSections: u = [],
    targetSections: d = [],
    isListable: i = !0,
    suggestionProvider: c = null,
    collection: g = {}
  }) {
    super({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: s,
      targetTitle: o,
      present: a,
      missing: r,
      sourceSectionInfo: l,
      sourceSections: u,
      targetSections: d,
      isListable: i,
      suggestionProvider: c
    }), this.collection = new ru(g);
  }
}
const U_ = Lh, It = (n) => C(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
  let s = mw.config.get("wgRecommendToolAPIURL");
  e && (s += e);
  const o = new URL(s);
  Object.keys(t).forEach((a) => {
    t[a] && o.searchParams.append(a, t[a]);
  });
  try {
    const a = yield fetch(o);
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
function I_() {
  return C(this, null, function* () {
    const e = {}, t = "/page-collection-groups";
    try {
      const n = (yield It({ urlPostfix: t, urlParams: e })) || [], s = {};
      for (const o in n)
        s[o] = n[o].map(
          (a) => new ru(a)
        );
      return s;
    } catch (n) {
      return mw.log.error(
        "Error while fetching the page collections from Recommendation API",
        n
      ), {};
    }
  });
}
function R_(e, t, n = null, s = 24) {
  return C(this, null, function* () {
    const o = {
      source: e,
      target: t,
      count: s
    };
    return n && (o.seed = n), ((yield It({ urlParams: o })) || []).map(
      (r) => new us({
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
const z_ = (e, t) => C(void 0, null, function* () {
  return ((yield It({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  } })) || []).map(
    (o) => new us({
      sourceTitle: o.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: o.wikidata_id,
      langLinksCount: parseInt(o.langlinks_count)
    })
  );
}), O_ = (e, t) => C(void 0, null, function* () {
  const o = (yield It({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  }, urlPostfix: "/sections" })) || [];
  return o && o.map(
    (a) => new xn({
      sourceLanguage: e,
      targetLanguage: t,
      sourceTitle: a.source_title,
      targetTitle: a.target_title,
      sourceSections: a.source_sections,
      targetSections: a.target_sections,
      present: a.present,
      missing: a.missing,
      sourceSectionInfo: a.source_section_info
    })
  );
}), j_ = (e, t, n = null) => C(void 0, null, function* () {
  const s = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  return n && (s.seed = n), ((yield It({ urlParams: s })) || []).map(
    (a) => new Th({
      sourceTitle: a.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: a.wikidata_id,
      langLinksCount: parseInt(a.langlinks_count),
      collection: a.collection
    })
  );
}), H_ = (e, t, n = null) => C(void 0, null, function* () {
  const s = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  n && (s.seed = n);
  const a = (yield It({ urlPostfix: "/sections", urlParams: s })) || [];
  return a && a.map(
    (r) => new Ah({
      sourceLanguage: e,
      targetLanguage: t,
      sourceTitle: r.source_title,
      targetTitle: r.target_title,
      sourceSections: r.source_sections,
      targetSections: r.target_sections,
      present: r.present,
      missing: r.missing,
      collection: r.collection,
      sourceSectionInfo: r.source_section_info
    })
  );
});
function q_(e, t, n) {
  return C(this, null, function* () {
    const s = [t, e, n].map(
      (r) => encodeURIComponent(r)
    ), o = K.getCXServerUrl(
      `/suggest/sections/${s.join("/")}?include_section_sizes=true`
    ), a = yield fetch(o).then(
      (r) => r.ok ? r.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((r) => r == null ? void 0 : r.sections).catch((r) => null);
    return a ? new xn(a) : null;
  });
}
function G_(e, t, n = null) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      count: 24
    };
    n && (s.seed = n);
    const a = (yield It({ urlPostfix: "/sections", urlParams: s })) || [];
    return a && a.map(
      (r) => new xn({
        sourceLanguage: e,
        targetLanguage: t,
        sourceTitle: r.source_title,
        targetTitle: r.target_title,
        sourceSections: r.source_sections,
        targetSections: r.target_sections,
        present: r.present,
        missing: r.missing,
        sourceSectionInfo: r.source_section_info,
        seed: n
      })
    );
  });
}
function X_(e, t, n, s = 24) {
  return C(this, null, function* () {
    const o = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: s
    };
    return ((yield It({ urlParams: o })) || []).map(
      (r) => new us({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
function W_(e, t, n, s = 24) {
  return C(this, null, function* () {
    const o = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: s
    }, r = (yield It({ urlPostfix: "/sections", urlParams: o })) || [];
    return r && r.map(
      (l) => new xn({
        sourceLanguage: e,
        targetLanguage: t,
        sourceTitle: l.source_title,
        targetTitle: l.target_title,
        sourceSections: l.source_sections,
        targetSections: l.target_sections,
        present: l.present,
        missing: l.missing,
        sourceSectionInfo: l.source_section_info
      })
    );
  });
}
function K_(e, t, n, s = 24) {
  return C(this, null, function* () {
    const o = {
      source: e,
      target: t,
      country: n.join("|"),
      count: s
    };
    return ((yield It({ urlParams: o })) || []).map(
      (r) => new us({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
function Y_(e, t, n, s = 24) {
  return C(this, null, function* () {
    const o = {
      source: e,
      target: t,
      country: n.join("|"),
      count: s
    }, r = (yield It({ urlPostfix: "/sections", urlParams: o })) || [];
    return r && r.map(
      (l) => new xn({
        sourceLanguage: e,
        targetLanguage: t,
        sourceTitle: l.source_title,
        targetTitle: l.target_title,
        sourceSections: l.source_sections,
        targetSections: l.target_sections,
        present: l.present,
        missing: l.missing,
        sourceSectionInfo: l.source_section_info
      })
    );
  });
}
function Q_(e) {
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
    } catch (s) {
      return mw.log.error("Error while fetching suggestion seeds", s), [];
    }
  });
}
function J_(e, t) {
  return C(this, null, function* () {
    const n = {
      action: "parse",
      format: "json",
      formatversion: 2,
      prop: "sections",
      page: t
    }, s = K.getApi(e);
    try {
      return (yield s.get(n)).parse;
    } catch (o) {
      return mw.log.error("Error while fetching suggestion sections size", o), [];
    }
  });
}
function Z_(e) {
  const t = U_.map((s) => encodeURIComponent(s)).join("|"), n = K.getCXServerUrl(
    `/suggest/sections/titles/en/${e}?titles=${t}`
  );
  return fetch(n).then(
    (s) => s.ok ? s.json() : Promise.reject(
      new Error(
        `Failed to load appendix target section titles for language: ${e}`
      )
    )
  ).then((s) => Object.values(s).flat()).catch((s) => []);
}
const eS = (e, t, n) => {
  const s = {
    assert: "user",
    action: "cxfavoritesuggestions",
    listaction: "add",
    title: e,
    from: t,
    to: n
  }, o = new mw.Api();
  return Promise.resolve(o.postWithToken("csrf", s)).catch((a) => {
    mw.log.error("Error while marking suggestion as favorite", a);
  });
}, tS = (e) => {
  const t = {
    assert: "user",
    action: "cxfavoritesuggestions",
    listaction: "remove",
    title: e.title,
    from: e.sourceLanguage,
    to: e.targetLanguage
  }, n = new mw.Api();
  return Promise.resolve(n.postWithToken("csrf", t)).catch((s) => {
    mw.log.error("Error while unmarking favorite suggestion", s);
  });
}, nS = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions"
  }, t = new mw.Api();
  return Promise.resolve(t.postWithToken("csrf", e)).then((n) => {
    var a, r;
    const s = n.query.contenttranslationsuggestions.lists || {};
    return (((r = (a = Object.values(s)) == null ? void 0 : a[0]) == null ? void 0 : r.suggestions) || []).map((l) => new js(l));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
}, me = {
  fetchFavorites: nS,
  fetchPageSuggestions: R_,
  fetchSectionSuggestion: q_,
  fetchSectionSuggestions: G_,
  fetchAppendixTargetSectionTitles: Z_,
  fetchArticleSections: J_,
  markFavorite: eS,
  unmarkFavorite: tS,
  fetchUserEdits: Q_,
  fetchMostPopularPageSuggestions: z_,
  fetchMostPopularSectionSuggestions: O_,
  fetchPageSuggestionsByTopics: X_,
  fetchSectionSuggestionsByTopics: W_,
  fetchPageSuggestionsByCountries: K_,
  fetchSectionSuggestionsByCountries: Y_,
  fetchPageCollectionGroups: I_,
  fetchPageSuggestionsByCollections: j_,
  fetchSectionSuggestionsByCollections: H_
}, sS = window.Vuex.useStore, Ys = () => {
  const e = sS(), { sourceLanguage: t, targetLanguage: n } = Le(e), s = (l) => {
    if (!l)
      return !1;
    const u = e.getters["suggestions/getFavoriteTitlesByLanguagePair"](t.value, n.value), i = e.getters["translator/getTranslationsForLanguagePair"](t.value, n.value).map((c) => c.sourceTitle);
    return !u.includes(l.sourceTitle) && !i.includes(l.sourceTitle);
  }, o = (l) => {
    const { pageSuggestions: u } = e.state.suggestions;
    return !u.some(
      (i) => i.sourceLanguage === l.sourceLanguage && i.targetLanguage === l.targetLanguage && i.sourceTitle === l.sourceTitle
    ) && s(l);
  }, a = (l) => e.state.suggestions.sectionSuggestions.some(
    (u) => u.sourceLanguage === l.sourceLanguage && u.targetLanguage === l.targetLanguage && u.sourceTitle === l.sourceTitle
  );
  return {
    isPageSuggestionValid: o,
    isSectionSuggestionValid: (l) => {
      if (!l)
        return !1;
      const u = e.state.suggestions.appendixSectionTitles[n.value] || [];
      return !a(l) && s(l) && l.isValid(u);
    },
    sectionSuggestionExists: a
  };
};
class oS {
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
const aS = window.Vuex.useStore, lu = window.Vue.ref, iS = lu([]), rS = lu([]);
let Tr = !1, Ar = !1, cd = !1;
const Fa = lu([]);
let lo = null;
const Dr = {
  page: iS,
  section: rS
}, Dh = () => {
  const e = aS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = D(), s = () => C(void 0, null, function* () {
    Ar || (Fa.value = yield me.fetchUserEdits(t.value).then((d) => (Ar = !0, d)));
  }), o = () => C(void 0, null, function* () {
    let d = e.getters["translator/getTranslationsByStatus"]("published");
    if (d = d.filter(
      (i) => i.sourceLanguage === t.value
    ), d.length && !Tr)
      return Tr = !0, d.map(
        (i) => i.sourceTitle
      );
    if (Tr = !0, !Ar && (yield s(), Fa.value.length > 0))
      return Fa.value;
    if (!cd) {
      const i = yield me.fetchUserEdits(n.value).then((c) => (cd = !0, c));
      if (i.length)
        return cs.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          i
        );
    }
    return null;
  }), a = (d) => {
    let i = Dr[d].value.find(
      (c) => c.matchesLanguagePair(t.value, n.value)
    );
    return i || (i = new oS({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), Dr[d].value.push(i)), i;
  }, r = () => C(void 0, null, function* () {
    let d = !1, i = [];
    do {
      i = yield o(), i || (d = !0);
      for (const c in Dr) {
        const g = a(c);
        g.seeds = [
          ...g.seeds,
          ...i || []
        ];
      }
    } while (!d && !(i != null && i.length));
  }), l = () => lo || (lo = r(), lo.finally(() => {
    lo = null;
  }));
  return {
    getSuggestionSeed: (d) => C(void 0, null, function* () {
      let i = a(d);
      return i.seeds.length || (yield l()), i.shiftSeeds();
    }),
    fetchPreviousEditsInSource: s,
    previousEditsInSource: Fa
  };
}, lS = 5;
function ls(e) {
  return C(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < lS);
  });
}
const cS = window.Vuex.useStore, uS = () => {
  const e = cS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = D(), { getSuggestionSeed: s } = Dh(), {
    isSectionSuggestionValid: o,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Ys(), l = {
    id: en,
    type: Ye
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (i) => C(void 0, null, function* () {
      const c = [];
      return yield ls(() => C(void 0, null, function* () {
        const g = yield s("page");
        let p = yield me.fetchPageSuggestions(
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
      return yield ls(() => C(void 0, null, function* () {
        const g = yield s("section"), p = yield me.fetchSectionSuggestions(
          t.value,
          n.value,
          g || null
        );
        if (!p)
          return !1;
        let m = p.filter(
          (f) => o(f)
        );
        const h = p.filter(
          (f) => !o(f)
        );
        return m = m.slice(0, i), c.push(...m), h.forEach((f) => {
          f && !r(f) && (f.isListable = !1, e.commit("suggestions/addSectionSuggestion", f));
        }), c.length >= i;
      })), c.forEach(
        (g) => g.suggestionProvider = l
      ), c;
    })
  };
}, dS = window.Vuex.useStore, gS = () => {
  const e = dS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = D(), s = {
    id: yn,
    type: Ye
  }, {
    isSectionSuggestionValid: o,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Ys();
  return { fetchSectionSuggestionsPopular: (d) => C(void 0, null, function* () {
    const i = [];
    return yield ls(() => C(void 0, null, function* () {
      const c = yield me.fetchMostPopularSectionSuggestions(
        t.value,
        n.value
      );
      let g = c.filter(
        (m) => o(m)
      );
      const p = c.filter(
        (m) => !o(m)
      );
      return g = g.slice(0, d), i.push(...g), p.forEach((m) => {
        m && !r(m) && (m.isListable = !1, e.commit("suggestions/addSectionSuggestion", m));
      }), i.length >= d;
    })), i.forEach(
      (c) => c.suggestionProvider = s
    ), i;
  }), fetchPageSuggestionsPopular: (d) => C(void 0, null, function* () {
    const i = [];
    return yield ls(() => C(void 0, null, function* () {
      let c = yield me.fetchMostPopularPageSuggestions(
        t.value,
        n.value
      );
      return c = c.filter(
        (g) => a(g)
      ), c = c.slice(0, d), i.push(...c), i.length >= d;
    })), i.forEach(
      (c) => c.suggestionProvider = s
    ), i;
  }) };
}, Ph = window.Vue.ref, co = "ungrouped", ud = Ph({}), dd = Ph(!1), cu = () => ({
  fetchPageCollectionGroups: () => C(void 0, null, function* () {
    try {
      const t = yield me.fetchPageCollectionGroups(), n = Object.fromEntries(
        Object.keys(t).sort((s, o) => s === co ? 1 : o === co ? -1 : s.localeCompare(o)).map((s) => [s, t[s]])
      );
      n[co] && (n[co] = n[co].sort(
        (s, o) => s.name.localeCompare(o.name)
      )), ud.value = n, dd.value = !0;
    } catch (t) {
      mw.log.error("Failed to fetch page collections", t);
    }
  }),
  pageCollectionGroupsFetched: dd,
  pageCollectionGroups: ud
});
class ia {
  /**
   * @param {string} id
   * @param {string} label
   * @param {string} type
   * @param {SuggestionFilter[]} filters
   */
  constructor({ id: t, label: n, type: s, filters: o }) {
    this.id = t, this.label = n, this.type = s, this.filters = o;
  }
}
const pS = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', mS = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', hS = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', fS = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', wS = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', vS = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', _S = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', SS = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', yS = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', xS = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', CS = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', bS = '<path d="m2.5 15.25 7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"/>', kS = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', $S = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', VS = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', ES = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', LS = '<path d="M19 16 2 12a3.83 3.83 0 01-1-2.5A3.83 3.83 0 012 7l17-4z"/><rect width="4" height="8" x="4" y="9" rx="2"/>', TS = '<path d="M8 2H2a2 2 0 00-2 2v2h12z"/><rect width="20" height="14" y="4" rx="2"/>', AS = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', Bh = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', DS = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', PS = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"/>', BS = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', FS = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', NS = '<path d="M10 0a7.65 7.65 0 00-8 8c0 2.52 2 5 3 6s5 6 5 6 4-5 5-6 3-3.48 3-6a7.65 7.65 0 00-8-8m0 11.25A3.25 3.25 0 1113.25 8 3.25 3.25 0 0110 11.25"/>', MS = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', US = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', IS = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', RS = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', zS = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', OS = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', jS = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', HS = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', qS = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', GS = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', Fh = pS, XS = mS, Nh = {
  ltr: hS,
  shouldFlip: !0
}, Mh = {
  ltr: fS,
  shouldFlip: !0
}, uu = {
  ltr: wS,
  shouldFlip: !0
}, Uh = vS, Ih = _S, WS = SS, KS = yS, YS = xS, Qs = CS, QS = bS, du = kS, gu = $S, Uc = VS, JS = ES, ZS = {
  ltr: LS,
  shouldFlip: !0
}, ey = {
  ltr: TS,
  shouldFlip: !0
}, ty = AS, ny = {
  langCodeMap: {
    ar: Bh
  },
  default: DS
}, sy = {
  langCodeMap: {
    ar: Bh
  },
  default: PS
}, Rh = BS, sr = {
  ltr: FS,
  shouldFlip: !0
}, oy = NS, ay = MS, _a = {
  ltr: US,
  shouldFlip: !0
}, pu = {
  ltr: IS,
  shouldFlip: !0
}, iy = {
  ltr: RS,
  shouldFlip: !0
}, zh = zS, ry = OS, Ic = jS, ly = HS, cy = qS, Oh = GS, uy = {
  [en]: Oh,
  [yn]: ty,
  [ee]: uu
}, dy = {
  [ee]: ey,
  [Ee]: oy
};
class Ut {
  /**
   * @param {string} id
   * @param {string} label
   * @param {string} type
   * @param {SuggestionFilter[]} subFilters
   */
  constructor({ id: t, label: n, type: s, subFilters: o = [] }) {
    this.id = t, this.label = n, this.type = s, this.subFilters = o;
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
    return uy[this.provider] || null;
  }
  get expandableIcon() {
    return dy[this.provider] || this.icon;
  }
}
const uo = window.Vue.computed, { topics: gd, regions: pd } = mw.loader.require(
  "ext.cx.articlefilters"
), gy = (e) => new ia({
  id: e.groupId,
  label: e.label,
  type: Xe,
  filters: e.topics.map(
    (t) => new Ut({
      id: t.topicId,
      label: t.label,
      type: Xe
    })
  )
}), or = () => {
  const e = we(), { currentSuggestionFilters: t, setFilterURLParams: n } = D(), { validateFilters: s, filtersValidatorError: o } = Jc(), a = new Ut({
    id: en,
    type: Ye,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }), r = new Ut({
    id: yn,
    type: Ye,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }), l = new Ut({
    id: ee,
    type: Ye,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }), { pageCollectionGroups: u, pageCollectionGroupsFetched: d } = cu(), i = uo(() => {
    const x = new ia({
      id: Ye,
      type: Ye,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [a, r]
    });
    return Object.keys(u.value).length > 1 && x.filters.push(l), x;
  }), c = () => {
    const x = pe({}, u.value);
    delete x.ungrouped;
    const I = [];
    for (const P in x) {
      const H = x[P].map(
        (ae) => new Ut({
          id: ae.name,
          label: ae.name,
          type: ee
        })
      ), se = new Ut({
        id: P,
        label: P,
        type: ee,
        subFilters: H
      });
      I.push(se);
    }
    const L = (u.value.ungrouped || []).map(
      (P) => new Ut({
        id: P.name,
        label: P.name,
        type: ee
      })
    );
    return [...I, ...L];
  }, g = uo(
    () => new ia({
      id: ee,
      type: ee,
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: c()
    })
  ), p = uo(() => new ia({
    id: Ee,
    type: Ee,
    label: e.i18n("cx-sx-suggestions-filters-tab-regions"),
    filters: pd.map(
      (x) => new Ut({
        id: x.id,
        label: x.label,
        type: Ee,
        subFilters: x.countries.map(
          (I) => new Ut({
            id: I.id,
            label: I.label,
            type: Ee
          })
        )
      })
    )
  })), m = uo(() => {
    const x = [
      i.value,
      ...gd.map(gy),
      p.value
    ];
    return g.value.filters.length && x.splice(1, 0, g.value), x;
  }), h = uo(
    () => [t.value.type, t.value.id].includes(
      ee
    ) && !d.value
  ), f = () => {
    if (h.value)
      return [];
    const x = v();
    return x.type === Xe || x.type === Ee || x.type === yt || x.type === ee || x.id === ee ? [x, a] : [a, r];
  }, w = (x) => {
    n(x.type, x.id);
  }, v = () => t.value.type === yt ? new Ut({
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
      const L = gd.flatMap((P) => P.topics).find((P) => P.topicId === x);
      return L ? L.articletopics : [];
    },
    waitingForPageCollectionsFetch: h,
    findSelectedFilter: v,
    validateURLFilterWithCollections: () => {
      if (!d.value)
        return;
      const x = Object.values(u.value).flat(), I = s(
        {
          type: t.value.type,
          id: t.value.id
        },
        x
      );
      n(I.type, I.id), o.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
    },
    getCountries: (x) => {
      const I = pd.find((L) => L.id === x);
      return I ? I.countries.map((L) => L.id) : [x];
    }
  };
}, py = window.Vuex.useStore, my = () => {
  const e = py(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = D(), {
    isSectionSuggestionValid: o,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Ys(), { getArticleTopics: l } = or();
  return {
    fetchPageSuggestionsByTopics: (i) => C(void 0, null, function* () {
      const c = s.value.id, g = {
        id: c,
        type: Xe
      }, p = l(c);
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
      const c = s.value.id, g = {
        id: c,
        type: Xe
      }, p = l(c), m = [];
      return yield ls(() => C(void 0, null, function* () {
        const h = yield me.fetchSectionSuggestionsByTopics(
          t.value,
          n.value,
          p
        );
        let f = h.filter(
          (v) => o(v)
        );
        const w = h.filter(
          (v) => !o(v)
        );
        return f = f.slice(0, i), m.push(...f), w.forEach((v) => {
          v && !r(v) && (v.isListable = !1, e.commit("suggestions/addSectionSuggestion", v));
        }), m.length >= i;
      })), m.forEach(
        (h) => h.suggestionProvider = g
      ), m;
    })
  };
}, hy = window.Vuex.useStore, fy = () => {
  const e = hy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = D(), {
    isSectionSuggestionValid: o,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Ys(), { getCountries: l } = or();
  return {
    fetchPageSuggestionsByCountries: (i) => C(void 0, null, function* () {
      let c = yield me.fetchPageSuggestionsByCountries(
        t.value,
        n.value,
        l(s.value.id)
      );
      return c = c.filter(
        (g) => a(g)
      ), c = c.slice(0, i), c.forEach(
        (g) => g.suggestionProvider = s.value
      ), c;
    }),
    fetchSectionSuggestionsByCountries: (i) => C(void 0, null, function* () {
      const c = [];
      return yield ls(() => C(void 0, null, function* () {
        const g = yield me.fetchSectionSuggestionsByCountries(
          t.value,
          n.value,
          l(s.value.id)
        );
        let p = g.filter(
          (h) => o(h)
        );
        const m = g.filter(
          (h) => !o(h)
        );
        return p = p.slice(0, i), c.push(...p), m.forEach((h) => {
          h && !r(h) && (h.isListable = !1, e.commit("suggestions/addSectionSuggestion", h));
        }), c.length >= i;
      })), c.forEach(
        (g) => g.suggestionProvider = s.value
      ), c;
    })
  };
}, wy = window.Vuex.useStore, vy = window.Vue.computed, _y = () => {
  const e = wy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = D(), o = vy(() => {
    var i;
    return ((i = s.value) == null ? void 0 : i.type) !== ee ? null : s.value.id;
  }), {
    isSectionSuggestionValid: a,
    isPageSuggestionValid: r,
    sectionSuggestionExists: l
  } = Ys();
  return {
    fetchSectionSuggestionsByCollections: () => C(void 0, null, function* () {
      const i = [], c = yield me.fetchSectionSuggestionsByCollections(
        t.value,
        n.value,
        o.value
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
        (m) => m.suggestionProvider = s.value
      ), i;
    }),
    fetchPageSuggestionsByCollections: () => C(void 0, null, function* () {
      const i = [];
      let c = yield me.fetchPageSuggestionsByCollections(
        t.value,
        n.value,
        o.value
      );
      return c = c.filter(
        (g) => r(g)
      ), i.push(...c), i.forEach(
        (g) => g.suggestionProvider = s.value
      ), i;
    })
  };
}, Sy = window.Vuex.useStore, yy = () => {
  const e = Sy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = D(), {
    isSectionSuggestionValid: o,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Ys();
  return {
    fetchPageSuggestionsBySeed: (d) => C(void 0, null, function* () {
      const i = s.value.id;
      let c = yield me.fetchPageSuggestions(
        t.value,
        n.value,
        i
      );
      return c = c.filter(
        (g) => a(g)
      ), c = c.slice(0, d), c.forEach(
        (g) => g.suggestionProvider = {
          id: i,
          type: yt
        }
      ), c;
    }),
    fetchSectionSuggestionsBySeed: (d) => C(void 0, null, function* () {
      const i = [], c = s.value.id;
      return yield ls(() => C(void 0, null, function* () {
        const g = yield me.fetchSectionSuggestions(
          t.value,
          n.value,
          c
        );
        if (!g)
          return !1;
        let p = g.filter(
          (h) => o(h)
        );
        const m = g.filter(
          (h) => !o(h)
        );
        return p = p.slice(0, d), i.push(...p), m.forEach((h) => {
          h && !r(h) && (h.isListable = !1, e.commit("suggestions/addSectionSuggestion", h));
        }), i.length >= d;
      })), i.forEach(
        (g) => g.suggestionProvider = {
          id: c,
          type: yt
        }
      ), i;
    })
  };
}, xy = () => {
  const { currentSuggestionFilters: e } = D(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = uS(), { fetchPageSuggestionsPopular: s, fetchSectionSuggestionsPopular: o } = gS(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = my(), {
    fetchPageSuggestionsByCountries: l,
    fetchSectionSuggestionsByCountries: u
  } = fy(), {
    fetchPageSuggestionsByCollections: d,
    fetchSectionSuggestionsByCollections: i
  } = _y(), { fetchPageSuggestionsBySeed: c, fetchSectionSuggestionsBySeed: g } = yy(), p = {
    [en]: t,
    [yn]: s,
    [ee]: d,
    [Xe]: a,
    [Ee]: l,
    [yt]: c
  }, m = {
    [en]: n,
    [yn]: o,
    [ee]: i,
    [Xe]: r,
    [Ee]: u,
    [yt]: g
  }, h = (v) => v.type === Ye ? v.id : v.type;
  return {
    getCurrentPageSuggestionProvider: () => p[h(e.value)],
    getCurrentSectionSuggestionProvider: () => m[h(e.value)]
  };
}, Cy = window.Vuex.useStore, mu = () => {
  const e = Cy(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = iu(), { sourceLanguageURLParameter: s } = D(), o = Ks(), a = () => {
    const g = t(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, r = () => {
    const g = n(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, {
    getCurrentPageSuggestionProvider: l,
    getCurrentSectionSuggestionProvider: u
  } = xy(), d = (g) => {
    try {
      const p = g.map((m) => m.sourceTitle);
      if (p.length)
        return o(s.value, p);
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
}, by = window.Vuex.useStore, jh = () => {
  const e = by();
  return (t) => C(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield me.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, ky = window.Vuex.useStore, Hh = () => {
  const e = ky(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = mu(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: o } = iu(), { targetLanguageURLParameter: a } = D(), r = jh();
  return () => C(void 0, null, function* () {
    const l = o(0), u = s(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, i = l.length === d, c = u.length === d;
    i && c || (yield r(a.value), t(), n());
  });
}, $y = window.Vuex.useStore, Na = /* @__PURE__ */ new Map(), ar = () => {
  const e = $y(), t = Ks();
  return (n, s, o) => C(void 0, null, function* () {
    const a = `${n}:${s}:${o}`;
    if (Na.has(a))
      return Na.get(a);
    const l = (() => C(void 0, null, function* () {
      let u = e.getters["suggestions/getSectionSuggestionsForArticle"](n, s, o);
      if (!u) {
        u = yield me.fetchSectionSuggestion(
          n,
          o,
          s
        );
        try {
          if (yield t(n, [o]), u)
            u.isListable = !1, e.commit("suggestions/addSectionSuggestion", u);
          else {
            const d = e.getters["mediawiki/getPage"](
              n,
              o
            );
            return new us({
              sourceLanguage: n,
              targetLanguage: s,
              sourceTitle: o,
              langLinksCount: d.langLinksCount,
              wikidataId: d.wikidataId
            });
          }
        } catch (d) {
          const i = new Error(
            `No page metadata found for title ${o} and language pair ${n}-${s}. ${d}`
          );
          throw mw.errorLogger.logError(i, "error.contenttranslation"), i;
        }
      }
      return u;
    }))();
    return Na.set(a, l), l.finally(() => {
      Na.delete(a);
    });
  });
}, md = window.Vue.computed, Vy = window.Vuex.useStore, bn = () => {
  const e = Vy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: s
  } = D(), o = md(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      s.value
    )
  ), a = md(() => o.value ? o.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: o,
    targetPageExists: a,
    getCurrentTitleByLanguage: (l, u) => o.value.getTitleForLanguage(l) || o.value.getTitleForLanguage(u)
  };
}, qh = window.Vuex.useStore, { setLanguageURLParams: Ey } = D(), hu = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), Ey(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, Gh = () => {
  const e = qh(), t = Hh();
  return (n, s) => {
    const { sourceLanguage: o, targetLanguage: a } = Le(e);
    n === s && (n = a.value, s = o.value), hu(e, n, s), t();
  };
}, Ly = () => {
  const e = qh(), t = ar(), { currentLanguageTitleGroup: n, targetPageExists: s } = bn(), o = Ks();
  return (a, r) => C(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: u,
      setPageURLParam: d,
      clearSectionURLParameter: i
    } = D();
    a === r && (a = u.value, r = l.value);
    const c = n.value.getTitleForLanguage(a);
    hu(e, a, r), d(c), s.value ? (i(), yield t(
      l.value,
      u.value,
      c
    )) : yield o(l.value, [c]);
  });
}, Ty = window.Vuex.useStore, Ay = window.Vue.ref, hd = Ay(!1), Xh = () => {
  const e = Ty(), {
    supportedSourceLanguageCodes: t,
    supportedTargetLanguageCodes: n,
    fetchSupportedLanguageCodes: s
  } = fa(), { sourceLanguageURLParameter: o, targetLanguageURLParameter: a } = D(), r = () => {
    const u = K.getCurrentWikiLanguageCode(), d = (f) => t.value.includes(f), i = (f) => n.value.includes(f), c = {
      sourceLanguage: "en",
      targetLanguage: "es"
    }, g = [
      a.value,
      mw.storage.get("cxTargetLanguage"),
      u,
      c.targetLanguage
    ], p = [
      o.value,
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
    yield s();
    const { sourceLanguage: u, targetLanguage: d } = r();
    hu(e, u, d), hd.value = !0;
  }), applicationLanguagesInitialized: hd };
};
const Dy = window.Vue.resolveDynamicComponent, fd = window.Vue.openBlock, wd = window.Vue.createBlock, Py = window.Vue.Transition, go = window.Vue.withCtx, po = window.Vue.createVNode, By = window.Vue.resolveComponent, Pr = window.Vue.unref, Fy = window.Vuex.useStore, vd = window.Vue.computed, Ny = window.Vue.onMounted, My = window.Vue.inject, Uy = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = D(), { initializeApplicationLanguages: n } = Xh();
    t(), n();
    const s = My("breakpoints"), o = vd(() => s.value.mobile), a = Fy(), r = vd(
      () => a.state.application.autoSavePending
    );
    return Ny(() => {
      window.addEventListener("beforeunload", (l) => {
        r.value && (l.preventDefault(), l.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (l) => {
        document.visibilityState === "visible" && gh.assertUser().then(() => a.commit("application/setIsLoginDialogOn", !1)).catch((u) => {
          u instanceof Gs && a.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (l, u) => {
      const d = By("router-view");
      return fd(), wd(Pr(i0), { id: "contenttranslation" }, {
        default: go(() => [
          po(Pr(N), { class: "cx-container" }, {
            default: go(() => [
              po(Pr(k), {
                class: "cx-container__wrapper-col",
                cols: "12"
              }, {
                default: go(() => [
                  po(d, null, {
                    default: go(({ Component: i, route: c }) => [
                      po(Py, {
                        name: o.value ? c.meta.transitionName : ""
                      }, {
                        default: go(() => [
                          (fd(), wd(Dy(i)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      po(yv)
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
}, Iy = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translatorStats: null
}, Ry = {
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
    (s) => s.sourceLanguage === t && s.targetLanguage === n
  )
};
class Wh {
  constructor({ id: t, type: n, question: s, url: o }) {
    this.id = t, this.type = n, this.question = s, this.url = o;
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
    type: s = "generic",
    status: o,
    details: a = null
  }) {
    this.text = t, this.title = n, this.type = s, this.status = o, this.details = a && new Wh(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const _d = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (o, a) => tt(pe({}, o), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class zy {
  /**
   * @param {{user, source, mt, sequenceId}} unit
   * @param {{engine: null, content: string, timestamp: string}} unit.user
   * @param {{engine: null, content: string, timestamp: string}} unit.source
   * @param {{engine: string, content: string, timestamp: string}} unit.mt - current possible values for engine: "Elia"|"MinT"|"Google"|"Yandex"
   * @param {number} unit.sequenceId
   */
  constructor({ user: t, source: n, mt: s, sequenceId: o }) {
    this.user = t, this.source = n, this.mt = s, this.sequenceId = o;
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
    var o, a;
    const t = _d((o = this.user) == null ? void 0 : o.content), n = _d((a = this.mt) == null ? void 0 : a.content);
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
class fu extends Yc {
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
    sourceLanguage: s,
    targetLanguage: o,
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
      sourceLanguage: s,
      targetLanguage: o,
      startTimestamp: a,
      lastUpdatedTimestamp: r,
      pageRevision: l,
      status: u,
      targetTitle: d
    }), this.targetUrl = i, this.sectionTranslations = c;
  }
}
const ir = mw.user.isAnon() ? void 0 : "user", Kh = (e) => {
  if (e === "assertuserfailed")
    throw new Gs();
};
function Yh(e, t = null) {
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
    return t && (n.offset = t), new mw.Api().get(n).then((o) => C(this, null, function* () {
      var l;
      const a = o.query.contenttranslation.translations;
      let r;
      if (e === "draft" ? r = a.map(
        (u) => new Qi(tt(pe({}, u), { status: e }))
      ) : r = a.map(
        (u) => new fu(tt(pe({}, u), { status: e }))
      ), (l = o.continue) != null && l.offset) {
        const u = yield Yh(
          e,
          o.continue.offset
        );
        r = r.concat(u);
      }
      return r;
    }));
  });
}
function Oy(e) {
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
  return new mw.Api().get(t).then((s) => {
    const { translation: o } = s.query.contenttranslation;
    return Object.values(o.translationUnits).map(
      (a) => new zy(a)
    );
  });
}
function jy(e, t, n, s, o) {
  return C(this, null, function* () {
    if (!s)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== re.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const r = K.getCXServerUrl(a);
    return fetch(r, {
      headers: { "Content-Type": "application/json", Authorization: o },
      method: "POST",
      body: JSON.stringify({ html: `<div>${s}</div>` })
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
const Hy = (e, t, n) => {
  const s = K.getApi(t);
  return Promise.resolve(
    s.post({
      origin: "*",
      action: "visualeditor",
      paction: "parsefragment",
      page: n,
      wikitext: e,
      pst: !0
    })
  ).then((o) => o.visualeditor.content).catch((o) => (mw.log.error(o), Promise.reject(o)));
}, qy = ({
  html: e,
  sourceTitle: t,
  targetTitle: n,
  sourceSectionTitle: s,
  targetSectionTitle: o,
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
    assert: ir,
    action: "cxpublishsection",
    title: n,
    html: e,
    sourcetitle: t,
    sourcerevid: l,
    sourcesectiontitle: s,
    targetsectiontitle: o,
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
          publishFeedbackMessage: new jn({
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
    Kh(h);
    let w;
    return f = f || {}, f.exception ? w = f.exception.message : f.error ? w = f.error.info : w = "Unknown error", {
      publishFeedbackMessage: new jn({
        text: w,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, Gy = ({
  sourceTitle: e,
  targetTitle: t,
  sourceSectionTitle: n,
  targetSectionTitle: s,
  sourceLanguage: o,
  targetLanguage: a,
  revision: r,
  units: l,
  sectionId: u,
  isSandbox: d,
  progress: i
}) => {
  const c = {
    assert: ir,
    action: "sxsave",
    targettitle: t,
    sourcetitle: e,
    sourcerevision: r,
    sourcesectiontitle: n,
    targetsectiontitle: s,
    sourcelanguage: o,
    targetlanguage: a,
    content: JSON.stringify(l),
    sectionid: u,
    issandbox: d,
    progress: JSON.stringify(i)
  };
  return new mw.Api().postWithToken("csrf", c).then((p) => p.sxsave.sectiontranslationid).catch((p, m) => {
    Kh(p);
    let h;
    return m.exception ? h = m.exception.message : m.error ? h = m.error.info : h = "Unknown error", new jn({ text: h, status: "error" });
  });
}, Xy = (e) => {
  const t = {
    assert: ir,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((s) => s.cxsplit.result === "success");
}, Wy = () => {
  const e = {
    assert: ir,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new fu(n.cxcheckunreviewed.translation)
  );
}, Ky = (e, t, n) => {
  const s = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", s).then(() => !0).catch(() => !1);
}, Yy = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, Qy = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), xt = {
  fetchTranslations: Yh,
  fetchTranslationUnits: Oy,
  fetchSegmentTranslation: jy,
  parseTemplateWikitext: Hy,
  publishTranslation: qy,
  saveTranslation: Gy,
  deleteTranslation: Ky,
  fetchTranslatorStats: Qy,
  deleteCXTranslation: Yy,
  splitTranslation: Xy,
  checkUnreviewedTranslations: Wy
};
function Jy(t) {
  return C(this, arguments, function* ({ commit: e }) {
    const n = yield xt.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const Zy = {
  fetchTranslatorStats: Jy
}, ex = {
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
}, tx = {
  namespaced: !0,
  state: Iy,
  getters: Ry,
  actions: Zy,
  mutations: ex
}, nx = {
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
  appendixSectionTitles: M_
}, sx = {
  getFavoriteTitlesByLanguagePair: (e) => (t, n) => e.favorites.filter(
    (s) => s.sourceLanguage === t && s.targetLanguage === n
  ).map((s) => s.title),
  getPageSuggestionsForPair: (e) => (t, n) => e.pageSuggestions.filter(
    (s) => s.sourceLanguage === t && s.targetLanguage === n && s.isListable
  ),
  getSectionSuggestionsForPair: (e) => (t, n) => e.sectionSuggestions.filter(
    (s) => s.sourceLanguage === t && s.targetLanguage === n && s.isListable
  ),
  /**
   * @param state
   * @return {function(string, string, string): SectionSuggestion}
   */
  getSectionSuggestionsForArticle: (e) => (t, n, s) => e.sectionSuggestions.find(
    (o) => o.sourceLanguage === t && o.targetLanguage === n && o.sourceTitle === s
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
        (s) => n.includes(s)
      );
    }
  ),
  appendixTitlesExistForLanguage: (e) => (t) => {
    var n;
    return (((n = e.appendixSectionTitles) == null ? void 0 : n[t]) || []).length > 0;
  }
}, ox = {
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
    const { title: n, sourceLanguage: s, targetLanguage: o } = t;
    e.favorites = e.favorites.filter(
      (a) => a.title !== n || a.sourceLanguage !== s || a.targetLanguage !== o
    );
  },
  setIsPageSuggestionsFetchPending(e, t) {
    e.isPageSuggestionsFetchPending = t;
  },
  setIsSectionSuggestionsFetchPending(e, t) {
    e.isSectionSuggestionsFetchPending = t;
  }
}, ax = {
  namespaced: !0,
  state: nx,
  getters: sx,
  actions: {},
  mutations: ox
}, ix = {
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
}, rx = {
  /**
   * In case of a null or empty title, this getter should
   * return null
   * @param {Object} state
   * @return {function(string, string|null): Page|null}
   */
  getPage: (e) => (t, n) => e.pages.find(
    (s) => s.language === t && (s.title === n || s.alias && s.alias === n)
  ),
  /**
   * @param {object} state
   * @return {function(string, string): LanguageTitleGroup|null}
   */
  getLanguageTitleGroup: (e) => (t, n) => e.languageTitleGroups.find(
    (s) => s.titles.find(
      (o) => o.lang === t && o.title === n
    )
  ),
  /**
   * Get MTProviderGroup for the given language pair
   * @param {object} state
   * @returns {function(sourceLanguage: string, targetLanguage: string): string[]} - method returning an array of supported providers
   */
  getSupportedMTProviders: (e) => (t, n) => {
    var s;
    return ((s = e.supportedMTProviderGroups.find(
      (o) => o.sourceLanguage === t && o.targetLanguage === n
    )) == null ? void 0 : s.providers) || [];
  },
  isValidProviderForTranslation: (e, t) => (n, s, o) => t.getSupportedMTProviders(n, s).includes(o) && o !== re.EMPTY_TEXT_PROVIDER_KEY,
  /**
   * Get nearby articles (based on user location) in current source language
   *
   * @param {Object} state
   * @param {Object} getters
   * @param {Object} rootState
   * @return {Page[]}
   */
  getNearbyPages: (e, t, n) => {
    const s = n.application.sourceLanguage;
    return e.nearbyPages[s];
  }
};
function lx(s) {
  return C(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: o } = t.application;
    if ((r = n.nearbyPages[o]) != null && r.length)
      return;
    const a = yield cs.fetchNearbyPages(o);
    e("addNearbyPages", { language: o, pages: a });
  });
}
const cx = { fetchNearbyPages: lx }, ux = {
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
}, dx = {
  namespaced: !0,
  state: ix,
  getters: rx,
  actions: cx,
  mutations: ux
}, gx = {
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
}, px = {
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
    const { sourceLanguage: n, targetLanguage: s } = e, o = re.getStorageKey(
      n,
      s
    );
    mw.storage.set(o, t);
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
}, mx = {
  namespaced: !0,
  state: gx,
  mutations: px
}, hx = window.Vuex.createStore, fx = hx({
  modules: { translator: tx, suggestions: ax, mediawiki: dx, application: mx }
});
function wx() {
  return Qh().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Qh() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const vx = typeof Proxy == "function", _x = "devtools-plugin:setup", Sx = "plugin:settings:set";
let fs, Rc;
function yx() {
  var e;
  return fs !== void 0 || (typeof window != "undefined" && window.performance ? (fs = !0, Rc = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (fs = !0, Rc = global.perf_hooks.performance) : fs = !1), fs;
}
function xx() {
  return yx() ? Rc.now() : Date.now();
}
class Cx {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const s = {};
    if (t.settings)
      for (const r in t.settings) {
        const l = t.settings[r];
        s[r] = l.defaultValue;
      }
    const o = `__vue-devtools-plugin-settings__${t.id}`;
    let a = Object.assign({}, s);
    try {
      const r = localStorage.getItem(o), l = JSON.parse(r);
      Object.assign(a, l);
    } catch (r) {
    }
    this.fallbacks = {
      getSettings() {
        return a;
      },
      setSettings(r) {
        try {
          localStorage.setItem(o, JSON.stringify(r));
        } catch (l) {
        }
        a = r;
      },
      now() {
        return xx();
      }
    }, n && n.on(Sx, (r, l) => {
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
function bx(e, t) {
  const n = e, s = Qh(), o = wx(), a = vx && n.enableEarlyProxy;
  if (o && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    o.emit(_x, e, t);
  else {
    const r = a ? new Cx(n, o) : null;
    (s.__VUE_DEVTOOLS_PLUGINS__ = s.__VUE_DEVTOOLS_PLUGINS__ || []).push({
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
const Jh = window.Vue.getCurrentInstance, Hs = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const Jt = window.Vue.computed, ra = window.Vue.unref, kx = window.Vue.watchEffect, Zh = window.Vue.defineComponent, $x = window.Vue.reactive, ef = window.Vue.h, Br = window.Vue.provide, Vx = window.Vue.ref, tf = window.Vue.watch, Ex = window.Vue.shallowRef, Lx = window.Vue.shallowReactive, Tx = window.Vue.nextTick, Sn = typeof window != "undefined";
function Ax(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const Q = Object.assign;
function Fr(e, t) {
  const n = {};
  for (const s in t) {
    const o = t[s];
    n[s] = ut(o) ? o.map(e) : e(o);
  }
  return n;
}
const la = () => {
}, ut = Array.isArray;
function W(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Dx = /\/$/, Px = (e) => e.replace(Dx, "");
function Nr(e, t, n = "/") {
  let s, o = {}, a = "", r = "";
  const l = t.indexOf("#");
  let u = t.indexOf("?");
  return l < u && l >= 0 && (u = -1), u > -1 && (s = t.slice(0, u), a = t.slice(u + 1, l > -1 ? l : t.length), o = e(a)), l > -1 && (s = s || t.slice(0, l), r = t.slice(l, t.length)), s = Nx(s != null ? s : t, n), {
    fullPath: s + (a && "?") + a + r,
    path: s,
    query: o,
    hash: r
  };
}
function Bx(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Sd(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function yd(e, t, n) {
  const s = t.matched.length - 1, o = n.matched.length - 1;
  return s > -1 && s === o && Hn(t.matched[s], n.matched[o]) && nf(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Hn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function nf(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Fx(e[n], t[n]))
      return !1;
  return !0;
}
function Fx(e, t) {
  return ut(e) ? xd(e, t) : ut(t) ? xd(t, e) : e === t;
}
function xd(e, t) {
  return ut(t) ? e.length === t.length && e.every((n, s) => n === t[s]) : e.length === 1 && e[0] === t;
}
function Nx(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return W(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const n = t.split("/"), s = e.split("/"), o = s[s.length - 1];
  (o === ".." || o === ".") && s.push("");
  let a = n.length - 1, r, l;
  for (r = 0; r < s.length; r++)
    if (l = s[r], l !== ".")
      if (l === "..")
        a > 1 && a--;
      else
        break;
  return n.slice(0, a).join("/") + "/" + s.slice(r - (r === s.length ? 1 : 0)).join("/");
}
var da;
(function(e) {
  e.pop = "pop", e.push = "push";
})(da || (da = {}));
var ca;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(ca || (ca = {}));
function Mx(e) {
  if (!e)
    if (Sn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Px(e);
}
const Ux = /^[^#]+#/;
function Ix(e, t) {
  return e.replace(Ux, "#") + t;
}
function Rx(e, t) {
  const n = document.documentElement.getBoundingClientRect(), s = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0)
  };
}
const rr = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function zx(e) {
  let t;
  if ("el" in e) {
    const n = e.el, s = typeof n == "string" && n.startsWith("#");
    if ({}.NODE_ENV !== "production" && typeof e.el == "string" && (!s || !document.getElementById(e.el.slice(1))))
      try {
        const a = document.querySelector(e.el);
        if (s && a) {
          W(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch (a) {
        W(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const o = typeof n == "string" ? s ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!o) {
      ({}).NODE_ENV !== "production" && W(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = Rx(o, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function Cd(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const zc = /* @__PURE__ */ new Map();
function Ox(e, t) {
  zc.set(e, t);
}
function jx(e) {
  const t = zc.get(e);
  return zc.delete(e), t;
}
let Hx = () => location.protocol + "//" + location.host;
function sf(e, t) {
  const { pathname: n, search: s, hash: o } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = o.includes(e.slice(a)) ? e.slice(a).length : 1, u = o.slice(l);
    return u[0] !== "/" && (u = "/" + u), Sd(u, "");
  }
  return Sd(n, e) + s + o;
}
function qx(e, t, n, s) {
  let o = [], a = [], r = null;
  const l = ({ state: g }) => {
    const p = sf(e, location), m = n.value, h = t.value;
    let f = 0;
    if (g) {
      if (n.value = p, t.value = g, r && r === m) {
        r = null;
        return;
      }
      f = h ? g.position - h.position : 0;
    } else
      s(p);
    o.forEach((w) => {
      w(n.value, m, {
        delta: f,
        type: da.pop,
        direction: f ? f > 0 ? ca.forward : ca.back : ca.unknown
      });
    });
  };
  function u() {
    r = n.value;
  }
  function d(g) {
    o.push(g);
    const p = () => {
      const m = o.indexOf(g);
      m > -1 && o.splice(m, 1);
    };
    return a.push(p), p;
  }
  function i() {
    const { history: g } = window;
    g.state && g.replaceState(Q({}, g.state, { scroll: rr() }), "");
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
function bd(e, t, n, s = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: o ? rr() : null
  };
}
function Gx(e) {
  const { history: t, location: n } = window, s = {
    value: sf(e, n)
  }, o = { value: t.state };
  o.value || a(s.value, {
    back: null,
    current: s.value,
    forward: null,
    // the length is off by one, we need to decrease it
    position: t.length - 1,
    replaced: !0,
    // don't add a scroll as the user may have an anchor, and we want
    // scrollBehavior to be triggered without a saved position
    scroll: null
  }, !0);
  function a(u, d, i) {
    const c = e.indexOf("#"), g = c > -1 ? (n.host && document.querySelector("base") ? e : e.slice(c)) + u : Hx() + e + u;
    try {
      t[i ? "replaceState" : "pushState"](d, "", g), o.value = d;
    } catch (p) {
      ({}).NODE_ENV !== "production" ? W("Error with push/replace State", p) : console.error(p), n[i ? "replace" : "assign"](g);
    }
  }
  function r(u, d) {
    const i = Q({}, t.state, bd(
      o.value.back,
      // keep back and forward entries but override current position
      u,
      o.value.forward,
      !0
    ), d, { position: o.value.position });
    a(u, i, !0), s.value = u;
  }
  function l(u, d) {
    const i = Q(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      o.value,
      t.state,
      {
        forward: u,
        scroll: rr()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && W(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(i.current, i, !0);
    const c = Q({}, bd(s.value, u, null), { position: i.position + 1 }, d);
    a(u, c, !1), s.value = u;
  }
  return {
    location: s,
    state: o,
    push: l,
    replace: r
  };
}
function Xx(e) {
  e = Mx(e);
  const t = Gx(e), n = qx(e, t.state, t.location, t.replace);
  function s(a, r = !0) {
    r || n.pauseListeners(), history.go(a);
  }
  const o = Q({
    // it's overridden right after
    location: "",
    base: e,
    go: s,
    createHref: Ix.bind(null, e)
  }, t, n);
  return Object.defineProperty(o, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(o, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), o;
}
function Wx(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && W(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), Xx(e);
}
function Kx(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function of(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const $n = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, Oc = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var kd;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(kd || (kd = {}));
const Yx = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${Jx(t)}" via a navigation guard.`;
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
function qs(e, t) {
  return {}.NODE_ENV !== "production" ? Q(new Error(Yx[e](t)), {
    type: e,
    [Oc]: !0
  }, t) : Q(new Error(), {
    type: e,
    [Oc]: !0
  }, t);
}
function nn(e, t) {
  return e instanceof Error && Oc in e && (t == null || !!(e.type & t));
}
const Qx = ["params", "query", "hash"];
function Jx(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of Qx)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const $d = "[^/]+?", Zx = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, eC = /[.+*?^${}()[\]/\\]/g;
function tC(e, t) {
  const n = Q({}, Zx, t), s = [];
  let o = n.start ? "^" : "";
  const a = [];
  for (const d of e) {
    const i = d.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !d.length && (o += "/");
    for (let c = 0; c < d.length; c++) {
      const g = d[c];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (g.type === 0)
        c || (o += "/"), o += g.value.replace(eC, "\\$&"), p += 40;
      else if (g.type === 1) {
        const { value: m, repeatable: h, optional: f, regexp: w } = g;
        a.push({
          name: m,
          repeatable: h,
          optional: f
        });
        const v = w || $d;
        if (v !== $d) {
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
        f && d.length < 2 ? `(?:/${y})` : "/" + y), f && (y += "?"), o += y, p += 20, f && (p += -8), h && (p += -20), v === ".*" && (p += -50);
      }
      i.push(p);
    }
    s.push(i);
  }
  if (n.strict && n.end) {
    const d = s.length - 1;
    s[d][s[d].length - 1] += 0.7000000000000001;
  }
  n.strict || (o += "/?"), n.end ? o += "$" : n.strict && (o += "(?:/|$)");
  const r = new RegExp(o, n.sensitive ? "" : "i");
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
          if (ut(w) && !h)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const v = ut(w) ? w.join("/") : w;
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
    score: s,
    keys: a,
    parse: l,
    stringify: u
  };
}
function nC(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n];
    if (s)
      return s;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function sC(e, t) {
  let n = 0;
  const s = e.score, o = t.score;
  for (; n < s.length && n < o.length; ) {
    const a = nC(s[n], o[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(o.length - s.length) === 1) {
    if (Vd(s))
      return 1;
    if (Vd(o))
      return -1;
  }
  return o.length - s.length;
}
function Vd(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const oC = {
  type: 0,
  value: ""
}, aC = /[a-zA-Z0-9_]/;
function iC(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[oC]];
  if (!e.startsWith("/"))
    throw new Error({}.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(p) {
    throw new Error(`ERR (${n})/"${d}": ${p}`);
  }
  let n = 0, s = n;
  const o = [];
  let a;
  function r() {
    a && o.push(a), a = [];
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
      s = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        u === "/" ? (d && c(), r()) : u === ":" ? (c(), n = 1) : g();
        break;
      case 4:
        g(), n = s;
        break;
      case 1:
        u === "(" ? n = 2 : aC.test(u) ? g() : (c(), n = 0, u !== "*" && u !== "?" && u !== "+" && l--);
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
  return n === 2 && t(`Unfinished custom RegExp for param "${d}"`), c(), r(), o;
}
function rC(e, t, n) {
  const s = tC(iC(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const r of s.keys)
      a.has(r.name) && W(`Found duplicated params with name "${r.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(r.name);
  }
  const o = Q(s, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function lC(e, t) {
  const n = [], s = /* @__PURE__ */ new Map();
  t = Td({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(i) {
    return s.get(i);
  }
  function a(i, c, g) {
    const p = !g, m = cC(i);
    ({}).NODE_ENV !== "production" && pC(m, c), m.aliasOf = g && g.record;
    const h = Td(t, i), f = [
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
      if (w = rC(y, c, h), {}.NODE_ENV !== "production" && c && S[0] === "/" && mC(w, c), g ? (g.alias.push(w), {}.NODE_ENV !== "production" && gC(g, w)) : (v = v || w, v !== w && v.alias.push(w), p && i.name && !Ld(w) && r(i.name)), m.children) {
        const b = m.children;
        for (let E = 0; E < b.length; E++)
          a(b[E], w, g && g.children[E]);
      }
      g = g || w, (w.record.components && Object.keys(w.record.components).length || w.record.name || w.record.redirect) && u(w);
    }
    return v ? () => {
      r(v);
    } : la;
  }
  function r(i) {
    if (of(i)) {
      const c = s.get(i);
      c && (s.delete(i), n.splice(n.indexOf(c), 1), c.children.forEach(r), c.alias.forEach(r));
    } else {
      const c = n.indexOf(i);
      c > -1 && (n.splice(c, 1), i.record.name && s.delete(i.record.name), i.children.forEach(r), i.alias.forEach(r));
    }
  }
  function l() {
    return n;
  }
  function u(i) {
    let c = 0;
    for (; c < n.length && sC(i, n[c]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[c].record.path || !af(i, n[c])); )
      c++;
    n.splice(c, 0, i), i.record.name && !Ld(i) && s.set(i.record.name, i);
  }
  function d(i, c) {
    let g, p = {}, m, h;
    if ("name" in i && i.name) {
      if (g = s.get(i.name), !g)
        throw qs(1, {
          location: i
        });
      if ({}.NODE_ENV !== "production") {
        const v = Object.keys(i.params || {}).filter((y) => !g.keys.find((S) => S.name === y));
        v.length && W(`Discarded invalid param(s) "${v.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = g.record.name, p = Q(
        // paramsFromLocation is a new object
        Ed(
          c.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((v) => !v.optional).map((v) => v.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && Ed(i.params, g.keys.map((v) => v.name))
      ), m = g.stringify(p);
    } else if ("path" in i)
      m = i.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && W(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((v) => v.re.test(m)), g && (p = g.parse(m), h = g.record.name);
    else {
      if (g = c.name ? s.get(c.name) : n.find((v) => v.re.test(c.path)), !g)
        throw qs(1, {
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
      meta: dC(f)
    };
  }
  return e.forEach((i) => a(i)), { addRoute: a, resolve: d, removeRoute: r, getRoutes: l, getRecordMatcher: o };
}
function Ed(e, t) {
  const n = {};
  for (const s of t)
    s in e && (n[s] = e[s]);
  return n;
}
function cC(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: uC(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function uC(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const s in e.components)
      t[s] = typeof n == "object" ? n[s] : n;
  return t;
}
function Ld(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function dC(e) {
  return e.reduce((t, n) => Q(t, n.meta), {});
}
function Td(e, t) {
  const n = {};
  for (const s in e)
    n[s] = s in t ? t[s] : e[s];
  return n;
}
function jc(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function gC(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(jc.bind(null, n)))
      return W(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(jc.bind(null, n)))
      return W(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function pC(e, t) {
  t && t.record.name && !e.name && !e.path && W(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function mC(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(jc.bind(null, n)))
      return W(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function af(e, t) {
  return t.children.some((n) => n === e || af(e, n));
}
const rf = /#/g, hC = /&/g, fC = /\//g, wC = /=/g, vC = /\?/g, lf = /\+/g, _C = /%5B/g, SC = /%5D/g, cf = /%5E/g, yC = /%60/g, uf = /%7B/g, xC = /%7C/g, df = /%7D/g, CC = /%20/g;
function wu(e) {
  return encodeURI("" + e).replace(xC, "|").replace(_C, "[").replace(SC, "]");
}
function bC(e) {
  return wu(e).replace(uf, "{").replace(df, "}").replace(cf, "^");
}
function Hc(e) {
  return wu(e).replace(lf, "%2B").replace(CC, "+").replace(rf, "%23").replace(hC, "%26").replace(yC, "`").replace(uf, "{").replace(df, "}").replace(cf, "^");
}
function kC(e) {
  return Hc(e).replace(wC, "%3D");
}
function $C(e) {
  return wu(e).replace(rf, "%23").replace(vC, "%3F");
}
function VC(e) {
  return e == null ? "" : $C(e).replace(fC, "%2F");
}
function ga(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && W(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function EC(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const s = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < s.length; ++o) {
    const a = s[o].replace(lf, " "), r = a.indexOf("="), l = ga(r < 0 ? a : a.slice(0, r)), u = r < 0 ? null : ga(a.slice(r + 1));
    if (l in t) {
      let d = t[l];
      ut(d) || (d = t[l] = [d]), d.push(u);
    } else
      t[l] = u;
  }
  return t;
}
function Ad(e) {
  let t = "";
  for (let n in e) {
    const s = e[n];
    if (n = kC(n), s == null) {
      s !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (ut(s) ? s.map((a) => a && Hc(a)) : [s && Hc(s)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function LC(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 && (t[n] = ut(s) ? s.map((o) => o == null ? null : "" + o) : s == null ? s : "" + s);
  }
  return t;
}
const TC = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), Dd = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), lr = Symbol({}.NODE_ENV !== "production" ? "router" : ""), gf = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), qc = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function mo() {
  let e = [];
  function t(s) {
    return e.push(s), () => {
      const o = e.indexOf(s);
      o > -1 && e.splice(o, 1);
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
function On(e, t, n, s, o) {
  const a = s && // name is defined if record is because of the function overload
  (s.enterCallbacks[o] = s.enterCallbacks[o] || []);
  return () => new Promise((r, l) => {
    const u = (c) => {
      c === !1 ? l(qs(4, {
        from: n,
        to: t
      })) : c instanceof Error ? l(c) : Kx(c) ? l(qs(2, {
        from: t,
        to: c
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      s.enterCallbacks[o] === a && typeof c == "function" && a.push(c), r());
    }, d = e.call(s && s.instances[o], t, n, {}.NODE_ENV !== "production" ? AC(u, t, n) : u);
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
function AC(e, t, n) {
  let s = 0;
  return function() {
    s++ === 1 && W(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, s === 1 && e.apply(null, arguments);
  };
}
function Mr(e, t, n, s) {
  const o = [];
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
        if (DC(l)) {
          const d = (l.__vccOpts || l)[t];
          d && o.push(On(d, n, s, a, r));
        } else {
          let u = l();
          ({}).NODE_ENV !== "production" && !("catch" in u) && (W(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), u = Promise.resolve(u)), o.push(() => u.then((d) => {
            if (!d)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = Ax(d) ? d.default : d;
            a.components[r] = i;
            const g = (i.__vccOpts || i)[t];
            return g && On(g, n, s, a, r)();
          }));
        }
    }
  }
  return o;
}
function DC(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Pd(e) {
  const t = Hs(lr), n = Hs(gf), s = Jt(() => t.resolve(ra(e.to))), o = Jt(() => {
    const { matched: u } = s.value, { length: d } = u, i = u[d - 1], c = n.matched;
    if (!i || !c.length)
      return -1;
    const g = c.findIndex(Hn.bind(null, i));
    if (g > -1)
      return g;
    const p = Bd(u[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Bd(i) === p && // avoid comparing the child with its parent
      c[c.length - 1].path !== p ? c.findIndex(Hn.bind(null, u[d - 2])) : g
    );
  }), a = Jt(() => o.value > -1 && NC(n.params, s.value.params)), r = Jt(() => o.value > -1 && o.value === n.matched.length - 1 && nf(n.params, s.value.params));
  function l(u = {}) {
    return FC(u) ? t[ra(e.replace) ? "replace" : "push"](
      ra(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(la) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && Sn) {
    const u = Jh();
    if (u) {
      const d = {
        route: s.value,
        isActive: a.value,
        isExactActive: r.value
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(d), kx(() => {
        d.route = s.value, d.isActive = a.value, d.isExactActive = r.value;
      }, { flush: "post" });
    }
  }
  return {
    route: s,
    href: Jt(() => s.value.href),
    isActive: a,
    isExactActive: r,
    navigate: l
  };
}
const PC = /* @__PURE__ */ Zh({
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
  useLink: Pd,
  setup(e, { slots: t }) {
    const n = $x(Pd(e)), { options: s } = Hs(lr), o = Jt(() => ({
      [Fd(e.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Fd(e.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : ef("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: o.value
      }, a);
    };
  }
}), BC = PC;
function FC(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function NC(e, t) {
  for (const n in t) {
    const s = t[n], o = e[n];
    if (typeof s == "string") {
      if (s !== o)
        return !1;
    } else if (!ut(o) || o.length !== s.length || s.some((a, r) => a !== o[r]))
      return !1;
  }
  return !0;
}
function Bd(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Fd = (e, t, n) => e != null ? e : t != null ? t : n, MC = /* @__PURE__ */ Zh({
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
    ({}).NODE_ENV !== "production" && IC();
    const s = Hs(qc), o = Jt(() => e.route || s.value), a = Hs(Dd, 0), r = Jt(() => {
      let d = ra(a);
      const { matched: i } = o.value;
      let c;
      for (; (c = i[d]) && !c.components; )
        d++;
      return d;
    }), l = Jt(() => o.value.matched[r.value]);
    Br(Dd, Jt(() => r.value + 1)), Br(TC, l), Br(qc, o);
    const u = Vx();
    return tf(() => [u.value, l.value, e.name], ([d, i, c], [g, p, m]) => {
      i && (i.instances[c] = d, p && p !== i && d && d === g && (i.leaveGuards.size || (i.leaveGuards = p.leaveGuards), i.updateGuards.size || (i.updateGuards = p.updateGuards))), d && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !Hn(i, p) || !g) && (i.enterCallbacks[c] || []).forEach((h) => h(d));
    }, { flush: "post" }), () => {
      const d = o.value, i = e.name, c = l.value, g = c && c.components[i];
      if (!g)
        return Nd(n.default, { Component: g, route: d });
      const p = c.props[i], m = p ? p === !0 ? d.params : typeof p == "function" ? p(d) : p : null, f = ef(g, Q({}, m, t, {
        onVnodeUnmounted: (w) => {
          w.component.isUnmounted && (c.instances[i] = null);
        },
        ref: u
      }));
      if ({}.NODE_ENV !== "production" && Sn && f.ref) {
        const w = {
          depth: r.value,
          name: c.name,
          path: c.path,
          meta: c.meta
        };
        (ut(f.ref) ? f.ref.map((y) => y.i) : [f.ref.i]).forEach((y) => {
          y.__vrv_devtools = w;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Nd(n.default, { Component: f, route: d }) || f
      );
    };
  }
});
function Nd(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const UC = MC;
function IC() {
  const e = Jh(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const s = t === "KeepAlive" ? "keep-alive" : "transition";
    W(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`);
  }
}
function ho(e, t) {
  const n = Q({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((s) => WC(s, ["instances", "children", "aliasOf"]))
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
function Ma(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let RC = 0;
function zC(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const s = RC++;
  bx({
    id: "org.vuejs.router" + (s ? "." + s : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (o) => {
    typeof o.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), o.on.inspectComponent((i, c) => {
      i.instanceData && i.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: ho(t.currentRoute.value, "Current Route")
      });
    }), o.on.visitComponentTree(({ treeNode: i, componentInstance: c }) => {
      if (c.__vrv_devtools) {
        const g = c.__vrv_devtools;
        i.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: pf
        });
      }
      ut(c.__vrl_devtools) && (c.__devtoolsApi = o, c.__vrl_devtools.forEach((g) => {
        let p = ff, m = "";
        g.isExactActive ? (p = hf, m = "This is exactly active") : g.isActive && (p = mf, m = "This link is active"), i.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: m,
          backgroundColor: p
        });
      }));
    }), tf(t.currentRoute, () => {
      u(), o.notifyComponentUpdate(), o.sendInspectorTree(l), o.sendInspectorState(l);
    });
    const a = "router:navigations:" + s;
    o.addTimelineLayer({
      id: a,
      label: `Router${s ? " " + s : ""} Navigations`,
      color: 4237508
    }), t.onError((i, c) => {
      o.addTimelineEvent({
        layerId: a,
        event: {
          title: "Error during Navigation",
          subtitle: c.fullPath,
          logType: "error",
          time: o.now(),
          data: { error: i },
          groupId: c.meta.__navigationId
        }
      });
    });
    let r = 0;
    t.beforeEach((i, c) => {
      const g = {
        guard: Ma("beforeEach"),
        from: ho(c, "Current Location during this navigation"),
        to: ho(i, "Target location")
      };
      Object.defineProperty(i.meta, "__navigationId", {
        value: r++
      }), o.addTimelineEvent({
        layerId: a,
        event: {
          time: o.now(),
          title: "Start of navigation",
          subtitle: i.fullPath,
          data: g,
          groupId: i.meta.__navigationId
        }
      });
    }), t.afterEach((i, c, g) => {
      const p = {
        guard: Ma("afterEach")
      };
      g ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, p.status = Ma("❌")) : p.status = Ma("✅"), p.from = ho(c, "Current Location during this navigation"), p.to = ho(i, "Target location"), o.addTimelineEvent({
        layerId: a,
        event: {
          title: "End of navigation",
          subtitle: i.fullPath,
          time: o.now(),
          data: p,
          logType: g ? "warning" : "default",
          groupId: i.meta.__navigationId
        }
      });
    });
    const l = "router-inspector:" + s;
    o.addInspector({
      id: l,
      label: "Routes" + (s ? " " + s : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function u() {
      if (!d)
        return;
      const i = d;
      let c = n.getRoutes().filter((g) => !g.parent);
      c.forEach(_f), i.filter && (c = c.filter((g) => (
        // save matches state based on the payload
        Gc(g, i.filter.toLowerCase())
      ))), c.forEach((g) => vf(g, t.currentRoute.value)), i.rootNodes = c.map(wf);
    }
    let d;
    o.on.getInspectorTree((i) => {
      d = i, i.app === e && i.inspectorId === l && u();
    }), o.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === l) {
        const g = n.getRoutes().find((p) => p.record.__vd_id === i.nodeId);
        g && (i.state = {
          options: jC(g)
        });
      }
    }), o.sendInspectorTree(l), o.sendInspectorState(l);
  });
}
function OC(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function jC(e) {
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
        display: e.keys.map((s) => `${s.name}${OC(s)}`).join(" "),
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
    value: e.alias.map((s) => s.record.path)
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
        display: e.score.map((s) => s.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: e.score
      }
    }
  }), n;
}
const pf = 15485081, mf = 2450411, hf = 8702998, HC = 2282478, ff = 16486972, qC = 6710886;
function wf(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: HC
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: ff
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: pf
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: hf
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: mf
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: qC
  });
  let s = n.__vd_id;
  return s == null && (s = String(GC++), n.__vd_id = s), {
    id: s,
    label: n.path,
    tags: t,
    children: e.children.map(wf)
  };
}
let GC = 0;
const XC = /^\/(.*)\/([a-z]*)$/;
function vf(e, t) {
  const n = t.matched.length && Hn(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((s) => Hn(s, e.record))), e.children.forEach((s) => vf(s, t));
}
function _f(e) {
  e.__vd_match = !1, e.children.forEach(_f);
}
function Gc(e, t) {
  const n = String(e.re).match(XC);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => Gc(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const o = e.record.path.toLowerCase(), a = ga(o);
  return !t.startsWith("/") && (a.includes(t) || o.includes(t)) || a.startsWith(t) || o.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => Gc(r, t));
}
function WC(e, t) {
  const n = {};
  for (const s in e)
    t.includes(s) || (n[s] = e[s]);
  return n;
}
function KC(e) {
  const t = lC(e.routes, e), n = e.parseQuery || EC, s = e.stringifyQuery || Ad, o = e.history;
  if ({}.NODE_ENV !== "production" && !o)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = mo(), r = mo(), l = mo(), u = Ex($n);
  let d = $n;
  Sn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = Fr.bind(null, (_) => "" + _), c = Fr.bind(null, VC), g = (
    // @ts-expect-error: intentionally avoid the type check
    Fr.bind(null, ga)
  );
  function p(_, T) {
    let A, F;
    return of(_) ? (A = t.getRecordMatcher(_), F = T) : F = _, t.addRoute(F, A);
  }
  function m(_) {
    const T = t.getRecordMatcher(_);
    T ? t.removeRoute(T) : {}.NODE_ENV !== "production" && W(`Cannot remove non-existent route "${String(_)}"`);
  }
  function h() {
    return t.getRoutes().map((_) => _.record);
  }
  function f(_) {
    return !!t.getRecordMatcher(_);
  }
  function w(_, T) {
    if (T = Q({}, T || u.value), typeof _ == "string") {
      const z = Nr(n, _, T.path), ie = t.resolve({ path: z.path }, T), et = o.createHref(z.fullPath);
      return {}.NODE_ENV !== "production" && (et.startsWith("//") ? W(`Location "${_}" resolved to "${et}". A resolved location cannot start with multiple slashes.`) : ie.matched.length || W(`No match found for location with path "${_}"`)), Q(z, ie, {
        params: g(ie.params),
        hash: ga(z.hash),
        redirectedFrom: void 0,
        href: et
      });
    }
    let A;
    if ("path" in _)
      ({}).NODE_ENV !== "production" && "params" in _ && !("name" in _) && // @ts-expect-error: the type is never
      Object.keys(_.params).length && W(`Path "${_.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), A = Q({}, _, {
        path: Nr(n, _.path, T.path).path
      });
    else {
      const z = Q({}, _.params);
      for (const ie in z)
        z[ie] == null && delete z[ie];
      A = Q({}, _, {
        params: c(z)
      }), T.params = c(T.params);
    }
    const F = t.resolve(A, T), X = _.hash || "";
    ({}).NODE_ENV !== "production" && X && !X.startsWith("#") && W(`A \`hash\` should always start with the character "#". Replace "${X}" with "#${X}".`), F.params = i(g(F.params));
    const ge = Bx(s, Q({}, _, {
      hash: bC(X),
      path: F.path
    })), q = o.createHref(ge);
    return {}.NODE_ENV !== "production" && (q.startsWith("//") ? W(`Location "${_}" resolved to "${q}". A resolved location cannot start with multiple slashes.`) : F.matched.length || W(`No match found for location with path "${"path" in _ ? _.path : _}"`)), Q({
      fullPath: ge,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: X,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        s === Ad ? LC(_.query) : _.query || {}
      )
    }, F, {
      redirectedFrom: void 0,
      href: q
    });
  }
  function v(_) {
    return typeof _ == "string" ? Nr(n, _, u.value.path) : Q({}, _);
  }
  function y(_, T) {
    if (d !== _)
      return qs(8, {
        from: T,
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
    const T = _.matched[_.matched.length - 1];
    if (T && T.redirect) {
      const { redirect: A } = T;
      let F = typeof A == "function" ? A(_) : A;
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
  function x(_, T) {
    const A = d = w(_), F = u.value, X = _.state, ge = _.force, q = _.replace === !0, z = E(A);
    if (z)
      return x(
        Q(v(z), {
          state: typeof z == "object" ? Q({}, X, z.state) : X,
          force: ge,
          replace: q
        }),
        // keep original redirectedFrom if it exists
        T || A
      );
    const ie = A;
    ie.redirectedFrom = T;
    let et;
    return !ge && yd(s, F, A) && (et = qs(16, { to: ie, from: F }), Pe(
      F,
      F,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (et ? Promise.resolve(et) : P(ie, F)).catch(($e) => nn($e) ? (
      // navigation redirects still mark the router as ready
      nn(
        $e,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? $e : We($e)
    ) : (
      // reject any unknown error
      le($e, ie, F)
    )).then(($e) => {
      if ($e) {
        if (nn(
          $e,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          yd(s, w($e.to), ie) && // and we have done it a couple of times
          T && // @ts-expect-error: added only in dev
          (T._count = T._count ? (
            // @ts-expect-error
            T._count + 1
          ) : 1) > 30 ? (W(`Detected a possibly infinite redirection in a navigation guard when going from "${F.fullPath}" to "${ie.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : x(
            // keep options
            Q({
              // preserve an existing replacement but allow the redirect to override it
              replace: q
            }, v($e.to), {
              state: typeof $e.to == "object" ? Q({}, X, $e.to.state) : X,
              force: ge
            }),
            // preserve the original redirectedFrom if any
            T || ie
          );
      } else
        $e = se(ie, F, !0, q, X);
      return H(ie, F, $e), $e;
    });
  }
  function I(_, T) {
    const A = y(_, T);
    return A ? Promise.reject(A) : Promise.resolve();
  }
  function L(_) {
    const T = B.values().next().value;
    return T && typeof T.runWithContext == "function" ? T.runWithContext(_) : _();
  }
  function P(_, T) {
    let A;
    const [F, X, ge] = YC(_, T);
    A = Mr(F.reverse(), "beforeRouteLeave", _, T);
    for (const z of F)
      z.leaveGuards.forEach((ie) => {
        A.push(On(ie, _, T));
      });
    const q = I.bind(null, _, T);
    return A.push(q), Y(A).then(() => {
      A = [];
      for (const z of a.list())
        A.push(On(z, _, T));
      return A.push(q), Y(A);
    }).then(() => {
      A = Mr(X, "beforeRouteUpdate", _, T);
      for (const z of X)
        z.updateGuards.forEach((ie) => {
          A.push(On(ie, _, T));
        });
      return A.push(q), Y(A);
    }).then(() => {
      A = [];
      for (const z of ge)
        if (z.beforeEnter)
          if (ut(z.beforeEnter))
            for (const ie of z.beforeEnter)
              A.push(On(ie, _, T));
          else
            A.push(On(z.beforeEnter, _, T));
      return A.push(q), Y(A);
    }).then(() => (_.matched.forEach((z) => z.enterCallbacks = {}), A = Mr(ge, "beforeRouteEnter", _, T), A.push(q), Y(A))).then(() => {
      A = [];
      for (const z of r.list())
        A.push(On(z, _, T));
      return A.push(q), Y(A);
    }).catch((z) => nn(
      z,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? z : Promise.reject(z));
  }
  function H(_, T, A) {
    l.list().forEach((F) => L(() => F(_, T, A)));
  }
  function se(_, T, A, F, X) {
    const ge = y(_, T);
    if (ge)
      return ge;
    const q = T === $n, z = Sn ? history.state : {};
    A && (F || q ? o.replace(_.fullPath, Q({
      scroll: q && z && z.scroll
    }, X)) : o.push(_.fullPath, X)), u.value = _, Pe(_, T, A, q), We();
  }
  let ae;
  function te() {
    ae || (ae = o.listen((_, T, A) => {
      if (!M.listening)
        return;
      const F = w(_), X = E(F);
      if (X) {
        x(Q(X, { replace: !0 }), F).catch(la);
        return;
      }
      d = F;
      const ge = u.value;
      Sn && Ox(Cd(ge.fullPath, A.delta), rr()), P(F, ge).catch((q) => nn(
        q,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? q : nn(
        q,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (x(
        q.to,
        F
        // avoid an uncaught rejection, let push call triggerError
      ).then((z) => {
        nn(
          z,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !A.delta && A.type === da.pop && o.go(-1, !1);
      }).catch(la), Promise.reject()) : (A.delta && o.go(-A.delta, !1), le(q, F, ge))).then((q) => {
        q = q || se(
          // after navigation, all matched components are resolved
          F,
          ge,
          !1
        ), q && (A.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !nn(
          q,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? o.go(-A.delta, !1) : A.type === da.pop && nn(
          q,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && o.go(-1, !1)), H(F, ge, q);
      }).catch(la);
    }));
  }
  let R = mo(), J = mo(), oe;
  function le(_, T, A) {
    We(_);
    const F = J.list();
    return F.length ? F.forEach((X) => X(_, T, A)) : ({}.NODE_ENV !== "production" && W("uncaught error during route navigation:"), console.error(_)), Promise.reject(_);
  }
  function ke() {
    return oe && u.value !== $n ? Promise.resolve() : new Promise((_, T) => {
      R.add([_, T]);
    });
  }
  function We(_) {
    return oe || (oe = !_, te(), R.list().forEach(([T, A]) => _ ? A(_) : T()), R.reset()), _;
  }
  function Pe(_, T, A, F) {
    const { scrollBehavior: X } = e;
    if (!Sn || !X)
      return Promise.resolve();
    const ge = !A && jx(Cd(_.fullPath, 0)) || (F || !A) && history.state && history.state.scroll || null;
    return Tx().then(() => X(_, T, ge)).then((q) => q && zx(q)).catch((q) => le(q, _, T));
  }
  const Z = (_) => o.go(_);
  let U;
  const B = /* @__PURE__ */ new Set(), M = {
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
    go: Z,
    back: () => Z(-1),
    forward: () => Z(1),
    beforeEach: a.add,
    beforeResolve: r.add,
    afterEach: l.add,
    onError: J.add,
    isReady: ke,
    install(_) {
      const T = this;
      _.component("RouterLink", BC), _.component("RouterView", UC), _.config.globalProperties.$router = T, Object.defineProperty(_.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => ra(u)
      }), Sn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !U && u.value === $n && (U = !0, S(o.location).catch((X) => {
        ({}).NODE_ENV !== "production" && W("Unexpected error when starting the router:", X);
      }));
      const A = {};
      for (const X in $n)
        Object.defineProperty(A, X, {
          get: () => u.value[X],
          enumerable: !0
        });
      _.provide(lr, T), _.provide(gf, Lx(A)), _.provide(qc, u);
      const F = _.unmount;
      B.add(_), _.unmount = function() {
        B.delete(_), B.size < 1 && (d = $n, ae && ae(), ae = null, u.value = $n, U = !1, oe = !1), F();
      }, {}.NODE_ENV !== "production" && Sn && zC(_, T, t);
    }
  };
  function Y(_) {
    return _.reduce((T, A) => T.then(() => L(A)), Promise.resolve());
  }
  return M;
}
function YC(e, t) {
  const n = [], s = [], o = [], a = Math.max(t.matched.length, e.matched.length);
  for (let r = 0; r < a; r++) {
    const l = t.matched[r];
    l && (e.matched.find((d) => Hn(d, l)) ? s.push(l) : n.push(l));
    const u = e.matched[r];
    u && (t.matched.find((d) => Hn(d, u)) || o.push(u));
  }
  return [n, s, o];
}
function Ze() {
  return Hs(lr);
}
const QC = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, s = parseInt(e.slice(6, 8)), o = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), r = parseInt(e.slice(12, 14)), l = new Date(Date.UTC(t, n, s, o, a, r)), d = (/* @__PURE__ */ new Date()).getTime() - l.getTime();
  return Math.round(d / (1e3 * 3600 * 24));
}, JC = (e) => {
  const t = QC(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const kt = window.Vue.unref, ws = window.Vue.createVNode, sn = window.Vue.createElementVNode, Md = window.Vue.renderSlot, Ud = window.Vue.withModifiers, Ur = window.Vue.toDisplayString, Ir = window.Vue.withCtx, ZC = window.Vue.openBlock, eb = window.Vue.createElementBlock, tb = window.Vue.createCommentVNode, nb = { class: "col shrink pe-4" }, sb = { class: "col" }, ob = { class: "cx-translation__details column justify-between ma-0" }, ab = { class: "row ma-0" }, ib = { class: "col grow" }, rb = { class: "col shrink ps-2" }, lb = ["dir", "textContent"], cb = ["dir", "textContent"], ub = ["textContent"], db = window.Vuex.useStore, gb = window.Vue.computed, Sf = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: Yc,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e, { emit: t }) {
    const n = e, s = db(), o = (l, u) => {
      const d = s.getters["mediawiki/getPage"](l, u);
      return d == null ? void 0 : d.thumbnail;
    }, a = we(), r = gb(() => {
      const l = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, u = JC(n.translation.startTimestamp);
      return a.i18n(
        l[u.postfix],
        u.value
      );
    });
    return (l, u) => e.translation ? (ZC(), eb("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: u[1] || (u[1] = Ud((d) => l.$emit("click"), ["stop"]))
    }, [
      sn("div", nb, [
        ws(kt(Kc), {
          class: "cx-translation__thumbnail",
          thumbnail: o(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      sn("div", sb, [
        sn("div", ob, [
          sn("div", ab, [
            sn("div", ib, [
              Md(l.$slots, "title")
            ]),
            sn("div", rb, [
              ws(kt(Je), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: u[0] || (u[0] = Ud((d) => l.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          Md(l.$slots, "mid-content"),
          ws(kt(N), { class: "cx-translation__footer ma-0" }, {
            default: Ir(() => [
              ws(kt(k), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: Ir(() => [
                  sn("span", {
                    class: "mw-ui-autonym",
                    dir: kt(j.getDir)(e.translation.sourceLanguage),
                    textContent: Ur(kt(j.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, lb),
                  ws(kt(Je), {
                    icon: kt(D0),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  sn("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: kt(j.getDir)(e.translation.targetLanguage),
                    textContent: Ur(kt(j.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, cb)
                ]),
                _: 1
              }),
              ws(kt(k), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: Ir(() => [
                  sn("span", {
                    textContent: Ur(r.value)
                  }, null, 8, ub)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : tb("", !0);
  }
};
const fo = window.Vue.unref, pb = window.Vue.toDisplayString, mb = window.Vue.normalizeClass, hb = window.Vue.createElementVNode, Rr = window.Vue.openBlock, fb = window.Vue.createElementBlock, Id = window.Vue.createCommentVNode, Rd = window.Vue.createVNode, Ua = window.Vue.withCtx, zd = window.Vue.createBlock, wb = ["lang", "textContent"], vb = ["lang", "innerHTML"], _b = window.Vue.computed, Sb = window.Vue.inject, yb = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: Qi,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, s = Sb("colors").gray200, o = _b(
      () => {
        var u;
        return ((u = t.translation.progress) == null ? void 0 : u.any) * 100 || 0;
      }
    ), a = Ze(), { setTranslationURLParams: r } = D(), l = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (u, d) => (Rr(), zd(Sf, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": fo(lh),
      onActionIconClicked: d[0] || (d[0] = (i) => u.$emit("delete-translation")),
      onClick: l
    }, {
      title: Ua(() => [
        hb("h5", {
          class: mb(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: pb(e.translation.sourceTitle)
        }, null, 10, wb),
        e.translation.isLeadSectionTranslation ? Id("", !0) : (Rr(), fb("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          innerHTML: e.translation.sourceSectionTitle
        }, null, 8, vb))
      ]),
      "mid-content": Ua(() => [
        e.translation.progress ? (Rr(), zd(fo(N), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Ua(() => [
            Rd(fo(k), null, {
              default: Ua(() => [
                Rd(fo(dh), {
                  class: "cx-translation__progress-bar",
                  value: o.value,
                  height: "4px",
                  width: "64px",
                  background: fo(s)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Id("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, xb = window.Vuex.useStore, yf = [], Cb = (e, t, n) => yf.some(
  (s) => s.sourceLanguage === e && s.targetLanguage === t && s.sourceTitle === n
), bb = (e, t, n) => {
  const s = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  yf.push(s);
}, kb = () => {
  const e = xb();
  return (t, n, s) => C(void 0, null, function* () {
    let o = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, s);
    return !o && !Cb(t, n, s) && (o = yield me.fetchSectionSuggestion(
      t,
      s,
      n
    ), bb(t, n, s), o && (o.isListable = !1, e.commit("suggestions/addSectionSuggestion", o))), o;
  });
}, xf = "cx-translation-session-position-", Cf = () => xf + mw.user.sessionId(), $b = () => {
  const e = parseInt(
    mw.storage.get(Cf())
  );
  return isNaN(e) ? 0 : e;
}, Vb = function(e) {
  const t = Cf();
  mw.storage.set(t, e);
}, Eb = () => {
  Object.keys(mw.storage.store).filter((e) => e.startsWith(xf)).forEach((e) => mw.storage.remove(e));
}, Lb = () => {
  const e = $b();
  return e % 10 === 0 && Eb(), Vb(e + 1), e;
};
let Ia = null;
const Tb = (e) => {
  if (Ia)
    return Promise.resolve(Ia);
  const t = "https://en.wikipedia.org/w/api.php", n = new URLSearchParams({
    action: "query",
    meta: "globaluserinfo",
    guiuser: e,
    guiprop: "editcount",
    formatversion: 2,
    origin: "*",
    format: "json"
  }), s = t + "?" + n;
  return fetch(s).then((o) => o.json()).then((o) => (Ia = o.query.globaluserinfo.editcount, Ia)).catch((o) => {
    mw.log.error("Error while fetching global edit count for user. ", o);
  });
}, Ab = (e) => e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
function Db(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = mw.user.sessionId(), n = mw.config.get("wgDBname"), s = `cx_sx_${t}_${e.access_method}_${n}`, o = "mediawiki.content_translation_event", a = mw.user.isAnon(), r = mw.user.getName(), l = {
    $schema: "/analytics/mediawiki/content_translation_event/1.11.0",
    wiki_db: n,
    user_name: r,
    web_session_id: t,
    web_pageview_id: mw.user.getPageviewToken(),
    user_is_anonymous: a,
    content_translation_session_id: s,
    content_translation_session_position: Lb()
  };
  return a ? Promise.resolve(
    mw.eventLog.submit(o, Object.assign({}, l, e))
  ) : Tb(r).then((u) => {
    mw.eventLog.submit(
      o,
      Object.assign({}, l, e, {
        user_global_edit_count: u,
        user_global_edit_count_bucket: Ab(u)
      })
    );
  });
}
const Pb = window.Vuex.useStore, Bb = (e, t, n) => [
  `Event ${e} is missing ${t}.`,
  `Current URL params: ${location.href}.`,
  `Previous route: ${n}`
], bt = () => {
  const e = Pb(), { previousRoute: t } = Le(e), n = [
    "event_source",
    "translation_source_language",
    "translation_target_language",
    "translation_source_title"
  ], s = (o) => {
    for (const a of n)
      if (o[a] === null) {
        const r = Bb(
          o.event_type,
          a,
          t.value
        );
        mw.errorLogger.logError(
          new Error(r.join(" ")),
          "error.contenttranslation"
        );
      }
  };
  return (o) => (o.access_method || (o.access_method = Xs ? "desktop" : "mobile web"), s(o), Db(o));
}, bf = window.Vue.ref, kf = bf(null), Xc = bf(null), Fb = (e) => {
  e || mw.errorLogger.logError(
    new Error("[CX] Empty event source set"),
    "error.contenttranslation"
  ), kf.value = e;
}, Nb = (e) => {
  Xc.value = e;
}, cr = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: s
  } = D(), o = bt();
  return {
    logDashboardTranslationStartEvent: () => {
      const r = {
        event_type: "dashboard_translation_start",
        event_source: kf.value,
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
      return Xc.value && (r.event_context = Xc.value), s.value ? (r.translation_source_section = s.value, r.translation_type = "section") : r.translation_type = "article", o(r);
    },
    setStartTranslationEventSource: Fb,
    setStartTranslationEventContext: Nb
  };
}, Sa = () => {
  const e = Ze(), t = ar(), { setTranslationURLParams: n } = D(), { setStartTranslationEventSource: s, setStartTranslationEventContext: o } = cr();
  return (a, r, l, u, d = null, i = !0) => C(void 0, null, function* () {
    s(u), o(d);
    const c = yield t(
      r,
      l,
      a
    );
    n(c), i && e.push({ name: "sx-translation-confirmer" });
  });
};
const zr = window.Vue.withModifiers, Od = window.Vue.toDisplayString, jd = window.Vue.createElementVNode, $t = window.Vue.unref, Xn = window.Vue.createVNode, Mb = window.Vue.createTextVNode, Ra = window.Vue.openBlock, Hd = window.Vue.createElementBlock, qd = window.Vue.createCommentVNode, Gd = window.Vue.createBlock, vs = window.Vue.withCtx, Ub = ["lang", "href", "textContent"], Ib = {
  key: 0,
  class: "cx-published-translation__personal-draft-indicator"
}, Rb = {
  key: 2,
  class: "flex"
}, zb = ["innerHTML"], Or = window.Vue.computed, Xd = window.Vue.ref, Wd = window.Codex.CdxButton, jr = window.Codex.CdxIcon, Ob = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: fu,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Xd(!0), s = Xd(null), o = Or(() => {
      var p;
      return (p = s.value) == null ? void 0 : p.missingSections;
    }), a = Or(
      () => o.value && Object.keys(o.value)[0]
    );
    kb()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((p) => s.value = p).catch((p) => console.log(p)).finally(() => n.value = !1);
    const { setSectionURLParam: l } = D(), u = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, d = Sa(), i = (p) => {
      d(
        t.translation.sourceTitle,
        t.translation.sourceLanguage,
        t.translation.targetLanguage,
        "continue_published"
      ), p && l(p);
    }, c = mw.config.get("wgNamespaceIds"), g = Or(() => new mw.Title(t.translation.targetTitle).getNamespaceId() === c.user);
    return (p, m) => (Ra(), Gd(Sf, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: u
    }, {
      title: vs(() => [
        jd("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: m[0] || (m[0] = zr(() => {
          }, ["stop"])),
          textContent: Od(e.translation.sourceTitle)
        }, null, 8, Ub)
      ]),
      "mid-content": vs(() => [
        Xn($t(N), { class: "ma-0" }, {
          default: vs(() => [
            Xn($t(k), null, {
              default: vs(() => [
                g.value ? (Ra(), Hd("div", Ib, [
                  Xn($t(jr), {
                    icon: $t(Oh),
                    class: "me-1",
                    size: "small"
                  }, null, 8, ["icon"]),
                  Mb(" " + Od(p.$i18n("sx-published-translation-personal-draft-indicator")), 1)
                ])) : qd("", !0),
                n.value ? (Ra(), Gd($t(ct), { key: 1 })) : o.value ? (Ra(), Hd("div", Rb, [
                  Xn($t(Wd), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: m[1] || (m[1] = zr((h) => i(a.value), ["stop"]))
                  }, {
                    default: vs(() => [
                      Xn($t(jr), {
                        class: "me-1",
                        icon: $t(Fh)
                      }, null, 8, ["icon"]),
                      jd("span", { innerHTML: a.value }, null, 8, zb)
                    ]),
                    _: 1
                  }),
                  Xn($t(Wd), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": p.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: m[2] || (m[2] = zr((h) => i(null), ["stop"]))
                  }, {
                    default: vs(() => [
                      Xn($t(jr), { icon: $t(gu) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : qd("", !0)
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
}, jb = window.Vuex.useStore, Hb = () => {
  const { commit: e } = jb(), t = bt();
  return (n) => C(void 0, null, function* () {
    n.isArticleTranslation ? (yield xt.deleteCXTranslation(
      n
    )) && e("translator/removeCXTranslation", n.translationId) : (yield xt.deleteTranslation(
      n.sectionTranslationId,
      n.translationId,
      n.sectionId
    )) && e(
      "translator/removeTranslationBySectionTranslationId",
      n.sectionTranslationId
    );
    const s = {
      event_type: "dashboard_translation_discard",
      translation_id: n.translationId,
      translation_source_language: n.sourceLanguage,
      translation_source_title: n.sourceTitle,
      translation_target_language: n.targetLanguage,
      translation_target_title: n.targetTitle
    };
    n.sourceSectionTitle && (s.translation_source_section = n.sourceSectionTitle), n.targetSectionTitle && (s.translation_target_section = n.targetSectionTitle), t(s);
  });
};
const qb = window.Vue.resolveDirective, Hr = window.Vue.createElementVNode, Gb = window.Vue.withDirectives, qr = window.Vue.unref, Kd = window.Vue.createVNode, Yd = window.Vue.withCtx, Xb = window.Vue.openBlock, Wb = window.Vue.createBlock, Kb = { class: "pa-4" }, Yb = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, Qb = {
  __name: "SXConfirmTranslationDeletionDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: Qi,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "continue-translation",
    "discard-translation"
  ],
  setup(e, { emit: t }) {
    const n = e, s = t, o = () => s("update:modelValue", !1), a = Hb(), r = () => {
      a(n.translation), o();
    };
    return (l, u) => {
      const d = qb("i18n");
      return Xb(), Wb(qr(Ct), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: Yd(() => [
          Hr("div", Yb, [
            Kd(qr(Ge), {
              class: "grow py-3",
              large: "",
              label: l.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: o
            }, null, 8, ["label"]),
            Kd(qr(Ge), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: l.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: r
            }, null, 8, ["label"])
          ])
        ]),
        default: Yd(() => [
          Hr("div", Kb, [
            Gb(Hr("span", null, null, 512), [
              [d, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function Jb(e, t, n) {
  return C(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield Zb(t, n)).filter((o) => e.includes(o)) : [];
  });
}
function Qd(e, t, n) {
  return C(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(j.sortByAutonym) : (yield Jb(e, t, n)).sort(j.sortByAutonym);
  });
}
function Zb(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((s) => s.json()).then((s) => Object.keys(s.languagesearch || {}));
}
function ek() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function tk(e) {
  let t, n = [...e];
  const s = e.length;
  s < 10 && (t = s), s < 30 && (t = 10), s >= 30 && (t = 15);
  const o = [];
  for (; n.length; )
    o.push(n.splice(0, t));
  return o;
}
const nk = window.Vue.computed;
function sk(e, t) {
  const n = nk(() => {
    if (!t.value.length || !e.value.trim())
      return "";
    for (let o = 0; o < t.value.length; o++) {
      const a = j.getAutonym(t.value[o]);
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
const Gr = window.Vue.ref, Xr = window.Vue.watch, ok = window.Vue.computed;
function $f(e, t, n) {
  const s = Gr(""), o = Gr(-1), a = Gr(null), r = () => {
    o.value++, o.value >= l.value.length && (o.value = 0);
  }, l = ok(() => e.value ? t.value : n && n.value ? [...n.value, ...t.value] : []), u = () => {
    o.value--, o.value < 0 && (o.value = 0);
  };
  return Xr(e, () => {
    o.value = -1;
  }), Xr(t, () => {
    t.value && l.value.length > 0 && (o.value = 0);
  }), Xr(o, () => C(this, null, function* () {
    var d;
    if (o.value < 0) {
      s.value = "";
      return;
    }
    s.value = l.value[o.value], (d = a.value.querySelectorAll(`.language[lang="${s.value}"]`)[0]) == null || d.scrollIntoView(!1);
  })), { next: r, prev: u, keyboardNavigationContainer: a, selectedItem: s };
}
function vu(e, t, n) {
  let s;
  const o = (...a) => {
    const r = this, l = () => {
      s = null, n || e.apply(r, a);
    };
    n && !s && e.apply(r, a), (!s || t) && (clearTimeout(s), s = setTimeout(l, t));
  };
  return o.cancel = () => clearTimeout(s), o;
}
const za = window.Vue.renderSlot, Te = window.Vue.unref, ak = window.Vue.isRef, Jd = window.Vue.createVNode, wo = window.Vue.withModifiers, vo = window.Vue.withKeys, Vn = window.Vue.createElementVNode, ik = window.Vue.resolveDirective, Oa = window.Vue.withDirectives, Wr = window.Vue.renderList, Kr = window.Vue.Fragment, on = window.Vue.openBlock, an = window.Vue.createElementBlock, Zd = window.Vue.toDisplayString, ja = window.Vue.normalizeClass, Yr = window.Vue.createCommentVNode, rk = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, lk = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, ck = { class: "results px-3 pt-4" }, uk = { class: "results-header ps-8 pb-2" }, dk = { class: "results-languages--suggestions pa-0 ma-0" }, gk = ["lang", "dir", "aria-selected", "onClick", "textContent"], pk = { class: "results px-3 pt-4" }, mk = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, hk = ["lang", "dir", "aria-selected", "onClick", "textContent"], fk = ["aria-selected"], wk = { class: "no-results px-3 py-4" }, vk = { class: "ps-8" }, Ha = window.Vue.ref, _k = window.Vue.watch, Sk = window.Vue.onMounted, eg = window.Vue.computed, Vf = {
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
      default: ek
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = Ha(null), a = Ha(""), r = Ha([]), l = Ha(n.suggestions), u = eg(
      () => tk(r.value)
    ), d = eg(() => {
      const S = r.value.length;
      return S < 10 ? "few-results" : S < 30 ? "some-results" : "many-results";
    }), i = (S) => s("select", S), c = () => s("close"), { autocompletion: g, onTabSelect: p } = sk(
      a,
      r
    ), { next: m, prev: h, keyboardNavigationContainer: f, selectedItem: w } = $f(a, r, l), v = () => {
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
    return _k(a, vu(() => C(this, null, function* () {
      r.value = yield Qd(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), Sk(() => C(this, null, function* () {
      n.autofocus && setTimeout(() => o.value.focus(), 500), r.value = yield Qd(
        n.languages,
        "",
        n.searchAPI
      );
    })), (S, b) => {
      const E = ik("i18n");
      return on(), an("div", {
        ref_key: "keyboardNavigationContainer",
        ref: f,
        class: "mw-ui-language-selector"
      }, [
        za(S.$slots, "search", {}, () => [
          Vn("div", rk, [
            Jd(Te(Mc), {
              value: Te(g),
              "onUpdate:value": b[0] || (b[0] = (x) => ak(g) ? g.value = x : null),
              icon: Te(Uu),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            Jd(Te(Mc), {
              ref_key: "searchInputElement",
              ref: o,
              value: a.value,
              "onUpdate:value": b[1] || (b[1] = (x) => a.value = x),
              class: "mw-ui-language-selector__search pa-4",
              icon: Te(Uu),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                vo(wo(v, ["prevent"]), ["enter"]),
                vo(wo(Te(m), ["stop", "prevent"]), ["down"]),
                vo(wo(Te(h), ["stop", "prevent"]), ["up"]),
                vo(wo(c, ["prevent"]), ["esc"]),
                vo(wo(Te(p), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        Vn("section", lk, [
          e.suggestions.length && !a.value ? za(S.$slots, "suggestions", { key: 0 }, () => [
            Vn("section", ck, [
              Oa(Vn("p", uk, null, 512), [
                [E, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              Vn("ul", dk, [
                (on(!0), an(Kr, null, Wr(e.suggestions, (x) => (on(), an("li", {
                  key: x,
                  class: ja(["language ma-0", { "language--selected": x === Te(w) }]),
                  lang: x,
                  dir: Te(j.getDir)(x),
                  "aria-selected": x === Te(w) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (I) => i(x),
                  textContent: Zd(Te(j.getAutonym)(x))
                }, null, 10, gk))), 128))
              ])
            ])
          ]) : Yr("", !0),
          u.value.length ? za(S.$slots, "search", { key: 1 }, () => [
            Vn("section", pk, [
              e.suggestions.length && !a.value ? Oa((on(), an("p", mk, null, 512)), [
                [E, void 0, "cx-sx-language-selector-all-languages"]
              ]) : Yr("", !0),
              (on(!0), an(Kr, null, Wr(u.value, (x, I) => (on(), an("ul", {
                key: I,
                class: ja(["results-languages pa-0 ma-0 mb-6", d.value])
              }, [
                (on(!0), an(Kr, null, Wr(x, (L) => (on(), an("li", {
                  key: L,
                  class: ja(["language ma-0", { "language--selected": L === Te(w) }]),
                  lang: L,
                  dir: Te(j.getDir)(L),
                  role: "option",
                  "aria-selected": L === Te(w) || null,
                  tabindex: "-1",
                  onClick: (P) => i(L),
                  textContent: Zd(Te(j.getAutonym)(L))
                }, null, 10, hk))), 128)),
                e.allOptionEnabled && !a.value ? Oa((on(), an("li", {
                  key: 0,
                  class: ja(["language ma-0", { "language--selected": Te(w) === "all" }]),
                  role: "option",
                  "aria-selected": Te(w) === "all" || null,
                  tabindex: "-1",
                  onClick: b[2] || (b[2] = (L) => i("all"))
                }, null, 10, fk)), [
                  [E, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : Yr("", !0)
              ], 2))), 128))
            ])
          ]) : za(S.$slots, "noresults", { key: 2 }, () => [
            Vn("section", wk, [
              Oa(Vn("h3", vk, null, 512), [
                [E, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const yk = window.Vue.resolveDirective, tg = window.Vue.withDirectives, _o = window.Vue.openBlock, So = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Ae = window.Vue.unref, ng = window.Vue.toDisplayString, Vt = window.Vue.createVNode, sg = window.Vue.withModifiers, Wn = window.Vue.withCtx, xk = window.Vue.normalizeClass, Ck = {
  key: 0,
  class: "mw-ui-autonym"
}, bk = ["lang", "dir", "textContent"], kk = {
  key: 0,
  class: "mw-ui-autonym"
}, $k = ["lang", "dir", "textContent"], yo = window.Vue.computed, Vk = window.Vue.inject, Ek = window.Vue.ref, og = window.Codex.CdxButton, Qr = window.Codex.CdxIcon, Xi = {
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
    const n = e, s = t, o = Vk("breakpoints"), a = yo(() => o.value.mobile), r = Ek(null), l = yo(() => !!r.value), u = () => r.value = "source", d = () => r.value = "target", i = () => r.value = null, c = yo(() => {
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
      i(), s(w, h);
    }, p = yo(
      () => n.selectedSourceLanguage === "all"
    ), m = yo(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, f) => {
      const w = yk("i18n");
      return _o(), So("div", {
        class: xk(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
      }, [
        Vt(Ae(N), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: Wn(() => [
            Vt(Ae(k), {
              class: "flex justify-end px-0",
              cols: a.value ? 5 : null
            }, {
              default: Wn(() => [
                Vt(Ae(og), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  onClick: sg(u, ["stop"])
                }, {
                  default: Wn(() => [
                    p.value ? tg((_o(), So("span", Ck, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (_o(), So("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: Ae(j.getDir)(e.selectedSourceLanguage),
                      textContent: ng(Ae(j.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, bk)),
                    Vt(Ae(Qr), {
                      size: "x-small",
                      icon: Ae(Uc)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["cols"]),
            Vt(Ae(k), {
              class: "sx-translation-list-language-selector__arrow flex justify-center px-0",
              cols: a.value ? 2 : null
            }, {
              default: Wn(() => [
                Vt(Ae(Qr), { icon: Ae(Nh) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            Vt(Ae(k), {
              class: "px-0",
              cols: a.value ? 5 : null
            }, {
              default: Wn(() => [
                Vt(Ae(og), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.targetLanguages.length < 2,
                  onClick: sg(d, ["stop"])
                }, {
                  default: Wn(() => [
                    m.value ? tg((_o(), So("span", kk, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (_o(), So("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: Ae(j.getDir)(e.selectedTargetLanguage),
                      textContent: ng(Ae(j.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, $k)),
                    Vt(Ae(Qr), {
                      size: "x-small",
                      icon: Ae(Uc)
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
        Vt(Ae(Ct), {
          value: l.value,
          "onUpdate:value": f[0] || (f[0] = (v) => l.value = v),
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-mode": "dark",
          onClose: i
        }, {
          default: Wn(() => [
            Vt(Ae(Vf), {
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
const ag = window.Vue.unref, Lk = window.Vue.createVNode, qa = window.Vue.createElementVNode, ig = window.Vue.toDisplayString, Tk = window.Vue.openBlock, Ak = window.Vue.createElementBlock, Dk = { class: "cx-list-empty-placeholder pa-4" }, Pk = { class: "cx-list-empty-placeholder__icon-container" }, Bk = { class: "cx-list-empty-placeholder__icon" }, Fk = ["textContent"], Nk = ["textContent"], Mk = window.Codex.CdxIcon, Ef = {
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
    return (t, n) => (Tk(), Ak("div", Dk, [
      qa("div", Pk, [
        qa("div", Bk, [
          Lk(ag(Mk), { icon: ag(Rh) }, null, 8, ["icon"])
        ])
      ]),
      qa("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: ig(e.title)
      }, null, 8, Fk),
      qa("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: ig(e.description)
      }, null, 8, Nk)
    ]));
  }
}, Uk = window.Vuex.useStore, Ik = window.Vue.ref, Ga = Ik({ draft: !1, published: !1 }), Js = () => {
  const e = Uk(), t = Ks(), n = (o) => C(void 0, null, function* () {
    let a = yield xt.fetchTranslations(o);
    e.commit("translator/clearTranslationsByStatus", o), a.forEach(
      (l) => e.commit("translator/addTranslation", l)
    );
    const r = {};
    for (const l of a) {
      const u = l.sourceLanguage;
      r[u] = r[u] || [], r[u].push(l);
    }
    Ga.value[o] = !0;
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
          new Ws({ title: c, pagelanguage: i })
        );
      });
  });
  return {
    fetchTranslationsByStatus: n,
    fetchAllTranslations: () => {
      const a = Object.keys(Ga.value).filter(
        (r) => !Ga.value[r]
      ).map(
        (r) => n(r)
      );
      return Promise.all(a).catch((r) => {
        mw.log.error("[CX] Error while fetching translations", r);
      });
    },
    translationsFetched: Ga
  };
};
const Rk = window.Vue.toDisplayString, Jr = window.Vue.normalizeClass, rg = window.Vue.createElementVNode, Ot = window.Vue.openBlock, _s = window.Vue.createBlock, Xa = window.Vue.createCommentVNode, lg = window.Vue.unref, cg = window.Vue.renderList, ug = window.Vue.Fragment, Wa = window.Vue.createElementBlock, zk = window.Vue.createVNode, dg = window.Vue.withCtx, Ok = ["textContent"], jk = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, Hk = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, Ka = window.Vue.ref, Et = window.Vue.computed, qk = window.Vue.inject, Gk = window.Vuex.useStore, gg = {
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
    const t = e, n = Ka("all"), s = Ka("all"), o = Gk(), { translationsFetched: a } = Js(), r = Et(
      () => a.value[t.translationStatus]
    ), l = Ka(!1), u = Ka(null), d = Et(
      () => t.translationStatus === "draft"
    ), i = Et(
      () => o.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), c = Et(
      () => n.value === "all"
    ), g = Et(
      () => s.value === "all"
    ), p = Et(
      () => i.value.filter(
        (b) => (c.value || b.sourceLanguage === n.value) && (g.value || b.targetLanguage === s.value)
      ).sort((b, E) => b.lastUpdatedTimestamp < E.lastUpdatedTimestamp)
    ), m = Et(() => {
      const b = i.value.map(
        (E) => E.targetLanguage
      );
      return [...new Set(b)];
    }), h = Et(() => {
      const b = i.value.map(
        (E) => E.sourceLanguage
      );
      return [...new Set(b)];
    }), f = (b) => {
      u.value = b, l.value = !0;
    }, w = Et(() => t.activeStatus === t.translationStatus), v = qk("breakpoints"), y = Et(() => v.value.mobile), S = Et(
      () => y.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (b, E) => w.value ? (Ot(), _s(lg(Qe), {
      key: 0,
      class: Jr(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: dg(() => [
        rg("div", {
          class: Jr(["cx-translation-list__header", S.value])
        }, [
          rg("h3", {
            class: Jr(["px-4 mw-ui-card__title mb-0", { "pb-4": y.value }]),
            textContent: Rk(b.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, Ok),
          p.value.length ? (Ot(), _s(Xi, {
            key: 0,
            "selected-source-language": n.value,
            "onUpdate:selectedSourceLanguage": E[0] || (E[0] = (x) => n.value = x),
            "selected-target-language": s.value,
            "onUpdate:selectedTargetLanguage": E[1] || (E[1] = (x) => s.value = x),
            "source-languages": h.value,
            "target-languages": m.value,
            "all-option-enabled": ""
          }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : Xa("", !0)
        ], 2)
      ]),
      default: dg(() => [
        r.value && !p.value.length ? (Ot(), _s(Ef, {
          key: 0,
          title: b.$i18n("cx-sx-translation-list-empty-title"),
          description: b.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : Xa("", !0),
        r.value ? Xa("", !0) : (Ot(), _s(lg(ct), { key: 1 })),
        d.value ? (Ot(), Wa("div", jk, [
          (Ot(!0), Wa(ug, null, cg(p.value, (x) => (Ot(), _s(yb, {
            key: `${e.translationStatus}-${x.key}`,
            translation: x,
            onDeleteTranslation: (I) => f(x)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (Ot(), Wa("div", Hk, [
          (Ot(!0), Wa(ug, null, cg(p.value, (x) => (Ot(), _s(Ob, {
            key: `${e.translationStatus}-${x.key}`,
            translation: x
          }, null, 8, ["translation"]))), 128))
        ])),
        zk(Qb, {
          modelValue: l.value,
          "onUpdate:modelValue": E[2] || (E[2] = (x) => l.value = x),
          translation: u.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : Xa("", !0);
  }
}, Xk = (e, t) => C(void 0, null, function* () {
  const n = e.language, s = e.title, o = e.articleSize, r = (yield me.fetchArticleSections(
    n,
    s
  )).sections.filter(
    (u) => u.level === "2"
  ), l = r.reduce(
    (u, d, i, c) => {
      const g = i < c.length - 1 ? c[i + 1].byteoffset : o;
      return u[d.line] = g - d.byteoffset, u;
    },
    { [Os.LEAD_SECTION_DUMMY_TITLE]: r[0].byteoffset }
  );
  return t.length === 1 ? l[t[0]] : Object.keys(l).filter((u) => t.includes(u)).reduce((u, d) => u + l[d], 0);
}), Lf = (e) => {
  const o = e / 5 / 200;
  return Math.ceil(o);
}, Wk = (e, t = []) => {
  const n = e >= 60 ? e / 60 : 0, s = Math.round(n * 2) / 2;
  let o;
  if (t.length) {
    if (t.length === 1)
      return o = t[0] === Os.LEAD_SECTION_DUMMY_TITLE ? "cx-sx-translation-confirmer-translation-time-lead-section" : "cx-sx-translation-confirmer-translation-time-single-section", [o, s, e];
  } else
    return o = "cx-sx-translation-confirmer-translation-time-whole-article", [o, s, e];
  return [
    "cx-sx-translation-confirmer-translation-time-sections",
    s,
    e,
    t.length
  ];
}, Tf = (e) => Lf(e) < 15;
const Zr = window.Vue.toDisplayString, ji = window.Vue.createElementVNode, el = window.Vue.unref, xo = window.Vue.openBlock, tl = window.Vue.createBlock, pg = window.Vue.createCommentVNode, Kk = window.Vue.Fragment, mg = window.Vue.createElementBlock, Yk = window.Vue.withKeys, Qk = window.Vue.withCtx, Jk = {
  key: 1,
  class: "cdx-info-chip__text custom-info-chip__with-slash"
}, Zk = { class: "cdx-info-chip__text custom-info-chip__with-slash__first" }, e8 = /* @__PURE__ */ ji("span", null, "/", -1), t8 = { class: "cdx-info-chip__text custom-info-chip__with-slash__second" }, hg = window.Codex.CdxIcon, n8 = window.Codex.CdxInfoChip, Ya = window.Vue.computed, rs = {
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
      default: !1
    },
    expanded: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e, n = Ya(() => t.content.lastIndexOf("/")), s = Ya(() => t.content.slice(0, n.value)), o = Ya(() => t.content.slice(n.value + 1)), a = Ya(
      () => t.expanded ? QS : Uc
    );
    return (r, l) => (xo(), tl(el(n8), {
      icon: e.icon,
      class: "custom-info-chip",
      tabindex: "0",
      onKeyup: l[0] || (l[0] = Yk((u) => r.$emit("click"), ["enter"]))
    }, {
      default: Qk(() => [
        n.value === -1 ? (xo(), mg(Kk, { key: 0 }, [
          ji("span", null, Zr(e.content), 1),
          e.expandable ? (xo(), tl(el(hg), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : pg("", !0)
        ], 64)) : (xo(), mg("div", Jk, [
          ji("span", Zk, Zr(s.value), 1),
          e8,
          ji("span", t8, Zr(o.value), 1),
          e.expandable ? (xo(), tl(el(hg), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : pg("", !0)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const he = window.Vue.unref, Lt = window.Vue.createVNode, rn = window.Vue.createElementVNode, Qa = window.Vue.toDisplayString, pt = window.Vue.withCtx, s8 = window.Vue.resolveDirective, Ja = window.Vue.withDirectives, En = window.Vue.openBlock, Ss = window.Vue.createBlock, Kn = window.Vue.createCommentVNode, fg = window.Vue.createTextVNode, wg = window.Vue.createElementBlock, vg = window.Vue.withModifiers, o8 = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, a8 = { class: "col shrink pe-4" }, i8 = ["lang", "dir", "textContent"], r8 = ["lang", "dir", "textContent"], l8 = { class: "cx-suggestion__missing-sections" }, c8 = {
  key: 0,
  class: "cx-suggestion__easy-sections"
}, u8 = ["textContent"], d8 = ["textContent"], nl = window.Codex.CdxIcon, mt = window.Vue.computed, g8 = window.Vue.inject, p8 = window.Vuex.useStore, Wc = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [us, xn, js],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = p8(), s = mt(() => t.suggestion), o = mt(
      () => s.value.sourceTitle || s.value.title
    ), a = mt(
      () => n.getters["mediawiki/getPage"](
        s.value.sourceLanguage,
        o.value
      )
    ), r = mt(
      () => {
        var v;
        return (v = s.value) == null ? void 0 : v.missingSectionsCount;
      }
    ), l = mt(
      () => {
        var v;
        return (v = s.value) == null ? void 0 : v.easyMissingSectionsCount;
      }
    ), u = mt(() => {
      var v;
      return (v = a.value) == null ? void 0 : v.description;
    }), d = mt(
      () => s.value instanceof xn
    ), i = mt(
      () => s.value instanceof js
    ), { sourceLanguageAutonym: c, targetLanguageAutonym: g } = Le(n), p = mt(
      () => i.value ? Uh : Ih
    ), m = g8("colors"), h = mt(
      () => i.value ? m.blue600 : "currentColor"
    ), f = mt(
      () => {
        var v;
        return Tf((v = a.value) == null ? void 0 : v.articleSize);
      }
    ), w = mt(
      () => s.value instanceof Th || s.value instanceof Ah
    );
    return (v, y) => {
      const S = s8("i18n");
      return s.value ? (En(), wg("div", o8, [
        rn("div", a8, [
          Lt(he(Kc), {
            class: "cx-suggestion__thumbnail",
            thumbnail: a.value && a.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        Lt(he(N), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: pt(() => [
            Lt(he(N), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: pt(() => [
                Lt(he(k), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: pt(() => [
                    rn("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: s.value.sourceLanguage,
                      dir: he(j.getDir)(s.value.sourceLanguage),
                      textContent: Qa(o.value)
                    }, null, 8, i8)
                  ]),
                  _: 1
                }),
                Lt(he(k), { shrink: "" }, {
                  default: pt(() => [
                    rn("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: s.value.sourceLanguage,
                      dir: he(j.getDir)(s.value.sourceLanguage),
                      textContent: Qa(u.value)
                    }, null, 8, r8)
                  ]),
                  _: 1
                }),
                f.value && !d.value && !w.value ? (En(), Ss(he(k), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: pt(() => [
                    Ja(rn("small", null, null, 512), [
                      [S, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : Kn("", !0),
                d.value ? (En(), Ss(he(k), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom",
                  shrink: ""
                }, {
                  default: pt(() => [
                    Ja(rn("small", l8, null, 512), [
                      [S, [r.value], "cx-sx-translation-suggestion-info"]
                    ]),
                    l.value ? (En(), wg("small", c8, [
                      fg(" ("),
                      Ja(rn("span", null, null, 512), [
                        [S, [
                          l.value
                        ], "cx-sx-translation-suggestion-easy-sections"]
                      ]),
                      fg(")")
                    ])) : Kn("", !0)
                  ]),
                  _: 1
                })) : i.value ? (En(), Ss(he(k), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: pt(() => [
                    Lt(he(N), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: pt(() => [
                        Lt(he(k), { grow: "" }, {
                          default: pt(() => [
                            rn("small", {
                              textContent: Qa(he(c))
                            }, null, 8, u8),
                            Lt(he(nl), {
                              icon: he(Nh),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            rn("small", {
                              textContent: Qa(he(g))
                            }, null, 8, d8)
                          ]),
                          _: 1
                        }),
                        r.value ? (En(), Ss(he(k), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: pt(() => [
                            Ja(rn("small", null, null, 512), [
                              [S, [
                                r.value
                              ], "cx-sx-translation-suggestion-info"]
                            ])
                          ]),
                          _: 1
                        })) : Kn("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : Kn("", !0),
                w.value ? (En(), Ss(he(k), {
                  key: 3,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: pt(() => [
                    Lt(rs, {
                      icon: he(uu),
                      content: s.value.collection.name
                    }, null, 8, ["icon", "content"])
                  ]),
                  _: 1
                })) : Kn("", !0)
              ]),
              _: 1
            }),
            Lt(he(k), { shrink: "" }, {
              default: pt(() => [
                i.value ? Kn("", !0) : (En(), Ss(he(nl), {
                  key: 0,
                  icon: he(Qs),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: y[0] || (y[0] = vg((b) => v.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                Lt(he(nl), {
                  class: "cx-suggestion__favorite-button",
                  icon: p.value,
                  "icon-color": h.value,
                  onClick: y[1] || (y[1] = vg((b) => v.$emit("bookmark"), ["stop"]))
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : Kn("", !0);
    };
  }
};
const sl = window.Vue.normalizeClass, _g = window.Vue.createVNode, m8 = window.Vue.renderList, Sg = window.Vue.Fragment, Co = window.Vue.openBlock, Za = window.Vue.createElementBlock, h8 = window.Vue.createBlock, f8 = window.Vue.toDisplayString, w8 = window.Vue.withKeys, yg = window.Vue.createCommentVNode, v8 = {
  key: 0,
  class: "sx-suggestions-filters__filter__expanded-filters"
}, ei = window.Vue.computed, _8 = window.Vue.ref, S8 = window.Vue.watchEffect, y8 = {
  __name: "SuggestionFilterChip",
  props: {
    filter: {
      type: Ut,
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
    const n = e, s = ei(
      () => n.isSelected(n.filter) || n.filter.subFilters.some((g) => n.isSelected(g))
    ), o = _8(!1);
    S8(() => {
      n.filter.expandable && (o.value = s.value);
    });
    const a = t, r = () => {
      n.filter.expandable && s.value ? o.value = !o.value : a("filter-selected", n.filter);
    }, l = ei(() => {
      const g = n.filter.subFilters.find(
        (m) => n.isSelected(m)
      );
      let p = n.filter.chipLabel;
      return g && (p += `/${u(g)}`), p;
    }), u = (g) => {
      const { label: p } = g, m = n.filter.label;
      return p.startsWith(`${m}/`) ? p.replace(`${m}/`, "") : p;
    }, d = ei(() => n.subFilterLimit > 0 ? n.filter.subFilters.slice(0, n.subFilterLimit) : n.filter.subFilters), i = ei(
      () => n.viewMoreConfig && n.subFilterLimit > 0 && n.filter.subFilters.length > n.subFilterLimit && o.value
    ), c = () => {
      n.viewMoreConfig && n.viewMoreConfig.onClick && n.viewMoreConfig.onClick();
    };
    return (g, p) => (Co(), Za(Sg, null, [
      _g(rs, {
        class: sl(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
          "sx-suggestions-filters__filter--active": s.value
        }]),
        icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
        content: l.value,
        expandable: !!e.filter.expandable,
        expanded: o.value,
        onClick: r
      }, null, 8, ["class", "icon", "content", "expandable", "expanded"]),
      o.value ? (Co(), Za("div", v8, [
        _g(rs, {
          class: sl(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(e.filter)
          }]),
          icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
          content: g.$i18n("cx-sx-suggestions-filter-collection-group-all-option-label"),
          onClick: p[0] || (p[0] = (m) => g.$emit("filter-selected", e.filter))
        }, null, 8, ["class", "icon", "content"]),
        (Co(!0), Za(Sg, null, m8(d.value, (m) => (Co(), h8(rs, {
          key: m.id,
          class: sl(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(m)
          }]),
          content: u(m),
          icon: m.icon,
          onClick: (h) => g.$emit("filter-selected", m)
        }, null, 8, ["class", "content", "icon", "onClick"]))), 128)),
        i.value ? (Co(), Za("div", {
          key: 0,
          class: "sx-suggestions-filters__view-more-link",
          tabindex: "0",
          onClick: c,
          onKeyup: w8(c, ["enter"])
        }, f8(e.viewMoreConfig.label), 33)) : yg("", !0)
      ])) : yg("", !0)
    ], 64));
  }
};
const x8 = window.Vue.toDisplayString, xg = window.Vue.createElementVNode, C8 = window.Vue.renderList, Cg = window.Vue.Fragment, ol = window.Vue.openBlock, bg = window.Vue.createElementBlock, b8 = window.Vue.createBlock, k8 = { class: "sx-suggestions-filters__group-label mb-3" }, $8 = { class: "sx-suggestions-filters__group-filters mb-3" }, V8 = {
  __name: "SXSuggestionsFiltersDialogTabGroupContent",
  props: {
    filterGroup: {
      type: ia,
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
    return (s, o) => (ol(), bg(Cg, null, [
      xg("div", k8, x8(e.filterGroup.label), 1),
      xg("div", $8, [
        (ol(!0), bg(Cg, null, C8(n(), (a) => (ol(), b8(y8, {
          key: a.id,
          filter: a,
          "is-selected": e.isSelected,
          "sub-filter-limit": e.getSubFilterConfig ? e.getSubFilterConfig(a).limit : 0,
          "view-more-config": e.getSubFilterConfig ? e.getSubFilterConfig(a).viewMoreConfig : null,
          onFilterSelected: o[0] || (o[0] = (r) => e.tentativelySelectFilter(r))
        }, null, 8, ["filter", "is-selected", "sub-filter-limit", "view-more-config"]))), 128))
      ])
    ], 64));
  }
}, E8 = window.Vue.computed, kg = window.Vue.ref, $g = window.Vue.watch, _u = (e, t) => {
  const s = kg([]), o = kg(!1), a = E8(
    () => s.value.slice(0, 4)
  ), r = vu(() => C(void 0, null, function* () {
    if (!t.value) {
      o.value = !1;
      return;
    }
    try {
      s.value = yield cs.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      o.value = !1;
    }
  }), 500), l = () => {
    s.value = [], t.value && (o.value = !0, r());
  };
  return $g(t, l), $g(e, l), {
    searchResultsLoading: o,
    searchResultsSlice: a
  };
};
class ti {
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
    description: s,
    filterType: o,
    filterId: a,
    thumbnail: r = null,
    icon: l = null,
    showThumbnail: u = !1
  }) {
    this.label = t, this.value = n + "-" + o, this.description = s, this.thumbnail = r, this.filterType = o, this.filterId = a, this.icon = l, this.showThumbnail = u;
  }
}
const al = window.Vue.ref, Vg = window.Vue.watch, Eg = window.Vue.computed, { topics: L8, regions: T8 } = mw.loader.require(
  "ext.cx.articlefilters"
), A8 = L8.flatMap(
  (e) => e.topics.map((t) => tt(pe({}, t), {
    groupId: e.groupId
  }))
), D8 = () => {
  const e = al(""), t = al("all"), n = al({
    topics: [],
    topic_areas: [],
    collections: [],
    regions: []
  }), s = we(), { pageCollectionGroups: o } = cu(), { sourceLanguageURLParameter: a } = D(), r = (p) => (p = p.toLowerCase(), A8.filter(
    (m) => m.label.toLowerCase().includes(p)
  )), l = (p) => (p = p.toLowerCase(), Object.values(o.value).flat().filter(
    (h) => h.name.toLowerCase().includes(p)
  )), u = (p) => (p = p.toLowerCase(), T8.flatMap((m) => [m, ...m.countries]).filter(
    (m) => m.label.toLowerCase().includes(p)
  ).map((m) => ({
    label: m.label,
    id: m.id
  }))), d = Eg(
    () => t.value === "all" ? e.value : ""
  ), { searchResultsSlice: i, searchResultsLoading: c } = _u(
    a,
    d
  );
  Vg(i, () => {
    n.value.topics = i.value.map(
      (p) => {
        var m;
        return new ti({
          label: p.title,
          value: p.title,
          description: p.description,
          thumbnail: { url: (m = p.thumbnail) == null ? void 0 : m.source },
          filterType: yt,
          filterId: p.title,
          showThumbnail: !0
        });
      }
    );
  }), Vg([e, t], () => C(void 0, null, function* () {
    n.value.topic_areas = r(e.value).map(
      (p) => new ti({
        label: p.label,
        value: p.label,
        description: s.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-topics-default-description" : "cx-sx-suggestions-filter-search-results-topics-alternative-description"
        ),
        icon: t.value === "all" ? Ic : null,
        filterType: Xe,
        filterId: p.topicId
      })
    ), n.value.collections = l(
      e.value
    ).map(
      (p) => new ti({
        label: p.name,
        value: p.name,
        description: s.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-collections-default-description" : "cx-sx-suggestions-filter-search-results-collections-alternative-description",
          p.articlesCount
        ),
        icon: t.value === "all" ? uu : null,
        filterType: ee,
        filterId: p.name
      })
    ), n.value.regions = u(e.value).map(
      (p) => new ti({
        label: p.label,
        value: p.label,
        description: s.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-regions-default-description" : "cx-sx-suggestions-filter-search-results-regions-alternative-description"
        ),
        icon: t.value === "all" ? Ic : null,
        filterType: Ee,
        filterId: p.id
      })
    );
  }));
  const g = Eg(() => {
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
}, P8 = "suggestion_filter_topic_area", B8 = "suggestion_filter_search_result_seed", F8 = "suggestion_filter_collections", N8 = "suggestion_filter_previous_edits", M8 = "suggestion_filter_popular_articles", U8 = "suggestion_filter_region", il = (e) => {
  if (e.type === Xe || e.type === Ee || e.type === ee || e.type === yt)
    return e.id;
  if (e.id === ee)
    return "all-collections";
}, rl = (e) => {
  if (e.type === Xe)
    return P8;
  if (e.type === Ee)
    return U8;
  if (e.type === yt)
    return B8;
  if (e.id === ee || e.type === ee)
    return F8;
  if (e.id === en)
    return N8;
  if (e.id === yn)
    return M8;
}, Af = () => {
  const e = bt();
  return {
    logSuggestionFiltersClose: () => e({ event_type: "suggestion_filters_close" }),
    logSuggestionFiltersConfirm: (r) => e({
      event_type: "suggestion_filters_confirm",
      event_subtype: "suggestion_filters_single_select_confirm",
      event_source: rl(r),
      event_context: il(r)
    }),
    logSuggestionFiltersSelect: (r) => e({
      event_type: "suggestion_filters_select",
      event_subtype: "suggestion_filters_single_select",
      event_source: rl(r),
      event_context: il(r)
    }),
    logSuggestionFiltersQuickSelect: (r) => e({
      event_type: "dashboard_suggestion_filters_quick_select",
      event_source: rl(r),
      event_context: il(r)
    }),
    logSuggestionFiltersViewMore: () => e({ event_type: "dashboard_suggestion_filters_view_more" })
  };
};
const xe = window.Vue.unref, ht = window.Vue.createVNode, Tt = window.Vue.withCtx, I8 = window.Vue.resolveDirective, jt = window.Vue.createElementVNode, ys = window.Vue.withDirectives, Lg = window.Vue.toDisplayString, R8 = window.Vue.createTextVNode, z8 = window.Vue.vShow, Tg = window.Vue.renderList, Ag = window.Vue.Fragment, ln = window.Vue.openBlock, Yn = window.Vue.createElementBlock, Dg = window.Vue.isRef, O8 = window.Vue.withKeys, Pg = window.Vue.createCommentVNode, Bg = window.Vue.createBlock, j8 = { class: "sx-suggestions-filters" }, H8 = { class: "mb-0" }, q8 = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, G8 = { class: "mb-3" }, X8 = { class: "px-4 pb-4 pt-7" }, W8 = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, K8 = ["onKeyup", "onClick"], Y8 = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, Q8 = { class: "sx-suggestions-filters__search-results-pending" }, J8 = {
  key: 0,
  class: "sx-suggestions-filters__search-results-empty"
}, Z8 = { class: "sx-suggestions-filters__search-results-empty-primary" }, e2 = { class: "sx-suggestions-filters__search-results-empty-secondary" }, ni = window.Vue.ref, xs = window.Vue.computed, t2 = window.Vue.inject, n2 = window.Vue.watch, Fg = window.Codex.CdxButton, s2 = window.Codex.CdxIcon, o2 = window.Codex.CdxTextInput, a2 = window.Codex.CdxMenu, i2 = window.Codex.CdxTabs, r2 = window.Codex.CdxTab, l2 = {
  __name: "SXSuggestionsFiltersDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = we(), s = t, o = xs(() => [
      {
        name: "all",
        label: n.i18n("cx-sx-suggestions-filters-tab-all"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder"
        ),
        filterGroups: g([
          Ye,
          ee,
          Ee,
          Xe
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
        filterGroups: g([Ee])
      },
      {
        name: "topics",
        label: n.i18n("cx-sx-suggestions-filters-tab-topics"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-topics"
        ),
        filterGroups: g([Xe])
      }
    ]), a = (U) => H.value = U, r = (U, B) => B === "all" && U.type === Ee ? {
      limit: 7,
      viewMoreConfig: {
        label: n.i18n(
          "cx-sx-suggestions-filters-view-more-countries",
          U.label
        ),
        onClick: () => a("geography")
      }
    } : { limit: 0 }, l = (U, B) => {
      if (U !== "all")
        return !1;
      if (B === ee) {
        const M = g([ee]);
        return M.length && M[0].filters.length > 6;
      }
      return B === Ee;
    }, { allFilters: u, isFilterSelected: d, selectFilter: i, findSelectedFilter: c } = or(), g = (U) => U.flatMap((B) => u.value.filter((M) => M.type === B)).filter(Boolean), p = () => {
      b(), s("update:modelValue", !1);
    }, {
      logSuggestionFiltersClose: m,
      logSuggestionFiltersConfirm: h,
      logSuggestionFiltersSelect: f
    } = Af(), w = () => {
      m(), p();
    }, v = () => {
      S.value && (h(S.value), i(S.value)), p();
    }, y = ni(!1), S = ni(null), b = () => {
      S.value = null, y.value = !1;
    }, E = (U) => {
      f(U), S.value = U, y.value = !0;
    }, x = (U) => S.value ? S.value.id === U.id && S.value.type === U.type : d(U), I = t2("breakpoints"), L = xs(() => I.value.mobile), { searchInput: P, searchScope: H, searchResults: se, searchResultsLoading: ae } = D8(), te = xs(
      () => S.value || c()
    ), R = ni(null);
    n2(R, () => {
      if (!R.value)
        return;
      const U = oe.value.find(
        (B) => B.value === R.value
      );
      E({
        type: U.filterType,
        id: U.filterId,
        label: U.label
      }), P.value = "";
    });
    const J = {
      [ee]: "cx-sx-suggestions-filters-view-all-collections-group",
      [Ee]: "cx-sx-suggestions-filters-view-all-regions-group"
    }, oe = xs(
      () => se.value.flatMap((U) => U.items)
    ), le = ni({}), ke = xs(
      () => le.value[H.value]
    ), We = xs(() => {
      var B;
      const U = (B = ke.value) == null ? void 0 : B.getHighlightedMenuItem();
      return U == null ? void 0 : U.id;
    }), Pe = (U) => {
      U.key !== " " && ke.value && ke.value.delegateKeyNavigation(U);
    }, Z = (U, B) => {
      le.value[B] = U;
    };
    return (U, B) => {
      const M = I8("i18n");
      return ln(), Bg(xe(Ct), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: L.value,
        header: !1
      }, {
        default: Tt(() => [
          jt("section", j8, [
            ht(xe(N), {
              class: "sx-suggestions-filters__header ma-0 py-3 px-4",
              align: "stretch",
              justify: "start"
            }, {
              default: Tt(() => [
                ht(xe(k), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: Tt(() => [
                    ht(xe(Fg), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": U.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: w
                    }, {
                      default: Tt(() => [
                        ht(xe(s2), { icon: xe(Qs) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                ht(xe(k), {
                  grow: "",
                  align: "center"
                }, {
                  default: Tt(() => [
                    ys(jt("h5", H8, null, 512), [
                      [M, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                ht(xe(k), {
                  shrink: "",
                  align: "start"
                }, {
                  default: Tt(() => [
                    ys(ht(xe(Fg), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: v
                    }, {
                      default: Tt(() => [
                        R8(Lg(U.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [z8, y.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            jt("div", q8, [
              ys(jt("h5", G8, null, 512), [
                [M, void 0, "cx-sx-suggestions-filter-active-group-label"]
              ]),
              jt("div", null, [
                ht(rs, {
                  class: "sx-suggestions-filters__filter sx-suggestions-filters__filter--active my-1 mx-1 py-1",
                  content: te.value.label,
                  icon: te.value.icon
                }, null, 8, ["content", "icon"])
              ])
            ]),
            ht(xe(i2), {
              active: xe(H),
              "onUpdate:active": [
                B[2] || (B[2] = (Y) => Dg(H) ? H.value = Y : null),
                a
              ],
              class: "sx-suggestions-filters__tabs"
            }, {
              default: Tt(() => [
                (ln(!0), Yn(Ag, null, Tg(o.value, (Y, _) => (ln(), Bg(xe(r2), {
                  key: _,
                  name: Y.name,
                  label: Y.label
                }, {
                  default: Tt(() => [
                    jt("div", X8, [
                      ht(xe(o2), {
                        modelValue: xe(P),
                        "onUpdate:modelValue": B[0] || (B[0] = (T) => Dg(P) ? P.value = T : null),
                        role: "combobox",
                        "aria-activedescendant": We.value,
                        "aria-controls": "sx-suggestions-filters__search-results__menu",
                        "aria-autocomplete": "none",
                        placeholder: Y.searchPlaceholder,
                        "input-type": "search",
                        "start-icon": xe(Ic),
                        clearable: !!xe(P),
                        onKeydown: Pe
                      }, null, 8, ["modelValue", "aria-activedescendant", "placeholder", "start-icon", "clearable"])
                    ]),
                    xe(P) ? (ln(), Yn("div", Y8, [
                      ht(xe(a2), {
                        id: "sx-suggestions-filters__search-results__menu",
                        ref_for: !0,
                        ref: (T) => Z(T, Y.name),
                        selected: R.value,
                        "onUpdate:selected": B[1] || (B[1] = (T) => R.value = T),
                        "show-pending": xe(ae),
                        expanded: "",
                        "menu-items": oe.value
                      }, {
                        pending: Tt(() => [
                          ys(jt("div", Q8, null, 512), [
                            [M, void 0, "cx-sx-suggestions-filter-search-results-loading"]
                          ])
                        ]),
                        "no-results": Tt(() => [
                          xe(ae) ? Pg("", !0) : (ln(), Yn("div", J8, [
                            ys(jt("span", Z8, null, 512), [
                              [M, void 0, "cx-sx-suggestions-filter-search-results-empty-primary"]
                            ]),
                            ys(jt("span", e2, null, 512), [
                              [M, void 0, "cx-sx-suggestions-filter-search-results-empty-secondary"]
                            ])
                          ]))
                        ]),
                        _: 2
                      }, 1032, ["selected", "show-pending", "menu-items"])
                    ])) : (ln(), Yn("div", W8, [
                      (ln(!0), Yn(Ag, null, Tg(Y.filterGroups, (T) => (ln(), Yn("div", {
                        key: T.id,
                        class: "sx-suggestions-filters__group"
                      }, [
                        ht(V8, {
                          "filter-group": T,
                          "tentatively-select-filter": E,
                          "is-selected": x,
                          limit: l(Y.name, T.type) ? 4 : 0,
                          "get-sub-filter-config": (A) => r(A, Y.name)
                        }, null, 8, ["filter-group", "limit", "get-sub-filter-config"]),
                        l(Y.name, T.type) ? (ln(), Yn("div", {
                          key: 0,
                          class: "sx-suggestions-filters__group-view-all mb-3",
                          tabindex: "0",
                          onKeyup: O8((A) => a(T.id), ["enter"]),
                          onClick: (A) => a(T.id)
                        }, [
                          jt("span", null, Lg(U.$i18n(J[T.id])), 1)
                        ], 40, K8)) : Pg("", !0)
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
const bo = window.Vue.unref, si = window.Vue.openBlock, Ng = window.Vue.createBlock;
window.Vue.createCommentVNode;
const c2 = window.Vue.renderList, u2 = window.Vue.Fragment, Mg = window.Vue.createElementBlock, d2 = window.Vue.normalizeClass, Ug = window.Vue.createVNode, g2 = {
  key: 1,
  class: "cx-suggestion-list__filters flex px-4 pb-2"
}, Ig = window.Vue.ref;
window.Vue.computed;
const Rg = window.Vue.watch, p2 = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = we(), { logSuggestionFiltersQuickSelect: n, logSuggestionFiltersViewMore: s } = Af(), {
      getFiltersSummary: o,
      selectFilter: a,
      isFilterSelected: r,
      waitingForPageCollectionsFetch: l,
      validateURLFilterWithCollections: u
    } = or(), d = Ig(!1), i = () => {
      s(), d.value = !0;
    }, c = (p) => {
      n(p), a(p);
    }, g = Ig(o());
    return Rg(d, (p) => {
      p || (g.value = o());
    }), Rg(l, (p) => {
      p || (u(), g.value = o());
    }), (p, m) => bo(l) ? (si(), Ng(bo(ct), { key: 0 })) : (si(), Mg("div", g2, [
      (si(!0), Mg(u2, null, c2(g.value, (h) => (si(), Ng(rs, {
        key: h.label,
        class: d2(["cx-suggestion-list__filter py-1 me-1", {
          "cx-suggestion-list__filter--active": bo(r)(h)
        }]),
        icon: h.icon,
        content: h.label,
        onClick: (f) => c(h)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      Ug(rs, {
        class: "cx-suggestion-list__filter py-1 me-1",
        icon: bo(gu),
        content: bo(t).i18n("cx-sx-suggestions-filter-more-label"),
        onClick: i
      }, null, 8, ["icon", "content"]),
      Ug(l2, {
        modelValue: d.value,
        "onUpdate:modelValue": m[0] || (m[0] = (h) => d.value = h)
      }, null, 8, ["modelValue"])
    ]));
  }
}, Cs = window.Vue.computed, zg = window.Vue.ref, m2 = window.Vue.watch, h2 = window.Vuex.useStore, f2 = () => {
  const e = h2(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = D(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: a } = iu(), r = bt(), l = Cs(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), u = Cs(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), d = zg(0), i = zg(0), { maxSuggestionsPerSlice: c } = e.state.suggestions, g = 4, p = Cs(
    () => a(d.value)
  ), m = Cs(
    () => o(i.value)
  ), h = () => {
    b(), L(), E(), P();
  }, {
    fetchNextSectionSuggestionsSlice: f,
    fetchNextPageSuggestionsSlice: w
  } = mu(), v = (H) => H.length === c, y = Cs(
    () => v(m.value)
  ), S = Cs(
    () => v(p.value)
  ), b = () => {
    const H = (d.value + 1) % g, se = v(
      a(H)
    );
    (!S.value || !se) && f();
  }, E = () => {
    const H = (i.value + 1) % g, se = v(
      o(H)
    );
    (!y.value || !se) && w();
  }, x = (H) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", H), b();
  }, I = (H) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", H), E();
  }, L = () => d.value = (d.value + 1) % g, P = () => i.value = (i.value + 1) % g;
  return m2(
    s,
    () => {
      i.value = 0, E(), d.value = 0, b();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: m,
    currentSectionSuggestionsSlice: p,
    discardPageSuggestion: I,
    discardSectionSuggestion: x,
    onSuggestionRefresh: h,
    pageSuggestionsLoading: u,
    sectionSuggestionsLoading: l,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: o,
    isCurrentPageSuggestionsSliceFull: y,
    isCurrentSectionSuggestionsSliceFull: S
  };
}, w2 = window.Vuex.useStore, Su = () => {
  const e = w2(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = mu(), s = (d, i, c) => e.state.suggestions.pageSuggestions.find(
    (g) => g.sourceLanguage === d && g.targetLanguage === i && g.sourceTitle === c
  ), o = (d) => C(void 0, null, function* () {
    const { sourceTitle: i, sourceLanguage: c, targetLanguage: g } = d;
    yield me.markFavorite(i, c, g);
    const p = new js({
      title: i,
      sourceLanguage: c,
      targetLanguage: g
    });
    e.commit("suggestions/addFavoriteSuggestion", p);
  });
  return {
    markFavoritePageSuggestion: (d) => {
      e.commit("suggestions/removePageSuggestionFromList", d), n(), o(d);
    },
    markFavoriteSectionSuggestion: (d) => {
      e.commit(
        "suggestions/removeSectionSuggestionFromList",
        d
      ), t(), o(d);
    },
    markFavoriteSuggestion: (d, i, c) => C(void 0, null, function* () {
      const g = s(
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
      ), t()), yield me.markFavorite(
        d,
        i,
        c
      );
      const m = new js({
        title: d,
        sourceLanguage: i,
        targetLanguage: c
      });
      e.commit("suggestions/addFavoriteSuggestion", m);
    }),
    removeFavoriteSuggestion: (d) => (e.commit("suggestions/removeFavoriteSuggestion", d), me.unmarkFavorite(d))
  };
}, v2 = "suggestion_no_seed", _2 = "suggestion_recent_edit", S2 = "suggestion_topic_area", y2 = "suggestion_search_result_seed", x2 = "suggestion_featured", C2 = "suggestion_collections", b2 = "suggestion_region", k2 = () => {
  const { currentSuggestionFilters: e } = D();
  return (t = null) => {
    const { type: n, id: s } = e.value;
    if (s === en)
      return t ? _2 : v2;
    if (n === Xe)
      return S2;
    if (n === Ee)
      return b2;
    if (n === yt)
      return y2;
    if (s === yn)
      return x2;
    if (s === ee || n === ee)
      return C2;
    const o = new Error(
      `[CX] No matching event source found for filter with type ${n} and id ${s}`
    );
    throw mw.errorLogger.logError(o, "error.contenttranslation"), o;
  };
};
const Og = window.Vue.normalizeClass, $2 = window.Vue.resolveDirective, ko = window.Vue.createElementVNode, oi = window.Vue.withDirectives, _e = window.Vue.unref, nt = window.Vue.openBlock, Ht = window.Vue.createBlock, Ln = window.Vue.createCommentVNode, ll = window.Vue.createVNode, $o = window.Vue.withCtx, jg = window.Vue.renderList, Hg = window.Vue.Fragment, cl = window.Vue.createElementBlock, V2 = window.Vue.toDisplayString, E2 = window.Vue.createTextVNode, L2 = window.Vue.vShow, T2 = { class: "cx-suggestion-list" }, A2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, D2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, P2 = { class: "cx-suggestion-list__refresh-button-container justify-center" }, qt = window.Vue.computed, B2 = window.Vue.inject, F2 = window.Vue.ref, N2 = window.Codex.CdxButton, M2 = window.Codex.CdxIcon, U2 = window.Vuex.useStore, I2 = {
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
      currentSuggestionFilters: s
    } = D(), { supportedSourceLanguageCodes: o, supportedTargetLanguageCodes: a } = fa(), r = Gh(), l = (Z) => r(Z, n.value), u = (Z) => r(t.value, Z), d = k2(), i = Sa(), c = (Z) => {
      i(
        Z.sourceTitle,
        Z.sourceLanguage,
        Z.targetLanguage,
        d(Z.suggestionSeed),
        s.value.id
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
    } = f2(), b = F2(null), E = bt(), x = () => {
      E({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), f(), b.value && b.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: I, markFavoritePageSuggestion: L } = Su(), P = B2("breakpoints"), H = qt(() => P.value.mobile), se = qt(
      () => H.value ? null : "pb-2 flex justify-between items-center"
    ), ae = U2(), te = qt(
      () => ae.state.suggestions.isPageSuggestionsFetchPending
    ), R = qt(
      () => ae.state.suggestions.isSectionSuggestionsFetchPending
    ), J = qt(
      () => te.value || w.value && !y.value
    ), oe = qt(
      () => R.value || v.value && !S.value
    ), le = qt(
      () => te.value || w.value || g.value.length > 0
    ), ke = qt(
      () => R.value || v.value || p.value.length > 0
    ), We = qt(
      () => !le.value && !ke.value
    ), Pe = qt(
      () => !v.value && !w.value && !te.value && !R.value && !We.value
    );
    return (Z, U) => {
      const B = $2("i18n");
      return oi((nt(), cl("div", T2, [
        ll(_e(Qe), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: $o(() => [
            ko("div", {
              class: Og(["cx-suggestion-list__header-card__header px-4", se.value])
            }, [
              oi(ko("h3", {
                class: Og(["mw-ui-card__title mb-0", { "py-3": H.value }])
              }, null, 2), [
                [B, void 0, "cx-suggestionlist-title"]
              ]),
              H.value ? Ln("", !0) : (nt(), Ht(Xi, {
                key: 0,
                "source-languages": _e(o),
                "target-languages": _e(a),
                "selected-source-language": _e(t),
                "selected-target-language": _e(n),
                "onUpdate:selectedSourceLanguage": l,
                "onUpdate:selectedTargetLanguage": u
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            ll(p2)
          ]),
          default: $o(() => [
            H.value ? (nt(), Ht(Xi, {
              key: 0,
              "source-languages": _e(o),
              "target-languages": _e(a),
              "selected-source-language": _e(t),
              "selected-target-language": _e(n),
              "onUpdate:selectedSourceLanguage": l,
              "onUpdate:selectedTargetLanguage": u
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])) : Ln("", !0)
          ]),
          _: 1
        }),
        ke.value ? (nt(), Ht(_e(Qe), {
          key: 0,
          class: "cx-suggestion-list__section-suggestions pa-0 mb-0"
        }, {
          default: $o(() => [
            oi(ko("h5", A2, null, 512), [
              [B, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (nt(!0), cl(Hg, null, jg(_e(p), (M, Y) => (nt(), Ht(Wc, {
              key: `section-suggestion-${Y}`,
              class: "ma-0",
              suggestion: M,
              onClose: (_) => _e(h)(M),
              onClick: (_) => c(M),
              onBookmark: (_) => _e(I)(M)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            oe.value ? (nt(), Ht(_e(ct), { key: 0 })) : Ln("", !0)
          ]),
          _: 1
        })) : Ln("", !0),
        le.value ? (nt(), Ht(_e(Qe), {
          key: 1,
          ref_key: "pageSuggestionsList",
          ref: b,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: $o(() => [
            oi(ko("h5", D2, null, 512), [
              [B, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (nt(!0), cl(Hg, null, jg(_e(g), (M, Y) => (nt(), Ht(Wc, {
              key: `page-suggestion-${Y}`,
              suggestion: M,
              onClose: (_) => _e(m)(M),
              onClick: (_) => c(M),
              onBookmark: (_) => _e(L)(M)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            J.value ? (nt(), Ht(_e(ct), { key: 0 })) : Ln("", !0)
          ]),
          _: 1
        }, 512)) : Ln("", !0),
        We.value ? (nt(), Ht(Ef, {
          key: 2,
          title: Z.$i18n("cx-sx-suggestion-list-empty-title"),
          description: Z.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : Ln("", !0),
        ko("div", P2, [
          Pe.value ? (nt(), Ht(_e(N2), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: x
          }, {
            default: $o(() => [
              ll(_e(M2), {
                class: "me-1",
                icon: _e(zh)
              }, null, 8, ["icon"]),
              E2(" " + V2(Z.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : Ln("", !0)
        ])
      ], 512)), [
        [L2, e.active]
      ]);
    };
  }
}, R2 = window.Vue.resolveDirective, z2 = window.Vue.createElementVNode, O2 = window.Vue.withDirectives, j2 = window.Vue.renderList, H2 = window.Vue.Fragment, ul = window.Vue.openBlock, q2 = window.Vue.createElementBlock, qg = window.Vue.unref, Gg = window.Vue.createBlock, Xg = window.Vue.withCtx, G2 = window.Vue.createCommentVNode, X2 = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, W2 = window.Vue.computed, K2 = window.Vuex.useStore, Y2 = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = K2(), n = W2(() => t.state.suggestions.favorites || []), s = Sa(), o = (r) => s(
      r.title,
      r.sourceLanguage,
      r.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = Su();
    return (r, l) => {
      const u = R2("i18n");
      return n.value.length ? (ul(), Gg(qg(Qe), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: Xg(() => [
          O2(z2("h3", X2, null, 512), [
            [u, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: Xg(() => [
          (ul(!0), q2(H2, null, j2(n.value, (d, i) => (ul(), Gg(Wc, {
            key: `favorite-${i}`,
            suggestion: d,
            onClick: (c) => o(d),
            onBookmark: (c) => qg(a)(d)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : G2("", !0);
    };
  }
};
const Q2 = window.Vue.resolveDirective, Vo = window.Vue.createElementVNode, J2 = window.Vue.withDirectives, Z2 = window.Vue.renderList, e$ = window.Vue.Fragment, Wg = window.Vue.openBlock, Kg = window.Vue.createElementBlock, t$ = window.Vue.unref, n$ = window.Vue.createVNode, s$ = window.Vue.toDisplayString, o$ = { class: "cx-help-panel pa-4" }, a$ = { class: "cx-help-panel__item-list mt-6 ps-2" }, i$ = ["href", "target"], r$ = ["textContent"], l$ = window.Codex.CdxIcon, c$ = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = we(), n = [
      {
        icon: sy,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
        target: "_blank"
      },
      {
        icon: ZS,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
        target: "_blank"
      }
    ];
    return (s, o) => {
      const a = Q2("i18n");
      return Wg(), Kg("div", o$, [
        J2(Vo("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        Vo("ul", a$, [
          (Wg(), Kg(e$, null, Z2(n, (r, l) => Vo("li", {
            key: l,
            class: "mt-4"
          }, [
            Vo("a", {
              href: r.href,
              target: r.target
            }, [
              n$(t$(l$), {
                class: "me-2",
                icon: r.icon
              }, null, 8, ["icon"]),
              Vo("span", {
                textContent: s$(r.label)
              }, null, 8, r$)
            ], 8, i$)
          ])), 64))
        ])
      ]);
    };
  }
};
const u$ = window.Vue.resolveDirective, bs = window.Vue.createElementVNode, dl = window.Vue.withDirectives, Yg = window.Vue.toDisplayString, gl = window.Vue.unref, pl = window.Vue.withCtx, ml = window.Vue.createVNode, d$ = window.Vue.openBlock, g$ = window.Vue.createElementBlock, p$ = { class: "cx-stats-panel pa-4" }, m$ = ["textContent"], h$ = { class: "cx-stats-panel__monthly-stats-label" }, f$ = ["textContent"], w$ = { class: "cx-stats-panel__total-stats-label" }, v$ = window.Vue.ref, Qg = window.Vue.computed, _$ = window.Vue.watch, S$ = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = e, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", s = Qg(() => {
      var r, l;
      return ((l = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : l.count) || 0;
    }), o = Qg(() => {
      var r, l;
      return ((l = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : l.delta) || 0;
    }), a = v$(null);
    return _$(
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
      const u = u$("i18n");
      return d$(), g$("div", p$, [
        dl(bs("h5", null, null, 512), [
          [u, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        ml(gl(N), null, {
          default: pl(() => [
            ml(gl(k), { class: "cx-stats-panel__monthly-stats" }, {
              default: pl(() => [
                bs("h3", {
                  textContent: Yg(o.value)
                }, null, 8, m$),
                dl(bs("h5", h$, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            ml(gl(k), { class: "cx-stats-panel__total-stats" }, {
              default: pl(() => [
                bs("h3", {
                  textContent: Yg(s.value)
                }, null, 8, f$),
                dl(bs("h5", w$, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        bs("canvas", {
          ref_key: "canvasRef",
          ref: a,
          class: "cx-stats-panel__canvas"
        }, null, 512)
      ]);
    };
  }
}, Df = () => {
  const e = bt();
  return (t) => e({
    event_type: "dashboard_tab_select",
    event_source: {
      draft: "dashboard_inprogress_tab",
      published: "dashboard_published_tab",
      suggestions: "dashboard_suggestions_tab"
    }[t]
  });
};
const y$ = window.Vue.renderSlot, x$ = window.Vue.unref, C$ = window.Vue.createVNode, b$ = window.Vue.createElementVNode, k$ = window.Vue.openBlock, $$ = window.Vue.createElementBlock, V$ = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, E$ = { class: "col-12 ma-0 pa-0" }, L$ = {
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
    const n = t, s = Df(), o = (a) => {
      s(a), n("update:active", a);
    };
    return (a, r) => (k$(), $$("footer", V$, [
      b$("div", E$, [
        y$(a.$slots, "default", {}, () => [
          C$(x$(pa), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: o
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, T$ = window.Vuex.useStore, A$ = () => {
  const e = T$(), t = Ks();
  return () => C(void 0, null, function* () {
    if (e.state.suggestions.favorites.length)
      return;
    const n = yield me.fetchFavorites();
    if (!n || !n.length)
      return;
    const s = {};
    for (const o of n)
      e.commit("suggestions/addFavoriteSuggestion", o), me.fetchSectionSuggestion(
        o.sourceLanguage,
        o.title,
        o.targetLanguage
      ).then(
        (a) => o.missingSectionsCount = (a == null ? void 0 : a.missingSectionsCount) || 0
      ), s[o.sourceLanguage] = [
        ...s[o.sourceLanguage] || [],
        o
      ];
    for (const [o, a] of Object.entries(
      s
    ))
      t(
        o,
        a.map((r) => r.title)
      );
  });
}, D$ = window.Vuex.useStore, Pf = () => {
  const e = D$(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: s,
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: a
  } = D(), { isDefaultFilter: r } = Jc(), { previousRoute: l } = Le(e), u = bt(), d = () => {
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
    return p || (r(s.value) ? d() || "direct" : "suggestion_filter_direct_preselect");
  };
  return { logDashboardOpenEvent: () => {
    const g = i(), p = {
      event_type: "dashboard_open",
      event_source: g,
      translation_source_language: o.value,
      translation_target_language: a.value
    };
    return g === "suggestion_filter_direct_preselect" && (p.event_context = s.value.id), u(p);
  } };
}, Jg = window.Vue.computed, P$ = window.Vuex.useStore, Fe = () => {
  const e = P$(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: s,
    sectionURLParameter: o
  } = D(), a = Jg(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      s.value
    )
  ), r = Jg(
    () => {
      var l;
      return !!((l = a.value) != null && l.presentSections.hasOwnProperty(
        o.value
      ));
    }
  );
  return { sectionSuggestion: a, isCurrentSectionPresent: r };
}, B$ = window.Vue.ref, ai = {
  NEW_SECTION: "NEW_SECTION",
  EXPAND: "EXPAND",
  REPLACE: "REPLACE",
  SANDBOX: "SANDBOX"
}, hl = B$(null), Rt = () => {
  const { isCurrentSectionPresent: e } = Fe(), t = () => {
    e.value ? s(ai.EXPAND) : s(ai.NEW_SECTION);
  }, n = () => {
    hl.value = null;
  }, s = (o) => {
    if (!Object.values(ai).includes(o))
      throw new Error("[CX] Invalid publishing target used");
    hl.value = o;
  };
  return {
    target: hl,
    resetPublishTarget: t,
    clearPublishTarget: n,
    setTarget: s,
    PUBLISHING_TARGETS: ai
  };
}, F$ = window.Vue.watch, N$ = () => {
  const { fetchAllTranslations: e } = Js(), t = Hh(), n = A$(), { fetchPageCollectionGroups: s } = cu(), { logDashboardOpenEvent: o } = Pf(), { applicationLanguagesInitialized: a } = Xh(), { clearPublishTarget: r } = Rt();
  return () => C(void 0, null, function* () {
    s(), r();
    try {
      yield n();
    } catch (l) {
      mw.log.error("[CX] Error while fetching favorite suggestions", l);
    }
    yield e(), F$(
      a,
      () => {
        a.value && (o(), t());
      },
      { immediate: !0 }
    );
  });
}, Zg = window.Vue.computed, M$ = window.Vue.ref, U$ = window.Vue.watch, I$ = window.Vue.watchEffect, R$ = window.Vuex.useStore, z$ = ["suggestions", "draft", "published"], O$ = () => {
  const e = R$(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = D(), { translationsFetched: s } = Js(), o = M$(null);
  if (z$.includes(t.value))
    o.value = t.value;
  else {
    const a = Zg(
      () => s.value.draft
    ), r = Zg(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? o.value = r.value.length > 0 ? "draft" : "suggestions" : (o.value = "suggestions", U$(a, (l) => {
      l && (o.value = r.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return I$(() => {
    n(o.value), window.scrollTo(0, 0);
  }), o;
}, j$ = window.Vue.computed, H$ = () => {
  const e = we();
  return j$(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: V0,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: Ki,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: $0,
        type: "text"
      }
    }
  ]);
};
const Ce = window.Vue.unref, Me = window.Vue.createVNode, q$ = window.Vue.toDisplayString, G$ = window.Vue.createTextVNode, cn = window.Vue.withCtx, fl = window.Vue.openBlock, ep = window.Vue.createBlock, tp = window.Vue.createCommentVNode, X$ = window.Vue.vShow, W$ = window.Vue.withDirectives, K$ = window.Vue.isRef, Y$ = window.Vue.createElementBlock, Q$ = window.Vue.computed, J$ = window.Vuex.useStore, Z$ = window.Codex.CdxButton, eV = window.Codex.CdxIcon, tV = {
  __name: "CXDashboard",
  setup(e) {
    const t = Ze(), n = bt(), s = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    N$()();
    const a = J$();
    a.dispatch("translator/fetchTranslatorStats");
    const r = Q$(() => a.state.translator.translatorStats), l = O$(), u = H$(), d = Df(), i = (c) => {
      d(c), l.value = c;
    };
    return (c, g) => (fl(), Y$("div", null, [
      Me(Ce(N), { class: "ma-0 pb-4" }, {
        default: cn(() => [
          Me(Ce(Z$), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: s
          }, {
            default: cn(() => [
              Me(Ce(eV), {
                class: "me-1",
                icon: Ce(Fh)
              }, null, 8, ["icon"]),
              G$(" " + q$(c.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      Me(Ce(N), {
        class: "ma-0",
        align: "start"
      }, {
        default: cn(() => [
          c.$mwui.breakpoint.tabletAndUp ? (fl(), ep(Ce(k), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: cn(() => [
              Me(Ce(pa), {
                id: "dashboard-list-selector--desktop",
                items: Ce(u),
                active: Ce(l),
                onSelect: i
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : tp("", !0),
          Me(Ce(k), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: cn(() => [
              W$(Me(Y2, null, null, 512), [
                [X$, Ce(l) === "suggestions"]
              ]),
              Me(I2, {
                active: Ce(l) === "suggestions"
              }, null, 8, ["active"]),
              Me(gg, {
                "translation-status": "draft",
                "active-status": Ce(l)
              }, null, 8, ["active-status"]),
              Me(gg, {
                "translation-status": "published",
                "active-status": Ce(l)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          Me(Ce(k), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: cn(() => [
              Me(Ce(N), {
                class: "ma-0",
                align: "start"
              }, {
                default: cn(() => [
                  Me(Ce(k), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: cn(() => [
                      Me(S$, { stats: r.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  Me(Ce(k), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: cn(() => [
                      Me(c$)
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
      c.$mwui.breakpoint.mobile ? (fl(), ep(L$, {
        key: 0,
        active: Ce(l),
        "onUpdate:active": g[0] || (g[0] = (p) => K$(l) ? l.value = p : null),
        items: Ce(u)
      }, null, 8, ["active", "items"])) : tp("", !0)
    ]));
  }
}, nV = {
  name: "DashboardView",
  components: { CxDashboard: tV }
}, sV = window.Vue.resolveComponent, oV = window.Vue.createVNode, aV = window.Vue.openBlock, iV = window.Vue.createElementBlock, rV = { class: "cx-translation-dashboard" };
function lV(e, t, n, s, o, a) {
  const r = sV("cx-dashboard");
  return aV(), iV("main", rV, [
    oV(r, { class: "mb-4 pb-12 px-3 px-tablet-10" })
  ]);
}
const np = /* @__PURE__ */ de(nV, [["render", lV]]), cV = window.Vuex.useStore, uV = window.Vue.computed, zt = () => {
  const e = cV(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: s,
    pageURLParameter: o
  } = D();
  return { currentTranslation: uV(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (r) => r.status === "draft" && r.sourceTitle === o.value && r.sectionTitleMatches(s.value) && r.sourceLanguage === t.value && r.targetLanguage === n.value
    )
  ) };
}, ks = window.Vue.computed, dV = () => {
  const { sectionSuggestion: e } = Fe(), { targetLanguageURLParameter: t } = D(), { currentTranslation: n } = zt(), s = ks(
    () => {
      var g, p, m;
      return (m = (p = (g = e.value) == null ? void 0 : g.orderedMissingSections) == null ? void 0 : p[0]) == null ? void 0 : m.sourceTitle;
    }
  ), o = ks(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.missingSectionsCount;
    }
  ), a = ks(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.presentSectionsCount;
    }
  ), { targetPageExists: r, getCurrentTitleByLanguage: l } = bn(), u = ks(() => r ? K.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    l(t.value, null)
  ) : null), d = (g) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : g ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : r.value ? o.value > 1 || o.value === 1 && a.value > 0 ? "cx-sx-select-section" : o.value === 1 && a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : o.value === 0 && a.value > 0 ? "cx-sx-select-section" : o.value === 0 && a.value === 0 ? "cx-sx-translation-confirmer-action-new-translation" : "" : "cx-sx-start-translation-button-label", i = ks(() => {
    if (o.value > 1) {
      const g = "cx-sx-existing-translation-additional-info", p = ["$1", o.value - 1];
      return mw.message(g, ...p).parse().replace("$1", `"${s.value}"`);
    } else if (o.value === 1 && a.value > 0) {
      const g = "cx-sx-translation-confirmer-action-message-single-missing-multiple-present";
      return mw.message(g, "$1").parse().replace("$1", `"${s.value}"`);
    } else if (o.value === 1 && a.value === 0) {
      const g = "cx-sx-translation-confirmer-action-message-single-missing-none-present";
      return mw.message(g, "$1").parse().replace("$1", `"${s.value}"`);
    } else if (a.value > 0) {
      const g = "cx-sx-translation-confirmer-action-message-none-missing-multiple-present";
      return mw.message(g).parse();
    } else {
      const g = "cx-sx-translation-confirmer-action-message-none-missing-none-present";
      return mw.message(g).parse();
    }
  }), c = ks(
    () => {
      var g;
      return !r.value || ((g = e.value) == null ? void 0 : g.missingSectionsCount) > 0;
    }
  );
  return {
    actionInformationMessage: i,
    getActionButtonLabel: d,
    isProgressiveButton: c,
    targetArticlePath: u
  };
};
function gV(e) {
  return e.$el = $(e), e;
}
function pV(e, t, n, s) {
  e.clearSurfaces();
  const o = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(
      // When content is empty, add a dummy span node so that VE doesn't add a new paragraph
      t || "<span class='sx-edit-dummy-node' />"
    ),
    { lang: n, dir: s }
  ), a = e.createSurface(o);
  return e.surfaces.push(a), e.setSurface(a), a.initialize(), a;
}
function mV() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function hV(e, t) {
  return C(this, null, function* () {
    yield yu(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = gV(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const fV = window.Vue.computed, wV = window.Vue.onMounted, vV = window.Vue.ref;
function _V(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const SV = {
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
    const n = vV(null);
    let s = null;
    const o = fV(
      () => e.useText ? s.getDom().body.textContent : s.getHtml()
    ), a = () => {
      s.destroy(), n.value.querySelector(".toolbar").innerHTML = "";
    }, u = {
      placeholder: !1,
      log: console.log,
      sectionId: 0,
      onBack: () => {
        a(), t.emit("close");
      },
      onNext: () => {
        t.emit("edit-completed", o.value), a();
      },
      language: e.language,
      title: e.title,
      siteMapper: new mw.cx.SiteMapper()
    };
    return wV(() => C(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = _V;
      const i = yield hV(u, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), s = pV(
        i,
        e.content,
        e.language,
        e.dir
      );
      const c = ve.ui.contextItemFactory.lookup("reference");
      c.prototype.getRendering = mV, s.focus();
    })), { sxeditor: n };
  }
}, Hi = window.Vue.createElementVNode, yV = window.Vue.openBlock, xV = window.Vue.createElementBlock, CV = ["lang", "dir"], bV = /* @__PURE__ */ Hi("div", { class: "overlay-header-container" }, [
  /* @__PURE__ */ Hi("div", { class: "overlay-header header initial-header" }, [
    /* @__PURE__ */ Hi("div", { class: "toolbar" })
  ])
], -1), kV = ["lang", "dir"];
function $V(e, t, n, s, o, a) {
  return yV(), xV("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    bV,
    Hi("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, kV)
  ], 8, CV);
}
const VV = /* @__PURE__ */ de(SV, [["render", $V]]);
function yu() {
  return mw.loader.using("mw.cx3.ve");
}
const EV = window.Vuex.useStore, LV = () => {
  const e = EV();
  return (t, n) => C(void 0, null, function* () {
    const s = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!s)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield yu(), new Promise((o) => {
      setTimeout(() => {
        const a = Eh.convertSegmentedContentToPageSections(
          s.content,
          !0
          // resolve references
        );
        s.updateSections(a), o();
      }, 0);
    });
  });
}, TV = window.Vuex.useStore, Bf = () => {
  const e = TV();
  return (t, n, s, o = null) => C(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      s
    );
    if (a && a.content)
      return;
    const r = yield cs.fetchPageContent(
      t,
      n,
      s,
      o
    );
    a = e.getters["mediawiki/getPage"](
      t,
      s
    ), a ? a.content || (a.content = r.content, e.commit("mediawiki/setPageSections", {
      page: a,
      sections: r.sections
    })) : e.commit("mediawiki/addPage", r);
  });
}, wl = window.Vue.computed, AV = window.Vuex.useStore, dt = () => {
  const e = AV(), { sectionSuggestion: t } = Fe(), { currentTranslation: n } = zt(), {
    sourceLanguageURLParameter: s,
    pageURLParameter: o,
    targetLanguageURLParameter: a
  } = D(), r = wl(
    () => e.getters["mediawiki/getPage"](
      s.value,
      o.value
    )
  ), l = wl(
    () => {
      var d, i;
      return ((d = t.value) == null ? void 0 : d.targetTitle) || ((i = n.value) == null ? void 0 : i.targetTitle);
    }
  ), u = wl(
    () => e.getters["mediawiki/getPage"](
      a.value,
      l.value
    )
  );
  return { currentSourcePage: r, currentTargetPage: u, currentTargetPageTitle: l };
}, ur = () => {
  const { currentSourcePage: e } = dt(), t = LV(), n = Bf(), {
    setSectionURLParam: s,
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    revisionURLParameter: l
  } = D(), u = (c, g) => C(void 0, null, function* () {
    c() || (yield n(
      o.value,
      a.value,
      r.value,
      l.value
    ), Xs || (yield t(
      o.value,
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
        c === 0 ? m.originalTitle = e.value.title : s(m.originalTitle);
      });
    },
    selectPageSectionByTitle: (c) => u(() => e.value.getSectionByTitle(c), () => {
      s(c);
    })
  };
}, DV = window.Vuex.useStore, Zs = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: s,
    isQuickTutorialForced: o
  } = D(), a = DV(), r = Ze(), l = () => {
    const c = r.currentRoute.value.name !== "sx-quick-tutorial" && (o() || !a.getters["translator/userHasSectionTranslations"]) ? "sx-quick-tutorial" : "sx-sentence-selector";
    return r.getRoutes().find((g) => g.name === c);
  }, u = () => {
    const i = mw.config.get(
      "wgContentTranslationTranslateInTarget"
    ), c = K.getCurrentWikiLanguageCode();
    if (!i || t.value === c)
      return !1;
    const g = s.value ? { section: s.value } : {}, p = K.getCXUrl(
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
      s.value ? { sourcesection: s.value } : {}
    );
  };
  return () => {
    if (K.setCXToken(
      e.value,
      t.value,
      n.value
    ), Xs) {
      d();
      return;
    }
    if (u())
      return;
    const c = l();
    r.push({ name: c.name });
  };
}, xu = () => {
  const e = bt(), { currentTranslation: t } = zt();
  return () => {
    if (!t.value)
      return mw.log.error(
        "[CX Event Logging] No current draft translation to continue"
      ), Promise.resolve();
    const {
      translationId: n,
      sourceLanguage: s,
      targetLanguage: o,
      sourceTitle: a,
      targetTitle: r,
      isLeadSectionTranslation: l,
      sourceSectionTitle: u,
      targetSectionTitle: d
    } = t.value, i = {
      event_type: "dashboard_translation_continue",
      translation_id: n,
      translation_source_language: s,
      translation_source_title: a,
      translation_target_language: o,
      translation_target_title: r,
      translation_type: l ? "article" : "section"
    };
    return u && (i.translation_source_section = u), d && (i.translation_target_section = d), e(i);
  };
}, PV = window.Vue.ref, BV = () => {
  const e = Ze(), { logDashboardTranslationStartEvent: t } = cr(), n = xu(), s = Zs(), { sectionURLParameter: o } = D(), { targetPageExists: a } = bn(), { selectPageSectionByTitle: r } = ur(), l = () => C(void 0, null, function* () {
    yield r(o.value), e.push({ name: "sx-content-comparator" });
  }), u = PV(!1), { currentTranslation: d } = zt();
  return {
    handlePrimaryButtonClick: () => {
      d.value ? d.value.isArticleTranslation && !Xs ? u.value = !0 : (n(), s()) : o.value ? l() : a.value ? e.push({ name: "sx-section-selector" }) : (t(), s());
    },
    translationConfirmationDialogOn: u
  };
};
const FV = window.Vue.resolveDirective, sp = window.Vue.createElementVNode, op = window.Vue.withDirectives, NV = window.Vue.unref, MV = window.Vue.withCtx, UV = window.Vue.openBlock, IV = window.Vue.createBlock, RV = {
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
    const n = e, s = t, o = (d) => s("update:modelValue", d), a = we(), r = {
      label: a.i18n(
        "cx-unreviewed-translation-dialog-review-translation-button-label"
      ),
      actionType: "progressive"
    }, l = {
      label: a.i18n("cx-unreviewed-translation-dialog-close-button-label")
    };
    function u() {
      window.open(n.targetUrl, "_blank"), o(!1);
    }
    return (d, i) => {
      const c = FV("i18n");
      return UV(), IV(NV(zV), {
        class: "cx-unreviewed-translation-dialog",
        open: e.modelValue,
        title: d.$i18n("cx-unreviewed-translation-dialog-title"),
        "use-close-button": !0,
        "primary-action": r,
        "default-action": l,
        "onUpdate:open": i[0] || (i[0] = (g) => o(g)),
        onPrimary: u,
        onDefault: i[1] || (i[1] = (g) => o(!1))
      }, {
        default: MV(() => [
          op(sp("p", null, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          op(sp("a", RV, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title"]);
    };
  }
}, jV = () => {
  const {
    sectionURLParameter: e,
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: s
  } = D(), o = ar();
  return () => C(void 0, null, function* () {
    const a = yield o(
      t.value,
      n.value,
      s.value
    );
    return a instanceof xn ? a.sourceSections.includes(e.value) : !1;
  });
};
const Se = window.Vue.unref, HV = window.Vue.resolveDirective, Eo = window.Vue.createElementVNode, ap = window.Vue.withDirectives, Lo = window.Vue.openBlock, vl = window.Vue.createElementBlock, _l = window.Vue.createCommentVNode, ft = window.Vue.createVNode, At = window.Vue.withCtx, Sl = window.Vue.toDisplayString, yl = window.Vue.createTextVNode, qV = window.Vue.withModifiers, ip = window.Vue.createBlock, GV = window.Vue.Fragment, XV = { class: "sx-translation-confirmer-body pb-4" }, WV = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, KV = ["innerHTML"], YV = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, QV = ["href"], JV = ["innerHTML"], xl = window.Vue.computed, Cl = window.Vue.ref, ZV = window.Vue.watchEffect, eE = window.Vuex.useStore, bl = window.Codex.CdxButton, tE = window.Codex.CdxIcon, nE = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = Ze(), s = eE(), { sectionSuggestion: o } = Fe(), { targetLanguageAutonym: a } = Le(s), { sectionURLParameter: r, clearSectionURLParameter: l } = D(), { logDashboardTranslationStartEvent: u } = cr(), d = Zs(), { handlePrimaryButtonClick: i, translationConfirmationDialogOn: c } = BV(), g = Cl(!1), p = Cl(null), m = () => C(this, null, function* () {
      let te = !0;
      try {
        te = yield xt.checkUnreviewedTranslations();
      } catch (R) {
        mw.log.error(
          "Error while checking for user's unreviewed translations ",
          R
        );
      }
      te !== !0 && (g.value = !0, p.value = te.targetUrl);
    }), h = () => C(this, null, function* () {
      yield m(), !g.value && (u(), d());
    }), f = () => C(this, null, function* () {
      yield m(), !g.value && i();
    }), w = t;
    ZV(() => {
      c.value && (w("open-translation-confirmation-dialog"), c.value = !1);
    });
    const {
      actionInformationMessage: v,
      getActionButtonLabel: y,
      isProgressiveButton: S,
      targetArticlePath: b
    } = dV(), E = we(), x = xl(
      () => E.i18n(y(!!r.value))
    ), I = () => C(this, null, function* () {
      yield m(), !g.value && n.push({ name: "sx-section-selector" });
    }), L = xl(() => {
      var te, R;
      return r.value && !!((R = (te = o.value) == null ? void 0 : te.sourceSections) != null && R.length);
    }), { targetPageExists: P } = bn(), H = xl(() => !r.value && P.value && Xs), se = jV(), ae = Cl(!1);
    return se().then((te) => {
      te || l(), ae.value = !0;
    }), (te, R) => {
      const J = HV("i18n");
      return Lo(), vl(GV, null, [
        Eo("section", XV, [
          Se(r) && ae.value ? (Lo(), vl("section", WV, [
            ap(Eo("h6", null, null, 512), [
              [J, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            Eo("h5", {
              class: "ma-0",
              innerHTML: Se(r)
            }, null, 8, KV)
          ])) : Se(P) && !Se(r) ? (Lo(), vl("section", YV, [
            ft(Se(N), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: At(() => [
                ap(ft(Se(k), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [J, [Se(a)], "cx-sx-existing-translation-status"]
                ]),
                ft(Se(k), { shrink: "" }, {
                  default: At(() => [
                    Eo("a", {
                      href: Se(b),
                      target: "_blank"
                    }, [
                      ft(Se(tE), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: Se(sr)
                      }, null, 8, ["icon"])
                    ], 8, QV)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            ft(Se(N), { class: "ma-0" }, {
              default: At(() => [
                ft(Se(k), null, {
                  default: At(() => [
                    Eo("span", { innerHTML: Se(v) }, null, 8, JV)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : _l("", !0),
          ft(Se(N), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: At(() => [
              L.value ? (Lo(), ip(Se(k), {
                key: 0,
                shrink: ""
              }, {
                default: At(() => [
                  ft(Se(bl), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: qV(I, ["stop"])
                  }, {
                    default: At(() => [
                      yl(Sl(te.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : _l("", !0),
              H.value ? (Lo(), ip(Se(k), {
                key: 1,
                shrink: ""
              }, {
                default: At(() => [
                  ft(Se(bl), {
                    size: "large",
                    onClick: h
                  }, {
                    default: At(() => [
                      yl(Sl(te.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : _l("", !0),
              ft(Se(k), { shrink: "" }, {
                default: At(() => [
                  ft(Se(bl), {
                    weight: "primary",
                    size: "large",
                    action: Se(S) ? "progressive" : "default",
                    onClick: f
                  }, {
                    default: At(() => [
                      yl(Sl(x.value), 1)
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
        ft(OV, {
          modelValue: g.value,
          "onUpdate:modelValue": R[0] || (R[0] = (oe) => g.value = oe),
          "target-url": p.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const kl = window.Vue.unref, sE = window.Vue.openBlock, oE = window.Vue.createBlock, aE = window.Vue.computed, Ff = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedTargetLanguageCodes: t } = fa(), {
      sourceLanguageURLParameter: n,
      targetLanguageURLParameter: s
    } = D(), { currentLanguageTitleGroup: o } = bn(), a = aE(
      () => {
        var d;
        return ((d = o.value) == null ? void 0 : d.titles.map((i) => i.lang)) || [];
      }
    ), r = Ly(), l = (d) => r(d, s.value), u = (d) => r(n.value, d);
    return (d, i) => (sE(), oE(Xi, {
      class: "sx-article-language-selector",
      "source-languages": a.value,
      "target-languages": kl(t),
      "selected-source-language": kl(n),
      "selected-target-language": kl(s),
      "onUpdate:selectedSourceLanguage": l,
      "onUpdate:selectedTargetLanguage": u
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
}, $l = window.Vue.computed, rp = window.Vue.ref, iE = window.Vue.watchEffect, rE = () => {
  const { currentSourcePage: e } = dt(), { sectionSuggestion: t } = Fe(), n = we(), { sectionURLParameter: s } = D(), o = rp(null), a = rp([]);
  iE(() => C(void 0, null, function* () {
    var d;
    if (t.value && s.value)
      a.value = [s.value];
    else if (t.value) {
      const { missingSections: i } = t.value;
      a.value = Object.keys(i);
    } else
      e.value && !Xs ? a.value = [Os.LEAD_SECTION_DUMMY_TITLE] : a.value = [];
    a.value.length ? o.value = yield Xk(
      e.value,
      a.value
    ) : o.value = ((d = e.value) == null ? void 0 : d.articleSize) || null;
  }));
  const r = $l(() => Lf(o.value || 0)), l = $l(() => {
    if (!t.value && !e.value || !r.value)
      return "";
    const d = Wk(
      r.value,
      a.value
    );
    return n.i18n(...d);
  }), u = $l(
    () => Tf(o.value)
  );
  return { timeEstimateMessage: l, isQuickTranslation: u };
};
const Ve = window.Vue.unref, Vl = window.Vue.toDisplayString, Tn = window.Vue.createElementVNode, Gt = window.Vue.createVNode, $s = window.Vue.withCtx, lE = window.Vue.resolveDirective, cE = window.Vue.withDirectives, uE = window.Vue.normalizeClass, lp = window.Vue.openBlock, dE = window.Vue.createElementBlock, gE = window.Vue.createCommentVNode, pE = window.Vue.createBlock, mE = ["textContent"], hE = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, fE = ["textContent"], wE = { class: "pe-3" }, vE = ["textContent"], _E = window.Codex.CdxButton, To = window.Codex.CdxIcon, Qn = window.Vue.computed, SE = window.Vuex.useStore, yE = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = SE(), { currentSourcePage: n } = dt(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: o,
      pageURLParameter: a
    } = D(), r = Qn(() => t.state.suggestions.favorites || []), l = Qn(
      () => r.value.some(
        (S) => a.value === S.title && s.value === S.sourceLanguage && o.value === S.targetLanguage
      )
    ), { markFavoriteSuggestion: u, removeFavoriteSuggestion: d } = Su(), i = () => u(
      a.value,
      s.value,
      o.value
    ), c = () => d(
      new js({
        title: a.value,
        sourceLanguage: s.value,
        targetLanguage: o.value
      })
    ), g = Qn(
      () => l.value ? Uh : Ih
    ), p = Qn(
      () => l.value ? c : i
    ), m = Qn(
      () => K.getPageUrl(s.value || "", a.value || "")
    ), h = Qn(
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
    }, w = Qn(() => {
      var b;
      const S = Object.values(((b = n.value) == null ? void 0 : b.pageviews) || {}).reduce(
        (E, x) => E + x,
        0
      );
      return f(S);
    }), { timeEstimateMessage: v, isQuickTranslation: y } = rE();
    return (S, b) => {
      const E = lE("i18n");
      return lp(), pE(Ve(N), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: $s(() => [
          Gt(Ve(k), null, {
            default: $s(() => [
              Gt(Ve(N), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: $s(() => [
                  Gt(Ve(k), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: m.value,
                    target: "_blank"
                  }, {
                    default: $s(() => [
                      Tn("h5", {
                        class: "ma-0 me-1",
                        textContent: Vl(Ve(a))
                      }, null, 8, mE),
                      Gt(Ve(To), {
                        size: "x-small",
                        icon: Ve(sr)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  Gt(Ve(k), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: $s(() => [
                      Gt(Ve(_E), {
                        class: "px-0",
                        weight: "quiet",
                        action: l.value ? "progressive" : "default",
                        "aria-label": S.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: p.value
                      }, {
                        default: $s(() => [
                          Gt(Ve(To), { icon: g.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Tn("div", hE, [
                Tn("div", null, [
                  Tn("span", null, [
                    Gt(Ve(To), {
                      icon: Ve(Rh),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    Tn("span", {
                      class: "pe-3",
                      textContent: Vl(h.value)
                    }, null, 8, fE)
                  ]),
                  Tn("span", null, [
                    Gt(Ve(To), {
                      icon: Ve(WS),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    cE(Tn("span", wE, null, 512), [
                      [E, [w.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                Ve(v) ? (lp(), dE("span", {
                  key: 0,
                  class: uE(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": Ve(y)
                  }])
                }, [
                  Gt(Ve(To), {
                    icon: Ve(YS),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  Tn("span", {
                    textContent: Vl(Ve(v))
                  }, null, 8, vE)
                ], 2)) : gE("", !0)
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
const xE = window.Vue.resolveDirective, Jn = window.Vue.createElementVNode, ii = window.Vue.withDirectives, CE = window.Vue.toDisplayString, bE = window.Vue.createTextVNode, El = window.Vue.unref, Ll = window.Vue.withCtx, Tl = window.Vue.openBlock, Al = window.Vue.createBlock;
window.Vue.createCommentVNode;
const kE = { class: "pa-4" }, $E = { class: "flex pt-2" }, VE = window.Codex.CdxButton, EE = window.Vue.ref, LE = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, s = () => n("update:modelValue", !1), o = Zs(), a = xu(), r = EE(!1), { currentTranslation: l } = zt(), u = () => C(this, null, function* () {
      r.value = !0;
      let d = !1;
      try {
        d = yield xt.splitTranslation(
          l.value.translationId
        );
      } catch (i) {
        mw.log.error(
          "[CX] Error while splitting the translation into section translations",
          i
        );
      }
      r.value = !1, d && (a(), o(), s());
    });
    return (d, i) => {
      const c = xE("i18n");
      return Tl(), Al(El(Ct), {
        value: e.modelValue,
        persistent: r.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: d.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: s
      }, {
        footer: Ll(() => [
          Jn("div", $E, [
            r.value ? (Tl(), Al(El(ct), { key: 1 })) : (Tl(), Al(El(VE), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: u
            }, {
              default: Ll(() => [
                bE(CE(d.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: Ll(() => [
          Jn("div", kE, [
            ii(Jn("p", null, null, 512), [
              [c, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            ii(Jn("p", null, null, 512), [
              [c, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            Jn("p", null, [
              ii(Jn("strong", null, null, 512), [
                [c, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            ii(Jn("p", null, null, 512), [
              [c, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
}, TE = window.Vuex.useStore;
let ri = [];
const Cu = () => {
  const e = TE();
  return (t, n) => {
    const s = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || ri.includes(s) ? Promise.resolve() : (ri.push(s), cs.fetchLanguageTitles(t, n).then((o) => {
      ri = ri.filter(
        (a) => a !== s
      ), o && e.commit("mediawiki/addLanguageTitleGroup", o);
    }));
  };
}, AE = window.Vue.ref, Vs = AE(null), Nf = () => {
  const e = () => C(void 0, null, function* () {
    var n, s;
    Vs.value || (yield nr.fetchCXServerToken().then((o) => {
      o.age <= 30 && (o.age = 3600);
      const a = Math.floor(Date.now() / 1e3);
      o.refreshAt = a + o.age - 30, Vs.value = o;
    }).catch((o) => {
      if (o === "token-impossible") {
        const a = Math.floor(Date.now() / 1e3);
        Vs.value = { jwt: "", refreshAt: a + 36e3 };
      }
    }));
    const t = Math.floor(Date.now() / 1e3);
    return ((n = Vs.value) == null ? void 0 : n.refreshAt) <= t ? (Vs.value = null, e()) : (s = Vs.value) == null ? void 0 : s.jwt;
  });
  return e;
};
const cp = window.Vue.resolveDirective, li = window.Vue.createElementVNode, up = window.Vue.withDirectives, An = window.Vue.unref, ci = window.Vue.withCtx, un = window.Vue.createVNode, Dl = window.Vue.openBlock, dp = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const DE = window.Vue.createBlock, PE = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, BE = { class: "mb-0" }, FE = { class: "sx-translation-confirmer__article-image flex justify-center" }, NE = ["src"], ME = { class: "ma-3" }, gp = window.Vue.computed, UE = window.Vue.inject, IE = window.Vue.onBeforeUnmount, RE = window.Vue.ref, zE = window.Vuex.useStore, OE = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = zE(), { currentSourcePage: n } = dt(), { previousRoute: s } = Le(t), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l,
      clearTranslationURLParameters: u
    } = D(), d = UE("breakpoints"), i = gp(() => d.value.nextBreakpoint), c = gp(
      () => {
        var y;
        return (y = n.value) == null ? void 0 : y.getImage(i.value);
      }
    ), { fetchTranslationsByStatus: g } = Js(), p = Cu();
    g("draft"), p(o.value, r.value), yu(), Nf()(), jh()(a.value);
    const f = Ze(), w = () => {
      const y = ["dashboard", "sx-article-search"];
      !s.value || !y.includes(s.value) ? f.push({ name: "dashboard" }) : f.push({ name: s.value });
    };
    IE(() => {
      const y = f.currentRoute.value.name;
      (y === "dashboard" || y === "sx-article-search") && u();
    });
    const v = RE(!1);
    return (y, S) => {
      const b = cp("i18n"), E = cp("i18n-html");
      return Dl(), dp("section", PE, [
        un(An(N), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: ci(() => [
            un(An(k), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: ci(() => [
                up(li("h5", BE, null, 512), [
                  [b, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            un(An(k), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: ci(() => [
                un(An(Ge), {
                  class: "pa-0",
                  type: "icon",
                  icon: An(Yi),
                  "icon-size": 20,
                  onClick: w
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        li("div", FE, [
          c.value ? (Dl(), dp("img", {
            key: 0,
            src: c.value
          }, null, 8, NE)) : (Dl(), DE(An(Je), {
            key: 1,
            size: "120",
            icon: An(uh),
            "icon-color": y.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        un(yE),
        un(Ff),
        un(nE, {
          onOpenTranslationConfirmationDialog: S[0] || (S[0] = (x) => v.value = !0)
        }),
        un(An(N), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: ci(() => [
            li("p", ME, [
              up(li("small", null, null, 512), [
                [E, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        un(LE, {
          modelValue: v.value,
          "onUpdate:modelValue": S[1] || (S[1] = (x) => v.value = x)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const jE = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: OE
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, HE = window.Vue.resolveComponent, qE = window.Vue.createVNode, GE = window.Vue.normalizeClass, XE = window.Vue.openBlock, WE = window.Vue.createElementBlock;
function KE(e, t, n, s, o, a) {
  const r = HE("sx-translation-confirmer");
  return XE(), WE("main", {
    class: GE(["sx-translation-confirmer-view", a.classes])
  }, [
    qE(r)
  ], 2);
}
const YE = /* @__PURE__ */ de(jE, [["render", KE]]);
const QE = window.Vue.toDisplayString, pp = window.Vue.unref, JE = window.Vue.createVNode, ZE = window.Vue.createTextVNode, e4 = window.Vue.createElementVNode, t4 = window.Vue.openBlock, n4 = window.Vue.createElementBlock, s4 = { class: "sx-section-selector-view-article-item" }, o4 = ["href"], a4 = window.Codex.CdxIcon, mp = {
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
    return (t, n) => (t4(), n4("span", s4, [
      e4("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        ZE(QE(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        JE(pp(a4), {
          size: "x-small",
          icon: pp(sr)
        }, null, 8, ["icon"])
      ], 8, o4)
    ]));
  }
};
const i4 = window.Vue.resolveDirective, ui = window.Vue.createElementVNode, Pl = window.Vue.withDirectives, Zn = window.Vue.unref, r4 = window.Vue.toDisplayString, di = window.Vue.withCtx, Ao = window.Vue.createVNode, l4 = window.Vue.openBlock, c4 = window.Vue.createElementBlock, u4 = { class: "sx-section-selector__header pa-4" }, d4 = { class: "sx-section-selector__header-text ma-0" }, g4 = ["textContent"], p4 = { class: "pt-0 ma-0" }, m4 = { class: "ma-0" }, h4 = window.Codex.CdxButton, f4 = window.Codex.CdxIcon, w4 = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = Fe();
    return (n, s) => {
      const o = i4("i18n");
      return l4(), c4("div", u4, [
        Ao(Zn(N), { class: "ma-0 pb-3" }, {
          default: di(() => [
            Ao(Zn(k), null, {
              default: di(() => {
                var a;
                return [
                  Pl(ui("h6", d4, null, 512), [
                    [o, void 0, "cx-sx-section-selector-title"]
                  ]),
                  ui("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: r4((a = Zn(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, g4)
                ];
              }),
              _: 1
            }),
            Ao(Zn(k), {
              shrink: "",
              class: "justify-end"
            }, {
              default: di(() => [
                Ao(Zn(h4), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: s[0] || (s[0] = (a) => n.$emit("close"))
                }, {
                  default: di(() => [
                    Ao(Zn(f4), { icon: Zn(Qs) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Pl(ui("h4", p4, null, 512), [
          [o, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        Pl(ui("p", m4, null, 512), [
          [o, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, v4 = window.Vue.renderList, _4 = window.Vue.Fragment, Bl = window.Vue.openBlock, hp = window.Vue.createElementBlock, S4 = window.Vue.renderSlot, gi = window.Vue.unref, fp = window.Vue.createVNode, wp = window.Vue.withCtx, y4 = window.Vue.createBlock, x4 = { class: "sx-section-selector__sections-list ma-0 pa-0" }, C4 = window.Codex.CdxButton, b4 = window.Codex.CdxIcon, Mf = {
  __name: "SXSectionSelectorSectionList",
  props: {
    /**
     * @type {{targetTitle: string, sourceTitle: string, isEasy: boolean}[]}
     */
    sections: {
      type: Array,
      required: !0
    }
  },
  emits: ["select-section"],
  setup(e) {
    return (t, n) => (Bl(), hp("ul", x4, [
      (Bl(!0), hp(_4, null, v4(e.sections, (s) => (Bl(), y4(gi(N), {
        key: s.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: wp(() => [
          fp(gi(C4), {
            weight: "quiet",
            class: "col justify-start items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (o) => t.$emit("select-section", s.sourceTitle)
          }, {
            default: wp(() => [
              S4(t.$slots, "default", {
                targetSection: s.targetTitle,
                sourceSection: s.sourceTitle,
                isEasy: s.isEasy
              }),
              fp(gi(b4), {
                icon: gi(_a),
                class: "ms-auto"
              }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["aria-label", "onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, k4 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const $4 = window.Vue.resolveDirective, pi = window.Vue.createElementVNode, mi = window.Vue.withDirectives, wt = window.Vue.unref, hi = window.Vue.openBlock, Fl = window.Vue.createBlock, V4 = window.Vue.createCommentVNode, Es = window.Vue.withCtx, Do = window.Vue.createVNode, E4 = window.Vue.toDisplayString, L4 = window.Vue.createTextVNode, T4 = window.Vue.createElementBlock, A4 = { class: "sx-section-selector__missing-sections py-2" }, D4 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, P4 = ["lang", "dir", "innerHTML"], vp = window.Vue.computed, B4 = window.Codex.CdxButton, F4 = window.Codex.CdxInfoChip, N4 = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = Fe(), { targetLanguageURLParameter: n } = D(), s = vp(() => j.getAutonym(n.value)), o = vp(
      () => {
        var a;
        return Object.keys(((a = t.value) == null ? void 0 : a.missingSections) || {}).length === 0;
      }
    );
    return (a, r) => {
      const l = $4("i18n");
      return hi(), T4("section", A4, [
        mi(pi("h4", D4, null, 512), [
          [l, [
            s.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        o.value ? (hi(), Fl(wt(N), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: Es(() => [
            Do(wt(k), {
              class: "py-6 justify-center",
              innerHTML: wt(k4)
            }, null, 8, ["innerHTML"]),
            Do(wt(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: Es(() => [
                mi(pi("h6", null, null, 512), [
                  [l, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            Do(wt(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: Es(() => [
                mi(pi("p", null, null, 512), [
                  [l, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            Do(wt(k), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: Es(() => [
                Do(wt(B4), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: r[1] || (r[1] = (u) => a.$emit("close"))
                }, {
                  default: Es(() => [
                    L4(E4(a.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (hi(), Fl(Mf, {
          key: 0,
          sections: wt(t).orderedMissingSections,
          onSelectSection: r[0] || (r[0] = (u) => a.$emit("select-section", u))
        }, {
          default: Es(({ sourceSection: u, isEasy: d }) => {
            var i, c;
            return [
              pi("h5", {
                class: "ma-0",
                lang: (i = wt(t)) == null ? void 0 : i.sourceLanguage,
                dir: wt(j.getDir)((c = wt(t)) == null ? void 0 : c.sourceLanguage),
                innerHTML: u
              }, null, 8, P4),
              d ? mi((hi(), Fl(wt(F4), {
                key: 0,
                class: "sx-section-selector__easy-section-badge"
              }, null, 512)), [
                [l, void 0, "cx-sx-section-selector-easy-section-badge"]
              ]) : V4("", !0)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const M4 = window.Vue.resolveDirective, fi = window.Vue.createElementVNode, U4 = window.Vue.withDirectives, es = window.Vue.unref, I4 = window.Vue.withCtx, R4 = window.Vue.createVNode, z4 = window.Vue.openBlock, O4 = window.Vue.createElementBlock, j4 = { class: "sx-section-selector__present-sections py-2" }, H4 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, q4 = { class: "sx-section-selector__present-section-button-content" }, G4 = ["lang", "dir", "innerHTML"], X4 = ["lang", "dir", "innerHTML"], W4 = window.Vue.computed, _p = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = Fe(), { targetLanguageURLParameter: n } = D(), s = W4(() => j.getAutonym(n.value));
    return (o, a) => {
      var l;
      const r = M4("i18n");
      return z4(), O4("section", j4, [
        U4(fi("h4", H4, null, 512), [
          [r, [
            s.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        R4(Mf, {
          sections: ((l = es(t)) == null ? void 0 : l.orderedPresentSections) || [],
          onSelectSection: a[0] || (a[0] = (u) => o.$emit("select-section", u))
        }, {
          default: I4(({ sourceSection: u, targetSection: d }) => {
            var i, c, g, p;
            return [
              fi("div", q4, [
                fi("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (i = es(t)) == null ? void 0 : i.sourceLanguage,
                  dir: es(j.getDir)((c = es(t)) == null ? void 0 : c.sourceLanguage),
                  innerHTML: u
                }, null, 8, G4),
                fi("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (g = es(t)) == null ? void 0 : g.targetLanguage,
                  dir: es(j.getDir)((p = es(t)) == null ? void 0 : p.targetLanguage),
                  innerHTML: d
                }, null, 8, X4)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const Ue = window.Vue.createVNode, Nl = window.Vue.openBlock, Sp = window.Vue.createBlock, yp = window.Vue.createCommentVNode, K4 = window.Vue.resolveDirective, Dn = window.Vue.createElementVNode, Po = window.Vue.withDirectives, st = window.Vue.unref, dn = window.Vue.withCtx, Y4 = window.Vue.normalizeClass, xp = window.Vue.toDisplayString, Cp = window.Vue.createTextVNode, Q4 = window.Vue.createElementBlock, J4 = { class: "sx-section-selector col-12 col-tablet-9 col-desktop-7 mx-auto" }, Z4 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, e3 = { class: "sx-section-selector__additional-consideration-title" }, t3 = { href: "#" }, n3 = { class: "sx-section-selector__additional-consideration-title" }, s3 = { href: "#" }, Bo = window.Vue.computed, o3 = window.Vue.inject, a3 = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = o3("breakpoints"), n = Bo(() => t.value.desktopAndUp), { sectionSuggestion: s } = Fe(), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: a,
      clearTranslationURLParameters: r,
      setSectionURLParam: l
    } = D(), u = Bo(() => j.getAutonym(o.value)), d = Bo(() => j.getAutonym(a.value)), i = Bo(
      () => {
        var y;
        return K.getPageUrl(o.value, (y = s.value) == null ? void 0 : y.sourceTitle);
      }
    ), c = Bo(
      () => {
        var y;
        return K.getPageUrl(a.value, (y = s.value) == null ? void 0 : y.targetTitle);
      }
    ), g = Ze(), p = () => {
      r(), g.push({ name: "dashboard" });
    }, { currentTranslation: m } = zt(), h = Zs(), f = xu(), { selectPageSectionByTitle: w } = ur(), v = (y) => {
      l(y), m.value ? (f(), h()) : (w(y), g.push({ name: "sx-content-comparator" }));
    };
    return (y, S) => {
      const b = K4("i18n");
      return Nl(), Q4("section", J4, [
        Ue(w4, { onClose: p }),
        Ue(Ff),
        Ue(st(N), {
          class: "ma-0",
          align: "stretch"
        }, {
          default: dn(() => [
            Ue(st(k), {
              cols: "12",
              desktop: "8",
              class: "ma-0 pa-0"
            }, {
              default: dn(() => [
                Ue(N4, {
                  onSelectSection: v,
                  onClose: p
                }),
                n.value ? yp("", !0) : (Nl(), Sp(_p, {
                  key: 0,
                  onSelectSection: v
                })),
                Dn("section", {
                  class: Y4(["py-2", { "sx-section-selector__more-details--desktop": n.value }])
                }, [
                  Po(Dn("h4", Z4, null, 512), [
                    [b, [
                      d.value
                    ], "cx-sx-section-selector-more-details-title"]
                  ]),
                  Ue(st(N), {
                    class: "ma-0",
                    align: "start",
                    justify: "start"
                  }, {
                    default: dn(() => [
                      Ue(st(k), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: dn(() => [
                          Ue(mp, {
                            path: i.value,
                            autonym: u.value
                          }, null, 8, ["path", "autonym"])
                        ]),
                        _: 1
                      }),
                      Ue(st(k), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: dn(() => [
                          Ue(mp, {
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
                Ue(st(N), {
                  class: "sx-section-selector__additional-considerations ma-0",
                  align: "stretch"
                }, {
                  default: dn(() => [
                    Ue(st(k), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 pt-5 pb-4"
                    }, {
                      default: dn(() => [
                        Dn("h6", e3, [
                          Ue(st(Je), {
                            icon: st(F0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          Cp(" " + xp(y.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                        ]),
                        Po(Dn("p", null, null, 512), [
                          [b, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                        ]),
                        Po(Dn("a", t3, null, 512), [
                          [b, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                        ])
                      ]),
                      _: 1
                    }),
                    Ue(st(k), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 py-5"
                    }, {
                      default: dn(() => [
                        Dn("h6", n3, [
                          Ue(st(Je), {
                            icon: st(B0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          Cp(" " + xp(y.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                        ]),
                        Po(Dn("p", null, null, 512), [
                          [b, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                        ]),
                        Po(Dn("a", s3, null, 512), [
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
            n.value ? (Nl(), Sp(st(k), {
              key: 0,
              desktop: "4",
              class: "ma-0 pa-0"
            }, {
              default: dn(() => [
                Ue(_p, {
                  class: "sx-section-selector-section-list-present--sidebar fill-height p-0",
                  onSelectSection: v
                })
              ]),
              _: 1
            })) : yp("", !0)
          ]),
          _: 1
        })
      ]);
    };
  }
}, i3 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: a3
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, r3 = window.Vue.resolveComponent, l3 = window.Vue.createVNode, c3 = window.Vue.normalizeClass, u3 = window.Vue.openBlock, d3 = window.Vue.createElementBlock;
function g3(e, t, n, s, o, a) {
  const r = r3("sx-section-selector");
  return u3(), d3("main", {
    class: c3(["sx-section-selector-view", a.classes])
  }, [
    l3(r)
  ], 2);
}
const p3 = /* @__PURE__ */ de(i3, [["render", g3]]), wi = window.Vue.computed, m3 = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t
  } = D(), n = wi(
    () => j.getAutonym(e.value)
  ), s = wi(
    () => j.getAutonym(t.value)
  ), { target: o, PUBLISHING_TARGETS: a } = Rt(), r = wi(
    () => o.value === a.EXPAND
  ), l = we();
  return wi(() => {
    const u = {
      value: "source_section",
      props: {
        label: l.i18n(
          "cx-sx-content-comparator-source-selector-title",
          n.value
        ),
        type: "text"
      }
    };
    let d;
    return r.value ? d = {
      value: "target_section",
      props: {
        label: l.i18n(
          "cx-sx-content-comparator-target-selector-target-section-title",
          s.value
        ),
        type: "text"
      }
    } : d = {
      value: "target_article",
      props: {
        label: l.i18n(
          "cx-sx-content-comparator-target-selector-full-article-title",
          s.value
        ),
        type: "text"
      }
    }, [u, d];
  });
};
const bp = window.Vue.unref, h3 = window.Vue.createVNode, f3 = window.Vue.openBlock, w3 = window.Vue.createElementBlock, v3 = { class: "sx-content-comparator__content-type-selector" }, _3 = window.Vue.watchEffect, S3 = {
  __name: "ContentTypeSelector",
  props: {
    selection: {
      type: String,
      required: !0
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = (r) => s("update:selection", r), a = m3();
    return _3(() => {
      a.value.map((l) => l.value).includes(n.selection) || o(a.value[0].value);
    }), (r, l) => (f3(), w3("div", v3, [
      h3(bp(pa), {
        items: bp(a),
        active: e.selection,
        onSelect: o
      }, null, 8, ["items", "active"])
    ]));
  }
}, Fo = window.Vue.computed, y3 = window.Vuex.useStore, ne = () => {
  const e = y3(), { currentSourcePage: t, currentTargetPageTitle: n } = dt(), { currentMTProvider: s } = Le(e), { sectionURLParameter: o } = D(), a = Fo(() => {
    var i, c;
    return o.value ? (c = t.value) == null ? void 0 : c.getSectionByTitle(o.value) : (i = t.value) == null ? void 0 : i.leadSection;
  }), r = Fo(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.isTitleSelected;
    }
  ), l = Fo(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.selectedContentTranslationUnit;
    }
  ), u = Fo(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.getProposedTranslationByMtProvider(
        s.value
      );
    }
  ), d = Fo(
    () => a.value.isLeadSection ? a.value.title : n.value
  );
  return {
    sourceSection: a,
    isSectionTitleSelected: r,
    selectedContentTranslationUnit: l,
    currentProposedTranslation: u,
    targetPageTitleForPublishing: d
  };
}, No = window.Vue.computed, bu = () => {
  const { currentTargetPage: e } = dt(), { sectionSuggestion: t } = Fe(), { sectionURLParameter: n } = D(), s = No(
    () => t.value.missingSections[n.value] || t.value.presentSections[n.value] || ""
  ), o = No(
    () => {
      var d;
      return (((d = a.value) == null ? void 0 : d.title) || "").replace(/ /g, "_");
    }
  ), a = No(
    () => {
      var d;
      return (d = e.value) == null ? void 0 : d.getSectionByTitle(s.value);
    }
  ), { sourceSection: r } = ne(), l = No(() => {
    var d;
    return (d = r.value) == null ? void 0 : d.html;
  }), u = No(() => {
    var d;
    return (d = a.value) == null ? void 0 : d.html;
  });
  return {
    activeSectionTargetTitle: s,
    sourceSectionContent: l,
    targetSectionAnchor: o,
    targetSectionContent: u
  };
};
const vi = window.Vue.createVNode, x3 = window.Vue.createElementVNode, Pn = window.Vue.unref, _i = window.Vue.withCtx, Ml = window.Vue.openBlock, Ul = window.Vue.createBlock;
window.Vue.createCommentVNode;
const C3 = window.Vue.normalizeClass, b3 = ["lang", "dir", "innerHTML"], kp = window.Vue.ref, Si = window.Vue.computed, k3 = window.Vue.onMounted, $3 = {
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
    const n = e, s = t, o = kp(!1), { sectionSuggestion: a } = Fe(), { sectionURLParameter: r } = D(), l = Si(
      () => (c.value || "").replace(/ /g, "_")
    ), u = (h) => s("update:contentTypeSelection", h), { activeSectionTargetTitle: d, targetSectionAnchor: i } = bu(), c = Si(
      () => {
        var h;
        return (((h = a.value) == null ? void 0 : h.sourceSections) || []).find(
          (f) => f === r.value
        );
      }
    ), g = Si(() => {
      switch (n.contentTypeSelection) {
        case "source_section":
          return {
            title: c.value,
            path: `${K.getPageUrl(
              a.value.sourceLanguage,
              a.value.sourceTitle
            )}#${l.value}`,
            lang: a.value.sourceLanguage,
            dir: j.getDir(a.value.sourceLanguage)
          };
        case "target_article":
          return {
            title: a.value.targetTitle,
            path: p.value,
            lang: a.value.targetLanguage,
            dir: j.getDir(a.value.targetLanguage)
          };
        default:
          return {
            title: d.value,
            path: `${p.value}#${i.value}`
          };
      }
    }), p = Si(
      () => K.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), m = kp(null);
    return k3(() => {
      new IntersectionObserver(
        ([f]) => {
          o.value = f.intersectionRect.height < f.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(m.value.$el);
    }), (h, f) => (Ml(), Ul(Pn(N), {
      ref_key: "contentHeader",
      ref: m,
      class: C3(["sx-content-comparator__content-header ma-0 pt-1", { sticky: o.value }]),
      direction: "column",
      align: "stretch",
      reverse: o.value
    }, {
      default: _i(() => [
        vi(S3, {
          selection: e.contentTypeSelection,
          "onUpdate:selection": u
        }, null, 8, ["selection"]),
        vi(Pn(N), {
          justify: "between",
          class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
        }, {
          default: _i(() => [
            vi(Pn(k), null, {
              default: _i(() => [
                x3("h3", {
                  lang: g.value.lang,
                  dir: g.value.dir,
                  class: "ma-0 pa-0",
                  innerHTML: g.value.title
                }, null, 8, b3)
              ]),
              _: 1
            }),
            vi(Pn(k), { shrink: "" }, {
              default: _i(() => [
                o.value ? (Ml(), Ul(Pn(Ge), {
                  key: 0,
                  icon: Pn(Ki),
                  progressive: "",
                  label: h.$i18n(
                    "cx-sx-content-comparator-content-header-translate-button-label"
                  ),
                  onClick: f[0] || (f[0] = (w) => h.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label"])) : (Ml(), Ul(Pn(Ge), {
                  key: 1,
                  class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                  icon: Pn(ch),
                  type: "icon",
                  href: g.value.path,
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
}, yi = window.Vue.unref, $p = window.Vue.createVNode, V3 = window.Vue.openBlock, E3 = window.Vue.createElementBlock, L3 = { class: "sx-content-comparator__header-navigation flex items-center" }, T3 = window.Vue.computed, A3 = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = D(), s = T3(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: o } = ur(), a = () => {
      const l = (s.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[l];
      o(u);
    }, r = () => {
      const l = (s.value + 1) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[l];
      o(u);
    };
    return (l, u) => (V3(), E3("div", L3, [
      $p(yi(Ge), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: yi(T0),
        onClick: a
      }, null, 8, ["icon"]),
      $p(yi(Ge), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: yi(L0),
        onClick: r
      }, null, 8, ["icon"])
    ]));
  }
};
const Vp = window.Vue.toDisplayString, be = window.Vue.unref, D3 = window.Vue.resolveDirective, Il = window.Vue.withDirectives, Ls = window.Vue.openBlock, xi = window.Vue.createElementBlock, P3 = window.Vue.createCommentVNode, B3 = window.Vue.createTextVNode, Ep = window.Vue.createElementVNode, F3 = window.Vue.normalizeClass, Rl = window.Vue.withCtx, zl = window.Vue.createVNode, Lp = window.Vue.createBlock, N3 = { class: "sx-content-comparator-header__mapped-section" }, M3 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, U3 = { key: 0 }, I3 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, R3 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, z3 = window.Vue.computed, O3 = {
  __name: "SXContentComparatorHeaderMappedSection",
  setup(e) {
    const { targetLanguageURLParameter: t } = D(), { activeSectionTargetTitle: n } = bu(), s = we(), { target: o, PUBLISHING_TARGETS: a, setTarget: r } = Rt(), l = z3(
      () => s.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        j.getAutonym(t.value)
      )
    );
    return (u, d) => {
      const i = D3("i18n");
      return Ls(), xi("div", N3, [
        zl(be(N), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: Rl(() => [
            zl(be(k), { grow: "" }, {
              default: Rl(() => [
                Ep("h6", M3, [
                  B3(Vp(l.value) + " ", 1),
                  be(o) === be(a).NEW_SECTION ? Il((Ls(), xi("span", U3, null, 512)), [
                    [i, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : P3("", !0)
                ]),
                Ep("h6", {
                  class: F3(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": be(o) === be(a).NEW_SECTION
                  }])
                }, Vp(be(n)), 3)
              ]),
              _: 1
            }),
            zl(be(k), { shrink: "" }, {
              default: Rl(() => [
                be(o) === be(a).EXPAND ? (Ls(), Lp(be(Ge), {
                  key: 0,
                  class: "sx-content-comparator-header__mapped-section__discard-button pa-0",
                  icon: be(lh),
                  type: "icon",
                  onClick: d[0] || (d[0] = (c) => be(r)(be(a).NEW_SECTION))
                }, null, 8, ["icon"])) : (Ls(), Lp(be(Ge), {
                  key: 1,
                  class: "sx-content-comparator-header__mapped-section__undo-button pa-0",
                  icon: be(U0),
                  type: "icon",
                  onClick: d[1] || (d[1] = (c) => be(r)(be(a).EXPAND))
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        be(o) === be(a).EXPAND ? Il((Ls(), xi("p", I3, null, 512)), [
          [i, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ]) : Il((Ls(), xi("p", R3, null, 512)), [
          [i, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ])
      ]);
    };
  }
};
const Be = window.Vue.unref, Ts = window.Vue.createVNode, j3 = window.Vue.toDisplayString, _n = window.Vue.createElementVNode, Ol = window.Vue.withCtx, H3 = window.Vue.resolveDirective, Tp = window.Vue.withDirectives, jl = window.Vue.openBlock, Ap = window.Vue.createBlock, Dp = window.Vue.createCommentVNode, q3 = window.Vue.createElementBlock, G3 = { class: "sx-content-comparator__header pa-4" }, X3 = { class: "row my-1 py-2 mx-0 gap-6" }, W3 = { class: "sx-content-comparator-header__titles-nav flex grow justify-between" }, K3 = { class: "sx-content-comparator-header__titles shrink" }, Y3 = ["lang", "dir"], Q3 = ["lang", "dir", "innerHTML"], J3 = { class: "py-2 mb-1" }, Z3 = /* @__PURE__ */ _n("br", null, null, -1), Ci = window.Vue.computed, e5 = {
  __name: "SXContentComparatorHeader",
  emits: ["close", "translation-button-clicked"],
  setup(e) {
    const { sectionURLParameter: t } = D(), { sourceSection: n } = ne(), { sectionSuggestion: s, isCurrentSectionPresent: o } = Fe(), a = Ci(
      () => {
        var d;
        return (d = s.value) == null ? void 0 : d.missingSections.hasOwnProperty(t.value);
      }
    ), r = Ci(() => {
      var d;
      return (d = n.value) == null ? void 0 : d.html;
    }), l = Ci(() => [
      ...Object.keys(s.value.missingSections),
      ...Object.keys(s.value.presentSections)
    ]), u = Ci(
      () => {
        var d;
        return (((d = s.value) == null ? void 0 : d.sourceSections) || []).find(
          (i) => i === t.value
        );
      }
    );
    return (d, i) => {
      const c = H3("i18n");
      return jl(), q3("div", G3, [
        Ts(Be(Ge), {
          class: "py-2 pa-0",
          icon: Be(A0),
          label: d.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: i[0] || (i[0] = (g) => d.$emit("close"))
        }, null, 8, ["icon", "label"]),
        _n("div", X3, [
          _n("div", W3, [
            _n("div", K3, [
              _n("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: Be(s).sourceLanguage,
                dir: Be(j.getDir)(Be(s).sourceLanguage)
              }, j3(Be(s).sourceTitle), 9, Y3),
              _n("h2", {
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: Be(s).sourceLanguage,
                dir: Be(j.getDir)(Be(s).sourceLanguage),
                innerHTML: u.value
              }, null, 8, Q3)
            ]),
            Ts(A3, { "section-source-titles": l.value }, null, 8, ["section-source-titles"])
          ]),
          _n("div", J3, [
            Ts(Be(Ge), {
              class: "sx-content-comparator-header__translation-button",
              icon: Be(Ki),
              progressive: "",
              label: d.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !r.value,
              onClick: i[1] || (i[1] = (g) => d.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ])
        ]),
        a.value ? (jl(), Ap(Be(N), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: Ol(() => [
            Ts(Be(k), {
              shrink: "",
              class: "pe-2"
            }, {
              default: Ol(() => [
                Ts(Be(Je), { icon: Be(N0) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Ts(Be(k), { class: "ma-0" }, {
              default: Ol(() => [
                Tp(_n("strong", null, null, 512), [
                  [c, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                Z3,
                Tp(_n("span", null, null, 512), [
                  [c, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Dp("", !0),
        Be(o) ? (jl(), Ap(O3, { key: 1 })) : Dp("", !0)
      ]);
    };
  }
};
const Pp = window.Vue.toDisplayString, t5 = window.Vue.createElementVNode, Bp = window.Vue.openBlock, Fp = window.Vue.createElementBlock, n5 = window.Vue.createCommentVNode, s5 = { class: "sx-content-comparator__new-section-placeholder mt-4 py-4 px-7" }, o5 = ["textContent"], a5 = ["textContent"], Uf = {
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
    return (t, n) => (Bp(), Fp("section", s5, [
      t5("h5", {
        textContent: Pp(e.placeholderTitle)
      }, null, 8, o5),
      e.placeholderSubtitle ? (Bp(), Fp("p", {
        key: 0,
        textContent: Pp(e.placeholderSubtitle)
      }, null, 8, a5)) : n5("", !0)
    ]));
  }
}, i5 = window.Vue.computed, r5 = window.Vue.createApp, l5 = window.Vuex.useStore, c5 = () => {
  const e = l5(), { sectionSuggestion: t } = Fe(), { currentTargetPage: n } = dt(), s = we(), o = () => r5(
    Uf,
    {
      placeholderTitle: s.i18n(
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
  return i5(() => {
    var i;
    const l = document.createElement("div");
    l.innerHTML = (i = n.value) == null ? void 0 : i.content, r(l);
    const u = o(), d = a(
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
const Hl = window.Vue.createVNode, ot = window.Vue.unref, As = window.Vue.openBlock, Np = window.Vue.createBlock, Mp = window.Vue.createCommentVNode, bi = window.Vue.createElementVNode, ql = window.Vue.Fragment, ki = window.Vue.createElementBlock, u5 = { class: "sx-content-comparator col-12 col-tablet-9 col-desktop-7 mx-auto" }, d5 = { class: "sx-content-comparator__source-content" }, g5 = ["lang", "dir", "innerHTML"], p5 = ["lang", "dir", "innerHTML"], m5 = ["innerHTML"], h5 = window.Vue.ref, f5 = window.Vue.computed, Up = window.Vue.watch, w5 = {
  __name: "SXContentComparator",
  setup(e) {
    const { resetPublishTarget: t } = Rt(), n = Ze(), s = h5("source_section"), { logDashboardTranslationStartEvent: o } = cr(), a = Zs(), r = () => n.push({ name: "sx-section-selector" }), l = () => {
      o(), a();
    }, {
      sourceLanguageURLParameter: u,
      targetLanguageURLParameter: d
    } = D(), { sourceSectionContent: i, targetSectionContent: c } = bu(), g = c5(), { sectionSuggestion: p, isCurrentSectionPresent: m } = Fe(), h = f5(() => p.value.targetTitle), f = Bf();
    return Up(
      h,
      () => f(
        d.value,
        u.value,
        h.value
      ),
      { immediate: !0 }
    ), Up(m, t, { immediate: !0 }), (w, v) => (As(), ki("section", u5, [
      Hl(e5, {
        onTranslationButtonClicked: l,
        onClose: r
      }),
      Hl($3, {
        "content-type-selection": s.value,
        "onUpdate:contentTypeSelection": v[0] || (v[0] = (y) => s.value = y),
        onTranslationButtonClicked: l
      }, null, 8, ["content-type-selection"]),
      bi("section", d5, [
        s.value === "source_section" ? (As(), ki(ql, { key: 0 }, [
          ot(i) ? Mp("", !0) : (As(), Np(ot(ct), { key: 0 })),
          bi("section", {
            lang: ot(u),
            dir: ot(j.getDir)(ot(u)),
            class: "pt-2 px-4",
            innerHTML: ot(i)
          }, null, 8, g5)
        ], 64)) : s.value === "target_article" ? (As(), ki(ql, { key: 1 }, [
          ot(g) ? Mp("", !0) : (As(), Np(ot(ct), { key: 0 })),
          bi("article", {
            lang: ot(d),
            dir: ot(j.getDir)(ot(d)),
            class: "px-4",
            innerHTML: ot(g)
          }, null, 8, p5)
        ], 64)) : (As(), ki(ql, { key: 2 }, [
          bi("section", {
            class: "pa-4",
            innerHTML: ot(c)
          }, null, 8, m5),
          Hl(Uf, {
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
}, v5 = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: w5
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, _5 = window.Vue.resolveComponent, S5 = window.Vue.createVNode, y5 = window.Vue.normalizeClass, x5 = window.Vue.openBlock, C5 = window.Vue.createElementBlock;
function b5(e, t, n, s, o, a) {
  const r = _5("sx-content-comparator");
  return x5(), C5("main", {
    class: y5(["sx-content-comparator-view", a.classes])
  }, [
    S5(r)
  ], 2);
}
const k5 = /* @__PURE__ */ de(v5, [["render", b5]]);
const $5 = window.Vue.resolveDirective, Mo = window.Vue.createElementVNode, Ip = window.Vue.withDirectives, $i = window.Vue.unref, Gl = window.Vue.createVNode, Rp = window.Vue.toDisplayString, zp = window.Vue.createTextVNode, Uo = window.Vue.withCtx, V5 = window.Vue.openBlock, E5 = window.Vue.createBlock, L5 = { class: "mw-ui-dialog__header px-4 py-3" }, T5 = { class: "mw-ui-dialog__header-title" }, A5 = { class: "pa-4" }, D5 = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, Op = window.Codex.CdxButton, P5 = {
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
    const n = t, s = () => n("update:modelValue", !1), o = () => {
      n("continue-translation"), s();
    }, a = () => {
      n("discard-translation"), s();
    };
    return (r, l) => {
      const u = $5("i18n");
      return V5(), E5($i(Ct), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: Uo(() => [
          Mo("div", L5, [
            Ip(Mo("span", T5, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: Uo(() => [
          Mo("div", D5, [
            Gl($i(Op), {
              weight: "quiet",
              onClick: o
            }, {
              default: Uo(() => [
                zp(Rp(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            Gl($i(Op), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: Uo(() => [
                zp(Rp(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: Uo(() => [
          Gl($i(Wi)),
          Mo("div", A5, [
            Ip(Mo("span", null, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, B5 = (e, t, n) => {
  const s = document.createElement("div");
  s.innerHTML = e;
  const o = Array.from(s.children).find(
    (a) => is(a)
  );
  return o && hh(o) ? xt.parseTemplateWikitext(
    ph(o),
    n,
    t
  ) : Promise.resolve(null);
}, If = (e, t, n) => {
  let s = document.createElement("div");
  s.innerHTML = e, s.firstElementChild.getAttribute("rel") === "cx:Section" && (s = s.firstElementChild);
  const o = Array.from(s.children).find(
    (a) => is(a)
  );
  return o ? xt.parseTemplateWikitext(
    ph(o),
    n,
    t
  ) : Promise.resolve(null);
}, F5 = window.Vuex.useStore, ku = () => {
  const e = F5(), { sourceSection: t } = ne(), { getCurrentTitleByLanguage: n } = bn(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: o
  } = D(), a = Nf(), r = (i, c, g) => {
    if (i === 0) {
      t.value.proposedTitleTranslations[c] = g;
      return;
    }
    const p = t.value.getContentTranslationUnitById(i);
    p instanceof lt ? p.blockTemplateProposedTranslations[c] = g : p instanceof zn && p.addProposedTranslation(c, g);
  }, l = (i, c) => C(void 0, null, function* () {
    if (!e.getters["mediawiki/isValidProviderForTranslation"](s.value, o.value, i))
      return "";
    try {
      const p = yield a();
      return yield xt.fetchSegmentTranslation(
        s.value,
        o.value,
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
    p instanceof lt && (p.setBlockTemplateAdaptationInfoByHtml(
      c,
      m
    ), m = (yield B5(
      m,
      n(o.value, s.value),
      o.value
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
        s.value,
        o.value
      ), { selectedTranslationUnitId: c } = t.value;
      i.forEach(
        (g) => u(c, g)
      );
    }
  };
}, N5 = window.Vuex.useStore, M5 = () => {
  const { sourceSection: e } = ne(), t = N5(), { translateTranslationUnitById: n } = ku();
  return (s) => {
    t.commit("application/setCurrentMTProvider", s);
    const o = e.value.selectedTranslationUnitId;
    n(o, s);
  };
};
function U5(e) {
  const t = document.createElement("div");
  return t.innerHTML = e, t.querySelectorAll("a").forEach((s) => {
    s.setAttribute("target", "_blank");
  }), t.innerHTML;
}
const I5 = window.Vue.resolveDirective, rt = window.Vue.createElementVNode, Vi = window.Vue.withDirectives, Oe = window.Vue.unref, Xl = window.Vue.createVNode, gn = window.Vue.withCtx, R5 = window.Vue.renderList, z5 = window.Vue.Fragment, Ei = window.Vue.openBlock, O5 = window.Vue.createElementBlock, j5 = window.Vue.toDisplayString, Wl = window.Vue.createBlock, jp = window.Vue.createCommentVNode, H5 = { class: "mw-ui-dialog__header pa-4" }, q5 = { class: "row ma-0 py-2" }, G5 = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, X5 = { class: "mb-0" }, W5 = { class: "col shrink justify-center" }, K5 = { class: "pb-2 mb-0" }, Y5 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, Q5 = ["dir", "lang", "innerHTML"], J5 = ["textContent"], Z5 = ["innerHTML"], eL = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, tL = /* @__PURE__ */ rt("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), nL = ["innerHTML"], Kl = window.Vue.computed, sL = window.Vuex.useStore, oL = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, s = re.EMPTY_TEXT_PROVIDER_KEY, o = re.ORIGINAL_TEXT_PROVIDER_KEY, a = sL(), {
      sourceSection: r,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: u
    } = ne(), {
      sourceLanguageURLParameter: d,
      targetLanguageURLParameter: i
    } = D(), c = Kl(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        d.value,
        i.value
      )
    ), g = Kl(() => {
      const S = [o, s];
      return c.value.filter(
        (b) => !S.includes(b)
      );
    }), p = Kl(
      () => l.value ? r.value.proposedTitleTranslations : u.value.proposedTranslations
    ), m = M5(), h = (S) => {
      m(S), w();
    }, f = re.getMTProviderLabel, w = () => n("update:active", !1), v = we(), y = U5(
      v.i18n("cx-tools-mt-noservices")
    );
    return (S, b) => {
      const E = I5("i18n");
      return e.active ? (Ei(), Wl(Oe(Ct), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: gn(() => [
          rt("div", H5, [
            rt("div", q5, [
              rt("div", G5, [
                Vi(rt("h4", X5, null, 512), [
                  [E, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              rt("div", W5, [
                Xl(Oe(Ge), {
                  type: "icon",
                  icon: Oe(Yi),
                  class: "pa-0",
                  onClick: w
                }, null, 8, ["icon"])
              ])
            ]),
            Vi(rt("h6", K5, null, 512), [
              [E, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: gn(() => [
          Xl(Oe(Qe), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: b[0] || (b[0] = (x) => h(Oe(o)))
          }, {
            header: gn(() => [
              Vi(rt("h5", Y5, null, 512), [
                [E, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: gn(() => [
              rt("p", {
                dir: Oe(j.getDir)(Oe(d)),
                lang: Oe(d),
                innerHTML: p.value[Oe(o)]
              }, null, 8, Q5)
            ]),
            _: 1
          }),
          (Ei(!0), O5(z5, null, R5(g.value, (x) => (Ei(), Wl(Oe(Qe), {
            key: x,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (I) => h(x)
          }, {
            header: gn(() => [
              rt("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: j5(Oe(f)(x))
              }, null, 8, J5)
            ]),
            default: gn(() => [
              rt("p", {
                innerHTML: p.value[x]
              }, null, 8, Z5)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          Xl(Oe(Qe), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: b[1] || (b[1] = (x) => h(Oe(s)))
          }, {
            header: gn(() => [
              Vi(rt("h5", eL, null, 512), [
                [E, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: gn(() => [
              tL
            ]),
            _: 1
          }),
          g.value.length ? jp("", !0) : (Ei(), Wl(Oe(Qe), {
            key: 0,
            class: "sx-sentence-selector__mt-disabled-info-card mx-4 pa-5"
          }, {
            header: gn(() => [
              rt("h5", {
                class: "sx-sentence-selector__translation-info-card-title",
                innerHTML: Oe(y)
              }, null, 8, nL)
            ]),
            _: 1
          }))
        ]),
        _: 1
      })) : jp("", !0);
    };
  }
}, aL = window.Vuex.useStore, eo = () => {
  const { sourceSection: e } = ne(), t = aL(), { translateTranslationUnitById: n } = ku(), { currentMTProvider: s } = Le(t), o = (l) => C(void 0, null, function* () {
    e.value.selectTranslationUnitById(l), yield n(l, s.value);
    const { followingTranslationUnit: u } = e.value;
    u && (yield n(
      u.id,
      s
    ));
  });
  return {
    selectNextTranslationUnit: () => {
      const { followingTranslationUnit: l } = e.value;
      return l ? o(l.id) : Promise.resolve();
    },
    selectPreviousTranslationUnit: () => {
      const { selectedContentTranslationUnitIndex: l, contentTranslationUnits: u } = e.value, d = l - 1;
      let i = 0;
      return d > -1 && (i = u[d].id), o(i);
    },
    selectTranslationUnitById: o
  };
};
const Hp = window.Vue.toDisplayString, Yl = window.Vue.createElementVNode, Ql = window.Vue.unref, iL = window.Vue.createVNode, rL = window.Vue.normalizeClass, lL = window.Vue.withCtx, cL = window.Vue.openBlock, uL = window.Vue.createBlock, dL = ["href"], gL = ["textContent"], pL = ["textContent"], Ds = window.Vue.computed, qp = "sx-sentence-selector__section-title", mL = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = ne(), { currentSourcePage: s } = dt(), { sourceLanguageURLParameter: o } = D(), a = Ds(() => {
      var p;
      return (p = s.value) == null ? void 0 : p.title;
    }), r = Ds(
      () => {
        var p;
        return ((p = t.value) == null ? void 0 : p.title) || a.value;
      }
    ), l = Ds(
      () => K.getPageUrl(o.value, a.value)
    ), u = Ds(
      () => {
        var p;
        return !!((p = t.value) != null && p.translatedTitle);
      }
    ), d = Ds(
      () => u.value ? "translated" : "selected"
    ), i = Ds(() => {
      const p = [qp];
      return n.value && p.push(`${qp}--${d.value}`), p;
    }), { selectTranslationUnitById: c } = eo(), g = () => c(0);
    return (p, m) => (cL(), uL(Ql(k), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: lL(() => [
        Yl("a", {
          href: l.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          Yl("strong", {
            textContent: Hp(a.value)
          }, null, 8, gL),
          iL(Ql(Je), {
            icon: Ql(ch),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, dL),
        Yl("h2", {
          class: rL(["pa-0 ma-0", i.value]),
          onClick: g,
          textContent: Hp(r.value)
        }, null, 10, pL)
      ]),
      _: 1
    }));
  }
};
const Xt = window.Vue.unref, Io = window.Vue.createVNode, Li = window.Vue.withCtx, Gp = window.Vue.toDisplayString, Xp = window.Vue.createTextVNode, hL = window.Vue.openBlock, fL = window.Vue.createBlock, wL = window.Vue.computed, Jl = window.Codex.CdxButton, Wp = window.Codex.CdxIcon, Rf = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: s } = ne(), o = wL(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, r) => (hL(), fL(Xt(N), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: Li(() => [
        Io(Xt(Jl), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: Xt(n),
          onClick: r[0] || (r[0] = (l) => a.$emit("select-previous-segment"))
        }, {
          default: Li(() => [
            Io(Xt(Wp), {
              class: "me-1",
              icon: Xt(pu)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        Io(Xt(Jl), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !Xt(s),
          onClick: r[1] || (r[1] = (l) => a.$emit("apply-translation"))
        }, {
          default: Li(() => [
            Xp(Gp(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        Io(Xt(Jl), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: o.value,
          onClick: r[2] || (r[2] = (l) => a.$emit("skip-translation"))
        }, {
          default: Li(() => [
            Xp(Gp(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            Io(Xt(Wp), {
              class: "ms-1",
              size: "small",
              icon: Xt(_a)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const ts = window.Vue.unref, vL = window.Vue.toDisplayString, Ro = window.Vue.createVNode, Ti = window.Vue.withCtx, _L = window.Vue.openBlock, SL = window.Vue.createBlock, Zl = window.Vue.computed, yL = window.Vuex.useStore, xL = window.Codex.CdxButton, CL = window.Codex.CdxIcon, bL = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = yL(), n = Zl(() => t.state.application.currentMTProvider), s = we(), o = Zl(() => ({
      [re.ORIGINAL_TEXT_PROVIDER_KEY]: s.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [re.EMPTY_TEXT_PROVIDER_KEY]: s.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = Zl(
      () => o.value[n.value] || s.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        re.getMTProviderLabel(n.value)
      )
    );
    return (r, l) => (_L(), SL(ts(k), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: Ti(() => [
        Ro(ts(N), { class: "ma-0 ps-5 pb-4" }, {
          default: Ti(() => [
            Ro(ts(k), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: vL(a.value)
            }, null, 8, ["textContent"]),
            Ro(ts(k), {
              shrink: "",
              class: "pe-5"
            }, {
              default: Ti(() => [
                Ro(ts(xL), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: l[0] || (l[0] = (u) => r.$emit("configure-options"))
                }, {
                  default: Ti(() => [
                    Ro(ts(CL), {
                      class: "pa-0",
                      icon: ts(gu)
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
const Dt = window.Vue.unref, Bn = window.Vue.createVNode, kL = window.Vue.resolveDirective, Kp = window.Vue.createElementVNode, $L = window.Vue.withDirectives, Yp = window.Vue.toDisplayString, Qp = window.Vue.createTextVNode, zo = window.Vue.withCtx, VL = window.Vue.openBlock, EL = window.Vue.createElementBlock, LL = { class: "mt-retry-body pb-5" }, TL = { class: "retry-body__message" }, Jp = window.Codex.CdxButton, ec = window.Codex.CdxIcon, AL = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const s = kL("i18n");
      return VL(), EL("div", LL, [
        Kp("div", TL, [
          Bn(Dt(ec), {
            class: "me-2",
            icon: Dt(XS)
          }, null, 8, ["icon"]),
          $L(Kp("span", null, null, 512), [
            [s, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        Bn(Dt(N), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: zo(() => [
            Bn(Dt(k), { cols: "6" }, {
              default: zo(() => [
                Bn(Dt(Jp), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (o) => t.$emit("retry-translation"))
                }, {
                  default: zo(() => [
                    Bn(Dt(ec), {
                      class: "me-1",
                      icon: Dt(zh)
                    }, null, 8, ["icon"]),
                    Qp(" " + Yp(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Bn(Dt(k), { cols: "6" }, {
              default: zo(() => [
                Bn(Dt(Jp), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (o) => t.$emit("configure-options"))
                }, {
                  default: zo(() => [
                    Bn(Dt(ec), {
                      class: "me-1",
                      icon: Dt(ay)
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
const Ps = window.Vue.createVNode, at = window.Vue.unref, Oo = window.Vue.openBlock, DL = window.Vue.createElementBlock, PL = window.Vue.createCommentVNode, Ai = window.Vue.createBlock, BL = window.Vue.normalizeClass, FL = window.Vue.normalizeStyle, jo = window.Vue.withCtx, NL = window.Vue.toDisplayString, ML = window.Vue.createTextVNode, UL = window.Vue.normalizeProps, IL = window.Vue.guardReactiveProps, RL = ["lang", "dir", "innerHTML"], tc = window.Vue.ref, zL = window.Vue.onMounted, OL = window.Vue.onBeforeUnmount, nc = window.Vue.computed, jL = window.Vue.nextTick, HL = window.Vuex.useStore, qL = window.Codex.CdxButton, GL = window.Codex.CdxIcon, XL = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = tc(0), n = tc(null), s = tc(null), o = HL(), { currentMTProvider: a } = Le(o), { targetLanguageURLParameter: r } = D(), { sourceSection: l, currentProposedTranslation: u } = ne(), d = nc(
      () => {
        var m, h;
        return (h = o.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (m = l.value) == null ? void 0 : m.selectedTranslationUnitId
        );
      }
    ), i = nc(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), c = nc(
      () => !!u.value || a.value === re.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + s.value.$el.clientHeight;
    };
    zL(() => C(this, null, function* () {
      yield jL(), g(), p.observe(n.value.$el), p.observe(s.value.$el);
    })), OL(() => {
      p.unobserve(n.value.$el), p.unobserve(s.value.$el);
    });
    const p = new ResizeObserver(() => g());
    return (m, h) => (Oo(), Ai(at(Qe), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: jo(() => [
        Ps(at(N), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: jo(() => [
            Ps(bL, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => m.$emit("configure-options"))
            }, null, 512),
            Ps(at(k), {
              class: BL(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !c.value && d.value
              }]),
              style: FL(c.value ? i.value : null)
            }, {
              default: jo(() => [
                c.value ? (Oo(), DL("section", {
                  key: 0,
                  lang: at(r),
                  dir: at(j.getDir)(at(r)),
                  innerHTML: at(u)
                }, null, 8, RL)) : d.value ? (Oo(), Ai(at(ct), { key: 1 })) : (Oo(), Ai(AL, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (f) => m.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (f) => m.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            Ps(at(k), {
              ref_key: "footer",
              ref: s,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: jo(() => [
                c.value || d.value ? (Oo(), Ai(at(qL), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !c.value,
                  onClick: h[3] || (h[3] = (f) => m.$emit("edit-translation", at(u)))
                }, {
                  default: jo(() => [
                    Ps(at(GL), {
                      class: "me-1",
                      icon: at(du)
                    }, null, 8, ["icon"]),
                    ML(" " + NL(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : PL("", !0),
                Ps(Rf, UL(IL(m.$attrs)), null, 16)
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
  return Array.from(n.getElementsByClassName("cx-segment")).forEach((o) => {
    const a = e.getSentenceById(o.dataset.segmentid);
    o.classList.add(t, "py-1", "me-1");
    const r = ["untranslated", "translated", "selected"].map(
      (u) => `${t}--${u}`
    );
    o.classList.remove(...r), a.selected && o.classList.add(`${t}--selected`);
    const l = a.isTranslated ? "translated" : "untranslated";
    o.classList.add(`${t}--${l}`), o.innerHTML = a.content;
  }), n.innerHTML;
});
const YL = window.Vue.unref, QL = window.Vue.normalizeClass, JL = window.Vue.openBlock, ZL = window.Vue.createElementBlock, eT = ["innerHTML"], tT = window.Vue.onMounted, nT = window.Vue.ref, sT = window.Vue.computed, oT = {
  __name: "SubSection",
  props: {
    subSection: {
      type: lt,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = nT(null), a = KL(n.subSection);
    tT(() => {
      o.value.addEventListener("click", (d) => {
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
    const { selectTranslationUnitById: r } = eo(), l = (d) => {
      if (d.selected) {
        s("bounce-translation");
        return;
      }
      r(d.id);
    }, u = sT(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (d, i) => (JL(), ZL("div", {
      ref_key: "subSectionRoot",
      ref: o,
      class: QL(["sx-sentence-selector__subsection", u.value]),
      innerHTML: YL(a)
    }, null, 10, eT));
  }
};
const Zp = window.Vue.unref, em = window.Vue.createVNode, tm = window.Vue.normalizeStyle, aT = window.Vue.openBlock, iT = window.Vue.createElementBlock, nm = window.Vue.computed, zf = {
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
    const t = e, n = nm(() => ({ "--size": t.size })), s = nm(
      () => !t.isTemplateAdapted || t.percentage === 0 ? I0 : Nc
    );
    return (o, a) => (aT(), iT("div", {
      class: "block-template-status-indicator",
      style: tm(n.value)
    }, [
      em(Zp(nv), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      em(Zp(Je), {
        icon: s.value,
        size: e.size / 2,
        style: tm({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
};
const Fn = window.Vue.unref, Di = window.Vue.createVNode, sc = window.Vue.withCtx, rT = window.Vue.openBlock, lT = window.Vue.createBlock, cT = window.Vue.computed, sm = window.Codex.CdxButton, om = window.Codex.CdxIcon, Of = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "select-next-segment"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = ne(), s = cT(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (o, a) => (rT(), lT(Fn(N), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: sc(() => [
        Di(Fn(sm), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: Fn(n),
          "aria-label": o.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => o.$emit("select-previous-segment"))
        }, {
          default: sc(() => [
            Di(Fn(om), { icon: Fn(pu) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        Di(Fn(sm), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: s.value,
          "aria-label": o.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => o.$emit("select-next-segment"))
        }, {
          default: sc(() => [
            Di(Fn(om), { icon: Fn(_a) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
}, Ho = window.Vue.openBlock, Pi = window.Vue.createBlock;
window.Vue.createCommentVNode;
const pn = window.Vue.unref, Bs = window.Vue.withCtx, qo = window.Vue.createVNode, oc = window.Vue.toDisplayString, ac = window.Vue.createElementVNode, uT = window.Vue.renderList, dT = window.Vue.Fragment, gT = window.Vue.createElementBlock, pT = { class: "pa-4" }, mT = ["textContent"], hT = ["textContent"], fT = window.Vuex.useStore, Bi = window.Vue.computed, wT = {
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
    const t = e, { targetLanguageAutonym: n } = Le(fT()), s = Bi(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), o = we(), a = Bi(() => {
      let u;
      return t.targetTemplateExists ? t.isTemplateAdapted ? s.value < 100 ? u = "cx-sx-block-template-mapping-status-title-partially-template" : u = "cx-sx-block-template-mapping-status-title-fully-template" : u = "cx-sx-block-template-mapping-status-title-unadapted-template" : u = "cx-sx-block-template-mapping-status-title-no-target-template", o.i18n(u);
    }), r = Bi(() => {
      let u;
      return !t.targetTemplateExists || !t.isTemplateAdapted ? u = "cx-sx-block-template-mapping-status-explanation-no-mapping" : s.value < 100 ? u = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : u = "cx-sx-block-template-mapping-status-explanation-full-mapping", o.i18n(u);
    }), l = Bi(() => {
      let u = [];
      if (!t.targetTemplateExists)
        u.push({
          text: o.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            n.value
          ),
          icon: z0,
          color: St.gray500
        });
      else if (!t.isTemplateAdapted)
        u.push({
          text: o.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            t.sourceParamsCount
          ),
          icon: Yi,
          color: St.gray500
        });
      else if (s.value < 100)
        u.push({
          text: o.i18n(
            "cx-sx-block-template-mapped-params-text",
            t.targetParamsCount,
            t.sourceParamsCount
          ),
          icon: Nc,
          color: St.blue600
        });
      else {
        let d;
        t.sourceParamsCount ? d = o.i18n(
          "cx-sx-block-template-mapped-params-text",
          t.targetParamsCount,
          t.sourceParamsCount
        ) : d = o.i18n("cx-sx-block-template-no-source-params-text"), u.push({
          text: d,
          icon: Nc,
          color: St.blue600
        });
      }
      return t.mandatoryMissingParamsCount ? u.push({
        text: o.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          t.mandatoryMissingParamsCount,
          n.value
        ),
        icon: Ki,
        color: St.gray500
      }) : t.targetTemplateExists && t.isTemplateAdapted && t.optionalMissingParamsCount && u.push({
        text: o.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          t.optionalMissingParamsCount,
          n.value
        ),
        icon: b0,
        color: St.gray500
      }), u;
    });
    return (u, d) => (Ho(), Pi(pn(Ct), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: u.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: d[0] || (d[0] = (i) => u.$emit("update:active", i))
    }, {
      header: Bs(() => [
        qo(pn(N), {
          justify: "center",
          class: "mt-4"
        }, {
          default: Bs(() => [
            qo(pn(k), { shrink: "" }, {
              default: Bs(() => [
                e.targetTemplateExists ? (Ho(), Pi(zf, {
                  key: 0,
                  percentage: s.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (Ho(), Pi(pn(Je), {
                  key: 1,
                  icon: pn(k0)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: Bs(() => [
        ac("div", pT, [
          ac("h3", {
            textContent: oc(a.value)
          }, null, 8, mT),
          ac("p", {
            class: "mt-6 text-small",
            textContent: oc(r.value)
          }, null, 8, hT),
          (Ho(!0), gT(dT, null, uT(l.value, (i, c) => (Ho(), Pi(pn(N), {
            key: c,
            align: "start",
            class: "mt-4"
          }, {
            default: Bs(() => [
              qo(pn(k), { shrink: "" }, {
                default: Bs(() => [
                  qo(pn(Je), {
                    class: "me-2",
                    icon: i.icon,
                    "icon-color": i.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              qo(pn(k), {
                textContent: oc(i.text)
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
const De = window.Vue.unref, je = window.Vue.createVNode, Wt = window.Vue.withCtx, ic = window.Vue.toDisplayString, am = window.Vue.createTextVNode, vT = window.Vue.resolveDirective, im = window.Vue.withDirectives, rm = window.Vue.createElementVNode, _T = window.Vue.normalizeClass, Fs = window.Vue.openBlock, lm = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Fi = window.Vue.createBlock, cm = window.Vue.normalizeProps;
window.Vue.guardReactiveProps;
const um = window.Vue.mergeProps, ST = { class: "block-template-adaptation-card__container pa-4" }, yT = ["textContent"], xT = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, He = window.Vue.computed, CT = window.Vue.ref, bT = window.Vuex.useStore, dm = window.Codex.CdxButton, gm = window.Codex.CdxIcon, kT = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = bT(), { targetLanguageAutonym: n, currentMTProvider: s } = Le(t), {
      selectedContentTranslationUnit: o,
      currentProposedTranslation: a
    } = ne(), r = He(() => {
      var L;
      return (L = o.value) == null ? void 0 : L.isTranslated;
    }), l = He(() => {
      var P;
      return ((P = o.value) == null ? void 0 : P.blockTemplateTranslatedContent) || a.value;
    }), u = He(
      () => {
        var L;
        return (L = o.value) == null ? void 0 : L.getTargetBlockTemplateNameByProvider(
          s.value
        );
      }
    ), d = He(
      () => {
        var L;
        return !((L = t.state.application.mtRequestsPending) != null && L.includes(
          o.value.id
        ));
      }
    ), i = we(), c = He(
      // Strip HTML comments and return
      () => {
        var L, P;
        return ((P = (L = o.value) == null ? void 0 : L.sourceBlockTemplateName) == null ? void 0 : P.replace(
          /<\!--.*?-->/g,
          ""
        )) || i.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), g = He(
      () => {
        var L, P;
        return (P = (L = o.value) == null ? void 0 : L.blockTemplateAdaptationInfo) == null ? void 0 : P[s.value];
      }
    ), p = He(
      () => {
        var L, P;
        return ((L = g.value) == null ? void 0 : L.adapted) || !!((P = g.value) != null && P.partial);
      }
    ), m = He(() => g.value ? "block-template-adaptation-card__body--" + (p.value ? "success" : "warning") : null), h = He(() => g.value ? p.value ? i.i18n("sx-block-template-adaptation-card-edit-button-label") : i.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), f = He(
      () => {
        var L;
        return Object.keys(((L = o.value) == null ? void 0 : L.sourceTemplateParams) || {}).length;
      }
    ), w = He(() => {
      var P;
      const L = (P = o.value) == null ? void 0 : P.getTargetTemplateParamsByProvider(
        s.value
      );
      return Object.keys(L || {});
    }), v = He(() => w.value.length), y = He(() => {
      const L = x.value;
      return f.value + L === 0 ? 100 : v.value / (f.value + L) * 100 || 0;
    }), S = CT(!1), b = () => {
      S.value = !0;
    }, E = (L) => L.filter((P) => !w.value.includes(P)), x = He(() => {
      var P;
      const L = ((P = g.value) == null ? void 0 : P.mandatoryTargetParams) || [];
      return E(L).length;
    }), I = He(() => {
      var P;
      const L = ((P = g.value) == null ? void 0 : P.optionalTargetParams) || [];
      return E(L).length;
    });
    return (L, P) => {
      const H = vT("i18n");
      return Fs(), Fi(De(Qe), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: Wt(() => [
          rm("div", ST, [
            je(De(N), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: Wt(() => [
                je(De(k), { shrink: "" }, {
                  default: Wt(() => [
                    je(De(gm), {
                      icon: De(iy),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                je(De(k), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: Wt(() => [
                    am(ic(c.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            u.value ? (Fs(), lm("div", {
              key: 0,
              class: _T(["pa-4 mb-4", m.value])
            }, [
              je(De(N), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: Wt(() => [
                  im(je(De(k), { tag: "h5" }, null, 512), [
                    [H, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  je(De(k), { shrink: "" }, {
                    default: Wt(() => [
                      je(zf, {
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
                textContent: ic(u.value)
              }, null, 8, yT),
              je(De(dm), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: P[0] || (P[0] = (se) => L.$emit("edit-translation", l.value))
              }, {
                default: Wt(() => [
                  am(ic(h.value), 1)
                ]),
                _: 1
              })
            ], 2)) : d.value ? (Fs(), lm("div", xT, [
              je(De(N), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: Wt(() => [
                  im(je(De(k), { tag: "h5" }, null, 512), [
                    [H, [
                      De(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  je(De(k), { shrink: "" }, {
                    default: Wt(() => [
                      je(De(dm), {
                        weight: "quiet",
                        "aria-label": L.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: Wt(() => [
                          je(De(gm), {
                            icon: De(ny),
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
            ])) : (Fs(), Fi(De(ct), { key: 2 }))
          ]),
          r.value ? (Fs(), Fi(Of, cm(um({ key: 1 }, L.$attrs)), null, 16)) : (Fs(), Fi(Rf, cm(um({ key: 0 }, L.$attrs)), null, 16)),
          je(wT, {
            active: S.value,
            "onUpdate:active": P[1] || (P[1] = (se) => S.value = se),
            "source-params-count": f.value,
            "target-params-count": v.value,
            "mandatory-missing-params-count": x.value,
            "optional-missing-params-count": I.value,
            "is-template-adapted": p.value,
            "target-template-exists": !!u.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const $T = window.Vue.unref, VT = window.Vue.createVNode, ET = window.Vue.openBlock, LT = window.Vue.createElementBlock, TT = { class: "translated-segment-card-header" }, AT = window.Vue.computed, DT = {
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
    const n = t, { isSectionTitleSelected: s } = ne(), o = we(), a = AT(() => [
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
          disabled: s.value
        }
      }
    ]), r = (l) => n("update:selection", l);
    return (l, u) => (ET(), LT("div", TT, [
      VT($T(pa), {
        items: a.value,
        active: e.selection,
        onSelect: r
      }, null, 8, ["items", "active"])
    ]));
  }
};
const PT = window.Vue.useCssVars, Ie = window.Vue.createVNode, pm = window.Vue.resolveDirective, BT = window.Vue.createElementVNode, rc = window.Vue.withDirectives, ye = window.Vue.unref, FT = window.Vue.normalizeStyle, Ni = window.Vue.openBlock, mm = window.Vue.createElementBlock, NT = window.Vue.createCommentVNode, MT = window.Vue.normalizeClass, vt = window.Vue.withCtx, UT = window.Vue.toDisplayString, IT = window.Vue.createTextVNode, hm = window.Vue.createBlock, RT = window.Vue.normalizeProps, zT = window.Vue.guardReactiveProps, mn = window.Vue.computed, OT = window.Vue.ref, jT = window.Vue.inject, HT = window.Vuex.useStore, qT = window.Codex.CdxButton, lc = window.Codex.CdxIcon, GT = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    PT((v) => ({
      "4929555c": w.value
    }));
    const t = OT("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: s,
      isSectionTitleSelected: o
    } = ne(), { targetLanguage: a } = Le(HT()), r = mn(() => t.value === "sentence"), l = mn(
      () => n.value.subSections.find(
        (v) => v.sentences.some(
          (y) => {
            var S;
            return y.id === ((S = s.value) == null ? void 0 : S.id);
          }
        )
      )
    ), u = mn(() => {
      var v;
      return o.value ? n.value.mtProposedTranslationUsedForTitle : r.value ? (v = s.value) == null ? void 0 : v.mtProposedTranslationUsed : l.value.proposedContentForMTValidation;
    }), d = jT("colors"), i = d.gray200, c = d.red600, g = mn(() => o.value ? n.value.translatedTitle : r.value ? s.value.translatedContent : l.value.translatedContent), p = mn(
      () => Zt.calculateScore(
        g.value,
        u.value,
        a.value
      )
    ), m = mn(
      () => Zt.getScoreStatus(p.value)
    ), h = mn(
      () => `translated-segment-card__modification-stats__percentage--${m.value}`
    ), f = mn(() => ({
      failure: p.value === 0 ? null : d.yellow700,
      warning: d.yellow700,
      success: d.green600
    })), w = mn(
      () => f.value[m.value]
    );
    return (v, y) => {
      const S = pm("i18n"), b = pm("i18n-html");
      return Ni(), hm(ye(Qe), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: vt(() => [
          Ie(ye(N), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: vt(() => [
              Ie(DT, {
                selection: t.value,
                "onUpdate:selection": y[0] || (y[0] = (E) => t.value = E)
              }, null, 8, ["selection"]),
              Ie(ye(k), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: vt(() => [
                  Ie(ye(N), { class: "ma-0" }, {
                    default: vt(() => [
                      Ie(ye(k), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: vt(() => [
                          rc(BT("h5", null, null, 512), [
                            [S, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          p.value === 0 ? rc((Ni(), mm("p", {
                            key: 0,
                            style: FT({ color: ye(c) })
                          }, null, 4)), [
                            [S, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : rc((Ni(), mm("p", {
                            key: 1,
                            class: MT(h.value)
                          }, null, 2)), [
                            [b, [
                              p.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      Ie(ye(k), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: vt(() => [
                          Ie(ye(N), { class: "ma-0 ms-2" }, {
                            default: vt(() => [
                              Ie(ye(k), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: vt(() => [
                                  Ie(ye(lc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ye(cy)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              Ie(ye(k), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: vt(() => [
                                  Ie(ye(dh), {
                                    value: p.value,
                                    height: "4px",
                                    width: "64px",
                                    color: w.value,
                                    background: ye(i)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              Ie(ye(k), { shrink: "" }, {
                                default: vt(() => [
                                  Ie(ye(lc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ye(ry)
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
                  r.value ? (Ni(), hm(ye(qT), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: y[1] || (y[1] = (E) => v.$emit("edit-translation", g.value))
                  }, {
                    default: vt(() => [
                      Ie(ye(lc), {
                        class: "me-1",
                        icon: ye(du)
                      }, null, 8, ["icon"]),
                      IT(" " + UT(v.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : NT("", !0)
                ]),
                _: 1
              }),
              Ie(ye(k), { class: "translated-segment-card__actions" }, {
                default: vt(() => [
                  Ie(Of, RT(zT(v.$attrs)), null, 16)
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
}, XT = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = ne(), { selectNextTranslationUnit: n, selectTranslationUnitById: s } = eo(), { currentTranslation: o } = zt();
  return () => {
    if (e.value)
      if (o.value && !t.value) {
        const { lastTranslatedContentTranslationUnit: a } = e.value;
        e.value.selectTranslationUnitById(
          (a == null ? void 0 : a.id) || 0
        ), n();
      } else
        t.value || s(0);
  };
}, jf = window.Vuex.useStore, WT = () => {
  const e = jf(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = D();
  return () => C(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const s = mw.config.get("wgContentTranslationEnableMT");
    let o;
    s ? o = yield nr.fetchSupportedMTProviders(
      t.value,
      n.value
    ) : o = new re(
      t.value,
      n.value,
      []
      // Empty providers array - only "original" and "empty" will be added by constructor
    ), e.commit("mediawiki/addMtProviderGroup", o);
  });
}, KT = () => {
  const e = jf(), { currentMTProvider: t } = Le(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: s
  } = D(), o = WT();
  return () => C(void 0, null, function* () {
    yield o();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, s.value);
    if (!t.value || !a.includes(t.value)) {
      const r = re.getStorageKey(
        n.value,
        s.value
      );
      let l = mw.storage.get(r);
      (!l || !a.includes(l)) && (l = a[0]), e.commit("application/setCurrentMTProvider", l);
    }
  });
}, YT = window.Vue.computed, QT = (e) => {
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
}, JT = () => {
  const { selectedContentTranslationUnit: e } = ne(), t = YT(
    () => e.value instanceof lt
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, s = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    s && QT(s);
  };
}, ZT = (e, t) => {
  const { content: n, origin: s, baseSectionId: o, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const r = t.filter(
    (l) => !re.isUserMTProvider(l)
  );
  if (s !== "source" && s !== "user" && !r.includes(s))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!o || !a || e.sectionId !== `${o}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, eA = window.Vue.computed, Hf = () => {
  const { currentTranslation: e } = zt(), { currentSourcePage: t } = dt();
  return eA(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, tA = window.Vuex.useStore, $u = () => {
  const e = tA(), { sourceSection: t, targetPageTitleForPublishing: n } = ne(), {
    pageURLParameter: s,
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: a
  } = D(), r = Hf(), { target: l, PUBLISHING_TARGETS: u } = Rt();
  return () => {
    const d = n.value, i = e.getters["mediawiki/getSupportedMTProviders"](o.value, a.value), c = `${r.value}_${t.value.id}`, g = t.value.getParallelCorporaUnits(c);
    g.forEach(
      (m) => ZT(m, i)
    );
    const p = t.value.getTranslationProgress(a);
    return xt.saveTranslation({
      sourceTitle: s.value,
      targetTitle: d,
      // pass a dummy string to be stored as "cxsx_source_section_title" inside "cx_section_translations" table for lead sections
      sourceSectionTitle: t.value.sourceSectionTitleForPublishing,
      // pass a dummy string to be stored as "cxsx_target_section_title" inside "cx_section_translations" table for lead sections
      targetSectionTitle: t.value.targetSectionTitleForPublishing,
      sourceLanguage: o.value,
      targetLanguage: a.value,
      revision: r.value,
      units: g.map((m) => m.payload),
      // section id to be stored as "cxsx_section_id" inside "cx_section_translations"
      sectionId: c,
      isSandbox: l === u.SANDBOX,
      progress: p
    });
  };
}, nA = window.Vue.effectScope, sA = window.Vue.onScopeDispose, oA = (e) => {
  let t = 0, n, s;
  const o = () => {
    s && --t <= 0 && (s.stop(), n = s = null);
  };
  return (...a) => (t++, n || (s = nA(!0), n = s.run(() => e(...a))), sA(o), n);
}, aA = window.Vuex.useStore;
let cc;
const iA = () => {
  const e = aA(), t = $u();
  let n = 1e3, s = 0;
  return cc = vu(() => t().then((a) => {
    a instanceof jn ? (n *= s + 1, s++, setTimeout(cc, n)) : (s = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof Gs)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), cc;
}, qf = oA(iA), rA = window.Vuex.useStore, lA = () => {
  const e = rA(), t = qf(), { currentMTProvider: n } = Le(e), { sourceSection: s, currentProposedTranslation: o } = ne(), { selectNextTranslationUnit: a } = eo();
  return () => C(void 0, null, function* () {
    s.value.setTranslationForSelectedTranslationUnit(
      o.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, cA = window.Vuex.useStore, uA = () => {
  const e = cA(), t = qf();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, dA = window.Vuex.useStore, gA = window.Vue.computed, Gf = () => {
  const e = dA(), { currentTranslation: t } = zt(), { currentMTProvider: n } = Le(e), { currentTargetPageTitle: s } = dt(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    sectionURLParameter: l
  } = D(), u = bt(), d = gA(() => {
    const f = {
      translation_source_language: o.value,
      translation_target_language: a.value,
      // DOCUMENTATION (https://github.com/wikimedia/schemas-event-secondary/blob/master/jsonschema/analytics/mediawiki/content_translation_event/1.4.0.yaml#L294)
      // translation_source_title:
      //   The title of the source article of the current translation. Applies only
      //   to events which relate to a specific translation or suggestion: all
      //   `editor_` and `publish_` events and some `dashboard_` events (e.g.
      //   `dashboard_start_translation`, `dashboard_delete_translation`)
      translation_source_title: r.value
      // DOCUMENTATION (https://github.com/wikimedia/schemas-event-secondary/blob/master/jsonschema/analytics/mediawiki/content_translation_event/1.4.0.yaml#L301)
      // translation_target_exists:
      //   Whether the target article or section already exists. Applies only to
      //   events which relate to a specific translation or suggestion: all `editor_`
      //   and `publish_` events and some `dashboard_` events (e.g. `dashboard_start_translation`,
      //   `dashboard_delete_translation`). In section translation, if the user discards the mapping
      //   to an existing target section, the value should change to false in future events.
      // translation_target_exists: !!currentTargetPageTitle.value,
    };
    if (l.value ? (f.translation_source_section = l.value, f.translation_type = "section") : f.translation_type = "article", t.value) {
      f.translation_id = t.value.translationId, f.translation_target_title = t.value.targetTitle;
      const w = t.value.targetSectionTitle;
      w && (f.translation_target_section = w);
    } else
      s.value && (f.translation_target_title = s.value);
    return n.value && (f.translation_provider = re.getProviderForInstrumentation(n.value)), f;
  });
  return {
    logEditorOpenEvent: () => {
      const f = pe({
        event_type: "editor_open"
      }, d.value);
      return u(f);
    },
    logEditorCloseEvent: () => {
      const f = pe({
        event_type: "editor_close"
      }, d.value);
      return u(f);
    },
    logEditorCloseWarnEvent: () => u(pe({
      event_type: "editor_close_warn"
    }, d.value)),
    logEditorSegmentAddEvent: () => u(pe({
      event_type: "editor_segment_add"
    }, d.value)),
    logEditorSegmentSkipEvent: () => u(pe({
      event_type: "editor_segment_skip"
    }, d.value)),
    logEditorSegmentEditEvent: () => u(pe({
      event_type: "editor_segment_edit"
    }, d.value))
  };
}, pA = (e, t, n, s) => C(void 0, null, function* () {
  var l, u, d;
  const o = ((l = t.user) == null ? void 0 : l.content) || ((u = t.mt) == null ? void 0 : u.content), a = (d = t == null ? void 0 : t.mt) == null ? void 0 : d.engine, r = yield If(
    o,
    n,
    s
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    o
  ), e.blockTemplateProposedTranslations[a] = r, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = r;
}), mA = (e, t) => {
  t.segments.forEach((n) => {
    var o, a, r;
    const s = e.getSentenceById(n.id);
    if (s && (s.translatedContent = ((o = n.user) == null ? void 0 : o.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const l = (r = t.mt) == null ? void 0 : r.engine;
      s.addProposedTranslation(l, n.mt.innerHTML), s.mtProviderUsed = l;
    }
  });
}, hA = (e, t, n, s) => C(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return pA(e, t, n, s);
  mA(e, t);
}), fA = (e, t, n, s) => {
  const o = [];
  for (const a of e.sections || [])
    if (s.filter(
      (l) => l.pageSectionId === parseInt(a.id)
    ).length)
      for (const l of a.subSections) {
        const u = s.find(
          (i) => i.subSectionId === l.id
        );
        if (!u)
          continue;
        const d = hA(
          l,
          u,
          t || e.title,
          n
        );
        o.push(d);
      }
  return Promise.all(o);
}, wA = { restoreCorporaDraft: fA }, vA = () => {
  const { currentSourcePage: e } = dt(), { sourceSection: t } = ne();
  return (n) => C(void 0, null, function* () {
    if (n.restored)
      return;
    const s = yield xt.fetchTranslationUnits(
      n.translationId
    );
    yield wA.restoreCorporaDraft(
      e.value,
      n.targetTitle,
      n.targetLanguage,
      s
    ), n.restored = !0;
    let o;
    n.isLeadSectionTranslation ? (t.value.originalTitle = n.sourceTitle, o = n.targetTitle) : o = n.targetSectionTitle, t.value.translatedTitle = o;
  });
};
let uc = null;
function _A() {
  const e = mw.config.get(
    "wgContentTranslationPublishRequirements"
  ), t = mw.config.get("wgUserGroups") || [];
  if (!e || !e.userGroups)
    return !0;
  const n = e.userGroups;
  return n.includes("*") ? !0 : n.some((s) => t.includes(s));
}
function Xf() {
  return uc === null && (uc = _A()), uc;
}
const Wf = window.Vue.ref, dc = Wf(!1), gc = Wf(!1);
function fm() {
  return {
    isPermissionWarningDismissed: dc,
    dismissPermissionWarning: () => {
      dc.value = !0;
    },
    resetPermissionWarning: () => {
      dc.value = !1;
    },
    isTitleErrorDismissed: gc,
    dismissTitleError: () => {
      gc.value = !0;
    },
    resetTitleError: () => {
      gc.value = !1;
    }
  };
}
const ce = window.Vue.unref, _t = window.Vue.createVNode, Pt = window.Vue.withCtx, SA = window.Vue.resolveDirective, hn = window.Vue.createElementVNode, yA = window.Vue.withDirectives, Go = window.Vue.toDisplayString, xA = window.Vue.createTextVNode, Kt = window.Vue.openBlock, Nn = window.Vue.createBlock, wm = window.Vue.createCommentVNode, CA = window.Vue.renderList, bA = window.Vue.Fragment, vm = window.Vue.createElementBlock, kA = window.Vue.normalizeClass, $A = window.Vue.normalizeStyle, VA = { class: "sx-sentence-selector__header-title mb-0" }, EA = {
  href: "https://www.mediawiki.org/wiki/Help:Content_translation/Publishing",
  target: "_blank"
}, LA = { class: "sx-sentence-selector__section-contents px-4" }, Mn = window.Vue.computed, TA = window.Vue.nextTick, AA = window.Vue.onMounted, Xo = window.Vue.ref, _m = window.Vue.watch, DA = window.Vuex.useStore, Sm = window.Codex.CdxButton, PA = window.Codex.CdxIcon, ym = window.Codex.CdxMessage, BA = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = Xo(!1), n = Xo(!1), s = Xo("100%"), o = DA(), { currentMTProvider: a, previousRoute: r } = Le(o), {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: u,
      pageURLParameter: d,
      sectionURLParameter: i
    } = D(), { resetPublishTarget: c, target: g } = Rt(), p = ar();
    g.value || p(
      l.value,
      u.value,
      d.value
    ).then(() => c());
    const {
      sourceSection: m,
      selectedContentTranslationUnit: h,
      targetPageTitleForPublishing: f
    } = ne(), w = Xo({
      pageContent: !1,
      pageMetadata: !1,
      draftRestored: !1,
      mtProviders: !1
    }), v = Mn(
      () => Object.values(w.value).every(Boolean)
    ), y = Mn(
      () => {
        var G;
        return (G = m.value) == null ? void 0 : G.isSelectedTranslationUnitTranslated;
      }
    ), S = Mn(() => {
      var G;
      return (G = m.value) == null ? void 0 : G.subSections;
    }), b = Mn(
      () => {
        var G;
        return (G = m.value) == null ? void 0 : G.selectedTranslationUnitOriginalContent;
      }
    ), E = Mn(
      () => isNaN(s.value) ? s.value : `${s.value}px`
    ), {
      logEditorOpenEvent: x,
      logEditorCloseEvent: I,
      logEditorCloseWarnEvent: L,
      logEditorSegmentAddEvent: P,
      logEditorSegmentSkipEvent: H
    } = Gf(), se = () => {
      var oo;
      const G = F.currentRoute.value.meta.workflowStep, tn = F.getRoutes().find(
        (ao) => ao.name === r.value
      ), gt = ((oo = tn == null ? void 0 : tn.meta) == null ? void 0 : oo.workflowStep) || 0;
      return G > gt;
    }, ae = XT();
    KT()().then(() => {
      se() && x(), w.value.mtProviders = !0;
    });
    const R = JT(), { fetchTranslationsByStatus: J, translationsFetched: oe } = Js(), le = vA(), { currentTranslation: ke } = zt(), { selectPageSectionByTitle: We, selectPageSectionByIndex: Pe } = ur(), Z = Cu(), U = Ks();
    AA(() => C(this, null, function* () {
      if (!oe.value.draft) {
        const G = [
          // required to get current draft translation (if exists)
          J("draft"),
          // required to get target page title for template adaptation (useTranslationUnitTranslate)
          Z(l.value, d.value),
          // user has just been redirected here from another wiki, and page metadata have not yet been fetched
          U(l.value, [d.value])
        ];
        yield Promise.all(G);
      }
      w.value.pageMetadata = !0, i.value ? yield We(i.value) : yield Pe(0), w.value.pageContent = !0, ke.value && (yield le(ke.value)), w.value.draftRestored = !0, _m(
        v,
        () => C(this, null, function* () {
          v.value && (yield TA(), ae(), R());
        }),
        { immediate: !0 }
      ), s.value = window.innerHeight;
    })), _m(h, R);
    const { selectNextTranslationUnit: B, selectPreviousTranslationUnit: M } = eo(), Y = () => (H(), B()), _ = lA(), T = () => {
      P(), _();
    }, A = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, F = Ze(), X = () => {
      const { autoSavePending: G } = o.state.application;
      if (G) {
        so.value = !0, L();
        return;
      }
      z();
    }, ge = uA(), { clearTranslationURLParameters: q } = D(), z = () => C(this, null, function* () {
      J("draft"), ke.value && (m.value.reset(), ke.value.restored = !1), I(), q(), ge(), yield F.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: ie,
      translateSelectedTranslationUnitForAllProviders: et
    } = ku(), $e = () => {
      no.value || (t.value = !0, et());
    }, { getCurrentTitleByLanguage: ya } = bn(), gs = (G) => {
      F.push({
        name: "sx-editor",
        state: {
          content: G,
          originalContent: b.value,
          title: ya(
            u.value,
            l.value
          ),
          isInitialEdit: !y.value || null
        }
      });
    }, to = () => F.push({ name: "sx-publisher" }), dr = () => C(this, null, function* () {
      h.value ? yield ie(
        h.value.id,
        a.value
      ) : yield ie(0, a.value);
    }), no = Mn(
      () => h.value instanceof lt
    ), so = Xo(!1), {
      isPermissionWarningDismissed: gr,
      dismissPermissionWarning: pr,
      resetPermissionWarning: ps
    } = fm(), { isTitleErrorDismissed: ms, dismissTitleError: xa, resetTitleError: V } = fm();
    se() && (ps(), V());
    const O = Mn(
      () => !Xf() && !gr.value
    ), Ne = Mn(
      () => {
        var G;
        return !ms.value && ((G = m.value) == null ? void 0 : G.isLeadSection) && !mw.Title.newFromText(f.value);
      }
    );
    return (G, ze) => {
      const tn = SA("i18n");
      return Kt(), vm("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: $A(E.value)
      }, [
        _t(ce(N), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: Pt(() => [
            _t(ce(k), { shrink: "" }, {
              default: Pt(() => [
                _t(ce(Sm), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": G.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: X
                }, {
                  default: Pt(() => [
                    _t(ce(PA), { icon: ce(Mh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            _t(ce(k), {
              grow: "",
              class: "px-1"
            }, {
              default: Pt(() => [
                yA(hn("h4", VA, null, 512), [
                  [tn, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            _t(ce(k), {
              shrink: "",
              class: "px-3"
            }, {
              default: Pt(() => [
                _t(ce(Sm), {
                  disabled: !(ce(m) && ce(m).isTranslated),
                  onClick: to
                }, {
                  default: Pt(() => [
                    xA(Go(G.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        v.value ? (Kt(), Nn(ce(N), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: Pt(() => [
            _t(ce(k), {
              dir: ce(j.getDir)(ce(l)),
              lang: ce(l),
              class: "sx-sentence-selector__section"
            }, {
              default: Pt(() => [
                O.value ? (Kt(), Nn(ce(ym), {
                  key: 0,
                  type: "warning",
                  "allow-user-dismiss": !0,
                  class: "mx-4 mt-4",
                  onUserDismissed: ce(pr)
                }, {
                  default: Pt(() => [
                    hn("p", null, Go(G.$i18n("cx-publish-permission-warning")), 1),
                    hn("p", null, [
                      hn("strong", null, [
                        hn("a", EA, Go(G.$i18n("cx-publish-permission-warning-link-label")), 1)
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : wm("", !0),
                Ne.value ? (Kt(), Nn(ce(ym), {
                  key: 1,
                  type: "error",
                  "allow-user-dismiss": !0,
                  class: "mx-4 mt-4",
                  onUserDismissed: ce(xa)
                }, {
                  default: Pt(() => [
                    hn("p", null, [
                      hn("strong", null, Go(G.$i18n("cx-tools-linter-invalid-character")), 1)
                    ]),
                    hn("p", null, Go(G.$i18n("cx-tools-linter-invalid-character-message")), 1)
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : wm("", !0),
                _t(mL),
                hn("div", LA, [
                  (Kt(!0), vm(bA, null, CA(S.value, (gt) => (Kt(), Nn(oT, {
                    id: gt.id,
                    key: `sub-section-${gt.id}`,
                    "sub-section": gt,
                    onBounceTranslation: A
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !no.value && y.value ? (Kt(), Nn(GT, {
              key: 0,
              onEditTranslation: gs,
              onSelectNextSegment: ce(B),
              onSelectPreviousSegment: ce(M)
            }, null, 8, ["onSelectNextSegment", "onSelectPreviousSegment"])) : no.value ? (Kt(), Nn(kT, {
              key: 2,
              onEditTranslation: gs,
              onApplyTranslation: T,
              onSkipTranslation: Y,
              onSelectPreviousSegment: ce(M),
              onSelectNextSegment: ce(B)
            }, null, 8, ["onSelectPreviousSegment", "onSelectNextSegment"])) : (Kt(), Nn(XL, {
              key: 1,
              class: kA({ "mb-0": !n.value }),
              onConfigureOptions: $e,
              onEditTranslation: gs,
              onApplyTranslation: T,
              onSkipTranslation: Y,
              onSelectPreviousSegment: ce(M),
              onRetryTranslation: dr
            }, null, 8, ["class", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Kt(), Nn(ce(N), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: Pt(() => [
            _t(ce(ct), { class: "mt-0" })
          ]),
          _: 1
        })),
        _t(oL, {
          active: t.value,
          "onUpdate:active": ze[0] || (ze[0] = (gt) => t.value = gt)
        }, null, 8, ["active"]),
        _t(P5, {
          modelValue: so.value,
          "onUpdate:modelValue": ze[1] || (ze[1] = (gt) => so.value = gt),
          onDiscardTranslation: z
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const FA = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: BA
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, NA = window.Vue.resolveComponent, MA = window.Vue.createVNode, UA = window.Vue.normalizeClass, IA = window.Vue.openBlock, RA = window.Vue.createElementBlock;
function zA(e, t, n, s, o, a) {
  const r = NA("sx-sentence-selector");
  return IA(), RA("main", {
    class: UA(["sx-sentence-selector-view", a.classes])
  }, [
    MA(r)
  ], 2);
}
const OA = /* @__PURE__ */ de(FA, [["render", zA]]), jA = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, HA = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const qA = window.Vue.resolveDirective, Mi = window.Vue.withDirectives, Bt = window.Vue.openBlock, fn = window.Vue.createElementBlock, Ui = window.Vue.createCommentVNode, Ii = window.Vue.Transition, ns = window.Vue.withCtx, Ns = window.Vue.createVNode, Wo = window.Vue.createElementVNode, Un = window.Vue.unref, GA = window.Vue.renderList, XA = window.Vue.Fragment, WA = window.Vue.normalizeClass, xm = window.Vue.createBlock, KA = window.Vue.toDisplayString, YA = window.Vue.createTextVNode, QA = { class: "sx-quick-tutorial" }, JA = { class: "sx-quick-tutorial__main-point my-4 py-5 px-6" }, ZA = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, eD = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, tD = { class: "sx-quick-tutorial__illustration" }, nD = ["innerHTML"], sD = ["innerHTML"], oD = { class: "sx-quick-tutorial__step-indicator py-3" }, aD = ["onClick"], iD = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, rD = {
  key: "secondary-point-1",
  class: "ma-0"
}, lD = {
  key: "secondary-point-2",
  class: "ma-0"
}, cD = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, Cm = window.Vue.ref, bm = window.Codex.CdxButton, uD = window.Codex.CdxIcon, dD = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = Cm(2), n = Cm(1), s = () => {
      n.value < t.value && n.value++;
    }, o = (r) => r === n.value, a = Zs();
    return (r, l) => {
      const u = qA("i18n");
      return Bt(), fn("section", QA, [
        Ns(Un(N), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: ns(() => [
            Wo("section", JA, [
              Ns(Ii, {
                name: "fade",
                mode: "out-in"
              }, {
                default: ns(() => [
                  o(1) ? Mi((Bt(), fn("h2", ZA, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : o(2) ? Mi((Bt(), fn("h2", eD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : Ui("", !0)
                ]),
                _: 1
              })
            ]),
            Wo("section", tD, [
              Ns(Ii, { name: "mw-ui-animation-slide-start" }, {
                default: ns(() => [
                  o(1) ? (Bt(), fn("div", {
                    key: "illustration-1",
                    innerHTML: Un(HA)
                  }, null, 8, nD)) : o(2) ? (Bt(), fn("div", {
                    key: "illustration-2",
                    innerHTML: Un(jA)
                  }, null, 8, sD)) : Ui("", !0)
                ]),
                _: 1
              })
            ]),
            Wo("div", oD, [
              (Bt(!0), fn(XA, null, GA(t.value, (d) => (Bt(), fn("span", {
                key: `dot-${d}`,
                class: WA(["dot mx-1", { "dot-active": o(d) }]),
                role: "button",
                onClick: (i) => n.value = d
              }, null, 10, aD))), 128))
            ]),
            Wo("section", iD, [
              Ns(Ii, {
                name: "fade",
                mode: "out-in"
              }, {
                default: ns(() => [
                  o(1) ? Mi((Bt(), fn("h3", rD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : o(2) ? Mi((Bt(), fn("h3", lD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : Ui("", !0)
                ]),
                _: 1
              })
            ]),
            Wo("div", cD, [
              Ns(Ii, {
                name: "fade",
                mode: "out-in"
              }, {
                default: ns(() => [
                  o(1) ? (Bt(), xm(Un(bm), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": r.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: s
                  }, {
                    default: ns(() => [
                      Ns(Un(uD), { icon: Un(_a) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : o(2) ? (Bt(), xm(Un(bm), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: Un(a)
                  }, {
                    default: ns(() => [
                      YA(KA(r.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : Ui("", !0)
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
const gD = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: dD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, pD = window.Vue.resolveComponent, mD = window.Vue.createVNode, hD = window.Vue.normalizeClass, fD = window.Vue.openBlock, wD = window.Vue.createElementBlock;
function vD(e, t, n, s, o, a) {
  const r = pD("sx-quick-tutorial");
  return fD(), wD("main", {
    class: hD(["sx-quick-tutorial-view", a.classes])
  }, [
    mD(r)
  ], 2);
}
const _D = /* @__PURE__ */ de(gD, [["render", vD]]);
const SD = window.Vue.resolveDirective, km = window.Vue.createElementVNode, yD = window.Vue.withDirectives, xD = window.Vue.unref, CD = window.Vue.withCtx, bD = window.Vue.createVNode, kD = window.Vue.openBlock, $D = window.Vue.createElementBlock, VD = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, ED = { class: "sx-editor__original-content-panel__header mb-2" }, LD = ["lang", "dir", "innerHTML"], $m = window.Vue.ref, TD = window.Vue.onMounted, AD = {
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
    }, s = $m(null), o = $m(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(s.value, null).getPropertyValue("line-height")
    );
    return TD(() => {
      o.value = 2 * a(), n(s.value, t.language);
    }), (r, l) => {
      const u = SD("i18n");
      return kD(), $D("section", VD, [
        yD(km("h5", ED, null, 512), [
          [u, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        bD(xD(W1), {
          "min-height": o.value,
          scroll: ""
        }, {
          default: CD(() => [
            km("div", {
              ref_key: "originalContentRef",
              ref: s,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, LD)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, DD = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const PD = window.Vue.unref, Ko = window.Vue.createElementVNode, Vm = window.Vue.resolveDirective, pc = window.Vue.withDirectives, BD = window.Vue.normalizeClass, FD = window.Vue.openBlock, ND = window.Vue.createElementBlock, MD = window.Vue.createCommentVNode, UD = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, ID = { class: "sx-editor__feedback-overlay-content px-4" }, RD = ["innerHTML"], zD = { class: "sx-editor__feedback-overlay-content__title" }, OD = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, mc = window.Vue.computed, jD = {
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
    const t = e, { targetLanguageURLParameter: n } = D(), s = mc(
      () => Zt.calculateScore(
        t.editedTranslation,
        t.proposedTranslation,
        n.value
      )
    ), o = mc(() => {
      const r = Zt.getScoreStatus(s.value);
      return r === "failure" ? s.value === 0 ? "failure" : "warning" : r;
    }), a = mc(
      () => `sx-editor__feedback-overlay-content__stats--${o.value}`
    );
    return (r, l) => {
      const u = Vm("i18n"), d = Vm("i18n-html");
      return e.showFeedback ? (FD(), ND("div", UD, [
        Ko("div", ID, [
          Ko("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: PD(DD)
          }, null, 8, RD),
          pc(Ko("h2", zD, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          pc(Ko("p", OD, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          pc(Ko("p", {
            class: BD(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [d, [s.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : MD("", !0);
    };
  }
}, HD = window.Vuex.useStore, qD = () => {
  const e = HD(), t = $u(), { selectNextTranslationUnit: n } = eo(), {
    isSectionTitleSelected: s,
    sourceSection: o,
    selectedContentTranslationUnit: a
  } = ne(), { getCurrentTitleByLanguage: r } = bn(), {
    sourceLanguageURLParameter: l,
    targetLanguageURLParameter: u
  } = D(), { currentMTProvider: d } = Le(e);
  return (i) => C(void 0, null, function* () {
    if (!s.value) {
      const c = document.createElement("div");
      c.innerHTML = i, c.querySelectorAll(".sx-edit-dummy-node").forEach((g) => g.remove()), i = c.innerHTML;
    }
    a.value instanceof lt && (i = (yield If(
      i,
      r(u.value, l.value),
      u.value
    )) || i), o.value.setTranslationForSelectedTranslationUnit(
      i,
      d.value
    ), t(), n();
  });
};
const Ke = window.Vue.unref, hc = window.Vue.openBlock, fc = window.Vue.createBlock, Em = window.Vue.createCommentVNode, Lm = window.Vue.createVNode, GD = window.Vue.createElementVNode, XD = window.Vue.withCtx, WD = { class: "sx-editor__editing-surface-container grow" }, wc = window.Vue.ref, KD = window.Vue.computed, YD = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = wc(!1), s = Ze(), o = () => n.value = !0, a = () => s.replace({ name: t.fromRoute }), { isFinalEdit: r, isInitialEdit: l, content: u, originalContent: d, title: i } = history.state, c = wc(null), g = wc(!1), { logEditorSegmentAddEvent: p, logEditorSegmentEditEvent: m } = Gf(), {
      sourceLanguageURLParameter: h,
      targetLanguageURLParameter: f
    } = D(), { isSectionTitleSelected: w, sourceSection: v } = ne(), y = KD(
      () => Zt.calculateScore(
        c.value,
        u,
        f.value
      )
    ), S = qD(), b = (E) => C(this, null, function* () {
      c.value = E, g.value = !0;
      const x = new Promise((L) => setTimeout(L, 2e3));
      let I = Promise.resolve();
      r ? v.value.editedTranslation = E : I = S(E), y.value === 0 && l ? p() : y.value > 0 && m(), yield Promise.all([x, I]), g.value = !1, a();
    });
    return (E, x) => (hc(), fc(Ke(N), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: XD(() => [
        Ke(d) ? (hc(), fc(AD, {
          key: 0,
          language: Ke(h),
          dir: Ke(j.getDir)(Ke(h)),
          "original-content": Ke(d)
        }, null, 8, ["language", "dir", "original-content"])) : Em("", !0),
        n.value ? Em("", !0) : (hc(), fc(Ke(ct), { key: 1 })),
        GD("div", WD, [
          Lm(jD, {
            "edited-translation": c.value,
            "show-feedback": g.value,
            "proposed-translation": Ke(u)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          Lm(VV, {
            content: Ke(u),
            language: Ke(f),
            dir: Ke(j.getDir)(Ke(f)),
            title: Ke(i),
            "use-text": !!Ke(w),
            onReady: o,
            onClose: a,
            onEditCompleted: b
          }, null, 8, ["content", "language", "dir", "title", "use-text"])
        ])
      ]),
      _: 1
    }));
  }
};
const QD = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: YD
  },
  beforeRouteEnter(e, t, n) {
    n((s) => {
      s.fromRoute = t.name;
    });
  },
  data: () => ({
    fromRoute: ""
  }),
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.tabletAndDown })
  }
}, JD = window.Vue.resolveComponent, ZD = window.Vue.createVNode, e6 = window.Vue.normalizeClass, t6 = window.Vue.openBlock, n6 = window.Vue.createElementBlock;
function s6(e, t, n, s, o, a) {
  const r = JD("sx-editor");
  return t6(), n6("main", {
    class: e6(["sx-editor-view", a.classes])
  }, [
    ZD(r, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const o6 = /* @__PURE__ */ de(QD, [["render", s6]]);
const Yt = window.Vue.unref, ss = window.Vue.createVNode, Yo = window.Vue.withCtx, a6 = window.Vue.resolveDirective, i6 = window.Vue.withDirectives, r6 = window.Vue.openBlock, l6 = window.Vue.createBlock, Tm = window.Codex.CdxButton, Am = window.Codex.CdxIcon, c6 = {
  __name: "SXPublisherHeader",
  props: {
    isPublishingDisabled: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["publish-translation"],
  setup(e) {
    const t = Ze(), n = () => t.push({ name: "sx-sentence-selector" });
    return (s, o) => {
      const a = a6("i18n");
      return r6(), l6(Yt(N), { class: "ma-0 sx-publisher__header" }, {
        default: Yo(() => [
          ss(Yt(k), {
            shrink: "",
            class: "me-2"
          }, {
            default: Yo(() => [
              ss(Yt(Tm), {
                class: "px-3",
                weight: "quiet",
                "aria-label": s.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: Yo(() => [
                  ss(Yt(Am), { icon: Yt(Qs) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          i6(ss(Yt(k), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          ss(Yt(k), { shrink: "" }, {
            default: Yo(() => [
              ss(Yt(Tm), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": s.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: o[0] || (o[0] = (r) => s.$emit("publish-translation"))
              }, {
                default: Yo(() => [
                  ss(Yt(Am), { icon: Yt(KS) }, null, 8, ["icon"])
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
}, u6 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, d6 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, Dm = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const vc = window.Vue.createElementVNode, Pm = window.Vue.toDisplayString, _c = window.Vue.unref, Sc = window.Vue.withCtx, Bm = window.Vue.createVNode, g6 = window.Vue.openBlock, p6 = window.Vue.createBlock, m6 = window.Vue.createCommentVNode, h6 = ["innerHTML"], f6 = ["textContent"], w6 = ["textContent"], yc = window.Vue.computed, v6 = {
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
    const t = we(), n = e, s = {
      pending: {
        svg: u6,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: d6,
        title: t.i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: Dm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: Dm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, o = yc(() => s[n.status].svg), a = yc(() => s[n.status].title), r = yc(() => s[n.status].subtitle);
    return (l, u) => e.active ? (g6(), p6(_c(Ct), {
      key: 0,
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: Sc(() => [
        Bm(_c(N), { class: "ma-4" }, {
          default: Sc(() => [
            Bm(_c(k), null, {
              default: Sc(() => [
                vc("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: o.value
                }, null, 8, h6),
                vc("h2", {
                  textContent: Pm(a.value)
                }, null, 8, f6),
                vc("p", {
                  class: "ma-0",
                  textContent: Pm(r.value)
                }, null, 8, w6)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : m6("", !0);
  }
};
const it = window.Vue.unref, Ft = window.Vue.createVNode, wn = window.Vue.withCtx, _6 = window.Vue.resolveDirective, S6 = window.Vue.withDirectives, Fm = window.Vue.toDisplayString, y6 = window.Vue.createTextVNode, xc = window.Vue.openBlock, Nm = window.Vue.createElementBlock, x6 = window.Vue.createCommentVNode, Kf = window.Vue.createElementVNode, C6 = window.Vue.createBlock, b6 = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, k6 = ["src"], $6 = ["textContent"], V6 = /* @__PURE__ */ Kf("p", { class: "mt-0" }, null, -1), E6 = window.Vue.computed, L6 = window.Vue.inject, T6 = window.Vue.ref, Mm = window.Codex.CdxButton, A6 = window.Codex.CdxIcon, D6 = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: Wh,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, s = T6(""), o = () => n("close"), a = () => n("publish", s.value), r = L6("breakpoints"), l = E6(() => r.value.mobile);
    return (u, d) => {
      const i = _6("i18n");
      return e.active && e.captchaDetails ? (xc(), C6(it(Ct), {
        key: 0,
        fullscreen: l.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: wn(() => [
          Ft(it(N), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: wn(() => [
              Ft(it(k), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: wn(() => [
                  Ft(it(Mm), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": u.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: o
                  }, {
                    default: wn(() => [
                      Ft(it(A6), { icon: it(Qs) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              S6(Ft(it(k), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [i, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              Ft(it(k), {
                shrink: "",
                class: "justify-center"
              }, {
                default: wn(() => [
                  Ft(it(Mm), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: wn(() => [
                      y6(Fm(u.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Ft(it(Wi))
        ]),
        default: wn(() => [
          Kf("div", b6, [
            e.captchaDetails.type === "image" ? (xc(), Nm("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, k6)) : (xc(), Nm("p", {
              key: 1,
              textContent: Fm(e.captchaDetails.question)
            }, null, 8, $6)),
            V6,
            Ft(it(N), { class: "ma-0" }, {
              default: wn(() => [
                Ft(it(k), null, {
                  default: wn(() => [
                    Ft(it(Mc), {
                      value: s.value,
                      "onUpdate:value": d[0] || (d[0] = (c) => s.value = c),
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
      }, 8, ["fullscreen"])) : x6("", !0);
    };
  }
};
const In = window.Vue.unref, Ri = window.Vue.createVNode, Ms = window.Vue.withCtx, Us = window.Vue.createElementVNode, P6 = window.Vue.resolveDirective, B6 = window.Vue.withDirectives, F6 = window.Vue.renderList, N6 = window.Vue.Fragment, Cc = window.Vue.openBlock, M6 = window.Vue.createElementBlock, Um = window.Vue.toDisplayString, Im = window.Vue.createTextVNode, U6 = window.Vue.isRef, I6 = window.Vue.normalizeClass, Rm = window.Vue.createBlock, R6 = { class: "mw-ui-dialog__header" }, z6 = { class: "row ma-0 px-4 py-3" }, O6 = { class: "col shrink justify-center" }, j6 = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, H6 = { class: "mb-0" }, q6 = { class: "pa-4" }, G6 = window.Codex.CdxField, X6 = window.Codex.CdxRadio, W6 = window.Vuex.useStore, zi = window.Vue.computed, K6 = window.Codex.CdxButton, Y6 = window.Codex.CdxIcon, Q6 = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, s = W6(), { target: o, PUBLISHING_TARGETS: a } = Rt(), r = zi(() => s.state.translator.isAnon), l = we(), { sourceSection: u } = ne(), { isCurrentSectionPresent: d } = Fe(), i = zi(
      () => u.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-label") : l.i18n("cx-sx-publisher-new-section-option-label")
    ), c = zi(
      () => u.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-details") : l.i18n("cx-sx-publisher-new-section-option-details")
    ), g = zi(() => {
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
      const f = P6("i18n");
      return Cc(), Rm(In(Ct), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: m.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: h[1] || (h[1] = (w) => m.$emit("update:active", w)),
        onClose: p
      }, {
        header: Ms(() => [
          Us("div", R6, [
            Us("div", z6, [
              Us("div", O6, [
                Ri(In(K6), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": m.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: p
                }, {
                  default: Ms(() => [
                    Ri(In(Y6), { icon: In(Mh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              Us("div", j6, [
                B6(Us("h4", H6, null, 512), [
                  [f, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            Ri(In(Wi))
          ])
        ]),
        default: Ms(() => [
          Us("div", q6, [
            Ri(In(G6), { "is-fieldset": "" }, {
              default: Ms(() => [
                (Cc(!0), M6(N6, null, F6(g.value, (w, v) => (Cc(), Rm(In(X6), {
                  key: "publish-options-radio-" + w.value,
                  modelValue: In(o),
                  "onUpdate:modelValue": [
                    h[0] || (h[0] = (y) => U6(o) ? o.value = y : null),
                    p
                  ],
                  class: I6(v < g.value.length - 1 ? "mb-4" : "mb-0"),
                  "input-value": w.value,
                  disabled: w.disabled,
                  name: "publish-options"
                }, {
                  description: Ms(() => [
                    Im(Um(w.description), 1)
                  ]),
                  default: Ms(() => [
                    Im(Um(w.label) + " ", 1)
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
const Nt = window.Vue.unref, zm = window.Vue.toDisplayString, Om = window.Vue.createElementVNode, J6 = window.Vue.resolveDirective, Is = window.Vue.createVNode, Z6 = window.Vue.withDirectives, Qo = window.Vue.withCtx, bc = window.Vue.openBlock, jm = window.Vue.createBlock, Hm = window.Vue.createCommentVNode, e9 = window.Vue.Fragment, t9 = window.Vue.createElementBlock, n9 = window.Vue.normalizeClass, s9 = ["textContent"], o9 = ["textContent"], Rs = window.Vue.computed, qm = window.Vue.ref, a9 = window.Vue.watch, Gm = window.Codex.CdxButton, Xm = window.Codex.CdxIcon, i9 = window.Codex.CdxMessage, r9 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = qm(0), s = qm(null);
    a9(s, () => {
      var m;
      const p = (m = s.value) == null ? void 0 : m.$el;
      if (p instanceof HTMLElement) {
        const h = p.querySelector("a");
        h && h.setAttribute("target", "_blank");
      }
    });
    const o = Rs(
      () => {
        var p;
        return (p = t.publishFeedbackMessages) == null ? void 0 : p[n.value];
      }
    ), a = Rs(() => {
      var p;
      return ((p = o.value) == null ? void 0 : p.status) || "notice";
    }), r = Rs(() => a.value === "notice"), l = Rs(
      () => `sx-publisher__review-info--${a.value}`
    ), u = we(), d = Rs(() => {
      var p;
      return (p = o.value) == null ? void 0 : p.text;
    }), i = Rs(() => {
      var p;
      return r.value ? u.i18n("cx-sx-publisher-review-info") : ((p = o.value) == null ? void 0 : p.title) || u.i18n("cx-sx-publisher-review-info-error");
    }), c = () => {
      const p = t.publishFeedbackMessages.length;
      n.value = (n.value - 1 + p) % p;
    }, g = () => {
      n.value = (n.value + 1) % t.publishFeedbackMessages.length;
    };
    return (p, m) => {
      const h = J6("i18n-html");
      return bc(), jm(Nt(i9), {
        type: a.value,
        class: n9(["sx-publisher__review-info", l.value]),
        icon: r.value ? Nt(JS) : null
      }, {
        default: Qo(() => [
          Om("h5", {
            textContent: zm(i.value)
          }, null, 8, s9),
          r.value ? Hm("", !0) : (bc(), t9(e9, { key: 0 }, [
            Om("p", {
              textContent: zm(d.value)
            }, null, 8, o9),
            Is(Nt(N), {
              justify: "between",
              class: "ma-0"
            }, {
              default: Qo(() => [
                Z6(Is(Nt(k), {
                  ref_key: "learnMoreContainer",
                  ref: s,
                  class: "sx-publisher__review-info__learn-more-anchor"
                }, null, 512), [
                  [h, void 0, "cx-sx-publisher-review-info-learn-more"]
                ]),
                e.publishFeedbackMessages.length > 1 ? (bc(), jm(Nt(k), {
                  key: 0,
                  class: "sx-publisher__review-info__navigation-buttons justify-end",
                  align: "center"
                }, {
                  default: Qo(() => [
                    Is(Nt(Gm), {
                      weight: "quiet",
                      class: "pa-0 me-1",
                      "aria-label": p.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                      onClick: c
                    }, {
                      default: Qo(() => [
                        Is(Nt(Xm), { icon: Nt(pu) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"]),
                    Is(Nt(Gm), {
                      weight: "quiet",
                      class: "pa-0 ms-1",
                      "aria-label": p.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                      onClick: g
                    }, {
                      default: Qo(() => [
                        Is(Nt(Xm), { icon: Nt(_a) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                })) : Hm("", !0)
              ]),
              _: 1
            })
          ], 64))
        ]),
        _: 1
      }, 8, ["type", "class", "icon"]);
    };
  }
}, l9 = (e) => {
  const t = document.createElement("article");
  return t.innerHTML = e, Array.prototype.forEach.call(
    t.querySelectorAll("article, section, [data-segmentid]"),
    (n) => {
      const s = n.parentNode;
      for (; n.firstChild; )
        s.insertBefore(n.firstChild, n);
      n.remove();
    }
  ), Array.prototype.forEach.call(t.querySelectorAll(".cx-link"), (n) => {
    var o;
    const s = JSON.parse(n.getAttribute("data-cx") || "{}");
    (s == null ? void 0 : s.adapted) === !1 && ((o = s == null ? void 0 : s.targetTitle) == null ? void 0 : o.missing) !== !0 ? n.replaceWith(...n.childNodes) : ["data-linkid", "class", "title", "id"].forEach((a) => {
      n.removeAttribute(a);
    });
  }), Array.prototype.forEach.call(t.querySelectorAll(".mw-ref"), (n) => {
    const s = JSON.parse(n.getAttribute("data-cx") || "{}");
    (s == null ? void 0 : s.adapted) === !1 && n.parentNode.removeChild(n);
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
}, c9 = window.Vuex.useStore, u9 = window.Vue.computed, d9 = () => {
  const e = c9(), { currentTranslation: t } = zt(), { currentMTProvider: n } = Le(e), { currentTargetPageTitle: s } = dt(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    sectionURLParameter: l
  } = D(), { sourceSection: u } = ne(), d = bt(), i = u9(() => {
    const m = {
      translation_source_language: o.value,
      translation_target_language: a.value,
      // DOCUMENTATION (https://github.com/wikimedia/schemas-event-secondary/blob/master/jsonschema/analytics/mediawiki/content_translation_event/1.4.0.yaml#L294)
      // translation_source_title:
      //   The title of the source article of the current translation. Applies only
      //   to events which relate to a specific translation or suggestion: all
      //   `editor_` and `publish_` events and some `dashboard_` events (e.g.
      //   `dashboard_start_translation`, `dashboard_delete_translation`)
      translation_source_title: r.value,
      // DOCUMENTATION (https://github.com/wikimedia/schemas-event-secondary/blob/master/jsonschema/analytics/mediawiki/content_translation_event/1.4.0.yaml#L301)
      // translation_target_exists:
      //   Whether the target article or section already exists. Applies only to
      //   events which relate to a specific translation or suggestion: all `editor_`
      //   and `publish_` events and some `dashboard_` events (e.g. `dashboard_start_translation`,
      //   `dashboard_delete_translation`). In section translation, if the user discards the mapping
      //   to an existing target section, the value should change to false in future events.
      translation_target_exists: !!s.value
    };
    if (l.value ? (m.translation_source_section = l.value, m.translation_type = "section") : m.translation_type = "article", t.value) {
      m.translation_id = t.value.translationId, m.translation_target_title = t.value.targetTitle;
      const h = t.value.targetSectionTitle;
      h && (m.translation_target_section = h);
    } else
      s.value && (m.translation_target_title = s.value);
    return n.value && (m.translation_provider = re.getProviderForInstrumentation(n.value)), m.human_modification_rate = Zt.getMTScoreForPageSection(
      u.value,
      a.value
    ) / 100, m.human_modification_threshold = Zt.getMtModificationThreshold(), m;
  });
  return {
    logPublishAttemptEvent: () => d(pe({
      event_type: "publish_attempt"
    }, i.value)),
    logPublishSuccessEvent: (m, h) => d(pe({
      event_type: "publish_success",
      published_page_id: m,
      published_revision_id: h
    }, i.value)),
    logPublishFailureEvent: () => d(pe({
      event_type: "publish_failure"
    }, i.value))
  };
}, g9 = window.Vue.computed, Wm = window.Vue.ref, p9 = window.Vuex.useStore, m9 = () => {
  const e = p9(), {
    pageURLParameter: t,
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: s
  } = D(), { sourceSection: o, targetPageTitleForPublishing: a } = ne(), r = Hf(), { sectionSuggestion: l } = Fe(), u = g9(
    () => {
      var S, b;
      return (b = l.value) == null ? void 0 : b.presentSections[(S = o.value) == null ? void 0 : S.sourceSectionTitleForPublishing];
    }
  ), { target: d, PUBLISHING_TARGETS: i } = Rt(), c = Wm(!1), g = Wm("pending"), p = () => c.value = !1, m = $u(), {
    logPublishAttemptEvent: h,
    logPublishSuccessEvent: f,
    logPublishFailureEvent: w
  } = d9(), v = (S, b) => C(void 0, null, function* () {
    h();
    const E = yield m();
    if (E instanceof jn)
      return w(), { publishFeedbackMessage: E, targetUrl: null };
    const x = E, I = a.value, L = {
      html: l9(o.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: I,
      sourceSectionTitle: o.value.sourceSectionTitleForPublishing,
      targetSectionTitle: o.value.targetSectionTitleForPublishing,
      sourceLanguage: n.value,
      targetLanguage: s.value,
      revision: r.value,
      isSandbox: d.value === i.SANDBOX,
      sectionTranslationId: x
    };
    u.value && d.value === i.EXPAND && (L.existingSectionTitle = u.value), S && (L.captchaId = S, L.captchaWord = b);
    const P = yield xt.publishTranslation(
      L
    );
    return P.publishFeedbackMessage === null ? f(P.pageId, P.revisionId) : w(), P;
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
        if (x instanceof Gs)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw x;
      }
      return E;
    }),
    isPublishDialogActive: c,
    publishStatus: g
  };
}, h9 = window.Vue.computed, f9 = () => {
  const e = Ze(), { sourceSection: t } = ne(), { getCurrentTitleByLanguage: n } = bn(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: o
  } = D(), a = h9(
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
        o.value,
        s.value
      ),
      isFinalEdit: !0
    }
  });
}, w9 = () => {
  const { targetLanguageURLParameter: e } = D(), { sourceSection: t } = ne();
  return () => {
    const n = Zt.getMTScoreForPageSection(
      t.value,
      e.value
    ), s = Zt.getScoreStatus(n);
    if (s === "success")
      return null;
    const o = 100 - n, a = s === "failure" ? "error" : "warning";
    let r, l;
    return a === "warning" ? (r = mw.message("cx-sx-publisher-mt-abuse-message-title", o).plain(), l = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (r = mw.message("cx-sx-publisher-mt-abuse-error-title", o).plain(), l = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new jn({
      title: r,
      text: l,
      status: a,
      type: "mt"
    });
  };
}, v9 = window.Vue.ref, _9 = window.Vue.computed, S9 = () => {
  const e = w9(), { target: t, PUBLISHING_TARGETS: n } = Rt(), { targetPageTitleForPublishing: s } = ne(), o = v9([]), a = _9(
    () => o.value.some((d) => d.isError)
  ), r = (d) => {
    o.value.push(d), o.value.sort((i, c) => +c.isError - +i.isError);
  };
  return {
    addPublishFeedbackMessage: r,
    clearPublishFeedbackMessages: () => {
      o.value = [];
    },
    publishFeedbackMessages: o,
    isPublishingDisabled: a,
    initializePublishFeedbackMessages: () => {
      if (!Xf() && t.value !== n.SANDBOX) {
        const i = new jn({
          text: mw.message("cx-publish-permission-error").text(),
          title: mw.message("cx-publish-permission-error-title").text(),
          type: "generic",
          status: "error"
        });
        r(i);
      }
      const d = e();
      d && r(d), mw.Title.newFromText(s.value) || r(
        new jn({
          text: mw.message("cx-tools-linter-invalid-character-message").text(),
          title: mw.message("cx-tools-linter-invalid-character").text(),
          type: "generic",
          status: "error"
        })
      );
    }
  };
}, y9 = () => {
  const { target: e, PUBLISHING_TARGETS: t } = Rt(), { currentSourcePage: n } = dt(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: o
  } = D(), { sourceSection: a, targetPageTitleForPublishing: r } = ne();
  return (l) => C(void 0, null, function* () {
    const u = r.value, d = n.value.title, i = new mw.Title(d), c = mw.config.get("wgNamespaceIds");
    if (a.value.isLeadSection && e.value !== t.SANDBOX && i.getNamespaceId() !== c.user)
      try {
        yield nr.addWikibaseLink(
          s.value,
          o.value,
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
}, Km = window.Vue.ref, x9 = () => {
  const e = Km(!1), t = Km(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (o) => o && o.type === "captcha" ? (t.value = o.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const ue = window.Vue.unref, qe = window.Vue.createVNode, C9 = window.Vue.resolveDirective, Ym = window.Vue.withDirectives, kc = window.Vue.openBlock, $c = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const os = window.Vue.createElementVNode, Qm = window.Vue.toDisplayString, b9 = window.Vue.createTextVNode, zs = window.Vue.withCtx, Jm = window.Vue.normalizeClass, k9 = { class: "sx-publisher" }, $9 = {
  key: 0,
  class: "mb-2"
}, V9 = {
  key: 1,
  class: "sx-publisher__publish-panel__existing-target-section px-4 pb-4"
}, E9 = ["href"], L9 = ["innerHTML"], T9 = { class: "sx-publisher__section-preview pa-5" }, A9 = ["innerHTML"], Oi = window.Vue.computed, D9 = window.Vue.onMounted, P9 = window.Vue.ref, B9 = window.Vue.watch, Zm = window.Codex.CdxButton, Vc = window.Codex.CdxIcon, F9 = {
  __name: "SXPublisher",
  setup(e) {
    const { sourceSection: t } = ne(), { sectionSuggestion: n, isCurrentSectionPresent: s } = Fe(), {
      targetLanguageURLParameter: o,
      sectionURLParameter: a
    } = D(), r = Oi(() => {
      var R;
      return (R = t.value) == null ? void 0 : R.title;
    }), l = we(), { target: u, PUBLISHING_TARGETS: d } = Rt(), i = Oi(() => u.value === d.SANDBOX ? l.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : u.value === d.EXPAND ? l.i18n(
      "cx-sx-publisher-publish-panel-expand-section-result"
    ) : t.value.isLeadSection ? l.i18n("cx-sx-publisher-publish-panel-lead-section-result") : l.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: c,
      captchaDialogOn: g,
      handleCaptchaError: p,
      onCaptchaDialogClose: m
    } = x9(), {
      publishFeedbackMessages: h,
      isPublishingDisabled: f,
      addPublishFeedbackMessage: w,
      clearPublishFeedbackMessages: v,
      initializePublishFeedbackMessages: y
    } = S9(), S = y9(), { doPublish: b, isPublishDialogActive: E, publishStatus: x, closePublishDialog: I } = m9(), L = (R = null) => C(this, null, function* () {
      if (f.value)
        return;
      const J = yield b(R, c.value);
      if (!J)
        return;
      const { publishFeedbackMessage: oe, targetUrl: le } = J;
      if (p(oe)) {
        I();
        return;
      } else
        oe && w(oe);
      x.value = f.value ? "failure" : "success", setTimeout(() => {
        if (f.value) {
          I();
          return;
        }
        S(le);
      }, 1e3);
    });
    D9(() => y());
    const P = f9(), H = P9(!1), se = () => H.value = !0;
    B9(H, (R) => {
      R || (v(), y());
    });
    const ae = Oi(
      () => {
        var R, J;
        return (J = (R = n.value) == null ? void 0 : R.presentSections) == null ? void 0 : J[a.value];
      }
    ), te = Oi(() => {
      var oe;
      const R = K.getPageUrl(
        o.value,
        (oe = n.value) == null ? void 0 : oe.targetTitle
      ), J = (ae.value || "").replace(
        / /g,
        "_"
      );
      return `${R}#${J}`;
    });
    return (R, J) => {
      const oe = C9("i18n");
      return kc(), $c("section", k9, [
        qe(c6, {
          "is-publishing-disabled": ue(f),
          onPublishTranslation: L
        }, null, 8, ["is-publishing-disabled"]),
        os("div", {
          class: Jm(["sx-publisher__publish-panel", ue(s) ? "py-4" : "pa-4"])
        }, [
          ue(s) ? (kc(), $c("div", V9, [
            Ym(os("h5", null, null, 512), [
              [oe, void 0, "cx-sx-publisher-publish-panel-existing-section-notice"]
            ]),
            os("a", {
              class: "sx-publisher__publish-panel__existing-target-section-link py-2 px-3 mt-4",
              href: te.value,
              target: "_blank"
            }, [
              b9(Qm(ae.value) + " ", 1),
              qe(ue(Vc), { icon: ue(sr) }, null, 8, ["icon"])
            ], 8, E9)
          ])) : Ym((kc(), $c("h5", $9, null, 512)), [
            [oe, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          os("div", {
            class: Jm({ "px-4 mt-4": ue(s) })
          }, [
            os("h6", {
              class: "sx-publisher__publish-panel__expected-publishing-result mb-2",
              innerHTML: i.value
            }, null, 8, L9),
            qe(ue(N), {
              justify: "end",
              class: "ma-0"
            }, {
              default: zs(() => [
                qe(ue(k), { shrink: "" }, {
                  default: zs(() => [
                    qe(ue(Zm), {
                      weight: "quiet",
                      "aria-label": R.$i18n("cx-sx-publisher-configure-button-aria-label"),
                      onClick: se
                    }, {
                      default: zs(() => [
                        qe(ue(Vc), { icon: ue(ly) }, null, 8, ["icon"])
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
        qe(r9, { "publish-feedback-messages": ue(h) }, null, 8, ["publish-feedback-messages"]),
        os("section", T9, [
          qe(ue(N), { class: "pb-5 ma-0" }, {
            default: zs(() => [
              qe(ue(k), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                textContent: Qm(r.value)
              }, null, 8, ["textContent"]),
              qe(ue(k), { shrink: "" }, {
                default: zs(() => [
                  qe(ue(Zm), {
                    weight: "quiet",
                    "aria-label": R.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: ue(P)
                  }, {
                    default: zs(() => [
                      qe(ue(Vc), { icon: ue(du) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label", "onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          os("div", {
            innerHTML: ue(t).translationHtml
          }, null, 8, A9)
        ]),
        qe(Q6, {
          active: H.value,
          "onUpdate:active": J[0] || (J[0] = (le) => H.value = le)
        }, null, 8, ["active"]),
        qe(D6, {
          active: ue(g),
          "captcha-details": ue(c),
          onClose: ue(m),
          onPublish: J[1] || (J[1] = (le) => L(le))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        qe(v6, {
          active: ue(E),
          status: ue(x)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const N9 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: F9
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, M9 = window.Vue.resolveComponent, U9 = window.Vue.createVNode, I9 = window.Vue.normalizeClass, R9 = window.Vue.openBlock, z9 = window.Vue.createElementBlock;
function O9(e, t, n, s, o, a) {
  const r = M9("sx-publisher");
  return R9(), z9("main", {
    class: I9(["sx-publisher-view", a.classes])
  }, [
    U9(r)
  ], 2);
}
const j9 = /* @__PURE__ */ de(N9, [["render", O9]]);
const Mt = window.Vue.unref, Rn = window.Vue.createVNode, as = window.Vue.withCtx, Ec = window.Vue.toDisplayString, Lc = window.Vue.createElementVNode, H9 = window.Vue.openBlock, q9 = window.Vue.createBlock, G9 = ["textContent"], X9 = ["textContent"], W9 = ["textContent"], Yf = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: Ws,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (H9(), q9(Mt(N), {
      class: "cx-search-suggestion px-4 py-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: Mt(j.getDir)(e.suggestion.language)
    }, {
      default: as(() => [
        Rn(Mt(k), { shrink: "" }, {
          default: as(() => [
            Rn(Mt(Kc), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        Rn(Mt(k), { class: "ms-4" }, {
          default: as(() => [
            Rn(Mt(N), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: as(() => [
                Rn(Mt(k), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: as(() => [
                    Lc("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: Ec(e.suggestion.title)
                    }, null, 8, G9)
                  ]),
                  _: 1
                }),
                Rn(Mt(k), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: as(() => [
                    Lc("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: Ec(e.suggestion.description)
                    }, null, 8, X9)
                  ]),
                  _: 1
                }),
                Rn(Mt(k), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: as(() => [
                    Rn(Mt(Je), {
                      icon: Mt(P0),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    Lc("small", {
                      textContent: Ec((e.suggestion.langLinksCount || 0) + 1)
                    }, null, 8, W9)
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
const Jo = window.Vue.unref, Zo = window.Vue.openBlock, Tc = window.Vue.createBlock, K9 = window.Vue.createCommentVNode, Y9 = window.Vue.resolveDirective, Q9 = window.Vue.withDirectives, eh = window.Vue.createElementBlock, J9 = window.Vue.renderList, Z9 = window.Vue.Fragment, eP = window.Vue.normalizeClass, tP = window.Vue.withCtx, nP = {
  key: 1,
  class: "sx-article-search__empty-state"
}, th = window.Vue.computed, sP = window.Vue.ref, oP = {
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
    const { sourceLanguageURLParameter: t } = D(), n = th(() => j.getAutonym(t.value)), s = e, o = sP(null), a = (c) => o.value = c, r = () => o.value = null, l = (c) => {
      var g;
      return ((g = s.selectedItem) == null ? void 0 : g.title) === c.title && !o.value || o.value === c.pageId;
    }, u = th(() => s.searchInput), { searchResultsLoading: d, searchResultsSlice: i } = _u(
      t,
      u
    );
    return (c, g) => {
      const p = Y9("i18n");
      return Zo(), Tc(Jo(Qe), { class: "sx-article-search__results mb-0 pa-0" }, {
        default: tP(() => [
          Jo(d) ? (Zo(), Tc(Jo(ct), {
            key: 0,
            class: "sx-article-search__empty-state"
          })) : Jo(i).length === 0 ? Q9((Zo(), eh("p", nP, null, 512)), [
            [p, [
              u.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : K9("", !0),
          (Zo(!0), eh(Z9, null, J9(Jo(i), (m) => (Zo(), Tc(Yf, {
            key: m.pageId,
            suggestion: m,
            class: eP({
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
const aP = window.Vue.toDisplayString, iP = window.Vue.createElementVNode, rP = window.Vue.renderList, lP = window.Vue.Fragment, Ac = window.Vue.openBlock, cP = window.Vue.createElementBlock, uP = window.Vue.normalizeClass, nh = window.Vue.createBlock, dP = window.Vue.unref, sh = window.Vue.withCtx, gP = ["textContent"], pP = window.Vue.ref, oh = {
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
    const n = e, s = pP(null), o = (l) => s.value = l, a = () => s.value = null, r = (l) => {
      var u;
      return ((u = n.selectedItem) == null ? void 0 : u.title) === l.title && !s.value || s.value === l.pageId;
    };
    return (l, u) => (Ac(), nh(dP(Qe), { class: "sx-article-search__suggestions pa-0" }, {
      header: sh(() => [
        iP("h5", {
          class: "ma-0 px-4 pb-1 sx-article-search__suggestions-header",
          textContent: aP(e.cardTitle)
        }, null, 8, gP)
      ]),
      default: sh(() => [
        (Ac(!0), cP(lP, null, rP(e.suggestions, (d) => (Ac(), nh(Yf, {
          key: d.pageId,
          suggestion: d,
          class: uP({
            "sx-article-search__suggestions-selected": r(d)
          }),
          onMouseenter: (i) => o(d.pageId),
          onMouseleave: a,
          onClick: (i) => l.$emit("suggestion-clicked", d)
        }, null, 8, ["suggestion", "class", "onMouseenter", "onClick"]))), 128))
      ]),
      _: 1
    }));
  }
}, mP = window.Vue.computed, hP = (e, t) => e.length === t.length && e.every((n) => t.includes(n)) && t.every((n) => e.includes(n)), ah = "other", fP = (e) => mP((t) => {
  const s = e.value.slice(0, 3), o = {
    value: ah,
    props: {
      icon: M0,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  }, a = (t || []).map((l) => l.value).filter((l) => l !== ah);
  return hP(a, s) ? t : [...s.map((l) => ({
    value: l,
    props: {
      label: j.getAutonym(l),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), o];
}), wP = window.Vue.computed, vP = () => {
  const { supportedSourceLanguageCodes: e } = fa(), { targetLanguageURLParameter: t } = D();
  return { getSuggestedSourceLanguages: (s) => wP(() => {
    const o = (navigator.language || "").split("-")[0], a = (mw.config.get("wgULSAcceptLanguageList") || navigator.languages || []).map((l) => l.split("-")[0]), r = [
      ...s.value,
      // User's current interface language
      mw.config.get("wgUserLanguage"),
      // Current wiki's content language
      mw.config.get("wgContentLanguage"),
      o,
      ...a
    ];
    return [...new Set(r)].filter(
      (l) => l !== t.value && e.value.includes(l)
    );
  }) };
}, _P = window.Vue.ref, SP = () => {
  const e = _P([]), t = () => {
    try {
      const o = mw.storage.get("cxPreviousLanguages");
      o && e.value.push(...JSON.parse(o));
    } catch (o) {
    }
  }, n = () => {
    mw.storage.set(
      "cxPreviousLanguages",
      JSON.stringify(e.value)
    );
  }, s = (o) => {
    o && (e.value = [
      o,
      ...e.value.filter((a) => a !== o)
    ], n());
  };
  return t(), {
    previousLanguages: e,
    addLanguageToHistory: s
  };
};
const yP = window.Vue.resolveDirective, xP = window.Vue.createElementVNode, Dc = window.Vue.withDirectives, fe = window.Vue.unref, ea = window.Vue.withCtx, Qt = window.Vue.createVNode, ta = window.Vue.openBlock, ih = window.Vue.createBlock, CP = window.Vue.createCommentVNode, Pc = window.Vue.createElementBlock, bP = window.Vue.Fragment, kP = window.Vue.vShow, na = window.Vue.withModifiers, sa = window.Vue.withKeys, $P = ["onKeydown"], VP = { class: "mb-0" }, EP = {
  key: 2,
  class: "sx-article-search__empty-state"
}, oa = window.Vue.ref, LP = window.Vue.onMounted, aa = window.Vue.computed, rh = window.Vue.watch, TP = window.Vue.inject, AP = window.Vuex.useStore, DP = window.Codex.CdxButton, PP = window.Codex.CdxIcon, BP = window.Codex.CdxSearchInput, FP = 3, NP = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = oa(""), n = oa(!1), s = oa(null), o = oa(!1), { previousLanguages: a, addLanguageToHistory: r } = SP(), l = AP(), {
      sourceLanguageURLParameter: u,
      targetLanguageURLParameter: d
    } = D(), { supportedSourceLanguageCodes: i } = fa(), { searchResultsSlice: c } = _u(u, t), { getSuggestedSourceLanguages: g } = vP(), p = g(a), m = fP(
      p
    ), h = Ze(), { fetchAllTranslations: f } = Js();
    LP(() => C(this, null, function* () {
      var B;
      f(), r(u.value), (B = s.value) == null || B.focus();
    }));
    const w = () => {
      h.push({ name: "dashboard" });
    }, v = Gh(), y = (B) => {
      v(B, d.value), r(B);
    }, S = (B) => {
      if (B === "other") {
        o.value = !0;
        return;
      }
      y(B);
    };
    rh(
      u,
      () => {
        var B;
        l.dispatch("mediawiki/fetchNearbyPages"), (B = s.value) == null || B.focus();
      },
      { immediate: !0 }
    );
    const b = bt();
    rh(t, () => {
      n.value || (n.value = !0, b({
        event_type: "dashboard_search",
        translation_source_language: u.value,
        translation_target_language: d.value
      }));
    });
    const E = () => {
      o.value = !1;
    }, x = (B) => {
      o.value = !1, S(B);
    }, { fetchPreviousEditsInSource: I, previousEditsInSource: L } = Dh(), P = oa([]);
    (() => I().then(() => L.value.length > 0 ? cs.fetchPages(
      u.value,
      L.value
    ) : []).then((B) => {
      B = B.slice(0, FP), B = B.sort(
        (M, Y) => L.value.indexOf(M.title) - L.value.indexOf(Y.title)
      ), P.value = B;
    }))();
    const se = aa(() => l.getters["mediawiki/getNearbyPages"]), ae = TP("breakpoints"), te = aa(() => ae.value.mobile), R = Sa(), J = aa(
      () => P.value && P.value.length
    ), oe = aa(
      () => se.value && se.value.length
    ), { next: le, prev: ke, keyboardNavigationContainer: We, selectedItem: Pe } = $f(t, c, P), Z = (B) => R(
      B.title,
      u.value,
      d.value,
      U.value
    ), U = aa(() => t.value ? "search_result" : J.value ? "suggestion_recent_edit" : oe.value ? "suggestion_nearby" : "");
    return (B, M) => {
      const Y = yP("i18n");
      return ta(), Pc("section", {
        ref_key: "keyboardNavigationContainer",
        ref: We,
        class: "sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto",
        onKeydown: [
          M[5] || (M[5] = sa(na((..._) => fe(le) && fe(le)(..._), ["stop", "prevent"]), ["tab"])),
          M[6] || (M[6] = sa(na((..._) => fe(le) && fe(le)(..._), ["stop", "prevent"]), ["down"])),
          M[7] || (M[7] = sa(na((..._) => fe(ke) && fe(ke)(..._), ["stop", "prevent"]), ["up"])),
          sa(na(w, ["stop", "prevent"]), ["esc"]),
          M[8] || (M[8] = sa(na((_) => Z(fe(Pe)), ["stop", "prevent"]), ["enter"]))
        ]
      }, [
        Qt(fe(N), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: ea(() => [
            Qt(fe(k), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: ea(() => [
                Dc(xP("h5", VP, null, 512), [
                  [Y, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            Qt(fe(k), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: ea(() => [
                Qt(fe(DP), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": B.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: w
                }, {
                  default: ea(() => [
                    Qt(fe(PP), { icon: fe(Qs) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Qt(fe(BP), {
          ref_key: "searchInputRef",
          ref: s,
          modelValue: t.value,
          "onUpdate:modelValue": M[0] || (M[0] = (_) => t.value = _),
          class: "sx-article-search__search-input",
          placeholder: B.$i18n("cx-sx-article-search-input-placeholder")
        }, null, 8, ["modelValue", "placeholder"]),
        Qt(fe(pa), {
          class: "sx-article-search__language-button-group",
          items: fe(m),
          active: fe(u),
          onSelect: S
        }, null, 8, ["items", "active"]),
        t.value ? CP("", !0) : (ta(), Pc(bP, { key: 0 }, [
          J.value ? (ta(), ih(oh, {
            key: 0,
            "card-title": B.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: P.value,
            "selected-item": fe(Pe),
            onSuggestionClicked: M[1] || (M[1] = (_) => Z(_))
          }, null, 8, ["card-title", "suggestions", "selected-item"])) : oe.value ? (ta(), ih(oh, {
            key: 1,
            "card-title": B.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: se.value,
            onSuggestionClicked: M[2] || (M[2] = (_) => Z(_))
          }, null, 8, ["card-title", "suggestions"])) : Dc((ta(), Pc("p", EP, null, 512)), [
            [Y, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        Dc(Qt(oP, {
          "search-input": t.value,
          "selected-item": fe(Pe),
          onSuggestionClicked: M[3] || (M[3] = (_) => Z(_))
        }, null, 8, ["search-input", "selected-item"]), [
          [kP, !!t.value]
        ]),
        Qt(fe(Ct), {
          value: o.value,
          "onUpdate:value": M[4] || (M[4] = (_) => o.value = _),
          class: "sx-article-search-language-selector",
          fullscreen: te.value,
          header: te.value,
          title: B.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: E
        }, {
          default: ea(() => [
            Qt(fe(Vf), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: fe(i),
              suggestions: fe(p),
              placeholder: B.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: x,
              onClose: E
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ], 40, $P);
    };
  }
};
const MP = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: NP
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.mobile })
  }
}, UP = window.Vue.resolveComponent, IP = window.Vue.createVNode, RP = window.Vue.normalizeClass, zP = window.Vue.openBlock, OP = window.Vue.createElementBlock;
function jP(e, t, n, s, o, a) {
  const r = UP("sx-article-search");
  return zP(), OP("main", {
    class: RP(["sx-article-search-view", a.classes])
  }, [
    IP(r)
  ], 2);
}
const HP = /* @__PURE__ */ de(MP, [["render", jP]]), qP = () => {
  const e = Sa(), t = Cu(), { logDashboardOpenEvent: n } = Pf(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: o,
    pageURLParameter: a
  } = D();
  return () => C(void 0, null, function* () {
    return t(s.value, a.value).then(
      () => n()
    ), e(
      a.value,
      s.value,
      o.value,
      "direct_preselect",
      null,
      !1
    );
  });
}, GP = window.Vuex.useStore, XP = [
  {
    path: "",
    name: "dashboard",
    component: np,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: HP,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: YE,
    meta: { workflowStep: 1 },
    beforeEnter: () => {
      const {
        sourceLanguageURLParameter: e,
        targetLanguageURLParameter: t,
        pageURLParameter: n
      } = D();
      return !!(e.value && t.value && n.value);
    }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: p3,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: k5,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: _D,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: OA,
    meta: { workflowStep: 4 },
    beforeEnter: () => {
      const {
        sourceLanguageURLParameter: e,
        targetLanguageURLParameter: t,
        pageURLParameter: n
      } = D();
      return !!(e.value && t.value && n.value);
    }
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
    component: j9,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: np,
    meta: { workflowStep: 0 }
  }
], Vu = KC({
  history: Wx(),
  routes: XP
}), Bc = (e, t, n) => {
  e === t ? n() : n({ name: t });
}, WP = (e, t, n) => {
  let s = "cx_" + btoa(
    encodeURIComponent([n, e, t].join("_"))
  );
  return s = s.replace(/[()<>@,;\\[\]?={}]/g, ""), mw.cookie.get(s, "");
};
Vu.beforeEach((e, t, n) => {
  const s = GP();
  if (mw.user.isAnon() || gh.assertUser().catch((i) => {
    i instanceof Gs && s.commit("application/setIsLoginDialogOn", !0);
  }), s.commit("application/setPreviousRoute", t.name), t.name) {
    n();
    return;
  }
  const o = qP(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    clearTranslationURLParameters: u
  } = D();
  if (!!(a.value && r.value && l.value)) {
    if (WP(
      a.value,
      r.value,
      l.value
    )) {
      const c = e.name === "sx-quick-tutorial" ? "sx-quick-tutorial" : "sx-sentence-selector";
      Bc(e.name, c, n);
    } else
      e.name === "sx-translation-confirmer" && o(), Bc(e.name, "sx-translation-confirmer", n);
    return;
  }
  u(), Bc(e.name, "dashboard", n);
});
Vu.afterEach((e, t) => {
  if (!t.name)
    return;
  const n = e.meta.workflowStep, s = t.meta.workflowStep;
  e.meta.transitionName = n < s ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
/*!
 * Plugin that captures errors from Vue code and logs them to error.contenttranslation
 *
 * Based on mediawiki/resources/src/vue/errorLogger.js
 */
const KP = {
  install: function(e) {
    e.config.errorHandler = function(t) {
      mw.errorLogger.logError(t, "error.contenttranslation"), mw.log.error(t);
    };
  }
}, YP = window.Vue.createApp, QP = mw.config.get("wgUserLanguage"), JP = "en", ZP = mw.messages.values || {}, ds = YP(Uy);
ds.use(Vu);
ds.use(fx);
ds.use(iv);
ds.use(av);
const eB = Mv({
  locale: QP,
  finalFallback: JP,
  messages: ZP,
  wikilinks: !0
});
ds.use(eB);
ds.use(KP);
ds.mount("#contenttranslation");
