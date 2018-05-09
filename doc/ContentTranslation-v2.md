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
mw.cx.TranslationController - Save, fetch and restore implementation

mw.cx.TargetArticle - Prepare translation for publishing.

User Interface
--------------
ve.init.mw.CXTarget constructed using
1. mw.cx.ui.Header
 1. mw.cx.ui.Infobar
2. mw.cx.ui.Columns
 1. mw.cx.ui.SourceColumn
 2. mw.cx.ui.TranslationColumn
 3. mw.cx.ui.ToolsColumn

Translation data models
-----------------------
mw.cx.dm.Translation - Prepares translation unit Data models.

ve-cx
-----
VisualEditor dm, ui, ce classes are inherited and customized wherever required.

The ve.ui.Surface is customized to have the VE inspectors and context items in tools column.
