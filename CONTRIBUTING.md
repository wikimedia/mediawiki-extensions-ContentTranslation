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

## Building documentation

ContentTranslation uses [JSDuck](https://github.com/senchalabs/jsduck) to
process documentation comments embedded in the code. To build the documentation,
you will need `ruby`, `gem`, and `jsduck` installed.

### Installing ruby and gem

You're mostly on your own here, but we can give some hints for Mac OS X.

##### Installing Gem in Mac OS X
Ruby ships with OSX but may be outdated. Use [Homebrew](https://mxcl.github.com/homebrew/):
```sh
$ brew install ruby
```

If you've never used `gem` before, don't forget to add the gem's bin to your
`PATH` ([howto](https://stackoverflow.com/a/14138490/319266)).

### Installing jsduck

Once you have gem, installing [JSDuck](https://github.com/senchalabs/jsduck) is easy:
```sh
$ gem install --user-install jsduck
```

### Running jsduck

Creating the documentation is easy:
```sh
$ cd ContentTranslation
$ jsduck <source> --output docs
```

You may need to set `MW_INSTALL_PATH` in your environment to the location of
your mediawiki installation if ContentTranslation is not checked out directly
in the mediawiki extensions folder (for example, if you're using a symlink).

The generated documentation is in the `docs/` subdirectory.  View the
documentation at
`http://URL_OF_MEDIAWIKI/extensions/ContentTranslation/docs/`
(for example, <http://localhost/w/extensions/ContentTranslation/docs>).

Note that `jsduck` doesn't support browsing is the `file:` protocol.

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
here, for consistency. See [JSDuck](https://github.com/senchalabs/jsduck/wiki)
for more elaborate documentation.

* @class Name (optional, guessed)
* @abstract
* @extends ClassName
* @mixins ClassName
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
