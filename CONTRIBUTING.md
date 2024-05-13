# Contributing to Content translation

Thank you for helping us develop Content translation!

This document describes how to report bugs, set up your development
environment, run tests, and build documentation. It also provides the coding
conventions we use in the project.

## Bug reports

Please report bugs to [phabricator.wikimedia.org](https://phabricator.wikimedia.org)
using the `ContentTranslation` project. Don't worry about specifying priority
or security.

## Running tests

To run the tests in a web browser, make sure your MediaWiki install is
[configured](https://www.mediawiki.org/wiki/Manual:JavaScript_unit_testing) to
allow running of tests. Set in `LocalSettings.php`:
```php
$wgEnableJavaScriptTest = true;
```

Then open `http://URL_OF_MEDIAWIKI/index.php/Special:JavaScriptTest/qunit`
(for example, <http://localhost/w/index.php/Special:JavaScriptTest/qunit>).

## ContentTranslation Code Guidelines

We inherit the code structure (about whitespace, naming and comments)
conventions from MediaWiki.

See [Manual:Coding conventions/JavaScript](https://www.mediawiki.org/wiki/Manual:Coding_conventions/JavaScript)
on mediawiki.org.

Git commit messages should follow the conventions described in
<https://www.mediawiki.org/wiki/Gerrit/Commit_message_guidelines>.

### Events and hooks

This project's UI is event driven. See https://www.mediawiki.org/wiki/Content_translation/Front_end.
Whenever possible, use the mw.hook framework for JavaScript events.

Document each hook that you add in the hooks.md file.

### Documentation comments

* End sentences in a full stop.
* Continue sentences belonging to an annotation on the next line, indented with an
  additional space.
* Types in documentation comments should be separated by a pipe character. Use types
  that are listed in the Types section of this document, otherwise use the identifier
  (full path from the global scope) of the constructor function (e.g. `{ve.dm.BranchNode}`).

### Annotations

We use the following annotations. They should be used in the order as they are described
here, for consistency.

* @class Name (optional, guessed)
* @abstract
* @extends ClassName
* @mixes ClassName
* @constructor
* @private
* @static
* @method name (optional, guessed)
* @template
* @property name (optional, guessed)
* @until Text: Optional text.
* @source Text
* @context {Type} Optional text.
* @param {Type} name Optional text.
* @emits name
* @return {Type} Optional text.
* @chainable
* @throws {Type}

### Types

Special values:
* undefined
* null
* this

Primitive types:
* boolean
* number
* string

Built-in classes:
* Array
* Date
* Function
* RegExp
* Object

Browser classes:
* HTMLElement

jQuery classes:
* jQuery
* jQuery.Event
