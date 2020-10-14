import * as icons from "../icons";
import { MwBottomNavigation, MwButtonGroup } from "../..";

export default {
  title: "Components/BottomNavigation",
  component: MwBottomNavigation,
  parameters: { layout: "centered" }
};

export const BottomNavigationWithTextButtonsAndIcons = () => ({
  components: { MwBottomNavigation, MwButtonGroup },
  data: () => ({
    icons,
    active: "suggestions",
    items: [
      {
        value: "suggestions",
        props: {
          label: "Suggestions",
          icon: icons.mwIconLightBulb,
          type: "text"
        }
      },
      {
        value: "draft",
        props: {
          label: "In progress",
          icon: icons.mwIconEdit,
          type: "text"
        }
      },
      {
        value: "published",
        props: {
          label: "Published",
          icon: icons.mwIconArticleCheck,
          type: "text"
        }
      }
    ]
  }),
  template: `
  <div class="container" style="transform: scale(1); height: 6rem; width: 100vw; max-width: 100%;">
    <div class="row">
      <div class="col">
        <mw-bottom-navigation
          :items="items"
          :active.sync="active"
        />
      </div>
    </div>
  </div>`
});

export const BottomNavigationWithCustomSlot = () => ({
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
  <div class="container" style="transform: scale(1); height: 6rem; width: 100vw; max-width: 100%;">
    <mw-bottom-navigation>
      <mw-button-group
        :items="items"
        :active="active"
        v-on:select="active = $event"
      />
    </mw-bottom-navigation>
  </div>`
});
