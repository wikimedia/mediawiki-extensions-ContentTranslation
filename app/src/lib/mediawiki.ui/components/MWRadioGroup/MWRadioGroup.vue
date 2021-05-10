<script>
import MwRadio from "./MWRadio";

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
      required: true
    },
    /**
     * An array of objects that corresponds to the radio button to be created,
     * in { value: "", text: "", disabled: false } format.
     * If not provided, radio buttons should be explicitely defined inside
     * default slot
     **/
    items: {
      type: Array,
      required: false,
      default: () => [],
      validator: value => value.every(item => item.hasOwnProperty("value"))
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
        return `radio-group-${this._uid}`;
      }
    }
  },
  render(createElement) {
    let elements = [];

    if (this.items.length) {
      elements = this.items.map(item =>
        createElement(MwRadio, {
          props: {
            key: item.value,
            disabled: item.disabled,
            label: item.text,
            inputValue: item.value,
            name: this.name
          },
          on: {
            change: event => this.$emit("input", event)
          }
        })
      );
    } else {
      elements = this.$slots.default.map(vnode => {
        if (vnode?.tag?.includes("MwRadio")) {
          vnode.componentOptions.listeners = {
            ...vnode.componentOptions.listeners,
            change: event => this.$emit("input", event)
          };
        }

        return vnode;
      });
    }

    return createElement("div", { class: "mw-ui-radio-group" }, elements);
  }
};
</script>
