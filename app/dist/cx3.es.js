/*@nomin*/
var sh = Object.defineProperty, ah = Object.defineProperties;
var ih = Object.getOwnPropertyDescriptors;
var Sl = Object.getOwnPropertySymbols;
var rh = Object.prototype.hasOwnProperty, ch = Object.prototype.propertyIsEnumerable;
var yl = (e, t, n) => t in e ? sh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, be = (e, t) => {
  for (var n in t || (t = {}))
    rh.call(t, n) && yl(e, n, t[n]);
  if (Sl)
    for (var n of Sl(t))
      ch.call(t, n) && yl(e, n, t[n]);
  return e;
}, Me = (e, t) => ah(e, ih(t));
var y = (e, t, n) => new Promise((o, s) => {
  var a = (l) => {
    try {
      c(n.next(l));
    } catch (d) {
      s(d);
    }
  }, r = (l) => {
    try {
      c(n.throw(l));
    } catch (d) {
      s(d);
    }
  }, c = (l) => l.done ? o(l.value) : Promise.resolve(l.value).then(a, r);
  c((n = n.apply(e, t)).next());
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
}, lh = {
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
}, uh = window.Vue.toDisplayString, ri = window.Vue.openBlock, ci = window.Vue.createElementBlock, dh = window.Vue.createCommentVNode, Cl = window.Vue.createElementVNode, gh = window.Vue.normalizeClass, mh = ["width", "height", "aria-labelledby"], ph = ["id"], hh = ["fill"], wh = ["d"];
function fh(e, t, n, o, s, a) {
  return ri(), ci("span", {
    class: gh(["mw-ui-icon notranslate", a.classes])
  }, [
    (ri(), ci("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...r) => a.handleClick && a.handleClick(...r))
    }, [
      n.iconName ? (ri(), ci("title", {
        key: 0,
        id: n.iconName
      }, uh(n.iconName), 9, ph)) : dh("", !0),
      Cl("g", { fill: n.iconColor }, [
        Cl("path", { d: a.iconImagePath }, null, 8, wh)
      ], 8, hh)
    ], 8, mh))
  ], 2);
}
const me = /* @__PURE__ */ P(lh, [["render", fh]]);
const _h = {
  name: "MwButton",
  components: {
    MwIcon: me
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
}, vh = window.Vue.renderSlot, Sh = window.Vue.resolveComponent, kl = window.Vue.normalizeClass, Bs = window.Vue.openBlock, li = window.Vue.createBlock, ui = window.Vue.createCommentVNode, yh = window.Vue.toDisplayString, Ch = window.Vue.createElementBlock, kh = window.Vue.toHandlerKey, xh = window.Vue.withModifiers, bh = window.Vue.mergeProps, $h = window.Vue.createElementVNode, Vh = window.Vue.resolveDynamicComponent, Eh = window.Vue.withCtx, Ah = { class: "mw-ui-button__content" }, Dh = ["textContent"];
function Th(e, t, n, o, s, a) {
  const r = Sh("mw-icon");
  return Bs(), li(Vh(a.component), {
    class: kl(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: Eh(() => [
      vh(e.$slots, "default", {}, () => [
        $h("span", Ah, [
          n.icon ? (Bs(), li(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: kl(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : ui("", !0),
          !a.isIcon && n.label ? (Bs(), Ch("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: yh(n.label)
          }, null, 8, Dh)) : ui("", !0),
          n.indicator ? (Bs(), li(r, bh({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [kh(a.indicatorClickEvent)]: t[0] || (t[0] = xh((c) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : ui("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const Le = /* @__PURE__ */ P(_h, [["render", Th]]);
const Lh = {
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
}, Bh = window.Vue.renderList, Ph = window.Vue.Fragment, di = window.Vue.openBlock, xl = window.Vue.createElementBlock, Fh = window.Vue.resolveComponent, Mh = window.Vue.withModifiers, Nh = window.Vue.mergeProps, Uh = window.Vue.createBlock, Ih = { class: "row mw-ui-button-group ma-0 pa-0" };
function zh(e, t, n, o, s, a) {
  const r = Fh("mw-button");
  return di(), xl("div", Ih, [
    (di(!0), xl(Ph, null, Bh(n.items, (c) => (di(), Uh(r, Nh({
      key: c.value,
      value: c.value,
      "aria-selected": a.isActive(c) || null
    }, c.props, {
      class: ["ma-0", a.buttonClasses(c)],
      style: a.activeIndicatorStyle(c),
      onClick: Mh((l) => e.$emit("select", c.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const ms = /* @__PURE__ */ P(Lh, [["render", zh]]);
const Rh = {
  name: "MwUiBottomNavigation",
  components: { MwButtonGroup: ms },
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
  emits: ["update:active"]
}, Oh = window.Vue.renderSlot, Hh = window.Vue.resolveComponent, jh = window.Vue.createVNode, qh = window.Vue.createElementVNode, Gh = window.Vue.openBlock, Xh = window.Vue.createElementBlock, Wh = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, Kh = { class: "col-12 ma-0 pa-0" };
function Yh(e, t, n, o, s, a) {
  const r = Hh("mw-button-group");
  return Gh(), Xh("footer", Wh, [
    qh("div", Kh, [
      Oh(e.$slots, "default", {}, () => [
        jh(r, {
          class: "mw-ui-bottom-navigation__button-group justify-around",
          active: n.active,
          items: n.items,
          onSelect: t[0] || (t[0] = (c) => e.$emit("update:active", c))
        }, null, 8, ["active", "items"])
      ])
    ])
  ]);
}
const Qh = /* @__PURE__ */ P(Rh, [["render", Yh]]);
const Jh = {
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
}, bl = window.Vue.renderSlot, Zh = window.Vue.toDisplayString, $l = window.Vue.openBlock, Vl = window.Vue.createElementBlock, ew = window.Vue.createCommentVNode, tw = window.Vue.createElementVNode, nw = { class: "mw-ui-card" }, ow = ["textContent"], sw = { class: "mw-ui-card__content" };
function aw(e, t, n, o, s, a) {
  return $l(), Vl("div", nw, [
    bl(e.$slots, "header", {}, () => [
      n.title ? ($l(), Vl("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: Zh(n.title)
      }, null, 8, ow)) : ew("", !0)
    ]),
    tw("div", sw, [
      bl(e.$slots, "default")
    ])
  ]);
}
const He = /* @__PURE__ */ P(Jh, [["render", aw]]);
const iw = {}, rw = window.Vue.openBlock, cw = window.Vue.createElementBlock, lw = { class: "mw-ui-divider row" };
function uw(e, t) {
  return rw(), cw("div", lw);
}
const qa = /* @__PURE__ */ P(iw, [["render", uw]]);
const dw = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, gw = window.Vue.renderSlot, pw = window.Vue.resolveDynamicComponent, hw = window.Vue.withCtx, ww = window.Vue.openBlock, fw = window.Vue.createBlock;
function _w(e, t, n, o, s, a) {
  return ww(), fw(pw(n.tag), { class: "mw-grid container" }, {
    default: hw(() => [
      gw(e.$slots, "default")
    ]),
    _: 3
  });
}
const vw = /* @__PURE__ */ P(dw, [["render", _w]]), Sw = {
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
}, yw = window.Vue.renderSlot, Cw = window.Vue.resolveDynamicComponent, kw = window.Vue.normalizeClass, xw = window.Vue.withCtx, bw = window.Vue.openBlock, $w = window.Vue.createBlock;
function Vw(e, t, n, o, s, a) {
  return bw(), $w(Cw(n.tag), {
    class: kw(a.classes)
  }, {
    default: xw(() => [
      yw(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const B = /* @__PURE__ */ P(Sw, [["render", Vw]]), fc = ["mobile", "tablet", "desktop", "desktop-wide"], Ew = fc.reduce(
  (e, t) => Me(be({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), Aw = {
  name: "MwCol",
  props: Me(be({}, Ew), {
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
      for (let n = 0; n < fc.length; n++) {
        let o = fc[n], s = this.$props[o];
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
}, Dw = window.Vue.renderSlot, Tw = window.Vue.resolveDynamicComponent, Lw = window.Vue.normalizeClass, Bw = window.Vue.withCtx, Pw = window.Vue.openBlock, Fw = window.Vue.createBlock;
function Mw(e, t, n, o, s, a) {
  return Pw(), Fw(Tw(n.tag), {
    class: Lw(a.classes)
  }, {
    default: Bw(() => [
      Dw(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const C = /* @__PURE__ */ P(Aw, [["render", Mw]]), Nw = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", Uw = "M3 3H1v16h18v-2H3z M11 11L8 9l-4 4v3h14V5z", Iw = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", Ga = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", zw = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, Rw = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", Ow = "M20 7h-7L10 .5 7 7H0l5.46 5.47-1.64 7 6.18-3.7 6.18 3.73-1.63-7zm-10 6.9l-3.76 2.27 1-4.28L3.5 8.5h4.61L10 4.6l1.9 3.9h4.6l-3.73 3.4 1 4.28z", xm = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", _c = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", Lc = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", Vn = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", Hw = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", jw = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", Bc = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", bm = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", qw = "M5 1a2 2 0 0 0-2 2v16l7-5 7 5V3a2 2 0 0 0-2-2zm10 14.25l-5-3.5-5 3.5V3h10z", Gw = "M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z", Xw = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", $m = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", Vm = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", Ww = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", Kw = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", Yw = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", Qw = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", Jw = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, Yn = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, Zw = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, Pc = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, ef = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, Fc = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", tf = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z", nf = "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 5h2v2H9zm0 4h2v6H9z", of = "M 19 3 L 2 7 A 3.83 3.83 0 0 0 1 9.5 A 3.83 3.83 0 0 0 2 12 L 4 12.470703 L 4 15 C 4 16.108 4.892 17 6 17 C 7.108 17 8 16.108 8 15 L 8 13.412109 L 19 16 L 19 3 z";
const gi = window.Vue.computed, sf = window.Vue.watch, af = window.Vue.ref, rf = window.Vue.nextTick, cf = {
  name: "MwDialog",
  components: {
    MwButton: Le,
    MwRow: B,
    MwCol: C,
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
    const n = af(null), o = gi(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = gi(() => ({
      "background-color": e.overlayColor,
      opacity: e.overlayOpacity
    })), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, r = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    sf(
      () => e.value,
      (l) => {
        l ? (r(), rf(() => {
          n.value.focus();
        })) : a();
      }
    );
    const c = gi(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: c,
      overlayStyles: s,
      mwIconClose: Vn,
      root: n
    };
  }
}, El = window.Vue.normalizeStyle, mi = window.Vue.createElementVNode, pi = window.Vue.renderSlot, Ps = window.Vue.resolveComponent, lo = window.Vue.createVNode, hi = window.Vue.withCtx, Al = window.Vue.createCommentVNode, lf = window.Vue.withKeys, uf = window.Vue.normalizeClass, Dl = window.Vue.openBlock, df = window.Vue.createElementBlock, gf = window.Vue.Transition, mf = window.Vue.createBlock, pf = { class: "mw-ui-dialog__shell items-stretch" }, hf = { class: "mw-ui-dialog__body" };
function wf(e, t, n, o, s, a) {
  const r = Ps("mw-col"), c = Ps("mw-button"), l = Ps("mw-row"), d = Ps("mw-divider");
  return Dl(), mf(gf, {
    name: `mw-ui-animation-${n.animation}`,
    style: El(o.cssVars)
  }, {
    default: hi(() => [
      n.value ? (Dl(), df("div", {
        key: 0,
        ref: "root",
        class: uf(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = lf((i) => n.closeOnEscapeKey && o.close, ["esc"]))
      }, [
        mi("div", {
          class: "mw-ui-dialog__overlay",
          style: El(o.overlayStyles),
          onClick: t[0] || (t[0] = (i) => !n.persistent && o.close)
        }, null, 4),
        mi("div", pf, [
          n.header ? pi(e.$slots, "header", { key: 0 }, () => [
            lo(l, { class: "mw-ui-dialog__header" }, {
              default: hi(() => [
                lo(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                lo(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: hi(() => [
                    lo(c, {
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
            lo(d)
          ]) : Al("", !0),
          mi("div", hf, [
            pi(e.$slots, "default")
          ]),
          pi(e.$slots, "footer")
        ])
      ], 34)) : Al("", !0)
    ]),
    _: 3
  }, 8, ["name", "style"]);
}
const qe = /* @__PURE__ */ P(cf, [["render", wf]]);
const ff = {
  name: "MwInput",
  components: {
    MwIcon: me
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
      const t = be({}, e.$attrs);
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
}, Tl = window.Vue.renderSlot, _f = window.Vue.resolveComponent, Fs = window.Vue.openBlock, wi = window.Vue.createBlock, Ll = window.Vue.createCommentVNode, vf = window.Vue.resolveDynamicComponent, Sf = window.Vue.toDisplayString, yf = window.Vue.mergeProps, Cf = window.Vue.withModifiers, kf = window.Vue.createElementVNode, xf = window.Vue.normalizeClass, bf = window.Vue.createElementBlock, $f = { class: "mw-ui-input__content" };
function Vf(e, t, n, o, s, a) {
  const r = _f("mw-icon");
  return Fs(), bf("div", {
    class: xf(a.classes),
    onClick: t[2] || (t[2] = (c) => a.focus())
  }, [
    kf("div", $f, [
      Tl(e.$slots, "icon", {}, () => [
        n.icon ? (Fs(), wi(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : Ll("", !0)
      ]),
      (Fs(), wi(vf(n.type === "textarea" ? n.type : "input"), yf({
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
        textContent: Sf(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      Tl(e.$slots, "indicator", {}, () => [
        n.indicator ? (Fs(), wi(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = Cf((c) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : Ll("", !0)
      ])
    ])
  ], 2);
}
const Mc = /* @__PURE__ */ P(ff, [["render", Vf]]);
const Ef = {
  name: "MwMessage",
  components: { MwCol: C, MwRow: B, MwIcon: me, MwButton: Le },
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
    mwIconClose: Vn,
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
      notice: Jw,
      warning: Pc,
      success: Yn,
      error: Zw
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
}, fi = window.Vue.renderSlot, Ms = window.Vue.resolveComponent, Bl = window.Vue.createVNode, Pl = window.Vue.withCtx, Fl = window.Vue.openBlock, Ml = window.Vue.createBlock, Nl = window.Vue.createCommentVNode, Af = window.Vue.normalizeClass;
function Df(e, t, n, o, s, a) {
  const r = Ms("mw-icon"), c = Ms("mw-col"), l = Ms("mw-button"), d = Ms("mw-row");
  return e.shown ? (Fl(), Ml(d, {
    key: 0,
    class: Af([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: Pl(() => [
      fi(e.$slots, "icon", {}, () => [
        Bl(r, {
          icon: a.icon,
          size: 24,
          class: "col shrink mw-ui-message__icon pa-1 items-start"
        }, null, 8, ["icon"])
      ]),
      Bl(c, {
        id: `${e.id}-label`,
        tag: "span",
        grow: "",
        align: "center",
        class: "mw-ui-message__label"
      }, {
        default: Pl(() => [
          fi(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id"]),
      fi(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (Fl(), Ml(l, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : Nl("", !0)
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : Nl("", !0);
}
const Tf = /* @__PURE__ */ P(Ef, [["render", Df]]);
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
const Lf = {}, Bf = window.Vue.createElementVNode, Pf = window.Vue.openBlock, Ff = window.Vue.createElementBlock, Mf = { class: "mw-ui-spinner" }, Nf = /* @__PURE__ */ Bf("div", { class: "mw-ui-spinner__bounce" }, null, -1), Uf = [
  Nf
];
function If(e, t) {
  return Pf(), Ff("div", Mf, Uf);
}
const st = /* @__PURE__ */ P(Lf, [["render", If]]), Oe = {
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
const zf = window.Vue.computed, Rf = {
  name: "MwUiThumbnail",
  components: { MwUiIcon: me },
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
      default: Fc
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: Oe.gray600
    },
    placeholderBackgroundColor: {
      type: String,
      default: Oe.gray200
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = zf(() => {
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
}, Ul = window.Vue.normalizeStyle, Il = window.Vue.openBlock, Of = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Hf = window.Vue.resolveComponent, jf = window.Vue.createBlock;
function qf(e, t, n, o, s, a) {
  const r = Hf("mw-ui-icon");
  return n.thumbnail ? (Il(), Of("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Ul(o.style)
  }, null, 4)) : (Il(), jf(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Ul(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Nc = /* @__PURE__ */ P(Rf, [["render", qf]]);
const Gf = {
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
}, Xf = window.Vue.vModelRadio, Ra = window.Vue.createElementVNode, Wf = window.Vue.withDirectives, Kf = window.Vue.toDisplayString, Yf = window.Vue.resolveComponent, Qf = window.Vue.normalizeClass, Jf = window.Vue.withCtx, Zf = window.Vue.openBlock, e0 = window.Vue.createBlock, t0 = { class: "mw-ui-radio__controls" }, n0 = ["id", "disabled", "name", "value"], o0 = /* @__PURE__ */ Ra("span", { class: "mw-ui-radio__controls__icon" }, null, -1), s0 = ["for", "textContent"];
function a0(e, t, n, o, s, a) {
  const r = Yf("mw-row");
  return Zf(), e0(r, {
    class: Qf(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: Jf(() => [
      Ra("div", t0, [
        Wf(Ra("input", {
          id: n.id,
          "onUpdate:modelValue": t[0] || (t[0] = (c) => a.inputModel = c),
          type: "radio",
          disabled: n.disabled || null,
          name: n.name,
          value: n.inputValue
        }, null, 8, n0), [
          [Xf, a.inputModel]
        ]),
        o0
      ]),
      Ra("label", {
        for: n.id,
        class: "ps-2",
        textContent: Kf(n.label)
      }, null, 8, s0)
    ]),
    _: 1
  }, 8, ["class"]);
}
const vc = /* @__PURE__ */ P(Gf, [["render", a0]]), zl = window.Vue.h, i0 = {
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
      (o) => zl(vc, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), zl("div", { class: "mw-ui-radio-group" }, n);
  }
};
const r0 = {
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
}, Rl = window.Vue.normalizeClass, Ol = window.Vue.normalizeStyle, c0 = window.Vue.createElementVNode, l0 = window.Vue.openBlock, u0 = window.Vue.createElementBlock, d0 = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function g0(e, t, n, o, s, a) {
  return l0(), u0("div", {
    class: Rl(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: Ol(a.containerStyles)
  }, [
    c0("div", {
      class: Rl(["mw-progress-bar__bar", a.barClass]),
      style: Ol(a.barStyles)
    }, null, 6)
  ], 14, d0);
}
const Em = /* @__PURE__ */ P(r0, [["render", g0]]), m0 = (e, t, n, o) => (s) => {
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
  }, l = () => {
    n.value.style.height === t.value + "px" && (n.value.style.removeProperty("height"), o.value = !0), document.documentElement.removeEventListener(
      "pointermove",
      c,
      !1
    ), document.documentElement.removeEventListener(
      "pointerup",
      l,
      !1
    );
  };
  document.documentElement.addEventListener("pointermove", c, !1), document.documentElement.addEventListener("pointerup", l, !1);
}, p0 = (e, t, n, o) => ({ initiateDrag: m0(
  e,
  t,
  n,
  o
) }), h0 = window.Vue.ref, Hl = window.Vue.computed, w0 = (e, t, n, o) => {
  const s = h0(0), a = Hl(
    () => t.value > e.value
  ), r = Hl(
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
const Ns = window.Vue.ref, f0 = window.Vue.onMounted, jl = window.Vue.computed, _0 = window.Vue.nextTick, v0 = {
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
    const t = Ns(!0), n = Ns(null), o = jl(
      () => Math.min(e.minHeight, s.value)
    ), s = Ns(1), { initiateDrag: a } = p0(
      s,
      o,
      n,
      t
    ), {
      isScrolledToEnd: r,
      scrollable: c,
      scrollIndex: l,
      scrollToStepByIndex: d,
      handleArrowUpClick: i
    } = w0(o, s, n, t), u = () => d(l.value + 1), g = Ns(null), m = jl(() => ({
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
    return f0(() => y(this, null, function* () {
      var w;
      yield _0(), s.value = n.value.scrollHeight, (w = g.value) == null || w.addEventListener(
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
      mwIconCollapse: ef,
      mwIconExpand: _c,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), d(0)), t.value = !t.value;
      },
      scrollable: c,
      scrollIndex: l,
      scrollToNextStep: u
    };
  }
}, S0 = window.Vue.renderSlot, y0 = window.Vue.normalizeClass, Us = window.Vue.createElementVNode, C0 = window.Vue.resolveComponent, k0 = window.Vue.createVNode, _i = window.Vue.openBlock, x0 = window.Vue.createBlock, ql = window.Vue.createCommentVNode, Gl = window.Vue.createElementBlock, b0 = window.Vue.normalizeStyle, $0 = { class: "mw-ui-expandable-content__container" }, V0 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, E0 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function A0(e, t, n, o, s, a) {
  const r = C0("mw-button");
  return _i(), Gl("div", {
    class: "mw-ui-expandable-content",
    style: b0(o.cssVars)
  }, [
    Us("div", $0, [
      Us("div", {
        ref: "contentRef",
        class: y0(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        S0(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (_i(), Gl("div", V0, [
        k0(r, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (_i(), x0(r, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : ql("", !0)
      ])) : ql("", !0)
    ]),
    Us("div", E0, [
      Us("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...c) => o.onDragButtonClicked && o.onDragButtonClicked(...c))
      })
    ], 512)
  ], 4);
}
const D0 = /* @__PURE__ */ P(v0, [["render", A0]]);
const Is = window.Vue.computed, T0 = {
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
      default: Oe.blue600
    },
    inactiveColor: {
      type: String,
      default: Oe.gray300
    },
    strokeWidth: {
      type: Number,
      default: 2
    }
  },
  setup(e) {
    const t = Is(() => e.size / 2 * 0.9), n = Is(() => Math.PI * (t.value * 2)), o = Is(
      () => (100 - e.percentage) / 100 * n.value
    ), s = Is(() => ({
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
}, Xl = window.Vue.createElementVNode, Wl = window.Vue.normalizeStyle, L0 = window.Vue.openBlock, B0 = window.Vue.createElementBlock, P0 = ["width", "height", "viewport"], F0 = ["r", "cx", "cy", "stroke-dasharray"], M0 = ["r", "cx", "cy", "stroke-dasharray"];
function N0(e, t, n, o, s, a) {
  return L0(), B0("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: Wl(o.cssVars)
  }, [
    Xl("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, F0),
    Xl("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: Wl({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, M0)
  ], 12, P0);
}
const U0 = /* @__PURE__ */ P(T0, [["render", N0]]), I0 = window.Vue.ref, Nt = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, Ut = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${Nt.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${Nt.tablet}px) and (max-width: ${Nt.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${Nt.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${Nt.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${Nt.desktopwide - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${Nt.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${Nt["desktop-wide"]}px)`
}, vi = {
  mobile: () => matchMedia(Ut.mobile).matches,
  tablet: () => matchMedia(Ut.tablet).matches,
  desktop: () => matchMedia(Ut.desktop).matches,
  desktopwide: () => matchMedia(Ut["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(Ut["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(Ut["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(Ut["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(Ut["desktop-and-down"]).matches
}, z0 = {
  install: (e) => {
    const t = () => {
      for (let o in vi)
        vi.hasOwnProperty(o) && (n.value[o] = vi[o]());
    }, n = I0({});
    t(), window.addEventListener("resize", t), e.config.globalProperties.$mwui = Me(be({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: n.value
    }), e.provide("breakpoints", n);
  }
}, R0 = {
  install: (e) => {
    e.config.globalProperties.$mwui = Me(be({}, e.config.globalProperties.$mwui || {}), {
      colors: Oe
    }), e.provide("colors", Oe);
  }
};
class no extends Error {
}
const O0 = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new no();
}), Am = { assertUser: O0 };
const H0 = window.Vue.resolveDirective, uo = window.Vue.createElementVNode, Kl = window.Vue.withDirectives, j0 = window.Vue.toDisplayString, q0 = window.Vue.unref, Yl = window.Vue.withCtx, G0 = window.Vue.openBlock, X0 = window.Vue.createBlock, W0 = window.Vue.createCommentVNode, K0 = { class: "pa-4 sx-login-dialog__header" }, Y0 = { class: "sx-login-dialog__body px-6 pb-4" }, Q0 = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, J0 = ["href"], Z0 = window.Vue.computed, e_ = window.Vue.ref, t_ = window.Vuex.useStore, n_ = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = t_(), n = Z0(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = e_(mw.util.getUrl("Special:UserLogin"));
    return (a, r) => {
      const c = H0("i18n");
      return n.value ? (G0(), X0(q0(qe), {
        key: 0,
        "overlay-opacity": 0.25,
        "overlay-color": "#000",
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: Yl(() => [
          uo("div", K0, [
            Kl(uo("h4", null, null, 512), [
              [c, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: Yl(() => [
          Kl(uo("div", Y0, null, 512), [
            [c, void 0, "cx-sx-login-dialog-body"]
          ]),
          uo("div", Q0, [
            uo("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, j0(a.$i18n("cx-sx-login-dialog-button-label")), 9, J0)
          ])
        ]),
        _: 1
      })) : W0("", !0);
    };
  }
}, H = new mw.cx.SiteMapper(), o_ = mw.util.getUrl, s_ = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
};
class Xa {
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
    status: l,
    targetTitle: d
  }) {
    this.translationId = t, this.sourceTitle = n, this.sourceLanguage = o, this.targetLanguage = s, this.startTimestamp = a, this.lastUpdatedTimestamp = r, this.pageRevision = c, this.status = l, this.targetTitle = d;
  }
}
const Si = "original", yi = "empty", a_ = {
  Elia: "Elia.eus",
  Google: "Google Translate",
  Yandex: "Yandex.Translate"
};
class Q {
  /**
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string[]} providers
   */
  constructor(t, n, o = []) {
    this.sourceLanguage = t, this.targetLanguage = n, this.providers = [
      ...o,
      Si,
      yi
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return a_[t] || t;
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
    return Si;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return yi;
  }
  static isUserMTProvider(t) {
    return [Si, yi].includes(
      t
    );
  }
}
class tn {
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = Me(be({}, a), {
      [Q.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [Q.EMPTY_TEXT_PROVIDER_KEY]: ""
    }), this.selected = r;
  }
  reset() {
    this.proposedTranslations = {
      [Q.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalContent,
      [Q.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedContent = "", this.mtProviderUsed = "", this.selected = !1;
  }
  /**
   * @return {string}
   */
  get originalContent() {
    return this.proposedTranslations[Q.ORIGINAL_TEXT_PROVIDER_KEY];
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
const Ql = (e) => {
  var n;
  const t = Oa(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, Oa = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, $n = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), Dm = (e) => {
  const t = Oa(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = i_(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, i_ = (e) => {
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
}, Tm = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, Lm = (e) => {
  const t = Tm(e);
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
let Te = class {
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
      (a) => $n(a)
    );
    s && Lm(s) && (this.blockTemplateAdaptationInfo[t] = Tm(s));
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
      (t) => $n(t)
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
    const t = Oa(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? Ql(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => $n(o));
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
    return n && Ql(n) || "";
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
    const o = Oa(n);
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
      (a) => $n(a)
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
    if (!t || Q.isUserMTProvider(t))
      return null;
    if (this.isBlockTemplate) {
      n.innerHTML = this.blockTemplateProposedTranslations[t];
      const o = Array.from(n.children).find(
        (s) => $n(s)
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
const r_ = [
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
], c_ = (e, t, n) => {
  let o, s, a, r, c;
  return !e || !t ? 0 : e === t ? 1 : (s = r = Jl(e, n), a = c = Jl(t, n), c.length > r.length && (s = c, a = r), o = s.filter(function(l) {
    return a.indexOf(l) >= 0;
  }), o.length / s.length);
}, Jl = function(e, t) {
  return e ? r_.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, l_ = 95, u_ = 85, d_ = [
  { status: "failure", value: 100 - l_ },
  { status: "warning", value: 100 - u_ },
  { status: "success", value: 100 }
], Bm = (e, t, n) => {
  const o = Zl(e).textContent, s = Zl(t).textContent, a = 100 - 100 * c_(s, o, n);
  return Math.ceil(a);
}, g_ = (e) => d_.find((t) => e <= t.value).status, m_ = (e, t) => Bm(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), Zl = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, on = { calculateScore: Bm, getScoreStatus: g_, getMTScoreForPageSection: m_ }, zs = "__LEAD_SECTION__";
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
      [Q.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [Q.EMPTY_TEXT_PROVIDER_KEY]: ""
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
      [Q.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalTitle,
      [Q.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedTitle = "", this.subSections.forEach((t) => t.reset());
  }
  static get LEAD_SECTION_DUMMY_TITLE() {
    return zs;
  }
  static isSectionLead(t) {
    return !t || t === zs;
  }
  set originalTitle(t) {
    this.proposedTitleTranslations[Q.ORIGINAL_TEXT_PROVIDER_KEY] = t;
  }
  /**
   * @return {string}
   */
  get originalTitle() {
    return this.proposedTitleTranslations[Q.ORIGINAL_TEXT_PROVIDER_KEY];
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
    return n instanceof Te ? n.transclusionNode.outerHTML : n instanceof tn ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof Te ? t.blockTemplateSelected = !1 : t instanceof tn && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof Te ? n.blockTemplateSelected = !0 : n instanceof tn && (n.selected = !0);
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
    if (o instanceof Te)
      return !!o.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (o instanceof tn)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof Te ? n.blockTemplateProposedTranslations[t] || "" : n instanceof tn ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof Te ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof tn && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const o = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, s = on.getMTScoreForPageSection(this, t) / 100;
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
    return this.isLeadSection ? zs : this.originalTitle;
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
    return this.isLeadSection ? zs : this.title;
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
class Uc extends Xa {
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
    lastUpdatedTimestamp: l,
    status: d,
    pageRevision: i,
    targetTitle: u,
    sourceSectionTitle: g,
    targetSectionTitle: m,
    progress: p
  }) {
    super({
      translationId: n,
      sourceTitle: s,
      sourceLanguage: a,
      targetLanguage: r,
      startTimestamp: c,
      lastUpdatedTimestamp: l,
      pageRevision: i,
      status: d,
      targetTitle: u
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
    return Sc.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? Sc.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const ps = window.Vue.ref, hs = ps(null), ws = ps(null), fs = ps(null), oo = ps(null), Pm = ps(null), p_ = (e) => {
  const t = new URLSearchParams(location.search);
  t.set("page", e == null ? void 0 : e.sourceTitle), t.set("from", e == null ? void 0 : e.sourceLanguage), t.set("to", e == null ? void 0 : e.targetLanguage), fs.value = e == null ? void 0 : e.sourceTitle, hs.value = e == null ? void 0 : e.sourceLanguage, ws.value = e == null ? void 0 : e.targetLanguage, e instanceof Uc && (t.set("draft", !0), Pm.value = !0, e.isLeadSectionTranslation || (t.set("section", e.sourceSectionTitle), oo.value = e.sourceSectionTitle)), t.delete("title"), _s(Object.fromEntries(t));
}, h_ = (e) => {
  oo.value = e, Ic("section", e);
}, w_ = (e) => {
  fs.value = e, Ic("page", e);
}, _s = (e) => {
  history.replaceState(
    {},
    document.title,
    o_("Special:ContentTranslation", e)
  );
}, f_ = () => {
  const e = new URLSearchParams(location.search);
  fs.value = e.get("page"), hs.value = e.get("from"), ws.value = e.get("to"), oo.value = e.get("section");
}, __ = () => {
  const e = new URLSearchParams(location.search);
  oo.value = null, e.delete("section"), e.delete("title"), _s(Object.fromEntries(e));
}, Ic = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set(e, t), n.delete("title"), _s(Object.fromEntries(n));
}, v_ = (e) => new URLSearchParams(location.search).get(e), S_ = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), hs.value = e, ws.value = t, n.delete("title"), _s(Object.fromEntries(n));
}, y_ = () => {
  hs.value = null, ws.value = null, fs.value = null, oo.value = null, _s(null);
}, q = () => ({
  setLanguageURLParams: S_,
  setSectionURLParam: h_,
  setTranslationURLParams: p_,
  initializeURLState: f_,
  clearURLParameters: y_,
  clearSectionURLParameter: __,
  setUrlParam: Ic,
  getUrlParam: v_,
  pageURLParameter: fs,
  sourceLanguageURLParameter: hs,
  targetLanguageURLParameter: ws,
  sectionURLParameter: oo,
  draftURLParameter: Pm,
  setPageURLParam: w_
});
const C_ = window.Vue.resolveDynamicComponent, eu = window.Vue.openBlock, tu = window.Vue.createBlock, k_ = window.Vue.Transition, go = window.Vue.withCtx, mo = window.Vue.createVNode, x_ = window.Vue.resolveComponent, ki = window.Vue.unref, b_ = window.Vuex.useStore, $_ = window.Vue.computed, V_ = window.Vue.onMounted, E_ = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = q();
    t();
    const n = b_(), o = $_(
      () => n.state.application.autoSavePending
    );
    return V_(() => {
      window.addEventListener("beforeunload", (s) => {
        o.value && (s.preventDefault(), s.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (s) => {
        document.visibilityState === "visible" && Am.assertUser().then(() => n.commit("application/setIsLoginDialogOn", !1)).catch((a) => {
          a instanceof no && n.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (s, a) => {
      const r = x_("router-view");
      return eu(), tu(ki(vw), { id: "contenttranslation" }, {
        default: go(() => [
          mo(ki(B), { class: "cx-container" }, {
            default: go(() => [
              mo(ki(C), { cols: "12" }, {
                default: go(() => [
                  mo(r, null, {
                    default: go(({ Component: c, route: l }) => [
                      mo(k_, {
                        name: l.meta.transitionName
                      }, {
                        default: go(() => [
                          (eu(), tu(C_(c)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      mo(n_)
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
}, A_ = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translationsLoaded: { draft: !1, published: !1 },
  translatorStats: null
}, D_ = {
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
class Fm {
  constructor({ id: t, type: n, question: o, url: s }) {
    this.id = t, this.type = n, this.question = o, this.url = s;
  }
}
class Qn {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new Fm(a);
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
    (s, a) => Me(be({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class T_ {
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
    ].map((r) => ({
      id: r,
      mt: n[r] || null,
      user: t[r] || null
    }));
  }
}
class zc extends Xa {
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
    status: l,
    targetTitle: d,
    targetUrl: i,
    sectionTranslations: u
  }) {
    super({
      translationId: t,
      sourceTitle: n,
      sourceLanguage: o,
      targetLanguage: s,
      startTimestamp: a,
      lastUpdatedTimestamp: r,
      pageRevision: c,
      status: l,
      targetTitle: d
    }), this.targetUrl = i, this.sectionTranslations = u;
  }
}
const Wa = mw.user.isAnon() ? void 0 : "user", Mm = (e) => {
  if (e === "assertuserfailed")
    throw new no();
};
function Nm(e, t = null) {
  return y(this, null, function* () {
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
    return t && (n.offset = t), new mw.Api().get(n).then((s) => y(this, null, function* () {
      var c;
      const a = s.query.contenttranslation.translations;
      let r;
      if (e === "draft" ? r = a.map(
        (l) => new Uc(Me(be({}, l), { status: e }))
      ) : r = a.map(
        (l) => new zc(Me(be({}, l), { status: e }))
      ), (c = s.continue) != null && c.offset) {
        const l = yield Nm(
          e,
          s.continue.offset
        );
        r = r.concat(l);
      }
      return r;
    }));
  });
}
function L_(e) {
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
      (a) => new T_(a)
    );
  });
}
function B_(e, t, n, o, s) {
  return y(this, null, function* () {
    if (!o)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== Q.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const r = H.getCXServerUrl(a);
    return fetch(r, {
      headers: { "Content-Type": "application/json", Authorization: s },
      method: "POST",
      body: JSON.stringify({ html: `<div>${o}</div>` })
    }).then(
      (c) => Promise.all([c.json(), Promise.resolve(c.ok)])
    ).then(([c, l]) => {
      var i, u;
      if (!l) {
        const g = c.detail || c.type || c.title || "fetchSegmentTranslation: Unknown error";
        throw new Error(g);
      }
      return (u = (i = new RegExp("<div>(?<content>(.|\\s)*)<\\/div>").exec(c.contents)) == null ? void 0 : i.groups) == null ? void 0 : u.content;
    }).catch((c) => Promise.reject(c));
  });
}
const P_ = (e, t, n) => {
  const o = H.getApi(t);
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
}, F_ = ({
  html: e,
  sourceTitle: t,
  targetTitle: n,
  sourceSectionTitle: o,
  targetSectionTitle: s,
  sourceLanguage: a,
  targetLanguage: r,
  revision: c,
  captchaId: l,
  captchaWord: d,
  isSandbox: i,
  sectionTranslationId: u
}) => {
  const g = {
    assert: Wa,
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
    sectiontranslationid: u
  };
  return l && (g.captchaid = l, g.captchaword = d), new mw.Api().postWithToken("csrf", g).then((p) => {
    if (p = p.cxpublishsection, p.result === "error") {
      if (p.edit.captcha)
        return {
          publishFeedbackMessage: new Qn({
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
      targetUrl: p.targeturl
    };
  }).catch((p, h) => {
    Mm(p);
    let w;
    return h = h || {}, h.exception ? w = h.exception.message : h.error ? w = h.error.info : w = "Unknown error", {
      publishFeedbackMessage: new Qn({
        text: w,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, M_ = ({
  sourceTitle: e,
  targetTitle: t,
  sourceSectionTitle: n,
  targetSectionTitle: o,
  sourceLanguage: s,
  targetLanguage: a,
  revision: r,
  units: c,
  sectionId: l,
  isSandbox: d,
  progress: i
}) => {
  const u = {
    assert: Wa,
    action: "sxsave",
    targettitle: t,
    sourcetitle: e,
    sourcerevision: r,
    sourcesectiontitle: n,
    targetsectiontitle: o,
    sourcelanguage: s,
    targetlanguage: a,
    content: JSON.stringify(c),
    sectionid: l,
    issandbox: d,
    progress: JSON.stringify(i)
  };
  return new mw.Api().postWithToken("csrf", u).then((m) => m.sxsave.sectiontranslationid).catch((m, p) => {
    Mm(m);
    let h;
    return p.exception ? h = p.exception.message : p.error ? h = p.error.info : h = "Unknown error", new Qn({ text: h, status: "error" });
  });
}, N_ = (e) => {
  const t = {
    assert: Wa,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, U_ = () => {
  const e = {
    assert: Wa,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new zc(n.cxcheckunreviewed.translation)
  );
}, I_ = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, z_ = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, R_ = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), je = {
  fetchTranslations: Nm,
  fetchTranslationUnits: L_,
  fetchSegmentTranslation: B_,
  parseTemplateWikitext: P_,
  publishTranslation: F_,
  saveTranslation: M_,
  deleteTranslation: I_,
  fetchTranslatorStats: R_,
  deleteCXTranslation: z_,
  splitTranslation: N_,
  checkUnreviewedTranslations: U_
};
function O_(t) {
  return y(this, arguments, function* ({ commit: e }) {
    const n = yield je.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const H_ = {
  fetchTranslatorStats: O_
}, j_ = {
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
}, q_ = {
  namespaced: !0,
  state: A_,
  getters: D_,
  actions: H_,
  mutations: j_
}, Um = [
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
], G_ = [
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
], X_ = [
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
], W_ = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], K_ = [
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
], Y_ = {
  en: Um,
  es: G_,
  bn: X_,
  fr: W_,
  de: K_
}, Q_ = {
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
  appendixSectionTitles: Y_,
  /**
   * Maximum number of suggestions based on user's recently edited translations,
   * to be displayed inside "search for an article" view
   */
  maxRecentlyEditedSuggestions: 3
}, J_ = {
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
  },
  /**
   * This getter calculates and returns the number of section suggestions to fetch,
   * with maxSuggestionsPerSlice state variable being the maximum. When
   * already fetched suggestions do not produce full slices of maxSuggestionsPerSlice
   * size (i.e. length % maxSuggestionsPerSlice !== 0), fetch remaining suggestions
   * to complete the slice. If suggestions slice is already full, fetch maxSuggestionsPerSlice new.
   *
   * @param {Object} state
   * @param {Object} getters
   * @return {function(sourceLanguage: string, targetLanguage: string): number}
   */
  getNumberOfSectionSuggestionsToFetch: (e, t) => (n, o) => {
    const s = t.getSectionSuggestionsForPair(n, o), a = e.maxSuggestionsPerSlice;
    return a - s.length % a;
  },
  /**
   * This getter calculates and returns the number of page suggestions to fetch,
   * with maxSuggestionsPerSlice state variable being the maximum. When
   * already fetched suggestions do not produce full slices of maxSuggestionsPerSlice
   * size (i.e. length % maxSuggestionsPerSlice !== 0), fetch remaining suggestions
   * to complete the slice. If suggestions slice is already full, fetch maxSuggestionsPerSlice new.
   *
   * @param {Object} state
   * @param {Object} getters
   * @return {function(sourceLanguage: string, targetLanguage: string): number}
   */
  getNumberOfPageSuggestionsToFetch: (e, t) => (n, o) => {
    const s = t.getPageSuggestionsForPair(n, o), a = e.maxSuggestionsPerSlice;
    return a - s.length % a;
  }
};
class Ka {
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
    suggestionProvider: c = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.wikidataId = r, this.langLinksCount = a, this.suggestionProvider = c;
  }
  /**
   * @returns {string}
   */
  get id() {
    return `${this.sourceLanguage}/${this.targetLanguage}/${this.sourceTitle}`;
  }
}
class sn {
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
    sourceSections: c = [],
    targetSections: l = [],
    isListable: d = !0,
    suggestionProvider: i = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.missingSections = r, this.presentSections = a, this.sourceSections = c, this.targetSections = l, this.isListable = d, this.suggestionProvider = i;
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
class Jn {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s;
  }
}
const Z_ = Um, so = (c) => y(void 0, [c], function* ({
  source: e,
  target: t,
  seed: n = null,
  topic: o = null,
  includeSections: s = !1,
  searchAlgorithm: a = null,
  count: r = 24
}) {
  const l = {
    source: e,
    target: t,
    seed: n,
    topic: o,
    count: r,
    search_algorithm: a
  };
  let d = mw.config.get("wgRecommendToolAPIURL");
  s && (d += "/sections");
  const i = new URL(d);
  Object.keys(l).forEach((u) => {
    l[u] && i.searchParams.append(u, l[u]);
  });
  try {
    const u = yield fetch(i);
    if (!u.ok)
      throw new Error("Failed to load data from server");
    return u.json();
  } catch (u) {
    return mw.log.error(
      "Error while fetching suggestions from Recommendation API",
      u
    ), null;
  }
});
function e1(e, t, n, o = 24) {
  return y(this, null, function* () {
    return ((yield so({
      source: e,
      target: t,
      seed: n,
      count: o
    })) || []).map(
      (r) => new Ka({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
const t1 = (e, t) => y(void 0, null, function* () {
  return ((yield so({
    source: e,
    target: t,
    searchAlgorithm: "mostpopular"
  })) || []).map(
    (s) => new Ka({
      sourceTitle: s.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: s.wikidata_id,
      langLinksCount: parseInt(s.langlinks_count)
    })
  );
}), n1 = (e, t) => y(void 0, null, function* () {
  const o = (yield so({
    source: e,
    target: t,
    includeSections: !0,
    searchAlgorithm: "mostpopular"
  })) || [];
  return o && o.map(
    (s) => new sn({
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
function o1(e, t, n) {
  return y(this, null, function* () {
    const o = [t, e, n].map(
      (r) => encodeURIComponent(r)
    ), s = H.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (r) => r.ok ? r.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((r) => r == null ? void 0 : r.sections).catch((r) => null);
    return a ? new sn(a) : null;
  });
}
function s1(e, t, n) {
  return y(this, null, function* () {
    const s = (yield so({
      source: e,
      target: t,
      seed: n,
      includeSections: !0
    })) || [];
    return s && s.map(
      (a) => new sn({
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
function a1(e, t, n, o = 24) {
  return y(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    return ((yield so(s)) || []).map(
      (r) => new Ka({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
function i1(e, t, n, o = 24) {
  return y(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      includeSections: !0
    }, a = (yield so(s)) || [];
    return a && a.map(
      (r) => new sn({
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
function r1(e) {
  return y(this, null, function* () {
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
    }, n = H.getApi(e);
    try {
      const a = (yield n.get(t)).query.usercontribs.map((r) => r.title);
      return [...new Set(a)];
    } catch (o) {
      return mw.log.error("Error while fetching suggestion seeds", o), [];
    }
  });
}
function c1(e, t) {
  return y(this, null, function* () {
    const n = {
      action: "query",
      format: "json",
      list: "cxpublishedtranslations",
      from: e,
      to: t,
      limit: 200
    }, o = H.getApi(e);
    try {
      return (yield o.get(n)).result.translations.map((a) => a.sourceTitle);
    } catch (s) {
      return mw.log.error("Error while fetching suggestion seeds", s), [];
    }
  });
}
function l1(e, t) {
  return y(this, null, function* () {
    const n = {
      action: "parse",
      format: "json",
      formatversion: 2,
      prop: "sections",
      page: t
    }, o = H.getApi(e);
    try {
      return (yield o.get(n)).parse;
    } catch (s) {
      return mw.log.error("Error while fetching suggestion sections size", s), [];
    }
  });
}
function u1(e) {
  const t = Z_.map((o) => encodeURIComponent(o)).join("|"), n = H.getCXServerUrl(
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
const d1 = (e, t, n) => {
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
}, g1 = (e) => {
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
}, m1 = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions"
  }, t = new mw.Api();
  return Promise.resolve(t.postWithToken("csrf", e)).then((n) => {
    var a, r;
    const o = n.query.contenttranslationsuggestions.lists || {};
    return (((r = (a = Object.values(o)) == null ? void 0 : a[0]) == null ? void 0 : r.suggestions) || []).map((c) => new Jn(c));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
}, pe = {
  fetchFavorites: m1,
  fetchPageSuggestions: e1,
  fetchSectionSuggestion: o1,
  fetchSectionSuggestions: s1,
  fetchSuggestionSeeds: c1,
  fetchAppendixTargetSectionTitles: u1,
  fetchSuggestionSourceSections: l1,
  markFavorite: d1,
  unmarkFavorite: g1,
  fetchUserEdits: r1,
  fetchMostPopularPageSuggestions: t1,
  fetchMostPopularSectionSuggestions: n1,
  fetchPageSuggestionsByTopics: a1,
  fetchSectionSuggestionsByTopics: i1
};
function p1(o, s) {
  return y(this, arguments, function* ({ getters: e, commit: t }, n) {
    if (e.appendixTitlesExistForLanguage(n))
      return;
    const a = yield pe.fetchAppendixTargetSectionTitles(n);
    t("addAppendixSectionTitlesForLanguage", {
      language: n,
      titles: a
    });
  });
}
const h1 = {
  fetchAppendixSectionTitles: p1
}, w1 = {
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
}, f1 = {
  namespaced: !0,
  state: Q_,
  getters: J_,
  actions: h1,
  mutations: w1
}, _1 = {
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
}, v1 = {
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
  isValidProviderForTranslation: (e, t) => (n, o, s) => t.getSupportedMTProviders(n, o).includes(s) && s !== Q.EMPTY_TEXT_PROVIDER_KEY,
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
      (l) => t.getPage(s, l.sourceTitle)
    ).filter((l) => !!l);
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
class ao {
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
    pageprops: c,
    pageviews: l,
    thumbnail: d,
    title: i,
    revisions: u,
    _alias: g,
    content: m = null,
    sections: p = []
  } = {}) {
    var h;
    this.language = r, this.title = i, this.pageId = a, this.description = t, this.image = s, this.pageprops = c, this.pageviews = l, this.thumbnail = d, this.langLinksCount = n, this.articleSize = (h = u == null ? void 0 : u[0]) == null ? void 0 : h.size, this.revision = o, this.alias = g, this.wikidataId = c == null ? void 0 : c.wikibase_item, this.content = m, this.sections = p;
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
class S1 {
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
function y1() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const C1 = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), y1();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, k1 = (e, t) => {
  let n, o;
  return t ? (n = C1(e), o = n.$element.find(
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
}, x1 = (e, t) => {
  const n = Array.from(
    k1(e, t)
  );
  return b1(n).map(
    /**
     * @param {Node[]} sectionNodes
     * @return {PageSection}
     */
    (s) => {
      const [a, ...r] = s;
      let c = "";
      const l = a.dataset.mwSectionNumber;
      a.querySelector("h2") ? c = a.textContent.trim() : r.unshift(a);
      const d = r.map(
        /**
         * @param {Node} node
         * @return {SubSection}
         */
        (u) => new Te({
          sentences: $1(u),
          node: u
        })
      ), i = !c;
      return new Sc({ id: l, title: c, subSections: d, isLeadSection: i });
    }
  );
}, b1 = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, $1 = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new tn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), Im = {
  convertSegmentedContentToPageSections: x1
}, Rc = 120, V1 = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: Rc,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return H.getApi(e).get(n).then((s) => {
    const a = s.query.pages, c = (s.query.redirects || []).reduce(
      (i, u) => Me(be({}, i), { [u.to]: u.from }),
      {}
    ), d = (s.query.normalized || []).reduce(
      (i, u) => Me(be({}, i), {
        [u.to]: u.from
      }),
      {}
    );
    return a.map((i) => {
      const u = d[i.title] || c[i.title] || null;
      return new ao(Me(be({}, i), { _alias: u }));
    });
  });
}, E1 = (e, t) => {
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
  return H.getApi(e).get(n).then((s) => {
    var l, d;
    const a = s.query.pages;
    if (!a || !a.length || (l = a[0]) != null && l.missing)
      return null;
    const r = [{ lang: e, title: t }, ...a[0].langlinks || []], c = (d = a[0].pageprops) == null ? void 0 : d.wikibase_item;
    return c ? Object.freeze(new S1(c, r)) : null;
  });
}, A1 = (e, t, n) => {
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
  return H.getApi(e).get(o).then((a) => Object.values(a.query.pages).map((c) => {
    var l, d;
    return (d = (l = c.langlinks) == null ? void 0 : l[0]) == null ? void 0 : d["*"];
  }).filter((c) => !!c));
}, D1 = (e, t, n, o = null) => zm(
  e,
  t,
  n,
  o
).then(
  (s) => new ao({
    sections: Im.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), zm = (e, t, n, o = null) => {
  const s = H.getWikiDomainCode(e), a = H.getWikiDomainCode(t), r = {
    $sourcelanguage: s,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let c = "/page/$sourcelanguage/$targetlanguage/$title";
  o && (r.$revision = o, c += "/$revision");
  const l = H.getCXServerUrl(
    c,
    r
  );
  return fetch(l).then((d) => d.json()).then((d) => d.segmentedContent);
}, T1 = (e) => y(void 0, null, function* () {
  const t = s_();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: Rc,
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
  return yield H.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new ao(s))).catch((o) => []);
}), L1 = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: Rc,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return H.getApi(t).get(o).then((s) => {
    var a;
    return ((a = s.query) == null ? void 0 : a.pages) || [];
  }).then(
    (s) => s.sort((a, r) => a.index - r.index).map(
      (a) => new ao(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, io = {
  fetchPages: V1,
  fetchLanguageTitles: E1,
  fetchPageContent: D1,
  fetchSegmentedContent: zm,
  fetchNearbyPages: T1,
  searchPagesByTitlePrefix: L1,
  fetchLanguageLinksForLanguage: A1
};
function B1() {
  return H.getLanguagePairs().then((e) => e.sourceLanguages);
}
function P1(e, t) {
  return y(this, null, function* () {
    const n = H.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new Q(e, t, o.mt)
      )
    );
  });
}
function F1() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function M1(e, t, n, o) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const s = mw.config.get("wgWikiID"), a = H.getWikiDomainCode(e), r = H.getWikiDomainCode(t), c = {
    action: "wblinktitles",
    fromsite: s.replace(r, a),
    fromtitle: n,
    tosite: s,
    totitle: o
  }, l = new mw.ForeignApi("https://www.wikidata.org/w/api.php");
  return Promise.resolve(l.postWithToken("csrf", c)).then((d) => {
    const u = {
      action: "tag",
      revid: d.entity.sitelinks.lastrevid,
      tags: ["contenttranslation", "sectiontranslation"]
    };
    return Promise.resolve(l.postWithToken("csrf", u));
  });
}
const Ya = {
  fetchSupportedLanguageCodes: B1,
  fetchSupportedMTProviders: P1,
  fetchCXServerToken: F1,
  addWikibaseLink: M1
};
function N1({ getters: e, commit: t }, { language: n, titles: o }) {
  o = o.filter((r) => !e.getPage(n, r));
  const s = 50, a = [];
  for (let r = 0; r < o.length; r += s) {
    const c = o.slice(r, r + s), l = io.fetchPages(n, c).then(
      (d) => d.forEach((i) => t("addPage", i))
    );
    a.push(l);
  }
  return Promise.all(a);
}
function U1(n) {
  return y(this, arguments, function* ({ commit: e, state: t }) {
    if (!t.supportedLanguageCodes.length && !t.supportedLanguageCodesRequested) {
      e("setSupportedLanguageCodesRequested", !0);
      const o = yield Ya.fetchSupportedLanguageCodes();
      e("setSupportedLanguageCodes", o);
    }
  });
}
function I1(o) {
  return y(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: s } = t.application;
    if ((r = n.nearbyPages[s]) != null && r.length)
      return;
    const a = yield io.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const z1 = {
  fetchNearbyPages: I1,
  fetchPageMetadata: N1,
  fetchSupportedLanguageCodes: U1
}, R1 = {
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
}, O1 = {
  namespaced: !0,
  state: _1,
  getters: v1,
  actions: z1,
  mutations: R1
}, H1 = {
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
}, j1 = {
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
}, q1 = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], G1 = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, X1 = {
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
}, W1 = {
  languages: H1,
  scriptgroups: j1,
  rtlscripts: q1,
  regiongroups: G1,
  territories: X1
};
var ke = W1;
function vs(e) {
  return !!ke.languages[e];
}
function rn(e) {
  return vs(e) && ke.languages[e].length === 1 ? ke.languages[e][0] : !1;
}
function K1() {
  return ke.languages;
}
function Ss(e) {
  var t = rn(e);
  return t ? Ss(t) : vs(e) ? ke.languages[e][0] : "Zyyy";
}
function Oc(e) {
  var t = rn(e);
  return t ? Oc(t) : vs(e) && ke.languages[e][1] || "UNKNOWN";
}
function ls(e) {
  var t = rn(e);
  return t ? ls(t) : vs(e) && ke.languages[e][2] || e;
}
function Y1() {
  var e, t = {};
  for (e in ke.languages)
    rn(e) || (t[e] = ls(e));
  return t;
}
function Rm(e) {
  var t, n, o = [];
  for (t in ke.languages)
    if (!rn(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === Ss(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function Q1(e) {
  return Rm([e]);
}
function Om(e) {
  var t;
  for (t in ke.scriptgroups)
    if (ke.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function Hc(e) {
  return Om(Ss(e));
}
function Hm(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = rn(n) || n, a = Hc(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function jm(e) {
  var t, n, o, s = {};
  for (t in ke.languages)
    if (!rn(t)) {
      for (n = 0; n < e.length; n++)
        if (Oc(t).includes(e[n])) {
          o = Hc(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function J1(e) {
  return jm([e]);
}
function Z1(e) {
  var t, n, o, s = [];
  for (t = Hm(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function ev(e, t) {
  var n = ls(e) || e, o = ls(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function qm(e) {
  return ke.rtlscripts.includes(Ss(e));
}
function tv(e) {
  return qm(e) ? "rtl" : "ltr";
}
function nv(e) {
  return ke.territories[e] || [];
}
function ov(e, t) {
  t.target ? ke.languages[e] = [t.target] : ke.languages[e] = [t.script, t.regions, t.autonym];
}
var O = {
  addLanguage: ov,
  getAutonym: ls,
  getAutonyms: Y1,
  getDir: tv,
  getGroupOfScript: Om,
  getLanguages: K1,
  getLanguagesByScriptGroup: Hm,
  getLanguagesByScriptGroupInRegion: J1,
  getLanguagesByScriptGroupInRegions: jm,
  getLanguagesInScript: Q1,
  getLanguagesInScripts: Rm,
  getLanguagesInTerritory: nv,
  getRegions: Oc,
  getScript: Ss,
  getScriptGroupOfLanguage: Hc,
  isKnown: vs,
  isRedirect: rn,
  isRtl: qm,
  sortByScriptGroup: Z1,
  sortByAutonym: ev
};
const gn = window.Vue.computed;
function M(e) {
  const t = gn(() => e.state.application.sourceLanguage), n = gn(() => e.state.application.targetLanguage), o = gn(
    () => e.state.application.currentMTProvider
  ), s = gn(
    () => O.getAutonym(t.value)
  ), a = gn(
    () => O.getAutonym(n.value)
  ), r = gn(() => e.state.application.previousRoute), c = gn(
    () => e.state.application.currentSuggestionFilters
  );
  return {
    currentMTProvider: o,
    previousRoute: r,
    sourceLanguage: t,
    sourceLanguageAutonym: s,
    targetLanguage: n,
    targetLanguageAutonym: a,
    currentSuggestionFilters: c
  };
}
const sv = window.Vuex.useStore, jc = () => {
  const e = sv(), { sourceLanguage: t, targetLanguage: n } = M(e), o = (c) => {
    if (!c)
      return !1;
    const l = e.getters["suggestions/getFavoriteTitlesByLanguagePair"](t.value, n.value), i = e.getters["translator/getTranslationsForLanguagePair"](t.value, n.value).map((u) => u.sourceTitle);
    return !l.includes(c.sourceTitle) && !i.includes(c.sourceTitle);
  }, s = (c) => {
    const { pageSuggestions: l } = e.state.suggestions;
    return !l.some(
      (i) => i.sourceLanguage === c.sourceLanguage && i.targetLanguage === c.targetLanguage && i.sourceTitle === c.sourceTitle
    ) && o(c);
  }, a = (c) => e.state.suggestions.sectionSuggestions.some(
    (l) => l.sourceLanguage === c.sourceLanguage && l.targetLanguage === c.targetLanguage && l.sourceTitle === c.sourceTitle
  );
  return {
    isPageSuggestionValid: s,
    isSectionSuggestionValid: (c) => {
      if (!c)
        return !1;
      const l = e.state.suggestions.appendixSectionTitles[n.value] || [];
      return !a(c) && o(c) && c.isValid(l);
    },
    sectionSuggestionExists: a
  };
};
class av {
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
const iv = window.Vuex.useStore, Gm = window.Vue.ref, rv = Gm([]), cv = Gm([]);
let xi = !1, ou = !1, su = !1, au = !1, po = null;
const Rs = {
  page: rv,
  section: cv
}, lv = () => {
  const e = iv(), { sourceLanguage: t, targetLanguage: n } = M(e), o = () => y(void 0, null, function* () {
    let d = e.getters["translator/getTranslationsByStatus"]("published");
    if (d = d.filter(
      (i) => i.sourceLanguage === t.value
    ), d.length && !xi)
      return xi = !0, d.map(
        (i) => i.sourceTitle
      );
    if (xi = !0, !ou) {
      const i = yield pe.fetchUserEdits(t.value).then((u) => (ou = !0, u));
      if (i.length)
        return i;
    }
    if (!su) {
      const i = yield pe.fetchUserEdits(t.value).then((u) => (su = !0, u));
      if (i.length)
        return io.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          i
        );
    }
    return null;
  }), s = (d) => {
    let i = Rs[d].value.find(
      (u) => u.matchesLanguagePair(t.value, n.value)
    );
    return i || (i = new av({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), Rs[d].value.push(i)), i;
  }, a = () => y(void 0, null, function* () {
    const d = yield pe.fetchSuggestionSeeds(
      t.value,
      n.value
    );
    for (const i in Rs) {
      const u = s(i);
      u.seeds = [...u.seeds, ...d || []];
    }
  }), r = () => y(void 0, null, function* () {
    let d = !1, i = [];
    do {
      i = yield o(), i || (d = !0);
      for (const u in Rs) {
        const g = s(u);
        g.seeds = [
          ...g.seeds,
          ...i || []
        ];
      }
    } while (!d && !(i != null && i.length));
  }), c = () => po || (po = r(), po.finally(() => {
    po = null;
  }));
  return { getSuggestionSeed: (d) => y(void 0, null, function* () {
    let i = s(d);
    i.seeds.length || (yield c());
    let u = i.shiftSeeds();
    return !u && !au && (yield a(), u = i.shiftSeeds(), au = !0), u;
  }) };
}, uv = 5;
function us(e) {
  return y(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < uv);
  });
}
const dv = window.Vuex.useStore, Zn = "previous-edits", gv = () => {
  const e = dv(), { sourceLanguage: t, targetLanguage: n, currentSuggestionFilters: o } = M(e), { getSuggestionSeed: s } = lv(), {
    isSectionSuggestionValid: a,
    isPageSuggestionValid: r,
    sectionSuggestionExists: c
  } = jc();
  return {
    fetchPageSuggestionsBasedOnEdits: (i) => y(void 0, null, function* () {
      const u = [];
      return yield us(() => y(void 0, null, function* () {
        const g = yield s("page");
        if (!g)
          return !0;
        let m = yield pe.fetchPageSuggestions(
          t.value,
          n.value,
          g
        );
        return m = m.filter(
          (p) => r(p)
        ), m = m.slice(0, i), u.push(...m), u.length >= i;
      })), u.forEach(
        (g) => g.suggestionProvider = o.value
      ), u;
    }),
    fetchSectionSuggestionsBasedOnEdits: (i) => y(void 0, null, function* () {
      const u = [];
      return yield us(() => y(void 0, null, function* () {
        const g = yield s("section");
        if (!g)
          return !0;
        const m = yield pe.fetchSectionSuggestions(
          t.value,
          n.value,
          g
        );
        if (!m)
          return !1;
        let p = m.filter(
          (w) => a(w)
        );
        const h = m.filter(
          (w) => !a(w)
        );
        return p = p.slice(0, i), u.push(...p), h.forEach((w) => {
          w && !c(w) && (w.isListable = !1, e.commit("suggestions/addSectionSuggestion", w));
        }), u.length >= i;
      })), u.forEach(
        (g) => g.suggestionProvider = o.value
      ), u;
    })
  };
}, mv = {
  /**@type Array */
  mtRequestsPending: [],
  /** @type Translation */
  currentTranslation: null,
  /** @type String */
  currentMTProvider: "",
  /** @type {{ type: String, id: String }} */
  currentSuggestionFilters: {
    type: Zn,
    id: Zn
  },
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
}, pv = {
  /**
   * @return {function(number): SectionSuggestion[]}
   */
  getSectionSuggestionsSliceByIndex: (e, t, n, o) => (s) => o["suggestions/getSectionSuggestionsForPair"](e.sourceLanguage, e.targetLanguage).filter(
    (c) => c.suggestionProvider.type === e.currentSuggestionFilters.type && c.suggestionProvider.id === e.currentSuggestionFilters.id
  ).slice(
    n.suggestions.maxSuggestionsPerSlice * s,
    n.suggestions.maxSuggestionsPerSlice * (s + 1)
  ),
  /**
   * @return {function(number): ArticleSuggestion[]}
   */
  getPageSuggestionsSliceByIndex: (e, t, n, o) => (s) => o["suggestions/getPageSuggestionsForPair"](e.sourceLanguage, e.targetLanguage).filter(
    (c) => c.suggestionProvider.type === e.currentSuggestionFilters.type && c.suggestionProvider.id === e.currentSuggestionFilters.id
  ).slice(
    n.suggestions.maxSuggestionsPerSlice * s,
    n.suggestions.maxSuggestionsPerSlice * (s + 1)
  ),
  /**
   * Returns a boolean indicating whether the current publishing target
   * is the user's sandbox
   *
   * @param {object} state
   * @return {boolean}
   */
  isSandboxTarget: (e) => e.publishTarget === "SANDBOX_SECTION"
}, hv = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => $n(a)
  );
  return s && Lm(s) ? je.parseTemplateWikitext(
    Dm(s),
    n,
    t
  ) : Promise.resolve(null);
}, Xm = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => $n(a)
  );
  return s ? je.parseTemplateWikitext(
    Dm(s),
    n,
    t
  ) : Promise.resolve(null);
}, wv = (o) => y(void 0, [o], function* ({ dispatch: e, state: t, commit: n }) {
  var a, r;
  t.cxServerToken || (yield Ya.fetchCXServerToken().then(
    (c) => {
      c.age <= 30 && (c.age = 3600);
      const l = Math.floor(Date.now() / 1e3);
      c.refreshAt = l + c.age - 30, n("setCXServerToken", c);
    },
    (c) => {
      if (c === "token-impossible") {
        const l = Math.floor(Date.now() / 1e3);
        n("setCXServerToken", { jwt: "", refreshAt: l + 3600 * 10 });
      }
    }
  ));
  const s = Math.floor(Date.now() / 1e3);
  return ((a = t.cxServerToken) == null ? void 0 : a.refreshAt) <= s ? (n("setCXServerToken", null), e("getCXServerToken")) : (r = t.cxServerToken) == null ? void 0 : r.jwt;
}), fv = { getCXServerToken: wv }, _v = {
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
   * @param {object} state
   * @param {boolean} isRestored
   */
  setCurrentTranslationRestored(e, t) {
    e.currentTranslation.restored = t;
  },
  /**
   * @param {object} state
   * @param {Translation} translation
   */
  setCurrentTranslation(e, t) {
    e.currentTranslation = t;
  },
  /**
   * @param state
   * @param provider
   */
  setCurrentMTProvider: (e, t) => {
    e.currentMTProvider = t;
    const { sourceLanguage: n, targetLanguage: o } = e, s = Q.getStorageKey(
      n,
      o
    );
    mw.storage.set(s, t);
  },
  /**
   * @param state
   * @param {{ type: String, id: String|null }} filters
   */
  setCurrentSuggestionFilters: (e, t) => {
    e.currentSuggestionFilters = t;
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
}, vv = {
  namespaced: !0,
  state: mv,
  getters: pv,
  actions: fv,
  mutations: _v
}, Sv = window.Vuex.createStore, yv = Sv({
  modules: { translator: q_, suggestions: f1, mediawiki: O1, application: vv }
});
function Cv() {
  return Wm().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Wm() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const kv = typeof Proxy == "function", xv = "devtools-plugin:setup", bv = "plugin:settings:set";
let An, yc;
function $v() {
  var e;
  return An !== void 0 || (typeof window != "undefined" && window.performance ? (An = !0, yc = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (An = !0, yc = global.perf_hooks.performance) : An = !1), An;
}
function Vv() {
  return $v() ? yc.now() : Date.now();
}
class Ev {
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
        return Vv();
      }
    }, n && n.on(bv, (r, c) => {
      r === this.plugin.id && this.fallbacks.setSettings(c);
    }), this.proxiedOn = new Proxy({}, {
      get: (r, c) => this.target ? this.target.on[c] : (...l) => {
        this.onQueue.push({
          method: c,
          args: l
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (r, c) => this.target ? this.target[c] : c === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(c) ? (...l) => (this.targetQueue.push({
        method: c,
        args: l,
        resolve: () => {
        }
      }), this.fallbacks[c](...l)) : (...l) => new Promise((d) => {
        this.targetQueue.push({
          method: c,
          args: l,
          resolve: d
        });
      })
    });
  }
  setRealTarget(t) {
    return y(this, null, function* () {
      this.target = t;
      for (const n of this.onQueue)
        this.target.on[n.method](...n.args);
      for (const n of this.targetQueue)
        n.resolve(yield this.target[n.method](...n.args));
    });
  }
}
function Av(e, t) {
  const n = e, o = Wm(), s = Cv(), a = kv && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(xv, e, t);
  else {
    const r = a ? new Ev(n, s) : null;
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
const Km = window.Vue.getCurrentInstance, eo = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const pt = window.Vue.computed, is = window.Vue.unref, Dv = window.Vue.watchEffect, Ym = window.Vue.defineComponent, Tv = window.Vue.reactive, Qm = window.Vue.h, bi = window.Vue.provide, Lv = window.Vue.ref, Jm = window.Vue.watch, Bv = window.Vue.shallowRef, Pv = window.Vue.shallowReactive, Fv = window.Vue.nextTick, Pt = typeof window != "undefined";
function Mv(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const G = Object.assign;
function $i(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = Be(s) ? s.map(e) : e(s);
  }
  return n;
}
const rs = () => {
}, Be = Array.isArray;
function R(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Nv = /\/$/, Uv = (e) => e.replace(Nv, "");
function Vi(e, t, n = "/") {
  let o, s = {}, a = "", r = "";
  const c = t.indexOf("#");
  let l = t.indexOf("?");
  return c < l && c >= 0 && (l = -1), l > -1 && (o = t.slice(0, l), a = t.slice(l + 1, c > -1 ? c : t.length), s = e(a)), c > -1 && (o = o || t.slice(0, c), r = t.slice(c, t.length)), o = Rv(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + r,
    path: o,
    query: s,
    hash: r
  };
}
function Iv(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function iu(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function ru(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && an(t.matched[o], n.matched[s]) && Zm(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function an(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Zm(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!zv(e[n], t[n]))
      return !1;
  return !0;
}
function zv(e, t) {
  return Be(e) ? cu(e, t) : Be(t) ? cu(t, e) : e === t;
}
function cu(e, t) {
  return Be(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function Rv(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return R(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
var ds;
(function(e) {
  e.pop = "pop", e.push = "push";
})(ds || (ds = {}));
var cs;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(cs || (cs = {}));
function Ov(e) {
  if (!e)
    if (Pt) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Uv(e);
}
const Hv = /^[^#]+#/;
function jv(e, t) {
  return e.replace(Hv, "#") + t;
}
function qv(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const Qa = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function Gv(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if ({}.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const a = document.querySelector(e.el);
        if (o && a) {
          R(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch (a) {
        R(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) {
      ({}).NODE_ENV !== "production" && R(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = qv(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function lu(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Cc = /* @__PURE__ */ new Map();
function Xv(e, t) {
  Cc.set(e, t);
}
function Wv(e) {
  const t = Cc.get(e);
  return Cc.delete(e), t;
}
let Kv = () => location.protocol + "//" + location.host;
function ep(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let c = s.includes(e.slice(a)) ? e.slice(a).length : 1, l = s.slice(c);
    return l[0] !== "/" && (l = "/" + l), iu(l, "");
  }
  return iu(n, e) + o + s;
}
function Yv(e, t, n, o) {
  let s = [], a = [], r = null;
  const c = ({ state: g }) => {
    const m = ep(e, location), p = n.value, h = t.value;
    let w = 0;
    if (g) {
      if (n.value = m, t.value = g, r && r === p) {
        r = null;
        return;
      }
      w = h ? g.position - h.position : 0;
    } else
      o(m);
    s.forEach((f) => {
      f(n.value, p, {
        delta: w,
        type: ds.pop,
        direction: w ? w > 0 ? cs.forward : cs.back : cs.unknown
      });
    });
  };
  function l() {
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
    g.state && g.replaceState(G({}, g.state, { scroll: Qa() }), "");
  }
  function u() {
    for (const g of a)
      g();
    a = [], window.removeEventListener("popstate", c), window.removeEventListener("beforeunload", i);
  }
  return window.addEventListener("popstate", c), window.addEventListener("beforeunload", i, {
    passive: !0
  }), {
    pauseListeners: l,
    listen: d,
    destroy: u
  };
}
function uu(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Qa() : null
  };
}
function Qv(e) {
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
  function a(l, d, i) {
    const u = e.indexOf("#"), g = u > -1 ? (n.host && document.querySelector("base") ? e : e.slice(u)) + l : Kv() + e + l;
    try {
      t[i ? "replaceState" : "pushState"](d, "", g), s.value = d;
    } catch (m) {
      ({}).NODE_ENV !== "production" ? R("Error with push/replace State", m) : console.error(m), n[i ? "replace" : "assign"](g);
    }
  }
  function r(l, d) {
    const i = G({}, t.state, uu(
      s.value.back,
      // keep back and forward entries but override current position
      l,
      s.value.forward,
      !0
    ), d, { position: s.value.position });
    a(l, i, !0), o.value = l;
  }
  function c(l, d) {
    const i = G(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: l,
        scroll: Qa()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && R(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(i.current, i, !0);
    const u = G({}, uu(o.value, l, null), { position: i.position + 1 }, d);
    a(l, u, !1), o.value = l;
  }
  return {
    location: o,
    state: s,
    push: c,
    replace: r
  };
}
function Jv(e) {
  e = Ov(e);
  const t = Qv(e), n = Yv(e, t.state, t.location, t.replace);
  function o(a, r = !0) {
    r || n.pauseListeners(), history.go(a);
  }
  const s = G({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: jv.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function Zv(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && R(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), Jv(e);
}
function eS(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function tp(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const It = {
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
var du;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(du || (du = {}));
const tS = {
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
    return `Redirected from "${e.fullPath}" to "${oS(t)}" via a navigation guard.`;
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
function to(e, t) {
  return {}.NODE_ENV !== "production" ? G(new Error(tS[e](t)), {
    type: e,
    [kc]: !0
  }, t) : G(new Error(), {
    type: e,
    [kc]: !0
  }, t);
}
function _t(e, t) {
  return e instanceof Error && kc in e && (t == null || !!(e.type & t));
}
const nS = ["params", "query", "hash"];
function oS(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of nS)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const gu = "[^/]+?", sS = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, aS = /[.+*?^${}()[\]/\\]/g;
function iS(e, t) {
  const n = G({}, sS, t), o = [];
  let s = n.start ? "^" : "";
  const a = [];
  for (const d of e) {
    const i = d.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !d.length && (s += "/");
    for (let u = 0; u < d.length; u++) {
      const g = d[u];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (g.type === 0)
        u || (s += "/"), s += g.value.replace(aS, "\\$&"), m += 40;
      else if (g.type === 1) {
        const { value: p, repeatable: h, optional: w, regexp: f } = g;
        a.push({
          name: p,
          repeatable: h,
          optional: w
        });
        const _ = f || gu;
        if (_ !== gu) {
          m += 10;
          try {
            new RegExp(`(${_})`);
          } catch (V) {
            throw new Error(`Invalid custom RegExp for param "${p}" (${_}): ` + V.message);
          }
        }
        let S = h ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
        u || (S = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        w && d.length < 2 ? `(?:/${S})` : "/" + S), w && (S += "?"), s += S, m += 20, w && (m += -8), h && (m += -20), _ === ".*" && (m += -50);
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
  function c(d) {
    const i = d.match(r), u = {};
    if (!i)
      return null;
    for (let g = 1; g < i.length; g++) {
      const m = i[g] || "", p = a[g - 1];
      u[p.name] = m && p.repeatable ? m.split("/") : m;
    }
    return u;
  }
  function l(d) {
    let i = "", u = !1;
    for (const g of e) {
      (!u || !i.endsWith("/")) && (i += "/"), u = !1;
      for (const m of g)
        if (m.type === 0)
          i += m.value;
        else if (m.type === 1) {
          const { value: p, repeatable: h, optional: w } = m, f = p in d ? d[p] : "";
          if (Be(f) && !h)
            throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
          const _ = Be(f) ? f.join("/") : f;
          if (!_)
            if (w)
              g.length < 2 && (i.endsWith("/") ? i = i.slice(0, -1) : u = !0);
            else
              throw new Error(`Missing required param "${p}"`);
          i += _;
        }
    }
    return i || "/";
  }
  return {
    re: r,
    score: o,
    keys: a,
    parse: c,
    stringify: l
  };
}
function rS(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function cS(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = rS(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (mu(o))
      return 1;
    if (mu(s))
      return -1;
  }
  return s.length - o.length;
}
function mu(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const lS = {
  type: 0,
  value: ""
}, uS = /[a-zA-Z0-9_]/;
function dS(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[lS]];
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
  let c = 0, l, d = "", i = "";
  function u() {
    d && (n === 0 ? a.push({
      type: 0,
      value: d
    }) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`), a.push({
      type: 1,
      value: d,
      regexp: i,
      repeatable: l === "*" || l === "+",
      optional: l === "*" || l === "?"
    })) : t("Invalid state to consume buffer"), d = "");
  }
  function g() {
    d += l;
  }
  for (; c < e.length; ) {
    if (l = e[c++], l === "\\" && n !== 2) {
      o = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (d && u(), r()) : l === ":" ? (u(), n = 1) : g();
        break;
      case 4:
        g(), n = o;
        break;
      case 1:
        l === "(" ? n = 2 : uS.test(l) ? g() : (u(), n = 0, l !== "*" && l !== "?" && l !== "+" && c--);
        break;
      case 2:
        l === ")" ? i[i.length - 1] == "\\" ? i = i.slice(0, -1) + l : n = 3 : i += l;
        break;
      case 3:
        u(), n = 0, l !== "*" && l !== "?" && l !== "+" && c--, i = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${d}"`), u(), r(), s;
}
function gS(e, t, n) {
  const o = iS(dS(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const r of o.keys)
      a.has(r.name) && R(`Found duplicated params with name "${r.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(r.name);
  }
  const s = G(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function mS(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = wu({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(i) {
    return o.get(i);
  }
  function a(i, u, g) {
    const m = !g, p = pS(i);
    ({}).NODE_ENV !== "production" && _S(p, u), p.aliasOf = g && g.record;
    const h = wu(t, i), w = [
      p
    ];
    if ("alias" in i) {
      const S = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const V of S)
        w.push(G({}, p, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: g ? g.record.components : p.components,
          path: V,
          // we might be the child of an alias
          aliasOf: g ? g.record : p
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let f, _;
    for (const S of w) {
      const { path: V } = S;
      if (u && V[0] !== "/") {
        const A = u.record.path, b = A[A.length - 1] === "/" ? "" : "/";
        S.path = u.record.path + (V && b + V);
      }
      if ({}.NODE_ENV !== "production" && S.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (f = gS(S, u, h), {}.NODE_ENV !== "production" && u && V[0] === "/" && vS(f, u), g ? (g.alias.push(f), {}.NODE_ENV !== "production" && fS(g, f)) : (_ = _ || f, _ !== f && _.alias.push(f), m && i.name && !hu(f) && r(i.name)), p.children) {
        const A = p.children;
        for (let b = 0; b < A.length; b++)
          a(A[b], f, g && g.children[b]);
      }
      g = g || f, (f.record.components && Object.keys(f.record.components).length || f.record.name || f.record.redirect) && l(f);
    }
    return _ ? () => {
      r(_);
    } : rs;
  }
  function r(i) {
    if (tp(i)) {
      const u = o.get(i);
      u && (o.delete(i), n.splice(n.indexOf(u), 1), u.children.forEach(r), u.alias.forEach(r));
    } else {
      const u = n.indexOf(i);
      u > -1 && (n.splice(u, 1), i.record.name && o.delete(i.record.name), i.children.forEach(r), i.alias.forEach(r));
    }
  }
  function c() {
    return n;
  }
  function l(i) {
    let u = 0;
    for (; u < n.length && cS(i, n[u]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[u].record.path || !np(i, n[u])); )
      u++;
    n.splice(u, 0, i), i.record.name && !hu(i) && o.set(i.record.name, i);
  }
  function d(i, u) {
    let g, m = {}, p, h;
    if ("name" in i && i.name) {
      if (g = o.get(i.name), !g)
        throw to(1, {
          location: i
        });
      if ({}.NODE_ENV !== "production") {
        const _ = Object.keys(i.params || {}).filter((S) => !g.keys.find((V) => V.name === S));
        _.length && R(`Discarded invalid param(s) "${_.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = g.record.name, m = G(
        // paramsFromLocation is a new object
        pu(
          u.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((_) => !_.optional).map((_) => _.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && pu(i.params, g.keys.map((_) => _.name))
      ), p = g.stringify(m);
    } else if ("path" in i)
      p = i.path, {}.NODE_ENV !== "production" && !p.startsWith("/") && R(`The Matcher cannot resolve relative paths but received "${p}". Unless you directly called \`matcher.resolve("${p}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((_) => _.re.test(p)), g && (m = g.parse(p), h = g.record.name);
    else {
      if (g = u.name ? o.get(u.name) : n.find((_) => _.re.test(u.path)), !g)
        throw to(1, {
          location: i,
          currentLocation: u
        });
      h = g.record.name, m = G({}, u.params, i.params), p = g.stringify(m);
    }
    const w = [];
    let f = g;
    for (; f; )
      w.unshift(f.record), f = f.parent;
    return {
      name: h,
      path: p,
      params: m,
      matched: w,
      meta: wS(w)
    };
  }
  return e.forEach((i) => a(i)), { addRoute: a, resolve: d, removeRoute: r, getRoutes: c, getRecordMatcher: s };
}
function pu(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function pS(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: hS(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function hS(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function hu(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function wS(e) {
  return e.reduce((t, n) => G(t, n.meta), {});
}
function wu(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function xc(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function fS(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(xc.bind(null, n)))
      return R(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(xc.bind(null, n)))
      return R(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function _S(e, t) {
  t && t.record.name && !e.name && !e.path && R(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function vS(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(xc.bind(null, n)))
      return R(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function np(e, t) {
  return t.children.some((n) => n === e || np(e, n));
}
const op = /#/g, SS = /&/g, yS = /\//g, CS = /=/g, kS = /\?/g, sp = /\+/g, xS = /%5B/g, bS = /%5D/g, ap = /%5E/g, $S = /%60/g, ip = /%7B/g, VS = /%7C/g, rp = /%7D/g, ES = /%20/g;
function qc(e) {
  return encodeURI("" + e).replace(VS, "|").replace(xS, "[").replace(bS, "]");
}
function AS(e) {
  return qc(e).replace(ip, "{").replace(rp, "}").replace(ap, "^");
}
function bc(e) {
  return qc(e).replace(sp, "%2B").replace(ES, "+").replace(op, "%23").replace(SS, "%26").replace($S, "`").replace(ip, "{").replace(rp, "}").replace(ap, "^");
}
function DS(e) {
  return bc(e).replace(CS, "%3D");
}
function TS(e) {
  return qc(e).replace(op, "%23").replace(kS, "%3F");
}
function LS(e) {
  return e == null ? "" : TS(e).replace(yS, "%2F");
}
function gs(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && R(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function BS(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(sp, " "), r = a.indexOf("="), c = gs(r < 0 ? a : a.slice(0, r)), l = r < 0 ? null : gs(a.slice(r + 1));
    if (c in t) {
      let d = t[c];
      Be(d) || (d = t[c] = [d]), d.push(l);
    } else
      t[c] = l;
  }
  return t;
}
function fu(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = DS(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Be(o) ? o.map((a) => a && bc(a)) : [o && bc(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function PS(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = Be(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const FS = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), _u = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), Ja = Symbol({}.NODE_ENV !== "production" ? "router" : ""), cp = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), $c = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function ho() {
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
function nn(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((r, c) => {
    const l = (u) => {
      u === !1 ? c(to(4, {
        from: n,
        to: t
      })) : u instanceof Error ? c(u) : eS(u) ? c(to(2, {
        from: t,
        to: u
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof u == "function" && a.push(u), r());
    }, d = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? MS(l, t, n) : l);
    let i = Promise.resolve(d);
    if (e.length < 3 && (i = i.then(l)), {}.NODE_ENV !== "production" && e.length > 2) {
      const u = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof d == "object" && "then" in d)
        i = i.then((g) => l._called ? g : (R(u), Promise.reject(new Error("Invalid navigation guard"))));
      else if (d !== void 0 && !l._called) {
        R(u), c(new Error("Invalid navigation guard"));
        return;
      }
    }
    i.catch((u) => c(u));
  });
}
function MS(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && R(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function Ei(e, t, n, o) {
  const s = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && R(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const r in a.components) {
      let c = a.components[r];
      if ({}.NODE_ENV !== "production") {
        if (!c || typeof c != "object" && typeof c != "function")
          throw R(`Component "${r}" in record with path "${a.path}" is not a valid component. Received "${String(c)}".`), new Error("Invalid route component");
        if ("then" in c) {
          R(`Component "${r}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const l = c;
          c = () => l;
        } else
          c.__asyncLoader && // warn only once per component
          !c.__warnedDefineAsync && (c.__warnedDefineAsync = !0, R(`Component "${r}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[r]))
        if (NS(c)) {
          const d = (c.__vccOpts || c)[t];
          d && s.push(nn(d, n, o, a, r));
        } else {
          let l = c();
          ({}).NODE_ENV !== "production" && !("catch" in l) && (R(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), l = Promise.resolve(l)), s.push(() => l.then((d) => {
            if (!d)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = Mv(d) ? d.default : d;
            a.components[r] = i;
            const g = (i.__vccOpts || i)[t];
            return g && nn(g, n, o, a, r)();
          }));
        }
    }
  }
  return s;
}
function NS(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function vu(e) {
  const t = eo(Ja), n = eo(cp), o = pt(() => t.resolve(is(e.to))), s = pt(() => {
    const { matched: l } = o.value, { length: d } = l, i = l[d - 1], u = n.matched;
    if (!i || !u.length)
      return -1;
    const g = u.findIndex(an.bind(null, i));
    if (g > -1)
      return g;
    const m = Su(l[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Su(i) === m && // avoid comparing the child with its parent
      u[u.length - 1].path !== m ? u.findIndex(an.bind(null, l[d - 2])) : g
    );
  }), a = pt(() => s.value > -1 && RS(n.params, o.value.params)), r = pt(() => s.value > -1 && s.value === n.matched.length - 1 && Zm(n.params, o.value.params));
  function c(l = {}) {
    return zS(l) ? t[is(e.replace) ? "replace" : "push"](
      is(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(rs) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && Pt) {
    const l = Km();
    if (l) {
      const d = {
        route: o.value,
        isActive: a.value,
        isExactActive: r.value
      };
      l.__vrl_devtools = l.__vrl_devtools || [], l.__vrl_devtools.push(d), Dv(() => {
        d.route = o.value, d.isActive = a.value, d.isExactActive = r.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: pt(() => o.value.href),
    isActive: a,
    isExactActive: r,
    navigate: c
  };
}
const US = /* @__PURE__ */ Ym({
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
  useLink: vu,
  setup(e, { slots: t }) {
    const n = Tv(vu(e)), { options: o } = eo(Ja), s = pt(() => ({
      [yu(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [yu(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
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
}), IS = US;
function zS(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function RS(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!Be(s) || s.length !== o.length || o.some((a, r) => a !== s[r]))
      return !1;
  }
  return !0;
}
function Su(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const yu = (e, t, n) => e != null ? e : t != null ? t : n, OS = /* @__PURE__ */ Ym({
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
    ({}).NODE_ENV !== "production" && jS();
    const o = eo($c), s = pt(() => e.route || o.value), a = eo(_u, 0), r = pt(() => {
      let d = is(a);
      const { matched: i } = s.value;
      let u;
      for (; (u = i[d]) && !u.components; )
        d++;
      return d;
    }), c = pt(() => s.value.matched[r.value]);
    bi(_u, pt(() => r.value + 1)), bi(FS, c), bi($c, s);
    const l = Lv();
    return Jm(() => [l.value, c.value, e.name], ([d, i, u], [g, m, p]) => {
      i && (i.instances[u] = d, m && m !== i && d && d === g && (i.leaveGuards.size || (i.leaveGuards = m.leaveGuards), i.updateGuards.size || (i.updateGuards = m.updateGuards))), d && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!m || !an(i, m) || !g) && (i.enterCallbacks[u] || []).forEach((h) => h(d));
    }, { flush: "post" }), () => {
      const d = s.value, i = e.name, u = c.value, g = u && u.components[i];
      if (!g)
        return Cu(n.default, { Component: g, route: d });
      const m = u.props[i], p = m ? m === !0 ? d.params : typeof m == "function" ? m(d) : m : null, w = Qm(g, G({}, p, t, {
        onVnodeUnmounted: (f) => {
          f.component.isUnmounted && (u.instances[i] = null);
        },
        ref: l
      }));
      if ({}.NODE_ENV !== "production" && Pt && w.ref) {
        const f = {
          depth: r.value,
          name: u.name,
          path: u.path,
          meta: u.meta
        };
        (Be(w.ref) ? w.ref.map((S) => S.i) : [w.ref.i]).forEach((S) => {
          S.__vrv_devtools = f;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Cu(n.default, { Component: w, route: d }) || w
      );
    };
  }
});
function Cu(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const HS = OS;
function jS() {
  const e = Km(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    R(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function wo(e, t) {
  const n = G({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => ZS(o, ["instances", "children", "aliasOf"]))
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
function Os(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let qS = 0;
function GS(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = qS++;
  Av({
    id: "org.vuejs.router" + (o ? "." + o : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (s) => {
    typeof s.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), s.on.inspectComponent((i, u) => {
      i.instanceData && i.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: wo(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: i, componentInstance: u }) => {
      if (u.__vrv_devtools) {
        const g = u.__vrv_devtools;
        i.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: lp
        });
      }
      Be(u.__vrl_devtools) && (u.__devtoolsApi = s, u.__vrl_devtools.forEach((g) => {
        let m = gp, p = "";
        g.isExactActive ? (m = dp, p = "This is exactly active") : g.isActive && (m = up, p = "This link is active"), i.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: p,
          backgroundColor: m
        });
      }));
    }), Jm(t.currentRoute, () => {
      l(), s.notifyComponentUpdate(), s.sendInspectorTree(c), s.sendInspectorState(c);
    });
    const a = "router:navigations:" + o;
    s.addTimelineLayer({
      id: a,
      label: `Router${o ? " " + o : ""} Navigations`,
      color: 4237508
    }), t.onError((i, u) => {
      s.addTimelineEvent({
        layerId: a,
        event: {
          title: "Error during Navigation",
          subtitle: u.fullPath,
          logType: "error",
          time: s.now(),
          data: { error: i },
          groupId: u.meta.__navigationId
        }
      });
    });
    let r = 0;
    t.beforeEach((i, u) => {
      const g = {
        guard: Os("beforeEach"),
        from: wo(u, "Current Location during this navigation"),
        to: wo(i, "Target location")
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
    }), t.afterEach((i, u, g) => {
      const m = {
        guard: Os("afterEach")
      };
      g ? (m.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, m.status = Os("❌")) : m.status = Os("✅"), m.from = wo(u, "Current Location during this navigation"), m.to = wo(i, "Target location"), s.addTimelineEvent({
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
    const c = "router-inspector:" + o;
    s.addInspector({
      id: c,
      label: "Routes" + (o ? " " + o : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function l() {
      if (!d)
        return;
      const i = d;
      let u = n.getRoutes().filter((g) => !g.parent);
      u.forEach(hp), i.filter && (u = u.filter((g) => (
        // save matches state based on the payload
        Vc(g, i.filter.toLowerCase())
      ))), u.forEach((g) => pp(g, t.currentRoute.value)), i.rootNodes = u.map(mp);
    }
    let d;
    s.on.getInspectorTree((i) => {
      d = i, i.app === e && i.inspectorId === c && l();
    }), s.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === c) {
        const g = n.getRoutes().find((m) => m.record.__vd_id === i.nodeId);
        g && (i.state = {
          options: WS(g)
        });
      }
    }), s.sendInspectorTree(c), s.sendInspectorState(c);
  });
}
function XS(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function WS(e) {
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
        display: e.keys.map((o) => `${o.name}${XS(o)}`).join(" "),
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
const lp = 15485081, up = 2450411, dp = 8702998, KS = 2282478, gp = 16486972, YS = 6710886;
function mp(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: KS
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: gp
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: lp
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
    backgroundColor: YS
  });
  let o = n.__vd_id;
  return o == null && (o = String(QS++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(mp)
  };
}
let QS = 0;
const JS = /^\/(.*)\/([a-z]*)$/;
function pp(e, t) {
  const n = t.matched.length && an(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => an(o, e.record))), e.children.forEach((o) => pp(o, t));
}
function hp(e) {
  e.__vd_match = !1, e.children.forEach(hp);
}
function Vc(e, t) {
  const n = String(e.re).match(JS);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => Vc(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = gs(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => Vc(r, t));
}
function ZS(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function ey(e) {
  const t = mS(e.routes, e), n = e.parseQuery || BS, o = e.stringifyQuery || fu, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = ho(), r = ho(), c = ho(), l = Bv(It);
  let d = It;
  Pt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = $i.bind(null, (v) => "" + v), u = $i.bind(null, LS), g = (
    // @ts-expect-error: intentionally avoid the type check
    $i.bind(null, gs)
  );
  function m(v, D) {
    let E, L;
    return tp(v) ? (E = t.getRecordMatcher(v), L = D) : L = v, t.addRoute(L, E);
  }
  function p(v) {
    const D = t.getRecordMatcher(v);
    D ? t.removeRoute(D) : {}.NODE_ENV !== "production" && R(`Cannot remove non-existent route "${String(v)}"`);
  }
  function h() {
    return t.getRoutes().map((v) => v.record);
  }
  function w(v) {
    return !!t.getRecordMatcher(v);
  }
  function f(v, D) {
    if (D = G({}, D || l.value), typeof v == "string") {
      const U = Vi(n, v, D.path), Z = t.resolve({ path: U.path }, D), Ke = s.createHref(U.fullPath);
      return {}.NODE_ENV !== "production" && (Ke.startsWith("//") ? R(`Location "${v}" resolved to "${Ke}". A resolved location cannot start with multiple slashes.`) : Z.matched.length || R(`No match found for location with path "${v}"`)), G(U, Z, {
        params: g(Z.params),
        hash: gs(U.hash),
        redirectedFrom: void 0,
        href: Ke
      });
    }
    let E;
    if ("path" in v)
      ({}).NODE_ENV !== "production" && "params" in v && !("name" in v) && // @ts-expect-error: the type is never
      Object.keys(v.params).length && R(`Path "${v.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), E = G({}, v, {
        path: Vi(n, v.path, D.path).path
      });
    else {
      const U = G({}, v.params);
      for (const Z in U)
        U[Z] == null && delete U[Z];
      E = G({}, v, {
        params: u(U)
      }), D.params = u(D.params);
    }
    const L = t.resolve(E, D), j = v.hash || "";
    ({}).NODE_ENV !== "production" && j && !j.startsWith("#") && R(`A \`hash\` should always start with the character "#". Replace "${j}" with "#${j}".`), L.params = i(g(L.params));
    const te = Iv(o, G({}, v, {
      hash: AS(j),
      path: L.path
    })), z = s.createHref(te);
    return {}.NODE_ENV !== "production" && (z.startsWith("//") ? R(`Location "${v}" resolved to "${z}". A resolved location cannot start with multiple slashes.`) : L.matched.length || R(`No match found for location with path "${"path" in v ? v.path : v}"`)), G({
      fullPath: te,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: j,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === fu ? PS(v.query) : v.query || {}
      )
    }, L, {
      redirectedFrom: void 0,
      href: z
    });
  }
  function _(v) {
    return typeof v == "string" ? Vi(n, v, l.value.path) : G({}, v);
  }
  function S(v, D) {
    if (d !== v)
      return to(8, {
        from: D,
        to: v
      });
  }
  function V(v) {
    return F(v);
  }
  function A(v) {
    return V(G(_(v), { replace: !0 }));
  }
  function b(v) {
    const D = v.matched[v.matched.length - 1];
    if (D && D.redirect) {
      const { redirect: E } = D;
      let L = typeof E == "function" ? E(v) : E;
      if (typeof L == "string" && (L = L.includes("?") || L.includes("#") ? L = _(L) : (
        // force empty params
        { path: L }
      ), L.params = {}), {}.NODE_ENV !== "production" && !("path" in L) && !("name" in L))
        throw R(`Invalid redirect found:
${JSON.stringify(L, null, 2)}
 when navigating to "${v.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return G({
        query: v.query,
        hash: v.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in L ? {} : v.params
      }, L);
    }
  }
  function F(v, D) {
    const E = d = f(v), L = l.value, j = v.state, te = v.force, z = v.replace === !0, U = b(E);
    if (U)
      return F(
        G(_(U), {
          state: typeof U == "object" ? G({}, j, U.state) : j,
          force: te,
          replace: z
        }),
        // keep original redirectedFrom if it exists
        D || E
      );
    const Z = E;
    Z.redirectedFrom = D;
    let Ke;
    return !te && ru(o, L, E) && (Ke = to(16, { to: Z, from: L }), We(
      L,
      L,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (Ke ? Promise.resolve(Ke) : Y(Z, L)).catch((he) => _t(he) ? (
      // navigation redirects still mark the router as ready
      _t(
        he,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? he : ln(he)
    ) : (
      // reject any unknown error
      Xe(he, Z, L)
    )).then((he) => {
      if (he) {
        if (_t(
          he,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          ru(o, f(he.to), Z) && // and we have done it a couple of times
          D && // @ts-expect-error: added only in dev
          (D._count = D._count ? (
            // @ts-expect-error
            D._count + 1
          ) : 1) > 30 ? (R(`Detected a possibly infinite redirection in a navigation guard when going from "${L.fullPath}" to "${Z.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : F(
            // keep options
            G({
              // preserve an existing replacement but allow the redirect to override it
              replace: z
            }, _(he.to), {
              state: typeof he.to == "object" ? G({}, j, he.to.state) : j,
              force: te
            }),
            // preserve the original redirectedFrom if any
            D || Z
          );
      } else
        he = I(Z, L, !0, z, j);
      return X(Z, L, he), he;
    });
  }
  function x(v, D) {
    const E = S(v, D);
    return E ? Promise.reject(E) : Promise.resolve();
  }
  function T(v) {
    const D = ue.values().next().value;
    return D && typeof D.runWithContext == "function" ? D.runWithContext(v) : v();
  }
  function Y(v, D) {
    let E;
    const [L, j, te] = ty(v, D);
    E = Ei(L.reverse(), "beforeRouteLeave", v, D);
    for (const U of L)
      U.leaveGuards.forEach((Z) => {
        E.push(nn(Z, v, D));
      });
    const z = x.bind(null, v, D);
    return E.push(z), ie(E).then(() => {
      E = [];
      for (const U of a.list())
        E.push(nn(U, v, D));
      return E.push(z), ie(E);
    }).then(() => {
      E = Ei(j, "beforeRouteUpdate", v, D);
      for (const U of j)
        U.updateGuards.forEach((Z) => {
          E.push(nn(Z, v, D));
        });
      return E.push(z), ie(E);
    }).then(() => {
      E = [];
      for (const U of te)
        if (U.beforeEnter)
          if (Be(U.beforeEnter))
            for (const Z of U.beforeEnter)
              E.push(nn(Z, v, D));
          else
            E.push(nn(U.beforeEnter, v, D));
      return E.push(z), ie(E);
    }).then(() => (v.matched.forEach((U) => U.enterCallbacks = {}), E = Ei(te, "beforeRouteEnter", v, D), E.push(z), ie(E))).then(() => {
      E = [];
      for (const U of r.list())
        E.push(nn(U, v, D));
      return E.push(z), ie(E);
    }).catch((U) => _t(
      U,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? U : Promise.reject(U));
  }
  function X(v, D, E) {
    c.list().forEach((L) => T(() => L(v, D, E)));
  }
  function I(v, D, E, L, j) {
    const te = S(v, D);
    if (te)
      return te;
    const z = D === It, U = Pt ? history.state : {};
    E && (L || z ? s.replace(v.fullPath, G({
      scroll: z && U && U.scroll
    }, j)) : s.push(v.fullPath, j)), l.value = v, We(v, D, E, z), ln();
  }
  let K;
  function le() {
    K || (K = s.listen((v, D, E) => {
      if (!un.listening)
        return;
      const L = f(v), j = b(L);
      if (j) {
        F(G(j, { replace: !0 }), L).catch(rs);
        return;
      }
      d = L;
      const te = l.value;
      Pt && Xv(lu(te.fullPath, E.delta), Qa()), Y(L, te).catch((z) => _t(
        z,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? z : _t(
        z,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (F(
        z.to,
        L
        // avoid an uncaught rejection, let push call triggerError
      ).then((U) => {
        _t(
          U,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !E.delta && E.type === ds.pop && s.go(-1, !1);
      }).catch(rs), Promise.reject()) : (E.delta && s.go(-E.delta, !1), Xe(z, L, te))).then((z) => {
        z = z || I(
          // after navigation, all matched components are resolved
          L,
          te,
          !1
        ), z && (E.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !_t(
          z,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-E.delta, !1) : E.type === ds.pop && _t(
          z,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), X(L, te, z);
      }).catch(rs);
    }));
  }
  let Ge = ho(), En = ho(), Mt;
  function Xe(v, D, E) {
    ln(v);
    const L = En.list();
    return L.length ? L.forEach((j) => j(v, D, E)) : ({}.NODE_ENV !== "production" && R("uncaught error during route navigation:"), console.error(v)), Promise.reject(v);
  }
  function co() {
    return Mt && l.value !== It ? Promise.resolve() : new Promise((v, D) => {
      Ge.add([v, D]);
    });
  }
  function ln(v) {
    return Mt || (Mt = !v, le(), Ge.list().forEach(([D, E]) => v ? E(v) : D()), Ge.reset()), v;
  }
  function We(v, D, E, L) {
    const { scrollBehavior: j } = e;
    if (!Pt || !j)
      return Promise.resolve();
    const te = !E && Wv(lu(v.fullPath, 0)) || (L || !E) && history.state && history.state.scroll || null;
    return Fv().then(() => j(v, D, te)).then((z) => z && Gv(z)).catch((z) => Xe(z, v, D));
  }
  const Fe = (v) => s.go(v);
  let J;
  const ue = /* @__PURE__ */ new Set(), un = {
    currentRoute: l,
    listening: !0,
    addRoute: m,
    removeRoute: p,
    hasRoute: w,
    getRoutes: h,
    resolve: f,
    options: e,
    push: V,
    replace: A,
    go: Fe,
    back: () => Fe(-1),
    forward: () => Fe(1),
    beforeEach: a.add,
    beforeResolve: r.add,
    afterEach: c.add,
    onError: En.add,
    isReady: co,
    install(v) {
      const D = this;
      v.component("RouterLink", IS), v.component("RouterView", HS), v.config.globalProperties.$router = D, Object.defineProperty(v.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => is(l)
      }), Pt && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !J && l.value === It && (J = !0, V(s.location).catch((j) => {
        ({}).NODE_ENV !== "production" && R("Unexpected error when starting the router:", j);
      }));
      const E = {};
      for (const j in It)
        Object.defineProperty(E, j, {
          get: () => l.value[j],
          enumerable: !0
        });
      v.provide(Ja, D), v.provide(cp, Pv(E)), v.provide($c, l);
      const L = v.unmount;
      ue.add(v), v.unmount = function() {
        ue.delete(v), ue.size < 1 && (d = It, K && K(), K = null, l.value = It, J = !1, Mt = !1), L();
      }, {}.NODE_ENV !== "production" && Pt && GS(v, D, t);
    }
  };
  function ie(v) {
    return v.reduce((D, E) => D.then(() => T(E)), Promise.resolve());
  }
  return un;
}
function ty(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let r = 0; r < a; r++) {
    const c = t.matched[r];
    c && (e.matched.find((d) => an(d, c)) ? o.push(c) : n.push(c));
    const l = e.matched[r];
    l && (t.matched.find((d) => an(d, l)) || s.push(l));
  }
  return [n, o, s];
}
function we() {
  return eo(Ja);
}
const ny = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), r = parseInt(e.slice(12, 14)), c = new Date(Date.UTC(t, n, o, s, a, r)), d = (/* @__PURE__ */ new Date()).getTime() - c.getTime();
  return Math.round(d / (1e3 * 3600 * 24));
}, oy = (e) => {
  const t = ny(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
}, sy = window.Vue.inject, ay = window.Vue.reactive;
var iy = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, wp = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(iy, function() {
    var n = { ar: "٠١٢٣٤٥٦٧٨٩", fa: "۰۱۲۳۴۵۶۷۸۹", ml: "൦൧൨൩൪൫൬൭൮൯", kn: "೦೧೨೩೪೫೬೭೮೯", lo: "໐໑໒໓໔໕໖໗໘໙", or: "୦୧୨୩୪୫୬୭୮୯", kh: "០១២៣៤៥៦៧៨៩", nqo: "߀߁߂߃߄߅߆߇߈߉", pa: "੦੧੨੩੪੫੬੭੮੯", gu: "૦૧૨૩૪૫૬૭૮૯", hi: "०१२३४५६७८९", my: "၀၁၂၃၄၅၆၇၈၉", ta: "௦௧௨௩௪௫௬௭௮௯", te: "౦౧౨౩౪౫౬౭౮౯", th: "๐๑๒๓๔๕๖๗๘๙", bo: "༠༡༢༣༤༥༦༧༨༩" }, o = { ab: ["ru"], abs: ["id"], ace: ["id"], ady: ["ady-cyrl"], aeb: ["aeb-arab"], "aeb-arab": ["ar"], aln: ["sq"], alt: ["ru"], ami: ["zh-hant"], an: ["es"], anp: ["hi"], arn: ["es"], arq: ["ar"], ary: ["ar"], arz: ["ar"], ast: ["es"], atj: ["fr"], av: ["ru"], avk: ["fr", "es", "ru"], awa: ["hi"], ay: ["es"], azb: ["fa"], ba: ["ru"], ban: ["id"], "ban-bali": ["ban"], bar: ["de"], bbc: ["bbc-latn"], "bbc-latn": ["id"], bcc: ["fa"], "be-tarask": ["be"], bgn: ["fa"], bh: ["bho"], bi: ["en"], bjn: ["id"], bm: ["fr"], bpy: ["bn"], bqi: ["fa"], br: ["fr"], btm: ["id"], bug: ["id"], bxr: ["ru"], ca: ["oc"], "cbk-zam": ["es"], cdo: ["nan", "zh-hant"], ce: ["ru"], co: ["it"], crh: ["crh-latn"], "crh-cyrl": ["ru"], cs: ["sk"], csb: ["pl"], cv: ["ru"], "de-at": ["de"], "de-ch": ["de"], "de-formal": ["de"], dsb: ["hsb", "de"], dtp: ["ms"], dty: ["ne"], egl: ["it"], eml: ["it"], "en-ca": ["en"], "en-gb": ["en"], "es-419": ["es"], "es-formal": ["es"], ext: ["es"], ff: ["fr"], fit: ["fi"], frc: ["fr"], frp: ["fr"], frr: ["de"], fur: ["it"], gag: ["tr"], gan: ["gan-hant", "zh-hant", "zh-hans"], "gan-hans": ["zh-hans"], "gan-hant": ["zh-hant", "zh-hans"], gcr: ["fr"], gl: ["pt"], glk: ["fa"], gn: ["es"], gom: ["gom-deva"], "gom-deva": ["hi"], gor: ["id"], gsw: ["de"], guc: ["es"], hak: ["zh-hant"], hif: ["hif-latn"], hrx: ["de"], hsb: ["dsb", "de"], ht: ["fr"], "hu-formal": ["hu"], hyw: ["hy"], ii: ["zh-cn", "zh-hans"], inh: ["ru"], io: ["eo"], iu: ["ike-cans"], jam: ["en"], jut: ["da"], jv: ["id"], kaa: ["kk-latn", "kk-cyrl"], kab: ["fr"], kbd: ["kbd-cyrl"], kbp: ["fr"], khw: ["ur"], kiu: ["tr"], kjp: ["my"], kk: ["kk-cyrl"], "kk-arab": ["kk-cyrl"], "kk-cn": ["kk-arab", "kk-cyrl"], "kk-kz": ["kk-cyrl"], "kk-latn": ["kk-cyrl"], "kk-tr": ["kk-latn", "kk-cyrl"], kl: ["da"], "ko-kp": ["ko"], koi: ["ru"], krc: ["ru"], krl: ["fi"], ks: ["ks-arab"], ksh: ["de"], ku: ["ku-latn"], "ku-arab": ["ckb"], kum: ["ru"], kv: ["ru"], lad: ["es"], lb: ["de"], lbe: ["ru"], lez: ["ru", "az"], li: ["nl"], lij: ["it"], liv: ["et"], lki: ["fa"], lld: ["it", "rm", "fur"], lmo: ["pms", "eml", "lij", "vec", "it"], ln: ["fr"], lrc: ["fa"], ltg: ["lv"], luz: ["fa"], lzh: ["zh-hant"], lzz: ["tr"], mad: ["id"], mai: ["hi"], "map-bms": ["jv", "id"], mdf: ["myv", "ru"], mg: ["fr"], mhr: ["mrj", "ru"], min: ["id"], mnw: ["my"], mo: ["ro"], mrj: ["mhr", "ru"], "ms-arab": ["ms"], mwl: ["pt"], myv: ["mdf", "ru"], mzn: ["fa"], nah: ["es"], nan: ["cdo", "zh-hant"], nap: ["it"], nb: ["nn"], nds: ["de"], "nds-nl": ["nl"], nia: ["id"], "nl-informal": ["nl"], nn: ["nb"], nrm: ["fr"], oc: ["ca", "fr"], olo: ["fi"], os: ["ru"], pcd: ["fr"], pdc: ["de"], pdt: ["de"], pfl: ["de"], pih: ["en"], pms: ["it"], pnt: ["el"], pt: ["pt-br"], "pt-br": ["pt"], qu: ["qug", "es"], qug: ["qu", "es"], rgn: ["it"], rmy: ["ro"], "roa-tara": ["it"], rue: ["uk", "ru"], rup: ["ro"], ruq: ["ruq-latn", "ro"], "ruq-cyrl": ["mk"], "ruq-latn": ["ro"], sa: ["hi"], sah: ["ru"], scn: ["it"], sco: ["en"], sdc: ["it"], sdh: ["cbk", "fa"], ses: ["fr"], sg: ["fr"], sgs: ["lt"], sh: ["bs", "sr-el", "hr"], shi: ["fr"], shy: ["shy-latn"], "shy-latn": ["fr"], sk: ["cs"], skr: ["skr-arab"], "skr-arab": ["ur", "pnb"], sli: ["de"], smn: ["fi"], sr: ["sr-ec"], srn: ["nl"], stq: ["de"], sty: ["ru"], su: ["id"], szl: ["pl"], szy: ["zh-tw", "zh-hant", "zh-hans"], tay: ["zh-tw", "zh-hant", "zh-hans"], tcy: ["kn"], tet: ["pt"], tg: ["tg-cyrl"], trv: ["zh-tw", "zh-hant", "zh-hans"], tt: ["tt-cyrl", "ru"], "tt-cyrl": ["ru"], ty: ["fr"], tyv: ["ru"], udm: ["ru"], ug: ["ug-arab"], vec: ["it"], vep: ["et"], vls: ["nl"], vmf: ["de"], vot: ["fi"], vro: ["et"], wa: ["fr"], wo: ["fr"], wuu: ["zh-hans"], xal: ["ru"], xmf: ["ka"], yi: ["he"], za: ["zh-hans"], zea: ["nl"], zgh: ["kab"], zh: ["zh-hans"], "zh-cn": ["zh-hans"], "zh-hant": ["zh-hans"], "zh-hk": ["zh-hant", "zh-hans"], "zh-mo": ["zh-hk", "zh-hant", "zh-hans"], "zh-my": ["zh-sg", "zh-hans"], "zh-sg": ["zh-hans"], "zh-tw": ["zh-hant", "zh-hans"] };
    class s {
      constructor(u) {
        this.locale = u;
      }
      convertPlural(u, g) {
        const m = /\d+=/i;
        if (!g || g.length === 0)
          return "";
        for (let h = 0; h < g.length; h++) {
          const w = g[h];
          if (m.test(w)) {
            if (parseInt(w.slice(0, w.indexOf("=")), 10) === u)
              return w.slice(w.indexOf("=") + 1);
            g[h] = void 0;
          }
        }
        g = g.filter((h) => !!h);
        let p = this.getPluralForm(u, this.locale);
        return p = Math.min(p, g.length - 1), g[p];
      }
      getPluralForm(u, g) {
        const m = new Intl.PluralRules(g), p = m.resolvedOptions().pluralCategories, h = m.select(u);
        return ["zero", "one", "two", "few", "many", "other"].filter((w) => p.includes(w)).indexOf(h);
      }
      convertNumber(u, g = !1) {
        let m = this.digitTransformTable(this.locale), p = "";
        if (g) {
          if (parseFloat(u, 10) === u || !m)
            return u;
          const h = [];
          for (const f in m)
            h[m[f]] = f;
          m = h;
          const w = String(u);
          for (let f = 0; f < w.length; f++)
            p += m[w[f]] || w[f];
          return parseFloat(p, 10);
        }
        if (Intl.NumberFormat) {
          let h;
          const w = [...o[this.locale] || [], "en"];
          return h = Intl.NumberFormat.supportedLocalesOf(this.locale).length ? [this.locale] : w, p = new Intl.NumberFormat(h).format(u), p === "NaN" && (p = u), p;
        }
      }
      convertGrammar(u, g) {
        return u;
      }
      gender(u, g) {
        if (!g || g.length === 0)
          return "";
        for (; g.length < 2; )
          g.push(g[g.length - 1]);
        return u === "male" ? g[0] : u === "female" ? g[1] : g.length === 3 ? g[2] : g[0];
      }
      digitTransformTable(u) {
        return !!n[u] && n[u].split("");
      }
    }
    var a = { bs: class extends s {
      convertGrammar(i, u) {
        switch (u) {
          case "instrumental":
            i = "s " + i;
            break;
          case "lokativ":
            i = "o " + i;
        }
        return i;
      }
    }, default: s, dsb: class extends s {
      convertGrammar(i, u) {
        switch (u) {
          case "instrumental":
            i = "z " + i;
            break;
          case "lokatiw":
            i = "wo " + i;
        }
        return i;
      }
    }, fi: class extends s {
      convertGrammar(i, u) {
        let g = i.match(/[aou][^äöy]*$/i);
        const m = i;
        switch (i.match(/wiki$/i) && (g = !1), i.match(/[bcdfghjklmnpqrstvwxz]$/i) && (i += "i"), u) {
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
      convertGrammar(i, u) {
        if (u === "ainmlae")
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
      convertGrammar(i, u) {
        switch (u) {
          case "prefixed":
          case "תחילית":
            i.slice(0, 1) === "ו" && i.slice(0, 2) !== "וו" && (i = "ו" + i), i.slice(0, 1) === "ה" && (i = i.slice(1)), (i.slice(0, 1) < "א" || i.slice(0, 1) > "ת") && (i = "־" + i);
        }
        return i;
      }
    }, hsb: class extends s {
      convertGrammar(i, u) {
        switch (u) {
          case "instrumental":
            i = "z " + i;
            break;
          case "lokatiw":
            i = "wo " + i;
        }
        return i;
      }
    }, hu: class extends s {
      convertGrammar(i, u) {
        switch (u) {
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
      convertGrammar(i, u) {
        return u === "genitive" && (i.slice(-1) === "ա" ? i = i.slice(0, -1) + "այի" : i.slice(-1) === "ո" ? i = i.slice(0, -1) + "ոյի" : i.slice(-4) === "գիրք" ? i = i.slice(0, -4) + "գրքի" : i += "ի"), i;
      }
    }, la: class extends s {
      convertGrammar(i, u) {
        switch (u) {
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
      convertGrammar(i, u) {
        let g, m, p, h;
        switch (g = "мæ", m = "", p = "", h = "", i.match(/тæ$/i) ? (i = i.slice(0, -1), g = "æм") : i.match(/[аæеёиоыэюя]$/i) ? m = "й" : i.match(/у$/i) ? i.slice(-2, -1).match(/[аæеёиоыэюя]$/i) || (m = "й") : i.match(/[бвгджзйклмнопрстфхцчшщьъ]$/i) || (p = "-"), u) {
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
      convertGrammar(i, u) {
        return u === "genitive" && (i.slice(-1) === "ь" ? i = i.slice(0, -1) + "я" : i.slice(-2) === "ия" ? i = i.slice(0, -2) + "ии" : i.slice(-2) === "ка" ? i = i.slice(0, -2) + "ки" : i.slice(-2) === "ти" ? i = i.slice(0, -2) + "тей" : i.slice(-2) === "ды" ? i = i.slice(0, -2) + "дов" : i.slice(-3) === "ник" && (i = i.slice(0, -3) + "ника")), i;
      }
    }, sl: class extends s {
      convertGrammar(i, u) {
        switch (u) {
          case "mestnik":
            i = "o " + i;
            break;
          case "orodnik":
            i = "z " + i;
        }
        return i;
      }
    }, uk: class extends s {
      convertGrammar(i, u) {
        switch (u) {
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
      constructor(u) {
        this.locale = u, this.language = new (a[u] || a.default)(u);
      }
      emit(u, g) {
        let m, p, h;
        switch (typeof u) {
          case "string":
          case "number":
            m = u;
            break;
          case "object":
            if (p = u.slice(1).map((w) => this.emit(w, g)), h = u[0].toLowerCase(), typeof this[h] != "function")
              throw new Error('unknown operation "' + h + '"');
            m = this[h](p, g);
            break;
          case "undefined":
            m = "";
            break;
          default:
            throw new Error("unexpected type in AST: " + typeof u);
        }
        return m;
      }
      concat(u) {
        let g = "";
        return u.forEach((m) => {
          g += m;
        }), g;
      }
      replace(u, g) {
        const m = parseInt(u[0], 10);
        return m < g.length ? g[m] : "$" + (m + 1);
      }
      plural(u) {
        const g = parseFloat(this.language.convertNumber(u[0], 10)), m = u.slice(1);
        return m.length ? this.language.convertPlural(g, m) : "";
      }
      gender(u) {
        const g = u[0], m = u.slice(1);
        return this.language.gender(g, m);
      }
      grammar(u) {
        const g = u[0], m = u[1];
        return m && g && this.language.convertGrammar(m, g);
      }
      wikilink(u) {
        let g, m = u[0];
        m.charAt(0) === ":" && (m = m.slice(1));
        const p = `./${m}`;
        return g = u.length === 1 ? m : u[1], `<a href="${p}" title="${m}">${g}</a>`;
      }
      extlink(u) {
        if (u.length !== 2)
          throw new Error("Expected two items in the node");
        return `<a href="${u[0]}">${u[1]}</a>`;
      }
      bidi(u) {
        const g = function(m) {
          const p = m.match(r);
          return p ? p[2] === void 0 ? "ltr" : "rtl" : null;
        }(u[0]);
        return g === "ltr" ? "‪" + u[0] + "‬" : g === "rtl" ? "‫" + u[0] + "‬" : u[0];
      }
      formatnum(u) {
        const g = !!u[1] && u[1] === "R", m = u[0];
        return typeof m == "string" || typeof m == "number" ? this.language.convertNumber(m, g) : m;
      }
      htmlattributes(u) {
        const g = {};
        for (let m = 0, p = u.length; m < p; m += 2)
          g[u[m]] = u[m + 1];
        return g;
      }
      htmlelement(u) {
        const g = u.shift(), m = u.shift();
        let p = u, h = "";
        for (const w in m)
          h += ` ${w}="${m[w]}"`;
        return Array.isArray(p) || (p = [p]), `<${g}${h}>${p.join("")}</${g}>`;
      }
    }
    class l {
      constructor(u, { wikilinks: g = !1 } = {}) {
        this.locale = u, this.wikilinks = g, this.emitter = new c(this.locale);
      }
      parse(u, g) {
        if (u.includes("{{") || u.includes("<") || this.wikilinks && u.includes("[")) {
          const m = function(p, { wikilinks: h = !1 } = {}) {
            let w = 0;
            function f(k) {
              return () => {
                for (let N = 0; N < k.length; N++) {
                  const $e = k[N]();
                  if ($e !== null)
                    return $e;
                }
                return null;
              };
            }
            function _(k) {
              const N = w, $e = [];
              for (let wt = 0; wt < k.length; wt++) {
                const ft = k[wt]();
                if (ft === null)
                  return w = N, null;
                $e.push(ft);
              }
              return $e;
            }
            function S(k, N) {
              return () => {
                const $e = w, wt = [];
                let ft = N();
                for (; ft !== null; )
                  wt.push(ft), ft = N();
                return wt.length < k ? (w = $e, null) : wt;
              };
            }
            function V(k) {
              const N = k.length;
              return () => {
                let $e = null;
                return p.slice(w, w + N) === k && ($e = k, w += N), $e;
              };
            }
            function A(k) {
              return () => {
                const N = p.slice(w).match(k);
                return N === null ? null : (w += N[0].length, N[0]);
              };
            }
            const b = A(/^\s+/), F = V("|"), x = V(":"), T = V("\\"), Y = A(/^./), X = V("$"), I = A(/^\d+/), K = V('"'), le = V("'"), Ge = A(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), En = A(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), Mt = f([Xe, A(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function Xe() {
              const k = _([T, Y]);
              return k === null ? null : k[1];
            }
            const co = f([Xe, En]), ln = f([Xe, Ge]);
            function We() {
              const k = _([X, I]);
              return k === null ? null : ["REPLACE", parseInt(k[1], 10) - 1];
            }
            const Fe = (J = A(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), ue = function(k) {
              return k.toString();
            }, () => {
              const k = J();
              return k === null ? null : ue(k);
            });
            var J, ue;
            function un() {
              const k = _([F, S(0, Ds)]);
              if (k === null)
                return null;
              const N = k[1];
              return N.length > 1 ? ["CONCAT"].concat(N) : N[0];
            }
            function ie() {
              const k = _([Fe, x, We]);
              return k === null ? null : [k[0], k[2]];
            }
            function v() {
              const k = _([Fe, x, Ds]);
              return k === null ? null : [k[0], k[2]];
            }
            function D() {
              const k = _([Fe, x]);
              return k === null ? null : [k[0], ""];
            }
            const E = f([function() {
              const k = _([f([ie, v, D]), S(0, un)]);
              return k === null ? null : k[0].concat(k[1]);
            }, function() {
              const k = _([Fe, S(0, un)]);
              return k === null ? null : [k[0]].concat(k[1]);
            }]), L = V("{{"), j = V("}}"), te = V("[["), z = V("]]"), U = V("["), Z = V("]");
            function Ke() {
              const k = _([L, E, j]);
              return k === null ? null : k[1];
            }
            const he = f([function() {
              const k = _([S(1, Ds), F, S(1, As)]);
              return k === null ? null : [["CONCAT"].concat(k[0]), ["CONCAT"].concat(k[2])];
            }, function() {
              const k = _([S(1, Ds)]);
              return k === null ? null : [["CONCAT"].concat(k[0])];
            }]);
            function ml() {
              let k = null;
              const N = _([te, he, z]);
              if (N !== null) {
                const $e = N[1];
                k = ["WIKILINK"].concat($e);
              }
              return k;
            }
            function pl() {
              let k = null;
              const N = _([U, S(1, Jp), b, S(1, As), Z]);
              return N !== null && (k = ["EXTLINK", N[1].length === 1 ? N[1][0] : ["CONCAT"].concat(N[1]), ["CONCAT"].concat(N[3])]), k;
            }
            const ti = A(/^[A-Za-z]+/);
            function Wp() {
              const k = A(/^[^"]*/), N = _([K, k, K]);
              return N === null ? null : N[1];
            }
            function Kp() {
              const k = A(/^[^']*/), N = _([le, k, le]);
              return N === null ? null : N[1];
            }
            function Yp() {
              const k = A(/^\s*=\s*/), N = _([b, ti, k, f([Wp, Kp])]);
              return N === null ? null : [N[1], N[3]];
            }
            function Qp() {
              const k = S(0, Yp)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], k);
            }
            const Jp = f([Ke, We, ml, pl, function() {
              const k = S(1, Mt)();
              return k === null ? null : k.join("");
            }]), As = f([Ke, We, ml, pl, function() {
              let k = null;
              const N = w, $e = V("<"), wt = A(/^\/?/), ft = A(/^\s*>/), ni = _([$e, ti, Qp, wt, ft]);
              if (ni === null)
                return null;
              const wl = w, fl = ni[1], oi = S(0, As)(), Zp = w, _l = _([V("</"), ti, ft]);
              if (_l === null)
                return ["CONCAT", p.slice(N, wl)].concat(oi);
              const eh = w, th = _l[1], vl = ni[2];
              if (function(dn, Ts, si, ai = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((dn = dn.toLowerCase()) !== (Ts = Ts.toLowerCase()) || ai.allowedHtmlElements.indexOf(dn) === -1)
                  return !1;
                const nh = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let Ls = 0, oh = si.length; Ls < oh; Ls += 2) {
                  const ii = si[Ls];
                  if (ai.allowedHtmlCommonAttributes.indexOf(ii) === -1 && (ai.allowedHtmlAttributesByElement[dn] || []).indexOf(ii) === -1 || ii === "style" && si[Ls + 1].search(nh) !== -1)
                    return !1;
                }
                return !0;
              }(fl, th, vl.slice(1)))
                k = ["HTMLELEMENT", fl, vl].concat(oi);
              else {
                const dn = (Ts) => Ts.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                k = ["CONCAT", dn(p.slice(N, wl))].concat(oi, dn(p.slice(Zp, eh)));
              }
              return k;
            }, function() {
              const k = S(1, ln)();
              return k === null ? null : k.join("");
            }]), Ds = f([Ke, We, function() {
              const k = S(1, co)();
              return k === null ? null : k.join("");
            }]), hl = function() {
              const k = S(0, As)();
              return k === null ? null : ["CONCAT"].concat(k);
            }();
            if (hl === null || w !== p.length)
              throw new Error("Parse error at position " + w.toString() + " in input: " + p);
            return hl;
          }(u, { wikilinks: this.wikilinks });
          return this.emitter.emit(m, g);
        }
        return this.simpleParse(u, g);
      }
      simpleParse(u, g) {
        return u.replace(/\$(\d+)/g, (m, p) => {
          const h = parseInt(p, 10) - 1;
          return g[h] !== void 0 ? g[h] : "$" + p;
        });
      }
    }
    class d {
      constructor(u) {
        this.sourceMap = /* @__PURE__ */ new Map();
      }
      load(u, g) {
        if (typeof u != "object")
          throw new Error("Invalid message source. Must be an object");
        if (g) {
          if (!/^[a-zA-Z0-9-]+$/.test(g))
            throw new Error(`Invalid locale ${g}`);
          for (const m in u)
            if (m.indexOf("@") !== 0) {
              if (typeof u[m] == "object")
                return this.load(u);
              if (typeof u[m] != "string")
                throw new Error(`Invalid message for message ${m} in ${g} locale.`);
              break;
            }
          this.sourceMap.has(g) ? this.sourceMap.set(g, Object.assign(this.sourceMap.get(g), u)) : this.sourceMap.set(g, u);
        } else
          for (g in u)
            this.load(u[g], g);
      }
      getMessage(u, g) {
        const m = this.sourceMap.get(g);
        return m ? m[u] : null;
      }
      hasLocale(u) {
        return this.sourceMap.has(u);
      }
    }
    return class {
      constructor(i, { finalFallback: u = "en", messages: g, wikilinks: m = !1 } = {}) {
        this.locale = i, this.parser = new l(this.locale, { wikilinks: m }), this.messageStore = new d(), g && this.load(g, this.locale), this.finalFallback = u, this.wikilinks = m;
      }
      load(i, u) {
        return this.messageStore.load(i, u || this.locale);
      }
      i18n(i, ...u) {
        return this.parser.parse(this.getMessage(i), u);
      }
      setLocale(i) {
        this.locale = i, this.parser = new l(this.locale, { wikilinks: this.wikilinks });
      }
      getFallbackLocales() {
        return [...o[this.locale] || [], this.finalFallback];
      }
      getMessage(i) {
        let u = this.locale, g = 0;
        const m = this.getFallbackLocales(this.locale);
        for (; u; ) {
          const p = u.split("-");
          let h = p.length;
          do {
            const w = p.slice(0, h).join("-"), f = this.messageStore.getMessage(i, w);
            if (typeof f == "string")
              return f;
            h--;
          } while (h);
          u = m[g], g++;
        }
        return i;
      }
      registerParserPlugin(i, u) {
        c.prototype[i] = u;
      }
    };
  });
})(wp);
var ry = wp.exports;
const ku = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, fp = Symbol("banana-context");
function xe() {
  const e = sy(fp);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function cy(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = ay(new ry(e.locale, e));
  return {
    install: (n) => {
      n.provide(fp, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: r } = ku(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...r) : o.textContent = t.i18n(a, ...r);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: r } = ku(s);
        o.innerHTML = t.i18n(a, ...r);
      });
    }
  };
}
const ly = window.Vuex.useStore, uy = window.Vue.computed, dy = {
  name: "CxTranslationWork",
  components: { MwRow: B, MwCol: C, MwThumbnail: Nc, MwIcon: me },
  props: {
    translation: {
      type: Xa,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e) {
    const t = ly(), n = (a, r) => {
      const c = t.getters["mediawiki/getPage"](a, r);
      return c == null ? void 0 : c.thumbnail;
    }, o = xe();
    return {
      timeagoMessage: uy(() => {
        const a = {
          days: "cx-sx-translation-work-days-since-started",
          months: "cx-sx-translation-work-months-since-started",
          years: "cx-sx-translation-work-years-since-started"
        }, r = oy(e.translation.startTimestamp);
        return o.i18n(
          a[r.postfix],
          r.value
        );
      }),
      getAutonym: O.getAutonym,
      getDir: O.getDir,
      getImage: n,
      mwIconArrowForward: Lc,
      mwIconArrowNext: Bc
    };
  }
}, Hs = window.Vue.resolveComponent, Dn = window.Vue.createVNode, vt = window.Vue.createElementVNode, xu = window.Vue.renderSlot, bu = window.Vue.withModifiers, Ai = window.Vue.toDisplayString, Di = window.Vue.withCtx, gy = window.Vue.openBlock, my = window.Vue.createElementBlock, py = window.Vue.createCommentVNode, hy = { class: "col shrink pe-4" }, wy = { class: "col" }, fy = { class: "cx-translation__details column justify-between ma-0" }, _y = { class: "row ma-0" }, vy = { class: "col grow" }, Sy = { class: "col shrink ps-2" }, yy = ["dir", "textContent"], Cy = ["dir", "textContent"], ky = ["textContent"];
function xy(e, t, n, o, s, a) {
  const r = Hs("mw-thumbnail"), c = Hs("mw-icon"), l = Hs("mw-col"), d = Hs("mw-row");
  return n.translation ? (gy(), my("div", {
    key: 0,
    class: "row cx-translation pa-4 ma-0",
    onClick: t[1] || (t[1] = bu((i) => e.$emit("click"), ["stop"]))
  }, [
    vt("div", hy, [
      Dn(r, {
        class: "cx-translation__thumbnail",
        thumbnail: o.getImage(n.translation.sourceLanguage, n.translation.sourceTitle)
      }, null, 8, ["thumbnail"])
    ]),
    vt("div", wy, [
      vt("div", fy, [
        vt("div", _y, [
          vt("div", vy, [
            xu(e.$slots, "title")
          ]),
          vt("div", Sy, [
            Dn(c, {
              class: "cx-translation__action-icon",
              icon: n.actionIcon,
              onClick: t[0] || (t[0] = bu((i) => e.$emit("action-icon-clicked"), ["stop"]))
            }, null, 8, ["icon"])
          ])
        ]),
        xu(e.$slots, "mid-content"),
        Dn(d, { class: "cx-translation__footer ma-0" }, {
          default: Di(() => [
            Dn(l, {
              class: "cx-translation__languages",
              grow: ""
            }, {
              default: Di(() => [
                vt("span", {
                  class: "mw-ui-autonym",
                  dir: o.getDir(n.translation.sourceLanguage),
                  textContent: Ai(o.getAutonym(n.translation.sourceLanguage))
                }, null, 8, yy),
                Dn(c, {
                  icon: o.mwIconArrowNext,
                  class: "mx-1",
                  size: 14
                }, null, 8, ["icon"]),
                vt("span", {
                  class: "mw-ui-autonym ma-0",
                  dir: o.getDir(n.translation.targetLanguage),
                  textContent: Ai(o.getAutonym(n.translation.targetLanguage))
                }, null, 8, Cy)
              ]),
              _: 1
            }),
            Dn(l, {
              class: "cx-translation__days-since-started",
              shrink: ""
            }, {
              default: Di(() => [
                vt("span", {
                  textContent: Ai(o.timeagoMessage)
                }, null, 8, ky)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])
    ])
  ])) : py("", !0);
}
const _p = /* @__PURE__ */ P(dy, [["render", xy]]);
const fo = window.Vue.unref, $u = window.Vue.toDisplayString, by = window.Vue.normalizeClass, $y = window.Vue.createElementVNode, Ti = window.Vue.openBlock, Vy = window.Vue.createElementBlock, Vu = window.Vue.createCommentVNode, Eu = window.Vue.createVNode, js = window.Vue.withCtx, Au = window.Vue.createBlock, Ey = ["lang", "textContent"], Ay = ["lang", "textContent"], Dy = window.Vue.computed, Ty = window.Vue.inject, Ly = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: Uc,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = Ty("colors").gray200, s = Dy(
      () => {
        var a;
        return ((a = t.translation.progress) == null ? void 0 : a.any) * 100 || 0;
      }
    );
    return (a, r) => (Ti(), Au(_p, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": fo(xm),
      onActionIconClicked: r[0] || (r[0] = (c) => a.$emit("delete-translation"))
    }, {
      title: js(() => [
        $y("h5", {
          class: by(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: $u(e.translation.sourceTitle)
        }, null, 10, Ey),
        e.translation.isLeadSectionTranslation ? Vu("", !0) : (Ti(), Vy("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: $u(e.translation.sourceSectionTitle)
        }, null, 8, Ay))
      ]),
      "mid-content": js(() => [
        e.translation.progress ? (Ti(), Au(fo(B), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: js(() => [
            Eu(fo(C), null, {
              default: js(() => [
                Eu(fo(Em), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: fo(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Vu("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, By = window.Vue.computed, Py = window.Vue.inject, ys = () => {
  const e = Py("breakpoints");
  return { isDesktop: By(
    () => !H.isMobileDomain() && e.value.tabletAndUp
  ) };
}, Fy = window.Vuex.useStore, Gc = () => {
  const e = Fy();
  return (t, n, o) => y(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    if (!s) {
      s = yield pe.fetchSectionSuggestion(
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
          s = new sn({
            sourceLanguage: t,
            targetLanguage: n,
            // suggestion source title is directly displayed to the user (it's used in v-text
            // directives in some SFCs), so use the normalized page title here
            sourceTitle: a.title
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
}, My = window.Vuex.useStore, Za = () => {
  const e = My(), t = we(), n = Gc(), { setTranslationURLParams: o } = q();
  return (s, a, r, c) => y(void 0, null, function* () {
    const l = yield n(
      a,
      r,
      s
    );
    l && (e.dispatch("application/getCXServerToken"), o(l), t.push({
      name: "sx-translation-confirmer",
      query: { eventSource: c }
    }));
  });
}, Ny = window.Vuex.useStore, Uy = window.Vue.computed, Cs = () => {
  const e = Ny(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = q();
  return { currentTranslation: Uy(
    () => e.getters["translator/getDraftTranslation"](
      s.value,
      o.value,
      t.value,
      n.value
    )
  ) };
}, Iy = window.Vuex.useStore, Xc = () => {
  const e = Za(), t = Iy(), { sourceLanguage: n, targetLanguage: o } = M(t), s = (i, u) => e(
    i,
    n.value,
    o.value,
    u
  );
  return {
    startRecentlyEditedSectionTranslation: (i) => s(i.title, "suggestion_recent_edit"),
    startNearbySectionTranslation: (i) => s(i.title, "suggestion_nearby"),
    startSearchResultSectionTranslation: (i) => s(i.title, "search_result"),
    startPageSuggestion: (i) => s(i.sourceTitle, "suggestion_no_seed"),
    startPublishedTranslation: (i) => s(i.sourceTitle, "continue_published")
  };
}, Du = window.Vue.computed, zy = window.Vuex.useStore;
function ks() {
  const e = zy(), t = Du(
    () => e.state.mediawiki.supportedLanguageCodes || []
  );
  return {
    enabledTargetLanguages: Du(
      () => e.state.mediawiki.enabledTargetLanguages
    ),
    supportedLanguageCodes: t
  };
}
const Ry = (e, t) => {
  const { sourceLanguageURLParameter: n, targetLanguageURLParameter: o } = q(), s = H.getCurrentWikiLanguageCode(), a = (u) => !e || Array.isArray(e) && e.includes(u), r = (u) => t.includes(u), c = {
    sourceLanguage: "en",
    targetLanguage: "es"
  };
  let l;
  return o.value && a(o.value) && r(o.value) ? l = o.value : a(s) && r(s) ? l = s : l = (e == null ? void 0 : e[0]) || c.targetLanguage, { sourceLanguage: [
    n.value,
    c.sourceLanguage,
    s,
    c.targetLanguage
  ].filter((u) => r(u)).find((u) => u !== l), targetLanguage: l };
}, Oy = window.Vuex.useStore, Ha = "popular", Hy = () => {
  const e = Oy(), { sourceLanguage: t, targetLanguage: n, currentSuggestionFilters: o } = M(e), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = jc();
  return { fetchSectionSuggestionsPopular: (d) => y(void 0, null, function* () {
    const i = [];
    return yield us(() => y(void 0, null, function* () {
      const u = yield pe.fetchMostPopularSectionSuggestions(
        t.value,
        n.value
      );
      let g = u.filter(
        (p) => s(p)
      );
      const m = u.filter(
        (p) => !s(p)
      );
      return g = g.slice(0, d), i.push(...g), m.forEach((p) => {
        p && !r(p) && (p.isListable = !1, e.commit("suggestions/addSectionSuggestion", p));
      }), i.length >= d;
    })), i.forEach(
      (u) => u.suggestionProvider = o.value
    ), i;
  }), fetchPageSuggestionsPopular: (d) => y(void 0, null, function* () {
    const i = [];
    return yield us(() => y(void 0, null, function* () {
      let u = yield pe.fetchMostPopularPageSuggestions(
        t.value,
        n.value
      );
      return u = u.filter(
        (g) => a(g)
      ), u = u.slice(0, d), i.push(...u), i.length >= d;
    })), i.forEach(
      (u) => u.suggestionProvider = o.value
    ), i;
  }) };
}, jy = window.Vue.ref, qy = window.Vuex.useStore, Tu = mw.loader.require("ext.cx.articletopics"), Gy = (e) => ({
  id: e.groupId,
  label: e.label,
  filters: e.topics.map((t) => ({
    id: t.topicId,
    label: t.label,
    type: ja
  }))
}), Wc = () => {
  const e = qy(), t = xe(), { currentSuggestionFilters: n } = M(e), o = {
    id: Zn,
    type: Zn,
    label: t.i18n("cx-sx-suggestions-filter-user-edit-label")
  }, s = {
    id: Ha,
    type: Ha,
    label: t.i18n("cx-sx-suggestions-filter-most-popular-label")
  }, a = {
    id: "automatic",
    label: t.i18n("cx-sx-suggestions-filter-default-group-label"),
    filters: [o, s]
  }, r = jy([
    a,
    ...Tu.map(Gy)
  ]), c = () => {
    const g = d();
    return g.type === ja ? [g, o] : [o, s];
  }, l = (g) => {
    e.commit("application/setCurrentSuggestionFilters", g);
  }, d = () => r.value.flatMap((g) => g.filters).find(i), i = (g) => n.value.type === g.type && n.value.id === g.id;
  return {
    allFilters: r,
    getFiltersSummary: c,
    selectFilter: l,
    isFilterSelected: i,
    getOresTopics: (g) => {
      const p = Tu.flatMap((h) => h.topics).find((h) => h.topicId === g);
      return p ? p.orestopics : [];
    }
  };
}, Xy = window.Vuex.useStore, ja = "topic", Wy = () => {
  const e = Xy(), { sourceLanguage: t, targetLanguage: n, currentSuggestionFilters: o } = M(e), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = jc(), { getOresTopics: c } = Wc();
  return {
    fetchPageSuggestionsByTopics: (i) => y(void 0, null, function* () {
      const u = e.state.application.currentSuggestionFilters.id, g = c(u);
      let m = yield pe.fetchPageSuggestionsByTopics(
        t.value,
        n.value,
        g
      );
      return m = m.filter(
        (p) => a(p)
      ), m = m.slice(0, i), m.forEach(
        (p) => p.suggestionProvider = o.value
      ), m;
    }),
    fetchSectionSuggestionsByTopics: (i) => y(void 0, null, function* () {
      const u = e.state.application.currentSuggestionFilters.id, g = c(u), m = [];
      return yield us(() => y(void 0, null, function* () {
        const p = yield pe.fetchSectionSuggestionsByTopics(
          t.value,
          n.value,
          g
        );
        let h = p.filter(
          (f) => s(f)
        );
        const w = p.filter(
          (f) => !s(f)
        );
        return h = h.slice(0, i), m.push(...h), w.forEach((f) => {
          f && !r(f) && (f.isListable = !1, e.commit("suggestions/addSectionSuggestion", f));
        }), m.length >= i;
      })), m.forEach(
        (p) => p.suggestionProvider = o.value
      ), m;
    })
  };
}, Ky = window.Vuex.useStore, Yy = () => {
  const e = Ky(), { currentSuggestionFilters: t } = M(e), {
    fetchPageSuggestionsBasedOnEdits: n,
    fetchSectionSuggestionsBasedOnEdits: o
  } = gv(), { fetchPageSuggestionsPopular: s, fetchSectionSuggestionsPopular: a } = Hy(), { fetchPageSuggestionsByTopics: r, fetchSectionSuggestionsByTopics: c } = Wy(), l = {
    [Zn]: n,
    [Ha]: s,
    [ja]: r
  }, d = {
    [Zn]: o,
    [Ha]: a,
    [ja]: c
  };
  return {
    getCurrentPageSuggestionProvider: () => l[t.value.type],
    getCurrentSectionSuggestionProvider: () => d[t.value.type]
  };
}, Qy = window.Vuex.useStore, Kc = () => {
  const e = Qy(), { sourceLanguage: t, targetLanguage: n } = M(e), {
    getCurrentPageSuggestionProvider: o,
    getCurrentSectionSuggestionProvider: s
  } = Yy(), a = (l) => {
    try {
      const d = l.map((i) => i.sourceTitle);
      if (d.length)
        return e.dispatch("mediawiki/fetchPageMetadata", {
          language: t.value,
          titles: d
        });
    } catch (d) {
      mw.log.error("Page suggestions fetching failed!");
    }
  };
  return {
    fetchNextSectionSuggestionsSlice: () => y(void 0, null, function* () {
      e.commit("suggestions/increaseSectionSuggestionsLoadingCount");
      const l = e.getters["suggestions/getNumberOfSectionSuggestionsToFetch"](t.value, n.value), i = yield s()(
        l
      );
      i.forEach(
        (u) => e.commit("suggestions/addSectionSuggestion", u)
      ), a(i), e.commit("suggestions/decreaseSectionSuggestionsLoadingCount");
    }),
    fetchNextPageSuggestionsSlice: () => y(void 0, null, function* () {
      e.commit("suggestions/increasePageSuggestionsLoadingCount");
      const l = e.getters["suggestions/getNumberOfPageSuggestionsToFetch"](t.value, n.value), i = yield o()(
        l
      );
      i.forEach(
        (u) => e.commit("suggestions/addPageSuggestion", u)
      ), a(i), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, Jy = window.Vuex.useStore, Yc = () => {
  const e = Jy(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = Kc();
  return () => y(void 0, null, function* () {
    const { targetLanguage: o } = M(e), s = e.getters["application/getSectionSuggestionsSliceByIndex"](0), a = e.getters["application/getPageSuggestionsSliceByIndex"](0), { maxSuggestionsPerSlice: r } = e.state.suggestions, c = s.length === r, l = a.length === r;
    c && l || (yield e.dispatch(
      "suggestions/fetchAppendixSectionTitles",
      o.value
    ), t(), n());
  });
}, Lu = window.Vue.computed, Zy = window.Vuex.useStore, Ft = () => {
  const e = Zy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = q(), s = Lu(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = Lu(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (c, l) => s.value.getTitleForLanguage(c) || s.value.getTitleForLanguage(l)
  };
}, xs = window.Vuex.useStore, bs = (e, t, n, o, s = {}) => {
  const a = mw.config.get(
    "wgContentTranslationTranslateInTarget"
  ), r = H.getCurrentWikiLanguageCode();
  return a && t !== r ? (s = be({ sx: !0 }, s), o && (s.section = o), location.href = H.getCXUrl(
    n,
    null,
    e,
    t,
    s
  ), !0) : !1;
}, { setLanguageURLParams: eC, pageURLParameter: tC, sectionURLParameter: nC } = q(), $s = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), eC(t, n);
}, vp = () => {
  const e = xs(), { enabledTargetLanguages: t, supportedLanguageCodes: n } = ks();
  return () => y(void 0, null, function* () {
    yield e.dispatch("mediawiki/fetchSupportedLanguageCodes");
    const { sourceLanguage: o, targetLanguage: s } = Ry(
      t.value,
      n.value
    );
    bs(
      o,
      s,
      tC.value,
      nC.value
    ) || $s(e, o, s);
  });
}, Sp = () => {
  const e = xs(), t = Yc();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = M(e);
    n === o && (n = a.value, o = s.value), bs(
      n,
      o,
      null,
      null
    ) || ($s(e, n, o), t());
  };
}, oC = () => {
  const e = xs(), t = Yc();
  return (
    /** @param {Translation} translation */
    (n) => {
      const { sourceLanguage: o, targetLanguage: s, sourceTitle: a, sourceSectionTitle: r } = n;
      bs(
        o,
        s,
        a,
        r,
        { draft: !0 }
      ) || ($s(e, o, s), t());
    }
  );
}, sC = () => {
  const e = xs();
  return (t) => {
    const { sourceLanguage: n, targetLanguage: o, sourceTitle: s } = t;
    bs(
      n,
      o,
      s,
      null
    ) || $s(e, n, o);
  };
}, aC = () => {
  const e = xs(), t = Gc(), { currentLanguageTitleGroup: n, targetPageExists: o } = Ft();
  return (s, a) => y(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: r,
      targetLanguageURLParameter: c,
      setPageURLParam: l,
      clearSectionURLParameter: d
    } = q();
    s === a && (s = c.value, a = r.value);
    const i = n.value.getTitleForLanguage(s);
    bs(
      s,
      a,
      i,
      null
    ) || ($s(e, s, a), l(i), o.value && (d(), yield t(
      r.value,
      c.value,
      i
    )), e.dispatch("application/getCXServerToken"));
  });
}, iC = window.Vuex.useStore, yp = [], rC = (e, t, n) => yp.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), cC = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  yp.push(o);
}, lC = () => {
  const e = iC();
  return (t, n, o) => y(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !rC(t, n, o) && (s = yield pe.fetchSectionSuggestion(
      t,
      o,
      n
    ), cC(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, uC = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', dC = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', gC = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', mC = '<path d="M10 1a9 9 0 109 9 9 9 0 00-9-9m5 10H5V9h10z"/>', pC = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', hC = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', wC = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', fC = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', _C = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', vC = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', SC = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', yC = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', CC = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', kC = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', xC = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', bC = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', $C = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', VC = '<path d="M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z"/><path d="m11 1 3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z"/>', EC = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', AC = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', DC = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', TC = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', LC = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', BC = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', PC = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', FC = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', MC = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', Ec = uC, Cp = dC, kp = {
  ltr: gC,
  shouldFlip: !0
}, NC = mC, UC = pC, IC = hC, zC = wC, RC = fC, OC = _C, Vs = vC, Qc = SC, Jc = yC, HC = CC, xp = kC, jC = {
  langCodeMap: {
    ar: xC
  },
  default: bC
}, qC = $C, Zc = {
  ltr: VC,
  shouldFlip: !0
}, GC = EC, Es = {
  ltr: AC,
  shouldFlip: !0
}, el = {
  ltr: DC,
  shouldFlip: !0
}, XC = {
  ltr: TC,
  shouldFlip: !0
}, bp = LC, WC = BC, KC = PC, YC = FC, $p = MC;
const qs = window.Vue.withModifiers, Li = window.Vue.toDisplayString, Bi = window.Vue.createElementVNode, Ne = window.Vue.unref, Gs = window.Vue.openBlock, Bu = window.Vue.createBlock;
window.Vue.createCommentVNode;
const zt = window.Vue.createVNode, mn = window.Vue.withCtx, Pu = window.Vue.createElementBlock, QC = ["lang", "href", "textContent"], JC = {
  key: 1,
  class: "flex"
}, ZC = { key: 2 }, ek = window.Vuex.useStore, Fu = window.Vue.computed, Mu = window.Vue.ref, Pi = window.Codex.CdxButton, Fi = window.Codex.CdxIcon, tk = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: zc,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = ek(), o = Mu(!0), s = Mu(null), a = Fu(() => {
      var w;
      return (w = s.value) == null ? void 0 : w.missingSections;
    }), r = Fu(
      () => a.value && Object.keys(a.value)[0]
    );
    lC()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((w) => s.value = w).catch((w) => console.log(w)).finally(() => o.value = !1);
    const l = we();
    ys();
    const { setTranslationURLParams: d, setSectionURLParam: i } = q(), u = (w) => {
      n.dispatch("application/getCXServerToken"), d(s.value), w && i(w), l.push({
        name: "sx-translation-confirmer"
      });
    }, g = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, { startPublishedTranslation: m } = Xc();
    M(n);
    const p = sC(), h = () => {
      p(t.translation), m(t.translation);
    };
    return (w, f) => (Gs(), Bu(_p, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: g
    }, {
      title: mn(() => [
        Bi("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: f[0] || (f[0] = qs(() => {
          }, ["stop"])),
          textContent: Li(e.translation.sourceTitle)
        }, null, 8, QC)
      ]),
      "mid-content": mn(() => [
        zt(Ne(B), { class: "ma-0" }, {
          default: mn(() => [
            zt(Ne(C), null, {
              default: mn(() => [
                o.value ? (Gs(), Bu(Ne(st), { key: 0 })) : a.value ? (Gs(), Pu("div", JC, [
                  zt(Ne(Pi), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: f[1] || (f[1] = qs((_) => u(r.value), ["stop"]))
                  }, {
                    default: mn(() => [
                      zt(Ne(Fi), {
                        class: "me-1",
                        icon: Ne(Ec)
                      }, null, 8, ["icon"]),
                      Bi("span", null, Li(r.value), 1)
                    ]),
                    _: 1
                  }),
                  zt(Ne(Pi), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": w.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: f[2] || (f[2] = qs((_) => u(null), ["stop"]))
                  }, {
                    default: mn(() => [
                      zt(Ne(Fi), { icon: Ne(Jc) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : (Gs(), Pu("div", ZC, [
                  zt(Ne(Pi), {
                    class: "cx-published-translation__start-new-translation-button flex items-center pa-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: qs(h, ["stop"])
                  }, {
                    default: mn(() => [
                      zt(Ne(Fi), {
                        class: "me-1",
                        icon: Ne(Ec)
                      }, null, 8, ["icon"]),
                      Bi("span", null, Li(w.$i18n("sx-published-translation-new-translation-button-label")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
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
}, Vp = "cx-translation-session-position-", Ep = () => Vp + mw.user.sessionId(), Ap = () => {
  const e = Ep();
  let t = mw.storage.get(e);
  return t == null && (t = 0), parseInt(t);
}, nk = function() {
  const e = Ap();
  Object.keys(mw.storage.store).filter((n) => n.startsWith(Vp)).forEach((n) => mw.storage.remove(n));
  const t = Ep();
  mw.storage.set(t, e + 1);
};
let Ac = null;
function ok(e) {
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
function sk(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function ak(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = e.access_method || "mobile web", n = mw.config.get("wgDBname"), o = `cx_sx_${mw.user.sessionId()}_${t}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), r = mw.user.getName(), c = Ap(), l = {
    $schema: "/analytics/mediawiki/content_translation_event/1.4.0",
    translation_type: "section",
    wiki_db: n,
    access_method: t,
    user_name: r,
    web_session_id: mw.user.sessionId(),
    web_pageview_id: mw.user.getPageviewToken(),
    user_is_anonymous: a,
    content_translation_session_id: o,
    content_translation_session_position: c
  };
  let d;
  return a ? d = Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, l, e))
  ) : d = ok(r).then((i) => {
    Ac = i, mw.eventLog.submit(
      s,
      Object.assign({}, l, e, {
        user_global_edit_count: i,
        user_global_edit_count_bucket: sk(i)
      })
    );
  }), d.then(() => {
    nk();
  });
}
const ik = window.Vue.inject, Dp = Symbol("event-logging-context"), ht = function() {
  const e = ik(Dp);
  if (!e)
    throw new Error("No event logging method provided!!!");
  return e;
}, rk = () => ({
  install: (e) => {
    e.provide(Dp, ak);
  }
}), Nu = window.Vuex.useStore, ck = () => {
  const e = Nu(), { commit: t } = Nu(), { sourceLanguage: n, targetLanguage: o } = M(e), s = ht();
  return (a) => y(void 0, null, function* () {
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
const lk = {
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
      type: Xa,
      default: null
    }
  },
  emits: ["update:modelValue", "continue-translation", "discard-translation"],
  setup(e, { emit: t }) {
    const n = () => t("update:modelValue", !1), o = ck();
    return { closeDialog: n, deleteTranslation: () => {
      o(e.translation), n();
    } };
  }
}, uk = window.Vue.resolveDirective, Mi = window.Vue.createElementVNode, dk = window.Vue.withDirectives, Uu = window.Vue.resolveComponent, Iu = window.Vue.createVNode, zu = window.Vue.withCtx, gk = window.Vue.openBlock, mk = window.Vue.createBlock, pk = { class: "pa-4" }, hk = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" };
function wk(e, t, n, o, s, a) {
  const r = Uu("mw-button"), c = Uu("mw-dialog"), l = uk("i18n");
  return gk(), mk(c, {
    value: n.modelValue,
    class: "sx-confirm-back-navigation-dialog",
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.gray700,
    header: !1,
    "min-height": "unset"
  }, {
    footer: zu(() => [
      Mi("div", hk, [
        Iu(r, {
          class: "grow py-3",
          large: "",
          label: e.$i18n("sx-translation-deletion-cancel-button-label"),
          onClick: o.closeDialog
        }, null, 8, ["label", "onClick"]),
        Iu(r, {
          class: "grow py-3",
          large: "",
          destructive: "",
          label: e.$i18n("sx-translation-deletion-confirm-button-label"),
          onClick: o.deleteTranslation
        }, null, 8, ["label", "onClick"])
      ])
    ]),
    default: zu(() => [
      Mi("div", pk, [
        dk(Mi("span", null, null, 512), [
          [l, void 0, "sx-confirm-translation-deletion-dialog-body"]
        ])
      ])
    ]),
    _: 1
  }, 8, ["value", "overlay-color"]);
}
const fk = /* @__PURE__ */ P(lk, [["render", wk]]);
function _k(e, t, n) {
  return y(this, null, function* () {
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
    return s.length ? s : n ? (yield vk(t, n)).filter((r) => e.includes(r)) : [];
  });
}
function Ru(e, t, n) {
  return y(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(O.sortByAutonym) : (yield _k(e, t, n)).sort(O.sortByAutonym);
  });
}
function vk(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function Sk() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function yk(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
function Ck(e) {
  const t = e.length;
  return t < 10 ? "few-results" : t < 30 ? "some-results" : "many-results";
}
const kk = window.Vue.computed;
function xk(e, t) {
  const n = kk(() => {
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
const Ni = window.Vue.ref, Ou = window.Vue.watch, bk = window.Vue.computed;
function $k(e, t, n) {
  const o = Ni(""), s = Ni(-1), a = Ni(null), r = () => {
    s.value++, s.value >= c.value.length && (s.value = 0);
  }, c = bk(
    () => e.value ? t.value : [...n, ...t.value]
  ), l = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return Ou(e, () => {
    s.value = -1;
  }), Ou(s, () => y(this, null, function* () {
    var d;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = c.value[s.value], (d = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || d.scrollIntoView(!1);
  })), { next: r, prev: l, langSelectorContainer: a, selectedLanguage: o };
}
function tl(e, t, n) {
  let o;
  const s = (...a) => {
    const r = this, c = () => {
      o = null, n || e.apply(r, a);
    };
    n && !o && e.apply(r, a), (!o || t) && (clearTimeout(o), o = setTimeout(c, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const Ui = window.Vue.ref, Vk = window.Vue.watch, Ek = window.Vue.onMounted, Hu = window.Vue.computed, Ak = {
  name: "MwLanguageSelector",
  components: {
    MwInput: Mc
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
      default: Sk
    }
  },
  emits: ["select", "close"],
  setup(e, t) {
    const n = Ui(null), o = Ui(""), s = Ui([]), a = Hu(
      () => yk(s.value)
    ), r = Hu(
      () => Ck(s.value)
    ), c = (f) => t.emit("select", f), l = () => t.emit("close"), { autocompletion: d, onTabSelect: i } = xk(
      o,
      s
    ), { next: u, prev: g, langSelectorContainer: m, selectedLanguage: p } = $k(o, s, e.suggestions), h = () => {
      if (o.value && e.languages.includes(o.value)) {
        c(o.value);
        return;
      }
      if (p.value) {
        c(p.value);
        return;
      }
      if (s.value.length === 1) {
        c(s.value[0]);
        return;
      }
    };
    return Vk(o, tl(() => y(this, null, function* () {
      s.value = yield Ru(
        e.languages,
        o.value,
        e.searchAPI
      );
    }), 300)), Ek(() => y(this, null, function* () {
      e.autofocus && setTimeout(() => n.value.focus(), 500), s.value = yield Ru(
        e.languages,
        "",
        e.searchAPI
      );
    })), {
      autocompletion: d,
      close: l,
      getAutonym: O.getAutonym,
      getDir: O.getDir,
      langSelectorContainer: m,
      mwIconClose: Vn,
      mwIconSearch: bm,
      next: u,
      onEnter: h,
      onTabSelect: i,
      prev: g,
      resultsDisplayClass: r,
      searchInputElement: n,
      searchQuery: o,
      searchResultsByScript: a,
      select: c,
      selectedLanguage: p
    };
  }
}, Xs = window.Vue.renderSlot, Dk = window.Vue.resolveComponent, ju = window.Vue.createVNode, _o = window.Vue.withModifiers, vo = window.Vue.withKeys, Rt = window.Vue.createElementVNode, Tk = window.Vue.resolveDirective, Ws = window.Vue.withDirectives, Ii = window.Vue.renderList, zi = window.Vue.Fragment, St = window.Vue.openBlock, yt = window.Vue.createElementBlock, qu = window.Vue.toDisplayString, Ks = window.Vue.normalizeClass, Ri = window.Vue.createCommentVNode, Lk = {
  ref: "langSelectorContainer",
  class: "mw-ui-language-selector"
}, Bk = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, Pk = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, Fk = { class: "results px-3 pt-4" }, Mk = { class: "results-header ps-8 pb-2" }, Nk = { class: "results-languages--suggestions pa-0 ma-0" }, Uk = ["lang", "dir", "aria-selected", "onClick", "textContent"], Ik = { class: "results px-3 pt-4" }, zk = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, Rk = ["lang", "dir", "aria-selected", "onClick", "textContent"], Ok = ["aria-selected"], Hk = { class: "no-results px-3 py-4" }, jk = { class: "ps-8" };
function qk(e, t, n, o, s, a) {
  const r = Dk("mw-input"), c = Tk("i18n");
  return St(), yt("div", Lk, [
    Xs(e.$slots, "search", {}, () => [
      Rt("div", Bk, [
        ju(r, {
          value: o.autocompletion,
          "onUpdate:value": t[0] || (t[0] = (l) => o.autocompletion = l),
          icon: o.mwIconSearch,
          "icon-size": 20,
          class: "mw-ui-language-selector__autocomplete pa-4",
          disabled: ""
        }, null, 8, ["value", "icon"]),
        ju(r, {
          ref: "searchInputElement",
          value: o.searchQuery,
          "onUpdate:value": t[1] || (t[1] = (l) => o.searchQuery = l),
          class: "mw-ui-language-selector__search pa-4",
          icon: o.mwIconSearch,
          "icon-size": 20,
          placeholder: n.placeholder,
          autofocus: n.autofocus,
          onKeydown: [
            vo(_o(o.onEnter, ["prevent"]), ["enter"]),
            vo(_o(o.next, ["stop", "prevent"]), ["down"]),
            vo(_o(o.prev, ["stop", "prevent"]), ["up"]),
            vo(_o(o.close, ["prevent"]), ["esc"]),
            vo(_o(o.onTabSelect, ["prevent"]), ["tab"])
          ]
        }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
      ])
    ]),
    Rt("section", Pk, [
      n.suggestions.length && !o.searchQuery ? Xs(e.$slots, "suggestions", { key: 0 }, () => [
        Rt("section", Fk, [
          Ws(Rt("p", Mk, null, 512), [
            [c, void 0, "cx-sx-language-selector-suggestions"]
          ]),
          Rt("ul", Nk, [
            (St(!0), yt(zi, null, Ii(n.suggestions, (l) => (St(), yt("li", {
              key: l,
              class: Ks(["language pa-2 ps-8 ma-0", l === o.selectedLanguage ? "language--selected" : ""]),
              lang: l,
              dir: o.getDir(l),
              "aria-selected": l === o.selectedLanguage || null,
              tabindex: "-1",
              role: "option",
              onClick: (d) => o.select(l),
              textContent: qu(o.getAutonym(l))
            }, null, 10, Uk))), 128))
          ])
        ])
      ]) : Ri("", !0),
      o.searchResultsByScript.length ? Xs(e.$slots, "search", { key: 1 }, () => [
        Rt("section", Ik, [
          n.suggestions.length && !o.searchQuery ? Ws((St(), yt("p", zk, null, 512)), [
            [c, void 0, "cx-sx-language-selector-all-languages"]
          ]) : Ri("", !0),
          (St(!0), yt(zi, null, Ii(o.searchResultsByScript, (l, d) => (St(), yt("ul", {
            key: d,
            class: Ks(["results-languages pa-0 ma-0 mb-6", o.resultsDisplayClass])
          }, [
            (St(!0), yt(zi, null, Ii(l, (i) => (St(), yt("li", {
              key: i,
              class: Ks(["language pa-2 ps-8 ma-0", i === o.selectedLanguage ? "language--selected" : ""]),
              lang: i,
              dir: o.getDir(i),
              role: "option",
              "aria-selected": i === o.selectedLanguage || null,
              tabindex: "-1",
              onClick: (u) => o.select(i),
              textContent: qu(o.getAutonym(i))
            }, null, 10, Rk))), 128)),
            n.allOptionEnabled && !o.searchQuery ? Ws((St(), yt("li", {
              key: 0,
              class: Ks(["language pa-2 ps-8 ma-0", o.selectedLanguage === "all" ? "language--selected" : ""]),
              role: "option",
              "aria-selected": o.selectedLanguage === "all" || null,
              tabindex: "-1",
              onClick: t[2] || (t[2] = (i) => o.select("all"))
            }, null, 10, Ok)), [
              [c, void 0, "cx-translation-list-all-languages-option-label"]
            ]) : Ri("", !0)
          ], 2))), 128))
        ])
      ]) : Xs(e.$slots, "noresults", { key: 2 }, () => [
        Rt("section", Hk, [
          Ws(Rt("h3", jk, null, 512), [
            [c, void 0, "cx-sx-language-selector-no-search-results"]
          ])
        ])
      ])
    ])
  ], 512);
}
const Tp = /* @__PURE__ */ P(Ak, [["render", qk]]);
const fe = window.Vue.unref, Gk = window.Vue.resolveDirective, Gu = window.Vue.withDirectives, So = window.Vue.openBlock, yo = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Xu = window.Vue.toDisplayString, Wu = window.Vue.withModifiers, pn = window.Vue.withCtx, Ct = window.Vue.createVNode, Xk = { class: "sx-translation-list-language-selector" }, Wk = {
  key: 0,
  class: "mw-ui-autonym"
}, Kk = ["lang", "dir", "textContent"], Yk = {
  key: 0,
  class: "mw-ui-autonym"
}, Qk = ["lang", "dir", "textContent"], Co = window.Vue.computed, Jk = window.Vue.inject, Zk = window.Vue.ref, nl = {
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
    const n = e, o = t, s = Jk("breakpoints"), a = Co(() => s.value.mobile), r = Zk(null), c = Co(() => !!r.value), l = () => r.value = "source", d = () => r.value = "target", i = () => r.value = null, u = Co(() => {
      if (!c.value)
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
    }, m = Co(
      () => n.selectedSourceLanguage === "all"
    ), p = Co(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, w) => {
      const f = Gk("i18n");
      return So(), yo("div", Xk, [
        Ct(fe(B), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: pn(() => [
            Ct(fe(C), {
              class: "flex justify-end",
              cols: "5"
            }, {
              default: pn(() => [
                Ct(fe(Le), {
                  indicator: fe(_c),
                  class: "pa-3 sx-translation-list-language-selector__button",
                  type: "text",
                  onClick: Wu(l, ["stop"])
                }, {
                  default: pn(() => [
                    m.value ? Gu((So(), yo("span", Wk, null, 512)), [
                      [f, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (So(), yo("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: fe(O.getDir)(e.selectedSourceLanguage),
                      textContent: Xu(fe(O.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, Kk))
                  ]),
                  _: 1
                }, 8, ["indicator", "onClick"])
              ]),
              _: 1
            }),
            Ct(fe(C), {
              class: "sx-translation-list-language-selector__arrow flex justify-center",
              cols: "2"
            }, {
              default: pn(() => [
                Ct(fe(me), { icon: fe(Bc) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Ct(fe(C), { cols: "5" }, {
              default: pn(() => [
                Ct(fe(Le), {
                  indicator: fe(_c),
                  class: "pa-3 sx-translation-list-language-selector__button",
                  type: "text",
                  disabled: e.targetLanguages.length < 2,
                  onClick: Wu(d, ["stop"])
                }, {
                  default: pn(() => [
                    p.value ? Gu((So(), yo("span", Yk, null, 512)), [
                      [f, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (So(), yo("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: fe(O.getDir)(e.selectedTargetLanguage),
                      textContent: Xu(fe(O.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, Qk))
                  ]),
                  _: 1
                }, 8, ["indicator", "disabled", "onClick"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Ct(fe(qe), {
          value: c.value,
          "onUpdate:value": w[0] || (w[0] = (_) => c.value = _),
          animation: "slide-up",
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-opacity": 0,
          onClose: i
        }, {
          default: pn(() => [
            Ct(fe(Tp), {
              class: "sx-translation-list-language-selector__widget col-12",
              placeholder: h.$i18n("cx-sx-language-selector-placeholder"),
              languages: u.value,
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
}, ex = window.Vue.toDisplayString, tx = window.Vue.createElementVNode, Ku = window.Vue.createVNode, Yu = window.Vue.unref, Ot = window.Vue.openBlock, Ys = window.Vue.createBlock, Qu = window.Vue.createCommentVNode, Ju = window.Vue.renderList, Zu = window.Vue.Fragment, Qs = window.Vue.createElementBlock, nx = window.Vue.normalizeClass, ed = window.Vue.withCtx, ox = ["textContent"], sx = {
  key: 1,
  class: "cx-translation-list-wrapper"
}, ax = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, Js = window.Vue.ref, kt = window.Vue.computed, ix = window.Vuex.useStore, td = {
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
    const t = e, n = Js("all"), o = Js("all"), s = ix(), a = kt(
      () => s.state.translator.translationsLoaded[t.translationStatus]
    ), { enabledTargetLanguages: r } = ks(), c = Js(!1), l = Js(null), d = kt(
      () => t.translationStatus === "draft"
    ), i = kt(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), u = kt(
      () => n.value === "all"
    ), g = kt(
      () => o.value === "all"
    ), m = kt(
      () => i.value.filter(
        (A) => (u.value || A.sourceLanguage === n.value) && (g.value || A.targetLanguage === o.value)
      ).sort((A, b) => A.lastUpdatedTimestamp < b.lastUpdatedTimestamp)
    ), p = kt(() => {
      let A = i.value.map(
        (b) => b.targetLanguage
      );
      return r.value && (A = A.filter(
        (b) => r.value.includes(b)
      )), [...new Set(A)];
    }), h = kt(() => {
      const A = i.value.map(
        (b) => b.sourceLanguage
      );
      return [...new Set(A)];
    }), w = (A) => {
      l.value = A, c.value = !0;
    }, f = kt(() => t.activeStatus === t.translationStatus), _ = we(), { setTranslationURLParams: S } = q(), V = (A) => {
      S(A), _.push({
        name: "sx-translation-confirmer"
      });
    };
    return (A, b) => f.value ? (Ot(), Ys(Yu(He), {
      key: 0,
      class: nx(`cx-translation-list--${e.translationStatus}`)
    }, {
      header: ed(() => [
        tx("h3", {
          class: "mw-ui-card__title pa-4 pt-5 mb-0",
          textContent: ex(A.$i18n(`cx-translation-label-${e.translationStatus}`))
        }, null, 8, ox)
      ]),
      default: ed(() => [
        Ku(nl, {
          "selected-source-language": n.value,
          "onUpdate:selectedSourceLanguage": b[0] || (b[0] = (F) => n.value = F),
          "selected-target-language": o.value,
          "onUpdate:selectedTargetLanguage": b[1] || (b[1] = (F) => o.value = F),
          "source-languages": h.value,
          "target-languages": p.value,
          "all-option-enabled": ""
        }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"]),
        a.value ? Qu("", !0) : (Ot(), Ys(Yu(st), { key: 0 })),
        d.value ? (Ot(), Qs("div", sx, [
          (Ot(!0), Qs(Zu, null, Ju(m.value, (F) => (Ot(), Ys(Ly, {
            key: `${e.translationStatus}-${F.key}`,
            translation: F,
            onClick: (x) => V(F),
            onDeleteTranslation: (x) => w(F)
          }, null, 8, ["translation", "onClick", "onDeleteTranslation"]))), 128))
        ])) : (Ot(), Qs("div", ax, [
          (Ot(!0), Qs(Zu, null, Ju(m.value, (F) => (Ot(), Ys(tk, {
            key: `${e.translationStatus}-${F.key}`,
            translation: F,
            onDeleteTranslation: (x) => w(F)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])),
        Ku(fk, {
          modelValue: c.value,
          "onUpdate:modelValue": b[2] || (b[2] = (F) => c.value = F),
          translation: l.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : Qu("", !0);
  }
}, rx = window.Vue.computed, cx = window.Vuex.useStore, Pe = () => {
  const e = cx(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = q();
  return { sectionSuggestion: rx(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ) };
}, nd = window.Vue.computed, lx = window.Vuex.useStore, at = () => {
  const e = lx(), { sectionSuggestion: t } = Pe(), { currentTranslation: n } = Cs(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = q(), r = nd(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), c = nd(() => {
    var d, i;
    const l = ((d = t.value) == null ? void 0 : d.targetTitle) || ((i = n.value) == null ? void 0 : i.targetTitle);
    return e.getters["mediawiki/getPage"](
      a.value,
      l
    );
  });
  return { currentSourcePage: r, currentTargetPage: c };
}, ux = window.Vue.ref, dx = window.Vue.watchEffect, gx = (e, t) => y(void 0, null, function* () {
  const n = e.language, o = e.title, s = e.articleSize, a = t.missingSections, c = (yield pe.fetchSuggestionSourceSections(
    n,
    o
  )).sections.filter((l) => l.level === "2").reduce((l, d, i, u) => {
    const g = i < u.length - 1 ? u[i + 1].byteoffset : s;
    return l[d.line] = g - d.byteoffset, l;
  }, {});
  return Object.keys(c).filter((l) => a[l]).reduce((l, d) => l + c[d], 0);
}), Oi = (e) => {
  const s = e / 5 / 200;
  return Math.ceil(s);
}, mx = (e) => {
  const t = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-whole-article",
    Math.round(t * 2) / 2,
    e
  ];
}, px = (e, t) => {
  const n = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-sections",
    Math.round(n * 2) / 2,
    e,
    t
  ];
}, Lp = () => {
  const { currentSourcePage: e } = at(), { sectionSuggestion: t } = Pe(), n = ux(null);
  return dx(() => {
    if (t.value)
      gx(
        e.value,
        t.value
      ).then((o) => {
        n.value = px(
          Oi(o),
          Object.keys(t.value.missingSections).length
        );
      });
    else if (e.value) {
      const o = Oi(e.value.articleSize);
      n.value = mx(o);
    }
  }), { translationSizeMessageArgs: n, bytesToMinutes: Oi };
};
const se = window.Vue.unref, it = window.Vue.createVNode, Ht = window.Vue.createElementVNode, Zs = window.Vue.toDisplayString, Ye = window.Vue.withCtx, hx = window.Vue.resolveDirective, Hi = window.Vue.withDirectives, Tn = window.Vue.openBlock, ko = window.Vue.createBlock, xo = window.Vue.createCommentVNode, od = window.Vue.withModifiers, wx = window.Vue.createElementBlock, fx = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, _x = { class: "col shrink pe-4" }, vx = ["lang", "dir", "textContent"], Sx = ["lang", "dir", "textContent"], yx = ["textContent"], Cx = ["textContent"], rt = window.Vue.computed, kx = window.Vue.inject, xx = window.Vuex.useStore, Dc = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [Ka, sn, Jn],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = xx(), { bytesToMinutes: o } = Lp(), s = rt(() => t.suggestion), a = rt(
      () => s.value.sourceTitle || s.value.title
    ), r = rt(
      () => n.getters["mediawiki/getPage"](
        s.value.sourceLanguage,
        a.value
      )
    ), c = rt(
      () => {
        var f;
        return (f = s.value) == null ? void 0 : f.missingSectionsCount;
      }
    ), l = rt(() => {
      var f;
      return (f = r.value) == null ? void 0 : f.description;
    }), d = rt(
      () => s.value instanceof sn
    ), i = rt(
      () => s.value instanceof Jn
    ), { sourceLanguageAutonym: u, targetLanguageAutonym: g } = M(n), m = rt(
      () => i.value ? Gw : qw
    ), p = kx("colors"), h = rt(
      () => i.value ? p.blue600 : "currentColor"
    ), w = rt(() => {
      var f;
      return o((f = r.value) == null ? void 0 : f.articleSize) < 15;
    });
    return (f, _) => {
      const S = hx("i18n");
      return s.value ? (Tn(), wx("div", fx, [
        Ht("div", _x, [
          it(se(Nc), {
            class: "cx-suggestion__thumbnail",
            thumbnail: r.value && r.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        it(se(B), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: Ye(() => [
            it(se(B), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: Ye(() => [
                it(se(C), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: Ye(() => [
                    Ht("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: s.value.sourceLanguage,
                      dir: se(O.getDir)(s.value.sourceLanguage),
                      textContent: Zs(a.value)
                    }, null, 8, vx)
                  ]),
                  _: 1
                }),
                it(se(C), { shrink: "" }, {
                  default: Ye(() => [
                    Ht("p", {
                      class: "ma-0 cx-suggestion__source-description complementary",
                      lang: s.value.sourceLanguage,
                      dir: se(O.getDir)(s.value.sourceLanguage),
                      textContent: Zs(l.value)
                    }, null, 8, Sx)
                  ]),
                  _: 1
                }),
                w.value && !d.value ? (Tn(), ko(se(C), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: Ye(() => [
                    Hi(Ht("small", null, null, 512), [
                      [S, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : xo("", !0),
                d.value ? (Tn(), ko(se(C), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
                  shrink: ""
                }, {
                  default: Ye(() => [
                    Hi(Ht("small", null, null, 512), [
                      [S, [c.value], "cx-sx-translation-suggestion-info"]
                    ])
                  ]),
                  _: 1
                })) : i.value ? (Tn(), ko(se(C), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: Ye(() => [
                    it(se(B), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: Ye(() => [
                        it(se(C), { grow: "" }, {
                          default: Ye(() => [
                            Ht("small", {
                              textContent: Zs(se(u))
                            }, null, 8, yx),
                            it(se(me), {
                              icon: se(Bc),
                              size: "14",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            Ht("small", {
                              textContent: Zs(se(g))
                            }, null, 8, Cx)
                          ]),
                          _: 1
                        }),
                        c.value ? (Tn(), ko(se(C), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: Ye(() => [
                            Hi(Ht("small", null, null, 512), [
                              [S, [
                                c.value
                              ], "cx-sx-translation-suggestion-info"]
                            ])
                          ]),
                          _: 1
                        })) : xo("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : xo("", !0)
              ]),
              _: 1
            }),
            it(se(C), { shrink: "" }, {
              default: Ye(() => [
                i.value ? xo("", !0) : (Tn(), ko(se(me), {
                  key: 0,
                  icon: se(Vn),
                  size: "24",
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: _[0] || (_[0] = od((V) => f.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                it(se(me), {
                  class: "cx-suggestion__favorite-button",
                  icon: m.value,
                  size: "24",
                  "icon-color": h.value,
                  onClick: _[1] || (_[1] = od((V) => f.$emit("bookmark"), ["stop"]))
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : xo("", !0);
    };
  }
};
const Qe = window.Vue.unref, jt = window.Vue.createVNode, qt = window.Vue.withCtx, bx = window.Vue.resolveDirective, ji = window.Vue.createElementVNode, sd = window.Vue.withDirectives, qi = window.Vue.toDisplayString, ad = window.Vue.createTextVNode, $x = window.Vue.vShow, id = window.Vue.renderList, rd = window.Vue.Fragment, bo = window.Vue.openBlock, ea = window.Vue.createElementBlock, Vx = window.Vue.normalizeClass, Ex = window.Vue.createBlock, Ax = { class: "sx-suggestions-filters" }, Dx = { class: "mb-0" }, Tx = { class: "sx-suggestions-filters__group-label mb-3" }, Lx = { class: "sx-suggestions-filters__group-filters mb-3" }, cd = window.Vue.ref, ld = window.Codex.CdxButton, Bx = window.Codex.CdxIcon, Px = window.Codex.CdxInfoChip, Fx = {
  __name: "SXSuggestionsFilters",
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = t, o = {
      "previous-edits": $p,
      popular: xp,
      topic: null
    }, { allFilters: s, isFilterSelected: a, selectFilter: r } = Wc(), c = () => {
      n("close");
    }, l = () => {
      i.value && r(i.value), c();
    }, d = cd(!1), i = cd(null), u = (m) => {
      i.value = m, d.value = !0;
    }, g = (m) => i.value ? i.value.id === m.id && i.value.type === m.type : a(m);
    return (m, p) => {
      const h = bx("i18n");
      return bo(), ea("section", Ax, [
        jt(Qe(B), {
          class: "sx-suggestions-filters__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: qt(() => [
            jt(Qe(C), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: qt(() => [
                jt(Qe(ld), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": m.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                  onClick: c
                }, {
                  default: qt(() => [
                    jt(Qe(Bx), { icon: Qe(Vs) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            jt(Qe(C), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: qt(() => [
                sd(ji("h5", Dx, null, 512), [
                  [h, void 0, "cx-sx-suggestions-filters-header"]
                ])
              ]),
              _: 1
            }),
            jt(Qe(C), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: qt(() => [
                sd(jt(Qe(ld), {
                  class: "ms-4",
                  weight: "primary",
                  action: "progressive",
                  onClick: l
                }, {
                  default: qt(() => [
                    ad(qi(m.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                  ]),
                  _: 1
                }, 512), [
                  [$x, d.value]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        jt(Qe(C), { class: "px-4" }, {
          default: qt(() => [
            (bo(!0), ea(rd, null, id(Qe(s), (w) => (bo(), ea("div", {
              key: w.id,
              class: "sx-suggestions-filters__group"
            }, [
              ji("div", Tx, qi(w.label), 1),
              ji("div", Lx, [
                (bo(!0), ea(rd, null, id(w.filters, (f) => (bo(), Ex(Qe(Px), {
                  key: f.id,
                  class: Vx(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
                    "sx-suggestions-filters__filter--active": g(f)
                  }]),
                  icon: o[f.type],
                  onClick: (_) => u(f)
                }, {
                  default: qt(() => [
                    ad(qi(f.label), 1)
                  ]),
                  _: 2
                }, 1032, ["class", "icon", "onClick"]))), 128))
              ])
            ]))), 128))
          ]),
          _: 1
        })
      ]);
    };
  }
};
const Mx = window.Vue.renderList, Nx = window.Vue.Fragment, Gi = window.Vue.openBlock, ud = window.Vue.createElementBlock, ta = window.Vue.unref, Ux = window.Vue.toDisplayString, Ix = window.Vue.createTextVNode, zx = window.Vue.normalizeClass, dd = window.Vue.withCtx, Rx = window.Vue.createBlock, gd = window.Vue.createVNode, Ox = { class: "cx-suggestion-list__filters flex px-4 pb-2" }, Hx = window.Codex.CdxInfoChip, md = window.Vue.ref, jx = window.Vue.inject, pd = window.Vue.computed, qx = window.Vue.watch, Gx = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const { getFiltersSummary: t, selectFilter: n, isFilterSelected: o } = Wc(), s = jx("breakpoints"), a = pd(() => s.value.mobile), r = md(!1), c = () => r.value = !0, l = () => r.value = !1, d = {
      "previous-edits": $p,
      popular: xp,
      topic: null
    }, i = (m) => ({
      id: m.id,
      type: m.type,
      icon: d[m.type],
      label: m.label,
      action: n
    }), u = md(t());
    qx(r, (m) => {
      m || (u.value = t());
    });
    const g = pd(() => [
      ...u.value.map(i),
      {
        id: "more",
        icon: Jc,
        label: "More",
        action: c
      }
    ]);
    return (m, p) => (Gi(), ud("div", Ox, [
      (Gi(!0), ud(Nx, null, Mx(g.value, (h) => (Gi(), Rx(ta(Hx), {
        key: h.label,
        class: zx(["cx-suggestion-list__filter py-1 me-1", { "cx-suggestion-list__filter--active": ta(o)(h) }]),
        icon: h.icon,
        onClick: (w) => h.action(h)
      }, {
        default: dd(() => [
          Ix(Ux(h.label), 1)
        ]),
        _: 2
      }, 1032, ["class", "icon", "onClick"]))), 128)),
      gd(ta(qe), {
        value: r.value,
        "onUpdate:value": p[0] || (p[0] = (h) => r.value = h),
        animation: "slide-up",
        fullscreen: a.value,
        header: !1,
        "overlay-opacity": 0
      }, {
        default: dd(() => [
          gd(ta(Fx), { onClose: l })
        ]),
        _: 1
      }, 8, ["value", "fullscreen"])
    ]));
  }
}, Xx = window.Vue.computed, Wx = () => {
  const { supportedLanguageCodes: e, enabledTargetLanguages: t } = ks(), n = Xx(() => t.value || e.value);
  return {
    supportedLanguageCodes: e,
    availableTargetLanguages: n
  };
}, $o = window.Vue.computed, hd = window.Vue.ref, Kx = window.Vue.watch, Yx = window.Vuex.useStore, Qx = () => {
  const e = Yx(), { sourceLanguage: t, targetLanguage: n, currentSuggestionFilters: o } = M(e), s = ht(), a = $o(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), r = $o(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), c = $o(
    () => !a.value && !r.value
  ), l = hd(0), d = hd(0), { maxSuggestionsPerSlice: i } = e.state.suggestions, u = 4, g = $o(
    () => e.getters["application/getSectionSuggestionsSliceByIndex"](
      l.value
    )
  ), m = $o(
    () => e.getters["application/getPageSuggestionsSliceByIndex"](
      d.value
    )
  ), p = () => {
    _(), S();
  }, {
    fetchNextSectionSuggestionsSlice: h,
    fetchNextPageSuggestionsSlice: w
  } = Kc(), f = (x) => x.length === i, _ = () => {
    const x = f(
      g.value
    ), T = (l.value + 1) % u, Y = f(
      e.getters["application/getSectionSuggestionsSliceByIndex"](T)
    );
    (!x || !Y) && h(), x && b();
  }, S = () => {
    const x = f(
      m.value
    ), T = (d.value + 1) % u, Y = f(
      e.getters["application/getPageSuggestionsSliceByIndex"](T)
    );
    (!x || !Y) && w(), x && F();
  }, V = (x) => {
    s({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", x), _();
  }, A = (x) => {
    s({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestion", x), S();
  }, b = () => l.value = (l.value + 1) % u, F = () => d.value = (d.value + 1) % u;
  return Kx(
    o,
    () => {
      d.value = 0, S(), l.value = 0, _();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: m,
    currentSectionSuggestionsSlice: g,
    discardPageSuggestion: A,
    discardSectionSuggestion: V,
    onSuggestionRefresh: p,
    pageSuggestionsLoading: r,
    sectionSuggestionsLoading: a,
    showRefreshButton: c
  };
}, Jx = window.Vuex.useStore, ol = () => {
  const e = Jx(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = Kc(), o = (d, i, u) => e.state.suggestions.pageSuggestions.find(
    (g) => g.sourceLanguage === d && g.targetLanguage === i && g.sourceTitle === u
  ), s = (d) => y(void 0, null, function* () {
    const { sourceTitle: i, sourceLanguage: u, targetLanguage: g } = d;
    yield pe.markFavorite(i, u, g);
    const m = new Jn({
      title: i,
      sourceLanguage: u,
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
    markFavoriteSuggestion: (d, i, u) => y(void 0, null, function* () {
      const g = o(
        i,
        u,
        d
      );
      g && (e.commit("suggestions/removePageSuggestion", g), n());
      const m = e.getters["suggestions/getSectionSuggestionsForArticle"](i, u, d);
      m != null && m.isListable && (e.commit(
        "suggestions/removeSectionSuggestionFromList",
        m
      ), t()), yield pe.markFavorite(
        d,
        i,
        u
      );
      const p = new Jn({
        title: d,
        sourceLanguage: i,
        targetLanguage: u
      });
      e.commit("suggestions/addFavoriteSuggestion", p);
    }),
    removeFavoriteSuggestion: (d) => (e.commit("suggestions/removeFavoriteSuggestion", d), pe.unmarkFavorite(d))
  };
};
const wd = window.Vue.toDisplayString, na = window.Vue.createElementVNode, Ln = window.Vue.createVNode, ne = window.Vue.unref, Vo = window.Vue.withCtx, Zx = window.Vue.resolveDirective, Xi = window.Vue.withDirectives, fd = window.Vue.renderList, _d = window.Vue.Fragment, Gt = window.Vue.openBlock, Wi = window.Vue.createElementBlock, Eo = window.Vue.createBlock, Ki = window.Vue.createCommentVNode, eb = window.Vue.createTextVNode, tb = window.Vue.vShow, nb = ["textContent"], ob = { class: "cx-translation-list__division-title ma-0 pa-4" }, sb = { class: "cx-translation-list__division-title ma-0 pa-4" }, ab = { class: "cx-suggestion-list__refresh-button-container justify-center" }, ib = window.Vuex.useStore, rb = window.Vue.ref, cb = window.Codex.CdxButton, lb = window.Codex.CdxIcon, ub = {
  __name: "CXSuggestionList",
  props: {
    active: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = ib(), { sourceLanguage: n, targetLanguage: o } = M(t), { supportedLanguageCodes: s, availableTargetLanguages: a } = Wx(), r = Sp(), c = (T) => r(T, o.value), l = (T) => r(n.value, T), d = Za(), i = (T) => d(
      T.sourceTitle,
      T.sourceLanguage,
      T.targetLanguage,
      "suggestion_no_seed"
    ), { startPageSuggestion: u } = Xc(), {
      currentPageSuggestionsSlice: g,
      currentSectionSuggestionsSlice: m,
      discardPageSuggestion: p,
      discardSectionSuggestion: h,
      onSuggestionRefresh: w,
      pageSuggestionsLoading: f,
      sectionSuggestionsLoading: _,
      showRefreshButton: S
    } = Qx(), V = rb(null), A = ht(), b = () => {
      A({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: n.value,
        translation_target_language: o.value
      }), w(), V.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: F, markFavoritePageSuggestion: x } = ol();
    return (T, Y) => {
      const X = Zx("i18n");
      return Xi((Gt(), Wi("div", null, [
        Ln(ne(He), { class: "cx-translation-list--suggestions pa-0 mb-0" }, {
          header: Vo(() => [
            na("h3", {
              class: "mw-ui-card__title pa-4 pt-5 mb-0",
              textContent: wd(T.$i18n("cx-suggestionlist-title"))
            }, null, 8, nb),
            Ln(Gx)
          ]),
          default: Vo(() => [
            Ln(nl, {
              "source-languages": ne(s),
              "target-languages": ne(a),
              "selected-source-language": ne(n),
              "selected-target-language": ne(o),
              "onUpdate:selectedSourceLanguage": c,
              "onUpdate:selectedTargetLanguage": l
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])
          ]),
          _: 1
        }),
        Ln(ne(He), {
          ref_key: "pageSuggestionsList",
          ref: V,
          class: "cx-translation-list--page-suggestions pa-0 mb-0"
        }, {
          default: Vo(() => [
            Xi(na("h5", ob, null, 512), [
              [X, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (Gt(!0), Wi(_d, null, fd(ne(g), (I, K) => (Gt(), Eo(Dc, {
              key: `page-suggestion-${K}`,
              suggestion: I,
              onClose: (le) => ne(p)(I),
              onClick: (le) => ne(u)(I),
              onBookmark: (le) => ne(x)(I)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            ne(f) ? (Gt(), Eo(ne(st), { key: 0 })) : Ki("", !0)
          ]),
          _: 1
        }, 512),
        Ln(ne(He), { class: "cx-translation-list--sx-suggestions pa-0 mb-0" }, {
          default: Vo(() => [
            Xi(na("h5", sb, null, 512), [
              [X, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (Gt(!0), Wi(_d, null, fd(ne(m), (I, K) => (Gt(), Eo(Dc, {
              key: `section-suggestion-${K}`,
              class: "ma-0",
              suggestion: I,
              onClose: (le) => ne(h)(I),
              onClick: (le) => i(I),
              onBookmark: (le) => ne(F)(I)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            ne(_) ? (Gt(), Eo(ne(st), { key: 0 })) : Ki("", !0)
          ]),
          _: 1
        }),
        na("div", ab, [
          ne(S) ? (Gt(), Eo(ne(cb), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: b
          }, {
            default: Vo(() => [
              Ln(ne(lb), {
                class: "me-1",
                icon: ne(bp)
              }, null, 8, ["icon"]),
              eb(" " + wd(T.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : Ki("", !0)
        ])
      ], 512)), [
        [tb, e.active]
      ]);
    };
  }
}, db = window.Vue.computed, gb = window.Vuex.useStore, mb = {
  name: "CxFavoriteList",
  components: {
    CxTranslationSuggestion: Dc,
    MwCard: He
  },
  setup() {
    we();
    const e = gb(), t = db(() => e.state.suggestions.favorites || []), n = Za(), o = (a) => n(
      a.title,
      a.sourceLanguage,
      a.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: s } = ol();
    return {
      favorites: t,
      startFavoriteTranslation: o,
      removeFavoriteSuggestion: s
    };
  }
}, pb = window.Vue.resolveDirective, hb = window.Vue.createElementVNode, wb = window.Vue.withDirectives, fb = window.Vue.renderList, _b = window.Vue.Fragment, Yi = window.Vue.openBlock, vb = window.Vue.createElementBlock, vd = window.Vue.resolveComponent, Sd = window.Vue.createBlock, yd = window.Vue.withCtx, Sb = window.Vue.createCommentVNode, yb = { class: "mw-ui-card__title pa-4 pt-5 mb-0" };
function Cb(e, t, n, o, s, a) {
  const r = vd("cx-translation-suggestion"), c = vd("mw-card"), l = pb("i18n");
  return o.favorites.length ? (Yi(), Sd(c, {
    key: 0,
    class: "cx-translation-list--favorites pa-0 mb-4"
  }, {
    header: yd(() => [
      wb(hb("h3", yb, null, 512), [
        [l, void 0, "cx-suggestion-list-favorites-division"]
      ])
    ]),
    default: yd(() => [
      (Yi(!0), vb(_b, null, fb(o.favorites, (d, i) => (Yi(), Sd(r, {
        key: `favorite-${i}`,
        suggestion: d,
        onClick: (u) => o.startFavoriteTranslation(d),
        onBookmark: (u) => o.removeFavoriteSuggestion(d)
      }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
    ]),
    _: 1
  })) : Sb("", !0);
}
const kb = /* @__PURE__ */ P(mb, [["render", Cb]]);
const xb = {
  name: "CxHelpPanel",
  components: { MwIcon: me },
  setup() {
    const e = xe();
    return { listItems: [
      {
        icon: nf,
        label: e.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation"
      },
      {
        icon: Uw,
        label: e.i18n("cx-sx-dashboard-help-panel-stats-label"),
        href: mw.util.getUrl("Special:ContentTranslationStats")
      },
      {
        icon: of,
        label: e.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation"
      }
    ] };
  }
}, bb = window.Vue.resolveDirective, oa = window.Vue.createElementVNode, $b = window.Vue.withDirectives, Vb = window.Vue.renderList, Eb = window.Vue.Fragment, Qi = window.Vue.openBlock, Ji = window.Vue.createElementBlock, Ab = window.Vue.resolveComponent, Db = window.Vue.createVNode, Tb = window.Vue.toDisplayString, Lb = { class: "cx-help-panel pa-4" }, Bb = { class: "cx-help-panel__item-list mt-6 ps-2" }, Pb = ["href"], Fb = ["textContent"];
function Mb(e, t, n, o, s, a) {
  const r = Ab("mw-icon"), c = bb("i18n");
  return Qi(), Ji("div", Lb, [
    $b(oa("h5", null, null, 512), [
      [c, void 0, "cx-sx-dashboard-help-panel-title"]
    ]),
    oa("ul", Bb, [
      (Qi(!0), Ji(Eb, null, Vb(o.listItems, (l, d) => (Qi(), Ji("li", {
        key: d,
        class: "mt-4"
      }, [
        oa("a", {
          href: l.href,
          target: "_blank"
        }, [
          Db(r, {
            class: "me-2",
            icon: l.icon
          }, null, 8, ["icon"]),
          oa("span", {
            textContent: Tb(l.label)
          }, null, 8, Fb)
        ], 8, Pb)
      ]))), 128))
    ])
  ]);
}
const Nb = /* @__PURE__ */ P(xb, [["render", Mb]]);
const Ub = window.Vue.ref, Cd = window.Vue.computed, Ib = window.Vue.watch, zb = {
  name: "CxStatsPanel",
  components: { MwCol: C, MwRow: B },
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", n = Cd(() => {
      var a, r;
      return ((r = (a = e.stats) == null ? void 0 : a[t]) == null ? void 0 : r.count) || 0;
    }), o = Cd(
      () => {
        var a, r;
        return ((r = (a = e.stats) == null ? void 0 : a[t]) == null ? void 0 : r.delta) || 0;
      }
    ), s = Ub(null);
    return Ib(
      () => e.stats,
      () => {
        const a = e.stats, r = s.value.getContext("2d"), c = Object.keys(e.stats || {}).sort(), l = c.reduce(
          (S, V) => Math.max(S, a[V].delta),
          0
        ), d = c.map((S) => a[S].delta), i = s.value.getBoundingClientRect().width, u = s.value.getBoundingClientRect().height;
        s.value.width = i, s.value.height = u;
        const g = 4, m = 6, p = 50, h = (p - g) / l;
        let w = g;
        const f = Math.floor(
          (i - g) / (m + g)
        ), _ = d.slice(
          Math.max(d.length - f, 0)
        );
        _.forEach((S, V) => {
          V === _.length - 1 && (r.fillStyle = "#36c");
          const A = p - S * h;
          r.fillRect(w, A, m, S * h), w += m + g;
        });
      }
    ), { canvasRef: s, thisMonthStats: o, total: n };
  }
}, Rb = window.Vue.resolveDirective, Bn = window.Vue.createElementVNode, Zi = window.Vue.withDirectives, kd = window.Vue.toDisplayString, xd = window.Vue.resolveComponent, er = window.Vue.withCtx, tr = window.Vue.createVNode, Ob = window.Vue.openBlock, Hb = window.Vue.createElementBlock, jb = { class: "cx-stats-panel pa-4" }, qb = ["textContent"], Gb = { class: "cx-stats-panel__monthly-stats-label" }, Xb = ["textContent"], Wb = { class: "cx-stats-panel__total-stats-label" }, Kb = {
  ref: "canvasRef",
  class: "cx-stats-panel__canvas"
};
function Yb(e, t, n, o, s, a) {
  const r = xd("mw-col"), c = xd("mw-row"), l = Rb("i18n");
  return Ob(), Hb("div", jb, [
    Zi(Bn("h5", null, null, 512), [
      [l, void 0, "cx-sx-dashboard-stats-panel-title"]
    ]),
    tr(c, null, {
      default: er(() => [
        tr(r, { class: "cx-stats-panel__monthly-stats" }, {
          default: er(() => [
            Bn("h3", {
              textContent: kd(o.thisMonthStats)
            }, null, 8, qb),
            Zi(Bn("h5", Gb, null, 512), [
              [l, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
            ])
          ]),
          _: 1
        }),
        tr(r, { class: "cx-stats-panel__total-stats" }, {
          default: er(() => [
            Bn("h3", {
              textContent: kd(o.total)
            }, null, 8, Xb),
            Zi(Bn("h5", Wb, null, 512), [
              [l, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    Bn("canvas", Kb, null, 512)
  ]);
}
const Qb = /* @__PURE__ */ P(zb, [["render", Yb]]);
const Jb = {
  name: "ExperimentalSupportBanner",
  components: { MwCol: C, MwRow: B, MwCard: He, MwIcon: me },
  data: () => ({
    mwIconLabFlask: Vm,
    learnMoreUrl: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation/Section_translation",
    feedbackUrl: "https://www.mediawiki.org/wiki/Talk:Content_translation/Section_translation"
  })
}, sa = window.Vue.resolveComponent, aa = window.Vue.createVNode, ia = window.Vue.withCtx, Zb = window.Vue.resolveDirective, Pn = window.Vue.createElementVNode, ra = window.Vue.withDirectives, e8 = window.Vue.openBlock, t8 = window.Vue.createBlock, n8 = { class: "complementary" }, o8 = { class: "complementary mt-4" }, s8 = ["href"], a8 = { class: "complementary" }, i8 = ["href"];
function r8(e, t, n, o, s, a) {
  const r = sa("mw-icon"), c = sa("mw-col"), l = sa("mw-row"), d = sa("mw-card"), i = Zb("i18n");
  return e8(), t8(d, { class: "experimental-support-banner mb-1" }, {
    default: ia(() => [
      aa(l, null, {
        default: ia(() => [
          aa(c, {
            shrink: "",
            class: "experimental-support-banner__icon me-3"
          }, {
            default: ia(() => [
              aa(r, { icon: e.mwIconLabFlask }, null, 8, ["icon"])
            ]),
            _: 1
          }),
          aa(c, null, {
            default: ia(() => [
              ra(Pn("h5", null, null, 512), [
                [i, void 0, "cx-dashboard-experimental-support-banner-title"]
              ]),
              ra(Pn("p", n8, null, 512), [
                [i, void 0, "cx-dashboard-experimental-support-banner-description"]
              ]),
              Pn("p", o8, [
                ra(Pn("a", {
                  target: "_blank",
                  href: e.learnMoreUrl
                }, null, 8, s8), [
                  [i, void 0, "cx-dashboard-experimental-support-banner-learn-more-anchor"]
                ])
              ]),
              Pn("p", a8, [
                ra(Pn("a", {
                  target: "_blank",
                  href: e.feedbackUrl
                }, null, 8, i8), [
                  [i, void 0, "cx-dashboard-experimental-support-banner-share-feedback-anchor"]
                ])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const c8 = /* @__PURE__ */ P(Jb, [["render", r8]]), { getUrlParam: l8 } = q(), Bp = () => {
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
  }, t = l8("campaign");
  return e[t];
}, u8 = () => {
  const e = Za(), t = ht(), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o,
    pageURLParameter: s
  } = q();
  return () => y(void 0, null, function* () {
    const a = Bp() || "direct_preselect";
    return t({
      event_type: "dashboard_open",
      event_source: a,
      translation_source_language: n.value,
      translation_target_language: o.value
    }), e(
      s.value,
      n.value,
      o.value,
      a
    );
  });
}, d8 = window.Vuex.useStore, ei = () => {
  const e = d8(), t = (o) => y(void 0, null, function* () {
    let s = yield je.fetchTranslations(o);
    e.commit("translator/clearTranslationsByStatus", o), s.forEach(
      (r) => e.commit("translator/addTranslation", r)
    );
    const a = {};
    for (const r of s) {
      const c = r.sourceLanguage;
      a[c] = a[c] || [], a[c].push(r);
    }
    e.commit("translator/setTranslationsLoaded", { status: o, value: !0 });
    for (const [r, c] of Object.entries(a))
      e.dispatch("mediawiki/fetchPageMetadata", {
        language: r,
        titles: c.map((l) => l.sourceTitle)
      }), c.forEach((l) => {
        const { targetLanguage: d, targetTitle: i } = l, u = !!e.getters["mediawiki/getPage"](
          d,
          i
        );
        i && !u && e.commit(
          "mediawiki/addPage",
          new ao({ title: i, pagelanguage: d })
        );
      });
  });
  return { fetchTranslationsByStatus: t, fetchAllTranslations: () => e.state.translator.translations.length ? Promise.resolve() : Promise.all([
    t("published"),
    t("draft")
  ]).catch((o) => {
    mw.log.error("[CX] Error while fetching translations", o);
  }) };
}, g8 = window.Vuex.useStore, m8 = () => {
  const e = g8();
  return () => y(void 0, null, function* () {
    if (e.state.suggestions.favorites.length)
      return;
    const t = yield pe.fetchFavorites();
    if (!t || !t.length)
      return;
    const n = {};
    for (const o of t)
      e.commit("suggestions/addFavoriteSuggestion", o), pe.fetchSectionSuggestion(
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
}, p8 = window.Vuex.useStore, h8 = () => {
  const e = ht(), t = p8(), n = u8(), { fetchAllTranslations: o } = ei(), s = Yc(), a = m8(), { pageURLParameter: r, sectionURLParameter: c, draftURLParameter: l } = q();
  return () => y(void 0, null, function* () {
    if (yield vp()(), r.value) {
      n({
        pageTitle: r.value,
        isDraftTranslation: l.value,
        sectionTitle: c.value
      });
      return;
    }
    const { sourceLanguage: i, targetLanguage: u, previousRoute: g } = M(t);
    e({
      event_type: "dashboard_open",
      event_source: (() => {
        const h = {
          "sx-article-search": "return_from_search",
          "sx-translation-confirmer": "return_from_confirmation",
          "sx-section-selector": "return_from_section_selection",
          "sx-sentence-selector": "editor_close"
        }[g.value];
        return h || Bp() || "direct";
      })(),
      translation_source_language: i.value,
      translation_target_language: u.value
    });
    try {
      yield a();
    } catch (p) {
      mw.log.error("[CX] Error while fetching favorite suggestions", p);
    }
    yield o(), s();
  });
}, bd = window.Vue.computed, w8 = window.Vue.ref, f8 = window.Vue.watch, _8 = window.Vue.watchEffect, v8 = window.Vuex.useStore, S8 = ["suggestions", "draft", "published"], y8 = () => {
  const e = v8(), { getUrlParam: t, setUrlParam: n } = q(), o = t("active-list"), s = w8(null);
  if (S8.includes(o))
    s.value = o;
  else {
    const a = bd(
      () => e.state.translator.translationsLoaded.draft
    ), r = bd(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = r.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", f8(a, (c) => {
      c && (s.value = r.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return _8(() => {
    n("active-list", s.value), window.scrollTo(0, 0);
  }), s;
}, C8 = window.Vue.computed, k8 = () => {
  const e = xe();
  return C8(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: Rw,
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
        icon: zw,
        type: "text"
      }
    }
  ]);
};
const ca = window.Vue.openBlock, nr = window.Vue.createBlock, or = window.Vue.createCommentVNode, re = window.Vue.unref, _e = window.Vue.createVNode, x8 = window.Vue.toDisplayString, b8 = window.Vue.createTextVNode, xt = window.Vue.withCtx, $8 = window.Vue.isRef, V8 = window.Vue.createElementBlock, E8 = window.Vue.computed, A8 = window.Vuex.useStore, D8 = window.Codex.CdxButton, T8 = window.Codex.CdxIcon, L8 = {
  __name: "CXDashboard",
  setup(e) {
    const t = we(), n = () => t.push({ name: "sx-article-search" });
    h8()();
    const s = A8();
    s.dispatch("translator/fetchTranslatorStats");
    const a = E8(() => s.state.translator.translatorStats), r = y8(), c = k8();
    return (l, d) => (ca(), V8("div", null, [
      l.$incompleteVersion ? (ca(), nr(c8, {
        key: 0,
        class: "col-mobile-12 col-tablet-9 col-offset-tablet-3 col-desktop-7 col-offset-desktop-2 mb-4"
      })) : or("", !0),
      _e(re(B), { class: "ma-0 py-4" }, {
        default: xt(() => [
          _e(re(D8), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: n
          }, {
            default: xt(() => [
              _e(re(T8), {
                class: "me-1",
                icon: re(Ec)
              }, null, 8, ["icon"]),
              b8(" " + x8(l.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      _e(re(B), {
        class: "ma-0",
        align: "start"
      }, {
        default: xt(() => [
          l.$mwui.breakpoint.tabletAndUp ? (ca(), nr(re(C), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: xt(() => [
              _e(re(ms), {
                id: "dashboard-list-selector--desktop",
                items: re(c),
                active: re(r),
                onSelect: d[0] || (d[0] = (i) => r.value = i)
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : or("", !0),
          _e(re(C), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: xt(() => [
              _e(kb),
              _e(ub, {
                active: re(r) === "suggestions"
              }, null, 8, ["active"]),
              _e(td, {
                "translation-status": "draft",
                "active-status": re(r)
              }, null, 8, ["active-status"]),
              _e(td, {
                "translation-status": "published",
                "active-status": re(r)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          _e(re(C), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: xt(() => [
              _e(re(B), {
                class: "ma-0",
                align: "start"
              }, {
                default: xt(() => [
                  _e(re(C), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: xt(() => [
                      _e(Qb, { stats: a.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  _e(re(C), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: xt(() => [
                      _e(Nb)
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
      l.$mwui.breakpoint.mobile ? (ca(), nr(re(Qh), {
        key: 1,
        active: re(r),
        "onUpdate:active": d[1] || (d[1] = (i) => $8(r) ? r.value = i : null),
        items: re(c)
      }, null, 8, ["active", "items"])) : or("", !0)
    ]));
  }
}, B8 = {
  name: "DashboardView",
  components: { CxDashboard: L8 }
}, P8 = window.Vue.resolveComponent, F8 = window.Vue.createVNode, M8 = window.Vue.openBlock, N8 = window.Vue.createElementBlock, U8 = { class: "cx-translation-dashboard" };
function I8(e, t, n, o, s, a) {
  const r = P8("cx-dashboard");
  return M8(), N8("main", U8, [
    F8(r, { class: "mb-4 pb-12" })
  ]);
}
const $d = /* @__PURE__ */ P(B8, [["render", I8]]), Fn = window.Vue.computed, z8 = () => {
  const { sectionSuggestion: e } = Pe(), { targetLanguageURLParameter: t } = q(), { currentTranslation: n } = Cs(), o = Fn(
    () => {
      var g, m, p;
      return (p = (m = (g = e.value) == null ? void 0 : g.orderedMissingSections) == null ? void 0 : m[0]) == null ? void 0 : p.sourceTitle;
    }
  ), s = Fn(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.missingSectionsCount;
    }
  ), a = Fn(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.presentSectionsCount;
    }
  ), { targetPageExists: r, getCurrentTitleByLanguage: c } = Ft(), l = Fn(() => r ? H.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    c(t.value, null)
  ) : null), d = (g) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : g ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : r.value ? s.value > 1 || s.value === 1 && a.value > 0 ? "cx-sx-select-section" : s.value === 1 && a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : s.value === 0 && a.value > 0 ? "cx-sx-select-section" : s.value === 0 && a.value === 0 ? "cx-sx-translation-confirmer-action-new-translation" : "" : "cx-sx-start-translation-button-label", i = Fn(() => {
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
  }), u = Fn(
    () => {
      var g;
      return !r.value || ((g = e.value) == null ? void 0 : g.missingSectionsCount) > 0;
    }
  );
  return {
    actionInformationMessageArgs: i,
    getActionButtonLabel: d,
    isProgressiveButton: u,
    targetArticlePath: l
  };
}, Pp = () => new URLSearchParams(location.search).get("force-quick-tutorial");
function R8(e) {
  return e.$el = $(e), e;
}
function O8(e, t, n, o) {
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
function H8() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function j8(e, t) {
  return y(this, null, function* () {
    yield sl(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = R8(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const q8 = window.Vue.computed, G8 = window.Vue.onMounted, X8 = window.Vue.ref;
function W8(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const K8 = {
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
    const s = q8(() => o.getHtml()), a = () => {
      o.destroy(), n.value.querySelector(".toolbar").innerHTML = "";
    }, l = {
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
    return G8(() => y(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = W8;
      const i = yield j8(l, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), o = O8(
        i,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = H8, o.focus();
    })), { sxeditor: n };
  }
}, Tc = window.Vue.createElementVNode, Y8 = window.Vue.openBlock, Q8 = window.Vue.createElementBlock, J8 = ["lang", "dir"], Z8 = /* @__PURE__ */ Tc("div", { class: "overlay-header header initial-header" }, [
  /* @__PURE__ */ Tc("div", { class: "toolbar" })
], -1), e2 = ["lang", "dir"];
function t2(e, t, n, o, s, a) {
  return Y8(), Q8("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    Z8,
    Tc("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, e2)
  ], 8, J8);
}
const n2 = /* @__PURE__ */ P(K8, [["render", t2]]);
function sl() {
  return mw.loader.using("mw.cx3.ve");
}
const o2 = window.Vuex.useStore, Fp = () => {
  const e = o2();
  return (t, n) => y(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield sl(), new Promise((s) => {
      setTimeout(() => {
        const a = Im.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, s2 = window.Vuex.useStore, al = () => {
  const e = s2();
  return (t, n, o, s = null) => y(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      o
    );
    if (a && a.content)
      return;
    const r = yield io.fetchPageContent(
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
}, a2 = window.Vuex.useStore, il = () => {
  const e = a2(), { currentSourcePage: t } = at(), n = Fp(), o = al(), {
    setSectionURLParam: s,
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: c
  } = q(), l = (u, g) => y(void 0, null, function* () {
    u() || (e.commit("application/increaseTranslationDataLoadingCounter"), yield o(
      a.value,
      r.value,
      c.value
    ), yield n(
      a.value,
      c.value
    ), e.commit("application/decreaseTranslationDataLoadingCounter")), g();
  });
  return {
    selectPageSectionByIndex: (u) => {
      const g = () => {
        var p;
        return (p = t.value.sections) == null ? void 0 : p[u];
      };
      return l(g, () => {
        const p = g();
        u === 0 ? p.originalTitle = t.value.title : s(p.originalTitle);
      });
    },
    selectPageSectionByTitle: (u) => l(() => t.value.getSectionByTitle(u), () => {
      s(u);
    })
  };
}, rl = () => (e, t, n, o = {}) => {
  H.setCXToken(e, t, n), location.href = H.getCXUrl(
    n,
    null,
    e,
    t,
    o
  );
}, i2 = (e, t, n, o) => y(void 0, null, function* () {
  var c, l, d;
  const s = ((c = t.user) == null ? void 0 : c.content) || ((l = t.mt) == null ? void 0 : l.content), a = (d = t == null ? void 0 : t.mt) == null ? void 0 : d.engine, r = yield Xm(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = r, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = r;
}), r2 = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, r;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const c = (r = t.mt) == null ? void 0 : r.engine;
      o.addProposedTranslation(c, n.mt.innerHTML), o.mtProviderUsed = c;
    }
  });
}, c2 = (e, t, n, o) => y(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return i2(e, t, n, o);
  r2(e, t);
}), l2 = (e, t, n, o) => {
  const s = [];
  for (const a of e.sections || [])
    if (o.filter(
      (c) => c.pageSectionId === parseInt(a.id)
    ).length)
      for (const c of a.subSections) {
        const l = o.find(
          (i) => i.subSectionId === c.id
        );
        if (!l)
          continue;
        const d = c2(
          c,
          l,
          t || e.title,
          n
        );
        s.push(d);
      }
  return Promise.all(s);
}, u2 = { restoreCorporaDraft: l2 }, Ao = window.Vue.computed, d2 = window.Vuex.useStore, W = () => {
  const e = d2(), { currentSourcePage: t, currentTargetPage: n } = at(), { currentMTProvider: o } = M(e), { sectionURLParameter: s } = q(), a = Ao(() => {
    var i, u;
    return s.value ? (u = t.value) == null ? void 0 : u.getSectionByTitle(s.value) : (i = t.value) == null ? void 0 : i.leadSection;
  }), r = Ao(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.isTitleSelected;
    }
  ), c = Ao(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.selectedContentTranslationUnit;
    }
  ), l = Ao(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.getProposedTranslationByMtProvider(
        o.value
      );
    }
  ), d = Ao(() => a.value.isLeadSection ? a.value.title : n.value.title);
  return {
    sourceSection: a,
    isSectionTitleSelected: r,
    selectedContentTranslationUnit: c,
    currentProposedTranslation: l,
    targetPageTitleForPublishing: d
  };
}, g2 = window.Vuex.useStore, Mp = () => {
  const e = g2();
  return (t, n) => {
    if (!e.getters["mediawiki/getLanguageTitleGroup"](t, n))
      return io.fetchLanguageTitles(t, n).then(
        (o) => o && e.commit("mediawiki/addLanguageTitleGroup", o)
      );
  };
}, m2 = window.Vuex.useStore, cl = () => {
  const e = ht(), t = m2(), n = we(), { currentSourcePage: o } = at(), { sourceLanguage: s, targetLanguage: a } = M(t), r = oC(), c = Fp(), { isDesktop: l } = ys(), d = rl(), i = al(), { sourceSection: u } = W(), g = Mp();
  return (m) => y(void 0, null, function* () {
    t.commit("application/increaseTranslationDataLoadingCounter");
    const {
      sourceLanguage: p,
      targetLanguage: h,
      sourceTitle: w,
      targetTitle: f,
      pageRevision: _,
      isLeadSectionTranslation: S
    } = m;
    if (l.value) {
      const b = {};
      S || (b.sourcesection = m.sourceSectionTitle), d(
        s.value,
        a.value,
        w,
        b
      );
      return;
    }
    H.unsetCXToken(
      p,
      h,
      w
    );
    const { setTranslationURLParams: V } = q();
    V(m), n.push({ name: "sx-sentence-selector", query: { force: !0 } }), (s.value !== p || a.value !== h) && r(m), t.dispatch("application/getCXServerToken"), t.commit("application/setCurrentTranslation", m), e({
      event_type: "dashboard_translation_continue",
      translation_id: m.sectionTranslationId,
      translation_source_language: s.value,
      translation_source_title: w,
      translation_source_section: m.sourceSectionTitle,
      translation_target_language: a.value,
      translation_target_title: m.targetTitle,
      translation_target_section: m.targetSectionTitle
    }), yield i(
      s.value,
      a.value,
      w,
      _
    ), yield c(s.value, w), yield g(s.value, w), m.restored || (yield je.fetchTranslationUnits(m.translationId).then(
      (b) => u2.restoreCorporaDraft(
        o.value,
        f,
        a,
        b
      )
    ).then(() => m.restored = !0));
    let A;
    m.isLeadSectionTranslation ? (u.value.originalTitle = m.sourceTitle, A = m.targetTitle) : A = m.targetSectionTitle, u.value.translatedTitle = A, t.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, p2 = window.Vue.ref, h2 = window.Vuex.useStore, w2 = () => {
  const e = we(), t = h2(), { isDesktop: n } = ys(), {
    pageURLParameter: o,
    sectionURLParameter: s
  } = q(), { sourceLanguage: a, targetLanguage: r } = M(t), { targetPageExists: c } = Ft(), { selectPageSectionByIndex: l, selectPageSectionByTitle: d } = il(), i = rl(), u = () => y(void 0, null, function* () {
    n.value ? i(
      a.value,
      r.value,
      o.value,
      { sourcesection: s.value }
    ) : (yield d(s.value), e.push({ name: "sx-content-comparator", query: { force: !0 } }));
  }), g = cl(), m = p2(!1), { currentTranslation: p } = Cs(), h = () => {
    p.value ? p.value.isArticleTranslation ? m.value = !0 : g(p.value) : s.value ? u() : c.value ? e.push({ name: "sx-section-selector" }) : w();
  }, w = () => y(void 0, null, function* () {
    n.value ? i(
      a.value,
      r.value,
      o.value
    ) : (l(0), Pp() || !t.getters["translator/userHasSectionTranslations"] ? e.push({ name: "sx-quick-tutorial", query: { force: !0 } }) : e.push({ name: "sx-sentence-selector", query: { force: !0 } }));
  });
  return {
    startNewTranslation: w,
    handlePrimaryButtonClick: h,
    translationConfirmationDialogOn: m
  };
};
const f2 = window.Vue.resolveDirective, Vd = window.Vue.createElementVNode, Ed = window.Vue.withDirectives, _2 = window.Vue.unref, v2 = window.Vue.withCtx, S2 = window.Vue.openBlock, y2 = window.Vue.createBlock, C2 = {
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
    const n = e, o = t, s = (d) => o("update:modelValue", d), a = xe(), r = {
      label: a.i18n(
        "cx-unreviewed-translation-dialog-review-translation-button-label"
      ),
      actionType: "progressive"
    }, c = {
      label: a.i18n("cx-unreviewed-translation-dialog-close-button-label")
    };
    function l() {
      window.open(n.targetUrl, "_blank"), s(!1);
    }
    return (d, i) => {
      const u = f2("i18n");
      return S2(), y2(_2(k2), {
        class: "cx-unreviewed-translation-dialog",
        open: e.modelValue,
        title: d.$i18n("cx-unreviewed-translation-dialog-title"),
        "close-button-label": d.$i18n("cx-unreviewed-translation-dialog-close-button-aria-label"),
        "primary-action": r,
        "default-action": c,
        "onUpdate:open": i[0] || (i[0] = (g) => s(g)),
        onPrimary: l,
        onDefault: i[1] || (i[1] = (g) => s(!1))
      }, {
        default: v2(() => [
          Ed(Vd("p", null, null, 512), [
            [u, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          Ed(Vd("a", C2, null, 512), [
            [u, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title", "close-button-label"]);
    };
  }
};
const oe = window.Vue.unref, b2 = window.Vue.resolveDirective, Do = window.Vue.createElementVNode, Ad = window.Vue.withDirectives, To = window.Vue.toDisplayString, Lo = window.Vue.openBlock, sr = window.Vue.createElementBlock, ar = window.Vue.createCommentVNode, Ue = window.Vue.createVNode, Je = window.Vue.withCtx, ir = window.Vue.createTextVNode, $2 = window.Vue.withModifiers, Dd = window.Vue.createBlock, V2 = window.Vue.Fragment, E2 = { class: "sx-translation-confirmer-body pb-4" }, A2 = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, D2 = ["textContent"], T2 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, L2 = ["href"], B2 = ["textContent"], rr = window.Vue.computed, P2 = window.Vue.inject, Td = window.Vue.ref, F2 = window.Vue.watchEffect, M2 = window.Vuex.useStore, cr = window.Codex.CdxButton, N2 = window.Codex.CdxIcon, U2 = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = we(), o = M2();
    P2("colors");
    const { sectionSuggestion: s } = Pe(), { targetLanguageAutonym: a } = M(o), { sectionURLParameter: r } = q(), {
      startNewTranslation: c,
      handlePrimaryButtonClick: l,
      translationConfirmationDialogOn: d
    } = w2(), i = Td(!1), u = Td(null), g = () => y(this, null, function* () {
      const X = yield je.checkUnreviewedTranslations();
      X !== !0 && (i.value = !0, u.value = X.targetUrl);
    }), m = () => y(this, null, function* () {
      yield g(), !i.value && c();
    }), p = () => y(this, null, function* () {
      yield g(), !i.value && l();
    }), h = t;
    F2(() => {
      d.value && (h("open-translation-confirmation-dialog"), d.value = !1);
    });
    const {
      actionInformationMessageArgs: w,
      getActionButtonLabel: f,
      isProgressiveButton: _,
      targetArticlePath: S
    } = z8(), V = xe(), A = rr(
      () => V.i18n(f(!!r.value))
    ), { isDesktop: b } = ys(), F = rr(
      () => V.i18n(...w.value)
    ), x = () => y(this, null, function* () {
      yield g(), !i.value && n.push({ name: "sx-section-selector" });
    }), T = rr(() => {
      var X, I;
      return r.value && !!((I = (X = s.value) == null ? void 0 : X.sourceSections) != null && I.length);
    }), { targetPageExists: Y } = Ft();
    return (X, I) => {
      const K = b2("i18n");
      return Lo(), sr(V2, null, [
        Do("section", E2, [
          oe(r) ? (Lo(), sr("section", A2, [
            Ad(Do("h6", null, null, 512), [
              [K, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            Do("h5", {
              class: "ma-0",
              textContent: To(oe(r))
            }, null, 8, D2)
          ])) : oe(Y) ? (Lo(), sr("section", T2, [
            Ue(oe(B), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: Je(() => [
                Ad(Ue(oe(C), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [K, [oe(a)], "cx-sx-existing-translation-status"]
                ]),
                Ue(oe(C), { shrink: "" }, {
                  default: Je(() => [
                    Do("a", {
                      href: oe(S),
                      target: "_blank"
                    }, [
                      Ue(oe(N2), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: oe(Zc)
                      }, null, 8, ["icon"])
                    ], 8, L2)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Ue(oe(B), { class: "ma-0" }, {
              default: Je(() => [
                Ue(oe(C), null, {
                  default: Je(() => [
                    Do("span", {
                      textContent: To(F.value)
                    }, null, 8, B2)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : ar("", !0),
          Ue(oe(B), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: Je(() => [
              T.value ? (Lo(), Dd(oe(C), {
                key: 0,
                shrink: "",
                class: "me-4"
              }, {
                default: Je(() => [
                  Ue(oe(cr), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: $2(x, ["stop"])
                  }, {
                    default: Je(() => [
                      ir(To(X.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })) : ar("", !0),
              oe(Y) && oe(b) ? (Lo(), Dd(oe(C), {
                key: 1,
                shrink: "",
                class: "me-4"
              }, {
                default: Je(() => [
                  Ue(oe(cr), {
                    size: "large",
                    onClick: m
                  }, {
                    default: Je(() => [
                      ir(To(X.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : ar("", !0),
              Ue(oe(C), { shrink: "" }, {
                default: Je(() => [
                  Ue(oe(cr), {
                    weight: "primary",
                    size: "large",
                    action: oe(_) ? "progressive" : "default",
                    onClick: p
                  }, {
                    default: Je(() => [
                      ir(To(A.value), 1)
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
        Ue(x2, {
          modelValue: i.value,
          "onUpdate:modelValue": I[0] || (I[0] = (le) => i.value = le),
          "target-url": u.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const Ld = window.Vue.computed, I2 = window.Vuex.useStore, z2 = {
  name: "SxArticleLanguageSelector",
  components: {
    SxTranslationListLanguageSelector: nl
  },
  setup() {
    const { supportedLanguageCodes: e, enabledTargetLanguages: t } = ks(), n = I2(), { sourceLanguage: o, targetLanguage: s } = M(n), { currentLanguageTitleGroup: a } = Ft(), r = Ld(
      () => {
        var u;
        return ((u = a.value) == null ? void 0 : u.titles.map((g) => g.lang)) || [];
      }
    ), c = Ld(
      () => t.value || e.value
    ), l = aC();
    return {
      availableSourceLanguages: r,
      targetLanguages: c,
      onSourceLanguageSelected: (u) => l(u, s.value),
      onTargetLanguageSelected: (u) => l(o.value, u),
      sourceLanguage: o,
      targetLanguage: s
    };
  }
}, R2 = window.Vue.resolveComponent, O2 = window.Vue.openBlock, H2 = window.Vue.createBlock;
function j2(e, t, n, o, s, a) {
  const r = R2("sx-translation-list-language-selector");
  return O2(), H2(r, {
    class: "sx-article-language-selector",
    "source-languages": o.availableSourceLanguages,
    "target-languages": o.targetLanguages,
    "selected-source-language": o.sourceLanguage,
    "selected-target-language": o.targetLanguage,
    "onUpdate:selectedSourceLanguage": o.onSourceLanguageSelected,
    "onUpdate:selectedTargetLanguage": o.onTargetLanguageSelected
  }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language", "onUpdate:selectedSourceLanguage", "onUpdate:selectedTargetLanguage"]);
}
const Np = /* @__PURE__ */ P(z2, [["render", j2]]);
const Se = window.Vue.unref, lr = window.Vue.toDisplayString, bt = window.Vue.createElementVNode, ct = window.Vue.createVNode, Mn = window.Vue.withCtx, q2 = window.Vue.resolveDirective, G2 = window.Vue.withDirectives, X2 = window.Vue.normalizeClass, W2 = window.Vue.openBlock, K2 = window.Vue.createBlock, Y2 = ["textContent"], Q2 = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, J2 = ["textContent"], Z2 = { class: "pe-3" }, e4 = ["textContent"], t4 = window.Codex.CdxButton, Bo = window.Codex.CdxIcon, $t = window.Vue.computed, n4 = window.Vuex.useStore, o4 = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = n4(), n = xe(), { currentSourcePage: o } = at(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r
    } = q(), c = $t(() => t.state.suggestions.favorites || []), l = $t(
      () => c.value.some(
        (b) => r.value === b.title && s.value === b.sourceLanguage && a.value === b.targetLanguage
      )
    ), { markFavoriteSuggestion: d, removeFavoriteSuggestion: i } = ol(), { translationSizeMessageArgs: u } = Lp(), g = () => d(
      r.value,
      s.value,
      a.value
    ), m = () => i(
      new Jn({
        title: r.value,
        sourceLanguage: s.value,
        targetLanguage: a.value
      })
    ), p = $t(
      () => l.value ? UC : IC
    ), h = $t(
      () => l.value ? m : g
    ), w = $t(
      () => H.getPageUrl(s.value || "", r.value || "")
    ), f = $t(() => {
      var b;
      return (b = o.value) == null ? void 0 : b.langLinksCount;
    }), _ = (b) => {
      const F = [
        { value: 1e9, suffix: "B" },
        // 1 billion
        { value: 1e6, suffix: "M" },
        // 1 million
        { value: 1e3, suffix: "K" }
        // 1 thousand
      ];
      for (let x = 0; x < F.length; x++)
        if (b >= F[x].value)
          return (b / F[x].value).toFixed(1).replace(/\.0$/, "") + F[x].suffix;
      return b.toString();
    }, S = $t(() => {
      var F;
      const b = Object.values(((F = o.value) == null ? void 0 : F.pageviews) || {}).reduce(
        (x, T) => x + T,
        0
      );
      return _(b);
    }), V = $t(() => u.value ? n.i18n(...u.value) : ""), A = $t(() => u.value ? u.value[2] < 15 : !1);
    return (b, F) => {
      const x = q2("i18n");
      return W2(), K2(Se(B), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: Mn(() => [
          ct(Se(C), null, {
            default: Mn(() => [
              ct(Se(B), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: Mn(() => [
                  ct(Se(C), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: w.value,
                    target: "_blank"
                  }, {
                    default: Mn(() => [
                      bt("h5", {
                        class: "ma-0 me-1",
                        textContent: lr(Se(r))
                      }, null, 8, Y2),
                      ct(Se(Bo), {
                        size: "x-small",
                        icon: Se(Zc)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  ct(Se(C), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: Mn(() => [
                      ct(Se(t4), {
                        class: "px-0",
                        weight: "quiet",
                        action: l.value ? "progressive" : "default",
                        onClick: h.value
                      }, {
                        default: Mn(() => [
                          ct(Se(Bo), { icon: p.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              bt("div", Q2, [
                bt("div", null, [
                  bt("span", null, [
                    ct(Se(Bo), {
                      icon: Se(qC),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    bt("span", {
                      class: "pe-3",
                      textContent: lr(f.value)
                    }, null, 8, J2)
                  ]),
                  bt("span", null, [
                    ct(Se(Bo), {
                      icon: Se(zC),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    G2(bt("span", Z2, null, 512), [
                      [x, [S.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                bt("span", {
                  class: X2(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": A.value
                  }])
                }, [
                  ct(Se(Bo), {
                    icon: Se(OC),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  bt("span", {
                    textContent: lr(V.value)
                  }, null, 8, e4)
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
const s4 = window.Vue.resolveDirective, hn = window.Vue.createElementVNode, la = window.Vue.withDirectives, a4 = window.Vue.toDisplayString, i4 = window.Vue.createTextVNode, ur = window.Vue.unref, dr = window.Vue.withCtx, gr = window.Vue.openBlock, mr = window.Vue.createBlock;
window.Vue.createCommentVNode;
const r4 = { class: "pa-4" }, c4 = { class: "flex pt-2" }, l4 = window.Codex.CdxButton, u4 = window.Vue.ref, d4 = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = cl(), a = u4(!1), { currentTranslation: r } = Cs(), c = () => y(this, null, function* () {
      a.value = !0;
      let l = !1;
      try {
        l = yield je.splitTranslation(
          r.value.translationId
        );
      } catch (d) {
        mw.log.error(
          "[CX] Error while splitting the translation into section translations",
          d
        );
      }
      a.value = !1, l && (s(r.value), o());
    });
    return (l, d) => {
      const i = s4("i18n");
      return gr(), mr(ur(qe), {
        value: e.modelValue,
        persistent: a.value,
        class: "sx-confirm-translation-start-dialog",
        "overlay-opacity": 0.7,
        "overlay-color": l.$mwui.colors.gray700,
        "min-height": "unset",
        title: l.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: dr(() => [
          hn("div", c4, [
            a.value ? (gr(), mr(ur(st), { key: 1 })) : (gr(), mr(ur(l4), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: c
            }, {
              default: dr(() => [
                i4(a4(l.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: dr(() => [
          hn("div", r4, [
            la(hn("p", null, null, 512), [
              [i, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            la(hn("p", null, null, 512), [
              [i, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            hn("p", null, [
              la(hn("strong", null, null, 512), [
                [i, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            la(hn("p", null, null, 512), [
              [i, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "overlay-color", "title"]);
    };
  }
};
const Bd = window.Vue.resolveDirective, ua = window.Vue.createElementVNode, Pd = window.Vue.withDirectives, Xt = window.Vue.unref, da = window.Vue.withCtx, Vt = window.Vue.createVNode, pr = window.Vue.openBlock, Fd = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const g4 = window.Vue.createBlock, m4 = { class: "sx-translation-confirmer" }, p4 = { class: "mb-0" }, h4 = { class: "sx-translation-confirmer__article-image flex justify-center" }, w4 = ["src"], f4 = { class: "ma-3" }, _4 = window.Vue.computed;
window.Vue.onBeforeMount;
window.Vue.onMounted;
const v4 = window.Vue.ref, S4 = window.Vuex.useStore, y4 = {
  __name: "SXTranslationConfirmer",
  props: {
    eventSource: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const t = e, n = S4(), { currentSourcePage: o } = at(), { previousRoute: s } = M(n), {
      sourceLanguageURLParameter: a,
      targetLanguageURLParameter: r,
      pageURLParameter: c,
      sectionURLParameter: l,
      clearURLParameters: d
    } = q(), i = _4(
      () => {
        var _, S;
        return (S = (_ = o.value) == null ? void 0 : _.image) == null ? void 0 : S.source;
      }
    ), u = ht(), { fetchTranslationsByStatus: g } = ei(), m = Mp(), p = Gc();
    g("draft"), l.value && p(
      a.value,
      r.value,
      c.value
    ), m(a.value, c.value), u({
      event_type: "dashboard_translation_start",
      event_source: t.eventSource,
      translation_source_language: a.value,
      translation_target_language: r.value
    }), sl(), n.dispatch("suggestions/fetchAppendixSectionTitles", r.value);
    const h = we(), w = () => {
      d(), h.push({ name: s.value });
    }, f = v4(!1);
    return (_, S) => {
      const V = Bd("i18n"), A = Bd("i18n-html");
      return pr(), Fd("section", m4, [
        Vt(Xt(B), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: da(() => [
            Vt(Xt(C), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: da(() => [
                Pd(ua("h5", p4, null, 512), [
                  [V, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            Vt(Xt(C), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: da(() => [
                Vt(Xt(Le), {
                  class: "pa-0",
                  type: "icon",
                  icon: Xt(Vn),
                  "icon-size": 20,
                  onClick: w
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        ua("div", h4, [
          i.value ? (pr(), Fd("img", {
            key: 0,
            src: i.value
          }, null, 8, w4)) : (pr(), g4(Xt(me), {
            key: 1,
            size: "120",
            icon: Xt(Fc),
            "icon-color": _.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        Vt(o4),
        Vt(Np),
        Vt(U2, {
          onOpenTranslationConfirmationDialog: S[0] || (S[0] = (b) => f.value = !0)
        }),
        Vt(Xt(B), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: da(() => [
            ua("p", f4, [
              Pd(ua("small", null, null, 512), [
                [A, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        Vt(d4, {
          modelValue: f.value,
          "onUpdate:modelValue": S[1] || (S[1] = (b) => f.value = b)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const C4 = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: y4
  },
  props: {
    eventSource: {
      type: String,
      default: null
    }
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, k4 = window.Vue.resolveComponent, x4 = window.Vue.createVNode, b4 = window.Vue.normalizeClass, $4 = window.Vue.openBlock, V4 = window.Vue.createElementBlock;
function E4(e, t, n, o, s, a) {
  const r = k4("sx-translation-confirmer");
  return $4(), V4("main", {
    class: b4(["sx-translation-confirmer-view", a.classes])
  }, [
    x4(r, { "event-source": n.eventSource }, null, 8, ["event-source"])
  ], 2);
}
const A4 = /* @__PURE__ */ P(C4, [["render", E4]]);
const D4 = window.Vue.toDisplayString, Md = window.Vue.unref, T4 = window.Vue.createVNode, L4 = window.Vue.createTextVNode, B4 = window.Vue.createElementVNode, P4 = window.Vue.openBlock, F4 = window.Vue.createElementBlock, M4 = { class: "sx-section-selector-view-article-item ma-0" }, N4 = ["href"], U4 = window.Codex.CdxIcon, I4 = {
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
    return (t, n) => (P4(), F4("li", M4, [
      B4("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        L4(D4(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        T4(Md(U4), {
          size: "x-small",
          icon: Md(Zc)
        }, null, 8, ["icon"])
      ], 8, N4)
    ]));
  }
};
const z4 = window.Vue.resolveDirective, ga = window.Vue.createElementVNode, hr = window.Vue.withDirectives, wn = window.Vue.unref, R4 = window.Vue.toDisplayString, ma = window.Vue.withCtx, Po = window.Vue.createVNode, O4 = window.Vue.openBlock, H4 = window.Vue.createElementBlock, j4 = { class: "sx-section-selector__header pa-4" }, q4 = { class: "sx-section-selector__header-text ma-0" }, G4 = ["textContent"], X4 = { class: "pt-0 ma-0" }, W4 = { class: "ma-0" }, K4 = window.Codex.CdxButton, Y4 = window.Codex.CdxIcon, Q4 = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = Pe();
    return (n, o) => {
      const s = z4("i18n");
      return O4(), H4("div", j4, [
        Po(wn(B), { class: "ma-0 pb-3" }, {
          default: ma(() => [
            Po(wn(C), null, {
              default: ma(() => {
                var a;
                return [
                  hr(ga("h6", q4, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  ga("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: R4((a = wn(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, G4)
                ];
              }),
              _: 1
            }),
            Po(wn(C), {
              shrink: "",
              class: "justify-end"
            }, {
              default: ma(() => [
                Po(wn(K4), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: ma(() => [
                    Po(wn(Y4), { icon: wn(Vs) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        hr(ga("h4", X4, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        hr(ga("p", W4, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, J4 = window.Vue.renderList, Z4 = window.Vue.Fragment, wr = window.Vue.openBlock, Nd = window.Vue.createElementBlock, e$ = window.Vue.renderSlot, pa = window.Vue.unref, Ud = window.Vue.createVNode, Id = window.Vue.withCtx, t$ = window.Vue.createBlock, n$ = { class: "sx-section-selector__sections-list ma-0 pa-0" }, o$ = window.Codex.CdxButton, s$ = window.Codex.CdxIcon, Up = {
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
    return (t, n) => (wr(), Nd("ul", n$, [
      (wr(!0), Nd(Z4, null, J4(e.sections, (o) => (wr(), t$(pa(B), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: Id(() => [
          Ud(pa(o$), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: Id(() => [
              e$(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              Ud(pa(s$), { icon: pa(Es) }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, a$ = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const i$ = window.Vue.resolveDirective, ha = window.Vue.createElementVNode, fr = window.Vue.withDirectives, Ze = window.Vue.unref, zd = window.Vue.toDisplayString, Nn = window.Vue.withCtx, _r = window.Vue.openBlock, Rd = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Fo = window.Vue.createVNode, r$ = window.Vue.createTextVNode, c$ = window.Vue.createElementBlock, l$ = { class: "sx-section-selector__missing-sections py-2" }, u$ = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, d$ = ["lang", "dir", "textContent"], Od = window.Vue.computed, g$ = window.Codex.CdxButton, m$ = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = Pe(), n = Od(
      () => {
        var s;
        return O.getAutonym((s = t.value) == null ? void 0 : s.targetLanguage);
      }
    ), o = Od(
      () => {
        var s;
        return Object.keys(((s = t.value) == null ? void 0 : s.missingSections) || {}).length === 0;
      }
    );
    return (s, a) => {
      const r = i$("i18n");
      return _r(), c$("section", l$, [
        fr(ha("h4", u$, null, 512), [
          [r, [
            n.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        o.value ? (_r(), Rd(Ze(B), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: Nn(() => [
            Fo(Ze(C), {
              class: "py-6 justify-center",
              innerHTML: Ze(a$)
            }, null, 8, ["innerHTML"]),
            Fo(Ze(C), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: Nn(() => [
                fr(ha("h6", null, null, 512), [
                  [r, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            Fo(Ze(C), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: Nn(() => [
                fr(ha("p", null, null, 512), [
                  [r, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            Fo(Ze(C), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: Nn(() => [
                Fo(Ze(g$), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: a[1] || (a[1] = (c) => s.$emit("close"))
                }, {
                  default: Nn(() => [
                    r$(zd(s.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (_r(), Rd(Up, {
          key: 0,
          sections: Ze(t).orderedMissingSections,
          onSelectSection: a[0] || (a[0] = (c) => s.$emit("select-section", c))
        }, {
          default: Nn(({ sourceSection: c }) => {
            var l, d;
            return [
              ha("h5", {
                class: "ma-0",
                lang: (l = Ze(t)) == null ? void 0 : l.sourceLanguage,
                dir: Ze(O.getDir)((d = Ze(t)) == null ? void 0 : d.sourceLanguage),
                textContent: zd(c)
              }, null, 8, d$)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const p$ = window.Vue.computed, h$ = {
  name: "SxSectionSelectorSectionListPresent",
  components: {
    SxSectionSelectorSectionList: Up
  },
  emits: ["select-section"],
  setup() {
    const { sectionSuggestion: e } = Pe(), t = p$(
      () => {
        var n;
        return O.getAutonym((n = e.value) == null ? void 0 : n.targetLanguage);
      }
    );
    return {
      mwIconArrowForward: Lc,
      getAutonym: O.getAutonym,
      getDir: O.getDir,
      suggestion: e,
      targetLanguageAutonym: t
    };
  }
}, w$ = window.Vue.resolveDirective, wa = window.Vue.createElementVNode, f$ = window.Vue.withDirectives, Hd = window.Vue.toDisplayString, _$ = window.Vue.resolveComponent, v$ = window.Vue.withCtx, S$ = window.Vue.createVNode, y$ = window.Vue.openBlock, C$ = window.Vue.createElementBlock, k$ = { class: "sx-section-selector__present-sections py-2" }, x$ = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, b$ = { class: "sx-section-selector__present-section-button-content" }, $$ = ["lang", "dir", "textContent"], V$ = ["lang", "dir", "textContent"];
function E$(e, t, n, o, s, a) {
  var l;
  const r = _$("sx-section-selector-section-list"), c = w$("i18n");
  return y$(), C$("section", k$, [
    f$(wa("h4", x$, null, 512), [
      [c, [
        o.targetLanguageAutonym
      ], "cx-sx-section-selector-present-sections-title"]
    ]),
    S$(r, {
      sections: ((l = o.suggestion) == null ? void 0 : l.orderedPresentSections) || [],
      onSelectSection: t[0] || (t[0] = (d) => e.$emit("select-section", d))
    }, {
      default: v$(({ sourceSection: d, targetSection: i }) => {
        var u, g, m, p;
        return [
          wa("div", b$, [
            wa("h5", {
              class: "sx-section-selector__present-section-button-source",
              lang: (u = o.suggestion) == null ? void 0 : u.sourceLanguage,
              dir: o.getDir((g = o.suggestion) == null ? void 0 : g.sourceLanguage),
              textContent: Hd(d)
            }, null, 8, $$),
            wa("h6", {
              class: "sx-section-selector__present-section-button-target",
              lang: (m = o.suggestion) == null ? void 0 : m.targetLanguage,
              dir: o.getDir((p = o.suggestion) == null ? void 0 : p.targetLanguage),
              textContent: Hd(i)
            }, null, 8, V$)
          ])
        ];
      }),
      _: 1
    }, 8, ["sections"])
  ]);
}
const A$ = /* @__PURE__ */ P(h$, [["render", E$]]);
const vr = window.Vue.computed, D$ = window.Vuex.useStore, T$ = {
  name: "SxSectionSelector",
  components: {
    SxSectionSelectorSectionListPresent: A$,
    SxSectionSelectorSectionListMissing: m$,
    SxSectionSelectorHeader: Q4,
    SxSectionSelectorViewArticleItem: I4,
    MwRow: B,
    MwCol: C,
    MwIcon: me,
    SxArticleLanguageSelector: Np
  },
  setup() {
    const e = D$(), { sectionSuggestion: t } = Pe(), {
      sourceLanguage: n,
      targetLanguage: o,
      sourceLanguageAutonym: s,
      targetLanguageAutonym: a
    } = M(e), r = vr(
      () => {
        var _;
        return H.getPageUrl(n.value, (_ = t.value) == null ? void 0 : _.sourceTitle);
      }
    ), c = vr(
      () => {
        var _;
        return H.getPageUrl(o.value, (_ = t.value) == null ? void 0 : _.targetTitle);
      }
    ), l = vr(() => [
      { path: r.value, autonym: s.value },
      { path: c.value, autonym: a.value }
    ]), d = we(), { clearURLParameters: i, setSectionURLParam: u } = q(), g = () => {
      i(), d.push({ name: "dashboard" });
    }, m = cl(), { selectPageSectionByTitle: p } = il(), { isDesktop: h } = ys(), w = rl();
    return {
      goToDashboard: g,
      mwIconRobot: Ww,
      mwIconLabFlask: Vm,
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
        S ? m(S) : (p(_), u(_), d.push({ name: "sx-content-comparator" }));
      },
      suggestion: t,
      targetLanguageAutonym: a,
      viewArticleItems: l
    };
  }
}, Wt = window.Vue.resolveComponent, Et = window.Vue.createVNode, L$ = window.Vue.resolveDirective, lt = window.Vue.createElementVNode, Mo = window.Vue.withDirectives, B$ = window.Vue.renderList, P$ = window.Vue.Fragment, Sr = window.Vue.openBlock, jd = window.Vue.createElementBlock, F$ = window.Vue.createBlock, qd = window.Vue.toDisplayString, Gd = window.Vue.createTextVNode, yr = window.Vue.withCtx, M$ = { class: "sx-section-selector" }, N$ = { class: "sx-section-selector__body" }, U$ = { class: "py-2" }, I$ = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, z$ = { class: "ma-0 pa-0" }, R$ = { class: "sx-section-selector__additional-consideration-title" }, O$ = { href: "#" }, H$ = { class: "sx-section-selector__additional-consideration-title" }, j$ = { href: "#" };
function q$(e, t, n, o, s, a) {
  const r = Wt("sx-section-selector-header"), c = Wt("sx-article-language-selector"), l = Wt("sx-section-selector-section-list-missing"), d = Wt("sx-section-selector-section-list-present"), i = Wt("sx-section-selector-view-article-item"), u = Wt("mw-icon"), g = Wt("mw-col"), m = Wt("mw-row"), p = L$("i18n");
  return Sr(), jd("section", M$, [
    Et(r, { onClose: o.goToDashboard }, null, 8, ["onClose"]),
    lt("section", N$, [
      Et(c),
      Et(l, {
        onSelectSection: o.selectSection,
        onClose: o.goToDashboard
      }, null, 8, ["onSelectSection", "onClose"]),
      Et(d, { onSelectSection: o.selectSection }, null, 8, ["onSelectSection"]),
      lt("section", U$, [
        Mo(lt("h4", I$, null, 512), [
          [p, [
            o.targetLanguageAutonym
          ], "cx-sx-section-selector-more-details-title"]
        ]),
        lt("ul", z$, [
          (Sr(!0), jd(P$, null, B$(o.viewArticleItems, (h, w) => (Sr(), F$(i, {
            key: `view-article-item-${w}`,
            path: h.path,
            autonym: h.autonym
          }, null, 8, ["path", "autonym"]))), 128))
        ])
      ]),
      Et(m, { class: "sx-section-selector__additional-considerations ma-0" }, {
        default: yr(() => [
          Et(g, {
            cols: "12",
            tablet: "6",
            class: "px-4 pt-5 pb-4"
          }, {
            default: yr(() => [
              lt("h6", R$, [
                Et(u, {
                  icon: o.mwIconRobot,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                Gd(" " + qd(e.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
              ]),
              Mo(lt("p", null, null, 512), [
                [p, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
              ]),
              Mo(lt("a", O$, null, 512), [
                [p, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
              ])
            ]),
            _: 1
          }),
          Et(g, {
            cols: "12",
            tablet: "6",
            class: "px-4 py-5"
          }, {
            default: yr(() => [
              lt("h6", H$, [
                Et(u, {
                  icon: o.mwIconLabFlask,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                Gd(" " + qd(e.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
              ]),
              Mo(lt("p", null, null, 512), [
                [p, void 0, "cx-sx-section-selector-unsupported-sections-description"]
              ]),
              Mo(lt("a", j$, null, 512), [
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
const G$ = /* @__PURE__ */ P(T$, [["render", q$]]);
const X$ = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: G$
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, W$ = window.Vue.resolveComponent, K$ = window.Vue.createVNode, Y$ = window.Vue.normalizeClass, Q$ = window.Vue.openBlock, J$ = window.Vue.createElementBlock;
function Z$(e, t, n, o, s, a) {
  const r = W$("sx-section-selector");
  return Q$(), J$("main", {
    class: Y$(["sx-section-selector-view", a.classes])
  }, [
    K$(r)
  ], 2);
}
const e3 = /* @__PURE__ */ P(X$, [["render", Z$]]), t3 = window.Vue.computed, n3 = window.Vuex.useStore, o3 = (e) => {
  const { sourceLanguageAutonym: t, targetLanguageAutonym: n } = M(
    n3()
  ), o = xe();
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
  components: { MwButtonGroup: ms },
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
}, i3 = window.Vue.resolveComponent, r3 = window.Vue.createVNode, c3 = window.Vue.openBlock, l3 = window.Vue.createElementBlock, u3 = { class: "sx-content-comparator__source-target-selector" };
function d3(e, t, n, o, s, a) {
  const r = i3("mw-button-group");
  return c3(), l3("div", u3, [
    r3(r, {
      items: o.listSelector,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const g3 = /* @__PURE__ */ P(a3, [["render", d3]]), fn = window.Vue.computed, m3 = window.Vue.ref, ll = () => {
  const e = m3([]), { currentTargetPage: t } = at(), { sectionSuggestion: n } = Pe(), { sectionURLParameter: o } = q(), s = fn(
    () => n.value.missingSections[o.value] || n.value.presentSections[o.value] || ""
  ), a = fn(
    () => {
      var g;
      return (((g = r.value) == null ? void 0 : g.title) || "").replace(/ /g, "_");
    }
  ), r = fn(
    () => {
      var g;
      return (g = t.value) == null ? void 0 : g.getSectionByTitle(s.value);
    }
  ), { sourceSection: c } = W(), l = fn(() => {
    var g;
    return (g = c.value) == null ? void 0 : g.html;
  }), d = fn(() => {
    var g;
    return (g = r.value) == null ? void 0 : g.html;
  }), i = fn(
    () => {
      var g;
      return (g = n.value) == null ? void 0 : g.missingSections.hasOwnProperty(o.value);
    }
  ), u = fn(
    () => !i.value && !e.value.includes(s.value)
  );
  return {
    activeSectionTargetTitle: s,
    discardedSections: e,
    isCurrentSectionMapped: u,
    sourceSectionContent: l,
    targetSectionAnchor: a,
    targetSectionContent: d
  };
};
const Xd = window.Vue.ref, Cr = window.Vue.computed, p3 = window.Vue.onMounted, h3 = {
  name: "SxContentComparatorContentHeader",
  components: {
    SxContentComparatorSourceVsTargetSelector: g3,
    MwRow: B,
    MwCol: C,
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
    const n = Xd(!1), { sectionSuggestion: o } = Pe(), { sectionURLParameter: s } = q(), a = Cr(
      () => (s.value || "").replace(/ /g, "_")
    ), r = (g) => t.emit("update:sourceVsTargetSelection", g), { activeSectionTargetTitle: c, targetSectionAnchor: l } = ll(), d = Cr(() => {
      switch (e.sourceVsTargetSelection) {
        case "source_section":
          return {
            title: s.value,
            path: `${H.getPageUrl(
              o.value.sourceLanguage,
              o.value.sourceTitle
            )}#${a.value}`,
            lang: o.value.sourceLanguage,
            dir: O.getDir(o.value.sourceLanguage)
          };
        case "target_article":
          return {
            title: o.value.targetTitle,
            path: i.value,
            lang: o.value.targetLanguage,
            dir: O.getDir(o.value.targetLanguage)
          };
        default:
          return {
            title: c.value,
            path: `${i.value}#${l.value}`
          };
      }
    }), i = Cr(
      () => H.getPageUrl(
        o.value.targetLanguage,
        o.value.targetTitle
      )
    ), u = Xd(null);
    return p3(() => {
      new IntersectionObserver(
        ([m]) => {
          n.value = m.intersectionRect.height < m.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(u.value.$el);
    }), {
      activeContent: d,
      contentHeader: u,
      isSticky: n,
      mwIconLinkExternal: $m,
      mwIconEdit: Ga,
      updateSelection: r
    };
  }
}, fa = window.Vue.resolveComponent, _a = window.Vue.createVNode, w3 = window.Vue.toDisplayString, f3 = window.Vue.createElementVNode, va = window.Vue.withCtx, kr = window.Vue.openBlock, xr = window.Vue.createBlock;
window.Vue.createCommentVNode;
const _3 = window.Vue.normalizeClass, v3 = ["lang", "dir", "textContent"];
function S3(e, t, n, o, s, a) {
  const r = fa("sx-content-comparator-source-vs-target-selector"), c = fa("mw-col"), l = fa("mw-button"), d = fa("mw-row");
  return kr(), xr(d, {
    ref: "contentHeader",
    class: _3(["sx-content-comparator__content-header ma-0 pt-1", { sticky: o.isSticky }]),
    direction: "column",
    align: "stretch",
    reverse: o.isSticky
  }, {
    default: va(() => [
      _a(r, {
        "is-mapped-section": n.isMappedSection,
        selection: n.sourceVsTargetSelection,
        "onUpdate:selection": o.updateSelection
      }, null, 8, ["is-mapped-section", "selection", "onUpdate:selection"]),
      _a(d, {
        justify: "between",
        class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
      }, {
        default: va(() => [
          _a(c, null, {
            default: va(() => [
              f3("h3", {
                lang: o.activeContent.lang,
                dir: o.activeContent.dir,
                class: "ma-0 pa-0",
                textContent: w3(o.activeContent.title)
              }, null, 8, v3)
            ]),
            _: 1
          }),
          _a(c, { shrink: "" }, {
            default: va(() => [
              o.isSticky ? (kr(), xr(l, {
                key: 0,
                icon: o.mwIconEdit,
                progressive: "",
                label: e.$i18n(
                  "cx-sx-content-comparator-content-header-translate-button-label"
                ),
                onClick: t[0] || (t[0] = (i) => e.$emit("translation-button-clicked"))
              }, null, 8, ["icon", "label"])) : (kr(), xr(l, {
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
const y3 = /* @__PURE__ */ P(h3, [["render", S3]]), C3 = window.Vue.computed, k3 = {
  name: "SxContentComparatorHeaderNavigation",
  components: {
    MwCol: C,
    MwButton: Le
  },
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const { sectionURLParameter: t } = q(), n = C3(
      () => e.sectionSourceTitles.indexOf(t.value)
    ), { selectPageSectionByTitle: o } = il();
    return {
      goToNextSection: () => {
        const r = (n.value + 1) % e.sectionSourceTitles.length, c = e.sectionSourceTitles[r];
        o(c);
      },
      goToPreviousSection: () => {
        const r = (n.value - 1 + e.sectionSourceTitles.length) % e.sectionSourceTitles.length, c = e.sectionSourceTitles[r];
        o(c);
      },
      mwIconPrevious: Hw,
      mwIconArrowForward: Lc
    };
  }
}, Wd = window.Vue.resolveComponent, Kd = window.Vue.createVNode, x3 = window.Vue.withCtx, b3 = window.Vue.openBlock, $3 = window.Vue.createBlock;
function V3(e, t, n, o, s, a) {
  const r = Wd("mw-button"), c = Wd("mw-col");
  return b3(), $3(c, {
    class: "justify-end",
    align: "center"
  }, {
    default: x3(() => [
      Kd(r, {
        class: "pa-0 pe-1",
        type: "icon",
        icon: o.mwIconPrevious,
        onClick: o.goToPreviousSection
      }, null, 8, ["icon", "onClick"]),
      Kd(r, {
        class: "pa-0 ps-1",
        type: "icon",
        icon: o.mwIconArrowForward,
        onClick: o.goToNextSection
      }, null, 8, ["icon", "onClick"])
    ]),
    _: 1
  });
}
const E3 = /* @__PURE__ */ P(k3, [["render", V3]]);
const A3 = {
  name: "SxContentComparatorHeaderMappedSection",
  components: {
    MwRow: B,
    MwCol: C,
    MwButton: Le
  },
  props: {
    suggestion: {
      type: sn,
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
    mwIconUndo: Qw
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
}, Yd = window.Vue.toDisplayString, D3 = window.Vue.resolveDirective, br = window.Vue.withDirectives, Un = window.Vue.openBlock, Sa = window.Vue.createElementBlock, T3 = window.Vue.createCommentVNode, L3 = window.Vue.createTextVNode, Qd = window.Vue.createElementVNode, B3 = window.Vue.normalizeClass, $r = window.Vue.resolveComponent, Vr = window.Vue.withCtx, Er = window.Vue.createVNode, Jd = window.Vue.createBlock, P3 = { class: "sx-content-comparator-header__mapped-section" }, F3 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, M3 = { key: 0 }, N3 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, U3 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
};
function I3(e, t, n, o, s, a) {
  const r = $r("mw-col"), c = $r("mw-button"), l = $r("mw-row"), d = D3("i18n");
  return Un(), Sa("div", P3, [
    Er(l, { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
      default: Vr(() => [
        Er(r, { grow: "" }, {
          default: Vr(() => [
            Qd("h6", F3, [
              L3(Yd(a.mappedSectionHeaderTitle) + " ", 1),
              a.isDiscardedSection ? br((Un(), Sa("span", M3, null, 512)), [
                [d, void 0, "cx-sx-content-comparator-discarded-section-label"]
              ]) : T3("", !0)
            ]),
            Qd("h6", {
              class: B3(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                "sx-content-comparator-header__mapped-section-target-title--discarded": a.isDiscardedSection
              }])
            }, Yd(n.targetSectionTitle), 3)
          ]),
          _: 1
        }),
        Er(r, { shrink: "" }, {
          default: Vr(() => [
            a.isDiscardedSection ? (Un(), Jd(c, {
              key: 1,
              class: "pa-0",
              icon: e.mwIconUndo,
              type: "icon",
              onClick: a.undoDiscard
            }, null, 8, ["icon", "onClick"])) : (Un(), Jd(c, {
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
    a.isDiscardedSection ? br((Un(), Sa("p", U3, null, 512)), [
      [d, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
    ]) : br((Un(), Sa("p", N3, null, 512)), [
      [d, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
    ])
  ]);
}
const z3 = /* @__PURE__ */ P(A3, [["render", I3]]);
const ya = window.Vue.computed, R3 = {
  name: "SxContentComparatorHeader",
  components: {
    SxContentComparatorHeaderMappedSection: z3,
    SxContentComparatorHeaderNavigation: E3,
    MwButton: Le,
    MwCol: C,
    MwRow: B,
    MwIcon: me
  },
  props: {
    discardedSections: {
      type: Array,
      required: !0
    }
  },
  emits: ["close", "translation-button-clicked", "update:discardedSections"],
  setup() {
    const { sectionURLParameter: e } = q(), { sourceSection: t } = W(), { sectionSuggestion: n } = Pe(), o = ya(
      () => {
        var l;
        return (l = n.value) == null ? void 0 : l.missingSections.hasOwnProperty(e.value);
      }
    ), s = ya(
      () => {
        var l;
        return (l = n.value) == null ? void 0 : l.presentSections.hasOwnProperty(e.value);
      }
    ), { activeSectionTargetTitle: a } = ll(), r = ya(() => {
      var l;
      return (l = t.value) == null ? void 0 : l.html;
    }), c = ya(() => [
      ...Object.keys(n.value.missingSections),
      ...Object.keys(n.value.presentSections)
    ]);
    return {
      activeSectionTargetTitle: a,
      isCurrentSectionMissing: o,
      isCurrentSectionPresent: s,
      mwIconArrowPrevious: jw,
      mwIconEdit: Ga,
      mwIconEye: Kw,
      sectionSourceTitles: c,
      sourceSectionContent: r,
      sourceSectionTitle: e,
      suggestion: n,
      getDir: O.getDir
    };
  }
}, In = window.Vue.resolveComponent, At = window.Vue.createVNode, Zd = window.Vue.toDisplayString, as = window.Vue.createElementVNode, zn = window.Vue.withCtx, O3 = window.Vue.resolveDirective, eg = window.Vue.withDirectives, Ar = window.Vue.openBlock, tg = window.Vue.createBlock, ng = window.Vue.createCommentVNode, H3 = window.Vue.createElementBlock, j3 = { class: "sx-content-comparator__header pa-4" }, q3 = ["lang", "dir"], G3 = ["lang", "dir"], X3 = /* @__PURE__ */ as("br", null, null, -1);
function W3(e, t, n, o, s, a) {
  const r = In("mw-button"), c = In("mw-col"), l = In("sx-content-comparator-header-navigation"), d = In("mw-row"), i = In("mw-icon"), u = In("sx-content-comparator-header-mapped-section"), g = O3("i18n");
  return Ar(), H3("div", j3, [
    At(r, {
      class: "py-2 pa-0",
      icon: o.mwIconArrowPrevious,
      label: e.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
      type: "text",
      onClick: t[0] || (t[0] = (m) => e.$emit("close"))
    }, null, 8, ["icon", "label"]),
    At(d, { class: "my-1 py-2 mx-0" }, {
      default: zn(() => [
        At(c, { grow: "" }, {
          default: zn(() => [
            as("h4", {
              class: "pa-0 sx-content-comparator-header__article-title",
              lang: o.suggestion.sourceLanguage,
              dir: o.getDir(o.suggestion.sourceLanguage)
            }, Zd(o.suggestion.sourceTitle), 9, q3),
            as("h2", {
              class: "sx-content-comparator-header__section-title pa-0 ma-0",
              lang: o.suggestion.sourceLanguage,
              dir: o.getDir(o.suggestion.sourceLanguage)
            }, Zd(o.sourceSectionTitle), 9, G3)
          ]),
          _: 1
        }),
        At(l, {
          cols: "2",
          "section-source-titles": o.sectionSourceTitles
        }, null, 8, ["section-source-titles"]),
        At(c, {
          cols: "12",
          mobile: "12",
          tablet: "4",
          class: "py-2 mb-1"
        }, {
          default: zn(() => [
            At(r, {
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
    o.isCurrentSectionMissing ? (Ar(), tg(d, {
      key: 0,
      align: "start",
      class: "sx-content-comparator-header__review-contents mx-0"
    }, {
      default: zn(() => [
        At(c, {
          shrink: "",
          class: "pe-2"
        }, {
          default: zn(() => [
            At(i, { icon: o.mwIconEye }, null, 8, ["icon"])
          ]),
          _: 1
        }),
        At(c, { class: "ma-0" }, {
          default: zn(() => [
            eg(as("strong", null, null, 512), [
              [g, void 0, "cx-sx-content-comparator-review-contents-title"]
            ]),
            X3,
            eg(as("span", null, null, 512), [
              [g, void 0, "cx-sx-content-comparator-review-contents-rest"]
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : ng("", !0),
    o.isCurrentSectionPresent ? (Ar(), tg(u, {
      key: 1,
      suggestion: o.suggestion,
      "target-section-title": o.activeSectionTargetTitle,
      "discarded-sections": n.discardedSections,
      "onUpdate:discardedSections": t[2] || (t[2] = (m) => e.$emit("update:discardedSections", m))
    }, null, 8, ["suggestion", "target-section-title", "discarded-sections"])) : ng("", !0)
  ]);
}
const K3 = /* @__PURE__ */ P(R3, [["render", W3]]);
const Y3 = {
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
}, og = window.Vue.toDisplayString, Q3 = window.Vue.createElementVNode, sg = window.Vue.openBlock, ag = window.Vue.createElementBlock, J3 = window.Vue.createCommentVNode, Z3 = { class: "sx-content-comparator__new-section-placeholder--present mt-4 py-4 px-7" }, eV = ["textContent"], tV = ["textContent"];
function nV(e, t, n, o, s, a) {
  return sg(), ag("section", Z3, [
    Q3("h5", {
      textContent: og(n.placeholderTitle)
    }, null, 8, eV),
    n.placeholderSubtitle ? (sg(), ag("p", {
      key: 0,
      textContent: og(n.placeholderSubtitle)
    }, null, 8, tV)) : J3("", !0)
  ]);
}
const Ip = /* @__PURE__ */ P(Y3, [["render", nV]]), oV = window.Vue.computed, sV = window.Vue.createApp, aV = window.Vuex.useStore, iV = () => {
  const e = aV(), { sectionSuggestion: t } = Pe(), { currentTargetPage: n } = at(), o = xe(), s = () => sV(
    Ip,
    {
      placeholderTitle: o.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    }
  ).mount(document.createElement("div")).$el, a = (c) => e.getters["suggestions/getFirstAppendixTitleBySectionSuggestion"](
    c
  ), r = (c) => {
    const l = c.getElementsByTagName("base");
    Array.from(l).forEach(
      (d) => d.parentNode.removeChild(d)
    );
  };
  return oV(() => {
    var i;
    const c = document.createElement("div");
    c.innerHTML = (i = n.value) == null ? void 0 : i.content, r(c);
    const l = s(), d = a(
      t.value
    );
    if (d) {
      const u = Array.from(
        c.querySelectorAll("h2")
      ).filter((g) => g.textContent.match(d));
      if (u && u.length) {
        const g = u[0].parentNode;
        g.parentNode.insertBefore(
          l,
          g
        );
      }
    } else
      c.appendChild(l);
    return c.innerHTML;
  });
};
const rV = window.Vue.ref, cV = window.Vue.computed, lV = window.Vue.watch, uV = window.Vuex.useStore, dV = {
  name: "SxContentComparator",
  components: {
    SxContentComparatorNewSectionPlaceholder: Ip,
    SxContentComparatorHeader: K3,
    SxContentComparatorContentHeader: y3,
    MwSpinner: st
  },
  setup() {
    const e = uV(), t = we(), n = rV("source_section"), o = () => t.push({ name: "sx-section-selector" }), s = () => {
      Pp() || !e.getters["translator/userHasSectionTranslations"] ? t.push({ name: "sx-quick-tutorial" }) : t.push({ name: "sx-sentence-selector" });
    }, {
      activeSectionTargetTitle: a,
      discardedSections: r,
      isCurrentSectionMapped: c,
      sourceSectionContent: l,
      targetSectionContent: d
    } = ll(), i = iV(), { sectionSuggestion: u } = Pe(), { sourceLanguage: g, targetLanguage: m } = M(e), p = cV(() => u.value.targetTitle), h = al();
    return lV(
      p,
      () => h(
        m.value,
        g.value,
        p.value
      ),
      { immediate: !0 }
    ), {
      getDir: O.getDir,
      activeSectionTargetTitle: a,
      discardedSections: r,
      goToSectionSelector: o,
      isCurrentSectionMapped: c,
      sourceSectionContent: l,
      sourceVsTargetSelection: n,
      targetPageContent: i,
      targetSectionContent: d,
      translateSection: s,
      sourceLanguage: g,
      targetLanguage: m
    };
  }
}, Ca = window.Vue.resolveComponent, Dr = window.Vue.createVNode, Rn = window.Vue.openBlock, ig = window.Vue.createBlock, rg = window.Vue.createCommentVNode, ka = window.Vue.createElementVNode, Tr = window.Vue.Fragment, xa = window.Vue.createElementBlock, gV = { class: "sx-content-comparator" }, mV = { class: "sx-content-comparator__source-content" }, pV = ["lang", "dir", "innerHTML"], hV = ["lang", "dir", "innerHTML"], wV = ["innerHTML"];
function fV(e, t, n, o, s, a) {
  const r = Ca("sx-content-comparator-header"), c = Ca("sx-content-comparator-content-header"), l = Ca("mw-spinner"), d = Ca("sx-content-comparator-new-section-placeholder");
  return Rn(), xa("section", gV, [
    Dr(r, {
      "discarded-sections": o.discardedSections,
      "onUpdate:discardedSections": t[0] || (t[0] = (i) => o.discardedSections = i),
      onTranslationButtonClicked: o.translateSection,
      onClose: o.goToSectionSelector
    }, null, 8, ["discarded-sections", "onTranslationButtonClicked", "onClose"]),
    Dr(c, {
      "source-vs-target-selection": o.sourceVsTargetSelection,
      "onUpdate:sourceVsTargetSelection": t[1] || (t[1] = (i) => o.sourceVsTargetSelection = i),
      "is-mapped-section": o.isCurrentSectionMapped,
      onTranslationButtonClicked: o.translateSection
    }, null, 8, ["source-vs-target-selection", "is-mapped-section", "onTranslationButtonClicked"]),
    ka("section", mV, [
      o.sourceVsTargetSelection === "source_section" ? (Rn(), xa(Tr, { key: 0 }, [
        o.sourceSectionContent ? rg("", !0) : (Rn(), ig(l, { key: 0 })),
        ka("section", {
          lang: o.sourceLanguage,
          dir: o.getDir(o.sourceLanguage),
          class: "pt-2 px-4",
          innerHTML: o.sourceSectionContent
        }, null, 8, pV)
      ], 64)) : o.sourceVsTargetSelection === "target_article" ? (Rn(), xa(Tr, { key: 1 }, [
        o.targetPageContent ? rg("", !0) : (Rn(), ig(l, { key: 0 })),
        ka("article", {
          lang: o.targetLanguage,
          dir: o.getDir(o.targetLanguage),
          class: "px-4",
          innerHTML: o.targetPageContent
        }, null, 8, hV)
      ], 64)) : (Rn(), xa(Tr, { key: 2 }, [
        ka("section", {
          class: "pa-4",
          innerHTML: o.targetSectionContent
        }, null, 8, wV),
        Dr(d, {
          "placeholder-title": e.$i18n("cx-sx-content-comparator-present-section-placeholder-title"),
          "placeholder-subtitle": e.$i18n(
            "cx-sx-content-comparator-present-section-placeholder-subtitle"
          )
        }, null, 8, ["placeholder-title", "placeholder-subtitle"])
      ], 64))
    ])
  ]);
}
const _V = /* @__PURE__ */ P(dV, [["render", fV]]);
const vV = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: _V
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, SV = window.Vue.resolveComponent, yV = window.Vue.createVNode, CV = window.Vue.normalizeClass, kV = window.Vue.openBlock, xV = window.Vue.createElementBlock;
function bV(e, t, n, o, s, a) {
  const r = SV("sx-content-comparator");
  return kV(), xV("main", {
    class: CV(["sx-content-comparator-view", a.classes])
  }, [
    yV(r)
  ], 2);
}
const $V = /* @__PURE__ */ P(vV, [["render", bV]]);
const VV = window.Vue.resolveDirective, No = window.Vue.createElementVNode, cg = window.Vue.withDirectives, ba = window.Vue.unref, Lr = window.Vue.createVNode, lg = window.Vue.toDisplayString, ug = window.Vue.createTextVNode, Uo = window.Vue.withCtx, EV = window.Vue.openBlock, AV = window.Vue.createBlock, DV = { class: "mw-ui-dialog__header px-4 py-3" }, TV = { class: "mw-ui-dialog__header-title" }, LV = { class: "pa-4" }, BV = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, dg = window.Codex.CdxButton, PV = {
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
      const l = VV("i18n");
      return EV(), AV(ba(qe), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        "overlay-opacity": 0.7,
        "overlay-color": r.$mwui.colors.gray700
      }, {
        header: Uo(() => [
          No("div", DV, [
            cg(No("span", TV, null, 512), [
              [l, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: Uo(() => [
          No("div", BV, [
            Lr(ba(dg), {
              weight: "quiet",
              onClick: s
            }, {
              default: Uo(() => [
                ug(lg(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            Lr(ba(dg), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: Uo(() => [
                ug(lg(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: Uo(() => [
          Lr(ba(qa)),
          No("div", LV, [
            cg(No("span", null, null, 512), [
              [l, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "overlay-color"]);
    };
  }
}, FV = window.Vuex.useStore, ul = () => {
  const e = FV(), { sourceSection: t } = W(), { getCurrentTitleByLanguage: n } = Ft(), o = (c, l, d) => {
    if (c === 0) {
      t.value.proposedTitleTranslations[l] = d;
      return;
    }
    const i = t.value.getContentTranslationUnitById(c);
    i instanceof Te ? i.blockTemplateProposedTranslations[l] = d : i instanceof tn && i.addProposedTranslation(l, d);
  }, s = (c, l) => y(void 0, null, function* () {
    const { sourceLanguage: d, targetLanguage: i } = e.state.application;
    if (!e.getters["mediawiki/isValidProviderForTranslation"](d, i, c))
      return "";
    try {
      const g = yield e.dispatch("application/getCXServerToken");
      return yield je.fetchSegmentTranslation(
        d,
        i,
        c,
        l,
        g
      );
    } catch (g) {
      return mw.log.error("Error while translating segment", g), "";
    }
  }), a = (c, l) => y(void 0, null, function* () {
    const { sourceLanguage: d, targetLanguage: i } = e.state.application;
    if (t.value.hasProposedTranslationByTranslationUnitId(
      c,
      l
    ))
      return;
    let u = t.value.getOriginalContentByTranslationUnitId(c);
    const g = t.value.getContentTranslationUnitById(c);
    let m;
    if (e.commit("application/addMtRequestsPending", c), m = yield s(l, u), !m) {
      e.commit("application/removeMtRequestsPending", c);
      return;
    }
    g instanceof Te && (g.setBlockTemplateAdaptationInfoByHtml(
      l,
      m
    ), m = (yield hv(
      m,
      n(i, d),
      i
    )) || ""), o(
      c,
      l,
      m
    ), e.commit("application/removeMtRequestsPending", c);
  });
  return {
    translateTranslationUnitById: a,
    translateSelectedTranslationUnitForAllProviders: () => {
      const { sourceLanguage: c, targetLanguage: l } = e.state.application, d = e.getters["mediawiki/getSupportedMTProviders"](
        c,
        l
      ), { selectedTranslationUnitId: i } = t.value;
      d.forEach(
        (u) => a(i, u)
      );
    }
  };
}, MV = window.Vuex.useStore, NV = () => {
  const { sourceSection: e } = W(), t = MV(), { translateTranslationUnitById: n } = ul();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
const Br = window.Vue.computed, UV = window.Vuex.useStore, IV = {
  name: "SxTranslationSelector",
  components: { MwCard: He, MwButton: Le, MwDialog: qe },
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, t) {
    const n = Q.EMPTY_TEXT_PROVIDER_KEY, o = Q.ORIGINAL_TEXT_PROVIDER_KEY, s = UV(), {
      sourceSection: a,
      isSectionTitleSelected: r,
      selectedContentTranslationUnit: c
    } = W(), { sourceLanguage: l, targetLanguage: d } = M(s), i = Br(
      () => s.getters["mediawiki/getSupportedMTProviders"](
        l.value,
        d.value
      )
    ), u = Br(() => {
      const f = [o, n];
      return i.value.filter(
        (_) => !f.includes(_)
      );
    }), g = Br(
      () => r.value ? a.value.proposedTitleTranslations : c.value.proposedTranslations
    ), m = NV(), p = (f) => {
      m(f), w();
    }, h = Q.getMTProviderLabel, w = () => t.emit("update:active", !1);
    return {
      apiMtProviders: u,
      close: w,
      emptyTextProviderKey: n,
      getDir: O.getDir,
      getMTProviderLabel: h,
      mwIconClose: Vn,
      originalTextProviderKey: o,
      proposedTranslations: g,
      selectProvider: p,
      sourceLanguage: l
    };
  }
}, zV = window.Vue.resolveDirective, Re = window.Vue.createElementVNode, $a = window.Vue.withDirectives, Pr = window.Vue.resolveComponent, Fr = window.Vue.createVNode, Kt = window.Vue.withCtx, RV = window.Vue.renderList, OV = window.Vue.Fragment, Mr = window.Vue.openBlock, HV = window.Vue.createElementBlock, jV = window.Vue.toDisplayString, gg = window.Vue.createBlock, qV = window.Vue.createCommentVNode, GV = { class: "mw-ui-dialog__header pa-4" }, XV = { class: "row ma-0 py-2" }, WV = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, KV = { class: "mb-0" }, YV = { class: "col shrink justify-center" }, QV = { class: "pb-2 mb-0" }, JV = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, ZV = ["dir", "lang", "innerHTML"], e5 = ["textContent"], t5 = ["innerHTML"], n5 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, o5 = /* @__PURE__ */ Re("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1);
function s5(e, t, n, o, s, a) {
  const r = Pr("mw-button"), c = Pr("mw-card"), l = Pr("mw-dialog"), d = zV("i18n");
  return n.active ? (Mr(), gg(l, {
    key: 0,
    class: "sx-sentence-selector__translation-options",
    fullscreen: ""
  }, {
    header: Kt(() => [
      Re("div", GV, [
        Re("div", XV, [
          Re("div", WV, [
            $a(Re("h4", KV, null, 512), [
              [d, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
            ])
          ]),
          Re("div", YV, [
            Fr(r, {
              type: "icon",
              icon: o.mwIconClose,
              class: "pa-0",
              onClick: o.close
            }, null, 8, ["icon", "onClick"])
          ])
        ]),
        $a(Re("h6", QV, null, 512), [
          [d, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
        ])
      ])
    ]),
    default: Kt(() => [
      Fr(c, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: t[0] || (t[0] = (i) => o.selectProvider(o.originalTextProviderKey))
      }, {
        header: Kt(() => [
          $a(Re("h5", JV, null, 512), [
            [d, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
          ])
        ]),
        default: Kt(() => [
          Re("p", {
            dir: o.getDir(o.sourceLanguage),
            lang: o.sourceLanguage,
            innerHTML: o.proposedTranslations[o.originalTextProviderKey]
          }, null, 8, ZV)
        ]),
        _: 1
      }),
      (Mr(!0), HV(OV, null, RV(o.apiMtProviders, (i) => (Mr(), gg(c, {
        key: i,
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: (u) => o.selectProvider(i)
      }, {
        header: Kt(() => [
          Re("h5", {
            class: "sx-sentence-selector__translation-options-card-title mb-4",
            textContent: jV(o.getMTProviderLabel(i))
          }, null, 8, e5)
        ]),
        default: Kt(() => [
          Re("p", {
            innerHTML: o.proposedTranslations[i]
          }, null, 8, t5)
        ]),
        _: 2
      }, 1032, ["onClick"]))), 128)),
      Fr(c, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: t[1] || (t[1] = (i) => o.selectProvider(o.emptyTextProviderKey))
      }, {
        header: Kt(() => [
          $a(Re("h5", n5, null, 512), [
            [d, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
          ])
        ]),
        default: Kt(() => [
          o5
        ]),
        _: 1
      })
    ]),
    _: 1
  })) : qV("", !0);
}
const a5 = /* @__PURE__ */ P(IV, [["render", s5]]), i5 = window.Vuex.useStore, ro = () => {
  const { sourceSection: e } = W(), t = i5(), { translateTranslationUnitById: n } = ul(), { currentMTProvider: o } = M(t), s = (c) => y(void 0, null, function* () {
    e.value.selectTranslationUnitById(c), yield n(c, o.value);
    const { followingTranslationUnit: l } = e.value;
    l && (yield n(
      l.id,
      o
    ));
  });
  return {
    selectNextTranslationUnit: () => {
      const { followingTranslationUnit: c } = e.value;
      return c ? s(c.id) : Promise.resolve();
    },
    selectPreviousTranslationUnit: () => {
      const { selectedContentTranslationUnitIndex: c, contentTranslationUnits: l } = e.value, d = c - 1;
      let i = 0;
      return d > -1 && (i = l[d].id), s(i);
    },
    selectTranslationUnitById: s
  };
};
const r5 = window.Vue.toDisplayString, Nr = window.Vue.createElementVNode, Ur = window.Vue.unref, c5 = window.Vue.createVNode, l5 = window.Vue.normalizeClass, u5 = window.Vue.withCtx, d5 = window.Vue.openBlock, g5 = window.Vue.createBlock, m5 = ["href"], p5 = ["textContent"], h5 = ["innerHTML"], On = window.Vue.computed, w5 = window.Vuex.useStore, mg = "sx-sentence-selector__section-title", f5 = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const t = w5(), { sourceSection: n, isSectionTitleSelected: o } = W(), { currentSourcePage: s } = at(), { sourceLanguage: a } = M(t), r = On(() => {
      var p;
      return (p = s.value) == null ? void 0 : p.title;
    }), c = On(
      () => {
        var p;
        return ((p = n.value) == null ? void 0 : p.title) || r.value;
      }
    ), l = On(
      () => H.getPageUrl(a.value, r.value)
    ), d = On(
      () => {
        var p;
        return !!((p = n.value) != null && p.translatedTitle);
      }
    ), i = On(
      () => d.value ? "translated" : "selected"
    ), u = On(() => {
      const p = [mg];
      return o.value && p.push(`${mg}--${i.value}`), p;
    }), { selectTranslationUnitById: g } = ro(), m = () => g(0);
    return (p, h) => (d5(), g5(Ur(C), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: u5(() => [
        Nr("a", {
          href: l.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          Nr("strong", {
            textContent: r5(r.value)
          }, null, 8, p5),
          c5(Ur(me), {
            icon: Ur($m),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, m5),
        Nr("h2", {
          class: l5(["pa-0 ma-0", u.value]),
          onClick: m,
          innerHTML: c.value
        }, null, 10, h5)
      ]),
      _: 1
    }));
  }
};
const ut = window.Vue.unref, Io = window.Vue.createVNode, Va = window.Vue.withCtx, pg = window.Vue.toDisplayString, hg = window.Vue.createTextVNode, _5 = window.Vue.openBlock, v5 = window.Vue.createBlock, S5 = window.Vue.computed, Ir = window.Codex.CdxButton, wg = window.Codex.CdxIcon, zp = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = W(), s = S5(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, r) => (_5(), v5(ut(B), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: Va(() => [
        Io(ut(Ir), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: ut(n),
          onClick: r[0] || (r[0] = (c) => a.$emit("select-previous-segment"))
        }, {
          default: Va(() => [
            Io(ut(wg), {
              class: "me-1",
              icon: ut(el)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        Io(ut(Ir), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !ut(o),
          onClick: r[1] || (r[1] = (c) => a.$emit("apply-translation"))
        }, {
          default: Va(() => [
            hg(pg(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        Io(ut(Ir), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: r[2] || (r[2] = (c) => a.$emit("skip-translation"))
        }, {
          default: Va(() => [
            hg(pg(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            Io(ut(wg), {
              class: "ms-1",
              size: "small",
              icon: ut(Es)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const _n = window.Vue.unref, y5 = window.Vue.toDisplayString, zo = window.Vue.createVNode, Ea = window.Vue.withCtx, C5 = window.Vue.openBlock, k5 = window.Vue.createBlock, zr = window.Vue.computed, x5 = window.Vuex.useStore, b5 = window.Codex.CdxButton, $5 = window.Codex.CdxIcon, V5 = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = x5(), n = zr(() => t.state.application.currentMTProvider), o = xe(), s = zr(() => ({
      [Q.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [Q.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = zr(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        Q.getMTProviderLabel(n.value)
      )
    );
    return (r, c) => (C5(), k5(_n(C), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: Ea(() => [
        zo(_n(B), { class: "ma-0 ps-5 pb-4" }, {
          default: Ea(() => [
            zo(_n(C), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: y5(a.value)
            }, null, 8, ["textContent"]),
            zo(_n(C), {
              shrink: "",
              class: "pe-5"
            }, {
              default: Ea(() => [
                zo(_n(b5), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: c[0] || (c[0] = (l) => r.$emit("configure-options"))
                }, {
                  default: Ea(() => [
                    zo(_n($5), {
                      class: "pa-0",
                      icon: _n(Jc)
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
const et = window.Vue.unref, Yt = window.Vue.createVNode, E5 = window.Vue.resolveDirective, fg = window.Vue.createElementVNode, A5 = window.Vue.withDirectives, _g = window.Vue.toDisplayString, vg = window.Vue.createTextVNode, Ro = window.Vue.withCtx, D5 = window.Vue.openBlock, T5 = window.Vue.createElementBlock, L5 = { class: "mt-retry-body pb-5" }, B5 = { class: "retry-body__message" }, Sg = window.Codex.CdxButton, Rr = window.Codex.CdxIcon, P5 = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = E5("i18n");
      return D5(), T5("div", L5, [
        fg("div", B5, [
          Yt(et(Rr), {
            class: "me-2",
            icon: et(Cp)
          }, null, 8, ["icon"]),
          A5(fg("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        Yt(et(B), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: Ro(() => [
            Yt(et(C), { cols: "6" }, {
              default: Ro(() => [
                Yt(et(Sg), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: Ro(() => [
                    Yt(et(Rr), {
                      class: "me-1",
                      icon: et(bp)
                    }, null, 8, ["icon"]),
                    vg(" " + _g(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Yt(et(C), { cols: "6" }, {
              default: Ro(() => [
                Yt(et(Sg), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: Ro(() => [
                    Yt(et(Rr), {
                      class: "me-1",
                      icon: et(GC)
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
const Hn = window.Vue.createVNode, Ae = window.Vue.unref, Oo = window.Vue.openBlock, F5 = window.Vue.createElementBlock, M5 = window.Vue.createCommentVNode, Aa = window.Vue.createBlock, N5 = window.Vue.normalizeClass, U5 = window.Vue.normalizeStyle, Ho = window.Vue.withCtx, I5 = window.Vue.toDisplayString, z5 = window.Vue.createTextVNode, R5 = window.Vue.normalizeProps, O5 = window.Vue.guardReactiveProps, H5 = ["lang", "dir", "innerHTML"], Or = window.Vue.ref, j5 = window.Vue.onMounted, q5 = window.Vue.onBeforeUnmount, Hr = window.Vue.computed, G5 = window.Vue.nextTick, X5 = window.Vuex.useStore, W5 = window.Codex.CdxButton, K5 = window.Codex.CdxIcon, Y5 = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = Or(0), n = Or(null), o = Or(null), s = X5(), { currentMTProvider: a, targetLanguage: r } = M(s), { sourceSection: c, currentProposedTranslation: l } = W(), d = Hr(
      () => {
        var p, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (p = c.value) == null ? void 0 : p.selectedTranslationUnitId
        );
      }
    ), i = Hr(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), u = Hr(
      () => !!l.value || a.value === Q.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    j5(() => y(this, null, function* () {
      yield G5(), g(), m.observe(n.value.$el), m.observe(o.value.$el);
    })), q5(() => {
      m.unobserve(n.value.$el), m.unobserve(o.value.$el);
    });
    const m = new ResizeObserver(() => g());
    return (p, h) => (Oo(), Aa(Ae(He), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: Ho(() => [
        Hn(Ae(B), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: Ho(() => [
            Hn(V5, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (w) => p.$emit("configure-options"))
            }, null, 512),
            Hn(Ae(C), {
              class: N5(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !u.value && d.value
              }]),
              style: U5(u.value ? i.value : null)
            }, {
              default: Ho(() => [
                u.value ? (Oo(), F5("section", {
                  key: 0,
                  lang: Ae(r),
                  dir: Ae(O.getDir)(Ae(r)),
                  innerHTML: Ae(l)
                }, null, 8, H5)) : d.value ? (Oo(), Aa(Ae(st), { key: 1 })) : (Oo(), Aa(P5, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (w) => p.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (w) => p.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            Hn(Ae(C), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: Ho(() => [
                u.value || d.value ? (Oo(), Aa(Ae(W5), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !u.value,
                  onClick: h[3] || (h[3] = (w) => p.$emit("edit-translation", Ae(l)))
                }, {
                  default: Ho(() => [
                    Hn(Ae(K5), {
                      class: "me-1",
                      icon: Ae(Qc)
                    }, null, 8, ["icon"]),
                    z5(" " + I5(p.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : M5("", !0),
                Hn(zp, R5(O5(p.$attrs)), null, 16)
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
}, Q5 = window.Vue.computed, J5 = (e) => Q5(() => {
  if (e.isBlockTemplate)
    return e.isTranslated ? e.translatedContent : e.node.innerHTML;
  const t = "sx-sentence-selector__section-sentence", n = e.node.cloneNode(!0);
  return Array.from(n.getElementsByClassName("cx-segment")).forEach((s) => {
    const a = e.getSentenceById(s.dataset.segmentid);
    s.classList.add(t, "py-1", "me-1");
    const r = ["untranslated", "translated", "selected"].map(
      (l) => `${t}--${l}`
    );
    s.classList.remove(...r), a.selected && s.classList.add(`${t}--selected`);
    const c = a.isTranslated ? "translated" : "untranslated";
    s.classList.add(`${t}--${c}`), s.innerHTML = a.content;
  }), n.innerHTML;
});
const Z5 = window.Vue.onMounted, eE = window.Vue.ref, tE = window.Vue.computed, nE = {
  name: "SubSection",
  props: {
    subSection: {
      type: Te,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = eE(null), o = J5(e.subSection);
    Z5(() => {
      n.value.addEventListener("click", (c) => {
        let l;
        if (e.subSection.isBlockTemplate)
          l = e.subSection;
        else {
          const d = c.composedPath().find(
            (i) => i instanceof Element && i.classList.contains("cx-segment")
          );
          if (!d)
            return;
          l = e.subSection.getSentenceById(
            d.dataset.segmentid
          );
        }
        a(l);
      });
    });
    const { selectTranslationUnitById: s } = ro(), a = (c) => {
      if (c.selected) {
        t("bounce-translation");
        return;
      }
      s(c.id);
    }, r = tE(() => ({
      "sx-sentence-selector__subsection--block-selected": e.subSection.selected
    }));
    return {
      content: o,
      rootClasses: r,
      subSectionRoot: n
    };
  }
}, oE = window.Vue.normalizeClass, sE = window.Vue.openBlock, aE = window.Vue.createElementBlock, iE = ["innerHTML"];
function rE(e, t, n, o, s, a) {
  return sE(), aE("div", {
    ref: "subSectionRoot",
    class: oE(["sx-sentence-selector__subsection", o.rootClasses]),
    innerHTML: o.content
  }, null, 10, iE);
}
const cE = /* @__PURE__ */ P(nE, [["render", rE]]);
const yg = window.Vue.computed, lE = {
  name: "BlockTemplateStatusIndicator",
  components: {
    MwCircleProgressBar: U0,
    MwIcon: me
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
      () => !e.isTemplateAdapted || e.percentage === 0 ? Pc : Yn
    );
    return {
      cssVars: t,
      statusIcon: n
    };
  }
}, Cg = window.Vue.resolveComponent, kg = window.Vue.createVNode, xg = window.Vue.normalizeStyle, uE = window.Vue.openBlock, dE = window.Vue.createElementBlock;
function gE(e, t, n, o, s, a) {
  const r = Cg("mw-circle-progress-bar"), c = Cg("mw-icon");
  return uE(), dE("div", {
    class: "block-template-status-indicator",
    style: xg(o.cssVars)
  }, [
    kg(r, {
      percentage: n.percentage,
      size: n.size,
      "stroke-width": n.strokeWidth
    }, null, 8, ["percentage", "size", "stroke-width"]),
    kg(c, {
      icon: o.statusIcon,
      size: n.size / 2,
      style: xg({
        left: `calc(50% - ${n.size / 4}px)`,
        top: `calc(50% - ${n.size / 4}px)`
      })
    }, null, 8, ["icon", "size", "style"])
  ], 4);
}
const Rp = /* @__PURE__ */ P(lE, [["render", gE]]), mE = window.Vuex.useStore, jo = window.Vue.computed, pE = {
  name: "SxBlockTemplateStatusDialog",
  components: {
    MwCol: C,
    MwRow: B,
    MwIcon: me,
    MwDialog: qe,
    BlockTemplateStatusIndicator: Rp
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
    const { targetLanguageAutonym: t } = M(mE()), n = jo(
      () => !e.isTemplateAdapted || o.value === 0 ? Pc : Yn
    ), o = jo(
      () => e.targetParamsCount / (e.sourceParamsCount + e.mandatoryMissingParamsCount) * 100
    ), s = xe(), a = jo(() => {
      let l;
      return e.targetTemplateExists ? e.isTemplateAdapted ? o.value < 100 ? l = "cx-sx-block-template-mapping-status-title-partially-template" : l = "cx-sx-block-template-mapping-status-title-fully-template" : l = "cx-sx-block-template-mapping-status-title-unadapted-template" : l = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(l);
    }), r = jo(() => {
      let l;
      return !e.targetTemplateExists || !e.isTemplateAdapted ? l = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? l = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : l = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(l);
    }), c = jo(() => {
      let l = [];
      if (!e.targetTemplateExists)
        l.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            t.value
          ),
          icon: tf,
          color: Oe.gray500
        });
      else if (!e.isTemplateAdapted)
        l.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            e.sourceParamsCount
          ),
          icon: Vn,
          color: Oe.gray500
        });
      else if (o.value < 100)
        l.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            e.targetParamsCount,
            e.sourceParamsCount
          ),
          icon: Yn,
          color: Oe.blue600
        });
      else {
        let d;
        e.sourceParamsCount ? d = s.i18n(
          "cx-sx-block-template-mapped-params-text",
          e.targetParamsCount,
          e.sourceParamsCount
        ) : d = s.i18n(
          "cx-sx-block-template-no-source-params-text"
        ), l.push({
          text: d,
          icon: Yn,
          color: Oe.blue600
        });
      }
      return e.mandatoryMissingParamsCount ? l.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          e.mandatoryMissingParamsCount,
          t.value
        ),
        icon: Ga,
        color: Oe.gray500
      }) : e.targetTemplateExists && e.isTemplateAdapted && e.optionalMissingParamsCount && l.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          e.optionalMissingParamsCount,
          t.value
        ),
        icon: Nw,
        color: Oe.gray500
      }), l;
    });
    return {
      adaptationRatio: o,
      statusIcon: n,
      statusExplanation: r,
      statusText: a,
      mwIconCheck: Yn,
      mwIconInfo: Iw,
      notes: c
    };
  }
}, qo = window.Vue.resolveComponent, Go = window.Vue.openBlock, Da = window.Vue.createBlock;
window.Vue.createCommentVNode;
const jn = window.Vue.withCtx, Xo = window.Vue.createVNode, jr = window.Vue.toDisplayString, qr = window.Vue.createElementVNode, hE = window.Vue.renderList, wE = window.Vue.Fragment, fE = window.Vue.createElementBlock, _E = { class: "pa-4" }, vE = ["textContent"], SE = ["textContent"];
function yE(e, t, n, o, s, a) {
  const r = qo("block-template-status-indicator"), c = qo("mw-icon"), l = qo("mw-col"), d = qo("mw-row"), i = qo("mw-dialog");
  return Go(), Da(i, {
    value: n.active,
    class: "sx-block-template-status-dialog",
    title: e.$i18n("cx-sx-publisher-preview-options-title"),
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.gray700,
    onInput: t[0] || (t[0] = (u) => e.$emit("update:active", u))
  }, {
    header: jn(() => [
      Xo(d, {
        justify: "center",
        class: "mt-4"
      }, {
        default: jn(() => [
          Xo(l, { shrink: "" }, {
            default: jn(() => [
              n.targetTemplateExists ? (Go(), Da(r, {
                key: 0,
                percentage: o.adaptationRatio,
                size: 40,
                "is-template-adapted": n.isTemplateAdapted,
                "stroke-width": 3
              }, null, 8, ["percentage", "is-template-adapted"])) : (Go(), Da(c, {
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
    default: jn(() => [
      qr("div", _E, [
        qr("h3", {
          textContent: jr(o.statusText)
        }, null, 8, vE),
        qr("p", {
          class: "mt-6 text-small",
          textContent: jr(o.statusExplanation)
        }, null, 8, SE),
        (Go(!0), fE(wE, null, hE(o.notes, (u, g) => (Go(), Da(d, {
          key: g,
          align: "start",
          class: "mt-4"
        }, {
          default: jn(() => [
            Xo(l, { shrink: "" }, {
              default: jn(() => [
                Xo(c, {
                  class: "me-2",
                  icon: u.icon,
                  "icon-color": u.color
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 2
            }, 1024),
            Xo(l, {
              textContent: jr(u.text)
            }, null, 8, ["textContent"])
          ]),
          _: 2
        }, 1024))), 128))
      ])
    ]),
    _: 1
  }, 8, ["value", "title", "overlay-color"]);
}
const CE = /* @__PURE__ */ P(pE, [["render", yE]]);
const de = window.Vue.unref, ye = window.Vue.createVNode, dt = window.Vue.withCtx, Gr = window.Vue.toDisplayString, bg = window.Vue.createTextVNode, kE = window.Vue.resolveDirective, $g = window.Vue.withDirectives, Vg = window.Vue.createElementVNode, xE = window.Vue.normalizeClass, Ta = window.Vue.openBlock, Eg = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Ag = window.Vue.createBlock, bE = window.Vue.normalizeProps, $E = window.Vue.guardReactiveProps, VE = { class: "block-template-adaptation-card__container pa-4" }, EE = ["textContent"], AE = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, Ve = window.Vue.computed, DE = window.Vue.ref, TE = window.Vuex.useStore, Dg = window.Codex.CdxButton, Tg = window.Codex.CdxIcon, LE = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = TE(), { targetLanguageAutonym: n, currentMTProvider: o } = M(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = W(), r = Ve(() => {
      var T;
      return ((T = s.value) == null ? void 0 : T.blockTemplateTranslatedContent) || a.value;
    }), c = Ve(
      () => {
        var x;
        return (x = s.value) == null ? void 0 : x.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), l = Ve(
      () => {
        var x;
        return !((x = t.state.application.mtRequestsPending) != null && x.includes(
          s.value.id
        ));
      }
    ), d = xe(), i = Ve(
      // Strip HTML comments and return
      () => {
        var x, T;
        return ((T = (x = s.value) == null ? void 0 : x.sourceBlockTemplateName) == null ? void 0 : T.replace(
          /<\!--.*?-->/g,
          ""
        )) || d.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), u = Ve(
      () => {
        var x;
        return (x = s.value.blockTemplateAdaptationInfo) == null ? void 0 : x[o.value];
      }
    ), g = Ve(
      () => {
        var x, T;
        return ((x = u.value) == null ? void 0 : x.adapted) || !!((T = u.value) != null && T.partial);
      }
    ), m = Ve(() => u.value ? "block-template-adaptation-card__body--" + (g.value ? "success" : "warning") : null), p = Ve(() => u.value ? g.value ? d.i18n("sx-block-template-adaptation-card-edit-button-label") : d.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), h = Ve(
      () => {
        var x;
        return Object.keys(((x = s.value) == null ? void 0 : x.sourceTemplateParams) || {}).length;
      }
    ), w = Ve(() => {
      var T;
      const x = (T = s.value) == null ? void 0 : T.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(x || {});
    }), f = Ve(() => w.value.length), _ = Ve(() => {
      const x = b.value;
      return h.value + x === 0 ? 100 : f.value / (h.value + x) * 100 || 0;
    }), S = DE(!1), V = () => {
      S.value = !0;
    }, A = (x) => x.filter((T) => !w.value.includes(T)), b = Ve(() => {
      var T;
      const x = ((T = u.value) == null ? void 0 : T.mandatoryTargetParams) || [];
      return A(x).length;
    }), F = Ve(() => {
      var T;
      const x = ((T = u.value) == null ? void 0 : T.optionalTargetParams) || [];
      return A(x).length;
    });
    return (x, T) => {
      const Y = kE("i18n");
      return Ta(), Ag(de(He), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: dt(() => [
          Vg("div", VE, [
            ye(de(B), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: dt(() => [
                ye(de(C), { shrink: "" }, {
                  default: dt(() => [
                    ye(de(Tg), {
                      icon: de(XC),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                ye(de(C), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: dt(() => [
                    bg(Gr(i.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            c.value ? (Ta(), Eg("div", {
              key: 0,
              class: xE(["pa-4 mb-4", m.value])
            }, [
              ye(de(B), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: dt(() => [
                  $g(ye(de(C), { tag: "h5" }, null, 512), [
                    [Y, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  ye(de(C), { shrink: "" }, {
                    default: dt(() => [
                      ye(Rp, {
                        percentage: _.value,
                        size: 20,
                        "is-template-adapted": g.value,
                        "stroke-width": 2,
                        onClick: V
                      }, null, 8, ["percentage", "is-template-adapted"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Vg("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: Gr(c.value)
              }, null, 8, EE),
              ye(de(Dg), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: T[0] || (T[0] = (X) => x.$emit("edit-translation", r.value))
              }, {
                default: dt(() => [
                  bg(Gr(p.value), 1)
                ]),
                _: 1
              })
            ], 2)) : l.value ? (Ta(), Eg("div", AE, [
              ye(de(B), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: dt(() => [
                  $g(ye(de(C), { tag: "h5" }, null, 512), [
                    [Y, [
                      de(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  ye(de(C), { shrink: "" }, {
                    default: dt(() => [
                      ye(de(Dg), { weight: "quiet" }, {
                        default: dt(() => [
                          ye(de(Tg), {
                            icon: de(jC),
                            onClick: V
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
            ])) : (Ta(), Ag(de(st), { key: 2 }))
          ]),
          ye(zp, bE($E(x.$attrs)), null, 16),
          ye(CE, {
            active: S.value,
            "onUpdate:active": T[1] || (T[1] = (X) => S.value = X),
            "source-params-count": h.value,
            "target-params-count": f.value,
            "mandatory-missing-params-count": b.value,
            "optional-missing-params-count": F.value,
            "is-template-adapted": g.value,
            "target-template-exists": !!c.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const BE = window.Vue.computed, PE = {
  name: "TranslatedSegmentCardHeader",
  components: { MwButtonGroup: ms },
  props: {
    selection: {
      type: String,
      required: !0,
      validator: (e) => ["sentence", "paragraph"].includes(e)
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const { isSectionTitleSelected: n } = W(), o = xe();
    return { scopeOptions: BE(() => [
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
}, FE = window.Vue.resolveComponent, ME = window.Vue.createVNode, NE = window.Vue.openBlock, UE = window.Vue.createElementBlock, IE = { class: "translated-segment-card-header" };
function zE(e, t, n, o, s, a) {
  const r = FE("mw-button-group");
  return NE(), UE("div", IE, [
    ME(r, {
      items: o.scopeOptions,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const RE = /* @__PURE__ */ P(PE, [["render", zE]]);
const Qt = window.Vue.unref, La = window.Vue.createVNode, Xr = window.Vue.withCtx, OE = window.Vue.openBlock, HE = window.Vue.createBlock, jE = window.Vue.computed, Lg = window.Codex.CdxButton, Bg = window.Codex.CdxIcon, qE = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "skip-translation"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = W(), o = jE(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (OE(), HE(Qt(B), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: Xr(() => [
        La(Qt(Lg), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: Qt(n),
          onClick: a[0] || (a[0] = (r) => s.$emit("select-previous-segment"))
        }, {
          default: Xr(() => [
            La(Qt(Bg), { icon: Qt(el) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"]),
        La(Qt(Lg), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          onClick: a[1] || (a[1] = (r) => s.$emit("skip-translation"))
        }, {
          default: Xr(() => [
            La(Qt(Bg), { icon: Qt(Es) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const GE = window.Vue.useCssVars, Ce = window.Vue.createVNode, Pg = window.Vue.resolveDirective, XE = window.Vue.createElementVNode, Wr = window.Vue.withDirectives, ae = window.Vue.unref, WE = window.Vue.normalizeStyle, Ba = window.Vue.openBlock, Fg = window.Vue.createElementBlock, KE = window.Vue.createCommentVNode, YE = window.Vue.normalizeClass, Ie = window.Vue.withCtx, QE = window.Vue.toDisplayString, JE = window.Vue.createTextVNode, Mg = window.Vue.createBlock, ZE = window.Vue.normalizeProps, eA = window.Vue.guardReactiveProps, Dt = window.Vue.computed, tA = window.Vue.ref, nA = window.Vue.inject, oA = window.Vuex.useStore, sA = window.Codex.CdxButton, Kr = window.Codex.CdxIcon, aA = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    GE((_) => ({
      "4929555c": f.value
    }));
    const t = tA("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = W(), { targetLanguage: a } = M(oA()), r = Dt(() => t.value === "sentence"), c = Dt(
      () => n.value.subSections.find(
        (_) => _.sentences.some(
          (S) => {
            var V;
            return S.id === ((V = o.value) == null ? void 0 : V.id);
          }
        )
      )
    ), l = Dt(() => {
      var _;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : r.value ? (_ = o.value) == null ? void 0 : _.mtProposedTranslationUsed : c.value.proposedContentForMTValidation;
    }), d = nA("colors"), i = d.gray200, u = d.red600, g = Dt(() => s.value ? n.value.translatedTitle : r.value ? o.value.translatedContent : c.value.translatedContent), m = Dt(
      () => on.calculateScore(
        g.value,
        l.value,
        a.value
      )
    ), p = Dt(
      () => on.getScoreStatus(m.value)
    ), h = Dt(
      () => `translated-segment-card__modification-stats__percentage--${p.value}`
    ), w = Dt(() => ({
      failure: m.value === 0 ? null : d.yellow700,
      warning: d.yellow700,
      success: d.green600
    })), f = Dt(
      () => w.value[p.value]
    );
    return (_, S) => {
      const V = Pg("i18n"), A = Pg("i18n-html");
      return Ba(), Mg(ae(He), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: Ie(() => [
          Ce(ae(B), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: Ie(() => [
              Ce(RE, {
                selection: t.value,
                "onUpdate:selection": S[0] || (S[0] = (b) => t.value = b)
              }, null, 8, ["selection"]),
              Ce(ae(C), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: Ie(() => [
                  Ce(ae(B), { class: "ma-0" }, {
                    default: Ie(() => [
                      Ce(ae(C), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: Ie(() => [
                          Wr(XE("h5", null, null, 512), [
                            [V, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          m.value === 0 ? Wr((Ba(), Fg("p", {
                            key: 0,
                            style: WE({ color: ae(u) })
                          }, null, 4)), [
                            [V, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : Wr((Ba(), Fg("p", {
                            key: 1,
                            class: YE(h.value)
                          }, null, 2)), [
                            [A, [
                              m.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      Ce(ae(C), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: Ie(() => [
                          Ce(ae(B), { class: "ma-0 ms-2" }, {
                            default: Ie(() => [
                              Ce(ae(C), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: Ie(() => [
                                  Ce(ae(Kr), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ae(YC)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              Ce(ae(C), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: Ie(() => [
                                  Ce(ae(Em), {
                                    value: m.value,
                                    height: "4px",
                                    width: "64px",
                                    color: f.value,
                                    background: ae(i)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              Ce(ae(C), { shrink: "" }, {
                                default: Ie(() => [
                                  Ce(ae(Kr), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ae(WC)
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
                  r.value ? (Ba(), Mg(ae(sA), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: S[1] || (S[1] = (b) => _.$emit("edit-translation", g.value))
                  }, {
                    default: Ie(() => [
                      Ce(ae(Kr), {
                        class: "me-1",
                        icon: ae(Qc)
                      }, null, 8, ["icon"]),
                      JE(" " + QE(_.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : KE("", !0)
                ]),
                _: 1
              }),
              Ce(ae(C), { class: "translated-segment-card__actions" }, {
                default: Ie(() => [
                  Ce(qE, ZE(eA(_.$attrs)), null, 16)
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
}, iA = window.Vuex.useStore, rA = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = W(), n = iA(), { selectNextTranslationUnit: o, selectTranslationUnitById: s } = ro();
  return () => {
    const { currentTranslation: a } = n.state.application;
    if (e.value)
      if (a && !t.value) {
        const { lastTranslatedContentTranslationUnit: r } = e.value;
        e.value.selectTranslationUnitById(
          (r == null ? void 0 : r.id) || 0
        ), o();
      } else
        t.value || s(0);
  };
}, Op = window.Vuex.useStore, cA = () => {
  const e = Op(), { sourceLanguage: t, targetLanguage: n } = M(e);
  return () => y(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const o = yield Ya.fetchSupportedMTProviders(
      t.value,
      n.value
    );
    e.commit("mediawiki/addMtProviderGroup", o);
  });
}, lA = () => {
  const e = Op(), { currentMTProvider: t, sourceLanguage: n, targetLanguage: o } = M(e), s = cA();
  return () => y(void 0, null, function* () {
    e.commit("application/increaseTranslationDataLoadingCounter"), yield s();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, o.value);
    if (!t.value || !a.includes(t.value)) {
      const r = Q.getStorageKey(
        n.value,
        o.value
      ), c = mw.storage.get(r) || a[0];
      e.commit("application/setCurrentMTProvider", c);
    }
    e.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, uA = window.Vue.computed, dA = (e) => {
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
}, gA = () => {
  const { selectedContentTranslationUnit: e } = W(), t = uA(
    () => e.value instanceof Te
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && dA(o);
  };
}, mA = (e, t) => {
  const { content: n, origin: o, baseSectionId: s, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const r = t.filter(
    (c) => !Q.isUserMTProvider(c)
  );
  if (o !== "source" && o !== "user" && !r.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, pA = window.Vue.computed, Hp = () => {
  const { currentTranslation: e } = Cs(), { currentSourcePage: t } = at();
  return pA(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, hA = window.Vuex.useStore, dl = () => {
  const e = hA(), { sourceSection: t, targetPageTitleForPublishing: n } = W(), { pageURLParameter: o } = q(), { sourceLanguage: s, targetLanguage: a } = M(e), r = Hp();
  return () => {
    const c = n.value, l = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), d = `${r.value}_${t.value.id}`, i = t.value.getParallelCorporaUnits(d);
    i.forEach(
      (m) => mA(m, l)
    );
    const u = t.value.getTranslationProgress(a), g = e.getters["application/isSandboxTarget"];
    return je.saveTranslation({
      sourceTitle: o.value,
      targetTitle: c,
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
      progress: u
    });
  };
}, wA = window.Vue.effectScope, fA = window.Vue.onScopeDispose, _A = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = wA(!0), n = o.run(() => e(...a))), fA(s), n);
}, vA = window.Vuex.useStore;
let Yr;
const SA = () => {
  const e = vA(), t = dl();
  let n = 1e3, o = 0;
  return Yr = tl(() => t().then((a) => {
    a instanceof Qn ? (n *= o + 1, o++, setTimeout(Yr, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof no)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), Yr;
}, jp = _A(SA), yA = window.Vuex.useStore, CA = () => {
  const e = yA(), t = jp(), { currentMTProvider: n } = M(e), { sourceSection: o, currentProposedTranslation: s } = W(), { selectNextTranslationUnit: a } = ro();
  return () => y(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, kA = window.Vuex.useStore, xA = () => {
  const e = kA(), t = jp();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
};
const ee = window.Vue.unref, ze = window.Vue.createVNode, Tt = window.Vue.withCtx, bA = window.Vue.resolveDirective, Ng = window.Vue.createElementVNode, $A = window.Vue.withDirectives, VA = window.Vue.toDisplayString, EA = window.Vue.createTextVNode, AA = window.Vue.renderList, DA = window.Vue.Fragment, Jt = window.Vue.openBlock, Ug = window.Vue.createElementBlock, qn = window.Vue.createBlock;
window.Vue.createCommentVNode;
const TA = window.Vue.normalizeClass, LA = window.Vue.normalizeStyle, BA = { class: "sx-sentence-selector__header-title mb-0" }, PA = { class: "sx-sentence-selector__section-contents px-4" }, Gn = window.Vue.computed, FA = window.Vue.nextTick, MA = window.Vue.onMounted, Pa = window.Vue.ref, Ig = window.Vue.watch, NA = window.Vuex.useStore, zg = window.Codex.CdxButton, UA = window.Codex.CdxIcon, IA = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = Pa(!1), n = Pa(!1), o = Pa("100%"), s = NA(), { currentMTProvider: a, sourceLanguage: r, targetLanguage: c } = M(s), { sourceSection: l, selectedContentTranslationUnit: d } = W(), i = Gn(
      () => s.state.application.translationDataLoadingCounter === 0
    ), u = Gn(
      () => {
        var J;
        return (J = l.value) == null ? void 0 : J.isSelectedTranslationUnitTranslated;
      }
    ), g = Gn(() => {
      var J;
      return (J = l.value) == null ? void 0 : J.subSections;
    }), m = Gn(
      () => {
        var J;
        return (J = l.value) == null ? void 0 : J.selectedTranslationUnitOriginalContent;
      }
    ), p = Gn(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), h = ht(), w = rA();
    lA()();
    const _ = gA();
    MA(() => {
      Ig(
        i,
        () => y(this, null, function* () {
          i.value && (yield FA(), w(), _());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    }), Ig(d, _);
    const {
      selectNextTranslationUnit: S,
      selectPreviousTranslationUnit: V
    } = ro(), A = CA(), b = () => {
      h({
        event_type: "editor_segment_add",
        translation_source_language: r.value,
        translation_target_language: c.value
      }), A();
    }, F = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, x = we(), T = () => {
      const { autoSavePending: J } = s.state.application;
      if (J) {
        Fe.value = !0;
        return;
      }
      K();
    }, { fetchTranslationsByStatus: Y } = ei(), X = xA(), { clearURLParameters: I } = q(), K = () => y(this, null, function* () {
      Y("draft"), l.value.reset(), I(), X(), yield x.push({ name: "dashboard" });
      const { currentTranslation: J } = s.state.application;
      J && (s.commit("application/setCurrentTranslationRestored", !1), s.commit("application/setCurrentTranslation", null));
    }), {
      translateTranslationUnitById: le,
      translateSelectedTranslationUnitForAllProviders: Ge
    } = ul(), En = () => {
      We.value || (t.value = !0, Ge());
    }, { getCurrentTitleByLanguage: Mt } = Ft(), Xe = (J, ue) => {
      x.push({
        name: "sx-editor",
        state: {
          content: J,
          originalContent: m.value,
          title: Mt(
            c.value,
            r.value
          ),
          isInitialEdit: ue || null
        }
      });
    }, co = () => x.push({ name: "sx-publisher" }), ln = () => y(this, null, function* () {
      d.value ? yield le(
        d.value.id,
        a.value
      ) : yield le(0, a.value);
    }), We = Gn(
      () => d.value instanceof Te
    ), Fe = Pa(!1);
    return (J, ue) => {
      const un = bA("i18n");
      return Jt(), Ug("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: LA(p.value)
      }, [
        ze(ee(B), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: Tt(() => [
            ze(ee(C), { shrink: "" }, {
              default: Tt(() => [
                ze(ee(zg), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": J.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: T
                }, {
                  default: Tt(() => [
                    ze(ee(UA), { icon: ee(kp) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            ze(ee(C), {
              grow: "",
              class: "px-1"
            }, {
              default: Tt(() => [
                $A(Ng("h4", BA, null, 512), [
                  [un, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            ze(ee(C), {
              shrink: "",
              class: "px-3"
            }, {
              default: Tt(() => [
                ze(ee(zg), {
                  disabled: !(ee(l) && ee(l).isTranslated),
                  onClick: co
                }, {
                  default: Tt(() => [
                    EA(VA(J.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        i.value ? (Jt(), qn(ee(B), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: Tt(() => [
            ze(ee(C), {
              dir: ee(O.getDir)(ee(r)),
              lang: ee(r),
              class: "sx-sentence-selector__section"
            }, {
              default: Tt(() => [
                ze(f5),
                Ng("div", PA, [
                  (Jt(!0), Ug(DA, null, AA(g.value, (ie) => (Jt(), qn(cE, {
                    id: ie.id,
                    key: `sub-section-${ie.id}`,
                    "sub-section": ie,
                    onBounceTranslation: F
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !We.value && u.value ? (Jt(), qn(aA, {
              key: 0,
              onEditTranslation: ue[0] || (ue[0] = (ie) => Xe(ie, !1)),
              onSkipTranslation: ee(S),
              onSelectPreviousSegment: ee(V)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : We.value ? (Jt(), qn(LE, {
              key: 2,
              onEditTranslation: Xe,
              onApplyTranslation: b,
              onSkipTranslation: ee(S),
              onSelectPreviousSegment: ee(V)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : (Jt(), qn(Y5, {
              key: 1,
              class: TA({ "mb-0": !n.value }),
              onConfigureOptions: En,
              onEditTranslation: ue[1] || (ue[1] = (ie) => Xe(ie, !0)),
              onApplyTranslation: b,
              onSkipTranslation: ee(S),
              onSelectPreviousSegment: ee(V),
              onRetryTranslation: ln
            }, null, 8, ["class", "onSkipTranslation", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Jt(), qn(ee(B), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: Tt(() => [
            ze(ee(st), { class: "mt-0" })
          ]),
          _: 1
        })),
        ze(a5, {
          active: t.value,
          "onUpdate:active": ue[2] || (ue[2] = (ie) => t.value = ie)
        }, null, 8, ["active"]),
        ze(PV, {
          modelValue: Fe.value,
          "onUpdate:modelValue": ue[3] || (ue[3] = (ie) => Fe.value = ie),
          onDiscardTranslation: K
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const zA = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: IA
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, RA = window.Vue.resolveComponent, OA = window.Vue.createVNode, HA = window.Vue.normalizeClass, jA = window.Vue.openBlock, qA = window.Vue.createElementBlock;
function GA(e, t, n, o, s, a) {
  const r = RA("sx-sentence-selector");
  return jA(), qA("main", {
    class: HA(["sx-sentence-selector-view", a.classes])
  }, [
    OA(r)
  ], 2);
}
const XA = /* @__PURE__ */ P(zA, [["render", GA]]), WA = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, KA = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const YA = window.Vue.resolveDirective, Fa = window.Vue.withDirectives, tt = window.Vue.openBlock, Lt = window.Vue.createElementBlock, Ma = window.Vue.createCommentVNode, Na = window.Vue.Transition, vn = window.Vue.withCtx, Xn = window.Vue.createVNode, Wo = window.Vue.createElementVNode, Sn = window.Vue.unref, QA = window.Vue.renderList, JA = window.Vue.Fragment, ZA = window.Vue.normalizeClass, Rg = window.Vue.createBlock, eD = window.Vue.toDisplayString, tD = window.Vue.createTextVNode, nD = { class: "sx-quick-tutorial" }, oD = { class: "sx-quick-tutorial__main-point py-9 px-6" }, sD = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, aD = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, iD = { class: "sx-quick-tutorial__illustration" }, rD = ["innerHTML"], cD = ["innerHTML"], lD = { class: "sx-quick-tutorial__step-indicator py-3" }, uD = ["onClick"], dD = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, gD = {
  key: "secondary-point-1",
  class: "ma-0"
}, mD = {
  key: "secondary-point-2",
  class: "ma-0"
}, pD = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, Og = window.Vue.ref, Hg = window.Codex.CdxButton, hD = window.Codex.CdxIcon, wD = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = Og(2), n = Og(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (c) => c === n.value, a = we(), r = () => a.push({ name: "sx-sentence-selector" });
    return (c, l) => {
      const d = YA("i18n");
      return tt(), Lt("section", nD, [
        Xn(Sn(B), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: vn(() => [
            Wo("section", oD, [
              Xn(Na, {
                name: "fade",
                mode: "out-in"
              }, {
                default: vn(() => [
                  s(1) ? Fa((tt(), Lt("h2", sD, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? Fa((tt(), Lt("h2", aD, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : Ma("", !0)
                ]),
                _: 1
              })
            ]),
            Wo("section", iD, [
              Xn(Na, { name: "mw-ui-animation-slide-left" }, {
                default: vn(() => [
                  s(1) ? (tt(), Lt("div", {
                    key: "illustration-1",
                    innerHTML: Sn(KA)
                  }, null, 8, rD)) : s(2) ? (tt(), Lt("div", {
                    key: "illustration-2",
                    innerHTML: Sn(WA)
                  }, null, 8, cD)) : Ma("", !0)
                ]),
                _: 1
              })
            ]),
            Wo("div", lD, [
              (tt(!0), Lt(JA, null, QA(t.value, (i) => (tt(), Lt("span", {
                key: `dot-${i}`,
                class: ZA(["dot mx-1", { "dot-active": s(i) }]),
                role: "button",
                onClick: (u) => n.value = i
              }, null, 10, uD))), 128))
            ]),
            Wo("section", dD, [
              Xn(Na, {
                name: "fade",
                mode: "out-in"
              }, {
                default: vn(() => [
                  s(1) ? Fa((tt(), Lt("h3", gD, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? Fa((tt(), Lt("h3", mD, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : Ma("", !0)
                ]),
                _: 1
              })
            ]),
            Wo("div", pD, [
              Xn(Na, {
                name: "fade",
                mode: "out-in"
              }, {
                default: vn(() => [
                  s(1) ? (tt(), Rg(Sn(Hg), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": c.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: vn(() => [
                      Xn(Sn(hD), { icon: Sn(Es) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (tt(), Rg(Sn(Hg), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: r
                  }, {
                    default: vn(() => [
                      tD(eD(c.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  })) : Ma("", !0)
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
const fD = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: wD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, _D = window.Vue.resolveComponent, vD = window.Vue.createVNode, SD = window.Vue.normalizeClass, yD = window.Vue.openBlock, CD = window.Vue.createElementBlock;
function kD(e, t, n, o, s, a) {
  const r = _D("sx-quick-tutorial");
  return yD(), CD("main", {
    class: SD(["sx-quick-tutorial-view", a.classes])
  }, [
    vD(r)
  ], 2);
}
const xD = /* @__PURE__ */ P(fD, [["render", kD]]);
const jg = window.Vue.ref, bD = window.Vue.onMounted;
function $D(e, t) {
  const n = e.getElementsByTagName("a");
  for (const o of n)
    o.href = H.getPageUrl(t, o.title), o.target = "_blank";
}
const VD = {
  name: "SxEditorOriginalContent",
  components: { MwExpandableContent: D0 },
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
    return bD(() => {
      n.value = 2 * o(), $D(t.value, e.language);
    }), {
      originalContentRef: t,
      twoLinesHeight: n
    };
  }
}, ED = window.Vue.resolveDirective, qg = window.Vue.createElementVNode, AD = window.Vue.withDirectives, DD = window.Vue.resolveComponent, TD = window.Vue.withCtx, LD = window.Vue.createVNode, BD = window.Vue.openBlock, PD = window.Vue.createElementBlock, FD = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, MD = { class: "sx-editor__original-content-panel__header mb-2" }, ND = ["lang", "dir", "innerHTML"];
function UD(e, t, n, o, s, a) {
  const r = DD("mw-expandable-content"), c = ED("i18n");
  return BD(), PD("section", FD, [
    AD(qg("h5", MD, null, 512), [
      [c, void 0, "cx-sx-editor-original-panel-label"]
    ]),
    LD(r, {
      "min-height": o.twoLinesHeight,
      scroll: ""
    }, {
      default: TD(() => [
        qg("div", {
          ref: "originalContentRef",
          class: "sx-editor__original-content-panel__body",
          lang: n.language,
          dir: n.dir,
          innerHTML: n.originalContent
        }, null, 8, ND)
      ]),
      _: 1
    }, 8, ["min-height"])
  ]);
}
const ID = /* @__PURE__ */ P(VD, [["render", UD]]), zD = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const Qr = window.Vue.computed, RD = window.Vuex.useStore, OD = {
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
    const { targetLanguage: t } = M(RD()), n = Qr(
      () => on.calculateScore(
        e.editedTranslation,
        e.proposedTranslation,
        t.value
      )
    ), o = Qr(() => {
      const a = on.getScoreStatus(n.value);
      return a === "failure" ? n.value === 0 ? "failure" : "warning" : a;
    }), s = Qr(
      () => `sx-editor__feedback-overlay-content__stats--${o.value}`
    );
    return {
      happyRobotSVG: zD,
      modificationPercentageClass: s,
      mtScore: n
    };
  }
}, Ko = window.Vue.createElementVNode, Gg = window.Vue.resolveDirective, Jr = window.Vue.withDirectives, HD = window.Vue.normalizeClass, jD = window.Vue.openBlock, qD = window.Vue.createElementBlock, GD = window.Vue.createCommentVNode, XD = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, WD = { class: "sx-editor__feedback-overlay-content px-4" }, KD = ["innerHTML"], YD = { class: "sx-editor__feedback-overlay-content__title" }, QD = { class: "sx-editor__feedback-overlay-content__clarification mb-1" };
function JD(e, t, n, o, s, a) {
  const r = Gg("i18n"), c = Gg("i18n-html");
  return n.showFeedback ? (jD(), qD("div", XD, [
    Ko("div", WD, [
      Ko("div", {
        class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
        innerHTML: o.happyRobotSVG
      }, null, 8, KD),
      Jr(Ko("h2", YD, null, 512), [
        [r, void 0, "sx-editor-feedback-overlay-title"]
      ]),
      Jr(Ko("p", QD, null, 512), [
        [r, void 0, "sx-editor-feedback-overlay-clarification"]
      ]),
      Jr(Ko("p", {
        class: HD(["sx-editor__feedback-overlay-content__stats", o.modificationPercentageClass])
      }, null, 2), [
        [c, [o.mtScore], "sx-editor-feedback-overlay-stats"]
      ])
    ])
  ])) : GD("", !0);
}
const ZD = /* @__PURE__ */ P(OD, [["render", JD]]), eT = window.Vuex.useStore, tT = () => {
  const e = eT(), t = dl(), { selectNextTranslationUnit: n } = ro(), { sourceSection: o, selectedContentTranslationUnit: s } = W(), { getCurrentTitleByLanguage: a } = Ft();
  return (r) => y(void 0, null, function* () {
    const c = document.createElement("div");
    c.innerHTML = r, c.querySelectorAll(".sx-edit-dummy-node").forEach((u) => u.remove()), r = c.innerHTML;
    const { sourceLanguage: l, targetLanguage: d, currentMTProvider: i } = e.state.application;
    s.value instanceof Te && (r = (yield Xm(
      r,
      a(d, l),
      d
    )) || r), o.value.setTranslationForSelectedTranslationUnit(
      r,
      i
    ), t(), n();
  });
};
const Zr = window.Vue.ref, nT = window.Vue.computed, oT = window.Vuex.useStore, sT = {
  name: "SxEditor",
  components: {
    EditCompleteFeedback: ZD,
    MwRow: B,
    SxEditorOriginalContent: ID,
    VisualEditor: n2,
    MwSpinner: st
  },
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = Zr(!1), n = we(), o = oT(), s = () => t.value = !0, a = () => n.replace({ name: e.fromRoute }), { isFinalEdit: r, isInitialEdit: c, content: l, originalContent: d, title: i } = history.state, u = Zr(null), g = Zr(!1), m = ht(), { targetLanguage: p, sourceLanguage: h } = M(o), { sourceSection: w } = W(), f = nT(
      () => on.calculateScore(
        u.value,
        l,
        p.value
      )
    ), _ = tT(), S = (V) => y(this, null, function* () {
      u.value = V, g.value = !0;
      const A = new Promise((F) => setTimeout(F, 2e3));
      let b = Promise.resolve();
      r ? w.value.editedTranslation = V : (f.value === 0 && c && m({
        event_type: "editor_segment_add",
        translation_source_language: h.value,
        translation_target_language: p.value
      }), b = _(V)), yield Promise.all([A, b]), g.value = !1, a();
    });
    return {
      closeEditor: a,
      content: l,
      editedTranslation: u,
      editorReady: t,
      getDir: O.getDir,
      sourceLanguage: h,
      targetLanguage: p,
      onEditorReady: s,
      onEditCompleted: S,
      originalContent: d,
      showFeedback: g,
      title: i
    };
  }
}, Yo = window.Vue.resolveComponent, ec = window.Vue.openBlock, tc = window.Vue.createBlock, Xg = window.Vue.createCommentVNode, Wg = window.Vue.createVNode, aT = window.Vue.createElementVNode, iT = window.Vue.withCtx, rT = { class: "sx-editor__editing-surface-container grow" };
function cT(e, t, n, o, s, a) {
  const r = Yo("sx-editor-original-content"), c = Yo("mw-spinner"), l = Yo("edit-complete-feedback"), d = Yo("visual-editor"), i = Yo("mw-row");
  return ec(), tc(i, {
    tag: "section",
    class: "sx-editor ma-0 no-wrap",
    direction: "column",
    align: "normal"
  }, {
    default: iT(() => [
      o.originalContent ? (ec(), tc(r, {
        key: 0,
        language: o.sourceLanguage,
        dir: o.getDir(o.sourceLanguage),
        "original-content": o.originalContent
      }, null, 8, ["language", "dir", "original-content"])) : Xg("", !0),
      o.editorReady ? Xg("", !0) : (ec(), tc(c, { key: 1 })),
      aT("div", rT, [
        Wg(l, {
          "edited-translation": o.editedTranslation,
          "show-feedback": o.showFeedback,
          "proposed-translation": o.content
        }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
        Wg(d, {
          content: o.content,
          language: o.targetLanguage,
          dir: o.getDir(o.targetLanguage),
          title: o.title,
          onReady: o.onEditorReady,
          onClose: o.closeEditor,
          onEditCompleted: o.onEditCompleted
        }, null, 8, ["content", "language", "dir", "title", "onReady", "onClose", "onEditCompleted"])
      ])
    ]),
    _: 1
  });
}
const lT = /* @__PURE__ */ P(sT, [["render", cT]]);
const uT = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: lT
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
}, dT = window.Vue.resolveComponent, gT = window.Vue.createVNode, mT = window.Vue.normalizeClass, pT = window.Vue.openBlock, hT = window.Vue.createElementBlock;
function wT(e, t, n, o, s, a) {
  const r = dT("sx-editor");
  return pT(), hT("main", {
    class: mT(["sx-editor-view", a.classes])
  }, [
    gT(r, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const fT = /* @__PURE__ */ P(uT, [["render", wT]]);
const gt = window.Vue.unref, yn = window.Vue.createVNode, Qo = window.Vue.withCtx, _T = window.Vue.resolveDirective, vT = window.Vue.withDirectives, ST = window.Vue.openBlock, yT = window.Vue.createBlock, Kg = window.Codex.CdxButton, Yg = window.Codex.CdxIcon, CT = {
  __name: "SXPublisherHeader",
  props: {
    isPublishingDisabled: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["publish-translation"],
  setup(e) {
    const t = we(), n = () => t.push({ name: "sx-sentence-selector" });
    return (o, s) => {
      const a = _T("i18n");
      return ST(), yT(gt(B), { class: "ma-0 sx-publisher__header" }, {
        default: Qo(() => [
          yn(gt(C), {
            shrink: "",
            class: "me-2"
          }, {
            default: Qo(() => [
              yn(gt(Kg), {
                class: "px-3",
                weight: "quiet",
                onClick: n
              }, {
                default: Qo(() => [
                  yn(gt(Yg), { icon: gt(Vs) }, null, 8, ["icon"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          vT(yn(gt(C), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          yn(gt(C), { shrink: "" }, {
            default: Qo(() => [
              yn(gt(Kg), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                onClick: s[0] || (s[0] = (r) => o.$emit("publish-translation"))
              }, {
                default: Qo(() => [
                  yn(gt(Yg), { icon: gt(RC) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
}, kT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, xT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
const bT = {
  name: "SxPublisherAnimationDialog",
  components: { MwDialog: qe, MwRow: B, MwCol: C },
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
        svg: kT,
        title: e.$i18n("cx-sx-publisher-animation-publishing-indicator-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: xT,
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
}, nc = window.Vue.createElementVNode, Jg = window.Vue.toDisplayString, oc = window.Vue.resolveComponent, sc = window.Vue.withCtx, Zg = window.Vue.createVNode, $T = window.Vue.openBlock, VT = window.Vue.createBlock, ET = window.Vue.createCommentVNode, AT = ["innerHTML"], DT = ["textContent"], TT = ["textContent"];
function LT(e, t, n, o, s, a) {
  const r = oc("mw-col"), c = oc("mw-row"), l = oc("mw-dialog");
  return n.active ? ($T(), VT(l, {
    key: 0,
    "overlay-opacity": 0.85,
    header: !1,
    class: "sx-publisher__publish-animation"
  }, {
    default: sc(() => [
      Zg(c, { class: "ma-4" }, {
        default: sc(() => [
          Zg(r, null, {
            default: sc(() => [
              nc("div", {
                class: "sx-publisher__publish-animation-icon mb-4",
                innerHTML: a.animationSvg
              }, null, 8, AT),
              nc("h2", {
                textContent: Jg(a.animationTitle)
              }, null, 8, DT),
              nc("p", {
                class: "ma-0",
                textContent: Jg(a.animationSubtitle)
              }, null, 8, TT)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  })) : ET("", !0);
}
const BT = /* @__PURE__ */ P(bT, [["render", LT]]);
const De = window.Vue.unref, nt = window.Vue.createVNode, Bt = window.Vue.withCtx, PT = window.Vue.resolveDirective, FT = window.Vue.withDirectives, em = window.Vue.toDisplayString, MT = window.Vue.createTextVNode, ac = window.Vue.openBlock, tm = window.Vue.createElementBlock, NT = window.Vue.createCommentVNode, qp = window.Vue.createElementVNode, UT = window.Vue.createBlock, IT = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, zT = ["src"], RT = ["textContent"], OT = /* @__PURE__ */ qp("p", { class: "mt-0" }, null, -1), HT = window.Vue.computed, jT = window.Vue.inject, qT = window.Vue.ref, nm = window.Codex.CdxButton, GT = window.Codex.CdxIcon, XT = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: Fm,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = qT(""), s = () => n("close"), a = () => n("publish", o.value), r = jT("breakpoints"), c = HT(() => r.value.mobile);
    return (l, d) => {
      const i = PT("i18n");
      return e.active && e.captchaDetails ? (ac(), UT(De(qe), {
        key: 0,
        "overlay-opacity": 0.65,
        fullscreen: c.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: Bt(() => [
          nt(De(B), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: Bt(() => [
              nt(De(C), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: Bt(() => [
                  nt(De(nm), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    onClick: s
                  }, {
                    default: Bt(() => [
                      nt(De(GT), { icon: De(Vs) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              FT(nt(De(C), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [i, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              nt(De(C), {
                shrink: "",
                class: "justify-center"
              }, {
                default: Bt(() => [
                  nt(De(nm), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: Bt(() => [
                      MT(em(l.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          nt(De(qa))
        ]),
        default: Bt(() => [
          qp("div", IT, [
            e.captchaDetails.type === "image" ? (ac(), tm("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, zT)) : (ac(), tm("p", {
              key: 1,
              textContent: em(e.captchaDetails.question)
            }, null, 8, RT)),
            OT,
            nt(De(B), { class: "ma-0" }, {
              default: Bt(() => [
                nt(De(C), null, {
                  default: Bt(() => [
                    nt(De(Mc), {
                      value: o.value,
                      "onUpdate:value": d[0] || (d[0] = (u) => o.value = u),
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
      }, 8, ["fullscreen"])) : NT("", !0);
    };
  }
};
const Cn = window.Vue.unref, Jo = window.Vue.createVNode, Ua = window.Vue.withCtx, kn = window.Vue.createElementVNode, WT = window.Vue.resolveDirective, KT = window.Vue.withDirectives, YT = window.Vue.renderList, om = window.Vue.Fragment, ic = window.Vue.openBlock, sm = window.Vue.createElementBlock, QT = window.Vue.toDisplayString, JT = window.Vue.normalizeClass, ZT = window.Vue.createBlock, eL = { class: "mw-ui-dialog__header" }, tL = { class: "row ma-0 px-4 py-3" }, nL = { class: "col shrink justify-center" }, oL = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, sL = { class: "mb-0" }, aL = { class: "pa-4" }, iL = ["textContent"], rL = window.Vuex.useStore, Zo = window.Vue.computed, cL = window.Codex.CdxButton, lL = window.Codex.CdxIcon, uL = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = rL(), s = Zo(() => o.state.application.publishTarget), a = Zo(() => o.state.translator.isAnon), r = xe(), { sourceSection: c } = W(), l = Zo(
      () => c.value.isLeadSection ? r.i18n("cx-sx-publisher-lead-section-option-label") : r.i18n("cx-sx-publisher-new-section-option-label")
    ), d = Zo(
      () => c.value.isLeadSection ? r.i18n("cx-sx-publisher-lead-section-option-details") : r.i18n("cx-sx-publisher-new-section-option-details")
    ), i = Zo(() => [
      {
        label: l.value,
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
    ]), u = (p) => p === i.value.length - 1 ? "mb-1" : "mb-4", g = () => n("update:active", !1), m = (p) => {
      const h = p.target.value;
      o.commit("application/setPublishTarget", h), g();
    };
    return (p, h) => {
      const w = WT("i18n");
      return ic(), ZT(Cn(qe), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: p.$i18n("cx-sx-publisher-preview-options-title"),
        "overlay-opacity": 0.7,
        "overlay-color": p.$mwui.colors.gray700,
        onInput: h[0] || (h[0] = (f) => p.$emit("update:active", f)),
        onClose: g
      }, {
        header: Ua(() => [
          kn("div", eL, [
            kn("div", tL, [
              kn("div", nL, [
                Jo(Cn(cL), {
                  class: "pa-0",
                  weight: "quiet",
                  onClick: g
                }, {
                  default: Ua(() => [
                    Jo(Cn(lL), { icon: Cn(kp) }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              kn("div", oL, [
                KT(kn("h4", sL, null, 512), [
                  [w, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            Jo(Cn(qa))
          ])
        ]),
        default: Ua(() => [
          kn("div", aL, [
            Jo(Cn(i0), {
              value: s.value,
              name: "publish-options",
              onInput: m
            }, {
              default: Ua(() => [
                (ic(!0), sm(om, null, YT(i.value, (f, _) => (ic(), sm(om, {
                  key: f.label
                }, [
                  Jo(Cn(vc), {
                    class: "pa-0 my-1",
                    label: f.label,
                    "input-value": f.value,
                    disabled: f.disabled
                  }, null, 8, ["label", "input-value", "disabled"]),
                  kn("p", {
                    class: JT(["complementary ms-7 mt-0", u(_)]),
                    textContent: QT(f.details)
                  }, null, 10, iL)
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
const ot = window.Vue.unref, xn = window.Vue.createVNode, dL = window.Vue.resolveDirective, am = window.Vue.withDirectives, Ia = window.Vue.openBlock, im = window.Vue.createElementBlock, gL = window.Vue.createCommentVNode, rm = window.Vue.toDisplayString, rc = window.Vue.createElementVNode, Wn = window.Vue.withCtx, cm = window.Vue.createBlock, mL = window.Vue.Fragment, pL = window.Vue.normalizeClass, hL = { class: "sx-publisher__review-info__content" }, wL = {
  key: 0,
  class: "complementary ma-0"
}, fL = ["textContent"], _L = ["textContent"], Zt = window.Vue.computed, lm = window.Vue.ref, vL = window.Vue.watch, um = window.Codex.CdxButton, cc = window.Codex.CdxIcon, SL = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = lm(0), o = lm(null);
    vL(o, () => {
      var w;
      const h = (w = o.value) == null ? void 0 : w.$el;
      if (h instanceof HTMLElement) {
        const f = h.querySelector("a");
        f && f.setAttribute("target", "_blank");
      }
    });
    const s = Zt(
      () => {
        var h;
        return (h = t.publishFeedbackMessages) == null ? void 0 : h[n.value];
      }
    ), a = Zt(() => {
      var h;
      return ((h = s.value) == null ? void 0 : h.status) || "default";
    }), r = Zt(() => {
      switch (a.value) {
        case "warning":
          return Cp;
        case "error":
          return NC;
        default:
          return HC;
      }
    }), c = Zt(() => a.value === "default"), l = Zt(
      () => c.value ? "notice" : a.value
    ), d = Zt(
      () => `sx-publisher__review-info--${l.value}`
    ), i = xe(), u = Zt(() => {
      var h;
      return (h = s.value) == null ? void 0 : h.text;
    }), g = Zt(
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
      const f = dL("i18n-html");
      return Ia(), cm(ot(Tf), {
        type: l.value,
        class: pL(["sx-publisher__review-info ma-0 pa-4", d.value]),
        inline: c.value
      }, {
        icon: Wn(() => [
          xn(ot(cc), {
            icon: r.value,
            class: "shrink mw-ui-message__icon items-start me-1"
          }, null, 8, ["icon"])
        ]),
        default: Wn(() => [
          rc("div", hL, [
            a.value === "default" ? am((Ia(), im("p", wL, null, 512)), [
              [f, void 0, "cx-sx-publisher-review-info"]
            ]) : (Ia(), im(mL, { key: 1 }, [
              rc("h5", {
                textContent: rm(g.value)
              }, null, 8, fL),
              rc("p", {
                textContent: rm(u.value)
              }, null, 8, _L),
              xn(ot(B), {
                justify: "between",
                class: "ma-0"
              }, {
                default: Wn(() => [
                  am(xn(ot(C), {
                    ref_key: "learnMoreContainer",
                    ref: o,
                    class: "sx-publisher__review-info__learn-more-anchor"
                  }, null, 512), [
                    [f, void 0, "cx-sx-publisher-review-info-learn-more"]
                  ]),
                  e.publishFeedbackMessages.length > 1 ? (Ia(), cm(ot(C), {
                    key: 0,
                    class: "sx-publisher__review-info__navigation-buttons justify-end",
                    align: "center"
                  }, {
                    default: Wn(() => [
                      xn(ot(um), {
                        weight: "quiet",
                        class: "pa-0 me-1",
                        onClick: m
                      }, {
                        default: Wn(() => [
                          xn(ot(cc), { icon: ot(el) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }),
                      xn(ot(um), {
                        weight: "quiet",
                        class: "pa-0 ms-1",
                        onClick: p
                      }, {
                        default: Wn(() => [
                          xn(ot(cc), { icon: ot(Es) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : gL("", !0)
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
}, yL = (e) => {
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
}, dm = window.Vue.ref, CL = window.Vuex.useStore, kL = () => {
  const e = CL(), { pageURLParameter: t } = q(), { sourceSection: n, targetPageTitleForPublishing: o } = W(), s = Hp(), a = dm(!1), r = dm("pending"), c = () => a.value = !1, l = dl(), d = (u, g) => y(void 0, null, function* () {
    const m = yield l();
    if (m instanceof Qn)
      return { publishFeedbackMessage: m, targetUrl: null };
    const p = m, {
      /** @type {PageSection} */
      sourceLanguage: h,
      targetLanguage: w
    } = e.state.application, f = o.value, _ = e.getters["application/isSandboxTarget"], S = {
      html: yL(n.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: f,
      sourceSectionTitle: n.value.sourceSectionTitleForPublishing,
      targetSectionTitle: n.value.targetSectionTitleForPublishing,
      sourceLanguage: h,
      targetLanguage: w,
      revision: s.value,
      isSandbox: _,
      sectionTranslationId: p
    };
    return u && (S.captchaId = u, S.captchaWord = g), je.publishTranslation(S);
  });
  return {
    closePublishDialog: c,
    doPublish: (u = null, g = null) => y(void 0, null, function* () {
      r.value = "pending", a.value = !0;
      let m;
      try {
        m = yield d(
          g == null ? void 0 : g.id,
          u
        );
      } catch (p) {
        if (p instanceof no)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw p;
      }
      return m;
    }),
    isPublishDialogActive: a,
    publishStatus: r
  };
}, xL = window.Vue.computed, bL = () => {
  const e = we(), { sourceSection: t } = W(), { getCurrentTitleByLanguage: n } = Ft(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = q(), a = xL(
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
}, $L = window.Vuex.useStore, VL = () => {
  const e = $L(), { targetLanguage: t } = M(e), { sourceSection: n } = W();
  return () => {
    const o = on.getMTScoreForPageSection(
      n.value,
      t.value
    ), s = on.getScoreStatus(o);
    if (s === "success")
      return null;
    const a = 100 - o, r = s === "failure" ? "error" : "warning";
    let c, l;
    return r === "warning" ? (c = mw.message("cx-sx-publisher-mt-abuse-message-title", a).plain(), l = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (c = mw.message("cx-sx-publisher-mt-abuse-error-title", a).plain(), l = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new Qn({
      title: c,
      text: l,
      status: r,
      type: "mt"
    });
  };
}, EL = window.Vue.ref, AL = window.Vue.computed, DL = () => {
  const e = VL(), t = EL([]), n = AL(
    () => t.value.some((r) => r.isError)
  );
  return {
    addPublishFeedbackMessage: (r) => {
      t.value.push(r), t.value.sort((c, l) => +l.isError - +c.isError);
    },
    clearPublishFeedbackMessages: () => {
      t.value = [];
    },
    publishFeedbackMessages: t,
    isPublishingDisabled: n,
    initializePublishFeedbackMessages: () => y(void 0, null, function* () {
      const r = yield e();
      r && t.value.push(r);
    })
  };
}, TL = window.Vuex.useStore, LL = () => {
  const e = TL(), { currentSourcePage: t } = at(), { sourceLanguage: n, targetLanguage: o } = M(e), { sourceSection: s, targetPageTitleForPublishing: a } = W();
  return (r) => y(void 0, null, function* () {
    const c = a.value, l = e.getters["application/isSandboxTarget"], d = t.value.title, i = new mw.Title(d), u = mw.config.get("wgNamespaceIds");
    if (s.value.isLeadSection && !l && i.getNamespaceId() !== u.user)
      try {
        yield Ya.addWikibaseLink(
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
}, gm = window.Vue.ref, BL = () => {
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
const ce = window.Vue.unref, Ee = window.Vue.createVNode, PL = window.Vue.resolveDirective, es = window.Vue.createElementVNode, FL = window.Vue.withDirectives, Kn = window.Vue.withCtx, ML = window.Vue.openBlock, NL = window.Vue.createElementBlock, UL = { class: "sx-publisher" }, IL = { class: "sx-publisher__publish-panel pa-4" }, zL = { class: "mb-2" }, RL = ["innerHTML"], OL = { class: "sx-publisher__section-preview pa-5" }, HL = ["innerHTML"], mm = window.Vue.computed, jL = window.Vue.onMounted, qL = window.Vue.ref, GL = window.Vue.watch, XL = window.Vuex.useStore, pm = window.Codex.CdxButton, hm = window.Codex.CdxIcon, WL = {
  __name: "SXPublisher",
  setup(e) {
    const t = XL(), { sourceSection: n } = W(), o = mm(() => {
      var x;
      return (x = n.value) == null ? void 0 : x.title;
    }), s = xe(), a = mm(() => t.getters["application/isSandboxTarget"] ? s.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : n.value.isLeadSection ? s.i18n("cx-sx-publisher-publish-panel-lead-section-result") : s.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: r,
      captchaDialogOn: c,
      handleCaptchaError: l,
      onCaptchaDialogClose: d
    } = BL(), {
      publishFeedbackMessages: i,
      isPublishingDisabled: u,
      addPublishFeedbackMessage: g,
      clearPublishFeedbackMessages: m,
      initializePublishFeedbackMessages: p
    } = DL(), h = LL(), { doPublish: w, isPublishDialogActive: f, publishStatus: _, closePublishDialog: S } = kL(), V = (x = null) => y(this, null, function* () {
      const T = yield w(x, r);
      if (!T)
        return;
      const { publishFeedbackMessage: Y, targetUrl: X } = T;
      if (l(Y)) {
        S();
        return;
      } else
        Y && g(Y);
      _.value = u.value ? "failure" : "success", setTimeout(() => {
        if (u.value) {
          S();
          return;
        }
        h(X);
      }, 1e3);
    });
    jL(() => p());
    const A = bL(), b = qL(!1), F = () => b.value = !0;
    return GL(b, (x) => {
      x || m();
    }), (x, T) => {
      const Y = PL("i18n");
      return ML(), NL("section", UL, [
        Ee(CT, {
          "is-publishing-disabled": ce(u),
          onPublishTranslation: V
        }, null, 8, ["is-publishing-disabled"]),
        es("div", IL, [
          FL(es("h5", zL, null, 512), [
            [Y, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          es("h6", {
            class: "mb-2",
            innerHTML: a.value
          }, null, 8, RL),
          Ee(ce(B), {
            justify: "end",
            class: "ma-0"
          }, {
            default: Kn(() => [
              Ee(ce(C), { shrink: "" }, {
                default: Kn(() => [
                  Ee(ce(pm), {
                    weight: "quiet",
                    onClick: F
                  }, {
                    default: Kn(() => [
                      Ee(ce(hm), { icon: ce(KC) }, null, 8, ["icon"])
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
        Ee(SL, { "publish-feedback-messages": ce(i) }, null, 8, ["publish-feedback-messages"]),
        es("section", OL, [
          Ee(ce(B), { class: "pb-5 ma-0" }, {
            default: Kn(() => [
              Ee(ce(C), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                innerHTML: o.value
              }, null, 8, ["innerHTML"]),
              Ee(ce(C), { shrink: "" }, {
                default: Kn(() => [
                  Ee(ce(pm), {
                    weight: "quiet",
                    onClick: ce(A)
                  }, {
                    default: Kn(() => [
                      Ee(ce(hm), { icon: ce(Qc) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          es("div", {
            innerHTML: ce(n).translationHtml
          }, null, 8, HL)
        ]),
        Ee(uL, {
          active: b.value,
          "onUpdate:active": T[0] || (T[0] = (X) => b.value = X)
        }, null, 8, ["active"]),
        Ee(XT, {
          active: ce(c),
          "captcha-details": ce(r),
          onClose: ce(d),
          onPublish: T[1] || (T[1] = (X) => V(X))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        Ee(BT, {
          active: ce(f),
          status: ce(_)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const KL = {
  name: "SxPublisherView",
  components: {
    SxPublisher: WL
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, YL = window.Vue.resolveComponent, QL = window.Vue.createVNode, JL = window.Vue.normalizeClass, ZL = window.Vue.openBlock, e6 = window.Vue.createElementBlock;
function t6(e, t, n, o, s, a) {
  const r = YL("sx-publisher");
  return ZL(), e6("main", {
    class: JL(["sx-publisher-view", a.classes])
  }, [
    QL(r)
  ], 2);
}
const n6 = /* @__PURE__ */ P(KL, [["render", t6]]);
const o6 = {
  name: "SxSearchArticleSuggestion",
  components: { MwThumbnail: Nc, MwIcon: me, MwRow: B, MwCol: C },
  props: {
    suggestion: {
      type: ao,
      required: !0
    }
  },
  setup(e) {
    return { mwIconStar: Ow, mwIconLanguage: Xw, mwIconArticle: Fc, getDir: O.getDir };
  }
}, za = window.Vue.resolveComponent, en = window.Vue.createVNode, bn = window.Vue.withCtx, lc = window.Vue.toDisplayString, uc = window.Vue.createElementVNode, s6 = window.Vue.openBlock, a6 = window.Vue.createBlock, i6 = ["textContent"], r6 = ["textContent"], c6 = ["textContent"];
function l6(e, t, n, o, s, a) {
  const r = za("mw-thumbnail"), c = za("mw-col"), l = za("mw-icon"), d = za("mw-row");
  return s6(), a6(d, {
    class: "cx-search-suggestion pt-3 ma-0",
    align: "normal",
    lang: n.suggestion.language,
    dir: o.getDir(n.suggestion.language)
  }, {
    default: bn(() => [
      en(c, { shrink: "" }, {
        default: bn(() => [
          en(r, {
            class: "cx-search-suggestion__thumbnail",
            thumbnail: n.suggestion.thumbnail,
            "thumbnail-size": 56,
            "placeholder-icon-size": 30
          }, null, 8, ["thumbnail"])
        ]),
        _: 1
      }),
      en(c, { class: "ms-4" }, {
        default: bn(() => [
          en(d, {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: bn(() => [
              en(c, {
                shrink: "",
                class: "mb-1"
              }, {
                default: bn(() => [
                  uc("h5", {
                    class: "my-0 cx-search-suggestion__source-title",
                    textContent: lc(n.suggestion.title)
                  }, null, 8, i6)
                ]),
                _: 1
              }),
              en(c, {
                shrink: "",
                class: "mb-1"
              }, {
                default: bn(() => [
                  uc("p", {
                    class: "ma-0 cx-search-suggestion__source-description complementary",
                    textContent: lc(n.suggestion.description)
                  }, null, 8, r6)
                ]),
                _: 1
              }),
              en(c, {
                class: "cx-search-suggestion__languages",
                shrink: "",
                align: "center"
              }, {
                default: bn(() => [
                  en(l, {
                    icon: o.mwIconLanguage,
                    size: 16,
                    class: "me-2"
                  }, null, 8, ["icon"]),
                  uc("small", {
                    textContent: lc(n.suggestion.langLinksCount)
                  }, null, 8, c6)
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
const Gp = /* @__PURE__ */ P(o6, [["render", l6]]), u6 = window.Vue.computed, wm = window.Vue.ref, d6 = window.Vue.watch, g6 = (e, t) => {
  const o = wm([]), s = wm(!1), a = u6(
    () => o.value.slice(0, 4)
  ), r = tl(() => y(void 0, null, function* () {
    try {
      o.value = yield io.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      s.value = !1;
    }
  }), 500);
  return d6(t, () => {
    s.value = !0, o.value = [], r();
  }), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
};
const m6 = window.Vue.computed, p6 = window.Vuex.useStore, h6 = {
  name: "SearchResultsCard",
  components: { SxSearchArticleSuggestion: Gp, MwCard: He, MwSpinner: st },
  props: {
    searchInput: {
      type: String,
      default: null
    }
  },
  emits: ["suggestion-clicked"],
  setup(e) {
    const { sourceLanguage: t, sourceLanguageAutonym: n } = M(
      p6()
    ), o = m6(() => e.searchInput), { searchResultsLoading: s, searchResultsSlice: a } = g6(
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
}, dc = window.Vue.resolveComponent, ts = window.Vue.openBlock, gc = window.Vue.createBlock, w6 = window.Vue.createCommentVNode, f6 = window.Vue.resolveDirective, _6 = window.Vue.withDirectives, fm = window.Vue.createElementBlock, v6 = window.Vue.renderList, S6 = window.Vue.Fragment, y6 = window.Vue.withCtx, C6 = {
  key: 1,
  class: "sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
};
function k6(e, t, n, o, s, a) {
  const r = dc("mw-spinner"), c = dc("sx-search-article-suggestion"), l = dc("mw-card"), d = f6("i18n");
  return ts(), gc(l, { class: "sx-article-search__results mb-0 pa-4" }, {
    default: y6(() => [
      o.searchResultsLoading ? (ts(), gc(r, { key: 0 })) : o.searchResultsSlice.length === 0 ? _6((ts(), fm("p", C6, null, 512)), [
        [d, [
          n.searchInput,
          o.sourceLanguageAutonym
        ], "cx-sx-article-search-no-search-results-message"]
      ]) : w6("", !0),
      (ts(!0), fm(S6, null, v6(o.searchResultsSlice, (i) => (ts(), gc(c, {
        key: i.pageid,
        suggestion: i,
        onClick: (u) => e.$emit("suggestion-clicked", i)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ]),
    _: 1
  });
}
const x6 = /* @__PURE__ */ P(h6, [["render", k6]]);
const b6 = window.Vuex.mapState, $6 = {
  name: "ArticleSuggestionsCard",
  components: { SxSearchArticleSuggestion: Gp, MwCard: He },
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
  computed: be({}, b6({
    sourceLanguage: (e) => e.application.sourceLanguage
  }))
}, V6 = window.Vue.toDisplayString, E6 = window.Vue.createElementVNode, A6 = window.Vue.renderList, D6 = window.Vue.Fragment, mc = window.Vue.openBlock, T6 = window.Vue.createElementBlock, _m = window.Vue.resolveComponent, vm = window.Vue.createBlock, Sm = window.Vue.withCtx, L6 = ["textContent"];
function B6(e, t, n, o, s, a) {
  const r = _m("sx-search-article-suggestion"), c = _m("mw-card");
  return mc(), vm(c, { class: "sx-article-search__suggestions mb-0 pa-4" }, {
    header: Sm(() => [
      E6("h5", {
        class: "ma-0 pb-1 sx-article-search__suggestions-header",
        textContent: V6(n.cardTitle)
      }, null, 8, L6)
    ]),
    default: Sm(() => [
      (mc(!0), T6(D6, null, A6(n.suggestions, (l) => (mc(), vm(r, {
        key: l.pageid,
        suggestion: l,
        onClick: (d) => e.$emit("suggestion-clicked", l)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ]),
    _: 1
  });
}
const ym = /* @__PURE__ */ P($6, [["render", B6]]), P6 = window.Vue.computed, F6 = (e, t) => P6(() => {
  const o = {
    value: "other",
    props: {
      icon: Yw,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  }, s = [
    e.value,
    ...t.value.slice(0, 2)
  ];
  return [...s.filter(
    (r, c) => s.findIndex((l) => l === r) === c
  ).map((r) => ({
    value: r,
    props: {
      label: O.getAutonym(r),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), o];
}), M6 = window.Vue.computed, N6 = (e, t, n) => M6(() => {
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
const U6 = window.Vue.resolveDirective, I6 = window.Vue.createElementVNode, pc = window.Vue.withDirectives, ge = window.Vue.unref, ns = window.Vue.withCtx, mt = window.Vue.createVNode, os = window.Vue.openBlock, Cm = window.Vue.createBlock, z6 = window.Vue.createCommentVNode, hc = window.Vue.createElementBlock, R6 = window.Vue.Fragment, O6 = window.Vue.vShow, H6 = { class: "sx-article-search" }, j6 = { class: "mb-0" }, q6 = {
  key: 2,
  class: "sx-article-search__empty-suggestions-message mt-12 pa-4 mb-0"
}, ss = window.Vue.ref, G6 = window.Vue.onMounted, wc = window.Vue.computed, km = window.Vue.watch, X6 = window.Vue.inject, W6 = window.Vuex.useStore, K6 = window.Codex.CdxButton, Y6 = window.Codex.CdxIcon, Q6 = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = ss(""), n = ss(!1), o = ss(null), s = ss(!1), a = ss([]), r = W6(), { sourceLanguage: c, targetLanguage: l } = M(r), { supportedLanguageCodes: d } = ks(), i = N6(
      c,
      l,
      a
    ), u = F6(
      c,
      i
    ), g = we(), { fetchAllTranslations: m } = ei();
    G6(() => y(this, null, function* () {
      var K;
      yield vp()(), m();
      try {
        a.value.push(
          ...JSON.parse(localStorage.getItem("uls-previous-languages"))
        );
      } catch (le) {
      }
      (K = o.value) == null || K.focus();
    }));
    const p = () => {
      g.push({ name: "dashboard" });
    }, h = Sp(), w = (I) => h(I, l.value), f = (I) => {
      if (I === "other") {
        s.value = !0;
        return;
      }
      w(I);
    };
    km(c, () => r.dispatch("mediawiki/fetchNearbyPages"), {
      immediate: !0
    });
    const _ = ht();
    km(t, () => {
      n.value || (n.value = !0, _({
        event_type: "dashboard_search",
        translation_source_language: c.value,
        translation_target_language: l.value
      }));
    });
    const S = () => {
      s.value = !1;
    }, V = (I) => {
      s.value = !1, a.value.push(I), f(I);
    }, A = wc(
      () => r.getters["mediawiki/getRecentlyEditedPages"]
    ), b = wc(() => r.getters["mediawiki/getNearbyPages"]), F = X6("breakpoints"), x = wc(() => F.value.tabletAndDown), {
      startRecentlyEditedSectionTranslation: T,
      startNearbySectionTranslation: Y,
      startSearchResultSectionTranslation: X
    } = Xc();
    return (I, K) => {
      const le = U6("i18n");
      return os(), hc("section", H6, [
        mt(ge(B), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: ns(() => [
            mt(ge(C), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: ns(() => [
                pc(I6("h5", j6, null, 512), [
                  [le, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            mt(ge(C), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: ns(() => [
                mt(ge(K6), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  onClick: p
                }, {
                  default: ns(() => [
                    mt(ge(Y6), { icon: ge(Vs) }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        mt(ge(Mc), {
          ref_key: "searchInputRef",
          ref: o,
          value: t.value,
          "onUpdate:value": K[0] || (K[0] = (Ge) => t.value = Ge),
          "icon-size": 20,
          icon: ge(bm),
          placeholder: I.$i18n("cx-sx-article-search-input-placeholder"),
          type: "search"
        }, null, 8, ["value", "icon", "placeholder"]),
        mt(ge(ms), {
          class: "sx-article-search__language-button-group",
          items: ge(u),
          active: ge(c),
          onSelect: f
        }, null, 8, ["items", "active"]),
        t.value ? z6("", !0) : (os(), hc(R6, { key: 0 }, [
          A.value && A.value.length ? (os(), Cm(ym, {
            key: 0,
            "card-title": I.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: A.value,
            onSuggestionClicked: ge(T)
          }, null, 8, ["card-title", "suggestions", "onSuggestionClicked"])) : b.value && b.value.length ? (os(), Cm(ym, {
            key: 1,
            "card-title": I.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: b.value,
            onSuggestionClicked: ge(Y)
          }, null, 8, ["card-title", "suggestions", "onSuggestionClicked"])) : pc((os(), hc("p", q6, null, 512)), [
            [le, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        pc(mt(x6, {
          "search-input": t.value,
          onSuggestionClicked: ge(X)
        }, null, 8, ["search-input", "onSuggestionClicked"]), [
          [O6, !!t.value]
        ]),
        mt(ge(qe), {
          value: s.value,
          "onUpdate:value": K[1] || (K[1] = (Ge) => s.value = Ge),
          class: "sx-article-search-language-selector",
          animation: "slide-up",
          fullscreen: x.value,
          header: x.value,
          "overlay-opacity": 0,
          title: I.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: S
        }, {
          default: ns(() => [
            mt(ge(Tp), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: ge(d),
              suggestions: ge(i),
              placeholder: I.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: V,
              onClose: S
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ]);
    };
  }
};
const J6 = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: Q6
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.tabletAndDown })
  }
}, Z6 = window.Vue.resolveComponent, e9 = window.Vue.createVNode, t9 = window.Vue.normalizeClass, n9 = window.Vue.openBlock, o9 = window.Vue.createElementBlock;
function s9(e, t, n, o, s, a) {
  const r = Z6("sx-article-search");
  return n9(), o9("main", {
    class: t9(["sx-article-search-view", a.classes])
  }, [
    e9(r)
  ], 2);
}
const a9 = /* @__PURE__ */ P(J6, [["render", s9]]), i9 = window.Vuex.useStore, Xp = [
  {
    path: "",
    name: "dashboard",
    component: $d,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: a9,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: A4,
    props: (e) => ({
      eventSource: e.query.eventSource
    }),
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
    component: $V,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: xD,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: XA,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: fT,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: n6,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: $d,
    meta: { workflowStep: 0 }
  }
], gl = ey({
  history: Zv(),
  routes: Xp
});
gl.beforeEach((e, t, n) => {
  const o = i9();
  if (o.commit("application/setPreviousRoute", t.name), mw.user.isAnon() || Am.assertUser().catch((c) => {
    c instanceof no && o.commit("application/setIsLoginDialogOn", !0);
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
    const c = Math.ceil(a) - 1, l = Xp.find(
      (d) => d.meta.workflowStep === c
    );
    n({ name: l.name });
    return;
  }
  n();
});
gl.afterEach((e, t) => {
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const r9 = window.Vue.createApp, c9 = mw.config.get("wgUserLanguage"), l9 = "en", u9 = mw.messages.values || {}, cn = r9(E_);
cn.config.globalProperties.$incompleteVersion = !0;
const d9 = rk();
cn.use(d9);
cn.use(gl);
cn.use(yv);
cn.use(R0);
cn.use(z0);
const g9 = cy({
  locale: c9,
  finalFallback: l9,
  messages: u9,
  wikilinks: !0
});
cn.use(g9);
cn.mount("#contenttranslation");
