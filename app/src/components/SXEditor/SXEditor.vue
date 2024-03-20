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
        :proposed-translation="content"
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
import { ref, computed } from "vue";
import VisualEditor from "@/plugins/ve/components/VisualEditor.vue";
import { MwSpinner, MwRow } from "@/lib/mediawiki.ui";
import { getDir } from "@wikimedia/language-data";
import SxEditorOriginalContent from "./SXEditorOriginalContent.vue";
import EditCompleteFeedback from "./EditCompleteFeedback.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useEventLogging } from "@/plugins/eventlogging";
import mtValidator from "../../utils/mtValidator";
import useApplicationState from "@/composables/useApplicationState";
import useEditedTranslationApply from "@/components/SXEditor/useEditedTranslationApply";
import useCurrentPageSection from "@/composables/useCurrentPageSection";

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
    const store = useStore();

    const onEditorReady = () => (editorReady.value = true);
    const closeEditor = () => router.replace({ name: props.fromRoute });
    const { isFinalEdit, isInitialEdit, content, originalContent, title } =
      history.state;

    const editedTranslation = ref(null);
    const showFeedback = ref(false);
    const logEvent = useEventLogging();

    const { targetLanguage, sourceLanguage } = useApplicationState(store);
    const { sourceSection } = useCurrentPageSection();
    const mtScore = computed(() =>
      mtValidator.calculateScore(
        editedTranslation.value,
        content,
        targetLanguage.value
      )
    );

    const applyEditedTranslationToSelectedTranslationUnit =
      useEditedTranslationApply();

    const onEditCompleted = async (translation) => {
      editedTranslation.value = translation;
      showFeedback.value = true;
      /**
       * Show feedback animation to user for at least 2 seconds
       */
      const timeout = new Promise((resolve) => setTimeout(resolve, 2000));

      let applyTranslationPromise = Promise.resolve();

      if (isFinalEdit) {
        sourceSection.value.editedTranslation = translation;
      } else {
        if (mtScore.value === 0 && isInitialEdit) {
          logEvent({
            event_type: "editor_segment_add",
            translation_source_language: sourceLanguage.value,
            translation_target_language: targetLanguage.value,
          });
        }
        applyTranslationPromise =
          applyEditedTranslationToSelectedTranslationUnit(translation);
      }
      await Promise.all([timeout, applyTranslationPromise]);
      showFeedback.value = false;
      closeEditor();
    };

    return {
      closeEditor,
      content,
      editedTranslation,
      editorReady,
      getDir,
      sourceLanguage,
      targetLanguage,
      onEditorReady,
      onEditCompleted,
      originalContent,
      showFeedback,
      title,
    };
  },
};
</script>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-editor {
  height: 100%;
  &__editing-surface-container {
    position: relative;
  }
}
</style>
