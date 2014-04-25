@firefox @language-stage.wmflabs.org @login
Feature: New translation from interlanguage link

  As a registered wiki editor who uses a wiki in a different language
  I can initiate a translation directly from the content page,
  so that I can immediately discover how to contribute.

  Design:
  - http://pauginer.github.io/prototype-uls/#mies

  These scenarios check the main entry point to the Special:ContentTranslation page.

  Background:
    Given I am logged in
      And I have reset my preferences

  Scenario: Logged in user using the wiki's content language viewing a page that doesn't have a corresponding page in the target language
    When I am on a page with an interlanguage link to "da"
    Then I should see a blue link to "Dansk" in the list of the interlanguage links
      And I should not see any red links in the list of the interlanguage links

  Scenario: Logged in user viewing a page that has a corresponding page in the target language
    Given I set "nl" as the interface language
    When I am on a page with an interlanguage link to "nl"
    Then I should see a blue link to "Nederlands" in the list of the interlanguage links
      And I should not see any red links in the list of the interlanguage links

  Scenario: Logged in user viewing a page that doesn't have a corresponding page in the target language
    Given I set "nl" as the interface language
    When I am on a page with an interlanguage link to "da"
    Then I should see a red link to "Nederlands" in the list of the interlanguage links
      And I should see a blue link to "Dansk" in the list of the interlanguage links

  Scenario: Logged in user viewing a page without interlanguage links
    Given I set "nl" as the interface language
    When I am on a page without interlanguage links
    Then I should see a red link to "Nederlands" in the list of the interlanguage links

  Scenario: Clicking on the red link shows a dialog box
    Given I set "nl" as the interface language
      And I am on a page without interlanguage links
    When I click on the red link to "Nederlands" in the list of the interlanguage links
    Then I should see a dialog for creating a page in "Nederlands"
      And the heading of the dialog for creating a page should include "This page does not exist in Nederlands yet"
      And the label of the input box in the dialog for creating a page should be "Title for the new page in Nederlands:"
