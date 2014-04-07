When(/^I set "(.*?)" as the interface language$/) do |code|
	on(RedLinkPage) do |page|
		page.trigger_cog_element.click
		page.uls_more_languages_element.click
		page.language_filter = code
		# Because one browser wants :enter and other :return -- sigh
		page.language_filter_element.send_keys [:enter, "\n"]
		page.uls_settings_apply_element.click
	end
end

When(/^I am on a page with an interlanguage link to "(.+?)"$/) do |code|
	on(RedLinkPage).create_page("This is a red interlanguage link test page. [[#{code}:Target]]")
	visit(RedLinkPage)
end

When(/^I am on a page without interlanguage links$/) do
	on(RedLinkPage).create_page("This is a red interlanguage link test page without links.")
	visit(RedLinkPage)
end

Then(/^I don't see any red links in the list of the interlanguage links$/) do
	on(RedLinkPage).red_interlanguage_link_item_element.should_not exist
end

Then(/^I see a blue link to "(.*?)" in the list of the interlanguage links$/) do |autonym|
	on(RedLinkPage).blue_interlanguage_link(autonym).should be_visible
end

Then(/^I see a red link to "(.*?)" in the list of the interlanguage links$/) do |autonym|
	on(RedLinkPage).red_interlanguage_link(autonym).should be_visible
end
