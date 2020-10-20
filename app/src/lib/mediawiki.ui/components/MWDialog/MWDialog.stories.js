import { MwButton, MwDialog } from "../..";
import { mwIconPrevious } from "../icons";

const animations = ["slide-right", "slide-left", "slide-up", "slide-down"];
const argTypes = {
  animation: {
    type: "string",
    control: {
      type: "select",
      options: animations
    }
  },
  overlayColor: { control: { type: "color" } },
  overlayOpacity: { control: { type: "range", min: 0, max: 1, step: 0.1 } }
};
export default {
  title: "Components/Dialog",
  component: MwDialog,
  argTypes,
  parameters: { layout: "centered" }
};

export const DismissableInformationDialog = (args, { argTypes }) => ({
  components: { MwDialog, MwButton },
  data: () => ({
    showDialog: false
  }),
  props: Object.keys(argTypes),
  template: `
    <div class="container">
      <mw-button label="Launch" v-on:click="openDialog()"></mw-button>
      <mw-dialog v-model="showDialog" :fullscreen="fullscreen" :title="title">
        {{bodyText}}
      </mw-dialog>
    </div>`,
  methods: {
    openDialog() {
      this.showDialog = true;
    }
  }
});

DismissableInformationDialog.args = {
  fullscreen: false,
  title: "Did you know",
  bodyText: "The moai heads of Easter Island have bodies."
};

export const DialogWithButtonsInFooter = (args, { argTypes }) => ({
  components: { MwDialog, MwButton },
  data: () => ({
    showDialog: false,
    bodyImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Pskov_asv07-2018_Kremlin_before_sunset.jpg/800px-Pskov_asv07-2018_Kremlin_before_sunset.jpg"
  }),
  props: Object.keys(argTypes),
  template: `
    <div class="container">
      <mw-button label="Launch" v-on:click="openDialog()"></mw-button>
      <mw-dialog v-model="showDialog" :fullscreen="fullscreen" :title="title">
        <template v-slot:header-icon><img :src="bodyImage"/></template>
        <template v-slot:footer>
          <div class="row justify-end">
            <span class="col-4 justify-end">
              <mw-button v-on:click="onDialogClose()" label="Cancel"/>
            </span>
            <span class="col-4 justify-end">
              <mw-button progressive v-on:click="onDialogClose()" label="Apply"/>
            </span>
          </div>
        </template>
      </mw-dialog>
    </div>`,
  methods: {
    openDialog() {
      this.showDialog = true;
    },
    onDialogClose() {
      this.showDialog = false;
    }
  }
});
DialogWithButtonsInFooter.args = {
  fullscreen: false,
  title: "Did you know",
  bodyText: "The moai heads of Easter Island have bodies."
};

export const DialogWithoutHeaderOrFooter = (args, { argTypes }) => ({
  components: { MwDialog, MwButton },
  data: () => ({
    showDialog: false,
    bodyImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Pskov_asv07-2018_Kremlin_before_sunset.jpg/800px-Pskov_asv07-2018_Kremlin_before_sunset.jpg"
  }),
  props: Object.keys(argTypes),
  template: `
    <div class="container">
      <mw-button label="Launch" v-on:click="openDialog()"></mw-button>
      <mw-dialog :fullscreen="fullscreen" v-model="showDialog">
        <template v-slot:default><img :src="bodyImage"/></template>
      </mw-dialog>
    </div>`,
  methods: {
    openDialog() {
      this.showDialog = true;
    }
  }
});

export const DialogInteractionWithEscapeKey = (args, { argTypes }) => ({
  components: { MwDialog, MwButton },
  data: () => ({
    showDialog: false
  }),
  props: Object.keys(argTypes),
  template: `
    <div class="container">
      <mw-button label="Launch" v-on:click="openDialog()"></mw-button>
      <mw-dialog :fullscreen="fullscreen" :closeOnEscapeKey="closeOnEscapeKey" v-model="showDialog" :title="title">
          <template v-slot:default>{{bodyText}}</template>
      </mw-dialog>
    </div>`,
  methods: {
    openDialog() {
      this.showDialog = true;
    }
  }
});

DialogInteractionWithEscapeKey.args = {
  closeOnEscapeKey: true,
  title: "Did you know",
  bodyText: "The moai heads of Easter Island have bodies."
};

export const DialogWithCustomHeader = (args, { argTypes }) => ({
  components: { MwDialog, MwButton },
  data: () => ({
    showDialog: false,
    mwIconPrevious,
    bodyImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Pskov_asv07-2018_Kremlin_before_sunset.jpg/800px-Pskov_asv07-2018_Kremlin_before_sunset.jpg"
  }),
  props: Object.keys(argTypes),
  template: `
    <div class="container">
      <mw-button label="Launch" v-on:click="openDialog()"></mw-button>
      <mw-dialog v-model="showDialog" :fullscreen="fullscreen" :header="header">
        <template v-slot:header>
          <div class="row">
            <span class="col-1">
              <mw-button type="icon" :icon="mwIconPrevious" v-on:click="onDialogClose()"></mw-button>
            </span>
            <span class="col-10 justify-start items-center">{{title}}</span>
          </div>
        </template>
        <template v-slot:default><img :src="bodyImage"/></template>
      </mw-dialog>
    </div>`,
  methods: {
    openDialog() {
      this.showDialog = true;
    },
    onDialogClose() {
      this.showDialog = false;
    }
  }
});
DialogWithCustomHeader.args = {
  header: true,
  title: "Did you know",
  bodyText: "The moai heads of Easter Island have bodies."
};

export const DialogWithCustomOverlay = (args, { argTypes }) => ({
  components: { MwDialog, MwButton },
  data: () => ({
    showDialog: false
  }),
  props: Object.keys(argTypes),
  template: `<div class="container">
    <mw-button label="Launch" v-on:click="openDialog()"></mw-button>
    <mw-dialog
        v-model="showDialog"
        :fullscreen="fullscreen"
        :title="title"
        :overlay-color="overlayColor"
        :overlay-opacity="overlayOpacity"
    >
      {{bodyText}}
    </mw-dialog>
    </div>`,
  methods: {
    openDialog() {
      this.showDialog = true;
    }
  }
});

DialogWithCustomOverlay.args = {
  overlayColor: "#202122",
  overlayOpacity: 0.7,
  fullscreen: false,
  title: "Did you know",
  bodyText: "The moai heads of Easter Island have bodies."
};

export const Animations = (args, { argTypes }) => ({
  components: { MwDialog, MwButton },
  data: () => ({
    showDialog: false,
    bodyImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Pskov_asv07-2018_Kremlin_before_sunset.jpg/800px-Pskov_asv07-2018_Kremlin_before_sunset.jpg"
  }),
  props: Object.keys(argTypes),
  template: `
    <div class="container">
      <mw-button label="Launch" v-on:click="openDialog()"></mw-button>
      <mw-dialog :fullscreen="fullscreen" v-model="showDialog" :animation="animation">
        <template v-slot:default><img  :src="bodyImage"/></template>
      </mw-dialog>
    </div>`,
  methods: {
    openDialog() {
      this.showDialog = true;
    }
  }
});
