@firefox @login
Feature: "New Page" dialog

  As a wiki editor
  I can see a dialog when I click on the red link in the list of interlanguage links on the content page,
  so that I can see the option to create the translation of the content from scratch

  Design:
  - http://pauginer.github.io/prototype-uls/#mies

  Backgroud:
    Given I am logged in
      And I am on the English article of "Ludwig Mies van der Rohe"
      And I have reset my preferences
      And I set "Nederlands" as the interface language
    When I click on the red link to "Nederlands" on the list of interlanguage links
    Then I see a "New Page" dialog

  Scenario: Clicking on the "New Page" dialog gives an option to start a translation from scratch
    Then I see a input box to write the title of the content in target language in the dialog
      And I see a "Create from scratch" button in the dialog
      And I see a "Translate from English" button in the dialog

  Scenario: Clicking on the "Translate from" button opens the Universal Language Selector
    Given I see a "Translate from" split button in the dialog
    When I click on the second part of the "Translate from" button
    Then I see the Universal Language Selector

  Scenario: Clicking on the "Translate from" button helps the user to change the source language
    Given I see a "Translate from" split button in the dialog
      And I click on the second part of the "Translate from" button
      And I see the Universal Language Selector
    When I select "Malayalam" from the Universal Language Selector
    Then I see a "Translate from Malayalam" button in the dialog
      And I do not see the Universal Language Selector anymore

  Scenario: Clicking on the "Create from scratch" button takes the user to Special:ContentTranslation
    Given I see a input box to write the title of the content in target language in the dialog
      And I see a "Create from scratch" button in the dialog
    When I enter the title "Ludwig Mies van der Rohe" in the input box
      And I click the "Create from scratch" button in the dialog
    Then I see the page Special:ContentTranslation
      And I see the source pane title as "Ludwig Mies van der Rohe"
      And I see the translation pane title as "Ludwig Mies van der Rohe"

  Scenario: Keeping the the input box blank makes the title of the translation pane same as the source pane
    Given I see a input box to write the title of the content in the target language in the dialog
      And I see a "Create from scratch" button in the dialog
    When I keep the input box blank
      And I click on the "Create from Scratch" button in the dialog
    Then I see the page Special:ContentTranslation
      And I see the source pane title as "Ludwig Mies van der Rohe"
      And I see the translation pane title as "Ludwig Mies van der Rohe"
