When(/^I am on a page with an interlanguage link to "(.+?)"$/) do |code|
  on(RedLinkPage).create_page("This is a red interlanguage link test page. [[#{code}:Target]]")
  visit(RedLinkPage)
end

When(/^I am on a page without interlanguage links$/) do
  on(RedLinkPage).create_page("This is a red interlanguage link test page without links.")
  visit(RedLinkPage)
end

When(/^I click on the red link to "(.*?)" in the list of the interlanguage links$/) do |autonym|
  on(RedLinkPage).red_interlanguage_item_with_autonym(autonym).when_present.click
end

When(/^I click outside of the red link dialog$/) do
  on(RedLinkPage).article_content_element.click
end

When(/^I click the "Create from scratch" button$/) do
  on(RedLinkPage).create_from_scratch_element.when_visible.click
end

When(/^I click the "Translate from English" button$/) do
  on(RedLinkPage).translate_from_element.when_visible.click
end

When(/^I click the input box in the red link dialog$/) do
  on(RedLinkPage).translated_title_element.when_visible.click
end

When(/^I click on the X button in the red link dialog$/) do
  on(RedLinkPage).dialog_close_button.click
end

When(/^I set "(.*?)" as the interface language$/) do |code|
  on(RedLinkPage) do |page|
    page.trigger_cog_element.click
    page.uls_more_languages_element.when_present.click
    page.language_filter = code
    # Because one browser wants :enter and other :return -- sigh
    page.language_filter_element.send_keys [:enter, "\n"]
    page.uls_settings_apply_element.click
    page.wait_until do
      @browser.url.match /setlang=#{code}/
    end
  end
end

When(/^I write "(.+)" in the input box in the red link dialog$/) do |title|
  on(RedLinkPage).translated_title = title
end

Then(/^I should not see any red links in the list of the interlanguage links$/) do
  on(RedLinkPage).red_interlanguage_link_item_element.should_not exist
end

Then(/^I should not see a dialog for creating a page in "(.+?)"$/) do |autonym|
  on(RedLinkPage).page_creation_dialog(autonym).should_not be_visible
end

Then(/^I should see a blue link to "(.*?)" in the list of the interlanguage links$/) do |autonym|
  on(RedLinkPage).blue_interlanguage_item_with_autonym(autonym).should be_visible
end

Then(/^I should see a dialog for creating a page in "(.+?)"$/) do |autonym|
  on(RedLinkPage).page_creation_dialog(autonym).should be_visible
end

Then(/^I should see a red link to "(.+?)" in the list of the interlanguage links$/) do |autonym|
  on(RedLinkPage).red_interlanguage_item_with_autonym(autonym).should be_visible
end

Then(/^the Content translation page should open$/) do
  on(ContentTranslationPage).cx_widget_element.should be_visible
end

Then(/^the page creation page should open$/) do
  on(PageCreationPage).editing_area.should == ""
end

Then(/^the name of the page should appear in the main title$/) do
  on(PageCreationPage).first_heading.should match /Red interlanguage link test/
end

Then(/^the name "(.+?)" should appear in the main title$/) do |target_title|
  on(PageCreationPage).first_heading.should match /#{target_title}/
end

Then(/^the name of the page should appear in the (.+) column$/) do |column_type|
  on(ContentTranslationPage).title(column_type).text.should == "Red interlanguage link test"
end

Then(/^the title in the translation column should be "(.*?)"$/) do |target_title|
  on(ContentTranslationPage).title("translation").text.should == target_title
end

Then(/^the language of the editing area should be "(.*?)"$/) do |code|
  on(PageCreationPage).editing_area_element.attribute_value("lang").should == code
end

Then(/^the heading of the dialog for creating a page should include "(.+?)"$/) do |text|
  on(RedLinkPage).dialog_heading.should match text
end

Then(/^the label of the input box in the dialog for creating a page should be "(.*?)"$/) do |text|
  on(RedLinkPage).input_label.should == text
end
