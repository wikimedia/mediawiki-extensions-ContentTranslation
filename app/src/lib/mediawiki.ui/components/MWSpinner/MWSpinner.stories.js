import MwSpinner from "./MWSpinner.vue";

export default {
  title: "Components",
  component: MwSpinner,
  parameters: { layout: "centered" }
};

export const Spinner = () => ({
  components: { MwSpinner },
  template: `<mw-spinner></mw-spinner>`
});
