Feature: Content translation special page

  As a wiki editor
  I can write a translation next to the original page,
  so that I can manually create a translation without switching tabs.

  Design:
   - https://www.mediawiki.org/wiki/Content_translation
   - https://pauginer.github.io/prototype-translate/content-translation.html#mies-nl

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
    Then I see a source column with the content of the page "Bratislava"
      And the language code of the source column is "en"
      And the direction of the source column is "ltr"
      And I see the title "Bratislava" at the top of the source column
      And I see a language label saying "English" below the source column's title
      And I see a "view page" link that points to the page "Bratislava" on the same wiki
      And I see a translation column with an empty editing area
      And the language code of the translation column is "da"
      And the direction of the translation column is "ltr"
      And I see an input box pre-filled with the text "Bratislava" above the editing area in the second column
      And I see a language label saying "dansk" below the translation column's title
      And I see a translation information column
      And I see a "Publish Translation" button
      And I see a translation progress bar

  Scenario: Writing some translation text and saving it
    Given I am logged in
      And I am on the content translation page in a wiki in English, translating the page "Bratislava" to Danish
    When I write "Bratislava er hovedstad og største by i Slovakiet." in the editing area in the translation column
      And I press the "Publish Translation" button
    Then the page "User:TranslatorToDa/Bratislava" is displayed
      And the content of the page is "Bratislava er hovedstad og største by i Slovakiet."
      And the first version in the history of the page "User:TranslatorToDa/Bratislava" should have the tag "ContentTranslation"
