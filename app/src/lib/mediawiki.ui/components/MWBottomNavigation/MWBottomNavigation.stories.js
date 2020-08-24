import * as icons from "../icons";
import { MwBottomNavigation, MwButtonGroup } from "../..";

export default {
  title: "Components/BottomNavigation",
  component: MwBottomNavigation,
  parameters: { layout: "centered" }
};

export const SimpleBottomNavigation = () => ({
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
  template: `
  <div class="container">
    <mw-bottom-navigation>
      <mw-button-group
        :items="items"
        :active="active"
        v-on:select="active = $event"
      ></mw-button-group>
    </mw-bottom-navigation>
  </div>`
});
