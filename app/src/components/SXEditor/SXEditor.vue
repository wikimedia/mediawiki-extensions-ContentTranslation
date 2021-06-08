<template>
  <section class="sx-editor">
    <sx-editor-original-content
      v-if="originalContent"
      :original-content="originalContent"
    />
    <mw-spinner v-if="!editorReady" />
    <visual-editor
      :content="content"
      :language="language"
      :title="title"
      @ready="onEditorReady"
      @close="closeEditor"
      @edit-completed="onEditCompleted"
    />
  </section>
</template>

<script>
import { ref } from "@vue/composition-api";
import VisualEditor from "@/plugins/ve/components/VisualEditor";
import { MwSpinner } from "@/lib/mediawiki.ui";
import SxEditorOriginalContent from "@/components/SXEditor/SXEditorOriginalContent";

export default {
  name: "SxEditor",

  components: {
    SxEditorOriginalContent,
    VisualEditor,
    MwSpinner
  },

  props: {
    fromRoute: {
      type: String,
      required: true
    }
  },

  setup(props, context) {
    const editorReady = ref(false);
    const router = context.root.$router;
    const route = context.root.$route;
    const store = context.root.$store;

    const onEditorReady = () => (editorReady.value = true);
    const closeEditor = () => router.replace({ name: props.fromRoute });
    const isFinal = !!route.params.isFinalEdit;

    const onEditCompleted = translation => {
      if (isFinal) {
        store.commit(
          "application/setCurrentSourceSectionEditedTranslation",
          translation
        );
        router.replace({ name: "sx-publisher" });
      } else {
        store.dispatch("application/applyEditedTranslationToSelectedSegment", {
          translation
        });
        router.replace({ name: props.fromRoute });
      }
    };

    return {
      content: route.params.content,
      editorReady,
      closeEditor,
      language: route.params.language,
      onEditorReady,
      onEditCompleted,
      originalContent: route.params.originalContent,
      title: route.params.title
    };
  }
};
</script>
