Workflow data models
---------------------
* SourceWikiPage - Instance of mw.cx.dm.WikiPage
* targetWikiPage - Instance of mw.cx.dm.WikiPage

Common services
---------------------
* mw.cx.MwApiRequestManager
* mw.cx.MachineTranslationService
* mw.cx.MachineTranslationManager
* mw.cx.SiteMapper

Translation initializer
------------------------
mw.cx.init - Initialize Common services & initiate mw.cx.init.Translation

1. Paint the initial translation view
2. Fetch the configuration for translation
3. Fetch Source Page Content
4. Fetch Draft Information
5. Fetch Draft
6. Enable Translation

Translation controller
------------------------
mw.cx.Translation - Save, fetch and restore implementation

mw.cx.TargetArticle - Prepare translation for publishing.
TODO: Currently instantiated in mw.cx.ui.TranslationView, I think we need to move this to mw.cx.Translation

User Interface
--------------
mw.cx.ui.TranslationView constructed using
1. mw.cx.ui.Header
 1. mw.cx.ui.Infobar
2. mw.cx.ui.Columns
 1. mw.cx.ui.SourceColumn
 2. mw.cx.ui.TranslationColumn
 3. mw.cx.ui.ToolsColumn

mw.cx.ui.TranslationView prepares the translation unit UI models based on translation unit Data models in mw.cx.dm.Translation

Translation data models
-----------------------
mw.cx.dm.SourcePage
mw.cx.dm.TargetPage
mw.cx.dm.Translation - Prepares translation unit Data models.

Translation Units
-----------------
Data model classes:

* mw.cx.dm.ExternalLinkTranslationUnit
 - **Inherits** from mw.cx.dm.TranslationUnit
 - **Matches** a 'mw:ExtLink'
* w.cx.dm.PoemTranslationUnit
 - **Inherits** from mw.cx.dm.TranslationUnit
 - **Matches** typeof='mw:Extension/poem'
* mw.cx.dm.SentenceTranslationUnit
 - **Inherits** from mw.cx.dm.TranslationUnit
 - **Matches** span class=cx-segment
* mw.cx.dm.ImageTranslationUnit
 - **Inherits** from mw.cx.dm.SectionTranslationUnit
 - **Matches** figure mw:Image/Thumb
* mw.cx.dm.ReferenceTranslationUnit
 - **Inherits** from mw.cx.dm.TranslationUnit
 - **Matches** span 'dc:references', 'mw:Extension/ref'
* mw.cx.dm.TemplateTranslationUnit
 - **Inherits** from mw.cx.dm.TranslationUnit
 - **Matches** typeof=mw:Transclusion
* mw.cx.dm.LinkTranslationUnit
 - **Inherits** from mw.cx.dm.TranslationUnit
* mw.cx.dm.SectionTranslationUnit
 - **Inherits** from mw.cx.dm.TranslationUnit
 - **Matches** mw.cx.dm.SourcePage.static.sectionTypes

UI model classes:

* mw.cx.ui.ExternalLinkTranslationUnit
 - **Inherits** from mw.cx.ui.TranslationUnit
 - **Matches** a 'mw:ExtLink'
* w.cx.ui.PoemTranslationUnit
 - **Inherits** from mw.cx.ui.TranslationUnit
 - **Matches** typeof='mw:Extension/poem'
* mw.cx.ui.SentenceTranslationUnit
 - **Inherits** from mw.cx.ui.TranslationUnit
 - **Matches** span class=cx-segment
* mw.cx.ui.ImageTranslationUnit
 - **Inherits** from mw.cx.ui.SectionTranslationUnit
 - **Matches** figure mw:Image/Thumb
* mw.cx.ui.ReferenceTranslationUnit
 - **Inherits** from mw.cx.ui.TranslationUnit
 - **Matches** span 'dc:references', 'mw:Extension/ref'
* mw.cx.ui.TemplateTranslationUnit
 - **Inherits** from mw.cx.ui.TranslationUnit
 - **Matches** typeof=mw:Transclusion
* mw.cx.ui.LinkTranslationUnit
 - **Inherits** from mw.cx.ui.TranslationUnit
* mw.cx.ui.SectionTranslationUnit
 - **Inherits** from mw.cx.ui.TranslationUnit
 - **Matches** mw.cx.ui.SourcePage.static.sectionTypes

Lifecycle of a translation unit
------------------------------
* The mw.cx.dm.Translation class get instantiated by mw.cx.init.Translation. This happens when the source page content is ready. Source page is parsed for translation sections. Elements matching mw.cx.dm.SourcePage.static.sectionTypes are top level translation units. mw.cx.dm.SourcePage wraps each of these sections using <section> tag.
* Note that only top level translation units are prepared at this time. No recursive parsing. (See mw.cx.dm.Translation.prototype.prepareTranslationUnits)
* If there is no saved translation, there won't be a target document for any translation units.
* If there is a translation corresponding to a source section, mw.cx.Translation.prototype.restore will set the target document to that translation unit.
* There is no initialization code for translation unit data models. And nothing happens till The UI is ready and UI data models initialized.

Once the translation UI is ready, and source article and saved translation (if any) is fetched, it is time for rendering each translation unit in interface. mw.cx.ui.TranslationView.prototype.loadTranslation is called by mw.cx.init.Translation, which then calls mw.cx.ui.TranslationView.prototype.prepareTranslationUnitUIs. This is also a non-recursive construction of translation unit UI models. The init method of each translation unit is called explicitly.

The init method of SectionTranslationUnit just initialize the source and target section properties and listens for events.

Issues:
1. This means, for a restored translation, the already translated status is not at all used to proceed with further initialization of sub translation units. This need fix. For already translated and restored sections, none of the sub translation units like links or references respond unless the translator clicks "twice". The first click is triggering the initialization of sub translation units. Which we can do even before.

The init method of All other translation units that inherit the init method of mw.cx.ui.TranslationUnit initiatializes the source and target sections, listens for events and immediate starts adapting. This is with the assumption that the non-section translation units are created when a SectionTranslationUnit is added to Translation column (by placeholder click or restore).
Issues:
1. In case of translation unit that is restored, this will cause unwanted adaptation. The adaptation should be conditional.

Section Translation unit's target document get initialized to a placeholder. And when user click on that placeholder, the actual translation begins. This behavior adds some complication. SectionTranslationUnit is also created for any block level elements such as figure captions, table rows or any such elements inside a section. Those elements cannot have a placeholder.
