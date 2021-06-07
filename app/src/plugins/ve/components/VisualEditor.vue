<template>
  <div ref="sxeditor" class="visual-editor">
    <div class="overlay-header header initial-header">
      <div class="toolbar"></div>
    </div>
    <div class="surface pa-5" :lang="language" :dir="dir"></div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "@vue/composition-api";
import { getTarget, getSurface } from "../target/integration";

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
    title: {
      type: String,
      required: true
    },
    dir: {
      type: String,
      default: "auto"
    }
  },

  emits: ["ready", "close", "edit-completed"],

  setup(props, context) {
    // Vue 3 way of accessing references to template elements. equivalent of this.$refs in Vue 2
    const sxeditor = ref(null);
    let veSurface = null;
    const editedContent = computed(() => veSurface.getHtml());

    const closeEditor = () => {
      veSurface.destroy();
      context.emit("close");
    };

    const onNext = () => {
      // Event with content payload should be emitted before
      // VE surface is destroyed
      context.emit("edit-completed", editedContent.value);
      veSurface.destroy();
    };

    const editorConfig = {
      placeholder: false,
      log: console.log,
      sectionId: 0,
      onBack: closeEditor,
      onNext: onNext,
      language: props.language,
      title: props.title,
      siteMapper: new mw.cx.SiteMapper()
    };

    const init = async () => {
      const veTarget = await getTarget(editorConfig, sxeditor.value);
      context.emit("ready");
      sxeditor.value.appendChild(veTarget.$element[0]);

      veSurface = getSurface(
        veTarget,
        props.content,
        props.language,
        props.dir
      );
    };

    onMounted(init);

    return { sxeditor };
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
