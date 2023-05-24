<template>
  <div ref="sxeditor" :lang="language" :dir="dir" class="visual-editor">
    <div class="overlay-header header initial-header">
      <div class="toolbar"></div>
    </div>
    <div class="surface pa-5" :lang="language" :dir="dir"></div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import {
  getTarget,
  getSurface,
  getReferenceRendering,
} from "../target/integration";

function mwLinktoDataElement(domElements) {
  // ve.dm.MWInternalLinkAnnotation.static.toDataElement has assumptions about document.baseURI.
  // baseURI can use URL patterns like /wiki/$1 or w/index.php?title=$1. It also uses
  // current wikis 'wgScript', 'wgArticlePath' configuration values which can
  // totally be different when running on a local dev wiki.
  // Because of this dataElement can be null as toDataElement fails to parse an internal link
  // So make this dataElement calculation agnostic of all of the above mentioned factors.
  let title = domElements[0].getAttribute("title");

  if (!title) {
    // No title present. This can happen if the link is to a section in the article
    // Example: href=./Oxygen#Occurance in the Oxygen article.
    title = domElements[0].getAttribute("href").replace(/^\.\//, "");
  }

  return ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(title)
  );
}

export default {
  name: "VisualEditor",

  props: {
    content: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    dir: {
      type: String,
      default: "auto",
    },
  },

  emits: ["ready", "close", "edit-completed"],

  setup(props, context) {
    // Vue 3 way of accessing references to template elements. equivalent of this.$refs in Vue 2
    const sxeditor = ref(null);
    let veSurface = null;
    const editedContent = computed(() => veSurface.getHtml());

    const clearVisualEditor = () => {
      veSurface.destroy();
      // Clear the contents in the toolbar too.
      sxeditor.value.querySelector(".toolbar").innerHTML = "";
    };

    const closeEditor = () => {
      clearVisualEditor();
      context.emit("close");
    };

    const onNext = () => {
      // Event with content payload should be emitted before
      // VE surface is destroyed
      context.emit("edit-completed", editedContent.value);
      clearVisualEditor();
    };

    const editorConfig = {
      placeholder: false,
      log: console.log,
      sectionId: 0,
      onBack: closeEditor,
      onNext: onNext,
      language: props.language,
      title: props.title,
      siteMapper: new mw.cx.SiteMapper(),
    };

    const init = async () => {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = mwLinktoDataElement;

      const veTarget = await getTarget(editorConfig, sxeditor.value);
      context.emit("ready");
      sxeditor.value.appendChild(veTarget.$element[0]);

      veSurface = getSurface(
        veTarget,
        props.content,
        props.language,
        props.dir
      );
      ve.ui.MWReferenceContextItem.prototype.getRendering =
        getReferenceRendering;

      // Focus on the editor
      veSurface.focus();
    };

    onMounted(init);

    return { sxeditor };
  },
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
  }
  .surface {
    font-size: 1.125rem;
  }
}
</style>
