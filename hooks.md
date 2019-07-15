Hooks defined in Content Translation
====================================

See also [front end help](https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation/Front_end).

We use the mw.hooks wrapper of jQuery.Callbacks for achieving
a subscriber-publisher events pattern.

The hook names are prefixed with mw.cx as a convention.

# List of hooks

## mw.cx.success

Used for displaying a success message in the info bar.
The message can be passed as the argument.

## mw.cx.error

Fired whenever an error occurs.
The parameter is a string (message) that will be shown in the info bar.

## mw.cx.error.anonuser

Fired when the frontend identifies that the user is anonymous.

## mw.cx.progress

Fired when the translation progress is recalculated.

Parameters:

* {object} progress Map of progress data
* {integer} progress.any Weight of translation sections with any content
* {integer} progress.human Weight of translation sections with human modified content
* {integer} progress.mt Weight of translation sections with unmodified mt content

## mw.cx.publish

Used to trigger the publish action.

## mw.cx.search.word

This is fired when a word is searched in the tools search box.
The search string is passed as an argument. Example subscribers are link and dictionary tools.

## mw.cx.select.link

This is fired when a link is clicked in the source or translation column.
Example subscriber is link tool.

Parameters:

* {string|jQuery} link The link element or target title.
* {string} [language] The language where the link points to.

## mw.cx.select.reference

This is fired when a reference is clicked in the source or translation column.
Example subscriber is reference tool.

Parameters:

* {string} refNumber - The reference number. Example: [4]
* {string} reference - The reference content. Can be html.
* {jQuery} [$reference] - The jquery object related to reference.
If passed, the reference card give and option to delete it.
* {string} [language] - Language code of language where this reference exist.

## mw.cx.select.word

This is fired when a text is selected in the source or translation column.
Example subscribers are link and dictionary tool.

Parameters:

* {string} The selected text
* {string} [language] The language where the link points to.

## mw.cx.source.loaded

Fired when the source article content is loaded.

## mw.cx.source.ready

Fired when the source article content is ready from API, but not rendered at the source column.

## mw.cx.tools.ready

Fires when the tools system is ready.

## mw.cx.tools.shown

Every tool card fires this when it is ready.
Tools manager listen for this so that it can stop showing the loading indicator.

## mw.cx.translation.published

Fires when the article is published successfully.
Example subscriber is event logging (analytics) module.

## mw.cx.translation.publish.error

Fires when publishing failed

## mw.cx.translation.abusefilter

Fires when AbuseFilter is encountered.

## mw.cx.translation.continued

Fires when a saved translation is continuing

## mw.cx.translation.deleted

Fires when a saved translation is deleted

## mw.cx.translation.add

Used to trigger the pre-translation for a source section. Source section id is passed as argument.

## mw.cx.translation.change

Fired when the translation section changed because of any reason.

## mw.cx.translation.focus

Fired when translation section receives focus.

## mw.cx.translation.postMT

Fired after the MT is used for the pre-translation.
Link, image, template adaptation can listen for this.

## mw.cx.translation.ready

Fired when the translation column is rendered and ready. No subscribers yet.

## mw.cx.translation.updated

Fired when the translation section was updated using the MT card,
for example with the 'restore' or 'use source text' actions.

## mw.cx.translation.placeholders.ready

Fired after every section in the translation column has been filled with a placeholder.

## mw.cx.translation.title.change

Fired when the title for the translation is changed. Check for existing title listens for this.

## mw.cx.translation.save-started

Fired when a cxsave API call is beginning. Can be used to indicate the progress of save.

## mw.cx.translation.saved

Fired after a translation was successfully saved as a draft.

## mw.cx.translation.save-failed

Fired after a translation save failed

## mw.cx.draft.restoring

Fired when the draft translation restore started

## mw.cx.draft.restored

Fired when the draft translation restore finished successfully

## mw.cx.draft.restore-failed

Fired when the draft translation restore failed.

## mw.cx.dashboard.ready

Fired when the Content Translation dashboard is ready.

## mw.cx.cta.shown

Fired when the Content Translation entry point or campaign is shown. The unique campaign identifier is passed.

## mw.cx.cta.reject

Fired when the Content Translation entry point or campaign is rejected by a user.

## mw.cx.translation.validation.error

Fired when there are AbuseFilter based validation errors for the section.

## mw.cx.translation.validation.success

Fired when there are no AbuseFilter based validation errors for the section.
