class ContentTranslationPage
	include PageObject
	include URL
	page_url URL.url("Special:ContentTranslation?<%=params[:extra]%>")

	a(:view_page, class: "view-page")

	button(:publish_translation, class: "publish-translation")

	div(:progress_bar, class: "ct-progress-bar")

	def column(column_type)
		@browser.div(class: ".ct-column.#{column_type}")
	end

	def language_label(column_type)
		column(column_type).span(class: "language-label")
	end

	def source_title
		column("source").h1(class: "source-title")
	end

	def target_title
		column("translation").text_field(class: "target-title")
	end

	def translation_editor
		@browser.div(css: ".translation div[contenteditable]")
	end
end
