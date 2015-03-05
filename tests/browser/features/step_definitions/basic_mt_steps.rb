When(/^I click the translation column$/) do
  on(ContentTranslationPage).translation_editor_element.click
end

Then(/^I see the text "(.*?)" in the editing area in the translation column$/) do |text|
  on(ContentTranslationPage).translation_editor_element.text.should == text
end
