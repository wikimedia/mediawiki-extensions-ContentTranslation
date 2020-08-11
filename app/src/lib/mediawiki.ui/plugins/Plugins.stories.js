import Vue from "vue";
import { BreakpointsPlugin } from ".";

Vue.use(BreakpointsPlugin);

export default {
  title: "Components/Plugins"
};

export const Breakpoints = () => ({
  template: `
  <main class="container">
      <div
        class="row pa-2"
        v-for="value, property in $mwui.breakpoint"
        :key="property"
        :style="value?'background-color:#4caf50':'background-color:#ff5722'">
        $mwui.breakpoint.{{property}}
      </div>
      <p>Resize the viewport and you can see the value of $mwui.breakpoint.* changing. You may use this in your components to use with viewport dependent logic</p>
    </main>`
});
