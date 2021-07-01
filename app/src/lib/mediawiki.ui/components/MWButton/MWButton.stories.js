import { action } from "@storybook/addon-actions";
import * as icons from "../icons";
import MwButton from "./MWButton.vue";

export default {
  title: "Components/Button",
  component: MwButton,
  parameters: { layout: "centered" }
};

export const Progressive = () => ({
  components: { MwButton },
  template: `<mw-button progressive label="Click me"/>`
});

export const Destructive = () => ({
  components: { MwButton },
  template: `<mw-button destructive label="Click me"/>`
});

export const TextButton = () => ({
  components: { MwButton },
  template: `
    <section>
      <mw-button type="text" label="Text button"/>
      <mw-button type="text" progressive label="Progressive text"/>
      <mw-button type="text" destructive label="Destructive text"/>
      <mw-button type="text" disabled label="Disabled text"/>
    </section>
  `
});

export const IconButton = () => ({
  components: { MwButton },
  data: () => ({
    icons
  }),
  template: `
    <section>
      <mw-button type="icon" :icon="icons.mwIconAdd"/>
      <mw-button type="icon" progressive :icon="icons.mwIconAdd"/>
      <mw-button type="icon" destructive :icon="icons.mwIconAdd"/>
    </section>
  `
});

export const LargeButton = () => ({
  components: { MwButton },
  data: () => ({
    icons
  }),
  template: `
  <section class="container">
    <div class="row">
      <div class="col mx-1">
        <mw-button large label="Click me"/>
      </div>
      <div class="col mx-1">
        <mw-button large progressive label="Click me"/>
      </div>
      <div class="col mx-1">
        <mw-button large destructive :icon="icons.mwIconTrash" label="Click me"/>
      </div>
    </div>
  </section>
  `
});

export const Link = () => ({
  components: { MwButton },
  data: () => ({
    icons
  }),
  template: `
      <mw-button
        type="text"
        href="http://wikipedia.org"
        :icon="icons.mwIconWikipedia"
        label="Wikipedia"
      />
  `
});

export const ButtonWithIcons = () => ({
  components: { MwButton },
  data: () => ({
    icons
  }),
  template: `
    <section class="container">
      <div class="row">
        <div class="col mx-1">
          <mw-button
            type="button"
            :icon="icons.mwIconAdd"
            :indicator="icons.mwIconExpand"
            label="Click me"
          />
        </div>
        <div class="col mx-1">
          <mw-button
            progressive
            type="button"
            :icon="icons.mwIconAdd"
            :indicator="icons.mwIconExpand"
            label="Click me"
          />
        </div>
        <div class="col mx-1">
          <mw-button
            destructive
            type="button"
            :icon="icons.mwIconAdd"
            :indicator="icons.mwIconExpand"
            label="Click me"
          />
        </div>
      </div>
      <div class="row" style="margin-top: 1rem">
        <div class="col mx-1">
          <mw-button
            type="button"
            :icon="icons.mwIconAdd"
          />
        </div>
        <div class="col mx-1">
          <mw-button
            progressive
            type="button"
            :icon="icons.mwIconAdd"
          />
        </div>
        <div class="col mx-1">
          <mw-button
            destructive
            type="button"
            :icon="icons.mwIconAdd"
          />
        </div>
      </div>
      <div class="row" style="margin-top: 1rem">
        <div class="col mx-1">
          <mw-button
            type="text"
            :indicator="icons.mwIconArrowForward"
            label="Text button"
          />
        </div>
        <div class="col mx-1">
          <mw-button
            type="text"
            progressive
            :indicator="icons.mwIconArrowForward"
            label="Text button"
          />
        </div>
        <div class="col mx-1">
          <mw-button
            type="text"
            destructive
            :indicator="icons.mwIconArrowForward"
            label="Text button"
          />
        </div>
      </div>
    </section>
  `
});

export const DifferentButtons = (args, { argTypes }) => ({
  components: { MwButton },
  data: () => ({
    icons
  }),
  props: Object.keys(argTypes),
  methods: {
    onIndicatorClick() {
      action("indicator-click")(`Clicked`);
    }
  },
  template: `
    <section class="container">
      <div class="row">
        <div class="col-12">
          <p>Play with different properties using <strong>controls</strong></p>
        </div>
        <div class="col-12">
          <mw-button
            :large="large"
            :progressive="progressive"
            :destructive="destructive"
            :outlined="outlined"
            :type="type"
            :icon="icons[icon]"
            :indicator="icons[indicator]"
            :href="href"
            :label="label"
            v-on="hasIndicatorClickListener ? { 'indicator-icon-clicked': onIndicatorClick } : {}"
          />
        </div>
      </div>
    </section>
  `
});

DifferentButtons.args = {
  large: false,
  label: "Button label",
  href: "#",
  outlined: false,
  icon: "",
  indicator: "",
  progressive: true,
  destructive: false,
  type: "button",
  hasIndicatorClickListener: true
};

DifferentButtons.argTypes = {
  icon: {
    type: "option",
    options: Object.keys(icons)
  },
  indicator: {
    type: "option",
    options: Object.keys(icons)
  },
  type: {
    type: "option",
    options: ["button", "toggle", "icon", "text"]
  }
};
