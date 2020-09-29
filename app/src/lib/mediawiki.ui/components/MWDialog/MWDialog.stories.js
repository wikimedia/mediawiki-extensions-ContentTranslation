import { boolean, select, text, number, color } from "@storybook/addon-knobs";
import { MwButton, MwDialog } from "../..";
import { mwIconPrevious } from "../icons";

export default {
  title: "Components/Dialog",
  component: MwDialog,
  parameters: { layout: "centered" }
};

export const DismissableInformationDialog = (args, { argTypes }) => ({
  components: { MwDialog, MwButton },
  data: () => ({
    showDialog: false
  }),
  props: {
    title: {
      default: text("Dialog title", "Did you know?")
    },
    bodyText: {
      default: text(
        "Dialog body content",
        "The moai heads of Easter Island have bodies."
      )
    },
    fullscreen: {
      default: boolean("Fullscreen", false)
    }
  },
  template: `<div class="container">
    <mw-button label="Launch" v-on:click="openDialog()"></mw-button>
    <mw-dialog v-show="showDialog" v-on:close="onDialogClose()" :fullscreen="fullscreen" :title="title">
    {{bodyText}}
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

export const DialogWithButtonsInFooter = (args, { argTypes }) => ({
  components: { MwDialog, MwButton },
  data: () => ({
    showDialog: false,
    bodyImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Pskov_asv07-2018_Kremlin_before_sunset.jpg/800px-Pskov_asv07-2018_Kremlin_before_sunset.jpg"
  }),
  props: {
    title: {
      default: text("Dialog title", "Did you know?")
    },
    fullscreen: {
      default: boolean("Fullscreen", false)
    }
  },
  template: `<div class="container">
  <mw-button label="Launch" v-on:click="openDialog()"></mw-button>
  <mw-dialog v-show="showDialog" v-on:close="onDialogClose()" :fullscreen="fullscreen" :title="title">
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

export const DialogWithoutHeaderOrFooter = (args, { argTypes }) => ({
  components: { MwDialog, MwButton },
  data: () => ({
    showDialog: false,
    bodyImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Pskov_asv07-2018_Kremlin_before_sunset.jpg/800px-Pskov_asv07-2018_Kremlin_before_sunset.jpg"
  }),
  props: {
    fullscreen: {
      default: boolean("Fullscreen", true)
    }
  },
  template: `<div class="container">
    <mw-button label="Launch" v-on:click="openDialog()"></mw-button>
    <mw-dialog :fullscreen="fullscreen" v-show="showDialog" v-on:close="onDialogClose()">
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

export const DialogInteractionWithEscapeKey = (args, { argTypes }) => ({
  components: { MwDialog, MwButton },
  data: () => ({
    showDialog: false
  }),
  props: {
    fullscreen: {
      default: boolean("Fullscreen", true)
    },
    closeOnEscapeKey: {
      default: boolean("Close on escape key press", true)
    },
    bodyText: {
      default: text(
        "Dialog body content",
        "The moai heads of Easter Island have bodies."
      )
    }
  },
  template: `<div class="container">
      <mw-button label="Launch" v-on:click="openDialog()"></mw-button>
      <mw-dialog :fullscreen="fullscreen" :closeOnEscapeKey="closeOnEscapeKey" v-show="showDialog" v-on:close="onDialogClose()">
          <template v-slot:default>{{bodyText}}</template>
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

export const DialogWithCustomHeader = (args, { argTypes }) => ({
  components: { MwDialog, MwButton },
  data: () => ({
    showDialog: false,
    mwIconPrevious,
    bodyImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Pskov_asv07-2018_Kremlin_before_sunset.jpg/800px-Pskov_asv07-2018_Kremlin_before_sunset.jpg"
  }),
  props: {
    title: {
      default: text("Dialog title", "Did you know?")
    },
    bodyText: {
      default: text(
        "Dialog body content",
        "The moai heads of Easter Island have bodies."
      )
    },
    fullscreen: {
      default: boolean("Fullscreen", false)
    },
    header: {
      default: boolean("Header", true)
    }
  },
  template: `<div class="container">
    <mw-button label="Launch" v-on:click="openDialog()"></mw-button>
    <mw-dialog v-show="showDialog" v-on:close="onDialogClose()" :fullscreen="fullscreen" :header="header">
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

export const DialogWithCustomOverlay = () => ({
  components: { MwDialog, MwButton },
  data: () => ({
    showDialog: false
  }),
  props: {
    title: {
      default: text("Dialog title", "Did you know?")
    },
    bodyText: {
      default: text(
        "Dialog body content",
        "The moai heads of Easter Island have bodies."
      )
    },
    fullscreen: {
      default: boolean("Fullscreen", false)
    },
    overlaycolor: {
      default: color("Overlay color", "#202122")
    },
    overlayopacity: {
      default: number("Overlay opacity", 0.7)
    }
  },
  template: `<div class="container">
    <mw-button label="Launch" v-on:click="openDialog()"></mw-button>
    <mw-dialog 
        v-show="showDialog" 
        v-on:close="onDialogClose()" 
        :fullscreen="fullscreen" 
        :title="title" 
        :overlay-color="overlaycolor"
        :overlay-opacity="overlayopacity"
    >
      {{bodyText}}
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

const animations = ["slide-right", "slide-left", "slide-up", "slide-down"];
export const Animations = (args, { argTypes }) => ({
  components: { MwDialog, MwButton },
  data: () => ({
    showDialog: false,
    bodyImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Pskov_asv07-2018_Kremlin_before_sunset.jpg/800px-Pskov_asv07-2018_Kremlin_before_sunset.jpg"
  }),
  props: Object.keys(argTypes),
  template: `<div class="container">
    <mw-button label="Launch" v-on:click="openDialog()"></mw-button>
    <mw-dialog :fullscreen="fullscreen" v-show="showDialog" v-on:close="onDialogClose()" :animation="animation">
    <template v-slot:default><img  :src="bodyImage"/></template>
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
Animations.argTypes = {
  animation: {
    type: "string",
    control: {
      type: "select",
      options: animations
    }
  }
};
