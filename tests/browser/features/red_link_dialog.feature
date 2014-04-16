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
      And I set "nl" as the interface language
      And I am on a page without interlanguage links
      And I click on the red link to "Nederlands" in the list of the interlanguage links

  Scenario: Clicking outside the red link dialog triggers closes the dialog
    When I click the input box in the red link dialog
      And I click outside of the red link dialog
    Then I should not see a dialog for creating a page in "Nederlands"

  Scenario: Clicking the red link when the dialog is open closes the dialog
    When I click on the red link to "Nederlands" in the list of the interlanguage links
    Then I should not see a dialog for creating a page in "Nederlands"

  Scenario: Clicking the close button closes the dialog
    When I click on the X button in the red link dialog
    Then I should not see a dialog for creating a page in "Nederlands"

  Scenario: Clicking "Translate from English"
    When I click the "Translate from English" button
    Then the Content translation page should open
      And the language code of the translation column should be "nl"
      And the name of the page should appear in the source column
      And the name of the page should appear in the translation column

  Scenario: Writing a title and clicking "Translate from English"
    When I write "Translated title" in the input box in the red link dialog
      And I click the "Translate from English" button
    Then the Content translation page should open
      And the language code of the translation column should be "nl"
      And the name of the page should appear in the source column
      And the title in the translation column should be "Translated title"
      And I should see an input box pre-filled with the text "Translated title" above the editing area in the second column

  Scenario: Clicking "Create from scratch"
    When I click the "Create from scratch" button
    Then the page creation page should open
      And the name of the page should appear in the main title
      And the language of the editing area should be "nl"

  Scenario: Writing a title and clicking "Create from scratch"
    When I write "Translated title" in the input box in the red link dialog
      And I click the "Create from scratch" button
    Then the page creation page should open
      And the name "Translated title" should appear in the main title
      And the language of the editing area should be "nl"
