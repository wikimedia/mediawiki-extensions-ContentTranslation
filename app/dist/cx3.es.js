var Zf = Object.defineProperty, ew = Object.defineProperties;
var tw = Object.getOwnPropertyDescriptors;
var $u = Object.getOwnPropertySymbols;
var nw = Object.prototype.hasOwnProperty, ow = Object.prototype.propertyIsEnumerable;
var Vu = (e, t, n) => t in e ? Zf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, de = (e, t) => {
  for (var n in t || (t = {}))
    nw.call(t, n) && Vu(e, n, t[n]);
  if ($u)
    for (var n of $u(t))
      ow.call(t, n) && Vu(e, n, t[n]);
  return e;
}, et = (e, t) => ew(e, tw(t));
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
}, sw = {
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
}, aw = window.Vue.toDisplayString, cr = window.Vue.openBlock, ur = window.Vue.createElementBlock, iw = window.Vue.createCommentVNode, Eu = window.Vue.createElementVNode, rw = window.Vue.normalizeClass, lw = ["width", "height", "aria-labelledby"], cw = ["id"], uw = ["fill"], dw = ["d"];
function gw(e, t, n, o, s, a) {
  return cr(), ur("span", {
    class: rw(["mw-ui-icon notranslate", a.classes])
  }, [
    (cr(), ur("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...r) => a.handleClick && a.handleClick(...r))
    }, [
      n.iconName ? (cr(), ur("title", {
        key: 0,
        id: n.iconName
      }, aw(n.iconName), 9, cw)) : iw("", !0),
      Eu("g", { fill: n.iconColor }, [
        Eu("path", { d: a.iconImagePath }, null, 8, dw)
      ], 8, uw)
    ], 8, lw))
  ], 2);
}
const Qe = /* @__PURE__ */ ce(sw, [["render", gw]]);
const pw = {
  name: "MwButton",
  components: {
    MwIcon: Qe
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
}, hw = window.Vue.renderSlot, fw = window.Vue.resolveComponent, Lu = window.Vue.normalizeClass, ya = window.Vue.openBlock, dr = window.Vue.createBlock, gr = window.Vue.createCommentVNode, ww = window.Vue.toDisplayString, vw = window.Vue.createElementBlock, _w = window.Vue.toHandlerKey, Sw = window.Vue.withModifiers, yw = window.Vue.mergeProps, xw = window.Vue.createElementVNode, Cw = window.Vue.resolveDynamicComponent, bw = window.Vue.withCtx, kw = { class: "mw-ui-button__content" }, $w = ["textContent"];
function Vw(e, t, n, o, s, a) {
  const r = fw("mw-icon");
  return ya(), dr(Cw(a.component), {
    class: Lu(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: bw(() => [
      hw(e.$slots, "default", {}, () => [
        xw("span", kw, [
          n.icon ? (ya(), dr(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: Lu(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : gr("", !0),
          !a.isIcon && n.label ? (ya(), vw("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: ww(n.label)
          }, null, 8, $w)) : gr("", !0),
          n.indicator ? (ya(), dr(r, yw({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [_w(a.indicatorClickEvent)]: t[0] || (t[0] = Sw((l) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : gr("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const qe = /* @__PURE__ */ ce(pw, [["render", Vw]]);
const Ew = {
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
}, Lw = window.Vue.renderList, Aw = window.Vue.Fragment, pr = window.Vue.openBlock, Au = window.Vue.createElementBlock, Dw = window.Vue.resolveComponent, Tw = window.Vue.withModifiers, Bw = window.Vue.mergeProps, Pw = window.Vue.createBlock, Fw = { class: "row mw-ui-button-group ma-0 pa-0" };
function Nw(e, t, n, o, s, a) {
  const r = Dw("mw-button");
  return pr(), Au("div", Fw, [
    (pr(!0), Au(Aw, null, Lw(n.items, (l) => (pr(), Pw(r, Bw({
      key: l.value,
      value: l.value,
      "aria-selected": a.isActive(l) || null,
      ref_for: !0
    }, l.props, {
      class: ["ma-0", a.buttonClasses(l)],
      style: a.activeIndicatorStyle(l),
      onClick: Tw((u) => e.$emit("select", l.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const ua = /* @__PURE__ */ ce(Ew, [["render", Nw]]);
const Mw = {
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
}, Du = window.Vue.renderSlot, Uw = window.Vue.toDisplayString, Tu = window.Vue.openBlock, Bu = window.Vue.createElementBlock, Iw = window.Vue.createCommentVNode, Rw = window.Vue.createElementVNode, zw = { class: "mw-ui-card" }, Ow = ["textContent"], jw = { class: "mw-ui-card__content" };
function Hw(e, t, n, o, s, a) {
  return Tu(), Bu("div", zw, [
    Du(e.$slots, "header", {}, () => [
      n.title ? (Tu(), Bu("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: Uw(n.title)
      }, null, 8, Ow)) : Iw("", !0)
    ]),
    Rw("div", jw, [
      Du(e.$slots, "default")
    ])
  ]);
}
const Ye = /* @__PURE__ */ ce(Mw, [["render", Hw]]);
const qw = {}, Gw = window.Vue.openBlock, Xw = window.Vue.createElementBlock, Ww = { class: "mw-ui-divider row" };
function Kw(e, t) {
  return Gw(), Xw("div", Ww);
}
const Ii = /* @__PURE__ */ ce(qw, [["render", Kw]]);
const Yw = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, Qw = window.Vue.renderSlot, Jw = window.Vue.resolveDynamicComponent, Zw = window.Vue.withCtx, e0 = window.Vue.openBlock, t0 = window.Vue.createBlock;
function n0(e, t, n, o, s, a) {
  return e0(), t0(Jw(n.tag), { class: "mw-grid container" }, {
    default: Zw(() => [
      Qw(e.$slots, "default")
    ]),
    _: 3
  });
}
const o0 = /* @__PURE__ */ ce(Yw, [["render", n0]]), s0 = {
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
}, a0 = window.Vue.renderSlot, i0 = window.Vue.resolveDynamicComponent, r0 = window.Vue.normalizeClass, l0 = window.Vue.withCtx, c0 = window.Vue.openBlock, u0 = window.Vue.createBlock;
function d0(e, t, n, o, s, a) {
  return c0(), u0(i0(n.tag), {
    class: r0(a.classes)
  }, {
    default: l0(() => [
      a0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const N = /* @__PURE__ */ ce(s0, [["render", d0]]), Ec = ["mobile", "tablet", "desktop", "desktop-wide"], g0 = Ec.reduce(
  (e, t) => et(de({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), p0 = {
  name: "MwCol",
  props: et(de({}, g0), {
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
      for (let n = 0; n < Ec.length; n++) {
        let o = Ec[n], s = this.$props[o];
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
}, m0 = window.Vue.renderSlot, h0 = window.Vue.resolveDynamicComponent, f0 = window.Vue.normalizeClass, w0 = window.Vue.withCtx, v0 = window.Vue.openBlock, _0 = window.Vue.createBlock;
function S0(e, t, n, o, s, a) {
  return v0(), _0(h0(n.tag), {
    class: f0(a.classes)
  }, {
    default: w0(() => [
      m0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const k = /* @__PURE__ */ ce(p0, [["render", S0]]), y0 = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", x0 = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", Ri = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", C0 = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, b0 = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", ah = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", k0 = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", $0 = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", zi = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", V0 = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", E0 = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", L0 = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", Pu = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", A0 = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", ih = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", D0 = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", T0 = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", B0 = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", P0 = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", F0 = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", Lc = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, N0 = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, M0 = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, rh = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", U0 = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z";
const mr = window.Vue.computed, I0 = window.Vue.watch, R0 = window.Vue.ref, z0 = window.Vue.nextTick, O0 = {
  name: "MwDialog",
  components: {
    MwButton: qe,
    MwRow: N,
    MwCol: k,
    MwDivider: Ii
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
    const n = R0(null), o = mr(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = mr(
      () => `mw-ui-dialog__overlay--${e.overlayMode}`
    ), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, r = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    I0(
      () => e.value,
      (u) => {
        u ? (r(), z0(() => {
          n.value.focus();
        })) : a();
      }
    );
    const l = mr(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: l,
      overlayClass: s,
      mwIconClose: zi,
      root: n
    };
  }
}, Fu = window.Vue.normalizeClass, hr = window.Vue.createElementVNode, fr = window.Vue.renderSlot, xa = window.Vue.resolveComponent, ss = window.Vue.createVNode, wr = window.Vue.withCtx, Nu = window.Vue.createCommentVNode, j0 = window.Vue.withKeys, Mu = window.Vue.openBlock, H0 = window.Vue.createElementBlock, q0 = window.Vue.Transition, G0 = window.Vue.normalizeStyle, X0 = window.Vue.createBlock, W0 = { class: "mw-ui-dialog__shell items-stretch" }, K0 = { class: "mw-ui-dialog__body" };
function Y0(e, t, n, o, s, a) {
  const r = xa("mw-col"), l = xa("mw-button"), u = xa("mw-row"), d = xa("mw-divider");
  return Mu(), X0(q0, {
    name: "mw-ui-animation-fade",
    style: G0(o.cssVars)
  }, {
    default: wr(() => [
      n.value ? (Mu(), H0("div", {
        key: 0,
        ref: "root",
        class: Fu(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = j0((i) => n.closeOnEscapeKey && o.close(), ["esc"]))
      }, [
        hr("div", {
          class: Fu(["mw-ui-dialog__overlay", o.overlayClass]),
          onClick: t[0] || (t[0] = (i) => !n.persistent && o.close())
        }, null, 2),
        hr("div", W0, [
          n.header ? fr(e.$slots, "header", { key: 0 }, () => [
            ss(u, { class: "mw-ui-dialog__header" }, {
              default: wr(() => [
                ss(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                ss(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: wr(() => [
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
          ]) : Nu("", !0),
          hr("div", K0, [
            fr(e.$slots, "default")
          ]),
          fr(e.$slots, "footer")
        ])
      ], 34)) : Nu("", !0)
    ]),
    _: 3
  }, 8, ["style"]);
}
const _t = /* @__PURE__ */ ce(O0, [["render", Y0]]);
const Q0 = {
  name: "MwInput",
  components: {
    MwIcon: Qe
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
}, Uu = window.Vue.renderSlot, J0 = window.Vue.resolveComponent, Ca = window.Vue.openBlock, vr = window.Vue.createBlock, Iu = window.Vue.createCommentVNode, Z0 = window.Vue.resolveDynamicComponent, e1 = window.Vue.toDisplayString, t1 = window.Vue.mergeProps, n1 = window.Vue.withModifiers, o1 = window.Vue.createElementVNode, s1 = window.Vue.normalizeClass, a1 = window.Vue.createElementBlock, i1 = { class: "mw-ui-input__content" };
function r1(e, t, n, o, s, a) {
  const r = J0("mw-icon");
  return Ca(), a1("div", {
    class: s1(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    o1("div", i1, [
      Uu(e.$slots, "icon", {}, () => [
        n.icon ? (Ca(), vr(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : Iu("", !0)
      ]),
      (Ca(), vr(Z0(n.type === "textarea" ? n.type : "input"), t1({
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
        textContent: e1(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      Uu(e.$slots, "indicator", {}, () => [
        n.indicator ? (Ca(), vr(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = n1((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : Iu("", !0)
      ])
    ])
  ], 2);
}
const Ac = /* @__PURE__ */ ce(Q0, [["render", r1]]);
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
const l1 = {}, c1 = window.Vue.createElementVNode, u1 = window.Vue.openBlock, d1 = window.Vue.createElementBlock, g1 = { class: "mw-ui-spinner" }, p1 = /* @__PURE__ */ c1("div", { class: "mw-ui-spinner__bounce" }, null, -1), m1 = [
  p1
];
function h1(e, t) {
  return u1(), d1("div", g1, m1);
}
const lt = /* @__PURE__ */ ce(l1, [["render", h1]]), ft = {
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
const f1 = window.Vue.computed, w1 = {
  name: "MwUiThumbnail",
  components: { MwUiIcon: Qe },
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
      default: ft.gray600
    },
    placeholderBackgroundColor: {
      type: String,
      default: ft.gray200
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = f1(() => {
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
}, Ru = window.Vue.normalizeStyle, zu = window.Vue.openBlock, v1 = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const _1 = window.Vue.resolveComponent, S1 = window.Vue.createBlock;
function y1(e, t, n, o, s, a) {
  const r = _1("mw-ui-icon");
  return n.thumbnail ? (zu(), v1("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Ru(o.style)
  }, null, 4)) : (zu(), S1(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Ru(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Oc = /* @__PURE__ */ ce(w1, [["render", y1]]);
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
const x1 = {
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
}, Ou = window.Vue.normalizeClass, ju = window.Vue.normalizeStyle, C1 = window.Vue.createElementVNode, b1 = window.Vue.openBlock, k1 = window.Vue.createElementBlock, $1 = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function V1(e, t, n, o, s, a) {
  return b1(), k1("div", {
    class: Ou(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: ju(a.containerStyles)
  }, [
    C1("div", {
      class: Ou(["mw-progress-bar__bar", a.barClass]),
      style: ju(a.barStyles)
    }, null, 6)
  ], 14, $1);
}
const lh = /* @__PURE__ */ ce(x1, [["render", V1]]), E1 = (e, t, n, o) => (s) => {
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
}, L1 = (e, t, n, o) => ({ initiateDrag: E1(
  e,
  t,
  n,
  o
) }), A1 = window.Vue.ref, Hu = window.Vue.computed, D1 = (e, t, n, o) => {
  const s = A1(0), a = Hu(
    () => t.value > e.value
  ), r = Hu(
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
const ba = window.Vue.ref, T1 = window.Vue.onMounted, qu = window.Vue.computed, B1 = window.Vue.nextTick, P1 = {
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
    const t = ba(!0), n = ba(null), o = qu(
      () => Math.min(e.minHeight, s.value)
    ), s = ba(1), { initiateDrag: a } = L1(
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
    } = D1(o, s, n, t), c = () => d(u.value + 1), g = ba(null), p = qu(() => ({
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
    return T1(() => C(this, null, function* () {
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
      mwIconCollapse: M0,
      mwIconExpand: k0,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), d(0)), t.value = !t.value;
      },
      scrollable: l,
      scrollIndex: u,
      scrollToNextStep: c
    };
  }
}, F1 = window.Vue.renderSlot, N1 = window.Vue.normalizeClass, ka = window.Vue.createElementVNode, M1 = window.Vue.resolveComponent, U1 = window.Vue.createVNode, _r = window.Vue.openBlock, I1 = window.Vue.createBlock, Gu = window.Vue.createCommentVNode, Xu = window.Vue.createElementBlock, R1 = window.Vue.normalizeStyle, z1 = { class: "mw-ui-expandable-content__container" }, O1 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, j1 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function H1(e, t, n, o, s, a) {
  const r = M1("mw-button");
  return _r(), Xu("div", {
    class: "mw-ui-expandable-content",
    style: R1(o.cssVars)
  }, [
    ka("div", z1, [
      ka("div", {
        ref: "contentRef",
        class: N1(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        F1(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (_r(), Xu("div", O1, [
        U1(r, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (_r(), I1(r, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : Gu("", !0)
      ])) : Gu("", !0)
    ]),
    ka("div", j1, [
      ka("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...l) => o.onDragButtonClicked && o.onDragButtonClicked(...l))
      })
    ], 512)
  ], 4);
}
const q1 = /* @__PURE__ */ ce(P1, [["render", H1]]);
const $a = window.Vue.computed, G1 = {
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
}, Wu = window.Vue.createElementVNode, Ku = window.Vue.normalizeStyle, X1 = window.Vue.openBlock, W1 = window.Vue.createElementBlock, K1 = ["width", "height", "viewport"], Y1 = ["r", "cx", "cy", "stroke-dasharray"], Q1 = ["r", "cx", "cy", "stroke-dasharray"];
function J1(e, t, n, o, s, a) {
  return X1(), W1("svg", {
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
    }, null, 8, Y1),
    Wu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: Ku({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, Q1)
  ], 12, K1);
}
const Z1 = /* @__PURE__ */ ce(G1, [["render", J1]]), ev = window.Vue.ref, hn = {
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
}, Sr = {
  mobile: () => matchMedia(xn.mobile).matches,
  tablet: () => matchMedia(xn.tablet).matches,
  desktop: () => matchMedia(xn.desktop).matches,
  desktopwide: () => matchMedia(xn["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(xn["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(xn["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(xn["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(xn["desktop-and-down"]).matches
}, tv = (e) => {
  const t = Object.values(hn);
  for (let n = 0; n < t.length; n++)
    if (e < t[n])
      return t[n];
  return null;
}, nv = {
  install: (e) => {
    const t = ev({
      nextBreakpoint: null
    }), n = () => {
      const o = window.innerWidth;
      for (let s in Sr)
        Sr.hasOwnProperty(s) && (t.value[s] = Sr[s]());
      t.value.nextBreakpoint = tv(o);
    };
    n(), window.addEventListener("resize", n), e.config.globalProperties.$mwui = et(de({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: t.value
    }), e.provide("breakpoints", t);
  }
}, ov = {
  install: (e) => {
    e.config.globalProperties.$mwui = et(de({}, e.config.globalProperties.$mwui || {}), {
      colors: ft
    }), e.provide("colors", ft);
  }
};
class Go extends Error {
}
const sv = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new Go();
}), ch = { assertUser: sv };
const av = window.Vue.resolveDirective, as = window.Vue.createElementVNode, Yu = window.Vue.withDirectives, iv = window.Vue.toDisplayString, rv = window.Vue.unref, Qu = window.Vue.withCtx, lv = window.Vue.openBlock, cv = window.Vue.createBlock, uv = window.Vue.createCommentVNode, dv = { class: "pa-4 sx-login-dialog__header" }, gv = { class: "sx-login-dialog__body px-6 pb-4" }, pv = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, mv = ["href"], hv = window.Vue.computed, fv = window.Vue.ref, wv = window.Vuex.useStore, vv = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = wv(), n = hv(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = fv(mw.util.getUrl("Special:UserLogin"));
    return (a, r) => {
      const l = av("i18n");
      return n.value ? (lv(), cv(rv(_t), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: Qu(() => [
          as("div", dv, [
            Yu(as("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: Qu(() => [
          Yu(as("div", gv, null, 512), [
            [l, void 0, "cx-sx-login-dialog-body"]
          ]),
          as("div", pv, [
            as("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, iv(a.$i18n("cx-sx-login-dialog-button-label")), 9, mv)
          ])
        ]),
        _: 1
      })) : uv("", !0);
    };
  }
}, K = new mw.cx.SiteMapper(), _v = mw.util.getUrl, Sv = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
}, Xo = !mw.config.get("wgMFMode");
class jc {
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
const Va = "original", Ea = "empty", yv = {
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
    return yv[t] || t;
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
class Nn {
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
const Ju = (e) => {
  var n;
  const t = Ni(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, Ni = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, oo = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), uh = (e) => {
  const t = Ni(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = xv(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, xv = (e) => {
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
class yr {
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
      (a) => oo(a)
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
    const t = Ni(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? Ju(this.transclusionNode) : null;
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
    return n && Ju(n) || "";
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
    const o = Ni(n);
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
      new yr({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new yr({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new yr({
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
const Hc = mw.config.get(
  "wgContentTranslationUnmodifiedMTThresholdForPublish",
  95
), Cv = Hc - 10, bv = [
  { status: "failure", value: 100 - Hc },
  { status: "warning", value: 100 - Cv },
  { status: "success", value: 100 }
], ph = (e, t, n) => {
  const o = Zu(e).textContent, s = Zu(t).textContent, a = 100 - 100 * mw.cx.calculateUnmodifiedContent(s, o, n);
  return Math.ceil(a);
}, kv = (e) => bv.find((t) => e <= t.value).status, $v = (e, t) => ph(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), Vv = () => (100 - Hc) / 100, Zu = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, Qt = {
  calculateScore: ph,
  getScoreStatus: kv,
  getMTScoreForPageSection: $v,
  getMtModificationThreshold: Vv
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
    return n instanceof rt ? n.transclusionNode.outerHTML : n instanceof Nn ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof rt ? t.blockTemplateSelected = !1 : t instanceof Nn && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof rt ? n.blockTemplateSelected = !0 : n instanceof Nn && (n.selected = !0);
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
    if (o instanceof Nn)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof rt ? n.blockTemplateProposedTranslations[t] || "" : n instanceof Nn ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof rt ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof Nn && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
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
class Oi extends jc {
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
const Jt = "previous-edits", vn = "popular", Ge = "topic", Ve = "geography", ee = "collections", Ke = "automatic", wt = "seed", ed = window.Vue.ref, { topics: Ev, regions: Lv } = mw.loader.require(
  "ext.cx.articlefilters"
), Aa = {
  type: Ke,
  id: Jt
}, qc = () => {
  const e = ed(
    Ev.flatMap((l) => l.topics).map((l) => l.topicId.toLowerCase())
  ), t = ed(!1), n = (l, u) => e.value.includes(u) ? { type: Ge, id: u } : null, o = (l, u) => Lv.some(
    (i) => i.id.toLowerCase() === u || i.countries.some(
      (c) => c.id.toLowerCase() === u
    )
  ) ? { type: Ve, id: u } : null, s = (l, u, d) => d && !d.some((i) => i.name.toLowerCase() === u) ? null : { type: ee, id: l };
  return { filtersValidatorError: t, validateFilters: ({ type: l, id: u }, d = !1) => {
    t.value = !1;
    const i = l == null ? void 0 : l.toLowerCase(), c = u == null ? void 0 : u.toLowerCase();
    if (c === Jt)
      return {
        type: Ke,
        id: Jt
      };
    if (c === vn)
      return {
        type: Ke,
        id: vn
      };
    if (c === ee)
      return d && !d.length ? (t.value = !0, Aa) : {
        type: Ke,
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
    } else if (i === wt)
      return { type: wt, id: u };
    return Aa;
  }, isDefaultFilter: ({ type: l, id: u }) => l === Aa.type && u === Aa.id };
}, Av = window.Vue.inject, Dv = window.Vue.reactive;
var Tv = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, mh = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(Tv, function() {
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
            function _(V) {
              const M = f, Pe = [];
              for (let yt = 0; yt < V.length; yt++) {
                const Zt = V[yt]();
                if (Zt === null)
                  return f = M, null;
                Pe.push(Zt);
              }
              return Pe;
            }
            function y(V, M) {
              return () => {
                const Pe = f, yt = [];
                let Zt = M();
                for (; Zt !== null; )
                  yt.push(Zt), Zt = M();
                return yt.length < V ? (f = Pe, null) : yt;
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
              const V = _([L, B]);
              return V === null ? null : V[1];
            }
            const Ne = w([te, se]), Xe = w([te, q]);
            function Be() {
              const V = _([j, G]);
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
              const V = _([x, y(0, re)]);
              if (V === null)
                return null;
              const M = V[1];
              return M.length > 1 ? ["CONCAT"].concat(M) : M[0];
            }
            function Z() {
              const V = _([J, R, Be]);
              return V === null ? null : [V[0], V[2]];
            }
            function v() {
              const V = _([J, R, re]);
              return V === null ? null : [V[0], V[2]];
            }
            function A() {
              const V = _([J, R]);
              return V === null ? null : [V[0], ""];
            }
            const D = w([function() {
              const V = _([w([Z, v, A]), y(0, U)]);
              return V === null ? null : V[0].concat(V[1]);
            }, function() {
              const V = _([J, y(0, U)]);
              return V === null ? null : [V[0]].concat(V[1]);
            }]), F = S("{{"), X = S("}}"), ue = S("[["), H = S("]]"), z = S("["), ie = S("]");
            function Ze() {
              const V = _([F, D, X]);
              return V === null ? null : V[1];
            }
            const ke = w([function() {
              const V = _([y(1, re), x, y(1, go)]);
              return V === null ? null : [["CONCAT"].concat(V[0]), ["CONCAT"].concat(V[2])];
            }, function() {
              const V = _([y(1, re)]);
              return V === null ? null : [["CONCAT"].concat(V[0])];
            }]);
            function uo() {
              let V = null;
              const M = _([ue, ke, H]);
              if (M !== null) {
                const Pe = M[1];
                V = ["WIKILINK"].concat(Pe);
              }
              return V;
            }
            function va() {
              let V = null;
              const M = _([z, y(1, or), E, y(1, go), ie]);
              return M !== null && (V = ["EXTLINK", M[1].length === 1 ? M[1][0] : ["CONCAT"].concat(M[1]), ["CONCAT"].concat(M[3])]), V;
            }
            const ts = b(/^[A-Za-z]+/);
            function ns() {
              const V = b(/^[^"]*/), M = _([Y, V, Y]);
              return M === null ? null : M[1];
            }
            function os() {
              const V = b(/^[^']*/), M = _([we, V, we]);
              return M === null ? null : M[1];
            }
            function tr() {
              const V = b(/^\s*=\s*/), M = _([E, ts, V, w([ns, os])]);
              return M === null ? null : [M[1], M[3]];
            }
            function nr() {
              const V = y(0, tr)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], V);
            }
            const or = w([Ze, Be, uo, va, function() {
              const V = y(1, ae)();
              return V === null ? null : V.join("");
            }]), go = w([Ze, Be, uo, va, function() {
              let V = null;
              const M = f, Pe = S("<"), yt = b(/^\/?/), Zt = b(/^\s*>/), sr = _([Pe, ts, nr, yt, Zt]);
              if (sr === null)
                return null;
              const xu = f, Cu = sr[1], ar = y(0, go)(), Wf = f, bu = _([S("</"), ts, Zt]);
              if (bu === null)
                return ["CONCAT", m.slice(M, xu)].concat(ar);
              const Kf = f, Yf = bu[1], ku = sr[2];
              if (function(zn, _a, ir, rr = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((zn = zn.toLowerCase()) !== (_a = _a.toLowerCase()) || rr.allowedHtmlElements.indexOf(zn) === -1)
                  return !1;
                const Qf = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let Sa = 0, Jf = ir.length; Sa < Jf; Sa += 2) {
                  const lr = ir[Sa];
                  if (rr.allowedHtmlCommonAttributes.indexOf(lr) === -1 && (rr.allowedHtmlAttributesByElement[zn] || []).indexOf(lr) === -1 || lr === "style" && ir[Sa + 1].search(Qf) !== -1)
                    return !1;
                }
                return !0;
              }(Cu, Yf, ku.slice(1)))
                V = ["HTMLELEMENT", Cu, ku].concat(ar);
              else {
                const zn = (_a) => _a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                V = ["CONCAT", zn(m.slice(M, xu))].concat(ar, zn(m.slice(Wf, Kf)));
              }
              return V;
            }, function() {
              const V = y(1, Xe)();
              return V === null ? null : V.join("");
            }]), re = w([Ze, Be, function() {
              const V = y(1, Ne)();
              return V === null ? null : V.join("");
            }]), yn = function() {
              const V = y(0, go)();
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
var Bv = mh.exports;
const td = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, hh = Symbol("banana-context");
function fe() {
  const e = Av(hh);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function Pv(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = Dv(new Bv(e.locale, e));
  return {
    install: (n) => {
      n.provide(hh, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: r } = td(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...r) : o.textContent = t.i18n(a, ...r);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: r } = td(s);
        o.innerHTML = t.i18n(a, ...r);
      });
    }
  };
}
const _n = window.Vue.ref, Fv = window.Vue.computed, ji = _n(null), Hi = _n(null), qi = _n(null), da = _n(null), Gc = _n(null), Gi = _n(null), fh = _n(null), wh = _n(null), Xc = _n(null), { validateFilters: Nv, filtersValidatorError: Mv } = qc(), vh = {
  from: ji,
  to: Hi,
  section: da,
  draft: Gc,
  page: qi,
  revision: Gi,
  "active-list": Xc
}, Uv = Fv(() => ({
  type: fh.value,
  id: wh.value
})), _h = (e, t) => {
  fh.value = e, wh.value = t, Mi("filter-type", e), t && Mi("filter-id", t);
}, Iv = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  e instanceof Oi && (n.draft = !0, n.revision = e.pageRevision, e.isLeadSectionTranslation || (n.section = e.sourceSectionTitle));
  for (const o in n) {
    const s = n[o];
    t.set(o, s), vh[o].value = s;
  }
  t.delete("title"), ga(Object.fromEntries(t));
}, Wc = (e, t) => {
  vh[e].value = t, Mi(e, t);
}, Rv = (e) => {
  Wc("section", e);
}, zv = (e) => {
  Wc("page", e);
}, Ov = (e) => {
  Wc("active-list", e);
}, ga = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    _v(`Special:ContentTranslation${t}`, e)
  );
}, jv = () => {
  const e = fe(), t = new URLSearchParams(location.search);
  qi.value = t.get("page"), ji.value = t.get("from"), Hi.value = t.get("to"), da.value = t.get("section"), Gi.value = t.get("revision"), Xc.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
  const n = Nv({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  _h(n.type, n.id), Mv.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, Hv = () => {
  const e = new URLSearchParams(location.search);
  da.value = null, e.delete("section"), e.delete("title"), ga(Object.fromEntries(e));
}, Mi = (e, t) => {
  const n = new URLSearchParams(location.search);
  t == null ? n.delete(e) : n.set(e, t), n.delete("title"), ga(Object.fromEntries(n));
}, qv = (e) => new URLSearchParams(location.search).get(e), Gv = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), ji.value = e, Hi.value = t, n.delete("title"), ga(Object.fromEntries(n));
}, Xv = () => {
  const e = new URLSearchParams(location.search);
  qi.value = null, da.value = null, Gc.value = null, Gi.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("revision"), e.delete("title"), ga(Object.fromEntries(e));
}, Wv = () => new URLSearchParams(location.search).get("force-quick-tutorial"), T = () => ({
  isQuickTutorialForced: Wv,
  setLanguageURLParams: Gv,
  setSectionURLParam: Rv,
  setTranslationURLParams: Iv,
  initializeURLState: jv,
  clearTranslationURLParameters: Xv,
  clearSectionURLParameter: Hv,
  setUrlParam: Mi,
  getUrlParam: qv,
  pageURLParameter: qi,
  sourceLanguageURLParameter: ji,
  targetLanguageURLParameter: Hi,
  sectionURLParameter: da,
  draftURLParameter: Gc,
  revisionURLParameter: Gi,
  setPageURLParam: zv,
  currentSuggestionFilters: Uv,
  setFilterURLParams: _h,
  activeDashboardTabParameter: Xc,
  setActiveDashboardTabParameter: Ov
}), Kv = () => K.getLanguagePairs();
function Yv(e, t) {
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
function Qv() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function Jv(e, t, n, o) {
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
const Xi = {
  fetchSupportedLanguageCodes: Kv,
  fetchSupportedMTProviders: Yv,
  fetchCXServerToken: Qv,
  addWikibaseLink: Jv
}, Kc = window.Vue.ref, nd = Kc([]), od = Kc([]), sd = Kc(!1);
function pa() {
  return {
    fetchSupportedLanguageCodes: () => C(this, null, function* () {
      if (!sd.value) {
        sd.value = !0;
        const t = yield Xi.fetchSupportedLanguageCodes();
        nd.value = t.sourceLanguages, od.value = t.targetLanguages;
      }
    }),
    supportedSourceLanguageCodes: nd,
    supportedTargetLanguageCodes: od
  };
}
const Zv = {
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
}, e_ = {
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
}, t_ = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], n_ = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, o_ = {
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
}, s_ = {
  languages: Zv,
  scriptgroups: e_,
  rtlscripts: t_,
  regiongroups: n_,
  territories: o_
};
var Re = s_;
function ma(e) {
  return !!Re.languages[e];
}
function Rn(e) {
  return ma(e) && Re.languages[e].length === 1 ? Re.languages[e][0] : !1;
}
function a_() {
  return Re.languages;
}
function ha(e) {
  var t = Rn(e);
  return t ? ha(t) : ma(e) ? Re.languages[e][0] : "Zyyy";
}
function Yc(e) {
  var t = Rn(e);
  return t ? Yc(t) : ma(e) && Re.languages[e][1] || "UNKNOWN";
}
function ra(e) {
  var t = Rn(e);
  return t ? ra(t) : ma(e) && Re.languages[e][2] || e;
}
function i_() {
  var e, t = {};
  for (e in Re.languages)
    Rn(e) || (t[e] = ra(e));
  return t;
}
function Sh(e) {
  var t, n, o = [];
  for (t in Re.languages)
    if (!Rn(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === ha(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function r_(e) {
  return Sh([e]);
}
function yh(e) {
  var t;
  for (t in Re.scriptgroups)
    if (Re.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function Qc(e) {
  return yh(ha(e));
}
function xh(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = Rn(n) || n, a = Qc(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Ch(e) {
  var t, n, o, s = {};
  for (t in Re.languages)
    if (!Rn(t)) {
      for (n = 0; n < e.length; n++)
        if (Yc(t).includes(e[n])) {
          o = Qc(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function l_(e) {
  return Ch([e]);
}
function c_(e) {
  var t, n, o, s = [];
  for (t = xh(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function u_(e, t) {
  var n = ra(e) || e, o = ra(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function bh(e) {
  return Re.rtlscripts.includes(ha(e));
}
function d_(e) {
  return bh(e) ? "rtl" : "ltr";
}
function g_(e) {
  return Re.territories[e] || [];
}
function p_(e, t) {
  t.target ? Re.languages[e] = [t.target] : Re.languages[e] = [t.script, t.regions, t.autonym];
}
var O = {
  addLanguage: p_,
  getAutonym: ra,
  getAutonyms: i_,
  getDir: d_,
  getGroupOfScript: yh,
  getLanguages: a_,
  getLanguagesByScriptGroup: xh,
  getLanguagesByScriptGroupInRegion: l_,
  getLanguagesByScriptGroupInRegions: Ch,
  getLanguagesInScript: r_,
  getLanguagesInScripts: Sh,
  getLanguagesInTerritory: g_,
  getRegions: Yc,
  getScript: ha,
  getScriptGroupOfLanguage: Qc,
  isKnown: ma,
  isRedirect: Rn,
  isRtl: bh,
  sortByScriptGroup: c_,
  sortByAutonym: u_
};
const po = window.Vue.computed;
function Ee(e) {
  const t = po(() => e.state.application.sourceLanguage), n = po(() => e.state.application.targetLanguage), o = po(
    () => e.state.application.currentMTProvider
  ), s = po(
    () => O.getAutonym(t.value)
  ), a = po(
    () => O.getAutonym(n.value)
  ), r = po(() => e.state.application.previousRoute);
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
class m_ {
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
function h_() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const f_ = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), h_();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, w_ = (e, t) => {
  let n, o;
  return t ? (n = f_(e), o = n.$element.find(
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
}, v_ = (e, t) => {
  const n = Array.from(
    w_(e, t)
  );
  return __(n).map(
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
          sentences: S_(c),
          node: c
        })
      ), i = !l;
      return new Oo({ id: u, title: l, subSections: d, isLeadSection: i });
    }
  );
}, __ = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, S_ = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new Nn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), kh = {
  convertSegmentedContentToPageSections: v_
}, Jc = 120, y_ = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: Jc,
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
}, x_ = (e, t) => {
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
    return l ? Object.freeze(new m_(l, r)) : null;
  });
}, C_ = (e, t, n) => {
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
}, b_ = (e, t, n, o = null) => $h(
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
}, k_ = (e) => {
  const t = Sv();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: Jc,
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
}, $_ = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: Jc,
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
}, ro = {
  fetchPages: y_,
  fetchLanguageTitles: x_,
  fetchPageContent: b_,
  fetchSegmentedContent: $h,
  fetchNearbyPages: k_,
  searchPagesByTitlePrefix: $_,
  fetchLanguageLinksForLanguage: C_
}, V_ = window.Vuex.useStore, Ko = () => {
  const e = V_();
  return (t, n) => {
    n = n.filter(
      (a) => !!a && !e.getters["mediawiki/getPage"](t, a)
    );
    const o = 50, s = [];
    for (let a = 0; a < n.length; a += o) {
      const r = n.slice(a, a + o), l = ro.fetchPages(t, r).then(
        (u) => u.forEach(
          (d) => e.commit("mediawiki/addPage", d)
        )
      );
      s.push(l);
    }
    return Promise.all(s);
  };
}, E_ = window.Vuex.useStore, Zc = () => {
  const e = E_(), {
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
class lo {
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
class Un {
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
], L_ = [
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
], A_ = [
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
], D_ = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], T_ = [
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
], B_ = {
  en: Vh,
  es: L_,
  bn: A_,
  fr: D_,
  de: T_
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
class eu {
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
class Eh extends lo {
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
    }), this.collection = new eu(u);
  }
}
class Lh extends Un {
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
    }), this.collection = new eu(c);
  }
}
const P_ = Vh, Mt = (n) => C(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
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
function F_() {
  return C(this, null, function* () {
    const e = {}, t = "/page-collection-groups";
    try {
      const n = (yield Mt({ urlPostfix: t, urlParams: e })) || [], o = {};
      for (const s in n)
        o[s] = n[s].map(
          (a) => new eu(a)
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
function N_(e, t, n = null, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      count: o
    };
    return n && (s.seed = n), ((yield Mt({ urlParams: s })) || []).map(
      (r) => new lo({
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
const M_ = (e, t) => C(void 0, null, function* () {
  return ((yield Mt({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  } })) || []).map(
    (s) => new lo({
      sourceTitle: s.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: s.wikidata_id,
      langLinksCount: parseInt(s.langlinks_count)
    })
  );
}), U_ = (e, t) => C(void 0, null, function* () {
  const s = (yield Mt({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  }, urlPostfix: "/sections" })) || [];
  return s && s.map(
    (a) => new Un({
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
}), I_ = (e, t, n = null) => C(void 0, null, function* () {
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
}), R_ = (e, t, n = null) => C(void 0, null, function* () {
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
function z_(e, t, n) {
  return C(this, null, function* () {
    const o = [t, e, n].map(
      (r) => encodeURIComponent(r)
    ), s = K.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (r) => r.ok ? r.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((r) => r == null ? void 0 : r.sections).catch((r) => null);
    return a ? new Un(a) : null;
  });
}
function O_(e, t, n = null) {
  return C(this, null, function* () {
    const o = {
      source: e,
      target: t,
      count: 24
    };
    n && (o.seed = n);
    const a = (yield Mt({ urlPostfix: "/sections", urlParams: o })) || [];
    return a && a.map(
      (r) => new Un({
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
function j_(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    return ((yield Mt({ urlParams: s })) || []).map(
      (r) => new lo({
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
      topic: n.join("|"),
      count: o
    }, r = (yield Mt({ urlPostfix: "/sections", urlParams: s })) || [];
    return r && r.map(
      (l) => new Un({
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
function q_(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      country: n.join("|"),
      count: o
    };
    return ((yield Mt({ urlParams: s })) || []).map(
      (r) => new lo({
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
      country: n.join("|"),
      count: o
    }, r = (yield Mt({ urlPostfix: "/sections", urlParams: s })) || [];
    return r && r.map(
      (l) => new Un({
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
function X_(e) {
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
function W_(e, t) {
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
function K_(e) {
  const t = P_.map((o) => encodeURIComponent(o)).join("|"), n = K.getCXServerUrl(
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
const Y_ = (e, t, n) => {
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
}, Q_ = (e) => {
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
}, J_ = () => {
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
  fetchFavorites: J_,
  fetchPageSuggestions: N_,
  fetchSectionSuggestion: z_,
  fetchSectionSuggestions: O_,
  fetchAppendixTargetSectionTitles: K_,
  fetchArticleSections: W_,
  markFavorite: Y_,
  unmarkFavorite: Q_,
  fetchUserEdits: X_,
  fetchMostPopularPageSuggestions: M_,
  fetchMostPopularSectionSuggestions: U_,
  fetchPageSuggestionsByTopics: j_,
  fetchSectionSuggestionsByTopics: H_,
  fetchPageSuggestionsByCountries: q_,
  fetchSectionSuggestionsByCountries: G_,
  fetchPageCollectionGroups: F_,
  fetchPageSuggestionsByCollections: I_,
  fetchSectionSuggestionsByCollections: R_
}, Z_ = window.Vuex.useStore, Yo = () => {
  const e = Z_(), { sourceLanguage: t, targetLanguage: n } = Ee(e), o = (l) => {
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
const tS = window.Vuex.useStore, tu = window.Vue.ref, nS = tu([]), oS = tu([]);
let xr = !1, Cr = !1, ad = !1;
const Da = tu([]);
let is = null;
const br = {
  page: nS,
  section: oS
}, Ah = () => {
  const e = tS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = T(), o = () => C(void 0, null, function* () {
    Cr || (Da.value = yield pe.fetchUserEdits(t.value).then((d) => (Cr = !0, d)));
  }), s = () => C(void 0, null, function* () {
    let d = e.getters["translator/getTranslationsByStatus"]("published");
    if (d = d.filter(
      (i) => i.sourceLanguage === t.value
    ), d.length && !xr)
      return xr = !0, d.map(
        (i) => i.sourceTitle
      );
    if (xr = !0, !Cr && (yield o(), Da.value.length > 0))
      return Da.value;
    if (!ad) {
      const i = yield pe.fetchUserEdits(n.value).then((c) => (ad = !0, c));
      if (i.length)
        return ro.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          i
        );
    }
    return null;
  }), a = (d) => {
    let i = br[d].value.find(
      (c) => c.matchesLanguagePair(t.value, n.value)
    );
    return i || (i = new eS({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), br[d].value.push(i)), i;
  }, r = () => C(void 0, null, function* () {
    let d = !1, i = [];
    do {
      i = yield s(), i || (d = !0);
      for (const c in br) {
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
}, sS = 5;
function ao(e) {
  return C(this, null, function* () {
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
  } = T(), { getSuggestionSeed: o } = Ah(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Yo(), l = {
    id: Jt,
    type: Ke
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (i) => C(void 0, null, function* () {
      const c = [];
      return yield ao(() => C(void 0, null, function* () {
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
      return yield ao(() => C(void 0, null, function* () {
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
}, rS = window.Vuex.useStore, lS = () => {
  const e = rS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = T(), o = {
    id: vn,
    type: Ke
  }, {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Yo();
  return { fetchSectionSuggestionsPopular: (d) => C(void 0, null, function* () {
    const i = [];
    return yield ao(() => C(void 0, null, function* () {
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
    return yield ao(() => C(void 0, null, function* () {
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
}, Dh = window.Vue.ref, rs = "ungrouped", id = Dh({}), rd = Dh(!1), nu = () => ({
  fetchPageCollectionGroups: () => C(void 0, null, function* () {
    try {
      const t = yield pe.fetchPageCollectionGroups(), n = Object.fromEntries(
        Object.keys(t).sort((o, s) => o === rs ? 1 : s === rs ? -1 : o.localeCompare(s)).map((o) => [o, t[o]])
      );
      n[rs] && (n[rs] = n[rs].sort(
        (o, s) => o.name.localeCompare(s.name)
      )), id.value = n, rd.value = !0;
    } catch (t) {
      mw.log.error("Failed to fetch page collections", t);
    }
  }),
  pageCollectionGroupsFetched: rd,
  pageCollectionGroups: id
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
const cS = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', uS = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', dS = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', gS = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', pS = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', mS = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', hS = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', fS = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', wS = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', vS = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', _S = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', SS = '<path d="m2.5 15.25 7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"/>', yS = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', xS = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', CS = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', bS = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', kS = '<path d="M19 16 2 12a3.83 3.83 0 01-1-2.5A3.83 3.83 0 012 7l17-4z"/><rect width="4" height="8" x="4" y="9" rx="2"/>', $S = '<path d="M8 2H2a2 2 0 00-2 2v2h12z"/><rect width="20" height="14" y="4" rx="2"/>', VS = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', Th = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', ES = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', LS = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"/>', AS = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', DS = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', TS = '<path d="M10 0a7.65 7.65 0 00-8 8c0 2.52 2 5 3 6s5 6 5 6 4-5 5-6 3-3.48 3-6a7.65 7.65 0 00-8-8m0 11.25A3.25 3.25 0 1113.25 8 3.25 3.25 0 0110 11.25"/>', BS = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', PS = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', FS = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', NS = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', MS = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', US = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', IS = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', RS = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', zS = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', OS = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', Bh = cS, jS = uS, Ph = {
  ltr: dS,
  shouldFlip: !0
}, Fh = {
  ltr: gS,
  shouldFlip: !0
}, ou = {
  ltr: pS,
  shouldFlip: !0
}, Nh = mS, Mh = hS, HS = fS, qS = wS, GS = vS, Qo = _S, XS = SS, su = yS, au = xS, Dc = CS, WS = bS, KS = {
  ltr: kS,
  shouldFlip: !0
}, YS = {
  ltr: $S,
  shouldFlip: !0
}, QS = VS, JS = {
  langCodeMap: {
    ar: Th
  },
  default: ES
}, ZS = {
  langCodeMap: {
    ar: Th
  },
  default: LS
}, Uh = AS, Wi = {
  ltr: DS,
  shouldFlip: !0
}, ey = TS, ty = BS, fa = {
  ltr: PS,
  shouldFlip: !0
}, iu = {
  ltr: FS,
  shouldFlip: !0
}, ny = {
  ltr: NS,
  shouldFlip: !0
}, Ih = MS, oy = US, Tc = IS, sy = RS, ay = zS, Rh = OS, iy = {
  [Jt]: Rh,
  [vn]: QS,
  [ee]: ou
}, ry = {
  [ee]: YS,
  [Ve]: ey
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
    return this.type === Ke ? this.id : this.type;
  }
  get icon() {
    return iy[this.provider] || null;
  }
  get expandableIcon() {
    return ry[this.provider] || this.icon;
  }
}
const ls = window.Vue.computed, { topics: ld, regions: cd } = mw.loader.require(
  "ext.cx.articlefilters"
), ly = (e) => new oa({
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
}), Ki = () => {
  const e = fe(), { currentSuggestionFilters: t, setFilterURLParams: n } = T(), { validateFilters: o, filtersValidatorError: s } = qc(), a = new Nt({
    id: Jt,
    type: Ke,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }), r = new Nt({
    id: vn,
    type: Ke,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }), l = new Nt({
    id: ee,
    type: Ke,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }), { pageCollectionGroups: u, pageCollectionGroupsFetched: d } = nu(), i = ls(() => {
    const x = new oa({
      id: Ke,
      type: Ke,
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
    filters: cd.map(
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
      ...ld.map(ly),
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
    const x = _();
    return x.type === Ge || x.type === Ve || x.type === wt || x.type === ee || x.id === ee ? [x, a] : [a, r];
  }, w = (x) => {
    n(x.type, x.id);
  }, _ = () => t.value.type === wt ? new Nt({
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
      const L = ld.flatMap((B) => B.topics).find((B) => B.topicId === x);
      return L ? L.articletopics : [];
    },
    waitingForPageCollectionsFetch: h,
    findSelectedFilter: _,
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
      const R = cd.find((L) => L.id === x);
      return R ? R.countries.map((L) => L.id) : [x];
    }
  };
}, cy = window.Vuex.useStore, uy = () => {
  const e = cy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = T(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Yo(), { getArticleTopics: l } = Ki();
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
      return yield ao(() => C(void 0, null, function* () {
        const h = yield pe.fetchSectionSuggestionsByTopics(
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
}, dy = window.Vuex.useStore, gy = () => {
  const e = dy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = T(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Yo(), { getCountries: l } = Ki();
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
      return yield ao(() => C(void 0, null, function* () {
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
}, py = window.Vuex.useStore, my = window.Vue.computed, hy = () => {
  const e = py(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = T(), s = my(() => {
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
}, fy = window.Vuex.useStore, wy = () => {
  const e = fy(), {
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
          type: wt
        }
      ), c;
    }),
    fetchSectionSuggestionsBySeed: (d) => C(void 0, null, function* () {
      const i = [], c = o.value.id;
      return yield ao(() => C(void 0, null, function* () {
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
          type: wt
        }
      ), i;
    })
  };
}, vy = () => {
  const { currentSuggestionFilters: e } = T(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = iS(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = lS(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = uy(), {
    fetchPageSuggestionsByCountries: l,
    fetchSectionSuggestionsByCountries: u
  } = gy(), {
    fetchPageSuggestionsByCollections: d,
    fetchSectionSuggestionsByCollections: i
  } = hy(), { fetchPageSuggestionsBySeed: c, fetchSectionSuggestionsBySeed: g } = wy(), p = {
    [Jt]: t,
    [vn]: o,
    [ee]: d,
    [Ge]: a,
    [Ve]: l,
    [wt]: c
  }, m = {
    [Jt]: n,
    [vn]: s,
    [ee]: i,
    [Ge]: r,
    [Ve]: u,
    [wt]: g
  }, h = (_) => _.type === Ke ? _.id : _.type;
  return {
    getCurrentPageSuggestionProvider: () => p[h(e.value)],
    getCurrentSectionSuggestionProvider: () => m[h(e.value)]
  };
}, _y = window.Vuex.useStore, ru = () => {
  const e = _y(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = Zc(), { sourceLanguageURLParameter: o } = T(), s = Ko(), a = () => {
    const g = t(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, r = () => {
    const g = n(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, {
    getCurrentPageSuggestionProvider: l,
    getCurrentSectionSuggestionProvider: u
  } = vy(), d = (g) => {
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
}, Sy = window.Vuex.useStore, zh = () => {
  const e = Sy();
  return (t) => C(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield pe.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, yy = window.Vuex.useStore, Oh = () => {
  const e = yy(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = ru(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = Zc(), { targetLanguageURLParameter: a } = T(), r = zh();
  return () => C(void 0, null, function* () {
    const l = s(0), u = o(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, i = l.length === d, c = u.length === d;
    i && c || (yield r(a.value), t(), n());
  });
}, xy = window.Vuex.useStore, lu = () => {
  const e = xy(), t = Ko();
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
          return new lo({
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
}, ud = window.Vue.computed, Cy = window.Vuex.useStore, Sn = () => {
  const e = Cy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = T(), s = ud(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = ud(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (l, u) => s.value.getTitleForLanguage(l) || s.value.getTitleForLanguage(u)
  };
}, jh = window.Vuex.useStore, { setLanguageURLParams: by } = T(), cu = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), by(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, Hh = () => {
  const e = jh(), t = Oh();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = Ee(e);
    n === o && (n = a.value, o = s.value), cu(e, n, o), t();
  };
}, ky = () => {
  const e = jh(), t = lu(), { currentLanguageTitleGroup: n, targetPageExists: o } = Sn(), s = Ko();
  return (a, r) => C(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: u,
      setPageURLParam: d,
      clearSectionURLParameter: i
    } = T();
    a === r && (a = u.value, r = l.value);
    const c = n.value.getTitleForLanguage(a);
    cu(e, a, r), d(c), o.value ? (i(), yield t(
      l.value,
      u.value,
      c
    )) : yield s(l.value, [c]);
  });
}, $y = window.Vuex.useStore, Vy = window.Vue.ref, dd = Vy(!1), qh = () => {
  const e = $y(), {
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
    cu(e, u, d), dd.value = !0;
  }), applicationLanguagesInitialized: dd };
};
const Ey = window.Vue.resolveDynamicComponent, gd = window.Vue.openBlock, pd = window.Vue.createBlock, Ly = window.Vue.Transition, cs = window.Vue.withCtx, us = window.Vue.createVNode, Ay = window.Vue.resolveComponent, kr = window.Vue.unref, Dy = window.Vuex.useStore, md = window.Vue.computed, Ty = window.Vue.onMounted, By = window.Vue.inject, Py = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = T(), { initializeApplicationLanguages: n } = qh();
    t(), n();
    const o = By("breakpoints"), s = md(() => o.value.mobile), a = Dy(), r = md(
      () => a.state.application.autoSavePending
    );
    return Ty(() => {
      window.addEventListener("beforeunload", (l) => {
        r.value && (l.preventDefault(), l.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (l) => {
        document.visibilityState === "visible" && ch.assertUser().then(() => a.commit("application/setIsLoginDialogOn", !1)).catch((u) => {
          u instanceof Go && a.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (l, u) => {
      const d = Ay("router-view");
      return gd(), pd(kr(o0), { id: "contenttranslation" }, {
        default: cs(() => [
          us(kr(N), { class: "cx-container" }, {
            default: cs(() => [
              us(kr(k), {
                class: "cx-container__wrapper-col",
                cols: "12"
              }, {
                default: cs(() => [
                  us(d, null, {
                    default: cs(({ Component: i, route: c }) => [
                      us(Ly, {
                        name: s.value ? c.meta.transitionName : ""
                      }, {
                        default: cs(() => [
                          (gd(), pd(Ey(i)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      us(vv)
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
}, Fy = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translatorStats: null
}, Ny = {
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
class io {
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
const hd = (e) => {
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
class My {
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
    const t = hd((s = this.user) == null ? void 0 : s.content), n = hd((a = this.mt) == null ? void 0 : a.content);
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
class uu extends jc {
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
const Yi = mw.user.isAnon() ? void 0 : "user", Xh = (e) => {
  if (e === "assertuserfailed")
    throw new Go();
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
        (u) => new Oi(et(de({}, u), { status: e }))
      ) : r = a.map(
        (u) => new uu(et(de({}, u), { status: e }))
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
function Uy(e) {
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
      (a) => new My(a)
    );
  });
}
function Iy(e, t, n, o, s) {
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
const Ry = (e, t, n) => {
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
}, zy = ({
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
    assert: Yi,
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
          publishFeedbackMessage: new io({
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
      publishFeedbackMessage: new io({
        text: w,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, Oy = ({
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
    assert: Yi,
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
    return m.exception ? h = m.exception.message : m.error ? h = m.error.info : h = "Unknown error", new io({ text: h, status: "error" });
  });
}, jy = (e) => {
  const t = {
    assert: Yi,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, Hy = () => {
  const e = {
    assert: Yi,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new uu(n.cxcheckunreviewed.translation)
  );
}, qy = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, Gy = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, Xy = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), vt = {
  fetchTranslations: Wh,
  fetchTranslationUnits: Uy,
  fetchSegmentTranslation: Iy,
  parseTemplateWikitext: Ry,
  publishTranslation: zy,
  saveTranslation: Oy,
  deleteTranslation: qy,
  fetchTranslatorStats: Xy,
  deleteCXTranslation: Gy,
  splitTranslation: jy,
  checkUnreviewedTranslations: Hy
};
function Wy(t) {
  return C(this, arguments, function* ({ commit: e }) {
    const n = yield vt.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const Ky = {
  fetchTranslatorStats: Wy
}, Yy = {
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
}, Qy = {
  namespaced: !0,
  state: Fy,
  getters: Ny,
  actions: Ky,
  mutations: Yy
}, Jy = {
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
  appendixSectionTitles: B_
}, Zy = {
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
}, ex = {
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
}, tx = {
  namespaced: !0,
  state: Jy,
  getters: Zy,
  actions: {},
  mutations: ex
}, nx = {
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
}, ox = {
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
function sx(o) {
  return C(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: s } = t.application;
    if ((r = n.nearbyPages[s]) != null && r.length)
      return;
    const a = yield ro.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const ax = { fetchNearbyPages: sx }, ix = {
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
}, rx = {
  namespaced: !0,
  state: nx,
  getters: ox,
  actions: ax,
  mutations: ix
}, lx = {
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
}, cx = {
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
}, ux = {
  namespaced: !0,
  state: lx,
  mutations: cx
}, dx = window.Vuex.createStore, gx = dx({
  modules: { translator: Qy, suggestions: tx, mediawiki: rx, application: ux }
});
function px() {
  return Kh().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Kh() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const mx = typeof Proxy == "function", hx = "devtools-plugin:setup", fx = "plugin:settings:set";
let mo, Bc;
function wx() {
  var e;
  return mo !== void 0 || (typeof window != "undefined" && window.performance ? (mo = !0, Bc = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (mo = !0, Bc = global.perf_hooks.performance) : mo = !1), mo;
}
function vx() {
  return wx() ? Bc.now() : Date.now();
}
class _x {
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
        return vx();
      }
    }, n && n.on(fx, (r, l) => {
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
function Sx(e, t) {
  const n = e, o = Kh(), s = px(), a = mx && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(hx, e, t);
  else {
    const r = a ? new _x(n, s) : null;
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
const Yh = window.Vue.getCurrentInstance, Ho = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const Yt = window.Vue.computed, sa = window.Vue.unref, yx = window.Vue.watchEffect, Qh = window.Vue.defineComponent, xx = window.Vue.reactive, Jh = window.Vue.h, $r = window.Vue.provide, Cx = window.Vue.ref, Zh = window.Vue.watch, bx = window.Vue.shallowRef, kx = window.Vue.shallowReactive, $x = window.Vue.nextTick, wn = typeof window != "undefined";
function Vx(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const Q = Object.assign;
function Vr(e, t) {
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
const Ex = /\/$/, Lx = (e) => e.replace(Ex, "");
function Er(e, t, n = "/") {
  let o, s = {}, a = "", r = "";
  const l = t.indexOf("#");
  let u = t.indexOf("?");
  return l < u && l >= 0 && (u = -1), u > -1 && (o = t.slice(0, u), a = t.slice(u + 1, l > -1 ? l : t.length), s = e(a)), l > -1 && (o = o || t.slice(0, l), r = t.slice(l, t.length)), o = Tx(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + r,
    path: o,
    query: s,
    hash: r
  };
}
function Ax(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function fd(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function wd(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && In(t.matched[o], n.matched[s]) && ef(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function In(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function ef(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Dx(e[n], t[n]))
      return !1;
  return !0;
}
function Dx(e, t) {
  return ct(e) ? vd(e, t) : ct(t) ? vd(t, e) : e === t;
}
function vd(e, t) {
  return ct(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function Tx(e, t) {
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
function Bx(e) {
  if (!e)
    if (wn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Lx(e);
}
const Px = /^[^#]+#/;
function Fx(e, t) {
  return e.replace(Px, "#") + t;
}
function Nx(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const Qi = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function Mx(e) {
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
    t = Nx(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function _d(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Pc = /* @__PURE__ */ new Map();
function Ux(e, t) {
  Pc.set(e, t);
}
function Ix(e) {
  const t = Pc.get(e);
  return Pc.delete(e), t;
}
let Rx = () => location.protocol + "//" + location.host;
function tf(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = s.includes(e.slice(a)) ? e.slice(a).length : 1, u = s.slice(l);
    return u[0] !== "/" && (u = "/" + u), fd(u, "");
  }
  return fd(n, e) + o + s;
}
function zx(e, t, n, o) {
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
    g.state && g.replaceState(Q({}, g.state, { scroll: Qi() }), "");
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
function Sd(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Qi() : null
  };
}
function Ox(e) {
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
    const c = e.indexOf("#"), g = c > -1 ? (n.host && document.querySelector("base") ? e : e.slice(c)) + u : Rx() + e + u;
    try {
      t[i ? "replaceState" : "pushState"](d, "", g), s.value = d;
    } catch (p) {
      ({}).NODE_ENV !== "production" ? W("Error with push/replace State", p) : console.error(p), n[i ? "replace" : "assign"](g);
    }
  }
  function r(u, d) {
    const i = Q({}, t.state, Sd(
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
        scroll: Qi()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && W(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(i.current, i, !0);
    const c = Q({}, Sd(o.value, u, null), { position: i.position + 1 }, d);
    a(u, c, !1), o.value = u;
  }
  return {
    location: o,
    state: s,
    push: l,
    replace: r
  };
}
function jx(e) {
  e = Bx(e);
  const t = Ox(e), n = zx(e, t.state, t.location, t.replace);
  function o(a, r = !0) {
    r || n.pauseListeners(), history.go(a);
  }
  const s = Q({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: Fx.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function Hx(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && W(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), jx(e);
}
function qx(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function nf(e) {
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
var yd;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(yd || (yd = {}));
const Gx = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${Wx(t)}" via a navigation guard.`;
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
  return {}.NODE_ENV !== "production" ? Q(new Error(Gx[e](t)), {
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
const Xx = ["params", "query", "hash"];
function Wx(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of Xx)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const xd = "[^/]+?", Kx = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Yx = /[.+*?^${}()[\]/\\]/g;
function Qx(e, t) {
  const n = Q({}, Kx, t), o = [];
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
        c || (s += "/"), s += g.value.replace(Yx, "\\$&"), p += 40;
      else if (g.type === 1) {
        const { value: m, repeatable: h, optional: f, regexp: w } = g;
        a.push({
          name: m,
          repeatable: h,
          optional: f
        });
        const _ = w || xd;
        if (_ !== xd) {
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
          if (ct(w) && !h)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const _ = ct(w) ? w.join("/") : w;
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
function Jx(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function Zx(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = Jx(o[n], s[n]);
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
const eC = {
  type: 0,
  value: ""
}, tC = /[a-zA-Z0-9_]/;
function nC(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[eC]];
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
        u === "(" ? n = 2 : tC.test(u) ? g() : (c(), n = 0, u !== "*" && u !== "?" && u !== "+" && l--);
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
function oC(e, t, n) {
  const o = Qx(nC(e.path), n);
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
function sC(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = $d({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(i) {
    return o.get(i);
  }
  function a(i, c, g) {
    const p = !g, m = aC(i);
    ({}).NODE_ENV !== "production" && cC(m, c), m.aliasOf = g && g.record;
    const h = $d(t, i), f = [
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
      if (w = oC(y, c, h), {}.NODE_ENV !== "production" && c && S[0] === "/" && uC(w, c), g ? (g.alias.push(w), {}.NODE_ENV !== "production" && lC(g, w)) : (_ = _ || w, _ !== w && _.alias.push(w), p && i.name && !kd(w) && r(i.name)), m.children) {
        const b = m.children;
        for (let E = 0; E < b.length; E++)
          a(b[E], w, g && g.children[E]);
      }
      g = g || w, (w.record.components && Object.keys(w.record.components).length || w.record.name || w.record.redirect) && u(w);
    }
    return _ ? () => {
      r(_);
    } : aa;
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
    for (; c < n.length && Zx(i, n[c]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[c].record.path || !of(i, n[c])); )
      c++;
    n.splice(c, 0, i), i.record.name && !kd(i) && o.set(i.record.name, i);
  }
  function d(i, c) {
    let g, p = {}, m, h;
    if ("name" in i && i.name) {
      if (g = o.get(i.name), !g)
        throw qo(1, {
          location: i
        });
      if ({}.NODE_ENV !== "production") {
        const _ = Object.keys(i.params || {}).filter((y) => !g.keys.find((S) => S.name === y));
        _.length && W(`Discarded invalid param(s) "${_.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = g.record.name, p = Q(
        // paramsFromLocation is a new object
        bd(
          c.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((_) => !_.optional).map((_) => _.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && bd(i.params, g.keys.map((_) => _.name))
      ), m = g.stringify(p);
    } else if ("path" in i)
      m = i.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && W(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((_) => _.re.test(m)), g && (p = g.parse(m), h = g.record.name);
    else {
      if (g = c.name ? o.get(c.name) : n.find((_) => _.re.test(c.path)), !g)
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
      meta: rC(f)
    };
  }
  return e.forEach((i) => a(i)), { addRoute: a, resolve: d, removeRoute: r, getRoutes: l, getRecordMatcher: s };
}
function bd(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function aC(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: iC(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function iC(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function kd(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function rC(e) {
  return e.reduce((t, n) => Q(t, n.meta), {});
}
function $d(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Nc(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function lC(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Nc.bind(null, n)))
      return W(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Nc.bind(null, n)))
      return W(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function cC(e, t) {
  t && t.record.name && !e.name && !e.path && W(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function uC(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Nc.bind(null, n)))
      return W(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function of(e, t) {
  return t.children.some((n) => n === e || of(e, n));
}
const sf = /#/g, dC = /&/g, gC = /\//g, pC = /=/g, mC = /\?/g, af = /\+/g, hC = /%5B/g, fC = /%5D/g, rf = /%5E/g, wC = /%60/g, lf = /%7B/g, vC = /%7C/g, cf = /%7D/g, _C = /%20/g;
function du(e) {
  return encodeURI("" + e).replace(vC, "|").replace(hC, "[").replace(fC, "]");
}
function SC(e) {
  return du(e).replace(lf, "{").replace(cf, "}").replace(rf, "^");
}
function Mc(e) {
  return du(e).replace(af, "%2B").replace(_C, "+").replace(sf, "%23").replace(dC, "%26").replace(wC, "`").replace(lf, "{").replace(cf, "}").replace(rf, "^");
}
function yC(e) {
  return Mc(e).replace(pC, "%3D");
}
function xC(e) {
  return du(e).replace(sf, "%23").replace(mC, "%3F");
}
function CC(e) {
  return e == null ? "" : xC(e).replace(gC, "%2F");
}
function ca(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && W(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function bC(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(af, " "), r = a.indexOf("="), l = ca(r < 0 ? a : a.slice(0, r)), u = r < 0 ? null : ca(a.slice(r + 1));
    if (l in t) {
      let d = t[l];
      ct(d) || (d = t[l] = [d]), d.push(u);
    } else
      t[l] = u;
  }
  return t;
}
function Vd(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = yC(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (ct(o) ? o.map((a) => a && Mc(a)) : [o && Mc(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function kC(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = ct(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const $C = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), Ed = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), Ji = Symbol({}.NODE_ENV !== "production" ? "router" : ""), uf = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), Uc = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
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
function Mn(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((r, l) => {
    const u = (c) => {
      c === !1 ? l(qo(4, {
        from: n,
        to: t
      })) : c instanceof Error ? l(c) : qx(c) ? l(qo(2, {
        from: t,
        to: c
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof c == "function" && a.push(c), r());
    }, d = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? VC(u, t, n) : u);
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
function VC(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && W(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function Lr(e, t, n, o) {
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
        if (EC(l)) {
          const d = (l.__vccOpts || l)[t];
          d && s.push(Mn(d, n, o, a, r));
        } else {
          let u = l();
          ({}).NODE_ENV !== "production" && !("catch" in u) && (W(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), u = Promise.resolve(u)), s.push(() => u.then((d) => {
            if (!d)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = Vx(d) ? d.default : d;
            a.components[r] = i;
            const g = (i.__vccOpts || i)[t];
            return g && Mn(g, n, o, a, r)();
          }));
        }
    }
  }
  return s;
}
function EC(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Ld(e) {
  const t = Ho(Ji), n = Ho(uf), o = Yt(() => t.resolve(sa(e.to))), s = Yt(() => {
    const { matched: u } = o.value, { length: d } = u, i = u[d - 1], c = n.matched;
    if (!i || !c.length)
      return -1;
    const g = c.findIndex(In.bind(null, i));
    if (g > -1)
      return g;
    const p = Ad(u[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Ad(i) === p && // avoid comparing the child with its parent
      c[c.length - 1].path !== p ? c.findIndex(In.bind(null, u[d - 2])) : g
    );
  }), a = Yt(() => s.value > -1 && TC(n.params, o.value.params)), r = Yt(() => s.value > -1 && s.value === n.matched.length - 1 && ef(n.params, o.value.params));
  function l(u = {}) {
    return DC(u) ? t[sa(e.replace) ? "replace" : "push"](
      sa(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(aa) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && wn) {
    const u = Yh();
    if (u) {
      const d = {
        route: o.value,
        isActive: a.value,
        isExactActive: r.value
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(d), yx(() => {
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
const LC = /* @__PURE__ */ Qh({
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
  useLink: Ld,
  setup(e, { slots: t }) {
    const n = xx(Ld(e)), { options: o } = Ho(Ji), s = Yt(() => ({
      [Dd(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Dd(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
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
}), AC = LC;
function DC(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function TC(e, t) {
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
function Ad(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Dd = (e, t, n) => e != null ? e : t != null ? t : n, BC = /* @__PURE__ */ Qh({
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
    ({}).NODE_ENV !== "production" && FC();
    const o = Ho(Uc), s = Yt(() => e.route || o.value), a = Ho(Ed, 0), r = Yt(() => {
      let d = sa(a);
      const { matched: i } = s.value;
      let c;
      for (; (c = i[d]) && !c.components; )
        d++;
      return d;
    }), l = Yt(() => s.value.matched[r.value]);
    $r(Ed, Yt(() => r.value + 1)), $r($C, l), $r(Uc, s);
    const u = Cx();
    return Zh(() => [u.value, l.value, e.name], ([d, i, c], [g, p, m]) => {
      i && (i.instances[c] = d, p && p !== i && d && d === g && (i.leaveGuards.size || (i.leaveGuards = p.leaveGuards), i.updateGuards.size || (i.updateGuards = p.updateGuards))), d && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !In(i, p) || !g) && (i.enterCallbacks[c] || []).forEach((h) => h(d));
    }, { flush: "post" }), () => {
      const d = s.value, i = e.name, c = l.value, g = c && c.components[i];
      if (!g)
        return Td(n.default, { Component: g, route: d });
      const p = c.props[i], m = p ? p === !0 ? d.params : typeof p == "function" ? p(d) : p : null, f = Jh(g, Q({}, m, t, {
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
        Td(n.default, { Component: f, route: d }) || f
      );
    };
  }
});
function Td(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const PC = BC;
function FC() {
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
function gs(e, t) {
  const n = Q({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => HC(o, ["instances", "children", "aliasOf"]))
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
let NC = 0;
function MC(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = NC++;
  Sx({
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
          backgroundColor: df
        });
      }
      ct(c.__vrl_devtools) && (c.__devtoolsApi = s, c.__vrl_devtools.forEach((g) => {
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
      c.forEach(wf), i.filter && (c = c.filter((g) => (
        // save matches state based on the payload
        Ic(g, i.filter.toLowerCase())
      ))), c.forEach((g) => ff(g, t.currentRoute.value)), i.rootNodes = c.map(hf);
    }
    let d;
    s.on.getInspectorTree((i) => {
      d = i, i.app === e && i.inspectorId === l && u();
    }), s.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === l) {
        const g = n.getRoutes().find((p) => p.record.__vd_id === i.nodeId);
        g && (i.state = {
          options: IC(g)
        });
      }
    }), s.sendInspectorTree(l), s.sendInspectorState(l);
  });
}
function UC(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function IC(e) {
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
        display: e.keys.map((o) => `${o.name}${UC(o)}`).join(" "),
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
const df = 15485081, gf = 2450411, pf = 8702998, RC = 2282478, mf = 16486972, zC = 6710886;
function hf(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: RC
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
    backgroundColor: zC
  });
  let o = n.__vd_id;
  return o == null && (o = String(OC++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(hf)
  };
}
let OC = 0;
const jC = /^\/(.*)\/([a-z]*)$/;
function ff(e, t) {
  const n = t.matched.length && In(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => In(o, e.record))), e.children.forEach((o) => ff(o, t));
}
function wf(e) {
  e.__vd_match = !1, e.children.forEach(wf);
}
function Ic(e, t) {
  const n = String(e.re).match(jC);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => Ic(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = ca(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => Ic(r, t));
}
function HC(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function qC(e) {
  const t = sC(e.routes, e), n = e.parseQuery || bC, o = e.stringifyQuery || Vd, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = ds(), r = ds(), l = ds(), u = bx(Cn);
  let d = Cn;
  wn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = Vr.bind(null, (v) => "" + v), c = Vr.bind(null, CC), g = (
    // @ts-expect-error: intentionally avoid the type check
    Vr.bind(null, ca)
  );
  function p(v, A) {
    let D, F;
    return nf(v) ? (D = t.getRecordMatcher(v), F = A) : F = v, t.addRoute(F, D);
  }
  function m(v) {
    const A = t.getRecordMatcher(v);
    A ? t.removeRoute(A) : {}.NODE_ENV !== "production" && W(`Cannot remove non-existent route "${String(v)}"`);
  }
  function h() {
    return t.getRoutes().map((v) => v.record);
  }
  function f(v) {
    return !!t.getRecordMatcher(v);
  }
  function w(v, A) {
    if (A = Q({}, A || u.value), typeof v == "string") {
      const z = Er(n, v, A.path), ie = t.resolve({ path: z.path }, A), Ze = s.createHref(z.fullPath);
      return {}.NODE_ENV !== "production" && (Ze.startsWith("//") ? W(`Location "${v}" resolved to "${Ze}". A resolved location cannot start with multiple slashes.`) : ie.matched.length || W(`No match found for location with path "${v}"`)), Q(z, ie, {
        params: g(ie.params),
        hash: ca(z.hash),
        redirectedFrom: void 0,
        href: Ze
      });
    }
    let D;
    if ("path" in v)
      ({}).NODE_ENV !== "production" && "params" in v && !("name" in v) && // @ts-expect-error: the type is never
      Object.keys(v.params).length && W(`Path "${v.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), D = Q({}, v, {
        path: Er(n, v.path, A.path).path
      });
    else {
      const z = Q({}, v.params);
      for (const ie in z)
        z[ie] == null && delete z[ie];
      D = Q({}, v, {
        params: c(z)
      }), A.params = c(A.params);
    }
    const F = t.resolve(D, A), X = v.hash || "";
    ({}).NODE_ENV !== "production" && X && !X.startsWith("#") && W(`A \`hash\` should always start with the character "#". Replace "${X}" with "#${X}".`), F.params = i(g(F.params));
    const ue = Ax(o, Q({}, v, {
      hash: SC(X),
      path: F.path
    })), H = s.createHref(ue);
    return {}.NODE_ENV !== "production" && (H.startsWith("//") ? W(`Location "${v}" resolved to "${H}". A resolved location cannot start with multiple slashes.`) : F.matched.length || W(`No match found for location with path "${"path" in v ? v.path : v}"`)), Q({
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
        o === Vd ? kC(v.query) : v.query || {}
      )
    }, F, {
      redirectedFrom: void 0,
      href: H
    });
  }
  function _(v) {
    return typeof v == "string" ? Er(n, v, u.value.path) : Q({}, v);
  }
  function y(v, A) {
    if (d !== v)
      return qo(8, {
        from: A,
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
    const A = v.matched[v.matched.length - 1];
    if (A && A.redirect) {
      const { redirect: D } = A;
      let F = typeof D == "function" ? D(v) : D;
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
  function x(v, A) {
    const D = d = w(v), F = u.value, X = v.state, ue = v.force, H = v.replace === !0, z = E(D);
    if (z)
      return x(
        Q(_(z), {
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
    return !ue && wd(o, F, D) && (Ze = qo(16, { to: ie, from: F }), Be(
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
      ) ? ke : Xe(ke)
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
          wd(o, w(ke.to), ie) && // and we have done it a couple of times
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
            }, _(ke.to), {
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
  function R(v, A) {
    const D = y(v, A);
    return D ? Promise.reject(D) : Promise.resolve();
  }
  function L(v) {
    const A = P.values().next().value;
    return A && typeof A.runWithContext == "function" ? A.runWithContext(v) : v();
  }
  function B(v, A) {
    let D;
    const [F, X, ue] = GC(v, A);
    D = Lr(F.reverse(), "beforeRouteLeave", v, A);
    for (const z of F)
      z.leaveGuards.forEach((ie) => {
        D.push(Mn(ie, v, A));
      });
    const H = R.bind(null, v, A);
    return D.push(H), Z(D).then(() => {
      D = [];
      for (const z of a.list())
        D.push(Mn(z, v, A));
      return D.push(H), Z(D);
    }).then(() => {
      D = Lr(X, "beforeRouteUpdate", v, A);
      for (const z of X)
        z.updateGuards.forEach((ie) => {
          D.push(Mn(ie, v, A));
        });
      return D.push(H), Z(D);
    }).then(() => {
      D = [];
      for (const z of ue)
        if (z.beforeEnter)
          if (ct(z.beforeEnter))
            for (const ie of z.beforeEnter)
              D.push(Mn(ie, v, A));
          else
            D.push(Mn(z.beforeEnter, v, A));
      return D.push(H), Z(D);
    }).then(() => (v.matched.forEach((z) => z.enterCallbacks = {}), D = Lr(ue, "beforeRouteEnter", v, A), D.push(H), Z(D))).then(() => {
      D = [];
      for (const z of r.list())
        D.push(Mn(z, v, A));
      return D.push(H), Z(D);
    }).catch((z) => en(
      z,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? z : Promise.reject(z));
  }
  function j(v, A, D) {
    l.list().forEach((F) => L(() => F(v, A, D)));
  }
  function G(v, A, D, F, X) {
    const ue = y(v, A);
    if (ue)
      return ue;
    const H = A === Cn, z = wn ? history.state : {};
    D && (F || H ? s.replace(v.fullPath, Q({
      scroll: H && z && z.scroll
    }, X)) : s.push(v.fullPath, X)), u.value = v, Be(v, A, D, H), Xe();
  }
  let Y;
  function we() {
    Y || (Y = s.listen((v, A, D) => {
      if (!U.listening)
        return;
      const F = w(v), X = E(F);
      if (X) {
        x(Q(X, { replace: !0 }), F).catch(aa);
        return;
      }
      d = F;
      const ue = u.value;
      wn && Ux(_d(ue.fullPath, D.delta), Qi()), B(F, ue).catch((H) => en(
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
  function te(v, A, D) {
    Xe(v);
    const F = se.list();
    return F.length ? F.forEach((X) => X(v, A, D)) : ({}.NODE_ENV !== "production" && W("uncaught error during route navigation:"), console.error(v)), Promise.reject(v);
  }
  function Ne() {
    return ae && u.value !== Cn ? Promise.resolve() : new Promise((v, A) => {
      q.add([v, A]);
    });
  }
  function Xe(v) {
    return ae || (ae = !v, we(), q.list().forEach(([A, D]) => v ? D(v) : A()), q.reset()), v;
  }
  function Be(v, A, D, F) {
    const { scrollBehavior: X } = e;
    if (!wn || !X)
      return Promise.resolve();
    const ue = !D && Ix(_d(v.fullPath, 0)) || (F || !D) && history.state && history.state.scroll || null;
    return $x().then(() => X(v, A, ue)).then((H) => H && Mx(H)).catch((H) => te(H, v, A));
  }
  const J = (v) => s.go(v);
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
    install(v) {
      const A = this;
      v.component("RouterLink", AC), v.component("RouterView", PC), v.config.globalProperties.$router = A, Object.defineProperty(v.config.globalProperties, "$route", {
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
      v.provide(Ji, A), v.provide(uf, kx(D)), v.provide(Uc, u);
      const F = v.unmount;
      P.add(v), v.unmount = function() {
        P.delete(v), P.size < 1 && (d = Cn, Y && Y(), Y = null, u.value = Cn, I = !1, ae = !1), F();
      }, {}.NODE_ENV !== "production" && wn && MC(v, A, t);
    }
  };
  function Z(v) {
    return v.reduce((A, D) => A.then(() => L(D)), Promise.resolve());
  }
  return U;
}
function GC(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let r = 0; r < a; r++) {
    const l = t.matched[r];
    l && (e.matched.find((d) => In(d, l)) ? o.push(l) : n.push(l));
    const u = e.matched[r];
    u && (t.matched.find((d) => In(d, u)) || s.push(u));
  }
  return [n, o, s];
}
function Je() {
  return Ho(Ji);
}
const XC = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), r = parseInt(e.slice(12, 14)), l = new Date(Date.UTC(t, n, o, s, a, r)), d = (/* @__PURE__ */ new Date()).getTime() - l.getTime();
  return Math.round(d / (1e3 * 3600 * 24));
}, WC = (e) => {
  const t = XC(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const xt = window.Vue.unref, ho = window.Vue.createVNode, tn = window.Vue.createElementVNode, Bd = window.Vue.renderSlot, Pd = window.Vue.withModifiers, Ar = window.Vue.toDisplayString, Dr = window.Vue.withCtx, KC = window.Vue.openBlock, YC = window.Vue.createElementBlock, QC = window.Vue.createCommentVNode, JC = { class: "col shrink pe-4" }, ZC = { class: "col" }, eb = { class: "cx-translation__details column justify-between ma-0" }, tb = { class: "row ma-0" }, nb = { class: "col grow" }, ob = { class: "col shrink ps-2" }, sb = ["dir", "textContent"], ab = ["dir", "textContent"], ib = ["textContent"], rb = window.Vuex.useStore, lb = window.Vue.computed, vf = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: jc,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e, { emit: t }) {
    const n = e, o = rb(), s = (l, u) => {
      const d = o.getters["mediawiki/getPage"](l, u);
      return d == null ? void 0 : d.thumbnail;
    }, a = fe(), r = lb(() => {
      const l = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, u = WC(n.translation.startTimestamp);
      return a.i18n(
        l[u.postfix],
        u.value
      );
    });
    return (l, u) => e.translation ? (KC(), YC("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: u[1] || (u[1] = Pd((d) => l.$emit("click"), ["stop"]))
    }, [
      tn("div", JC, [
        ho(xt(Oc), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      tn("div", ZC, [
        tn("div", eb, [
          tn("div", tb, [
            tn("div", nb, [
              Bd(l.$slots, "title")
            ]),
            tn("div", ob, [
              ho(xt(Qe), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: u[0] || (u[0] = Pd((d) => l.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          Bd(l.$slots, "mid-content"),
          ho(xt(N), { class: "cx-translation__footer ma-0" }, {
            default: Dr(() => [
              ho(xt(k), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: Dr(() => [
                  tn("span", {
                    class: "mw-ui-autonym",
                    dir: xt(O.getDir)(e.translation.sourceLanguage),
                    textContent: Ar(xt(O.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, sb),
                  ho(xt(Qe), {
                    icon: xt(L0),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  tn("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: xt(O.getDir)(e.translation.targetLanguage),
                    textContent: Ar(xt(O.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, ab)
                ]),
                _: 1
              }),
              ho(xt(k), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: Dr(() => [
                  tn("span", {
                    textContent: Ar(r.value)
                  }, null, 8, ib)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : QC("", !0);
  }
};
const ps = window.Vue.unref, Fd = window.Vue.toDisplayString, cb = window.Vue.normalizeClass, ub = window.Vue.createElementVNode, Tr = window.Vue.openBlock, db = window.Vue.createElementBlock, Nd = window.Vue.createCommentVNode, Md = window.Vue.createVNode, Ba = window.Vue.withCtx, Ud = window.Vue.createBlock, gb = ["lang", "textContent"], pb = ["lang", "textContent"], mb = window.Vue.computed, hb = window.Vue.inject, fb = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: Oi,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = hb("colors").gray200, s = mb(
      () => {
        var u;
        return ((u = t.translation.progress) == null ? void 0 : u.any) * 100 || 0;
      }
    ), a = Je(), { setTranslationURLParams: r } = T(), l = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (u, d) => (Tr(), Ud(vf, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": ps(ah),
      onActionIconClicked: d[0] || (d[0] = (i) => u.$emit("delete-translation")),
      onClick: l
    }, {
      title: Ba(() => [
        ub("h5", {
          class: cb(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: Fd(e.translation.sourceTitle)
        }, null, 10, gb),
        e.translation.isLeadSectionTranslation ? Nd("", !0) : (Tr(), db("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: Fd(e.translation.sourceSectionTitle)
        }, null, 8, pb))
      ]),
      "mid-content": Ba(() => [
        e.translation.progress ? (Tr(), Ud(ps(N), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Ba(() => [
            Md(ps(k), null, {
              default: Ba(() => [
                Md(ps(lh), {
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
        })) : Nd("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, wb = window.Vuex.useStore, _f = [], vb = (e, t, n) => _f.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), _b = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  _f.push(o);
}, Sb = () => {
  const e = wb();
  return (t, n, o) => C(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !vb(t, n, o) && (s = yield pe.fetchSectionSuggestion(
      t,
      o,
      n
    ), _b(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, Sf = "cx-translation-session-position-", yf = () => Sf + mw.user.sessionId(), yb = () => {
  const e = parseInt(
    mw.storage.get(yf())
  );
  return isNaN(e) ? 0 : e;
}, xb = function(e) {
  const t = yf();
  mw.storage.set(t, e);
}, Cb = () => {
  Object.keys(mw.storage.store).filter((e) => e.startsWith(Sf)).forEach((e) => mw.storage.remove(e));
}, bb = () => {
  const e = yb();
  return e % 10 === 0 && Cb(), xb(e + 1), e;
};
let Pa = null;
const kb = (e) => {
  if (Pa)
    return Promise.resolve(Pa);
  const t = "https://en.wikipedia.org/w/api.php", n = new URLSearchParams({
    action: "query",
    meta: "globaluserinfo",
    guiuser: e,
    guiprop: "editcount",
    formatversion: 2,
    origin: "*",
    format: "json"
  }), o = t + "?" + n;
  return fetch(o).then((s) => s.json()).then((s) => (Pa = s.query.globaluserinfo.editcount, Pa)).catch((s) => {
    mw.log.error("Error while fetching global edit count for user. ", s);
  });
}, $b = (e) => e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
function Vb(e) {
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
    content_translation_session_position: bb()
  };
  return a ? Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, l, e))
  ) : kb(r).then((u) => {
    mw.eventLog.submit(
      s,
      Object.assign({}, l, e, {
        user_global_edit_count: u,
        user_global_edit_count_bucket: $b(u)
      })
    );
  });
}
const Eb = window.Vuex.useStore, Lb = (e, t, n) => [
  `Event ${e} is missing ${t}.`,
  `Current URL params: ${location.href}`,
  `Previous route: ${n}`
], St = () => {
  const e = Eb(), { previousRoute: t } = Ee(e), n = [
    "event_source",
    "translation_source_language",
    "translation_target_language",
    "translation_source_title"
  ], o = (s) => {
    for (const a in n)
      if (s[a] === null) {
        const r = Lb(
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
  return (s) => (s.access_method || (s.access_method = Xo ? "desktop" : "mobile web"), o(s), Vb(s));
}, xf = window.Vue.ref, Cf = xf(null), Rc = xf(null), Ab = (e) => {
  e || mw.errorLogger.logError(
    new Error("[CX] Empty event source set"),
    "error.contenttranslation"
  ), Cf.value = e;
}, Db = (e) => {
  Rc.value = e;
}, Zi = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = T(), s = St();
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
      return Rc.value && (r.event_context = Rc.value), o.value ? (r.translation_source_section = o.value, r.translation_type = "section") : r.translation_type = "article", s(r);
    },
    setStartTranslationEventSource: Ab,
    setStartTranslationEventContext: Db
  };
}, wa = () => {
  const e = Je(), t = lu(), { setTranslationURLParams: n } = T(), { setStartTranslationEventSource: o, setStartTranslationEventContext: s } = Zi();
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
const Br = window.Vue.withModifiers, Pr = window.Vue.toDisplayString, Id = window.Vue.createElementVNode, Ct = window.Vue.unref, On = window.Vue.createVNode, Tb = window.Vue.createTextVNode, Fa = window.Vue.openBlock, Rd = window.Vue.createElementBlock, zd = window.Vue.createCommentVNode, Od = window.Vue.createBlock, fo = window.Vue.withCtx, Bb = ["lang", "href", "textContent"], Pb = {
  key: 0,
  class: "cx-published-translation__personal-draft-indicator"
}, Fb = {
  key: 2,
  class: "flex"
}, Fr = window.Vue.computed, jd = window.Vue.ref, Hd = window.Codex.CdxButton, Nr = window.Codex.CdxIcon, Nb = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: uu,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = jd(!0), o = jd(null), s = Fr(() => {
      var p;
      return (p = o.value) == null ? void 0 : p.missingSections;
    }), a = Fr(
      () => s.value && Object.keys(s.value)[0]
    );
    Sb()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((p) => o.value = p).catch((p) => console.log(p)).finally(() => n.value = !1);
    const { setSectionURLParam: l } = T(), u = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, d = wa(), i = (p) => {
      d(
        t.translation.sourceTitle,
        t.translation.sourceLanguage,
        t.translation.targetLanguage,
        "continue_published"
      ), p && l(p);
    }, c = mw.config.get("wgNamespaceIds"), g = Fr(() => new mw.Title(t.translation.targetTitle).getNamespaceId() === c.user);
    return (p, m) => (Fa(), Od(vf, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: u
    }, {
      title: fo(() => [
        Id("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: m[0] || (m[0] = Br(() => {
          }, ["stop"])),
          textContent: Pr(e.translation.sourceTitle)
        }, null, 8, Bb)
      ]),
      "mid-content": fo(() => [
        On(Ct(N), { class: "ma-0" }, {
          default: fo(() => [
            On(Ct(k), null, {
              default: fo(() => [
                g.value ? (Fa(), Rd("div", Pb, [
                  On(Ct(Nr), {
                    icon: Ct(Rh),
                    class: "me-1",
                    size: "small"
                  }, null, 8, ["icon"]),
                  Tb(" " + Pr(p.$i18n("sx-published-translation-personal-draft-indicator")), 1)
                ])) : zd("", !0),
                n.value ? (Fa(), Od(Ct(lt), { key: 1 })) : s.value ? (Fa(), Rd("div", Fb, [
                  On(Ct(Hd), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: m[1] || (m[1] = Br((h) => i(a.value), ["stop"]))
                  }, {
                    default: fo(() => [
                      On(Ct(Nr), {
                        class: "me-1",
                        icon: Ct(Bh)
                      }, null, 8, ["icon"]),
                      Id("span", null, Pr(a.value), 1)
                    ]),
                    _: 1
                  }),
                  On(Ct(Hd), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": p.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: m[2] || (m[2] = Br((h) => i(null), ["stop"]))
                  }, {
                    default: fo(() => [
                      On(Ct(Nr), { icon: Ct(au) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : zd("", !0)
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
}, Mb = window.Vuex.useStore, Ub = () => {
  const { commit: e } = Mb(), t = St();
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
const Ib = window.Vue.resolveDirective, Mr = window.Vue.createElementVNode, Rb = window.Vue.withDirectives, Ur = window.Vue.unref, qd = window.Vue.createVNode, Gd = window.Vue.withCtx, zb = window.Vue.openBlock, Ob = window.Vue.createBlock, jb = { class: "pa-4" }, Hb = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, qb = {
  __name: "SXConfirmTranslationDeletionDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: Oi,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "continue-translation",
    "discard-translation"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, s = () => o("update:modelValue", !1), a = Ub(), r = () => {
      a(n.translation), s();
    };
    return (l, u) => {
      const d = Ib("i18n");
      return zb(), Ob(Ur(_t), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: Gd(() => [
          Mr("div", Hb, [
            qd(Ur(qe), {
              class: "grow py-3",
              large: "",
              label: l.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            qd(Ur(qe), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: l.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: r
            }, null, 8, ["label"])
          ])
        ]),
        default: Gd(() => [
          Mr("div", jb, [
            Rb(Mr("span", null, null, 512), [
              [d, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function Gb(e, t, n) {
  return C(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield Xb(t, n)).filter((s) => e.includes(s)) : [];
  });
}
function Xd(e, t, n) {
  return C(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(O.sortByAutonym) : (yield Gb(e, t, n)).sort(O.sortByAutonym);
  });
}
function Xb(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function Wb() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function Kb(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
const Yb = window.Vue.computed;
function Qb(e, t) {
  const n = Yb(() => {
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
const Ir = window.Vue.ref, Rr = window.Vue.watch, Jb = window.Vue.computed;
function bf(e, t, n) {
  const o = Ir(""), s = Ir(-1), a = Ir(null), r = () => {
    s.value++, s.value >= l.value.length && (s.value = 0);
  }, l = Jb(() => e.value ? t.value : n && n.value ? [...n.value, ...t.value] : []), u = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return Rr(e, () => {
    s.value = -1;
  }), Rr(t, () => {
    t.value && l.value.length > 0 && (s.value = 0);
  }), Rr(s, () => C(this, null, function* () {
    var d;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = l.value[s.value], (d = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || d.scrollIntoView(!1);
  })), { next: r, prev: u, keyboardNavigationContainer: a, selectedItem: o };
}
function gu(e, t, n) {
  let o;
  const s = (...a) => {
    const r = this, l = () => {
      o = null, n || e.apply(r, a);
    };
    n && !o && e.apply(r, a), (!o || t) && (clearTimeout(o), o = setTimeout(l, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const Na = window.Vue.renderSlot, Le = window.Vue.unref, Zb = window.Vue.isRef, Wd = window.Vue.createVNode, ms = window.Vue.withModifiers, hs = window.Vue.withKeys, bn = window.Vue.createElementVNode, ek = window.Vue.resolveDirective, Ma = window.Vue.withDirectives, zr = window.Vue.renderList, Or = window.Vue.Fragment, nn = window.Vue.openBlock, on = window.Vue.createElementBlock, Kd = window.Vue.toDisplayString, Ua = window.Vue.normalizeClass, jr = window.Vue.createCommentVNode, tk = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, nk = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, ok = { class: "results px-3 pt-4" }, sk = { class: "results-header ps-8 pb-2" }, ak = { class: "results-languages--suggestions pa-0 ma-0" }, ik = ["lang", "dir", "aria-selected", "onClick", "textContent"], rk = { class: "results px-3 pt-4" }, lk = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, ck = ["lang", "dir", "aria-selected", "onClick", "textContent"], uk = ["aria-selected"], dk = { class: "no-results px-3 py-4" }, gk = { class: "ps-8" }, Ia = window.Vue.ref, pk = window.Vue.watch, mk = window.Vue.onMounted, Yd = window.Vue.computed, kf = {
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
      default: Wb
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = Ia(null), a = Ia(""), r = Ia([]), l = Ia(n.suggestions), u = Yd(
      () => Kb(r.value)
    ), d = Yd(() => {
      const S = r.value.length;
      return S < 10 ? "few-results" : S < 30 ? "some-results" : "many-results";
    }), i = (S) => o("select", S), c = () => o("close"), { autocompletion: g, onTabSelect: p } = Qb(
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
    return pk(a, gu(() => C(this, null, function* () {
      r.value = yield Xd(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), mk(() => C(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), r.value = yield Xd(
        n.languages,
        "",
        n.searchAPI
      );
    })), (S, b) => {
      const E = ek("i18n");
      return nn(), on("div", {
        ref_key: "keyboardNavigationContainer",
        ref: f,
        class: "mw-ui-language-selector"
      }, [
        Na(S.$slots, "search", {}, () => [
          bn("div", tk, [
            Wd(Le(Ac), {
              value: Le(g),
              "onUpdate:value": b[0] || (b[0] = (x) => Zb(g) ? g.value = x : null),
              icon: Le(Pu),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            Wd(Le(Ac), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": b[1] || (b[1] = (x) => a.value = x),
              class: "mw-ui-language-selector__search pa-4",
              icon: Le(Pu),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                hs(ms(_, ["prevent"]), ["enter"]),
                hs(ms(Le(m), ["stop", "prevent"]), ["down"]),
                hs(ms(Le(h), ["stop", "prevent"]), ["up"]),
                hs(ms(c, ["prevent"]), ["esc"]),
                hs(ms(Le(p), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        bn("section", nk, [
          e.suggestions.length && !a.value ? Na(S.$slots, "suggestions", { key: 0 }, () => [
            bn("section", ok, [
              Ma(bn("p", sk, null, 512), [
                [E, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              bn("ul", ak, [
                (nn(!0), on(Or, null, zr(e.suggestions, (x) => (nn(), on("li", {
                  key: x,
                  class: Ua(["language ma-0", { "language--selected": x === Le(w) }]),
                  lang: x,
                  dir: Le(O.getDir)(x),
                  "aria-selected": x === Le(w) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (R) => i(x),
                  textContent: Kd(Le(O.getAutonym)(x))
                }, null, 10, ik))), 128))
              ])
            ])
          ]) : jr("", !0),
          u.value.length ? Na(S.$slots, "search", { key: 1 }, () => [
            bn("section", rk, [
              e.suggestions.length && !a.value ? Ma((nn(), on("p", lk, null, 512)), [
                [E, void 0, "cx-sx-language-selector-all-languages"]
              ]) : jr("", !0),
              (nn(!0), on(Or, null, zr(u.value, (x, R) => (nn(), on("ul", {
                key: R,
                class: Ua(["results-languages pa-0 ma-0 mb-6", d.value])
              }, [
                (nn(!0), on(Or, null, zr(x, (L) => (nn(), on("li", {
                  key: L,
                  class: Ua(["language ma-0", { "language--selected": L === Le(w) }]),
                  lang: L,
                  dir: Le(O.getDir)(L),
                  role: "option",
                  "aria-selected": L === Le(w) || null,
                  tabindex: "-1",
                  onClick: (B) => i(L),
                  textContent: Kd(Le(O.getAutonym)(L))
                }, null, 10, ck))), 128)),
                e.allOptionEnabled && !a.value ? Ma((nn(), on("li", {
                  key: 0,
                  class: Ua(["language ma-0", { "language--selected": Le(w) === "all" }]),
                  role: "option",
                  "aria-selected": Le(w) === "all" || null,
                  tabindex: "-1",
                  onClick: b[2] || (b[2] = (L) => i("all"))
                }, null, 10, uk)), [
                  [E, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : jr("", !0)
              ], 2))), 128))
            ])
          ]) : Na(S.$slots, "noresults", { key: 2 }, () => [
            bn("section", dk, [
              Ma(bn("h3", gk, null, 512), [
                [E, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const hk = window.Vue.resolveDirective, Qd = window.Vue.withDirectives, fs = window.Vue.openBlock, ws = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Ae = window.Vue.unref, Jd = window.Vue.toDisplayString, bt = window.Vue.createVNode, Zd = window.Vue.withModifiers, jn = window.Vue.withCtx, fk = window.Vue.normalizeClass, wk = {
  key: 0,
  class: "mw-ui-autonym"
}, vk = ["lang", "dir", "textContent"], _k = {
  key: 0,
  class: "mw-ui-autonym"
}, Sk = ["lang", "dir", "textContent"], vs = window.Vue.computed, yk = window.Vue.inject, xk = window.Vue.ref, eg = window.Codex.CdxButton, Hr = window.Codex.CdxIcon, Ui = {
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
    const n = e, o = t, s = yk("breakpoints"), a = vs(() => s.value.mobile), r = xk(null), l = vs(() => !!r.value), u = () => r.value = "source", d = () => r.value = "target", i = () => r.value = null, c = vs(() => {
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
      const w = hk("i18n");
      return fs(), ws("div", {
        class: fk(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
      }, [
        bt(Ae(N), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: jn(() => [
            bt(Ae(k), {
              class: "flex justify-end px-0",
              cols: a.value ? 5 : null
            }, {
              default: jn(() => [
                bt(Ae(eg), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  onClick: Zd(u, ["stop"])
                }, {
                  default: jn(() => [
                    p.value ? Qd((fs(), ws("span", wk, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (fs(), ws("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: Ae(O.getDir)(e.selectedSourceLanguage),
                      textContent: Jd(Ae(O.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, vk)),
                    bt(Ae(Hr), {
                      size: "x-small",
                      icon: Ae(Dc)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["cols"]),
            bt(Ae(k), {
              class: "sx-translation-list-language-selector__arrow flex justify-center px-0",
              cols: a.value ? 2 : null
            }, {
              default: jn(() => [
                bt(Ae(Hr), { icon: Ae(Ph) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            bt(Ae(k), {
              class: "px-0",
              cols: a.value ? 5 : null
            }, {
              default: jn(() => [
                bt(Ae(eg), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.targetLanguages.length < 2,
                  onClick: Zd(d, ["stop"])
                }, {
                  default: jn(() => [
                    m.value ? Qd((fs(), ws("span", _k, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (fs(), ws("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: Ae(O.getDir)(e.selectedTargetLanguage),
                      textContent: Jd(Ae(O.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, Sk)),
                    bt(Ae(Hr), {
                      size: "x-small",
                      icon: Ae(Dc)
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
        bt(Ae(_t), {
          value: l.value,
          "onUpdate:value": f[0] || (f[0] = (_) => l.value = _),
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-mode": "dark",
          onClose: i
        }, {
          default: jn(() => [
            bt(Ae(kf), {
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
const tg = window.Vue.unref, Ck = window.Vue.createVNode, Ra = window.Vue.createElementVNode, ng = window.Vue.toDisplayString, bk = window.Vue.openBlock, kk = window.Vue.createElementBlock, $k = { class: "cx-list-empty-placeholder pa-4" }, Vk = { class: "cx-list-empty-placeholder__icon-container" }, Ek = { class: "cx-list-empty-placeholder__icon" }, Lk = ["textContent"], Ak = ["textContent"], Dk = window.Codex.CdxIcon, $f = {
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
    return (t, n) => (bk(), kk("div", $k, [
      Ra("div", Vk, [
        Ra("div", Ek, [
          Ck(tg(Dk), { icon: tg(Uh) }, null, 8, ["icon"])
        ])
      ]),
      Ra("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: ng(e.title)
      }, null, 8, Lk),
      Ra("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: ng(e.description)
      }, null, 8, Ak)
    ]));
  }
}, Tk = window.Vuex.useStore, Bk = window.Vue.ref, za = Bk({ draft: !1, published: !1 }), Jo = () => {
  const e = Tk(), t = Ko(), n = (s) => C(void 0, null, function* () {
    let a = yield vt.fetchTranslations(s);
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
const Pk = window.Vue.toDisplayString, qr = window.Vue.normalizeClass, og = window.Vue.createElementVNode, Rt = window.Vue.openBlock, wo = window.Vue.createBlock, Oa = window.Vue.createCommentVNode, sg = window.Vue.unref, ag = window.Vue.renderList, ig = window.Vue.Fragment, ja = window.Vue.createElementBlock, Fk = window.Vue.createVNode, rg = window.Vue.withCtx, Nk = ["textContent"], Mk = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, Uk = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, Ha = window.Vue.ref, kt = window.Vue.computed, Ik = window.Vue.inject, Rk = window.Vuex.useStore, lg = {
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
    const t = e, n = Ha("all"), o = Ha("all"), s = Rk(), { translationsFetched: a } = Jo(), r = kt(
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
    }, w = kt(() => t.activeStatus === t.translationStatus), _ = Ik("breakpoints"), y = kt(() => _.value.mobile), S = kt(
      () => y.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (b, E) => w.value ? (Rt(), wo(sg(Ye), {
      key: 0,
      class: qr(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: rg(() => [
        og("div", {
          class: qr(["cx-translation-list__header", S.value])
        }, [
          og("h3", {
            class: qr(["px-4 mw-ui-card__title mb-0", { "pb-4": y.value }]),
            textContent: Pk(b.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, Nk),
          p.value.length ? (Rt(), wo(Ui, {
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
        r.value && !p.value.length ? (Rt(), wo($f, {
          key: 0,
          title: b.$i18n("cx-sx-translation-list-empty-title"),
          description: b.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : Oa("", !0),
        r.value ? Oa("", !0) : (Rt(), wo(sg(lt), { key: 1 })),
        d.value ? (Rt(), ja("div", Mk, [
          (Rt(!0), ja(ig, null, ag(p.value, (x) => (Rt(), wo(fb, {
            key: `${e.translationStatus}-${x.key}`,
            translation: x,
            onDeleteTranslation: (R) => f(x)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (Rt(), ja("div", Uk, [
          (Rt(!0), ja(ig, null, ag(p.value, (x) => (Rt(), wo(Nb, {
            key: `${e.translationStatus}-${x.key}`,
            translation: x
          }, null, 8, ["translation"]))), 128))
        ])),
        Fk(qb, {
          modelValue: l.value,
          "onUpdate:modelValue": E[2] || (E[2] = (x) => l.value = x),
          translation: u.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : Oa("", !0);
  }
}, zk = (e, t) => C(void 0, null, function* () {
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
}), Vf = (e) => {
  const s = e / 5 / 200;
  return Math.ceil(s);
}, Ok = (e, t = []) => {
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
}, Ef = (e) => Vf(e) < 15;
const Gr = window.Vue.toDisplayString, Pi = window.Vue.createElementVNode, Xr = window.Vue.unref, _s = window.Vue.openBlock, Wr = window.Vue.createBlock, cg = window.Vue.createCommentVNode, jk = window.Vue.Fragment, ug = window.Vue.createElementBlock, Hk = window.Vue.withKeys, qk = window.Vue.withCtx, Gk = {
  key: 1,
  class: "cdx-info-chip__text custom-info-chip__with-slash"
}, Xk = { class: "cdx-info-chip__text custom-info-chip__with-slash__first" }, Wk = /* @__PURE__ */ Pi("span", null, "/", -1), Kk = { class: "cdx-info-chip__text custom-info-chip__with-slash__second" }, dg = window.Codex.CdxIcon, Yk = window.Codex.CdxInfoChip, qa = window.Vue.computed, so = {
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
    const t = e, n = qa(() => t.content.lastIndexOf("/")), o = qa(() => t.content.slice(0, n.value)), s = qa(() => t.content.slice(n.value + 1)), a = qa(
      () => t.expanded ? XS : Dc
    );
    return (r, l) => (_s(), Wr(Xr(Yk), {
      icon: e.icon,
      class: "custom-info-chip",
      tabindex: "0",
      onKeyup: l[0] || (l[0] = Hk((u) => r.$emit("click"), ["enter"]))
    }, {
      default: qk(() => [
        n.value === -1 ? (_s(), ug(jk, { key: 0 }, [
          Pi("span", null, Gr(e.content), 1),
          e.expandable ? (_s(), Wr(Xr(dg), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : cg("", !0)
        ], 64)) : (_s(), ug("div", Gk, [
          Pi("span", Xk, Gr(o.value), 1),
          Wk,
          Pi("span", Kk, Gr(s.value), 1),
          e.expandable ? (_s(), Wr(Xr(dg), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : cg("", !0)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const me = window.Vue.unref, $t = window.Vue.createVNode, kn = window.Vue.createElementVNode, Ga = window.Vue.toDisplayString, dt = window.Vue.withCtx, Qk = window.Vue.resolveDirective, Kr = window.Vue.withDirectives, Hn = window.Vue.openBlock, vo = window.Vue.createBlock, _o = window.Vue.createCommentVNode, gg = window.Vue.withModifiers, Jk = window.Vue.createElementBlock, Zk = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, e8 = { class: "col shrink pe-4" }, t8 = ["lang", "dir", "textContent"], n8 = ["lang", "dir", "textContent"], o8 = ["textContent"], s8 = ["textContent"], Yr = window.Codex.CdxIcon, Vt = window.Vue.computed, a8 = window.Vue.inject, i8 = window.Vuex.useStore, zc = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [lo, Un, jo],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = i8(), o = Vt(() => t.suggestion), s = Vt(
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
      () => o.value instanceof Un
    ), d = Vt(
      () => o.value instanceof jo
    ), { sourceLanguageAutonym: i, targetLanguageAutonym: c } = Ee(n), g = Vt(
      () => d.value ? Nh : Mh
    ), p = a8("colors"), m = Vt(
      () => d.value ? p.blue600 : "currentColor"
    ), h = Vt(
      () => {
        var w;
        return Ef((w = a.value) == null ? void 0 : w.articleSize);
      }
    ), f = Vt(
      () => o.value instanceof Eh || o.value instanceof Lh
    );
    return (w, _) => {
      const y = Qk("i18n");
      return o.value ? (Hn(), Jk("div", Zk, [
        kn("div", e8, [
          $t(me(Oc), {
            class: "cx-suggestion__thumbnail",
            thumbnail: a.value && a.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        $t(me(N), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: dt(() => [
            $t(me(N), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: dt(() => [
                $t(me(k), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: dt(() => [
                    kn("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: o.value.sourceLanguage,
                      dir: me(O.getDir)(o.value.sourceLanguage),
                      textContent: Ga(s.value)
                    }, null, 8, t8)
                  ]),
                  _: 1
                }),
                $t(me(k), { shrink: "" }, {
                  default: dt(() => [
                    kn("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: o.value.sourceLanguage,
                      dir: me(O.getDir)(o.value.sourceLanguage),
                      textContent: Ga(l.value)
                    }, null, 8, n8)
                  ]),
                  _: 1
                }),
                h.value && !u.value && !f.value ? (Hn(), vo(me(k), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: dt(() => [
                    Kr(kn("small", null, null, 512), [
                      [y, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : _o("", !0),
                u.value ? (Hn(), vo(me(k), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
                  shrink: ""
                }, {
                  default: dt(() => [
                    Kr(kn("small", null, null, 512), [
                      [y, [r.value], "cx-sx-translation-suggestion-info"]
                    ])
                  ]),
                  _: 1
                })) : d.value ? (Hn(), vo(me(k), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: dt(() => [
                    $t(me(N), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: dt(() => [
                        $t(me(k), { grow: "" }, {
                          default: dt(() => [
                            kn("small", {
                              textContent: Ga(me(i))
                            }, null, 8, o8),
                            $t(me(Yr), {
                              icon: me(Ph),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            kn("small", {
                              textContent: Ga(me(c))
                            }, null, 8, s8)
                          ]),
                          _: 1
                        }),
                        r.value ? (Hn(), vo(me(k), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: dt(() => [
                            Kr(kn("small", null, null, 512), [
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
                f.value ? (Hn(), vo(me(k), {
                  key: 3,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: dt(() => [
                    $t(so, {
                      icon: me(ou),
                      content: o.value.collection.name
                    }, null, 8, ["icon", "content"])
                  ]),
                  _: 1
                })) : _o("", !0)
              ]),
              _: 1
            }),
            $t(me(k), { shrink: "" }, {
              default: dt(() => [
                d.value ? _o("", !0) : (Hn(), vo(me(Yr), {
                  key: 0,
                  icon: me(Qo),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: _[0] || (_[0] = gg((S) => w.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                $t(me(Yr), {
                  class: "cx-suggestion__favorite-button",
                  icon: g.value,
                  "icon-color": m.value,
                  onClick: _[1] || (_[1] = gg((S) => w.$emit("bookmark"), ["stop"]))
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
const Qr = window.Vue.normalizeClass, pg = window.Vue.createVNode, r8 = window.Vue.renderList, mg = window.Vue.Fragment, Ss = window.Vue.openBlock, Xa = window.Vue.createElementBlock, l8 = window.Vue.createBlock, c8 = window.Vue.toDisplayString, u8 = window.Vue.withKeys, hg = window.Vue.createCommentVNode, d8 = {
  key: 0,
  class: "sx-suggestions-filters__filter__expanded-filters"
}, Wa = window.Vue.computed, g8 = window.Vue.ref, p8 = window.Vue.watchEffect, m8 = {
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
    const n = e, o = Wa(
      () => n.isSelected(n.filter) || n.filter.subFilters.some((g) => n.isSelected(g))
    ), s = g8(!1);
    p8(() => {
      n.filter.expandable && (s.value = o.value);
    });
    const a = t, r = () => {
      n.filter.expandable && o.value ? s.value = !s.value : a("filter-selected", n.filter);
    }, l = Wa(() => {
      const g = n.filter.subFilters.find(
        (m) => n.isSelected(m)
      );
      let p = n.filter.chipLabel;
      return g && (p += `/${u(g)}`), p;
    }), u = (g) => {
      const { label: p } = g, m = n.filter.label;
      return p.startsWith(`${m}/`) ? p.replace(`${m}/`, "") : p;
    }, d = Wa(() => n.subFilterLimit > 0 ? n.filter.subFilters.slice(0, n.subFilterLimit) : n.filter.subFilters), i = Wa(
      () => n.viewMoreConfig && n.subFilterLimit > 0 && n.filter.subFilters.length > n.subFilterLimit && s.value
    ), c = () => {
      n.viewMoreConfig && n.viewMoreConfig.onClick && n.viewMoreConfig.onClick();
    };
    return (g, p) => (Ss(), Xa(mg, null, [
      pg(so, {
        class: Qr(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
          "sx-suggestions-filters__filter--active": o.value
        }]),
        icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
        content: l.value,
        expandable: !!e.filter.expandable,
        expanded: s.value,
        onClick: r
      }, null, 8, ["class", "icon", "content", "expandable", "expanded"]),
      s.value ? (Ss(), Xa("div", d8, [
        pg(so, {
          class: Qr(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(e.filter)
          }]),
          icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
          content: g.$i18n("cx-sx-suggestions-filter-collection-group-all-option-label"),
          onClick: p[0] || (p[0] = (m) => g.$emit("filter-selected", e.filter))
        }, null, 8, ["class", "icon", "content"]),
        (Ss(!0), Xa(mg, null, r8(d.value, (m) => (Ss(), l8(so, {
          key: m.id,
          class: Qr(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(m)
          }]),
          content: u(m),
          icon: m.icon,
          onClick: (h) => g.$emit("filter-selected", m)
        }, null, 8, ["class", "content", "icon", "onClick"]))), 128)),
        i.value ? (Ss(), Xa("div", {
          key: 0,
          class: "sx-suggestions-filters__view-more-link",
          tabindex: "0",
          onClick: c,
          onKeyup: u8(c, ["enter"])
        }, c8(e.viewMoreConfig.label), 33)) : hg("", !0)
      ])) : hg("", !0)
    ], 64));
  }
};
const h8 = window.Vue.toDisplayString, fg = window.Vue.createElementVNode, f8 = window.Vue.renderList, wg = window.Vue.Fragment, Jr = window.Vue.openBlock, vg = window.Vue.createElementBlock, w8 = window.Vue.createBlock, v8 = { class: "sx-suggestions-filters__group-label mb-3" }, _8 = { class: "sx-suggestions-filters__group-filters mb-3" }, S8 = {
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
    return (o, s) => (Jr(), vg(wg, null, [
      fg("div", v8, h8(e.filterGroup.label), 1),
      fg("div", _8, [
        (Jr(!0), vg(wg, null, f8(n(), (a) => (Jr(), w8(m8, {
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
}, y8 = window.Vue.computed, _g = window.Vue.ref, Sg = window.Vue.watch, pu = (e, t) => {
  const o = _g([]), s = _g(!1), a = y8(
    () => o.value.slice(0, 4)
  ), r = gu(() => C(void 0, null, function* () {
    if (!t.value) {
      s.value = !1;
      return;
    }
    try {
      o.value = yield ro.searchPagesByTitlePrefix(
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
const Zr = window.Vue.ref, yg = window.Vue.watch, xg = window.Vue.computed, { topics: x8, regions: C8 } = mw.loader.require(
  "ext.cx.articlefilters"
), b8 = x8.flatMap(
  (e) => e.topics.map((t) => et(de({}, t), {
    groupId: e.groupId
  }))
), k8 = () => {
  const e = Zr(""), t = Zr("all"), n = Zr({
    topics: [],
    topic_areas: [],
    collections: [],
    regions: []
  }), o = fe(), { pageCollectionGroups: s } = nu(), { sourceLanguageURLParameter: a } = T(), r = (p) => (p = p.toLowerCase(), b8.filter(
    (m) => m.label.toLowerCase().includes(p)
  )), l = (p) => (p = p.toLowerCase(), Object.values(s.value).flat().filter(
    (h) => h.name.toLowerCase().includes(p)
  )), u = (p) => (p = p.toLowerCase(), C8.flatMap((m) => [m, ...m.countries]).filter(
    (m) => m.label.toLowerCase().includes(p)
  ).map((m) => ({
    label: m.label,
    id: m.id
  }))), d = xg(
    () => t.value === "all" ? e.value : ""
  ), { searchResultsSlice: i, searchResultsLoading: c } = pu(
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
          filterType: wt,
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
        icon: t.value === "all" ? ou : null,
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
}, $8 = "suggestion_filter_topic_area", V8 = "suggestion_filter_search_result_seed", E8 = "suggestion_filter_collections", L8 = "suggestion_filter_previous_edits", A8 = "suggestion_filter_popular_articles", D8 = "suggestion_filter_region", el = (e) => {
  if (e.type === Ge || e.type === Ve || e.type === ee || e.type === wt)
    return e.id;
  if (e.id === ee)
    return "all-collections";
}, tl = (e) => {
  if (e.type === Ge)
    return $8;
  if (e.type === Ve)
    return D8;
  if (e.type === wt)
    return V8;
  if (e.id === ee || e.type === ee)
    return E8;
  if (e.id === Jt)
    return L8;
  if (e.id === vn)
    return A8;
}, Lf = () => {
  const e = St();
  return {
    logSuggestionFiltersClose: () => e({ event_type: "suggestion_filters_close" }),
    logSuggestionFiltersConfirm: (r) => e({
      event_type: "suggestion_filters_confirm",
      event_subtype: "suggestion_filters_single_select_confirm",
      event_source: tl(r),
      event_context: el(r)
    }),
    logSuggestionFiltersSelect: (r) => e({
      event_type: "suggestion_filters_select",
      event_subtype: "suggestion_filters_single_select",
      event_source: tl(r),
      event_context: el(r)
    }),
    logSuggestionFiltersQuickSelect: (r) => e({
      event_type: "dashboard_suggestion_filters_quick_select",
      event_source: tl(r),
      event_context: el(r)
    }),
    logSuggestionFiltersViewMore: () => e({ event_type: "dashboard_suggestion_filters_view_more" })
  };
};
const ye = window.Vue.unref, gt = window.Vue.createVNode, Et = window.Vue.withCtx, T8 = window.Vue.resolveDirective, zt = window.Vue.createElementVNode, So = window.Vue.withDirectives, Cg = window.Vue.toDisplayString, B8 = window.Vue.createTextVNode, P8 = window.Vue.vShow, bg = window.Vue.renderList, kg = window.Vue.Fragment, sn = window.Vue.openBlock, qn = window.Vue.createElementBlock, $g = window.Vue.isRef, F8 = window.Vue.withKeys, Vg = window.Vue.createCommentVNode, Eg = window.Vue.createBlock, N8 = { class: "sx-suggestions-filters" }, M8 = { class: "mb-0" }, U8 = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, I8 = { class: "mb-3" }, R8 = { class: "px-4 pb-4 pt-7" }, z8 = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, O8 = ["onKeyup", "onClick"], j8 = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, H8 = { class: "sx-suggestions-filters__search-results-pending" }, q8 = {
  key: 0,
  class: "sx-suggestions-filters__search-results-empty"
}, G8 = { class: "sx-suggestions-filters__search-results-empty-primary" }, X8 = { class: "sx-suggestions-filters__search-results-empty-secondary" }, Ya = window.Vue.ref, yo = window.Vue.computed, W8 = window.Vue.inject, K8 = window.Vue.watch, Lg = window.Codex.CdxButton, Y8 = window.Codex.CdxIcon, Q8 = window.Codex.CdxTextInput, J8 = window.Codex.CdxMenu, Z8 = window.Codex.CdxTabs, e2 = window.Codex.CdxTab, t2 = {
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
          Ke,
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
    }, { allFilters: u, isFilterSelected: d, selectFilter: i, findSelectedFilter: c } = Ki(), g = (I) => I.flatMap((P) => u.value.filter((U) => U.type === P)).filter(Boolean), p = () => {
      b(), o("update:modelValue", !1);
    }, {
      logSuggestionFiltersClose: m,
      logSuggestionFiltersConfirm: h,
      logSuggestionFiltersSelect: f
    } = Lf(), w = () => {
      m(), p();
    }, _ = () => {
      S.value && (h(S.value), i(S.value)), p();
    }, y = Ya(!1), S = Ya(null), b = () => {
      S.value = null, y.value = !1;
    }, E = (I) => {
      f(I), S.value = I, y.value = !0;
    }, x = (I) => S.value ? S.value.id === I.id && S.value.type === I.type : d(I), R = W8("breakpoints"), L = yo(() => R.value.mobile), { searchInput: B, searchScope: j, searchResults: G, searchResultsLoading: Y } = k8(), we = yo(
      () => S.value || c()
    ), q = Ya(null);
    K8(q, () => {
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
    ), Xe = yo(() => {
      var P;
      const I = (P = Ne.value) == null ? void 0 : P.getHighlightedMenuItem();
      return I == null ? void 0 : I.id;
    }), Be = (I) => {
      I.key !== " " && Ne.value && Ne.value.delegateKeyNavigation(I);
    }, J = (I, P) => {
      te.value[P] = I;
    };
    return (I, P) => {
      const U = T8("i18n");
      return sn(), Eg(ye(_t), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: L.value,
        header: !1
      }, {
        default: Et(() => [
          zt("section", N8, [
            gt(ye(N), {
              class: "sx-suggestions-filters__header ma-0 py-3 px-4",
              align: "stretch",
              justify: "start"
            }, {
              default: Et(() => [
                gt(ye(k), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: Et(() => [
                    gt(ye(Lg), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": I.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: w
                    }, {
                      default: Et(() => [
                        gt(ye(Y8), { icon: ye(Qo) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                gt(ye(k), {
                  grow: "",
                  align: "center"
                }, {
                  default: Et(() => [
                    So(zt("h5", M8, null, 512), [
                      [U, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                gt(ye(k), {
                  shrink: "",
                  align: "start"
                }, {
                  default: Et(() => [
                    So(gt(ye(Lg), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: _
                    }, {
                      default: Et(() => [
                        B8(Cg(I.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [P8, y.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            zt("div", U8, [
              So(zt("h5", I8, null, 512), [
                [U, void 0, "cx-sx-suggestions-filter-active-group-label"]
              ]),
              zt("div", null, [
                gt(so, {
                  class: "sx-suggestions-filters__filter sx-suggestions-filters__filter--active my-1 mx-1 py-1",
                  content: we.value.label,
                  icon: we.value.icon
                }, null, 8, ["content", "icon"])
              ])
            ]),
            gt(ye(Z8), {
              active: ye(j),
              "onUpdate:active": [
                P[2] || (P[2] = (Z) => $g(j) ? j.value = Z : null),
                a
              ],
              class: "sx-suggestions-filters__tabs"
            }, {
              default: Et(() => [
                (sn(!0), qn(kg, null, bg(s.value, (Z, v) => (sn(), Eg(ye(e2), {
                  key: v,
                  name: Z.name,
                  label: Z.label
                }, {
                  default: Et(() => [
                    zt("div", R8, [
                      gt(ye(Q8), {
                        modelValue: ye(B),
                        "onUpdate:modelValue": P[0] || (P[0] = (A) => $g(B) ? B.value = A : null),
                        role: "combobox",
                        "aria-activedescendant": Xe.value,
                        "aria-controls": "sx-suggestions-filters__search-results__menu",
                        "aria-autocomplete": "none",
                        placeholder: Z.searchPlaceholder,
                        "input-type": "search",
                        "start-icon": ye(Tc),
                        clearable: !!ye(B),
                        onKeydown: Be
                      }, null, 8, ["modelValue", "aria-activedescendant", "placeholder", "start-icon", "clearable"])
                    ]),
                    ye(B) ? (sn(), qn("div", j8, [
                      gt(ye(J8), {
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
                          So(zt("div", H8, null, 512), [
                            [U, void 0, "cx-sx-suggestions-filter-search-results-loading"]
                          ])
                        ]),
                        "no-results": Et(() => [
                          ye(Y) ? Vg("", !0) : (sn(), qn("div", q8, [
                            So(zt("span", G8, null, 512), [
                              [U, void 0, "cx-sx-suggestions-filter-search-results-empty-primary"]
                            ]),
                            So(zt("span", X8, null, 512), [
                              [U, void 0, "cx-sx-suggestions-filter-search-results-empty-secondary"]
                            ])
                          ]))
                        ]),
                        _: 2
                      }, 1032, ["selected", "show-pending", "menu-items"])
                    ])) : (sn(), qn("div", z8, [
                      (sn(!0), qn(kg, null, bg(Z.filterGroups, (A) => (sn(), qn("div", {
                        key: A.id,
                        class: "sx-suggestions-filters__group"
                      }, [
                        gt(S8, {
                          "filter-group": A,
                          "tentatively-select-filter": E,
                          "is-selected": x,
                          limit: l(Z.name, A.type) ? 4 : 0,
                          "get-sub-filter-config": (D) => r(D, Z.name)
                        }, null, 8, ["filter-group", "limit", "get-sub-filter-config"]),
                        l(Z.name, A.type) ? (sn(), qn("div", {
                          key: 0,
                          class: "sx-suggestions-filters__group-view-all mb-3",
                          tabindex: "0",
                          onKeyup: F8((D) => a(A.id), ["enter"]),
                          onClick: (D) => a(A.id)
                        }, [
                          zt("span", null, Cg(I.$i18n(se[A.id])), 1)
                        ], 40, O8)) : Vg("", !0)
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
const n2 = window.Vue.renderList, o2 = window.Vue.Fragment, Dg = window.Vue.createElementBlock, s2 = window.Vue.normalizeClass, Tg = window.Vue.createVNode, a2 = {
  key: 1,
  class: "cx-suggestion-list__filters flex px-4 pb-2"
}, Bg = window.Vue.ref;
window.Vue.computed;
const Pg = window.Vue.watch, i2 = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = fe(), { logSuggestionFiltersQuickSelect: n, logSuggestionFiltersViewMore: o } = Lf(), {
      getFiltersSummary: s,
      selectFilter: a,
      isFilterSelected: r,
      waitingForPageCollectionsFetch: l,
      validateURLFilterWithCollections: u
    } = Ki(), d = Bg(!1), i = () => {
      o(), d.value = !0;
    }, c = (p) => {
      n(p), a(p);
    }, g = Bg(s());
    return Pg(d, (p) => {
      p || (g.value = s());
    }), Pg(l, (p) => {
      p || (u(), g.value = s());
    }), (p, m) => ys(l) ? (Qa(), Ag(ys(lt), { key: 0 })) : (Qa(), Dg("div", a2, [
      (Qa(!0), Dg(o2, null, n2(g.value, (h) => (Qa(), Ag(so, {
        key: h.label,
        class: s2(["cx-suggestion-list__filter py-1 me-1", {
          "cx-suggestion-list__filter--active": ys(r)(h)
        }]),
        icon: h.icon,
        content: h.label,
        onClick: (f) => c(h)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      Tg(so, {
        class: "cx-suggestion-list__filter py-1 me-1",
        icon: ys(au),
        content: ys(t).i18n("cx-sx-suggestions-filter-more-label"),
        onClick: i
      }, null, 8, ["icon", "content"]),
      Tg(t2, {
        modelValue: d.value,
        "onUpdate:modelValue": m[0] || (m[0] = (h) => d.value = h)
      }, null, 8, ["modelValue"])
    ]));
  }
}, xo = window.Vue.computed, Fg = window.Vue.ref, r2 = window.Vue.watch, l2 = window.Vuex.useStore, c2 = () => {
  const e = l2(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = T(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = Zc(), r = St(), l = xo(
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
  } = ru(), _ = (j) => j.length === c, y = xo(
    () => _(m.value)
  ), S = xo(
    () => _(p.value)
  ), b = () => {
    const j = (d.value + 1) % g, G = _(
      a(j)
    );
    (!S.value || !G) && f();
  }, E = () => {
    const j = (i.value + 1) % g, G = _(
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
  return r2(
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
}, u2 = window.Vuex.useStore, mu = () => {
  const e = u2(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = ru(), o = (d, i, c) => e.state.suggestions.pageSuggestions.find(
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
}, d2 = "suggestion_no_seed", g2 = "suggestion_recent_edit", p2 = "suggestion_topic_area", m2 = "suggestion_search_result_seed", h2 = "suggestion_featured", f2 = "suggestion_collections", w2 = "suggestion_region", v2 = () => {
  const { currentSuggestionFilters: e } = T();
  return (t = null) => {
    const { type: n, id: o } = e.value;
    if (o === Jt)
      return t ? g2 : d2;
    if (n === Ge)
      return p2;
    if (n === Ve)
      return w2;
    if (n === wt)
      return m2;
    if (o === vn)
      return h2;
    if (o === ee || n === ee)
      return f2;
    const s = new Error(
      `[CX] No matching event source found for filter with type ${n} and id ${o}`
    );
    throw mw.errorLogger.logError(s, "error.contenttranslation"), s;
  };
};
const Ng = window.Vue.normalizeClass, _2 = window.Vue.resolveDirective, xs = window.Vue.createElementVNode, Ja = window.Vue.withDirectives, _e = window.Vue.unref, tt = window.Vue.openBlock, Ot = window.Vue.createBlock, $n = window.Vue.createCommentVNode, nl = window.Vue.createVNode, Cs = window.Vue.withCtx, Mg = window.Vue.renderList, Ug = window.Vue.Fragment, ol = window.Vue.createElementBlock, S2 = window.Vue.toDisplayString, y2 = window.Vue.createTextVNode, x2 = window.Vue.vShow, C2 = { class: "cx-suggestion-list" }, b2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, k2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, $2 = { class: "cx-suggestion-list__refresh-button-container justify-center" }, jt = window.Vue.computed, V2 = window.Vue.inject, E2 = window.Vue.ref, L2 = window.Codex.CdxButton, A2 = window.Codex.CdxIcon, D2 = window.Vuex.useStore, T2 = {
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
    } = T(), { supportedSourceLanguageCodes: s, supportedTargetLanguageCodes: a } = pa(), r = Hh(), l = (J) => r(J, n.value), u = (J) => r(t.value, J), d = v2(), i = wa(), c = (J) => {
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
      sectionSuggestionsLoading: _,
      isCurrentPageSuggestionsSliceFull: y,
      isCurrentSectionSuggestionsSliceFull: S
    } = c2(), b = E2(null), E = St(), x = () => {
      E({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), f(), b.value && b.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: R, markFavoritePageSuggestion: L } = mu(), B = V2("breakpoints"), j = jt(() => B.value.mobile), G = jt(
      () => j.value ? null : "pb-2 flex justify-between items-center"
    ), Y = D2(), we = jt(
      () => Y.state.suggestions.isPageSuggestionsFetchPending
    ), q = jt(
      () => Y.state.suggestions.isSectionSuggestionsFetchPending
    ), se = jt(
      () => we.value || w.value && !y.value
    ), ae = jt(
      () => q.value || _.value && !S.value
    ), te = jt(
      () => we.value || w.value || g.value.length > 0
    ), Ne = jt(
      () => q.value || _.value || p.value.length > 0
    ), Xe = jt(
      () => !te.value && !Ne.value
    ), Be = jt(
      () => !_.value && !w.value && !we.value && !q.value && !Xe.value
    );
    return (J, I) => {
      const P = _2("i18n");
      return Ja((tt(), ol("div", C2, [
        nl(_e(Ye), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: Cs(() => [
            xs("div", {
              class: Ng(["cx-suggestion-list__header-card__header px-4", G.value])
            }, [
              Ja(xs("h3", {
                class: Ng(["mw-ui-card__title mb-0", { "py-3": j.value }])
              }, null, 2), [
                [P, void 0, "cx-suggestionlist-title"]
              ]),
              j.value ? $n("", !0) : (tt(), Ot(Ui, {
                key: 0,
                "source-languages": _e(s),
                "target-languages": _e(a),
                "selected-source-language": _e(t),
                "selected-target-language": _e(n),
                "onUpdate:selectedSourceLanguage": l,
                "onUpdate:selectedTargetLanguage": u
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            nl(i2)
          ]),
          default: Cs(() => [
            j.value ? (tt(), Ot(Ui, {
              key: 0,
              "source-languages": _e(s),
              "target-languages": _e(a),
              "selected-source-language": _e(t),
              "selected-target-language": _e(n),
              "onUpdate:selectedSourceLanguage": l,
              "onUpdate:selectedTargetLanguage": u
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])) : $n("", !0)
          ]),
          _: 1
        }),
        Ne.value ? (tt(), Ot(_e(Ye), {
          key: 0,
          class: "cx-suggestion-list__section-suggestions pa-0 mb-0"
        }, {
          default: Cs(() => [
            Ja(xs("h5", b2, null, 512), [
              [P, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (tt(!0), ol(Ug, null, Mg(_e(p), (U, Z) => (tt(), Ot(zc, {
              key: `section-suggestion-${Z}`,
              class: "ma-0",
              suggestion: U,
              onClose: (v) => _e(h)(U),
              onClick: (v) => c(U),
              onBookmark: (v) => _e(R)(U)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            ae.value ? (tt(), Ot(_e(lt), { key: 0 })) : $n("", !0)
          ]),
          _: 1
        })) : $n("", !0),
        te.value ? (tt(), Ot(_e(Ye), {
          key: 1,
          ref_key: "pageSuggestionsList",
          ref: b,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: Cs(() => [
            Ja(xs("h5", k2, null, 512), [
              [P, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (tt(!0), ol(Ug, null, Mg(_e(g), (U, Z) => (tt(), Ot(zc, {
              key: `page-suggestion-${Z}`,
              suggestion: U,
              onClose: (v) => _e(m)(U),
              onClick: (v) => c(U),
              onBookmark: (v) => _e(L)(U)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            se.value ? (tt(), Ot(_e(lt), { key: 0 })) : $n("", !0)
          ]),
          _: 1
        }, 512)) : $n("", !0),
        Xe.value ? (tt(), Ot($f, {
          key: 2,
          title: J.$i18n("cx-sx-suggestion-list-empty-title"),
          description: J.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : $n("", !0),
        xs("div", $2, [
          Be.value ? (tt(), Ot(_e(L2), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: x
          }, {
            default: Cs(() => [
              nl(_e(A2), {
                class: "me-1",
                icon: _e(Ih)
              }, null, 8, ["icon"]),
              y2(" " + S2(J.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : $n("", !0)
        ])
      ], 512)), [
        [x2, e.active]
      ]);
    };
  }
}, B2 = window.Vue.resolveDirective, P2 = window.Vue.createElementVNode, F2 = window.Vue.withDirectives, N2 = window.Vue.renderList, M2 = window.Vue.Fragment, sl = window.Vue.openBlock, U2 = window.Vue.createElementBlock, Ig = window.Vue.unref, Rg = window.Vue.createBlock, zg = window.Vue.withCtx, I2 = window.Vue.createCommentVNode, R2 = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, z2 = window.Vue.computed, O2 = window.Vuex.useStore, j2 = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = O2(), n = z2(() => t.state.suggestions.favorites || []), o = wa(), s = (r) => o(
      r.title,
      r.sourceLanguage,
      r.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = mu();
    return (r, l) => {
      const u = B2("i18n");
      return n.value.length ? (sl(), Rg(Ig(Ye), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: zg(() => [
          F2(P2("h3", R2, null, 512), [
            [u, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: zg(() => [
          (sl(!0), U2(M2, null, N2(n.value, (d, i) => (sl(), Rg(zc, {
            key: `favorite-${i}`,
            suggestion: d,
            onClick: (c) => s(d),
            onBookmark: (c) => Ig(a)(d)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : I2("", !0);
    };
  }
};
const H2 = window.Vue.resolveDirective, bs = window.Vue.createElementVNode, q2 = window.Vue.withDirectives, G2 = window.Vue.renderList, X2 = window.Vue.Fragment, Og = window.Vue.openBlock, jg = window.Vue.createElementBlock, W2 = window.Vue.unref, K2 = window.Vue.createVNode, Y2 = window.Vue.toDisplayString, Q2 = { class: "cx-help-panel pa-4" }, J2 = { class: "cx-help-panel__item-list mt-6 ps-2" }, Z2 = ["href", "target"], e$ = ["textContent"], t$ = window.Codex.CdxIcon, n$ = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = fe(), n = [
      {
        icon: ZS,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
        target: "_blank"
      },
      {
        icon: KS,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
        target: "_blank"
      }
    ];
    return (o, s) => {
      const a = H2("i18n");
      return Og(), jg("div", Q2, [
        q2(bs("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        bs("ul", J2, [
          (Og(), jg(X2, null, G2(n, (r, l) => bs("li", {
            key: l,
            class: "mt-4"
          }, [
            bs("a", {
              href: r.href,
              target: r.target
            }, [
              K2(W2(t$), {
                class: "me-2",
                icon: r.icon
              }, null, 8, ["icon"]),
              bs("span", {
                textContent: Y2(r.label)
              }, null, 8, e$)
            ], 8, Z2)
          ])), 64))
        ])
      ]);
    };
  }
};
const o$ = window.Vue.resolveDirective, Co = window.Vue.createElementVNode, al = window.Vue.withDirectives, Hg = window.Vue.toDisplayString, il = window.Vue.unref, rl = window.Vue.withCtx, ll = window.Vue.createVNode, s$ = window.Vue.openBlock, a$ = window.Vue.createElementBlock, i$ = { class: "cx-stats-panel pa-4" }, r$ = ["textContent"], l$ = { class: "cx-stats-panel__monthly-stats-label" }, c$ = ["textContent"], u$ = { class: "cx-stats-panel__total-stats-label" }, d$ = window.Vue.ref, qg = window.Vue.computed, g$ = window.Vue.watch, p$ = {
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
    }), a = d$(null);
    return g$(
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
      const u = o$("i18n");
      return s$(), a$("div", i$, [
        al(Co("h5", null, null, 512), [
          [u, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        ll(il(N), null, {
          default: rl(() => [
            ll(il(k), { class: "cx-stats-panel__monthly-stats" }, {
              default: rl(() => [
                Co("h3", {
                  textContent: Hg(s.value)
                }, null, 8, r$),
                al(Co("h5", l$, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            ll(il(k), { class: "cx-stats-panel__total-stats" }, {
              default: rl(() => [
                Co("h3", {
                  textContent: Hg(o.value)
                }, null, 8, c$),
                al(Co("h5", u$, null, 512), [
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
}, Af = () => {
  const e = St();
  return (t) => e({
    event_type: "dashboard_tab_select",
    event_source: {
      draft: "dashboard_inprogress_tab",
      published: "dashboard_published_tab",
      suggestions: "dashboard_suggestions_tab"
    }[t]
  });
};
const m$ = window.Vue.renderSlot, h$ = window.Vue.unref, f$ = window.Vue.createVNode, w$ = window.Vue.createElementVNode, v$ = window.Vue.openBlock, _$ = window.Vue.createElementBlock, S$ = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, y$ = { class: "col-12 ma-0 pa-0" }, x$ = {
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
    const n = t, o = Af(), s = (a) => {
      o(a), n("update:active", a);
    };
    return (a, r) => (v$(), _$("footer", S$, [
      w$("div", y$, [
        m$(a.$slots, "default", {}, () => [
          f$(h$(ua), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: s
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, C$ = window.Vuex.useStore, b$ = () => {
  const e = C$(), t = Ko();
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
}, k$ = window.Vuex.useStore, Df = () => {
  const e = k$(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = T(), { isDefaultFilter: r } = qc(), { previousRoute: l } = Ee(e), u = St(), d = () => {
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
}, Gg = window.Vue.computed, $$ = window.Vuex.useStore, Fe = () => {
  const e = $$(), {
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
}, V$ = window.Vue.ref, Za = {
  NEW_SECTION: "NEW_SECTION",
  EXPAND: "EXPAND",
  REPLACE: "REPLACE",
  SANDBOX: "SANDBOX"
}, cl = V$(null), Ut = () => {
  const { isCurrentSectionPresent: e } = Fe(), t = () => {
    e.value ? o(Za.EXPAND) : o(Za.NEW_SECTION);
  }, n = () => {
    cl.value = null;
  }, o = (s) => {
    if (!Object.values(Za).includes(s))
      throw new Error("[CX] Invalid publishing target used");
    cl.value = s;
  };
  return {
    target: cl,
    resetPublishTarget: t,
    clearPublishTarget: n,
    setTarget: o,
    PUBLISHING_TARGETS: Za
  };
}, E$ = window.Vue.watch, L$ = () => {
  const { fetchAllTranslations: e } = Jo(), t = Oh(), n = b$(), { fetchPageCollectionGroups: o } = nu(), { logDashboardOpenEvent: s } = Df(), { applicationLanguagesInitialized: a } = qh(), { clearPublishTarget: r } = Ut();
  return () => C(void 0, null, function* () {
    o(), r();
    try {
      yield n();
    } catch (l) {
      mw.log.error("[CX] Error while fetching favorite suggestions", l);
    }
    yield e(), E$(
      a,
      () => {
        a.value && (s(), t());
      },
      { immediate: !0 }
    );
  });
}, Xg = window.Vue.computed, A$ = window.Vue.ref, D$ = window.Vue.watch, T$ = window.Vue.watchEffect, B$ = window.Vuex.useStore, P$ = ["suggestions", "draft", "published"], F$ = () => {
  const e = B$(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = T(), { translationsFetched: o } = Jo(), s = A$(null);
  if (P$.includes(t.value))
    s.value = t.value;
  else {
    const a = Xg(
      () => o.value.draft
    ), r = Xg(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = r.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", D$(a, (l) => {
      l && (s.value = r.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return T$(() => {
    n(s.value), window.scrollTo(0, 0);
  }), s;
}, N$ = window.Vue.computed, M$ = () => {
  const e = fe();
  return N$(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: b0,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: Ri,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: C0,
        type: "text"
      }
    }
  ]);
};
const xe = window.Vue.unref, Me = window.Vue.createVNode, U$ = window.Vue.toDisplayString, I$ = window.Vue.createTextVNode, an = window.Vue.withCtx, ul = window.Vue.openBlock, Wg = window.Vue.createBlock, Kg = window.Vue.createCommentVNode, R$ = window.Vue.vShow, z$ = window.Vue.withDirectives, O$ = window.Vue.isRef, j$ = window.Vue.createElementBlock, H$ = window.Vue.computed, q$ = window.Vuex.useStore, G$ = window.Codex.CdxButton, X$ = window.Codex.CdxIcon, W$ = {
  __name: "CXDashboard",
  setup(e) {
    const t = Je(), n = St(), o = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    L$()();
    const a = q$();
    a.dispatch("translator/fetchTranslatorStats");
    const r = H$(() => a.state.translator.translatorStats), l = F$(), u = M$(), d = Af(), i = (c) => {
      d(c), l.value = c;
    };
    return (c, g) => (ul(), j$("div", null, [
      Me(xe(N), { class: "ma-0 pb-4" }, {
        default: an(() => [
          Me(xe(G$), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: o
          }, {
            default: an(() => [
              Me(xe(X$), {
                class: "me-1",
                icon: xe(Bh)
              }, null, 8, ["icon"]),
              I$(" " + U$(c.$i18n("cx-create-new-translation")), 1)
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
          c.$mwui.breakpoint.tabletAndUp ? (ul(), Wg(xe(k), {
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
              z$(Me(j2, null, null, 512), [
                [R$, xe(l) === "suggestions"]
              ]),
              Me(T2, {
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
                      Me(p$, { stats: r.value }, null, 8, ["stats"])
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
                      Me(n$)
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
      c.$mwui.breakpoint.mobile ? (ul(), Wg(x$, {
        key: 0,
        active: xe(l),
        "onUpdate:active": g[0] || (g[0] = (p) => O$(l) ? l.value = p : null),
        items: xe(u)
      }, null, 8, ["active", "items"])) : Kg("", !0)
    ]));
  }
}, K$ = {
  name: "DashboardView",
  components: { CxDashboard: W$ }
}, Y$ = window.Vue.resolveComponent, Q$ = window.Vue.createVNode, J$ = window.Vue.openBlock, Z$ = window.Vue.createElementBlock, eV = { class: "cx-translation-dashboard" };
function tV(e, t, n, o, s, a) {
  const r = Y$("cx-dashboard");
  return J$(), Z$("main", eV, [
    Q$(r, { class: "mb-4 pb-12 px-3 px-tablet-10" })
  ]);
}
const Yg = /* @__PURE__ */ ce(K$, [["render", tV]]), nV = window.Vuex.useStore, oV = window.Vue.computed, It = () => {
  const e = nV(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = T();
  return { currentTranslation: oV(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (r) => r.status === "draft" && r.sourceTitle === s.value && r.sectionTitleMatches(o.value) && r.sourceLanguage === t.value && r.targetLanguage === n.value
    )
  ) };
}, bo = window.Vue.computed, sV = () => {
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
function aV(e) {
  return e.$el = $(e), e;
}
function iV(e, t, n, o) {
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
function rV() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function lV(e, t) {
  return C(this, null, function* () {
    yield hu(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = aV(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const cV = window.Vue.computed, uV = window.Vue.onMounted, dV = window.Vue.ref;
function gV(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const pV = {
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
    const n = dV(null);
    let o = null;
    const s = cV(
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
    return uV(() => C(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = gV;
      const i = yield lV(u, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), o = iV(
        i,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = rV, o.focus();
    })), { sxeditor: n };
  }
}, Fi = window.Vue.createElementVNode, mV = window.Vue.openBlock, hV = window.Vue.createElementBlock, fV = ["lang", "dir"], wV = /* @__PURE__ */ Fi("div", { class: "overlay-header-container" }, [
  /* @__PURE__ */ Fi("div", { class: "overlay-header header initial-header" }, [
    /* @__PURE__ */ Fi("div", { class: "toolbar" })
  ])
], -1), vV = ["lang", "dir"];
function _V(e, t, n, o, s, a) {
  return mV(), hV("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    wV,
    Fi("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, vV)
  ], 8, fV);
}
const SV = /* @__PURE__ */ ce(pV, [["render", _V]]);
function hu() {
  return mw.loader.using("mw.cx3.ve");
}
const yV = window.Vuex.useStore, xV = () => {
  const e = yV();
  return (t, n) => C(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield hu(), new Promise((s) => {
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
}, CV = window.Vuex.useStore, Tf = () => {
  const e = CV();
  return (t, n, o, s = null) => C(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      o
    );
    if (a && a.content)
      return;
    const r = yield ro.fetchPageContent(
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
}, Qg = window.Vue.computed, bV = window.Vuex.useStore, ut = () => {
  const e = bV(), { sectionSuggestion: t } = Fe(), { currentTranslation: n } = It(), {
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
}, er = () => {
  const { currentSourcePage: e } = ut(), t = xV(), n = Tf(), {
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
}, kV = window.Vuex.useStore, Zo = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o,
    isQuickTutorialForced: s
  } = T(), a = kV(), r = Je(), l = () => {
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
}, fu = () => {
  const e = St(), { currentTranslation: t } = It();
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
}, $V = window.Vue.ref, VV = () => {
  const e = Je(), { logDashboardTranslationStartEvent: t } = Zi(), n = fu(), o = Zo(), { sectionURLParameter: s } = T(), { targetPageExists: a } = Sn(), { selectPageSectionByTitle: r } = er(), l = () => C(void 0, null, function* () {
    yield r(s.value), e.push({ name: "sx-content-comparator" });
  }), u = $V(!1), { currentTranslation: d } = It();
  return {
    handlePrimaryButtonClick: () => {
      d.value ? d.value.isArticleTranslation && !Xo ? u.value = !0 : (n(), o()) : s.value ? l() : a.value ? e.push({ name: "sx-section-selector" }) : (t(), o());
    },
    translationConfirmationDialogOn: u
  };
};
const EV = window.Vue.resolveDirective, Jg = window.Vue.createElementVNode, Zg = window.Vue.withDirectives, LV = window.Vue.unref, AV = window.Vue.withCtx, DV = window.Vue.openBlock, TV = window.Vue.createBlock, BV = {
  href: "",
  target: "_blank"
}, PV = window.Codex.CdxDialog, FV = {
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
      const c = EV("i18n");
      return DV(), TV(LV(PV), {
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
        default: AV(() => [
          Zg(Jg("p", null, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          Zg(Jg("a", BV, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title"]);
    };
  }
};
const Ce = window.Vue.unref, NV = window.Vue.resolveDirective, ks = window.Vue.createElementVNode, ep = window.Vue.withDirectives, $s = window.Vue.toDisplayString, Vs = window.Vue.openBlock, dl = window.Vue.createElementBlock, gl = window.Vue.createCommentVNode, pt = window.Vue.createVNode, Lt = window.Vue.withCtx, pl = window.Vue.createTextVNode, MV = window.Vue.withModifiers, tp = window.Vue.createBlock, UV = window.Vue.Fragment, IV = { class: "sx-translation-confirmer-body pb-4" }, RV = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, zV = ["textContent"], OV = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, jV = ["href"], HV = ["textContent"], ei = window.Vue.computed, qV = window.Vue.inject, np = window.Vue.ref, GV = window.Vue.watchEffect, XV = window.Vuex.useStore, ml = window.Codex.CdxButton, WV = window.Codex.CdxIcon, KV = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = Je(), o = XV();
    qV("colors");
    const { sectionSuggestion: s } = Fe(), { targetLanguageAutonym: a } = Ee(o), { sectionURLParameter: r } = T(), { logDashboardTranslationStartEvent: l } = Zi(), u = Zo(), { handlePrimaryButtonClick: d, translationConfirmationDialogOn: i } = VV(), c = np(!1), g = np(null), p = () => C(this, null, function* () {
      let G = !0;
      try {
        G = yield vt.checkUnreviewedTranslations();
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
    GV(() => {
      i.value && (f("open-translation-confirmation-dialog"), i.value = !1);
    });
    const {
      actionInformationMessageArgs: w,
      getActionButtonLabel: _,
      isProgressiveButton: y,
      targetArticlePath: S
    } = sV(), b = fe(), E = ei(
      () => b.i18n(_(!!r.value))
    ), x = ei(
      () => b.i18n(...w.value)
    ), R = () => C(this, null, function* () {
      yield p(), !c.value && n.push({ name: "sx-section-selector" });
    }), L = ei(() => {
      var G, Y;
      return r.value && !!((Y = (G = s.value) == null ? void 0 : G.sourceSections) != null && Y.length);
    }), { targetPageExists: B } = Sn(), j = ei(() => !r.value && B.value && Xo);
    return (G, Y) => {
      const we = NV("i18n");
      return Vs(), dl(UV, null, [
        ks("section", IV, [
          Ce(r) ? (Vs(), dl("section", RV, [
            ep(ks("h6", null, null, 512), [
              [we, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            ks("h5", {
              class: "ma-0",
              textContent: $s(Ce(r))
            }, null, 8, zV)
          ])) : Ce(B) ? (Vs(), dl("section", OV, [
            pt(Ce(N), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: Lt(() => [
                ep(pt(Ce(k), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [we, [Ce(a)], "cx-sx-existing-translation-status"]
                ]),
                pt(Ce(k), { shrink: "" }, {
                  default: Lt(() => [
                    ks("a", {
                      href: Ce(S),
                      target: "_blank"
                    }, [
                      pt(Ce(WV), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: Ce(Wi)
                      }, null, 8, ["icon"])
                    ], 8, jV)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            pt(Ce(N), { class: "ma-0" }, {
              default: Lt(() => [
                pt(Ce(k), null, {
                  default: Lt(() => [
                    ks("span", {
                      textContent: $s(x.value)
                    }, null, 8, HV)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : gl("", !0),
          pt(Ce(N), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: Lt(() => [
              L.value ? (Vs(), tp(Ce(k), {
                key: 0,
                shrink: ""
              }, {
                default: Lt(() => [
                  pt(Ce(ml), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: MV(R, ["stop"])
                  }, {
                    default: Lt(() => [
                      pl($s(G.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : gl("", !0),
              j.value ? (Vs(), tp(Ce(k), {
                key: 1,
                shrink: ""
              }, {
                default: Lt(() => [
                  pt(Ce(ml), {
                    size: "large",
                    onClick: m
                  }, {
                    default: Lt(() => [
                      pl($s(G.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : gl("", !0),
              pt(Ce(k), { shrink: "" }, {
                default: Lt(() => [
                  pt(Ce(ml), {
                    weight: "primary",
                    size: "large",
                    action: Ce(y) ? "progressive" : "default",
                    onClick: h
                  }, {
                    default: Lt(() => [
                      pl($s(E.value), 1)
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
        pt(FV, {
          modelValue: c.value,
          "onUpdate:modelValue": Y[0] || (Y[0] = (q) => c.value = q),
          "target-url": g.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const hl = window.Vue.unref, YV = window.Vue.openBlock, QV = window.Vue.createBlock, JV = window.Vue.computed, Bf = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedTargetLanguageCodes: t } = pa(), {
      sourceLanguageURLParameter: n,
      targetLanguageURLParameter: o
    } = T(), { currentLanguageTitleGroup: s } = Sn(), a = JV(
      () => {
        var d;
        return ((d = s.value) == null ? void 0 : d.titles.map((i) => i.lang)) || [];
      }
    ), r = ky(), l = (d) => r(d, o.value), u = (d) => r(n.value, d);
    return (d, i) => (YV(), QV(Ui, {
      class: "sx-article-language-selector",
      "source-languages": a.value,
      "target-languages": hl(t),
      "selected-source-language": hl(n),
      "selected-target-language": hl(o),
      "onUpdate:selectedSourceLanguage": l,
      "onUpdate:selectedTargetLanguage": u
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
}, fl = window.Vue.computed, op = window.Vue.ref, ZV = window.Vue.watchEffect, eE = () => {
  const { currentSourcePage: e } = ut(), { sectionSuggestion: t } = Fe(), n = fe(), { sectionURLParameter: o } = T(), s = op(null), a = op([]);
  ZV(() => C(void 0, null, function* () {
    var d;
    if (t.value && o.value)
      a.value = [o.value];
    else if (t.value) {
      const { missingSections: i } = t.value;
      a.value = Object.keys(i);
    } else
      e.value && !Xo ? a.value = [Oo.LEAD_SECTION_DUMMY_TITLE] : a.value = [];
    a.value.length ? s.value = yield zk(
      e.value,
      a.value
    ) : s.value = ((d = e.value) == null ? void 0 : d.articleSize) || null;
  }));
  const r = fl(() => Vf(s.value || 0)), l = fl(() => {
    if (!t.value && !e.value || !r.value)
      return "";
    const d = Ok(
      r.value,
      a.value
    );
    return n.i18n(...d);
  }), u = fl(
    () => Ef(s.value)
  );
  return { timeEstimateMessage: l, isQuickTranslation: u };
};
const $e = window.Vue.unref, wl = window.Vue.toDisplayString, Vn = window.Vue.createElementVNode, Ht = window.Vue.createVNode, ko = window.Vue.withCtx, tE = window.Vue.resolveDirective, nE = window.Vue.withDirectives, oE = window.Vue.normalizeClass, sp = window.Vue.openBlock, sE = window.Vue.createElementBlock, aE = window.Vue.createCommentVNode, iE = window.Vue.createBlock, rE = ["textContent"], lE = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, cE = ["textContent"], uE = { class: "pe-3" }, dE = ["textContent"], gE = window.Codex.CdxButton, Es = window.Codex.CdxIcon, Gn = window.Vue.computed, pE = window.Vuex.useStore, mE = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = pE(), { currentSourcePage: n } = ut(), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: s,
      pageURLParameter: a
    } = T(), r = Gn(() => t.state.suggestions.favorites || []), l = Gn(
      () => r.value.some(
        (S) => a.value === S.title && o.value === S.sourceLanguage && s.value === S.targetLanguage
      )
    ), { markFavoriteSuggestion: u, removeFavoriteSuggestion: d } = mu(), i = () => u(
      a.value,
      o.value,
      s.value
    ), c = () => d(
      new jo({
        title: a.value,
        sourceLanguage: o.value,
        targetLanguage: s.value
      })
    ), g = Gn(
      () => l.value ? Nh : Mh
    ), p = Gn(
      () => l.value ? c : i
    ), m = Gn(
      () => K.getPageUrl(o.value || "", a.value || "")
    ), h = Gn(
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
    }, w = Gn(() => {
      var b;
      const S = Object.values(((b = n.value) == null ? void 0 : b.pageviews) || {}).reduce(
        (E, x) => E + x,
        0
      );
      return f(S);
    }), { timeEstimateMessage: _, isQuickTranslation: y } = eE();
    return (S, b) => {
      const E = tE("i18n");
      return sp(), iE($e(N), {
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
                      Vn("h5", {
                        class: "ma-0 me-1",
                        textContent: wl($e(a))
                      }, null, 8, rE),
                      Ht($e(Es), {
                        size: "x-small",
                        icon: $e(Wi)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  Ht($e(k), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: ko(() => [
                      Ht($e(gE), {
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
              Vn("div", lE, [
                Vn("div", null, [
                  Vn("span", null, [
                    Ht($e(Es), {
                      icon: $e(Uh),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    Vn("span", {
                      class: "pe-3",
                      textContent: wl(h.value)
                    }, null, 8, cE)
                  ]),
                  Vn("span", null, [
                    Ht($e(Es), {
                      icon: $e(HS),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    nE(Vn("span", uE, null, 512), [
                      [E, [w.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                $e(_) ? (sp(), sE("span", {
                  key: 0,
                  class: oE(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": $e(y)
                  }])
                }, [
                  Ht($e(Es), {
                    icon: $e(GS),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  Vn("span", {
                    textContent: wl($e(_))
                  }, null, 8, dE)
                ], 2)) : aE("", !0)
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
const hE = window.Vue.resolveDirective, Xn = window.Vue.createElementVNode, ti = window.Vue.withDirectives, fE = window.Vue.toDisplayString, wE = window.Vue.createTextVNode, vl = window.Vue.unref, _l = window.Vue.withCtx, Sl = window.Vue.openBlock, yl = window.Vue.createBlock;
window.Vue.createCommentVNode;
const vE = { class: "pa-4" }, _E = { class: "flex pt-2" }, SE = window.Codex.CdxButton, yE = window.Vue.ref, xE = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = Zo(), a = fu(), r = yE(!1), { currentTranslation: l } = It(), u = () => C(this, null, function* () {
      r.value = !0;
      let d = !1;
      try {
        d = yield vt.splitTranslation(
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
      const c = hE("i18n");
      return Sl(), yl(vl(_t), {
        value: e.modelValue,
        persistent: r.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: d.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: _l(() => [
          Xn("div", _E, [
            r.value ? (Sl(), yl(vl(lt), { key: 1 })) : (Sl(), yl(vl(SE), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: u
            }, {
              default: _l(() => [
                wE(fE(d.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: _l(() => [
          Xn("div", vE, [
            ti(Xn("p", null, null, 512), [
              [c, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            ti(Xn("p", null, null, 512), [
              [c, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            Xn("p", null, [
              ti(Xn("strong", null, null, 512), [
                [c, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            ti(Xn("p", null, null, 512), [
              [c, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
}, CE = window.Vuex.useStore;
let ni = [];
const wu = () => {
  const e = CE();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || ni.includes(o) ? Promise.resolve() : (ni.push(o), ro.fetchLanguageTitles(t, n).then((s) => {
      ni = ni.filter(
        (a) => a !== o
      ), s && e.commit("mediawiki/addLanguageTitleGroup", s);
    }));
  };
}, bE = window.Vue.ref, $o = bE(null), Pf = () => {
  const e = () => C(void 0, null, function* () {
    var n, o;
    $o.value || (yield Xi.fetchCXServerToken().then((s) => {
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
const ap = window.Vue.resolveDirective, oi = window.Vue.createElementVNode, ip = window.Vue.withDirectives, En = window.Vue.unref, si = window.Vue.withCtx, rn = window.Vue.createVNode, xl = window.Vue.openBlock, rp = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const kE = window.Vue.createBlock, $E = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, VE = { class: "mb-0" }, EE = { class: "sx-translation-confirmer__article-image flex justify-center" }, LE = ["src"], AE = { class: "ma-3" }, lp = window.Vue.computed, DE = window.Vue.inject, TE = window.Vue.onBeforeUnmount, BE = window.Vue.ref, PE = window.Vuex.useStore, FE = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = PE(), { currentSourcePage: n } = ut(), { previousRoute: o } = Ee(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l,
      clearTranslationURLParameters: u
    } = T(), d = DE("breakpoints"), i = lp(() => d.value.nextBreakpoint), c = lp(
      () => {
        var y;
        return (y = n.value) == null ? void 0 : y.getImage(i.value);
      }
    ), { fetchTranslationsByStatus: g } = Jo(), p = wu();
    g("draft"), p(s.value, r.value), hu(), Pf()(), zh()(a.value);
    const f = Je(), w = () => {
      const y = ["dashboard", "sx-article-search"];
      !o.value || !y.includes(o.value) ? f.push({ name: "dashboard" }) : f.push({ name: o.value });
    };
    TE(() => {
      const y = f.currentRoute.value.name;
      (y === "dashboard" || y === "sx-article-search") && u();
    });
    const _ = BE(!1);
    return (y, S) => {
      const b = ap("i18n"), E = ap("i18n-html");
      return xl(), rp("section", $E, [
        rn(En(N), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: si(() => [
            rn(En(k), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: si(() => [
                ip(oi("h5", VE, null, 512), [
                  [b, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            rn(En(k), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: si(() => [
                rn(En(qe), {
                  class: "pa-0",
                  type: "icon",
                  icon: En(zi),
                  "icon-size": 20,
                  onClick: w
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        oi("div", EE, [
          c.value ? (xl(), rp("img", {
            key: 0,
            src: c.value
          }, null, 8, LE)) : (xl(), kE(En(Qe), {
            key: 1,
            size: "120",
            icon: En(rh),
            "icon-color": y.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        rn(mE),
        rn(Bf),
        rn(KV, {
          onOpenTranslationConfirmationDialog: S[0] || (S[0] = (x) => _.value = !0)
        }),
        rn(En(N), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: si(() => [
            oi("p", AE, [
              ip(oi("small", null, null, 512), [
                [E, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        rn(xE, {
          modelValue: _.value,
          "onUpdate:modelValue": S[1] || (S[1] = (x) => _.value = x)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const NE = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: FE
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, ME = window.Vue.resolveComponent, UE = window.Vue.createVNode, IE = window.Vue.normalizeClass, RE = window.Vue.openBlock, zE = window.Vue.createElementBlock;
function OE(e, t, n, o, s, a) {
  const r = ME("sx-translation-confirmer");
  return RE(), zE("main", {
    class: IE(["sx-translation-confirmer-view", a.classes])
  }, [
    UE(r)
  ], 2);
}
const jE = /* @__PURE__ */ ce(NE, [["render", OE]]);
const HE = window.Vue.toDisplayString, cp = window.Vue.unref, qE = window.Vue.createVNode, GE = window.Vue.createTextVNode, XE = window.Vue.createElementVNode, WE = window.Vue.openBlock, KE = window.Vue.createElementBlock, YE = { class: "sx-section-selector-view-article-item" }, QE = ["href"], JE = window.Codex.CdxIcon, up = {
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
    return (t, n) => (WE(), KE("span", YE, [
      XE("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        GE(HE(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        qE(cp(JE), {
          size: "x-small",
          icon: cp(Wi)
        }, null, 8, ["icon"])
      ], 8, QE)
    ]));
  }
};
const ZE = window.Vue.resolveDirective, ai = window.Vue.createElementVNode, Cl = window.Vue.withDirectives, Wn = window.Vue.unref, e4 = window.Vue.toDisplayString, ii = window.Vue.withCtx, Ls = window.Vue.createVNode, t4 = window.Vue.openBlock, n4 = window.Vue.createElementBlock, o4 = { class: "sx-section-selector__header pa-4" }, s4 = { class: "sx-section-selector__header-text ma-0" }, a4 = ["textContent"], i4 = { class: "pt-0 ma-0" }, r4 = { class: "ma-0" }, l4 = window.Codex.CdxButton, c4 = window.Codex.CdxIcon, u4 = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = Fe();
    return (n, o) => {
      const s = ZE("i18n");
      return t4(), n4("div", o4, [
        Ls(Wn(N), { class: "ma-0 pb-3" }, {
          default: ii(() => [
            Ls(Wn(k), null, {
              default: ii(() => {
                var a;
                return [
                  Cl(ai("h6", s4, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  ai("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: e4((a = Wn(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, a4)
                ];
              }),
              _: 1
            }),
            Ls(Wn(k), {
              shrink: "",
              class: "justify-end"
            }, {
              default: ii(() => [
                Ls(Wn(l4), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: ii(() => [
                    Ls(Wn(c4), { icon: Wn(Qo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Cl(ai("h4", i4, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        Cl(ai("p", r4, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, d4 = window.Vue.renderList, g4 = window.Vue.Fragment, bl = window.Vue.openBlock, dp = window.Vue.createElementBlock, p4 = window.Vue.renderSlot, ri = window.Vue.unref, gp = window.Vue.createVNode, pp = window.Vue.withCtx, m4 = window.Vue.createBlock, h4 = { class: "sx-section-selector__sections-list ma-0 pa-0" }, f4 = window.Codex.CdxButton, w4 = window.Codex.CdxIcon, Ff = {
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
    return (t, n) => (bl(), dp("ul", h4, [
      (bl(!0), dp(g4, null, d4(e.sections, (o) => (bl(), m4(ri(N), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: pp(() => [
          gp(ri(f4), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: pp(() => [
              p4(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              gp(ri(w4), { icon: ri(fa) }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["aria-label", "onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, v4 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const _4 = window.Vue.resolveDirective, li = window.Vue.createElementVNode, kl = window.Vue.withDirectives, At = window.Vue.unref, mp = window.Vue.toDisplayString, Vo = window.Vue.withCtx, $l = window.Vue.openBlock, hp = window.Vue.createBlock;
window.Vue.createCommentVNode;
const As = window.Vue.createVNode, S4 = window.Vue.createTextVNode, y4 = window.Vue.createElementBlock, x4 = { class: "sx-section-selector__missing-sections py-2" }, C4 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, b4 = ["lang", "dir", "textContent"], fp = window.Vue.computed, k4 = window.Codex.CdxButton, $4 = {
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
      const l = _4("i18n");
      return $l(), y4("section", x4, [
        kl(li("h4", C4, null, 512), [
          [l, [
            o.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        s.value ? ($l(), hp(At(N), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: Vo(() => [
            As(At(k), {
              class: "py-6 justify-center",
              innerHTML: At(v4)
            }, null, 8, ["innerHTML"]),
            As(At(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: Vo(() => [
                kl(li("h6", null, null, 512), [
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
                kl(li("p", null, null, 512), [
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
                As(At(k4), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: r[1] || (r[1] = (u) => a.$emit("close"))
                }, {
                  default: Vo(() => [
                    S4(mp(a.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : ($l(), hp(Ff, {
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
              }, null, 8, b4)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const V4 = window.Vue.resolveDirective, ci = window.Vue.createElementVNode, E4 = window.Vue.withDirectives, Kn = window.Vue.unref, wp = window.Vue.toDisplayString, L4 = window.Vue.withCtx, A4 = window.Vue.createVNode, D4 = window.Vue.openBlock, T4 = window.Vue.createElementBlock, B4 = { class: "sx-section-selector__present-sections py-2" }, P4 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, F4 = { class: "sx-section-selector__present-section-button-content" }, N4 = ["lang", "dir", "textContent"], M4 = ["lang", "dir", "textContent"], U4 = window.Vue.computed, vp = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = Fe(), { targetLanguageURLParameter: n } = T(), o = U4(() => O.getAutonym(n.value));
    return (s, a) => {
      var l;
      const r = V4("i18n");
      return D4(), T4("section", B4, [
        E4(ci("h4", P4, null, 512), [
          [r, [
            o.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        A4(Ff, {
          sections: ((l = Kn(t)) == null ? void 0 : l.orderedPresentSections) || [],
          onSelectSection: a[0] || (a[0] = (u) => s.$emit("select-section", u))
        }, {
          default: L4(({ sourceSection: u, targetSection: d }) => {
            var i, c, g, p;
            return [
              ci("div", F4, [
                ci("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (i = Kn(t)) == null ? void 0 : i.sourceLanguage,
                  dir: Kn(O.getDir)((c = Kn(t)) == null ? void 0 : c.sourceLanguage),
                  textContent: wp(u)
                }, null, 8, N4),
                ci("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (g = Kn(t)) == null ? void 0 : g.targetLanguage,
                  dir: Kn(O.getDir)((p = Kn(t)) == null ? void 0 : p.targetLanguage),
                  textContent: wp(d)
                }, null, 8, M4)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const Ue = window.Vue.createVNode, Vl = window.Vue.openBlock, _p = window.Vue.createBlock, Sp = window.Vue.createCommentVNode, I4 = window.Vue.resolveDirective, Ln = window.Vue.createElementVNode, Ds = window.Vue.withDirectives, nt = window.Vue.unref, ln = window.Vue.withCtx, R4 = window.Vue.normalizeClass, yp = window.Vue.toDisplayString, xp = window.Vue.createTextVNode, z4 = window.Vue.createElementBlock, O4 = { class: "sx-section-selector col-12 col-tablet-9 col-desktop-7 mx-auto" }, j4 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, H4 = { class: "sx-section-selector__additional-consideration-title" }, q4 = { href: "#" }, G4 = { class: "sx-section-selector__additional-consideration-title" }, X4 = { href: "#" }, Ts = window.Vue.computed, W4 = window.Vue.inject, K4 = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = W4("breakpoints"), n = Ts(() => t.value.desktopAndUp), { sectionSuggestion: o } = Fe(), {
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
    ), g = Je(), p = () => {
      r(), g.push({ name: "dashboard" });
    }, { currentTranslation: m } = It(), h = Zo(), f = fu(), { selectPageSectionByTitle: w } = er(), _ = (y) => {
      l(y), m.value ? (f(), h()) : (w(y), g.push({ name: "sx-content-comparator" }));
    };
    return (y, S) => {
      const b = I4("i18n");
      return Vl(), z4("section", O4, [
        Ue(u4, { onClose: p }),
        Ue(Bf),
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
                Ue($4, {
                  onSelectSection: _,
                  onClose: p
                }),
                n.value ? Sp("", !0) : (Vl(), _p(vp, {
                  key: 0,
                  onSelectSection: _
                })),
                Ln("section", {
                  class: R4(["py-2", { "sx-section-selector__more-details--desktop": n.value }])
                }, [
                  Ds(Ln("h4", j4, null, 512), [
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
                        Ln("h6", H4, [
                          Ue(nt(Qe), {
                            icon: nt(T0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          xp(" " + yp(y.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                        ]),
                        Ds(Ln("p", null, null, 512), [
                          [b, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                        ]),
                        Ds(Ln("a", q4, null, 512), [
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
                        Ln("h6", G4, [
                          Ue(nt(Qe), {
                            icon: nt(D0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          xp(" " + yp(y.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                        ]),
                        Ds(Ln("p", null, null, 512), [
                          [b, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                        ]),
                        Ds(Ln("a", X4, null, 512), [
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
            n.value ? (Vl(), _p(nt(k), {
              key: 0,
              desktop: "4",
              class: "ma-0 pa-0"
            }, {
              default: ln(() => [
                Ue(vp, {
                  class: "sx-section-selector-section-list-present--sidebar fill-height p-0",
                  onSelectSection: _
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
}, Y4 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: K4
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, Q4 = window.Vue.resolveComponent, J4 = window.Vue.createVNode, Z4 = window.Vue.normalizeClass, e3 = window.Vue.openBlock, t3 = window.Vue.createElementBlock;
function n3(e, t, n, o, s, a) {
  const r = Q4("sx-section-selector");
  return e3(), t3("main", {
    class: Z4(["sx-section-selector-view", a.classes])
  }, [
    J4(r)
  ], 2);
}
const o3 = /* @__PURE__ */ ce(Y4, [["render", n3]]), ui = window.Vue.computed, s3 = () => {
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
const Cp = window.Vue.unref, a3 = window.Vue.createVNode, i3 = window.Vue.openBlock, r3 = window.Vue.createElementBlock, l3 = { class: "sx-content-comparator__content-type-selector" }, c3 = window.Vue.watchEffect, u3 = {
  __name: "ContentTypeSelector",
  props: {
    selection: {
      type: String,
      required: !0
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = (r) => o("update:selection", r), a = s3();
    return c3(() => {
      a.value.map((l) => l.value).includes(n.selection) || s(a.value[0].value);
    }), (r, l) => (i3(), r3("div", l3, [
      a3(Cp(ua), {
        items: Cp(a),
        active: e.selection,
        onSelect: s
      }, null, 8, ["items", "active"])
    ]));
  }
}, Bs = window.Vue.computed, d3 = window.Vuex.useStore, oe = () => {
  const e = d3(), { currentSourcePage: t, currentTargetPage: n } = ut(), { currentMTProvider: o } = Ee(e), { sectionURLParameter: s } = T(), a = Bs(() => {
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
}, Ps = window.Vue.computed, vu = () => {
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
const di = window.Vue.createVNode, g3 = window.Vue.toDisplayString, p3 = window.Vue.createElementVNode, An = window.Vue.unref, gi = window.Vue.withCtx, El = window.Vue.openBlock, Ll = window.Vue.createBlock;
window.Vue.createCommentVNode;
const m3 = window.Vue.normalizeClass, h3 = ["lang", "dir", "textContent"], bp = window.Vue.ref, Al = window.Vue.computed, f3 = window.Vue.onMounted, w3 = {
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
    const n = e, o = t, s = bp(!1), { sectionSuggestion: a } = Fe(), { sectionURLParameter: r } = T(), l = Al(
      () => (r.value || "").replace(/ /g, "_")
    ), u = (m) => o("update:contentTypeSelection", m), { activeSectionTargetTitle: d, targetSectionAnchor: i } = vu(), c = Al(() => {
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
    }), g = Al(
      () => K.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), p = bp(null);
    return f3(() => {
      new IntersectionObserver(
        ([h]) => {
          s.value = h.intersectionRect.height < h.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(p.value.$el);
    }), (m, h) => (El(), Ll(An(N), {
      ref_key: "contentHeader",
      ref: p,
      class: m3(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
      direction: "column",
      align: "stretch",
      reverse: s.value
    }, {
      default: gi(() => [
        di(u3, {
          selection: e.contentTypeSelection,
          "onUpdate:selection": u
        }, null, 8, ["selection"]),
        di(An(N), {
          justify: "between",
          class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
        }, {
          default: gi(() => [
            di(An(k), null, {
              default: gi(() => [
                p3("h3", {
                  lang: c.value.lang,
                  dir: c.value.dir,
                  class: "ma-0 pa-0",
                  textContent: g3(c.value.title)
                }, null, 8, h3)
              ]),
              _: 1
            }),
            di(An(k), { shrink: "" }, {
              default: gi(() => [
                s.value ? (El(), Ll(An(qe), {
                  key: 0,
                  icon: An(Ri),
                  progressive: "",
                  label: m.$i18n(
                    "cx-sx-content-comparator-content-header-translate-button-label"
                  ),
                  onClick: h[0] || (h[0] = (f) => m.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label"])) : (El(), Ll(An(qe), {
                  key: 1,
                  class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                  icon: An(ih),
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
}, pi = window.Vue.unref, kp = window.Vue.createVNode, v3 = window.Vue.openBlock, _3 = window.Vue.createElementBlock, S3 = { class: "sx-content-comparator__header-navigation flex items-center" }, y3 = window.Vue.computed, x3 = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = T(), o = y3(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = er(), a = () => {
      const l = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[l];
      s(u);
    }, r = () => {
      const l = (o.value + 1) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[l];
      s(u);
    };
    return (l, u) => (v3(), _3("div", S3, [
      kp(pi(qe), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: pi(V0),
        onClick: a
      }, null, 8, ["icon"]),
      kp(pi(qe), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: pi($0),
        onClick: r
      }, null, 8, ["icon"])
    ]));
  }
};
const $p = window.Vue.toDisplayString, be = window.Vue.unref, C3 = window.Vue.resolveDirective, Dl = window.Vue.withDirectives, Eo = window.Vue.openBlock, mi = window.Vue.createElementBlock, b3 = window.Vue.createCommentVNode, k3 = window.Vue.createTextVNode, Vp = window.Vue.createElementVNode, $3 = window.Vue.normalizeClass, Tl = window.Vue.withCtx, Bl = window.Vue.createVNode, Ep = window.Vue.createBlock, V3 = { class: "sx-content-comparator-header__mapped-section" }, E3 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, L3 = { key: 0 }, A3 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, D3 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, T3 = window.Vue.computed, B3 = {
  __name: "SXContentComparatorHeaderMappedSection",
  setup(e) {
    const { targetLanguageURLParameter: t } = T(), { activeSectionTargetTitle: n } = vu(), o = fe(), { target: s, PUBLISHING_TARGETS: a, setTarget: r } = Ut(), l = T3(
      () => o.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        O.getAutonym(t.value)
      )
    );
    return (u, d) => {
      const i = C3("i18n");
      return Eo(), mi("div", V3, [
        Bl(be(N), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: Tl(() => [
            Bl(be(k), { grow: "" }, {
              default: Tl(() => [
                Vp("h6", E3, [
                  k3($p(l.value) + " ", 1),
                  be(s) === be(a).NEW_SECTION ? Dl((Eo(), mi("span", L3, null, 512)), [
                    [i, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : b3("", !0)
                ]),
                Vp("h6", {
                  class: $3(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": be(s) === be(a).NEW_SECTION
                  }])
                }, $p(be(n)), 3)
              ]),
              _: 1
            }),
            Bl(be(k), { shrink: "" }, {
              default: Tl(() => [
                be(s) === be(a).EXPAND ? (Eo(), Ep(be(qe), {
                  key: 0,
                  class: "sx-content-comparator-header__mapped-section__discard-button pa-0",
                  icon: be(ah),
                  type: "icon",
                  onClick: d[0] || (d[0] = (c) => be(r)(be(a).NEW_SECTION))
                }, null, 8, ["icon"])) : (Eo(), Ep(be(qe), {
                  key: 1,
                  class: "sx-content-comparator-header__mapped-section__undo-button pa-0",
                  icon: be(F0),
                  type: "icon",
                  onClick: d[1] || (d[1] = (c) => be(r)(be(a).EXPAND))
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        be(s) === be(a).EXPAND ? Dl((Eo(), mi("p", A3, null, 512)), [
          [i, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ]) : Dl((Eo(), mi("p", D3, null, 512)), [
          [i, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ])
      ]);
    };
  }
};
const De = window.Vue.unref, Lo = window.Vue.createVNode, Lp = window.Vue.toDisplayString, fn = window.Vue.createElementVNode, Pl = window.Vue.withCtx, P3 = window.Vue.resolveDirective, Ap = window.Vue.withDirectives, Fl = window.Vue.openBlock, Dp = window.Vue.createBlock, Tp = window.Vue.createCommentVNode, F3 = window.Vue.createElementBlock, N3 = { class: "sx-content-comparator__header pa-4" }, M3 = { class: "row my-1 py-2 mx-0 gap-6" }, U3 = { class: "sx-content-comparator-header__titles-nav flex grow justify-between" }, I3 = { class: "sx-content-comparator-header__titles shrink" }, R3 = ["lang", "dir"], z3 = ["lang", "dir"], O3 = { class: "py-2 mb-1" }, j3 = /* @__PURE__ */ fn("br", null, null, -1), Nl = window.Vue.computed, H3 = {
  __name: "SXContentComparatorHeader",
  emits: ["close", "translation-button-clicked"],
  setup(e) {
    const { sectionURLParameter: t } = T(), { sourceSection: n } = oe(), { sectionSuggestion: o, isCurrentSectionPresent: s } = Fe(), a = Nl(
      () => {
        var u;
        return (u = o.value) == null ? void 0 : u.missingSections.hasOwnProperty(t.value);
      }
    ), r = Nl(() => {
      var u;
      return (u = n.value) == null ? void 0 : u.html;
    }), l = Nl(() => [
      ...Object.keys(o.value.missingSections),
      ...Object.keys(o.value.presentSections)
    ]);
    return (u, d) => {
      const i = P3("i18n");
      return Fl(), F3("div", N3, [
        Lo(De(qe), {
          class: "py-2 pa-0",
          icon: De(E0),
          label: u.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: d[0] || (d[0] = (c) => u.$emit("close"))
        }, null, 8, ["icon", "label"]),
        fn("div", M3, [
          fn("div", U3, [
            fn("div", I3, [
              fn("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: De(o).sourceLanguage,
                dir: De(O.getDir)(De(o).sourceLanguage)
              }, Lp(De(o).sourceTitle), 9, R3),
              fn("h2", {
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: De(o).sourceLanguage,
                dir: De(O.getDir)(De(o).sourceLanguage)
              }, Lp(De(t)), 9, z3)
            ]),
            Lo(x3, { "section-source-titles": l.value }, null, 8, ["section-source-titles"])
          ]),
          fn("div", O3, [
            Lo(De(qe), {
              class: "sx-content-comparator-header__translation-button",
              icon: De(Ri),
              progressive: "",
              label: u.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !r.value,
              onClick: d[1] || (d[1] = (c) => u.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ])
        ]),
        a.value ? (Fl(), Dp(De(N), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: Pl(() => [
            Lo(De(k), {
              shrink: "",
              class: "pe-2"
            }, {
              default: Pl(() => [
                Lo(De(Qe), { icon: De(B0) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Lo(De(k), { class: "ma-0" }, {
              default: Pl(() => [
                Ap(fn("strong", null, null, 512), [
                  [i, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                j3,
                Ap(fn("span", null, null, 512), [
                  [i, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Tp("", !0),
        De(s) ? (Fl(), Dp(B3, { key: 1 })) : Tp("", !0)
      ]);
    };
  }
};
const Bp = window.Vue.toDisplayString, q3 = window.Vue.createElementVNode, Pp = window.Vue.openBlock, Fp = window.Vue.createElementBlock, G3 = window.Vue.createCommentVNode, X3 = { class: "sx-content-comparator__new-section-placeholder mt-4 py-4 px-7" }, W3 = ["textContent"], K3 = ["textContent"], Nf = {
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
    return (t, n) => (Pp(), Fp("section", X3, [
      q3("h5", {
        textContent: Bp(e.placeholderTitle)
      }, null, 8, W3),
      e.placeholderSubtitle ? (Pp(), Fp("p", {
        key: 0,
        textContent: Bp(e.placeholderSubtitle)
      }, null, 8, K3)) : G3("", !0)
    ]));
  }
}, Y3 = window.Vue.computed, Q3 = window.Vue.createApp, J3 = window.Vuex.useStore, Z3 = () => {
  const e = J3(), { sectionSuggestion: t } = Fe(), { currentTargetPage: n } = ut(), o = fe(), s = () => Q3(
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
  return Y3(() => {
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
const Ml = window.Vue.createVNode, ot = window.Vue.unref, Ao = window.Vue.openBlock, Np = window.Vue.createBlock, Mp = window.Vue.createCommentVNode, hi = window.Vue.createElementVNode, Ul = window.Vue.Fragment, fi = window.Vue.createElementBlock, e5 = { class: "sx-content-comparator col-12 col-tablet-9 col-desktop-7 mx-auto" }, t5 = { class: "sx-content-comparator__source-content" }, n5 = ["lang", "dir", "innerHTML"], o5 = ["lang", "dir", "innerHTML"], s5 = ["innerHTML"], a5 = window.Vue.ref, i5 = window.Vue.computed, Up = window.Vue.watch, r5 = {
  __name: "SXContentComparator",
  setup(e) {
    const { resetPublishTarget: t } = Ut(), n = Je(), o = a5("source_section"), { logDashboardTranslationStartEvent: s } = Zi(), a = Zo(), r = () => n.push({ name: "sx-section-selector" }), l = () => {
      s(), a();
    }, {
      sourceLanguageURLParameter: u,
      targetLanguageURLParameter: d
    } = T(), { sourceSectionContent: i, targetSectionContent: c } = vu(), g = Z3(), { sectionSuggestion: p, isCurrentSectionPresent: m } = Fe(), h = i5(() => p.value.targetTitle), f = Tf();
    return Up(
      h,
      () => f(
        d.value,
        u.value,
        h.value
      ),
      { immediate: !0 }
    ), Up(m, t, { immediate: !0 }), (w, _) => (Ao(), fi("section", e5, [
      Ml(H3, {
        onTranslationButtonClicked: l,
        onClose: r
      }),
      Ml(w3, {
        "content-type-selection": o.value,
        "onUpdate:contentTypeSelection": _[0] || (_[0] = (y) => o.value = y),
        onTranslationButtonClicked: l
      }, null, 8, ["content-type-selection"]),
      hi("section", t5, [
        o.value === "source_section" ? (Ao(), fi(Ul, { key: 0 }, [
          ot(i) ? Mp("", !0) : (Ao(), Np(ot(lt), { key: 0 })),
          hi("section", {
            lang: ot(u),
            dir: ot(O.getDir)(ot(u)),
            class: "pt-2 px-4",
            innerHTML: ot(i)
          }, null, 8, n5)
        ], 64)) : o.value === "target_article" ? (Ao(), fi(Ul, { key: 1 }, [
          ot(g) ? Mp("", !0) : (Ao(), Np(ot(lt), { key: 0 })),
          hi("article", {
            lang: ot(d),
            dir: ot(O.getDir)(ot(d)),
            class: "px-4",
            innerHTML: ot(g)
          }, null, 8, o5)
        ], 64)) : (Ao(), fi(Ul, { key: 2 }, [
          hi("section", {
            class: "pa-4",
            innerHTML: ot(c)
          }, null, 8, s5),
          Ml(Nf, {
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
}, l5 = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: r5
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, c5 = window.Vue.resolveComponent, u5 = window.Vue.createVNode, d5 = window.Vue.normalizeClass, g5 = window.Vue.openBlock, p5 = window.Vue.createElementBlock;
function m5(e, t, n, o, s, a) {
  const r = c5("sx-content-comparator");
  return g5(), p5("main", {
    class: d5(["sx-content-comparator-view", a.classes])
  }, [
    u5(r)
  ], 2);
}
const h5 = /* @__PURE__ */ ce(l5, [["render", m5]]);
const f5 = window.Vue.resolveDirective, Fs = window.Vue.createElementVNode, Ip = window.Vue.withDirectives, wi = window.Vue.unref, Il = window.Vue.createVNode, Rp = window.Vue.toDisplayString, zp = window.Vue.createTextVNode, Ns = window.Vue.withCtx, w5 = window.Vue.openBlock, v5 = window.Vue.createBlock, _5 = { class: "mw-ui-dialog__header px-4 py-3" }, S5 = { class: "mw-ui-dialog__header-title" }, y5 = { class: "pa-4" }, x5 = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, Op = window.Codex.CdxButton, C5 = {
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
      const u = f5("i18n");
      return w5(), v5(wi(_t), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: Ns(() => [
          Fs("div", _5, [
            Ip(Fs("span", S5, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: Ns(() => [
          Fs("div", x5, [
            Il(wi(Op), {
              weight: "quiet",
              onClick: s
            }, {
              default: Ns(() => [
                zp(Rp(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            Il(wi(Op), {
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
          Il(wi(Ii)),
          Fs("div", y5, [
            Ip(Fs("span", null, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, b5 = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => oo(a)
  );
  return s && gh(s) ? vt.parseTemplateWikitext(
    uh(s),
    n,
    t
  ) : Promise.resolve(null);
}, Mf = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => oo(a)
  );
  return s ? vt.parseTemplateWikitext(
    uh(s),
    n,
    t
  ) : Promise.resolve(null);
}, k5 = window.Vuex.useStore, _u = () => {
  const e = k5(), { sourceSection: t } = oe(), { getCurrentTitleByLanguage: n } = Sn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = T(), a = Pf(), r = (i, c, g) => {
    if (i === 0) {
      t.value.proposedTitleTranslations[c] = g;
      return;
    }
    const p = t.value.getContentTranslationUnitById(i);
    p instanceof rt ? p.blockTemplateProposedTranslations[c] = g : p instanceof Nn && p.addProposedTranslation(c, g);
  }, l = (i, c) => C(void 0, null, function* () {
    if (!e.getters["mediawiki/isValidProviderForTranslation"](o.value, s.value, i))
      return "";
    try {
      const p = yield a();
      return yield vt.fetchSegmentTranslation(
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
    ), m = (yield b5(
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
}, $5 = window.Vuex.useStore, V5 = () => {
  const { sourceSection: e } = oe(), t = $5(), { translateTranslationUnitById: n } = _u();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
function E5(e) {
  const t = document.createElement("div");
  return t.innerHTML = e, t.querySelectorAll("a").forEach((o) => {
    o.setAttribute("target", "_blank");
  }), t.innerHTML;
}
const L5 = window.Vue.resolveDirective, it = window.Vue.createElementVNode, vi = window.Vue.withDirectives, ze = window.Vue.unref, Rl = window.Vue.createVNode, cn = window.Vue.withCtx, A5 = window.Vue.renderList, D5 = window.Vue.Fragment, _i = window.Vue.openBlock, T5 = window.Vue.createElementBlock, B5 = window.Vue.toDisplayString, zl = window.Vue.createBlock, jp = window.Vue.createCommentVNode, P5 = { class: "mw-ui-dialog__header pa-4" }, F5 = { class: "row ma-0 py-2" }, N5 = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, M5 = { class: "mb-0" }, U5 = { class: "col shrink justify-center" }, I5 = { class: "pb-2 mb-0" }, R5 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, z5 = ["dir", "lang", "innerHTML"], O5 = ["textContent"], j5 = ["innerHTML"], H5 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, q5 = /* @__PURE__ */ it("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), G5 = ["innerHTML"], Ol = window.Vue.computed, X5 = window.Vuex.useStore, W5 = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = ne.EMPTY_TEXT_PROVIDER_KEY, s = ne.ORIGINAL_TEXT_PROVIDER_KEY, a = X5(), {
      sourceSection: r,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: u
    } = oe(), {
      sourceLanguageURLParameter: d,
      targetLanguageURLParameter: i
    } = T(), c = Ol(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        d.value,
        i.value
      )
    ), g = Ol(() => {
      const S = [s, o];
      return c.value.filter(
        (b) => !S.includes(b)
      );
    }), p = Ol(
      () => l.value ? r.value.proposedTitleTranslations : u.value.proposedTranslations
    ), m = V5(), h = (S) => {
      m(S), w();
    }, f = ne.getMTProviderLabel, w = () => n("update:active", !1), _ = fe(), y = E5(
      _.i18n("cx-tools-mt-noservices")
    );
    return (S, b) => {
      const E = L5("i18n");
      return e.active ? (_i(), zl(ze(_t), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: cn(() => [
          it("div", P5, [
            it("div", F5, [
              it("div", N5, [
                vi(it("h4", M5, null, 512), [
                  [E, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              it("div", U5, [
                Rl(ze(qe), {
                  type: "icon",
                  icon: ze(zi),
                  class: "pa-0",
                  onClick: w
                }, null, 8, ["icon"])
              ])
            ]),
            vi(it("h6", I5, null, 512), [
              [E, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: cn(() => [
          Rl(ze(Ye), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: b[0] || (b[0] = (x) => h(ze(s)))
          }, {
            header: cn(() => [
              vi(it("h5", R5, null, 512), [
                [E, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: cn(() => [
              it("p", {
                dir: ze(O.getDir)(ze(d)),
                lang: ze(d),
                innerHTML: p.value[ze(s)]
              }, null, 8, z5)
            ]),
            _: 1
          }),
          (_i(!0), T5(D5, null, A5(g.value, (x) => (_i(), zl(ze(Ye), {
            key: x,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (R) => h(x)
          }, {
            header: cn(() => [
              it("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: B5(ze(f)(x))
              }, null, 8, O5)
            ]),
            default: cn(() => [
              it("p", {
                innerHTML: p.value[x]
              }, null, 8, j5)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          Rl(ze(Ye), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: b[1] || (b[1] = (x) => h(ze(o)))
          }, {
            header: cn(() => [
              vi(it("h5", H5, null, 512), [
                [E, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: cn(() => [
              q5
            ]),
            _: 1
          }),
          g.value.length ? jp("", !0) : (_i(), zl(ze(Ye), {
            key: 0,
            class: "sx-sentence-selector__mt-disabled-info-card mx-4 pa-5"
          }, {
            header: cn(() => [
              it("h5", {
                class: "sx-sentence-selector__translation-info-card-title",
                innerHTML: ze(y)
              }, null, 8, G5)
            ]),
            _: 1
          }))
        ]),
        _: 1
      })) : jp("", !0);
    };
  }
}, K5 = window.Vuex.useStore, es = () => {
  const { sourceSection: e } = oe(), t = K5(), { translateTranslationUnitById: n } = _u(), { currentMTProvider: o } = Ee(t), s = (l) => C(void 0, null, function* () {
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
const Hp = window.Vue.toDisplayString, jl = window.Vue.createElementVNode, Hl = window.Vue.unref, Y5 = window.Vue.createVNode, Q5 = window.Vue.normalizeClass, J5 = window.Vue.withCtx, Z5 = window.Vue.openBlock, eL = window.Vue.createBlock, tL = ["href"], nL = ["textContent"], oL = ["textContent"], Do = window.Vue.computed, qp = "sx-sentence-selector__section-title", sL = {
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
    return (p, m) => (Z5(), eL(Hl(k), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: J5(() => [
        jl("a", {
          href: l.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          jl("strong", {
            textContent: Hp(a.value)
          }, null, 8, nL),
          Y5(Hl(Qe), {
            icon: Hl(ih),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, tL),
        jl("h2", {
          class: Q5(["pa-0 ma-0", i.value]),
          onClick: g,
          textContent: Hp(r.value)
        }, null, 10, oL)
      ]),
      _: 1
    }));
  }
};
const qt = window.Vue.unref, Ms = window.Vue.createVNode, Si = window.Vue.withCtx, Gp = window.Vue.toDisplayString, Xp = window.Vue.createTextVNode, aL = window.Vue.openBlock, iL = window.Vue.createBlock, rL = window.Vue.computed, ql = window.Codex.CdxButton, Wp = window.Codex.CdxIcon, Uf = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = oe(), s = rL(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, r) => (aL(), iL(qt(N), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: Si(() => [
        Ms(qt(ql), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: qt(n),
          onClick: r[0] || (r[0] = (l) => a.$emit("select-previous-segment"))
        }, {
          default: Si(() => [
            Ms(qt(Wp), {
              class: "me-1",
              icon: qt(iu)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        Ms(qt(ql), {
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
        Ms(qt(ql), {
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
const Yn = window.Vue.unref, lL = window.Vue.toDisplayString, Us = window.Vue.createVNode, yi = window.Vue.withCtx, cL = window.Vue.openBlock, uL = window.Vue.createBlock, Gl = window.Vue.computed, dL = window.Vuex.useStore, gL = window.Codex.CdxButton, pL = window.Codex.CdxIcon, mL = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = dL(), n = Gl(() => t.state.application.currentMTProvider), o = fe(), s = Gl(() => ({
      [ne.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [ne.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = Gl(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        ne.getMTProviderLabel(n.value)
      )
    );
    return (r, l) => (cL(), uL(Yn(k), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: yi(() => [
        Us(Yn(N), { class: "ma-0 ps-5 pb-4" }, {
          default: yi(() => [
            Us(Yn(k), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: lL(a.value)
            }, null, 8, ["textContent"]),
            Us(Yn(k), {
              shrink: "",
              class: "pe-5"
            }, {
              default: yi(() => [
                Us(Yn(gL), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: l[0] || (l[0] = (u) => r.$emit("configure-options"))
                }, {
                  default: yi(() => [
                    Us(Yn(pL), {
                      class: "pa-0",
                      icon: Yn(au)
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
const Dt = window.Vue.unref, Dn = window.Vue.createVNode, hL = window.Vue.resolveDirective, Kp = window.Vue.createElementVNode, fL = window.Vue.withDirectives, Yp = window.Vue.toDisplayString, Qp = window.Vue.createTextVNode, Is = window.Vue.withCtx, wL = window.Vue.openBlock, vL = window.Vue.createElementBlock, _L = { class: "mt-retry-body pb-5" }, SL = { class: "retry-body__message" }, Jp = window.Codex.CdxButton, Xl = window.Codex.CdxIcon, yL = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = hL("i18n");
      return wL(), vL("div", _L, [
        Kp("div", SL, [
          Dn(Dt(Xl), {
            class: "me-2",
            icon: Dt(jS)
          }, null, 8, ["icon"]),
          fL(Kp("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        Dn(Dt(N), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: Is(() => [
            Dn(Dt(k), { cols: "6" }, {
              default: Is(() => [
                Dn(Dt(Jp), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: Is(() => [
                    Dn(Dt(Xl), {
                      class: "me-1",
                      icon: Dt(Ih)
                    }, null, 8, ["icon"]),
                    Qp(" " + Yp(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Dn(Dt(k), { cols: "6" }, {
              default: Is(() => [
                Dn(Dt(Jp), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: Is(() => [
                    Dn(Dt(Xl), {
                      class: "me-1",
                      icon: Dt(ty)
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
const To = window.Vue.createVNode, st = window.Vue.unref, Rs = window.Vue.openBlock, xL = window.Vue.createElementBlock, CL = window.Vue.createCommentVNode, xi = window.Vue.createBlock, bL = window.Vue.normalizeClass, kL = window.Vue.normalizeStyle, zs = window.Vue.withCtx, $L = window.Vue.toDisplayString, VL = window.Vue.createTextVNode, EL = window.Vue.normalizeProps, LL = window.Vue.guardReactiveProps, AL = ["lang", "dir", "innerHTML"], Wl = window.Vue.ref, DL = window.Vue.onMounted, TL = window.Vue.onBeforeUnmount, Kl = window.Vue.computed, BL = window.Vue.nextTick, PL = window.Vuex.useStore, FL = window.Codex.CdxButton, NL = window.Codex.CdxIcon, ML = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = Wl(0), n = Wl(null), o = Wl(null), s = PL(), { currentMTProvider: a } = Ee(s), { targetLanguageURLParameter: r } = T(), { sourceSection: l, currentProposedTranslation: u } = oe(), d = Kl(
      () => {
        var m, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (m = l.value) == null ? void 0 : m.selectedTranslationUnitId
        );
      }
    ), i = Kl(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), c = Kl(
      () => !!u.value || a.value === ne.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    DL(() => C(this, null, function* () {
      yield BL(), g(), p.observe(n.value.$el), p.observe(o.value.$el);
    })), TL(() => {
      p.unobserve(n.value.$el), p.unobserve(o.value.$el);
    });
    const p = new ResizeObserver(() => g());
    return (m, h) => (Rs(), xi(st(Ye), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: zs(() => [
        To(st(N), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: zs(() => [
            To(mL, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => m.$emit("configure-options"))
            }, null, 512),
            To(st(k), {
              class: bL(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !c.value && d.value
              }]),
              style: kL(c.value ? i.value : null)
            }, {
              default: zs(() => [
                c.value ? (Rs(), xL("section", {
                  key: 0,
                  lang: st(r),
                  dir: st(O.getDir)(st(r)),
                  innerHTML: st(u)
                }, null, 8, AL)) : d.value ? (Rs(), xi(st(lt), { key: 1 })) : (Rs(), xi(yL, {
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
                c.value || d.value ? (Rs(), xi(st(FL), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !c.value,
                  onClick: h[3] || (h[3] = (f) => m.$emit("edit-translation", st(u)))
                }, {
                  default: zs(() => [
                    To(st(NL), {
                      class: "me-1",
                      icon: st(su)
                    }, null, 8, ["icon"]),
                    VL(" " + $L(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : CL("", !0),
                To(Uf, EL(LL(m.$attrs)), null, 16)
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
}, UL = window.Vue.computed, IL = (e) => UL(() => {
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
const RL = window.Vue.unref, zL = window.Vue.normalizeClass, OL = window.Vue.openBlock, jL = window.Vue.createElementBlock, HL = ["innerHTML"], qL = window.Vue.onMounted, GL = window.Vue.ref, XL = window.Vue.computed, WL = {
  __name: "SubSection",
  props: {
    subSection: {
      type: rt,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = GL(null), a = IL(n.subSection);
    qL(() => {
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
    }, u = XL(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (d, i) => (OL(), jL("div", {
      ref_key: "subSectionRoot",
      ref: s,
      class: zL(["sx-sentence-selector__subsection", u.value]),
      innerHTML: RL(a)
    }, null, 10, HL));
  }
};
const Zp = window.Vue.unref, em = window.Vue.createVNode, tm = window.Vue.normalizeStyle, KL = window.Vue.openBlock, YL = window.Vue.createElementBlock, nm = window.Vue.computed, If = {
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
      () => !t.isTemplateAdapted || t.percentage === 0 ? N0 : Lc
    );
    return (s, a) => (KL(), YL("div", {
      class: "block-template-status-indicator",
      style: tm(n.value)
    }, [
      em(Zp(Z1), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      em(Zp(Qe), {
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
const Tn = window.Vue.unref, Ci = window.Vue.createVNode, Yl = window.Vue.withCtx, QL = window.Vue.openBlock, JL = window.Vue.createBlock, ZL = window.Vue.computed, om = window.Codex.CdxButton, sm = window.Codex.CdxIcon, Rf = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "select-next-segment"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = oe(), o = ZL(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (QL(), JL(Tn(N), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: Yl(() => [
        Ci(Tn(om), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: Tn(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => s.$emit("select-previous-segment"))
        }, {
          default: Yl(() => [
            Ci(Tn(sm), { icon: Tn(iu) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        Ci(Tn(om), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => s.$emit("select-next-segment"))
        }, {
          default: Yl(() => [
            Ci(Tn(sm), { icon: Tn(fa) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
}, Os = window.Vue.openBlock, bi = window.Vue.createBlock;
window.Vue.createCommentVNode;
const un = window.Vue.unref, Bo = window.Vue.withCtx, js = window.Vue.createVNode, Ql = window.Vue.toDisplayString, Jl = window.Vue.createElementVNode, eA = window.Vue.renderList, tA = window.Vue.Fragment, nA = window.Vue.createElementBlock, oA = { class: "pa-4" }, sA = ["textContent"], aA = ["textContent"], iA = window.Vuex.useStore, ki = window.Vue.computed, rA = {
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
    const t = e, { targetLanguageAutonym: n } = Ee(iA()), o = ki(
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
          icon: U0,
          color: ft.gray500
        });
      else if (!t.isTemplateAdapted)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            t.sourceParamsCount
          ),
          icon: zi,
          color: ft.gray500
        });
      else if (o.value < 100)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            t.targetParamsCount,
            t.sourceParamsCount
          ),
          icon: Lc,
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
          icon: Lc,
          color: ft.blue600
        });
      }
      return t.mandatoryMissingParamsCount ? u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          t.mandatoryMissingParamsCount,
          n.value
        ),
        icon: Ri,
        color: ft.gray500
      }) : t.targetTemplateExists && t.isTemplateAdapted && t.optionalMissingParamsCount && u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          t.optionalMissingParamsCount,
          n.value
        ),
        icon: y0,
        color: ft.gray500
      }), u;
    });
    return (u, d) => (Os(), bi(un(_t), {
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
                e.targetTemplateExists ? (Os(), bi(If, {
                  key: 0,
                  percentage: o.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (Os(), bi(un(Qe), {
                  key: 1,
                  icon: un(x0)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: Bo(() => [
        Jl("div", oA, [
          Jl("h3", {
            textContent: Ql(a.value)
          }, null, 8, sA),
          Jl("p", {
            class: "mt-6 text-small",
            textContent: Ql(r.value)
          }, null, 8, aA),
          (Os(!0), nA(tA, null, eA(l.value, (i, c) => (Os(), bi(un(N), {
            key: c,
            align: "start",
            class: "mt-4"
          }, {
            default: Bo(() => [
              js(un(k), { shrink: "" }, {
                default: Bo(() => [
                  js(un(Qe), {
                    class: "me-2",
                    icon: i.icon,
                    "icon-color": i.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              js(un(k), {
                textContent: Ql(i.text)
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
const Te = window.Vue.unref, Oe = window.Vue.createVNode, Gt = window.Vue.withCtx, Zl = window.Vue.toDisplayString, am = window.Vue.createTextVNode, lA = window.Vue.resolveDirective, im = window.Vue.withDirectives, rm = window.Vue.createElementVNode, cA = window.Vue.normalizeClass, Po = window.Vue.openBlock, lm = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const $i = window.Vue.createBlock, cm = window.Vue.normalizeProps;
window.Vue.guardReactiveProps;
const um = window.Vue.mergeProps, uA = { class: "block-template-adaptation-card__container pa-4" }, dA = ["textContent"], gA = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, je = window.Vue.computed, pA = window.Vue.ref, mA = window.Vuex.useStore, dm = window.Codex.CdxButton, gm = window.Codex.CdxIcon, hA = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = mA(), { targetLanguageAutonym: n, currentMTProvider: o } = Ee(t), {
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
    }), _ = je(() => w.value.length), y = je(() => {
      const L = x.value;
      return f.value + L === 0 ? 100 : _.value / (f.value + L) * 100 || 0;
    }), S = pA(!1), b = () => {
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
      const j = lA("i18n");
      return Po(), $i(Te(Ye), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: Gt(() => [
          rm("div", uA, [
            Oe(Te(N), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: Gt(() => [
                Oe(Te(k), { shrink: "" }, {
                  default: Gt(() => [
                    Oe(Te(gm), {
                      icon: Te(ny),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                Oe(Te(k), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: Gt(() => [
                    am(Zl(c.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            u.value ? (Po(), lm("div", {
              key: 0,
              class: cA(["pa-4 mb-4", m.value])
            }, [
              Oe(Te(N), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: Gt(() => [
                  im(Oe(Te(k), { tag: "h5" }, null, 512), [
                    [j, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  Oe(Te(k), { shrink: "" }, {
                    default: Gt(() => [
                      Oe(If, {
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
                textContent: Zl(u.value)
              }, null, 8, dA),
              Oe(Te(dm), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: B[0] || (B[0] = (G) => L.$emit("edit-translation", l.value))
              }, {
                default: Gt(() => [
                  am(Zl(h.value), 1)
                ]),
                _: 1
              })
            ], 2)) : d.value ? (Po(), lm("div", gA, [
              Oe(Te(N), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: Gt(() => [
                  im(Oe(Te(k), { tag: "h5" }, null, 512), [
                    [j, [
                      Te(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  Oe(Te(k), { shrink: "" }, {
                    default: Gt(() => [
                      Oe(Te(dm), {
                        weight: "quiet",
                        "aria-label": L.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: Gt(() => [
                          Oe(Te(gm), {
                            icon: Te(JS),
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
            ])) : (Po(), $i(Te(lt), { key: 2 }))
          ]),
          r.value ? (Po(), $i(Rf, cm(um({ key: 1 }, L.$attrs)), null, 16)) : (Po(), $i(Uf, cm(um({ key: 0 }, L.$attrs)), null, 16)),
          Oe(rA, {
            active: S.value,
            "onUpdate:active": B[1] || (B[1] = (G) => S.value = G),
            "source-params-count": f.value,
            "target-params-count": _.value,
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
const fA = window.Vue.unref, wA = window.Vue.createVNode, vA = window.Vue.openBlock, _A = window.Vue.createElementBlock, SA = { class: "translated-segment-card-header" }, yA = window.Vue.computed, xA = {
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
    const n = t, { isSectionTitleSelected: o } = oe(), s = fe(), a = yA(() => [
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
    return (l, u) => (vA(), _A("div", SA, [
      wA(fA(ua), {
        items: a.value,
        active: e.selection,
        onSelect: r
      }, null, 8, ["items", "active"])
    ]));
  }
};
const CA = window.Vue.useCssVars, Ie = window.Vue.createVNode, pm = window.Vue.resolveDirective, bA = window.Vue.createElementVNode, ec = window.Vue.withDirectives, Se = window.Vue.unref, kA = window.Vue.normalizeStyle, Vi = window.Vue.openBlock, mm = window.Vue.createElementBlock, $A = window.Vue.createCommentVNode, VA = window.Vue.normalizeClass, mt = window.Vue.withCtx, EA = window.Vue.toDisplayString, LA = window.Vue.createTextVNode, hm = window.Vue.createBlock, AA = window.Vue.normalizeProps, DA = window.Vue.guardReactiveProps, dn = window.Vue.computed, TA = window.Vue.ref, BA = window.Vue.inject, PA = window.Vuex.useStore, FA = window.Codex.CdxButton, tc = window.Codex.CdxIcon, NA = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    CA((_) => ({
      "4929555c": w.value
    }));
    const t = TA("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = oe(), { targetLanguage: a } = Ee(PA()), r = dn(() => t.value === "sentence"), l = dn(
      () => n.value.subSections.find(
        (_) => _.sentences.some(
          (y) => {
            var S;
            return y.id === ((S = o.value) == null ? void 0 : S.id);
          }
        )
      )
    ), u = dn(() => {
      var _;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : r.value ? (_ = o.value) == null ? void 0 : _.mtProposedTranslationUsed : l.value.proposedContentForMTValidation;
    }), d = BA("colors"), i = d.gray200, c = d.red600, g = dn(() => s.value ? n.value.translatedTitle : r.value ? o.value.translatedContent : l.value.translatedContent), p = dn(
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
    return (_, y) => {
      const S = pm("i18n"), b = pm("i18n-html");
      return Vi(), hm(Se(Ye), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: mt(() => [
          Ie(Se(N), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: mt(() => [
              Ie(xA, {
                selection: t.value,
                "onUpdate:selection": y[0] || (y[0] = (E) => t.value = E)
              }, null, 8, ["selection"]),
              Ie(Se(k), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: mt(() => [
                  Ie(Se(N), { class: "ma-0" }, {
                    default: mt(() => [
                      Ie(Se(k), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: mt(() => [
                          ec(bA("h5", null, null, 512), [
                            [S, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          p.value === 0 ? ec((Vi(), mm("p", {
                            key: 0,
                            style: kA({ color: Se(c) })
                          }, null, 4)), [
                            [S, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : ec((Vi(), mm("p", {
                            key: 1,
                            class: VA(h.value)
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
                        default: mt(() => [
                          Ie(Se(N), { class: "ma-0 ms-2" }, {
                            default: mt(() => [
                              Ie(Se(k), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: mt(() => [
                                  Ie(Se(tc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: Se(ay)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              Ie(Se(k), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: mt(() => [
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
                                default: mt(() => [
                                  Ie(Se(tc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: Se(oy)
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
                  r.value ? (Vi(), hm(Se(FA), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: y[1] || (y[1] = (E) => _.$emit("edit-translation", g.value))
                  }, {
                    default: mt(() => [
                      Ie(Se(tc), {
                        class: "me-1",
                        icon: Se(su)
                      }, null, 8, ["icon"]),
                      LA(" " + EA(_.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : $A("", !0)
                ]),
                _: 1
              }),
              Ie(Se(k), { class: "translated-segment-card__actions" }, {
                default: mt(() => [
                  Ie(Rf, AA(DA(_.$attrs)), null, 16)
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
}, MA = () => {
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
}, zf = window.Vuex.useStore, UA = () => {
  const e = zf(), {
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
    o ? s = yield Xi.fetchSupportedMTProviders(
      t.value,
      n.value
    ) : s = new ne(
      t.value,
      n.value,
      []
      // Empty providers array - only "original" and "empty" will be added by constructor
    ), e.commit("mediawiki/addMtProviderGroup", s);
  });
}, IA = () => {
  const e = zf(), { currentMTProvider: t } = Ee(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = T(), s = UA();
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
}, RA = window.Vue.computed, zA = (e) => {
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
}, OA = () => {
  const { selectedContentTranslationUnit: e } = oe(), t = RA(
    () => e.value instanceof rt
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && zA(o);
  };
}, jA = (e, t) => {
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
}, HA = window.Vue.computed, Of = () => {
  const { currentTranslation: e } = It(), { currentSourcePage: t } = ut();
  return HA(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, qA = window.Vuex.useStore, Su = () => {
  const e = qA(), { sourceSection: t, targetPageTitleForPublishing: n } = oe(), {
    pageURLParameter: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = T(), r = Of(), { target: l, PUBLISHING_TARGETS: u } = Ut();
  return () => {
    const d = n.value, i = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), c = `${r.value}_${t.value.id}`, g = t.value.getParallelCorporaUnits(c);
    g.forEach(
      (m) => jA(m, i)
    );
    const p = t.value.getTranslationProgress(a);
    return vt.saveTranslation({
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
}, GA = window.Vue.effectScope, XA = window.Vue.onScopeDispose, WA = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = GA(!0), n = o.run(() => e(...a))), XA(s), n);
}, KA = window.Vuex.useStore;
let nc;
const YA = () => {
  const e = KA(), t = Su();
  let n = 1e3, o = 0;
  return nc = gu(() => t().then((a) => {
    a instanceof io ? (n *= o + 1, o++, setTimeout(nc, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof Go)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), nc;
}, jf = WA(YA), QA = window.Vuex.useStore, JA = () => {
  const e = QA(), t = jf(), { currentMTProvider: n } = Ee(e), { sourceSection: o, currentProposedTranslation: s } = oe(), { selectNextTranslationUnit: a } = es();
  return () => C(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, ZA = window.Vuex.useStore, eD = () => {
  const e = ZA(), t = jf();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, tD = window.Vuex.useStore, nD = window.Vue.computed, Hf = () => {
  const e = tD(), { currentTranslation: t } = It(), { currentMTProvider: n, previousRoute: o } = Ee(e), { currentTargetPage: s } = ut(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    sectionURLParameter: u
  } = T(), d = St(), i = nD(() => {
    var _;
    const w = {
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
    if (u.value ? (w.translation_source_section = u.value, w.translation_type = "section") : w.translation_type = "article", t.value) {
      w.translation_id = t.value.translationId, w.translation_target_title = t.value.targetTitle;
      const y = t.value.targetSectionTitle;
      y && (w.translation_target_section = y);
    } else
      s.value && (w.translation_target_title = (_ = s.value) == null ? void 0 : _.title);
    return n.value && (w.translation_provider = ne.getProviderForInstrumentation(n.value)), w;
  });
  return {
    logEditorOpenEvent: () => {
      const w = de({
        event_type: "editor_open"
      }, i.value);
      return d(w);
    },
    logEditorCloseEvent: () => {
      const w = de({
        event_type: "editor_close"
      }, i.value);
      return d(w);
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
}, oD = (e, t, n, o) => C(void 0, null, function* () {
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
}), sD = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, r;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const l = (r = t.mt) == null ? void 0 : r.engine;
      o.addProposedTranslation(l, n.mt.innerHTML), o.mtProviderUsed = l;
    }
  });
}, aD = (e, t, n, o) => C(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return oD(e, t, n, o);
  sD(e, t);
}), iD = (e, t, n, o) => {
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
        const d = aD(
          l,
          u,
          t || e.title,
          n
        );
        s.push(d);
      }
  return Promise.all(s);
}, rD = { restoreCorporaDraft: iD }, lD = () => {
  const { currentSourcePage: e } = ut(), { sourceSection: t } = oe();
  return (n) => C(void 0, null, function* () {
    if (n.restored)
      return;
    const o = yield vt.fetchTranslationUnits(
      n.translationId
    );
    yield rD.restoreCorporaDraft(
      e.value,
      n.targetTitle,
      n.targetLanguage,
      o
    ), n.restored = !0;
    let s;
    n.isLeadSectionTranslation ? (t.value.originalTitle = n.sourceTitle, s = n.targetTitle) : s = n.targetSectionTitle, t.value.translatedTitle = s;
  });
};
let oc = null;
function cD() {
  const e = mw.config.get(
    "wgContentTranslationPublishRequirements"
  ), t = mw.config.get("wgUserGroups") || [];
  if (!e || !e.userGroups)
    return !0;
  const n = e.userGroups;
  return n.includes("*") ? !0 : n.some((o) => t.includes(o));
}
function qf() {
  return oc === null && (oc = cD()), oc;
}
const uD = window.Vue.ref, sc = uD(!1);
function dD() {
  return {
    isDismissed: sc,
    dismiss: () => {
      sc.value = !0;
    },
    reset: () => {
      sc.value = !1;
    }
  };
}
const ge = window.Vue.unref, ht = window.Vue.createVNode, Xt = window.Vue.withCtx, gD = window.Vue.resolveDirective, Fo = window.Vue.createElementVNode, pD = window.Vue.withDirectives, ac = window.Vue.toDisplayString, mD = window.Vue.createTextVNode, gn = window.Vue.openBlock, Qn = window.Vue.createBlock, hD = window.Vue.createCommentVNode, fD = window.Vue.renderList, wD = window.Vue.Fragment, fm = window.Vue.createElementBlock, vD = window.Vue.normalizeClass, _D = window.Vue.normalizeStyle, SD = { class: "sx-sentence-selector__header-title mb-0" }, yD = {
  href: "https://www.mediawiki.org/wiki/Help:Content_translation/Publishing",
  target: "_blank"
}, xD = { class: "sx-sentence-selector__section-contents px-4" }, Jn = window.Vue.computed, CD = window.Vue.nextTick, bD = window.Vue.onMounted, Hs = window.Vue.ref, wm = window.Vue.watch, kD = window.Vuex.useStore, vm = window.Codex.CdxButton, $D = window.Codex.CdxIcon, VD = window.Codex.CdxMessage, ED = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = Hs(!1), n = Hs(!1), o = Hs("100%"), s = kD(), { currentMTProvider: a, previousRoute: r } = Ee(s), {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: u,
      pageURLParameter: d,
      sectionURLParameter: i
    } = T(), { resetPublishTarget: c, target: g } = Ut(), p = lu();
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
    }), w = Jn(
      () => Object.values(f.value).every(Boolean)
    ), _ = Jn(
      () => {
        var re;
        return (re = m.value) == null ? void 0 : re.isSelectedTranslationUnitTranslated;
      }
    ), y = Jn(() => {
      var re;
      return (re = m.value) == null ? void 0 : re.subSections;
    }), S = Jn(
      () => {
        var re;
        return (re = m.value) == null ? void 0 : re.selectedTranslationUnitOriginalContent;
      }
    ), b = Jn(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: E,
      logEditorCloseEvent: x,
      logEditorCloseWarnEvent: R,
      logEditorSegmentAddEvent: L,
      logEditorSegmentSkipEvent: B
    } = Hf(), j = () => {
      var Pe;
      const re = D.currentRoute.value.meta.workflowStep, V = D.getRoutes().find(
        (yt) => yt.name === r.value
      ), M = ((Pe = V == null ? void 0 : V.meta) == null ? void 0 : Pe.workflowStep) || 0;
      return re > M;
    }, G = MA();
    IA()().then(() => {
      j() && E(), f.value.mtProviders = !0;
    });
    const we = OA(), { fetchTranslationsByStatus: q, translationsFetched: se } = Jo(), ae = lD(), { currentTranslation: te } = It(), { selectPageSectionByTitle: Ne, selectPageSectionByIndex: Xe } = er(), Be = wu(), J = Ko();
    bD(() => C(this, null, function* () {
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
      f.value.pageMetadata = !0, i.value ? yield Ne(i.value) : yield Xe(0), f.value.pageContent = !0, te.value && (yield ae(te.value)), f.value.draftRestored = !0, wm(
        w,
        () => C(this, null, function* () {
          w.value && (yield CD(), G(), we());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    })), wm(h, we);
    const { selectNextTranslationUnit: I, selectPreviousTranslationUnit: P } = es(), U = () => (B(), I()), Z = JA(), v = () => {
      L(), Z();
    }, A = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, D = Je(), F = () => {
      const { autoSavePending: re } = s.state.application;
      if (re) {
        os.value = !0, R();
        return;
      }
      H();
    }, X = eD(), { clearTranslationURLParameters: ue } = T(), H = () => C(this, null, function* () {
      q("draft"), te.value && (m.value.reset(), te.value.restored = !1), x(), ue(), X(), yield D.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: z,
      translateSelectedTranslationUnitForAllProviders: ie
    } = _u(), Ze = () => {
      ns.value || (t.value = !0, ie());
    }, { getCurrentTitleByLanguage: ke } = Sn(), uo = (re) => {
      D.push({
        name: "sx-editor",
        state: {
          content: re,
          originalContent: S.value,
          title: ke(
            u.value,
            l.value
          ),
          isInitialEdit: !_.value || null
        }
      });
    }, va = () => D.push({ name: "sx-publisher" }), ts = () => C(this, null, function* () {
      h.value ? yield z(
        h.value.id,
        a.value
      ) : yield z(0, a.value);
    }), ns = Jn(
      () => h.value instanceof rt
    ), os = Hs(!1), {
      isDismissed: tr,
      dismiss: nr,
      reset: or
    } = dD();
    j() && or();
    const go = Jn(
      () => !qf() && !tr.value
    );
    return (re, yn) => {
      const V = gD("i18n");
      return gn(), fm("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: _D(b.value)
      }, [
        ht(ge(N), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: Xt(() => [
            ht(ge(k), { shrink: "" }, {
              default: Xt(() => [
                ht(ge(vm), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": re.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: F
                }, {
                  default: Xt(() => [
                    ht(ge($D), { icon: ge(Fh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            ht(ge(k), {
              grow: "",
              class: "px-1"
            }, {
              default: Xt(() => [
                pD(Fo("h4", SD, null, 512), [
                  [V, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            ht(ge(k), {
              shrink: "",
              class: "px-3"
            }, {
              default: Xt(() => [
                ht(ge(vm), {
                  disabled: !(ge(m) && ge(m).isTranslated),
                  onClick: va
                }, {
                  default: Xt(() => [
                    mD(ac(re.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        w.value ? (gn(), Qn(ge(N), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: Xt(() => [
            ht(ge(k), {
              dir: ge(O.getDir)(ge(l)),
              lang: ge(l),
              class: "sx-sentence-selector__section"
            }, {
              default: Xt(() => [
                go.value ? (gn(), Qn(ge(VD), {
                  key: 0,
                  type: "warning",
                  "allow-user-dismiss": !0,
                  class: "mx-4 mt-4",
                  onUserDismissed: ge(nr)
                }, {
                  default: Xt(() => [
                    Fo("p", null, ac(re.$i18n("cx-publish-permission-warning")), 1),
                    Fo("p", null, [
                      Fo("strong", null, [
                        Fo("a", yD, ac(re.$i18n("cx-publish-permission-warning-link-label")), 1)
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : hD("", !0),
                ht(sL),
                Fo("div", xD, [
                  (gn(!0), fm(wD, null, fD(y.value, (M) => (gn(), Qn(WL, {
                    id: M.id,
                    key: `sub-section-${M.id}`,
                    "sub-section": M,
                    onBounceTranslation: A
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !ns.value && _.value ? (gn(), Qn(NA, {
              key: 0,
              onEditTranslation: uo,
              onSelectNextSegment: ge(I),
              onSelectPreviousSegment: ge(P)
            }, null, 8, ["onSelectNextSegment", "onSelectPreviousSegment"])) : ns.value ? (gn(), Qn(hA, {
              key: 2,
              onEditTranslation: uo,
              onApplyTranslation: v,
              onSkipTranslation: U,
              onSelectPreviousSegment: ge(P),
              onSelectNextSegment: ge(I)
            }, null, 8, ["onSelectPreviousSegment", "onSelectNextSegment"])) : (gn(), Qn(ML, {
              key: 1,
              class: vD({ "mb-0": !n.value }),
              onConfigureOptions: Ze,
              onEditTranslation: uo,
              onApplyTranslation: v,
              onSkipTranslation: U,
              onSelectPreviousSegment: ge(P),
              onRetryTranslation: ts
            }, null, 8, ["class", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (gn(), Qn(ge(N), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: Xt(() => [
            ht(ge(lt), { class: "mt-0" })
          ]),
          _: 1
        })),
        ht(W5, {
          active: t.value,
          "onUpdate:active": yn[0] || (yn[0] = (M) => t.value = M)
        }, null, 8, ["active"]),
        ht(C5, {
          modelValue: os.value,
          "onUpdate:modelValue": yn[1] || (yn[1] = (M) => os.value = M),
          onDiscardTranslation: H
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const LD = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: ED
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, AD = window.Vue.resolveComponent, DD = window.Vue.createVNode, TD = window.Vue.normalizeClass, BD = window.Vue.openBlock, PD = window.Vue.createElementBlock;
function FD(e, t, n, o, s, a) {
  const r = AD("sx-sentence-selector");
  return BD(), PD("main", {
    class: TD(["sx-sentence-selector-view", a.classes])
  }, [
    DD(r)
  ], 2);
}
const ND = /* @__PURE__ */ ce(LD, [["render", FD]]), MD = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, UD = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const ID = window.Vue.resolveDirective, Ei = window.Vue.withDirectives, Tt = window.Vue.openBlock, pn = window.Vue.createElementBlock, Li = window.Vue.createCommentVNode, Ai = window.Vue.Transition, Zn = window.Vue.withCtx, No = window.Vue.createVNode, qs = window.Vue.createElementVNode, Bn = window.Vue.unref, RD = window.Vue.renderList, zD = window.Vue.Fragment, OD = window.Vue.normalizeClass, _m = window.Vue.createBlock, jD = window.Vue.toDisplayString, HD = window.Vue.createTextVNode, qD = { class: "sx-quick-tutorial" }, GD = { class: "sx-quick-tutorial__main-point my-4 py-5 px-6" }, XD = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, WD = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, KD = { class: "sx-quick-tutorial__illustration" }, YD = ["innerHTML"], QD = ["innerHTML"], JD = { class: "sx-quick-tutorial__step-indicator py-3" }, ZD = ["onClick"], eT = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, tT = {
  key: "secondary-point-1",
  class: "ma-0"
}, nT = {
  key: "secondary-point-2",
  class: "ma-0"
}, oT = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, Sm = window.Vue.ref, ym = window.Codex.CdxButton, sT = window.Codex.CdxIcon, aT = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = Sm(2), n = Sm(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (r) => r === n.value, a = Zo();
    return (r, l) => {
      const u = ID("i18n");
      return Tt(), pn("section", qD, [
        No(Bn(N), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: Zn(() => [
            qs("section", GD, [
              No(Ai, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Zn(() => [
                  s(1) ? Ei((Tt(), pn("h2", XD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? Ei((Tt(), pn("h2", WD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : Li("", !0)
                ]),
                _: 1
              })
            ]),
            qs("section", KD, [
              No(Ai, { name: "mw-ui-animation-slide-start" }, {
                default: Zn(() => [
                  s(1) ? (Tt(), pn("div", {
                    key: "illustration-1",
                    innerHTML: Bn(UD)
                  }, null, 8, YD)) : s(2) ? (Tt(), pn("div", {
                    key: "illustration-2",
                    innerHTML: Bn(MD)
                  }, null, 8, QD)) : Li("", !0)
                ]),
                _: 1
              })
            ]),
            qs("div", JD, [
              (Tt(!0), pn(zD, null, RD(t.value, (d) => (Tt(), pn("span", {
                key: `dot-${d}`,
                class: OD(["dot mx-1", { "dot-active": s(d) }]),
                role: "button",
                onClick: (i) => n.value = d
              }, null, 10, ZD))), 128))
            ]),
            qs("section", eT, [
              No(Ai, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Zn(() => [
                  s(1) ? Ei((Tt(), pn("h3", tT, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? Ei((Tt(), pn("h3", nT, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : Li("", !0)
                ]),
                _: 1
              })
            ]),
            qs("div", oT, [
              No(Ai, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Zn(() => [
                  s(1) ? (Tt(), _m(Bn(ym), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": r.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: Zn(() => [
                      No(Bn(sT), { icon: Bn(fa) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (Tt(), _m(Bn(ym), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: Bn(a)
                  }, {
                    default: Zn(() => [
                      HD(jD(r.$i18n("sx-quick-tutorial-translate-button-label")), 1)
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
const iT = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: aT
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, rT = window.Vue.resolveComponent, lT = window.Vue.createVNode, cT = window.Vue.normalizeClass, uT = window.Vue.openBlock, dT = window.Vue.createElementBlock;
function gT(e, t, n, o, s, a) {
  const r = rT("sx-quick-tutorial");
  return uT(), dT("main", {
    class: cT(["sx-quick-tutorial-view", a.classes])
  }, [
    lT(r)
  ], 2);
}
const pT = /* @__PURE__ */ ce(iT, [["render", gT]]);
const mT = window.Vue.resolveDirective, xm = window.Vue.createElementVNode, hT = window.Vue.withDirectives, fT = window.Vue.unref, wT = window.Vue.withCtx, vT = window.Vue.createVNode, _T = window.Vue.openBlock, ST = window.Vue.createElementBlock, yT = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, xT = { class: "sx-editor__original-content-panel__header mb-2" }, CT = ["lang", "dir", "innerHTML"], Cm = window.Vue.ref, bT = window.Vue.onMounted, kT = {
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
    return bT(() => {
      s.value = 2 * a(), n(o.value, t.language);
    }), (r, l) => {
      const u = mT("i18n");
      return _T(), ST("section", yT, [
        hT(xm("h5", xT, null, 512), [
          [u, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        vT(fT(q1), {
          "min-height": s.value,
          scroll: ""
        }, {
          default: wT(() => [
            xm("div", {
              ref_key: "originalContentRef",
              ref: o,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, CT)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, $T = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const VT = window.Vue.unref, Gs = window.Vue.createElementVNode, bm = window.Vue.resolveDirective, ic = window.Vue.withDirectives, ET = window.Vue.normalizeClass, LT = window.Vue.openBlock, AT = window.Vue.createElementBlock, DT = window.Vue.createCommentVNode, TT = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, BT = { class: "sx-editor__feedback-overlay-content px-4" }, PT = ["innerHTML"], FT = { class: "sx-editor__feedback-overlay-content__title" }, NT = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, rc = window.Vue.computed, MT = {
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
    const t = e, { targetLanguageURLParameter: n } = T(), o = rc(
      () => Qt.calculateScore(
        t.editedTranslation,
        t.proposedTranslation,
        n.value
      )
    ), s = rc(() => {
      const r = Qt.getScoreStatus(o.value);
      return r === "failure" ? o.value === 0 ? "failure" : "warning" : r;
    }), a = rc(
      () => `sx-editor__feedback-overlay-content__stats--${s.value}`
    );
    return (r, l) => {
      const u = bm("i18n"), d = bm("i18n-html");
      return e.showFeedback ? (LT(), AT("div", TT, [
        Gs("div", BT, [
          Gs("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: VT($T)
          }, null, 8, PT),
          ic(Gs("h2", FT, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          ic(Gs("p", NT, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          ic(Gs("p", {
            class: ET(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [d, [o.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : DT("", !0);
    };
  }
}, UT = window.Vuex.useStore, IT = () => {
  const e = UT(), t = Su(), { selectNextTranslationUnit: n } = es(), {
    isSectionTitleSelected: o,
    sourceSection: s,
    selectedContentTranslationUnit: a
  } = oe(), { getCurrentTitleByLanguage: r } = Sn(), {
    sourceLanguageURLParameter: l,
    targetLanguageURLParameter: u
  } = T(), { currentMTProvider: d } = Ee(e);
  return (i) => C(void 0, null, function* () {
    if (!o.value) {
      const c = document.createElement("div");
      c.innerHTML = i, c.querySelectorAll(".sx-edit-dummy-node").forEach((g) => g.remove()), i = c.innerHTML;
    }
    a.value instanceof rt && (i = (yield Mf(
      i,
      r(u.value, l.value),
      u.value
    )) || i), s.value.setTranslationForSelectedTranslationUnit(
      i,
      d.value
    ), t(), n();
  });
};
const We = window.Vue.unref, lc = window.Vue.openBlock, cc = window.Vue.createBlock, km = window.Vue.createCommentVNode, $m = window.Vue.createVNode, RT = window.Vue.createElementVNode, zT = window.Vue.withCtx, OT = { class: "sx-editor__editing-surface-container grow" }, uc = window.Vue.ref, jT = window.Vue.computed, HT = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = uc(!1), o = Je(), s = () => n.value = !0, a = () => o.replace({ name: t.fromRoute }), { isFinalEdit: r, isInitialEdit: l, content: u, originalContent: d, title: i } = history.state, c = uc(null), g = uc(!1), { logEditorSegmentAddEvent: p, logEditorSegmentEditEvent: m } = Hf(), {
      sourceLanguageURLParameter: h,
      targetLanguageURLParameter: f
    } = T(), { isSectionTitleSelected: w, sourceSection: _ } = oe(), y = jT(
      () => Qt.calculateScore(
        c.value,
        u,
        f.value
      )
    ), S = IT(), b = (E) => C(this, null, function* () {
      c.value = E, g.value = !0;
      const x = new Promise((L) => setTimeout(L, 2e3));
      let R = Promise.resolve();
      r ? _.value.editedTranslation = E : R = S(E), y.value === 0 && l ? p() : y.value > 0 && m(), yield Promise.all([x, R]), g.value = !1, a();
    });
    return (E, x) => (lc(), cc(We(N), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: zT(() => [
        We(d) ? (lc(), cc(kT, {
          key: 0,
          language: We(h),
          dir: We(O.getDir)(We(h)),
          "original-content": We(d)
        }, null, 8, ["language", "dir", "original-content"])) : km("", !0),
        n.value ? km("", !0) : (lc(), cc(We(lt), { key: 1 })),
        RT("div", OT, [
          $m(MT, {
            "edited-translation": c.value,
            "show-feedback": g.value,
            "proposed-translation": We(u)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          $m(SV, {
            content: We(u),
            language: We(f),
            dir: We(O.getDir)(We(f)),
            title: We(i),
            "use-text": !!We(w),
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
const qT = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: HT
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
}, GT = window.Vue.resolveComponent, XT = window.Vue.createVNode, WT = window.Vue.normalizeClass, KT = window.Vue.openBlock, YT = window.Vue.createElementBlock;
function QT(e, t, n, o, s, a) {
  const r = GT("sx-editor");
  return KT(), YT("main", {
    class: WT(["sx-editor-view", a.classes])
  }, [
    XT(r, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const JT = /* @__PURE__ */ ce(qT, [["render", QT]]);
const Wt = window.Vue.unref, eo = window.Vue.createVNode, Xs = window.Vue.withCtx, ZT = window.Vue.resolveDirective, e6 = window.Vue.withDirectives, t6 = window.Vue.openBlock, n6 = window.Vue.createBlock, Vm = window.Codex.CdxButton, Em = window.Codex.CdxIcon, o6 = {
  __name: "SXPublisherHeader",
  props: {
    isPublishingDisabled: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["publish-translation"],
  setup(e) {
    const t = Je(), n = () => t.push({ name: "sx-sentence-selector" });
    return (o, s) => {
      const a = ZT("i18n");
      return t6(), n6(Wt(N), { class: "ma-0 sx-publisher__header" }, {
        default: Xs(() => [
          eo(Wt(k), {
            shrink: "",
            class: "me-2"
          }, {
            default: Xs(() => [
              eo(Wt(Vm), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: Xs(() => [
                  eo(Wt(Em), { icon: Wt(Qo) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          e6(eo(Wt(k), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          eo(Wt(k), { shrink: "" }, {
            default: Xs(() => [
              eo(Wt(Vm), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (r) => o.$emit("publish-translation"))
              }, {
                default: Xs(() => [
                  eo(Wt(Em), { icon: Wt(qS) }, null, 8, ["icon"])
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
}, s6 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, a6 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
const dc = window.Vue.createElementVNode, Am = window.Vue.toDisplayString, gc = window.Vue.unref, pc = window.Vue.withCtx, Dm = window.Vue.createVNode, i6 = window.Vue.openBlock, r6 = window.Vue.createBlock, l6 = window.Vue.createCommentVNode, c6 = ["innerHTML"], u6 = ["textContent"], d6 = ["textContent"], mc = window.Vue.computed, g6 = {
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
        svg: s6,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: a6,
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
    }, s = mc(() => o[n.status].svg), a = mc(() => o[n.status].title), r = mc(() => o[n.status].subtitle);
    return (l, u) => e.active ? (i6(), r6(gc(_t), {
      key: 0,
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: pc(() => [
        Dm(gc(N), { class: "ma-4" }, {
          default: pc(() => [
            Dm(gc(k), null, {
              default: pc(() => [
                dc("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: s.value
                }, null, 8, c6),
                dc("h2", {
                  textContent: Am(a.value)
                }, null, 8, u6),
                dc("p", {
                  class: "ma-0",
                  textContent: Am(r.value)
                }, null, 8, d6)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : l6("", !0);
  }
};
const at = window.Vue.unref, Bt = window.Vue.createVNode, mn = window.Vue.withCtx, p6 = window.Vue.resolveDirective, m6 = window.Vue.withDirectives, Tm = window.Vue.toDisplayString, h6 = window.Vue.createTextVNode, hc = window.Vue.openBlock, Bm = window.Vue.createElementBlock, f6 = window.Vue.createCommentVNode, Gf = window.Vue.createElementVNode, w6 = window.Vue.createBlock, v6 = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, _6 = ["src"], S6 = ["textContent"], y6 = /* @__PURE__ */ Gf("p", { class: "mt-0" }, null, -1), x6 = window.Vue.computed, C6 = window.Vue.inject, b6 = window.Vue.ref, Pm = window.Codex.CdxButton, k6 = window.Codex.CdxIcon, $6 = {
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
    const n = t, o = b6(""), s = () => n("close"), a = () => n("publish", o.value), r = C6("breakpoints"), l = x6(() => r.value.mobile);
    return (u, d) => {
      const i = p6("i18n");
      return e.active && e.captchaDetails ? (hc(), w6(at(_t), {
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
                      Bt(at(k6), { icon: at(Qo) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              m6(Bt(at(k), {
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
                      h6(Tm(u.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Bt(at(Ii))
        ]),
        default: mn(() => [
          Gf("div", v6, [
            e.captchaDetails.type === "image" ? (hc(), Bm("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, _6)) : (hc(), Bm("p", {
              key: 1,
              textContent: Tm(e.captchaDetails.question)
            }, null, 8, S6)),
            y6,
            Bt(at(N), { class: "ma-0" }, {
              default: mn(() => [
                Bt(at(k), null, {
                  default: mn(() => [
                    Bt(at(Ac), {
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
      }, 8, ["fullscreen"])) : f6("", !0);
    };
  }
};
const Pn = window.Vue.unref, Di = window.Vue.createVNode, Mo = window.Vue.withCtx, Uo = window.Vue.createElementVNode, V6 = window.Vue.resolveDirective, E6 = window.Vue.withDirectives, L6 = window.Vue.renderList, A6 = window.Vue.Fragment, fc = window.Vue.openBlock, D6 = window.Vue.createElementBlock, Fm = window.Vue.toDisplayString, Nm = window.Vue.createTextVNode, T6 = window.Vue.isRef, B6 = window.Vue.normalizeClass, Mm = window.Vue.createBlock, P6 = { class: "mw-ui-dialog__header" }, F6 = { class: "row ma-0 px-4 py-3" }, N6 = { class: "col shrink justify-center" }, M6 = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, U6 = { class: "mb-0" }, I6 = { class: "pa-4" }, R6 = window.Codex.CdxField, z6 = window.Codex.CdxRadio, O6 = window.Vuex.useStore, Ti = window.Vue.computed, j6 = window.Codex.CdxButton, H6 = window.Codex.CdxIcon, q6 = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = O6(), { target: s, PUBLISHING_TARGETS: a } = Ut(), r = Ti(() => o.state.translator.isAnon), l = fe(), { sourceSection: u } = oe(), { isCurrentSectionPresent: d } = Fe(), i = Ti(
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
      const f = V6("i18n");
      return fc(), Mm(Pn(_t), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: m.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: h[1] || (h[1] = (w) => m.$emit("update:active", w)),
        onClose: p
      }, {
        header: Mo(() => [
          Uo("div", P6, [
            Uo("div", F6, [
              Uo("div", N6, [
                Di(Pn(j6), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": m.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: p
                }, {
                  default: Mo(() => [
                    Di(Pn(H6), { icon: Pn(Fh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              Uo("div", M6, [
                E6(Uo("h4", U6, null, 512), [
                  [f, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            Di(Pn(Ii))
          ])
        ]),
        default: Mo(() => [
          Uo("div", I6, [
            Di(Pn(R6), { "is-fieldset": "" }, {
              default: Mo(() => [
                (fc(!0), D6(A6, null, L6(g.value, (w, _) => (fc(), Mm(Pn(z6), {
                  key: "publish-options-radio-" + w.value,
                  modelValue: Pn(s),
                  "onUpdate:modelValue": [
                    h[0] || (h[0] = (y) => T6(s) ? s.value = y : null),
                    p
                  ],
                  class: B6(_ < g.value.length - 1 ? "mb-4" : "mb-0"),
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
const Pt = window.Vue.unref, Um = window.Vue.toDisplayString, Im = window.Vue.createElementVNode, G6 = window.Vue.resolveDirective, Io = window.Vue.createVNode, X6 = window.Vue.withDirectives, Ws = window.Vue.withCtx, wc = window.Vue.openBlock, Rm = window.Vue.createBlock, zm = window.Vue.createCommentVNode, W6 = window.Vue.Fragment, K6 = window.Vue.createElementBlock, Y6 = window.Vue.normalizeClass, Q6 = ["textContent"], J6 = ["textContent"], Ro = window.Vue.computed, Om = window.Vue.ref, Z6 = window.Vue.watch, jm = window.Codex.CdxButton, Hm = window.Codex.CdxIcon, e9 = window.Codex.CdxMessage, t9 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Om(0), o = Om(null);
    Z6(o, () => {
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
      const h = G6("i18n-html");
      return wc(), Rm(Pt(e9), {
        type: a.value,
        class: Y6(["sx-publisher__review-info", l.value]),
        icon: r.value ? Pt(WS) : null
      }, {
        default: Ws(() => [
          Im("h5", {
            textContent: Um(i.value)
          }, null, 8, Q6),
          r.value ? zm("", !0) : (wc(), K6(W6, { key: 0 }, [
            Im("p", {
              textContent: Um(d.value)
            }, null, 8, J6),
            Io(Pt(N), {
              justify: "between",
              class: "ma-0"
            }, {
              default: Ws(() => [
                X6(Io(Pt(k), {
                  ref_key: "learnMoreContainer",
                  ref: o,
                  class: "sx-publisher__review-info__learn-more-anchor"
                }, null, 512), [
                  [h, void 0, "cx-sx-publisher-review-info-learn-more"]
                ]),
                e.publishFeedbackMessages.length > 1 ? (wc(), Rm(Pt(k), {
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
                        Io(Pt(Hm), { icon: Pt(iu) }, null, 8, ["icon"])
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
}, n9 = (e) => {
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
}, o9 = window.Vuex.useStore, s9 = window.Vue.computed, a9 = () => {
  const e = o9(), { currentTranslation: t } = It(), { currentMTProvider: n, previousRoute: o } = Ee(e), { currentTargetPage: s } = ut(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    sectionURLParameter: u
  } = T(), { sourceSection: d } = oe(), i = St(), c = s9(() => {
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
}, i9 = window.Vue.computed, qm = window.Vue.ref, r9 = window.Vuex.useStore, l9 = () => {
  const e = r9(), {
    pageURLParameter: t,
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = T(), { sourceSection: s, targetPageTitleForPublishing: a } = oe(), r = Of(), { sectionSuggestion: l } = Fe(), u = i9(
    () => {
      var S, b;
      return (b = l.value) == null ? void 0 : b.presentSections[(S = s.value) == null ? void 0 : S.sourceSectionTitleForPublishing];
    }
  ), { target: d, PUBLISHING_TARGETS: i } = Ut(), c = qm(!1), g = qm("pending"), p = () => c.value = !1, m = Su(), {
    logPublishAttemptEvent: h,
    logPublishSuccessEvent: f,
    logPublishFailureEvent: w
  } = a9(), _ = (S, b) => C(void 0, null, function* () {
    h();
    const E = yield m();
    if (E instanceof io)
      return w(), { publishFeedbackMessage: E, targetUrl: null };
    const x = E, R = a.value, L = {
      html: n9(s.value.translationHtml),
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
    const B = yield vt.publishTranslation(
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
        E = yield _(
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
}, c9 = window.Vue.computed, u9 = () => {
  const e = Je(), { sourceSection: t } = oe(), { getCurrentTitleByLanguage: n } = Sn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = T(), a = c9(
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
}, d9 = () => {
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
    return a === "warning" ? (r = mw.message("cx-sx-publisher-mt-abuse-message-title", s).plain(), l = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (r = mw.message("cx-sx-publisher-mt-abuse-error-title", s).plain(), l = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new io({
      title: r,
      text: l,
      status: a,
      type: "mt"
    });
  };
}, g9 = window.Vue.ref, p9 = window.Vue.computed, m9 = () => {
  const e = d9(), { target: t, PUBLISHING_TARGETS: n } = Ut(), o = g9([]), s = p9(
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
      if (!qf() && t.value !== n.SANDBOX) {
        const d = new io({
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
}, h9 = () => {
  const { target: e, PUBLISHING_TARGETS: t } = Ut(), { currentSourcePage: n } = ut(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = T(), { sourceSection: a, targetPageTitleForPublishing: r } = oe();
  return (l) => C(void 0, null, function* () {
    const u = r.value, d = n.value.title, i = new mw.Title(d), c = mw.config.get("wgNamespaceIds");
    if (a.value.isLeadSection && e.value !== t.SANDBOX && i.getNamespaceId() !== c.user)
      try {
        yield Xi.addWikibaseLink(
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
}, Gm = window.Vue.ref, f9 = () => {
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
const le = window.Vue.unref, He = window.Vue.createVNode, w9 = window.Vue.resolveDirective, Xm = window.Vue.withDirectives, vc = window.Vue.openBlock, _c = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const to = window.Vue.createElementVNode, Wm = window.Vue.toDisplayString, v9 = window.Vue.createTextVNode, zo = window.Vue.withCtx, Km = window.Vue.normalizeClass, _9 = { class: "sx-publisher" }, S9 = {
  key: 0,
  class: "mb-2"
}, y9 = {
  key: 1,
  class: "sx-publisher__publish-panel__existing-target-section px-4 pb-4"
}, x9 = ["href"], C9 = ["innerHTML"], b9 = { class: "sx-publisher__section-preview pa-5" }, k9 = ["innerHTML"], Bi = window.Vue.computed, $9 = window.Vue.onMounted, V9 = window.Vue.ref, E9 = window.Vue.watch, Ym = window.Codex.CdxButton, Sc = window.Codex.CdxIcon, L9 = {
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
    } = f9(), {
      publishFeedbackMessages: h,
      isPublishingDisabled: f,
      addPublishFeedbackMessage: w,
      clearPublishFeedbackMessages: _,
      initializePublishFeedbackMessages: y
    } = m9(), S = h9(), { doPublish: b, isPublishDialogActive: E, publishStatus: x, closePublishDialog: R } = l9(), L = (q = null) => C(this, null, function* () {
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
    $9(() => y());
    const B = u9(), j = V9(!1), G = () => j.value = !0;
    E9(j, (q) => {
      q || (_(), y());
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
      const ae = w9("i18n");
      return vc(), _c("section", _9, [
        He(o6, {
          "is-publishing-disabled": le(f),
          onPublishTranslation: L
        }, null, 8, ["is-publishing-disabled"]),
        to("div", {
          class: Km(["sx-publisher__publish-panel", le(o) ? "py-4" : "pa-4"])
        }, [
          le(o) ? (vc(), _c("div", y9, [
            Xm(to("h5", null, null, 512), [
              [ae, void 0, "cx-sx-publisher-publish-panel-existing-section-notice"]
            ]),
            to("a", {
              class: "sx-publisher__publish-panel__existing-target-section-link py-2 px-3 mt-4",
              href: we.value,
              target: "_blank"
            }, [
              v9(Wm(Y.value) + " ", 1),
              He(le(Sc), { icon: le(Wi) }, null, 8, ["icon"])
            ], 8, x9)
          ])) : Xm((vc(), _c("h5", S9, null, 512)), [
            [ae, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          to("div", {
            class: Km({ "px-4 mt-4": le(o) })
          }, [
            to("h6", {
              class: "sx-publisher__publish-panel__expected-publishing-result mb-2",
              innerHTML: i.value
            }, null, 8, C9),
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
                        He(le(Sc), { icon: le(sy) }, null, 8, ["icon"])
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
        He(t9, { "publish-feedback-messages": le(h) }, null, 8, ["publish-feedback-messages"]),
        to("section", b9, [
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
                      He(le(Sc), { icon: le(su) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label", "onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          to("div", {
            innerHTML: le(t).translationHtml
          }, null, 8, k9)
        ]),
        He(q6, {
          active: j.value,
          "onUpdate:active": se[0] || (se[0] = (te) => j.value = te)
        }, null, 8, ["active"]),
        He($6, {
          active: le(g),
          "captcha-details": le(c),
          onClose: le(m),
          onPublish: se[1] || (se[1] = (te) => L(te))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        He(g6, {
          active: le(E),
          status: le(x)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const A9 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: L9
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, D9 = window.Vue.resolveComponent, T9 = window.Vue.createVNode, B9 = window.Vue.normalizeClass, P9 = window.Vue.openBlock, F9 = window.Vue.createElementBlock;
function N9(e, t, n, o, s, a) {
  const r = D9("sx-publisher");
  return P9(), F9("main", {
    class: B9(["sx-publisher-view", a.classes])
  }, [
    T9(r)
  ], 2);
}
const M9 = /* @__PURE__ */ ce(A9, [["render", N9]]);
const Ft = window.Vue.unref, Fn = window.Vue.createVNode, no = window.Vue.withCtx, yc = window.Vue.toDisplayString, xc = window.Vue.createElementVNode, U9 = window.Vue.openBlock, I9 = window.Vue.createBlock, R9 = ["textContent"], z9 = ["textContent"], O9 = ["textContent"], Xf = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: Wo,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (U9(), I9(Ft(N), {
      class: "cx-search-suggestion px-4 py-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: Ft(O.getDir)(e.suggestion.language)
    }, {
      default: no(() => [
        Fn(Ft(k), { shrink: "" }, {
          default: no(() => [
            Fn(Ft(Oc), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        Fn(Ft(k), { class: "ms-4" }, {
          default: no(() => [
            Fn(Ft(N), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: no(() => [
                Fn(Ft(k), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: no(() => [
                    xc("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: yc(e.suggestion.title)
                    }, null, 8, R9)
                  ]),
                  _: 1
                }),
                Fn(Ft(k), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: no(() => [
                    xc("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: yc(e.suggestion.description)
                    }, null, 8, z9)
                  ]),
                  _: 1
                }),
                Fn(Ft(k), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: no(() => [
                    Fn(Ft(Qe), {
                      icon: Ft(A0),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    xc("small", {
                      textContent: yc((e.suggestion.langLinksCount || 0) + 1)
                    }, null, 8, O9)
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
const Ks = window.Vue.unref, Ys = window.Vue.openBlock, Cc = window.Vue.createBlock, j9 = window.Vue.createCommentVNode, H9 = window.Vue.resolveDirective, q9 = window.Vue.withDirectives, Qm = window.Vue.createElementBlock, G9 = window.Vue.renderList, X9 = window.Vue.Fragment, W9 = window.Vue.normalizeClass, K9 = window.Vue.withCtx, Y9 = {
  key: 1,
  class: "sx-article-search__empty-state"
}, Jm = window.Vue.computed, Q9 = window.Vue.ref, J9 = {
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
    const { sourceLanguageURLParameter: t } = T(), n = Jm(() => O.getAutonym(t.value)), o = e, s = Q9(null), a = (c) => s.value = c, r = () => s.value = null, l = (c) => {
      var g;
      return ((g = o.selectedItem) == null ? void 0 : g.title) === c.title && !s.value || s.value === c.pageId;
    }, u = Jm(() => o.searchInput), { searchResultsLoading: d, searchResultsSlice: i } = pu(
      t,
      u
    );
    return (c, g) => {
      const p = H9("i18n");
      return Ys(), Cc(Ks(Ye), { class: "sx-article-search__results mb-0 pa-0" }, {
        default: K9(() => [
          Ks(d) ? (Ys(), Cc(Ks(lt), {
            key: 0,
            class: "sx-article-search__empty-state"
          })) : Ks(i).length === 0 ? q9((Ys(), Qm("p", Y9, null, 512)), [
            [p, [
              u.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : j9("", !0),
          (Ys(!0), Qm(X9, null, G9(Ks(i), (m) => (Ys(), Cc(Xf, {
            key: m.pageId,
            suggestion: m,
            class: W9({
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
const Z9 = window.Vue.toDisplayString, eB = window.Vue.createElementVNode, tB = window.Vue.renderList, nB = window.Vue.Fragment, bc = window.Vue.openBlock, oB = window.Vue.createElementBlock, sB = window.Vue.normalizeClass, Zm = window.Vue.createBlock, aB = window.Vue.unref, eh = window.Vue.withCtx, iB = ["textContent"], rB = window.Vue.ref, th = {
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
    const n = e, o = rB(null), s = (l) => o.value = l, a = () => o.value = null, r = (l) => {
      var u;
      return ((u = n.selectedItem) == null ? void 0 : u.title) === l.title && !o.value || o.value === l.pageId;
    };
    return (l, u) => (bc(), Zm(aB(Ye), { class: "sx-article-search__suggestions pa-0" }, {
      header: eh(() => [
        eB("h5", {
          class: "ma-0 px-4 pb-1 sx-article-search__suggestions-header",
          textContent: Z9(e.cardTitle)
        }, null, 8, iB)
      ]),
      default: eh(() => [
        (bc(!0), oB(nB, null, tB(e.suggestions, (d) => (bc(), Zm(Xf, {
          key: d.pageId,
          suggestion: d,
          class: sB({
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
}, lB = window.Vue.computed, cB = (e, t) => e.length === t.length && e.every((n) => t.includes(n)) && t.every((n) => e.includes(n)), nh = "other", uB = (e) => lB((t) => {
  const o = e.value.slice(0, 3), s = {
    value: nh,
    props: {
      icon: P0,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  }, a = (t || []).map((l) => l.value).filter((l) => l !== nh);
  return cB(a, o) ? t : [...o.map((l) => ({
    value: l,
    props: {
      label: O.getAutonym(l),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), s];
}), dB = window.Vue.computed, gB = () => {
  const { supportedSourceLanguageCodes: e } = pa(), { targetLanguageURLParameter: t } = T();
  return { getSuggestedSourceLanguages: (o) => dB(() => {
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
}, pB = window.Vue.ref, mB = () => {
  const e = pB([]), t = () => {
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
const hB = window.Vue.resolveDirective, fB = window.Vue.createElementVNode, kc = window.Vue.withDirectives, he = window.Vue.unref, Qs = window.Vue.withCtx, Kt = window.Vue.createVNode, Js = window.Vue.openBlock, oh = window.Vue.createBlock, wB = window.Vue.createCommentVNode, $c = window.Vue.createElementBlock, vB = window.Vue.Fragment, _B = window.Vue.vShow, Zs = window.Vue.withModifiers, ea = window.Vue.withKeys, SB = ["onKeydown"], yB = { class: "mb-0" }, xB = {
  key: 2,
  class: "sx-article-search__empty-state"
}, ta = window.Vue.ref, CB = window.Vue.onMounted, na = window.Vue.computed, sh = window.Vue.watch, bB = window.Vue.inject, kB = window.Vuex.useStore, $B = window.Codex.CdxButton, VB = window.Codex.CdxIcon, EB = window.Codex.CdxSearchInput, LB = 3, AB = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = ta(""), n = ta(!1), o = ta(null), s = ta(!1), { previousLanguages: a, addLanguageToHistory: r } = mB(), l = kB(), {
      sourceLanguageURLParameter: u,
      targetLanguageURLParameter: d
    } = T(), { supportedSourceLanguageCodes: i } = pa(), { searchResultsSlice: c } = pu(u, t), { getSuggestedSourceLanguages: g } = gB(), p = g(a), m = uB(
      p
    ), h = Je(), { fetchAllTranslations: f } = Jo();
    CB(() => C(this, null, function* () {
      var P;
      f(), r(u.value), (P = o.value) == null || P.focus();
    }));
    const w = () => {
      h.push({ name: "dashboard" });
    }, _ = Hh(), y = (P) => {
      _(P, d.value), r(P);
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
    const b = St();
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
    (() => R().then(() => L.value.length > 0 ? ro.fetchPages(
      u.value,
      L.value
    ) : []).then((P) => {
      P = P.slice(0, LB), P = P.sort(
        (U, Z) => L.value.indexOf(U.title) - L.value.indexOf(Z.title)
      ), B.value = P;
    }))();
    const G = na(() => l.getters["mediawiki/getNearbyPages"]), Y = bB("breakpoints"), we = na(() => Y.value.mobile), q = wa(), se = na(
      () => B.value && B.value.length
    ), ae = na(
      () => G.value && G.value.length
    ), { next: te, prev: Ne, keyboardNavigationContainer: Xe, selectedItem: Be } = bf(t, c, B), J = (P) => q(
      P.title,
      u.value,
      d.value,
      I.value
    ), I = na(() => t.value ? "search_result" : se.value ? "suggestion_recent_edit" : ae.value ? "suggestion_nearby" : "");
    return (P, U) => {
      const Z = hB("i18n");
      return Js(), $c("section", {
        ref_key: "keyboardNavigationContainer",
        ref: Xe,
        class: "sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto",
        onKeydown: [
          U[5] || (U[5] = ea(Zs((...v) => he(te) && he(te)(...v), ["stop", "prevent"]), ["tab"])),
          U[6] || (U[6] = ea(Zs((...v) => he(te) && he(te)(...v), ["stop", "prevent"]), ["down"])),
          U[7] || (U[7] = ea(Zs((...v) => he(Ne) && he(Ne)(...v), ["stop", "prevent"]), ["up"])),
          ea(Zs(w, ["stop", "prevent"]), ["esc"]),
          U[8] || (U[8] = ea(Zs((v) => J(he(Be)), ["stop", "prevent"]), ["enter"]))
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
                kc(fB("h5", yB, null, 512), [
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
                Kt(he($B), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": P.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: w
                }, {
                  default: Qs(() => [
                    Kt(he(VB), { icon: he(Qo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Kt(he(EB), {
          ref_key: "searchInputRef",
          ref: o,
          modelValue: t.value,
          "onUpdate:modelValue": U[0] || (U[0] = (v) => t.value = v),
          class: "sx-article-search__search-input",
          placeholder: P.$i18n("cx-sx-article-search-input-placeholder")
        }, null, 8, ["modelValue", "placeholder"]),
        Kt(he(ua), {
          class: "sx-article-search__language-button-group",
          items: he(m),
          active: he(u),
          onSelect: S
        }, null, 8, ["items", "active"]),
        t.value ? wB("", !0) : (Js(), $c(vB, { key: 0 }, [
          se.value ? (Js(), oh(th, {
            key: 0,
            "card-title": P.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: B.value,
            "selected-item": he(Be),
            onSuggestionClicked: U[1] || (U[1] = (v) => J(v))
          }, null, 8, ["card-title", "suggestions", "selected-item"])) : ae.value ? (Js(), oh(th, {
            key: 1,
            "card-title": P.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: G.value,
            onSuggestionClicked: U[2] || (U[2] = (v) => J(v))
          }, null, 8, ["card-title", "suggestions"])) : kc((Js(), $c("p", xB, null, 512)), [
            [Z, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        kc(Kt(J9, {
          "search-input": t.value,
          "selected-item": he(Be),
          onSuggestionClicked: U[3] || (U[3] = (v) => J(v))
        }, null, 8, ["search-input", "selected-item"]), [
          [_B, !!t.value]
        ]),
        Kt(he(_t), {
          value: s.value,
          "onUpdate:value": U[4] || (U[4] = (v) => s.value = v),
          class: "sx-article-search-language-selector",
          fullscreen: we.value,
          header: we.value,
          title: P.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: E
        }, {
          default: Qs(() => [
            Kt(he(kf), {
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
      ], 40, SB);
    };
  }
};
const DB = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: AB
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.mobile })
  }
}, TB = window.Vue.resolveComponent, BB = window.Vue.createVNode, PB = window.Vue.normalizeClass, FB = window.Vue.openBlock, NB = window.Vue.createElementBlock;
function MB(e, t, n, o, s, a) {
  const r = TB("sx-article-search");
  return FB(), NB("main", {
    class: PB(["sx-article-search-view", a.classes])
  }, [
    BB(r)
  ], 2);
}
const UB = /* @__PURE__ */ ce(DB, [["render", MB]]), IB = () => {
  const e = wa(), t = wu(), { logDashboardOpenEvent: n } = Df(), {
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
}, RB = window.Vuex.useStore, zB = [
  {
    path: "",
    name: "dashboard",
    component: Yg,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: UB,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: jE,
    meta: { workflowStep: 1 },
    beforeEnter: () => {
      const {
        sourceLanguageURLParameter: e,
        targetLanguageURLParameter: t,
        pageURLParameter: n
      } = T();
      return !!(e.value && t.value && n.value);
    }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: o3,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: h5,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: pT,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: ND,
    meta: { workflowStep: 4 },
    beforeEnter: () => {
      const {
        sourceLanguageURLParameter: e,
        targetLanguageURLParameter: t,
        pageURLParameter: n
      } = T();
      return !!(e.value && t.value && n.value);
    }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: JT,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: M9,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Yg,
    meta: { workflowStep: 0 }
  }
], yu = qC({
  history: Hx(),
  routes: zB
}), Vc = (e, t, n) => {
  e === t ? n() : n({ name: t });
}, OB = (e, t, n) => {
  let o = "cx_" + btoa(
    encodeURIComponent([n, e, t].join("_"))
  );
  return o = o.replace(/[()<>@,;\\[\]?={}]/g, ""), mw.cookie.get(o, "");
};
yu.beforeEach((e, t, n) => {
  const o = RB();
  if (mw.user.isAnon() || ch.assertUser().catch((i) => {
    i instanceof Go && o.commit("application/setIsLoginDialogOn", !0);
  }), o.commit("application/setPreviousRoute", t.name), t.name) {
    n();
    return;
  }
  const s = IB(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    clearTranslationURLParameters: u
  } = T();
  if (!!(a.value && r.value && l.value)) {
    if (OB(
      a.value,
      r.value,
      l.value
    )) {
      const c = e.name === "sx-quick-tutorial" ? "sx-quick-tutorial" : "sx-sentence-selector";
      Vc(e.name, c, n);
    } else
      e.name === "sx-translation-confirmer" && s(), Vc(e.name, "sx-translation-confirmer", n);
    return;
  }
  u(), Vc(e.name, "dashboard", n);
});
yu.afterEach((e, t) => {
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
const jB = {
  install: function(e) {
    e.config.errorHandler = function(t) {
      mw.errorLogger.logError(t, "error.contenttranslation"), mw.log.error(t);
    };
  }
}, HB = window.Vue.createApp, qB = mw.config.get("wgUserLanguage"), GB = "en", XB = mw.messages.values || {}, co = HB(Py);
co.use(yu);
co.use(gx);
co.use(ov);
co.use(nv);
const WB = Pv({
  locale: qB,
  finalFallback: GB,
  messages: XB,
  wikilinks: !0
});
co.use(WB);
co.use(jB);
co.mount("#contenttranslation");
