import { select } from "@storybook/addon-knobs";
import { MwCol, MwGrid, MwRow } from "./index";
import "./grid-story.less";

export default {
  title: "Layout/Grid"
};

export const CSSHelperClasses = () => ({
  template: `<div class="container storybook-grid basic-demo">
      <p>A row is divided into 12 equal width columns.</p>
      <div class="row">
        <div v-for="n in 12"
        :key="n" class="col-1">col-1</div>
      </div>
      <p>The space taken in each column can be indicated using col-n class</p>
      <div class="row">
        <div class="col-1">col-1</div>
        <div class="col-3">col-3</div>
        <div class="col-6">col-6</div>
        <div class="col-2">col-2</div>
      </div>
      <p>Rows can be nested in columns</p>
      <div class="row">
        <div class="col-4">col-4</div>
        <div class="col-8">
          <div class="row">
            <div class="col-4">col-4</div>
            <div class="col-4">col-4</div>
            <div class="col-4">col-4</div>
          </div>
        </div>
      </div>
      <p>Columns with variable width using col class. Available space is shared equally between columns with variable width</p>
      <div class="row">
        <div class="col">Variable width</div>
        <div class="col-8">
          col-8
        </div>
        <div class="col">Variable width</div>
      </div>
      <div class="row">
        <div class="col">Variable width</div>
        <div class="col-7">
          col-7
        </div>
        <div class="col">Variable width</div>
      </div>
    </div>`
});

export const ColumnSpacingAndAlignment = () => ({
  props: {
    justify: {
      default: select(
        "Column spacing",
        ["start", "center", "end", "around", "between"],
        "center"
      )
    },
    align: {
      default: select(
        "Align columns in the row",
        ["start", "center", "end"],
        "center"
      )
    }
  },
  computed: {
    rowclasses() {
      return ["justify-" + this.justify, "items-" + this.align].join(" ");
    }
  },
  template: `<div class="container storybook-grid spacing-demo">
      <p>The columns can be distributed in a row using different spacing options "start", "center", "end", "around" or "between". Try changing this using <strong>Knobs</strong>. Similary the columns can be aligned with in the row space.</p>
      <div class="row" :class="rowclasses">
        <div class="col-2">col-2</div>
        <div class="col-2">col-2</div>
        <div class="col-2">col-2</div>
      </div>
      <p>Aligning columns with <code>{{rowclasses}}</code> classes </p>
    </div>`
});

export const Responsiveness = () => ({
  template: `<div class="container storybook-grid responsiveness-demo">
      <h2>Breakpoints</h2>
      <p>The grid contains 5 types of media breakpoints that are used for targeting specific screen sizes or orientations, xs, sm, md, lg and xl. These resolutions are defined in table below:</p>
      <table>
       <tr>
       <th> code</th>
       <th>devices</th>
       <th>range</th>
       </tr>
      <tr><td>xs</td><td>extra small: small to large mobiles</td><td>300px-599px</td></tr>
      <tr><td>sm</td><td>small to medium tablet</td><td>600px-959px</td></tr>
      <tr><td>md</td><td>medium: large tablet to laptop</td><td>960px-1263px</td></tr>
      <tr><td>lg</td><td>large: desktop</td><td>12640px-1903px</td></tr>
      <tr><td>xl</td><td>extra large: 4k and ultra-wides</td><td>1904px and above</td></tr>
      </table>
      <h2>Responsive column widths</h2>
      <p>Please use the viewport configuration in the storybook UI to see how the columns are responsing to viewport changes:</p>
      <div class="row">
        <div class="col-xs-12 col-md-6 col-lg-3">col-xs-12 col-md-6 col-lg-3</div>
      </div>
      <p>The above row will have column with 3 units in lg and above breakpoints. It will have 12 column units in xs and above till xs breakpoints. In sm breakpoint and above till lg, it will have 6 column units </p>

      <p>If breakpoints are not using in column class like col-6, it means the width is same in all breakpoints.</p>
      <h2>Hiding columns in a given breakpoint</h2>
      <p>To hide a column in a given breakpoint use the class format col-hidden-breakpoint</p>
      <div class="row">
        <div class="col-xs-12 col-md-hidden col-lg-3">col-xs-12 col-md-hidden col-lg-3</div>
      </div>
      <p>The above row will have column with 3 units in lg and above breakpoints. It will have 12 column units in xs and above till xs breakpoints. In sm breakpoint and above till lg, the column will be hidden. </p>
    </div>
    </div>`
});

export const GridComponents = () => ({
  components: { MwGrid, MwRow, MwCol },
  template: `<mw-grid class="storybook-grid basic-demo">
    <p>An alternate way to do layout is by using <code> mw-grid, mw-row, mw-col</code> components. This may make the SFC template code more readable compared to helper css classes. Some examples:</p>
    <p>A row is divided into 12 equal width columns.</p>
      <mw-row>
        <mw-col v-for="n in 12"
        :key="n" cols="1">col-1</mw-col>
      </mw-row>
      <p>The space taken in each column can be indicated using col-n class</p>
      <mw-row>
        <mw-col cols="1">col-1</mw-col>
        <mw-col cols="3">col-3</mw-col>
        <mw-col cols="6">col-6</mw-col>
        <mw-col cols="2">col-2</mw-col>
      </mw-row>
      <p>Rows can be nested in columns</p>
      <mw-row>
        <mw-col cols="4">col-4</mw-col>
        <mw-col cols="8">
           <mw-row>
            <mw-col cols="4">col-4</mw-col>
            <mw-col cols="4">col-4</mw-col>
            <mw-col cols="4">col-4</mw-col>
          </mw-row>
        </mw-col>
      </mw-row>
      <p>Columns with variable width using col class. Available space is shared equally between columns with variable width</p>
      <mw-row>
        <mw-col>Variable width</mw-col>
        <mw-col cols="8">
          col-8
        </mw-col>
        <mw-col>Variable width</mw-col>
      </mw-row>
      <mw-row>
        <mw-col>Variable width</mw-col>
        <mw-col cols="7">
          col-7
        </mw-col>
        <mw-col>Variable width</mw-col>
      </mw-row>
  </mw-grid>`
});
