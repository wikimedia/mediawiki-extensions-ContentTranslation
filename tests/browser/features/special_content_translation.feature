@firefox @language-stage.wmflabs.org @login
Feature: Content translation special page

  As a wiki editor
  I can write a translation next to the original page,
  so that I can manually create a translation without switching tabs.

  Design:
   - https://www.mediawiki.org/wiki/Content_translation
   - http://pauginer.github.io/prototype-translate/content-translation.html#mies-nl

  These scenarios test the basic functionality of the Special:ContentTranslation page.

  Scenario: Anonymous user cannot use Content translation.
    When I am on the content translation page in a wiki in English, translating the page "Bratislava" to Danish
    Then I see the message "You must be logged in to translate in this page."
      And I don't see the source column
      And I don't see the translation column
      And I don't see a "Publish Translation" button

  Scenario: Logged in user viewing the special page for translation.
    Given I am logged in
    When I am on the content translation page in a wiki in English, translating the page "Bratislava" to Danish
    # This fails because we don't have proper loading from a local server yet
    # Then I see a source column with the text "Bratislava is the capital of Slovakia and the country's largest city."
      And the source column text is not editable
      And the language code of the source column should be "en"
      And the direction of the source column is "ltr"
      And I see the title "Bratislava" at the top of the source column
      And I see a language label saying "English" below the source column's title
      And I see a "view page" link that points to the page "Bratislava" on the same wiki
      And I see a translation column with an empty editing area
      And the language code of the translation column should be "da"
      And the direction of the translation column is "ltr"
      And I should see an input box pre-filled with the text "Bratislava" above the editing area in the second column
      And I see a language label saying "dansk" below the translation column's title
      And I see a translation tools column
      And I see a search box in the translation tools column
      And I see a "Publish Translation" button
      And the "Publish Translation" button is disabled
      And I see the username at the top of the page
      And I see a translation progress bar
      And the translation progress bar is in 0% state
      And the text near the translation progress bar says "0% translated"

  Scenario: Writing some translation text enables the "Publish Translation" button
    Given I am logged in
      And I am on the content translation page in a wiki in English, translating the page "Bratislava" to Danish
    When I write "Bratislava er hovedstad og største by i Slovakiet." in the editing area in the translation column
    Then the "Publish Translation" button is enabled

  Scenario: Deleting the translation text disables the "Publish Translation" button
    Given I am logged in
      And I am on the content translation page in a wiki in English, translating the page "Bratislava" to Danish
    When I write "Bratislava er hovedstad og største by i Slovakiet." in the editing area in the translation column
      And I empty the editing area in the translation column
    Then the "Publish Translation" button is disabled

  Scenario: Writing some translation text and saving it
    Given I am logged in
      And I am on the content translation page in a wiki in English, translating the page "Bratislava" to Danish
    When I write "Bratislava er hovedstad og største by i Slovakiet." in the editing area in the translation column
      And I press the "Publish Translation" button
    Then I see a notification bubble that begins with the words "Page published at"

  Scenario: Writing some translation text and saving it
    Given I am logged in
      And I am on the content translation page in a wiki in English, translating the page "Bratislava" to Danish
    When I write "Bratislava er hovedstad og største by i Slovakiet." in the editing area in the translation column
      And I press the "Publish Translation" button
      And I click the link in the notification bubble
    Then the page "User:TranslatorToDa/Bratislava" is displayed
      And the content of the page is "Bratislava er hovedstad og største by i Slovakiet."
      And the first version in the history of the page "User:TranslatorToDa/Bratislava" should have the tag "ContentTranslation"
