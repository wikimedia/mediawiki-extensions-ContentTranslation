import cxTranslatorApi from "../../../wiki/cx/api/translator";
import PublishResult from "../../../wiki/cx/publishResult";
import { getTitleForPublishOption } from "../../../utils/publishTitleFactory";

export default {
  username: mw.config.get("wgUserName"),
  /** @type Translation[] */
  translations: [],
  translationsLoaded: false
};
