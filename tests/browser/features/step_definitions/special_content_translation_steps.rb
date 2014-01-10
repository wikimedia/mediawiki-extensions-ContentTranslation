Given(/^I am on the content translation page in a wiki in (.+?), translating the page "(.+?)" to (.+)$/) do |source_language, page_name, target_language|
	visit(ContentTranslationPage, :using_params => {:extra => "title=#{page_name}&lang=#{target_language}"})
end

When(/^I press the "Publish Translation" button$/) do
	on(ContentTranslationPage).publish_translation
end

When(/^I write "(.*?)" in the editing area in the translation column$/) do |translation|
	on(ContentTranslationPage).translation_editor.send_keys(translation)
end

Then(/^I don't see a "Publish Translation" button$/) do
	on(ContentTranslationPage).publish_translation_element.should_not be_visible
end

Then(/^I don't see the (.+) column$/) do |column_type|
	on(ContentTranslationPage).column(column_type).should_not be_visible
end

Then(/^I see a "Publish Translation" button$/) do
	on(ContentTranslationPage).publish_translation_element.should be_visible
end

Then(/^I see a "view page" link in the source column$/) do
	on(ContentTranslationPage).view_page.should be_visible
end

Then(/^I see a language label saying "(.*?)" below the (.+) column's title$/) do |language_name, column_type|
	on(ContentTranslationPage).language_label(column_type).should == language_name
end

Then(/^I see an input box pre\-filled with the text "(.*?)" above the editing area in the second column$/) do |text|
	on(ContentTranslationPage).target_title.should == text
end

Then(/^I see a source column with the text "(.*?)"$/) do |text|
	on(ContentTranslationPage).column("source").should == text
end

Then(/^I see a translation column with an empty editing area$/) do
	on(ContentTranslationPage).translation_editor.should == ""
end

Then(/^I see a translation information column$/) do
	on(ContentTranslationPage).column("information").should be_visible
end

Then(/^I see a translation progress bar$/) do
	on(ContentTranslationPage).progress_bar_element.should be_visible
end

Then(/^I see the message "You must be logged in to translate in this page\."$/) do
	on(ContentTranslationPage).content.should == "You must be logged in to translate this page"
end

Then(/^I see the title "(.*?)" at the top of the source column$/) do |source_page_title|
	on(ContentTranslationPage).source_title.should == source_page_title
end

Then(/^the content of the page is "(.*?)"$/) do |page_content|
	pending # express the regexp above with the code you wish you had
end

Then(/^the direction of the (.+) column is "(.+)"$/) do |column_type, direction|
	on(ContentTranslationPage).column(column_type).attribute("dir").should == direction
end

Then(/^the first version in the history of the page "(.+?)" should have the tag "(.+?)"$/) do |page_title, tag_name|
	pending # express the regexp above with the code you wish you had
end

Then(/^the language code of the (.+) column is "(.+)"$/) do |column_type, language_code|
	on(ContentTranslationPage).column(column_type).attribute("lang").should == language_code
end

Then(/^the page "(.+?)" is displayed$/) do |page_title|
	on(TranslatedPage).title.should == page_title
end

Then(/^the "view page" link points to the page "(.*?)" on the same wiki$/) do |source_page|
	source_page_in_url = source_page.gsub(" ", "_")
	on(ContentTranslationPage).view_page_element.attribute("href").should match(/#{source_page_in_url}$/)
end
