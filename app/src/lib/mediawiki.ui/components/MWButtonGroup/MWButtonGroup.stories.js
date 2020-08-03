import { MwButtonGroup } from "../..";
import { withA11y } from "@storybook/addon-a11y";
import centered from "@storybook/addon-centered/vue";
import * as icons from "../icons";

export default {
  title: "Components",
  component: MwButtonGroup,
  decorators: [centered, withA11y]
};

export const ButtonGroup = () => ({
  components: { MwButtonGroup },
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
      },
      {
        value: "verify",
        props: {
          label: "Verify",
          icon: icons.mwIconArticleCheck
        }
      }
    ]
  }),
  template: `<mw-button-group :items="items" :active="active" v-on:select="active = $event"></mw-button-group>`
});
