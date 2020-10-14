import { MwRadioGroup, MwRadio } from "./";
const argTypes = {
  value: { control: { type: "string" } },
  items: { control: { type: "array" } },
  disabled: { control: { type: "boolean" } }
};

export default {
  title: "Components/RadioGroup",
  component: MwRadioGroup,
  subcomponents: { MwRadio },
  argTypes,
  parameters: { layout: "centered" }
};

export const RadioButtonGroup = (args, { argTypes }) => ({
  components: { MwRadioGroup },
  props: Object.keys(argTypes),
  template: `
    <div class="container">
      <mw-radio-group
        v-model="value"
        :items="items"
        name="radio-button-group"
      ></mw-radio-group>
    </div>
  `
});

RadioButtonGroup.args = {
  value: "second",
  items: [
    { value: "first", text: "First radio button" },
    { value: "second", text: "Second radio button" }
  ]
};

export const RadioButtonGroupWithCustomSlot = (args, { argTypes }) => ({
  components: { MwRadioGroup, MwRadio },
  props: Object.keys(argTypes),
  template: `
    <div class="container">
      <mw-radio-group v-model="value" name="testGroup">
        <template>
          <mw-radio
            label="Publish as a new section"
            input-value="new_section"
          />
          <p class="complementary" style="margin-left: 28px">Add a new section to the article</p>
          <mw-radio
            label="Publish to your Sandbox"
            input-value="sandbox_section"
            style="margin-top: 1rem"
            :disabled="disabled"
          />
          <p class="complementary" style="margin-left: 28px">
            Publish to your personal space for you to review and copy elsewhere.
          </p>
        </template>
      </mw-radio-group>  
    </div>
    `
});

RadioButtonGroupWithCustomSlot.args = {
  value: "new_section",
  disabled: false
};
