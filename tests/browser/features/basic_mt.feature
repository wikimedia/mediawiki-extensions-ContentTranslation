@firefox @language-stage.wmflabs.org @login
Feature: Basic machine translation.

  As a user,
  I can use machine translations as templates,
  so that I can translate faster.

  Design:
   - https://www.mediawiki.org/wiki/Content_translation
   - http://pauginer.github.io/prototype-translate/content-translation.html#mies-nl

  These scenarios test the basic functionality of machine translation on the Special:ContentTranslation page.

  Background:
    Given I am logged in

  Scenario: Clicking the translation area and getting a translation
    When I am on the content translation page in a wiki in English, translating the page "Ares" to Danish
      And I click the translation column
    Then I see the text "Nerf" in the editing area in the translation column
