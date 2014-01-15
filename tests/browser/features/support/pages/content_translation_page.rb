class ContentTranslationPage
	include PageObject
	include URL
	page_url URL.url("Special:ContentTranslation?<%=params[:extra]%>")

	a(:user_name, class: "cx-header__user-details__user-name")
	a(:view_page, class: "view-page")

	button(:publish_translation, class: "cx-header__publish")

	div(:content, class: "content")
	div(:progress_bar_container, class: "cx-progressbar")

	span(:progress_bar, class: "cx-progressbar__bar")
	span(:progress_bar_text, class: "cx-progressbar__text")

	# Sets the text of an element.
	# Selenium doesn't give us an easy generic way to do this,
	# so we use JavaScript.
	# The element is selected by a jQuery selector.
	def set_element_text(selector, text)
		@browser.execute_script("$( '#{selector}' ).text( '#{text}' )")
	end

	def empty_translation_editor
		set_element_text(".cx-column--translation .cx-column__content", "")
	end

	def column(column_type)
		@browser.div(class: "cx-column--#{column_type}")
	end

	def language_label(column_type)
		column(column_type).span(class: "language-label")
	end

	def content(column_type)
		column(column_type).div(class: "cx-column__content")
	end

	def title(column_type)
		column(column_type).h2(class: "cx-column__title")
	end

	def translation_editor
		content("translation")
	end
end
