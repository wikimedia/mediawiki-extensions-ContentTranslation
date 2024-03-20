import { useStore } from "vuex";
import useTranslationSave from "@/composables/useTranslationSave";
import PublishFeedbackMessage from "@/wiki/cx/models/publishFeedbackMessage";
import AssertUserError from "@/utils/errors/assertUserError";
import debounce from "@/utils/debounce";
import createSharedComposable from "@/composables/createSharedComposable";

/**
 * In order to save the draft section translation and its parallel corpora,
 * during "Pick a sentence" step, we use the debounced "translator/saveTranslation"
 * action. This way, we avoid to send more than one "save" request every 3 seconds,
 * since each "save" request overrides the previous one. For this reason, the debounced
 * action is executed in the trailing edge of the waiting time, meaning that only the
 * last call for "save" is actually executed. This debounced action is used both when
 * the "Apply translation" button and when an edited translation is applied.
 *
 * @type {function}
 */
let debouncedSaveTranslation;

const useDebouncedSave = () => {
  const store = useStore();
  const saveTranslation = useTranslationSave();

  let retryDelay = 1000;
  let retry = 0;

  const saveTranslationWithRetry = () =>
    saveTranslation()
      .then((saveResponse) => {
        if (saveResponse instanceof PublishFeedbackMessage) {
          retryDelay *= retry + 1;
          retry++;

          setTimeout(debouncedSaveTranslation, retryDelay);
        } else {
          retry = 0;
          retryDelay = 1000;
          store.commit("application/setAutoSavePending", false);
        }
      })
      .catch((error) => {
        if (error instanceof AssertUserError) {
          store.commit("application/setIsLoginDialogOn", true);
        } else {
          throw error;
        }
      });
  debouncedSaveTranslation = debounce(saveTranslationWithRetry, 3000);

  return debouncedSaveTranslation;
};

const useSharedDebouncedSave = createSharedComposable(useDebouncedSave);

export default useSharedDebouncedSave;
