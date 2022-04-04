<script>
import MwRadio from "./MWRadio.vue";
import { h } from "vue";

export default {
  name: "MwRadioGroup",
  components: { MwRadio },
  props: {
    /**
     * The value of the currently checked radio button.
     **/
    // eslint-disable-next-line vue/no-unused-properties
    value: {
      type: [String, Number],
      required: true,
    },
    /**
     * An array of objects that corresponds to the radio button to be created,
     * in { value: "", text: "", disabled: false } format.
     * If not provided, radio buttons should be explicitly defined inside
     * default slot
     **/
    items: {
      type: Array,
      required: false,
      default: () => [],
      validator: (value) => value.every((item) => item.hasOwnProperty("value")),
    },
    /**
     * Sets the name for radio buttons inside group.
     * If not provided, a name will automatically be created
     **/
    name: {
      type: String,
      required: true,
      // See explanation inside MWRadio about default id
      default() {
        const id = Math.floor(Math.random() * 10000);

        return `radio-group-${id}`;
      },
    },
  },
  render(props, slots) {
    let elements = [];

    if (props.items.length) {
      elements = props.items.map((item) =>
        h(MwRadio, {
          key: item.value,
          disabled: item.disabled,
          label: item.text,
          inputValue: item.value,
          name: props.name,
        })
      );
    } else {
      elements = this.$slots.default();
    }

    return h("div", { class: "mw-ui-radio-group" }, elements);
  },
};
</script>
