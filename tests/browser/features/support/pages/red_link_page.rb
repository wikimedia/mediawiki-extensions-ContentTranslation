class RedLinkPage
	include PageObject
	include URL

	page_url URL.url("Red interlanguage link test")

	button(:uls_settings_apply, class: "uls-settings-apply")
	button(:uls_more_languages, class: "uls-more-languages")

	li(:red_interlanguage_link_item, class: "cx-new-interlanguage-link")

	span(:trigger_cog, class: "uls-settings-trigger")

	text_field(:language_filter, id: "languagefilter")

	def create_page(text)
		if (ENV["MEDIAWIKI_API_URL"] == nil)
			abort "Environment variable MEDIAWIKI_API_URL must be set in order to create a target page for this test"
		end

		client = MediawikiApi::Client.new(ENV["MEDIAWIKI_API_URL"])
		client.log_in(ENV["MEDIAWIKI_USER"], ENV["MEDIAWIKI_PASSWORD"])
		client.create_page("Red interlanguage link test", text)
	end

	def blue_interlanguage_link(autonym)
		@browser.li(class: "interlanguage-link", text: autonym)
	end

	def red_interlanguage_link(autonym)
		@browser.li(class: "cx-new-interlanguage-link", text: autonym)
	end
end
