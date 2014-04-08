Feature: New translation from interlanguage link

  As a wiki editor
  I can initiate a translation directly from the content page,
  so that I can immediately discover how to contribute.

  Design:
  - http://pauginer.github.io/prototype-uls/#mies

  These scenarios check the main entry point to the Special:ContentTranslation page.

  Scenario: Anonymous user using the wiki's content language viewing a page that doesn't have a corresponding page in the target language
    Given I am on a page with an interlanguage link to "da"
    Then I don't see any red links in the list of the interlanguage links

  Scenario: Anonymous user using Dutch as UI language viewing a page that doesn't have a corresponding page in the target language
    Given I am on a page with an interlanguage link to "da"
      And I set "nl" as the interface language
    Then I don't see any red links in the list of the interlanguage links
