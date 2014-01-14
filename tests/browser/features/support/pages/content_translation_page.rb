class ContentTranslationPage
	include PageObject
	include URL
	page_url URL.url("Special:ContentTranslation?<%=params[:extra]%>")

	a(:view_page, class: "view-page")

	button(:publish_translation, class: "cx-header__publish")

	div(:progress_bar, class: "cx-progressbar")

	div(:content, class: "content")

	a(:user_name, class: "user-name")

	def column(column_type)
		@browser.div(class: "cx-column--#{column_type}")
	end

	def language_label(column_type)
		column(column_type).span(class: "language-label")
	end

	def progress_bar_text
		@browser.div(class: "progressbar").span(class: "status-text")
	end

	def content(column_type)
		column(column_type).div(class: "cx-column__content")
	end

	def title(column_type)
		column(column_type).div(class: "cx-column__title")
	end

	def translation_editor
		content("translation")
	end
end
