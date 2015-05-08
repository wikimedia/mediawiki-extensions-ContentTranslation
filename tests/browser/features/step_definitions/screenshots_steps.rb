Given(/^I am at a wiki page$/) do
  visit RedLinkPage
end

When(/^I hover over the Contributions link in the personal menu$/) do
  on(RedLinkPage).personal_contributions_link_element.hover
end

Then(/^I see a popover menu with different contribution types$/) do
  expect(on(RedLinkPage).contributions_popover_element).to be_visible
end

Then(/^I take a screenshot of the popover menu with different contribution types$/) do
  Screenshot.capture(
    @browser,
    "ContentTranslation_Contributions_popover-#{ENV['LANGUAGE_SCREENSHOT_CODE']}.png",
    [
      @current_page.personal_contributions_link_element,
      @current_page.contributions_popover_element
    ],
    3
  )
end
