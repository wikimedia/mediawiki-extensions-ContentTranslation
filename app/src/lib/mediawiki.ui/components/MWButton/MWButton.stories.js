import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";
import * as icons from "../icons";
import MwButton from "./MWButton.vue";

export default {
  title: "Components/Button",
  component: MwButton,
  parameters: { layout: "centered" }
};

export const DifferentButtons = () => ({
  components: { MwButton },
  data: () => ({
    icons
  }),
  props: {
    large: {
      default: boolean("Large button", false)
    },
    label: {
      default: text("Button label", "Button label")
    },
    href: {
      default: text("Button click target(href)", "")
    },
    outlined: {
      default: boolean("Outlined", false)
    },
    icon: {
      default: select("Icon", Object.keys(icons), "")
    },
    indicator: {
      default: select("Indicator", Object.keys(icons), "")
    },
    progressive: {
      default: boolean("Progressive", true)
    },
    destructive: {
      default: boolean("Destructive", false)
    },
    type: {
      default: select(
        "Button type",
        ["button", "toggle", "icon", "text"],
        "button"
      )
    },
    hasIndicatorClickListener: {
      default: boolean("Indicator click event listener", true)
    }
  },
  methods: {
    onIndicatorClick() {
      action("indicator-click")(`Clicked`);
    }
  },
  template: `<mw-button :large="large" :progressive="progressive" :destructive="destructive" :outlined="outlined" :type="type" :icon="icons[icon]"  :indicator="icons[indicator]" :href="href" :label="label" v-on="hasIndicatorClickListener ? { 'indicator-icon-clicked': onIndicatorClick } : {}"></mw-button>`
});
