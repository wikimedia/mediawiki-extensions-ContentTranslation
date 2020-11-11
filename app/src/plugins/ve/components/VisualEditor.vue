<template>
  <div ref="sxeditor" class="visual-editor">
    <div class="overlay-header header initial-header">
      <div class="toolbar"></div>
    </div>
    <div class="surface pa-5" :lang="language" :dir="dir"></div>
  </div>
</template>

<script>
export default {
  name: "VisualEditor",
  props: {
    content: {
      type: String,
      required: true
    },
    language: {
      type: String,
      required: true
    },
    dir: {
      type: String,
      default: "auto"
    }
  },
  data: () => ({
    veTarget: null,
    veSurface: null
  }),
  computed: {
    editedContent() {
      return this.veSurface.$element[0].innerHTML;
    },
    editable() {
      return true;
    },
    editorConfig() {
      return {
        placeholder: false,
        log: console.log,
        sectionId: 0,
        onBack: this.closeEditor,
        onNext: this.onNext,
        language: this.language,
        siteMapper: new mw.cx.SiteMapper()
      };
    }
  },
  mounted() {
    // Section selector can also start loading them anticipating
    // a confirmation from translator.

    mw.loader
      .using([
        "ext.visualEditor.targetLoader",
        "ext.visualEditor.mobileArticleTarget"
      ])
      .then(() => {
        // Enforce mobile target for all devices to support
        // mobile-first design.
        OO.ui.isMobile = () => true;
        mw.libs.ve.targetLoader.loadModules("visual").then(() => {
          require("../tools/BackTool");
          require("../tools/NextTool");
          require("../commands/BackCommand");
          require("../commands/NextCommand");
          const SectionTranslationTarget = require("../target/SectionTranslationTarget");
          const overlay = this.getVEOverlay();
          const config = this.editorConfig;
          this.veTarget = new SectionTranslationTarget(overlay, config);
          this.onTargetReady();
        });
      });
  },
  methods: {
    init() {
      this.$refs.sxeditor.appendChild(this.veTarget.$element[0]);
      // Create a document model for a new surface
      this.veTarget.clearSurfaces();
      const dmDoc = ve.dm.converter.getModelFromDom(
        ve.createDocumentFromHtml(this.content),
        { lang: this.language, dir: this.dir }
      );
      this.veSurface = this.veTarget.createSurface(dmDoc);
      this.veTarget.surfaces.push(this.veSurface);
      this.veTarget.setSurface(this.veSurface);
      this.veSurface.initialize();
    },
    getVEOverlay() {
      // This is a quick and dirty version for VisualEditorOverlay
      // in MobileFrontend. May require enhancement to a separate class.
      const overlay = this.$refs.sxeditor;
      overlay.$el = $(this.$refs.sxeditor);
      return overlay;
    },
    onTargetReady() {
      this.$emit("ready");
      this.init();
    },
    closeEditor() {
      this.veSurface.destroy();
      this.$emit("close");
    },
    onNext() {
      this.$emit("edit-completed", this.editedContent);
      this.veSurface.destroy();
    }
  }
};
</script>
<style lang="less">
.visual-editor {
  .overlay-header .toolbar {
    display: flex;
    width: 100%;
    .ve-ui-toolbar {
      width: 100%;
    }
    .ve-ui-targetToolbar-mobile .oo-ui-toolbar-tools {
      display: flex;
      align-items: center;
      height: 48px;
    }
  }
  .surface {
    font-size: 1.125rem;
  }
}
</style>
