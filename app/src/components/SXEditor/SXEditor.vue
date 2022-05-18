<template>
  <mw-row
    tag="section"
    class="sx-editor ma-0 no-wrap"
    direction="column"
    align="normal"
  >
    <sx-editor-original-content
      v-if="originalContent"
      :language="sourceLanguage"
      :dir="getDir(sourceLanguage)"
      :original-content="originalContent"
    />
    <mw-spinner v-if="!editorReady" />
    <div class="sx-editor__editing-surface-container grow">
      <edit-complete-feedback
        :edited-translation="editedTranslation"
        :show-feedback="showFeedback"
      />
      <visual-editor
        :content="content"
        :language="targetLanguage"
        :dir="getDir(targetLanguage)"
        :title="title"
        @ready="onEditorReady"
        @close="closeEditor"
        @edit-completed="onEditCompleted"
      />
    </div>
  </mw-row>
</template>

<script>
import { ref } from "vue";
import VisualEditor from "@/plugins/ve/components/VisualEditor.vue";
import { MwSpinner, MwRow } from "@/lib/mediawiki.ui";
import { getDir } from "@wikimedia/language-data";
import SxEditorOriginalContent from "./SXEditorOriginalContent.vue";
import EditCompleteFeedback from "./EditCompleteFeedback.vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "SxEditor",

  components: {
    EditCompleteFeedback,
    MwRow,
    SxEditorOriginalContent,
    VisualEditor,
    MwSpinner,
  },

  props: {
    fromRoute: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const editorReady = ref(false);
    const router = useRouter();
    const route = useRoute();
    const store = useStore();

    const onEditorReady = () => (editorReady.value = true);
    const closeEditor = () => router.replace({ name: props.fromRoute });
    const isFinal = !!route.params.isFinalEdit;

    const proposedTranslation = route.params.content;
    const originalContent = route.params.originalContent;

    const editedTranslation = ref(null);
    const showFeedback = ref(false);

    const onEditCompleted = async (translation) => {
      editedTranslation.value = translation;
      showFeedback.value = true;
      /**
       * Show feedback animation to user for 2 seconds
       */
      await new Promise((resolve) => setTimeout(resolve, 2000));
      showFeedback.value = false;

      if (isFinal) {
        store.commit(
          "application/setCurrentSourceSectionEditedTranslation",
          translation
        );
      } else {
        store.dispatch(
          "application/applyEditedTranslationToSelectedTranslationUnit",
          translation
        );
      }
      closeEditor();
    };

    return {
      closeEditor,
      content: proposedTranslation,
      editedTranslation,
      editorReady,
      getDir,
      sourceLanguage: route.params.sourceLanguage,
      targetLanguage: route.params.targetLanguage,
      onEditorReady,
      onEditCompleted,
      originalContent,
      showFeedback,
      title: route.params.title,
    };
  },
};
</script>

<style lang="less">
@import "../../lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.sx-editor {
  height: 100%;
  &__editing-surface-container {
    position: relative;
  }
}
</style>
