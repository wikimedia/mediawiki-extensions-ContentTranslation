Feature: New translation from interlanguage link

  As a wiki editor
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
    Then I see a blue link to "Dansk" in the list of the interlanguage links
      And I don't see any red links in the list of the interlanguage links

  Scenario: Logged in user viewing a page that has a corresponding page in the target language
    Given I set "nl" as the interface language
    When I am on a page with an interlanguage link to "nl"
    Then I see a blue link to "Nederlands" in the list of the interlanguage links
      And I don't see any red links in the list of the interlanguage links

  Scenario: Logged in user viewing a page that doesn't have a corresponding page in the target language
    Given I set "nl" as the interface language
    When I am on a page with an interlanguage link to "da"
    Then I see a red link to "Nederlands" in the list of the interlanguage links
      And I see a blue link to "Dansk" in the list of the interlanguage links

  Scenario: Logged in user viewing a page without interlanguage links
    Given I set "nl" as the interface language
    When I am on a page without interlanguage links
    Then I see a red link to "Nederlands" in the list of the interlanguage links

  Scenario: Clicking on the red link triggers a dialogue
    Given I set "nl" as the interface language
    When I click on the red link to "Nederlands" in the list of the interlanguage links
    Then I see a "New Page" dialog
