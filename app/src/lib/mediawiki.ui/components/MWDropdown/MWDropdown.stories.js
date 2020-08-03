import { withA11y } from "@storybook/addon-a11y";
import { action } from "@storybook/addon-actions";
import { select, text, withKnobs } from "@storybook/addon-knobs";
import * as icons from "../icons";
import MwDropdown from "./MWDropdown.vue";

export default {
  title: "Components",
  component: MwDropdown,
  decorators: [withKnobs, withA11y]
};

export const Dropdown = () => ({
  components: { MwDropdown },
  data: () => ({
    icons,
    selectedCity: "",
    selectedLanguage: "",
    selectedCurrency: "",
    cities: [
      "Tokyo",
      "Mumbai",
      "Chennai",
      "Venice",
      "Barcelona",
      "Texas",
      "Singapore",
      "Moscow"
    ],
    languages: [
      { name: "English", code: "en" },
      { name: "Spanish", code: "es" },
      { name: "Hindi", code: "hi" },
      { name: "French", code: "fr" }
    ],
    currencies: {
      $: "USD",
      "₹": "Rupees"
    }
  }),
  props: {
    icon: {
      default: select("Icon", Object.keys(icons))
    },
    indicator: {
      default: select("Indicator", Object.keys(icons))
    },
    label: {
      default: text("Label", "Menu")
    }
  },
  methods: {
    click() {
      action("input-click")(`Clicked`);
    },
    focus() {
      action("input-focus")(`Focused`);
    },
    selectCity(value) {
      action("input-select")(`Value select: ${value}`);
      this.selectedCity = value;
    },
    selectLanguage(value) {
      action("input-select")(`Value select: ${value}`);
      this.selectedLanguage = value;
    },
    selectCurrency(value) {
      action("input-select")(`Value select: ${value}`);
      this.selectedCurrency = value;
    }
  },
  template: `<main class="container">
    <section>
    <p>Options can be passed as array of strings. Example</p>
    Select city:
      <mw-dropdown
        :label="label"
        :icon="icons[icon]"
        :indicator="icons[indicator]"
        v-model="cities"
        @click="click"
        @focus="focus"
        @select="selectCity"
      ></mw-dropdown>
    {{selectedCity}}
    </section>
    <section>
    <p>Options can also passed as array of objects. Each item should have label and value as keys. Label will be used for display.</p>
    Select language:
      <mw-dropdown
        :label="label"
        :icon="icons[icon]"
        :indicator="icons[indicator]"
        v-model="languages"
        optionLabel="name"
        optionValue="code"
        @click="click"
        @focus="focus"
        @select="selectLanguage"
      >
    <template v-slot:option="slotProps">
      <div class="row">
        <span class="col-6">{{slotProps.option.label}}</span>
        <span class="col-6 justify-end">{{slotProps.option.value}}</span>
      </div>
    </template></mw-dropdown>
    {{selectedLanguage}}
    </section>
    <section>
    <p>It is also possible to pass an object. Object keys are values and values are labels.</p>
      <mw-dropdown
        label="Currencies"
        :icon="icons[icon]"
        :indicator="icons[indicator]"
        v-model="currencies"
        @click="click"
        @focus="focus"
        @select="selectCurrency"
      >
    </mw-dropdown>
    {{selectedCurrency}}
    </section>
    </main>`
});
