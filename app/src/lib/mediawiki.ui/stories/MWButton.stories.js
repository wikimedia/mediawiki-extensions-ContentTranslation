import MwButton from "../components/MWButton.vue";
import { withA11y } from "@storybook/addon-a11y";
import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  boolean,
  number,
  select,
  text
} from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered/vue";
import * as icons from "../components/icons";

export default {
  title: "Components/Button",
  component: MwButton,
  decorators: [withKnobs, centered, withA11y]
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
    block: {
      default: boolean("Block button", false)
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
  template: `<mw-button :large="large" :progressive="progressive" :destructive="destructive" :outlined="outlined" :type="type" :icon="icons[icon]"  :indicator="icons[indicator]" :href="href" :block="block" :label="label" v-on="hasIndicatorClickListener ? { 'indicator-icon-clicked': onIndicatorClick } : {}"></mw-button>`
});
