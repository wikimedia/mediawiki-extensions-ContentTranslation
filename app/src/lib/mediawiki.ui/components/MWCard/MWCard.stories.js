import MwCard from "./MWCard.vue";

export default {
  title: "Components/Card",
  component: MwCard,
  parameters: { layout: "centered" }
};

export const CardWithAnImage = (args, { argTypes }) => ({
  components: { MwCard },
  props: Object.keys(argTypes),
  template: `
  <mw-card :title="title">
    <img src="https://picsum.photos/300"/>
  </mw-card>`
});

CardWithAnImage.args = {
  title: "Beautiful image"
};
