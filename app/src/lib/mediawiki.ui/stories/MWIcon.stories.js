import MwIcon from "../components/MWIcon.vue";
import * as icons from "../components/icons";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, color, number } from "@storybook/addon-knobs";

export default {
  title: "Components/Icon",
  component: MwIcon,
  decorators: [withKnobs, withA11y]
};

export const AllIcons = () => ({
  components: { MwIcon },
  data: () => ({
    mwIconAdd: icons.mwIconAdd,
    icons,
    /* */
    iconKeys: Object.keys(icons)
  }),
  props: {
    size: {
      default: number("Icon size", 24)
    },
    iconColor: {
      default: color("Icon color", "#000")
    }
  },
  template: `<div><div v-for="icon in iconKeys" v-key="icon"><mw-icon :title="icon" :icon="icons[icon]" :iconColor="iconColor" :size="size"/>{{icon}}</div></div>`
});
