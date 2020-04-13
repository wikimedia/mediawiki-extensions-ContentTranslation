import MwCard from "../components/MWCard.vue";
import { withA11y } from "@storybook/addon-a11y";
import centered from "@storybook/addon-centered/vue";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "Components",
  component: MwCard,
  decorators: [withKnobs, centered, withA11y]
};

export const Card = () => ({
  components: { MwCard },
  props: {
    title: {
      default: text("Card title", "Beautiful image")
    }
  },
  template: `<mw-card :title="title"><img src="https://picsum.photos/300"/></mw-card>`
});
