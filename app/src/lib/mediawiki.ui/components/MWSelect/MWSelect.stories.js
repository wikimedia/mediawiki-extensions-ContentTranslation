import { action } from "@storybook/addon-actions";
import { select, text } from "@storybook/addon-knobs";
import { MwSelect } from "../..";
import * as icons from "../icons";

export default {
  title: "Components",
  component: MwSelect,
  parameters: { layout: "centered" }
};

export const Select = () => ({
  components: { MwSelect },
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
      default: select("Icon", Object.keys(icons), "mwIconSearch")
    },
    indicator: {
      default: select("Indicator", Object.keys(icons))
    },
    placeholder: {
      default: text("Placeholder", "Search items")
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
      <mw-select
        :placeholder="placeholder"
        :icon="icons[icon]"
        :indicator="icons[indicator]"
        v-model="cities"
        @click="click"
        @focus="focus"
        @select="selectCity"
      ></mw-select>
    {{selectedCity}}
    </section>
    <section>
    <p>Options can also passed as array of objects. Each item should have label and value as keys. Label will be used for display.</p>
    Select language:
      <mw-select
        :placeholder="placeholder"
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
    </template></mw-select>
    {{selectedLanguage}}
    </section>
    <section>
    <p>It is also possible to pass an object. Object keys are values and values are labels.</p>
      <mw-select
        placeholder="Select currency"
        :icon="icons[icon]"
        :indicator="icons[indicator]"
        v-model="currencies"
        @click="click"
        @focus="focus"
        @select="selectCurrency"
      >
    </mw-select>
    {{selectedCurrency}}
    </section>
    </main>`
});
