import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";
import * as icons from "../icons";
import MwInput from "./MWInput.vue";

export default {
  title: "Components/Inputs",
  component: MwInput,
  parameters: { layout: "centered" }
};

export const InputAndTextArea = () => ({
  components: { MwInput },
  data: () => ({
    icons,
    value: null
  }),
  props: {
    large: {
      default: boolean("Large input", false)
    },
    selectall: {
      default: boolean("Select content on focus", false)
    },
    icon: {
      default: select("Icon", Object.keys(icons))
    },
    indicator: {
      default: select("Indicator", Object.keys(icons))
    },
    type: {
      default: select("Input type", ["input", "textarea"], "input")
    },
    placeholder: {
      default: text("Placeholder", "Enter some content")
    },
    value: {
      default: text("Value", "")
    }
  },
  watch: {
    value() {
      action("input-update")(`Value update: ${this.value}`);
    }
  },
  methods: {
    click() {
      action("input-click")(`Clicked`);
    },
    focus() {
      action("input-focus")(`Focused`);
    },
    blur() {
      action("input-blur")(`Blured`);
    }
  },
  template: `<mw-input
     :large="large"
     :type="type"
     :placeholder="placeholder"
     :icon="icons[icon]"
     :indicator="icons[indicator]"
     v-model="value"
     @click="click"
     @focus="focus"
     @blur="blur"
    ></mw-input>`
});

export const SearchInputWithIcons = () => ({
  components: { MwInput },
  data: () => ({
    icons,
    search: null
  }),
  methods: {
    onIndicatorClick() {
      action("indicator-clicked")(`Clicked`);
    }
  },
  template: `
    <section>
      <mw-input
        v-model="search"
        :icon-size="20"
        :outlined="false"
        :icon="icons.mwIconSearch"
        placeholder="Search for an article"
        type="search"
        :indicator="icons.mwIconClose"
        :indicator-size="20"
        @indicator-clicked="onIndicatorClick"
      ></mw-input>
    </section>
  `
});
