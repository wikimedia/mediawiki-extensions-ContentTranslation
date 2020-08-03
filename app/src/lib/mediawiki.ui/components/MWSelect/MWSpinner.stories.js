import { withA11y } from "@storybook/addon-a11y";
import centered from "@storybook/addon-centered/vue";
import { MwSpinner } from "../..";

export default {
  title: "Components",
  component: MwSpinner,
  decorators: [centered, withA11y]
};

export const Spinner = () => ({
  components: { MwSpinner },
  template: `<mw-spinner></mw-spinner>`
});
