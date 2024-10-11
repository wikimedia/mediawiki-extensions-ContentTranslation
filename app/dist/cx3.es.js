/*@nomin*/
var sh = Object.defineProperty, ah = Object.defineProperties;
var ih = Object.getOwnPropertyDescriptors;
var wc = Object.getOwnPropertySymbols;
var rh = Object.prototype.hasOwnProperty, lh = Object.prototype.propertyIsEnumerable;
var fc = (e, t, n) => t in e ? sh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, le = (e, t) => {
  for (var n in t || (t = {}))
    rh.call(t, n) && fc(e, n, t[n]);
  if (wc)
    for (var n of wc(t))
      lh.call(t, n) && fc(e, n, t[n]);
  return e;
}, Fe = (e, t) => ah(e, ih(t));
var y = (e, t, n) => new Promise((o, s) => {
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
}, ch = {
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
}, uh = window.Vue.toDisplayString, si = window.Vue.openBlock, ai = window.Vue.createElementBlock, dh = window.Vue.createCommentVNode, _c = window.Vue.createElementVNode, gh = window.Vue.normalizeClass, mh = ["width", "height", "aria-labelledby"], ph = ["id"], hh = ["fill"], wh = ["d"];
function fh(e, t, n, o, s, a) {
  return si(), ai("span", {
    class: gh(["mw-ui-icon notranslate", a.classes])
  }, [
    (si(), ai("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...i) => a.handleClick && a.handleClick(...i))
    }, [
      n.iconName ? (si(), ai("title", {
        key: 0,
        id: n.iconName
      }, uh(n.iconName), 9, ph)) : dh("", !0),
      _c("g", { fill: n.iconColor }, [
        _c("path", { d: a.iconImagePath }, null, 8, wh)
      ], 8, hh)
    ], 8, mh))
  ], 2);
}
const be = /* @__PURE__ */ P(ch, [["render", fh]]);
const _h = {
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
}, vh = window.Vue.renderSlot, Sh = window.Vue.resolveComponent, vc = window.Vue.normalizeClass, Ns = window.Vue.openBlock, ii = window.Vue.createBlock, ri = window.Vue.createCommentVNode, yh = window.Vue.toDisplayString, Ch = window.Vue.createElementBlock, kh = window.Vue.toHandlerKey, xh = window.Vue.withModifiers, bh = window.Vue.mergeProps, $h = window.Vue.createElementVNode, Vh = window.Vue.resolveDynamicComponent, Eh = window.Vue.withCtx, Ah = { class: "mw-ui-button__content" }, Dh = ["textContent"];
function Lh(e, t, n, o, s, a) {
  const i = Sh("mw-icon");
  return Ns(), ii(Vh(a.component), {
    class: vc(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: Eh(() => [
      vh(e.$slots, "default", {}, () => [
        $h("span", Ah, [
          n.icon ? (Ns(), ii(i, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: vc(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : ri("", !0),
          !a.isIcon && n.label ? (Ns(), Ch("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: yh(n.label)
          }, null, 8, Dh)) : ri("", !0),
          n.indicator ? (Ns(), ii(i, bh({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [kh(a.indicatorClickEvent)]: t[0] || (t[0] = xh((l) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : ri("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const De = /* @__PURE__ */ P(_h, [["render", Lh]]);
const Th = {
  name: "MwButtonGroup",
  components: {
    MwButton: De
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
}, Bh = window.Vue.renderList, Ph = window.Vue.Fragment, li = window.Vue.openBlock, Sc = window.Vue.createElementBlock, Fh = window.Vue.resolveComponent, Mh = window.Vue.withModifiers, Nh = window.Vue.mergeProps, Uh = window.Vue.createBlock, Ih = { class: "row mw-ui-button-group ma-0 pa-0" };
function zh(e, t, n, o, s, a) {
  const i = Fh("mw-button");
  return li(), Sc("div", Ih, [
    (li(!0), Sc(Ph, null, Bh(n.items, (l) => (li(), Uh(i, Nh({
      key: l.value,
      value: l.value,
      "aria-selected": a.isActive(l) || null
    }, l.props, {
      class: ["ma-0", a.buttonClasses(l)],
      style: a.activeIndicatorStyle(l),
      onClick: Mh((u) => e.$emit("select", l.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const _s = /* @__PURE__ */ P(Th, [["render", zh]]);
const Rh = {
  name: "MwUiBottomNavigation",
  components: { MwButtonGroup: _s },
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
}, Oh = window.Vue.renderSlot, Hh = window.Vue.resolveComponent, jh = window.Vue.createVNode, qh = window.Vue.createElementVNode, Gh = window.Vue.openBlock, Wh = window.Vue.createElementBlock, Xh = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, Kh = { class: "col-12 ma-0 pa-0" };
function Yh(e, t, n, o, s, a) {
  const i = Hh("mw-button-group");
  return Gh(), Wh("footer", Xh, [
    qh("div", Kh, [
      Oh(e.$slots, "default", {}, () => [
        jh(i, {
          class: "mw-ui-bottom-navigation__button-group justify-around",
          active: n.active,
          items: n.items,
          onSelect: t[0] || (t[0] = (l) => e.$emit("update:active", l))
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
}, yc = window.Vue.renderSlot, Zh = window.Vue.toDisplayString, Cc = window.Vue.openBlock, kc = window.Vue.createElementBlock, ew = window.Vue.createCommentVNode, tw = window.Vue.createElementVNode, nw = { class: "mw-ui-card" }, ow = ["textContent"], sw = { class: "mw-ui-card__content" };
function aw(e, t, n, o, s, a) {
  return Cc(), kc("div", nw, [
    yc(e.$slots, "header", {}, () => [
      n.title ? (Cc(), kc("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: Zh(n.title)
      }, null, 8, ow)) : ew("", !0)
    ]),
    tw("div", sw, [
      yc(e.$slots, "default")
    ])
  ]);
}
const et = /* @__PURE__ */ P(Jh, [["render", aw]]);
const iw = {}, rw = window.Vue.openBlock, lw = window.Vue.createElementBlock, cw = { class: "mw-ui-divider row" };
function uw(e, t) {
  return rw(), lw("div", cw);
}
const ja = /* @__PURE__ */ P(iw, [["render", uw]]);
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
const T = /* @__PURE__ */ P(Sw, [["render", Vw]]), ml = ["mobile", "tablet", "desktop", "desktop-wide"], Ew = ml.reduce(
  (e, t) => Fe(le({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), Aw = {
  name: "MwCol",
  props: Fe(le({}, Ew), {
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
      for (let n = 0; n < ml.length; n++) {
        let o = ml[n], s = this.$props[o];
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
}, Dw = window.Vue.renderSlot, Lw = window.Vue.resolveDynamicComponent, Tw = window.Vue.normalizeClass, Bw = window.Vue.withCtx, Pw = window.Vue.openBlock, Fw = window.Vue.createBlock;
function Mw(e, t, n, o, s, a) {
  return Pw(), Fw(Lw(n.tag), {
    class: Tw(a.classes)
  }, {
    default: Bw(() => [
      Dw(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const C = /* @__PURE__ */ P(Aw, [["render", Mw]]), Nw = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", Uw = "M3 3H1v16h18v-2H3z M11 11L8 9l-4 4v3h14V5z", Iw = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", qa = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", zw = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, Rw = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", Ow = "M20 7h-7L10 .5 7 7H0l5.46 5.47-1.64 7 6.18-3.7 6.18 3.73-1.63-7zm-10 6.9l-3.76 2.27 1-4.28L3.5 8.5h4.61L10 4.6l1.9 3.9h4.6l-3.73 3.4 1 4.28z", ym = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", pl = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", El = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", so = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", Hw = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", jw = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", Cm = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", km = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", qw = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", xm = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", Gw = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", Ww = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", Xw = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", Kw = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", Yw = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", Qw = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, Zn = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, Jw = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, Al = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, Zw = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, Dl = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", ef = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z", tf = "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 5h2v2H9zm0 4h2v6H9z", nf = "M 19 3 L 2 7 A 3.83 3.83 0 0 0 1 9.5 A 3.83 3.83 0 0 0 2 12 L 4 12.470703 L 4 15 C 4 16.108 4.892 17 6 17 C 7.108 17 8 16.108 8 15 L 8 13.412109 L 19 16 L 19 3 z";
const ci = window.Vue.computed, of = window.Vue.watch, sf = window.Vue.ref, af = window.Vue.nextTick, rf = {
  name: "MwDialog",
  components: {
    MwButton: De,
    MwRow: T,
    MwCol: C,
    MwDivider: ja
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
    const n = sf(null), o = ci(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = ci(() => ({
      "background-color": e.overlayColor,
      opacity: e.overlayOpacity
    })), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, i = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    of(
      () => e.value,
      (u) => {
        u ? (i(), af(() => {
          n.value.focus();
        })) : a();
      }
    );
    const l = ci(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: l,
      overlayStyles: s,
      mwIconClose: so,
      root: n
    };
  }
}, xc = window.Vue.normalizeStyle, ui = window.Vue.createElementVNode, di = window.Vue.renderSlot, Us = window.Vue.resolveComponent, ho = window.Vue.createVNode, gi = window.Vue.withCtx, bc = window.Vue.createCommentVNode, lf = window.Vue.withKeys, cf = window.Vue.normalizeClass, $c = window.Vue.openBlock, uf = window.Vue.createElementBlock, df = window.Vue.Transition, gf = window.Vue.createBlock, mf = { class: "mw-ui-dialog__shell items-stretch" }, pf = { class: "mw-ui-dialog__body" };
function hf(e, t, n, o, s, a) {
  const i = Us("mw-col"), l = Us("mw-button"), u = Us("mw-row"), g = Us("mw-divider");
  return $c(), gf(df, {
    name: `mw-ui-animation-${n.animation}`,
    style: xc(o.cssVars)
  }, {
    default: gi(() => [
      n.value ? ($c(), uf("div", {
        key: 0,
        ref: "root",
        class: cf(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = lf((r) => n.closeOnEscapeKey && o.close, ["esc"]))
      }, [
        ui("div", {
          class: "mw-ui-dialog__overlay",
          style: xc(o.overlayStyles),
          onClick: t[0] || (t[0] = (r) => !n.persistent && o.close)
        }, null, 4),
        ui("div", mf, [
          n.header ? di(e.$slots, "header", { key: 0 }, () => [
            ho(u, { class: "mw-ui-dialog__header" }, {
              default: gi(() => [
                ho(i, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                ho(i, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: gi(() => [
                    ho(l, {
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
            ho(g)
          ]) : bc("", !0),
          ui("div", pf, [
            di(e.$slots, "default")
          ]),
          di(e.$slots, "footer")
        ])
      ], 34)) : bc("", !0)
    ]),
    _: 3
  }, 8, ["name", "style"]);
}
const je = /* @__PURE__ */ P(rf, [["render", hf]]);
const wf = {
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
      const t = le({}, e.$attrs);
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
}, Vc = window.Vue.renderSlot, ff = window.Vue.resolveComponent, Is = window.Vue.openBlock, mi = window.Vue.createBlock, Ec = window.Vue.createCommentVNode, _f = window.Vue.resolveDynamicComponent, vf = window.Vue.toDisplayString, Sf = window.Vue.mergeProps, yf = window.Vue.withModifiers, Cf = window.Vue.createElementVNode, kf = window.Vue.normalizeClass, xf = window.Vue.createElementBlock, bf = { class: "mw-ui-input__content" };
function $f(e, t, n, o, s, a) {
  const i = ff("mw-icon");
  return Is(), xf("div", {
    class: kf(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    Cf("div", bf, [
      Vc(e.$slots, "icon", {}, () => [
        n.icon ? (Is(), mi(i, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : Ec("", !0)
      ]),
      (Is(), mi(_f(n.type === "textarea" ? n.type : "input"), Sf({
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
        textContent: vf(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      Vc(e.$slots, "indicator", {}, () => [
        n.indicator ? (Is(), mi(i, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = yf((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : Ec("", !0)
      ])
    ])
  ], 2);
}
const Ll = /* @__PURE__ */ P(wf, [["render", $f]]);
const Vf = {
  name: "MwMessage",
  components: { MwCol: C, MwRow: T, MwIcon: be, MwButton: De },
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
    mwIconClose: so,
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
      notice: Qw,
      warning: Al,
      success: Zn,
      error: Jw
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
}, pi = window.Vue.renderSlot, zs = window.Vue.resolveComponent, Ac = window.Vue.createVNode, Dc = window.Vue.withCtx, Lc = window.Vue.openBlock, Tc = window.Vue.createBlock, Bc = window.Vue.createCommentVNode, Ef = window.Vue.normalizeClass;
function Af(e, t, n, o, s, a) {
  const i = zs("mw-icon"), l = zs("mw-col"), u = zs("mw-button"), g = zs("mw-row");
  return e.shown ? (Lc(), Tc(g, {
    key: 0,
    class: Ef([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: Dc(() => [
      pi(e.$slots, "icon", {}, () => [
        Ac(i, {
          icon: a.icon,
          size: 24,
          class: "col shrink mw-ui-message__icon pa-1 items-start"
        }, null, 8, ["icon"])
      ]),
      Ac(l, {
        id: `${e.id}-label`,
        tag: "span",
        grow: "",
        align: "center",
        class: "mw-ui-message__label"
      }, {
        default: Dc(() => [
          pi(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id"]),
      pi(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (Lc(), Tc(u, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : Bc("", !0)
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : Bc("", !0);
}
const Df = /* @__PURE__ */ P(Vf, [["render", Af]]);
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
const Lf = {}, Tf = window.Vue.createElementVNode, Bf = window.Vue.openBlock, Pf = window.Vue.createElementBlock, Ff = { class: "mw-ui-spinner" }, Mf = /* @__PURE__ */ Tf("div", { class: "mw-ui-spinner__bounce" }, null, -1), Nf = [
  Mf
];
function Uf(e, t) {
  return Bf(), Pf("div", Ff, Nf);
}
const tt = /* @__PURE__ */ P(Lf, [["render", Uf]]), Oe = {
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
const If = window.Vue.computed, zf = {
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
      default: Dl
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
    const n = If(() => {
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
}, Pc = window.Vue.normalizeStyle, Fc = window.Vue.openBlock, Rf = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Of = window.Vue.resolveComponent, Hf = window.Vue.createBlock;
function jf(e, t, n, o, s, a) {
  const i = Of("mw-ui-icon");
  return n.thumbnail ? (Fc(), Rf("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Pc(o.style)
  }, null, 4)) : (Fc(), Hf(i, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Pc(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Tl = /* @__PURE__ */ P(zf, [["render", jf]]);
const qf = {
  name: "MwRadio",
  components: { MwRow: T },
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
}, Gf = window.Vue.vModelRadio, Ra = window.Vue.createElementVNode, Wf = window.Vue.withDirectives, Xf = window.Vue.toDisplayString, Kf = window.Vue.resolveComponent, Yf = window.Vue.normalizeClass, Qf = window.Vue.withCtx, Jf = window.Vue.openBlock, Zf = window.Vue.createBlock, e0 = { class: "mw-ui-radio__controls" }, t0 = ["id", "disabled", "name", "value"], n0 = /* @__PURE__ */ Ra("span", { class: "mw-ui-radio__controls__icon" }, null, -1), o0 = ["for", "textContent"];
function s0(e, t, n, o, s, a) {
  const i = Kf("mw-row");
  return Jf(), Zf(i, {
    class: Yf(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: Qf(() => [
      Ra("div", e0, [
        Wf(Ra("input", {
          id: n.id,
          "onUpdate:modelValue": t[0] || (t[0] = (l) => a.inputModel = l),
          type: "radio",
          disabled: n.disabled || null,
          name: n.name,
          value: n.inputValue
        }, null, 8, t0), [
          [Gf, a.inputModel]
        ]),
        n0
      ]),
      Ra("label", {
        for: n.id,
        class: "ps-2",
        textContent: Xf(n.label)
      }, null, 8, o0)
    ]),
    _: 1
  }, 8, ["class"]);
}
const hl = /* @__PURE__ */ P(qf, [["render", s0]]), Mc = window.Vue.h, a0 = {
  name: "MwRadioGroup",
  components: { MwRadio: hl },
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
      (o) => Mc(hl, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), Mc("div", { class: "mw-ui-radio-group" }, n);
  }
};
const i0 = {
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
}, Nc = window.Vue.normalizeClass, Uc = window.Vue.normalizeStyle, r0 = window.Vue.createElementVNode, l0 = window.Vue.openBlock, c0 = window.Vue.createElementBlock, u0 = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function d0(e, t, n, o, s, a) {
  return l0(), c0("div", {
    class: Nc(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: Uc(a.containerStyles)
  }, [
    r0("div", {
      class: Nc(["mw-progress-bar__bar", a.barClass]),
      style: Uc(a.barStyles)
    }, null, 6)
  ], 14, u0);
}
const bm = /* @__PURE__ */ P(i0, [["render", d0]]), g0 = (e, t, n, o) => (s) => {
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
}, m0 = (e, t, n, o) => ({ initiateDrag: g0(
  e,
  t,
  n,
  o
) }), p0 = window.Vue.ref, Ic = window.Vue.computed, h0 = (e, t, n, o) => {
  const s = p0(0), a = Ic(
    () => t.value > e.value
  ), i = Ic(
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
const Rs = window.Vue.ref, w0 = window.Vue.onMounted, zc = window.Vue.computed, f0 = window.Vue.nextTick, _0 = {
  name: "MwExpandableContent",
  components: {
    MwButton: De
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
    const t = Rs(!0), n = Rs(null), o = zc(
      () => Math.min(e.minHeight, s.value)
    ), s = Rs(1), { initiateDrag: a } = m0(
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
    } = h0(o, s, n, t), c = () => g(u.value + 1), d = Rs(null), m = zc(() => ({
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
    return w0(() => y(this, null, function* () {
      var w;
      yield f0(), s.value = n.value.scrollHeight, (w = d.value) == null || w.addEventListener(
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
      mwIconCollapse: Zw,
      mwIconExpand: pl,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), g(0)), t.value = !t.value;
      },
      scrollable: l,
      scrollIndex: u,
      scrollToNextStep: c
    };
  }
}, v0 = window.Vue.renderSlot, S0 = window.Vue.normalizeClass, Os = window.Vue.createElementVNode, y0 = window.Vue.resolveComponent, C0 = window.Vue.createVNode, hi = window.Vue.openBlock, k0 = window.Vue.createBlock, Rc = window.Vue.createCommentVNode, Oc = window.Vue.createElementBlock, x0 = window.Vue.normalizeStyle, b0 = { class: "mw-ui-expandable-content__container" }, $0 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, V0 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function E0(e, t, n, o, s, a) {
  const i = y0("mw-button");
  return hi(), Oc("div", {
    class: "mw-ui-expandable-content",
    style: x0(o.cssVars)
  }, [
    Os("div", b0, [
      Os("div", {
        ref: "contentRef",
        class: S0(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        v0(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (hi(), Oc("div", $0, [
        C0(i, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (hi(), k0(i, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : Rc("", !0)
      ])) : Rc("", !0)
    ]),
    Os("div", V0, [
      Os("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...l) => o.onDragButtonClicked && o.onDragButtonClicked(...l))
      })
    ], 512)
  ], 4);
}
const A0 = /* @__PURE__ */ P(_0, [["render", E0]]);
const Hs = window.Vue.computed, D0 = {
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
    const t = Hs(() => e.size / 2 * 0.9), n = Hs(() => Math.PI * (t.value * 2)), o = Hs(
      () => (100 - e.percentage) / 100 * n.value
    ), s = Hs(() => ({
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
}, Hc = window.Vue.createElementVNode, jc = window.Vue.normalizeStyle, L0 = window.Vue.openBlock, T0 = window.Vue.createElementBlock, B0 = ["width", "height", "viewport"], P0 = ["r", "cx", "cy", "stroke-dasharray"], F0 = ["r", "cx", "cy", "stroke-dasharray"];
function M0(e, t, n, o, s, a) {
  return L0(), T0("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: jc(o.cssVars)
  }, [
    Hc("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, P0),
    Hc("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: jc({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, F0)
  ], 12, B0);
}
const N0 = /* @__PURE__ */ P(D0, [["render", M0]]), U0 = window.Vue.ref, It = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, zt = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${It.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${It.tablet}px) and (max-width: ${It.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${It.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${It.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${It.desktopwide - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${It.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${It["desktop-wide"]}px)`
}, wi = {
  mobile: () => matchMedia(zt.mobile).matches,
  tablet: () => matchMedia(zt.tablet).matches,
  desktop: () => matchMedia(zt.desktop).matches,
  desktopwide: () => matchMedia(zt["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(zt["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(zt["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(zt["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(zt["desktop-and-down"]).matches
}, I0 = {
  install: (e) => {
    const t = () => {
      for (let o in wi)
        wi.hasOwnProperty(o) && (n.value[o] = wi[o]());
    }, n = U0({});
    t(), window.addEventListener("resize", t), e.config.globalProperties.$mwui = Fe(le({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: n.value
    }), e.provide("breakpoints", n);
  }
}, z0 = {
  install: (e) => {
    e.config.globalProperties.$mwui = Fe(le({}, e.config.globalProperties.$mwui || {}), {
      colors: Oe
    }), e.provide("colors", Oe);
  }
};
class ao extends Error {
}
const R0 = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new ao();
}), $m = { assertUser: R0 };
const O0 = window.Vue.resolveDirective, wo = window.Vue.createElementVNode, qc = window.Vue.withDirectives, H0 = window.Vue.toDisplayString, j0 = window.Vue.unref, Gc = window.Vue.withCtx, q0 = window.Vue.openBlock, G0 = window.Vue.createBlock, W0 = window.Vue.createCommentVNode, X0 = { class: "pa-4 sx-login-dialog__header" }, K0 = { class: "sx-login-dialog__body px-6 pb-4" }, Y0 = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, Q0 = ["href"], J0 = window.Vue.computed, Z0 = window.Vue.ref, e_ = window.Vuex.useStore, t_ = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = e_(), n = J0(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = Z0(mw.util.getUrl("Special:UserLogin"));
    return (a, i) => {
      const l = O0("i18n");
      return n.value ? (q0(), G0(j0(je), {
        key: 0,
        "overlay-opacity": 0.25,
        "overlay-color": "#000",
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: Gc(() => [
          wo("div", X0, [
            qc(wo("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: Gc(() => [
          qc(wo("div", K0, null, 512), [
            [l, void 0, "cx-sx-login-dialog-body"]
          ]),
          wo("div", Y0, [
            wo("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, H0(a.$i18n("cx-sx-login-dialog-button-label")), 9, Q0)
          ])
        ]),
        _: 1
      })) : W0("", !0);
    };
  }
}, G = new mw.cx.SiteMapper(), n_ = mw.util.getUrl, o_ = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
};
class Ga {
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
const js = "original", qs = "empty", s_ = {
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
      js,
      qs
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return s_[t] || t;
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
    return js;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return qs;
  }
  static isUserMTProvider(t) {
    return [js, qs].includes(
      t
    );
  }
  static getProviderForInstrumentation(t) {
    return t === qs ? "blank" : t === js ? "source" : t.toLowerCase();
  }
}
class nn {
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = Fe(le({}, a), {
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
const Wc = (e) => {
  var n;
  const t = Oa(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, Oa = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, Vn = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), Vm = (e) => {
  const t = Oa(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = a_(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, a_ = (e) => {
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
}, Em = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, Am = (e) => {
  const t = Em(e);
  return t == null ? void 0 : t.targetExists;
};
class fi {
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
let Ae = class {
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
      (a) => Vn(a)
    );
    s && Am(s) && (this.blockTemplateAdaptationInfo[t] = Em(s));
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
      (t) => Vn(t)
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
    return this.isBlockTemplate ? Wc(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => Vn(o));
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
    return n && Wc(n) || "";
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
      (a) => Vn(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new fi({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new fi({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new fi({
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
        (s) => Vn(s)
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
const i_ = [
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
], r_ = (e, t, n) => {
  let o, s, a, i, l;
  return !e || !t ? 0 : e === t ? 1 : (s = i = Xc(e, n), a = l = Xc(t, n), l.length > i.length && (s = l, a = i), o = s.filter(function(u) {
    return a.indexOf(u) >= 0;
  }), o.length / s.length);
}, Xc = function(e, t) {
  return e ? i_.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, l_ = 95, c_ = 85, u_ = [
  { status: "failure", value: 100 - l_ },
  { status: "warning", value: 100 - c_ },
  { status: "success", value: 100 }
], Dm = (e, t, n) => {
  const o = Kc(e).textContent, s = Kc(t).textContent, a = 100 - 100 * r_(s, o, n);
  return Math.ceil(a);
}, d_ = (e) => u_.find((t) => e <= t.value).status, g_ = (e, t) => Dm(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), Kc = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, sn = { calculateScore: Dm, getScoreStatus: d_, getMTScoreForPageSection: g_ }, Gs = "__LEAD_SECTION__";
class wl {
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
    return Gs;
  }
  static isSectionLead(t) {
    return !t || t === Gs;
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
    return n instanceof Ae ? n.transclusionNode.outerHTML : n instanceof nn ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof Ae ? t.blockTemplateSelected = !1 : t instanceof nn && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof Ae ? n.blockTemplateSelected = !0 : n instanceof nn && (n.selected = !0);
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
    if (o instanceof Ae)
      return !!o.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (o instanceof nn)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof Ae ? n.blockTemplateProposedTranslations[t] || "" : n instanceof nn ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof Ae ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof nn && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const o = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, s = sn.getMTScoreForPageSection(this, t) / 100;
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
    return this.isLeadSection ? Gs : this.originalTitle;
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
    return this.isLeadSection ? Gs : this.title;
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
class Bl extends Ga {
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
    return wl.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? wl.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
class vs {
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
class En {
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
const Lm = [
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
], m_ = [
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
], p_ = [
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
], h_ = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], w_ = [
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
], f_ = {
  en: Lm,
  es: m_,
  bn: p_,
  fr: h_,
  de: w_
};
class eo {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s;
  }
}
const __ = Lm, io = (l) => y(void 0, [l], function* ({
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
function v_(e, t, n, o = 24) {
  return y(this, null, function* () {
    return ((yield io({
      source: e,
      target: t,
      seed: n,
      count: o
    })) || []).map(
      (i) => new vs({
        sourceTitle: i.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: i.wikidata_id,
        langLinksCount: parseInt(i.sitelink_count)
      })
    );
  });
}
const S_ = (e, t) => y(void 0, null, function* () {
  return ((yield io({
    source: e,
    target: t,
    searchAlgorithm: "mostpopular"
  })) || []).map(
    (s) => new vs({
      sourceTitle: s.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: s.wikidata_id,
      langLinksCount: parseInt(s.langlinks_count)
    })
  );
}), y_ = (e, t) => y(void 0, null, function* () {
  const o = (yield io({
    source: e,
    target: t,
    includeSections: !0,
    searchAlgorithm: "mostpopular"
  })) || [];
  return o && o.map(
    (s) => new En({
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
function C_(e, t, n) {
  return y(this, null, function* () {
    const o = [t, e, n].map(
      (i) => encodeURIComponent(i)
    ), s = G.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (i) => i.ok ? i.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((i) => i == null ? void 0 : i.sections).catch((i) => null);
    return a ? new En(a) : null;
  });
}
function k_(e, t, n) {
  return y(this, null, function* () {
    const s = (yield io({
      source: e,
      target: t,
      seed: n,
      includeSections: !0
    })) || [];
    return s && s.map(
      (a) => new En({
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
function x_(e, t, n, o = 24) {
  return y(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    return ((yield io(s)) || []).map(
      (i) => new vs({
        sourceTitle: i.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: i.wikidata_id,
        langLinksCount: parseInt(i.sitelink_count)
      })
    );
  });
}
function b_(e, t, n, o = 24) {
  return y(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      includeSections: !0
    }, a = (yield io(s)) || [];
    return a && a.map(
      (i) => new En({
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
function $_(e) {
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
    }, n = G.getApi(e);
    try {
      const a = (yield n.get(t)).query.usercontribs.map((i) => i.title);
      return [...new Set(a)];
    } catch (o) {
      return mw.log.error("Error while fetching suggestion seeds", o), [];
    }
  });
}
function V_(e, t) {
  return y(this, null, function* () {
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
function E_(e, t) {
  return y(this, null, function* () {
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
function A_(e) {
  const t = __.map((o) => encodeURIComponent(o)).join("|"), n = G.getCXServerUrl(
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
const D_ = (e, t, n) => {
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
}, L_ = (e) => {
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
}, T_ = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions"
  }, t = new mw.Api();
  return Promise.resolve(t.postWithToken("csrf", e)).then((n) => {
    var a, i;
    const o = n.query.contenttranslationsuggestions.lists || {};
    return (((i = (a = Object.values(o)) == null ? void 0 : a[0]) == null ? void 0 : i.suggestions) || []).map((l) => new eo(l));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
}, ue = {
  fetchFavorites: T_,
  fetchPageSuggestions: v_,
  fetchSectionSuggestion: C_,
  fetchSectionSuggestions: k_,
  fetchSuggestionSeeds: V_,
  fetchAppendixTargetSectionTitles: A_,
  fetchSuggestionSourceSections: E_,
  markFavorite: D_,
  unmarkFavorite: L_,
  fetchUserEdits: $_,
  fetchMostPopularPageSuggestions: S_,
  fetchMostPopularSectionSuggestions: y_,
  fetchPageSuggestionsByTopics: x_,
  fetchSectionSuggestionsByTopics: b_
}, B_ = {
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
}, P_ = {
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
}, F_ = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], M_ = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, N_ = {
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
}, U_ = {
  languages: B_,
  scriptgroups: P_,
  rtlscripts: F_,
  regiongroups: M_,
  territories: N_
};
var Se = U_;
function Ss(e) {
  return !!Se.languages[e];
}
function ln(e) {
  return Ss(e) && Se.languages[e].length === 1 ? Se.languages[e][0] : !1;
}
function I_() {
  return Se.languages;
}
function ys(e) {
  var t = ln(e);
  return t ? ys(t) : Ss(e) ? Se.languages[e][0] : "Zyyy";
}
function Pl(e) {
  var t = ln(e);
  return t ? Pl(t) : Ss(e) && Se.languages[e][1] || "UNKNOWN";
}
function ms(e) {
  var t = ln(e);
  return t ? ms(t) : Ss(e) && Se.languages[e][2] || e;
}
function z_() {
  var e, t = {};
  for (e in Se.languages)
    ln(e) || (t[e] = ms(e));
  return t;
}
function Tm(e) {
  var t, n, o = [];
  for (t in Se.languages)
    if (!ln(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === ys(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function R_(e) {
  return Tm([e]);
}
function Bm(e) {
  var t;
  for (t in Se.scriptgroups)
    if (Se.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function Fl(e) {
  return Bm(ys(e));
}
function Pm(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = ln(n) || n, a = Fl(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Fm(e) {
  var t, n, o, s = {};
  for (t in Se.languages)
    if (!ln(t)) {
      for (n = 0; n < e.length; n++)
        if (Pl(t).includes(e[n])) {
          o = Fl(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function O_(e) {
  return Fm([e]);
}
function H_(e) {
  var t, n, o, s = [];
  for (t = Pm(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function j_(e, t) {
  var n = ms(e) || e, o = ms(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function Mm(e) {
  return Se.rtlscripts.includes(ys(e));
}
function q_(e) {
  return Mm(e) ? "rtl" : "ltr";
}
function G_(e) {
  return Se.territories[e] || [];
}
function W_(e, t) {
  t.target ? Se.languages[e] = [t.target] : Se.languages[e] = [t.script, t.regions, t.autonym];
}
var j = {
  addLanguage: W_,
  getAutonym: ms,
  getAutonyms: z_,
  getDir: q_,
  getGroupOfScript: Bm,
  getLanguages: I_,
  getLanguagesByScriptGroup: Pm,
  getLanguagesByScriptGroupInRegion: O_,
  getLanguagesByScriptGroupInRegions: Fm,
  getLanguagesInScript: R_,
  getLanguagesInScripts: Tm,
  getLanguagesInTerritory: G_,
  getRegions: Pl,
  getScript: ys,
  getScriptGroupOfLanguage: Fl,
  isKnown: Ss,
  isRedirect: ln,
  isRtl: Mm,
  sortByScriptGroup: H_,
  sortByAutonym: j_
};
const Tn = window.Vue.computed;
function q(e) {
  const t = Tn(() => e.state.application.sourceLanguage), n = Tn(() => e.state.application.targetLanguage), o = Tn(
    () => e.state.application.currentMTProvider
  ), s = Tn(
    () => j.getAutonym(t.value)
  ), a = Tn(
    () => j.getAutonym(n.value)
  ), i = Tn(() => e.state.application.previousRoute);
  return {
    currentMTProvider: o,
    previousRoute: i,
    sourceLanguage: t,
    sourceLanguageAutonym: s,
    targetLanguage: n,
    targetLanguageAutonym: a
  };
}
const X_ = window.Vuex.useStore, Ml = () => {
  const e = X_(), { sourceLanguage: t, targetLanguage: n } = q(e), o = (l) => {
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
class ro {
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
const Q_ = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), Y_();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, J_ = (e, t) => {
  let n, o;
  return t ? (n = Q_(e), o = n.$element.find(
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
}, Z_ = (e, t) => {
  const n = Array.from(
    J_(e, t)
  );
  return e1(n).map(
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
        (c) => new Ae({
          sentences: t1(c),
          node: c
        })
      ), r = !l;
      return new wl({ id: u, title: l, subSections: g, isLeadSection: r });
    }
  );
}, e1 = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, t1 = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new nn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), Nm = {
  convertSegmentedContentToPageSections: Z_
}, Nl = 120, n1 = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: Nl,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return G.getApi(e).get(n).then((s) => {
    const a = s.query.pages, l = (s.query.redirects || []).reduce(
      (r, c) => Fe(le({}, r), { [c.to]: c.from }),
      {}
    ), g = (s.query.normalized || []).reduce(
      (r, c) => Fe(le({}, r), {
        [c.to]: c.from
      }),
      {}
    );
    return a.map((r) => {
      const c = g[r.title] || l[r.title] || null;
      return new ro(Fe(le({}, r), { _alias: c }));
    });
  });
}, o1 = (e, t) => {
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
    return l ? Object.freeze(new K_(l, i)) : null;
  });
}, s1 = (e, t, n) => {
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
}, a1 = (e, t, n, o = null) => Um(
  e,
  t,
  n,
  o
).then(
  (s) => new ro({
    sections: Nm.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), Um = (e, t, n, o = null) => {
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
}, i1 = (e) => y(void 0, null, function* () {
  const t = o_();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: Nl,
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
  return yield G.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new ro(s))).catch((o) => []);
}), r1 = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: Nl,
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
      (a) => new ro(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, lo = {
  fetchPages: n1,
  fetchLanguageTitles: o1,
  fetchPageContent: a1,
  fetchSegmentedContent: Um,
  fetchNearbyPages: i1,
  searchPagesByTitlePrefix: r1,
  fetchLanguageLinksForLanguage: s1
};
class l1 {
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
const c1 = window.Vue.inject, u1 = window.Vue.reactive;
var d1 = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, Im = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(d1, function() {
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
                for (let U = 0; U < x.length; U++) {
                  const Ce = x[U]();
                  if (Ce !== null)
                    return Ce;
                }
                return null;
              };
            }
            function _(x) {
              const U = w, Ce = [];
              for (let wt = 0; wt < x.length; wt++) {
                const ft = x[wt]();
                if (ft === null)
                  return w = U, null;
                Ce.push(ft);
              }
              return Ce;
            }
            function S(x, U) {
              return () => {
                const Ce = w, wt = [];
                let ft = U();
                for (; ft !== null; )
                  wt.push(ft), ft = U();
                return wt.length < x ? (w = Ce, null) : wt;
              };
            }
            function k(x) {
              const U = x.length;
              return () => {
                let Ce = null;
                return p.slice(w, w + U) === x && (Ce = x, w += U), Ce;
              };
            }
            function L(x) {
              return () => {
                const U = p.slice(w).match(x);
                return U === null ? null : (w += U[0].length, U[0]);
              };
            }
            const B = L(/^\s+/), R = k("|"), E = k(":"), D = k("\\"), O = L(/^./), F = k("$"), N = L(/^\d+/), ne = k('"'), Q = k("'"), un = L(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), dn = L(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), gt = f([nt, L(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function nt() {
              const x = _([D, O]);
              return x === null ? null : x[1];
            }
            const po = f([nt, dn]), gn = f([nt, un]);
            function mt() {
              const x = _([F, N]);
              return x === null ? null : ["REPLACE", parseInt(x[1], 10) - 1];
            }
            const Be = (Ut = L(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), pt = function(x) {
              return x.toString();
            }, () => {
              const x = Ut();
              return x === null ? null : pt(x);
            });
            var Ut, pt;
            function ht() {
              const x = _([R, S(0, Ps)]);
              if (x === null)
                return null;
              const U = x[1];
              return U.length > 1 ? ["CONCAT"].concat(U) : U[0];
            }
            function Pe() {
              const x = _([Be, E, mt]);
              return x === null ? null : [x[0], x[2]];
            }
            function v() {
              const x = _([Be, E, Ps]);
              return x === null ? null : [x[0], x[2]];
            }
            function b() {
              const x = _([Be, E]);
              return x === null ? null : [x[0], ""];
            }
            const V = f([function() {
              const x = _([f([Pe, v, b]), S(0, ht)]);
              return x === null ? null : x[0].concat(x[1]);
            }, function() {
              const x = _([Be, S(0, ht)]);
              return x === null ? null : [x[0]].concat(x[1]);
            }]), A = k("{{"), W = k("}}"), ee = k("[["), z = k("]]"), I = k("["), J = k("]");
            function Ge() {
              const x = _([A, V, W]);
              return x === null ? null : x[1];
            }
            const de = f([function() {
              const x = _([S(1, Ps), R, S(1, Bs)]);
              return x === null ? null : [["CONCAT"].concat(x[0]), ["CONCAT"].concat(x[2])];
            }, function() {
              const x = _([S(1, Ps)]);
              return x === null ? null : [["CONCAT"].concat(x[0])];
            }]);
            function cc() {
              let x = null;
              const U = _([ee, de, z]);
              if (U !== null) {
                const Ce = U[1];
                x = ["WIKILINK"].concat(Ce);
              }
              return x;
            }
            function uc() {
              let x = null;
              const U = _([I, S(1, Jp), B, S(1, Bs), J]);
              return U !== null && (x = ["EXTLINK", U[1].length === 1 ? U[1][0] : ["CONCAT"].concat(U[1]), ["CONCAT"].concat(U[3])]), x;
            }
            const Ja = L(/^[A-Za-z]+/);
            function Xp() {
              const x = L(/^[^"]*/), U = _([ne, x, ne]);
              return U === null ? null : U[1];
            }
            function Kp() {
              const x = L(/^[^']*/), U = _([Q, x, Q]);
              return U === null ? null : U[1];
            }
            function Yp() {
              const x = L(/^\s*=\s*/), U = _([B, Ja, x, f([Xp, Kp])]);
              return U === null ? null : [U[1], U[3]];
            }
            function Qp() {
              const x = S(0, Yp)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], x);
            }
            const Jp = f([Ge, mt, cc, uc, function() {
              const x = S(1, gt)();
              return x === null ? null : x.join("");
            }]), Bs = f([Ge, mt, cc, uc, function() {
              let x = null;
              const U = w, Ce = k("<"), wt = L(/^\/?/), ft = L(/^\s*>/), Za = _([Ce, Ja, Qp, wt, ft]);
              if (Za === null)
                return null;
              const gc = w, mc = Za[1], ei = S(0, Bs)(), Zp = w, pc = _([k("</"), Ja, ft]);
              if (pc === null)
                return ["CONCAT", p.slice(U, gc)].concat(ei);
              const eh = w, th = pc[1], hc = Za[2];
              if (function(mn, Fs, ti, ni = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((mn = mn.toLowerCase()) !== (Fs = Fs.toLowerCase()) || ni.allowedHtmlElements.indexOf(mn) === -1)
                  return !1;
                const nh = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let Ms = 0, oh = ti.length; Ms < oh; Ms += 2) {
                  const oi = ti[Ms];
                  if (ni.allowedHtmlCommonAttributes.indexOf(oi) === -1 && (ni.allowedHtmlAttributesByElement[mn] || []).indexOf(oi) === -1 || oi === "style" && ti[Ms + 1].search(nh) !== -1)
                    return !1;
                }
                return !0;
              }(mc, th, hc.slice(1)))
                x = ["HTMLELEMENT", mc, hc].concat(ei);
              else {
                const mn = (Fs) => Fs.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                x = ["CONCAT", mn(p.slice(U, gc))].concat(ei, mn(p.slice(Zp, eh)));
              }
              return x;
            }, function() {
              const x = S(1, gn)();
              return x === null ? null : x.join("");
            }]), Ps = f([Ge, mt, function() {
              const x = S(1, po)();
              return x === null ? null : x.join("");
            }]), dc = function() {
              const x = S(0, Bs)();
              return x === null ? null : ["CONCAT"].concat(x);
            }();
            if (dc === null || w !== p.length)
              throw new Error("Parse error at position " + w.toString() + " in input: " + p);
            return dc;
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
})(Im);
var g1 = Im.exports;
const Yc = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, zm = Symbol("banana-context");
function ge() {
  const e = c1(zm);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function m1(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = u1(new g1(e.locale, e));
  return {
    install: (n) => {
      n.provide(zm, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: i } = Yc(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...i) : o.textContent = t.i18n(a, ...i);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: i } = Yc(s);
        o.innerHTML = t.i18n(a, ...i);
      });
    }
  };
}
const p1 = 5;
function ps(e) {
  return y(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < p1);
  });
}
const h1 = window.Vuex.useStore, An = "popular", w1 = () => {
  const e = h1(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = M(), o = {
    id: An,
    type: An
  }, {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = Ml();
  return { fetchSectionSuggestionsPopular: (g) => y(void 0, null, function* () {
    const r = [];
    return yield ps(() => y(void 0, null, function* () {
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
  }), fetchPageSuggestionsPopular: (g) => y(void 0, null, function* () {
    const r = [];
    return yield ps(() => y(void 0, null, function* () {
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
}, f1 = window.Vue.ref, Qc = mw.loader.require("ext.cx.articletopics"), _1 = (e) => ({
  id: e.groupId,
  label: e.label,
  filters: e.topics.map((t) => ({
    id: t.topicId,
    label: t.label,
    type: Dn
  }))
}), Ul = () => {
  const e = ge(), { currentSuggestionFilters: t, setFilterURLParams: n } = M(), o = {
    id: an,
    type: an,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }, s = {
    id: An,
    type: An,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }, a = {
    id: "automatic",
    label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
    filters: [o, s]
  }, i = f1([
    a,
    ...Qc.map(_1)
  ]), l = () => {
    const d = g();
    return d.type === Dn ? [d, o] : [o, s];
  }, u = (d) => {
    n(d.type, d.id);
  }, g = () => i.value.flatMap((d) => d.filters).find(r), r = (d) => t.value.type === d.type && t.value.id === d.id;
  return {
    allFilters: i,
    getFiltersSummary: l,
    selectFilter: u,
    isFilterSelected: r,
    getOresTopics: (d) => {
      const p = Qc.flatMap((h) => h.topics).find((h) => h.topicId === d);
      return p ? p.orestopics : [];
    }
  };
}, v1 = window.Vuex.useStore, Dn = "topic", S1 = () => {
  const e = v1(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = M(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = Ml(), { getOresTopics: l } = Ul();
  return {
    fetchPageSuggestionsByTopics: (r) => y(void 0, null, function* () {
      const c = o.value.id, d = {
        id: c,
        type: Dn
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
    fetchSectionSuggestionsByTopics: (r) => y(void 0, null, function* () {
      const c = o.value.id, d = {
        id: c,
        type: Dn
      }, m = l(c), p = [];
      return yield ps(() => y(void 0, null, function* () {
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
}, y1 = window.Vuex.useStore, Rm = window.Vue.ref, C1 = Rm([]), k1 = Rm([]);
let _i = !1, Jc = !1, Zc = !1, vi = !1, fo = null;
const Ws = {
  page: C1,
  section: k1
}, Om = () => {
  const e = y1(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = M(), s = () => y(void 0, null, function* () {
    let c = e.getters["translator/getTranslationsByStatus"]("published");
    if (c = c.filter(
      (d) => d.sourceLanguage === t.value
    ), c.length && !_i)
      return _i = !0, c.map(
        (d) => d.sourceTitle
      );
    if (_i = !0, !Jc) {
      const d = yield ue.fetchUserEdits(t.value).then((m) => (Jc = !0, m));
      if (d.length)
        return d;
    }
    if (!Zc) {
      const d = yield ue.fetchUserEdits(t.value).then((m) => (Zc = !0, m));
      if (d.length)
        return lo.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          d
        );
    }
    return null;
  }), a = (c) => {
    let d = Ws[c].value.find(
      (m) => m.matchesLanguagePair(t.value, n.value)
    );
    return d || (d = new l1({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), Ws[c].value.push(d)), d;
  }, i = () => y(void 0, null, function* () {
    const c = yield ue.fetchSuggestionSeeds(
      t.value,
      n.value
    );
    for (const d in Ws) {
      const m = a(d);
      m.seeds = [...m.seeds, ...c || []];
    }
  }), l = () => y(void 0, null, function* () {
    let c = !1, d = [];
    do {
      d = yield s(), d || (c = !0);
      for (const m in Ws) {
        const p = a(m);
        p.seeds = [
          ...p.seeds,
          ...d || []
        ];
      }
    } while (!c && !(d != null && d.length));
  }), u = () => fo || (fo = l(), fo.finally(() => {
    fo = null;
  }));
  return { getSuggestionSeed: (c) => y(void 0, null, function* () {
    let d = a(c);
    d.seeds.length || (yield u());
    let m = d.shiftSeeds();
    return !m && !vi && (yield i(), m = d.shiftSeeds(), vi = !0), m;
  }), getEventSourceForDashboardSuggestion: () => {
    const { type: c } = o.value;
    return c === an ? vi ? "suggestion_no_seed" : "suggestion_recent_edit" : c === Dn ? "suggestion_topic_area" : c === An ? "suggestion_featured" : "";
  } };
}, x1 = window.Vuex.useStore, an = "previous-edits", b1 = () => {
  const e = x1(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = M(), { getSuggestionSeed: o } = Om(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = Ml(), l = {
    id: an,
    type: an
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (r) => y(void 0, null, function* () {
      const c = [];
      return yield ps(() => y(void 0, null, function* () {
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
    fetchSectionSuggestionsBasedOnEdits: (r) => y(void 0, null, function* () {
      const c = [];
      return yield ps(() => y(void 0, null, function* () {
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
}, Ln = window.Vue.ref, $1 = window.Vue.computed, Cs = Ln(null), ks = Ln(null), xs = Ln(null), co = Ln(null), Hm = Ln(null), Ha = Ln(an), Il = Ln(null), V1 = $1(() => ({
  type: Ha.value,
  id: Il.value || Ha.value
})), E1 = (e, t) => {
  Ha.value = e, Il.value = t, hs("filter-type", e), t && hs("filter-id", t);
}, A1 = (e) => {
  const t = new URLSearchParams(location.search);
  t.set("page", e == null ? void 0 : e.sourceTitle), t.set("from", e == null ? void 0 : e.sourceLanguage), t.set("to", e == null ? void 0 : e.targetLanguage), xs.value = e == null ? void 0 : e.sourceTitle, Cs.value = e == null ? void 0 : e.sourceLanguage, ks.value = e == null ? void 0 : e.targetLanguage, e instanceof Bl && (t.set("draft", !0), Hm.value = !0, e.isLeadSectionTranslation || (t.set("section", e.sourceSectionTitle), co.value = e.sourceSectionTitle)), t.delete("title"), bs(Object.fromEntries(t));
}, D1 = (e) => {
  co.value = e, hs("section", e);
}, L1 = (e) => {
  xs.value = e, hs("page", e);
}, bs = (e) => {
  history.replaceState(
    {},
    document.title,
    n_("Special:ContentTranslation", e)
  );
}, T1 = () => {
  const e = new URLSearchParams(location.search);
  xs.value = e.get("page"), Cs.value = e.get("from"), ks.value = e.get("to"), co.value = e.get("section"), e.get("filter-type") && (Ha.value = e.get("filter-type")), e.get("filter-id") && (Il.value = e.get("filter-id"));
}, B1 = () => {
  const e = new URLSearchParams(location.search);
  co.value = null, e.delete("section"), e.delete("title"), bs(Object.fromEntries(e));
}, hs = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set(e, t), n.delete("title"), bs(Object.fromEntries(n));
}, P1 = (e) => new URLSearchParams(location.search).get(e), F1 = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), Cs.value = e, ks.value = t, n.delete("title"), bs(Object.fromEntries(n));
}, M1 = () => {
  Cs.value = null, ks.value = null, xs.value = null, co.value = null, bs(null);
}, M = () => ({
  setLanguageURLParams: F1,
  setSectionURLParam: D1,
  setTranslationURLParams: A1,
  initializeURLState: T1,
  clearURLParameters: M1,
  clearSectionURLParameter: B1,
  setUrlParam: hs,
  getUrlParam: P1,
  pageURLParameter: xs,
  sourceLanguageURLParameter: Cs,
  targetLanguageURLParameter: ks,
  sectionURLParameter: co,
  draftURLParameter: Hm,
  setPageURLParam: L1,
  currentSuggestionFilters: V1,
  setFilterURLParams: E1
});
const N1 = window.Vue.resolveDynamicComponent, eu = window.Vue.openBlock, tu = window.Vue.createBlock, U1 = window.Vue.Transition, _o = window.Vue.withCtx, vo = window.Vue.createVNode, I1 = window.Vue.resolveComponent, Si = window.Vue.unref, z1 = window.Vuex.useStore, R1 = window.Vue.computed, O1 = window.Vue.onMounted, H1 = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = M();
    t();
    const n = z1(), o = R1(
      () => n.state.application.autoSavePending
    );
    return O1(() => {
      window.addEventListener("beforeunload", (s) => {
        o.value && (s.preventDefault(), s.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (s) => {
        document.visibilityState === "visible" && $m.assertUser().then(() => n.commit("application/setIsLoginDialogOn", !1)).catch((a) => {
          a instanceof ao && n.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (s, a) => {
      const i = I1("router-view");
      return eu(), tu(Si(vw), { id: "contenttranslation" }, {
        default: _o(() => [
          vo(Si(T), { class: "cx-container" }, {
            default: _o(() => [
              vo(Si(C), { cols: "12" }, {
                default: _o(() => [
                  vo(i, null, {
                    default: _o(({ Component: l, route: u }) => [
                      vo(U1, {
                        name: u.meta.transitionName
                      }, {
                        default: _o(() => [
                          (eu(), tu(N1(l)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      vo(t_)
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
}, j1 = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translationsLoaded: { draft: !1, published: !1 },
  translatorStats: null
}, q1 = {
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
class jm {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new jm(a);
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
    (s, a) => Fe(le({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class G1 {
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
class zl extends Ga {
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
const Wa = mw.user.isAnon() ? void 0 : "user", qm = (e) => {
  if (e === "assertuserfailed")
    throw new ao();
};
function Gm(e, t = null) {
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
      var l;
      const a = s.query.contenttranslation.translations;
      let i;
      if (e === "draft" ? i = a.map(
        (u) => new Bl(Fe(le({}, u), { status: e }))
      ) : i = a.map(
        (u) => new zl(Fe(le({}, u), { status: e }))
      ), (l = s.continue) != null && l.offset) {
        const u = yield Gm(
          e,
          s.continue.offset
        );
        i = i.concat(u);
      }
      return i;
    }));
  });
}
function W1(e) {
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
      (a) => new G1(a)
    );
  });
}
function X1(e, t, n, o, s) {
  return y(this, null, function* () {
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
const K1 = (e, t, n) => {
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
}, Y1 = ({
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
    assert: Wa,
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
      targetUrl: p.targeturl
    };
  }).catch((p, h) => {
    qm(p);
    let w;
    return h = h || {}, h.exception ? w = h.exception.message : h.error ? w = h.error.info : w = "Unknown error", {
      publishFeedbackMessage: new to({
        text: w,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, Q1 = ({
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
    assert: Wa,
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
    qm(m);
    let h;
    return p.exception ? h = p.exception.message : p.error ? h = p.error.info : h = "Unknown error", new to({ text: h, status: "error" });
  });
}, J1 = (e) => {
  const t = {
    assert: Wa,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, Z1 = () => {
  const e = {
    assert: Wa,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new zl(n.cxcheckunreviewed.translation)
  );
}, ev = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, tv = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, nv = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), He = {
  fetchTranslations: Gm,
  fetchTranslationUnits: W1,
  fetchSegmentTranslation: X1,
  parseTemplateWikitext: K1,
  publishTranslation: Y1,
  saveTranslation: Q1,
  deleteTranslation: ev,
  fetchTranslatorStats: nv,
  deleteCXTranslation: tv,
  splitTranslation: J1,
  checkUnreviewedTranslations: Z1
};
function ov(t) {
  return y(this, arguments, function* ({ commit: e }) {
    const n = yield He.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const sv = {
  fetchTranslatorStats: ov
}, av = {
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
}, iv = {
  namespaced: !0,
  state: j1,
  getters: q1,
  actions: sv,
  mutations: av
}, rv = {
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
  appendixSectionTitles: f_,
  /**
   * Maximum number of suggestions based on user's recently edited translations,
   * to be displayed inside "search for an article" view
   */
  maxRecentlyEditedSuggestions: 3
}, lv = {
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
function cv(o, s) {
  return y(this, arguments, function* ({ getters: e, commit: t }, n) {
    if (e.appendixTitlesExistForLanguage(n))
      return;
    const a = yield ue.fetchAppendixTargetSectionTitles(n);
    t("addAppendixSectionTitlesForLanguage", {
      language: n,
      titles: a
    });
  });
}
const uv = {
  fetchAppendixSectionTitles: cv
}, dv = {
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
}, gv = {
  namespaced: !0,
  state: rv,
  getters: lv,
  actions: uv,
  mutations: dv
}, mv = {
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
}, pv = {
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
function hv() {
  return G.getLanguagePairs().then((e) => e.sourceLanguages);
}
function wv(e, t) {
  return y(this, null, function* () {
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
function fv() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function _v(e, t, n, o) {
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
const Xa = {
  fetchSupportedLanguageCodes: hv,
  fetchSupportedMTProviders: wv,
  fetchCXServerToken: fv,
  addWikibaseLink: _v
};
function vv({ getters: e, commit: t }, { language: n, titles: o }) {
  o = o.filter((i) => !e.getPage(n, i));
  const s = 50, a = [];
  for (let i = 0; i < o.length; i += s) {
    const l = o.slice(i, i + s), u = lo.fetchPages(n, l).then(
      (g) => g.forEach((r) => t("addPage", r))
    );
    a.push(u);
  }
  return Promise.all(a);
}
function Sv(n) {
  return y(this, arguments, function* ({ commit: e, state: t }) {
    if (!t.supportedLanguageCodes.length && !t.supportedLanguageCodesRequested) {
      e("setSupportedLanguageCodesRequested", !0);
      const o = yield Xa.fetchSupportedLanguageCodes();
      e("setSupportedLanguageCodes", o);
    }
  });
}
function yv(o) {
  return y(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var i;
    const { sourceLanguage: s } = t.application;
    if ((i = n.nearbyPages[s]) != null && i.length)
      return;
    const a = yield lo.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const Cv = {
  fetchNearbyPages: yv,
  fetchPageMetadata: vv,
  fetchSupportedLanguageCodes: Sv
}, kv = {
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
}, xv = {
  namespaced: !0,
  state: mv,
  getters: pv,
  actions: Cv,
  mutations: kv
}, bv = {
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
}, $v = {
  /**
   * Returns a boolean indicating whether the current publishing target
   * is the user's sandbox
   *
   * @param {object} state
   * @return {boolean}
   */
  isSandboxTarget: (e) => e.publishTarget === "SANDBOX_SECTION"
}, Vv = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => Vn(a)
  );
  return s && Am(s) ? He.parseTemplateWikitext(
    Vm(s),
    n,
    t
  ) : Promise.resolve(null);
}, Wm = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => Vn(a)
  );
  return s ? He.parseTemplateWikitext(
    Vm(s),
    n,
    t
  ) : Promise.resolve(null);
}, Ev = (o) => y(void 0, [o], function* ({ dispatch: e, state: t, commit: n }) {
  var a, i;
  t.cxServerToken || (yield Xa.fetchCXServerToken().then(
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
}), Av = { getCXServerToken: Ev }, Dv = {
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
}, Lv = {
  namespaced: !0,
  state: bv,
  getters: $v,
  actions: Av,
  mutations: Dv
}, Tv = window.Vuex.createStore, Bv = Tv({
  modules: { translator: iv, suggestions: gv, mediawiki: xv, application: Lv }
});
function Pv() {
  return Xm().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Xm() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const Fv = typeof Proxy == "function", Mv = "devtools-plugin:setup", Nv = "plugin:settings:set";
let Bn, fl;
function Uv() {
  var e;
  return Bn !== void 0 || (typeof window != "undefined" && window.performance ? (Bn = !0, fl = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Bn = !0, fl = global.perf_hooks.performance) : Bn = !1), Bn;
}
function Iv() {
  return Uv() ? fl.now() : Date.now();
}
class zv {
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
        return Iv();
      }
    }, n && n.on(Nv, (i, l) => {
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
    return y(this, null, function* () {
      this.target = t;
      for (const n of this.onQueue)
        this.target.on[n.method](...n.args);
      for (const n of this.targetQueue)
        n.resolve(yield this.target[n.method](...n.args));
    });
  }
}
function Rv(e, t) {
  const n = e, o = Xm(), s = Pv(), a = Fv && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(Mv, e, t);
  else {
    const i = a ? new zv(n, s) : null;
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
const Km = window.Vue.getCurrentInstance, no = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const dt = window.Vue.computed, us = window.Vue.unref, Ov = window.Vue.watchEffect, Ym = window.Vue.defineComponent, Hv = window.Vue.reactive, Qm = window.Vue.h, yi = window.Vue.provide, jv = window.Vue.ref, Jm = window.Vue.watch, qv = window.Vue.shallowRef, Gv = window.Vue.shallowReactive, Wv = window.Vue.nextTick, Ft = typeof window != "undefined";
function Xv(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const X = Object.assign;
function Ci(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = Le(s) ? s.map(e) : e(s);
  }
  return n;
}
const ds = () => {
}, Le = Array.isArray;
function H(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Kv = /\/$/, Yv = (e) => e.replace(Kv, "");
function ki(e, t, n = "/") {
  let o, s = {}, a = "", i = "";
  const l = t.indexOf("#");
  let u = t.indexOf("?");
  return l < u && l >= 0 && (u = -1), u > -1 && (o = t.slice(0, u), a = t.slice(u + 1, l > -1 ? l : t.length), s = e(a)), l > -1 && (o = o || t.slice(0, l), i = t.slice(l, t.length)), o = Zv(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + i,
    path: o,
    query: s,
    hash: i
  };
}
function Qv(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function ou(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function su(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && rn(t.matched[o], n.matched[s]) && Zm(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function rn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Zm(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Jv(e[n], t[n]))
      return !1;
  return !0;
}
function Jv(e, t) {
  return Le(e) ? au(e, t) : Le(t) ? au(t, e) : e === t;
}
function au(e, t) {
  return Le(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function Zv(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return H(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
var ws;
(function(e) {
  e.pop = "pop", e.push = "push";
})(ws || (ws = {}));
var gs;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(gs || (gs = {}));
function eS(e) {
  if (!e)
    if (Ft) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Yv(e);
}
const tS = /^[^#]+#/;
function nS(e, t) {
  return e.replace(tS, "#") + t;
}
function oS(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const Ka = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function sS(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if ({}.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const a = document.querySelector(e.el);
        if (o && a) {
          H(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch (a) {
        H(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) {
      ({}).NODE_ENV !== "production" && H(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = oS(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function iu(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const _l = /* @__PURE__ */ new Map();
function aS(e, t) {
  _l.set(e, t);
}
function iS(e) {
  const t = _l.get(e);
  return _l.delete(e), t;
}
let rS = () => location.protocol + "//" + location.host;
function ep(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = s.includes(e.slice(a)) ? e.slice(a).length : 1, u = s.slice(l);
    return u[0] !== "/" && (u = "/" + u), ou(u, "");
  }
  return ou(n, e) + o + s;
}
function lS(e, t, n, o) {
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
        type: ws.pop,
        direction: w ? w > 0 ? gs.forward : gs.back : gs.unknown
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
    d.state && d.replaceState(X({}, d.state, { scroll: Ka() }), "");
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
    scroll: s ? Ka() : null
  };
}
function cS(e) {
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
    const c = e.indexOf("#"), d = c > -1 ? (n.host && document.querySelector("base") ? e : e.slice(c)) + u : rS() + e + u;
    try {
      t[r ? "replaceState" : "pushState"](g, "", d), s.value = g;
    } catch (m) {
      ({}).NODE_ENV !== "production" ? H("Error with push/replace State", m) : console.error(m), n[r ? "replace" : "assign"](d);
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
        scroll: Ka()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && H(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

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
function uS(e) {
  e = eS(e);
  const t = cS(e), n = lS(e, t.state, t.location, t.replace);
  function o(a, i = !0) {
    i || n.pauseListeners(), history.go(a);
  }
  const s = X({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: nS.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function dS(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && H(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), uS(e);
}
function gS(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function tp(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Rt = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, vl = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var lu;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(lu || (lu = {}));
const mS = {
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
    return `Redirected from "${e.fullPath}" to "${hS(t)}" via a navigation guard.`;
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
function oo(e, t) {
  return {}.NODE_ENV !== "production" ? X(new Error(mS[e](t)), {
    type: e,
    [vl]: !0
  }, t) : X(new Error(), {
    type: e,
    [vl]: !0
  }, t);
}
function _t(e, t) {
  return e instanceof Error && vl in e && (t == null || !!(e.type & t));
}
const pS = ["params", "query", "hash"];
function hS(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of pS)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const cu = "[^/]+?", wS = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, fS = /[.+*?^${}()[\]/\\]/g;
function _S(e, t) {
  const n = X({}, wS, t), o = [];
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
        c || (s += "/"), s += d.value.replace(fS, "\\$&"), m += 40;
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
          } catch (k) {
            throw new Error(`Invalid custom RegExp for param "${p}" (${_}): ` + k.message);
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
          if (Le(f) && !h)
            throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
          const _ = Le(f) ? f.join("/") : f;
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
function vS(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function SS(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = vS(o[n], s[n]);
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
const yS = {
  type: 0,
  value: ""
}, CS = /[a-zA-Z0-9_]/;
function kS(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[yS]];
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
        u === "(" ? n = 2 : CS.test(u) ? d() : (c(), n = 0, u !== "*" && u !== "?" && u !== "+" && l--);
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
function xS(e, t, n) {
  const o = _S(kS(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const i of o.keys)
      a.has(i.name) && H(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(i.name);
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
function bS(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = mu({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(r) {
    return o.get(r);
  }
  function a(r, c, d) {
    const m = !d, p = $S(r);
    ({}).NODE_ENV !== "production" && DS(p, c), p.aliasOf = d && d.record;
    const h = mu(t, r), w = [
      p
    ];
    if ("alias" in r) {
      const S = typeof r.alias == "string" ? [r.alias] : r.alias;
      for (const k of S)
        w.push(X({}, p, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: d ? d.record.components : p.components,
          path: k,
          // we might be the child of an alias
          aliasOf: d ? d.record : p
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let f, _;
    for (const S of w) {
      const { path: k } = S;
      if (c && k[0] !== "/") {
        const L = c.record.path, B = L[L.length - 1] === "/" ? "" : "/";
        S.path = c.record.path + (k && B + k);
      }
      if ({}.NODE_ENV !== "production" && S.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (f = xS(S, c, h), {}.NODE_ENV !== "production" && c && k[0] === "/" && LS(f, c), d ? (d.alias.push(f), {}.NODE_ENV !== "production" && AS(d, f)) : (_ = _ || f, _ !== f && _.alias.push(f), m && r.name && !gu(f) && i(r.name)), p.children) {
        const L = p.children;
        for (let B = 0; B < L.length; B++)
          a(L[B], f, d && d.children[B]);
      }
      d = d || f, (f.record.components && Object.keys(f.record.components).length || f.record.name || f.record.redirect) && u(f);
    }
    return _ ? () => {
      i(_);
    } : ds;
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
    for (; c < n.length && SS(r, n[c]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (r.record.path !== n[c].record.path || !np(r, n[c])); )
      c++;
    n.splice(c, 0, r), r.record.name && !gu(r) && o.set(r.record.name, r);
  }
  function g(r, c) {
    let d, m = {}, p, h;
    if ("name" in r && r.name) {
      if (d = o.get(r.name), !d)
        throw oo(1, {
          location: r
        });
      if ({}.NODE_ENV !== "production") {
        const _ = Object.keys(r.params || {}).filter((S) => !d.keys.find((k) => k.name === S));
        _.length && H(`Discarded invalid param(s) "${_.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
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
      p = r.path, {}.NODE_ENV !== "production" && !p.startsWith("/") && H(`The Matcher cannot resolve relative paths but received "${p}". Unless you directly called \`matcher.resolve("${p}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), d = n.find((_) => _.re.test(p)), d && (m = d.parse(p), h = d.record.name);
    else {
      if (d = c.name ? o.get(c.name) : n.find((_) => _.re.test(c.path)), !d)
        throw oo(1, {
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
      meta: ES(w)
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
function $S(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: VS(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function VS(e) {
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
function ES(e) {
  return e.reduce((t, n) => X(t, n.meta), {});
}
function mu(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Sl(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function AS(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Sl.bind(null, n)))
      return H(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Sl.bind(null, n)))
      return H(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function DS(e, t) {
  t && t.record.name && !e.name && !e.path && H(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function LS(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Sl.bind(null, n)))
      return H(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function np(e, t) {
  return t.children.some((n) => n === e || np(e, n));
}
const op = /#/g, TS = /&/g, BS = /\//g, PS = /=/g, FS = /\?/g, sp = /\+/g, MS = /%5B/g, NS = /%5D/g, ap = /%5E/g, US = /%60/g, ip = /%7B/g, IS = /%7C/g, rp = /%7D/g, zS = /%20/g;
function Rl(e) {
  return encodeURI("" + e).replace(IS, "|").replace(MS, "[").replace(NS, "]");
}
function RS(e) {
  return Rl(e).replace(ip, "{").replace(rp, "}").replace(ap, "^");
}
function yl(e) {
  return Rl(e).replace(sp, "%2B").replace(zS, "+").replace(op, "%23").replace(TS, "%26").replace(US, "`").replace(ip, "{").replace(rp, "}").replace(ap, "^");
}
function OS(e) {
  return yl(e).replace(PS, "%3D");
}
function HS(e) {
  return Rl(e).replace(op, "%23").replace(FS, "%3F");
}
function jS(e) {
  return e == null ? "" : HS(e).replace(BS, "%2F");
}
function fs(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && H(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function qS(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(sp, " "), i = a.indexOf("="), l = fs(i < 0 ? a : a.slice(0, i)), u = i < 0 ? null : fs(a.slice(i + 1));
    if (l in t) {
      let g = t[l];
      Le(g) || (g = t[l] = [g]), g.push(u);
    } else
      t[l] = u;
  }
  return t;
}
function pu(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = OS(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Le(o) ? o.map((a) => a && yl(a)) : [o && yl(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function GS(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = Le(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const WS = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), hu = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), Ya = Symbol({}.NODE_ENV !== "production" ? "router" : ""), lp = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), Cl = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
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
function on(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((i, l) => {
    const u = (c) => {
      c === !1 ? l(oo(4, {
        from: n,
        to: t
      })) : c instanceof Error ? l(c) : gS(c) ? l(oo(2, {
        from: t,
        to: c
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof c == "function" && a.push(c), i());
    }, g = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? XS(u, t, n) : u);
    let r = Promise.resolve(g);
    if (e.length < 3 && (r = r.then(u)), {}.NODE_ENV !== "production" && e.length > 2) {
      const c = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof g == "object" && "then" in g)
        r = r.then((d) => u._called ? d : (H(c), Promise.reject(new Error("Invalid navigation guard"))));
      else if (g !== void 0 && !u._called) {
        H(c), l(new Error("Invalid navigation guard"));
        return;
      }
    }
    r.catch((c) => l(c));
  });
}
function XS(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && H(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function xi(e, t, n, o) {
  const s = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && H(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const i in a.components) {
      let l = a.components[i];
      if ({}.NODE_ENV !== "production") {
        if (!l || typeof l != "object" && typeof l != "function")
          throw H(`Component "${i}" in record with path "${a.path}" is not a valid component. Received "${String(l)}".`), new Error("Invalid route component");
        if ("then" in l) {
          H(`Component "${i}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const u = l;
          l = () => u;
        } else
          l.__asyncLoader && // warn only once per component
          !l.__warnedDefineAsync && (l.__warnedDefineAsync = !0, H(`Component "${i}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[i]))
        if (KS(l)) {
          const g = (l.__vccOpts || l)[t];
          g && s.push(on(g, n, o, a, i));
        } else {
          let u = l();
          ({}).NODE_ENV !== "production" && !("catch" in u) && (H(`Component "${i}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), u = Promise.resolve(u)), s.push(() => u.then((g) => {
            if (!g)
              return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${a.path}"`));
            const r = Xv(g) ? g.default : g;
            a.components[i] = r;
            const d = (r.__vccOpts || r)[t];
            return d && on(d, n, o, a, i)();
          }));
        }
    }
  }
  return s;
}
function KS(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function wu(e) {
  const t = no(Ya), n = no(lp), o = dt(() => t.resolve(us(e.to))), s = dt(() => {
    const { matched: u } = o.value, { length: g } = u, r = u[g - 1], c = n.matched;
    if (!r || !c.length)
      return -1;
    const d = c.findIndex(rn.bind(null, r));
    if (d > -1)
      return d;
    const m = fu(u[g - 2]);
    return (
      // we are dealing with nested routes
      g > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      fu(r) === m && // avoid comparing the child with its parent
      c[c.length - 1].path !== m ? c.findIndex(rn.bind(null, u[g - 2])) : d
    );
  }), a = dt(() => s.value > -1 && ZS(n.params, o.value.params)), i = dt(() => s.value > -1 && s.value === n.matched.length - 1 && Zm(n.params, o.value.params));
  function l(u = {}) {
    return JS(u) ? t[us(e.replace) ? "replace" : "push"](
      us(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(ds) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && Ft) {
    const u = Km();
    if (u) {
      const g = {
        route: o.value,
        isActive: a.value,
        isExactActive: i.value
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(g), Ov(() => {
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
const YS = /* @__PURE__ */ Ym({
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
    const n = Hv(wu(e)), { options: o } = no(Ya), s = dt(() => ({
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
}), QS = YS;
function JS(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function ZS(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!Le(s) || s.length !== o.length || o.some((a, i) => a !== s[i]))
      return !1;
  }
  return !0;
}
function fu(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const _u = (e, t, n) => e != null ? e : t != null ? t : n, ey = /* @__PURE__ */ Ym({
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
    ({}).NODE_ENV !== "production" && ny();
    const o = no(Cl), s = dt(() => e.route || o.value), a = no(hu, 0), i = dt(() => {
      let g = us(a);
      const { matched: r } = s.value;
      let c;
      for (; (c = r[g]) && !c.components; )
        g++;
      return g;
    }), l = dt(() => s.value.matched[i.value]);
    yi(hu, dt(() => i.value + 1)), yi(WS, l), yi(Cl, s);
    const u = jv();
    return Jm(() => [u.value, l.value, e.name], ([g, r, c], [d, m, p]) => {
      r && (r.instances[c] = g, m && m !== r && g && g === d && (r.leaveGuards.size || (r.leaveGuards = m.leaveGuards), r.updateGuards.size || (r.updateGuards = m.updateGuards))), g && r && // if there is no instance but to and from are the same this might be
      // the first visit
      (!m || !rn(r, m) || !d) && (r.enterCallbacks[c] || []).forEach((h) => h(g));
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
      if ({}.NODE_ENV !== "production" && Ft && w.ref) {
        const f = {
          depth: i.value,
          name: c.name,
          path: c.path,
          meta: c.meta
        };
        (Le(w.ref) ? w.ref.map((S) => S.i) : [w.ref.i]).forEach((S) => {
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
const ty = ey;
function ny() {
  const e = Km(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    H(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
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
    matched: e.matched.map((o) => dy(o, ["instances", "children", "aliasOf"]))
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
let oy = 0;
function sy(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = oy++;
  Rv({
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
      Le(c.__vrl_devtools) && (c.__devtoolsApi = s, c.__vrl_devtools.forEach((d) => {
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
        kl(d, r.filter.toLowerCase())
      ))), c.forEach((d) => pp(d, t.currentRoute.value)), r.rootNodes = c.map(mp);
    }
    let g;
    s.on.getInspectorTree((r) => {
      g = r, r.app === e && r.inspectorId === l && u();
    }), s.on.getInspectorState((r) => {
      if (r.app === e && r.inspectorId === l) {
        const d = n.getRoutes().find((m) => m.record.__vd_id === r.nodeId);
        d && (r.state = {
          options: iy(d)
        });
      }
    }), s.sendInspectorTree(l), s.sendInspectorState(l);
  });
}
function ay(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function iy(e) {
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
        display: e.keys.map((o) => `${o.name}${ay(o)}`).join(" "),
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
const cp = 15485081, up = 2450411, dp = 8702998, ry = 2282478, gp = 16486972, ly = 6710886;
function mp(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: ry
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
    backgroundColor: ly
  });
  let o = n.__vd_id;
  return o == null && (o = String(cy++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(mp)
  };
}
let cy = 0;
const uy = /^\/(.*)\/([a-z]*)$/;
function pp(e, t) {
  const n = t.matched.length && rn(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => rn(o, e.record))), e.children.forEach((o) => pp(o, t));
}
function hp(e) {
  e.__vd_match = !1, e.children.forEach(hp);
}
function kl(e, t) {
  const n = String(e.re).match(uy);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => kl(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = fs(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => kl(i, t));
}
function dy(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function gy(e) {
  const t = bS(e.routes, e), n = e.parseQuery || qS, o = e.stringifyQuery || pu, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = So(), i = So(), l = So(), u = qv(Rt);
  let g = Rt;
  Ft && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const r = Ci.bind(null, (v) => "" + v), c = Ci.bind(null, jS), d = (
    // @ts-expect-error: intentionally avoid the type check
    Ci.bind(null, fs)
  );
  function m(v, b) {
    let V, A;
    return tp(v) ? (V = t.getRecordMatcher(v), A = b) : A = v, t.addRoute(A, V);
  }
  function p(v) {
    const b = t.getRecordMatcher(v);
    b ? t.removeRoute(b) : {}.NODE_ENV !== "production" && H(`Cannot remove non-existent route "${String(v)}"`);
  }
  function h() {
    return t.getRoutes().map((v) => v.record);
  }
  function w(v) {
    return !!t.getRecordMatcher(v);
  }
  function f(v, b) {
    if (b = X({}, b || u.value), typeof v == "string") {
      const I = ki(n, v, b.path), J = t.resolve({ path: I.path }, b), Ge = s.createHref(I.fullPath);
      return {}.NODE_ENV !== "production" && (Ge.startsWith("//") ? H(`Location "${v}" resolved to "${Ge}". A resolved location cannot start with multiple slashes.`) : J.matched.length || H(`No match found for location with path "${v}"`)), X(I, J, {
        params: d(J.params),
        hash: fs(I.hash),
        redirectedFrom: void 0,
        href: Ge
      });
    }
    let V;
    if ("path" in v)
      ({}).NODE_ENV !== "production" && "params" in v && !("name" in v) && // @ts-expect-error: the type is never
      Object.keys(v.params).length && H(`Path "${v.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), V = X({}, v, {
        path: ki(n, v.path, b.path).path
      });
    else {
      const I = X({}, v.params);
      for (const J in I)
        I[J] == null && delete I[J];
      V = X({}, v, {
        params: c(I)
      }), b.params = c(b.params);
    }
    const A = t.resolve(V, b), W = v.hash || "";
    ({}).NODE_ENV !== "production" && W && !W.startsWith("#") && H(`A \`hash\` should always start with the character "#". Replace "${W}" with "#${W}".`), A.params = r(d(A.params));
    const ee = Qv(o, X({}, v, {
      hash: RS(W),
      path: A.path
    })), z = s.createHref(ee);
    return {}.NODE_ENV !== "production" && (z.startsWith("//") ? H(`Location "${v}" resolved to "${z}". A resolved location cannot start with multiple slashes.`) : A.matched.length || H(`No match found for location with path "${"path" in v ? v.path : v}"`)), X({
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
        o === pu ? GS(v.query) : v.query || {}
      )
    }, A, {
      redirectedFrom: void 0,
      href: z
    });
  }
  function _(v) {
    return typeof v == "string" ? ki(n, v, u.value.path) : X({}, v);
  }
  function S(v, b) {
    if (g !== v)
      return oo(8, {
        from: b,
        to: v
      });
  }
  function k(v) {
    return R(v);
  }
  function L(v) {
    return k(X(_(v), { replace: !0 }));
  }
  function B(v) {
    const b = v.matched[v.matched.length - 1];
    if (b && b.redirect) {
      const { redirect: V } = b;
      let A = typeof V == "function" ? V(v) : V;
      if (typeof A == "string" && (A = A.includes("?") || A.includes("#") ? A = _(A) : (
        // force empty params
        { path: A }
      ), A.params = {}), {}.NODE_ENV !== "production" && !("path" in A) && !("name" in A))
        throw H(`Invalid redirect found:
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
  function R(v, b) {
    const V = g = f(v), A = u.value, W = v.state, ee = v.force, z = v.replace === !0, I = B(V);
    if (I)
      return R(
        X(_(I), {
          state: typeof I == "object" ? X({}, W, I.state) : W,
          force: ee,
          replace: z
        }),
        // keep original redirectedFrom if it exists
        b || V
      );
    const J = V;
    J.redirectedFrom = b;
    let Ge;
    return !ee && su(o, A, V) && (Ge = oo(16, { to: J, from: A }), mt(
      A,
      A,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (Ge ? Promise.resolve(Ge) : O(J, A)).catch((de) => _t(de) ? (
      // navigation redirects still mark the router as ready
      _t(
        de,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? de : gn(de)
    ) : (
      // reject any unknown error
      nt(de, J, A)
    )).then((de) => {
      if (de) {
        if (_t(
          de,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          su(o, f(de.to), J) && // and we have done it a couple of times
          b && // @ts-expect-error: added only in dev
          (b._count = b._count ? (
            // @ts-expect-error
            b._count + 1
          ) : 1) > 30 ? (H(`Detected a possibly infinite redirection in a navigation guard when going from "${A.fullPath}" to "${J.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : R(
            // keep options
            X({
              // preserve an existing replacement but allow the redirect to override it
              replace: z
            }, _(de.to), {
              state: typeof de.to == "object" ? X({}, W, de.to.state) : W,
              force: ee
            }),
            // preserve the original redirectedFrom if any
            b || J
          );
      } else
        de = N(J, A, !0, z, W);
      return F(J, A, de), de;
    });
  }
  function E(v, b) {
    const V = S(v, b);
    return V ? Promise.reject(V) : Promise.resolve();
  }
  function D(v) {
    const b = pt.values().next().value;
    return b && typeof b.runWithContext == "function" ? b.runWithContext(v) : v();
  }
  function O(v, b) {
    let V;
    const [A, W, ee] = my(v, b);
    V = xi(A.reverse(), "beforeRouteLeave", v, b);
    for (const I of A)
      I.leaveGuards.forEach((J) => {
        V.push(on(J, v, b));
      });
    const z = E.bind(null, v, b);
    return V.push(z), Pe(V).then(() => {
      V = [];
      for (const I of a.list())
        V.push(on(I, v, b));
      return V.push(z), Pe(V);
    }).then(() => {
      V = xi(W, "beforeRouteUpdate", v, b);
      for (const I of W)
        I.updateGuards.forEach((J) => {
          V.push(on(J, v, b));
        });
      return V.push(z), Pe(V);
    }).then(() => {
      V = [];
      for (const I of ee)
        if (I.beforeEnter)
          if (Le(I.beforeEnter))
            for (const J of I.beforeEnter)
              V.push(on(J, v, b));
          else
            V.push(on(I.beforeEnter, v, b));
      return V.push(z), Pe(V);
    }).then(() => (v.matched.forEach((I) => I.enterCallbacks = {}), V = xi(ee, "beforeRouteEnter", v, b), V.push(z), Pe(V))).then(() => {
      V = [];
      for (const I of i.list())
        V.push(on(I, v, b));
      return V.push(z), Pe(V);
    }).catch((I) => _t(
      I,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? I : Promise.reject(I));
  }
  function F(v, b, V) {
    l.list().forEach((A) => D(() => A(v, b, V)));
  }
  function N(v, b, V, A, W) {
    const ee = S(v, b);
    if (ee)
      return ee;
    const z = b === Rt, I = Ft ? history.state : {};
    V && (A || z ? s.replace(v.fullPath, X({
      scroll: z && I && I.scroll
    }, W)) : s.push(v.fullPath, W)), u.value = v, mt(v, b, V, z), gn();
  }
  let ne;
  function Q() {
    ne || (ne = s.listen((v, b, V) => {
      if (!ht.listening)
        return;
      const A = f(v), W = B(A);
      if (W) {
        R(X(W, { replace: !0 }), A).catch(ds);
        return;
      }
      g = A;
      const ee = u.value;
      Ft && aS(iu(ee.fullPath, V.delta), Ka()), O(A, ee).catch((z) => _t(
        z,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? z : _t(
        z,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (R(
        z.to,
        A
        // avoid an uncaught rejection, let push call triggerError
      ).then((I) => {
        _t(
          I,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !V.delta && V.type === ws.pop && s.go(-1, !1);
      }).catch(ds), Promise.reject()) : (V.delta && s.go(-V.delta, !1), nt(z, A, ee))).then((z) => {
        z = z || N(
          // after navigation, all matched components are resolved
          A,
          ee,
          !1
        ), z && (V.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !_t(
          z,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-V.delta, !1) : V.type === ws.pop && _t(
          z,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), F(A, ee, z);
      }).catch(ds);
    }));
  }
  let un = So(), dn = So(), gt;
  function nt(v, b, V) {
    gn(v);
    const A = dn.list();
    return A.length ? A.forEach((W) => W(v, b, V)) : ({}.NODE_ENV !== "production" && H("uncaught error during route navigation:"), console.error(v)), Promise.reject(v);
  }
  function po() {
    return gt && u.value !== Rt ? Promise.resolve() : new Promise((v, b) => {
      un.add([v, b]);
    });
  }
  function gn(v) {
    return gt || (gt = !v, Q(), un.list().forEach(([b, V]) => v ? V(v) : b()), un.reset()), v;
  }
  function mt(v, b, V, A) {
    const { scrollBehavior: W } = e;
    if (!Ft || !W)
      return Promise.resolve();
    const ee = !V && iS(iu(v.fullPath, 0)) || (A || !V) && history.state && history.state.scroll || null;
    return Wv().then(() => W(v, b, ee)).then((z) => z && sS(z)).catch((z) => nt(z, v, b));
  }
  const Be = (v) => s.go(v);
  let Ut;
  const pt = /* @__PURE__ */ new Set(), ht = {
    currentRoute: u,
    listening: !0,
    addRoute: m,
    removeRoute: p,
    hasRoute: w,
    getRoutes: h,
    resolve: f,
    options: e,
    push: k,
    replace: L,
    go: Be,
    back: () => Be(-1),
    forward: () => Be(1),
    beforeEach: a.add,
    beforeResolve: i.add,
    afterEach: l.add,
    onError: dn.add,
    isReady: po,
    install(v) {
      const b = this;
      v.component("RouterLink", QS), v.component("RouterView", ty), v.config.globalProperties.$router = b, Object.defineProperty(v.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => us(u)
      }), Ft && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !Ut && u.value === Rt && (Ut = !0, k(s.location).catch((W) => {
        ({}).NODE_ENV !== "production" && H("Unexpected error when starting the router:", W);
      }));
      const V = {};
      for (const W in Rt)
        Object.defineProperty(V, W, {
          get: () => u.value[W],
          enumerable: !0
        });
      v.provide(Ya, b), v.provide(lp, Gv(V)), v.provide(Cl, u);
      const A = v.unmount;
      pt.add(v), v.unmount = function() {
        pt.delete(v), pt.size < 1 && (g = Rt, ne && ne(), ne = null, u.value = Rt, Ut = !1, gt = !1), A();
      }, {}.NODE_ENV !== "production" && Ft && sy(v, b, t);
    }
  };
  function Pe(v) {
    return v.reduce((b, V) => b.then(() => D(V)), Promise.resolve());
  }
  return ht;
}
function my(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < a; i++) {
    const l = t.matched[i];
    l && (e.matched.find((g) => rn(g, l)) ? o.push(l) : n.push(l));
    const u = e.matched[i];
    u && (t.matched.find((g) => rn(g, u)) || s.push(u));
  }
  return [n, o, s];
}
function me() {
  return no(Ya);
}
const py = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), i = parseInt(e.slice(12, 14)), l = new Date(Date.UTC(t, n, o, s, a, i)), g = (/* @__PURE__ */ new Date()).getTime() - l.getTime();
  return Math.round(g / (1e3 * 3600 * 24));
}, hy = (e) => {
  const t = py(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const wy = window.Vuex.useStore, fy = window.Vue.computed, _y = {
  name: "CxTranslationWork",
  components: { MwRow: T, MwCol: C, MwThumbnail: Tl, MwIcon: be },
  props: {
    translation: {
      type: Ga,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e) {
    const t = wy(), n = (a, i) => {
      const l = t.getters["mediawiki/getPage"](a, i);
      return l == null ? void 0 : l.thumbnail;
    }, o = ge();
    return {
      timeagoMessage: fy(() => {
        const a = {
          days: "cx-sx-translation-work-days-since-started",
          months: "cx-sx-translation-work-months-since-started",
          years: "cx-sx-translation-work-years-since-started"
        }, i = hy(e.translation.startTimestamp);
        return o.i18n(
          a[i.postfix],
          i.value
        );
      }),
      getAutonym: j.getAutonym,
      getDir: j.getDir,
      getImage: n,
      mwIconArrowForward: El,
      mwIconArrowNext: Cm
    };
  }
}, Ks = window.Vue.resolveComponent, Pn = window.Vue.createVNode, vt = window.Vue.createElementVNode, Su = window.Vue.renderSlot, yu = window.Vue.withModifiers, bi = window.Vue.toDisplayString, $i = window.Vue.withCtx, vy = window.Vue.openBlock, Sy = window.Vue.createElementBlock, yy = window.Vue.createCommentVNode, Cy = { class: "col shrink pe-4" }, ky = { class: "col" }, xy = { class: "cx-translation__details column justify-between ma-0" }, by = { class: "row ma-0" }, $y = { class: "col grow" }, Vy = { class: "col shrink ps-2" }, Ey = ["dir", "textContent"], Ay = ["dir", "textContent"], Dy = ["textContent"];
function Ly(e, t, n, o, s, a) {
  const i = Ks("mw-thumbnail"), l = Ks("mw-icon"), u = Ks("mw-col"), g = Ks("mw-row");
  return n.translation ? (vy(), Sy("div", {
    key: 0,
    class: "row cx-translation pa-4 ma-0",
    onClick: t[1] || (t[1] = yu((r) => e.$emit("click"), ["stop"]))
  }, [
    vt("div", Cy, [
      Pn(i, {
        class: "cx-translation__thumbnail",
        thumbnail: o.getImage(n.translation.sourceLanguage, n.translation.sourceTitle)
      }, null, 8, ["thumbnail"])
    ]),
    vt("div", ky, [
      vt("div", xy, [
        vt("div", by, [
          vt("div", $y, [
            Su(e.$slots, "title")
          ]),
          vt("div", Vy, [
            Pn(l, {
              class: "cx-translation__action-icon",
              icon: n.actionIcon,
              onClick: t[0] || (t[0] = yu((r) => e.$emit("action-icon-clicked"), ["stop"]))
            }, null, 8, ["icon"])
          ])
        ]),
        Su(e.$slots, "mid-content"),
        Pn(g, { class: "cx-translation__footer ma-0" }, {
          default: $i(() => [
            Pn(u, {
              class: "cx-translation__languages",
              grow: ""
            }, {
              default: $i(() => [
                vt("span", {
                  class: "mw-ui-autonym",
                  dir: o.getDir(n.translation.sourceLanguage),
                  textContent: bi(o.getAutonym(n.translation.sourceLanguage))
                }, null, 8, Ey),
                Pn(l, {
                  icon: o.mwIconArrowNext,
                  class: "mx-1",
                  size: 14
                }, null, 8, ["icon"]),
                vt("span", {
                  class: "mw-ui-autonym ma-0",
                  dir: o.getDir(n.translation.targetLanguage),
                  textContent: bi(o.getAutonym(n.translation.targetLanguage))
                }, null, 8, Ay)
              ]),
              _: 1
            }),
            Pn(u, {
              class: "cx-translation__days-since-started",
              shrink: ""
            }, {
              default: $i(() => [
                vt("span", {
                  textContent: bi(o.timeagoMessage)
                }, null, 8, Dy)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])
    ])
  ])) : yy("", !0);
}
const wp = /* @__PURE__ */ P(_y, [["render", Ly]]);
const Co = window.Vue.unref, Cu = window.Vue.toDisplayString, Ty = window.Vue.normalizeClass, By = window.Vue.createElementVNode, Vi = window.Vue.openBlock, Py = window.Vue.createElementBlock, ku = window.Vue.createCommentVNode, xu = window.Vue.createVNode, Ys = window.Vue.withCtx, bu = window.Vue.createBlock, Fy = ["lang", "textContent"], My = ["lang", "textContent"], Ny = window.Vue.computed, Uy = window.Vue.inject, Iy = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: Bl,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = Uy("colors").gray200, s = Ny(
      () => {
        var u;
        return ((u = t.translation.progress) == null ? void 0 : u.any) * 100 || 0;
      }
    ), a = me(), { setTranslationURLParams: i } = M(), l = () => {
      i(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (u, g) => (Vi(), bu(wp, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": Co(ym),
      onActionIconClicked: g[0] || (g[0] = (r) => u.$emit("delete-translation")),
      onClick: l
    }, {
      title: Ys(() => [
        By("h5", {
          class: Ty(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: Cu(e.translation.sourceTitle)
        }, null, 10, Fy),
        e.translation.isLeadSectionTranslation ? ku("", !0) : (Vi(), Py("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: Cu(e.translation.sourceSectionTitle)
        }, null, 8, My))
      ]),
      "mid-content": Ys(() => [
        e.translation.progress ? (Vi(), bu(Co(T), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Ys(() => [
            xu(Co(C), null, {
              default: Ys(() => [
                xu(Co(bm), {
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
}, zy = window.Vue.computed, Ry = window.Vue.inject, $s = () => {
  const e = Ry("breakpoints");
  return { isDesktop: zy(
    () => !G.isMobileDomain() && e.value.tabletAndUp
  ) };
}, $u = window.Vue.computed, Oy = window.Vuex.useStore;
function Vs() {
  const e = Oy(), t = $u(
    () => e.state.mediawiki.supportedLanguageCodes || []
  );
  return {
    enabledTargetLanguages: $u(
      () => e.state.mediawiki.enabledTargetLanguages
    ),
    supportedLanguageCodes: t
  };
}
const Hy = (e, t) => {
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
}, jy = window.Vuex.useStore, Ol = () => {
  const e = jy(), {
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
}, qy = () => {
  const { currentSuggestionFilters: e } = M(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = b1(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = w1(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: i } = S1(), l = {
    [an]: t,
    [An]: o,
    [Dn]: a
  }, u = {
    [an]: n,
    [An]: s,
    [Dn]: i
  };
  return {
    getCurrentPageSuggestionProvider: () => l[e.value.type],
    getCurrentSectionSuggestionProvider: () => u[e.value.type]
  };
}, Gy = window.Vuex.useStore, Hl = () => {
  const e = Gy(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = Ol(), {
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
  } = qy(), g = (d) => {
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
    fetchNextSectionSuggestionsSlice: () => y(void 0, null, function* () {
      e.commit("suggestions/increaseSectionSuggestionsLoadingCount");
      const d = a(), p = yield u()(
        d
      );
      p.forEach(
        (h) => e.commit("suggestions/addSectionSuggestion", h)
      ), g(p), e.commit("suggestions/decreaseSectionSuggestionsLoadingCount");
    }),
    fetchNextPageSuggestionsSlice: () => y(void 0, null, function* () {
      e.commit("suggestions/increasePageSuggestionsLoadingCount");
      const d = i(), p = yield l()(
        d
      );
      p.forEach(
        (h) => e.commit("suggestions/addPageSuggestion", h)
      ), g(p), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, Wy = window.Vuex.useStore, jl = () => {
  const e = Wy(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = Hl(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = Ol();
  return () => y(void 0, null, function* () {
    const { targetLanguage: a } = q(e), i = s(0), l = o(0), { maxSuggestionsPerSlice: u } = e.state.suggestions, g = i.length === u, r = l.length === u;
    g && r || (yield e.dispatch(
      "suggestions/fetchAppendixSectionTitles",
      a.value
    ), t(), n());
  });
}, Xy = window.Vuex.useStore, ql = () => {
  const e = Xy();
  return (t, n, o) => y(void 0, null, function* () {
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
          return new vs({
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
}, Vu = window.Vue.computed, Ky = window.Vuex.useStore, Mt = () => {
  const e = Ky(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = M(), s = Vu(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = Vu(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (l, u) => s.value.getTitleForLanguage(l) || s.value.getTitleForLanguage(u)
  };
}, Es = window.Vuex.useStore, As = (e, t, n, o, s = {}) => {
  const a = mw.config.get(
    "wgContentTranslationTranslateInTarget"
  ), i = G.getCurrentWikiLanguageCode();
  return a && t !== i ? (s = le({ sx: !0 }, s), o && (s.section = o), location.href = G.getCXUrl(
    n,
    null,
    e,
    t,
    s
  ), !0) : !1;
}, { setLanguageURLParams: Yy, pageURLParameter: Qy, sectionURLParameter: Jy } = M(), Ds = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), Yy(t, n);
}, fp = () => {
  const e = Es(), { enabledTargetLanguages: t, supportedLanguageCodes: n } = Vs();
  return () => y(void 0, null, function* () {
    yield e.dispatch("mediawiki/fetchSupportedLanguageCodes");
    const { sourceLanguage: o, targetLanguage: s } = Hy(
      t.value,
      n.value
    );
    As(
      o,
      s,
      Qy.value,
      Jy.value
    ) || Ds(e, o, s);
  });
}, _p = () => {
  const e = Es(), t = jl();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = q(e);
    n === o && (n = a.value, o = s.value), As(
      n,
      o,
      null,
      null
    ) || (Ds(e, n, o), t());
  };
}, Zy = () => {
  const e = Es(), t = jl();
  return (
    /** @param {Translation} translation */
    (n) => {
      const { sourceLanguage: o, targetLanguage: s, sourceTitle: a, sourceSectionTitle: i } = n;
      As(
        o,
        s,
        a,
        i,
        { draft: !0 }
      ) || (Ds(e, o, s), t());
    }
  );
}, eC = () => {
  const e = Es();
  return (t) => {
    const { sourceLanguage: n, targetLanguage: o, sourceTitle: s } = t;
    As(
      n,
      o,
      s,
      null
    ) || Ds(e, n, o);
  };
}, tC = () => {
  const e = Es(), t = ql(), { currentLanguageTitleGroup: n, targetPageExists: o } = Mt();
  return (s, a) => y(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: i,
      targetLanguageURLParameter: l,
      setPageURLParam: u,
      clearSectionURLParameter: g
    } = M();
    s === a && (s = l.value, a = i.value);
    const r = n.value.getTitleForLanguage(s);
    As(
      s,
      a,
      r,
      null
    ) || (Ds(e, s, a), u(r), o.value ? (g(), yield t(
      i.value,
      l.value,
      r
    )) : yield e.dispatch("mediawiki/fetchPageMetadata", {
      language: i.value,
      titles: [r]
    }), e.dispatch("application/getCXServerToken"));
  });
}, nC = window.Vuex.useStore, vp = [], oC = (e, t, n) => vp.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), sC = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  vp.push(o);
}, aC = () => {
  const e = nC();
  return (t, n, o) => y(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !oC(t, n, o) && (s = yield ue.fetchSectionSuggestion(
      t,
      o,
      n
    ), sC(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, iC = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', rC = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', lC = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', cC = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', uC = '<path d="M10 1a9 9 0 109 9 9 9 0 00-9-9m5 10H5V9h10z"/>', dC = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', gC = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', mC = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', pC = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', hC = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', wC = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', fC = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', _C = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', vC = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', SC = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', yC = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', CC = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', kC = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', xC = '<path d="M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z"/><path d="m11 1 3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z"/>', bC = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', $C = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', VC = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', EC = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', AC = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', DC = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', LC = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', TC = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', BC = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', xl = iC, Sp = rC, PC = {
  ltr: lC,
  shouldFlip: !0
}, yp = {
  ltr: cC,
  shouldFlip: !0
}, FC = uC, Cp = dC, kp = gC, MC = mC, NC = pC, UC = hC, uo = wC, Gl = fC, Wl = _C, IC = vC, xp = SC, zC = {
  langCodeMap: {
    ar: yC
  },
  default: CC
}, RC = kC, Xl = {
  ltr: xC,
  shouldFlip: !0
}, OC = bC, Ls = {
  ltr: $C,
  shouldFlip: !0
}, Kl = {
  ltr: VC,
  shouldFlip: !0
}, HC = {
  ltr: EC,
  shouldFlip: !0
}, bp = AC, jC = DC, qC = LC, GC = TC, $p = BC, Vp = "cx-translation-session-position-", Ep = () => Vp + mw.user.sessionId(), Ap = () => {
  const e = Ep();
  let t = mw.storage.get(e);
  return t == null && (t = 0), parseInt(t);
}, WC = function() {
  const e = Ap();
  Object.keys(mw.storage.store).filter((n) => n.startsWith(Vp)).forEach((n) => mw.storage.remove(n));
  const t = Ep();
  mw.storage.set(t, e + 1);
};
let bl = null;
function XC(e) {
  if (bl)
    return Promise.resolve(bl);
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
function KC(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function YC(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = e.access_method || "mobile web", n = mw.config.get("wgDBname"), o = `cx_sx_${mw.user.sessionId()}_${t}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), i = mw.user.getName(), l = Ap(), u = {
    $schema: "/analytics/mediawiki/content_translation_event/1.6.0",
    translation_type: "section",
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
  ) : g = XC(i).then((r) => {
    bl = r, mw.eventLog.submit(
      s,
      Object.assign({}, u, e, {
        user_global_edit_count: r,
        user_global_edit_count_bucket: KC(r)
      })
    );
  }), g.then(() => {
    WC();
  });
}
const Nt = () => YC, QC = window.Vue.ref, Dp = QC(null), JC = (e) => {
  Dp.value = e;
}, Yl = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = M(), s = Nt();
  return { logDashboardTranslationStartEvent: () => {
    const i = {
      event_type: "dashboard_translation_start",
      event_source: Dp.value,
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
  }, setStartTranslationEventSource: JC };
}, ZC = window.Vuex.useStore, Ts = () => {
  const e = ZC(), t = me(), n = ql(), { setTranslationURLParams: o } = M(), { setStartTranslationEventSource: s } = Yl();
  return (a, i, l, u) => y(void 0, null, function* () {
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
const Qs = window.Vue.withModifiers, Ei = window.Vue.toDisplayString, Ai = window.Vue.createElementVNode, Me = window.Vue.unref, Js = window.Vue.openBlock, Eu = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Ot = window.Vue.createVNode, pn = window.Vue.withCtx, Au = window.Vue.createElementBlock, ek = ["lang", "href", "textContent"], tk = {
  key: 1,
  class: "flex"
}, nk = { key: 2 }, ok = window.Vuex.useStore, Du = window.Vue.computed, Lu = window.Vue.ref, Di = window.Codex.CdxButton, Li = window.Codex.CdxIcon, sk = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: zl,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = ok(), o = Lu(!0), s = Lu(null), a = Du(() => {
      var w;
      return (w = s.value) == null ? void 0 : w.missingSections;
    }), i = Du(
      () => a.value && Object.keys(a.value)[0]
    );
    aC()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((w) => s.value = w).catch((w) => console.log(w)).finally(() => o.value = !1), me(), $s();
    const { setTranslationURLParams: u, setSectionURLParam: g } = M(), r = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, c = Ts(), { sourceLanguage: d, targetLanguage: m } = q(n), p = eC(), h = (w) => {
      p(t.translation), c(
        t.translation.sourceTitle,
        d.value,
        m.value,
        "continue_published"
      ), w && g(w);
    };
    return (w, f) => (Js(), Eu(wp, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: r
    }, {
      title: pn(() => [
        Ai("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: f[0] || (f[0] = Qs(() => {
          }, ["stop"])),
          textContent: Ei(e.translation.sourceTitle)
        }, null, 8, ek)
      ]),
      "mid-content": pn(() => [
        Ot(Me(T), { class: "ma-0" }, {
          default: pn(() => [
            Ot(Me(C), null, {
              default: pn(() => [
                o.value ? (Js(), Eu(Me(tt), { key: 0 })) : a.value ? (Js(), Au("div", tk, [
                  Ot(Me(Di), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: f[1] || (f[1] = Qs((_) => h(i.value), ["stop"]))
                  }, {
                    default: pn(() => [
                      Ot(Me(Li), {
                        class: "me-1",
                        icon: Me(xl)
                      }, null, 8, ["icon"]),
                      Ai("span", null, Ei(i.value), 1)
                    ]),
                    _: 1
                  }),
                  Ot(Me(Di), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": w.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: f[2] || (f[2] = Qs((_) => h(null), ["stop"]))
                  }, {
                    default: pn(() => [
                      Ot(Me(Li), { icon: Me(Wl) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : (Js(), Au("div", nk, [
                  Ot(Me(Di), {
                    class: "cx-published-translation__start-new-translation-button flex items-center pa-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: f[3] || (f[3] = Qs((_) => h(null), ["stop"]))
                  }, {
                    default: pn(() => [
                      Ot(Me(Li), {
                        class: "me-1",
                        icon: Me(xl)
                      }, null, 8, ["icon"]),
                      Ai("span", null, Ei(w.$i18n("sx-published-translation-new-translation-button-label")), 1)
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
}, Tu = window.Vuex.useStore, ak = () => {
  const e = Tu(), { commit: t } = Tu(), { sourceLanguage: n, targetLanguage: o } = q(e), s = Nt();
  return (a) => y(void 0, null, function* () {
    a.sectionTranslationId ? (yield He.deleteTranslation(
      a.sectionTranslationId,
      a.translationId,
      a.sectionId
    )) && t(
      "translator/removeTranslationBySectionTranslationId",
      a.sectionTranslationId
    ) : (yield He.deleteCXTranslation(
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
const ik = {
  name: "SxConfirmTranslationDeletionDialog",
  components: {
    MwButton: De,
    MwDialog: je
  },
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: Ga,
      default: null
    }
  },
  emits: ["update:modelValue", "continue-translation", "discard-translation"],
  setup(e, { emit: t }) {
    const n = () => t("update:modelValue", !1), o = ak();
    return { closeDialog: n, deleteTranslation: () => {
      o(e.translation), n();
    } };
  }
}, rk = window.Vue.resolveDirective, Ti = window.Vue.createElementVNode, lk = window.Vue.withDirectives, Bu = window.Vue.resolveComponent, Pu = window.Vue.createVNode, Fu = window.Vue.withCtx, ck = window.Vue.openBlock, uk = window.Vue.createBlock, dk = { class: "pa-4" }, gk = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" };
function mk(e, t, n, o, s, a) {
  const i = Bu("mw-button"), l = Bu("mw-dialog"), u = rk("i18n");
  return ck(), uk(l, {
    value: n.modelValue,
    class: "sx-confirm-back-navigation-dialog",
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.gray700,
    header: !1,
    "min-height": "unset"
  }, {
    footer: Fu(() => [
      Ti("div", gk, [
        Pu(i, {
          class: "grow py-3",
          large: "",
          label: e.$i18n("sx-translation-deletion-cancel-button-label"),
          onClick: o.closeDialog
        }, null, 8, ["label", "onClick"]),
        Pu(i, {
          class: "grow py-3",
          large: "",
          destructive: "",
          label: e.$i18n("sx-translation-deletion-confirm-button-label"),
          onClick: o.deleteTranslation
        }, null, 8, ["label", "onClick"])
      ])
    ]),
    default: Fu(() => [
      Ti("div", dk, [
        lk(Ti("span", null, null, 512), [
          [u, void 0, "sx-confirm-translation-deletion-dialog-body"]
        ])
      ])
    ]),
    _: 1
  }, 8, ["value", "overlay-color"]);
}
const pk = /* @__PURE__ */ P(ik, [["render", mk]]);
function hk(e, t, n) {
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
        j.getAutonym(a).toLowerCase().includes(t.toLowerCase()) || // Search using script name
        j.getScript(a).toLowerCase().includes(t.toLowerCase())
      )
    );
    return s.length ? s : n ? (yield wk(t, n)).filter((i) => e.includes(i)) : [];
  });
}
function Mu(e, t, n) {
  return y(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(j.sortByAutonym) : (yield hk(e, t, n)).sort(j.sortByAutonym);
  });
}
function wk(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function fk() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function _k(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
function vk(e) {
  const t = e.length;
  return t < 10 ? "few-results" : t < 30 ? "some-results" : "many-results";
}
const Sk = window.Vue.computed;
function yk(e, t) {
  const n = Sk(() => {
    if (!t.value.length || !e.value.trim())
      return "";
    for (let s = 0; s < t.value.length; s++) {
      const a = j.getAutonym(t.value[s]);
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
const Bi = window.Vue.ref, Nu = window.Vue.watch, Ck = window.Vue.computed;
function kk(e, t, n) {
  const o = Bi(""), s = Bi(-1), a = Bi(null), i = () => {
    s.value++, s.value >= l.value.length && (s.value = 0);
  }, l = Ck(
    () => e.value ? t.value : [...n, ...t.value]
  ), u = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return Nu(e, () => {
    s.value = -1;
  }), Nu(s, () => y(this, null, function* () {
    var g;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = l.value[s.value], (g = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || g.scrollIntoView(!1);
  })), { next: i, prev: u, langSelectorContainer: a, selectedLanguage: o };
}
function Ql(e, t, n) {
  let o;
  const s = (...a) => {
    const i = this, l = () => {
      o = null, n || e.apply(i, a);
    };
    n && !o && e.apply(i, a), (!o || t) && (clearTimeout(o), o = setTimeout(l, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const Pi = window.Vue.ref, xk = window.Vue.watch, bk = window.Vue.onMounted, Uu = window.Vue.computed, $k = {
  name: "MwLanguageSelector",
  components: {
    MwInput: Ll
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
      default: fk
    }
  },
  emits: ["select", "close"],
  setup(e, t) {
    const n = Pi(null), o = Pi(""), s = Pi([]), a = Uu(
      () => _k(s.value)
    ), i = Uu(
      () => vk(s.value)
    ), l = (f) => t.emit("select", f), u = () => t.emit("close"), { autocompletion: g, onTabSelect: r } = yk(
      o,
      s
    ), { next: c, prev: d, langSelectorContainer: m, selectedLanguage: p } = kk(o, s, e.suggestions), h = () => {
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
    return xk(o, Ql(() => y(this, null, function* () {
      s.value = yield Mu(
        e.languages,
        o.value,
        e.searchAPI
      );
    }), 300)), bk(() => y(this, null, function* () {
      e.autofocus && setTimeout(() => n.value.focus(), 500), s.value = yield Mu(
        e.languages,
        "",
        e.searchAPI
      );
    })), {
      autocompletion: g,
      close: u,
      getAutonym: j.getAutonym,
      getDir: j.getDir,
      langSelectorContainer: m,
      mwIconClose: so,
      mwIconSearch: km,
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
}, Zs = window.Vue.renderSlot, Vk = window.Vue.resolveComponent, Iu = window.Vue.createVNode, ko = window.Vue.withModifiers, xo = window.Vue.withKeys, Ht = window.Vue.createElementVNode, Ek = window.Vue.resolveDirective, ea = window.Vue.withDirectives, Fi = window.Vue.renderList, Mi = window.Vue.Fragment, St = window.Vue.openBlock, yt = window.Vue.createElementBlock, zu = window.Vue.toDisplayString, ta = window.Vue.normalizeClass, Ni = window.Vue.createCommentVNode, Ak = {
  ref: "langSelectorContainer",
  class: "mw-ui-language-selector"
}, Dk = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, Lk = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, Tk = { class: "results px-3 pt-4" }, Bk = { class: "results-header ps-8 pb-2" }, Pk = { class: "results-languages--suggestions pa-0 ma-0" }, Fk = ["lang", "dir", "aria-selected", "onClick", "textContent"], Mk = { class: "results px-3 pt-4" }, Nk = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, Uk = ["lang", "dir", "aria-selected", "onClick", "textContent"], Ik = ["aria-selected"], zk = { class: "no-results px-3 py-4" }, Rk = { class: "ps-8" };
function Ok(e, t, n, o, s, a) {
  const i = Vk("mw-input"), l = Ek("i18n");
  return St(), yt("div", Ak, [
    Zs(e.$slots, "search", {}, () => [
      Ht("div", Dk, [
        Iu(i, {
          value: o.autocompletion,
          "onUpdate:value": t[0] || (t[0] = (u) => o.autocompletion = u),
          icon: o.mwIconSearch,
          "icon-size": 20,
          class: "mw-ui-language-selector__autocomplete pa-4",
          disabled: ""
        }, null, 8, ["value", "icon"]),
        Iu(i, {
          ref: "searchInputElement",
          value: o.searchQuery,
          "onUpdate:value": t[1] || (t[1] = (u) => o.searchQuery = u),
          class: "mw-ui-language-selector__search pa-4",
          icon: o.mwIconSearch,
          "icon-size": 20,
          placeholder: n.placeholder,
          autofocus: n.autofocus,
          onKeydown: [
            xo(ko(o.onEnter, ["prevent"]), ["enter"]),
            xo(ko(o.next, ["stop", "prevent"]), ["down"]),
            xo(ko(o.prev, ["stop", "prevent"]), ["up"]),
            xo(ko(o.close, ["prevent"]), ["esc"]),
            xo(ko(o.onTabSelect, ["prevent"]), ["tab"])
          ]
        }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
      ])
    ]),
    Ht("section", Lk, [
      n.suggestions.length && !o.searchQuery ? Zs(e.$slots, "suggestions", { key: 0 }, () => [
        Ht("section", Tk, [
          ea(Ht("p", Bk, null, 512), [
            [l, void 0, "cx-sx-language-selector-suggestions"]
          ]),
          Ht("ul", Pk, [
            (St(!0), yt(Mi, null, Fi(n.suggestions, (u) => (St(), yt("li", {
              key: u,
              class: ta(["language pa-2 ps-8 ma-0", u === o.selectedLanguage ? "language--selected" : ""]),
              lang: u,
              dir: o.getDir(u),
              "aria-selected": u === o.selectedLanguage || null,
              tabindex: "-1",
              role: "option",
              onClick: (g) => o.select(u),
              textContent: zu(o.getAutonym(u))
            }, null, 10, Fk))), 128))
          ])
        ])
      ]) : Ni("", !0),
      o.searchResultsByScript.length ? Zs(e.$slots, "search", { key: 1 }, () => [
        Ht("section", Mk, [
          n.suggestions.length && !o.searchQuery ? ea((St(), yt("p", Nk, null, 512)), [
            [l, void 0, "cx-sx-language-selector-all-languages"]
          ]) : Ni("", !0),
          (St(!0), yt(Mi, null, Fi(o.searchResultsByScript, (u, g) => (St(), yt("ul", {
            key: g,
            class: ta(["results-languages pa-0 ma-0 mb-6", o.resultsDisplayClass])
          }, [
            (St(!0), yt(Mi, null, Fi(u, (r) => (St(), yt("li", {
              key: r,
              class: ta(["language pa-2 ps-8 ma-0", r === o.selectedLanguage ? "language--selected" : ""]),
              lang: r,
              dir: o.getDir(r),
              role: "option",
              "aria-selected": r === o.selectedLanguage || null,
              tabindex: "-1",
              onClick: (c) => o.select(r),
              textContent: zu(o.getAutonym(r))
            }, null, 10, Uk))), 128)),
            n.allOptionEnabled && !o.searchQuery ? ea((St(), yt("li", {
              key: 0,
              class: ta(["language pa-2 ps-8 ma-0", o.selectedLanguage === "all" ? "language--selected" : ""]),
              role: "option",
              "aria-selected": o.selectedLanguage === "all" || null,
              tabindex: "-1",
              onClick: t[2] || (t[2] = (r) => o.select("all"))
            }, null, 10, Ik)), [
              [l, void 0, "cx-translation-list-all-languages-option-label"]
            ]) : Ni("", !0)
          ], 2))), 128))
        ])
      ]) : Zs(e.$slots, "noresults", { key: 2 }, () => [
        Ht("section", zk, [
          ea(Ht("h3", Rk, null, 512), [
            [l, void 0, "cx-sx-language-selector-no-search-results"]
          ])
        ])
      ])
    ])
  ], 512);
}
const Lp = /* @__PURE__ */ P($k, [["render", Ok]]);
const pe = window.Vue.unref, Hk = window.Vue.resolveDirective, Ru = window.Vue.withDirectives, bo = window.Vue.openBlock, $o = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Ou = window.Vue.toDisplayString, Hu = window.Vue.withModifiers, hn = window.Vue.withCtx, Ct = window.Vue.createVNode, jk = { class: "sx-translation-list-language-selector" }, qk = {
  key: 0,
  class: "mw-ui-autonym"
}, Gk = ["lang", "dir", "textContent"], Wk = {
  key: 0,
  class: "mw-ui-autonym"
}, Xk = ["lang", "dir", "textContent"], Vo = window.Vue.computed, Kk = window.Vue.inject, Yk = window.Vue.ref, Jl = {
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
    const n = e, o = t, s = Kk("breakpoints"), a = Vo(() => s.value.mobile), i = Yk(null), l = Vo(() => !!i.value), u = () => i.value = "source", g = () => i.value = "target", r = () => i.value = null, c = Vo(() => {
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
    }, m = Vo(
      () => n.selectedSourceLanguage === "all"
    ), p = Vo(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, w) => {
      const f = Hk("i18n");
      return bo(), $o("div", jk, [
        Ct(pe(T), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: hn(() => [
            Ct(pe(C), {
              class: "flex justify-end",
              cols: "5"
            }, {
              default: hn(() => [
                Ct(pe(De), {
                  indicator: pe(pl),
                  class: "pa-3 sx-translation-list-language-selector__button",
                  type: "text",
                  onClick: Hu(u, ["stop"])
                }, {
                  default: hn(() => [
                    m.value ? Ru((bo(), $o("span", qk, null, 512)), [
                      [f, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (bo(), $o("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: pe(j.getDir)(e.selectedSourceLanguage),
                      textContent: Ou(pe(j.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, Gk))
                  ]),
                  _: 1
                }, 8, ["indicator", "onClick"])
              ]),
              _: 1
            }),
            Ct(pe(C), {
              class: "sx-translation-list-language-selector__arrow flex justify-center",
              cols: "2"
            }, {
              default: hn(() => [
                Ct(pe(be), { icon: pe(Cm) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Ct(pe(C), { cols: "5" }, {
              default: hn(() => [
                Ct(pe(De), {
                  indicator: pe(pl),
                  class: "pa-3 sx-translation-list-language-selector__button",
                  type: "text",
                  disabled: e.targetLanguages.length < 2,
                  onClick: Hu(g, ["stop"])
                }, {
                  default: hn(() => [
                    p.value ? Ru((bo(), $o("span", Wk, null, 512)), [
                      [f, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (bo(), $o("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: pe(j.getDir)(e.selectedTargetLanguage),
                      textContent: Ou(pe(j.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, Xk))
                  ]),
                  _: 1
                }, 8, ["indicator", "disabled", "onClick"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Ct(pe(je), {
          value: l.value,
          "onUpdate:value": w[0] || (w[0] = (_) => l.value = _),
          animation: "slide-up",
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-opacity": 0,
          onClose: r
        }, {
          default: hn(() => [
            Ct(pe(Lp), {
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
}, Qk = window.Vue.toDisplayString, Jk = window.Vue.createElementVNode, ju = window.Vue.createVNode, qu = window.Vue.unref, jt = window.Vue.openBlock, na = window.Vue.createBlock, Gu = window.Vue.createCommentVNode, Wu = window.Vue.renderList, Xu = window.Vue.Fragment, oa = window.Vue.createElementBlock, Zk = window.Vue.normalizeClass, Ku = window.Vue.withCtx, ex = ["textContent"], tx = {
  key: 1,
  class: "cx-translation-list-wrapper"
}, nx = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, sa = window.Vue.ref, kt = window.Vue.computed, ox = window.Vuex.useStore, Yu = {
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
    const t = e, n = sa("all"), o = sa("all"), s = ox(), a = kt(
      () => s.state.translator.translationsLoaded[t.translationStatus]
    ), { enabledTargetLanguages: i } = Vs(), l = sa(!1), u = sa(null), g = kt(
      () => t.translationStatus === "draft"
    ), r = kt(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), c = kt(
      () => n.value === "all"
    ), d = kt(
      () => o.value === "all"
    ), m = kt(
      () => r.value.filter(
        (_) => (c.value || _.sourceLanguage === n.value) && (d.value || _.targetLanguage === o.value)
      ).sort((_, S) => _.lastUpdatedTimestamp < S.lastUpdatedTimestamp)
    ), p = kt(() => {
      let _ = r.value.map(
        (S) => S.targetLanguage
      );
      return i.value && (_ = _.filter(
        (S) => i.value.includes(S)
      )), [...new Set(_)];
    }), h = kt(() => {
      const _ = r.value.map(
        (S) => S.sourceLanguage
      );
      return [...new Set(_)];
    }), w = (_) => {
      u.value = _, l.value = !0;
    }, f = kt(() => t.activeStatus === t.translationStatus);
    return (_, S) => f.value ? (jt(), na(qu(et), {
      key: 0,
      class: Zk(`cx-translation-list--${e.translationStatus}`)
    }, {
      header: Ku(() => [
        Jk("h3", {
          class: "mw-ui-card__title pa-4 pt-5 mb-0",
          textContent: Qk(_.$i18n(`cx-translation-label-${e.translationStatus}`))
        }, null, 8, ex)
      ]),
      default: Ku(() => [
        ju(Jl, {
          "selected-source-language": n.value,
          "onUpdate:selectedSourceLanguage": S[0] || (S[0] = (k) => n.value = k),
          "selected-target-language": o.value,
          "onUpdate:selectedTargetLanguage": S[1] || (S[1] = (k) => o.value = k),
          "source-languages": h.value,
          "target-languages": p.value,
          "all-option-enabled": ""
        }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"]),
        a.value ? Gu("", !0) : (jt(), na(qu(tt), { key: 0 })),
        g.value ? (jt(), oa("div", tx, [
          (jt(!0), oa(Xu, null, Wu(m.value, (k) => (jt(), na(Iy, {
            key: `${e.translationStatus}-${k.key}`,
            translation: k,
            onDeleteTranslation: (L) => w(k)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (jt(), oa("div", nx, [
          (jt(!0), oa(Xu, null, Wu(m.value, (k) => (jt(), na(sk, {
            key: `${e.translationStatus}-${k.key}`,
            translation: k,
            onDeleteTranslation: (L) => w(k)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])),
        ju(pk, {
          modelValue: l.value,
          "onUpdate:modelValue": S[2] || (S[2] = (k) => l.value = k),
          translation: u.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : Gu("", !0);
  }
}, sx = window.Vue.computed, ax = window.Vuex.useStore, Te = () => {
  const e = ax(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = M();
  return { sectionSuggestion: sx(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ) };
}, ix = window.Vuex.useStore, rx = window.Vue.computed, cn = () => {
  const e = ix(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = M();
  return { currentTranslation: rx(
    () => e.getters["translator/getDraftTranslation"](
      s.value,
      o.value,
      t.value,
      n.value
    )
  ) };
}, Qu = window.Vue.computed, lx = window.Vuex.useStore, qe = () => {
  const e = lx(), { sectionSuggestion: t } = Te(), { currentTranslation: n } = cn(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = M(), i = Qu(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), l = Qu(() => {
    var g, r;
    const u = ((g = t.value) == null ? void 0 : g.targetTitle) || ((r = n.value) == null ? void 0 : r.targetTitle);
    return e.getters["mediawiki/getPage"](
      a.value,
      u
    );
  });
  return { currentSourcePage: i, currentTargetPage: l };
}, cx = window.Vue.ref, ux = window.Vue.watchEffect, dx = (e, t) => y(void 0, null, function* () {
  const n = e.language, o = e.title, s = e.articleSize, a = t.missingSections, l = (yield ue.fetchSuggestionSourceSections(
    n,
    o
  )).sections.filter((u) => u.level === "2").reduce((u, g, r, c) => {
    const d = r < c.length - 1 ? c[r + 1].byteoffset : s;
    return u[g.line] = d - g.byteoffset, u;
  }, {});
  return Object.keys(l).filter((u) => a[u]).reduce((u, g) => u + l[g], 0);
}), Ui = (e) => {
  const s = e / 5 / 200;
  return Math.ceil(s);
}, gx = (e) => {
  const t = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-whole-article",
    Math.round(t * 2) / 2,
    e
  ];
}, mx = (e, t) => {
  const n = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-sections",
    Math.round(n * 2) / 2,
    e,
    t
  ];
}, Tp = () => {
  const { currentSourcePage: e } = qe(), { sectionSuggestion: t } = Te(), n = cx(null);
  return ux(() => {
    if (t.value)
      dx(
        e.value,
        t.value
      ).then((o) => {
        n.value = mx(
          Ui(o),
          Object.keys(t.value.missingSections).length
        );
      });
    else if (e.value) {
      const o = Ui(e.value.articleSize);
      n.value = gx(o);
    }
  }), { translationSizeMessageArgs: n, bytesToMinutes: Ui };
};
const oe = window.Vue.unref, ot = window.Vue.createVNode, qt = window.Vue.createElementVNode, aa = window.Vue.toDisplayString, We = window.Vue.withCtx, px = window.Vue.resolveDirective, Ii = window.Vue.withDirectives, Fn = window.Vue.openBlock, Eo = window.Vue.createBlock, Ao = window.Vue.createCommentVNode, Ju = window.Vue.withModifiers, hx = window.Vue.createElementBlock, wx = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, fx = { class: "col shrink pe-4" }, _x = ["lang", "dir", "textContent"], vx = ["lang", "dir", "textContent"], Sx = ["textContent"], yx = ["textContent"], zi = window.Codex.CdxIcon, st = window.Vue.computed, Cx = window.Vue.inject, kx = window.Vuex.useStore, $l = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [vs, En, eo],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = kx(), { bytesToMinutes: o } = Tp(), s = st(() => t.suggestion), a = st(
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
      () => s.value instanceof En
    ), r = st(
      () => s.value instanceof eo
    ), { sourceLanguageAutonym: c, targetLanguageAutonym: d } = q(n), m = st(
      () => r.value ? Cp : kp
    ), p = Cx("colors"), h = st(
      () => r.value ? p.blue600 : "currentColor"
    ), w = st(() => {
      var f;
      return o((f = i.value) == null ? void 0 : f.articleSize) < 15;
    });
    return (f, _) => {
      const S = px("i18n");
      return s.value ? (Fn(), hx("div", wx, [
        qt("div", fx, [
          ot(oe(Tl), {
            class: "cx-suggestion__thumbnail",
            thumbnail: i.value && i.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        ot(oe(T), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: We(() => [
            ot(oe(T), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: We(() => [
                ot(oe(C), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: We(() => [
                    qt("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: s.value.sourceLanguage,
                      dir: oe(j.getDir)(s.value.sourceLanguage),
                      textContent: aa(a.value)
                    }, null, 8, _x)
                  ]),
                  _: 1
                }),
                ot(oe(C), { shrink: "" }, {
                  default: We(() => [
                    qt("p", {
                      class: "ma-0 cx-suggestion__source-description complementary",
                      lang: s.value.sourceLanguage,
                      dir: oe(j.getDir)(s.value.sourceLanguage),
                      textContent: aa(u.value)
                    }, null, 8, vx)
                  ]),
                  _: 1
                }),
                w.value && !g.value ? (Fn(), Eo(oe(C), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: We(() => [
                    Ii(qt("small", null, null, 512), [
                      [S, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : Ao("", !0),
                g.value ? (Fn(), Eo(oe(C), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
                  shrink: ""
                }, {
                  default: We(() => [
                    Ii(qt("small", null, null, 512), [
                      [S, [l.value], "cx-sx-translation-suggestion-info"]
                    ])
                  ]),
                  _: 1
                })) : r.value ? (Fn(), Eo(oe(C), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: We(() => [
                    ot(oe(T), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: We(() => [
                        ot(oe(C), { grow: "" }, {
                          default: We(() => [
                            qt("small", {
                              textContent: aa(oe(c))
                            }, null, 8, Sx),
                            ot(oe(zi), {
                              icon: oe(PC),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            qt("small", {
                              textContent: aa(oe(d))
                            }, null, 8, yx)
                          ]),
                          _: 1
                        }),
                        l.value ? (Fn(), Eo(oe(C), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: We(() => [
                            Ii(qt("small", null, null, 512), [
                              [S, [
                                l.value
                              ], "cx-sx-translation-suggestion-info"]
                            ])
                          ]),
                          _: 1
                        })) : Ao("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : Ao("", !0)
              ]),
              _: 1
            }),
            ot(oe(C), { shrink: "" }, {
              default: We(() => [
                r.value ? Ao("", !0) : (Fn(), Eo(oe(zi), {
                  key: 0,
                  icon: oe(uo),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: _[0] || (_[0] = Ju((k) => f.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                ot(oe(zi), {
                  class: "cx-suggestion__favorite-button",
                  icon: m.value,
                  "icon-color": h.value,
                  onClick: _[1] || (_[1] = Ju((k) => f.$emit("bookmark"), ["stop"]))
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : Ao("", !0);
    };
  }
};
const Ne = window.Vue.unref, Gt = window.Vue.createVNode, xt = window.Vue.withCtx, xx = window.Vue.resolveDirective, ia = window.Vue.createElementVNode, Zu = window.Vue.withDirectives, Ri = window.Vue.toDisplayString, ed = window.Vue.createTextVNode, bx = window.Vue.vShow, td = window.Vue.renderList, nd = window.Vue.Fragment, Do = window.Vue.openBlock, Oi = window.Vue.createElementBlock, $x = window.Vue.normalizeClass, od = window.Vue.createBlock, Vx = { class: "sx-suggestions-filters" }, Ex = { class: "mb-0" }, Ax = { class: "sx-suggestions-filters__group-label mb-3" }, Dx = { class: "sx-suggestions-filters__group-filters mb-3" }, sd = window.Vue.ref, Lx = window.Vue.computed, Tx = window.Vue.inject, ad = window.Codex.CdxButton, Bx = window.Codex.CdxIcon, Px = window.Codex.CdxInfoChip, Fx = {
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
      "previous-edits": $p,
      popular: xp,
      topic: null
    }, { allFilters: s, isFilterSelected: a, selectFilter: i } = Ul(), l = () => n("update:modelValue", !1), u = () => {
      r.value && i(r.value), l();
    }, g = sd(!1), r = sd(null), c = (h) => {
      r.value = h, g.value = !0;
    }, d = (h) => r.value ? r.value.id === h.id && r.value.type === h.type : a(h), m = Tx("breakpoints"), p = Lx(() => m.value.mobile);
    return (h, w) => {
      const f = xx("i18n");
      return Do(), od(Ne(je), {
        value: e.modelValue,
        animation: "slide-up",
        fullscreen: p.value,
        header: !1,
        "overlay-opacity": 0
      }, {
        default: xt(() => [
          ia("section", Vx, [
            Gt(Ne(T), {
              class: "sx-suggestions-filters__header ma-0 py-3",
              align: "stretch",
              justify: "start"
            }, {
              default: xt(() => [
                Gt(Ne(C), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: xt(() => [
                    Gt(Ne(ad), {
                      class: "pa-0 ms-4",
                      weight: "quiet",
                      "aria-label": h.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: l
                    }, {
                      default: xt(() => [
                        Gt(Ne(Bx), { icon: Ne(uo) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                Gt(Ne(C), {
                  grow: "",
                  class: "px-4",
                  align: "center"
                }, {
                  default: xt(() => [
                    Zu(ia("h5", Ex, null, 512), [
                      [f, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                Gt(Ne(C), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: xt(() => [
                    Zu(Gt(Ne(ad), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: u
                    }, {
                      default: xt(() => [
                        ed(Ri(h.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [bx, g.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Gt(Ne(C), { class: "px-4" }, {
              default: xt(() => [
                (Do(!0), Oi(nd, null, td(Ne(s), (_) => (Do(), Oi("div", {
                  key: _.id,
                  class: "sx-suggestions-filters__group"
                }, [
                  ia("div", Ax, Ri(_.label), 1),
                  ia("div", Dx, [
                    (Do(!0), Oi(nd, null, td(_.filters, (S) => (Do(), od(Ne(Px), {
                      key: S.id,
                      class: $x(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
                        "sx-suggestions-filters__filter--active": d(S)
                      }]),
                      icon: o[S.type],
                      onClick: (k) => c(S)
                    }, {
                      default: xt(() => [
                        ed(Ri(S.label), 1)
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
const Mx = window.Vue.renderList, Nx = window.Vue.Fragment, Hi = window.Vue.openBlock, id = window.Vue.createElementBlock, rd = window.Vue.unref, Ux = window.Vue.toDisplayString, Ix = window.Vue.createTextVNode, zx = window.Vue.normalizeClass, Rx = window.Vue.withCtx, Ox = window.Vue.createBlock, Hx = window.Vue.createVNode, jx = { class: "cx-suggestion-list__filters flex px-4 pb-2" }, qx = window.Codex.CdxInfoChip, ld = window.Vue.ref, Gx = window.Vue.computed, Wx = window.Vue.watch, Xx = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = ge(), { getFiltersSummary: n, selectFilter: o, isFilterSelected: s } = Ul(), a = ld(!1), i = () => a.value = !0, l = {
      "previous-edits": $p,
      popular: xp,
      topic: null
    }, u = (c) => ({
      id: c.id,
      type: c.type,
      icon: l[c.type],
      label: c.label,
      action: o
    }), g = ld(n());
    Wx(a, (c) => {
      c || (g.value = n());
    });
    const r = Gx(() => [
      ...g.value.map(u),
      {
        id: "more",
        icon: Wl,
        label: t.i18n("cx-sx-suggestions-filter-more-label"),
        action: i
      }
    ]);
    return (c, d) => (Hi(), id("div", jx, [
      (Hi(!0), id(Nx, null, Mx(r.value, (m) => (Hi(), Ox(rd(qx), {
        key: m.label,
        class: zx(["cx-suggestion-list__filter py-1 me-1", { "cx-suggestion-list__filter--active": rd(s)(m) }]),
        icon: m.icon,
        onClick: (p) => m.action(m)
      }, {
        default: Rx(() => [
          Ix(Ux(m.label), 1)
        ]),
        _: 2
      }, 1032, ["class", "icon", "onClick"]))), 128)),
      Hx(Fx, {
        modelValue: a.value,
        "onUpdate:modelValue": d[0] || (d[0] = (m) => a.value = m)
      }, null, 8, ["modelValue"])
    ]));
  }
}, Kx = window.Vue.computed, Yx = () => {
  const { supportedLanguageCodes: e, enabledTargetLanguages: t } = Vs(), n = Kx(() => t.value || e.value);
  return {
    supportedLanguageCodes: e,
    availableTargetLanguages: n
  };
}, Lo = window.Vue.computed, cd = window.Vue.ref, Qx = window.Vue.watch, Jx = window.Vuex.useStore, Zx = () => {
  const e = Jx(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = M(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = Ol(), i = Nt(), l = Lo(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), u = Lo(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), g = Lo(
    () => !l.value && !u.value
  ), r = cd(0), c = cd(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, m = 4, p = Lo(
    () => a(r.value)
  ), h = Lo(
    () => s(c.value)
  ), w = () => {
    k(), L();
  }, {
    fetchNextSectionSuggestionsSlice: f,
    fetchNextPageSuggestionsSlice: _
  } = Hl(), S = (O) => O.length === d, k = () => {
    const O = S(
      p.value
    ), F = (r.value + 1) % m, N = S(
      a(F)
    );
    (!O || !N) && f(), O && E();
  }, L = () => {
    const O = S(
      h.value
    ), F = (c.value + 1) % m, N = S(
      s(F)
    );
    (!O || !N) && _(), O && D();
  }, B = (O) => {
    i({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", O), k();
  }, R = (O) => {
    i({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestion", O), L();
  }, E = () => r.value = (r.value + 1) % m, D = () => c.value = (c.value + 1) % m;
  return Qx(
    o,
    () => {
      c.value = 0, L(), r.value = 0, k();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: h,
    currentSectionSuggestionsSlice: p,
    discardPageSuggestion: R,
    discardSectionSuggestion: B,
    onSuggestionRefresh: w,
    pageSuggestionsLoading: u,
    sectionSuggestionsLoading: l,
    showRefreshButton: g,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: s
  };
}, e8 = window.Vuex.useStore, Zl = () => {
  const e = e8(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = Hl(), o = (g, r, c) => e.state.suggestions.pageSuggestions.find(
    (d) => d.sourceLanguage === g && d.targetLanguage === r && d.sourceTitle === c
  ), s = (g) => y(void 0, null, function* () {
    const { sourceTitle: r, sourceLanguage: c, targetLanguage: d } = g;
    yield ue.markFavorite(r, c, d);
    const m = new eo({
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
    markFavoriteSuggestion: (g, r, c) => y(void 0, null, function* () {
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
      const p = new eo({
        title: g,
        sourceLanguage: r,
        targetLanguage: c
      });
      e.commit("suggestions/addFavoriteSuggestion", p);
    }),
    removeFavoriteSuggestion: (g) => (e.commit("suggestions/removeFavoriteSuggestion", g), ue.unmarkFavorite(g))
  };
};
const ud = window.Vue.toDisplayString, ra = window.Vue.createElementVNode, Mn = window.Vue.createVNode, se = window.Vue.unref, To = window.Vue.withCtx, t8 = window.Vue.resolveDirective, ji = window.Vue.withDirectives, dd = window.Vue.renderList, gd = window.Vue.Fragment, Wt = window.Vue.openBlock, qi = window.Vue.createElementBlock, Bo = window.Vue.createBlock, Gi = window.Vue.createCommentVNode, n8 = window.Vue.createTextVNode, o8 = window.Vue.vShow, s8 = ["textContent"], a8 = { class: "cx-translation-list__division-title ma-0 pa-4" }, i8 = { class: "cx-translation-list__division-title ma-0 pa-4" }, r8 = { class: "cx-suggestion-list__refresh-button-container justify-center" }, l8 = window.Vuex.useStore, c8 = window.Vue.ref, u8 = window.Codex.CdxButton, d8 = window.Codex.CdxIcon, g8 = {
  __name: "CXSuggestionList",
  props: {
    active: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = l8(), { sourceLanguage: n, targetLanguage: o } = q(t), { supportedLanguageCodes: s, availableTargetLanguages: a } = Yx(), i = _p(), l = (D) => i(D, o.value), u = (D) => i(n.value, D), { getEventSourceForDashboardSuggestion: g } = Om(), r = Ts(), c = (D) => r(
      D.sourceTitle,
      D.sourceLanguage,
      D.targetLanguage,
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
    } = Zx(), k = c8(null), L = Nt(), B = () => {
      L({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: n.value,
        translation_target_language: o.value
      }), w(), k.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: R, markFavoritePageSuggestion: E } = Zl();
    return (D, O) => {
      const F = t8("i18n");
      return ji((Wt(), qi("div", null, [
        Mn(se(et), { class: "cx-translation-list--suggestions pa-0 mb-0" }, {
          header: To(() => [
            ra("h3", {
              class: "mw-ui-card__title pa-4 pt-5 mb-0",
              textContent: ud(D.$i18n("cx-suggestionlist-title"))
            }, null, 8, s8),
            Mn(Xx)
          ]),
          default: To(() => [
            Mn(Jl, {
              "source-languages": se(s),
              "target-languages": se(a),
              "selected-source-language": se(n),
              "selected-target-language": se(o),
              "onUpdate:selectedSourceLanguage": l,
              "onUpdate:selectedTargetLanguage": u
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])
          ]),
          _: 1
        }),
        Mn(se(et), {
          ref_key: "pageSuggestionsList",
          ref: k,
          class: "cx-translation-list--page-suggestions pa-0 mb-0"
        }, {
          default: To(() => [
            ji(ra("h5", a8, null, 512), [
              [F, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (Wt(!0), qi(gd, null, dd(se(d), (N, ne) => (Wt(), Bo($l, {
              key: `page-suggestion-${ne}`,
              suggestion: N,
              onClose: (Q) => se(p)(N),
              onClick: (Q) => c(N),
              onBookmark: (Q) => se(E)(N)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            se(f) ? (Wt(), Bo(se(tt), { key: 0 })) : Gi("", !0)
          ]),
          _: 1
        }, 512),
        Mn(se(et), { class: "cx-translation-list--sx-suggestions pa-0 mb-0" }, {
          default: To(() => [
            ji(ra("h5", i8, null, 512), [
              [F, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (Wt(!0), qi(gd, null, dd(se(m), (N, ne) => (Wt(), Bo($l, {
              key: `section-suggestion-${ne}`,
              class: "ma-0",
              suggestion: N,
              onClose: (Q) => se(h)(N),
              onClick: (Q) => c(N),
              onBookmark: (Q) => se(R)(N)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            se(_) ? (Wt(), Bo(se(tt), { key: 0 })) : Gi("", !0)
          ]),
          _: 1
        }),
        ra("div", r8, [
          se(S) ? (Wt(), Bo(se(u8), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: B
          }, {
            default: To(() => [
              Mn(se(d8), {
                class: "me-1",
                icon: se(bp)
              }, null, 8, ["icon"]),
              n8(" " + ud(D.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : Gi("", !0)
        ])
      ], 512)), [
        [o8, e.active]
      ]);
    };
  }
}, m8 = window.Vue.computed, p8 = window.Vuex.useStore, h8 = {
  name: "CxFavoriteList",
  components: {
    CxTranslationSuggestion: $l,
    MwCard: et
  },
  setup() {
    const e = p8(), t = m8(() => e.state.suggestions.favorites || []), n = Ts(), o = (a) => n(
      a.title,
      a.sourceLanguage,
      a.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: s } = Zl();
    return {
      favorites: t,
      startFavoriteTranslation: o,
      removeFavoriteSuggestion: s
    };
  }
}, w8 = window.Vue.resolveDirective, f8 = window.Vue.createElementVNode, _8 = window.Vue.withDirectives, v8 = window.Vue.renderList, S8 = window.Vue.Fragment, Wi = window.Vue.openBlock, y8 = window.Vue.createElementBlock, md = window.Vue.resolveComponent, pd = window.Vue.createBlock, hd = window.Vue.withCtx, C8 = window.Vue.createCommentVNode, k8 = { class: "mw-ui-card__title pa-4 pt-5 mb-0" };
function x8(e, t, n, o, s, a) {
  const i = md("cx-translation-suggestion"), l = md("mw-card"), u = w8("i18n");
  return o.favorites.length ? (Wi(), pd(l, {
    key: 0,
    class: "cx-translation-list--favorites pa-0 mb-4"
  }, {
    header: hd(() => [
      _8(f8("h3", k8, null, 512), [
        [u, void 0, "cx-suggestion-list-favorites-division"]
      ])
    ]),
    default: hd(() => [
      (Wi(!0), y8(S8, null, v8(o.favorites, (g, r) => (Wi(), pd(i, {
        key: `favorite-${r}`,
        suggestion: g,
        onClick: (c) => o.startFavoriteTranslation(g),
        onBookmark: (c) => o.removeFavoriteSuggestion(g)
      }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
    ]),
    _: 1
  })) : C8("", !0);
}
const b8 = /* @__PURE__ */ P(h8, [["render", x8]]);
const $8 = {
  name: "CxHelpPanel",
  components: { MwIcon: be },
  setup() {
    const e = ge();
    return { listItems: [
      {
        icon: tf,
        label: e.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation"
      },
      {
        icon: Uw,
        label: e.i18n("cx-sx-dashboard-help-panel-stats-label"),
        href: mw.util.getUrl("Special:ContentTranslationStats")
      },
      {
        icon: nf,
        label: e.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation"
      }
    ] };
  }
}, V8 = window.Vue.resolveDirective, la = window.Vue.createElementVNode, E8 = window.Vue.withDirectives, A8 = window.Vue.renderList, D8 = window.Vue.Fragment, Xi = window.Vue.openBlock, Ki = window.Vue.createElementBlock, L8 = window.Vue.resolveComponent, T8 = window.Vue.createVNode, B8 = window.Vue.toDisplayString, P8 = { class: "cx-help-panel pa-4" }, F8 = { class: "cx-help-panel__item-list mt-6 ps-2" }, M8 = ["href"], N8 = ["textContent"];
function U8(e, t, n, o, s, a) {
  const i = L8("mw-icon"), l = V8("i18n");
  return Xi(), Ki("div", P8, [
    E8(la("h5", null, null, 512), [
      [l, void 0, "cx-sx-dashboard-help-panel-title"]
    ]),
    la("ul", F8, [
      (Xi(!0), Ki(D8, null, A8(o.listItems, (u, g) => (Xi(), Ki("li", {
        key: g,
        class: "mt-4"
      }, [
        la("a", {
          href: u.href,
          target: "_blank"
        }, [
          T8(i, {
            class: "me-2",
            icon: u.icon
          }, null, 8, ["icon"]),
          la("span", {
            textContent: B8(u.label)
          }, null, 8, N8)
        ], 8, M8)
      ]))), 128))
    ])
  ]);
}
const I8 = /* @__PURE__ */ P($8, [["render", U8]]);
const z8 = window.Vue.ref, wd = window.Vue.computed, R8 = window.Vue.watch, O8 = {
  name: "CxStatsPanel",
  components: { MwCol: C, MwRow: T },
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", n = wd(() => {
      var a, i;
      return ((i = (a = e.stats) == null ? void 0 : a[t]) == null ? void 0 : i.count) || 0;
    }), o = wd(
      () => {
        var a, i;
        return ((i = (a = e.stats) == null ? void 0 : a[t]) == null ? void 0 : i.delta) || 0;
      }
    ), s = z8(null);
    return R8(
      () => e.stats,
      () => {
        const a = e.stats, i = s.value.getContext("2d"), l = Object.keys(e.stats || {}).sort(), u = l.reduce(
          (S, k) => Math.max(S, a[k].delta),
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
        _.forEach((S, k) => {
          k === _.length - 1 && (i.fillStyle = "#36c");
          const L = p - S * h;
          i.fillRect(w, L, m, S * h), w += m + d;
        });
      }
    ), { canvasRef: s, thisMonthStats: o, total: n };
  }
}, H8 = window.Vue.resolveDirective, Nn = window.Vue.createElementVNode, Yi = window.Vue.withDirectives, fd = window.Vue.toDisplayString, _d = window.Vue.resolveComponent, Qi = window.Vue.withCtx, Ji = window.Vue.createVNode, j8 = window.Vue.openBlock, q8 = window.Vue.createElementBlock, G8 = { class: "cx-stats-panel pa-4" }, W8 = ["textContent"], X8 = { class: "cx-stats-panel__monthly-stats-label" }, K8 = ["textContent"], Y8 = { class: "cx-stats-panel__total-stats-label" }, Q8 = {
  ref: "canvasRef",
  class: "cx-stats-panel__canvas"
};
function J8(e, t, n, o, s, a) {
  const i = _d("mw-col"), l = _d("mw-row"), u = H8("i18n");
  return j8(), q8("div", G8, [
    Yi(Nn("h5", null, null, 512), [
      [u, void 0, "cx-sx-dashboard-stats-panel-title"]
    ]),
    Ji(l, null, {
      default: Qi(() => [
        Ji(i, { class: "cx-stats-panel__monthly-stats" }, {
          default: Qi(() => [
            Nn("h3", {
              textContent: fd(o.thisMonthStats)
            }, null, 8, W8),
            Yi(Nn("h5", X8, null, 512), [
              [u, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
            ])
          ]),
          _: 1
        }),
        Ji(i, { class: "cx-stats-panel__total-stats" }, {
          default: Qi(() => [
            Nn("h3", {
              textContent: fd(o.total)
            }, null, 8, K8),
            Yi(Nn("h5", Y8, null, 512), [
              [u, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    Nn("canvas", Q8, null, 512)
  ]);
}
const Z8 = /* @__PURE__ */ P(O8, [["render", J8]]), { getUrlParam: eb } = M(), Bp = () => {
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
  }, t = eb("campaign");
  return e[t];
}, tb = () => {
  const e = Ts(), t = Nt(), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o,
    pageURLParameter: s
  } = M();
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
}, nb = window.Vuex.useStore, Qa = () => {
  const e = nb(), t = (o) => y(void 0, null, function* () {
    let s = yield He.fetchTranslations(o);
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
          new ro({ title: r, pagelanguage: g })
        );
      });
  });
  return { fetchTranslationsByStatus: t, fetchAllTranslations: () => e.state.translator.translations.length ? Promise.resolve() : Promise.all([
    t("published"),
    t("draft")
  ]).catch((o) => {
    mw.log.error("[CX] Error while fetching translations", o);
  }) };
}, ob = window.Vuex.useStore, sb = () => {
  const e = ob();
  return () => y(void 0, null, function* () {
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
}, ab = window.Vuex.useStore, ib = () => {
  const e = Nt(), t = ab(), n = tb(), { fetchAllTranslations: o } = Qa(), s = jl(), a = sb(), { pageURLParameter: i, sectionURLParameter: l, draftURLParameter: u } = M();
  return () => y(void 0, null, function* () {
    if (yield fp()(), i.value) {
      n({
        pageTitle: i.value,
        isDraftTranslation: u.value,
        sectionTitle: l.value
      });
      return;
    }
    const { sourceLanguage: r, targetLanguage: c, previousRoute: d } = q(t);
    e({
      event_type: "dashboard_open",
      event_source: (() => {
        const h = {
          "sx-article-search": "return_from_search",
          "sx-translation-confirmer": "return_from_confirmation",
          "sx-section-selector": "return_from_section_selection",
          "sx-sentence-selector": "editor_close"
        }[d.value];
        return h || Bp() || "direct";
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
}, vd = window.Vue.computed, rb = window.Vue.ref, lb = window.Vue.watch, cb = window.Vue.watchEffect, ub = window.Vuex.useStore, db = ["suggestions", "draft", "published"], gb = () => {
  const e = ub(), { getUrlParam: t, setUrlParam: n } = M(), o = t("active-list"), s = rb(null);
  if (db.includes(o))
    s.value = o;
  else {
    const a = vd(
      () => e.state.translator.translationsLoaded.draft
    ), i = vd(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = i.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", lb(a, (l) => {
      l && (s.value = i.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return cb(() => {
    n("active-list", s.value), window.scrollTo(0, 0);
  }), s;
}, mb = window.Vue.computed, pb = () => {
  const e = ge();
  return mb(() => [
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
        icon: qa,
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
const ie = window.Vue.unref, he = window.Vue.createVNode, hb = window.Vue.toDisplayString, wb = window.Vue.createTextVNode, bt = window.Vue.withCtx, Zi = window.Vue.openBlock, Sd = window.Vue.createBlock, yd = window.Vue.createCommentVNode, fb = window.Vue.isRef, _b = window.Vue.createElementBlock, vb = window.Vue.computed, Sb = window.Vuex.useStore, yb = window.Codex.CdxButton, Cb = window.Codex.CdxIcon, kb = {
  __name: "CXDashboard",
  setup(e) {
    const t = me(), n = () => t.push({ name: "sx-article-search" });
    ib()();
    const s = Sb();
    s.dispatch("translator/fetchTranslatorStats");
    const a = vb(() => s.state.translator.translatorStats), i = gb(), l = pb();
    return (u, g) => (Zi(), _b("div", null, [
      he(ie(T), { class: "ma-0 py-4" }, {
        default: bt(() => [
          he(ie(yb), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: n
          }, {
            default: bt(() => [
              he(ie(Cb), {
                class: "me-1",
                icon: ie(xl)
              }, null, 8, ["icon"]),
              wb(" " + hb(u.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      he(ie(T), {
        class: "ma-0",
        align: "start"
      }, {
        default: bt(() => [
          u.$mwui.breakpoint.tabletAndUp ? (Zi(), Sd(ie(C), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: bt(() => [
              he(ie(_s), {
                id: "dashboard-list-selector--desktop",
                items: ie(l),
                active: ie(i),
                onSelect: g[0] || (g[0] = (r) => i.value = r)
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : yd("", !0),
          he(ie(C), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: bt(() => [
              he(b8),
              he(g8, {
                active: ie(i) === "suggestions"
              }, null, 8, ["active"]),
              he(Yu, {
                "translation-status": "draft",
                "active-status": ie(i)
              }, null, 8, ["active-status"]),
              he(Yu, {
                "translation-status": "published",
                "active-status": ie(i)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          he(ie(C), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: bt(() => [
              he(ie(T), {
                class: "ma-0",
                align: "start"
              }, {
                default: bt(() => [
                  he(ie(C), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: bt(() => [
                      he(Z8, { stats: a.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  he(ie(C), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: bt(() => [
                      he(I8)
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
      u.$mwui.breakpoint.mobile ? (Zi(), Sd(ie(Qh), {
        key: 0,
        active: ie(i),
        "onUpdate:active": g[1] || (g[1] = (r) => fb(i) ? i.value = r : null),
        items: ie(l)
      }, null, 8, ["active", "items"])) : yd("", !0)
    ]));
  }
}, xb = {
  name: "DashboardView",
  components: { CxDashboard: kb }
}, bb = window.Vue.resolveComponent, $b = window.Vue.createVNode, Vb = window.Vue.openBlock, Eb = window.Vue.createElementBlock, Ab = { class: "cx-translation-dashboard" };
function Db(e, t, n, o, s, a) {
  const i = bb("cx-dashboard");
  return Vb(), Eb("main", Ab, [
    $b(i, { class: "mb-4 pb-12" })
  ]);
}
const Cd = /* @__PURE__ */ P(xb, [["render", Db]]), Un = window.Vue.computed, Lb = () => {
  const { sectionSuggestion: e } = Te(), { targetLanguageURLParameter: t } = M(), { currentTranslation: n } = cn(), o = Un(
    () => {
      var d, m, p;
      return (p = (m = (d = e.value) == null ? void 0 : d.orderedMissingSections) == null ? void 0 : m[0]) == null ? void 0 : p.sourceTitle;
    }
  ), s = Un(
    () => {
      var d;
      return (d = e.value) == null ? void 0 : d.missingSectionsCount;
    }
  ), a = Un(
    () => {
      var d;
      return (d = e.value) == null ? void 0 : d.presentSectionsCount;
    }
  ), { targetPageExists: i, getCurrentTitleByLanguage: l } = Mt(), u = Un(() => i ? G.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    l(t.value, null)
  ) : null), g = (d) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : d ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : i.value ? s.value > 1 || s.value === 1 && a.value > 0 ? "cx-sx-select-section" : s.value === 1 && a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : s.value === 0 && a.value > 0 ? "cx-sx-select-section" : s.value === 0 && a.value === 0 ? "cx-sx-translation-confirmer-action-new-translation" : "" : "cx-sx-start-translation-button-label", r = Un(() => {
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
  }), c = Un(
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
}, Pp = () => new URLSearchParams(location.search).get("force-quick-tutorial");
function Tb(e) {
  return e.$el = $(e), e;
}
function Bb(e, t, n, o) {
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
function Pb() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function Fb(e, t) {
  return y(this, null, function* () {
    yield ec(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = Tb(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const Mb = window.Vue.computed, Nb = window.Vue.onMounted, Ub = window.Vue.ref;
function Ib(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const zb = {
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
    const n = Ub(null);
    let o = null;
    const s = Mb(() => o.getHtml()), a = () => {
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
    return Nb(() => y(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = Ib;
      const r = yield Fb(u, n.value);
      t.emit("ready"), n.value.appendChild(r.$element[0]), o = Bb(
        r,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = Pb, o.focus();
    })), { sxeditor: n };
  }
}, Vl = window.Vue.createElementVNode, Rb = window.Vue.openBlock, Ob = window.Vue.createElementBlock, Hb = ["lang", "dir"], jb = /* @__PURE__ */ Vl("div", { class: "overlay-header header initial-header" }, [
  /* @__PURE__ */ Vl("div", { class: "toolbar" })
], -1), qb = ["lang", "dir"];
function Gb(e, t, n, o, s, a) {
  return Rb(), Ob("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    jb,
    Vl("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, qb)
  ], 8, Hb);
}
const Wb = /* @__PURE__ */ P(zb, [["render", Gb]]);
function ec() {
  return mw.loader.using("mw.cx3.ve");
}
const Xb = window.Vuex.useStore, Fp = () => {
  const e = Xb();
  return (t, n) => y(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield ec(), new Promise((s) => {
      setTimeout(() => {
        const a = Nm.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, Kb = window.Vuex.useStore, tc = () => {
  const e = Kb();
  return (t, n, o, s = null) => y(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      o
    );
    if (a && a.content)
      return;
    const i = yield lo.fetchPageContent(
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
}, Yb = window.Vuex.useStore, nc = () => {
  const e = Yb(), { currentSourcePage: t } = qe(), n = Fp(), o = tc(), {
    setSectionURLParam: s,
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: i,
    pageURLParameter: l
  } = M(), u = (c, d) => y(void 0, null, function* () {
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
}, oc = () => (e, t, n, o = {}) => {
  G.setCXToken(e, t, n), location.href = G.getCXUrl(
    n,
    null,
    e,
    t,
    o
  );
}, Qb = (e, t, n, o) => y(void 0, null, function* () {
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
}), Jb = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, i;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const l = (i = t.mt) == null ? void 0 : i.engine;
      o.addProposedTranslation(l, n.mt.innerHTML), o.mtProviderUsed = l;
    }
  });
}, Zb = (e, t, n, o) => y(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return Qb(e, t, n, o);
  Jb(e, t);
}), e2 = (e, t, n, o) => {
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
        const g = Zb(
          l,
          u,
          t || e.title,
          n
        );
        s.push(g);
      }
  return Promise.all(s);
}, t2 = { restoreCorporaDraft: e2 }, Po = window.Vue.computed, n2 = window.Vuex.useStore, K = () => {
  const e = n2(), { currentSourcePage: t, currentTargetPage: n } = qe(), { currentMTProvider: o } = q(e), { sectionURLParameter: s } = M(), a = Po(() => {
    var r, c;
    return s.value ? (c = t.value) == null ? void 0 : c.getSectionByTitle(s.value) : (r = t.value) == null ? void 0 : r.leadSection;
  }), i = Po(
    () => {
      var r;
      return (r = a.value) == null ? void 0 : r.isTitleSelected;
    }
  ), l = Po(
    () => {
      var r;
      return (r = a.value) == null ? void 0 : r.selectedContentTranslationUnit;
    }
  ), u = Po(
    () => {
      var r;
      return (r = a.value) == null ? void 0 : r.getProposedTranslationByMtProvider(
        o.value
      );
    }
  ), g = Po(() => a.value.isLeadSection ? a.value.title : n.value.title);
  return {
    sourceSection: a,
    isSectionTitleSelected: i,
    selectedContentTranslationUnit: l,
    currentProposedTranslation: u,
    targetPageTitleForPublishing: g
  };
}, o2 = window.Vuex.useStore, sc = () => {
  const e = Nt(), t = o2(), n = me(), { currentSourcePage: o } = qe(), { sourceLanguage: s, targetLanguage: a } = q(t), i = Zy(), l = Fp(), { isDesktop: u } = $s(), g = oc(), r = tc(), { sourceSection: c } = K();
  return (d) => y(void 0, null, function* () {
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
      const L = {};
      _ || (L.sourcesection = d.sourceSectionTitle), g(
        s.value,
        a.value,
        h,
        L
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
      translation_target_title: d.targetTitle,
      translation_target_section: d.targetSectionTitle
    }), yield r(
      s.value,
      a.value,
      h,
      f
    ), yield l(s.value, h), d.restored || (yield He.fetchTranslationUnits(d.translationId).then(
      (L) => t2.restoreCorporaDraft(
        o.value,
        w,
        a,
        L
      )
    ).then(() => d.restored = !0));
    let k;
    d.isLeadSectionTranslation ? (c.value.originalTitle = d.sourceTitle, k = d.targetTitle) : k = d.targetSectionTitle, c.value.translatedTitle = k, t.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, s2 = window.Vue.ref, a2 = window.Vuex.useStore, i2 = () => {
  const e = me(), t = a2(), { isDesktop: n } = $s(), { logDashboardTranslationStartEvent: o } = Yl(), {
    pageURLParameter: s,
    sectionURLParameter: a
  } = M(), { sourceLanguage: i, targetLanguage: l } = q(t), { targetPageExists: u } = Mt(), { selectPageSectionByIndex: g, selectPageSectionByTitle: r } = nc(), c = oc(), d = () => y(void 0, null, function* () {
    n.value ? (o(), c(
      i.value,
      l.value,
      s.value,
      { sourcesection: a.value }
    )) : (yield r(a.value), e.push({ name: "sx-content-comparator", query: { force: !0 } }));
  }), m = sc(), p = s2(!1), { currentTranslation: h } = cn(), w = () => {
    h.value ? h.value.isArticleTranslation ? p.value = !0 : m(h.value) : a.value ? d() : u.value ? e.push({ name: "sx-section-selector" }) : f();
  }, f = () => y(void 0, null, function* () {
    o(), n.value ? c(
      i.value,
      l.value,
      s.value
    ) : (g(0), Pp() || !t.getters["translator/userHasSectionTranslations"] ? e.push({ name: "sx-quick-tutorial", query: { force: !0 } }) : e.push({ name: "sx-sentence-selector", query: { force: !0 } }));
  });
  return {
    startNewTranslation: f,
    handlePrimaryButtonClick: w,
    translationConfirmationDialogOn: p
  };
};
const r2 = window.Vue.resolveDirective, kd = window.Vue.createElementVNode, xd = window.Vue.withDirectives, l2 = window.Vue.unref, c2 = window.Vue.withCtx, u2 = window.Vue.openBlock, d2 = window.Vue.createBlock, g2 = {
  href: "",
  target: "_blank"
}, m2 = window.Codex.CdxDialog, p2 = {
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
    const n = e, o = t, s = (g) => o("update:modelValue", g), a = ge(), i = {
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
      const c = r2("i18n");
      return u2(), d2(l2(m2), {
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
        default: c2(() => [
          xd(kd("p", null, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          xd(kd("a", g2, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title", "close-button-label"]);
    };
  }
};
const te = window.Vue.unref, h2 = window.Vue.resolveDirective, Fo = window.Vue.createElementVNode, bd = window.Vue.withDirectives, Mo = window.Vue.toDisplayString, No = window.Vue.openBlock, er = window.Vue.createElementBlock, tr = window.Vue.createCommentVNode, Ue = window.Vue.createVNode, Xe = window.Vue.withCtx, nr = window.Vue.createTextVNode, w2 = window.Vue.withModifiers, $d = window.Vue.createBlock, f2 = window.Vue.Fragment, _2 = { class: "sx-translation-confirmer-body pb-4" }, v2 = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, S2 = ["textContent"], y2 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, C2 = ["href"], k2 = ["textContent"], or = window.Vue.computed, x2 = window.Vue.inject, Vd = window.Vue.ref, b2 = window.Vue.watchEffect, $2 = window.Vuex.useStore, sr = window.Codex.CdxButton, V2 = window.Codex.CdxIcon, E2 = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = me(), o = $2();
    x2("colors");
    const { sectionSuggestion: s } = Te(), { targetLanguageAutonym: a } = q(o), { sectionURLParameter: i } = M(), {
      startNewTranslation: l,
      handlePrimaryButtonClick: u,
      translationConfirmationDialogOn: g
    } = i2(), r = Vd(!1), c = Vd(null), d = () => y(this, null, function* () {
      const F = yield He.checkUnreviewedTranslations();
      F !== !0 && (r.value = !0, c.value = F.targetUrl);
    }), m = () => y(this, null, function* () {
      yield d(), !r.value && l();
    }), p = () => y(this, null, function* () {
      yield d(), !r.value && u();
    }), h = t;
    b2(() => {
      g.value && (h("open-translation-confirmation-dialog"), g.value = !1);
    });
    const {
      actionInformationMessageArgs: w,
      getActionButtonLabel: f,
      isProgressiveButton: _,
      targetArticlePath: S
    } = Lb(), k = ge(), L = or(
      () => k.i18n(f(!!i.value))
    ), { isDesktop: B } = $s(), R = or(
      () => k.i18n(...w.value)
    ), E = () => y(this, null, function* () {
      yield d(), !r.value && n.push({ name: "sx-section-selector" });
    }), D = or(() => {
      var F, N;
      return i.value && !!((N = (F = s.value) == null ? void 0 : F.sourceSections) != null && N.length);
    }), { targetPageExists: O } = Mt();
    return (F, N) => {
      const ne = h2("i18n");
      return No(), er(f2, null, [
        Fo("section", _2, [
          te(i) ? (No(), er("section", v2, [
            bd(Fo("h6", null, null, 512), [
              [ne, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            Fo("h5", {
              class: "ma-0",
              textContent: Mo(te(i))
            }, null, 8, S2)
          ])) : te(O) ? (No(), er("section", y2, [
            Ue(te(T), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: Xe(() => [
                bd(Ue(te(C), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [ne, [te(a)], "cx-sx-existing-translation-status"]
                ]),
                Ue(te(C), { shrink: "" }, {
                  default: Xe(() => [
                    Fo("a", {
                      href: te(S),
                      target: "_blank"
                    }, [
                      Ue(te(V2), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: te(Xl)
                      }, null, 8, ["icon"])
                    ], 8, C2)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Ue(te(T), { class: "ma-0" }, {
              default: Xe(() => [
                Ue(te(C), null, {
                  default: Xe(() => [
                    Fo("span", {
                      textContent: Mo(R.value)
                    }, null, 8, k2)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : tr("", !0),
          Ue(te(T), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: Xe(() => [
              D.value ? (No(), $d(te(C), {
                key: 0,
                shrink: "",
                class: "me-4"
              }, {
                default: Xe(() => [
                  Ue(te(sr), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: w2(E, ["stop"])
                  }, {
                    default: Xe(() => [
                      nr(Mo(F.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })) : tr("", !0),
              te(O) && te(B) ? (No(), $d(te(C), {
                key: 1,
                shrink: "",
                class: "me-4"
              }, {
                default: Xe(() => [
                  Ue(te(sr), {
                    size: "large",
                    onClick: m
                  }, {
                    default: Xe(() => [
                      nr(Mo(F.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : tr("", !0),
              Ue(te(C), { shrink: "" }, {
                default: Xe(() => [
                  Ue(te(sr), {
                    weight: "primary",
                    size: "large",
                    action: te(_) ? "progressive" : "default",
                    onClick: p
                  }, {
                    default: Xe(() => [
                      nr(Mo(L.value), 1)
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
        Ue(p2, {
          modelValue: r.value,
          "onUpdate:modelValue": N[0] || (N[0] = (Q) => r.value = Q),
          "target-url": c.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const Ed = window.Vue.unref, A2 = window.Vue.openBlock, D2 = window.Vue.createBlock, Ad = window.Vue.computed, L2 = window.Vuex.useStore, Mp = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedLanguageCodes: t, enabledTargetLanguages: n } = Vs();
    L2();
    const {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: s
    } = M(), { currentLanguageTitleGroup: a } = Mt(), i = Ad(
      () => {
        var c;
        return ((c = a.value) == null ? void 0 : c.titles.map((d) => d.lang)) || [];
      }
    ), l = Ad(
      () => n.value || t.value
    ), u = tC(), g = (c) => u(c, s.value), r = (c) => u(o.value, c);
    return (c, d) => (A2(), D2(Jl, {
      class: "sx-article-language-selector",
      "source-languages": i.value,
      "target-languages": l.value,
      "selected-source-language": Ed(o),
      "selected-target-language": Ed(s),
      "onUpdate:selectedSourceLanguage": g,
      "onUpdate:selectedTargetLanguage": r
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
};
const we = window.Vue.unref, ar = window.Vue.toDisplayString, $t = window.Vue.createElementVNode, at = window.Vue.createVNode, In = window.Vue.withCtx, T2 = window.Vue.resolveDirective, B2 = window.Vue.withDirectives, P2 = window.Vue.normalizeClass, F2 = window.Vue.openBlock, M2 = window.Vue.createBlock, N2 = ["textContent"], U2 = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, I2 = ["textContent"], z2 = { class: "pe-3" }, R2 = ["textContent"], O2 = window.Codex.CdxButton, Uo = window.Codex.CdxIcon, Vt = window.Vue.computed, H2 = window.Vuex.useStore, j2 = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = H2(), n = ge(), { currentSourcePage: o } = qe(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: i
    } = M(), l = Vt(() => t.state.suggestions.favorites || []), u = Vt(
      () => l.value.some(
        (B) => i.value === B.title && s.value === B.sourceLanguage && a.value === B.targetLanguage
      )
    ), { markFavoriteSuggestion: g, removeFavoriteSuggestion: r } = Zl(), { translationSizeMessageArgs: c } = Tp(), d = () => g(
      i.value,
      s.value,
      a.value
    ), m = () => r(
      new eo({
        title: i.value,
        sourceLanguage: s.value,
        targetLanguage: a.value
      })
    ), p = Vt(
      () => u.value ? Cp : kp
    ), h = Vt(
      () => u.value ? m : d
    ), w = Vt(
      () => G.getPageUrl(s.value || "", i.value || "")
    ), f = Vt(() => {
      var B;
      return (B = o.value) == null ? void 0 : B.langLinksCount;
    }), _ = (B) => {
      const R = [
        { value: 1e9, suffix: "B" },
        // 1 billion
        { value: 1e6, suffix: "M" },
        // 1 million
        { value: 1e3, suffix: "K" }
        // 1 thousand
      ];
      for (let E = 0; E < R.length; E++)
        if (B >= R[E].value)
          return (B / R[E].value).toFixed(1).replace(/\.0$/, "") + R[E].suffix;
      return B.toString();
    }, S = Vt(() => {
      var R;
      const B = Object.values(((R = o.value) == null ? void 0 : R.pageviews) || {}).reduce(
        (E, D) => E + D,
        0
      );
      return _(B);
    }), k = Vt(() => c.value ? n.i18n(...c.value) : ""), L = Vt(() => c.value ? c.value[2] < 15 : !1);
    return (B, R) => {
      const E = T2("i18n");
      return F2(), M2(we(T), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: In(() => [
          at(we(C), null, {
            default: In(() => [
              at(we(T), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: In(() => [
                  at(we(C), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: w.value,
                    target: "_blank"
                  }, {
                    default: In(() => [
                      $t("h5", {
                        class: "ma-0 me-1",
                        textContent: ar(we(i))
                      }, null, 8, N2),
                      at(we(Uo), {
                        size: "x-small",
                        icon: we(Xl)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  at(we(C), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: In(() => [
                      at(we(O2), {
                        class: "px-0",
                        weight: "quiet",
                        action: u.value ? "progressive" : "default",
                        onClick: h.value
                      }, {
                        default: In(() => [
                          at(we(Uo), { icon: p.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              $t("div", U2, [
                $t("div", null, [
                  $t("span", null, [
                    at(we(Uo), {
                      icon: we(RC),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    $t("span", {
                      class: "pe-3",
                      textContent: ar(f.value)
                    }, null, 8, I2)
                  ]),
                  $t("span", null, [
                    at(we(Uo), {
                      icon: we(MC),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    B2($t("span", z2, null, 512), [
                      [E, [S.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                $t("span", {
                  class: P2(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": L.value
                  }])
                }, [
                  at(we(Uo), {
                    icon: we(UC),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  $t("span", {
                    textContent: ar(k.value)
                  }, null, 8, R2)
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
}, q2 = window.Vuex.useStore, G2 = () => {
  const e = q2();
  return (t, n) => {
    if (!e.getters["mediawiki/getLanguageTitleGroup"](t, n))
      return lo.fetchLanguageTitles(t, n).then(
        (o) => o && e.commit("mediawiki/addLanguageTitleGroup", o)
      );
  };
};
const W2 = window.Vue.resolveDirective, wn = window.Vue.createElementVNode, ca = window.Vue.withDirectives, X2 = window.Vue.toDisplayString, K2 = window.Vue.createTextVNode, ir = window.Vue.unref, rr = window.Vue.withCtx, lr = window.Vue.openBlock, cr = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Y2 = { class: "pa-4" }, Q2 = { class: "flex pt-2" }, J2 = window.Codex.CdxButton, Z2 = window.Vue.ref, e4 = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = sc(), a = Z2(!1), { currentTranslation: i } = cn(), l = () => y(this, null, function* () {
      a.value = !0;
      let u = !1;
      try {
        u = yield He.splitTranslation(
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
      const r = W2("i18n");
      return lr(), cr(ir(je), {
        value: e.modelValue,
        persistent: a.value,
        class: "sx-confirm-translation-start-dialog",
        "overlay-opacity": 0.7,
        "overlay-color": u.$mwui.colors.gray700,
        "min-height": "unset",
        title: u.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: rr(() => [
          wn("div", Q2, [
            a.value ? (lr(), cr(ir(tt), { key: 1 })) : (lr(), cr(ir(J2), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: l
            }, {
              default: rr(() => [
                K2(X2(u.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: rr(() => [
          wn("div", Y2, [
            ca(wn("p", null, null, 512), [
              [r, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            ca(wn("p", null, null, 512), [
              [r, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            wn("p", null, [
              ca(wn("strong", null, null, 512), [
                [r, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            ca(wn("p", null, null, 512), [
              [r, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "overlay-color", "title"]);
    };
  }
};
const Dd = window.Vue.resolveDirective, ua = window.Vue.createElementVNode, Ld = window.Vue.withDirectives, Xt = window.Vue.unref, da = window.Vue.withCtx, Et = window.Vue.createVNode, ur = window.Vue.openBlock, Td = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const t4 = window.Vue.createBlock, n4 = { class: "sx-translation-confirmer" }, o4 = { class: "mb-0" }, s4 = { class: "sx-translation-confirmer__article-image flex justify-center" }, a4 = ["src"], i4 = { class: "ma-3" }, r4 = window.Vue.computed, l4 = window.Vue.ref, c4 = window.Vuex.useStore, u4 = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = c4(), { currentSourcePage: n } = qe(), { previousRoute: o } = q(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: i,
      sectionURLParameter: l,
      clearURLParameters: u
    } = M(), g = r4(
      () => {
        var w, f;
        return (f = (w = n.value) == null ? void 0 : w.image) == null ? void 0 : f.source;
      }
    ), { fetchTranslationsByStatus: r } = Qa(), c = G2(), d = ql();
    r("draft"), l.value && d(
      s.value,
      a.value,
      i.value
    ), c(s.value, i.value), ec(), t.dispatch("suggestions/fetchAppendixSectionTitles", a.value);
    const m = me(), p = () => {
      u(), m.push({ name: o.value });
    }, h = l4(!1);
    return (w, f) => {
      const _ = Dd("i18n"), S = Dd("i18n-html");
      return ur(), Td("section", n4, [
        Et(Xt(T), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: da(() => [
            Et(Xt(C), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: da(() => [
                Ld(ua("h5", o4, null, 512), [
                  [_, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            Et(Xt(C), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: da(() => [
                Et(Xt(De), {
                  class: "pa-0",
                  type: "icon",
                  icon: Xt(so),
                  "icon-size": 20,
                  onClick: p
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        ua("div", s4, [
          g.value ? (ur(), Td("img", {
            key: 0,
            src: g.value
          }, null, 8, a4)) : (ur(), t4(Xt(be), {
            key: 1,
            size: "120",
            icon: Xt(Dl),
            "icon-color": w.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        Et(j2),
        Et(Mp),
        Et(E2, {
          onOpenTranslationConfirmationDialog: f[0] || (f[0] = (k) => h.value = !0)
        }),
        Et(Xt(T), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: da(() => [
            ua("p", i4, [
              Ld(ua("small", null, null, 512), [
                [S, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        Et(e4, {
          modelValue: h.value,
          "onUpdate:modelValue": f[1] || (f[1] = (k) => h.value = k)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const d4 = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: u4
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, g4 = window.Vue.resolveComponent, m4 = window.Vue.createVNode, p4 = window.Vue.normalizeClass, h4 = window.Vue.openBlock, w4 = window.Vue.createElementBlock;
function f4(e, t, n, o, s, a) {
  const i = g4("sx-translation-confirmer");
  return h4(), w4("main", {
    class: p4(["sx-translation-confirmer-view", a.classes])
  }, [
    m4(i)
  ], 2);
}
const _4 = /* @__PURE__ */ P(d4, [["render", f4]]);
const v4 = window.Vue.toDisplayString, Bd = window.Vue.unref, S4 = window.Vue.createVNode, y4 = window.Vue.createTextVNode, C4 = window.Vue.createElementVNode, k4 = window.Vue.openBlock, x4 = window.Vue.createElementBlock, b4 = { class: "sx-section-selector-view-article-item ma-0" }, $4 = ["href"], V4 = window.Codex.CdxIcon, E4 = {
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
    return (t, n) => (k4(), x4("li", b4, [
      C4("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        y4(v4(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        S4(Bd(V4), {
          size: "x-small",
          icon: Bd(Xl)
        }, null, 8, ["icon"])
      ], 8, $4)
    ]));
  }
};
const A4 = window.Vue.resolveDirective, ga = window.Vue.createElementVNode, dr = window.Vue.withDirectives, fn = window.Vue.unref, D4 = window.Vue.toDisplayString, ma = window.Vue.withCtx, Io = window.Vue.createVNode, L4 = window.Vue.openBlock, T4 = window.Vue.createElementBlock, B4 = { class: "sx-section-selector__header pa-4" }, P4 = { class: "sx-section-selector__header-text ma-0" }, F4 = ["textContent"], M4 = { class: "pt-0 ma-0" }, N4 = { class: "ma-0" }, U4 = window.Codex.CdxButton, I4 = window.Codex.CdxIcon, z4 = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = Te();
    return (n, o) => {
      const s = A4("i18n");
      return L4(), T4("div", B4, [
        Io(fn(T), { class: "ma-0 pb-3" }, {
          default: ma(() => [
            Io(fn(C), null, {
              default: ma(() => {
                var a;
                return [
                  dr(ga("h6", P4, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  ga("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: D4((a = fn(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, F4)
                ];
              }),
              _: 1
            }),
            Io(fn(C), {
              shrink: "",
              class: "justify-end"
            }, {
              default: ma(() => [
                Io(fn(U4), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: ma(() => [
                    Io(fn(I4), { icon: fn(uo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        dr(ga("h4", M4, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        dr(ga("p", N4, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, R4 = window.Vue.renderList, O4 = window.Vue.Fragment, gr = window.Vue.openBlock, Pd = window.Vue.createElementBlock, H4 = window.Vue.renderSlot, pa = window.Vue.unref, Fd = window.Vue.createVNode, Md = window.Vue.withCtx, j4 = window.Vue.createBlock, q4 = { class: "sx-section-selector__sections-list ma-0 pa-0" }, G4 = window.Codex.CdxButton, W4 = window.Codex.CdxIcon, Np = {
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
    return (t, n) => (gr(), Pd("ul", q4, [
      (gr(!0), Pd(O4, null, R4(e.sections, (o) => (gr(), j4(pa(T), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: Md(() => [
          Fd(pa(G4), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: Md(() => [
              H4(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              Fd(pa(W4), { icon: pa(Ls) }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, X4 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const K4 = window.Vue.resolveDirective, ha = window.Vue.createElementVNode, mr = window.Vue.withDirectives, Ke = window.Vue.unref, Nd = window.Vue.toDisplayString, zn = window.Vue.withCtx, pr = window.Vue.openBlock, Ud = window.Vue.createBlock;
window.Vue.createCommentVNode;
const zo = window.Vue.createVNode, Y4 = window.Vue.createTextVNode, Q4 = window.Vue.createElementBlock, J4 = { class: "sx-section-selector__missing-sections py-2" }, Z4 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, e$ = ["lang", "dir", "textContent"], Id = window.Vue.computed, t$ = window.Codex.CdxButton, n$ = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = Te(), n = Id(
      () => {
        var s;
        return j.getAutonym((s = t.value) == null ? void 0 : s.targetLanguage);
      }
    ), o = Id(
      () => {
        var s;
        return Object.keys(((s = t.value) == null ? void 0 : s.missingSections) || {}).length === 0;
      }
    );
    return (s, a) => {
      const i = K4("i18n");
      return pr(), Q4("section", J4, [
        mr(ha("h4", Z4, null, 512), [
          [i, [
            n.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        o.value ? (pr(), Ud(Ke(T), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: zn(() => [
            zo(Ke(C), {
              class: "py-6 justify-center",
              innerHTML: Ke(X4)
            }, null, 8, ["innerHTML"]),
            zo(Ke(C), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: zn(() => [
                mr(ha("h6", null, null, 512), [
                  [i, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            zo(Ke(C), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: zn(() => [
                mr(ha("p", null, null, 512), [
                  [i, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            zo(Ke(C), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: zn(() => [
                zo(Ke(t$), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: a[1] || (a[1] = (l) => s.$emit("close"))
                }, {
                  default: zn(() => [
                    Y4(Nd(s.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (pr(), Ud(Np, {
          key: 0,
          sections: Ke(t).orderedMissingSections,
          onSelectSection: a[0] || (a[0] = (l) => s.$emit("select-section", l))
        }, {
          default: zn(({ sourceSection: l }) => {
            var u, g;
            return [
              ha("h5", {
                class: "ma-0",
                lang: (u = Ke(t)) == null ? void 0 : u.sourceLanguage,
                dir: Ke(j.getDir)((g = Ke(t)) == null ? void 0 : g.sourceLanguage),
                textContent: Nd(l)
              }, null, 8, e$)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const o$ = window.Vue.computed, s$ = {
  name: "SxSectionSelectorSectionListPresent",
  components: {
    SxSectionSelectorSectionList: Np
  },
  emits: ["select-section"],
  setup() {
    const { sectionSuggestion: e } = Te(), t = o$(
      () => {
        var n;
        return j.getAutonym((n = e.value) == null ? void 0 : n.targetLanguage);
      }
    );
    return {
      mwIconArrowForward: El,
      getAutonym: j.getAutonym,
      getDir: j.getDir,
      suggestion: e,
      targetLanguageAutonym: t
    };
  }
}, a$ = window.Vue.resolveDirective, wa = window.Vue.createElementVNode, i$ = window.Vue.withDirectives, zd = window.Vue.toDisplayString, r$ = window.Vue.resolveComponent, l$ = window.Vue.withCtx, c$ = window.Vue.createVNode, u$ = window.Vue.openBlock, d$ = window.Vue.createElementBlock, g$ = { class: "sx-section-selector__present-sections py-2" }, m$ = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, p$ = { class: "sx-section-selector__present-section-button-content" }, h$ = ["lang", "dir", "textContent"], w$ = ["lang", "dir", "textContent"];
function f$(e, t, n, o, s, a) {
  var u;
  const i = r$("sx-section-selector-section-list"), l = a$("i18n");
  return u$(), d$("section", g$, [
    i$(wa("h4", m$, null, 512), [
      [l, [
        o.targetLanguageAutonym
      ], "cx-sx-section-selector-present-sections-title"]
    ]),
    c$(i, {
      sections: ((u = o.suggestion) == null ? void 0 : u.orderedPresentSections) || [],
      onSelectSection: t[0] || (t[0] = (g) => e.$emit("select-section", g))
    }, {
      default: l$(({ sourceSection: g, targetSection: r }) => {
        var c, d, m, p;
        return [
          wa("div", p$, [
            wa("h5", {
              class: "sx-section-selector__present-section-button-source",
              lang: (c = o.suggestion) == null ? void 0 : c.sourceLanguage,
              dir: o.getDir((d = o.suggestion) == null ? void 0 : d.sourceLanguage),
              textContent: zd(g)
            }, null, 8, h$),
            wa("h6", {
              class: "sx-section-selector__present-section-button-target",
              lang: (m = o.suggestion) == null ? void 0 : m.targetLanguage,
              dir: o.getDir((p = o.suggestion) == null ? void 0 : p.targetLanguage),
              textContent: zd(r)
            }, null, 8, w$)
          ])
        ];
      }),
      _: 1
    }, 8, ["sections"])
  ]);
}
const _$ = /* @__PURE__ */ P(s$, [["render", f$]]);
const hr = window.Vue.computed, v$ = window.Vuex.useStore, S$ = {
  name: "SxSectionSelector",
  components: {
    SxSectionSelectorSectionListPresent: _$,
    SxSectionSelectorSectionListMissing: n$,
    SxSectionSelectorHeader: z4,
    SxSectionSelectorViewArticleItem: E4,
    MwRow: T,
    MwCol: C,
    MwIcon: be,
    SxArticleLanguageSelector: Mp
  },
  setup() {
    const e = v$(), { sectionSuggestion: t } = Te(), {
      sourceLanguage: n,
      targetLanguage: o,
      sourceLanguageAutonym: s,
      targetLanguageAutonym: a
    } = q(e), i = hr(
      () => {
        var _;
        return G.getPageUrl(n.value, (_ = t.value) == null ? void 0 : _.sourceTitle);
      }
    ), l = hr(
      () => {
        var _;
        return G.getPageUrl(o.value, (_ = t.value) == null ? void 0 : _.targetTitle);
      }
    ), u = hr(() => [
      { path: i.value, autonym: s.value },
      { path: l.value, autonym: a.value }
    ]), g = me(), { clearURLParameters: r, setSectionURLParam: c } = M(), d = () => {
      r(), g.push({ name: "dashboard" });
    }, m = sc(), { selectPageSectionByTitle: p } = nc(), { isDesktop: h } = $s(), w = oc();
    return {
      goToDashboard: d,
      mwIconRobot: Ww,
      mwIconLabFlask: Gw,
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
}, Kt = window.Vue.resolveComponent, At = window.Vue.createVNode, y$ = window.Vue.resolveDirective, it = window.Vue.createElementVNode, Ro = window.Vue.withDirectives, C$ = window.Vue.renderList, k$ = window.Vue.Fragment, wr = window.Vue.openBlock, Rd = window.Vue.createElementBlock, x$ = window.Vue.createBlock, Od = window.Vue.toDisplayString, Hd = window.Vue.createTextVNode, fr = window.Vue.withCtx, b$ = { class: "sx-section-selector" }, $$ = { class: "sx-section-selector__body" }, V$ = { class: "py-2" }, E$ = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, A$ = { class: "ma-0 pa-0" }, D$ = { class: "sx-section-selector__additional-consideration-title" }, L$ = { href: "#" }, T$ = { class: "sx-section-selector__additional-consideration-title" }, B$ = { href: "#" };
function P$(e, t, n, o, s, a) {
  const i = Kt("sx-section-selector-header"), l = Kt("sx-article-language-selector"), u = Kt("sx-section-selector-section-list-missing"), g = Kt("sx-section-selector-section-list-present"), r = Kt("sx-section-selector-view-article-item"), c = Kt("mw-icon"), d = Kt("mw-col"), m = Kt("mw-row"), p = y$("i18n");
  return wr(), Rd("section", b$, [
    At(i, { onClose: o.goToDashboard }, null, 8, ["onClose"]),
    it("section", $$, [
      At(l),
      At(u, {
        onSelectSection: o.selectSection,
        onClose: o.goToDashboard
      }, null, 8, ["onSelectSection", "onClose"]),
      At(g, { onSelectSection: o.selectSection }, null, 8, ["onSelectSection"]),
      it("section", V$, [
        Ro(it("h4", E$, null, 512), [
          [p, [
            o.targetLanguageAutonym
          ], "cx-sx-section-selector-more-details-title"]
        ]),
        it("ul", A$, [
          (wr(!0), Rd(k$, null, C$(o.viewArticleItems, (h, w) => (wr(), x$(r, {
            key: `view-article-item-${w}`,
            path: h.path,
            autonym: h.autonym
          }, null, 8, ["path", "autonym"]))), 128))
        ])
      ]),
      At(m, { class: "sx-section-selector__additional-considerations ma-0" }, {
        default: fr(() => [
          At(d, {
            cols: "12",
            tablet: "6",
            class: "px-4 pt-5 pb-4"
          }, {
            default: fr(() => [
              it("h6", D$, [
                At(c, {
                  icon: o.mwIconRobot,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                Hd(" " + Od(e.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
              ]),
              Ro(it("p", null, null, 512), [
                [p, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
              ]),
              Ro(it("a", L$, null, 512), [
                [p, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
              ])
            ]),
            _: 1
          }),
          At(d, {
            cols: "12",
            tablet: "6",
            class: "px-4 py-5"
          }, {
            default: fr(() => [
              it("h6", T$, [
                At(c, {
                  icon: o.mwIconLabFlask,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                Hd(" " + Od(e.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
              ]),
              Ro(it("p", null, null, 512), [
                [p, void 0, "cx-sx-section-selector-unsupported-sections-description"]
              ]),
              Ro(it("a", B$, null, 512), [
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
const F$ = /* @__PURE__ */ P(S$, [["render", P$]]);
const M$ = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: F$
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, N$ = window.Vue.resolveComponent, U$ = window.Vue.createVNode, I$ = window.Vue.normalizeClass, z$ = window.Vue.openBlock, R$ = window.Vue.createElementBlock;
function O$(e, t, n, o, s, a) {
  const i = N$("sx-section-selector");
  return z$(), R$("main", {
    class: I$(["sx-section-selector-view", a.classes])
  }, [
    U$(i)
  ], 2);
}
const H$ = /* @__PURE__ */ P(M$, [["render", O$]]), j$ = window.Vue.computed, q$ = window.Vuex.useStore, G$ = (e) => {
  const { sourceLanguageAutonym: t, targetLanguageAutonym: n } = q(
    q$()
  ), o = ge();
  return j$(() => {
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
const W$ = window.Vue.watch, X$ = {
  name: "SxContentComparatorSourceVsTargetSelector",
  components: { MwButtonGroup: _s },
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
    const n = (s) => t("update:selection", s), o = G$(e);
    return W$(
      () => e.isMappedSection,
      () => {
        o.value.map((s) => s.value).includes(e.selection) || n(o.value[0].value);
      }
    ), {
      listSelector: o,
      updateSelection: n
    };
  }
}, K$ = window.Vue.resolveComponent, Y$ = window.Vue.createVNode, Q$ = window.Vue.openBlock, J$ = window.Vue.createElementBlock, Z$ = { class: "sx-content-comparator__source-target-selector" };
function e3(e, t, n, o, s, a) {
  const i = K$("mw-button-group");
  return Q$(), J$("div", Z$, [
    Y$(i, {
      items: o.listSelector,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const t3 = /* @__PURE__ */ P(X$, [["render", e3]]), _n = window.Vue.computed, n3 = window.Vue.ref, ac = () => {
  const e = n3([]), { currentTargetPage: t } = qe(), { sectionSuggestion: n } = Te(), { sectionURLParameter: o } = M(), s = _n(
    () => n.value.missingSections[o.value] || n.value.presentSections[o.value] || ""
  ), a = _n(
    () => {
      var d;
      return (((d = i.value) == null ? void 0 : d.title) || "").replace(/ /g, "_");
    }
  ), i = _n(
    () => {
      var d;
      return (d = t.value) == null ? void 0 : d.getSectionByTitle(s.value);
    }
  ), { sourceSection: l } = K(), u = _n(() => {
    var d;
    return (d = l.value) == null ? void 0 : d.html;
  }), g = _n(() => {
    var d;
    return (d = i.value) == null ? void 0 : d.html;
  }), r = _n(
    () => {
      var d;
      return (d = n.value) == null ? void 0 : d.missingSections.hasOwnProperty(o.value);
    }
  ), c = _n(
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
const jd = window.Vue.ref, _r = window.Vue.computed, o3 = window.Vue.onMounted, s3 = {
  name: "SxContentComparatorContentHeader",
  components: {
    SxContentComparatorSourceVsTargetSelector: t3,
    MwRow: T,
    MwCol: C,
    MwButton: De
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
    const n = jd(!1), { sectionSuggestion: o } = Te(), { sectionURLParameter: s } = M(), a = _r(
      () => (s.value || "").replace(/ /g, "_")
    ), i = (d) => t.emit("update:sourceVsTargetSelection", d), { activeSectionTargetTitle: l, targetSectionAnchor: u } = ac(), g = _r(() => {
      switch (e.sourceVsTargetSelection) {
        case "source_section":
          return {
            title: s.value,
            path: `${G.getPageUrl(
              o.value.sourceLanguage,
              o.value.sourceTitle
            )}#${a.value}`,
            lang: o.value.sourceLanguage,
            dir: j.getDir(o.value.sourceLanguage)
          };
        case "target_article":
          return {
            title: o.value.targetTitle,
            path: r.value,
            lang: o.value.targetLanguage,
            dir: j.getDir(o.value.targetLanguage)
          };
        default:
          return {
            title: l.value,
            path: `${r.value}#${u.value}`
          };
      }
    }), r = _r(
      () => G.getPageUrl(
        o.value.targetLanguage,
        o.value.targetTitle
      )
    ), c = jd(null);
    return o3(() => {
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
      mwIconLinkExternal: xm,
      mwIconEdit: qa,
      updateSelection: i
    };
  }
}, fa = window.Vue.resolveComponent, _a = window.Vue.createVNode, a3 = window.Vue.toDisplayString, i3 = window.Vue.createElementVNode, va = window.Vue.withCtx, vr = window.Vue.openBlock, Sr = window.Vue.createBlock;
window.Vue.createCommentVNode;
const r3 = window.Vue.normalizeClass, l3 = ["lang", "dir", "textContent"];
function c3(e, t, n, o, s, a) {
  const i = fa("sx-content-comparator-source-vs-target-selector"), l = fa("mw-col"), u = fa("mw-button"), g = fa("mw-row");
  return vr(), Sr(g, {
    ref: "contentHeader",
    class: r3(["sx-content-comparator__content-header ma-0 pt-1", { sticky: o.isSticky }]),
    direction: "column",
    align: "stretch",
    reverse: o.isSticky
  }, {
    default: va(() => [
      _a(i, {
        "is-mapped-section": n.isMappedSection,
        selection: n.sourceVsTargetSelection,
        "onUpdate:selection": o.updateSelection
      }, null, 8, ["is-mapped-section", "selection", "onUpdate:selection"]),
      _a(g, {
        justify: "between",
        class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
      }, {
        default: va(() => [
          _a(l, null, {
            default: va(() => [
              i3("h3", {
                lang: o.activeContent.lang,
                dir: o.activeContent.dir,
                class: "ma-0 pa-0",
                textContent: a3(o.activeContent.title)
              }, null, 8, l3)
            ]),
            _: 1
          }),
          _a(l, { shrink: "" }, {
            default: va(() => [
              o.isSticky ? (vr(), Sr(u, {
                key: 0,
                icon: o.mwIconEdit,
                progressive: "",
                label: e.$i18n(
                  "cx-sx-content-comparator-content-header-translate-button-label"
                ),
                onClick: t[0] || (t[0] = (r) => e.$emit("translation-button-clicked"))
              }, null, 8, ["icon", "label"])) : (vr(), Sr(u, {
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
const u3 = /* @__PURE__ */ P(s3, [["render", c3]]), d3 = window.Vue.computed, g3 = {
  name: "SxContentComparatorHeaderNavigation",
  components: {
    MwCol: C,
    MwButton: De
  },
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const { sectionURLParameter: t } = M(), n = d3(
      () => e.sectionSourceTitles.indexOf(t.value)
    ), { selectPageSectionByTitle: o } = nc();
    return {
      goToNextSection: () => {
        const i = (n.value + 1) % e.sectionSourceTitles.length, l = e.sectionSourceTitles[i];
        o(l);
      },
      goToPreviousSection: () => {
        const i = (n.value - 1 + e.sectionSourceTitles.length) % e.sectionSourceTitles.length, l = e.sectionSourceTitles[i];
        o(l);
      },
      mwIconPrevious: Hw,
      mwIconArrowForward: El
    };
  }
}, qd = window.Vue.resolveComponent, Gd = window.Vue.createVNode, m3 = window.Vue.withCtx, p3 = window.Vue.openBlock, h3 = window.Vue.createBlock;
function w3(e, t, n, o, s, a) {
  const i = qd("mw-button"), l = qd("mw-col");
  return p3(), h3(l, {
    class: "justify-end",
    align: "center"
  }, {
    default: m3(() => [
      Gd(i, {
        class: "pa-0 pe-1",
        type: "icon",
        icon: o.mwIconPrevious,
        onClick: o.goToPreviousSection
      }, null, 8, ["icon", "onClick"]),
      Gd(i, {
        class: "pa-0 ps-1",
        type: "icon",
        icon: o.mwIconArrowForward,
        onClick: o.goToNextSection
      }, null, 8, ["icon", "onClick"])
    ]),
    _: 1
  });
}
const f3 = /* @__PURE__ */ P(g3, [["render", w3]]);
const _3 = {
  name: "SxContentComparatorHeaderMappedSection",
  components: {
    MwRow: T,
    MwCol: C,
    MwButton: De
  },
  props: {
    suggestion: {
      type: En,
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
    mwIconTrash: ym,
    mwIconUndo: Yw
  }),
  computed: {
    isDiscardedSection() {
      return this.discardedSections.includes(this.targetSectionTitle);
    },
    mappedSectionHeaderTitle() {
      return this.$i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        j.getAutonym(this.suggestion.targetLanguage)
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
}, Wd = window.Vue.toDisplayString, v3 = window.Vue.resolveDirective, yr = window.Vue.withDirectives, Rn = window.Vue.openBlock, Sa = window.Vue.createElementBlock, S3 = window.Vue.createCommentVNode, y3 = window.Vue.createTextVNode, Xd = window.Vue.createElementVNode, C3 = window.Vue.normalizeClass, Cr = window.Vue.resolveComponent, kr = window.Vue.withCtx, xr = window.Vue.createVNode, Kd = window.Vue.createBlock, k3 = { class: "sx-content-comparator-header__mapped-section" }, x3 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, b3 = { key: 0 }, $3 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, V3 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
};
function E3(e, t, n, o, s, a) {
  const i = Cr("mw-col"), l = Cr("mw-button"), u = Cr("mw-row"), g = v3("i18n");
  return Rn(), Sa("div", k3, [
    xr(u, { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
      default: kr(() => [
        xr(i, { grow: "" }, {
          default: kr(() => [
            Xd("h6", x3, [
              y3(Wd(a.mappedSectionHeaderTitle) + " ", 1),
              a.isDiscardedSection ? yr((Rn(), Sa("span", b3, null, 512)), [
                [g, void 0, "cx-sx-content-comparator-discarded-section-label"]
              ]) : S3("", !0)
            ]),
            Xd("h6", {
              class: C3(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                "sx-content-comparator-header__mapped-section-target-title--discarded": a.isDiscardedSection
              }])
            }, Wd(n.targetSectionTitle), 3)
          ]),
          _: 1
        }),
        xr(i, { shrink: "" }, {
          default: kr(() => [
            a.isDiscardedSection ? (Rn(), Kd(l, {
              key: 1,
              class: "pa-0",
              icon: e.mwIconUndo,
              type: "icon",
              onClick: a.undoDiscard
            }, null, 8, ["icon", "onClick"])) : (Rn(), Kd(l, {
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
    a.isDiscardedSection ? yr((Rn(), Sa("p", V3, null, 512)), [
      [g, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
    ]) : yr((Rn(), Sa("p", $3, null, 512)), [
      [g, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
    ])
  ]);
}
const A3 = /* @__PURE__ */ P(_3, [["render", E3]]);
const ya = window.Vue.computed, D3 = {
  name: "SxContentComparatorHeader",
  components: {
    SxContentComparatorHeaderMappedSection: A3,
    SxContentComparatorHeaderNavigation: f3,
    MwButton: De,
    MwCol: C,
    MwRow: T,
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
    const { sectionURLParameter: e } = M(), { sourceSection: t } = K(), { sectionSuggestion: n } = Te(), o = ya(
      () => {
        var u;
        return (u = n.value) == null ? void 0 : u.missingSections.hasOwnProperty(e.value);
      }
    ), s = ya(
      () => {
        var u;
        return (u = n.value) == null ? void 0 : u.presentSections.hasOwnProperty(e.value);
      }
    ), { activeSectionTargetTitle: a } = ac(), i = ya(() => {
      var u;
      return (u = t.value) == null ? void 0 : u.html;
    }), l = ya(() => [
      ...Object.keys(n.value.missingSections),
      ...Object.keys(n.value.presentSections)
    ]);
    return {
      activeSectionTargetTitle: a,
      isCurrentSectionMissing: o,
      isCurrentSectionPresent: s,
      mwIconArrowPrevious: jw,
      mwIconEdit: qa,
      mwIconEye: Xw,
      sectionSourceTitles: l,
      sourceSectionContent: i,
      sourceSectionTitle: e,
      suggestion: n,
      getDir: j.getDir
    };
  }
}, On = window.Vue.resolveComponent, Dt = window.Vue.createVNode, Yd = window.Vue.toDisplayString, cs = window.Vue.createElementVNode, Hn = window.Vue.withCtx, L3 = window.Vue.resolveDirective, Qd = window.Vue.withDirectives, br = window.Vue.openBlock, Jd = window.Vue.createBlock, Zd = window.Vue.createCommentVNode, T3 = window.Vue.createElementBlock, B3 = { class: "sx-content-comparator__header pa-4" }, P3 = ["lang", "dir"], F3 = ["lang", "dir"], M3 = /* @__PURE__ */ cs("br", null, null, -1);
function N3(e, t, n, o, s, a) {
  const i = On("mw-button"), l = On("mw-col"), u = On("sx-content-comparator-header-navigation"), g = On("mw-row"), r = On("mw-icon"), c = On("sx-content-comparator-header-mapped-section"), d = L3("i18n");
  return br(), T3("div", B3, [
    Dt(i, {
      class: "py-2 pa-0",
      icon: o.mwIconArrowPrevious,
      label: e.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
      type: "text",
      onClick: t[0] || (t[0] = (m) => e.$emit("close"))
    }, null, 8, ["icon", "label"]),
    Dt(g, { class: "my-1 py-2 mx-0" }, {
      default: Hn(() => [
        Dt(l, { grow: "" }, {
          default: Hn(() => [
            cs("h4", {
              class: "pa-0 sx-content-comparator-header__article-title",
              lang: o.suggestion.sourceLanguage,
              dir: o.getDir(o.suggestion.sourceLanguage)
            }, Yd(o.suggestion.sourceTitle), 9, P3),
            cs("h2", {
              class: "sx-content-comparator-header__section-title pa-0 ma-0",
              lang: o.suggestion.sourceLanguage,
              dir: o.getDir(o.suggestion.sourceLanguage)
            }, Yd(o.sourceSectionTitle), 9, F3)
          ]),
          _: 1
        }),
        Dt(u, {
          cols: "2",
          "section-source-titles": o.sectionSourceTitles
        }, null, 8, ["section-source-titles"]),
        Dt(l, {
          cols: "12",
          mobile: "12",
          tablet: "4",
          class: "py-2 mb-1"
        }, {
          default: Hn(() => [
            Dt(i, {
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
    o.isCurrentSectionMissing ? (br(), Jd(g, {
      key: 0,
      align: "start",
      class: "sx-content-comparator-header__review-contents mx-0"
    }, {
      default: Hn(() => [
        Dt(l, {
          shrink: "",
          class: "pe-2"
        }, {
          default: Hn(() => [
            Dt(r, { icon: o.mwIconEye }, null, 8, ["icon"])
          ]),
          _: 1
        }),
        Dt(l, { class: "ma-0" }, {
          default: Hn(() => [
            Qd(cs("strong", null, null, 512), [
              [d, void 0, "cx-sx-content-comparator-review-contents-title"]
            ]),
            M3,
            Qd(cs("span", null, null, 512), [
              [d, void 0, "cx-sx-content-comparator-review-contents-rest"]
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : Zd("", !0),
    o.isCurrentSectionPresent ? (br(), Jd(c, {
      key: 1,
      suggestion: o.suggestion,
      "target-section-title": o.activeSectionTargetTitle,
      "discarded-sections": n.discardedSections,
      "onUpdate:discardedSections": t[2] || (t[2] = (m) => e.$emit("update:discardedSections", m))
    }, null, 8, ["suggestion", "target-section-title", "discarded-sections"])) : Zd("", !0)
  ]);
}
const U3 = /* @__PURE__ */ P(D3, [["render", N3]]);
const I3 = {
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
}, eg = window.Vue.toDisplayString, z3 = window.Vue.createElementVNode, tg = window.Vue.openBlock, ng = window.Vue.createElementBlock, R3 = window.Vue.createCommentVNode, O3 = { class: "sx-content-comparator__new-section-placeholder--present mt-4 py-4 px-7" }, H3 = ["textContent"], j3 = ["textContent"];
function q3(e, t, n, o, s, a) {
  return tg(), ng("section", O3, [
    z3("h5", {
      textContent: eg(n.placeholderTitle)
    }, null, 8, H3),
    n.placeholderSubtitle ? (tg(), ng("p", {
      key: 0,
      textContent: eg(n.placeholderSubtitle)
    }, null, 8, j3)) : R3("", !0)
  ]);
}
const Up = /* @__PURE__ */ P(I3, [["render", q3]]), G3 = window.Vue.computed, W3 = window.Vue.createApp, X3 = window.Vuex.useStore, K3 = () => {
  const e = X3(), { sectionSuggestion: t } = Te(), { currentTargetPage: n } = qe(), o = ge(), s = () => W3(
    Up,
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
  return G3(() => {
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
const Y3 = window.Vue.ref, Q3 = window.Vue.computed, J3 = window.Vue.watch, Z3 = window.Vuex.useStore, eV = {
  name: "SxContentComparator",
  components: {
    SxContentComparatorNewSectionPlaceholder: Up,
    SxContentComparatorHeader: U3,
    SxContentComparatorContentHeader: u3,
    MwSpinner: tt
  },
  setup() {
    const e = Z3(), t = me(), n = Y3("source_section"), { logDashboardTranslationStartEvent: o } = Yl(), s = () => t.push({ name: "sx-section-selector" }), a = () => {
      o(), Pp() || !e.getters["translator/userHasSectionTranslations"] ? t.push({ name: "sx-quick-tutorial" }) : t.push({ name: "sx-sentence-selector" });
    }, {
      activeSectionTargetTitle: i,
      discardedSections: l,
      isCurrentSectionMapped: u,
      sourceSectionContent: g,
      targetSectionContent: r
    } = ac(), c = K3(), { sectionSuggestion: d } = Te(), { sourceLanguage: m, targetLanguage: p } = q(e), h = Q3(() => d.value.targetTitle), w = tc();
    return J3(
      h,
      () => w(
        p.value,
        m.value,
        h.value
      ),
      { immediate: !0 }
    ), {
      getDir: j.getDir,
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
}, Ca = window.Vue.resolveComponent, $r = window.Vue.createVNode, jn = window.Vue.openBlock, og = window.Vue.createBlock, sg = window.Vue.createCommentVNode, ka = window.Vue.createElementVNode, Vr = window.Vue.Fragment, xa = window.Vue.createElementBlock, tV = { class: "sx-content-comparator" }, nV = { class: "sx-content-comparator__source-content" }, oV = ["lang", "dir", "innerHTML"], sV = ["lang", "dir", "innerHTML"], aV = ["innerHTML"];
function iV(e, t, n, o, s, a) {
  const i = Ca("sx-content-comparator-header"), l = Ca("sx-content-comparator-content-header"), u = Ca("mw-spinner"), g = Ca("sx-content-comparator-new-section-placeholder");
  return jn(), xa("section", tV, [
    $r(i, {
      "discarded-sections": o.discardedSections,
      "onUpdate:discardedSections": t[0] || (t[0] = (r) => o.discardedSections = r),
      onTranslationButtonClicked: o.translateSection,
      onClose: o.goToSectionSelector
    }, null, 8, ["discarded-sections", "onTranslationButtonClicked", "onClose"]),
    $r(l, {
      "source-vs-target-selection": o.sourceVsTargetSelection,
      "onUpdate:sourceVsTargetSelection": t[1] || (t[1] = (r) => o.sourceVsTargetSelection = r),
      "is-mapped-section": o.isCurrentSectionMapped,
      onTranslationButtonClicked: o.translateSection
    }, null, 8, ["source-vs-target-selection", "is-mapped-section", "onTranslationButtonClicked"]),
    ka("section", nV, [
      o.sourceVsTargetSelection === "source_section" ? (jn(), xa(Vr, { key: 0 }, [
        o.sourceSectionContent ? sg("", !0) : (jn(), og(u, { key: 0 })),
        ka("section", {
          lang: o.sourceLanguage,
          dir: o.getDir(o.sourceLanguage),
          class: "pt-2 px-4",
          innerHTML: o.sourceSectionContent
        }, null, 8, oV)
      ], 64)) : o.sourceVsTargetSelection === "target_article" ? (jn(), xa(Vr, { key: 1 }, [
        o.targetPageContent ? sg("", !0) : (jn(), og(u, { key: 0 })),
        ka("article", {
          lang: o.targetLanguage,
          dir: o.getDir(o.targetLanguage),
          class: "px-4",
          innerHTML: o.targetPageContent
        }, null, 8, sV)
      ], 64)) : (jn(), xa(Vr, { key: 2 }, [
        ka("section", {
          class: "pa-4",
          innerHTML: o.targetSectionContent
        }, null, 8, aV),
        $r(g, {
          "placeholder-title": e.$i18n("cx-sx-content-comparator-present-section-placeholder-title"),
          "placeholder-subtitle": e.$i18n(
            "cx-sx-content-comparator-present-section-placeholder-subtitle"
          )
        }, null, 8, ["placeholder-title", "placeholder-subtitle"])
      ], 64))
    ])
  ]);
}
const rV = /* @__PURE__ */ P(eV, [["render", iV]]);
const lV = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: rV
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, cV = window.Vue.resolveComponent, uV = window.Vue.createVNode, dV = window.Vue.normalizeClass, gV = window.Vue.openBlock, mV = window.Vue.createElementBlock;
function pV(e, t, n, o, s, a) {
  const i = cV("sx-content-comparator");
  return gV(), mV("main", {
    class: dV(["sx-content-comparator-view", a.classes])
  }, [
    uV(i)
  ], 2);
}
const hV = /* @__PURE__ */ P(lV, [["render", pV]]);
const wV = window.Vue.resolveDirective, Oo = window.Vue.createElementVNode, ag = window.Vue.withDirectives, ba = window.Vue.unref, Er = window.Vue.createVNode, ig = window.Vue.toDisplayString, rg = window.Vue.createTextVNode, Ho = window.Vue.withCtx, fV = window.Vue.openBlock, _V = window.Vue.createBlock, vV = { class: "mw-ui-dialog__header px-4 py-3" }, SV = { class: "mw-ui-dialog__header-title" }, yV = { class: "pa-4" }, CV = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, lg = window.Codex.CdxButton, kV = {
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
      const u = wV("i18n");
      return fV(), _V(ba(je), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        "overlay-opacity": 0.7,
        "overlay-color": i.$mwui.colors.gray700
      }, {
        header: Ho(() => [
          Oo("div", vV, [
            ag(Oo("span", SV, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: Ho(() => [
          Oo("div", CV, [
            Er(ba(lg), {
              weight: "quiet",
              onClick: s
            }, {
              default: Ho(() => [
                rg(ig(i.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            Er(ba(lg), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: Ho(() => [
                rg(ig(i.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: Ho(() => [
          Er(ba(ja)),
          Oo("div", yV, [
            ag(Oo("span", null, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "overlay-color"]);
    };
  }
}, xV = window.Vuex.useStore, ic = () => {
  const e = xV(), { sourceSection: t } = K(), { getCurrentTitleByLanguage: n } = Mt(), o = (l, u, g) => {
    if (l === 0) {
      t.value.proposedTitleTranslations[u] = g;
      return;
    }
    const r = t.value.getContentTranslationUnitById(l);
    r instanceof Ae ? r.blockTemplateProposedTranslations[u] = g : r instanceof nn && r.addProposedTranslation(u, g);
  }, s = (l, u) => y(void 0, null, function* () {
    const { sourceLanguage: g, targetLanguage: r } = e.state.application;
    if (!e.getters["mediawiki/isValidProviderForTranslation"](g, r, l))
      return "";
    try {
      const d = yield e.dispatch("application/getCXServerToken");
      return yield He.fetchSegmentTranslation(
        g,
        r,
        l,
        u,
        d
      );
    } catch (d) {
      return mw.log.error("Error while translating segment", d), "";
    }
  }), a = (l, u) => y(void 0, null, function* () {
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
    d instanceof Ae && (d.setBlockTemplateAdaptationInfoByHtml(
      u,
      m
    ), m = (yield Vv(
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
}, bV = window.Vuex.useStore, $V = () => {
  const { sourceSection: e } = K(), t = bV(), { translateTranslationUnitById: n } = ic();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
const Ar = window.Vue.computed, VV = window.Vuex.useStore, EV = {
  name: "SxTranslationSelector",
  components: { MwCard: et, MwButton: De, MwDialog: je },
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, t) {
    const n = Y.EMPTY_TEXT_PROVIDER_KEY, o = Y.ORIGINAL_TEXT_PROVIDER_KEY, s = VV(), {
      sourceSection: a,
      isSectionTitleSelected: i,
      selectedContentTranslationUnit: l
    } = K(), { sourceLanguage: u, targetLanguage: g } = q(s), r = Ar(
      () => s.getters["mediawiki/getSupportedMTProviders"](
        u.value,
        g.value
      )
    ), c = Ar(() => {
      const f = [o, n];
      return r.value.filter(
        (_) => !f.includes(_)
      );
    }), d = Ar(
      () => i.value ? a.value.proposedTitleTranslations : l.value.proposedTranslations
    ), m = $V(), p = (f) => {
      m(f), w();
    }, h = Y.getMTProviderLabel, w = () => t.emit("update:active", !1);
    return {
      apiMtProviders: c,
      close: w,
      emptyTextProviderKey: n,
      getDir: j.getDir,
      getMTProviderLabel: h,
      mwIconClose: so,
      originalTextProviderKey: o,
      proposedTranslations: d,
      selectProvider: p,
      sourceLanguage: u
    };
  }
}, AV = window.Vue.resolveDirective, Re = window.Vue.createElementVNode, $a = window.Vue.withDirectives, Dr = window.Vue.resolveComponent, Lr = window.Vue.createVNode, Yt = window.Vue.withCtx, DV = window.Vue.renderList, LV = window.Vue.Fragment, Tr = window.Vue.openBlock, TV = window.Vue.createElementBlock, BV = window.Vue.toDisplayString, cg = window.Vue.createBlock, PV = window.Vue.createCommentVNode, FV = { class: "mw-ui-dialog__header pa-4" }, MV = { class: "row ma-0 py-2" }, NV = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, UV = { class: "mb-0" }, IV = { class: "col shrink justify-center" }, zV = { class: "pb-2 mb-0" }, RV = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, OV = ["dir", "lang", "innerHTML"], HV = ["textContent"], jV = ["innerHTML"], qV = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, GV = /* @__PURE__ */ Re("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1);
function WV(e, t, n, o, s, a) {
  const i = Dr("mw-button"), l = Dr("mw-card"), u = Dr("mw-dialog"), g = AV("i18n");
  return n.active ? (Tr(), cg(u, {
    key: 0,
    class: "sx-sentence-selector__translation-options",
    fullscreen: ""
  }, {
    header: Yt(() => [
      Re("div", FV, [
        Re("div", MV, [
          Re("div", NV, [
            $a(Re("h4", UV, null, 512), [
              [g, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
            ])
          ]),
          Re("div", IV, [
            Lr(i, {
              type: "icon",
              icon: o.mwIconClose,
              class: "pa-0",
              onClick: o.close
            }, null, 8, ["icon", "onClick"])
          ])
        ]),
        $a(Re("h6", zV, null, 512), [
          [g, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
        ])
      ])
    ]),
    default: Yt(() => [
      Lr(l, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: t[0] || (t[0] = (r) => o.selectProvider(o.originalTextProviderKey))
      }, {
        header: Yt(() => [
          $a(Re("h5", RV, null, 512), [
            [g, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
          ])
        ]),
        default: Yt(() => [
          Re("p", {
            dir: o.getDir(o.sourceLanguage),
            lang: o.sourceLanguage,
            innerHTML: o.proposedTranslations[o.originalTextProviderKey]
          }, null, 8, OV)
        ]),
        _: 1
      }),
      (Tr(!0), TV(LV, null, DV(o.apiMtProviders, (r) => (Tr(), cg(l, {
        key: r,
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: (c) => o.selectProvider(r)
      }, {
        header: Yt(() => [
          Re("h5", {
            class: "sx-sentence-selector__translation-options-card-title mb-4",
            textContent: BV(o.getMTProviderLabel(r))
          }, null, 8, HV)
        ]),
        default: Yt(() => [
          Re("p", {
            innerHTML: o.proposedTranslations[r]
          }, null, 8, jV)
        ]),
        _: 2
      }, 1032, ["onClick"]))), 128)),
      Lr(l, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: t[1] || (t[1] = (r) => o.selectProvider(o.emptyTextProviderKey))
      }, {
        header: Yt(() => [
          $a(Re("h5", qV, null, 512), [
            [g, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
          ])
        ]),
        default: Yt(() => [
          GV
        ]),
        _: 1
      })
    ]),
    _: 1
  })) : PV("", !0);
}
const XV = /* @__PURE__ */ P(EV, [["render", WV]]), KV = window.Vuex.useStore, go = () => {
  const { sourceSection: e } = K(), t = KV(), { translateTranslationUnitById: n } = ic(), { currentMTProvider: o } = q(t), s = (l) => y(void 0, null, function* () {
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
const YV = window.Vue.toDisplayString, Br = window.Vue.createElementVNode, Pr = window.Vue.unref, QV = window.Vue.createVNode, JV = window.Vue.normalizeClass, ZV = window.Vue.withCtx, e5 = window.Vue.openBlock, t5 = window.Vue.createBlock, n5 = ["href"], o5 = ["textContent"], s5 = ["innerHTML"], qn = window.Vue.computed, a5 = window.Vuex.useStore, ug = "sx-sentence-selector__section-title", i5 = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const t = a5(), { sourceSection: n, isSectionTitleSelected: o } = K(), { currentSourcePage: s } = qe(), { sourceLanguage: a } = q(t), i = qn(() => {
      var p;
      return (p = s.value) == null ? void 0 : p.title;
    }), l = qn(
      () => {
        var p;
        return ((p = n.value) == null ? void 0 : p.title) || i.value;
      }
    ), u = qn(
      () => G.getPageUrl(a.value, i.value)
    ), g = qn(
      () => {
        var p;
        return !!((p = n.value) != null && p.translatedTitle);
      }
    ), r = qn(
      () => g.value ? "translated" : "selected"
    ), c = qn(() => {
      const p = [ug];
      return o.value && p.push(`${ug}--${r.value}`), p;
    }), { selectTranslationUnitById: d } = go(), m = () => d(0);
    return (p, h) => (e5(), t5(Pr(C), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: ZV(() => [
        Br("a", {
          href: u.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          Br("strong", {
            textContent: YV(i.value)
          }, null, 8, o5),
          QV(Pr(be), {
            icon: Pr(xm),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, n5),
        Br("h2", {
          class: JV(["pa-0 ma-0", c.value]),
          onClick: m,
          innerHTML: l.value
        }, null, 10, s5)
      ]),
      _: 1
    }));
  }
};
const rt = window.Vue.unref, jo = window.Vue.createVNode, Va = window.Vue.withCtx, dg = window.Vue.toDisplayString, gg = window.Vue.createTextVNode, r5 = window.Vue.openBlock, l5 = window.Vue.createBlock, c5 = window.Vue.computed, Fr = window.Codex.CdxButton, mg = window.Codex.CdxIcon, Ip = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = K(), s = c5(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, i) => (r5(), l5(rt(T), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: Va(() => [
        jo(rt(Fr), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: rt(n),
          onClick: i[0] || (i[0] = (l) => a.$emit("select-previous-segment"))
        }, {
          default: Va(() => [
            jo(rt(mg), {
              class: "me-1",
              icon: rt(Kl)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        jo(rt(Fr), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !rt(o),
          onClick: i[1] || (i[1] = (l) => a.$emit("apply-translation"))
        }, {
          default: Va(() => [
            gg(dg(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        jo(rt(Fr), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: i[2] || (i[2] = (l) => a.$emit("skip-translation"))
        }, {
          default: Va(() => [
            gg(dg(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            jo(rt(mg), {
              class: "ms-1",
              size: "small",
              icon: rt(Ls)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const vn = window.Vue.unref, u5 = window.Vue.toDisplayString, qo = window.Vue.createVNode, Ea = window.Vue.withCtx, d5 = window.Vue.openBlock, g5 = window.Vue.createBlock, Mr = window.Vue.computed, m5 = window.Vuex.useStore, p5 = window.Codex.CdxButton, h5 = window.Codex.CdxIcon, w5 = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = m5(), n = Mr(() => t.state.application.currentMTProvider), o = ge(), s = Mr(() => ({
      [Y.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [Y.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = Mr(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        Y.getMTProviderLabel(n.value)
      )
    );
    return (i, l) => (d5(), g5(vn(C), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: Ea(() => [
        qo(vn(T), { class: "ma-0 ps-5 pb-4" }, {
          default: Ea(() => [
            qo(vn(C), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: u5(a.value)
            }, null, 8, ["textContent"]),
            qo(vn(C), {
              shrink: "",
              class: "pe-5"
            }, {
              default: Ea(() => [
                qo(vn(p5), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": i.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: l[0] || (l[0] = (u) => i.$emit("configure-options"))
                }, {
                  default: Ea(() => [
                    qo(vn(h5), {
                      class: "pa-0",
                      icon: vn(Wl)
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
const Ye = window.Vue.unref, Qt = window.Vue.createVNode, f5 = window.Vue.resolveDirective, pg = window.Vue.createElementVNode, _5 = window.Vue.withDirectives, hg = window.Vue.toDisplayString, wg = window.Vue.createTextVNode, Go = window.Vue.withCtx, v5 = window.Vue.openBlock, S5 = window.Vue.createElementBlock, y5 = { class: "mt-retry-body pb-5" }, C5 = { class: "retry-body__message" }, fg = window.Codex.CdxButton, Nr = window.Codex.CdxIcon, k5 = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = f5("i18n");
      return v5(), S5("div", y5, [
        pg("div", C5, [
          Qt(Ye(Nr), {
            class: "me-2",
            icon: Ye(Sp)
          }, null, 8, ["icon"]),
          _5(pg("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        Qt(Ye(T), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: Go(() => [
            Qt(Ye(C), { cols: "6" }, {
              default: Go(() => [
                Qt(Ye(fg), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: Go(() => [
                    Qt(Ye(Nr), {
                      class: "me-1",
                      icon: Ye(bp)
                    }, null, 8, ["icon"]),
                    wg(" " + hg(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Qt(Ye(C), { cols: "6" }, {
              default: Go(() => [
                Qt(Ye(fg), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: Go(() => [
                    Qt(Ye(Nr), {
                      class: "me-1",
                      icon: Ye(OC)
                    }, null, 8, ["icon"]),
                    wg(" " + hg(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const Gn = window.Vue.createVNode, $e = window.Vue.unref, Wo = window.Vue.openBlock, x5 = window.Vue.createElementBlock, b5 = window.Vue.createCommentVNode, Aa = window.Vue.createBlock, $5 = window.Vue.normalizeClass, V5 = window.Vue.normalizeStyle, Xo = window.Vue.withCtx, E5 = window.Vue.toDisplayString, A5 = window.Vue.createTextVNode, D5 = window.Vue.normalizeProps, L5 = window.Vue.guardReactiveProps, T5 = ["lang", "dir", "innerHTML"], Ur = window.Vue.ref, B5 = window.Vue.onMounted, P5 = window.Vue.onBeforeUnmount, Ir = window.Vue.computed, F5 = window.Vue.nextTick, M5 = window.Vuex.useStore, N5 = window.Codex.CdxButton, U5 = window.Codex.CdxIcon, I5 = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = Ur(0), n = Ur(null), o = Ur(null), s = M5(), { currentMTProvider: a, targetLanguage: i } = q(s), { sourceSection: l, currentProposedTranslation: u } = K(), g = Ir(
      () => {
        var p, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (p = l.value) == null ? void 0 : p.selectedTranslationUnitId
        );
      }
    ), r = Ir(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), c = Ir(
      () => !!u.value || a.value === Y.EMPTY_TEXT_PROVIDER_KEY
    ), d = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    B5(() => y(this, null, function* () {
      yield F5(), d(), m.observe(n.value.$el), m.observe(o.value.$el);
    })), P5(() => {
      m.unobserve(n.value.$el), m.unobserve(o.value.$el);
    });
    const m = new ResizeObserver(() => d());
    return (p, h) => (Wo(), Aa($e(et), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: Xo(() => [
        Gn($e(T), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: Xo(() => [
            Gn(w5, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (w) => p.$emit("configure-options"))
            }, null, 512),
            Gn($e(C), {
              class: $5(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !c.value && g.value
              }]),
              style: V5(c.value ? r.value : null)
            }, {
              default: Xo(() => [
                c.value ? (Wo(), x5("section", {
                  key: 0,
                  lang: $e(i),
                  dir: $e(j.getDir)($e(i)),
                  innerHTML: $e(u)
                }, null, 8, T5)) : g.value ? (Wo(), Aa($e(tt), { key: 1 })) : (Wo(), Aa(k5, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (w) => p.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (w) => p.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            Gn($e(C), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: Xo(() => [
                c.value || g.value ? (Wo(), Aa($e(N5), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !c.value,
                  onClick: h[3] || (h[3] = (w) => p.$emit("edit-translation", $e(u)))
                }, {
                  default: Xo(() => [
                    Gn($e(U5), {
                      class: "me-1",
                      icon: $e(Gl)
                    }, null, 8, ["icon"]),
                    A5(" " + E5(p.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : b5("", !0),
                Gn(Ip, D5(L5(p.$attrs)), null, 16)
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
}, z5 = window.Vue.computed, R5 = (e) => z5(() => {
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
const O5 = window.Vue.onMounted, H5 = window.Vue.ref, j5 = window.Vue.computed, q5 = {
  name: "SubSection",
  props: {
    subSection: {
      type: Ae,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = H5(null), o = R5(e.subSection);
    O5(() => {
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
    const { selectTranslationUnitById: s } = go(), a = (l) => {
      if (l.selected) {
        t("bounce-translation");
        return;
      }
      s(l.id);
    }, i = j5(() => ({
      "sx-sentence-selector__subsection--block-selected": e.subSection.selected
    }));
    return {
      content: o,
      rootClasses: i,
      subSectionRoot: n
    };
  }
}, G5 = window.Vue.normalizeClass, W5 = window.Vue.openBlock, X5 = window.Vue.createElementBlock, K5 = ["innerHTML"];
function Y5(e, t, n, o, s, a) {
  return W5(), X5("div", {
    ref: "subSectionRoot",
    class: G5(["sx-sentence-selector__subsection", o.rootClasses]),
    innerHTML: o.content
  }, null, 10, K5);
}
const Q5 = /* @__PURE__ */ P(q5, [["render", Y5]]);
const _g = window.Vue.computed, J5 = {
  name: "BlockTemplateStatusIndicator",
  components: {
    MwCircleProgressBar: N0,
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
    const t = _g(() => ({ "--size": e.size })), n = _g(
      () => !e.isTemplateAdapted || e.percentage === 0 ? Al : Zn
    );
    return {
      cssVars: t,
      statusIcon: n
    };
  }
}, vg = window.Vue.resolveComponent, Sg = window.Vue.createVNode, yg = window.Vue.normalizeStyle, Z5 = window.Vue.openBlock, eE = window.Vue.createElementBlock;
function tE(e, t, n, o, s, a) {
  const i = vg("mw-circle-progress-bar"), l = vg("mw-icon");
  return Z5(), eE("div", {
    class: "block-template-status-indicator",
    style: yg(o.cssVars)
  }, [
    Sg(i, {
      percentage: n.percentage,
      size: n.size,
      "stroke-width": n.strokeWidth
    }, null, 8, ["percentage", "size", "stroke-width"]),
    Sg(l, {
      icon: o.statusIcon,
      size: n.size / 2,
      style: yg({
        left: `calc(50% - ${n.size / 4}px)`,
        top: `calc(50% - ${n.size / 4}px)`
      })
    }, null, 8, ["icon", "size", "style"])
  ], 4);
}
const zp = /* @__PURE__ */ P(J5, [["render", tE]]), nE = window.Vuex.useStore, Ko = window.Vue.computed, oE = {
  name: "SxBlockTemplateStatusDialog",
  components: {
    MwCol: C,
    MwRow: T,
    MwIcon: be,
    MwDialog: je,
    BlockTemplateStatusIndicator: zp
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
    const { targetLanguageAutonym: t } = q(nE()), n = Ko(
      () => !e.isTemplateAdapted || o.value === 0 ? Al : Zn
    ), o = Ko(
      () => e.targetParamsCount / (e.sourceParamsCount + e.mandatoryMissingParamsCount) * 100
    ), s = ge(), a = Ko(() => {
      let u;
      return e.targetTemplateExists ? e.isTemplateAdapted ? o.value < 100 ? u = "cx-sx-block-template-mapping-status-title-partially-template" : u = "cx-sx-block-template-mapping-status-title-fully-template" : u = "cx-sx-block-template-mapping-status-title-unadapted-template" : u = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(u);
    }), i = Ko(() => {
      let u;
      return !e.targetTemplateExists || !e.isTemplateAdapted ? u = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? u = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : u = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(u);
    }), l = Ko(() => {
      let u = [];
      if (!e.targetTemplateExists)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            t.value
          ),
          icon: ef,
          color: Oe.gray500
        });
      else if (!e.isTemplateAdapted)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            e.sourceParamsCount
          ),
          icon: so,
          color: Oe.gray500
        });
      else if (o.value < 100)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            e.targetParamsCount,
            e.sourceParamsCount
          ),
          icon: Zn,
          color: Oe.blue600
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
          icon: Zn,
          color: Oe.blue600
        });
      }
      return e.mandatoryMissingParamsCount ? u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          e.mandatoryMissingParamsCount,
          t.value
        ),
        icon: qa,
        color: Oe.gray500
      }) : e.targetTemplateExists && e.isTemplateAdapted && e.optionalMissingParamsCount && u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          e.optionalMissingParamsCount,
          t.value
        ),
        icon: Nw,
        color: Oe.gray500
      }), u;
    });
    return {
      adaptationRatio: o,
      statusIcon: n,
      statusExplanation: i,
      statusText: a,
      mwIconCheck: Zn,
      mwIconInfo: Iw,
      notes: l
    };
  }
}, Yo = window.Vue.resolveComponent, Qo = window.Vue.openBlock, Da = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Wn = window.Vue.withCtx, Jo = window.Vue.createVNode, zr = window.Vue.toDisplayString, Rr = window.Vue.createElementVNode, sE = window.Vue.renderList, aE = window.Vue.Fragment, iE = window.Vue.createElementBlock, rE = { class: "pa-4" }, lE = ["textContent"], cE = ["textContent"];
function uE(e, t, n, o, s, a) {
  const i = Yo("block-template-status-indicator"), l = Yo("mw-icon"), u = Yo("mw-col"), g = Yo("mw-row"), r = Yo("mw-dialog");
  return Qo(), Da(r, {
    value: n.active,
    class: "sx-block-template-status-dialog",
    title: e.$i18n("cx-sx-publisher-preview-options-title"),
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.gray700,
    onInput: t[0] || (t[0] = (c) => e.$emit("update:active", c))
  }, {
    header: Wn(() => [
      Jo(g, {
        justify: "center",
        class: "mt-4"
      }, {
        default: Wn(() => [
          Jo(u, { shrink: "" }, {
            default: Wn(() => [
              n.targetTemplateExists ? (Qo(), Da(i, {
                key: 0,
                percentage: o.adaptationRatio,
                size: 40,
                "is-template-adapted": n.isTemplateAdapted,
                "stroke-width": 3
              }, null, 8, ["percentage", "is-template-adapted"])) : (Qo(), Da(l, {
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
    default: Wn(() => [
      Rr("div", rE, [
        Rr("h3", {
          textContent: zr(o.statusText)
        }, null, 8, lE),
        Rr("p", {
          class: "mt-6 text-small",
          textContent: zr(o.statusExplanation)
        }, null, 8, cE),
        (Qo(!0), iE(aE, null, sE(o.notes, (c, d) => (Qo(), Da(g, {
          key: d,
          align: "start",
          class: "mt-4"
        }, {
          default: Wn(() => [
            Jo(u, { shrink: "" }, {
              default: Wn(() => [
                Jo(l, {
                  class: "me-2",
                  icon: c.icon,
                  "icon-color": c.color
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 2
            }, 1024),
            Jo(u, {
              textContent: zr(c.text)
            }, null, 8, ["textContent"])
          ]),
          _: 2
        }, 1024))), 128))
      ])
    ]),
    _: 1
  }, 8, ["value", "title", "overlay-color"]);
}
const dE = /* @__PURE__ */ P(oE, [["render", uE]]);
const ce = window.Vue.unref, fe = window.Vue.createVNode, lt = window.Vue.withCtx, Or = window.Vue.toDisplayString, Cg = window.Vue.createTextVNode, gE = window.Vue.resolveDirective, kg = window.Vue.withDirectives, xg = window.Vue.createElementVNode, mE = window.Vue.normalizeClass, La = window.Vue.openBlock, bg = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const $g = window.Vue.createBlock, pE = window.Vue.normalizeProps, hE = window.Vue.guardReactiveProps, wE = { class: "block-template-adaptation-card__container pa-4" }, fE = ["textContent"], _E = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, ke = window.Vue.computed, vE = window.Vue.ref, SE = window.Vuex.useStore, Vg = window.Codex.CdxButton, Eg = window.Codex.CdxIcon, yE = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = SE(), { targetLanguageAutonym: n, currentMTProvider: o } = q(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = K(), i = ke(() => {
      var D;
      return ((D = s.value) == null ? void 0 : D.blockTemplateTranslatedContent) || a.value;
    }), l = ke(
      () => {
        var E;
        return (E = s.value) == null ? void 0 : E.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), u = ke(
      () => {
        var E;
        return !((E = t.state.application.mtRequestsPending) != null && E.includes(
          s.value.id
        ));
      }
    ), g = ge(), r = ke(
      // Strip HTML comments and return
      () => {
        var E, D;
        return ((D = (E = s.value) == null ? void 0 : E.sourceBlockTemplateName) == null ? void 0 : D.replace(
          /<\!--.*?-->/g,
          ""
        )) || g.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), c = ke(
      () => {
        var E, D;
        return (D = (E = s.value) == null ? void 0 : E.blockTemplateAdaptationInfo) == null ? void 0 : D[o.value];
      }
    ), d = ke(
      () => {
        var E, D;
        return ((E = c.value) == null ? void 0 : E.adapted) || !!((D = c.value) != null && D.partial);
      }
    ), m = ke(() => c.value ? "block-template-adaptation-card__body--" + (d.value ? "success" : "warning") : null), p = ke(() => c.value ? d.value ? g.i18n("sx-block-template-adaptation-card-edit-button-label") : g.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), h = ke(
      () => {
        var E;
        return Object.keys(((E = s.value) == null ? void 0 : E.sourceTemplateParams) || {}).length;
      }
    ), w = ke(() => {
      var D;
      const E = (D = s.value) == null ? void 0 : D.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(E || {});
    }), f = ke(() => w.value.length), _ = ke(() => {
      const E = B.value;
      return h.value + E === 0 ? 100 : f.value / (h.value + E) * 100 || 0;
    }), S = vE(!1), k = () => {
      S.value = !0;
    }, L = (E) => E.filter((D) => !w.value.includes(D)), B = ke(() => {
      var D;
      const E = ((D = c.value) == null ? void 0 : D.mandatoryTargetParams) || [];
      return L(E).length;
    }), R = ke(() => {
      var D;
      const E = ((D = c.value) == null ? void 0 : D.optionalTargetParams) || [];
      return L(E).length;
    });
    return (E, D) => {
      const O = gE("i18n");
      return La(), $g(ce(et), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: lt(() => [
          xg("div", wE, [
            fe(ce(T), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: lt(() => [
                fe(ce(C), { shrink: "" }, {
                  default: lt(() => [
                    fe(ce(Eg), {
                      icon: ce(HC),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                fe(ce(C), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: lt(() => [
                    Cg(Or(r.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            l.value ? (La(), bg("div", {
              key: 0,
              class: mE(["pa-4 mb-4", m.value])
            }, [
              fe(ce(T), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: lt(() => [
                  kg(fe(ce(C), { tag: "h5" }, null, 512), [
                    [O, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  fe(ce(C), { shrink: "" }, {
                    default: lt(() => [
                      fe(zp, {
                        percentage: _.value,
                        size: 20,
                        "is-template-adapted": d.value,
                        "stroke-width": 2,
                        onClick: k
                      }, null, 8, ["percentage", "is-template-adapted"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              xg("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: Or(l.value)
              }, null, 8, fE),
              fe(ce(Vg), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: D[0] || (D[0] = (F) => E.$emit("edit-translation", i.value))
              }, {
                default: lt(() => [
                  Cg(Or(p.value), 1)
                ]),
                _: 1
              })
            ], 2)) : u.value ? (La(), bg("div", _E, [
              fe(ce(T), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: lt(() => [
                  kg(fe(ce(C), { tag: "h5" }, null, 512), [
                    [O, [
                      ce(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  fe(ce(C), { shrink: "" }, {
                    default: lt(() => [
                      fe(ce(Vg), { weight: "quiet" }, {
                        default: lt(() => [
                          fe(ce(Eg), {
                            icon: ce(zC),
                            onClick: k
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
            ])) : (La(), $g(ce(tt), { key: 2 }))
          ]),
          fe(Ip, pE(hE(E.$attrs)), null, 16),
          fe(dE, {
            active: S.value,
            "onUpdate:active": D[1] || (D[1] = (F) => S.value = F),
            "source-params-count": h.value,
            "target-params-count": f.value,
            "mandatory-missing-params-count": B.value,
            "optional-missing-params-count": R.value,
            "is-template-adapted": d.value,
            "target-template-exists": !!l.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const CE = window.Vue.computed, kE = {
  name: "TranslatedSegmentCardHeader",
  components: { MwButtonGroup: _s },
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
    return { scopeOptions: CE(() => [
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
}, xE = window.Vue.resolveComponent, bE = window.Vue.createVNode, $E = window.Vue.openBlock, VE = window.Vue.createElementBlock, EE = { class: "translated-segment-card-header" };
function AE(e, t, n, o, s, a) {
  const i = xE("mw-button-group");
  return $E(), VE("div", EE, [
    bE(i, {
      items: o.scopeOptions,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const DE = /* @__PURE__ */ P(kE, [["render", AE]]);
const Jt = window.Vue.unref, Ta = window.Vue.createVNode, Hr = window.Vue.withCtx, LE = window.Vue.openBlock, TE = window.Vue.createBlock, BE = window.Vue.computed, Ag = window.Codex.CdxButton, Dg = window.Codex.CdxIcon, PE = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "skip-translation"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = K(), o = BE(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (LE(), TE(Jt(T), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: Hr(() => [
        Ta(Jt(Ag), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: Jt(n),
          onClick: a[0] || (a[0] = (i) => s.$emit("select-previous-segment"))
        }, {
          default: Hr(() => [
            Ta(Jt(Dg), { icon: Jt(Kl) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"]),
        Ta(Jt(Ag), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          onClick: a[1] || (a[1] = (i) => s.$emit("skip-translation"))
        }, {
          default: Hr(() => [
            Ta(Jt(Dg), { icon: Jt(Ls) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const FE = window.Vue.useCssVars, _e = window.Vue.createVNode, Lg = window.Vue.resolveDirective, ME = window.Vue.createElementVNode, jr = window.Vue.withDirectives, ae = window.Vue.unref, NE = window.Vue.normalizeStyle, Ba = window.Vue.openBlock, Tg = window.Vue.createElementBlock, UE = window.Vue.createCommentVNode, IE = window.Vue.normalizeClass, Ie = window.Vue.withCtx, zE = window.Vue.toDisplayString, RE = window.Vue.createTextVNode, Bg = window.Vue.createBlock, OE = window.Vue.normalizeProps, HE = window.Vue.guardReactiveProps, Lt = window.Vue.computed, jE = window.Vue.ref, qE = window.Vue.inject, GE = window.Vuex.useStore, WE = window.Codex.CdxButton, qr = window.Codex.CdxIcon, XE = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    FE((_) => ({
      "4929555c": f.value
    }));
    const t = jE("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = K(), { targetLanguage: a } = q(GE()), i = Lt(() => t.value === "sentence"), l = Lt(
      () => n.value.subSections.find(
        (_) => _.sentences.some(
          (S) => {
            var k;
            return S.id === ((k = o.value) == null ? void 0 : k.id);
          }
        )
      )
    ), u = Lt(() => {
      var _;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : i.value ? (_ = o.value) == null ? void 0 : _.mtProposedTranslationUsed : l.value.proposedContentForMTValidation;
    }), g = qE("colors"), r = g.gray200, c = g.red600, d = Lt(() => s.value ? n.value.translatedTitle : i.value ? o.value.translatedContent : l.value.translatedContent), m = Lt(
      () => sn.calculateScore(
        d.value,
        u.value,
        a.value
      )
    ), p = Lt(
      () => sn.getScoreStatus(m.value)
    ), h = Lt(
      () => `translated-segment-card__modification-stats__percentage--${p.value}`
    ), w = Lt(() => ({
      failure: m.value === 0 ? null : g.yellow700,
      warning: g.yellow700,
      success: g.green600
    })), f = Lt(
      () => w.value[p.value]
    );
    return (_, S) => {
      const k = Lg("i18n"), L = Lg("i18n-html");
      return Ba(), Bg(ae(et), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: Ie(() => [
          _e(ae(T), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: Ie(() => [
              _e(DE, {
                selection: t.value,
                "onUpdate:selection": S[0] || (S[0] = (B) => t.value = B)
              }, null, 8, ["selection"]),
              _e(ae(C), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: Ie(() => [
                  _e(ae(T), { class: "ma-0" }, {
                    default: Ie(() => [
                      _e(ae(C), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: Ie(() => [
                          jr(ME("h5", null, null, 512), [
                            [k, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          m.value === 0 ? jr((Ba(), Tg("p", {
                            key: 0,
                            style: NE({ color: ae(c) })
                          }, null, 4)), [
                            [k, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : jr((Ba(), Tg("p", {
                            key: 1,
                            class: IE(h.value)
                          }, null, 2)), [
                            [L, [
                              m.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      _e(ae(C), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: Ie(() => [
                          _e(ae(T), { class: "ma-0 ms-2" }, {
                            default: Ie(() => [
                              _e(ae(C), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: Ie(() => [
                                  _e(ae(qr), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ae(GC)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              _e(ae(C), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: Ie(() => [
                                  _e(ae(bm), {
                                    value: m.value,
                                    height: "4px",
                                    width: "64px",
                                    color: f.value,
                                    background: ae(r)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              _e(ae(C), { shrink: "" }, {
                                default: Ie(() => [
                                  _e(ae(qr), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ae(jC)
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
                  i.value ? (Ba(), Bg(ae(WE), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: S[1] || (S[1] = (B) => _.$emit("edit-translation", d.value))
                  }, {
                    default: Ie(() => [
                      _e(ae(qr), {
                        class: "me-1",
                        icon: ae(Gl)
                      }, null, 8, ["icon"]),
                      RE(" " + zE(_.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : UE("", !0)
                ]),
                _: 1
              }),
              _e(ae(C), { class: "translated-segment-card__actions" }, {
                default: Ie(() => [
                  _e(PE, OE(HE(_.$attrs)), null, 16)
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
}, KE = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = K(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = go(), { currentTranslation: s } = cn();
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
}, Rp = window.Vuex.useStore, YE = () => {
  const e = Rp(), { sourceLanguage: t, targetLanguage: n } = q(e);
  return () => y(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const o = yield Xa.fetchSupportedMTProviders(
      t.value,
      n.value
    );
    e.commit("mediawiki/addMtProviderGroup", o);
  });
}, QE = () => {
  const e = Rp(), { currentMTProvider: t, sourceLanguage: n, targetLanguage: o } = q(e), s = YE();
  return () => y(void 0, null, function* () {
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
}, JE = window.Vue.computed, ZE = (e) => {
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
}, eA = () => {
  const { selectedContentTranslationUnit: e } = K(), t = JE(
    () => e.value instanceof Ae
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && ZE(o);
  };
}, tA = (e, t) => {
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
}, nA = window.Vue.computed, Op = () => {
  const { currentTranslation: e } = cn(), { currentSourcePage: t } = qe();
  return nA(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, oA = window.Vuex.useStore, rc = () => {
  const e = oA(), { sourceSection: t, targetPageTitleForPublishing: n } = K(), { pageURLParameter: o } = M(), { sourceLanguage: s, targetLanguage: a } = q(e), i = Op();
  return () => {
    const l = n.value, u = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), g = `${i.value}_${t.value.id}`, r = t.value.getParallelCorporaUnits(g);
    r.forEach(
      (m) => tA(m, u)
    );
    const c = t.value.getTranslationProgress(a), d = e.getters["application/isSandboxTarget"];
    return He.saveTranslation({
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
}, sA = window.Vue.effectScope, aA = window.Vue.onScopeDispose, iA = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = sA(!0), n = o.run(() => e(...a))), aA(s), n);
}, rA = window.Vuex.useStore;
let Gr;
const lA = () => {
  const e = rA(), t = rc();
  let n = 1e3, o = 0;
  return Gr = Ql(() => t().then((a) => {
    a instanceof to ? (n *= o + 1, o++, setTimeout(Gr, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof ao)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), Gr;
}, Hp = iA(lA), cA = window.Vuex.useStore, uA = () => {
  const e = cA(), t = Hp(), { currentMTProvider: n } = q(e), { sourceSection: o, currentProposedTranslation: s } = K(), { selectNextTranslationUnit: a } = go();
  return () => y(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, dA = window.Vuex.useStore, gA = () => {
  const e = dA(), t = Hp();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, mA = window.Vuex.useStore, pA = window.Vue.computed, jp = () => {
  const e = mA(), t = me(), { currentTranslation: n } = cn(), { currentMTProvider: o, previousRoute: s } = q(e), { currentTargetPage: a } = qe(), {
    sourceLanguageURLParameter: i,
    targetLanguageURLParameter: l,
    pageURLParameter: u,
    sectionURLParameter: g
  } = M(), r = Nt(), c = pA(() => {
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
      var k;
      const w = t.currentRoute.value.meta.workflowStep, _ = t.getRoutes().find(
        (L) => L.name === s.value
      ), S = ((k = _ == null ? void 0 : _.meta) == null ? void 0 : k.workflowStep) || 0;
      return w > S ? r(le({
        event_type: "editor_open"
      }, c.value)) : Promise.resolve();
    },
    logEditorCloseEvent: () => r(le({
      event_type: "editor_close"
    }, c.value)),
    logEditorCloseWarnEvent: () => r(le({
      event_type: "editor_close_warn"
    }, c.value)),
    logEditorSegmentAddEvent: () => r(le({
      event_type: "editor_segment_add"
    }, c.value))
  };
};
const Z = window.Vue.unref, ze = window.Vue.createVNode, Tt = window.Vue.withCtx, hA = window.Vue.resolveDirective, Pg = window.Vue.createElementVNode, wA = window.Vue.withDirectives, fA = window.Vue.toDisplayString, _A = window.Vue.createTextVNode, vA = window.Vue.renderList, SA = window.Vue.Fragment, Zt = window.Vue.openBlock, Fg = window.Vue.createElementBlock, Xn = window.Vue.createBlock;
window.Vue.createCommentVNode;
const yA = window.Vue.normalizeClass, CA = window.Vue.normalizeStyle, kA = { class: "sx-sentence-selector__header-title mb-0" }, xA = { class: "sx-sentence-selector__section-contents px-4" }, Kn = window.Vue.computed, bA = window.Vue.nextTick, $A = window.Vue.onMounted, Pa = window.Vue.ref, Mg = window.Vue.watch, VA = window.Vuex.useStore, Ng = window.Codex.CdxButton, EA = window.Codex.CdxIcon, AA = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = Pa(!1), n = Pa(!1), o = Pa("100%"), s = VA(), { currentMTProvider: a } = q(s), {
      sourceLanguageURLParameter: i,
      targetLanguageURLParameter: l
    } = M(), { sourceSection: u, selectedContentTranslationUnit: g } = K(), r = Kn(
      () => s.state.application.translationDataLoadingCounter === 0
    ), c = Kn(
      () => {
        var v;
        return (v = u.value) == null ? void 0 : v.isSelectedTranslationUnitTranslated;
      }
    ), d = Kn(() => {
      var v;
      return (v = u.value) == null ? void 0 : v.subSections;
    }), m = Kn(
      () => {
        var v;
        return (v = u.value) == null ? void 0 : v.selectedTranslationUnitOriginalContent;
      }
    ), p = Kn(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: h,
      logEditorCloseEvent: w,
      logEditorCloseWarnEvent: f,
      logEditorSegmentAddEvent: _
    } = jp(), S = KE();
    QE()().then(h);
    const L = eA();
    $A(() => {
      Mg(
        r,
        () => y(this, null, function* () {
          r.value && (yield bA(), S(), L());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    }), Mg(g, L);
    const {
      selectNextTranslationUnit: B,
      selectPreviousTranslationUnit: R
    } = go(), E = uA(), D = () => {
      _(), E();
    }, O = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, F = me(), N = () => {
      const { autoSavePending: v } = s.state.application;
      if (v) {
        Pe.value = !0, f();
        return;
      }
      gt();
    }, { fetchTranslationsByStatus: ne } = Qa(), Q = gA(), { clearURLParameters: un } = M(), { currentTranslation: dn } = cn(), gt = () => y(this, null, function* () {
      ne("draft"), u.value.reset(), dn.value && (dn.value.restored = !1), w(), un(), Q(), yield F.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: nt,
      translateSelectedTranslationUnitForAllProviders: po
    } = ic(), gn = () => {
      ht.value || (t.value = !0, po());
    }, { getCurrentTitleByLanguage: mt } = Mt(), Be = (v, b) => {
      F.push({
        name: "sx-editor",
        state: {
          content: v,
          originalContent: m.value,
          title: mt(
            l.value,
            i.value
          ),
          isInitialEdit: b || null
        }
      });
    }, Ut = () => F.push({ name: "sx-publisher" }), pt = () => y(this, null, function* () {
      g.value ? yield nt(
        g.value.id,
        a.value
      ) : yield nt(0, a.value);
    }), ht = Kn(
      () => g.value instanceof Ae
    ), Pe = Pa(!1);
    return (v, b) => {
      const V = hA("i18n");
      return Zt(), Fg("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: CA(p.value)
      }, [
        ze(Z(T), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: Tt(() => [
            ze(Z(C), { shrink: "" }, {
              default: Tt(() => [
                ze(Z(Ng), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": v.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: N
                }, {
                  default: Tt(() => [
                    ze(Z(EA), { icon: Z(yp) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            ze(Z(C), {
              grow: "",
              class: "px-1"
            }, {
              default: Tt(() => [
                wA(Pg("h4", kA, null, 512), [
                  [V, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            ze(Z(C), {
              shrink: "",
              class: "px-3"
            }, {
              default: Tt(() => [
                ze(Z(Ng), {
                  disabled: !(Z(u) && Z(u).isTranslated),
                  onClick: Ut
                }, {
                  default: Tt(() => [
                    _A(fA(v.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        r.value ? (Zt(), Xn(Z(T), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: Tt(() => [
            ze(Z(C), {
              dir: Z(j.getDir)(Z(i)),
              lang: Z(i),
              class: "sx-sentence-selector__section"
            }, {
              default: Tt(() => [
                ze(i5),
                Pg("div", xA, [
                  (Zt(!0), Fg(SA, null, vA(d.value, (A) => (Zt(), Xn(Q5, {
                    id: A.id,
                    key: `sub-section-${A.id}`,
                    "sub-section": A,
                    onBounceTranslation: O
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !ht.value && c.value ? (Zt(), Xn(XE, {
              key: 0,
              onEditTranslation: b[0] || (b[0] = (A) => Be(A, !1)),
              onSkipTranslation: Z(B),
              onSelectPreviousSegment: Z(R)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : ht.value ? (Zt(), Xn(yE, {
              key: 2,
              onEditTranslation: Be,
              onApplyTranslation: D,
              onSkipTranslation: Z(B),
              onSelectPreviousSegment: Z(R)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : (Zt(), Xn(I5, {
              key: 1,
              class: yA({ "mb-0": !n.value }),
              onConfigureOptions: gn,
              onEditTranslation: b[1] || (b[1] = (A) => Be(A, !0)),
              onApplyTranslation: D,
              onSkipTranslation: Z(B),
              onSelectPreviousSegment: Z(R),
              onRetryTranslation: pt
            }, null, 8, ["class", "onSkipTranslation", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Zt(), Xn(Z(T), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: Tt(() => [
            ze(Z(tt), { class: "mt-0" })
          ]),
          _: 1
        })),
        ze(XV, {
          active: t.value,
          "onUpdate:active": b[2] || (b[2] = (A) => t.value = A)
        }, null, 8, ["active"]),
        ze(kV, {
          modelValue: Pe.value,
          "onUpdate:modelValue": b[3] || (b[3] = (A) => Pe.value = A),
          onDiscardTranslation: gt
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const DA = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: AA
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, LA = window.Vue.resolveComponent, TA = window.Vue.createVNode, BA = window.Vue.normalizeClass, PA = window.Vue.openBlock, FA = window.Vue.createElementBlock;
function MA(e, t, n, o, s, a) {
  const i = LA("sx-sentence-selector");
  return PA(), FA("main", {
    class: BA(["sx-sentence-selector-view", a.classes])
  }, [
    TA(i)
  ], 2);
}
const NA = /* @__PURE__ */ P(DA, [["render", MA]]), UA = `<svg width="375" height="200" viewBox="0 0 375 200"
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
const zA = window.Vue.resolveDirective, Fa = window.Vue.withDirectives, Qe = window.Vue.openBlock, Bt = window.Vue.createElementBlock, Ma = window.Vue.createCommentVNode, Na = window.Vue.Transition, Sn = window.Vue.withCtx, Yn = window.Vue.createVNode, Zo = window.Vue.createElementVNode, yn = window.Vue.unref, RA = window.Vue.renderList, OA = window.Vue.Fragment, HA = window.Vue.normalizeClass, Ug = window.Vue.createBlock, jA = window.Vue.toDisplayString, qA = window.Vue.createTextVNode, GA = { class: "sx-quick-tutorial" }, WA = { class: "sx-quick-tutorial__main-point py-9 px-6" }, XA = {
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
}, sD = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, Ig = window.Vue.ref, zg = window.Codex.CdxButton, aD = window.Codex.CdxIcon, iD = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = Ig(2), n = Ig(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (l) => l === n.value, a = me(), i = () => a.push({ name: "sx-sentence-selector" });
    return (l, u) => {
      const g = zA("i18n");
      return Qe(), Bt("section", GA, [
        Yn(yn(T), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: Sn(() => [
            Zo("section", WA, [
              Yn(Na, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Sn(() => [
                  s(1) ? Fa((Qe(), Bt("h2", XA, null, 512)), [
                    [g, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? Fa((Qe(), Bt("h2", KA, null, 512)), [
                    [g, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : Ma("", !0)
                ]),
                _: 1
              })
            ]),
            Zo("section", YA, [
              Yn(Na, { name: "mw-ui-animation-slide-left" }, {
                default: Sn(() => [
                  s(1) ? (Qe(), Bt("div", {
                    key: "illustration-1",
                    innerHTML: yn(IA)
                  }, null, 8, QA)) : s(2) ? (Qe(), Bt("div", {
                    key: "illustration-2",
                    innerHTML: yn(UA)
                  }, null, 8, JA)) : Ma("", !0)
                ]),
                _: 1
              })
            ]),
            Zo("div", ZA, [
              (Qe(!0), Bt(OA, null, RA(t.value, (r) => (Qe(), Bt("span", {
                key: `dot-${r}`,
                class: HA(["dot mx-1", { "dot-active": s(r) }]),
                role: "button",
                onClick: (c) => n.value = r
              }, null, 10, eD))), 128))
            ]),
            Zo("section", tD, [
              Yn(Na, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Sn(() => [
                  s(1) ? Fa((Qe(), Bt("h3", nD, null, 512)), [
                    [g, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? Fa((Qe(), Bt("h3", oD, null, 512)), [
                    [g, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : Ma("", !0)
                ]),
                _: 1
              })
            ]),
            Zo("div", sD, [
              Yn(Na, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Sn(() => [
                  s(1) ? (Qe(), Ug(yn(zg), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": l.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: Sn(() => [
                      Yn(yn(aD), { icon: yn(Ls) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (Qe(), Ug(yn(zg), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: i
                  }, {
                    default: Sn(() => [
                      qA(jA(l.$i18n("sx-quick-tutorial-translate-button-label")), 1)
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
function mD(e, t, n, o, s, a) {
  const i = lD("sx-quick-tutorial");
  return dD(), gD("main", {
    class: uD(["sx-quick-tutorial-view", a.classes])
  }, [
    cD(i)
  ], 2);
}
const pD = /* @__PURE__ */ P(rD, [["render", mD]]);
const Rg = window.Vue.ref, hD = window.Vue.onMounted;
function wD(e, t) {
  const n = e.getElementsByTagName("a");
  for (const o of n)
    o.href = G.getPageUrl(t, o.title), o.target = "_blank";
}
const fD = {
  name: "SxEditorOriginalContent",
  components: { MwExpandableContent: A0 },
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
    const t = Rg(null), n = Rg(0), o = () => parseFloat(
      document.defaultView.getComputedStyle(t.value, null).getPropertyValue("line-height")
    );
    return hD(() => {
      n.value = 2 * o(), wD(t.value, e.language);
    }), {
      originalContentRef: t,
      twoLinesHeight: n
    };
  }
}, _D = window.Vue.resolveDirective, Og = window.Vue.createElementVNode, vD = window.Vue.withDirectives, SD = window.Vue.resolveComponent, yD = window.Vue.withCtx, CD = window.Vue.createVNode, kD = window.Vue.openBlock, xD = window.Vue.createElementBlock, bD = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, $D = { class: "sx-editor__original-content-panel__header mb-2" }, VD = ["lang", "dir", "innerHTML"];
function ED(e, t, n, o, s, a) {
  const i = SD("mw-expandable-content"), l = _D("i18n");
  return kD(), xD("section", bD, [
    vD(Og("h5", $D, null, 512), [
      [l, void 0, "cx-sx-editor-original-panel-label"]
    ]),
    CD(i, {
      "min-height": o.twoLinesHeight,
      scroll: ""
    }, {
      default: yD(() => [
        Og("div", {
          ref: "originalContentRef",
          class: "sx-editor__original-content-panel__body",
          lang: n.language,
          dir: n.dir,
          innerHTML: n.originalContent
        }, null, 8, VD)
      ]),
      _: 1
    }, 8, ["min-height"])
  ]);
}
const AD = /* @__PURE__ */ P(fD, [["render", ED]]), DD = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const Wr = window.Vue.computed, LD = window.Vuex.useStore, TD = {
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
    const { targetLanguage: t } = q(LD()), n = Wr(
      () => sn.calculateScore(
        e.editedTranslation,
        e.proposedTranslation,
        t.value
      )
    ), o = Wr(() => {
      const a = sn.getScoreStatus(n.value);
      return a === "failure" ? n.value === 0 ? "failure" : "warning" : a;
    }), s = Wr(
      () => `sx-editor__feedback-overlay-content__stats--${o.value}`
    );
    return {
      happyRobotSVG: DD,
      modificationPercentageClass: s,
      mtScore: n
    };
  }
}, es = window.Vue.createElementVNode, Hg = window.Vue.resolveDirective, Xr = window.Vue.withDirectives, BD = window.Vue.normalizeClass, PD = window.Vue.openBlock, FD = window.Vue.createElementBlock, MD = window.Vue.createCommentVNode, ND = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, UD = { class: "sx-editor__feedback-overlay-content px-4" }, ID = ["innerHTML"], zD = { class: "sx-editor__feedback-overlay-content__title" }, RD = { class: "sx-editor__feedback-overlay-content__clarification mb-1" };
function OD(e, t, n, o, s, a) {
  const i = Hg("i18n"), l = Hg("i18n-html");
  return n.showFeedback ? (PD(), FD("div", ND, [
    es("div", UD, [
      es("div", {
        class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
        innerHTML: o.happyRobotSVG
      }, null, 8, ID),
      Xr(es("h2", zD, null, 512), [
        [i, void 0, "sx-editor-feedback-overlay-title"]
      ]),
      Xr(es("p", RD, null, 512), [
        [i, void 0, "sx-editor-feedback-overlay-clarification"]
      ]),
      Xr(es("p", {
        class: BD(["sx-editor__feedback-overlay-content__stats", o.modificationPercentageClass])
      }, null, 2), [
        [l, [o.mtScore], "sx-editor-feedback-overlay-stats"]
      ])
    ])
  ])) : MD("", !0);
}
const HD = /* @__PURE__ */ P(TD, [["render", OD]]), jD = window.Vuex.useStore, qD = () => {
  const e = jD(), t = rc(), { selectNextTranslationUnit: n } = go(), { sourceSection: o, selectedContentTranslationUnit: s } = K(), { getCurrentTitleByLanguage: a } = Mt();
  return (i) => y(void 0, null, function* () {
    const l = document.createElement("div");
    l.innerHTML = i, l.querySelectorAll(".sx-edit-dummy-node").forEach((c) => c.remove()), i = l.innerHTML;
    const { sourceLanguage: u, targetLanguage: g, currentMTProvider: r } = e.state.application;
    s.value instanceof Ae && (i = (yield Wm(
      i,
      a(g, u),
      g
    )) || i), o.value.setTranslationForSelectedTranslationUnit(
      i,
      r
    ), t(), n();
  });
};
const Ve = window.Vue.unref, Kr = window.Vue.openBlock, Yr = window.Vue.createBlock, jg = window.Vue.createCommentVNode, qg = window.Vue.createVNode, GD = window.Vue.createElementVNode, WD = window.Vue.withCtx, XD = { class: "sx-editor__editing-surface-container grow" }, Qr = window.Vue.ref, KD = window.Vue.computed, YD = window.Vuex.useStore, QD = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Qr(!1), o = me(), s = YD(), a = () => n.value = !0, i = () => o.replace({ name: t.fromRoute }), { isFinalEdit: l, isInitialEdit: u, content: g, originalContent: r, title: c } = history.state, d = Qr(null), m = Qr(!1), { logEditorSegmentAddEvent: p } = jp(), { targetLanguage: h, sourceLanguage: w } = q(s), { sourceSection: f } = K(), _ = KD(
      () => sn.calculateScore(
        d.value,
        g,
        h.value
      )
    ), S = qD(), k = (L) => y(this, null, function* () {
      d.value = L, m.value = !0;
      const B = new Promise((E) => setTimeout(E, 2e3));
      let R = Promise.resolve();
      l ? f.value.editedTranslation = L : (_.value === 0 && u && p(), R = S(L)), yield Promise.all([B, R]), m.value = !1, i();
    });
    return (L, B) => (Kr(), Yr(Ve(T), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: WD(() => [
        Ve(r) ? (Kr(), Yr(AD, {
          key: 0,
          language: Ve(w),
          dir: Ve(j.getDir)(Ve(w)),
          "original-content": Ve(r)
        }, null, 8, ["language", "dir", "original-content"])) : jg("", !0),
        n.value ? jg("", !0) : (Kr(), Yr(Ve(tt), { key: 1 })),
        GD("div", XD, [
          qg(HD, {
            "edited-translation": d.value,
            "show-feedback": m.value,
            "proposed-translation": Ve(g)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          qg(Wb, {
            content: Ve(g),
            language: Ve(h),
            dir: Ve(j.getDir)(Ve(h)),
            title: Ve(c),
            onReady: a,
            onClose: i,
            onEditCompleted: k
          }, null, 8, ["content", "language", "dir", "title"])
        ])
      ]),
      _: 1
    }));
  }
};
const JD = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: QD
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
}, ZD = window.Vue.resolveComponent, eL = window.Vue.createVNode, tL = window.Vue.normalizeClass, nL = window.Vue.openBlock, oL = window.Vue.createElementBlock;
function sL(e, t, n, o, s, a) {
  const i = ZD("sx-editor");
  return nL(), oL("main", {
    class: tL(["sx-editor-view", a.classes])
  }, [
    eL(i, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const aL = /* @__PURE__ */ P(JD, [["render", sL]]);
const ct = window.Vue.unref, Cn = window.Vue.createVNode, ts = window.Vue.withCtx, iL = window.Vue.resolveDirective, rL = window.Vue.withDirectives, lL = window.Vue.openBlock, cL = window.Vue.createBlock, Gg = window.Codex.CdxButton, Wg = window.Codex.CdxIcon, uL = {
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
      const a = iL("i18n");
      return lL(), cL(ct(T), { class: "ma-0 sx-publisher__header" }, {
        default: ts(() => [
          Cn(ct(C), {
            shrink: "",
            class: "me-2"
          }, {
            default: ts(() => [
              Cn(ct(Gg), {
                class: "px-3",
                weight: "quiet",
                onClick: n
              }, {
                default: ts(() => [
                  Cn(ct(Wg), { icon: ct(uo) }, null, 8, ["icon"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          rL(Cn(ct(C), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          Cn(ct(C), { shrink: "" }, {
            default: ts(() => [
              Cn(ct(Gg), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                onClick: s[0] || (s[0] = (i) => o.$emit("publish-translation"))
              }, {
                default: ts(() => [
                  Cn(ct(Wg), { icon: ct(NC) }, null, 8, ["icon"])
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
}, dL = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, gL = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, Xg = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const mL = {
  name: "SxPublisherAnimationDialog",
  components: { MwDialog: je, MwRow: T, MwCol: C },
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
        svg: dL,
        title: e.$i18n("cx-sx-publisher-animation-publishing-indicator-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: gL,
        title: e.$i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: Xg,
        title: e.$i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: Xg,
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
}, Jr = window.Vue.createElementVNode, Kg = window.Vue.toDisplayString, Zr = window.Vue.resolveComponent, el = window.Vue.withCtx, Yg = window.Vue.createVNode, pL = window.Vue.openBlock, hL = window.Vue.createBlock, wL = window.Vue.createCommentVNode, fL = ["innerHTML"], _L = ["textContent"], vL = ["textContent"];
function SL(e, t, n, o, s, a) {
  const i = Zr("mw-col"), l = Zr("mw-row"), u = Zr("mw-dialog");
  return n.active ? (pL(), hL(u, {
    key: 0,
    "overlay-opacity": 0.85,
    header: !1,
    class: "sx-publisher__publish-animation"
  }, {
    default: el(() => [
      Yg(l, { class: "ma-4" }, {
        default: el(() => [
          Yg(i, null, {
            default: el(() => [
              Jr("div", {
                class: "sx-publisher__publish-animation-icon mb-4",
                innerHTML: a.animationSvg
              }, null, 8, fL),
              Jr("h2", {
                textContent: Kg(a.animationTitle)
              }, null, 8, _L),
              Jr("p", {
                class: "ma-0",
                textContent: Kg(a.animationSubtitle)
              }, null, 8, vL)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  })) : wL("", !0);
}
const yL = /* @__PURE__ */ P(mL, [["render", SL]]);
const Ee = window.Vue.unref, Je = window.Vue.createVNode, Pt = window.Vue.withCtx, CL = window.Vue.resolveDirective, kL = window.Vue.withDirectives, Qg = window.Vue.toDisplayString, xL = window.Vue.createTextVNode, tl = window.Vue.openBlock, Jg = window.Vue.createElementBlock, bL = window.Vue.createCommentVNode, qp = window.Vue.createElementVNode, $L = window.Vue.createBlock, VL = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, EL = ["src"], AL = ["textContent"], DL = /* @__PURE__ */ qp("p", { class: "mt-0" }, null, -1), LL = window.Vue.computed, TL = window.Vue.inject, BL = window.Vue.ref, Zg = window.Codex.CdxButton, PL = window.Codex.CdxIcon, FL = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: jm,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = BL(""), s = () => n("close"), a = () => n("publish", o.value), i = TL("breakpoints"), l = LL(() => i.value.mobile);
    return (u, g) => {
      const r = CL("i18n");
      return e.active && e.captchaDetails ? (tl(), $L(Ee(je), {
        key: 0,
        "overlay-opacity": 0.65,
        fullscreen: l.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: Pt(() => [
          Je(Ee(T), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: Pt(() => [
              Je(Ee(C), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: Pt(() => [
                  Je(Ee(Zg), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    onClick: s
                  }, {
                    default: Pt(() => [
                      Je(Ee(PL), { icon: Ee(uo) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              kL(Je(Ee(C), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [r, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              Je(Ee(C), {
                shrink: "",
                class: "justify-center"
              }, {
                default: Pt(() => [
                  Je(Ee(Zg), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: Pt(() => [
                      xL(Qg(u.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Je(Ee(ja))
        ]),
        default: Pt(() => [
          qp("div", VL, [
            e.captchaDetails.type === "image" ? (tl(), Jg("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, EL)) : (tl(), Jg("p", {
              key: 1,
              textContent: Qg(e.captchaDetails.question)
            }, null, 8, AL)),
            DL,
            Je(Ee(T), { class: "ma-0" }, {
              default: Pt(() => [
                Je(Ee(C), null, {
                  default: Pt(() => [
                    Je(Ee(Ll), {
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
      }, 8, ["fullscreen"])) : bL("", !0);
    };
  }
};
const kn = window.Vue.unref, ns = window.Vue.createVNode, Ua = window.Vue.withCtx, xn = window.Vue.createElementVNode, ML = window.Vue.resolveDirective, NL = window.Vue.withDirectives, UL = window.Vue.renderList, em = window.Vue.Fragment, nl = window.Vue.openBlock, tm = window.Vue.createElementBlock, IL = window.Vue.toDisplayString, zL = window.Vue.normalizeClass, RL = window.Vue.createBlock, OL = { class: "mw-ui-dialog__header" }, HL = { class: "row ma-0 px-4 py-3" }, jL = { class: "col shrink justify-center" }, qL = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, GL = { class: "mb-0" }, WL = { class: "pa-4" }, XL = ["textContent"], KL = window.Vuex.useStore, os = window.Vue.computed, YL = window.Codex.CdxButton, QL = window.Codex.CdxIcon, JL = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = KL(), s = os(() => o.state.application.publishTarget), a = os(() => o.state.translator.isAnon), i = ge(), { sourceSection: l } = K(), u = os(
      () => l.value.isLeadSection ? i.i18n("cx-sx-publisher-lead-section-option-label") : i.i18n("cx-sx-publisher-new-section-option-label")
    ), g = os(
      () => l.value.isLeadSection ? i.i18n("cx-sx-publisher-lead-section-option-details") : i.i18n("cx-sx-publisher-new-section-option-details")
    ), r = os(() => [
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
      const w = ML("i18n");
      return nl(), RL(kn(je), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: p.$i18n("cx-sx-publisher-preview-options-title"),
        "overlay-opacity": 0.7,
        "overlay-color": p.$mwui.colors.gray700,
        onInput: h[0] || (h[0] = (f) => p.$emit("update:active", f)),
        onClose: d
      }, {
        header: Ua(() => [
          xn("div", OL, [
            xn("div", HL, [
              xn("div", jL, [
                ns(kn(YL), {
                  class: "pa-0",
                  weight: "quiet",
                  onClick: d
                }, {
                  default: Ua(() => [
                    ns(kn(QL), { icon: kn(yp) }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              xn("div", qL, [
                NL(xn("h4", GL, null, 512), [
                  [w, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            ns(kn(ja))
          ])
        ]),
        default: Ua(() => [
          xn("div", WL, [
            ns(kn(a0), {
              value: s.value,
              name: "publish-options",
              onInput: m
            }, {
              default: Ua(() => [
                (nl(!0), tm(em, null, UL(r.value, (f, _) => (nl(), tm(em, {
                  key: f.label
                }, [
                  ns(kn(hl), {
                    class: "pa-0 my-1",
                    label: f.label,
                    "input-value": f.value,
                    disabled: f.disabled
                  }, null, 8, ["label", "input-value", "disabled"]),
                  xn("p", {
                    class: zL(["complementary ms-7 mt-0", c(_)]),
                    textContent: IL(f.details)
                  }, null, 10, XL)
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
const Ze = window.Vue.unref, bn = window.Vue.createVNode, ZL = window.Vue.resolveDirective, nm = window.Vue.withDirectives, Ia = window.Vue.openBlock, om = window.Vue.createElementBlock, eT = window.Vue.createCommentVNode, sm = window.Vue.toDisplayString, ol = window.Vue.createElementVNode, Qn = window.Vue.withCtx, am = window.Vue.createBlock, tT = window.Vue.Fragment, nT = window.Vue.normalizeClass, oT = { class: "sx-publisher__review-info__content" }, sT = {
  key: 0,
  class: "complementary ma-0"
}, aT = ["textContent"], iT = ["textContent"], en = window.Vue.computed, im = window.Vue.ref, rT = window.Vue.watch, rm = window.Codex.CdxButton, sl = window.Codex.CdxIcon, lT = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = im(0), o = im(null);
    rT(o, () => {
      var w;
      const h = (w = o.value) == null ? void 0 : w.$el;
      if (h instanceof HTMLElement) {
        const f = h.querySelector("a");
        f && f.setAttribute("target", "_blank");
      }
    });
    const s = en(
      () => {
        var h;
        return (h = t.publishFeedbackMessages) == null ? void 0 : h[n.value];
      }
    ), a = en(() => {
      var h;
      return ((h = s.value) == null ? void 0 : h.status) || "default";
    }), i = en(() => {
      switch (a.value) {
        case "warning":
          return Sp;
        case "error":
          return FC;
        default:
          return IC;
      }
    }), l = en(() => a.value === "default"), u = en(
      () => l.value ? "notice" : a.value
    ), g = en(
      () => `sx-publisher__review-info--${u.value}`
    ), r = ge(), c = en(() => {
      var h;
      return (h = s.value) == null ? void 0 : h.text;
    }), d = en(
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
      const f = ZL("i18n-html");
      return Ia(), am(Ze(Df), {
        type: u.value,
        class: nT(["sx-publisher__review-info ma-0 pa-4", g.value]),
        inline: l.value
      }, {
        icon: Qn(() => [
          bn(Ze(sl), {
            icon: i.value,
            class: "shrink mw-ui-message__icon items-start me-1"
          }, null, 8, ["icon"])
        ]),
        default: Qn(() => [
          ol("div", oT, [
            a.value === "default" ? nm((Ia(), om("p", sT, null, 512)), [
              [f, void 0, "cx-sx-publisher-review-info"]
            ]) : (Ia(), om(tT, { key: 1 }, [
              ol("h5", {
                textContent: sm(d.value)
              }, null, 8, aT),
              ol("p", {
                textContent: sm(c.value)
              }, null, 8, iT),
              bn(Ze(T), {
                justify: "between",
                class: "ma-0"
              }, {
                default: Qn(() => [
                  nm(bn(Ze(C), {
                    ref_key: "learnMoreContainer",
                    ref: o,
                    class: "sx-publisher__review-info__learn-more-anchor"
                  }, null, 512), [
                    [f, void 0, "cx-sx-publisher-review-info-learn-more"]
                  ]),
                  e.publishFeedbackMessages.length > 1 ? (Ia(), am(Ze(C), {
                    key: 0,
                    class: "sx-publisher__review-info__navigation-buttons justify-end",
                    align: "center"
                  }, {
                    default: Qn(() => [
                      bn(Ze(rm), {
                        weight: "quiet",
                        class: "pa-0 me-1",
                        onClick: m
                      }, {
                        default: Qn(() => [
                          bn(Ze(sl), { icon: Ze(Kl) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }),
                      bn(Ze(rm), {
                        weight: "quiet",
                        class: "pa-0 ms-1",
                        onClick: p
                      }, {
                        default: Qn(() => [
                          bn(Ze(sl), { icon: Ze(Ls) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : eT("", !0)
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
}, cT = (e) => {
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
}, lm = window.Vue.ref, uT = window.Vuex.useStore, dT = () => {
  const e = uT(), { pageURLParameter: t } = M(), { sourceSection: n, targetPageTitleForPublishing: o } = K(), s = Op(), a = lm(!1), i = lm("pending"), l = () => a.value = !1, u = rc(), g = (c, d) => y(void 0, null, function* () {
    const m = yield u();
    if (m instanceof to)
      return { publishFeedbackMessage: m, targetUrl: null };
    const p = m, {
      /** @type {PageSection} */
      sourceLanguage: h,
      targetLanguage: w
    } = e.state.application, f = o.value, _ = e.getters["application/isSandboxTarget"], S = {
      html: cT(n.value.translationHtml),
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
    return c && (S.captchaId = c, S.captchaWord = d), He.publishTranslation(S);
  });
  return {
    closePublishDialog: l,
    doPublish: (c = null, d = null) => y(void 0, null, function* () {
      i.value = "pending", a.value = !0;
      let m;
      try {
        m = yield g(
          d == null ? void 0 : d.id,
          c
        );
      } catch (p) {
        if (p instanceof ao)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw p;
      }
      return m;
    }),
    isPublishDialogActive: a,
    publishStatus: i
  };
}, gT = window.Vue.computed, mT = () => {
  const e = me(), { sourceSection: t } = K(), { getCurrentTitleByLanguage: n } = Mt(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = M(), a = gT(
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
}, pT = window.Vuex.useStore, hT = () => {
  const e = pT(), { targetLanguage: t } = q(e), { sourceSection: n } = K();
  return () => {
    const o = sn.getMTScoreForPageSection(
      n.value,
      t.value
    ), s = sn.getScoreStatus(o);
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
}, wT = window.Vue.ref, fT = window.Vue.computed, _T = () => {
  const e = hT(), t = wT([]), n = fT(
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
    initializePublishFeedbackMessages: () => y(void 0, null, function* () {
      const i = yield e();
      i && t.value.push(i);
    })
  };
}, vT = window.Vuex.useStore, ST = () => {
  const e = vT(), { currentSourcePage: t } = qe(), { sourceLanguage: n, targetLanguage: o } = q(e), { sourceSection: s, targetPageTitleForPublishing: a } = K();
  return (i) => y(void 0, null, function* () {
    const l = a.value, u = e.getters["application/isSandboxTarget"], g = t.value.title, r = new mw.Title(g), c = mw.config.get("wgNamespaceIds");
    if (s.value.isLeadSection && !u && r.getNamespaceId() !== c.user)
      try {
        yield Xa.addWikibaseLink(
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
}, cm = window.Vue.ref, yT = () => {
  const e = cm(!1), t = cm(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const re = window.Vue.unref, xe = window.Vue.createVNode, CT = window.Vue.resolveDirective, ss = window.Vue.createElementVNode, kT = window.Vue.withDirectives, Jn = window.Vue.withCtx, xT = window.Vue.openBlock, bT = window.Vue.createElementBlock, $T = { class: "sx-publisher" }, VT = { class: "sx-publisher__publish-panel pa-4" }, ET = { class: "mb-2" }, AT = ["innerHTML"], DT = { class: "sx-publisher__section-preview pa-5" }, LT = ["innerHTML"], um = window.Vue.computed, TT = window.Vue.onMounted, BT = window.Vue.ref, PT = window.Vue.watch, FT = window.Vuex.useStore, dm = window.Codex.CdxButton, gm = window.Codex.CdxIcon, MT = {
  __name: "SXPublisher",
  setup(e) {
    const t = FT(), { sourceSection: n } = K(), o = um(() => {
      var E;
      return (E = n.value) == null ? void 0 : E.title;
    }), s = ge(), a = um(() => t.getters["application/isSandboxTarget"] ? s.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : n.value.isLeadSection ? s.i18n("cx-sx-publisher-publish-panel-lead-section-result") : s.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: i,
      captchaDialogOn: l,
      handleCaptchaError: u,
      onCaptchaDialogClose: g
    } = yT(), {
      publishFeedbackMessages: r,
      isPublishingDisabled: c,
      addPublishFeedbackMessage: d,
      clearPublishFeedbackMessages: m,
      initializePublishFeedbackMessages: p
    } = _T(), h = ST(), { doPublish: w, isPublishDialogActive: f, publishStatus: _, closePublishDialog: S } = dT(), k = (E = null) => y(this, null, function* () {
      const D = yield w(E, i);
      if (!D)
        return;
      const { publishFeedbackMessage: O, targetUrl: F } = D;
      if (u(O)) {
        S();
        return;
      } else
        O && d(O);
      _.value = c.value ? "failure" : "success", setTimeout(() => {
        if (c.value) {
          S();
          return;
        }
        h(F);
      }, 1e3);
    });
    TT(() => p());
    const L = mT(), B = BT(!1), R = () => B.value = !0;
    return PT(B, (E) => {
      E || m();
    }), (E, D) => {
      const O = CT("i18n");
      return xT(), bT("section", $T, [
        xe(uL, {
          "is-publishing-disabled": re(c),
          onPublishTranslation: k
        }, null, 8, ["is-publishing-disabled"]),
        ss("div", VT, [
          kT(ss("h5", ET, null, 512), [
            [O, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          ss("h6", {
            class: "mb-2",
            innerHTML: a.value
          }, null, 8, AT),
          xe(re(T), {
            justify: "end",
            class: "ma-0"
          }, {
            default: Jn(() => [
              xe(re(C), { shrink: "" }, {
                default: Jn(() => [
                  xe(re(dm), {
                    weight: "quiet",
                    onClick: R
                  }, {
                    default: Jn(() => [
                      xe(re(gm), { icon: re(qC) }, null, 8, ["icon"])
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
        xe(lT, { "publish-feedback-messages": re(r) }, null, 8, ["publish-feedback-messages"]),
        ss("section", DT, [
          xe(re(T), { class: "pb-5 ma-0" }, {
            default: Jn(() => [
              xe(re(C), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                innerHTML: o.value
              }, null, 8, ["innerHTML"]),
              xe(re(C), { shrink: "" }, {
                default: Jn(() => [
                  xe(re(dm), {
                    weight: "quiet",
                    onClick: re(L)
                  }, {
                    default: Jn(() => [
                      xe(re(gm), { icon: re(Gl) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          ss("div", {
            innerHTML: re(n).translationHtml
          }, null, 8, LT)
        ]),
        xe(JL, {
          active: B.value,
          "onUpdate:active": D[0] || (D[0] = (F) => B.value = F)
        }, null, 8, ["active"]),
        xe(FL, {
          active: re(l),
          "captcha-details": re(i),
          onClose: re(g),
          onPublish: D[1] || (D[1] = (F) => k(F))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        xe(yL, {
          active: re(f),
          status: re(_)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const NT = {
  name: "SxPublisherView",
  components: {
    SxPublisher: MT
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, UT = window.Vue.resolveComponent, IT = window.Vue.createVNode, zT = window.Vue.normalizeClass, RT = window.Vue.openBlock, OT = window.Vue.createElementBlock;
function HT(e, t, n, o, s, a) {
  const i = UT("sx-publisher");
  return RT(), OT("main", {
    class: zT(["sx-publisher-view", a.classes])
  }, [
    IT(i)
  ], 2);
}
const jT = /* @__PURE__ */ P(NT, [["render", HT]]);
const qT = {
  name: "SxSearchArticleSuggestion",
  components: { MwThumbnail: Tl, MwIcon: be, MwRow: T, MwCol: C },
  props: {
    suggestion: {
      type: ro,
      required: !0
    }
  },
  setup(e) {
    return { mwIconStar: Ow, mwIconLanguage: qw, mwIconArticle: Dl, getDir: j.getDir };
  }
}, za = window.Vue.resolveComponent, tn = window.Vue.createVNode, $n = window.Vue.withCtx, al = window.Vue.toDisplayString, il = window.Vue.createElementVNode, GT = window.Vue.openBlock, WT = window.Vue.createBlock, XT = ["textContent"], KT = ["textContent"], YT = ["textContent"];
function QT(e, t, n, o, s, a) {
  const i = za("mw-thumbnail"), l = za("mw-col"), u = za("mw-icon"), g = za("mw-row");
  return GT(), WT(g, {
    class: "cx-search-suggestion pt-3 ma-0",
    align: "normal",
    lang: n.suggestion.language,
    dir: o.getDir(n.suggestion.language)
  }, {
    default: $n(() => [
      tn(l, { shrink: "" }, {
        default: $n(() => [
          tn(i, {
            class: "cx-search-suggestion__thumbnail",
            thumbnail: n.suggestion.thumbnail,
            "thumbnail-size": 56,
            "placeholder-icon-size": 30
          }, null, 8, ["thumbnail"])
        ]),
        _: 1
      }),
      tn(l, { class: "ms-4" }, {
        default: $n(() => [
          tn(g, {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: $n(() => [
              tn(l, {
                shrink: "",
                class: "mb-1"
              }, {
                default: $n(() => [
                  il("h5", {
                    class: "my-0 cx-search-suggestion__source-title",
                    textContent: al(n.suggestion.title)
                  }, null, 8, XT)
                ]),
                _: 1
              }),
              tn(l, {
                shrink: "",
                class: "mb-1"
              }, {
                default: $n(() => [
                  il("p", {
                    class: "ma-0 cx-search-suggestion__source-description complementary",
                    textContent: al(n.suggestion.description)
                  }, null, 8, KT)
                ]),
                _: 1
              }),
              tn(l, {
                class: "cx-search-suggestion__languages",
                shrink: "",
                align: "center"
              }, {
                default: $n(() => [
                  tn(u, {
                    icon: o.mwIconLanguage,
                    size: 16,
                    class: "me-2"
                  }, null, 8, ["icon"]),
                  il("small", {
                    textContent: al(n.suggestion.langLinksCount)
                  }, null, 8, YT)
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
const Gp = /* @__PURE__ */ P(qT, [["render", QT]]), JT = window.Vue.computed, mm = window.Vue.ref, ZT = window.Vue.watch, e6 = (e, t) => {
  const o = mm([]), s = mm(!1), a = JT(
    () => o.value.slice(0, 4)
  ), i = Ql(() => y(void 0, null, function* () {
    try {
      o.value = yield lo.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      s.value = !1;
    }
  }), 500);
  return ZT(t, () => {
    s.value = !0, o.value = [], i();
  }), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
};
const t6 = window.Vue.computed, n6 = window.Vuex.useStore, o6 = {
  name: "SearchResultsCard",
  components: { SxSearchArticleSuggestion: Gp, MwCard: et, MwSpinner: tt },
  props: {
    searchInput: {
      type: String,
      default: null
    }
  },
  emits: ["suggestion-clicked"],
  setup(e) {
    const { sourceLanguage: t, sourceLanguageAutonym: n } = q(
      n6()
    ), o = t6(() => e.searchInput), { searchResultsLoading: s, searchResultsSlice: a } = e6(
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
}, rl = window.Vue.resolveComponent, as = window.Vue.openBlock, ll = window.Vue.createBlock, s6 = window.Vue.createCommentVNode, a6 = window.Vue.resolveDirective, i6 = window.Vue.withDirectives, pm = window.Vue.createElementBlock, r6 = window.Vue.renderList, l6 = window.Vue.Fragment, c6 = window.Vue.withCtx, u6 = {
  key: 1,
  class: "sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
};
function d6(e, t, n, o, s, a) {
  const i = rl("mw-spinner"), l = rl("sx-search-article-suggestion"), u = rl("mw-card"), g = a6("i18n");
  return as(), ll(u, { class: "sx-article-search__results mb-0 pa-4" }, {
    default: c6(() => [
      o.searchResultsLoading ? (as(), ll(i, { key: 0 })) : o.searchResultsSlice.length === 0 ? i6((as(), pm("p", u6, null, 512)), [
        [g, [
          n.searchInput,
          o.sourceLanguageAutonym
        ], "cx-sx-article-search-no-search-results-message"]
      ]) : s6("", !0),
      (as(!0), pm(l6, null, r6(o.searchResultsSlice, (r) => (as(), ll(l, {
        key: r.pageid,
        suggestion: r,
        onClick: (c) => e.$emit("suggestion-clicked", r)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ]),
    _: 1
  });
}
const g6 = /* @__PURE__ */ P(o6, [["render", d6]]);
const m6 = window.Vuex.mapState, p6 = {
  name: "ArticleSuggestionsCard",
  components: { SxSearchArticleSuggestion: Gp, MwCard: et },
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
  computed: le({}, m6({
    sourceLanguage: (e) => e.application.sourceLanguage
  }))
}, h6 = window.Vue.toDisplayString, w6 = window.Vue.createElementVNode, f6 = window.Vue.renderList, _6 = window.Vue.Fragment, cl = window.Vue.openBlock, v6 = window.Vue.createElementBlock, hm = window.Vue.resolveComponent, wm = window.Vue.createBlock, fm = window.Vue.withCtx, S6 = ["textContent"];
function y6(e, t, n, o, s, a) {
  const i = hm("sx-search-article-suggestion"), l = hm("mw-card");
  return cl(), wm(l, { class: "sx-article-search__suggestions mb-0 pa-4" }, {
    header: fm(() => [
      w6("h5", {
        class: "ma-0 pb-1 sx-article-search__suggestions-header",
        textContent: h6(n.cardTitle)
      }, null, 8, S6)
    ]),
    default: fm(() => [
      (cl(!0), v6(_6, null, f6(n.suggestions, (u) => (cl(), wm(i, {
        key: u.pageid,
        suggestion: u,
        onClick: (g) => e.$emit("suggestion-clicked", u)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ]),
    _: 1
  });
}
const _m = /* @__PURE__ */ P(p6, [["render", y6]]), C6 = window.Vue.computed, k6 = (e, t) => C6(() => {
  const o = {
    value: "other",
    props: {
      icon: Kw,
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
      label: j.getAutonym(i),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), o];
}), x6 = window.Vue.computed, b6 = (e, t, n) => x6(() => {
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
    (i) => i !== e.value && i !== t.value && j.getAutonym(i) !== i
  );
});
const $6 = window.Vue.resolveDirective, V6 = window.Vue.createElementVNode, ul = window.Vue.withDirectives, ye = window.Vue.unref, is = window.Vue.withCtx, ut = window.Vue.createVNode, rs = window.Vue.openBlock, vm = window.Vue.createBlock, E6 = window.Vue.createCommentVNode, dl = window.Vue.createElementBlock, A6 = window.Vue.Fragment, D6 = window.Vue.vShow, L6 = { class: "sx-article-search" }, T6 = { class: "mb-0" }, B6 = {
  key: 2,
  class: "sx-article-search__empty-suggestions-message mt-12 pa-4 mb-0"
}, ls = window.Vue.ref, P6 = window.Vue.onMounted, gl = window.Vue.computed, Sm = window.Vue.watch, F6 = window.Vue.inject, M6 = window.Vuex.useStore, N6 = window.Codex.CdxButton, U6 = window.Codex.CdxIcon, I6 = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = ls(""), n = ls(!1), o = ls(null), s = ls(!1), a = ls([]), i = M6(), { sourceLanguage: l, targetLanguage: u } = q(i), { supportedLanguageCodes: g } = Vs(), r = b6(
      l,
      u,
      a
    ), c = k6(
      l,
      r
    ), d = me(), { fetchAllTranslations: m } = Qa();
    P6(() => y(this, null, function* () {
      var N;
      yield fp()(), m();
      try {
        a.value.push(
          ...JSON.parse(localStorage.getItem("uls-previous-languages"))
        );
      } catch (ne) {
      }
      (N = o.value) == null || N.focus();
    }));
    const p = () => {
      d.push({ name: "dashboard" });
    }, h = _p(), w = (F) => h(F, u.value), f = (F) => {
      if (F === "other") {
        s.value = !0;
        return;
      }
      w(F);
    };
    Sm(l, () => i.dispatch("mediawiki/fetchNearbyPages"), {
      immediate: !0
    });
    const _ = Nt();
    Sm(t, () => {
      n.value || (n.value = !0, _({
        event_type: "dashboard_search",
        translation_source_language: l.value,
        translation_target_language: u.value
      }));
    });
    const S = () => {
      s.value = !1;
    }, k = (F) => {
      s.value = !1, a.value.push(F), f(F);
    }, L = gl(
      () => i.getters["mediawiki/getRecentlyEditedPages"]
    ), B = gl(() => i.getters["mediawiki/getNearbyPages"]), R = F6("breakpoints"), E = gl(() => R.value.tabletAndDown), D = Ts(), O = (F, N) => D(
      F.title,
      l.value,
      u.value,
      N
    );
    return (F, N) => {
      const ne = $6("i18n");
      return rs(), dl("section", L6, [
        ut(ye(T), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: is(() => [
            ut(ye(C), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: is(() => [
                ul(V6("h5", T6, null, 512), [
                  [ne, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            ut(ye(C), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: is(() => [
                ut(ye(N6), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  onClick: p
                }, {
                  default: is(() => [
                    ut(ye(U6), { icon: ye(uo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        ut(ye(Ll), {
          ref_key: "searchInputRef",
          ref: o,
          value: t.value,
          "onUpdate:value": N[0] || (N[0] = (Q) => t.value = Q),
          "icon-size": 20,
          icon: ye(km),
          placeholder: F.$i18n("cx-sx-article-search-input-placeholder"),
          type: "search"
        }, null, 8, ["value", "icon", "placeholder"]),
        ut(ye(_s), {
          class: "sx-article-search__language-button-group",
          items: ye(c),
          active: ye(l),
          onSelect: f
        }, null, 8, ["items", "active"]),
        t.value ? E6("", !0) : (rs(), dl(A6, { key: 0 }, [
          L.value && L.value.length ? (rs(), vm(_m, {
            key: 0,
            "card-title": F.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: L.value,
            onSuggestionClicked: N[1] || (N[1] = (Q) => O(Q, "suggestion_recent_edit"))
          }, null, 8, ["card-title", "suggestions"])) : B.value && B.value.length ? (rs(), vm(_m, {
            key: 1,
            "card-title": F.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: B.value,
            onSuggestionClicked: N[2] || (N[2] = (Q) => O(Q, "suggestion_nearby"))
          }, null, 8, ["card-title", "suggestions"])) : ul((rs(), dl("p", B6, null, 512)), [
            [ne, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        ul(ut(g6, {
          "search-input": t.value,
          onSuggestionClicked: N[3] || (N[3] = (Q) => O(Q, "search_result"))
        }, null, 8, ["search-input"]), [
          [D6, !!t.value]
        ]),
        ut(ye(je), {
          value: s.value,
          "onUpdate:value": N[4] || (N[4] = (Q) => s.value = Q),
          class: "sx-article-search-language-selector",
          animation: "slide-up",
          fullscreen: E.value,
          header: E.value,
          "overlay-opacity": 0,
          title: F.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: S
        }, {
          default: is(() => [
            ut(ye(Lp), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: ye(g),
              suggestions: ye(r),
              placeholder: F.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: k,
              onClose: S
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ]);
    };
  }
};
const z6 = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: I6
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.tabletAndDown })
  }
}, R6 = window.Vue.resolveComponent, O6 = window.Vue.createVNode, H6 = window.Vue.normalizeClass, j6 = window.Vue.openBlock, q6 = window.Vue.createElementBlock;
function G6(e, t, n, o, s, a) {
  const i = R6("sx-article-search");
  return j6(), q6("main", {
    class: H6(["sx-article-search-view", a.classes])
  }, [
    O6(i)
  ], 2);
}
const W6 = /* @__PURE__ */ P(z6, [["render", G6]]), X6 = window.Vuex.useStore, Wp = [
  {
    path: "",
    name: "dashboard",
    component: Cd,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: W6,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: _4,
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: H$,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: hV,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: pD,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: NA,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: aL,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: jT,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Cd,
    meta: { workflowStep: 0 }
  }
], lc = gy({
  history: dS(),
  routes: Wp
});
lc.beforeEach((e, t, n) => {
  const o = X6();
  if (o.commit("application/setPreviousRoute", t.name), mw.user.isAnon() || $m.assertUser().catch((l) => {
    l instanceof ao && o.commit("application/setIsLoginDialogOn", !0);
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
    const l = Math.ceil(a) - 1, u = Wp.find(
      (g) => g.meta.workflowStep === l
    );
    n({ name: u.name });
    return;
  }
  n();
});
lc.afterEach((e, t) => {
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const K6 = window.Vue.createApp, Y6 = mw.config.get("wgUserLanguage"), Q6 = "en", J6 = mw.messages.values || {}, mo = K6(H1);
mo.use(lc);
mo.use(Bv);
mo.use(z0);
mo.use(I0);
const Z6 = m1({
  locale: Y6,
  finalFallback: Q6,
  messages: J6,
  wikilinks: !0
});
mo.use(Z6);
mo.mount("#contenttranslation");
