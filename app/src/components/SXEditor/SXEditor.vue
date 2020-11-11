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
      @ready="onEditorReady"
      @close="onEditorClosed"
      @edit-completed="onEditCompleted"
    />
  </section>
</template>

<script>
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
  data: () => ({
    editorReady: false
  }),
  computed: {
    content: vm => vm.$route.params.content,
    language: vm => vm.$route.params.language,
    originalContent: vm => vm.$route.params.originalContent,
    isFinal: vm => !!vm.$route.params.isFinalEdit
  },
  methods: {
    onEditorReady() {
      this.editorReady = true;
    },
    onEditorClosed() {
      this.$router.replace({ name: "sx-sentence-selector" });
    },
    onEditCompleted(editedContent) {
      if (this.isFinal) {
        this.$store.commit(
          "application/setCurrentSourceSectionEditedTranslation",
          editedContent
        );
        this.$router.replace({ name: "sx-publisher" });
      } else {
        this.$store.commit(
          "application/setCurrentEditedTranslation",
          editedContent
        );
        this.$router.replace({ name: "sx-sentence-selector" });
      }
    }
  }
};
</script>
