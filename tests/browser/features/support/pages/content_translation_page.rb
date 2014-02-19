class ContentTranslationPage
	include PageObject
	include URL
	page_url URL.url("Special:ContentTranslation?<%=params[:extra]%>")

	a(:user_name, class: "cx-header__user-details__user-name")

	button(:publish_translation, class: "cx-header__publish")

	div(:content, class: "content")
	div(:notification_bubble, class: "mw-notification-content")
	div(:progress_bar_container, class: "cx-progressbar")
	div(:search_box, class: "card search")

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
		# Fake an input event
		translation_editor_element.send_keys('a', :backspace)
	end

	def column(column_type)
		@browser.div(class: "cx-column--#{column_type}")
	end

	def language_label(column_type)
		column(column_type).span(class: "cx-column__language-label")
	end

	def content(column_type)
		column(column_type).div(class: "cx-column__content")
	end

	def notification_link_element
		notification_bubble_element.when_present.element.a
	end

	def title(column_type)
		column(column_type).h2(class: "cx-column__title")
	end

	def translation_editor_element
		content("translation")
	end

	def view_page
		column("source").span(class: "cx-column__sub-heading__view-page").a
	end
end
