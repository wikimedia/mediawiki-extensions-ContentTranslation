@firefox @en.wikipedia.beta.wmflabs.org
Feature: Content translation screenshots

  These are scenarios for auto-translated screenshots for the ContentTranslation manual.

  Background:
    Given I am logged in

  @screenshots
  Scenario: Hover over the contributions link
    Given I am at a wiki page
    When I hover over the Contributions link in the personal menu
    Then I see a popover menu with different contribution types
      And I take a screenshot of the popover menu with different contribution types
