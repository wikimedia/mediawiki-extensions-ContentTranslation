/*@nomin*/
var bh = Object.defineProperty, $h = Object.defineProperties;
var Vh = Object.getOwnPropertyDescriptors;
var xc = Object.getOwnPropertySymbols;
var Eh = Object.prototype.hasOwnProperty, Ah = Object.prototype.propertyIsEnumerable;
var bc = (e, t, n) => t in e ? bh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ne = (e, t) => {
  for (var n in t || (t = {}))
    Eh.call(t, n) && bc(e, n, t[n]);
  if (xc)
    for (var n of xc(t))
      Ah.call(t, n) && bc(e, n, t[n]);
  return e;
}, Re = (e, t) => $h(e, Vh(t));
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
const F = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, Dh = {
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
}, Lh = window.Vue.toDisplayString, ci = window.Vue.openBlock, ui = window.Vue.createElementBlock, Th = window.Vue.createCommentVNode, $c = window.Vue.createElementVNode, Bh = window.Vue.normalizeClass, Ph = ["width", "height", "aria-labelledby"], Fh = ["id"], Mh = ["fill"], Nh = ["d"];
function Uh(e, t, n, o, s, a) {
  return ci(), ui("span", {
    class: Bh(["mw-ui-icon notranslate", a.classes])
  }, [
    (ci(), ui("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...r) => a.handleClick && a.handleClick(...r))
    }, [
      n.iconName ? (ci(), ui("title", {
        key: 0,
        id: n.iconName
      }, Lh(n.iconName), 9, Fh)) : Th("", !0),
      $c("g", { fill: n.iconColor }, [
        $c("path", { d: a.iconImagePath }, null, 8, Nh)
      ], 8, Mh)
    ], 8, Ph))
  ], 2);
}
const Ee = /* @__PURE__ */ F(Dh, [["render", Uh]]);
const Ih = {
  name: "MwButton",
  components: {
    MwIcon: Ee
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
}, zh = window.Vue.renderSlot, Rh = window.Vue.resolveComponent, Vc = window.Vue.normalizeClass, Rs = window.Vue.openBlock, di = window.Vue.createBlock, gi = window.Vue.createCommentVNode, Oh = window.Vue.toDisplayString, Hh = window.Vue.createElementBlock, jh = window.Vue.toHandlerKey, qh = window.Vue.withModifiers, Gh = window.Vue.mergeProps, Wh = window.Vue.createElementVNode, Xh = window.Vue.resolveDynamicComponent, Kh = window.Vue.withCtx, Yh = { class: "mw-ui-button__content" }, Jh = ["textContent"];
function Qh(e, t, n, o, s, a) {
  const r = Rh("mw-icon");
  return Rs(), di(Xh(a.component), {
    class: Vc(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: Kh(() => [
      zh(e.$slots, "default", {}, () => [
        Wh("span", Yh, [
          n.icon ? (Rs(), di(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: Vc(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : gi("", !0),
          !a.isIcon && n.label ? (Rs(), Hh("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: Oh(n.label)
          }, null, 8, Jh)) : gi("", !0),
          n.indicator ? (Rs(), di(r, Gh({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [jh(a.indicatorClickEvent)]: t[0] || (t[0] = qh((l) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : gi("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const xe = /* @__PURE__ */ F(Ih, [["render", Qh]]);
const Zh = {
  name: "MwButtonGroup",
  components: {
    MwButton: xe
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
}, ew = window.Vue.renderList, tw = window.Vue.Fragment, mi = window.Vue.openBlock, Ec = window.Vue.createElementBlock, nw = window.Vue.resolveComponent, ow = window.Vue.withModifiers, sw = window.Vue.mergeProps, aw = window.Vue.createBlock, iw = { class: "row mw-ui-button-group ma-0 pa-0" };
function rw(e, t, n, o, s, a) {
  const r = nw("mw-button");
  return mi(), Ec("div", iw, [
    (mi(!0), Ec(tw, null, ew(n.items, (l) => (mi(), aw(r, sw({
      key: l.value,
      value: l.value,
      "aria-selected": a.isActive(l) || null,
      ref_for: !0
    }, l.props, {
      class: ["ma-0", a.buttonClasses(l)],
      style: a.activeIndicatorStyle(l),
      onClick: ow((u) => e.$emit("select", l.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const ks = /* @__PURE__ */ F(Zh, [["render", rw]]);
const lw = window.Vue.renderSlot, cw = window.Vue.unref, uw = window.Vue.createVNode, dw = window.Vue.createElementVNode, gw = window.Vue.openBlock, pw = window.Vue.createElementBlock, hw = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, ww = { class: "col-12 ma-0 pa-0" }, fw = {
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
    return (t, n) => (gw(), pw("footer", hw, [
      dw("div", ww, [
        lw(t.$slots, "default", {}, () => [
          uw(cw(ks), {
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
}, Ac = window.Vue.renderSlot, vw = window.Vue.toDisplayString, Dc = window.Vue.openBlock, Lc = window.Vue.createElementBlock, Sw = window.Vue.createCommentVNode, yw = window.Vue.createElementVNode, Cw = { class: "mw-ui-card" }, kw = ["textContent"], xw = { class: "mw-ui-card__content" };
function bw(e, t, n, o, s, a) {
  return Dc(), Lc("div", Cw, [
    Ac(e.$slots, "header", {}, () => [
      n.title ? (Dc(), Lc("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: vw(n.title)
      }, null, 8, kw)) : Sw("", !0)
    ]),
    yw("div", xw, [
      Ac(e.$slots, "default")
    ])
  ]);
}
const it = /* @__PURE__ */ F(_w, [["render", bw]]);
const $w = {}, Vw = window.Vue.openBlock, Ew = window.Vue.createElementBlock, Aw = { class: "mw-ui-divider row" };
function Dw(e, t) {
  return Vw(), Ew("div", Aw);
}
const Xa = /* @__PURE__ */ F($w, [["render", Dw]]);
const Lw = {
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
const Uw = /* @__PURE__ */ F(Lw, [["render", Nw]]), Iw = {
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
}, zw = window.Vue.renderSlot, Rw = window.Vue.resolveDynamicComponent, Ow = window.Vue.normalizeClass, Hw = window.Vue.withCtx, jw = window.Vue.openBlock, qw = window.Vue.createBlock;
function Gw(e, t, n, o, s, a) {
  return jw(), qw(Rw(n.tag), {
    class: Ow(a.classes)
  }, {
    default: Hw(() => [
      zw(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const B = /* @__PURE__ */ F(Iw, [["render", Gw]]), _l = ["mobile", "tablet", "desktop", "desktop-wide"], Ww = _l.reduce(
  (e, t) => Re(ne({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), Xw = {
  name: "MwCol",
  props: Re(ne({}, Ww), {
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
      for (let n = 0; n < _l.length; n++) {
        let o = _l[n], s = this.$props[o];
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
}, Kw = window.Vue.renderSlot, Yw = window.Vue.resolveDynamicComponent, Jw = window.Vue.normalizeClass, Qw = window.Vue.withCtx, Zw = window.Vue.openBlock, ef = window.Vue.createBlock;
function tf(e, t, n, o, s, a) {
  return Zw(), ef(Yw(n.tag), {
    class: Jw(a.classes)
  }, {
    default: Qw(() => [
      Kw(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const k = /* @__PURE__ */ F(Xw, [["render", tf]]), nf = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", of = "M3 3H1v16h18v-2H3z M11 11L8 9l-4 4v3h14V5z", sf = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", Ka = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", af = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, rf = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", lf = "M20 7h-7L10 .5 7 7H0l5.46 5.47-1.64 7 6.18-3.7 6.18 3.73-1.63-7zm-10 6.9l-3.76 2.27 1-4.28L3.5 8.5h4.61L10 4.6l1.9 3.9h4.6l-3.73 3.4 1 4.28z", Pm = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", vl = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", Pl = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", uo = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", cf = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", uf = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", Fm = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", Mm = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", df = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", Nm = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", gf = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", mf = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", pf = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", hf = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", wf = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", ff = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, ao = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, _f = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, Fl = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, vf = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, Ml = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", Sf = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z", yf = "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 5h2v2H9zm0 4h2v6H9z", Cf = "M 19 3 L 2 7 A 3.83 3.83 0 0 0 1 9.5 A 3.83 3.83 0 0 0 2 12 L 4 12.470703 L 4 15 C 4 16.108 4.892 17 6 17 C 7.108 17 8 16.108 8 15 L 8 13.412109 L 19 16 L 19 3 z";
const pi = window.Vue.computed, kf = window.Vue.watch, xf = window.Vue.ref, bf = window.Vue.nextTick, $f = {
  name: "MwDialog",
  components: {
    MwButton: xe,
    MwRow: B,
    MwCol: k,
    MwDivider: Xa
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
    const n = xf(null), o = pi(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = pi(() => ({
      "background-color": e.overlayColor,
      opacity: e.overlayOpacity
    })), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, r = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    kf(
      () => e.value,
      (u) => {
        u ? (r(), bf(() => {
          n.value.focus();
        })) : a();
      }
    );
    const l = pi(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: l,
      overlayStyles: s,
      mwIconClose: uo,
      root: n
    };
  }
}, Tc = window.Vue.normalizeStyle, hi = window.Vue.createElementVNode, wi = window.Vue.renderSlot, Os = window.Vue.resolveComponent, yo = window.Vue.createVNode, fi = window.Vue.withCtx, Bc = window.Vue.createCommentVNode, Vf = window.Vue.withKeys, Ef = window.Vue.normalizeClass, Pc = window.Vue.openBlock, Af = window.Vue.createElementBlock, Df = window.Vue.Transition, Lf = window.Vue.createBlock, Tf = { class: "mw-ui-dialog__shell items-stretch" }, Bf = { class: "mw-ui-dialog__body" };
function Pf(e, t, n, o, s, a) {
  const r = Os("mw-col"), l = Os("mw-button"), u = Os("mw-row"), d = Os("mw-divider");
  return Pc(), Lf(Df, {
    name: `mw-ui-animation-${n.animation}`,
    style: Tc(o.cssVars)
  }, {
    default: fi(() => [
      n.value ? (Pc(), Af("div", {
        key: 0,
        ref: "root",
        class: Ef(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = Vf((i) => n.closeOnEscapeKey && o.close, ["esc"]))
      }, [
        hi("div", {
          class: "mw-ui-dialog__overlay",
          style: Tc(o.overlayStyles),
          onClick: t[0] || (t[0] = (i) => !n.persistent && o.close)
        }, null, 4),
        hi("div", Tf, [
          n.header ? wi(e.$slots, "header", { key: 0 }, () => [
            yo(u, { class: "mw-ui-dialog__header" }, {
              default: fi(() => [
                yo(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                yo(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: fi(() => [
                    yo(l, {
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
            yo(d)
          ]) : Bc("", !0),
          hi("div", Bf, [
            wi(e.$slots, "default")
          ]),
          wi(e.$slots, "footer")
        ])
      ], 34)) : Bc("", !0)
    ]),
    _: 3
  }, 8, ["name", "style"]);
}
const Ye = /* @__PURE__ */ F($f, [["render", Pf]]);
const Ff = {
  name: "MwInput",
  components: {
    MwIcon: Ee
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
      const t = ne({}, e.$attrs);
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
}, Fc = window.Vue.renderSlot, Mf = window.Vue.resolveComponent, Hs = window.Vue.openBlock, _i = window.Vue.createBlock, Mc = window.Vue.createCommentVNode, Nf = window.Vue.resolveDynamicComponent, Uf = window.Vue.toDisplayString, If = window.Vue.mergeProps, zf = window.Vue.withModifiers, Rf = window.Vue.createElementVNode, Of = window.Vue.normalizeClass, Hf = window.Vue.createElementBlock, jf = { class: "mw-ui-input__content" };
function qf(e, t, n, o, s, a) {
  const r = Mf("mw-icon");
  return Hs(), Hf("div", {
    class: Of(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    Rf("div", jf, [
      Fc(e.$slots, "icon", {}, () => [
        n.icon ? (Hs(), _i(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : Mc("", !0)
      ]),
      (Hs(), _i(Nf(n.type === "textarea" ? n.type : "input"), If({
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
        textContent: Uf(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      Fc(e.$slots, "indicator", {}, () => [
        n.indicator ? (Hs(), _i(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = zf((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : Mc("", !0)
      ])
    ])
  ], 2);
}
const Nl = /* @__PURE__ */ F(Ff, [["render", qf]]);
const Gf = {
  name: "MwMessage",
  components: { MwCol: k, MwRow: B, MwIcon: Ee, MwButton: xe },
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
    mwIconClose: uo,
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
      notice: ff,
      warning: Fl,
      success: ao,
      error: _f
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
}, vi = window.Vue.renderSlot, js = window.Vue.resolveComponent, Nc = window.Vue.createVNode, Uc = window.Vue.withCtx, Ic = window.Vue.openBlock, zc = window.Vue.createBlock, Rc = window.Vue.createCommentVNode, Wf = window.Vue.normalizeClass;
function Xf(e, t, n, o, s, a) {
  const r = js("mw-icon"), l = js("mw-col"), u = js("mw-button"), d = js("mw-row");
  return e.shown ? (Ic(), zc(d, {
    key: 0,
    class: Wf([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: Uc(() => [
      vi(e.$slots, "icon", {}, () => [
        Nc(r, {
          icon: a.icon,
          size: 24,
          class: "col shrink mw-ui-message__icon pa-1 items-start"
        }, null, 8, ["icon"])
      ]),
      Nc(l, {
        id: `${e.id}-label`,
        tag: "span",
        grow: "",
        align: "center",
        class: "mw-ui-message__label"
      }, {
        default: Uc(() => [
          vi(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id"]),
      vi(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (Ic(), zc(u, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : Rc("", !0)
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : Rc("", !0);
}
const Kf = /* @__PURE__ */ F(Gf, [["render", Xf]]);
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
const Yf = {}, Jf = window.Vue.createElementVNode, Qf = window.Vue.openBlock, Zf = window.Vue.createElementBlock, e0 = { class: "mw-ui-spinner" }, t0 = /* @__PURE__ */ Jf("div", { class: "mw-ui-spinner__bounce" }, null, -1), n0 = [
  t0
];
function o0(e, t) {
  return Qf(), Zf("div", e0, n0);
}
const Xe = /* @__PURE__ */ F(Yf, [["render", o0]]), We = {
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
const s0 = window.Vue.computed, a0 = {
  name: "MwUiThumbnail",
  components: { MwUiIcon: Ee },
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
      default: Ml
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: We.gray600
    },
    placeholderBackgroundColor: {
      type: String,
      default: We.gray200
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = s0(() => {
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
}, Oc = window.Vue.normalizeStyle, Hc = window.Vue.openBlock, i0 = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const r0 = window.Vue.resolveComponent, l0 = window.Vue.createBlock;
function c0(e, t, n, o, s, a) {
  const r = r0("mw-ui-icon");
  return n.thumbnail ? (Hc(), i0("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Oc(o.style)
  }, null, 4)) : (Hc(), l0(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Oc(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Ul = /* @__PURE__ */ F(a0, [["render", c0]]);
const u0 = {
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
}, d0 = window.Vue.vModelRadio, Ga = window.Vue.createElementVNode, g0 = window.Vue.withDirectives, m0 = window.Vue.toDisplayString, p0 = window.Vue.resolveComponent, h0 = window.Vue.normalizeClass, w0 = window.Vue.withCtx, f0 = window.Vue.openBlock, _0 = window.Vue.createBlock, v0 = { class: "mw-ui-radio__controls" }, S0 = ["id", "disabled", "name", "value"], y0 = /* @__PURE__ */ Ga("span", { class: "mw-ui-radio__controls__icon" }, null, -1), C0 = ["for", "textContent"];
function k0(e, t, n, o, s, a) {
  const r = p0("mw-row");
  return f0(), _0(r, {
    class: h0(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: w0(() => [
      Ga("div", v0, [
        g0(Ga("input", {
          id: n.id,
          "onUpdate:modelValue": t[0] || (t[0] = (l) => a.inputModel = l),
          type: "radio",
          disabled: n.disabled || null,
          name: n.name,
          value: n.inputValue
        }, null, 8, S0), [
          [d0, a.inputModel]
        ]),
        y0
      ]),
      Ga("label", {
        for: n.id,
        class: "ps-2",
        textContent: m0(n.label)
      }, null, 8, C0)
    ]),
    _: 1
  }, 8, ["class"]);
}
const Sl = /* @__PURE__ */ F(u0, [["render", k0]]), jc = window.Vue.h, x0 = {
  name: "MwRadioGroup",
  components: { MwRadio: Sl },
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
      (o) => jc(Sl, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), jc("div", { class: "mw-ui-radio-group" }, n);
  }
};
const b0 = {
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
}, qc = window.Vue.normalizeClass, Gc = window.Vue.normalizeStyle, $0 = window.Vue.createElementVNode, V0 = window.Vue.openBlock, E0 = window.Vue.createElementBlock, A0 = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function D0(e, t, n, o, s, a) {
  return V0(), E0("div", {
    class: qc(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: Gc(a.containerStyles)
  }, [
    $0("div", {
      class: qc(["mw-progress-bar__bar", a.barClass]),
      style: Gc(a.barStyles)
    }, null, 6)
  ], 14, A0);
}
const Um = /* @__PURE__ */ F(b0, [["render", D0]]), L0 = (e, t, n, o) => (s) => {
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
}, T0 = (e, t, n, o) => ({ initiateDrag: L0(
  e,
  t,
  n,
  o
) }), B0 = window.Vue.ref, Wc = window.Vue.computed, P0 = (e, t, n, o) => {
  const s = B0(0), a = Wc(
    () => t.value > e.value
  ), r = Wc(
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
const qs = window.Vue.ref, F0 = window.Vue.onMounted, Xc = window.Vue.computed, M0 = window.Vue.nextTick, N0 = {
  name: "MwExpandableContent",
  components: {
    MwButton: xe
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
    const t = qs(!0), n = qs(null), o = Xc(
      () => Math.min(e.minHeight, s.value)
    ), s = qs(1), { initiateDrag: a } = T0(
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
    } = P0(o, s, n, t), c = () => d(u.value + 1), g = qs(null), m = Xc(() => ({
      "--collapsed-height": o.value + "px"
    })), p = () => {
      if (!n.value)
        return;
      const w = n.value.style.height;
      if (n.value.style.removeProperty("height"), s.value = n.value.scrollHeight, w) {
        let _ = Math.min(w, s.value);
        _ = Math.max(_, o.value), _ === o.value && (t.value = !0), n.value.style.height = _ + "px";
      }
    };
    return F0(() => C(this, null, function* () {
      var w;
      yield M0(), s.value = n.value.scrollHeight, (w = g.value) == null || w.addEventListener(
        "pointerdown",
        a,
        !1
      ), window.addEventListener("resize", p);
    })), {
      contentRef: n,
      cssVars: m,
      dragIndicatorRef: g,
      handleArrowUpClick: i,
      isCollapsed: t,
      isScrolledToEnd: r,
      mwIconCollapse: vf,
      mwIconExpand: vl,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), d(0)), t.value = !t.value;
      },
      scrollable: l,
      scrollIndex: u,
      scrollToNextStep: c
    };
  }
}, U0 = window.Vue.renderSlot, I0 = window.Vue.normalizeClass, Gs = window.Vue.createElementVNode, z0 = window.Vue.resolveComponent, R0 = window.Vue.createVNode, Si = window.Vue.openBlock, O0 = window.Vue.createBlock, Kc = window.Vue.createCommentVNode, Yc = window.Vue.createElementBlock, H0 = window.Vue.normalizeStyle, j0 = { class: "mw-ui-expandable-content__container" }, q0 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, G0 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function W0(e, t, n, o, s, a) {
  const r = z0("mw-button");
  return Si(), Yc("div", {
    class: "mw-ui-expandable-content",
    style: H0(o.cssVars)
  }, [
    Gs("div", j0, [
      Gs("div", {
        ref: "contentRef",
        class: I0(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        U0(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (Si(), Yc("div", q0, [
        R0(r, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (Si(), O0(r, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : Kc("", !0)
      ])) : Kc("", !0)
    ]),
    Gs("div", G0, [
      Gs("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...l) => o.onDragButtonClicked && o.onDragButtonClicked(...l))
      })
    ], 512)
  ], 4);
}
const X0 = /* @__PURE__ */ F(N0, [["render", W0]]);
const Ws = window.Vue.computed, K0 = {
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
      default: We.blue600
    },
    inactiveColor: {
      type: String,
      default: We.gray300
    },
    strokeWidth: {
      type: Number,
      default: 2
    }
  },
  setup(e) {
    const t = Ws(() => e.size / 2 * 0.9), n = Ws(() => Math.PI * (t.value * 2)), o = Ws(
      () => (100 - e.percentage) / 100 * n.value
    ), s = Ws(() => ({
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
}, Jc = window.Vue.createElementVNode, Qc = window.Vue.normalizeStyle, Y0 = window.Vue.openBlock, J0 = window.Vue.createElementBlock, Q0 = ["width", "height", "viewport"], Z0 = ["r", "cx", "cy", "stroke-dasharray"], e1 = ["r", "cx", "cy", "stroke-dasharray"];
function t1(e, t, n, o, s, a) {
  return Y0(), J0("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: Qc(o.cssVars)
  }, [
    Jc("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, Z0),
    Jc("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: Qc({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, e1)
  ], 12, Q0);
}
const n1 = /* @__PURE__ */ F(K0, [["render", t1]]), o1 = window.Vue.ref, Xt = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, Kt = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${Xt.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${Xt.tablet}px) and (max-width: ${Xt.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${Xt.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${Xt.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${Xt.desktopwide - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${Xt.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${Xt["desktop-wide"]}px)`
}, yi = {
  mobile: () => matchMedia(Kt.mobile).matches,
  tablet: () => matchMedia(Kt.tablet).matches,
  desktop: () => matchMedia(Kt.desktop).matches,
  desktopwide: () => matchMedia(Kt["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(Kt["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(Kt["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(Kt["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(Kt["desktop-and-down"]).matches
}, s1 = {
  install: (e) => {
    const t = () => {
      for (let o in yi)
        yi.hasOwnProperty(o) && (n.value[o] = yi[o]());
    }, n = o1({});
    t(), window.addEventListener("resize", t), e.config.globalProperties.$mwui = Re(ne({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: n.value
    }), e.provide("breakpoints", n);
  }
}, a1 = {
  install: (e) => {
    e.config.globalProperties.$mwui = Re(ne({}, e.config.globalProperties.$mwui || {}), {
      colors: We
    }), e.provide("colors", We);
  }
};
class go extends Error {
}
const i1 = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new go();
}), Im = { assertUser: i1 };
const r1 = window.Vue.resolveDirective, Co = window.Vue.createElementVNode, Zc = window.Vue.withDirectives, l1 = window.Vue.toDisplayString, c1 = window.Vue.unref, eu = window.Vue.withCtx, u1 = window.Vue.openBlock, d1 = window.Vue.createBlock, g1 = window.Vue.createCommentVNode, m1 = { class: "pa-4 sx-login-dialog__header" }, p1 = { class: "sx-login-dialog__body px-6 pb-4" }, h1 = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, w1 = ["href"], f1 = window.Vue.computed, _1 = window.Vue.ref, v1 = window.Vuex.useStore, S1 = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = v1(), n = f1(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = _1(mw.util.getUrl("Special:UserLogin"));
    return (a, r) => {
      const l = r1("i18n");
      return n.value ? (u1(), d1(c1(Ye), {
        key: 0,
        "overlay-opacity": 0.25,
        "overlay-color": "#000",
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: eu(() => [
          Co("div", m1, [
            Zc(Co("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: eu(() => [
          Zc(Co("div", p1, null, 512), [
            [l, void 0, "cx-sx-login-dialog-body"]
          ]),
          Co("div", h1, [
            Co("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, l1(a.$i18n("cx-sx-login-dialog-button-label")), 9, w1)
          ])
        ]),
        _: 1
      })) : g1("", !0);
    };
  }
}, G = new mw.cx.SiteMapper(), y1 = mw.util.getUrl, C1 = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
};
class Ya {
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
const Xs = "original", Ks = "empty", k1 = {
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
      Xs,
      Ks
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return k1[t] || t;
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
    return Xs;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return Ks;
  }
  static isUserMTProvider(t) {
    return [Xs, Ks].includes(
      t
    );
  }
  static getProviderForInstrumentation(t) {
    return t === Ks ? "blank" : t === Xs ? "source" : t.toLowerCase();
  }
}
class mn {
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = Re(ne({}, a), {
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
const tu = (e) => {
  var n;
  const t = Wa(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, Wa = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, Mn = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), zm = (e) => {
  const t = Wa(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = x1(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, x1 = (e) => {
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
}, Rm = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, Om = (e) => {
  const t = Rm(e);
  return t == null ? void 0 : t.targetExists;
};
class Ci {
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
let Pe = class {
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
      (a) => Mn(a)
    );
    s && Om(s) && (this.blockTemplateAdaptationInfo[t] = Rm(s));
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
      (t) => Mn(t)
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
    const t = Wa(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? tu(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => Mn(o));
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
    return n && tu(n) || "";
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
    const o = Wa(n);
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
      (a) => Mn(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new Ci({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new Ci({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new Ci({
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
        (s) => Mn(s)
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
const b1 = [
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
], $1 = (e, t, n) => {
  let o, s, a, r, l;
  return !e || !t ? 0 : e === t ? 1 : (s = r = nu(e, n), a = l = nu(t, n), l.length > r.length && (s = l, a = r), o = s.filter(function(u) {
    return a.indexOf(u) >= 0;
  }), o.length / s.length);
}, nu = function(e, t) {
  return e ? b1.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, Hm = 95, V1 = 85, E1 = [
  { status: "failure", value: 100 - Hm },
  { status: "warning", value: 100 - V1 },
  { status: "success", value: 100 }
], jm = (e, t, n) => {
  const o = ou(e).textContent, s = ou(t).textContent, a = 100 - 100 * $1(s, o, n);
  return Math.ceil(a);
}, A1 = (e) => E1.find((t) => e <= t.value).status, D1 = (e, t) => jm(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), L1 = () => (100 - Hm) / 100, ou = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, ht = {
  calculateScore: jm,
  getScoreStatus: A1,
  getMTScoreForPageSection: D1,
  getMtModificationThreshold: L1
}, Ys = "__LEAD_SECTION__";
class yl {
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
    return Ys;
  }
  static isSectionLead(t) {
    return !t || t === Ys;
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
    return n instanceof Pe ? n.transclusionNode.outerHTML : n instanceof mn ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof Pe ? t.blockTemplateSelected = !1 : t instanceof mn && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof Pe ? n.blockTemplateSelected = !0 : n instanceof mn && (n.selected = !0);
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
    if (o instanceof Pe)
      return !!o.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (o instanceof mn)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof Pe ? n.blockTemplateProposedTranslations[t] || "" : n instanceof mn ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof Pe ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof mn && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const o = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, s = ht.getMTScoreForPageSection(this, t) / 100;
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
    return this.isLeadSection ? Ys : this.originalTitle;
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
    return this.isLeadSection ? Ys : this.title;
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
class Il extends Ya {
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
    targetSectionTitle: m,
    progress: p
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
    }), this.sectionTranslationId = t, this.sectionId = o, this.sourceSectionTitle = g, this.targetSectionTitle = m, this.progress = p, this.restored = !1;
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
    return yl.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? yl.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const wt = "previous-edits", jt = "popular", ft = "topic", de = "collections", Fe = "automatic", su = window.Vue.ref, T1 = mw.loader.require("ext.cx.articletopics"), au = {
  type: Fe,
  id: wt
}, B1 = () => {
  const e = su(
    T1.flatMap((o) => o.topics).map((o) => o.topicId.toLowerCase())
  ), t = su(!1);
  return { filtersValidatorError: t, validateFilters: ({ type: o, id: s }) => {
    t.value = !1;
    const a = o == null ? void 0 : o.toLowerCase(), r = s == null ? void 0 : s.toLowerCase();
    return a === ft ? e.value.some((l) => l === s) ? { type: a, id: r } : (t.value = !0, au) : a === de ? { type: a, id: s } : r === wt ? {
      type: Fe,
      id: wt
    } : r === jt ? {
      type: Fe,
      id: jt
    } : r === de ? {
      type: Fe,
      id: de
    } : au;
  } };
}, P1 = window.Vue.inject, F1 = window.Vue.reactive;
var M1 = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, qm = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(M1, function() {
    var n = { ar: "٠١٢٣٤٥٦٧٨٩", fa: "۰۱۲۳۴۵۶۷۸۹", ml: "൦൧൨൩൪൫൬൭൮൯", kn: "೦೧೨೩೪೫೬೭೮೯", lo: "໐໑໒໓໔໕໖໗໘໙", or: "୦୧୨୩୪୫୬୭୮୯", kh: "០១២៣៤៥៦៧៨៩", nqo: "߀߁߂߃߄߅߆߇߈߉", pa: "੦੧੨੩੪੫੬੭੮੯", gu: "૦૧૨૩૪૫૬૭૮૯", hi: "०१२३४५६७८९", my: "၀၁၂၃၄၅၆၇၈၉", ta: "௦௧௨௩௪௫௬௭௮௯", te: "౦౧౨౩౪౫౬౭౮౯", th: "๐๑๒๓๔๕๖๗๘๙", bo: "༠༡༢༣༤༥༦༧༨༩" }, o = { ab: ["ru"], abs: ["id"], ace: ["id"], ady: ["ady-cyrl"], aeb: ["aeb-arab"], "aeb-arab": ["ar"], aln: ["sq"], alt: ["ru"], ami: ["zh-hant"], an: ["es"], anp: ["hi"], arn: ["es"], arq: ["ar"], ary: ["ar"], arz: ["ar"], ast: ["es"], atj: ["fr"], av: ["ru"], avk: ["fr", "es", "ru"], awa: ["hi"], ay: ["es"], azb: ["fa"], ba: ["ru"], ban: ["id"], "ban-bali": ["ban"], bar: ["de"], bbc: ["bbc-latn"], "bbc-latn": ["id"], bcc: ["fa"], "be-tarask": ["be"], bgn: ["fa"], bh: ["bho"], bi: ["en"], bjn: ["id"], bm: ["fr"], bpy: ["bn"], bqi: ["fa"], br: ["fr"], btm: ["id"], bug: ["id"], bxr: ["ru"], ca: ["oc"], "cbk-zam": ["es"], cdo: ["nan", "zh-hant"], ce: ["ru"], co: ["it"], crh: ["crh-latn"], "crh-cyrl": ["ru"], cs: ["sk"], csb: ["pl"], cv: ["ru"], "de-at": ["de"], "de-ch": ["de"], "de-formal": ["de"], dsb: ["hsb", "de"], dtp: ["ms"], dty: ["ne"], egl: ["it"], eml: ["it"], "en-ca": ["en"], "en-gb": ["en"], "es-419": ["es"], "es-formal": ["es"], ext: ["es"], ff: ["fr"], fit: ["fi"], frc: ["fr"], frp: ["fr"], frr: ["de"], fur: ["it"], gag: ["tr"], gan: ["gan-hant", "zh-hant", "zh-hans"], "gan-hans": ["zh-hans"], "gan-hant": ["zh-hant", "zh-hans"], gcr: ["fr"], gl: ["pt"], glk: ["fa"], gn: ["es"], gom: ["gom-deva"], "gom-deva": ["hi"], gor: ["id"], gsw: ["de"], guc: ["es"], hak: ["zh-hant"], hif: ["hif-latn"], hrx: ["de"], hsb: ["dsb", "de"], ht: ["fr"], "hu-formal": ["hu"], hyw: ["hy"], ii: ["zh-cn", "zh-hans"], inh: ["ru"], io: ["eo"], iu: ["ike-cans"], jam: ["en"], jut: ["da"], jv: ["id"], kaa: ["kk-latn", "kk-cyrl"], kab: ["fr"], kbd: ["kbd-cyrl"], kbp: ["fr"], khw: ["ur"], kiu: ["tr"], kjp: ["my"], kk: ["kk-cyrl"], "kk-arab": ["kk-cyrl"], "kk-cn": ["kk-arab", "kk-cyrl"], "kk-kz": ["kk-cyrl"], "kk-latn": ["kk-cyrl"], "kk-tr": ["kk-latn", "kk-cyrl"], kl: ["da"], "ko-kp": ["ko"], koi: ["ru"], krc: ["ru"], krl: ["fi"], ks: ["ks-arab"], ksh: ["de"], ku: ["ku-latn"], "ku-arab": ["ckb"], kum: ["ru"], kv: ["ru"], lad: ["es"], lb: ["de"], lbe: ["ru"], lez: ["ru", "az"], li: ["nl"], lij: ["it"], liv: ["et"], lki: ["fa"], lld: ["it", "rm", "fur"], lmo: ["pms", "eml", "lij", "vec", "it"], ln: ["fr"], lrc: ["fa"], ltg: ["lv"], luz: ["fa"], lzh: ["zh-hant"], lzz: ["tr"], mad: ["id"], mai: ["hi"], "map-bms": ["jv", "id"], mdf: ["myv", "ru"], mg: ["fr"], mhr: ["mrj", "ru"], min: ["id"], mnw: ["my"], mo: ["ro"], mrj: ["mhr", "ru"], "ms-arab": ["ms"], mwl: ["pt"], myv: ["mdf", "ru"], mzn: ["fa"], nah: ["es"], nan: ["cdo", "zh-hant"], nap: ["it"], nb: ["nn"], nds: ["de"], "nds-nl": ["nl"], nia: ["id"], "nl-informal": ["nl"], nn: ["nb"], nrm: ["fr"], oc: ["ca", "fr"], olo: ["fi"], os: ["ru"], pcd: ["fr"], pdc: ["de"], pdt: ["de"], pfl: ["de"], pih: ["en"], pms: ["it"], pnt: ["el"], pt: ["pt-br"], "pt-br": ["pt"], qu: ["qug", "es"], qug: ["qu", "es"], rgn: ["it"], rmy: ["ro"], "roa-tara": ["it"], rue: ["uk", "ru"], rup: ["ro"], ruq: ["ruq-latn", "ro"], "ruq-cyrl": ["mk"], "ruq-latn": ["ro"], sa: ["hi"], sah: ["ru"], scn: ["it"], sco: ["en"], sdc: ["it"], sdh: ["cbk", "fa"], ses: ["fr"], sg: ["fr"], sgs: ["lt"], sh: ["bs", "sr-el", "hr"], shi: ["fr"], shy: ["shy-latn"], "shy-latn": ["fr"], sk: ["cs"], skr: ["skr-arab"], "skr-arab": ["ur", "pnb"], sli: ["de"], smn: ["fi"], sr: ["sr-ec"], srn: ["nl"], stq: ["de"], sty: ["ru"], su: ["id"], szl: ["pl"], szy: ["zh-tw", "zh-hant", "zh-hans"], tay: ["zh-tw", "zh-hant", "zh-hans"], tcy: ["kn"], tet: ["pt"], tg: ["tg-cyrl"], trv: ["zh-tw", "zh-hant", "zh-hans"], tt: ["tt-cyrl", "ru"], "tt-cyrl": ["ru"], ty: ["fr"], tyv: ["ru"], udm: ["ru"], ug: ["ug-arab"], vec: ["it"], vep: ["et"], vls: ["nl"], vmf: ["de"], vot: ["fi"], vro: ["et"], wa: ["fr"], wo: ["fr"], wuu: ["zh-hans"], xal: ["ru"], xmf: ["ka"], yi: ["he"], za: ["zh-hans"], zea: ["nl"], zgh: ["kab"], zh: ["zh-hans"], "zh-cn": ["zh-hans"], "zh-hant": ["zh-hans"], "zh-hk": ["zh-hant", "zh-hans"], "zh-mo": ["zh-hk", "zh-hant", "zh-hans"], "zh-my": ["zh-sg", "zh-hans"], "zh-sg": ["zh-hans"], "zh-tw": ["zh-hant", "zh-hans"] };
    class s {
      constructor(c) {
        this.locale = c;
      }
      convertPlural(c, g) {
        const m = /\d+=/i;
        if (!g || g.length === 0)
          return "";
        for (let h = 0; h < g.length; h++) {
          const w = g[h];
          if (m.test(w)) {
            if (parseInt(w.slice(0, w.indexOf("=")), 10) === c)
              return w.slice(w.indexOf("=") + 1);
            g[h] = void 0;
          }
        }
        g = g.filter((h) => !!h);
        let p = this.getPluralForm(c, this.locale);
        return p = Math.min(p, g.length - 1), g[p];
      }
      getPluralForm(c, g) {
        const m = new Intl.PluralRules(g), p = m.resolvedOptions().pluralCategories, h = m.select(c);
        return ["zero", "one", "two", "few", "many", "other"].filter((w) => p.includes(w)).indexOf(h);
      }
      convertNumber(c, g = !1) {
        let m = this.digitTransformTable(this.locale), p = "";
        if (g) {
          if (parseFloat(c, 10) === c || !m)
            return c;
          const h = [];
          for (const _ in m)
            h[m[_]] = _;
          m = h;
          const w = String(c);
          for (let _ = 0; _ < w.length; _++)
            p += m[w[_]] || w[_];
          return parseFloat(p, 10);
        }
        if (Intl.NumberFormat) {
          let h;
          const w = [...o[this.locale] || [], "en"];
          return h = Intl.NumberFormat.supportedLocalesOf(this.locale).length ? [this.locale] : w, p = new Intl.NumberFormat(h).format(c), p === "NaN" && (p = c), p;
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
        const m = i;
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
            i = m;
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
        let g, m, p, h;
        switch (g = "мæ", m = "", p = "", h = "", i.match(/тæ$/i) ? (i = i.slice(0, -1), g = "æм") : i.match(/[аæеёиоыэюя]$/i) ? m = "й" : i.match(/у$/i) ? i.slice(-2, -1).match(/[аæеёиоыэюя]$/i) || (m = "й") : i.match(/[бвгджзйклмнопрстфхцчшщьъ]$/i) || (p = "-"), c) {
          case "genitive":
            h = p + m + "ы";
            break;
          case "dative":
            h = p + m + "æн";
            break;
          case "allative":
            h = p + g;
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
        let m, p, h;
        switch (typeof c) {
          case "string":
          case "number":
            m = c;
            break;
          case "object":
            if (p = c.slice(1).map((w) => this.emit(w, g)), h = c[0].toLowerCase(), typeof this[h] != "function")
              throw new Error('unknown operation "' + h + '"');
            m = this[h](p, g);
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
        let g = "";
        return c.forEach((m) => {
          g += m;
        }), g;
      }
      replace(c, g) {
        const m = parseInt(c[0], 10);
        return m < g.length ? g[m] : "$" + (m + 1);
      }
      plural(c) {
        const g = parseFloat(this.language.convertNumber(c[0], 10)), m = c.slice(1);
        return m.length ? this.language.convertPlural(g, m) : "";
      }
      gender(c) {
        const g = c[0], m = c.slice(1);
        return this.language.gender(g, m);
      }
      grammar(c) {
        const g = c[0], m = c[1];
        return m && g && this.language.convertGrammar(m, g);
      }
      wikilink(c) {
        let g, m = c[0];
        m.charAt(0) === ":" && (m = m.slice(1));
        const p = `./${m}`;
        return g = c.length === 1 ? m : c[1], `<a href="${p}" title="${m}">${g}</a>`;
      }
      extlink(c) {
        if (c.length !== 2)
          throw new Error("Expected two items in the node");
        return `<a href="${c[0]}">${c[1]}</a>`;
      }
      bidi(c) {
        const g = function(m) {
          const p = m.match(r);
          return p ? p[2] === void 0 ? "ltr" : "rtl" : null;
        }(c[0]);
        return g === "ltr" ? "‪" + c[0] + "‬" : g === "rtl" ? "‫" + c[0] + "‬" : c[0];
      }
      formatnum(c) {
        const g = !!c[1] && c[1] === "R", m = c[0];
        return typeof m == "string" || typeof m == "number" ? this.language.convertNumber(m, g) : m;
      }
      htmlattributes(c) {
        const g = {};
        for (let m = 0, p = c.length; m < p; m += 2)
          g[c[m]] = c[m + 1];
        return g;
      }
      htmlelement(c) {
        const g = c.shift(), m = c.shift();
        let p = c, h = "";
        for (const w in m)
          h += ` ${w}="${m[w]}"`;
        return Array.isArray(p) || (p = [p]), `<${g}${h}>${p.join("")}</${g}>`;
      }
    }
    class u {
      constructor(c, { wikilinks: g = !1 } = {}) {
        this.locale = c, this.wikilinks = g, this.emitter = new l(this.locale);
      }
      parse(c, g) {
        if (c.includes("{{") || c.includes("<") || this.wikilinks && c.includes("[")) {
          const m = function(p, { wikilinks: h = !1 } = {}) {
            let w = 0;
            function _(x) {
              return () => {
                for (let I = 0; I < x.length; I++) {
                  const be = x[I]();
                  if (be !== null)
                    return be;
                }
                return null;
              };
            }
            function f(x) {
              const I = w, be = [];
              for (let xt = 0; xt < x.length; xt++) {
                const bt = x[xt]();
                if (bt === null)
                  return w = I, null;
                be.push(bt);
              }
              return be;
            }
            function S(x, I) {
              return () => {
                const be = w, xt = [];
                let bt = I();
                for (; bt !== null; )
                  xt.push(bt), bt = I();
                return xt.length < x ? (w = be, null) : xt;
              };
            }
            function y(x) {
              const I = x.length;
              return () => {
                let be = null;
                return p.slice(w, w + I) === x && (be = x, w += I), be;
              };
            }
            function A(x) {
              return () => {
                const I = p.slice(w).match(x);
                return I === null ? null : (w += I[0].length, I[0]);
              };
            }
            const T = A(/^\s+/), U = y("|"), V = y(":"), L = y("\\"), j = A(/^./), P = y("$"), N = A(/^\d+/), ae = y('"'), J = y("'"), _n = A(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), vn = A(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), St = _([rt, A(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function rt() {
              const x = f([L, j]);
              return x === null ? null : x[1];
            }
            const So = _([rt, vn]), Sn = _([rt, _n]);
            function yt() {
              const x = f([P, N]);
              return x === null ? null : ["REPLACE", parseInt(x[1], 10) - 1];
            }
            const Ie = (Wt = A(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), Ct = function(x) {
              return x.toString();
            }, () => {
              const x = Wt();
              return x === null ? null : Ct(x);
            });
            var Wt, Ct;
            function kt() {
              const x = f([U, S(0, Us)]);
              if (x === null)
                return null;
              const I = x[1];
              return I.length > 1 ? ["CONCAT"].concat(I) : I[0];
            }
            function ze() {
              const x = f([Ie, V, yt]);
              return x === null ? null : [x[0], x[2]];
            }
            function v() {
              const x = f([Ie, V, Us]);
              return x === null ? null : [x[0], x[2]];
            }
            function b() {
              const x = f([Ie, V]);
              return x === null ? null : [x[0], ""];
            }
            const E = _([function() {
              const x = f([_([ze, v, b]), S(0, kt)]);
              return x === null ? null : x[0].concat(x[1]);
            }, function() {
              const x = f([Ie, S(0, kt)]);
              return x === null ? null : [x[0]].concat(x[1]);
            }]), D = y("{{"), W = y("}}"), te = y("[["), R = y("]]"), z = y("["), Q = y("]");
            function Je() {
              const x = f([D, E, W]);
              return x === null ? null : x[1];
            }
            const pe = _([function() {
              const x = f([S(1, Us), U, S(1, Ns)]);
              return x === null ? null : [["CONCAT"].concat(x[0]), ["CONCAT"].concat(x[2])];
            }, function() {
              const x = f([S(1, Us)]);
              return x === null ? null : [["CONCAT"].concat(x[0])];
            }]);
            function fc() {
              let x = null;
              const I = f([te, pe, R]);
              if (I !== null) {
                const be = I[1];
                x = ["WIKILINK"].concat(be);
              }
              return x;
            }
            function _c() {
              let x = null;
              const I = f([z, S(1, vh), T, S(1, Ns), Q]);
              return I !== null && (x = ["EXTLINK", I[1].length === 1 ? I[1][0] : ["CONCAT"].concat(I[1]), ["CONCAT"].concat(I[3])]), x;
            }
            const oi = A(/^[A-Za-z]+/);
            function hh() {
              const x = A(/^[^"]*/), I = f([ae, x, ae]);
              return I === null ? null : I[1];
            }
            function wh() {
              const x = A(/^[^']*/), I = f([J, x, J]);
              return I === null ? null : I[1];
            }
            function fh() {
              const x = A(/^\s*=\s*/), I = f([T, oi, x, _([hh, wh])]);
              return I === null ? null : [I[1], I[3]];
            }
            function _h() {
              const x = S(0, fh)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], x);
            }
            const vh = _([Je, yt, fc, _c, function() {
              const x = S(1, St)();
              return x === null ? null : x.join("");
            }]), Ns = _([Je, yt, fc, _c, function() {
              let x = null;
              const I = w, be = y("<"), xt = A(/^\/?/), bt = A(/^\s*>/), si = f([be, oi, _h, xt, bt]);
              if (si === null)
                return null;
              const Sc = w, yc = si[1], ai = S(0, Ns)(), Sh = w, Cc = f([y("</"), oi, bt]);
              if (Cc === null)
                return ["CONCAT", p.slice(I, Sc)].concat(ai);
              const yh = w, Ch = Cc[1], kc = si[2];
              if (function(yn, Is, ii, ri = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((yn = yn.toLowerCase()) !== (Is = Is.toLowerCase()) || ri.allowedHtmlElements.indexOf(yn) === -1)
                  return !1;
                const kh = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let zs = 0, xh = ii.length; zs < xh; zs += 2) {
                  const li = ii[zs];
                  if (ri.allowedHtmlCommonAttributes.indexOf(li) === -1 && (ri.allowedHtmlAttributesByElement[yn] || []).indexOf(li) === -1 || li === "style" && ii[zs + 1].search(kh) !== -1)
                    return !1;
                }
                return !0;
              }(yc, Ch, kc.slice(1)))
                x = ["HTMLELEMENT", yc, kc].concat(ai);
              else {
                const yn = (Is) => Is.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                x = ["CONCAT", yn(p.slice(I, Sc))].concat(ai, yn(p.slice(Sh, yh)));
              }
              return x;
            }, function() {
              const x = S(1, Sn)();
              return x === null ? null : x.join("");
            }]), Us = _([Je, yt, function() {
              const x = S(1, So)();
              return x === null ? null : x.join("");
            }]), vc = function() {
              const x = S(0, Ns)();
              return x === null ? null : ["CONCAT"].concat(x);
            }();
            if (vc === null || w !== p.length)
              throw new Error("Parse error at position " + w.toString() + " in input: " + p);
            return vc;
          }(c, { wikilinks: this.wikilinks });
          return this.emitter.emit(m, g);
        }
        return this.simpleParse(c, g);
      }
      simpleParse(c, g) {
        return c.replace(/\$(\d+)/g, (m, p) => {
          const h = parseInt(p, 10) - 1;
          return g[h] !== void 0 ? g[h] : "$" + p;
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
          for (const m in c)
            if (m.indexOf("@") !== 0) {
              if (typeof c[m] == "object")
                return this.load(c);
              if (typeof c[m] != "string")
                throw new Error(`Invalid message for message ${m} in ${g} locale.`);
              break;
            }
          this.sourceMap.has(g) ? this.sourceMap.set(g, Object.assign(this.sourceMap.get(g), c)) : this.sourceMap.set(g, c);
        } else
          for (g in c)
            this.load(c[g], g);
      }
      getMessage(c, g) {
        const m = this.sourceMap.get(g);
        return m ? m[c] : null;
      }
      hasLocale(c) {
        return this.sourceMap.has(c);
      }
    }
    return class {
      constructor(i, { finalFallback: c = "en", messages: g, wikilinks: m = !1 } = {}) {
        this.locale = i, this.parser = new u(this.locale, { wikilinks: m }), this.messageStore = new d(), g && this.load(g, this.locale), this.finalFallback = c, this.wikilinks = m;
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
        const m = this.getFallbackLocales(this.locale);
        for (; c; ) {
          const p = c.split("-");
          let h = p.length;
          do {
            const w = p.slice(0, h).join("-"), _ = this.messageStore.getMessage(i, w);
            if (typeof _ == "string")
              return _;
            h--;
          } while (h);
          c = m[g], g++;
        }
        return i;
      }
      registerParserPlugin(i, c) {
        l.prototype[i] = c;
      }
    };
  });
})(qm);
var N1 = qm.exports;
const iu = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, Gm = Symbol("banana-context");
function me() {
  const e = P1(Gm);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function U1(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = F1(new N1(e.locale, e));
  return {
    install: (n) => {
      n.provide(Gm, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: r } = iu(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...r) : o.textContent = t.i18n(a, ...r);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: r } = iu(s);
        o.innerHTML = t.i18n(a, ...r);
      });
    }
  };
}
const Nn = window.Vue.ref, I1 = window.Vue.computed, xs = Nn(null), bs = Nn(null), $s = Nn(null), mo = Nn(null), Wm = Nn(null), Xm = Nn(null), Km = Nn(null), { validateFilters: z1, filtersValidatorError: R1 } = B1(), O1 = I1(() => ({
  type: Xm.value,
  id: Km.value
})), Ym = (e, t) => {
  Xm.value = e, Km.value = t, _s("filter-type", e), t && _s("filter-id", t);
}, H1 = (e) => {
  const t = new URLSearchParams(location.search);
  t.set("page", e == null ? void 0 : e.sourceTitle), t.set("from", e == null ? void 0 : e.sourceLanguage), t.set("to", e == null ? void 0 : e.targetLanguage), $s.value = e == null ? void 0 : e.sourceTitle, xs.value = e == null ? void 0 : e.sourceLanguage, bs.value = e == null ? void 0 : e.targetLanguage, e instanceof Il && (t.set("draft", !0), Wm.value = !0, e.isLeadSectionTranslation || (t.set("section", e.sourceSectionTitle), mo.value = e.sourceSectionTitle)), t.delete("title"), Vs(Object.fromEntries(t));
}, j1 = (e) => {
  mo.value = e, _s("section", e);
}, q1 = (e) => {
  $s.value = e, _s("page", e);
}, Vs = (e) => {
  history.replaceState(
    {},
    document.title,
    y1("Special:ContentTranslation", e)
  );
}, G1 = () => {
  const e = me(), t = new URLSearchParams(location.search);
  $s.value = t.get("page"), xs.value = t.get("from"), bs.value = t.get("to"), mo.value = t.get("section");
  const n = z1({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  Ym(n.type, n.id), R1.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, W1 = () => {
  const e = new URLSearchParams(location.search);
  mo.value = null, e.delete("section"), e.delete("title"), Vs(Object.fromEntries(e));
}, _s = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set(e, t), n.delete("title"), Vs(Object.fromEntries(n));
}, X1 = (e) => new URLSearchParams(location.search).get(e), K1 = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), xs.value = e, bs.value = t, n.delete("title"), Vs(Object.fromEntries(n));
}, Y1 = () => {
  xs.value = null, bs.value = null, $s.value = null, mo.value = null, Vs(null);
}, M = () => ({
  setLanguageURLParams: K1,
  setSectionURLParam: j1,
  setTranslationURLParams: H1,
  initializeURLState: G1,
  clearURLParameters: Y1,
  clearSectionURLParameter: W1,
  setUrlParam: _s,
  getUrlParam: X1,
  pageURLParameter: $s,
  sourceLanguageURLParameter: xs,
  targetLanguageURLParameter: bs,
  sectionURLParameter: mo,
  draftURLParameter: Wm,
  setPageURLParam: q1,
  currentSuggestionFilters: O1,
  setFilterURLParams: Ym
});
const J1 = window.Vue.resolveDynamicComponent, ru = window.Vue.openBlock, lu = window.Vue.createBlock, Q1 = window.Vue.Transition, ko = window.Vue.withCtx, xo = window.Vue.createVNode, Z1 = window.Vue.resolveComponent, ki = window.Vue.unref, e_ = window.Vuex.useStore, t_ = window.Vue.computed, n_ = window.Vue.onMounted, o_ = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = M();
    t();
    const n = e_(), o = t_(
      () => n.state.application.autoSavePending
    );
    return n_(() => {
      window.addEventListener("beforeunload", (s) => {
        o.value && (s.preventDefault(), s.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (s) => {
        document.visibilityState === "visible" && Im.assertUser().then(() => n.commit("application/setIsLoginDialogOn", !1)).catch((a) => {
          a instanceof go && n.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (s, a) => {
      const r = Z1("router-view");
      return ru(), lu(ki(Uw), { id: "contenttranslation" }, {
        default: ko(() => [
          xo(ki(B), { class: "cx-container" }, {
            default: ko(() => [
              xo(ki(k), { cols: "12" }, {
                default: ko(() => [
                  xo(r, null, {
                    default: ko(({ Component: l, route: u }) => [
                      xo(Q1, {
                        name: u.meta.transitionName
                      }, {
                        default: ko(() => [
                          (ru(), lu(J1(l)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      xo(S1)
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
}, s_ = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translationsLoaded: { draft: !1, published: !1 },
  translatorStats: null
}, a_ = {
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
class Jm {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new Jm(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const cu = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => Re(ne({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class i_ {
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
    const t = cu((s = this.user) == null ? void 0 : s.content), n = cu((a = this.mt) == null ? void 0 : a.content);
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
class zl extends Ya {
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
const Ja = mw.user.isAnon() ? void 0 : "user", Qm = (e) => {
  if (e === "assertuserfailed")
    throw new go();
};
function Zm(e, t = null) {
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
        (u) => new Il(Re(ne({}, u), { status: e }))
      ) : r = a.map(
        (u) => new zl(Re(ne({}, u), { status: e }))
      ), (l = s.continue) != null && l.offset) {
        const u = yield Zm(
          e,
          s.continue.offset
        );
        r = r.concat(u);
      }
      return r;
    }));
  });
}
function r_(e) {
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
      (a) => new i_(a)
    );
  });
}
function l_(e, t, n, o, s) {
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
const c_ = (e, t, n) => {
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
}, u_ = ({
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
    assert: Ja,
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
  return u && (g.captchaid = u, g.captchaword = d), new mw.Api().postWithToken("csrf", g).then((p) => {
    if (p = p.cxpublishsection, p.result === "error") {
      if (p.edit.captcha)
        return {
          publishFeedbackMessage: new io({
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
    Qm(p);
    let w;
    return h = h || {}, h.exception ? w = h.exception.message : h.error ? w = h.error.info : w = "Unknown error", {
      publishFeedbackMessage: new io({
        text: w,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, d_ = ({
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
    assert: Ja,
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
  return new mw.Api().postWithToken("csrf", c).then((m) => m.sxsave.sectiontranslationid).catch((m, p) => {
    Qm(m);
    let h;
    return p.exception ? h = p.exception.message : p.error ? h = p.error.info : h = "Unknown error", new io({ text: h, status: "error" });
  });
}, g_ = (e) => {
  const t = {
    assert: Ja,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, m_ = () => {
  const e = {
    assert: Ja,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new zl(n.cxcheckunreviewed.translation)
  );
}, p_ = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, h_ = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, w_ = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), Ke = {
  fetchTranslations: Zm,
  fetchTranslationUnits: r_,
  fetchSegmentTranslation: l_,
  parseTemplateWikitext: c_,
  publishTranslation: u_,
  saveTranslation: d_,
  deleteTranslation: p_,
  fetchTranslatorStats: w_,
  deleteCXTranslation: h_,
  splitTranslation: g_,
  checkUnreviewedTranslations: m_
};
function f_(t) {
  return C(this, arguments, function* ({ commit: e }) {
    const n = yield Ke.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const __ = {
  fetchTranslatorStats: f_
}, v_ = {
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
}, S_ = {
  namespaced: !0,
  state: s_,
  getters: a_,
  actions: __,
  mutations: v_
}, ep = [
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
], y_ = [
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
], C_ = [
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
], k_ = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], x_ = [
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
], b_ = {
  en: ep,
  es: y_,
  bn: C_,
  fr: k_,
  de: x_
}, $_ = {
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
  appendixSectionTitles: b_,
  /**
   * Maximum number of suggestions based on user's recently edited translations,
   * to be displayed inside "search for an article" view
   */
  maxRecentlyEditedSuggestions: 3
}, V_ = {
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
class po {
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
    return t.type === Fe && t.id === de ? ((n = this.suggestionProvider) == null ? void 0 : n.type) === de : ((o = this.suggestionProvider) == null ? void 0 : o.type) === t.type && ((s = this.suggestionProvider) == null ? void 0 : s.id) === t.id;
  }
}
class hn {
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
    return t.type === Fe && t.id === de ? ((n = this.suggestionProvider) == null ? void 0 : n.type) === de : ((o = this.suggestionProvider) == null ? void 0 : o.type) === t.type && ((s = this.suggestionProvider) == null ? void 0 : s.id) === t.id;
  }
}
class ro {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s;
  }
}
class Rl {
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
class tp extends po {
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
    }), this.collection = new Rl(u);
  }
}
class np extends hn {
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
    }), this.collection = new Rl(c);
  }
}
const E_ = ep, qt = (n) => C(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
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
function A_() {
  return C(this, null, function* () {
    return ((yield qt({ urlPostfix: "/page-collections", urlParams: {} })) || []).map((o) => new Rl(o));
  });
}
function D_(e, t, n, o = 24) {
  return C(this, null, function* () {
    return ((yield qt({ urlParams: {
      source: e,
      target: t,
      seed: n,
      count: o
    } })) || []).map(
      (r) => new po({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
const L_ = (e, t) => C(void 0, null, function* () {
  return ((yield qt({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  } })) || []).map(
    (s) => new po({
      sourceTitle: s.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: s.wikidata_id,
      langLinksCount: parseInt(s.langlinks_count)
    })
  );
}), T_ = (e, t) => C(void 0, null, function* () {
  const s = (yield qt({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  }, urlPostfix: "/sections" })) || [];
  return s && s.map(
    (a) => new hn({
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
}), B_ = (e, t) => C(void 0, null, function* () {
  return ((yield qt({ urlParams: {
    source: e,
    target: t,
    count: 24,
    collections: !0
  } })) || []).map(
    (s) => new tp({
      sourceTitle: s.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: s.wikidata_id,
      langLinksCount: parseInt(s.langlinks_count),
      collection: s.collection
    })
  );
}), P_ = (e, t) => C(void 0, null, function* () {
  const s = (yield qt({ urlPostfix: "/sections", urlParams: {
    source: e,
    target: t,
    count: 24,
    collections: !0
  } })) || [];
  return s && s.map(
    (a) => new np({
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
function F_(e, t, n) {
  return C(this, null, function* () {
    const o = [t, e, n].map(
      (r) => encodeURIComponent(r)
    ), s = G.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (r) => r.ok ? r.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((r) => r == null ? void 0 : r.sections).catch((r) => null);
    return a ? new hn(a) : null;
  });
}
function M_(e, t, n) {
  return C(this, null, function* () {
    const a = (yield qt({ urlPostfix: "/sections", urlParams: {
      source: e,
      target: t,
      seed: n,
      count: 24
    } })) || [];
    return a && a.map(
      (r) => new hn({
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
function N_(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    return ((yield qt({ urlParams: s })) || []).map(
      (r) => new po({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
function U_(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    }, r = (yield qt({ urlPostfix: "/sections", urlParams: s })) || [];
    return r && r.map(
      (l) => new hn({
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
function I_(e) {
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
function z_(e, t) {
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
function R_(e, t) {
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
function O_(e) {
  const t = E_.map((o) => encodeURIComponent(o)).join("|"), n = G.getCXServerUrl(
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
const H_ = (e, t, n) => {
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
}, j_ = (e) => {
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
}, q_ = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions"
  }, t = new mw.Api();
  return Promise.resolve(t.postWithToken("csrf", e)).then((n) => {
    var a, r;
    const o = n.query.contenttranslationsuggestions.lists || {};
    return (((r = (a = Object.values(o)) == null ? void 0 : a[0]) == null ? void 0 : r.suggestions) || []).map((l) => new ro(l));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
}, le = {
  fetchFavorites: q_,
  fetchPageSuggestions: D_,
  fetchSectionSuggestion: F_,
  fetchSectionSuggestions: M_,
  fetchSuggestionSeeds: z_,
  fetchAppendixTargetSectionTitles: O_,
  fetchSuggestionSourceSections: R_,
  markFavorite: H_,
  unmarkFavorite: j_,
  fetchUserEdits: I_,
  fetchMostPopularPageSuggestions: L_,
  fetchMostPopularSectionSuggestions: T_,
  fetchPageSuggestionsByTopics: N_,
  fetchSectionSuggestionsByTopics: U_,
  fetchPageCollections: A_,
  fetchPageSuggestionsByCollections: B_,
  fetchSectionSuggestionsByCollections: P_
};
function G_(o, s) {
  return C(this, arguments, function* ({ getters: e, commit: t }, n) {
    if (e.appendixTitlesExistForLanguage(n))
      return;
    const a = yield le.fetchAppendixTargetSectionTitles(n);
    t("addAppendixSectionTitlesForLanguage", {
      language: n,
      titles: a
    });
  });
}
const W_ = {
  fetchAppendixSectionTitles: G_
}, X_ = {
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
}, K_ = {
  namespaced: !0,
  state: $_,
  getters: V_,
  actions: W_,
  mutations: X_
}, Y_ = {
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
}, J_ = {
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
class ho {
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
    content: m = null,
    sections: p = []
  } = {}) {
    var h;
    this.language = r, this.title = i, this.pageId = a, this.description = t, this.image = s, this.pageprops = l, this.pageviews = u, this.thumbnail = d, this.langLinksCount = n, this.articleSize = (h = c == null ? void 0 : c[0]) == null ? void 0 : h.size, this.revision = o, this.alias = g, this.wikidataId = l == null ? void 0 : l.wikibase_item, this.content = m, this.sections = p;
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
class Q_ {
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
function Z_() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const ev = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), Z_();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, tv = (e, t) => {
  let n, o;
  return t ? (n = ev(e), o = n.$element.find(
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
}, nv = (e, t) => {
  const n = Array.from(
    tv(e, t)
  );
  return ov(n).map(
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
        (c) => new Pe({
          sentences: sv(c),
          node: c
        })
      ), i = !l;
      return new yl({ id: u, title: l, subSections: d, isLeadSection: i });
    }
  );
}, ov = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, sv = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new mn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), op = {
  convertSegmentedContentToPageSections: nv
}, Ol = 120, av = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: Ol,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return G.getApi(e).get(n).then((s) => {
    const a = s.query.pages, l = (s.query.redirects || []).reduce(
      (i, c) => Re(ne({}, i), { [c.to]: c.from }),
      {}
    ), d = (s.query.normalized || []).reduce(
      (i, c) => Re(ne({}, i), {
        [c.to]: c.from
      }),
      {}
    );
    return a.map((i) => {
      const c = d[i.title] || l[i.title] || null;
      return new ho(Re(ne({}, i), { _alias: c }));
    });
  });
}, iv = (e, t) => {
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
    return l ? Object.freeze(new Q_(l, r)) : null;
  });
}, rv = (e, t, n) => {
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
}, lv = (e, t, n, o = null) => sp(
  e,
  t,
  n,
  o
).then(
  (s) => new ho({
    sections: op.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), sp = (e, t, n, o = null) => {
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
}, cv = (e) => C(void 0, null, function* () {
  const t = C1();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: Ol,
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
  return yield G.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new ho(s))).catch((o) => []);
}), uv = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: Ol,
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
      (a) => new ho(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, wo = {
  fetchPages: av,
  fetchLanguageTitles: iv,
  fetchPageContent: lv,
  fetchSegmentedContent: sp,
  fetchNearbyPages: cv,
  searchPagesByTitlePrefix: uv,
  fetchLanguageLinksForLanguage: rv
};
function dv() {
  return G.getLanguagePairs().then((e) => e.sourceLanguages);
}
function gv(e, t) {
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
function mv() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function pv(e, t, n, o) {
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
const Qa = {
  fetchSupportedLanguageCodes: dv,
  fetchSupportedMTProviders: gv,
  fetchCXServerToken: mv,
  addWikibaseLink: pv
};
function hv({ getters: e, commit: t }, { language: n, titles: o }) {
  o = o.filter((r) => !e.getPage(n, r));
  const s = 50, a = [];
  for (let r = 0; r < o.length; r += s) {
    const l = o.slice(r, r + s), u = wo.fetchPages(n, l).then(
      (d) => d.forEach((i) => t("addPage", i))
    );
    a.push(u);
  }
  return Promise.all(a);
}
function wv(n) {
  return C(this, arguments, function* ({ commit: e, state: t }) {
    if (!t.supportedLanguageCodes.length && !t.supportedLanguageCodesRequested) {
      e("setSupportedLanguageCodesRequested", !0);
      const o = yield Qa.fetchSupportedLanguageCodes();
      e("setSupportedLanguageCodes", o);
    }
  });
}
function fv(o) {
  return C(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: s } = t.application;
    if ((r = n.nearbyPages[s]) != null && r.length)
      return;
    const a = yield wo.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const _v = {
  fetchNearbyPages: fv,
  fetchPageMetadata: hv,
  fetchSupportedLanguageCodes: wv
}, vv = {
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
}, Sv = {
  namespaced: !0,
  state: Y_,
  getters: J_,
  actions: _v,
  mutations: vv
}, yv = {
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
}, Cv = {
  /**
   * Returns a boolean indicating whether the current publishing target
   * is the user's sandbox
   *
   * @param {object} state
   * @return {boolean}
   */
  isSandboxTarget: (e) => e.publishTarget === "SANDBOX_SECTION"
}, kv = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => Mn(a)
  );
  return s && Om(s) ? Ke.parseTemplateWikitext(
    zm(s),
    n,
    t
  ) : Promise.resolve(null);
}, ap = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => Mn(a)
  );
  return s ? Ke.parseTemplateWikitext(
    zm(s),
    n,
    t
  ) : Promise.resolve(null);
}, xv = (o) => C(void 0, [o], function* ({ dispatch: e, state: t, commit: n }) {
  var a, r;
  t.cxServerToken || (yield Qa.fetchCXServerToken().then(
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
}), bv = { getCXServerToken: xv }, $v = {
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
}, Vv = {
  namespaced: !0,
  state: yv,
  getters: Cv,
  actions: bv,
  mutations: $v
}, Ev = window.Vuex.createStore, Av = Ev({
  modules: { translator: S_, suggestions: K_, mediawiki: Sv, application: Vv }
});
function Dv() {
  return ip().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function ip() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const Lv = typeof Proxy == "function", Tv = "devtools-plugin:setup", Bv = "plugin:settings:set";
let Un, Cl;
function Pv() {
  var e;
  return Un !== void 0 || (typeof window != "undefined" && window.performance ? (Un = !0, Cl = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Un = !0, Cl = global.perf_hooks.performance) : Un = !1), Un;
}
function Fv() {
  return Pv() ? Cl.now() : Date.now();
}
class Mv {
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
        return Fv();
      }
    }, n && n.on(Bv, (r, l) => {
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
function Nv(e, t) {
  const n = e, o = ip(), s = Dv(), a = Lv && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(Tv, e, t);
  else {
    const r = a ? new Mv(n, s) : null;
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
const rp = window.Vue.getCurrentInstance, lo = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const pt = window.Vue.computed, hs = window.Vue.unref, Uv = window.Vue.watchEffect, lp = window.Vue.defineComponent, Iv = window.Vue.reactive, cp = window.Vue.h, xi = window.Vue.provide, zv = window.Vue.ref, up = window.Vue.watch, Rv = window.Vue.shallowRef, Ov = window.Vue.shallowReactive, Hv = window.Vue.nextTick, Ht = typeof window != "undefined";
function jv(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const X = Object.assign;
function bi(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = Me(s) ? s.map(e) : e(s);
  }
  return n;
}
const ws = () => {
}, Me = Array.isArray;
function q(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const qv = /\/$/, Gv = (e) => e.replace(qv, "");
function $i(e, t, n = "/") {
  let o, s = {}, a = "", r = "";
  const l = t.indexOf("#");
  let u = t.indexOf("?");
  return l < u && l >= 0 && (u = -1), u > -1 && (o = t.slice(0, u), a = t.slice(u + 1, l > -1 ? l : t.length), s = e(a)), l > -1 && (o = o || t.slice(0, l), r = t.slice(l, t.length)), o = Kv(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + r,
    path: o,
    query: s,
    hash: r
  };
}
function Wv(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function uu(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function du(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && wn(t.matched[o], n.matched[s]) && dp(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function wn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function dp(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Xv(e[n], t[n]))
      return !1;
  return !0;
}
function Xv(e, t) {
  return Me(e) ? gu(e, t) : Me(t) ? gu(t, e) : e === t;
}
function gu(e, t) {
  return Me(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function Kv(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return q(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
var vs;
(function(e) {
  e.pop = "pop", e.push = "push";
})(vs || (vs = {}));
var fs;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(fs || (fs = {}));
function Yv(e) {
  if (!e)
    if (Ht) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Gv(e);
}
const Jv = /^[^#]+#/;
function Qv(e, t) {
  return e.replace(Jv, "#") + t;
}
function Zv(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const Za = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function eS(e) {
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
    t = Zv(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function mu(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const kl = /* @__PURE__ */ new Map();
function tS(e, t) {
  kl.set(e, t);
}
function nS(e) {
  const t = kl.get(e);
  return kl.delete(e), t;
}
let oS = () => location.protocol + "//" + location.host;
function gp(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = s.includes(e.slice(a)) ? e.slice(a).length : 1, u = s.slice(l);
    return u[0] !== "/" && (u = "/" + u), uu(u, "");
  }
  return uu(n, e) + o + s;
}
function sS(e, t, n, o) {
  let s = [], a = [], r = null;
  const l = ({ state: g }) => {
    const m = gp(e, location), p = n.value, h = t.value;
    let w = 0;
    if (g) {
      if (n.value = m, t.value = g, r && r === p) {
        r = null;
        return;
      }
      w = h ? g.position - h.position : 0;
    } else
      o(m);
    s.forEach((_) => {
      _(n.value, p, {
        delta: w,
        type: vs.pop,
        direction: w ? w > 0 ? fs.forward : fs.back : fs.unknown
      });
    });
  };
  function u() {
    r = n.value;
  }
  function d(g) {
    s.push(g);
    const m = () => {
      const p = s.indexOf(g);
      p > -1 && s.splice(p, 1);
    };
    return a.push(m), m;
  }
  function i() {
    const { history: g } = window;
    g.state && g.replaceState(X({}, g.state, { scroll: Za() }), "");
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
function pu(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Za() : null
  };
}
function aS(e) {
  const { history: t, location: n } = window, o = {
    value: gp(e, n)
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
    const c = e.indexOf("#"), g = c > -1 ? (n.host && document.querySelector("base") ? e : e.slice(c)) + u : oS() + e + u;
    try {
      t[i ? "replaceState" : "pushState"](d, "", g), s.value = d;
    } catch (m) {
      ({}).NODE_ENV !== "production" ? q("Error with push/replace State", m) : console.error(m), n[i ? "replace" : "assign"](g);
    }
  }
  function r(u, d) {
    const i = X({}, t.state, pu(
      s.value.back,
      // keep back and forward entries but override current position
      u,
      s.value.forward,
      !0
    ), d, { position: s.value.position });
    a(u, i, !0), o.value = u;
  }
  function l(u, d) {
    const i = X(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: u,
        scroll: Za()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && q(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(i.current, i, !0);
    const c = X({}, pu(o.value, u, null), { position: i.position + 1 }, d);
    a(u, c, !1), o.value = u;
  }
  return {
    location: o,
    state: s,
    push: l,
    replace: r
  };
}
function iS(e) {
  e = Yv(e);
  const t = aS(e), n = sS(e, t.state, t.location, t.replace);
  function o(a, r = !0) {
    r || n.pauseListeners(), history.go(a);
  }
  const s = X({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: Qv.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function rS(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && q(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), iS(e);
}
function lS(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function mp(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Yt = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, xl = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var hu;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(hu || (hu = {}));
const cS = {
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
    return `Redirected from "${e.fullPath}" to "${dS(t)}" via a navigation guard.`;
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
function co(e, t) {
  return {}.NODE_ENV !== "production" ? X(new Error(cS[e](t)), {
    type: e,
    [xl]: !0
  }, t) : X(new Error(), {
    type: e,
    [xl]: !0
  }, t);
}
function $t(e, t) {
  return e instanceof Error && xl in e && (t == null || !!(e.type & t));
}
const uS = ["params", "query", "hash"];
function dS(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of uS)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const wu = "[^/]+?", gS = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, mS = /[.+*?^${}()[\]/\\]/g;
function pS(e, t) {
  const n = X({}, gS, t), o = [];
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
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (g.type === 0)
        c || (s += "/"), s += g.value.replace(mS, "\\$&"), m += 40;
      else if (g.type === 1) {
        const { value: p, repeatable: h, optional: w, regexp: _ } = g;
        a.push({
          name: p,
          repeatable: h,
          optional: w
        });
        const f = _ || wu;
        if (f !== wu) {
          m += 10;
          try {
            new RegExp(`(${f})`);
          } catch (y) {
            throw new Error(`Invalid custom RegExp for param "${p}" (${f}): ` + y.message);
          }
        }
        let S = h ? `((?:${f})(?:/(?:${f}))*)` : `(${f})`;
        c || (S = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        w && d.length < 2 ? `(?:/${S})` : "/" + S), w && (S += "?"), s += S, m += 20, w && (m += -8), h && (m += -20), f === ".*" && (m += -50);
      }
      i.push(m);
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
      const m = i[g] || "", p = a[g - 1];
      c[p.name] = m && p.repeatable ? m.split("/") : m;
    }
    return c;
  }
  function u(d) {
    let i = "", c = !1;
    for (const g of e) {
      (!c || !i.endsWith("/")) && (i += "/"), c = !1;
      for (const m of g)
        if (m.type === 0)
          i += m.value;
        else if (m.type === 1) {
          const { value: p, repeatable: h, optional: w } = m, _ = p in d ? d[p] : "";
          if (Me(_) && !h)
            throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
          const f = Me(_) ? _.join("/") : _;
          if (!f)
            if (w)
              g.length < 2 && (i.endsWith("/") ? i = i.slice(0, -1) : c = !0);
            else
              throw new Error(`Missing required param "${p}"`);
          i += f;
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
function hS(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function wS(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = hS(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (fu(o))
      return 1;
    if (fu(s))
      return -1;
  }
  return s.length - o.length;
}
function fu(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const fS = {
  type: 0,
  value: ""
}, _S = /[a-zA-Z0-9_]/;
function vS(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[fS]];
  if (!e.startsWith("/"))
    throw new Error({}.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${d}": ${m}`);
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
        u === "(" ? n = 2 : _S.test(u) ? g() : (c(), n = 0, u !== "*" && u !== "?" && u !== "+" && l--);
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
function SS(e, t, n) {
  const o = pS(vS(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const r of o.keys)
      a.has(r.name) && q(`Found duplicated params with name "${r.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(r.name);
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
function yS(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = Su({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(i) {
    return o.get(i);
  }
  function a(i, c, g) {
    const m = !g, p = CS(i);
    ({}).NODE_ENV !== "production" && $S(p, c), p.aliasOf = g && g.record;
    const h = Su(t, i), w = [
      p
    ];
    if ("alias" in i) {
      const S = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const y of S)
        w.push(X({}, p, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: g ? g.record.components : p.components,
          path: y,
          // we might be the child of an alias
          aliasOf: g ? g.record : p
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let _, f;
    for (const S of w) {
      const { path: y } = S;
      if (c && y[0] !== "/") {
        const A = c.record.path, T = A[A.length - 1] === "/" ? "" : "/";
        S.path = c.record.path + (y && T + y);
      }
      if ({}.NODE_ENV !== "production" && S.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (_ = SS(S, c, h), {}.NODE_ENV !== "production" && c && y[0] === "/" && VS(_, c), g ? (g.alias.push(_), {}.NODE_ENV !== "production" && bS(g, _)) : (f = f || _, f !== _ && f.alias.push(_), m && i.name && !vu(_) && r(i.name)), p.children) {
        const A = p.children;
        for (let T = 0; T < A.length; T++)
          a(A[T], _, g && g.children[T]);
      }
      g = g || _, (_.record.components && Object.keys(_.record.components).length || _.record.name || _.record.redirect) && u(_);
    }
    return f ? () => {
      r(f);
    } : ws;
  }
  function r(i) {
    if (mp(i)) {
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
    for (; c < n.length && wS(i, n[c]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[c].record.path || !pp(i, n[c])); )
      c++;
    n.splice(c, 0, i), i.record.name && !vu(i) && o.set(i.record.name, i);
  }
  function d(i, c) {
    let g, m = {}, p, h;
    if ("name" in i && i.name) {
      if (g = o.get(i.name), !g)
        throw co(1, {
          location: i
        });
      if ({}.NODE_ENV !== "production") {
        const f = Object.keys(i.params || {}).filter((S) => !g.keys.find((y) => y.name === S));
        f.length && q(`Discarded invalid param(s) "${f.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = g.record.name, m = X(
        // paramsFromLocation is a new object
        _u(
          c.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((f) => !f.optional).map((f) => f.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && _u(i.params, g.keys.map((f) => f.name))
      ), p = g.stringify(m);
    } else if ("path" in i)
      p = i.path, {}.NODE_ENV !== "production" && !p.startsWith("/") && q(`The Matcher cannot resolve relative paths but received "${p}". Unless you directly called \`matcher.resolve("${p}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((f) => f.re.test(p)), g && (m = g.parse(p), h = g.record.name);
    else {
      if (g = c.name ? o.get(c.name) : n.find((f) => f.re.test(c.path)), !g)
        throw co(1, {
          location: i,
          currentLocation: c
        });
      h = g.record.name, m = X({}, c.params, i.params), p = g.stringify(m);
    }
    const w = [];
    let _ = g;
    for (; _; )
      w.unshift(_.record), _ = _.parent;
    return {
      name: h,
      path: p,
      params: m,
      matched: w,
      meta: xS(w)
    };
  }
  return e.forEach((i) => a(i)), { addRoute: a, resolve: d, removeRoute: r, getRoutes: l, getRecordMatcher: s };
}
function _u(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function CS(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: kS(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function kS(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function vu(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function xS(e) {
  return e.reduce((t, n) => X(t, n.meta), {});
}
function Su(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function bl(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function bS(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(bl.bind(null, n)))
      return q(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(bl.bind(null, n)))
      return q(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function $S(e, t) {
  t && t.record.name && !e.name && !e.path && q(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function VS(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(bl.bind(null, n)))
      return q(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function pp(e, t) {
  return t.children.some((n) => n === e || pp(e, n));
}
const hp = /#/g, ES = /&/g, AS = /\//g, DS = /=/g, LS = /\?/g, wp = /\+/g, TS = /%5B/g, BS = /%5D/g, fp = /%5E/g, PS = /%60/g, _p = /%7B/g, FS = /%7C/g, vp = /%7D/g, MS = /%20/g;
function Hl(e) {
  return encodeURI("" + e).replace(FS, "|").replace(TS, "[").replace(BS, "]");
}
function NS(e) {
  return Hl(e).replace(_p, "{").replace(vp, "}").replace(fp, "^");
}
function $l(e) {
  return Hl(e).replace(wp, "%2B").replace(MS, "+").replace(hp, "%23").replace(ES, "%26").replace(PS, "`").replace(_p, "{").replace(vp, "}").replace(fp, "^");
}
function US(e) {
  return $l(e).replace(DS, "%3D");
}
function IS(e) {
  return Hl(e).replace(hp, "%23").replace(LS, "%3F");
}
function zS(e) {
  return e == null ? "" : IS(e).replace(AS, "%2F");
}
function Ss(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && q(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function RS(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(wp, " "), r = a.indexOf("="), l = Ss(r < 0 ? a : a.slice(0, r)), u = r < 0 ? null : Ss(a.slice(r + 1));
    if (l in t) {
      let d = t[l];
      Me(d) || (d = t[l] = [d]), d.push(u);
    } else
      t[l] = u;
  }
  return t;
}
function yu(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = US(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Me(o) ? o.map((a) => a && $l(a)) : [o && $l(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function OS(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = Me(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const HS = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), Cu = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), ei = Symbol({}.NODE_ENV !== "production" ? "router" : ""), Sp = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), Vl = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function bo() {
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
function pn(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((r, l) => {
    const u = (c) => {
      c === !1 ? l(co(4, {
        from: n,
        to: t
      })) : c instanceof Error ? l(c) : lS(c) ? l(co(2, {
        from: t,
        to: c
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof c == "function" && a.push(c), r());
    }, d = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? jS(u, t, n) : u);
    let i = Promise.resolve(d);
    if (e.length < 3 && (i = i.then(u)), {}.NODE_ENV !== "production" && e.length > 2) {
      const c = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof d == "object" && "then" in d)
        i = i.then((g) => u._called ? g : (q(c), Promise.reject(new Error("Invalid navigation guard"))));
      else if (d !== void 0 && !u._called) {
        q(c), l(new Error("Invalid navigation guard"));
        return;
      }
    }
    i.catch((c) => l(c));
  });
}
function jS(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && q(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function Vi(e, t, n, o) {
  const s = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && q(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const r in a.components) {
      let l = a.components[r];
      if ({}.NODE_ENV !== "production") {
        if (!l || typeof l != "object" && typeof l != "function")
          throw q(`Component "${r}" in record with path "${a.path}" is not a valid component. Received "${String(l)}".`), new Error("Invalid route component");
        if ("then" in l) {
          q(`Component "${r}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const u = l;
          l = () => u;
        } else
          l.__asyncLoader && // warn only once per component
          !l.__warnedDefineAsync && (l.__warnedDefineAsync = !0, q(`Component "${r}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[r]))
        if (qS(l)) {
          const d = (l.__vccOpts || l)[t];
          d && s.push(pn(d, n, o, a, r));
        } else {
          let u = l();
          ({}).NODE_ENV !== "production" && !("catch" in u) && (q(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), u = Promise.resolve(u)), s.push(() => u.then((d) => {
            if (!d)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = jv(d) ? d.default : d;
            a.components[r] = i;
            const g = (i.__vccOpts || i)[t];
            return g && pn(g, n, o, a, r)();
          }));
        }
    }
  }
  return s;
}
function qS(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function ku(e) {
  const t = lo(ei), n = lo(Sp), o = pt(() => t.resolve(hs(e.to))), s = pt(() => {
    const { matched: u } = o.value, { length: d } = u, i = u[d - 1], c = n.matched;
    if (!i || !c.length)
      return -1;
    const g = c.findIndex(wn.bind(null, i));
    if (g > -1)
      return g;
    const m = xu(u[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      xu(i) === m && // avoid comparing the child with its parent
      c[c.length - 1].path !== m ? c.findIndex(wn.bind(null, u[d - 2])) : g
    );
  }), a = pt(() => s.value > -1 && KS(n.params, o.value.params)), r = pt(() => s.value > -1 && s.value === n.matched.length - 1 && dp(n.params, o.value.params));
  function l(u = {}) {
    return XS(u) ? t[hs(e.replace) ? "replace" : "push"](
      hs(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(ws) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && Ht) {
    const u = rp();
    if (u) {
      const d = {
        route: o.value,
        isActive: a.value,
        isExactActive: r.value
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(d), Uv(() => {
        d.route = o.value, d.isActive = a.value, d.isExactActive = r.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: pt(() => o.value.href),
    isActive: a,
    isExactActive: r,
    navigate: l
  };
}
const GS = /* @__PURE__ */ lp({
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
  useLink: ku,
  setup(e, { slots: t }) {
    const n = Iv(ku(e)), { options: o } = lo(ei), s = pt(() => ({
      [bu(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [bu(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : cp("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), WS = GS;
function XS(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function KS(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!Me(s) || s.length !== o.length || o.some((a, r) => a !== s[r]))
      return !1;
  }
  return !0;
}
function xu(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const bu = (e, t, n) => e != null ? e : t != null ? t : n, YS = /* @__PURE__ */ lp({
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
    ({}).NODE_ENV !== "production" && QS();
    const o = lo(Vl), s = pt(() => e.route || o.value), a = lo(Cu, 0), r = pt(() => {
      let d = hs(a);
      const { matched: i } = s.value;
      let c;
      for (; (c = i[d]) && !c.components; )
        d++;
      return d;
    }), l = pt(() => s.value.matched[r.value]);
    xi(Cu, pt(() => r.value + 1)), xi(HS, l), xi(Vl, s);
    const u = zv();
    return up(() => [u.value, l.value, e.name], ([d, i, c], [g, m, p]) => {
      i && (i.instances[c] = d, m && m !== i && d && d === g && (i.leaveGuards.size || (i.leaveGuards = m.leaveGuards), i.updateGuards.size || (i.updateGuards = m.updateGuards))), d && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!m || !wn(i, m) || !g) && (i.enterCallbacks[c] || []).forEach((h) => h(d));
    }, { flush: "post" }), () => {
      const d = s.value, i = e.name, c = l.value, g = c && c.components[i];
      if (!g)
        return $u(n.default, { Component: g, route: d });
      const m = c.props[i], p = m ? m === !0 ? d.params : typeof m == "function" ? m(d) : m : null, w = cp(g, X({}, p, t, {
        onVnodeUnmounted: (_) => {
          _.component.isUnmounted && (c.instances[i] = null);
        },
        ref: u
      }));
      if ({}.NODE_ENV !== "production" && Ht && w.ref) {
        const _ = {
          depth: r.value,
          name: c.name,
          path: c.path,
          meta: c.meta
        };
        (Me(w.ref) ? w.ref.map((S) => S.i) : [w.ref.i]).forEach((S) => {
          S.__vrv_devtools = _;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        $u(n.default, { Component: w, route: d }) || w
      );
    };
  }
});
function $u(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const JS = YS;
function QS() {
  const e = rp(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
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
function $o(e, t) {
  const n = X({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => ry(o, ["instances", "children", "aliasOf"]))
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
function Js(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let ZS = 0;
function ey(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = ZS++;
  Nv({
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
        value: $o(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: i, componentInstance: c }) => {
      if (c.__vrv_devtools) {
        const g = c.__vrv_devtools;
        i.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: yp
        });
      }
      Me(c.__vrl_devtools) && (c.__devtoolsApi = s, c.__vrl_devtools.forEach((g) => {
        let m = xp, p = "";
        g.isExactActive ? (m = kp, p = "This is exactly active") : g.isActive && (m = Cp, p = "This link is active"), i.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: p,
          backgroundColor: m
        });
      }));
    }), up(t.currentRoute, () => {
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
        guard: Js("beforeEach"),
        from: $o(c, "Current Location during this navigation"),
        to: $o(i, "Target location")
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
      const m = {
        guard: Js("afterEach")
      };
      g ? (m.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, m.status = Js("❌")) : m.status = Js("✅"), m.from = $o(c, "Current Location during this navigation"), m.to = $o(i, "Target location"), s.addTimelineEvent({
        layerId: a,
        event: {
          title: "End of navigation",
          subtitle: i.fullPath,
          time: s.now(),
          data: m,
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
      c.forEach(Vp), i.filter && (c = c.filter((g) => (
        // save matches state based on the payload
        El(g, i.filter.toLowerCase())
      ))), c.forEach((g) => $p(g, t.currentRoute.value)), i.rootNodes = c.map(bp);
    }
    let d;
    s.on.getInspectorTree((i) => {
      d = i, i.app === e && i.inspectorId === l && u();
    }), s.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === l) {
        const g = n.getRoutes().find((m) => m.record.__vd_id === i.nodeId);
        g && (i.state = {
          options: ny(g)
        });
      }
    }), s.sendInspectorTree(l), s.sendInspectorState(l);
  });
}
function ty(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function ny(e) {
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
        display: e.keys.map((o) => `${o.name}${ty(o)}`).join(" "),
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
const yp = 15485081, Cp = 2450411, kp = 8702998, oy = 2282478, xp = 16486972, sy = 6710886;
function bp(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: oy
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: xp
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: yp
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: kp
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Cp
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: sy
  });
  let o = n.__vd_id;
  return o == null && (o = String(ay++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(bp)
  };
}
let ay = 0;
const iy = /^\/(.*)\/([a-z]*)$/;
function $p(e, t) {
  const n = t.matched.length && wn(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => wn(o, e.record))), e.children.forEach((o) => $p(o, t));
}
function Vp(e) {
  e.__vd_match = !1, e.children.forEach(Vp);
}
function El(e, t) {
  const n = String(e.re).match(iy);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => El(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = Ss(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => El(r, t));
}
function ry(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function ly(e) {
  const t = yS(e.routes, e), n = e.parseQuery || RS, o = e.stringifyQuery || yu, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = bo(), r = bo(), l = bo(), u = Rv(Yt);
  let d = Yt;
  Ht && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = bi.bind(null, (v) => "" + v), c = bi.bind(null, zS), g = (
    // @ts-expect-error: intentionally avoid the type check
    bi.bind(null, Ss)
  );
  function m(v, b) {
    let E, D;
    return mp(v) ? (E = t.getRecordMatcher(v), D = b) : D = v, t.addRoute(D, E);
  }
  function p(v) {
    const b = t.getRecordMatcher(v);
    b ? t.removeRoute(b) : {}.NODE_ENV !== "production" && q(`Cannot remove non-existent route "${String(v)}"`);
  }
  function h() {
    return t.getRoutes().map((v) => v.record);
  }
  function w(v) {
    return !!t.getRecordMatcher(v);
  }
  function _(v, b) {
    if (b = X({}, b || u.value), typeof v == "string") {
      const z = $i(n, v, b.path), Q = t.resolve({ path: z.path }, b), Je = s.createHref(z.fullPath);
      return {}.NODE_ENV !== "production" && (Je.startsWith("//") ? q(`Location "${v}" resolved to "${Je}". A resolved location cannot start with multiple slashes.`) : Q.matched.length || q(`No match found for location with path "${v}"`)), X(z, Q, {
        params: g(Q.params),
        hash: Ss(z.hash),
        redirectedFrom: void 0,
        href: Je
      });
    }
    let E;
    if ("path" in v)
      ({}).NODE_ENV !== "production" && "params" in v && !("name" in v) && // @ts-expect-error: the type is never
      Object.keys(v.params).length && q(`Path "${v.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), E = X({}, v, {
        path: $i(n, v.path, b.path).path
      });
    else {
      const z = X({}, v.params);
      for (const Q in z)
        z[Q] == null && delete z[Q];
      E = X({}, v, {
        params: c(z)
      }), b.params = c(b.params);
    }
    const D = t.resolve(E, b), W = v.hash || "";
    ({}).NODE_ENV !== "production" && W && !W.startsWith("#") && q(`A \`hash\` should always start with the character "#". Replace "${W}" with "#${W}".`), D.params = i(g(D.params));
    const te = Wv(o, X({}, v, {
      hash: NS(W),
      path: D.path
    })), R = s.createHref(te);
    return {}.NODE_ENV !== "production" && (R.startsWith("//") ? q(`Location "${v}" resolved to "${R}". A resolved location cannot start with multiple slashes.`) : D.matched.length || q(`No match found for location with path "${"path" in v ? v.path : v}"`)), X({
      fullPath: te,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: W,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === yu ? OS(v.query) : v.query || {}
      )
    }, D, {
      redirectedFrom: void 0,
      href: R
    });
  }
  function f(v) {
    return typeof v == "string" ? $i(n, v, u.value.path) : X({}, v);
  }
  function S(v, b) {
    if (d !== v)
      return co(8, {
        from: b,
        to: v
      });
  }
  function y(v) {
    return U(v);
  }
  function A(v) {
    return y(X(f(v), { replace: !0 }));
  }
  function T(v) {
    const b = v.matched[v.matched.length - 1];
    if (b && b.redirect) {
      const { redirect: E } = b;
      let D = typeof E == "function" ? E(v) : E;
      if (typeof D == "string" && (D = D.includes("?") || D.includes("#") ? D = f(D) : (
        // force empty params
        { path: D }
      ), D.params = {}), {}.NODE_ENV !== "production" && !("path" in D) && !("name" in D))
        throw q(`Invalid redirect found:
${JSON.stringify(D, null, 2)}
 when navigating to "${v.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return X({
        query: v.query,
        hash: v.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in D ? {} : v.params
      }, D);
    }
  }
  function U(v, b) {
    const E = d = _(v), D = u.value, W = v.state, te = v.force, R = v.replace === !0, z = T(E);
    if (z)
      return U(
        X(f(z), {
          state: typeof z == "object" ? X({}, W, z.state) : W,
          force: te,
          replace: R
        }),
        // keep original redirectedFrom if it exists
        b || E
      );
    const Q = E;
    Q.redirectedFrom = b;
    let Je;
    return !te && du(o, D, E) && (Je = co(16, { to: Q, from: D }), yt(
      D,
      D,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (Je ? Promise.resolve(Je) : j(Q, D)).catch((pe) => $t(pe) ? (
      // navigation redirects still mark the router as ready
      $t(
        pe,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? pe : Sn(pe)
    ) : (
      // reject any unknown error
      rt(pe, Q, D)
    )).then((pe) => {
      if (pe) {
        if ($t(
          pe,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          du(o, _(pe.to), Q) && // and we have done it a couple of times
          b && // @ts-expect-error: added only in dev
          (b._count = b._count ? (
            // @ts-expect-error
            b._count + 1
          ) : 1) > 30 ? (q(`Detected a possibly infinite redirection in a navigation guard when going from "${D.fullPath}" to "${Q.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : U(
            // keep options
            X({
              // preserve an existing replacement but allow the redirect to override it
              replace: R
            }, f(pe.to), {
              state: typeof pe.to == "object" ? X({}, W, pe.to.state) : W,
              force: te
            }),
            // preserve the original redirectedFrom if any
            b || Q
          );
      } else
        pe = N(Q, D, !0, R, W);
      return P(Q, D, pe), pe;
    });
  }
  function V(v, b) {
    const E = S(v, b);
    return E ? Promise.reject(E) : Promise.resolve();
  }
  function L(v) {
    const b = Ct.values().next().value;
    return b && typeof b.runWithContext == "function" ? b.runWithContext(v) : v();
  }
  function j(v, b) {
    let E;
    const [D, W, te] = cy(v, b);
    E = Vi(D.reverse(), "beforeRouteLeave", v, b);
    for (const z of D)
      z.leaveGuards.forEach((Q) => {
        E.push(pn(Q, v, b));
      });
    const R = V.bind(null, v, b);
    return E.push(R), ze(E).then(() => {
      E = [];
      for (const z of a.list())
        E.push(pn(z, v, b));
      return E.push(R), ze(E);
    }).then(() => {
      E = Vi(W, "beforeRouteUpdate", v, b);
      for (const z of W)
        z.updateGuards.forEach((Q) => {
          E.push(pn(Q, v, b));
        });
      return E.push(R), ze(E);
    }).then(() => {
      E = [];
      for (const z of te)
        if (z.beforeEnter)
          if (Me(z.beforeEnter))
            for (const Q of z.beforeEnter)
              E.push(pn(Q, v, b));
          else
            E.push(pn(z.beforeEnter, v, b));
      return E.push(R), ze(E);
    }).then(() => (v.matched.forEach((z) => z.enterCallbacks = {}), E = Vi(te, "beforeRouteEnter", v, b), E.push(R), ze(E))).then(() => {
      E = [];
      for (const z of r.list())
        E.push(pn(z, v, b));
      return E.push(R), ze(E);
    }).catch((z) => $t(
      z,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? z : Promise.reject(z));
  }
  function P(v, b, E) {
    l.list().forEach((D) => L(() => D(v, b, E)));
  }
  function N(v, b, E, D, W) {
    const te = S(v, b);
    if (te)
      return te;
    const R = b === Yt, z = Ht ? history.state : {};
    E && (D || R ? s.replace(v.fullPath, X({
      scroll: R && z && z.scroll
    }, W)) : s.push(v.fullPath, W)), u.value = v, yt(v, b, E, R), Sn();
  }
  let ae;
  function J() {
    ae || (ae = s.listen((v, b, E) => {
      if (!kt.listening)
        return;
      const D = _(v), W = T(D);
      if (W) {
        U(X(W, { replace: !0 }), D).catch(ws);
        return;
      }
      d = D;
      const te = u.value;
      Ht && tS(mu(te.fullPath, E.delta), Za()), j(D, te).catch((R) => $t(
        R,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? R : $t(
        R,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (U(
        R.to,
        D
        // avoid an uncaught rejection, let push call triggerError
      ).then((z) => {
        $t(
          z,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !E.delta && E.type === vs.pop && s.go(-1, !1);
      }).catch(ws), Promise.reject()) : (E.delta && s.go(-E.delta, !1), rt(R, D, te))).then((R) => {
        R = R || N(
          // after navigation, all matched components are resolved
          D,
          te,
          !1
        ), R && (E.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !$t(
          R,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-E.delta, !1) : E.type === vs.pop && $t(
          R,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), P(D, te, R);
      }).catch(ws);
    }));
  }
  let _n = bo(), vn = bo(), St;
  function rt(v, b, E) {
    Sn(v);
    const D = vn.list();
    return D.length ? D.forEach((W) => W(v, b, E)) : ({}.NODE_ENV !== "production" && q("uncaught error during route navigation:"), console.error(v)), Promise.reject(v);
  }
  function So() {
    return St && u.value !== Yt ? Promise.resolve() : new Promise((v, b) => {
      _n.add([v, b]);
    });
  }
  function Sn(v) {
    return St || (St = !v, J(), _n.list().forEach(([b, E]) => v ? E(v) : b()), _n.reset()), v;
  }
  function yt(v, b, E, D) {
    const { scrollBehavior: W } = e;
    if (!Ht || !W)
      return Promise.resolve();
    const te = !E && nS(mu(v.fullPath, 0)) || (D || !E) && history.state && history.state.scroll || null;
    return Hv().then(() => W(v, b, te)).then((R) => R && eS(R)).catch((R) => rt(R, v, b));
  }
  const Ie = (v) => s.go(v);
  let Wt;
  const Ct = /* @__PURE__ */ new Set(), kt = {
    currentRoute: u,
    listening: !0,
    addRoute: m,
    removeRoute: p,
    hasRoute: w,
    getRoutes: h,
    resolve: _,
    options: e,
    push: y,
    replace: A,
    go: Ie,
    back: () => Ie(-1),
    forward: () => Ie(1),
    beforeEach: a.add,
    beforeResolve: r.add,
    afterEach: l.add,
    onError: vn.add,
    isReady: So,
    install(v) {
      const b = this;
      v.component("RouterLink", WS), v.component("RouterView", JS), v.config.globalProperties.$router = b, Object.defineProperty(v.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => hs(u)
      }), Ht && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !Wt && u.value === Yt && (Wt = !0, y(s.location).catch((W) => {
        ({}).NODE_ENV !== "production" && q("Unexpected error when starting the router:", W);
      }));
      const E = {};
      for (const W in Yt)
        Object.defineProperty(E, W, {
          get: () => u.value[W],
          enumerable: !0
        });
      v.provide(ei, b), v.provide(Sp, Ov(E)), v.provide(Vl, u);
      const D = v.unmount;
      Ct.add(v), v.unmount = function() {
        Ct.delete(v), Ct.size < 1 && (d = Yt, ae && ae(), ae = null, u.value = Yt, Wt = !1, St = !1), D();
      }, {}.NODE_ENV !== "production" && Ht && ey(v, b, t);
    }
  };
  function ze(v) {
    return v.reduce((b, E) => b.then(() => L(E)), Promise.resolve());
  }
  return kt;
}
function cy(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let r = 0; r < a; r++) {
    const l = t.matched[r];
    l && (e.matched.find((d) => wn(d, l)) ? o.push(l) : n.push(l));
    const u = e.matched[r];
    u && (t.matched.find((d) => wn(d, u)) || s.push(u));
  }
  return [n, o, s];
}
function he() {
  return lo(ei);
}
const uy = {
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
}, dy = {
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
}, gy = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], my = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, py = {
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
}, hy = {
  languages: uy,
  scriptgroups: dy,
  rtlscripts: gy,
  regiongroups: my,
  territories: py
};
var Ce = hy;
function Es(e) {
  return !!Ce.languages[e];
}
function fn(e) {
  return Es(e) && Ce.languages[e].length === 1 ? Ce.languages[e][0] : !1;
}
function wy() {
  return Ce.languages;
}
function As(e) {
  var t = fn(e);
  return t ? As(t) : Es(e) ? Ce.languages[e][0] : "Zyyy";
}
function jl(e) {
  var t = fn(e);
  return t ? jl(t) : Es(e) && Ce.languages[e][1] || "UNKNOWN";
}
function ys(e) {
  var t = fn(e);
  return t ? ys(t) : Es(e) && Ce.languages[e][2] || e;
}
function fy() {
  var e, t = {};
  for (e in Ce.languages)
    fn(e) || (t[e] = ys(e));
  return t;
}
function Ep(e) {
  var t, n, o = [];
  for (t in Ce.languages)
    if (!fn(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === As(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function _y(e) {
  return Ep([e]);
}
function Ap(e) {
  var t;
  for (t in Ce.scriptgroups)
    if (Ce.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function ql(e) {
  return Ap(As(e));
}
function Dp(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = fn(n) || n, a = ql(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Lp(e) {
  var t, n, o, s = {};
  for (t in Ce.languages)
    if (!fn(t)) {
      for (n = 0; n < e.length; n++)
        if (jl(t).includes(e[n])) {
          o = ql(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function vy(e) {
  return Lp([e]);
}
function Sy(e) {
  var t, n, o, s = [];
  for (t = Dp(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function yy(e, t) {
  var n = ys(e) || e, o = ys(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function Tp(e) {
  return Ce.rtlscripts.includes(As(e));
}
function Cy(e) {
  return Tp(e) ? "rtl" : "ltr";
}
function ky(e) {
  return Ce.territories[e] || [];
}
function xy(e, t) {
  t.target ? Ce.languages[e] = [t.target] : Ce.languages[e] = [t.script, t.regions, t.autonym];
}
var O = {
  addLanguage: xy,
  getAutonym: ys,
  getAutonyms: fy,
  getDir: Cy,
  getGroupOfScript: Ap,
  getLanguages: wy,
  getLanguagesByScriptGroup: Dp,
  getLanguagesByScriptGroupInRegion: vy,
  getLanguagesByScriptGroupInRegions: Lp,
  getLanguagesInScript: _y,
  getLanguagesInScripts: Ep,
  getLanguagesInTerritory: ky,
  getRegions: jl,
  getScript: As,
  getScriptGroupOfLanguage: ql,
  isKnown: Es,
  isRedirect: fn,
  isRtl: Tp,
  sortByScriptGroup: Sy,
  sortByAutonym: yy
};
const by = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), r = parseInt(e.slice(12, 14)), l = new Date(Date.UTC(t, n, o, s, a, r)), d = (/* @__PURE__ */ new Date()).getTime() - l.getTime();
  return Math.round(d / (1e3 * 3600 * 24));
}, $y = (e) => {
  const t = by(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const Vy = window.Vuex.useStore, Ey = window.Vue.computed, Ay = {
  name: "CxTranslationWork",
  components: { MwRow: B, MwCol: k, MwThumbnail: Ul, MwIcon: Ee },
  props: {
    translation: {
      type: Ya,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e) {
    const t = Vy(), n = (a, r) => {
      const l = t.getters["mediawiki/getPage"](a, r);
      return l == null ? void 0 : l.thumbnail;
    }, o = me();
    return {
      timeagoMessage: Ey(() => {
        const a = {
          days: "cx-sx-translation-work-days-since-started",
          months: "cx-sx-translation-work-months-since-started",
          years: "cx-sx-translation-work-years-since-started"
        }, r = $y(e.translation.startTimestamp);
        return o.i18n(
          a[r.postfix],
          r.value
        );
      }),
      getAutonym: O.getAutonym,
      getDir: O.getDir,
      getImage: n,
      mwIconArrowForward: Pl,
      mwIconArrowNext: Fm
    };
  }
}, Qs = window.Vue.resolveComponent, In = window.Vue.createVNode, Vt = window.Vue.createElementVNode, Vu = window.Vue.renderSlot, Eu = window.Vue.withModifiers, Ei = window.Vue.toDisplayString, Ai = window.Vue.withCtx, Dy = window.Vue.openBlock, Ly = window.Vue.createElementBlock, Ty = window.Vue.createCommentVNode, By = { class: "col shrink pe-4" }, Py = { class: "col" }, Fy = { class: "cx-translation__details column justify-between ma-0" }, My = { class: "row ma-0" }, Ny = { class: "col grow" }, Uy = { class: "col shrink ps-2" }, Iy = ["dir", "textContent"], zy = ["dir", "textContent"], Ry = ["textContent"];
function Oy(e, t, n, o, s, a) {
  const r = Qs("mw-thumbnail"), l = Qs("mw-icon"), u = Qs("mw-col"), d = Qs("mw-row");
  return n.translation ? (Dy(), Ly("div", {
    key: 0,
    class: "row cx-translation pa-4 ma-0",
    onClick: t[1] || (t[1] = Eu((i) => e.$emit("click"), ["stop"]))
  }, [
    Vt("div", By, [
      In(r, {
        class: "cx-translation__thumbnail",
        thumbnail: o.getImage(n.translation.sourceLanguage, n.translation.sourceTitle)
      }, null, 8, ["thumbnail"])
    ]),
    Vt("div", Py, [
      Vt("div", Fy, [
        Vt("div", My, [
          Vt("div", Ny, [
            Vu(e.$slots, "title")
          ]),
          Vt("div", Uy, [
            In(l, {
              class: "cx-translation__action-icon",
              icon: n.actionIcon,
              onClick: t[0] || (t[0] = Eu((i) => e.$emit("action-icon-clicked"), ["stop"]))
            }, null, 8, ["icon"])
          ])
        ]),
        Vu(e.$slots, "mid-content"),
        In(d, { class: "cx-translation__footer ma-0" }, {
          default: Ai(() => [
            In(u, {
              class: "cx-translation__languages",
              grow: ""
            }, {
              default: Ai(() => [
                Vt("span", {
                  class: "mw-ui-autonym",
                  dir: o.getDir(n.translation.sourceLanguage),
                  textContent: Ei(o.getAutonym(n.translation.sourceLanguage))
                }, null, 8, Iy),
                In(l, {
                  icon: o.mwIconArrowNext,
                  class: "mx-1",
                  size: 14
                }, null, 8, ["icon"]),
                Vt("span", {
                  class: "mw-ui-autonym ma-0",
                  dir: o.getDir(n.translation.targetLanguage),
                  textContent: Ei(o.getAutonym(n.translation.targetLanguage))
                }, null, 8, zy)
              ]),
              _: 1
            }),
            In(u, {
              class: "cx-translation__days-since-started",
              shrink: ""
            }, {
              default: Ai(() => [
                Vt("span", {
                  textContent: Ei(o.timeagoMessage)
                }, null, 8, Ry)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])
    ])
  ])) : Ty("", !0);
}
const Bp = /* @__PURE__ */ F(Ay, [["render", Oy]]);
const Vo = window.Vue.unref, Au = window.Vue.toDisplayString, Hy = window.Vue.normalizeClass, jy = window.Vue.createElementVNode, Di = window.Vue.openBlock, qy = window.Vue.createElementBlock, Du = window.Vue.createCommentVNode, Lu = window.Vue.createVNode, Zs = window.Vue.withCtx, Tu = window.Vue.createBlock, Gy = ["lang", "textContent"], Wy = ["lang", "textContent"], Xy = window.Vue.computed, Ky = window.Vue.inject, Yy = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: Il,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = Ky("colors").gray200, s = Xy(
      () => {
        var u;
        return ((u = t.translation.progress) == null ? void 0 : u.any) * 100 || 0;
      }
    ), a = he(), { setTranslationURLParams: r } = M(), l = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (u, d) => (Di(), Tu(Bp, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": Vo(Pm),
      onActionIconClicked: d[0] || (d[0] = (i) => u.$emit("delete-translation")),
      onClick: l
    }, {
      title: Zs(() => [
        jy("h5", {
          class: Hy(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: Au(e.translation.sourceTitle)
        }, null, 10, Gy),
        e.translation.isLeadSectionTranslation ? Du("", !0) : (Di(), qy("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: Au(e.translation.sourceSectionTitle)
        }, null, 8, Wy))
      ]),
      "mid-content": Zs(() => [
        e.translation.progress ? (Di(), Tu(Vo(B), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Zs(() => [
            Lu(Vo(k), null, {
              default: Zs(() => [
                Lu(Vo(Um), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: Vo(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Du("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, Jy = window.Vue.computed, Qy = window.Vue.inject, Ds = () => {
  const e = Qy("breakpoints");
  return { isDesktop: Jy(
    () => !G.isMobileDomain() && e.value.tabletAndUp
  ) };
}, zn = window.Vue.computed;
function H(e) {
  const t = zn(() => e.state.application.sourceLanguage), n = zn(() => e.state.application.targetLanguage), o = zn(
    () => e.state.application.currentMTProvider
  ), s = zn(
    () => O.getAutonym(t.value)
  ), a = zn(
    () => O.getAutonym(n.value)
  ), r = zn(() => e.state.application.previousRoute);
  return {
    currentMTProvider: o,
    previousRoute: r,
    sourceLanguage: t,
    sourceLanguageAutonym: s,
    targetLanguage: n,
    targetLanguageAutonym: a
  };
}
const Bu = window.Vue.computed, Zy = window.Vuex.useStore;
function Ls() {
  const e = Zy(), t = Bu(
    () => e.state.mediawiki.supportedLanguageCodes || []
  );
  return {
    enabledTargetLanguages: Bu(
      () => e.state.mediawiki.enabledTargetLanguages
    ),
    supportedLanguageCodes: t
  };
}
const eC = (e, t) => {
  const { sourceLanguageURLParameter: n, targetLanguageURLParameter: o } = M(), s = G.getCurrentWikiLanguageCode(), a = (c) => !e || Array.isArray(e) && e.includes(c), r = (c) => t.includes(c), l = {
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
}, tC = window.Vuex.useStore, Gl = () => {
  const e = tC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = M(), { maxSuggestionsPerSlice: s } = e.state.suggestions, a = () => e.getters["suggestions/getSectionSuggestionsForPair"](t.value, n.value).filter(
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
}, nC = window.Vuex.useStore, ti = () => {
  const e = nC(), { sourceLanguage: t, targetLanguage: n } = H(e), o = (l) => {
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
class oC {
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
const sC = window.Vuex.useStore, Wl = window.Vue.ref, aC = Wl([]), iC = Wl([]);
let Li = !1, Pu = !1, Fu = !1, Ti = Wl(!1), Eo = null;
const ea = {
  page: aC,
  section: iC
}, Pp = () => {
  const e = sC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = M(), o = () => C(void 0, null, function* () {
    let d = e.getters["translator/getTranslationsByStatus"]("published");
    if (d = d.filter(
      (i) => i.sourceLanguage === t.value
    ), d.length && !Li)
      return Li = !0, d.map(
        (i) => i.sourceTitle
      );
    if (Li = !0, !Pu) {
      const i = yield le.fetchUserEdits(t.value).then((c) => (Pu = !0, c));
      if (i.length)
        return i;
    }
    if (!Fu) {
      const i = yield le.fetchUserEdits(t.value).then((c) => (Fu = !0, c));
      if (i.length)
        return wo.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          i
        );
    }
    return null;
  }), s = (d) => {
    let i = ea[d].value.find(
      (c) => c.matchesLanguagePair(t.value, n.value)
    );
    return i || (i = new oC({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), ea[d].value.push(i)), i;
  }, a = () => C(void 0, null, function* () {
    const d = yield le.fetchSuggestionSeeds(
      t.value,
      n.value
    );
    for (const i in ea) {
      const c = s(i);
      c.seeds = [...c.seeds, ...d || []];
    }
  }), r = () => C(void 0, null, function* () {
    let d = !1, i = [];
    do {
      i = yield o(), i || (d = !0);
      for (const c in ea) {
        const g = s(c);
        g.seeds = [
          ...g.seeds,
          ...i || []
        ];
      }
    } while (!d && !(i != null && i.length));
  }), l = () => Eo || (Eo = r(), Eo.finally(() => {
    Eo = null;
  }));
  return { getSuggestionSeed: (d) => C(void 0, null, function* () {
    let i = s(d);
    i.seeds.length || (yield l());
    let c = i.shiftSeeds();
    return !c && !Ti.value && (yield a(), c = i.shiftSeeds(), Ti.value = !0), c;
  }), defaultSeedsFetched: Ti };
}, rC = 5;
function Cs(e) {
  return C(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < rC);
  });
}
const lC = window.Vuex.useStore, cC = () => {
  const e = lC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = M(), { getSuggestionSeed: o } = Pp(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = ti(), l = {
    id: wt,
    type: Fe
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (i) => C(void 0, null, function* () {
      const c = [];
      return yield Cs(() => C(void 0, null, function* () {
        const g = yield o("page");
        if (!g)
          return !0;
        let m = yield le.fetchPageSuggestions(
          t.value,
          n.value,
          g
        );
        return m = m.filter(
          (p) => a(p)
        ), m = m.slice(0, i), c.push(...m), c.length >= i;
      })), c.forEach(
        (g) => g.suggestionProvider = l
      ), c;
    }),
    fetchSectionSuggestionsBasedOnEdits: (i) => C(void 0, null, function* () {
      const c = [];
      return yield Cs(() => C(void 0, null, function* () {
        const g = yield o("section");
        if (!g)
          return !0;
        const m = yield le.fetchSectionSuggestions(
          t.value,
          n.value,
          g
        );
        if (!m)
          return !1;
        let p = m.filter(
          (w) => s(w)
        );
        const h = m.filter(
          (w) => !s(w)
        );
        return p = p.slice(0, i), c.push(...p), h.forEach((w) => {
          w && !r(w) && (w.isListable = !1, e.commit("suggestions/addSectionSuggestion", w));
        }), c.length >= i;
      })), c.forEach(
        (g) => g.suggestionProvider = l
      ), c;
    })
  };
}, uC = window.Vuex.useStore, dC = () => {
  const e = uC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = M(), o = {
    id: jt,
    type: Fe
  }, {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = ti();
  return { fetchSectionSuggestionsPopular: (d) => C(void 0, null, function* () {
    const i = [];
    return yield Cs(() => C(void 0, null, function* () {
      const c = yield le.fetchMostPopularSectionSuggestions(
        t.value,
        n.value
      );
      let g = c.filter(
        (p) => s(p)
      );
      const m = c.filter(
        (p) => !s(p)
      );
      return g = g.slice(0, d), i.push(...g), m.forEach((p) => {
        p && !r(p) && (p.isListable = !1, e.commit("suggestions/addSectionSuggestion", p));
      }), i.length >= d;
    })), i.forEach(
      (c) => c.suggestionProvider = o
    ), i;
  }), fetchPageSuggestionsPopular: (d) => C(void 0, null, function* () {
    const i = [];
    return yield Cs(() => C(void 0, null, function* () {
      let c = yield le.fetchMostPopularPageSuggestions(
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
}, Fp = window.Vue.ref, Mu = Fp([]), Nu = Fp(!1), Mp = () => ({ pageCollections: Mu, fetchPageCollections: () => C(void 0, null, function* () {
  try {
    Mu.value = yield le.fetchPageCollections(), Nu.value = !0;
  } catch (t) {
    mw.log.error("Failed to fetch page collections", t);
  }
}), pageCollectionsFetched: Nu });
class Al {
  /**
   * @param {string} id
   * @param {string} label
   * @param {{ id: string, label: string, type: string }[]} filters
   */
  constructor({ id: t, label: n, filters: o }) {
    this.id = t, this.label = n, this.filters = o;
  }
}
const Bi = window.Vue.computed, Uu = mw.loader.require("ext.cx.articletopics"), gC = (e) => new Al({
  id: e.groupId,
  label: e.label,
  filters: e.topics.map((t) => ({
    id: t.topicId,
    label: t.label,
    type: ft
  }))
}), Xl = () => {
  const e = me(), { currentSuggestionFilters: t, setFilterURLParams: n } = M(), o = {
    id: wt,
    type: Fe,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }, s = {
    id: jt,
    type: Fe,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }, a = {
    id: de,
    type: Fe,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }, r = new Al({
    id: Fe,
    label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
    filters: [o, s, a]
  }), { pageCollections: l, pageCollectionsFetched: u } = Mp(), d = (f) => ({
    id: f.name,
    label: f.name,
    type: de
  }), i = Bi(
    () => new Al({
      id: "collections",
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: l.value.map(
        (f) => d(f)
      )
    })
  ), c = Bi(() => [
    r,
    i.value,
    ...Uu.map(gC)
  ]), g = Bi(
    () => t.value.type === de && !u.value
  ), m = () => {
    if (g.value)
      return [];
    const f = h();
    return f.type === ft || f.type === de || f.id === de ? [f, o] : [o, s];
  }, p = (f) => {
    n(f.type, f.id);
  }, h = () => c.value.flatMap((f) => f.filters).find(w), w = (f) => t.value.type === f.type && t.value.id === f.id;
  return {
    allFilters: c,
    getFiltersSummary: m,
    selectFilter: p,
    isFilterSelected: w,
    getOresTopics: (f) => {
      const y = Uu.flatMap((A) => A.topics).find((A) => A.topicId === f);
      return y ? y.orestopics : [];
    },
    waitingForPageCollectionsFetch: g
  };
}, mC = window.Vuex.useStore, pC = () => {
  const e = mC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = M(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = ti(), { getOresTopics: l } = Xl();
  return {
    fetchPageSuggestionsByTopics: (i) => C(void 0, null, function* () {
      const c = o.value.id, g = {
        id: c,
        type: ft
      }, m = l(c);
      let p = yield le.fetchPageSuggestionsByTopics(
        t.value,
        n.value,
        m
      );
      return p = p.filter(
        (h) => a(h)
      ), p = p.slice(0, i), p.forEach(
        (h) => h.suggestionProvider = g
      ), p;
    }),
    fetchSectionSuggestionsByTopics: (i) => C(void 0, null, function* () {
      const c = o.value.id, g = {
        id: c,
        type: ft
      }, m = l(c), p = [];
      return yield Cs(() => C(void 0, null, function* () {
        const h = yield le.fetchSectionSuggestionsByTopics(
          t.value,
          n.value,
          m
        );
        let w = h.filter(
          (f) => s(f)
        );
        const _ = h.filter(
          (f) => !s(f)
        );
        return w = w.slice(0, i), p.push(...w), _.forEach((f) => {
          f && !r(f) && (f.isListable = !1, e.commit("suggestions/addSectionSuggestion", f));
        }), p.length >= i;
      })), p.forEach(
        (h) => h.suggestionProvider = g
      ), p;
    })
  };
}, hC = window.Vuex.useStore, wC = () => {
  const e = hC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = M(), {
    isSectionSuggestionValid: o,
    isPageSuggestionValid: s,
    sectionSuggestionExists: a
  } = ti();
  return {
    fetchSectionSuggestionsByCollections: (u) => C(void 0, null, function* () {
      const d = [], i = yield le.fetchSectionSuggestionsByCollections(
        t.value,
        n.value
      );
      let c = i.filter(
        (m) => o(m)
      );
      const g = i.filter(
        (m) => !o(m)
      );
      return c = c.slice(0, u), d.push(...c), g.forEach((m) => {
        m && !a(m) && (m.isListable = !1, e.commit("suggestions/addSectionSuggestion", m));
      }), d.forEach(
        (m) => m.suggestionProvider = {
          id: m.collection.name,
          type: de
        }
      ), d;
    }),
    fetchPageSuggestionsByCollections: (u) => C(void 0, null, function* () {
      const d = [];
      let i = yield le.fetchPageSuggestionsByCollections(
        t.value,
        n.value
      );
      return i = i.filter(
        (c) => s(c)
      ), i = i.slice(0, u), d.push(...i), d.forEach(
        (c) => c.suggestionProvider = {
          id: c.collection.name,
          type: de
        }
      ), d;
    })
  };
};
window.Vue.computed;
const Kl = () => {
  const { currentSuggestionFilters: e } = M(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = cC(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = dC(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = pC(), {
    fetchPageSuggestionsByCollections: l,
    fetchSectionSuggestionsByCollections: u
  } = wC(), d = {
    [wt]: t,
    [jt]: o,
    [de]: l,
    [ft]: a
  }, i = {
    [wt]: n,
    [jt]: s,
    [de]: u,
    [ft]: r
  }, c = (p) => p.type === Fe ? p.id : p.type;
  return {
    getFilterProvider: c,
    getCurrentPageSuggestionProvider: () => d[c(e.value)],
    getCurrentSectionSuggestionProvider: () => i[c(e.value)]
  };
}, fC = window.Vuex.useStore, Yl = () => {
  const e = fC(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = Gl(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = M(), a = () => {
    const g = t(), m = e.state.suggestions.maxSuggestionsPerSlice;
    return m - g.length % m;
  }, r = () => {
    const g = n(), m = e.state.suggestions.maxSuggestionsPerSlice;
    return m - g.length % m;
  }, {
    getCurrentPageSuggestionProvider: l,
    getCurrentSectionSuggestionProvider: u
  } = Kl(), d = (g) => {
    try {
      const m = g.map((p) => p.sourceTitle);
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
      const g = a(), p = yield u()(
        g
      );
      p.forEach(
        (h) => e.commit("suggestions/addSectionSuggestion", h)
      ), d(p), e.commit("suggestions/decreaseSectionSuggestionsLoadingCount");
    }),
    fetchNextPageSuggestionsSlice: () => C(void 0, null, function* () {
      e.commit("suggestions/increasePageSuggestionsLoadingCount");
      const g = r(), p = yield l()(
        g
      );
      p.forEach(
        (h) => e.commit("suggestions/addPageSuggestion", h)
      ), d(p), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, _C = window.Vuex.useStore, Jl = () => {
  const e = _C(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = Yl(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = Gl();
  return () => C(void 0, null, function* () {
    const { targetLanguage: a } = H(e), r = s(0), l = o(0), { maxSuggestionsPerSlice: u } = e.state.suggestions, d = r.length === u, i = l.length === u;
    d && i || (yield e.dispatch(
      "suggestions/fetchAppendixSectionTitles",
      a.value
    ), t(), n());
  });
}, vC = window.Vuex.useStore, Ql = () => {
  const e = vC();
  return (t, n, o) => C(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    if (!s) {
      s = yield le.fetchSectionSuggestion(
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
          return new po({
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
}, Iu = window.Vue.computed, SC = window.Vuex.useStore, _t = () => {
  const e = SC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = M(), s = Iu(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = Iu(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (l, u) => s.value.getTitleForLanguage(l) || s.value.getTitleForLanguage(u)
  };
}, Ts = window.Vuex.useStore, Bs = (e, t, n, o, s = {}) => {
  const a = mw.config.get(
    "wgContentTranslationTranslateInTarget"
  ), r = G.getCurrentWikiLanguageCode();
  return a && t !== r ? (s = ne({ sx: !0 }, s), o && (s.section = o), location.href = G.getCXUrl(
    n,
    null,
    e,
    t,
    s
  ), !0) : !1;
}, { setLanguageURLParams: yC, pageURLParameter: CC, sectionURLParameter: kC } = M(), Ps = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), yC(t, n);
}, Np = () => {
  const e = Ts(), { enabledTargetLanguages: t, supportedLanguageCodes: n } = Ls();
  return () => C(void 0, null, function* () {
    yield e.dispatch("mediawiki/fetchSupportedLanguageCodes");
    const { sourceLanguage: o, targetLanguage: s } = eC(
      t.value,
      n.value
    );
    Bs(
      o,
      s,
      CC.value,
      kC.value
    ) || Ps(e, o, s);
  });
}, Up = () => {
  const e = Ts(), t = Jl();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = H(e);
    n === o && (n = a.value, o = s.value), Bs(
      n,
      o,
      null,
      null
    ) || (Ps(e, n, o), t());
  };
}, xC = () => {
  const e = Ts(), t = Jl();
  return (
    /** @param {Translation} translation */
    (n) => {
      const { sourceLanguage: o, targetLanguage: s, sourceTitle: a, sourceSectionTitle: r } = n;
      Bs(
        o,
        s,
        a,
        r,
        { draft: !0 }
      ) || (Ps(e, o, s), t());
    }
  );
}, bC = () => {
  const e = Ts();
  return (t) => {
    const { sourceLanguage: n, targetLanguage: o, sourceTitle: s } = t;
    Bs(
      n,
      o,
      s,
      null
    ) || Ps(e, n, o);
  };
}, $C = () => {
  const e = Ts(), t = Ql(), { currentLanguageTitleGroup: n, targetPageExists: o } = _t();
  return (s, a) => C(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: r,
      targetLanguageURLParameter: l,
      setPageURLParam: u,
      clearSectionURLParameter: d
    } = M();
    s === a && (s = l.value, a = r.value);
    const i = n.value.getTitleForLanguage(s);
    Bs(
      s,
      a,
      i,
      null
    ) || (Ps(e, s, a), u(i), o.value ? (d(), yield t(
      r.value,
      l.value,
      i
    )) : yield e.dispatch("mediawiki/fetchPageMetadata", {
      language: r.value,
      titles: [i]
    }), e.dispatch("application/getCXServerToken"));
  });
}, VC = window.Vuex.useStore, Ip = [], EC = (e, t, n) => Ip.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), AC = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  Ip.push(o);
}, DC = () => {
  const e = VC();
  return (t, n, o) => C(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !EC(t, n, o) && (s = yield le.fetchSectionSuggestion(
      t,
      o,
      n
    ), AC(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, LC = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', TC = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', BC = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', PC = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', FC = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', MC = '<path d="M10 1a9 9 0 109 9 9 9 0 00-9-9m5 10H5V9h10z"/>', NC = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', UC = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', IC = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', zC = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', RC = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', OC = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', HC = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', jC = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', qC = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', GC = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', WC = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', XC = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', KC = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', YC = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', JC = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', QC = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', ZC = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', ek = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', tk = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', nk = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', ok = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', sk = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', ak = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', Dl = LC, zp = TC, ik = {
  ltr: BC,
  shouldFlip: !0
}, Rp = {
  ltr: PC,
  shouldFlip: !0
}, Zl = {
  ltr: FC,
  shouldFlip: !0
}, rk = MC, Op = NC, Hp = UC, lk = IC, ck = zC, uk = RC, fo = OC, ec = HC, tc = jC, dk = qC, jp = GC, gk = {
  langCodeMap: {
    ar: WC
  },
  default: XC
}, mk = KC, nc = {
  ltr: YC,
  shouldFlip: !0
}, pk = JC, Fs = {
  ltr: QC,
  shouldFlip: !0
}, oc = {
  ltr: ZC,
  shouldFlip: !0
}, hk = {
  ltr: ek,
  shouldFlip: !0
}, qp = tk, wk = nk, fk = ok, _k = sk, Gp = ak, Wp = "cx-translation-session-position-", Xp = () => Wp + mw.user.sessionId(), Kp = () => {
  const e = Xp();
  let t = mw.storage.get(e);
  return t == null && (t = 0), parseInt(t);
}, vk = function() {
  const e = Kp();
  Object.keys(mw.storage.store).filter((n) => n.startsWith(Wp)).forEach((n) => mw.storage.remove(n));
  const t = Xp();
  mw.storage.set(t, e + 1);
};
let Ll = null;
function Sk(e) {
  if (Ll)
    return Promise.resolve(Ll);
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
function yk(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function Ck(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = e.access_method || "mobile web", n = mw.config.get("wgDBname"), o = `cx_sx_${mw.user.sessionId()}_${t}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), r = mw.user.getName(), l = Kp(), u = {
    $schema: "/analytics/mediawiki/content_translation_event/1.6.0",
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
  ) : d = Sk(r).then((i) => {
    Ll = i, mw.eventLog.submit(
      s,
      Object.assign({}, u, e, {
        user_global_edit_count: i,
        user_global_edit_count_bucket: yk(i)
      })
    );
  }), d.then(() => {
    vk();
  });
}
const vt = () => Ck, kk = window.Vue.ref, Yp = kk(null), xk = (e) => {
  Yp.value = e;
}, sc = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = M(), s = vt();
  return { logDashboardTranslationStartEvent: () => {
    const r = {
      event_type: "dashboard_translation_start",
      event_source: Yp.value,
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
    return o.value ? (r.translation_source_section = o.value, r.translation_type = "section") : r.translation_type = "article", s(r);
  }, setStartTranslationEventSource: xk };
}, bk = window.Vuex.useStore, Ms = () => {
  const e = bk(), t = he(), n = Ql(), { setTranslationURLParams: o } = M(), { setStartTranslationEventSource: s } = sc();
  return (a, r, l, u) => C(void 0, null, function* () {
    const d = yield n(
      r,
      l,
      a
    );
    d && (e.dispatch("application/getCXServerToken"), o(d), s(u), t.push({
      name: "sx-translation-confirmer"
    }));
  });
};
const ta = window.Vue.withModifiers, Pi = window.Vue.toDisplayString, Fi = window.Vue.createElementVNode, Oe = window.Vue.unref, na = window.Vue.openBlock, zu = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Jt = window.Vue.createVNode, Cn = window.Vue.withCtx, Ru = window.Vue.createElementBlock, $k = ["lang", "href", "textContent"], Vk = {
  key: 1,
  class: "flex"
}, Ek = { key: 2 }, Ak = window.Vuex.useStore, Ou = window.Vue.computed, Hu = window.Vue.ref, Mi = window.Codex.CdxButton, Ni = window.Codex.CdxIcon, Dk = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: zl,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Ak(), o = Hu(!0), s = Hu(null), a = Ou(() => {
      var w;
      return (w = s.value) == null ? void 0 : w.missingSections;
    }), r = Ou(
      () => a.value && Object.keys(a.value)[0]
    );
    DC()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((w) => s.value = w).catch((w) => console.log(w)).finally(() => o.value = !1), he(), Ds();
    const { setTranslationURLParams: u, setSectionURLParam: d } = M(), i = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, c = Ms(), { sourceLanguage: g, targetLanguage: m } = H(n), p = bC(), h = (w) => {
      p(t.translation), c(
        t.translation.sourceTitle,
        g.value,
        m.value,
        "continue_published"
      ), w && d(w);
    };
    return (w, _) => (na(), zu(Bp, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: i
    }, {
      title: Cn(() => [
        Fi("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: _[0] || (_[0] = ta(() => {
          }, ["stop"])),
          textContent: Pi(e.translation.sourceTitle)
        }, null, 8, $k)
      ]),
      "mid-content": Cn(() => [
        Jt(Oe(B), { class: "ma-0" }, {
          default: Cn(() => [
            Jt(Oe(k), null, {
              default: Cn(() => [
                o.value ? (na(), zu(Oe(Xe), { key: 0 })) : a.value ? (na(), Ru("div", Vk, [
                  Jt(Oe(Mi), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: _[1] || (_[1] = ta((f) => h(r.value), ["stop"]))
                  }, {
                    default: Cn(() => [
                      Jt(Oe(Ni), {
                        class: "me-1",
                        icon: Oe(Dl)
                      }, null, 8, ["icon"]),
                      Fi("span", null, Pi(r.value), 1)
                    ]),
                    _: 1
                  }),
                  Jt(Oe(Mi), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": w.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: _[2] || (_[2] = ta((f) => h(null), ["stop"]))
                  }, {
                    default: Cn(() => [
                      Jt(Oe(Ni), { icon: Oe(tc) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : (na(), Ru("div", Ek, [
                  Jt(Oe(Mi), {
                    class: "cx-published-translation__start-new-translation-button flex items-center pa-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: _[3] || (_[3] = ta((f) => h(null), ["stop"]))
                  }, {
                    default: Cn(() => [
                      Jt(Oe(Ni), {
                        class: "me-1",
                        icon: Oe(Dl)
                      }, null, 8, ["icon"]),
                      Fi("span", null, Pi(w.$i18n("sx-published-translation-new-translation-button-label")), 1)
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
}, ju = window.Vuex.useStore, Lk = () => {
  const e = ju(), { commit: t } = ju(), { sourceLanguage: n, targetLanguage: o } = H(e), s = vt();
  return (a) => C(void 0, null, function* () {
    a.sectionTranslationId ? (yield Ke.deleteTranslation(
      a.sectionTranslationId,
      a.translationId,
      a.sectionId
    )) && t(
      "translator/removeTranslationBySectionTranslationId",
      a.sectionTranslationId
    ) : (yield Ke.deleteCXTranslation(
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
const Tk = {
  name: "SxConfirmTranslationDeletionDialog",
  components: {
    MwButton: xe,
    MwDialog: Ye
  },
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: Ya,
      default: null
    }
  },
  emits: ["update:modelValue", "continue-translation", "discard-translation"],
  setup(e, { emit: t }) {
    const n = () => t("update:modelValue", !1), o = Lk();
    return { closeDialog: n, deleteTranslation: () => {
      o(e.translation), n();
    } };
  }
}, Bk = window.Vue.resolveDirective, Ui = window.Vue.createElementVNode, Pk = window.Vue.withDirectives, qu = window.Vue.resolveComponent, Gu = window.Vue.createVNode, Wu = window.Vue.withCtx, Fk = window.Vue.openBlock, Mk = window.Vue.createBlock, Nk = { class: "pa-4" }, Uk = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" };
function Ik(e, t, n, o, s, a) {
  const r = qu("mw-button"), l = qu("mw-dialog"), u = Bk("i18n");
  return Fk(), Mk(l, {
    value: n.modelValue,
    class: "sx-confirm-back-navigation-dialog",
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.gray700,
    header: !1,
    "min-height": "unset"
  }, {
    footer: Wu(() => [
      Ui("div", Uk, [
        Gu(r, {
          class: "grow py-3",
          large: "",
          label: e.$i18n("sx-translation-deletion-cancel-button-label"),
          onClick: o.closeDialog
        }, null, 8, ["label", "onClick"]),
        Gu(r, {
          class: "grow py-3",
          large: "",
          destructive: "",
          label: e.$i18n("sx-translation-deletion-confirm-button-label"),
          onClick: o.deleteTranslation
        }, null, 8, ["label", "onClick"])
      ])
    ]),
    default: Wu(() => [
      Ui("div", Nk, [
        Pk(Ui("span", null, null, 512), [
          [u, void 0, "sx-confirm-translation-deletion-dialog-body"]
        ])
      ])
    ]),
    _: 1
  }, 8, ["value", "overlay-color"]);
}
const zk = /* @__PURE__ */ F(Tk, [["render", Ik]]);
function Rk(e, t, n) {
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
        O.getAutonym(a).toLowerCase().includes(t.toLowerCase()) || // Search using script name
        O.getScript(a).toLowerCase().includes(t.toLowerCase())
      )
    );
    return s.length ? s : n ? (yield Ok(t, n)).filter((r) => e.includes(r)) : [];
  });
}
function Xu(e, t, n) {
  return C(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(O.sortByAutonym) : (yield Rk(e, t, n)).sort(O.sortByAutonym);
  });
}
function Ok(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function Hk() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function jk(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
function qk(e) {
  const t = e.length;
  return t < 10 ? "few-results" : t < 30 ? "some-results" : "many-results";
}
const Gk = window.Vue.computed;
function Wk(e, t) {
  const n = Gk(() => {
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
const Ii = window.Vue.ref, Ku = window.Vue.watch, Xk = window.Vue.computed;
function Kk(e, t, n) {
  const o = Ii(""), s = Ii(-1), a = Ii(null), r = () => {
    s.value++, s.value >= l.value.length && (s.value = 0);
  }, l = Xk(
    () => e.value ? t.value : [...n, ...t.value]
  ), u = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return Ku(e, () => {
    s.value = -1;
  }), Ku(s, () => C(this, null, function* () {
    var d;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = l.value[s.value], (d = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || d.scrollIntoView(!1);
  })), { next: r, prev: u, langSelectorContainer: a, selectedLanguage: o };
}
function ac(e, t, n) {
  let o;
  const s = (...a) => {
    const r = this, l = () => {
      o = null, n || e.apply(r, a);
    };
    n && !o && e.apply(r, a), (!o || t) && (clearTimeout(o), o = setTimeout(l, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const zi = window.Vue.ref, Yk = window.Vue.watch, Jk = window.Vue.onMounted, Yu = window.Vue.computed, Qk = {
  name: "MwLanguageSelector",
  components: {
    MwInput: Nl
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
      default: Hk
    }
  },
  emits: ["select", "close"],
  setup(e, t) {
    const n = zi(null), o = zi(""), s = zi([]), a = Yu(
      () => jk(s.value)
    ), r = Yu(
      () => qk(s.value)
    ), l = (_) => t.emit("select", _), u = () => t.emit("close"), { autocompletion: d, onTabSelect: i } = Wk(
      o,
      s
    ), { next: c, prev: g, langSelectorContainer: m, selectedLanguage: p } = Kk(o, s, e.suggestions), h = () => {
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
    return Yk(o, ac(() => C(this, null, function* () {
      s.value = yield Xu(
        e.languages,
        o.value,
        e.searchAPI
      );
    }), 300)), Jk(() => C(this, null, function* () {
      e.autofocus && setTimeout(() => n.value.focus(), 500), s.value = yield Xu(
        e.languages,
        "",
        e.searchAPI
      );
    })), {
      autocompletion: d,
      close: u,
      getAutonym: O.getAutonym,
      getDir: O.getDir,
      langSelectorContainer: m,
      mwIconClose: uo,
      mwIconSearch: Mm,
      next: c,
      onEnter: h,
      onTabSelect: i,
      prev: g,
      resultsDisplayClass: r,
      searchInputElement: n,
      searchQuery: o,
      searchResultsByScript: a,
      select: l,
      selectedLanguage: p
    };
  }
}, oa = window.Vue.renderSlot, Zk = window.Vue.resolveComponent, Ju = window.Vue.createVNode, Ao = window.Vue.withModifiers, Do = window.Vue.withKeys, Qt = window.Vue.createElementVNode, ex = window.Vue.resolveDirective, sa = window.Vue.withDirectives, Ri = window.Vue.renderList, Oi = window.Vue.Fragment, Et = window.Vue.openBlock, At = window.Vue.createElementBlock, Qu = window.Vue.toDisplayString, aa = window.Vue.normalizeClass, Hi = window.Vue.createCommentVNode, tx = {
  ref: "langSelectorContainer",
  class: "mw-ui-language-selector"
}, nx = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, ox = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, sx = { class: "results px-3 pt-4" }, ax = { class: "results-header ps-8 pb-2" }, ix = { class: "results-languages--suggestions pa-0 ma-0" }, rx = ["lang", "dir", "aria-selected", "onClick", "textContent"], lx = { class: "results px-3 pt-4" }, cx = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, ux = ["lang", "dir", "aria-selected", "onClick", "textContent"], dx = ["aria-selected"], gx = { class: "no-results px-3 py-4" }, mx = { class: "ps-8" };
function px(e, t, n, o, s, a) {
  const r = Zk("mw-input"), l = ex("i18n");
  return Et(), At("div", tx, [
    oa(e.$slots, "search", {}, () => [
      Qt("div", nx, [
        Ju(r, {
          value: o.autocompletion,
          "onUpdate:value": t[0] || (t[0] = (u) => o.autocompletion = u),
          icon: o.mwIconSearch,
          "icon-size": 20,
          class: "mw-ui-language-selector__autocomplete pa-4",
          disabled: ""
        }, null, 8, ["value", "icon"]),
        Ju(r, {
          ref: "searchInputElement",
          value: o.searchQuery,
          "onUpdate:value": t[1] || (t[1] = (u) => o.searchQuery = u),
          class: "mw-ui-language-selector__search pa-4",
          icon: o.mwIconSearch,
          "icon-size": 20,
          placeholder: n.placeholder,
          autofocus: n.autofocus,
          onKeydown: [
            Do(Ao(o.onEnter, ["prevent"]), ["enter"]),
            Do(Ao(o.next, ["stop", "prevent"]), ["down"]),
            Do(Ao(o.prev, ["stop", "prevent"]), ["up"]),
            Do(Ao(o.close, ["prevent"]), ["esc"]),
            Do(Ao(o.onTabSelect, ["prevent"]), ["tab"])
          ]
        }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
      ])
    ]),
    Qt("section", ox, [
      n.suggestions.length && !o.searchQuery ? oa(e.$slots, "suggestions", { key: 0 }, () => [
        Qt("section", sx, [
          sa(Qt("p", ax, null, 512), [
            [l, void 0, "cx-sx-language-selector-suggestions"]
          ]),
          Qt("ul", ix, [
            (Et(!0), At(Oi, null, Ri(n.suggestions, (u) => (Et(), At("li", {
              key: u,
              class: aa(["language pa-2 ps-8 ma-0", u === o.selectedLanguage ? "language--selected" : ""]),
              lang: u,
              dir: o.getDir(u),
              "aria-selected": u === o.selectedLanguage || null,
              tabindex: "-1",
              role: "option",
              onClick: (d) => o.select(u),
              textContent: Qu(o.getAutonym(u))
            }, null, 10, rx))), 128))
          ])
        ])
      ]) : Hi("", !0),
      o.searchResultsByScript.length ? oa(e.$slots, "search", { key: 1 }, () => [
        Qt("section", lx, [
          n.suggestions.length && !o.searchQuery ? sa((Et(), At("p", cx, null, 512)), [
            [l, void 0, "cx-sx-language-selector-all-languages"]
          ]) : Hi("", !0),
          (Et(!0), At(Oi, null, Ri(o.searchResultsByScript, (u, d) => (Et(), At("ul", {
            key: d,
            class: aa(["results-languages pa-0 ma-0 mb-6", o.resultsDisplayClass])
          }, [
            (Et(!0), At(Oi, null, Ri(u, (i) => (Et(), At("li", {
              key: i,
              class: aa(["language pa-2 ps-8 ma-0", i === o.selectedLanguage ? "language--selected" : ""]),
              lang: i,
              dir: o.getDir(i),
              role: "option",
              "aria-selected": i === o.selectedLanguage || null,
              tabindex: "-1",
              onClick: (c) => o.select(i),
              textContent: Qu(o.getAutonym(i))
            }, null, 10, ux))), 128)),
            n.allOptionEnabled && !o.searchQuery ? sa((Et(), At("li", {
              key: 0,
              class: aa(["language pa-2 ps-8 ma-0", o.selectedLanguage === "all" ? "language--selected" : ""]),
              role: "option",
              "aria-selected": o.selectedLanguage === "all" || null,
              tabindex: "-1",
              onClick: t[2] || (t[2] = (i) => o.select("all"))
            }, null, 10, dx)), [
              [l, void 0, "cx-translation-list-all-languages-option-label"]
            ]) : Hi("", !0)
          ], 2))), 128))
        ])
      ]) : oa(e.$slots, "noresults", { key: 2 }, () => [
        Qt("section", gx, [
          sa(Qt("h3", mx, null, 512), [
            [l, void 0, "cx-sx-language-selector-no-search-results"]
          ])
        ])
      ])
    ])
  ], 512);
}
const Jp = /* @__PURE__ */ F(Qk, [["render", px]]);
const we = window.Vue.unref, hx = window.Vue.resolveDirective, Zu = window.Vue.withDirectives, Lo = window.Vue.openBlock, To = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const ed = window.Vue.toDisplayString, td = window.Vue.withModifiers, kn = window.Vue.withCtx, Dt = window.Vue.createVNode, wx = { class: "sx-translation-list-language-selector" }, fx = {
  key: 0,
  class: "mw-ui-autonym"
}, _x = ["lang", "dir", "textContent"], vx = {
  key: 0,
  class: "mw-ui-autonym"
}, Sx = ["lang", "dir", "textContent"], Bo = window.Vue.computed, yx = window.Vue.inject, Cx = window.Vue.ref, ic = {
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
    const n = e, o = t, s = yx("breakpoints"), a = Bo(() => s.value.mobile), r = Cx(null), l = Bo(() => !!r.value), u = () => r.value = "source", d = () => r.value = "target", i = () => r.value = null, c = Bo(() => {
      if (!l.value)
        return;
      const w = {
        source: "sourceLanguages",
        target: "targetLanguages"
      }[r.value];
      return n[w];
    }), g = (h) => {
      const _ = {
        source: "update:selectedSourceLanguage",
        target: "update:selectedTargetLanguage"
      }[r.value];
      i(), o(_, h);
    }, m = Bo(
      () => n.selectedSourceLanguage === "all"
    ), p = Bo(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, w) => {
      const _ = hx("i18n");
      return Lo(), To("div", wx, [
        Dt(we(B), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: kn(() => [
            Dt(we(k), {
              class: "flex justify-end",
              cols: "5"
            }, {
              default: kn(() => [
                Dt(we(xe), {
                  indicator: we(vl),
                  class: "pa-3 sx-translation-list-language-selector__button",
                  type: "text",
                  onClick: td(u, ["stop"])
                }, {
                  default: kn(() => [
                    m.value ? Zu((Lo(), To("span", fx, null, 512)), [
                      [_, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Lo(), To("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: we(O.getDir)(e.selectedSourceLanguage),
                      textContent: ed(we(O.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, _x))
                  ]),
                  _: 1
                }, 8, ["indicator"])
              ]),
              _: 1
            }),
            Dt(we(k), {
              class: "sx-translation-list-language-selector__arrow flex justify-center",
              cols: "2"
            }, {
              default: kn(() => [
                Dt(we(Ee), { icon: we(Fm) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Dt(we(k), { cols: "5" }, {
              default: kn(() => [
                Dt(we(xe), {
                  indicator: we(vl),
                  class: "pa-3 sx-translation-list-language-selector__button",
                  type: "text",
                  disabled: e.targetLanguages.length < 2,
                  onClick: td(d, ["stop"])
                }, {
                  default: kn(() => [
                    p.value ? Zu((Lo(), To("span", vx, null, 512)), [
                      [_, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Lo(), To("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: we(O.getDir)(e.selectedTargetLanguage),
                      textContent: ed(we(O.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, Sx))
                  ]),
                  _: 1
                }, 8, ["indicator", "disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Dt(we(Ye), {
          value: l.value,
          "onUpdate:value": w[0] || (w[0] = (f) => l.value = f),
          animation: "slide-up",
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-opacity": 0,
          onClose: i
        }, {
          default: kn(() => [
            Dt(we(Jp), {
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
}, kx = window.Vue.toDisplayString, xx = window.Vue.createElementVNode, nd = window.Vue.createVNode, od = window.Vue.unref, Zt = window.Vue.openBlock, ia = window.Vue.createBlock, sd = window.Vue.createCommentVNode, ad = window.Vue.renderList, id = window.Vue.Fragment, ra = window.Vue.createElementBlock, bx = window.Vue.normalizeClass, rd = window.Vue.withCtx, $x = ["textContent"], Vx = {
  key: 1,
  class: "cx-translation-list-wrapper"
}, Ex = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, la = window.Vue.ref, Lt = window.Vue.computed, Ax = window.Vuex.useStore, ld = {
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
    const t = e, n = la("all"), o = la("all"), s = Ax(), a = Lt(
      () => s.state.translator.translationsLoaded[t.translationStatus]
    ), { enabledTargetLanguages: r } = Ls(), l = la(!1), u = la(null), d = Lt(
      () => t.translationStatus === "draft"
    ), i = Lt(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), c = Lt(
      () => n.value === "all"
    ), g = Lt(
      () => o.value === "all"
    ), m = Lt(
      () => i.value.filter(
        (f) => (c.value || f.sourceLanguage === n.value) && (g.value || f.targetLanguage === o.value)
      ).sort((f, S) => f.lastUpdatedTimestamp < S.lastUpdatedTimestamp)
    ), p = Lt(() => {
      let f = i.value.map(
        (S) => S.targetLanguage
      );
      return r.value && (f = f.filter(
        (S) => r.value.includes(S)
      )), [...new Set(f)];
    }), h = Lt(() => {
      const f = i.value.map(
        (S) => S.sourceLanguage
      );
      return [...new Set(f)];
    }), w = (f) => {
      u.value = f, l.value = !0;
    }, _ = Lt(() => t.activeStatus === t.translationStatus);
    return (f, S) => _.value ? (Zt(), ia(od(it), {
      key: 0,
      class: bx(`cx-translation-list--${e.translationStatus}`)
    }, {
      header: rd(() => [
        xx("h3", {
          class: "mw-ui-card__title pa-4 pt-5 mb-0",
          textContent: kx(f.$i18n(`cx-translation-label-${e.translationStatus}`))
        }, null, 8, $x)
      ]),
      default: rd(() => [
        nd(ic, {
          "selected-source-language": n.value,
          "onUpdate:selectedSourceLanguage": S[0] || (S[0] = (y) => n.value = y),
          "selected-target-language": o.value,
          "onUpdate:selectedTargetLanguage": S[1] || (S[1] = (y) => o.value = y),
          "source-languages": h.value,
          "target-languages": p.value,
          "all-option-enabled": ""
        }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"]),
        a.value ? sd("", !0) : (Zt(), ia(od(Xe), { key: 0 })),
        d.value ? (Zt(), ra("div", Vx, [
          (Zt(!0), ra(id, null, ad(m.value, (y) => (Zt(), ia(Yy, {
            key: `${e.translationStatus}-${y.key}`,
            translation: y,
            onDeleteTranslation: (A) => w(y)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (Zt(), ra("div", Ex, [
          (Zt(!0), ra(id, null, ad(m.value, (y) => (Zt(), ia(Dk, {
            key: `${e.translationStatus}-${y.key}`,
            translation: y,
            onDeleteTranslation: (A) => w(y)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])),
        nd(zk, {
          modelValue: l.value,
          "onUpdate:modelValue": S[2] || (S[2] = (y) => l.value = y),
          translation: u.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : sd("", !0);
  }
}, Dx = window.Vue.computed, Lx = window.Vuex.useStore, Ne = () => {
  const e = Lx(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = M();
  return { sectionSuggestion: Dx(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ) };
}, Tx = window.Vuex.useStore, Bx = window.Vue.computed, Gt = () => {
  const e = Tx(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = M();
  return { currentTranslation: Bx(
    () => e.getters["translator/getDraftTranslation"](
      s.value,
      o.value,
      t.value,
      n.value
    )
  ) };
}, cd = window.Vue.computed, Px = window.Vuex.useStore, Ue = () => {
  const e = Px(), { sectionSuggestion: t } = Ne(), { currentTranslation: n } = Gt(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = M(), r = cd(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), l = cd(() => {
    var d, i;
    const u = ((d = t.value) == null ? void 0 : d.targetTitle) || ((i = n.value) == null ? void 0 : i.targetTitle);
    return e.getters["mediawiki/getPage"](
      a.value,
      u
    );
  });
  return { currentSourcePage: r, currentTargetPage: l };
}, Fx = window.Vue.ref, Mx = window.Vue.watchEffect, Nx = (e, t) => C(void 0, null, function* () {
  const n = e.language, o = e.title, s = e.articleSize, a = t.missingSections, l = (yield le.fetchSuggestionSourceSections(
    n,
    o
  )).sections.filter((u) => u.level === "2").reduce((u, d, i, c) => {
    const g = i < c.length - 1 ? c[i + 1].byteoffset : s;
    return u[d.line] = g - d.byteoffset, u;
  }, {});
  return Object.keys(l).filter((u) => a[u]).reduce((u, d) => u + l[d], 0);
}), ji = (e) => {
  const s = e / 5 / 200;
  return Math.ceil(s);
}, Ux = (e) => {
  const t = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-whole-article",
    Math.round(t * 2) / 2,
    e
  ];
}, Ix = (e, t) => {
  const n = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-sections",
    Math.round(n * 2) / 2,
    e,
    t
  ];
}, Qp = () => {
  const { currentSourcePage: e } = Ue(), { sectionSuggestion: t } = Ne(), n = Fx(null);
  return Mx(() => {
    if (t.value)
      Nx(
        e.value,
        t.value
      ).then((o) => {
        n.value = Ix(
          ji(o),
          Object.keys(t.value.missingSections).length
        );
      });
    else if (e.value) {
      const o = ji(e.value.articleSize);
      n.value = Ux(o);
    }
  }), { translationSizeMessageArgs: n, bytesToMinutes: ji };
};
const Z = window.Vue.unref, Qe = window.Vue.createVNode, en = window.Vue.createElementVNode, Po = window.Vue.toDisplayString, Ae = window.Vue.withCtx, zx = window.Vue.resolveDirective, qi = window.Vue.withDirectives, xn = window.Vue.openBlock, Rn = window.Vue.createBlock, On = window.Vue.createCommentVNode, Rx = window.Vue.createTextVNode, ud = window.Vue.withModifiers, Ox = window.Vue.createElementBlock, Hx = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, jx = { class: "col shrink pe-4" }, qx = ["lang", "dir", "textContent"], Gx = ["lang", "dir", "textContent"], Wx = ["textContent"], Xx = ["textContent"], Gi = window.Codex.CdxIcon, Ze = window.Vue.computed, Kx = window.Vue.inject, Yx = window.Vuex.useStore, Jx = window.Codex.CdxInfoChip, Tl = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [po, hn, ro],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = Yx(), { bytesToMinutes: o } = Qp(), s = Ze(() => t.suggestion), a = Ze(
      () => s.value.sourceTitle || s.value.title
    ), r = Ze(
      () => n.getters["mediawiki/getPage"](
        s.value.sourceLanguage,
        a.value
      )
    ), l = Ze(
      () => {
        var f;
        return (f = s.value) == null ? void 0 : f.missingSectionsCount;
      }
    ), u = Ze(() => {
      var f;
      return (f = r.value) == null ? void 0 : f.description;
    }), d = Ze(
      () => s.value instanceof hn
    ), i = Ze(
      () => s.value instanceof ro
    ), { sourceLanguageAutonym: c, targetLanguageAutonym: g } = H(n), m = Ze(
      () => i.value ? Op : Hp
    ), p = Kx("colors"), h = Ze(
      () => i.value ? p.blue600 : "currentColor"
    ), w = Ze(() => {
      var f;
      return o((f = r.value) == null ? void 0 : f.articleSize) < 15;
    }), _ = Ze(
      () => s.value instanceof tp || s.value instanceof np
    );
    return (f, S) => {
      const y = zx("i18n");
      return s.value ? (xn(), Ox("div", Hx, [
        en("div", jx, [
          Qe(Z(Ul), {
            class: "cx-suggestion__thumbnail",
            thumbnail: r.value && r.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        Qe(Z(B), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: Ae(() => [
            Qe(Z(B), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: Ae(() => [
                Qe(Z(k), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: Ae(() => [
                    en("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: s.value.sourceLanguage,
                      dir: Z(O.getDir)(s.value.sourceLanguage),
                      textContent: Po(a.value)
                    }, null, 8, qx)
                  ]),
                  _: 1
                }),
                Qe(Z(k), { shrink: "" }, {
                  default: Ae(() => [
                    en("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: s.value.sourceLanguage,
                      dir: Z(O.getDir)(s.value.sourceLanguage),
                      textContent: Po(u.value)
                    }, null, 8, Gx)
                  ]),
                  _: 1
                }),
                w.value && !d.value && !_.value ? (xn(), Rn(Z(k), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: Ae(() => [
                    qi(en("small", null, null, 512), [
                      [y, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : On("", !0),
                d.value ? (xn(), Rn(Z(k), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
                  shrink: ""
                }, {
                  default: Ae(() => [
                    qi(en("small", null, null, 512), [
                      [y, [l.value], "cx-sx-translation-suggestion-info"]
                    ])
                  ]),
                  _: 1
                })) : i.value ? (xn(), Rn(Z(k), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: Ae(() => [
                    Qe(Z(B), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: Ae(() => [
                        Qe(Z(k), { grow: "" }, {
                          default: Ae(() => [
                            en("small", {
                              textContent: Po(Z(c))
                            }, null, 8, Wx),
                            Qe(Z(Gi), {
                              icon: Z(ik),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            en("small", {
                              textContent: Po(Z(g))
                            }, null, 8, Xx)
                          ]),
                          _: 1
                        }),
                        l.value ? (xn(), Rn(Z(k), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: Ae(() => [
                            qi(en("small", null, null, 512), [
                              [y, [
                                l.value
                              ], "cx-sx-translation-suggestion-info"]
                            ])
                          ]),
                          _: 1
                        })) : On("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : On("", !0),
                _.value ? (xn(), Rn(Z(k), {
                  key: 3,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: Ae(() => [
                    Qe(Z(Jx), { icon: Z(Zl) }, {
                      default: Ae(() => [
                        Rx(Po(s.value.collection.name), 1)
                      ]),
                      _: 1
                    }, 8, ["icon"])
                  ]),
                  _: 1
                })) : On("", !0)
              ]),
              _: 1
            }),
            Qe(Z(k), { shrink: "" }, {
              default: Ae(() => [
                i.value ? On("", !0) : (xn(), Rn(Z(Gi), {
                  key: 0,
                  icon: Z(fo),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: S[0] || (S[0] = ud((A) => f.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                Qe(Z(Gi), {
                  class: "cx-suggestion__favorite-button",
                  icon: m.value,
                  "icon-color": h.value,
                  onClick: S[1] || (S[1] = ud((A) => f.$emit("bookmark"), ["stop"]))
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : On("", !0);
    };
  }
};
const De = window.Vue.unref, tn = window.Vue.createVNode, Tt = window.Vue.withCtx, Qx = window.Vue.resolveDirective, ca = window.Vue.createElementVNode, dd = window.Vue.withDirectives, Wi = window.Vue.toDisplayString, gd = window.Vue.createTextVNode, Zx = window.Vue.vShow, md = window.Vue.renderList, pd = window.Vue.Fragment, Fo = window.Vue.openBlock, Xi = window.Vue.createElementBlock, eb = window.Vue.normalizeClass, hd = window.Vue.createBlock, tb = { class: "sx-suggestions-filters" }, nb = { class: "mb-0" }, ob = { class: "sx-suggestions-filters__group-label mb-3" }, sb = { class: "sx-suggestions-filters__group-filters mb-3" }, wd = window.Vue.ref, ab = window.Vue.computed, ib = window.Vue.inject, fd = window.Codex.CdxButton, rb = window.Codex.CdxIcon, lb = window.Codex.CdxInfoChip, cb = {
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
      [wt]: Gp,
      [jt]: jp,
      [de]: Zl,
      [ft]: null
    }, { allFilters: s, isFilterSelected: a, selectFilter: r } = Xl(), l = () => n("update:modelValue", !1), u = () => {
      i.value && r(i.value), l();
    }, d = wd(!1), i = wd(null), c = (w) => {
      i.value = w, d.value = !0;
    }, g = (w) => i.value ? i.value.id === w.id && i.value.type === w.type : a(w), m = ib("breakpoints"), p = ab(() => m.value.mobile), { getFilterProvider: h } = Kl();
    return (w, _) => {
      const f = Qx("i18n");
      return Fo(), hd(De(Ye), {
        value: e.modelValue,
        animation: "slide-up",
        fullscreen: p.value,
        header: !1,
        "overlay-opacity": 0
      }, {
        default: Tt(() => [
          ca("section", tb, [
            tn(De(B), {
              class: "sx-suggestions-filters__header ma-0 py-3",
              align: "stretch",
              justify: "start"
            }, {
              default: Tt(() => [
                tn(De(k), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: Tt(() => [
                    tn(De(fd), {
                      class: "pa-0 ms-4",
                      weight: "quiet",
                      "aria-label": w.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: l
                    }, {
                      default: Tt(() => [
                        tn(De(rb), { icon: De(fo) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                tn(De(k), {
                  grow: "",
                  class: "px-4",
                  align: "center"
                }, {
                  default: Tt(() => [
                    dd(ca("h5", nb, null, 512), [
                      [f, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                tn(De(k), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: Tt(() => [
                    dd(tn(De(fd), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: u
                    }, {
                      default: Tt(() => [
                        gd(Wi(w.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [Zx, d.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            tn(De(k), { class: "px-4" }, {
              default: Tt(() => [
                (Fo(!0), Xi(pd, null, md(De(s), (S) => (Fo(), Xi("div", {
                  key: S.id,
                  class: "sx-suggestions-filters__group"
                }, [
                  ca("div", ob, Wi(S.label), 1),
                  ca("div", sb, [
                    (Fo(!0), Xi(pd, null, md(S.filters, (y) => (Fo(), hd(De(lb), {
                      key: y.id,
                      class: eb(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
                        "sx-suggestions-filters__filter--active": g(y)
                      }]),
                      icon: o[De(h)(y)],
                      onClick: (A) => c(y)
                    }, {
                      default: Tt(() => [
                        gd(Wi(y.label), 1)
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
const ua = window.Vue.unref, da = window.Vue.openBlock, _d = window.Vue.createBlock;
window.Vue.createCommentVNode;
const ub = window.Vue.renderList, db = window.Vue.Fragment, vd = window.Vue.createElementBlock, gb = window.Vue.toDisplayString, mb = window.Vue.createTextVNode, pb = window.Vue.normalizeClass, hb = window.Vue.withCtx, wb = window.Vue.createVNode, fb = {
  key: 1,
  class: "cx-suggestion-list__filters flex px-4 pb-2"
}, _b = window.Codex.CdxInfoChip, Sd = window.Vue.ref, vb = window.Vue.computed, yd = window.Vue.watch, Sb = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = me(), {
      getFiltersSummary: n,
      selectFilter: o,
      isFilterSelected: s,
      waitingForPageCollectionsFetch: a
    } = Xl(), r = Sd(!1), l = () => r.value = !0, u = {
      [wt]: Gp,
      [jt]: jp,
      [de]: Zl,
      [ft]: null
    }, { getFilterProvider: d } = Kl(), i = (m) => ({
      id: m.id,
      type: m.type,
      icon: u[d(m)],
      label: m.label,
      action: o
    }), c = Sd(n());
    yd(r, (m) => {
      m || (c.value = n());
    }), yd(a, (m) => {
      m || (c.value = n());
    });
    const g = vb(() => [
      ...c.value.map(i),
      {
        id: "more",
        icon: tc,
        label: t.i18n("cx-sx-suggestions-filter-more-label"),
        action: l
      }
    ]);
    return (m, p) => ua(a) ? (da(), _d(ua(Xe), { key: 0 })) : (da(), vd("div", fb, [
      (da(!0), vd(db, null, ub(g.value, (h) => (da(), _d(ua(_b), {
        key: h.label,
        class: pb(["cx-suggestion-list__filter py-1 me-1", { "cx-suggestion-list__filter--active": ua(s)(h) }]),
        icon: h.icon,
        onClick: (w) => h.action(h)
      }, {
        default: hb(() => [
          mb(gb(h.label), 1)
        ]),
        _: 2
      }, 1032, ["class", "icon", "onClick"]))), 128)),
      wb(cb, {
        modelValue: r.value,
        "onUpdate:modelValue": p[0] || (p[0] = (h) => r.value = h)
      }, null, 8, ["modelValue"])
    ]));
  }
}, yb = window.Vue.computed, Cb = () => {
  const { supportedLanguageCodes: e, enabledTargetLanguages: t } = Ls(), n = yb(() => t.value || e.value);
  return {
    supportedLanguageCodes: e,
    availableTargetLanguages: n
  };
}, Mo = window.Vue.computed, Cd = window.Vue.ref, kb = window.Vue.watch, xb = window.Vuex.useStore, bb = () => {
  const e = xb(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = M(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = Gl(), r = vt(), l = Mo(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), u = Mo(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), d = Mo(
    () => !l.value && !u.value
  ), i = Cd(0), c = Cd(0), { maxSuggestionsPerSlice: g } = e.state.suggestions, m = 4, p = Mo(
    () => a(i.value)
  ), h = Mo(
    () => s(c.value)
  ), w = () => {
    y(), A();
  }, {
    fetchNextSectionSuggestionsSlice: _,
    fetchNextPageSuggestionsSlice: f
  } = Yl(), S = (j) => j.length === g, y = () => {
    const j = S(
      p.value
    ), P = (i.value + 1) % m, N = S(
      a(P)
    );
    (!j || !N) && _(), j && V();
  }, A = () => {
    const j = S(
      h.value
    ), P = (c.value + 1) % m, N = S(
      s(P)
    );
    (!j || !N) && f(), j && L();
  }, T = (j) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", j), y();
  }, U = (j) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", j), A();
  }, V = () => i.value = (i.value + 1) % m, L = () => c.value = (c.value + 1) % m;
  return kb(
    o,
    () => {
      c.value = 0, A(), i.value = 0, y();
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
    showRefreshButton: d,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: s
  };
}, $b = window.Vuex.useStore, rc = () => {
  const e = $b(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = Yl(), o = (d, i, c) => e.state.suggestions.pageSuggestions.find(
    (g) => g.sourceLanguage === d && g.targetLanguage === i && g.sourceTitle === c
  ), s = (d) => C(void 0, null, function* () {
    const { sourceTitle: i, sourceLanguage: c, targetLanguage: g } = d;
    yield le.markFavorite(i, c, g);
    const m = new ro({
      title: i,
      sourceLanguage: c,
      targetLanguage: g
    });
    e.commit("suggestions/addFavoriteSuggestion", m);
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
      const m = e.getters["suggestions/getSectionSuggestionsForArticle"](i, c, d);
      m != null && m.isListable && (e.commit(
        "suggestions/removeSectionSuggestionFromList",
        m
      ), t()), yield le.markFavorite(
        d,
        i,
        c
      );
      const p = new ro({
        title: d,
        sourceLanguage: i,
        targetLanguage: c
      });
      e.commit("suggestions/addFavoriteSuggestion", p);
    }),
    removeFavoriteSuggestion: (d) => (e.commit("suggestions/removeFavoriteSuggestion", d), le.unmarkFavorite(d))
  };
}, Vb = () => {
  const { currentSuggestionFilters: e } = M(), { defaultSeedsFetched: t } = Pp();
  return () => {
    const { type: n, id: o } = e.value;
    if (o === wt)
      return t.value ? "suggestion_no_seed" : "suggestion_recent_edit";
    if (n === ft)
      return "suggestion_topic_area";
    if (o === jt)
      return "suggestion_featured";
    if (o === de || n === de)
      return "suggestion_collections";
    throw new Error("Event source cannot be empty");
  };
};
const kd = window.Vue.toDisplayString, ga = window.Vue.createElementVNode, Hn = window.Vue.createVNode, ie = window.Vue.unref, No = window.Vue.withCtx, Eb = window.Vue.resolveDirective, Ki = window.Vue.withDirectives, xd = window.Vue.renderList, bd = window.Vue.Fragment, nn = window.Vue.openBlock, Yi = window.Vue.createElementBlock, Uo = window.Vue.createBlock, Ji = window.Vue.createCommentVNode, Ab = window.Vue.createTextVNode, Db = window.Vue.vShow, Lb = ["textContent"], Tb = { class: "cx-translation-list__division-title ma-0 pa-4" }, Bb = { class: "cx-translation-list__division-title ma-0 pa-4" }, Pb = { class: "cx-suggestion-list__refresh-button-container justify-center" }, Fb = window.Vuex.useStore, Mb = window.Vue.ref, Nb = window.Codex.CdxButton, Ub = window.Codex.CdxIcon, Ib = {
  __name: "CXSuggestionList",
  props: {
    active: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = Fb(), { sourceLanguage: n, targetLanguage: o } = H(t), { supportedLanguageCodes: s, availableTargetLanguages: a } = Cb(), r = Up(), l = (L) => r(L, o.value), u = (L) => r(n.value, L), d = Vb(), i = Ms(), c = (L) => i(
      L.sourceTitle,
      L.sourceLanguage,
      L.targetLanguage,
      d()
    ), {
      currentPageSuggestionsSlice: g,
      currentSectionSuggestionsSlice: m,
      discardPageSuggestion: p,
      discardSectionSuggestion: h,
      onSuggestionRefresh: w,
      pageSuggestionsLoading: _,
      sectionSuggestionsLoading: f,
      showRefreshButton: S
    } = bb(), y = Mb(null), A = vt(), T = () => {
      A({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: n.value,
        translation_target_language: o.value
      }), w(), y.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: U, markFavoritePageSuggestion: V } = rc();
    return (L, j) => {
      const P = Eb("i18n");
      return Ki((nn(), Yi("div", null, [
        Hn(ie(it), { class: "cx-translation-list--suggestions pa-0 mb-0" }, {
          header: No(() => [
            ga("h3", {
              class: "mw-ui-card__title pa-4 pt-5 mb-0",
              textContent: kd(L.$i18n("cx-suggestionlist-title"))
            }, null, 8, Lb),
            Hn(Sb)
          ]),
          default: No(() => [
            Hn(ic, {
              "source-languages": ie(s),
              "target-languages": ie(a),
              "selected-source-language": ie(n),
              "selected-target-language": ie(o),
              "onUpdate:selectedSourceLanguage": l,
              "onUpdate:selectedTargetLanguage": u
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])
          ]),
          _: 1
        }),
        Hn(ie(it), {
          ref_key: "pageSuggestionsList",
          ref: y,
          class: "cx-translation-list--page-suggestions pa-0 mb-0"
        }, {
          default: No(() => [
            Ki(ga("h5", Tb, null, 512), [
              [P, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (nn(!0), Yi(bd, null, xd(ie(g), (N, ae) => (nn(), Uo(Tl, {
              key: `page-suggestion-${ae}`,
              suggestion: N,
              onClose: (J) => ie(p)(N),
              onClick: (J) => c(N),
              onBookmark: (J) => ie(V)(N)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            ie(_) ? (nn(), Uo(ie(Xe), { key: 0 })) : Ji("", !0)
          ]),
          _: 1
        }, 512),
        Hn(ie(it), { class: "cx-translation-list--sx-suggestions pa-0 mb-0" }, {
          default: No(() => [
            Ki(ga("h5", Bb, null, 512), [
              [P, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (nn(!0), Yi(bd, null, xd(ie(m), (N, ae) => (nn(), Uo(Tl, {
              key: `section-suggestion-${ae}`,
              class: "ma-0",
              suggestion: N,
              onClose: (J) => ie(h)(N),
              onClick: (J) => c(N),
              onBookmark: (J) => ie(U)(N)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            ie(f) ? (nn(), Uo(ie(Xe), { key: 0 })) : Ji("", !0)
          ]),
          _: 1
        }),
        ga("div", Pb, [
          ie(S) ? (nn(), Uo(ie(Nb), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: T
          }, {
            default: No(() => [
              Hn(ie(Ub), {
                class: "me-1",
                icon: ie(qp)
              }, null, 8, ["icon"]),
              Ab(" " + kd(L.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : Ji("", !0)
        ])
      ], 512)), [
        [Db, e.active]
      ]);
    };
  }
}, zb = window.Vue.computed, Rb = window.Vuex.useStore, Ob = {
  name: "CxFavoriteList",
  components: {
    CxTranslationSuggestion: Tl,
    MwCard: it
  },
  setup() {
    const e = Rb(), t = zb(() => e.state.suggestions.favorites || []), n = Ms(), o = (a) => n(
      a.title,
      a.sourceLanguage,
      a.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: s } = rc();
    return {
      favorites: t,
      startFavoriteTranslation: o,
      removeFavoriteSuggestion: s
    };
  }
}, Hb = window.Vue.resolveDirective, jb = window.Vue.createElementVNode, qb = window.Vue.withDirectives, Gb = window.Vue.renderList, Wb = window.Vue.Fragment, Qi = window.Vue.openBlock, Xb = window.Vue.createElementBlock, $d = window.Vue.resolveComponent, Vd = window.Vue.createBlock, Ed = window.Vue.withCtx, Kb = window.Vue.createCommentVNode, Yb = { class: "mw-ui-card__title pa-4 pt-5 mb-0" };
function Jb(e, t, n, o, s, a) {
  const r = $d("cx-translation-suggestion"), l = $d("mw-card"), u = Hb("i18n");
  return o.favorites.length ? (Qi(), Vd(l, {
    key: 0,
    class: "cx-translation-list--favorites pa-0 mb-4"
  }, {
    header: Ed(() => [
      qb(jb("h3", Yb, null, 512), [
        [u, void 0, "cx-suggestion-list-favorites-division"]
      ])
    ]),
    default: Ed(() => [
      (Qi(!0), Xb(Wb, null, Gb(o.favorites, (d, i) => (Qi(), Vd(r, {
        key: `favorite-${i}`,
        suggestion: d,
        onClick: (c) => o.startFavoriteTranslation(d),
        onBookmark: (c) => o.removeFavoriteSuggestion(d)
      }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
    ]),
    _: 1
  })) : Kb("", !0);
}
const Qb = /* @__PURE__ */ F(Ob, [["render", Jb]]);
const Zb = {
  name: "CxHelpPanel",
  components: { MwIcon: Ee },
  setup() {
    const e = me();
    return { listItems: [
      {
        icon: yf,
        label: e.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation"
      },
      {
        icon: of,
        label: e.i18n("cx-sx-dashboard-help-panel-stats-label"),
        href: mw.util.getUrl("Special:ContentTranslationStats")
      },
      {
        icon: Cf,
        label: e.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation"
      }
    ] };
  }
}, e8 = window.Vue.resolveDirective, ma = window.Vue.createElementVNode, t8 = window.Vue.withDirectives, n8 = window.Vue.renderList, o8 = window.Vue.Fragment, Zi = window.Vue.openBlock, er = window.Vue.createElementBlock, s8 = window.Vue.resolveComponent, a8 = window.Vue.createVNode, i8 = window.Vue.toDisplayString, r8 = { class: "cx-help-panel pa-4" }, l8 = { class: "cx-help-panel__item-list mt-6 ps-2" }, c8 = ["href"], u8 = ["textContent"];
function d8(e, t, n, o, s, a) {
  const r = s8("mw-icon"), l = e8("i18n");
  return Zi(), er("div", r8, [
    t8(ma("h5", null, null, 512), [
      [l, void 0, "cx-sx-dashboard-help-panel-title"]
    ]),
    ma("ul", l8, [
      (Zi(!0), er(o8, null, n8(o.listItems, (u, d) => (Zi(), er("li", {
        key: d,
        class: "mt-4"
      }, [
        ma("a", {
          href: u.href,
          target: "_blank"
        }, [
          a8(r, {
            class: "me-2",
            icon: u.icon
          }, null, 8, ["icon"]),
          ma("span", {
            textContent: i8(u.label)
          }, null, 8, u8)
        ], 8, c8)
      ]))), 128))
    ])
  ]);
}
const g8 = /* @__PURE__ */ F(Zb, [["render", d8]]);
const m8 = window.Vue.ref, Ad = window.Vue.computed, p8 = window.Vue.watch, h8 = {
  name: "CxStatsPanel",
  components: { MwCol: k, MwRow: B },
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", n = Ad(() => {
      var a, r;
      return ((r = (a = e.stats) == null ? void 0 : a[t]) == null ? void 0 : r.count) || 0;
    }), o = Ad(
      () => {
        var a, r;
        return ((r = (a = e.stats) == null ? void 0 : a[t]) == null ? void 0 : r.delta) || 0;
      }
    ), s = m8(null);
    return p8(
      () => e.stats,
      () => {
        const a = e.stats, r = s.value.getContext("2d"), l = Object.keys(e.stats || {}).sort(), u = l.reduce(
          (S, y) => Math.max(S, a[y].delta),
          0
        ), d = l.map((S) => a[S].delta), i = s.value.getBoundingClientRect().width, c = s.value.getBoundingClientRect().height;
        s.value.width = i, s.value.height = c;
        const g = 4, m = 6, p = 50, h = (p - g) / u;
        let w = g;
        const _ = Math.floor(
          (i - g) / (m + g)
        ), f = d.slice(
          Math.max(d.length - _, 0)
        );
        f.forEach((S, y) => {
          y === f.length - 1 && (r.fillStyle = "#36c");
          const A = p - S * h;
          r.fillRect(w, A, m, S * h), w += m + g;
        });
      }
    ), { canvasRef: s, thisMonthStats: o, total: n };
  }
}, w8 = window.Vue.resolveDirective, jn = window.Vue.createElementVNode, tr = window.Vue.withDirectives, Dd = window.Vue.toDisplayString, Ld = window.Vue.resolveComponent, nr = window.Vue.withCtx, or = window.Vue.createVNode, f8 = window.Vue.openBlock, _8 = window.Vue.createElementBlock, v8 = { class: "cx-stats-panel pa-4" }, S8 = ["textContent"], y8 = { class: "cx-stats-panel__monthly-stats-label" }, C8 = ["textContent"], k8 = { class: "cx-stats-panel__total-stats-label" }, x8 = {
  ref: "canvasRef",
  class: "cx-stats-panel__canvas"
};
function b8(e, t, n, o, s, a) {
  const r = Ld("mw-col"), l = Ld("mw-row"), u = w8("i18n");
  return f8(), _8("div", v8, [
    tr(jn("h5", null, null, 512), [
      [u, void 0, "cx-sx-dashboard-stats-panel-title"]
    ]),
    or(l, null, {
      default: nr(() => [
        or(r, { class: "cx-stats-panel__monthly-stats" }, {
          default: nr(() => [
            jn("h3", {
              textContent: Dd(o.thisMonthStats)
            }, null, 8, S8),
            tr(jn("h5", y8, null, 512), [
              [u, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
            ])
          ]),
          _: 1
        }),
        or(r, { class: "cx-stats-panel__total-stats" }, {
          default: nr(() => [
            jn("h3", {
              textContent: Dd(o.total)
            }, null, 8, C8),
            tr(jn("h5", k8, null, 512), [
              [u, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    jn("canvas", x8, null, 512)
  ]);
}
const $8 = /* @__PURE__ */ F(h8, [["render", b8]]), V8 = window.Vuex.useStore;
let pa = [];
const Zp = () => {
  const e = V8();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || pa.includes(o) ? Promise.resolve() : (pa.push(o), wo.fetchLanguageTitles(t, n).then((s) => {
      pa = pa.filter(
        (a) => a !== o
      ), s && e.commit("mediawiki/addLanguageTitleGroup", s);
    }));
  };
}, { getUrlParam: E8 } = M(), eh = () => {
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
  }, t = E8("campaign");
  return e[t];
}, A8 = () => {
  const e = Ms(), t = vt(), n = Zp(), { targetPageExists: o } = _t(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r
  } = M();
  return () => C(void 0, null, function* () {
    const l = eh() || "direct_preselect";
    return n(s.value, r.value).then(
      () => t({
        event_type: "dashboard_open",
        event_source: l,
        translation_source_language: s.value,
        translation_target_language: a.value,
        translation_type: o.value ? "section" : "article"
      })
    ), e(
      r.value,
      s.value,
      a.value,
      l
    );
  });
}, D8 = window.Vuex.useStore, ni = () => {
  const e = D8(), t = (o) => C(void 0, null, function* () {
    let s = yield Ke.fetchTranslations(o);
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
          new ho({ title: i, pagelanguage: d })
        );
      });
  });
  return { fetchTranslationsByStatus: t, fetchAllTranslations: () => e.state.translator.translations.length ? Promise.resolve() : Promise.all([
    t("published"),
    t("draft")
  ]).catch((o) => {
    mw.log.error("[CX] Error while fetching translations", o);
  }) };
}, L8 = window.Vuex.useStore, T8 = () => {
  const e = L8();
  return () => C(void 0, null, function* () {
    if (e.state.suggestions.favorites.length)
      return;
    const t = yield le.fetchFavorites();
    if (!t || !t.length)
      return;
    const n = {};
    for (const o of t)
      e.commit("suggestions/addFavoriteSuggestion", o), le.fetchSectionSuggestion(
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
}, B8 = window.Vuex.useStore, P8 = () => {
  const e = vt(), t = B8(), n = A8(), { fetchAllTranslations: o } = ni(), s = Jl(), a = T8(), { pageURLParameter: r, sectionURLParameter: l, draftURLParameter: u } = M(), { fetchPageCollections: d } = Mp();
  return () => C(void 0, null, function* () {
    if (d(), yield Np()(), r.value) {
      n({
        pageTitle: r.value,
        isDraftTranslation: u.value,
        sectionTitle: l.value
      });
      return;
    }
    const { sourceLanguage: c, targetLanguage: g, previousRoute: m } = H(t);
    e({
      event_type: "dashboard_open",
      event_source: (() => {
        const w = {
          "sx-article-search": "return_from_search",
          "sx-translation-confirmer": "return_from_confirmation",
          "sx-section-selector": "return_from_section_selection",
          "sx-sentence-selector": "editor_close"
        }[m.value];
        return w || eh() || "direct";
      })(),
      translation_source_language: c.value,
      translation_target_language: g.value
    });
    try {
      yield a();
    } catch (h) {
      mw.log.error("[CX] Error while fetching favorite suggestions", h);
    }
    yield o(), s();
  });
}, Td = window.Vue.computed, F8 = window.Vue.ref, M8 = window.Vue.watch, N8 = window.Vue.watchEffect, U8 = window.Vuex.useStore, I8 = ["suggestions", "draft", "published"], z8 = () => {
  const e = U8(), { getUrlParam: t, setUrlParam: n } = M(), o = t("active-list"), s = F8(null);
  if (I8.includes(o))
    s.value = o;
  else {
    const a = Td(
      () => e.state.translator.translationsLoaded.draft
    ), r = Td(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = r.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", M8(a, (l) => {
      l && (s.value = r.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return N8(() => {
    n("active-list", s.value), window.scrollTo(0, 0);
  }), s;
}, R8 = window.Vue.computed, O8 = () => {
  const e = me();
  return R8(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: rf,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: Ka,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: af,
        type: "text"
      }
    }
  ]);
};
const ce = window.Vue.unref, fe = window.Vue.createVNode, H8 = window.Vue.toDisplayString, j8 = window.Vue.createTextVNode, Bt = window.Vue.withCtx, sr = window.Vue.openBlock, Bd = window.Vue.createBlock, Pd = window.Vue.createCommentVNode, q8 = window.Vue.isRef, G8 = window.Vue.createElementBlock, W8 = window.Vue.computed, X8 = window.Vuex.useStore, K8 = window.Codex.CdxButton, Y8 = window.Codex.CdxIcon, J8 = {
  __name: "CXDashboard",
  setup(e) {
    const t = he(), n = () => t.push({ name: "sx-article-search" });
    P8()();
    const s = X8();
    s.dispatch("translator/fetchTranslatorStats");
    const a = W8(() => s.state.translator.translatorStats), r = z8(), l = O8();
    return (u, d) => (sr(), G8("div", null, [
      fe(ce(B), { class: "ma-0 py-4" }, {
        default: Bt(() => [
          fe(ce(K8), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: n
          }, {
            default: Bt(() => [
              fe(ce(Y8), {
                class: "me-1",
                icon: ce(Dl)
              }, null, 8, ["icon"]),
              j8(" " + H8(u.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      fe(ce(B), {
        class: "ma-0",
        align: "start"
      }, {
        default: Bt(() => [
          u.$mwui.breakpoint.tabletAndUp ? (sr(), Bd(ce(k), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: Bt(() => [
              fe(ce(ks), {
                id: "dashboard-list-selector--desktop",
                items: ce(l),
                active: ce(r),
                onSelect: d[0] || (d[0] = (i) => r.value = i)
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : Pd("", !0),
          fe(ce(k), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: Bt(() => [
              fe(Qb),
              fe(Ib, {
                active: ce(r) === "suggestions"
              }, null, 8, ["active"]),
              fe(ld, {
                "translation-status": "draft",
                "active-status": ce(r)
              }, null, 8, ["active-status"]),
              fe(ld, {
                "translation-status": "published",
                "active-status": ce(r)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          fe(ce(k), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: Bt(() => [
              fe(ce(B), {
                class: "ma-0",
                align: "start"
              }, {
                default: Bt(() => [
                  fe(ce(k), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: Bt(() => [
                      fe($8, { stats: a.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  fe(ce(k), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: Bt(() => [
                      fe(g8)
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
      u.$mwui.breakpoint.mobile ? (sr(), Bd(ce(fw), {
        key: 0,
        active: ce(r),
        "onUpdate:active": d[1] || (d[1] = (i) => q8(r) ? r.value = i : null),
        items: ce(l)
      }, null, 8, ["active", "items"])) : Pd("", !0)
    ]));
  }
}, Q8 = {
  name: "DashboardView",
  components: { CxDashboard: J8 }
}, Z8 = window.Vue.resolveComponent, e2 = window.Vue.createVNode, t2 = window.Vue.openBlock, n2 = window.Vue.createElementBlock, o2 = { class: "cx-translation-dashboard" };
function s2(e, t, n, o, s, a) {
  const r = Z8("cx-dashboard");
  return t2(), n2("main", o2, [
    e2(r, { class: "mb-4 pb-12" })
  ]);
}
const Fd = /* @__PURE__ */ F(Q8, [["render", s2]]), qn = window.Vue.computed, a2 = () => {
  const { sectionSuggestion: e } = Ne(), { targetLanguageURLParameter: t } = M(), { currentTranslation: n } = Gt(), o = qn(
    () => {
      var g, m, p;
      return (p = (m = (g = e.value) == null ? void 0 : g.orderedMissingSections) == null ? void 0 : m[0]) == null ? void 0 : p.sourceTitle;
    }
  ), s = qn(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.missingSectionsCount;
    }
  ), a = qn(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.presentSectionsCount;
    }
  ), { targetPageExists: r, getCurrentTitleByLanguage: l } = _t(), u = qn(() => r ? G.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    l(t.value, null)
  ) : null), d = (g) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : g ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : r.value ? s.value > 1 || s.value === 1 && a.value > 0 ? "cx-sx-select-section" : s.value === 1 && a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : s.value === 0 && a.value > 0 ? "cx-sx-select-section" : s.value === 0 && a.value === 0 ? "cx-sx-translation-confirmer-action-new-translation" : "" : "cx-sx-start-translation-button-label", i = qn(() => {
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
  }), c = qn(
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
}, th = () => new URLSearchParams(location.search).get("force-quick-tutorial");
function i2(e) {
  return e.$el = $(e), e;
}
function r2(e, t, n, o) {
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
function l2() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function c2(e, t) {
  return C(this, null, function* () {
    yield lc(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = i2(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const u2 = window.Vue.computed, d2 = window.Vue.onMounted, g2 = window.Vue.ref;
function m2(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const p2 = {
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
    const n = g2(null);
    let o = null;
    const s = u2(() => o.getHtml()), a = () => {
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
    return d2(() => C(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = m2;
      const i = yield c2(u, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), o = r2(
        i,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = l2, o.focus();
    })), { sxeditor: n };
  }
}, Bl = window.Vue.createElementVNode, h2 = window.Vue.openBlock, w2 = window.Vue.createElementBlock, f2 = ["lang", "dir"], _2 = /* @__PURE__ */ Bl("div", { class: "overlay-header header initial-header" }, [
  /* @__PURE__ */ Bl("div", { class: "toolbar" })
], -1), v2 = ["lang", "dir"];
function S2(e, t, n, o, s, a) {
  return h2(), w2("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    _2,
    Bl("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, v2)
  ], 8, f2);
}
const y2 = /* @__PURE__ */ F(p2, [["render", S2]]);
function lc() {
  return mw.loader.using("mw.cx3.ve");
}
const C2 = window.Vuex.useStore, nh = () => {
  const e = C2();
  return (t, n) => C(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield lc(), new Promise((s) => {
      setTimeout(() => {
        const a = op.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, k2 = window.Vuex.useStore, cc = () => {
  const e = k2();
  return (t, n, o, s = null) => C(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      o
    );
    if (a && a.content)
      return;
    const r = yield wo.fetchPageContent(
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
}, x2 = window.Vuex.useStore, uc = () => {
  const e = x2(), { currentSourcePage: t } = Ue(), n = nh(), o = cc(), {
    setSectionURLParam: s,
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l
  } = M(), u = (c, g) => C(void 0, null, function* () {
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
        var p;
        return (p = t.value.sections) == null ? void 0 : p[c];
      };
      return u(g, () => {
        const p = g();
        c === 0 ? p.originalTitle = t.value.title : s(p.originalTitle);
      });
    },
    selectPageSectionByTitle: (c) => u(() => t.value.getSectionByTitle(c), () => {
      s(c);
    })
  };
}, dc = () => (e, t, n, o = {}) => {
  G.setCXToken(e, t, n), location.href = G.getCXUrl(
    n,
    null,
    e,
    t,
    o
  );
}, b2 = (e, t, n, o) => C(void 0, null, function* () {
  var l, u, d;
  const s = ((l = t.user) == null ? void 0 : l.content) || ((u = t.mt) == null ? void 0 : u.content), a = (d = t == null ? void 0 : t.mt) == null ? void 0 : d.engine, r = yield ap(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = r, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = r;
}), $2 = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, r;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const l = (r = t.mt) == null ? void 0 : r.engine;
      o.addProposedTranslation(l, n.mt.innerHTML), o.mtProviderUsed = l;
    }
  });
}, V2 = (e, t, n, o) => C(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return b2(e, t, n, o);
  $2(e, t);
}), E2 = (e, t, n, o) => {
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
        const d = V2(
          l,
          u,
          t || e.title,
          n
        );
        s.push(d);
      }
  return Promise.all(s);
}, A2 = { restoreCorporaDraft: E2 }, Io = window.Vue.computed, D2 = window.Vuex.useStore, K = () => {
  const e = D2(), { currentSourcePage: t, currentTargetPage: n } = Ue(), { currentMTProvider: o } = H(e), { sectionURLParameter: s } = M(), a = Io(() => {
    var i, c;
    return s.value ? (c = t.value) == null ? void 0 : c.getSectionByTitle(s.value) : (i = t.value) == null ? void 0 : i.leadSection;
  }), r = Io(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.isTitleSelected;
    }
  ), l = Io(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.selectedContentTranslationUnit;
    }
  ), u = Io(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.getProposedTranslationByMtProvider(
        o.value
      );
    }
  ), d = Io(() => a.value.isLeadSection ? a.value.title : n.value.title);
  return {
    sourceSection: a,
    isSectionTitleSelected: r,
    selectedContentTranslationUnit: l,
    currentProposedTranslation: u,
    targetPageTitleForPublishing: d
  };
}, L2 = window.Vuex.useStore, gc = () => {
  const e = vt(), t = L2(), n = he(), { currentSourcePage: o } = Ue(), { sourceLanguage: s, targetLanguage: a } = H(t), r = xC(), l = nh(), { isDesktop: u } = Ds(), d = dc(), i = cc(), { sourceSection: c } = K();
  return (g) => C(void 0, null, function* () {
    t.commit("application/increaseTranslationDataLoadingCounter");
    const {
      sourceLanguage: m,
      targetLanguage: p,
      sourceTitle: h,
      targetTitle: w,
      pageRevision: _,
      isLeadSectionTranslation: f
    } = g;
    if (u.value) {
      const A = {};
      f || (A.sourcesection = g.sourceSectionTitle), d(
        s.value,
        a.value,
        h,
        A
      );
      return;
    }
    G.unsetCXToken(
      m,
      p,
      h
    );
    const { setTranslationURLParams: S } = M();
    S(g), n.push({ name: "sx-sentence-selector", query: { force: !0 } }), (s.value !== m || a.value !== p) && r(g), t.dispatch("application/getCXServerToken"), e({
      event_type: "dashboard_translation_continue",
      translation_id: g.sectionTranslationId,
      translation_source_language: s.value,
      translation_source_title: h,
      translation_source_section: g.sourceSectionTitle,
      translation_target_language: a.value,
      translation_target_title: w,
      translation_target_section: g.targetSectionTitle,
      translation_type: f ? "article" : "section"
    }), yield i(
      s.value,
      a.value,
      h,
      _
    ), yield l(s.value, h), g.restored || (yield Ke.fetchTranslationUnits(g.translationId).then(
      (A) => A2.restoreCorporaDraft(
        o.value,
        w,
        a,
        A
      )
    ).then(() => g.restored = !0));
    let y;
    f ? (c.value.originalTitle = h, y = w) : y = g.targetSectionTitle, c.value.translatedTitle = y, t.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, T2 = window.Vue.ref, B2 = window.Vuex.useStore, P2 = () => {
  const e = he(), t = B2(), { isDesktop: n } = Ds(), { logDashboardTranslationStartEvent: o } = sc(), {
    pageURLParameter: s,
    sectionURLParameter: a
  } = M(), { sourceLanguage: r, targetLanguage: l } = H(t), { targetPageExists: u } = _t(), { selectPageSectionByIndex: d, selectPageSectionByTitle: i } = uc(), c = dc(), g = () => C(void 0, null, function* () {
    n.value ? (o(), c(
      r.value,
      l.value,
      s.value,
      { sourcesection: a.value }
    )) : (yield i(a.value), e.push({ name: "sx-content-comparator", query: { force: !0 } }));
  }), m = gc(), p = T2(!1), { currentTranslation: h } = Gt(), w = () => {
    h.value ? h.value.isArticleTranslation ? p.value = !0 : m(h.value) : a.value ? g() : u.value ? e.push({ name: "sx-section-selector" }) : _();
  }, _ = () => C(void 0, null, function* () {
    o(), n.value ? c(
      r.value,
      l.value,
      s.value
    ) : (d(0), th() || !t.getters["translator/userHasSectionTranslations"] ? e.push({ name: "sx-quick-tutorial", query: { force: !0 } }) : e.push({ name: "sx-sentence-selector", query: { force: !0 } }));
  });
  return {
    startNewTranslation: _,
    handlePrimaryButtonClick: w,
    translationConfirmationDialogOn: p
  };
};
const F2 = window.Vue.resolveDirective, Md = window.Vue.createElementVNode, Nd = window.Vue.withDirectives, M2 = window.Vue.unref, N2 = window.Vue.withCtx, U2 = window.Vue.openBlock, I2 = window.Vue.createBlock, z2 = {
  href: "",
  target: "_blank"
}, R2 = window.Codex.CdxDialog, O2 = {
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
    const n = e, o = t, s = (d) => o("update:modelValue", d), a = me(), r = {
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
      const c = F2("i18n");
      return U2(), I2(M2(R2), {
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
        default: N2(() => [
          Nd(Md("p", null, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          Nd(Md("a", z2, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title", "close-button-label"]);
    };
  }
};
const oe = window.Vue.unref, H2 = window.Vue.resolveDirective, zo = window.Vue.createElementVNode, Ud = window.Vue.withDirectives, Ro = window.Vue.toDisplayString, Oo = window.Vue.openBlock, ar = window.Vue.createElementBlock, ir = window.Vue.createCommentVNode, He = window.Vue.createVNode, et = window.Vue.withCtx, rr = window.Vue.createTextVNode, j2 = window.Vue.withModifiers, Id = window.Vue.createBlock, q2 = window.Vue.Fragment, G2 = { class: "sx-translation-confirmer-body pb-4" }, W2 = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, X2 = ["textContent"], K2 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, Y2 = ["href"], J2 = ["textContent"], lr = window.Vue.computed, Q2 = window.Vue.inject, zd = window.Vue.ref, Z2 = window.Vue.watchEffect, e$ = window.Vuex.useStore, cr = window.Codex.CdxButton, t$ = window.Codex.CdxIcon, n$ = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = he(), o = e$();
    Q2("colors");
    const { sectionSuggestion: s } = Ne(), { targetLanguageAutonym: a } = H(o), { sectionURLParameter: r } = M(), {
      startNewTranslation: l,
      handlePrimaryButtonClick: u,
      translationConfirmationDialogOn: d
    } = P2(), i = zd(!1), c = zd(null), g = () => C(this, null, function* () {
      const P = yield Ke.checkUnreviewedTranslations();
      P !== !0 && (i.value = !0, c.value = P.targetUrl);
    }), m = () => C(this, null, function* () {
      yield g(), !i.value && l();
    }), p = () => C(this, null, function* () {
      yield g(), !i.value && u();
    }), h = t;
    Z2(() => {
      d.value && (h("open-translation-confirmation-dialog"), d.value = !1);
    });
    const {
      actionInformationMessageArgs: w,
      getActionButtonLabel: _,
      isProgressiveButton: f,
      targetArticlePath: S
    } = a2(), y = me(), A = lr(
      () => y.i18n(_(!!r.value))
    ), { isDesktop: T } = Ds(), U = lr(
      () => y.i18n(...w.value)
    ), V = () => C(this, null, function* () {
      yield g(), !i.value && n.push({ name: "sx-section-selector" });
    }), L = lr(() => {
      var P, N;
      return r.value && !!((N = (P = s.value) == null ? void 0 : P.sourceSections) != null && N.length);
    }), { targetPageExists: j } = _t();
    return (P, N) => {
      const ae = H2("i18n");
      return Oo(), ar(q2, null, [
        zo("section", G2, [
          oe(r) ? (Oo(), ar("section", W2, [
            Ud(zo("h6", null, null, 512), [
              [ae, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            zo("h5", {
              class: "ma-0",
              textContent: Ro(oe(r))
            }, null, 8, X2)
          ])) : oe(j) ? (Oo(), ar("section", K2, [
            He(oe(B), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: et(() => [
                Ud(He(oe(k), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [ae, [oe(a)], "cx-sx-existing-translation-status"]
                ]),
                He(oe(k), { shrink: "" }, {
                  default: et(() => [
                    zo("a", {
                      href: oe(S),
                      target: "_blank"
                    }, [
                      He(oe(t$), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: oe(nc)
                      }, null, 8, ["icon"])
                    ], 8, Y2)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            He(oe(B), { class: "ma-0" }, {
              default: et(() => [
                He(oe(k), null, {
                  default: et(() => [
                    zo("span", {
                      textContent: Ro(U.value)
                    }, null, 8, J2)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : ir("", !0),
          He(oe(B), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: et(() => [
              L.value ? (Oo(), Id(oe(k), {
                key: 0,
                shrink: "",
                class: "me-4"
              }, {
                default: et(() => [
                  He(oe(cr), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: j2(V, ["stop"])
                  }, {
                    default: et(() => [
                      rr(Ro(P.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : ir("", !0),
              oe(j) && oe(T) ? (Oo(), Id(oe(k), {
                key: 1,
                shrink: "",
                class: "me-4"
              }, {
                default: et(() => [
                  He(oe(cr), {
                    size: "large",
                    onClick: m
                  }, {
                    default: et(() => [
                      rr(Ro(P.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : ir("", !0),
              He(oe(k), { shrink: "" }, {
                default: et(() => [
                  He(oe(cr), {
                    weight: "primary",
                    size: "large",
                    action: oe(f) ? "progressive" : "default",
                    onClick: p
                  }, {
                    default: et(() => [
                      rr(Ro(A.value), 1)
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
        He(O2, {
          modelValue: i.value,
          "onUpdate:modelValue": N[0] || (N[0] = (J) => i.value = J),
          "target-url": c.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const Rd = window.Vue.unref, o$ = window.Vue.openBlock, s$ = window.Vue.createBlock, Od = window.Vue.computed, a$ = window.Vuex.useStore, oh = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedLanguageCodes: t, enabledTargetLanguages: n } = Ls();
    a$();
    const {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: s
    } = M(), { currentLanguageTitleGroup: a } = _t(), r = Od(
      () => {
        var c;
        return ((c = a.value) == null ? void 0 : c.titles.map((g) => g.lang)) || [];
      }
    ), l = Od(
      () => n.value || t.value
    ), u = $C(), d = (c) => u(c, s.value), i = (c) => u(o.value, c);
    return (c, g) => (o$(), s$(ic, {
      class: "sx-article-language-selector",
      "source-languages": r.value,
      "target-languages": l.value,
      "selected-source-language": Rd(o),
      "selected-target-language": Rd(s),
      "onUpdate:selectedSourceLanguage": d,
      "onUpdate:selectedTargetLanguage": i
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
};
const _e = window.Vue.unref, ur = window.Vue.toDisplayString, Pt = window.Vue.createElementVNode, lt = window.Vue.createVNode, Gn = window.Vue.withCtx, i$ = window.Vue.resolveDirective, r$ = window.Vue.withDirectives, l$ = window.Vue.normalizeClass, c$ = window.Vue.openBlock, u$ = window.Vue.createBlock, d$ = ["textContent"], g$ = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, m$ = ["textContent"], p$ = { class: "pe-3" }, h$ = ["textContent"], w$ = window.Codex.CdxButton, Ho = window.Codex.CdxIcon, Ft = window.Vue.computed, f$ = window.Vuex.useStore, _$ = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = f$(), n = me(), { currentSourcePage: o } = Ue(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r
    } = M(), l = Ft(() => t.state.suggestions.favorites || []), u = Ft(
      () => l.value.some(
        (T) => r.value === T.title && s.value === T.sourceLanguage && a.value === T.targetLanguage
      )
    ), { markFavoriteSuggestion: d, removeFavoriteSuggestion: i } = rc(), { translationSizeMessageArgs: c } = Qp(), g = () => d(
      r.value,
      s.value,
      a.value
    ), m = () => i(
      new ro({
        title: r.value,
        sourceLanguage: s.value,
        targetLanguage: a.value
      })
    ), p = Ft(
      () => u.value ? Op : Hp
    ), h = Ft(
      () => u.value ? m : g
    ), w = Ft(
      () => G.getPageUrl(s.value || "", r.value || "")
    ), _ = Ft(() => {
      var T;
      return (T = o.value) == null ? void 0 : T.langLinksCount;
    }), f = (T) => {
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
    }, S = Ft(() => {
      var U;
      const T = Object.values(((U = o.value) == null ? void 0 : U.pageviews) || {}).reduce(
        (V, L) => V + L,
        0
      );
      return f(T);
    }), y = Ft(() => c.value ? n.i18n(...c.value) : ""), A = Ft(() => c.value ? c.value[2] < 15 : !1);
    return (T, U) => {
      const V = i$("i18n");
      return c$(), u$(_e(B), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: Gn(() => [
          lt(_e(k), null, {
            default: Gn(() => [
              lt(_e(B), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: Gn(() => [
                  lt(_e(k), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: w.value,
                    target: "_blank"
                  }, {
                    default: Gn(() => [
                      Pt("h5", {
                        class: "ma-0 me-1",
                        textContent: ur(_e(r))
                      }, null, 8, d$),
                      lt(_e(Ho), {
                        size: "x-small",
                        icon: _e(nc)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  lt(_e(k), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: Gn(() => [
                      lt(_e(w$), {
                        class: "px-0",
                        weight: "quiet",
                        action: u.value ? "progressive" : "default",
                        "aria-label": T.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: h.value
                      }, {
                        default: Gn(() => [
                          lt(_e(Ho), { icon: p.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Pt("div", g$, [
                Pt("div", null, [
                  Pt("span", null, [
                    lt(_e(Ho), {
                      icon: _e(mk),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    Pt("span", {
                      class: "pe-3",
                      textContent: ur(_.value)
                    }, null, 8, m$)
                  ]),
                  Pt("span", null, [
                    lt(_e(Ho), {
                      icon: _e(lk),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    r$(Pt("span", p$, null, 512), [
                      [V, [S.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                Pt("span", {
                  class: l$(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": A.value
                  }])
                }, [
                  lt(_e(Ho), {
                    icon: _e(uk),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  Pt("span", {
                    textContent: ur(y.value)
                  }, null, 8, h$)
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
const v$ = window.Vue.resolveDirective, bn = window.Vue.createElementVNode, ha = window.Vue.withDirectives, S$ = window.Vue.toDisplayString, y$ = window.Vue.createTextVNode, dr = window.Vue.unref, gr = window.Vue.withCtx, mr = window.Vue.openBlock, pr = window.Vue.createBlock;
window.Vue.createCommentVNode;
const C$ = { class: "pa-4" }, k$ = { class: "flex pt-2" }, x$ = window.Codex.CdxButton, b$ = window.Vue.ref, $$ = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = gc(), a = b$(!1), { currentTranslation: r } = Gt(), l = () => C(this, null, function* () {
      a.value = !0;
      let u = !1;
      try {
        u = yield Ke.splitTranslation(
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
      const i = v$("i18n");
      return mr(), pr(dr(Ye), {
        value: e.modelValue,
        persistent: a.value,
        class: "sx-confirm-translation-start-dialog",
        "overlay-opacity": 0.7,
        "overlay-color": u.$mwui.colors.gray700,
        "min-height": "unset",
        title: u.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: gr(() => [
          bn("div", k$, [
            a.value ? (mr(), pr(dr(Xe), { key: 1 })) : (mr(), pr(dr(x$), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: l
            }, {
              default: gr(() => [
                y$(S$(u.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: gr(() => [
          bn("div", C$, [
            ha(bn("p", null, null, 512), [
              [i, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            ha(bn("p", null, null, 512), [
              [i, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            bn("p", null, [
              ha(bn("strong", null, null, 512), [
                [i, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            ha(bn("p", null, null, 512), [
              [i, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "overlay-color", "title"]);
    };
  }
};
const Hd = window.Vue.resolveDirective, wa = window.Vue.createElementVNode, jd = window.Vue.withDirectives, on = window.Vue.unref, fa = window.Vue.withCtx, Mt = window.Vue.createVNode, hr = window.Vue.openBlock, qd = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const V$ = window.Vue.createBlock, E$ = { class: "sx-translation-confirmer" }, A$ = { class: "mb-0" }, D$ = { class: "sx-translation-confirmer__article-image flex justify-center" }, L$ = ["src"], T$ = { class: "ma-3" }, B$ = window.Vue.computed, P$ = window.Vue.ref, F$ = window.Vuex.useStore, M$ = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = F$(), { currentSourcePage: n } = Ue(), { previousRoute: o } = H(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l,
      clearURLParameters: u
    } = M(), d = B$(
      () => {
        var w, _;
        return (_ = (w = n.value) == null ? void 0 : w.image) == null ? void 0 : _.source;
      }
    ), { fetchTranslationsByStatus: i } = ni(), c = Zp(), g = Ql();
    i("draft"), l.value && g(
      s.value,
      a.value,
      r.value
    ), c(s.value, r.value), lc(), t.dispatch("suggestions/fetchAppendixSectionTitles", a.value);
    const m = he(), p = () => {
      u(), m.push({ name: o.value });
    }, h = P$(!1);
    return (w, _) => {
      const f = Hd("i18n"), S = Hd("i18n-html");
      return hr(), qd("section", E$, [
        Mt(on(B), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: fa(() => [
            Mt(on(k), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: fa(() => [
                jd(wa("h5", A$, null, 512), [
                  [f, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            Mt(on(k), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: fa(() => [
                Mt(on(xe), {
                  class: "pa-0",
                  type: "icon",
                  icon: on(uo),
                  "icon-size": 20,
                  onClick: p
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        wa("div", D$, [
          d.value ? (hr(), qd("img", {
            key: 0,
            src: d.value
          }, null, 8, L$)) : (hr(), V$(on(Ee), {
            key: 1,
            size: "120",
            icon: on(Ml),
            "icon-color": w.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        Mt(_$),
        Mt(oh),
        Mt(n$, {
          onOpenTranslationConfirmationDialog: _[0] || (_[0] = (y) => h.value = !0)
        }),
        Mt(on(B), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: fa(() => [
            wa("p", T$, [
              jd(wa("small", null, null, 512), [
                [S, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        Mt($$, {
          modelValue: h.value,
          "onUpdate:modelValue": _[1] || (_[1] = (y) => h.value = y)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const N$ = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: M$
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, U$ = window.Vue.resolveComponent, I$ = window.Vue.createVNode, z$ = window.Vue.normalizeClass, R$ = window.Vue.openBlock, O$ = window.Vue.createElementBlock;
function H$(e, t, n, o, s, a) {
  const r = U$("sx-translation-confirmer");
  return R$(), O$("main", {
    class: z$(["sx-translation-confirmer-view", a.classes])
  }, [
    I$(r)
  ], 2);
}
const j$ = /* @__PURE__ */ F(N$, [["render", H$]]);
const q$ = window.Vue.toDisplayString, Gd = window.Vue.unref, G$ = window.Vue.createVNode, W$ = window.Vue.createTextVNode, X$ = window.Vue.createElementVNode, K$ = window.Vue.openBlock, Y$ = window.Vue.createElementBlock, J$ = { class: "sx-section-selector-view-article-item ma-0" }, Q$ = ["href"], Z$ = window.Codex.CdxIcon, e4 = {
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
    return (t, n) => (K$(), Y$("li", J$, [
      X$("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        W$(q$(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        G$(Gd(Z$), {
          size: "x-small",
          icon: Gd(nc)
        }, null, 8, ["icon"])
      ], 8, Q$)
    ]));
  }
};
const t4 = window.Vue.resolveDirective, _a = window.Vue.createElementVNode, wr = window.Vue.withDirectives, $n = window.Vue.unref, n4 = window.Vue.toDisplayString, va = window.Vue.withCtx, jo = window.Vue.createVNode, o4 = window.Vue.openBlock, s4 = window.Vue.createElementBlock, a4 = { class: "sx-section-selector__header pa-4" }, i4 = { class: "sx-section-selector__header-text ma-0" }, r4 = ["textContent"], l4 = { class: "pt-0 ma-0" }, c4 = { class: "ma-0" }, u4 = window.Codex.CdxButton, d4 = window.Codex.CdxIcon, g4 = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = Ne();
    return (n, o) => {
      const s = t4("i18n");
      return o4(), s4("div", a4, [
        jo($n(B), { class: "ma-0 pb-3" }, {
          default: va(() => [
            jo($n(k), null, {
              default: va(() => {
                var a;
                return [
                  wr(_a("h6", i4, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  _a("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: n4((a = $n(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, r4)
                ];
              }),
              _: 1
            }),
            jo($n(k), {
              shrink: "",
              class: "justify-end"
            }, {
              default: va(() => [
                jo($n(u4), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: va(() => [
                    jo($n(d4), { icon: $n(fo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        wr(_a("h4", l4, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        wr(_a("p", c4, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, m4 = window.Vue.renderList, p4 = window.Vue.Fragment, fr = window.Vue.openBlock, Wd = window.Vue.createElementBlock, h4 = window.Vue.renderSlot, Sa = window.Vue.unref, Xd = window.Vue.createVNode, Kd = window.Vue.withCtx, w4 = window.Vue.createBlock, f4 = { class: "sx-section-selector__sections-list ma-0 pa-0" }, _4 = window.Codex.CdxButton, v4 = window.Codex.CdxIcon, sh = {
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
    return (t, n) => (fr(), Wd("ul", f4, [
      (fr(!0), Wd(p4, null, m4(e.sections, (o) => (fr(), w4(Sa(B), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: Kd(() => [
          Xd(Sa(_4), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: Kd(() => [
              h4(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              Xd(Sa(v4), { icon: Sa(Fs) }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["aria-label", "onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, S4 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const y4 = window.Vue.resolveDirective, ya = window.Vue.createElementVNode, _r = window.Vue.withDirectives, tt = window.Vue.unref, Yd = window.Vue.toDisplayString, Wn = window.Vue.withCtx, vr = window.Vue.openBlock, Jd = window.Vue.createBlock;
window.Vue.createCommentVNode;
const qo = window.Vue.createVNode, C4 = window.Vue.createTextVNode, k4 = window.Vue.createElementBlock, x4 = { class: "sx-section-selector__missing-sections py-2" }, b4 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, $4 = ["lang", "dir", "textContent"], Qd = window.Vue.computed, V4 = window.Codex.CdxButton, E4 = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = Ne(), n = Qd(
      () => {
        var s;
        return O.getAutonym((s = t.value) == null ? void 0 : s.targetLanguage);
      }
    ), o = Qd(
      () => {
        var s;
        return Object.keys(((s = t.value) == null ? void 0 : s.missingSections) || {}).length === 0;
      }
    );
    return (s, a) => {
      const r = y4("i18n");
      return vr(), k4("section", x4, [
        _r(ya("h4", b4, null, 512), [
          [r, [
            n.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        o.value ? (vr(), Jd(tt(B), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: Wn(() => [
            qo(tt(k), {
              class: "py-6 justify-center",
              innerHTML: tt(S4)
            }, null, 8, ["innerHTML"]),
            qo(tt(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: Wn(() => [
                _r(ya("h6", null, null, 512), [
                  [r, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            qo(tt(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: Wn(() => [
                _r(ya("p", null, null, 512), [
                  [r, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            qo(tt(k), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: Wn(() => [
                qo(tt(V4), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: a[1] || (a[1] = (l) => s.$emit("close"))
                }, {
                  default: Wn(() => [
                    C4(Yd(s.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (vr(), Jd(sh, {
          key: 0,
          sections: tt(t).orderedMissingSections,
          onSelectSection: a[0] || (a[0] = (l) => s.$emit("select-section", l))
        }, {
          default: Wn(({ sourceSection: l }) => {
            var u, d;
            return [
              ya("h5", {
                class: "ma-0",
                lang: (u = tt(t)) == null ? void 0 : u.sourceLanguage,
                dir: tt(O.getDir)((d = tt(t)) == null ? void 0 : d.sourceLanguage),
                textContent: Yd(l)
              }, null, 8, $4)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const A4 = window.Vue.computed, D4 = {
  name: "SxSectionSelectorSectionListPresent",
  components: {
    SxSectionSelectorSectionList: sh
  },
  emits: ["select-section"],
  setup() {
    const { sectionSuggestion: e } = Ne(), t = A4(
      () => {
        var n;
        return O.getAutonym((n = e.value) == null ? void 0 : n.targetLanguage);
      }
    );
    return {
      mwIconArrowForward: Pl,
      getAutonym: O.getAutonym,
      getDir: O.getDir,
      suggestion: e,
      targetLanguageAutonym: t
    };
  }
}, L4 = window.Vue.resolveDirective, Ca = window.Vue.createElementVNode, T4 = window.Vue.withDirectives, Zd = window.Vue.toDisplayString, B4 = window.Vue.resolveComponent, P4 = window.Vue.withCtx, F4 = window.Vue.createVNode, M4 = window.Vue.openBlock, N4 = window.Vue.createElementBlock, U4 = { class: "sx-section-selector__present-sections py-2" }, I4 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, z4 = { class: "sx-section-selector__present-section-button-content" }, R4 = ["lang", "dir", "textContent"], O4 = ["lang", "dir", "textContent"];
function H4(e, t, n, o, s, a) {
  var u;
  const r = B4("sx-section-selector-section-list"), l = L4("i18n");
  return M4(), N4("section", U4, [
    T4(Ca("h4", I4, null, 512), [
      [l, [
        o.targetLanguageAutonym
      ], "cx-sx-section-selector-present-sections-title"]
    ]),
    F4(r, {
      sections: ((u = o.suggestion) == null ? void 0 : u.orderedPresentSections) || [],
      onSelectSection: t[0] || (t[0] = (d) => e.$emit("select-section", d))
    }, {
      default: P4(({ sourceSection: d, targetSection: i }) => {
        var c, g, m, p;
        return [
          Ca("div", z4, [
            Ca("h5", {
              class: "sx-section-selector__present-section-button-source",
              lang: (c = o.suggestion) == null ? void 0 : c.sourceLanguage,
              dir: o.getDir((g = o.suggestion) == null ? void 0 : g.sourceLanguage),
              textContent: Zd(d)
            }, null, 8, R4),
            Ca("h6", {
              class: "sx-section-selector__present-section-button-target",
              lang: (m = o.suggestion) == null ? void 0 : m.targetLanguage,
              dir: o.getDir((p = o.suggestion) == null ? void 0 : p.targetLanguage),
              textContent: Zd(i)
            }, null, 8, O4)
          ])
        ];
      }),
      _: 1
    }, 8, ["sections"])
  ]);
}
const j4 = /* @__PURE__ */ F(D4, [["render", H4]]);
const Sr = window.Vue.computed, q4 = window.Vuex.useStore, G4 = {
  name: "SxSectionSelector",
  components: {
    SxSectionSelectorSectionListPresent: j4,
    SxSectionSelectorSectionListMissing: E4,
    SxSectionSelectorHeader: g4,
    SxSectionSelectorViewArticleItem: e4,
    MwRow: B,
    MwCol: k,
    MwIcon: Ee,
    SxArticleLanguageSelector: oh
  },
  setup() {
    const e = q4(), { sectionSuggestion: t } = Ne(), {
      sourceLanguage: n,
      targetLanguage: o,
      sourceLanguageAutonym: s,
      targetLanguageAutonym: a
    } = H(e), r = Sr(
      () => {
        var f;
        return G.getPageUrl(n.value, (f = t.value) == null ? void 0 : f.sourceTitle);
      }
    ), l = Sr(
      () => {
        var f;
        return G.getPageUrl(o.value, (f = t.value) == null ? void 0 : f.targetTitle);
      }
    ), u = Sr(() => [
      { path: r.value, autonym: s.value },
      { path: l.value, autonym: a.value }
    ]), d = he(), { clearURLParameters: i, setSectionURLParam: c } = M(), g = () => {
      i(), d.push({ name: "dashboard" });
    }, m = gc(), { selectPageSectionByTitle: p } = uc(), { isDesktop: h } = Ds(), w = dc();
    return {
      goToDashboard: g,
      mwIconRobot: mf,
      mwIconLabFlask: gf,
      selectSection: (f) => {
        if (h.value) {
          w(
            n.value,
            o.value,
            t.value.sourceTitle,
            { sourcesection: f }
          );
          return;
        }
        const S = e.getters["translator/getDraftTranslation"](
          t.value.sourceTitle,
          f,
          n.value,
          o.value
        );
        S ? m(S) : (p(f), c(f), d.push({ name: "sx-content-comparator" }));
      },
      suggestion: t,
      targetLanguageAutonym: a,
      viewArticleItems: u
    };
  }
}, sn = window.Vue.resolveComponent, Nt = window.Vue.createVNode, W4 = window.Vue.resolveDirective, ct = window.Vue.createElementVNode, Go = window.Vue.withDirectives, X4 = window.Vue.renderList, K4 = window.Vue.Fragment, yr = window.Vue.openBlock, eg = window.Vue.createElementBlock, Y4 = window.Vue.createBlock, tg = window.Vue.toDisplayString, ng = window.Vue.createTextVNode, Cr = window.Vue.withCtx, J4 = { class: "sx-section-selector" }, Q4 = { class: "sx-section-selector__body" }, Z4 = { class: "py-2" }, e3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, t3 = { class: "ma-0 pa-0" }, n3 = { class: "sx-section-selector__additional-consideration-title" }, o3 = { href: "#" }, s3 = { class: "sx-section-selector__additional-consideration-title" }, a3 = { href: "#" };
function i3(e, t, n, o, s, a) {
  const r = sn("sx-section-selector-header"), l = sn("sx-article-language-selector"), u = sn("sx-section-selector-section-list-missing"), d = sn("sx-section-selector-section-list-present"), i = sn("sx-section-selector-view-article-item"), c = sn("mw-icon"), g = sn("mw-col"), m = sn("mw-row"), p = W4("i18n");
  return yr(), eg("section", J4, [
    Nt(r, { onClose: o.goToDashboard }, null, 8, ["onClose"]),
    ct("section", Q4, [
      Nt(l),
      Nt(u, {
        onSelectSection: o.selectSection,
        onClose: o.goToDashboard
      }, null, 8, ["onSelectSection", "onClose"]),
      Nt(d, { onSelectSection: o.selectSection }, null, 8, ["onSelectSection"]),
      ct("section", Z4, [
        Go(ct("h4", e3, null, 512), [
          [p, [
            o.targetLanguageAutonym
          ], "cx-sx-section-selector-more-details-title"]
        ]),
        ct("ul", t3, [
          (yr(!0), eg(K4, null, X4(o.viewArticleItems, (h, w) => (yr(), Y4(i, {
            key: `view-article-item-${w}`,
            path: h.path,
            autonym: h.autonym
          }, null, 8, ["path", "autonym"]))), 128))
        ])
      ]),
      Nt(m, { class: "sx-section-selector__additional-considerations ma-0" }, {
        default: Cr(() => [
          Nt(g, {
            cols: "12",
            tablet: "6",
            class: "px-4 pt-5 pb-4"
          }, {
            default: Cr(() => [
              ct("h6", n3, [
                Nt(c, {
                  icon: o.mwIconRobot,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                ng(" " + tg(e.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
              ]),
              Go(ct("p", null, null, 512), [
                [p, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
              ]),
              Go(ct("a", o3, null, 512), [
                [p, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
              ])
            ]),
            _: 1
          }),
          Nt(g, {
            cols: "12",
            tablet: "6",
            class: "px-4 py-5"
          }, {
            default: Cr(() => [
              ct("h6", s3, [
                Nt(c, {
                  icon: o.mwIconLabFlask,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                ng(" " + tg(e.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
              ]),
              Go(ct("p", null, null, 512), [
                [p, void 0, "cx-sx-section-selector-unsupported-sections-description"]
              ]),
              Go(ct("a", a3, null, 512), [
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
const r3 = /* @__PURE__ */ F(G4, [["render", i3]]);
const l3 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: r3
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, c3 = window.Vue.resolveComponent, u3 = window.Vue.createVNode, d3 = window.Vue.normalizeClass, g3 = window.Vue.openBlock, m3 = window.Vue.createElementBlock;
function p3(e, t, n, o, s, a) {
  const r = c3("sx-section-selector");
  return g3(), m3("main", {
    class: d3(["sx-section-selector-view", a.classes])
  }, [
    u3(r)
  ], 2);
}
const h3 = /* @__PURE__ */ F(l3, [["render", p3]]), w3 = window.Vue.computed, f3 = window.Vuex.useStore, _3 = (e) => {
  const { sourceLanguageAutonym: t, targetLanguageAutonym: n } = H(
    f3()
  ), o = me();
  return w3(() => {
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
const v3 = window.Vue.watch, S3 = {
  name: "SxContentComparatorSourceVsTargetSelector",
  components: { MwButtonGroup: ks },
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
    const n = (s) => t("update:selection", s), o = _3(e);
    return v3(
      () => e.isMappedSection,
      () => {
        o.value.map((s) => s.value).includes(e.selection) || n(o.value[0].value);
      }
    ), {
      listSelector: o,
      updateSelection: n
    };
  }
}, y3 = window.Vue.resolveComponent, C3 = window.Vue.createVNode, k3 = window.Vue.openBlock, x3 = window.Vue.createElementBlock, b3 = { class: "sx-content-comparator__source-target-selector" };
function $3(e, t, n, o, s, a) {
  const r = y3("mw-button-group");
  return k3(), x3("div", b3, [
    C3(r, {
      items: o.listSelector,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const V3 = /* @__PURE__ */ F(S3, [["render", $3]]), Vn = window.Vue.computed, E3 = window.Vue.ref, mc = () => {
  const e = E3([]), { currentTargetPage: t } = Ue(), { sectionSuggestion: n } = Ne(), { sectionURLParameter: o } = M(), s = Vn(
    () => n.value.missingSections[o.value] || n.value.presentSections[o.value] || ""
  ), a = Vn(
    () => {
      var g;
      return (((g = r.value) == null ? void 0 : g.title) || "").replace(/ /g, "_");
    }
  ), r = Vn(
    () => {
      var g;
      return (g = t.value) == null ? void 0 : g.getSectionByTitle(s.value);
    }
  ), { sourceSection: l } = K(), u = Vn(() => {
    var g;
    return (g = l.value) == null ? void 0 : g.html;
  }), d = Vn(() => {
    var g;
    return (g = r.value) == null ? void 0 : g.html;
  }), i = Vn(
    () => {
      var g;
      return (g = n.value) == null ? void 0 : g.missingSections.hasOwnProperty(o.value);
    }
  ), c = Vn(
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
const ka = window.Vue.createVNode, A3 = window.Vue.toDisplayString, D3 = window.Vue.createElementVNode, an = window.Vue.unref, xa = window.Vue.withCtx, kr = window.Vue.openBlock, xr = window.Vue.createBlock;
window.Vue.createCommentVNode;
const L3 = window.Vue.normalizeClass, T3 = ["lang", "dir", "textContent"], og = window.Vue.ref, br = window.Vue.computed, B3 = window.Vue.onMounted, P3 = {
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
    const n = e, o = t, s = og(!1), { sectionSuggestion: a } = Ne(), { sectionURLParameter: r } = M(), l = br(
      () => (r.value || "").replace(/ /g, "_")
    ), u = (p) => o("update:sourceVsTargetSelection", p), { activeSectionTargetTitle: d, targetSectionAnchor: i } = mc(), c = br(() => {
      switch (n.sourceVsTargetSelection) {
        case "source_section":
          return {
            title: r.value,
            path: `${G.getPageUrl(
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
    }), g = br(
      () => G.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), m = og(null);
    return B3(() => {
      new IntersectionObserver(
        ([h]) => {
          s.value = h.intersectionRect.height < h.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(m.value.$el);
    }), (p, h) => (kr(), xr(an(B), {
      ref_key: "contentHeader",
      ref: m,
      class: L3(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
      direction: "column",
      align: "stretch",
      reverse: s.value
    }, {
      default: xa(() => [
        ka(V3, {
          "is-mapped-section": e.isMappedSection,
          selection: e.sourceVsTargetSelection,
          "onUpdate:selection": u
        }, null, 8, ["is-mapped-section", "selection"]),
        ka(an(B), {
          justify: "between",
          class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
        }, {
          default: xa(() => [
            ka(an(k), null, {
              default: xa(() => [
                D3("h3", {
                  lang: c.value.lang,
                  dir: c.value.dir,
                  class: "ma-0 pa-0",
                  textContent: A3(c.value.title)
                }, null, 8, T3)
              ]),
              _: 1
            }),
            ka(an(k), { shrink: "" }, {
              default: xa(() => [
                s.value ? (kr(), xr(an(xe), {
                  key: 0,
                  icon: an(Ka),
                  progressive: "",
                  label: p.$i18n(
                    "cx-sx-content-comparator-content-header-translate-button-label"
                  ),
                  onClick: h[0] || (h[0] = (w) => p.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label"])) : (kr(), xr(an(xe), {
                  key: 1,
                  class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                  icon: an(Nm),
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
}, F3 = window.Vue.computed, M3 = {
  name: "SxContentComparatorHeaderNavigation",
  components: {
    MwCol: k,
    MwButton: xe
  },
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const { sectionURLParameter: t } = M(), n = F3(
      () => e.sectionSourceTitles.indexOf(t.value)
    ), { selectPageSectionByTitle: o } = uc();
    return {
      goToNextSection: () => {
        const r = (n.value + 1) % e.sectionSourceTitles.length, l = e.sectionSourceTitles[r];
        o(l);
      },
      goToPreviousSection: () => {
        const r = (n.value - 1 + e.sectionSourceTitles.length) % e.sectionSourceTitles.length, l = e.sectionSourceTitles[r];
        o(l);
      },
      mwIconPrevious: cf,
      mwIconArrowForward: Pl
    };
  }
}, sg = window.Vue.resolveComponent, ag = window.Vue.createVNode, N3 = window.Vue.withCtx, U3 = window.Vue.openBlock, I3 = window.Vue.createBlock;
function z3(e, t, n, o, s, a) {
  const r = sg("mw-button"), l = sg("mw-col");
  return U3(), I3(l, {
    class: "justify-end",
    align: "center"
  }, {
    default: N3(() => [
      ag(r, {
        class: "pa-0 pe-1",
        type: "icon",
        icon: o.mwIconPrevious,
        onClick: o.goToPreviousSection
      }, null, 8, ["icon", "onClick"]),
      ag(r, {
        class: "pa-0 ps-1",
        type: "icon",
        icon: o.mwIconArrowForward,
        onClick: o.goToNextSection
      }, null, 8, ["icon", "onClick"])
    ]),
    _: 1
  });
}
const R3 = /* @__PURE__ */ F(M3, [["render", z3]]);
const O3 = {
  name: "SxContentComparatorHeaderMappedSection",
  components: {
    MwRow: B,
    MwCol: k,
    MwButton: xe
  },
  props: {
    suggestion: {
      type: hn,
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
    mwIconTrash: Pm,
    mwIconUndo: wf
  }),
  computed: {
    isDiscardedSection() {
      return this.discardedSections.includes(this.targetSectionTitle);
    },
    mappedSectionHeaderTitle() {
      return this.$i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        O.getAutonym(this.suggestion.targetLanguage)
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
}, ig = window.Vue.toDisplayString, H3 = window.Vue.resolveDirective, $r = window.Vue.withDirectives, Xn = window.Vue.openBlock, ba = window.Vue.createElementBlock, j3 = window.Vue.createCommentVNode, q3 = window.Vue.createTextVNode, rg = window.Vue.createElementVNode, G3 = window.Vue.normalizeClass, Vr = window.Vue.resolveComponent, Er = window.Vue.withCtx, Ar = window.Vue.createVNode, lg = window.Vue.createBlock, W3 = { class: "sx-content-comparator-header__mapped-section" }, X3 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, K3 = { key: 0 }, Y3 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, J3 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
};
function Q3(e, t, n, o, s, a) {
  const r = Vr("mw-col"), l = Vr("mw-button"), u = Vr("mw-row"), d = H3("i18n");
  return Xn(), ba("div", W3, [
    Ar(u, { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
      default: Er(() => [
        Ar(r, { grow: "" }, {
          default: Er(() => [
            rg("h6", X3, [
              q3(ig(a.mappedSectionHeaderTitle) + " ", 1),
              a.isDiscardedSection ? $r((Xn(), ba("span", K3, null, 512)), [
                [d, void 0, "cx-sx-content-comparator-discarded-section-label"]
              ]) : j3("", !0)
            ]),
            rg("h6", {
              class: G3(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                "sx-content-comparator-header__mapped-section-target-title--discarded": a.isDiscardedSection
              }])
            }, ig(n.targetSectionTitle), 3)
          ]),
          _: 1
        }),
        Ar(r, { shrink: "" }, {
          default: Er(() => [
            a.isDiscardedSection ? (Xn(), lg(l, {
              key: 1,
              class: "pa-0",
              icon: e.mwIconUndo,
              type: "icon",
              onClick: a.undoDiscard
            }, null, 8, ["icon", "onClick"])) : (Xn(), lg(l, {
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
    a.isDiscardedSection ? $r((Xn(), ba("p", J3, null, 512)), [
      [d, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
    ]) : $r((Xn(), ba("p", Y3, null, 512)), [
      [d, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
    ])
  ]);
}
const Z3 = /* @__PURE__ */ F(O3, [["render", Q3]]);
const se = window.Vue.unref, Ut = window.Vue.createVNode, cg = window.Vue.toDisplayString, ps = window.Vue.createElementVNode, Kn = window.Vue.withCtx, eV = window.Vue.resolveDirective, ug = window.Vue.withDirectives, Dr = window.Vue.openBlock, dg = window.Vue.createBlock, gg = window.Vue.createCommentVNode, tV = window.Vue.createElementBlock, nV = { class: "sx-content-comparator__header pa-4" }, oV = ["lang", "dir"], sV = ["lang", "dir"], aV = /* @__PURE__ */ ps("br", null, null, -1), $a = window.Vue.computed, iV = {
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
    const { sectionURLParameter: t } = M(), { sourceSection: n } = K(), { sectionSuggestion: o } = Ne(), s = $a(
      () => {
        var d;
        return (d = o.value) == null ? void 0 : d.missingSections.hasOwnProperty(t.value);
      }
    ), a = $a(
      () => {
        var d;
        return (d = o.value) == null ? void 0 : d.presentSections.hasOwnProperty(t.value);
      }
    ), { activeSectionTargetTitle: r } = mc(), l = $a(() => {
      var d;
      return (d = n.value) == null ? void 0 : d.html;
    }), u = $a(() => [
      ...Object.keys(o.value.missingSections),
      ...Object.keys(o.value.presentSections)
    ]);
    return (d, i) => {
      const c = eV("i18n");
      return Dr(), tV("div", nV, [
        Ut(se(xe), {
          class: "py-2 pa-0",
          icon: se(uf),
          label: d.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: i[0] || (i[0] = (g) => d.$emit("close"))
        }, null, 8, ["icon", "label"]),
        Ut(se(B), { class: "my-1 py-2 mx-0" }, {
          default: Kn(() => [
            Ut(se(k), { grow: "" }, {
              default: Kn(() => [
                ps("h4", {
                  class: "pa-0 sx-content-comparator-header__article-title",
                  lang: se(o).sourceLanguage,
                  dir: se(O.getDir)(se(o).sourceLanguage)
                }, cg(se(o).sourceTitle), 9, oV),
                ps("h2", {
                  class: "sx-content-comparator-header__section-title pa-0 ma-0",
                  lang: se(o).sourceLanguage,
                  dir: se(O.getDir)(se(o).sourceLanguage)
                }, cg(se(t)), 9, sV)
              ]),
              _: 1
            }),
            Ut(R3, {
              cols: "2",
              "section-source-titles": u.value
            }, null, 8, ["section-source-titles"]),
            Ut(se(k), {
              cols: "12",
              mobile: "12",
              tablet: "4",
              class: "py-2 mb-1"
            }, {
              default: Kn(() => [
                Ut(se(xe), {
                  icon: se(Ka),
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
        s.value ? (Dr(), dg(se(B), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: Kn(() => [
            Ut(se(k), {
              shrink: "",
              class: "pe-2"
            }, {
              default: Kn(() => [
                Ut(se(Ee), { icon: se(pf) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Ut(se(k), { class: "ma-0" }, {
              default: Kn(() => [
                ug(ps("strong", null, null, 512), [
                  [c, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                aV,
                ug(ps("span", null, null, 512), [
                  [c, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : gg("", !0),
        a.value ? (Dr(), dg(Z3, {
          key: 1,
          suggestion: se(o),
          "target-section-title": se(r),
          "discarded-sections": e.discardedSections,
          "onUpdate:discardedSections": i[2] || (i[2] = (g) => d.$emit("update:discardedSections", g))
        }, null, 8, ["suggestion", "target-section-title", "discarded-sections"])) : gg("", !0)
      ]);
    };
  }
};
const rV = {
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
}, mg = window.Vue.toDisplayString, lV = window.Vue.createElementVNode, pg = window.Vue.openBlock, hg = window.Vue.createElementBlock, cV = window.Vue.createCommentVNode, uV = { class: "sx-content-comparator__new-section-placeholder--present mt-4 py-4 px-7" }, dV = ["textContent"], gV = ["textContent"];
function mV(e, t, n, o, s, a) {
  return pg(), hg("section", uV, [
    lV("h5", {
      textContent: mg(n.placeholderTitle)
    }, null, 8, dV),
    n.placeholderSubtitle ? (pg(), hg("p", {
      key: 0,
      textContent: mg(n.placeholderSubtitle)
    }, null, 8, gV)) : cV("", !0)
  ]);
}
const ah = /* @__PURE__ */ F(rV, [["render", mV]]), pV = window.Vue.computed, hV = window.Vue.createApp, wV = window.Vuex.useStore, fV = () => {
  const e = wV(), { sectionSuggestion: t } = Ne(), { currentTargetPage: n } = Ue(), o = me(), s = () => hV(
    ah,
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
  return pV(() => {
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
const _V = window.Vue.ref, vV = window.Vue.computed, SV = window.Vue.watch, yV = window.Vuex.useStore, CV = {
  name: "SxContentComparator",
  components: {
    SxContentComparatorNewSectionPlaceholder: ah,
    SxContentComparatorHeader: iV,
    SxContentComparatorContentHeader: P3,
    MwSpinner: Xe
  },
  setup() {
    const e = yV(), t = he(), n = _V("source_section"), { logDashboardTranslationStartEvent: o } = sc(), s = () => t.push({ name: "sx-section-selector" }), a = () => {
      o(), th() || !e.getters["translator/userHasSectionTranslations"] ? t.push({ name: "sx-quick-tutorial" }) : t.push({ name: "sx-sentence-selector" });
    }, {
      activeSectionTargetTitle: r,
      discardedSections: l,
      isCurrentSectionMapped: u,
      sourceSectionContent: d,
      targetSectionContent: i
    } = mc(), c = fV(), { sectionSuggestion: g } = Ne(), { sourceLanguage: m, targetLanguage: p } = H(e), h = vV(() => g.value.targetTitle), w = cc();
    return SV(
      h,
      () => w(
        p.value,
        m.value,
        h.value
      ),
      { immediate: !0 }
    ), {
      getDir: O.getDir,
      activeSectionTargetTitle: r,
      discardedSections: l,
      goToSectionSelector: s,
      isCurrentSectionMapped: u,
      sourceSectionContent: d,
      sourceVsTargetSelection: n,
      targetPageContent: c,
      targetSectionContent: i,
      translateSection: a,
      sourceLanguage: m,
      targetLanguage: p
    };
  }
}, Va = window.Vue.resolveComponent, Lr = window.Vue.createVNode, Yn = window.Vue.openBlock, wg = window.Vue.createBlock, fg = window.Vue.createCommentVNode, Ea = window.Vue.createElementVNode, Tr = window.Vue.Fragment, Aa = window.Vue.createElementBlock, kV = { class: "sx-content-comparator" }, xV = { class: "sx-content-comparator__source-content" }, bV = ["lang", "dir", "innerHTML"], $V = ["lang", "dir", "innerHTML"], VV = ["innerHTML"];
function EV(e, t, n, o, s, a) {
  const r = Va("sx-content-comparator-header"), l = Va("sx-content-comparator-content-header"), u = Va("mw-spinner"), d = Va("sx-content-comparator-new-section-placeholder");
  return Yn(), Aa("section", kV, [
    Lr(r, {
      "discarded-sections": o.discardedSections,
      "onUpdate:discardedSections": t[0] || (t[0] = (i) => o.discardedSections = i),
      onTranslationButtonClicked: o.translateSection,
      onClose: o.goToSectionSelector
    }, null, 8, ["discarded-sections", "onTranslationButtonClicked", "onClose"]),
    Lr(l, {
      "source-vs-target-selection": o.sourceVsTargetSelection,
      "onUpdate:sourceVsTargetSelection": t[1] || (t[1] = (i) => o.sourceVsTargetSelection = i),
      "is-mapped-section": o.isCurrentSectionMapped,
      onTranslationButtonClicked: o.translateSection
    }, null, 8, ["source-vs-target-selection", "is-mapped-section", "onTranslationButtonClicked"]),
    Ea("section", xV, [
      o.sourceVsTargetSelection === "source_section" ? (Yn(), Aa(Tr, { key: 0 }, [
        o.sourceSectionContent ? fg("", !0) : (Yn(), wg(u, { key: 0 })),
        Ea("section", {
          lang: o.sourceLanguage,
          dir: o.getDir(o.sourceLanguage),
          class: "pt-2 px-4",
          innerHTML: o.sourceSectionContent
        }, null, 8, bV)
      ], 64)) : o.sourceVsTargetSelection === "target_article" ? (Yn(), Aa(Tr, { key: 1 }, [
        o.targetPageContent ? fg("", !0) : (Yn(), wg(u, { key: 0 })),
        Ea("article", {
          lang: o.targetLanguage,
          dir: o.getDir(o.targetLanguage),
          class: "px-4",
          innerHTML: o.targetPageContent
        }, null, 8, $V)
      ], 64)) : (Yn(), Aa(Tr, { key: 2 }, [
        Ea("section", {
          class: "pa-4",
          innerHTML: o.targetSectionContent
        }, null, 8, VV),
        Lr(d, {
          "placeholder-title": e.$i18n("cx-sx-content-comparator-present-section-placeholder-title"),
          "placeholder-subtitle": e.$i18n(
            "cx-sx-content-comparator-present-section-placeholder-subtitle"
          )
        }, null, 8, ["placeholder-title", "placeholder-subtitle"])
      ], 64))
    ])
  ]);
}
const AV = /* @__PURE__ */ F(CV, [["render", EV]]);
const DV = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: AV
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, LV = window.Vue.resolveComponent, TV = window.Vue.createVNode, BV = window.Vue.normalizeClass, PV = window.Vue.openBlock, FV = window.Vue.createElementBlock;
function MV(e, t, n, o, s, a) {
  const r = LV("sx-content-comparator");
  return PV(), FV("main", {
    class: BV(["sx-content-comparator-view", a.classes])
  }, [
    TV(r)
  ], 2);
}
const NV = /* @__PURE__ */ F(DV, [["render", MV]]);
const UV = window.Vue.resolveDirective, Wo = window.Vue.createElementVNode, _g = window.Vue.withDirectives, Da = window.Vue.unref, Br = window.Vue.createVNode, vg = window.Vue.toDisplayString, Sg = window.Vue.createTextVNode, Xo = window.Vue.withCtx, IV = window.Vue.openBlock, zV = window.Vue.createBlock, RV = { class: "mw-ui-dialog__header px-4 py-3" }, OV = { class: "mw-ui-dialog__header-title" }, HV = { class: "pa-4" }, jV = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, yg = window.Codex.CdxButton, qV = {
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
      const u = UV("i18n");
      return IV(), zV(Da(Ye), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        "overlay-opacity": 0.7,
        "overlay-color": r.$mwui.colors.gray700
      }, {
        header: Xo(() => [
          Wo("div", RV, [
            _g(Wo("span", OV, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: Xo(() => [
          Wo("div", jV, [
            Br(Da(yg), {
              weight: "quiet",
              onClick: s
            }, {
              default: Xo(() => [
                Sg(vg(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            Br(Da(yg), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: Xo(() => [
                Sg(vg(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: Xo(() => [
          Br(Da(Xa)),
          Wo("div", HV, [
            _g(Wo("span", null, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "overlay-color"]);
    };
  }
}, GV = window.Vuex.useStore, pc = () => {
  const e = GV(), { sourceSection: t } = K(), { getCurrentTitleByLanguage: n } = _t(), o = (l, u, d) => {
    if (l === 0) {
      t.value.proposedTitleTranslations[u] = d;
      return;
    }
    const i = t.value.getContentTranslationUnitById(l);
    i instanceof Pe ? i.blockTemplateProposedTranslations[u] = d : i instanceof mn && i.addProposedTranslation(u, d);
  }, s = (l, u) => C(void 0, null, function* () {
    const { sourceLanguage: d, targetLanguage: i } = e.state.application;
    if (!e.getters["mediawiki/isValidProviderForTranslation"](d, i, l))
      return "";
    try {
      const g = yield e.dispatch("application/getCXServerToken");
      return yield Ke.fetchSegmentTranslation(
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
    let m;
    if (e.commit("application/addMtRequestsPending", l), m = yield s(u, c), !m) {
      e.commit("application/removeMtRequestsPending", l);
      return;
    }
    g instanceof Pe && (g.setBlockTemplateAdaptationInfoByHtml(
      u,
      m
    ), m = (yield kv(
      m,
      n(i, d),
      i
    )) || ""), o(
      l,
      u,
      m
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
}, WV = window.Vuex.useStore, XV = () => {
  const { sourceSection: e } = K(), t = WV(), { translateTranslationUnitById: n } = pc();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
const Pr = window.Vue.computed, KV = window.Vuex.useStore, YV = {
  name: "SxTranslationSelector",
  components: { MwCard: it, MwButton: xe, MwDialog: Ye },
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, t) {
    const n = Y.EMPTY_TEXT_PROVIDER_KEY, o = Y.ORIGINAL_TEXT_PROVIDER_KEY, s = KV(), {
      sourceSection: a,
      isSectionTitleSelected: r,
      selectedContentTranslationUnit: l
    } = K(), { sourceLanguage: u, targetLanguage: d } = H(s), i = Pr(
      () => s.getters["mediawiki/getSupportedMTProviders"](
        u.value,
        d.value
      )
    ), c = Pr(() => {
      const _ = [o, n];
      return i.value.filter(
        (f) => !_.includes(f)
      );
    }), g = Pr(
      () => r.value ? a.value.proposedTitleTranslations : l.value.proposedTranslations
    ), m = XV(), p = (_) => {
      m(_), w();
    }, h = Y.getMTProviderLabel, w = () => t.emit("update:active", !1);
    return {
      apiMtProviders: c,
      close: w,
      emptyTextProviderKey: n,
      getDir: O.getDir,
      getMTProviderLabel: h,
      mwIconClose: uo,
      originalTextProviderKey: o,
      proposedTranslations: g,
      selectProvider: p,
      sourceLanguage: u
    };
  }
}, JV = window.Vue.resolveDirective, Ge = window.Vue.createElementVNode, La = window.Vue.withDirectives, Fr = window.Vue.resolveComponent, Mr = window.Vue.createVNode, rn = window.Vue.withCtx, QV = window.Vue.renderList, ZV = window.Vue.Fragment, Nr = window.Vue.openBlock, e5 = window.Vue.createElementBlock, t5 = window.Vue.toDisplayString, Cg = window.Vue.createBlock, n5 = window.Vue.createCommentVNode, o5 = { class: "mw-ui-dialog__header pa-4" }, s5 = { class: "row ma-0 py-2" }, a5 = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, i5 = { class: "mb-0" }, r5 = { class: "col shrink justify-center" }, l5 = { class: "pb-2 mb-0" }, c5 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, u5 = ["dir", "lang", "innerHTML"], d5 = ["textContent"], g5 = ["innerHTML"], m5 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, p5 = /* @__PURE__ */ Ge("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1);
function h5(e, t, n, o, s, a) {
  const r = Fr("mw-button"), l = Fr("mw-card"), u = Fr("mw-dialog"), d = JV("i18n");
  return n.active ? (Nr(), Cg(u, {
    key: 0,
    class: "sx-sentence-selector__translation-options",
    fullscreen: ""
  }, {
    header: rn(() => [
      Ge("div", o5, [
        Ge("div", s5, [
          Ge("div", a5, [
            La(Ge("h4", i5, null, 512), [
              [d, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
            ])
          ]),
          Ge("div", r5, [
            Mr(r, {
              type: "icon",
              icon: o.mwIconClose,
              class: "pa-0",
              onClick: o.close
            }, null, 8, ["icon", "onClick"])
          ])
        ]),
        La(Ge("h6", l5, null, 512), [
          [d, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
        ])
      ])
    ]),
    default: rn(() => [
      Mr(l, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: t[0] || (t[0] = (i) => o.selectProvider(o.originalTextProviderKey))
      }, {
        header: rn(() => [
          La(Ge("h5", c5, null, 512), [
            [d, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
          ])
        ]),
        default: rn(() => [
          Ge("p", {
            dir: o.getDir(o.sourceLanguage),
            lang: o.sourceLanguage,
            innerHTML: o.proposedTranslations[o.originalTextProviderKey]
          }, null, 8, u5)
        ]),
        _: 1
      }),
      (Nr(!0), e5(ZV, null, QV(o.apiMtProviders, (i) => (Nr(), Cg(l, {
        key: i,
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: (c) => o.selectProvider(i)
      }, {
        header: rn(() => [
          Ge("h5", {
            class: "sx-sentence-selector__translation-options-card-title mb-4",
            textContent: t5(o.getMTProviderLabel(i))
          }, null, 8, d5)
        ]),
        default: rn(() => [
          Ge("p", {
            innerHTML: o.proposedTranslations[i]
          }, null, 8, g5)
        ]),
        _: 2
      }, 1032, ["onClick"]))), 128)),
      Mr(l, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: t[1] || (t[1] = (i) => o.selectProvider(o.emptyTextProviderKey))
      }, {
        header: rn(() => [
          La(Ge("h5", m5, null, 512), [
            [d, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
          ])
        ]),
        default: rn(() => [
          p5
        ]),
        _: 1
      })
    ]),
    _: 1
  })) : n5("", !0);
}
const w5 = /* @__PURE__ */ F(YV, [["render", h5]]), f5 = window.Vuex.useStore, _o = () => {
  const { sourceSection: e } = K(), t = f5(), { translateTranslationUnitById: n } = pc(), { currentMTProvider: o } = H(t), s = (l) => C(void 0, null, function* () {
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
const _5 = window.Vue.toDisplayString, Ur = window.Vue.createElementVNode, Ir = window.Vue.unref, v5 = window.Vue.createVNode, S5 = window.Vue.normalizeClass, y5 = window.Vue.withCtx, C5 = window.Vue.openBlock, k5 = window.Vue.createBlock, x5 = ["href"], b5 = ["textContent"], $5 = ["innerHTML"], Jn = window.Vue.computed, V5 = window.Vuex.useStore, kg = "sx-sentence-selector__section-title", E5 = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const t = V5(), { sourceSection: n, isSectionTitleSelected: o } = K(), { currentSourcePage: s } = Ue(), { sourceLanguage: a } = H(t), r = Jn(() => {
      var p;
      return (p = s.value) == null ? void 0 : p.title;
    }), l = Jn(
      () => {
        var p;
        return ((p = n.value) == null ? void 0 : p.title) || r.value;
      }
    ), u = Jn(
      () => G.getPageUrl(a.value, r.value)
    ), d = Jn(
      () => {
        var p;
        return !!((p = n.value) != null && p.translatedTitle);
      }
    ), i = Jn(
      () => d.value ? "translated" : "selected"
    ), c = Jn(() => {
      const p = [kg];
      return o.value && p.push(`${kg}--${i.value}`), p;
    }), { selectTranslationUnitById: g } = _o(), m = () => g(0);
    return (p, h) => (C5(), k5(Ir(k), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: y5(() => [
        Ur("a", {
          href: u.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          Ur("strong", {
            textContent: _5(r.value)
          }, null, 8, b5),
          v5(Ir(Ee), {
            icon: Ir(Nm),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, x5),
        Ur("h2", {
          class: S5(["pa-0 ma-0", c.value]),
          onClick: m,
          innerHTML: l.value
        }, null, 10, $5)
      ]),
      _: 1
    }));
  }
};
const ut = window.Vue.unref, Ko = window.Vue.createVNode, Ta = window.Vue.withCtx, xg = window.Vue.toDisplayString, bg = window.Vue.createTextVNode, A5 = window.Vue.openBlock, D5 = window.Vue.createBlock, L5 = window.Vue.computed, zr = window.Codex.CdxButton, $g = window.Codex.CdxIcon, ih = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = K(), s = L5(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, r) => (A5(), D5(ut(B), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: Ta(() => [
        Ko(ut(zr), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: ut(n),
          onClick: r[0] || (r[0] = (l) => a.$emit("select-previous-segment"))
        }, {
          default: Ta(() => [
            Ko(ut($g), {
              class: "me-1",
              icon: ut(oc)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        Ko(ut(zr), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !ut(o),
          onClick: r[1] || (r[1] = (l) => a.$emit("apply-translation"))
        }, {
          default: Ta(() => [
            bg(xg(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        Ko(ut(zr), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: r[2] || (r[2] = (l) => a.$emit("skip-translation"))
        }, {
          default: Ta(() => [
            bg(xg(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            Ko(ut($g), {
              class: "ms-1",
              size: "small",
              icon: ut(Fs)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const En = window.Vue.unref, T5 = window.Vue.toDisplayString, Yo = window.Vue.createVNode, Ba = window.Vue.withCtx, B5 = window.Vue.openBlock, P5 = window.Vue.createBlock, Rr = window.Vue.computed, F5 = window.Vuex.useStore, M5 = window.Codex.CdxButton, N5 = window.Codex.CdxIcon, U5 = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = F5(), n = Rr(() => t.state.application.currentMTProvider), o = me(), s = Rr(() => ({
      [Y.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [Y.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = Rr(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        Y.getMTProviderLabel(n.value)
      )
    );
    return (r, l) => (B5(), P5(En(k), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: Ba(() => [
        Yo(En(B), { class: "ma-0 ps-5 pb-4" }, {
          default: Ba(() => [
            Yo(En(k), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: T5(a.value)
            }, null, 8, ["textContent"]),
            Yo(En(k), {
              shrink: "",
              class: "pe-5"
            }, {
              default: Ba(() => [
                Yo(En(M5), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: l[0] || (l[0] = (u) => r.$emit("configure-options"))
                }, {
                  default: Ba(() => [
                    Yo(En(N5), {
                      class: "pa-0",
                      icon: En(tc)
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
const nt = window.Vue.unref, ln = window.Vue.createVNode, I5 = window.Vue.resolveDirective, Vg = window.Vue.createElementVNode, z5 = window.Vue.withDirectives, Eg = window.Vue.toDisplayString, Ag = window.Vue.createTextVNode, Jo = window.Vue.withCtx, R5 = window.Vue.openBlock, O5 = window.Vue.createElementBlock, H5 = { class: "mt-retry-body pb-5" }, j5 = { class: "retry-body__message" }, Dg = window.Codex.CdxButton, Or = window.Codex.CdxIcon, q5 = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = I5("i18n");
      return R5(), O5("div", H5, [
        Vg("div", j5, [
          ln(nt(Or), {
            class: "me-2",
            icon: nt(zp)
          }, null, 8, ["icon"]),
          z5(Vg("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        ln(nt(B), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: Jo(() => [
            ln(nt(k), { cols: "6" }, {
              default: Jo(() => [
                ln(nt(Dg), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: Jo(() => [
                    ln(nt(Or), {
                      class: "me-1",
                      icon: nt(qp)
                    }, null, 8, ["icon"]),
                    Ag(" " + Eg(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            ln(nt(k), { cols: "6" }, {
              default: Jo(() => [
                ln(nt(Dg), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: Jo(() => [
                    ln(nt(Or), {
                      class: "me-1",
                      icon: nt(pk)
                    }, null, 8, ["icon"]),
                    Ag(" " + Eg(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const Qn = window.Vue.createVNode, Le = window.Vue.unref, Qo = window.Vue.openBlock, G5 = window.Vue.createElementBlock, W5 = window.Vue.createCommentVNode, Pa = window.Vue.createBlock, X5 = window.Vue.normalizeClass, K5 = window.Vue.normalizeStyle, Zo = window.Vue.withCtx, Y5 = window.Vue.toDisplayString, J5 = window.Vue.createTextVNode, Q5 = window.Vue.normalizeProps, Z5 = window.Vue.guardReactiveProps, eE = ["lang", "dir", "innerHTML"], Hr = window.Vue.ref, tE = window.Vue.onMounted, nE = window.Vue.onBeforeUnmount, jr = window.Vue.computed, oE = window.Vue.nextTick, sE = window.Vuex.useStore, aE = window.Codex.CdxButton, iE = window.Codex.CdxIcon, rE = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = Hr(0), n = Hr(null), o = Hr(null), s = sE(), { currentMTProvider: a, targetLanguage: r } = H(s), { sourceSection: l, currentProposedTranslation: u } = K(), d = jr(
      () => {
        var p, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (p = l.value) == null ? void 0 : p.selectedTranslationUnitId
        );
      }
    ), i = jr(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), c = jr(
      () => !!u.value || a.value === Y.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    tE(() => C(this, null, function* () {
      yield oE(), g(), m.observe(n.value.$el), m.observe(o.value.$el);
    })), nE(() => {
      m.unobserve(n.value.$el), m.unobserve(o.value.$el);
    });
    const m = new ResizeObserver(() => g());
    return (p, h) => (Qo(), Pa(Le(it), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: Zo(() => [
        Qn(Le(B), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: Zo(() => [
            Qn(U5, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (w) => p.$emit("configure-options"))
            }, null, 512),
            Qn(Le(k), {
              class: X5(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !c.value && d.value
              }]),
              style: K5(c.value ? i.value : null)
            }, {
              default: Zo(() => [
                c.value ? (Qo(), G5("section", {
                  key: 0,
                  lang: Le(r),
                  dir: Le(O.getDir)(Le(r)),
                  innerHTML: Le(u)
                }, null, 8, eE)) : d.value ? (Qo(), Pa(Le(Xe), { key: 1 })) : (Qo(), Pa(q5, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (w) => p.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (w) => p.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            Qn(Le(k), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: Zo(() => [
                c.value || d.value ? (Qo(), Pa(Le(aE), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !c.value,
                  onClick: h[3] || (h[3] = (w) => p.$emit("edit-translation", Le(u)))
                }, {
                  default: Zo(() => [
                    Qn(Le(iE), {
                      class: "me-1",
                      icon: Le(ec)
                    }, null, 8, ["icon"]),
                    J5(" " + Y5(p.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : W5("", !0),
                Qn(ih, Q5(Z5(p.$attrs)), null, 16)
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
}, lE = window.Vue.computed, cE = (e) => lE(() => {
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
const uE = window.Vue.onMounted, dE = window.Vue.ref, gE = window.Vue.computed, mE = {
  name: "SubSection",
  props: {
    subSection: {
      type: Pe,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = dE(null), o = cE(e.subSection);
    uE(() => {
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
    const { selectTranslationUnitById: s } = _o(), a = (l) => {
      if (l.selected) {
        t("bounce-translation");
        return;
      }
      s(l.id);
    }, r = gE(() => ({
      "sx-sentence-selector__subsection--block-selected": e.subSection.selected
    }));
    return {
      content: o,
      rootClasses: r,
      subSectionRoot: n
    };
  }
}, pE = window.Vue.normalizeClass, hE = window.Vue.openBlock, wE = window.Vue.createElementBlock, fE = ["innerHTML"];
function _E(e, t, n, o, s, a) {
  return hE(), wE("div", {
    ref: "subSectionRoot",
    class: pE(["sx-sentence-selector__subsection", o.rootClasses]),
    innerHTML: o.content
  }, null, 10, fE);
}
const vE = /* @__PURE__ */ F(mE, [["render", _E]]);
const Lg = window.Vue.computed, SE = {
  name: "BlockTemplateStatusIndicator",
  components: {
    MwCircleProgressBar: n1,
    MwIcon: Ee
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
    const t = Lg(() => ({ "--size": e.size })), n = Lg(
      () => !e.isTemplateAdapted || e.percentage === 0 ? Fl : ao
    );
    return {
      cssVars: t,
      statusIcon: n
    };
  }
}, Tg = window.Vue.resolveComponent, Bg = window.Vue.createVNode, Pg = window.Vue.normalizeStyle, yE = window.Vue.openBlock, CE = window.Vue.createElementBlock;
function kE(e, t, n, o, s, a) {
  const r = Tg("mw-circle-progress-bar"), l = Tg("mw-icon");
  return yE(), CE("div", {
    class: "block-template-status-indicator",
    style: Pg(o.cssVars)
  }, [
    Bg(r, {
      percentage: n.percentage,
      size: n.size,
      "stroke-width": n.strokeWidth
    }, null, 8, ["percentage", "size", "stroke-width"]),
    Bg(l, {
      icon: o.statusIcon,
      size: n.size / 2,
      style: Pg({
        left: `calc(50% - ${n.size / 4}px)`,
        top: `calc(50% - ${n.size / 4}px)`
      })
    }, null, 8, ["icon", "size", "style"])
  ], 4);
}
const rh = /* @__PURE__ */ F(SE, [["render", kE]]), xE = window.Vuex.useStore, es = window.Vue.computed, bE = {
  name: "SxBlockTemplateStatusDialog",
  components: {
    MwCol: k,
    MwRow: B,
    MwIcon: Ee,
    MwDialog: Ye,
    BlockTemplateStatusIndicator: rh
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
    const { targetLanguageAutonym: t } = H(xE()), n = es(
      () => !e.isTemplateAdapted || o.value === 0 ? Fl : ao
    ), o = es(
      () => e.targetParamsCount / (e.sourceParamsCount + e.mandatoryMissingParamsCount) * 100
    ), s = me(), a = es(() => {
      let u;
      return e.targetTemplateExists ? e.isTemplateAdapted ? o.value < 100 ? u = "cx-sx-block-template-mapping-status-title-partially-template" : u = "cx-sx-block-template-mapping-status-title-fully-template" : u = "cx-sx-block-template-mapping-status-title-unadapted-template" : u = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(u);
    }), r = es(() => {
      let u;
      return !e.targetTemplateExists || !e.isTemplateAdapted ? u = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? u = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : u = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(u);
    }), l = es(() => {
      let u = [];
      if (!e.targetTemplateExists)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            t.value
          ),
          icon: Sf,
          color: We.gray500
        });
      else if (!e.isTemplateAdapted)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            e.sourceParamsCount
          ),
          icon: uo,
          color: We.gray500
        });
      else if (o.value < 100)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            e.targetParamsCount,
            e.sourceParamsCount
          ),
          icon: ao,
          color: We.blue600
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
          icon: ao,
          color: We.blue600
        });
      }
      return e.mandatoryMissingParamsCount ? u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          e.mandatoryMissingParamsCount,
          t.value
        ),
        icon: Ka,
        color: We.gray500
      }) : e.targetTemplateExists && e.isTemplateAdapted && e.optionalMissingParamsCount && u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          e.optionalMissingParamsCount,
          t.value
        ),
        icon: nf,
        color: We.gray500
      }), u;
    });
    return {
      adaptationRatio: o,
      statusIcon: n,
      statusExplanation: r,
      statusText: a,
      mwIconCheck: ao,
      mwIconInfo: sf,
      notes: l
    };
  }
}, ts = window.Vue.resolveComponent, ns = window.Vue.openBlock, Fa = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Zn = window.Vue.withCtx, os = window.Vue.createVNode, qr = window.Vue.toDisplayString, Gr = window.Vue.createElementVNode, $E = window.Vue.renderList, VE = window.Vue.Fragment, EE = window.Vue.createElementBlock, AE = { class: "pa-4" }, DE = ["textContent"], LE = ["textContent"];
function TE(e, t, n, o, s, a) {
  const r = ts("block-template-status-indicator"), l = ts("mw-icon"), u = ts("mw-col"), d = ts("mw-row"), i = ts("mw-dialog");
  return ns(), Fa(i, {
    value: n.active,
    class: "sx-block-template-status-dialog",
    title: e.$i18n("cx-sx-publisher-preview-options-title"),
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.gray700,
    onInput: t[0] || (t[0] = (c) => e.$emit("update:active", c))
  }, {
    header: Zn(() => [
      os(d, {
        justify: "center",
        class: "mt-4"
      }, {
        default: Zn(() => [
          os(u, { shrink: "" }, {
            default: Zn(() => [
              n.targetTemplateExists ? (ns(), Fa(r, {
                key: 0,
                percentage: o.adaptationRatio,
                size: 40,
                "is-template-adapted": n.isTemplateAdapted,
                "stroke-width": 3
              }, null, 8, ["percentage", "is-template-adapted"])) : (ns(), Fa(l, {
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
    default: Zn(() => [
      Gr("div", AE, [
        Gr("h3", {
          textContent: qr(o.statusText)
        }, null, 8, DE),
        Gr("p", {
          class: "mt-6 text-small",
          textContent: qr(o.statusExplanation)
        }, null, 8, LE),
        (ns(!0), EE(VE, null, $E(o.notes, (c, g) => (ns(), Fa(d, {
          key: g,
          align: "start",
          class: "mt-4"
        }, {
          default: Zn(() => [
            os(u, { shrink: "" }, {
              default: Zn(() => [
                os(l, {
                  class: "me-2",
                  icon: c.icon,
                  "icon-color": c.color
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 2
            }, 1024),
            os(u, {
              textContent: qr(c.text)
            }, null, 8, ["textContent"])
          ]),
          _: 2
        }, 1024))), 128))
      ])
    ]),
    _: 1
  }, 8, ["value", "title", "overlay-color"]);
}
const BE = /* @__PURE__ */ F(bE, [["render", TE]]);
const ge = window.Vue.unref, Se = window.Vue.createVNode, dt = window.Vue.withCtx, Wr = window.Vue.toDisplayString, Fg = window.Vue.createTextVNode, PE = window.Vue.resolveDirective, Mg = window.Vue.withDirectives, Ng = window.Vue.createElementVNode, FE = window.Vue.normalizeClass, Ma = window.Vue.openBlock, Ug = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Ig = window.Vue.createBlock, ME = window.Vue.normalizeProps, NE = window.Vue.guardReactiveProps, UE = { class: "block-template-adaptation-card__container pa-4" }, IE = ["textContent"], zE = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, $e = window.Vue.computed, RE = window.Vue.ref, OE = window.Vuex.useStore, zg = window.Codex.CdxButton, Rg = window.Codex.CdxIcon, HE = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = OE(), { targetLanguageAutonym: n, currentMTProvider: o } = H(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = K(), r = $e(() => {
      var L;
      return ((L = s.value) == null ? void 0 : L.blockTemplateTranslatedContent) || a.value;
    }), l = $e(
      () => {
        var V;
        return (V = s.value) == null ? void 0 : V.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), u = $e(
      () => {
        var V;
        return !((V = t.state.application.mtRequestsPending) != null && V.includes(
          s.value.id
        ));
      }
    ), d = me(), i = $e(
      // Strip HTML comments and return
      () => {
        var V, L;
        return ((L = (V = s.value) == null ? void 0 : V.sourceBlockTemplateName) == null ? void 0 : L.replace(
          /<\!--.*?-->/g,
          ""
        )) || d.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), c = $e(
      () => {
        var V, L;
        return (L = (V = s.value) == null ? void 0 : V.blockTemplateAdaptationInfo) == null ? void 0 : L[o.value];
      }
    ), g = $e(
      () => {
        var V, L;
        return ((V = c.value) == null ? void 0 : V.adapted) || !!((L = c.value) != null && L.partial);
      }
    ), m = $e(() => c.value ? "block-template-adaptation-card__body--" + (g.value ? "success" : "warning") : null), p = $e(() => c.value ? g.value ? d.i18n("sx-block-template-adaptation-card-edit-button-label") : d.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), h = $e(
      () => {
        var V;
        return Object.keys(((V = s.value) == null ? void 0 : V.sourceTemplateParams) || {}).length;
      }
    ), w = $e(() => {
      var L;
      const V = (L = s.value) == null ? void 0 : L.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(V || {});
    }), _ = $e(() => w.value.length), f = $e(() => {
      const V = T.value;
      return h.value + V === 0 ? 100 : _.value / (h.value + V) * 100 || 0;
    }), S = RE(!1), y = () => {
      S.value = !0;
    }, A = (V) => V.filter((L) => !w.value.includes(L)), T = $e(() => {
      var L;
      const V = ((L = c.value) == null ? void 0 : L.mandatoryTargetParams) || [];
      return A(V).length;
    }), U = $e(() => {
      var L;
      const V = ((L = c.value) == null ? void 0 : L.optionalTargetParams) || [];
      return A(V).length;
    });
    return (V, L) => {
      const j = PE("i18n");
      return Ma(), Ig(ge(it), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: dt(() => [
          Ng("div", UE, [
            Se(ge(B), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: dt(() => [
                Se(ge(k), { shrink: "" }, {
                  default: dt(() => [
                    Se(ge(Rg), {
                      icon: ge(hk),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                Se(ge(k), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: dt(() => [
                    Fg(Wr(i.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            l.value ? (Ma(), Ug("div", {
              key: 0,
              class: FE(["pa-4 mb-4", m.value])
            }, [
              Se(ge(B), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: dt(() => [
                  Mg(Se(ge(k), { tag: "h5" }, null, 512), [
                    [j, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  Se(ge(k), { shrink: "" }, {
                    default: dt(() => [
                      Se(rh, {
                        percentage: f.value,
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
              Ng("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: Wr(l.value)
              }, null, 8, IE),
              Se(ge(zg), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: L[0] || (L[0] = (P) => V.$emit("edit-translation", r.value))
              }, {
                default: dt(() => [
                  Fg(Wr(p.value), 1)
                ]),
                _: 1
              })
            ], 2)) : u.value ? (Ma(), Ug("div", zE, [
              Se(ge(B), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: dt(() => [
                  Mg(Se(ge(k), { tag: "h5" }, null, 512), [
                    [j, [
                      ge(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  Se(ge(k), { shrink: "" }, {
                    default: dt(() => [
                      Se(ge(zg), {
                        weight: "quiet",
                        "aria-label": V.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: dt(() => [
                          Se(ge(Rg), {
                            icon: ge(gk),
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
            ])) : (Ma(), Ig(ge(Xe), { key: 2 }))
          ]),
          Se(ih, ME(NE(V.$attrs)), null, 16),
          Se(BE, {
            active: S.value,
            "onUpdate:active": L[1] || (L[1] = (P) => S.value = P),
            "source-params-count": h.value,
            "target-params-count": _.value,
            "mandatory-missing-params-count": T.value,
            "optional-missing-params-count": U.value,
            "is-template-adapted": g.value,
            "target-template-exists": !!l.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const jE = window.Vue.computed, qE = {
  name: "TranslatedSegmentCardHeader",
  components: { MwButtonGroup: ks },
  props: {
    selection: {
      type: String,
      required: !0,
      validator: (e) => ["sentence", "paragraph"].includes(e)
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const { isSectionTitleSelected: n } = K(), o = me();
    return { scopeOptions: jE(() => [
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
}, GE = window.Vue.resolveComponent, WE = window.Vue.createVNode, XE = window.Vue.openBlock, KE = window.Vue.createElementBlock, YE = { class: "translated-segment-card-header" };
function JE(e, t, n, o, s, a) {
  const r = GE("mw-button-group");
  return XE(), KE("div", YE, [
    WE(r, {
      items: o.scopeOptions,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const QE = /* @__PURE__ */ F(qE, [["render", JE]]);
const cn = window.Vue.unref, Na = window.Vue.createVNode, Xr = window.Vue.withCtx, ZE = window.Vue.openBlock, eA = window.Vue.createBlock, tA = window.Vue.computed, Og = window.Codex.CdxButton, Hg = window.Codex.CdxIcon, nA = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "skip-translation"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = K(), o = tA(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (ZE(), eA(cn(B), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: Xr(() => [
        Na(cn(Og), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: cn(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => s.$emit("select-previous-segment"))
        }, {
          default: Xr(() => [
            Na(cn(Hg), { icon: cn(oc) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        Na(cn(Og), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => s.$emit("skip-translation"))
        }, {
          default: Xr(() => [
            Na(cn(Hg), { icon: cn(Fs) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
};
const oA = window.Vue.useCssVars, ye = window.Vue.createVNode, jg = window.Vue.resolveDirective, sA = window.Vue.createElementVNode, Kr = window.Vue.withDirectives, re = window.Vue.unref, aA = window.Vue.normalizeStyle, Ua = window.Vue.openBlock, qg = window.Vue.createElementBlock, iA = window.Vue.createCommentVNode, rA = window.Vue.normalizeClass, je = window.Vue.withCtx, lA = window.Vue.toDisplayString, cA = window.Vue.createTextVNode, Gg = window.Vue.createBlock, uA = window.Vue.normalizeProps, dA = window.Vue.guardReactiveProps, It = window.Vue.computed, gA = window.Vue.ref, mA = window.Vue.inject, pA = window.Vuex.useStore, hA = window.Codex.CdxButton, Yr = window.Codex.CdxIcon, wA = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    oA((f) => ({
      "4929555c": _.value
    }));
    const t = gA("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = K(), { targetLanguage: a } = H(pA()), r = It(() => t.value === "sentence"), l = It(
      () => n.value.subSections.find(
        (f) => f.sentences.some(
          (S) => {
            var y;
            return S.id === ((y = o.value) == null ? void 0 : y.id);
          }
        )
      )
    ), u = It(() => {
      var f;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : r.value ? (f = o.value) == null ? void 0 : f.mtProposedTranslationUsed : l.value.proposedContentForMTValidation;
    }), d = mA("colors"), i = d.gray200, c = d.red600, g = It(() => s.value ? n.value.translatedTitle : r.value ? o.value.translatedContent : l.value.translatedContent), m = It(
      () => ht.calculateScore(
        g.value,
        u.value,
        a.value
      )
    ), p = It(
      () => ht.getScoreStatus(m.value)
    ), h = It(
      () => `translated-segment-card__modification-stats__percentage--${p.value}`
    ), w = It(() => ({
      failure: m.value === 0 ? null : d.yellow700,
      warning: d.yellow700,
      success: d.green600
    })), _ = It(
      () => w.value[p.value]
    );
    return (f, S) => {
      const y = jg("i18n"), A = jg("i18n-html");
      return Ua(), Gg(re(it), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: je(() => [
          ye(re(B), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: je(() => [
              ye(QE, {
                selection: t.value,
                "onUpdate:selection": S[0] || (S[0] = (T) => t.value = T)
              }, null, 8, ["selection"]),
              ye(re(k), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: je(() => [
                  ye(re(B), { class: "ma-0" }, {
                    default: je(() => [
                      ye(re(k), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: je(() => [
                          Kr(sA("h5", null, null, 512), [
                            [y, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          m.value === 0 ? Kr((Ua(), qg("p", {
                            key: 0,
                            style: aA({ color: re(c) })
                          }, null, 4)), [
                            [y, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : Kr((Ua(), qg("p", {
                            key: 1,
                            class: rA(h.value)
                          }, null, 2)), [
                            [A, [
                              m.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      ye(re(k), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: je(() => [
                          ye(re(B), { class: "ma-0 ms-2" }, {
                            default: je(() => [
                              ye(re(k), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: je(() => [
                                  ye(re(Yr), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: re(_k)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              ye(re(k), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: je(() => [
                                  ye(re(Um), {
                                    value: m.value,
                                    height: "4px",
                                    width: "64px",
                                    color: _.value,
                                    background: re(i)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              ye(re(k), { shrink: "" }, {
                                default: je(() => [
                                  ye(re(Yr), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: re(wk)
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
                  r.value ? (Ua(), Gg(re(hA), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: S[1] || (S[1] = (T) => f.$emit("edit-translation", g.value))
                  }, {
                    default: je(() => [
                      ye(re(Yr), {
                        class: "me-1",
                        icon: re(ec)
                      }, null, 8, ["icon"]),
                      cA(" " + lA(f.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : iA("", !0)
                ]),
                _: 1
              }),
              ye(re(k), { class: "translated-segment-card__actions" }, {
                default: je(() => [
                  ye(nA, uA(dA(f.$attrs)), null, 16)
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
}, fA = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = K(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = _o(), { currentTranslation: s } = Gt();
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
}, lh = window.Vuex.useStore, _A = () => {
  const e = lh(), { sourceLanguage: t, targetLanguage: n } = H(e);
  return () => C(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const o = yield Qa.fetchSupportedMTProviders(
      t.value,
      n.value
    );
    e.commit("mediawiki/addMtProviderGroup", o);
  });
}, vA = () => {
  const e = lh(), { currentMTProvider: t, sourceLanguage: n, targetLanguage: o } = H(e), s = _A();
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
}, SA = window.Vue.computed, yA = (e) => {
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
}, CA = () => {
  const { selectedContentTranslationUnit: e } = K(), t = SA(
    () => e.value instanceof Pe
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && yA(o);
  };
}, kA = (e, t) => {
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
}, xA = window.Vue.computed, ch = () => {
  const { currentTranslation: e } = Gt(), { currentSourcePage: t } = Ue();
  return xA(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, bA = window.Vuex.useStore, hc = () => {
  const e = bA(), { sourceSection: t, targetPageTitleForPublishing: n } = K(), { pageURLParameter: o } = M(), { sourceLanguage: s, targetLanguage: a } = H(e), r = ch();
  return () => {
    const l = n.value, u = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), d = `${r.value}_${t.value.id}`, i = t.value.getParallelCorporaUnits(d);
    i.forEach(
      (m) => kA(m, u)
    );
    const c = t.value.getTranslationProgress(a), g = e.getters["application/isSandboxTarget"];
    return Ke.saveTranslation({
      sourceTitle: o.value,
      targetTitle: l,
      // pass a dummy string to be stored as "cxsx_source_section_title" inside "cx_section_translations" table for lead sections
      sourceSectionTitle: t.value.sourceSectionTitleForPublishing,
      // pass a dummy string to be stored as "cxsx_target_section_title" inside "cx_section_translations" table for lead sections
      targetSectionTitle: t.value.targetSectionTitleForPublishing,
      sourceLanguage: s.value,
      targetLanguage: a.value,
      revision: r.value,
      units: i.map((m) => m.payload),
      // section id to be stored as "cxsx_section_id" inside "cx_section_translations"
      sectionId: d,
      isSandbox: g,
      progress: c
    });
  };
}, $A = window.Vue.effectScope, VA = window.Vue.onScopeDispose, EA = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = $A(!0), n = o.run(() => e(...a))), VA(s), n);
}, AA = window.Vuex.useStore;
let Jr;
const DA = () => {
  const e = AA(), t = hc();
  let n = 1e3, o = 0;
  return Jr = ac(() => t().then((a) => {
    a instanceof io ? (n *= o + 1, o++, setTimeout(Jr, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof go)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), Jr;
}, uh = EA(DA), LA = window.Vuex.useStore, TA = () => {
  const e = LA(), t = uh(), { currentMTProvider: n } = H(e), { sourceSection: o, currentProposedTranslation: s } = K(), { selectNextTranslationUnit: a } = _o();
  return () => C(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, BA = window.Vuex.useStore, PA = () => {
  const e = BA(), t = uh();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, FA = window.Vuex.useStore, MA = window.Vue.computed, dh = () => {
  const e = FA(), t = he(), { currentTranslation: n } = Gt(), { currentMTProvider: o, previousRoute: s } = H(e), { currentTargetPage: a } = Ue(), {
    sourceLanguageURLParameter: r,
    targetLanguageURLParameter: l,
    pageURLParameter: u,
    sectionURLParameter: d
  } = M(), i = vt(), c = MA(() => {
    var _;
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
      const f = n.value.targetSectionTitle;
      f && (w.translation_target_section = f);
    } else
      a.value && (w.translation_target_title = (_ = a.value) == null ? void 0 : _.title);
    return o.value && (w.translation_provider = Y.getProviderForInstrumentation(o.value)), w;
  });
  return {
    logEditorOpenEvent: () => {
      var y;
      const w = t.currentRoute.value.meta.workflowStep, f = t.getRoutes().find(
        (A) => A.name === s.value
      ), S = ((y = f == null ? void 0 : f.meta) == null ? void 0 : y.workflowStep) || 0;
      return w > S ? i(ne({
        event_type: "editor_open"
      }, c.value)) : Promise.resolve();
    },
    logEditorCloseEvent: () => i(ne({
      event_type: "editor_close"
    }, c.value)),
    logEditorCloseWarnEvent: () => i(ne({
      event_type: "editor_close_warn"
    }, c.value)),
    logEditorSegmentAddEvent: () => i(ne({
      event_type: "editor_segment_add"
    }, c.value))
  };
};
const ee = window.Vue.unref, qe = window.Vue.createVNode, zt = window.Vue.withCtx, NA = window.Vue.resolveDirective, Wg = window.Vue.createElementVNode, UA = window.Vue.withDirectives, IA = window.Vue.toDisplayString, zA = window.Vue.createTextVNode, RA = window.Vue.renderList, OA = window.Vue.Fragment, un = window.Vue.openBlock, Xg = window.Vue.createElementBlock, eo = window.Vue.createBlock;
window.Vue.createCommentVNode;
const HA = window.Vue.normalizeClass, jA = window.Vue.normalizeStyle, qA = { class: "sx-sentence-selector__header-title mb-0" }, GA = { class: "sx-sentence-selector__section-contents px-4" }, to = window.Vue.computed, WA = window.Vue.nextTick, XA = window.Vue.onMounted, Ia = window.Vue.ref, Kg = window.Vue.watch, KA = window.Vuex.useStore, Yg = window.Codex.CdxButton, YA = window.Codex.CdxIcon, JA = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = Ia(!1), n = Ia(!1), o = Ia("100%"), s = KA(), { currentMTProvider: a } = H(s), {
      sourceLanguageURLParameter: r,
      targetLanguageURLParameter: l
    } = M(), { sourceSection: u, selectedContentTranslationUnit: d } = K(), i = to(
      () => s.state.application.translationDataLoadingCounter === 0
    ), c = to(
      () => {
        var v;
        return (v = u.value) == null ? void 0 : v.isSelectedTranslationUnitTranslated;
      }
    ), g = to(() => {
      var v;
      return (v = u.value) == null ? void 0 : v.subSections;
    }), m = to(
      () => {
        var v;
        return (v = u.value) == null ? void 0 : v.selectedTranslationUnitOriginalContent;
      }
    ), p = to(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: h,
      logEditorCloseEvent: w,
      logEditorCloseWarnEvent: _,
      logEditorSegmentAddEvent: f
    } = dh(), S = fA();
    vA()().then(h);
    const A = CA();
    XA(() => {
      Kg(
        i,
        () => C(this, null, function* () {
          i.value && (yield WA(), S(), A());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    }), Kg(d, A);
    const {
      selectNextTranslationUnit: T,
      selectPreviousTranslationUnit: U
    } = _o(), V = TA(), L = () => {
      f(), V();
    }, j = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, P = he(), N = () => {
      const { autoSavePending: v } = s.state.application;
      if (v) {
        ze.value = !0, _();
        return;
      }
      St();
    }, { fetchTranslationsByStatus: ae } = ni(), J = PA(), { clearURLParameters: _n } = M(), { currentTranslation: vn } = Gt(), St = () => C(this, null, function* () {
      ae("draft"), vn.value && (u.value.reset(), vn.value.restored = !1), w(), _n(), J(), yield P.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: rt,
      translateSelectedTranslationUnitForAllProviders: So
    } = pc(), Sn = () => {
      kt.value || (t.value = !0, So());
    }, { getCurrentTitleByLanguage: yt } = _t(), Ie = (v, b) => {
      P.push({
        name: "sx-editor",
        state: {
          content: v,
          originalContent: m.value,
          title: yt(
            l.value,
            r.value
          ),
          isInitialEdit: b || null
        }
      });
    }, Wt = () => P.push({ name: "sx-publisher" }), Ct = () => C(this, null, function* () {
      d.value ? yield rt(
        d.value.id,
        a.value
      ) : yield rt(0, a.value);
    }), kt = to(
      () => d.value instanceof Pe
    ), ze = Ia(!1);
    return (v, b) => {
      const E = NA("i18n");
      return un(), Xg("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: jA(p.value)
      }, [
        qe(ee(B), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: zt(() => [
            qe(ee(k), { shrink: "" }, {
              default: zt(() => [
                qe(ee(Yg), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": v.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: N
                }, {
                  default: zt(() => [
                    qe(ee(YA), { icon: ee(Rp) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            qe(ee(k), {
              grow: "",
              class: "px-1"
            }, {
              default: zt(() => [
                UA(Wg("h4", qA, null, 512), [
                  [E, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            qe(ee(k), {
              shrink: "",
              class: "px-3"
            }, {
              default: zt(() => [
                qe(ee(Yg), {
                  disabled: !(ee(u) && ee(u).isTranslated),
                  onClick: Wt
                }, {
                  default: zt(() => [
                    zA(IA(v.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        i.value ? (un(), eo(ee(B), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: zt(() => [
            qe(ee(k), {
              dir: ee(O.getDir)(ee(r)),
              lang: ee(r),
              class: "sx-sentence-selector__section"
            }, {
              default: zt(() => [
                qe(E5),
                Wg("div", GA, [
                  (un(!0), Xg(OA, null, RA(g.value, (D) => (un(), eo(vE, {
                    id: D.id,
                    key: `sub-section-${D.id}`,
                    "sub-section": D,
                    onBounceTranslation: j
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !kt.value && c.value ? (un(), eo(wA, {
              key: 0,
              onEditTranslation: b[0] || (b[0] = (D) => Ie(D, !1)),
              onSkipTranslation: ee(T),
              onSelectPreviousSegment: ee(U)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : kt.value ? (un(), eo(HE, {
              key: 2,
              onEditTranslation: Ie,
              onApplyTranslation: L,
              onSkipTranslation: ee(T),
              onSelectPreviousSegment: ee(U)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : (un(), eo(rE, {
              key: 1,
              class: HA({ "mb-0": !n.value }),
              onConfigureOptions: Sn,
              onEditTranslation: b[1] || (b[1] = (D) => Ie(D, !0)),
              onApplyTranslation: L,
              onSkipTranslation: ee(T),
              onSelectPreviousSegment: ee(U),
              onRetryTranslation: Ct
            }, null, 8, ["class", "onSkipTranslation", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (un(), eo(ee(B), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: zt(() => [
            qe(ee(Xe), { class: "mt-0" })
          ]),
          _: 1
        })),
        qe(w5, {
          active: t.value,
          "onUpdate:active": b[2] || (b[2] = (D) => t.value = D)
        }, null, 8, ["active"]),
        qe(qV, {
          modelValue: ze.value,
          "onUpdate:modelValue": b[3] || (b[3] = (D) => ze.value = D),
          onDiscardTranslation: St
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const QA = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: JA
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, ZA = window.Vue.resolveComponent, eD = window.Vue.createVNode, tD = window.Vue.normalizeClass, nD = window.Vue.openBlock, oD = window.Vue.createElementBlock;
function sD(e, t, n, o, s, a) {
  const r = ZA("sx-sentence-selector");
  return nD(), oD("main", {
    class: tD(["sx-sentence-selector-view", a.classes])
  }, [
    eD(r)
  ], 2);
}
const aD = /* @__PURE__ */ F(QA, [["render", sD]]), iD = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, rD = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const lD = window.Vue.resolveDirective, za = window.Vue.withDirectives, ot = window.Vue.openBlock, Rt = window.Vue.createElementBlock, Ra = window.Vue.createCommentVNode, Oa = window.Vue.Transition, An = window.Vue.withCtx, no = window.Vue.createVNode, ss = window.Vue.createElementVNode, Dn = window.Vue.unref, cD = window.Vue.renderList, uD = window.Vue.Fragment, dD = window.Vue.normalizeClass, Jg = window.Vue.createBlock, gD = window.Vue.toDisplayString, mD = window.Vue.createTextVNode, pD = { class: "sx-quick-tutorial" }, hD = { class: "sx-quick-tutorial__main-point py-9 px-6" }, wD = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, fD = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, _D = { class: "sx-quick-tutorial__illustration" }, vD = ["innerHTML"], SD = ["innerHTML"], yD = { class: "sx-quick-tutorial__step-indicator py-3" }, CD = ["onClick"], kD = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, xD = {
  key: "secondary-point-1",
  class: "ma-0"
}, bD = {
  key: "secondary-point-2",
  class: "ma-0"
}, $D = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, Qg = window.Vue.ref, Zg = window.Codex.CdxButton, VD = window.Codex.CdxIcon, ED = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = Qg(2), n = Qg(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (l) => l === n.value, a = he(), r = () => a.push({ name: "sx-sentence-selector" });
    return (l, u) => {
      const d = lD("i18n");
      return ot(), Rt("section", pD, [
        no(Dn(B), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: An(() => [
            ss("section", hD, [
              no(Oa, {
                name: "fade",
                mode: "out-in"
              }, {
                default: An(() => [
                  s(1) ? za((ot(), Rt("h2", wD, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? za((ot(), Rt("h2", fD, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : Ra("", !0)
                ]),
                _: 1
              })
            ]),
            ss("section", _D, [
              no(Oa, { name: "mw-ui-animation-slide-left" }, {
                default: An(() => [
                  s(1) ? (ot(), Rt("div", {
                    key: "illustration-1",
                    innerHTML: Dn(rD)
                  }, null, 8, vD)) : s(2) ? (ot(), Rt("div", {
                    key: "illustration-2",
                    innerHTML: Dn(iD)
                  }, null, 8, SD)) : Ra("", !0)
                ]),
                _: 1
              })
            ]),
            ss("div", yD, [
              (ot(!0), Rt(uD, null, cD(t.value, (i) => (ot(), Rt("span", {
                key: `dot-${i}`,
                class: dD(["dot mx-1", { "dot-active": s(i) }]),
                role: "button",
                onClick: (c) => n.value = i
              }, null, 10, CD))), 128))
            ]),
            ss("section", kD, [
              no(Oa, {
                name: "fade",
                mode: "out-in"
              }, {
                default: An(() => [
                  s(1) ? za((ot(), Rt("h3", xD, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? za((ot(), Rt("h3", bD, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : Ra("", !0)
                ]),
                _: 1
              })
            ]),
            ss("div", $D, [
              no(Oa, {
                name: "fade",
                mode: "out-in"
              }, {
                default: An(() => [
                  s(1) ? (ot(), Jg(Dn(Zg), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": l.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: An(() => [
                      no(Dn(VD), { icon: Dn(Fs) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (ot(), Jg(Dn(Zg), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: r
                  }, {
                    default: An(() => [
                      mD(gD(l.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  })) : Ra("", !0)
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
const AD = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: ED
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, DD = window.Vue.resolveComponent, LD = window.Vue.createVNode, TD = window.Vue.normalizeClass, BD = window.Vue.openBlock, PD = window.Vue.createElementBlock;
function FD(e, t, n, o, s, a) {
  const r = DD("sx-quick-tutorial");
  return BD(), PD("main", {
    class: TD(["sx-quick-tutorial-view", a.classes])
  }, [
    LD(r)
  ], 2);
}
const MD = /* @__PURE__ */ F(AD, [["render", FD]]);
const em = window.Vue.ref, ND = window.Vue.onMounted;
function UD(e, t) {
  const n = e.getElementsByTagName("a");
  for (const o of n)
    o.href = G.getPageUrl(t, o.title), o.target = "_blank";
}
const ID = {
  name: "SxEditorOriginalContent",
  components: { MwExpandableContent: X0 },
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
    const t = em(null), n = em(0), o = () => parseFloat(
      document.defaultView.getComputedStyle(t.value, null).getPropertyValue("line-height")
    );
    return ND(() => {
      n.value = 2 * o(), UD(t.value, e.language);
    }), {
      originalContentRef: t,
      twoLinesHeight: n
    };
  }
}, zD = window.Vue.resolveDirective, tm = window.Vue.createElementVNode, RD = window.Vue.withDirectives, OD = window.Vue.resolveComponent, HD = window.Vue.withCtx, jD = window.Vue.createVNode, qD = window.Vue.openBlock, GD = window.Vue.createElementBlock, WD = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, XD = { class: "sx-editor__original-content-panel__header mb-2" }, KD = ["lang", "dir", "innerHTML"];
function YD(e, t, n, o, s, a) {
  const r = OD("mw-expandable-content"), l = zD("i18n");
  return qD(), GD("section", WD, [
    RD(tm("h5", XD, null, 512), [
      [l, void 0, "cx-sx-editor-original-panel-label"]
    ]),
    jD(r, {
      "min-height": o.twoLinesHeight,
      scroll: ""
    }, {
      default: HD(() => [
        tm("div", {
          ref: "originalContentRef",
          class: "sx-editor__original-content-panel__body",
          lang: n.language,
          dir: n.dir,
          innerHTML: n.originalContent
        }, null, 8, KD)
      ]),
      _: 1
    }, 8, ["min-height"])
  ]);
}
const JD = /* @__PURE__ */ F(ID, [["render", YD]]), QD = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const Qr = window.Vue.computed, ZD = window.Vuex.useStore, eL = {
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
    const { targetLanguage: t } = H(ZD()), n = Qr(
      () => ht.calculateScore(
        e.editedTranslation,
        e.proposedTranslation,
        t.value
      )
    ), o = Qr(() => {
      const a = ht.getScoreStatus(n.value);
      return a === "failure" ? n.value === 0 ? "failure" : "warning" : a;
    }), s = Qr(
      () => `sx-editor__feedback-overlay-content__stats--${o.value}`
    );
    return {
      happyRobotSVG: QD,
      modificationPercentageClass: s,
      mtScore: n
    };
  }
}, as = window.Vue.createElementVNode, nm = window.Vue.resolveDirective, Zr = window.Vue.withDirectives, tL = window.Vue.normalizeClass, nL = window.Vue.openBlock, oL = window.Vue.createElementBlock, sL = window.Vue.createCommentVNode, aL = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, iL = { class: "sx-editor__feedback-overlay-content px-4" }, rL = ["innerHTML"], lL = { class: "sx-editor__feedback-overlay-content__title" }, cL = { class: "sx-editor__feedback-overlay-content__clarification mb-1" };
function uL(e, t, n, o, s, a) {
  const r = nm("i18n"), l = nm("i18n-html");
  return n.showFeedback ? (nL(), oL("div", aL, [
    as("div", iL, [
      as("div", {
        class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
        innerHTML: o.happyRobotSVG
      }, null, 8, rL),
      Zr(as("h2", lL, null, 512), [
        [r, void 0, "sx-editor-feedback-overlay-title"]
      ]),
      Zr(as("p", cL, null, 512), [
        [r, void 0, "sx-editor-feedback-overlay-clarification"]
      ]),
      Zr(as("p", {
        class: tL(["sx-editor__feedback-overlay-content__stats", o.modificationPercentageClass])
      }, null, 2), [
        [l, [o.mtScore], "sx-editor-feedback-overlay-stats"]
      ])
    ])
  ])) : sL("", !0);
}
const dL = /* @__PURE__ */ F(eL, [["render", uL]]), gL = window.Vuex.useStore, mL = () => {
  const e = gL(), t = hc(), { selectNextTranslationUnit: n } = _o(), { sourceSection: o, selectedContentTranslationUnit: s } = K(), { getCurrentTitleByLanguage: a } = _t();
  return (r) => C(void 0, null, function* () {
    const l = document.createElement("div");
    l.innerHTML = r, l.querySelectorAll(".sx-edit-dummy-node").forEach((c) => c.remove()), r = l.innerHTML;
    const { sourceLanguage: u, targetLanguage: d, currentMTProvider: i } = e.state.application;
    s.value instanceof Pe && (r = (yield ap(
      r,
      a(d, u),
      d
    )) || r), o.value.setTranslationForSelectedTranslationUnit(
      r,
      i
    ), t(), n();
  });
};
const Te = window.Vue.unref, el = window.Vue.openBlock, tl = window.Vue.createBlock, om = window.Vue.createCommentVNode, sm = window.Vue.createVNode, pL = window.Vue.createElementVNode, hL = window.Vue.withCtx, wL = { class: "sx-editor__editing-surface-container grow" }, nl = window.Vue.ref, fL = window.Vue.computed, _L = window.Vuex.useStore, vL = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = nl(!1), o = he(), s = _L(), a = () => n.value = !0, r = () => o.replace({ name: t.fromRoute }), { isFinalEdit: l, isInitialEdit: u, content: d, originalContent: i, title: c } = history.state, g = nl(null), m = nl(!1), { logEditorSegmentAddEvent: p } = dh(), { targetLanguage: h, sourceLanguage: w } = H(s), { sourceSection: _ } = K(), f = fL(
      () => ht.calculateScore(
        g.value,
        d,
        h.value
      )
    ), S = mL(), y = (A) => C(this, null, function* () {
      g.value = A, m.value = !0;
      const T = new Promise((V) => setTimeout(V, 2e3));
      let U = Promise.resolve();
      l ? _.value.editedTranslation = A : (f.value === 0 && u && p(), U = S(A)), yield Promise.all([T, U]), m.value = !1, r();
    });
    return (A, T) => (el(), tl(Te(B), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: hL(() => [
        Te(i) ? (el(), tl(JD, {
          key: 0,
          language: Te(w),
          dir: Te(O.getDir)(Te(w)),
          "original-content": Te(i)
        }, null, 8, ["language", "dir", "original-content"])) : om("", !0),
        n.value ? om("", !0) : (el(), tl(Te(Xe), { key: 1 })),
        pL("div", wL, [
          sm(dL, {
            "edited-translation": g.value,
            "show-feedback": m.value,
            "proposed-translation": Te(d)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          sm(y2, {
            content: Te(d),
            language: Te(h),
            dir: Te(O.getDir)(Te(h)),
            title: Te(c),
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
const SL = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: vL
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
}, yL = window.Vue.resolveComponent, CL = window.Vue.createVNode, kL = window.Vue.normalizeClass, xL = window.Vue.openBlock, bL = window.Vue.createElementBlock;
function $L(e, t, n, o, s, a) {
  const r = yL("sx-editor");
  return xL(), bL("main", {
    class: kL(["sx-editor-view", a.classes])
  }, [
    CL(r, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const VL = /* @__PURE__ */ F(SL, [["render", $L]]);
const gt = window.Vue.unref, Ln = window.Vue.createVNode, is = window.Vue.withCtx, EL = window.Vue.resolveDirective, AL = window.Vue.withDirectives, DL = window.Vue.openBlock, LL = window.Vue.createBlock, am = window.Codex.CdxButton, im = window.Codex.CdxIcon, TL = {
  __name: "SXPublisherHeader",
  props: {
    isPublishingDisabled: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["publish-translation"],
  setup(e) {
    const t = he(), n = () => t.push({ name: "sx-sentence-selector" });
    return (o, s) => {
      const a = EL("i18n");
      return DL(), LL(gt(B), { class: "ma-0 sx-publisher__header" }, {
        default: is(() => [
          Ln(gt(k), {
            shrink: "",
            class: "me-2"
          }, {
            default: is(() => [
              Ln(gt(am), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: is(() => [
                  Ln(gt(im), { icon: gt(fo) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          AL(Ln(gt(k), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          Ln(gt(k), { shrink: "" }, {
            default: is(() => [
              Ln(gt(am), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (r) => o.$emit("publish-translation"))
              }, {
                default: is(() => [
                  Ln(gt(im), { icon: gt(ck) }, null, 8, ["icon"])
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
}, BL = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, PL = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, rm = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const FL = {
  name: "SxPublisherAnimationDialog",
  components: { MwDialog: Ye, MwRow: B, MwCol: k },
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
        svg: BL,
        title: e.$i18n("cx-sx-publisher-animation-publishing-indicator-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: PL,
        title: e.$i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: rm,
        title: e.$i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: rm,
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
}, ol = window.Vue.createElementVNode, lm = window.Vue.toDisplayString, sl = window.Vue.resolveComponent, al = window.Vue.withCtx, cm = window.Vue.createVNode, ML = window.Vue.openBlock, NL = window.Vue.createBlock, UL = window.Vue.createCommentVNode, IL = ["innerHTML"], zL = ["textContent"], RL = ["textContent"];
function OL(e, t, n, o, s, a) {
  const r = sl("mw-col"), l = sl("mw-row"), u = sl("mw-dialog");
  return n.active ? (ML(), NL(u, {
    key: 0,
    "overlay-opacity": 0.85,
    header: !1,
    class: "sx-publisher__publish-animation"
  }, {
    default: al(() => [
      cm(l, { class: "ma-4" }, {
        default: al(() => [
          cm(r, null, {
            default: al(() => [
              ol("div", {
                class: "sx-publisher__publish-animation-icon mb-4",
                innerHTML: a.animationSvg
              }, null, 8, IL),
              ol("h2", {
                textContent: lm(a.animationTitle)
              }, null, 8, zL),
              ol("p", {
                class: "ma-0",
                textContent: lm(a.animationSubtitle)
              }, null, 8, RL)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  })) : UL("", !0);
}
const HL = /* @__PURE__ */ F(FL, [["render", OL]]);
const Be = window.Vue.unref, st = window.Vue.createVNode, Ot = window.Vue.withCtx, jL = window.Vue.resolveDirective, qL = window.Vue.withDirectives, um = window.Vue.toDisplayString, GL = window.Vue.createTextVNode, il = window.Vue.openBlock, dm = window.Vue.createElementBlock, WL = window.Vue.createCommentVNode, gh = window.Vue.createElementVNode, XL = window.Vue.createBlock, KL = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, YL = ["src"], JL = ["textContent"], QL = /* @__PURE__ */ gh("p", { class: "mt-0" }, null, -1), ZL = window.Vue.computed, eT = window.Vue.inject, tT = window.Vue.ref, gm = window.Codex.CdxButton, nT = window.Codex.CdxIcon, oT = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: Jm,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = tT(""), s = () => n("close"), a = () => n("publish", o.value), r = eT("breakpoints"), l = ZL(() => r.value.mobile);
    return (u, d) => {
      const i = jL("i18n");
      return e.active && e.captchaDetails ? (il(), XL(Be(Ye), {
        key: 0,
        "overlay-opacity": 0.65,
        fullscreen: l.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: Ot(() => [
          st(Be(B), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: Ot(() => [
              st(Be(k), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: Ot(() => [
                  st(Be(gm), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": u.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: s
                  }, {
                    default: Ot(() => [
                      st(Be(nT), { icon: Be(fo) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              qL(st(Be(k), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [i, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              st(Be(k), {
                shrink: "",
                class: "justify-center"
              }, {
                default: Ot(() => [
                  st(Be(gm), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: Ot(() => [
                      GL(um(u.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          st(Be(Xa))
        ]),
        default: Ot(() => [
          gh("div", KL, [
            e.captchaDetails.type === "image" ? (il(), dm("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, YL)) : (il(), dm("p", {
              key: 1,
              textContent: um(e.captchaDetails.question)
            }, null, 8, JL)),
            QL,
            st(Be(B), { class: "ma-0" }, {
              default: Ot(() => [
                st(Be(k), null, {
                  default: Ot(() => [
                    st(Be(Nl), {
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
      }, 8, ["fullscreen"])) : WL("", !0);
    };
  }
};
const Tn = window.Vue.unref, rs = window.Vue.createVNode, Ha = window.Vue.withCtx, Bn = window.Vue.createElementVNode, sT = window.Vue.resolveDirective, aT = window.Vue.withDirectives, iT = window.Vue.renderList, mm = window.Vue.Fragment, rl = window.Vue.openBlock, pm = window.Vue.createElementBlock, rT = window.Vue.toDisplayString, lT = window.Vue.normalizeClass, cT = window.Vue.createBlock, uT = { class: "mw-ui-dialog__header" }, dT = { class: "row ma-0 px-4 py-3" }, gT = { class: "col shrink justify-center" }, mT = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, pT = { class: "mb-0" }, hT = { class: "pa-4" }, wT = ["textContent"], fT = window.Vuex.useStore, ls = window.Vue.computed, _T = window.Codex.CdxButton, vT = window.Codex.CdxIcon, ST = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = fT(), s = ls(() => o.state.application.publishTarget), a = ls(() => o.state.translator.isAnon), r = me(), { sourceSection: l } = K(), u = ls(
      () => l.value.isLeadSection ? r.i18n("cx-sx-publisher-lead-section-option-label") : r.i18n("cx-sx-publisher-new-section-option-label")
    ), d = ls(
      () => l.value.isLeadSection ? r.i18n("cx-sx-publisher-lead-section-option-details") : r.i18n("cx-sx-publisher-new-section-option-details")
    ), i = ls(() => [
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
    ]), c = (p) => p === i.value.length - 1 ? "mb-1" : "mb-4", g = () => n("update:active", !1), m = (p) => {
      const h = p.target.value;
      o.commit("application/setPublishTarget", h), g();
    };
    return (p, h) => {
      const w = sT("i18n");
      return rl(), cT(Tn(Ye), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: p.$i18n("cx-sx-publisher-preview-options-title"),
        "overlay-opacity": 0.7,
        "overlay-color": p.$mwui.colors.gray700,
        onInput: h[0] || (h[0] = (_) => p.$emit("update:active", _)),
        onClose: g
      }, {
        header: Ha(() => [
          Bn("div", uT, [
            Bn("div", dT, [
              Bn("div", gT, [
                rs(Tn(_T), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": p.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: g
                }, {
                  default: Ha(() => [
                    rs(Tn(vT), { icon: Tn(Rp) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              Bn("div", mT, [
                aT(Bn("h4", pT, null, 512), [
                  [w, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            rs(Tn(Xa))
          ])
        ]),
        default: Ha(() => [
          Bn("div", hT, [
            rs(Tn(x0), {
              value: s.value,
              name: "publish-options",
              onInput: m
            }, {
              default: Ha(() => [
                (rl(!0), pm(mm, null, iT(i.value, (_, f) => (rl(), pm(mm, {
                  key: _.label
                }, [
                  rs(Tn(Sl), {
                    class: "pa-0 my-1",
                    label: _.label,
                    "input-value": _.value,
                    disabled: _.disabled
                  }, null, 8, ["label", "input-value", "disabled"]),
                  Bn("p", {
                    class: lT(["complementary ms-7 mt-0", c(f)]),
                    textContent: rT(_.details)
                  }, null, 10, wT)
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
const at = window.Vue.unref, Pn = window.Vue.createVNode, yT = window.Vue.resolveDirective, hm = window.Vue.withDirectives, ja = window.Vue.openBlock, wm = window.Vue.createElementBlock, CT = window.Vue.createCommentVNode, fm = window.Vue.toDisplayString, ll = window.Vue.createElementVNode, oo = window.Vue.withCtx, _m = window.Vue.createBlock, kT = window.Vue.Fragment, xT = window.Vue.normalizeClass, bT = { class: "sx-publisher__review-info__content" }, $T = {
  key: 0,
  class: "complementary ma-0"
}, VT = ["textContent"], ET = ["textContent"], dn = window.Vue.computed, vm = window.Vue.ref, AT = window.Vue.watch, Sm = window.Codex.CdxButton, cl = window.Codex.CdxIcon, DT = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = vm(0), o = vm(null);
    AT(o, () => {
      var w;
      const h = (w = o.value) == null ? void 0 : w.$el;
      if (h instanceof HTMLElement) {
        const _ = h.querySelector("a");
        _ && _.setAttribute("target", "_blank");
      }
    });
    const s = dn(
      () => {
        var h;
        return (h = t.publishFeedbackMessages) == null ? void 0 : h[n.value];
      }
    ), a = dn(() => {
      var h;
      return ((h = s.value) == null ? void 0 : h.status) || "default";
    }), r = dn(() => {
      switch (a.value) {
        case "warning":
          return zp;
        case "error":
          return rk;
        default:
          return dk;
      }
    }), l = dn(() => a.value === "default"), u = dn(
      () => l.value ? "notice" : a.value
    ), d = dn(
      () => `sx-publisher__review-info--${u.value}`
    ), i = me(), c = dn(() => {
      var h;
      return (h = s.value) == null ? void 0 : h.text;
    }), g = dn(
      () => {
        var h;
        return ((h = s.value) == null ? void 0 : h.title) || i.i18n("cx-sx-publisher-review-info-error");
      }
    ), m = () => {
      const h = t.publishFeedbackMessages.length;
      n.value = (n.value - 1 + h) % h;
    }, p = () => {
      n.value = (n.value + 1) % t.publishFeedbackMessages.length;
    };
    return (h, w) => {
      const _ = yT("i18n-html");
      return ja(), _m(at(Kf), {
        type: u.value,
        class: xT(["sx-publisher__review-info ma-0 pa-4", d.value]),
        inline: l.value
      }, {
        icon: oo(() => [
          Pn(at(cl), {
            icon: r.value,
            class: "shrink mw-ui-message__icon items-start me-1"
          }, null, 8, ["icon"])
        ]),
        default: oo(() => [
          ll("div", bT, [
            a.value === "default" ? hm((ja(), wm("p", $T, null, 512)), [
              [_, void 0, "cx-sx-publisher-review-info"]
            ]) : (ja(), wm(kT, { key: 1 }, [
              ll("h5", {
                textContent: fm(g.value)
              }, null, 8, VT),
              ll("p", {
                textContent: fm(c.value)
              }, null, 8, ET),
              Pn(at(B), {
                justify: "between",
                class: "ma-0"
              }, {
                default: oo(() => [
                  hm(Pn(at(k), {
                    ref_key: "learnMoreContainer",
                    ref: o,
                    class: "sx-publisher__review-info__learn-more-anchor"
                  }, null, 512), [
                    [_, void 0, "cx-sx-publisher-review-info-learn-more"]
                  ]),
                  e.publishFeedbackMessages.length > 1 ? (ja(), _m(at(k), {
                    key: 0,
                    class: "sx-publisher__review-info__navigation-buttons justify-end",
                    align: "center"
                  }, {
                    default: oo(() => [
                      Pn(at(Sm), {
                        weight: "quiet",
                        class: "pa-0 me-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                        onClick: m
                      }, {
                        default: oo(() => [
                          Pn(at(cl), { icon: at(oc) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"]),
                      Pn(at(Sm), {
                        weight: "quiet",
                        class: "pa-0 ms-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                        onClick: p
                      }, {
                        default: oo(() => [
                          Pn(at(cl), { icon: at(Fs) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ]),
                    _: 1
                  })) : CT("", !0)
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
}, LT = (e) => {
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
}, TT = window.Vuex.useStore, BT = window.Vue.computed, PT = () => {
  const e = TT(), { currentTranslation: t } = Gt(), { currentMTProvider: n, previousRoute: o } = H(e), { currentTargetPage: s } = Ue(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    sectionURLParameter: u
  } = M(), { sourceSection: d } = K(), i = vt(), c = BT(() => {
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
      const _ = t.value.targetSectionTitle;
      _ && (h.translation_target_section = _);
    } else
      s.value && (h.translation_target_title = (w = s.value) == null ? void 0 : w.title);
    return n.value && (h.translation_provider = Y.getProviderForInstrumentation(n.value)), h.human_modification_rate = ht.getMTScoreForPageSection(
      d.value,
      r.value
    ) / 100, h.human_modification_threshold = ht.getMtModificationThreshold(), h;
  });
  return {
    logPublishAttemptEvent: () => i(ne({
      event_type: "publish_attempt"
    }, c.value)),
    logPublishSuccessEvent: (h, w) => i(ne({
      event_type: "publish_success",
      published_page_id: h,
      published_revision_id: w
    }, c.value)),
    logPublishFailureEvent: () => i(ne({
      event_type: "publish_failure"
    }, c.value))
  };
}, ym = window.Vue.ref, FT = window.Vuex.useStore, MT = () => {
  const e = FT(), { pageURLParameter: t } = M(), { sourceSection: n, targetPageTitleForPublishing: o } = K(), s = ch(), a = ym(!1), r = ym("pending"), l = () => a.value = !1, u = hc(), {
    logPublishAttemptEvent: d,
    logPublishSuccessEvent: i,
    logPublishFailureEvent: c
  } = PT(), g = (p, h) => C(void 0, null, function* () {
    d();
    const w = yield u();
    if (w instanceof io)
      return c(), { publishFeedbackMessage: w, targetUrl: null };
    const _ = w, {
      /** @type {PageSection} */
      sourceLanguage: f,
      targetLanguage: S
    } = e.state.application, y = o.value, A = e.getters["application/isSandboxTarget"], T = {
      html: LT(n.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: y,
      sourceSectionTitle: n.value.sourceSectionTitleForPublishing,
      targetSectionTitle: n.value.targetSectionTitleForPublishing,
      sourceLanguage: f,
      targetLanguage: S,
      revision: s.value,
      isSandbox: A,
      sectionTranslationId: _
    };
    p && (T.captchaId = p, T.captchaWord = h);
    const U = yield Ke.publishTranslation(
      T
    );
    return U.publishFeedbackMessage === null ? i(U.pageId, U.revisionId) : c(), U;
  });
  return {
    closePublishDialog: l,
    doPublish: (p = null, h = null) => C(void 0, null, function* () {
      r.value = "pending", a.value = !0;
      let w;
      try {
        w = yield g(
          h == null ? void 0 : h.id,
          p
        );
      } catch (_) {
        if (_ instanceof go)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw _;
      }
      return w;
    }),
    isPublishDialogActive: a,
    publishStatus: r
  };
}, NT = window.Vue.computed, UT = () => {
  const e = he(), { sourceSection: t } = K(), { getCurrentTitleByLanguage: n } = _t(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = M(), a = NT(
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
}, IT = window.Vuex.useStore, zT = () => {
  const e = IT(), { targetLanguage: t } = H(e), { sourceSection: n } = K();
  return () => {
    const o = ht.getMTScoreForPageSection(
      n.value,
      t.value
    ), s = ht.getScoreStatus(o);
    if (s === "success")
      return null;
    const a = 100 - o, r = s === "failure" ? "error" : "warning";
    let l, u;
    return r === "warning" ? (l = mw.message("cx-sx-publisher-mt-abuse-message-title", a).plain(), u = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (l = mw.message("cx-sx-publisher-mt-abuse-error-title", a).plain(), u = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new io({
      title: l,
      text: u,
      status: r,
      type: "mt"
    });
  };
}, RT = window.Vue.ref, OT = window.Vue.computed, HT = () => {
  const e = zT(), t = RT([]), n = OT(
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
}, jT = window.Vuex.useStore, qT = () => {
  const e = jT(), { currentSourcePage: t } = Ue(), { sourceLanguage: n, targetLanguage: o } = H(e), { sourceSection: s, targetPageTitleForPublishing: a } = K();
  return (r) => C(void 0, null, function* () {
    const l = a.value, u = e.getters["application/isSandboxTarget"], d = t.value.title, i = new mw.Title(d), c = mw.config.get("wgNamespaceIds");
    if (s.value.isLeadSection && !u && i.getNamespaceId() !== c.user)
      try {
        yield Qa.addWikibaseLink(
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
}, Cm = window.Vue.ref, GT = () => {
  const e = Cm(!1), t = Cm(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const ue = window.Vue.unref, Ve = window.Vue.createVNode, WT = window.Vue.resolveDirective, cs = window.Vue.createElementVNode, XT = window.Vue.withDirectives, so = window.Vue.withCtx, KT = window.Vue.openBlock, YT = window.Vue.createElementBlock, JT = { class: "sx-publisher" }, QT = { class: "sx-publisher__publish-panel pa-4" }, ZT = { class: "mb-2" }, e6 = ["innerHTML"], t6 = { class: "sx-publisher__section-preview pa-5" }, n6 = ["innerHTML"], km = window.Vue.computed, o6 = window.Vue.onMounted, s6 = window.Vue.ref, a6 = window.Vue.watch, i6 = window.Vuex.useStore, xm = window.Codex.CdxButton, bm = window.Codex.CdxIcon, r6 = {
  __name: "SXPublisher",
  setup(e) {
    const t = i6(), { sourceSection: n } = K(), o = km(() => {
      var V;
      return (V = n.value) == null ? void 0 : V.title;
    }), s = me(), a = km(() => t.getters["application/isSandboxTarget"] ? s.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : n.value.isLeadSection ? s.i18n("cx-sx-publisher-publish-panel-lead-section-result") : s.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: r,
      captchaDialogOn: l,
      handleCaptchaError: u,
      onCaptchaDialogClose: d
    } = GT(), {
      publishFeedbackMessages: i,
      isPublishingDisabled: c,
      addPublishFeedbackMessage: g,
      clearPublishFeedbackMessages: m,
      initializePublishFeedbackMessages: p
    } = HT(), h = qT(), { doPublish: w, isPublishDialogActive: _, publishStatus: f, closePublishDialog: S } = MT(), y = (V = null) => C(this, null, function* () {
      const L = yield w(V, r);
      if (!L)
        return;
      const { publishFeedbackMessage: j, targetUrl: P } = L;
      if (u(j)) {
        S();
        return;
      } else
        j && g(j);
      f.value = c.value ? "failure" : "success", setTimeout(() => {
        if (c.value) {
          S();
          return;
        }
        h(P);
      }, 1e3);
    });
    o6(() => p());
    const A = UT(), T = s6(!1), U = () => T.value = !0;
    return a6(T, (V) => {
      V || m();
    }), (V, L) => {
      const j = WT("i18n");
      return KT(), YT("section", JT, [
        Ve(TL, {
          "is-publishing-disabled": ue(c),
          onPublishTranslation: y
        }, null, 8, ["is-publishing-disabled"]),
        cs("div", QT, [
          XT(cs("h5", ZT, null, 512), [
            [j, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          cs("h6", {
            class: "mb-2",
            innerHTML: a.value
          }, null, 8, e6),
          Ve(ue(B), {
            justify: "end",
            class: "ma-0"
          }, {
            default: so(() => [
              Ve(ue(k), { shrink: "" }, {
                default: so(() => [
                  Ve(ue(xm), {
                    weight: "quiet",
                    "aria-label": V.$i18n("cx-sx-publisher-configure-button-aria-label"),
                    onClick: U
                  }, {
                    default: so(() => [
                      Ve(ue(bm), { icon: ue(fk) }, null, 8, ["icon"])
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
        Ve(DT, { "publish-feedback-messages": ue(i) }, null, 8, ["publish-feedback-messages"]),
        cs("section", t6, [
          Ve(ue(B), { class: "pb-5 ma-0" }, {
            default: so(() => [
              Ve(ue(k), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                innerHTML: o.value
              }, null, 8, ["innerHTML"]),
              Ve(ue(k), { shrink: "" }, {
                default: so(() => [
                  Ve(ue(xm), {
                    weight: "quiet",
                    "aria-label": V.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: ue(A)
                  }, {
                    default: so(() => [
                      Ve(ue(bm), { icon: ue(ec) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label", "onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          cs("div", {
            innerHTML: ue(n).translationHtml
          }, null, 8, n6)
        ]),
        Ve(ST, {
          active: T.value,
          "onUpdate:active": L[0] || (L[0] = (P) => T.value = P)
        }, null, 8, ["active"]),
        Ve(oT, {
          active: ue(l),
          "captcha-details": ue(r),
          onClose: ue(d),
          onPublish: L[1] || (L[1] = (P) => y(P))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        Ve(HL, {
          active: ue(_),
          status: ue(f)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const l6 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: r6
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, c6 = window.Vue.resolveComponent, u6 = window.Vue.createVNode, d6 = window.Vue.normalizeClass, g6 = window.Vue.openBlock, m6 = window.Vue.createElementBlock;
function p6(e, t, n, o, s, a) {
  const r = c6("sx-publisher");
  return g6(), m6("main", {
    class: d6(["sx-publisher-view", a.classes])
  }, [
    u6(r)
  ], 2);
}
const h6 = /* @__PURE__ */ F(l6, [["render", p6]]);
const w6 = {
  name: "SxSearchArticleSuggestion",
  components: { MwThumbnail: Ul, MwIcon: Ee, MwRow: B, MwCol: k },
  props: {
    suggestion: {
      type: ho,
      required: !0
    }
  },
  setup(e) {
    return { mwIconStar: lf, mwIconLanguage: df, mwIconArticle: Ml, getDir: O.getDir };
  }
}, qa = window.Vue.resolveComponent, gn = window.Vue.createVNode, Fn = window.Vue.withCtx, ul = window.Vue.toDisplayString, dl = window.Vue.createElementVNode, f6 = window.Vue.openBlock, _6 = window.Vue.createBlock, v6 = ["textContent"], S6 = ["textContent"], y6 = ["textContent"];
function C6(e, t, n, o, s, a) {
  const r = qa("mw-thumbnail"), l = qa("mw-col"), u = qa("mw-icon"), d = qa("mw-row");
  return f6(), _6(d, {
    class: "cx-search-suggestion pt-3 ma-0",
    align: "normal",
    lang: n.suggestion.language,
    dir: o.getDir(n.suggestion.language)
  }, {
    default: Fn(() => [
      gn(l, { shrink: "" }, {
        default: Fn(() => [
          gn(r, {
            class: "cx-search-suggestion__thumbnail",
            thumbnail: n.suggestion.thumbnail,
            "thumbnail-size": 56,
            "placeholder-icon-size": 30
          }, null, 8, ["thumbnail"])
        ]),
        _: 1
      }),
      gn(l, { class: "ms-4" }, {
        default: Fn(() => [
          gn(d, {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: Fn(() => [
              gn(l, {
                shrink: "",
                class: "mb-1"
              }, {
                default: Fn(() => [
                  dl("h5", {
                    class: "my-0 cx-search-suggestion__source-title",
                    textContent: ul(n.suggestion.title)
                  }, null, 8, v6)
                ]),
                _: 1
              }),
              gn(l, {
                shrink: "",
                class: "mb-1"
              }, {
                default: Fn(() => [
                  dl("p", {
                    class: "ma-0 cx-search-suggestion__source-description complementary",
                    textContent: ul(n.suggestion.description)
                  }, null, 8, S6)
                ]),
                _: 1
              }),
              gn(l, {
                class: "cx-search-suggestion__languages",
                shrink: "",
                align: "center"
              }, {
                default: Fn(() => [
                  gn(u, {
                    icon: o.mwIconLanguage,
                    size: 16,
                    class: "me-2"
                  }, null, 8, ["icon"]),
                  dl("small", {
                    textContent: ul(n.suggestion.langLinksCount)
                  }, null, 8, y6)
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
const mh = /* @__PURE__ */ F(w6, [["render", C6]]), k6 = window.Vue.computed, $m = window.Vue.ref, x6 = window.Vue.watch, b6 = (e, t) => {
  const o = $m([]), s = $m(!1), a = k6(
    () => o.value.slice(0, 4)
  ), r = ac(() => C(void 0, null, function* () {
    try {
      o.value = yield wo.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      s.value = !1;
    }
  }), 500);
  return x6(t, () => {
    s.value = !0, o.value = [], r();
  }), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
};
const $6 = window.Vue.computed, V6 = window.Vuex.useStore, E6 = {
  name: "SearchResultsCard",
  components: { SxSearchArticleSuggestion: mh, MwCard: it, MwSpinner: Xe },
  props: {
    searchInput: {
      type: String,
      default: null
    }
  },
  emits: ["suggestion-clicked"],
  setup(e) {
    const { sourceLanguage: t, sourceLanguageAutonym: n } = H(
      V6()
    ), o = $6(() => e.searchInput), { searchResultsLoading: s, searchResultsSlice: a } = b6(
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
}, gl = window.Vue.resolveComponent, us = window.Vue.openBlock, ml = window.Vue.createBlock, A6 = window.Vue.createCommentVNode, D6 = window.Vue.resolveDirective, L6 = window.Vue.withDirectives, Vm = window.Vue.createElementBlock, T6 = window.Vue.renderList, B6 = window.Vue.Fragment, P6 = window.Vue.withCtx, F6 = {
  key: 1,
  class: "sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
};
function M6(e, t, n, o, s, a) {
  const r = gl("mw-spinner"), l = gl("sx-search-article-suggestion"), u = gl("mw-card"), d = D6("i18n");
  return us(), ml(u, { class: "sx-article-search__results mb-0 pa-4" }, {
    default: P6(() => [
      o.searchResultsLoading ? (us(), ml(r, { key: 0 })) : o.searchResultsSlice.length === 0 ? L6((us(), Vm("p", F6, null, 512)), [
        [d, [
          n.searchInput,
          o.sourceLanguageAutonym
        ], "cx-sx-article-search-no-search-results-message"]
      ]) : A6("", !0),
      (us(!0), Vm(B6, null, T6(o.searchResultsSlice, (i) => (us(), ml(l, {
        key: i.pageid,
        suggestion: i,
        onClick: (c) => e.$emit("suggestion-clicked", i)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ]),
    _: 1
  });
}
const N6 = /* @__PURE__ */ F(E6, [["render", M6]]);
const U6 = window.Vuex.mapState, I6 = {
  name: "ArticleSuggestionsCard",
  components: { SxSearchArticleSuggestion: mh, MwCard: it },
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
  computed: ne({}, U6({
    sourceLanguage: (e) => e.application.sourceLanguage
  }))
}, z6 = window.Vue.toDisplayString, R6 = window.Vue.createElementVNode, O6 = window.Vue.renderList, H6 = window.Vue.Fragment, pl = window.Vue.openBlock, j6 = window.Vue.createElementBlock, Em = window.Vue.resolveComponent, Am = window.Vue.createBlock, Dm = window.Vue.withCtx, q6 = ["textContent"];
function G6(e, t, n, o, s, a) {
  const r = Em("sx-search-article-suggestion"), l = Em("mw-card");
  return pl(), Am(l, { class: "sx-article-search__suggestions mb-0 pa-4" }, {
    header: Dm(() => [
      R6("h5", {
        class: "ma-0 pb-1 sx-article-search__suggestions-header",
        textContent: z6(n.cardTitle)
      }, null, 8, q6)
    ]),
    default: Dm(() => [
      (pl(!0), j6(H6, null, O6(n.suggestions, (u) => (pl(), Am(r, {
        key: u.pageid,
        suggestion: u,
        onClick: (d) => e.$emit("suggestion-clicked", u)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ]),
    _: 1
  });
}
const Lm = /* @__PURE__ */ F(I6, [["render", G6]]), W6 = window.Vue.computed, X6 = (e, t) => W6(() => {
  const o = {
    value: "other",
    props: {
      icon: hf,
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
      label: O.getAutonym(r),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), o];
}), K6 = window.Vue.computed, Y6 = (e, t, n) => K6(() => {
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
    (r) => r !== e.value && r !== t.value && O.getAutonym(r) !== r
  );
});
const J6 = window.Vue.resolveDirective, Q6 = window.Vue.createElementVNode, hl = window.Vue.withDirectives, ke = window.Vue.unref, ds = window.Vue.withCtx, mt = window.Vue.createVNode, gs = window.Vue.openBlock, Tm = window.Vue.createBlock, Z6 = window.Vue.createCommentVNode, wl = window.Vue.createElementBlock, e9 = window.Vue.Fragment, t9 = window.Vue.vShow, n9 = { class: "sx-article-search" }, o9 = { class: "mb-0" }, s9 = {
  key: 2,
  class: "sx-article-search__empty-suggestions-message mt-12 pa-4 mb-0"
}, ms = window.Vue.ref, a9 = window.Vue.onMounted, fl = window.Vue.computed, Bm = window.Vue.watch, i9 = window.Vue.inject, r9 = window.Vuex.useStore, l9 = window.Codex.CdxButton, c9 = window.Codex.CdxIcon, u9 = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = ms(""), n = ms(!1), o = ms(null), s = ms(!1), a = ms([]), r = r9(), { sourceLanguage: l, targetLanguage: u } = H(r), { supportedLanguageCodes: d } = Ls(), i = Y6(
      l,
      u,
      a
    ), c = X6(
      l,
      i
    ), g = he(), { fetchAllTranslations: m } = ni();
    a9(() => C(this, null, function* () {
      var N;
      yield Np()(), m();
      try {
        a.value.push(
          ...JSON.parse(localStorage.getItem("uls-previous-languages"))
        );
      } catch (ae) {
      }
      (N = o.value) == null || N.focus();
    }));
    const p = () => {
      g.push({ name: "dashboard" });
    }, h = Up(), w = (P) => h(P, u.value), _ = (P) => {
      if (P === "other") {
        s.value = !0;
        return;
      }
      w(P);
    };
    Bm(l, () => r.dispatch("mediawiki/fetchNearbyPages"), {
      immediate: !0
    });
    const f = vt();
    Bm(t, () => {
      n.value || (n.value = !0, f({
        event_type: "dashboard_search",
        translation_source_language: l.value,
        translation_target_language: u.value
      }));
    });
    const S = () => {
      s.value = !1;
    }, y = (P) => {
      s.value = !1, a.value.push(P), _(P);
    }, A = fl(
      () => r.getters["mediawiki/getRecentlyEditedPages"]
    ), T = fl(() => r.getters["mediawiki/getNearbyPages"]), U = i9("breakpoints"), V = fl(() => U.value.tabletAndDown), L = Ms(), j = (P, N) => L(
      P.title,
      l.value,
      u.value,
      N
    );
    return (P, N) => {
      const ae = J6("i18n");
      return gs(), wl("section", n9, [
        mt(ke(B), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: ds(() => [
            mt(ke(k), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: ds(() => [
                hl(Q6("h5", o9, null, 512), [
                  [ae, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            mt(ke(k), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: ds(() => [
                mt(ke(l9), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": P.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: p
                }, {
                  default: ds(() => [
                    mt(ke(c9), { icon: ke(fo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        mt(ke(Nl), {
          ref_key: "searchInputRef",
          ref: o,
          value: t.value,
          "onUpdate:value": N[0] || (N[0] = (J) => t.value = J),
          "icon-size": 20,
          icon: ke(Mm),
          placeholder: P.$i18n("cx-sx-article-search-input-placeholder"),
          type: "search"
        }, null, 8, ["value", "icon", "placeholder"]),
        mt(ke(ks), {
          class: "sx-article-search__language-button-group",
          items: ke(c),
          active: ke(l),
          onSelect: _
        }, null, 8, ["items", "active"]),
        t.value ? Z6("", !0) : (gs(), wl(e9, { key: 0 }, [
          A.value && A.value.length ? (gs(), Tm(Lm, {
            key: 0,
            "card-title": P.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: A.value,
            onSuggestionClicked: N[1] || (N[1] = (J) => j(J, "suggestion_recent_edit"))
          }, null, 8, ["card-title", "suggestions"])) : T.value && T.value.length ? (gs(), Tm(Lm, {
            key: 1,
            "card-title": P.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: T.value,
            onSuggestionClicked: N[2] || (N[2] = (J) => j(J, "suggestion_nearby"))
          }, null, 8, ["card-title", "suggestions"])) : hl((gs(), wl("p", s9, null, 512)), [
            [ae, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        hl(mt(N6, {
          "search-input": t.value,
          onSuggestionClicked: N[3] || (N[3] = (J) => j(J, "search_result"))
        }, null, 8, ["search-input"]), [
          [t9, !!t.value]
        ]),
        mt(ke(Ye), {
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
          default: ds(() => [
            mt(ke(Jp), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: ke(d),
              suggestions: ke(i),
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
const d9 = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: u9
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.tabletAndDown })
  }
}, g9 = window.Vue.resolveComponent, m9 = window.Vue.createVNode, p9 = window.Vue.normalizeClass, h9 = window.Vue.openBlock, w9 = window.Vue.createElementBlock;
function f9(e, t, n, o, s, a) {
  const r = g9("sx-article-search");
  return h9(), w9("main", {
    class: p9(["sx-article-search-view", a.classes])
  }, [
    m9(r)
  ], 2);
}
const _9 = /* @__PURE__ */ F(d9, [["render", f9]]), v9 = window.Vuex.useStore, ph = [
  {
    path: "",
    name: "dashboard",
    component: Fd,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: _9,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: j$,
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: h3,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: NV,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: MD,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: aD,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: VL,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: h6,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Fd,
    meta: { workflowStep: 0 }
  }
], wc = ly({
  history: rS(),
  routes: ph
});
wc.beforeEach((e, t, n) => {
  const o = v9();
  if (o.commit("application/setPreviousRoute", t.name), mw.user.isAnon() || Im.assertUser().catch((l) => {
    l instanceof go && o.commit("application/setIsLoginDialogOn", !0);
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
    const l = Math.ceil(a) - 1, u = ph.find(
      (d) => d.meta.workflowStep === l
    );
    n({ name: u.name });
    return;
  }
  n();
});
wc.afterEach((e, t) => {
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const S9 = window.Vue.createApp, y9 = mw.config.get("wgUserLanguage"), C9 = "en", k9 = mw.messages.values || {}, vo = S9(o_);
vo.use(wc);
vo.use(Av);
vo.use(a1);
vo.use(s1);
const x9 = U1({
  locale: y9,
  finalFallback: C9,
  messages: k9,
  wikilinks: !0
});
vo.use(x9);
vo.mount("#contenttranslation");
