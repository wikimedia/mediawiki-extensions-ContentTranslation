/**
 * Section translation mobile article target.
 * Based on MobileArticleTarget of VisualEditor.
 *
 * Note: We are not customizing much of MobileArticleTarget, so
 * having a new class inheriting MobileArticleTarget is a possibility.
 * But MobileArticleTarget does not get loaded for desktop due to
 * VE's ResourceLoader configuration.
 *
 * Note: Removed switching to visual, source modes. Use only visual editor mode.
 *
 * @class
 * @extends ve.init.mw.ArticleTarget
 *
 * @constructor
 * @param {Element} overlay Overlay element. Should have toolbar and surface
 *   containers.
 * @param {Object} [config] Configuration options
 * @cfg {string} [section] Number of the section target should scroll to
 */
SectionTranslationTarget = function SectionTranslationTarget(overlay, config) {
  this.overlay = overlay;
  this.$overlaySurface = overlay.querySelector(".surface");
  config = config || {};
  config.toolbarConfig = $.extend(
    {
      actions: false
    },
    config.toolbarConfig
  );
  this.config = config;
  // Parent constructor
  SectionTranslationTarget.super.call(this, overlay, config);
  this.section = config.section;
  // Initialization
  this.$element.addClass("sx-ve-translation-target");
};

/* Inheritance */

OO.inheritClass(SectionTranslationTarget, ve.init.mw.MobileArticleTarget);

/* Static Properties */

SectionTranslationTarget.static.integrationType = 'contenttranslation';

/* Methods */

/**
 * @inheritDoc
 */
SectionTranslationTarget.prototype.getContentApi = function(doc, options) {
  return this.config.siteMapper.getApi(this.config.language, options);
};

/**
 * Get the page name associated with a specific document
 *
 * @param {ve.dm.Document} [doc] Document, defaults to current surface's
 * @return {string} Page name
 */
SectionTranslationTarget.prototype.getPageName = function() {
  return this.config.title;
};

/**
 * @inheritdoc
 */
SectionTranslationTarget.prototype.loadFail = function(code, errorDetails) {
  // Parent method
  SectionTranslationTarget.super.prototype.loadFail.apply(this, arguments);
  window.history.back();
  mw.notify(this.extractErrorMessages(errorDetails));
};

SectionTranslationTarget.prototype.back = function() {
  this.config.onBack();
};

SectionTranslationTarget.prototype.next = function() {
  this.config.onNext();
};

/**
 * @inheritdoc
 */
SectionTranslationTarget.prototype.setupToolbar = function(surface) {
  var originalToolbarGroups = this.toolbarGroups;
  // We don't want any of these tools to show up in subordinate widgets, so we
  // temporarily add them here. We need to do it _here_ rather than in their
  // own static variable to make sure that other tools which meddle with
  // toolbarGroups (Cite, mostly) have a chance to do so.
  this.toolbarGroups = [].concat(
    [
      // Back
      {
        name: "back",
        include: ["back"]
      }
    ],
    this.toolbarGroups,
    [
      {
        name: "next",
        type: "bar",
        include: ["showMobileNext"]
      }
    ]
  );
  // Parent method
  ve.init.mw.MobileArticleTarget.super.prototype.setupToolbar.call(
    this,
    surface
  );
  this.toolbarGroups = originalToolbarGroups;
  this.toolbar.$group.addClass("ve-init-mw-mobileArticleTarget-editTools");
  this.toolbar.$element.addClass("ve-init-mw-mobileArticleTarget-toolbar");
};

/**
 * @inheritdoc
 */
SectionTranslationTarget.prototype.setupToolbarSaveButton = function() {
  // pass
};

/**
 * @inheritdoc
 */
SectionTranslationTarget.prototype.updateToolbarSaveButtonState = function() {
  // Pass. We are not saving sections.
};

/**
 * Done with the editing toolbar
 */
SectionTranslationTarget.prototype.done = function() {
  this.getSurface()
    .getModel()
    .setNullSelection();
  this.getSurface()
    .getView()
    .blur();
};

/* Registration */

ve.init.mw.targetFactory.register(SectionTranslationTarget);
module.exports = SectionTranslationTarget;
