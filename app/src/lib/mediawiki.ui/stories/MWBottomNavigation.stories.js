import MwButtonGroup from "../components/MWButtonGroup.vue";
import MwBottomNavigation from "../components/MWBottomNavigation.vue";
import { withA11y } from "@storybook/addon-a11y";
import centered from "@storybook/addon-centered/vue";
import * as icons from "../components/icons";

export default {
  title: "Components",
  component: MwBottomNavigation,
  decorators: [centered, withA11y]
};

export const BottomNavigation = () => ({
  components: { MwBottomNavigation, MwButtonGroup },
  data: () => ({
    icons,
    active: "add",
    items: [
      {
        value: "add",
        props: {
          label: "Add",
          icon: icons.mwIconAdd
        }
      },
      {
        value: "remove",
        props: {
          label: "Remove",
          icon: icons.mwIconTrash
        }
      },
      {
        value: "edit",
        props: {
          label: "Edit",
          icon: icons.mwIconEdit
        }
      }
    ]
  }),
  template: `<div class="container">
    <mw-bottom-navigation><mw-button-group :items="items" :active="active" v-on:select="active = $event"></mw-button-group></mw-bottom-navigation></div>`
});
