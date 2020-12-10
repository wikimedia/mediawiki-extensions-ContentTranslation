import MwProgressBar from "./MWProgressBar";
import MwIcon from "../MWIcon";
import { mwIconUserAvatar, mwIconRobot } from "../icons.js";

export default {
  title: "Components/ProgressBar",
  component: MwProgressBar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "_Disclaimer_: Depending on zoom of each storybook container, an extra padding of white pixels may appear inside progress bar elements. This should not appear when zoom has integer values."
      }
    }
  }
};

/**
 * @description Value may not be accurate with extra pixels
 */
export const ProgressBar = () => ({
  components: { MwProgressBar },
  template: `
    <div class="container" style="width: 10rem;">
      <mw-progress-bar :value="40"></mw-progress-bar>
    </div>
  `
});

export const IndeterminateProgressBar = () => ({
  components: { MwProgressBar },
  template: `
    <div class="container" style="width: 10rem;">
      <mw-progress-bar :value="40" :indeterminate="true"></mw-progress-bar>
    </div>
  `
});

export const PendingProgressBar = () => ({
  components: { MwProgressBar },
  template: `
    <div class="container" style="width: 10rem;">
      <mw-progress-bar :value="40" :pending="true"></mw-progress-bar>
    </div>
  `
});

export const ThinProgressBar = () => ({
  components: { MwProgressBar, MwIcon },
  data: () => ({ mwIconUserAvatar, mwIconRobot }),
  template: `
    <div class="container" style="width: 10rem;">
      <div class="row">
        <div class="col items-center shrink">
          <mw-icon :icon="mwIconUserAvatar" icon-color="#00af89"/>
        </div>
        <div class="col items-center shrink px-3">
          <mw-progress-bar :value="40" height="4px" width="64px" color="#00af89" background="#eaecf0"></mw-progress-bar>
        </div>
        <div class="col items-center shrink">
          <mw-icon :icon="mwIconRobot"/>
        </div>
      </div>
    </div>
  `
});
