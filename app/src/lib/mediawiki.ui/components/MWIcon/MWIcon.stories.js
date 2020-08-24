import * as icons from "../icons";
import MwIcon from "./MWIcon.vue";

export default {
  title: "Components/Icons",
  component: MwIcon,
  parameters: { layout: "centered" }
};

export const ListOfAvailableIcons = (args, { argTypes }) => ({
  components: { MwIcon },
  data: () => ({
    mwIconAdd: icons.mwIconAdd,
    icons,
    iconKeys: Object.keys(icons)
  }),
  props: Object.keys(argTypes),
  template: `
  <main :dir="scriptDirection">
    <div v-for="icon in iconKeys" :key="icon">
      <mw-icon
        :title="icon"
        :icon="icons[icon]"
        :iconColor="iconColor"
        :size="size"
      />
        {{icon}}
    </div>
  </main>`
});

ListOfAvailableIcons.args = { iconColor: "#000", size: 20 };
ListOfAvailableIcons.argTypes = {
  icon: { control: { disable: true } },
  iconName: { control: { disable: true } },
  iconColor: { control: { type: "color" } },
  size: { control: { type: "range", min: 1, max: 100 } },
  scriptDirection: {
    type: "string",
    control: {
      type: "select",
      options: { "Left to Right": "ltr", "Right to Left": "rtl" }
    }
  }
};
