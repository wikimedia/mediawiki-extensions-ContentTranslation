/*!
 * Plugin that captures errors from Vue code and logs them to error.contenttranslation
 *
 * Based on mediawiki/resources/src/vue/errorLogger.js
 */
export default {
  install: function (app) {
    /**
     * @ignore
     * @param {Error} error
     */
    app.config.errorHandler = function (error) {
      mw.errorLogger.logError(error, "error.contenttranslation");

      mw.log.error(error);
    };
  },
};
