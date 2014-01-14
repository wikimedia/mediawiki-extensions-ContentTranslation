class ContentTranslationPage
	include PageObject
	include URL
	page_url URL.url("Special:ContentTranslation?<%=params[:extra]%>")

	a(:view_page, class: "view-page")

	button(:publish_translation, class: "publish-translation")

	div(:progress_bar, class: "progressbar")

	div(:content, class: "content")

	a(:user_name, class: "user-name")

	def column(column_type)
		@browser.div(class: column_type)
	end

	def language_label(column_type)
		column(column_type).span(class: "language-label")
	end

	def progress_bar_text
		@browser.div(class: "progressbar").span(class: "status-text")
	end

	def source_text
		column("source").div(class: "content")
	end

	def source_title
		column("source").h1(class: "source-title")
	end

	def target_text
		column("translation").div(class: "article")
	end

	def target_title
		column("translation").text_field(class: "target-title")
	end

	def translation_editor
		column("translation").div(class: "translation-editor")
	end
end
