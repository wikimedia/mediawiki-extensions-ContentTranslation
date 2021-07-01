import { action } from "@storybook/addon-actions";
import * as icons from "../icons";
import MwInput from "./MWInput.vue";

export default {
  title: "Components/Inputs",
  component: MwInput,
  parameters: { layout: "centered" }
};

export const InputAndTextArea = (args, { argTypes }) => ({
  components: { MwInput },
  data: () => ({
    icons,
    value: null
  }),
  props: Object.keys(argTypes),
  watch: {
    value() {
      action("input-update")(`Value update: ${this.value}`);
    }
  },
  methods: {
    clickHandler() {
      action("input-click")(`Clicked`);
    },
    focusHandler() {
      action("input-focus")(`Focused`);
    },
    blurHandler() {
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
     @click="clickHandler"
     @focus="focusHandler"
     @blur="blurHandler"
    ></mw-input>`
});

InputAndTextArea.args = {
  large: false,
  selectAll: false,
  icon: "",
  indicator: "",
  type: "input",
  placeholder: "Enter some content",
  value: ""
};

InputAndTextArea.argTypes = {
  icon: {
    type: "option",
    options: Object.keys(icons)
  },
  indicator: {
    type: "option",
    options: Object.keys(icons)
  },
  type: {
    type: "option",
    options: ["input", "textarea"]
  }
};

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
