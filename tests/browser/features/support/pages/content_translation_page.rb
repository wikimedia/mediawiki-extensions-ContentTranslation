class ContentTranslationPage
	include PageObject
	include URL
	page_url URL.url("Special:ContentTranslation")

	button(:publish_translation, class: "publish-translation")

	div(:source_column, class: "source")
	div(:translation_column, class: "translation")

	def translation_editing_area
		@browser.div(css: ".translation div[contenteditable]")
	end
end
