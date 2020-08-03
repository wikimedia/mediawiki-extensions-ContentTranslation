import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { MwMessage } from "../..";

export default {
  title: "Components",
  component: MwMessage,
  decorators: [withKnobs, withA11y]
};

export const Message = () => ({
  components: { MwMessage },
  template: `<section class="container">
    <mw-message type="notice">This is a notice</mw-message>
    <mw-message type="notice" inline>This is an inline notice</mw-message>
    <mw-message type="error">This is an error message</mw-message>
    <mw-message type="error" dismissable>
      <div>
       <strong>Title</strong>
        <div>This is a multiline error message. This message can be closed</div>
      </div>
    </mw-message>
    <mw-message type="error" inline>This is an inline error message</mw-message>
    <mw-message type="warning">This is a warning message</mw-message>
    <mw-message type="warning" inline>This is an inline warning</mw-message>
    <mw-message type="success" dismissable>This is a success message</mw-message>
    <mw-message type="success" inline>This is an inline success message</mw-message>
  </section>`
});
