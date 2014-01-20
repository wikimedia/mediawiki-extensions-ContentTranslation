class TranslatedPageHistory
	include PageObject
	include URL
	page_url URL.url("User:TranslatorToDa/Bratislava?action=history")

	span(:contenttranslation_tag, class: "mw-tag-marker-contenttranslation")
end
