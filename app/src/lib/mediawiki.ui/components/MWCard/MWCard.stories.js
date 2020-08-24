import { text } from "@storybook/addon-knobs";
import MwCard from "./MWCard.vue";

export default {
  title: "Components/Card",
  component: MwCard,
  parameters: { layout: "centered" }
};

export const CardWithAnImage = () => ({
  components: { MwCard },
  props: {
    title: {
      default: text("Card title", "Beautiful image")
    }
  },
  template: `
  <mw-card :title="title">
    <img src="https://picsum.photos/300"/>
  </mw-card>`
});
