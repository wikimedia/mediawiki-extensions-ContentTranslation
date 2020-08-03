import { withA11y } from "@storybook/addon-a11y";
import { number, select, withKnobs } from "@storybook/addon-knobs";
import "../grid.scss";
import "./grid-story.less";

export default {
  title: "Style",
  decorators: [withKnobs, withA11y]
};

const dirPrefixes = {
  Start: "s",
  End: "e",
  Top: "t",
  Bottom: "b",
  Horizontal: "x",
  Vertical: "y",
  All: "a"
};

export const Spacing = () => ({
  props: {
    padding: {
      default: select("Padding direction", dirPrefixes, "a")
    },
    paddingUnit: {
      default: number("Padding unit", 2, {
        range: true,
        min: 0,
        max: 12,
        step: 1
      })
    },
    margin: {
      default: select("Margin direction", dirPrefixes, "a")
    },
    marginUnit: {
      default: number("Margin unit", 2, {
        range: true,
        min: 0,
        max: 12,
        step: 1
      })
    },
    scriptDirection: {
      default: select(
        "Script direction",
        {
          "Left To Right": "ltr",
          "Right To Left": "rtl"
        },
        "ltr"
      )
    }
  },
  computed: {
    paddingClass() {
      return ["p", this.padding, "-" + this.paddingUnit].join("");
    },
    marginClass() {
      return ["m", this.margin, "-" + this.marginUnit].join("");
    }
  },
  template: `
  <main :dir="scriptDirection">
  <div class="container storybook-grid spacing-demo" >
    <div class="row" style="background-color:orange;">
      <div
        :class="paddingClass + ' ' + marginClass" style="width:100%; background-color:yellowgreen;">
        <code
          style="background-color:whitesmoke;"
          class="justify-center">{{paddingClass}} {{marginClass}}
        </code>
      </div>
    </div>
    <h3>Spacing helpers</h3>
    <p>You can add padding and margin to your components without writing custom styles. Spacing helpers are useful for modifying the padding and margin of an element.
    Note that elements having these spacing helper classes should be under an element with <code>row</row> class. </p>
    <p>Padding helper classes has the format of <code>p{direction}-{unit}</code>. Similarly, margin helper classes has the format of <code>m{direction}-{unit}</code>.</p>
    <h3>Spacing Directions</h3>
    <ul>
    <li>s - Start</li>
    <li>e - End</li>
    <li>t - Top</li>
    <li>b - Bottom</li>
    <li>a - All directions</li>
    <li>x - Horizontal - x axis - Left and right</li>
    <li>y - Vertical - y axis - Top and Bottom</li>
    </ul>
    <h3>Script Direction</h3>
    <p>The helper classes are script direction(Left to right or right to left) agnostic. This means, in an left to right context <code>ps-4</code> will mean padding-start css style. In RTL, it will automatically become <code>padding-end</code>.</p>
    <h3>Spacing units</h3>
    <p>Spacing units are multiples of 4 units. So pa-2 means <code>padding: 8px</code>. The values can be between 1 to 12. pt-12 means <code>padding-top: 48px</code></p>
    <h3>Breakpoints</h3>
    <p>Spacing units can be set specifically for each breakpoints. Please see the responsiveness section to learn about breakpoints. To use breakpoints in spacing helper classes, use the format <code>p{direction}{breakpoint}-{unit}</code></p>
    <p>For example <code>pa-xs-4</code> sets padding: 16px in xs(mobile) viewports and has no effect on other viewports. And <code>ma-lg-2</code> sets 8px margin on lg(large) viewports.</p>
  </div>
  </main>
  `
});
