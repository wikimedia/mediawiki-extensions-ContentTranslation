Feature: New translation from interlanguage link

  As a wiki editor
  I can initiate a translation directly from the content page,
  so that I can immediately discover how to contribute.

  Design:
  - http://pauginer.github.io/prototype-uls/#mies

  These scenarios check the main entry point to the Special:ContentTranslation page.
  The page "Kolkata" is created with an interlanguage link to Dutch.
  The page "Luis Mies van der Rohe" is created with an interlanguage link to Danish.

  Scenario: Anonymous user using the wiki's content language viewing a page that doesn't have a corresponding page in the target language
    Given I am on the page "Luis Mies van der Rohe"
    Then I don't see any red link in the list of the interlanguage links

  Scenario: Anonymous user using Dutch as UI language viewing a page that doesn't have a corresponding page in the target language
    Given I am on the page "Luis Mies van der Rohe"
      And I set "Nederlands" as the interface language
    Then I don't see any red link in the list of the interlanguage links

  Scenario: Logged in user viewing a page that has a corresponding page in the target language
    Given I am logged in
      And I have reset my preferences
      And I set "Nederlands" as the interface language
    When I am on the page "Kolkata"
    Then I see a blue link to "Nederlands" in the list of the interlanguage links
      And I don't see any red link in the list of the interlanguage links

  Scenario: Logged in user viewing a page that doesn't have a corresponding page in the target language
    Given I am logged in
      And I have reset my preferences
      And I set "Nederlands" as the interface language
    When I am on the page "Luis Mies van der Rohe"
    Then I see a red link to "Nederlands" in the list of the interlanguage links
      And I see a blue link to "Dansk" in the list of the interlanguage links

  Scenario: Clicking on the red link triggers a dialogue
    Given I am logged in
      And I have reset my preferences
      And I set "Nederlands" as the interface language
      And I am on the page "Luis Mies van der Rohe"
    When I click on the red link to "Nederlands" in the list of the interlanguage links
    Then I see a "New Page" dialog
