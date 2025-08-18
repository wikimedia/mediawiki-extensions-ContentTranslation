var ew = Object.defineProperty, tw = Object.defineProperties;
var nw = Object.getOwnPropertyDescriptors;
var Lu = Object.getOwnPropertySymbols;
var ow = Object.prototype.hasOwnProperty, sw = Object.prototype.propertyIsEnumerable;
var Tu = (e, t, n) => t in e ? ew(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, pe = (e, t) => {
  for (var n in t || (t = {}))
    ow.call(t, n) && Tu(e, n, t[n]);
  if (Lu)
    for (var n of Lu(t))
      sw.call(t, n) && Tu(e, n, t[n]);
  return e;
}, tt = (e, t) => tw(e, nw(t));
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
const de = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, aw = {
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
}, iw = window.Vue.toDisplayString, mr = window.Vue.openBlock, hr = window.Vue.createElementBlock, rw = window.Vue.createCommentVNode, Au = window.Vue.createElementVNode, lw = window.Vue.normalizeClass, cw = ["width", "height", "aria-labelledby"], uw = ["id"], dw = ["fill"], gw = ["d"];
function pw(e, t, n, o, s, a) {
  return mr(), hr("span", {
    class: lw(["mw-ui-icon notranslate", a.classes])
  }, [
    (mr(), hr("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...r) => a.handleClick && a.handleClick(...r))
    }, [
      n.iconName ? (mr(), hr("title", {
        key: 0,
        id: n.iconName
      }, iw(n.iconName), 9, uw)) : rw("", !0),
      Au("g", { fill: n.iconColor }, [
        Au("path", { d: a.iconImagePath }, null, 8, gw)
      ], 8, dw)
    ], 8, cw))
  ], 2);
}
const Je = /* @__PURE__ */ de(aw, [["render", pw]]);
const hw = {
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
}, fw = window.Vue.renderSlot, ww = window.Vue.resolveComponent, Du = window.Vue.normalizeClass, ka = window.Vue.openBlock, fr = window.Vue.createBlock, wr = window.Vue.createCommentVNode, vw = window.Vue.toDisplayString, _w = window.Vue.createElementBlock, Sw = window.Vue.toHandlerKey, yw = window.Vue.withModifiers, xw = window.Vue.mergeProps, Cw = window.Vue.createElementVNode, bw = window.Vue.resolveDynamicComponent, kw = window.Vue.withCtx, $w = { class: "mw-ui-button__content" }, Vw = ["textContent"];
function Ew(e, t, n, o, s, a) {
  const r = ww("mw-icon");
  return ka(), fr(bw(a.component), {
    class: Du(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: kw(() => [
      fw(e.$slots, "default", {}, () => [
        Cw("span", $w, [
          n.icon ? (ka(), fr(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: Du(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : wr("", !0),
          !a.isIcon && n.label ? (ka(), _w("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: vw(n.label)
          }, null, 8, Vw)) : wr("", !0),
          n.indicator ? (ka(), fr(r, xw({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [Sw(a.indicatorClickEvent)]: t[0] || (t[0] = yw((l) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : wr("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const Ge = /* @__PURE__ */ de(hw, [["render", Ew]]);
const Lw = {
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
}, Tw = window.Vue.renderList, Aw = window.Vue.Fragment, vr = window.Vue.openBlock, Pu = window.Vue.createElementBlock, Dw = window.Vue.resolveComponent, Pw = window.Vue.withModifiers, Bw = window.Vue.mergeProps, Fw = window.Vue.createBlock, Nw = { class: "row mw-ui-button-group ma-0 pa-0" };
function Mw(e, t, n, o, s, a) {
  const r = Dw("mw-button");
  return vr(), Pu("div", Nw, [
    (vr(!0), Pu(Aw, null, Tw(n.items, (l) => (vr(), Fw(r, Bw({
      key: l.value,
      value: l.value,
      "aria-selected": a.isActive(l) || null,
      ref_for: !0
    }, l.props, {
      class: ["ma-0", a.buttonClasses(l)],
      style: a.activeIndicatorStyle(l),
      onClick: Pw((u) => e.$emit("select", l.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const pa = /* @__PURE__ */ de(Lw, [["render", Mw]]);
const Uw = {
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
}, Bu = window.Vue.renderSlot, Iw = window.Vue.toDisplayString, Fu = window.Vue.openBlock, Nu = window.Vue.createElementBlock, Rw = window.Vue.createCommentVNode, zw = window.Vue.createElementVNode, Ow = { class: "mw-ui-card" }, Hw = ["textContent"], jw = { class: "mw-ui-card__content" };
function qw(e, t, n, o, s, a) {
  return Fu(), Nu("div", Ow, [
    Bu(e.$slots, "header", {}, () => [
      n.title ? (Fu(), Nu("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: Iw(n.title)
      }, null, 8, Hw)) : Rw("", !0)
    ]),
    zw("div", jw, [
      Bu(e.$slots, "default")
    ])
  ]);
}
const Qe = /* @__PURE__ */ de(Uw, [["render", qw]]);
const Gw = {}, Xw = window.Vue.openBlock, Ww = window.Vue.createElementBlock, Kw = { class: "mw-ui-divider row" };
function Yw(e, t) {
  return Xw(), Ww("div", Kw);
}
const qi = /* @__PURE__ */ de(Gw, [["render", Yw]]);
const Qw = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, Jw = window.Vue.renderSlot, Zw = window.Vue.resolveDynamicComponent, e0 = window.Vue.withCtx, t0 = window.Vue.openBlock, n0 = window.Vue.createBlock;
function o0(e, t, n, o, s, a) {
  return t0(), n0(Zw(n.tag), { class: "mw-grid container" }, {
    default: e0(() => [
      Jw(e.$slots, "default")
    ]),
    _: 3
  });
}
const s0 = /* @__PURE__ */ de(Qw, [["render", o0]]), a0 = {
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
}, i0 = window.Vue.renderSlot, r0 = window.Vue.resolveDynamicComponent, l0 = window.Vue.normalizeClass, c0 = window.Vue.withCtx, u0 = window.Vue.openBlock, d0 = window.Vue.createBlock;
function g0(e, t, n, o, s, a) {
  return u0(), d0(r0(n.tag), {
    class: l0(a.classes)
  }, {
    default: c0(() => [
      i0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const N = /* @__PURE__ */ de(a0, [["render", g0]]), Bc = ["mobile", "tablet", "desktop", "desktop-wide"], p0 = Bc.reduce(
  (e, t) => tt(pe({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), m0 = {
  name: "MwCol",
  props: tt(pe({}, p0), {
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
      for (let n = 0; n < Bc.length; n++) {
        let o = Bc[n], s = this.$props[o];
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
}, h0 = window.Vue.renderSlot, f0 = window.Vue.resolveDynamicComponent, w0 = window.Vue.normalizeClass, v0 = window.Vue.withCtx, _0 = window.Vue.openBlock, S0 = window.Vue.createBlock;
function y0(e, t, n, o, s, a) {
  return _0(), S0(f0(n.tag), {
    class: w0(a.classes)
  }, {
    default: v0(() => [
      h0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const k = /* @__PURE__ */ de(m0, [["render", y0]]), x0 = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", C0 = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", Gi = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", b0 = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, k0 = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", ih = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", $0 = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", V0 = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", Xi = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", E0 = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", L0 = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", T0 = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", Mu = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", A0 = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", rh = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", D0 = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", P0 = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", B0 = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", F0 = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", N0 = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", Fc = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, M0 = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, U0 = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, lh = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", I0 = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z";
const _r = window.Vue.computed, R0 = window.Vue.watch, z0 = window.Vue.ref, O0 = window.Vue.nextTick, H0 = {
  name: "MwDialog",
  components: {
    MwButton: Ge,
    MwRow: N,
    MwCol: k,
    MwDivider: qi
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
    const n = z0(null), o = _r(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = _r(
      () => `mw-ui-dialog__overlay--${e.overlayMode}`
    ), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, r = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    R0(
      () => e.value,
      (u) => {
        u ? (r(), O0(() => {
          n.value.focus();
        })) : a();
      }
    );
    const l = _r(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: l,
      overlayClass: s,
      mwIconClose: Xi,
      root: n
    };
  }
}, Uu = window.Vue.normalizeClass, Sr = window.Vue.createElementVNode, yr = window.Vue.renderSlot, $a = window.Vue.resolveComponent, rs = window.Vue.createVNode, xr = window.Vue.withCtx, Iu = window.Vue.createCommentVNode, j0 = window.Vue.withKeys, Ru = window.Vue.openBlock, q0 = window.Vue.createElementBlock, G0 = window.Vue.Transition, X0 = window.Vue.normalizeStyle, W0 = window.Vue.createBlock, K0 = { class: "mw-ui-dialog__shell items-stretch" }, Y0 = { class: "mw-ui-dialog__body" };
function Q0(e, t, n, o, s, a) {
  const r = $a("mw-col"), l = $a("mw-button"), u = $a("mw-row"), d = $a("mw-divider");
  return Ru(), W0(G0, {
    name: "mw-ui-animation-fade",
    style: X0(o.cssVars)
  }, {
    default: xr(() => [
      n.value ? (Ru(), q0("div", {
        key: 0,
        ref: "root",
        class: Uu(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = j0((i) => n.closeOnEscapeKey && o.close(), ["esc"]))
      }, [
        Sr("div", {
          class: Uu(["mw-ui-dialog__overlay", o.overlayClass]),
          onClick: t[0] || (t[0] = (i) => !n.persistent && o.close())
        }, null, 2),
        Sr("div", K0, [
          n.header ? yr(e.$slots, "header", { key: 0 }, () => [
            rs(u, { class: "mw-ui-dialog__header" }, {
              default: xr(() => [
                rs(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                rs(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: xr(() => [
                    rs(l, {
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
            rs(d)
          ]) : Iu("", !0),
          Sr("div", Y0, [
            yr(e.$slots, "default")
          ]),
          yr(e.$slots, "footer")
        ])
      ], 34)) : Iu("", !0)
    ]),
    _: 3
  }, 8, ["style"]);
}
const yt = /* @__PURE__ */ de(H0, [["render", Q0]]);
const J0 = {
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
}, zu = window.Vue.renderSlot, Z0 = window.Vue.resolveComponent, Va = window.Vue.openBlock, Cr = window.Vue.createBlock, Ou = window.Vue.createCommentVNode, e1 = window.Vue.resolveDynamicComponent, t1 = window.Vue.toDisplayString, n1 = window.Vue.mergeProps, o1 = window.Vue.withModifiers, s1 = window.Vue.createElementVNode, a1 = window.Vue.normalizeClass, i1 = window.Vue.createElementBlock, r1 = { class: "mw-ui-input__content" };
function l1(e, t, n, o, s, a) {
  const r = Z0("mw-icon");
  return Va(), i1("div", {
    class: a1(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    s1("div", r1, [
      zu(e.$slots, "icon", {}, () => [
        n.icon ? (Va(), Cr(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : Ou("", !0)
      ]),
      (Va(), Cr(e1(n.type === "textarea" ? n.type : "input"), n1({
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
        textContent: t1(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      zu(e.$slots, "indicator", {}, () => [
        n.indicator ? (Va(), Cr(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = o1((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : Ou("", !0)
      ])
    ])
  ], 2);
}
const Nc = /* @__PURE__ */ de(J0, [["render", l1]]);
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
const c1 = {}, u1 = window.Vue.createElementVNode, d1 = window.Vue.openBlock, g1 = window.Vue.createElementBlock, p1 = { class: "mw-ui-spinner" }, m1 = /* @__PURE__ */ u1("div", { class: "mw-ui-spinner__bounce" }, null, -1), h1 = [
  m1
];
function f1(e, t) {
  return d1(), g1("div", p1, h1);
}
const ct = /* @__PURE__ */ de(c1, [["render", f1]]), vt = {
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
const w1 = window.Vue.computed, v1 = {
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
      default: lh
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: vt.gray600
    },
    placeholderBackgroundColor: {
      type: String,
      default: vt.gray200
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = w1(() => {
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
}, Hu = window.Vue.normalizeStyle, ju = window.Vue.openBlock, _1 = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const S1 = window.Vue.resolveComponent, y1 = window.Vue.createBlock;
function x1(e, t, n, o, s, a) {
  const r = S1("mw-ui-icon");
  return n.thumbnail ? (ju(), _1("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Hu(o.style)
  }, null, 4)) : (ju(), y1(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Hu(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Wc = /* @__PURE__ */ de(v1, [["render", x1]]);
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
}, qu = window.Vue.normalizeClass, Gu = window.Vue.normalizeStyle, b1 = window.Vue.createElementVNode, k1 = window.Vue.openBlock, $1 = window.Vue.createElementBlock, V1 = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function E1(e, t, n, o, s, a) {
  return k1(), $1("div", {
    class: qu(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: Gu(a.containerStyles)
  }, [
    b1("div", {
      class: qu(["mw-progress-bar__bar", a.barClass]),
      style: Gu(a.barStyles)
    }, null, 6)
  ], 14, V1);
}
const ch = /* @__PURE__ */ de(C1, [["render", E1]]), L1 = (e, t, n, o) => (s) => {
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
}, T1 = (e, t, n, o) => ({ initiateDrag: L1(
  e,
  t,
  n,
  o
) }), A1 = window.Vue.ref, Xu = window.Vue.computed, D1 = (e, t, n, o) => {
  const s = A1(0), a = Xu(
    () => t.value > e.value
  ), r = Xu(
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
const Ea = window.Vue.ref, P1 = window.Vue.onMounted, Wu = window.Vue.computed, B1 = window.Vue.nextTick, F1 = {
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
    const t = Ea(!0), n = Ea(null), o = Wu(
      () => Math.min(e.minHeight, s.value)
    ), s = Ea(1), { initiateDrag: a } = T1(
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
    } = D1(o, s, n, t), c = () => d(u.value + 1), g = Ea(null), p = Wu(() => ({
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
    return P1(() => C(this, null, function* () {
      var f;
      yield B1(), s.value = n.value.scrollHeight, (f = g.value) == null || f.addEventListener(
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
      mwIconCollapse: U0,
      mwIconExpand: $0,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), d(0)), t.value = !t.value;
      },
      scrollable: l,
      scrollIndex: u,
      scrollToNextStep: c
    };
  }
}, N1 = window.Vue.renderSlot, M1 = window.Vue.normalizeClass, La = window.Vue.createElementVNode, U1 = window.Vue.resolveComponent, I1 = window.Vue.createVNode, br = window.Vue.openBlock, R1 = window.Vue.createBlock, Ku = window.Vue.createCommentVNode, Yu = window.Vue.createElementBlock, z1 = window.Vue.normalizeStyle, O1 = { class: "mw-ui-expandable-content__container" }, H1 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, j1 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function q1(e, t, n, o, s, a) {
  const r = U1("mw-button");
  return br(), Yu("div", {
    class: "mw-ui-expandable-content",
    style: z1(o.cssVars)
  }, [
    La("div", O1, [
      La("div", {
        ref: "contentRef",
        class: M1(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        N1(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (br(), Yu("div", H1, [
        I1(r, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (br(), R1(r, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : Ku("", !0)
      ])) : Ku("", !0)
    ]),
    La("div", j1, [
      La("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...l) => o.onDragButtonClicked && o.onDragButtonClicked(...l))
      })
    ], 512)
  ], 4);
}
const G1 = /* @__PURE__ */ de(F1, [["render", q1]]);
const Ta = window.Vue.computed, X1 = {
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
      default: vt.blue600
    },
    inactiveColor: {
      type: String,
      default: vt.gray300
    },
    strokeWidth: {
      type: Number,
      default: 2
    }
  },
  setup(e) {
    const t = Ta(() => e.size / 2 * 0.9), n = Ta(() => Math.PI * (t.value * 2)), o = Ta(
      () => (100 - e.percentage) / 100 * n.value
    ), s = Ta(() => ({
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
}, Qu = window.Vue.createElementVNode, Ju = window.Vue.normalizeStyle, W1 = window.Vue.openBlock, K1 = window.Vue.createElementBlock, Y1 = ["width", "height", "viewport"], Q1 = ["r", "cx", "cy", "stroke-dasharray"], J1 = ["r", "cx", "cy", "stroke-dasharray"];
function Z1(e, t, n, o, s, a) {
  return W1(), K1("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: Ju(o.cssVars)
  }, [
    Qu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, Q1),
    Qu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: Ju({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, J1)
  ], 12, Y1);
}
const ev = /* @__PURE__ */ de(X1, [["render", Z1]]), tv = window.Vue.ref, wn = {
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
}, kr = {
  mobile: () => matchMedia(bn.mobile).matches,
  tablet: () => matchMedia(bn.tablet).matches,
  desktop: () => matchMedia(bn.desktop).matches,
  desktopwide: () => matchMedia(bn["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(bn["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(bn["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(bn["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(bn["desktop-and-down"]).matches
}, nv = (e) => {
  const t = Object.values(wn);
  for (let n = 0; n < t.length; n++)
    if (e < t[n])
      return t[n];
  return null;
}, ov = {
  install: (e) => {
    const t = tv({
      nextBreakpoint: null
    }), n = () => {
      const o = window.innerWidth;
      for (let s in kr)
        kr.hasOwnProperty(s) && (t.value[s] = kr[s]());
      t.value.nextBreakpoint = nv(o);
    };
    n(), window.addEventListener("resize", n), e.config.globalProperties.$mwui = tt(pe({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: t.value
    }), e.provide("breakpoints", t);
  }
}, sv = {
  install: (e) => {
    e.config.globalProperties.$mwui = tt(pe({}, e.config.globalProperties.$mwui || {}), {
      colors: vt
    }), e.provide("colors", vt);
  }
};
class Xo extends Error {
}
const av = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new Xo();
}), uh = { assertUser: av };
const iv = window.Vue.resolveDirective, ls = window.Vue.createElementVNode, Zu = window.Vue.withDirectives, rv = window.Vue.toDisplayString, lv = window.Vue.unref, ed = window.Vue.withCtx, cv = window.Vue.openBlock, uv = window.Vue.createBlock, dv = window.Vue.createCommentVNode, gv = { class: "pa-4 sx-login-dialog__header" }, pv = { class: "sx-login-dialog__body px-6 pb-4" }, mv = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, hv = ["href"], fv = window.Vue.computed, wv = window.Vue.ref, vv = window.Vuex.useStore, _v = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = vv(), n = fv(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = wv(mw.util.getUrl("Special:UserLogin"));
    return (a, r) => {
      const l = iv("i18n");
      return n.value ? (cv(), uv(lv(yt), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: ed(() => [
          ls("div", gv, [
            Zu(ls("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: ed(() => [
          Zu(ls("div", pv, null, 512), [
            [l, void 0, "cx-sx-login-dialog-body"]
          ]),
          ls("div", mv, [
            ls("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, rv(a.$i18n("cx-sx-login-dialog-button-label")), 9, hv)
          ])
        ]),
        _: 1
      })) : dv("", !0);
    };
  }
}, K = new mw.cx.SiteMapper(), Sv = mw.util.getUrl, yv = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
}, Wo = !mw.config.get("wgMFMode");
class Kc {
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
const Aa = "original", Da = "empty", xv = {
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
  constructor(t, n, o = []) {
    this.sourceLanguage = t, this.targetLanguage = n, this.providers = [
      ...o,
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
    return xv[t] || t;
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
class Rn {
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = tt(pe({}, a), {
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
const td = (e) => {
  var n;
  const t = Oi(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, Oi = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, ao = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), dh = (e) => {
  const t = Oi(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = Cv(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, Cv = (e) => {
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
}, gh = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, ph = (e) => {
  const t = gh(e);
  return t == null ? void 0 : t.targetExists;
};
class $r {
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
    let o = document.createElement("div");
    o.innerHTML = n, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
    const s = Array.from(o.children).find(
      (a) => ao(a)
    );
    s && ph(s) && (this.blockTemplateAdaptationInfo[t] = gh(s));
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
      (t) => ao(t)
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
    const t = Oi(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? td(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => ao(o));
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
    return n && td(n) || "";
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
    const o = Oi(n);
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
      (a) => ao(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new $r({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new $r({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new $r({
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
    if (!t || re.isUserMTProvider(t))
      return null;
    if (this.isBlockTemplate) {
      n.innerHTML = this.blockTemplateProposedTranslations[t];
      const o = Array.from(n.children).find(
        (s) => ao(s)
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
const Yc = mw.config.get(
  "wgContentTranslationUnmodifiedMTThresholdForPublish",
  95
), bv = Yc - 10, kv = [
  { status: "failure", value: 100 - Yc },
  { status: "warning", value: 100 - bv },
  { status: "success", value: 100 }
], mh = (e, t, n) => {
  const o = nd(e).textContent, s = nd(t).textContent, a = 100 - 100 * mw.cx.calculateUnmodifiedContent(s, o, n);
  return Math.ceil(a);
}, $v = (e) => kv.find((t) => e <= t.value).status, Vv = (e, t) => mh(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), Ev = () => (100 - Yc) / 100, nd = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, Zt = {
  calculateScore: mh,
  getScoreStatus: $v,
  getMTScoreForPageSection: Vv,
  getMtModificationThreshold: Ev
}, Pa = "__LEAD_SECTION__";
class Ho {
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
    isLeadSection: o = !1,
    isTitleSelected: s = !1
  } = {}) {
    this.id = t, this.proposedTitleTranslations = {
      [re.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.mtProviderUsedForTitle = "", this.translatedTitle = "", this.subSections = n, this.isLeadSection = o, this.isTitleSelected = s;
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
    return n instanceof lt ? n.transclusionNode.outerHTML : n instanceof Rn ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof lt ? t.blockTemplateSelected = !1 : t instanceof Rn && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof lt ? n.blockTemplateSelected = !0 : n instanceof Rn && (n.selected = !0);
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
    if (o instanceof lt)
      return !!o.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (o instanceof Rn)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof lt ? n.blockTemplateProposedTranslations[t] || "" : n instanceof Rn ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof lt ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof Rn && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const o = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, s = Zt.getMTScoreForPageSection(this, t) / 100;
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
      (n, o) => [
        ...n,
        ...o.getParallelCorporaTranslationPayloads(t)
      ],
      []
    );
  }
}
class Wi extends Kc {
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
    return Ho.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? Ho.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const en = "previous-edits", Sn = "popular", Xe = "topic", Ee = "geography", ee = "collections", Ye = "automatic", _t = "seed", od = window.Vue.ref, { topics: Lv, regions: Tv } = mw.loader.require(
  "ext.cx.articlefilters"
), Ba = {
  type: Ye,
  id: en
}, Qc = () => {
  const e = od(
    Lv.flatMap((l) => l.topics).map((l) => l.topicId.toLowerCase())
  ), t = od(!1), n = (l, u) => e.value.includes(u) ? { type: Xe, id: u } : null, o = (l, u) => Tv.some(
    (i) => i.id.toLowerCase() === u || i.countries.some(
      (c) => c.id.toLowerCase() === u
    )
  ) ? { type: Ee, id: u } : null, s = (l, u, d) => d && !d.some((i) => i.name.toLowerCase() === u) ? null : { type: ee, id: l };
  return { filtersValidatorError: t, validateFilters: ({ type: l, id: u }, d = !1) => {
    t.value = !1;
    const i = l == null ? void 0 : l.toLowerCase(), c = u == null ? void 0 : u.toLowerCase();
    if (c === en)
      return {
        type: Ye,
        id: en
      };
    if (c === Sn)
      return {
        type: Ye,
        id: Sn
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
    } else if (i === _t)
      return { type: _t, id: u };
    return Ba;
  }, isDefaultFilter: ({ type: l, id: u }) => l === Ba.type && u === Ba.id };
}, Av = window.Vue.inject, Dv = window.Vue.reactive;
var Pv = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, hh = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(Pv, function() {
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
                for (let O = 0; O < V.length; O++) {
                  const Ne = V[O]();
                  if (Ne !== null)
                    return Ne;
                }
                return null;
              };
            }
            function _(V) {
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
            const E = b(/^\s+/), x = S("|"), I = S(":"), L = S("\\"), P = b(/^./), j = S("$"), oe = b(/^\d+/), ae = S('"'), te = S("'"), R = b(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), J = b(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), se = w([le, b(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function le() {
              const V = _([L, P]);
              return V === null ? null : V[1];
            }
            const ke = w([le, J]), We = w([le, R]);
            function Pe() {
              const V = _([j, oe]);
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
              const V = _([x, y(0, mo)]);
              if (V === null)
                return null;
              const O = V[1];
              return O.length > 1 ? ["CONCAT"].concat(O) : O[0];
            }
            function Y() {
              const V = _([Z, I, Pe]);
              return V === null ? null : [V[0], V[2]];
            }
            function v() {
              const V = _([Z, I, mo]);
              return V === null ? null : [V[0], V[2]];
            }
            function T() {
              const V = _([Z, I]);
              return V === null ? null : [V[0], ""];
            }
            const A = w([function() {
              const V = _([w([Y, v, T]), y(0, M)]);
              return V === null ? null : V[0].concat(V[1]);
            }, function() {
              const V = _([Z, y(0, M)]);
              return V === null ? null : [V[0]].concat(V[1]);
            }]), F = S("{{"), X = S("}}"), ge = S("[["), q = S("]]"), z = S("["), ie = S("]");
            function et() {
              const V = _([F, A, X]);
              return V === null ? null : V[1];
            }
            const $e = w([function() {
              const V = _([y(1, mo), x, y(1, po)]);
              return V === null ? null : [["CONCAT"].concat(V[0]), ["CONCAT"].concat(V[2])];
            }, function() {
              const V = _([y(1, mo)]);
              return V === null ? null : [["CONCAT"].concat(V[0])];
            }]);
            function ya() {
              let V = null;
              const O = _([ge, $e, q]);
              if (O !== null) {
                const Ne = O[1];
                V = ["WIKILINK"].concat(Ne);
              }
              return V;
            }
            function go() {
              let V = null;
              const O = _([z, y(1, ur), E, y(1, po), ie]);
              return O !== null && (V = ["EXTLINK", O[1].length === 1 ? O[1][0] : ["CONCAT"].concat(O[1]), ["CONCAT"].concat(O[3])]), V;
            }
            const ns = b(/^[A-Za-z]+/);
            function lr() {
              const V = b(/^[^"]*/), O = _([ae, V, ae]);
              return O === null ? null : O[1];
            }
            function os() {
              const V = b(/^[^']*/), O = _([te, V, te]);
              return O === null ? null : O[1];
            }
            function ss() {
              const V = b(/^\s*=\s*/), O = _([E, ns, V, w([lr, os])]);
              return O === null ? null : [O[1], O[3]];
            }
            function cr() {
              const V = y(0, ss)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], V);
            }
            const ur = w([et, Pe, ya, go, function() {
              const V = y(1, se)();
              return V === null ? null : V.join("");
            }]), po = w([et, Pe, ya, go, function() {
              let V = null;
              const O = f, Ne = S("<"), G = b(/^\/?/), ze = b(/^\s*>/), tn = _([Ne, ns, cr, G, ze]);
              if (tn === null)
                return null;
              const gt = f, as = tn[1], is = y(0, po)(), Kf = f, Vu = _([S("</"), ns, ze]);
              if (Vu === null)
                return ["CONCAT", m.slice(O, gt)].concat(is);
              const Yf = f, Qf = Vu[1], Eu = tn[2];
              if (function(qn, Ca, dr, gr = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((qn = qn.toLowerCase()) !== (Ca = Ca.toLowerCase()) || gr.allowedHtmlElements.indexOf(qn) === -1)
                  return !1;
                const Jf = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let ba = 0, Zf = dr.length; ba < Zf; ba += 2) {
                  const pr = dr[ba];
                  if (gr.allowedHtmlCommonAttributes.indexOf(pr) === -1 && (gr.allowedHtmlAttributesByElement[qn] || []).indexOf(pr) === -1 || pr === "style" && dr[ba + 1].search(Jf) !== -1)
                    return !1;
                }
                return !0;
              }(as, Qf, Eu.slice(1)))
                V = ["HTMLELEMENT", as, Eu].concat(is);
              else {
                const qn = (Ca) => Ca.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                V = ["CONCAT", qn(m.slice(O, gt))].concat(is, qn(m.slice(Kf, Yf)));
              }
              return V;
            }, function() {
              const V = y(1, We)();
              return V === null ? null : V.join("");
            }]), mo = w([et, Pe, function() {
              const V = y(1, ke)();
              return V === null ? null : V.join("");
            }]), xa = function() {
              const V = y(0, po)();
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
})(hh);
var Bv = hh.exports;
const sd = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, fh = Symbol("banana-context");
function we() {
  const e = Av(fh);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function Fv(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = Dv(new Bv(e.locale, e));
  return {
    install: (n) => {
      n.provide(fh, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: r } = sd(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...r) : o.textContent = t.i18n(a, ...r);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: r } = sd(s);
        o.innerHTML = t.i18n(a, ...r);
      });
    }
  };
}
const xn = window.Vue.ref, Nv = window.Vue.computed, Ki = xn(null), Yi = xn(null), Qi = xn(null), ma = xn(null), Jc = xn(null), Ji = xn(null), wh = xn(null), vh = xn(null), Zc = xn(null), { validateFilters: Mv, filtersValidatorError: Uv } = Qc(), _h = {
  from: Ki,
  to: Yi,
  section: ma,
  draft: Jc,
  page: Qi,
  revision: Ji,
  "active-list": Zc
}, Iv = Nv(() => ({
  type: wh.value,
  id: vh.value
})), Sh = (e, t) => {
  wh.value = e, vh.value = t, Hi("filter-type", e), t && Hi("filter-id", t);
}, Rv = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  e instanceof Wi && (n.draft = !0, n.revision = e.pageRevision, e.isLeadSectionTranslation || (n.section = e.sourceSectionTitle));
  for (const o in n) {
    const s = n[o];
    t.set(o, s), _h[o].value = s;
  }
  t.delete("title"), ha(Object.fromEntries(t));
}, eu = (e, t) => {
  _h[e].value = t, Hi(e, t);
}, zv = (e) => {
  eu("section", e);
}, Ov = (e) => {
  eu("page", e);
}, Hv = (e) => {
  eu("active-list", e);
}, ha = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    Sv(`Special:ContentTranslation${t}`, e)
  );
}, jv = () => {
  const e = we(), t = new URLSearchParams(location.search);
  Qi.value = t.get("page"), Ki.value = t.get("from"), Yi.value = t.get("to"), ma.value = t.get("section"), Ji.value = t.get("revision"), Zc.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
  const n = Mv({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  Sh(n.type, n.id), Uv.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, qv = () => {
  const e = new URLSearchParams(location.search);
  ma.value = null, e.delete("section"), e.delete("title"), ha(Object.fromEntries(e));
}, Hi = (e, t) => {
  const n = new URLSearchParams(location.search);
  t == null ? n.delete(e) : n.set(e, t), n.delete("title"), ha(Object.fromEntries(n));
}, Gv = (e) => new URLSearchParams(location.search).get(e), Xv = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), Ki.value = e, Yi.value = t, n.delete("title"), ha(Object.fromEntries(n));
}, Wv = () => {
  const e = new URLSearchParams(location.search);
  Qi.value = null, ma.value = null, Jc.value = null, Ji.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("revision"), e.delete("title"), ha(Object.fromEntries(e));
}, Kv = () => new URLSearchParams(location.search).get("force-quick-tutorial"), D = () => ({
  isQuickTutorialForced: Kv,
  setLanguageURLParams: Xv,
  setSectionURLParam: zv,
  setTranslationURLParams: Rv,
  initializeURLState: jv,
  clearTranslationURLParameters: Wv,
  clearSectionURLParameter: qv,
  setUrlParam: Hi,
  getUrlParam: Gv,
  pageURLParameter: Qi,
  sourceLanguageURLParameter: Ki,
  targetLanguageURLParameter: Yi,
  sectionURLParameter: ma,
  draftURLParameter: Jc,
  revisionURLParameter: Ji,
  setPageURLParam: Ov,
  currentSuggestionFilters: Iv,
  setFilterURLParams: Sh,
  activeDashboardTabParameter: Zc,
  setActiveDashboardTabParameter: Hv
}), Yv = () => K.getLanguagePairs();
function Qv(e, t) {
  return C(this, null, function* () {
    const n = K.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new re(e, t, o.mt)
      )
    );
  });
}
function Jv() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function Zv(e, t, n, o) {
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
const Zi = {
  fetchSupportedLanguageCodes: Yv,
  fetchSupportedMTProviders: Qv,
  fetchCXServerToken: Jv,
  addWikibaseLink: Zv
}, tu = window.Vue.ref, ad = tu([]), id = tu([]), rd = tu(!1);
function fa() {
  return {
    fetchSupportedLanguageCodes: () => C(this, null, function* () {
      if (!rd.value) {
        rd.value = !0;
        const t = yield Zi.fetchSupportedLanguageCodes();
        ad.value = t.sourceLanguages, id.value = t.targetLanguages;
      }
    }),
    supportedSourceLanguageCodes: ad,
    supportedTargetLanguageCodes: id
  };
}
const e_ = {
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
}, t_ = {
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
}, n_ = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], o_ = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, s_ = {
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
}, a_ = {
  languages: e_,
  scriptgroups: t_,
  rtlscripts: n_,
  regiongroups: o_,
  territories: s_
};
var Re = a_;
function wa(e) {
  return !!Re.languages[e];
}
function jn(e) {
  return wa(e) && Re.languages[e].length === 1 ? Re.languages[e][0] : !1;
}
function i_() {
  return Re.languages;
}
function va(e) {
  var t = jn(e);
  return t ? va(t) : wa(e) ? Re.languages[e][0] : "Zyyy";
}
function nu(e) {
  var t = jn(e);
  return t ? nu(t) : wa(e) && Re.languages[e][1] || "UNKNOWN";
}
function ua(e) {
  var t = jn(e);
  return t ? ua(t) : wa(e) && Re.languages[e][2] || e;
}
function r_() {
  var e, t = {};
  for (e in Re.languages)
    jn(e) || (t[e] = ua(e));
  return t;
}
function yh(e) {
  var t, n, o = [];
  for (t in Re.languages)
    if (!jn(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === va(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function l_(e) {
  return yh([e]);
}
function xh(e) {
  var t;
  for (t in Re.scriptgroups)
    if (Re.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function ou(e) {
  return xh(va(e));
}
function Ch(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = jn(n) || n, a = ou(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function bh(e) {
  var t, n, o, s = {};
  for (t in Re.languages)
    if (!jn(t)) {
      for (n = 0; n < e.length; n++)
        if (nu(t).includes(e[n])) {
          o = ou(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function c_(e) {
  return bh([e]);
}
function u_(e) {
  var t, n, o, s = [];
  for (t = Ch(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function d_(e, t) {
  var n = ua(e) || e, o = ua(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function kh(e) {
  return Re.rtlscripts.includes(va(e));
}
function g_(e) {
  return kh(e) ? "rtl" : "ltr";
}
function p_(e) {
  return Re.territories[e] || [];
}
function m_(e, t) {
  t.target ? Re.languages[e] = [t.target] : Re.languages[e] = [t.script, t.regions, t.autonym];
}
var H = {
  addLanguage: m_,
  getAutonym: ua,
  getAutonyms: r_,
  getDir: g_,
  getGroupOfScript: xh,
  getLanguages: i_,
  getLanguagesByScriptGroup: Ch,
  getLanguagesByScriptGroupInRegion: c_,
  getLanguagesByScriptGroupInRegions: bh,
  getLanguagesInScript: l_,
  getLanguagesInScripts: yh,
  getLanguagesInTerritory: p_,
  getRegions: nu,
  getScript: va,
  getScriptGroupOfLanguage: ou,
  isKnown: wa,
  isRedirect: jn,
  isRtl: kh,
  sortByScriptGroup: u_,
  sortByAutonym: d_
};
const ho = window.Vue.computed;
function Le(e) {
  const t = ho(() => e.state.application.sourceLanguage), n = ho(() => e.state.application.targetLanguage), o = ho(
    () => e.state.application.currentMTProvider
  ), s = ho(
    () => H.getAutonym(t.value)
  ), a = ho(
    () => H.getAutonym(n.value)
  ), r = ho(() => e.state.application.previousRoute);
  return {
    currentMTProvider: o,
    previousRoute: r,
    sourceLanguage: t,
    sourceLanguageAutonym: s,
    targetLanguage: n,
    targetLanguageAutonym: a
  };
}
class Ko {
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
class h_ {
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
function f_() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const w_ = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), f_();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, v_ = (e, t) => {
  let n, o;
  return t ? (n = w_(e), o = n.$element.find(
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
}, __ = (e, t) => {
  const n = Array.from(
    v_(e, t)
  );
  return S_(n).map(
    /**
     * @param {Node[]} sectionNodes
     * @return {PageSection}
     */
    (s) => {
      const [a, ...r] = s;
      let l;
      const u = a.dataset.mwSectionNumber;
      a.querySelector("h2") ? l = !1 : (l = !0, r.unshift(a));
      const d = r.map(
        /**
         * @param {Node} node
         * @return {SubSection}
         */
        (i) => new lt({
          sentences: y_(i),
          node: i
        })
      );
      return new Ho({ id: u, subSections: d, isLeadSection: l });
    }
  );
}, S_ = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, y_ = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new Rn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), $h = {
  convertSegmentedContentToPageSections: __
}, su = 120, x_ = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: su,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return K.getApi(e).get(n).then((s) => {
    const a = s.query.pages, l = (s.query.redirects || []).reduce(
      (i, c) => tt(pe({}, i), { [c.to]: c.from }),
      {}
    ), d = (s.query.normalized || []).reduce(
      (i, c) => tt(pe({}, i), {
        [c.to]: c.from
      }),
      {}
    );
    return a.map((i) => {
      const c = d[i.title] || l[i.title] || null;
      return new Ko(tt(pe({}, i), { _alias: c }));
    });
  });
}, C_ = (e, t) => {
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
    return l ? Object.freeze(new h_(l, r)) : null;
  });
}, b_ = (e, t, n) => {
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
}, k_ = (e, t, n, o = null) => {
  const s = new Promise((r) => {
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
    (r) => r.map((l) => ({
      title: l.line,
      id: l.index
    }))
  ), a = $_(
    e,
    t,
    n,
    o
  );
  return Promise.all([a, s]).then(
    ([r, l]) => {
      const u = $h.convertSegmentedContentToPageSections(
        r,
        !1
        // No need to resolve references. Content can be used as it is
      );
      return u.forEach((d) => {
        const i = l.find((c) => c.id === d.id);
        d.originalTitle = (i == null ? void 0 : i.title) || "";
      }), new Ko({
        sections: u,
        content: r,
        pagelanguage: e,
        title: n
      });
    }
  );
}, $_ = (e, t, n, o = null) => {
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
}, V_ = (e) => {
  const t = yv();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: su,
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
  }).then((o) => o.map((s) => new Ko(s)));
}, E_ = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: su,
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
      (a) => new Ko(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, lo = {
  fetchPages: x_,
  fetchLanguageTitles: C_,
  fetchPageContent: k_,
  fetchNearbyPages: V_,
  searchPagesByTitlePrefix: E_,
  fetchLanguageLinksForLanguage: b_
}, L_ = window.Vuex.useStore, Yo = () => {
  const e = L_();
  return (t, n) => {
    n = n.filter(
      (a) => !!a && !e.getters["mediawiki/getPage"](t, a)
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
}, T_ = window.Vuex.useStore, au = () => {
  const e = T_(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = D(), { maxSuggestionsPerSlice: s } = e.state.suggestions, a = () => e.getters["suggestions/getSectionSuggestionsForPair"](t.value, n.value).filter(
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
class yn {
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
], A_ = [
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
], D_ = [
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
], P_ = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], B_ = [
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
], F_ = {
  en: Vh,
  es: A_,
  bn: D_,
  fr: P_,
  de: B_
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
class iu {
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
    }), this.collection = new iu(u);
  }
}
class Lh extends yn {
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
    }), this.collection = new iu(c);
  }
}
const N_ = Vh, It = (n) => C(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
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
function M_() {
  return C(this, null, function* () {
    const e = {}, t = "/page-collection-groups";
    try {
      const n = (yield It({ urlPostfix: t, urlParams: e })) || [], o = {};
      for (const s in n)
        o[s] = n[s].map(
          (a) => new iu(a)
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
function U_(e, t, n = null, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      count: o
    };
    return n && (s.seed = n), ((yield It({ urlParams: s })) || []).map(
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
const I_ = (e, t) => C(void 0, null, function* () {
  return ((yield It({ urlParams: {
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
}), R_ = (e, t) => C(void 0, null, function* () {
  const s = (yield It({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  }, urlPostfix: "/sections" })) || [];
  return s && s.map(
    (a) => new yn({
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
}), z_ = (e, t, n = null) => C(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  return n && (o.seed = n), ((yield It({ urlParams: o })) || []).map(
    (a) => new Eh({
      sourceTitle: a.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: a.wikidata_id,
      langLinksCount: parseInt(a.langlinks_count),
      collection: a.collection
    })
  );
}), O_ = (e, t, n = null) => C(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  n && (o.seed = n);
  const a = (yield It({ urlPostfix: "/sections", urlParams: o })) || [];
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
function H_(e, t, n) {
  return C(this, null, function* () {
    const o = [t, e, n].map(
      (r) => encodeURIComponent(r)
    ), s = K.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (r) => r.ok ? r.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((r) => r == null ? void 0 : r.sections).catch((r) => null);
    return a ? new yn(a) : null;
  });
}
function j_(e, t, n = null) {
  return C(this, null, function* () {
    const o = {
      source: e,
      target: t,
      count: 24
    };
    n && (o.seed = n);
    const a = (yield It({ urlPostfix: "/sections", urlParams: o })) || [];
    return a && a.map(
      (r) => new yn({
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
function q_(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    return ((yield It({ urlParams: s })) || []).map(
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
function G_(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    }, r = (yield It({ urlPostfix: "/sections", urlParams: s })) || [];
    return r && r.map(
      (l) => new yn({
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
function X_(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      country: n.join("|"),
      count: o
    };
    return ((yield It({ urlParams: s })) || []).map(
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
function W_(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      country: n.join("|"),
      count: o
    }, r = (yield It({ urlPostfix: "/sections", urlParams: s })) || [];
    return r && r.map(
      (l) => new yn({
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
function K_(e) {
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
function Y_(e, t) {
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
function Q_(e) {
  const t = N_.map((o) => encodeURIComponent(o)).join("|"), n = K.getCXServerUrl(
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
const J_ = (e, t, n) => {
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
}, Z_ = (e) => {
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
}, eS = () => {
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
}, me = {
  fetchFavorites: eS,
  fetchPageSuggestions: U_,
  fetchSectionSuggestion: H_,
  fetchSectionSuggestions: j_,
  fetchAppendixTargetSectionTitles: Q_,
  fetchArticleSections: Y_,
  markFavorite: J_,
  unmarkFavorite: Z_,
  fetchUserEdits: K_,
  fetchMostPopularPageSuggestions: I_,
  fetchMostPopularSectionSuggestions: R_,
  fetchPageSuggestionsByTopics: q_,
  fetchSectionSuggestionsByTopics: G_,
  fetchPageSuggestionsByCountries: X_,
  fetchSectionSuggestionsByCountries: W_,
  fetchPageCollectionGroups: M_,
  fetchPageSuggestionsByCollections: z_,
  fetchSectionSuggestionsByCollections: O_
}, tS = window.Vuex.useStore, Qo = () => {
  const e = tS(), { sourceLanguage: t, targetLanguage: n } = Le(e), o = (l) => {
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
class nS {
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
const oS = window.Vuex.useStore, ru = window.Vue.ref, sS = ru([]), aS = ru([]);
let Vr = !1, Er = !1, ld = !1;
const Fa = ru([]);
let cs = null;
const Lr = {
  page: sS,
  section: aS
}, Th = () => {
  const e = oS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = D(), o = () => C(void 0, null, function* () {
    Er || (Fa.value = yield me.fetchUserEdits(t.value).then((d) => (Er = !0, d)));
  }), s = () => C(void 0, null, function* () {
    let d = e.getters["translator/getTranslationsByStatus"]("published");
    if (d = d.filter(
      (i) => i.sourceLanguage === t.value
    ), d.length && !Vr)
      return Vr = !0, d.map(
        (i) => i.sourceTitle
      );
    if (Vr = !0, !Er && (yield o(), Fa.value.length > 0))
      return Fa.value;
    if (!ld) {
      const i = yield me.fetchUserEdits(n.value).then((c) => (ld = !0, c));
      if (i.length)
        return lo.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          i
        );
    }
    return null;
  }), a = (d) => {
    let i = Lr[d].value.find(
      (c) => c.matchesLanguagePair(t.value, n.value)
    );
    return i || (i = new nS({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), Lr[d].value.push(i)), i;
  }, r = () => C(void 0, null, function* () {
    let d = !1, i = [];
    do {
      i = yield s(), i || (d = !0);
      for (const c in Lr) {
        const g = a(c);
        g.seeds = [
          ...g.seeds,
          ...i || []
        ];
      }
    } while (!d && !(i != null && i.length));
  }), l = () => cs || (cs = r(), cs.finally(() => {
    cs = null;
  }));
  return {
    getSuggestionSeed: (d) => C(void 0, null, function* () {
      let i = a(d);
      return i.seeds.length || (yield l()), i.shiftSeeds();
    }),
    fetchPreviousEditsInSource: o,
    previousEditsInSource: Fa
  };
}, iS = 5;
function ro(e) {
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
  } = D(), { getSuggestionSeed: o } = Th(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Qo(), l = {
    id: en,
    type: Ye
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (i) => C(void 0, null, function* () {
      const c = [];
      return yield ro(() => C(void 0, null, function* () {
        const g = yield o("page");
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
      return yield ro(() => C(void 0, null, function* () {
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
        return m = m.slice(0, i), c.push(...m), h.forEach((f) => {
          f && !r(f) && (f.isListable = !1, e.commit("suggestions/addSectionSuggestion", f));
        }), c.length >= i;
      })), c.forEach(
        (g) => g.suggestionProvider = l
      ), c;
    })
  };
}, cS = window.Vuex.useStore, uS = () => {
  const e = cS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = D(), o = {
    id: Sn,
    type: Ye
  }, {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Qo();
  return { fetchSectionSuggestionsPopular: (d) => C(void 0, null, function* () {
    const i = [];
    return yield ro(() => C(void 0, null, function* () {
      const c = yield me.fetchMostPopularSectionSuggestions(
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
    return yield ro(() => C(void 0, null, function* () {
      let c = yield me.fetchMostPopularPageSuggestions(
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
}, Ah = window.Vue.ref, us = "ungrouped", cd = Ah({}), ud = Ah(!1), lu = () => ({
  fetchPageCollectionGroups: () => C(void 0, null, function* () {
    try {
      const t = yield me.fetchPageCollectionGroups(), n = Object.fromEntries(
        Object.keys(t).sort((o, s) => o === us ? 1 : s === us ? -1 : o.localeCompare(s)).map((o) => [o, t[o]])
      );
      n[us] && (n[us] = n[us].sort(
        (o, s) => o.name.localeCompare(s.name)
      )), cd.value = n, ud.value = !0;
    } catch (t) {
      mw.log.error("Failed to fetch page collections", t);
    }
  }),
  pageCollectionGroupsFetched: ud,
  pageCollectionGroups: cd
});
class ia {
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
const dS = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', gS = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', pS = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', mS = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', hS = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', fS = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', wS = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', vS = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', _S = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', SS = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', yS = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', xS = '<path d="m2.5 15.25 7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"/>', CS = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', bS = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', kS = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', $S = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', VS = '<path d="M19 16 2 12a3.83 3.83 0 01-1-2.5A3.83 3.83 0 012 7l17-4z"/><rect width="4" height="8" x="4" y="9" rx="2"/>', ES = '<path d="M8 2H2a2 2 0 00-2 2v2h12z"/><rect width="20" height="14" y="4" rx="2"/>', LS = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', Dh = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', TS = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', AS = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"/>', DS = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', PS = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', BS = '<path d="M10 0a7.65 7.65 0 00-8 8c0 2.52 2 5 3 6s5 6 5 6 4-5 5-6 3-3.48 3-6a7.65 7.65 0 00-8-8m0 11.25A3.25 3.25 0 1113.25 8 3.25 3.25 0 0110 11.25"/>', FS = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', NS = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', MS = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', US = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', IS = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', RS = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', zS = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', OS = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', HS = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', jS = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', Ph = dS, qS = gS, Bh = {
  ltr: pS,
  shouldFlip: !0
}, Fh = {
  ltr: mS,
  shouldFlip: !0
}, cu = {
  ltr: hS,
  shouldFlip: !0
}, Nh = fS, Mh = wS, GS = vS, XS = _S, WS = SS, Jo = yS, KS = xS, uu = CS, du = bS, Mc = kS, YS = $S, QS = {
  ltr: VS,
  shouldFlip: !0
}, JS = {
  ltr: ES,
  shouldFlip: !0
}, ZS = LS, ey = {
  langCodeMap: {
    ar: Dh
  },
  default: TS
}, ty = {
  langCodeMap: {
    ar: Dh
  },
  default: AS
}, Uh = DS, er = {
  ltr: PS,
  shouldFlip: !0
}, ny = BS, oy = FS, _a = {
  ltr: NS,
  shouldFlip: !0
}, gu = {
  ltr: MS,
  shouldFlip: !0
}, sy = {
  ltr: US,
  shouldFlip: !0
}, Ih = IS, ay = RS, Uc = zS, iy = OS, ry = HS, Rh = jS, ly = {
  [en]: Rh,
  [Sn]: ZS,
  [ee]: cu
}, cy = {
  [ee]: JS,
  [Ee]: ny
};
class Ut {
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
    return ly[this.provider] || null;
  }
  get expandableIcon() {
    return cy[this.provider] || this.icon;
  }
}
const ds = window.Vue.computed, { topics: dd, regions: gd } = mw.loader.require(
  "ext.cx.articlefilters"
), uy = (e) => new ia({
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
}), tr = () => {
  const e = we(), { currentSuggestionFilters: t, setFilterURLParams: n } = D(), { validateFilters: o, filtersValidatorError: s } = Qc(), a = new Ut({
    id: en,
    type: Ye,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }), r = new Ut({
    id: Sn,
    type: Ye,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }), l = new Ut({
    id: ee,
    type: Ye,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }), { pageCollectionGroups: u, pageCollectionGroupsFetched: d } = lu(), i = ds(() => {
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
      const j = x[P].map(
        (ae) => new Ut({
          id: ae.name,
          label: ae.name,
          type: ee
        })
      ), oe = new Ut({
        id: P,
        label: P,
        type: ee,
        subFilters: j
      });
      I.push(oe);
    }
    const L = (u.value.ungrouped || []).map(
      (P) => new Ut({
        id: P.name,
        label: P.name,
        type: ee
      })
    );
    return [...I, ...L];
  }, g = ds(
    () => new ia({
      id: ee,
      type: ee,
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: c()
    })
  ), p = ds(() => new ia({
    id: Ee,
    type: Ee,
    label: e.i18n("cx-sx-suggestions-filters-tab-regions"),
    filters: gd.map(
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
  })), m = ds(() => {
    const x = [
      i.value,
      ...dd.map(uy),
      p.value
    ];
    return g.value.filters.length && x.splice(1, 0, g.value), x;
  }), h = ds(
    () => [t.value.type, t.value.id].includes(
      ee
    ) && !d.value
  ), f = () => {
    if (h.value)
      return [];
    const x = _();
    return x.type === Xe || x.type === Ee || x.type === _t || x.type === ee || x.id === ee ? [x, a] : [a, r];
  }, w = (x) => {
    n(x.type, x.id);
  }, _ = () => t.value.type === _t ? new Ut({
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
      const L = dd.flatMap((P) => P.topics).find((P) => P.topicId === x);
      return L ? L.articletopics : [];
    },
    waitingForPageCollectionsFetch: h,
    findSelectedFilter: _,
    validateURLFilterWithCollections: () => {
      if (!d.value)
        return;
      const x = Object.values(u.value).flat(), I = o(
        {
          type: t.value.type,
          id: t.value.id
        },
        x
      );
      n(I.type, I.id), s.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
    },
    getCountries: (x) => {
      const I = gd.find((L) => L.id === x);
      return I ? I.countries.map((L) => L.id) : [x];
    }
  };
}, dy = window.Vuex.useStore, gy = () => {
  const e = dy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = D(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Qo(), { getArticleTopics: l } = tr();
  return {
    fetchPageSuggestionsByTopics: (i) => C(void 0, null, function* () {
      const c = o.value.id, g = {
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
      const c = o.value.id, g = {
        id: c,
        type: Xe
      }, p = l(c), m = [];
      return yield ro(() => C(void 0, null, function* () {
        const h = yield me.fetchSectionSuggestionsByTopics(
          t.value,
          n.value,
          p
        );
        let f = h.filter(
          (_) => s(_)
        );
        const w = h.filter(
          (_) => !s(_)
        );
        return f = f.slice(0, i), m.push(...f), w.forEach((_) => {
          _ && !r(_) && (_.isListable = !1, e.commit("suggestions/addSectionSuggestion", _));
        }), m.length >= i;
      })), m.forEach(
        (h) => h.suggestionProvider = g
      ), m;
    })
  };
}, py = window.Vuex.useStore, my = () => {
  const e = py(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = D(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Qo(), { getCountries: l } = tr();
  return {
    fetchPageSuggestionsByCountries: (i) => C(void 0, null, function* () {
      let c = yield me.fetchPageSuggestionsByCountries(
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
      return yield ro(() => C(void 0, null, function* () {
        const g = yield me.fetchSectionSuggestionsByCountries(
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
}, hy = window.Vuex.useStore, fy = window.Vue.computed, wy = () => {
  const e = hy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = D(), s = fy(() => {
    var i;
    return ((i = o.value) == null ? void 0 : i.type) !== ee ? null : o.value.id;
  }), {
    isSectionSuggestionValid: a,
    isPageSuggestionValid: r,
    sectionSuggestionExists: l
  } = Qo();
  return {
    fetchSectionSuggestionsByCollections: () => C(void 0, null, function* () {
      const i = [], c = yield me.fetchSectionSuggestionsByCollections(
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
      let c = yield me.fetchPageSuggestionsByCollections(
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
}, vy = window.Vuex.useStore, _y = () => {
  const e = vy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = D(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Qo();
  return {
    fetchPageSuggestionsBySeed: (d) => C(void 0, null, function* () {
      const i = o.value.id;
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
          type: _t
        }
      ), c;
    }),
    fetchSectionSuggestionsBySeed: (d) => C(void 0, null, function* () {
      const i = [], c = o.value.id;
      return yield ro(() => C(void 0, null, function* () {
        const g = yield me.fetchSectionSuggestions(
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
          type: _t
        }
      ), i;
    })
  };
}, Sy = () => {
  const { currentSuggestionFilters: e } = D(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = lS(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = uS(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = gy(), {
    fetchPageSuggestionsByCountries: l,
    fetchSectionSuggestionsByCountries: u
  } = my(), {
    fetchPageSuggestionsByCollections: d,
    fetchSectionSuggestionsByCollections: i
  } = wy(), { fetchPageSuggestionsBySeed: c, fetchSectionSuggestionsBySeed: g } = _y(), p = {
    [en]: t,
    [Sn]: o,
    [ee]: d,
    [Xe]: a,
    [Ee]: l,
    [_t]: c
  }, m = {
    [en]: n,
    [Sn]: s,
    [ee]: i,
    [Xe]: r,
    [Ee]: u,
    [_t]: g
  }, h = (_) => _.type === Ye ? _.id : _.type;
  return {
    getCurrentPageSuggestionProvider: () => p[h(e.value)],
    getCurrentSectionSuggestionProvider: () => m[h(e.value)]
  };
}, yy = window.Vuex.useStore, pu = () => {
  const e = yy(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = au(), { sourceLanguageURLParameter: o } = D(), s = Yo(), a = () => {
    const g = t(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, r = () => {
    const g = n(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, {
    getCurrentPageSuggestionProvider: l,
    getCurrentSectionSuggestionProvider: u
  } = Sy(), d = (g) => {
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
}, xy = window.Vuex.useStore, zh = () => {
  const e = xy();
  return (t) => C(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield me.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, Cy = window.Vuex.useStore, Oh = () => {
  const e = Cy(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = pu(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = au(), { targetLanguageURLParameter: a } = D(), r = zh();
  return () => C(void 0, null, function* () {
    const l = s(0), u = o(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, i = l.length === d, c = u.length === d;
    i && c || (yield r(a.value), t(), n());
  });
}, by = window.Vuex.useStore, Na = /* @__PURE__ */ new Map(), nr = () => {
  const e = by(), t = Yo();
  return (n, o, s) => C(void 0, null, function* () {
    const a = `${n}:${o}:${s}`;
    if (Na.has(a))
      return Na.get(a);
    const l = (() => C(void 0, null, function* () {
      let u = e.getters["suggestions/getSectionSuggestionsForArticle"](n, o, s);
      if (!u) {
        u = yield me.fetchSectionSuggestion(
          n,
          s,
          o
        );
        try {
          if (yield t(n, [s]), u)
            u.isListable = !1, e.commit("suggestions/addSectionSuggestion", u);
          else {
            const d = e.getters["mediawiki/getPage"](
              n,
              s
            );
            return new co({
              sourceLanguage: n,
              targetLanguage: o,
              sourceTitle: s,
              langLinksCount: d.langLinksCount,
              wikidataId: d.wikidataId
            });
          }
        } catch (d) {
          const i = new Error(
            `No page metadata found for title ${s} and language pair ${n}-${o}. ${d}`
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
}, pd = window.Vue.computed, ky = window.Vuex.useStore, Cn = () => {
  const e = ky(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = D(), s = pd(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = pd(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (l, u) => s.value.getTitleForLanguage(l) || s.value.getTitleForLanguage(u)
  };
}, Hh = window.Vuex.useStore, { setLanguageURLParams: $y } = D(), mu = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), $y(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, jh = () => {
  const e = Hh(), t = Oh();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = Le(e);
    n === o && (n = a.value, o = s.value), mu(e, n, o), t();
  };
}, Vy = () => {
  const e = Hh(), t = nr(), { currentLanguageTitleGroup: n, targetPageExists: o } = Cn(), s = Yo();
  return (a, r) => C(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: u,
      setPageURLParam: d,
      clearSectionURLParameter: i
    } = D();
    a === r && (a = u.value, r = l.value);
    const c = n.value.getTitleForLanguage(a);
    mu(e, a, r), d(c), o.value ? (i(), yield t(
      l.value,
      u.value,
      c
    )) : yield s(l.value, [c]);
  });
}, Ey = window.Vuex.useStore, Ly = window.Vue.ref, md = Ly(!1), qh = () => {
  const e = Ey(), {
    supportedSourceLanguageCodes: t,
    supportedTargetLanguageCodes: n,
    fetchSupportedLanguageCodes: o
  } = fa(), { sourceLanguageURLParameter: s, targetLanguageURLParameter: a } = D(), r = () => {
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
    mu(e, u, d), md.value = !0;
  }), applicationLanguagesInitialized: md };
};
const Ty = window.Vue.resolveDynamicComponent, hd = window.Vue.openBlock, fd = window.Vue.createBlock, Ay = window.Vue.Transition, gs = window.Vue.withCtx, ps = window.Vue.createVNode, Dy = window.Vue.resolveComponent, Tr = window.Vue.unref, Py = window.Vuex.useStore, wd = window.Vue.computed, By = window.Vue.onMounted, Fy = window.Vue.inject, Ny = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = D(), { initializeApplicationLanguages: n } = qh();
    t(), n();
    const o = Fy("breakpoints"), s = wd(() => o.value.mobile), a = Py(), r = wd(
      () => a.state.application.autoSavePending
    );
    return By(() => {
      window.addEventListener("beforeunload", (l) => {
        r.value && (l.preventDefault(), l.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (l) => {
        document.visibilityState === "visible" && uh.assertUser().then(() => a.commit("application/setIsLoginDialogOn", !1)).catch((u) => {
          u instanceof Xo && a.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (l, u) => {
      const d = Dy("router-view");
      return hd(), fd(Tr(s0), { id: "contenttranslation" }, {
        default: gs(() => [
          ps(Tr(N), { class: "cx-container" }, {
            default: gs(() => [
              ps(Tr(k), {
                class: "cx-container__wrapper-col",
                cols: "12"
              }, {
                default: gs(() => [
                  ps(d, null, {
                    default: gs(({ Component: i, route: c }) => [
                      ps(Ay, {
                        name: s.value ? c.meta.transitionName : ""
                      }, {
                        default: gs(() => [
                          (hd(), fd(Ty(i)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      ps(_v)
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
}, My = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translatorStats: null
}, Uy = {
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
class Gh {
  constructor({ id: t, type: n, question: o, url: s }) {
    this.id = t, this.type = n, this.question = o, this.url = s;
  }
}
class On {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new Gh(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const vd = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => tt(pe({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class Iy {
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
    const t = vd((s = this.user) == null ? void 0 : s.content), n = vd((a = this.mt) == null ? void 0 : a.content);
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
class hu extends Kc {
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
const or = mw.user.isAnon() ? void 0 : "user", Xh = (e) => {
  if (e === "assertuserfailed")
    throw new Xo();
};
function Wh(e, t = null) {
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
        (u) => new Wi(tt(pe({}, u), { status: e }))
      ) : r = a.map(
        (u) => new hu(tt(pe({}, u), { status: e }))
      ), (l = s.continue) != null && l.offset) {
        const u = yield Wh(
          e,
          s.continue.offset
        );
        r = r.concat(u);
      }
      return r;
    }));
  });
}
function Ry(e) {
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
      (a) => new Iy(a)
    );
  });
}
function zy(e, t, n, o, s) {
  return C(this, null, function* () {
    if (!o)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== re.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
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
const Oy = (e, t, n) => {
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
}, Hy = ({
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
    assert: or,
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
          publishFeedbackMessage: new On({
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
    Xh(h);
    let w;
    return f = f || {}, f.exception ? w = f.exception.message : f.error ? w = f.error.info : w = "Unknown error", {
      publishFeedbackMessage: new On({
        text: w,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, jy = ({
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
    assert: or,
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
    Xh(p);
    let h;
    return m.exception ? h = m.exception.message : m.error ? h = m.error.info : h = "Unknown error", new On({ text: h, status: "error" });
  });
}, qy = (e) => {
  const t = {
    assert: or,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, Gy = () => {
  const e = {
    assert: or,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new hu(n.cxcheckunreviewed.translation)
  );
}, Xy = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, Wy = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, Ky = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), St = {
  fetchTranslations: Wh,
  fetchTranslationUnits: Ry,
  fetchSegmentTranslation: zy,
  parseTemplateWikitext: Oy,
  publishTranslation: Hy,
  saveTranslation: jy,
  deleteTranslation: Xy,
  fetchTranslatorStats: Ky,
  deleteCXTranslation: Wy,
  splitTranslation: qy,
  checkUnreviewedTranslations: Gy
};
function Yy(t) {
  return C(this, arguments, function* ({ commit: e }) {
    const n = yield St.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const Qy = {
  fetchTranslatorStats: Yy
}, Jy = {
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
}, Zy = {
  namespaced: !0,
  state: My,
  getters: Uy,
  actions: Qy,
  mutations: Jy
}, ex = {
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
  appendixSectionTitles: F_
}, tx = {
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
}, nx = {
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
}, ox = {
  namespaced: !0,
  state: ex,
  getters: tx,
  actions: {},
  mutations: nx
}, sx = {
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
}, ax = {
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
  isValidProviderForTranslation: (e, t) => (n, o, s) => t.getSupportedMTProviders(n, o).includes(s) && s !== re.EMPTY_TEXT_PROVIDER_KEY,
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
function ix(o) {
  return C(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: s } = t.application;
    if ((r = n.nearbyPages[s]) != null && r.length)
      return;
    const a = yield lo.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const rx = { fetchNearbyPages: ix }, lx = {
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
}, cx = {
  namespaced: !0,
  state: sx,
  getters: ax,
  actions: rx,
  mutations: lx
}, ux = {
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
}, dx = {
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
    const { sourceLanguage: n, targetLanguage: o } = e, s = re.getStorageKey(
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
}, gx = {
  namespaced: !0,
  state: ux,
  mutations: dx
}, px = window.Vuex.createStore, mx = px({
  modules: { translator: Zy, suggestions: ox, mediawiki: cx, application: gx }
});
function hx() {
  return Kh().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Kh() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const fx = typeof Proxy == "function", wx = "devtools-plugin:setup", vx = "plugin:settings:set";
let fo, Ic;
function _x() {
  var e;
  return fo !== void 0 || (typeof window != "undefined" && window.performance ? (fo = !0, Ic = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (fo = !0, Ic = global.perf_hooks.performance) : fo = !1), fo;
}
function Sx() {
  return _x() ? Ic.now() : Date.now();
}
class yx {
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
        return Sx();
      }
    }, n && n.on(vx, (r, l) => {
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
function xx(e, t) {
  const n = e, o = Kh(), s = hx(), a = fx && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(wx, e, t);
  else {
    const r = a ? new yx(n, s) : null;
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
const Yh = window.Vue.getCurrentInstance, qo = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const Jt = window.Vue.computed, ra = window.Vue.unref, Cx = window.Vue.watchEffect, Qh = window.Vue.defineComponent, bx = window.Vue.reactive, Jh = window.Vue.h, Ar = window.Vue.provide, kx = window.Vue.ref, Zh = window.Vue.watch, $x = window.Vue.shallowRef, Vx = window.Vue.shallowReactive, Ex = window.Vue.nextTick, _n = typeof window != "undefined";
function Lx(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const Q = Object.assign;
function Dr(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = ut(s) ? s.map(e) : e(s);
  }
  return n;
}
const la = () => {
}, ut = Array.isArray;
function W(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Tx = /\/$/, Ax = (e) => e.replace(Tx, "");
function Pr(e, t, n = "/") {
  let o, s = {}, a = "", r = "";
  const l = t.indexOf("#");
  let u = t.indexOf("?");
  return l < u && l >= 0 && (u = -1), u > -1 && (o = t.slice(0, u), a = t.slice(u + 1, l > -1 ? l : t.length), s = e(a)), l > -1 && (o = o || t.slice(0, l), r = t.slice(l, t.length)), o = Bx(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + r,
    path: o,
    query: s,
    hash: r
  };
}
function Dx(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function _d(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Sd(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && Hn(t.matched[o], n.matched[s]) && ef(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Hn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function ef(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Px(e[n], t[n]))
      return !1;
  return !0;
}
function Px(e, t) {
  return ut(e) ? yd(e, t) : ut(t) ? yd(t, e) : e === t;
}
function yd(e, t) {
  return ut(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function Bx(e, t) {
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
var da;
(function(e) {
  e.pop = "pop", e.push = "push";
})(da || (da = {}));
var ca;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(ca || (ca = {}));
function Fx(e) {
  if (!e)
    if (_n) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Ax(e);
}
const Nx = /^[^#]+#/;
function Mx(e, t) {
  return e.replace(Nx, "#") + t;
}
function Ux(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const sr = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function Ix(e) {
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
    t = Ux(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function xd(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Rc = /* @__PURE__ */ new Map();
function Rx(e, t) {
  Rc.set(e, t);
}
function zx(e) {
  const t = Rc.get(e);
  return Rc.delete(e), t;
}
let Ox = () => location.protocol + "//" + location.host;
function tf(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = s.includes(e.slice(a)) ? e.slice(a).length : 1, u = s.slice(l);
    return u[0] !== "/" && (u = "/" + u), _d(u, "");
  }
  return _d(n, e) + o + s;
}
function Hx(e, t, n, o) {
  let s = [], a = [], r = null;
  const l = ({ state: g }) => {
    const p = tf(e, location), m = n.value, h = t.value;
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
        type: da.pop,
        direction: f ? f > 0 ? ca.forward : ca.back : ca.unknown
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
    g.state && g.replaceState(Q({}, g.state, { scroll: sr() }), "");
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
function Cd(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? sr() : null
  };
}
function jx(e) {
  const { history: t, location: n } = window, o = {
    value: tf(e, n)
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
    const c = e.indexOf("#"), g = c > -1 ? (n.host && document.querySelector("base") ? e : e.slice(c)) + u : Ox() + e + u;
    try {
      t[i ? "replaceState" : "pushState"](d, "", g), s.value = d;
    } catch (p) {
      ({}).NODE_ENV !== "production" ? W("Error with push/replace State", p) : console.error(p), n[i ? "replace" : "assign"](g);
    }
  }
  function r(u, d) {
    const i = Q({}, t.state, Cd(
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
        scroll: sr()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && W(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(i.current, i, !0);
    const c = Q({}, Cd(o.value, u, null), { position: i.position + 1 }, d);
    a(u, c, !1), o.value = u;
  }
  return {
    location: o,
    state: s,
    push: l,
    replace: r
  };
}
function qx(e) {
  e = Fx(e);
  const t = jx(e), n = Hx(e, t.state, t.location, t.replace);
  function o(a, r = !0) {
    r || n.pauseListeners(), history.go(a);
  }
  const s = Q({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: Mx.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function Gx(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && W(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), qx(e);
}
function Xx(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function nf(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const kn = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, zc = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var bd;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(bd || (bd = {}));
const Wx = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${Yx(t)}" via a navigation guard.`;
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
function Go(e, t) {
  return {}.NODE_ENV !== "production" ? Q(new Error(Wx[e](t)), {
    type: e,
    [zc]: !0
  }, t) : Q(new Error(), {
    type: e,
    [zc]: !0
  }, t);
}
function nn(e, t) {
  return e instanceof Error && zc in e && (t == null || !!(e.type & t));
}
const Kx = ["params", "query", "hash"];
function Yx(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of Kx)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const kd = "[^/]+?", Qx = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Jx = /[.+*?^${}()[\]/\\]/g;
function Zx(e, t) {
  const n = Q({}, Qx, t), o = [];
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
        c || (s += "/"), s += g.value.replace(Jx, "\\$&"), p += 40;
      else if (g.type === 1) {
        const { value: m, repeatable: h, optional: f, regexp: w } = g;
        a.push({
          name: m,
          repeatable: h,
          optional: f
        });
        const _ = w || kd;
        if (_ !== kd) {
          p += 10;
          try {
            new RegExp(`(${_})`);
          } catch (S) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${_}): ` + S.message);
          }
        }
        let y = h ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
        c || (y = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        f && d.length < 2 ? `(?:/${y})` : "/" + y), f && (y += "?"), s += y, p += 20, f && (p += -8), h && (p += -20), _ === ".*" && (p += -50);
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
          if (ut(w) && !h)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const _ = ut(w) ? w.join("/") : w;
          if (!_)
            if (f)
              g.length < 2 && (i.endsWith("/") ? i = i.slice(0, -1) : c = !0);
            else
              throw new Error(`Missing required param "${m}"`);
          i += _;
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
function eC(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function tC(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = eC(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if ($d(o))
      return 1;
    if ($d(s))
      return -1;
  }
  return s.length - o.length;
}
function $d(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const nC = {
  type: 0,
  value: ""
}, oC = /[a-zA-Z0-9_]/;
function sC(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[nC]];
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
        u === "(" ? n = 2 : oC.test(u) ? g() : (c(), n = 0, u !== "*" && u !== "?" && u !== "+" && l--);
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
function aC(e, t, n) {
  const o = Zx(sC(e.path), n);
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
function iC(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = Ld({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(i) {
    return o.get(i);
  }
  function a(i, c, g) {
    const p = !g, m = rC(i);
    ({}).NODE_ENV !== "production" && dC(m, c), m.aliasOf = g && g.record;
    const h = Ld(t, i), f = [
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
    let w, _;
    for (const y of f) {
      const { path: S } = y;
      if (c && S[0] !== "/") {
        const b = c.record.path, E = b[b.length - 1] === "/" ? "" : "/";
        y.path = c.record.path + (S && E + S);
      }
      if ({}.NODE_ENV !== "production" && y.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (w = aC(y, c, h), {}.NODE_ENV !== "production" && c && S[0] === "/" && gC(w, c), g ? (g.alias.push(w), {}.NODE_ENV !== "production" && uC(g, w)) : (_ = _ || w, _ !== w && _.alias.push(w), p && i.name && !Ed(w) && r(i.name)), m.children) {
        const b = m.children;
        for (let E = 0; E < b.length; E++)
          a(b[E], w, g && g.children[E]);
      }
      g = g || w, (w.record.components && Object.keys(w.record.components).length || w.record.name || w.record.redirect) && u(w);
    }
    return _ ? () => {
      r(_);
    } : la;
  }
  function r(i) {
    if (nf(i)) {
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
    for (; c < n.length && tC(i, n[c]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[c].record.path || !of(i, n[c])); )
      c++;
    n.splice(c, 0, i), i.record.name && !Ed(i) && o.set(i.record.name, i);
  }
  function d(i, c) {
    let g, p = {}, m, h;
    if ("name" in i && i.name) {
      if (g = o.get(i.name), !g)
        throw Go(1, {
          location: i
        });
      if ({}.NODE_ENV !== "production") {
        const _ = Object.keys(i.params || {}).filter((y) => !g.keys.find((S) => S.name === y));
        _.length && W(`Discarded invalid param(s) "${_.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = g.record.name, p = Q(
        // paramsFromLocation is a new object
        Vd(
          c.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((_) => !_.optional).map((_) => _.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && Vd(i.params, g.keys.map((_) => _.name))
      ), m = g.stringify(p);
    } else if ("path" in i)
      m = i.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && W(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((_) => _.re.test(m)), g && (p = g.parse(m), h = g.record.name);
    else {
      if (g = c.name ? o.get(c.name) : n.find((_) => _.re.test(c.path)), !g)
        throw Go(1, {
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
      meta: cC(f)
    };
  }
  return e.forEach((i) => a(i)), { addRoute: a, resolve: d, removeRoute: r, getRoutes: l, getRecordMatcher: s };
}
function Vd(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function rC(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: lC(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function lC(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function Ed(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function cC(e) {
  return e.reduce((t, n) => Q(t, n.meta), {});
}
function Ld(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Oc(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function uC(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Oc.bind(null, n)))
      return W(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Oc.bind(null, n)))
      return W(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function dC(e, t) {
  t && t.record.name && !e.name && !e.path && W(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function gC(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Oc.bind(null, n)))
      return W(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function of(e, t) {
  return t.children.some((n) => n === e || of(e, n));
}
const sf = /#/g, pC = /&/g, mC = /\//g, hC = /=/g, fC = /\?/g, af = /\+/g, wC = /%5B/g, vC = /%5D/g, rf = /%5E/g, _C = /%60/g, lf = /%7B/g, SC = /%7C/g, cf = /%7D/g, yC = /%20/g;
function fu(e) {
  return encodeURI("" + e).replace(SC, "|").replace(wC, "[").replace(vC, "]");
}
function xC(e) {
  return fu(e).replace(lf, "{").replace(cf, "}").replace(rf, "^");
}
function Hc(e) {
  return fu(e).replace(af, "%2B").replace(yC, "+").replace(sf, "%23").replace(pC, "%26").replace(_C, "`").replace(lf, "{").replace(cf, "}").replace(rf, "^");
}
function CC(e) {
  return Hc(e).replace(hC, "%3D");
}
function bC(e) {
  return fu(e).replace(sf, "%23").replace(fC, "%3F");
}
function kC(e) {
  return e == null ? "" : bC(e).replace(mC, "%2F");
}
function ga(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && W(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function $C(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(af, " "), r = a.indexOf("="), l = ga(r < 0 ? a : a.slice(0, r)), u = r < 0 ? null : ga(a.slice(r + 1));
    if (l in t) {
      let d = t[l];
      ut(d) || (d = t[l] = [d]), d.push(u);
    } else
      t[l] = u;
  }
  return t;
}
function Td(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = CC(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (ut(o) ? o.map((a) => a && Hc(a)) : [o && Hc(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function VC(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = ut(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const EC = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), Ad = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), ar = Symbol({}.NODE_ENV !== "production" ? "router" : ""), uf = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), jc = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function ms() {
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
function zn(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((r, l) => {
    const u = (c) => {
      c === !1 ? l(Go(4, {
        from: n,
        to: t
      })) : c instanceof Error ? l(c) : Xx(c) ? l(Go(2, {
        from: t,
        to: c
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof c == "function" && a.push(c), r());
    }, d = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? LC(u, t, n) : u);
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
function LC(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && W(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function Br(e, t, n, o) {
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
        if (TC(l)) {
          const d = (l.__vccOpts || l)[t];
          d && s.push(zn(d, n, o, a, r));
        } else {
          let u = l();
          ({}).NODE_ENV !== "production" && !("catch" in u) && (W(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), u = Promise.resolve(u)), s.push(() => u.then((d) => {
            if (!d)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = Lx(d) ? d.default : d;
            a.components[r] = i;
            const g = (i.__vccOpts || i)[t];
            return g && zn(g, n, o, a, r)();
          }));
        }
    }
  }
  return s;
}
function TC(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Dd(e) {
  const t = qo(ar), n = qo(uf), o = Jt(() => t.resolve(ra(e.to))), s = Jt(() => {
    const { matched: u } = o.value, { length: d } = u, i = u[d - 1], c = n.matched;
    if (!i || !c.length)
      return -1;
    const g = c.findIndex(Hn.bind(null, i));
    if (g > -1)
      return g;
    const p = Pd(u[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Pd(i) === p && // avoid comparing the child with its parent
      c[c.length - 1].path !== p ? c.findIndex(Hn.bind(null, u[d - 2])) : g
    );
  }), a = Jt(() => s.value > -1 && BC(n.params, o.value.params)), r = Jt(() => s.value > -1 && s.value === n.matched.length - 1 && ef(n.params, o.value.params));
  function l(u = {}) {
    return PC(u) ? t[ra(e.replace) ? "replace" : "push"](
      ra(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(la) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && _n) {
    const u = Yh();
    if (u) {
      const d = {
        route: o.value,
        isActive: a.value,
        isExactActive: r.value
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(d), Cx(() => {
        d.route = o.value, d.isActive = a.value, d.isExactActive = r.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: Jt(() => o.value.href),
    isActive: a,
    isExactActive: r,
    navigate: l
  };
}
const AC = /* @__PURE__ */ Qh({
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
    const n = bx(Dd(e)), { options: o } = qo(ar), s = Jt(() => ({
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
      return e.custom ? a : Jh("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), DC = AC;
function PC(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function BC(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!ut(s) || s.length !== o.length || o.some((a, r) => a !== s[r]))
      return !1;
  }
  return !0;
}
function Pd(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Bd = (e, t, n) => e != null ? e : t != null ? t : n, FC = /* @__PURE__ */ Qh({
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
    ({}).NODE_ENV !== "production" && MC();
    const o = qo(jc), s = Jt(() => e.route || o.value), a = qo(Ad, 0), r = Jt(() => {
      let d = ra(a);
      const { matched: i } = s.value;
      let c;
      for (; (c = i[d]) && !c.components; )
        d++;
      return d;
    }), l = Jt(() => s.value.matched[r.value]);
    Ar(Ad, Jt(() => r.value + 1)), Ar(EC, l), Ar(jc, s);
    const u = kx();
    return Zh(() => [u.value, l.value, e.name], ([d, i, c], [g, p, m]) => {
      i && (i.instances[c] = d, p && p !== i && d && d === g && (i.leaveGuards.size || (i.leaveGuards = p.leaveGuards), i.updateGuards.size || (i.updateGuards = p.updateGuards))), d && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !Hn(i, p) || !g) && (i.enterCallbacks[c] || []).forEach((h) => h(d));
    }, { flush: "post" }), () => {
      const d = s.value, i = e.name, c = l.value, g = c && c.components[i];
      if (!g)
        return Fd(n.default, { Component: g, route: d });
      const p = c.props[i], m = p ? p === !0 ? d.params : typeof p == "function" ? p(d) : p : null, f = Jh(g, Q({}, m, t, {
        onVnodeUnmounted: (w) => {
          w.component.isUnmounted && (c.instances[i] = null);
        },
        ref: u
      }));
      if ({}.NODE_ENV !== "production" && _n && f.ref) {
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
        Fd(n.default, { Component: f, route: d }) || f
      );
    };
  }
});
function Fd(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const NC = FC;
function MC() {
  const e = Yh(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
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
function hs(e, t) {
  const n = Q({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => GC(o, ["instances", "children", "aliasOf"]))
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
let UC = 0;
function IC(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = UC++;
  xx({
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
        value: hs(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: i, componentInstance: c }) => {
      if (c.__vrv_devtools) {
        const g = c.__vrv_devtools;
        i.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: df
        });
      }
      ut(c.__vrl_devtools) && (c.__devtoolsApi = s, c.__vrl_devtools.forEach((g) => {
        let p = mf, m = "";
        g.isExactActive ? (p = pf, m = "This is exactly active") : g.isActive && (p = gf, m = "This link is active"), i.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: m,
          backgroundColor: p
        });
      }));
    }), Zh(t.currentRoute, () => {
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
        guard: Ma("beforeEach"),
        from: hs(c, "Current Location during this navigation"),
        to: hs(i, "Target location")
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
      }, p.status = Ma("❌")) : p.status = Ma("✅"), p.from = hs(c, "Current Location during this navigation"), p.to = hs(i, "Target location"), s.addTimelineEvent({
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
      c.forEach(wf), i.filter && (c = c.filter((g) => (
        // save matches state based on the payload
        qc(g, i.filter.toLowerCase())
      ))), c.forEach((g) => ff(g, t.currentRoute.value)), i.rootNodes = c.map(hf);
    }
    let d;
    s.on.getInspectorTree((i) => {
      d = i, i.app === e && i.inspectorId === l && u();
    }), s.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === l) {
        const g = n.getRoutes().find((p) => p.record.__vd_id === i.nodeId);
        g && (i.state = {
          options: zC(g)
        });
      }
    }), s.sendInspectorTree(l), s.sendInspectorState(l);
  });
}
function RC(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function zC(e) {
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
        display: e.keys.map((o) => `${o.name}${RC(o)}`).join(" "),
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
const df = 15485081, gf = 2450411, pf = 8702998, OC = 2282478, mf = 16486972, HC = 6710886;
function hf(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: OC
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: mf
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: df
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: pf
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: gf
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: HC
  });
  let o = n.__vd_id;
  return o == null && (o = String(jC++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(hf)
  };
}
let jC = 0;
const qC = /^\/(.*)\/([a-z]*)$/;
function ff(e, t) {
  const n = t.matched.length && Hn(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => Hn(o, e.record))), e.children.forEach((o) => ff(o, t));
}
function wf(e) {
  e.__vd_match = !1, e.children.forEach(wf);
}
function qc(e, t) {
  const n = String(e.re).match(qC);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => qc(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = ga(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => qc(r, t));
}
function GC(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function XC(e) {
  const t = iC(e.routes, e), n = e.parseQuery || $C, o = e.stringifyQuery || Td, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = ms(), r = ms(), l = ms(), u = $x(kn);
  let d = kn;
  _n && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = Dr.bind(null, (v) => "" + v), c = Dr.bind(null, kC), g = (
    // @ts-expect-error: intentionally avoid the type check
    Dr.bind(null, ga)
  );
  function p(v, T) {
    let A, F;
    return nf(v) ? (A = t.getRecordMatcher(v), F = T) : F = v, t.addRoute(F, A);
  }
  function m(v) {
    const T = t.getRecordMatcher(v);
    T ? t.removeRoute(T) : {}.NODE_ENV !== "production" && W(`Cannot remove non-existent route "${String(v)}"`);
  }
  function h() {
    return t.getRoutes().map((v) => v.record);
  }
  function f(v) {
    return !!t.getRecordMatcher(v);
  }
  function w(v, T) {
    if (T = Q({}, T || u.value), typeof v == "string") {
      const z = Pr(n, v, T.path), ie = t.resolve({ path: z.path }, T), et = s.createHref(z.fullPath);
      return {}.NODE_ENV !== "production" && (et.startsWith("//") ? W(`Location "${v}" resolved to "${et}". A resolved location cannot start with multiple slashes.`) : ie.matched.length || W(`No match found for location with path "${v}"`)), Q(z, ie, {
        params: g(ie.params),
        hash: ga(z.hash),
        redirectedFrom: void 0,
        href: et
      });
    }
    let A;
    if ("path" in v)
      ({}).NODE_ENV !== "production" && "params" in v && !("name" in v) && // @ts-expect-error: the type is never
      Object.keys(v.params).length && W(`Path "${v.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), A = Q({}, v, {
        path: Pr(n, v.path, T.path).path
      });
    else {
      const z = Q({}, v.params);
      for (const ie in z)
        z[ie] == null && delete z[ie];
      A = Q({}, v, {
        params: c(z)
      }), T.params = c(T.params);
    }
    const F = t.resolve(A, T), X = v.hash || "";
    ({}).NODE_ENV !== "production" && X && !X.startsWith("#") && W(`A \`hash\` should always start with the character "#". Replace "${X}" with "#${X}".`), F.params = i(g(F.params));
    const ge = Dx(o, Q({}, v, {
      hash: xC(X),
      path: F.path
    })), q = s.createHref(ge);
    return {}.NODE_ENV !== "production" && (q.startsWith("//") ? W(`Location "${v}" resolved to "${q}". A resolved location cannot start with multiple slashes.`) : F.matched.length || W(`No match found for location with path "${"path" in v ? v.path : v}"`)), Q({
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
        o === Td ? VC(v.query) : v.query || {}
      )
    }, F, {
      redirectedFrom: void 0,
      href: q
    });
  }
  function _(v) {
    return typeof v == "string" ? Pr(n, v, u.value.path) : Q({}, v);
  }
  function y(v, T) {
    if (d !== v)
      return Go(8, {
        from: T,
        to: v
      });
  }
  function S(v) {
    return x(v);
  }
  function b(v) {
    return S(Q(_(v), { replace: !0 }));
  }
  function E(v) {
    const T = v.matched[v.matched.length - 1];
    if (T && T.redirect) {
      const { redirect: A } = T;
      let F = typeof A == "function" ? A(v) : A;
      if (typeof F == "string" && (F = F.includes("?") || F.includes("#") ? F = _(F) : (
        // force empty params
        { path: F }
      ), F.params = {}), {}.NODE_ENV !== "production" && !("path" in F) && !("name" in F))
        throw W(`Invalid redirect found:
${JSON.stringify(F, null, 2)}
 when navigating to "${v.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return Q({
        query: v.query,
        hash: v.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in F ? {} : v.params
      }, F);
    }
  }
  function x(v, T) {
    const A = d = w(v), F = u.value, X = v.state, ge = v.force, q = v.replace === !0, z = E(A);
    if (z)
      return x(
        Q(_(z), {
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
    return !ge && Sd(o, F, A) && (et = Go(16, { to: ie, from: F }), Pe(
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
          Sd(o, w($e.to), ie) && // and we have done it a couple of times
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
            }, _($e.to), {
              state: typeof $e.to == "object" ? Q({}, X, $e.to.state) : X,
              force: ge
            }),
            // preserve the original redirectedFrom if any
            T || ie
          );
      } else
        $e = oe(ie, F, !0, q, X);
      return j(ie, F, $e), $e;
    });
  }
  function I(v, T) {
    const A = y(v, T);
    return A ? Promise.reject(A) : Promise.resolve();
  }
  function L(v) {
    const T = B.values().next().value;
    return T && typeof T.runWithContext == "function" ? T.runWithContext(v) : v();
  }
  function P(v, T) {
    let A;
    const [F, X, ge] = WC(v, T);
    A = Br(F.reverse(), "beforeRouteLeave", v, T);
    for (const z of F)
      z.leaveGuards.forEach((ie) => {
        A.push(zn(ie, v, T));
      });
    const q = I.bind(null, v, T);
    return A.push(q), Y(A).then(() => {
      A = [];
      for (const z of a.list())
        A.push(zn(z, v, T));
      return A.push(q), Y(A);
    }).then(() => {
      A = Br(X, "beforeRouteUpdate", v, T);
      for (const z of X)
        z.updateGuards.forEach((ie) => {
          A.push(zn(ie, v, T));
        });
      return A.push(q), Y(A);
    }).then(() => {
      A = [];
      for (const z of ge)
        if (z.beforeEnter)
          if (ut(z.beforeEnter))
            for (const ie of z.beforeEnter)
              A.push(zn(ie, v, T));
          else
            A.push(zn(z.beforeEnter, v, T));
      return A.push(q), Y(A);
    }).then(() => (v.matched.forEach((z) => z.enterCallbacks = {}), A = Br(ge, "beforeRouteEnter", v, T), A.push(q), Y(A))).then(() => {
      A = [];
      for (const z of r.list())
        A.push(zn(z, v, T));
      return A.push(q), Y(A);
    }).catch((z) => nn(
      z,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? z : Promise.reject(z));
  }
  function j(v, T, A) {
    l.list().forEach((F) => L(() => F(v, T, A)));
  }
  function oe(v, T, A, F, X) {
    const ge = y(v, T);
    if (ge)
      return ge;
    const q = T === kn, z = _n ? history.state : {};
    A && (F || q ? s.replace(v.fullPath, Q({
      scroll: q && z && z.scroll
    }, X)) : s.push(v.fullPath, X)), u.value = v, Pe(v, T, A, q), We();
  }
  let ae;
  function te() {
    ae || (ae = s.listen((v, T, A) => {
      if (!M.listening)
        return;
      const F = w(v), X = E(F);
      if (X) {
        x(Q(X, { replace: !0 }), F).catch(la);
        return;
      }
      d = F;
      const ge = u.value;
      _n && Rx(xd(ge.fullPath, A.delta), sr()), P(F, ge).catch((q) => nn(
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
        ) && !A.delta && A.type === da.pop && s.go(-1, !1);
      }).catch(la), Promise.reject()) : (A.delta && s.go(-A.delta, !1), le(q, F, ge))).then((q) => {
        q = q || oe(
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
        ) ? s.go(-A.delta, !1) : A.type === da.pop && nn(
          q,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), j(F, ge, q);
      }).catch(la);
    }));
  }
  let R = ms(), J = ms(), se;
  function le(v, T, A) {
    We(v);
    const F = J.list();
    return F.length ? F.forEach((X) => X(v, T, A)) : ({}.NODE_ENV !== "production" && W("uncaught error during route navigation:"), console.error(v)), Promise.reject(v);
  }
  function ke() {
    return se && u.value !== kn ? Promise.resolve() : new Promise((v, T) => {
      R.add([v, T]);
    });
  }
  function We(v) {
    return se || (se = !v, te(), R.list().forEach(([T, A]) => v ? A(v) : T()), R.reset()), v;
  }
  function Pe(v, T, A, F) {
    const { scrollBehavior: X } = e;
    if (!_n || !X)
      return Promise.resolve();
    const ge = !A && zx(xd(v.fullPath, 0)) || (F || !A) && history.state && history.state.scroll || null;
    return Ex().then(() => X(v, T, ge)).then((q) => q && Ix(q)).catch((q) => le(q, v, T));
  }
  const Z = (v) => s.go(v);
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
    install(v) {
      const T = this;
      v.component("RouterLink", DC), v.component("RouterView", NC), v.config.globalProperties.$router = T, Object.defineProperty(v.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => ra(u)
      }), _n && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !U && u.value === kn && (U = !0, S(s.location).catch((X) => {
        ({}).NODE_ENV !== "production" && W("Unexpected error when starting the router:", X);
      }));
      const A = {};
      for (const X in kn)
        Object.defineProperty(A, X, {
          get: () => u.value[X],
          enumerable: !0
        });
      v.provide(ar, T), v.provide(uf, Vx(A)), v.provide(jc, u);
      const F = v.unmount;
      B.add(v), v.unmount = function() {
        B.delete(v), B.size < 1 && (d = kn, ae && ae(), ae = null, u.value = kn, U = !1, se = !1), F();
      }, {}.NODE_ENV !== "production" && _n && IC(v, T, t);
    }
  };
  function Y(v) {
    return v.reduce((T, A) => T.then(() => L(A)), Promise.resolve());
  }
  return M;
}
function WC(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let r = 0; r < a; r++) {
    const l = t.matched[r];
    l && (e.matched.find((d) => Hn(d, l)) ? o.push(l) : n.push(l));
    const u = e.matched[r];
    u && (t.matched.find((d) => Hn(d, u)) || s.push(u));
  }
  return [n, o, s];
}
function Ze() {
  return qo(ar);
}
const KC = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), r = parseInt(e.slice(12, 14)), l = new Date(Date.UTC(t, n, o, s, a, r)), d = (/* @__PURE__ */ new Date()).getTime() - l.getTime();
  return Math.round(d / (1e3 * 3600 * 24));
}, YC = (e) => {
  const t = KC(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const Ct = window.Vue.unref, wo = window.Vue.createVNode, on = window.Vue.createElementVNode, Nd = window.Vue.renderSlot, Md = window.Vue.withModifiers, Fr = window.Vue.toDisplayString, Nr = window.Vue.withCtx, QC = window.Vue.openBlock, JC = window.Vue.createElementBlock, ZC = window.Vue.createCommentVNode, eb = { class: "col shrink pe-4" }, tb = { class: "col" }, nb = { class: "cx-translation__details column justify-between ma-0" }, ob = { class: "row ma-0" }, sb = { class: "col grow" }, ab = { class: "col shrink ps-2" }, ib = ["dir", "textContent"], rb = ["dir", "textContent"], lb = ["textContent"], cb = window.Vuex.useStore, ub = window.Vue.computed, vf = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: Kc,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e, { emit: t }) {
    const n = e, o = cb(), s = (l, u) => {
      const d = o.getters["mediawiki/getPage"](l, u);
      return d == null ? void 0 : d.thumbnail;
    }, a = we(), r = ub(() => {
      const l = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, u = YC(n.translation.startTimestamp);
      return a.i18n(
        l[u.postfix],
        u.value
      );
    });
    return (l, u) => e.translation ? (QC(), JC("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: u[1] || (u[1] = Md((d) => l.$emit("click"), ["stop"]))
    }, [
      on("div", eb, [
        wo(Ct(Wc), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      on("div", tb, [
        on("div", nb, [
          on("div", ob, [
            on("div", sb, [
              Nd(l.$slots, "title")
            ]),
            on("div", ab, [
              wo(Ct(Je), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: u[0] || (u[0] = Md((d) => l.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          Nd(l.$slots, "mid-content"),
          wo(Ct(N), { class: "cx-translation__footer ma-0" }, {
            default: Nr(() => [
              wo(Ct(k), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: Nr(() => [
                  on("span", {
                    class: "mw-ui-autonym",
                    dir: Ct(H.getDir)(e.translation.sourceLanguage),
                    textContent: Fr(Ct(H.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, ib),
                  wo(Ct(Je), {
                    icon: Ct(T0),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  on("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: Ct(H.getDir)(e.translation.targetLanguage),
                    textContent: Fr(Ct(H.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, rb)
                ]),
                _: 1
              }),
              wo(Ct(k), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: Nr(() => [
                  on("span", {
                    textContent: Fr(r.value)
                  }, null, 8, lb)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : ZC("", !0);
  }
};
const fs = window.Vue.unref, db = window.Vue.toDisplayString, gb = window.Vue.normalizeClass, pb = window.Vue.createElementVNode, Mr = window.Vue.openBlock, mb = window.Vue.createElementBlock, Ud = window.Vue.createCommentVNode, Id = window.Vue.createVNode, Ua = window.Vue.withCtx, Rd = window.Vue.createBlock, hb = ["lang", "textContent"], fb = ["lang", "innerHTML"], wb = window.Vue.computed, vb = window.Vue.inject, _b = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: Wi,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = vb("colors").gray200, s = wb(
      () => {
        var u;
        return ((u = t.translation.progress) == null ? void 0 : u.any) * 100 || 0;
      }
    ), a = Ze(), { setTranslationURLParams: r } = D(), l = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (u, d) => (Mr(), Rd(vf, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": fs(ih),
      onActionIconClicked: d[0] || (d[0] = (i) => u.$emit("delete-translation")),
      onClick: l
    }, {
      title: Ua(() => [
        pb("h5", {
          class: gb(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: db(e.translation.sourceTitle)
        }, null, 10, hb),
        e.translation.isLeadSectionTranslation ? Ud("", !0) : (Mr(), mb("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          innerHTML: e.translation.sourceSectionTitle
        }, null, 8, fb))
      ]),
      "mid-content": Ua(() => [
        e.translation.progress ? (Mr(), Rd(fs(N), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Ua(() => [
            Id(fs(k), null, {
              default: Ua(() => [
                Id(fs(ch), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: fs(o)
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
}, Sb = window.Vuex.useStore, _f = [], yb = (e, t, n) => _f.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), xb = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  _f.push(o);
}, Cb = () => {
  const e = Sb();
  return (t, n, o) => C(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !yb(t, n, o) && (s = yield me.fetchSectionSuggestion(
      t,
      o,
      n
    ), xb(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, Sf = "cx-translation-session-position-", yf = () => Sf + mw.user.sessionId(), bb = () => {
  const e = parseInt(
    mw.storage.get(yf())
  );
  return isNaN(e) ? 0 : e;
}, kb = function(e) {
  const t = yf();
  mw.storage.set(t, e);
}, $b = () => {
  Object.keys(mw.storage.store).filter((e) => e.startsWith(Sf)).forEach((e) => mw.storage.remove(e));
}, Vb = () => {
  const e = bb();
  return e % 10 === 0 && $b(), kb(e + 1), e;
};
let Ia = null;
const Eb = (e) => {
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
  }), o = t + "?" + n;
  return fetch(o).then((s) => s.json()).then((s) => (Ia = s.query.globaluserinfo.editcount, Ia)).catch((s) => {
    mw.log.error("Error while fetching global edit count for user. ", s);
  });
}, Lb = (e) => e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
function Tb(e) {
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
    content_translation_session_position: Vb()
  };
  return a ? Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, l, e))
  ) : Eb(r).then((u) => {
    mw.eventLog.submit(
      s,
      Object.assign({}, l, e, {
        user_global_edit_count: u,
        user_global_edit_count_bucket: Lb(u)
      })
    );
  });
}
const Ab = window.Vuex.useStore, Db = (e, t, n) => [
  `Event ${e} is missing ${t}.`,
  `Current URL params: ${location.href}.`,
  `Previous route: ${n}`
], xt = () => {
  const e = Ab(), { previousRoute: t } = Le(e), n = [
    "event_source",
    "translation_source_language",
    "translation_target_language",
    "translation_source_title"
  ], o = (s) => {
    for (const a of n)
      if (s[a] === null) {
        const r = Db(
          s.event_type,
          a,
          t.value
        );
        mw.errorLogger.logError(
          new Error(r.join(" ")),
          "error.contenttranslation"
        );
      }
  };
  return (s) => (s.access_method || (s.access_method = Wo ? "desktop" : "mobile web"), o(s), Tb(s));
}, xf = window.Vue.ref, Cf = xf(null), Gc = xf(null), Pb = (e) => {
  e || mw.errorLogger.logError(
    new Error("[CX] Empty event source set"),
    "error.contenttranslation"
  ), Cf.value = e;
}, Bb = (e) => {
  Gc.value = e;
}, ir = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = D(), s = xt();
  return {
    logDashboardTranslationStartEvent: () => {
      const r = {
        event_type: "dashboard_translation_start",
        event_source: Cf.value,
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
      return Gc.value && (r.event_context = Gc.value), o.value ? (r.translation_source_section = o.value, r.translation_type = "section") : r.translation_type = "article", s(r);
    },
    setStartTranslationEventSource: Pb,
    setStartTranslationEventContext: Bb
  };
}, Sa = () => {
  const e = Ze(), t = nr(), { setTranslationURLParams: n } = D(), { setStartTranslationEventSource: o, setStartTranslationEventContext: s } = ir();
  return (a, r, l, u, d = null, i = !0) => C(void 0, null, function* () {
    o(u), s(d);
    const c = yield t(
      r,
      l,
      a
    );
    n(c), i && e.push({ name: "sx-translation-confirmer" });
  });
};
const Ur = window.Vue.withModifiers, zd = window.Vue.toDisplayString, Od = window.Vue.createElementVNode, bt = window.Vue.unref, Gn = window.Vue.createVNode, Fb = window.Vue.createTextVNode, Ra = window.Vue.openBlock, Hd = window.Vue.createElementBlock, jd = window.Vue.createCommentVNode, qd = window.Vue.createBlock, vo = window.Vue.withCtx, Nb = ["lang", "href", "textContent"], Mb = {
  key: 0,
  class: "cx-published-translation__personal-draft-indicator"
}, Ub = {
  key: 2,
  class: "flex"
}, Ib = ["innerHTML"], Ir = window.Vue.computed, Gd = window.Vue.ref, Xd = window.Codex.CdxButton, Rr = window.Codex.CdxIcon, Rb = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: hu,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Gd(!0), o = Gd(null), s = Ir(() => {
      var p;
      return (p = o.value) == null ? void 0 : p.missingSections;
    }), a = Ir(
      () => s.value && Object.keys(s.value)[0]
    );
    Cb()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((p) => o.value = p).catch((p) => console.log(p)).finally(() => n.value = !1);
    const { setSectionURLParam: l } = D(), u = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, d = Sa(), i = (p) => {
      d(
        t.translation.sourceTitle,
        t.translation.sourceLanguage,
        t.translation.targetLanguage,
        "continue_published"
      ), p && l(p);
    }, c = mw.config.get("wgNamespaceIds"), g = Ir(() => new mw.Title(t.translation.targetTitle).getNamespaceId() === c.user);
    return (p, m) => (Ra(), qd(vf, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: u
    }, {
      title: vo(() => [
        Od("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: m[0] || (m[0] = Ur(() => {
          }, ["stop"])),
          textContent: zd(e.translation.sourceTitle)
        }, null, 8, Nb)
      ]),
      "mid-content": vo(() => [
        Gn(bt(N), { class: "ma-0" }, {
          default: vo(() => [
            Gn(bt(k), null, {
              default: vo(() => [
                g.value ? (Ra(), Hd("div", Mb, [
                  Gn(bt(Rr), {
                    icon: bt(Rh),
                    class: "me-1",
                    size: "small"
                  }, null, 8, ["icon"]),
                  Fb(" " + zd(p.$i18n("sx-published-translation-personal-draft-indicator")), 1)
                ])) : jd("", !0),
                n.value ? (Ra(), qd(bt(ct), { key: 1 })) : s.value ? (Ra(), Hd("div", Ub, [
                  Gn(bt(Xd), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: m[1] || (m[1] = Ur((h) => i(a.value), ["stop"]))
                  }, {
                    default: vo(() => [
                      Gn(bt(Rr), {
                        class: "me-1",
                        icon: bt(Ph)
                      }, null, 8, ["icon"]),
                      Od("span", { innerHTML: a.value }, null, 8, Ib)
                    ]),
                    _: 1
                  }),
                  Gn(bt(Xd), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": p.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: m[2] || (m[2] = Ur((h) => i(null), ["stop"]))
                  }, {
                    default: vo(() => [
                      Gn(bt(Rr), { icon: bt(du) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : jd("", !0)
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
}, zb = window.Vuex.useStore, Ob = () => {
  const { commit: e } = zb(), t = xt();
  return (n) => C(void 0, null, function* () {
    n.isArticleTranslation ? (yield St.deleteCXTranslation(
      n
    )) && e("translator/removeCXTranslation", n.translationId) : (yield St.deleteTranslation(
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
const Hb = window.Vue.resolveDirective, zr = window.Vue.createElementVNode, jb = window.Vue.withDirectives, Or = window.Vue.unref, Wd = window.Vue.createVNode, Kd = window.Vue.withCtx, qb = window.Vue.openBlock, Gb = window.Vue.createBlock, Xb = { class: "pa-4" }, Wb = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, Kb = {
  __name: "SXConfirmTranslationDeletionDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: Wi,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "continue-translation",
    "discard-translation"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, s = () => o("update:modelValue", !1), a = Ob(), r = () => {
      a(n.translation), s();
    };
    return (l, u) => {
      const d = Hb("i18n");
      return qb(), Gb(Or(yt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: Kd(() => [
          zr("div", Wb, [
            Wd(Or(Ge), {
              class: "grow py-3",
              large: "",
              label: l.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            Wd(Or(Ge), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: l.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: r
            }, null, 8, ["label"])
          ])
        ]),
        default: Kd(() => [
          zr("div", Xb, [
            jb(zr("span", null, null, 512), [
              [d, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function Yb(e, t, n) {
  return C(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield Qb(t, n)).filter((s) => e.includes(s)) : [];
  });
}
function Yd(e, t, n) {
  return C(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(H.sortByAutonym) : (yield Yb(e, t, n)).sort(H.sortByAutonym);
  });
}
function Qb(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function Jb() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function Zb(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
const ek = window.Vue.computed;
function tk(e, t) {
  const n = ek(() => {
    if (!t.value.length || !e.value.trim())
      return "";
    for (let s = 0; s < t.value.length; s++) {
      const a = H.getAutonym(t.value[s]);
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
const Hr = window.Vue.ref, jr = window.Vue.watch, nk = window.Vue.computed;
function bf(e, t, n) {
  const o = Hr(""), s = Hr(-1), a = Hr(null), r = () => {
    s.value++, s.value >= l.value.length && (s.value = 0);
  }, l = nk(() => e.value ? t.value : n && n.value ? [...n.value, ...t.value] : []), u = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return jr(e, () => {
    s.value = -1;
  }), jr(t, () => {
    t.value && l.value.length > 0 && (s.value = 0);
  }), jr(s, () => C(this, null, function* () {
    var d;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = l.value[s.value], (d = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || d.scrollIntoView(!1);
  })), { next: r, prev: u, keyboardNavigationContainer: a, selectedItem: o };
}
function wu(e, t, n) {
  let o;
  const s = (...a) => {
    const r = this, l = () => {
      o = null, n || e.apply(r, a);
    };
    n && !o && e.apply(r, a), (!o || t) && (clearTimeout(o), o = setTimeout(l, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const za = window.Vue.renderSlot, Te = window.Vue.unref, ok = window.Vue.isRef, Qd = window.Vue.createVNode, ws = window.Vue.withModifiers, vs = window.Vue.withKeys, $n = window.Vue.createElementVNode, sk = window.Vue.resolveDirective, Oa = window.Vue.withDirectives, qr = window.Vue.renderList, Gr = window.Vue.Fragment, sn = window.Vue.openBlock, an = window.Vue.createElementBlock, Jd = window.Vue.toDisplayString, Ha = window.Vue.normalizeClass, Xr = window.Vue.createCommentVNode, ak = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, ik = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, rk = { class: "results px-3 pt-4" }, lk = { class: "results-header ps-8 pb-2" }, ck = { class: "results-languages--suggestions pa-0 ma-0" }, uk = ["lang", "dir", "aria-selected", "onClick", "textContent"], dk = { class: "results px-3 pt-4" }, gk = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, pk = ["lang", "dir", "aria-selected", "onClick", "textContent"], mk = ["aria-selected"], hk = { class: "no-results px-3 py-4" }, fk = { class: "ps-8" }, ja = window.Vue.ref, wk = window.Vue.watch, vk = window.Vue.onMounted, Zd = window.Vue.computed, kf = {
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
      default: Jb
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = ja(null), a = ja(""), r = ja([]), l = ja(n.suggestions), u = Zd(
      () => Zb(r.value)
    ), d = Zd(() => {
      const S = r.value.length;
      return S < 10 ? "few-results" : S < 30 ? "some-results" : "many-results";
    }), i = (S) => o("select", S), c = () => o("close"), { autocompletion: g, onTabSelect: p } = tk(
      a,
      r
    ), { next: m, prev: h, keyboardNavigationContainer: f, selectedItem: w } = bf(a, r, l), _ = () => {
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
    return wk(a, wu(() => C(this, null, function* () {
      r.value = yield Yd(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), vk(() => C(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), r.value = yield Yd(
        n.languages,
        "",
        n.searchAPI
      );
    })), (S, b) => {
      const E = sk("i18n");
      return sn(), an("div", {
        ref_key: "keyboardNavigationContainer",
        ref: f,
        class: "mw-ui-language-selector"
      }, [
        za(S.$slots, "search", {}, () => [
          $n("div", ak, [
            Qd(Te(Nc), {
              value: Te(g),
              "onUpdate:value": b[0] || (b[0] = (x) => ok(g) ? g.value = x : null),
              icon: Te(Mu),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            Qd(Te(Nc), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": b[1] || (b[1] = (x) => a.value = x),
              class: "mw-ui-language-selector__search pa-4",
              icon: Te(Mu),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                vs(ws(_, ["prevent"]), ["enter"]),
                vs(ws(Te(m), ["stop", "prevent"]), ["down"]),
                vs(ws(Te(h), ["stop", "prevent"]), ["up"]),
                vs(ws(c, ["prevent"]), ["esc"]),
                vs(ws(Te(p), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        $n("section", ik, [
          e.suggestions.length && !a.value ? za(S.$slots, "suggestions", { key: 0 }, () => [
            $n("section", rk, [
              Oa($n("p", lk, null, 512), [
                [E, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              $n("ul", ck, [
                (sn(!0), an(Gr, null, qr(e.suggestions, (x) => (sn(), an("li", {
                  key: x,
                  class: Ha(["language ma-0", { "language--selected": x === Te(w) }]),
                  lang: x,
                  dir: Te(H.getDir)(x),
                  "aria-selected": x === Te(w) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (I) => i(x),
                  textContent: Jd(Te(H.getAutonym)(x))
                }, null, 10, uk))), 128))
              ])
            ])
          ]) : Xr("", !0),
          u.value.length ? za(S.$slots, "search", { key: 1 }, () => [
            $n("section", dk, [
              e.suggestions.length && !a.value ? Oa((sn(), an("p", gk, null, 512)), [
                [E, void 0, "cx-sx-language-selector-all-languages"]
              ]) : Xr("", !0),
              (sn(!0), an(Gr, null, qr(u.value, (x, I) => (sn(), an("ul", {
                key: I,
                class: Ha(["results-languages pa-0 ma-0 mb-6", d.value])
              }, [
                (sn(!0), an(Gr, null, qr(x, (L) => (sn(), an("li", {
                  key: L,
                  class: Ha(["language ma-0", { "language--selected": L === Te(w) }]),
                  lang: L,
                  dir: Te(H.getDir)(L),
                  role: "option",
                  "aria-selected": L === Te(w) || null,
                  tabindex: "-1",
                  onClick: (P) => i(L),
                  textContent: Jd(Te(H.getAutonym)(L))
                }, null, 10, pk))), 128)),
                e.allOptionEnabled && !a.value ? Oa((sn(), an("li", {
                  key: 0,
                  class: Ha(["language ma-0", { "language--selected": Te(w) === "all" }]),
                  role: "option",
                  "aria-selected": Te(w) === "all" || null,
                  tabindex: "-1",
                  onClick: b[2] || (b[2] = (L) => i("all"))
                }, null, 10, mk)), [
                  [E, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : Xr("", !0)
              ], 2))), 128))
            ])
          ]) : za(S.$slots, "noresults", { key: 2 }, () => [
            $n("section", hk, [
              Oa($n("h3", fk, null, 512), [
                [E, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const _k = window.Vue.resolveDirective, eg = window.Vue.withDirectives, _s = window.Vue.openBlock, Ss = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Ae = window.Vue.unref, tg = window.Vue.toDisplayString, kt = window.Vue.createVNode, ng = window.Vue.withModifiers, Xn = window.Vue.withCtx, Sk = window.Vue.normalizeClass, yk = {
  key: 0,
  class: "mw-ui-autonym"
}, xk = ["lang", "dir", "textContent"], Ck = {
  key: 0,
  class: "mw-ui-autonym"
}, bk = ["lang", "dir", "textContent"], ys = window.Vue.computed, kk = window.Vue.inject, $k = window.Vue.ref, og = window.Codex.CdxButton, Wr = window.Codex.CdxIcon, ji = {
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
    const n = e, o = t, s = kk("breakpoints"), a = ys(() => s.value.mobile), r = $k(null), l = ys(() => !!r.value), u = () => r.value = "source", d = () => r.value = "target", i = () => r.value = null, c = ys(() => {
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
    }, p = ys(
      () => n.selectedSourceLanguage === "all"
    ), m = ys(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, f) => {
      const w = _k("i18n");
      return _s(), Ss("div", {
        class: Sk(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
      }, [
        kt(Ae(N), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: Xn(() => [
            kt(Ae(k), {
              class: "flex justify-end px-0",
              cols: a.value ? 5 : null
            }, {
              default: Xn(() => [
                kt(Ae(og), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  onClick: ng(u, ["stop"])
                }, {
                  default: Xn(() => [
                    p.value ? eg((_s(), Ss("span", yk, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (_s(), Ss("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: Ae(H.getDir)(e.selectedSourceLanguage),
                      textContent: tg(Ae(H.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, xk)),
                    kt(Ae(Wr), {
                      size: "x-small",
                      icon: Ae(Mc)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["cols"]),
            kt(Ae(k), {
              class: "sx-translation-list-language-selector__arrow flex justify-center px-0",
              cols: a.value ? 2 : null
            }, {
              default: Xn(() => [
                kt(Ae(Wr), { icon: Ae(Bh) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            kt(Ae(k), {
              class: "px-0",
              cols: a.value ? 5 : null
            }, {
              default: Xn(() => [
                kt(Ae(og), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.targetLanguages.length < 2,
                  onClick: ng(d, ["stop"])
                }, {
                  default: Xn(() => [
                    m.value ? eg((_s(), Ss("span", Ck, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (_s(), Ss("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: Ae(H.getDir)(e.selectedTargetLanguage),
                      textContent: tg(Ae(H.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, bk)),
                    kt(Ae(Wr), {
                      size: "x-small",
                      icon: Ae(Mc)
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
        kt(Ae(yt), {
          value: l.value,
          "onUpdate:value": f[0] || (f[0] = (_) => l.value = _),
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-mode": "dark",
          onClose: i
        }, {
          default: Xn(() => [
            kt(Ae(kf), {
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
const sg = window.Vue.unref, Vk = window.Vue.createVNode, qa = window.Vue.createElementVNode, ag = window.Vue.toDisplayString, Ek = window.Vue.openBlock, Lk = window.Vue.createElementBlock, Tk = { class: "cx-list-empty-placeholder pa-4" }, Ak = { class: "cx-list-empty-placeholder__icon-container" }, Dk = { class: "cx-list-empty-placeholder__icon" }, Pk = ["textContent"], Bk = ["textContent"], Fk = window.Codex.CdxIcon, $f = {
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
    return (t, n) => (Ek(), Lk("div", Tk, [
      qa("div", Ak, [
        qa("div", Dk, [
          Vk(sg(Fk), { icon: sg(Uh) }, null, 8, ["icon"])
        ])
      ]),
      qa("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: ag(e.title)
      }, null, 8, Pk),
      qa("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: ag(e.description)
      }, null, 8, Bk)
    ]));
  }
}, Nk = window.Vuex.useStore, Mk = window.Vue.ref, Ga = Mk({ draft: !1, published: !1 }), Zo = () => {
  const e = Nk(), t = Yo(), n = (s) => C(void 0, null, function* () {
    let a = yield St.fetchTranslations(s);
    e.commit("translator/clearTranslationsByStatus", s), a.forEach(
      (l) => e.commit("translator/addTranslation", l)
    );
    const r = {};
    for (const l of a) {
      const u = l.sourceLanguage;
      r[u] = r[u] || [], r[u].push(l);
    }
    Ga.value[s] = !0;
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
          new Ko({ title: c, pagelanguage: i })
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
const Uk = window.Vue.toDisplayString, Kr = window.Vue.normalizeClass, ig = window.Vue.createElementVNode, Ot = window.Vue.openBlock, _o = window.Vue.createBlock, Xa = window.Vue.createCommentVNode, rg = window.Vue.unref, lg = window.Vue.renderList, cg = window.Vue.Fragment, Wa = window.Vue.createElementBlock, Ik = window.Vue.createVNode, ug = window.Vue.withCtx, Rk = ["textContent"], zk = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, Ok = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, Ka = window.Vue.ref, $t = window.Vue.computed, Hk = window.Vue.inject, jk = window.Vuex.useStore, dg = {
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
    const t = e, n = Ka("all"), o = Ka("all"), s = jk(), { translationsFetched: a } = Zo(), r = $t(
      () => a.value[t.translationStatus]
    ), l = Ka(!1), u = Ka(null), d = $t(
      () => t.translationStatus === "draft"
    ), i = $t(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), c = $t(
      () => n.value === "all"
    ), g = $t(
      () => o.value === "all"
    ), p = $t(
      () => i.value.filter(
        (b) => (c.value || b.sourceLanguage === n.value) && (g.value || b.targetLanguage === o.value)
      ).sort((b, E) => b.lastUpdatedTimestamp < E.lastUpdatedTimestamp)
    ), m = $t(() => {
      const b = i.value.map(
        (E) => E.targetLanguage
      );
      return [...new Set(b)];
    }), h = $t(() => {
      const b = i.value.map(
        (E) => E.sourceLanguage
      );
      return [...new Set(b)];
    }), f = (b) => {
      u.value = b, l.value = !0;
    }, w = $t(() => t.activeStatus === t.translationStatus), _ = Hk("breakpoints"), y = $t(() => _.value.mobile), S = $t(
      () => y.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (b, E) => w.value ? (Ot(), _o(rg(Qe), {
      key: 0,
      class: Kr(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: ug(() => [
        ig("div", {
          class: Kr(["cx-translation-list__header", S.value])
        }, [
          ig("h3", {
            class: Kr(["px-4 mw-ui-card__title mb-0", { "pb-4": y.value }]),
            textContent: Uk(b.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, Rk),
          p.value.length ? (Ot(), _o(ji, {
            key: 0,
            "selected-source-language": n.value,
            "onUpdate:selectedSourceLanguage": E[0] || (E[0] = (x) => n.value = x),
            "selected-target-language": o.value,
            "onUpdate:selectedTargetLanguage": E[1] || (E[1] = (x) => o.value = x),
            "source-languages": h.value,
            "target-languages": m.value,
            "all-option-enabled": ""
          }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : Xa("", !0)
        ], 2)
      ]),
      default: ug(() => [
        r.value && !p.value.length ? (Ot(), _o($f, {
          key: 0,
          title: b.$i18n("cx-sx-translation-list-empty-title"),
          description: b.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : Xa("", !0),
        r.value ? Xa("", !0) : (Ot(), _o(rg(ct), { key: 1 })),
        d.value ? (Ot(), Wa("div", zk, [
          (Ot(!0), Wa(cg, null, lg(p.value, (x) => (Ot(), _o(_b, {
            key: `${e.translationStatus}-${x.key}`,
            translation: x,
            onDeleteTranslation: (I) => f(x)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (Ot(), Wa("div", Ok, [
          (Ot(!0), Wa(cg, null, lg(p.value, (x) => (Ot(), _o(Rb, {
            key: `${e.translationStatus}-${x.key}`,
            translation: x
          }, null, 8, ["translation"]))), 128))
        ])),
        Ik(Kb, {
          modelValue: l.value,
          "onUpdate:modelValue": E[2] || (E[2] = (x) => l.value = x),
          translation: u.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : Xa("", !0);
  }
}, qk = (e, t) => C(void 0, null, function* () {
  const n = e.language, o = e.title, s = e.articleSize, r = (yield me.fetchArticleSections(
    n,
    o
  )).sections.filter(
    (u) => u.level === "2"
  ), l = r.reduce(
    (u, d, i, c) => {
      const g = i < c.length - 1 ? c[i + 1].byteoffset : s;
      return u[d.line] = g - d.byteoffset, u;
    },
    { [Ho.LEAD_SECTION_DUMMY_TITLE]: r[0].byteoffset }
  );
  return t.length === 1 ? l[t[0]] : Object.keys(l).filter((u) => t.includes(u)).reduce((u, d) => u + l[d], 0);
}), Vf = (e) => {
  const s = e / 5 / 200;
  return Math.ceil(s);
}, Gk = (e, t = []) => {
  const n = e >= 60 ? e / 60 : 0, o = Math.round(n * 2) / 2;
  let s;
  if (t.length) {
    if (t.length === 1)
      return s = t[0] === Ho.LEAD_SECTION_DUMMY_TITLE ? "cx-sx-translation-confirmer-translation-time-lead-section" : "cx-sx-translation-confirmer-translation-time-single-section", [s, o, e];
  } else
    return s = "cx-sx-translation-confirmer-translation-time-whole-article", [s, o, e];
  return [
    "cx-sx-translation-confirmer-translation-time-sections",
    o,
    e,
    t.length
  ];
}, Ef = (e) => Vf(e) < 15;
const Yr = window.Vue.toDisplayString, Ri = window.Vue.createElementVNode, Qr = window.Vue.unref, xs = window.Vue.openBlock, Jr = window.Vue.createBlock, gg = window.Vue.createCommentVNode, Xk = window.Vue.Fragment, pg = window.Vue.createElementBlock, Wk = window.Vue.withKeys, Kk = window.Vue.withCtx, Yk = {
  key: 1,
  class: "cdx-info-chip__text custom-info-chip__with-slash"
}, Qk = { class: "cdx-info-chip__text custom-info-chip__with-slash__first" }, Jk = /* @__PURE__ */ Ri("span", null, "/", -1), Zk = { class: "cdx-info-chip__text custom-info-chip__with-slash__second" }, mg = window.Codex.CdxIcon, e8 = window.Codex.CdxInfoChip, Ya = window.Vue.computed, io = {
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
    const t = e, n = Ya(() => t.content.lastIndexOf("/")), o = Ya(() => t.content.slice(0, n.value)), s = Ya(() => t.content.slice(n.value + 1)), a = Ya(
      () => t.expanded ? KS : Mc
    );
    return (r, l) => (xs(), Jr(Qr(e8), {
      icon: e.icon,
      class: "custom-info-chip",
      tabindex: "0",
      onKeyup: l[0] || (l[0] = Wk((u) => r.$emit("click"), ["enter"]))
    }, {
      default: Kk(() => [
        n.value === -1 ? (xs(), pg(Xk, { key: 0 }, [
          Ri("span", null, Yr(e.content), 1),
          e.expandable ? (xs(), Jr(Qr(mg), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : gg("", !0)
        ], 64)) : (xs(), pg("div", Yk, [
          Ri("span", Qk, Yr(o.value), 1),
          Jk,
          Ri("span", Zk, Yr(s.value), 1),
          e.expandable ? (xs(), Jr(Qr(mg), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : gg("", !0)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const he = window.Vue.unref, Vt = window.Vue.createVNode, Vn = window.Vue.createElementVNode, Qa = window.Vue.toDisplayString, pt = window.Vue.withCtx, t8 = window.Vue.resolveDirective, Zr = window.Vue.withDirectives, Wn = window.Vue.openBlock, So = window.Vue.createBlock, yo = window.Vue.createCommentVNode, hg = window.Vue.withModifiers, n8 = window.Vue.createElementBlock, o8 = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, s8 = { class: "col shrink pe-4" }, a8 = ["lang", "dir", "textContent"], i8 = ["lang", "dir", "textContent"], r8 = ["textContent"], l8 = ["textContent"], el = window.Codex.CdxIcon, Et = window.Vue.computed, c8 = window.Vue.inject, u8 = window.Vuex.useStore, Xc = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [co, yn, jo],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = u8(), o = Et(() => t.suggestion), s = Et(
      () => o.value.sourceTitle || o.value.title
    ), a = Et(
      () => n.getters["mediawiki/getPage"](
        o.value.sourceLanguage,
        s.value
      )
    ), r = Et(
      () => {
        var w;
        return (w = o.value) == null ? void 0 : w.missingSectionsCount;
      }
    ), l = Et(() => {
      var w;
      return (w = a.value) == null ? void 0 : w.description;
    }), u = Et(
      () => o.value instanceof yn
    ), d = Et(
      () => o.value instanceof jo
    ), { sourceLanguageAutonym: i, targetLanguageAutonym: c } = Le(n), g = Et(
      () => d.value ? Nh : Mh
    ), p = c8("colors"), m = Et(
      () => d.value ? p.blue600 : "currentColor"
    ), h = Et(
      () => {
        var w;
        return Ef((w = a.value) == null ? void 0 : w.articleSize);
      }
    ), f = Et(
      () => o.value instanceof Eh || o.value instanceof Lh
    );
    return (w, _) => {
      const y = t8("i18n");
      return o.value ? (Wn(), n8("div", o8, [
        Vn("div", s8, [
          Vt(he(Wc), {
            class: "cx-suggestion__thumbnail",
            thumbnail: a.value && a.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        Vt(he(N), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: pt(() => [
            Vt(he(N), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: pt(() => [
                Vt(he(k), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: pt(() => [
                    Vn("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: o.value.sourceLanguage,
                      dir: he(H.getDir)(o.value.sourceLanguage),
                      textContent: Qa(s.value)
                    }, null, 8, a8)
                  ]),
                  _: 1
                }),
                Vt(he(k), { shrink: "" }, {
                  default: pt(() => [
                    Vn("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: o.value.sourceLanguage,
                      dir: he(H.getDir)(o.value.sourceLanguage),
                      textContent: Qa(l.value)
                    }, null, 8, i8)
                  ]),
                  _: 1
                }),
                h.value && !u.value && !f.value ? (Wn(), So(he(k), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: pt(() => [
                    Zr(Vn("small", null, null, 512), [
                      [y, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : yo("", !0),
                u.value ? (Wn(), So(he(k), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
                  shrink: ""
                }, {
                  default: pt(() => [
                    Zr(Vn("small", null, null, 512), [
                      [y, [r.value], "cx-sx-translation-suggestion-info"]
                    ])
                  ]),
                  _: 1
                })) : d.value ? (Wn(), So(he(k), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: pt(() => [
                    Vt(he(N), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: pt(() => [
                        Vt(he(k), { grow: "" }, {
                          default: pt(() => [
                            Vn("small", {
                              textContent: Qa(he(i))
                            }, null, 8, r8),
                            Vt(he(el), {
                              icon: he(Bh),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            Vn("small", {
                              textContent: Qa(he(c))
                            }, null, 8, l8)
                          ]),
                          _: 1
                        }),
                        r.value ? (Wn(), So(he(k), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: pt(() => [
                            Zr(Vn("small", null, null, 512), [
                              [y, [
                                r.value
                              ], "cx-sx-translation-suggestion-info"]
                            ])
                          ]),
                          _: 1
                        })) : yo("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : yo("", !0),
                f.value ? (Wn(), So(he(k), {
                  key: 3,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: pt(() => [
                    Vt(io, {
                      icon: he(cu),
                      content: o.value.collection.name
                    }, null, 8, ["icon", "content"])
                  ]),
                  _: 1
                })) : yo("", !0)
              ]),
              _: 1
            }),
            Vt(he(k), { shrink: "" }, {
              default: pt(() => [
                d.value ? yo("", !0) : (Wn(), So(he(el), {
                  key: 0,
                  icon: he(Jo),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: _[0] || (_[0] = hg((S) => w.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                Vt(he(el), {
                  class: "cx-suggestion__favorite-button",
                  icon: g.value,
                  "icon-color": m.value,
                  onClick: _[1] || (_[1] = hg((S) => w.$emit("bookmark"), ["stop"]))
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : yo("", !0);
    };
  }
};
const tl = window.Vue.normalizeClass, fg = window.Vue.createVNode, d8 = window.Vue.renderList, wg = window.Vue.Fragment, Cs = window.Vue.openBlock, Ja = window.Vue.createElementBlock, g8 = window.Vue.createBlock, p8 = window.Vue.toDisplayString, m8 = window.Vue.withKeys, vg = window.Vue.createCommentVNode, h8 = {
  key: 0,
  class: "sx-suggestions-filters__filter__expanded-filters"
}, Za = window.Vue.computed, f8 = window.Vue.ref, w8 = window.Vue.watchEffect, v8 = {
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
    const n = e, o = Za(
      () => n.isSelected(n.filter) || n.filter.subFilters.some((g) => n.isSelected(g))
    ), s = f8(!1);
    w8(() => {
      n.filter.expandable && (s.value = o.value);
    });
    const a = t, r = () => {
      n.filter.expandable && o.value ? s.value = !s.value : a("filter-selected", n.filter);
    }, l = Za(() => {
      const g = n.filter.subFilters.find(
        (m) => n.isSelected(m)
      );
      let p = n.filter.chipLabel;
      return g && (p += `/${u(g)}`), p;
    }), u = (g) => {
      const { label: p } = g, m = n.filter.label;
      return p.startsWith(`${m}/`) ? p.replace(`${m}/`, "") : p;
    }, d = Za(() => n.subFilterLimit > 0 ? n.filter.subFilters.slice(0, n.subFilterLimit) : n.filter.subFilters), i = Za(
      () => n.viewMoreConfig && n.subFilterLimit > 0 && n.filter.subFilters.length > n.subFilterLimit && s.value
    ), c = () => {
      n.viewMoreConfig && n.viewMoreConfig.onClick && n.viewMoreConfig.onClick();
    };
    return (g, p) => (Cs(), Ja(wg, null, [
      fg(io, {
        class: tl(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
          "sx-suggestions-filters__filter--active": o.value
        }]),
        icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
        content: l.value,
        expandable: !!e.filter.expandable,
        expanded: s.value,
        onClick: r
      }, null, 8, ["class", "icon", "content", "expandable", "expanded"]),
      s.value ? (Cs(), Ja("div", h8, [
        fg(io, {
          class: tl(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(e.filter)
          }]),
          icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
          content: g.$i18n("cx-sx-suggestions-filter-collection-group-all-option-label"),
          onClick: p[0] || (p[0] = (m) => g.$emit("filter-selected", e.filter))
        }, null, 8, ["class", "icon", "content"]),
        (Cs(!0), Ja(wg, null, d8(d.value, (m) => (Cs(), g8(io, {
          key: m.id,
          class: tl(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(m)
          }]),
          content: u(m),
          icon: m.icon,
          onClick: (h) => g.$emit("filter-selected", m)
        }, null, 8, ["class", "content", "icon", "onClick"]))), 128)),
        i.value ? (Cs(), Ja("div", {
          key: 0,
          class: "sx-suggestions-filters__view-more-link",
          tabindex: "0",
          onClick: c,
          onKeyup: m8(c, ["enter"])
        }, p8(e.viewMoreConfig.label), 33)) : vg("", !0)
      ])) : vg("", !0)
    ], 64));
  }
};
const _8 = window.Vue.toDisplayString, _g = window.Vue.createElementVNode, S8 = window.Vue.renderList, Sg = window.Vue.Fragment, nl = window.Vue.openBlock, yg = window.Vue.createElementBlock, y8 = window.Vue.createBlock, x8 = { class: "sx-suggestions-filters__group-label mb-3" }, C8 = { class: "sx-suggestions-filters__group-filters mb-3" }, b8 = {
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
    return (o, s) => (nl(), yg(Sg, null, [
      _g("div", x8, _8(e.filterGroup.label), 1),
      _g("div", C8, [
        (nl(!0), yg(Sg, null, S8(n(), (a) => (nl(), y8(v8, {
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
}, k8 = window.Vue.computed, xg = window.Vue.ref, Cg = window.Vue.watch, vu = (e, t) => {
  const o = xg([]), s = xg(!1), a = k8(
    () => o.value.slice(0, 4)
  ), r = wu(() => C(void 0, null, function* () {
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
  return Cg(t, l), Cg(e, l), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
};
class ei {
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
const ol = window.Vue.ref, bg = window.Vue.watch, kg = window.Vue.computed, { topics: $8, regions: V8 } = mw.loader.require(
  "ext.cx.articlefilters"
), E8 = $8.flatMap(
  (e) => e.topics.map((t) => tt(pe({}, t), {
    groupId: e.groupId
  }))
), L8 = () => {
  const e = ol(""), t = ol("all"), n = ol({
    topics: [],
    topic_areas: [],
    collections: [],
    regions: []
  }), o = we(), { pageCollectionGroups: s } = lu(), { sourceLanguageURLParameter: a } = D(), r = (p) => (p = p.toLowerCase(), E8.filter(
    (m) => m.label.toLowerCase().includes(p)
  )), l = (p) => (p = p.toLowerCase(), Object.values(s.value).flat().filter(
    (h) => h.name.toLowerCase().includes(p)
  )), u = (p) => (p = p.toLowerCase(), V8.flatMap((m) => [m, ...m.countries]).filter(
    (m) => m.label.toLowerCase().includes(p)
  ).map((m) => ({
    label: m.label,
    id: m.id
  }))), d = kg(
    () => t.value === "all" ? e.value : ""
  ), { searchResultsSlice: i, searchResultsLoading: c } = vu(
    a,
    d
  );
  bg(i, () => {
    n.value.topics = i.value.map(
      (p) => {
        var m;
        return new ei({
          label: p.title,
          value: p.title,
          description: p.description,
          thumbnail: { url: (m = p.thumbnail) == null ? void 0 : m.source },
          filterType: _t,
          filterId: p.title,
          showThumbnail: !0
        });
      }
    );
  }), bg([e, t], () => C(void 0, null, function* () {
    n.value.topic_areas = r(e.value).map(
      (p) => new ei({
        label: p.label,
        value: p.label,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-topics-default-description" : "cx-sx-suggestions-filter-search-results-topics-alternative-description"
        ),
        icon: t.value === "all" ? Uc : null,
        filterType: Xe,
        filterId: p.topicId
      })
    ), n.value.collections = l(
      e.value
    ).map(
      (p) => new ei({
        label: p.name,
        value: p.name,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-collections-default-description" : "cx-sx-suggestions-filter-search-results-collections-alternative-description",
          p.articlesCount
        ),
        icon: t.value === "all" ? cu : null,
        filterType: ee,
        filterId: p.name
      })
    ), n.value.regions = u(e.value).map(
      (p) => new ei({
        label: p.label,
        value: p.label,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-regions-default-description" : "cx-sx-suggestions-filter-search-results-regions-alternative-description"
        ),
        icon: t.value === "all" ? Uc : null,
        filterType: Ee,
        filterId: p.id
      })
    );
  }));
  const g = kg(() => {
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
}, T8 = "suggestion_filter_topic_area", A8 = "suggestion_filter_search_result_seed", D8 = "suggestion_filter_collections", P8 = "suggestion_filter_previous_edits", B8 = "suggestion_filter_popular_articles", F8 = "suggestion_filter_region", sl = (e) => {
  if (e.type === Xe || e.type === Ee || e.type === ee || e.type === _t)
    return e.id;
  if (e.id === ee)
    return "all-collections";
}, al = (e) => {
  if (e.type === Xe)
    return T8;
  if (e.type === Ee)
    return F8;
  if (e.type === _t)
    return A8;
  if (e.id === ee || e.type === ee)
    return D8;
  if (e.id === en)
    return P8;
  if (e.id === Sn)
    return B8;
}, Lf = () => {
  const e = xt();
  return {
    logSuggestionFiltersClose: () => e({ event_type: "suggestion_filters_close" }),
    logSuggestionFiltersConfirm: (r) => e({
      event_type: "suggestion_filters_confirm",
      event_subtype: "suggestion_filters_single_select_confirm",
      event_source: al(r),
      event_context: sl(r)
    }),
    logSuggestionFiltersSelect: (r) => e({
      event_type: "suggestion_filters_select",
      event_subtype: "suggestion_filters_single_select",
      event_source: al(r),
      event_context: sl(r)
    }),
    logSuggestionFiltersQuickSelect: (r) => e({
      event_type: "dashboard_suggestion_filters_quick_select",
      event_source: al(r),
      event_context: sl(r)
    }),
    logSuggestionFiltersViewMore: () => e({ event_type: "dashboard_suggestion_filters_view_more" })
  };
};
const xe = window.Vue.unref, mt = window.Vue.createVNode, Lt = window.Vue.withCtx, N8 = window.Vue.resolveDirective, Ht = window.Vue.createElementVNode, xo = window.Vue.withDirectives, $g = window.Vue.toDisplayString, M8 = window.Vue.createTextVNode, U8 = window.Vue.vShow, Vg = window.Vue.renderList, Eg = window.Vue.Fragment, rn = window.Vue.openBlock, Kn = window.Vue.createElementBlock, Lg = window.Vue.isRef, I8 = window.Vue.withKeys, Tg = window.Vue.createCommentVNode, Ag = window.Vue.createBlock, R8 = { class: "sx-suggestions-filters" }, z8 = { class: "mb-0" }, O8 = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, H8 = { class: "mb-3" }, j8 = { class: "px-4 pb-4 pt-7" }, q8 = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, G8 = ["onKeyup", "onClick"], X8 = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, W8 = { class: "sx-suggestions-filters__search-results-pending" }, K8 = {
  key: 0,
  class: "sx-suggestions-filters__search-results-empty"
}, Y8 = { class: "sx-suggestions-filters__search-results-empty-primary" }, Q8 = { class: "sx-suggestions-filters__search-results-empty-secondary" }, ti = window.Vue.ref, Co = window.Vue.computed, J8 = window.Vue.inject, Z8 = window.Vue.watch, Dg = window.Codex.CdxButton, e2 = window.Codex.CdxIcon, t2 = window.Codex.CdxTextInput, n2 = window.Codex.CdxMenu, o2 = window.Codex.CdxTabs, s2 = window.Codex.CdxTab, a2 = {
  __name: "SXSuggestionsFiltersDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = we(), o = t, s = Co(() => [
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
    ]), a = (U) => j.value = U, r = (U, B) => B === "all" && U.type === Ee ? {
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
    }, { allFilters: u, isFilterSelected: d, selectFilter: i, findSelectedFilter: c } = tr(), g = (U) => U.flatMap((B) => u.value.filter((M) => M.type === B)).filter(Boolean), p = () => {
      b(), o("update:modelValue", !1);
    }, {
      logSuggestionFiltersClose: m,
      logSuggestionFiltersConfirm: h,
      logSuggestionFiltersSelect: f
    } = Lf(), w = () => {
      m(), p();
    }, _ = () => {
      S.value && (h(S.value), i(S.value)), p();
    }, y = ti(!1), S = ti(null), b = () => {
      S.value = null, y.value = !1;
    }, E = (U) => {
      f(U), S.value = U, y.value = !0;
    }, x = (U) => S.value ? S.value.id === U.id && S.value.type === U.type : d(U), I = J8("breakpoints"), L = Co(() => I.value.mobile), { searchInput: P, searchScope: j, searchResults: oe, searchResultsLoading: ae } = L8(), te = Co(
      () => S.value || c()
    ), R = ti(null);
    Z8(R, () => {
      if (!R.value)
        return;
      const U = se.value.find(
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
    }, se = Co(
      () => oe.value.flatMap((U) => U.items)
    ), le = ti({}), ke = Co(
      () => le.value[j.value]
    ), We = Co(() => {
      var B;
      const U = (B = ke.value) == null ? void 0 : B.getHighlightedMenuItem();
      return U == null ? void 0 : U.id;
    }), Pe = (U) => {
      U.key !== " " && ke.value && ke.value.delegateKeyNavigation(U);
    }, Z = (U, B) => {
      le.value[B] = U;
    };
    return (U, B) => {
      const M = N8("i18n");
      return rn(), Ag(xe(yt), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: L.value,
        header: !1
      }, {
        default: Lt(() => [
          Ht("section", R8, [
            mt(xe(N), {
              class: "sx-suggestions-filters__header ma-0 py-3 px-4",
              align: "stretch",
              justify: "start"
            }, {
              default: Lt(() => [
                mt(xe(k), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: Lt(() => [
                    mt(xe(Dg), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": U.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: w
                    }, {
                      default: Lt(() => [
                        mt(xe(e2), { icon: xe(Jo) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                mt(xe(k), {
                  grow: "",
                  align: "center"
                }, {
                  default: Lt(() => [
                    xo(Ht("h5", z8, null, 512), [
                      [M, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                mt(xe(k), {
                  shrink: "",
                  align: "start"
                }, {
                  default: Lt(() => [
                    xo(mt(xe(Dg), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: _
                    }, {
                      default: Lt(() => [
                        M8($g(U.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [U8, y.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Ht("div", O8, [
              xo(Ht("h5", H8, null, 512), [
                [M, void 0, "cx-sx-suggestions-filter-active-group-label"]
              ]),
              Ht("div", null, [
                mt(io, {
                  class: "sx-suggestions-filters__filter sx-suggestions-filters__filter--active my-1 mx-1 py-1",
                  content: te.value.label,
                  icon: te.value.icon
                }, null, 8, ["content", "icon"])
              ])
            ]),
            mt(xe(o2), {
              active: xe(j),
              "onUpdate:active": [
                B[2] || (B[2] = (Y) => Lg(j) ? j.value = Y : null),
                a
              ],
              class: "sx-suggestions-filters__tabs"
            }, {
              default: Lt(() => [
                (rn(!0), Kn(Eg, null, Vg(s.value, (Y, v) => (rn(), Ag(xe(s2), {
                  key: v,
                  name: Y.name,
                  label: Y.label
                }, {
                  default: Lt(() => [
                    Ht("div", j8, [
                      mt(xe(t2), {
                        modelValue: xe(P),
                        "onUpdate:modelValue": B[0] || (B[0] = (T) => Lg(P) ? P.value = T : null),
                        role: "combobox",
                        "aria-activedescendant": We.value,
                        "aria-controls": "sx-suggestions-filters__search-results__menu",
                        "aria-autocomplete": "none",
                        placeholder: Y.searchPlaceholder,
                        "input-type": "search",
                        "start-icon": xe(Uc),
                        clearable: !!xe(P),
                        onKeydown: Pe
                      }, null, 8, ["modelValue", "aria-activedescendant", "placeholder", "start-icon", "clearable"])
                    ]),
                    xe(P) ? (rn(), Kn("div", X8, [
                      mt(xe(n2), {
                        id: "sx-suggestions-filters__search-results__menu",
                        ref_for: !0,
                        ref: (T) => Z(T, Y.name),
                        selected: R.value,
                        "onUpdate:selected": B[1] || (B[1] = (T) => R.value = T),
                        "show-pending": xe(ae),
                        expanded: "",
                        "menu-items": se.value
                      }, {
                        pending: Lt(() => [
                          xo(Ht("div", W8, null, 512), [
                            [M, void 0, "cx-sx-suggestions-filter-search-results-loading"]
                          ])
                        ]),
                        "no-results": Lt(() => [
                          xe(ae) ? Tg("", !0) : (rn(), Kn("div", K8, [
                            xo(Ht("span", Y8, null, 512), [
                              [M, void 0, "cx-sx-suggestions-filter-search-results-empty-primary"]
                            ]),
                            xo(Ht("span", Q8, null, 512), [
                              [M, void 0, "cx-sx-suggestions-filter-search-results-empty-secondary"]
                            ])
                          ]))
                        ]),
                        _: 2
                      }, 1032, ["selected", "show-pending", "menu-items"])
                    ])) : (rn(), Kn("div", q8, [
                      (rn(!0), Kn(Eg, null, Vg(Y.filterGroups, (T) => (rn(), Kn("div", {
                        key: T.id,
                        class: "sx-suggestions-filters__group"
                      }, [
                        mt(b8, {
                          "filter-group": T,
                          "tentatively-select-filter": E,
                          "is-selected": x,
                          limit: l(Y.name, T.type) ? 4 : 0,
                          "get-sub-filter-config": (A) => r(A, Y.name)
                        }, null, 8, ["filter-group", "limit", "get-sub-filter-config"]),
                        l(Y.name, T.type) ? (rn(), Kn("div", {
                          key: 0,
                          class: "sx-suggestions-filters__group-view-all mb-3",
                          tabindex: "0",
                          onKeyup: I8((A) => a(T.id), ["enter"]),
                          onClick: (A) => a(T.id)
                        }, [
                          Ht("span", null, $g(U.$i18n(J[T.id])), 1)
                        ], 40, G8)) : Tg("", !0)
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
const bs = window.Vue.unref, ni = window.Vue.openBlock, Pg = window.Vue.createBlock;
window.Vue.createCommentVNode;
const i2 = window.Vue.renderList, r2 = window.Vue.Fragment, Bg = window.Vue.createElementBlock, l2 = window.Vue.normalizeClass, Fg = window.Vue.createVNode, c2 = {
  key: 1,
  class: "cx-suggestion-list__filters flex px-4 pb-2"
}, Ng = window.Vue.ref;
window.Vue.computed;
const Mg = window.Vue.watch, u2 = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = we(), { logSuggestionFiltersQuickSelect: n, logSuggestionFiltersViewMore: o } = Lf(), {
      getFiltersSummary: s,
      selectFilter: a,
      isFilterSelected: r,
      waitingForPageCollectionsFetch: l,
      validateURLFilterWithCollections: u
    } = tr(), d = Ng(!1), i = () => {
      o(), d.value = !0;
    }, c = (p) => {
      n(p), a(p);
    }, g = Ng(s());
    return Mg(d, (p) => {
      p || (g.value = s());
    }), Mg(l, (p) => {
      p || (u(), g.value = s());
    }), (p, m) => bs(l) ? (ni(), Pg(bs(ct), { key: 0 })) : (ni(), Bg("div", c2, [
      (ni(!0), Bg(r2, null, i2(g.value, (h) => (ni(), Pg(io, {
        key: h.label,
        class: l2(["cx-suggestion-list__filter py-1 me-1", {
          "cx-suggestion-list__filter--active": bs(r)(h)
        }]),
        icon: h.icon,
        content: h.label,
        onClick: (f) => c(h)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      Fg(io, {
        class: "cx-suggestion-list__filter py-1 me-1",
        icon: bs(du),
        content: bs(t).i18n("cx-sx-suggestions-filter-more-label"),
        onClick: i
      }, null, 8, ["icon", "content"]),
      Fg(a2, {
        modelValue: d.value,
        "onUpdate:modelValue": m[0] || (m[0] = (h) => d.value = h)
      }, null, 8, ["modelValue"])
    ]));
  }
}, bo = window.Vue.computed, Ug = window.Vue.ref, d2 = window.Vue.watch, g2 = window.Vuex.useStore, p2 = () => {
  const e = g2(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = D(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = au(), r = xt(), l = bo(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), u = bo(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), d = Ug(0), i = Ug(0), { maxSuggestionsPerSlice: c } = e.state.suggestions, g = 4, p = bo(
    () => a(d.value)
  ), m = bo(
    () => s(i.value)
  ), h = () => {
    b(), L(), E(), P();
  }, {
    fetchNextSectionSuggestionsSlice: f,
    fetchNextPageSuggestionsSlice: w
  } = pu(), _ = (j) => j.length === c, y = bo(
    () => _(m.value)
  ), S = bo(
    () => _(p.value)
  ), b = () => {
    const j = (d.value + 1) % g, oe = _(
      a(j)
    );
    (!S.value || !oe) && f();
  }, E = () => {
    const j = (i.value + 1) % g, oe = _(
      s(j)
    );
    (!y.value || !oe) && w();
  }, x = (j) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", j), b();
  }, I = (j) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", j), E();
  }, L = () => d.value = (d.value + 1) % g, P = () => i.value = (i.value + 1) % g;
  return d2(
    o,
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
    getPageSuggestionsSliceByIndex: s,
    isCurrentPageSuggestionsSliceFull: y,
    isCurrentSectionSuggestionsSliceFull: S
  };
}, m2 = window.Vuex.useStore, _u = () => {
  const e = m2(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = pu(), o = (d, i, c) => e.state.suggestions.pageSuggestions.find(
    (g) => g.sourceLanguage === d && g.targetLanguage === i && g.sourceTitle === c
  ), s = (d) => C(void 0, null, function* () {
    const { sourceTitle: i, sourceLanguage: c, targetLanguage: g } = d;
    yield me.markFavorite(i, c, g);
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
      ), t()), yield me.markFavorite(
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
    removeFavoriteSuggestion: (d) => (e.commit("suggestions/removeFavoriteSuggestion", d), me.unmarkFavorite(d))
  };
}, h2 = "suggestion_no_seed", f2 = "suggestion_recent_edit", w2 = "suggestion_topic_area", v2 = "suggestion_search_result_seed", _2 = "suggestion_featured", S2 = "suggestion_collections", y2 = "suggestion_region", x2 = () => {
  const { currentSuggestionFilters: e } = D();
  return (t = null) => {
    const { type: n, id: o } = e.value;
    if (o === en)
      return t ? f2 : h2;
    if (n === Xe)
      return w2;
    if (n === Ee)
      return y2;
    if (n === _t)
      return v2;
    if (o === Sn)
      return _2;
    if (o === ee || n === ee)
      return S2;
    const s = new Error(
      `[CX] No matching event source found for filter with type ${n} and id ${o}`
    );
    throw mw.errorLogger.logError(s, "error.contenttranslation"), s;
  };
};
const Ig = window.Vue.normalizeClass, C2 = window.Vue.resolveDirective, ks = window.Vue.createElementVNode, oi = window.Vue.withDirectives, _e = window.Vue.unref, nt = window.Vue.openBlock, jt = window.Vue.createBlock, En = window.Vue.createCommentVNode, il = window.Vue.createVNode, $s = window.Vue.withCtx, Rg = window.Vue.renderList, zg = window.Vue.Fragment, rl = window.Vue.createElementBlock, b2 = window.Vue.toDisplayString, k2 = window.Vue.createTextVNode, $2 = window.Vue.vShow, V2 = { class: "cx-suggestion-list" }, E2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, L2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, T2 = { class: "cx-suggestion-list__refresh-button-container justify-center" }, qt = window.Vue.computed, A2 = window.Vue.inject, D2 = window.Vue.ref, P2 = window.Codex.CdxButton, B2 = window.Codex.CdxIcon, F2 = window.Vuex.useStore, N2 = {
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
    } = D(), { supportedSourceLanguageCodes: s, supportedTargetLanguageCodes: a } = fa(), r = jh(), l = (Z) => r(Z, n.value), u = (Z) => r(t.value, Z), d = x2(), i = Sa(), c = (Z) => {
      i(
        Z.sourceTitle,
        Z.sourceLanguage,
        Z.targetLanguage,
        d(Z.suggestionSeed),
        o.value.id
      );
    }, {
      currentPageSuggestionsSlice: g,
      currentSectionSuggestionsSlice: p,
      discardPageSuggestion: m,
      discardSectionSuggestion: h,
      onSuggestionRefresh: f,
      pageSuggestionsLoading: w,
      sectionSuggestionsLoading: _,
      isCurrentPageSuggestionsSliceFull: y,
      isCurrentSectionSuggestionsSliceFull: S
    } = p2(), b = D2(null), E = xt(), x = () => {
      E({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), f(), b.value && b.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: I, markFavoritePageSuggestion: L } = _u(), P = A2("breakpoints"), j = qt(() => P.value.mobile), oe = qt(
      () => j.value ? null : "pb-2 flex justify-between items-center"
    ), ae = F2(), te = qt(
      () => ae.state.suggestions.isPageSuggestionsFetchPending
    ), R = qt(
      () => ae.state.suggestions.isSectionSuggestionsFetchPending
    ), J = qt(
      () => te.value || w.value && !y.value
    ), se = qt(
      () => R.value || _.value && !S.value
    ), le = qt(
      () => te.value || w.value || g.value.length > 0
    ), ke = qt(
      () => R.value || _.value || p.value.length > 0
    ), We = qt(
      () => !le.value && !ke.value
    ), Pe = qt(
      () => !_.value && !w.value && !te.value && !R.value && !We.value
    );
    return (Z, U) => {
      const B = C2("i18n");
      return oi((nt(), rl("div", V2, [
        il(_e(Qe), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: $s(() => [
            ks("div", {
              class: Ig(["cx-suggestion-list__header-card__header px-4", oe.value])
            }, [
              oi(ks("h3", {
                class: Ig(["mw-ui-card__title mb-0", { "py-3": j.value }])
              }, null, 2), [
                [B, void 0, "cx-suggestionlist-title"]
              ]),
              j.value ? En("", !0) : (nt(), jt(ji, {
                key: 0,
                "source-languages": _e(s),
                "target-languages": _e(a),
                "selected-source-language": _e(t),
                "selected-target-language": _e(n),
                "onUpdate:selectedSourceLanguage": l,
                "onUpdate:selectedTargetLanguage": u
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            il(u2)
          ]),
          default: $s(() => [
            j.value ? (nt(), jt(ji, {
              key: 0,
              "source-languages": _e(s),
              "target-languages": _e(a),
              "selected-source-language": _e(t),
              "selected-target-language": _e(n),
              "onUpdate:selectedSourceLanguage": l,
              "onUpdate:selectedTargetLanguage": u
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])) : En("", !0)
          ]),
          _: 1
        }),
        ke.value ? (nt(), jt(_e(Qe), {
          key: 0,
          class: "cx-suggestion-list__section-suggestions pa-0 mb-0"
        }, {
          default: $s(() => [
            oi(ks("h5", E2, null, 512), [
              [B, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (nt(!0), rl(zg, null, Rg(_e(p), (M, Y) => (nt(), jt(Xc, {
              key: `section-suggestion-${Y}`,
              class: "ma-0",
              suggestion: M,
              onClose: (v) => _e(h)(M),
              onClick: (v) => c(M),
              onBookmark: (v) => _e(I)(M)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            se.value ? (nt(), jt(_e(ct), { key: 0 })) : En("", !0)
          ]),
          _: 1
        })) : En("", !0),
        le.value ? (nt(), jt(_e(Qe), {
          key: 1,
          ref_key: "pageSuggestionsList",
          ref: b,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: $s(() => [
            oi(ks("h5", L2, null, 512), [
              [B, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (nt(!0), rl(zg, null, Rg(_e(g), (M, Y) => (nt(), jt(Xc, {
              key: `page-suggestion-${Y}`,
              suggestion: M,
              onClose: (v) => _e(m)(M),
              onClick: (v) => c(M),
              onBookmark: (v) => _e(L)(M)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            J.value ? (nt(), jt(_e(ct), { key: 0 })) : En("", !0)
          ]),
          _: 1
        }, 512)) : En("", !0),
        We.value ? (nt(), jt($f, {
          key: 2,
          title: Z.$i18n("cx-sx-suggestion-list-empty-title"),
          description: Z.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : En("", !0),
        ks("div", T2, [
          Pe.value ? (nt(), jt(_e(P2), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: x
          }, {
            default: $s(() => [
              il(_e(B2), {
                class: "me-1",
                icon: _e(Ih)
              }, null, 8, ["icon"]),
              k2(" " + b2(Z.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : En("", !0)
        ])
      ], 512)), [
        [$2, e.active]
      ]);
    };
  }
}, M2 = window.Vue.resolveDirective, U2 = window.Vue.createElementVNode, I2 = window.Vue.withDirectives, R2 = window.Vue.renderList, z2 = window.Vue.Fragment, ll = window.Vue.openBlock, O2 = window.Vue.createElementBlock, Og = window.Vue.unref, Hg = window.Vue.createBlock, jg = window.Vue.withCtx, H2 = window.Vue.createCommentVNode, j2 = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, q2 = window.Vue.computed, G2 = window.Vuex.useStore, X2 = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = G2(), n = q2(() => t.state.suggestions.favorites || []), o = Sa(), s = (r) => o(
      r.title,
      r.sourceLanguage,
      r.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = _u();
    return (r, l) => {
      const u = M2("i18n");
      return n.value.length ? (ll(), Hg(Og(Qe), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: jg(() => [
          I2(U2("h3", j2, null, 512), [
            [u, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: jg(() => [
          (ll(!0), O2(z2, null, R2(n.value, (d, i) => (ll(), Hg(Xc, {
            key: `favorite-${i}`,
            suggestion: d,
            onClick: (c) => s(d),
            onBookmark: (c) => Og(a)(d)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : H2("", !0);
    };
  }
};
const W2 = window.Vue.resolveDirective, Vs = window.Vue.createElementVNode, K2 = window.Vue.withDirectives, Y2 = window.Vue.renderList, Q2 = window.Vue.Fragment, qg = window.Vue.openBlock, Gg = window.Vue.createElementBlock, J2 = window.Vue.unref, Z2 = window.Vue.createVNode, e$ = window.Vue.toDisplayString, t$ = { class: "cx-help-panel pa-4" }, n$ = { class: "cx-help-panel__item-list mt-6 ps-2" }, o$ = ["href", "target"], s$ = ["textContent"], a$ = window.Codex.CdxIcon, i$ = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = we(), n = [
      {
        icon: ty,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
        target: "_blank"
      },
      {
        icon: QS,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
        target: "_blank"
      }
    ];
    return (o, s) => {
      const a = W2("i18n");
      return qg(), Gg("div", t$, [
        K2(Vs("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        Vs("ul", n$, [
          (qg(), Gg(Q2, null, Y2(n, (r, l) => Vs("li", {
            key: l,
            class: "mt-4"
          }, [
            Vs("a", {
              href: r.href,
              target: r.target
            }, [
              Z2(J2(a$), {
                class: "me-2",
                icon: r.icon
              }, null, 8, ["icon"]),
              Vs("span", {
                textContent: e$(r.label)
              }, null, 8, s$)
            ], 8, o$)
          ])), 64))
        ])
      ]);
    };
  }
};
const r$ = window.Vue.resolveDirective, ko = window.Vue.createElementVNode, cl = window.Vue.withDirectives, Xg = window.Vue.toDisplayString, ul = window.Vue.unref, dl = window.Vue.withCtx, gl = window.Vue.createVNode, l$ = window.Vue.openBlock, c$ = window.Vue.createElementBlock, u$ = { class: "cx-stats-panel pa-4" }, d$ = ["textContent"], g$ = { class: "cx-stats-panel__monthly-stats-label" }, p$ = ["textContent"], m$ = { class: "cx-stats-panel__total-stats-label" }, h$ = window.Vue.ref, Wg = window.Vue.computed, f$ = window.Vue.watch, w$ = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = e, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", o = Wg(() => {
      var r, l;
      return ((l = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : l.count) || 0;
    }), s = Wg(() => {
      var r, l;
      return ((l = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : l.delta) || 0;
    }), a = h$(null);
    return f$(
      () => t.stats,
      () => {
        const r = t.stats, l = a.value.getContext("2d"), u = Object.keys(t.stats || {}).sort(), d = u.reduce(
          (S, b) => Math.max(S, r[b].delta),
          0
        ), i = u.map((S) => r[S].delta), c = a.value.getBoundingClientRect().width, g = a.value.getBoundingClientRect().height;
        a.value.width = c, a.value.height = g;
        const p = 4, m = 6, h = 50, f = (h - p) / d;
        let w = p;
        const _ = Math.floor(
          (c - p) / (m + p)
        ), y = i.slice(
          Math.max(i.length - _, 0)
        );
        y.forEach((S, b) => {
          b === y.length - 1 && (l.fillStyle = "#36c");
          const E = h - S * f;
          l.fillRect(w, E, m, S * f), w += m + p;
        });
      }
    ), (r, l) => {
      const u = r$("i18n");
      return l$(), c$("div", u$, [
        cl(ko("h5", null, null, 512), [
          [u, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        gl(ul(N), null, {
          default: dl(() => [
            gl(ul(k), { class: "cx-stats-panel__monthly-stats" }, {
              default: dl(() => [
                ko("h3", {
                  textContent: Xg(s.value)
                }, null, 8, d$),
                cl(ko("h5", g$, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            gl(ul(k), { class: "cx-stats-panel__total-stats" }, {
              default: dl(() => [
                ko("h3", {
                  textContent: Xg(o.value)
                }, null, 8, p$),
                cl(ko("h5", m$, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        ko("canvas", {
          ref_key: "canvasRef",
          ref: a,
          class: "cx-stats-panel__canvas"
        }, null, 512)
      ]);
    };
  }
}, Tf = () => {
  const e = xt();
  return (t) => e({
    event_type: "dashboard_tab_select",
    event_source: {
      draft: "dashboard_inprogress_tab",
      published: "dashboard_published_tab",
      suggestions: "dashboard_suggestions_tab"
    }[t]
  });
};
const v$ = window.Vue.renderSlot, _$ = window.Vue.unref, S$ = window.Vue.createVNode, y$ = window.Vue.createElementVNode, x$ = window.Vue.openBlock, C$ = window.Vue.createElementBlock, b$ = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, k$ = { class: "col-12 ma-0 pa-0" }, $$ = {
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
    const n = t, o = Tf(), s = (a) => {
      o(a), n("update:active", a);
    };
    return (a, r) => (x$(), C$("footer", b$, [
      y$("div", k$, [
        v$(a.$slots, "default", {}, () => [
          S$(_$(pa), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: s
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, V$ = window.Vuex.useStore, E$ = () => {
  const e = V$(), t = Yo();
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
}, L$ = window.Vuex.useStore, Af = () => {
  const e = L$(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = D(), { isDefaultFilter: r } = Qc(), { previousRoute: l } = Le(e), u = xt(), d = () => {
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
}, Kg = window.Vue.computed, T$ = window.Vuex.useStore, Fe = () => {
  const e = T$(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o,
    sectionURLParameter: s
  } = D(), a = Kg(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ), r = Kg(
    () => {
      var l;
      return !!((l = a.value) != null && l.presentSections.hasOwnProperty(
        s.value
      ));
    }
  );
  return { sectionSuggestion: a, isCurrentSectionPresent: r };
}, A$ = window.Vue.ref, si = {
  NEW_SECTION: "NEW_SECTION",
  EXPAND: "EXPAND",
  REPLACE: "REPLACE",
  SANDBOX: "SANDBOX"
}, pl = A$(null), Rt = () => {
  const { isCurrentSectionPresent: e } = Fe(), t = () => {
    e.value ? o(si.EXPAND) : o(si.NEW_SECTION);
  }, n = () => {
    pl.value = null;
  }, o = (s) => {
    if (!Object.values(si).includes(s))
      throw new Error("[CX] Invalid publishing target used");
    pl.value = s;
  };
  return {
    target: pl,
    resetPublishTarget: t,
    clearPublishTarget: n,
    setTarget: o,
    PUBLISHING_TARGETS: si
  };
}, D$ = window.Vue.watch, P$ = () => {
  const { fetchAllTranslations: e } = Zo(), t = Oh(), n = E$(), { fetchPageCollectionGroups: o } = lu(), { logDashboardOpenEvent: s } = Af(), { applicationLanguagesInitialized: a } = qh(), { clearPublishTarget: r } = Rt();
  return () => C(void 0, null, function* () {
    o(), r();
    try {
      yield n();
    } catch (l) {
      mw.log.error("[CX] Error while fetching favorite suggestions", l);
    }
    yield e(), D$(
      a,
      () => {
        a.value && (s(), t());
      },
      { immediate: !0 }
    );
  });
}, Yg = window.Vue.computed, B$ = window.Vue.ref, F$ = window.Vue.watch, N$ = window.Vue.watchEffect, M$ = window.Vuex.useStore, U$ = ["suggestions", "draft", "published"], I$ = () => {
  const e = M$(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = D(), { translationsFetched: o } = Zo(), s = B$(null);
  if (U$.includes(t.value))
    s.value = t.value;
  else {
    const a = Yg(
      () => o.value.draft
    ), r = Yg(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = r.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", F$(a, (l) => {
      l && (s.value = r.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return N$(() => {
    n(s.value), window.scrollTo(0, 0);
  }), s;
}, R$ = window.Vue.computed, z$ = () => {
  const e = we();
  return R$(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: k0,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: Gi,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: b0,
        type: "text"
      }
    }
  ]);
};
const Ce = window.Vue.unref, Me = window.Vue.createVNode, O$ = window.Vue.toDisplayString, H$ = window.Vue.createTextVNode, ln = window.Vue.withCtx, ml = window.Vue.openBlock, Qg = window.Vue.createBlock, Jg = window.Vue.createCommentVNode, j$ = window.Vue.vShow, q$ = window.Vue.withDirectives, G$ = window.Vue.isRef, X$ = window.Vue.createElementBlock, W$ = window.Vue.computed, K$ = window.Vuex.useStore, Y$ = window.Codex.CdxButton, Q$ = window.Codex.CdxIcon, J$ = {
  __name: "CXDashboard",
  setup(e) {
    const t = Ze(), n = xt(), o = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    P$()();
    const a = K$();
    a.dispatch("translator/fetchTranslatorStats");
    const r = W$(() => a.state.translator.translatorStats), l = I$(), u = z$(), d = Tf(), i = (c) => {
      d(c), l.value = c;
    };
    return (c, g) => (ml(), X$("div", null, [
      Me(Ce(N), { class: "ma-0 pb-4" }, {
        default: ln(() => [
          Me(Ce(Y$), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: o
          }, {
            default: ln(() => [
              Me(Ce(Q$), {
                class: "me-1",
                icon: Ce(Ph)
              }, null, 8, ["icon"]),
              H$(" " + O$(c.$i18n("cx-create-new-translation")), 1)
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
        default: ln(() => [
          c.$mwui.breakpoint.tabletAndUp ? (ml(), Qg(Ce(k), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: ln(() => [
              Me(Ce(pa), {
                id: "dashboard-list-selector--desktop",
                items: Ce(u),
                active: Ce(l),
                onSelect: i
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : Jg("", !0),
          Me(Ce(k), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: ln(() => [
              q$(Me(X2, null, null, 512), [
                [j$, Ce(l) === "suggestions"]
              ]),
              Me(N2, {
                active: Ce(l) === "suggestions"
              }, null, 8, ["active"]),
              Me(dg, {
                "translation-status": "draft",
                "active-status": Ce(l)
              }, null, 8, ["active-status"]),
              Me(dg, {
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
            default: ln(() => [
              Me(Ce(N), {
                class: "ma-0",
                align: "start"
              }, {
                default: ln(() => [
                  Me(Ce(k), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: ln(() => [
                      Me(w$, { stats: r.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  Me(Ce(k), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: ln(() => [
                      Me(i$)
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
      c.$mwui.breakpoint.mobile ? (ml(), Qg($$, {
        key: 0,
        active: Ce(l),
        "onUpdate:active": g[0] || (g[0] = (p) => G$(l) ? l.value = p : null),
        items: Ce(u)
      }, null, 8, ["active", "items"])) : Jg("", !0)
    ]));
  }
}, Z$ = {
  name: "DashboardView",
  components: { CxDashboard: J$ }
}, eV = window.Vue.resolveComponent, tV = window.Vue.createVNode, nV = window.Vue.openBlock, oV = window.Vue.createElementBlock, sV = { class: "cx-translation-dashboard" };
function aV(e, t, n, o, s, a) {
  const r = eV("cx-dashboard");
  return nV(), oV("main", sV, [
    tV(r, { class: "mb-4 pb-12 px-3 px-tablet-10" })
  ]);
}
const Zg = /* @__PURE__ */ de(Z$, [["render", aV]]), iV = window.Vuex.useStore, rV = window.Vue.computed, zt = () => {
  const e = iV(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = D();
  return { currentTranslation: rV(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (r) => r.status === "draft" && r.sourceTitle === s.value && r.sectionTitleMatches(o.value) && r.sourceLanguage === t.value && r.targetLanguage === n.value
    )
  ) };
}, $o = window.Vue.computed, lV = () => {
  const { sectionSuggestion: e } = Fe(), { targetLanguageURLParameter: t } = D(), { currentTranslation: n } = zt(), o = $o(
    () => {
      var g, p, m;
      return (m = (p = (g = e.value) == null ? void 0 : g.orderedMissingSections) == null ? void 0 : p[0]) == null ? void 0 : m.sourceTitle;
    }
  ), s = $o(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.missingSectionsCount;
    }
  ), a = $o(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.presentSectionsCount;
    }
  ), { targetPageExists: r, getCurrentTitleByLanguage: l } = Cn(), u = $o(() => r ? K.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    l(t.value, null)
  ) : null), d = (g) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : g ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : r.value ? s.value > 1 || s.value === 1 && a.value > 0 ? "cx-sx-select-section" : s.value === 1 && a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : s.value === 0 && a.value > 0 ? "cx-sx-select-section" : s.value === 0 && a.value === 0 ? "cx-sx-translation-confirmer-action-new-translation" : "" : "cx-sx-start-translation-button-label", i = $o(() => {
    if (s.value > 1) {
      const g = "cx-sx-existing-translation-additional-info", p = ["$1", s.value - 1];
      return mw.message(g, ...p).parse().replace("$1", `"${o.value}"`);
    } else if (s.value === 1 && a.value > 0) {
      const g = "cx-sx-translation-confirmer-action-message-single-missing-multiple-present";
      return mw.message(g, "$1").parse().replace("$1", `"${o.value}"`);
    } else if (s.value === 1 && a.value === 0) {
      const g = "cx-sx-translation-confirmer-action-message-single-missing-none-present";
      return mw.message(g, "$1").parse().replace("$1", `"${o.value}"`);
    } else if (a.value > 0) {
      const g = "cx-sx-translation-confirmer-action-message-none-missing-multiple-present";
      return mw.message(g).parse();
    } else {
      const g = "cx-sx-translation-confirmer-action-message-none-missing-none-present";
      return mw.message(g).parse();
    }
  }), c = $o(
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
function cV(e) {
  return e.$el = $(e), e;
}
function uV(e, t, n, o) {
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
function dV() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function gV(e, t) {
  return C(this, null, function* () {
    yield Su(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = cV(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const pV = window.Vue.computed, mV = window.Vue.onMounted, hV = window.Vue.ref;
function fV(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const wV = {
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
    const n = hV(null);
    let o = null;
    const s = pV(
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
    return mV(() => C(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = fV;
      const i = yield gV(u, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), o = uV(
        i,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = dV, o.focus();
    })), { sxeditor: n };
  }
}, zi = window.Vue.createElementVNode, vV = window.Vue.openBlock, _V = window.Vue.createElementBlock, SV = ["lang", "dir"], yV = /* @__PURE__ */ zi("div", { class: "overlay-header-container" }, [
  /* @__PURE__ */ zi("div", { class: "overlay-header header initial-header" }, [
    /* @__PURE__ */ zi("div", { class: "toolbar" })
  ])
], -1), xV = ["lang", "dir"];
function CV(e, t, n, o, s, a) {
  return vV(), _V("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    yV,
    zi("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, xV)
  ], 8, SV);
}
const bV = /* @__PURE__ */ de(wV, [["render", CV]]);
function Su() {
  return mw.loader.using("mw.cx3.ve");
}
const kV = window.Vuex.useStore, $V = () => {
  const e = kV();
  return (t, n) => C(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield Su(), new Promise((s) => {
      setTimeout(() => {
        const a = $h.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, VV = window.Vuex.useStore, Df = () => {
  const e = VV();
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
}, hl = window.Vue.computed, EV = window.Vuex.useStore, dt = () => {
  const e = EV(), { sectionSuggestion: t } = Fe(), { currentTranslation: n } = zt(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = D(), r = hl(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), l = hl(
    () => {
      var d, i;
      return ((d = t.value) == null ? void 0 : d.targetTitle) || ((i = n.value) == null ? void 0 : i.targetTitle);
    }
  ), u = hl(
    () => e.getters["mediawiki/getPage"](
      a.value,
      l.value
    )
  );
  return { currentSourcePage: r, currentTargetPage: u, currentTargetPageTitle: l };
}, rr = () => {
  const { currentSourcePage: e } = dt(), t = $V(), n = Df(), {
    setSectionURLParam: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    revisionURLParameter: l
  } = D(), u = (c, g) => C(void 0, null, function* () {
    c() || (yield n(
      s.value,
      a.value,
      r.value,
      l.value
    ), Wo || (yield t(
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
}, LV = window.Vuex.useStore, es = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o,
    isQuickTutorialForced: s
  } = D(), a = LV(), r = Ze(), l = () => {
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
    ), Wo) {
      d();
      return;
    }
    if (u())
      return;
    const c = l();
    r.push({ name: c.name });
  };
}, yu = () => {
  const e = xt(), { currentTranslation: t } = zt();
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
}, TV = window.Vue.ref, AV = () => {
  const e = Ze(), { logDashboardTranslationStartEvent: t } = ir(), n = yu(), o = es(), { sectionURLParameter: s } = D(), { targetPageExists: a } = Cn(), { selectPageSectionByTitle: r } = rr(), l = () => C(void 0, null, function* () {
    yield r(s.value), e.push({ name: "sx-content-comparator" });
  }), u = TV(!1), { currentTranslation: d } = zt();
  return {
    handlePrimaryButtonClick: () => {
      d.value ? d.value.isArticleTranslation && !Wo ? u.value = !0 : (n(), o()) : s.value ? l() : a.value ? e.push({ name: "sx-section-selector" }) : (t(), o());
    },
    translationConfirmationDialogOn: u
  };
};
const DV = window.Vue.resolveDirective, ep = window.Vue.createElementVNode, tp = window.Vue.withDirectives, PV = window.Vue.unref, BV = window.Vue.withCtx, FV = window.Vue.openBlock, NV = window.Vue.createBlock, MV = {
  href: "",
  target: "_blank"
}, UV = window.Codex.CdxDialog, IV = {
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
    const n = e, o = t, s = (d) => o("update:modelValue", d), a = we(), r = {
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
      const c = DV("i18n");
      return FV(), NV(PV(UV), {
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
        default: BV(() => [
          tp(ep("p", null, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          tp(ep("a", MV, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title"]);
    };
  }
}, RV = () => {
  const {
    sectionURLParameter: e,
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = D(), s = nr();
  return () => C(void 0, null, function* () {
    const a = yield s(
      t.value,
      n.value,
      o.value
    );
    return a instanceof yn ? a.sourceSections.includes(e.value) : !1;
  });
};
const Se = window.Vue.unref, zV = window.Vue.resolveDirective, Es = window.Vue.createElementVNode, np = window.Vue.withDirectives, Ls = window.Vue.openBlock, fl = window.Vue.createElementBlock, wl = window.Vue.createCommentVNode, ht = window.Vue.createVNode, Tt = window.Vue.withCtx, vl = window.Vue.toDisplayString, _l = window.Vue.createTextVNode, OV = window.Vue.withModifiers, op = window.Vue.createBlock, HV = window.Vue.Fragment, jV = { class: "sx-translation-confirmer-body pb-4" }, qV = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, GV = ["innerHTML"], XV = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, WV = ["href"], KV = ["innerHTML"], Sl = window.Vue.computed, yl = window.Vue.ref, YV = window.Vue.watchEffect, QV = window.Vuex.useStore, xl = window.Codex.CdxButton, JV = window.Codex.CdxIcon, ZV = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = Ze(), o = QV(), { sectionSuggestion: s } = Fe(), { targetLanguageAutonym: a } = Le(o), { sectionURLParameter: r, clearSectionURLParameter: l } = D(), { logDashboardTranslationStartEvent: u } = ir(), d = es(), { handlePrimaryButtonClick: i, translationConfirmationDialogOn: c } = AV(), g = yl(!1), p = yl(null), m = () => C(this, null, function* () {
      let te = !0;
      try {
        te = yield St.checkUnreviewedTranslations();
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
    YV(() => {
      c.value && (w("open-translation-confirmation-dialog"), c.value = !1);
    });
    const {
      actionInformationMessage: _,
      getActionButtonLabel: y,
      isProgressiveButton: S,
      targetArticlePath: b
    } = lV(), E = we(), x = Sl(
      () => E.i18n(y(!!r.value))
    ), I = () => C(this, null, function* () {
      yield m(), !g.value && n.push({ name: "sx-section-selector" });
    }), L = Sl(() => {
      var te, R;
      return r.value && !!((R = (te = s.value) == null ? void 0 : te.sourceSections) != null && R.length);
    }), { targetPageExists: P } = Cn(), j = Sl(() => !r.value && P.value && Wo), oe = RV(), ae = yl(!1);
    return oe().then((te) => {
      te || l(), ae.value = !0;
    }), (te, R) => {
      const J = zV("i18n");
      return Ls(), fl(HV, null, [
        Es("section", jV, [
          Se(r) && ae.value ? (Ls(), fl("section", qV, [
            np(Es("h6", null, null, 512), [
              [J, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            Es("h5", {
              class: "ma-0",
              innerHTML: Se(r)
            }, null, 8, GV)
          ])) : Se(P) && !Se(r) ? (Ls(), fl("section", XV, [
            ht(Se(N), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: Tt(() => [
                np(ht(Se(k), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [J, [Se(a)], "cx-sx-existing-translation-status"]
                ]),
                ht(Se(k), { shrink: "" }, {
                  default: Tt(() => [
                    Es("a", {
                      href: Se(b),
                      target: "_blank"
                    }, [
                      ht(Se(JV), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: Se(er)
                      }, null, 8, ["icon"])
                    ], 8, WV)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            ht(Se(N), { class: "ma-0" }, {
              default: Tt(() => [
                ht(Se(k), null, {
                  default: Tt(() => [
                    Es("span", { innerHTML: Se(_) }, null, 8, KV)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : wl("", !0),
          ht(Se(N), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: Tt(() => [
              L.value ? (Ls(), op(Se(k), {
                key: 0,
                shrink: ""
              }, {
                default: Tt(() => [
                  ht(Se(xl), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: OV(I, ["stop"])
                  }, {
                    default: Tt(() => [
                      _l(vl(te.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : wl("", !0),
              j.value ? (Ls(), op(Se(k), {
                key: 1,
                shrink: ""
              }, {
                default: Tt(() => [
                  ht(Se(xl), {
                    size: "large",
                    onClick: h
                  }, {
                    default: Tt(() => [
                      _l(vl(te.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : wl("", !0),
              ht(Se(k), { shrink: "" }, {
                default: Tt(() => [
                  ht(Se(xl), {
                    weight: "primary",
                    size: "large",
                    action: Se(S) ? "progressive" : "default",
                    onClick: f
                  }, {
                    default: Tt(() => [
                      _l(vl(x.value), 1)
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
        ht(IV, {
          modelValue: g.value,
          "onUpdate:modelValue": R[0] || (R[0] = (se) => g.value = se),
          "target-url": p.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const Cl = window.Vue.unref, eE = window.Vue.openBlock, tE = window.Vue.createBlock, nE = window.Vue.computed, Pf = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedTargetLanguageCodes: t } = fa(), {
      sourceLanguageURLParameter: n,
      targetLanguageURLParameter: o
    } = D(), { currentLanguageTitleGroup: s } = Cn(), a = nE(
      () => {
        var d;
        return ((d = s.value) == null ? void 0 : d.titles.map((i) => i.lang)) || [];
      }
    ), r = Vy(), l = (d) => r(d, o.value), u = (d) => r(n.value, d);
    return (d, i) => (eE(), tE(ji, {
      class: "sx-article-language-selector",
      "source-languages": a.value,
      "target-languages": Cl(t),
      "selected-source-language": Cl(n),
      "selected-target-language": Cl(o),
      "onUpdate:selectedSourceLanguage": l,
      "onUpdate:selectedTargetLanguage": u
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
}, bl = window.Vue.computed, sp = window.Vue.ref, oE = window.Vue.watchEffect, sE = () => {
  const { currentSourcePage: e } = dt(), { sectionSuggestion: t } = Fe(), n = we(), { sectionURLParameter: o } = D(), s = sp(null), a = sp([]);
  oE(() => C(void 0, null, function* () {
    var d;
    if (t.value && o.value)
      a.value = [o.value];
    else if (t.value) {
      const { missingSections: i } = t.value;
      a.value = Object.keys(i);
    } else
      e.value && !Wo ? a.value = [Ho.LEAD_SECTION_DUMMY_TITLE] : a.value = [];
    a.value.length ? s.value = yield qk(
      e.value,
      a.value
    ) : s.value = ((d = e.value) == null ? void 0 : d.articleSize) || null;
  }));
  const r = bl(() => Vf(s.value || 0)), l = bl(() => {
    if (!t.value && !e.value || !r.value)
      return "";
    const d = Gk(
      r.value,
      a.value
    );
    return n.i18n(...d);
  }), u = bl(
    () => Ef(s.value)
  );
  return { timeEstimateMessage: l, isQuickTranslation: u };
};
const Ve = window.Vue.unref, kl = window.Vue.toDisplayString, Ln = window.Vue.createElementVNode, Gt = window.Vue.createVNode, Vo = window.Vue.withCtx, aE = window.Vue.resolveDirective, iE = window.Vue.withDirectives, rE = window.Vue.normalizeClass, ap = window.Vue.openBlock, lE = window.Vue.createElementBlock, cE = window.Vue.createCommentVNode, uE = window.Vue.createBlock, dE = ["textContent"], gE = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, pE = ["textContent"], mE = { class: "pe-3" }, hE = ["textContent"], fE = window.Codex.CdxButton, Ts = window.Codex.CdxIcon, Yn = window.Vue.computed, wE = window.Vuex.useStore, vE = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = wE(), { currentSourcePage: n } = dt(), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: s,
      pageURLParameter: a
    } = D(), r = Yn(() => t.state.suggestions.favorites || []), l = Yn(
      () => r.value.some(
        (S) => a.value === S.title && o.value === S.sourceLanguage && s.value === S.targetLanguage
      )
    ), { markFavoriteSuggestion: u, removeFavoriteSuggestion: d } = _u(), i = () => u(
      a.value,
      o.value,
      s.value
    ), c = () => d(
      new jo({
        title: a.value,
        sourceLanguage: o.value,
        targetLanguage: s.value
      })
    ), g = Yn(
      () => l.value ? Nh : Mh
    ), p = Yn(
      () => l.value ? c : i
    ), m = Yn(
      () => K.getPageUrl(o.value || "", a.value || "")
    ), h = Yn(
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
    }, w = Yn(() => {
      var b;
      const S = Object.values(((b = n.value) == null ? void 0 : b.pageviews) || {}).reduce(
        (E, x) => E + x,
        0
      );
      return f(S);
    }), { timeEstimateMessage: _, isQuickTranslation: y } = sE();
    return (S, b) => {
      const E = aE("i18n");
      return ap(), uE(Ve(N), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: Vo(() => [
          Gt(Ve(k), null, {
            default: Vo(() => [
              Gt(Ve(N), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: Vo(() => [
                  Gt(Ve(k), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: m.value,
                    target: "_blank"
                  }, {
                    default: Vo(() => [
                      Ln("h5", {
                        class: "ma-0 me-1",
                        textContent: kl(Ve(a))
                      }, null, 8, dE),
                      Gt(Ve(Ts), {
                        size: "x-small",
                        icon: Ve(er)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  Gt(Ve(k), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: Vo(() => [
                      Gt(Ve(fE), {
                        class: "px-0",
                        weight: "quiet",
                        action: l.value ? "progressive" : "default",
                        "aria-label": S.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: p.value
                      }, {
                        default: Vo(() => [
                          Gt(Ve(Ts), { icon: g.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Ln("div", gE, [
                Ln("div", null, [
                  Ln("span", null, [
                    Gt(Ve(Ts), {
                      icon: Ve(Uh),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    Ln("span", {
                      class: "pe-3",
                      textContent: kl(h.value)
                    }, null, 8, pE)
                  ]),
                  Ln("span", null, [
                    Gt(Ve(Ts), {
                      icon: Ve(GS),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    iE(Ln("span", mE, null, 512), [
                      [E, [w.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                Ve(_) ? (ap(), lE("span", {
                  key: 0,
                  class: rE(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": Ve(y)
                  }])
                }, [
                  Gt(Ve(Ts), {
                    icon: Ve(WS),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  Ln("span", {
                    textContent: kl(Ve(_))
                  }, null, 8, hE)
                ], 2)) : cE("", !0)
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
const _E = window.Vue.resolveDirective, Qn = window.Vue.createElementVNode, ai = window.Vue.withDirectives, SE = window.Vue.toDisplayString, yE = window.Vue.createTextVNode, $l = window.Vue.unref, Vl = window.Vue.withCtx, El = window.Vue.openBlock, Ll = window.Vue.createBlock;
window.Vue.createCommentVNode;
const xE = { class: "pa-4" }, CE = { class: "flex pt-2" }, bE = window.Codex.CdxButton, kE = window.Vue.ref, $E = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = es(), a = yu(), r = kE(!1), { currentTranslation: l } = zt(), u = () => C(this, null, function* () {
      r.value = !0;
      let d = !1;
      try {
        d = yield St.splitTranslation(
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
      const c = _E("i18n");
      return El(), Ll($l(yt), {
        value: e.modelValue,
        persistent: r.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: d.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: Vl(() => [
          Qn("div", CE, [
            r.value ? (El(), Ll($l(ct), { key: 1 })) : (El(), Ll($l(bE), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: u
            }, {
              default: Vl(() => [
                yE(SE(d.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: Vl(() => [
          Qn("div", xE, [
            ai(Qn("p", null, null, 512), [
              [c, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            ai(Qn("p", null, null, 512), [
              [c, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            Qn("p", null, [
              ai(Qn("strong", null, null, 512), [
                [c, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            ai(Qn("p", null, null, 512), [
              [c, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
}, VE = window.Vuex.useStore;
let ii = [];
const xu = () => {
  const e = VE();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || ii.includes(o) ? Promise.resolve() : (ii.push(o), lo.fetchLanguageTitles(t, n).then((s) => {
      ii = ii.filter(
        (a) => a !== o
      ), s && e.commit("mediawiki/addLanguageTitleGroup", s);
    }));
  };
}, EE = window.Vue.ref, Eo = EE(null), Bf = () => {
  const e = () => C(void 0, null, function* () {
    var n, o;
    Eo.value || (yield Zi.fetchCXServerToken().then((s) => {
      s.age <= 30 && (s.age = 3600);
      const a = Math.floor(Date.now() / 1e3);
      s.refreshAt = a + s.age - 30, Eo.value = s;
    }).catch((s) => {
      if (s === "token-impossible") {
        const a = Math.floor(Date.now() / 1e3);
        Eo.value = { jwt: "", refreshAt: a + 36e3 };
      }
    }));
    const t = Math.floor(Date.now() / 1e3);
    return ((n = Eo.value) == null ? void 0 : n.refreshAt) <= t ? (Eo.value = null, e()) : (o = Eo.value) == null ? void 0 : o.jwt;
  });
  return e;
};
const ip = window.Vue.resolveDirective, ri = window.Vue.createElementVNode, rp = window.Vue.withDirectives, Tn = window.Vue.unref, li = window.Vue.withCtx, cn = window.Vue.createVNode, Tl = window.Vue.openBlock, lp = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const LE = window.Vue.createBlock, TE = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, AE = { class: "mb-0" }, DE = { class: "sx-translation-confirmer__article-image flex justify-center" }, PE = ["src"], BE = { class: "ma-3" }, cp = window.Vue.computed, FE = window.Vue.inject, NE = window.Vue.onBeforeUnmount, ME = window.Vue.ref, UE = window.Vuex.useStore, IE = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = UE(), { currentSourcePage: n } = dt(), { previousRoute: o } = Le(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l,
      clearTranslationURLParameters: u
    } = D(), d = FE("breakpoints"), i = cp(() => d.value.nextBreakpoint), c = cp(
      () => {
        var y;
        return (y = n.value) == null ? void 0 : y.getImage(i.value);
      }
    ), { fetchTranslationsByStatus: g } = Zo(), p = xu();
    g("draft"), p(s.value, r.value), Su(), Bf()(), zh()(a.value);
    const f = Ze(), w = () => {
      const y = ["dashboard", "sx-article-search"];
      !o.value || !y.includes(o.value) ? f.push({ name: "dashboard" }) : f.push({ name: o.value });
    };
    NE(() => {
      const y = f.currentRoute.value.name;
      (y === "dashboard" || y === "sx-article-search") && u();
    });
    const _ = ME(!1);
    return (y, S) => {
      const b = ip("i18n"), E = ip("i18n-html");
      return Tl(), lp("section", TE, [
        cn(Tn(N), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: li(() => [
            cn(Tn(k), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: li(() => [
                rp(ri("h5", AE, null, 512), [
                  [b, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            cn(Tn(k), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: li(() => [
                cn(Tn(Ge), {
                  class: "pa-0",
                  type: "icon",
                  icon: Tn(Xi),
                  "icon-size": 20,
                  onClick: w
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        ri("div", DE, [
          c.value ? (Tl(), lp("img", {
            key: 0,
            src: c.value
          }, null, 8, PE)) : (Tl(), LE(Tn(Je), {
            key: 1,
            size: "120",
            icon: Tn(lh),
            "icon-color": y.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        cn(vE),
        cn(Pf),
        cn(ZV, {
          onOpenTranslationConfirmationDialog: S[0] || (S[0] = (x) => _.value = !0)
        }),
        cn(Tn(N), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: li(() => [
            ri("p", BE, [
              rp(ri("small", null, null, 512), [
                [E, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        cn($E, {
          modelValue: _.value,
          "onUpdate:modelValue": S[1] || (S[1] = (x) => _.value = x)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const RE = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: IE
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, zE = window.Vue.resolveComponent, OE = window.Vue.createVNode, HE = window.Vue.normalizeClass, jE = window.Vue.openBlock, qE = window.Vue.createElementBlock;
function GE(e, t, n, o, s, a) {
  const r = zE("sx-translation-confirmer");
  return jE(), qE("main", {
    class: HE(["sx-translation-confirmer-view", a.classes])
  }, [
    OE(r)
  ], 2);
}
const XE = /* @__PURE__ */ de(RE, [["render", GE]]);
const WE = window.Vue.toDisplayString, up = window.Vue.unref, KE = window.Vue.createVNode, YE = window.Vue.createTextVNode, QE = window.Vue.createElementVNode, JE = window.Vue.openBlock, ZE = window.Vue.createElementBlock, e4 = { class: "sx-section-selector-view-article-item" }, t4 = ["href"], n4 = window.Codex.CdxIcon, dp = {
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
    return (t, n) => (JE(), ZE("span", e4, [
      QE("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        YE(WE(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        KE(up(n4), {
          size: "x-small",
          icon: up(er)
        }, null, 8, ["icon"])
      ], 8, t4)
    ]));
  }
};
const o4 = window.Vue.resolveDirective, ci = window.Vue.createElementVNode, Al = window.Vue.withDirectives, Jn = window.Vue.unref, s4 = window.Vue.toDisplayString, ui = window.Vue.withCtx, As = window.Vue.createVNode, a4 = window.Vue.openBlock, i4 = window.Vue.createElementBlock, r4 = { class: "sx-section-selector__header pa-4" }, l4 = { class: "sx-section-selector__header-text ma-0" }, c4 = ["textContent"], u4 = { class: "pt-0 ma-0" }, d4 = { class: "ma-0" }, g4 = window.Codex.CdxButton, p4 = window.Codex.CdxIcon, m4 = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = Fe();
    return (n, o) => {
      const s = o4("i18n");
      return a4(), i4("div", r4, [
        As(Jn(N), { class: "ma-0 pb-3" }, {
          default: ui(() => [
            As(Jn(k), null, {
              default: ui(() => {
                var a;
                return [
                  Al(ci("h6", l4, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  ci("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: s4((a = Jn(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, c4)
                ];
              }),
              _: 1
            }),
            As(Jn(k), {
              shrink: "",
              class: "justify-end"
            }, {
              default: ui(() => [
                As(Jn(g4), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: ui(() => [
                    As(Jn(p4), { icon: Jn(Jo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Al(ci("h4", u4, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        Al(ci("p", d4, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, h4 = window.Vue.renderList, f4 = window.Vue.Fragment, Dl = window.Vue.openBlock, gp = window.Vue.createElementBlock, w4 = window.Vue.renderSlot, di = window.Vue.unref, pp = window.Vue.createVNode, mp = window.Vue.withCtx, v4 = window.Vue.createBlock, _4 = { class: "sx-section-selector__sections-list ma-0 pa-0" }, S4 = window.Codex.CdxButton, y4 = window.Codex.CdxIcon, Ff = {
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
    return (t, n) => (Dl(), gp("ul", _4, [
      (Dl(!0), gp(f4, null, h4(e.sections, (o) => (Dl(), v4(di(N), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: mp(() => [
          pp(di(S4), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: mp(() => [
              w4(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              pp(di(y4), { icon: di(_a) }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["aria-label", "onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, x4 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const C4 = window.Vue.resolveDirective, gi = window.Vue.createElementVNode, Pl = window.Vue.withDirectives, At = window.Vue.unref, Lo = window.Vue.withCtx, Bl = window.Vue.openBlock, hp = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Ds = window.Vue.createVNode, b4 = window.Vue.toDisplayString, k4 = window.Vue.createTextVNode, $4 = window.Vue.createElementBlock, V4 = { class: "sx-section-selector__missing-sections py-2" }, E4 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, L4 = ["lang", "dir", "innerHTML"], fp = window.Vue.computed, T4 = window.Codex.CdxButton, A4 = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = Fe(), { targetLanguageURLParameter: n } = D(), o = fp(() => H.getAutonym(n.value)), s = fp(
      () => {
        var a;
        return Object.keys(((a = t.value) == null ? void 0 : a.missingSections) || {}).length === 0;
      }
    );
    return (a, r) => {
      const l = C4("i18n");
      return Bl(), $4("section", V4, [
        Pl(gi("h4", E4, null, 512), [
          [l, [
            o.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        s.value ? (Bl(), hp(At(N), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: Lo(() => [
            Ds(At(k), {
              class: "py-6 justify-center",
              innerHTML: At(x4)
            }, null, 8, ["innerHTML"]),
            Ds(At(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: Lo(() => [
                Pl(gi("h6", null, null, 512), [
                  [l, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            Ds(At(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: Lo(() => [
                Pl(gi("p", null, null, 512), [
                  [l, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            Ds(At(k), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: Lo(() => [
                Ds(At(T4), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: r[1] || (r[1] = (u) => a.$emit("close"))
                }, {
                  default: Lo(() => [
                    k4(b4(a.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (Bl(), hp(Ff, {
          key: 0,
          sections: At(t).orderedMissingSections,
          onSelectSection: r[0] || (r[0] = (u) => a.$emit("select-section", u))
        }, {
          default: Lo(({ sourceSection: u }) => {
            var d, i;
            return [
              gi("h5", {
                class: "ma-0",
                lang: (d = At(t)) == null ? void 0 : d.sourceLanguage,
                dir: At(H.getDir)((i = At(t)) == null ? void 0 : i.sourceLanguage),
                innerHTML: u
              }, null, 8, L4)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const D4 = window.Vue.resolveDirective, pi = window.Vue.createElementVNode, P4 = window.Vue.withDirectives, Zn = window.Vue.unref, B4 = window.Vue.withCtx, F4 = window.Vue.createVNode, N4 = window.Vue.openBlock, M4 = window.Vue.createElementBlock, U4 = { class: "sx-section-selector__present-sections py-2" }, I4 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, R4 = { class: "sx-section-selector__present-section-button-content" }, z4 = ["lang", "dir", "innerHTML"], O4 = ["lang", "dir", "innerHTML"], H4 = window.Vue.computed, wp = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = Fe(), { targetLanguageURLParameter: n } = D(), o = H4(() => H.getAutonym(n.value));
    return (s, a) => {
      var l;
      const r = D4("i18n");
      return N4(), M4("section", U4, [
        P4(pi("h4", I4, null, 512), [
          [r, [
            o.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        F4(Ff, {
          sections: ((l = Zn(t)) == null ? void 0 : l.orderedPresentSections) || [],
          onSelectSection: a[0] || (a[0] = (u) => s.$emit("select-section", u))
        }, {
          default: B4(({ sourceSection: u, targetSection: d }) => {
            var i, c, g, p;
            return [
              pi("div", R4, [
                pi("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (i = Zn(t)) == null ? void 0 : i.sourceLanguage,
                  dir: Zn(H.getDir)((c = Zn(t)) == null ? void 0 : c.sourceLanguage),
                  innerHTML: u
                }, null, 8, z4),
                pi("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (g = Zn(t)) == null ? void 0 : g.targetLanguage,
                  dir: Zn(H.getDir)((p = Zn(t)) == null ? void 0 : p.targetLanguage),
                  innerHTML: d
                }, null, 8, O4)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const Ue = window.Vue.createVNode, Fl = window.Vue.openBlock, vp = window.Vue.createBlock, _p = window.Vue.createCommentVNode, j4 = window.Vue.resolveDirective, An = window.Vue.createElementVNode, Ps = window.Vue.withDirectives, ot = window.Vue.unref, un = window.Vue.withCtx, q4 = window.Vue.normalizeClass, Sp = window.Vue.toDisplayString, yp = window.Vue.createTextVNode, G4 = window.Vue.createElementBlock, X4 = { class: "sx-section-selector col-12 col-tablet-9 col-desktop-7 mx-auto" }, W4 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, K4 = { class: "sx-section-selector__additional-consideration-title" }, Y4 = { href: "#" }, Q4 = { class: "sx-section-selector__additional-consideration-title" }, J4 = { href: "#" }, Bs = window.Vue.computed, Z4 = window.Vue.inject, e3 = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = Z4("breakpoints"), n = Bs(() => t.value.desktopAndUp), { sectionSuggestion: o } = Fe(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      clearTranslationURLParameters: r,
      setSectionURLParam: l
    } = D(), u = Bs(() => H.getAutonym(s.value)), d = Bs(() => H.getAutonym(a.value)), i = Bs(
      () => {
        var y;
        return K.getPageUrl(s.value, (y = o.value) == null ? void 0 : y.sourceTitle);
      }
    ), c = Bs(
      () => {
        var y;
        return K.getPageUrl(a.value, (y = o.value) == null ? void 0 : y.targetTitle);
      }
    ), g = Ze(), p = () => {
      r(), g.push({ name: "dashboard" });
    }, { currentTranslation: m } = zt(), h = es(), f = yu(), { selectPageSectionByTitle: w } = rr(), _ = (y) => {
      l(y), m.value ? (f(), h()) : (w(y), g.push({ name: "sx-content-comparator" }));
    };
    return (y, S) => {
      const b = j4("i18n");
      return Fl(), G4("section", X4, [
        Ue(m4, { onClose: p }),
        Ue(Pf),
        Ue(ot(N), {
          class: "ma-0",
          align: "stretch"
        }, {
          default: un(() => [
            Ue(ot(k), {
              cols: "12",
              desktop: "8",
              class: "ma-0 pa-0"
            }, {
              default: un(() => [
                Ue(A4, {
                  onSelectSection: _,
                  onClose: p
                }),
                n.value ? _p("", !0) : (Fl(), vp(wp, {
                  key: 0,
                  onSelectSection: _
                })),
                An("section", {
                  class: q4(["py-2", { "sx-section-selector__more-details--desktop": n.value }])
                }, [
                  Ps(An("h4", W4, null, 512), [
                    [b, [
                      d.value
                    ], "cx-sx-section-selector-more-details-title"]
                  ]),
                  Ue(ot(N), {
                    class: "ma-0",
                    align: "start",
                    justify: "start"
                  }, {
                    default: un(() => [
                      Ue(ot(k), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: un(() => [
                          Ue(dp, {
                            path: i.value,
                            autonym: u.value
                          }, null, 8, ["path", "autonym"])
                        ]),
                        _: 1
                      }),
                      Ue(ot(k), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: un(() => [
                          Ue(dp, {
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
                Ue(ot(N), {
                  class: "sx-section-selector__additional-considerations ma-0",
                  align: "stretch"
                }, {
                  default: un(() => [
                    Ue(ot(k), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 pt-5 pb-4"
                    }, {
                      default: un(() => [
                        An("h6", K4, [
                          Ue(ot(Je), {
                            icon: ot(P0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          yp(" " + Sp(y.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                        ]),
                        Ps(An("p", null, null, 512), [
                          [b, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                        ]),
                        Ps(An("a", Y4, null, 512), [
                          [b, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                        ])
                      ]),
                      _: 1
                    }),
                    Ue(ot(k), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 py-5"
                    }, {
                      default: un(() => [
                        An("h6", Q4, [
                          Ue(ot(Je), {
                            icon: ot(D0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          yp(" " + Sp(y.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                        ]),
                        Ps(An("p", null, null, 512), [
                          [b, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                        ]),
                        Ps(An("a", J4, null, 512), [
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
            n.value ? (Fl(), vp(ot(k), {
              key: 0,
              desktop: "4",
              class: "ma-0 pa-0"
            }, {
              default: un(() => [
                Ue(wp, {
                  class: "sx-section-selector-section-list-present--sidebar fill-height p-0",
                  onSelectSection: _
                })
              ]),
              _: 1
            })) : _p("", !0)
          ]),
          _: 1
        })
      ]);
    };
  }
}, t3 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: e3
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, n3 = window.Vue.resolveComponent, o3 = window.Vue.createVNode, s3 = window.Vue.normalizeClass, a3 = window.Vue.openBlock, i3 = window.Vue.createElementBlock;
function r3(e, t, n, o, s, a) {
  const r = n3("sx-section-selector");
  return a3(), i3("main", {
    class: s3(["sx-section-selector-view", a.classes])
  }, [
    o3(r)
  ], 2);
}
const l3 = /* @__PURE__ */ de(t3, [["render", r3]]), mi = window.Vue.computed, c3 = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t
  } = D(), n = mi(
    () => H.getAutonym(e.value)
  ), o = mi(
    () => H.getAutonym(t.value)
  ), { target: s, PUBLISHING_TARGETS: a } = Rt(), r = mi(
    () => s.value === a.EXPAND
  ), l = we();
  return mi(() => {
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
          o.value
        ),
        type: "text"
      }
    } : d = {
      value: "target_article",
      props: {
        label: l.i18n(
          "cx-sx-content-comparator-target-selector-full-article-title",
          o.value
        ),
        type: "text"
      }
    }, [u, d];
  });
};
const xp = window.Vue.unref, u3 = window.Vue.createVNode, d3 = window.Vue.openBlock, g3 = window.Vue.createElementBlock, p3 = { class: "sx-content-comparator__content-type-selector" }, m3 = window.Vue.watchEffect, h3 = {
  __name: "ContentTypeSelector",
  props: {
    selection: {
      type: String,
      required: !0
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = (r) => o("update:selection", r), a = c3();
    return m3(() => {
      a.value.map((l) => l.value).includes(n.selection) || s(a.value[0].value);
    }), (r, l) => (d3(), g3("div", p3, [
      u3(xp(pa), {
        items: xp(a),
        active: e.selection,
        onSelect: s
      }, null, 8, ["items", "active"])
    ]));
  }
}, Fs = window.Vue.computed, f3 = window.Vuex.useStore, ne = () => {
  const e = f3(), { currentSourcePage: t, currentTargetPageTitle: n } = dt(), { currentMTProvider: o } = Le(e), { sectionURLParameter: s } = D(), a = Fs(() => {
    var i, c;
    return s.value ? (c = t.value) == null ? void 0 : c.getSectionByTitle(s.value) : (i = t.value) == null ? void 0 : i.leadSection;
  }), r = Fs(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.isTitleSelected;
    }
  ), l = Fs(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.selectedContentTranslationUnit;
    }
  ), u = Fs(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.getProposedTranslationByMtProvider(
        o.value
      );
    }
  ), d = Fs(
    () => a.value.isLeadSection ? a.value.title : n.value
  );
  return {
    sourceSection: a,
    isSectionTitleSelected: r,
    selectedContentTranslationUnit: l,
    currentProposedTranslation: u,
    targetPageTitleForPublishing: d
  };
}, Ns = window.Vue.computed, Cu = () => {
  const { currentTargetPage: e } = dt(), { sectionSuggestion: t } = Fe(), { sectionURLParameter: n } = D(), o = Ns(
    () => t.value.missingSections[n.value] || t.value.presentSections[n.value] || ""
  ), s = Ns(
    () => {
      var d;
      return (((d = a.value) == null ? void 0 : d.title) || "").replace(/ /g, "_");
    }
  ), a = Ns(
    () => {
      var d;
      return (d = e.value) == null ? void 0 : d.getSectionByTitle(o.value);
    }
  ), { sourceSection: r } = ne(), l = Ns(() => {
    var d;
    return (d = r.value) == null ? void 0 : d.html;
  }), u = Ns(() => {
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
const hi = window.Vue.createVNode, w3 = window.Vue.createElementVNode, Dn = window.Vue.unref, fi = window.Vue.withCtx, Nl = window.Vue.openBlock, Ml = window.Vue.createBlock;
window.Vue.createCommentVNode;
const v3 = window.Vue.normalizeClass, _3 = ["lang", "dir", "innerHTML"], Cp = window.Vue.ref, wi = window.Vue.computed, S3 = window.Vue.onMounted, y3 = {
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
    const n = e, o = t, s = Cp(!1), { sectionSuggestion: a } = Fe(), { sectionURLParameter: r } = D(), l = wi(
      () => (c.value || "").replace(/ /g, "_")
    ), u = (h) => o("update:contentTypeSelection", h), { activeSectionTargetTitle: d, targetSectionAnchor: i } = Cu(), c = wi(
      () => {
        var h;
        return (((h = a.value) == null ? void 0 : h.sourceSections) || []).find(
          (f) => f === r.value
        );
      }
    ), g = wi(() => {
      switch (n.contentTypeSelection) {
        case "source_section":
          return {
            title: c.value,
            path: `${K.getPageUrl(
              a.value.sourceLanguage,
              a.value.sourceTitle
            )}#${l.value}`,
            lang: a.value.sourceLanguage,
            dir: H.getDir(a.value.sourceLanguage)
          };
        case "target_article":
          return {
            title: a.value.targetTitle,
            path: p.value,
            lang: a.value.targetLanguage,
            dir: H.getDir(a.value.targetLanguage)
          };
        default:
          return {
            title: d.value,
            path: `${p.value}#${i.value}`
          };
      }
    }), p = wi(
      () => K.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), m = Cp(null);
    return S3(() => {
      new IntersectionObserver(
        ([f]) => {
          s.value = f.intersectionRect.height < f.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(m.value.$el);
    }), (h, f) => (Nl(), Ml(Dn(N), {
      ref_key: "contentHeader",
      ref: m,
      class: v3(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
      direction: "column",
      align: "stretch",
      reverse: s.value
    }, {
      default: fi(() => [
        hi(h3, {
          selection: e.contentTypeSelection,
          "onUpdate:selection": u
        }, null, 8, ["selection"]),
        hi(Dn(N), {
          justify: "between",
          class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
        }, {
          default: fi(() => [
            hi(Dn(k), null, {
              default: fi(() => [
                w3("h3", {
                  lang: g.value.lang,
                  dir: g.value.dir,
                  class: "ma-0 pa-0",
                  innerHTML: g.value.title
                }, null, 8, _3)
              ]),
              _: 1
            }),
            hi(Dn(k), { shrink: "" }, {
              default: fi(() => [
                s.value ? (Nl(), Ml(Dn(Ge), {
                  key: 0,
                  icon: Dn(Gi),
                  progressive: "",
                  label: h.$i18n(
                    "cx-sx-content-comparator-content-header-translate-button-label"
                  ),
                  onClick: f[0] || (f[0] = (w) => h.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label"])) : (Nl(), Ml(Dn(Ge), {
                  key: 1,
                  class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                  icon: Dn(rh),
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
}, vi = window.Vue.unref, bp = window.Vue.createVNode, x3 = window.Vue.openBlock, C3 = window.Vue.createElementBlock, b3 = { class: "sx-content-comparator__header-navigation flex items-center" }, k3 = window.Vue.computed, $3 = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = D(), o = k3(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = rr(), a = () => {
      const l = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[l];
      s(u);
    }, r = () => {
      const l = (o.value + 1) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[l];
      s(u);
    };
    return (l, u) => (x3(), C3("div", b3, [
      bp(vi(Ge), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: vi(E0),
        onClick: a
      }, null, 8, ["icon"]),
      bp(vi(Ge), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: vi(V0),
        onClick: r
      }, null, 8, ["icon"])
    ]));
  }
};
const kp = window.Vue.toDisplayString, be = window.Vue.unref, V3 = window.Vue.resolveDirective, Ul = window.Vue.withDirectives, To = window.Vue.openBlock, _i = window.Vue.createElementBlock, E3 = window.Vue.createCommentVNode, L3 = window.Vue.createTextVNode, $p = window.Vue.createElementVNode, T3 = window.Vue.normalizeClass, Il = window.Vue.withCtx, Rl = window.Vue.createVNode, Vp = window.Vue.createBlock, A3 = { class: "sx-content-comparator-header__mapped-section" }, D3 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, P3 = { key: 0 }, B3 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, F3 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, N3 = window.Vue.computed, M3 = {
  __name: "SXContentComparatorHeaderMappedSection",
  setup(e) {
    const { targetLanguageURLParameter: t } = D(), { activeSectionTargetTitle: n } = Cu(), o = we(), { target: s, PUBLISHING_TARGETS: a, setTarget: r } = Rt(), l = N3(
      () => o.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        H.getAutonym(t.value)
      )
    );
    return (u, d) => {
      const i = V3("i18n");
      return To(), _i("div", A3, [
        Rl(be(N), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: Il(() => [
            Rl(be(k), { grow: "" }, {
              default: Il(() => [
                $p("h6", D3, [
                  L3(kp(l.value) + " ", 1),
                  be(s) === be(a).NEW_SECTION ? Ul((To(), _i("span", P3, null, 512)), [
                    [i, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : E3("", !0)
                ]),
                $p("h6", {
                  class: T3(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": be(s) === be(a).NEW_SECTION
                  }])
                }, kp(be(n)), 3)
              ]),
              _: 1
            }),
            Rl(be(k), { shrink: "" }, {
              default: Il(() => [
                be(s) === be(a).EXPAND ? (To(), Vp(be(Ge), {
                  key: 0,
                  class: "sx-content-comparator-header__mapped-section__discard-button pa-0",
                  icon: be(ih),
                  type: "icon",
                  onClick: d[0] || (d[0] = (c) => be(r)(be(a).NEW_SECTION))
                }, null, 8, ["icon"])) : (To(), Vp(be(Ge), {
                  key: 1,
                  class: "sx-content-comparator-header__mapped-section__undo-button pa-0",
                  icon: be(N0),
                  type: "icon",
                  onClick: d[1] || (d[1] = (c) => be(r)(be(a).EXPAND))
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        be(s) === be(a).EXPAND ? Ul((To(), _i("p", B3, null, 512)), [
          [i, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ]) : Ul((To(), _i("p", F3, null, 512)), [
          [i, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ])
      ]);
    };
  }
};
const Be = window.Vue.unref, Ao = window.Vue.createVNode, U3 = window.Vue.toDisplayString, vn = window.Vue.createElementVNode, zl = window.Vue.withCtx, I3 = window.Vue.resolveDirective, Ep = window.Vue.withDirectives, Ol = window.Vue.openBlock, Lp = window.Vue.createBlock, Tp = window.Vue.createCommentVNode, R3 = window.Vue.createElementBlock, z3 = { class: "sx-content-comparator__header pa-4" }, O3 = { class: "row my-1 py-2 mx-0 gap-6" }, H3 = { class: "sx-content-comparator-header__titles-nav flex grow justify-between" }, j3 = { class: "sx-content-comparator-header__titles shrink" }, q3 = ["lang", "dir"], G3 = ["lang", "dir", "innerHTML"], X3 = { class: "py-2 mb-1" }, W3 = /* @__PURE__ */ vn("br", null, null, -1), Si = window.Vue.computed, K3 = {
  __name: "SXContentComparatorHeader",
  emits: ["close", "translation-button-clicked"],
  setup(e) {
    const { sectionURLParameter: t } = D(), { sourceSection: n } = ne(), { sectionSuggestion: o, isCurrentSectionPresent: s } = Fe(), a = Si(
      () => {
        var d;
        return (d = o.value) == null ? void 0 : d.missingSections.hasOwnProperty(t.value);
      }
    ), r = Si(() => {
      var d;
      return (d = n.value) == null ? void 0 : d.html;
    }), l = Si(() => [
      ...Object.keys(o.value.missingSections),
      ...Object.keys(o.value.presentSections)
    ]), u = Si(
      () => {
        var d;
        return (((d = o.value) == null ? void 0 : d.sourceSections) || []).find(
          (i) => i === t.value
        );
      }
    );
    return (d, i) => {
      const c = I3("i18n");
      return Ol(), R3("div", z3, [
        Ao(Be(Ge), {
          class: "py-2 pa-0",
          icon: Be(L0),
          label: d.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: i[0] || (i[0] = (g) => d.$emit("close"))
        }, null, 8, ["icon", "label"]),
        vn("div", O3, [
          vn("div", H3, [
            vn("div", j3, [
              vn("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: Be(o).sourceLanguage,
                dir: Be(H.getDir)(Be(o).sourceLanguage)
              }, U3(Be(o).sourceTitle), 9, q3),
              vn("h2", {
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: Be(o).sourceLanguage,
                dir: Be(H.getDir)(Be(o).sourceLanguage),
                innerHTML: u.value
              }, null, 8, G3)
            ]),
            Ao($3, { "section-source-titles": l.value }, null, 8, ["section-source-titles"])
          ]),
          vn("div", X3, [
            Ao(Be(Ge), {
              class: "sx-content-comparator-header__translation-button",
              icon: Be(Gi),
              progressive: "",
              label: d.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !r.value,
              onClick: i[1] || (i[1] = (g) => d.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ])
        ]),
        a.value ? (Ol(), Lp(Be(N), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: zl(() => [
            Ao(Be(k), {
              shrink: "",
              class: "pe-2"
            }, {
              default: zl(() => [
                Ao(Be(Je), { icon: Be(B0) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Ao(Be(k), { class: "ma-0" }, {
              default: zl(() => [
                Ep(vn("strong", null, null, 512), [
                  [c, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                W3,
                Ep(vn("span", null, null, 512), [
                  [c, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Tp("", !0),
        Be(s) ? (Ol(), Lp(M3, { key: 1 })) : Tp("", !0)
      ]);
    };
  }
};
const Ap = window.Vue.toDisplayString, Y3 = window.Vue.createElementVNode, Dp = window.Vue.openBlock, Pp = window.Vue.createElementBlock, Q3 = window.Vue.createCommentVNode, J3 = { class: "sx-content-comparator__new-section-placeholder mt-4 py-4 px-7" }, Z3 = ["textContent"], e5 = ["textContent"], Nf = {
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
    return (t, n) => (Dp(), Pp("section", J3, [
      Y3("h5", {
        textContent: Ap(e.placeholderTitle)
      }, null, 8, Z3),
      e.placeholderSubtitle ? (Dp(), Pp("p", {
        key: 0,
        textContent: Ap(e.placeholderSubtitle)
      }, null, 8, e5)) : Q3("", !0)
    ]));
  }
}, t5 = window.Vue.computed, n5 = window.Vue.createApp, o5 = window.Vuex.useStore, s5 = () => {
  const e = o5(), { sectionSuggestion: t } = Fe(), { currentTargetPage: n } = dt(), o = we(), s = () => n5(
    Nf,
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
  return t5(() => {
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
const Hl = window.Vue.createVNode, st = window.Vue.unref, Do = window.Vue.openBlock, Bp = window.Vue.createBlock, Fp = window.Vue.createCommentVNode, yi = window.Vue.createElementVNode, jl = window.Vue.Fragment, xi = window.Vue.createElementBlock, a5 = { class: "sx-content-comparator col-12 col-tablet-9 col-desktop-7 mx-auto" }, i5 = { class: "sx-content-comparator__source-content" }, r5 = ["lang", "dir", "innerHTML"], l5 = ["lang", "dir", "innerHTML"], c5 = ["innerHTML"], u5 = window.Vue.ref, d5 = window.Vue.computed, Np = window.Vue.watch, g5 = {
  __name: "SXContentComparator",
  setup(e) {
    const { resetPublishTarget: t } = Rt(), n = Ze(), o = u5("source_section"), { logDashboardTranslationStartEvent: s } = ir(), a = es(), r = () => n.push({ name: "sx-section-selector" }), l = () => {
      s(), a();
    }, {
      sourceLanguageURLParameter: u,
      targetLanguageURLParameter: d
    } = D(), { sourceSectionContent: i, targetSectionContent: c } = Cu(), g = s5(), { sectionSuggestion: p, isCurrentSectionPresent: m } = Fe(), h = d5(() => p.value.targetTitle), f = Df();
    return Np(
      h,
      () => f(
        d.value,
        u.value,
        h.value
      ),
      { immediate: !0 }
    ), Np(m, t, { immediate: !0 }), (w, _) => (Do(), xi("section", a5, [
      Hl(K3, {
        onTranslationButtonClicked: l,
        onClose: r
      }),
      Hl(y3, {
        "content-type-selection": o.value,
        "onUpdate:contentTypeSelection": _[0] || (_[0] = (y) => o.value = y),
        onTranslationButtonClicked: l
      }, null, 8, ["content-type-selection"]),
      yi("section", i5, [
        o.value === "source_section" ? (Do(), xi(jl, { key: 0 }, [
          st(i) ? Fp("", !0) : (Do(), Bp(st(ct), { key: 0 })),
          yi("section", {
            lang: st(u),
            dir: st(H.getDir)(st(u)),
            class: "pt-2 px-4",
            innerHTML: st(i)
          }, null, 8, r5)
        ], 64)) : o.value === "target_article" ? (Do(), xi(jl, { key: 1 }, [
          st(g) ? Fp("", !0) : (Do(), Bp(st(ct), { key: 0 })),
          yi("article", {
            lang: st(d),
            dir: st(H.getDir)(st(d)),
            class: "px-4",
            innerHTML: st(g)
          }, null, 8, l5)
        ], 64)) : (Do(), xi(jl, { key: 2 }, [
          yi("section", {
            class: "pa-4",
            innerHTML: st(c)
          }, null, 8, c5),
          Hl(Nf, {
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
}, p5 = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: g5
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, m5 = window.Vue.resolveComponent, h5 = window.Vue.createVNode, f5 = window.Vue.normalizeClass, w5 = window.Vue.openBlock, v5 = window.Vue.createElementBlock;
function _5(e, t, n, o, s, a) {
  const r = m5("sx-content-comparator");
  return w5(), v5("main", {
    class: f5(["sx-content-comparator-view", a.classes])
  }, [
    h5(r)
  ], 2);
}
const S5 = /* @__PURE__ */ de(p5, [["render", _5]]);
const y5 = window.Vue.resolveDirective, Ms = window.Vue.createElementVNode, Mp = window.Vue.withDirectives, Ci = window.Vue.unref, ql = window.Vue.createVNode, Up = window.Vue.toDisplayString, Ip = window.Vue.createTextVNode, Us = window.Vue.withCtx, x5 = window.Vue.openBlock, C5 = window.Vue.createBlock, b5 = { class: "mw-ui-dialog__header px-4 py-3" }, k5 = { class: "mw-ui-dialog__header-title" }, $5 = { class: "pa-4" }, V5 = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, Rp = window.Codex.CdxButton, E5 = {
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
      const u = y5("i18n");
      return x5(), C5(Ci(yt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: Us(() => [
          Ms("div", b5, [
            Mp(Ms("span", k5, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: Us(() => [
          Ms("div", V5, [
            ql(Ci(Rp), {
              weight: "quiet",
              onClick: s
            }, {
              default: Us(() => [
                Ip(Up(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            ql(Ci(Rp), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: Us(() => [
                Ip(Up(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: Us(() => [
          ql(Ci(qi)),
          Ms("div", $5, [
            Mp(Ms("span", null, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, L5 = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => ao(a)
  );
  return s && ph(s) ? St.parseTemplateWikitext(
    dh(s),
    n,
    t
  ) : Promise.resolve(null);
}, Mf = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => ao(a)
  );
  return s ? St.parseTemplateWikitext(
    dh(s),
    n,
    t
  ) : Promise.resolve(null);
}, T5 = window.Vuex.useStore, bu = () => {
  const e = T5(), { sourceSection: t } = ne(), { getCurrentTitleByLanguage: n } = Cn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = D(), a = Bf(), r = (i, c, g) => {
    if (i === 0) {
      t.value.proposedTitleTranslations[c] = g;
      return;
    }
    const p = t.value.getContentTranslationUnitById(i);
    p instanceof lt ? p.blockTemplateProposedTranslations[c] = g : p instanceof Rn && p.addProposedTranslation(c, g);
  }, l = (i, c) => C(void 0, null, function* () {
    if (!e.getters["mediawiki/isValidProviderForTranslation"](o.value, s.value, i))
      return "";
    try {
      const p = yield a();
      return yield St.fetchSegmentTranslation(
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
    p instanceof lt && (p.setBlockTemplateAdaptationInfoByHtml(
      c,
      m
    ), m = (yield L5(
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
}, A5 = window.Vuex.useStore, D5 = () => {
  const { sourceSection: e } = ne(), t = A5(), { translateTranslationUnitById: n } = bu();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
function P5(e) {
  const t = document.createElement("div");
  return t.innerHTML = e, t.querySelectorAll("a").forEach((o) => {
    o.setAttribute("target", "_blank");
  }), t.innerHTML;
}
const B5 = window.Vue.resolveDirective, rt = window.Vue.createElementVNode, bi = window.Vue.withDirectives, Oe = window.Vue.unref, Gl = window.Vue.createVNode, dn = window.Vue.withCtx, F5 = window.Vue.renderList, N5 = window.Vue.Fragment, ki = window.Vue.openBlock, M5 = window.Vue.createElementBlock, U5 = window.Vue.toDisplayString, Xl = window.Vue.createBlock, zp = window.Vue.createCommentVNode, I5 = { class: "mw-ui-dialog__header pa-4" }, R5 = { class: "row ma-0 py-2" }, z5 = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, O5 = { class: "mb-0" }, H5 = { class: "col shrink justify-center" }, j5 = { class: "pb-2 mb-0" }, q5 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, G5 = ["dir", "lang", "innerHTML"], X5 = ["textContent"], W5 = ["innerHTML"], K5 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, Y5 = /* @__PURE__ */ rt("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), Q5 = ["innerHTML"], Wl = window.Vue.computed, J5 = window.Vuex.useStore, Z5 = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = re.EMPTY_TEXT_PROVIDER_KEY, s = re.ORIGINAL_TEXT_PROVIDER_KEY, a = J5(), {
      sourceSection: r,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: u
    } = ne(), {
      sourceLanguageURLParameter: d,
      targetLanguageURLParameter: i
    } = D(), c = Wl(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        d.value,
        i.value
      )
    ), g = Wl(() => {
      const S = [s, o];
      return c.value.filter(
        (b) => !S.includes(b)
      );
    }), p = Wl(
      () => l.value ? r.value.proposedTitleTranslations : u.value.proposedTranslations
    ), m = D5(), h = (S) => {
      m(S), w();
    }, f = re.getMTProviderLabel, w = () => n("update:active", !1), _ = we(), y = P5(
      _.i18n("cx-tools-mt-noservices")
    );
    return (S, b) => {
      const E = B5("i18n");
      return e.active ? (ki(), Xl(Oe(yt), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: dn(() => [
          rt("div", I5, [
            rt("div", R5, [
              rt("div", z5, [
                bi(rt("h4", O5, null, 512), [
                  [E, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              rt("div", H5, [
                Gl(Oe(Ge), {
                  type: "icon",
                  icon: Oe(Xi),
                  class: "pa-0",
                  onClick: w
                }, null, 8, ["icon"])
              ])
            ]),
            bi(rt("h6", j5, null, 512), [
              [E, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: dn(() => [
          Gl(Oe(Qe), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: b[0] || (b[0] = (x) => h(Oe(s)))
          }, {
            header: dn(() => [
              bi(rt("h5", q5, null, 512), [
                [E, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: dn(() => [
              rt("p", {
                dir: Oe(H.getDir)(Oe(d)),
                lang: Oe(d),
                innerHTML: p.value[Oe(s)]
              }, null, 8, G5)
            ]),
            _: 1
          }),
          (ki(!0), M5(N5, null, F5(g.value, (x) => (ki(), Xl(Oe(Qe), {
            key: x,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (I) => h(x)
          }, {
            header: dn(() => [
              rt("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: U5(Oe(f)(x))
              }, null, 8, X5)
            ]),
            default: dn(() => [
              rt("p", {
                innerHTML: p.value[x]
              }, null, 8, W5)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          Gl(Oe(Qe), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: b[1] || (b[1] = (x) => h(Oe(o)))
          }, {
            header: dn(() => [
              bi(rt("h5", K5, null, 512), [
                [E, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: dn(() => [
              Y5
            ]),
            _: 1
          }),
          g.value.length ? zp("", !0) : (ki(), Xl(Oe(Qe), {
            key: 0,
            class: "sx-sentence-selector__mt-disabled-info-card mx-4 pa-5"
          }, {
            header: dn(() => [
              rt("h5", {
                class: "sx-sentence-selector__translation-info-card-title",
                innerHTML: Oe(y)
              }, null, 8, Q5)
            ]),
            _: 1
          }))
        ]),
        _: 1
      })) : zp("", !0);
    };
  }
}, eL = window.Vuex.useStore, ts = () => {
  const { sourceSection: e } = ne(), t = eL(), { translateTranslationUnitById: n } = bu(), { currentMTProvider: o } = Le(t), s = (l) => C(void 0, null, function* () {
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
const Op = window.Vue.toDisplayString, Kl = window.Vue.createElementVNode, Yl = window.Vue.unref, tL = window.Vue.createVNode, nL = window.Vue.normalizeClass, oL = window.Vue.withCtx, sL = window.Vue.openBlock, aL = window.Vue.createBlock, iL = ["href"], rL = ["textContent"], lL = ["textContent"], Po = window.Vue.computed, Hp = "sx-sentence-selector__section-title", cL = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = ne(), { currentSourcePage: o } = dt(), { sourceLanguageURLParameter: s } = D(), a = Po(() => {
      var p;
      return (p = o.value) == null ? void 0 : p.title;
    }), r = Po(
      () => {
        var p;
        return ((p = t.value) == null ? void 0 : p.title) || a.value;
      }
    ), l = Po(
      () => K.getPageUrl(s.value, a.value)
    ), u = Po(
      () => {
        var p;
        return !!((p = t.value) != null && p.translatedTitle);
      }
    ), d = Po(
      () => u.value ? "translated" : "selected"
    ), i = Po(() => {
      const p = [Hp];
      return n.value && p.push(`${Hp}--${d.value}`), p;
    }), { selectTranslationUnitById: c } = ts(), g = () => c(0);
    return (p, m) => (sL(), aL(Yl(k), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: oL(() => [
        Kl("a", {
          href: l.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          Kl("strong", {
            textContent: Op(a.value)
          }, null, 8, rL),
          tL(Yl(Je), {
            icon: Yl(rh),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, iL),
        Kl("h2", {
          class: nL(["pa-0 ma-0", i.value]),
          onClick: g,
          textContent: Op(r.value)
        }, null, 10, lL)
      ]),
      _: 1
    }));
  }
};
const Xt = window.Vue.unref, Is = window.Vue.createVNode, $i = window.Vue.withCtx, jp = window.Vue.toDisplayString, qp = window.Vue.createTextVNode, uL = window.Vue.openBlock, dL = window.Vue.createBlock, gL = window.Vue.computed, Ql = window.Codex.CdxButton, Gp = window.Codex.CdxIcon, Uf = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = ne(), s = gL(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, r) => (uL(), dL(Xt(N), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: $i(() => [
        Is(Xt(Ql), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: Xt(n),
          onClick: r[0] || (r[0] = (l) => a.$emit("select-previous-segment"))
        }, {
          default: $i(() => [
            Is(Xt(Gp), {
              class: "me-1",
              icon: Xt(gu)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        Is(Xt(Ql), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !Xt(o),
          onClick: r[1] || (r[1] = (l) => a.$emit("apply-translation"))
        }, {
          default: $i(() => [
            qp(jp(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        Is(Xt(Ql), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: r[2] || (r[2] = (l) => a.$emit("skip-translation"))
        }, {
          default: $i(() => [
            qp(jp(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            Is(Xt(Gp), {
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
const eo = window.Vue.unref, pL = window.Vue.toDisplayString, Rs = window.Vue.createVNode, Vi = window.Vue.withCtx, mL = window.Vue.openBlock, hL = window.Vue.createBlock, Jl = window.Vue.computed, fL = window.Vuex.useStore, wL = window.Codex.CdxButton, vL = window.Codex.CdxIcon, _L = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = fL(), n = Jl(() => t.state.application.currentMTProvider), o = we(), s = Jl(() => ({
      [re.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [re.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = Jl(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        re.getMTProviderLabel(n.value)
      )
    );
    return (r, l) => (mL(), hL(eo(k), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: Vi(() => [
        Rs(eo(N), { class: "ma-0 ps-5 pb-4" }, {
          default: Vi(() => [
            Rs(eo(k), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: pL(a.value)
            }, null, 8, ["textContent"]),
            Rs(eo(k), {
              shrink: "",
              class: "pe-5"
            }, {
              default: Vi(() => [
                Rs(eo(wL), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: l[0] || (l[0] = (u) => r.$emit("configure-options"))
                }, {
                  default: Vi(() => [
                    Rs(eo(vL), {
                      class: "pa-0",
                      icon: eo(du)
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
const Dt = window.Vue.unref, Pn = window.Vue.createVNode, SL = window.Vue.resolveDirective, Xp = window.Vue.createElementVNode, yL = window.Vue.withDirectives, Wp = window.Vue.toDisplayString, Kp = window.Vue.createTextVNode, zs = window.Vue.withCtx, xL = window.Vue.openBlock, CL = window.Vue.createElementBlock, bL = { class: "mt-retry-body pb-5" }, kL = { class: "retry-body__message" }, Yp = window.Codex.CdxButton, Zl = window.Codex.CdxIcon, $L = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = SL("i18n");
      return xL(), CL("div", bL, [
        Xp("div", kL, [
          Pn(Dt(Zl), {
            class: "me-2",
            icon: Dt(qS)
          }, null, 8, ["icon"]),
          yL(Xp("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        Pn(Dt(N), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: zs(() => [
            Pn(Dt(k), { cols: "6" }, {
              default: zs(() => [
                Pn(Dt(Yp), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: zs(() => [
                    Pn(Dt(Zl), {
                      class: "me-1",
                      icon: Dt(Ih)
                    }, null, 8, ["icon"]),
                    Kp(" " + Wp(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Pn(Dt(k), { cols: "6" }, {
              default: zs(() => [
                Pn(Dt(Yp), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: zs(() => [
                    Pn(Dt(Zl), {
                      class: "me-1",
                      icon: Dt(oy)
                    }, null, 8, ["icon"]),
                    Kp(" " + Wp(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const Bo = window.Vue.createVNode, at = window.Vue.unref, Os = window.Vue.openBlock, VL = window.Vue.createElementBlock, EL = window.Vue.createCommentVNode, Ei = window.Vue.createBlock, LL = window.Vue.normalizeClass, TL = window.Vue.normalizeStyle, Hs = window.Vue.withCtx, AL = window.Vue.toDisplayString, DL = window.Vue.createTextVNode, PL = window.Vue.normalizeProps, BL = window.Vue.guardReactiveProps, FL = ["lang", "dir", "innerHTML"], ec = window.Vue.ref, NL = window.Vue.onMounted, ML = window.Vue.onBeforeUnmount, tc = window.Vue.computed, UL = window.Vue.nextTick, IL = window.Vuex.useStore, RL = window.Codex.CdxButton, zL = window.Codex.CdxIcon, OL = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = ec(0), n = ec(null), o = ec(null), s = IL(), { currentMTProvider: a } = Le(s), { targetLanguageURLParameter: r } = D(), { sourceSection: l, currentProposedTranslation: u } = ne(), d = tc(
      () => {
        var m, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (m = l.value) == null ? void 0 : m.selectedTranslationUnitId
        );
      }
    ), i = tc(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), c = tc(
      () => !!u.value || a.value === re.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    NL(() => C(this, null, function* () {
      yield UL(), g(), p.observe(n.value.$el), p.observe(o.value.$el);
    })), ML(() => {
      p.unobserve(n.value.$el), p.unobserve(o.value.$el);
    });
    const p = new ResizeObserver(() => g());
    return (m, h) => (Os(), Ei(at(Qe), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: Hs(() => [
        Bo(at(N), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: Hs(() => [
            Bo(_L, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => m.$emit("configure-options"))
            }, null, 512),
            Bo(at(k), {
              class: LL(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !c.value && d.value
              }]),
              style: TL(c.value ? i.value : null)
            }, {
              default: Hs(() => [
                c.value ? (Os(), VL("section", {
                  key: 0,
                  lang: at(r),
                  dir: at(H.getDir)(at(r)),
                  innerHTML: at(u)
                }, null, 8, FL)) : d.value ? (Os(), Ei(at(ct), { key: 1 })) : (Os(), Ei($L, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (f) => m.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (f) => m.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            Bo(at(k), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: Hs(() => [
                c.value || d.value ? (Os(), Ei(at(RL), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !c.value,
                  onClick: h[3] || (h[3] = (f) => m.$emit("edit-translation", at(u)))
                }, {
                  default: Hs(() => [
                    Bo(at(zL), {
                      class: "me-1",
                      icon: at(uu)
                    }, null, 8, ["icon"]),
                    DL(" " + AL(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : EL("", !0),
                Bo(Uf, PL(BL(m.$attrs)), null, 16)
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
}, HL = window.Vue.computed, jL = (e) => HL(() => {
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
const qL = window.Vue.unref, GL = window.Vue.normalizeClass, XL = window.Vue.openBlock, WL = window.Vue.createElementBlock, KL = ["innerHTML"], YL = window.Vue.onMounted, QL = window.Vue.ref, JL = window.Vue.computed, ZL = {
  __name: "SubSection",
  props: {
    subSection: {
      type: lt,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = QL(null), a = jL(n.subSection);
    YL(() => {
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
    const { selectTranslationUnitById: r } = ts(), l = (d) => {
      if (d.selected) {
        o("bounce-translation");
        return;
      }
      r(d.id);
    }, u = JL(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (d, i) => (XL(), WL("div", {
      ref_key: "subSectionRoot",
      ref: s,
      class: GL(["sx-sentence-selector__subsection", u.value]),
      innerHTML: qL(a)
    }, null, 10, KL));
  }
};
const Qp = window.Vue.unref, Jp = window.Vue.createVNode, Zp = window.Vue.normalizeStyle, eT = window.Vue.openBlock, tT = window.Vue.createElementBlock, em = window.Vue.computed, If = {
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
    const t = e, n = em(() => ({ "--size": t.size })), o = em(
      () => !t.isTemplateAdapted || t.percentage === 0 ? M0 : Fc
    );
    return (s, a) => (eT(), tT("div", {
      class: "block-template-status-indicator",
      style: Zp(n.value)
    }, [
      Jp(Qp(ev), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      Jp(Qp(Je), {
        icon: o.value,
        size: e.size / 2,
        style: Zp({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
};
const Bn = window.Vue.unref, Li = window.Vue.createVNode, nc = window.Vue.withCtx, nT = window.Vue.openBlock, oT = window.Vue.createBlock, sT = window.Vue.computed, tm = window.Codex.CdxButton, nm = window.Codex.CdxIcon, Rf = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "select-next-segment"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = ne(), o = sT(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (nT(), oT(Bn(N), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: nc(() => [
        Li(Bn(tm), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: Bn(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => s.$emit("select-previous-segment"))
        }, {
          default: nc(() => [
            Li(Bn(nm), { icon: Bn(gu) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        Li(Bn(tm), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => s.$emit("select-next-segment"))
        }, {
          default: nc(() => [
            Li(Bn(nm), { icon: Bn(_a) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
}, js = window.Vue.openBlock, Ti = window.Vue.createBlock;
window.Vue.createCommentVNode;
const gn = window.Vue.unref, Fo = window.Vue.withCtx, qs = window.Vue.createVNode, oc = window.Vue.toDisplayString, sc = window.Vue.createElementVNode, aT = window.Vue.renderList, iT = window.Vue.Fragment, rT = window.Vue.createElementBlock, lT = { class: "pa-4" }, cT = ["textContent"], uT = ["textContent"], dT = window.Vuex.useStore, Ai = window.Vue.computed, gT = {
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
    const t = e, { targetLanguageAutonym: n } = Le(dT()), o = Ai(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), s = we(), a = Ai(() => {
      let u;
      return t.targetTemplateExists ? t.isTemplateAdapted ? o.value < 100 ? u = "cx-sx-block-template-mapping-status-title-partially-template" : u = "cx-sx-block-template-mapping-status-title-fully-template" : u = "cx-sx-block-template-mapping-status-title-unadapted-template" : u = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(u);
    }), r = Ai(() => {
      let u;
      return !t.targetTemplateExists || !t.isTemplateAdapted ? u = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? u = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : u = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(u);
    }), l = Ai(() => {
      let u = [];
      if (!t.targetTemplateExists)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            n.value
          ),
          icon: I0,
          color: vt.gray500
        });
      else if (!t.isTemplateAdapted)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            t.sourceParamsCount
          ),
          icon: Xi,
          color: vt.gray500
        });
      else if (o.value < 100)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            t.targetParamsCount,
            t.sourceParamsCount
          ),
          icon: Fc,
          color: vt.blue600
        });
      else {
        let d;
        t.sourceParamsCount ? d = s.i18n(
          "cx-sx-block-template-mapped-params-text",
          t.targetParamsCount,
          t.sourceParamsCount
        ) : d = s.i18n("cx-sx-block-template-no-source-params-text"), u.push({
          text: d,
          icon: Fc,
          color: vt.blue600
        });
      }
      return t.mandatoryMissingParamsCount ? u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          t.mandatoryMissingParamsCount,
          n.value
        ),
        icon: Gi,
        color: vt.gray500
      }) : t.targetTemplateExists && t.isTemplateAdapted && t.optionalMissingParamsCount && u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          t.optionalMissingParamsCount,
          n.value
        ),
        icon: x0,
        color: vt.gray500
      }), u;
    });
    return (u, d) => (js(), Ti(gn(yt), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: u.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: d[0] || (d[0] = (i) => u.$emit("update:active", i))
    }, {
      header: Fo(() => [
        qs(gn(N), {
          justify: "center",
          class: "mt-4"
        }, {
          default: Fo(() => [
            qs(gn(k), { shrink: "" }, {
              default: Fo(() => [
                e.targetTemplateExists ? (js(), Ti(If, {
                  key: 0,
                  percentage: o.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (js(), Ti(gn(Je), {
                  key: 1,
                  icon: gn(C0)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: Fo(() => [
        sc("div", lT, [
          sc("h3", {
            textContent: oc(a.value)
          }, null, 8, cT),
          sc("p", {
            class: "mt-6 text-small",
            textContent: oc(r.value)
          }, null, 8, uT),
          (js(!0), rT(iT, null, aT(l.value, (i, c) => (js(), Ti(gn(N), {
            key: c,
            align: "start",
            class: "mt-4"
          }, {
            default: Fo(() => [
              qs(gn(k), { shrink: "" }, {
                default: Fo(() => [
                  qs(gn(Je), {
                    class: "me-2",
                    icon: i.icon,
                    "icon-color": i.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              qs(gn(k), {
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
const De = window.Vue.unref, He = window.Vue.createVNode, Wt = window.Vue.withCtx, ac = window.Vue.toDisplayString, om = window.Vue.createTextVNode, pT = window.Vue.resolveDirective, sm = window.Vue.withDirectives, am = window.Vue.createElementVNode, mT = window.Vue.normalizeClass, No = window.Vue.openBlock, im = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Di = window.Vue.createBlock, rm = window.Vue.normalizeProps;
window.Vue.guardReactiveProps;
const lm = window.Vue.mergeProps, hT = { class: "block-template-adaptation-card__container pa-4" }, fT = ["textContent"], wT = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, je = window.Vue.computed, vT = window.Vue.ref, _T = window.Vuex.useStore, cm = window.Codex.CdxButton, um = window.Codex.CdxIcon, ST = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = _T(), { targetLanguageAutonym: n, currentMTProvider: o } = Le(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = ne(), r = je(() => {
      var L;
      return (L = s.value) == null ? void 0 : L.isTranslated;
    }), l = je(() => {
      var P;
      return ((P = s.value) == null ? void 0 : P.blockTemplateTranslatedContent) || a.value;
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
    ), i = we(), c = je(
      // Strip HTML comments and return
      () => {
        var L, P;
        return ((P = (L = s.value) == null ? void 0 : L.sourceBlockTemplateName) == null ? void 0 : P.replace(
          /<\!--.*?-->/g,
          ""
        )) || i.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), g = je(
      () => {
        var L, P;
        return (P = (L = s.value) == null ? void 0 : L.blockTemplateAdaptationInfo) == null ? void 0 : P[o.value];
      }
    ), p = je(
      () => {
        var L, P;
        return ((L = g.value) == null ? void 0 : L.adapted) || !!((P = g.value) != null && P.partial);
      }
    ), m = je(() => g.value ? "block-template-adaptation-card__body--" + (p.value ? "success" : "warning") : null), h = je(() => g.value ? p.value ? i.i18n("sx-block-template-adaptation-card-edit-button-label") : i.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), f = je(
      () => {
        var L;
        return Object.keys(((L = s.value) == null ? void 0 : L.sourceTemplateParams) || {}).length;
      }
    ), w = je(() => {
      var P;
      const L = (P = s.value) == null ? void 0 : P.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(L || {});
    }), _ = je(() => w.value.length), y = je(() => {
      const L = x.value;
      return f.value + L === 0 ? 100 : _.value / (f.value + L) * 100 || 0;
    }), S = vT(!1), b = () => {
      S.value = !0;
    }, E = (L) => L.filter((P) => !w.value.includes(P)), x = je(() => {
      var P;
      const L = ((P = g.value) == null ? void 0 : P.mandatoryTargetParams) || [];
      return E(L).length;
    }), I = je(() => {
      var P;
      const L = ((P = g.value) == null ? void 0 : P.optionalTargetParams) || [];
      return E(L).length;
    });
    return (L, P) => {
      const j = pT("i18n");
      return No(), Di(De(Qe), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: Wt(() => [
          am("div", hT, [
            He(De(N), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: Wt(() => [
                He(De(k), { shrink: "" }, {
                  default: Wt(() => [
                    He(De(um), {
                      icon: De(sy),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                He(De(k), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: Wt(() => [
                    om(ac(c.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            u.value ? (No(), im("div", {
              key: 0,
              class: mT(["pa-4 mb-4", m.value])
            }, [
              He(De(N), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: Wt(() => [
                  sm(He(De(k), { tag: "h5" }, null, 512), [
                    [j, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  He(De(k), { shrink: "" }, {
                    default: Wt(() => [
                      He(If, {
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
              am("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: ac(u.value)
              }, null, 8, fT),
              He(De(cm), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: P[0] || (P[0] = (oe) => L.$emit("edit-translation", l.value))
              }, {
                default: Wt(() => [
                  om(ac(h.value), 1)
                ]),
                _: 1
              })
            ], 2)) : d.value ? (No(), im("div", wT, [
              He(De(N), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: Wt(() => [
                  sm(He(De(k), { tag: "h5" }, null, 512), [
                    [j, [
                      De(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  He(De(k), { shrink: "" }, {
                    default: Wt(() => [
                      He(De(cm), {
                        weight: "quiet",
                        "aria-label": L.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: Wt(() => [
                          He(De(um), {
                            icon: De(ey),
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
            ])) : (No(), Di(De(ct), { key: 2 }))
          ]),
          r.value ? (No(), Di(Rf, rm(lm({ key: 1 }, L.$attrs)), null, 16)) : (No(), Di(Uf, rm(lm({ key: 0 }, L.$attrs)), null, 16)),
          He(gT, {
            active: S.value,
            "onUpdate:active": P[1] || (P[1] = (oe) => S.value = oe),
            "source-params-count": f.value,
            "target-params-count": _.value,
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
const yT = window.Vue.unref, xT = window.Vue.createVNode, CT = window.Vue.openBlock, bT = window.Vue.createElementBlock, kT = { class: "translated-segment-card-header" }, $T = window.Vue.computed, VT = {
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
    const n = t, { isSectionTitleSelected: o } = ne(), s = we(), a = $T(() => [
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
    return (l, u) => (CT(), bT("div", kT, [
      xT(yT(pa), {
        items: a.value,
        active: e.selection,
        onSelect: r
      }, null, 8, ["items", "active"])
    ]));
  }
};
const ET = window.Vue.useCssVars, Ie = window.Vue.createVNode, dm = window.Vue.resolveDirective, LT = window.Vue.createElementVNode, ic = window.Vue.withDirectives, ye = window.Vue.unref, TT = window.Vue.normalizeStyle, Pi = window.Vue.openBlock, gm = window.Vue.createElementBlock, AT = window.Vue.createCommentVNode, DT = window.Vue.normalizeClass, ft = window.Vue.withCtx, PT = window.Vue.toDisplayString, BT = window.Vue.createTextVNode, pm = window.Vue.createBlock, FT = window.Vue.normalizeProps, NT = window.Vue.guardReactiveProps, pn = window.Vue.computed, MT = window.Vue.ref, UT = window.Vue.inject, IT = window.Vuex.useStore, RT = window.Codex.CdxButton, rc = window.Codex.CdxIcon, zT = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    ET((_) => ({
      "4929555c": w.value
    }));
    const t = MT("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = ne(), { targetLanguage: a } = Le(IT()), r = pn(() => t.value === "sentence"), l = pn(
      () => n.value.subSections.find(
        (_) => _.sentences.some(
          (y) => {
            var S;
            return y.id === ((S = o.value) == null ? void 0 : S.id);
          }
        )
      )
    ), u = pn(() => {
      var _;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : r.value ? (_ = o.value) == null ? void 0 : _.mtProposedTranslationUsed : l.value.proposedContentForMTValidation;
    }), d = UT("colors"), i = d.gray200, c = d.red600, g = pn(() => s.value ? n.value.translatedTitle : r.value ? o.value.translatedContent : l.value.translatedContent), p = pn(
      () => Zt.calculateScore(
        g.value,
        u.value,
        a.value
      )
    ), m = pn(
      () => Zt.getScoreStatus(p.value)
    ), h = pn(
      () => `translated-segment-card__modification-stats__percentage--${m.value}`
    ), f = pn(() => ({
      failure: p.value === 0 ? null : d.yellow700,
      warning: d.yellow700,
      success: d.green600
    })), w = pn(
      () => f.value[m.value]
    );
    return (_, y) => {
      const S = dm("i18n"), b = dm("i18n-html");
      return Pi(), pm(ye(Qe), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: ft(() => [
          Ie(ye(N), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: ft(() => [
              Ie(VT, {
                selection: t.value,
                "onUpdate:selection": y[0] || (y[0] = (E) => t.value = E)
              }, null, 8, ["selection"]),
              Ie(ye(k), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: ft(() => [
                  Ie(ye(N), { class: "ma-0" }, {
                    default: ft(() => [
                      Ie(ye(k), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: ft(() => [
                          ic(LT("h5", null, null, 512), [
                            [S, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          p.value === 0 ? ic((Pi(), gm("p", {
                            key: 0,
                            style: TT({ color: ye(c) })
                          }, null, 4)), [
                            [S, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : ic((Pi(), gm("p", {
                            key: 1,
                            class: DT(h.value)
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
                        default: ft(() => [
                          Ie(ye(N), { class: "ma-0 ms-2" }, {
                            default: ft(() => [
                              Ie(ye(k), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: ft(() => [
                                  Ie(ye(rc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ye(ry)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              Ie(ye(k), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: ft(() => [
                                  Ie(ye(ch), {
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
                                default: ft(() => [
                                  Ie(ye(rc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ye(ay)
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
                  r.value ? (Pi(), pm(ye(RT), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: y[1] || (y[1] = (E) => _.$emit("edit-translation", g.value))
                  }, {
                    default: ft(() => [
                      Ie(ye(rc), {
                        class: "me-1",
                        icon: ye(uu)
                      }, null, 8, ["icon"]),
                      BT(" " + PT(_.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : AT("", !0)
                ]),
                _: 1
              }),
              Ie(ye(k), { class: "translated-segment-card__actions" }, {
                default: ft(() => [
                  Ie(Rf, FT(NT(_.$attrs)), null, 16)
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
}, OT = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = ne(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = ts(), { currentTranslation: s } = zt();
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
}, zf = window.Vuex.useStore, HT = () => {
  const e = zf(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = D();
  return () => C(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const o = mw.config.get("wgContentTranslationEnableMT");
    let s;
    o ? s = yield Zi.fetchSupportedMTProviders(
      t.value,
      n.value
    ) : s = new re(
      t.value,
      n.value,
      []
      // Empty providers array - only "original" and "empty" will be added by constructor
    ), e.commit("mediawiki/addMtProviderGroup", s);
  });
}, jT = () => {
  const e = zf(), { currentMTProvider: t } = Le(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = D(), s = HT();
  return () => C(void 0, null, function* () {
    yield s();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, o.value);
    if (!t.value || !a.includes(t.value)) {
      const r = re.getStorageKey(
        n.value,
        o.value
      );
      let l = mw.storage.get(r);
      (!l || !a.includes(l)) && (l = a[0]), e.commit("application/setCurrentMTProvider", l);
    }
  });
}, qT = window.Vue.computed, GT = (e) => {
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
}, XT = () => {
  const { selectedContentTranslationUnit: e } = ne(), t = qT(
    () => e.value instanceof lt
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && GT(o);
  };
}, WT = (e, t) => {
  const { content: n, origin: o, baseSectionId: s, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const r = t.filter(
    (l) => !re.isUserMTProvider(l)
  );
  if (o !== "source" && o !== "user" && !r.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, KT = window.Vue.computed, Of = () => {
  const { currentTranslation: e } = zt(), { currentSourcePage: t } = dt();
  return KT(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, YT = window.Vuex.useStore, ku = () => {
  const e = YT(), { sourceSection: t, targetPageTitleForPublishing: n } = ne(), {
    pageURLParameter: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = D(), r = Of(), { target: l, PUBLISHING_TARGETS: u } = Rt();
  return () => {
    const d = n.value, i = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), c = `${r.value}_${t.value.id}`, g = t.value.getParallelCorporaUnits(c);
    g.forEach(
      (m) => WT(m, i)
    );
    const p = t.value.getTranslationProgress(a);
    return St.saveTranslation({
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
}, QT = window.Vue.effectScope, JT = window.Vue.onScopeDispose, ZT = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = QT(!0), n = o.run(() => e(...a))), JT(s), n);
}, eA = window.Vuex.useStore;
let lc;
const tA = () => {
  const e = eA(), t = ku();
  let n = 1e3, o = 0;
  return lc = wu(() => t().then((a) => {
    a instanceof On ? (n *= o + 1, o++, setTimeout(lc, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof Xo)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), lc;
}, Hf = ZT(tA), nA = window.Vuex.useStore, oA = () => {
  const e = nA(), t = Hf(), { currentMTProvider: n } = Le(e), { sourceSection: o, currentProposedTranslation: s } = ne(), { selectNextTranslationUnit: a } = ts();
  return () => C(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, sA = window.Vuex.useStore, aA = () => {
  const e = sA(), t = Hf();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, iA = window.Vuex.useStore, rA = window.Vue.computed, jf = () => {
  const e = iA(), { currentTranslation: t } = zt(), { currentMTProvider: n } = Le(e), { currentTargetPageTitle: o } = dt(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    sectionURLParameter: l
  } = D(), u = xt(), d = rA(() => {
    const f = {
      translation_source_language: s.value,
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
      o.value && (f.translation_target_title = o.value);
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
}, lA = (e, t, n, o) => C(void 0, null, function* () {
  var l, u, d;
  const s = ((l = t.user) == null ? void 0 : l.content) || ((u = t.mt) == null ? void 0 : u.content), a = (d = t == null ? void 0 : t.mt) == null ? void 0 : d.engine, r = yield Mf(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = r, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = r;
}), cA = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, r;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const l = (r = t.mt) == null ? void 0 : r.engine;
      o.addProposedTranslation(l, n.mt.innerHTML), o.mtProviderUsed = l;
    }
  });
}, uA = (e, t, n, o) => C(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return lA(e, t, n, o);
  cA(e, t);
}), dA = (e, t, n, o) => {
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
        const d = uA(
          l,
          u,
          t || e.title,
          n
        );
        s.push(d);
      }
  return Promise.all(s);
}, gA = { restoreCorporaDraft: dA }, pA = () => {
  const { currentSourcePage: e } = dt(), { sourceSection: t } = ne();
  return (n) => C(void 0, null, function* () {
    if (n.restored)
      return;
    const o = yield St.fetchTranslationUnits(
      n.translationId
    );
    yield gA.restoreCorporaDraft(
      e.value,
      n.targetTitle,
      n.targetLanguage,
      o
    ), n.restored = !0;
    let s;
    n.isLeadSectionTranslation ? (t.value.originalTitle = n.sourceTitle, s = n.targetTitle) : s = n.targetSectionTitle, t.value.translatedTitle = s;
  });
};
let cc = null;
function mA() {
  const e = mw.config.get(
    "wgContentTranslationPublishRequirements"
  ), t = mw.config.get("wgUserGroups") || [];
  if (!e || !e.userGroups)
    return !0;
  const n = e.userGroups;
  return n.includes("*") ? !0 : n.some((o) => t.includes(o));
}
function qf() {
  return cc === null && (cc = mA()), cc;
}
const Gf = window.Vue.ref, uc = Gf(!1), dc = Gf(!1);
function mm() {
  return {
    isPermissionWarningDismissed: uc,
    dismissPermissionWarning: () => {
      uc.value = !0;
    },
    resetPermissionWarning: () => {
      uc.value = !1;
    },
    isTitleErrorDismissed: dc,
    dismissTitleError: () => {
      dc.value = !0;
    },
    resetTitleError: () => {
      dc.value = !1;
    }
  };
}
const ce = window.Vue.unref, wt = window.Vue.createVNode, Pt = window.Vue.withCtx, hA = window.Vue.resolveDirective, mn = window.Vue.createElementVNode, fA = window.Vue.withDirectives, Gs = window.Vue.toDisplayString, wA = window.Vue.createTextVNode, Kt = window.Vue.openBlock, Fn = window.Vue.createBlock, hm = window.Vue.createCommentVNode, vA = window.Vue.renderList, _A = window.Vue.Fragment, fm = window.Vue.createElementBlock, SA = window.Vue.normalizeClass, yA = window.Vue.normalizeStyle, xA = { class: "sx-sentence-selector__header-title mb-0" }, CA = {
  href: "https://www.mediawiki.org/wiki/Help:Content_translation/Publishing",
  target: "_blank"
}, bA = { class: "sx-sentence-selector__section-contents px-4" }, Nn = window.Vue.computed, kA = window.Vue.nextTick, $A = window.Vue.onMounted, Xs = window.Vue.ref, wm = window.Vue.watch, VA = window.Vuex.useStore, vm = window.Codex.CdxButton, EA = window.Codex.CdxIcon, _m = window.Codex.CdxMessage, LA = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = Xs(!1), n = Xs(!1), o = Xs("100%"), s = VA(), { currentMTProvider: a, previousRoute: r } = Le(s), {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: u,
      pageURLParameter: d,
      sectionURLParameter: i
    } = D(), { resetPublishTarget: c, target: g } = Rt(), p = nr();
    g.value || p(
      l.value,
      u.value,
      d.value
    ).then(() => c());
    const {
      sourceSection: m,
      selectedContentTranslationUnit: h,
      targetPageTitleForPublishing: f
    } = ne(), w = Xs({
      pageContent: !1,
      pageMetadata: !1,
      draftRestored: !1,
      mtProviders: !1
    }), _ = Nn(
      () => Object.values(w.value).every(Boolean)
    ), y = Nn(
      () => {
        var G;
        return (G = m.value) == null ? void 0 : G.isSelectedTranslationUnitTranslated;
      }
    ), S = Nn(() => {
      var G;
      return (G = m.value) == null ? void 0 : G.subSections;
    }), b = Nn(
      () => {
        var G;
        return (G = m.value) == null ? void 0 : G.selectedTranslationUnitOriginalContent;
      }
    ), E = Nn(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: x,
      logEditorCloseEvent: I,
      logEditorCloseWarnEvent: L,
      logEditorSegmentAddEvent: P,
      logEditorSegmentSkipEvent: j
    } = jf(), oe = () => {
      var as;
      const G = F.currentRoute.value.meta.workflowStep, tn = F.getRoutes().find(
        (is) => is.name === r.value
      ), gt = ((as = tn == null ? void 0 : tn.meta) == null ? void 0 : as.workflowStep) || 0;
      return G > gt;
    }, ae = OT();
    jT()().then(() => {
      oe() && x(), w.value.mtProviders = !0;
    });
    const R = XT(), { fetchTranslationsByStatus: J, translationsFetched: se } = Zo(), le = pA(), { currentTranslation: ke } = zt(), { selectPageSectionByTitle: We, selectPageSectionByIndex: Pe } = rr(), Z = xu(), U = Yo();
    $A(() => C(this, null, function* () {
      if (!se.value.draft) {
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
      w.value.pageMetadata = !0, i.value ? yield We(i.value) : yield Pe(0), w.value.pageContent = !0, ke.value && (yield le(ke.value)), w.value.draftRestored = !0, wm(
        _,
        () => C(this, null, function* () {
          _.value && (yield kA(), ae(), R());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    })), wm(h, R);
    const { selectNextTranslationUnit: B, selectPreviousTranslationUnit: M } = ts(), Y = () => (j(), B()), v = oA(), T = () => {
      P(), v();
    }, A = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, F = Ze(), X = () => {
      const { autoSavePending: G } = s.state.application;
      if (G) {
        ss.value = !0, L();
        return;
      }
      z();
    }, ge = aA(), { clearTranslationURLParameters: q } = D(), z = () => C(this, null, function* () {
      J("draft"), ke.value && (m.value.reset(), ke.value.restored = !1), I(), q(), ge(), yield F.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: ie,
      translateSelectedTranslationUnitForAllProviders: et
    } = bu(), $e = () => {
      os.value || (t.value = !0, et());
    }, { getCurrentTitleByLanguage: ya } = Cn(), go = (G) => {
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
    }, ns = () => F.push({ name: "sx-publisher" }), lr = () => C(this, null, function* () {
      h.value ? yield ie(
        h.value.id,
        a.value
      ) : yield ie(0, a.value);
    }), os = Nn(
      () => h.value instanceof lt
    ), ss = Xs(!1), {
      isPermissionWarningDismissed: cr,
      dismissPermissionWarning: ur,
      resetPermissionWarning: po
    } = mm(), { isTitleErrorDismissed: mo, dismissTitleError: xa, resetTitleError: V } = mm();
    oe() && (po(), V());
    const O = Nn(
      () => !qf() && !cr.value
    ), Ne = Nn(
      () => {
        var G;
        return !mo.value && ((G = m.value) == null ? void 0 : G.isLeadSection) && !mw.Title.newFromText(f.value);
      }
    );
    return (G, ze) => {
      const tn = hA("i18n");
      return Kt(), fm("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: yA(E.value)
      }, [
        wt(ce(N), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: Pt(() => [
            wt(ce(k), { shrink: "" }, {
              default: Pt(() => [
                wt(ce(vm), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": G.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: X
                }, {
                  default: Pt(() => [
                    wt(ce(EA), { icon: ce(Fh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            wt(ce(k), {
              grow: "",
              class: "px-1"
            }, {
              default: Pt(() => [
                fA(mn("h4", xA, null, 512), [
                  [tn, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            wt(ce(k), {
              shrink: "",
              class: "px-3"
            }, {
              default: Pt(() => [
                wt(ce(vm), {
                  disabled: !(ce(m) && ce(m).isTranslated),
                  onClick: ns
                }, {
                  default: Pt(() => [
                    wA(Gs(G.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        _.value ? (Kt(), Fn(ce(N), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: Pt(() => [
            wt(ce(k), {
              dir: ce(H.getDir)(ce(l)),
              lang: ce(l),
              class: "sx-sentence-selector__section"
            }, {
              default: Pt(() => [
                O.value ? (Kt(), Fn(ce(_m), {
                  key: 0,
                  type: "warning",
                  "allow-user-dismiss": !0,
                  class: "mx-4 mt-4",
                  onUserDismissed: ce(ur)
                }, {
                  default: Pt(() => [
                    mn("p", null, Gs(G.$i18n("cx-publish-permission-warning")), 1),
                    mn("p", null, [
                      mn("strong", null, [
                        mn("a", CA, Gs(G.$i18n("cx-publish-permission-warning-link-label")), 1)
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : hm("", !0),
                Ne.value ? (Kt(), Fn(ce(_m), {
                  key: 1,
                  type: "error",
                  "allow-user-dismiss": !0,
                  class: "mx-4 mt-4",
                  onUserDismissed: ce(xa)
                }, {
                  default: Pt(() => [
                    mn("p", null, [
                      mn("strong", null, Gs(G.$i18n("cx-tools-linter-invalid-character")), 1)
                    ]),
                    mn("p", null, Gs(G.$i18n("cx-tools-linter-invalid-character-message")), 1)
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : hm("", !0),
                wt(cL),
                mn("div", bA, [
                  (Kt(!0), fm(_A, null, vA(S.value, (gt) => (Kt(), Fn(ZL, {
                    id: gt.id,
                    key: `sub-section-${gt.id}`,
                    "sub-section": gt,
                    onBounceTranslation: A
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !os.value && y.value ? (Kt(), Fn(zT, {
              key: 0,
              onEditTranslation: go,
              onSelectNextSegment: ce(B),
              onSelectPreviousSegment: ce(M)
            }, null, 8, ["onSelectNextSegment", "onSelectPreviousSegment"])) : os.value ? (Kt(), Fn(ST, {
              key: 2,
              onEditTranslation: go,
              onApplyTranslation: T,
              onSkipTranslation: Y,
              onSelectPreviousSegment: ce(M),
              onSelectNextSegment: ce(B)
            }, null, 8, ["onSelectPreviousSegment", "onSelectNextSegment"])) : (Kt(), Fn(OL, {
              key: 1,
              class: SA({ "mb-0": !n.value }),
              onConfigureOptions: $e,
              onEditTranslation: go,
              onApplyTranslation: T,
              onSkipTranslation: Y,
              onSelectPreviousSegment: ce(M),
              onRetryTranslation: lr
            }, null, 8, ["class", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Kt(), Fn(ce(N), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: Pt(() => [
            wt(ce(ct), { class: "mt-0" })
          ]),
          _: 1
        })),
        wt(Z5, {
          active: t.value,
          "onUpdate:active": ze[0] || (ze[0] = (gt) => t.value = gt)
        }, null, 8, ["active"]),
        wt(E5, {
          modelValue: ss.value,
          "onUpdate:modelValue": ze[1] || (ze[1] = (gt) => ss.value = gt),
          onDiscardTranslation: z
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const TA = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: LA
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, AA = window.Vue.resolveComponent, DA = window.Vue.createVNode, PA = window.Vue.normalizeClass, BA = window.Vue.openBlock, FA = window.Vue.createElementBlock;
function NA(e, t, n, o, s, a) {
  const r = AA("sx-sentence-selector");
  return BA(), FA("main", {
    class: PA(["sx-sentence-selector-view", a.classes])
  }, [
    DA(r)
  ], 2);
}
const MA = /* @__PURE__ */ de(TA, [["render", NA]]), UA = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, IA = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const RA = window.Vue.resolveDirective, Bi = window.Vue.withDirectives, Bt = window.Vue.openBlock, hn = window.Vue.createElementBlock, Fi = window.Vue.createCommentVNode, Ni = window.Vue.Transition, to = window.Vue.withCtx, Mo = window.Vue.createVNode, Ws = window.Vue.createElementVNode, Mn = window.Vue.unref, zA = window.Vue.renderList, OA = window.Vue.Fragment, HA = window.Vue.normalizeClass, Sm = window.Vue.createBlock, jA = window.Vue.toDisplayString, qA = window.Vue.createTextVNode, GA = { class: "sx-quick-tutorial" }, XA = { class: "sx-quick-tutorial__main-point my-4 py-5 px-6" }, WA = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, KA = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, YA = { class: "sx-quick-tutorial__illustration" }, QA = ["innerHTML"], JA = ["innerHTML"], ZA = { class: "sx-quick-tutorial__step-indicator py-3" }, eD = ["onClick"], tD = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, nD = {
  key: "secondary-point-1",
  class: "ma-0"
}, oD = {
  key: "secondary-point-2",
  class: "ma-0"
}, sD = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, ym = window.Vue.ref, xm = window.Codex.CdxButton, aD = window.Codex.CdxIcon, iD = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = ym(2), n = ym(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (r) => r === n.value, a = es();
    return (r, l) => {
      const u = RA("i18n");
      return Bt(), hn("section", GA, [
        Mo(Mn(N), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: to(() => [
            Ws("section", XA, [
              Mo(Ni, {
                name: "fade",
                mode: "out-in"
              }, {
                default: to(() => [
                  s(1) ? Bi((Bt(), hn("h2", WA, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? Bi((Bt(), hn("h2", KA, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : Fi("", !0)
                ]),
                _: 1
              })
            ]),
            Ws("section", YA, [
              Mo(Ni, { name: "mw-ui-animation-slide-start" }, {
                default: to(() => [
                  s(1) ? (Bt(), hn("div", {
                    key: "illustration-1",
                    innerHTML: Mn(IA)
                  }, null, 8, QA)) : s(2) ? (Bt(), hn("div", {
                    key: "illustration-2",
                    innerHTML: Mn(UA)
                  }, null, 8, JA)) : Fi("", !0)
                ]),
                _: 1
              })
            ]),
            Ws("div", ZA, [
              (Bt(!0), hn(OA, null, zA(t.value, (d) => (Bt(), hn("span", {
                key: `dot-${d}`,
                class: HA(["dot mx-1", { "dot-active": s(d) }]),
                role: "button",
                onClick: (i) => n.value = d
              }, null, 10, eD))), 128))
            ]),
            Ws("section", tD, [
              Mo(Ni, {
                name: "fade",
                mode: "out-in"
              }, {
                default: to(() => [
                  s(1) ? Bi((Bt(), hn("h3", nD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? Bi((Bt(), hn("h3", oD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : Fi("", !0)
                ]),
                _: 1
              })
            ]),
            Ws("div", sD, [
              Mo(Ni, {
                name: "fade",
                mode: "out-in"
              }, {
                default: to(() => [
                  s(1) ? (Bt(), Sm(Mn(xm), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": r.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: to(() => [
                      Mo(Mn(aD), { icon: Mn(_a) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (Bt(), Sm(Mn(xm), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: Mn(a)
                  }, {
                    default: to(() => [
                      qA(jA(r.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : Fi("", !0)
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
const rD = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: iD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, lD = window.Vue.resolveComponent, cD = window.Vue.createVNode, uD = window.Vue.normalizeClass, dD = window.Vue.openBlock, gD = window.Vue.createElementBlock;
function pD(e, t, n, o, s, a) {
  const r = lD("sx-quick-tutorial");
  return dD(), gD("main", {
    class: uD(["sx-quick-tutorial-view", a.classes])
  }, [
    cD(r)
  ], 2);
}
const mD = /* @__PURE__ */ de(rD, [["render", pD]]);
const hD = window.Vue.resolveDirective, Cm = window.Vue.createElementVNode, fD = window.Vue.withDirectives, wD = window.Vue.unref, vD = window.Vue.withCtx, _D = window.Vue.createVNode, SD = window.Vue.openBlock, yD = window.Vue.createElementBlock, xD = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, CD = { class: "sx-editor__original-content-panel__header mb-2" }, bD = ["lang", "dir", "innerHTML"], bm = window.Vue.ref, kD = window.Vue.onMounted, $D = {
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
    }, o = bm(null), s = bm(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(o.value, null).getPropertyValue("line-height")
    );
    return kD(() => {
      s.value = 2 * a(), n(o.value, t.language);
    }), (r, l) => {
      const u = hD("i18n");
      return SD(), yD("section", xD, [
        fD(Cm("h5", CD, null, 512), [
          [u, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        _D(wD(G1), {
          "min-height": s.value,
          scroll: ""
        }, {
          default: vD(() => [
            Cm("div", {
              ref_key: "originalContentRef",
              ref: o,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, bD)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, VD = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const ED = window.Vue.unref, Ks = window.Vue.createElementVNode, km = window.Vue.resolveDirective, gc = window.Vue.withDirectives, LD = window.Vue.normalizeClass, TD = window.Vue.openBlock, AD = window.Vue.createElementBlock, DD = window.Vue.createCommentVNode, PD = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, BD = { class: "sx-editor__feedback-overlay-content px-4" }, FD = ["innerHTML"], ND = { class: "sx-editor__feedback-overlay-content__title" }, MD = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, pc = window.Vue.computed, UD = {
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
    const t = e, { targetLanguageURLParameter: n } = D(), o = pc(
      () => Zt.calculateScore(
        t.editedTranslation,
        t.proposedTranslation,
        n.value
      )
    ), s = pc(() => {
      const r = Zt.getScoreStatus(o.value);
      return r === "failure" ? o.value === 0 ? "failure" : "warning" : r;
    }), a = pc(
      () => `sx-editor__feedback-overlay-content__stats--${s.value}`
    );
    return (r, l) => {
      const u = km("i18n"), d = km("i18n-html");
      return e.showFeedback ? (TD(), AD("div", PD, [
        Ks("div", BD, [
          Ks("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: ED(VD)
          }, null, 8, FD),
          gc(Ks("h2", ND, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          gc(Ks("p", MD, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          gc(Ks("p", {
            class: LD(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [d, [o.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : DD("", !0);
    };
  }
}, ID = window.Vuex.useStore, RD = () => {
  const e = ID(), t = ku(), { selectNextTranslationUnit: n } = ts(), {
    isSectionTitleSelected: o,
    sourceSection: s,
    selectedContentTranslationUnit: a
  } = ne(), { getCurrentTitleByLanguage: r } = Cn(), {
    sourceLanguageURLParameter: l,
    targetLanguageURLParameter: u
  } = D(), { currentMTProvider: d } = Le(e);
  return (i) => C(void 0, null, function* () {
    if (!o.value) {
      const c = document.createElement("div");
      c.innerHTML = i, c.querySelectorAll(".sx-edit-dummy-node").forEach((g) => g.remove()), i = c.innerHTML;
    }
    a.value instanceof lt && (i = (yield Mf(
      i,
      r(u.value, l.value),
      u.value
    )) || i), s.value.setTranslationForSelectedTranslationUnit(
      i,
      d.value
    ), t(), n();
  });
};
const Ke = window.Vue.unref, mc = window.Vue.openBlock, hc = window.Vue.createBlock, $m = window.Vue.createCommentVNode, Vm = window.Vue.createVNode, zD = window.Vue.createElementVNode, OD = window.Vue.withCtx, HD = { class: "sx-editor__editing-surface-container grow" }, fc = window.Vue.ref, jD = window.Vue.computed, qD = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = fc(!1), o = Ze(), s = () => n.value = !0, a = () => o.replace({ name: t.fromRoute }), { isFinalEdit: r, isInitialEdit: l, content: u, originalContent: d, title: i } = history.state, c = fc(null), g = fc(!1), { logEditorSegmentAddEvent: p, logEditorSegmentEditEvent: m } = jf(), {
      sourceLanguageURLParameter: h,
      targetLanguageURLParameter: f
    } = D(), { isSectionTitleSelected: w, sourceSection: _ } = ne(), y = jD(
      () => Zt.calculateScore(
        c.value,
        u,
        f.value
      )
    ), S = RD(), b = (E) => C(this, null, function* () {
      c.value = E, g.value = !0;
      const x = new Promise((L) => setTimeout(L, 2e3));
      let I = Promise.resolve();
      r ? _.value.editedTranslation = E : I = S(E), y.value === 0 && l ? p() : y.value > 0 && m(), yield Promise.all([x, I]), g.value = !1, a();
    });
    return (E, x) => (mc(), hc(Ke(N), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: OD(() => [
        Ke(d) ? (mc(), hc($D, {
          key: 0,
          language: Ke(h),
          dir: Ke(H.getDir)(Ke(h)),
          "original-content": Ke(d)
        }, null, 8, ["language", "dir", "original-content"])) : $m("", !0),
        n.value ? $m("", !0) : (mc(), hc(Ke(ct), { key: 1 })),
        zD("div", HD, [
          Vm(UD, {
            "edited-translation": c.value,
            "show-feedback": g.value,
            "proposed-translation": Ke(u)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          Vm(bV, {
            content: Ke(u),
            language: Ke(f),
            dir: Ke(H.getDir)(Ke(f)),
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
const GD = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: qD
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
}, XD = window.Vue.resolveComponent, WD = window.Vue.createVNode, KD = window.Vue.normalizeClass, YD = window.Vue.openBlock, QD = window.Vue.createElementBlock;
function JD(e, t, n, o, s, a) {
  const r = XD("sx-editor");
  return YD(), QD("main", {
    class: KD(["sx-editor-view", a.classes])
  }, [
    WD(r, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const ZD = /* @__PURE__ */ de(GD, [["render", JD]]);
const Yt = window.Vue.unref, no = window.Vue.createVNode, Ys = window.Vue.withCtx, e6 = window.Vue.resolveDirective, t6 = window.Vue.withDirectives, n6 = window.Vue.openBlock, o6 = window.Vue.createBlock, Em = window.Codex.CdxButton, Lm = window.Codex.CdxIcon, s6 = {
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
    return (o, s) => {
      const a = e6("i18n");
      return n6(), o6(Yt(N), { class: "ma-0 sx-publisher__header" }, {
        default: Ys(() => [
          no(Yt(k), {
            shrink: "",
            class: "me-2"
          }, {
            default: Ys(() => [
              no(Yt(Em), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: Ys(() => [
                  no(Yt(Lm), { icon: Yt(Jo) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          t6(no(Yt(k), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          no(Yt(k), { shrink: "" }, {
            default: Ys(() => [
              no(Yt(Em), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (r) => o.$emit("publish-translation"))
              }, {
                default: Ys(() => [
                  no(Yt(Lm), { icon: Yt(XS) }, null, 8, ["icon"])
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
}, a6 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, i6 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, Tm = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const wc = window.Vue.createElementVNode, Am = window.Vue.toDisplayString, vc = window.Vue.unref, _c = window.Vue.withCtx, Dm = window.Vue.createVNode, r6 = window.Vue.openBlock, l6 = window.Vue.createBlock, c6 = window.Vue.createCommentVNode, u6 = ["innerHTML"], d6 = ["textContent"], g6 = ["textContent"], Sc = window.Vue.computed, p6 = {
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
    const t = we(), n = e, o = {
      pending: {
        svg: a6,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: i6,
        title: t.i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: Tm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: Tm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, s = Sc(() => o[n.status].svg), a = Sc(() => o[n.status].title), r = Sc(() => o[n.status].subtitle);
    return (l, u) => e.active ? (r6(), l6(vc(yt), {
      key: 0,
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: _c(() => [
        Dm(vc(N), { class: "ma-4" }, {
          default: _c(() => [
            Dm(vc(k), null, {
              default: _c(() => [
                wc("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: s.value
                }, null, 8, u6),
                wc("h2", {
                  textContent: Am(a.value)
                }, null, 8, d6),
                wc("p", {
                  class: "ma-0",
                  textContent: Am(r.value)
                }, null, 8, g6)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : c6("", !0);
  }
};
const it = window.Vue.unref, Ft = window.Vue.createVNode, fn = window.Vue.withCtx, m6 = window.Vue.resolveDirective, h6 = window.Vue.withDirectives, Pm = window.Vue.toDisplayString, f6 = window.Vue.createTextVNode, yc = window.Vue.openBlock, Bm = window.Vue.createElementBlock, w6 = window.Vue.createCommentVNode, Xf = window.Vue.createElementVNode, v6 = window.Vue.createBlock, _6 = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, S6 = ["src"], y6 = ["textContent"], x6 = /* @__PURE__ */ Xf("p", { class: "mt-0" }, null, -1), C6 = window.Vue.computed, b6 = window.Vue.inject, k6 = window.Vue.ref, Fm = window.Codex.CdxButton, $6 = window.Codex.CdxIcon, V6 = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: Gh,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = k6(""), s = () => n("close"), a = () => n("publish", o.value), r = b6("breakpoints"), l = C6(() => r.value.mobile);
    return (u, d) => {
      const i = m6("i18n");
      return e.active && e.captchaDetails ? (yc(), v6(it(yt), {
        key: 0,
        fullscreen: l.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: fn(() => [
          Ft(it(N), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: fn(() => [
              Ft(it(k), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: fn(() => [
                  Ft(it(Fm), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": u.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: s
                  }, {
                    default: fn(() => [
                      Ft(it($6), { icon: it(Jo) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              h6(Ft(it(k), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [i, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              Ft(it(k), {
                shrink: "",
                class: "justify-center"
              }, {
                default: fn(() => [
                  Ft(it(Fm), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: fn(() => [
                      f6(Pm(u.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Ft(it(qi))
        ]),
        default: fn(() => [
          Xf("div", _6, [
            e.captchaDetails.type === "image" ? (yc(), Bm("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, S6)) : (yc(), Bm("p", {
              key: 1,
              textContent: Pm(e.captchaDetails.question)
            }, null, 8, y6)),
            x6,
            Ft(it(N), { class: "ma-0" }, {
              default: fn(() => [
                Ft(it(k), null, {
                  default: fn(() => [
                    Ft(it(Nc), {
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
      }, 8, ["fullscreen"])) : w6("", !0);
    };
  }
};
const Un = window.Vue.unref, Mi = window.Vue.createVNode, Uo = window.Vue.withCtx, Io = window.Vue.createElementVNode, E6 = window.Vue.resolveDirective, L6 = window.Vue.withDirectives, T6 = window.Vue.renderList, A6 = window.Vue.Fragment, xc = window.Vue.openBlock, D6 = window.Vue.createElementBlock, Nm = window.Vue.toDisplayString, Mm = window.Vue.createTextVNode, P6 = window.Vue.isRef, B6 = window.Vue.normalizeClass, Um = window.Vue.createBlock, F6 = { class: "mw-ui-dialog__header" }, N6 = { class: "row ma-0 px-4 py-3" }, M6 = { class: "col shrink justify-center" }, U6 = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, I6 = { class: "mb-0" }, R6 = { class: "pa-4" }, z6 = window.Codex.CdxField, O6 = window.Codex.CdxRadio, H6 = window.Vuex.useStore, Ui = window.Vue.computed, j6 = window.Codex.CdxButton, q6 = window.Codex.CdxIcon, G6 = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = H6(), { target: s, PUBLISHING_TARGETS: a } = Rt(), r = Ui(() => o.state.translator.isAnon), l = we(), { sourceSection: u } = ne(), { isCurrentSectionPresent: d } = Fe(), i = Ui(
      () => u.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-label") : l.i18n("cx-sx-publisher-new-section-option-label")
    ), c = Ui(
      () => u.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-details") : l.i18n("cx-sx-publisher-new-section-option-details")
    ), g = Ui(() => {
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
      const f = E6("i18n");
      return xc(), Um(Un(yt), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: m.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: h[1] || (h[1] = (w) => m.$emit("update:active", w)),
        onClose: p
      }, {
        header: Uo(() => [
          Io("div", F6, [
            Io("div", N6, [
              Io("div", M6, [
                Mi(Un(j6), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": m.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: p
                }, {
                  default: Uo(() => [
                    Mi(Un(q6), { icon: Un(Fh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              Io("div", U6, [
                L6(Io("h4", I6, null, 512), [
                  [f, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            Mi(Un(qi))
          ])
        ]),
        default: Uo(() => [
          Io("div", R6, [
            Mi(Un(z6), { "is-fieldset": "" }, {
              default: Uo(() => [
                (xc(!0), D6(A6, null, T6(g.value, (w, _) => (xc(), Um(Un(O6), {
                  key: "publish-options-radio-" + w.value,
                  modelValue: Un(s),
                  "onUpdate:modelValue": [
                    h[0] || (h[0] = (y) => P6(s) ? s.value = y : null),
                    p
                  ],
                  class: B6(_ < g.value.length - 1 ? "mb-4" : "mb-0"),
                  "input-value": w.value,
                  disabled: w.disabled,
                  name: "publish-options"
                }, {
                  description: Uo(() => [
                    Mm(Nm(w.description), 1)
                  ]),
                  default: Uo(() => [
                    Mm(Nm(w.label) + " ", 1)
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
const Nt = window.Vue.unref, Im = window.Vue.toDisplayString, Rm = window.Vue.createElementVNode, X6 = window.Vue.resolveDirective, Ro = window.Vue.createVNode, W6 = window.Vue.withDirectives, Qs = window.Vue.withCtx, Cc = window.Vue.openBlock, zm = window.Vue.createBlock, Om = window.Vue.createCommentVNode, K6 = window.Vue.Fragment, Y6 = window.Vue.createElementBlock, Q6 = window.Vue.normalizeClass, J6 = ["textContent"], Z6 = ["textContent"], zo = window.Vue.computed, Hm = window.Vue.ref, e9 = window.Vue.watch, jm = window.Codex.CdxButton, qm = window.Codex.CdxIcon, t9 = window.Codex.CdxMessage, n9 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Hm(0), o = Hm(null);
    e9(o, () => {
      var m;
      const p = (m = o.value) == null ? void 0 : m.$el;
      if (p instanceof HTMLElement) {
        const h = p.querySelector("a");
        h && h.setAttribute("target", "_blank");
      }
    });
    const s = zo(
      () => {
        var p;
        return (p = t.publishFeedbackMessages) == null ? void 0 : p[n.value];
      }
    ), a = zo(() => {
      var p;
      return ((p = s.value) == null ? void 0 : p.status) || "notice";
    }), r = zo(() => a.value === "notice"), l = zo(
      () => `sx-publisher__review-info--${a.value}`
    ), u = we(), d = zo(() => {
      var p;
      return (p = s.value) == null ? void 0 : p.text;
    }), i = zo(() => {
      var p;
      return r.value ? u.i18n("cx-sx-publisher-review-info") : ((p = s.value) == null ? void 0 : p.title) || u.i18n("cx-sx-publisher-review-info-error");
    }), c = () => {
      const p = t.publishFeedbackMessages.length;
      n.value = (n.value - 1 + p) % p;
    }, g = () => {
      n.value = (n.value + 1) % t.publishFeedbackMessages.length;
    };
    return (p, m) => {
      const h = X6("i18n-html");
      return Cc(), zm(Nt(t9), {
        type: a.value,
        class: Q6(["sx-publisher__review-info", l.value]),
        icon: r.value ? Nt(YS) : null
      }, {
        default: Qs(() => [
          Rm("h5", {
            textContent: Im(i.value)
          }, null, 8, J6),
          r.value ? Om("", !0) : (Cc(), Y6(K6, { key: 0 }, [
            Rm("p", {
              textContent: Im(d.value)
            }, null, 8, Z6),
            Ro(Nt(N), {
              justify: "between",
              class: "ma-0"
            }, {
              default: Qs(() => [
                W6(Ro(Nt(k), {
                  ref_key: "learnMoreContainer",
                  ref: o,
                  class: "sx-publisher__review-info__learn-more-anchor"
                }, null, 512), [
                  [h, void 0, "cx-sx-publisher-review-info-learn-more"]
                ]),
                e.publishFeedbackMessages.length > 1 ? (Cc(), zm(Nt(k), {
                  key: 0,
                  class: "sx-publisher__review-info__navigation-buttons justify-end",
                  align: "center"
                }, {
                  default: Qs(() => [
                    Ro(Nt(jm), {
                      weight: "quiet",
                      class: "pa-0 me-1",
                      "aria-label": p.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                      onClick: c
                    }, {
                      default: Qs(() => [
                        Ro(Nt(qm), { icon: Nt(gu) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"]),
                    Ro(Nt(jm), {
                      weight: "quiet",
                      class: "pa-0 ms-1",
                      "aria-label": p.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                      onClick: g
                    }, {
                      default: Qs(() => [
                        Ro(Nt(qm), { icon: Nt(_a) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                })) : Om("", !0)
              ]),
              _: 1
            })
          ], 64))
        ]),
        _: 1
      }, 8, ["type", "class", "icon"]);
    };
  }
}, o9 = (e) => {
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
}, s9 = window.Vuex.useStore, a9 = window.Vue.computed, i9 = () => {
  const e = s9(), { currentTranslation: t } = zt(), { currentMTProvider: n } = Le(e), { currentTargetPageTitle: o } = dt(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    sectionURLParameter: l
  } = D(), { sourceSection: u } = ne(), d = xt(), i = a9(() => {
    const m = {
      translation_source_language: s.value,
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
      translation_target_exists: !!o.value
    };
    if (l.value ? (m.translation_source_section = l.value, m.translation_type = "section") : m.translation_type = "article", t.value) {
      m.translation_id = t.value.translationId, m.translation_target_title = t.value.targetTitle;
      const h = t.value.targetSectionTitle;
      h && (m.translation_target_section = h);
    } else
      o.value && (m.translation_target_title = o.value);
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
}, r9 = window.Vue.computed, Gm = window.Vue.ref, l9 = window.Vuex.useStore, c9 = () => {
  const e = l9(), {
    pageURLParameter: t,
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = D(), { sourceSection: s, targetPageTitleForPublishing: a } = ne(), r = Of(), { sectionSuggestion: l } = Fe(), u = r9(
    () => {
      var S, b;
      return (b = l.value) == null ? void 0 : b.presentSections[(S = s.value) == null ? void 0 : S.sourceSectionTitleForPublishing];
    }
  ), { target: d, PUBLISHING_TARGETS: i } = Rt(), c = Gm(!1), g = Gm("pending"), p = () => c.value = !1, m = ku(), {
    logPublishAttemptEvent: h,
    logPublishSuccessEvent: f,
    logPublishFailureEvent: w
  } = i9(), _ = (S, b) => C(void 0, null, function* () {
    h();
    const E = yield m();
    if (E instanceof On)
      return w(), { publishFeedbackMessage: E, targetUrl: null };
    const x = E, I = a.value, L = {
      html: o9(s.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: I,
      sourceSectionTitle: s.value.sourceSectionTitleForPublishing,
      targetSectionTitle: s.value.targetSectionTitleForPublishing,
      sourceLanguage: n.value,
      targetLanguage: o.value,
      revision: r.value,
      isSandbox: d.value === i.SANDBOX,
      sectionTranslationId: x
    };
    u.value && d.value === i.EXPAND && (L.existingSectionTitle = u.value), S && (L.captchaId = S, L.captchaWord = b);
    const P = yield St.publishTranslation(
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
        E = yield _(
          b == null ? void 0 : b.id,
          S
        );
      } catch (x) {
        if (x instanceof Xo)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw x;
      }
      return E;
    }),
    isPublishDialogActive: c,
    publishStatus: g
  };
}, u9 = window.Vue.computed, d9 = () => {
  const e = Ze(), { sourceSection: t } = ne(), { getCurrentTitleByLanguage: n } = Cn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = D(), a = u9(
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
}, g9 = () => {
  const { targetLanguageURLParameter: e } = D(), { sourceSection: t } = ne();
  return () => {
    const n = Zt.getMTScoreForPageSection(
      t.value,
      e.value
    ), o = Zt.getScoreStatus(n);
    if (o === "success")
      return null;
    const s = 100 - n, a = o === "failure" ? "error" : "warning";
    let r, l;
    return a === "warning" ? (r = mw.message("cx-sx-publisher-mt-abuse-message-title", s).plain(), l = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (r = mw.message("cx-sx-publisher-mt-abuse-error-title", s).plain(), l = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new On({
      title: r,
      text: l,
      status: a,
      type: "mt"
    });
  };
}, p9 = window.Vue.ref, m9 = window.Vue.computed, h9 = () => {
  const e = g9(), { target: t, PUBLISHING_TARGETS: n } = Rt(), { targetPageTitleForPublishing: o } = ne(), s = p9([]), a = m9(
    () => s.value.some((d) => d.isError)
  ), r = (d) => {
    s.value.push(d), s.value.sort((i, c) => +c.isError - +i.isError);
  };
  return {
    addPublishFeedbackMessage: r,
    clearPublishFeedbackMessages: () => {
      s.value = [];
    },
    publishFeedbackMessages: s,
    isPublishingDisabled: a,
    initializePublishFeedbackMessages: () => {
      if (!qf() && t.value !== n.SANDBOX) {
        const i = new On({
          text: mw.message("cx-publish-permission-error").text(),
          title: mw.message("cx-publish-permission-error-title").text(),
          type: "generic",
          status: "error"
        });
        r(i);
      }
      const d = e();
      d && r(d), mw.Title.newFromText(o.value) || r(
        new On({
          text: mw.message("cx-tools-linter-invalid-character-message").text(),
          title: mw.message("cx-tools-linter-invalid-character").text(),
          type: "generic",
          status: "error"
        })
      );
    }
  };
}, f9 = () => {
  const { target: e, PUBLISHING_TARGETS: t } = Rt(), { currentSourcePage: n } = dt(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = D(), { sourceSection: a, targetPageTitleForPublishing: r } = ne();
  return (l) => C(void 0, null, function* () {
    const u = r.value, d = n.value.title, i = new mw.Title(d), c = mw.config.get("wgNamespaceIds");
    if (a.value.isLeadSection && e.value !== t.SANDBOX && i.getNamespaceId() !== c.user)
      try {
        yield Zi.addWikibaseLink(
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
}, Xm = window.Vue.ref, w9 = () => {
  const e = Xm(!1), t = Xm(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const ue = window.Vue.unref, qe = window.Vue.createVNode, v9 = window.Vue.resolveDirective, Wm = window.Vue.withDirectives, bc = window.Vue.openBlock, kc = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const oo = window.Vue.createElementVNode, Km = window.Vue.toDisplayString, _9 = window.Vue.createTextVNode, Oo = window.Vue.withCtx, Ym = window.Vue.normalizeClass, S9 = { class: "sx-publisher" }, y9 = {
  key: 0,
  class: "mb-2"
}, x9 = {
  key: 1,
  class: "sx-publisher__publish-panel__existing-target-section px-4 pb-4"
}, C9 = ["href"], b9 = ["innerHTML"], k9 = { class: "sx-publisher__section-preview pa-5" }, $9 = ["innerHTML"], Ii = window.Vue.computed, V9 = window.Vue.onMounted, E9 = window.Vue.ref, L9 = window.Vue.watch, Qm = window.Codex.CdxButton, $c = window.Codex.CdxIcon, T9 = {
  __name: "SXPublisher",
  setup(e) {
    const { sourceSection: t } = ne(), { sectionSuggestion: n, isCurrentSectionPresent: o } = Fe(), {
      targetLanguageURLParameter: s,
      sectionURLParameter: a
    } = D(), r = Ii(() => {
      var R;
      return (R = t.value) == null ? void 0 : R.title;
    }), l = we(), { target: u, PUBLISHING_TARGETS: d } = Rt(), i = Ii(() => u.value === d.SANDBOX ? l.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : u.value === d.EXPAND ? l.i18n(
      "cx-sx-publisher-publish-panel-expand-section-result"
    ) : t.value.isLeadSection ? l.i18n("cx-sx-publisher-publish-panel-lead-section-result") : l.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: c,
      captchaDialogOn: g,
      handleCaptchaError: p,
      onCaptchaDialogClose: m
    } = w9(), {
      publishFeedbackMessages: h,
      isPublishingDisabled: f,
      addPublishFeedbackMessage: w,
      clearPublishFeedbackMessages: _,
      initializePublishFeedbackMessages: y
    } = h9(), S = f9(), { doPublish: b, isPublishDialogActive: E, publishStatus: x, closePublishDialog: I } = c9(), L = (R = null) => C(this, null, function* () {
      if (f.value)
        return;
      const J = yield b(R, c.value);
      if (!J)
        return;
      const { publishFeedbackMessage: se, targetUrl: le } = J;
      if (p(se)) {
        I();
        return;
      } else
        se && w(se);
      x.value = f.value ? "failure" : "success", setTimeout(() => {
        if (f.value) {
          I();
          return;
        }
        S(le);
      }, 1e3);
    });
    V9(() => y());
    const P = d9(), j = E9(!1), oe = () => j.value = !0;
    L9(j, (R) => {
      R || (_(), y());
    });
    const ae = Ii(
      () => {
        var R, J;
        return (J = (R = n.value) == null ? void 0 : R.presentSections) == null ? void 0 : J[a.value];
      }
    ), te = Ii(() => {
      var se;
      const R = K.getPageUrl(
        s.value,
        (se = n.value) == null ? void 0 : se.targetTitle
      ), J = (ae.value || "").replace(
        / /g,
        "_"
      );
      return `${R}#${J}`;
    });
    return (R, J) => {
      const se = v9("i18n");
      return bc(), kc("section", S9, [
        qe(s6, {
          "is-publishing-disabled": ue(f),
          onPublishTranslation: L
        }, null, 8, ["is-publishing-disabled"]),
        oo("div", {
          class: Ym(["sx-publisher__publish-panel", ue(o) ? "py-4" : "pa-4"])
        }, [
          ue(o) ? (bc(), kc("div", x9, [
            Wm(oo("h5", null, null, 512), [
              [se, void 0, "cx-sx-publisher-publish-panel-existing-section-notice"]
            ]),
            oo("a", {
              class: "sx-publisher__publish-panel__existing-target-section-link py-2 px-3 mt-4",
              href: te.value,
              target: "_blank"
            }, [
              _9(Km(ae.value) + " ", 1),
              qe(ue($c), { icon: ue(er) }, null, 8, ["icon"])
            ], 8, C9)
          ])) : Wm((bc(), kc("h5", y9, null, 512)), [
            [se, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          oo("div", {
            class: Ym({ "px-4 mt-4": ue(o) })
          }, [
            oo("h6", {
              class: "sx-publisher__publish-panel__expected-publishing-result mb-2",
              innerHTML: i.value
            }, null, 8, b9),
            qe(ue(N), {
              justify: "end",
              class: "ma-0"
            }, {
              default: Oo(() => [
                qe(ue(k), { shrink: "" }, {
                  default: Oo(() => [
                    qe(ue(Qm), {
                      weight: "quiet",
                      "aria-label": R.$i18n("cx-sx-publisher-configure-button-aria-label"),
                      onClick: oe
                    }, {
                      default: Oo(() => [
                        qe(ue($c), { icon: ue(iy) }, null, 8, ["icon"])
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
        qe(n9, { "publish-feedback-messages": ue(h) }, null, 8, ["publish-feedback-messages"]),
        oo("section", k9, [
          qe(ue(N), { class: "pb-5 ma-0" }, {
            default: Oo(() => [
              qe(ue(k), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                textContent: Km(r.value)
              }, null, 8, ["textContent"]),
              qe(ue(k), { shrink: "" }, {
                default: Oo(() => [
                  qe(ue(Qm), {
                    weight: "quiet",
                    "aria-label": R.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: ue(P)
                  }, {
                    default: Oo(() => [
                      qe(ue($c), { icon: ue(uu) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label", "onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          oo("div", {
            innerHTML: ue(t).translationHtml
          }, null, 8, $9)
        ]),
        qe(G6, {
          active: j.value,
          "onUpdate:active": J[0] || (J[0] = (le) => j.value = le)
        }, null, 8, ["active"]),
        qe(V6, {
          active: ue(g),
          "captcha-details": ue(c),
          onClose: ue(m),
          onPublish: J[1] || (J[1] = (le) => L(le))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        qe(p6, {
          active: ue(E),
          status: ue(x)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const A9 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: T9
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, D9 = window.Vue.resolveComponent, P9 = window.Vue.createVNode, B9 = window.Vue.normalizeClass, F9 = window.Vue.openBlock, N9 = window.Vue.createElementBlock;
function M9(e, t, n, o, s, a) {
  const r = D9("sx-publisher");
  return F9(), N9("main", {
    class: B9(["sx-publisher-view", a.classes])
  }, [
    P9(r)
  ], 2);
}
const U9 = /* @__PURE__ */ de(A9, [["render", M9]]);
const Mt = window.Vue.unref, In = window.Vue.createVNode, so = window.Vue.withCtx, Vc = window.Vue.toDisplayString, Ec = window.Vue.createElementVNode, I9 = window.Vue.openBlock, R9 = window.Vue.createBlock, z9 = ["textContent"], O9 = ["textContent"], H9 = ["textContent"], Wf = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: Ko,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (I9(), R9(Mt(N), {
      class: "cx-search-suggestion px-4 py-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: Mt(H.getDir)(e.suggestion.language)
    }, {
      default: so(() => [
        In(Mt(k), { shrink: "" }, {
          default: so(() => [
            In(Mt(Wc), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        In(Mt(k), { class: "ms-4" }, {
          default: so(() => [
            In(Mt(N), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: so(() => [
                In(Mt(k), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: so(() => [
                    Ec("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: Vc(e.suggestion.title)
                    }, null, 8, z9)
                  ]),
                  _: 1
                }),
                In(Mt(k), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: so(() => [
                    Ec("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: Vc(e.suggestion.description)
                    }, null, 8, O9)
                  ]),
                  _: 1
                }),
                In(Mt(k), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: so(() => [
                    In(Mt(Je), {
                      icon: Mt(A0),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    Ec("small", {
                      textContent: Vc((e.suggestion.langLinksCount || 0) + 1)
                    }, null, 8, H9)
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
const Js = window.Vue.unref, Zs = window.Vue.openBlock, Lc = window.Vue.createBlock, j9 = window.Vue.createCommentVNode, q9 = window.Vue.resolveDirective, G9 = window.Vue.withDirectives, Jm = window.Vue.createElementBlock, X9 = window.Vue.renderList, W9 = window.Vue.Fragment, K9 = window.Vue.normalizeClass, Y9 = window.Vue.withCtx, Q9 = {
  key: 1,
  class: "sx-article-search__empty-state"
}, Zm = window.Vue.computed, J9 = window.Vue.ref, Z9 = {
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
    const { sourceLanguageURLParameter: t } = D(), n = Zm(() => H.getAutonym(t.value)), o = e, s = J9(null), a = (c) => s.value = c, r = () => s.value = null, l = (c) => {
      var g;
      return ((g = o.selectedItem) == null ? void 0 : g.title) === c.title && !s.value || s.value === c.pageId;
    }, u = Zm(() => o.searchInput), { searchResultsLoading: d, searchResultsSlice: i } = vu(
      t,
      u
    );
    return (c, g) => {
      const p = q9("i18n");
      return Zs(), Lc(Js(Qe), { class: "sx-article-search__results mb-0 pa-0" }, {
        default: Y9(() => [
          Js(d) ? (Zs(), Lc(Js(ct), {
            key: 0,
            class: "sx-article-search__empty-state"
          })) : Js(i).length === 0 ? G9((Zs(), Jm("p", Q9, null, 512)), [
            [p, [
              u.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : j9("", !0),
          (Zs(!0), Jm(W9, null, X9(Js(i), (m) => (Zs(), Lc(Wf, {
            key: m.pageId,
            suggestion: m,
            class: K9({
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
const eP = window.Vue.toDisplayString, tP = window.Vue.createElementVNode, nP = window.Vue.renderList, oP = window.Vue.Fragment, Tc = window.Vue.openBlock, sP = window.Vue.createElementBlock, aP = window.Vue.normalizeClass, eh = window.Vue.createBlock, iP = window.Vue.unref, th = window.Vue.withCtx, rP = ["textContent"], lP = window.Vue.ref, nh = {
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
    const n = e, o = lP(null), s = (l) => o.value = l, a = () => o.value = null, r = (l) => {
      var u;
      return ((u = n.selectedItem) == null ? void 0 : u.title) === l.title && !o.value || o.value === l.pageId;
    };
    return (l, u) => (Tc(), eh(iP(Qe), { class: "sx-article-search__suggestions pa-0" }, {
      header: th(() => [
        tP("h5", {
          class: "ma-0 px-4 pb-1 sx-article-search__suggestions-header",
          textContent: eP(e.cardTitle)
        }, null, 8, rP)
      ]),
      default: th(() => [
        (Tc(!0), sP(oP, null, nP(e.suggestions, (d) => (Tc(), eh(Wf, {
          key: d.pageId,
          suggestion: d,
          class: aP({
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
}, cP = window.Vue.computed, uP = (e, t) => e.length === t.length && e.every((n) => t.includes(n)) && t.every((n) => e.includes(n)), oh = "other", dP = (e) => cP((t) => {
  const o = e.value.slice(0, 3), s = {
    value: oh,
    props: {
      icon: F0,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  }, a = (t || []).map((l) => l.value).filter((l) => l !== oh);
  return uP(a, o) ? t : [...o.map((l) => ({
    value: l,
    props: {
      label: H.getAutonym(l),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), s];
}), gP = window.Vue.computed, pP = () => {
  const { supportedSourceLanguageCodes: e } = fa(), { targetLanguageURLParameter: t } = D();
  return { getSuggestedSourceLanguages: (o) => gP(() => {
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
}, mP = window.Vue.ref, hP = () => {
  const e = mP([]), t = () => {
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
const fP = window.Vue.resolveDirective, wP = window.Vue.createElementVNode, Ac = window.Vue.withDirectives, fe = window.Vue.unref, ea = window.Vue.withCtx, Qt = window.Vue.createVNode, ta = window.Vue.openBlock, sh = window.Vue.createBlock, vP = window.Vue.createCommentVNode, Dc = window.Vue.createElementBlock, _P = window.Vue.Fragment, SP = window.Vue.vShow, na = window.Vue.withModifiers, oa = window.Vue.withKeys, yP = ["onKeydown"], xP = { class: "mb-0" }, CP = {
  key: 2,
  class: "sx-article-search__empty-state"
}, sa = window.Vue.ref, bP = window.Vue.onMounted, aa = window.Vue.computed, ah = window.Vue.watch, kP = window.Vue.inject, $P = window.Vuex.useStore, VP = window.Codex.CdxButton, EP = window.Codex.CdxIcon, LP = window.Codex.CdxSearchInput, TP = 3, AP = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = sa(""), n = sa(!1), o = sa(null), s = sa(!1), { previousLanguages: a, addLanguageToHistory: r } = hP(), l = $P(), {
      sourceLanguageURLParameter: u,
      targetLanguageURLParameter: d
    } = D(), { supportedSourceLanguageCodes: i } = fa(), { searchResultsSlice: c } = vu(u, t), { getSuggestedSourceLanguages: g } = pP(), p = g(a), m = dP(
      p
    ), h = Ze(), { fetchAllTranslations: f } = Zo();
    bP(() => C(this, null, function* () {
      var B;
      f(), r(u.value), (B = o.value) == null || B.focus();
    }));
    const w = () => {
      h.push({ name: "dashboard" });
    }, _ = jh(), y = (B) => {
      _(B, d.value), r(B);
    }, S = (B) => {
      if (B === "other") {
        s.value = !0;
        return;
      }
      y(B);
    };
    ah(
      u,
      () => {
        var B;
        l.dispatch("mediawiki/fetchNearbyPages"), (B = o.value) == null || B.focus();
      },
      { immediate: !0 }
    );
    const b = xt();
    ah(t, () => {
      n.value || (n.value = !0, b({
        event_type: "dashboard_search",
        translation_source_language: u.value,
        translation_target_language: d.value
      }));
    });
    const E = () => {
      s.value = !1;
    }, x = (B) => {
      s.value = !1, S(B);
    }, { fetchPreviousEditsInSource: I, previousEditsInSource: L } = Th(), P = sa([]);
    (() => I().then(() => L.value.length > 0 ? lo.fetchPages(
      u.value,
      L.value
    ) : []).then((B) => {
      B = B.slice(0, TP), B = B.sort(
        (M, Y) => L.value.indexOf(M.title) - L.value.indexOf(Y.title)
      ), P.value = B;
    }))();
    const oe = aa(() => l.getters["mediawiki/getNearbyPages"]), ae = kP("breakpoints"), te = aa(() => ae.value.mobile), R = Sa(), J = aa(
      () => P.value && P.value.length
    ), se = aa(
      () => oe.value && oe.value.length
    ), { next: le, prev: ke, keyboardNavigationContainer: We, selectedItem: Pe } = bf(t, c, P), Z = (B) => R(
      B.title,
      u.value,
      d.value,
      U.value
    ), U = aa(() => t.value ? "search_result" : J.value ? "suggestion_recent_edit" : se.value ? "suggestion_nearby" : "");
    return (B, M) => {
      const Y = fP("i18n");
      return ta(), Dc("section", {
        ref_key: "keyboardNavigationContainer",
        ref: We,
        class: "sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto",
        onKeydown: [
          M[5] || (M[5] = oa(na((...v) => fe(le) && fe(le)(...v), ["stop", "prevent"]), ["tab"])),
          M[6] || (M[6] = oa(na((...v) => fe(le) && fe(le)(...v), ["stop", "prevent"]), ["down"])),
          M[7] || (M[7] = oa(na((...v) => fe(ke) && fe(ke)(...v), ["stop", "prevent"]), ["up"])),
          oa(na(w, ["stop", "prevent"]), ["esc"]),
          M[8] || (M[8] = oa(na((v) => Z(fe(Pe)), ["stop", "prevent"]), ["enter"]))
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
                Ac(wP("h5", xP, null, 512), [
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
                Qt(fe(VP), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": B.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: w
                }, {
                  default: ea(() => [
                    Qt(fe(EP), { icon: fe(Jo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Qt(fe(LP), {
          ref_key: "searchInputRef",
          ref: o,
          modelValue: t.value,
          "onUpdate:modelValue": M[0] || (M[0] = (v) => t.value = v),
          class: "sx-article-search__search-input",
          placeholder: B.$i18n("cx-sx-article-search-input-placeholder")
        }, null, 8, ["modelValue", "placeholder"]),
        Qt(fe(pa), {
          class: "sx-article-search__language-button-group",
          items: fe(m),
          active: fe(u),
          onSelect: S
        }, null, 8, ["items", "active"]),
        t.value ? vP("", !0) : (ta(), Dc(_P, { key: 0 }, [
          J.value ? (ta(), sh(nh, {
            key: 0,
            "card-title": B.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: P.value,
            "selected-item": fe(Pe),
            onSuggestionClicked: M[1] || (M[1] = (v) => Z(v))
          }, null, 8, ["card-title", "suggestions", "selected-item"])) : se.value ? (ta(), sh(nh, {
            key: 1,
            "card-title": B.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: oe.value,
            onSuggestionClicked: M[2] || (M[2] = (v) => Z(v))
          }, null, 8, ["card-title", "suggestions"])) : Ac((ta(), Dc("p", CP, null, 512)), [
            [Y, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        Ac(Qt(Z9, {
          "search-input": t.value,
          "selected-item": fe(Pe),
          onSuggestionClicked: M[3] || (M[3] = (v) => Z(v))
        }, null, 8, ["search-input", "selected-item"]), [
          [SP, !!t.value]
        ]),
        Qt(fe(yt), {
          value: s.value,
          "onUpdate:value": M[4] || (M[4] = (v) => s.value = v),
          class: "sx-article-search-language-selector",
          fullscreen: te.value,
          header: te.value,
          title: B.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: E
        }, {
          default: ea(() => [
            Qt(fe(kf), {
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
      ], 40, yP);
    };
  }
};
const DP = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: AP
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.mobile })
  }
}, PP = window.Vue.resolveComponent, BP = window.Vue.createVNode, FP = window.Vue.normalizeClass, NP = window.Vue.openBlock, MP = window.Vue.createElementBlock;
function UP(e, t, n, o, s, a) {
  const r = PP("sx-article-search");
  return NP(), MP("main", {
    class: FP(["sx-article-search-view", a.classes])
  }, [
    BP(r)
  ], 2);
}
const IP = /* @__PURE__ */ de(DP, [["render", UP]]), RP = () => {
  const e = Sa(), t = xu(), { logDashboardOpenEvent: n } = Af(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s,
    pageURLParameter: a
  } = D();
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
}, zP = window.Vuex.useStore, OP = [
  {
    path: "",
    name: "dashboard",
    component: Zg,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: IP,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: XE,
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
    component: l3,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: S5,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: mD,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: MA,
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
    component: ZD,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: U9,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Zg,
    meta: { workflowStep: 0 }
  }
], $u = XC({
  history: Gx(),
  routes: OP
}), Pc = (e, t, n) => {
  e === t ? n() : n({ name: t });
}, HP = (e, t, n) => {
  let o = "cx_" + btoa(
    encodeURIComponent([n, e, t].join("_"))
  );
  return o = o.replace(/[()<>@,;\\[\]?={}]/g, ""), mw.cookie.get(o, "");
};
$u.beforeEach((e, t, n) => {
  const o = zP();
  if (mw.user.isAnon() || uh.assertUser().catch((i) => {
    i instanceof Xo && o.commit("application/setIsLoginDialogOn", !0);
  }), o.commit("application/setPreviousRoute", t.name), t.name) {
    n();
    return;
  }
  const s = RP(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    clearTranslationURLParameters: u
  } = D();
  if (!!(a.value && r.value && l.value)) {
    if (HP(
      a.value,
      r.value,
      l.value
    )) {
      const c = e.name === "sx-quick-tutorial" ? "sx-quick-tutorial" : "sx-sentence-selector";
      Pc(e.name, c, n);
    } else
      e.name === "sx-translation-confirmer" && s(), Pc(e.name, "sx-translation-confirmer", n);
    return;
  }
  u(), Pc(e.name, "dashboard", n);
});
$u.afterEach((e, t) => {
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
const jP = {
  install: function(e) {
    e.config.errorHandler = function(t) {
      mw.errorLogger.logError(t, "error.contenttranslation"), mw.log.error(t);
    };
  }
}, qP = window.Vue.createApp, GP = mw.config.get("wgUserLanguage"), XP = "en", WP = mw.messages.values || {}, uo = qP(Ny);
uo.use($u);
uo.use(mx);
uo.use(sv);
uo.use(ov);
const KP = Fv({
  locale: GP,
  finalFallback: XP,
  messages: WP,
  wikilinks: !0
});
uo.use(KP);
uo.use(jP);
uo.mount("#contenttranslation");
