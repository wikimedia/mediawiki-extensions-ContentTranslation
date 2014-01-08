Given(/^I am on the content translation page in a wiki in (.+?), translating the page "(.+?)" to (.+)$/) do |source_language, page_name, target_language|
	pending # express the regexp above with the code you wish you had
end

When(/^I press the "Publish Translation" button$/) do
	on(ContentTranslationPage).publish_translation
end

When(/^I write "(.*?)" in the editing area in the translation column$/) do |translation|
	on(ContentTranslationPage).translation_editing_area = translation
end

Then(/^I don't see a "Publish Translation" button$/) do
	on(ContentTranslationPage).publish_translation_element.should_not be_visible
end

Then(/^I don't see a source column$/) do
	on(ContentTranslationPage).source_column.should_not be_visible
end

Then(/^I don't see a translation column$/) do
	on(ContentTranslationPage).translation_column.should_not be_visible
end

Then(/^I see a "Publish Translation" button$/) do
	on(ContentTranslationPage).publish_translation_element.should be_visible
end

Then(/^I see a "view page" link in the source column$/) do
	on(ContentTranslationPage).view_page.should be_visible
end

Then(/^I see a language label saying "(.*?)" below the source column's title$/) do |language_name|
	pending # express the regexp above with the code you wish you had
end

Then(/^I see a language label saying "(.*?)" below the translation column's title$/) do |language_name|
	pending # express the regexp above with the code you wish you had
end

Then(/^I see an input box pre\-filled with the text "(.*?)" above the editing area in the second column$/) do |text|
	pending # express the regexp above with the code you wish you had
end

Then(/^I see a source column with the content of the page "(.*?)"$/) do |page_name|
	pending # express the regexp above with the code you wish you had
end

Then(/^I see a translation column with an empty editing area$/) do
	pending # express the regexp above with the code you wish you had
end

Then(/^I see a translation information column$/) do
	pending # express the regexp above with the code you wish you had
end

Then(/^I see a translation progress bar$/) do
	pending # express the regexp above with the code you wish you had
end

Then(/^I see the message "You must be logged in to translate in this page\."$/) do
	pending # express the regexp above with the code you wish you had
end

Then(/^I see the title "(.*?)" at the top of the source column$/) do |page_title|
	pending # express the regexp above with the code you wish you had
end

Then(/^the content of the page is "(.*?)"$/) do |page_content|
	pending # express the regexp above with the code you wish you had
end

Then(/^the direction of the source column is "(.+)"$/) do |direction|
	pending # express the regexp above with the code you wish you had
end

Then(/^the direction of the translation column is "(.+)"$/) do |direction|
	pending # express the regexp above with the code you wish you had
end

Then(/^the first version in the history of the page "(.+?)" should have the tag "(.+?)"$/) do |page_title, tag_name|
	pending # express the regexp above with the code you wish you had
end

Then(/^the language code of the source column is "(.+)"$/) do |language_code|
	pending # express the regexp above with the code you wish you had
end

Then(/^the language code of the translation column is "(.+?)"$/) do |language_code|
	pending # express the regexp above with the code you wish you had
end

Then(/^the page "(.+?)" is displayed$/) do |page_title|
	pending # express the regexp above with the code you wish you had
end

Then(/^the "view page" link points to the page "(.*?)" on the same wiki$/) do |source_page|
	source_page_in_url = source_page.gsub(" ", "_")
	on(ContentTranslationPage).view_page_element.attribute("href").should match(/#{source_page_in_url}$/)
end
