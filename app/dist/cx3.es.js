/*@nomin*/
var mh = Object.defineProperty, ph = Object.defineProperties;
var hh = Object.getOwnPropertyDescriptors;
var fc = Object.getOwnPropertySymbols;
var wh = Object.prototype.hasOwnProperty, fh = Object.prototype.propertyIsEnumerable;
var _c = (e, t, n) => t in e ? mh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, te = (e, t) => {
  for (var n in t || (t = {}))
    wh.call(t, n) && _c(e, n, t[n]);
  if (fc)
    for (var n of fc(t))
      fh.call(t, n) && _c(e, n, t[n]);
  return e;
}, Ne = (e, t) => ph(e, hh(t));
var C = (e, t, n) => new Promise((o, s) => {
  var a = (u) => {
    try {
      l(n.next(u));
    } catch (g) {
      s(g);
    }
  }, i = (u) => {
    try {
      l(n.throw(u));
    } catch (g) {
      s(g);
    }
  }, l = (u) => u.done ? o(u.value) : Promise.resolve(u.value).then(a, i);
  l((n = n.apply(e, t)).next());
});
window.Vuex = require("vuex");
{
  const { CdxButton: e, CdxIcon: t, CdxDialog: n, CdxInfoChip: o } = require("../codex.js");
  window.Codex = { CdxButton: e, CdxIcon: t, CdxDialog: n, CdxInfoChip: o };
}
const P = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, _h = {
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
}, vh = window.Vue.toDisplayString, ai = window.Vue.openBlock, ii = window.Vue.createElementBlock, Sh = window.Vue.createCommentVNode, vc = window.Vue.createElementVNode, yh = window.Vue.normalizeClass, Ch = ["width", "height", "aria-labelledby"], kh = ["id"], xh = ["fill"], bh = ["d"];
function $h(e, t, n, o, s, a) {
  return ai(), ii("span", {
    class: yh(["mw-ui-icon notranslate", a.classes])
  }, [
    (ai(), ii("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...i) => a.handleClick && a.handleClick(...i))
    }, [
      n.iconName ? (ai(), ii("title", {
        key: 0,
        id: n.iconName
      }, vh(n.iconName), 9, kh)) : Sh("", !0),
      vc("g", { fill: n.iconColor }, [
        vc("path", { d: a.iconImagePath }, null, 8, bh)
      ], 8, xh)
    ], 8, Ch))
  ], 2);
}
const be = /* @__PURE__ */ P(_h, [["render", $h]]);
const Vh = {
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
}, Eh = window.Vue.renderSlot, Ah = window.Vue.resolveComponent, Sc = window.Vue.normalizeClass, Us = window.Vue.openBlock, ri = window.Vue.createBlock, li = window.Vue.createCommentVNode, Dh = window.Vue.toDisplayString, Lh = window.Vue.createElementBlock, Th = window.Vue.toHandlerKey, Bh = window.Vue.withModifiers, Ph = window.Vue.mergeProps, Fh = window.Vue.createElementVNode, Mh = window.Vue.resolveDynamicComponent, Nh = window.Vue.withCtx, Uh = { class: "mw-ui-button__content" }, Ih = ["textContent"];
function zh(e, t, n, o, s, a) {
  const i = Ah("mw-icon");
  return Us(), ri(Mh(a.component), {
    class: Sc(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: Nh(() => [
      Eh(e.$slots, "default", {}, () => [
        Fh("span", Uh, [
          n.icon ? (Us(), ri(i, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: Sc(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : li("", !0),
          !a.isIcon && n.label ? (Us(), Lh("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: Dh(n.label)
          }, null, 8, Ih)) : li("", !0),
          n.indicator ? (Us(), ri(i, Ph({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [Th(a.indicatorClickEvent)]: t[0] || (t[0] = Bh((l) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : li("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const Le = /* @__PURE__ */ P(Vh, [["render", zh]]);
const Rh = {
  name: "MwButtonGroup",
  components: {
    MwButton: Le
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
}, Oh = window.Vue.renderList, Hh = window.Vue.Fragment, ci = window.Vue.openBlock, yc = window.Vue.createElementBlock, jh = window.Vue.resolveComponent, qh = window.Vue.withModifiers, Gh = window.Vue.mergeProps, Wh = window.Vue.createBlock, Xh = { class: "row mw-ui-button-group ma-0 pa-0" };
function Kh(e, t, n, o, s, a) {
  const i = jh("mw-button");
  return ci(), yc("div", Xh, [
    (ci(!0), yc(Hh, null, Oh(n.items, (l) => (ci(), Wh(i, Gh({
      key: l.value,
      value: l.value,
      "aria-selected": a.isActive(l) || null,
      ref_for: !0
    }, l.props, {
      class: ["ma-0", a.buttonClasses(l)],
      style: a.activeIndicatorStyle(l),
      onClick: qh((u) => e.$emit("select", l.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const vs = /* @__PURE__ */ P(Rh, [["render", Kh]]);
const Yh = window.Vue.renderSlot, Qh = window.Vue.unref, Jh = window.Vue.createVNode, Zh = window.Vue.createElementVNode, ew = window.Vue.openBlock, tw = window.Vue.createElementBlock, nw = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, ow = { class: "col-12 ma-0 pa-0" }, sw = {
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
  setup(e) {
    return (t, n) => (ew(), tw("footer", nw, [
      Zh("div", ow, [
        Yh(t.$slots, "default", {}, () => [
          Jh(Qh(vs), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: n[0] || (n[0] = (o) => t.$emit("update:active", o))
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
};
const aw = {
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
}, Cc = window.Vue.renderSlot, iw = window.Vue.toDisplayString, kc = window.Vue.openBlock, xc = window.Vue.createElementBlock, rw = window.Vue.createCommentVNode, lw = window.Vue.createElementVNode, cw = { class: "mw-ui-card" }, uw = ["textContent"], dw = { class: "mw-ui-card__content" };
function gw(e, t, n, o, s, a) {
  return kc(), xc("div", cw, [
    Cc(e.$slots, "header", {}, () => [
      n.title ? (kc(), xc("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: iw(n.title)
      }, null, 8, uw)) : rw("", !0)
    ]),
    lw("div", dw, [
      Cc(e.$slots, "default")
    ])
  ]);
}
const et = /* @__PURE__ */ P(aw, [["render", gw]]);
const pw = {}, hw = window.Vue.openBlock, ww = window.Vue.createElementBlock, fw = { class: "mw-ui-divider row" };
function _w(e, t) {
  return hw(), ww("div", fw);
}
const qa = /* @__PURE__ */ P(pw, [["render", _w]]);
const vw = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, Sw = window.Vue.renderSlot, yw = window.Vue.resolveDynamicComponent, Cw = window.Vue.withCtx, kw = window.Vue.openBlock, xw = window.Vue.createBlock;
function bw(e, t, n, o, s, a) {
  return kw(), xw(yw(n.tag), { class: "mw-grid container" }, {
    default: Cw(() => [
      Sw(e.$slots, "default")
    ]),
    _: 3
  });
}
const $w = /* @__PURE__ */ P(vw, [["render", bw]]), Vw = {
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
}, Ew = window.Vue.renderSlot, Aw = window.Vue.resolveDynamicComponent, Dw = window.Vue.normalizeClass, Lw = window.Vue.withCtx, Tw = window.Vue.openBlock, Bw = window.Vue.createBlock;
function Pw(e, t, n, o, s, a) {
  return Tw(), Bw(Aw(n.tag), {
    class: Dw(a.classes)
  }, {
    default: Lw(() => [
      Ew(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const B = /* @__PURE__ */ P(Vw, [["render", Pw]]), pl = ["mobile", "tablet", "desktop", "desktop-wide"], Fw = pl.reduce(
  (e, t) => Ne(te({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), Mw = {
  name: "MwCol",
  props: Ne(te({}, Fw), {
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
      for (let n = 0; n < pl.length; n++) {
        let o = pl[n], s = this.$props[o];
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
}, Nw = window.Vue.renderSlot, Uw = window.Vue.resolveDynamicComponent, Iw = window.Vue.normalizeClass, zw = window.Vue.withCtx, Rw = window.Vue.openBlock, Ow = window.Vue.createBlock;
function Hw(e, t, n, o, s, a) {
  return Rw(), Ow(Uw(n.tag), {
    class: Iw(a.classes)
  }, {
    default: zw(() => [
      Nw(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const k = /* @__PURE__ */ P(Mw, [["render", Hw]]), jw = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", qw = "M3 3H1v16h18v-2H3z M11 11L8 9l-4 4v3h14V5z", Gw = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", Ga = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", Ww = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, Xw = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", Kw = "M20 7h-7L10 .5 7 7H0l5.46 5.47-1.64 7 6.18-3.7 6.18 3.73-1.63-7zm-10 6.9l-3.76 2.27 1-4.28L3.5 8.5h4.61L10 4.6l1.9 3.9h4.6l-3.73 3.4 1 4.28z", xm = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", hl = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", Al = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", ao = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", Yw = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", Qw = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", bm = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", $m = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", Jw = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", Vm = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", Zw = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", ef = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", tf = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", nf = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", of = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", sf = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, eo = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, af = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, Dl = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, rf = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, Ll = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", lf = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z", cf = "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 5h2v2H9zm0 4h2v6H9z", uf = "M 19 3 L 2 7 A 3.83 3.83 0 0 0 1 9.5 A 3.83 3.83 0 0 0 2 12 L 4 12.470703 L 4 15 C 4 16.108 4.892 17 6 17 C 7.108 17 8 16.108 8 15 L 8 13.412109 L 19 16 L 19 3 z";
const ui = window.Vue.computed, df = window.Vue.watch, gf = window.Vue.ref, mf = window.Vue.nextTick, pf = {
  name: "MwDialog",
  components: {
    MwButton: Le,
    MwRow: B,
    MwCol: k,
    MwDivider: qa
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
    const n = gf(null), o = ui(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = ui(() => ({
      "background-color": e.overlayColor,
      opacity: e.overlayOpacity
    })), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, i = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    df(
      () => e.value,
      (u) => {
        u ? (i(), mf(() => {
          n.value.focus();
        })) : a();
      }
    );
    const l = ui(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: l,
      overlayStyles: s,
      mwIconClose: ao,
      root: n
    };
  }
}, bc = window.Vue.normalizeStyle, di = window.Vue.createElementVNode, gi = window.Vue.renderSlot, Is = window.Vue.resolveComponent, wo = window.Vue.createVNode, mi = window.Vue.withCtx, $c = window.Vue.createCommentVNode, hf = window.Vue.withKeys, wf = window.Vue.normalizeClass, Vc = window.Vue.openBlock, ff = window.Vue.createElementBlock, _f = window.Vue.Transition, vf = window.Vue.createBlock, Sf = { class: "mw-ui-dialog__shell items-stretch" }, yf = { class: "mw-ui-dialog__body" };
function Cf(e, t, n, o, s, a) {
  const i = Is("mw-col"), l = Is("mw-button"), u = Is("mw-row"), g = Is("mw-divider");
  return Vc(), vf(_f, {
    name: `mw-ui-animation-${n.animation}`,
    style: bc(o.cssVars)
  }, {
    default: mi(() => [
      n.value ? (Vc(), ff("div", {
        key: 0,
        ref: "root",
        class: wf(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = hf((r) => n.closeOnEscapeKey && o.close, ["esc"]))
      }, [
        di("div", {
          class: "mw-ui-dialog__overlay",
          style: bc(o.overlayStyles),
          onClick: t[0] || (t[0] = (r) => !n.persistent && o.close)
        }, null, 4),
        di("div", Sf, [
          n.header ? gi(e.$slots, "header", { key: 0 }, () => [
            wo(u, { class: "mw-ui-dialog__header" }, {
              default: mi(() => [
                wo(i, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                wo(i, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: mi(() => [
                    wo(l, {
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
            wo(g)
          ]) : $c("", !0),
          di("div", yf, [
            gi(e.$slots, "default")
          ]),
          gi(e.$slots, "footer")
        ])
      ], 34)) : $c("", !0)
    ]),
    _: 3
  }, 8, ["name", "style"]);
}
const qe = /* @__PURE__ */ P(pf, [["render", Cf]]);
const kf = {
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
      const t = te({}, e.$attrs);
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
}, Ec = window.Vue.renderSlot, xf = window.Vue.resolveComponent, zs = window.Vue.openBlock, pi = window.Vue.createBlock, Ac = window.Vue.createCommentVNode, bf = window.Vue.resolveDynamicComponent, $f = window.Vue.toDisplayString, Vf = window.Vue.mergeProps, Ef = window.Vue.withModifiers, Af = window.Vue.createElementVNode, Df = window.Vue.normalizeClass, Lf = window.Vue.createElementBlock, Tf = { class: "mw-ui-input__content" };
function Bf(e, t, n, o, s, a) {
  const i = xf("mw-icon");
  return zs(), Lf("div", {
    class: Df(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    Af("div", Tf, [
      Ec(e.$slots, "icon", {}, () => [
        n.icon ? (zs(), pi(i, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : Ac("", !0)
      ]),
      (zs(), pi(bf(n.type === "textarea" ? n.type : "input"), Vf({
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
        textContent: $f(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      Ec(e.$slots, "indicator", {}, () => [
        n.indicator ? (zs(), pi(i, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = Ef((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : Ac("", !0)
      ])
    ])
  ], 2);
}
const Tl = /* @__PURE__ */ P(kf, [["render", Bf]]);
const Pf = {
  name: "MwMessage",
  components: { MwCol: k, MwRow: B, MwIcon: be, MwButton: Le },
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
    mwIconClose: ao,
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
      notice: sf,
      warning: Dl,
      success: eo,
      error: af
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
}, hi = window.Vue.renderSlot, Rs = window.Vue.resolveComponent, Dc = window.Vue.createVNode, Lc = window.Vue.withCtx, Tc = window.Vue.openBlock, Bc = window.Vue.createBlock, Pc = window.Vue.createCommentVNode, Ff = window.Vue.normalizeClass;
function Mf(e, t, n, o, s, a) {
  const i = Rs("mw-icon"), l = Rs("mw-col"), u = Rs("mw-button"), g = Rs("mw-row");
  return e.shown ? (Tc(), Bc(g, {
    key: 0,
    class: Ff([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: Lc(() => [
      hi(e.$slots, "icon", {}, () => [
        Dc(i, {
          icon: a.icon,
          size: 24,
          class: "col shrink mw-ui-message__icon pa-1 items-start"
        }, null, 8, ["icon"])
      ]),
      Dc(l, {
        id: `${e.id}-label`,
        tag: "span",
        grow: "",
        align: "center",
        class: "mw-ui-message__label"
      }, {
        default: Lc(() => [
          hi(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id"]),
      hi(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (Tc(), Bc(u, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : Pc("", !0)
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : Pc("", !0);
}
const Nf = /* @__PURE__ */ P(Pf, [["render", Mf]]);
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
const Uf = {}, If = window.Vue.createElementVNode, zf = window.Vue.openBlock, Rf = window.Vue.createElementBlock, Of = { class: "mw-ui-spinner" }, Hf = /* @__PURE__ */ If("div", { class: "mw-ui-spinner__bounce" }, null, -1), jf = [
  Hf
];
function qf(e, t) {
  return zf(), Rf("div", Of, jf);
}
const tt = /* @__PURE__ */ P(Uf, [["render", qf]]), He = {
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
const Gf = window.Vue.computed, Wf = {
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
      default: Ll
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: He.gray600
    },
    placeholderBackgroundColor: {
      type: String,
      default: He.gray200
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = Gf(() => {
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
}, Fc = window.Vue.normalizeStyle, Mc = window.Vue.openBlock, Xf = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Kf = window.Vue.resolveComponent, Yf = window.Vue.createBlock;
function Qf(e, t, n, o, s, a) {
  const i = Kf("mw-ui-icon");
  return n.thumbnail ? (Mc(), Xf("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Fc(o.style)
  }, null, 4)) : (Mc(), Yf(i, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Fc(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Bl = /* @__PURE__ */ P(Wf, [["render", Qf]]);
const Jf = {
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
}, Zf = window.Vue.vModelRadio, Ha = window.Vue.createElementVNode, e0 = window.Vue.withDirectives, t0 = window.Vue.toDisplayString, n0 = window.Vue.resolveComponent, o0 = window.Vue.normalizeClass, s0 = window.Vue.withCtx, a0 = window.Vue.openBlock, i0 = window.Vue.createBlock, r0 = { class: "mw-ui-radio__controls" }, l0 = ["id", "disabled", "name", "value"], c0 = /* @__PURE__ */ Ha("span", { class: "mw-ui-radio__controls__icon" }, null, -1), u0 = ["for", "textContent"];
function d0(e, t, n, o, s, a) {
  const i = n0("mw-row");
  return a0(), i0(i, {
    class: o0(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: s0(() => [
      Ha("div", r0, [
        e0(Ha("input", {
          id: n.id,
          "onUpdate:modelValue": t[0] || (t[0] = (l) => a.inputModel = l),
          type: "radio",
          disabled: n.disabled || null,
          name: n.name,
          value: n.inputValue
        }, null, 8, l0), [
          [Zf, a.inputModel]
        ]),
        c0
      ]),
      Ha("label", {
        for: n.id,
        class: "ps-2",
        textContent: t0(n.label)
      }, null, 8, u0)
    ]),
    _: 1
  }, 8, ["class"]);
}
const wl = /* @__PURE__ */ P(Jf, [["render", d0]]), Nc = window.Vue.h, g0 = {
  name: "MwRadioGroup",
  components: { MwRadio: wl },
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
      (o) => Nc(wl, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), Nc("div", { class: "mw-ui-radio-group" }, n);
  }
};
const m0 = {
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
}, Uc = window.Vue.normalizeClass, Ic = window.Vue.normalizeStyle, p0 = window.Vue.createElementVNode, h0 = window.Vue.openBlock, w0 = window.Vue.createElementBlock, f0 = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function _0(e, t, n, o, s, a) {
  return h0(), w0("div", {
    class: Uc(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: Ic(a.containerStyles)
  }, [
    p0("div", {
      class: Uc(["mw-progress-bar__bar", a.barClass]),
      style: Ic(a.barStyles)
    }, null, 6)
  ], 14, f0);
}
const Em = /* @__PURE__ */ P(m0, [["render", _0]]), v0 = (e, t, n, o) => (s) => {
  const a = s.clientY, i = parseInt(
    document.defaultView.getComputedStyle(n.value).height,
    10
  ), l = (g) => {
    o.value = !1;
    let r = Math.min(
      i + g.clientY - a,
      e.value
    );
    r = Math.max(r, t.value), n.value.style.height = r + "px";
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
}, S0 = (e, t, n, o) => ({ initiateDrag: v0(
  e,
  t,
  n,
  o
) }), y0 = window.Vue.ref, zc = window.Vue.computed, C0 = (e, t, n, o) => {
  const s = y0(0), a = zc(
    () => t.value > e.value
  ), i = zc(
    () => t.value <= e.value * (s.value + 1)
  ), l = (g) => {
    s.value = g, n.value.scroll(0, e.value * s.value);
  };
  return {
    handleArrowUpClick: () => {
      if (!o.value) {
        n.value.style.removeProperty("height"), o.value = !0, l(0);
        return;
      }
      l(s.value - 1);
    },
    isScrolledToEnd: i,
    scrollToStepByIndex: l,
    scrollable: a,
    scrollIndex: s
  };
};
const Os = window.Vue.ref, k0 = window.Vue.onMounted, Rc = window.Vue.computed, x0 = window.Vue.nextTick, b0 = {
  name: "MwExpandableContent",
  components: {
    MwButton: Le
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
    const t = Os(!0), n = Os(null), o = Rc(
      () => Math.min(e.minHeight, s.value)
    ), s = Os(1), { initiateDrag: a } = S0(
      s,
      o,
      n,
      t
    ), {
      isScrolledToEnd: i,
      scrollable: l,
      scrollIndex: u,
      scrollToStepByIndex: g,
      handleArrowUpClick: r
    } = C0(o, s, n, t), c = () => g(u.value + 1), d = Os(null), m = Rc(() => ({
      "--collapsed-height": o.value + "px"
    })), p = () => {
      if (!n.value)
        return;
      const w = n.value.style.height;
      if (n.value.style.removeProperty("height"), s.value = n.value.scrollHeight, w) {
        let f = Math.min(w, s.value);
        f = Math.max(f, o.value), f === o.value && (t.value = !0), n.value.style.height = f + "px";
      }
    };
    return k0(() => C(this, null, function* () {
      var w;
      yield x0(), s.value = n.value.scrollHeight, (w = d.value) == null || w.addEventListener(
        "pointerdown",
        a,
        !1
      ), window.addEventListener("resize", p);
    })), {
      contentRef: n,
      cssVars: m,
      dragIndicatorRef: d,
      handleArrowUpClick: r,
      isCollapsed: t,
      isScrolledToEnd: i,
      mwIconCollapse: rf,
      mwIconExpand: hl,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), g(0)), t.value = !t.value;
      },
      scrollable: l,
      scrollIndex: u,
      scrollToNextStep: c
    };
  }
}, $0 = window.Vue.renderSlot, V0 = window.Vue.normalizeClass, Hs = window.Vue.createElementVNode, E0 = window.Vue.resolveComponent, A0 = window.Vue.createVNode, wi = window.Vue.openBlock, D0 = window.Vue.createBlock, Oc = window.Vue.createCommentVNode, Hc = window.Vue.createElementBlock, L0 = window.Vue.normalizeStyle, T0 = { class: "mw-ui-expandable-content__container" }, B0 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, P0 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function F0(e, t, n, o, s, a) {
  const i = E0("mw-button");
  return wi(), Hc("div", {
    class: "mw-ui-expandable-content",
    style: L0(o.cssVars)
  }, [
    Hs("div", T0, [
      Hs("div", {
        ref: "contentRef",
        class: V0(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        $0(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (wi(), Hc("div", B0, [
        A0(i, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (wi(), D0(i, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : Oc("", !0)
      ])) : Oc("", !0)
    ]),
    Hs("div", P0, [
      Hs("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...l) => o.onDragButtonClicked && o.onDragButtonClicked(...l))
      })
    ], 512)
  ], 4);
}
const M0 = /* @__PURE__ */ P(b0, [["render", F0]]);
const js = window.Vue.computed, N0 = {
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
      default: He.blue600
    },
    inactiveColor: {
      type: String,
      default: He.gray300
    },
    strokeWidth: {
      type: Number,
      default: 2
    }
  },
  setup(e) {
    const t = js(() => e.size / 2 * 0.9), n = js(() => Math.PI * (t.value * 2)), o = js(
      () => (100 - e.percentage) / 100 * n.value
    ), s = js(() => ({
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
}, jc = window.Vue.createElementVNode, qc = window.Vue.normalizeStyle, U0 = window.Vue.openBlock, I0 = window.Vue.createElementBlock, z0 = ["width", "height", "viewport"], R0 = ["r", "cx", "cy", "stroke-dasharray"], O0 = ["r", "cx", "cy", "stroke-dasharray"];
function H0(e, t, n, o, s, a) {
  return U0(), I0("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: qc(o.cssVars)
  }, [
    jc("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, R0),
    jc("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: qc({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, O0)
  ], 12, z0);
}
const j0 = /* @__PURE__ */ P(N0, [["render", H0]]), q0 = window.Vue.ref, qt = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, Gt = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${qt.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${qt.tablet}px) and (max-width: ${qt.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${qt.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${qt.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${qt.desktopwide - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${qt.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${qt["desktop-wide"]}px)`
}, fi = {
  mobile: () => matchMedia(Gt.mobile).matches,
  tablet: () => matchMedia(Gt.tablet).matches,
  desktop: () => matchMedia(Gt.desktop).matches,
  desktopwide: () => matchMedia(Gt["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(Gt["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(Gt["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(Gt["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(Gt["desktop-and-down"]).matches
}, G0 = {
  install: (e) => {
    const t = () => {
      for (let o in fi)
        fi.hasOwnProperty(o) && (n.value[o] = fi[o]());
    }, n = q0({});
    t(), window.addEventListener("resize", t), e.config.globalProperties.$mwui = Ne(te({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: n.value
    }), e.provide("breakpoints", n);
  }
}, W0 = {
  install: (e) => {
    e.config.globalProperties.$mwui = Ne(te({}, e.config.globalProperties.$mwui || {}), {
      colors: He
    }), e.provide("colors", He);
  }
};
class io extends Error {
}
const X0 = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new io();
}), Am = { assertUser: X0 };
const K0 = window.Vue.resolveDirective, fo = window.Vue.createElementVNode, Gc = window.Vue.withDirectives, Y0 = window.Vue.toDisplayString, Q0 = window.Vue.unref, Wc = window.Vue.withCtx, J0 = window.Vue.openBlock, Z0 = window.Vue.createBlock, e_ = window.Vue.createCommentVNode, t_ = { class: "pa-4 sx-login-dialog__header" }, n_ = { class: "sx-login-dialog__body px-6 pb-4" }, o_ = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, s_ = ["href"], a_ = window.Vue.computed, i_ = window.Vue.ref, r_ = window.Vuex.useStore, l_ = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = r_(), n = a_(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = i_(mw.util.getUrl("Special:UserLogin"));
    return (a, i) => {
      const l = K0("i18n");
      return n.value ? (J0(), Z0(Q0(qe), {
        key: 0,
        "overlay-opacity": 0.25,
        "overlay-color": "#000",
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: Wc(() => [
          fo("div", t_, [
            Gc(fo("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: Wc(() => [
          Gc(fo("div", n_, null, 512), [
            [l, void 0, "cx-sx-login-dialog-body"]
          ]),
          fo("div", o_, [
            fo("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, Y0(a.$i18n("cx-sx-login-dialog-button-label")), 9, s_)
          ])
        ]),
        _: 1
      })) : e_("", !0);
    };
  }
}, G = new mw.cx.SiteMapper(), c_ = mw.util.getUrl, u_ = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
};
class Wa {
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
    pageRevision: l,
    status: u,
    targetTitle: g
  }) {
    this.translationId = t, this.sourceTitle = n, this.sourceLanguage = o, this.targetLanguage = s, this.startTimestamp = a, this.lastUpdatedTimestamp = i, this.pageRevision = l, this.status = u, this.targetTitle = g;
  }
}
const qs = "original", Gs = "empty", d_ = {
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
      qs,
      Gs
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
    return qs;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return Gs;
  }
  static isUserMTProvider(t) {
    return [qs, Gs].includes(
      t
    );
  }
  static getProviderForInstrumentation(t) {
    return t === Gs ? "blank" : t === qs ? "source" : t.toLowerCase();
  }
}
class cn {
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = Ne(te({}, a), {
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
const Xc = (e) => {
  var n;
  const t = ja(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, ja = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, Dn = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), Dm = (e) => {
  const t = ja(e);
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
      let l = !0;
      i[0] === "<nowiki>" ? (o = !0, l = !1) : i[0] === "</nowiki>" || i[0].match(/<nowiki\s*\/>/) ? l = !1 : i[0].match(/(?:\[\[)/) ? (a++, l = !1) : i[0].match(/(?:\]\])/) ? a > 0 && (a--, l = !1) : i[0].match(/(?:\{\{)/) ? (s++, l = !1) : i[0].match(/(?:\}\})/) ? s > 0 && (s--, l = !1) : i[0].match(/\|+/) && (s > 0 || a > 0) && (l = !1), l ? n += "<nowiki>" + i[0] + "</nowiki>" : n += i[0];
    }
  }
  return n;
}, Lm = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, Tm = (e) => {
  const t = Lm(e);
  return t == null ? void 0 : t.targetExists;
};
class _i {
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
let De = class {
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
      (a) => Dn(a)
    );
    s && Tm(s) && (this.blockTemplateAdaptationInfo[t] = Lm(s));
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
      (t) => Dn(t)
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
    const t = ja(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? Xc(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => Dn(o));
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
    return n && Xc(n) || "";
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
    const o = ja(n);
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
      (a) => Dn(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new _i({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new _i({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new _i({
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
        (s) => Dn(s)
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
};
const m_ = [
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
], p_ = (e, t, n) => {
  let o, s, a, i, l;
  return !e || !t ? 0 : e === t ? 1 : (s = i = Kc(e, n), a = l = Kc(t, n), l.length > i.length && (s = l, a = i), o = s.filter(function(u) {
    return a.indexOf(u) >= 0;
  }), o.length / s.length);
}, Kc = function(e, t) {
  return e ? m_.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, Bm = 95, h_ = 85, w_ = [
  { status: "failure", value: 100 - Bm },
  { status: "warning", value: 100 - h_ },
  { status: "success", value: 100 }
], Pm = (e, t, n) => {
  const o = Yc(e).textContent, s = Yc(t).textContent, a = 100 - 100 * p_(s, o, n);
  return Math.ceil(a);
}, f_ = (e) => w_.find((t) => e <= t.value).status, __ = (e, t) => Pm(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), v_ = () => (100 - Bm) / 100, Yc = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, gt = {
  calculateScore: Pm,
  getScoreStatus: f_,
  getMTScoreForPageSection: __,
  getMtModificationThreshold: v_
}, Ws = "__LEAD_SECTION__";
class fl {
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
    return Ws;
  }
  static isSectionLead(t) {
    return !t || t === Ws;
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
      let l = "";
      i && (l = i.innerHTML), a.editedTranslation = l;
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
    return n instanceof De ? n.transclusionNode.outerHTML : n instanceof cn ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof De ? t.blockTemplateSelected = !1 : t instanceof cn && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof De ? n.blockTemplateSelected = !0 : n instanceof cn && (n.selected = !0);
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
    if (o instanceof De)
      return !!o.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (o instanceof cn)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof De ? n.blockTemplateProposedTranslations[t] || "" : n instanceof cn ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof De ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof cn && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const o = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, s = gt.getMTScoreForPageSection(this, t) / 100;
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
    return this.isLeadSection ? Ws : this.originalTitle;
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
    return this.isLeadSection ? Ws : this.title;
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
class Pl extends Wa {
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
    startTimestamp: l,
    lastUpdatedTimestamp: u,
    status: g,
    pageRevision: r,
    targetTitle: c,
    sourceSectionTitle: d,
    targetSectionTitle: m,
    progress: p
  }) {
    super({
      translationId: n,
      sourceTitle: s,
      sourceLanguage: a,
      targetLanguage: i,
      startTimestamp: l,
      lastUpdatedTimestamp: u,
      pageRevision: r,
      status: g,
      targetTitle: c
    }), this.sectionTranslationId = t, this.sectionId = o, this.sourceSectionTitle = d, this.targetSectionTitle = m, this.progress = p, this.restored = !1;
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
    return fl.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? fl.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const mt = "previous-edits", Ot = "popular", pt = "topic", Rt = "automatic", Qc = window.Vue.ref, S_ = mw.loader.require("ext.cx.articletopics"), Jc = {
  type: Rt,
  id: mt
}, y_ = () => {
  const e = Qc(
    S_.flatMap((o) => o.topics).map((o) => o.topicId.toLowerCase())
  ), t = Qc(!1);
  return { filtersValidatorError: t, validateFilters: ({ type: o, id: s }) => (t.value = !1, o = o == null ? void 0 : o.toLowerCase(), s = s == null ? void 0 : s.toLowerCase(), o === pt ? e.value.some((a) => a === s) ? { type: o, id: s } : (t.value = !0, Jc) : s === mt ? {
    type: Rt,
    id: mt
  } : s === Ot ? {
    type: Rt,
    id: Ot
  } : Jc) };
}, C_ = window.Vue.inject, k_ = window.Vue.reactive;
var x_ = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, Fm = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(x_, function() {
    var n = { ar: "٠١٢٣٤٥٦٧٨٩", fa: "۰۱۲۳۴۵۶۷۸۹", ml: "൦൧൨൩൪൫൬൭൮൯", kn: "೦೧೨೩೪೫೬೭೮೯", lo: "໐໑໒໓໔໕໖໗໘໙", or: "୦୧୨୩୪୫୬୭୮୯", kh: "០១២៣៤៥៦៧៨៩", nqo: "߀߁߂߃߄߅߆߇߈߉", pa: "੦੧੨੩੪੫੬੭੮੯", gu: "૦૧૨૩૪૫૬૭૮૯", hi: "०१२३४५६७८९", my: "၀၁၂၃၄၅၆၇၈၉", ta: "௦௧௨௩௪௫௬௭௮௯", te: "౦౧౨౩౪౫౬౭౮౯", th: "๐๑๒๓๔๕๖๗๘๙", bo: "༠༡༢༣༤༥༦༧༨༩" }, o = { ab: ["ru"], abs: ["id"], ace: ["id"], ady: ["ady-cyrl"], aeb: ["aeb-arab"], "aeb-arab": ["ar"], aln: ["sq"], alt: ["ru"], ami: ["zh-hant"], an: ["es"], anp: ["hi"], arn: ["es"], arq: ["ar"], ary: ["ar"], arz: ["ar"], ast: ["es"], atj: ["fr"], av: ["ru"], avk: ["fr", "es", "ru"], awa: ["hi"], ay: ["es"], azb: ["fa"], ba: ["ru"], ban: ["id"], "ban-bali": ["ban"], bar: ["de"], bbc: ["bbc-latn"], "bbc-latn": ["id"], bcc: ["fa"], "be-tarask": ["be"], bgn: ["fa"], bh: ["bho"], bi: ["en"], bjn: ["id"], bm: ["fr"], bpy: ["bn"], bqi: ["fa"], br: ["fr"], btm: ["id"], bug: ["id"], bxr: ["ru"], ca: ["oc"], "cbk-zam": ["es"], cdo: ["nan", "zh-hant"], ce: ["ru"], co: ["it"], crh: ["crh-latn"], "crh-cyrl": ["ru"], cs: ["sk"], csb: ["pl"], cv: ["ru"], "de-at": ["de"], "de-ch": ["de"], "de-formal": ["de"], dsb: ["hsb", "de"], dtp: ["ms"], dty: ["ne"], egl: ["it"], eml: ["it"], "en-ca": ["en"], "en-gb": ["en"], "es-419": ["es"], "es-formal": ["es"], ext: ["es"], ff: ["fr"], fit: ["fi"], frc: ["fr"], frp: ["fr"], frr: ["de"], fur: ["it"], gag: ["tr"], gan: ["gan-hant", "zh-hant", "zh-hans"], "gan-hans": ["zh-hans"], "gan-hant": ["zh-hant", "zh-hans"], gcr: ["fr"], gl: ["pt"], glk: ["fa"], gn: ["es"], gom: ["gom-deva"], "gom-deva": ["hi"], gor: ["id"], gsw: ["de"], guc: ["es"], hak: ["zh-hant"], hif: ["hif-latn"], hrx: ["de"], hsb: ["dsb", "de"], ht: ["fr"], "hu-formal": ["hu"], hyw: ["hy"], ii: ["zh-cn", "zh-hans"], inh: ["ru"], io: ["eo"], iu: ["ike-cans"], jam: ["en"], jut: ["da"], jv: ["id"], kaa: ["kk-latn", "kk-cyrl"], kab: ["fr"], kbd: ["kbd-cyrl"], kbp: ["fr"], khw: ["ur"], kiu: ["tr"], kjp: ["my"], kk: ["kk-cyrl"], "kk-arab": ["kk-cyrl"], "kk-cn": ["kk-arab", "kk-cyrl"], "kk-kz": ["kk-cyrl"], "kk-latn": ["kk-cyrl"], "kk-tr": ["kk-latn", "kk-cyrl"], kl: ["da"], "ko-kp": ["ko"], koi: ["ru"], krc: ["ru"], krl: ["fi"], ks: ["ks-arab"], ksh: ["de"], ku: ["ku-latn"], "ku-arab": ["ckb"], kum: ["ru"], kv: ["ru"], lad: ["es"], lb: ["de"], lbe: ["ru"], lez: ["ru", "az"], li: ["nl"], lij: ["it"], liv: ["et"], lki: ["fa"], lld: ["it", "rm", "fur"], lmo: ["pms", "eml", "lij", "vec", "it"], ln: ["fr"], lrc: ["fa"], ltg: ["lv"], luz: ["fa"], lzh: ["zh-hant"], lzz: ["tr"], mad: ["id"], mai: ["hi"], "map-bms": ["jv", "id"], mdf: ["myv", "ru"], mg: ["fr"], mhr: ["mrj", "ru"], min: ["id"], mnw: ["my"], mo: ["ro"], mrj: ["mhr", "ru"], "ms-arab": ["ms"], mwl: ["pt"], myv: ["mdf", "ru"], mzn: ["fa"], nah: ["es"], nan: ["cdo", "zh-hant"], nap: ["it"], nb: ["nn"], nds: ["de"], "nds-nl": ["nl"], nia: ["id"], "nl-informal": ["nl"], nn: ["nb"], nrm: ["fr"], oc: ["ca", "fr"], olo: ["fi"], os: ["ru"], pcd: ["fr"], pdc: ["de"], pdt: ["de"], pfl: ["de"], pih: ["en"], pms: ["it"], pnt: ["el"], pt: ["pt-br"], "pt-br": ["pt"], qu: ["qug", "es"], qug: ["qu", "es"], rgn: ["it"], rmy: ["ro"], "roa-tara": ["it"], rue: ["uk", "ru"], rup: ["ro"], ruq: ["ruq-latn", "ro"], "ruq-cyrl": ["mk"], "ruq-latn": ["ro"], sa: ["hi"], sah: ["ru"], scn: ["it"], sco: ["en"], sdc: ["it"], sdh: ["cbk", "fa"], ses: ["fr"], sg: ["fr"], sgs: ["lt"], sh: ["bs", "sr-el", "hr"], shi: ["fr"], shy: ["shy-latn"], "shy-latn": ["fr"], sk: ["cs"], skr: ["skr-arab"], "skr-arab": ["ur", "pnb"], sli: ["de"], smn: ["fi"], sr: ["sr-ec"], srn: ["nl"], stq: ["de"], sty: ["ru"], su: ["id"], szl: ["pl"], szy: ["zh-tw", "zh-hant", "zh-hans"], tay: ["zh-tw", "zh-hant", "zh-hans"], tcy: ["kn"], tet: ["pt"], tg: ["tg-cyrl"], trv: ["zh-tw", "zh-hant", "zh-hans"], tt: ["tt-cyrl", "ru"], "tt-cyrl": ["ru"], ty: ["fr"], tyv: ["ru"], udm: ["ru"], ug: ["ug-arab"], vec: ["it"], vep: ["et"], vls: ["nl"], vmf: ["de"], vot: ["fi"], vro: ["et"], wa: ["fr"], wo: ["fr"], wuu: ["zh-hans"], xal: ["ru"], xmf: ["ka"], yi: ["he"], za: ["zh-hans"], zea: ["nl"], zgh: ["kab"], zh: ["zh-hans"], "zh-cn": ["zh-hans"], "zh-hant": ["zh-hans"], "zh-hk": ["zh-hant", "zh-hans"], "zh-mo": ["zh-hk", "zh-hant", "zh-hans"], "zh-my": ["zh-sg", "zh-hans"], "zh-sg": ["zh-hans"], "zh-tw": ["zh-hant", "zh-hans"] };
    class s {
      constructor(c) {
        this.locale = c;
      }
      convertPlural(c, d) {
        const m = /\d+=/i;
        if (!d || d.length === 0)
          return "";
        for (let h = 0; h < d.length; h++) {
          const w = d[h];
          if (m.test(w)) {
            if (parseInt(w.slice(0, w.indexOf("=")), 10) === c)
              return w.slice(w.indexOf("=") + 1);
            d[h] = void 0;
          }
        }
        d = d.filter((h) => !!h);
        let p = this.getPluralForm(c, this.locale);
        return p = Math.min(p, d.length - 1), d[p];
      }
      getPluralForm(c, d) {
        const m = new Intl.PluralRules(d), p = m.resolvedOptions().pluralCategories, h = m.select(c);
        return ["zero", "one", "two", "few", "many", "other"].filter((w) => p.includes(w)).indexOf(h);
      }
      convertNumber(c, d = !1) {
        let m = this.digitTransformTable(this.locale), p = "";
        if (d) {
          if (parseFloat(c, 10) === c || !m)
            return c;
          const h = [];
          for (const f in m)
            h[m[f]] = f;
          m = h;
          const w = String(c);
          for (let f = 0; f < w.length; f++)
            p += m[w[f]] || w[f];
          return parseFloat(p, 10);
        }
        if (Intl.NumberFormat) {
          let h;
          const w = [...o[this.locale] || [], "en"];
          return h = Intl.NumberFormat.supportedLocalesOf(this.locale).length ? [this.locale] : w, p = new Intl.NumberFormat(h).format(c), p === "NaN" && (p = c), p;
        }
      }
      convertGrammar(c, d) {
        return c;
      }
      gender(c, d) {
        if (!d || d.length === 0)
          return "";
        for (; d.length < 2; )
          d.push(d[d.length - 1]);
        return c === "male" ? d[0] : c === "female" ? d[1] : d.length === 3 ? d[2] : d[0];
      }
      digitTransformTable(c) {
        return !!n[c] && n[c].split("");
      }
    }
    var a = { bs: class extends s {
      convertGrammar(r, c) {
        switch (c) {
          case "instrumental":
            r = "s " + r;
            break;
          case "lokativ":
            r = "o " + r;
        }
        return r;
      }
    }, default: s, dsb: class extends s {
      convertGrammar(r, c) {
        switch (c) {
          case "instrumental":
            r = "z " + r;
            break;
          case "lokatiw":
            r = "wo " + r;
        }
        return r;
      }
    }, fi: class extends s {
      convertGrammar(r, c) {
        let d = r.match(/[aou][^äöy]*$/i);
        const m = r;
        switch (r.match(/wiki$/i) && (d = !1), r.match(/[bcdfghjklmnpqrstvwxz]$/i) && (r += "i"), c) {
          case "genitive":
            r += "n";
            break;
          case "elative":
            r += d ? "sta" : "stä";
            break;
          case "partitive":
            r += d ? "a" : "ä";
            break;
          case "illative":
            r += r.slice(-1) + "n";
            break;
          case "inessive":
            r += d ? "ssa" : "ssä";
            break;
          default:
            r = m;
        }
        return r;
      }
    }, ga: class extends s {
      convertGrammar(r, c) {
        if (c === "ainmlae")
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
      convertGrammar(r, c) {
        switch (c) {
          case "prefixed":
          case "תחילית":
            r.slice(0, 1) === "ו" && r.slice(0, 2) !== "וו" && (r = "ו" + r), r.slice(0, 1) === "ה" && (r = r.slice(1)), (r.slice(0, 1) < "א" || r.slice(0, 1) > "ת") && (r = "־" + r);
        }
        return r;
      }
    }, hsb: class extends s {
      convertGrammar(r, c) {
        switch (c) {
          case "instrumental":
            r = "z " + r;
            break;
          case "lokatiw":
            r = "wo " + r;
        }
        return r;
      }
    }, hu: class extends s {
      convertGrammar(r, c) {
        switch (c) {
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
      convertGrammar(r, c) {
        return c === "genitive" && (r.slice(-1) === "ա" ? r = r.slice(0, -1) + "այի" : r.slice(-1) === "ո" ? r = r.slice(0, -1) + "ոյի" : r.slice(-4) === "գիրք" ? r = r.slice(0, -4) + "գրքի" : r += "ի"), r;
      }
    }, la: class extends s {
      convertGrammar(r, c) {
        switch (c) {
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
      convertGrammar(r, c) {
        let d, m, p, h;
        switch (d = "мæ", m = "", p = "", h = "", r.match(/тæ$/i) ? (r = r.slice(0, -1), d = "æм") : r.match(/[аæеёиоыэюя]$/i) ? m = "й" : r.match(/у$/i) ? r.slice(-2, -1).match(/[аæеёиоыэюя]$/i) || (m = "й") : r.match(/[бвгджзйклмнопрстфхцчшщьъ]$/i) || (p = "-"), c) {
          case "genitive":
            h = p + m + "ы";
            break;
          case "dative":
            h = p + m + "æн";
            break;
          case "allative":
            h = p + d;
            break;
          case "ablative":
            h = m === "й" ? p + m + "æ" : p + m + "æй";
            break;
          case "superessive":
            h = p + m + "ыл";
            break;
          case "equative":
            h = p + m + "ау";
            break;
          case "comitative":
            h = p + "имæ";
        }
        return r + h;
      }
    }, ru: class extends s {
      convertGrammar(r, c) {
        return c === "genitive" && (r.slice(-1) === "ь" ? r = r.slice(0, -1) + "я" : r.slice(-2) === "ия" ? r = r.slice(0, -2) + "ии" : r.slice(-2) === "ка" ? r = r.slice(0, -2) + "ки" : r.slice(-2) === "ти" ? r = r.slice(0, -2) + "тей" : r.slice(-2) === "ды" ? r = r.slice(0, -2) + "дов" : r.slice(-3) === "ник" && (r = r.slice(0, -3) + "ника")), r;
      }
    }, sl: class extends s {
      convertGrammar(r, c) {
        switch (c) {
          case "mestnik":
            r = "o " + r;
            break;
          case "orodnik":
            r = "z " + r;
        }
        return r;
      }
    }, uk: class extends s {
      convertGrammar(r, c) {
        switch (c) {
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
    class l {
      constructor(c) {
        this.locale = c, this.language = new (a[c] || a.default)(c);
      }
      emit(c, d) {
        let m, p, h;
        switch (typeof c) {
          case "string":
          case "number":
            m = c;
            break;
          case "object":
            if (p = c.slice(1).map((w) => this.emit(w, d)), h = c[0].toLowerCase(), typeof this[h] != "function")
              throw new Error('unknown operation "' + h + '"');
            m = this[h](p, d);
            break;
          case "undefined":
            m = "";
            break;
          default:
            throw new Error("unexpected type in AST: " + typeof c);
        }
        return m;
      }
      concat(c) {
        let d = "";
        return c.forEach((m) => {
          d += m;
        }), d;
      }
      replace(c, d) {
        const m = parseInt(c[0], 10);
        return m < d.length ? d[m] : "$" + (m + 1);
      }
      plural(c) {
        const d = parseFloat(this.language.convertNumber(c[0], 10)), m = c.slice(1);
        return m.length ? this.language.convertPlural(d, m) : "";
      }
      gender(c) {
        const d = c[0], m = c.slice(1);
        return this.language.gender(d, m);
      }
      grammar(c) {
        const d = c[0], m = c[1];
        return m && d && this.language.convertGrammar(m, d);
      }
      wikilink(c) {
        let d, m = c[0];
        m.charAt(0) === ":" && (m = m.slice(1));
        const p = `./${m}`;
        return d = c.length === 1 ? m : c[1], `<a href="${p}" title="${m}">${d}</a>`;
      }
      extlink(c) {
        if (c.length !== 2)
          throw new Error("Expected two items in the node");
        return `<a href="${c[0]}">${c[1]}</a>`;
      }
      bidi(c) {
        const d = function(m) {
          const p = m.match(i);
          return p ? p[2] === void 0 ? "ltr" : "rtl" : null;
        }(c[0]);
        return d === "ltr" ? "‪" + c[0] + "‬" : d === "rtl" ? "‫" + c[0] + "‬" : c[0];
      }
      formatnum(c) {
        const d = !!c[1] && c[1] === "R", m = c[0];
        return typeof m == "string" || typeof m == "number" ? this.language.convertNumber(m, d) : m;
      }
      htmlattributes(c) {
        const d = {};
        for (let m = 0, p = c.length; m < p; m += 2)
          d[c[m]] = c[m + 1];
        return d;
      }
      htmlelement(c) {
        const d = c.shift(), m = c.shift();
        let p = c, h = "";
        for (const w in m)
          h += ` ${w}="${m[w]}"`;
        return Array.isArray(p) || (p = [p]), `<${d}${h}>${p.join("")}</${d}>`;
      }
    }
    class u {
      constructor(c, { wikilinks: d = !1 } = {}) {
        this.locale = c, this.wikilinks = d, this.emitter = new l(this.locale);
      }
      parse(c, d) {
        if (c.includes("{{") || c.includes("<") || this.wikilinks && c.includes("[")) {
          const m = function(p, { wikilinks: h = !1 } = {}) {
            let w = 0;
            function f(x) {
              return () => {
                for (let I = 0; I < x.length; I++) {
                  const Ce = x[I]();
                  if (Ce !== null)
                    return Ce;
                }
                return null;
              };
            }
            function _(x) {
              const I = w, Ce = [];
              for (let yt = 0; yt < x.length; yt++) {
                const Ct = x[yt]();
                if (Ct === null)
                  return w = I, null;
                Ce.push(Ct);
              }
              return Ce;
            }
            function S(x, I) {
              return () => {
                const Ce = w, yt = [];
                let Ct = I();
                for (; Ct !== null; )
                  yt.push(Ct), Ct = I();
                return yt.length < x ? (w = Ce, null) : yt;
              };
            }
            function y(x) {
              const I = x.length;
              return () => {
                let Ce = null;
                return p.slice(w, w + I) === x && (Ce = x, w += I), Ce;
              };
            }
            function D(x) {
              return () => {
                const I = p.slice(w).match(x);
                return I === null ? null : (w += I[0].length, I[0]);
              };
            }
            const T = D(/^\s+/), U = y("|"), V = y(":"), L = y("\\"), H = D(/^./), F = y("$"), N = D(/^\d+/), oe = y('"'), Q = y("'"), mn = D(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), pn = D(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), ft = f([nt, D(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function nt() {
              const x = _([L, H]);
              return x === null ? null : x[1];
            }
            const ho = f([nt, pn]), hn = f([nt, mn]);
            function _t() {
              const x = _([F, N]);
              return x === null ? null : ["REPLACE", parseInt(x[1], 10) - 1];
            }
            const Fe = (jt = D(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), vt = function(x) {
              return x.toString();
            }, () => {
              const x = jt();
              return x === null ? null : vt(x);
            });
            var jt, vt;
            function St() {
              const x = _([U, S(0, Fs)]);
              if (x === null)
                return null;
              const I = x[1];
              return I.length > 1 ? ["CONCAT"].concat(I) : I[0];
            }
            function Me() {
              const x = _([Fe, V, _t]);
              return x === null ? null : [x[0], x[2]];
            }
            function v() {
              const x = _([Fe, V, Fs]);
              return x === null ? null : [x[0], x[2]];
            }
            function b() {
              const x = _([Fe, V]);
              return x === null ? null : [x[0], ""];
            }
            const E = f([function() {
              const x = _([f([Me, v, b]), S(0, St)]);
              return x === null ? null : x[0].concat(x[1]);
            }, function() {
              const x = _([Fe, S(0, St)]);
              return x === null ? null : [x[0]].concat(x[1]);
            }]), A = y("{{"), W = y("}}"), ee = y("[["), R = y("]]"), z = y("["), J = y("]");
            function Ge() {
              const x = _([A, E, W]);
              return x === null ? null : x[1];
            }
            const ge = f([function() {
              const x = _([S(1, Fs), U, S(1, Ps)]);
              return x === null ? null : [["CONCAT"].concat(x[0]), ["CONCAT"].concat(x[2])];
            }, function() {
              const x = _([S(1, Fs)]);
              return x === null ? null : [["CONCAT"].concat(x[0])];
            }]);
            function uc() {
              let x = null;
              const I = _([ee, ge, R]);
              if (I !== null) {
                const Ce = I[1];
                x = ["WIKILINK"].concat(Ce);
              }
              return x;
            }
            function dc() {
              let x = null;
              const I = _([z, S(1, rh), T, S(1, Ps), J]);
              return I !== null && (x = ["EXTLINK", I[1].length === 1 ? I[1][0] : ["CONCAT"].concat(I[1]), ["CONCAT"].concat(I[3])]), x;
            }
            const Za = D(/^[A-Za-z]+/);
            function oh() {
              const x = D(/^[^"]*/), I = _([oe, x, oe]);
              return I === null ? null : I[1];
            }
            function sh() {
              const x = D(/^[^']*/), I = _([Q, x, Q]);
              return I === null ? null : I[1];
            }
            function ah() {
              const x = D(/^\s*=\s*/), I = _([T, Za, x, f([oh, sh])]);
              return I === null ? null : [I[1], I[3]];
            }
            function ih() {
              const x = S(0, ah)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], x);
            }
            const rh = f([Ge, _t, uc, dc, function() {
              const x = S(1, ft)();
              return x === null ? null : x.join("");
            }]), Ps = f([Ge, _t, uc, dc, function() {
              let x = null;
              const I = w, Ce = y("<"), yt = D(/^\/?/), Ct = D(/^\s*>/), ei = _([Ce, Za, ih, yt, Ct]);
              if (ei === null)
                return null;
              const mc = w, pc = ei[1], ti = S(0, Ps)(), lh = w, hc = _([y("</"), Za, Ct]);
              if (hc === null)
                return ["CONCAT", p.slice(I, mc)].concat(ti);
              const ch = w, uh = hc[1], wc = ei[2];
              if (function(wn, Ms, ni, oi = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((wn = wn.toLowerCase()) !== (Ms = Ms.toLowerCase()) || oi.allowedHtmlElements.indexOf(wn) === -1)
                  return !1;
                const dh = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let Ns = 0, gh = ni.length; Ns < gh; Ns += 2) {
                  const si = ni[Ns];
                  if (oi.allowedHtmlCommonAttributes.indexOf(si) === -1 && (oi.allowedHtmlAttributesByElement[wn] || []).indexOf(si) === -1 || si === "style" && ni[Ns + 1].search(dh) !== -1)
                    return !1;
                }
                return !0;
              }(pc, uh, wc.slice(1)))
                x = ["HTMLELEMENT", pc, wc].concat(ti);
              else {
                const wn = (Ms) => Ms.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                x = ["CONCAT", wn(p.slice(I, mc))].concat(ti, wn(p.slice(lh, ch)));
              }
              return x;
            }, function() {
              const x = S(1, hn)();
              return x === null ? null : x.join("");
            }]), Fs = f([Ge, _t, function() {
              const x = S(1, ho)();
              return x === null ? null : x.join("");
            }]), gc = function() {
              const x = S(0, Ps)();
              return x === null ? null : ["CONCAT"].concat(x);
            }();
            if (gc === null || w !== p.length)
              throw new Error("Parse error at position " + w.toString() + " in input: " + p);
            return gc;
          }(c, { wikilinks: this.wikilinks });
          return this.emitter.emit(m, d);
        }
        return this.simpleParse(c, d);
      }
      simpleParse(c, d) {
        return c.replace(/\$(\d+)/g, (m, p) => {
          const h = parseInt(p, 10) - 1;
          return d[h] !== void 0 ? d[h] : "$" + p;
        });
      }
    }
    class g {
      constructor(c) {
        this.sourceMap = /* @__PURE__ */ new Map();
      }
      load(c, d) {
        if (typeof c != "object")
          throw new Error("Invalid message source. Must be an object");
        if (d) {
          if (!/^[a-zA-Z0-9-]+$/.test(d))
            throw new Error(`Invalid locale ${d}`);
          for (const m in c)
            if (m.indexOf("@") !== 0) {
              if (typeof c[m] == "object")
                return this.load(c);
              if (typeof c[m] != "string")
                throw new Error(`Invalid message for message ${m} in ${d} locale.`);
              break;
            }
          this.sourceMap.has(d) ? this.sourceMap.set(d, Object.assign(this.sourceMap.get(d), c)) : this.sourceMap.set(d, c);
        } else
          for (d in c)
            this.load(c[d], d);
      }
      getMessage(c, d) {
        const m = this.sourceMap.get(d);
        return m ? m[c] : null;
      }
      hasLocale(c) {
        return this.sourceMap.has(c);
      }
    }
    return class {
      constructor(r, { finalFallback: c = "en", messages: d, wikilinks: m = !1 } = {}) {
        this.locale = r, this.parser = new u(this.locale, { wikilinks: m }), this.messageStore = new g(), d && this.load(d, this.locale), this.finalFallback = c, this.wikilinks = m;
      }
      load(r, c) {
        return this.messageStore.load(r, c || this.locale);
      }
      i18n(r, ...c) {
        return this.parser.parse(this.getMessage(r), c);
      }
      setLocale(r) {
        this.locale = r, this.parser = new u(this.locale, { wikilinks: this.wikilinks });
      }
      getFallbackLocales() {
        return [...o[this.locale] || [], this.finalFallback];
      }
      getMessage(r) {
        let c = this.locale, d = 0;
        const m = this.getFallbackLocales(this.locale);
        for (; c; ) {
          const p = c.split("-");
          let h = p.length;
          do {
            const w = p.slice(0, h).join("-"), f = this.messageStore.getMessage(r, w);
            if (typeof f == "string")
              return f;
            h--;
          } while (h);
          c = m[d], d++;
        }
        return r;
      }
      registerParserPlugin(r, c) {
        l.prototype[r] = c;
      }
    };
  });
})(Fm);
var b_ = Fm.exports;
const Zc = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, Mm = Symbol("banana-context");
function de() {
  const e = C_(Mm);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function $_(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = k_(new b_(e.locale, e));
  return {
    install: (n) => {
      n.provide(Mm, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: i } = Zc(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...i) : o.textContent = t.i18n(a, ...i);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: i } = Zc(s);
        o.innerHTML = t.i18n(a, ...i);
      });
    }
  };
}
const Tn = window.Vue.ref, V_ = window.Vue.computed, Ss = Tn(null), ys = Tn(null), Cs = Tn(null), ro = Tn(null), Nm = Tn(null), Um = Tn(null), Im = Tn(null), { validateFilters: E_, filtersValidatorError: A_ } = y_(), D_ = V_(() => ({
  type: Um.value,
  id: Im.value
})), zm = (e, t) => {
  Um.value = e, Im.value = t, ps("filter-type", e), t && ps("filter-id", t);
}, L_ = (e) => {
  const t = new URLSearchParams(location.search);
  t.set("page", e == null ? void 0 : e.sourceTitle), t.set("from", e == null ? void 0 : e.sourceLanguage), t.set("to", e == null ? void 0 : e.targetLanguage), Cs.value = e == null ? void 0 : e.sourceTitle, Ss.value = e == null ? void 0 : e.sourceLanguage, ys.value = e == null ? void 0 : e.targetLanguage, e instanceof Pl && (t.set("draft", !0), Nm.value = !0, e.isLeadSectionTranslation || (t.set("section", e.sourceSectionTitle), ro.value = e.sourceSectionTitle)), t.delete("title"), ks(Object.fromEntries(t));
}, T_ = (e) => {
  ro.value = e, ps("section", e);
}, B_ = (e) => {
  Cs.value = e, ps("page", e);
}, ks = (e) => {
  history.replaceState(
    {},
    document.title,
    c_("Special:ContentTranslation", e)
  );
}, P_ = () => {
  const e = de(), t = new URLSearchParams(location.search);
  Cs.value = t.get("page"), Ss.value = t.get("from"), ys.value = t.get("to"), ro.value = t.get("section");
  const n = E_({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  zm(n.type, n.id), A_.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, F_ = () => {
  const e = new URLSearchParams(location.search);
  ro.value = null, e.delete("section"), e.delete("title"), ks(Object.fromEntries(e));
}, ps = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set(e, t), n.delete("title"), ks(Object.fromEntries(n));
}, M_ = (e) => new URLSearchParams(location.search).get(e), N_ = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), Ss.value = e, ys.value = t, n.delete("title"), ks(Object.fromEntries(n));
}, U_ = () => {
  Ss.value = null, ys.value = null, Cs.value = null, ro.value = null, ks(null);
}, M = () => ({
  setLanguageURLParams: N_,
  setSectionURLParam: T_,
  setTranslationURLParams: L_,
  initializeURLState: P_,
  clearURLParameters: U_,
  clearSectionURLParameter: F_,
  setUrlParam: ps,
  getUrlParam: M_,
  pageURLParameter: Cs,
  sourceLanguageURLParameter: Ss,
  targetLanguageURLParameter: ys,
  sectionURLParameter: ro,
  draftURLParameter: Nm,
  setPageURLParam: B_,
  currentSuggestionFilters: D_,
  setFilterURLParams: zm
});
const I_ = window.Vue.resolveDynamicComponent, eu = window.Vue.openBlock, tu = window.Vue.createBlock, z_ = window.Vue.Transition, _o = window.Vue.withCtx, vo = window.Vue.createVNode, R_ = window.Vue.resolveComponent, vi = window.Vue.unref, O_ = window.Vuex.useStore, H_ = window.Vue.computed, j_ = window.Vue.onMounted, q_ = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = M();
    t();
    const n = O_(), o = H_(
      () => n.state.application.autoSavePending
    );
    return j_(() => {
      window.addEventListener("beforeunload", (s) => {
        o.value && (s.preventDefault(), s.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (s) => {
        document.visibilityState === "visible" && Am.assertUser().then(() => n.commit("application/setIsLoginDialogOn", !1)).catch((a) => {
          a instanceof io && n.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (s, a) => {
      const i = R_("router-view");
      return eu(), tu(vi($w), { id: "contenttranslation" }, {
        default: _o(() => [
          vo(vi(B), { class: "cx-container" }, {
            default: _o(() => [
              vo(vi(k), { cols: "12" }, {
                default: _o(() => [
                  vo(i, null, {
                    default: _o(({ Component: l, route: u }) => [
                      vo(z_, {
                        name: u.meta.transitionName
                      }, {
                        default: _o(() => [
                          (eu(), tu(I_(l)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      vo(l_)
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
}, G_ = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translationsLoaded: { draft: !1, published: !1 },
  translatorStats: null
}, W_ = {
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
class Rm {
  constructor({ id: t, type: n, question: o, url: s }) {
    this.id = t, this.type = n, this.question = o, this.url = s;
  }
}
class to {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new Rm(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const nu = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => Ne(te({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class X_ {
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
    const t = nu((s = this.user) == null ? void 0 : s.content), n = nu((a = this.mt) == null ? void 0 : a.content);
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
class Fl extends Wa {
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
    pageRevision: l,
    status: u,
    targetTitle: g,
    targetUrl: r,
    sectionTranslations: c
  }) {
    super({
      translationId: t,
      sourceTitle: n,
      sourceLanguage: o,
      targetLanguage: s,
      startTimestamp: a,
      lastUpdatedTimestamp: i,
      pageRevision: l,
      status: u,
      targetTitle: g
    }), this.targetUrl = r, this.sectionTranslations = c;
  }
}
const Xa = mw.user.isAnon() ? void 0 : "user", Om = (e) => {
  if (e === "assertuserfailed")
    throw new io();
};
function Hm(e, t = null) {
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
      let i;
      if (e === "draft" ? i = a.map(
        (u) => new Pl(Ne(te({}, u), { status: e }))
      ) : i = a.map(
        (u) => new Fl(Ne(te({}, u), { status: e }))
      ), (l = s.continue) != null && l.offset) {
        const u = yield Hm(
          e,
          s.continue.offset
        );
        i = i.concat(u);
      }
      return i;
    }));
  });
}
function K_(e) {
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
      (a) => new X_(a)
    );
  });
}
function Y_(e, t, n, o, s) {
  return C(this, null, function* () {
    if (!o)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== Y.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const i = G.getCXServerUrl(a);
    return fetch(i, {
      headers: { "Content-Type": "application/json", Authorization: s },
      method: "POST",
      body: JSON.stringify({ html: `<div>${o}</div>` })
    }).then(
      (l) => Promise.all([l.json(), Promise.resolve(l.ok)])
    ).then(([l, u]) => {
      var r, c;
      if (!u) {
        const d = l.detail || l.type || l.title || "fetchSegmentTranslation: Unknown error";
        throw new Error(d);
      }
      return (c = (r = new RegExp("<div>(?<content>(.|\\s)*)<\\/div>").exec(l.contents)) == null ? void 0 : r.groups) == null ? void 0 : c.content;
    }).catch((l) => Promise.reject(l));
  });
}
const Q_ = (e, t, n) => {
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
}, J_ = ({
  html: e,
  sourceTitle: t,
  targetTitle: n,
  sourceSectionTitle: o,
  targetSectionTitle: s,
  sourceLanguage: a,
  targetLanguage: i,
  revision: l,
  captchaId: u,
  captchaWord: g,
  isSandbox: r,
  sectionTranslationId: c
}) => {
  const d = {
    assert: Xa,
    action: "cxpublishsection",
    title: n,
    html: e,
    sourcetitle: t,
    sourcerevid: l,
    sourcesectiontitle: o,
    targetsectiontitle: s,
    sourcelanguage: a,
    targetlanguage: i,
    issandbox: r,
    sectiontranslationid: c
  };
  return u && (d.captchaid = u, d.captchaword = g), new mw.Api().postWithToken("csrf", d).then((p) => {
    if (p = p.cxpublishsection, p.result === "error") {
      if (p.edit.captcha)
        return {
          publishFeedbackMessage: new to({
            type: "captcha",
            status: "error",
            details: p.edit.captcha
          }),
          targetTitle: null
        };
      throw new Error();
    }
    return {
      publishFeedbackMessage: null,
      targetUrl: p.targeturl,
      pageId: p.edit.pageid,
      revisionId: p.edit.newrevid
    };
  }).catch((p, h) => {
    Om(p);
    let w;
    return h = h || {}, h.exception ? w = h.exception.message : h.error ? w = h.error.info : w = "Unknown error", {
      publishFeedbackMessage: new to({
        text: w,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, Z_ = ({
  sourceTitle: e,
  targetTitle: t,
  sourceSectionTitle: n,
  targetSectionTitle: o,
  sourceLanguage: s,
  targetLanguage: a,
  revision: i,
  units: l,
  sectionId: u,
  isSandbox: g,
  progress: r
}) => {
  const c = {
    assert: Xa,
    action: "sxsave",
    targettitle: t,
    sourcetitle: e,
    sourcerevision: i,
    sourcesectiontitle: n,
    targetsectiontitle: o,
    sourcelanguage: s,
    targetlanguage: a,
    content: JSON.stringify(l),
    sectionid: u,
    issandbox: g,
    progress: JSON.stringify(r)
  };
  return new mw.Api().postWithToken("csrf", c).then((m) => m.sxsave.sectiontranslationid).catch((m, p) => {
    Om(m);
    let h;
    return p.exception ? h = p.exception.message : p.error ? h = p.error.info : h = "Unknown error", new to({ text: h, status: "error" });
  });
}, e1 = (e) => {
  const t = {
    assert: Xa,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, t1 = () => {
  const e = {
    assert: Xa,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new Fl(n.cxcheckunreviewed.translation)
  );
}, n1 = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, o1 = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, s1 = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), je = {
  fetchTranslations: Hm,
  fetchTranslationUnits: K_,
  fetchSegmentTranslation: Y_,
  parseTemplateWikitext: Q_,
  publishTranslation: J_,
  saveTranslation: Z_,
  deleteTranslation: n1,
  fetchTranslatorStats: s1,
  deleteCXTranslation: o1,
  splitTranslation: e1,
  checkUnreviewedTranslations: t1
};
function a1(t) {
  return C(this, arguments, function* ({ commit: e }) {
    const n = yield je.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const i1 = {
  fetchTranslatorStats: a1
}, r1 = {
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
}, l1 = {
  namespaced: !0,
  state: G_,
  getters: W_,
  actions: i1,
  mutations: r1
}, jm = [
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
], c1 = [
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
], u1 = [
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
], d1 = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], g1 = [
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
], m1 = {
  en: jm,
  es: c1,
  bn: u1,
  fr: d1,
  de: g1
}, p1 = {
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
  appendixSectionTitles: m1,
  /**
   * Maximum number of suggestions based on user's recently edited translations,
   * to be displayed inside "search for an article" view
   */
  maxRecentlyEditedSuggestions: 3
}, h1 = {
  getFavoriteTitlesByLanguagePair: (e) => (t, n) => e.favorites.filter(
    (o) => o.sourceLanguage === t && o.targetLanguage === n
  ).map((o) => o.title),
  getPageSuggestionsForPair: (e) => (t, n) => e.pageSuggestions.filter(
    (o) => o.sourceLanguage === t && o.targetLanguage === n
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
class xs {
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
    suggestionProvider: l = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.wikidataId = i, this.langLinksCount = a, this.suggestionProvider = l;
  }
  /**
   * @returns {string}
   */
  get id() {
    return `${this.sourceLanguage}/${this.targetLanguage}/${this.sourceTitle}`;
  }
}
class Ln {
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
    sourceSections: l = [],
    targetSections: u = [],
    isListable: g = !0,
    suggestionProvider: r = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.missingSections = i, this.presentSections = a, this.sourceSections = l, this.targetSections = u, this.isListable = g, this.suggestionProvider = r;
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
   * @param {string} sectionTitle
   * @return {boolean}
   */
  hasSectionTitle(t) {
    return this.sourceSections.includes(t);
  }
}
class no {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s;
  }
}
const w1 = jm, lo = (l) => C(void 0, [l], function* ({
  source: e,
  target: t,
  seed: n = null,
  topic: o = null,
  includeSections: s = !1,
  searchAlgorithm: a = null,
  count: i = 24
}) {
  const u = {
    source: e,
    target: t,
    seed: n,
    topic: o,
    count: i,
    search_algorithm: a
  };
  let g = mw.config.get("wgRecommendToolAPIURL");
  s && (g += "/sections");
  const r = new URL(g);
  Object.keys(u).forEach((c) => {
    u[c] && r.searchParams.append(c, u[c]);
  });
  try {
    const c = yield fetch(r);
    if (!c.ok)
      throw new Error("Failed to load data from server");
    return c.json();
  } catch (c) {
    return mw.log.error(
      "Error while fetching suggestions from Recommendation API",
      c
    ), null;
  }
});
function f1(e, t, n, o = 24) {
  return C(this, null, function* () {
    return ((yield lo({
      source: e,
      target: t,
      seed: n,
      count: o
    })) || []).map(
      (i) => new xs({
        sourceTitle: i.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: i.wikidata_id,
        langLinksCount: parseInt(i.sitelink_count)
      })
    );
  });
}
const _1 = (e, t) => C(void 0, null, function* () {
  return ((yield lo({
    source: e,
    target: t,
    searchAlgorithm: "mostpopular"
  })) || []).map(
    (s) => new xs({
      sourceTitle: s.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: s.wikidata_id,
      langLinksCount: parseInt(s.langlinks_count)
    })
  );
}), v1 = (e, t) => C(void 0, null, function* () {
  const o = (yield lo({
    source: e,
    target: t,
    includeSections: !0,
    searchAlgorithm: "mostpopular"
  })) || [];
  return o && o.map(
    (s) => new Ln({
      sourceLanguage: e,
      targetLanguage: t,
      sourceTitle: s.source_title,
      targetTitle: s.target_title,
      sourceSections: s.source_sections,
      targetSections: s.target_sections,
      present: s.present,
      missing: s.missing
    })
  );
});
function S1(e, t, n) {
  return C(this, null, function* () {
    const o = [t, e, n].map(
      (i) => encodeURIComponent(i)
    ), s = G.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (i) => i.ok ? i.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((i) => i == null ? void 0 : i.sections).catch((i) => null);
    return a ? new Ln(a) : null;
  });
}
function y1(e, t, n) {
  return C(this, null, function* () {
    const s = (yield lo({
      source: e,
      target: t,
      seed: n,
      includeSections: !0
    })) || [];
    return s && s.map(
      (a) => new Ln({
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
  });
}
function C1(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    return ((yield lo(s)) || []).map(
      (i) => new xs({
        sourceTitle: i.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: i.wikidata_id,
        langLinksCount: parseInt(i.sitelink_count)
      })
    );
  });
}
function k1(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      includeSections: !0
    }, a = (yield lo(s)) || [];
    return a && a.map(
      (i) => new Ln({
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
function x1(e) {
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
      const a = (yield n.get(t)).query.usercontribs.map((i) => i.title);
      return [...new Set(a)];
    } catch (o) {
      return mw.log.error("Error while fetching suggestion seeds", o), [];
    }
  });
}
function b1(e, t) {
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
function $1(e, t) {
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
function V1(e) {
  const t = w1.map((o) => encodeURIComponent(o)).join("|"), n = G.getCXServerUrl(
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
const E1 = (e, t, n) => {
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
}, A1 = (e) => {
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
}, D1 = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions"
  }, t = new mw.Api();
  return Promise.resolve(t.postWithToken("csrf", e)).then((n) => {
    var a, i;
    const o = n.query.contenttranslationsuggestions.lists || {};
    return (((i = (a = Object.values(o)) == null ? void 0 : a[0]) == null ? void 0 : i.suggestions) || []).map((l) => new no(l));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
}, ue = {
  fetchFavorites: D1,
  fetchPageSuggestions: f1,
  fetchSectionSuggestion: S1,
  fetchSectionSuggestions: y1,
  fetchSuggestionSeeds: b1,
  fetchAppendixTargetSectionTitles: V1,
  fetchSuggestionSourceSections: $1,
  markFavorite: E1,
  unmarkFavorite: A1,
  fetchUserEdits: x1,
  fetchMostPopularPageSuggestions: _1,
  fetchMostPopularSectionSuggestions: v1,
  fetchPageSuggestionsByTopics: C1,
  fetchSectionSuggestionsByTopics: k1
};
function L1(o, s) {
  return C(this, arguments, function* ({ getters: e, commit: t }, n) {
    if (e.appendixTitlesExistForLanguage(n))
      return;
    const a = yield ue.fetchAppendixTargetSectionTitles(n);
    t("addAppendixSectionTitlesForLanguage", {
      language: n,
      titles: a
    });
  });
}
const T1 = {
  fetchAppendixSectionTitles: L1
}, B1 = {
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
  removePageSuggestion(e, t) {
    e.pageSuggestions = e.pageSuggestions.filter(
      (n) => n.id !== t.id
    );
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
}, P1 = {
  namespaced: !0,
  state: p1,
  getters: h1,
  actions: T1,
  mutations: B1
}, F1 = {
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
}, M1 = {
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
class co {
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
    pagelanguage: i,
    pageprops: l,
    pageviews: u,
    thumbnail: g,
    title: r,
    revisions: c,
    _alias: d,
    content: m = null,
    sections: p = []
  } = {}) {
    var h;
    this.language = i, this.title = r, this.pageId = a, this.description = t, this.image = s, this.pageprops = l, this.pageviews = u, this.thumbnail = g, this.langLinksCount = n, this.articleSize = (h = c == null ? void 0 : c[0]) == null ? void 0 : h.size, this.revision = o, this.alias = d, this.wikidataId = l == null ? void 0 : l.wikibase_item, this.content = m, this.sections = p;
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
class N1 {
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
function U1() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const I1 = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), U1();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, z1 = (e, t) => {
  let n, o;
  return t ? (n = I1(e), o = n.$element.find(
    "section[rel='cx:Section']"
  ).map((a, i) => {
    const l = $(i).data("view").getModel();
    if (l)
      return ve.dm.converter.getDomFromNode(
        l,
        // CLIPBOARD_MODE helps to copy the data-mw from elsewhere to
        // to the local nodes
        ve.dm.Converter.static.CLIPBOARD_MODE
      ).body.children[0];
  }), n.destroy()) : o = $(e).filter("section[rel='cx:Section']"), o;
}, R1 = (e, t) => {
  const n = Array.from(
    z1(e, t)
  );
  return O1(n).map(
    /**
     * @param {Node[]} sectionNodes
     * @return {PageSection}
     */
    (s) => {
      const [a, ...i] = s;
      let l = "";
      const u = a.dataset.mwSectionNumber;
      a.querySelector("h2") ? l = a.textContent.trim() : i.unshift(a);
      const g = i.map(
        /**
         * @param {Node} node
         * @return {SubSection}
         */
        (c) => new De({
          sentences: H1(c),
          node: c
        })
      ), r = !l;
      return new fl({ id: u, title: l, subSections: g, isLeadSection: r });
    }
  );
}, O1 = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, H1 = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new cn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), qm = {
  convertSegmentedContentToPageSections: R1
}, Ml = 120, j1 = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: Ml,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return G.getApi(e).get(n).then((s) => {
    const a = s.query.pages, l = (s.query.redirects || []).reduce(
      (r, c) => Ne(te({}, r), { [c.to]: c.from }),
      {}
    ), g = (s.query.normalized || []).reduce(
      (r, c) => Ne(te({}, r), {
        [c.to]: c.from
      }),
      {}
    );
    return a.map((r) => {
      const c = g[r.title] || l[r.title] || null;
      return new co(Ne(te({}, r), { _alias: c }));
    });
  });
}, q1 = (e, t) => {
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
    var u, g;
    const a = s.query.pages;
    if (!a || !a.length || (u = a[0]) != null && u.missing)
      return null;
    const i = [{ lang: e, title: t }, ...a[0].langlinks || []], l = (g = a[0].pageprops) == null ? void 0 : g.wikibase_item;
    return l ? Object.freeze(new N1(l, i)) : null;
  });
}, G1 = (e, t, n) => {
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
    var u, g;
    return (g = (u = l.langlinks) == null ? void 0 : u[0]) == null ? void 0 : g["*"];
  }).filter((l) => !!l));
}, W1 = (e, t, n, o = null) => Gm(
  e,
  t,
  n,
  o
).then(
  (s) => new co({
    sections: qm.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), Gm = (e, t, n, o = null) => {
  const s = G.getWikiDomainCode(e), a = G.getWikiDomainCode(t), i = {
    $sourcelanguage: s,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let l = "/page/$sourcelanguage/$targetlanguage/$title";
  o && (i.$revision = o, l += "/$revision");
  const u = G.getCXServerUrl(
    l,
    i
  );
  return fetch(u).then((g) => g.json()).then((g) => g.segmentedContent);
}, X1 = (e) => C(void 0, null, function* () {
  const t = u_();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: Ml,
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
  return yield G.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new co(s))).catch((o) => []);
}), K1 = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: Ml,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return G.getApi(t).get(o).then((s) => {
    var a;
    return ((a = s.query) == null ? void 0 : a.pages) || [];
  }).then(
    (s) => s.sort((a, i) => a.index - i.index).map(
      (a) => new co(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, uo = {
  fetchPages: j1,
  fetchLanguageTitles: q1,
  fetchPageContent: W1,
  fetchSegmentedContent: Gm,
  fetchNearbyPages: X1,
  searchPagesByTitlePrefix: K1,
  fetchLanguageLinksForLanguage: G1
};
function Y1() {
  return G.getLanguagePairs().then((e) => e.sourceLanguages);
}
function Q1(e, t) {
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
function J1() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function Z1(e, t, n, o) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const s = mw.config.get("wgWikiID"), a = G.getWikiDomainCode(e), i = G.getWikiDomainCode(t), l = {
    action: "wblinktitles",
    fromsite: s.replace(i, a),
    fromtitle: n,
    tosite: s,
    totitle: o
  }, u = new mw.ForeignApi("https://www.wikidata.org/w/api.php");
  return Promise.resolve(u.postWithToken("csrf", l)).then((g) => {
    const c = {
      action: "tag",
      revid: g.entity.sitelinks.lastrevid,
      tags: ["contenttranslation", "sectiontranslation"]
    };
    return Promise.resolve(u.postWithToken("csrf", c));
  });
}
const Ka = {
  fetchSupportedLanguageCodes: Y1,
  fetchSupportedMTProviders: Q1,
  fetchCXServerToken: J1,
  addWikibaseLink: Z1
};
function ev({ getters: e, commit: t }, { language: n, titles: o }) {
  o = o.filter((i) => !e.getPage(n, i));
  const s = 50, a = [];
  for (let i = 0; i < o.length; i += s) {
    const l = o.slice(i, i + s), u = uo.fetchPages(n, l).then(
      (g) => g.forEach((r) => t("addPage", r))
    );
    a.push(u);
  }
  return Promise.all(a);
}
function tv(n) {
  return C(this, arguments, function* ({ commit: e, state: t }) {
    if (!t.supportedLanguageCodes.length && !t.supportedLanguageCodesRequested) {
      e("setSupportedLanguageCodesRequested", !0);
      const o = yield Ka.fetchSupportedLanguageCodes();
      e("setSupportedLanguageCodes", o);
    }
  });
}
function nv(o) {
  return C(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var i;
    const { sourceLanguage: s } = t.application;
    if ((i = n.nearbyPages[s]) != null && i.length)
      return;
    const a = yield uo.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const ov = {
  fetchNearbyPages: nv,
  fetchPageMetadata: ev,
  fetchSupportedLanguageCodes: tv
}, sv = {
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
}, av = {
  namespaced: !0,
  state: F1,
  getters: M1,
  actions: ov,
  mutations: sv
}, iv = {
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
}, rv = {
  /**
   * Returns a boolean indicating whether the current publishing target
   * is the user's sandbox
   *
   * @param {object} state
   * @return {boolean}
   */
  isSandboxTarget: (e) => e.publishTarget === "SANDBOX_SECTION"
}, lv = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => Dn(a)
  );
  return s && Tm(s) ? je.parseTemplateWikitext(
    Dm(s),
    n,
    t
  ) : Promise.resolve(null);
}, Wm = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => Dn(a)
  );
  return s ? je.parseTemplateWikitext(
    Dm(s),
    n,
    t
  ) : Promise.resolve(null);
}, cv = (o) => C(void 0, [o], function* ({ dispatch: e, state: t, commit: n }) {
  var a, i;
  t.cxServerToken || (yield Ka.fetchCXServerToken().then(
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
  return ((a = t.cxServerToken) == null ? void 0 : a.refreshAt) <= s ? (n("setCXServerToken", null), e("getCXServerToken")) : (i = t.cxServerToken) == null ? void 0 : i.jwt;
}), uv = { getCXServerToken: cv }, dv = {
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
}, gv = {
  namespaced: !0,
  state: iv,
  getters: rv,
  actions: uv,
  mutations: dv
}, mv = window.Vuex.createStore, pv = mv({
  modules: { translator: l1, suggestions: P1, mediawiki: av, application: gv }
});
function hv() {
  return Xm().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Xm() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const wv = typeof Proxy == "function", fv = "devtools-plugin:setup", _v = "plugin:settings:set";
let Bn, _l;
function vv() {
  var e;
  return Bn !== void 0 || (typeof window != "undefined" && window.performance ? (Bn = !0, _l = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Bn = !0, _l = global.perf_hooks.performance) : Bn = !1), Bn;
}
function Sv() {
  return vv() ? _l.now() : Date.now();
}
class yv {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const o = {};
    if (t.settings)
      for (const i in t.settings) {
        const l = t.settings[i];
        o[i] = l.defaultValue;
      }
    const s = `__vue-devtools-plugin-settings__${t.id}`;
    let a = Object.assign({}, o);
    try {
      const i = localStorage.getItem(s), l = JSON.parse(i);
      Object.assign(a, l);
    } catch (i) {
    }
    this.fallbacks = {
      getSettings() {
        return a;
      },
      setSettings(i) {
        try {
          localStorage.setItem(s, JSON.stringify(i));
        } catch (l) {
        }
        a = i;
      },
      now() {
        return Sv();
      }
    }, n && n.on(_v, (i, l) => {
      i === this.plugin.id && this.fallbacks.setSettings(l);
    }), this.proxiedOn = new Proxy({}, {
      get: (i, l) => this.target ? this.target.on[l] : (...u) => {
        this.onQueue.push({
          method: l,
          args: u
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (i, l) => this.target ? this.target[l] : l === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(l) ? (...u) => (this.targetQueue.push({
        method: l,
        args: u,
        resolve: () => {
        }
      }), this.fallbacks[l](...u)) : (...u) => new Promise((g) => {
        this.targetQueue.push({
          method: l,
          args: u,
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
function Cv(e, t) {
  const n = e, o = Xm(), s = hv(), a = wv && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(fv, e, t);
  else {
    const i = a ? new yv(n, s) : null;
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
const Km = window.Vue.getCurrentInstance, oo = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const dt = window.Vue.computed, ds = window.Vue.unref, kv = window.Vue.watchEffect, Ym = window.Vue.defineComponent, xv = window.Vue.reactive, Qm = window.Vue.h, Si = window.Vue.provide, bv = window.Vue.ref, Jm = window.Vue.watch, $v = window.Vue.shallowRef, Vv = window.Vue.shallowReactive, Ev = window.Vue.nextTick, zt = typeof window != "undefined";
function Av(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const X = Object.assign;
function yi(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = Te(s) ? s.map(e) : e(s);
  }
  return n;
}
const gs = () => {
}, Te = Array.isArray;
function j(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Dv = /\/$/, Lv = (e) => e.replace(Dv, "");
function Ci(e, t, n = "/") {
  let o, s = {}, a = "", i = "";
  const l = t.indexOf("#");
  let u = t.indexOf("?");
  return l < u && l >= 0 && (u = -1), u > -1 && (o = t.slice(0, u), a = t.slice(u + 1, l > -1 ? l : t.length), s = e(a)), l > -1 && (o = o || t.slice(0, l), i = t.slice(l, t.length)), o = Pv(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + i,
    path: o,
    query: s,
    hash: i
  };
}
function Tv(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function ou(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function su(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && dn(t.matched[o], n.matched[s]) && Zm(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function dn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Zm(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Bv(e[n], t[n]))
      return !1;
  return !0;
}
function Bv(e, t) {
  return Te(e) ? au(e, t) : Te(t) ? au(t, e) : e === t;
}
function au(e, t) {
  return Te(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function Pv(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return j(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const n = t.split("/"), o = e.split("/"), s = o[o.length - 1];
  (s === ".." || s === ".") && o.push("");
  let a = n.length - 1, i, l;
  for (i = 0; i < o.length; i++)
    if (l = o[i], l !== ".")
      if (l === "..")
        a > 1 && a--;
      else
        break;
  return n.slice(0, a).join("/") + "/" + o.slice(i - (i === o.length ? 1 : 0)).join("/");
}
var hs;
(function(e) {
  e.pop = "pop", e.push = "push";
})(hs || (hs = {}));
var ms;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(ms || (ms = {}));
function Fv(e) {
  if (!e)
    if (zt) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Lv(e);
}
const Mv = /^[^#]+#/;
function Nv(e, t) {
  return e.replace(Mv, "#") + t;
}
function Uv(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const Ya = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function Iv(e) {
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
    t = Uv(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function iu(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const vl = /* @__PURE__ */ new Map();
function zv(e, t) {
  vl.set(e, t);
}
function Rv(e) {
  const t = vl.get(e);
  return vl.delete(e), t;
}
let Ov = () => location.protocol + "//" + location.host;
function ep(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = s.includes(e.slice(a)) ? e.slice(a).length : 1, u = s.slice(l);
    return u[0] !== "/" && (u = "/" + u), ou(u, "");
  }
  return ou(n, e) + o + s;
}
function Hv(e, t, n, o) {
  let s = [], a = [], i = null;
  const l = ({ state: d }) => {
    const m = ep(e, location), p = n.value, h = t.value;
    let w = 0;
    if (d) {
      if (n.value = m, t.value = d, i && i === p) {
        i = null;
        return;
      }
      w = h ? d.position - h.position : 0;
    } else
      o(m);
    s.forEach((f) => {
      f(n.value, p, {
        delta: w,
        type: hs.pop,
        direction: w ? w > 0 ? ms.forward : ms.back : ms.unknown
      });
    });
  };
  function u() {
    i = n.value;
  }
  function g(d) {
    s.push(d);
    const m = () => {
      const p = s.indexOf(d);
      p > -1 && s.splice(p, 1);
    };
    return a.push(m), m;
  }
  function r() {
    const { history: d } = window;
    d.state && d.replaceState(X({}, d.state, { scroll: Ya() }), "");
  }
  function c() {
    for (const d of a)
      d();
    a = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", r);
  }
  return window.addEventListener("popstate", l), window.addEventListener("beforeunload", r, {
    passive: !0
  }), {
    pauseListeners: u,
    listen: g,
    destroy: c
  };
}
function ru(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Ya() : null
  };
}
function jv(e) {
  const { history: t, location: n } = window, o = {
    value: ep(e, n)
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
  function a(u, g, r) {
    const c = e.indexOf("#"), d = c > -1 ? (n.host && document.querySelector("base") ? e : e.slice(c)) + u : Ov() + e + u;
    try {
      t[r ? "replaceState" : "pushState"](g, "", d), s.value = g;
    } catch (m) {
      ({}).NODE_ENV !== "production" ? j("Error with push/replace State", m) : console.error(m), n[r ? "replace" : "assign"](d);
    }
  }
  function i(u, g) {
    const r = X({}, t.state, ru(
      s.value.back,
      // keep back and forward entries but override current position
      u,
      s.value.forward,
      !0
    ), g, { position: s.value.position });
    a(u, r, !0), o.value = u;
  }
  function l(u, g) {
    const r = X(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: u,
        scroll: Ya()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && j(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(r.current, r, !0);
    const c = X({}, ru(o.value, u, null), { position: r.position + 1 }, g);
    a(u, c, !1), o.value = u;
  }
  return {
    location: o,
    state: s,
    push: l,
    replace: i
  };
}
function qv(e) {
  e = Fv(e);
  const t = jv(e), n = Hv(e, t.state, t.location, t.replace);
  function o(a, i = !0) {
    i || n.pauseListeners(), history.go(a);
  }
  const s = X({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: Nv.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function Gv(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && j(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), qv(e);
}
function Wv(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function tp(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Wt = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, Sl = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var lu;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(lu || (lu = {}));
const Xv = {
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
    return `Redirected from "${e.fullPath}" to "${Yv(t)}" via a navigation guard.`;
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
function so(e, t) {
  return {}.NODE_ENV !== "production" ? X(new Error(Xv[e](t)), {
    type: e,
    [Sl]: !0
  }, t) : X(new Error(), {
    type: e,
    [Sl]: !0
  }, t);
}
function kt(e, t) {
  return e instanceof Error && Sl in e && (t == null || !!(e.type & t));
}
const Kv = ["params", "query", "hash"];
function Yv(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of Kv)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const cu = "[^/]+?", Qv = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Jv = /[.+*?^${}()[\]/\\]/g;
function Zv(e, t) {
  const n = X({}, Qv, t), o = [];
  let s = n.start ? "^" : "";
  const a = [];
  for (const g of e) {
    const r = g.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !g.length && (s += "/");
    for (let c = 0; c < g.length; c++) {
      const d = g[c];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (d.type === 0)
        c || (s += "/"), s += d.value.replace(Jv, "\\$&"), m += 40;
      else if (d.type === 1) {
        const { value: p, repeatable: h, optional: w, regexp: f } = d;
        a.push({
          name: p,
          repeatable: h,
          optional: w
        });
        const _ = f || cu;
        if (_ !== cu) {
          m += 10;
          try {
            new RegExp(`(${_})`);
          } catch (y) {
            throw new Error(`Invalid custom RegExp for param "${p}" (${_}): ` + y.message);
          }
        }
        let S = h ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
        c || (S = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        w && g.length < 2 ? `(?:/${S})` : "/" + S), w && (S += "?"), s += S, m += 20, w && (m += -8), h && (m += -20), _ === ".*" && (m += -50);
      }
      r.push(m);
    }
    o.push(r);
  }
  if (n.strict && n.end) {
    const g = o.length - 1;
    o[g][o[g].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += "/?"), n.end ? s += "$" : n.strict && (s += "(?:/|$)");
  const i = new RegExp(s, n.sensitive ? "" : "i");
  function l(g) {
    const r = g.match(i), c = {};
    if (!r)
      return null;
    for (let d = 1; d < r.length; d++) {
      const m = r[d] || "", p = a[d - 1];
      c[p.name] = m && p.repeatable ? m.split("/") : m;
    }
    return c;
  }
  function u(g) {
    let r = "", c = !1;
    for (const d of e) {
      (!c || !r.endsWith("/")) && (r += "/"), c = !1;
      for (const m of d)
        if (m.type === 0)
          r += m.value;
        else if (m.type === 1) {
          const { value: p, repeatable: h, optional: w } = m, f = p in g ? g[p] : "";
          if (Te(f) && !h)
            throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
          const _ = Te(f) ? f.join("/") : f;
          if (!_)
            if (w)
              d.length < 2 && (r.endsWith("/") ? r = r.slice(0, -1) : c = !0);
            else
              throw new Error(`Missing required param "${p}"`);
          r += _;
        }
    }
    return r || "/";
  }
  return {
    re: i,
    score: o,
    keys: a,
    parse: l,
    stringify: u
  };
}
function eS(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function tS(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = eS(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (uu(o))
      return 1;
    if (uu(s))
      return -1;
  }
  return s.length - o.length;
}
function uu(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const nS = {
  type: 0,
  value: ""
}, oS = /[a-zA-Z0-9_]/;
function sS(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[nS]];
  if (!e.startsWith("/"))
    throw new Error({}.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${g}": ${m}`);
  }
  let n = 0, o = n;
  const s = [];
  let a;
  function i() {
    a && s.push(a), a = [];
  }
  let l = 0, u, g = "", r = "";
  function c() {
    g && (n === 0 ? a.push({
      type: 0,
      value: g
    }) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (u === "*" || u === "+") && t(`A repeatable param (${g}) must be alone in its segment. eg: '/:ids+.`), a.push({
      type: 1,
      value: g,
      regexp: r,
      repeatable: u === "*" || u === "+",
      optional: u === "*" || u === "?"
    })) : t("Invalid state to consume buffer"), g = "");
  }
  function d() {
    g += u;
  }
  for (; l < e.length; ) {
    if (u = e[l++], u === "\\" && n !== 2) {
      o = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        u === "/" ? (g && c(), i()) : u === ":" ? (c(), n = 1) : d();
        break;
      case 4:
        d(), n = o;
        break;
      case 1:
        u === "(" ? n = 2 : oS.test(u) ? d() : (c(), n = 0, u !== "*" && u !== "?" && u !== "+" && l--);
        break;
      case 2:
        u === ")" ? r[r.length - 1] == "\\" ? r = r.slice(0, -1) + u : n = 3 : r += u;
        break;
      case 3:
        c(), n = 0, u !== "*" && u !== "?" && u !== "+" && l--, r = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${g}"`), c(), i(), s;
}
function aS(e, t, n) {
  const o = Zv(sS(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const i of o.keys)
      a.has(i.name) && j(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(i.name);
  }
  const s = X(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function iS(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = mu({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(r) {
    return o.get(r);
  }
  function a(r, c, d) {
    const m = !d, p = rS(r);
    ({}).NODE_ENV !== "production" && dS(p, c), p.aliasOf = d && d.record;
    const h = mu(t, r), w = [
      p
    ];
    if ("alias" in r) {
      const S = typeof r.alias == "string" ? [r.alias] : r.alias;
      for (const y of S)
        w.push(X({}, p, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: d ? d.record.components : p.components,
          path: y,
          // we might be the child of an alias
          aliasOf: d ? d.record : p
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let f, _;
    for (const S of w) {
      const { path: y } = S;
      if (c && y[0] !== "/") {
        const D = c.record.path, T = D[D.length - 1] === "/" ? "" : "/";
        S.path = c.record.path + (y && T + y);
      }
      if ({}.NODE_ENV !== "production" && S.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (f = aS(S, c, h), {}.NODE_ENV !== "production" && c && y[0] === "/" && gS(f, c), d ? (d.alias.push(f), {}.NODE_ENV !== "production" && uS(d, f)) : (_ = _ || f, _ !== f && _.alias.push(f), m && r.name && !gu(f) && i(r.name)), p.children) {
        const D = p.children;
        for (let T = 0; T < D.length; T++)
          a(D[T], f, d && d.children[T]);
      }
      d = d || f, (f.record.components && Object.keys(f.record.components).length || f.record.name || f.record.redirect) && u(f);
    }
    return _ ? () => {
      i(_);
    } : gs;
  }
  function i(r) {
    if (tp(r)) {
      const c = o.get(r);
      c && (o.delete(r), n.splice(n.indexOf(c), 1), c.children.forEach(i), c.alias.forEach(i));
    } else {
      const c = n.indexOf(r);
      c > -1 && (n.splice(c, 1), r.record.name && o.delete(r.record.name), r.children.forEach(i), r.alias.forEach(i));
    }
  }
  function l() {
    return n;
  }
  function u(r) {
    let c = 0;
    for (; c < n.length && tS(r, n[c]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (r.record.path !== n[c].record.path || !np(r, n[c])); )
      c++;
    n.splice(c, 0, r), r.record.name && !gu(r) && o.set(r.record.name, r);
  }
  function g(r, c) {
    let d, m = {}, p, h;
    if ("name" in r && r.name) {
      if (d = o.get(r.name), !d)
        throw so(1, {
          location: r
        });
      if ({}.NODE_ENV !== "production") {
        const _ = Object.keys(r.params || {}).filter((S) => !d.keys.find((y) => y.name === S));
        _.length && j(`Discarded invalid param(s) "${_.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = d.record.name, m = X(
        // paramsFromLocation is a new object
        du(
          c.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          d.keys.filter((_) => !_.optional).map((_) => _.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        r.params && du(r.params, d.keys.map((_) => _.name))
      ), p = d.stringify(m);
    } else if ("path" in r)
      p = r.path, {}.NODE_ENV !== "production" && !p.startsWith("/") && j(`The Matcher cannot resolve relative paths but received "${p}". Unless you directly called \`matcher.resolve("${p}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), d = n.find((_) => _.re.test(p)), d && (m = d.parse(p), h = d.record.name);
    else {
      if (d = c.name ? o.get(c.name) : n.find((_) => _.re.test(c.path)), !d)
        throw so(1, {
          location: r,
          currentLocation: c
        });
      h = d.record.name, m = X({}, c.params, r.params), p = d.stringify(m);
    }
    const w = [];
    let f = d;
    for (; f; )
      w.unshift(f.record), f = f.parent;
    return {
      name: h,
      path: p,
      params: m,
      matched: w,
      meta: cS(w)
    };
  }
  return e.forEach((r) => a(r)), { addRoute: a, resolve: g, removeRoute: i, getRoutes: l, getRecordMatcher: s };
}
function du(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function rS(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: lS(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function lS(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function gu(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function cS(e) {
  return e.reduce((t, n) => X(t, n.meta), {});
}
function mu(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function yl(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function uS(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(yl.bind(null, n)))
      return j(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(yl.bind(null, n)))
      return j(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function dS(e, t) {
  t && t.record.name && !e.name && !e.path && j(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function gS(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(yl.bind(null, n)))
      return j(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function np(e, t) {
  return t.children.some((n) => n === e || np(e, n));
}
const op = /#/g, mS = /&/g, pS = /\//g, hS = /=/g, wS = /\?/g, sp = /\+/g, fS = /%5B/g, _S = /%5D/g, ap = /%5E/g, vS = /%60/g, ip = /%7B/g, SS = /%7C/g, rp = /%7D/g, yS = /%20/g;
function Nl(e) {
  return encodeURI("" + e).replace(SS, "|").replace(fS, "[").replace(_S, "]");
}
function CS(e) {
  return Nl(e).replace(ip, "{").replace(rp, "}").replace(ap, "^");
}
function Cl(e) {
  return Nl(e).replace(sp, "%2B").replace(yS, "+").replace(op, "%23").replace(mS, "%26").replace(vS, "`").replace(ip, "{").replace(rp, "}").replace(ap, "^");
}
function kS(e) {
  return Cl(e).replace(hS, "%3D");
}
function xS(e) {
  return Nl(e).replace(op, "%23").replace(wS, "%3F");
}
function bS(e) {
  return e == null ? "" : xS(e).replace(pS, "%2F");
}
function ws(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && j(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function $S(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(sp, " "), i = a.indexOf("="), l = ws(i < 0 ? a : a.slice(0, i)), u = i < 0 ? null : ws(a.slice(i + 1));
    if (l in t) {
      let g = t[l];
      Te(g) || (g = t[l] = [g]), g.push(u);
    } else
      t[l] = u;
  }
  return t;
}
function pu(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = kS(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Te(o) ? o.map((a) => a && Cl(a)) : [o && Cl(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function VS(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = Te(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const ES = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), hu = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), Qa = Symbol({}.NODE_ENV !== "production" ? "router" : ""), lp = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), kl = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function So() {
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
function un(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((i, l) => {
    const u = (c) => {
      c === !1 ? l(so(4, {
        from: n,
        to: t
      })) : c instanceof Error ? l(c) : Wv(c) ? l(so(2, {
        from: t,
        to: c
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof c == "function" && a.push(c), i());
    }, g = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? AS(u, t, n) : u);
    let r = Promise.resolve(g);
    if (e.length < 3 && (r = r.then(u)), {}.NODE_ENV !== "production" && e.length > 2) {
      const c = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof g == "object" && "then" in g)
        r = r.then((d) => u._called ? d : (j(c), Promise.reject(new Error("Invalid navigation guard"))));
      else if (g !== void 0 && !u._called) {
        j(c), l(new Error("Invalid navigation guard"));
        return;
      }
    }
    r.catch((c) => l(c));
  });
}
function AS(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && j(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function ki(e, t, n, o) {
  const s = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && j(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const i in a.components) {
      let l = a.components[i];
      if ({}.NODE_ENV !== "production") {
        if (!l || typeof l != "object" && typeof l != "function")
          throw j(`Component "${i}" in record with path "${a.path}" is not a valid component. Received "${String(l)}".`), new Error("Invalid route component");
        if ("then" in l) {
          j(`Component "${i}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const u = l;
          l = () => u;
        } else
          l.__asyncLoader && // warn only once per component
          !l.__warnedDefineAsync && (l.__warnedDefineAsync = !0, j(`Component "${i}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[i]))
        if (DS(l)) {
          const g = (l.__vccOpts || l)[t];
          g && s.push(un(g, n, o, a, i));
        } else {
          let u = l();
          ({}).NODE_ENV !== "production" && !("catch" in u) && (j(`Component "${i}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), u = Promise.resolve(u)), s.push(() => u.then((g) => {
            if (!g)
              return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${a.path}"`));
            const r = Av(g) ? g.default : g;
            a.components[i] = r;
            const d = (r.__vccOpts || r)[t];
            return d && un(d, n, o, a, i)();
          }));
        }
    }
  }
  return s;
}
function DS(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function wu(e) {
  const t = oo(Qa), n = oo(lp), o = dt(() => t.resolve(ds(e.to))), s = dt(() => {
    const { matched: u } = o.value, { length: g } = u, r = u[g - 1], c = n.matched;
    if (!r || !c.length)
      return -1;
    const d = c.findIndex(dn.bind(null, r));
    if (d > -1)
      return d;
    const m = fu(u[g - 2]);
    return (
      // we are dealing with nested routes
      g > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      fu(r) === m && // avoid comparing the child with its parent
      c[c.length - 1].path !== m ? c.findIndex(dn.bind(null, u[g - 2])) : d
    );
  }), a = dt(() => s.value > -1 && PS(n.params, o.value.params)), i = dt(() => s.value > -1 && s.value === n.matched.length - 1 && Zm(n.params, o.value.params));
  function l(u = {}) {
    return BS(u) ? t[ds(e.replace) ? "replace" : "push"](
      ds(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(gs) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && zt) {
    const u = Km();
    if (u) {
      const g = {
        route: o.value,
        isActive: a.value,
        isExactActive: i.value
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(g), kv(() => {
        g.route = o.value, g.isActive = a.value, g.isExactActive = i.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: dt(() => o.value.href),
    isActive: a,
    isExactActive: i,
    navigate: l
  };
}
const LS = /* @__PURE__ */ Ym({
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
  useLink: wu,
  setup(e, { slots: t }) {
    const n = xv(wu(e)), { options: o } = oo(Qa), s = dt(() => ({
      [_u(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [_u(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : Qm("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), TS = LS;
function BS(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function PS(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!Te(s) || s.length !== o.length || o.some((a, i) => a !== s[i]))
      return !1;
  }
  return !0;
}
function fu(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const _u = (e, t, n) => e != null ? e : t != null ? t : n, FS = /* @__PURE__ */ Ym({
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
    ({}).NODE_ENV !== "production" && NS();
    const o = oo(kl), s = dt(() => e.route || o.value), a = oo(hu, 0), i = dt(() => {
      let g = ds(a);
      const { matched: r } = s.value;
      let c;
      for (; (c = r[g]) && !c.components; )
        g++;
      return g;
    }), l = dt(() => s.value.matched[i.value]);
    Si(hu, dt(() => i.value + 1)), Si(ES, l), Si(kl, s);
    const u = bv();
    return Jm(() => [u.value, l.value, e.name], ([g, r, c], [d, m, p]) => {
      r && (r.instances[c] = g, m && m !== r && g && g === d && (r.leaveGuards.size || (r.leaveGuards = m.leaveGuards), r.updateGuards.size || (r.updateGuards = m.updateGuards))), g && r && // if there is no instance but to and from are the same this might be
      // the first visit
      (!m || !dn(r, m) || !d) && (r.enterCallbacks[c] || []).forEach((h) => h(g));
    }, { flush: "post" }), () => {
      const g = s.value, r = e.name, c = l.value, d = c && c.components[r];
      if (!d)
        return vu(n.default, { Component: d, route: g });
      const m = c.props[r], p = m ? m === !0 ? g.params : typeof m == "function" ? m(g) : m : null, w = Qm(d, X({}, p, t, {
        onVnodeUnmounted: (f) => {
          f.component.isUnmounted && (c.instances[r] = null);
        },
        ref: u
      }));
      if ({}.NODE_ENV !== "production" && zt && w.ref) {
        const f = {
          depth: i.value,
          name: c.name,
          path: c.path,
          meta: c.meta
        };
        (Te(w.ref) ? w.ref.map((S) => S.i) : [w.ref.i]).forEach((S) => {
          S.__vrv_devtools = f;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        vu(n.default, { Component: w, route: g }) || w
      );
    };
  }
});
function vu(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const MS = FS;
function NS() {
  const e = Km(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
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
function yo(e, t) {
  const n = X({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => GS(o, ["instances", "children", "aliasOf"]))
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
function Xs(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let US = 0;
function IS(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = US++;
  Cv({
    id: "org.vuejs.router" + (o ? "." + o : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (s) => {
    typeof s.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), s.on.inspectComponent((r, c) => {
      r.instanceData && r.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: yo(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: r, componentInstance: c }) => {
      if (c.__vrv_devtools) {
        const d = c.__vrv_devtools;
        r.tags.push({
          label: (d.name ? `${d.name.toString()}: ` : "") + d.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: cp
        });
      }
      Te(c.__vrl_devtools) && (c.__devtoolsApi = s, c.__vrl_devtools.forEach((d) => {
        let m = gp, p = "";
        d.isExactActive ? (m = dp, p = "This is exactly active") : d.isActive && (m = up, p = "This link is active"), r.tags.push({
          label: d.route.path,
          textColor: 0,
          tooltip: p,
          backgroundColor: m
        });
      }));
    }), Jm(t.currentRoute, () => {
      u(), s.notifyComponentUpdate(), s.sendInspectorTree(l), s.sendInspectorState(l);
    });
    const a = "router:navigations:" + o;
    s.addTimelineLayer({
      id: a,
      label: `Router${o ? " " + o : ""} Navigations`,
      color: 4237508
    }), t.onError((r, c) => {
      s.addTimelineEvent({
        layerId: a,
        event: {
          title: "Error during Navigation",
          subtitle: c.fullPath,
          logType: "error",
          time: s.now(),
          data: { error: r },
          groupId: c.meta.__navigationId
        }
      });
    });
    let i = 0;
    t.beforeEach((r, c) => {
      const d = {
        guard: Xs("beforeEach"),
        from: yo(c, "Current Location during this navigation"),
        to: yo(r, "Target location")
      };
      Object.defineProperty(r.meta, "__navigationId", {
        value: i++
      }), s.addTimelineEvent({
        layerId: a,
        event: {
          time: s.now(),
          title: "Start of navigation",
          subtitle: r.fullPath,
          data: d,
          groupId: r.meta.__navigationId
        }
      });
    }), t.afterEach((r, c, d) => {
      const m = {
        guard: Xs("afterEach")
      };
      d ? (m.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: d ? d.message : "",
          tooltip: "Navigation Failure",
          value: d
        }
      }, m.status = Xs("❌")) : m.status = Xs("✅"), m.from = yo(c, "Current Location during this navigation"), m.to = yo(r, "Target location"), s.addTimelineEvent({
        layerId: a,
        event: {
          title: "End of navigation",
          subtitle: r.fullPath,
          time: s.now(),
          data: m,
          logType: d ? "warning" : "default",
          groupId: r.meta.__navigationId
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
      if (!g)
        return;
      const r = g;
      let c = n.getRoutes().filter((d) => !d.parent);
      c.forEach(hp), r.filter && (c = c.filter((d) => (
        // save matches state based on the payload
        xl(d, r.filter.toLowerCase())
      ))), c.forEach((d) => pp(d, t.currentRoute.value)), r.rootNodes = c.map(mp);
    }
    let g;
    s.on.getInspectorTree((r) => {
      g = r, r.app === e && r.inspectorId === l && u();
    }), s.on.getInspectorState((r) => {
      if (r.app === e && r.inspectorId === l) {
        const d = n.getRoutes().find((m) => m.record.__vd_id === r.nodeId);
        d && (r.state = {
          options: RS(d)
        });
      }
    }), s.sendInspectorTree(l), s.sendInspectorState(l);
  });
}
function zS(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function RS(e) {
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
        display: e.keys.map((o) => `${o.name}${zS(o)}`).join(" "),
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
const cp = 15485081, up = 2450411, dp = 8702998, OS = 2282478, gp = 16486972, HS = 6710886;
function mp(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: OS
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: gp
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: cp
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: dp
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: up
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: HS
  });
  let o = n.__vd_id;
  return o == null && (o = String(jS++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(mp)
  };
}
let jS = 0;
const qS = /^\/(.*)\/([a-z]*)$/;
function pp(e, t) {
  const n = t.matched.length && dn(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => dn(o, e.record))), e.children.forEach((o) => pp(o, t));
}
function hp(e) {
  e.__vd_match = !1, e.children.forEach(hp);
}
function xl(e, t) {
  const n = String(e.re).match(qS);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => xl(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = ws(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => xl(i, t));
}
function GS(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function WS(e) {
  const t = iS(e.routes, e), n = e.parseQuery || $S, o = e.stringifyQuery || pu, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = So(), i = So(), l = So(), u = $v(Wt);
  let g = Wt;
  zt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const r = yi.bind(null, (v) => "" + v), c = yi.bind(null, bS), d = (
    // @ts-expect-error: intentionally avoid the type check
    yi.bind(null, ws)
  );
  function m(v, b) {
    let E, A;
    return tp(v) ? (E = t.getRecordMatcher(v), A = b) : A = v, t.addRoute(A, E);
  }
  function p(v) {
    const b = t.getRecordMatcher(v);
    b ? t.removeRoute(b) : {}.NODE_ENV !== "production" && j(`Cannot remove non-existent route "${String(v)}"`);
  }
  function h() {
    return t.getRoutes().map((v) => v.record);
  }
  function w(v) {
    return !!t.getRecordMatcher(v);
  }
  function f(v, b) {
    if (b = X({}, b || u.value), typeof v == "string") {
      const z = Ci(n, v, b.path), J = t.resolve({ path: z.path }, b), Ge = s.createHref(z.fullPath);
      return {}.NODE_ENV !== "production" && (Ge.startsWith("//") ? j(`Location "${v}" resolved to "${Ge}". A resolved location cannot start with multiple slashes.`) : J.matched.length || j(`No match found for location with path "${v}"`)), X(z, J, {
        params: d(J.params),
        hash: ws(z.hash),
        redirectedFrom: void 0,
        href: Ge
      });
    }
    let E;
    if ("path" in v)
      ({}).NODE_ENV !== "production" && "params" in v && !("name" in v) && // @ts-expect-error: the type is never
      Object.keys(v.params).length && j(`Path "${v.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), E = X({}, v, {
        path: Ci(n, v.path, b.path).path
      });
    else {
      const z = X({}, v.params);
      for (const J in z)
        z[J] == null && delete z[J];
      E = X({}, v, {
        params: c(z)
      }), b.params = c(b.params);
    }
    const A = t.resolve(E, b), W = v.hash || "";
    ({}).NODE_ENV !== "production" && W && !W.startsWith("#") && j(`A \`hash\` should always start with the character "#". Replace "${W}" with "#${W}".`), A.params = r(d(A.params));
    const ee = Tv(o, X({}, v, {
      hash: CS(W),
      path: A.path
    })), R = s.createHref(ee);
    return {}.NODE_ENV !== "production" && (R.startsWith("//") ? j(`Location "${v}" resolved to "${R}". A resolved location cannot start with multiple slashes.`) : A.matched.length || j(`No match found for location with path "${"path" in v ? v.path : v}"`)), X({
      fullPath: ee,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: W,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === pu ? VS(v.query) : v.query || {}
      )
    }, A, {
      redirectedFrom: void 0,
      href: R
    });
  }
  function _(v) {
    return typeof v == "string" ? Ci(n, v, u.value.path) : X({}, v);
  }
  function S(v, b) {
    if (g !== v)
      return so(8, {
        from: b,
        to: v
      });
  }
  function y(v) {
    return U(v);
  }
  function D(v) {
    return y(X(_(v), { replace: !0 }));
  }
  function T(v) {
    const b = v.matched[v.matched.length - 1];
    if (b && b.redirect) {
      const { redirect: E } = b;
      let A = typeof E == "function" ? E(v) : E;
      if (typeof A == "string" && (A = A.includes("?") || A.includes("#") ? A = _(A) : (
        // force empty params
        { path: A }
      ), A.params = {}), {}.NODE_ENV !== "production" && !("path" in A) && !("name" in A))
        throw j(`Invalid redirect found:
${JSON.stringify(A, null, 2)}
 when navigating to "${v.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return X({
        query: v.query,
        hash: v.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in A ? {} : v.params
      }, A);
    }
  }
  function U(v, b) {
    const E = g = f(v), A = u.value, W = v.state, ee = v.force, R = v.replace === !0, z = T(E);
    if (z)
      return U(
        X(_(z), {
          state: typeof z == "object" ? X({}, W, z.state) : W,
          force: ee,
          replace: R
        }),
        // keep original redirectedFrom if it exists
        b || E
      );
    const J = E;
    J.redirectedFrom = b;
    let Ge;
    return !ee && su(o, A, E) && (Ge = so(16, { to: J, from: A }), _t(
      A,
      A,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (Ge ? Promise.resolve(Ge) : H(J, A)).catch((ge) => kt(ge) ? (
      // navigation redirects still mark the router as ready
      kt(
        ge,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? ge : hn(ge)
    ) : (
      // reject any unknown error
      nt(ge, J, A)
    )).then((ge) => {
      if (ge) {
        if (kt(
          ge,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          su(o, f(ge.to), J) && // and we have done it a couple of times
          b && // @ts-expect-error: added only in dev
          (b._count = b._count ? (
            // @ts-expect-error
            b._count + 1
          ) : 1) > 30 ? (j(`Detected a possibly infinite redirection in a navigation guard when going from "${A.fullPath}" to "${J.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : U(
            // keep options
            X({
              // preserve an existing replacement but allow the redirect to override it
              replace: R
            }, _(ge.to), {
              state: typeof ge.to == "object" ? X({}, W, ge.to.state) : W,
              force: ee
            }),
            // preserve the original redirectedFrom if any
            b || J
          );
      } else
        ge = N(J, A, !0, R, W);
      return F(J, A, ge), ge;
    });
  }
  function V(v, b) {
    const E = S(v, b);
    return E ? Promise.reject(E) : Promise.resolve();
  }
  function L(v) {
    const b = vt.values().next().value;
    return b && typeof b.runWithContext == "function" ? b.runWithContext(v) : v();
  }
  function H(v, b) {
    let E;
    const [A, W, ee] = XS(v, b);
    E = ki(A.reverse(), "beforeRouteLeave", v, b);
    for (const z of A)
      z.leaveGuards.forEach((J) => {
        E.push(un(J, v, b));
      });
    const R = V.bind(null, v, b);
    return E.push(R), Me(E).then(() => {
      E = [];
      for (const z of a.list())
        E.push(un(z, v, b));
      return E.push(R), Me(E);
    }).then(() => {
      E = ki(W, "beforeRouteUpdate", v, b);
      for (const z of W)
        z.updateGuards.forEach((J) => {
          E.push(un(J, v, b));
        });
      return E.push(R), Me(E);
    }).then(() => {
      E = [];
      for (const z of ee)
        if (z.beforeEnter)
          if (Te(z.beforeEnter))
            for (const J of z.beforeEnter)
              E.push(un(J, v, b));
          else
            E.push(un(z.beforeEnter, v, b));
      return E.push(R), Me(E);
    }).then(() => (v.matched.forEach((z) => z.enterCallbacks = {}), E = ki(ee, "beforeRouteEnter", v, b), E.push(R), Me(E))).then(() => {
      E = [];
      for (const z of i.list())
        E.push(un(z, v, b));
      return E.push(R), Me(E);
    }).catch((z) => kt(
      z,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? z : Promise.reject(z));
  }
  function F(v, b, E) {
    l.list().forEach((A) => L(() => A(v, b, E)));
  }
  function N(v, b, E, A, W) {
    const ee = S(v, b);
    if (ee)
      return ee;
    const R = b === Wt, z = zt ? history.state : {};
    E && (A || R ? s.replace(v.fullPath, X({
      scroll: R && z && z.scroll
    }, W)) : s.push(v.fullPath, W)), u.value = v, _t(v, b, E, R), hn();
  }
  let oe;
  function Q() {
    oe || (oe = s.listen((v, b, E) => {
      if (!St.listening)
        return;
      const A = f(v), W = T(A);
      if (W) {
        U(X(W, { replace: !0 }), A).catch(gs);
        return;
      }
      g = A;
      const ee = u.value;
      zt && zv(iu(ee.fullPath, E.delta), Ya()), H(A, ee).catch((R) => kt(
        R,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? R : kt(
        R,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (U(
        R.to,
        A
        // avoid an uncaught rejection, let push call triggerError
      ).then((z) => {
        kt(
          z,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !E.delta && E.type === hs.pop && s.go(-1, !1);
      }).catch(gs), Promise.reject()) : (E.delta && s.go(-E.delta, !1), nt(R, A, ee))).then((R) => {
        R = R || N(
          // after navigation, all matched components are resolved
          A,
          ee,
          !1
        ), R && (E.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !kt(
          R,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-E.delta, !1) : E.type === hs.pop && kt(
          R,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), F(A, ee, R);
      }).catch(gs);
    }));
  }
  let mn = So(), pn = So(), ft;
  function nt(v, b, E) {
    hn(v);
    const A = pn.list();
    return A.length ? A.forEach((W) => W(v, b, E)) : ({}.NODE_ENV !== "production" && j("uncaught error during route navigation:"), console.error(v)), Promise.reject(v);
  }
  function ho() {
    return ft && u.value !== Wt ? Promise.resolve() : new Promise((v, b) => {
      mn.add([v, b]);
    });
  }
  function hn(v) {
    return ft || (ft = !v, Q(), mn.list().forEach(([b, E]) => v ? E(v) : b()), mn.reset()), v;
  }
  function _t(v, b, E, A) {
    const { scrollBehavior: W } = e;
    if (!zt || !W)
      return Promise.resolve();
    const ee = !E && Rv(iu(v.fullPath, 0)) || (A || !E) && history.state && history.state.scroll || null;
    return Ev().then(() => W(v, b, ee)).then((R) => R && Iv(R)).catch((R) => nt(R, v, b));
  }
  const Fe = (v) => s.go(v);
  let jt;
  const vt = /* @__PURE__ */ new Set(), St = {
    currentRoute: u,
    listening: !0,
    addRoute: m,
    removeRoute: p,
    hasRoute: w,
    getRoutes: h,
    resolve: f,
    options: e,
    push: y,
    replace: D,
    go: Fe,
    back: () => Fe(-1),
    forward: () => Fe(1),
    beforeEach: a.add,
    beforeResolve: i.add,
    afterEach: l.add,
    onError: pn.add,
    isReady: ho,
    install(v) {
      const b = this;
      v.component("RouterLink", TS), v.component("RouterView", MS), v.config.globalProperties.$router = b, Object.defineProperty(v.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => ds(u)
      }), zt && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !jt && u.value === Wt && (jt = !0, y(s.location).catch((W) => {
        ({}).NODE_ENV !== "production" && j("Unexpected error when starting the router:", W);
      }));
      const E = {};
      for (const W in Wt)
        Object.defineProperty(E, W, {
          get: () => u.value[W],
          enumerable: !0
        });
      v.provide(Qa, b), v.provide(lp, Vv(E)), v.provide(kl, u);
      const A = v.unmount;
      vt.add(v), v.unmount = function() {
        vt.delete(v), vt.size < 1 && (g = Wt, oe && oe(), oe = null, u.value = Wt, jt = !1, ft = !1), A();
      }, {}.NODE_ENV !== "production" && zt && IS(v, b, t);
    }
  };
  function Me(v) {
    return v.reduce((b, E) => b.then(() => L(E)), Promise.resolve());
  }
  return St;
}
function XS(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < a; i++) {
    const l = t.matched[i];
    l && (e.matched.find((g) => dn(g, l)) ? o.push(l) : n.push(l));
    const u = e.matched[i];
    u && (t.matched.find((g) => dn(g, u)) || s.push(u));
  }
  return [n, o, s];
}
function me() {
  return oo(Qa);
}
const KS = {
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
}, YS = {
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
}, QS = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], JS = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, ZS = {
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
}, ey = {
  languages: KS,
  scriptgroups: YS,
  rtlscripts: QS,
  regiongroups: JS,
  territories: ZS
};
var Se = ey;
function bs(e) {
  return !!Se.languages[e];
}
function gn(e) {
  return bs(e) && Se.languages[e].length === 1 ? Se.languages[e][0] : !1;
}
function ty() {
  return Se.languages;
}
function $s(e) {
  var t = gn(e);
  return t ? $s(t) : bs(e) ? Se.languages[e][0] : "Zyyy";
}
function Ul(e) {
  var t = gn(e);
  return t ? Ul(t) : bs(e) && Se.languages[e][1] || "UNKNOWN";
}
function fs(e) {
  var t = gn(e);
  return t ? fs(t) : bs(e) && Se.languages[e][2] || e;
}
function ny() {
  var e, t = {};
  for (e in Se.languages)
    gn(e) || (t[e] = fs(e));
  return t;
}
function wp(e) {
  var t, n, o = [];
  for (t in Se.languages)
    if (!gn(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === $s(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function oy(e) {
  return wp([e]);
}
function fp(e) {
  var t;
  for (t in Se.scriptgroups)
    if (Se.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function Il(e) {
  return fp($s(e));
}
function _p(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = gn(n) || n, a = Il(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function vp(e) {
  var t, n, o, s = {};
  for (t in Se.languages)
    if (!gn(t)) {
      for (n = 0; n < e.length; n++)
        if (Ul(t).includes(e[n])) {
          o = Il(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function sy(e) {
  return vp([e]);
}
function ay(e) {
  var t, n, o, s = [];
  for (t = _p(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function iy(e, t) {
  var n = fs(e) || e, o = fs(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function Sp(e) {
  return Se.rtlscripts.includes($s(e));
}
function ry(e) {
  return Sp(e) ? "rtl" : "ltr";
}
function ly(e) {
  return Se.territories[e] || [];
}
function cy(e, t) {
  t.target ? Se.languages[e] = [t.target] : Se.languages[e] = [t.script, t.regions, t.autonym];
}
var q = {
  addLanguage: cy,
  getAutonym: fs,
  getAutonyms: ny,
  getDir: ry,
  getGroupOfScript: fp,
  getLanguages: ty,
  getLanguagesByScriptGroup: _p,
  getLanguagesByScriptGroupInRegion: sy,
  getLanguagesByScriptGroupInRegions: vp,
  getLanguagesInScript: oy,
  getLanguagesInScripts: wp,
  getLanguagesInTerritory: ly,
  getRegions: Ul,
  getScript: $s,
  getScriptGroupOfLanguage: Il,
  isKnown: bs,
  isRedirect: gn,
  isRtl: Sp,
  sortByScriptGroup: ay,
  sortByAutonym: iy
};
const uy = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), i = parseInt(e.slice(12, 14)), l = new Date(Date.UTC(t, n, o, s, a, i)), g = (/* @__PURE__ */ new Date()).getTime() - l.getTime();
  return Math.round(g / (1e3 * 3600 * 24));
}, dy = (e) => {
  const t = uy(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const gy = window.Vuex.useStore, my = window.Vue.computed, py = {
  name: "CxTranslationWork",
  components: { MwRow: B, MwCol: k, MwThumbnail: Bl, MwIcon: be },
  props: {
    translation: {
      type: Wa,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e) {
    const t = gy(), n = (a, i) => {
      const l = t.getters["mediawiki/getPage"](a, i);
      return l == null ? void 0 : l.thumbnail;
    }, o = de();
    return {
      timeagoMessage: my(() => {
        const a = {
          days: "cx-sx-translation-work-days-since-started",
          months: "cx-sx-translation-work-months-since-started",
          years: "cx-sx-translation-work-years-since-started"
        }, i = dy(e.translation.startTimestamp);
        return o.i18n(
          a[i.postfix],
          i.value
        );
      }),
      getAutonym: q.getAutonym,
      getDir: q.getDir,
      getImage: n,
      mwIconArrowForward: Al,
      mwIconArrowNext: bm
    };
  }
}, Ks = window.Vue.resolveComponent, Pn = window.Vue.createVNode, xt = window.Vue.createElementVNode, Su = window.Vue.renderSlot, yu = window.Vue.withModifiers, xi = window.Vue.toDisplayString, bi = window.Vue.withCtx, hy = window.Vue.openBlock, wy = window.Vue.createElementBlock, fy = window.Vue.createCommentVNode, _y = { class: "col shrink pe-4" }, vy = { class: "col" }, Sy = { class: "cx-translation__details column justify-between ma-0" }, yy = { class: "row ma-0" }, Cy = { class: "col grow" }, ky = { class: "col shrink ps-2" }, xy = ["dir", "textContent"], by = ["dir", "textContent"], $y = ["textContent"];
function Vy(e, t, n, o, s, a) {
  const i = Ks("mw-thumbnail"), l = Ks("mw-icon"), u = Ks("mw-col"), g = Ks("mw-row");
  return n.translation ? (hy(), wy("div", {
    key: 0,
    class: "row cx-translation pa-4 ma-0",
    onClick: t[1] || (t[1] = yu((r) => e.$emit("click"), ["stop"]))
  }, [
    xt("div", _y, [
      Pn(i, {
        class: "cx-translation__thumbnail",
        thumbnail: o.getImage(n.translation.sourceLanguage, n.translation.sourceTitle)
      }, null, 8, ["thumbnail"])
    ]),
    xt("div", vy, [
      xt("div", Sy, [
        xt("div", yy, [
          xt("div", Cy, [
            Su(e.$slots, "title")
          ]),
          xt("div", ky, [
            Pn(l, {
              class: "cx-translation__action-icon",
              icon: n.actionIcon,
              onClick: t[0] || (t[0] = yu((r) => e.$emit("action-icon-clicked"), ["stop"]))
            }, null, 8, ["icon"])
          ])
        ]),
        Su(e.$slots, "mid-content"),
        Pn(g, { class: "cx-translation__footer ma-0" }, {
          default: bi(() => [
            Pn(u, {
              class: "cx-translation__languages",
              grow: ""
            }, {
              default: bi(() => [
                xt("span", {
                  class: "mw-ui-autonym",
                  dir: o.getDir(n.translation.sourceLanguage),
                  textContent: xi(o.getAutonym(n.translation.sourceLanguage))
                }, null, 8, xy),
                Pn(l, {
                  icon: o.mwIconArrowNext,
                  class: "mx-1",
                  size: 14
                }, null, 8, ["icon"]),
                xt("span", {
                  class: "mw-ui-autonym ma-0",
                  dir: o.getDir(n.translation.targetLanguage),
                  textContent: xi(o.getAutonym(n.translation.targetLanguage))
                }, null, 8, by)
              ]),
              _: 1
            }),
            Pn(u, {
              class: "cx-translation__days-since-started",
              shrink: ""
            }, {
              default: bi(() => [
                xt("span", {
                  textContent: xi(o.timeagoMessage)
                }, null, 8, $y)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])
    ])
  ])) : fy("", !0);
}
const yp = /* @__PURE__ */ P(py, [["render", Vy]]);
const Co = window.Vue.unref, Cu = window.Vue.toDisplayString, Ey = window.Vue.normalizeClass, Ay = window.Vue.createElementVNode, $i = window.Vue.openBlock, Dy = window.Vue.createElementBlock, ku = window.Vue.createCommentVNode, xu = window.Vue.createVNode, Ys = window.Vue.withCtx, bu = window.Vue.createBlock, Ly = ["lang", "textContent"], Ty = ["lang", "textContent"], By = window.Vue.computed, Py = window.Vue.inject, Fy = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: Pl,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = Py("colors").gray200, s = By(
      () => {
        var u;
        return ((u = t.translation.progress) == null ? void 0 : u.any) * 100 || 0;
      }
    ), a = me(), { setTranslationURLParams: i } = M(), l = () => {
      i(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (u, g) => ($i(), bu(yp, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": Co(xm),
      onActionIconClicked: g[0] || (g[0] = (r) => u.$emit("delete-translation")),
      onClick: l
    }, {
      title: Ys(() => [
        Ay("h5", {
          class: Ey(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: Cu(e.translation.sourceTitle)
        }, null, 10, Ly),
        e.translation.isLeadSectionTranslation ? ku("", !0) : ($i(), Dy("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: Cu(e.translation.sourceSectionTitle)
        }, null, 8, Ty))
      ]),
      "mid-content": Ys(() => [
        e.translation.progress ? ($i(), bu(Co(B), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Ys(() => [
            xu(Co(k), null, {
              default: Ys(() => [
                xu(Co(Em), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: Co(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : ku("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, My = window.Vue.computed, Ny = window.Vue.inject, Vs = () => {
  const e = Ny("breakpoints");
  return { isDesktop: My(
    () => !G.isMobileDomain() && e.value.tabletAndUp
  ) };
}, Fn = window.Vue.computed;
function O(e) {
  const t = Fn(() => e.state.application.sourceLanguage), n = Fn(() => e.state.application.targetLanguage), o = Fn(
    () => e.state.application.currentMTProvider
  ), s = Fn(
    () => q.getAutonym(t.value)
  ), a = Fn(
    () => q.getAutonym(n.value)
  ), i = Fn(() => e.state.application.previousRoute);
  return {
    currentMTProvider: o,
    previousRoute: i,
    sourceLanguage: t,
    sourceLanguageAutonym: s,
    targetLanguage: n,
    targetLanguageAutonym: a
  };
}
const $u = window.Vue.computed, Uy = window.Vuex.useStore;
function Es() {
  const e = Uy(), t = $u(
    () => e.state.mediawiki.supportedLanguageCodes || []
  );
  return {
    enabledTargetLanguages: $u(
      () => e.state.mediawiki.enabledTargetLanguages
    ),
    supportedLanguageCodes: t
  };
}
const Iy = (e, t) => {
  const { sourceLanguageURLParameter: n, targetLanguageURLParameter: o } = M(), s = G.getCurrentWikiLanguageCode(), a = (c) => !e || Array.isArray(e) && e.includes(c), i = (c) => t.includes(c), l = {
    sourceLanguage: "en",
    targetLanguage: "es"
  };
  let u;
  return o.value && a(o.value) && i(o.value) ? u = o.value : a(s) && i(s) ? u = s : u = (e == null ? void 0 : e[0]) || l.targetLanguage, { sourceLanguage: [
    n.value,
    l.sourceLanguage,
    s,
    l.targetLanguage
  ].filter((c) => i(c)).find((c) => c !== u), targetLanguage: u };
}, zy = window.Vuex.useStore, zl = () => {
  const e = zy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = M(), { maxSuggestionsPerSlice: s } = e.state.suggestions, a = () => e.getters["suggestions/getSectionSuggestionsForPair"](t.value, n.value).filter(
    (r) => r.suggestionProvider.type === o.value.type && r.suggestionProvider.id === o.value.id
  ), i = (g) => a().slice(
    s * g,
    s * (g + 1)
  ), l = () => e.getters["suggestions/getPageSuggestionsForPair"](t.value, n.value).filter(
    (r) => r.suggestionProvider.type === o.value.type && r.suggestionProvider.id === o.value.id
  );
  return {
    getFilteredPageSuggestions: l,
    getFilteredSectionSuggestions: a,
    getPageSuggestionsSliceByIndex: (g) => l().slice(
      s * g,
      s * (g + 1)
    ),
    getSectionSuggestionsSliceByIndex: i
  };
}, Ry = window.Vuex.useStore, Rl = () => {
  const e = Ry(), { sourceLanguage: t, targetLanguage: n } = O(e), o = (l) => {
    if (!l)
      return !1;
    const u = e.getters["suggestions/getFavoriteTitlesByLanguagePair"](t.value, n.value), r = e.getters["translator/getTranslationsForLanguagePair"](t.value, n.value).map((c) => c.sourceTitle);
    return !u.includes(l.sourceTitle) && !r.includes(l.sourceTitle);
  }, s = (l) => {
    const { pageSuggestions: u } = e.state.suggestions;
    return !u.some(
      (r) => r.sourceLanguage === l.sourceLanguage && r.targetLanguage === l.targetLanguage && r.sourceTitle === l.sourceTitle
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
class Oy {
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
const Hy = window.Vuex.useStore, Cp = window.Vue.ref, jy = Cp([]), qy = Cp([]);
let Vi = !1, Vu = !1, Eu = !1, Ei = !1, ko = null;
const Qs = {
  page: jy,
  section: qy
}, kp = () => {
  const e = Hy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = M(), s = () => C(void 0, null, function* () {
    let c = e.getters["translator/getTranslationsByStatus"]("published");
    if (c = c.filter(
      (d) => d.sourceLanguage === t.value
    ), c.length && !Vi)
      return Vi = !0, c.map(
        (d) => d.sourceTitle
      );
    if (Vi = !0, !Vu) {
      const d = yield ue.fetchUserEdits(t.value).then((m) => (Vu = !0, m));
      if (d.length)
        return d;
    }
    if (!Eu) {
      const d = yield ue.fetchUserEdits(t.value).then((m) => (Eu = !0, m));
      if (d.length)
        return uo.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          d
        );
    }
    return null;
  }), a = (c) => {
    let d = Qs[c].value.find(
      (m) => m.matchesLanguagePair(t.value, n.value)
    );
    return d || (d = new Oy({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), Qs[c].value.push(d)), d;
  }, i = () => C(void 0, null, function* () {
    const c = yield ue.fetchSuggestionSeeds(
      t.value,
      n.value
    );
    for (const d in Qs) {
      const m = a(d);
      m.seeds = [...m.seeds, ...c || []];
    }
  }), l = () => C(void 0, null, function* () {
    let c = !1, d = [];
    do {
      d = yield s(), d || (c = !0);
      for (const m in Qs) {
        const p = a(m);
        p.seeds = [
          ...p.seeds,
          ...d || []
        ];
      }
    } while (!c && !(d != null && d.length));
  }), u = () => ko || (ko = l(), ko.finally(() => {
    ko = null;
  }));
  return { getSuggestionSeed: (c) => C(void 0, null, function* () {
    let d = a(c);
    d.seeds.length || (yield u());
    let m = d.shiftSeeds();
    return !m && !Ei && (yield i(), m = d.shiftSeeds(), Ei = !0), m;
  }), getEventSourceForDashboardSuggestion: () => {
    const { type: c, id: d } = o.value;
    return d === mt ? Ei ? "suggestion_no_seed" : "suggestion_recent_edit" : c === pt ? "suggestion_topic_area" : d === Ot ? "suggestion_featured" : "";
  } };
}, Gy = 5;
function _s(e) {
  return C(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < Gy);
  });
}
const Wy = window.Vuex.useStore, Xy = () => {
  const e = Wy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = M(), { getSuggestionSeed: o } = kp(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = Rl(), l = {
    id: mt,
    type: Rt
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (r) => C(void 0, null, function* () {
      const c = [];
      return yield _s(() => C(void 0, null, function* () {
        const d = yield o("page");
        if (!d)
          return !0;
        let m = yield ue.fetchPageSuggestions(
          t.value,
          n.value,
          d
        );
        return m = m.filter(
          (p) => a(p)
        ), m = m.slice(0, r), c.push(...m), c.length >= r;
      })), c.forEach(
        (d) => d.suggestionProvider = l
      ), c;
    }),
    fetchSectionSuggestionsBasedOnEdits: (r) => C(void 0, null, function* () {
      const c = [];
      return yield _s(() => C(void 0, null, function* () {
        const d = yield o("section");
        if (!d)
          return !0;
        const m = yield ue.fetchSectionSuggestions(
          t.value,
          n.value,
          d
        );
        if (!m)
          return !1;
        let p = m.filter(
          (w) => s(w)
        );
        const h = m.filter(
          (w) => !s(w)
        );
        return p = p.slice(0, r), c.push(...p), h.forEach((w) => {
          w && !i(w) && (w.isListable = !1, e.commit("suggestions/addSectionSuggestion", w));
        }), c.length >= r;
      })), c.forEach(
        (d) => d.suggestionProvider = l
      ), c;
    })
  };
}, Ky = window.Vuex.useStore, Yy = () => {
  const e = Ky(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = M(), o = {
    id: Ot,
    type: Rt
  }, {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = Rl();
  return { fetchSectionSuggestionsPopular: (g) => C(void 0, null, function* () {
    const r = [];
    return yield _s(() => C(void 0, null, function* () {
      const c = yield ue.fetchMostPopularSectionSuggestions(
        t.value,
        n.value
      );
      let d = c.filter(
        (p) => s(p)
      );
      const m = c.filter(
        (p) => !s(p)
      );
      return d = d.slice(0, g), r.push(...d), m.forEach((p) => {
        p && !i(p) && (p.isListable = !1, e.commit("suggestions/addSectionSuggestion", p));
      }), r.length >= g;
    })), r.forEach(
      (c) => c.suggestionProvider = o
    ), r;
  }), fetchPageSuggestionsPopular: (g) => C(void 0, null, function* () {
    const r = [];
    return yield _s(() => C(void 0, null, function* () {
      let c = yield ue.fetchMostPopularPageSuggestions(
        t.value,
        n.value
      );
      return c = c.filter(
        (d) => a(d)
      ), c = c.slice(0, g), r.push(...c), r.length >= g;
    })), r.forEach(
      (c) => c.suggestionProvider = o
    ), r;
  }) };
};
class xp {
  /**
   * @param {string} id
   * @param {string} label
   * @param {{ id: string, label: string, type: string }[]} filters
   */
  constructor({ id: t, label: n, filters: o }) {
    this.id = t, this.label = n, this.filters = o;
  }
}
const Qy = window.Vue.ref, Au = mw.loader.require("ext.cx.articletopics"), Jy = (e) => new xp({
  id: e.groupId,
  label: e.label,
  filters: e.topics.map((t) => ({
    id: t.topicId,
    label: t.label,
    type: pt
  }))
}), Ol = () => {
  const e = de(), { currentSuggestionFilters: t, setFilterURLParams: n } = M(), o = {
    id: mt,
    type: Rt,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }, s = {
    id: Ot,
    type: Rt,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }, a = new xp({
    id: Rt,
    label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
    filters: [o, s]
  }), i = Qy([
    a,
    ...Au.map(Jy)
  ]), l = () => {
    const d = g();
    return d.type === pt ? [d, o] : [o, s];
  }, u = (d) => {
    n(d.type, d.id);
  }, g = () => i.value.flatMap((d) => d.filters).find(r), r = (d) => t.value.type === d.type && t.value.id === d.id;
  return {
    allFilters: i,
    getFiltersSummary: l,
    selectFilter: u,
    isFilterSelected: r,
    getOresTopics: (d) => {
      const p = Au.flatMap((h) => h.topics).find((h) => h.topicId === d);
      return p ? p.orestopics : [];
    }
  };
}, Zy = window.Vuex.useStore, eC = () => {
  const e = Zy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = M(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = Rl(), { getOresTopics: l } = Ol();
  return {
    fetchPageSuggestionsByTopics: (r) => C(void 0, null, function* () {
      const c = o.value.id, d = {
        id: c,
        type: pt
      }, m = l(c);
      let p = yield ue.fetchPageSuggestionsByTopics(
        t.value,
        n.value,
        m
      );
      return p = p.filter(
        (h) => a(h)
      ), p = p.slice(0, r), p.forEach(
        (h) => h.suggestionProvider = d
      ), p;
    }),
    fetchSectionSuggestionsByTopics: (r) => C(void 0, null, function* () {
      const c = o.value.id, d = {
        id: c,
        type: pt
      }, m = l(c), p = [];
      return yield _s(() => C(void 0, null, function* () {
        const h = yield ue.fetchSectionSuggestionsByTopics(
          t.value,
          n.value,
          m
        );
        let w = h.filter(
          (_) => s(_)
        );
        const f = h.filter(
          (_) => !s(_)
        );
        return w = w.slice(0, r), p.push(...w), f.forEach((_) => {
          _ && !i(_) && (_.isListable = !1, e.commit("suggestions/addSectionSuggestion", _));
        }), p.length >= r;
      })), p.forEach(
        (h) => h.suggestionProvider = d
      ), p;
    })
  };
};
window.Vue.computed;
const Hl = () => {
  const { currentSuggestionFilters: e } = M(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = Xy(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = Yy(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: i } = eC(), l = {
    [mt]: t,
    [Ot]: o,
    [pt]: a
  }, u = {
    [mt]: n,
    [Ot]: s,
    [pt]: i
  }, g = (d) => d.type === Rt ? d.id : d.type;
  return {
    getFilterProvider: g,
    getCurrentPageSuggestionProvider: () => l[g(e.value)],
    getCurrentSectionSuggestionProvider: () => u[g(e.value)]
  };
}, tC = window.Vuex.useStore, jl = () => {
  const e = tC(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = zl(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = M(), a = () => {
    const d = t(), m = e.state.suggestions.maxSuggestionsPerSlice;
    return m - d.length % m;
  }, i = () => {
    const d = n(), m = e.state.suggestions.maxSuggestionsPerSlice;
    return m - d.length % m;
  }, {
    getCurrentPageSuggestionProvider: l,
    getCurrentSectionSuggestionProvider: u
  } = Hl(), g = (d) => {
    try {
      const m = d.map((p) => p.sourceTitle);
      if (m.length)
        return e.dispatch("mediawiki/fetchPageMetadata", {
          language: o.value,
          titles: m
        });
    } catch (m) {
      mw.log.error("Page suggestions fetching failed!");
    }
  };
  return {
    fetchNextSectionSuggestionsSlice: () => C(void 0, null, function* () {
      e.commit("suggestions/increaseSectionSuggestionsLoadingCount");
      const d = a(), p = yield u()(
        d
      );
      p.forEach(
        (h) => e.commit("suggestions/addSectionSuggestion", h)
      ), g(p), e.commit("suggestions/decreaseSectionSuggestionsLoadingCount");
    }),
    fetchNextPageSuggestionsSlice: () => C(void 0, null, function* () {
      e.commit("suggestions/increasePageSuggestionsLoadingCount");
      const d = i(), p = yield l()(
        d
      );
      p.forEach(
        (h) => e.commit("suggestions/addPageSuggestion", h)
      ), g(p), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, nC = window.Vuex.useStore, ql = () => {
  const e = nC(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = jl(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = zl();
  return () => C(void 0, null, function* () {
    const { targetLanguage: a } = O(e), i = s(0), l = o(0), { maxSuggestionsPerSlice: u } = e.state.suggestions, g = i.length === u, r = l.length === u;
    g && r || (yield e.dispatch(
      "suggestions/fetchAppendixSectionTitles",
      a.value
    ), t(), n());
  });
}, oC = window.Vuex.useStore, Gl = () => {
  const e = oC();
  return (t, n, o) => C(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    if (!s) {
      s = yield ue.fetchSectionSuggestion(
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
          return new xs({
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
}, Du = window.Vue.computed, sC = window.Vuex.useStore, ht = () => {
  const e = sC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = M(), s = Du(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = Du(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (l, u) => s.value.getTitleForLanguage(l) || s.value.getTitleForLanguage(u)
  };
}, As = window.Vuex.useStore, Ds = (e, t, n, o, s = {}) => {
  const a = mw.config.get(
    "wgContentTranslationTranslateInTarget"
  ), i = G.getCurrentWikiLanguageCode();
  return a && t !== i ? (s = te({ sx: !0 }, s), o && (s.section = o), location.href = G.getCXUrl(
    n,
    null,
    e,
    t,
    s
  ), !0) : !1;
}, { setLanguageURLParams: aC, pageURLParameter: iC, sectionURLParameter: rC } = M(), Ls = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), aC(t, n);
}, bp = () => {
  const e = As(), { enabledTargetLanguages: t, supportedLanguageCodes: n } = Es();
  return () => C(void 0, null, function* () {
    yield e.dispatch("mediawiki/fetchSupportedLanguageCodes");
    const { sourceLanguage: o, targetLanguage: s } = Iy(
      t.value,
      n.value
    );
    Ds(
      o,
      s,
      iC.value,
      rC.value
    ) || Ls(e, o, s);
  });
}, $p = () => {
  const e = As(), t = ql();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = O(e);
    n === o && (n = a.value, o = s.value), Ds(
      n,
      o,
      null,
      null
    ) || (Ls(e, n, o), t());
  };
}, lC = () => {
  const e = As(), t = ql();
  return (
    /** @param {Translation} translation */
    (n) => {
      const { sourceLanguage: o, targetLanguage: s, sourceTitle: a, sourceSectionTitle: i } = n;
      Ds(
        o,
        s,
        a,
        i,
        { draft: !0 }
      ) || (Ls(e, o, s), t());
    }
  );
}, cC = () => {
  const e = As();
  return (t) => {
    const { sourceLanguage: n, targetLanguage: o, sourceTitle: s } = t;
    Ds(
      n,
      o,
      s,
      null
    ) || Ls(e, n, o);
  };
}, uC = () => {
  const e = As(), t = Gl(), { currentLanguageTitleGroup: n, targetPageExists: o } = ht();
  return (s, a) => C(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: i,
      targetLanguageURLParameter: l,
      setPageURLParam: u,
      clearSectionURLParameter: g
    } = M();
    s === a && (s = l.value, a = i.value);
    const r = n.value.getTitleForLanguage(s);
    Ds(
      s,
      a,
      r,
      null
    ) || (Ls(e, s, a), u(r), o.value ? (g(), yield t(
      i.value,
      l.value,
      r
    )) : yield e.dispatch("mediawiki/fetchPageMetadata", {
      language: i.value,
      titles: [r]
    }), e.dispatch("application/getCXServerToken"));
  });
}, dC = window.Vuex.useStore, Vp = [], gC = (e, t, n) => Vp.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), mC = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  Vp.push(o);
}, pC = () => {
  const e = dC();
  return (t, n, o) => C(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !gC(t, n, o) && (s = yield ue.fetchSectionSuggestion(
      t,
      o,
      n
    ), mC(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, hC = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', wC = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', fC = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', _C = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', vC = '<path d="M10 1a9 9 0 109 9 9 9 0 00-9-9m5 10H5V9h10z"/>', SC = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', yC = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', CC = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', kC = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', xC = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', bC = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', $C = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', VC = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', EC = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', AC = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', DC = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', LC = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', TC = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', BC = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', PC = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', FC = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', MC = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', NC = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', UC = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', IC = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', zC = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', RC = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', OC = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', bl = hC, Ep = wC, HC = {
  ltr: fC,
  shouldFlip: !0
}, Ap = {
  ltr: _C,
  shouldFlip: !0
}, jC = vC, Dp = SC, Lp = yC, qC = CC, GC = kC, WC = xC, go = bC, Wl = $C, Xl = VC, XC = EC, Tp = AC, KC = {
  langCodeMap: {
    ar: DC
  },
  default: LC
}, YC = TC, Kl = {
  ltr: BC,
  shouldFlip: !0
}, QC = PC, Ts = {
  ltr: FC,
  shouldFlip: !0
}, Yl = {
  ltr: MC,
  shouldFlip: !0
}, JC = {
  ltr: NC,
  shouldFlip: !0
}, Bp = UC, ZC = IC, ek = zC, tk = RC, Pp = OC, Fp = "cx-translation-session-position-", Mp = () => Fp + mw.user.sessionId(), Np = () => {
  const e = Mp();
  let t = mw.storage.get(e);
  return t == null && (t = 0), parseInt(t);
}, nk = function() {
  const e = Np();
  Object.keys(mw.storage.store).filter((n) => n.startsWith(Fp)).forEach((n) => mw.storage.remove(n));
  const t = Mp();
  mw.storage.set(t, e + 1);
};
let $l = null;
function ok(e) {
  if ($l)
    return Promise.resolve($l);
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
function sk(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function ak(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = e.access_method || "mobile web", n = mw.config.get("wgDBname"), o = `cx_sx_${mw.user.sessionId()}_${t}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), i = mw.user.getName(), l = Np(), u = {
    $schema: "/analytics/mediawiki/content_translation_event/1.6.0",
    wiki_db: n,
    access_method: t,
    user_name: i,
    web_session_id: mw.user.sessionId(),
    web_pageview_id: mw.user.getPageviewToken(),
    user_is_anonymous: a,
    content_translation_session_id: o,
    content_translation_session_position: l
  };
  let g;
  return a ? g = Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, u, e))
  ) : g = ok(i).then((r) => {
    $l = r, mw.eventLog.submit(
      s,
      Object.assign({}, u, e, {
        user_global_edit_count: r,
        user_global_edit_count_bucket: sk(r)
      })
    );
  }), g.then(() => {
    nk();
  });
}
const wt = () => ak, ik = window.Vue.ref, Up = ik(null), rk = (e) => {
  Up.value = e;
}, Ql = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = M(), s = wt();
  return { logDashboardTranslationStartEvent: () => {
    const i = {
      event_type: "dashboard_translation_start",
      event_source: Up.value,
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
    return o.value ? (i.translation_source_section = o.value, i.translation_type = "section") : i.translation_type = "article", s(i);
  }, setStartTranslationEventSource: rk };
}, lk = window.Vuex.useStore, Bs = () => {
  const e = lk(), t = me(), n = Gl(), { setTranslationURLParams: o } = M(), { setStartTranslationEventSource: s } = Ql();
  return (a, i, l, u) => C(void 0, null, function* () {
    const g = yield n(
      i,
      l,
      a
    );
    g && (e.dispatch("application/getCXServerToken"), o(g), s(u), t.push({
      name: "sx-translation-confirmer"
    }));
  });
};
const Js = window.Vue.withModifiers, Ai = window.Vue.toDisplayString, Di = window.Vue.createElementVNode, Ue = window.Vue.unref, Zs = window.Vue.openBlock, Lu = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Xt = window.Vue.createVNode, fn = window.Vue.withCtx, Tu = window.Vue.createElementBlock, ck = ["lang", "href", "textContent"], uk = {
  key: 1,
  class: "flex"
}, dk = { key: 2 }, gk = window.Vuex.useStore, Bu = window.Vue.computed, Pu = window.Vue.ref, Li = window.Codex.CdxButton, Ti = window.Codex.CdxIcon, mk = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: Fl,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = gk(), o = Pu(!0), s = Pu(null), a = Bu(() => {
      var w;
      return (w = s.value) == null ? void 0 : w.missingSections;
    }), i = Bu(
      () => a.value && Object.keys(a.value)[0]
    );
    pC()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((w) => s.value = w).catch((w) => console.log(w)).finally(() => o.value = !1), me(), Vs();
    const { setTranslationURLParams: u, setSectionURLParam: g } = M(), r = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, c = Bs(), { sourceLanguage: d, targetLanguage: m } = O(n), p = cC(), h = (w) => {
      p(t.translation), c(
        t.translation.sourceTitle,
        d.value,
        m.value,
        "continue_published"
      ), w && g(w);
    };
    return (w, f) => (Zs(), Lu(yp, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: r
    }, {
      title: fn(() => [
        Di("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: f[0] || (f[0] = Js(() => {
          }, ["stop"])),
          textContent: Ai(e.translation.sourceTitle)
        }, null, 8, ck)
      ]),
      "mid-content": fn(() => [
        Xt(Ue(B), { class: "ma-0" }, {
          default: fn(() => [
            Xt(Ue(k), null, {
              default: fn(() => [
                o.value ? (Zs(), Lu(Ue(tt), { key: 0 })) : a.value ? (Zs(), Tu("div", uk, [
                  Xt(Ue(Li), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: f[1] || (f[1] = Js((_) => h(i.value), ["stop"]))
                  }, {
                    default: fn(() => [
                      Xt(Ue(Ti), {
                        class: "me-1",
                        icon: Ue(bl)
                      }, null, 8, ["icon"]),
                      Di("span", null, Ai(i.value), 1)
                    ]),
                    _: 1
                  }),
                  Xt(Ue(Li), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": w.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: f[2] || (f[2] = Js((_) => h(null), ["stop"]))
                  }, {
                    default: fn(() => [
                      Xt(Ue(Ti), { icon: Ue(Xl) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : (Zs(), Tu("div", dk, [
                  Xt(Ue(Li), {
                    class: "cx-published-translation__start-new-translation-button flex items-center pa-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: f[3] || (f[3] = Js((_) => h(null), ["stop"]))
                  }, {
                    default: fn(() => [
                      Xt(Ue(Ti), {
                        class: "me-1",
                        icon: Ue(bl)
                      }, null, 8, ["icon"]),
                      Di("span", null, Ai(w.$i18n("sx-published-translation-new-translation-button-label")), 1)
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
}, Fu = window.Vuex.useStore, pk = () => {
  const e = Fu(), { commit: t } = Fu(), { sourceLanguage: n, targetLanguage: o } = O(e), s = wt();
  return (a) => C(void 0, null, function* () {
    a.sectionTranslationId ? (yield je.deleteTranslation(
      a.sectionTranslationId,
      a.translationId,
      a.sectionId
    )) && t(
      "translator/removeTranslationBySectionTranslationId",
      a.sectionTranslationId
    ) : (yield je.deleteCXTranslation(
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
const hk = {
  name: "SxConfirmTranslationDeletionDialog",
  components: {
    MwButton: Le,
    MwDialog: qe
  },
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: Wa,
      default: null
    }
  },
  emits: ["update:modelValue", "continue-translation", "discard-translation"],
  setup(e, { emit: t }) {
    const n = () => t("update:modelValue", !1), o = pk();
    return { closeDialog: n, deleteTranslation: () => {
      o(e.translation), n();
    } };
  }
}, wk = window.Vue.resolveDirective, Bi = window.Vue.createElementVNode, fk = window.Vue.withDirectives, Mu = window.Vue.resolveComponent, Nu = window.Vue.createVNode, Uu = window.Vue.withCtx, _k = window.Vue.openBlock, vk = window.Vue.createBlock, Sk = { class: "pa-4" }, yk = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" };
function Ck(e, t, n, o, s, a) {
  const i = Mu("mw-button"), l = Mu("mw-dialog"), u = wk("i18n");
  return _k(), vk(l, {
    value: n.modelValue,
    class: "sx-confirm-back-navigation-dialog",
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.gray700,
    header: !1,
    "min-height": "unset"
  }, {
    footer: Uu(() => [
      Bi("div", yk, [
        Nu(i, {
          class: "grow py-3",
          large: "",
          label: e.$i18n("sx-translation-deletion-cancel-button-label"),
          onClick: o.closeDialog
        }, null, 8, ["label", "onClick"]),
        Nu(i, {
          class: "grow py-3",
          large: "",
          destructive: "",
          label: e.$i18n("sx-translation-deletion-confirm-button-label"),
          onClick: o.deleteTranslation
        }, null, 8, ["label", "onClick"])
      ])
    ]),
    default: Uu(() => [
      Bi("div", Sk, [
        fk(Bi("span", null, null, 512), [
          [u, void 0, "sx-confirm-translation-deletion-dialog-body"]
        ])
      ])
    ]),
    _: 1
  }, 8, ["value", "overlay-color"]);
}
const kk = /* @__PURE__ */ P(hk, [["render", Ck]]);
function xk(e, t, n) {
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
        q.getAutonym(a).toLowerCase().includes(t.toLowerCase()) || // Search using script name
        q.getScript(a).toLowerCase().includes(t.toLowerCase())
      )
    );
    return s.length ? s : n ? (yield bk(t, n)).filter((i) => e.includes(i)) : [];
  });
}
function Iu(e, t, n) {
  return C(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(q.sortByAutonym) : (yield xk(e, t, n)).sort(q.sortByAutonym);
  });
}
function bk(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function $k() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function Vk(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
function Ek(e) {
  const t = e.length;
  return t < 10 ? "few-results" : t < 30 ? "some-results" : "many-results";
}
const Ak = window.Vue.computed;
function Dk(e, t) {
  const n = Ak(() => {
    if (!t.value.length || !e.value.trim())
      return "";
    for (let s = 0; s < t.value.length; s++) {
      const a = q.getAutonym(t.value[s]);
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
const Pi = window.Vue.ref, zu = window.Vue.watch, Lk = window.Vue.computed;
function Tk(e, t, n) {
  const o = Pi(""), s = Pi(-1), a = Pi(null), i = () => {
    s.value++, s.value >= l.value.length && (s.value = 0);
  }, l = Lk(
    () => e.value ? t.value : [...n, ...t.value]
  ), u = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return zu(e, () => {
    s.value = -1;
  }), zu(s, () => C(this, null, function* () {
    var g;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = l.value[s.value], (g = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || g.scrollIntoView(!1);
  })), { next: i, prev: u, langSelectorContainer: a, selectedLanguage: o };
}
function Jl(e, t, n) {
  let o;
  const s = (...a) => {
    const i = this, l = () => {
      o = null, n || e.apply(i, a);
    };
    n && !o && e.apply(i, a), (!o || t) && (clearTimeout(o), o = setTimeout(l, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const Fi = window.Vue.ref, Bk = window.Vue.watch, Pk = window.Vue.onMounted, Ru = window.Vue.computed, Fk = {
  name: "MwLanguageSelector",
  components: {
    MwInput: Tl
  },
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
      default: $k
    }
  },
  emits: ["select", "close"],
  setup(e, t) {
    const n = Fi(null), o = Fi(""), s = Fi([]), a = Ru(
      () => Vk(s.value)
    ), i = Ru(
      () => Ek(s.value)
    ), l = (f) => t.emit("select", f), u = () => t.emit("close"), { autocompletion: g, onTabSelect: r } = Dk(
      o,
      s
    ), { next: c, prev: d, langSelectorContainer: m, selectedLanguage: p } = Tk(o, s, e.suggestions), h = () => {
      if (o.value && e.languages.includes(o.value)) {
        l(o.value);
        return;
      }
      if (p.value) {
        l(p.value);
        return;
      }
      if (s.value.length === 1) {
        l(s.value[0]);
        return;
      }
    };
    return Bk(o, Jl(() => C(this, null, function* () {
      s.value = yield Iu(
        e.languages,
        o.value,
        e.searchAPI
      );
    }), 300)), Pk(() => C(this, null, function* () {
      e.autofocus && setTimeout(() => n.value.focus(), 500), s.value = yield Iu(
        e.languages,
        "",
        e.searchAPI
      );
    })), {
      autocompletion: g,
      close: u,
      getAutonym: q.getAutonym,
      getDir: q.getDir,
      langSelectorContainer: m,
      mwIconClose: ao,
      mwIconSearch: $m,
      next: c,
      onEnter: h,
      onTabSelect: r,
      prev: d,
      resultsDisplayClass: i,
      searchInputElement: n,
      searchQuery: o,
      searchResultsByScript: a,
      select: l,
      selectedLanguage: p
    };
  }
}, ea = window.Vue.renderSlot, Mk = window.Vue.resolveComponent, Ou = window.Vue.createVNode, xo = window.Vue.withModifiers, bo = window.Vue.withKeys, Kt = window.Vue.createElementVNode, Nk = window.Vue.resolveDirective, ta = window.Vue.withDirectives, Mi = window.Vue.renderList, Ni = window.Vue.Fragment, bt = window.Vue.openBlock, $t = window.Vue.createElementBlock, Hu = window.Vue.toDisplayString, na = window.Vue.normalizeClass, Ui = window.Vue.createCommentVNode, Uk = {
  ref: "langSelectorContainer",
  class: "mw-ui-language-selector"
}, Ik = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, zk = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, Rk = { class: "results px-3 pt-4" }, Ok = { class: "results-header ps-8 pb-2" }, Hk = { class: "results-languages--suggestions pa-0 ma-0" }, jk = ["lang", "dir", "aria-selected", "onClick", "textContent"], qk = { class: "results px-3 pt-4" }, Gk = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, Wk = ["lang", "dir", "aria-selected", "onClick", "textContent"], Xk = ["aria-selected"], Kk = { class: "no-results px-3 py-4" }, Yk = { class: "ps-8" };
function Qk(e, t, n, o, s, a) {
  const i = Mk("mw-input"), l = Nk("i18n");
  return bt(), $t("div", Uk, [
    ea(e.$slots, "search", {}, () => [
      Kt("div", Ik, [
        Ou(i, {
          value: o.autocompletion,
          "onUpdate:value": t[0] || (t[0] = (u) => o.autocompletion = u),
          icon: o.mwIconSearch,
          "icon-size": 20,
          class: "mw-ui-language-selector__autocomplete pa-4",
          disabled: ""
        }, null, 8, ["value", "icon"]),
        Ou(i, {
          ref: "searchInputElement",
          value: o.searchQuery,
          "onUpdate:value": t[1] || (t[1] = (u) => o.searchQuery = u),
          class: "mw-ui-language-selector__search pa-4",
          icon: o.mwIconSearch,
          "icon-size": 20,
          placeholder: n.placeholder,
          autofocus: n.autofocus,
          onKeydown: [
            bo(xo(o.onEnter, ["prevent"]), ["enter"]),
            bo(xo(o.next, ["stop", "prevent"]), ["down"]),
            bo(xo(o.prev, ["stop", "prevent"]), ["up"]),
            bo(xo(o.close, ["prevent"]), ["esc"]),
            bo(xo(o.onTabSelect, ["prevent"]), ["tab"])
          ]
        }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
      ])
    ]),
    Kt("section", zk, [
      n.suggestions.length && !o.searchQuery ? ea(e.$slots, "suggestions", { key: 0 }, () => [
        Kt("section", Rk, [
          ta(Kt("p", Ok, null, 512), [
            [l, void 0, "cx-sx-language-selector-suggestions"]
          ]),
          Kt("ul", Hk, [
            (bt(!0), $t(Ni, null, Mi(n.suggestions, (u) => (bt(), $t("li", {
              key: u,
              class: na(["language pa-2 ps-8 ma-0", u === o.selectedLanguage ? "language--selected" : ""]),
              lang: u,
              dir: o.getDir(u),
              "aria-selected": u === o.selectedLanguage || null,
              tabindex: "-1",
              role: "option",
              onClick: (g) => o.select(u),
              textContent: Hu(o.getAutonym(u))
            }, null, 10, jk))), 128))
          ])
        ])
      ]) : Ui("", !0),
      o.searchResultsByScript.length ? ea(e.$slots, "search", { key: 1 }, () => [
        Kt("section", qk, [
          n.suggestions.length && !o.searchQuery ? ta((bt(), $t("p", Gk, null, 512)), [
            [l, void 0, "cx-sx-language-selector-all-languages"]
          ]) : Ui("", !0),
          (bt(!0), $t(Ni, null, Mi(o.searchResultsByScript, (u, g) => (bt(), $t("ul", {
            key: g,
            class: na(["results-languages pa-0 ma-0 mb-6", o.resultsDisplayClass])
          }, [
            (bt(!0), $t(Ni, null, Mi(u, (r) => (bt(), $t("li", {
              key: r,
              class: na(["language pa-2 ps-8 ma-0", r === o.selectedLanguage ? "language--selected" : ""]),
              lang: r,
              dir: o.getDir(r),
              role: "option",
              "aria-selected": r === o.selectedLanguage || null,
              tabindex: "-1",
              onClick: (c) => o.select(r),
              textContent: Hu(o.getAutonym(r))
            }, null, 10, Wk))), 128)),
            n.allOptionEnabled && !o.searchQuery ? ta((bt(), $t("li", {
              key: 0,
              class: na(["language pa-2 ps-8 ma-0", o.selectedLanguage === "all" ? "language--selected" : ""]),
              role: "option",
              "aria-selected": o.selectedLanguage === "all" || null,
              tabindex: "-1",
              onClick: t[2] || (t[2] = (r) => o.select("all"))
            }, null, 10, Xk)), [
              [l, void 0, "cx-translation-list-all-languages-option-label"]
            ]) : Ui("", !0)
          ], 2))), 128))
        ])
      ]) : ea(e.$slots, "noresults", { key: 2 }, () => [
        Kt("section", Kk, [
          ta(Kt("h3", Yk, null, 512), [
            [l, void 0, "cx-sx-language-selector-no-search-results"]
          ])
        ])
      ])
    ])
  ], 512);
}
const Ip = /* @__PURE__ */ P(Fk, [["render", Qk]]);
const pe = window.Vue.unref, Jk = window.Vue.resolveDirective, ju = window.Vue.withDirectives, $o = window.Vue.openBlock, Vo = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const qu = window.Vue.toDisplayString, Gu = window.Vue.withModifiers, _n = window.Vue.withCtx, Vt = window.Vue.createVNode, Zk = { class: "sx-translation-list-language-selector" }, ex = {
  key: 0,
  class: "mw-ui-autonym"
}, tx = ["lang", "dir", "textContent"], nx = {
  key: 0,
  class: "mw-ui-autonym"
}, ox = ["lang", "dir", "textContent"], Eo = window.Vue.computed, sx = window.Vue.inject, ax = window.Vue.ref, Zl = {
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
      required: !0
    },
    selectedTargetLanguage: {
      type: String,
      required: !0
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
    const n = e, o = t, s = sx("breakpoints"), a = Eo(() => s.value.mobile), i = ax(null), l = Eo(() => !!i.value), u = () => i.value = "source", g = () => i.value = "target", r = () => i.value = null, c = Eo(() => {
      if (!l.value)
        return;
      const w = {
        source: "sourceLanguages",
        target: "targetLanguages"
      }[i.value];
      return n[w];
    }), d = (h) => {
      const f = {
        source: "update:selectedSourceLanguage",
        target: "update:selectedTargetLanguage"
      }[i.value];
      r(), o(f, h);
    }, m = Eo(
      () => n.selectedSourceLanguage === "all"
    ), p = Eo(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, w) => {
      const f = Jk("i18n");
      return $o(), Vo("div", Zk, [
        Vt(pe(B), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: _n(() => [
            Vt(pe(k), {
              class: "flex justify-end",
              cols: "5"
            }, {
              default: _n(() => [
                Vt(pe(Le), {
                  indicator: pe(hl),
                  class: "pa-3 sx-translation-list-language-selector__button",
                  type: "text",
                  onClick: Gu(u, ["stop"])
                }, {
                  default: _n(() => [
                    m.value ? ju(($o(), Vo("span", ex, null, 512)), [
                      [f, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : ($o(), Vo("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: pe(q.getDir)(e.selectedSourceLanguage),
                      textContent: qu(pe(q.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, tx))
                  ]),
                  _: 1
                }, 8, ["indicator"])
              ]),
              _: 1
            }),
            Vt(pe(k), {
              class: "sx-translation-list-language-selector__arrow flex justify-center",
              cols: "2"
            }, {
              default: _n(() => [
                Vt(pe(be), { icon: pe(bm) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Vt(pe(k), { cols: "5" }, {
              default: _n(() => [
                Vt(pe(Le), {
                  indicator: pe(hl),
                  class: "pa-3 sx-translation-list-language-selector__button",
                  type: "text",
                  disabled: e.targetLanguages.length < 2,
                  onClick: Gu(g, ["stop"])
                }, {
                  default: _n(() => [
                    p.value ? ju(($o(), Vo("span", nx, null, 512)), [
                      [f, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : ($o(), Vo("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: pe(q.getDir)(e.selectedTargetLanguage),
                      textContent: qu(pe(q.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, ox))
                  ]),
                  _: 1
                }, 8, ["indicator", "disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Vt(pe(qe), {
          value: l.value,
          "onUpdate:value": w[0] || (w[0] = (_) => l.value = _),
          animation: "slide-up",
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-opacity": 0,
          onClose: r
        }, {
          default: _n(() => [
            Vt(pe(Ip), {
              class: "sx-translation-list-language-selector__widget col-12",
              placeholder: h.$i18n("cx-sx-language-selector-placeholder"),
              languages: c.value,
              "all-option-enabled": e.allOptionEnabled,
              onSelect: d,
              onClose: r
            }, null, 8, ["placeholder", "languages", "all-option-enabled"])
          ]),
          _: 1
        }, 8, ["value", "title", "fullscreen", "header"])
      ]);
    };
  }
}, ix = window.Vue.toDisplayString, rx = window.Vue.createElementVNode, Wu = window.Vue.createVNode, Xu = window.Vue.unref, Yt = window.Vue.openBlock, oa = window.Vue.createBlock, Ku = window.Vue.createCommentVNode, Yu = window.Vue.renderList, Qu = window.Vue.Fragment, sa = window.Vue.createElementBlock, lx = window.Vue.normalizeClass, Ju = window.Vue.withCtx, cx = ["textContent"], ux = {
  key: 1,
  class: "cx-translation-list-wrapper"
}, dx = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, aa = window.Vue.ref, Et = window.Vue.computed, gx = window.Vuex.useStore, Zu = {
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
    const t = e, n = aa("all"), o = aa("all"), s = gx(), a = Et(
      () => s.state.translator.translationsLoaded[t.translationStatus]
    ), { enabledTargetLanguages: i } = Es(), l = aa(!1), u = aa(null), g = Et(
      () => t.translationStatus === "draft"
    ), r = Et(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), c = Et(
      () => n.value === "all"
    ), d = Et(
      () => o.value === "all"
    ), m = Et(
      () => r.value.filter(
        (_) => (c.value || _.sourceLanguage === n.value) && (d.value || _.targetLanguage === o.value)
      ).sort((_, S) => _.lastUpdatedTimestamp < S.lastUpdatedTimestamp)
    ), p = Et(() => {
      let _ = r.value.map(
        (S) => S.targetLanguage
      );
      return i.value && (_ = _.filter(
        (S) => i.value.includes(S)
      )), [...new Set(_)];
    }), h = Et(() => {
      const _ = r.value.map(
        (S) => S.sourceLanguage
      );
      return [...new Set(_)];
    }), w = (_) => {
      u.value = _, l.value = !0;
    }, f = Et(() => t.activeStatus === t.translationStatus);
    return (_, S) => f.value ? (Yt(), oa(Xu(et), {
      key: 0,
      class: lx(`cx-translation-list--${e.translationStatus}`)
    }, {
      header: Ju(() => [
        rx("h3", {
          class: "mw-ui-card__title pa-4 pt-5 mb-0",
          textContent: ix(_.$i18n(`cx-translation-label-${e.translationStatus}`))
        }, null, 8, cx)
      ]),
      default: Ju(() => [
        Wu(Zl, {
          "selected-source-language": n.value,
          "onUpdate:selectedSourceLanguage": S[0] || (S[0] = (y) => n.value = y),
          "selected-target-language": o.value,
          "onUpdate:selectedTargetLanguage": S[1] || (S[1] = (y) => o.value = y),
          "source-languages": h.value,
          "target-languages": p.value,
          "all-option-enabled": ""
        }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"]),
        a.value ? Ku("", !0) : (Yt(), oa(Xu(tt), { key: 0 })),
        g.value ? (Yt(), sa("div", ux, [
          (Yt(!0), sa(Qu, null, Yu(m.value, (y) => (Yt(), oa(Fy, {
            key: `${e.translationStatus}-${y.key}`,
            translation: y,
            onDeleteTranslation: (D) => w(y)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (Yt(), sa("div", dx, [
          (Yt(!0), sa(Qu, null, Yu(m.value, (y) => (Yt(), oa(mk, {
            key: `${e.translationStatus}-${y.key}`,
            translation: y,
            onDeleteTranslation: (D) => w(y)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])),
        Wu(kk, {
          modelValue: l.value,
          "onUpdate:modelValue": S[2] || (S[2] = (y) => l.value = y),
          translation: u.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : Ku("", !0);
  }
}, mx = window.Vue.computed, px = window.Vuex.useStore, Be = () => {
  const e = px(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = M();
  return { sectionSuggestion: mx(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ) };
}, hx = window.Vuex.useStore, wx = window.Vue.computed, Ht = () => {
  const e = hx(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = M();
  return { currentTranslation: wx(
    () => e.getters["translator/getDraftTranslation"](
      s.value,
      o.value,
      t.value,
      n.value
    )
  ) };
}, ed = window.Vue.computed, fx = window.Vuex.useStore, Pe = () => {
  const e = fx(), { sectionSuggestion: t } = Be(), { currentTranslation: n } = Ht(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = M(), i = ed(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), l = ed(() => {
    var g, r;
    const u = ((g = t.value) == null ? void 0 : g.targetTitle) || ((r = n.value) == null ? void 0 : r.targetTitle);
    return e.getters["mediawiki/getPage"](
      a.value,
      u
    );
  });
  return { currentSourcePage: i, currentTargetPage: l };
}, _x = window.Vue.ref, vx = window.Vue.watchEffect, Sx = (e, t) => C(void 0, null, function* () {
  const n = e.language, o = e.title, s = e.articleSize, a = t.missingSections, l = (yield ue.fetchSuggestionSourceSections(
    n,
    o
  )).sections.filter((u) => u.level === "2").reduce((u, g, r, c) => {
    const d = r < c.length - 1 ? c[r + 1].byteoffset : s;
    return u[g.line] = d - g.byteoffset, u;
  }, {});
  return Object.keys(l).filter((u) => a[u]).reduce((u, g) => u + l[g], 0);
}), Ii = (e) => {
  const s = e / 5 / 200;
  return Math.ceil(s);
}, yx = (e) => {
  const t = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-whole-article",
    Math.round(t * 2) / 2,
    e
  ];
}, Cx = (e, t) => {
  const n = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-sections",
    Math.round(n * 2) / 2,
    e,
    t
  ];
}, zp = () => {
  const { currentSourcePage: e } = Pe(), { sectionSuggestion: t } = Be(), n = _x(null);
  return vx(() => {
    if (t.value)
      Sx(
        e.value,
        t.value
      ).then((o) => {
        n.value = Cx(
          Ii(o),
          Object.keys(t.value.missingSections).length
        );
      });
    else if (e.value) {
      const o = Ii(e.value.articleSize);
      n.value = yx(o);
    }
  }), { translationSizeMessageArgs: n, bytesToMinutes: Ii };
};
const se = window.Vue.unref, ot = window.Vue.createVNode, Qt = window.Vue.createElementVNode, ia = window.Vue.toDisplayString, We = window.Vue.withCtx, kx = window.Vue.resolveDirective, zi = window.Vue.withDirectives, Mn = window.Vue.openBlock, Ao = window.Vue.createBlock, Do = window.Vue.createCommentVNode, td = window.Vue.withModifiers, xx = window.Vue.createElementBlock, bx = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, $x = { class: "col shrink pe-4" }, Vx = ["lang", "dir", "textContent"], Ex = ["lang", "dir", "textContent"], Ax = ["textContent"], Dx = ["textContent"], Ri = window.Codex.CdxIcon, st = window.Vue.computed, Lx = window.Vue.inject, Tx = window.Vuex.useStore, Vl = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [xs, Ln, no],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = Tx(), { bytesToMinutes: o } = zp(), s = st(() => t.suggestion), a = st(
      () => s.value.sourceTitle || s.value.title
    ), i = st(
      () => n.getters["mediawiki/getPage"](
        s.value.sourceLanguage,
        a.value
      )
    ), l = st(
      () => {
        var f;
        return (f = s.value) == null ? void 0 : f.missingSectionsCount;
      }
    ), u = st(() => {
      var f;
      return (f = i.value) == null ? void 0 : f.description;
    }), g = st(
      () => s.value instanceof Ln
    ), r = st(
      () => s.value instanceof no
    ), { sourceLanguageAutonym: c, targetLanguageAutonym: d } = O(n), m = st(
      () => r.value ? Dp : Lp
    ), p = Lx("colors"), h = st(
      () => r.value ? p.blue600 : "currentColor"
    ), w = st(() => {
      var f;
      return o((f = i.value) == null ? void 0 : f.articleSize) < 15;
    });
    return (f, _) => {
      const S = kx("i18n");
      return s.value ? (Mn(), xx("div", bx, [
        Qt("div", $x, [
          ot(se(Bl), {
            class: "cx-suggestion__thumbnail",
            thumbnail: i.value && i.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        ot(se(B), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: We(() => [
            ot(se(B), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: We(() => [
                ot(se(k), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: We(() => [
                    Qt("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: s.value.sourceLanguage,
                      dir: se(q.getDir)(s.value.sourceLanguage),
                      textContent: ia(a.value)
                    }, null, 8, Vx)
                  ]),
                  _: 1
                }),
                ot(se(k), { shrink: "" }, {
                  default: We(() => [
                    Qt("p", {
                      class: "ma-0 cx-suggestion__source-description complementary",
                      lang: s.value.sourceLanguage,
                      dir: se(q.getDir)(s.value.sourceLanguage),
                      textContent: ia(u.value)
                    }, null, 8, Ex)
                  ]),
                  _: 1
                }),
                w.value && !g.value ? (Mn(), Ao(se(k), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: We(() => [
                    zi(Qt("small", null, null, 512), [
                      [S, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : Do("", !0),
                g.value ? (Mn(), Ao(se(k), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
                  shrink: ""
                }, {
                  default: We(() => [
                    zi(Qt("small", null, null, 512), [
                      [S, [l.value], "cx-sx-translation-suggestion-info"]
                    ])
                  ]),
                  _: 1
                })) : r.value ? (Mn(), Ao(se(k), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: We(() => [
                    ot(se(B), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: We(() => [
                        ot(se(k), { grow: "" }, {
                          default: We(() => [
                            Qt("small", {
                              textContent: ia(se(c))
                            }, null, 8, Ax),
                            ot(se(Ri), {
                              icon: se(HC),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            Qt("small", {
                              textContent: ia(se(d))
                            }, null, 8, Dx)
                          ]),
                          _: 1
                        }),
                        l.value ? (Mn(), Ao(se(k), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: We(() => [
                            zi(Qt("small", null, null, 512), [
                              [S, [
                                l.value
                              ], "cx-sx-translation-suggestion-info"]
                            ])
                          ]),
                          _: 1
                        })) : Do("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : Do("", !0)
              ]),
              _: 1
            }),
            ot(se(k), { shrink: "" }, {
              default: We(() => [
                r.value ? Do("", !0) : (Mn(), Ao(se(Ri), {
                  key: 0,
                  icon: se(go),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: _[0] || (_[0] = td((y) => f.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                ot(se(Ri), {
                  class: "cx-suggestion__favorite-button",
                  icon: m.value,
                  "icon-color": h.value,
                  onClick: _[1] || (_[1] = td((y) => f.$emit("bookmark"), ["stop"]))
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : Do("", !0);
    };
  }
};
const $e = window.Vue.unref, Jt = window.Vue.createVNode, At = window.Vue.withCtx, Bx = window.Vue.resolveDirective, ra = window.Vue.createElementVNode, nd = window.Vue.withDirectives, Oi = window.Vue.toDisplayString, od = window.Vue.createTextVNode, Px = window.Vue.vShow, sd = window.Vue.renderList, ad = window.Vue.Fragment, Lo = window.Vue.openBlock, Hi = window.Vue.createElementBlock, Fx = window.Vue.normalizeClass, id = window.Vue.createBlock, Mx = { class: "sx-suggestions-filters" }, Nx = { class: "mb-0" }, Ux = { class: "sx-suggestions-filters__group-label mb-3" }, Ix = { class: "sx-suggestions-filters__group-filters mb-3" }, rd = window.Vue.ref, zx = window.Vue.computed, Rx = window.Vue.inject, ld = window.Codex.CdxButton, Ox = window.Codex.CdxIcon, Hx = window.Codex.CdxInfoChip, jx = {
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
      [mt]: Pp,
      [Ot]: Tp,
      [pt]: null
    }, { allFilters: s, isFilterSelected: a, selectFilter: i } = Ol(), l = () => n("update:modelValue", !1), u = () => {
      r.value && i(r.value), l();
    }, g = rd(!1), r = rd(null), c = (w) => {
      r.value = w, g.value = !0;
    }, d = (w) => r.value ? r.value.id === w.id && r.value.type === w.type : a(w), m = Rx("breakpoints"), p = zx(() => m.value.mobile), { getFilterProvider: h } = Hl();
    return (w, f) => {
      const _ = Bx("i18n");
      return Lo(), id($e(qe), {
        value: e.modelValue,
        animation: "slide-up",
        fullscreen: p.value,
        header: !1,
        "overlay-opacity": 0
      }, {
        default: At(() => [
          ra("section", Mx, [
            Jt($e(B), {
              class: "sx-suggestions-filters__header ma-0 py-3",
              align: "stretch",
              justify: "start"
            }, {
              default: At(() => [
                Jt($e(k), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: At(() => [
                    Jt($e(ld), {
                      class: "pa-0 ms-4",
                      weight: "quiet",
                      "aria-label": w.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: l
                    }, {
                      default: At(() => [
                        Jt($e(Ox), { icon: $e(go) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                Jt($e(k), {
                  grow: "",
                  class: "px-4",
                  align: "center"
                }, {
                  default: At(() => [
                    nd(ra("h5", Nx, null, 512), [
                      [_, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                Jt($e(k), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: At(() => [
                    nd(Jt($e(ld), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: u
                    }, {
                      default: At(() => [
                        od(Oi(w.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [Px, g.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Jt($e(k), { class: "px-4" }, {
              default: At(() => [
                (Lo(!0), Hi(ad, null, sd($e(s), (S) => (Lo(), Hi("div", {
                  key: S.id,
                  class: "sx-suggestions-filters__group"
                }, [
                  ra("div", Ux, Oi(S.label), 1),
                  ra("div", Ix, [
                    (Lo(!0), Hi(ad, null, sd(S.filters, (y) => (Lo(), id($e(Hx), {
                      key: y.id,
                      class: Fx(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
                        "sx-suggestions-filters__filter--active": d(y)
                      }]),
                      icon: o[$e(h)(y)],
                      onClick: (D) => c(y)
                    }, {
                      default: At(() => [
                        od(Oi(y.label), 1)
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
const qx = window.Vue.renderList, Gx = window.Vue.Fragment, ji = window.Vue.openBlock, cd = window.Vue.createElementBlock, ud = window.Vue.unref, Wx = window.Vue.toDisplayString, Xx = window.Vue.createTextVNode, Kx = window.Vue.normalizeClass, Yx = window.Vue.withCtx, Qx = window.Vue.createBlock, Jx = window.Vue.createVNode, Zx = { class: "cx-suggestion-list__filters flex px-4 pb-2" }, eb = window.Codex.CdxInfoChip, dd = window.Vue.ref, tb = window.Vue.computed, nb = window.Vue.watch, ob = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = de(), { getFiltersSummary: n, selectFilter: o, isFilterSelected: s } = Ol(), a = dd(!1), i = () => a.value = !0, l = {
      [mt]: Pp,
      [Ot]: Tp,
      [pt]: null
    }, { getFilterProvider: u } = Hl(), g = (d) => ({
      id: d.id,
      type: d.type,
      icon: l[u(d)],
      label: d.label,
      action: o
    }), r = dd(n());
    nb(a, (d) => {
      d || (r.value = n());
    });
    const c = tb(() => [
      ...r.value.map(g),
      {
        id: "more",
        icon: Xl,
        label: t.i18n("cx-sx-suggestions-filter-more-label"),
        action: i
      }
    ]);
    return (d, m) => (ji(), cd("div", Zx, [
      (ji(!0), cd(Gx, null, qx(c.value, (p) => (ji(), Qx(ud(eb), {
        key: p.label,
        class: Kx(["cx-suggestion-list__filter py-1 me-1", { "cx-suggestion-list__filter--active": ud(s)(p) }]),
        icon: p.icon,
        onClick: (h) => p.action(p)
      }, {
        default: Yx(() => [
          Xx(Wx(p.label), 1)
        ]),
        _: 2
      }, 1032, ["class", "icon", "onClick"]))), 128)),
      Jx(jx, {
        modelValue: a.value,
        "onUpdate:modelValue": m[0] || (m[0] = (p) => a.value = p)
      }, null, 8, ["modelValue"])
    ]));
  }
}, sb = window.Vue.computed, ab = () => {
  const { supportedLanguageCodes: e, enabledTargetLanguages: t } = Es(), n = sb(() => t.value || e.value);
  return {
    supportedLanguageCodes: e,
    availableTargetLanguages: n
  };
}, To = window.Vue.computed, gd = window.Vue.ref, ib = window.Vue.watch, rb = window.Vuex.useStore, lb = () => {
  const e = rb(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = M(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = zl(), i = wt(), l = To(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), u = To(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), g = To(
    () => !l.value && !u.value
  ), r = gd(0), c = gd(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, m = 4, p = To(
    () => a(r.value)
  ), h = To(
    () => s(c.value)
  ), w = () => {
    y(), D();
  }, {
    fetchNextSectionSuggestionsSlice: f,
    fetchNextPageSuggestionsSlice: _
  } = jl(), S = (H) => H.length === d, y = () => {
    const H = S(
      p.value
    ), F = (r.value + 1) % m, N = S(
      a(F)
    );
    (!H || !N) && f(), H && V();
  }, D = () => {
    const H = S(
      h.value
    ), F = (c.value + 1) % m, N = S(
      s(F)
    );
    (!H || !N) && _(), H && L();
  }, T = (H) => {
    i({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", H), y();
  }, U = (H) => {
    i({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestion", H), D();
  }, V = () => r.value = (r.value + 1) % m, L = () => c.value = (c.value + 1) % m;
  return ib(
    o,
    () => {
      c.value = 0, D(), r.value = 0, y();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: h,
    currentSectionSuggestionsSlice: p,
    discardPageSuggestion: U,
    discardSectionSuggestion: T,
    onSuggestionRefresh: w,
    pageSuggestionsLoading: u,
    sectionSuggestionsLoading: l,
    showRefreshButton: g,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: s
  };
}, cb = window.Vuex.useStore, ec = () => {
  const e = cb(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = jl(), o = (g, r, c) => e.state.suggestions.pageSuggestions.find(
    (d) => d.sourceLanguage === g && d.targetLanguage === r && d.sourceTitle === c
  ), s = (g) => C(void 0, null, function* () {
    const { sourceTitle: r, sourceLanguage: c, targetLanguage: d } = g;
    yield ue.markFavorite(r, c, d);
    const m = new no({
      title: r,
      sourceLanguage: c,
      targetLanguage: d
    });
    e.commit("suggestions/addFavoriteSuggestion", m);
  });
  return {
    markFavoritePageSuggestion: (g) => {
      e.commit("suggestions/removePageSuggestion", g), n(), s(g);
    },
    markFavoriteSectionSuggestion: (g) => {
      e.commit(
        "suggestions/removeSectionSuggestionFromList",
        g
      ), t(), s(g);
    },
    markFavoriteSuggestion: (g, r, c) => C(void 0, null, function* () {
      const d = o(
        r,
        c,
        g
      );
      d && (e.commit("suggestions/removePageSuggestion", d), n());
      const m = e.getters["suggestions/getSectionSuggestionsForArticle"](r, c, g);
      m != null && m.isListable && (e.commit(
        "suggestions/removeSectionSuggestionFromList",
        m
      ), t()), yield ue.markFavorite(
        g,
        r,
        c
      );
      const p = new no({
        title: g,
        sourceLanguage: r,
        targetLanguage: c
      });
      e.commit("suggestions/addFavoriteSuggestion", p);
    }),
    removeFavoriteSuggestion: (g) => (e.commit("suggestions/removeFavoriteSuggestion", g), ue.unmarkFavorite(g))
  };
};
const md = window.Vue.toDisplayString, la = window.Vue.createElementVNode, Nn = window.Vue.createVNode, ae = window.Vue.unref, Bo = window.Vue.withCtx, ub = window.Vue.resolveDirective, qi = window.Vue.withDirectives, pd = window.Vue.renderList, hd = window.Vue.Fragment, Zt = window.Vue.openBlock, Gi = window.Vue.createElementBlock, Po = window.Vue.createBlock, Wi = window.Vue.createCommentVNode, db = window.Vue.createTextVNode, gb = window.Vue.vShow, mb = ["textContent"], pb = { class: "cx-translation-list__division-title ma-0 pa-4" }, hb = { class: "cx-translation-list__division-title ma-0 pa-4" }, wb = { class: "cx-suggestion-list__refresh-button-container justify-center" }, fb = window.Vuex.useStore, _b = window.Vue.ref, vb = window.Codex.CdxButton, Sb = window.Codex.CdxIcon, yb = {
  __name: "CXSuggestionList",
  props: {
    active: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = fb(), { sourceLanguage: n, targetLanguage: o } = O(t), { supportedLanguageCodes: s, availableTargetLanguages: a } = ab(), i = $p(), l = (L) => i(L, o.value), u = (L) => i(n.value, L), { getEventSourceForDashboardSuggestion: g } = kp(), r = Bs(), c = (L) => r(
      L.sourceTitle,
      L.sourceLanguage,
      L.targetLanguage,
      g()
    ), {
      currentPageSuggestionsSlice: d,
      currentSectionSuggestionsSlice: m,
      discardPageSuggestion: p,
      discardSectionSuggestion: h,
      onSuggestionRefresh: w,
      pageSuggestionsLoading: f,
      sectionSuggestionsLoading: _,
      showRefreshButton: S
    } = lb(), y = _b(null), D = wt(), T = () => {
      D({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: n.value,
        translation_target_language: o.value
      }), w(), y.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: U, markFavoritePageSuggestion: V } = ec();
    return (L, H) => {
      const F = ub("i18n");
      return qi((Zt(), Gi("div", null, [
        Nn(ae(et), { class: "cx-translation-list--suggestions pa-0 mb-0" }, {
          header: Bo(() => [
            la("h3", {
              class: "mw-ui-card__title pa-4 pt-5 mb-0",
              textContent: md(L.$i18n("cx-suggestionlist-title"))
            }, null, 8, mb),
            Nn(ob)
          ]),
          default: Bo(() => [
            Nn(Zl, {
              "source-languages": ae(s),
              "target-languages": ae(a),
              "selected-source-language": ae(n),
              "selected-target-language": ae(o),
              "onUpdate:selectedSourceLanguage": l,
              "onUpdate:selectedTargetLanguage": u
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])
          ]),
          _: 1
        }),
        Nn(ae(et), {
          ref_key: "pageSuggestionsList",
          ref: y,
          class: "cx-translation-list--page-suggestions pa-0 mb-0"
        }, {
          default: Bo(() => [
            qi(la("h5", pb, null, 512), [
              [F, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (Zt(!0), Gi(hd, null, pd(ae(d), (N, oe) => (Zt(), Po(Vl, {
              key: `page-suggestion-${oe}`,
              suggestion: N,
              onClose: (Q) => ae(p)(N),
              onClick: (Q) => c(N),
              onBookmark: (Q) => ae(V)(N)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            ae(f) ? (Zt(), Po(ae(tt), { key: 0 })) : Wi("", !0)
          ]),
          _: 1
        }, 512),
        Nn(ae(et), { class: "cx-translation-list--sx-suggestions pa-0 mb-0" }, {
          default: Bo(() => [
            qi(la("h5", hb, null, 512), [
              [F, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (Zt(!0), Gi(hd, null, pd(ae(m), (N, oe) => (Zt(), Po(Vl, {
              key: `section-suggestion-${oe}`,
              class: "ma-0",
              suggestion: N,
              onClose: (Q) => ae(h)(N),
              onClick: (Q) => c(N),
              onBookmark: (Q) => ae(U)(N)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            ae(_) ? (Zt(), Po(ae(tt), { key: 0 })) : Wi("", !0)
          ]),
          _: 1
        }),
        la("div", wb, [
          ae(S) ? (Zt(), Po(ae(vb), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: T
          }, {
            default: Bo(() => [
              Nn(ae(Sb), {
                class: "me-1",
                icon: ae(Bp)
              }, null, 8, ["icon"]),
              db(" " + md(L.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : Wi("", !0)
        ])
      ], 512)), [
        [gb, e.active]
      ]);
    };
  }
}, Cb = window.Vue.computed, kb = window.Vuex.useStore, xb = {
  name: "CxFavoriteList",
  components: {
    CxTranslationSuggestion: Vl,
    MwCard: et
  },
  setup() {
    const e = kb(), t = Cb(() => e.state.suggestions.favorites || []), n = Bs(), o = (a) => n(
      a.title,
      a.sourceLanguage,
      a.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: s } = ec();
    return {
      favorites: t,
      startFavoriteTranslation: o,
      removeFavoriteSuggestion: s
    };
  }
}, bb = window.Vue.resolveDirective, $b = window.Vue.createElementVNode, Vb = window.Vue.withDirectives, Eb = window.Vue.renderList, Ab = window.Vue.Fragment, Xi = window.Vue.openBlock, Db = window.Vue.createElementBlock, wd = window.Vue.resolveComponent, fd = window.Vue.createBlock, _d = window.Vue.withCtx, Lb = window.Vue.createCommentVNode, Tb = { class: "mw-ui-card__title pa-4 pt-5 mb-0" };
function Bb(e, t, n, o, s, a) {
  const i = wd("cx-translation-suggestion"), l = wd("mw-card"), u = bb("i18n");
  return o.favorites.length ? (Xi(), fd(l, {
    key: 0,
    class: "cx-translation-list--favorites pa-0 mb-4"
  }, {
    header: _d(() => [
      Vb($b("h3", Tb, null, 512), [
        [u, void 0, "cx-suggestion-list-favorites-division"]
      ])
    ]),
    default: _d(() => [
      (Xi(!0), Db(Ab, null, Eb(o.favorites, (g, r) => (Xi(), fd(i, {
        key: `favorite-${r}`,
        suggestion: g,
        onClick: (c) => o.startFavoriteTranslation(g),
        onBookmark: (c) => o.removeFavoriteSuggestion(g)
      }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
    ]),
    _: 1
  })) : Lb("", !0);
}
const Pb = /* @__PURE__ */ P(xb, [["render", Bb]]);
const Fb = {
  name: "CxHelpPanel",
  components: { MwIcon: be },
  setup() {
    const e = de();
    return { listItems: [
      {
        icon: cf,
        label: e.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation"
      },
      {
        icon: qw,
        label: e.i18n("cx-sx-dashboard-help-panel-stats-label"),
        href: mw.util.getUrl("Special:ContentTranslationStats")
      },
      {
        icon: uf,
        label: e.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation"
      }
    ] };
  }
}, Mb = window.Vue.resolveDirective, ca = window.Vue.createElementVNode, Nb = window.Vue.withDirectives, Ub = window.Vue.renderList, Ib = window.Vue.Fragment, Ki = window.Vue.openBlock, Yi = window.Vue.createElementBlock, zb = window.Vue.resolveComponent, Rb = window.Vue.createVNode, Ob = window.Vue.toDisplayString, Hb = { class: "cx-help-panel pa-4" }, jb = { class: "cx-help-panel__item-list mt-6 ps-2" }, qb = ["href"], Gb = ["textContent"];
function Wb(e, t, n, o, s, a) {
  const i = zb("mw-icon"), l = Mb("i18n");
  return Ki(), Yi("div", Hb, [
    Nb(ca("h5", null, null, 512), [
      [l, void 0, "cx-sx-dashboard-help-panel-title"]
    ]),
    ca("ul", jb, [
      (Ki(!0), Yi(Ib, null, Ub(o.listItems, (u, g) => (Ki(), Yi("li", {
        key: g,
        class: "mt-4"
      }, [
        ca("a", {
          href: u.href,
          target: "_blank"
        }, [
          Rb(i, {
            class: "me-2",
            icon: u.icon
          }, null, 8, ["icon"]),
          ca("span", {
            textContent: Ob(u.label)
          }, null, 8, Gb)
        ], 8, qb)
      ]))), 128))
    ])
  ]);
}
const Xb = /* @__PURE__ */ P(Fb, [["render", Wb]]);
const Kb = window.Vue.ref, vd = window.Vue.computed, Yb = window.Vue.watch, Qb = {
  name: "CxStatsPanel",
  components: { MwCol: k, MwRow: B },
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", n = vd(() => {
      var a, i;
      return ((i = (a = e.stats) == null ? void 0 : a[t]) == null ? void 0 : i.count) || 0;
    }), o = vd(
      () => {
        var a, i;
        return ((i = (a = e.stats) == null ? void 0 : a[t]) == null ? void 0 : i.delta) || 0;
      }
    ), s = Kb(null);
    return Yb(
      () => e.stats,
      () => {
        const a = e.stats, i = s.value.getContext("2d"), l = Object.keys(e.stats || {}).sort(), u = l.reduce(
          (S, y) => Math.max(S, a[y].delta),
          0
        ), g = l.map((S) => a[S].delta), r = s.value.getBoundingClientRect().width, c = s.value.getBoundingClientRect().height;
        s.value.width = r, s.value.height = c;
        const d = 4, m = 6, p = 50, h = (p - d) / u;
        let w = d;
        const f = Math.floor(
          (r - d) / (m + d)
        ), _ = g.slice(
          Math.max(g.length - f, 0)
        );
        _.forEach((S, y) => {
          y === _.length - 1 && (i.fillStyle = "#36c");
          const D = p - S * h;
          i.fillRect(w, D, m, S * h), w += m + d;
        });
      }
    ), { canvasRef: s, thisMonthStats: o, total: n };
  }
}, Jb = window.Vue.resolveDirective, Un = window.Vue.createElementVNode, Qi = window.Vue.withDirectives, Sd = window.Vue.toDisplayString, yd = window.Vue.resolveComponent, Ji = window.Vue.withCtx, Zi = window.Vue.createVNode, Zb = window.Vue.openBlock, e8 = window.Vue.createElementBlock, t8 = { class: "cx-stats-panel pa-4" }, n8 = ["textContent"], o8 = { class: "cx-stats-panel__monthly-stats-label" }, s8 = ["textContent"], a8 = { class: "cx-stats-panel__total-stats-label" }, i8 = {
  ref: "canvasRef",
  class: "cx-stats-panel__canvas"
};
function r8(e, t, n, o, s, a) {
  const i = yd("mw-col"), l = yd("mw-row"), u = Jb("i18n");
  return Zb(), e8("div", t8, [
    Qi(Un("h5", null, null, 512), [
      [u, void 0, "cx-sx-dashboard-stats-panel-title"]
    ]),
    Zi(l, null, {
      default: Ji(() => [
        Zi(i, { class: "cx-stats-panel__monthly-stats" }, {
          default: Ji(() => [
            Un("h3", {
              textContent: Sd(o.thisMonthStats)
            }, null, 8, n8),
            Qi(Un("h5", o8, null, 512), [
              [u, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
            ])
          ]),
          _: 1
        }),
        Zi(i, { class: "cx-stats-panel__total-stats" }, {
          default: Ji(() => [
            Un("h3", {
              textContent: Sd(o.total)
            }, null, 8, s8),
            Qi(Un("h5", a8, null, 512), [
              [u, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    Un("canvas", i8, null, 512)
  ]);
}
const l8 = /* @__PURE__ */ P(Qb, [["render", r8]]), c8 = window.Vuex.useStore;
let ua = [];
const Rp = () => {
  const e = c8();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || ua.includes(o) ? Promise.resolve() : (ua.push(o), uo.fetchLanguageTitles(t, n).then((s) => {
      ua = ua.filter(
        (a) => a !== o
      ), s && e.commit("mediawiki/addLanguageTitleGroup", s);
    }));
  };
}, { getUrlParam: u8 } = M(), Op = () => {
  const e = {
    ulsmissinglanguages: "content_language_selector",
    mflanguagesearcher: "content_language_selector",
    mfrecenttranslation: "recent_translation",
    mfrecentedit: "recent_edit",
    mffrequentlanguages: "frequent_languages",
    newbytranslationmobile: "invite_new_article_creation",
    specialcontribute: "contributions_page",
    publishingfollowup: "followup_after_publishing",
    ulsaddlanguages: "language_selector_options"
  }, t = u8("campaign");
  return e[t];
}, d8 = () => {
  const e = Bs(), t = wt(), n = Rp(), { targetPageExists: o } = ht(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: i
  } = M();
  return () => C(void 0, null, function* () {
    const l = Op() || "direct_preselect";
    return n(s.value, i.value).then(
      () => t({
        event_type: "dashboard_open",
        event_source: l,
        translation_source_language: s.value,
        translation_target_language: a.value,
        translation_type: o.value ? "section" : "article"
      })
    ), e(
      i.value,
      s.value,
      a.value,
      l
    );
  });
}, g8 = window.Vuex.useStore, Ja = () => {
  const e = g8(), t = (o) => C(void 0, null, function* () {
    let s = yield je.fetchTranslations(o);
    e.commit("translator/clearTranslationsByStatus", o), s.forEach(
      (i) => e.commit("translator/addTranslation", i)
    );
    const a = {};
    for (const i of s) {
      const l = i.sourceLanguage;
      a[l] = a[l] || [], a[l].push(i);
    }
    e.commit("translator/setTranslationsLoaded", { status: o, value: !0 });
    for (const [i, l] of Object.entries(a))
      e.dispatch("mediawiki/fetchPageMetadata", {
        language: i,
        titles: l.map((u) => u.sourceTitle)
      }), l.forEach((u) => {
        const { targetLanguage: g, targetTitle: r } = u, c = !!e.getters["mediawiki/getPage"](
          g,
          r
        );
        r && !c && e.commit(
          "mediawiki/addPage",
          new co({ title: r, pagelanguage: g })
        );
      });
  });
  return { fetchTranslationsByStatus: t, fetchAllTranslations: () => e.state.translator.translations.length ? Promise.resolve() : Promise.all([
    t("published"),
    t("draft")
  ]).catch((o) => {
    mw.log.error("[CX] Error while fetching translations", o);
  }) };
}, m8 = window.Vuex.useStore, p8 = () => {
  const e = m8();
  return () => C(void 0, null, function* () {
    if (e.state.suggestions.favorites.length)
      return;
    const t = yield ue.fetchFavorites();
    if (!t || !t.length)
      return;
    const n = {};
    for (const o of t)
      e.commit("suggestions/addFavoriteSuggestion", o), ue.fetchSectionSuggestion(
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
}, h8 = window.Vuex.useStore, w8 = () => {
  const e = wt(), t = h8(), n = d8(), { fetchAllTranslations: o } = Ja(), s = ql(), a = p8(), { pageURLParameter: i, sectionURLParameter: l, draftURLParameter: u } = M();
  return () => C(void 0, null, function* () {
    if (yield bp()(), i.value) {
      n({
        pageTitle: i.value,
        isDraftTranslation: u.value,
        sectionTitle: l.value
      });
      return;
    }
    const { sourceLanguage: r, targetLanguage: c, previousRoute: d } = O(t);
    e({
      event_type: "dashboard_open",
      event_source: (() => {
        const h = {
          "sx-article-search": "return_from_search",
          "sx-translation-confirmer": "return_from_confirmation",
          "sx-section-selector": "return_from_section_selection",
          "sx-sentence-selector": "editor_close"
        }[d.value];
        return h || Op() || "direct";
      })(),
      translation_source_language: r.value,
      translation_target_language: c.value
    });
    try {
      yield a();
    } catch (p) {
      mw.log.error("[CX] Error while fetching favorite suggestions", p);
    }
    yield o(), s();
  });
}, Cd = window.Vue.computed, f8 = window.Vue.ref, _8 = window.Vue.watch, v8 = window.Vue.watchEffect, S8 = window.Vuex.useStore, y8 = ["suggestions", "draft", "published"], C8 = () => {
  const e = S8(), { getUrlParam: t, setUrlParam: n } = M(), o = t("active-list"), s = f8(null);
  if (y8.includes(o))
    s.value = o;
  else {
    const a = Cd(
      () => e.state.translator.translationsLoaded.draft
    ), i = Cd(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = i.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", _8(a, (l) => {
      l && (s.value = i.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return v8(() => {
    n("active-list", s.value), window.scrollTo(0, 0);
  }), s;
}, k8 = window.Vue.computed, x8 = () => {
  const e = de();
  return k8(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: Xw,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: Ga,
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
const re = window.Vue.unref, he = window.Vue.createVNode, b8 = window.Vue.toDisplayString, $8 = window.Vue.createTextVNode, Dt = window.Vue.withCtx, er = window.Vue.openBlock, kd = window.Vue.createBlock, xd = window.Vue.createCommentVNode, V8 = window.Vue.isRef, E8 = window.Vue.createElementBlock, A8 = window.Vue.computed, D8 = window.Vuex.useStore, L8 = window.Codex.CdxButton, T8 = window.Codex.CdxIcon, B8 = {
  __name: "CXDashboard",
  setup(e) {
    const t = me(), n = () => t.push({ name: "sx-article-search" });
    w8()();
    const s = D8();
    s.dispatch("translator/fetchTranslatorStats");
    const a = A8(() => s.state.translator.translatorStats), i = C8(), l = x8();
    return (u, g) => (er(), E8("div", null, [
      he(re(B), { class: "ma-0 py-4" }, {
        default: Dt(() => [
          he(re(L8), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: n
          }, {
            default: Dt(() => [
              he(re(T8), {
                class: "me-1",
                icon: re(bl)
              }, null, 8, ["icon"]),
              $8(" " + b8(u.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      he(re(B), {
        class: "ma-0",
        align: "start"
      }, {
        default: Dt(() => [
          u.$mwui.breakpoint.tabletAndUp ? (er(), kd(re(k), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: Dt(() => [
              he(re(vs), {
                id: "dashboard-list-selector--desktop",
                items: re(l),
                active: re(i),
                onSelect: g[0] || (g[0] = (r) => i.value = r)
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : xd("", !0),
          he(re(k), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: Dt(() => [
              he(Pb),
              he(yb, {
                active: re(i) === "suggestions"
              }, null, 8, ["active"]),
              he(Zu, {
                "translation-status": "draft",
                "active-status": re(i)
              }, null, 8, ["active-status"]),
              he(Zu, {
                "translation-status": "published",
                "active-status": re(i)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          he(re(k), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: Dt(() => [
              he(re(B), {
                class: "ma-0",
                align: "start"
              }, {
                default: Dt(() => [
                  he(re(k), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: Dt(() => [
                      he(l8, { stats: a.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  he(re(k), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: Dt(() => [
                      he(Xb)
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
      u.$mwui.breakpoint.mobile ? (er(), kd(re(sw), {
        key: 0,
        active: re(i),
        "onUpdate:active": g[1] || (g[1] = (r) => V8(i) ? i.value = r : null),
        items: re(l)
      }, null, 8, ["active", "items"])) : xd("", !0)
    ]));
  }
}, P8 = {
  name: "DashboardView",
  components: { CxDashboard: B8 }
}, F8 = window.Vue.resolveComponent, M8 = window.Vue.createVNode, N8 = window.Vue.openBlock, U8 = window.Vue.createElementBlock, I8 = { class: "cx-translation-dashboard" };
function z8(e, t, n, o, s, a) {
  const i = F8("cx-dashboard");
  return N8(), U8("main", I8, [
    M8(i, { class: "mb-4 pb-12" })
  ]);
}
const bd = /* @__PURE__ */ P(P8, [["render", z8]]), In = window.Vue.computed, R8 = () => {
  const { sectionSuggestion: e } = Be(), { targetLanguageURLParameter: t } = M(), { currentTranslation: n } = Ht(), o = In(
    () => {
      var d, m, p;
      return (p = (m = (d = e.value) == null ? void 0 : d.orderedMissingSections) == null ? void 0 : m[0]) == null ? void 0 : p.sourceTitle;
    }
  ), s = In(
    () => {
      var d;
      return (d = e.value) == null ? void 0 : d.missingSectionsCount;
    }
  ), a = In(
    () => {
      var d;
      return (d = e.value) == null ? void 0 : d.presentSectionsCount;
    }
  ), { targetPageExists: i, getCurrentTitleByLanguage: l } = ht(), u = In(() => i ? G.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    l(t.value, null)
  ) : null), g = (d) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : d ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : i.value ? s.value > 1 || s.value === 1 && a.value > 0 ? "cx-sx-select-section" : s.value === 1 && a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : s.value === 0 && a.value > 0 ? "cx-sx-select-section" : s.value === 0 && a.value === 0 ? "cx-sx-translation-confirmer-action-new-translation" : "" : "cx-sx-start-translation-button-label", r = In(() => {
    let d;
    return s.value > 1 ? d = [
      "cx-sx-existing-translation-additional-info",
      `"${o.value}"`,
      s.value - 1
    ] : s.value === 1 && a.value > 0 ? d = [
      "cx-sx-translation-confirmer-action-message-single-missing-multiple-present",
      `"${o.value}"`
    ] : s.value === 1 && a.value === 0 ? d = [
      "cx-sx-translation-confirmer-action-message-single-missing-none-present",
      `"${o.value}"`
    ] : a.value > 0 ? d = [
      "cx-sx-translation-confirmer-action-message-none-missing-multiple-present"
    ] : d = [
      "cx-sx-translation-confirmer-action-message-none-missing-none-present"
    ], d;
  }), c = In(
    () => {
      var d;
      return !i.value || ((d = e.value) == null ? void 0 : d.missingSectionsCount) > 0;
    }
  );
  return {
    actionInformationMessageArgs: r,
    getActionButtonLabel: g,
    isProgressiveButton: c,
    targetArticlePath: u
  };
}, Hp = () => new URLSearchParams(location.search).get("force-quick-tutorial");
function O8(e) {
  return e.$el = $(e), e;
}
function H8(e, t, n, o) {
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
function j8() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function q8(e, t) {
  return C(this, null, function* () {
    yield tc(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = O8(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const G8 = window.Vue.computed, W8 = window.Vue.onMounted, X8 = window.Vue.ref;
function K8(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const Y8 = {
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
    const n = X8(null);
    let o = null;
    const s = G8(() => o.getHtml()), a = () => {
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
    return W8(() => C(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = K8;
      const r = yield q8(u, n.value);
      t.emit("ready"), n.value.appendChild(r.$element[0]), o = H8(
        r,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = j8, o.focus();
    })), { sxeditor: n };
  }
}, El = window.Vue.createElementVNode, Q8 = window.Vue.openBlock, J8 = window.Vue.createElementBlock, Z8 = ["lang", "dir"], e2 = /* @__PURE__ */ El("div", { class: "overlay-header header initial-header" }, [
  /* @__PURE__ */ El("div", { class: "toolbar" })
], -1), t2 = ["lang", "dir"];
function n2(e, t, n, o, s, a) {
  return Q8(), J8("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    e2,
    El("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, t2)
  ], 8, Z8);
}
const o2 = /* @__PURE__ */ P(Y8, [["render", n2]]);
function tc() {
  return mw.loader.using("mw.cx3.ve");
}
const s2 = window.Vuex.useStore, jp = () => {
  const e = s2();
  return (t, n) => C(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield tc(), new Promise((s) => {
      setTimeout(() => {
        const a = qm.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, a2 = window.Vuex.useStore, nc = () => {
  const e = a2();
  return (t, n, o, s = null) => C(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      o
    );
    if (a && a.content)
      return;
    const i = yield uo.fetchPageContent(
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
}, i2 = window.Vuex.useStore, oc = () => {
  const e = i2(), { currentSourcePage: t } = Pe(), n = jp(), o = nc(), {
    setSectionURLParam: s,
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: i,
    pageURLParameter: l
  } = M(), u = (c, d) => C(void 0, null, function* () {
    c() || (e.commit("application/increaseTranslationDataLoadingCounter"), yield o(
      a.value,
      i.value,
      l.value
    ), yield n(
      a.value,
      l.value
    ), e.commit("application/decreaseTranslationDataLoadingCounter")), d();
  });
  return {
    selectPageSectionByIndex: (c) => {
      const d = () => {
        var p;
        return (p = t.value.sections) == null ? void 0 : p[c];
      };
      return u(d, () => {
        const p = d();
        c === 0 ? p.originalTitle = t.value.title : s(p.originalTitle);
      });
    },
    selectPageSectionByTitle: (c) => u(() => t.value.getSectionByTitle(c), () => {
      s(c);
    })
  };
}, sc = () => (e, t, n, o = {}) => {
  G.setCXToken(e, t, n), location.href = G.getCXUrl(
    n,
    null,
    e,
    t,
    o
  );
}, r2 = (e, t, n, o) => C(void 0, null, function* () {
  var l, u, g;
  const s = ((l = t.user) == null ? void 0 : l.content) || ((u = t.mt) == null ? void 0 : u.content), a = (g = t == null ? void 0 : t.mt) == null ? void 0 : g.engine, i = yield Wm(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = i, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = i;
}), l2 = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, i;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const l = (i = t.mt) == null ? void 0 : i.engine;
      o.addProposedTranslation(l, n.mt.innerHTML), o.mtProviderUsed = l;
    }
  });
}, c2 = (e, t, n, o) => C(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return r2(e, t, n, o);
  l2(e, t);
}), u2 = (e, t, n, o) => {
  const s = [];
  for (const a of e.sections || [])
    if (o.filter(
      (l) => l.pageSectionId === parseInt(a.id)
    ).length)
      for (const l of a.subSections) {
        const u = o.find(
          (r) => r.subSectionId === l.id
        );
        if (!u)
          continue;
        const g = c2(
          l,
          u,
          t || e.title,
          n
        );
        s.push(g);
      }
  return Promise.all(s);
}, d2 = { restoreCorporaDraft: u2 }, Fo = window.Vue.computed, g2 = window.Vuex.useStore, K = () => {
  const e = g2(), { currentSourcePage: t, currentTargetPage: n } = Pe(), { currentMTProvider: o } = O(e), { sectionURLParameter: s } = M(), a = Fo(() => {
    var r, c;
    return s.value ? (c = t.value) == null ? void 0 : c.getSectionByTitle(s.value) : (r = t.value) == null ? void 0 : r.leadSection;
  }), i = Fo(
    () => {
      var r;
      return (r = a.value) == null ? void 0 : r.isTitleSelected;
    }
  ), l = Fo(
    () => {
      var r;
      return (r = a.value) == null ? void 0 : r.selectedContentTranslationUnit;
    }
  ), u = Fo(
    () => {
      var r;
      return (r = a.value) == null ? void 0 : r.getProposedTranslationByMtProvider(
        o.value
      );
    }
  ), g = Fo(() => a.value.isLeadSection ? a.value.title : n.value.title);
  return {
    sourceSection: a,
    isSectionTitleSelected: i,
    selectedContentTranslationUnit: l,
    currentProposedTranslation: u,
    targetPageTitleForPublishing: g
  };
}, m2 = window.Vuex.useStore, ac = () => {
  const e = wt(), t = m2(), n = me(), { currentSourcePage: o } = Pe(), { sourceLanguage: s, targetLanguage: a } = O(t), i = lC(), l = jp(), { isDesktop: u } = Vs(), g = sc(), r = nc(), { sourceSection: c } = K();
  return (d) => C(void 0, null, function* () {
    t.commit("application/increaseTranslationDataLoadingCounter");
    const {
      sourceLanguage: m,
      targetLanguage: p,
      sourceTitle: h,
      targetTitle: w,
      pageRevision: f,
      isLeadSectionTranslation: _
    } = d;
    if (u.value) {
      const D = {};
      _ || (D.sourcesection = d.sourceSectionTitle), g(
        s.value,
        a.value,
        h,
        D
      );
      return;
    }
    G.unsetCXToken(
      m,
      p,
      h
    );
    const { setTranslationURLParams: S } = M();
    S(d), n.push({ name: "sx-sentence-selector", query: { force: !0 } }), (s.value !== m || a.value !== p) && i(d), t.dispatch("application/getCXServerToken"), e({
      event_type: "dashboard_translation_continue",
      translation_id: d.sectionTranslationId,
      translation_source_language: s.value,
      translation_source_title: h,
      translation_source_section: d.sourceSectionTitle,
      translation_target_language: a.value,
      translation_target_title: w,
      translation_target_section: d.targetSectionTitle,
      translation_type: _ ? "article" : "section"
    }), yield r(
      s.value,
      a.value,
      h,
      f
    ), yield l(s.value, h), d.restored || (yield je.fetchTranslationUnits(d.translationId).then(
      (D) => d2.restoreCorporaDraft(
        o.value,
        w,
        a,
        D
      )
    ).then(() => d.restored = !0));
    let y;
    _ ? (c.value.originalTitle = h, y = w) : y = d.targetSectionTitle, c.value.translatedTitle = y, t.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, p2 = window.Vue.ref, h2 = window.Vuex.useStore, w2 = () => {
  const e = me(), t = h2(), { isDesktop: n } = Vs(), { logDashboardTranslationStartEvent: o } = Ql(), {
    pageURLParameter: s,
    sectionURLParameter: a
  } = M(), { sourceLanguage: i, targetLanguage: l } = O(t), { targetPageExists: u } = ht(), { selectPageSectionByIndex: g, selectPageSectionByTitle: r } = oc(), c = sc(), d = () => C(void 0, null, function* () {
    n.value ? (o(), c(
      i.value,
      l.value,
      s.value,
      { sourcesection: a.value }
    )) : (yield r(a.value), e.push({ name: "sx-content-comparator", query: { force: !0 } }));
  }), m = ac(), p = p2(!1), { currentTranslation: h } = Ht(), w = () => {
    h.value ? h.value.isArticleTranslation ? p.value = !0 : m(h.value) : a.value ? d() : u.value ? e.push({ name: "sx-section-selector" }) : f();
  }, f = () => C(void 0, null, function* () {
    o(), n.value ? c(
      i.value,
      l.value,
      s.value
    ) : (g(0), Hp() || !t.getters["translator/userHasSectionTranslations"] ? e.push({ name: "sx-quick-tutorial", query: { force: !0 } }) : e.push({ name: "sx-sentence-selector", query: { force: !0 } }));
  });
  return {
    startNewTranslation: f,
    handlePrimaryButtonClick: w,
    translationConfirmationDialogOn: p
  };
};
const f2 = window.Vue.resolveDirective, $d = window.Vue.createElementVNode, Vd = window.Vue.withDirectives, _2 = window.Vue.unref, v2 = window.Vue.withCtx, S2 = window.Vue.openBlock, y2 = window.Vue.createBlock, C2 = {
  href: "",
  target: "_blank"
}, k2 = window.Codex.CdxDialog, x2 = {
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
    const n = e, o = t, s = (g) => o("update:modelValue", g), a = de(), i = {
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
    return (g, r) => {
      const c = f2("i18n");
      return S2(), y2(_2(k2), {
        class: "cx-unreviewed-translation-dialog",
        open: e.modelValue,
        title: g.$i18n("cx-unreviewed-translation-dialog-title"),
        "close-button-label": g.$i18n("cx-unreviewed-translation-dialog-close-button-aria-label"),
        "primary-action": i,
        "default-action": l,
        "onUpdate:open": r[0] || (r[0] = (d) => s(d)),
        onPrimary: u,
        onDefault: r[1] || (r[1] = (d) => s(!1))
      }, {
        default: v2(() => [
          Vd($d("p", null, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          Vd($d("a", C2, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title", "close-button-label"]);
    };
  }
};
const ne = window.Vue.unref, b2 = window.Vue.resolveDirective, Mo = window.Vue.createElementVNode, Ed = window.Vue.withDirectives, No = window.Vue.toDisplayString, Uo = window.Vue.openBlock, tr = window.Vue.createElementBlock, nr = window.Vue.createCommentVNode, Ie = window.Vue.createVNode, Xe = window.Vue.withCtx, or = window.Vue.createTextVNode, $2 = window.Vue.withModifiers, Ad = window.Vue.createBlock, V2 = window.Vue.Fragment, E2 = { class: "sx-translation-confirmer-body pb-4" }, A2 = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, D2 = ["textContent"], L2 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, T2 = ["href"], B2 = ["textContent"], sr = window.Vue.computed, P2 = window.Vue.inject, Dd = window.Vue.ref, F2 = window.Vue.watchEffect, M2 = window.Vuex.useStore, ar = window.Codex.CdxButton, N2 = window.Codex.CdxIcon, U2 = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = me(), o = M2();
    P2("colors");
    const { sectionSuggestion: s } = Be(), { targetLanguageAutonym: a } = O(o), { sectionURLParameter: i } = M(), {
      startNewTranslation: l,
      handlePrimaryButtonClick: u,
      translationConfirmationDialogOn: g
    } = w2(), r = Dd(!1), c = Dd(null), d = () => C(this, null, function* () {
      const F = yield je.checkUnreviewedTranslations();
      F !== !0 && (r.value = !0, c.value = F.targetUrl);
    }), m = () => C(this, null, function* () {
      yield d(), !r.value && l();
    }), p = () => C(this, null, function* () {
      yield d(), !r.value && u();
    }), h = t;
    F2(() => {
      g.value && (h("open-translation-confirmation-dialog"), g.value = !1);
    });
    const {
      actionInformationMessageArgs: w,
      getActionButtonLabel: f,
      isProgressiveButton: _,
      targetArticlePath: S
    } = R8(), y = de(), D = sr(
      () => y.i18n(f(!!i.value))
    ), { isDesktop: T } = Vs(), U = sr(
      () => y.i18n(...w.value)
    ), V = () => C(this, null, function* () {
      yield d(), !r.value && n.push({ name: "sx-section-selector" });
    }), L = sr(() => {
      var F, N;
      return i.value && !!((N = (F = s.value) == null ? void 0 : F.sourceSections) != null && N.length);
    }), { targetPageExists: H } = ht();
    return (F, N) => {
      const oe = b2("i18n");
      return Uo(), tr(V2, null, [
        Mo("section", E2, [
          ne(i) ? (Uo(), tr("section", A2, [
            Ed(Mo("h6", null, null, 512), [
              [oe, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            Mo("h5", {
              class: "ma-0",
              textContent: No(ne(i))
            }, null, 8, D2)
          ])) : ne(H) ? (Uo(), tr("section", L2, [
            Ie(ne(B), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: Xe(() => [
                Ed(Ie(ne(k), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [oe, [ne(a)], "cx-sx-existing-translation-status"]
                ]),
                Ie(ne(k), { shrink: "" }, {
                  default: Xe(() => [
                    Mo("a", {
                      href: ne(S),
                      target: "_blank"
                    }, [
                      Ie(ne(N2), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: ne(Kl)
                      }, null, 8, ["icon"])
                    ], 8, T2)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Ie(ne(B), { class: "ma-0" }, {
              default: Xe(() => [
                Ie(ne(k), null, {
                  default: Xe(() => [
                    Mo("span", {
                      textContent: No(U.value)
                    }, null, 8, B2)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : nr("", !0),
          Ie(ne(B), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: Xe(() => [
              L.value ? (Uo(), Ad(ne(k), {
                key: 0,
                shrink: "",
                class: "me-4"
              }, {
                default: Xe(() => [
                  Ie(ne(ar), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: $2(V, ["stop"])
                  }, {
                    default: Xe(() => [
                      or(No(F.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : nr("", !0),
              ne(H) && ne(T) ? (Uo(), Ad(ne(k), {
                key: 1,
                shrink: "",
                class: "me-4"
              }, {
                default: Xe(() => [
                  Ie(ne(ar), {
                    size: "large",
                    onClick: m
                  }, {
                    default: Xe(() => [
                      or(No(F.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : nr("", !0),
              Ie(ne(k), { shrink: "" }, {
                default: Xe(() => [
                  Ie(ne(ar), {
                    weight: "primary",
                    size: "large",
                    action: ne(_) ? "progressive" : "default",
                    onClick: p
                  }, {
                    default: Xe(() => [
                      or(No(D.value), 1)
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
        Ie(x2, {
          modelValue: r.value,
          "onUpdate:modelValue": N[0] || (N[0] = (Q) => r.value = Q),
          "target-url": c.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const Ld = window.Vue.unref, I2 = window.Vue.openBlock, z2 = window.Vue.createBlock, Td = window.Vue.computed, R2 = window.Vuex.useStore, qp = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedLanguageCodes: t, enabledTargetLanguages: n } = Es();
    R2();
    const {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: s
    } = M(), { currentLanguageTitleGroup: a } = ht(), i = Td(
      () => {
        var c;
        return ((c = a.value) == null ? void 0 : c.titles.map((d) => d.lang)) || [];
      }
    ), l = Td(
      () => n.value || t.value
    ), u = uC(), g = (c) => u(c, s.value), r = (c) => u(o.value, c);
    return (c, d) => (I2(), z2(Zl, {
      class: "sx-article-language-selector",
      "source-languages": i.value,
      "target-languages": l.value,
      "selected-source-language": Ld(o),
      "selected-target-language": Ld(s),
      "onUpdate:selectedSourceLanguage": g,
      "onUpdate:selectedTargetLanguage": r
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
};
const we = window.Vue.unref, ir = window.Vue.toDisplayString, Lt = window.Vue.createElementVNode, at = window.Vue.createVNode, zn = window.Vue.withCtx, O2 = window.Vue.resolveDirective, H2 = window.Vue.withDirectives, j2 = window.Vue.normalizeClass, q2 = window.Vue.openBlock, G2 = window.Vue.createBlock, W2 = ["textContent"], X2 = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, K2 = ["textContent"], Y2 = { class: "pe-3" }, Q2 = ["textContent"], J2 = window.Codex.CdxButton, Io = window.Codex.CdxIcon, Tt = window.Vue.computed, Z2 = window.Vuex.useStore, e4 = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = Z2(), n = de(), { currentSourcePage: o } = Pe(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: i
    } = M(), l = Tt(() => t.state.suggestions.favorites || []), u = Tt(
      () => l.value.some(
        (T) => i.value === T.title && s.value === T.sourceLanguage && a.value === T.targetLanguage
      )
    ), { markFavoriteSuggestion: g, removeFavoriteSuggestion: r } = ec(), { translationSizeMessageArgs: c } = zp(), d = () => g(
      i.value,
      s.value,
      a.value
    ), m = () => r(
      new no({
        title: i.value,
        sourceLanguage: s.value,
        targetLanguage: a.value
      })
    ), p = Tt(
      () => u.value ? Dp : Lp
    ), h = Tt(
      () => u.value ? m : d
    ), w = Tt(
      () => G.getPageUrl(s.value || "", i.value || "")
    ), f = Tt(() => {
      var T;
      return (T = o.value) == null ? void 0 : T.langLinksCount;
    }), _ = (T) => {
      const U = [
        { value: 1e9, suffix: "B" },
        // 1 billion
        { value: 1e6, suffix: "M" },
        // 1 million
        { value: 1e3, suffix: "K" }
        // 1 thousand
      ];
      for (let V = 0; V < U.length; V++)
        if (T >= U[V].value)
          return (T / U[V].value).toFixed(1).replace(/\.0$/, "") + U[V].suffix;
      return T.toString();
    }, S = Tt(() => {
      var U;
      const T = Object.values(((U = o.value) == null ? void 0 : U.pageviews) || {}).reduce(
        (V, L) => V + L,
        0
      );
      return _(T);
    }), y = Tt(() => c.value ? n.i18n(...c.value) : ""), D = Tt(() => c.value ? c.value[2] < 15 : !1);
    return (T, U) => {
      const V = O2("i18n");
      return q2(), G2(we(B), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: zn(() => [
          at(we(k), null, {
            default: zn(() => [
              at(we(B), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: zn(() => [
                  at(we(k), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: w.value,
                    target: "_blank"
                  }, {
                    default: zn(() => [
                      Lt("h5", {
                        class: "ma-0 me-1",
                        textContent: ir(we(i))
                      }, null, 8, W2),
                      at(we(Io), {
                        size: "x-small",
                        icon: we(Kl)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  at(we(k), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: zn(() => [
                      at(we(J2), {
                        class: "px-0",
                        weight: "quiet",
                        action: u.value ? "progressive" : "default",
                        "aria-label": T.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: h.value
                      }, {
                        default: zn(() => [
                          at(we(Io), { icon: p.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Lt("div", X2, [
                Lt("div", null, [
                  Lt("span", null, [
                    at(we(Io), {
                      icon: we(YC),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    Lt("span", {
                      class: "pe-3",
                      textContent: ir(f.value)
                    }, null, 8, K2)
                  ]),
                  Lt("span", null, [
                    at(we(Io), {
                      icon: we(qC),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    H2(Lt("span", Y2, null, 512), [
                      [V, [S.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                Lt("span", {
                  class: j2(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": D.value
                  }])
                }, [
                  at(we(Io), {
                    icon: we(WC),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  Lt("span", {
                    textContent: ir(y.value)
                  }, null, 8, Q2)
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
const t4 = window.Vue.resolveDirective, vn = window.Vue.createElementVNode, da = window.Vue.withDirectives, n4 = window.Vue.toDisplayString, o4 = window.Vue.createTextVNode, rr = window.Vue.unref, lr = window.Vue.withCtx, cr = window.Vue.openBlock, ur = window.Vue.createBlock;
window.Vue.createCommentVNode;
const s4 = { class: "pa-4" }, a4 = { class: "flex pt-2" }, i4 = window.Codex.CdxButton, r4 = window.Vue.ref, l4 = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = ac(), a = r4(!1), { currentTranslation: i } = Ht(), l = () => C(this, null, function* () {
      a.value = !0;
      let u = !1;
      try {
        u = yield je.splitTranslation(
          i.value.translationId
        );
      } catch (g) {
        mw.log.error(
          "[CX] Error while splitting the translation into section translations",
          g
        );
      }
      a.value = !1, u && (s(i.value), o());
    });
    return (u, g) => {
      const r = t4("i18n");
      return cr(), ur(rr(qe), {
        value: e.modelValue,
        persistent: a.value,
        class: "sx-confirm-translation-start-dialog",
        "overlay-opacity": 0.7,
        "overlay-color": u.$mwui.colors.gray700,
        "min-height": "unset",
        title: u.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: lr(() => [
          vn("div", a4, [
            a.value ? (cr(), ur(rr(tt), { key: 1 })) : (cr(), ur(rr(i4), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: l
            }, {
              default: lr(() => [
                o4(n4(u.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: lr(() => [
          vn("div", s4, [
            da(vn("p", null, null, 512), [
              [r, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            da(vn("p", null, null, 512), [
              [r, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            vn("p", null, [
              da(vn("strong", null, null, 512), [
                [r, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            da(vn("p", null, null, 512), [
              [r, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "overlay-color", "title"]);
    };
  }
};
const Bd = window.Vue.resolveDirective, ga = window.Vue.createElementVNode, Pd = window.Vue.withDirectives, en = window.Vue.unref, ma = window.Vue.withCtx, Bt = window.Vue.createVNode, dr = window.Vue.openBlock, Fd = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const c4 = window.Vue.createBlock, u4 = { class: "sx-translation-confirmer" }, d4 = { class: "mb-0" }, g4 = { class: "sx-translation-confirmer__article-image flex justify-center" }, m4 = ["src"], p4 = { class: "ma-3" }, h4 = window.Vue.computed, w4 = window.Vue.ref, f4 = window.Vuex.useStore, _4 = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = f4(), { currentSourcePage: n } = Pe(), { previousRoute: o } = O(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: i,
      sectionURLParameter: l,
      clearURLParameters: u
    } = M(), g = h4(
      () => {
        var w, f;
        return (f = (w = n.value) == null ? void 0 : w.image) == null ? void 0 : f.source;
      }
    ), { fetchTranslationsByStatus: r } = Ja(), c = Rp(), d = Gl();
    r("draft"), l.value && d(
      s.value,
      a.value,
      i.value
    ), c(s.value, i.value), tc(), t.dispatch("suggestions/fetchAppendixSectionTitles", a.value);
    const m = me(), p = () => {
      u(), m.push({ name: o.value });
    }, h = w4(!1);
    return (w, f) => {
      const _ = Bd("i18n"), S = Bd("i18n-html");
      return dr(), Fd("section", u4, [
        Bt(en(B), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: ma(() => [
            Bt(en(k), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: ma(() => [
                Pd(ga("h5", d4, null, 512), [
                  [_, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            Bt(en(k), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: ma(() => [
                Bt(en(Le), {
                  class: "pa-0",
                  type: "icon",
                  icon: en(ao),
                  "icon-size": 20,
                  onClick: p
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        ga("div", g4, [
          g.value ? (dr(), Fd("img", {
            key: 0,
            src: g.value
          }, null, 8, m4)) : (dr(), c4(en(be), {
            key: 1,
            size: "120",
            icon: en(Ll),
            "icon-color": w.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        Bt(e4),
        Bt(qp),
        Bt(U2, {
          onOpenTranslationConfirmationDialog: f[0] || (f[0] = (y) => h.value = !0)
        }),
        Bt(en(B), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: ma(() => [
            ga("p", p4, [
              Pd(ga("small", null, null, 512), [
                [S, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        Bt(l4, {
          modelValue: h.value,
          "onUpdate:modelValue": f[1] || (f[1] = (y) => h.value = y)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const v4 = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: _4
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, S4 = window.Vue.resolveComponent, y4 = window.Vue.createVNode, C4 = window.Vue.normalizeClass, k4 = window.Vue.openBlock, x4 = window.Vue.createElementBlock;
function b4(e, t, n, o, s, a) {
  const i = S4("sx-translation-confirmer");
  return k4(), x4("main", {
    class: C4(["sx-translation-confirmer-view", a.classes])
  }, [
    y4(i)
  ], 2);
}
const $4 = /* @__PURE__ */ P(v4, [["render", b4]]);
const V4 = window.Vue.toDisplayString, Md = window.Vue.unref, E4 = window.Vue.createVNode, A4 = window.Vue.createTextVNode, D4 = window.Vue.createElementVNode, L4 = window.Vue.openBlock, T4 = window.Vue.createElementBlock, B4 = { class: "sx-section-selector-view-article-item ma-0" }, P4 = ["href"], F4 = window.Codex.CdxIcon, M4 = {
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
    return (t, n) => (L4(), T4("li", B4, [
      D4("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        A4(V4(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        E4(Md(F4), {
          size: "x-small",
          icon: Md(Kl)
        }, null, 8, ["icon"])
      ], 8, P4)
    ]));
  }
};
const N4 = window.Vue.resolveDirective, pa = window.Vue.createElementVNode, gr = window.Vue.withDirectives, Sn = window.Vue.unref, U4 = window.Vue.toDisplayString, ha = window.Vue.withCtx, zo = window.Vue.createVNode, I4 = window.Vue.openBlock, z4 = window.Vue.createElementBlock, R4 = { class: "sx-section-selector__header pa-4" }, O4 = { class: "sx-section-selector__header-text ma-0" }, H4 = ["textContent"], j4 = { class: "pt-0 ma-0" }, q4 = { class: "ma-0" }, G4 = window.Codex.CdxButton, W4 = window.Codex.CdxIcon, X4 = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = Be();
    return (n, o) => {
      const s = N4("i18n");
      return I4(), z4("div", R4, [
        zo(Sn(B), { class: "ma-0 pb-3" }, {
          default: ha(() => [
            zo(Sn(k), null, {
              default: ha(() => {
                var a;
                return [
                  gr(pa("h6", O4, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  pa("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: U4((a = Sn(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, H4)
                ];
              }),
              _: 1
            }),
            zo(Sn(k), {
              shrink: "",
              class: "justify-end"
            }, {
              default: ha(() => [
                zo(Sn(G4), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: ha(() => [
                    zo(Sn(W4), { icon: Sn(go) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        gr(pa("h4", j4, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        gr(pa("p", q4, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, K4 = window.Vue.renderList, Y4 = window.Vue.Fragment, mr = window.Vue.openBlock, Nd = window.Vue.createElementBlock, Q4 = window.Vue.renderSlot, wa = window.Vue.unref, Ud = window.Vue.createVNode, Id = window.Vue.withCtx, J4 = window.Vue.createBlock, Z4 = { class: "sx-section-selector__sections-list ma-0 pa-0" }, e$ = window.Codex.CdxButton, t$ = window.Codex.CdxIcon, Gp = {
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
    return (t, n) => (mr(), Nd("ul", Z4, [
      (mr(!0), Nd(Y4, null, K4(e.sections, (o) => (mr(), J4(wa(B), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: Id(() => [
          Ud(wa(e$), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: Id(() => [
              Q4(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              Ud(wa(t$), { icon: wa(Ts) }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, n$ = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const o$ = window.Vue.resolveDirective, fa = window.Vue.createElementVNode, pr = window.Vue.withDirectives, Ke = window.Vue.unref, zd = window.Vue.toDisplayString, Rn = window.Vue.withCtx, hr = window.Vue.openBlock, Rd = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Ro = window.Vue.createVNode, s$ = window.Vue.createTextVNode, a$ = window.Vue.createElementBlock, i$ = { class: "sx-section-selector__missing-sections py-2" }, r$ = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, l$ = ["lang", "dir", "textContent"], Od = window.Vue.computed, c$ = window.Codex.CdxButton, u$ = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = Be(), n = Od(
      () => {
        var s;
        return q.getAutonym((s = t.value) == null ? void 0 : s.targetLanguage);
      }
    ), o = Od(
      () => {
        var s;
        return Object.keys(((s = t.value) == null ? void 0 : s.missingSections) || {}).length === 0;
      }
    );
    return (s, a) => {
      const i = o$("i18n");
      return hr(), a$("section", i$, [
        pr(fa("h4", r$, null, 512), [
          [i, [
            n.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        o.value ? (hr(), Rd(Ke(B), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: Rn(() => [
            Ro(Ke(k), {
              class: "py-6 justify-center",
              innerHTML: Ke(n$)
            }, null, 8, ["innerHTML"]),
            Ro(Ke(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: Rn(() => [
                pr(fa("h6", null, null, 512), [
                  [i, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            Ro(Ke(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: Rn(() => [
                pr(fa("p", null, null, 512), [
                  [i, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            Ro(Ke(k), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: Rn(() => [
                Ro(Ke(c$), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: a[1] || (a[1] = (l) => s.$emit("close"))
                }, {
                  default: Rn(() => [
                    s$(zd(s.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (hr(), Rd(Gp, {
          key: 0,
          sections: Ke(t).orderedMissingSections,
          onSelectSection: a[0] || (a[0] = (l) => s.$emit("select-section", l))
        }, {
          default: Rn(({ sourceSection: l }) => {
            var u, g;
            return [
              fa("h5", {
                class: "ma-0",
                lang: (u = Ke(t)) == null ? void 0 : u.sourceLanguage,
                dir: Ke(q.getDir)((g = Ke(t)) == null ? void 0 : g.sourceLanguage),
                textContent: zd(l)
              }, null, 8, l$)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const d$ = window.Vue.computed, g$ = {
  name: "SxSectionSelectorSectionListPresent",
  components: {
    SxSectionSelectorSectionList: Gp
  },
  emits: ["select-section"],
  setup() {
    const { sectionSuggestion: e } = Be(), t = d$(
      () => {
        var n;
        return q.getAutonym((n = e.value) == null ? void 0 : n.targetLanguage);
      }
    );
    return {
      mwIconArrowForward: Al,
      getAutonym: q.getAutonym,
      getDir: q.getDir,
      suggestion: e,
      targetLanguageAutonym: t
    };
  }
}, m$ = window.Vue.resolveDirective, _a = window.Vue.createElementVNode, p$ = window.Vue.withDirectives, Hd = window.Vue.toDisplayString, h$ = window.Vue.resolveComponent, w$ = window.Vue.withCtx, f$ = window.Vue.createVNode, _$ = window.Vue.openBlock, v$ = window.Vue.createElementBlock, S$ = { class: "sx-section-selector__present-sections py-2" }, y$ = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, C$ = { class: "sx-section-selector__present-section-button-content" }, k$ = ["lang", "dir", "textContent"], x$ = ["lang", "dir", "textContent"];
function b$(e, t, n, o, s, a) {
  var u;
  const i = h$("sx-section-selector-section-list"), l = m$("i18n");
  return _$(), v$("section", S$, [
    p$(_a("h4", y$, null, 512), [
      [l, [
        o.targetLanguageAutonym
      ], "cx-sx-section-selector-present-sections-title"]
    ]),
    f$(i, {
      sections: ((u = o.suggestion) == null ? void 0 : u.orderedPresentSections) || [],
      onSelectSection: t[0] || (t[0] = (g) => e.$emit("select-section", g))
    }, {
      default: w$(({ sourceSection: g, targetSection: r }) => {
        var c, d, m, p;
        return [
          _a("div", C$, [
            _a("h5", {
              class: "sx-section-selector__present-section-button-source",
              lang: (c = o.suggestion) == null ? void 0 : c.sourceLanguage,
              dir: o.getDir((d = o.suggestion) == null ? void 0 : d.sourceLanguage),
              textContent: Hd(g)
            }, null, 8, k$),
            _a("h6", {
              class: "sx-section-selector__present-section-button-target",
              lang: (m = o.suggestion) == null ? void 0 : m.targetLanguage,
              dir: o.getDir((p = o.suggestion) == null ? void 0 : p.targetLanguage),
              textContent: Hd(r)
            }, null, 8, x$)
          ])
        ];
      }),
      _: 1
    }, 8, ["sections"])
  ]);
}
const $$ = /* @__PURE__ */ P(g$, [["render", b$]]);
const wr = window.Vue.computed, V$ = window.Vuex.useStore, E$ = {
  name: "SxSectionSelector",
  components: {
    SxSectionSelectorSectionListPresent: $$,
    SxSectionSelectorSectionListMissing: u$,
    SxSectionSelectorHeader: X4,
    SxSectionSelectorViewArticleItem: M4,
    MwRow: B,
    MwCol: k,
    MwIcon: be,
    SxArticleLanguageSelector: qp
  },
  setup() {
    const e = V$(), { sectionSuggestion: t } = Be(), {
      sourceLanguage: n,
      targetLanguage: o,
      sourceLanguageAutonym: s,
      targetLanguageAutonym: a
    } = O(e), i = wr(
      () => {
        var _;
        return G.getPageUrl(n.value, (_ = t.value) == null ? void 0 : _.sourceTitle);
      }
    ), l = wr(
      () => {
        var _;
        return G.getPageUrl(o.value, (_ = t.value) == null ? void 0 : _.targetTitle);
      }
    ), u = wr(() => [
      { path: i.value, autonym: s.value },
      { path: l.value, autonym: a.value }
    ]), g = me(), { clearURLParameters: r, setSectionURLParam: c } = M(), d = () => {
      r(), g.push({ name: "dashboard" });
    }, m = ac(), { selectPageSectionByTitle: p } = oc(), { isDesktop: h } = Vs(), w = sc();
    return {
      goToDashboard: d,
      mwIconRobot: ef,
      mwIconLabFlask: Zw,
      selectSection: (_) => {
        if (h.value) {
          w(
            n.value,
            o.value,
            t.value.sourceTitle,
            { sourcesection: _ }
          );
          return;
        }
        const S = e.getters["translator/getDraftTranslation"](
          t.value.sourceTitle,
          _,
          n.value,
          o.value
        );
        S ? m(S) : (p(_), c(_), g.push({ name: "sx-content-comparator" }));
      },
      suggestion: t,
      targetLanguageAutonym: a,
      viewArticleItems: u
    };
  }
}, tn = window.Vue.resolveComponent, Pt = window.Vue.createVNode, A$ = window.Vue.resolveDirective, it = window.Vue.createElementVNode, Oo = window.Vue.withDirectives, D$ = window.Vue.renderList, L$ = window.Vue.Fragment, fr = window.Vue.openBlock, jd = window.Vue.createElementBlock, T$ = window.Vue.createBlock, qd = window.Vue.toDisplayString, Gd = window.Vue.createTextVNode, _r = window.Vue.withCtx, B$ = { class: "sx-section-selector" }, P$ = { class: "sx-section-selector__body" }, F$ = { class: "py-2" }, M$ = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, N$ = { class: "ma-0 pa-0" }, U$ = { class: "sx-section-selector__additional-consideration-title" }, I$ = { href: "#" }, z$ = { class: "sx-section-selector__additional-consideration-title" }, R$ = { href: "#" };
function O$(e, t, n, o, s, a) {
  const i = tn("sx-section-selector-header"), l = tn("sx-article-language-selector"), u = tn("sx-section-selector-section-list-missing"), g = tn("sx-section-selector-section-list-present"), r = tn("sx-section-selector-view-article-item"), c = tn("mw-icon"), d = tn("mw-col"), m = tn("mw-row"), p = A$("i18n");
  return fr(), jd("section", B$, [
    Pt(i, { onClose: o.goToDashboard }, null, 8, ["onClose"]),
    it("section", P$, [
      Pt(l),
      Pt(u, {
        onSelectSection: o.selectSection,
        onClose: o.goToDashboard
      }, null, 8, ["onSelectSection", "onClose"]),
      Pt(g, { onSelectSection: o.selectSection }, null, 8, ["onSelectSection"]),
      it("section", F$, [
        Oo(it("h4", M$, null, 512), [
          [p, [
            o.targetLanguageAutonym
          ], "cx-sx-section-selector-more-details-title"]
        ]),
        it("ul", N$, [
          (fr(!0), jd(L$, null, D$(o.viewArticleItems, (h, w) => (fr(), T$(r, {
            key: `view-article-item-${w}`,
            path: h.path,
            autonym: h.autonym
          }, null, 8, ["path", "autonym"]))), 128))
        ])
      ]),
      Pt(m, { class: "sx-section-selector__additional-considerations ma-0" }, {
        default: _r(() => [
          Pt(d, {
            cols: "12",
            tablet: "6",
            class: "px-4 pt-5 pb-4"
          }, {
            default: _r(() => [
              it("h6", U$, [
                Pt(c, {
                  icon: o.mwIconRobot,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                Gd(" " + qd(e.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
              ]),
              Oo(it("p", null, null, 512), [
                [p, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
              ]),
              Oo(it("a", I$, null, 512), [
                [p, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
              ])
            ]),
            _: 1
          }),
          Pt(d, {
            cols: "12",
            tablet: "6",
            class: "px-4 py-5"
          }, {
            default: _r(() => [
              it("h6", z$, [
                Pt(c, {
                  icon: o.mwIconLabFlask,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                Gd(" " + qd(e.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
              ]),
              Oo(it("p", null, null, 512), [
                [p, void 0, "cx-sx-section-selector-unsupported-sections-description"]
              ]),
              Oo(it("a", R$, null, 512), [
                [p, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ])
  ]);
}
const H$ = /* @__PURE__ */ P(E$, [["render", O$]]);
const j$ = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: H$
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, q$ = window.Vue.resolveComponent, G$ = window.Vue.createVNode, W$ = window.Vue.normalizeClass, X$ = window.Vue.openBlock, K$ = window.Vue.createElementBlock;
function Y$(e, t, n, o, s, a) {
  const i = q$("sx-section-selector");
  return X$(), K$("main", {
    class: W$(["sx-section-selector-view", a.classes])
  }, [
    G$(i)
  ], 2);
}
const Q$ = /* @__PURE__ */ P(j$, [["render", Y$]]), J$ = window.Vue.computed, Z$ = window.Vuex.useStore, e3 = (e) => {
  const { sourceLanguageAutonym: t, targetLanguageAutonym: n } = O(
    Z$()
  ), o = de();
  return J$(() => {
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
const t3 = window.Vue.watch, n3 = {
  name: "SxContentComparatorSourceVsTargetSelector",
  components: { MwButtonGroup: vs },
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
    const n = (s) => t("update:selection", s), o = e3(e);
    return t3(
      () => e.isMappedSection,
      () => {
        o.value.map((s) => s.value).includes(e.selection) || n(o.value[0].value);
      }
    ), {
      listSelector: o,
      updateSelection: n
    };
  }
}, o3 = window.Vue.resolveComponent, s3 = window.Vue.createVNode, a3 = window.Vue.openBlock, i3 = window.Vue.createElementBlock, r3 = { class: "sx-content-comparator__source-target-selector" };
function l3(e, t, n, o, s, a) {
  const i = o3("mw-button-group");
  return a3(), i3("div", r3, [
    s3(i, {
      items: o.listSelector,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const c3 = /* @__PURE__ */ P(n3, [["render", l3]]), yn = window.Vue.computed, u3 = window.Vue.ref, ic = () => {
  const e = u3([]), { currentTargetPage: t } = Pe(), { sectionSuggestion: n } = Be(), { sectionURLParameter: o } = M(), s = yn(
    () => n.value.missingSections[o.value] || n.value.presentSections[o.value] || ""
  ), a = yn(
    () => {
      var d;
      return (((d = i.value) == null ? void 0 : d.title) || "").replace(/ /g, "_");
    }
  ), i = yn(
    () => {
      var d;
      return (d = t.value) == null ? void 0 : d.getSectionByTitle(s.value);
    }
  ), { sourceSection: l } = K(), u = yn(() => {
    var d;
    return (d = l.value) == null ? void 0 : d.html;
  }), g = yn(() => {
    var d;
    return (d = i.value) == null ? void 0 : d.html;
  }), r = yn(
    () => {
      var d;
      return (d = n.value) == null ? void 0 : d.missingSections.hasOwnProperty(o.value);
    }
  ), c = yn(
    () => !r.value && !e.value.includes(s.value)
  );
  return {
    activeSectionTargetTitle: s,
    discardedSections: e,
    isCurrentSectionMapped: c,
    sourceSectionContent: u,
    targetSectionAnchor: a,
    targetSectionContent: g
  };
};
const Wd = window.Vue.ref, vr = window.Vue.computed, d3 = window.Vue.onMounted, g3 = {
  name: "SxContentComparatorContentHeader",
  components: {
    SxContentComparatorSourceVsTargetSelector: c3,
    MwRow: B,
    MwCol: k,
    MwButton: Le
  },
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
  emits: ["update:sourceVsTargetSelection", "translation-button-clicked"],
  setup(e, t) {
    const n = Wd(!1), { sectionSuggestion: o } = Be(), { sectionURLParameter: s } = M(), a = vr(
      () => (s.value || "").replace(/ /g, "_")
    ), i = (d) => t.emit("update:sourceVsTargetSelection", d), { activeSectionTargetTitle: l, targetSectionAnchor: u } = ic(), g = vr(() => {
      switch (e.sourceVsTargetSelection) {
        case "source_section":
          return {
            title: s.value,
            path: `${G.getPageUrl(
              o.value.sourceLanguage,
              o.value.sourceTitle
            )}#${a.value}`,
            lang: o.value.sourceLanguage,
            dir: q.getDir(o.value.sourceLanguage)
          };
        case "target_article":
          return {
            title: o.value.targetTitle,
            path: r.value,
            lang: o.value.targetLanguage,
            dir: q.getDir(o.value.targetLanguage)
          };
        default:
          return {
            title: l.value,
            path: `${r.value}#${u.value}`
          };
      }
    }), r = vr(
      () => G.getPageUrl(
        o.value.targetLanguage,
        o.value.targetTitle
      )
    ), c = Wd(null);
    return d3(() => {
      new IntersectionObserver(
        ([m]) => {
          n.value = m.intersectionRect.height < m.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(c.value.$el);
    }), {
      activeContent: g,
      contentHeader: c,
      isSticky: n,
      mwIconLinkExternal: Vm,
      mwIconEdit: Ga,
      updateSelection: i
    };
  }
}, va = window.Vue.resolveComponent, Sa = window.Vue.createVNode, m3 = window.Vue.toDisplayString, p3 = window.Vue.createElementVNode, ya = window.Vue.withCtx, Sr = window.Vue.openBlock, yr = window.Vue.createBlock;
window.Vue.createCommentVNode;
const h3 = window.Vue.normalizeClass, w3 = ["lang", "dir", "textContent"];
function f3(e, t, n, o, s, a) {
  const i = va("sx-content-comparator-source-vs-target-selector"), l = va("mw-col"), u = va("mw-button"), g = va("mw-row");
  return Sr(), yr(g, {
    ref: "contentHeader",
    class: h3(["sx-content-comparator__content-header ma-0 pt-1", { sticky: o.isSticky }]),
    direction: "column",
    align: "stretch",
    reverse: o.isSticky
  }, {
    default: ya(() => [
      Sa(i, {
        "is-mapped-section": n.isMappedSection,
        selection: n.sourceVsTargetSelection,
        "onUpdate:selection": o.updateSelection
      }, null, 8, ["is-mapped-section", "selection", "onUpdate:selection"]),
      Sa(g, {
        justify: "between",
        class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
      }, {
        default: ya(() => [
          Sa(l, null, {
            default: ya(() => [
              p3("h3", {
                lang: o.activeContent.lang,
                dir: o.activeContent.dir,
                class: "ma-0 pa-0",
                textContent: m3(o.activeContent.title)
              }, null, 8, w3)
            ]),
            _: 1
          }),
          Sa(l, { shrink: "" }, {
            default: ya(() => [
              o.isSticky ? (Sr(), yr(u, {
                key: 0,
                icon: o.mwIconEdit,
                progressive: "",
                label: e.$i18n(
                  "cx-sx-content-comparator-content-header-translate-button-label"
                ),
                onClick: t[0] || (t[0] = (r) => e.$emit("translation-button-clicked"))
              }, null, 8, ["icon", "label"])) : (Sr(), yr(u, {
                key: 1,
                class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                icon: o.mwIconLinkExternal,
                type: "icon",
                href: o.activeContent.path,
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
  }, 8, ["class", "reverse"]);
}
const _3 = /* @__PURE__ */ P(g3, [["render", f3]]), v3 = window.Vue.computed, S3 = {
  name: "SxContentComparatorHeaderNavigation",
  components: {
    MwCol: k,
    MwButton: Le
  },
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const { sectionURLParameter: t } = M(), n = v3(
      () => e.sectionSourceTitles.indexOf(t.value)
    ), { selectPageSectionByTitle: o } = oc();
    return {
      goToNextSection: () => {
        const i = (n.value + 1) % e.sectionSourceTitles.length, l = e.sectionSourceTitles[i];
        o(l);
      },
      goToPreviousSection: () => {
        const i = (n.value - 1 + e.sectionSourceTitles.length) % e.sectionSourceTitles.length, l = e.sectionSourceTitles[i];
        o(l);
      },
      mwIconPrevious: Yw,
      mwIconArrowForward: Al
    };
  }
}, Xd = window.Vue.resolveComponent, Kd = window.Vue.createVNode, y3 = window.Vue.withCtx, C3 = window.Vue.openBlock, k3 = window.Vue.createBlock;
function x3(e, t, n, o, s, a) {
  const i = Xd("mw-button"), l = Xd("mw-col");
  return C3(), k3(l, {
    class: "justify-end",
    align: "center"
  }, {
    default: y3(() => [
      Kd(i, {
        class: "pa-0 pe-1",
        type: "icon",
        icon: o.mwIconPrevious,
        onClick: o.goToPreviousSection
      }, null, 8, ["icon", "onClick"]),
      Kd(i, {
        class: "pa-0 ps-1",
        type: "icon",
        icon: o.mwIconArrowForward,
        onClick: o.goToNextSection
      }, null, 8, ["icon", "onClick"])
    ]),
    _: 1
  });
}
const b3 = /* @__PURE__ */ P(S3, [["render", x3]]);
const $3 = {
  name: "SxContentComparatorHeaderMappedSection",
  components: {
    MwRow: B,
    MwCol: k,
    MwButton: Le
  },
  props: {
    suggestion: {
      type: Ln,
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
  data: () => ({
    mwIconTrash: xm,
    mwIconUndo: of
  }),
  computed: {
    isDiscardedSection() {
      return this.discardedSections.includes(this.targetSectionTitle);
    },
    mappedSectionHeaderTitle() {
      return this.$i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        q.getAutonym(this.suggestion.targetLanguage)
      );
    }
  },
  methods: {
    discardMapping() {
      this.isDiscardedSection || this.$emit("update:discardedSections", [
        ...this.discardedSections,
        this.targetSectionTitle
      ]);
    },
    undoDiscard() {
      this.isDiscardedSection && this.$emit(
        "update:discardedSections",
        this.discardedSections.filter(
          (e) => e !== this.targetSectionTitle
        )
      );
    }
  }
}, Yd = window.Vue.toDisplayString, V3 = window.Vue.resolveDirective, Cr = window.Vue.withDirectives, On = window.Vue.openBlock, Ca = window.Vue.createElementBlock, E3 = window.Vue.createCommentVNode, A3 = window.Vue.createTextVNode, Qd = window.Vue.createElementVNode, D3 = window.Vue.normalizeClass, kr = window.Vue.resolveComponent, xr = window.Vue.withCtx, br = window.Vue.createVNode, Jd = window.Vue.createBlock, L3 = { class: "sx-content-comparator-header__mapped-section" }, T3 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, B3 = { key: 0 }, P3 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, F3 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
};
function M3(e, t, n, o, s, a) {
  const i = kr("mw-col"), l = kr("mw-button"), u = kr("mw-row"), g = V3("i18n");
  return On(), Ca("div", L3, [
    br(u, { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
      default: xr(() => [
        br(i, { grow: "" }, {
          default: xr(() => [
            Qd("h6", T3, [
              A3(Yd(a.mappedSectionHeaderTitle) + " ", 1),
              a.isDiscardedSection ? Cr((On(), Ca("span", B3, null, 512)), [
                [g, void 0, "cx-sx-content-comparator-discarded-section-label"]
              ]) : E3("", !0)
            ]),
            Qd("h6", {
              class: D3(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                "sx-content-comparator-header__mapped-section-target-title--discarded": a.isDiscardedSection
              }])
            }, Yd(n.targetSectionTitle), 3)
          ]),
          _: 1
        }),
        br(i, { shrink: "" }, {
          default: xr(() => [
            a.isDiscardedSection ? (On(), Jd(l, {
              key: 1,
              class: "pa-0",
              icon: e.mwIconUndo,
              type: "icon",
              onClick: a.undoDiscard
            }, null, 8, ["icon", "onClick"])) : (On(), Jd(l, {
              key: 0,
              class: "pa-0",
              icon: e.mwIconTrash,
              type: "icon",
              onClick: a.discardMapping
            }, null, 8, ["icon", "onClick"]))
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    a.isDiscardedSection ? Cr((On(), Ca("p", F3, null, 512)), [
      [g, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
    ]) : Cr((On(), Ca("p", P3, null, 512)), [
      [g, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
    ])
  ]);
}
const N3 = /* @__PURE__ */ P($3, [["render", M3]]);
const ka = window.Vue.computed, U3 = {
  name: "SxContentComparatorHeader",
  components: {
    SxContentComparatorHeaderMappedSection: N3,
    SxContentComparatorHeaderNavigation: b3,
    MwButton: Le,
    MwCol: k,
    MwRow: B,
    MwIcon: be
  },
  props: {
    discardedSections: {
      type: Array,
      required: !0
    }
  },
  emits: ["close", "translation-button-clicked", "update:discardedSections"],
  setup() {
    const { sectionURLParameter: e } = M(), { sourceSection: t } = K(), { sectionSuggestion: n } = Be(), o = ka(
      () => {
        var u;
        return (u = n.value) == null ? void 0 : u.missingSections.hasOwnProperty(e.value);
      }
    ), s = ka(
      () => {
        var u;
        return (u = n.value) == null ? void 0 : u.presentSections.hasOwnProperty(e.value);
      }
    ), { activeSectionTargetTitle: a } = ic(), i = ka(() => {
      var u;
      return (u = t.value) == null ? void 0 : u.html;
    }), l = ka(() => [
      ...Object.keys(n.value.missingSections),
      ...Object.keys(n.value.presentSections)
    ]);
    return {
      activeSectionTargetTitle: a,
      isCurrentSectionMissing: o,
      isCurrentSectionPresent: s,
      mwIconArrowPrevious: Qw,
      mwIconEdit: Ga,
      mwIconEye: tf,
      sectionSourceTitles: l,
      sourceSectionContent: i,
      sourceSectionTitle: e,
      suggestion: n,
      getDir: q.getDir
    };
  }
}, Hn = window.Vue.resolveComponent, Ft = window.Vue.createVNode, Zd = window.Vue.toDisplayString, us = window.Vue.createElementVNode, jn = window.Vue.withCtx, I3 = window.Vue.resolveDirective, eg = window.Vue.withDirectives, $r = window.Vue.openBlock, tg = window.Vue.createBlock, ng = window.Vue.createCommentVNode, z3 = window.Vue.createElementBlock, R3 = { class: "sx-content-comparator__header pa-4" }, O3 = ["lang", "dir"], H3 = ["lang", "dir"], j3 = /* @__PURE__ */ us("br", null, null, -1);
function q3(e, t, n, o, s, a) {
  const i = Hn("mw-button"), l = Hn("mw-col"), u = Hn("sx-content-comparator-header-navigation"), g = Hn("mw-row"), r = Hn("mw-icon"), c = Hn("sx-content-comparator-header-mapped-section"), d = I3("i18n");
  return $r(), z3("div", R3, [
    Ft(i, {
      class: "py-2 pa-0",
      icon: o.mwIconArrowPrevious,
      label: e.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
      type: "text",
      onClick: t[0] || (t[0] = (m) => e.$emit("close"))
    }, null, 8, ["icon", "label"]),
    Ft(g, { class: "my-1 py-2 mx-0" }, {
      default: jn(() => [
        Ft(l, { grow: "" }, {
          default: jn(() => [
            us("h4", {
              class: "pa-0 sx-content-comparator-header__article-title",
              lang: o.suggestion.sourceLanguage,
              dir: o.getDir(o.suggestion.sourceLanguage)
            }, Zd(o.suggestion.sourceTitle), 9, O3),
            us("h2", {
              class: "sx-content-comparator-header__section-title pa-0 ma-0",
              lang: o.suggestion.sourceLanguage,
              dir: o.getDir(o.suggestion.sourceLanguage)
            }, Zd(o.sourceSectionTitle), 9, H3)
          ]),
          _: 1
        }),
        Ft(u, {
          cols: "2",
          "section-source-titles": o.sectionSourceTitles
        }, null, 8, ["section-source-titles"]),
        Ft(l, {
          cols: "12",
          mobile: "12",
          tablet: "4",
          class: "py-2 mb-1"
        }, {
          default: jn(() => [
            Ft(i, {
              icon: o.mwIconEdit,
              progressive: "",
              label: e.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !o.sourceSectionContent,
              onClick: t[1] || (t[1] = (m) => e.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    o.isCurrentSectionMissing ? ($r(), tg(g, {
      key: 0,
      align: "start",
      class: "sx-content-comparator-header__review-contents mx-0"
    }, {
      default: jn(() => [
        Ft(l, {
          shrink: "",
          class: "pe-2"
        }, {
          default: jn(() => [
            Ft(r, { icon: o.mwIconEye }, null, 8, ["icon"])
          ]),
          _: 1
        }),
        Ft(l, { class: "ma-0" }, {
          default: jn(() => [
            eg(us("strong", null, null, 512), [
              [d, void 0, "cx-sx-content-comparator-review-contents-title"]
            ]),
            j3,
            eg(us("span", null, null, 512), [
              [d, void 0, "cx-sx-content-comparator-review-contents-rest"]
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : ng("", !0),
    o.isCurrentSectionPresent ? ($r(), tg(c, {
      key: 1,
      suggestion: o.suggestion,
      "target-section-title": o.activeSectionTargetTitle,
      "discarded-sections": n.discardedSections,
      "onUpdate:discardedSections": t[2] || (t[2] = (m) => e.$emit("update:discardedSections", m))
    }, null, 8, ["suggestion", "target-section-title", "discarded-sections"])) : ng("", !0)
  ]);
}
const G3 = /* @__PURE__ */ P(U3, [["render", q3]]);
const W3 = {
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
}, og = window.Vue.toDisplayString, X3 = window.Vue.createElementVNode, sg = window.Vue.openBlock, ag = window.Vue.createElementBlock, K3 = window.Vue.createCommentVNode, Y3 = { class: "sx-content-comparator__new-section-placeholder--present mt-4 py-4 px-7" }, Q3 = ["textContent"], J3 = ["textContent"];
function Z3(e, t, n, o, s, a) {
  return sg(), ag("section", Y3, [
    X3("h5", {
      textContent: og(n.placeholderTitle)
    }, null, 8, Q3),
    n.placeholderSubtitle ? (sg(), ag("p", {
      key: 0,
      textContent: og(n.placeholderSubtitle)
    }, null, 8, J3)) : K3("", !0)
  ]);
}
const Wp = /* @__PURE__ */ P(W3, [["render", Z3]]), eV = window.Vue.computed, tV = window.Vue.createApp, nV = window.Vuex.useStore, oV = () => {
  const e = nV(), { sectionSuggestion: t } = Be(), { currentTargetPage: n } = Pe(), o = de(), s = () => tV(
    Wp,
    {
      placeholderTitle: o.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    }
  ).mount(document.createElement("div")).$el, a = (l) => e.getters["suggestions/getFirstAppendixTitleBySectionSuggestion"](
    l
  ), i = (l) => {
    const u = l.getElementsByTagName("base");
    Array.from(u).forEach(
      (g) => g.parentNode.removeChild(g)
    );
  };
  return eV(() => {
    var r;
    const l = document.createElement("div");
    l.innerHTML = (r = n.value) == null ? void 0 : r.content, i(l);
    const u = s(), g = a(
      t.value
    );
    if (g) {
      const c = Array.from(
        l.querySelectorAll("h2")
      ).filter((d) => d.textContent.match(g));
      if (c && c.length) {
        const d = c[0].parentNode;
        d.parentNode.insertBefore(
          u,
          d
        );
      }
    } else
      l.appendChild(u);
    return l.innerHTML;
  });
};
const sV = window.Vue.ref, aV = window.Vue.computed, iV = window.Vue.watch, rV = window.Vuex.useStore, lV = {
  name: "SxContentComparator",
  components: {
    SxContentComparatorNewSectionPlaceholder: Wp,
    SxContentComparatorHeader: G3,
    SxContentComparatorContentHeader: _3,
    MwSpinner: tt
  },
  setup() {
    const e = rV(), t = me(), n = sV("source_section"), { logDashboardTranslationStartEvent: o } = Ql(), s = () => t.push({ name: "sx-section-selector" }), a = () => {
      o(), Hp() || !e.getters["translator/userHasSectionTranslations"] ? t.push({ name: "sx-quick-tutorial" }) : t.push({ name: "sx-sentence-selector" });
    }, {
      activeSectionTargetTitle: i,
      discardedSections: l,
      isCurrentSectionMapped: u,
      sourceSectionContent: g,
      targetSectionContent: r
    } = ic(), c = oV(), { sectionSuggestion: d } = Be(), { sourceLanguage: m, targetLanguage: p } = O(e), h = aV(() => d.value.targetTitle), w = nc();
    return iV(
      h,
      () => w(
        p.value,
        m.value,
        h.value
      ),
      { immediate: !0 }
    ), {
      getDir: q.getDir,
      activeSectionTargetTitle: i,
      discardedSections: l,
      goToSectionSelector: s,
      isCurrentSectionMapped: u,
      sourceSectionContent: g,
      sourceVsTargetSelection: n,
      targetPageContent: c,
      targetSectionContent: r,
      translateSection: a,
      sourceLanguage: m,
      targetLanguage: p
    };
  }
}, xa = window.Vue.resolveComponent, Vr = window.Vue.createVNode, qn = window.Vue.openBlock, ig = window.Vue.createBlock, rg = window.Vue.createCommentVNode, ba = window.Vue.createElementVNode, Er = window.Vue.Fragment, $a = window.Vue.createElementBlock, cV = { class: "sx-content-comparator" }, uV = { class: "sx-content-comparator__source-content" }, dV = ["lang", "dir", "innerHTML"], gV = ["lang", "dir", "innerHTML"], mV = ["innerHTML"];
function pV(e, t, n, o, s, a) {
  const i = xa("sx-content-comparator-header"), l = xa("sx-content-comparator-content-header"), u = xa("mw-spinner"), g = xa("sx-content-comparator-new-section-placeholder");
  return qn(), $a("section", cV, [
    Vr(i, {
      "discarded-sections": o.discardedSections,
      "onUpdate:discardedSections": t[0] || (t[0] = (r) => o.discardedSections = r),
      onTranslationButtonClicked: o.translateSection,
      onClose: o.goToSectionSelector
    }, null, 8, ["discarded-sections", "onTranslationButtonClicked", "onClose"]),
    Vr(l, {
      "source-vs-target-selection": o.sourceVsTargetSelection,
      "onUpdate:sourceVsTargetSelection": t[1] || (t[1] = (r) => o.sourceVsTargetSelection = r),
      "is-mapped-section": o.isCurrentSectionMapped,
      onTranslationButtonClicked: o.translateSection
    }, null, 8, ["source-vs-target-selection", "is-mapped-section", "onTranslationButtonClicked"]),
    ba("section", uV, [
      o.sourceVsTargetSelection === "source_section" ? (qn(), $a(Er, { key: 0 }, [
        o.sourceSectionContent ? rg("", !0) : (qn(), ig(u, { key: 0 })),
        ba("section", {
          lang: o.sourceLanguage,
          dir: o.getDir(o.sourceLanguage),
          class: "pt-2 px-4",
          innerHTML: o.sourceSectionContent
        }, null, 8, dV)
      ], 64)) : o.sourceVsTargetSelection === "target_article" ? (qn(), $a(Er, { key: 1 }, [
        o.targetPageContent ? rg("", !0) : (qn(), ig(u, { key: 0 })),
        ba("article", {
          lang: o.targetLanguage,
          dir: o.getDir(o.targetLanguage),
          class: "px-4",
          innerHTML: o.targetPageContent
        }, null, 8, gV)
      ], 64)) : (qn(), $a(Er, { key: 2 }, [
        ba("section", {
          class: "pa-4",
          innerHTML: o.targetSectionContent
        }, null, 8, mV),
        Vr(g, {
          "placeholder-title": e.$i18n("cx-sx-content-comparator-present-section-placeholder-title"),
          "placeholder-subtitle": e.$i18n(
            "cx-sx-content-comparator-present-section-placeholder-subtitle"
          )
        }, null, 8, ["placeholder-title", "placeholder-subtitle"])
      ], 64))
    ])
  ]);
}
const hV = /* @__PURE__ */ P(lV, [["render", pV]]);
const wV = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: hV
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, fV = window.Vue.resolveComponent, _V = window.Vue.createVNode, vV = window.Vue.normalizeClass, SV = window.Vue.openBlock, yV = window.Vue.createElementBlock;
function CV(e, t, n, o, s, a) {
  const i = fV("sx-content-comparator");
  return SV(), yV("main", {
    class: vV(["sx-content-comparator-view", a.classes])
  }, [
    _V(i)
  ], 2);
}
const kV = /* @__PURE__ */ P(wV, [["render", CV]]);
const xV = window.Vue.resolveDirective, Ho = window.Vue.createElementVNode, lg = window.Vue.withDirectives, Va = window.Vue.unref, Ar = window.Vue.createVNode, cg = window.Vue.toDisplayString, ug = window.Vue.createTextVNode, jo = window.Vue.withCtx, bV = window.Vue.openBlock, $V = window.Vue.createBlock, VV = { class: "mw-ui-dialog__header px-4 py-3" }, EV = { class: "mw-ui-dialog__header-title" }, AV = { class: "pa-4" }, DV = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, dg = window.Codex.CdxButton, LV = {
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
    return (i, l) => {
      const u = xV("i18n");
      return bV(), $V(Va(qe), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        "overlay-opacity": 0.7,
        "overlay-color": i.$mwui.colors.gray700
      }, {
        header: jo(() => [
          Ho("div", VV, [
            lg(Ho("span", EV, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: jo(() => [
          Ho("div", DV, [
            Ar(Va(dg), {
              weight: "quiet",
              onClick: s
            }, {
              default: jo(() => [
                ug(cg(i.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            Ar(Va(dg), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: jo(() => [
                ug(cg(i.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: jo(() => [
          Ar(Va(qa)),
          Ho("div", AV, [
            lg(Ho("span", null, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "overlay-color"]);
    };
  }
}, TV = window.Vuex.useStore, rc = () => {
  const e = TV(), { sourceSection: t } = K(), { getCurrentTitleByLanguage: n } = ht(), o = (l, u, g) => {
    if (l === 0) {
      t.value.proposedTitleTranslations[u] = g;
      return;
    }
    const r = t.value.getContentTranslationUnitById(l);
    r instanceof De ? r.blockTemplateProposedTranslations[u] = g : r instanceof cn && r.addProposedTranslation(u, g);
  }, s = (l, u) => C(void 0, null, function* () {
    const { sourceLanguage: g, targetLanguage: r } = e.state.application;
    if (!e.getters["mediawiki/isValidProviderForTranslation"](g, r, l))
      return "";
    try {
      const d = yield e.dispatch("application/getCXServerToken");
      return yield je.fetchSegmentTranslation(
        g,
        r,
        l,
        u,
        d
      );
    } catch (d) {
      return mw.log.error("Error while translating segment", d), "";
    }
  }), a = (l, u) => C(void 0, null, function* () {
    const { sourceLanguage: g, targetLanguage: r } = e.state.application;
    if (t.value.hasProposedTranslationByTranslationUnitId(
      l,
      u
    ))
      return;
    let c = t.value.getOriginalContentByTranslationUnitId(l);
    const d = t.value.getContentTranslationUnitById(l);
    let m;
    if (e.commit("application/addMtRequestsPending", l), m = yield s(u, c), !m) {
      e.commit("application/removeMtRequestsPending", l);
      return;
    }
    d instanceof De && (d.setBlockTemplateAdaptationInfoByHtml(
      u,
      m
    ), m = (yield lv(
      m,
      n(r, g),
      r
    )) || ""), o(
      l,
      u,
      m
    ), e.commit("application/removeMtRequestsPending", l);
  });
  return {
    translateTranslationUnitById: a,
    translateSelectedTranslationUnitForAllProviders: () => {
      const { sourceLanguage: l, targetLanguage: u } = e.state.application, g = e.getters["mediawiki/getSupportedMTProviders"](
        l,
        u
      ), { selectedTranslationUnitId: r } = t.value;
      g.forEach(
        (c) => a(r, c)
      );
    }
  };
}, BV = window.Vuex.useStore, PV = () => {
  const { sourceSection: e } = K(), t = BV(), { translateTranslationUnitById: n } = rc();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
const Dr = window.Vue.computed, FV = window.Vuex.useStore, MV = {
  name: "SxTranslationSelector",
  components: { MwCard: et, MwButton: Le, MwDialog: qe },
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, t) {
    const n = Y.EMPTY_TEXT_PROVIDER_KEY, o = Y.ORIGINAL_TEXT_PROVIDER_KEY, s = FV(), {
      sourceSection: a,
      isSectionTitleSelected: i,
      selectedContentTranslationUnit: l
    } = K(), { sourceLanguage: u, targetLanguage: g } = O(s), r = Dr(
      () => s.getters["mediawiki/getSupportedMTProviders"](
        u.value,
        g.value
      )
    ), c = Dr(() => {
      const f = [o, n];
      return r.value.filter(
        (_) => !f.includes(_)
      );
    }), d = Dr(
      () => i.value ? a.value.proposedTitleTranslations : l.value.proposedTranslations
    ), m = PV(), p = (f) => {
      m(f), w();
    }, h = Y.getMTProviderLabel, w = () => t.emit("update:active", !1);
    return {
      apiMtProviders: c,
      close: w,
      emptyTextProviderKey: n,
      getDir: q.getDir,
      getMTProviderLabel: h,
      mwIconClose: ao,
      originalTextProviderKey: o,
      proposedTranslations: d,
      selectProvider: p,
      sourceLanguage: u
    };
  }
}, NV = window.Vue.resolveDirective, Oe = window.Vue.createElementVNode, Ea = window.Vue.withDirectives, Lr = window.Vue.resolveComponent, Tr = window.Vue.createVNode, nn = window.Vue.withCtx, UV = window.Vue.renderList, IV = window.Vue.Fragment, Br = window.Vue.openBlock, zV = window.Vue.createElementBlock, RV = window.Vue.toDisplayString, gg = window.Vue.createBlock, OV = window.Vue.createCommentVNode, HV = { class: "mw-ui-dialog__header pa-4" }, jV = { class: "row ma-0 py-2" }, qV = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, GV = { class: "mb-0" }, WV = { class: "col shrink justify-center" }, XV = { class: "pb-2 mb-0" }, KV = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, YV = ["dir", "lang", "innerHTML"], QV = ["textContent"], JV = ["innerHTML"], ZV = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, e5 = /* @__PURE__ */ Oe("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1);
function t5(e, t, n, o, s, a) {
  const i = Lr("mw-button"), l = Lr("mw-card"), u = Lr("mw-dialog"), g = NV("i18n");
  return n.active ? (Br(), gg(u, {
    key: 0,
    class: "sx-sentence-selector__translation-options",
    fullscreen: ""
  }, {
    header: nn(() => [
      Oe("div", HV, [
        Oe("div", jV, [
          Oe("div", qV, [
            Ea(Oe("h4", GV, null, 512), [
              [g, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
            ])
          ]),
          Oe("div", WV, [
            Tr(i, {
              type: "icon",
              icon: o.mwIconClose,
              class: "pa-0",
              onClick: o.close
            }, null, 8, ["icon", "onClick"])
          ])
        ]),
        Ea(Oe("h6", XV, null, 512), [
          [g, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
        ])
      ])
    ]),
    default: nn(() => [
      Tr(l, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: t[0] || (t[0] = (r) => o.selectProvider(o.originalTextProviderKey))
      }, {
        header: nn(() => [
          Ea(Oe("h5", KV, null, 512), [
            [g, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
          ])
        ]),
        default: nn(() => [
          Oe("p", {
            dir: o.getDir(o.sourceLanguage),
            lang: o.sourceLanguage,
            innerHTML: o.proposedTranslations[o.originalTextProviderKey]
          }, null, 8, YV)
        ]),
        _: 1
      }),
      (Br(!0), zV(IV, null, UV(o.apiMtProviders, (r) => (Br(), gg(l, {
        key: r,
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: (c) => o.selectProvider(r)
      }, {
        header: nn(() => [
          Oe("h5", {
            class: "sx-sentence-selector__translation-options-card-title mb-4",
            textContent: RV(o.getMTProviderLabel(r))
          }, null, 8, QV)
        ]),
        default: nn(() => [
          Oe("p", {
            innerHTML: o.proposedTranslations[r]
          }, null, 8, JV)
        ]),
        _: 2
      }, 1032, ["onClick"]))), 128)),
      Tr(l, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: t[1] || (t[1] = (r) => o.selectProvider(o.emptyTextProviderKey))
      }, {
        header: nn(() => [
          Ea(Oe("h5", ZV, null, 512), [
            [g, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
          ])
        ]),
        default: nn(() => [
          e5
        ]),
        _: 1
      })
    ]),
    _: 1
  })) : OV("", !0);
}
const n5 = /* @__PURE__ */ P(MV, [["render", t5]]), o5 = window.Vuex.useStore, mo = () => {
  const { sourceSection: e } = K(), t = o5(), { translateTranslationUnitById: n } = rc(), { currentMTProvider: o } = O(t), s = (l) => C(void 0, null, function* () {
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
      const { selectedContentTranslationUnitIndex: l, contentTranslationUnits: u } = e.value, g = l - 1;
      let r = 0;
      return g > -1 && (r = u[g].id), s(r);
    },
    selectTranslationUnitById: s
  };
};
const s5 = window.Vue.toDisplayString, Pr = window.Vue.createElementVNode, Fr = window.Vue.unref, a5 = window.Vue.createVNode, i5 = window.Vue.normalizeClass, r5 = window.Vue.withCtx, l5 = window.Vue.openBlock, c5 = window.Vue.createBlock, u5 = ["href"], d5 = ["textContent"], g5 = ["innerHTML"], Gn = window.Vue.computed, m5 = window.Vuex.useStore, mg = "sx-sentence-selector__section-title", p5 = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const t = m5(), { sourceSection: n, isSectionTitleSelected: o } = K(), { currentSourcePage: s } = Pe(), { sourceLanguage: a } = O(t), i = Gn(() => {
      var p;
      return (p = s.value) == null ? void 0 : p.title;
    }), l = Gn(
      () => {
        var p;
        return ((p = n.value) == null ? void 0 : p.title) || i.value;
      }
    ), u = Gn(
      () => G.getPageUrl(a.value, i.value)
    ), g = Gn(
      () => {
        var p;
        return !!((p = n.value) != null && p.translatedTitle);
      }
    ), r = Gn(
      () => g.value ? "translated" : "selected"
    ), c = Gn(() => {
      const p = [mg];
      return o.value && p.push(`${mg}--${r.value}`), p;
    }), { selectTranslationUnitById: d } = mo(), m = () => d(0);
    return (p, h) => (l5(), c5(Fr(k), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: r5(() => [
        Pr("a", {
          href: u.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          Pr("strong", {
            textContent: s5(i.value)
          }, null, 8, d5),
          a5(Fr(be), {
            icon: Fr(Vm),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, u5),
        Pr("h2", {
          class: i5(["pa-0 ma-0", c.value]),
          onClick: m,
          innerHTML: l.value
        }, null, 10, g5)
      ]),
      _: 1
    }));
  }
};
const rt = window.Vue.unref, qo = window.Vue.createVNode, Aa = window.Vue.withCtx, pg = window.Vue.toDisplayString, hg = window.Vue.createTextVNode, h5 = window.Vue.openBlock, w5 = window.Vue.createBlock, f5 = window.Vue.computed, Mr = window.Codex.CdxButton, wg = window.Codex.CdxIcon, Xp = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = K(), s = f5(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, i) => (h5(), w5(rt(B), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: Aa(() => [
        qo(rt(Mr), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: rt(n),
          onClick: i[0] || (i[0] = (l) => a.$emit("select-previous-segment"))
        }, {
          default: Aa(() => [
            qo(rt(wg), {
              class: "me-1",
              icon: rt(Yl)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        qo(rt(Mr), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !rt(o),
          onClick: i[1] || (i[1] = (l) => a.$emit("apply-translation"))
        }, {
          default: Aa(() => [
            hg(pg(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        qo(rt(Mr), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: i[2] || (i[2] = (l) => a.$emit("skip-translation"))
        }, {
          default: Aa(() => [
            hg(pg(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            qo(rt(wg), {
              class: "ms-1",
              size: "small",
              icon: rt(Ts)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const Cn = window.Vue.unref, _5 = window.Vue.toDisplayString, Go = window.Vue.createVNode, Da = window.Vue.withCtx, v5 = window.Vue.openBlock, S5 = window.Vue.createBlock, Nr = window.Vue.computed, y5 = window.Vuex.useStore, C5 = window.Codex.CdxButton, k5 = window.Codex.CdxIcon, x5 = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = y5(), n = Nr(() => t.state.application.currentMTProvider), o = de(), s = Nr(() => ({
      [Y.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [Y.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = Nr(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        Y.getMTProviderLabel(n.value)
      )
    );
    return (i, l) => (v5(), S5(Cn(k), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: Da(() => [
        Go(Cn(B), { class: "ma-0 ps-5 pb-4" }, {
          default: Da(() => [
            Go(Cn(k), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: _5(a.value)
            }, null, 8, ["textContent"]),
            Go(Cn(k), {
              shrink: "",
              class: "pe-5"
            }, {
              default: Da(() => [
                Go(Cn(C5), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": i.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: l[0] || (l[0] = (u) => i.$emit("configure-options"))
                }, {
                  default: Da(() => [
                    Go(Cn(k5), {
                      class: "pa-0",
                      icon: Cn(Xl)
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
const Ye = window.Vue.unref, on = window.Vue.createVNode, b5 = window.Vue.resolveDirective, fg = window.Vue.createElementVNode, $5 = window.Vue.withDirectives, _g = window.Vue.toDisplayString, vg = window.Vue.createTextVNode, Wo = window.Vue.withCtx, V5 = window.Vue.openBlock, E5 = window.Vue.createElementBlock, A5 = { class: "mt-retry-body pb-5" }, D5 = { class: "retry-body__message" }, Sg = window.Codex.CdxButton, Ur = window.Codex.CdxIcon, L5 = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = b5("i18n");
      return V5(), E5("div", A5, [
        fg("div", D5, [
          on(Ye(Ur), {
            class: "me-2",
            icon: Ye(Ep)
          }, null, 8, ["icon"]),
          $5(fg("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        on(Ye(B), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: Wo(() => [
            on(Ye(k), { cols: "6" }, {
              default: Wo(() => [
                on(Ye(Sg), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: Wo(() => [
                    on(Ye(Ur), {
                      class: "me-1",
                      icon: Ye(Bp)
                    }, null, 8, ["icon"]),
                    vg(" " + _g(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            on(Ye(k), { cols: "6" }, {
              default: Wo(() => [
                on(Ye(Sg), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: Wo(() => [
                    on(Ye(Ur), {
                      class: "me-1",
                      icon: Ye(QC)
                    }, null, 8, ["icon"]),
                    vg(" " + _g(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const Wn = window.Vue.createVNode, Ve = window.Vue.unref, Xo = window.Vue.openBlock, T5 = window.Vue.createElementBlock, B5 = window.Vue.createCommentVNode, La = window.Vue.createBlock, P5 = window.Vue.normalizeClass, F5 = window.Vue.normalizeStyle, Ko = window.Vue.withCtx, M5 = window.Vue.toDisplayString, N5 = window.Vue.createTextVNode, U5 = window.Vue.normalizeProps, I5 = window.Vue.guardReactiveProps, z5 = ["lang", "dir", "innerHTML"], Ir = window.Vue.ref, R5 = window.Vue.onMounted, O5 = window.Vue.onBeforeUnmount, zr = window.Vue.computed, H5 = window.Vue.nextTick, j5 = window.Vuex.useStore, q5 = window.Codex.CdxButton, G5 = window.Codex.CdxIcon, W5 = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = Ir(0), n = Ir(null), o = Ir(null), s = j5(), { currentMTProvider: a, targetLanguage: i } = O(s), { sourceSection: l, currentProposedTranslation: u } = K(), g = zr(
      () => {
        var p, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (p = l.value) == null ? void 0 : p.selectedTranslationUnitId
        );
      }
    ), r = zr(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), c = zr(
      () => !!u.value || a.value === Y.EMPTY_TEXT_PROVIDER_KEY
    ), d = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    R5(() => C(this, null, function* () {
      yield H5(), d(), m.observe(n.value.$el), m.observe(o.value.$el);
    })), O5(() => {
      m.unobserve(n.value.$el), m.unobserve(o.value.$el);
    });
    const m = new ResizeObserver(() => d());
    return (p, h) => (Xo(), La(Ve(et), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: Ko(() => [
        Wn(Ve(B), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: Ko(() => [
            Wn(x5, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (w) => p.$emit("configure-options"))
            }, null, 512),
            Wn(Ve(k), {
              class: P5(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !c.value && g.value
              }]),
              style: F5(c.value ? r.value : null)
            }, {
              default: Ko(() => [
                c.value ? (Xo(), T5("section", {
                  key: 0,
                  lang: Ve(i),
                  dir: Ve(q.getDir)(Ve(i)),
                  innerHTML: Ve(u)
                }, null, 8, z5)) : g.value ? (Xo(), La(Ve(tt), { key: 1 })) : (Xo(), La(L5, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (w) => p.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (w) => p.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            Wn(Ve(k), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: Ko(() => [
                c.value || g.value ? (Xo(), La(Ve(q5), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !c.value,
                  onClick: h[3] || (h[3] = (w) => p.$emit("edit-translation", Ve(u)))
                }, {
                  default: Ko(() => [
                    Wn(Ve(G5), {
                      class: "me-1",
                      icon: Ve(Wl)
                    }, null, 8, ["icon"]),
                    N5(" " + M5(p.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : B5("", !0),
                Wn(Xp, U5(I5(p.$attrs)), null, 16)
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
}, X5 = window.Vue.computed, K5 = (e) => X5(() => {
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
    const l = a.isTranslated ? "translated" : "untranslated";
    s.classList.add(`${t}--${l}`), s.innerHTML = a.content;
  }), n.innerHTML;
});
const Y5 = window.Vue.onMounted, Q5 = window.Vue.ref, J5 = window.Vue.computed, Z5 = {
  name: "SubSection",
  props: {
    subSection: {
      type: De,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = Q5(null), o = K5(e.subSection);
    Y5(() => {
      n.value.addEventListener("click", (l) => {
        let u;
        if (e.subSection.isBlockTemplate)
          u = e.subSection;
        else {
          const g = l.composedPath().find(
            (r) => r instanceof Element && r.classList.contains("cx-segment")
          );
          if (!g)
            return;
          u = e.subSection.getSentenceById(
            g.dataset.segmentid
          );
        }
        a(u);
      });
    });
    const { selectTranslationUnitById: s } = mo(), a = (l) => {
      if (l.selected) {
        t("bounce-translation");
        return;
      }
      s(l.id);
    }, i = J5(() => ({
      "sx-sentence-selector__subsection--block-selected": e.subSection.selected
    }));
    return {
      content: o,
      rootClasses: i,
      subSectionRoot: n
    };
  }
}, eE = window.Vue.normalizeClass, tE = window.Vue.openBlock, nE = window.Vue.createElementBlock, oE = ["innerHTML"];
function sE(e, t, n, o, s, a) {
  return tE(), nE("div", {
    ref: "subSectionRoot",
    class: eE(["sx-sentence-selector__subsection", o.rootClasses]),
    innerHTML: o.content
  }, null, 10, oE);
}
const aE = /* @__PURE__ */ P(Z5, [["render", sE]]);
const yg = window.Vue.computed, iE = {
  name: "BlockTemplateStatusIndicator",
  components: {
    MwCircleProgressBar: j0,
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
    const t = yg(() => ({ "--size": e.size })), n = yg(
      () => !e.isTemplateAdapted || e.percentage === 0 ? Dl : eo
    );
    return {
      cssVars: t,
      statusIcon: n
    };
  }
}, Cg = window.Vue.resolveComponent, kg = window.Vue.createVNode, xg = window.Vue.normalizeStyle, rE = window.Vue.openBlock, lE = window.Vue.createElementBlock;
function cE(e, t, n, o, s, a) {
  const i = Cg("mw-circle-progress-bar"), l = Cg("mw-icon");
  return rE(), lE("div", {
    class: "block-template-status-indicator",
    style: xg(o.cssVars)
  }, [
    kg(i, {
      percentage: n.percentage,
      size: n.size,
      "stroke-width": n.strokeWidth
    }, null, 8, ["percentage", "size", "stroke-width"]),
    kg(l, {
      icon: o.statusIcon,
      size: n.size / 2,
      style: xg({
        left: `calc(50% - ${n.size / 4}px)`,
        top: `calc(50% - ${n.size / 4}px)`
      })
    }, null, 8, ["icon", "size", "style"])
  ], 4);
}
const Kp = /* @__PURE__ */ P(iE, [["render", cE]]), uE = window.Vuex.useStore, Yo = window.Vue.computed, dE = {
  name: "SxBlockTemplateStatusDialog",
  components: {
    MwCol: k,
    MwRow: B,
    MwIcon: be,
    MwDialog: qe,
    BlockTemplateStatusIndicator: Kp
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
    const { targetLanguageAutonym: t } = O(uE()), n = Yo(
      () => !e.isTemplateAdapted || o.value === 0 ? Dl : eo
    ), o = Yo(
      () => e.targetParamsCount / (e.sourceParamsCount + e.mandatoryMissingParamsCount) * 100
    ), s = de(), a = Yo(() => {
      let u;
      return e.targetTemplateExists ? e.isTemplateAdapted ? o.value < 100 ? u = "cx-sx-block-template-mapping-status-title-partially-template" : u = "cx-sx-block-template-mapping-status-title-fully-template" : u = "cx-sx-block-template-mapping-status-title-unadapted-template" : u = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(u);
    }), i = Yo(() => {
      let u;
      return !e.targetTemplateExists || !e.isTemplateAdapted ? u = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? u = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : u = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(u);
    }), l = Yo(() => {
      let u = [];
      if (!e.targetTemplateExists)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            t.value
          ),
          icon: lf,
          color: He.gray500
        });
      else if (!e.isTemplateAdapted)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            e.sourceParamsCount
          ),
          icon: ao,
          color: He.gray500
        });
      else if (o.value < 100)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            e.targetParamsCount,
            e.sourceParamsCount
          ),
          icon: eo,
          color: He.blue600
        });
      else {
        let g;
        e.sourceParamsCount ? g = s.i18n(
          "cx-sx-block-template-mapped-params-text",
          e.targetParamsCount,
          e.sourceParamsCount
        ) : g = s.i18n(
          "cx-sx-block-template-no-source-params-text"
        ), u.push({
          text: g,
          icon: eo,
          color: He.blue600
        });
      }
      return e.mandatoryMissingParamsCount ? u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          e.mandatoryMissingParamsCount,
          t.value
        ),
        icon: Ga,
        color: He.gray500
      }) : e.targetTemplateExists && e.isTemplateAdapted && e.optionalMissingParamsCount && u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          e.optionalMissingParamsCount,
          t.value
        ),
        icon: jw,
        color: He.gray500
      }), u;
    });
    return {
      adaptationRatio: o,
      statusIcon: n,
      statusExplanation: i,
      statusText: a,
      mwIconCheck: eo,
      mwIconInfo: Gw,
      notes: l
    };
  }
}, Qo = window.Vue.resolveComponent, Jo = window.Vue.openBlock, Ta = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Xn = window.Vue.withCtx, Zo = window.Vue.createVNode, Rr = window.Vue.toDisplayString, Or = window.Vue.createElementVNode, gE = window.Vue.renderList, mE = window.Vue.Fragment, pE = window.Vue.createElementBlock, hE = { class: "pa-4" }, wE = ["textContent"], fE = ["textContent"];
function _E(e, t, n, o, s, a) {
  const i = Qo("block-template-status-indicator"), l = Qo("mw-icon"), u = Qo("mw-col"), g = Qo("mw-row"), r = Qo("mw-dialog");
  return Jo(), Ta(r, {
    value: n.active,
    class: "sx-block-template-status-dialog",
    title: e.$i18n("cx-sx-publisher-preview-options-title"),
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.gray700,
    onInput: t[0] || (t[0] = (c) => e.$emit("update:active", c))
  }, {
    header: Xn(() => [
      Zo(g, {
        justify: "center",
        class: "mt-4"
      }, {
        default: Xn(() => [
          Zo(u, { shrink: "" }, {
            default: Xn(() => [
              n.targetTemplateExists ? (Jo(), Ta(i, {
                key: 0,
                percentage: o.adaptationRatio,
                size: 40,
                "is-template-adapted": n.isTemplateAdapted,
                "stroke-width": 3
              }, null, 8, ["percentage", "is-template-adapted"])) : (Jo(), Ta(l, {
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
    default: Xn(() => [
      Or("div", hE, [
        Or("h3", {
          textContent: Rr(o.statusText)
        }, null, 8, wE),
        Or("p", {
          class: "mt-6 text-small",
          textContent: Rr(o.statusExplanation)
        }, null, 8, fE),
        (Jo(!0), pE(mE, null, gE(o.notes, (c, d) => (Jo(), Ta(g, {
          key: d,
          align: "start",
          class: "mt-4"
        }, {
          default: Xn(() => [
            Zo(u, { shrink: "" }, {
              default: Xn(() => [
                Zo(l, {
                  class: "me-2",
                  icon: c.icon,
                  "icon-color": c.color
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 2
            }, 1024),
            Zo(u, {
              textContent: Rr(c.text)
            }, null, 8, ["textContent"])
          ]),
          _: 2
        }, 1024))), 128))
      ])
    ]),
    _: 1
  }, 8, ["value", "title", "overlay-color"]);
}
const vE = /* @__PURE__ */ P(dE, [["render", _E]]);
const ce = window.Vue.unref, fe = window.Vue.createVNode, lt = window.Vue.withCtx, Hr = window.Vue.toDisplayString, bg = window.Vue.createTextVNode, SE = window.Vue.resolveDirective, $g = window.Vue.withDirectives, Vg = window.Vue.createElementVNode, yE = window.Vue.normalizeClass, Ba = window.Vue.openBlock, Eg = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Ag = window.Vue.createBlock, CE = window.Vue.normalizeProps, kE = window.Vue.guardReactiveProps, xE = { class: "block-template-adaptation-card__container pa-4" }, bE = ["textContent"], $E = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, ke = window.Vue.computed, VE = window.Vue.ref, EE = window.Vuex.useStore, Dg = window.Codex.CdxButton, Lg = window.Codex.CdxIcon, AE = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = EE(), { targetLanguageAutonym: n, currentMTProvider: o } = O(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = K(), i = ke(() => {
      var L;
      return ((L = s.value) == null ? void 0 : L.blockTemplateTranslatedContent) || a.value;
    }), l = ke(
      () => {
        var V;
        return (V = s.value) == null ? void 0 : V.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), u = ke(
      () => {
        var V;
        return !((V = t.state.application.mtRequestsPending) != null && V.includes(
          s.value.id
        ));
      }
    ), g = de(), r = ke(
      // Strip HTML comments and return
      () => {
        var V, L;
        return ((L = (V = s.value) == null ? void 0 : V.sourceBlockTemplateName) == null ? void 0 : L.replace(
          /<\!--.*?-->/g,
          ""
        )) || g.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), c = ke(
      () => {
        var V, L;
        return (L = (V = s.value) == null ? void 0 : V.blockTemplateAdaptationInfo) == null ? void 0 : L[o.value];
      }
    ), d = ke(
      () => {
        var V, L;
        return ((V = c.value) == null ? void 0 : V.adapted) || !!((L = c.value) != null && L.partial);
      }
    ), m = ke(() => c.value ? "block-template-adaptation-card__body--" + (d.value ? "success" : "warning") : null), p = ke(() => c.value ? d.value ? g.i18n("sx-block-template-adaptation-card-edit-button-label") : g.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), h = ke(
      () => {
        var V;
        return Object.keys(((V = s.value) == null ? void 0 : V.sourceTemplateParams) || {}).length;
      }
    ), w = ke(() => {
      var L;
      const V = (L = s.value) == null ? void 0 : L.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(V || {});
    }), f = ke(() => w.value.length), _ = ke(() => {
      const V = T.value;
      return h.value + V === 0 ? 100 : f.value / (h.value + V) * 100 || 0;
    }), S = VE(!1), y = () => {
      S.value = !0;
    }, D = (V) => V.filter((L) => !w.value.includes(L)), T = ke(() => {
      var L;
      const V = ((L = c.value) == null ? void 0 : L.mandatoryTargetParams) || [];
      return D(V).length;
    }), U = ke(() => {
      var L;
      const V = ((L = c.value) == null ? void 0 : L.optionalTargetParams) || [];
      return D(V).length;
    });
    return (V, L) => {
      const H = SE("i18n");
      return Ba(), Ag(ce(et), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: lt(() => [
          Vg("div", xE, [
            fe(ce(B), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: lt(() => [
                fe(ce(k), { shrink: "" }, {
                  default: lt(() => [
                    fe(ce(Lg), {
                      icon: ce(JC),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                fe(ce(k), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: lt(() => [
                    bg(Hr(r.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            l.value ? (Ba(), Eg("div", {
              key: 0,
              class: yE(["pa-4 mb-4", m.value])
            }, [
              fe(ce(B), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: lt(() => [
                  $g(fe(ce(k), { tag: "h5" }, null, 512), [
                    [H, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  fe(ce(k), { shrink: "" }, {
                    default: lt(() => [
                      fe(Kp, {
                        percentage: _.value,
                        size: 20,
                        "is-template-adapted": d.value,
                        "stroke-width": 2,
                        onClick: y
                      }, null, 8, ["percentage", "is-template-adapted"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Vg("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: Hr(l.value)
              }, null, 8, bE),
              fe(ce(Dg), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: L[0] || (L[0] = (F) => V.$emit("edit-translation", i.value))
              }, {
                default: lt(() => [
                  bg(Hr(p.value), 1)
                ]),
                _: 1
              })
            ], 2)) : u.value ? (Ba(), Eg("div", $E, [
              fe(ce(B), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: lt(() => [
                  $g(fe(ce(k), { tag: "h5" }, null, 512), [
                    [H, [
                      ce(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  fe(ce(k), { shrink: "" }, {
                    default: lt(() => [
                      fe(ce(Dg), {
                        weight: "quiet",
                        "aria-label": V.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: lt(() => [
                          fe(ce(Lg), {
                            icon: ce(KC),
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
            ])) : (Ba(), Ag(ce(tt), { key: 2 }))
          ]),
          fe(Xp, CE(kE(V.$attrs)), null, 16),
          fe(vE, {
            active: S.value,
            "onUpdate:active": L[1] || (L[1] = (F) => S.value = F),
            "source-params-count": h.value,
            "target-params-count": f.value,
            "mandatory-missing-params-count": T.value,
            "optional-missing-params-count": U.value,
            "is-template-adapted": d.value,
            "target-template-exists": !!l.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const DE = window.Vue.computed, LE = {
  name: "TranslatedSegmentCardHeader",
  components: { MwButtonGroup: vs },
  props: {
    selection: {
      type: String,
      required: !0,
      validator: (e) => ["sentence", "paragraph"].includes(e)
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const { isSectionTitleSelected: n } = K(), o = de();
    return { scopeOptions: DE(() => [
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
    ]), updateSelection: (i) => t("update:selection", i) };
  }
}, TE = window.Vue.resolveComponent, BE = window.Vue.createVNode, PE = window.Vue.openBlock, FE = window.Vue.createElementBlock, ME = { class: "translated-segment-card-header" };
function NE(e, t, n, o, s, a) {
  const i = TE("mw-button-group");
  return PE(), FE("div", ME, [
    BE(i, {
      items: o.scopeOptions,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const UE = /* @__PURE__ */ P(LE, [["render", NE]]);
const sn = window.Vue.unref, Pa = window.Vue.createVNode, jr = window.Vue.withCtx, IE = window.Vue.openBlock, zE = window.Vue.createBlock, RE = window.Vue.computed, Tg = window.Codex.CdxButton, Bg = window.Codex.CdxIcon, OE = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "skip-translation"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = K(), o = RE(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (IE(), zE(sn(B), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: jr(() => [
        Pa(sn(Tg), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: sn(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (i) => s.$emit("select-previous-segment"))
        }, {
          default: jr(() => [
            Pa(sn(Bg), { icon: sn(Yl) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        Pa(sn(Tg), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (i) => s.$emit("skip-translation"))
        }, {
          default: jr(() => [
            Pa(sn(Bg), { icon: sn(Ts) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
};
const HE = window.Vue.useCssVars, _e = window.Vue.createVNode, Pg = window.Vue.resolveDirective, jE = window.Vue.createElementVNode, qr = window.Vue.withDirectives, ie = window.Vue.unref, qE = window.Vue.normalizeStyle, Fa = window.Vue.openBlock, Fg = window.Vue.createElementBlock, GE = window.Vue.createCommentVNode, WE = window.Vue.normalizeClass, ze = window.Vue.withCtx, XE = window.Vue.toDisplayString, KE = window.Vue.createTextVNode, Mg = window.Vue.createBlock, YE = window.Vue.normalizeProps, QE = window.Vue.guardReactiveProps, Mt = window.Vue.computed, JE = window.Vue.ref, ZE = window.Vue.inject, eA = window.Vuex.useStore, tA = window.Codex.CdxButton, Gr = window.Codex.CdxIcon, nA = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    HE((_) => ({
      "4929555c": f.value
    }));
    const t = JE("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = K(), { targetLanguage: a } = O(eA()), i = Mt(() => t.value === "sentence"), l = Mt(
      () => n.value.subSections.find(
        (_) => _.sentences.some(
          (S) => {
            var y;
            return S.id === ((y = o.value) == null ? void 0 : y.id);
          }
        )
      )
    ), u = Mt(() => {
      var _;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : i.value ? (_ = o.value) == null ? void 0 : _.mtProposedTranslationUsed : l.value.proposedContentForMTValidation;
    }), g = ZE("colors"), r = g.gray200, c = g.red600, d = Mt(() => s.value ? n.value.translatedTitle : i.value ? o.value.translatedContent : l.value.translatedContent), m = Mt(
      () => gt.calculateScore(
        d.value,
        u.value,
        a.value
      )
    ), p = Mt(
      () => gt.getScoreStatus(m.value)
    ), h = Mt(
      () => `translated-segment-card__modification-stats__percentage--${p.value}`
    ), w = Mt(() => ({
      failure: m.value === 0 ? null : g.yellow700,
      warning: g.yellow700,
      success: g.green600
    })), f = Mt(
      () => w.value[p.value]
    );
    return (_, S) => {
      const y = Pg("i18n"), D = Pg("i18n-html");
      return Fa(), Mg(ie(et), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: ze(() => [
          _e(ie(B), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: ze(() => [
              _e(UE, {
                selection: t.value,
                "onUpdate:selection": S[0] || (S[0] = (T) => t.value = T)
              }, null, 8, ["selection"]),
              _e(ie(k), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: ze(() => [
                  _e(ie(B), { class: "ma-0" }, {
                    default: ze(() => [
                      _e(ie(k), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: ze(() => [
                          qr(jE("h5", null, null, 512), [
                            [y, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          m.value === 0 ? qr((Fa(), Fg("p", {
                            key: 0,
                            style: qE({ color: ie(c) })
                          }, null, 4)), [
                            [y, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : qr((Fa(), Fg("p", {
                            key: 1,
                            class: WE(h.value)
                          }, null, 2)), [
                            [D, [
                              m.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      _e(ie(k), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: ze(() => [
                          _e(ie(B), { class: "ma-0 ms-2" }, {
                            default: ze(() => [
                              _e(ie(k), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: ze(() => [
                                  _e(ie(Gr), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ie(tk)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              _e(ie(k), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: ze(() => [
                                  _e(ie(Em), {
                                    value: m.value,
                                    height: "4px",
                                    width: "64px",
                                    color: f.value,
                                    background: ie(r)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              _e(ie(k), { shrink: "" }, {
                                default: ze(() => [
                                  _e(ie(Gr), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ie(ZC)
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
                  i.value ? (Fa(), Mg(ie(tA), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: S[1] || (S[1] = (T) => _.$emit("edit-translation", d.value))
                  }, {
                    default: ze(() => [
                      _e(ie(Gr), {
                        class: "me-1",
                        icon: ie(Wl)
                      }, null, 8, ["icon"]),
                      KE(" " + XE(_.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : GE("", !0)
                ]),
                _: 1
              }),
              _e(ie(k), { class: "translated-segment-card__actions" }, {
                default: ze(() => [
                  _e(OE, YE(QE(_.$attrs)), null, 16)
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
}, oA = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = K(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = mo(), { currentTranslation: s } = Ht();
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
}, Yp = window.Vuex.useStore, sA = () => {
  const e = Yp(), { sourceLanguage: t, targetLanguage: n } = O(e);
  return () => C(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const o = yield Ka.fetchSupportedMTProviders(
      t.value,
      n.value
    );
    e.commit("mediawiki/addMtProviderGroup", o);
  });
}, aA = () => {
  const e = Yp(), { currentMTProvider: t, sourceLanguage: n, targetLanguage: o } = O(e), s = sA();
  return () => C(void 0, null, function* () {
    e.commit("application/increaseTranslationDataLoadingCounter"), yield s();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, o.value);
    if (!t.value || !a.includes(t.value)) {
      const i = Y.getStorageKey(
        n.value,
        o.value
      ), l = mw.storage.get(i) || a[0];
      e.commit("application/setCurrentMTProvider", l);
    }
    e.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, iA = window.Vue.computed, rA = (e) => {
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
}, lA = () => {
  const { selectedContentTranslationUnit: e } = K(), t = iA(
    () => e.value instanceof De
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && rA(o);
  };
}, cA = (e, t) => {
  const { content: n, origin: o, baseSectionId: s, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const i = t.filter(
    (l) => !Y.isUserMTProvider(l)
  );
  if (o !== "source" && o !== "user" && !i.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, uA = window.Vue.computed, Qp = () => {
  const { currentTranslation: e } = Ht(), { currentSourcePage: t } = Pe();
  return uA(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, dA = window.Vuex.useStore, lc = () => {
  const e = dA(), { sourceSection: t, targetPageTitleForPublishing: n } = K(), { pageURLParameter: o } = M(), { sourceLanguage: s, targetLanguage: a } = O(e), i = Qp();
  return () => {
    const l = n.value, u = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), g = `${i.value}_${t.value.id}`, r = t.value.getParallelCorporaUnits(g);
    r.forEach(
      (m) => cA(m, u)
    );
    const c = t.value.getTranslationProgress(a), d = e.getters["application/isSandboxTarget"];
    return je.saveTranslation({
      sourceTitle: o.value,
      targetTitle: l,
      // pass a dummy string to be stored as "cxsx_source_section_title" inside "cx_section_translations" table for lead sections
      sourceSectionTitle: t.value.sourceSectionTitleForPublishing,
      // pass a dummy string to be stored as "cxsx_target_section_title" inside "cx_section_translations" table for lead sections
      targetSectionTitle: t.value.targetSectionTitleForPublishing,
      sourceLanguage: s.value,
      targetLanguage: a.value,
      revision: i.value,
      units: r.map((m) => m.payload),
      // section id to be stored as "cxsx_section_id" inside "cx_section_translations"
      sectionId: g,
      isSandbox: d,
      progress: c
    });
  };
}, gA = window.Vue.effectScope, mA = window.Vue.onScopeDispose, pA = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = gA(!0), n = o.run(() => e(...a))), mA(s), n);
}, hA = window.Vuex.useStore;
let Wr;
const wA = () => {
  const e = hA(), t = lc();
  let n = 1e3, o = 0;
  return Wr = Jl(() => t().then((a) => {
    a instanceof to ? (n *= o + 1, o++, setTimeout(Wr, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof io)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), Wr;
}, Jp = pA(wA), fA = window.Vuex.useStore, _A = () => {
  const e = fA(), t = Jp(), { currentMTProvider: n } = O(e), { sourceSection: o, currentProposedTranslation: s } = K(), { selectNextTranslationUnit: a } = mo();
  return () => C(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, vA = window.Vuex.useStore, SA = () => {
  const e = vA(), t = Jp();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, yA = window.Vuex.useStore, CA = window.Vue.computed, Zp = () => {
  const e = yA(), t = me(), { currentTranslation: n } = Ht(), { currentMTProvider: o, previousRoute: s } = O(e), { currentTargetPage: a } = Pe(), {
    sourceLanguageURLParameter: i,
    targetLanguageURLParameter: l,
    pageURLParameter: u,
    sectionURLParameter: g
  } = M(), r = wt(), c = CA(() => {
    var f;
    const w = {
      translation_source_language: i.value,
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
    if (g.value ? (w.translation_source_section = g.value, w.translation_type = "section") : w.translation_type = "article", n.value) {
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
        (D) => D.name === s.value
      ), S = ((y = _ == null ? void 0 : _.meta) == null ? void 0 : y.workflowStep) || 0;
      return w > S ? r(te({
        event_type: "editor_open"
      }, c.value)) : Promise.resolve();
    },
    logEditorCloseEvent: () => r(te({
      event_type: "editor_close"
    }, c.value)),
    logEditorCloseWarnEvent: () => r(te({
      event_type: "editor_close_warn"
    }, c.value)),
    logEditorSegmentAddEvent: () => r(te({
      event_type: "editor_segment_add"
    }, c.value))
  };
};
const Z = window.Vue.unref, Re = window.Vue.createVNode, Nt = window.Vue.withCtx, kA = window.Vue.resolveDirective, Ng = window.Vue.createElementVNode, xA = window.Vue.withDirectives, bA = window.Vue.toDisplayString, $A = window.Vue.createTextVNode, VA = window.Vue.renderList, EA = window.Vue.Fragment, an = window.Vue.openBlock, Ug = window.Vue.createElementBlock, Kn = window.Vue.createBlock;
window.Vue.createCommentVNode;
const AA = window.Vue.normalizeClass, DA = window.Vue.normalizeStyle, LA = { class: "sx-sentence-selector__header-title mb-0" }, TA = { class: "sx-sentence-selector__section-contents px-4" }, Yn = window.Vue.computed, BA = window.Vue.nextTick, PA = window.Vue.onMounted, Ma = window.Vue.ref, Ig = window.Vue.watch, FA = window.Vuex.useStore, zg = window.Codex.CdxButton, MA = window.Codex.CdxIcon, NA = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = Ma(!1), n = Ma(!1), o = Ma("100%"), s = FA(), { currentMTProvider: a } = O(s), {
      sourceLanguageURLParameter: i,
      targetLanguageURLParameter: l
    } = M(), { sourceSection: u, selectedContentTranslationUnit: g } = K(), r = Yn(
      () => s.state.application.translationDataLoadingCounter === 0
    ), c = Yn(
      () => {
        var v;
        return (v = u.value) == null ? void 0 : v.isSelectedTranslationUnitTranslated;
      }
    ), d = Yn(() => {
      var v;
      return (v = u.value) == null ? void 0 : v.subSections;
    }), m = Yn(
      () => {
        var v;
        return (v = u.value) == null ? void 0 : v.selectedTranslationUnitOriginalContent;
      }
    ), p = Yn(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: h,
      logEditorCloseEvent: w,
      logEditorCloseWarnEvent: f,
      logEditorSegmentAddEvent: _
    } = Zp(), S = oA();
    aA()().then(h);
    const D = lA();
    PA(() => {
      Ig(
        r,
        () => C(this, null, function* () {
          r.value && (yield BA(), S(), D());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    }), Ig(g, D);
    const {
      selectNextTranslationUnit: T,
      selectPreviousTranslationUnit: U
    } = mo(), V = _A(), L = () => {
      _(), V();
    }, H = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, F = me(), N = () => {
      const { autoSavePending: v } = s.state.application;
      if (v) {
        Me.value = !0, f();
        return;
      }
      ft();
    }, { fetchTranslationsByStatus: oe } = Ja(), Q = SA(), { clearURLParameters: mn } = M(), { currentTranslation: pn } = Ht(), ft = () => C(this, null, function* () {
      oe("draft"), pn.value && (u.value.reset(), pn.value.restored = !1), w(), mn(), Q(), yield F.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: nt,
      translateSelectedTranslationUnitForAllProviders: ho
    } = rc(), hn = () => {
      St.value || (t.value = !0, ho());
    }, { getCurrentTitleByLanguage: _t } = ht(), Fe = (v, b) => {
      F.push({
        name: "sx-editor",
        state: {
          content: v,
          originalContent: m.value,
          title: _t(
            l.value,
            i.value
          ),
          isInitialEdit: b || null
        }
      });
    }, jt = () => F.push({ name: "sx-publisher" }), vt = () => C(this, null, function* () {
      g.value ? yield nt(
        g.value.id,
        a.value
      ) : yield nt(0, a.value);
    }), St = Yn(
      () => g.value instanceof De
    ), Me = Ma(!1);
    return (v, b) => {
      const E = kA("i18n");
      return an(), Ug("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: DA(p.value)
      }, [
        Re(Z(B), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: Nt(() => [
            Re(Z(k), { shrink: "" }, {
              default: Nt(() => [
                Re(Z(zg), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": v.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: N
                }, {
                  default: Nt(() => [
                    Re(Z(MA), { icon: Z(Ap) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            Re(Z(k), {
              grow: "",
              class: "px-1"
            }, {
              default: Nt(() => [
                xA(Ng("h4", LA, null, 512), [
                  [E, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            Re(Z(k), {
              shrink: "",
              class: "px-3"
            }, {
              default: Nt(() => [
                Re(Z(zg), {
                  disabled: !(Z(u) && Z(u).isTranslated),
                  onClick: jt
                }, {
                  default: Nt(() => [
                    $A(bA(v.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        r.value ? (an(), Kn(Z(B), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: Nt(() => [
            Re(Z(k), {
              dir: Z(q.getDir)(Z(i)),
              lang: Z(i),
              class: "sx-sentence-selector__section"
            }, {
              default: Nt(() => [
                Re(p5),
                Ng("div", TA, [
                  (an(!0), Ug(EA, null, VA(d.value, (A) => (an(), Kn(aE, {
                    id: A.id,
                    key: `sub-section-${A.id}`,
                    "sub-section": A,
                    onBounceTranslation: H
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !St.value && c.value ? (an(), Kn(nA, {
              key: 0,
              onEditTranslation: b[0] || (b[0] = (A) => Fe(A, !1)),
              onSkipTranslation: Z(T),
              onSelectPreviousSegment: Z(U)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : St.value ? (an(), Kn(AE, {
              key: 2,
              onEditTranslation: Fe,
              onApplyTranslation: L,
              onSkipTranslation: Z(T),
              onSelectPreviousSegment: Z(U)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : (an(), Kn(W5, {
              key: 1,
              class: AA({ "mb-0": !n.value }),
              onConfigureOptions: hn,
              onEditTranslation: b[1] || (b[1] = (A) => Fe(A, !0)),
              onApplyTranslation: L,
              onSkipTranslation: Z(T),
              onSelectPreviousSegment: Z(U),
              onRetryTranslation: vt
            }, null, 8, ["class", "onSkipTranslation", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (an(), Kn(Z(B), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: Nt(() => [
            Re(Z(tt), { class: "mt-0" })
          ]),
          _: 1
        })),
        Re(n5, {
          active: t.value,
          "onUpdate:active": b[2] || (b[2] = (A) => t.value = A)
        }, null, 8, ["active"]),
        Re(LV, {
          modelValue: Me.value,
          "onUpdate:modelValue": b[3] || (b[3] = (A) => Me.value = A),
          onDiscardTranslation: ft
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const UA = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: NA
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, IA = window.Vue.resolveComponent, zA = window.Vue.createVNode, RA = window.Vue.normalizeClass, OA = window.Vue.openBlock, HA = window.Vue.createElementBlock;
function jA(e, t, n, o, s, a) {
  const i = IA("sx-sentence-selector");
  return OA(), HA("main", {
    class: RA(["sx-sentence-selector-view", a.classes])
  }, [
    zA(i)
  ], 2);
}
const qA = /* @__PURE__ */ P(UA, [["render", jA]]), GA = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, WA = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const XA = window.Vue.resolveDirective, Na = window.Vue.withDirectives, Qe = window.Vue.openBlock, Ut = window.Vue.createElementBlock, Ua = window.Vue.createCommentVNode, Ia = window.Vue.Transition, kn = window.Vue.withCtx, Qn = window.Vue.createVNode, es = window.Vue.createElementVNode, xn = window.Vue.unref, KA = window.Vue.renderList, YA = window.Vue.Fragment, QA = window.Vue.normalizeClass, Rg = window.Vue.createBlock, JA = window.Vue.toDisplayString, ZA = window.Vue.createTextVNode, eD = { class: "sx-quick-tutorial" }, tD = { class: "sx-quick-tutorial__main-point py-9 px-6" }, nD = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, oD = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, sD = { class: "sx-quick-tutorial__illustration" }, aD = ["innerHTML"], iD = ["innerHTML"], rD = { class: "sx-quick-tutorial__step-indicator py-3" }, lD = ["onClick"], cD = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, uD = {
  key: "secondary-point-1",
  class: "ma-0"
}, dD = {
  key: "secondary-point-2",
  class: "ma-0"
}, gD = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, Og = window.Vue.ref, Hg = window.Codex.CdxButton, mD = window.Codex.CdxIcon, pD = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = Og(2), n = Og(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (l) => l === n.value, a = me(), i = () => a.push({ name: "sx-sentence-selector" });
    return (l, u) => {
      const g = XA("i18n");
      return Qe(), Ut("section", eD, [
        Qn(xn(B), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: kn(() => [
            es("section", tD, [
              Qn(Ia, {
                name: "fade",
                mode: "out-in"
              }, {
                default: kn(() => [
                  s(1) ? Na((Qe(), Ut("h2", nD, null, 512)), [
                    [g, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? Na((Qe(), Ut("h2", oD, null, 512)), [
                    [g, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : Ua("", !0)
                ]),
                _: 1
              })
            ]),
            es("section", sD, [
              Qn(Ia, { name: "mw-ui-animation-slide-left" }, {
                default: kn(() => [
                  s(1) ? (Qe(), Ut("div", {
                    key: "illustration-1",
                    innerHTML: xn(WA)
                  }, null, 8, aD)) : s(2) ? (Qe(), Ut("div", {
                    key: "illustration-2",
                    innerHTML: xn(GA)
                  }, null, 8, iD)) : Ua("", !0)
                ]),
                _: 1
              })
            ]),
            es("div", rD, [
              (Qe(!0), Ut(YA, null, KA(t.value, (r) => (Qe(), Ut("span", {
                key: `dot-${r}`,
                class: QA(["dot mx-1", { "dot-active": s(r) }]),
                role: "button",
                onClick: (c) => n.value = r
              }, null, 10, lD))), 128))
            ]),
            es("section", cD, [
              Qn(Ia, {
                name: "fade",
                mode: "out-in"
              }, {
                default: kn(() => [
                  s(1) ? Na((Qe(), Ut("h3", uD, null, 512)), [
                    [g, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? Na((Qe(), Ut("h3", dD, null, 512)), [
                    [g, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : Ua("", !0)
                ]),
                _: 1
              })
            ]),
            es("div", gD, [
              Qn(Ia, {
                name: "fade",
                mode: "out-in"
              }, {
                default: kn(() => [
                  s(1) ? (Qe(), Rg(xn(Hg), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": l.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: kn(() => [
                      Qn(xn(mD), { icon: xn(Ts) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (Qe(), Rg(xn(Hg), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: i
                  }, {
                    default: kn(() => [
                      ZA(JA(l.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  })) : Ua("", !0)
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
const hD = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: pD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, wD = window.Vue.resolveComponent, fD = window.Vue.createVNode, _D = window.Vue.normalizeClass, vD = window.Vue.openBlock, SD = window.Vue.createElementBlock;
function yD(e, t, n, o, s, a) {
  const i = wD("sx-quick-tutorial");
  return vD(), SD("main", {
    class: _D(["sx-quick-tutorial-view", a.classes])
  }, [
    fD(i)
  ], 2);
}
const CD = /* @__PURE__ */ P(hD, [["render", yD]]);
const jg = window.Vue.ref, kD = window.Vue.onMounted;
function xD(e, t) {
  const n = e.getElementsByTagName("a");
  for (const o of n)
    o.href = G.getPageUrl(t, o.title), o.target = "_blank";
}
const bD = {
  name: "SxEditorOriginalContent",
  components: { MwExpandableContent: M0 },
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
    const t = jg(null), n = jg(0), o = () => parseFloat(
      document.defaultView.getComputedStyle(t.value, null).getPropertyValue("line-height")
    );
    return kD(() => {
      n.value = 2 * o(), xD(t.value, e.language);
    }), {
      originalContentRef: t,
      twoLinesHeight: n
    };
  }
}, $D = window.Vue.resolveDirective, qg = window.Vue.createElementVNode, VD = window.Vue.withDirectives, ED = window.Vue.resolveComponent, AD = window.Vue.withCtx, DD = window.Vue.createVNode, LD = window.Vue.openBlock, TD = window.Vue.createElementBlock, BD = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, PD = { class: "sx-editor__original-content-panel__header mb-2" }, FD = ["lang", "dir", "innerHTML"];
function MD(e, t, n, o, s, a) {
  const i = ED("mw-expandable-content"), l = $D("i18n");
  return LD(), TD("section", BD, [
    VD(qg("h5", PD, null, 512), [
      [l, void 0, "cx-sx-editor-original-panel-label"]
    ]),
    DD(i, {
      "min-height": o.twoLinesHeight,
      scroll: ""
    }, {
      default: AD(() => [
        qg("div", {
          ref: "originalContentRef",
          class: "sx-editor__original-content-panel__body",
          lang: n.language,
          dir: n.dir,
          innerHTML: n.originalContent
        }, null, 8, FD)
      ]),
      _: 1
    }, 8, ["min-height"])
  ]);
}
const ND = /* @__PURE__ */ P(bD, [["render", MD]]), UD = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const Xr = window.Vue.computed, ID = window.Vuex.useStore, zD = {
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
    const { targetLanguage: t } = O(ID()), n = Xr(
      () => gt.calculateScore(
        e.editedTranslation,
        e.proposedTranslation,
        t.value
      )
    ), o = Xr(() => {
      const a = gt.getScoreStatus(n.value);
      return a === "failure" ? n.value === 0 ? "failure" : "warning" : a;
    }), s = Xr(
      () => `sx-editor__feedback-overlay-content__stats--${o.value}`
    );
    return {
      happyRobotSVG: UD,
      modificationPercentageClass: s,
      mtScore: n
    };
  }
}, ts = window.Vue.createElementVNode, Gg = window.Vue.resolveDirective, Kr = window.Vue.withDirectives, RD = window.Vue.normalizeClass, OD = window.Vue.openBlock, HD = window.Vue.createElementBlock, jD = window.Vue.createCommentVNode, qD = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, GD = { class: "sx-editor__feedback-overlay-content px-4" }, WD = ["innerHTML"], XD = { class: "sx-editor__feedback-overlay-content__title" }, KD = { class: "sx-editor__feedback-overlay-content__clarification mb-1" };
function YD(e, t, n, o, s, a) {
  const i = Gg("i18n"), l = Gg("i18n-html");
  return n.showFeedback ? (OD(), HD("div", qD, [
    ts("div", GD, [
      ts("div", {
        class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
        innerHTML: o.happyRobotSVG
      }, null, 8, WD),
      Kr(ts("h2", XD, null, 512), [
        [i, void 0, "sx-editor-feedback-overlay-title"]
      ]),
      Kr(ts("p", KD, null, 512), [
        [i, void 0, "sx-editor-feedback-overlay-clarification"]
      ]),
      Kr(ts("p", {
        class: RD(["sx-editor__feedback-overlay-content__stats", o.modificationPercentageClass])
      }, null, 2), [
        [l, [o.mtScore], "sx-editor-feedback-overlay-stats"]
      ])
    ])
  ])) : jD("", !0);
}
const QD = /* @__PURE__ */ P(zD, [["render", YD]]), JD = window.Vuex.useStore, ZD = () => {
  const e = JD(), t = lc(), { selectNextTranslationUnit: n } = mo(), { sourceSection: o, selectedContentTranslationUnit: s } = K(), { getCurrentTitleByLanguage: a } = ht();
  return (i) => C(void 0, null, function* () {
    const l = document.createElement("div");
    l.innerHTML = i, l.querySelectorAll(".sx-edit-dummy-node").forEach((c) => c.remove()), i = l.innerHTML;
    const { sourceLanguage: u, targetLanguage: g, currentMTProvider: r } = e.state.application;
    s.value instanceof De && (i = (yield Wm(
      i,
      a(g, u),
      g
    )) || i), o.value.setTranslationForSelectedTranslationUnit(
      i,
      r
    ), t(), n();
  });
};
const Ee = window.Vue.unref, Yr = window.Vue.openBlock, Qr = window.Vue.createBlock, Wg = window.Vue.createCommentVNode, Xg = window.Vue.createVNode, eL = window.Vue.createElementVNode, tL = window.Vue.withCtx, nL = { class: "sx-editor__editing-surface-container grow" }, Jr = window.Vue.ref, oL = window.Vue.computed, sL = window.Vuex.useStore, aL = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Jr(!1), o = me(), s = sL(), a = () => n.value = !0, i = () => o.replace({ name: t.fromRoute }), { isFinalEdit: l, isInitialEdit: u, content: g, originalContent: r, title: c } = history.state, d = Jr(null), m = Jr(!1), { logEditorSegmentAddEvent: p } = Zp(), { targetLanguage: h, sourceLanguage: w } = O(s), { sourceSection: f } = K(), _ = oL(
      () => gt.calculateScore(
        d.value,
        g,
        h.value
      )
    ), S = ZD(), y = (D) => C(this, null, function* () {
      d.value = D, m.value = !0;
      const T = new Promise((V) => setTimeout(V, 2e3));
      let U = Promise.resolve();
      l ? f.value.editedTranslation = D : (_.value === 0 && u && p(), U = S(D)), yield Promise.all([T, U]), m.value = !1, i();
    });
    return (D, T) => (Yr(), Qr(Ee(B), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: tL(() => [
        Ee(r) ? (Yr(), Qr(ND, {
          key: 0,
          language: Ee(w),
          dir: Ee(q.getDir)(Ee(w)),
          "original-content": Ee(r)
        }, null, 8, ["language", "dir", "original-content"])) : Wg("", !0),
        n.value ? Wg("", !0) : (Yr(), Qr(Ee(tt), { key: 1 })),
        eL("div", nL, [
          Xg(QD, {
            "edited-translation": d.value,
            "show-feedback": m.value,
            "proposed-translation": Ee(g)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          Xg(o2, {
            content: Ee(g),
            language: Ee(h),
            dir: Ee(q.getDir)(Ee(h)),
            title: Ee(c),
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
const iL = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: aL
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
}, rL = window.Vue.resolveComponent, lL = window.Vue.createVNode, cL = window.Vue.normalizeClass, uL = window.Vue.openBlock, dL = window.Vue.createElementBlock;
function gL(e, t, n, o, s, a) {
  const i = rL("sx-editor");
  return uL(), dL("main", {
    class: cL(["sx-editor-view", a.classes])
  }, [
    lL(i, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const mL = /* @__PURE__ */ P(iL, [["render", gL]]);
const ct = window.Vue.unref, bn = window.Vue.createVNode, ns = window.Vue.withCtx, pL = window.Vue.resolveDirective, hL = window.Vue.withDirectives, wL = window.Vue.openBlock, fL = window.Vue.createBlock, Kg = window.Codex.CdxButton, Yg = window.Codex.CdxIcon, _L = {
  __name: "SXPublisherHeader",
  props: {
    isPublishingDisabled: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["publish-translation"],
  setup(e) {
    const t = me(), n = () => t.push({ name: "sx-sentence-selector" });
    return (o, s) => {
      const a = pL("i18n");
      return wL(), fL(ct(B), { class: "ma-0 sx-publisher__header" }, {
        default: ns(() => [
          bn(ct(k), {
            shrink: "",
            class: "me-2"
          }, {
            default: ns(() => [
              bn(ct(Kg), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: ns(() => [
                  bn(ct(Yg), { icon: ct(go) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          hL(bn(ct(k), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          bn(ct(k), { shrink: "" }, {
            default: ns(() => [
              bn(ct(Kg), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (i) => o.$emit("publish-translation"))
              }, {
                default: ns(() => [
                  bn(ct(Yg), { icon: ct(GC) }, null, 8, ["icon"])
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
}, vL = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, SL = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, Qg = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const yL = {
  name: "SxPublisherAnimationDialog",
  components: { MwDialog: qe, MwRow: B, MwCol: k },
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
        svg: vL,
        title: e.$i18n("cx-sx-publisher-animation-publishing-indicator-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: SL,
        title: e.$i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: Qg,
        title: e.$i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: Qg,
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
}, Zr = window.Vue.createElementVNode, Jg = window.Vue.toDisplayString, el = window.Vue.resolveComponent, tl = window.Vue.withCtx, Zg = window.Vue.createVNode, CL = window.Vue.openBlock, kL = window.Vue.createBlock, xL = window.Vue.createCommentVNode, bL = ["innerHTML"], $L = ["textContent"], VL = ["textContent"];
function EL(e, t, n, o, s, a) {
  const i = el("mw-col"), l = el("mw-row"), u = el("mw-dialog");
  return n.active ? (CL(), kL(u, {
    key: 0,
    "overlay-opacity": 0.85,
    header: !1,
    class: "sx-publisher__publish-animation"
  }, {
    default: tl(() => [
      Zg(l, { class: "ma-4" }, {
        default: tl(() => [
          Zg(i, null, {
            default: tl(() => [
              Zr("div", {
                class: "sx-publisher__publish-animation-icon mb-4",
                innerHTML: a.animationSvg
              }, null, 8, bL),
              Zr("h2", {
                textContent: Jg(a.animationTitle)
              }, null, 8, $L),
              Zr("p", {
                class: "ma-0",
                textContent: Jg(a.animationSubtitle)
              }, null, 8, VL)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  })) : xL("", !0);
}
const AL = /* @__PURE__ */ P(yL, [["render", EL]]);
const Ae = window.Vue.unref, Je = window.Vue.createVNode, It = window.Vue.withCtx, DL = window.Vue.resolveDirective, LL = window.Vue.withDirectives, em = window.Vue.toDisplayString, TL = window.Vue.createTextVNode, nl = window.Vue.openBlock, tm = window.Vue.createElementBlock, BL = window.Vue.createCommentVNode, eh = window.Vue.createElementVNode, PL = window.Vue.createBlock, FL = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, ML = ["src"], NL = ["textContent"], UL = /* @__PURE__ */ eh("p", { class: "mt-0" }, null, -1), IL = window.Vue.computed, zL = window.Vue.inject, RL = window.Vue.ref, nm = window.Codex.CdxButton, OL = window.Codex.CdxIcon, HL = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: Rm,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = RL(""), s = () => n("close"), a = () => n("publish", o.value), i = zL("breakpoints"), l = IL(() => i.value.mobile);
    return (u, g) => {
      const r = DL("i18n");
      return e.active && e.captchaDetails ? (nl(), PL(Ae(qe), {
        key: 0,
        "overlay-opacity": 0.65,
        fullscreen: l.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: It(() => [
          Je(Ae(B), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: It(() => [
              Je(Ae(k), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: It(() => [
                  Je(Ae(nm), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": u.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: s
                  }, {
                    default: It(() => [
                      Je(Ae(OL), { icon: Ae(go) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              LL(Je(Ae(k), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [r, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              Je(Ae(k), {
                shrink: "",
                class: "justify-center"
              }, {
                default: It(() => [
                  Je(Ae(nm), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: It(() => [
                      TL(em(u.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Je(Ae(qa))
        ]),
        default: It(() => [
          eh("div", FL, [
            e.captchaDetails.type === "image" ? (nl(), tm("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, ML)) : (nl(), tm("p", {
              key: 1,
              textContent: em(e.captchaDetails.question)
            }, null, 8, NL)),
            UL,
            Je(Ae(B), { class: "ma-0" }, {
              default: It(() => [
                Je(Ae(k), null, {
                  default: It(() => [
                    Je(Ae(Tl), {
                      value: o.value,
                      "onUpdate:value": g[0] || (g[0] = (c) => o.value = c),
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
      }, 8, ["fullscreen"])) : BL("", !0);
    };
  }
};
const $n = window.Vue.unref, os = window.Vue.createVNode, za = window.Vue.withCtx, Vn = window.Vue.createElementVNode, jL = window.Vue.resolveDirective, qL = window.Vue.withDirectives, GL = window.Vue.renderList, om = window.Vue.Fragment, ol = window.Vue.openBlock, sm = window.Vue.createElementBlock, WL = window.Vue.toDisplayString, XL = window.Vue.normalizeClass, KL = window.Vue.createBlock, YL = { class: "mw-ui-dialog__header" }, QL = { class: "row ma-0 px-4 py-3" }, JL = { class: "col shrink justify-center" }, ZL = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, eT = { class: "mb-0" }, tT = { class: "pa-4" }, nT = ["textContent"], oT = window.Vuex.useStore, ss = window.Vue.computed, sT = window.Codex.CdxButton, aT = window.Codex.CdxIcon, iT = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = oT(), s = ss(() => o.state.application.publishTarget), a = ss(() => o.state.translator.isAnon), i = de(), { sourceSection: l } = K(), u = ss(
      () => l.value.isLeadSection ? i.i18n("cx-sx-publisher-lead-section-option-label") : i.i18n("cx-sx-publisher-new-section-option-label")
    ), g = ss(
      () => l.value.isLeadSection ? i.i18n("cx-sx-publisher-lead-section-option-details") : i.i18n("cx-sx-publisher-new-section-option-details")
    ), r = ss(() => [
      {
        label: u.value,
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
    ]), c = (p) => p === r.value.length - 1 ? "mb-1" : "mb-4", d = () => n("update:active", !1), m = (p) => {
      const h = p.target.value;
      o.commit("application/setPublishTarget", h), d();
    };
    return (p, h) => {
      const w = jL("i18n");
      return ol(), KL($n(qe), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: p.$i18n("cx-sx-publisher-preview-options-title"),
        "overlay-opacity": 0.7,
        "overlay-color": p.$mwui.colors.gray700,
        onInput: h[0] || (h[0] = (f) => p.$emit("update:active", f)),
        onClose: d
      }, {
        header: za(() => [
          Vn("div", YL, [
            Vn("div", QL, [
              Vn("div", JL, [
                os($n(sT), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": p.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: d
                }, {
                  default: za(() => [
                    os($n(aT), { icon: $n(Ap) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              Vn("div", ZL, [
                qL(Vn("h4", eT, null, 512), [
                  [w, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            os($n(qa))
          ])
        ]),
        default: za(() => [
          Vn("div", tT, [
            os($n(g0), {
              value: s.value,
              name: "publish-options",
              onInput: m
            }, {
              default: za(() => [
                (ol(!0), sm(om, null, GL(r.value, (f, _) => (ol(), sm(om, {
                  key: f.label
                }, [
                  os($n(wl), {
                    class: "pa-0 my-1",
                    label: f.label,
                    "input-value": f.value,
                    disabled: f.disabled
                  }, null, 8, ["label", "input-value", "disabled"]),
                  Vn("p", {
                    class: XL(["complementary ms-7 mt-0", c(_)]),
                    textContent: WL(f.details)
                  }, null, 10, nT)
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
const Ze = window.Vue.unref, En = window.Vue.createVNode, rT = window.Vue.resolveDirective, am = window.Vue.withDirectives, Ra = window.Vue.openBlock, im = window.Vue.createElementBlock, lT = window.Vue.createCommentVNode, rm = window.Vue.toDisplayString, sl = window.Vue.createElementVNode, Jn = window.Vue.withCtx, lm = window.Vue.createBlock, cT = window.Vue.Fragment, uT = window.Vue.normalizeClass, dT = { class: "sx-publisher__review-info__content" }, gT = {
  key: 0,
  class: "complementary ma-0"
}, mT = ["textContent"], pT = ["textContent"], rn = window.Vue.computed, cm = window.Vue.ref, hT = window.Vue.watch, um = window.Codex.CdxButton, al = window.Codex.CdxIcon, wT = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = cm(0), o = cm(null);
    hT(o, () => {
      var w;
      const h = (w = o.value) == null ? void 0 : w.$el;
      if (h instanceof HTMLElement) {
        const f = h.querySelector("a");
        f && f.setAttribute("target", "_blank");
      }
    });
    const s = rn(
      () => {
        var h;
        return (h = t.publishFeedbackMessages) == null ? void 0 : h[n.value];
      }
    ), a = rn(() => {
      var h;
      return ((h = s.value) == null ? void 0 : h.status) || "default";
    }), i = rn(() => {
      switch (a.value) {
        case "warning":
          return Ep;
        case "error":
          return jC;
        default:
          return XC;
      }
    }), l = rn(() => a.value === "default"), u = rn(
      () => l.value ? "notice" : a.value
    ), g = rn(
      () => `sx-publisher__review-info--${u.value}`
    ), r = de(), c = rn(() => {
      var h;
      return (h = s.value) == null ? void 0 : h.text;
    }), d = rn(
      () => {
        var h;
        return ((h = s.value) == null ? void 0 : h.title) || r.i18n("cx-sx-publisher-review-info-error");
      }
    ), m = () => {
      const h = t.publishFeedbackMessages.length;
      n.value = (n.value - 1 + h) % h;
    }, p = () => {
      n.value = (n.value + 1) % t.publishFeedbackMessages.length;
    };
    return (h, w) => {
      const f = rT("i18n-html");
      return Ra(), lm(Ze(Nf), {
        type: u.value,
        class: uT(["sx-publisher__review-info ma-0 pa-4", g.value]),
        inline: l.value
      }, {
        icon: Jn(() => [
          En(Ze(al), {
            icon: i.value,
            class: "shrink mw-ui-message__icon items-start me-1"
          }, null, 8, ["icon"])
        ]),
        default: Jn(() => [
          sl("div", dT, [
            a.value === "default" ? am((Ra(), im("p", gT, null, 512)), [
              [f, void 0, "cx-sx-publisher-review-info"]
            ]) : (Ra(), im(cT, { key: 1 }, [
              sl("h5", {
                textContent: rm(d.value)
              }, null, 8, mT),
              sl("p", {
                textContent: rm(c.value)
              }, null, 8, pT),
              En(Ze(B), {
                justify: "between",
                class: "ma-0"
              }, {
                default: Jn(() => [
                  am(En(Ze(k), {
                    ref_key: "learnMoreContainer",
                    ref: o,
                    class: "sx-publisher__review-info__learn-more-anchor"
                  }, null, 512), [
                    [f, void 0, "cx-sx-publisher-review-info-learn-more"]
                  ]),
                  e.publishFeedbackMessages.length > 1 ? (Ra(), lm(Ze(k), {
                    key: 0,
                    class: "sx-publisher__review-info__navigation-buttons justify-end",
                    align: "center"
                  }, {
                    default: Jn(() => [
                      En(Ze(um), {
                        weight: "quiet",
                        class: "pa-0 me-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                        onClick: m
                      }, {
                        default: Jn(() => [
                          En(Ze(al), { icon: Ze(Yl) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"]),
                      En(Ze(um), {
                        weight: "quiet",
                        class: "pa-0 ms-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                        onClick: p
                      }, {
                        default: Jn(() => [
                          En(Ze(al), { icon: Ze(Ts) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ]),
                    _: 1
                  })) : lT("", !0)
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
}, fT = (e) => {
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
}, _T = window.Vuex.useStore, vT = window.Vue.computed, ST = () => {
  const e = _T(), { currentTranslation: t } = Ht(), { currentMTProvider: n, previousRoute: o } = O(e), { currentTargetPage: s } = Pe(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: i,
    pageURLParameter: l,
    sectionURLParameter: u
  } = M(), { sourceSection: g } = K(), r = wt(), c = vT(() => {
    var w;
    const h = {
      translation_source_language: a.value,
      translation_target_language: i.value,
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
    return n.value && (h.translation_provider = Y.getProviderForInstrumentation(n.value)), h.human_modification_rate = gt.getMTScoreForPageSection(
      g.value,
      i.value
    ) / 100, h.human_modification_threshold = gt.getMtModificationThreshold(), h;
  });
  return {
    logPublishAttemptEvent: () => r(te({
      event_type: "publish_attempt"
    }, c.value)),
    logPublishSuccessEvent: (h, w) => r(te({
      event_type: "publish_success",
      published_page_id: h,
      published_revision_id: w
    }, c.value)),
    logPublishFailureEvent: () => r(te({
      event_type: "publish_failure"
    }, c.value))
  };
}, dm = window.Vue.ref, yT = window.Vuex.useStore, CT = () => {
  const e = yT(), { pageURLParameter: t } = M(), { sourceSection: n, targetPageTitleForPublishing: o } = K(), s = Qp(), a = dm(!1), i = dm("pending"), l = () => a.value = !1, u = lc(), {
    logPublishAttemptEvent: g,
    logPublishSuccessEvent: r,
    logPublishFailureEvent: c
  } = ST(), d = (p, h) => C(void 0, null, function* () {
    g();
    const w = yield u();
    if (w instanceof to)
      return c(), { publishFeedbackMessage: w, targetUrl: null };
    const f = w, {
      /** @type {PageSection} */
      sourceLanguage: _,
      targetLanguage: S
    } = e.state.application, y = o.value, D = e.getters["application/isSandboxTarget"], T = {
      html: fT(n.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: y,
      sourceSectionTitle: n.value.sourceSectionTitleForPublishing,
      targetSectionTitle: n.value.targetSectionTitleForPublishing,
      sourceLanguage: _,
      targetLanguage: S,
      revision: s.value,
      isSandbox: D,
      sectionTranslationId: f
    };
    p && (T.captchaId = p, T.captchaWord = h);
    const U = yield je.publishTranslation(
      T
    );
    return U.publishFeedbackMessage === null ? r(U.pageId, U.revisionId) : c(), U;
  });
  return {
    closePublishDialog: l,
    doPublish: (p = null, h = null) => C(void 0, null, function* () {
      i.value = "pending", a.value = !0;
      let w;
      try {
        w = yield d(
          h == null ? void 0 : h.id,
          p
        );
      } catch (f) {
        if (f instanceof io)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw f;
      }
      return w;
    }),
    isPublishDialogActive: a,
    publishStatus: i
  };
}, kT = window.Vue.computed, xT = () => {
  const e = me(), { sourceSection: t } = K(), { getCurrentTitleByLanguage: n } = ht(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = M(), a = kT(
    () => t.value.subSections.reduce(
      (i, l) => l.isTranslated ? `${i}<section rel="cx:Section" id="${l.targetSectionId}">${l.translatedContent}</section>` : i,
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
}, bT = window.Vuex.useStore, $T = () => {
  const e = bT(), { targetLanguage: t } = O(e), { sourceSection: n } = K();
  return () => {
    const o = gt.getMTScoreForPageSection(
      n.value,
      t.value
    ), s = gt.getScoreStatus(o);
    if (s === "success")
      return null;
    const a = 100 - o, i = s === "failure" ? "error" : "warning";
    let l, u;
    return i === "warning" ? (l = mw.message("cx-sx-publisher-mt-abuse-message-title", a).plain(), u = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (l = mw.message("cx-sx-publisher-mt-abuse-error-title", a).plain(), u = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new to({
      title: l,
      text: u,
      status: i,
      type: "mt"
    });
  };
}, VT = window.Vue.ref, ET = window.Vue.computed, AT = () => {
  const e = $T(), t = VT([]), n = ET(
    () => t.value.some((i) => i.isError)
  );
  return {
    addPublishFeedbackMessage: (i) => {
      t.value.push(i), t.value.sort((l, u) => +u.isError - +l.isError);
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
}, DT = window.Vuex.useStore, LT = () => {
  const e = DT(), { currentSourcePage: t } = Pe(), { sourceLanguage: n, targetLanguage: o } = O(e), { sourceSection: s, targetPageTitleForPublishing: a } = K();
  return (i) => C(void 0, null, function* () {
    const l = a.value, u = e.getters["application/isSandboxTarget"], g = t.value.title, r = new mw.Title(g), c = mw.config.get("wgNamespaceIds");
    if (s.value.isLeadSection && !u && r.getNamespaceId() !== c.user)
      try {
        yield Ka.addWikibaseLink(
          n.value,
          o.value,
          g,
          l
        );
      } catch (d) {
        mw.log.error("Error while adding wikibase link", d);
      }
    if (!i) {
      const d = "[CX] Target URL is empty after successful publishing";
      throw mw.log.error(d), new Error(d);
    }
    location.href = i;
  });
}, gm = window.Vue.ref, TT = () => {
  const e = gm(!1), t = gm(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const le = window.Vue.unref, xe = window.Vue.createVNode, BT = window.Vue.resolveDirective, as = window.Vue.createElementVNode, PT = window.Vue.withDirectives, Zn = window.Vue.withCtx, FT = window.Vue.openBlock, MT = window.Vue.createElementBlock, NT = { class: "sx-publisher" }, UT = { class: "sx-publisher__publish-panel pa-4" }, IT = { class: "mb-2" }, zT = ["innerHTML"], RT = { class: "sx-publisher__section-preview pa-5" }, OT = ["innerHTML"], mm = window.Vue.computed, HT = window.Vue.onMounted, jT = window.Vue.ref, qT = window.Vue.watch, GT = window.Vuex.useStore, pm = window.Codex.CdxButton, hm = window.Codex.CdxIcon, WT = {
  __name: "SXPublisher",
  setup(e) {
    const t = GT(), { sourceSection: n } = K(), o = mm(() => {
      var V;
      return (V = n.value) == null ? void 0 : V.title;
    }), s = de(), a = mm(() => t.getters["application/isSandboxTarget"] ? s.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : n.value.isLeadSection ? s.i18n("cx-sx-publisher-publish-panel-lead-section-result") : s.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: i,
      captchaDialogOn: l,
      handleCaptchaError: u,
      onCaptchaDialogClose: g
    } = TT(), {
      publishFeedbackMessages: r,
      isPublishingDisabled: c,
      addPublishFeedbackMessage: d,
      clearPublishFeedbackMessages: m,
      initializePublishFeedbackMessages: p
    } = AT(), h = LT(), { doPublish: w, isPublishDialogActive: f, publishStatus: _, closePublishDialog: S } = CT(), y = (V = null) => C(this, null, function* () {
      const L = yield w(V, i);
      if (!L)
        return;
      const { publishFeedbackMessage: H, targetUrl: F } = L;
      if (u(H)) {
        S();
        return;
      } else
        H && d(H);
      _.value = c.value ? "failure" : "success", setTimeout(() => {
        if (c.value) {
          S();
          return;
        }
        h(F);
      }, 1e3);
    });
    HT(() => p());
    const D = xT(), T = jT(!1), U = () => T.value = !0;
    return qT(T, (V) => {
      V || m();
    }), (V, L) => {
      const H = BT("i18n");
      return FT(), MT("section", NT, [
        xe(_L, {
          "is-publishing-disabled": le(c),
          onPublishTranslation: y
        }, null, 8, ["is-publishing-disabled"]),
        as("div", UT, [
          PT(as("h5", IT, null, 512), [
            [H, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          as("h6", {
            class: "mb-2",
            innerHTML: a.value
          }, null, 8, zT),
          xe(le(B), {
            justify: "end",
            class: "ma-0"
          }, {
            default: Zn(() => [
              xe(le(k), { shrink: "" }, {
                default: Zn(() => [
                  xe(le(pm), {
                    weight: "quiet",
                    "aria-label": V.$i18n("cx-sx-publisher-configure-button-aria-label"),
                    onClick: U
                  }, {
                    default: Zn(() => [
                      xe(le(hm), { icon: le(ek) }, null, 8, ["icon"])
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
        xe(wT, { "publish-feedback-messages": le(r) }, null, 8, ["publish-feedback-messages"]),
        as("section", RT, [
          xe(le(B), { class: "pb-5 ma-0" }, {
            default: Zn(() => [
              xe(le(k), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                innerHTML: o.value
              }, null, 8, ["innerHTML"]),
              xe(le(k), { shrink: "" }, {
                default: Zn(() => [
                  xe(le(pm), {
                    weight: "quiet",
                    "aria-label": V.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: le(D)
                  }, {
                    default: Zn(() => [
                      xe(le(hm), { icon: le(Wl) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label", "onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          as("div", {
            innerHTML: le(n).translationHtml
          }, null, 8, OT)
        ]),
        xe(iT, {
          active: T.value,
          "onUpdate:active": L[0] || (L[0] = (F) => T.value = F)
        }, null, 8, ["active"]),
        xe(HL, {
          active: le(l),
          "captcha-details": le(i),
          onClose: le(g),
          onPublish: L[1] || (L[1] = (F) => y(F))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        xe(AL, {
          active: le(f),
          status: le(_)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const XT = {
  name: "SxPublisherView",
  components: {
    SxPublisher: WT
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, KT = window.Vue.resolveComponent, YT = window.Vue.createVNode, QT = window.Vue.normalizeClass, JT = window.Vue.openBlock, ZT = window.Vue.createElementBlock;
function e6(e, t, n, o, s, a) {
  const i = KT("sx-publisher");
  return JT(), ZT("main", {
    class: QT(["sx-publisher-view", a.classes])
  }, [
    YT(i)
  ], 2);
}
const t6 = /* @__PURE__ */ P(XT, [["render", e6]]);
const n6 = {
  name: "SxSearchArticleSuggestion",
  components: { MwThumbnail: Bl, MwIcon: be, MwRow: B, MwCol: k },
  props: {
    suggestion: {
      type: co,
      required: !0
    }
  },
  setup(e) {
    return { mwIconStar: Kw, mwIconLanguage: Jw, mwIconArticle: Ll, getDir: q.getDir };
  }
}, Oa = window.Vue.resolveComponent, ln = window.Vue.createVNode, An = window.Vue.withCtx, il = window.Vue.toDisplayString, rl = window.Vue.createElementVNode, o6 = window.Vue.openBlock, s6 = window.Vue.createBlock, a6 = ["textContent"], i6 = ["textContent"], r6 = ["textContent"];
function l6(e, t, n, o, s, a) {
  const i = Oa("mw-thumbnail"), l = Oa("mw-col"), u = Oa("mw-icon"), g = Oa("mw-row");
  return o6(), s6(g, {
    class: "cx-search-suggestion pt-3 ma-0",
    align: "normal",
    lang: n.suggestion.language,
    dir: o.getDir(n.suggestion.language)
  }, {
    default: An(() => [
      ln(l, { shrink: "" }, {
        default: An(() => [
          ln(i, {
            class: "cx-search-suggestion__thumbnail",
            thumbnail: n.suggestion.thumbnail,
            "thumbnail-size": 56,
            "placeholder-icon-size": 30
          }, null, 8, ["thumbnail"])
        ]),
        _: 1
      }),
      ln(l, { class: "ms-4" }, {
        default: An(() => [
          ln(g, {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: An(() => [
              ln(l, {
                shrink: "",
                class: "mb-1"
              }, {
                default: An(() => [
                  rl("h5", {
                    class: "my-0 cx-search-suggestion__source-title",
                    textContent: il(n.suggestion.title)
                  }, null, 8, a6)
                ]),
                _: 1
              }),
              ln(l, {
                shrink: "",
                class: "mb-1"
              }, {
                default: An(() => [
                  rl("p", {
                    class: "ma-0 cx-search-suggestion__source-description complementary",
                    textContent: il(n.suggestion.description)
                  }, null, 8, i6)
                ]),
                _: 1
              }),
              ln(l, {
                class: "cx-search-suggestion__languages",
                shrink: "",
                align: "center"
              }, {
                default: An(() => [
                  ln(u, {
                    icon: o.mwIconLanguage,
                    size: 16,
                    class: "me-2"
                  }, null, 8, ["icon"]),
                  rl("small", {
                    textContent: il(n.suggestion.langLinksCount)
                  }, null, 8, r6)
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
const th = /* @__PURE__ */ P(n6, [["render", l6]]), c6 = window.Vue.computed, wm = window.Vue.ref, u6 = window.Vue.watch, d6 = (e, t) => {
  const o = wm([]), s = wm(!1), a = c6(
    () => o.value.slice(0, 4)
  ), i = Jl(() => C(void 0, null, function* () {
    try {
      o.value = yield uo.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      s.value = !1;
    }
  }), 500);
  return u6(t, () => {
    s.value = !0, o.value = [], i();
  }), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
};
const g6 = window.Vue.computed, m6 = window.Vuex.useStore, p6 = {
  name: "SearchResultsCard",
  components: { SxSearchArticleSuggestion: th, MwCard: et, MwSpinner: tt },
  props: {
    searchInput: {
      type: String,
      default: null
    }
  },
  emits: ["suggestion-clicked"],
  setup(e) {
    const { sourceLanguage: t, sourceLanguageAutonym: n } = O(
      m6()
    ), o = g6(() => e.searchInput), { searchResultsLoading: s, searchResultsSlice: a } = d6(
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
}, ll = window.Vue.resolveComponent, is = window.Vue.openBlock, cl = window.Vue.createBlock, h6 = window.Vue.createCommentVNode, w6 = window.Vue.resolveDirective, f6 = window.Vue.withDirectives, fm = window.Vue.createElementBlock, _6 = window.Vue.renderList, v6 = window.Vue.Fragment, S6 = window.Vue.withCtx, y6 = {
  key: 1,
  class: "sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
};
function C6(e, t, n, o, s, a) {
  const i = ll("mw-spinner"), l = ll("sx-search-article-suggestion"), u = ll("mw-card"), g = w6("i18n");
  return is(), cl(u, { class: "sx-article-search__results mb-0 pa-4" }, {
    default: S6(() => [
      o.searchResultsLoading ? (is(), cl(i, { key: 0 })) : o.searchResultsSlice.length === 0 ? f6((is(), fm("p", y6, null, 512)), [
        [g, [
          n.searchInput,
          o.sourceLanguageAutonym
        ], "cx-sx-article-search-no-search-results-message"]
      ]) : h6("", !0),
      (is(!0), fm(v6, null, _6(o.searchResultsSlice, (r) => (is(), cl(l, {
        key: r.pageid,
        suggestion: r,
        onClick: (c) => e.$emit("suggestion-clicked", r)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ]),
    _: 1
  });
}
const k6 = /* @__PURE__ */ P(p6, [["render", C6]]);
const x6 = window.Vuex.mapState, b6 = {
  name: "ArticleSuggestionsCard",
  components: { SxSearchArticleSuggestion: th, MwCard: et },
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
  computed: te({}, x6({
    sourceLanguage: (e) => e.application.sourceLanguage
  }))
}, $6 = window.Vue.toDisplayString, V6 = window.Vue.createElementVNode, E6 = window.Vue.renderList, A6 = window.Vue.Fragment, ul = window.Vue.openBlock, D6 = window.Vue.createElementBlock, _m = window.Vue.resolveComponent, vm = window.Vue.createBlock, Sm = window.Vue.withCtx, L6 = ["textContent"];
function T6(e, t, n, o, s, a) {
  const i = _m("sx-search-article-suggestion"), l = _m("mw-card");
  return ul(), vm(l, { class: "sx-article-search__suggestions mb-0 pa-4" }, {
    header: Sm(() => [
      V6("h5", {
        class: "ma-0 pb-1 sx-article-search__suggestions-header",
        textContent: $6(n.cardTitle)
      }, null, 8, L6)
    ]),
    default: Sm(() => [
      (ul(!0), D6(A6, null, E6(n.suggestions, (u) => (ul(), vm(i, {
        key: u.pageid,
        suggestion: u,
        onClick: (g) => e.$emit("suggestion-clicked", u)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ]),
    _: 1
  });
}
const ym = /* @__PURE__ */ P(b6, [["render", T6]]), B6 = window.Vue.computed, P6 = (e, t) => B6(() => {
  const o = {
    value: "other",
    props: {
      icon: nf,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  }, s = [
    e.value,
    ...t.value.slice(0, 2)
  ];
  return [...s.filter(
    (i, l) => s.findIndex((u) => u === i) === l
  ).map((i) => ({
    value: i,
    props: {
      label: q.getAutonym(i),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), o];
}), F6 = window.Vue.computed, M6 = (e, t, n) => F6(() => {
  const o = (navigator.language || "").split("-")[0], s = (mw.config.get("wgULSAcceptLanguageList") || navigator.languages || []).map((i) => i.split("-")[0]), a = [
    // User's current interface language
    mw.config.get("wgUserLanguage"),
    // Current wiki's content language
    mw.config.get("wgContentLanguage"),
    o,
    ...n.value,
    ...s
  ];
  return [...new Set(a)].filter(
    (i) => i !== e.value && i !== t.value && q.getAutonym(i) !== i
  );
});
const N6 = window.Vue.resolveDirective, U6 = window.Vue.createElementVNode, dl = window.Vue.withDirectives, ye = window.Vue.unref, rs = window.Vue.withCtx, ut = window.Vue.createVNode, ls = window.Vue.openBlock, Cm = window.Vue.createBlock, I6 = window.Vue.createCommentVNode, gl = window.Vue.createElementBlock, z6 = window.Vue.Fragment, R6 = window.Vue.vShow, O6 = { class: "sx-article-search" }, H6 = { class: "mb-0" }, j6 = {
  key: 2,
  class: "sx-article-search__empty-suggestions-message mt-12 pa-4 mb-0"
}, cs = window.Vue.ref, q6 = window.Vue.onMounted, ml = window.Vue.computed, km = window.Vue.watch, G6 = window.Vue.inject, W6 = window.Vuex.useStore, X6 = window.Codex.CdxButton, K6 = window.Codex.CdxIcon, Y6 = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = cs(""), n = cs(!1), o = cs(null), s = cs(!1), a = cs([]), i = W6(), { sourceLanguage: l, targetLanguage: u } = O(i), { supportedLanguageCodes: g } = Es(), r = M6(
      l,
      u,
      a
    ), c = P6(
      l,
      r
    ), d = me(), { fetchAllTranslations: m } = Ja();
    q6(() => C(this, null, function* () {
      var N;
      yield bp()(), m();
      try {
        a.value.push(
          ...JSON.parse(localStorage.getItem("uls-previous-languages"))
        );
      } catch (oe) {
      }
      (N = o.value) == null || N.focus();
    }));
    const p = () => {
      d.push({ name: "dashboard" });
    }, h = $p(), w = (F) => h(F, u.value), f = (F) => {
      if (F === "other") {
        s.value = !0;
        return;
      }
      w(F);
    };
    km(l, () => i.dispatch("mediawiki/fetchNearbyPages"), {
      immediate: !0
    });
    const _ = wt();
    km(t, () => {
      n.value || (n.value = !0, _({
        event_type: "dashboard_search",
        translation_source_language: l.value,
        translation_target_language: u.value
      }));
    });
    const S = () => {
      s.value = !1;
    }, y = (F) => {
      s.value = !1, a.value.push(F), f(F);
    }, D = ml(
      () => i.getters["mediawiki/getRecentlyEditedPages"]
    ), T = ml(() => i.getters["mediawiki/getNearbyPages"]), U = G6("breakpoints"), V = ml(() => U.value.tabletAndDown), L = Bs(), H = (F, N) => L(
      F.title,
      l.value,
      u.value,
      N
    );
    return (F, N) => {
      const oe = N6("i18n");
      return ls(), gl("section", O6, [
        ut(ye(B), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: rs(() => [
            ut(ye(k), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: rs(() => [
                dl(U6("h5", H6, null, 512), [
                  [oe, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            ut(ye(k), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: rs(() => [
                ut(ye(X6), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": F.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: p
                }, {
                  default: rs(() => [
                    ut(ye(K6), { icon: ye(go) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        ut(ye(Tl), {
          ref_key: "searchInputRef",
          ref: o,
          value: t.value,
          "onUpdate:value": N[0] || (N[0] = (Q) => t.value = Q),
          "icon-size": 20,
          icon: ye($m),
          placeholder: F.$i18n("cx-sx-article-search-input-placeholder"),
          type: "search"
        }, null, 8, ["value", "icon", "placeholder"]),
        ut(ye(vs), {
          class: "sx-article-search__language-button-group",
          items: ye(c),
          active: ye(l),
          onSelect: f
        }, null, 8, ["items", "active"]),
        t.value ? I6("", !0) : (ls(), gl(z6, { key: 0 }, [
          D.value && D.value.length ? (ls(), Cm(ym, {
            key: 0,
            "card-title": F.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: D.value,
            onSuggestionClicked: N[1] || (N[1] = (Q) => H(Q, "suggestion_recent_edit"))
          }, null, 8, ["card-title", "suggestions"])) : T.value && T.value.length ? (ls(), Cm(ym, {
            key: 1,
            "card-title": F.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: T.value,
            onSuggestionClicked: N[2] || (N[2] = (Q) => H(Q, "suggestion_nearby"))
          }, null, 8, ["card-title", "suggestions"])) : dl((ls(), gl("p", j6, null, 512)), [
            [oe, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        dl(ut(k6, {
          "search-input": t.value,
          onSuggestionClicked: N[3] || (N[3] = (Q) => H(Q, "search_result"))
        }, null, 8, ["search-input"]), [
          [R6, !!t.value]
        ]),
        ut(ye(qe), {
          value: s.value,
          "onUpdate:value": N[4] || (N[4] = (Q) => s.value = Q),
          class: "sx-article-search-language-selector",
          animation: "slide-up",
          fullscreen: V.value,
          header: V.value,
          "overlay-opacity": 0,
          title: F.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: S
        }, {
          default: rs(() => [
            ut(ye(Ip), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: ye(g),
              suggestions: ye(r),
              placeholder: F.$i18n("cx-sx-language-selector-placeholder"),
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
const Q6 = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: Y6
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.tabletAndDown })
  }
}, J6 = window.Vue.resolveComponent, Z6 = window.Vue.createVNode, e9 = window.Vue.normalizeClass, t9 = window.Vue.openBlock, n9 = window.Vue.createElementBlock;
function o9(e, t, n, o, s, a) {
  const i = J6("sx-article-search");
  return t9(), n9("main", {
    class: e9(["sx-article-search-view", a.classes])
  }, [
    Z6(i)
  ], 2);
}
const s9 = /* @__PURE__ */ P(Q6, [["render", o9]]), a9 = window.Vuex.useStore, nh = [
  {
    path: "",
    name: "dashboard",
    component: bd,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: s9,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: $4,
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: Q$,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: kV,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: CD,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: qA,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: mL,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: t6,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: bd,
    meta: { workflowStep: 0 }
  }
], cc = WS({
  history: Gv(),
  routes: nh
});
cc.beforeEach((e, t, n) => {
  const o = a9();
  if (o.commit("application/setPreviousRoute", t.name), mw.user.isAnon() || Am.assertUser().catch((l) => {
    l instanceof io && o.commit("application/setIsLoginDialogOn", !0);
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
    const l = Math.ceil(a) - 1, u = nh.find(
      (g) => g.meta.workflowStep === l
    );
    n({ name: u.name });
    return;
  }
  n();
});
cc.afterEach((e, t) => {
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const i9 = window.Vue.createApp, r9 = mw.config.get("wgUserLanguage"), l9 = "en", c9 = mw.messages.values || {}, po = i9(q_);
po.use(cc);
po.use(pv);
po.use(W0);
po.use(G0);
const u9 = $_({
  locale: r9,
  finalFallback: l9,
  messages: c9,
  wikilinks: !0
});
po.use(u9);
po.mount("#contenttranslation");
