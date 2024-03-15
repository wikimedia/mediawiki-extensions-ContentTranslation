import mtValidator from "@/utils/mtValidator";
import PublishFeedbackMessage from "@/wiki/cx/models/publishFeedbackMessage";
import { useStore } from "vuex";

const useMtValidate = () => {
  const store = useStore();

  /**
   * This action initially clears all existing MT publish feedback
   * messages. Then, it validates the application/currentSourceSection
   * state variable for Machine Translation abuse, using mtValidator module.
   * If the validation status is "success", it returns null. If not,
   * it returns the appropriate warning or error (depending on the validation
   * status) publish feedback message.
   *
   * @return {Promise<PublishFeedbackMessage|null>}
   */
  return () => {
    /** @var {PageSection} */
    const { currentSourceSection: section, targetLanguage } =
      store.state.application;
    /**
     * Percentage of modified MT for current source section
     * as integer from 1 to 100
     * @type {number}
     */
    const mtValidationScore = mtValidator.getMTScoreForPageSection(
      section,
      targetLanguage
    );

    /**
     * Status for the given MT validation score
     * @type {"failure"|"warning"|"success"}
     */
    const mtValidationStatus = mtValidator.getScoreStatus(mtValidationScore);

    // If machine translation has been modified above threshold percentage
    // the method returns without adding any MT feedback message
    if (mtValidationStatus === "success") {
      return null;
    }

    // If validation status is "failure" or "warning", then add an MT feedback
    // message containing the related warnings/errors
    const unmodifiedPercentage = 100 - mtValidationScore;
    const status = mtValidationStatus === "failure" ? "error" : "warning";
    let title, messageBody;

    if (status === "warning") {
      title = mw
        .message("cx-sx-publisher-mt-abuse-message-title", unmodifiedPercentage)
        .plain();
      messageBody = mw.message("cx-sx-publisher-mt-abuse-message-body").plain();
    } else {
      title = mw
        .message("cx-sx-publisher-mt-abuse-error-title", unmodifiedPercentage)
        .plain();
      messageBody = mw.message("cx-sx-publisher-mt-abuse-error-body").plain();
    }

    return new PublishFeedbackMessage({
      title,
      text: messageBody,
      status,
      type: "mt",
    });
  };
};

export default useMtValidate;
