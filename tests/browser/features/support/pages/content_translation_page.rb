class ContentTranslationPage
	include PageObject
	include URL
	page_url URL.url("Special:ContentTranslation?<%=params[:extra]%>")

	a(:view_page, class: "view-page")

	button(:publish_translation, class: "publish-translation")

	def column(column_type)
		@browser.div(class: ".ct-column.#{column_type}")
	end

	def language_label(column_type)
		column(column_type).span(class: "language-label")
	end

	def translation_editing_area
		@browser.div(css: ".translation div[contenteditable]")
	end
end
