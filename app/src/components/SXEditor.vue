<template>
  <section class="sx-editor">
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
import MwSpinner from "@/lib/mediawiki.ui/components/MWSpinner/MWSpinner";
import VisualEditor from "@/plugins/ve/components/VisualEditor";
export default {
  name: "SxEditor",
  components: { VisualEditor, MwSpinner },
  data: () => ({
    editorReady: false
  }),
  computed: {
    content() {
      return this.$route.params.content;
    },
    language() {
      return this.$route.params.language;
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
