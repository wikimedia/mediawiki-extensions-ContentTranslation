import MwThumbnail from "../components/MWThumbnail.vue";
import { withA11y } from "@storybook/addon-a11y";

export default {
  title: "Components",
  component: MwThumbnail,
  decorators: [withA11y]
};

export const Thumbnail = () => ({
  components: { MwThumbnail },
  template: `
    <main class="container">
      <div class="row items-center">
        <span class="col-2" >
          <mw-thumbnail style="height:100px;width:100px;" :thumbnail="{source: 'https://picsum.photos/id/866/200/300'}"/>
        </span>
        <span class="col-10">With image. Thumbnail is fixed size</span>
      </div>
      <div class="row items-center">
        <span class="col-2" style="height:100px;">
          <mw-thumbnail :thumbnail="{source: 'https://picsum.photos/id/237/200/300'}"/>
        </span>
        <span class="col-10">With image. Thumbnail is responsive with column space</span>
       </div>
      <div class="row items-center">
        <span class="col-2">
          <mw-thumbnail style="height:100px;width:100px;"/>
        </span>
        <span class="col-10">Without image, display placeholder icon.</span>
      </div>
    </main>`
});