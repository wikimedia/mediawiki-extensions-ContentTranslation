import { ref } from "vue";

const startTranslationEventSource = ref(null);
const startTranslationEventContext = ref(null);

const setStartTranslationEventSource = (eventSource) => {
  if (!eventSource) {
    mw.errorLogger.logError(
      new Error("[CX] Empty event source set"),
      "error.contenttranslation"
    );
  }
  startTranslationEventSource.value = eventSource;
};

const setStartTranslationEventContext = (eventContext) => {
  startTranslationEventContext.value = eventContext;
};

export {
  setStartTranslationEventContext,
  setStartTranslationEventSource,
  startTranslationEventSource,
  startTranslationEventContext,
};
