<template>
  <section class="sx-editor">
    <sx-editor-original-content :original-content="originalContent" />
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
    content() {
      return this.$route.params.content;
    },
    language() {
      return this.$route.params.language;
    },
    originalContent() {
      return this.$route.params.originalContent;
    }
  },
  methods: {
    onEditorReady() {
      this.editorReady = true;
    },
    onEditorClosed() {
      this.$router.replace({ name: "sx-sentence-selector" });
    },
    onEditCompleted(editedContent) {}
  }
};
</script>
