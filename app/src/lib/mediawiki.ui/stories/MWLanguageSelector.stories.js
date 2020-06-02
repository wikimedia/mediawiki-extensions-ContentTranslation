import MwLanguageSelector from "../components/MWLanguageSelector.vue";
import { withA11y } from "@storybook/addon-a11y";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, select, text } from "@storybook/addon-knobs";
import * as icons from "../components/icons";
import "../grid.scss";

export default {
  title: "Components",
  component: MwLanguageSelector,
  decorators: [withKnobs, withA11y]
};

const languages = [
  {
    code: "en",
    name: "English"
  },
  {
    code: "ml",
    name: "മലയാളം"
  },
  {
    code: "es",
    name: "Espanol"
  }
];
export const LanguageSelector = () => ({
  components: { MwLanguageSelector },
  data: () => ({ languages }),
  methods: {
    select(value) {
      action("LanguageSelector-update")(`Language selected: ${value}`);
      this.value = value;
    }
  },
  template: `<div class="container"><mw-language-selector
     @select="select"
     :languages="languages"
    ></mw-language-selector></div>`
});
