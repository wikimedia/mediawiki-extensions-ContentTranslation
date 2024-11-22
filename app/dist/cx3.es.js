/*@nomin*/
var Lh = Object.defineProperty, Th = Object.defineProperties;
var Bh = Object.getOwnPropertyDescriptors;
var Ac = Object.getOwnPropertySymbols;
var Ph = Object.prototype.hasOwnProperty, Fh = Object.prototype.propertyIsEnumerable;
var Dc = (e, t, n) => t in e ? Lh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ie = (e, t) => {
  for (var n in t || (t = {}))
    Ph.call(t, n) && Dc(e, n, t[n]);
  if (Ac)
    for (var n of Ac(t))
      Fh.call(t, n) && Dc(e, n, t[n]);
  return e;
}, Ge = (e, t) => Th(e, Bh(t));
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
  const { CdxButton: e, CdxIcon: t, CdxDialog: n, CdxInfoChip: o } = require("../codex.js");
  window.Codex = { CdxButton: e, CdxIcon: t, CdxDialog: n, CdxInfoChip: o };
}
const z = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, Mh = {
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
}, Nh = window.Vue.toDisplayString, hi = window.Vue.openBlock, wi = window.Vue.createElementBlock, Uh = window.Vue.createCommentVNode, Lc = window.Vue.createElementVNode, Ih = window.Vue.normalizeClass, Rh = ["width", "height", "aria-labelledby"], zh = ["id"], Oh = ["fill"], Hh = ["d"];
function jh(e, t, n, o, s, a) {
  return hi(), wi("span", {
    class: Ih(["mw-ui-icon notranslate", a.classes])
  }, [
    (hi(), wi("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...r) => a.handleClick && a.handleClick(...r))
    }, [
      n.iconName ? (hi(), wi("title", {
        key: 0,
        id: n.iconName
      }, Nh(n.iconName), 9, zh)) : Uh("", !0),
      Lc("g", { fill: n.iconColor }, [
        Lc("path", { d: a.iconImagePath }, null, 8, Hh)
      ], 8, Oh)
    ], 8, Rh))
  ], 2);
}
const be = /* @__PURE__ */ z(Mh, [["render", jh]]);
const qh = {
  name: "MwButton",
  components: {
    MwIcon: be
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
}, Gh = window.Vue.renderSlot, Xh = window.Vue.resolveComponent, Tc = window.Vue.normalizeClass, Ws = window.Vue.openBlock, fi = window.Vue.createBlock, _i = window.Vue.createCommentVNode, Wh = window.Vue.toDisplayString, Kh = window.Vue.createElementBlock, Yh = window.Vue.toHandlerKey, Jh = window.Vue.withModifiers, Qh = window.Vue.mergeProps, Zh = window.Vue.createElementVNode, ew = window.Vue.resolveDynamicComponent, tw = window.Vue.withCtx, nw = { class: "mw-ui-button__content" }, ow = ["textContent"];
function sw(e, t, n, o, s, a) {
  const r = Xh("mw-icon");
  return Ws(), fi(ew(a.component), {
    class: Tc(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: tw(() => [
      Gh(e.$slots, "default", {}, () => [
        Zh("span", nw, [
          n.icon ? (Ws(), fi(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: Tc(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : _i("", !0),
          !a.isIcon && n.label ? (Ws(), Kh("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: Wh(n.label)
          }, null, 8, ow)) : _i("", !0),
          n.indicator ? (Ws(), fi(r, Qh({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [Yh(a.indicatorClickEvent)]: t[0] || (t[0] = Jh((l) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : _i("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const he = /* @__PURE__ */ z(qh, [["render", sw]]);
const aw = {
  name: "MwButtonGroup",
  components: {
    MwButton: he
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
}, iw = window.Vue.renderList, rw = window.Vue.Fragment, vi = window.Vue.openBlock, Bc = window.Vue.createElementBlock, lw = window.Vue.resolveComponent, cw = window.Vue.withModifiers, uw = window.Vue.mergeProps, dw = window.Vue.createBlock, gw = { class: "row mw-ui-button-group ma-0 pa-0" };
function pw(e, t, n, o, s, a) {
  const r = lw("mw-button");
  return vi(), Bc("div", gw, [
    (vi(!0), Bc(rw, null, iw(n.items, (l) => (vi(), dw(r, uw({
      key: l.value,
      value: l.value,
      "aria-selected": a.isActive(l) || null,
      ref_for: !0
    }, l.props, {
      class: ["ma-0", a.buttonClasses(l)],
      style: a.activeIndicatorStyle(l),
      onClick: cw((u) => e.$emit("select", l.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const As = /* @__PURE__ */ z(aw, [["render", pw]]);
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
}, Pc = window.Vue.renderSlot, ww = window.Vue.toDisplayString, Fc = window.Vue.openBlock, Mc = window.Vue.createElementBlock, fw = window.Vue.createCommentVNode, _w = window.Vue.createElementVNode, vw = { class: "mw-ui-card" }, Sw = ["textContent"], yw = { class: "mw-ui-card__content" };
function Cw(e, t, n, o, s, a) {
  return Fc(), Mc("div", vw, [
    Pc(e.$slots, "header", {}, () => [
      n.title ? (Fc(), Mc("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: ww(n.title)
      }, null, 8, Sw)) : fw("", !0)
    ]),
    _w("div", yw, [
      Pc(e.$slots, "default")
    ])
  ]);
}
const dt = /* @__PURE__ */ z(hw, [["render", Cw]]);
const kw = {}, bw = window.Vue.openBlock, xw = window.Vue.createElementBlock, $w = { class: "mw-ui-divider row" };
function Vw(e, t) {
  return bw(), xw("div", $w);
}
const ei = /* @__PURE__ */ z(kw, [["render", Vw]]);
const Ew = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, Aw = window.Vue.renderSlot, Dw = window.Vue.resolveDynamicComponent, Lw = window.Vue.withCtx, Tw = window.Vue.openBlock, Bw = window.Vue.createBlock;
function Pw(e, t, n, o, s, a) {
  return Tw(), Bw(Dw(n.tag), { class: "mw-grid container" }, {
    default: Lw(() => [
      Aw(e.$slots, "default")
    ]),
    _: 3
  });
}
const Fw = /* @__PURE__ */ z(Ew, [["render", Pw]]), Mw = {
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
function Hw(e, t, n, o, s, a) {
  return zw(), Ow(Uw(n.tag), {
    class: Iw(a.classes)
  }, {
    default: Rw(() => [
      Nw(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const B = /* @__PURE__ */ z(Mw, [["render", Hw]]), kl = ["mobile", "tablet", "desktop", "desktop-wide"], jw = kl.reduce(
  (e, t) => Ge(ie({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), qw = {
  name: "MwCol",
  props: Ge(ie({}, jw), {
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
      for (let n = 0; n < kl.length; n++) {
        let o = kl[n], s = this.$props[o];
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
const k = /* @__PURE__ */ z(qw, [["render", Qw]]), Zw = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", ef = "M3 3H1v16h18v-2H3z M11 11L8 9l-4 4v3h14V5z", tf = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", ti = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", nf = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, of = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", sf = "M20 7h-7L10 .5 7 7H0l5.46 5.47-1.64 7 6.18-3.7 6.18 3.73-1.63-7zm-10 6.9l-3.76 2.27 1-4.28L3.5 8.5h4.61L10 4.6l1.9 3.9h4.6l-3.73 3.4 1 4.28z", Np = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", bl = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", af = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", Ds = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", rf = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", lf = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", Up = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", xl = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", cf = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", Ip = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", uf = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", df = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", gf = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", pf = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", mf = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", hf = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, uo = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, wf = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, zl = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, ff = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, Ol = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", _f = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z", vf = "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 5h2v2H9zm0 4h2v6H9z", Sf = "M 19 3 L 2 7 A 3.83 3.83 0 0 0 1 9.5 A 3.83 3.83 0 0 0 2 12 L 4 12.470703 L 4 15 C 4 16.108 4.892 17 6 17 C 7.108 17 8 16.108 8 15 L 8 13.412109 L 19 16 L 19 3 z";
const Si = window.Vue.computed, yf = window.Vue.watch, Cf = window.Vue.ref, kf = window.Vue.nextTick, bf = {
  name: "MwDialog",
  components: {
    MwButton: he,
    MwRow: B,
    MwCol: k,
    MwDivider: ei
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
    const n = Cf(null), o = Si(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = Si(() => ({
      "background-color": e.overlayColor,
      opacity: e.overlayOpacity
    })), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, r = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    yf(
      () => e.value,
      (u) => {
        u ? (r(), kf(() => {
          n.value.focus();
        })) : a();
      }
    );
    const l = Si(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: l,
      overlayStyles: s,
      mwIconClose: Ds,
      root: n
    };
  }
}, Nc = window.Vue.normalizeStyle, yi = window.Vue.createElementVNode, Ci = window.Vue.renderSlot, Ks = window.Vue.resolveComponent, xo = window.Vue.createVNode, ki = window.Vue.withCtx, Uc = window.Vue.createCommentVNode, xf = window.Vue.withKeys, $f = window.Vue.normalizeClass, Ic = window.Vue.openBlock, Vf = window.Vue.createElementBlock, Ef = window.Vue.Transition, Af = window.Vue.createBlock, Df = { class: "mw-ui-dialog__shell items-stretch" }, Lf = { class: "mw-ui-dialog__body" };
function Tf(e, t, n, o, s, a) {
  const r = Ks("mw-col"), l = Ks("mw-button"), u = Ks("mw-row"), d = Ks("mw-divider");
  return Ic(), Af(Ef, {
    name: `mw-ui-animation-${n.animation}`,
    style: Nc(o.cssVars)
  }, {
    default: ki(() => [
      n.value ? (Ic(), Vf("div", {
        key: 0,
        ref: "root",
        class: $f(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = xf((i) => n.closeOnEscapeKey && o.close, ["esc"]))
      }, [
        yi("div", {
          class: "mw-ui-dialog__overlay",
          style: Nc(o.overlayStyles),
          onClick: t[0] || (t[0] = (i) => !n.persistent && o.close)
        }, null, 4),
        yi("div", Df, [
          n.header ? Ci(e.$slots, "header", { key: 0 }, () => [
            xo(u, { class: "mw-ui-dialog__header" }, {
              default: ki(() => [
                xo(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                xo(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: ki(() => [
                    xo(l, {
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
            xo(d)
          ]) : Uc("", !0),
          yi("div", Lf, [
            Ci(e.$slots, "default")
          ]),
          Ci(e.$slots, "footer")
        ])
      ], 34)) : Uc("", !0)
    ]),
    _: 3
  }, 8, ["name", "style"]);
}
const et = /* @__PURE__ */ z(bf, [["render", Tf]]);
const Bf = {
  name: "MwInput",
  components: {
    MwIcon: be
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
      const t = ie({}, e.$attrs);
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
}, Rc = window.Vue.renderSlot, Pf = window.Vue.resolveComponent, Ys = window.Vue.openBlock, bi = window.Vue.createBlock, zc = window.Vue.createCommentVNode, Ff = window.Vue.resolveDynamicComponent, Mf = window.Vue.toDisplayString, Nf = window.Vue.mergeProps, Uf = window.Vue.withModifiers, If = window.Vue.createElementVNode, Rf = window.Vue.normalizeClass, zf = window.Vue.createElementBlock, Of = { class: "mw-ui-input__content" };
function Hf(e, t, n, o, s, a) {
  const r = Pf("mw-icon");
  return Ys(), zf("div", {
    class: Rf(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    If("div", Of, [
      Rc(e.$slots, "icon", {}, () => [
        n.icon ? (Ys(), bi(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : zc("", !0)
      ]),
      (Ys(), bi(Ff(n.type === "textarea" ? n.type : "input"), Nf({
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
        textContent: Mf(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      Rc(e.$slots, "indicator", {}, () => [
        n.indicator ? (Ys(), bi(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = Uf((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : zc("", !0)
      ])
    ])
  ], 2);
}
const Qa = /* @__PURE__ */ z(Bf, [["render", Hf]]);
const jf = {
  name: "MwMessage",
  components: { MwCol: k, MwRow: B, MwIcon: be, MwButton: he },
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
    mwIconClose: Ds,
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
      notice: hf,
      warning: zl,
      success: uo,
      error: wf
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
}, xi = window.Vue.renderSlot, Js = window.Vue.resolveComponent, Oc = window.Vue.createVNode, Hc = window.Vue.withCtx, jc = window.Vue.openBlock, qc = window.Vue.createBlock, Gc = window.Vue.createCommentVNode, qf = window.Vue.normalizeClass;
function Gf(e, t, n, o, s, a) {
  const r = Js("mw-icon"), l = Js("mw-col"), u = Js("mw-button"), d = Js("mw-row");
  return e.shown ? (jc(), qc(d, {
    key: 0,
    class: qf([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: Hc(() => [
      xi(e.$slots, "icon", {}, () => [
        Oc(r, {
          icon: a.icon,
          size: 24,
          class: "col shrink mw-ui-message__icon pa-1 items-start"
        }, null, 8, ["icon"])
      ]),
      Oc(l, {
        id: `${e.id}-label`,
        tag: "span",
        grow: "",
        align: "center",
        class: "mw-ui-message__label"
      }, {
        default: Hc(() => [
          xi(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id"]),
      xi(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (jc(), qc(u, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : Gc("", !0)
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : Gc("", !0);
}
const Xf = /* @__PURE__ */ z(jf, [["render", Gf]]);
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
const Wf = {}, Kf = window.Vue.createElementVNode, Yf = window.Vue.openBlock, Jf = window.Vue.createElementBlock, Qf = { class: "mw-ui-spinner" }, Zf = /* @__PURE__ */ Kf("div", { class: "mw-ui-spinner__bounce" }, null, -1), e0 = [
  Zf
];
function t0(e, t) {
  return Yf(), Jf("div", Qf, e0);
}
const Ue = /* @__PURE__ */ z(Wf, [["render", t0]]), Qe = {
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
const n0 = window.Vue.computed, o0 = {
  name: "MwUiThumbnail",
  components: { MwUiIcon: be },
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
      default: Ol
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: Qe.gray600
    },
    placeholderBackgroundColor: {
      type: String,
      default: Qe.gray200
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = n0(() => {
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
}, Xc = window.Vue.normalizeStyle, Wc = window.Vue.openBlock, s0 = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const a0 = window.Vue.resolveComponent, i0 = window.Vue.createBlock;
function r0(e, t, n, o, s, a) {
  const r = a0("mw-ui-icon");
  return n.thumbnail ? (Wc(), s0("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Xc(o.style)
  }, null, 4)) : (Wc(), i0(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Xc(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Hl = /* @__PURE__ */ z(o0, [["render", r0]]);
const l0 = {
  name: "MwRadio",
  components: { MwRow: B },
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
}, c0 = window.Vue.vModelRadio, Ja = window.Vue.createElementVNode, u0 = window.Vue.withDirectives, d0 = window.Vue.toDisplayString, g0 = window.Vue.resolveComponent, p0 = window.Vue.normalizeClass, m0 = window.Vue.withCtx, h0 = window.Vue.openBlock, w0 = window.Vue.createBlock, f0 = { class: "mw-ui-radio__controls" }, _0 = ["id", "disabled", "name", "value"], v0 = /* @__PURE__ */ Ja("span", { class: "mw-ui-radio__controls__icon" }, null, -1), S0 = ["for", "textContent"];
function y0(e, t, n, o, s, a) {
  const r = g0("mw-row");
  return h0(), w0(r, {
    class: p0(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: m0(() => [
      Ja("div", f0, [
        u0(Ja("input", {
          id: n.id,
          "onUpdate:modelValue": t[0] || (t[0] = (l) => a.inputModel = l),
          type: "radio",
          disabled: n.disabled || null,
          name: n.name,
          value: n.inputValue
        }, null, 8, _0), [
          [c0, a.inputModel]
        ]),
        v0
      ]),
      Ja("label", {
        for: n.id,
        class: "ps-2",
        textContent: d0(n.label)
      }, null, 8, S0)
    ]),
    _: 1
  }, 8, ["class"]);
}
const $l = /* @__PURE__ */ z(l0, [["render", y0]]), Kc = window.Vue.h, C0 = {
  name: "MwRadioGroup",
  components: { MwRadio: $l },
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
      (o) => Kc($l, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), Kc("div", { class: "mw-ui-radio-group" }, n);
  }
};
const k0 = {
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
}, Yc = window.Vue.normalizeClass, Jc = window.Vue.normalizeStyle, b0 = window.Vue.createElementVNode, x0 = window.Vue.openBlock, $0 = window.Vue.createElementBlock, V0 = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function E0(e, t, n, o, s, a) {
  return x0(), $0("div", {
    class: Yc(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: Jc(a.containerStyles)
  }, [
    b0("div", {
      class: Yc(["mw-progress-bar__bar", a.barClass]),
      style: Jc(a.barStyles)
    }, null, 6)
  ], 14, V0);
}
const Rp = /* @__PURE__ */ z(k0, [["render", E0]]), A0 = (e, t, n, o) => (s) => {
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
}, D0 = (e, t, n, o) => ({ initiateDrag: A0(
  e,
  t,
  n,
  o
) }), L0 = window.Vue.ref, Qc = window.Vue.computed, T0 = (e, t, n, o) => {
  const s = L0(0), a = Qc(
    () => t.value > e.value
  ), r = Qc(
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
const Qs = window.Vue.ref, B0 = window.Vue.onMounted, Zc = window.Vue.computed, P0 = window.Vue.nextTick, F0 = {
  name: "MwExpandableContent",
  components: {
    MwButton: he
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
    const t = Qs(!0), n = Qs(null), o = Zc(
      () => Math.min(e.minHeight, s.value)
    ), s = Qs(1), { initiateDrag: a } = D0(
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
    } = T0(o, s, n, t), c = () => d(u.value + 1), g = Qs(null), p = Zc(() => ({
      "--collapsed-height": o.value + "px"
    })), m = () => {
      if (!n.value)
        return;
      const w = n.value.style.height;
      if (n.value.style.removeProperty("height"), s.value = n.value.scrollHeight, w) {
        let f = Math.min(w, s.value);
        f = Math.max(f, o.value), f === o.value && (t.value = !0), n.value.style.height = f + "px";
      }
    };
    return B0(() => C(this, null, function* () {
      var w;
      yield P0(), s.value = n.value.scrollHeight, (w = g.value) == null || w.addEventListener(
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
      mwIconCollapse: ff,
      mwIconExpand: bl,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), d(0)), t.value = !t.value;
      },
      scrollable: l,
      scrollIndex: u,
      scrollToNextStep: c
    };
  }
}, M0 = window.Vue.renderSlot, N0 = window.Vue.normalizeClass, Zs = window.Vue.createElementVNode, U0 = window.Vue.resolveComponent, I0 = window.Vue.createVNode, $i = window.Vue.openBlock, R0 = window.Vue.createBlock, eu = window.Vue.createCommentVNode, tu = window.Vue.createElementBlock, z0 = window.Vue.normalizeStyle, O0 = { class: "mw-ui-expandable-content__container" }, H0 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, j0 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function q0(e, t, n, o, s, a) {
  const r = U0("mw-button");
  return $i(), tu("div", {
    class: "mw-ui-expandable-content",
    style: z0(o.cssVars)
  }, [
    Zs("div", O0, [
      Zs("div", {
        ref: "contentRef",
        class: N0(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        M0(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? ($i(), tu("div", H0, [
        I0(r, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? ($i(), R0(r, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : eu("", !0)
      ])) : eu("", !0)
    ]),
    Zs("div", j0, [
      Zs("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...l) => o.onDragButtonClicked && o.onDragButtonClicked(...l))
      })
    ], 512)
  ], 4);
}
const G0 = /* @__PURE__ */ z(F0, [["render", q0]]);
const ea = window.Vue.computed, X0 = {
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
      default: Qe.blue600
    },
    inactiveColor: {
      type: String,
      default: Qe.gray300
    },
    strokeWidth: {
      type: Number,
      default: 2
    }
  },
  setup(e) {
    const t = ea(() => e.size / 2 * 0.9), n = ea(() => Math.PI * (t.value * 2)), o = ea(
      () => (100 - e.percentage) / 100 * n.value
    ), s = ea(() => ({
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
}, nu = window.Vue.createElementVNode, ou = window.Vue.normalizeStyle, W0 = window.Vue.openBlock, K0 = window.Vue.createElementBlock, Y0 = ["width", "height", "viewport"], J0 = ["r", "cx", "cy", "stroke-dasharray"], Q0 = ["r", "cx", "cy", "stroke-dasharray"];
function Z0(e, t, n, o, s, a) {
  return W0(), K0("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: ou(o.cssVars)
  }, [
    nu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, J0),
    nu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: ou({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, Q0)
  ], 12, Y0);
}
const e1 = /* @__PURE__ */ z(X0, [["render", Z0]]), t1 = window.Vue.ref, Jt = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, Qt = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${Jt.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${Jt.tablet}px) and (max-width: ${Jt.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${Jt.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${Jt.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${Jt.desktopwide - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${Jt.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${Jt["desktop-wide"]}px)`
}, Vi = {
  mobile: () => matchMedia(Qt.mobile).matches,
  tablet: () => matchMedia(Qt.tablet).matches,
  desktop: () => matchMedia(Qt.desktop).matches,
  desktopwide: () => matchMedia(Qt["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(Qt["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(Qt["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(Qt["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(Qt["desktop-and-down"]).matches
}, n1 = {
  install: (e) => {
    const t = () => {
      for (let o in Vi)
        Vi.hasOwnProperty(o) && (n.value[o] = Vi[o]());
    }, n = t1({});
    t(), window.addEventListener("resize", t), e.config.globalProperties.$mwui = Ge(ie({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: n.value
    }), e.provide("breakpoints", n);
  }
}, o1 = {
  install: (e) => {
    e.config.globalProperties.$mwui = Ge(ie({}, e.config.globalProperties.$mwui || {}), {
      colors: Qe
    }), e.provide("colors", Qe);
  }
};
class wo extends Error {
}
const s1 = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new wo();
}), zp = { assertUser: s1 };
const a1 = window.Vue.resolveDirective, $o = window.Vue.createElementVNode, su = window.Vue.withDirectives, i1 = window.Vue.toDisplayString, r1 = window.Vue.unref, au = window.Vue.withCtx, l1 = window.Vue.openBlock, c1 = window.Vue.createBlock, u1 = window.Vue.createCommentVNode, d1 = { class: "pa-4 sx-login-dialog__header" }, g1 = { class: "sx-login-dialog__body px-6 pb-4" }, p1 = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, m1 = ["href"], h1 = window.Vue.computed, w1 = window.Vue.ref, f1 = window.Vuex.useStore, _1 = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = f1(), n = h1(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = w1(mw.util.getUrl("Special:UserLogin"));
    return (a, r) => {
      const l = a1("i18n");
      return n.value ? (l1(), c1(r1(et), {
        key: 0,
        "overlay-opacity": 0.25,
        "overlay-color": "#000",
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: au(() => [
          $o("div", d1, [
            su($o("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: au(() => [
          su($o("div", g1, null, 512), [
            [l, void 0, "cx-sx-login-dialog-body"]
          ]),
          $o("div", p1, [
            $o("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, i1(a.$i18n("cx-sx-login-dialog-button-label")), 9, m1)
          ])
        ]),
        _: 1
      })) : u1("", !0);
    };
  }
}, G = new mw.cx.SiteMapper(), v1 = mw.util.getUrl, S1 = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
};
class ni {
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
    pageRevision: l,
    status: u,
    targetTitle: d
  }) {
    this.translationId = t, this.sourceTitle = n, this.sourceLanguage = o, this.targetLanguage = s, this.startTimestamp = a, this.lastUpdatedTimestamp = r, this.pageRevision = l, this.status = u, this.targetTitle = d;
  }
}
const ta = "original", na = "empty", y1 = {
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
      ta,
      na
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return y1[t] || t;
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
    return ta;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return na;
  }
  static isUserMTProvider(t) {
    return [ta, na].includes(
      t
    );
  }
  static getProviderForInstrumentation(t) {
    return t === na ? "blank" : t === ta ? "source" : t.toLowerCase();
  }
}
class wn {
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = Ge(ie({}, a), {
      [Y.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [Y.EMPTY_TEXT_PROVIDER_KEY]: ""
    }), this.selected = r;
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
const iu = (e) => {
  var n;
  const t = Za(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, Za = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, zn = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), Op = (e) => {
  const t = Za(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = C1(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, C1 = (e) => {
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
}, Hp = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, jp = (e) => {
  const t = Hp(e);
  return t == null ? void 0 : t.targetExists;
};
class Ei {
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
let Me = class {
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
      (a) => zn(a)
    );
    s && jp(s) && (this.blockTemplateAdaptationInfo[t] = Hp(s));
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
      (t) => zn(t)
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
    const t = Za(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? iu(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => zn(o));
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
    return n && iu(n) || "";
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
    const o = Za(n);
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
      (a) => zn(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new Ei({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new Ei({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new Ei({
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
        (s) => zn(s)
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
};
const k1 = [
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
], b1 = (e, t, n) => {
  let o, s, a, r, l;
  return !e || !t ? 0 : e === t ? 1 : (s = r = ru(e, n), a = l = ru(t, n), l.length > r.length && (s = l, a = r), o = s.filter(function(u) {
    return a.indexOf(u) >= 0;
  }), o.length / s.length);
}, ru = function(e, t) {
  return e ? k1.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, qp = 95, x1 = 85, $1 = [
  { status: "failure", value: 100 - qp },
  { status: "warning", value: 100 - x1 },
  { status: "success", value: 100 }
], Gp = (e, t, n) => {
  const o = lu(e).textContent, s = lu(t).textContent, a = 100 - 100 * b1(s, o, n);
  return Math.ceil(a);
}, V1 = (e) => $1.find((t) => e <= t.value).status, E1 = (e, t) => Gp(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), A1 = () => (100 - qp) / 100, lu = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, yt = {
  calculateScore: Gp,
  getScoreStatus: V1,
  getMTScoreForPageSection: E1,
  getMtModificationThreshold: A1
}, oa = "__LEAD_SECTION__";
class Vl {
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
    return oa;
  }
  static isSectionLead(t) {
    return !t || t === oa;
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
    return n instanceof Me ? n.transclusionNode.outerHTML : n instanceof wn ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof Me ? t.blockTemplateSelected = !1 : t instanceof wn && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof Me ? n.blockTemplateSelected = !0 : n instanceof wn && (n.selected = !0);
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
    if (o instanceof Me)
      return !!o.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (o instanceof wn)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof Me ? n.blockTemplateProposedTranslations[t] || "" : n instanceof wn ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof Me ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof wn && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const o = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, s = yt.getMTScoreForPageSection(this, t) / 100;
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
    return this.isLeadSection ? oa : this.originalTitle;
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
    return this.isLeadSection ? oa : this.title;
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
class jl extends ni {
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
    return Vl.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? Vl.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const gt = "previous-edits", Ct = "popular", Ie = "topic", se = "collections", Ne = "automatic", cu = window.Vue.ref, D1 = mw.loader.require("ext.cx.articletopics"), sa = {
  type: Ne,
  id: gt
}, Xp = () => {
  const e = cu(
    D1.flatMap((s) => s.topics).map((s) => s.topicId.toLowerCase())
  ), t = cu(!1);
  return { filtersValidatorError: t, validateFilters: ({ type: s, id: a }) => {
    t.value = !1;
    const r = s == null ? void 0 : s.toLowerCase(), l = a == null ? void 0 : a.toLowerCase();
    return r === Ie ? e.value.some((u) => u === a) ? { type: r, id: l } : (t.value = !0, sa) : r === se ? { type: r, id: a } : l === gt ? {
      type: Ne,
      id: gt
    } : l === Ct ? {
      type: Ne,
      id: Ct
    } : l === se ? {
      type: Ne,
      id: se
    } : sa;
  }, isDefaultFilter: ({ type: s, id: a }) => s === sa.type && a === sa.id };
}, L1 = window.Vue.inject, T1 = window.Vue.reactive;
var B1 = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, Wp = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(B1, function() {
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
          const w = g[h];
          if (p.test(w)) {
            if (parseInt(w.slice(0, w.indexOf("=")), 10) === c)
              return w.slice(w.indexOf("=") + 1);
            g[h] = void 0;
          }
        }
        g = g.filter((h) => !!h);
        let m = this.getPluralForm(c, this.locale);
        return m = Math.min(m, g.length - 1), g[m];
      }
      getPluralForm(c, g) {
        const p = new Intl.PluralRules(g), m = p.resolvedOptions().pluralCategories, h = p.select(c);
        return ["zero", "one", "two", "few", "many", "other"].filter((w) => m.includes(w)).indexOf(h);
      }
      convertNumber(c, g = !1) {
        let p = this.digitTransformTable(this.locale), m = "";
        if (g) {
          if (parseFloat(c, 10) === c || !p)
            return c;
          const h = [];
          for (const f in p)
            h[p[f]] = f;
          p = h;
          const w = String(c);
          for (let f = 0; f < w.length; f++)
            m += p[w[f]] || w[f];
          return parseFloat(m, 10);
        }
        if (Intl.NumberFormat) {
          let h;
          const w = [...o[this.locale] || [], "en"];
          return h = Intl.NumberFormat.supportedLocalesOf(this.locale).length ? [this.locale] : w, m = new Intl.NumberFormat(h).format(c), m === "NaN" && (m = c), m;
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
            if (m = c.slice(1).map((w) => this.emit(w, g)), h = c[0].toLowerCase(), typeof this[h] != "function")
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
        for (const w in p)
          h += ` ${w}="${p[w]}"`;
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
            let w = 0;
            function f(x) {
              return () => {
                for (let U = 0; U < x.length; U++) {
                  const Ee = x[U]();
                  if (Ee !== null)
                    return Ee;
                }
                return null;
              };
            }
            function _(x) {
              const U = w, Ee = [];
              for (let Vt = 0; Vt < x.length; Vt++) {
                const Et = x[Vt]();
                if (Et === null)
                  return w = U, null;
                Ee.push(Et);
              }
              return Ee;
            }
            function S(x, U) {
              return () => {
                const Ee = w, Vt = [];
                let Et = U();
                for (; Et !== null; )
                  Vt.push(Et), Et = U();
                return Vt.length < x ? (w = Ee, null) : Vt;
              };
            }
            function y(x) {
              const U = x.length;
              return () => {
                let Ee = null;
                return m.slice(w, w + U) === x && (Ee = x, w += U), Ee;
              };
            }
            function b(x) {
              return () => {
                const U = m.slice(w).match(x);
                return U === null ? null : (w += U[0].length, U[0]);
              };
            }
            const E = b(/^\s+/), M = y("|"), V = y(":"), T = y("\\"), H = b(/^./), P = y("$"), N = b(/^\d+/), ae = y('"'), J = y("'"), yn = b(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), Cn = b(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), kt = f([pt, b(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function pt() {
              const x = _([T, H]);
              return x === null ? null : x[1];
            }
            const bo = f([pt, Cn]), kn = f([pt, yn]);
            function bt() {
              const x = _([P, N]);
              return x === null ? null : ["REPLACE", parseInt(x[1], 10) - 1];
            }
            const je = (Yt = b(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), xt = function(x) {
              return x.toString();
            }, () => {
              const x = Yt();
              return x === null ? null : xt(x);
            });
            var Yt, xt;
            function $t() {
              const x = _([M, S(0, qs)]);
              if (x === null)
                return null;
              const U = x[1];
              return U.length > 1 ? ["CONCAT"].concat(U) : U[0];
            }
            function qe() {
              const x = _([je, V, bt]);
              return x === null ? null : [x[0], x[2]];
            }
            function v() {
              const x = _([je, V, qs]);
              return x === null ? null : [x[0], x[2]];
            }
            function A() {
              const x = _([je, V]);
              return x === null ? null : [x[0], ""];
            }
            const D = f([function() {
              const x = _([f([qe, v, A]), S(0, $t)]);
              return x === null ? null : x[0].concat(x[1]);
            }, function() {
              const x = _([je, S(0, $t)]);
              return x === null ? null : [x[0]].concat(x[1]);
            }]), L = y("{{"), X = y("}}"), te = y("[["), O = y("]]"), R = y("["), Q = y("]");
            function tt() {
              const x = _([L, D, X]);
              return x === null ? null : x[1];
            }
            const we = f([function() {
              const x = _([S(1, qs), M, S(1, js)]);
              return x === null ? null : [["CONCAT"].concat(x[0]), ["CONCAT"].concat(x[2])];
            }, function() {
              const x = _([S(1, qs)]);
              return x === null ? null : [["CONCAT"].concat(x[0])];
            }]);
            function Cc() {
              let x = null;
              const U = _([te, we, O]);
              if (U !== null) {
                const Ee = U[1];
                x = ["WIKILINK"].concat(Ee);
              }
              return x;
            }
            function kc() {
              let x = null;
              const U = _([R, S(1, xh), E, S(1, js), Q]);
              return U !== null && (x = ["EXTLINK", U[1].length === 1 ? U[1][0] : ["CONCAT"].concat(U[1]), ["CONCAT"].concat(U[3])]), x;
            }
            const ci = b(/^[A-Za-z]+/);
            function yh() {
              const x = b(/^[^"]*/), U = _([ae, x, ae]);
              return U === null ? null : U[1];
            }
            function Ch() {
              const x = b(/^[^']*/), U = _([J, x, J]);
              return U === null ? null : U[1];
            }
            function kh() {
              const x = b(/^\s*=\s*/), U = _([E, ci, x, f([yh, Ch])]);
              return U === null ? null : [U[1], U[3]];
            }
            function bh() {
              const x = S(0, kh)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], x);
            }
            const xh = f([tt, bt, Cc, kc, function() {
              const x = S(1, kt)();
              return x === null ? null : x.join("");
            }]), js = f([tt, bt, Cc, kc, function() {
              let x = null;
              const U = w, Ee = y("<"), Vt = b(/^\/?/), Et = b(/^\s*>/), ui = _([Ee, ci, bh, Vt, Et]);
              if (ui === null)
                return null;
              const xc = w, $c = ui[1], di = S(0, js)(), $h = w, Vc = _([y("</"), ci, Et]);
              if (Vc === null)
                return ["CONCAT", m.slice(U, xc)].concat(di);
              const Vh = w, Eh = Vc[1], Ec = ui[2];
              if (function(bn, Gs, gi, pi = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((bn = bn.toLowerCase()) !== (Gs = Gs.toLowerCase()) || pi.allowedHtmlElements.indexOf(bn) === -1)
                  return !1;
                const Ah = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let Xs = 0, Dh = gi.length; Xs < Dh; Xs += 2) {
                  const mi = gi[Xs];
                  if (pi.allowedHtmlCommonAttributes.indexOf(mi) === -1 && (pi.allowedHtmlAttributesByElement[bn] || []).indexOf(mi) === -1 || mi === "style" && gi[Xs + 1].search(Ah) !== -1)
                    return !1;
                }
                return !0;
              }($c, Eh, Ec.slice(1)))
                x = ["HTMLELEMENT", $c, Ec].concat(di);
              else {
                const bn = (Gs) => Gs.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                x = ["CONCAT", bn(m.slice(U, xc))].concat(di, bn(m.slice($h, Vh)));
              }
              return x;
            }, function() {
              const x = S(1, kn)();
              return x === null ? null : x.join("");
            }]), qs = f([tt, bt, function() {
              const x = S(1, bo)();
              return x === null ? null : x.join("");
            }]), bc = function() {
              const x = S(0, js)();
              return x === null ? null : ["CONCAT"].concat(x);
            }();
            if (bc === null || w !== m.length)
              throw new Error("Parse error at position " + w.toString() + " in input: " + m);
            return bc;
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
            const w = m.slice(0, h).join("-"), f = this.messageStore.getMessage(i, w);
            if (typeof f == "string")
              return f;
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
})(Wp);
var P1 = Wp.exports;
const uu = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, Kp = Symbol("banana-context");
function ge() {
  const e = L1(Kp);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function F1(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = T1(new P1(e.locale, e));
  return {
    install: (n) => {
      n.provide(Kp, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: r } = uu(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...r) : o.textContent = t.i18n(a, ...r);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: r } = uu(s);
        o.innerHTML = t.i18n(a, ...r);
      });
    }
  };
}
const On = window.Vue.ref, M1 = window.Vue.computed, Ls = On(null), Ts = On(null), Bs = On(null), fo = On(null), Yp = On(null), Jp = On(null), Qp = On(null), { validateFilters: N1, filtersValidatorError: U1 } = Xp(), I1 = M1(() => ({
  type: Jp.value,
  id: Qp.value
})), Zp = (e, t) => {
  Jp.value = e, Qp.value = t, bs("filter-type", e), t && bs("filter-id", t);
}, R1 = (e) => {
  const t = new URLSearchParams(location.search);
  t.set("page", e == null ? void 0 : e.sourceTitle), t.set("from", e == null ? void 0 : e.sourceLanguage), t.set("to", e == null ? void 0 : e.targetLanguage), Bs.value = e == null ? void 0 : e.sourceTitle, Ls.value = e == null ? void 0 : e.sourceLanguage, Ts.value = e == null ? void 0 : e.targetLanguage, e instanceof jl && (t.set("draft", !0), Yp.value = !0, e.isLeadSectionTranslation || (t.set("section", e.sourceSectionTitle), fo.value = e.sourceSectionTitle)), t.delete("title"), Ps(Object.fromEntries(t));
}, z1 = (e) => {
  fo.value = e, bs("section", e);
}, O1 = (e) => {
  Bs.value = e, bs("page", e);
}, Ps = (e) => {
  history.replaceState(
    {},
    document.title,
    v1("Special:ContentTranslation", e)
  );
}, H1 = () => {
  const e = ge(), t = new URLSearchParams(location.search);
  Bs.value = t.get("page"), Ls.value = t.get("from"), Ts.value = t.get("to"), fo.value = t.get("section");
  const n = N1({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  Zp(n.type, n.id), U1.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, j1 = () => {
  const e = new URLSearchParams(location.search);
  fo.value = null, e.delete("section"), e.delete("title"), Ps(Object.fromEntries(e));
}, bs = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set(e, t), n.delete("title"), Ps(Object.fromEntries(n));
}, q1 = (e) => new URLSearchParams(location.search).get(e), G1 = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), Ls.value = e, Ts.value = t, n.delete("title"), Ps(Object.fromEntries(n));
}, X1 = () => {
  Ls.value = null, Ts.value = null, Bs.value = null, fo.value = null, Ps(null);
}, F = () => ({
  setLanguageURLParams: G1,
  setSectionURLParam: z1,
  setTranslationURLParams: R1,
  initializeURLState: H1,
  clearURLParameters: X1,
  clearSectionURLParameter: j1,
  setUrlParam: bs,
  getUrlParam: q1,
  pageURLParameter: Bs,
  sourceLanguageURLParameter: Ls,
  targetLanguageURLParameter: Ts,
  sectionURLParameter: fo,
  draftURLParameter: Yp,
  setPageURLParam: O1,
  currentSuggestionFilters: I1,
  setFilterURLParams: Zp
});
const W1 = window.Vue.resolveDynamicComponent, du = window.Vue.openBlock, gu = window.Vue.createBlock, K1 = window.Vue.Transition, Vo = window.Vue.withCtx, Eo = window.Vue.createVNode, Y1 = window.Vue.resolveComponent, Ai = window.Vue.unref, J1 = window.Vuex.useStore, Q1 = window.Vue.computed, Z1 = window.Vue.onMounted, e_ = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = F();
    t();
    const n = J1(), o = Q1(
      () => n.state.application.autoSavePending
    );
    return Z1(() => {
      window.addEventListener("beforeunload", (s) => {
        o.value && (s.preventDefault(), s.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (s) => {
        document.visibilityState === "visible" && zp.assertUser().then(() => n.commit("application/setIsLoginDialogOn", !1)).catch((a) => {
          a instanceof wo && n.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (s, a) => {
      const r = Y1("router-view");
      return du(), gu(Ai(Fw), { id: "contenttranslation" }, {
        default: Vo(() => [
          Eo(Ai(B), { class: "cx-container" }, {
            default: Vo(() => [
              Eo(Ai(k), { cols: "12" }, {
                default: Vo(() => [
                  Eo(r, null, {
                    default: Vo(({ Component: l, route: u }) => [
                      Eo(K1, {
                        name: u.meta.transitionName
                      }, {
                        default: Vo(() => [
                          (du(), gu(W1(l)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      Eo(_1)
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
}, t_ = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translationsLoaded: { draft: !1, published: !1 },
  translatorStats: null
}, n_ = {
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
class em {
  constructor({ id: t, type: n, question: o, url: s }) {
    this.id = t, this.type = n, this.question = o, this.url = s;
  }
}
class go {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new em(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const pu = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => Ge(ie({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class o_ {
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
    const t = pu((s = this.user) == null ? void 0 : s.content), n = pu((a = this.mt) == null ? void 0 : a.content);
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
class ql extends ni {
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
const oi = mw.user.isAnon() ? void 0 : "user", tm = (e) => {
  if (e === "assertuserfailed")
    throw new wo();
};
function nm(e, t = null) {
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
        (u) => new jl(Ge(ie({}, u), { status: e }))
      ) : r = a.map(
        (u) => new ql(Ge(ie({}, u), { status: e }))
      ), (l = s.continue) != null && l.offset) {
        const u = yield nm(
          e,
          s.continue.offset
        );
        r = r.concat(u);
      }
      return r;
    }));
  });
}
function s_(e) {
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
      (a) => new o_(a)
    );
  });
}
function a_(e, t, n, o, s) {
  return C(this, null, function* () {
    if (!o)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== Y.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const r = G.getCXServerUrl(a);
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
const i_ = (e, t, n) => {
  const o = G.getApi(t);
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
}, r_ = ({
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
  sectionTranslationId: c
}) => {
  const g = {
    assert: oi,
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
    sectiontranslationid: c
  };
  return u && (g.captchaid = u, g.captchaword = d), new mw.Api().postWithToken("csrf", g).then((m) => {
    if (m = m.cxpublishsection, m.result === "error") {
      if (m.edit.captcha)
        return {
          publishFeedbackMessage: new go({
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
    tm(m);
    let w;
    return h = h || {}, h.exception ? w = h.exception.message : h.error ? w = h.error.info : w = "Unknown error", {
      publishFeedbackMessage: new go({
        text: w,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, l_ = ({
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
    assert: oi,
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
    tm(p);
    let h;
    return m.exception ? h = m.exception.message : m.error ? h = m.error.info : h = "Unknown error", new go({ text: h, status: "error" });
  });
}, c_ = (e) => {
  const t = {
    assert: oi,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, u_ = () => {
  const e = {
    assert: oi,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new ql(n.cxcheckunreviewed.translation)
  );
}, d_ = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, g_ = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, p_ = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), Ze = {
  fetchTranslations: nm,
  fetchTranslationUnits: s_,
  fetchSegmentTranslation: a_,
  parseTemplateWikitext: i_,
  publishTranslation: r_,
  saveTranslation: l_,
  deleteTranslation: d_,
  fetchTranslatorStats: p_,
  deleteCXTranslation: g_,
  splitTranslation: c_,
  checkUnreviewedTranslations: u_
};
function m_(t) {
  return C(this, arguments, function* ({ commit: e }) {
    const n = yield Ze.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const h_ = {
  fetchTranslatorStats: m_
}, w_ = {
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
}, f_ = {
  namespaced: !0,
  state: t_,
  getters: n_,
  actions: h_,
  mutations: w_
}, om = [
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
], __ = [
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
], v_ = [
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
], S_ = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], y_ = [
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
], C_ = {
  en: om,
  es: __,
  bn: v_,
  fr: S_,
  de: y_
}, k_ = {
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
   * Stores appendix section titles, grouped by language
   * @type Object - { language1: [titles1], ... }
   */
  appendixSectionTitles: C_,
  /**
   * Maximum number of suggestions based on user's recently edited translations,
   * to be displayed inside "search for an article" view
   */
  maxRecentlyEditedSuggestions: 3
}, b_ = {
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
};
class _o {
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
    wikidataId: r,
    suggestionProvider: l = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.wikidataId = r, this.langLinksCount = a, this.suggestionProvider = l, this.isListable = !0;
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
    var n, o, s;
    return t.type === Ne && t.id === se ? ((n = this.suggestionProvider) == null ? void 0 : n.type) === se : ((o = this.suggestionProvider) == null ? void 0 : o.type) === t.type && ((s = this.suggestionProvider) == null ? void 0 : s.id) === t.id;
  }
}
class _n {
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
    missing: r,
    sourceSections: l = [],
    targetSections: u = [],
    isListable: d = !0,
    suggestionProvider: i = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.missingSections = r, this.presentSections = a, this.sourceSections = l, this.targetSections = u, this.isListable = d, this.suggestionProvider = i;
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
    var n, o, s;
    return t.type === Ne && t.id === se ? ((n = this.suggestionProvider) == null ? void 0 : n.type) === se : ((o = this.suggestionProvider) == null ? void 0 : o.type) === t.type && ((s = this.suggestionProvider) == null ? void 0 : s.id) === t.id;
  }
}
class po {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s;
  }
}
class Gl {
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
class sm extends _o {
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
    }), this.collection = new Gl(u);
  }
}
class am extends _n {
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
    }), this.collection = new Gl(c);
  }
}
const x_ = om, Xt = (n) => C(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
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
function $_() {
  return C(this, null, function* () {
    return ((yield Xt({ urlPostfix: "/page-collections", urlParams: {} })) || []).map((o) => new Gl(o));
  });
}
function V_(e, t, n, o = 24) {
  return C(this, null, function* () {
    return ((yield Xt({ urlParams: {
      source: e,
      target: t,
      seed: n,
      count: o
    } })) || []).map(
      (r) => new _o({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
const E_ = (e, t) => C(void 0, null, function* () {
  return ((yield Xt({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  } })) || []).map(
    (s) => new _o({
      sourceTitle: s.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: s.wikidata_id,
      langLinksCount: parseInt(s.langlinks_count)
    })
  );
}), A_ = (e, t) => C(void 0, null, function* () {
  const s = (yield Xt({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  }, urlPostfix: "/sections" })) || [];
  return s && s.map(
    (a) => new _n({
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
}), D_ = (e, t) => C(void 0, null, function* () {
  return ((yield Xt({ urlParams: {
    source: e,
    target: t,
    count: 24,
    collections: !0
  } })) || []).map(
    (s) => new sm({
      sourceTitle: s.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: s.wikidata_id,
      langLinksCount: parseInt(s.langlinks_count),
      collection: s.collection
    })
  );
}), L_ = (e, t) => C(void 0, null, function* () {
  const s = (yield Xt({ urlPostfix: "/sections", urlParams: {
    source: e,
    target: t,
    count: 24,
    collections: !0
  } })) || [];
  return s && s.map(
    (a) => new am({
      sourceLanguage: e,
      targetLanguage: t,
      sourceTitle: a.source_title,
      targetTitle: a.target_title,
      sourceSections: a.source_sections,
      targetSections: a.target_sections,
      present: a.present,
      missing: a.missing,
      collection: a.collection
    })
  );
});
function T_(e, t, n) {
  return C(this, null, function* () {
    const o = [t, e, n].map(
      (r) => encodeURIComponent(r)
    ), s = G.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (r) => r.ok ? r.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((r) => r == null ? void 0 : r.sections).catch((r) => null);
    return a ? new _n(a) : null;
  });
}
function B_(e, t, n) {
  return C(this, null, function* () {
    const a = (yield Xt({ urlPostfix: "/sections", urlParams: {
      source: e,
      target: t,
      seed: n,
      count: 24
    } })) || [];
    return a && a.map(
      (r) => new _n({
        sourceLanguage: e,
        targetLanguage: t,
        sourceTitle: r.source_title,
        targetTitle: r.target_title,
        sourceSections: r.source_sections,
        targetSections: r.target_sections,
        present: r.present,
        missing: r.missing
      })
    );
  });
}
function P_(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    return ((yield Xt({ urlParams: s })) || []).map(
      (r) => new _o({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
function F_(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    }, r = (yield Xt({ urlPostfix: "/sections", urlParams: s })) || [];
    return r && r.map(
      (l) => new _n({
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
function M_(e) {
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
    }, n = G.getApi(e);
    try {
      const a = (yield n.get(t)).query.usercontribs.map((r) => r.title);
      return [...new Set(a)];
    } catch (o) {
      return mw.log.error("Error while fetching suggestion seeds", o), [];
    }
  });
}
function N_(e, t) {
  return C(this, null, function* () {
    const n = {
      action: "query",
      format: "json",
      list: "cxpublishedtranslations",
      from: e,
      to: t,
      limit: 200
    }, o = G.getApi(e);
    try {
      return (yield o.get(n)).result.translations.map((a) => a.sourceTitle);
    } catch (s) {
      return mw.log.error("Error while fetching suggestion seeds", s), [];
    }
  });
}
function U_(e, t) {
  return C(this, null, function* () {
    const n = {
      action: "parse",
      format: "json",
      formatversion: 2,
      prop: "sections",
      page: t
    }, o = G.getApi(e);
    try {
      return (yield o.get(n)).parse;
    } catch (s) {
      return mw.log.error("Error while fetching suggestion sections size", s), [];
    }
  });
}
function I_(e) {
  const t = x_.map((o) => encodeURIComponent(o)).join("|"), n = G.getCXServerUrl(
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
const R_ = (e, t, n) => {
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
}, z_ = (e) => {
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
}, O_ = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions"
  }, t = new mw.Api();
  return Promise.resolve(t.postWithToken("csrf", e)).then((n) => {
    var a, r;
    const o = n.query.contenttranslationsuggestions.lists || {};
    return (((r = (a = Object.values(o)) == null ? void 0 : a[0]) == null ? void 0 : r.suggestions) || []).map((l) => new po(l));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
}, ce = {
  fetchFavorites: O_,
  fetchPageSuggestions: V_,
  fetchSectionSuggestion: T_,
  fetchSectionSuggestions: B_,
  fetchSuggestionSeeds: N_,
  fetchAppendixTargetSectionTitles: I_,
  fetchSuggestionSourceSections: U_,
  markFavorite: R_,
  unmarkFavorite: z_,
  fetchUserEdits: M_,
  fetchMostPopularPageSuggestions: E_,
  fetchMostPopularSectionSuggestions: A_,
  fetchPageSuggestionsByTopics: P_,
  fetchSectionSuggestionsByTopics: F_,
  fetchPageCollections: $_,
  fetchPageSuggestionsByCollections: D_,
  fetchSectionSuggestionsByCollections: L_
};
function H_(o, s) {
  return C(this, arguments, function* ({ getters: e, commit: t }, n) {
    if (e.appendixTitlesExistForLanguage(n))
      return;
    const a = yield ce.fetchAppendixTargetSectionTitles(n);
    t("addAppendixSectionTitlesForLanguage", {
      language: n,
      titles: a
    });
  });
}
const j_ = {
  fetchAppendixSectionTitles: H_
}, q_ = {
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
  }
}, G_ = {
  namespaced: !0,
  state: k_,
  getters: b_,
  actions: j_,
  mutations: q_
}, X_ = {
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
}, W_ = {
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
      (u) => t.getPage(s, u.sourceTitle)
    ).filter((u) => !!u);
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
class vo {
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
    pageid: a,
    pagelanguage: r,
    pageprops: l,
    pageviews: u,
    thumbnail: d,
    title: i,
    revisions: c,
    _alias: g,
    content: p = null,
    sections: m = []
  } = {}) {
    var h;
    this.language = r, this.title = i, this.pageId = a, this.description = t, this.image = s, this.pageprops = l, this.pageviews = u, this.thumbnail = d, this.langLinksCount = n, this.articleSize = (h = c == null ? void 0 : c[0]) == null ? void 0 : h.size, this.revision = o, this.alias = g, this.wikidataId = l == null ? void 0 : l.wikibase_item, this.content = p, this.sections = m;
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
class K_ {
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
function Y_() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const J_ = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), Y_();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, Q_ = (e, t) => {
  let n, o;
  return t ? (n = J_(e), o = n.$element.find(
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
}, Z_ = (e, t) => {
  const n = Array.from(
    Q_(e, t)
  );
  return ev(n).map(
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
        (c) => new Me({
          sentences: tv(c),
          node: c
        })
      ), i = !l;
      return new Vl({ id: u, title: l, subSections: d, isLeadSection: i });
    }
  );
}, ev = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, tv = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new wn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), im = {
  convertSegmentedContentToPageSections: Z_
}, Xl = 120, nv = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: Xl,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return G.getApi(e).get(n).then((s) => {
    const a = s.query.pages, l = (s.query.redirects || []).reduce(
      (i, c) => Ge(ie({}, i), { [c.to]: c.from }),
      {}
    ), d = (s.query.normalized || []).reduce(
      (i, c) => Ge(ie({}, i), {
        [c.to]: c.from
      }),
      {}
    );
    return a.map((i) => {
      const c = d[i.title] || l[i.title] || null;
      return new vo(Ge(ie({}, i), { _alias: c }));
    });
  });
}, ov = (e, t) => {
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
  return G.getApi(e).get(n).then((s) => {
    var u, d;
    const a = s.query.pages;
    if (!a || !a.length || (u = a[0]) != null && u.missing)
      return null;
    const r = [{ lang: e, title: t }, ...a[0].langlinks || []], l = (d = a[0].pageprops) == null ? void 0 : d.wikibase_item;
    return l ? Object.freeze(new K_(l, r)) : null;
  });
}, sv = (e, t, n) => {
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
  return G.getApi(e).get(o).then((a) => Object.values(a.query.pages).map((l) => {
    var u, d;
    return (d = (u = l.langlinks) == null ? void 0 : u[0]) == null ? void 0 : d["*"];
  }).filter((l) => !!l));
}, av = (e, t, n, o = null) => rm(
  e,
  t,
  n,
  o
).then(
  (s) => new vo({
    sections: im.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), rm = (e, t, n, o = null) => {
  const s = G.getWikiDomainCode(e), a = G.getWikiDomainCode(t), r = {
    $sourcelanguage: s,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let l = "/page/$sourcelanguage/$targetlanguage/$title";
  o && (r.$revision = o, l += "/$revision");
  const u = G.getCXServerUrl(
    l,
    r
  );
  return fetch(u).then((d) => d.json()).then((d) => d.segmentedContent);
}, iv = (e) => C(void 0, null, function* () {
  const t = S1();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: Xl,
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
  return yield G.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new vo(s))).catch((o) => []);
}), rv = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: Xl,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return G.getApi(t).get(o).then((s) => {
    var a;
    return ((a = s.query) == null ? void 0 : a.pages) || [];
  }).then(
    (s) => s.sort((a, r) => a.index - r.index).map(
      (a) => new vo(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, So = {
  fetchPages: nv,
  fetchLanguageTitles: ov,
  fetchPageContent: av,
  fetchSegmentedContent: rm,
  fetchNearbyPages: iv,
  searchPagesByTitlePrefix: rv,
  fetchLanguageLinksForLanguage: sv
};
function lv() {
  return G.getLanguagePairs().then((e) => e.sourceLanguages);
}
function cv(e, t) {
  return C(this, null, function* () {
    const n = G.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new Y(e, t, o.mt)
      )
    );
  });
}
function uv() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function dv(e, t, n, o) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const s = mw.config.get("wgWikiID"), a = G.getWikiDomainCode(e), r = G.getWikiDomainCode(t), l = {
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
const si = {
  fetchSupportedLanguageCodes: lv,
  fetchSupportedMTProviders: cv,
  fetchCXServerToken: uv,
  addWikibaseLink: dv
};
function gv({ getters: e, commit: t }, { language: n, titles: o }) {
  o = o.filter((r) => !e.getPage(n, r));
  const s = 50, a = [];
  for (let r = 0; r < o.length; r += s) {
    const l = o.slice(r, r + s), u = So.fetchPages(n, l).then(
      (d) => d.forEach((i) => t("addPage", i))
    );
    a.push(u);
  }
  return Promise.all(a);
}
function pv(n) {
  return C(this, arguments, function* ({ commit: e, state: t }) {
    if (!t.supportedLanguageCodes.length && !t.supportedLanguageCodesRequested) {
      e("setSupportedLanguageCodesRequested", !0);
      const o = yield si.fetchSupportedLanguageCodes();
      e("setSupportedLanguageCodes", o);
    }
  });
}
function mv(o) {
  return C(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: s } = t.application;
    if ((r = n.nearbyPages[s]) != null && r.length)
      return;
    const a = yield So.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const hv = {
  fetchNearbyPages: mv,
  fetchPageMetadata: gv,
  fetchSupportedLanguageCodes: pv
}, wv = {
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
}, fv = {
  namespaced: !0,
  state: X_,
  getters: W_,
  actions: hv,
  mutations: wv
}, _v = {
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
}, vv = {
  /**
   * Returns a boolean indicating whether the current publishing target
   * is the user's sandbox
   *
   * @param {object} state
   * @return {boolean}
   */
  isSandboxTarget: (e) => e.publishTarget === "SANDBOX_SECTION"
}, Sv = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => zn(a)
  );
  return s && jp(s) ? Ze.parseTemplateWikitext(
    Op(s),
    n,
    t
  ) : Promise.resolve(null);
}, lm = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => zn(a)
  );
  return s ? Ze.parseTemplateWikitext(
    Op(s),
    n,
    t
  ) : Promise.resolve(null);
}, yv = (o) => C(void 0, [o], function* ({ dispatch: e, state: t, commit: n }) {
  var a, r;
  t.cxServerToken || (yield si.fetchCXServerToken().then(
    (l) => {
      l.age <= 30 && (l.age = 3600);
      const u = Math.floor(Date.now() / 1e3);
      l.refreshAt = u + l.age - 30, n("setCXServerToken", l);
    },
    (l) => {
      if (l === "token-impossible") {
        const u = Math.floor(Date.now() / 1e3);
        n("setCXServerToken", { jwt: "", refreshAt: u + 3600 * 10 });
      }
    }
  ));
  const s = Math.floor(Date.now() / 1e3);
  return ((a = t.cxServerToken) == null ? void 0 : a.refreshAt) <= s ? (n("setCXServerToken", null), e("getCXServerToken")) : (r = t.cxServerToken) == null ? void 0 : r.jwt;
}), Cv = { getCXServerToken: yv }, kv = {
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
  }
}, bv = {
  namespaced: !0,
  state: _v,
  getters: vv,
  actions: Cv,
  mutations: kv
}, xv = window.Vuex.createStore, $v = xv({
  modules: { translator: f_, suggestions: G_, mediawiki: fv, application: bv }
});
function Vv() {
  return cm().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function cm() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const Ev = typeof Proxy == "function", Av = "devtools-plugin:setup", Dv = "plugin:settings:set";
let Hn, El;
function Lv() {
  var e;
  return Hn !== void 0 || (typeof window != "undefined" && window.performance ? (Hn = !0, El = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Hn = !0, El = global.perf_hooks.performance) : Hn = !1), Hn;
}
function Tv() {
  return Lv() ? El.now() : Date.now();
}
class Bv {
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
        return Tv();
      }
    }, n && n.on(Dv, (r, l) => {
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
function Pv(e, t) {
  const n = e, o = cm(), s = Vv(), a = Ev && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(Av, e, t);
  else {
    const r = a ? new Bv(n, s) : null;
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
const um = window.Vue.getCurrentInstance, mo = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const St = window.Vue.computed, ys = window.Vue.unref, Fv = window.Vue.watchEffect, dm = window.Vue.defineComponent, Mv = window.Vue.reactive, gm = window.Vue.h, Di = window.Vue.provide, Nv = window.Vue.ref, pm = window.Vue.watch, Uv = window.Vue.shallowRef, Iv = window.Vue.shallowReactive, Rv = window.Vue.nextTick, Gt = typeof window != "undefined";
function zv(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const W = Object.assign;
function Li(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = Re(s) ? s.map(e) : e(s);
  }
  return n;
}
const Cs = () => {
}, Re = Array.isArray;
function j(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Ov = /\/$/, Hv = (e) => e.replace(Ov, "");
function Ti(e, t, n = "/") {
  let o, s = {}, a = "", r = "";
  const l = t.indexOf("#");
  let u = t.indexOf("?");
  return l < u && l >= 0 && (u = -1), u > -1 && (o = t.slice(0, u), a = t.slice(u + 1, l > -1 ? l : t.length), s = e(a)), l > -1 && (o = o || t.slice(0, l), r = t.slice(l, t.length)), o = Gv(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + r,
    path: o,
    query: s,
    hash: r
  };
}
function jv(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function mu(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function hu(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && vn(t.matched[o], n.matched[s]) && mm(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function vn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function mm(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!qv(e[n], t[n]))
      return !1;
  return !0;
}
function qv(e, t) {
  return Re(e) ? wu(e, t) : Re(t) ? wu(t, e) : e === t;
}
function wu(e, t) {
  return Re(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function Gv(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return j(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
var xs;
(function(e) {
  e.pop = "pop", e.push = "push";
})(xs || (xs = {}));
var ks;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(ks || (ks = {}));
function Xv(e) {
  if (!e)
    if (Gt) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Hv(e);
}
const Wv = /^[^#]+#/;
function Kv(e, t) {
  return e.replace(Wv, "#") + t;
}
function Yv(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const ai = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function Jv(e) {
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
    t = Yv(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function fu(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Al = /* @__PURE__ */ new Map();
function Qv(e, t) {
  Al.set(e, t);
}
function Zv(e) {
  const t = Al.get(e);
  return Al.delete(e), t;
}
let eS = () => location.protocol + "//" + location.host;
function hm(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = s.includes(e.slice(a)) ? e.slice(a).length : 1, u = s.slice(l);
    return u[0] !== "/" && (u = "/" + u), mu(u, "");
  }
  return mu(n, e) + o + s;
}
function tS(e, t, n, o) {
  let s = [], a = [], r = null;
  const l = ({ state: g }) => {
    const p = hm(e, location), m = n.value, h = t.value;
    let w = 0;
    if (g) {
      if (n.value = p, t.value = g, r && r === m) {
        r = null;
        return;
      }
      w = h ? g.position - h.position : 0;
    } else
      o(p);
    s.forEach((f) => {
      f(n.value, m, {
        delta: w,
        type: xs.pop,
        direction: w ? w > 0 ? ks.forward : ks.back : ks.unknown
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
    g.state && g.replaceState(W({}, g.state, { scroll: ai() }), "");
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
function _u(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? ai() : null
  };
}
function nS(e) {
  const { history: t, location: n } = window, o = {
    value: hm(e, n)
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
    const c = e.indexOf("#"), g = c > -1 ? (n.host && document.querySelector("base") ? e : e.slice(c)) + u : eS() + e + u;
    try {
      t[i ? "replaceState" : "pushState"](d, "", g), s.value = d;
    } catch (p) {
      ({}).NODE_ENV !== "production" ? j("Error with push/replace State", p) : console.error(p), n[i ? "replace" : "assign"](g);
    }
  }
  function r(u, d) {
    const i = W({}, t.state, _u(
      s.value.back,
      // keep back and forward entries but override current position
      u,
      s.value.forward,
      !0
    ), d, { position: s.value.position });
    a(u, i, !0), o.value = u;
  }
  function l(u, d) {
    const i = W(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: u,
        scroll: ai()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && j(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(i.current, i, !0);
    const c = W({}, _u(o.value, u, null), { position: i.position + 1 }, d);
    a(u, c, !1), o.value = u;
  }
  return {
    location: o,
    state: s,
    push: l,
    replace: r
  };
}
function oS(e) {
  e = Xv(e);
  const t = nS(e), n = tS(e, t.state, t.location, t.replace);
  function o(a, r = !0) {
    r || n.pauseListeners(), history.go(a);
  }
  const s = W({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: Kv.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function sS(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && j(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), oS(e);
}
function aS(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function wm(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Zt = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, Dl = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var vu;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(vu || (vu = {}));
const iS = {
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
    return `Redirected from "${e.fullPath}" to "${lS(t)}" via a navigation guard.`;
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
function ho(e, t) {
  return {}.NODE_ENV !== "production" ? W(new Error(iS[e](t)), {
    type: e,
    [Dl]: !0
  }, t) : W(new Error(), {
    type: e,
    [Dl]: !0
  }, t);
}
function At(e, t) {
  return e instanceof Error && Dl in e && (t == null || !!(e.type & t));
}
const rS = ["params", "query", "hash"];
function lS(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of rS)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Su = "[^/]+?", cS = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, uS = /[.+*?^${}()[\]/\\]/g;
function dS(e, t) {
  const n = W({}, cS, t), o = [];
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
        c || (s += "/"), s += g.value.replace(uS, "\\$&"), p += 40;
      else if (g.type === 1) {
        const { value: m, repeatable: h, optional: w, regexp: f } = g;
        a.push({
          name: m,
          repeatable: h,
          optional: w
        });
        const _ = f || Su;
        if (_ !== Su) {
          p += 10;
          try {
            new RegExp(`(${_})`);
          } catch (y) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${_}): ` + y.message);
          }
        }
        let S = h ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
        c || (S = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        w && d.length < 2 ? `(?:/${S})` : "/" + S), w && (S += "?"), s += S, p += 20, w && (p += -8), h && (p += -20), _ === ".*" && (p += -50);
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
          const { value: m, repeatable: h, optional: w } = p, f = m in d ? d[m] : "";
          if (Re(f) && !h)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const _ = Re(f) ? f.join("/") : f;
          if (!_)
            if (w)
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
function gS(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function pS(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = gS(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (yu(o))
      return 1;
    if (yu(s))
      return -1;
  }
  return s.length - o.length;
}
function yu(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const mS = {
  type: 0,
  value: ""
}, hS = /[a-zA-Z0-9_]/;
function wS(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[mS]];
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
        u === "(" ? n = 2 : hS.test(u) ? g() : (c(), n = 0, u !== "*" && u !== "?" && u !== "+" && l--);
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
function fS(e, t, n) {
  const o = dS(wS(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const r of o.keys)
      a.has(r.name) && j(`Found duplicated params with name "${r.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(r.name);
  }
  const s = W(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function _S(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = bu({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(i) {
    return o.get(i);
  }
  function a(i, c, g) {
    const p = !g, m = vS(i);
    ({}).NODE_ENV !== "production" && kS(m, c), m.aliasOf = g && g.record;
    const h = bu(t, i), w = [
      m
    ];
    if ("alias" in i) {
      const S = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const y of S)
        w.push(W({}, m, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: g ? g.record.components : m.components,
          path: y,
          // we might be the child of an alias
          aliasOf: g ? g.record : m
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let f, _;
    for (const S of w) {
      const { path: y } = S;
      if (c && y[0] !== "/") {
        const b = c.record.path, E = b[b.length - 1] === "/" ? "" : "/";
        S.path = c.record.path + (y && E + y);
      }
      if ({}.NODE_ENV !== "production" && S.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (f = fS(S, c, h), {}.NODE_ENV !== "production" && c && y[0] === "/" && bS(f, c), g ? (g.alias.push(f), {}.NODE_ENV !== "production" && CS(g, f)) : (_ = _ || f, _ !== f && _.alias.push(f), p && i.name && !ku(f) && r(i.name)), m.children) {
        const b = m.children;
        for (let E = 0; E < b.length; E++)
          a(b[E], f, g && g.children[E]);
      }
      g = g || f, (f.record.components && Object.keys(f.record.components).length || f.record.name || f.record.redirect) && u(f);
    }
    return _ ? () => {
      r(_);
    } : Cs;
  }
  function r(i) {
    if (wm(i)) {
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
    for (; c < n.length && pS(i, n[c]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[c].record.path || !fm(i, n[c])); )
      c++;
    n.splice(c, 0, i), i.record.name && !ku(i) && o.set(i.record.name, i);
  }
  function d(i, c) {
    let g, p = {}, m, h;
    if ("name" in i && i.name) {
      if (g = o.get(i.name), !g)
        throw ho(1, {
          location: i
        });
      if ({}.NODE_ENV !== "production") {
        const _ = Object.keys(i.params || {}).filter((S) => !g.keys.find((y) => y.name === S));
        _.length && j(`Discarded invalid param(s) "${_.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = g.record.name, p = W(
        // paramsFromLocation is a new object
        Cu(
          c.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((_) => !_.optional).map((_) => _.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && Cu(i.params, g.keys.map((_) => _.name))
      ), m = g.stringify(p);
    } else if ("path" in i)
      m = i.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && j(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((_) => _.re.test(m)), g && (p = g.parse(m), h = g.record.name);
    else {
      if (g = c.name ? o.get(c.name) : n.find((_) => _.re.test(c.path)), !g)
        throw ho(1, {
          location: i,
          currentLocation: c
        });
      h = g.record.name, p = W({}, c.params, i.params), m = g.stringify(p);
    }
    const w = [];
    let f = g;
    for (; f; )
      w.unshift(f.record), f = f.parent;
    return {
      name: h,
      path: m,
      params: p,
      matched: w,
      meta: yS(w)
    };
  }
  return e.forEach((i) => a(i)), { addRoute: a, resolve: d, removeRoute: r, getRoutes: l, getRecordMatcher: s };
}
function Cu(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function vS(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: SS(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function SS(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function ku(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function yS(e) {
  return e.reduce((t, n) => W(t, n.meta), {});
}
function bu(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Ll(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function CS(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Ll.bind(null, n)))
      return j(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Ll.bind(null, n)))
      return j(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function kS(e, t) {
  t && t.record.name && !e.name && !e.path && j(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function bS(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Ll.bind(null, n)))
      return j(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function fm(e, t) {
  return t.children.some((n) => n === e || fm(e, n));
}
const _m = /#/g, xS = /&/g, $S = /\//g, VS = /=/g, ES = /\?/g, vm = /\+/g, AS = /%5B/g, DS = /%5D/g, Sm = /%5E/g, LS = /%60/g, ym = /%7B/g, TS = /%7C/g, Cm = /%7D/g, BS = /%20/g;
function Wl(e) {
  return encodeURI("" + e).replace(TS, "|").replace(AS, "[").replace(DS, "]");
}
function PS(e) {
  return Wl(e).replace(ym, "{").replace(Cm, "}").replace(Sm, "^");
}
function Tl(e) {
  return Wl(e).replace(vm, "%2B").replace(BS, "+").replace(_m, "%23").replace(xS, "%26").replace(LS, "`").replace(ym, "{").replace(Cm, "}").replace(Sm, "^");
}
function FS(e) {
  return Tl(e).replace(VS, "%3D");
}
function MS(e) {
  return Wl(e).replace(_m, "%23").replace(ES, "%3F");
}
function NS(e) {
  return e == null ? "" : MS(e).replace($S, "%2F");
}
function $s(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && j(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function US(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(vm, " "), r = a.indexOf("="), l = $s(r < 0 ? a : a.slice(0, r)), u = r < 0 ? null : $s(a.slice(r + 1));
    if (l in t) {
      let d = t[l];
      Re(d) || (d = t[l] = [d]), d.push(u);
    } else
      t[l] = u;
  }
  return t;
}
function xu(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = FS(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Re(o) ? o.map((a) => a && Tl(a)) : [o && Tl(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function IS(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = Re(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const RS = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), $u = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), ii = Symbol({}.NODE_ENV !== "production" ? "router" : ""), km = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), Bl = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function Ao() {
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
function fn(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((r, l) => {
    const u = (c) => {
      c === !1 ? l(ho(4, {
        from: n,
        to: t
      })) : c instanceof Error ? l(c) : aS(c) ? l(ho(2, {
        from: t,
        to: c
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof c == "function" && a.push(c), r());
    }, d = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? zS(u, t, n) : u);
    let i = Promise.resolve(d);
    if (e.length < 3 && (i = i.then(u)), {}.NODE_ENV !== "production" && e.length > 2) {
      const c = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof d == "object" && "then" in d)
        i = i.then((g) => u._called ? g : (j(c), Promise.reject(new Error("Invalid navigation guard"))));
      else if (d !== void 0 && !u._called) {
        j(c), l(new Error("Invalid navigation guard"));
        return;
      }
    }
    i.catch((c) => l(c));
  });
}
function zS(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && j(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function Bi(e, t, n, o) {
  const s = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && j(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const r in a.components) {
      let l = a.components[r];
      if ({}.NODE_ENV !== "production") {
        if (!l || typeof l != "object" && typeof l != "function")
          throw j(`Component "${r}" in record with path "${a.path}" is not a valid component. Received "${String(l)}".`), new Error("Invalid route component");
        if ("then" in l) {
          j(`Component "${r}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const u = l;
          l = () => u;
        } else
          l.__asyncLoader && // warn only once per component
          !l.__warnedDefineAsync && (l.__warnedDefineAsync = !0, j(`Component "${r}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[r]))
        if (OS(l)) {
          const d = (l.__vccOpts || l)[t];
          d && s.push(fn(d, n, o, a, r));
        } else {
          let u = l();
          ({}).NODE_ENV !== "production" && !("catch" in u) && (j(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), u = Promise.resolve(u)), s.push(() => u.then((d) => {
            if (!d)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = zv(d) ? d.default : d;
            a.components[r] = i;
            const g = (i.__vccOpts || i)[t];
            return g && fn(g, n, o, a, r)();
          }));
        }
    }
  }
  return s;
}
function OS(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Vu(e) {
  const t = mo(ii), n = mo(km), o = St(() => t.resolve(ys(e.to))), s = St(() => {
    const { matched: u } = o.value, { length: d } = u, i = u[d - 1], c = n.matched;
    if (!i || !c.length)
      return -1;
    const g = c.findIndex(vn.bind(null, i));
    if (g > -1)
      return g;
    const p = Eu(u[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Eu(i) === p && // avoid comparing the child with its parent
      c[c.length - 1].path !== p ? c.findIndex(vn.bind(null, u[d - 2])) : g
    );
  }), a = St(() => s.value > -1 && GS(n.params, o.value.params)), r = St(() => s.value > -1 && s.value === n.matched.length - 1 && mm(n.params, o.value.params));
  function l(u = {}) {
    return qS(u) ? t[ys(e.replace) ? "replace" : "push"](
      ys(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Cs) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && Gt) {
    const u = um();
    if (u) {
      const d = {
        route: o.value,
        isActive: a.value,
        isExactActive: r.value
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(d), Fv(() => {
        d.route = o.value, d.isActive = a.value, d.isExactActive = r.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: St(() => o.value.href),
    isActive: a,
    isExactActive: r,
    navigate: l
  };
}
const HS = /* @__PURE__ */ dm({
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
  useLink: Vu,
  setup(e, { slots: t }) {
    const n = Mv(Vu(e)), { options: o } = mo(ii), s = St(() => ({
      [Au(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Au(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : gm("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), jS = HS;
function qS(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function GS(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!Re(s) || s.length !== o.length || o.some((a, r) => a !== s[r]))
      return !1;
  }
  return !0;
}
function Eu(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Au = (e, t, n) => e != null ? e : t != null ? t : n, XS = /* @__PURE__ */ dm({
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
    ({}).NODE_ENV !== "production" && KS();
    const o = mo(Bl), s = St(() => e.route || o.value), a = mo($u, 0), r = St(() => {
      let d = ys(a);
      const { matched: i } = s.value;
      let c;
      for (; (c = i[d]) && !c.components; )
        d++;
      return d;
    }), l = St(() => s.value.matched[r.value]);
    Di($u, St(() => r.value + 1)), Di(RS, l), Di(Bl, s);
    const u = Nv();
    return pm(() => [u.value, l.value, e.name], ([d, i, c], [g, p, m]) => {
      i && (i.instances[c] = d, p && p !== i && d && d === g && (i.leaveGuards.size || (i.leaveGuards = p.leaveGuards), i.updateGuards.size || (i.updateGuards = p.updateGuards))), d && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !vn(i, p) || !g) && (i.enterCallbacks[c] || []).forEach((h) => h(d));
    }, { flush: "post" }), () => {
      const d = s.value, i = e.name, c = l.value, g = c && c.components[i];
      if (!g)
        return Du(n.default, { Component: g, route: d });
      const p = c.props[i], m = p ? p === !0 ? d.params : typeof p == "function" ? p(d) : p : null, w = gm(g, W({}, m, t, {
        onVnodeUnmounted: (f) => {
          f.component.isUnmounted && (c.instances[i] = null);
        },
        ref: u
      }));
      if ({}.NODE_ENV !== "production" && Gt && w.ref) {
        const f = {
          depth: r.value,
          name: c.name,
          path: c.path,
          meta: c.meta
        };
        (Re(w.ref) ? w.ref.map((S) => S.i) : [w.ref.i]).forEach((S) => {
          S.__vrv_devtools = f;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Du(n.default, { Component: w, route: d }) || w
      );
    };
  }
});
function Du(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const WS = XS;
function KS() {
  const e = um(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
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
function Do(e, t) {
  const n = W({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => sy(o, ["instances", "children", "aliasOf"]))
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
function aa(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let YS = 0;
function JS(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = YS++;
  Pv({
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
        value: Do(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: i, componentInstance: c }) => {
      if (c.__vrv_devtools) {
        const g = c.__vrv_devtools;
        i.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: bm
        });
      }
      Re(c.__vrl_devtools) && (c.__devtoolsApi = s, c.__vrl_devtools.forEach((g) => {
        let p = Vm, m = "";
        g.isExactActive ? (p = $m, m = "This is exactly active") : g.isActive && (p = xm, m = "This link is active"), i.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: m,
          backgroundColor: p
        });
      }));
    }), pm(t.currentRoute, () => {
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
        guard: aa("beforeEach"),
        from: Do(c, "Current Location during this navigation"),
        to: Do(i, "Target location")
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
        guard: aa("afterEach")
      };
      g ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, p.status = aa("❌")) : p.status = aa("✅"), p.from = Do(c, "Current Location during this navigation"), p.to = Do(i, "Target location"), s.addTimelineEvent({
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
      c.forEach(Dm), i.filter && (c = c.filter((g) => (
        // save matches state based on the payload
        Pl(g, i.filter.toLowerCase())
      ))), c.forEach((g) => Am(g, t.currentRoute.value)), i.rootNodes = c.map(Em);
    }
    let d;
    s.on.getInspectorTree((i) => {
      d = i, i.app === e && i.inspectorId === l && u();
    }), s.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === l) {
        const g = n.getRoutes().find((p) => p.record.__vd_id === i.nodeId);
        g && (i.state = {
          options: ZS(g)
        });
      }
    }), s.sendInspectorTree(l), s.sendInspectorState(l);
  });
}
function QS(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function ZS(e) {
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
        display: e.keys.map((o) => `${o.name}${QS(o)}`).join(" "),
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
const bm = 15485081, xm = 2450411, $m = 8702998, ey = 2282478, Vm = 16486972, ty = 6710886;
function Em(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: ey
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Vm
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: bm
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: $m
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: xm
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: ty
  });
  let o = n.__vd_id;
  return o == null && (o = String(ny++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(Em)
  };
}
let ny = 0;
const oy = /^\/(.*)\/([a-z]*)$/;
function Am(e, t) {
  const n = t.matched.length && vn(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => vn(o, e.record))), e.children.forEach((o) => Am(o, t));
}
function Dm(e) {
  e.__vd_match = !1, e.children.forEach(Dm);
}
function Pl(e, t) {
  const n = String(e.re).match(oy);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => Pl(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = $s(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => Pl(r, t));
}
function sy(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function ay(e) {
  const t = _S(e.routes, e), n = e.parseQuery || US, o = e.stringifyQuery || xu, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = Ao(), r = Ao(), l = Ao(), u = Uv(Zt);
  let d = Zt;
  Gt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = Li.bind(null, (v) => "" + v), c = Li.bind(null, NS), g = (
    // @ts-expect-error: intentionally avoid the type check
    Li.bind(null, $s)
  );
  function p(v, A) {
    let D, L;
    return wm(v) ? (D = t.getRecordMatcher(v), L = A) : L = v, t.addRoute(L, D);
  }
  function m(v) {
    const A = t.getRecordMatcher(v);
    A ? t.removeRoute(A) : {}.NODE_ENV !== "production" && j(`Cannot remove non-existent route "${String(v)}"`);
  }
  function h() {
    return t.getRoutes().map((v) => v.record);
  }
  function w(v) {
    return !!t.getRecordMatcher(v);
  }
  function f(v, A) {
    if (A = W({}, A || u.value), typeof v == "string") {
      const R = Ti(n, v, A.path), Q = t.resolve({ path: R.path }, A), tt = s.createHref(R.fullPath);
      return {}.NODE_ENV !== "production" && (tt.startsWith("//") ? j(`Location "${v}" resolved to "${tt}". A resolved location cannot start with multiple slashes.`) : Q.matched.length || j(`No match found for location with path "${v}"`)), W(R, Q, {
        params: g(Q.params),
        hash: $s(R.hash),
        redirectedFrom: void 0,
        href: tt
      });
    }
    let D;
    if ("path" in v)
      ({}).NODE_ENV !== "production" && "params" in v && !("name" in v) && // @ts-expect-error: the type is never
      Object.keys(v.params).length && j(`Path "${v.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), D = W({}, v, {
        path: Ti(n, v.path, A.path).path
      });
    else {
      const R = W({}, v.params);
      for (const Q in R)
        R[Q] == null && delete R[Q];
      D = W({}, v, {
        params: c(R)
      }), A.params = c(A.params);
    }
    const L = t.resolve(D, A), X = v.hash || "";
    ({}).NODE_ENV !== "production" && X && !X.startsWith("#") && j(`A \`hash\` should always start with the character "#". Replace "${X}" with "#${X}".`), L.params = i(g(L.params));
    const te = jv(o, W({}, v, {
      hash: PS(X),
      path: L.path
    })), O = s.createHref(te);
    return {}.NODE_ENV !== "production" && (O.startsWith("//") ? j(`Location "${v}" resolved to "${O}". A resolved location cannot start with multiple slashes.`) : L.matched.length || j(`No match found for location with path "${"path" in v ? v.path : v}"`)), W({
      fullPath: te,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: X,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === xu ? IS(v.query) : v.query || {}
      )
    }, L, {
      redirectedFrom: void 0,
      href: O
    });
  }
  function _(v) {
    return typeof v == "string" ? Ti(n, v, u.value.path) : W({}, v);
  }
  function S(v, A) {
    if (d !== v)
      return ho(8, {
        from: A,
        to: v
      });
  }
  function y(v) {
    return M(v);
  }
  function b(v) {
    return y(W(_(v), { replace: !0 }));
  }
  function E(v) {
    const A = v.matched[v.matched.length - 1];
    if (A && A.redirect) {
      const { redirect: D } = A;
      let L = typeof D == "function" ? D(v) : D;
      if (typeof L == "string" && (L = L.includes("?") || L.includes("#") ? L = _(L) : (
        // force empty params
        { path: L }
      ), L.params = {}), {}.NODE_ENV !== "production" && !("path" in L) && !("name" in L))
        throw j(`Invalid redirect found:
${JSON.stringify(L, null, 2)}
 when navigating to "${v.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return W({
        query: v.query,
        hash: v.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in L ? {} : v.params
      }, L);
    }
  }
  function M(v, A) {
    const D = d = f(v), L = u.value, X = v.state, te = v.force, O = v.replace === !0, R = E(D);
    if (R)
      return M(
        W(_(R), {
          state: typeof R == "object" ? W({}, X, R.state) : X,
          force: te,
          replace: O
        }),
        // keep original redirectedFrom if it exists
        A || D
      );
    const Q = D;
    Q.redirectedFrom = A;
    let tt;
    return !te && hu(o, L, D) && (tt = ho(16, { to: Q, from: L }), bt(
      L,
      L,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (tt ? Promise.resolve(tt) : H(Q, L)).catch((we) => At(we) ? (
      // navigation redirects still mark the router as ready
      At(
        we,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? we : kn(we)
    ) : (
      // reject any unknown error
      pt(we, Q, L)
    )).then((we) => {
      if (we) {
        if (At(
          we,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          hu(o, f(we.to), Q) && // and we have done it a couple of times
          A && // @ts-expect-error: added only in dev
          (A._count = A._count ? (
            // @ts-expect-error
            A._count + 1
          ) : 1) > 30 ? (j(`Detected a possibly infinite redirection in a navigation guard when going from "${L.fullPath}" to "${Q.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : M(
            // keep options
            W({
              // preserve an existing replacement but allow the redirect to override it
              replace: O
            }, _(we.to), {
              state: typeof we.to == "object" ? W({}, X, we.to.state) : X,
              force: te
            }),
            // preserve the original redirectedFrom if any
            A || Q
          );
      } else
        we = N(Q, L, !0, O, X);
      return P(Q, L, we), we;
    });
  }
  function V(v, A) {
    const D = S(v, A);
    return D ? Promise.reject(D) : Promise.resolve();
  }
  function T(v) {
    const A = xt.values().next().value;
    return A && typeof A.runWithContext == "function" ? A.runWithContext(v) : v();
  }
  function H(v, A) {
    let D;
    const [L, X, te] = iy(v, A);
    D = Bi(L.reverse(), "beforeRouteLeave", v, A);
    for (const R of L)
      R.leaveGuards.forEach((Q) => {
        D.push(fn(Q, v, A));
      });
    const O = V.bind(null, v, A);
    return D.push(O), qe(D).then(() => {
      D = [];
      for (const R of a.list())
        D.push(fn(R, v, A));
      return D.push(O), qe(D);
    }).then(() => {
      D = Bi(X, "beforeRouteUpdate", v, A);
      for (const R of X)
        R.updateGuards.forEach((Q) => {
          D.push(fn(Q, v, A));
        });
      return D.push(O), qe(D);
    }).then(() => {
      D = [];
      for (const R of te)
        if (R.beforeEnter)
          if (Re(R.beforeEnter))
            for (const Q of R.beforeEnter)
              D.push(fn(Q, v, A));
          else
            D.push(fn(R.beforeEnter, v, A));
      return D.push(O), qe(D);
    }).then(() => (v.matched.forEach((R) => R.enterCallbacks = {}), D = Bi(te, "beforeRouteEnter", v, A), D.push(O), qe(D))).then(() => {
      D = [];
      for (const R of r.list())
        D.push(fn(R, v, A));
      return D.push(O), qe(D);
    }).catch((R) => At(
      R,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? R : Promise.reject(R));
  }
  function P(v, A, D) {
    l.list().forEach((L) => T(() => L(v, A, D)));
  }
  function N(v, A, D, L, X) {
    const te = S(v, A);
    if (te)
      return te;
    const O = A === Zt, R = Gt ? history.state : {};
    D && (L || O ? s.replace(v.fullPath, W({
      scroll: O && R && R.scroll
    }, X)) : s.push(v.fullPath, X)), u.value = v, bt(v, A, D, O), kn();
  }
  let ae;
  function J() {
    ae || (ae = s.listen((v, A, D) => {
      if (!$t.listening)
        return;
      const L = f(v), X = E(L);
      if (X) {
        M(W(X, { replace: !0 }), L).catch(Cs);
        return;
      }
      d = L;
      const te = u.value;
      Gt && Qv(fu(te.fullPath, D.delta), ai()), H(L, te).catch((O) => At(
        O,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? O : At(
        O,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (M(
        O.to,
        L
        // avoid an uncaught rejection, let push call triggerError
      ).then((R) => {
        At(
          R,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !D.delta && D.type === xs.pop && s.go(-1, !1);
      }).catch(Cs), Promise.reject()) : (D.delta && s.go(-D.delta, !1), pt(O, L, te))).then((O) => {
        O = O || N(
          // after navigation, all matched components are resolved
          L,
          te,
          !1
        ), O && (D.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !At(
          O,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-D.delta, !1) : D.type === xs.pop && At(
          O,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), P(L, te, O);
      }).catch(Cs);
    }));
  }
  let yn = Ao(), Cn = Ao(), kt;
  function pt(v, A, D) {
    kn(v);
    const L = Cn.list();
    return L.length ? L.forEach((X) => X(v, A, D)) : ({}.NODE_ENV !== "production" && j("uncaught error during route navigation:"), console.error(v)), Promise.reject(v);
  }
  function bo() {
    return kt && u.value !== Zt ? Promise.resolve() : new Promise((v, A) => {
      yn.add([v, A]);
    });
  }
  function kn(v) {
    return kt || (kt = !v, J(), yn.list().forEach(([A, D]) => v ? D(v) : A()), yn.reset()), v;
  }
  function bt(v, A, D, L) {
    const { scrollBehavior: X } = e;
    if (!Gt || !X)
      return Promise.resolve();
    const te = !D && Zv(fu(v.fullPath, 0)) || (L || !D) && history.state && history.state.scroll || null;
    return Rv().then(() => X(v, A, te)).then((O) => O && Jv(O)).catch((O) => pt(O, v, A));
  }
  const je = (v) => s.go(v);
  let Yt;
  const xt = /* @__PURE__ */ new Set(), $t = {
    currentRoute: u,
    listening: !0,
    addRoute: p,
    removeRoute: m,
    hasRoute: w,
    getRoutes: h,
    resolve: f,
    options: e,
    push: y,
    replace: b,
    go: je,
    back: () => je(-1),
    forward: () => je(1),
    beforeEach: a.add,
    beforeResolve: r.add,
    afterEach: l.add,
    onError: Cn.add,
    isReady: bo,
    install(v) {
      const A = this;
      v.component("RouterLink", jS), v.component("RouterView", WS), v.config.globalProperties.$router = A, Object.defineProperty(v.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => ys(u)
      }), Gt && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !Yt && u.value === Zt && (Yt = !0, y(s.location).catch((X) => {
        ({}).NODE_ENV !== "production" && j("Unexpected error when starting the router:", X);
      }));
      const D = {};
      for (const X in Zt)
        Object.defineProperty(D, X, {
          get: () => u.value[X],
          enumerable: !0
        });
      v.provide(ii, A), v.provide(km, Iv(D)), v.provide(Bl, u);
      const L = v.unmount;
      xt.add(v), v.unmount = function() {
        xt.delete(v), xt.size < 1 && (d = Zt, ae && ae(), ae = null, u.value = Zt, Yt = !1, kt = !1), L();
      }, {}.NODE_ENV !== "production" && Gt && JS(v, A, t);
    }
  };
  function qe(v) {
    return v.reduce((A, D) => A.then(() => T(D)), Promise.resolve());
  }
  return $t;
}
function iy(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let r = 0; r < a; r++) {
    const l = t.matched[r];
    l && (e.matched.find((d) => vn(d, l)) ? o.push(l) : n.push(l));
    const u = e.matched[r];
    u && (t.matched.find((d) => vn(d, u)) || s.push(u));
  }
  return [n, o, s];
}
function fe() {
  return mo(ii);
}
const ry = {
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
}, ly = {
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
}, cy = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], uy = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, dy = {
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
}, gy = {
  languages: ry,
  scriptgroups: ly,
  rtlscripts: cy,
  regiongroups: uy,
  territories: dy
};
var xe = gy;
function Fs(e) {
  return !!xe.languages[e];
}
function Sn(e) {
  return Fs(e) && xe.languages[e].length === 1 ? xe.languages[e][0] : !1;
}
function py() {
  return xe.languages;
}
function Ms(e) {
  var t = Sn(e);
  return t ? Ms(t) : Fs(e) ? xe.languages[e][0] : "Zyyy";
}
function Kl(e) {
  var t = Sn(e);
  return t ? Kl(t) : Fs(e) && xe.languages[e][1] || "UNKNOWN";
}
function Vs(e) {
  var t = Sn(e);
  return t ? Vs(t) : Fs(e) && xe.languages[e][2] || e;
}
function my() {
  var e, t = {};
  for (e in xe.languages)
    Sn(e) || (t[e] = Vs(e));
  return t;
}
function Lm(e) {
  var t, n, o = [];
  for (t in xe.languages)
    if (!Sn(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === Ms(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function hy(e) {
  return Lm([e]);
}
function Tm(e) {
  var t;
  for (t in xe.scriptgroups)
    if (xe.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function Yl(e) {
  return Tm(Ms(e));
}
function Bm(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = Sn(n) || n, a = Yl(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Pm(e) {
  var t, n, o, s = {};
  for (t in xe.languages)
    if (!Sn(t)) {
      for (n = 0; n < e.length; n++)
        if (Kl(t).includes(e[n])) {
          o = Yl(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function wy(e) {
  return Pm([e]);
}
function fy(e) {
  var t, n, o, s = [];
  for (t = Bm(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function _y(e, t) {
  var n = Vs(e) || e, o = Vs(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function Fm(e) {
  return xe.rtlscripts.includes(Ms(e));
}
function vy(e) {
  return Fm(e) ? "rtl" : "ltr";
}
function Sy(e) {
  return xe.territories[e] || [];
}
function yy(e, t) {
  t.target ? xe.languages[e] = [t.target] : xe.languages[e] = [t.script, t.regions, t.autonym];
}
var I = {
  addLanguage: yy,
  getAutonym: Vs,
  getAutonyms: my,
  getDir: vy,
  getGroupOfScript: Tm,
  getLanguages: py,
  getLanguagesByScriptGroup: Bm,
  getLanguagesByScriptGroupInRegion: wy,
  getLanguagesByScriptGroupInRegions: Pm,
  getLanguagesInScript: hy,
  getLanguagesInScripts: Lm,
  getLanguagesInTerritory: Sy,
  getRegions: Kl,
  getScript: Ms,
  getScriptGroupOfLanguage: Yl,
  isKnown: Fs,
  isRedirect: Sn,
  isRtl: Fm,
  sortByScriptGroup: fy,
  sortByAutonym: _y
};
const Cy = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), r = parseInt(e.slice(12, 14)), l = new Date(Date.UTC(t, n, o, s, a, r)), d = (/* @__PURE__ */ new Date()).getTime() - l.getTime();
  return Math.round(d / (1e3 * 3600 * 24));
}, ky = (e) => {
  const t = Cy(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const nt = window.Vue.unref, jn = window.Vue.createVNode, Dt = window.Vue.createElementVNode, Lu = window.Vue.renderSlot, Tu = window.Vue.withModifiers, Pi = window.Vue.toDisplayString, Fi = window.Vue.withCtx, by = window.Vue.openBlock, xy = window.Vue.createElementBlock, $y = window.Vue.createCommentVNode, Vy = { class: "col shrink pe-4" }, Ey = { class: "col" }, Ay = { class: "cx-translation__details column justify-between ma-0" }, Dy = { class: "row ma-0" }, Ly = { class: "col grow" }, Ty = { class: "col shrink ps-2" }, By = ["dir", "textContent"], Py = ["dir", "textContent"], Fy = ["textContent"], My = window.Vuex.useStore, Ny = window.Vue.computed, Mm = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: ni,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e, { emit: t }) {
    const n = e, o = My(), s = (l, u) => {
      const d = o.getters["mediawiki/getPage"](l, u);
      return d == null ? void 0 : d.thumbnail;
    }, a = ge(), r = Ny(() => {
      const l = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, u = ky(n.translation.startTimestamp);
      return a.i18n(
        l[u.postfix],
        u.value
      );
    });
    return (l, u) => e.translation ? (by(), xy("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: u[1] || (u[1] = Tu((d) => l.$emit("click"), ["stop"]))
    }, [
      Dt("div", Vy, [
        jn(nt(Hl), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      Dt("div", Ey, [
        Dt("div", Ay, [
          Dt("div", Dy, [
            Dt("div", Ly, [
              Lu(l.$slots, "title")
            ]),
            Dt("div", Ty, [
              jn(nt(be), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: u[0] || (u[0] = Tu((d) => l.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          Lu(l.$slots, "mid-content"),
          jn(nt(B), { class: "cx-translation__footer ma-0" }, {
            default: Fi(() => [
              jn(nt(k), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: Fi(() => [
                  Dt("span", {
                    class: "mw-ui-autonym",
                    dir: nt(I.getDir)(e.translation.sourceLanguage),
                    textContent: Pi(nt(I.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, By),
                  jn(nt(be), {
                    icon: nt(Up),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  Dt("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: nt(I.getDir)(e.translation.targetLanguage),
                    textContent: Pi(nt(I.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, Py)
                ]),
                _: 1
              }),
              jn(nt(k), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: Fi(() => [
                  Dt("span", {
                    textContent: Pi(r.value)
                  }, null, 8, Fy)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : $y("", !0);
  }
};
const Lo = window.Vue.unref, Bu = window.Vue.toDisplayString, Uy = window.Vue.normalizeClass, Iy = window.Vue.createElementVNode, Mi = window.Vue.openBlock, Ry = window.Vue.createElementBlock, Pu = window.Vue.createCommentVNode, Fu = window.Vue.createVNode, ia = window.Vue.withCtx, Mu = window.Vue.createBlock, zy = ["lang", "textContent"], Oy = ["lang", "textContent"], Hy = window.Vue.computed, jy = window.Vue.inject, qy = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: jl,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = jy("colors").gray200, s = Hy(
      () => {
        var u;
        return ((u = t.translation.progress) == null ? void 0 : u.any) * 100 || 0;
      }
    ), a = fe(), { setTranslationURLParams: r } = F(), l = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (u, d) => (Mi(), Mu(Mm, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": Lo(Np),
      onActionIconClicked: d[0] || (d[0] = (i) => u.$emit("delete-translation")),
      onClick: l
    }, {
      title: ia(() => [
        Iy("h5", {
          class: Uy(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: Bu(e.translation.sourceTitle)
        }, null, 10, zy),
        e.translation.isLeadSectionTranslation ? Pu("", !0) : (Mi(), Ry("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: Bu(e.translation.sourceSectionTitle)
        }, null, 8, Oy))
      ]),
      "mid-content": ia(() => [
        e.translation.progress ? (Mi(), Mu(Lo(B), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: ia(() => [
            Fu(Lo(k), null, {
              default: ia(() => [
                Fu(Lo(Rp), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: Lo(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Pu("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, Gy = window.Vue.computed, Xy = window.Vue.inject, Ns = () => {
  const e = Xy("breakpoints");
  return { isDesktop: Gy(
    () => !G.isMobileDomain() && e.value.tabletAndUp
  ) };
}, qn = window.Vue.computed;
function q(e) {
  const t = qn(() => e.state.application.sourceLanguage), n = qn(() => e.state.application.targetLanguage), o = qn(
    () => e.state.application.currentMTProvider
  ), s = qn(
    () => I.getAutonym(t.value)
  ), a = qn(
    () => I.getAutonym(n.value)
  ), r = qn(() => e.state.application.previousRoute);
  return {
    currentMTProvider: o,
    previousRoute: r,
    sourceLanguage: t,
    sourceLanguageAutonym: s,
    targetLanguage: n,
    targetLanguageAutonym: a
  };
}
const Nu = window.Vue.computed, Wy = window.Vuex.useStore;
function Us() {
  const e = Wy(), t = Nu(
    () => e.state.mediawiki.supportedLanguageCodes || []
  );
  return {
    enabledTargetLanguages: Nu(
      () => e.state.mediawiki.enabledTargetLanguages
    ),
    supportedLanguageCodes: t
  };
}
const Ky = (e, t) => {
  const { sourceLanguageURLParameter: n, targetLanguageURLParameter: o } = F(), s = G.getCurrentWikiLanguageCode(), a = (c) => !e || Array.isArray(e) && e.includes(c), r = (c) => t.includes(c), l = {
    sourceLanguage: "en",
    targetLanguage: "es"
  };
  let u;
  return o.value && a(o.value) && r(o.value) ? u = o.value : a(s) && r(s) ? u = s : u = (e == null ? void 0 : e[0]) || l.targetLanguage, { sourceLanguage: [
    n.value,
    l.sourceLanguage,
    s,
    l.targetLanguage
  ].filter((c) => r(c)).find((c) => c !== u), targetLanguage: u };
}, Yy = window.Vuex.useStore, Jl = () => {
  const e = Yy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = F(), { maxSuggestionsPerSlice: s } = e.state.suggestions, a = () => e.getters["suggestions/getSectionSuggestionsForPair"](t.value, n.value).filter(
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
}, Jy = window.Vuex.useStore, ri = () => {
  const e = Jy(), { sourceLanguage: t, targetLanguage: n } = q(e), o = (l) => {
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
class Qy {
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
const Zy = window.Vuex.useStore, Ql = window.Vue.ref, eC = Ql([]), tC = Ql([]);
let Ni = !1, Uu = !1, Iu = !1, Ui = Ql(!1), To = null;
const ra = {
  page: eC,
  section: tC
}, Nm = () => {
  const e = Zy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = F(), o = () => C(void 0, null, function* () {
    let d = e.getters["translator/getTranslationsByStatus"]("published");
    if (d = d.filter(
      (i) => i.sourceLanguage === t.value
    ), d.length && !Ni)
      return Ni = !0, d.map(
        (i) => i.sourceTitle
      );
    if (Ni = !0, !Uu) {
      const i = yield ce.fetchUserEdits(t.value).then((c) => (Uu = !0, c));
      if (i.length)
        return i;
    }
    if (!Iu) {
      const i = yield ce.fetchUserEdits(t.value).then((c) => (Iu = !0, c));
      if (i.length)
        return So.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          i
        );
    }
    return null;
  }), s = (d) => {
    let i = ra[d].value.find(
      (c) => c.matchesLanguagePair(t.value, n.value)
    );
    return i || (i = new Qy({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), ra[d].value.push(i)), i;
  }, a = () => C(void 0, null, function* () {
    const d = yield ce.fetchSuggestionSeeds(
      t.value,
      n.value
    );
    for (const i in ra) {
      const c = s(i);
      c.seeds = [...c.seeds, ...d || []];
    }
  }), r = () => C(void 0, null, function* () {
    let d = !1, i = [];
    do {
      i = yield o(), i || (d = !0);
      for (const c in ra) {
        const g = s(c);
        g.seeds = [
          ...g.seeds,
          ...i || []
        ];
      }
    } while (!d && !(i != null && i.length));
  }), l = () => To || (To = r(), To.finally(() => {
    To = null;
  }));
  return { getSuggestionSeed: (d) => C(void 0, null, function* () {
    let i = s(d);
    i.seeds.length || (yield l());
    let c = i.shiftSeeds();
    return !c && !Ui.value && (yield a(), c = i.shiftSeeds(), Ui.value = !0), c;
  }), defaultSeedsFetched: Ui };
}, nC = 5;
function Es(e) {
  return C(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < nC);
  });
}
const oC = window.Vuex.useStore, sC = () => {
  const e = oC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = F(), { getSuggestionSeed: o } = Nm(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = ri(), l = {
    id: gt,
    type: Ne
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (i) => C(void 0, null, function* () {
      const c = [];
      return yield Es(() => C(void 0, null, function* () {
        const g = yield o("page");
        if (!g)
          return !0;
        let p = yield ce.fetchPageSuggestions(
          t.value,
          n.value,
          g
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
      return yield Es(() => C(void 0, null, function* () {
        const g = yield o("section");
        if (!g)
          return !0;
        const p = yield ce.fetchSectionSuggestions(
          t.value,
          n.value,
          g
        );
        if (!p)
          return !1;
        let m = p.filter(
          (w) => s(w)
        );
        const h = p.filter(
          (w) => !s(w)
        );
        return m = m.slice(0, i), c.push(...m), h.forEach((w) => {
          w && !r(w) && (w.isListable = !1, e.commit("suggestions/addSectionSuggestion", w));
        }), c.length >= i;
      })), c.forEach(
        (g) => g.suggestionProvider = l
      ), c;
    })
  };
}, aC = window.Vuex.useStore, iC = () => {
  const e = aC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = F(), o = {
    id: Ct,
    type: Ne
  }, {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = ri();
  return { fetchSectionSuggestionsPopular: (d) => C(void 0, null, function* () {
    const i = [];
    return yield Es(() => C(void 0, null, function* () {
      const c = yield ce.fetchMostPopularSectionSuggestions(
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
    return yield Es(() => C(void 0, null, function* () {
      let c = yield ce.fetchMostPopularPageSuggestions(
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
}, Um = window.Vue.ref, Ru = Um([]), zu = Um(!1), Im = () => ({ pageCollections: Ru, fetchPageCollections: () => C(void 0, null, function* () {
  try {
    Ru.value = yield ce.fetchPageCollections(), zu.value = !0;
  } catch (t) {
    mw.log.error("Failed to fetch page collections", t);
  }
}), pageCollectionsFetched: zu });
class Fl {
  /**
   * @param {string} id
   * @param {string} label
   * @param {{ id: string, label: string, type: string }[]} filters
   */
  constructor({ id: t, label: n, filters: o }) {
    this.id = t, this.label = n, this.filters = o;
  }
}
const Ii = window.Vue.computed, Ou = mw.loader.require("ext.cx.articletopics"), rC = (e) => new Fl({
  id: e.groupId,
  label: e.label,
  filters: e.topics.map((t) => ({
    id: t.topicId,
    label: t.label,
    type: Ie
  }))
}), Zl = () => {
  const e = ge(), { currentSuggestionFilters: t, setFilterURLParams: n } = F(), o = {
    id: gt,
    type: Ne,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }, s = {
    id: Ct,
    type: Ne,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }, a = {
    id: se,
    type: Ne,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }, r = new Fl({
    id: Ne,
    label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
    filters: [o, s, a]
  }), { pageCollections: l, pageCollectionsFetched: u } = Im(), d = (_) => ({
    id: _.name,
    label: _.name,
    type: se
  }), i = Ii(
    () => new Fl({
      id: "collections",
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: l.value.map(
        (_) => d(_)
      )
    })
  ), c = Ii(() => [
    r,
    i.value,
    ...Ou.map(rC)
  ]), g = Ii(
    () => t.value.type === se && !u.value
  ), p = () => {
    if (g.value)
      return [];
    const _ = h();
    return _.type === Ie || _.type === se || _.id === se ? [_, o] : [o, s];
  }, m = (_) => {
    n(_.type, _.id);
  }, h = () => c.value.flatMap((_) => _.filters).find(w), w = (_) => t.value.type === _.type && t.value.id === _.id;
  return {
    allFilters: c,
    getFiltersSummary: p,
    selectFilter: m,
    isFilterSelected: w,
    getOresTopics: (_) => {
      const y = Ou.flatMap((b) => b.topics).find((b) => b.topicId === _);
      return y ? y.orestopics : [];
    },
    waitingForPageCollectionsFetch: g
  };
}, lC = window.Vuex.useStore, cC = () => {
  const e = lC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = F(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = ri(), { getOresTopics: l } = Zl();
  return {
    fetchPageSuggestionsByTopics: (i) => C(void 0, null, function* () {
      const c = o.value.id, g = {
        id: c,
        type: Ie
      }, p = l(c);
      let m = yield ce.fetchPageSuggestionsByTopics(
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
        type: Ie
      }, p = l(c), m = [];
      return yield Es(() => C(void 0, null, function* () {
        const h = yield ce.fetchSectionSuggestionsByTopics(
          t.value,
          n.value,
          p
        );
        let w = h.filter(
          (_) => s(_)
        );
        const f = h.filter(
          (_) => !s(_)
        );
        return w = w.slice(0, i), m.push(...w), f.forEach((_) => {
          _ && !r(_) && (_.isListable = !1, e.commit("suggestions/addSectionSuggestion", _));
        }), m.length >= i;
      })), m.forEach(
        (h) => h.suggestionProvider = g
      ), m;
    })
  };
}, uC = window.Vuex.useStore, dC = () => {
  const e = uC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = F(), {
    isSectionSuggestionValid: o,
    isPageSuggestionValid: s,
    sectionSuggestionExists: a
  } = ri();
  return {
    fetchSectionSuggestionsByCollections: (u) => C(void 0, null, function* () {
      const d = [], i = yield ce.fetchSectionSuggestionsByCollections(
        t.value,
        n.value
      );
      let c = i.filter(
        (p) => o(p)
      );
      const g = i.filter(
        (p) => !o(p)
      );
      return c = c.slice(0, u), d.push(...c), g.forEach((p) => {
        p && !a(p) && (p.isListable = !1, e.commit("suggestions/addSectionSuggestion", p));
      }), d.forEach(
        (p) => p.suggestionProvider = {
          id: p.collection.name,
          type: se
        }
      ), d;
    }),
    fetchPageSuggestionsByCollections: (u) => C(void 0, null, function* () {
      const d = [];
      let i = yield ce.fetchPageSuggestionsByCollections(
        t.value,
        n.value
      );
      return i = i.filter(
        (c) => s(c)
      ), i = i.slice(0, u), d.push(...i), d.forEach(
        (c) => c.suggestionProvider = {
          id: c.collection.name,
          type: se
        }
      ), d;
    })
  };
};
window.Vue.computed;
const ec = () => {
  const { currentSuggestionFilters: e } = F(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = sC(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = iC(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = cC(), {
    fetchPageSuggestionsByCollections: l,
    fetchSectionSuggestionsByCollections: u
  } = dC(), d = {
    [gt]: t,
    [Ct]: o,
    [se]: l,
    [Ie]: a
  }, i = {
    [gt]: n,
    [Ct]: s,
    [se]: u,
    [Ie]: r
  }, c = (m) => m.type === Ne ? m.id : m.type;
  return {
    getFilterProvider: c,
    getCurrentPageSuggestionProvider: () => d[c(e.value)],
    getCurrentSectionSuggestionProvider: () => i[c(e.value)]
  };
}, gC = window.Vuex.useStore, tc = () => {
  const e = gC(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = Jl(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = F(), a = () => {
    const g = t(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, r = () => {
    const g = n(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, {
    getCurrentPageSuggestionProvider: l,
    getCurrentSectionSuggestionProvider: u
  } = ec(), d = (g) => {
    try {
      const p = g.map((m) => m.sourceTitle);
      if (p.length)
        return e.dispatch("mediawiki/fetchPageMetadata", {
          language: o.value,
          titles: p
        });
    } catch (p) {
      mw.log.error("Page suggestions fetching failed!");
    }
  };
  return {
    fetchNextSectionSuggestionsSlice: () => C(void 0, null, function* () {
      e.commit("suggestions/increaseSectionSuggestionsLoadingCount");
      const g = a(), m = yield u()(
        g
      );
      m.forEach(
        (h) => e.commit("suggestions/addSectionSuggestion", h)
      ), d(m), e.commit("suggestions/decreaseSectionSuggestionsLoadingCount");
    }),
    fetchNextPageSuggestionsSlice: () => C(void 0, null, function* () {
      e.commit("suggestions/increasePageSuggestionsLoadingCount");
      const g = r(), m = yield l()(
        g
      );
      m.forEach(
        (h) => e.commit("suggestions/addPageSuggestion", h)
      ), d(m), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, pC = window.Vuex.useStore, nc = () => {
  const e = pC(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = tc(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = Jl();
  return () => C(void 0, null, function* () {
    const { targetLanguage: a } = q(e), r = s(0), l = o(0), { maxSuggestionsPerSlice: u } = e.state.suggestions, d = r.length === u, i = l.length === u;
    d && i || (yield e.dispatch(
      "suggestions/fetchAppendixSectionTitles",
      a.value
    ), t(), n());
  });
}, mC = window.Vuex.useStore, oc = () => {
  const e = mC();
  return (t, n, o) => C(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    if (!s) {
      s = yield ce.fetchSectionSuggestion(
        t,
        o,
        n
      );
      try {
        if (yield e.dispatch("mediawiki/fetchPageMetadata", {
          language: t,
          titles: [o]
        }), s)
          s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s);
        else {
          const a = e.getters["mediawiki/getPage"](
            t,
            o
          );
          return new _o({
            sourceLanguage: t,
            targetLanguage: n,
            sourceTitle: o,
            langLinksCount: a.langLinksCount,
            wikidataId: a.wikidataId
          });
        }
      } catch (a) {
        throw new Error(
          `No page metadata found for title ${o} and language pair ${t}-${n}`
        );
      }
    }
    return s;
  });
}, Hu = window.Vue.computed, hC = window.Vuex.useStore, Wt = () => {
  const e = hC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = F(), s = Hu(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = Hu(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (l, u) => s.value.getTitleForLanguage(l) || s.value.getTitleForLanguage(u)
  };
}, Is = window.Vuex.useStore, Rs = (e, t, n, o, s = {}) => {
  const a = mw.config.get(
    "wgContentTranslationTranslateInTarget"
  ), r = G.getCurrentWikiLanguageCode();
  return a && t !== r ? (s = ie({ sx: !0 }, s), o && (s.section = o), location.href = G.getCXUrl(
    n,
    null,
    e,
    t,
    s
  ), !0) : !1;
}, { setLanguageURLParams: wC, pageURLParameter: fC, sectionURLParameter: _C } = F(), zs = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), wC(t, n);
}, Rm = () => {
  const e = Is(), { enabledTargetLanguages: t, supportedLanguageCodes: n } = Us();
  return () => C(void 0, null, function* () {
    yield e.dispatch("mediawiki/fetchSupportedLanguageCodes");
    const { sourceLanguage: o, targetLanguage: s } = Ky(
      t.value,
      n.value
    );
    Rs(
      o,
      s,
      fC.value,
      _C.value
    ) || zs(e, o, s);
  });
}, zm = () => {
  const e = Is(), t = nc();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = q(e);
    n === o && (n = a.value, o = s.value), Rs(
      n,
      o,
      null,
      null
    ) || (zs(e, n, o), t());
  };
}, vC = () => {
  const e = Is(), t = nc();
  return (
    /** @param {Translation} translation */
    (n) => {
      const { sourceLanguage: o, targetLanguage: s, sourceTitle: a, sourceSectionTitle: r } = n;
      Rs(
        o,
        s,
        a,
        r,
        { draft: !0 }
      ) || (zs(e, o, s), t());
    }
  );
}, SC = () => {
  const e = Is();
  return (t) => {
    const { sourceLanguage: n, targetLanguage: o, sourceTitle: s } = t;
    Rs(
      n,
      o,
      s,
      null
    ) || zs(e, n, o);
  };
}, yC = () => {
  const e = Is(), t = oc(), { currentLanguageTitleGroup: n, targetPageExists: o } = Wt();
  return (s, a) => C(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: r,
      targetLanguageURLParameter: l,
      setPageURLParam: u,
      clearSectionURLParameter: d
    } = F();
    s === a && (s = l.value, a = r.value);
    const i = n.value.getTitleForLanguage(s);
    Rs(
      s,
      a,
      i,
      null
    ) || (zs(e, s, a), u(i), o.value ? (d(), yield t(
      r.value,
      l.value,
      i
    )) : yield e.dispatch("mediawiki/fetchPageMetadata", {
      language: r.value,
      titles: [i]
    }), e.dispatch("application/getCXServerToken"));
  });
}, CC = window.Vuex.useStore, Om = [], kC = (e, t, n) => Om.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), bC = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  Om.push(o);
}, xC = () => {
  const e = CC();
  return (t, n, o) => C(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !kC(t, n, o) && (s = yield ce.fetchSectionSuggestion(
      t,
      o,
      n
    ), bC(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, $C = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', VC = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', EC = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', AC = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', DC = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', LC = '<path d="M10 1a9 9 0 109 9 9 9 0 00-9-9m5 10H5V9h10z"/>', TC = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', BC = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', PC = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', FC = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', MC = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', NC = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', UC = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', IC = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', RC = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', zC = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', OC = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', HC = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', jC = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', qC = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', GC = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', XC = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', WC = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', KC = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', YC = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', JC = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', QC = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', ZC = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', ek = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', Ml = $C, Hm = VC, tk = {
  ltr: EC,
  shouldFlip: !0
}, jm = {
  ltr: AC,
  shouldFlip: !0
}, sc = {
  ltr: DC,
  shouldFlip: !0
}, nk = LC, qm = TC, Gm = BC, ok = PC, sk = FC, ak = MC, yo = NC, ac = UC, ic = IC, ik = RC, Xm = zC, rk = {
  langCodeMap: {
    ar: OC
  },
  default: HC
}, lk = jC, rc = {
  ltr: qC,
  shouldFlip: !0
}, ck = GC, Os = {
  ltr: XC,
  shouldFlip: !0
}, lc = {
  ltr: WC,
  shouldFlip: !0
}, uk = {
  ltr: KC,
  shouldFlip: !0
}, Wm = YC, dk = JC, gk = QC, pk = ZC, Km = ek, Ym = "cx-translation-session-position-", Jm = () => Ym + mw.user.sessionId(), Qm = () => {
  const e = Jm();
  let t = mw.storage.get(e);
  return t == null && (t = 0), parseInt(t);
}, mk = function() {
  const e = Qm();
  Object.keys(mw.storage.store).filter((n) => n.startsWith(Ym)).forEach((n) => mw.storage.remove(n));
  const t = Jm();
  mw.storage.set(t, e + 1);
};
let Nl = null;
function hk(e) {
  if (Nl)
    return Promise.resolve(Nl);
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
function wk(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function fk(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = e.access_method || "mobile web", n = mw.config.get("wgDBname"), o = `cx_sx_${mw.user.sessionId()}_${t}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), r = mw.user.getName(), l = Qm(), u = {
    $schema: "/analytics/mediawiki/content_translation_event/1.7.0",
    wiki_db: n,
    access_method: t,
    user_name: r,
    web_session_id: mw.user.sessionId(),
    web_pageview_id: mw.user.getPageviewToken(),
    user_is_anonymous: a,
    content_translation_session_id: o,
    content_translation_session_position: l
  };
  let d;
  return a ? d = Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, u, e))
  ) : d = hk(r).then((i) => {
    Nl = i, mw.eventLog.submit(
      s,
      Object.assign({}, u, e, {
        user_global_edit_count: i,
        user_global_edit_count_bucket: wk(i)
      })
    );
  }), d.then(() => {
    mk();
  });
}
const ze = () => fk, Zm = window.Vue.ref, eh = Zm(null), Ul = Zm(null), _k = (e) => {
  eh.value = e;
}, vk = (e) => {
  Ul.value = e;
}, cc = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = F(), s = ze();
  return {
    logDashboardTranslationStartEvent: () => {
      const r = {
        event_type: "dashboard_translation_start",
        event_source: eh.value,
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
      return Ul.value && (r.event_context = Ul.value), o.value ? (r.translation_source_section = o.value, r.translation_type = "section") : r.translation_type = "article", s(r);
    },
    setStartTranslationEventSource: _k,
    setStartTranslationEventContext: vk
  };
}, Sk = window.Vuex.useStore, Hs = () => {
  const e = Sk(), t = fe(), n = oc(), { setTranslationURLParams: o } = F(), { setStartTranslationEventSource: s, setStartTranslationEventContext: a } = cc();
  return (r, l, u, d, i = null) => C(void 0, null, function* () {
    const c = yield n(
      l,
      u,
      r
    );
    c && (e.dispatch("application/getCXServerToken"), o(c), s(d), a(i), t.push({
      name: "sx-translation-confirmer"
    }));
  });
};
const la = window.Vue.withModifiers, Ri = window.Vue.toDisplayString, zi = window.Vue.createElementVNode, Xe = window.Vue.unref, ca = window.Vue.openBlock, ju = window.Vue.createBlock;
window.Vue.createCommentVNode;
const en = window.Vue.createVNode, xn = window.Vue.withCtx, qu = window.Vue.createElementBlock, yk = ["lang", "href", "textContent"], Ck = {
  key: 1,
  class: "flex"
}, kk = { key: 2 }, bk = window.Vuex.useStore, Gu = window.Vue.computed, Xu = window.Vue.ref, Oi = window.Codex.CdxButton, Hi = window.Codex.CdxIcon, xk = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: ql,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = bk(), o = Xu(!0), s = Xu(null), a = Gu(() => {
      var w;
      return (w = s.value) == null ? void 0 : w.missingSections;
    }), r = Gu(
      () => a.value && Object.keys(a.value)[0]
    );
    xC()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((w) => s.value = w).catch((w) => console.log(w)).finally(() => o.value = !1), fe(), Ns();
    const { setTranslationURLParams: u, setSectionURLParam: d } = F(), i = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, c = Hs(), { sourceLanguage: g, targetLanguage: p } = q(n), m = SC(), h = (w) => {
      m(t.translation), c(
        t.translation.sourceTitle,
        g.value,
        p.value,
        "continue_published"
      ), w && d(w);
    };
    return (w, f) => (ca(), ju(Mm, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: i
    }, {
      title: xn(() => [
        zi("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: f[0] || (f[0] = la(() => {
          }, ["stop"])),
          textContent: Ri(e.translation.sourceTitle)
        }, null, 8, yk)
      ]),
      "mid-content": xn(() => [
        en(Xe(B), { class: "ma-0" }, {
          default: xn(() => [
            en(Xe(k), null, {
              default: xn(() => [
                o.value ? (ca(), ju(Xe(Ue), { key: 0 })) : a.value ? (ca(), qu("div", Ck, [
                  en(Xe(Oi), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: f[1] || (f[1] = la((_) => h(r.value), ["stop"]))
                  }, {
                    default: xn(() => [
                      en(Xe(Hi), {
                        class: "me-1",
                        icon: Xe(Ml)
                      }, null, 8, ["icon"]),
                      zi("span", null, Ri(r.value), 1)
                    ]),
                    _: 1
                  }),
                  en(Xe(Oi), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": w.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: f[2] || (f[2] = la((_) => h(null), ["stop"]))
                  }, {
                    default: xn(() => [
                      en(Xe(Hi), { icon: Xe(ic) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : (ca(), qu("div", kk, [
                  en(Xe(Oi), {
                    class: "cx-published-translation__start-new-translation-button flex items-center pa-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: f[3] || (f[3] = la((_) => h(null), ["stop"]))
                  }, {
                    default: xn(() => [
                      en(Xe(Hi), {
                        class: "me-1",
                        icon: Xe(Ml)
                      }, null, 8, ["icon"]),
                      zi("span", null, Ri(w.$i18n("sx-published-translation-new-translation-button-label")), 1)
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
}, Wu = window.Vuex.useStore, $k = () => {
  const e = Wu(), { commit: t } = Wu(), { sourceLanguage: n, targetLanguage: o } = q(e), s = ze();
  return (a) => C(void 0, null, function* () {
    a.sectionTranslationId ? (yield Ze.deleteTranslation(
      a.sectionTranslationId,
      a.translationId,
      a.sectionId
    )) && t(
      "translator/removeTranslationBySectionTranslationId",
      a.sectionTranslationId
    ) : (yield Ze.deleteCXTranslation(
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
const Vk = window.Vue.resolveDirective, ji = window.Vue.createElementVNode, Ek = window.Vue.withDirectives, qi = window.Vue.unref, Ku = window.Vue.createVNode, Yu = window.Vue.withCtx, Ak = window.Vue.openBlock, Dk = window.Vue.createBlock, Lk = { class: "pa-4" }, Tk = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, Bk = {
  __name: "SXConfirmTranslationDeletionDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: ni,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "continue-translation",
    "discard-translation"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, s = () => o("update:modelValue", !1), a = $k(), r = () => {
      a(n.translation), s();
    };
    return (l, u) => {
      const d = Vk("i18n");
      return Ak(), Dk(qi(et), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        "overlay-opacity": 0.7,
        "overlay-color": l.$mwui.colors.gray700,
        header: !1,
        "min-height": "unset"
      }, {
        footer: Yu(() => [
          ji("div", Tk, [
            Ku(qi(he), {
              class: "grow py-3",
              large: "",
              label: l.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            Ku(qi(he), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: l.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: r
            }, null, 8, ["label"])
          ])
        ]),
        default: Yu(() => [
          ji("div", Lk, [
            Ek(ji("span", null, null, 512), [
              [d, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "overlay-color"]);
    };
  }
};
function Pk(e, t, n) {
  return C(this, null, function* () {
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
        I.getAutonym(a).toLowerCase().includes(t.toLowerCase()) || // Search using script name
        I.getScript(a).toLowerCase().includes(t.toLowerCase())
      )
    );
    return s.length ? s : n ? (yield Fk(t, n)).filter((r) => e.includes(r)) : [];
  });
}
function Ju(e, t, n) {
  return C(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(I.sortByAutonym) : (yield Pk(e, t, n)).sort(I.sortByAutonym);
  });
}
function Fk(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function Mk() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function Nk(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
function Uk(e) {
  const t = e.length;
  return t < 10 ? "few-results" : t < 30 ? "some-results" : "many-results";
}
const Ik = window.Vue.computed;
function Rk(e, t) {
  const n = Ik(() => {
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
const Gi = window.Vue.ref, Qu = window.Vue.watch, zk = window.Vue.computed;
function Ok(e, t, n) {
  const o = Gi(""), s = Gi(-1), a = Gi(null), r = () => {
    s.value++, s.value >= l.value.length && (s.value = 0);
  }, l = zk(
    () => e.value ? t.value : [...n, ...t.value]
  ), u = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return Qu(e, () => {
    s.value = -1;
  }), Qu(s, () => C(this, null, function* () {
    var d;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = l.value[s.value], (d = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || d.scrollIntoView(!1);
  })), { next: r, prev: u, langSelectorContainer: a, selectedLanguage: o };
}
function uc(e, t, n) {
  let o;
  const s = (...a) => {
    const r = this, l = () => {
      o = null, n || e.apply(r, a);
    };
    n && !o && e.apply(r, a), (!o || t) && (clearTimeout(o), o = setTimeout(l, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const ua = window.Vue.renderSlot, pe = window.Vue.unref, Hk = window.Vue.isRef, Zu = window.Vue.createVNode, Bo = window.Vue.withModifiers, Po = window.Vue.withKeys, tn = window.Vue.createElementVNode, jk = window.Vue.resolveDirective, da = window.Vue.withDirectives, Xi = window.Vue.renderList, Wi = window.Vue.Fragment, Lt = window.Vue.openBlock, Tt = window.Vue.createElementBlock, ed = window.Vue.toDisplayString, ga = window.Vue.normalizeClass, Ki = window.Vue.createCommentVNode, qk = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, Gk = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, Xk = { class: "results px-3 pt-4" }, Wk = { class: "results-header ps-8 pb-2" }, Kk = { class: "results-languages--suggestions pa-0 ma-0" }, Yk = ["lang", "dir", "aria-selected", "onClick", "textContent"], Jk = { class: "results px-3 pt-4" }, Qk = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, Zk = ["lang", "dir", "aria-selected", "onClick", "textContent"], eb = ["aria-selected"], tb = { class: "no-results px-3 py-4" }, nb = { class: "ps-8" }, Yi = window.Vue.ref, ob = window.Vue.watch, sb = window.Vue.onMounted, td = window.Vue.computed, th = {
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
      default: Mk
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = Yi(null), a = Yi(""), r = Yi([]), l = td(
      () => Nk(r.value)
    ), u = td(
      () => Uk(r.value)
    ), d = (S) => o("select", S), i = () => o("close"), { autocompletion: c, onTabSelect: g } = Rk(
      a,
      r
    ), { next: p, prev: m, langSelectorContainer: h, selectedLanguage: w } = Ok(a, r, n.suggestions), f = () => {
      if (a.value && n.languages.includes(a.value)) {
        d(a.value);
        return;
      }
      if (w.value) {
        d(w.value);
        return;
      }
      if (r.value.length === 1) {
        d(r.value[0]);
        return;
      }
    };
    return ob(a, uc(() => C(this, null, function* () {
      r.value = yield Ju(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), sb(() => C(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), r.value = yield Ju(
        n.languages,
        "",
        n.searchAPI
      );
    })), (S, y) => {
      const b = jk("i18n");
      return Lt(), Tt("div", {
        ref_key: "langSelectorContainer",
        ref: h,
        class: "mw-ui-language-selector"
      }, [
        ua(S.$slots, "search", {}, () => [
          tn("div", qk, [
            Zu(pe(Qa), {
              value: pe(c),
              "onUpdate:value": y[0] || (y[0] = (E) => Hk(c) ? c.value = E : null),
              icon: pe(xl),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            Zu(pe(Qa), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": y[1] || (y[1] = (E) => a.value = E),
              class: "mw-ui-language-selector__search pa-4",
              icon: pe(xl),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                Po(Bo(f, ["prevent"]), ["enter"]),
                Po(Bo(pe(p), ["stop", "prevent"]), ["down"]),
                Po(Bo(pe(m), ["stop", "prevent"]), ["up"]),
                Po(Bo(i, ["prevent"]), ["esc"]),
                Po(Bo(pe(g), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        tn("section", Gk, [
          e.suggestions.length && !a.value ? ua(S.$slots, "suggestions", { key: 0 }, () => [
            tn("section", Xk, [
              da(tn("p", Wk, null, 512), [
                [b, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              tn("ul", Kk, [
                (Lt(!0), Tt(Wi, null, Xi(e.suggestions, (E) => (Lt(), Tt("li", {
                  key: E,
                  class: ga(["language pa-2 ps-8 ma-0", E === pe(w) ? "language--selected" : ""]),
                  lang: E,
                  dir: pe(I.getDir)(E),
                  "aria-selected": E === pe(w) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (M) => d(E),
                  textContent: ed(pe(I.getAutonym)(E))
                }, null, 10, Yk))), 128))
              ])
            ])
          ]) : Ki("", !0),
          l.value.length ? ua(S.$slots, "search", { key: 1 }, () => [
            tn("section", Jk, [
              e.suggestions.length && !a.value ? da((Lt(), Tt("p", Qk, null, 512)), [
                [b, void 0, "cx-sx-language-selector-all-languages"]
              ]) : Ki("", !0),
              (Lt(!0), Tt(Wi, null, Xi(l.value, (E, M) => (Lt(), Tt("ul", {
                key: M,
                class: ga(["results-languages pa-0 ma-0 mb-6", u.value])
              }, [
                (Lt(!0), Tt(Wi, null, Xi(E, (V) => (Lt(), Tt("li", {
                  key: V,
                  class: ga(["language pa-2 ps-8 ma-0", V === pe(w) ? "language--selected" : ""]),
                  lang: V,
                  dir: pe(I.getDir)(V),
                  role: "option",
                  "aria-selected": V === pe(w) || null,
                  tabindex: "-1",
                  onClick: (T) => d(V),
                  textContent: ed(pe(I.getAutonym)(V))
                }, null, 10, Zk))), 128)),
                e.allOptionEnabled && !a.value ? da((Lt(), Tt("li", {
                  key: 0,
                  class: ga(["language pa-2 ps-8 ma-0", pe(w) === "all" ? "language--selected" : ""]),
                  role: "option",
                  "aria-selected": pe(w) === "all" || null,
                  tabindex: "-1",
                  onClick: y[2] || (y[2] = (V) => d("all"))
                }, null, 10, eb)), [
                  [b, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : Ki("", !0)
              ], 2))), 128))
            ])
          ]) : ua(S.$slots, "noresults", { key: 2 }, () => [
            tn("section", tb, [
              da(tn("h3", nb, null, 512), [
                [b, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const _e = window.Vue.unref, ab = window.Vue.resolveDirective, nd = window.Vue.withDirectives, Fo = window.Vue.openBlock, Mo = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const od = window.Vue.toDisplayString, sd = window.Vue.withModifiers, $n = window.Vue.withCtx, Bt = window.Vue.createVNode, ib = { class: "sx-translation-list-language-selector" }, rb = {
  key: 0,
  class: "mw-ui-autonym"
}, lb = ["lang", "dir", "textContent"], cb = {
  key: 0,
  class: "mw-ui-autonym"
}, ub = ["lang", "dir", "textContent"], No = window.Vue.computed, db = window.Vue.inject, gb = window.Vue.ref, dc = {
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
    const n = e, o = t, s = db("breakpoints"), a = No(() => s.value.mobile), r = gb(null), l = No(() => !!r.value), u = () => r.value = "source", d = () => r.value = "target", i = () => r.value = null, c = No(() => {
      if (!l.value)
        return;
      const w = {
        source: "sourceLanguages",
        target: "targetLanguages"
      }[r.value];
      return n[w];
    }), g = (h) => {
      const f = {
        source: "update:selectedSourceLanguage",
        target: "update:selectedTargetLanguage"
      }[r.value];
      i(), o(f, h);
    }, p = No(
      () => n.selectedSourceLanguage === "all"
    ), m = No(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, w) => {
      const f = ab("i18n");
      return Fo(), Mo("div", ib, [
        Bt(_e(B), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: $n(() => [
            Bt(_e(k), {
              class: "flex justify-end",
              cols: "5"
            }, {
              default: $n(() => [
                Bt(_e(he), {
                  indicator: _e(bl),
                  class: "pa-3 sx-translation-list-language-selector__button",
                  type: "text",
                  onClick: sd(u, ["stop"])
                }, {
                  default: $n(() => [
                    p.value ? nd((Fo(), Mo("span", rb, null, 512)), [
                      [f, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Fo(), Mo("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: _e(I.getDir)(e.selectedSourceLanguage),
                      textContent: od(_e(I.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, lb))
                  ]),
                  _: 1
                }, 8, ["indicator"])
              ]),
              _: 1
            }),
            Bt(_e(k), {
              class: "sx-translation-list-language-selector__arrow flex justify-center",
              cols: "2"
            }, {
              default: $n(() => [
                Bt(_e(be), { icon: _e(Up) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Bt(_e(k), { cols: "5" }, {
              default: $n(() => [
                Bt(_e(he), {
                  indicator: _e(bl),
                  class: "pa-3 sx-translation-list-language-selector__button",
                  type: "text",
                  disabled: e.targetLanguages.length < 2,
                  onClick: sd(d, ["stop"])
                }, {
                  default: $n(() => [
                    m.value ? nd((Fo(), Mo("span", cb, null, 512)), [
                      [f, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Fo(), Mo("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: _e(I.getDir)(e.selectedTargetLanguage),
                      textContent: od(_e(I.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, ub))
                  ]),
                  _: 1
                }, 8, ["indicator", "disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Bt(_e(et), {
          value: l.value,
          "onUpdate:value": w[0] || (w[0] = (_) => l.value = _),
          animation: "slide-up",
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-opacity": 0,
          onClose: i
        }, {
          default: $n(() => [
            Bt(_e(th), {
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
      ]);
    };
  }
}, pb = window.Vue.toDisplayString, mb = window.Vue.createElementVNode, ad = window.Vue.createVNode, id = window.Vue.unref, nn = window.Vue.openBlock, pa = window.Vue.createBlock, rd = window.Vue.createCommentVNode, ld = window.Vue.renderList, cd = window.Vue.Fragment, ma = window.Vue.createElementBlock, hb = window.Vue.normalizeClass, ud = window.Vue.withCtx, wb = ["textContent"], fb = {
  key: 1,
  class: "cx-translation-list-wrapper"
}, _b = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, ha = window.Vue.ref, Pt = window.Vue.computed, vb = window.Vuex.useStore, dd = {
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
    const t = e, n = ha("all"), o = ha("all"), s = vb(), a = Pt(
      () => s.state.translator.translationsLoaded[t.translationStatus]
    ), { enabledTargetLanguages: r } = Us(), l = ha(!1), u = ha(null), d = Pt(
      () => t.translationStatus === "draft"
    ), i = Pt(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), c = Pt(
      () => n.value === "all"
    ), g = Pt(
      () => o.value === "all"
    ), p = Pt(
      () => i.value.filter(
        (_) => (c.value || _.sourceLanguage === n.value) && (g.value || _.targetLanguage === o.value)
      ).sort((_, S) => _.lastUpdatedTimestamp < S.lastUpdatedTimestamp)
    ), m = Pt(() => {
      let _ = i.value.map(
        (S) => S.targetLanguage
      );
      return r.value && (_ = _.filter(
        (S) => r.value.includes(S)
      )), [...new Set(_)];
    }), h = Pt(() => {
      const _ = i.value.map(
        (S) => S.sourceLanguage
      );
      return [...new Set(_)];
    }), w = (_) => {
      u.value = _, l.value = !0;
    }, f = Pt(() => t.activeStatus === t.translationStatus);
    return (_, S) => f.value ? (nn(), pa(id(dt), {
      key: 0,
      class: hb(`cx-translation-list--${e.translationStatus}`)
    }, {
      header: ud(() => [
        mb("h3", {
          class: "mw-ui-card__title pa-4 pt-5 mb-0",
          textContent: pb(_.$i18n(`cx-translation-label-${e.translationStatus}`))
        }, null, 8, wb)
      ]),
      default: ud(() => [
        ad(dc, {
          "selected-source-language": n.value,
          "onUpdate:selectedSourceLanguage": S[0] || (S[0] = (y) => n.value = y),
          "selected-target-language": o.value,
          "onUpdate:selectedTargetLanguage": S[1] || (S[1] = (y) => o.value = y),
          "source-languages": h.value,
          "target-languages": m.value,
          "all-option-enabled": ""
        }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"]),
        a.value ? rd("", !0) : (nn(), pa(id(Ue), { key: 0 })),
        d.value ? (nn(), ma("div", fb, [
          (nn(!0), ma(cd, null, ld(p.value, (y) => (nn(), pa(qy, {
            key: `${e.translationStatus}-${y.key}`,
            translation: y,
            onDeleteTranslation: (b) => w(y)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (nn(), ma("div", _b, [
          (nn(!0), ma(cd, null, ld(p.value, (y) => (nn(), pa(xk, {
            key: `${e.translationStatus}-${y.key}`,
            translation: y,
            onDeleteTranslation: (b) => w(y)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])),
        ad(Bk, {
          modelValue: l.value,
          "onUpdate:modelValue": S[2] || (S[2] = (y) => l.value = y),
          translation: u.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : rd("", !0);
  }
}, Sb = window.Vue.computed, yb = window.Vuex.useStore, Oe = () => {
  const e = yb(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = F();
  return { sectionSuggestion: Sb(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ) };
}, Cb = window.Vuex.useStore, kb = window.Vue.computed, Kt = () => {
  const e = Cb(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = F();
  return { currentTranslation: kb(
    () => e.getters["translator/getDraftTranslation"](
      s.value,
      o.value,
      t.value,
      n.value
    )
  ) };
}, gd = window.Vue.computed, bb = window.Vuex.useStore, He = () => {
  const e = bb(), { sectionSuggestion: t } = Oe(), { currentTranslation: n } = Kt(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = F(), r = gd(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), l = gd(() => {
    var d, i;
    const u = ((d = t.value) == null ? void 0 : d.targetTitle) || ((i = n.value) == null ? void 0 : i.targetTitle);
    return e.getters["mediawiki/getPage"](
      a.value,
      u
    );
  });
  return { currentSourcePage: r, currentTargetPage: l };
}, xb = window.Vue.ref, $b = window.Vue.watchEffect, Vb = (e, t) => C(void 0, null, function* () {
  const n = e.language, o = e.title, s = e.articleSize, a = t.missingSections, l = (yield ce.fetchSuggestionSourceSections(
    n,
    o
  )).sections.filter((u) => u.level === "2").reduce((u, d, i, c) => {
    const g = i < c.length - 1 ? c[i + 1].byteoffset : s;
    return u[d.line] = g - d.byteoffset, u;
  }, {});
  return Object.keys(l).filter((u) => a[u]).reduce((u, d) => u + l[d], 0);
}), Ji = (e) => {
  const s = e / 5 / 200;
  return Math.ceil(s);
}, Eb = (e) => {
  const t = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-whole-article",
    Math.round(t * 2) / 2,
    e
  ];
}, Ab = (e, t) => {
  const n = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-sections",
    Math.round(n * 2) / 2,
    e,
    t
  ];
}, nh = () => {
  const { currentSourcePage: e } = He(), { sectionSuggestion: t } = Oe(), n = xb(null);
  return $b(() => {
    if (t.value)
      Vb(
        e.value,
        t.value
      ).then((o) => {
        n.value = Ab(
          Ji(o),
          Object.keys(t.value.missingSections).length
        );
      });
    else if (e.value) {
      const o = Ji(e.value.articleSize);
      n.value = Eb(o);
    }
  }), { translationSizeMessageArgs: n, bytesToMinutes: Ji };
};
const Z = window.Vue.unref, ot = window.Vue.createVNode, on = window.Vue.createElementVNode, Uo = window.Vue.toDisplayString, Le = window.Vue.withCtx, Db = window.Vue.resolveDirective, Qi = window.Vue.withDirectives, Vn = window.Vue.openBlock, Gn = window.Vue.createBlock, Xn = window.Vue.createCommentVNode, Lb = window.Vue.createTextVNode, pd = window.Vue.withModifiers, Tb = window.Vue.createElementBlock, Bb = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, Pb = { class: "col shrink pe-4" }, Fb = ["lang", "dir", "textContent"], Mb = ["lang", "dir", "textContent"], Nb = ["textContent"], Ub = ["textContent"], Zi = window.Codex.CdxIcon, st = window.Vue.computed, Ib = window.Vue.inject, Rb = window.Vuex.useStore, zb = window.Codex.CdxInfoChip, Il = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [_o, _n, po],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = Rb(), { bytesToMinutes: o } = nh(), s = st(() => t.suggestion), a = st(
      () => s.value.sourceTitle || s.value.title
    ), r = st(
      () => n.getters["mediawiki/getPage"](
        s.value.sourceLanguage,
        a.value
      )
    ), l = st(
      () => {
        var _;
        return (_ = s.value) == null ? void 0 : _.missingSectionsCount;
      }
    ), u = st(() => {
      var _;
      return (_ = r.value) == null ? void 0 : _.description;
    }), d = st(
      () => s.value instanceof _n
    ), i = st(
      () => s.value instanceof po
    ), { sourceLanguageAutonym: c, targetLanguageAutonym: g } = q(n), p = st(
      () => i.value ? qm : Gm
    ), m = Ib("colors"), h = st(
      () => i.value ? m.blue600 : "currentColor"
    ), w = st(() => {
      var _;
      return o((_ = r.value) == null ? void 0 : _.articleSize) < 15;
    }), f = st(
      () => s.value instanceof sm || s.value instanceof am
    );
    return (_, S) => {
      const y = Db("i18n");
      return s.value ? (Vn(), Tb("div", Bb, [
        on("div", Pb, [
          ot(Z(Hl), {
            class: "cx-suggestion__thumbnail",
            thumbnail: r.value && r.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        ot(Z(B), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: Le(() => [
            ot(Z(B), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: Le(() => [
                ot(Z(k), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: Le(() => [
                    on("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: s.value.sourceLanguage,
                      dir: Z(I.getDir)(s.value.sourceLanguage),
                      textContent: Uo(a.value)
                    }, null, 8, Fb)
                  ]),
                  _: 1
                }),
                ot(Z(k), { shrink: "" }, {
                  default: Le(() => [
                    on("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: s.value.sourceLanguage,
                      dir: Z(I.getDir)(s.value.sourceLanguage),
                      textContent: Uo(u.value)
                    }, null, 8, Mb)
                  ]),
                  _: 1
                }),
                w.value && !d.value && !f.value ? (Vn(), Gn(Z(k), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: Le(() => [
                    Qi(on("small", null, null, 512), [
                      [y, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : Xn("", !0),
                d.value ? (Vn(), Gn(Z(k), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
                  shrink: ""
                }, {
                  default: Le(() => [
                    Qi(on("small", null, null, 512), [
                      [y, [l.value], "cx-sx-translation-suggestion-info"]
                    ])
                  ]),
                  _: 1
                })) : i.value ? (Vn(), Gn(Z(k), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: Le(() => [
                    ot(Z(B), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: Le(() => [
                        ot(Z(k), { grow: "" }, {
                          default: Le(() => [
                            on("small", {
                              textContent: Uo(Z(c))
                            }, null, 8, Nb),
                            ot(Z(Zi), {
                              icon: Z(tk),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            on("small", {
                              textContent: Uo(Z(g))
                            }, null, 8, Ub)
                          ]),
                          _: 1
                        }),
                        l.value ? (Vn(), Gn(Z(k), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: Le(() => [
                            Qi(on("small", null, null, 512), [
                              [y, [
                                l.value
                              ], "cx-sx-translation-suggestion-info"]
                            ])
                          ]),
                          _: 1
                        })) : Xn("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : Xn("", !0),
                f.value ? (Vn(), Gn(Z(k), {
                  key: 3,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: Le(() => [
                    ot(Z(zb), { icon: Z(sc) }, {
                      default: Le(() => [
                        Lb(Uo(s.value.collection.name), 1)
                      ]),
                      _: 1
                    }, 8, ["icon"])
                  ]),
                  _: 1
                })) : Xn("", !0)
              ]),
              _: 1
            }),
            ot(Z(k), { shrink: "" }, {
              default: Le(() => [
                i.value ? Xn("", !0) : (Vn(), Gn(Z(Zi), {
                  key: 0,
                  icon: Z(yo),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: S[0] || (S[0] = pd((b) => _.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                ot(Z(Zi), {
                  class: "cx-suggestion__favorite-button",
                  icon: p.value,
                  "icon-color": h.value,
                  onClick: S[1] || (S[1] = pd((b) => _.$emit("bookmark"), ["stop"]))
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : Xn("", !0);
    };
  }
}, oh = (e) => {
  if (e.type === Ie)
    return "suggestion_filter_topic_area";
  if (e.id === se || e.type === se)
    return "suggestion_filter_collections";
  if (e.id === gt)
    return "suggestion_filter_previous_edits";
  if (e.id === Ct)
    return "suggestion_filter_popular_articles";
};
const Te = window.Vue.unref, sn = window.Vue.createVNode, Ft = window.Vue.withCtx, Ob = window.Vue.resolveDirective, wa = window.Vue.createElementVNode, md = window.Vue.withDirectives, er = window.Vue.toDisplayString, hd = window.Vue.createTextVNode, Hb = window.Vue.vShow, wd = window.Vue.renderList, fd = window.Vue.Fragment, Io = window.Vue.openBlock, tr = window.Vue.createElementBlock, jb = window.Vue.normalizeClass, _d = window.Vue.createBlock, qb = { class: "sx-suggestions-filters" }, Gb = { class: "mb-0" }, Xb = { class: "sx-suggestions-filters__group-label mb-3" }, Wb = { class: "sx-suggestions-filters__group-filters mb-3" }, vd = window.Vue.ref, Kb = window.Vue.computed, Yb = window.Vue.inject, Sd = window.Codex.CdxButton, Jb = window.Codex.CdxIcon, Qb = window.Codex.CdxInfoChip, Zb = {
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
      [gt]: Km,
      [Ct]: Xm,
      [se]: sc,
      [Ie]: null
    }, { allFilters: s, isFilterSelected: a, selectFilter: r } = Zl(), l = ze(), u = () => n("update:modelValue", !1), d = () => {
      c.value && (l({
        event_type: "suggestion_filters_confirm",
        event_subtype: "suggestion_filters_single_select_confirm",
        event_context: c.value.id
      }), r(c.value)), u();
    }, i = vd(!1), c = vd(null), g = (f) => {
      const _ = {
        event_type: "suggestion_filters_select",
        event_subtype: "suggestion_filters_single_select",
        event_source: oh(f)
      };
      f.type === Ie && (_.event_context = f.id), l(_), c.value = f, i.value = !0;
    }, p = (f) => c.value ? c.value.id === f.id && c.value.type === f.type : a(f), m = Yb("breakpoints"), h = Kb(() => m.value.mobile), { getFilterProvider: w } = ec();
    return (f, _) => {
      const S = Ob("i18n");
      return Io(), _d(Te(et), {
        value: e.modelValue,
        animation: "slide-up",
        fullscreen: h.value,
        header: !1,
        "overlay-opacity": 0
      }, {
        default: Ft(() => [
          wa("section", qb, [
            sn(Te(B), {
              class: "sx-suggestions-filters__header ma-0 py-3",
              align: "stretch",
              justify: "start"
            }, {
              default: Ft(() => [
                sn(Te(k), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: Ft(() => [
                    sn(Te(Sd), {
                      class: "pa-0 ms-4",
                      weight: "quiet",
                      "aria-label": f.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: u
                    }, {
                      default: Ft(() => [
                        sn(Te(Jb), { icon: Te(yo) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                sn(Te(k), {
                  grow: "",
                  class: "px-4",
                  align: "center"
                }, {
                  default: Ft(() => [
                    md(wa("h5", Gb, null, 512), [
                      [S, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                sn(Te(k), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: Ft(() => [
                    md(sn(Te(Sd), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: d
                    }, {
                      default: Ft(() => [
                        hd(er(f.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [Hb, i.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            sn(Te(k), { class: "px-4" }, {
              default: Ft(() => [
                (Io(!0), tr(fd, null, wd(Te(s), (y) => (Io(), tr("div", {
                  key: y.id,
                  class: "sx-suggestions-filters__group"
                }, [
                  wa("div", Xb, er(y.label), 1),
                  wa("div", Wb, [
                    (Io(!0), tr(fd, null, wd(y.filters, (b) => (Io(), _d(Te(Qb), {
                      key: b.id,
                      class: jb(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
                        "sx-suggestions-filters__filter--active": p(b)
                      }]),
                      icon: o[Te(w)(b)],
                      onClick: (E) => g(b)
                    }, {
                      default: Ft(() => [
                        hd(er(b.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["class", "icon", "onClick"]))), 128))
                  ])
                ]))), 128))
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["value", "fullscreen"]);
    };
  }
};
const fa = window.Vue.unref, _a = window.Vue.openBlock, yd = window.Vue.createBlock;
window.Vue.createCommentVNode;
const ex = window.Vue.renderList, tx = window.Vue.Fragment, Cd = window.Vue.createElementBlock, nx = window.Vue.toDisplayString, ox = window.Vue.createTextVNode, sx = window.Vue.normalizeClass, ax = window.Vue.withCtx, ix = window.Vue.createVNode, rx = {
  key: 1,
  class: "cx-suggestion-list__filters flex px-4 pb-2"
}, lx = window.Codex.CdxInfoChip, kd = window.Vue.ref, cx = window.Vue.computed, bd = window.Vue.watch, ux = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = ge(), n = ze(), {
      getFiltersSummary: o,
      selectFilter: s,
      isFilterSelected: a,
      waitingForPageCollectionsFetch: r
    } = Zl(), l = kd(!1), u = () => {
      n({ event_type: "dashboard_suggestion_filters_view_more" }), l.value = !0;
    }, d = (h) => {
      const w = {
        event_type: "dashboard_suggestion_filters_quick_select",
        event_source: oh(h)
      };
      h.type === Ie && (w.event_context = h.id), n(w), s(h);
    }, i = {
      [gt]: Km,
      [Ct]: Xm,
      [se]: sc,
      [Ie]: null
    }, { getFilterProvider: c } = ec(), g = (h) => ({
      id: h.id,
      type: h.type,
      icon: i[c(h)],
      label: h.label,
      action: d
    }), p = kd(o());
    bd(l, (h) => {
      h || (p.value = o());
    }), bd(r, (h) => {
      h || (p.value = o());
    });
    const m = cx(() => [
      ...p.value.map(g),
      {
        id: "more",
        icon: ic,
        label: t.i18n("cx-sx-suggestions-filter-more-label"),
        action: u
      }
    ]);
    return (h, w) => fa(r) ? (_a(), yd(fa(Ue), { key: 0 })) : (_a(), Cd("div", rx, [
      (_a(!0), Cd(tx, null, ex(m.value, (f) => (_a(), yd(fa(lx), {
        key: f.label,
        class: sx(["cx-suggestion-list__filter py-1 me-1", { "cx-suggestion-list__filter--active": fa(a)(f) }]),
        icon: f.icon,
        onClick: (_) => f.action(f)
      }, {
        default: ax(() => [
          ox(nx(f.label), 1)
        ]),
        _: 2
      }, 1032, ["class", "icon", "onClick"]))), 128)),
      ix(Zb, {
        modelValue: l.value,
        "onUpdate:modelValue": w[0] || (w[0] = (f) => l.value = f)
      }, null, 8, ["modelValue"])
    ]));
  }
}, dx = window.Vue.computed, gx = () => {
  const { supportedLanguageCodes: e, enabledTargetLanguages: t } = Us(), n = dx(() => t.value || e.value);
  return {
    supportedLanguageCodes: e,
    availableTargetLanguages: n
  };
}, Ro = window.Vue.computed, xd = window.Vue.ref, px = window.Vue.watch, mx = window.Vuex.useStore, hx = () => {
  const e = mx(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = F(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = Jl(), r = ze(), l = Ro(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), u = Ro(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), d = Ro(
    () => !l.value && !u.value
  ), i = xd(0), c = xd(0), { maxSuggestionsPerSlice: g } = e.state.suggestions, p = 4, m = Ro(
    () => a(i.value)
  ), h = Ro(
    () => s(c.value)
  ), w = () => {
    y(), b();
  }, {
    fetchNextSectionSuggestionsSlice: f,
    fetchNextPageSuggestionsSlice: _
  } = tc(), S = (H) => H.length === g, y = () => {
    const H = S(
      m.value
    ), P = (i.value + 1) % p, N = S(
      a(P)
    );
    (!H || !N) && f(), H && V();
  }, b = () => {
    const H = S(
      h.value
    ), P = (c.value + 1) % p, N = S(
      s(P)
    );
    (!H || !N) && _(), H && T();
  }, E = (H) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", H), y();
  }, M = (H) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", H), b();
  }, V = () => i.value = (i.value + 1) % p, T = () => c.value = (c.value + 1) % p;
  return px(
    o,
    () => {
      c.value = 0, b(), i.value = 0, y();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: h,
    currentSectionSuggestionsSlice: m,
    discardPageSuggestion: M,
    discardSectionSuggestion: E,
    onSuggestionRefresh: w,
    pageSuggestionsLoading: u,
    sectionSuggestionsLoading: l,
    showRefreshButton: d,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: s
  };
}, wx = window.Vuex.useStore, gc = () => {
  const e = wx(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = tc(), o = (d, i, c) => e.state.suggestions.pageSuggestions.find(
    (g) => g.sourceLanguage === d && g.targetLanguage === i && g.sourceTitle === c
  ), s = (d) => C(void 0, null, function* () {
    const { sourceTitle: i, sourceLanguage: c, targetLanguage: g } = d;
    yield ce.markFavorite(i, c, g);
    const p = new po({
      title: i,
      sourceLanguage: c,
      targetLanguage: g
    });
    e.commit("suggestions/addFavoriteSuggestion", p);
  });
  return {
    markFavoritePageSuggestion: (d) => {
      e.commit("suggestions/removePageSuggestion", d), n(), s(d);
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
      g && (e.commit("suggestions/removePageSuggestion", g), n());
      const p = e.getters["suggestions/getSectionSuggestionsForArticle"](i, c, d);
      p != null && p.isListable && (e.commit(
        "suggestions/removeSectionSuggestionFromList",
        p
      ), t()), yield ce.markFavorite(
        d,
        i,
        c
      );
      const m = new po({
        title: d,
        sourceLanguage: i,
        targetLanguage: c
      });
      e.commit("suggestions/addFavoriteSuggestion", m);
    }),
    removeFavoriteSuggestion: (d) => (e.commit("suggestions/removeFavoriteSuggestion", d), ce.unmarkFavorite(d))
  };
}, fx = () => {
  const { currentSuggestionFilters: e } = F(), { defaultSeedsFetched: t } = Nm();
  return () => {
    const { type: n, id: o } = e.value;
    if (o === gt)
      return t.value ? "suggestion_no_seed" : "suggestion_recent_edit";
    if (n === Ie)
      return "suggestion_topic_area";
    if (o === Ct)
      return "suggestion_featured";
    if (o === se || n === se)
      return "suggestion_filter_collections";
    throw new Error("Event source cannot be empty");
  };
};
const $d = window.Vue.toDisplayString, va = window.Vue.createElementVNode, Wn = window.Vue.createVNode, re = window.Vue.unref, zo = window.Vue.withCtx, _x = window.Vue.resolveDirective, nr = window.Vue.withDirectives, Vd = window.Vue.renderList, Ed = window.Vue.Fragment, an = window.Vue.openBlock, or = window.Vue.createElementBlock, Oo = window.Vue.createBlock, sr = window.Vue.createCommentVNode, vx = window.Vue.createTextVNode, Sx = window.Vue.vShow, yx = ["textContent"], Cx = { class: "cx-translation-list__division-title ma-0 pa-4" }, kx = { class: "cx-translation-list__division-title ma-0 pa-4" }, bx = { class: "cx-suggestion-list__refresh-button-container justify-center" }, xx = window.Vue.ref, $x = window.Codex.CdxButton, Vx = window.Codex.CdxIcon, Ex = {
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
    } = F(), { supportedLanguageCodes: s, availableTargetLanguages: a } = gx(), r = zm(), l = (T) => r(T, n.value), u = (T) => r(t.value, T), d = fx(), i = Hs(), c = (T) => {
      i(
        T.sourceTitle,
        T.sourceLanguage,
        T.targetLanguage,
        d(),
        o.value.id
      );
    }, {
      currentPageSuggestionsSlice: g,
      currentSectionSuggestionsSlice: p,
      discardPageSuggestion: m,
      discardSectionSuggestion: h,
      onSuggestionRefresh: w,
      pageSuggestionsLoading: f,
      sectionSuggestionsLoading: _,
      showRefreshButton: S
    } = hx(), y = xx(null), b = ze(), E = () => {
      b({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), w(), y.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: M, markFavoritePageSuggestion: V } = gc();
    return (T, H) => {
      const P = _x("i18n");
      return nr((an(), or("div", null, [
        Wn(re(dt), { class: "cx-translation-list--suggestions pa-0 mb-0" }, {
          header: zo(() => [
            va("h3", {
              class: "mw-ui-card__title pa-4 pt-5 mb-0",
              textContent: $d(T.$i18n("cx-suggestionlist-title"))
            }, null, 8, yx),
            Wn(ux)
          ]),
          default: zo(() => [
            Wn(dc, {
              "source-languages": re(s),
              "target-languages": re(a),
              "selected-source-language": re(t),
              "selected-target-language": re(n),
              "onUpdate:selectedSourceLanguage": l,
              "onUpdate:selectedTargetLanguage": u
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])
          ]),
          _: 1
        }),
        Wn(re(dt), {
          ref_key: "pageSuggestionsList",
          ref: y,
          class: "cx-translation-list--page-suggestions pa-0 mb-0"
        }, {
          default: zo(() => [
            nr(va("h5", Cx, null, 512), [
              [P, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (an(!0), or(Ed, null, Vd(re(g), (N, ae) => (an(), Oo(Il, {
              key: `page-suggestion-${ae}`,
              suggestion: N,
              onClose: (J) => re(m)(N),
              onClick: (J) => c(N),
              onBookmark: (J) => re(V)(N)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            re(f) ? (an(), Oo(re(Ue), { key: 0 })) : sr("", !0)
          ]),
          _: 1
        }, 512),
        Wn(re(dt), { class: "cx-translation-list--sx-suggestions pa-0 mb-0" }, {
          default: zo(() => [
            nr(va("h5", kx, null, 512), [
              [P, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (an(!0), or(Ed, null, Vd(re(p), (N, ae) => (an(), Oo(Il, {
              key: `section-suggestion-${ae}`,
              class: "ma-0",
              suggestion: N,
              onClose: (J) => re(h)(N),
              onClick: (J) => c(N),
              onBookmark: (J) => re(M)(N)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            re(_) ? (an(), Oo(re(Ue), { key: 0 })) : sr("", !0)
          ]),
          _: 1
        }),
        va("div", bx, [
          re(S) ? (an(), Oo(re($x), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: E
          }, {
            default: zo(() => [
              Wn(re(Vx), {
                class: "me-1",
                icon: re(Wm)
              }, null, 8, ["icon"]),
              vx(" " + $d(T.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : sr("", !0)
        ])
      ], 512)), [
        [Sx, e.active]
      ]);
    };
  }
}, Ax = window.Vue.resolveDirective, Dx = window.Vue.createElementVNode, Lx = window.Vue.withDirectives, Tx = window.Vue.renderList, Bx = window.Vue.Fragment, ar = window.Vue.openBlock, Px = window.Vue.createElementBlock, Ad = window.Vue.unref, Dd = window.Vue.createBlock, Ld = window.Vue.withCtx, Fx = window.Vue.createCommentVNode, Mx = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, Nx = window.Vue.computed, Ux = window.Vuex.useStore, Ix = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = Ux(), n = Nx(() => t.state.suggestions.favorites || []), o = Hs(), s = (r) => o(
      r.title,
      r.sourceLanguage,
      r.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = gc();
    return (r, l) => {
      const u = Ax("i18n");
      return n.value.length ? (ar(), Dd(Ad(dt), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: Ld(() => [
          Lx(Dx("h3", Mx, null, 512), [
            [u, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: Ld(() => [
          (ar(!0), Px(Bx, null, Tx(n.value, (d, i) => (ar(), Dd(Il, {
            key: `favorite-${i}`,
            suggestion: d,
            onClick: (c) => s(d),
            onBookmark: (c) => Ad(a)(d)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : Fx("", !0);
    };
  }
};
const Rx = window.Vue.resolveDirective, Ho = window.Vue.createElementVNode, zx = window.Vue.withDirectives, Ox = window.Vue.renderList, Hx = window.Vue.Fragment, Td = window.Vue.openBlock, Bd = window.Vue.createElementBlock, jx = window.Vue.unref, qx = window.Vue.createVNode, Gx = window.Vue.toDisplayString, Xx = { class: "cx-help-panel pa-4" }, Wx = { class: "cx-help-panel__item-list mt-6 ps-2" }, Kx = ["href"], Yx = ["textContent"], Jx = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = ge(), n = [
      {
        icon: vf,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation"
      },
      {
        icon: ef,
        label: t.i18n("cx-sx-dashboard-help-panel-stats-label"),
        href: mw.util.getUrl("Special:ContentTranslationStats")
      },
      {
        icon: Sf,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation"
      }
    ];
    return (o, s) => {
      const a = Rx("i18n");
      return Td(), Bd("div", Xx, [
        zx(Ho("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        Ho("ul", Wx, [
          (Td(), Bd(Hx, null, Ox(n, (r, l) => Ho("li", {
            key: l,
            class: "mt-4"
          }, [
            Ho("a", {
              href: r.href,
              target: "_blank"
            }, [
              qx(jx(be), {
                class: "me-2",
                icon: r.icon
              }, null, 8, ["icon"]),
              Ho("span", {
                textContent: Gx(r.label)
              }, null, 8, Yx)
            ], 8, Kx)
          ])), 64))
        ])
      ]);
    };
  }
};
const Qx = window.Vue.resolveDirective, Kn = window.Vue.createElementVNode, ir = window.Vue.withDirectives, Pd = window.Vue.toDisplayString, rr = window.Vue.unref, lr = window.Vue.withCtx, cr = window.Vue.createVNode, Zx = window.Vue.openBlock, e8 = window.Vue.createElementBlock, t8 = { class: "cx-stats-panel pa-4" }, n8 = ["textContent"], o8 = { class: "cx-stats-panel__monthly-stats-label" }, s8 = ["textContent"], a8 = { class: "cx-stats-panel__total-stats-label" }, i8 = window.Vue.ref, Fd = window.Vue.computed, r8 = window.Vue.watch, l8 = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = e, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", o = Fd(() => {
      var r, l;
      return ((l = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : l.count) || 0;
    }), s = Fd(() => {
      var r, l;
      return ((l = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : l.delta) || 0;
    }), a = i8(null);
    return r8(
      () => t.stats,
      () => {
        const r = t.stats, l = a.value.getContext("2d"), u = Object.keys(t.stats || {}).sort(), d = u.reduce(
          (y, b) => Math.max(y, r[b].delta),
          0
        ), i = u.map((y) => r[y].delta), c = a.value.getBoundingClientRect().width, g = a.value.getBoundingClientRect().height;
        a.value.width = c, a.value.height = g;
        const p = 4, m = 6, h = 50, w = (h - p) / d;
        let f = p;
        const _ = Math.floor(
          (c - p) / (m + p)
        ), S = i.slice(
          Math.max(i.length - _, 0)
        );
        S.forEach((y, b) => {
          b === S.length - 1 && (l.fillStyle = "#36c");
          const E = h - y * w;
          l.fillRect(f, E, m, y * w), f += m + p;
        });
      }
    ), (r, l) => {
      const u = Qx("i18n");
      return Zx(), e8("div", t8, [
        ir(Kn("h5", null, null, 512), [
          [u, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        cr(rr(B), null, {
          default: lr(() => [
            cr(rr(k), { class: "cx-stats-panel__monthly-stats" }, {
              default: lr(() => [
                Kn("h3", {
                  textContent: Pd(s.value)
                }, null, 8, n8),
                ir(Kn("h5", o8, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            cr(rr(k), { class: "cx-stats-panel__total-stats" }, {
              default: lr(() => [
                Kn("h3", {
                  textContent: Pd(o.value)
                }, null, 8, s8),
                ir(Kn("h5", a8, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Kn("canvas", {
          ref_key: "canvasRef",
          ref: a,
          class: "cx-stats-panel__canvas"
        }, null, 512)
      ]);
    };
  }
}, sh = () => {
  const e = ze();
  return (n) => {
    e({
      event_type: "dashboard_tab_select",
      event_source: {
        draft: "dashboard_inprogress_tab",
        published: "dashboard_published_tab",
        suggestions: "dashboard_suggestions_tab"
      }[n]
    });
  };
};
const c8 = window.Vue.renderSlot, u8 = window.Vue.unref, d8 = window.Vue.createVNode, g8 = window.Vue.createElementVNode, p8 = window.Vue.openBlock, m8 = window.Vue.createElementBlock, h8 = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, w8 = { class: "col-12 ma-0 pa-0" }, f8 = {
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
    const n = t, o = sh(), s = (a) => {
      o(a), n("update:active", a);
    };
    return (a, r) => (p8(), m8("footer", h8, [
      g8("div", w8, [
        c8(a.$slots, "default", {}, () => [
          d8(u8(As), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: s
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, _8 = window.Vuex.useStore;
let Sa = [];
const ah = () => {
  const e = _8();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || Sa.includes(o) ? Promise.resolve() : (Sa.push(o), So.fetchLanguageTitles(t, n).then((s) => {
      Sa = Sa.filter(
        (a) => a !== o
      ), s && e.commit("mediawiki/addLanguageTitleGroup", s);
    }));
  };
}, v8 = window.Vuex.useStore, ih = () => {
  const e = v8(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = F(), { isDefaultFilter: r } = Xp(), { previousRoute: l } = q(e), u = ze(), d = () => {
    const g = {
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
  }, getEventSource: i };
}, S8 = () => {
  const e = Hs(), t = ah(), { logDashboardOpenEvent: n, getEventSource: o } = ih(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r
  } = F();
  return () => C(void 0, null, function* () {
    return t(s.value, r.value).then(
      () => n()
    ), e(
      r.value,
      s.value,
      a.value,
      o()
    );
  });
}, y8 = window.Vuex.useStore, li = () => {
  const e = y8(), t = (o) => C(void 0, null, function* () {
    let s = yield Ze.fetchTranslations(o);
    e.commit("translator/clearTranslationsByStatus", o), s.forEach(
      (r) => e.commit("translator/addTranslation", r)
    );
    const a = {};
    for (const r of s) {
      const l = r.sourceLanguage;
      a[l] = a[l] || [], a[l].push(r);
    }
    e.commit("translator/setTranslationsLoaded", { status: o, value: !0 });
    for (const [r, l] of Object.entries(a))
      e.dispatch("mediawiki/fetchPageMetadata", {
        language: r,
        titles: l.map((u) => u.sourceTitle)
      }), l.forEach((u) => {
        const { targetLanguage: d, targetTitle: i } = u, c = !!e.getters["mediawiki/getPage"](
          d,
          i
        );
        i && !c && e.commit(
          "mediawiki/addPage",
          new vo({ title: i, pagelanguage: d })
        );
      });
  });
  return { fetchTranslationsByStatus: t, fetchAllTranslations: () => e.state.translator.translations.length ? Promise.resolve() : Promise.all([
    t("published"),
    t("draft")
  ]).catch((o) => {
    mw.log.error("[CX] Error while fetching translations", o);
  }) };
}, C8 = window.Vuex.useStore, k8 = () => {
  const e = C8();
  return () => C(void 0, null, function* () {
    if (e.state.suggestions.favorites.length)
      return;
    const t = yield ce.fetchFavorites();
    if (!t || !t.length)
      return;
    const n = {};
    for (const o of t)
      e.commit("suggestions/addFavoriteSuggestion", o), ce.fetchSectionSuggestion(
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
}, b8 = () => {
  const e = S8(), { fetchAllTranslations: t } = li(), n = nc(), o = k8(), { fetchPageCollections: s } = Im(), { pageURLParameter: a, sectionURLParameter: r, draftURLParameter: l } = F(), { logDashboardOpenEvent: u } = ih();
  return () => C(void 0, null, function* () {
    if (s(), yield Rm()(), a.value) {
      e({
        pageTitle: a.value,
        isDraftTranslation: l.value,
        sectionTitle: r.value
      });
      return;
    }
    u();
    try {
      yield o();
    } catch (i) {
      mw.log.error("[CX] Error while fetching favorite suggestions", i);
    }
    yield t(), n();
  });
}, Md = window.Vue.computed, x8 = window.Vue.ref, $8 = window.Vue.watch, V8 = window.Vue.watchEffect, E8 = window.Vuex.useStore, A8 = ["suggestions", "draft", "published"], D8 = () => {
  const e = E8(), { getUrlParam: t, setUrlParam: n } = F(), o = t("active-list"), s = x8(null);
  if (A8.includes(o))
    s.value = o;
  else {
    const a = Md(
      () => e.state.translator.translationsLoaded.draft
    ), r = Md(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = r.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", $8(a, (l) => {
      l && (s.value = r.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return V8(() => {
    n("active-list", s.value), window.scrollTo(0, 0);
  }), s;
}, L8 = window.Vue.computed, T8 = () => {
  const e = ge();
  return L8(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: of,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: ti,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: nf,
        type: "text"
      }
    }
  ]);
};
const de = window.Vue.unref, Se = window.Vue.createVNode, B8 = window.Vue.toDisplayString, P8 = window.Vue.createTextVNode, Mt = window.Vue.withCtx, ur = window.Vue.openBlock, Nd = window.Vue.createBlock, Ud = window.Vue.createCommentVNode, F8 = window.Vue.isRef, M8 = window.Vue.createElementBlock, N8 = window.Vue.computed, U8 = window.Vuex.useStore, I8 = window.Codex.CdxButton, R8 = window.Codex.CdxIcon, z8 = {
  __name: "CXDashboard",
  setup(e) {
    const t = fe(), n = ze(), o = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    b8()();
    const a = U8();
    a.dispatch("translator/fetchTranslatorStats");
    const r = N8(() => a.state.translator.translatorStats), l = D8(), u = T8(), d = sh(), i = (c) => {
      d(c), l.value = c;
    };
    return (c, g) => (ur(), M8("div", null, [
      Se(de(B), { class: "ma-0 py-4" }, {
        default: Mt(() => [
          Se(de(I8), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: o
          }, {
            default: Mt(() => [
              Se(de(R8), {
                class: "me-1",
                icon: de(Ml)
              }, null, 8, ["icon"]),
              P8(" " + B8(c.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      Se(de(B), {
        class: "ma-0",
        align: "start"
      }, {
        default: Mt(() => [
          c.$mwui.breakpoint.tabletAndUp ? (ur(), Nd(de(k), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: Mt(() => [
              Se(de(As), {
                id: "dashboard-list-selector--desktop",
                items: de(u),
                active: de(l),
                onSelect: i
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : Ud("", !0),
          Se(de(k), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: Mt(() => [
              Se(Ix),
              Se(Ex, {
                active: de(l) === "suggestions"
              }, null, 8, ["active"]),
              Se(dd, {
                "translation-status": "draft",
                "active-status": de(l)
              }, null, 8, ["active-status"]),
              Se(dd, {
                "translation-status": "published",
                "active-status": de(l)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          Se(de(k), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: Mt(() => [
              Se(de(B), {
                class: "ma-0",
                align: "start"
              }, {
                default: Mt(() => [
                  Se(de(k), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: Mt(() => [
                      Se(l8, { stats: r.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  Se(de(k), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: Mt(() => [
                      Se(Jx)
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
      c.$mwui.breakpoint.mobile ? (ur(), Nd(f8, {
        key: 0,
        active: de(l),
        "onUpdate:active": g[0] || (g[0] = (p) => F8(l) ? l.value = p : null),
        items: de(u)
      }, null, 8, ["active", "items"])) : Ud("", !0)
    ]));
  }
}, O8 = {
  name: "DashboardView",
  components: { CxDashboard: z8 }
}, H8 = window.Vue.resolveComponent, j8 = window.Vue.createVNode, q8 = window.Vue.openBlock, G8 = window.Vue.createElementBlock, X8 = { class: "cx-translation-dashboard" };
function W8(e, t, n, o, s, a) {
  const r = H8("cx-dashboard");
  return q8(), G8("main", X8, [
    j8(r, { class: "mb-4 pb-12" })
  ]);
}
const Id = /* @__PURE__ */ z(O8, [["render", W8]]), Yn = window.Vue.computed, K8 = () => {
  const { sectionSuggestion: e } = Oe(), { targetLanguageURLParameter: t } = F(), { currentTranslation: n } = Kt(), o = Yn(
    () => {
      var g, p, m;
      return (m = (p = (g = e.value) == null ? void 0 : g.orderedMissingSections) == null ? void 0 : p[0]) == null ? void 0 : m.sourceTitle;
    }
  ), s = Yn(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.missingSectionsCount;
    }
  ), a = Yn(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.presentSectionsCount;
    }
  ), { targetPageExists: r, getCurrentTitleByLanguage: l } = Wt(), u = Yn(() => r ? G.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    l(t.value, null)
  ) : null), d = (g) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : g ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : r.value ? s.value > 1 || s.value === 1 && a.value > 0 ? "cx-sx-select-section" : s.value === 1 && a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : s.value === 0 && a.value > 0 ? "cx-sx-select-section" : s.value === 0 && a.value === 0 ? "cx-sx-translation-confirmer-action-new-translation" : "" : "cx-sx-start-translation-button-label", i = Yn(() => {
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
  }), c = Yn(
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
}, rh = () => new URLSearchParams(location.search).get("force-quick-tutorial");
function Y8(e) {
  return e.$el = $(e), e;
}
function J8(e, t, n, o) {
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
function Q8() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function Z8(e, t) {
  return C(this, null, function* () {
    yield pc(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = Y8(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const e2 = window.Vue.computed, t2 = window.Vue.onMounted, n2 = window.Vue.ref;
function o2(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const s2 = {
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
    const n = n2(null);
    let o = null;
    const s = e2(() => o.getHtml()), a = () => {
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
    return t2(() => C(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = o2;
      const i = yield Z8(u, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), o = J8(
        i,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = Q8, o.focus();
    })), { sxeditor: n };
  }
}, Rl = window.Vue.createElementVNode, a2 = window.Vue.openBlock, i2 = window.Vue.createElementBlock, r2 = ["lang", "dir"], l2 = /* @__PURE__ */ Rl("div", { class: "overlay-header header initial-header" }, [
  /* @__PURE__ */ Rl("div", { class: "toolbar" })
], -1), c2 = ["lang", "dir"];
function u2(e, t, n, o, s, a) {
  return a2(), i2("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    l2,
    Rl("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, c2)
  ], 8, r2);
}
const d2 = /* @__PURE__ */ z(s2, [["render", u2]]);
function pc() {
  return mw.loader.using("mw.cx3.ve");
}
const g2 = window.Vuex.useStore, lh = () => {
  const e = g2();
  return (t, n) => C(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield pc(), new Promise((s) => {
      setTimeout(() => {
        const a = im.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, p2 = window.Vuex.useStore, mc = () => {
  const e = p2();
  return (t, n, o, s = null) => C(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      o
    );
    if (a && a.content)
      return;
    const r = yield So.fetchPageContent(
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
}, m2 = window.Vuex.useStore, hc = () => {
  const e = m2(), { currentSourcePage: t } = He(), n = lh(), o = mc(), {
    setSectionURLParam: s,
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l
  } = F(), u = (c, g) => C(void 0, null, function* () {
    c() || (e.commit("application/increaseTranslationDataLoadingCounter"), yield o(
      a.value,
      r.value,
      l.value
    ), yield n(
      a.value,
      l.value
    ), e.commit("application/decreaseTranslationDataLoadingCounter")), g();
  });
  return {
    selectPageSectionByIndex: (c) => {
      const g = () => {
        var m;
        return (m = t.value.sections) == null ? void 0 : m[c];
      };
      return u(g, () => {
        const m = g();
        c === 0 ? m.originalTitle = t.value.title : s(m.originalTitle);
      });
    },
    selectPageSectionByTitle: (c) => u(() => t.value.getSectionByTitle(c), () => {
      s(c);
    })
  };
}, wc = () => (e, t, n, o = {}) => {
  G.setCXToken(e, t, n), location.href = G.getCXUrl(
    n,
    null,
    e,
    t,
    o
  );
}, h2 = (e, t, n, o) => C(void 0, null, function* () {
  var l, u, d;
  const s = ((l = t.user) == null ? void 0 : l.content) || ((u = t.mt) == null ? void 0 : u.content), a = (d = t == null ? void 0 : t.mt) == null ? void 0 : d.engine, r = yield lm(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = r, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = r;
}), w2 = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, r;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const l = (r = t.mt) == null ? void 0 : r.engine;
      o.addProposedTranslation(l, n.mt.innerHTML), o.mtProviderUsed = l;
    }
  });
}, f2 = (e, t, n, o) => C(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return h2(e, t, n, o);
  w2(e, t);
}), _2 = (e, t, n, o) => {
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
        const d = f2(
          l,
          u,
          t || e.title,
          n
        );
        s.push(d);
      }
  return Promise.all(s);
}, v2 = { restoreCorporaDraft: _2 }, jo = window.Vue.computed, S2 = window.Vuex.useStore, K = () => {
  const e = S2(), { currentSourcePage: t, currentTargetPage: n } = He(), { currentMTProvider: o } = q(e), { sectionURLParameter: s } = F(), a = jo(() => {
    var i, c;
    return s.value ? (c = t.value) == null ? void 0 : c.getSectionByTitle(s.value) : (i = t.value) == null ? void 0 : i.leadSection;
  }), r = jo(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.isTitleSelected;
    }
  ), l = jo(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.selectedContentTranslationUnit;
    }
  ), u = jo(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.getProposedTranslationByMtProvider(
        o.value
      );
    }
  ), d = jo(() => a.value.isLeadSection ? a.value.title : n.value.title);
  return {
    sourceSection: a,
    isSectionTitleSelected: r,
    selectedContentTranslationUnit: l,
    currentProposedTranslation: u,
    targetPageTitleForPublishing: d
  };
}, y2 = window.Vuex.useStore, fc = () => {
  const e = ze(), t = y2(), n = fe(), { currentSourcePage: o } = He(), { sourceLanguage: s, targetLanguage: a } = q(t), r = vC(), l = lh(), { isDesktop: u } = Ns(), d = wc(), i = mc(), { sourceSection: c } = K();
  return (g) => C(void 0, null, function* () {
    t.commit("application/increaseTranslationDataLoadingCounter");
    const {
      sourceLanguage: p,
      targetLanguage: m,
      sourceTitle: h,
      targetTitle: w,
      pageRevision: f,
      isLeadSectionTranslation: _
    } = g;
    if (u.value) {
      const b = {};
      _ || (b.sourcesection = g.sourceSectionTitle), d(
        s.value,
        a.value,
        h,
        b
      );
      return;
    }
    G.unsetCXToken(
      p,
      m,
      h
    );
    const { setTranslationURLParams: S } = F();
    S(g), n.push({ name: "sx-sentence-selector", query: { force: !0 } }), (s.value !== p || a.value !== m) && r(g), t.dispatch("application/getCXServerToken"), e({
      event_type: "dashboard_translation_continue",
      translation_id: g.sectionTranslationId,
      translation_source_language: s.value,
      translation_source_title: h,
      translation_source_section: g.sourceSectionTitle,
      translation_target_language: a.value,
      translation_target_title: w,
      translation_target_section: g.targetSectionTitle,
      translation_type: _ ? "article" : "section"
    }), yield i(
      s.value,
      a.value,
      h,
      f
    ), yield l(s.value, h), g.restored || (yield Ze.fetchTranslationUnits(g.translationId).then(
      (b) => v2.restoreCorporaDraft(
        o.value,
        w,
        a,
        b
      )
    ).then(() => g.restored = !0));
    let y;
    _ ? (c.value.originalTitle = h, y = w) : y = g.targetSectionTitle, c.value.translatedTitle = y, t.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, C2 = window.Vue.ref, k2 = window.Vuex.useStore, b2 = () => {
  const e = fe(), t = k2(), { isDesktop: n } = Ns(), { logDashboardTranslationStartEvent: o } = cc(), {
    pageURLParameter: s,
    sectionURLParameter: a
  } = F(), { sourceLanguage: r, targetLanguage: l } = q(t), { targetPageExists: u } = Wt(), { selectPageSectionByIndex: d, selectPageSectionByTitle: i } = hc(), c = wc(), g = () => C(void 0, null, function* () {
    n.value ? (o(), c(
      r.value,
      l.value,
      s.value,
      { sourcesection: a.value }
    )) : (yield i(a.value), e.push({ name: "sx-content-comparator", query: { force: !0 } }));
  }), p = fc(), m = C2(!1), { currentTranslation: h } = Kt(), w = () => {
    h.value ? h.value.isArticleTranslation ? m.value = !0 : p(h.value) : a.value ? g() : u.value ? e.push({ name: "sx-section-selector" }) : f();
  }, f = () => C(void 0, null, function* () {
    o(), n.value ? c(
      r.value,
      l.value,
      s.value
    ) : (d(0), rh() || !t.getters["translator/userHasSectionTranslations"] ? e.push({ name: "sx-quick-tutorial", query: { force: !0 } }) : e.push({ name: "sx-sentence-selector", query: { force: !0 } }));
  });
  return {
    startNewTranslation: f,
    handlePrimaryButtonClick: w,
    translationConfirmationDialogOn: m
  };
};
const x2 = window.Vue.resolveDirective, Rd = window.Vue.createElementVNode, zd = window.Vue.withDirectives, $2 = window.Vue.unref, V2 = window.Vue.withCtx, E2 = window.Vue.openBlock, A2 = window.Vue.createBlock, D2 = {
  href: "",
  target: "_blank"
}, L2 = window.Codex.CdxDialog, T2 = {
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
    const n = e, o = t, s = (d) => o("update:modelValue", d), a = ge(), r = {
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
      const c = x2("i18n");
      return E2(), A2($2(L2), {
        class: "cx-unreviewed-translation-dialog",
        open: e.modelValue,
        title: d.$i18n("cx-unreviewed-translation-dialog-title"),
        "close-button-label": d.$i18n("cx-unreviewed-translation-dialog-close-button-aria-label"),
        "primary-action": r,
        "default-action": l,
        "onUpdate:open": i[0] || (i[0] = (g) => s(g)),
        onPrimary: u,
        onDefault: i[1] || (i[1] = (g) => s(!1))
      }, {
        default: V2(() => [
          zd(Rd("p", null, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          zd(Rd("a", D2, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title", "close-button-label"]);
    };
  }
};
const ne = window.Vue.unref, B2 = window.Vue.resolveDirective, qo = window.Vue.createElementVNode, Od = window.Vue.withDirectives, Go = window.Vue.toDisplayString, Xo = window.Vue.openBlock, dr = window.Vue.createElementBlock, gr = window.Vue.createCommentVNode, We = window.Vue.createVNode, at = window.Vue.withCtx, pr = window.Vue.createTextVNode, P2 = window.Vue.withModifiers, Hd = window.Vue.createBlock, F2 = window.Vue.Fragment, M2 = { class: "sx-translation-confirmer-body pb-4" }, N2 = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, U2 = ["textContent"], I2 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, R2 = ["href"], z2 = ["textContent"], mr = window.Vue.computed, O2 = window.Vue.inject, jd = window.Vue.ref, H2 = window.Vue.watchEffect, j2 = window.Vuex.useStore, hr = window.Codex.CdxButton, q2 = window.Codex.CdxIcon, G2 = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = fe(), o = j2();
    O2("colors");
    const { sectionSuggestion: s } = Oe(), { targetLanguageAutonym: a } = q(o), { sectionURLParameter: r } = F(), {
      startNewTranslation: l,
      handlePrimaryButtonClick: u,
      translationConfirmationDialogOn: d
    } = b2(), i = jd(!1), c = jd(null), g = () => C(this, null, function* () {
      const P = yield Ze.checkUnreviewedTranslations();
      P !== !0 && (i.value = !0, c.value = P.targetUrl);
    }), p = () => C(this, null, function* () {
      yield g(), !i.value && l();
    }), m = () => C(this, null, function* () {
      yield g(), !i.value && u();
    }), h = t;
    H2(() => {
      d.value && (h("open-translation-confirmation-dialog"), d.value = !1);
    });
    const {
      actionInformationMessageArgs: w,
      getActionButtonLabel: f,
      isProgressiveButton: _,
      targetArticlePath: S
    } = K8(), y = ge(), b = mr(
      () => y.i18n(f(!!r.value))
    ), { isDesktop: E } = Ns(), M = mr(
      () => y.i18n(...w.value)
    ), V = () => C(this, null, function* () {
      yield g(), !i.value && n.push({ name: "sx-section-selector" });
    }), T = mr(() => {
      var P, N;
      return r.value && !!((N = (P = s.value) == null ? void 0 : P.sourceSections) != null && N.length);
    }), { targetPageExists: H } = Wt();
    return (P, N) => {
      const ae = B2("i18n");
      return Xo(), dr(F2, null, [
        qo("section", M2, [
          ne(r) ? (Xo(), dr("section", N2, [
            Od(qo("h6", null, null, 512), [
              [ae, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            qo("h5", {
              class: "ma-0",
              textContent: Go(ne(r))
            }, null, 8, U2)
          ])) : ne(H) ? (Xo(), dr("section", I2, [
            We(ne(B), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: at(() => [
                Od(We(ne(k), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [ae, [ne(a)], "cx-sx-existing-translation-status"]
                ]),
                We(ne(k), { shrink: "" }, {
                  default: at(() => [
                    qo("a", {
                      href: ne(S),
                      target: "_blank"
                    }, [
                      We(ne(q2), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: ne(rc)
                      }, null, 8, ["icon"])
                    ], 8, R2)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            We(ne(B), { class: "ma-0" }, {
              default: at(() => [
                We(ne(k), null, {
                  default: at(() => [
                    qo("span", {
                      textContent: Go(M.value)
                    }, null, 8, z2)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : gr("", !0),
          We(ne(B), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: at(() => [
              T.value ? (Xo(), Hd(ne(k), {
                key: 0,
                shrink: "",
                class: "me-4"
              }, {
                default: at(() => [
                  We(ne(hr), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: P2(V, ["stop"])
                  }, {
                    default: at(() => [
                      pr(Go(P.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : gr("", !0),
              ne(H) && ne(E) ? (Xo(), Hd(ne(k), {
                key: 1,
                shrink: "",
                class: "me-4"
              }, {
                default: at(() => [
                  We(ne(hr), {
                    size: "large",
                    onClick: p
                  }, {
                    default: at(() => [
                      pr(Go(P.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : gr("", !0),
              We(ne(k), { shrink: "" }, {
                default: at(() => [
                  We(ne(hr), {
                    weight: "primary",
                    size: "large",
                    action: ne(_) ? "progressive" : "default",
                    onClick: m
                  }, {
                    default: at(() => [
                      pr(Go(b.value), 1)
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
        We(T2, {
          modelValue: i.value,
          "onUpdate:modelValue": N[0] || (N[0] = (J) => i.value = J),
          "target-url": c.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const qd = window.Vue.unref, X2 = window.Vue.openBlock, W2 = window.Vue.createBlock, Gd = window.Vue.computed, K2 = window.Vuex.useStore, ch = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedLanguageCodes: t, enabledTargetLanguages: n } = Us();
    K2();
    const {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: s
    } = F(), { currentLanguageTitleGroup: a } = Wt(), r = Gd(
      () => {
        var c;
        return ((c = a.value) == null ? void 0 : c.titles.map((g) => g.lang)) || [];
      }
    ), l = Gd(
      () => n.value || t.value
    ), u = yC(), d = (c) => u(c, s.value), i = (c) => u(o.value, c);
    return (c, g) => (X2(), W2(dc, {
      class: "sx-article-language-selector",
      "source-languages": r.value,
      "target-languages": l.value,
      "selected-source-language": qd(o),
      "selected-target-language": qd(s),
      "onUpdate:selectedSourceLanguage": d,
      "onUpdate:selectedTargetLanguage": i
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
};
const ye = window.Vue.unref, wr = window.Vue.toDisplayString, Nt = window.Vue.createElementVNode, mt = window.Vue.createVNode, Jn = window.Vue.withCtx, Y2 = window.Vue.resolveDirective, J2 = window.Vue.withDirectives, Q2 = window.Vue.normalizeClass, Z2 = window.Vue.openBlock, e$ = window.Vue.createBlock, t$ = ["textContent"], n$ = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, o$ = ["textContent"], s$ = { class: "pe-3" }, a$ = ["textContent"], i$ = window.Codex.CdxButton, Wo = window.Codex.CdxIcon, Ut = window.Vue.computed, r$ = window.Vuex.useStore, l$ = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = r$(), n = ge(), { currentSourcePage: o } = He(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r
    } = F(), l = Ut(() => t.state.suggestions.favorites || []), u = Ut(
      () => l.value.some(
        (E) => r.value === E.title && s.value === E.sourceLanguage && a.value === E.targetLanguage
      )
    ), { markFavoriteSuggestion: d, removeFavoriteSuggestion: i } = gc(), { translationSizeMessageArgs: c } = nh(), g = () => d(
      r.value,
      s.value,
      a.value
    ), p = () => i(
      new po({
        title: r.value,
        sourceLanguage: s.value,
        targetLanguage: a.value
      })
    ), m = Ut(
      () => u.value ? qm : Gm
    ), h = Ut(
      () => u.value ? p : g
    ), w = Ut(
      () => G.getPageUrl(s.value || "", r.value || "")
    ), f = Ut(() => {
      var E;
      return (E = o.value) == null ? void 0 : E.langLinksCount;
    }), _ = (E) => {
      const M = [
        { value: 1e9, suffix: "B" },
        // 1 billion
        { value: 1e6, suffix: "M" },
        // 1 million
        { value: 1e3, suffix: "K" }
        // 1 thousand
      ];
      for (let V = 0; V < M.length; V++)
        if (E >= M[V].value)
          return (E / M[V].value).toFixed(1).replace(/\.0$/, "") + M[V].suffix;
      return E.toString();
    }, S = Ut(() => {
      var M;
      const E = Object.values(((M = o.value) == null ? void 0 : M.pageviews) || {}).reduce(
        (V, T) => V + T,
        0
      );
      return _(E);
    }), y = Ut(() => c.value ? n.i18n(...c.value) : ""), b = Ut(() => c.value ? c.value[2] < 15 : !1);
    return (E, M) => {
      const V = Y2("i18n");
      return Z2(), e$(ye(B), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: Jn(() => [
          mt(ye(k), null, {
            default: Jn(() => [
              mt(ye(B), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: Jn(() => [
                  mt(ye(k), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: w.value,
                    target: "_blank"
                  }, {
                    default: Jn(() => [
                      Nt("h5", {
                        class: "ma-0 me-1",
                        textContent: wr(ye(r))
                      }, null, 8, t$),
                      mt(ye(Wo), {
                        size: "x-small",
                        icon: ye(rc)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  mt(ye(k), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: Jn(() => [
                      mt(ye(i$), {
                        class: "px-0",
                        weight: "quiet",
                        action: u.value ? "progressive" : "default",
                        "aria-label": E.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: h.value
                      }, {
                        default: Jn(() => [
                          mt(ye(Wo), { icon: m.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Nt("div", n$, [
                Nt("div", null, [
                  Nt("span", null, [
                    mt(ye(Wo), {
                      icon: ye(lk),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    Nt("span", {
                      class: "pe-3",
                      textContent: wr(f.value)
                    }, null, 8, o$)
                  ]),
                  Nt("span", null, [
                    mt(ye(Wo), {
                      icon: ye(ok),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    J2(Nt("span", s$, null, 512), [
                      [V, [S.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                Nt("span", {
                  class: Q2(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": b.value
                  }])
                }, [
                  mt(ye(Wo), {
                    icon: ye(ak),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  Nt("span", {
                    textContent: wr(y.value)
                  }, null, 8, a$)
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
const c$ = window.Vue.resolveDirective, En = window.Vue.createElementVNode, ya = window.Vue.withDirectives, u$ = window.Vue.toDisplayString, d$ = window.Vue.createTextVNode, fr = window.Vue.unref, _r = window.Vue.withCtx, vr = window.Vue.openBlock, Sr = window.Vue.createBlock;
window.Vue.createCommentVNode;
const g$ = { class: "pa-4" }, p$ = { class: "flex pt-2" }, m$ = window.Codex.CdxButton, h$ = window.Vue.ref, w$ = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = fc(), a = h$(!1), { currentTranslation: r } = Kt(), l = () => C(this, null, function* () {
      a.value = !0;
      let u = !1;
      try {
        u = yield Ze.splitTranslation(
          r.value.translationId
        );
      } catch (d) {
        mw.log.error(
          "[CX] Error while splitting the translation into section translations",
          d
        );
      }
      a.value = !1, u && (s(r.value), o());
    });
    return (u, d) => {
      const i = c$("i18n");
      return vr(), Sr(fr(et), {
        value: e.modelValue,
        persistent: a.value,
        class: "sx-confirm-translation-start-dialog",
        "overlay-opacity": 0.7,
        "overlay-color": u.$mwui.colors.gray700,
        "min-height": "unset",
        title: u.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: _r(() => [
          En("div", p$, [
            a.value ? (vr(), Sr(fr(Ue), { key: 1 })) : (vr(), Sr(fr(m$), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: l
            }, {
              default: _r(() => [
                d$(u$(u.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: _r(() => [
          En("div", g$, [
            ya(En("p", null, null, 512), [
              [i, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            ya(En("p", null, null, 512), [
              [i, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            En("p", null, [
              ya(En("strong", null, null, 512), [
                [i, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            ya(En("p", null, null, 512), [
              [i, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "overlay-color", "title"]);
    };
  }
};
const Xd = window.Vue.resolveDirective, Ca = window.Vue.createElementVNode, Wd = window.Vue.withDirectives, rn = window.Vue.unref, ka = window.Vue.withCtx, It = window.Vue.createVNode, yr = window.Vue.openBlock, Kd = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const f$ = window.Vue.createBlock, _$ = { class: "sx-translation-confirmer" }, v$ = { class: "mb-0" }, S$ = { class: "sx-translation-confirmer__article-image flex justify-center" }, y$ = ["src"], C$ = { class: "ma-3" }, k$ = window.Vue.computed, b$ = window.Vue.ref, x$ = window.Vuex.useStore, $$ = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = x$(), { currentSourcePage: n } = He(), { previousRoute: o } = q(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l,
      clearURLParameters: u
    } = F(), d = k$(
      () => {
        var w, f;
        return (f = (w = n.value) == null ? void 0 : w.image) == null ? void 0 : f.source;
      }
    ), { fetchTranslationsByStatus: i } = li(), c = ah(), g = oc();
    i("draft"), l.value && g(
      s.value,
      a.value,
      r.value
    ), c(s.value, r.value), pc(), t.dispatch("suggestions/fetchAppendixSectionTitles", a.value);
    const p = fe(), m = () => {
      u(), p.push({ name: o.value });
    }, h = b$(!1);
    return (w, f) => {
      const _ = Xd("i18n"), S = Xd("i18n-html");
      return yr(), Kd("section", _$, [
        It(rn(B), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: ka(() => [
            It(rn(k), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: ka(() => [
                Wd(Ca("h5", v$, null, 512), [
                  [_, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            It(rn(k), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: ka(() => [
                It(rn(he), {
                  class: "pa-0",
                  type: "icon",
                  icon: rn(Ds),
                  "icon-size": 20,
                  onClick: m
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Ca("div", S$, [
          d.value ? (yr(), Kd("img", {
            key: 0,
            src: d.value
          }, null, 8, y$)) : (yr(), f$(rn(be), {
            key: 1,
            size: "120",
            icon: rn(Ol),
            "icon-color": w.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        It(l$),
        It(ch),
        It(G2, {
          onOpenTranslationConfirmationDialog: f[0] || (f[0] = (y) => h.value = !0)
        }),
        It(rn(B), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: ka(() => [
            Ca("p", C$, [
              Wd(Ca("small", null, null, 512), [
                [S, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        It(w$, {
          modelValue: h.value,
          "onUpdate:modelValue": f[1] || (f[1] = (y) => h.value = y)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const V$ = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: $$
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, E$ = window.Vue.resolveComponent, A$ = window.Vue.createVNode, D$ = window.Vue.normalizeClass, L$ = window.Vue.openBlock, T$ = window.Vue.createElementBlock;
function B$(e, t, n, o, s, a) {
  const r = E$("sx-translation-confirmer");
  return L$(), T$("main", {
    class: D$(["sx-translation-confirmer-view", a.classes])
  }, [
    A$(r)
  ], 2);
}
const P$ = /* @__PURE__ */ z(V$, [["render", B$]]);
const F$ = window.Vue.toDisplayString, Yd = window.Vue.unref, M$ = window.Vue.createVNode, N$ = window.Vue.createTextVNode, U$ = window.Vue.createElementVNode, I$ = window.Vue.openBlock, R$ = window.Vue.createElementBlock, z$ = { class: "sx-section-selector-view-article-item ma-0" }, O$ = ["href"], H$ = window.Codex.CdxIcon, j$ = {
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
    return (t, n) => (I$(), R$("li", z$, [
      U$("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        N$(F$(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        M$(Yd(H$), {
          size: "x-small",
          icon: Yd(rc)
        }, null, 8, ["icon"])
      ], 8, O$)
    ]));
  }
};
const q$ = window.Vue.resolveDirective, ba = window.Vue.createElementVNode, Cr = window.Vue.withDirectives, An = window.Vue.unref, G$ = window.Vue.toDisplayString, xa = window.Vue.withCtx, Ko = window.Vue.createVNode, X$ = window.Vue.openBlock, W$ = window.Vue.createElementBlock, K$ = { class: "sx-section-selector__header pa-4" }, Y$ = { class: "sx-section-selector__header-text ma-0" }, J$ = ["textContent"], Q$ = { class: "pt-0 ma-0" }, Z$ = { class: "ma-0" }, e4 = window.Codex.CdxButton, t4 = window.Codex.CdxIcon, n4 = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = Oe();
    return (n, o) => {
      const s = q$("i18n");
      return X$(), W$("div", K$, [
        Ko(An(B), { class: "ma-0 pb-3" }, {
          default: xa(() => [
            Ko(An(k), null, {
              default: xa(() => {
                var a;
                return [
                  Cr(ba("h6", Y$, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  ba("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: G$((a = An(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, J$)
                ];
              }),
              _: 1
            }),
            Ko(An(k), {
              shrink: "",
              class: "justify-end"
            }, {
              default: xa(() => [
                Ko(An(e4), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: xa(() => [
                    Ko(An(t4), { icon: An(yo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Cr(ba("h4", Q$, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        Cr(ba("p", Z$, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, o4 = window.Vue.renderList, s4 = window.Vue.Fragment, kr = window.Vue.openBlock, Jd = window.Vue.createElementBlock, a4 = window.Vue.renderSlot, $a = window.Vue.unref, Qd = window.Vue.createVNode, Zd = window.Vue.withCtx, i4 = window.Vue.createBlock, r4 = { class: "sx-section-selector__sections-list ma-0 pa-0" }, l4 = window.Codex.CdxButton, c4 = window.Codex.CdxIcon, uh = {
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
    return (t, n) => (kr(), Jd("ul", r4, [
      (kr(!0), Jd(s4, null, o4(e.sections, (o) => (kr(), i4($a(B), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: Zd(() => [
          Qd($a(l4), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: Zd(() => [
              a4(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              Qd($a(c4), { icon: $a(Os) }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["aria-label", "onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, u4 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const d4 = window.Vue.resolveDirective, Va = window.Vue.createElementVNode, br = window.Vue.withDirectives, it = window.Vue.unref, eg = window.Vue.toDisplayString, Qn = window.Vue.withCtx, xr = window.Vue.openBlock, tg = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Yo = window.Vue.createVNode, g4 = window.Vue.createTextVNode, p4 = window.Vue.createElementBlock, m4 = { class: "sx-section-selector__missing-sections py-2" }, h4 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, w4 = ["lang", "dir", "textContent"], ng = window.Vue.computed, f4 = window.Codex.CdxButton, _4 = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = Oe(), n = ng(
      () => {
        var s;
        return I.getAutonym((s = t.value) == null ? void 0 : s.targetLanguage);
      }
    ), o = ng(
      () => {
        var s;
        return Object.keys(((s = t.value) == null ? void 0 : s.missingSections) || {}).length === 0;
      }
    );
    return (s, a) => {
      const r = d4("i18n");
      return xr(), p4("section", m4, [
        br(Va("h4", h4, null, 512), [
          [r, [
            n.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        o.value ? (xr(), tg(it(B), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: Qn(() => [
            Yo(it(k), {
              class: "py-6 justify-center",
              innerHTML: it(u4)
            }, null, 8, ["innerHTML"]),
            Yo(it(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: Qn(() => [
                br(Va("h6", null, null, 512), [
                  [r, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            Yo(it(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: Qn(() => [
                br(Va("p", null, null, 512), [
                  [r, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            Yo(it(k), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: Qn(() => [
                Yo(it(f4), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: a[1] || (a[1] = (l) => s.$emit("close"))
                }, {
                  default: Qn(() => [
                    g4(eg(s.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (xr(), tg(uh, {
          key: 0,
          sections: it(t).orderedMissingSections,
          onSelectSection: a[0] || (a[0] = (l) => s.$emit("select-section", l))
        }, {
          default: Qn(({ sourceSection: l }) => {
            var u, d;
            return [
              Va("h5", {
                class: "ma-0",
                lang: (u = it(t)) == null ? void 0 : u.sourceLanguage,
                dir: it(I.getDir)((d = it(t)) == null ? void 0 : d.sourceLanguage),
                textContent: eg(l)
              }, null, 8, w4)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const v4 = window.Vue.resolveDirective, Ea = window.Vue.createElementVNode, S4 = window.Vue.withDirectives, Dn = window.Vue.unref, og = window.Vue.toDisplayString, y4 = window.Vue.withCtx, C4 = window.Vue.createVNode, k4 = window.Vue.openBlock, b4 = window.Vue.createElementBlock, x4 = { class: "sx-section-selector__present-sections py-2" }, $4 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, V4 = { class: "sx-section-selector__present-section-button-content" }, E4 = ["lang", "dir", "textContent"], A4 = ["lang", "dir", "textContent"], D4 = window.Vue.computed, L4 = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = Oe(), n = D4(
      () => {
        var o;
        return I.getAutonym((o = t.value) == null ? void 0 : o.targetLanguage);
      }
    );
    return (o, s) => {
      var r;
      const a = v4("i18n");
      return k4(), b4("section", x4, [
        S4(Ea("h4", $4, null, 512), [
          [a, [
            n.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        C4(uh, {
          sections: ((r = Dn(t)) == null ? void 0 : r.orderedPresentSections) || [],
          onSelectSection: s[0] || (s[0] = (l) => o.$emit("select-section", l))
        }, {
          default: y4(({ sourceSection: l, targetSection: u }) => {
            var d, i, c, g;
            return [
              Ea("div", V4, [
                Ea("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (d = Dn(t)) == null ? void 0 : d.sourceLanguage,
                  dir: Dn(I.getDir)((i = Dn(t)) == null ? void 0 : i.sourceLanguage),
                  textContent: og(l)
                }, null, 8, E4),
                Ea("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (c = Dn(t)) == null ? void 0 : c.targetLanguage,
                  dir: Dn(I.getDir)((g = Dn(t)) == null ? void 0 : g.targetLanguage),
                  textContent: og(u)
                }, null, 8, A4)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const Rt = window.Vue.createVNode, ln = window.Vue.unref, T4 = window.Vue.resolveDirective, ht = window.Vue.createElementVNode, Jo = window.Vue.withDirectives, B4 = window.Vue.renderList, P4 = window.Vue.Fragment, $r = window.Vue.openBlock, sg = window.Vue.createElementBlock, F4 = window.Vue.createBlock, ag = window.Vue.toDisplayString, ig = window.Vue.createTextVNode, Vr = window.Vue.withCtx, M4 = { class: "sx-section-selector" }, N4 = { class: "sx-section-selector__body" }, U4 = { class: "py-2" }, I4 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, R4 = { class: "ma-0 pa-0" }, z4 = { class: "sx-section-selector__additional-consideration-title" }, O4 = { href: "#" }, H4 = { class: "sx-section-selector__additional-consideration-title" }, j4 = { href: "#" }, Er = window.Vue.computed, q4 = window.Vuex.useStore, G4 = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = q4(), { sectionSuggestion: n } = Oe(), {
      sourceLanguage: o,
      targetLanguage: s,
      sourceLanguageAutonym: a,
      targetLanguageAutonym: r
    } = q(t), l = Er(
      () => {
        var S;
        return G.getPageUrl(o.value, (S = n.value) == null ? void 0 : S.sourceTitle);
      }
    ), u = Er(
      () => {
        var S;
        return G.getPageUrl(s.value, (S = n.value) == null ? void 0 : S.targetTitle);
      }
    ), d = Er(() => [
      { path: l.value, autonym: a.value },
      { path: u.value, autonym: r.value }
    ]), i = fe(), { clearURLParameters: c, setSectionURLParam: g } = F(), p = () => {
      c(), i.push({ name: "dashboard" });
    }, m = fc(), { selectPageSectionByTitle: h } = hc(), { isDesktop: w } = Ns(), f = wc(), _ = (S) => {
      if (w.value) {
        f(
          o.value,
          s.value,
          n.value.sourceTitle,
          { sourcesection: S }
        );
        return;
      }
      const y = t.getters["translator/getDraftTranslation"](
        n.value.sourceTitle,
        S,
        o.value,
        s.value
      );
      y ? m(y) : (h(S), g(S), i.push({ name: "sx-content-comparator" }));
    };
    return (S, y) => {
      const b = T4("i18n");
      return $r(), sg("section", M4, [
        Rt(n4, { onClose: p }),
        ht("section", N4, [
          Rt(ch),
          Rt(_4, {
            onSelectSection: _,
            onClose: p
          }),
          Rt(L4, { onSelectSection: _ }),
          ht("section", U4, [
            Jo(ht("h4", I4, null, 512), [
              [b, [
                ln(r)
              ], "cx-sx-section-selector-more-details-title"]
            ]),
            ht("ul", R4, [
              ($r(!0), sg(P4, null, B4(d.value, (E, M) => ($r(), F4(j$, {
                key: `view-article-item-${M}`,
                path: E.path,
                autonym: E.autonym
              }, null, 8, ["path", "autonym"]))), 128))
            ])
          ]),
          Rt(ln(B), { class: "sx-section-selector__additional-considerations ma-0" }, {
            default: Vr(() => [
              Rt(ln(k), {
                cols: "12",
                tablet: "6",
                class: "px-4 pt-5 pb-4"
              }, {
                default: Vr(() => [
                  ht("h6", z4, [
                    Rt(ln(be), {
                      icon: ln(df),
                      class: "pe-2"
                    }, null, 8, ["icon"]),
                    ig(" " + ag(S.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                  ]),
                  Jo(ht("p", null, null, 512), [
                    [b, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                  ]),
                  Jo(ht("a", O4, null, 512), [
                    [b, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                  ])
                ]),
                _: 1
              }),
              Rt(ln(k), {
                cols: "12",
                tablet: "6",
                class: "px-4 py-5"
              }, {
                default: Vr(() => [
                  ht("h6", H4, [
                    Rt(ln(be), {
                      icon: ln(uf),
                      class: "pe-2"
                    }, null, 8, ["icon"]),
                    ig(" " + ag(S.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                  ]),
                  Jo(ht("p", null, null, 512), [
                    [b, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                  ]),
                  Jo(ht("a", j4, null, 512), [
                    [b, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
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
const X4 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: G4
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, W4 = window.Vue.resolveComponent, K4 = window.Vue.createVNode, Y4 = window.Vue.normalizeClass, J4 = window.Vue.openBlock, Q4 = window.Vue.createElementBlock;
function Z4(e, t, n, o, s, a) {
  const r = W4("sx-section-selector");
  return J4(), Q4("main", {
    class: Y4(["sx-section-selector-view", a.classes])
  }, [
    K4(r)
  ], 2);
}
const e3 = /* @__PURE__ */ z(X4, [["render", Z4]]), t3 = window.Vue.computed, n3 = window.Vuex.useStore, o3 = (e) => {
  const { sourceLanguageAutonym: t, targetLanguageAutonym: n } = q(
    n3()
  ), o = ge();
  return t3(() => {
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
const s3 = window.Vue.watch, a3 = {
  name: "SxContentComparatorSourceVsTargetSelector",
  components: { MwButtonGroup: As },
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
    const n = (s) => t("update:selection", s), o = o3(e);
    return s3(
      () => e.isMappedSection,
      () => {
        o.value.map((s) => s.value).includes(e.selection) || n(o.value[0].value);
      }
    ), {
      listSelector: o,
      updateSelection: n
    };
  }
}, i3 = window.Vue.resolveComponent, r3 = window.Vue.createVNode, l3 = window.Vue.openBlock, c3 = window.Vue.createElementBlock, u3 = { class: "sx-content-comparator__source-target-selector" };
function d3(e, t, n, o, s, a) {
  const r = i3("mw-button-group");
  return l3(), c3("div", u3, [
    r3(r, {
      items: o.listSelector,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const g3 = /* @__PURE__ */ z(a3, [["render", d3]]), Ln = window.Vue.computed, p3 = window.Vue.ref, _c = () => {
  const e = p3([]), { currentTargetPage: t } = He(), { sectionSuggestion: n } = Oe(), { sectionURLParameter: o } = F(), s = Ln(
    () => n.value.missingSections[o.value] || n.value.presentSections[o.value] || ""
  ), a = Ln(
    () => {
      var g;
      return (((g = r.value) == null ? void 0 : g.title) || "").replace(/ /g, "_");
    }
  ), r = Ln(
    () => {
      var g;
      return (g = t.value) == null ? void 0 : g.getSectionByTitle(s.value);
    }
  ), { sourceSection: l } = K(), u = Ln(() => {
    var g;
    return (g = l.value) == null ? void 0 : g.html;
  }), d = Ln(() => {
    var g;
    return (g = r.value) == null ? void 0 : g.html;
  }), i = Ln(
    () => {
      var g;
      return (g = n.value) == null ? void 0 : g.missingSections.hasOwnProperty(o.value);
    }
  ), c = Ln(
    () => !i.value && !e.value.includes(s.value)
  );
  return {
    activeSectionTargetTitle: s,
    discardedSections: e,
    isCurrentSectionMapped: c,
    sourceSectionContent: u,
    targetSectionAnchor: a,
    targetSectionContent: d
  };
};
const Aa = window.Vue.createVNode, m3 = window.Vue.toDisplayString, h3 = window.Vue.createElementVNode, cn = window.Vue.unref, Da = window.Vue.withCtx, Ar = window.Vue.openBlock, Dr = window.Vue.createBlock;
window.Vue.createCommentVNode;
const w3 = window.Vue.normalizeClass, f3 = ["lang", "dir", "textContent"], rg = window.Vue.ref, Lr = window.Vue.computed, _3 = window.Vue.onMounted, v3 = {
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
    const n = e, o = t, s = rg(!1), { sectionSuggestion: a } = Oe(), { sectionURLParameter: r } = F(), l = Lr(
      () => (r.value || "").replace(/ /g, "_")
    ), u = (m) => o("update:sourceVsTargetSelection", m), { activeSectionTargetTitle: d, targetSectionAnchor: i } = _c(), c = Lr(() => {
      switch (n.sourceVsTargetSelection) {
        case "source_section":
          return {
            title: r.value,
            path: `${G.getPageUrl(
              a.value.sourceLanguage,
              a.value.sourceTitle
            )}#${l.value}`,
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
            path: `${g.value}#${i.value}`
          };
      }
    }), g = Lr(
      () => G.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), p = rg(null);
    return _3(() => {
      new IntersectionObserver(
        ([h]) => {
          s.value = h.intersectionRect.height < h.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(p.value.$el);
    }), (m, h) => (Ar(), Dr(cn(B), {
      ref_key: "contentHeader",
      ref: p,
      class: w3(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
      direction: "column",
      align: "stretch",
      reverse: s.value
    }, {
      default: Da(() => [
        Aa(g3, {
          "is-mapped-section": e.isMappedSection,
          selection: e.sourceVsTargetSelection,
          "onUpdate:selection": u
        }, null, 8, ["is-mapped-section", "selection"]),
        Aa(cn(B), {
          justify: "between",
          class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
        }, {
          default: Da(() => [
            Aa(cn(k), null, {
              default: Da(() => [
                h3("h3", {
                  lang: c.value.lang,
                  dir: c.value.dir,
                  class: "ma-0 pa-0",
                  textContent: m3(c.value.title)
                }, null, 8, f3)
              ]),
              _: 1
            }),
            Aa(cn(k), { shrink: "" }, {
              default: Da(() => [
                s.value ? (Ar(), Dr(cn(he), {
                  key: 0,
                  icon: cn(ti),
                  progressive: "",
                  label: m.$i18n(
                    "cx-sx-content-comparator-content-header-translate-button-label"
                  ),
                  onClick: h[0] || (h[0] = (w) => m.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label"])) : (Ar(), Dr(cn(he), {
                  key: 1,
                  class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                  icon: cn(Ip),
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
}, Qo = window.Vue.unref, lg = window.Vue.createVNode, S3 = window.Vue.withCtx, y3 = window.Vue.openBlock, C3 = window.Vue.createBlock, k3 = window.Vue.computed, b3 = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = F(), o = k3(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = hc(), a = () => {
      const l = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[l];
      s(u);
    }, r = () => {
      const l = (o.value + 1) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[l];
      s(u);
    };
    return (l, u) => (y3(), C3(Qo(k), {
      class: "justify-end",
      align: "center"
    }, {
      default: S3(() => [
        lg(Qo(he), {
          class: "pa-0 pe-1",
          type: "icon",
          icon: Qo(rf),
          onClick: a
        }, null, 8, ["icon"]),
        lg(Qo(he), {
          class: "pa-0 ps-1",
          type: "icon",
          icon: Qo(af),
          onClick: r
        }, null, 8, ["icon"])
      ]),
      _: 1
    }));
  }
};
const cg = window.Vue.toDisplayString, x3 = window.Vue.resolveDirective, Tr = window.Vue.withDirectives, Zn = window.Vue.openBlock, La = window.Vue.createElementBlock, $3 = window.Vue.createCommentVNode, V3 = window.Vue.createTextVNode, ug = window.Vue.createElementVNode, E3 = window.Vue.normalizeClass, Tn = window.Vue.unref, Br = window.Vue.withCtx, Pr = window.Vue.createVNode, dg = window.Vue.createBlock, A3 = { class: "sx-content-comparator-header__mapped-section" }, D3 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, L3 = { key: 0 }, T3 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, B3 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, gg = window.Vue.computed, P3 = {
  __name: "SXContentComparatorHeaderMappedSection",
  props: {
    suggestion: {
      type: _n,
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
    const n = ge(), o = e, s = t, a = gg(
      () => o.discardedSections.includes(o.targetSectionTitle)
    ), r = gg(
      () => n.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        I.getAutonym(o.suggestion.targetLanguage)
      )
    ), l = () => {
      a.value || s("update:discardedSections", [
        ...o.discardedSections,
        o.targetSectionTitle
      ]);
    }, u = () => {
      a.value && s(
        "update:discardedSections",
        o.discardedSections.filter(
          (d) => d !== o.targetSectionTitle
        )
      );
    };
    return (d, i) => {
      const c = x3("i18n");
      return Zn(), La("div", A3, [
        Pr(Tn(B), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: Br(() => [
            Pr(Tn(k), { grow: "" }, {
              default: Br(() => [
                ug("h6", D3, [
                  V3(cg(r.value) + " ", 1),
                  a.value ? Tr((Zn(), La("span", L3, null, 512)), [
                    [c, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : $3("", !0)
                ]),
                ug("h6", {
                  class: E3(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": a.value
                  }])
                }, cg(e.targetSectionTitle), 3)
              ]),
              _: 1
            }),
            Pr(Tn(k), { shrink: "" }, {
              default: Br(() => [
                a.value ? (Zn(), dg(Tn(he), {
                  key: 1,
                  class: "pa-0",
                  icon: Tn(mf),
                  type: "icon",
                  onClick: u
                }, null, 8, ["icon"])) : (Zn(), dg(Tn(he), {
                  key: 0,
                  class: "pa-0",
                  icon: Tn(Np),
                  type: "icon",
                  onClick: l
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        a.value ? Tr((Zn(), La("p", B3, null, 512)), [
          [c, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ]) : Tr((Zn(), La("p", T3, null, 512)), [
          [c, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ])
      ]);
    };
  }
};
const oe = window.Vue.unref, zt = window.Vue.createVNode, pg = window.Vue.toDisplayString, Ss = window.Vue.createElementVNode, eo = window.Vue.withCtx, F3 = window.Vue.resolveDirective, mg = window.Vue.withDirectives, Fr = window.Vue.openBlock, hg = window.Vue.createBlock, wg = window.Vue.createCommentVNode, M3 = window.Vue.createElementBlock, N3 = { class: "sx-content-comparator__header pa-4" }, U3 = ["lang", "dir"], I3 = ["lang", "dir"], R3 = /* @__PURE__ */ Ss("br", null, null, -1), Ta = window.Vue.computed, z3 = {
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
    const { sectionURLParameter: t } = F(), { sourceSection: n } = K(), { sectionSuggestion: o } = Oe(), s = Ta(
      () => {
        var d;
        return (d = o.value) == null ? void 0 : d.missingSections.hasOwnProperty(t.value);
      }
    ), a = Ta(
      () => {
        var d;
        return (d = o.value) == null ? void 0 : d.presentSections.hasOwnProperty(t.value);
      }
    ), { activeSectionTargetTitle: r } = _c(), l = Ta(() => {
      var d;
      return (d = n.value) == null ? void 0 : d.html;
    }), u = Ta(() => [
      ...Object.keys(o.value.missingSections),
      ...Object.keys(o.value.presentSections)
    ]);
    return (d, i) => {
      const c = F3("i18n");
      return Fr(), M3("div", N3, [
        zt(oe(he), {
          class: "py-2 pa-0",
          icon: oe(lf),
          label: d.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: i[0] || (i[0] = (g) => d.$emit("close"))
        }, null, 8, ["icon", "label"]),
        zt(oe(B), { class: "my-1 py-2 mx-0" }, {
          default: eo(() => [
            zt(oe(k), { grow: "" }, {
              default: eo(() => [
                Ss("h4", {
                  class: "pa-0 sx-content-comparator-header__article-title",
                  lang: oe(o).sourceLanguage,
                  dir: oe(I.getDir)(oe(o).sourceLanguage)
                }, pg(oe(o).sourceTitle), 9, U3),
                Ss("h2", {
                  class: "sx-content-comparator-header__section-title pa-0 ma-0",
                  lang: oe(o).sourceLanguage,
                  dir: oe(I.getDir)(oe(o).sourceLanguage)
                }, pg(oe(t)), 9, I3)
              ]),
              _: 1
            }),
            zt(b3, {
              cols: "2",
              "section-source-titles": u.value
            }, null, 8, ["section-source-titles"]),
            zt(oe(k), {
              cols: "12",
              mobile: "12",
              tablet: "4",
              class: "py-2 mb-1"
            }, {
              default: eo(() => [
                zt(oe(he), {
                  icon: oe(ti),
                  progressive: "",
                  label: d.$i18n("cx-sx-content-comparator-translation-section-button-label"),
                  disabled: !l.value,
                  onClick: i[1] || (i[1] = (g) => d.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label", "disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        s.value ? (Fr(), hg(oe(B), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: eo(() => [
            zt(oe(k), {
              shrink: "",
              class: "pe-2"
            }, {
              default: eo(() => [
                zt(oe(be), { icon: oe(gf) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            zt(oe(k), { class: "ma-0" }, {
              default: eo(() => [
                mg(Ss("strong", null, null, 512), [
                  [c, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                R3,
                mg(Ss("span", null, null, 512), [
                  [c, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : wg("", !0),
        a.value ? (Fr(), hg(P3, {
          key: 1,
          suggestion: oe(o),
          "target-section-title": oe(r),
          "discarded-sections": e.discardedSections,
          "onUpdate:discardedSections": i[2] || (i[2] = (g) => d.$emit("update:discardedSections", g))
        }, null, 8, ["suggestion", "target-section-title", "discarded-sections"])) : wg("", !0)
      ]);
    };
  }
};
const O3 = {
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
}, fg = window.Vue.toDisplayString, H3 = window.Vue.createElementVNode, _g = window.Vue.openBlock, vg = window.Vue.createElementBlock, j3 = window.Vue.createCommentVNode, q3 = { class: "sx-content-comparator__new-section-placeholder--present mt-4 py-4 px-7" }, G3 = ["textContent"], X3 = ["textContent"];
function W3(e, t, n, o, s, a) {
  return _g(), vg("section", q3, [
    H3("h5", {
      textContent: fg(n.placeholderTitle)
    }, null, 8, G3),
    n.placeholderSubtitle ? (_g(), vg("p", {
      key: 0,
      textContent: fg(n.placeholderSubtitle)
    }, null, 8, X3)) : j3("", !0)
  ]);
}
const dh = /* @__PURE__ */ z(O3, [["render", W3]]), K3 = window.Vue.computed, Y3 = window.Vue.createApp, J3 = window.Vuex.useStore, Q3 = () => {
  const e = J3(), { sectionSuggestion: t } = Oe(), { currentTargetPage: n } = He(), o = ge(), s = () => Y3(
    dh,
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
  return K3(() => {
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
const $e = window.Vue.unref, Z3 = window.Vue.isRef, Mr = window.Vue.createVNode, to = window.Vue.openBlock, Sg = window.Vue.createBlock, yg = window.Vue.createCommentVNode, Ba = window.Vue.createElementVNode, Nr = window.Vue.Fragment, Pa = window.Vue.createElementBlock, eV = { class: "sx-content-comparator" }, tV = { class: "sx-content-comparator__source-content" }, nV = ["lang", "dir", "innerHTML"], oV = ["lang", "dir", "innerHTML"], sV = ["innerHTML"], aV = window.Vue.ref, iV = window.Vue.computed, rV = window.Vue.watch, lV = window.Vuex.useStore, cV = {
  __name: "SXContentComparator",
  setup(e) {
    const t = lV(), n = fe(), o = aV("source_section"), { logDashboardTranslationStartEvent: s } = cc(), a = () => n.push({ name: "sx-section-selector" }), r = () => {
      s(), rh() || !t.getters["translator/userHasSectionTranslations"] ? n.push({ name: "sx-quick-tutorial" }) : n.push({ name: "sx-sentence-selector" });
    }, {
      activeSectionTargetTitle: l,
      discardedSections: u,
      isCurrentSectionMapped: d,
      sourceSectionContent: i,
      targetSectionContent: c
    } = _c(), g = Q3(), { sectionSuggestion: p } = Oe(), { sourceLanguage: m, targetLanguage: h } = q(t), w = iV(() => p.value.targetTitle), f = mc();
    return rV(
      w,
      () => f(
        h.value,
        m.value,
        w.value
      ),
      { immediate: !0 }
    ), (_, S) => (to(), Pa("section", eV, [
      Mr(z3, {
        "discarded-sections": $e(u),
        "onUpdate:discardedSections": S[0] || (S[0] = (y) => Z3(u) ? u.value = y : null),
        onTranslationButtonClicked: r,
        onClose: a
      }, null, 8, ["discarded-sections"]),
      Mr(v3, {
        "source-vs-target-selection": o.value,
        "onUpdate:sourceVsTargetSelection": S[1] || (S[1] = (y) => o.value = y),
        "is-mapped-section": $e(d),
        onTranslationButtonClicked: r
      }, null, 8, ["source-vs-target-selection", "is-mapped-section"]),
      Ba("section", tV, [
        o.value === "source_section" ? (to(), Pa(Nr, { key: 0 }, [
          $e(i) ? yg("", !0) : (to(), Sg($e(Ue), { key: 0 })),
          Ba("section", {
            lang: $e(m),
            dir: $e(I.getDir)($e(m)),
            class: "pt-2 px-4",
            innerHTML: $e(i)
          }, null, 8, nV)
        ], 64)) : o.value === "target_article" ? (to(), Pa(Nr, { key: 1 }, [
          $e(g) ? yg("", !0) : (to(), Sg($e(Ue), { key: 0 })),
          Ba("article", {
            lang: $e(h),
            dir: $e(I.getDir)($e(h)),
            class: "px-4",
            innerHTML: $e(g)
          }, null, 8, oV)
        ], 64)) : (to(), Pa(Nr, { key: 2 }, [
          Ba("section", {
            class: "pa-4",
            innerHTML: $e(c)
          }, null, 8, sV),
          Mr(dh, {
            "placeholder-title": _.$i18n("cx-sx-content-comparator-present-section-placeholder-title"),
            "placeholder-subtitle": _.$i18n(
              "cx-sx-content-comparator-present-section-placeholder-subtitle"
            )
          }, null, 8, ["placeholder-title", "placeholder-subtitle"])
        ], 64))
      ])
    ]));
  }
};
const uV = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: cV
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, dV = window.Vue.resolveComponent, gV = window.Vue.createVNode, pV = window.Vue.normalizeClass, mV = window.Vue.openBlock, hV = window.Vue.createElementBlock;
function wV(e, t, n, o, s, a) {
  const r = dV("sx-content-comparator");
  return mV(), hV("main", {
    class: pV(["sx-content-comparator-view", a.classes])
  }, [
    gV(r)
  ], 2);
}
const fV = /* @__PURE__ */ z(uV, [["render", wV]]);
const _V = window.Vue.resolveDirective, Zo = window.Vue.createElementVNode, Cg = window.Vue.withDirectives, Fa = window.Vue.unref, Ur = window.Vue.createVNode, kg = window.Vue.toDisplayString, bg = window.Vue.createTextVNode, es = window.Vue.withCtx, vV = window.Vue.openBlock, SV = window.Vue.createBlock, yV = { class: "mw-ui-dialog__header px-4 py-3" }, CV = { class: "mw-ui-dialog__header-title" }, kV = { class: "pa-4" }, bV = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, xg = window.Codex.CdxButton, xV = {
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
      const u = _V("i18n");
      return vV(), SV(Fa(et), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        "overlay-opacity": 0.7,
        "overlay-color": r.$mwui.colors.gray700
      }, {
        header: es(() => [
          Zo("div", yV, [
            Cg(Zo("span", CV, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: es(() => [
          Zo("div", bV, [
            Ur(Fa(xg), {
              weight: "quiet",
              onClick: s
            }, {
              default: es(() => [
                bg(kg(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            Ur(Fa(xg), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: es(() => [
                bg(kg(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: es(() => [
          Ur(Fa(ei)),
          Zo("div", kV, [
            Cg(Zo("span", null, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "overlay-color"]);
    };
  }
}, $V = window.Vuex.useStore, vc = () => {
  const e = $V(), { sourceSection: t } = K(), { getCurrentTitleByLanguage: n } = Wt(), o = (l, u, d) => {
    if (l === 0) {
      t.value.proposedTitleTranslations[u] = d;
      return;
    }
    const i = t.value.getContentTranslationUnitById(l);
    i instanceof Me ? i.blockTemplateProposedTranslations[u] = d : i instanceof wn && i.addProposedTranslation(u, d);
  }, s = (l, u) => C(void 0, null, function* () {
    const { sourceLanguage: d, targetLanguage: i } = e.state.application;
    if (!e.getters["mediawiki/isValidProviderForTranslation"](d, i, l))
      return "";
    try {
      const g = yield e.dispatch("application/getCXServerToken");
      return yield Ze.fetchSegmentTranslation(
        d,
        i,
        l,
        u,
        g
      );
    } catch (g) {
      return mw.log.error("Error while translating segment", g), "";
    }
  }), a = (l, u) => C(void 0, null, function* () {
    const { sourceLanguage: d, targetLanguage: i } = e.state.application;
    if (t.value.hasProposedTranslationByTranslationUnitId(
      l,
      u
    ))
      return;
    let c = t.value.getOriginalContentByTranslationUnitId(l);
    const g = t.value.getContentTranslationUnitById(l);
    let p;
    if (e.commit("application/addMtRequestsPending", l), p = yield s(u, c), !p) {
      e.commit("application/removeMtRequestsPending", l);
      return;
    }
    g instanceof Me && (g.setBlockTemplateAdaptationInfoByHtml(
      u,
      p
    ), p = (yield Sv(
      p,
      n(i, d),
      i
    )) || ""), o(
      l,
      u,
      p
    ), e.commit("application/removeMtRequestsPending", l);
  });
  return {
    translateTranslationUnitById: a,
    translateSelectedTranslationUnitForAllProviders: () => {
      const { sourceLanguage: l, targetLanguage: u } = e.state.application, d = e.getters["mediawiki/getSupportedMTProviders"](
        l,
        u
      ), { selectedTranslationUnitId: i } = t.value;
      d.forEach(
        (c) => a(i, c)
      );
    }
  };
}, VV = window.Vuex.useStore, EV = () => {
  const { sourceSection: e } = K(), t = VV(), { translateTranslationUnitById: n } = vc();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
const Ir = window.Vue.computed, AV = window.Vuex.useStore, DV = {
  name: "SxTranslationSelector",
  components: { MwCard: dt, MwButton: he, MwDialog: et },
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, t) {
    const n = Y.EMPTY_TEXT_PROVIDER_KEY, o = Y.ORIGINAL_TEXT_PROVIDER_KEY, s = AV(), {
      sourceSection: a,
      isSectionTitleSelected: r,
      selectedContentTranslationUnit: l
    } = K(), { sourceLanguage: u, targetLanguage: d } = q(s), i = Ir(
      () => s.getters["mediawiki/getSupportedMTProviders"](
        u.value,
        d.value
      )
    ), c = Ir(() => {
      const f = [o, n];
      return i.value.filter(
        (_) => !f.includes(_)
      );
    }), g = Ir(
      () => r.value ? a.value.proposedTitleTranslations : l.value.proposedTranslations
    ), p = EV(), m = (f) => {
      p(f), w();
    }, h = Y.getMTProviderLabel, w = () => t.emit("update:active", !1);
    return {
      apiMtProviders: c,
      close: w,
      emptyTextProviderKey: n,
      getDir: I.getDir,
      getMTProviderLabel: h,
      mwIconClose: Ds,
      originalTextProviderKey: o,
      proposedTranslations: g,
      selectProvider: m,
      sourceLanguage: u
    };
  }
}, LV = window.Vue.resolveDirective, Je = window.Vue.createElementVNode, Ma = window.Vue.withDirectives, Rr = window.Vue.resolveComponent, zr = window.Vue.createVNode, un = window.Vue.withCtx, TV = window.Vue.renderList, BV = window.Vue.Fragment, Or = window.Vue.openBlock, PV = window.Vue.createElementBlock, FV = window.Vue.toDisplayString, $g = window.Vue.createBlock, MV = window.Vue.createCommentVNode, NV = { class: "mw-ui-dialog__header pa-4" }, UV = { class: "row ma-0 py-2" }, IV = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, RV = { class: "mb-0" }, zV = { class: "col shrink justify-center" }, OV = { class: "pb-2 mb-0" }, HV = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, jV = ["dir", "lang", "innerHTML"], qV = ["textContent"], GV = ["innerHTML"], XV = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, WV = /* @__PURE__ */ Je("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1);
function KV(e, t, n, o, s, a) {
  const r = Rr("mw-button"), l = Rr("mw-card"), u = Rr("mw-dialog"), d = LV("i18n");
  return n.active ? (Or(), $g(u, {
    key: 0,
    class: "sx-sentence-selector__translation-options",
    fullscreen: ""
  }, {
    header: un(() => [
      Je("div", NV, [
        Je("div", UV, [
          Je("div", IV, [
            Ma(Je("h4", RV, null, 512), [
              [d, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
            ])
          ]),
          Je("div", zV, [
            zr(r, {
              type: "icon",
              icon: o.mwIconClose,
              class: "pa-0",
              onClick: o.close
            }, null, 8, ["icon", "onClick"])
          ])
        ]),
        Ma(Je("h6", OV, null, 512), [
          [d, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
        ])
      ])
    ]),
    default: un(() => [
      zr(l, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: t[0] || (t[0] = (i) => o.selectProvider(o.originalTextProviderKey))
      }, {
        header: un(() => [
          Ma(Je("h5", HV, null, 512), [
            [d, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
          ])
        ]),
        default: un(() => [
          Je("p", {
            dir: o.getDir(o.sourceLanguage),
            lang: o.sourceLanguage,
            innerHTML: o.proposedTranslations[o.originalTextProviderKey]
          }, null, 8, jV)
        ]),
        _: 1
      }),
      (Or(!0), PV(BV, null, TV(o.apiMtProviders, (i) => (Or(), $g(l, {
        key: i,
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: (c) => o.selectProvider(i)
      }, {
        header: un(() => [
          Je("h5", {
            class: "sx-sentence-selector__translation-options-card-title mb-4",
            textContent: FV(o.getMTProviderLabel(i))
          }, null, 8, qV)
        ]),
        default: un(() => [
          Je("p", {
            innerHTML: o.proposedTranslations[i]
          }, null, 8, GV)
        ]),
        _: 2
      }, 1032, ["onClick"]))), 128)),
      zr(l, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: t[1] || (t[1] = (i) => o.selectProvider(o.emptyTextProviderKey))
      }, {
        header: un(() => [
          Ma(Je("h5", XV, null, 512), [
            [d, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
          ])
        ]),
        default: un(() => [
          WV
        ]),
        _: 1
      })
    ]),
    _: 1
  })) : MV("", !0);
}
const YV = /* @__PURE__ */ z(DV, [["render", KV]]), JV = window.Vuex.useStore, Co = () => {
  const { sourceSection: e } = K(), t = JV(), { translateTranslationUnitById: n } = vc(), { currentMTProvider: o } = q(t), s = (l) => C(void 0, null, function* () {
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
const QV = window.Vue.toDisplayString, Hr = window.Vue.createElementVNode, jr = window.Vue.unref, ZV = window.Vue.createVNode, e5 = window.Vue.normalizeClass, t5 = window.Vue.withCtx, n5 = window.Vue.openBlock, o5 = window.Vue.createBlock, s5 = ["href"], a5 = ["textContent"], i5 = ["innerHTML"], no = window.Vue.computed, r5 = window.Vuex.useStore, Vg = "sx-sentence-selector__section-title", l5 = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const t = r5(), { sourceSection: n, isSectionTitleSelected: o } = K(), { currentSourcePage: s } = He(), { sourceLanguage: a } = q(t), r = no(() => {
      var m;
      return (m = s.value) == null ? void 0 : m.title;
    }), l = no(
      () => {
        var m;
        return ((m = n.value) == null ? void 0 : m.title) || r.value;
      }
    ), u = no(
      () => G.getPageUrl(a.value, r.value)
    ), d = no(
      () => {
        var m;
        return !!((m = n.value) != null && m.translatedTitle);
      }
    ), i = no(
      () => d.value ? "translated" : "selected"
    ), c = no(() => {
      const m = [Vg];
      return o.value && m.push(`${Vg}--${i.value}`), m;
    }), { selectTranslationUnitById: g } = Co(), p = () => g(0);
    return (m, h) => (n5(), o5(jr(k), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: t5(() => [
        Hr("a", {
          href: u.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          Hr("strong", {
            textContent: QV(r.value)
          }, null, 8, a5),
          ZV(jr(be), {
            icon: jr(Ip),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, s5),
        Hr("h2", {
          class: e5(["pa-0 ma-0", c.value]),
          onClick: p,
          innerHTML: l.value
        }, null, 10, i5)
      ]),
      _: 1
    }));
  }
};
const wt = window.Vue.unref, ts = window.Vue.createVNode, Na = window.Vue.withCtx, Eg = window.Vue.toDisplayString, Ag = window.Vue.createTextVNode, c5 = window.Vue.openBlock, u5 = window.Vue.createBlock, d5 = window.Vue.computed, qr = window.Codex.CdxButton, Dg = window.Codex.CdxIcon, gh = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = K(), s = d5(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, r) => (c5(), u5(wt(B), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: Na(() => [
        ts(wt(qr), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: wt(n),
          onClick: r[0] || (r[0] = (l) => a.$emit("select-previous-segment"))
        }, {
          default: Na(() => [
            ts(wt(Dg), {
              class: "me-1",
              icon: wt(lc)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        ts(wt(qr), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !wt(o),
          onClick: r[1] || (r[1] = (l) => a.$emit("apply-translation"))
        }, {
          default: Na(() => [
            Ag(Eg(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        ts(wt(qr), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: r[2] || (r[2] = (l) => a.$emit("skip-translation"))
        }, {
          default: Na(() => [
            Ag(Eg(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            ts(wt(Dg), {
              class: "ms-1",
              size: "small",
              icon: wt(Os)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const Bn = window.Vue.unref, g5 = window.Vue.toDisplayString, ns = window.Vue.createVNode, Ua = window.Vue.withCtx, p5 = window.Vue.openBlock, m5 = window.Vue.createBlock, Gr = window.Vue.computed, h5 = window.Vuex.useStore, w5 = window.Codex.CdxButton, f5 = window.Codex.CdxIcon, _5 = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = h5(), n = Gr(() => t.state.application.currentMTProvider), o = ge(), s = Gr(() => ({
      [Y.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [Y.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = Gr(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        Y.getMTProviderLabel(n.value)
      )
    );
    return (r, l) => (p5(), m5(Bn(k), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: Ua(() => [
        ns(Bn(B), { class: "ma-0 ps-5 pb-4" }, {
          default: Ua(() => [
            ns(Bn(k), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: g5(a.value)
            }, null, 8, ["textContent"]),
            ns(Bn(k), {
              shrink: "",
              class: "pe-5"
            }, {
              default: Ua(() => [
                ns(Bn(w5), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: l[0] || (l[0] = (u) => r.$emit("configure-options"))
                }, {
                  default: Ua(() => [
                    ns(Bn(f5), {
                      class: "pa-0",
                      icon: Bn(ic)
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
const rt = window.Vue.unref, dn = window.Vue.createVNode, v5 = window.Vue.resolveDirective, Lg = window.Vue.createElementVNode, S5 = window.Vue.withDirectives, Tg = window.Vue.toDisplayString, Bg = window.Vue.createTextVNode, os = window.Vue.withCtx, y5 = window.Vue.openBlock, C5 = window.Vue.createElementBlock, k5 = { class: "mt-retry-body pb-5" }, b5 = { class: "retry-body__message" }, Pg = window.Codex.CdxButton, Xr = window.Codex.CdxIcon, x5 = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = v5("i18n");
      return y5(), C5("div", k5, [
        Lg("div", b5, [
          dn(rt(Xr), {
            class: "me-2",
            icon: rt(Hm)
          }, null, 8, ["icon"]),
          S5(Lg("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        dn(rt(B), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: os(() => [
            dn(rt(k), { cols: "6" }, {
              default: os(() => [
                dn(rt(Pg), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: os(() => [
                    dn(rt(Xr), {
                      class: "me-1",
                      icon: rt(Wm)
                    }, null, 8, ["icon"]),
                    Bg(" " + Tg(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            dn(rt(k), { cols: "6" }, {
              default: os(() => [
                dn(rt(Pg), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: os(() => [
                    dn(rt(Xr), {
                      class: "me-1",
                      icon: rt(ck)
                    }, null, 8, ["icon"]),
                    Bg(" " + Tg(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const oo = window.Vue.createVNode, Be = window.Vue.unref, ss = window.Vue.openBlock, $5 = window.Vue.createElementBlock, V5 = window.Vue.createCommentVNode, Ia = window.Vue.createBlock, E5 = window.Vue.normalizeClass, A5 = window.Vue.normalizeStyle, as = window.Vue.withCtx, D5 = window.Vue.toDisplayString, L5 = window.Vue.createTextVNode, T5 = window.Vue.normalizeProps, B5 = window.Vue.guardReactiveProps, P5 = ["lang", "dir", "innerHTML"], Wr = window.Vue.ref, F5 = window.Vue.onMounted, M5 = window.Vue.onBeforeUnmount, Kr = window.Vue.computed, N5 = window.Vue.nextTick, U5 = window.Vuex.useStore, I5 = window.Codex.CdxButton, R5 = window.Codex.CdxIcon, z5 = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = Wr(0), n = Wr(null), o = Wr(null), s = U5(), { currentMTProvider: a, targetLanguage: r } = q(s), { sourceSection: l, currentProposedTranslation: u } = K(), d = Kr(
      () => {
        var m, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (m = l.value) == null ? void 0 : m.selectedTranslationUnitId
        );
      }
    ), i = Kr(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), c = Kr(
      () => !!u.value || a.value === Y.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    F5(() => C(this, null, function* () {
      yield N5(), g(), p.observe(n.value.$el), p.observe(o.value.$el);
    })), M5(() => {
      p.unobserve(n.value.$el), p.unobserve(o.value.$el);
    });
    const p = new ResizeObserver(() => g());
    return (m, h) => (ss(), Ia(Be(dt), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: as(() => [
        oo(Be(B), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: as(() => [
            oo(_5, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (w) => m.$emit("configure-options"))
            }, null, 512),
            oo(Be(k), {
              class: E5(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !c.value && d.value
              }]),
              style: A5(c.value ? i.value : null)
            }, {
              default: as(() => [
                c.value ? (ss(), $5("section", {
                  key: 0,
                  lang: Be(r),
                  dir: Be(I.getDir)(Be(r)),
                  innerHTML: Be(u)
                }, null, 8, P5)) : d.value ? (ss(), Ia(Be(Ue), { key: 1 })) : (ss(), Ia(x5, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (w) => m.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (w) => m.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            oo(Be(k), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: as(() => [
                c.value || d.value ? (ss(), Ia(Be(I5), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !c.value,
                  onClick: h[3] || (h[3] = (w) => m.$emit("edit-translation", Be(u)))
                }, {
                  default: as(() => [
                    oo(Be(R5), {
                      class: "me-1",
                      icon: Be(ac)
                    }, null, 8, ["icon"]),
                    L5(" " + D5(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : V5("", !0),
                oo(gh, T5(B5(m.$attrs)), null, 16)
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
}, O5 = window.Vue.computed, H5 = (e) => O5(() => {
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
const j5 = window.Vue.onMounted, q5 = window.Vue.ref, G5 = window.Vue.computed, X5 = {
  name: "SubSection",
  props: {
    subSection: {
      type: Me,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = q5(null), o = H5(e.subSection);
    j5(() => {
      n.value.addEventListener("click", (l) => {
        let u;
        if (e.subSection.isBlockTemplate)
          u = e.subSection;
        else {
          const d = l.composedPath().find(
            (i) => i instanceof Element && i.classList.contains("cx-segment")
          );
          if (!d)
            return;
          u = e.subSection.getSentenceById(
            d.dataset.segmentid
          );
        }
        a(u);
      });
    });
    const { selectTranslationUnitById: s } = Co(), a = (l) => {
      if (l.selected) {
        t("bounce-translation");
        return;
      }
      s(l.id);
    }, r = G5(() => ({
      "sx-sentence-selector__subsection--block-selected": e.subSection.selected
    }));
    return {
      content: o,
      rootClasses: r,
      subSectionRoot: n
    };
  }
}, W5 = window.Vue.normalizeClass, K5 = window.Vue.openBlock, Y5 = window.Vue.createElementBlock, J5 = ["innerHTML"];
function Q5(e, t, n, o, s, a) {
  return K5(), Y5("div", {
    ref: "subSectionRoot",
    class: W5(["sx-sentence-selector__subsection", o.rootClasses]),
    innerHTML: o.content
  }, null, 10, J5);
}
const Z5 = /* @__PURE__ */ z(X5, [["render", Q5]]);
const Fg = window.Vue.computed, eE = {
  name: "BlockTemplateStatusIndicator",
  components: {
    MwCircleProgressBar: e1,
    MwIcon: be
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
    const t = Fg(() => ({ "--size": e.size })), n = Fg(
      () => !e.isTemplateAdapted || e.percentage === 0 ? zl : uo
    );
    return {
      cssVars: t,
      statusIcon: n
    };
  }
}, Mg = window.Vue.resolveComponent, Ng = window.Vue.createVNode, Ug = window.Vue.normalizeStyle, tE = window.Vue.openBlock, nE = window.Vue.createElementBlock;
function oE(e, t, n, o, s, a) {
  const r = Mg("mw-circle-progress-bar"), l = Mg("mw-icon");
  return tE(), nE("div", {
    class: "block-template-status-indicator",
    style: Ug(o.cssVars)
  }, [
    Ng(r, {
      percentage: n.percentage,
      size: n.size,
      "stroke-width": n.strokeWidth
    }, null, 8, ["percentage", "size", "stroke-width"]),
    Ng(l, {
      icon: o.statusIcon,
      size: n.size / 2,
      style: Ug({
        left: `calc(50% - ${n.size / 4}px)`,
        top: `calc(50% - ${n.size / 4}px)`
      })
    }, null, 8, ["icon", "size", "style"])
  ], 4);
}
const ph = /* @__PURE__ */ z(eE, [["render", oE]]), sE = window.Vuex.useStore, is = window.Vue.computed, aE = {
  name: "SxBlockTemplateStatusDialog",
  components: {
    MwCol: k,
    MwRow: B,
    MwIcon: be,
    MwDialog: et,
    BlockTemplateStatusIndicator: ph
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
    const { targetLanguageAutonym: t } = q(sE()), n = is(
      () => !e.isTemplateAdapted || o.value === 0 ? zl : uo
    ), o = is(
      () => e.targetParamsCount / (e.sourceParamsCount + e.mandatoryMissingParamsCount) * 100
    ), s = ge(), a = is(() => {
      let u;
      return e.targetTemplateExists ? e.isTemplateAdapted ? o.value < 100 ? u = "cx-sx-block-template-mapping-status-title-partially-template" : u = "cx-sx-block-template-mapping-status-title-fully-template" : u = "cx-sx-block-template-mapping-status-title-unadapted-template" : u = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(u);
    }), r = is(() => {
      let u;
      return !e.targetTemplateExists || !e.isTemplateAdapted ? u = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? u = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : u = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(u);
    }), l = is(() => {
      let u = [];
      if (!e.targetTemplateExists)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            t.value
          ),
          icon: _f,
          color: Qe.gray500
        });
      else if (!e.isTemplateAdapted)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            e.sourceParamsCount
          ),
          icon: Ds,
          color: Qe.gray500
        });
      else if (o.value < 100)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            e.targetParamsCount,
            e.sourceParamsCount
          ),
          icon: uo,
          color: Qe.blue600
        });
      else {
        let d;
        e.sourceParamsCount ? d = s.i18n(
          "cx-sx-block-template-mapped-params-text",
          e.targetParamsCount,
          e.sourceParamsCount
        ) : d = s.i18n(
          "cx-sx-block-template-no-source-params-text"
        ), u.push({
          text: d,
          icon: uo,
          color: Qe.blue600
        });
      }
      return e.mandatoryMissingParamsCount ? u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          e.mandatoryMissingParamsCount,
          t.value
        ),
        icon: ti,
        color: Qe.gray500
      }) : e.targetTemplateExists && e.isTemplateAdapted && e.optionalMissingParamsCount && u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          e.optionalMissingParamsCount,
          t.value
        ),
        icon: Zw,
        color: Qe.gray500
      }), u;
    });
    return {
      adaptationRatio: o,
      statusIcon: n,
      statusExplanation: r,
      statusText: a,
      mwIconCheck: uo,
      mwIconInfo: tf,
      notes: l
    };
  }
}, rs = window.Vue.resolveComponent, ls = window.Vue.openBlock, Ra = window.Vue.createBlock;
window.Vue.createCommentVNode;
const so = window.Vue.withCtx, cs = window.Vue.createVNode, Yr = window.Vue.toDisplayString, Jr = window.Vue.createElementVNode, iE = window.Vue.renderList, rE = window.Vue.Fragment, lE = window.Vue.createElementBlock, cE = { class: "pa-4" }, uE = ["textContent"], dE = ["textContent"];
function gE(e, t, n, o, s, a) {
  const r = rs("block-template-status-indicator"), l = rs("mw-icon"), u = rs("mw-col"), d = rs("mw-row"), i = rs("mw-dialog");
  return ls(), Ra(i, {
    value: n.active,
    class: "sx-block-template-status-dialog",
    title: e.$i18n("cx-sx-publisher-preview-options-title"),
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.gray700,
    onInput: t[0] || (t[0] = (c) => e.$emit("update:active", c))
  }, {
    header: so(() => [
      cs(d, {
        justify: "center",
        class: "mt-4"
      }, {
        default: so(() => [
          cs(u, { shrink: "" }, {
            default: so(() => [
              n.targetTemplateExists ? (ls(), Ra(r, {
                key: 0,
                percentage: o.adaptationRatio,
                size: 40,
                "is-template-adapted": n.isTemplateAdapted,
                "stroke-width": 3
              }, null, 8, ["percentage", "is-template-adapted"])) : (ls(), Ra(l, {
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
    default: so(() => [
      Jr("div", cE, [
        Jr("h3", {
          textContent: Yr(o.statusText)
        }, null, 8, uE),
        Jr("p", {
          class: "mt-6 text-small",
          textContent: Yr(o.statusExplanation)
        }, null, 8, dE),
        (ls(!0), lE(rE, null, iE(o.notes, (c, g) => (ls(), Ra(d, {
          key: g,
          align: "start",
          class: "mt-4"
        }, {
          default: so(() => [
            cs(u, { shrink: "" }, {
              default: so(() => [
                cs(l, {
                  class: "me-2",
                  icon: c.icon,
                  "icon-color": c.color
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 2
            }, 1024),
            cs(u, {
              textContent: Yr(c.text)
            }, null, 8, ["textContent"])
          ]),
          _: 2
        }, 1024))), 128))
      ])
    ]),
    _: 1
  }, 8, ["value", "title", "overlay-color"]);
}
const pE = /* @__PURE__ */ z(aE, [["render", gE]]);
const me = window.Vue.unref, Ce = window.Vue.createVNode, ft = window.Vue.withCtx, Qr = window.Vue.toDisplayString, Ig = window.Vue.createTextVNode, mE = window.Vue.resolveDirective, Rg = window.Vue.withDirectives, zg = window.Vue.createElementVNode, hE = window.Vue.normalizeClass, za = window.Vue.openBlock, Og = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Hg = window.Vue.createBlock, wE = window.Vue.normalizeProps, fE = window.Vue.guardReactiveProps, _E = { class: "block-template-adaptation-card__container pa-4" }, vE = ["textContent"], SE = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, Ae = window.Vue.computed, yE = window.Vue.ref, CE = window.Vuex.useStore, jg = window.Codex.CdxButton, qg = window.Codex.CdxIcon, kE = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = CE(), { targetLanguageAutonym: n, currentMTProvider: o } = q(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = K(), r = Ae(() => {
      var T;
      return ((T = s.value) == null ? void 0 : T.blockTemplateTranslatedContent) || a.value;
    }), l = Ae(
      () => {
        var V;
        return (V = s.value) == null ? void 0 : V.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), u = Ae(
      () => {
        var V;
        return !((V = t.state.application.mtRequestsPending) != null && V.includes(
          s.value.id
        ));
      }
    ), d = ge(), i = Ae(
      // Strip HTML comments and return
      () => {
        var V, T;
        return ((T = (V = s.value) == null ? void 0 : V.sourceBlockTemplateName) == null ? void 0 : T.replace(
          /<\!--.*?-->/g,
          ""
        )) || d.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), c = Ae(
      () => {
        var V, T;
        return (T = (V = s.value) == null ? void 0 : V.blockTemplateAdaptationInfo) == null ? void 0 : T[o.value];
      }
    ), g = Ae(
      () => {
        var V, T;
        return ((V = c.value) == null ? void 0 : V.adapted) || !!((T = c.value) != null && T.partial);
      }
    ), p = Ae(() => c.value ? "block-template-adaptation-card__body--" + (g.value ? "success" : "warning") : null), m = Ae(() => c.value ? g.value ? d.i18n("sx-block-template-adaptation-card-edit-button-label") : d.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), h = Ae(
      () => {
        var V;
        return Object.keys(((V = s.value) == null ? void 0 : V.sourceTemplateParams) || {}).length;
      }
    ), w = Ae(() => {
      var T;
      const V = (T = s.value) == null ? void 0 : T.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(V || {});
    }), f = Ae(() => w.value.length), _ = Ae(() => {
      const V = E.value;
      return h.value + V === 0 ? 100 : f.value / (h.value + V) * 100 || 0;
    }), S = yE(!1), y = () => {
      S.value = !0;
    }, b = (V) => V.filter((T) => !w.value.includes(T)), E = Ae(() => {
      var T;
      const V = ((T = c.value) == null ? void 0 : T.mandatoryTargetParams) || [];
      return b(V).length;
    }), M = Ae(() => {
      var T;
      const V = ((T = c.value) == null ? void 0 : T.optionalTargetParams) || [];
      return b(V).length;
    });
    return (V, T) => {
      const H = mE("i18n");
      return za(), Hg(me(dt), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: ft(() => [
          zg("div", _E, [
            Ce(me(B), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: ft(() => [
                Ce(me(k), { shrink: "" }, {
                  default: ft(() => [
                    Ce(me(qg), {
                      icon: me(uk),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                Ce(me(k), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: ft(() => [
                    Ig(Qr(i.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            l.value ? (za(), Og("div", {
              key: 0,
              class: hE(["pa-4 mb-4", p.value])
            }, [
              Ce(me(B), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: ft(() => [
                  Rg(Ce(me(k), { tag: "h5" }, null, 512), [
                    [H, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  Ce(me(k), { shrink: "" }, {
                    default: ft(() => [
                      Ce(ph, {
                        percentage: _.value,
                        size: 20,
                        "is-template-adapted": g.value,
                        "stroke-width": 2,
                        onClick: y
                      }, null, 8, ["percentage", "is-template-adapted"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              zg("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: Qr(l.value)
              }, null, 8, vE),
              Ce(me(jg), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: T[0] || (T[0] = (P) => V.$emit("edit-translation", r.value))
              }, {
                default: ft(() => [
                  Ig(Qr(m.value), 1)
                ]),
                _: 1
              })
            ], 2)) : u.value ? (za(), Og("div", SE, [
              Ce(me(B), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: ft(() => [
                  Rg(Ce(me(k), { tag: "h5" }, null, 512), [
                    [H, [
                      me(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  Ce(me(k), { shrink: "" }, {
                    default: ft(() => [
                      Ce(me(jg), {
                        weight: "quiet",
                        "aria-label": V.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: ft(() => [
                          Ce(me(qg), {
                            icon: me(rk),
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
            ])) : (za(), Hg(me(Ue), { key: 2 }))
          ]),
          Ce(gh, wE(fE(V.$attrs)), null, 16),
          Ce(pE, {
            active: S.value,
            "onUpdate:active": T[1] || (T[1] = (P) => S.value = P),
            "source-params-count": h.value,
            "target-params-count": f.value,
            "mandatory-missing-params-count": E.value,
            "optional-missing-params-count": M.value,
            "is-template-adapted": g.value,
            "target-template-exists": !!l.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const bE = window.Vue.computed, xE = {
  name: "TranslatedSegmentCardHeader",
  components: { MwButtonGroup: As },
  props: {
    selection: {
      type: String,
      required: !0,
      validator: (e) => ["sentence", "paragraph"].includes(e)
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const { isSectionTitleSelected: n } = K(), o = ge();
    return { scopeOptions: bE(() => [
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
    ]), updateSelection: (r) => t("update:selection", r) };
  }
}, $E = window.Vue.resolveComponent, VE = window.Vue.createVNode, EE = window.Vue.openBlock, AE = window.Vue.createElementBlock, DE = { class: "translated-segment-card-header" };
function LE(e, t, n, o, s, a) {
  const r = $E("mw-button-group");
  return EE(), AE("div", DE, [
    VE(r, {
      items: o.scopeOptions,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const TE = /* @__PURE__ */ z(xE, [["render", LE]]);
const gn = window.Vue.unref, Oa = window.Vue.createVNode, Zr = window.Vue.withCtx, BE = window.Vue.openBlock, PE = window.Vue.createBlock, FE = window.Vue.computed, Gg = window.Codex.CdxButton, Xg = window.Codex.CdxIcon, ME = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "skip-translation"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = K(), o = FE(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (BE(), PE(gn(B), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: Zr(() => [
        Oa(gn(Gg), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: gn(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => s.$emit("select-previous-segment"))
        }, {
          default: Zr(() => [
            Oa(gn(Xg), { icon: gn(lc) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        Oa(gn(Gg), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => s.$emit("skip-translation"))
        }, {
          default: Zr(() => [
            Oa(gn(Xg), { icon: gn(Os) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
};
const NE = window.Vue.useCssVars, ke = window.Vue.createVNode, Wg = window.Vue.resolveDirective, UE = window.Vue.createElementVNode, el = window.Vue.withDirectives, le = window.Vue.unref, IE = window.Vue.normalizeStyle, Ha = window.Vue.openBlock, Kg = window.Vue.createElementBlock, RE = window.Vue.createCommentVNode, zE = window.Vue.normalizeClass, Ke = window.Vue.withCtx, OE = window.Vue.toDisplayString, HE = window.Vue.createTextVNode, Yg = window.Vue.createBlock, jE = window.Vue.normalizeProps, qE = window.Vue.guardReactiveProps, Ot = window.Vue.computed, GE = window.Vue.ref, XE = window.Vue.inject, WE = window.Vuex.useStore, KE = window.Codex.CdxButton, tl = window.Codex.CdxIcon, YE = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    NE((_) => ({
      "4929555c": f.value
    }));
    const t = GE("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = K(), { targetLanguage: a } = q(WE()), r = Ot(() => t.value === "sentence"), l = Ot(
      () => n.value.subSections.find(
        (_) => _.sentences.some(
          (S) => {
            var y;
            return S.id === ((y = o.value) == null ? void 0 : y.id);
          }
        )
      )
    ), u = Ot(() => {
      var _;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : r.value ? (_ = o.value) == null ? void 0 : _.mtProposedTranslationUsed : l.value.proposedContentForMTValidation;
    }), d = XE("colors"), i = d.gray200, c = d.red600, g = Ot(() => s.value ? n.value.translatedTitle : r.value ? o.value.translatedContent : l.value.translatedContent), p = Ot(
      () => yt.calculateScore(
        g.value,
        u.value,
        a.value
      )
    ), m = Ot(
      () => yt.getScoreStatus(p.value)
    ), h = Ot(
      () => `translated-segment-card__modification-stats__percentage--${m.value}`
    ), w = Ot(() => ({
      failure: p.value === 0 ? null : d.yellow700,
      warning: d.yellow700,
      success: d.green600
    })), f = Ot(
      () => w.value[m.value]
    );
    return (_, S) => {
      const y = Wg("i18n"), b = Wg("i18n-html");
      return Ha(), Yg(le(dt), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: Ke(() => [
          ke(le(B), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: Ke(() => [
              ke(TE, {
                selection: t.value,
                "onUpdate:selection": S[0] || (S[0] = (E) => t.value = E)
              }, null, 8, ["selection"]),
              ke(le(k), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: Ke(() => [
                  ke(le(B), { class: "ma-0" }, {
                    default: Ke(() => [
                      ke(le(k), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: Ke(() => [
                          el(UE("h5", null, null, 512), [
                            [y, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          p.value === 0 ? el((Ha(), Kg("p", {
                            key: 0,
                            style: IE({ color: le(c) })
                          }, null, 4)), [
                            [y, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : el((Ha(), Kg("p", {
                            key: 1,
                            class: zE(h.value)
                          }, null, 2)), [
                            [b, [
                              p.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      ke(le(k), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: Ke(() => [
                          ke(le(B), { class: "ma-0 ms-2" }, {
                            default: Ke(() => [
                              ke(le(k), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: Ke(() => [
                                  ke(le(tl), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: le(pk)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              ke(le(k), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: Ke(() => [
                                  ke(le(Rp), {
                                    value: p.value,
                                    height: "4px",
                                    width: "64px",
                                    color: f.value,
                                    background: le(i)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              ke(le(k), { shrink: "" }, {
                                default: Ke(() => [
                                  ke(le(tl), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: le(dk)
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
                  r.value ? (Ha(), Yg(le(KE), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: S[1] || (S[1] = (E) => _.$emit("edit-translation", g.value))
                  }, {
                    default: Ke(() => [
                      ke(le(tl), {
                        class: "me-1",
                        icon: le(ac)
                      }, null, 8, ["icon"]),
                      HE(" " + OE(_.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : RE("", !0)
                ]),
                _: 1
              }),
              ke(le(k), { class: "translated-segment-card__actions" }, {
                default: Ke(() => [
                  ke(ME, jE(qE(_.$attrs)), null, 16)
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
}, JE = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = K(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = Co(), { currentTranslation: s } = Kt();
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
}, mh = window.Vuex.useStore, QE = () => {
  const e = mh(), { sourceLanguage: t, targetLanguage: n } = q(e);
  return () => C(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const o = yield si.fetchSupportedMTProviders(
      t.value,
      n.value
    );
    e.commit("mediawiki/addMtProviderGroup", o);
  });
}, ZE = () => {
  const e = mh(), { currentMTProvider: t, sourceLanguage: n, targetLanguage: o } = q(e), s = QE();
  return () => C(void 0, null, function* () {
    e.commit("application/increaseTranslationDataLoadingCounter"), yield s();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, o.value);
    if (!t.value || !a.includes(t.value)) {
      const r = Y.getStorageKey(
        n.value,
        o.value
      ), l = mw.storage.get(r) || a[0];
      e.commit("application/setCurrentMTProvider", l);
    }
    e.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, eA = window.Vue.computed, tA = (e) => {
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
}, nA = () => {
  const { selectedContentTranslationUnit: e } = K(), t = eA(
    () => e.value instanceof Me
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && tA(o);
  };
}, oA = (e, t) => {
  const { content: n, origin: o, baseSectionId: s, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const r = t.filter(
    (l) => !Y.isUserMTProvider(l)
  );
  if (o !== "source" && o !== "user" && !r.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, sA = window.Vue.computed, hh = () => {
  const { currentTranslation: e } = Kt(), { currentSourcePage: t } = He();
  return sA(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, aA = window.Vuex.useStore, Sc = () => {
  const e = aA(), { sourceSection: t, targetPageTitleForPublishing: n } = K(), { pageURLParameter: o } = F(), { sourceLanguage: s, targetLanguage: a } = q(e), r = hh();
  return () => {
    const l = n.value, u = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), d = `${r.value}_${t.value.id}`, i = t.value.getParallelCorporaUnits(d);
    i.forEach(
      (p) => oA(p, u)
    );
    const c = t.value.getTranslationProgress(a), g = e.getters["application/isSandboxTarget"];
    return Ze.saveTranslation({
      sourceTitle: o.value,
      targetTitle: l,
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
      progress: c
    });
  };
}, iA = window.Vue.effectScope, rA = window.Vue.onScopeDispose, lA = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = iA(!0), n = o.run(() => e(...a))), rA(s), n);
}, cA = window.Vuex.useStore;
let nl;
const uA = () => {
  const e = cA(), t = Sc();
  let n = 1e3, o = 0;
  return nl = uc(() => t().then((a) => {
    a instanceof go ? (n *= o + 1, o++, setTimeout(nl, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof wo)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), nl;
}, wh = lA(uA), dA = window.Vuex.useStore, gA = () => {
  const e = dA(), t = wh(), { currentMTProvider: n } = q(e), { sourceSection: o, currentProposedTranslation: s } = K(), { selectNextTranslationUnit: a } = Co();
  return () => C(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, pA = window.Vuex.useStore, mA = () => {
  const e = pA(), t = wh();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, hA = window.Vuex.useStore, wA = window.Vue.computed, fh = () => {
  const e = hA(), t = fe(), { currentTranslation: n } = Kt(), { currentMTProvider: o, previousRoute: s } = q(e), { currentTargetPage: a } = He(), {
    sourceLanguageURLParameter: r,
    targetLanguageURLParameter: l,
    pageURLParameter: u,
    sectionURLParameter: d
  } = F(), i = ze(), c = wA(() => {
    var f;
    const w = {
      translation_source_language: r.value,
      translation_target_language: l.value,
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
      const _ = n.value.targetSectionTitle;
      _ && (w.translation_target_section = _);
    } else
      a.value && (w.translation_target_title = (f = a.value) == null ? void 0 : f.title);
    return o.value && (w.translation_provider = Y.getProviderForInstrumentation(o.value)), w;
  });
  return {
    logEditorOpenEvent: () => {
      var y;
      const w = t.currentRoute.value.meta.workflowStep, _ = t.getRoutes().find(
        (b) => b.name === s.value
      ), S = ((y = _ == null ? void 0 : _.meta) == null ? void 0 : y.workflowStep) || 0;
      return w > S ? i(ie({
        event_type: "editor_open"
      }, c.value)) : Promise.resolve();
    },
    logEditorCloseEvent: () => i(ie({
      event_type: "editor_close"
    }, c.value)),
    logEditorCloseWarnEvent: () => i(ie({
      event_type: "editor_close_warn"
    }, c.value)),
    logEditorSegmentAddEvent: () => i(ie({
      event_type: "editor_segment_add"
    }, c.value))
  };
};
const ee = window.Vue.unref, Ye = window.Vue.createVNode, Ht = window.Vue.withCtx, fA = window.Vue.resolveDirective, Jg = window.Vue.createElementVNode, _A = window.Vue.withDirectives, vA = window.Vue.toDisplayString, SA = window.Vue.createTextVNode, yA = window.Vue.renderList, CA = window.Vue.Fragment, pn = window.Vue.openBlock, Qg = window.Vue.createElementBlock, ao = window.Vue.createBlock;
window.Vue.createCommentVNode;
const kA = window.Vue.normalizeClass, bA = window.Vue.normalizeStyle, xA = { class: "sx-sentence-selector__header-title mb-0" }, $A = { class: "sx-sentence-selector__section-contents px-4" }, io = window.Vue.computed, VA = window.Vue.nextTick, EA = window.Vue.onMounted, ja = window.Vue.ref, Zg = window.Vue.watch, AA = window.Vuex.useStore, ep = window.Codex.CdxButton, DA = window.Codex.CdxIcon, LA = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = ja(!1), n = ja(!1), o = ja("100%"), s = AA(), { currentMTProvider: a } = q(s), {
      sourceLanguageURLParameter: r,
      targetLanguageURLParameter: l
    } = F(), { sourceSection: u, selectedContentTranslationUnit: d } = K(), i = io(
      () => s.state.application.translationDataLoadingCounter === 0
    ), c = io(
      () => {
        var v;
        return (v = u.value) == null ? void 0 : v.isSelectedTranslationUnitTranslated;
      }
    ), g = io(() => {
      var v;
      return (v = u.value) == null ? void 0 : v.subSections;
    }), p = io(
      () => {
        var v;
        return (v = u.value) == null ? void 0 : v.selectedTranslationUnitOriginalContent;
      }
    ), m = io(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: h,
      logEditorCloseEvent: w,
      logEditorCloseWarnEvent: f,
      logEditorSegmentAddEvent: _
    } = fh(), S = JE();
    ZE()().then(h);
    const b = nA();
    EA(() => {
      Zg(
        i,
        () => C(this, null, function* () {
          i.value && (yield VA(), S(), b());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    }), Zg(d, b);
    const {
      selectNextTranslationUnit: E,
      selectPreviousTranslationUnit: M
    } = Co(), V = gA(), T = () => {
      _(), V();
    }, H = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, P = fe(), N = () => {
      const { autoSavePending: v } = s.state.application;
      if (v) {
        qe.value = !0, f();
        return;
      }
      kt();
    }, { fetchTranslationsByStatus: ae } = li(), J = mA(), { clearURLParameters: yn } = F(), { currentTranslation: Cn } = Kt(), kt = () => C(this, null, function* () {
      ae("draft"), Cn.value && (u.value.reset(), Cn.value.restored = !1), w(), yn(), J(), yield P.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: pt,
      translateSelectedTranslationUnitForAllProviders: bo
    } = vc(), kn = () => {
      $t.value || (t.value = !0, bo());
    }, { getCurrentTitleByLanguage: bt } = Wt(), je = (v, A) => {
      P.push({
        name: "sx-editor",
        state: {
          content: v,
          originalContent: p.value,
          title: bt(
            l.value,
            r.value
          ),
          isInitialEdit: A || null
        }
      });
    }, Yt = () => P.push({ name: "sx-publisher" }), xt = () => C(this, null, function* () {
      d.value ? yield pt(
        d.value.id,
        a.value
      ) : yield pt(0, a.value);
    }), $t = io(
      () => d.value instanceof Me
    ), qe = ja(!1);
    return (v, A) => {
      const D = fA("i18n");
      return pn(), Qg("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: bA(m.value)
      }, [
        Ye(ee(B), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: Ht(() => [
            Ye(ee(k), { shrink: "" }, {
              default: Ht(() => [
                Ye(ee(ep), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": v.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: N
                }, {
                  default: Ht(() => [
                    Ye(ee(DA), { icon: ee(jm) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            Ye(ee(k), {
              grow: "",
              class: "px-1"
            }, {
              default: Ht(() => [
                _A(Jg("h4", xA, null, 512), [
                  [D, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            Ye(ee(k), {
              shrink: "",
              class: "px-3"
            }, {
              default: Ht(() => [
                Ye(ee(ep), {
                  disabled: !(ee(u) && ee(u).isTranslated),
                  onClick: Yt
                }, {
                  default: Ht(() => [
                    SA(vA(v.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        i.value ? (pn(), ao(ee(B), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: Ht(() => [
            Ye(ee(k), {
              dir: ee(I.getDir)(ee(r)),
              lang: ee(r),
              class: "sx-sentence-selector__section"
            }, {
              default: Ht(() => [
                Ye(l5),
                Jg("div", $A, [
                  (pn(!0), Qg(CA, null, yA(g.value, (L) => (pn(), ao(Z5, {
                    id: L.id,
                    key: `sub-section-${L.id}`,
                    "sub-section": L,
                    onBounceTranslation: H
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !$t.value && c.value ? (pn(), ao(YE, {
              key: 0,
              onEditTranslation: A[0] || (A[0] = (L) => je(L, !1)),
              onSkipTranslation: ee(E),
              onSelectPreviousSegment: ee(M)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : $t.value ? (pn(), ao(kE, {
              key: 2,
              onEditTranslation: je,
              onApplyTranslation: T,
              onSkipTranslation: ee(E),
              onSelectPreviousSegment: ee(M)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : (pn(), ao(z5, {
              key: 1,
              class: kA({ "mb-0": !n.value }),
              onConfigureOptions: kn,
              onEditTranslation: A[1] || (A[1] = (L) => je(L, !0)),
              onApplyTranslation: T,
              onSkipTranslation: ee(E),
              onSelectPreviousSegment: ee(M),
              onRetryTranslation: xt
            }, null, 8, ["class", "onSkipTranslation", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (pn(), ao(ee(B), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: Ht(() => [
            Ye(ee(Ue), { class: "mt-0" })
          ]),
          _: 1
        })),
        Ye(YV, {
          active: t.value,
          "onUpdate:active": A[2] || (A[2] = (L) => t.value = L)
        }, null, 8, ["active"]),
        Ye(xV, {
          modelValue: qe.value,
          "onUpdate:modelValue": A[3] || (A[3] = (L) => qe.value = L),
          onDiscardTranslation: kt
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
}, BA = window.Vue.resolveComponent, PA = window.Vue.createVNode, FA = window.Vue.normalizeClass, MA = window.Vue.openBlock, NA = window.Vue.createElementBlock;
function UA(e, t, n, o, s, a) {
  const r = BA("sx-sentence-selector");
  return MA(), NA("main", {
    class: FA(["sx-sentence-selector-view", a.classes])
  }, [
    PA(r)
  ], 2);
}
const IA = /* @__PURE__ */ z(TA, [["render", UA]]), RA = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, zA = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const OA = window.Vue.resolveDirective, qa = window.Vue.withDirectives, lt = window.Vue.openBlock, jt = window.Vue.createElementBlock, Ga = window.Vue.createCommentVNode, Xa = window.Vue.Transition, Pn = window.Vue.withCtx, ro = window.Vue.createVNode, us = window.Vue.createElementVNode, Fn = window.Vue.unref, HA = window.Vue.renderList, jA = window.Vue.Fragment, qA = window.Vue.normalizeClass, tp = window.Vue.createBlock, GA = window.Vue.toDisplayString, XA = window.Vue.createTextVNode, WA = { class: "sx-quick-tutorial" }, KA = { class: "sx-quick-tutorial__main-point py-9 px-6" }, YA = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, JA = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, QA = { class: "sx-quick-tutorial__illustration" }, ZA = ["innerHTML"], eD = ["innerHTML"], tD = { class: "sx-quick-tutorial__step-indicator py-3" }, nD = ["onClick"], oD = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, sD = {
  key: "secondary-point-1",
  class: "ma-0"
}, aD = {
  key: "secondary-point-2",
  class: "ma-0"
}, iD = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, np = window.Vue.ref, op = window.Codex.CdxButton, rD = window.Codex.CdxIcon, lD = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = np(2), n = np(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (l) => l === n.value, a = fe(), r = () => a.push({ name: "sx-sentence-selector" });
    return (l, u) => {
      const d = OA("i18n");
      return lt(), jt("section", WA, [
        ro(Fn(B), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: Pn(() => [
            us("section", KA, [
              ro(Xa, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Pn(() => [
                  s(1) ? qa((lt(), jt("h2", YA, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? qa((lt(), jt("h2", JA, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : Ga("", !0)
                ]),
                _: 1
              })
            ]),
            us("section", QA, [
              ro(Xa, { name: "mw-ui-animation-slide-left" }, {
                default: Pn(() => [
                  s(1) ? (lt(), jt("div", {
                    key: "illustration-1",
                    innerHTML: Fn(zA)
                  }, null, 8, ZA)) : s(2) ? (lt(), jt("div", {
                    key: "illustration-2",
                    innerHTML: Fn(RA)
                  }, null, 8, eD)) : Ga("", !0)
                ]),
                _: 1
              })
            ]),
            us("div", tD, [
              (lt(!0), jt(jA, null, HA(t.value, (i) => (lt(), jt("span", {
                key: `dot-${i}`,
                class: qA(["dot mx-1", { "dot-active": s(i) }]),
                role: "button",
                onClick: (c) => n.value = i
              }, null, 10, nD))), 128))
            ]),
            us("section", oD, [
              ro(Xa, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Pn(() => [
                  s(1) ? qa((lt(), jt("h3", sD, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? qa((lt(), jt("h3", aD, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : Ga("", !0)
                ]),
                _: 1
              })
            ]),
            us("div", iD, [
              ro(Xa, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Pn(() => [
                  s(1) ? (lt(), tp(Fn(op), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": l.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: Pn(() => [
                      ro(Fn(rD), { icon: Fn(Os) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (lt(), tp(Fn(op), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: r
                  }, {
                    default: Pn(() => [
                      XA(GA(l.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  })) : Ga("", !0)
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
const cD = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: lD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, uD = window.Vue.resolveComponent, dD = window.Vue.createVNode, gD = window.Vue.normalizeClass, pD = window.Vue.openBlock, mD = window.Vue.createElementBlock;
function hD(e, t, n, o, s, a) {
  const r = uD("sx-quick-tutorial");
  return pD(), mD("main", {
    class: gD(["sx-quick-tutorial-view", a.classes])
  }, [
    dD(r)
  ], 2);
}
const wD = /* @__PURE__ */ z(cD, [["render", hD]]);
const sp = window.Vue.ref, fD = window.Vue.onMounted;
function _D(e, t) {
  const n = e.getElementsByTagName("a");
  for (const o of n)
    o.href = G.getPageUrl(t, o.title), o.target = "_blank";
}
const vD = {
  name: "SxEditorOriginalContent",
  components: { MwExpandableContent: G0 },
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
    const t = sp(null), n = sp(0), o = () => parseFloat(
      document.defaultView.getComputedStyle(t.value, null).getPropertyValue("line-height")
    );
    return fD(() => {
      n.value = 2 * o(), _D(t.value, e.language);
    }), {
      originalContentRef: t,
      twoLinesHeight: n
    };
  }
}, SD = window.Vue.resolveDirective, ap = window.Vue.createElementVNode, yD = window.Vue.withDirectives, CD = window.Vue.resolveComponent, kD = window.Vue.withCtx, bD = window.Vue.createVNode, xD = window.Vue.openBlock, $D = window.Vue.createElementBlock, VD = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, ED = { class: "sx-editor__original-content-panel__header mb-2" }, AD = ["lang", "dir", "innerHTML"];
function DD(e, t, n, o, s, a) {
  const r = CD("mw-expandable-content"), l = SD("i18n");
  return xD(), $D("section", VD, [
    yD(ap("h5", ED, null, 512), [
      [l, void 0, "cx-sx-editor-original-panel-label"]
    ]),
    bD(r, {
      "min-height": o.twoLinesHeight,
      scroll: ""
    }, {
      default: kD(() => [
        ap("div", {
          ref: "originalContentRef",
          class: "sx-editor__original-content-panel__body",
          lang: n.language,
          dir: n.dir,
          innerHTML: n.originalContent
        }, null, 8, AD)
      ]),
      _: 1
    }, 8, ["min-height"])
  ]);
}
const LD = /* @__PURE__ */ z(vD, [["render", DD]]), TD = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const ol = window.Vue.computed, BD = window.Vuex.useStore, PD = {
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
    const { targetLanguage: t } = q(BD()), n = ol(
      () => yt.calculateScore(
        e.editedTranslation,
        e.proposedTranslation,
        t.value
      )
    ), o = ol(() => {
      const a = yt.getScoreStatus(n.value);
      return a === "failure" ? n.value === 0 ? "failure" : "warning" : a;
    }), s = ol(
      () => `sx-editor__feedback-overlay-content__stats--${o.value}`
    );
    return {
      happyRobotSVG: TD,
      modificationPercentageClass: s,
      mtScore: n
    };
  }
}, ds = window.Vue.createElementVNode, ip = window.Vue.resolveDirective, sl = window.Vue.withDirectives, FD = window.Vue.normalizeClass, MD = window.Vue.openBlock, ND = window.Vue.createElementBlock, UD = window.Vue.createCommentVNode, ID = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, RD = { class: "sx-editor__feedback-overlay-content px-4" }, zD = ["innerHTML"], OD = { class: "sx-editor__feedback-overlay-content__title" }, HD = { class: "sx-editor__feedback-overlay-content__clarification mb-1" };
function jD(e, t, n, o, s, a) {
  const r = ip("i18n"), l = ip("i18n-html");
  return n.showFeedback ? (MD(), ND("div", ID, [
    ds("div", RD, [
      ds("div", {
        class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
        innerHTML: o.happyRobotSVG
      }, null, 8, zD),
      sl(ds("h2", OD, null, 512), [
        [r, void 0, "sx-editor-feedback-overlay-title"]
      ]),
      sl(ds("p", HD, null, 512), [
        [r, void 0, "sx-editor-feedback-overlay-clarification"]
      ]),
      sl(ds("p", {
        class: FD(["sx-editor__feedback-overlay-content__stats", o.modificationPercentageClass])
      }, null, 2), [
        [l, [o.mtScore], "sx-editor-feedback-overlay-stats"]
      ])
    ])
  ])) : UD("", !0);
}
const qD = /* @__PURE__ */ z(PD, [["render", jD]]), GD = window.Vuex.useStore, XD = () => {
  const e = GD(), t = Sc(), { selectNextTranslationUnit: n } = Co(), { sourceSection: o, selectedContentTranslationUnit: s } = K(), { getCurrentTitleByLanguage: a } = Wt();
  return (r) => C(void 0, null, function* () {
    const l = document.createElement("div");
    l.innerHTML = r, l.querySelectorAll(".sx-edit-dummy-node").forEach((c) => c.remove()), r = l.innerHTML;
    const { sourceLanguage: u, targetLanguage: d, currentMTProvider: i } = e.state.application;
    s.value instanceof Me && (r = (yield lm(
      r,
      a(d, u),
      d
    )) || r), o.value.setTranslationForSelectedTranslationUnit(
      r,
      i
    ), t(), n();
  });
};
const Pe = window.Vue.unref, al = window.Vue.openBlock, il = window.Vue.createBlock, rp = window.Vue.createCommentVNode, lp = window.Vue.createVNode, WD = window.Vue.createElementVNode, KD = window.Vue.withCtx, YD = { class: "sx-editor__editing-surface-container grow" }, rl = window.Vue.ref, JD = window.Vue.computed, QD = window.Vuex.useStore, ZD = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = rl(!1), o = fe(), s = QD(), a = () => n.value = !0, r = () => o.replace({ name: t.fromRoute }), { isFinalEdit: l, isInitialEdit: u, content: d, originalContent: i, title: c } = history.state, g = rl(null), p = rl(!1), { logEditorSegmentAddEvent: m } = fh(), { targetLanguage: h, sourceLanguage: w } = q(s), { sourceSection: f } = K(), _ = JD(
      () => yt.calculateScore(
        g.value,
        d,
        h.value
      )
    ), S = XD(), y = (b) => C(this, null, function* () {
      g.value = b, p.value = !0;
      const E = new Promise((V) => setTimeout(V, 2e3));
      let M = Promise.resolve();
      l ? f.value.editedTranslation = b : (_.value === 0 && u && m(), M = S(b)), yield Promise.all([E, M]), p.value = !1, r();
    });
    return (b, E) => (al(), il(Pe(B), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: KD(() => [
        Pe(i) ? (al(), il(LD, {
          key: 0,
          language: Pe(w),
          dir: Pe(I.getDir)(Pe(w)),
          "original-content": Pe(i)
        }, null, 8, ["language", "dir", "original-content"])) : rp("", !0),
        n.value ? rp("", !0) : (al(), il(Pe(Ue), { key: 1 })),
        WD("div", YD, [
          lp(qD, {
            "edited-translation": g.value,
            "show-feedback": p.value,
            "proposed-translation": Pe(d)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          lp(d2, {
            content: Pe(d),
            language: Pe(h),
            dir: Pe(I.getDir)(Pe(h)),
            title: Pe(c),
            onReady: a,
            onClose: r,
            onEditCompleted: y
          }, null, 8, ["content", "language", "dir", "title"])
        ])
      ]),
      _: 1
    }));
  }
};
const eL = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: ZD
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
}, tL = window.Vue.resolveComponent, nL = window.Vue.createVNode, oL = window.Vue.normalizeClass, sL = window.Vue.openBlock, aL = window.Vue.createElementBlock;
function iL(e, t, n, o, s, a) {
  const r = tL("sx-editor");
  return sL(), aL("main", {
    class: oL(["sx-editor-view", a.classes])
  }, [
    nL(r, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const rL = /* @__PURE__ */ z(eL, [["render", iL]]);
const _t = window.Vue.unref, Mn = window.Vue.createVNode, gs = window.Vue.withCtx, lL = window.Vue.resolveDirective, cL = window.Vue.withDirectives, uL = window.Vue.openBlock, dL = window.Vue.createBlock, cp = window.Codex.CdxButton, up = window.Codex.CdxIcon, gL = {
  __name: "SXPublisherHeader",
  props: {
    isPublishingDisabled: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["publish-translation"],
  setup(e) {
    const t = fe(), n = () => t.push({ name: "sx-sentence-selector" });
    return (o, s) => {
      const a = lL("i18n");
      return uL(), dL(_t(B), { class: "ma-0 sx-publisher__header" }, {
        default: gs(() => [
          Mn(_t(k), {
            shrink: "",
            class: "me-2"
          }, {
            default: gs(() => [
              Mn(_t(cp), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: gs(() => [
                  Mn(_t(up), { icon: _t(yo) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          cL(Mn(_t(k), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          Mn(_t(k), { shrink: "" }, {
            default: gs(() => [
              Mn(_t(cp), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (r) => o.$emit("publish-translation"))
              }, {
                default: gs(() => [
                  Mn(_t(up), { icon: _t(sk) }, null, 8, ["icon"])
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
}, pL = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, mL = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, dp = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const hL = {
  name: "SxPublisherAnimationDialog",
  components: { MwDialog: et, MwRow: B, MwCol: k },
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
        svg: pL,
        title: e.$i18n("cx-sx-publisher-animation-publishing-indicator-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: mL,
        title: e.$i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: dp,
        title: e.$i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: dp,
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
}, ll = window.Vue.createElementVNode, gp = window.Vue.toDisplayString, cl = window.Vue.resolveComponent, ul = window.Vue.withCtx, pp = window.Vue.createVNode, wL = window.Vue.openBlock, fL = window.Vue.createBlock, _L = window.Vue.createCommentVNode, vL = ["innerHTML"], SL = ["textContent"], yL = ["textContent"];
function CL(e, t, n, o, s, a) {
  const r = cl("mw-col"), l = cl("mw-row"), u = cl("mw-dialog");
  return n.active ? (wL(), fL(u, {
    key: 0,
    "overlay-opacity": 0.85,
    header: !1,
    class: "sx-publisher__publish-animation"
  }, {
    default: ul(() => [
      pp(l, { class: "ma-4" }, {
        default: ul(() => [
          pp(r, null, {
            default: ul(() => [
              ll("div", {
                class: "sx-publisher__publish-animation-icon mb-4",
                innerHTML: a.animationSvg
              }, null, 8, vL),
              ll("h2", {
                textContent: gp(a.animationTitle)
              }, null, 8, SL),
              ll("p", {
                class: "ma-0",
                textContent: gp(a.animationSubtitle)
              }, null, 8, yL)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  })) : _L("", !0);
}
const kL = /* @__PURE__ */ z(hL, [["render", CL]]);
const Fe = window.Vue.unref, ct = window.Vue.createVNode, qt = window.Vue.withCtx, bL = window.Vue.resolveDirective, xL = window.Vue.withDirectives, mp = window.Vue.toDisplayString, $L = window.Vue.createTextVNode, dl = window.Vue.openBlock, hp = window.Vue.createElementBlock, VL = window.Vue.createCommentVNode, _h = window.Vue.createElementVNode, EL = window.Vue.createBlock, AL = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, DL = ["src"], LL = ["textContent"], TL = /* @__PURE__ */ _h("p", { class: "mt-0" }, null, -1), BL = window.Vue.computed, PL = window.Vue.inject, FL = window.Vue.ref, wp = window.Codex.CdxButton, ML = window.Codex.CdxIcon, NL = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: em,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = FL(""), s = () => n("close"), a = () => n("publish", o.value), r = PL("breakpoints"), l = BL(() => r.value.mobile);
    return (u, d) => {
      const i = bL("i18n");
      return e.active && e.captchaDetails ? (dl(), EL(Fe(et), {
        key: 0,
        "overlay-opacity": 0.65,
        fullscreen: l.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: qt(() => [
          ct(Fe(B), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: qt(() => [
              ct(Fe(k), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: qt(() => [
                  ct(Fe(wp), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": u.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: s
                  }, {
                    default: qt(() => [
                      ct(Fe(ML), { icon: Fe(yo) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              xL(ct(Fe(k), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [i, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              ct(Fe(k), {
                shrink: "",
                class: "justify-center"
              }, {
                default: qt(() => [
                  ct(Fe(wp), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: qt(() => [
                      $L(mp(u.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          ct(Fe(ei))
        ]),
        default: qt(() => [
          _h("div", AL, [
            e.captchaDetails.type === "image" ? (dl(), hp("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, DL)) : (dl(), hp("p", {
              key: 1,
              textContent: mp(e.captchaDetails.question)
            }, null, 8, LL)),
            TL,
            ct(Fe(B), { class: "ma-0" }, {
              default: qt(() => [
                ct(Fe(k), null, {
                  default: qt(() => [
                    ct(Fe(Qa), {
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
      }, 8, ["fullscreen"])) : VL("", !0);
    };
  }
};
const Nn = window.Vue.unref, ps = window.Vue.createVNode, Wa = window.Vue.withCtx, Un = window.Vue.createElementVNode, UL = window.Vue.resolveDirective, IL = window.Vue.withDirectives, RL = window.Vue.renderList, fp = window.Vue.Fragment, gl = window.Vue.openBlock, _p = window.Vue.createElementBlock, zL = window.Vue.toDisplayString, OL = window.Vue.normalizeClass, HL = window.Vue.createBlock, jL = { class: "mw-ui-dialog__header" }, qL = { class: "row ma-0 px-4 py-3" }, GL = { class: "col shrink justify-center" }, XL = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, WL = { class: "mb-0" }, KL = { class: "pa-4" }, YL = ["textContent"], JL = window.Vuex.useStore, ms = window.Vue.computed, QL = window.Codex.CdxButton, ZL = window.Codex.CdxIcon, eT = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = JL(), s = ms(() => o.state.application.publishTarget), a = ms(() => o.state.translator.isAnon), r = ge(), { sourceSection: l } = K(), u = ms(
      () => l.value.isLeadSection ? r.i18n("cx-sx-publisher-lead-section-option-label") : r.i18n("cx-sx-publisher-new-section-option-label")
    ), d = ms(
      () => l.value.isLeadSection ? r.i18n("cx-sx-publisher-lead-section-option-details") : r.i18n("cx-sx-publisher-new-section-option-details")
    ), i = ms(() => [
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
    ]), c = (m) => m === i.value.length - 1 ? "mb-1" : "mb-4", g = () => n("update:active", !1), p = (m) => {
      const h = m.target.value;
      o.commit("application/setPublishTarget", h), g();
    };
    return (m, h) => {
      const w = UL("i18n");
      return gl(), HL(Nn(et), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: m.$i18n("cx-sx-publisher-preview-options-title"),
        "overlay-opacity": 0.7,
        "overlay-color": m.$mwui.colors.gray700,
        onInput: h[0] || (h[0] = (f) => m.$emit("update:active", f)),
        onClose: g
      }, {
        header: Wa(() => [
          Un("div", jL, [
            Un("div", qL, [
              Un("div", GL, [
                ps(Nn(QL), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": m.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: g
                }, {
                  default: Wa(() => [
                    ps(Nn(ZL), { icon: Nn(jm) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              Un("div", XL, [
                IL(Un("h4", WL, null, 512), [
                  [w, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            ps(Nn(ei))
          ])
        ]),
        default: Wa(() => [
          Un("div", KL, [
            ps(Nn(C0), {
              value: s.value,
              name: "publish-options",
              onInput: p
            }, {
              default: Wa(() => [
                (gl(!0), _p(fp, null, RL(i.value, (f, _) => (gl(), _p(fp, {
                  key: f.label
                }, [
                  ps(Nn($l), {
                    class: "pa-0 my-1",
                    label: f.label,
                    "input-value": f.value,
                    disabled: f.disabled
                  }, null, 8, ["label", "input-value", "disabled"]),
                  Un("p", {
                    class: OL(["complementary ms-7 mt-0", c(_)]),
                    textContent: zL(f.details)
                  }, null, 10, YL)
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
const ut = window.Vue.unref, In = window.Vue.createVNode, tT = window.Vue.resolveDirective, vp = window.Vue.withDirectives, Ka = window.Vue.openBlock, Sp = window.Vue.createElementBlock, nT = window.Vue.createCommentVNode, yp = window.Vue.toDisplayString, pl = window.Vue.createElementVNode, lo = window.Vue.withCtx, Cp = window.Vue.createBlock, oT = window.Vue.Fragment, sT = window.Vue.normalizeClass, aT = { class: "sx-publisher__review-info__content" }, iT = {
  key: 0,
  class: "complementary ma-0"
}, rT = ["textContent"], lT = ["textContent"], mn = window.Vue.computed, kp = window.Vue.ref, cT = window.Vue.watch, bp = window.Codex.CdxButton, ml = window.Codex.CdxIcon, uT = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = kp(0), o = kp(null);
    cT(o, () => {
      var w;
      const h = (w = o.value) == null ? void 0 : w.$el;
      if (h instanceof HTMLElement) {
        const f = h.querySelector("a");
        f && f.setAttribute("target", "_blank");
      }
    });
    const s = mn(
      () => {
        var h;
        return (h = t.publishFeedbackMessages) == null ? void 0 : h[n.value];
      }
    ), a = mn(() => {
      var h;
      return ((h = s.value) == null ? void 0 : h.status) || "default";
    }), r = mn(() => {
      switch (a.value) {
        case "warning":
          return Hm;
        case "error":
          return nk;
        default:
          return ik;
      }
    }), l = mn(() => a.value === "default"), u = mn(
      () => l.value ? "notice" : a.value
    ), d = mn(
      () => `sx-publisher__review-info--${u.value}`
    ), i = ge(), c = mn(() => {
      var h;
      return (h = s.value) == null ? void 0 : h.text;
    }), g = mn(
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
    return (h, w) => {
      const f = tT("i18n-html");
      return Ka(), Cp(ut(Xf), {
        type: u.value,
        class: sT(["sx-publisher__review-info ma-0 pa-4", d.value]),
        inline: l.value
      }, {
        icon: lo(() => [
          In(ut(ml), {
            icon: r.value,
            class: "shrink mw-ui-message__icon items-start me-1"
          }, null, 8, ["icon"])
        ]),
        default: lo(() => [
          pl("div", aT, [
            a.value === "default" ? vp((Ka(), Sp("p", iT, null, 512)), [
              [f, void 0, "cx-sx-publisher-review-info"]
            ]) : (Ka(), Sp(oT, { key: 1 }, [
              pl("h5", {
                textContent: yp(g.value)
              }, null, 8, rT),
              pl("p", {
                textContent: yp(c.value)
              }, null, 8, lT),
              In(ut(B), {
                justify: "between",
                class: "ma-0"
              }, {
                default: lo(() => [
                  vp(In(ut(k), {
                    ref_key: "learnMoreContainer",
                    ref: o,
                    class: "sx-publisher__review-info__learn-more-anchor"
                  }, null, 512), [
                    [f, void 0, "cx-sx-publisher-review-info-learn-more"]
                  ]),
                  e.publishFeedbackMessages.length > 1 ? (Ka(), Cp(ut(k), {
                    key: 0,
                    class: "sx-publisher__review-info__navigation-buttons justify-end",
                    align: "center"
                  }, {
                    default: lo(() => [
                      In(ut(bp), {
                        weight: "quiet",
                        class: "pa-0 me-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                        onClick: p
                      }, {
                        default: lo(() => [
                          In(ut(ml), { icon: ut(lc) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"]),
                      In(ut(bp), {
                        weight: "quiet",
                        class: "pa-0 ms-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                        onClick: m
                      }, {
                        default: lo(() => [
                          In(ut(ml), { icon: ut(Os) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ]),
                    _: 1
                  })) : nT("", !0)
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
}, dT = (e) => {
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
}, gT = window.Vuex.useStore, pT = window.Vue.computed, mT = () => {
  const e = gT(), { currentTranslation: t } = Kt(), { currentMTProvider: n, previousRoute: o } = q(e), { currentTargetPage: s } = He(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    sectionURLParameter: u
  } = F(), { sourceSection: d } = K(), i = ze(), c = pT(() => {
    var w;
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
      const f = t.value.targetSectionTitle;
      f && (h.translation_target_section = f);
    } else
      s.value && (h.translation_target_title = (w = s.value) == null ? void 0 : w.title);
    return n.value && (h.translation_provider = Y.getProviderForInstrumentation(n.value)), h.human_modification_rate = yt.getMTScoreForPageSection(
      d.value,
      r.value
    ) / 100, h.human_modification_threshold = yt.getMtModificationThreshold(), h;
  });
  return {
    logPublishAttemptEvent: () => i(ie({
      event_type: "publish_attempt"
    }, c.value)),
    logPublishSuccessEvent: (h, w) => i(ie({
      event_type: "publish_success",
      published_page_id: h,
      published_revision_id: w
    }, c.value)),
    logPublishFailureEvent: () => i(ie({
      event_type: "publish_failure"
    }, c.value))
  };
}, xp = window.Vue.ref, hT = window.Vuex.useStore, wT = () => {
  const e = hT(), { pageURLParameter: t } = F(), { sourceSection: n, targetPageTitleForPublishing: o } = K(), s = hh(), a = xp(!1), r = xp("pending"), l = () => a.value = !1, u = Sc(), {
    logPublishAttemptEvent: d,
    logPublishSuccessEvent: i,
    logPublishFailureEvent: c
  } = mT(), g = (m, h) => C(void 0, null, function* () {
    d();
    const w = yield u();
    if (w instanceof go)
      return c(), { publishFeedbackMessage: w, targetUrl: null };
    const f = w, {
      /** @type {PageSection} */
      sourceLanguage: _,
      targetLanguage: S
    } = e.state.application, y = o.value, b = e.getters["application/isSandboxTarget"], E = {
      html: dT(n.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: y,
      sourceSectionTitle: n.value.sourceSectionTitleForPublishing,
      targetSectionTitle: n.value.targetSectionTitleForPublishing,
      sourceLanguage: _,
      targetLanguage: S,
      revision: s.value,
      isSandbox: b,
      sectionTranslationId: f
    };
    m && (E.captchaId = m, E.captchaWord = h);
    const M = yield Ze.publishTranslation(
      E
    );
    return M.publishFeedbackMessage === null ? i(M.pageId, M.revisionId) : c(), M;
  });
  return {
    closePublishDialog: l,
    doPublish: (m = null, h = null) => C(void 0, null, function* () {
      r.value = "pending", a.value = !0;
      let w;
      try {
        w = yield g(
          h == null ? void 0 : h.id,
          m
        );
      } catch (f) {
        if (f instanceof wo)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw f;
      }
      return w;
    }),
    isPublishDialogActive: a,
    publishStatus: r
  };
}, fT = window.Vue.computed, _T = () => {
  const e = fe(), { sourceSection: t } = K(), { getCurrentTitleByLanguage: n } = Wt(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = F(), a = fT(
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
}, vT = window.Vuex.useStore, ST = () => {
  const e = vT(), { targetLanguage: t } = q(e), { sourceSection: n } = K();
  return () => {
    const o = yt.getMTScoreForPageSection(
      n.value,
      t.value
    ), s = yt.getScoreStatus(o);
    if (s === "success")
      return null;
    const a = 100 - o, r = s === "failure" ? "error" : "warning";
    let l, u;
    return r === "warning" ? (l = mw.message("cx-sx-publisher-mt-abuse-message-title", a).plain(), u = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (l = mw.message("cx-sx-publisher-mt-abuse-error-title", a).plain(), u = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new go({
      title: l,
      text: u,
      status: r,
      type: "mt"
    });
  };
}, yT = window.Vue.ref, CT = window.Vue.computed, kT = () => {
  const e = ST(), t = yT([]), n = CT(
    () => t.value.some((r) => r.isError)
  );
  return {
    addPublishFeedbackMessage: (r) => {
      t.value.push(r), t.value.sort((l, u) => +u.isError - +l.isError);
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
}, bT = window.Vuex.useStore, xT = () => {
  const e = bT(), { currentSourcePage: t } = He(), { sourceLanguage: n, targetLanguage: o } = q(e), { sourceSection: s, targetPageTitleForPublishing: a } = K();
  return (r) => C(void 0, null, function* () {
    const l = a.value, u = e.getters["application/isSandboxTarget"], d = t.value.title, i = new mw.Title(d), c = mw.config.get("wgNamespaceIds");
    if (s.value.isLeadSection && !u && i.getNamespaceId() !== c.user)
      try {
        yield si.addWikibaseLink(
          n.value,
          o.value,
          d,
          l
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
}, $p = window.Vue.ref, $T = () => {
  const e = $p(!1), t = $p(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const ue = window.Vue.unref, De = window.Vue.createVNode, VT = window.Vue.resolveDirective, hs = window.Vue.createElementVNode, ET = window.Vue.withDirectives, co = window.Vue.withCtx, AT = window.Vue.openBlock, DT = window.Vue.createElementBlock, LT = { class: "sx-publisher" }, TT = { class: "sx-publisher__publish-panel pa-4" }, BT = { class: "mb-2" }, PT = ["innerHTML"], FT = { class: "sx-publisher__section-preview pa-5" }, MT = ["innerHTML"], Vp = window.Vue.computed, NT = window.Vue.onMounted, UT = window.Vue.ref, IT = window.Vue.watch, RT = window.Vuex.useStore, Ep = window.Codex.CdxButton, Ap = window.Codex.CdxIcon, zT = {
  __name: "SXPublisher",
  setup(e) {
    const t = RT(), { sourceSection: n } = K(), o = Vp(() => {
      var V;
      return (V = n.value) == null ? void 0 : V.title;
    }), s = ge(), a = Vp(() => t.getters["application/isSandboxTarget"] ? s.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : n.value.isLeadSection ? s.i18n("cx-sx-publisher-publish-panel-lead-section-result") : s.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: r,
      captchaDialogOn: l,
      handleCaptchaError: u,
      onCaptchaDialogClose: d
    } = $T(), {
      publishFeedbackMessages: i,
      isPublishingDisabled: c,
      addPublishFeedbackMessage: g,
      clearPublishFeedbackMessages: p,
      initializePublishFeedbackMessages: m
    } = kT(), h = xT(), { doPublish: w, isPublishDialogActive: f, publishStatus: _, closePublishDialog: S } = wT(), y = (V = null) => C(this, null, function* () {
      const T = yield w(V, r);
      if (!T)
        return;
      const { publishFeedbackMessage: H, targetUrl: P } = T;
      if (u(H)) {
        S();
        return;
      } else
        H && g(H);
      _.value = c.value ? "failure" : "success", setTimeout(() => {
        if (c.value) {
          S();
          return;
        }
        h(P);
      }, 1e3);
    });
    NT(() => m());
    const b = _T(), E = UT(!1), M = () => E.value = !0;
    return IT(E, (V) => {
      V || p();
    }), (V, T) => {
      const H = VT("i18n");
      return AT(), DT("section", LT, [
        De(gL, {
          "is-publishing-disabled": ue(c),
          onPublishTranslation: y
        }, null, 8, ["is-publishing-disabled"]),
        hs("div", TT, [
          ET(hs("h5", BT, null, 512), [
            [H, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          hs("h6", {
            class: "mb-2",
            innerHTML: a.value
          }, null, 8, PT),
          De(ue(B), {
            justify: "end",
            class: "ma-0"
          }, {
            default: co(() => [
              De(ue(k), { shrink: "" }, {
                default: co(() => [
                  De(ue(Ep), {
                    weight: "quiet",
                    "aria-label": V.$i18n("cx-sx-publisher-configure-button-aria-label"),
                    onClick: M
                  }, {
                    default: co(() => [
                      De(ue(Ap), { icon: ue(gk) }, null, 8, ["icon"])
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
        De(uT, { "publish-feedback-messages": ue(i) }, null, 8, ["publish-feedback-messages"]),
        hs("section", FT, [
          De(ue(B), { class: "pb-5 ma-0" }, {
            default: co(() => [
              De(ue(k), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                innerHTML: o.value
              }, null, 8, ["innerHTML"]),
              De(ue(k), { shrink: "" }, {
                default: co(() => [
                  De(ue(Ep), {
                    weight: "quiet",
                    "aria-label": V.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: ue(b)
                  }, {
                    default: co(() => [
                      De(ue(Ap), { icon: ue(ac) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label", "onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          hs("div", {
            innerHTML: ue(n).translationHtml
          }, null, 8, MT)
        ]),
        De(eT, {
          active: E.value,
          "onUpdate:active": T[0] || (T[0] = (P) => E.value = P)
        }, null, 8, ["active"]),
        De(NL, {
          active: ue(l),
          "captcha-details": ue(r),
          onClose: ue(d),
          onPublish: T[1] || (T[1] = (P) => y(P))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        De(kL, {
          active: ue(f),
          status: ue(_)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const OT = {
  name: "SxPublisherView",
  components: {
    SxPublisher: zT
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, HT = window.Vue.resolveComponent, jT = window.Vue.createVNode, qT = window.Vue.normalizeClass, GT = window.Vue.openBlock, XT = window.Vue.createElementBlock;
function WT(e, t, n, o, s, a) {
  const r = HT("sx-publisher");
  return GT(), XT("main", {
    class: qT(["sx-publisher-view", a.classes])
  }, [
    jT(r)
  ], 2);
}
const KT = /* @__PURE__ */ z(OT, [["render", WT]]);
const YT = {
  name: "SxSearchArticleSuggestion",
  components: { MwThumbnail: Hl, MwIcon: be, MwRow: B, MwCol: k },
  props: {
    suggestion: {
      type: vo,
      required: !0
    }
  },
  setup(e) {
    return { mwIconStar: sf, mwIconLanguage: cf, mwIconArticle: Ol, getDir: I.getDir };
  }
}, Ya = window.Vue.resolveComponent, hn = window.Vue.createVNode, Rn = window.Vue.withCtx, hl = window.Vue.toDisplayString, wl = window.Vue.createElementVNode, JT = window.Vue.openBlock, QT = window.Vue.createBlock, ZT = ["textContent"], e6 = ["textContent"], t6 = ["textContent"];
function n6(e, t, n, o, s, a) {
  const r = Ya("mw-thumbnail"), l = Ya("mw-col"), u = Ya("mw-icon"), d = Ya("mw-row");
  return JT(), QT(d, {
    class: "cx-search-suggestion pt-3 ma-0",
    align: "normal",
    lang: n.suggestion.language,
    dir: o.getDir(n.suggestion.language)
  }, {
    default: Rn(() => [
      hn(l, { shrink: "" }, {
        default: Rn(() => [
          hn(r, {
            class: "cx-search-suggestion__thumbnail",
            thumbnail: n.suggestion.thumbnail,
            "thumbnail-size": 56,
            "placeholder-icon-size": 30
          }, null, 8, ["thumbnail"])
        ]),
        _: 1
      }),
      hn(l, { class: "ms-4" }, {
        default: Rn(() => [
          hn(d, {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: Rn(() => [
              hn(l, {
                shrink: "",
                class: "mb-1"
              }, {
                default: Rn(() => [
                  wl("h5", {
                    class: "my-0 cx-search-suggestion__source-title",
                    textContent: hl(n.suggestion.title)
                  }, null, 8, ZT)
                ]),
                _: 1
              }),
              hn(l, {
                shrink: "",
                class: "mb-1"
              }, {
                default: Rn(() => [
                  wl("p", {
                    class: "ma-0 cx-search-suggestion__source-description complementary",
                    textContent: hl(n.suggestion.description)
                  }, null, 8, e6)
                ]),
                _: 1
              }),
              hn(l, {
                class: "cx-search-suggestion__languages",
                shrink: "",
                align: "center"
              }, {
                default: Rn(() => [
                  hn(u, {
                    icon: o.mwIconLanguage,
                    size: 16,
                    class: "me-2"
                  }, null, 8, ["icon"]),
                  wl("small", {
                    textContent: hl(n.suggestion.langLinksCount)
                  }, null, 8, t6)
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
const vh = /* @__PURE__ */ z(YT, [["render", n6]]), o6 = window.Vue.computed, Dp = window.Vue.ref, s6 = window.Vue.watch, a6 = (e, t) => {
  const o = Dp([]), s = Dp(!1), a = o6(
    () => o.value.slice(0, 4)
  ), r = uc(() => C(void 0, null, function* () {
    try {
      o.value = yield So.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      s.value = !1;
    }
  }), 500);
  return s6(t, () => {
    s.value = !0, o.value = [], r();
  }), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
};
const i6 = window.Vue.computed, r6 = window.Vuex.useStore, l6 = {
  name: "SearchResultsCard",
  components: { SxSearchArticleSuggestion: vh, MwCard: dt, MwSpinner: Ue },
  props: {
    searchInput: {
      type: String,
      default: null
    }
  },
  emits: ["suggestion-clicked"],
  setup(e) {
    const { sourceLanguage: t, sourceLanguageAutonym: n } = q(
      r6()
    ), o = i6(() => e.searchInput), { searchResultsLoading: s, searchResultsSlice: a } = a6(
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
}, fl = window.Vue.resolveComponent, ws = window.Vue.openBlock, _l = window.Vue.createBlock, c6 = window.Vue.createCommentVNode, u6 = window.Vue.resolveDirective, d6 = window.Vue.withDirectives, Lp = window.Vue.createElementBlock, g6 = window.Vue.renderList, p6 = window.Vue.Fragment, m6 = window.Vue.withCtx, h6 = {
  key: 1,
  class: "sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
};
function w6(e, t, n, o, s, a) {
  const r = fl("mw-spinner"), l = fl("sx-search-article-suggestion"), u = fl("mw-card"), d = u6("i18n");
  return ws(), _l(u, { class: "sx-article-search__results mb-0 pa-4" }, {
    default: m6(() => [
      o.searchResultsLoading ? (ws(), _l(r, { key: 0 })) : o.searchResultsSlice.length === 0 ? d6((ws(), Lp("p", h6, null, 512)), [
        [d, [
          n.searchInput,
          o.sourceLanguageAutonym
        ], "cx-sx-article-search-no-search-results-message"]
      ]) : c6("", !0),
      (ws(!0), Lp(p6, null, g6(o.searchResultsSlice, (i) => (ws(), _l(l, {
        key: i.pageid,
        suggestion: i,
        onClick: (c) => e.$emit("suggestion-clicked", i)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ]),
    _: 1
  });
}
const f6 = /* @__PURE__ */ z(l6, [["render", w6]]);
const _6 = window.Vue.toDisplayString, v6 = window.Vue.createElementVNode, S6 = window.Vue.renderList, y6 = window.Vue.Fragment, vl = window.Vue.openBlock, C6 = window.Vue.createElementBlock, Tp = window.Vue.createBlock, k6 = window.Vue.unref, Bp = window.Vue.withCtx, b6 = ["textContent"], Pp = {
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
    return (t, n) => (vl(), Tp(k6(dt), { class: "sx-article-search__suggestions mb-0 pa-4" }, {
      header: Bp(() => [
        v6("h5", {
          class: "ma-0 pb-1 sx-article-search__suggestions-header",
          textContent: _6(e.cardTitle)
        }, null, 8, b6)
      ]),
      default: Bp(() => [
        (vl(!0), C6(y6, null, S6(e.suggestions, (o) => (vl(), Tp(vh, {
          key: o.pageid,
          suggestion: o,
          onClick: (s) => t.$emit("suggestion-clicked", o)
        }, null, 8, ["suggestion", "onClick"]))), 128))
      ]),
      _: 1
    }));
  }
}, x6 = window.Vue.computed, $6 = (e, t) => x6(() => {
  const o = {
    value: "other",
    props: {
      icon: pf,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  }, s = [
    e.value,
    ...t.value.slice(0, 2)
  ];
  return [...s.filter(
    (r, l) => s.findIndex((u) => u === r) === l
  ).map((r) => ({
    value: r,
    props: {
      label: I.getAutonym(r),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), o];
}), V6 = window.Vue.computed, E6 = (e, t, n) => V6(() => {
  const o = (navigator.language || "").split("-")[0], s = (mw.config.get("wgULSAcceptLanguageList") || navigator.languages || []).map((r) => r.split("-")[0]), a = [
    // User's current interface language
    mw.config.get("wgUserLanguage"),
    // Current wiki's content language
    mw.config.get("wgContentLanguage"),
    o,
    ...n.value,
    ...s
  ];
  return [...new Set(a)].filter(
    (r) => r !== e.value && r !== t.value && I.getAutonym(r) !== r
  );
});
const A6 = window.Vue.resolveDirective, D6 = window.Vue.createElementVNode, Sl = window.Vue.withDirectives, Ve = window.Vue.unref, fs = window.Vue.withCtx, vt = window.Vue.createVNode, _s = window.Vue.openBlock, Fp = window.Vue.createBlock, L6 = window.Vue.createCommentVNode, yl = window.Vue.createElementBlock, T6 = window.Vue.Fragment, B6 = window.Vue.vShow, P6 = { class: "sx-article-search" }, F6 = { class: "mb-0" }, M6 = {
  key: 2,
  class: "sx-article-search__empty-suggestions-message mt-12 pa-4 mb-0"
}, vs = window.Vue.ref, N6 = window.Vue.onMounted, Cl = window.Vue.computed, Mp = window.Vue.watch, U6 = window.Vue.inject, I6 = window.Vuex.useStore, R6 = window.Codex.CdxButton, z6 = window.Codex.CdxIcon, O6 = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = vs(""), n = vs(!1), o = vs(null), s = vs(!1), a = vs([]), r = I6(), { sourceLanguage: l, targetLanguage: u } = q(r), { supportedLanguageCodes: d } = Us(), i = E6(
      l,
      u,
      a
    ), c = $6(
      l,
      i
    ), g = fe(), { fetchAllTranslations: p } = li();
    N6(() => C(this, null, function* () {
      var N;
      yield Rm()(), p();
      try {
        a.value.push(
          ...JSON.parse(localStorage.getItem("uls-previous-languages"))
        );
      } catch (ae) {
      }
      (N = o.value) == null || N.focus();
    }));
    const m = () => {
      g.push({ name: "dashboard" });
    }, h = zm(), w = (P) => h(P, u.value), f = (P) => {
      if (P === "other") {
        s.value = !0;
        return;
      }
      w(P);
    };
    Mp(l, () => r.dispatch("mediawiki/fetchNearbyPages"), {
      immediate: !0
    });
    const _ = ze();
    Mp(t, () => {
      n.value || (n.value = !0, _({
        event_type: "dashboard_search",
        translation_source_language: l.value,
        translation_target_language: u.value
      }));
    });
    const S = () => {
      s.value = !1;
    }, y = (P) => {
      s.value = !1, a.value.push(P), f(P);
    }, b = Cl(
      () => r.getters["mediawiki/getRecentlyEditedPages"]
    ), E = Cl(() => r.getters["mediawiki/getNearbyPages"]), M = U6("breakpoints"), V = Cl(() => M.value.tabletAndDown), T = Hs(), H = (P, N) => T(
      P.title,
      l.value,
      u.value,
      N
    );
    return (P, N) => {
      const ae = A6("i18n");
      return _s(), yl("section", P6, [
        vt(Ve(B), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: fs(() => [
            vt(Ve(k), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: fs(() => [
                Sl(D6("h5", F6, null, 512), [
                  [ae, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            vt(Ve(k), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: fs(() => [
                vt(Ve(R6), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": P.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: m
                }, {
                  default: fs(() => [
                    vt(Ve(z6), { icon: Ve(yo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        vt(Ve(Qa), {
          ref_key: "searchInputRef",
          ref: o,
          value: t.value,
          "onUpdate:value": N[0] || (N[0] = (J) => t.value = J),
          "icon-size": 20,
          icon: Ve(xl),
          placeholder: P.$i18n("cx-sx-article-search-input-placeholder"),
          type: "search"
        }, null, 8, ["value", "icon", "placeholder"]),
        vt(Ve(As), {
          class: "sx-article-search__language-button-group",
          items: Ve(c),
          active: Ve(l),
          onSelect: f
        }, null, 8, ["items", "active"]),
        t.value ? L6("", !0) : (_s(), yl(T6, { key: 0 }, [
          b.value && b.value.length ? (_s(), Fp(Pp, {
            key: 0,
            "card-title": P.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: b.value,
            onSuggestionClicked: N[1] || (N[1] = (J) => H(J, "suggestion_recent_edit"))
          }, null, 8, ["card-title", "suggestions"])) : E.value && E.value.length ? (_s(), Fp(Pp, {
            key: 1,
            "card-title": P.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: E.value,
            onSuggestionClicked: N[2] || (N[2] = (J) => H(J, "suggestion_nearby"))
          }, null, 8, ["card-title", "suggestions"])) : Sl((_s(), yl("p", M6, null, 512)), [
            [ae, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        Sl(vt(f6, {
          "search-input": t.value,
          onSuggestionClicked: N[3] || (N[3] = (J) => H(J, "search_result"))
        }, null, 8, ["search-input"]), [
          [B6, !!t.value]
        ]),
        vt(Ve(et), {
          value: s.value,
          "onUpdate:value": N[4] || (N[4] = (J) => s.value = J),
          class: "sx-article-search-language-selector",
          animation: "slide-up",
          fullscreen: V.value,
          header: V.value,
          "overlay-opacity": 0,
          title: P.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: S
        }, {
          default: fs(() => [
            vt(Ve(th), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: Ve(d),
              suggestions: Ve(i),
              placeholder: P.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: y,
              onClose: S
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ]);
    };
  }
};
const H6 = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: O6
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.tabletAndDown })
  }
}, j6 = window.Vue.resolveComponent, q6 = window.Vue.createVNode, G6 = window.Vue.normalizeClass, X6 = window.Vue.openBlock, W6 = window.Vue.createElementBlock;
function K6(e, t, n, o, s, a) {
  const r = j6("sx-article-search");
  return X6(), W6("main", {
    class: G6(["sx-article-search-view", a.classes])
  }, [
    q6(r)
  ], 2);
}
const Y6 = /* @__PURE__ */ z(H6, [["render", K6]]), J6 = window.Vuex.useStore, Sh = [
  {
    path: "",
    name: "dashboard",
    component: Id,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: Y6,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: P$,
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: e3,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: fV,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: wD,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: IA,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: rL,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: KT,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Id,
    meta: { workflowStep: 0 }
  }
], yc = ay({
  history: sS(),
  routes: Sh
});
yc.beforeEach((e, t, n) => {
  const o = J6();
  if (o.commit("application/setPreviousRoute", t.name), mw.user.isAnon() || zp.assertUser().catch((l) => {
    l instanceof wo && o.commit("application/setIsLoginDialogOn", !0);
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
    const l = Math.ceil(a) - 1, u = Sh.find(
      (d) => d.meta.workflowStep === l
    );
    n({ name: u.name });
    return;
  }
  n();
});
yc.afterEach((e, t) => {
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const Q6 = window.Vue.createApp, Z6 = mw.config.get("wgUserLanguage"), e9 = "en", t9 = mw.messages.values || {}, ko = Q6(e_);
ko.use(yc);
ko.use($v);
ko.use(o1);
ko.use(n1);
const n9 = F1({
  locale: Z6,
  finalFallback: e9,
  messages: t9,
  wikilinks: !0
});
ko.use(n9);
ko.mount("#contenttranslation");
