Feature: Content translation special page

  As a wiki editor
  I can write a translation next to the original article,
  so that I can manually create a translation without switching tabs.

  Design:
   - https://www.mediawiki.org/wiki/Content_translation
   - https://pauginer.github.io/prototype-translate/content-translation.html#mies-nl

  These scenarios test the basic functionality of the Special:ContentTranslation page.

  Scenario: Anonymous user cannot use Content translation.
    Given I am on the content translation page in an English wiki, translating the article "Bratislava" to Danish
    Then I see the message "You must be logged in to translate in this page."
      And I don't see a source column
      And I don't see a translation column
      And I don't see a "Publish Translation"

  Scenario: Logged in user viewing the special page for translation.
    Given I am logged in
      And I am on the content translation page in an English wiki, translating the article "Bratislava" to Danish
    Then I see a source column with the content of the article "Bratislava"
      And the language code of the source column is "en"
      And the direction of the source column is left-to-right
      And I see the title "Bratislava" at the top of the source column
      And I see a language label saying "English" below the source column's title
      And I see a "view article" link that points to the page "Bratislava" on the same wiki
      And I see a translation column with an empty editing area
      And the translation column's language code is "da"
      And the translation column's direction is left-to-right
      And I see an input box pre-filled with the text "Bratislava" above the writing area in the second column
      And I see "dansk" below the translation column's title
      And I see an translation information column
      And I see a "Publish Translation" button
      And I see a translation progress bar

  Scenario: Writing some translation text and saving it
    Given I am logged in
      And I am on the content translation page in an English wiki, translating the article "Bratislava" to Danish
    When I write "Bratislava er hovedstad og største by i Slovakiet." in the editing area in the translation column
      And I press the "Publish Translation" button
    Then the page "User:TranslatorToDa/Bratislava" is displayed
      And the content of the page is "Bratislava er hovedstad og største by i Slovakiet."
      And the first version in the history of the page "User:TranslatorToDa/Bratislava" should have the tag "ContentTranslation"
